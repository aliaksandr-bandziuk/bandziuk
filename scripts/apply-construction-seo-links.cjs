// scripts/apply-construction-seo-links.cjs
//
// Run after the topic-4 pages exist (create-landing.cjs --fixtures
// construction-seo.en,construction-seo.pl,construction-seo.ru --apply).
//
// 1. Services hubs: the SEO pages go into «SEO for industries» / «SEO dla
//    branż» / «SEO для отраслей».
// 2. Warsaw construction SEO pages (PL, RU) link the new country-wide SEO page
//    of their language: one sentence at the end of «Co obejmuje praca» /
//    «Что входит в работу».
// 3. Construction design pages (EN, RU) link the SEO page of their language:
//    one sentence after the redesign paragraph. (The SEO pages already link
//    the design pages.)
//
// Found by title/_key AND text; idempotent; aborts on drafts; one transaction.
//
// Usage: node scripts/apply-construction-seo-links.cjs           dry run
//        node scripts/apply-construction-seo-links.cjs --apply   write

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

const NEW = {
  en: "singlepage-seo-for-construction-companies",
  pl: "singlepage-seo-for-construction-companies.pl",
  ru: "singlepage-seo-for-construction-companies.ru",
};

const HUBS = [
  { lang: "en", title: "SEO for industries", ref: NEW.en },
  { lang: "pl", title: "SEO dla branż", ref: NEW.pl },
  { lang: "ru", title: "SEO для отраслей", ref: NEW.ru },
];

// block: a _key, or "guide" for the guide text block. mode: end | after
const TEXT = [
  {
    id: "singlepage-seo-budowlana-warszawa.pl", block: "3a3e01f7a8f2", mustHave: "Co obejmuje praca", mode: "end",
    para: linkPara("Firmom budowlanym spoza Warszawy ta sama praca jest opisana na stronie ", "pozycjonowanie strony firmy budowlanej", "/pl/pozycjonowanie-strony-firmy-budowlanej", "."),
  },
  {
    id: "singlepage-seo-budowlana-warszawa.ru", block: "af2e28540d2f", mustHave: "Что входит в работу", mode: "end",
    para: linkPara("Для строительных компаний за пределами Варшавы та же работа описана на странице ", "SEO-продвижение сайта строительной компании", "/ru/seo-prodvizhenie-saita-stroitelnoi-kompanii", "."),
  },
  {
    id: "singlepage-construction-website-design", block: "guide", mustHave: "How the construction website design process works", mode: "after",
    anchor: "If you already have a website and want a new design",
    para: linkPara("Design brings enquiries from clients who are already on the site. Getting found in the first place — Google Maps, local search, AI answers — is covered on the ", "SEO for construction companies", "/seo-for-construction-companies", " page."),
  },
  {
    id: "singlepage-construction-website-design.ru", block: "guide", mustHave: "Как проходит работа над дизайном сайта строительной компании", mode: "after",
    anchor: "Если сайт уже есть и нужен новый дизайн",
    para: linkPara("Чтобы вас вообще находили — в Google Картах, локальном поиске и ответах ИИ, — нужна другая работа, она описана на странице ", "SEO-продвижение сайта строительной компании", "/ru/seo-prodvizhenie-saita-stroitelnoi-kompanii", "."),
  },
];

async function main() {
  const exist = await client.fetch(`*[_id in $ids]._id`, { ids: Object.values(NEW) });
  if (exist.length !== 3) {
    console.log("Aborting — create the topic-4 pages first: node scripts/create-landing.cjs --fixtures construction-seo.en,construction-seo.pl,construction-seo.ru --apply");
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
    const hub = hubs.find((x) => x.language === h.lang);
    const sec = hub && hub.blocks.find((b) => b.title === h.title);
    if (!sec) throw new Error(`${h.lang} hub: section «${h.title}» not found`);
    if (sec.refs.includes(h.ref)) { console.log(`skip  ${h.lang} hub: already lists ${h.ref}`); continue; }
    console.log(`add   ${h.lang} hub «${h.title}» (${sec.refs.length} items): ${h.ref} at the end`);
    patches.push({ id: hub._id, rev: hub._rev, op: (p) => p.insert("after", `contentBlocks[_key=="${sec._key}"].items[-1]`, [{ _key: key(), _type: "reference", _ref: h.ref }]) });
  }

  const docs = await client.fetch(`*[_id in $ids]{_id, _rev, contentBlocks}`, { ids: TEXT.map((t) => t.id) });
  for (const t of TEXT) {
    const doc = docs.find((d) => d._id === t.id);
    if (!doc) throw new Error(`${t.id} not found`);
    const b = t.block === "guide"
      ? doc.contentBlocks.find((x) => x._type === "textContent" && x.layout === "guide")
      : doc.contentBlocks.find((x) => x._key === t.block);
    if (!b || !b.content.some((x) => plain(x) === t.mustHave)) throw new Error(`${t.id}: block with «${t.mustHave}» not found — page changed, check by hand`);
    if (b.content.some((x) => plain(x) === plain(t.para))) { console.log(`skip  ${t.id}: sentence already there`); continue; }
    let where = `contentBlocks[_key=="${b._key}"].content[-1]`;
    if (t.mode === "after") {
      const a = b.content.find((x) => plain(x).startsWith(t.anchor));
      if (!a) throw new Error(`${t.id}: paragraph «${t.anchor}…» not found`);
      where = `contentBlocks[_key=="${b._key}"].content[_key=="${a._key}"]`;
    }
    console.log(`\n${t.id} (${t.mode === "after" ? `after «${t.anchor.slice(0, 40)}…»` : `end of «${t.mustHave}»`}):\n  ${plain(t.para)}`);
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
  console.log("The webhook revalidates these pages. The new SEO pages themselves need a deploy.");
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
