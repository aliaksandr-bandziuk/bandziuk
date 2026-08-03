// scripts/apply-blog-batch2.cjs
// Pass 1: create with only currently-resolvable relatedArticles.
// Pass 2: patch in intra-batch cross-references once all of this batch's docs exist.
// Pass 3: backfill any EARLIER batch's articles that were waiting on one of this batch's docs.
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
const allDocs = JSON.parse(fs.readFileSync(path.join(DRAFTS, "_blog-batch2-docs.json"), "utf8"));

// Backfill targets: docs from EARLIER batches whose relatedArticles were pending on THIS batch's
// new articles. { docId: [ref, ...] } — only refs that should now resolve.
const BACKFILL_PLAN = {
  "blog-auto-repair-website-cost": ["blog-platform-choice"],
  "blog-auto-repair-website-cost.pl": ["blog-platform-choice.pl"],
  "blog-auto-repair-website-cost.ru": ["blog-platform-choice.ru"],
  "blog-construction-website-cost": ["blog-how-to-choose-developer"],
  "blog-construction-website-cost.pl": ["blog-how-to-choose-developer.pl"],
  "blog-construction-website-cost.ru": ["blog-how-to-choose-developer.ru"],
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
      const sameB = p.perLang[lang].deferred.filter((r) => allIds.includes(r._ref));
      const pending = p.perLang[lang].deferred.filter((r) => !allIds.includes(r._ref));
      if (sameB.length) console.log(`  [${lang}] deferred (same-batch, patched in Pass 2): ${sameB.map((r) => r._ref).join(", ")}`);
      if (pending.length) console.log(`  [${lang}] PENDING (future batch): ${pending.map((r) => r._ref).join(", ")}`);
    }
  }

  console.log("\n=== BACKFILL PLAN (Pass 3, earlier batches) ===");
  for (const [docId, refs] of Object.entries(BACKFILL_PLAN)) {
    console.log(`  ${docId}: += ${refs.join(", ")}`);
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
        const assetPath = path.join(DRAFTS, d._imageFile);
        const asset = await client.assets.upload("image", fs.createReadStream(assetPath), { filename: d._imageFile });
        d.previewImage = { _type: "image", asset: { _type: "reference", _ref: asset._id }, alt: d._coverAlt };
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
        const newRelated = [...p.perLang[lang].now, ...deferred];
        await client.patch(docId).set({ relatedArticles: newRelated }).commit();
        console.log(`Patched ${docId} relatedArticles += ${deferred.map((r) => r._ref).join(", ")}`);
      }
    }

    console.log("\n=== PASS 3: BACKFILL earlier batches ===");
    const backfillIds = Object.keys(BACKFILL_PLAN);
    const backfillDocs = await client.fetch(`*[_id in $ids]{ _id, relatedArticles }`, { ids: backfillIds });
    const backfillMap = Object.fromEntries(backfillDocs.map((d) => [d._id, d]));
    for (const [docId, refsToAdd] of Object.entries(BACKFILL_PLAN)) {
      const doc = backfillMap[docId];
      if (!doc) { console.log(`SKIP ${docId} — doc not found`); continue; }
      const cur = doc.relatedArticles || [];
      const already = new Set(cur.map((r) => r._ref));
      const newRefs = refsToAdd.filter((r) => !already.has(r));
      if (!newRefs.length) { console.log(`SKIP ${docId} — already has these refs`); continue; }
      const newArr = [...cur, ...newRefs.map((r) => ({ _key: require("crypto").randomBytes(6).toString("hex"), _type: "reference", _ref: r }))];
      await client.patch(docId).set({ relatedArticles: newArr }).commit();
      console.log(`Backfilled ${docId} += ${newRefs.join(", ")}`);
    }
  } else {
    console.log("\nSkipping Pass 2/3 — not all articles in this batch were created successfully.");
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
