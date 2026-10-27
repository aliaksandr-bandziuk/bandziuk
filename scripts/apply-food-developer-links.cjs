// scripts/apply-food-developer-links.cjs
//
// Run after batch G (food venues and property developers) is created and deployed.
// 1. Services hubs: website pages go into the «by industry» website section and SEO
//    pages into «SEO for industries» — found by the restaurant pages they already list.
// 2. One sentence with links at the end of the main text of the restaurant pages, the
//    developer website page and the realtor SEO page (EN/PL/RU).
//
// Idempotent; aborts on drafts; one transaction, one patch per change.
//
// Usage: node scripts/apply-food-developer-links.cjs           dry run
//        node scripts/apply-food-developer-links.cjs --apply   write

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

const id = (g, lang) => `singlepage-${g}${lang === "en" ? "" : `.${lang}`}`;
const WEB = { en: ["cafe-website", "cafe-website-design", "bakery-website-design", "catering-website-design", "food-truck-website-design"], pl: ["cafe-website", "bakery-website-design", "catering-website-design", "food-truck-website-design"] };
WEB.ru = WEB.pl;
const SEO = ["cafe-seo", "bakery-seo", "catering-seo", "seo-for-real-estate-developers"];
const NEW = ["en", "pl", "ru"].flatMap((l) => [...WEB[l], ...SEO].map((g) => id(g, l)));

// marker: slugs of pages the target section already lists (first match wins)
const HUB = [
  { lang: "en", marker: ["restaurant-website-design", "restaurant-website"], refs: WEB.en.map((g) => id(g, "en")) },
  { lang: "pl", marker: ["strona-dla-restauracji"], refs: WEB.pl.map((g) => id(g, "pl")) },
  { lang: "ru", marker: ["sait-dlya-restorana", "dizain-saita-restorana"], refs: WEB.ru.map((g) => id(g, "ru")) },
  { lang: "en", marker: ["restaurant-seo"], refs: SEO.map((g) => id(g, "en")) },
  { lang: "pl", marker: ["pozycjonowanie-strony-restauracji"], refs: SEO.map((g) => id(g, "pl")) },
  { lang: "ru", marker: ["seo-prodvizhenie-saita-restorana"], refs: SEO.map((g) => id(g, "ru")) },
];

const TEXT = [
  { lang: "en", slug: "restaurant-seo", para: para("Cafes, bakeries and caterers are searched for differently and have their own pages: ", ["cafe SEO", "/cafe-seo"], ", ", ["bakery SEO", "/bakery-seo"], " and ", ["catering SEO", "/catering-seo"], ".") },
  { lang: "en", slug: "restaurant-website-design", para: para("Websites for other food businesses: ", ["cafe website design", "/cafe-website-design"], ", ", ["bakery website design", "/bakery-website-design"], ", ", ["catering website design", "/catering-website-design"], " and ", ["food truck website design", "/food-truck-website-design"], ".") },
  { lang: "en", slug: "restaurant-website", para: para("A cafe or coffee shop needs a lighter site with the menu, hours and ordering up front — see ", ["cafe website", "/cafe-website"], ".") },
  { lang: "en", slug: "property-developer-website", para: para("How a developer’s projects get found in Google and in AI answers is covered on the ", ["SEO for real estate developers", "/seo-for-real-estate-developers"], " page.") },
  { lang: "en", slug: "seo-for-realtors", para: para("Developers selling new builds work with other searches and have their own page: ", ["SEO for real estate developers", "/seo-for-real-estate-developers"], ".") },
  { lang: "pl", slug: "pozycjonowanie-strony-restauracji", para: para("Kawiarnie, piekarnie i firmy cateringowe mają osobne strony: ", ["pozycjonowanie strony kawiarni", "/pl/pozycjonowanie-strony-kawiarni"], ", ", ["pozycjonowanie strony piekarni", "/pl/pozycjonowanie-strony-piekarni"], " i ", ["pozycjonowanie strony firmy cateringowej", "/pl/pozycjonowanie-strony-firmy-cateringowej"], ".") },
  { lang: "pl", slug: "strona-dla-restauracji", para: para("Strony dla innych lokali i firm gastronomicznych: ", ["dla kawiarni", "/pl/strona-internetowa-dla-kawiarni"], ", ", ["dla piekarni", "/pl/strona-internetowa-dla-piekarni"], ", ", ["dla firmy cateringowej", "/pl/strona-internetowa-dla-firmy-cateringowej"], " i ", ["dla food trucka", "/pl/strona-internetowa-dla-food-trucka"], ".") },
  { lang: "pl", slug: "strona-dla-dewelopera", para: para("O tym, jak inwestycje dewelopera trafiają do Google i odpowiedzi AI, piszę na stronie ", ["pozycjonowanie strony dewelopera", "/pl/pozycjonowanie-strony-dewelopera"], ".") },
  { lang: "pl", slug: "pozycjonowanie-strony-agenta-nieruchomosci", para: para("Deweloperzy sprzedający nowe mieszkania mają osobną stronę: ", ["pozycjonowanie strony dewelopera", "/pl/pozycjonowanie-strony-dewelopera"], ".") },
  { lang: "ru", slug: "seo-prodvizhenie-saita-restorana", para: para("Кафе, пекарням и кейтерингу посвящены отдельные страницы: ", ["продвижение кафе", "/ru/prodvizhenie-kafe"], ", ", ["продвижение пекарни", "/ru/prodvizhenie-pekarni"], " и ", ["продвижение кейтеринга", "/ru/prodvizhenie-keiteringa"], ".") },
  { lang: "ru", slug: "sait-dlya-restorana", para: para("Сайты для других заведений и гастрономического бизнеса: ", ["для кафе", "/ru/sait-dlya-kafe"], ", ", ["для пекарни", "/ru/sait-dlya-pekarni"], ", ", ["для кейтеринга", "/ru/sait-dlya-keiteringa"], " и ", ["для фудтрака", "/ru/sait-dlya-fudtraka"], ".") },
  { lang: "ru", slug: "sait-dlya-zastroishchika", para: para("Как проекты застройщика находят в Google и в ответах нейросетей, описано на странице ", ["продвижение сайта застройщика", "/ru/prodvizhenie-saita-zastroishchika"], ".") },
  { lang: "ru", slug: "prodvizhenie-saita-rieltora", para: para("Застройщикам новостроек посвящена отдельная страница: ", ["продвижение сайта застройщика", "/ru/prodvizhenie-saita-zastroishchika"], ".") },
];

const getPage = (lang, s) => client.fetch(
  `*[_type in ["singlepage", "service"] && language == $lang && slug[$lang].current == $s && !(_id in path("drafts.**"))][0]`,
  { lang, s },
);
const idsBySlug = (lang, slugs) => client.fetch(
  `*[_type == "singlepage" && language == $lang && slug[$lang].current in $slugs && !(_id in path("drafts.**"))]{_id, "s": slug[$lang].current}`,
  { lang, slugs },
);

async function main() {
  const exist = await client.fetch(`*[_id in $ids]._id`, { ids: NEW });
  if (exist.length !== NEW.length) { console.log(`Aborting — not in Sanity yet: ${NEW.filter((i) => !exist.includes(i)).join(", ")}`); process.exit(1); }
  const hubs = await client.fetch(
    `*[_type == "singlepage" && pageType == "servicesIndex" && !(_id in path("drafts.**"))]{
      _id, _rev, language, "blocks": contentBlocks[_type == "relatedServicesBlock"]{ _key, title, "refs": items[]._ref }
    }`,
  );
  for (const t of TEXT) {
    t.doc = await getPage(t.lang, t.slug);
    if (!t.doc) console.log(`warn  ${t.lang} «${t.slug}» not found — sentence skipped`);
  }
  const texts = TEXT.filter((t) => t.doc);
  const touched = [...hubs.map((h) => h._id), ...texts.map((t) => t.doc._id)];
  const drafts = await client.fetch(`*[_id in $ids]._id`, { ids: touched.map((i) => `drafts.${i}`) });
  if (drafts.length) { console.log(`Aborting — drafts exist, publish or discard them first: ${drafts.join(", ")}`); process.exit(1); }

  const patches = [];

  // 1. hubs — several sections of one hub may change: each change is its own patch
  for (const h of HUB) {
    const hub = hubs.find((x) => x.language === h.lang);
    if (!hub) throw new Error(`${h.lang} services hub not found`);
    const found = await idsBySlug(h.lang, h.marker);
    let sec = null;
    for (const m of h.marker) {
      const id = (found.find((f) => f.s === m) || {})._id;
      sec = id && hub.blocks.find((b) => (b.refs || []).includes(id));
      if (sec) break;
    }
    if (!sec && h.optional) { console.log(`warn  ${h.lang} hub: no section lists ${h.marker.join(", ")} — skipped; sections: ${hub.blocks.map((b) => b.title).join(" | ")}`); continue; }
    if (!sec) throw new Error(`${h.lang} hub: no section lists any of ${h.marker.join(", ")}; sections: ${hub.blocks.map((b) => b.title).join(" | ")}`);
    const missing = h.refs.filter((r) => !(sec.refs || []).includes(r));
    if (!missing.length) { console.log(`skip  ${h.lang} hub «${sec.title}»: already lists all`); continue; }
    console.log(`add   ${h.lang} hub «${sec.title}»: ${missing.join(", ")}`);
    patches.push({ id: hub._id, rev: hub._rev, op: (q) => q.insert("after", `contentBlocks[_key=="${sec._key}"].items[-1]`, missing.map((r) => ({ _key: key(), _type: "reference", _ref: r }))) });
  }

  // 2. sentences
  for (const t of texts) {
    const blocks = (t.doc.contentBlocks || []).filter((x) => x._type === "textContent");
    // older pages have no guide block and start with heading-only text blocks — take the one with the most paragraphs
    const paras = (x) => (x.content || []).filter((y) => !/^h[1-6]$/.test(y.style || "")).length;
    const b = blocks.find((x) => x.layout === "guide") || [...blocks].sort((x, y) => paras(y) - paras(x))[0];
    if (!b || !(b.content || []).length) { console.log(`warn  ${t.lang} «${t.slug}»: no text block — sentence skipped`); continue; }
    if (blocks.some((x) => (x.content || []).some((y) => plain(y) === plain(t.para)))) { console.log(`skip  ${t.lang} «${t.slug}»: sentence already there`); continue; }
    // a text block may end with a heading that introduces the next block — never put the sentence under it
    let end = b.content.length;
    while (end > 0 && (/^h[1-6]$/.test(b.content[end - 1].style || "") || !plain(b.content[end - 1]).trim())) end--;
    const last = b.content[end - 1];
    if (!last) { console.log(`warn  ${t.lang} «${t.slug}»: no paragraph in the main text — sentence skipped`); continue; }
    if (last !== b.content[b.content.length - 1]) console.log(`note  ${t.lang} «${t.slug}»: text block ends with «${plain(b.content[b.content.length - 1]).slice(0, 40)}…» — inserting before it`);
    console.log(`\n${t.lang} «${t.slug}» (end of the main text, after «${plain(last).slice(0, 50)}…»):\n  ${plain(t.para)}`);
    patches.push({ id: t.doc._id, rev: t.doc._rev, op: (q) => q.insert("after", `contentBlocks[_key=="${b._key}"].content[_key=="${last._key}"]`, [t.para]) });
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
