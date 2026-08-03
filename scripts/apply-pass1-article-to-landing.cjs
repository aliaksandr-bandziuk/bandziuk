// scripts/apply-pass1-article-to-landing.cjs
// Site-wide internal linking — Pass 1: article -> landing (commercial direction).
const fs = require("fs");
const path = require("path");
const { createClient } = require("@sanity/client");
const { insertInlineLink } = require("./lib/portable-text-links.cjs");
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
const manifest = JSON.parse(fs.readFileSync(path.join(DRAFTS, "pass1-manifest.json"), "utf8"));
const landingRegistry = JSON.parse(fs.readFileSync(path.join(DRAFTS, "_landing-registry.json"), "utf8"));
const byId = JSON.parse(fs.readFileSync(path.join(DRAFTS, "_link-graph-urlmap.json"), "utf8"));

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
  const results = [];
  // Group manifest entries by article base id so we patch each document once (may carry 2 links).
  const byArticle = {};
  for (const m of manifest) (byArticle[m.article] ||= []).push(m);

  for (const [articleBase, entries] of Object.entries(byArticle)) {
    for (const lang of ["en", "pl", "ru"]) {
      const docId = articleId(articleBase, lang);
      const doc = await client.fetch(`*[_id == $id][0]{_id, contentBlocks}`, { id: docId });
      if (!doc) { console.log(`SKIP ${docId}: document not found`); continue; }
      const tcIndex = (doc.contentBlocks || []).findIndex((b) => b._type === "textContent");
      if (tcIndex === -1) { console.log(`SKIP ${docId}: no textContent block`); continue; }
      let content = doc.contentBlocks[tcIndex].content;
      const applied = [];
      const failed = [];

      for (const entry of entries) {
        const matchText = entry[lang];
        const fam = landingFamily(entry.target);
        const targetId = fam[lang];
        const targetPath = byId[targetId]?.path;
        if (!targetPath) { failed.push({ target: entry.target, reason: "no canonical path resolved for target" }); continue; }
        try {
          content = insertInlineLink(content, matchText, targetPath);
          applied.push({ target: entry.target, matchText, href: targetPath });
        } catch (err) {
          failed.push({ target: entry.target, matchText, reason: err.message });
        }
      }

      console.log(`\n--- ${docId} ---`);
      applied.forEach((a) => console.log(`  OK   "${a.matchText.slice(0, 50)}..." -> ${a.href}`));
      failed.forEach((f) => console.log(`  FAIL "${(f.matchText || "").slice(0, 50)}..." -> ${f.target}: ${f.reason}`));

      results.push({ docId, applied: applied.length, failed: failed.length, failures: failed });

      if (APPLY && applied.length > 0) {
        const newContentBlocks = [...doc.contentBlocks];
        newContentBlocks[tcIndex] = { ...newContentBlocks[tcIndex], content };
        await client.patch(docId).set({ contentBlocks: newContentBlocks }).commit();
        console.log(`  PATCHED ${docId}`);
      }
    }
  }

  console.log("\n\n=== SUMMARY ===");
  const totalApplied = results.reduce((s, r) => s + r.applied, 0);
  const totalFailed = results.reduce((s, r) => s + r.failed, 0);
  console.log(`Applied: ${totalApplied}, Failed: ${totalFailed}`);
  if (totalFailed > 0) {
    console.log("\nFailures needing attention:");
    for (const r of results) {
      for (const f of r.failures) console.log(`  ${r.docId}: [${f.target}] "${(f.matchText||"").slice(0,60)}" — ${f.reason}`);
    }
  }
  if (!APPLY) console.log("\nDry run only (no --apply flag) — nothing was written.");
}

main().catch((err) => { console.error(err); process.exit(1); });
