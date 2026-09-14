import crypto from "crypto";
import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "@/sanity/sanity.client";
import { aiCheckConfig } from "./config";
import type { AiCheckInput, AiCheckReport } from "./types";

/**
 * Every check is stored as an `aiVisibilityCheck` document. That one record does
 * two jobs: the rate limits count it, and it is the lead list in Studio.
 *
 * This client never uses the CDN. The shared site client does in production,
 * and a limit counted from a cached query could be stale by minutes — exactly
 * the window in which someone scripting the form would burn the budget.
 */
const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

export function hashIp(ip: string): string {
  return crypto.createHash("sha256").update(`${aiCheckConfig.ipSalt}:${ip}`).digest("hex").slice(0, 32);
}

export type LimitState = { total: number; byIp: number; byEmail: number };

export async function recentUsage(ipHash: string, email: string): Promise<LimitState> {
  return writeClient.fetch(
    `{
      "total": count(*[_type == "aiVisibilityCheck" && dateTime(createdAt) > dateTime(now()) - 86400]),
      "byIp": count(*[_type == "aiVisibilityCheck" && ipHash == $ipHash && dateTime(createdAt) > dateTime(now()) - 86400]),
      "byEmail": count(*[_type == "aiVisibilityCheck" && email == $email && dateTime(createdAt) > dateTime(now()) - 86400])
    }`,
    { ipHash, email },
    { cache: "no-store" },
  );
}

export async function createCheck(input: AiCheckInput, ipHash: string): Promise<string> {
  const doc = await writeClient.create({
    _type: "aiVisibilityCheck",
    createdAt: new Date().toISOString(),
    status: "running",
    company: input.company,
    domain: input.domain,
    service: input.service,
    location: input.location,
    email: input.email,
    lang: input.lang,
    ipHash,
  });
  return doc._id;
}

export async function completeCheck(id: string, report: AiCheckReport, cost: number): Promise<void> {
  const failedAll = report.summary.answered === 0;
  await writeClient
    .patch(id)
    .set({
      status: failedAll ? "failed" : "done",
      cost: Math.round(cost * 10000) / 10000,
      summary: report.summary,
      answers: report.answers.map((a, i) => ({
        _key: `a${i}`,
        engine: a.engine,
        kind: a.kind,
        prompt: a.prompt,
        named: a.named,
        siteCited: a.siteCited,
        noInformation: a.noInformation,
        excerpt: a.excerpt,
        sources: a.sources,
        error: a.error ?? null,
      })),
    })
    .commit();
}
