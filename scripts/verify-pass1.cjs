// scripts/verify-pass1.cjs
const fs = require("fs");
const path = require("path");
const BASE = "http://localhost:3000";

const manifest = JSON.parse(fs.readFileSync(path.join(__dirname, "../drafts/pass1-manifest.json"), "utf8"));
const landingRegistry = JSON.parse(fs.readFileSync(path.join(__dirname, "../drafts/_landing-registry.json"), "utf8"));
const byId = JSON.parse(fs.readFileSync(path.join(__dirname, "../drafts/_link-graph-urlmap.json"), "utf8"));

const SPECIAL_LANDING = {
  "42a469a6-28f3-4015-8b88-414c8eb3d4fa": { en: "42a469a6-28f3-4015-8b88-414c8eb3d4fa", pl: "77c5f5df-a6f3-49ca-8f42-f1439e3490c6", ru: "6a81eab0-6993-41a6-adc3-d9047a3b35a0" },
  "831dc620-2863-4d55-baa0-aa874a7374ac": { en: "831dc620-2863-4d55-baa0-aa874a7374ac", pl: "3a759a28-4135-4731-a318-cffee1b512f0", ru: "1c0a4ea3-2dd6-4081-a0a0-58ee87633f71" },
  "405bd22d-5aee-45a3-8f9b-108821d9006a": landingRegistry["405bd22d-5aee-45a3-8f9b-108821d9006a"],
  "dc0a0998-d7e5-485a-b405-233ebfcb1630": landingRegistry["dc0a0998-d7e5-485a-b405-233ebfcb1630"],
};
function landingFamily(targetKey) {
  return SPECIAL_LANDING[targetKey] || landingRegistry[targetKey] || { en: targetKey, pl: `${targetKey}.pl`, ru: `${targetKey}.ru` };
}
function articleId(base, lang) { return lang === "en" ? base : `${base}.${lang}`; }

async function main() {
  let ok = 0, fail = 0;
  const pageCache = {};

  for (const entry of manifest) {
    for (const lang of ["en", "pl", "ru"]) {
      const docId = articleId(entry.article, lang);
      const articlePath = byId[docId]?.path;
      const fam = landingFamily(entry.target);
      const targetPath = byId[fam[lang]]?.path;
      if (!articlePath || !targetPath) { console.log(`SKIP ${docId}: unresolved path`); continue; }

      if (!pageCache[articlePath]) {
        const res = await fetch(BASE + articlePath);
        pageCache[articlePath] = { status: res.status, html: await res.text() };
      }
      const page = pageCache[articlePath];
      if (page.status !== 200) { console.log(`FAIL ${articlePath}: status ${page.status}`); fail++; continue; }

      const hrefs = [...page.html.matchAll(/href="([^"]+)"/g)].map((m) => m[1].replace(/&amp;/g, "&"));
      if (hrefs.includes(targetPath)) { ok++; }
      else { console.log(`FAIL ${articlePath} -> missing link to ${targetPath}`); fail++; }
    }
  }
  console.log(`\n=== SUMMARY: ${ok} OK, ${fail} FAIL (${Object.keys(pageCache).length} pages fetched) ===`);
}

main().catch((e) => { console.error(e); process.exit(1); });
