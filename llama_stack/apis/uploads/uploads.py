# Copyright (c) Meta Platforms, Inc. and affiliates.
# All rights reserved.
#
# This source code is licensed under the terms described in the LICENSE file in
# the root directory of this source tree.

from typing import Optional, Protocol, runtime_checkable

from llama_models.schema_utils import json_schema_type, webmethod
from pydantic import BaseModel

from llama_stack.apis.files import FileResponse
from llama_stack.providers.utils.telemetry.trace_protocol import trace_protocol


@json_schema_type
class UploadResponse(BaseModel):
    id: str
    url: str


@runtime_checkable
@trace_protocol
class Uploads(Protocol):
    @webmethod(route="/uploads", method="POST")
    async def init_upload(
        self,
        bucket: str,
        key: str,
        mime_type: str,
    ) -> Optional[UploadResponse]: ...

    @webmethod(route="/uploads/{upload_id}", method="POST")
    async def upload_content(
        self,
        upload_id: str,
        bytes: bytearray,
    ) -> Optional[FileResponse]: ...
