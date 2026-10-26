// scripts/apply-home-services-links.cjs
//
// Run after batch C (home services, 18 topics × EN/PL/RU) is created with
// create-landing.cjs and deployed.
//
// 1. Services hubs (EN / PL / RU). The section is found by a page it already lists:
//    - SEO section (the one with contractors / construction / dentist SEO): 13 SEO pages;
//    - website section (the one with contractor / construction / medical websites): 5 website pages.
// 2. One sentence with links after the last paragraph of the main text of existing
//    pages (closing headings and empty paragraphs are skipped):
//    - SEO for contractors EN, construction SEO PL / RU → the trade SEO pages;
//    - contractor website design EN, construction website PL / RU → the website pages;
//    - construction company website EN → home builder pages;
//    - cleaning company website EN / PL / RU → carpet cleaning SEO and pressure washing website;
//    - landscaping SEO EN → tree service SEO.
//
// Idempotent; aborts on drafts; one transaction, one patch per change.
//
// Usage: node scripts/apply-home-services-links.cjs           dry run
//        node scripts/apply-home-services-links.cjs --apply   write

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
const SEO = ["pest-control-seo", "seo-for-moving-companies", "seo-for-home-builders", "seo-for-interior-designers", "locksmith-seo", "carpet-cleaning-seo", "junk-removal-seo", "seo-for-flooring-companies", "tree-service-seo", "garage-door-seo", "restoration-seo", "seo-for-home-inspectors", "appliance-repair-seo"];
const WEB = ["pest-control-website-design", "home-builder-website-design", "interior-designer-website-design", "handyman-website-design", "pressure-washing-website-design"];
const NEW = [...SEO, ...WEB].flatMap((g) => ["en", "pl", "ru"].map((l) => id(g, l)));

// marker: slugs of pages the target section already lists (first match wins)
const HUB = ["en", "pl", "ru"].flatMap((lang) => [
  { lang, marker: { en: ["seo-for-contractors", "seo-for-construction-companies", "dentist-seo"], pl: ["pozycjonowanie-strony-firmy-budowlanej", "pozycjonowanie-strony-gabinetu-stomatologicznego"], ru: ["seo-prodvizhenie-saita-stroitelnoi-kompanii", "prodvizhenie-medicinskogo-saita"] }[lang], refs: SEO.map((g) => id(g, lang)) },
  { lang, marker: { en: ["contractor-website-design", "construction-company-website", "medical-website-design"], pl: ["strona-internetowa-dla-firmy-budowlanej", "strona-internetowa-dla-lekarza"], ru: ["sait-dlya-stroitelnoi-kompanii", "sait-dlya-kliniki"] }[lang], refs: WEB.map((g) => id(g, lang)) },
]);

const TEXT = [
  { lang: "en", slug: "seo-for-contractors", para: list("SEO for a specific home service business: ", [
    ["pest control", "/pest-control-seo"], ["moving companies", "/seo-for-moving-companies"], ["home builders", "/seo-for-home-builders"], ["flooring companies", "/seo-for-flooring-companies"],
    ["garage door companies", "/garage-door-seo"], ["restoration companies", "/restoration-seo"], ["tree services", "/tree-service-seo"], ["locksmiths", "/locksmith-seo"],
    ["junk removal", "/junk-removal-seo"], ["carpet cleaning", "/carpet-cleaning-seo"], ["appliance repair", "/appliance-repair-seo"], ["home inspectors", "/seo-for-home-inspectors"]], " and ") },
  { lang: "en", slug: "contractor-website-design", para: list("Website design for a specific home service business: ", [
    ["home builders", "/home-builder-website-design"], ["interior designers", "/interior-designer-website-design"], ["handymen", "/handyman-website-design"],
    ["pest control companies", "/pest-control-website-design"], ["pressure washing businesses", "/pressure-washing-website-design"]], " and ") },
  { lang: "en", slug: "construction-company-website", para: para("Builders of houses — communities, floor plans, model homes — have their own pages: ", ["home builder website design", "/home-builder-website-design"], " and ", ["SEO for home builders", "/seo-for-home-builders"], ".") },
  { lang: "en", slug: "cleaning-company-website", para: para("Carpet and upholstery cleaners search differently and have their own page: ", ["carpet cleaning SEO", "/carpet-cleaning-seo"], "; exterior cleaning is covered on the ", ["pressure washing website design", "/pressure-washing-website-design"], " page.") },
  { lang: "en", slug: "landscaping-seo", para: para("Tree removal, trimming and storm work have their own searches and their own page: ", ["tree service SEO", "/tree-service-seo"], ".") },
  { lang: "pl", slug: "pozycjonowanie-strony-firmy-budowlanej", para: list("Pozycjonowanie firm usługowych z konkretnej branży: ", [
    ["firmy budującej domy", "/pl/pozycjonowanie-firmy-budujacej-domy"], ["firmy montażu podłóg", "/pl/pozycjonowanie-firmy-montazu-podlog"], ["firmy bram garażowych", "/pl/pozycjonowanie-firmy-bram-garazowych"], ["firmy osuszania po zalaniu", "/pl/pozycjonowanie-firmy-osuszania-po-zalaniu"],
    ["firmy odbiorów mieszkań", "/pl/pozycjonowanie-firmy-odbiorow-mieszkan"], ["firmy wywozu gruzu", "/pl/pozycjonowanie-firmy-wywozu-gruzu"], ["firmy przeprowadzkowej", "/pl/pozycjonowanie-firmy-przeprowadzkowej"], ["firmy DDD", "/pl/pozycjonowanie-firmy-ddd"],
    ["firmy wycinki drzew", "/pl/pozycjonowanie-firmy-wycinki-drzew"], ["ślusarza", "/pl/pozycjonowanie-strony-slusarza"], ["firmy prania dywanów", "/pl/pozycjonowanie-firmy-prania-dywanow"], ["serwisu AGD", "/pl/pozycjonowanie-serwisu-agd"], ["projektanta wnętrz", "/pl/pozycjonowanie-projektanta-wnetrz"]], " i ") },
  { lang: "pl", slug: "strona-internetowa-dla-firmy-budowlanej", para: list("Strony dla firm usługowych z konkretnej branży: ", [
    ["dla firmy budującej domy", "/pl/strona-internetowa-dla-firmy-budujacej-domy"], ["dla projektanta wnętrz", "/pl/strona-internetowa-dla-projektanta-wnetrz"], ["dla złotej rączki", "/pl/strona-internetowa-dla-zlotej-raczki"],
    ["dla firmy DDD", "/pl/strona-internetowa-dla-firmy-ddd"], ["dla firmy mycia ciśnieniowego", "/pl/strona-internetowa-dla-firmy-mycia-cisnieniowego"]], " i ") },
  { lang: "pl", slug: "strona-dla-firmy-sprzatajacej", para: para("Pralnie dywanów i tapicerki mają osobną stronę: ", ["pozycjonowanie firmy prania dywanów", "/pl/pozycjonowanie-firmy-prania-dywanow"], ", a mycie kostki i elewacji — ", ["strona internetowa dla firmy mycia ciśnieniowego", "/pl/strona-internetowa-dla-firmy-mycia-cisnieniowego"], ".") },
  { lang: "ru", slug: "seo-prodvizhenie-saita-stroitelnoi-kompanii", para: list("Продвижение компаний конкретного профиля: ", [
    ["строительство домов", "/ru/prodvizhenie-saita-stroitelstva-domov"], ["укладка напольных покрытий", "/ru/prodvizhenie-ukladki-napolnyh-pokrytiy"], ["автоматические ворота", "/ru/prodvizhenie-saita-avtomaticheskih-vorot"], ["осушение после затопления", "/ru/prodvizhenie-saita-osusheniya-posle-zatopleniya"],
    ["приёмка квартир", "/ru/prodvizhenie-saita-priemki-kvartir"], ["вывоз мусора", "/ru/prodvizhenie-saita-vyvoza-musora"], ["переезды и грузоперевозки", "/ru/prodvizhenie-saita-pereezdov"], ["дезинсекция", "/ru/prodvizhenie-saita-dezinsekcii"],
    ["спил деревьев", "/ru/prodvizhenie-saita-spila-derevev"], ["вскрытие замков", "/ru/prodvizhenie-saita-vskrytiya-zamkov"], ["химчистка ковров", "/ru/prodvizhenie-himchistki-kovrov"], ["ремонт бытовой техники", "/ru/prodvizhenie-remonta-bytovoy-tehniki"], ["дизайн интерьера", "/ru/prodvizhenie-dizainera-interera"]], " и ") },
  { lang: "ru", slug: "sait-dlya-stroitelnoi-kompanii", para: list("Сайт для компании конкретного профиля: ", [
    ["строительство домов", "/ru/sait-dlya-stroitelstva-domov"], ["дизайнер интерьера", "/ru/sait-dizainera-interera"], ["мастер на час", "/ru/sait-mastera-na-chas"],
    ["служба дезинсекции", "/ru/sait-dlya-sluzhby-dezinsekcii"], ["мойка высоким давлением", "/ru/sait-dlya-moyki-vysokim-davleniem"]], " и ") },
  { lang: "ru", slug: "sait-dlya-kliningovoy-kompanii", para: para("Химчистке ковров и мебели посвящена отдельная страница — ", ["продвижение химчистки ковров", "/ru/prodvizhenie-himchistki-kovrov"], ", а мойке фасадов и брусчатки — ", ["сайт для мойки высоким давлением", "/ru/sait-dlya-moyki-vysokim-davleniem"], ".") },
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
