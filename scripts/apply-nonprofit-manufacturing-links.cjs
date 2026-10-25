// scripts/apply-nonprofit-manufacturing-links.cjs
//
// Run after stage 2, group 6 (nonprofits and manufacturers) is created and deployed:
//   /nonprofit-website-design (+ PL strona-internetowa-dla-fundacji), /charity-website-design,
//   /nonprofit-seo, /manufacturing-seo (+ PL pozycjonowanie-strony-firmy-produkcyjnej,
//   RU prodvizhenie-saita-proizvoditelya), /manufacturing-website-design,
//   The PL producer website page already exists: /pl/strona-dla-firmy-produkcyjnej
//   (singlepage-manufacturing-company.pl, linked to EN/RU) — the planned duplicate was dropped.
//
// 0. Language link check (no-op when the PL page is already in the metadata).
// 1. Services hubs EN / PL / RU: new pages go into the industry SEO and website sections
//    (a section is found by a page it already lists, by slug).
// 2. One sentence after the last paragraph of the main text of the existing manufacturer,
//    lingerie-manufacturer and B2B pages.
//
// Idempotent; aborts on drafts; one transaction, one patch per change.
//
// Usage: node scripts/apply-nonprofit-manufacturing-links.cjs           dry run
//        node scripts/apply-nonprofit-manufacturing-links.cjs --apply   write

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

const NEW = [
  "singlepage-nonprofit-website-design", "singlepage-nonprofit-website-design.pl", "singlepage-charity-website-design", "singlepage-nonprofit-seo",
  "singlepage-manufacturing-seo", "singlepage-manufacturing-seo.pl", "singlepage-manufacturing-seo.ru", "singlepage-manufacturing-website-design",
];

const LANG_LINK = { anchor: "singlepage-manufacturing-company", lang: "pl", ref: "singlepage-manufacturing-company.pl" };

// marker: slugs of pages the target section already lists (first match wins)
const HUB = [
  { lang: "en", marker: ["seo-for-law-firms", "seo-for-construction-companies"], refs: ["singlepage-nonprofit-seo", "singlepage-manufacturing-seo"] },
  { lang: "en", marker: ["lawyer-website-development", "hotel-website"], refs: ["singlepage-nonprofit-website-design", "singlepage-charity-website-design", "singlepage-manufacturing-website-design"] },
  { lang: "pl", marker: ["seo-dla-kancelarii-prawnych", "pozycjonowanie-strony-firmy-budowlanej"], refs: ["singlepage-manufacturing-seo.pl"] },
  { lang: "pl", marker: ["strona-internetowa-dla-adwokata", "strona-dla-startupu", "strona-dla-hotelu"], refs: ["singlepage-nonprofit-website-design.pl"] },
  { lang: "ru", marker: ["seo-dlya-yuridicheskogo-sayta", "seo-prodvizhenie-saita-stroitelnoi-kompanii"], refs: ["singlepage-manufacturing-seo.ru"] },
];

const TEXT = [
  { lang: "en", slug: "manufacturing-company-website",
    para: para("How the site looks to engineers and buyers is covered on the ", ["manufacturing website design", "/manufacturing-website-design"], " page, and how it gets found by capability, material and industry on the ", ["manufacturing SEO", "/manufacturing-seo"], " page.") },
  { lang: "en", slug: "seo-for-lingerie-manufacturers",
    para: para("For manufacturers in other industries — machining, metalwork, plastics, contract manufacturing — see ", ["manufacturing SEO", "/manufacturing-seo"], ".") },
  { lang: "en", slug: "website-development-for-lingerie-manufacturers",
    para: para("For manufacturers in other industries, see ", ["manufacturing website design", "/manufacturing-website-design"], ".") },
  { lang: "en", slug: "b2b-seo",
    para: para("For factories, job shops and contract manufacturers, the ", ["manufacturing SEO", "/manufacturing-seo"], " page goes into capability pages, certifications and RFQs.") },
  { lang: "en", slug: "b2b-website-design",
    para: para("For factories and contract manufacturers, see ", ["manufacturing website design", "/manufacturing-website-design"], ".") },
  { lang: "pl", slug: "pozycjonowanie-strony-producenta-bielizny",
    para: para("Producentów i podwykonawców z innych branż — obróbka, metal, tworzywa — opisuję na stronie ", ["pozycjonowanie strony firmy produkcyjnej", "/pl/pozycjonowanie-strony-firmy-produkcyjnej"], ".") },
  { lang: "pl", slug: "strona-internetowa-dla-producenta-bielizny",
    para: para("Stronę dla producenta z innej branży opisuję na stronie ", ["strona dla firmy produkcyjnej", "/pl/strona-dla-firmy-produkcyjnej"], ".") },
  { lang: "ru", slug: "sait-dlya-proizvodstvennoy-kompanii",
    para: para("Как такой сайт находят по возможностям, материалам и отраслям, описано на странице ", ["продвижение сайта производителя", "/ru/prodvizhenie-saita-proizvoditelya"], ".") },
  { lang: "ru", slug: "prodvizhenie-saita-proizvoditelya-nizhnego-belya",
    para: para("Для производителей из других отраслей — металлообработка, пластик, контрактное производство — есть страница ", ["продвижение сайта производителя", "/ru/prodvizhenie-saita-proizvoditelya"], ".") },
  { lang: "ru", slug: "prodvizhenie-b2b",
    para: para("Для заводов и контрактного производства подробнее — на странице ", ["продвижение сайта производителя", "/ru/prodvizhenie-saita-proizvoditelya"], ".") },
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

  // 0. language link
  const meta = await client.fetch(
    `*[_type == "translation.metadata" && count(translations[value._ref == $a]) > 0][0]{_id, _rev, "keys": translations[]._key}`,
    { a: LANG_LINK.anchor },
  );
  if (!meta) throw new Error(`translation.metadata for ${LANG_LINK.anchor} not found`);
  if (meta.keys.includes(LANG_LINK.lang)) console.log(`skip  ${meta._id}: already has ${LANG_LINK.lang}`);
  else {
    console.log(`link  ${meta._id} (${meta.keys.join(", ")}) + ${LANG_LINK.lang} → ${LANG_LINK.ref}`);
    patches.push({ id: meta._id, rev: meta._rev, op: (q) => q.insert("after", "translations[-1]", [{
      _key: LANG_LINK.lang, _type: "internationalizedArrayReferenceValue",
      value: { _type: "reference", _ref: LANG_LINK.ref, _weak: true, _strengthenOnPublish: { type: "singlepage" } },
    }]) });
  }

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
    if (!sec) throw new Error(`${h.lang} hub: no section lists any of ${h.marker.join(", ")}; sections: ${hub.blocks.map((b) => b.title).join(" | ")}`);
    const missing = h.refs.filter((r) => !(sec.refs || []).includes(r));
    if (!missing.length) { console.log(`skip  ${h.lang} hub «${sec.title}»: already lists all`); continue; }
    console.log(`add   ${h.lang} hub «${sec.title}»: ${missing.join(", ")}`);
    patches.push({ id: hub._id, rev: hub._rev, op: (q) => q.insert("after", `contentBlocks[_key=="${sec._key}"].items[-1]`, missing.map((r) => ({ _key: key(), _type: "reference", _ref: r }))) });
  }

  // 2. sentences
  for (const t of texts) {
    const blocks = (t.doc.contentBlocks || []).filter((x) => x._type === "textContent");
    const b = blocks.find((x) => x.layout === "guide") || blocks[0];
    if (!b || !(b.content || []).length) { console.log(`warn  ${t.lang} «${t.slug}»: no text block — sentence skipped`); continue; }
    if (blocks.some((x) => (x.content || []).some((y) => plain(y) === plain(t.para)))) { console.log(`skip  ${t.lang} «${t.slug}»: sentence already there`); continue; }
    const last = b.content[b.content.length - 1];
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
