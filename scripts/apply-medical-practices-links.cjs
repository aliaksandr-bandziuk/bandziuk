// scripts/apply-medical-practices-links.cjs
//
// Run after batch B (medical practices, 14 topics × EN/PL/RU) is created with
// create-landing.cjs and deployed, and the rewrite of the therapist website
// pages is applied with replace-landing.cjs.
//
// 1. Services hubs (EN / PL / RU). The section is found by a page it already lists:
//    - SEO section (the one that lists dentist SEO / medical SEO): 8 new SEO pages;
//    - website section (the one that lists medical website design): 6 new website pages.
// 2. One sentence with links after the last paragraph of the main text of existing
//    pages (closing headings and empty paragraphs are skipped):
//    - general medical SEO EN / PL (Warsaw clinic) / RU → the 8 SEO pages;
//    - general medical website EN / PL / RU → the website pages;
//    - dentist SEO EN / PL / RU → orthodontist SEO; dental website design EN → orthodontist website.
//
// Idempotent; aborts on drafts; one transaction, one patch per change.
//
// Usage: node scripts/apply-medical-practices-links.cjs           dry run
//        node scripts/apply-medical-practices-links.cjs --apply   write

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
// a list of linked items: «a, b, c and d.»
const list = (lead, items, and, end = ".") => para(lead, ...items.flatMap((it, i) => [it, i === items.length - 1 ? end : i === items.length - 2 ? and : ", "]));

const id = (g, lang) => (lang === "en" ? `singlepage-${g}` : `singlepage-${g}.${lang}`);
const SEO = ["seo-for-therapists", "seo-for-chiropractors", "seo-for-plastic-surgeons", "med-spa-seo", "seo-for-dermatologists", "seo-for-orthodontists", "optometry-seo", "senior-living-seo"];
const WEB = ["chiropractor-website-design", "plastic-surgeon-website-design", "med-spa-website-design", "orthodontist-website-design", "optometrist-website-design", "senior-living-website-design"];
const NEW = [...SEO, ...WEB].flatMap((g) => ["en", "pl", "ru"].map((l) => id(g, l)));

// marker: slugs of pages the target section already lists (first match wins)
const HUB = ["en", "pl", "ru"].flatMap((lang) => [
  { lang, marker: { en: ["dentist-seo", "medical-seo"], pl: ["pozycjonowanie-strony-gabinetu-stomatologicznego"], ru: ["prodvizhenie-medicinskogo-saita", "seo-prodvizhenie-stomatologii"] }[lang], refs: SEO.map((g) => id(g, lang)) },
  { lang, marker: { en: ["medical-website-design", "dental-website-design"], pl: ["strona-internetowa-dla-lekarza"], ru: ["sait-dlya-kliniki"] }[lang], refs: WEB.map((g) => id(g, lang)) },
]);

const TEXT = [
  { lang: "en", slug: "medical-seo", para: list("SEO for a specific kind of practice: ", [
    ["therapists and psychologists", "/seo-for-therapists"], ["chiropractors", "/seo-for-chiropractors"], ["plastic surgeons", "/seo-for-plastic-surgeons"], ["med spas", "/med-spa-seo"],
    ["dermatologists", "/seo-for-dermatologists"], ["orthodontists", "/seo-for-orthodontists"], ["optometry practices", "/optometry-seo"], ["senior living communities", "/senior-living-seo"]], " and ") },
  { lang: "en", slug: "medical-website-design", para: list("Website design for a specific kind of practice: ", [
    ["therapists and psychologists", "/website-for-psychologists-therapists"], ["chiropractors", "/chiropractor-website-design"], ["plastic surgeons", "/plastic-surgeon-website-design"], ["med spas", "/med-spa-website-design"],
    ["orthodontists", "/orthodontist-website-design"], ["optometrists", "/optometrist-website-design"], ["senior and assisted living", "/senior-living-website-design"]], " and ") },
  { lang: "en", slug: "dentist-seo", para: para("Orthodontic practices search differently — parents, aligners, referrals from dentists — and have their own page: ", ["SEO for orthodontists", "/seo-for-orthodontists"], ".") },
  { lang: "en", slug: "dental-website-design", para: para("A site for an orthodontic practice, with pages for parents and adult aligner patients, is covered on the ", ["orthodontist website design", "/orthodontist-website-design"], " page.") },
  { lang: "pl", slug: "pozycjonowanie-strony-przychodni-warszawa", para: list("Pozycjonowanie gabinetów konkretnych specjalności: ", [
    ["psychologa", "/pl/pozycjonowanie-strony-psychologa"], ["fizjoterapii", "/pl/pozycjonowanie-gabinetu-fizjoterapii"], ["chirurga plastycznego", "/pl/pozycjonowanie-strony-chirurga-plastycznego"], ["kliniki medycyny estetycznej", "/pl/pozycjonowanie-kliniki-medycyny-estetycznej"],
    ["gabinetu dermatologicznego", "/pl/pozycjonowanie-gabinetu-dermatologicznego"], ["gabinetu ortodontycznego", "/pl/pozycjonowanie-gabinetu-ortodontycznego"], ["salonu optycznego", "/pl/pozycjonowanie-salonu-optycznego"], ["domu opieki", "/pl/pozycjonowanie-domu-opieki"]], " i ") },
  { lang: "pl", slug: "strona-internetowa-dla-lekarza", para: list("Strony dla konkretnych specjalności: ", [
    ["dla psychologa", "/pl/strona-dla-psychologow-terapeutow"], ["dla fizjoterapeuty", "/pl/strona-internetowa-dla-fizjoterapeuty"], ["dla chirurga plastycznego", "/pl/strona-internetowa-dla-chirurga-plastycznego"], ["dla kliniki medycyny estetycznej", "/pl/strona-internetowa-dla-kliniki-medycyny-estetycznej"],
    ["dla ortodonty", "/pl/strona-internetowa-dla-ortodonty"], ["dla salonu optycznego", "/pl/strona-internetowa-dla-salonu-optycznego"], ["dla domu opieki", "/pl/strona-internetowa-domu-opieki"]], " i ") },
  { lang: "pl", slug: "pozycjonowanie-strony-gabinetu-stomatologicznego", para: para("Gabinet ortodontyczny ma innych pacjentów i inne frazy — o tym na stronie ", ["pozycjonowanie gabinetu ortodontycznego", "/pl/pozycjonowanie-gabinetu-ortodontycznego"], ".") },
  { lang: "ru", slug: "prodvizhenie-medicinskogo-saita", para: list("Продвижение практик конкретного профиля: ", [
    ["психолога", "/ru/prodvizhenie-saita-psihologa"], ["остеопата и мануального терапевта", "/ru/prodvizhenie-saita-osteopata"], ["пластического хирурга", "/ru/prodvizhenie-saita-plasticheskogo-hirurga"], ["клиники косметологии", "/ru/prodvizhenie-kliniki-kosmetologii"],
    ["дерматологической клиники", "/ru/prodvizhenie-dermatologicheskoy-kliniki"], ["ортодонта", "/ru/prodvizhenie-saita-ortodonta"], ["салона оптики", "/ru/prodvizhenie-salona-optiki"], ["пансионата для пожилых", "/ru/prodvizhenie-pansionata-dlya-pozhilyh"]], " и ") },
  { lang: "ru", slug: "sait-dlya-kliniki", para: list("Сайт для практики конкретного профиля: ", [
    ["психолога", "/ru/sait-dlya-psihologov-terapevtov"], ["остеопата", "/ru/sait-dlya-osteopata"], ["пластического хирурга", "/ru/sait-plasticheskogo-hirurga"], ["клиники косметологии", "/ru/sait-kliniki-kosmetologii"],
    ["ортодонта", "/ru/sait-ortodonta"], ["салона оптики", "/ru/sait-salona-optiki"], ["пансионата для пожилых", "/ru/sait-pansionata-dlya-pozhilyh"]], " и ") },
  { lang: "ru", slug: "seo-prodvizhenie-stomatologii", para: para("У ортодонта другие пациенты и другие запросы — об этом на странице ", ["продвижение сайта ортодонта", "/ru/prodvizhenie-saita-ortodonta"], ".") },
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
