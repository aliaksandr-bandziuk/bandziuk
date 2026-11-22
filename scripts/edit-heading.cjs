// scripts/edit-heading.cjs — rewrite one heading inside a published Sanity
// singlepage, in place, without touching anything else on the page.
//
// Made for the case the fixture rules create: a heading that was reworded to
// satisfy the «no Dlaczego/Why/What opener» rule and ended up ungrammatical.
// The fixture is the source of truth, so edit the fixture too — this script
// only moves the already-decided text into the published document.
//
// Aborts when a draft exists, when the heading is not found, when more than
// one heading matches, or when the heading carries link marks (those would be
// lost by replacing the spans; fix such a heading by hand).
//
// Usage (dry run unless --apply):
//   node scripts/edit-heading.cjs --lang en --slug web-development-cyprus \
//     --from "Websites in Cyprus so often fail" \
//     --to "Websites in Cyprus that bring no enquiries: three common reasons" [--apply]

const path = require("path");
const crypto = require("crypto");
const { createClient } = require("@sanity/client");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local"), quiet: true });

const argv = process.argv.slice(2);
// Accept -apply as well as --apply: a single dash is an easy slip and the
// script answering with a dry run looks like it simply refused to work.
const APPLY = argv.includes("--apply") || argv.includes("-apply");
const arg = (name) => {
  const i = argv.indexOf(`--${name}`);
  return i > -1 ? argv[i + 1] : undefined;
};
const LANG = arg("lang");
const SLUG = arg("slug");
const FROM = arg("from");
const TO = arg("to");
if (!LANG || !SLUG || !FROM || !TO) {
  console.error('Usage: node scripts/edit-heading.cjs --lang en --slug <slug> --from "<start of heading>" --to "<new heading>" [--apply]');
  process.exit(1);
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const plain = (b) => (b.children || []).map((c) => c.text || "").join("");
const key = () => crypto.randomBytes(6).toString("hex");

async function main() {
  const docs = await client.fetch(
    `*[_type == "singlepage" && language == $lang && slug[$lang].current == $slug]{_id, _rev, contentBlocks}`,
    { lang: LANG, slug: SLUG },
  );
  if (!docs.length) throw new Error(`No singlepage with slug.${LANG}.current == "${SLUG}"`);
  if (docs.length > 1) throw new Error(`${docs.length} documents share that slug — resolve by hand`);
  const doc = docs[0];

  const draft = await client.fetch(`*[_id == $id][0]._id`, { id: `drafts.${doc._id}` });
  if (draft) throw new Error(`Aborting — a draft exists for ${doc._id}, publish or discard it first`);

  const hits = [];
  for (const block of doc.contentBlocks || []) {
    for (const node of block.content || []) {
      if (!/^h[23]$/.test(node.style || "")) continue;
      if (!plain(node).startsWith(FROM)) continue;
      hits.push({ block, node });
    }
  }
  if (!hits.length) throw new Error(`No h2/h3 starting «${FROM}» on ${doc._id}`);
  if (hits.length > 1) throw new Error(`${hits.length} headings start with «${FROM}» — make the --from longer`);

  const { block, node } = hits[0];
  if ((node.children || []).some((c) => (c.marks || []).length)) {
    throw new Error("That heading carries marks (a link or formatting) — edit it by hand in the Studio");
  }

  console.log(`${doc._id} — ${node.style} in ${block._type}`);
  console.log(`  was: ${plain(node)}`);
  console.log(`  now: ${TO}`);

  if (!APPLY) return console.log("\nDry run — nothing written. Add --apply to write.");

  const at = `contentBlocks[_key=="${block._key}"].content[_key=="${node._key}"].children`;
  await client
    .patch(doc._id)
    .ifRevisionId(doc._rev)
    .set({ [at]: [{ _type: "span", _key: (node.children[0] || {})._key || key(), text: TO, marks: [] }] })
    .commit();
  console.log(`\nWritten: ${doc._id}`);
  console.log("The webhook revalidates this page; nothing to deploy.");
}

main().catch((e) => {
  console.error(e.message || e);
  process.exit(1);
});
