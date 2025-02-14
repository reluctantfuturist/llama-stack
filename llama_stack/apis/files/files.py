# Copyright (c) Meta Platforms, Inc. and affiliates.
# All rights reserved.
#
# This source code is licensed under the terms described in the LICENSE file in
# the root directory of this source tree.

from typing import List, Optional, Protocol, runtime_checkable

from llama_models.schema_utils import json_schema_type, webmethod
from pydantic import BaseModel

from llama_stack.providers.utils.telemetry.trace_protocol import trace_protocol


@json_schema_type
class FileResponse(BaseModel):
    key: str
    bucket: str
    mime_type: str
    url: str
    bytes: int
    created_at: int


@json_schema_type
class ListFileResponse(BaseModel):
    data: List[FileResponse]


@runtime_checkable
@trace_protocol
class Files(Protocol):
    @webmethod(route="/files/{bucket}", method="GET")
    async def list_bucket(
        self,
        bucket: str,
    ) -> Optional[ListFileResponse]: ...

    @webmethod(route="/files/{bucket}/{key:path}", method="GET")
    async def get_file(
        self,
        bucket: str,
        key: str,
    ) -> Optional[ListFileResponse]: ...

    @webmethod(route="/files/{bucket}/{key:path}", method="DELETE")
    async def delete_file(
        self,
        bucket: str,
        key: str,
    ) -> Optional[ListFileResponse]: ...
