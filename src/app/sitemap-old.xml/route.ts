import { getAllPathsForLang } from "@/sanity/sanity.utils";
import { BASE_URL } from "@/utils/hreflang";
import { STATIC_REDIRECTS } from "@/lib/redirects/staticRedirects.mjs";

// TEMPORARY, added 21 September 2026. Remove it (and its entry in Search
// Console) once the old addresses have dropped out of the index — check the
// "Discovered — currently not indexed" count in late November 2026.
//
// A sitemap of addresses that no longer exist, on purpose. Pages moved to
// nested URLs on 7–9 September, and internal links to the old addresses were
// only fixed on 16 September; by then Google had kept the old URLs as
// canonical (e.g. /pl/lokalizacje/... over /pl/oferty/lokalizacje/...) and
// left 40 of the new ones "discovered, not indexed". Listing the old URLs makes
// Googlebot revisit them, meet the 308 and move its signals to the new address
// — Google's own advice for a site move. Every URL here must redirect; nothing
// that serves a page belongs in this file.
export const revalidate = 86400;

const LANGS = ["en", "pl", "ru"] as const;

async function oldUrls(): Promise<string[]> {
  const urls = new Set<string>();

  // Same rule as buildDynamicRedirects() in next.config.mjs: a nested page used
  // to answer at /<lang>/<its own slug>, and that flat address now redirects.
  for (const lang of LANGS) {
    const prefix = lang === "en" ? "" : `/${lang}`;
    for (const chain of await getAllPathsForLang(lang)) {
      if (chain.length < 2) continue;
      urls.add(`${prefix}/${chain[chain.length - 1]}`);
      // The PL geo pages were also indexed as /pl/lokalizacje/<country>, the
      // family the static wildcard redirect covers — the one Google picked.
      if (lang === "pl" && chain[0] === "oferty" && chain[1] === "lokalizacje" && chain.length === 3) {
        urls.add(`/pl/lokalizacje/${chain[2]}`);
      }
    }
  }

  // One-off moves. Pattern sources (":slug") are expanded above or skipped.
  for (const rule of STATIC_REDIRECTS) {
    if (!rule.source.includes(":")) urls.add(rule.source);
  }

  return [...urls].sort();
}

export async function GET() {
  const list = await oldUrls();
  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    list.map((path) => `  <url><loc>${BASE_URL}${path}</loc></url>`).join("\n") +
    `\n</urlset>\n`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
