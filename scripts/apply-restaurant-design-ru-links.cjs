// scripts/apply-restaurant-design-ru-links.cjs
//
// Brings /ru/dizain-saita-restorana into the Russian restaurant group after it
// is created (create-landing.cjs --add-languages), so it is not an orphan:
//   - /ru/uslugi «Разработка сайтов – по отраслям»: right after the restaurant
//     development page
//   - /ru/sait-dlya-restorana, /ru/seo-prodvizhenie-saita-restorana and
//     /ru/uslugi/prodvizhenie-saita-restorana-varshava: one sentence each,
//     placed after the paragraph that already links the group
//
// Found by _key/title AND anchor text; idempotent; aborts on drafts; one
// transaction.
//
// Usage: node scripts/apply-restaurant-design-ru-links.cjs           dry run
//        node scripts/apply-restaurant-design-ru-links.cjs --apply   write

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

const DESIGN = "singlepage-restaurant-website-design.ru";
const HREF = "/ru/dizain-saita-restorana";
const key = () => crypto.randomBytes(6).toString("hex");
const plain = (b) => (b.children || []).map((c) => c.text).join("");
function para(before, linkText, after) {
  const mk = key();
  return {
    _type: "block", _key: key(), style: "normal",
    markDefs: [{ _type: "link", _key: mk, href: HREF }],
    children: [
      { _type: "span", _key: key(), text: before, marks: [] },
      { _type: "span", _key: key(), text: linkText, marks: [mk] },
      { _type: "span", _key: key(), text: after, marks: [] },
    ],
  };
}

const TEXT_EDITS = [
  {
    id: "singlepage-restaurant.ru",
    anchor: "Видимость ресторана в Google и в картах — отдельная работа",
    para: para("Как сайт выглядит и читается на телефоне гостя, описано на странице ", "дизайн сайта ресторана", "."),
  },
  {
    id: "singlepage-restaurant-seo.ru",
    anchor: "Если нынешний сайт этого не потянет",
    para: para("Каким должен быть сайт, чтобы гости бронировали, — на странице ", "дизайн сайта ресторана", "."),
  },
  {
    id: "singlepage-seo-restauracja-warszawa.ru",
    anchor: "Для ресторанов за пределами Варшавы та же работа описана",
    para: para("Каким должен быть сам сайт, чтобы гости бронировали, — на странице ", "дизайн сайта ресторана", "."),
  },
];

async function main() {
  const design = await client.fetch(`*[_id == $id][0]{_id, "s": slug.ru.current}`, { id: DESIGN });
  if (!design) {
    console.log(`Aborting — ${DESIGN} does not exist yet. Create it first: node scripts/create-landing.cjs --fixtures restaurant-website-design.en,restaurant-website-design.ru --add-languages --apply`);
    process.exit(1);
  }
  const hub = await client.fetch(
    `*[_type == "singlepage" && pageType == "servicesIndex" && language == "ru" && !(_id in path("drafts.**"))][0]{
      _id, _rev, "blocks": contentBlocks[_type == "relatedServicesBlock"]{ _key, title, "refs": items[]._ref }
    }`,
  );
  const ids = [hub._id, ...TEXT_EDITS.map((e) => e.id)];
  const drafts = await client.fetch(`*[_id in $ids]._id`, { ids: ids.map((i) => `drafts.${i}`) });
  if (drafts.length) {
    console.log(`Aborting — drafts exist, publish or discard them first: ${drafts.join(", ")}`);
    process.exit(1);
  }

  const patches = [];
  const section = hub.blocks.find((b) => b.title === "Разработка сайтов – по отраслям");
  if (!section) throw new Error("ru hub: section «Разработка сайтов – по отраслям» not found");
  if (section.refs.includes(DESIGN)) console.log("skip  hub: already lists the design page");
  else {
    if (!section.refs.includes("singlepage-restaurant.ru")) throw new Error("ru hub: restaurant development page missing from the section");
    console.log(`add   hub «${section.title}»: ${DESIGN} after singlepage-restaurant.ru`);
    const where = `contentBlocks[_key=="${section._key}"].items[_ref=="singlepage-restaurant.ru"]`;
    patches.push({ id: hub._id, rev: hub._rev, op: (p) => p.insert("after", where, [{ _key: key(), _type: "reference", _ref: DESIGN }]) });
  }

  const docs = await client.fetch(`*[_id in $ids]{_id, _rev, contentBlocks}`, { ids: TEXT_EDITS.map((e) => e.id) });
  for (const e of TEXT_EDITS) {
    const doc = docs.find((d) => d._id === e.id);
    if (!doc) throw new Error(`${e.id} not found`);
    let hit = null;
    for (const b of doc.contentBlocks.filter((x) => x._type === "textContent")) {
      const a = (b.content || []).find((x) => plain(x).startsWith(e.anchor));
      if (a) { hit = { b, a }; break; }
    }
    if (!hit) throw new Error(`${e.id}: paragraph «${e.anchor}…» not found`);
    if (hit.b.content.some((x) => plain(x) === plain(e.para))) {
      console.log(`skip  ${e.id}: sentence already there`);
      continue;
    }
    console.log(`\n${e.id} (after «${e.anchor.slice(0, 45)}…»):\n  ${plain(e.para)}`);
    const where = `contentBlocks[_key=="${hit.b._key}"].content[_key=="${hit.a._key}"]`;
    patches.push({ id: doc._id, rev: doc._rev, op: (p) => p.insert("after", where, [e.para]) });
  }

  if (!patches.length) return console.log("\nNothing to do.");
  if (!APPLY) return console.log("\nDry run — nothing written. Add --apply to write.");
  const tx = client.transaction();
  for (const p of patches) tx.patch(p.id, (x) => p.op(x.ifRevisionId(p.rev)));
  await tx.commit();
  console.log(`\nWritten: ${patches.map((p) => p.id).join(", ")}`);
  console.log("The webhook revalidates these pages; nothing to deploy.");
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
