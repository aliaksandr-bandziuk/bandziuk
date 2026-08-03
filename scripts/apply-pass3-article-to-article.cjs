// scripts/apply-pass3-article-to-article.cjs
// Site-wide internal linking — Pass 3: article -> article (topical cluster links).
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
const manifest = JSON.parse(fs.readFileSync(path.join(DRAFTS, "pass3-manifest.json"), "utf8"));
const byId = JSON.parse(fs.readFileSync(path.join(DRAFTS, "_link-graph-urlmap.json"), "utf8"));

// Article doc id convention for this batch: base id is EN, PL is `${base}.pl`, RU is `${base}.ru`.
function articleFamily(key) {
  return { en: key, pl: `${key}.pl`, ru: `${key}.ru` };
}

async function main() {
  const results = [];
  const bySource = {};
  for (const m of manifest) (bySource[m.source] ||= []).push(m);

  for (const [sourceKey, entries] of Object.entries(bySource)) {
    const sFam = articleFamily(sourceKey);
    for (const lang of ["en", "pl", "ru"]) {
      const docId = sFam[lang];
      const doc = await client.fetch(`*[_id == $id][0]{_id, contentBlocks}`, { id: docId });
      if (!doc) { console.log(`SKIP ${docId}: document not found`); continue; }

      // A source article can have MULTIPLE textContent blocks, plus doubleTextBlock sides —
      // collect every searchable PortableText array with a getter/setter, in priority order.
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
          skipped.push({ target: entry.target, reason: matchText ? matchText.replace("__SKIP__ ", "") : "no locale text in manifest" });
          continue;
        }
        const tFam = articleFamily(entry.target);
        const targetId = tFam[lang];
        const targetPath = byId[targetId]?.path;
        if (!targetPath) { failed.push({ target: entry.target, reason: "no canonical path resolved for target" }); continue; }

        let placed = false;
        for (const loc of locations) {
          if (placed) break;
          const arr = loc.get();
          const fullText = arr.filter((b) => b._type === "block").map((b) => (b.children || []).map((c) => c.text).join("")).join("");
          if (!fullText.includes(matchText)) continue;
          try {
            loc.set(insertInlineLink(arr, matchText, targetPath));
            applied.push({ target: entry.target, matchText, href: targetPath, block: loc.label });
            placed = true;
          } catch (err) {
            failed.push({ target: entry.target, matchText, reason: `${loc.label}: ` + err.message });
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
                applied.push({ target: entry.target, matchText, href: targetPath, block: `faqBlock.items[${i}]` });
                foundInFaq = true;
              } catch (err) {
                failed.push({ target: entry.target, matchText, reason: "faqBlock: " + err.message });
                foundInFaq = true;
              }
              break;
            }
          }
          if (!foundInFaq) failed.push({ target: entry.target, matchText, reason: "matchText not found in textContent/doubleTextBlock or faqBlock" });
        } else if (!placed && faqIndex === -1) {
          failed.push({ target: entry.target, matchText, reason: "matchText not found (no faqBlock to fall back to)" });
        }
      }

      console.log(`\n--- ${docId} ---`);
      applied.forEach((a) => console.log(`  OK   [${a.block}] "${a.matchText.slice(0, 50)}..." -> ${a.href}`));
      failed.forEach((f) => console.log(`  FAIL "${(f.matchText || "").slice(0, 50)}..." -> ${f.target}: ${f.reason}`));
      skipped.forEach((s) => console.log(`  SKIP -> ${s.target}: ${s.reason}`));

      const totalOutgoingAfter = applied.length; // this pass only; caller should sanity-check against the 8-link cap using verify script / manual review
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
    for (const r of results) for (const f of r.failures) console.log(`  ${r.docId}: [${f.target}] "${(f.matchText||"").slice(0,60)}" — ${f.reason}`);
  }
  if (!APPLY) console.log("\nDry run only (no --apply flag) — nothing was written.");
}

main().catch((err) => { console.error(err); process.exit(1); });
