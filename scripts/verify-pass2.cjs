// scripts/verify-pass2.cjs
const fs = require("fs");
const path = require("path");
const BASE = "http://localhost:3000";

const manifest = JSON.parse(fs.readFileSync(path.join(__dirname, "../drafts/pass2-manifest.json"), "utf8"));
const landingRegistry = JSON.parse(fs.readFileSync(path.join(__dirname, "../drafts/_landing-registry.json"), "utf8"));
const byId = JSON.parse(fs.readFileSync(path.join(__dirname, "../drafts/_link-graph-urlmap.json"), "utf8"));

const SPECIAL_LANDING = {
  "42a469a6-28f3-4015-8b88-414c8eb3d4fa": { en: "42a469a6-28f3-4015-8b88-414c8eb3d4fa", pl: "77c5f5df-a6f3-49ca-8f42-f1439e3490c6", ru: "6a81eab0-6993-41a6-adc3-d9047a3b35a0" },
  "831dc620-2863-4d55-baa0-aa874a7374ac": { en: "831dc620-2863-4d55-baa0-aa874a7374ac", pl: "3a759a28-4135-4731-a318-cffee1b512f0", ru: "1c0a4ea3-2dd6-4081-a0a0-58ee87633f71" },
  "405bd22d-5aee-45a3-8f9b-108821d9006a": landingRegistry["405bd22d-5aee-45a3-8f9b-108821d9006a"],
  "dc0a0998-d7e5-485a-b405-233ebfcb1630": landingRegistry["dc0a0998-d7e5-485a-b405-233ebfcb1630"],
  "9b8d7d33-0df4-4d4f-967c-9ff454a07a39": landingRegistry["9b8d7d33-0df4-4d4f-967c-9ff454a07a39"],
  "3399fa5f-8de5-4b6c-8b31-6b5068b9692f": landingRegistry["3399fa5f-8de5-4b6c-8b31-6b5068b9692f"],
  "5869ba72-348b-498e-b419-861e52ccb6ef": landingRegistry["5869ba72-348b-498e-b419-861e52ccb6ef"],
  "dab61d1a-28d8-4a10-a2c4-de17399cdbe7": landingRegistry["dab61d1a-28d8-4a10-a2c4-de17399cdbe7"],
  "f4a4b3c0-2d0e-4416-9909-04dcc667318b": landingRegistry["f4a4b3c0-2d0e-4416-9909-04dcc667318b"],
};
const SPECIAL_ARTICLE = {
  "53f4a797-8b17-4427-9b13-74b8c4db71e0": { en: "53f4a797-8b17-4427-9b13-74b8c4db71e0", pl: "d7c4dc47-ce4c-4324-b334-46300222b521", ru: "d7738e6f-7b91-4e01-9f6a-0fea502450b6" },
};

function landingFamily(key) {
  return SPECIAL_LANDING[key] || landingRegistry[key] || { en: key, pl: `${key}.pl`, ru: `${key}.ru` };
}
function articleFamily(key) {
  return SPECIAL_ARTICLE[key] || { en: key, pl: `${key}.pl`, ru: `${key}.ru` };
}

async function main() {
  let ok = 0, fail = 0, skipped = 0;
  const pageCache = {};
  const byLanding = {};
  for (const m of manifest) (byLanding[m.landing] ||= []).push(m);

  for (const [landingKey, entries] of Object.entries(byLanding)) {
    const lFam = landingFamily(landingKey);
    for (const lang of ["en", "pl", "ru"]) {
      const docId = lFam[lang];
      const landingPath = byId[docId]?.path;
      if (!landingPath) { console.log(`SKIP ${landingKey}/${lang}: unresolved landing path`); continue; }

      if (!pageCache[landingPath]) {
        const res = await fetch(BASE + landingPath);
        pageCache[landingPath] = { status: res.status, html: await res.text() };
      }
      const page = pageCache[landingPath];
      if (page.status !== 200) { console.log(`FAIL ${landingPath}: status ${page.status}`); fail++; continue; }
      const hrefs = [...page.html.matchAll(/href="([^"]+)"/g)].map((m) => m[1].replace(/&amp;/g, "&"));

      for (const entry of entries) {
        const matchText = entry[lang];
        if (!matchText || matchText.startsWith("__SKIP__")) { skipped++; continue; }
        const aFam = articleFamily(entry.article);
        const targetPath = byId[aFam[lang]]?.path;
        if (!targetPath) { console.log(`SKIP ${docId}: no target path for ${entry.article}/${lang}`); continue; }
        if (hrefs.includes(targetPath)) { ok++; }
        else { console.log(`FAIL ${landingPath} -> missing link to ${targetPath} (${entry.article})`); fail++; }
      }
    }
  }
  console.log(`\n=== SUMMARY: ${ok} OK, ${fail} FAIL, ${skipped} intentionally skipped (${Object.keys(pageCache).length} pages fetched) ===`);
}

main().catch((e) => { console.error(e); process.exit(1); });
