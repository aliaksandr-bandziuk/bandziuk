// scripts/verify-pass3.cjs
const fs = require("fs");
const path = require("path");
const BASE = "http://localhost:3000";

const manifest = JSON.parse(fs.readFileSync(path.join(__dirname, "../drafts/pass3-manifest.json"), "utf8"));
const byId = JSON.parse(fs.readFileSync(path.join(__dirname, "../drafts/_link-graph-urlmap.json"), "utf8"));

function articleFamily(key) {
  return { en: key, pl: `${key}.pl`, ru: `${key}.ru` };
}

async function main() {
  let ok = 0, fail = 0, skipped = 0;
  const pageCache = {};
  const outgoingCount = {}; // sourcePath -> count of applied-in-this-pass links found
  const bySource = {};
  for (const m of manifest) (bySource[m.source] ||= []).push(m);

  for (const [sourceKey, entries] of Object.entries(bySource)) {
    const sFam = articleFamily(sourceKey);
    for (const lang of ["en", "pl", "ru"]) {
      const docId = sFam[lang];
      const sourcePath = byId[docId]?.path;
      if (!sourcePath) { console.log(`SKIP ${sourceKey}/${lang}: unresolved source path`); continue; }

      if (!pageCache[sourcePath]) {
        const res = await fetch(BASE + sourcePath);
        pageCache[sourcePath] = { status: res.status, html: res.status === 200 ? await res.text() : "" };
      }
      const page = pageCache[sourcePath];
      if (page.status !== 200) { console.log(`FAIL ${sourcePath}: status ${page.status}`); fail++; continue; }
      const hrefs = [...page.html.matchAll(/href="([^"]+)"/g)].map((m) => m[1].replace(/&amp;/g, "&"));

      for (const entry of entries) {
        const matchText = entry[lang];
        if (!matchText || matchText.startsWith("__SKIP__")) { skipped++; continue; }
        const tFam = articleFamily(entry.target);
        const targetPath = byId[tFam[lang]]?.path;
        if (!targetPath) { console.log(`SKIP ${docId}: no target path for ${entry.target}/${lang}`); continue; }
        if (hrefs.includes(targetPath)) {
          ok++;
          outgoingCount[sourcePath] = (outgoingCount[sourcePath] || 0) + 1;
        } else {
          console.log(`FAIL ${sourcePath} -> missing link to ${targetPath} (${entry.target})`);
          fail++;
        }
      }
    }
  }
  console.log(`\n=== SUMMARY: ${ok} OK, ${fail} FAIL, ${skipped} intentionally skipped (${Object.keys(pageCache).length} pages fetched) ===`);
  console.log("\nNew links added per source page (this pass only):");
  for (const [p, c] of Object.entries(outgoingCount)) console.log(`  ${p}: +${c}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
