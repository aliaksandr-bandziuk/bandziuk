// scripts/fix-redesign-article-headings.cjs
//
// /blog/website-redesign-without-losing-traffic is pitched at traffic, but what
// a client is afraid of losing in a redesign is their SEO — and the article's
// own headings are labels: «On moving day», «From practice», «What it costs»,
// «How I work», «Where to start» mean nothing out of context and carry no
// keyword. Measured 06.11.2026 on the live page: nine content H2s, all nine
// label-shaped, one span each.
//
// Rewrites in one transaction: seo.metaTitle, the H1 (the `title` field) and
// all nine content H2s. Slug, body text, FAQ, figures and links are untouched,
// so no redirect is needed and nothing else can move.
//
// Usage:
//   node scripts/fix-redesign-article-headings.cjs            dry run
//   node scripts/fix-redesign-article-headings.cjs --apply    writes
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
const DOC_ID = "blog-redesign-traffic-loss";

const OLD_META = "Website Redesign Without Losing Traffic: Protect Your SEO";
const NEW_META = "Website Redesign Without Losing SEO: The Full Checklist";

const OLD_H1 = "Website Redesign Without Losing Traffic: What to Check Before, During and After";
const NEW_H1 = "Website redesign without losing SEO: what to check before, during and after";

// [_key, current text, new text] — keys read from the live document 06.11.2026.
const H2 = [
  ["f7f30289e816",
   "Why traffic drops after a redesign",
   "Why a website redesign loses rankings and traffic"],
  ["a83b91cbe441",
   "What to do before the move",
   "Before the redesign: capture the baseline and map every URL"],
  ["41315c22b303",
   "On moving day",
   "On launch day: indexing, canonicals and 301 redirects"],
  ["cb7c75406fb3",
   "After launch: what's normal and what's alarming",
   "After launch: which ranking dip is normal and which is not"],
  ["49b039586ce9",
   "From practice",
   "From practice: a MODX to WordPress migration that kept its URLs and rankings"],
  ["c9a71adf6705",
   "If traffic has already dropped",
   "If the redesign already cost you traffic: how to diagnose it"],
  ["e4466dafa0c2",
   "What it costs",
   "What a safe redesign and a recovery audit cost"],
  ["f1e0a743a205",
   "How I work",
   "Why development and SEO are decided together at the design stage"],
  ["04a7c3f5c95f",
   "Where to start",
   "Where to start: baseline, redirect map, staging, checks"],
];

/** Finds the block with `_key` anywhere in the value; returns the block. */
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
  if (NEW_META.length > 60) {
    console.log(`Aborting — the new metaTitle is ${NEW_META.length} characters, the limit is 60.`);
    process.exit(1);
  }
  if (NEW_META === NEW_H1) {
    console.log("Aborting — the new metaTitle equals the new H1.");
    process.exit(1);
  }

  const draft = await client.getDocument(`drafts.${DOC_ID}`);
  if (draft) {
    console.log(`Aborting — ${DOC_ID} has an unpublished draft; publish or discard it first.`);
    process.exit(1);
  }

  const doc = await client.getDocument(DOC_ID);
  if (!doc) {
    console.log(`Aborting — document ${DOC_ID} not found.`);
    process.exit(1);
  }

  const meta = (doc.seo && doc.seo.metaTitle) || "";
  const h1 = doc.title || "";

  const rows = [];
  for (const [key, oldText, newText] of H2) {
    const block = findBlock(doc.contentBlocks, key);
    if (!block) {
      console.log(`Aborting — no block with _key ${key} in contentBlocks.`);
      process.exit(1);
    }
    if (block.style !== "h2") {
      console.log(`Aborting — block ${key} has style «${block.style}», expected h2.`);
      process.exit(1);
    }
    if ((block.children || []).length !== 1) {
      console.log(`Aborting — block ${key} has ${block.children.length} spans, expected 1.`);
      process.exit(1);
    }
    rows.push({ key, oldText, newText, current: textOf(block) });
  }

  const allNew = meta === NEW_META && h1 === NEW_H1 && rows.every((r) => r.current === r.newText);
  if (allNew) {
    console.log("Nothing to do: already applied.");
    return;
  }

  const bad = [];
  if (meta !== OLD_META && meta !== NEW_META) bad.push(`metaTitle: «${meta}»`);
  if (h1 !== OLD_H1 && h1 !== NEW_H1) bad.push(`H1: «${h1}»`);
  for (const r of rows) {
    if (r.current !== r.oldText && r.current !== r.newText) bad.push(`${r.key}: «${r.current}»`);
  }
  if (bad.length) {
    console.log("Aborting — the current text is neither the old nor the new version:");
    bad.forEach((b) => console.log(`  ${b}`));
    process.exit(1);
  }

  console.log(`metaTitle (${NEW_META.length} chars)\n  «${meta}»\n  -> «${NEW_META}»\n`);
  console.log(`H1\n  «${h1}»\n  -> «${NEW_H1}»\n`);
  rows.forEach((r) => {
    const mark = r.current === r.newText ? "done" : "  ->";
    console.log(`h2 ${r.key}\n  «${r.current}»\n  ${mark} «${r.newText}»\n`);
  });

  if (!APPLY) {
    console.log("Dry run — nothing written. Add --apply to write.");
    return;
  }

  // Patching nested spans by GROQ path is brittle, so contentBlocks is rewritten
  // from a copy with exactly the nine heading texts changed. Blocks are located
  // by _key, so nothing else can move.
  const blocks = JSON.parse(JSON.stringify(doc.contentBlocks));
  for (const [key, , newText] of H2) {
    findBlock(blocks, key).children[0].text = newText;
  }

  await client
    .patch(DOC_ID)
    .ifRevisionId(doc._rev)
    .set({ title: NEW_H1, "seo.metaTitle": NEW_META, contentBlocks: blocks })
    .commit();
  console.log("Written: title, seo.metaTitle, contentBlocks.");

  const after = await client.getDocument(DOC_ID);
  const problems = [];
  if (((after.seo && after.seo.metaTitle) || "") !== NEW_META) problems.push("metaTitle");
  if ((after.title || "") !== NEW_H1) problems.push("H1");
  for (const [key, , newText] of H2) {
    const block = findBlock(after.contentBlocks, key);
    if (!block || textOf(block) !== newText) problems.push(key);
  }
  if (problems.length) {
    console.log(`WARNING — re-read does not match what was written: ${problems.join(", ")}`);
    process.exit(1);
  }
  console.log("Self-check: all eleven texts re-read as expected.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
