// scripts/apply-found-via-chatgpt-blog.cjs
//
// Creates the blog-found-via-chatgpt post (EN -> PL -> RU -> i18n metadata)
// from drafts/_found-via-chatgpt-docs.json, built by
// assemble-found-via-chatgpt-blog.cjs. Rolls back all docs created so far
// if any step fails.
//
// Usage: node scripts/apply-found-via-chatgpt-blog.cjs --apply

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

const { docs, metaDoc } = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../drafts/_found-via-chatgpt-docs.json"), "utf8")
);

async function main() {
  const ids = [docs.en._id, docs.pl._id, docs.ru._id, metaDoc._id];

  const existing = await client.fetch(`*[_id in $ids]._id`, { ids });
  if (existing.length > 0) {
    console.log(`Aborting — these documents already exist: ${existing.join(", ")}`);
    process.exit(1);
  }

  if (!APPLY) {
    console.log("Dry run only (no --apply flag) — nothing was written.");
    console.log(`Would create: ${ids.join(", ")}`);
    return;
  }

  console.log("=== CREATING blog-found-via-chatgpt (EN -> PL -> RU -> i18n) ===");
  const createdIds = [];
  try {
    for (const lang of ["en", "pl", "ru"]) {
      const doc = docs[lang];
      await client.create(doc);
      createdIds.push(doc._id);
      console.log(`OK create ${doc._id}`);
    }
    await client.create(metaDoc);
    createdIds.push(metaDoc._id);
    console.log(`OK link   ${metaDoc._id}`);
  } catch (err) {
    console.error(`FAILED: ${err.message}`);
    if (createdIds.length) {
      console.log(`Rolling back: ${createdIds.join(", ")}`);
      for (const id of createdIds) {
        await client.delete(id).catch(() => {});
      }
    }
    process.exit(1);
  }

  console.log("\n=== VERIFY ===");
  const check = await client.fetch(
    `*[_id in $ids]{ _id, _type, language, title, "slug": slug }`,
    { ids }
  );
  console.log(JSON.stringify(check, null, 2));
  console.log(`\nCreated ${check.length}/4 expected docs.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
