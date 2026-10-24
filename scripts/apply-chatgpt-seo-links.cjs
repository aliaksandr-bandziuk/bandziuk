// scripts/apply-chatgpt-seo-links.cjs
//
// Run after the «ChatGPT SEO» article is published and deployed:
//   /blog/chatgpt-seo, /pl/blog/jak-pojawic-sie-w-chatgpt, /ru/blog/seo-dlya-chatgpt
//
// 1. ChatGPT SEO service pages EN / PL / RU: a sentence at the end of the section
//    «How ChatGPT search picks the businesses it names» (and its PL / RU twins).
// 2. «How to get recommended by ChatGPT» EN / PL / RU: a sentence after the intro
//    paragraph that says the mechanics are covered separately.
// 3. «LLM SEO» EN / PL / RU: a sentence after the ChatGPT paragraph (the one that
//    links the ChatGPT SEO service page).
// 4. Related articles: «ChatGPT SEO» goes first in «Recommended by ChatGPT»,
//    «LLM SEO» and «How clients find you through ChatGPT».
//
// One patch per change (a Sanity patch holds one insert). Idempotent; aborts on
// drafts; one transaction.
//
// Usage: node scripts/apply-chatgpt-seo-links.cjs           dry run
//        node scripts/apply-chatgpt-seo-links.cjs --apply   write

const path = require("path");
const crypto = require("crypto");
const { createClient } = require("@sanity/client");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local"), quiet: true });

const APPLY = process.argv.includes("--apply");
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const key = () => crypto.randomBytes(6).toString("hex");
const plain = (b) => (b.children || []).map((c) => c.text).join("");
const norm = (t) => t.replace(/[‘’]/g, "'").trim().toLowerCase();
function para(...segments) {
  const markDefs = [];
  const children = segments.map((s) => {
    if (typeof s === "string") return { _type: "span", _key: key(), text: s, marks: [] };
    const mk = key();
    markDefs.push({ _type: "link", _key: mk, href: s[1] });
    return { _type: "span", _key: key(), text: s[0], marks: [mk] };
  });
  return { _type: "block", _key: key(), style: "normal", markDefs, children };
}

const ART = {
  en: { id: "blog-chatgpt-seo", url: "/blog/chatgpt-seo" },
  pl: { id: "blog-chatgpt-seo.pl", url: "/pl/blog/jak-pojawic-sie-w-chatgpt" },
  ru: { id: "blog-chatgpt-seo.ru", url: "/ru/blog/seo-dlya-chatgpt" },
};
const SVC = { en: "/services/chatgpt-seo-services", pl: "/pl/oferty/pozycjonowanie-w-chatgpt", ru: "/ru/uslugi/prodvizhenie-v-chatgpt" };

const TEXT = [
  { id: "singlepage-chatgpt-seo-services", label: "EN ChatGPT SEO page", lang: "en", section: "How ChatGPT search picks the businesses it names",
    para: para("Step by step — the fan-out queries ChatGPT writes, why it searches in English, OpenAI's three crawlers and a live test — in ", ["ChatGPT SEO: how to rank in ChatGPT search and get your pages cited", ART.en.url], ".") },
  { id: "singlepage-chatgpt-seo-services.pl", label: "PL ChatGPT SEO page", lang: "pl", section: "Jak wyszukiwanie ChatGPT wybiera firmy",
    para: para("Krok po kroku — zapytania fan-out, które pisze ChatGPT, dlaczego szuka po angielsku, trzy roboty OpenAI i test na żywo — w artykule ", ["jak pojawić się w ChatGPT", ART.pl.url], ".") },
  { id: "singlepage-chatgpt-seo-services.ru", label: "RU ChatGPT SEO page", lang: "ru", section: "Как поиск ChatGPT выбирает компании",
    para: para("Пошагово — fan-out запросы, которые пишет ChatGPT, почему он ищет на английском, три робота OpenAI и живой тест — в статье ", ["SEO для ChatGPT: как попасть в поиск ChatGPT и в источники его ответов", ART.ru.url], ".") },
  { id: "blog-chatgpt-recommendations", label: "EN Recommended by ChatGPT", lang: "en", afterText: "The mechanics themselves",
    para: para("How ChatGPT's own search engine chooses which pages to cite — the queries it writes, its crawlers, local and shopping results — is in ", ["ChatGPT SEO", ART.en.url], ".") },
  { id: "blog-chatgpt-recommendations.pl", label: "PL Recommended by ChatGPT", lang: "pl", afterText: "Samą mechanikę",
    para: para("Jak sama wyszukiwarka ChatGPT wybiera strony, które cytuje — zapytania, które pisze, jej roboty, wyniki lokalne i produktowe — opisuję w artykule ", ["jak pojawić się w ChatGPT", ART.pl.url], ".") },
  { id: "blog-chatgpt-recommendations.ru", label: "RU Recommended by ChatGPT", lang: "ru", afterText: "Механику самого процесса",
    para: para("Как сам поисковик ChatGPT выбирает страницы, которые цитирует, — запросы, которые он пишет, его роботы, локальная и товарная выдача, — в статье ", ["SEO для ChatGPT", ART.ru.url], ".") },
  { id: "blog-llm-seo", label: "EN LLM SEO", lang: "en", afterHref: SVC.en,
    para: para("How ChatGPT search works step by step, and how to get pages cited in it, is in ", ["ChatGPT SEO", ART.en.url], ".") },
  { id: "blog-llm-seo.pl", label: "PL LLM SEO", lang: "pl", afterHref: SVC.pl,
    para: para("Jak krok po kroku działa wyszukiwarka ChatGPT i jak zdobyć w niej cytowania, opisuję w artykule ", ["jak pojawić się w ChatGPT", ART.pl.url], ".") },
  { id: "blog-llm-seo.ru", label: "RU LLM SEO", lang: "ru", afterHref: SVC.ru,
    para: para("Как шаг за шагом работает поиск ChatGPT и как попасть в его источники, — в статье ", ["SEO для ChatGPT", ART.ru.url], ".") },
];
const RELATED = [["blog-chatgpt-recommendations", "en"], ["blog-chatgpt-recommendations.pl", "pl"], ["blog-chatgpt-recommendations.ru", "ru"], ["blog-llm-seo", "en"], ["blog-llm-seo.pl", "pl"], ["blog-llm-seo.ru", "ru"], ["blog-found-via-chatgpt", "en"], ["blog-found-via-chatgpt.pl", "pl"], ["blog-found-via-chatgpt.ru", "ru"]];

async function main() {
  const art = await client.fetch(`*[_id in $ids]._id`, { ids: Object.values(ART).map((a) => a.id) });
  if (art.length !== 3) { console.log(`Aborting — article not published in all languages: have ${art.join(", ") || "none"}`); process.exit(1); }
  const touched = [...new Set([...TEXT.map((t) => t.id), ...RELATED.map((r) => r[0])])];
  const drafts = await client.fetch(`*[_id in $ids]._id`, { ids: touched.map((i) => `drafts.${i}`) });
  if (drafts.length) { console.log(`Aborting — drafts exist, publish or discard them first: ${drafts.join(", ")}`); process.exit(1); }
  const docs = await client.fetch(`*[_id in $ids]{_id, _rev, contentBlocks, relatedArticles}`, { ids: touched });
  const get = (id, label) => { const d = docs.find((x) => x._id === id); if (!d) throw new Error(`${label} (${id}) not found`); return d; };
  const patches = [];

  for (const t of TEXT) {
    const doc = get(t.id, t.label);
    const url = ART[t.lang].url;
    if (JSON.stringify(doc.contentBlocks || []).includes(`"href":"${url}"`)) { console.log(`skip  ${t.label}: already links ${url}`); continue; }
    let found = null;
    for (const b of (doc.contentBlocks || []).filter((x) => x._type === "textContent")) {
      const c = b.content || [];
      if (t.section) {
        const i = c.findIndex((x) => x.style === "h2" && norm(plain(x)).startsWith(norm(t.section)));
        if (i === -1) continue;
        let j = c.findIndex((x, k) => k > i && x.style === "h2");
        if (j === -1) j = c.length;
        found = { b, a: c[j - 1], where: `end of «${plain(c[i])}»` };
      } else if (t.afterText) {
        const a = c.find((x) => x._type === "block" && norm(plain(x)).startsWith(norm(t.afterText)));
        if (a) found = { b, a, where: `after «${t.afterText}…»` };
      } else {
        const a = c.find((x) => x._type === "block" && (x.markDefs || []).some((m) => m.href === t.afterHref));
        if (a) found = { b, a, where: `after the paragraph linking ${t.afterHref}` };
      }
      if (found) break;
    }
    if (!found) throw new Error(`${t.label}: anchor (${t.section || t.afterText || t.afterHref}) not found`);
    console.log(`\n${t.label} — ${found.where}, after «${plain(found.a).slice(0, 60)}…»:\n  ${plain(t.para)}`);
    patches.push({ id: doc._id, rev: doc._rev, op: (p) => p.insert("after", `contentBlocks[_key=="${found.b._key}"].content[_key=="${found.a._key}"]`, [t.para]) });
  }

  console.log("");
  for (const [id, lang] of RELATED) {
    const doc = docs.find((d) => d._id === id);
    if (!doc) { console.log(`note: ${id} not found`); continue; }
    const artId = ART[lang].id;
    const refs = doc.relatedArticles || [];
    if (refs.some((x) => x._ref === artId)) { console.log(`skip  related ${id}: already lists the article`); continue; }
    const item = { _key: key(), _type: "reference", _ref: artId };
    console.log(`add   related ${id}: ${artId} first`);
    patches.push({ id: doc._id, rev: doc._rev,
      op: (p) => (refs.length ? p.insert("before", "relatedArticles[0]", [item]) : p.setIfMissing({ relatedArticles: [] }).append("relatedArticles", [item])) });
  }

  if (!patches.length) return console.log("\nNothing to do.");
  if (!APPLY) return console.log(`\nDry run — ${patches.length} change(s), nothing written. Add --apply to write.`);
  const tx = client.transaction();
  const seen = new Set();
  for (const p of patches) {
    const first = !seen.has(p.id); seen.add(p.id);
    tx.patch(p.id, (q) => p.op(first ? q.ifRevisionId(p.rev) : q));
  }
  await tx.commit();
  console.log(`\nWritten: ${[...seen].join(", ")}`);
  console.log("The webhook revalidates these pages.");
}

main().catch((err) => { console.error(err.message || err); process.exit(1); });
