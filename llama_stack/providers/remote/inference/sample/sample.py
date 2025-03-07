# Copyright (c) Meta Platforms, Inc. and affiliates.
# All rights reserved.
#
# This source code is licensed under the terms described in the LICENSE file in
# the root directory of this source tree.

from llama_stack.apis.inference import Inference
from llama_stack.apis.models import Model

from .config import SampleConfig


class SampleInferenceImpl(Inference):
    def __init__(self, config: SampleConfig):
        self.config = config

    async def register_model(self, model: Model) -> None:
        # these are the model names the Llama Stack will use to route requests to this provider
        # perform validation here if necessary
        pass

    async def initialize(self):
        pass
