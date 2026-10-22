// scripts/apply-restaurant-hub-links.cjs
//
// 1. Links the new restaurant landings from the services hubs (/services,
//    /pl/oferty, /ru/uslugi), in the industry sections that already exist:
//      EN «Website development by industry» — /restaurant-website-design, right
//         after /restaurant-website
//      EN «SEO for industries», PL «SEO dla branż», RU «SEO для отраслей» —
//         the restaurant SEO page of that language, at the end
//    Before this the pages had no internal links from the menu side at all.
// 2. Fixes the Warsaw link on the PL and RU restaurant SEO pages: the Warsaw
//    pages live under /pl/oferty/ and /ru/uslugi/, so the old href only worked
//    through a redirect.
//
// Blocks are found by title and must contain an expected neighbour, so a
// renamed or reordered hub stops the script instead of being patched blindly.
// Aborts if any touched document has a draft: the site reads drafts.
//
// Usage: node scripts/apply-restaurant-hub-links.cjs           dry run
//        node scripts/apply-restaurant-hub-links.cjs --apply   write

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

const HUB_INSERTS = [
  { lang: "en", title: "Website development by industry", ref: "singlepage-restaurant-website-design", after: "singlepage-restaurant" },
  { lang: "en", title: "SEO for industries", ref: "singlepage-restaurant-seo", after: null },
  { lang: "pl", title: "SEO dla branż", ref: "singlepage-restaurant-seo.pl", after: null },
  { lang: "ru", title: "SEO для отраслей", ref: "singlepage-restaurant-seo.ru", after: null },
];

const HREF_FIXES = [
  { id: "singlepage-restaurant-seo.pl", from: "/pl/pozycjonowanie-strony-restauracji-warszawa", to: "/pl/oferty/pozycjonowanie-strony-restauracji-warszawa" },
  { id: "singlepage-restaurant-seo.ru", from: "/ru/prodvizhenie-saita-restorana-varshava", to: "/ru/uslugi/prodvizhenie-saita-restorana-varshava" },
];

const key = () => crypto.randomBytes(6).toString("hex");

async function main() {
  const hubs = await client.fetch(
    `*[_type == "singlepage" && pageType == "servicesIndex" && !(_id in path("drafts.**"))]{
      _id, _rev, language,
      "blocks": contentBlocks[_type == "relatedServicesBlock"]{ _key, title, "refs": items[]._ref }
    }`,
  );
  const targets = await client.fetch(`*[_id in $ids]{_id, title}`, { ids: HUB_INSERTS.map((h) => h.ref) });
  const touched = [...hubs.map((h) => h._id), ...HREF_FIXES.map((f) => f.id)];
  const drafts = await client.fetch(`*[_id in $ids]._id`, { ids: touched.map((i) => `drafts.${i}`) });
  if (drafts.length) {
    console.log(`Aborting — drafts exist, publish or discard them first: ${drafts.join(", ")}`);
    process.exit(1);
  }

  const patches = [];

  for (const ins of HUB_INSERTS) {
    const hub = hubs.find((h) => h.language === ins.lang);
    if (!hub) throw new Error(`${ins.lang}: services hub not found`);
    const block = hub.blocks.find((b) => b.title === ins.title);
    if (!block) throw new Error(`${ins.lang}: section «${ins.title}» not found on ${hub._id}`);
    if (!targets.find((t) => t._id === ins.ref)) throw new Error(`${ins.ref} does not exist`);
    if (block.refs.includes(ins.ref)) {
      console.log(`skip  ${ins.lang} «${ins.title}»: already has ${ins.ref}`);
      continue;
    }
    if (ins.after && !block.refs.includes(ins.after)) throw new Error(`${ins.lang} «${ins.title}»: expected ${ins.after} in the section`);
    const item = { _key: key(), _type: "reference", _ref: ins.ref };
    const where = ins.after
      ? `contentBlocks[_key=="${block._key}"].items[_ref=="${ins.after}"]`
      : `contentBlocks[_key=="${block._key}"].items[-1]`;
    console.log(`add   ${ins.lang} «${ins.title}» (${block.refs.length} items): ${ins.ref} ${ins.after ? `after ${ins.after}` : "at the end"}`);
    patches.push({ id: hub._id, rev: hub._rev, op: (p) => p.insert("after", where, [item]) });
  }

  for (const fix of HREF_FIXES) {
    const doc = await client.fetch(`*[_id == $id][0]{_id, _rev, contentBlocks}`, { id: fix.id });
    if (!doc) throw new Error(`${fix.id} not found`);
    const json = JSON.stringify(doc.contentBlocks);
    const n = json.split(`"href":"${fix.from}"`).length - 1;
    if (!n) {
      console.log(`skip  ${fix.id}: no link to ${fix.from}`);
      continue;
    }
    const next = JSON.parse(json.split(`"href":"${fix.from}"`).join(`"href":"${fix.to}"`));
    console.log(`href  ${fix.id}: ${fix.from} → ${fix.to} (${n}×)`);
    patches.push({ id: doc._id, rev: doc._rev, op: (p) => p.set({ contentBlocks: next }) });
  }

  if (!patches.length) {
    console.log("\nNothing to do.");
    return;
  }
  if (!APPLY) {
    console.log("\nDry run — nothing written. Add --apply to write.");
    return;
  }

  // Several inserts can hit the same hub document: chain them in one patch.
  const byDoc = new Map();
  for (const p of patches) {
    if (!byDoc.has(p.id)) byDoc.set(p.id, { rev: p.rev, ops: [] });
    byDoc.get(p.id).ops.push(p.op);
  }
  const tx = client.transaction();
  for (const [id, { rev, ops }] of byDoc) {
    tx.patch(id, (p) => ops.reduce((acc, op) => op(acc), p.ifRevisionId(rev)));
  }
  await tx.commit();
  console.log(`\nWritten: ${[...byDoc.keys()].join(", ")}`);
  console.log("The webhook revalidates these pages; nothing to deploy.");
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
