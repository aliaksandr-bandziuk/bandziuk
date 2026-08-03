// scripts/build-batch7-landings.cjs
// Batch 7: web-development-warsaw, platform-migration. See build-batch1-landings.cjs for notes.
const fs = require("fs");
const path = require("path");
const { parseTaggedFile } = require("./lib/landing-parser.cjs");

const LANDINGS = [
  { name: "web-development-warsaw", file: "landing-web-development-warsaw-tagged-content.md" },
  { name: "platform-migration", file: "landing-platform-migration-tagged-content.md" },
];

const result = {};
for (const { name, file } of LANDINGS) {
  result[name] = parseTaggedFile(path.resolve(__dirname, "../drafts", file));
}

fs.writeFileSync(path.resolve(__dirname, "../drafts/_batch7-parsed.json"), JSON.stringify(result, null, 2));

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
console.log("\nParsed JSON written to drafts/_batch7-parsed.json");
