// scripts/set-landing-previewimages.cjs
// Uploads each landing's local hero image once and patches previewImage on all 3 locale docs.
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

const IMG_DIR = path.resolve(__dirname, "../public/images");
const APPLY = process.argv.includes("--apply");

// filename (in public/images) -> baseId of the singlepage doc
const MAP = {
  "ACCOUNTING-FIRM-WEBSITE.jpg": "singlepage-accounting-firm",
  "ARCHITECTURE-STUDIO-WEBSITE.jpg": "singlepage-architecture-studio",
  "CATALOGUE-WEBSITE-WITH-FILTERS.jpg": "singlepage-catalog-website",
  "CLEANING-COMPANY-WEBSITE.jpg": "singlepage-cleaning-company",
  "FITNESS-STUDIO-WEBSITE.jpg": "singlepage-fitness-studio",
  "HOTEL-WEBSITE.jpg": "singlepage-hotel-website",
  "LANGUAGE-SCHOOL-WEBSITE.jpg": "singlepage-language-school",
  "LOGISTICS-COMPANY-WEBSITE.jpg": "singlepage-logistics-company",
  "MANUFACTURING-COMPANY-WEBSITE.jpg": "singlepage-manufacturing-company",
  "MULTILINGUAL-WEBSITE-DEVELOPMENT.jpg": "singlepage-multilingual-website",
  "PHOTOGRAPHER-WEBSITE.jpg": "singlepage-photographer",
  "RECRUITMENT-AGENCY-WEBSITE.jpg": "singlepage-recruitment-agency",
  "RESTAURANT-WEBSITE.jpg": "singlepage-restaurant",
  "STARTUP-WEBSITE.jpg": "singlepage-startup-website",
  "TRAVEL-AGENCY-WEBSITE.jpg": "singlepage-travel-agency",
  "VETERINARY-CLINIC-WEBSITE.jpg": "singlepage-veterinary-clinic",
  "WEB-DEVELOPMENT-IN-WARSAW.jpg": "singlepage-web-development-warsaw",
  "WEBSITE-PLATFORM-MIGRATION.jpg": "singlepage-platform-migration",
  "WEBSITE-WITH-ONLINE-BOOKING.jpg": "singlepage-online-booking",
  // DENTAL-CLINIC-WEBSITE.jpg intentionally excluded — singlepage-dental-clinic-website already has a previewImage set.
};

function docIdFor(baseId, lang) {
  return lang === "en" ? baseId : `${baseId}.${lang}`;
}

async function main() {
  const entries = Object.entries(MAP);

  // 1) resolve titles for alt text and confirm docs exist
  const allIds = entries.flatMap(([, baseId]) => ["en", "pl", "ru"].map((l) => docIdFor(baseId, l)));
  const docs = await client.fetch(`*[_id in $ids]{ _id, title, previewImage }`, { ids: allIds });
  const docMap = Object.fromEntries(docs.map((d) => [d._id, d]));

  const missing = allIds.filter((id) => !docMap[id]);
  if (missing.length) {
    console.log("Aborting — missing docs:", missing.join(", "));
    process.exit(1);
  }

  const alreadySet = allIds.filter((id) => docMap[id].previewImage);
  if (alreadySet.length) {
    console.log("Note: these docs already have a previewImage and will be OVERWRITTEN:");
    alreadySet.forEach((id) => console.log(`  - ${id}`));
  }

  console.log(`\n=== PLAN (${entries.length} images -> ${allIds.length} docs) ===`);
  for (const [file, baseId] of entries) {
    const full = path.join(IMG_DIR, file);
    if (!fs.existsSync(full)) {
      console.log(`MISSING FILE: ${file} (expected at ${full})`);
      continue;
    }
    console.log(`${file}`);
    for (const lang of ["en", "pl", "ru"]) {
      const id = docIdFor(baseId, lang);
      console.log(`  -> ${id}  alt="${docMap[id].title}"`);
    }
  }

  if (!APPLY) {
    console.log("\nDry run only (no --apply flag) — nothing was uploaded or patched.");
    return;
  }

  console.log("\n=== UPLOADING + PATCHING ===");
  for (const [file, baseId] of entries) {
    const full = path.join(IMG_DIR, file);
    if (!fs.existsSync(full)) {
      console.log(`SKIP (file missing): ${file}`);
      continue;
    }
    const asset = await client.assets.upload("image", fs.createReadStream(full), { filename: file });
    console.log(`Uploaded ${file} -> ${asset._id}`);

    for (const lang of ["en", "pl", "ru"]) {
      const id = docIdFor(baseId, lang);
      const alt = docMap[id].title || "";
      await client
        .patch(id)
        .set({ previewImage: { _type: "image", asset: { _type: "reference", _ref: asset._id }, alt } })
        .commit();
      console.log(`  Patched ${id}`);
    }
  }

  console.log("\nDone.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
