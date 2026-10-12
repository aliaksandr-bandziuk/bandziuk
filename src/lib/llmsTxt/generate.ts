// Pure helpers behind /tools/llms-txt-generator. No network here on purpose:
// the fetching lives in the route, so this part can be reasoned about and
// changed without touching the request guards.
//
// Format follows llmstxt.org: an H1 with the site name, an optional blockquote
// summary, then H2 sections holding "- [Title](url): description" lines.

export type LlmsEntry = { url: string; title: string; description?: string };
export type LlmsSection = { name: string; entries: LlmsEntry[] };

/** Everything the generator needs to print a file. */
export type LlmsInput = {
  siteName: string;
  summary?: string;
  sections: LlmsSection[];
};

const MAX_URLS = 1000;

/**
 * Pulls locations out of a sitemap or a sitemap index. Deliberately a regex
 * and not an XML parser: sitemaps are flat, and a parser would be one more
 * dependency plus a crash surface on malformed files from other people's
 * sites. `isIndex` tells the caller whether these are child sitemaps.
 */
export function parseSitemap(xml: string): { locs: string[]; isIndex: boolean } {
  const isIndex = /<sitemapindex[\s>]/i.test(xml);
  const locs: string[] = [];
  const re = /<loc>\s*([^<\s]+)\s*<\/loc>/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(xml)) && locs.length < MAX_URLS) {
    const value = m[1].replace(/&amp;/g, "&").trim();
    if (/^https?:\/\//i.test(value)) locs.push(value);
  }
  return { locs: [...new Set(locs)], isIndex };
}

/** "/services/website-development" → "Website development" */
export function titleFromPath(pathname: string): string {
  const last = pathname.replace(/\/+$/, "").split("/").filter(Boolean).pop();
  if (!last) return "Home";
  const words = decodeURIComponent(last)
    .replace(/\.(html?|php|aspx?)$/i, "")
    .replace(/[-_]+/g, " ")
    .trim();
  if (!words) return "Home";
  const sentence = words.charAt(0).toUpperCase() + words.slice(1);
  return restoreAcronyms(sentence);
}

/**
 * A slug loses capitalisation, so "seo-for-law-firms" comes back as "Seo for
 * law firms". Only a short, unambiguous list is restored — guessing further
 * would mangle ordinary words, and the user edits these titles anyway.
 */
const ACRONYMS = ["SEO", "AI", "CMS", "API", "UX", "UI", "SaaS", "B2B", "B2C", "SEM", "PPC", "GEO", "AEO", "LLM", "CRM", "PDF", "FAQ"];

function restoreAcronyms(text: string): string {
  return ACRONYMS.reduce(
    (acc, word) => acc.replace(new RegExp(`\\b${word}\\b`, "gi"), word),
    text,
  );
}

/** First path segment, used as the section a URL belongs to. */
export function sectionOf(pathname: string, fallback = "Pages"): string {
  const seg = pathname.replace(/\/+$/, "").split("/").filter(Boolean);
  if (seg.length <= 1) return fallback;
  const name = seg[0].replace(/[-_]+/g, " ");
  return name.charAt(0).toUpperCase() + name.slice(1);
}

/**
 * Groups URLs into sections by their first path segment. Root-level pages go
 * first, under `rootSection`, because llms.txt readers take the opening
 * entries as the most important ones.
 */
export function groupUrls(
  urls: string[],
  opts: { rootSection?: string; maxPerSection?: number } = {},
): LlmsSection[] {
  const rootSection = opts.rootSection ?? "Main pages";
  const maxPerSection = opts.maxPerSection ?? 50;
  const buckets = new Map<string, LlmsEntry[]>();

  for (const raw of urls) {
    let u: URL;
    try {
      u = new URL(raw);
    } catch {
      continue;
    }
    const name = sectionOf(u.pathname, rootSection);
    const list = buckets.get(name) ?? [];
    if (list.length >= maxPerSection) continue;
    list.push({ url: u.toString(), title: titleFromPath(u.pathname) });
    buckets.set(name, list);
  }

  const sections = [...buckets.entries()].map(([name, entries]) => ({ name, entries }));
  sections.sort((a, b) => {
    if (a.name === rootSection) return -1;
    if (b.name === rootSection) return 1;
    return b.entries.length - a.entries.length;
  });
  return sections;
}

const escapeTitle = (s: string) => s.replace(/[\[\]]/g, "").trim();

export function buildLlmsTxt({ siteName, summary, sections }: LlmsInput): string {
  const out: string[] = [`# ${escapeTitle(siteName) || "Site"}`];
  if (summary?.trim()) out.push("", `> ${summary.trim().replace(/\s*\n\s*/g, " ")}`);

  for (const section of sections) {
    if (!section.entries.length) continue;
    out.push("", `## ${escapeTitle(section.name)}`, "");
    for (const e of section.entries) {
      const desc = e.description?.trim() ? `: ${e.description.trim()}` : "";
      out.push(`- [${escapeTitle(e.title) || e.url}](${e.url})${desc}`);
    }
  }
  return out.join("\n") + "\n";
}

/** Site name guess for the first heading, when the user gives none. */
export function siteNameFromHost(host: string): string {
  const bare = host.replace(/^www\./i, "").split(".")[0] ?? host;
  return bare.charAt(0).toUpperCase() + bare.slice(1);
}
