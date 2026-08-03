// scripts/verify-pass4.cjs
const fs = require("fs");
const path = require("path");
const BASE = "http://localhost:3000";

const manifest = JSON.parse(fs.readFileSync(path.join(__dirname, "../drafts/pass4-manifest.json"), "utf8"));
const byId = JSON.parse(fs.readFileSync(path.join(__dirname, "../drafts/_link-graph-urlmap.json"), "utf8"));
const pricingRegistry = JSON.parse(fs.readFileSync(path.join(__dirname, "../drafts/_pricing-registry.json"), "utf8"));

function articleFamily(key) {
  return { en: key, pl: `${key}.pl`, ru: `${key}.ru` };
}

async function main() {
  let ok = 0, fail = 0, skipped = 0;

  for (const entry of manifest) {
    const sFam = articleFamily(entry.source);
    for (const lang of ["en", "pl", "ru"]) {
      const docId = sFam[lang];
      const sourcePath = byId[docId]?.path;
      const targetPath = byId[pricingRegistry.PRICING_PAGE[lang]]?.path;
      if (!sourcePath || !targetPath) { console.log(`SKIP ${docId}: unresolved path`); continue; }

      const matchText = entry[lang];
      if (!matchText || matchText.startsWith("__SKIP__")) { skipped++; continue; }

      const res = await fetch(BASE + sourcePath);
      if (res.status !== 200) { console.log(`FAIL ${sourcePath}: status ${res.status}`); fail++; continue; }
      const html = await res.text();
      const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map((m) => m[1].replace(/&amp;/g, "&"));
      if (hrefs.includes(targetPath)) { ok++; }
      else { console.log(`FAIL ${sourcePath} -> missing link to ${targetPath}`); fail++; }
    }
  }
  console.log(`\n=== SUMMARY: ${ok} OK, ${fail} FAIL, ${skipped} intentionally skipped ===`);
}

main().catch((e) => { console.error(e); process.exit(1); });
