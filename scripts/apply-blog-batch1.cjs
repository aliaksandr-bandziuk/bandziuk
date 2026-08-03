// scripts/apply-blog-batch1.cjs
// Sanity enforces strong-reference integrity on create() (unlike translation.metadata's weak
// refs) — a document can't be created referencing a not-yet-existing doc. This handles that:
// Pass 1 creates each article with only currently-resolvable relatedArticles (existing docs).
// Pass 2 patches in intra-batch cross-references once all of this batch's docs exist.
// Refs to articles in FUTURE batches are printed as PENDING — each future batch's apply script
// must patch them back in once the target exists.
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
const DRAFTS = path.resolve(__dirname, "../drafts");
const allDocs = JSON.parse(fs.readFileSync(path.join(DRAFTS, "_blog-batch1-docs.json"), "utf8"));

// Reuse the images already uploaded in the previous (failed) attempt.
const IMAGE_ASSET_BY_FILE = {
  "WHAT-A-PSYCHOLOGIST-WEBSITE-NEEDS.jpg": "image-d453323fd927ad35fa870bfd4e9870f0fd4da1df-1672x941-jpg",
  "HOW-MUCH-AN-AUTO-REPAIR-SHOP-WEBSITE-COSTS.jpg": "image-f07509b14ecb940ce8b36f53b916aad1d7ad5953-1672x941-jpg",
  "HOW-MUCH-A-CONSTRUCTION-COMPANY-WEBSITE-COSTS.jpg": "image-bffc025dc85e05d76ba0a66105ba9b43899cfcec-1672x941-jpg",
};

async function main() {
  const names = Object.keys(allDocs);
  const allIds = names.flatMap((name) => {
    const { docs, metaDoc } = allDocs[name];
    return [docs.en._id, docs.pl._id, docs.ru._id, metaDoc._id];
  });
  const existingCollision = await client.fetch(`*[_id in $ids]._id`, { ids: allIds });
  if (existingCollision.length > 0) {
    console.log(`Aborting — these documents already exist: ${existingCollision.join(", ")}`);
    process.exit(1);
  }

  // Determine which relatedArticles refs already resolve right now (pre-existing docs from
  // before this batch — same-batch siblings don't exist yet so they're excluded here).
  const allRelatedRefs = [...new Set(names.flatMap((name) => {
    const { docs } = allDocs[name];
    return ["en", "pl", "ru"].flatMap((lang) => docs[lang].relatedArticles.map((r) => r._ref));
  }))];
  const resolvableRefs = new Set(await client.fetch(`*[_id in $ids]._id`, { ids: allRelatedRefs }));

  const plan = names.map((name) => {
    const { docs, metaDoc } = allDocs[name];
    const perLang = {};
    for (const lang of ["en", "pl", "ru"]) {
      const full = docs[lang].relatedArticles;
      const now = full.filter((r) => resolvableRefs.has(r._ref));
      const deferred = full.filter((r) => !resolvableRefs.has(r._ref));
      perLang[lang] = { now, deferred };
    }
    return { name, docs, metaDoc, perLang };
  });

  console.log("=== PLAN ===");
  for (const p of plan) {
    console.log(`\n${p.name}`);
    for (const lang of ["en", "pl", "ru"]) {
      console.log(`  [${lang}] relatedArticles now: ${p.perLang[lang].now.map((r) => r._ref).join(", ") || "(none)"}`);
      if (p.perLang[lang].deferred.length) {
        console.log(`  [${lang}] deferred (same-batch, patched in Pass 2): ${p.perLang[lang].deferred.filter((r) => allIds.includes(r._ref)).map((r) => r._ref).join(", ") || "(none)"}`);
        console.log(`  [${lang}] PENDING (future batch, needs manual backfill later): ${p.perLang[lang].deferred.filter((r) => !allIds.includes(r._ref)).map((r) => r._ref).join(", ") || "(none)"}`);
      }
    }
  }

  if (!APPLY) {
    console.log("\nDry run only (no --apply flag) — nothing was written.");
    return;
  }

  console.log("\n=== PASS 1: CREATE (with resolvable relatedArticles only) ===");
  const results = {};
  for (const p of plan) {
    console.log(`\n--- CREATING ${p.name} (EN -> PL -> RU -> i18n) ---`);
    const createdIds = [];
    try {
      for (const lang of ["en", "pl", "ru"]) {
        const d = { ...p.docs[lang] };
        const assetId = IMAGE_ASSET_BY_FILE[d._imageFile];
        d.previewImage = { _type: "image", asset: { _type: "reference", _ref: assetId }, alt: d._coverAlt };
        d.relatedArticles = p.perLang[lang].now;
        delete d._imageFile;
        delete d._coverAlt;
        await client.create(d);
        createdIds.push(d._id);
        console.log(`OK create ${d._id}`);
      }
      await client.create(p.metaDoc);
      createdIds.push(p.metaDoc._id);
      console.log(`OK link   ${p.metaDoc._id}`);
      results[p.name] = "created";
    } catch (err) {
      console.error(`FAILED (${p.name}): ${err.message}`);
      if (createdIds.length) {
        console.log(`Rolling back ${p.name}: ${createdIds.join(", ")}`);
        for (const id of createdIds) await client.delete(id).catch(() => {});
      }
      results[p.name] = "failed";
      console.log(`Stopping batch after failure on ${p.name}.`);
      break;
    }
  }

  console.log("\n=== PASS 1 SUMMARY ===");
  console.log(JSON.stringify(results, null, 2));

  const succeeded = plan.filter((p) => results[p.name] === "created");
  if (succeeded.length === plan.length) {
    console.log("\n=== PASS 2: PATCH intra-batch relatedArticles ===");
    for (const p of succeeded) {
      for (const lang of ["en", "pl", "ru"]) {
        const deferred = p.perLang[lang].deferred.filter((r) => allIds.includes(r._ref));
        if (!deferred.length) continue;
        const docId = p.docs[lang]._id;
        const current = p.perLang[lang].now;
        const newRelated = [...current, ...deferred];
        await client.patch(docId).set({ relatedArticles: newRelated }).commit();
        console.log(`Patched ${docId} relatedArticles += ${deferred.map((r) => r._ref).join(", ")}`);
      }
    }
  } else {
    console.log("\nSkipping Pass 2 — not all articles in this batch were created successfully.");
  }

  console.log("\n=== STILL PENDING (backfill required once these future-batch articles exist) ===");
  for (const p of plan) {
    for (const lang of ["en", "pl", "ru"]) {
      const pending = p.perLang[lang].deferred.filter((r) => !allIds.includes(r._ref));
      if (pending.length) console.log(`  ${p.docs[lang]._id}: += ${pending.map((r) => r._ref).join(", ")}`);
    }
  }

  console.log("\n=== VERIFY ===");
  const verifyIds = succeeded.flatMap((p) => [p.docs.en._id, p.docs.pl._id, p.docs.ru._id, p.metaDoc._id]);
  const check = await client.fetch(`*[_id in $ids]{ _id, _type, language, title, "slug": slug, publishedAt, "relatedArticlesCount": count(relatedArticles) }`, { ids: verifyIds });
  console.log(JSON.stringify(check, null, 2));
  console.log(`\nCreated ${check.length}/${verifyIds.length} expected docs.`);
}

main().catch((err) => { console.error(err); process.exit(1); });
