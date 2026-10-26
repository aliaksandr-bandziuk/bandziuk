// scripts/apply-creative-leisure-links.cjs
//
// Run after batch D (creative professions, leisure and services: 19 topics × EN/PL/RU)
// is created with create-landing.cjs, the fitness studio pages are rewritten with
// replace-landing.cjs, and the site is deployed.
//
// 1. Services hubs (EN / PL / RU). The section is found by a page it already lists:
//    - SEO section: 6 SEO pages;
//    - website section: 13 website pages.
// 2. One sentence with links after the last paragraph of the main text of existing
//    pages (closing headings and empty paragraphs are skipped):
//    - beauty salon website EN / PL / RU → hair salon, makeup artist, spa websites;
//    - photographer website EN / PL / RU → artist, band, author websites;
//    - travel agency website EN / PL / RU → tour operator SEO;
//    - hotel website design EN, hotel PL / RU → B&B website;
//    - auto repair shop SEO EN → car dealer, car rental, detailing pages.
//
// Idempotent; aborts on drafts; one transaction, one patch per change.
//
// Usage: node scripts/apply-creative-leisure-links.cjs           dry run
//        node scripts/apply-creative-leisure-links.cjs --apply   write

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
const list = (lead, items, and, end = ".") => para(lead, ...items.flatMap((it, i) => [it, i === items.length - 1 ? end : i === items.length - 2 ? and : ", "]));

const id = (g, lang) => (lang === "en" ? `singlepage-${g}` : `singlepage-${g}.${lang}`);
const SEO = ["gym-seo", "seo-for-tour-operators", "winery-seo", "car-dealer-seo", "car-rental-seo", "florist-seo"];
const WEB = ["personal-trainer-website-design", "life-coach-website-design", "author-website-design", "artist-website-design", "band-website-design", "makeup-artist-website-design", "hair-salon-website-design", "spa-website-design", "bed-and-breakfast-website-design", "winery-website-design", "car-dealer-website-design", "auto-detailing-website-design", "florist-website-design"];
const NEW = [...SEO, ...WEB].flatMap((g) => ["en", "pl", "ru"].map((l) => id(g, l)));

// marker: slugs of pages the target section already lists (first match wins)
const HUB = ["en", "pl", "ru"].flatMap((lang) => [
  { lang, marker: { en: ["seo-for-contractors", "dentist-seo", "seo-for-construction-companies"], pl: ["pozycjonowanie-strony-firmy-budowlanej", "pozycjonowanie-strony-gabinetu-stomatologicznego"], ru: ["seo-prodvizhenie-saita-stroitelnoi-kompanii", "prodvizhenie-medicinskogo-saita"] }[lang], refs: SEO.map((g) => id(g, lang)) },
  { lang, marker: { en: ["contractor-website-design", "construction-company-website", "medical-website-design"], pl: ["strona-internetowa-dla-firmy-budowlanej", "strona-internetowa-dla-lekarza"], ru: ["sait-dlya-stroitelnoi-kompanii", "sait-dlya-kliniki"] }[lang], refs: WEB.map((g) => id(g, lang)) },
]);

const TEXT = [
  { lang: "en", slug: "beauty-salon-website", para: list("Sites for neighbouring beauty businesses: ", [
    ["hair salons and barbershops", "/hair-salon-website-design"], ["makeup artists", "/makeup-artist-website-design"], ["day spas", "/spa-website-design"]], " and ") },
  { lang: "pl", slug: "strona-salonu-kosmetycznego", para: list("Strony dla pokrewnych branż beauty: ", [
    ["dla salonu fryzjerskiego i barbershopu", "/pl/strona-internetowa-dla-salonu-fryzjerskiego"], ["dla wizażystki", "/pl/strona-internetowa-dla-wizazystki"], ["dla spa i salonu masażu", "/pl/strona-internetowa-dla-spa"]], " i ") },
  { lang: "ru", slug: "sait-salona-krasoty", para: list("Сайты для соседних бьюти-направлений: ", [
    ["парикмахерская и барбершоп", "/ru/sait-parikmaherskoy-i-barbershopa"], ["визажист", "/ru/sait-vizazhista"], ["СПА-салон", "/ru/sait-spa-salona"]], " и ") },
  { lang: "en", slug: "photographer-website", para: list("Websites for other creative work: ", [
    ["bands and DJs", "/band-website-design"], ["artists", "/artist-website-design"], ["authors", "/author-website-design"]], " and ") },
  { lang: "pl", slug: "strona-dla-fotografa", para: list("Strony dla innych twórców: ", [
    ["dla artysty", "/pl/strona-internetowa-dla-artysty"], ["dla zespołu muzycznego", "/pl/strona-internetowa-dla-zespolu-muzycznego"], ["dla pisarza", "/pl/strona-internetowa-dla-pisarza"]], " i ") },
  { lang: "ru", slug: "sait-dlya-fotografa", para: list("Сайты для других творческих профессий: ", [
    ["художник", "/ru/sait-dlya-hudozhnika"], ["музыкальная группа", "/ru/sait-dlya-muzykalnoy-gruppy"], ["писатель", "/ru/sait-dlya-pisatelya"]], " и ") },
  { lang: "en", slug: "travel-agency-website", para: para("Tour and activity operators — tours by destination, OTAs and direct bookings — have their own page: ", ["SEO for tour operators", "/seo-for-tour-operators"], ".") },
  { lang: "pl", slug: "strona-dla-biura-podrozy", para: para("O tym, jak wycieczki i wyjazdy znajdują klientów w Google, piszę na stronie ", ["pozycjonowanie strony biura podróży", "/pl/pozycjonowanie-strony-biura-podrozy"], ".") },
  { lang: "ru", slug: "sait-dlya-turagentstva", para: para("Как туры и экскурсии находят туристов в поиске, описано на странице ", ["продвижение туроператора", "/ru/prodvizhenie-turoperatora"], ".") },
  { lang: "en", slug: "hotel-website-design", para: para("A smaller property run by its owners — a few rooms and breakfast — is covered on the ", ["bed and breakfast website design", "/bed-and-breakfast-website-design"], " page.") },
  { lang: "pl", slug: "strona-dla-hotelu", para: para("Mniejszy obiekt prowadzony przez właścicieli opisuję na stronie ", ["strona internetowa dla pensjonatu", "/pl/strona-internetowa-dla-pensjonatu"], ".") },
  { lang: "ru", slug: "sait-dlya-otelya", para: para("Небольшой объект, который ведут сами хозяева, — на странице ", ["сайт гостевого дома", "/ru/sait-gostevogo-doma"], ".") },
  { lang: "en", slug: "seo-for-auto-repair-shop", para: list("Other car businesses have their own pages: ", [
    ["car dealer SEO", "/car-dealer-seo"], ["car rental SEO", "/car-rental-seo"], ["auto detailing website design", "/auto-detailing-website-design"]], " and ") },
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
