import { NextRequest, NextResponse } from "next/server";
import { parseSitemap } from "@/lib/llmsTxt/generate";

/**
 * Reads a site's sitemap and hands the URL list back to the generator page.
 *
 * It fetches the sitemap and nothing else. Crawling the pages themselves to
 * read their titles would mean dozens of outbound requests per click, and this
 * project has already exceeded Vercel's CPU allowance once (CLAUDE.md §13);
 * titles are derived from the paths in the browser instead, and the user edits
 * them. One request in, at most four out.
 *
 * Guards, in order: same origin, small body, http(s) only, no private or
 * loopback hosts, per-IP and per-instance rate limit, response size and time
 * caps. Host filtering is by name, so a public hostname that resolves to a
 * private address is not caught — a real SSRF guard needs DNS resolution, and
 * for fetching a public sitemap that is more machinery than the risk warrants.
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const WINDOW_MS = 10 * 60 * 1000;
const PER_IP = 12;
const PER_INSTANCE = 120;
const MAX_BYTES = 2 * 1024 * 1024;
const FETCH_TIMEOUT_MS = 6000;
const MAX_CHILD_SITEMAPS = 3;

const hits = new Map<string, number[]>();
let instanceHits: number[] = [];

const recent = (list: number[], now: number) => list.filter((t) => now - t < WINDOW_MS);

function rateLimited(ip: string, now = Date.now()): boolean {
  instanceHits = recent(instanceHits, now);
  const forIp = recent(hits.get(ip) ?? [], now);
  if (forIp.length >= PER_IP || instanceHits.length >= PER_INSTANCE) {
    hits.set(ip, forIp);
    return true;
  }
  forIp.push(now);
  instanceHits.push(now);
  hits.set(ip, forIp);
  if (hits.size > 5000) hits.clear();
  return false;
}

function clientIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

function sameOrigin(req: NextRequest): boolean {
  const origin = req.headers.get("origin");
  if (!origin) return false;
  try {
    const host = req.headers.get("x-forwarded-host") ?? req.headers.get("host");
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

/**
 * Written out rather than as one regex: the first version anchored every
 * alternative with `$`, so a prefix like "192.168." never matched and
 * 192.168.1.1 sailed through.
 */
function isPrivateHost(hostname: string): boolean {
  const host = hostname.toLowerCase().replace(/^\[|\]$/g, "");
  if (host === "localhost" || host.endsWith(".local") || host.endsWith(".localhost")) return true;
  if (host === "::1" || host.startsWith("fe80:") || host.startsWith("fc") || host.startsWith("fd")) return true;

  const ipv4 = host.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);
  if (ipv4) {
    const a = Number(ipv4[1]);
    const b = Number(ipv4[2]);
    if (a === 0 || a === 10 || a === 127) return true;
    if (a === 192 && b === 168) return true;
    if (a === 172 && b >= 16 && b <= 31) return true;
    if (a === 169 && b === 254) return true;
  }
  return false;
}

function safeUrl(raw: string): URL | null {
  let u: URL;
  try {
    u = new URL(/^https?:\/\//i.test(raw) ? raw : `https://${raw}`);
  } catch {
    return null;
  }
  if (u.protocol !== "https:" && u.protocol !== "http:") return null;
  if (isPrivateHost(u.hostname)) return null;
  if (!u.hostname.includes(".")) return null;
  return u;
}

async function fetchText(url: string): Promise<string | null> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      redirect: "follow",
      headers: { "user-agent": "bandziuk.com llms.txt generator (+https://www.bandziuk.com/tools/llms-txt-generator)" },
      cache: "no-store",
    });
    if (!res.ok) return null;
    const length = Number(res.headers.get("content-length") ?? 0);
    if (length > MAX_BYTES) return null;
    const text = await res.text();
    return text.length > MAX_BYTES ? text.slice(0, MAX_BYTES) : text;
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

export async function POST(req: NextRequest) {
  if (!sameOrigin(req)) return NextResponse.json({ error: "origin" }, { status: 403 });
  if (Number(req.headers.get("content-length") ?? 0) > 4096)
    return NextResponse.json({ error: "too large" }, { status: 413 });
  if (rateLimited(clientIp(req)))
    return NextResponse.json({ error: "rate-limit" }, { status: 429 });

  let body: { url?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "bad-json" }, { status: 400 });
  }
  if (typeof body.url !== "string" || body.url.length > 300)
    return NextResponse.json({ error: "bad-url" }, { status: 400 });

  const target = safeUrl(body.url);
  if (!target) return NextResponse.json({ error: "bad-url" }, { status: 400 });

  // A sitemap address is used as given; anything else is treated as a site root.
  const candidates = /\.xml($|\?)/i.test(target.pathname)
    ? [target.toString()]
    : [new URL("/sitemap.xml", target).toString(), new URL("/sitemap_index.xml", target).toString()];

  let xml: string | null = null;
  let used = "";
  for (const c of candidates) {
    xml = await fetchText(c);
    if (xml && /<(urlset|sitemapindex)[\s>]/i.test(xml)) {
      used = c;
      break;
    }
    xml = null;
  }
  if (!xml) return NextResponse.json({ error: "no-sitemap" }, { status: 404 });

  let { locs, isIndex } = parseSitemap(xml);

  if (isIndex) {
    const children = locs.slice(0, MAX_CHILD_SITEMAPS);
    const collected: string[] = [];
    for (const child of children) {
      const childXml = await fetchText(child);
      if (childXml) collected.push(...parseSitemap(childXml).locs);
    }
    locs = [...new Set(collected)];
  }

  if (!locs.length) return NextResponse.json({ error: "empty-sitemap" }, { status: 404 });

  return NextResponse.json({
    host: target.hostname,
    sitemap: used,
    truncated: isIndex && parseSitemap(xml).locs.length > MAX_CHILD_SITEMAPS,
    urls: locs.slice(0, 1000),
  });
}
