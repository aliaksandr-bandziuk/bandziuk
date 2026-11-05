// scripts/fix-broken-psychotherapist-link.cjs
//
// Five Russian documents link to /ru/portfolio/sayt-psikhoterapevta-v-milane.
// That address renders the 404 page — the case actually lives at
// /ru/portfolio/sayt-psikhoterapevta-v-italii — and there is no redirect for
// it in staticRedirects.mjs. Found 05.11.2026 by scripts/analyze-link-graph.cjs
// (the "unresolved inline links" list) and counted across the full inventory,
// which showed three more documents than the analyzer's 30-row sample.
//
// The fix rewrites the `href` of the link markDef itself rather than replacing
// text in a serialized document, so nothing else can be touched by accident.
//
// Usage:
//   node scripts/fix-broken-psychotherapist-link.cjs            dry run
//   node scripts/fix-broken-psychotherapist-link.cjs --apply    writes
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
const OLD = "/ru/portfolio/sayt-psikhoterapevta-v-milane";
const NEW = "/ru/portfolio/sayt-psikhoterapevta-v-italii";

// Declared up front: the script refuses to write if reality disagrees.
const EXPECTED = {
  "blog-psychologist-website-cost.ru": 1,
  "blog-found-via-chatgpt.ru": 1,
  "singlepage-platform-migration.ru": 1,
  "service-ai-search-readiness.ru": 1,
  "singlepage-seo-italy.ru": 1,
};

/** Rewrites link markDefs in place; returns how many hrefs were changed. */
function rewrite(node, from, to) {
  let n = 0;
  if (Array.isArray(node)) {
    for (const item of node) n += rewrite(item, from, to);
    return n;
  }
  if (node && typeof node === "object") {
    if (node._type === "link" && node.href === from) {
      node.href = to;
      n += 1;
    }
    for (const key of Object.keys(node)) {
      if (key.startsWith("_") && key !== "_type") continue;
      n += rewrite(node[key], from, to);
    }
  }
  return n;
}

/** Counts hrefs equal to `href`, without changing anything. */
function count(node, href) {
  if (Array.isArray(node)) return node.reduce((a, i) => a + count(i, href), 0);
  if (node && typeof node === "object") {
    let n = node._type === "link" && node.href === href ? 1 : 0;
    for (const key of Object.keys(node)) {
      if (key.startsWith("_") && key !== "_type") continue;
      n += count(node[key], href);
    }
    return n;
  }
  return 0;
}

async function main() {
  const ids = Object.keys(EXPECTED);
  const docs = await client.fetch(`*[_id in $ids]`, { ids });

  console.log(`${OLD}\n  ->  ${NEW}\n`);

  const patches = [];
  let mismatch = false;

  for (const id of ids) {
    const doc = docs.find((d) => d._id === id);
    if (!doc) {
      console.log(`  MISSING  ${id} — document not found`);
      mismatch = true;
      continue;
    }

    const found = count(doc, OLD);
    const already = count(doc, NEW);

    if (found === 0) {
      // «Already applied» is not «not found» — the same trap is recorded in
      // claude/foreign-services-cleanup.md and claude/medical-ad-claims.md.
      if (already >= EXPECTED[id]) {
        console.log(`  done     ${id} — already applied`);
      } else {
        console.log(`  BAD      ${id} — 0 found, and the replacement is not in place either`);
        mismatch = true;
      }
      continue;
    }

    if (found !== EXPECTED[id]) {
      console.log(`  BAD      ${id} — expected ${EXPECTED[id]}, found ${found}`);
      mismatch = true;
      continue;
    }

    // Patch only the top-level fields that actually contain the link.
    const fields = {};
    for (const key of Object.keys(doc)) {
      if (key.startsWith("_")) continue;
      if (count(doc[key], OLD) === 0) continue;
      const copy = JSON.parse(JSON.stringify(doc[key]));
      rewrite(copy, OLD, NEW);
      fields[key] = copy;
    }
    console.log(`  ok       ${id} — ${found} link in: ${Object.keys(fields).join(", ")}`);
    patches.push({ id, fields });
  }

  if (mismatch) {
    console.log("\nAborting — reality does not match the declared list. Nothing was written.");
    process.exit(1);
  }
  if (!patches.length) {
    console.log("\nNothing to do: every document is already fixed.");
    return;
  }
  if (!APPLY) {
    console.log(`\nDry run — ${patches.length} documents would be patched. Add --apply to write.`);
    return;
  }

  const tx = patches.reduce((t, p) => t.patch(p.id, (q) => q.set(p.fields)), client.transaction());
  await tx.commit();
  console.log(`\nPatched ${patches.length} documents.`);

  // Self-check over the WHOLE dataset, not just the documents we touched:
  // that is what caught the extra three this time.
  const all = await client.fetch(`*[_type in ["blog","singlepage","portfolio"]]`);
  const survivors = all.filter((d) => count(d, OLD) > 0).map((d) => d._id);
  if (survivors.length) {
    console.log(`\nWARNING — the old address survives in: ${survivors.join(", ")}`);
    process.exit(1);
  }
  console.log("Self-check over all blog, singlepage and portfolio documents: the old address is gone.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
