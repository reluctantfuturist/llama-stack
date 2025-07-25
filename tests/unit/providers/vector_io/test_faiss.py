# Copyright (c) Meta Platforms, Inc. and affiliates.
# All rights reserved.
#
# This source code is licensed under the terms described in the LICENSE file in
# the root directory of this source tree.

import asyncio
from unittest.mock import AsyncMock, MagicMock, patch

import numpy as np
import pytest
import pytest_asyncio

from llama_stack.apis.inference import EmbeddingsResponse, Inference
from llama_stack.apis.vector_dbs import VectorDB
from llama_stack.apis.vector_io import Chunk, QueryChunksResponse
from llama_stack.providers.inline.vector_io.faiss.config import FaissVectorIOConfig
from llama_stack.providers.inline.vector_io.faiss.faiss import (
    FaissIndex,
    FaissVectorIOAdapter,
)

# This test is a unit test for the FaissVectorIOAdapter class. This should only contain
# tests which are specific to this class. More general (API-level) tests should be placed in
# tests/integration/vector_io/
#
# How to run this test:
#
# pytest tests/unit/providers/vector_io/test_faiss.py \
# -v -s --tb=short --disable-warnings --asyncio-mode=auto

FAISS_PROVIDER = "faiss"


@pytest.fixture(scope="session")
def loop():
    return asyncio.new_event_loop()


@pytest.fixture
def embedding_dimension():
    return 384


@pytest.fixture
def vector_db_id():
    return "test_vector_db"


@pytest.fixture
def sample_chunks():
    return [
        Chunk(content="MOCK text content 1", mime_type="text/plain", metadata={"document_id": "mock-doc-1"}),
        Chunk(content="MOCK text content 1", mime_type="text/plain", metadata={"document_id": "mock-doc-2"}),
    ]


@pytest.fixture
def sample_embeddings(embedding_dimension):
    return np.random.rand(2, embedding_dimension).astype(np.float32)


@pytest.fixture
def mock_vector_db(vector_db_id, embedding_dimension) -> MagicMock:
    mock_vector_db = MagicMock(spec=VectorDB)
    mock_vector_db.embedding_model = "mock_embedding_model"
    mock_vector_db.identifier = vector_db_id
    mock_vector_db.embedding_dimension = embedding_dimension
    return mock_vector_db


@pytest.fixture
def mock_inference_api(sample_embeddings):
    mock_api = MagicMock(spec=Inference)
    mock_api.embeddings = AsyncMock(return_value=EmbeddingsResponse(embeddings=sample_embeddings))
    return mock_api


@pytest.fixture
def faiss_config():
    config = MagicMock(spec=FaissVectorIOConfig)
    config.kvstore = None
    return config


@pytest_asyncio.fixture
async def faiss_index(embedding_dimension):
    index = await FaissIndex.create(dimension=embedding_dimension)
    yield index


@pytest_asyncio.fixture
async def faiss_adapter(faiss_config, mock_inference_api) -> FaissVectorIOAdapter:
    adapter = FaissVectorIOAdapter(config=faiss_config, inference_api=mock_inference_api)
    await adapter.initialize()
    yield adapter
    await adapter.shutdown()


@pytest.mark.asyncio
async def test_faiss_query_vector_returns_infinity_when_query_and_embedding_are_identical(
    faiss_index, sample_chunks, sample_embeddings, embedding_dimension
):
    await faiss_index.add_chunks(sample_chunks, sample_embeddings)
    query_embedding = np.random.rand(embedding_dimension).astype(np.float32)

    with patch.object(faiss_index.index, "search") as mock_search:
        mock_search.return_value = (np.array([[0.0, 0.1]]), np.array([[0, 1]]))

        response = await faiss_index.query_vector(embedding=query_embedding, k=2, score_threshold=0.0)

        assert isinstance(response, QueryChunksResponse)
        assert len(response.chunks) == 2
        assert len(response.scores) == 2

        assert response.scores[0] == float("inf")  # infinity (1.0 / 0.0)
        assert response.scores[1] == 10.0  # (1.0 / 0.1 = 10.0)

        assert response.chunks[0] == sample_chunks[0]
        assert response.chunks[1] == sample_chunks[1]
