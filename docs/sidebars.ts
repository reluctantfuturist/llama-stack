import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Start with intro and getting started, add more as we migrate them
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/index',
        'getting-started/detailed-tutorial',
        'getting-started/libraries',
      ],
    },
    {
      type: 'category',
      label: 'Concepts',
      collapsed: false,
      items: [
        'concepts/index',
        'concepts/architecture',
        'concepts/apis',
        'concepts/api-providers',
        'concepts/distributions',
        'concepts/resources',
      ],
    },
    {
      type: 'category',
      label: 'Distributions',
      collapsed: false,
      items: [
        'distributions/index',
        'distributions/list-of-distributions',
        'distributions/building-distro',
        'distributions/customizing-run-yaml',
        'distributions/importing-as-library',
        'distributions/configuration',
        'distributions/starting-llama-stack-server',
        {
          type: 'category',
          label: 'Self-Hosted Distributions',
          collapsed: true,
          items: [
            'distributions/self-hosted-distro/starter',
            'distributions/self-hosted-distro/dell',
            'distributions/self-hosted-distro/dell-tgi',
            'distributions/self-hosted-distro/meta-reference-gpu',
            'distributions/self-hosted-distro/nvidia',
            'distributions/self-hosted-distro/passthrough',
          ],
        },
        {
          type: 'category',
          label: 'Remote-Hosted Distributions',
          collapsed: true,
          items: [
            'distributions/remote-hosted-distro/index',
            'distributions/remote-hosted-distro/watsonx',
          ],
        },
        {
          type: 'category',
          label: 'On-Device Distributions',
          collapsed: true,
          items: [
            'distributions/ondevice-distro/ios-sdk',
            'distributions/ondevice-distro/android-sdk',
          ],
        },
      ],
    },
    {
      type: 'category', 
      label: 'Providers',
      collapsed: false,
      items: [
        'providers/index',
        {
          type: 'category',
          label: 'Inference',
          collapsed: true,
          items: [
            'providers/inference/index',
            'providers/inference/inline_meta-reference',
            'providers/inference/inline_sentence-transformers',
            'providers/inference/remote_anthropic',
            'providers/inference/remote_azure',
            'providers/inference/remote_bedrock',
            'providers/inference/remote_cerebras',
            'providers/inference/remote_databricks',
            'providers/inference/remote_fireworks',
            'providers/inference/remote_gemini',
            'providers/inference/remote_groq',
            'providers/inference/remote_hf_endpoint',
            'providers/inference/remote_hf_serverless',
            'providers/inference/remote_llama-openai-compat',
            'providers/inference/remote_nvidia',
            'providers/inference/remote_ollama',
            'providers/inference/remote_openai',
            'providers/inference/remote_passthrough',
            'providers/inference/remote_runpod',
            'providers/inference/remote_sambanova',
            'providers/inference/remote_sambanova-openai-compat',
            'providers/inference/remote_tgi',
            'providers/inference/remote_together',
            'providers/inference/remote_vertexai',
            'providers/inference/remote_vllm',
            'providers/inference/remote_watsonx'
          ],
        },
        {
          type: 'category',
          label: 'Safety',
          collapsed: true,
          items: [
            'providers/safety/index',
            'providers/safety/inline_code-scanner',
            'providers/safety/inline_llama-guard',
            'providers/safety/inline_prompt-guard',
            'providers/safety/remote_bedrock',
            'providers/safety/remote_nvidia',
            'providers/safety/remote_sambanova'
          ],
        },
        {
          type: 'category',
          label: 'Vector IO',
          collapsed: true,
          items: [
            'providers/vector_io/index',
            'providers/vector_io/inline_chromadb',
            'providers/vector_io/inline_faiss',
            'providers/vector_io/inline_meta-reference',
            'providers/vector_io/inline_milvus',
            'providers/vector_io/inline_qdrant',
            'providers/vector_io/inline_sqlite-vec',
            'providers/vector_io/remote_chromadb',
            'providers/vector_io/remote_milvus',
            'providers/vector_io/remote_pgvector',
            'providers/vector_io/remote_qdrant',
            'providers/vector_io/remote_weaviate'
          ],
        },
        {
          type: 'category',
          label: 'Tool Runtime',
          collapsed: true,
          items: [
            'providers/tool_runtime/index',
            'providers/tool_runtime/inline_rag-runtime',
            'providers/tool_runtime/remote_bing-search',
            'providers/tool_runtime/remote_brave-search',
            'providers/tool_runtime/remote_model-context-protocol',
            'providers/tool_runtime/remote_tavily-search',
            'providers/tool_runtime/remote_wolfram-alpha'
          ],
        },
        {
          type: 'category',
          label: 'Agents',
          collapsed: true,
          items: [
            'providers/agents/index',
            'providers/agents/inline_meta-reference'
          ],
        },
        {
          type: 'category',
          label: 'Post Training',
          collapsed: true,
          items: [
            'providers/post_training/index',
            'providers/post_training/inline_huggingface',
            'providers/post_training/inline_huggingface-cpu',
            'providers/post_training/inline_huggingface-gpu',
            'providers/post_training/inline_torchtune',
            'providers/post_training/inline_torchtune-cpu',
            'providers/post_training/inline_torchtune-gpu',
            'providers/post_training/remote_nvidia'
          ],
        },
        {
          type: 'category',
          label: 'DatasetIO',
          collapsed: true,
          items: [
            'providers/datasetio/index',
            'providers/datasetio/inline_localfs',
            'providers/datasetio/remote_huggingface',
            'providers/datasetio/remote_nvidia'
          ],
        },
        {
          type: 'category',
          label: 'Scoring',
          collapsed: true,
          items: [
            'providers/scoring/index',
            'providers/scoring/inline_basic',
            'providers/scoring/inline_braintrust',
            'providers/scoring/inline_llm-as-judge'
          ],
        },
        {
          type: 'category',
          label: 'Files',
          collapsed: true,
          items: [
            'providers/files/index',
            'providers/files/inline_localfs',
            'providers/files/remote_s3'
          ],
        },
        {
          type: 'category',
          label: 'Eval',
          collapsed: true,
          items: [
            'providers/eval/index',
            'providers/eval/inline_meta-reference',
            'providers/eval/remote_nvidia'
          ],
        },
        {
          type: 'category',
          label: 'Telemetry',
          collapsed: true,
          items: [
            'providers/telemetry/index',
            'providers/telemetry/inline_meta-reference'
          ],
        },
        {
          type: 'category',
          label: 'Batches',
          collapsed: true,
          items: [
            'providers/batches/index',
            'providers/batches/inline_reference'
          ],
        },
        {
          type: 'category',
          label: 'External Providers',
          collapsed: true,
          items: [
            'providers/external/index',
            'providers/external/external-providers-guide',
            'providers/external/external-providers-list'
          ],
        },
        'providers/openai-compatibility'
      ],
    },
    // More sections will be added during migration process
  ],

  // OpenAPI sidebar will be auto-generated when API docs are ready
  // apiSidebar: [
  //   {
  //     type: 'category',
  //     label: 'Llama Stack API',
  //     link: {
  //       type: 'generated-index',
  //       title: 'Llama Stack API Reference',
  //       description: 'Complete API reference for all Llama Stack endpoints',
  //       slug: '/category/llama-stack-api'
  //     },
  //     items: require('./docs/api/sidebar.js'), // Generated by OpenAPI plugin
  //   }
  // ],
};

export default sidebars;
