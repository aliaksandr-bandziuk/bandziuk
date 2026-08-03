// scripts/apply-pass2-landing-to-article.cjs
// Site-wide internal linking — Pass 2: landing -> article (supporting direction).
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
const manifest = JSON.parse(fs.readFileSync(path.join(DRAFTS, "pass2-manifest.json"), "utf8"));
const landingRegistry = JSON.parse(fs.readFileSync(path.join(DRAFTS, "_landing-registry.json"), "utf8"));
const byId = JSON.parse(fs.readFileSync(path.join(DRAFTS, "_link-graph-urlmap.json"), "utf8"));

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
  const results = [];
  const byLanding = {};
  for (const m of manifest) (byLanding[m.landing] ||= []).push(m);

  for (const [landingKey, entries] of Object.entries(byLanding)) {
    const lFam = landingFamily(landingKey);
    for (const lang of ["en", "pl", "ru"]) {
      const docId = lFam[lang];
      if (!docId) { console.log(`SKIP ${landingKey}/${lang}: no locale variant`); continue; }
      const doc = await client.fetch(`*[_id == $id][0]{_id, contentBlocks}`, { id: docId });
      if (!doc) { console.log(`SKIP ${docId}: document not found`); continue; }

      // A landing can have MULTIPLE textContent blocks (e.g. one above a table, one below), plus
      // doubleTextBlock sides — collect every searchable PortableText array with a getter/setter,
      // in priority order, rather than assuming the first textContent block is the only one.
      const locations = [];
      (doc.contentBlocks || []).forEach((b, i) => {
        if (b._type === "textContent") {
          locations.push({ label: `textContent[${i}]`, get: () => doc.contentBlocks[i].content, set: (c) => { doc.contentBlocks[i] = { ...doc.contentBlocks[i], content: c }; } });
        }
        if (b._type === "doubleTextBlock") {
          for (const side of ["leftContent", "rightContent"]) {
            if (!b[side]?.blockContent?.content) continue;
            locations.push({
              label: `doubleTextBlock[${i}].${side}`,
              get: () => doc.contentBlocks[i][side].blockContent.content,
              set: (c) => { doc.contentBlocks[i] = { ...doc.contentBlocks[i], [side]: { ...doc.contentBlocks[i][side], blockContent: { ...doc.contentBlocks[i][side].blockContent, content: c } } }; },
            });
          }
        }
      });
      const faqIndex = (doc.contentBlocks || []).findIndex((b) => b._type === "faqBlock");

      const applied = [];
      const failed = [];
      const skipped = [];

      for (const entry of entries) {
        const matchText = entry[lang];
        if (!matchText || matchText.startsWith("__SKIP__")) {
          skipped.push({ article: entry.article, reason: matchText ? matchText.replace("__SKIP__ ", "") : "no locale text in manifest" });
          continue;
        }
        const aFam = articleFamily(entry.article);
        const targetId = aFam[lang];
        const targetPath = byId[targetId]?.path;
        if (!targetPath) { failed.push({ article: entry.article, reason: "no canonical path resolved for target" }); continue; }

        let placed = false;
        // Try each textContent / doubleTextBlock location in turn.
        for (const loc of locations) {
          if (placed) break;
          const arr = loc.get();
          const fullText = arr.filter((b) => b._type === "block").map((b) => (b.children || []).map((c) => c.text).join("")).join("");
          if (!fullText.includes(matchText)) continue;
          try {
            loc.set(insertInlineLink(arr, matchText, targetPath));
            applied.push({ article: entry.article, matchText, href: targetPath, block: loc.label });
            placed = true;
          } catch (err) {
            failed.push({ article: entry.article, matchText, reason: `${loc.label}: ` + err.message });
            placed = true; // needs a different anchor either way — don't also try FAQ
          }
        }
        // Try FAQ answers if not found in textContent
        if (!placed && faqIndex !== -1) {
          const items = doc.contentBlocks[faqIndex].faq.items;
          let foundInFaq = false;
          for (let i = 0; i < items.length; i++) {
            const answer = items[i].answer;
            const fullText = (answer || []).filter((b) => b._type === "block").map((b) => (b.children || []).map((c) => c.text).join("")).join("");
            if (fullText.includes(matchText)) {
              try {
                const newAnswer = insertInlineLink(answer, matchText, targetPath);
                doc.contentBlocks[faqIndex].faq.items[i] = { ...items[i], answer: newAnswer };
                applied.push({ article: entry.article, matchText, href: targetPath, block: `faqBlock.items[${i}]` });
                foundInFaq = true;
              } catch (err) {
                failed.push({ article: entry.article, matchText, reason: "faqBlock: " + err.message });
                foundInFaq = true;
              }
              break;
            }
          }
          if (!foundInFaq) failed.push({ article: entry.article, matchText, reason: "matchText not found in textContent or faqBlock" });
        } else if (!placed && faqIndex === -1) {
          failed.push({ article: entry.article, matchText, reason: "matchText not found (no faqBlock to fall back to)" });
        }
      }

      console.log(`\n--- ${docId} ---`);
      applied.forEach((a) => console.log(`  OK   [${a.block}] "${a.matchText.slice(0, 50)}..." -> ${a.href}`));
      failed.forEach((f) => console.log(`  FAIL "${(f.matchText || "").slice(0, 50)}..." -> ${f.article}: ${f.reason}`));
      skipped.forEach((s) => console.log(`  SKIP -> ${s.article}: ${s.reason}`));

      results.push({ docId, applied: applied.length, failed: failed.length, failures: failed, skipped });

      if (APPLY && applied.length > 0) {
        await client.patch(docId).set({ contentBlocks: doc.contentBlocks }).commit();
        console.log(`  PATCHED ${docId}`);
      }
    }
  }

  console.log("\n\n=== SUMMARY ===");
  const totalApplied = results.reduce((s, r) => s + r.applied, 0);
  const totalFailed = results.reduce((s, r) => s + r.failed, 0);
  const totalSkipped = results.reduce((s, r) => s + r.skipped.length, 0);
  console.log(`Applied: ${totalApplied}, Failed: ${totalFailed}, Intentionally skipped: ${totalSkipped}`);
  if (totalFailed > 0) {
    console.log("\nFailures needing attention:");
    for (const r of results) for (const f of r.failures) console.log(`  ${r.docId}: [${f.article}] "${(f.matchText||"").slice(0,60)}" — ${f.reason}`);
  }
  if (!APPLY) console.log("\nDry run only (no --apply flag) — nothing was written.");
}

main().catch((err) => { console.error(err); process.exit(1); });
