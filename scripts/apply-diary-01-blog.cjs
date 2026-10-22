// scripts/apply-diary-01-blog.cjs
//
// Creates the diary #1 post from drafts/_diary-01-docs.json in the order
// EN -> PL -> RU -> translation.metadata. If any step fails, every document
// created in this run is deleted again, so a half-published article never
// stays behind.
//
//   node scripts/apply-diary-01-blog.cjs            dry run
//   node scripts/apply-diary-01-blog.cjs --apply    create

const fs = require("fs");
const path = require("path");
const { client } = require("./create-batch1-warsaw.cjs");

const APPLY = process.argv.includes("--apply");
const { docs, metaDoc } = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../drafts/_diary-01-docs.json"), "utf8")
);

async function main() {
  const ids = [docs.en._id, docs.pl._id, docs.ru._id, metaDoc._id];
  const existing = await client.fetch(`*[_id in $ids]._id`, { ids });
  if (existing.length) {
    console.log(`Aborting — these documents already exist: ${existing.join(", ")}`);
    process.exit(1);
  }

  if (!APPLY) {
    console.log("Dry run — nothing written.");
    console.log("Would create:", ids.join(", "));
    for (const lang of ["en", "pl", "ru"]) {
      const d = docs[lang];
      console.log(`  ${d._id}: ${d.contentBlocks.length} blocks, slug /${d.slug[lang].current}`);
    }
    return;
  }

  const created = [];
  try {
    for (const lang of ["en", "pl", "ru"]) {
      const res = await client.create(docs[lang]);
      created.push(res._id);
      console.log(`created ${res._id}`);
    }
    const meta = await client.create(metaDoc);
    created.push(meta._id);
    console.log(`created ${meta._id}`);
  } catch (e) {
    console.error(`\nFailed: ${e.message}`);
    console.error(`Rolling back ${created.length} document(s)…`);
    for (const id of created.reverse()) {
      try {
        await client.delete(id);
        console.error(`  deleted ${id}`);
      } catch (err) {
        console.error(`  ! could not delete ${id}: ${err.message}`);
      }
    }
    process.exit(1);
  }

  const check = await client.fetch(`*[_id in $ids]{_id, _type}`, { ids });
  console.log(`\nVerified in Sanity: ${check.length} of ${ids.length} documents.`);
  console.log("URLs:");
  console.log(`  https://www.bandziuk.com/blog/${docs.en.slug.en.current}`);
  console.log(`  https://www.bandziuk.com/pl/blog/${docs.pl.slug.pl.current}`);
  console.log(`  https://www.bandziuk.com/ru/blog/${docs.ru.slug.ru.current}`);
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
