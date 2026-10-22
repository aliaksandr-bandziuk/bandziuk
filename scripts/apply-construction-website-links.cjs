// scripts/apply-construction-website-links.cjs
//
// Run after the topic-5 pages exist (create-landing.cjs --fixtures
// construction-company-website.en,construction-company-website.pl,
// construction-company-website.ru --apply) and after topic 4 is published.
//
// 1. Services hubs: the development pages go into «Website development by
//    industry» / «Tworzenie stron – według branży» / «Разработка сайтов – по
//    отраслям», right after the property developer page.
// 2. One sentence linking the development page of the same language on:
//    - the construction design pages (EN, RU) and SEO pages (EN, PL, RU),
//      after the paragraph that already links the group (the same sentences
//      are in the fixtures);
//    - the property developer pages (EN, PL, RU): «if you build for clients
//      rather than sell your own developments…» — keeps the two branches
//      apart (0 shared URLs in the SERP) but connected;
//    - the PL Warsaw construction SEO page (there is no PL design page).
//
// Found by key/title AND text; idempotent; aborts on drafts; one transaction.
//
// Usage: node scripts/apply-construction-website-links.cjs           dry run
//        node scripts/apply-construction-website-links.cjs --apply   write

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
function linkPara(before, linkText, href, after) {
  const mk = key();
  return {
    _type: "block", _key: key(), style: "normal",
    markDefs: [{ _type: "link", _key: mk, href }],
    children: [
      { _type: "span", _key: key(), text: before, marks: [] },
      { _type: "span", _key: key(), text: linkText, marks: [mk] },
      { _type: "span", _key: key(), text: after, marks: [] },
    ],
  };
}

const DEV = {
  en: { id: "singlepage-construction-company-website", href: "/construction-company-website" },
  pl: { id: "singlepage-construction-company-website.pl", href: "/pl/strona-internetowa-dla-firmy-budowlanej" },
  ru: { id: "singlepage-construction-company-website.ru", href: "/ru/sait-dlya-stroitelnoi-kompanii" },
};

const HUBS = [
  { lang: "en", title: "Website development by industry", after: "singlepage-property-developer-website" },
  { lang: "pl", title: "Tworzenie stron – według branży", after: "singlepage-property-developer-website.pl" },
  { lang: "ru", title: "Разработка сайтов – по отраслям", after: "singlepage-property-developer-website.ru" },
];

// block: "guide" or a _key; anchor: paragraph to insert after (startsWith);
// heading: an H2 that must be in the block (startsWith); no anchor = append
const TEXT = [
  { id: "singlepage-seo-for-construction-companies", block: "guide", anchor: "Every new project then becomes a new page",
    para: linkPara("What the website itself needs — the pages, the portfolio your team updates, the quote form — is covered on the ", "construction company website", DEV.en.href, " page.") },
  { id: "singlepage-seo-for-construction-companies.pl", block: "guide", anchor: "Wtedy każda nowa realizacja staje się nową podstroną",
    para: linkPara("Jak zbudować taką stronę — podstrony, portfolio uzupełniane przez ekipę, formularz wyceny — opisuję na stronie ", "strona internetowa dla firmy budowlanej", DEV.pl.href, ".") },
  { id: "singlepage-seo-for-construction-companies.ru", block: "guide", anchor: "Тогда каждый новый объект становится новой страницей",
    para: linkPara("Что нужно самому сайту — страницы, портфолио, которое пополняет бригада, форма заявки, — описано на странице ", "сайт для строительной компании", DEV.ru.href, ".") },
  { id: "singlepage-construction-website-design", block: "guide", anchor: "Design brings enquiries from clients who are already on the site",
    para: linkPara("What goes into the build — the project portfolio, the quote form, hosting and ownership — is covered on the ", "construction company website", DEV.en.href, " page.") },
  { id: "singlepage-construction-website-design.ru", block: "guide", anchor: "Чтобы вас вообще находили",
    para: linkPara("Что входит в разработку — портфолио объектов, форма заявки, хостинг и права на сайт, — описано на странице ", "сайт для строительной компании", DEV.ru.href, ".") },
  { id: "singlepage-property-developer-website", block: "9d18f02d3d4c", heading: "Why a property developer website has to sell",
    para: linkPara("If you build for clients rather than sell units in your own developments, see the ", "construction company website", DEV.en.href, " page.") },
  { id: "singlepage-property-developer-website.pl", block: "61cdec37a8f9", heading: "Dlaczego strona dewelopera sprzedaje",
    para: linkPara("Jeśli budujecie na zlecenie klientów, a nie sprzedajecie mieszkań z własnych inwestycji, zajrzyjcie na stronę ", "strona internetowa dla firmy budowlanej", DEV.pl.href, ".") },
  { id: "singlepage-property-developer-website.ru", block: "dd35105cfa8e", heading: "Почему сайт застройщика продаёт",
    para: linkPara("Если вы строите по заказу клиентов, а не продаёте квартиры в своих проектах, загляните на страницу ", "сайт для строительной компании", DEV.ru.href, ".") },
  { id: "singlepage-seo-budowlana-warszawa.pl", block: "3a3e01f7a8f2", heading: "Co obejmuje praca",
    para: linkPara("Jak powinna wyglądać sama strona firmy budowlanej, opisuję na stronie ", "strona internetowa dla firmy budowlanej", DEV.pl.href, ".") },
];

async function main() {
  const exist = await client.fetch(`*[_id in $ids]._id`, { ids: Object.values(DEV).map((d) => d.id) });
  if (exist.length !== 3) {
    console.log("Aborting — create the topic-5 pages first: node scripts/create-landing.cjs --fixtures construction-company-website.en,construction-company-website.pl,construction-company-website.ru --apply");
    process.exit(1);
  }
  const hubs = await client.fetch(
    `*[_type == "singlepage" && pageType == "servicesIndex" && !(_id in path("drafts.**"))]{
      _id, _rev, language, "blocks": contentBlocks[_type == "relatedServicesBlock"]{ _key, title, "refs": items[]._ref }
    }`,
  );
  const touched = [...hubs.map((h) => h._id), ...TEXT.map((t) => t.id)];
  const drafts = await client.fetch(`*[_id in $ids]._id`, { ids: touched.map((i) => `drafts.${i}`) });
  if (drafts.length) {
    console.log(`Aborting — drafts exist, publish or discard them first: ${drafts.join(", ")}`);
    process.exit(1);
  }

  const patches = [];
  for (const h of HUBS) {
    const ref = DEV[h.lang].id;
    const hub = hubs.find((x) => x.language === h.lang);
    const sec = hub && hub.blocks.find((b) => b.title === h.title);
    if (!sec) throw new Error(`${h.lang} hub: section «${h.title}» not found`);
    if (sec.refs.includes(ref)) { console.log(`skip  ${h.lang} hub: already lists ${ref}`); continue; }
    const has = sec.refs.includes(h.after);
    const where = has ? `contentBlocks[_key=="${sec._key}"].items[_ref=="${h.after}"]` : `contentBlocks[_key=="${sec._key}"].items[-1]`;
    console.log(`add   ${h.lang} hub «${h.title}»: ${ref} ${has ? `after ${h.after}` : "at the end"}`);
    patches.push({ id: hub._id, rev: hub._rev, op: (p) => p.insert("after", where, [{ _key: key(), _type: "reference", _ref: ref }]) });
  }

  const docs = await client.fetch(`*[_id in $ids]{_id, _rev, contentBlocks}`, { ids: TEXT.map((t) => t.id) });
  for (const t of TEXT) {
    const doc = docs.find((d) => d._id === t.id);
    if (!doc) throw new Error(`${t.id} not found — is topic 4 published?`);
    const b = t.block === "guide"
      ? doc.contentBlocks.find((x) => x._type === "textContent" && x.layout === "guide")
      : doc.contentBlocks.find((x) => x._key === t.block);
    if (!b) throw new Error(`${t.id}: text block ${t.block} not found`);
    if (t.heading && !b.content.some((x) => plain(x).startsWith(t.heading))) throw new Error(`${t.id}: heading «${t.heading}…» not in block — page changed, check by hand`);
    if (b.content.some((x) => plain(x) === plain(t.para))) { console.log(`skip  ${t.id}: sentence already there`); continue; }
    let where = `contentBlocks[_key=="${b._key}"].content[-1]`;
    if (t.anchor) {
      const a = b.content.find((x) => plain(x).startsWith(t.anchor));
      if (!a) throw new Error(`${t.id}: paragraph «${t.anchor}…» not found`);
      where = `contentBlocks[_key=="${b._key}"].content[_key=="${a._key}"]`;
    }
    console.log(`\n${t.id} (${t.anchor ? `after «${t.anchor.slice(0, 40)}…»` : "end of the main text"}):\n  ${plain(t.para)}`);
    patches.push({ id: doc._id, rev: doc._rev, op: (p) => p.insert("after", where, [t.para]) });
  }

  if (!patches.length) return console.log("\nNothing to do.");
  if (!APPLY) return console.log("\nDry run — nothing written. Add --apply to write.");
  const byDoc = new Map();
  for (const p of patches) {
    if (!byDoc.has(p.id)) byDoc.set(p.id, { rev: p.rev, ops: [] });
    byDoc.get(p.id).ops.push(p.op);
  }
  const tx = client.transaction();
  for (const [id, { rev, ops }] of byDoc) tx.patch(id, (p) => ops.reduce((acc, op) => op(acc), p.ifRevisionId(rev)));
  await tx.commit();
  console.log(`\nWritten: ${[...byDoc.keys()].join(", ")}`);
  console.log("The webhook revalidates these pages. The new development pages themselves need a deploy.");
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
