// scripts/build-batch1-landings.cjs
//
// Batch 1 of the 20-landing project: multilingual-website, catalog-website,
// online-booking. Parses each tagged content file and prints the fully
// resolved structure for review. Does NOT write to Sanity.
//
// No interlinking in this pass -- Phase 2 (after all 20 exist) handles
// [RELATED] blocks separately, per the master prompt.
//
// Usage: node scripts/build-batch1-landings.cjs

const fs = require("fs");
const path = require("path");
const { parseTaggedFile } = require("./lib/landing-parser.cjs");

const LANDINGS = [
  { name: "multilingual-website", file: "landing-multilingual-website-tagged-content.md" },
  { name: "catalog-website", file: "landing-catalog-website-tagged-content.md" },
  { name: "online-booking", file: "landing-online-booking-tagged-content.md" },
];

const result = {};

for (const { name, file } of LANDINGS) {
  const filePath = path.resolve(__dirname, "../drafts", file);
  result[name] = parseTaggedFile(filePath);
}

fs.writeFileSync(
  path.resolve(__dirname, "../drafts/_batch1-parsed.json"),
  JSON.stringify(result, null, 2)
);

for (const { name } of LANDINGS) {
  const r = result[name];
  console.log(`\n========== ${name} ==========`);
  for (const lang of ["en", "pl", "ru"]) {
    console.log(`  [${lang}] HERO: "${r.HERO[lang].headline}"`);
    console.log(`  [${lang}] META: metaTitle="${r.META[lang].metaTitle}"`);
    console.log(`  [${lang}] PAIN: "${r.PAIN[lang].title}" (${r.PAIN[lang].items.length} items)`);
    console.log(`  [${lang}] FEATURES: "${r.FEATURES[lang].title}" (${r.FEATURES[lang].items.length} items)`);
    console.log(`  [${lang}] SEO_TEXT: ${r.SEO_TEXT[lang].content.length} PT blocks`);
    console.log(`  [${lang}] STEPS: "${r.STEPS[lang].title}" (${r.STEPS[lang].items.length} items)`);
    console.log(`  [${lang}] FAQ: "${r.FAQ[lang].title}" (${r.FAQ[lang].items.length} items)`);
    console.log(`  [${lang}] CTA: "${r.CTA[lang].title}"`);
  }
}

console.log("\nParsed JSON written to drafts/_batch1-parsed.json");
