export interface ModelData {
	model: string;
	score: number;
	version?: string;
	link?: string;
}

export const leaderboardData: ModelData[] = [
	{
		model: "Omni Wu Max Experimental",
		score: 94.7,
		link: "https://readomni.com",
	},
	{
		model: "Omni Wu Flash",
		score: 90.6,
		link: "https://readomni.com",
	},
	{
		model: "Deepseek R1",
		score: 87.3,
		link: "https://huggingface.co/deepseek-ai/DeepSeek-R1",
	},
	{
		model: "Omni Wu Mini",
		score: 84.3,
		link: "https://readomni.com",
	},
	{
		model: "Omni Qi",
		score: 67.6,
		link: "https://readomni.com",
	},
	{
		model: "o3-mini",
		score: 62.7,
		version: "o3-mini-2025-01-31",
		link: "https://platform.openai.com/docs/models#o3-mini",
	},
	{
		model: "GPT-4o",
		score: 61.0,
		version: "gpt-4o-2024-11-20",
		link: "https://platform.openai.com/docs/models#gpt-4o",
	},
	{
		model: "Deepseek V3",
		score: 57.7,
		link: "https://huggingface.co/deepseek-ai/DeepSeek-V3",
	},
	{
		model: "Claude 3.7 Sonnet",
		score: 54.0,
		version: "claude-3-7-sonnet-20250219",
		link: "https://docs.anthropic.com/en/docs/about-claude/models/all-models",
	},
	{
		model: "Claude 3.5 Sonnet",
		score: 52.0,
		version: "claude-3-5-sonnet-20241022",
		link: "https://docs.anthropic.com/en/docs/about-claude/models/all-models",
	},
	{
		model: "Gemini 1.5 Pro",
		score: 50.7,
		version: "gemini-1.5-pro-002",
		link: "https://ai.google.dev/gemini-api/docs/models/gemini#gemini-1.5-pro",
	},
	{
		model: "Qwen Max",
		score: 49.3,
		version: "qwen-max-2025-01-25",
		link: "https://www.alibabacloud.com/help/en/model-studio/getting-started/models#c2d5833ae4jmo",
	},
	{
		model: "Qwen Plus",
		score: 49.3,
		version: "qwen-plus-2025-01-25",
		link: "https://www.alibabacloud.com/help/en/model-studio/getting-started/models#6ad3cd90f0c5r",
	},
	{
		model: "Gemini 2.0 Flash",
		score: 43.0,
		version: "gemini-2.0-flash-001",
		link: "https://ai.google.dev/gemini-api/docs/models/gemini#gemini-2.0-flash",
	},
	{
		model: "Mistral Large",
		score: 40.0,
		version: "mistral-large-2411",
		link: "https://docs.mistral.ai/getting-started/models/models_overview/",
	},
	{
		model: "Gemini Flash 1.5 8B",
		score: 38.3,
		version: "gemini-1.5-flash-8b-001",
		link: "https://ai.google.dev/gemini-api/docs/models/gemini#gemini-1.5-flash-8b",
	},
	{
		model: "GPT-4o-mini",
		score: 35.3,
		version: "gpt-4o-mini-2024-07-18",
		link: "https://platform.openai.com/docs/models#gpt-4o-mini",
	},
	{
		model: "Phi-4",
		score: 33.0,
		link: "https://huggingface.co/microsoft/phi-4",
	},
	{
		model: "Llama 3.3 70B",
		score: 32.7,
		version: "llama-3.3-70b-instruct",
		link: "https://huggingface.co/meta-llama/Llama-3.3-70B-Instruct",
	},
	{
		model: "Gemini 2.0 Flash Lite",
		score: 31.3,
		version: "gemini-2.0-flash-lite-001",
		link: "https://ai.google.dev/gemini-api/docs/models/gemini#gemini-2.0-flash-lite",
	},
	{
		model: "Claude 3.5 Haiku",
		score: 30.7,
		version: "claude-3-5-haiku-20241022",
		link: "https://docs.anthropic.com/en/docs/about-claude/models/all-models",
	},
	{
		model: "Mistral Small 3",
		score: 27.7,
		version: "mistral-small-24b-instruct-2501",
		link: "https://docs.mistral.ai/getting-started/models/models_overview/",
	},
	{
		model: "Qwen Turbo",
		score: 27.3,
		version: "qwen-turbo-2024-11-01",
		link: "https://www.alibabacloud.com/help/en/model-studio/getting-started/models#ede6678dedqbz",
	},
	{
		model: "Google Translate (NMT)",
		score: 6.7,
		link: "https://cloud.google.com/translate",
	},
];
