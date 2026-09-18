// scripts/dataforseo/check-cannibalization.cjs
//
// For every candidate query of the case page, answers two questions:
//   1. Does bandziuk.com already have a page (service, landing, article, case)
//      whose URL, title, H1 or subheadings answer that query? Then the query
//      belongs to that page, not to the case.
//   2. Does bandziuk.com already rank for the query anywhere? Then it must not
//      be touched, whichever page ranks.
//
// Sources:
//   — sitemap.xml from the dev server (BASE, default http://localhost:3000):
//     the list of live URLs
//   — Sanity: title, H1 override, meta title, H2/H3 and FAQ questions of every
//     singlepage, blog and portfolio document, joined to the sitemap by slug
//   — Search Console export of 2026-09-11 (research/dataforseo/gsc/, taken from
//     drafts/gsc-data/): queries with impressions over three months
//   — DataForSEO Labs ranked_keywords for bandziuk.com in the three markets
//     (cached in research/dataforseo/raw/, budget-capped like the main script)
//   — live SERPs already cached by check-case-page.cjs: bandziuk.com in top 20
//
// Usage:
//   node scripts/dataforseo/check-cannibalization.cjs [--budget 0.5] [--dry-run]

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const axios = require("axios");
const { createClient } = require("@sanity/client");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env.local"), quiet: true });

const ROOT = path.resolve(__dirname, "../..");
const OUT = path.join(ROOT, "research", "dataforseo");
const RAW = path.join(OUT, "raw");
const BASE = process.env.BASE || "http://localhost:3000";
const DRY_RUN = process.argv.includes("--dry-run");
const budgetArg = process.argv.indexOf("--budget");
const BUDGET_USD = budgetArg > -1 ? Number(process.argv[budgetArg + 1]) : 0.5;

const sanity = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

// Candidate queries, chosen from research/dataforseo/keywords-*.csv: everything
// with measurable volume that the case could plausibly answer, plus the service
// seeds, so the table shows where each of them already lives.
const CANDIDATES = {
  en: ["consulting website", "consulting website design", "consulting website examples", "expert website", "website for consultants", "consultant website design", "consultant website examples", "best consultant websites", "website consultant", "website development consultant", "seo case study", "website case study", "web design case study", "website redesign case study", "calculator website", "llm seo", "ai overview optimization", "how to get cited by chatgpt", "how to optimize for ai overviews", "multilingual website examples", "sanity cms", "sanity cms examples", "sanity headless cms", "next js website development", "multilingual website development", "headless cms website", "generative engine optimization", "ai search optimization"],
  pl: ["strona internetowa dla eksperta", "strona osobista", "przykłady stron internetowych", "strona internetowa przykłady", "przykładowa strona internetowa", "portfolio stron internetowych", "sanity cms", "strona dla freelancerów", "strona internetowa dla psychologa", "kalkulator na stronie", "strona dla konsultanta", "strona dla eksperta", "pozycjonowanie w ai", "pozycjonowanie w chatgpt", "tworzenie stron next js", "strona wielojęzyczna", "pozycjonowanie pod ai"],
  ru: ["сайт аналитика", "сайт консультанта", "личный сайт", "калькулятор для сайта", "калькулятор на сайт", "сайт эксперта", "кейс создание сайта", "портфолио веб разработчика", "сайт на next js", "sanity cms", "сайт для психолога", "сайт визитка", "сайт для консультанта", "многоязычный сайт", "продвижение в нейросетях", "как попасть в ответы chatgpt"],
};

const MARKETS = { en: { location_code: 2826, language_code: "en" }, pl: { location_code: 2616, language_code: "pl" }, ru: { location_code: 2398, language_code: "ru" } };

const STOP = new Set("a an the for of to in on by with and or how do does what is are best your my you i dla na w we z do i jak co to czy od для на в во с со и как что это по о от".split(" "));

// Crude stemming, good enough for matching, not for linguistics: lowercase,
// strip diacritics, drop an English plural s; for Polish and Russian drop the
// last two letters of longer words and cut to six, so "сайт"/"сайты",
// "многоязычный"/"многоязычного" and "strona"/"stron"/"strony" meet.
function stem(w, lang) {
  if (lang === "en") return w.replace(/(?<=\w{3})s$/, "");
  return w.slice(0, Math.max(4, w.length - 2)).slice(0, 6);
}
function tokens(text, lang) {
  return String(text || "")
    .toLowerCase()
    .normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/ł/g, "l")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .split(" ")
    .filter((w) => w && !STOP.has(w))
    .map((w) => stem(w, lang));
}

// Topic words of the case: Search Console queries containing any of them are
// listed separately, since a near-miss phrasing that already ranks is also
// something the case must not take over.
const TOPIC = /consult|konsult|консульт|case stud|кейс|kalkulator|калькул|calculat|sanity|next ?js|эксперт|ekspert|expert|excel|power ?bi|portfolio|портфолио/i;

// ------------------------------------------------------------ dataforseo --
let spent = 0;
async function call(endpoint, payload, label) {
  const h = crypto.createHash("sha1").update(endpoint + JSON.stringify(payload)).digest("hex").slice(0, 16);
  const file = path.join(RAW, `${endpoint.replace(/[^a-z0-9]+/gi, "_")}__${h}.json`);
  if (fs.existsSync(file)) { console.log(`cache  ${label}`); return JSON.parse(fs.readFileSync(file, "utf8")); }
  if (DRY_RUN) { console.log(`would call  ${label}`); return null; }
  if (spent + 0.03 > BUDGET_USD) throw new Error(`Budget cap reached: $${spent.toFixed(4)} of $${BUDGET_USD}`);
  const res = await axios.post(`https://api.dataforseo.com/v3/${endpoint}`, [payload], { auth: { username: process.env.DATAFORSEO_API_LOGIN, password: process.env.DATAFORSEO_API_PASSWORD }, timeout: 120000 });
  spent += Number(res.data.cost || 0);
  if (res.data.tasks?.[0]?.status_code === 20000) { fs.mkdirSync(RAW, { recursive: true }); fs.writeFileSync(file, JSON.stringify(res.data, null, 1)); }
  console.log(`paid   ${label}  $${Number(res.data.cost || 0).toFixed(4)}`);
  if (spent > BUDGET_USD) throw new Error(`Budget cap exceeded: $${spent.toFixed(4)} of $${BUDGET_USD}`);
  return res.data;
}

// ------------------------------------------------------------------ pages --
async function loadPages() {
  const xml = await (await fetch(`${BASE}/sitemap.xml`)).text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(/^https?:\/\/[^/]+/, ""));
  const pt = (blocks) => (blocks || []).flatMap((b) => (b._type === "block" && /^h[23]$/.test(b.style || "") ? [(b.children || []).map((c) => c.text).join("")] : []));
  const docs = await sanity.fetch(`*[_type in ["singlepage","blog","portfolio"] && !(_id in path("drafts.**"))]{_type, language, slug, title, heading, "meta": seo.metaTitle, contentBlocks, "faq": contentBlocks[_type=="faqBlock"].faq.items[].question}`);
  const bySlug = new Map();
  for (const d of docs) {
    const L = d.language || "en";
    const slug = d.slug?.[L]?.current;
    if (!slug) continue;
    const heads = (d.contentBlocks || []).flatMap((b) => [b.title, ...pt(b.content), ...pt(b.leftContent?.blockContent?.content), ...pt(b.rightContent?.blockContent?.content)]).filter((x) => typeof x === "string");
    bySlug.set(`${L}:${slug}`, { type: d._type, strong: [d.title, d.heading, d.meta].filter(Boolean).join(" | "), weak: [...heads, ...(d.faq || []).flat()].join(" | ") });
  }
  return urls.map((u) => {
    const L = u.startsWith("/pl/") || u === "/pl" ? "pl" : u.startsWith("/ru/") || u === "/ru" ? "ru" : "en";
    const slug = u.split("/").filter(Boolean).pop() || "";
    const d = bySlug.get(`${L}:${slug}`);
    const kind = /\/blog\//.test(u) ? "article" : /\/portfolio\//.test(u) ? "case" : d ? "page" : "hub";
    return { url: u, lang: L, kind, slug, strong: `${slug.replace(/-/g, " ")} | ${d?.strong || ""}`, weak: d?.weak || "" };
  });
}

function match(query, lang, pages) {
  const q = [...new Set(tokens(query, lang))];
  if (!q.length) return [];
  return pages
    .filter((p) => p.lang === lang)
    .map((p) => {
      const s = new Set(tokens(p.strong, lang));
      const w = new Set(tokens(p.weak, lang));
      const inStrong = q.filter((t) => s.has(t)).length / q.length;
      const inAny = q.filter((t) => s.has(t) || w.has(t)).length / q.length;
      return { url: p.url, kind: p.kind, inStrong, inAny };
    })
    .filter((m) => m.inStrong >= 0.99 || m.inAny >= 0.99)
    .sort((a, b) => b.inStrong - a.inStrong || b.inAny - a.inAny)
    .slice(0, 3);
}

// ------------------------------------------------------------------- main --
async function main() {
  const pages = await loadPages();
  console.log(`страниц в карте сайта: ${pages.length}`);

  // Query text can hold commas inside quotes, so the last four columns are read
  // from the right and everything before them is the query.
  const gsc = fs.readFileSync(path.join(OUT, "gsc", "queries-2026-09-11.csv"), "utf8").trim().split(/\r?\n/).slice(1).map((l) => {
    const p = l.split(",");
    const [clicks, imp, ctr, pos] = p.slice(-4);
    return { q: p.slice(0, -4).join(",").replace(/^"|"$/g, "").replace(/""/g, '"'), imp: +imp, pos: +pos };
  });

  const ranked = {};
  for (const [lang, m] of Object.entries(MARKETS)) {
    const body = await call("dataforseo_labs/google/ranked_keywords/live", { target: "bandziuk.com", ...m, limit: 1000 }, `ranked keywords · ${lang}`);
    ranked[lang] = (body?.tasks?.[0]?.result?.[0]?.items || []).map((i) => ({ q: i.keyword_data?.keyword, pos: i.ranked_serp_element?.serp_item?.rank_group, url: i.ranked_serp_element?.serp_item?.relative_url }));
  }

  // bandziuk.com in the top 20 of SERPs already collected by the main script
  const serpOwn = new Map();
  const report = fs.existsSync(path.join(OUT, "report.json")) ? JSON.parse(fs.readFileSync(path.join(OUT, "report.json"), "utf8")) : null;
  for (const [lang, r] of Object.entries(report?.languages || {})) for (const s of r.serps || []) if (s.own?.length) serpOwn.set(`${lang}:${s.keyword}`, s.own);

  const result = {};
  const lines = ["# Каннибализация: кандидаты для страницы кейса против страниц bandziuk.com", "", `Собрано: ${new Date().toISOString()} · карта сайта: ${BASE}/sitemap.xml (${pages.length} адресов)`, "", "Метка «занят» — у запроса уже есть страница, где все значимые слова запроса стоят в адресе, title, H1 или meta title. «Частично» — слова есть только в подзаголовках или вопросах FAQ. «Ранжируется» — запрос есть в Search Console (3 месяца до 2026-09-11) или в ranked_keywords DataForSEO.", ""];
  for (const lang of ["en", "pl", "ru"]) {
    lines.push(`## ${lang.toUpperCase()}`, "", "| Запрос | Страница bandziuk.com | Уже ранжируется | Вердикт |", "|---|---|---|---|");
    result[lang] = [];
    for (const q of CANDIDATES[lang]) {
      const m = match(q, lang, pages);
      const strong = m.filter((x) => x.inStrong >= 0.99 && x.kind !== "hub");
      const qt = tokens(q, lang).join(" ");
      const g = gsc.filter((r) => tokens(r.q, lang).join(" ") === qt || r.q.toLowerCase() === q.toLowerCase());
      const rk = (ranked[lang] || []).filter((r) => r.q && r.q.toLowerCase() === q.toLowerCase());
      const own = serpOwn.get(`${lang}:${q}`) || [];
      const ranks = [...g.map((r) => `GSC: ${r.imp} показов, поз. ${r.pos.toFixed(0)}`), ...rk.map((r) => `DFS: поз. ${r.pos} ${r.url}`), ...own.map((o) => `выдача: поз. ${o.pos}`)];
      const verdict = ranks.length ? "не трогать — уже ранжируется" : strong.length ? `не для кейса — занят (${strong[0].kind})` : m.length ? "можно, но пересекается частично" : "свободен";
      result[lang].push({ query: q, pages: m, ranks, verdict });
      lines.push(`| ${q} | ${m.map((x) => `${x.url}${x.inStrong >= 0.99 ? "" : " (частично)"}`).join("<br>") || "—"} | ${ranks.join("; ") || "—"} | ${verdict} |`);
    }
    lines.push("");
  }
  const topical = gsc.filter((r) => TOPIC.test(r.q)).sort((a, b) => b.imp - a.imp);
  lines.push("## Запросы Search Console по темам кейса (bandziuk.com уже показывается)", "", "Запросы из выгрузки за 3 месяца до 2026-09-11, где есть слова темы кейса. Страницу, которая по ним показывается, выгрузка не называет.", "", "| Запрос | Показы | Средняя позиция |", "|---|---|---|");
  for (const r of topical) lines.push(`| ${r.q} | ${r.imp} | ${r.pos.toFixed(1)} |`);
  lines.push("");
  result.gscTopical = topical;

  if (DRY_RUN) { console.log("dry run — отчёт не записан"); return; }
  fs.writeFileSync(path.join(OUT, "cannibalization.json"), JSON.stringify(result, null, 1));
  fs.writeFileSync(path.join(OUT, "cannibalization.md"), lines.join("\n"));
  console.log(lines.join("\n"));
  console.log(`\nпотрачено этим запуском: $${spent.toFixed(4)}`);
}

main().catch((e) => { console.error(e.message); process.exit(1); });
