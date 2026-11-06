// scripts/fix-geo-stub-heading.cjs
//
// One dangling heading left on /ru/uslugi/seo-optimizaciya-i-strategiya:
//
//   h3   «Я внедряю подход GEO — Generative Engine Optimization:»
//   (empty paragraph)
//   • делаю структуру контента понятной для алгоритмов,
//   • использую микроразметку и семантические данные,
//   • оптимизирую тексты под AI-интерфейсы поиска.
//
// The heading starts a sentence the bullets finish, which breaks the site rule
// that every heading must stand on its own. Measured 06.11.2026 over the full
// Sanity inventory: this is the ONLY heading on the site still ending in a
// colon — the list of four in claude/headings-audit.md was out of date, the
// other three are already fixed.
//
// The fix changes two span texts and no structure: the heading becomes
// self-contained, and the empty paragraph that already sits between it and the
// list takes the governing sentence, where a colon is correct. The bullets are
// in the first person and stay grammatically governed.
//
// Usage:
//   node scripts/fix-geo-stub-heading.cjs            dry run
//   node scripts/fix-geo-stub-heading.cjs --apply    writes
const path = require("path");
const { createClient } = require("@sanity/client");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local"), quiet: true });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const APPLY = process.argv.includes("--apply");
const DOC_ID = "6a81eab0-6993-41a6-adc3-d9047a3b35a0";

const HEADING_KEY = "82e02d08fb73";
const LEAD_KEY = "8353a759c78b";

const OLD_HEADING = "Я внедряю подход GEO — Generative Engine Optimization:";
const NEW_HEADING = "Подготовка сайта к ИИ-поиску по подходу GEO";
const OLD_LEAD = "";
const NEW_LEAD = "В рамках GEO — Generative Engine Optimization — я:";

/** Finds the block with `_key` anywhere in the document; returns {parent, block}. */
function findBlock(node, key) {
  if (Array.isArray(node)) {
    for (const item of node) {
      const hit = findBlock(item, key);
      if (hit) return hit;
    }
    return null;
  }
  if (node && typeof node === "object") {
    if (node._type === "block" && node._key === key) return node;
    for (const k of Object.keys(node)) {
      if (k.startsWith("_") && k !== "_type") continue;
      const hit = findBlock(node[k], key);
      if (hit) return hit;
    }
  }
  return null;
}

const textOf = (block) => (block.children || []).map((c) => c.text || "").join("");

async function main() {
  const doc = await client.getDocument(DOC_ID);
  if (!doc) {
    console.log(`Aborting — document ${DOC_ID} not found.`);
    process.exit(1);
  }

  const heading = findBlock(doc, HEADING_KEY);
  const lead = findBlock(doc, LEAD_KEY);
  if (!heading || !lead) {
    console.log("Aborting — the heading or the paragraph after it was not found by key.");
    process.exit(1);
  }

  const h = textOf(heading);
  const l = textOf(lead);

  if (h === NEW_HEADING && l === NEW_LEAD) {
    console.log("Nothing to do: already applied.");
    return;
  }
  if (h !== OLD_HEADING || l !== OLD_LEAD) {
    console.log("Aborting — the current text is neither the old nor the new version:");
    console.log(`  heading: «${h}»`);
    console.log(`  lead:    «${l}»`);
    process.exit(1);
  }
  if (heading.children.length !== 1 || lead.children.length !== 1) {
    console.log("Aborting — expected a single span in each block, found " +
      `${heading.children.length} and ${lead.children.length}.`);
    process.exit(1);
  }

  console.log(`h3   «${OLD_HEADING}»\n  -> «${NEW_HEADING}»\n`);
  console.log(`абзац  (пустой)\n  -> «${NEW_LEAD}»\n`);

  if (!APPLY) {
    console.log("Dry run — nothing written. Add --apply to write.");
    return;
  }

  // Patching a nested span by GROQ path is brittle, so the owning top-level
  // field is rewritten from a copy with exactly the two texts changed. Blocks
  // are located by _key, so nothing else can move.
  const fields = {};
  for (const key of Object.keys(doc)) {
    if (key.startsWith("_")) continue;
    const copy = JSON.parse(JSON.stringify(doc[key]));
    const hh = findBlock(copy, HEADING_KEY);
    const ll = findBlock(copy, LEAD_KEY);
    if (!hh && !ll) continue;
    if (hh) hh.children[0].text = NEW_HEADING;
    if (ll) ll.children[0].text = NEW_LEAD;
    fields[key] = copy;
  }

  await client.patch(DOC_ID).set(fields).commit();
  console.log(`Patched fields: ${Object.keys(fields).join(", ")}`);

  const after = await client.getDocument(DOC_ID);
  const h2 = textOf(findBlock(after, HEADING_KEY));
  const l2 = textOf(findBlock(after, LEAD_KEY));
  if (h2 !== NEW_HEADING || l2 !== NEW_LEAD) {
    console.log("WARNING — re-read does not match what was written:");
    console.log(`  heading: «${h2}»\n  lead: «${l2}»`);
    process.exit(1);
  }
  console.log("Self-check: both texts re-read as expected.");
}


main().catch((e) => {
  console.error(e);
  process.exit(1);
});
