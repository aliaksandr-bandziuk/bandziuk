import { type NextRequest, NextResponse } from "next/server";
import { aiCheckAvailable, aiCheckConfig } from "@/lib/aiCheck/config";
import { buildQuestions } from "@/lib/aiCheck/prompts";
import { askEngine } from "@/lib/aiCheck/engines";
import { analyseAnswer, normaliseDomain, summarise } from "@/lib/aiCheck/analyze";
import { completeCheck, createCheck, hashIp, recentUsage } from "@/lib/aiCheck/store";
import { notifyOwner } from "@/lib/aiCheck/notify";
import type { AiCheckAnswer, AiCheckEngine, AiCheckInput, AiCheckLang } from "@/lib/aiCheck/types";

// Six live answers run in parallel and the slowest takes 10–20 s.
export const maxDuration = 60;
export const dynamic = "force-dynamic";

const ENGINES: AiCheckEngine[] = ["chatgpt", "perplexity"];
const LANGS: AiCheckLang[] = ["en", "pl", "ru"];

type Body = {
  company?: unknown;
  website?: unknown;
  service?: unknown;
  location?: unknown;
  email?: unknown;
  lang?: unknown;
  consent?: unknown;
  /** Honeypot: hidden from people, filled in by naive bots. */
  fax?: unknown;
};

const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

function clientIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

function fail(code: string, status: number) {
  return NextResponse.json({ error: code }, { status });
}

export async function POST(req: NextRequest) {
  if (!aiCheckAvailable()) return fail("unavailable", 503);

  let body: Body;
  try {
    body = await req.json();
  } catch {
    return fail("invalid", 400);
  }

  // A filled honeypot gets a normal-looking refusal, not a hint about why.
  if (str(body.fax, 100)) return fail("invalid", 400);

  const lang = LANGS.includes(body.lang as AiCheckLang) ? (body.lang as AiCheckLang) : "en";
  const input: AiCheckInput = {
    company: str(body.company, 80),
    domain: normaliseDomain(str(body.website, 200)),
    service: str(body.service, 80),
    location: str(body.location, 80),
    email: str(body.email, 120).toLowerCase(),
    lang,
  };

  if (
    input.company.length < 2 ||
    !input.domain ||
    input.service.length < 2 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(input.email) ||
    body.consent !== true
  ) {
    return fail("invalid", 400);
  }

  const ipHash = hashIp(clientIp(req));
  const usage = await recentUsage(ipHash, input.email);
  if (usage.total >= aiCheckConfig.dailyLimit) return fail("daily_limit", 429);
  if (usage.byEmail >= aiCheckConfig.perEmailLimit || usage.byIp >= aiCheckConfig.perIpLimit) {
    return fail("personal_limit", 429);
  }

  // The record is written before any money is spent, so a burst of parallel
  // requests sees the earlier ones in its count.
  const checkId = await createCheck(input, ipHash);

  const questions = buildQuestions(input);
  let cost = 0;

  const answers: AiCheckAnswer[] = await Promise.all(
    ENGINES.flatMap((engine) =>
      questions.map(async ({ kind, prompt }) => {
        const base = { engine, kind, prompt };
        try {
          const answer = await askEngine(engine, prompt);
          cost += answer.cost;
          return analyseAnswer(base, input, answer.text, answer.citations);
        } catch (err) {
          console.error(`[ai-check] ${engine}/${kind} failed:`, (err as Error).message);
          return { ...base, named: false, siteCited: false, noInformation: false, excerpt: "", sources: [], error: "engine_failed" };
        }
      }),
    ),
  );

  const report = summarise(input, answers);

  try {
    await completeCheck(checkId, report, cost);
  } catch (err) {
    console.error("[ai-check] could not store the result:", (err as Error).message);
  }
  await notifyOwner(input, report, cost);

  if (report.summary.answered === 0) return fail("engines_failed", 502);
  return NextResponse.json({ report });
}
