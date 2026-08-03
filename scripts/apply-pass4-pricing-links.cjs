// scripts/apply-pass4-pricing-links.cjs
// Site-wide internal linking — Pass 4: article -> /pricing (rule 4: quotes price figures).
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
const manifest = JSON.parse(fs.readFileSync(path.join(DRAFTS, "pass4-manifest.json"), "utf8"));
const byId = JSON.parse(fs.readFileSync(path.join(DRAFTS, "_link-graph-urlmap.json"), "utf8"));
const pricingRegistry = JSON.parse(fs.readFileSync(path.join(DRAFTS, "_pricing-registry.json"), "utf8"));

function articleFamily(key) {
  return { en: key, pl: `${key}.pl`, ru: `${key}.ru` };
}

async function main() {
  const results = [];

  for (const entry of manifest) {
    const sFam = articleFamily(entry.source);
    for (const lang of ["en", "pl", "ru"]) {
      const docId = sFam[lang];
      const targetPath = byId[pricingRegistry.PRICING_PAGE[lang]]?.path;
      const doc = await client.fetch(`*[_id == $id][0]{_id, contentBlocks}`, { id: docId });
      if (!doc) { console.log(`SKIP ${docId}: document not found`); continue; }
      if (!targetPath) { console.log(`SKIP ${docId}: no pricing page path for ${lang}`); continue; }

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

      const matchText = entry[lang];
      if (!matchText || matchText.startsWith("__SKIP__")) {
        skipped.push({ reason: matchText ? matchText.replace("__SKIP__ ", "") : "no locale text in manifest" });
      } else {
        let placed = false;
        for (const loc of locations) {
          if (placed) break;
          const arr = loc.get();
          const fullText = arr.filter((b) => b._type === "block").map((b) => (b.children || []).map((c) => c.text).join("")).join("");
          if (!fullText.includes(matchText)) continue;
          try {
            loc.set(insertInlineLink(arr, matchText, targetPath));
            applied.push({ matchText, href: targetPath, block: loc.label });
            placed = true;
          } catch (err) {
            failed.push({ matchText, reason: `${loc.label}: ` + err.message });
            placed = true;
          }
        }
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
                applied.push({ matchText, href: targetPath, block: `faqBlock.items[${i}]` });
                foundInFaq = true;
              } catch (err) {
                failed.push({ matchText, reason: "faqBlock: " + err.message });
                foundInFaq = true;
              }
              break;
            }
          }
          if (!foundInFaq) failed.push({ matchText, reason: "matchText not found in textContent/doubleTextBlock or faqBlock" });
        } else if (!placed && faqIndex === -1) {
          failed.push({ matchText, reason: "matchText not found (no faqBlock to fall back to)" });
        }
      }

      console.log(`\n--- ${docId} ---`);
      applied.forEach((a) => console.log(`  OK   [${a.block}] "${a.matchText.slice(0, 50)}..." -> ${a.href}`));
      failed.forEach((f) => console.log(`  FAIL "${(f.matchText || "").slice(0, 50)}..." -- ${f.reason}`));
      skipped.forEach((s) => console.log(`  SKIP -- ${s.reason}`));

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
    for (const r of results) for (const f of r.failures) console.log(`  ${r.docId}: "${(f.matchText||"").slice(0,60)}" — ${f.reason}`);
  }
  if (!APPLY) console.log("\nDry run only (no --apply flag) — nothing was written.");
}

main().catch((err) => { console.error(err); process.exit(1); });
