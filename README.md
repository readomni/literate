# LiTERatE - Literary Translation Evaluation and Rating Ensemble

LiTERatE is a benchmark specifically designed for evaluating machine translation systems on literary text from Chinese, Japanese, and Korean languages. Unlike traditional MT benchmarks that focus on news articles, technical documentation, or general text, LiTERatE focuses on the unique challenges of literary translation with its creative and nuanced nature.

## Overview

Our evaluation uses chunks of 200-500 CJK characters as the basic unit, providing terminology glossaries and contextual information to all systems. An ensemble of LLMs judges translations through head-to-head comparisons with human translations, achieving 82% accuracy compared to decisive human judgments.

The scores below represent each system's win rate against human translators (0-100). A score of 50 indicates parity with human translation quality, while higher scores suggest superior performance.

This repository contains the website for the LiTERatE benchmark, which showcases the leaderboard of various machine translation systems evaluated on literary translation tasks.

## LiTERatE Leaderboard

The scores below represent the overall head-to-head win-rate versus human translators for each system.

| Rank | Model | Version | Win Rate (%) |
|------|-------|---------|-------------|
| 1 | [Deepseek R1](https://huggingface.co/deepseek-ai/DeepSeek-R1) | — | 87.3 |
| 2 | [Omni Qi](https://readomni.com) | — | 67.6 |
| 3 | [o3-mini](https://platform.openai.com/docs/models#o3-mini) | o3-mini-2025-01-31 | 62.7 |
| 4 | [GPT-4o](https://platform.openai.com/docs/models#gpt-4o) | gpt-4o-2024-11-20 | 61.0 |
| 5 | [Deepseek V3](https://huggingface.co/deepseek-ai/DeepSeek-V3) | — | 57.7 |
| 6 | [Claude 3.7 Sonnet](https://docs.anthropic.com/en/docs/about-claude/models/all-models) | claude-3-7-sonnet-20250219 | 54.0 |
| 7 | [Claude 3.5 Sonnet](https://docs.anthropic.com/en/docs/about-claude/models/all-models) | claude-3-5-sonnet-20241022 | 52.0 |
| 8 | [Gemini 1.5 Pro](https://ai.google.dev/gemini-api/docs/models/gemini#gemini-1.5-pro) | gemini-1.5-pro-002 | 50.7 |
| 9 | [Qwen Max](https://www.alibabacloud.com/help/en/model-studio/getting-started/models#c2d5833ae4jmo) | qwen-max-2025-01-25 | 49.3 |
| 10 | [Qwen Plus](https://www.alibabacloud.com/help/en/model-studio/getting-started/models#6ad3cd90f0c5r) | qwen-plus-2025-01-25 | 49.3 |
| 11 | [Gemini 2.0 Flash](https://ai.google.dev/gemini-api/docs/models/gemini#gemini-2.0-flash) | gemini-2.0-flash-001 | 43.0 |
| 12 | [Mistral Large](https://docs.mistral.ai/getting-started/models/models_overview/) | mistral-large-2411 | 40.0 |
| 13 | [Gemini Flash 1.5 8B](https://ai.google.dev/gemini-api/docs/models/gemini#gemini-1.5-flash-8b) | gemini-1.5-flash-8b-001 | 38.3 |
| 14 | [GPT-4o-mini](https://platform.openai.com/docs/models#gpt-4o-mini) | gpt-4o-mini-2024-07-18 | 35.3 |
| 15 | [Phi-4](https://huggingface.co/microsoft/phi-4) | — | 33.0 |
| 16 | [Llama 3.3 70B](https://huggingface.co/meta-llama/Llama-3.3-70B-Instruct) | llama-3.3-70b-instruct | 32.7 |
| 17 | [Gemini 2.0 Flash Lite](https://ai.google.dev/gemini-api/docs/models/gemini#gemini-2.0-flash-lite) | gemini-2.0-flash-lite-001 | 31.3 |
| 18 | [Claude 3.5 Haiku](https://docs.anthropic.com/en/docs/about-claude/models/all-models) | claude-3-5-haiku-20241022 | 30.7 |
| 19 | [Mistral Small 3](https://docs.mistral.ai/getting-started/models/models_overview/) | mistral-small-24b-instruct-2501 | 27.7 |
| 20 | [Qwen Turbo](https://www.alibabacloud.com/help/en/model-studio/getting-started/models#ede6678dedqbz) | qwen-turbo-2024-11-01 | 27.3 |
| 21 | [Google Translate (NMT)](https://cloud.google.com/translate) | — | 6.7 |

*Last updated: 2025-02-27*
