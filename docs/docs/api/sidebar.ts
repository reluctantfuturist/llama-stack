import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/llama-stack-specification",
    },
    {
      type: "category",
      label: "Agents",
      link: {
        type: "doc",
        id: "api/agents",
      },
      items: [
        {
          type: "doc",
          id: "api/list-agents",
          label: "List all agents.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/create-agent",
          label: "Create an agent with the given configuration.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/create-agent-session",
          label: "Create a new session for an agent.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/create-agent-turn",
          label: "Create a new turn for an agent.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/list-openai-responses",
          label: "List all OpenAI responses.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/create-openai-response",
          label: "Create a new OpenAI response.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-agent",
          label: "Describe an agent by its ID.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/delete-agent",
          label: "Delete an agent by its ID and its associated sessions and turns.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/get-agents-session",
          label: "Retrieve an agent session by its ID.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/delete-agents-session",
          label: "Delete an agent session by its ID and its associated turns.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/get-openai-response",
          label: "Retrieve an OpenAI response by its ID.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/delete-openai-response",
          label: "Delete an OpenAI response by its ID.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/get-agents-step",
          label: "Retrieve an agent step by its ID.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-agents-turn",
          label: "Retrieve an agent turn by its ID.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/list-agent-sessions",
          label: "List all session(s) of a given agent.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/list-openai-response-input-items",
          label: "List input items for a given OpenAI response.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/resume-agent-turn",
          label: "Resume an agent turn with executed tool call responses.",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Batch inference API for generating completions and chat completions.",
      link: {
        type: "doc",
        id: "api/batch-inference-coming-soon",
      },
      items: [
        {
          type: "doc",
          id: "api/chat-completion",
          label: "Generate a chat completion for the given messages using the specified model.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/completion",
          label: "Generate a completion for the given content using the specified model.",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Benchmarks",
      link: {
        type: "doc",
        id: "api/benchmarks",
      },
      items: [
        {
          type: "doc",
          id: "api/get-benchmark",
          label: "Get a benchmark by its ID.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/list-benchmarks",
          label: "List all benchmarks.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/register-benchmark",
          label: "Register a benchmark.",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "DatasetIO",
      link: {
        type: "doc",
        id: "api/dataset-io",
      },
      items: [
        {
          type: "doc",
          id: "api/append-rows",
          label: "Append rows to a dataset.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/iterrows",
          label: "Get a paginated list of rows from a dataset.",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Datasets",
      link: {
        type: "doc",
        id: "api/datasets",
      },
      items: [
        {
          type: "doc",
          id: "api/get-dataset",
          label: "Get a dataset by its ID.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/unregister-dataset",
          label: "Unregister a dataset by its ID.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/list-datasets",
          label: "List all datasets.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/register-dataset",
          label: "Register a new dataset.",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Llama Stack Evaluation API for running evaluations on model and agent candidates.",
      link: {
        type: "doc",
        id: "api/eval",
      },
      items: [
        {
          type: "doc",
          id: "api/evaluate-rows",
          label: "Evaluate a list of rows on a benchmark.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/job-status",
          label: "Get the status of a job.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/job-cancel",
          label: "Cancel a job.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/job-result",
          label: "Get the result of a job.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/run-eval",
          label: "Run an evaluation on a benchmark.",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Files",
      link: {
        type: "doc",
        id: "api/files",
      },
      items: [
        {
          type: "doc",
          id: "api/openai-retrieve-file",
          label: "Returns information about a specific file.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/openai-delete-file",
          label: "Delete a file.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/openai-list-files",
          label: "Returns a list of files that belong to the user's organization.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/openai-upload-file",
          label: "Upload a file that can be used across various endpoints.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/openai-retrieve-file-content",
          label: "Returns the contents of the specified file.",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Llama Stack Inference API for generating completions, chat completions, and embeddings.",
      link: {
        type: "doc",
        id: "api/inference",
      },
      items: [
        {
          type: "doc",
          id: "api/batch-chat-completion",
          label: "Generate chat completions for a batch of messages using the specified model.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/batch-completion",
          label: "Generate completions for a batch of content using the specified model.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/embeddings",
          label: "Generate embeddings for content pieces using the specified model.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-chat-completion",
          label: "Describe a chat completion by its ID.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/list-chat-completions",
          label: "List all chat completions.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/openai-chat-completion",
          label: "Generate an OpenAI-compatible chat completion for the given messages using the specified model.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/openai-completion",
          label: "Generate an OpenAI-compatible completion for the given prompt using the specified model.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/openai-embeddings",
          label: "Generate OpenAI-compatible embeddings for the given input using the specified model.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/rerank",
          label: "Rerank a list of documents based on their relevance to a query.",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Inspect",
      link: {
        type: "doc",
        id: "api/inspect",
      },
      items: [
        {
          type: "doc",
          id: "api/health",
          label: "Get the current health status of the service.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/list-routes",
          label: "List all available API routes with their methods and implementing providers.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/version",
          label: "Get the version of the service.",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Models",
      link: {
        type: "doc",
        id: "api/models",
      },
      items: [
        {
          type: "doc",
          id: "api/get-model",
          label: "Get a model by its identifier.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/unregister-model",
          label: "Unregister a model.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/list-models",
          label: "List all models.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/register-model",
          label: "Register a model.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/openai-list-models",
          label: "List models using the OpenAI API.",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "PostTraining (Coming Soon)",
      link: {
        type: "doc",
        id: "api/post-training-coming-soon",
      },
      items: [
        {
          type: "doc",
          id: "api/cancel-training-job",
          label: "Cancel a training job.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-training-job-artifacts",
          label: "Get the artifacts of a training job.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-training-job-status",
          label: "Get the status of a training job.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-training-jobs",
          label: "Get all training jobs.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/preference-optimize",
          label: "Run preference optimization of a model.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/supervised-fine-tune",
          label: "Run supervised fine-tuning of a model.",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Protocol for prompt management operations.",
      link: {
        type: "doc",
        id: "api/prompts",
      },
      items: [
        {
          type: "doc",
          id: "api/list-prompts",
          label: "List all prompts.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/create-prompt",
          label: "Create a new prompt.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-prompt",
          label: "Get a prompt by its identifier and optional version.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/update-prompt",
          label: "Update an existing prompt (increments version).",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/delete-prompt",
          label: "Delete a prompt.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/list-prompt-versions",
          label: "List all versions of a specific prompt.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/set-default-version",
          label: "Set which version of a prompt should be the default in get_prompt (latest).",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Providers API for inspecting, listing, and modifying providers and their configurations.",
      link: {
        type: "doc",
        id: "api/providers",
      },
      items: [
        {
          type: "doc",
          id: "api/inspect-provider",
          label: "Get detailed information about a specific provider.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/list-providers",
          label: "List all available providers.",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Safety",
      link: {
        type: "doc",
        id: "api/safety",
      },
      items: [
        {
          type: "doc",
          id: "api/run-moderation",
          label: "Classifies if text and/or image inputs are potentially harmful.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/run-shield",
          label: "Run a shield.",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Scoring",
      link: {
        type: "doc",
        id: "api/scoring",
      },
      items: [
        {
          type: "doc",
          id: "api/score",
          label: "Score a list of rows.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/score-batch",
          label: "Score a batch of rows.",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "ScoringFunctions",
      link: {
        type: "doc",
        id: "api/scoring-functions",
      },
      items: [
        {
          type: "doc",
          id: "api/get-scoring-function",
          label: "Get a scoring function by its ID.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/list-scoring-functions",
          label: "List all scoring functions.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/register-scoring-function",
          label: "Register a scoring function.",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Shields",
      link: {
        type: "doc",
        id: "api/shields",
      },
      items: [
        {
          type: "doc",
          id: "api/get-shield",
          label: "Get a shield by its identifier.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/unregister-shield",
          label: "Unregister a shield.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/list-shields",
          label: "List all shields.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/register-shield",
          label: "Register a shield.",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "SyntheticDataGeneration (Coming Soon)",
      link: {
        type: "doc",
        id: "api/synthetic-data-generation-coming-soon",
      },
      items: [
        {
          type: "doc",
          id: "api/synthetic-data-generate",
          label: "Generate synthetic data based on input dialogs and apply filtering.",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Telemetry",
      link: {
        type: "doc",
        id: "api/telemetry",
      },
      items: [
        {
          type: "doc",
          id: "api/get-span",
          label: "Get a span by its ID.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-span-tree",
          label: "Get a span tree by its ID.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-trace",
          label: "Get a trace by its ID.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/log-event",
          label: "Log an event.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/query-metrics",
          label: "Query metrics.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/query-spans",
          label: "Query spans.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/query-traces",
          label: "Query traces.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/save-spans-to-dataset",
          label: "Save spans to a dataset.",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "ToolGroups",
      link: {
        type: "doc",
        id: "api/tool-groups",
      },
      items: [
        {
          type: "doc",
          id: "api/get-tool",
          label: "Get a tool by its name.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-tool-group",
          label: "Get a tool group by its ID.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/unregister-toolgroup",
          label: "Unregister a tool group.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/list-tool-groups",
          label: "List tool groups with optional provider.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/register-tool-group",
          label: "Register a tool group.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/list-tools",
          label: "List tools with optional tool group.",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "ToolRuntime",
      link: {
        type: "doc",
        id: "api/tool-runtime",
      },
      items: [
        {
          type: "doc",
          id: "api/insert",
          label: "Index documents so they can be used by the RAG system.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/invoke-tool",
          label: "Run a tool with the given arguments.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/list-runtime-tools",
          label: "List all tools in the runtime.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/query",
          label: "Query the RAG system for context; typically invoked by the agent.",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "VectorDBs",
      link: {
        type: "doc",
        id: "api/vector-d-bs",
      },
      items: [
        {
          type: "doc",
          id: "api/get-vector-db",
          label: "Get a vector database by its identifier.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/unregister-vector-db",
          label: "Unregister a vector database.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/list-vector-dbs",
          label: "List all vector databases.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/register-vector-db",
          label: "Register a vector database.",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "VectorIO",
      link: {
        type: "doc",
        id: "api/vector-io",
      },
      items: [
        {
          type: "doc",
          id: "api/insert-chunks",
          label: "Insert chunks into a vector database.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/openai-list-files-in-vector-store",
          label: "List files in a vector store.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/openai-attach-file-to-vector-store",
          label: "Attach a file to a vector store.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/openai-list-vector-stores",
          label: "Returns a list of vector stores.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/openai-create-vector-store",
          label: "Creates a vector store.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/openai-retrieve-vector-store",
          label: "Retrieves a vector store.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/openai-update-vector-store",
          label: "Updates a vector store.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/openai-delete-vector-store",
          label: "Delete a vector store.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/openai-retrieve-vector-store-file",
          label: "Retrieves a vector store file.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/openai-update-vector-store-file",
          label: "Updates a vector store file.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/openai-delete-vector-store-file",
          label: "Delete a vector store file.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/openai-retrieve-vector-store-file-contents",
          label: "Retrieves the contents of a vector store file.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/openai-search-vector-store",
          label: "Search for chunks in a vector store.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/query-chunks",
          label: "Query chunks from a vector database.",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
