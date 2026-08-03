// scripts/apply-batch7-landings.cjs
// Batch 7: web-development-warsaw, platform-migration. See apply-batch1-landings.cjs for notes.
const fs = require("fs");
const path = require("path");
const { createClient } = require("@sanity/client");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local") });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const APPLY = process.argv.includes("--apply");
const allDocs = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../drafts/_batch7-docs.json"), "utf8"));

async function main() {
  const names = Object.keys(allDocs);
  const allIds = names.flatMap((name) => {
    const { docs, metaDoc } = allDocs[name];
    return [docs.en._id, docs.pl._id, docs.ru._id, metaDoc._id];
  });
  const existing = await client.fetch(`*[_id in $ids]._id`, { ids: allIds });
  if (existing.length > 0) {
    console.log(`Aborting — these documents already exist: ${existing.join(", ")}`);
    process.exit(1);
  }

  if (!APPLY) {
    console.log("Dry run only (no --apply flag) — nothing was written.");
    console.log(`Would create ${names.length} landings: ${names.join(", ")}`);
    return;
  }

  const results = {};
  for (const name of names) {
    const { docs, metaDoc } = allDocs[name];
    console.log(`\n=== CREATING ${name} (EN -> PL -> RU -> i18n) ===`);
    const createdIds = [];
    try {
      for (const lang of ["en", "pl", "ru"]) {
        await client.create(docs[lang]);
        createdIds.push(docs[lang]._id);
        console.log(`OK create ${docs[lang]._id}`);
      }
      await client.create(metaDoc);
      createdIds.push(metaDoc._id);
      console.log(`OK link   ${metaDoc._id}`);
      results[name] = "created";
    } catch (err) {
      console.error(`FAILED (${name}): ${err.message}`);
      if (createdIds.length) {
        console.log(`Rolling back ${name}: ${createdIds.join(", ")}`);
        for (const id of createdIds) await client.delete(id).catch(() => {});
      }
      results[name] = "failed";
      console.log(`Stopping batch after failure on ${name}.`);
      break;
    }
  }

  console.log("\n=== BATCH SUMMARY ===");
  console.log(JSON.stringify(results, null, 2));

  console.log("\n=== VERIFY ===");
  const verifyIds = names.filter((n) => results[n] === "created").flatMap((name) => {
    const { docs, metaDoc } = allDocs[name];
    return [docs.en._id, docs.pl._id, docs.ru._id, metaDoc._id];
  });
  const check = await client.fetch(`*[_id in $ids]{ _id, _type, language, title, "slug": slug }`, { ids: verifyIds });
  console.log(JSON.stringify(check, null, 2));
  console.log(`\nCreated ${check.length}/${verifyIds.length} expected docs.`);
}

main().catch((err) => { console.error(err); process.exit(1); });
