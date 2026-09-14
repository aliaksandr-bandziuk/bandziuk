import { aiCheckConfig } from "./config";
import type { AiCheckEngine, EngineAnswer } from "./types";

const ENDPOINT: Record<AiCheckEngine, string> = {
  chatgpt: "https://api.dataforseo.com/v3/ai_optimization/chat_gpt/llm_responses/live",
  perplexity: "https://api.dataforseo.com/v3/ai_optimization/perplexity/llm_responses/live",
};

function payload(engine: AiCheckEngine, prompt: string) {
  if (engine === "perplexity") {
    return [{ user_prompt: prompt, model_name: "sonar", max_output_tokens: 900, temperature: 0.2 }];
  }
  // web_search must be on: without it ChatGPT answers from training data and the
  // check would describe the model's memory, not what a buyer sees today.
  return [{ user_prompt: prompt, model_name: "gpt-4.1-mini", max_output_tokens: 900, temperature: 0.2, web_search: true }];
}

type Section = { text?: string | null; annotations?: { url?: string | null }[] | null };
type Item = { sections?: Section[] | null };

/**
 * One live call. Both engines return the same shape: items[].sections[] with
 * the answer text and annotations carrying the cited URLs.
 */
export async function askEngine(engine: AiCheckEngine, prompt: string): Promise<EngineAnswer> {
  const auth = Buffer.from(`${aiCheckConfig.login}:${aiCheckConfig.password}`).toString("base64");

  const res = await fetch(ENDPOINT[engine], {
    method: "POST",
    headers: { Authorization: `Basic ${auth}`, "Content-Type": "application/json" },
    body: JSON.stringify(payload(engine, prompt)),
    signal: AbortSignal.timeout(aiCheckConfig.engineTimeoutMs),
    cache: "no-store",
  });

  if (!res.ok) throw new Error(`DataForSEO HTTP ${res.status}`);

  const json = await res.json();
  const task = json?.tasks?.[0];
  // A non-20000 task status is a failed answer even when the HTTP call succeeded.
  if (!task || task.status_code !== 20000) {
    throw new Error(`DataForSEO task ${task?.status_code ?? "missing"}: ${task?.status_message ?? ""}`.trim());
  }

  const items: Item[] = task.result?.[0]?.items ?? [];
  const sections = items.flatMap((item) => item.sections ?? []);

  return {
    text: sections.map((s) => s.text ?? "").join("\n").trim(),
    citations: sections.flatMap((s) => (s.annotations ?? []).map((a) => a.url ?? "")).filter(Boolean),
    cost: typeof json.cost === "number" ? json.cost : 0,
  };
}
