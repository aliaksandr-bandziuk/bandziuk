// scripts/apply-construction-design-links.cjs
//
// Run after the topic-3 pages exist (create-landing.cjs --fixtures
// construction-website-design.en,construction-website-design.ru --apply).
//
// 1. Services hubs: the design pages go into «Website development by
//    industry» / «Разработка сайтов – по отраслям», right after the property
//    developer page.
// 2. /ru/uslugi/prodvizhenie-saita-stroitelnoy-kompanii-varshava: one sentence
//    linking the Russian design page, at the end of «Что входит в работу».
// 3. Property developer pages (research/pseo/page-core/construction-recheck.md;
//    intent: developer ≠ construction company, 0 shared URLs):
//    - EN: H1 (heading field; title stays the short breadcrumb label) and meta
//      title carry «real estate developer website» (110/mo, same as «property
//      developer website»); a new H2 section on examples and templates;
//    - PL: H1 and meta title «Strona internetowa dla dewelopera» (140/mo).
//    RU needs nothing: «сайт для застройщика» already is a FAQ question.
//
// Found by _key/title AND text; idempotent; aborts on drafts; one transaction.
//
// Usage: node scripts/apply-construction-design-links.cjs           dry run
//        node scripts/apply-construction-design-links.cjs --apply   write

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
const block = (style, text, extra = {}) => ({
  _type: "block", _key: key(), style, markDefs: [],
  children: [{ _type: "span", _key: key(), text, marks: [] }],
  ...extra,
});
const bullet = (text) => block("normal", text, { listItem: "bullet", level: 1 });
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

const HUBS = [
  { lang: "en", title: "Website development by industry", ref: "singlepage-construction-website-design", after: "singlepage-property-developer-website" },
  { lang: "ru", title: "Разработка сайтов – по отраслям", ref: "singlepage-construction-website-design.ru", after: "singlepage-property-developer-website.ru" },
];

const WARSAW_RU = {
  id: "singlepage-seo-budowlana-warszawa.ru",
  block: "af2e28540d2f",
  mustHave: "Что входит в работу",
  para: linkPara("Каким должен быть сам сайт строительной компании, чтобы клиенты оставляли заявки, — на странице ", "дизайн сайта строительной компании", "/ru/dizain-saita-stroitelnoi-kompanii", "."),
};

const DEV_EN_SECTION = [
  block("h2", "Real estate developer website examples: what the best ones show"),
  block("normal", "Lists of the best real estate developer websites are dominated by 3D tours and video headers. The parts that actually help a buyer decide are simpler, and they work for a developer of any size:"),
  bullet("a page for every development with the location, completion date, unit types and prices or price ranges"),
  bullet("an availability table that is kept current — sold units marked as sold, not removed"),
  bullet("floor plans that open properly on a phone, with areas in square metres"),
  bullet("construction progress updates with dated photos"),
  bullet("one enquiry path per development, sent to the people selling it"),
  block("normal", "A real estate developer website template can present one project well. It rarely copes with several developments, each with its own units and sales status, without turning into pages nobody keeps up to date."),
];

const DOC_EDITS = [
  {
    id: "singlepage-property-developer-website",
    set: { heading: "Property and Real Estate Developer Website Development", "seo.metaTitle": "Property & Real Estate Developer Website | Bandziuk" },
    appendTo: { block: "9d18f02d3d4c", mustHave: "Why a property developer website has to sell something the buyer cannot see yet", blocks: DEV_EN_SECTION },
  },
  {
    id: "singlepage-property-developer-website.pl",
    set: { heading: "Strona internetowa dla dewelopera", "seo.metaTitle": "Strona internetowa dla dewelopera | Bandziuk" },
  },
];

async function main() {
  const for_ids = ["singlepage-construction-website-design", "singlepage-construction-website-design.ru"];
  const exist = await client.fetch(`*[_id in $ids]._id`, { ids: for_ids });
  if (exist.length !== 2) {
    console.log("Aborting — create the topic-3 pages first: node scripts/create-landing.cjs --fixtures construction-website-design.en,construction-website-design.ru --apply");
    process.exit(1);
  }
  const hubs = await client.fetch(
    `*[_type == "singlepage" && pageType == "servicesIndex" && !(_id in path("drafts.**"))]{
      _id, _rev, language, "blocks": contentBlocks[_type == "relatedServicesBlock"]{ _key, title, "refs": items[]._ref }
    }`,
  );
  const touched = [...hubs.map((h) => h._id), WARSAW_RU.id, ...DOC_EDITS.map((e) => e.id)];
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
    const where = sec.refs.includes(h.after)
      ? `contentBlocks[_key=="${sec._key}"].items[_ref=="${h.after}"]`
      : `contentBlocks[_key=="${sec._key}"].items[-1]`;
    console.log(`add   ${h.lang} hub «${h.title}»: ${h.ref} ${sec.refs.includes(h.after) ? `after ${h.after}` : "at the end"}`);
    patches.push({ id: hub._id, rev: hub._rev, op: (p) => p.insert("after", where, [{ _key: key(), _type: "reference", _ref: h.ref }]) });
  }

  const docs = await client.fetch(`*[_id in $ids]{_id, _rev, heading, seo, contentBlocks}`, { ids: [WARSAW_RU.id, ...DOC_EDITS.map((e) => e.id)] });

  {
    const doc = docs.find((d) => d._id === WARSAW_RU.id);
    if (!doc) throw new Error(`${WARSAW_RU.id} not found`);
    const b = doc.contentBlocks.find((x) => x._key === WARSAW_RU.block);
    if (!b || !b.content.some((x) => plain(x) === WARSAW_RU.mustHave)) throw new Error(`${WARSAW_RU.id}: block with «${WARSAW_RU.mustHave}» not found`);
    if (b.content.some((x) => plain(x) === plain(WARSAW_RU.para))) console.log(`skip  ${WARSAW_RU.id}: sentence already there`);
    else {
      console.log(`\n${WARSAW_RU.id} (end of «${WARSAW_RU.mustHave}»):\n  ${plain(WARSAW_RU.para)}`);
      patches.push({ id: doc._id, rev: doc._rev, op: (p) => p.insert("after", `contentBlocks[_key=="${b._key}"].content[-1]`, [WARSAW_RU.para]) });
    }
  }

  for (const e of DOC_EDITS) {
    const doc = docs.find((d) => d._id === e.id);
    if (!doc) throw new Error(`${e.id} not found`);
    const ops = [];
    const set = {};
    for (const [field, value] of Object.entries(e.set)) {
      const now = field === "heading" ? doc.heading : doc.seo?.metaTitle;
      if (now === value) continue;
      console.log(`\n${e.id}: ${field} «${now || "(empty)"}» → «${value}»`);
      set[field] = value;
    }
    if (Object.keys(set).length) ops.push((p) => p.set(set));
    if (e.appendTo) {
      const b = doc.contentBlocks.find((x) => x._key === e.appendTo.block);
      if (!b || !b.content.some((x) => plain(x) === e.appendTo.mustHave)) throw new Error(`${e.id}: block with «${e.appendTo.mustHave.slice(0, 40)}…» not found`);
      if (b.content.some((x) => plain(x) === plain(e.appendTo.blocks[0]))) console.log(`skip  ${e.id}: examples section already there`);
      else {
        console.log(`\n${e.id}, new section at the end of the main text:`);
        for (const x of e.appendTo.blocks) console.log(`  ${x.style === "h2" ? "H2 " : x.listItem ? "• " : ""}${plain(x)}`);
        ops.push((p) => p.insert("after", `contentBlocks[_key=="${b._key}"].content[-1]`, e.appendTo.blocks));
      }
    }
    if (ops.length) patches.push({ id: doc._id, rev: doc._rev, op: (p) => ops.reduce((acc, f) => f(acc), p) });
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
  console.log("The webhook revalidates these pages. The new design pages themselves need a deploy.");
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
