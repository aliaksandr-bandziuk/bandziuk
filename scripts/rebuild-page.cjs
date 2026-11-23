// scripts/rebuild-page.cjs — replace the body of an existing Sanity page with
// a rebuilt block set from src/dev-fixtures/pages/<name>.ts.
//
// Only `contentBlocks` is written. Title, slug, SEO fields, language links and
// everything else on the document are left exactly as they are, because this
// is a redesign of the body, not a new page.
//
// Made for pages built in the CMS that have no fixture: /pricing, /pl/cennik,
// /ru/ceny and the like. The module supplies `lang`, `slug` and
// `contentBlocks`; the document is found by language and slug, so a document
// id that does not follow the fixture convention is not a problem.
//
// Aborts when a draft exists, when no document or more than one matches, and
// when the module carries no blocks. Prints the old and the new block list so
// the dry run shows what is being traded for what.
//
// Usage (dry run unless --apply):
//   node scripts/rebuild-page.cjs --page pages/pricing.en [--apply]

const path = require("path");
const { createJiti } = require("jiti");
const { createClient } = require("@sanity/client");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local"), quiet: true });

const argv = process.argv.slice(2);
const APPLY = argv.includes("--apply") || argv.includes("-apply");
const i = argv.indexOf("--page");
const NAME = i > -1 ? String(argv[i + 1] || "").replace(/\\/g, "/") : "";
if (!NAME) {
  console.error("Usage: node scripts/rebuild-page.cjs --page pages/<name> [--apply]");
  process.exit(1);
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const jiti = createJiti(__filename);
const plain = (b) => (b.children || []).map((c) => c.text || "").join("");

// Keys are taken from the module as they are. pt.ts numbers them from a
// counter, so they are unique inside the array, and the whole contentBlocks
// array is replaced, so nothing can collide with what was there before.
// Regenerating them here would be wrong: a link lives in markDefs under its
// own key and the span references that key by string, so a naive deep rekey
// silently breaks every link in the text.

function describe(blocks) {
  return (blocks || []).map((b) => {
    if (b._type === "keepExisting") return `  ${b.block} (kept from the page as it is)`;
    const heads = (b.content || []).filter((c) => /^h[23]$/.test(c.style || "")).map((c) => `${c.style.toUpperCase()} ${plain(c)}`);
    const extra =
      b._type === "tableBlock" ? ` (${(b.rows || []).length} rows)` :
      b._type === "offerListBlock" ? ` (${(b.items || []).length} items, ${(b.prices || []).length} prices)` :
      b._type === "faqBlock" ? ` (${((b.faq || {}).items || []).length} questions)` : "";
    return `  ${b._type}${extra}` + (heads.length ? "\n" + heads.map((h) => `      ${h}`).join("\n") : "");
  }).join("\n");
}

async function main() {
  const mod = jiti(path.resolve(__dirname, `../src/dev-fixtures/${NAME}.ts`));
  const fx = Object.values(mod).find((v) => v && v.contentBlocks);
  if (!fx) throw new Error(`${NAME}: no export with contentBlocks`);
  if (!fx.lang || !fx.slug) throw new Error(`${NAME}: the module needs lang and slug`);
  if (!fx.contentBlocks.length) throw new Error(`${NAME}: contentBlocks is empty — refusing to blank a page`);

  const docs = await client.fetch(
    `*[_type == "singlepage" && language == $lang && slug[$lang].current == $slug]{_id, _rev, title, excerpt, contentBlocks}`,
    { lang: fx.lang, slug: fx.slug },
  );
  if (!docs.length) throw new Error(`No singlepage with slug.${fx.lang}.current == "${fx.slug}"`);
  if (docs.length > 1) throw new Error(`${docs.length} documents share that slug — resolve by hand`);
  const doc = docs[0];

  const draft = await client.fetch(`*[_id == $id][0]._id`, { id: `drafts.${doc._id}` });
  if (draft) throw new Error(`Aborting — a draft exists for ${doc._id}, publish or discard it first`);

  // A module can keep a block that already exists on the page instead of
  // rebuilding it: { _type: "keepExisting", block: "serviceFeaturesBlock" },
  // optionally with `index` when the page has several of that type. Blocks
  // assembled in the CMS — the ones referencing other documents for their
  // icons or images — are kept this way rather than guessed at from a fixture.
  const seen = {};
  const blocks = fx.contentBlocks.map((b) => {
    if (b._type !== "keepExisting") return b;
    const wanted = b.block;
    let all = (doc.contentBlocks || []).filter((x) => x._type === wanted);
    // `where` picks the block by a string somewhere inside it. Position is not
    // a safe handle: after the first rebuild the page holds the blocks this
    // module just wrote, so «the first tableBlock» means something different
    // on the second run — which is exactly how a rebuild once replaced the
    // «who this fits» table with a copy of the pricing table.
    if (b.where) {
      all = all.filter((x) => JSON.stringify(x).includes(b.where));
      if (!all.length) throw new Error(`keepExisting: no ${wanted} on the page contains «${b.where}»`);
      if (all.length > 1) throw new Error(`keepExisting: ${all.length} blocks of type ${wanted} contain «${b.where}» — narrow it`);
      return b.set ? { ...all[0], ...b.set } : all[0];
    }
    if (b.index === undefined && all.length > 1) {
      throw new Error(`keepExisting: the page has ${all.length} blocks of type ${wanted}. Add \`where\` with a string from the one you mean, or \`index\`, because position is not stable between rebuilds.`);
    }
    const at = b.index ?? seen[wanted] ?? 0;
    seen[wanted] = at + 1;
    if (!all[at]) throw new Error(`keepExisting: the page has no ${wanted} at index ${at} (found ${all.length})`);
    // `set` overrides fields on the kept block — used to drop a block's own
    // heading when the module already supplies one above it.
    return b.set ? { ...all[at], ...b.set } : all[at];
  });

  // A quoteFormBlock renders nothing without a reference to the form texts
  // for its language — the component returns null and leaves an empty band
  // behind, which is what an «84px gap after the FAQ» turned out to be.
  // create-landing.cjs attaches the same reference when it builds a page.
  if (blocks.some((b) => b._type === "quoteFormBlock" && !b.form)) {
    const formId = await client.fetch(
      `*[_type == "formStandardDocument" && language == $lang && !(_id in path("drafts.**"))][0]._id`,
      { lang: fx.lang },
    );
    if (!formId) throw new Error(`No formStandardDocument for language ${fx.lang} — a quote form would render as an empty band`);
    for (let i = 0; i < blocks.length; i++) {
      if (blocks[i]._type === "quoteFormBlock" && !blocks[i].form) {
        blocks[i] = { ...blocks[i], form: { _type: "reference", _ref: formId } };
      }
    }
    console.log(`form texts: ${formId}`);
  }

  // `excerpt` is the lead paragraph above the first block. A module may
  // rewrite it along with the body; leaving it out keeps the one on the page.
  const patchFields = { contentBlocks: blocks };
  if (typeof fx.excerpt === "string" && fx.excerpt.trim()) patchFields.excerpt = fx.excerpt;

  console.log(`${doc._id} — ${doc.title}`);
  if (patchFields.excerpt) {
    console.log(`\nLEAD PARAGRAPH\n  was: ${(doc.excerpt || "(empty)").slice(0, 160)}`);
    console.log(`  now: ${patchFields.excerpt.slice(0, 160)}`);
  }
  console.log(`\nREPLACING these ${(doc.contentBlocks || []).length} blocks:`);
  console.log(describe(doc.contentBlocks));
  console.log(`\nWITH these ${blocks.length}:`);
  console.log(describe(blocks));

  if (!APPLY) return console.log("\nDry run — nothing written. Add --apply to write.");

  await client.patch(doc._id).ifRevisionId(doc._rev).set(patchFields).commit();
  console.log(`\nWritten: ${doc._id}`);
  console.log("The webhook revalidates this page; nothing to deploy.");
}

main().catch((e) => {
  console.error(e.message || e);
  process.exit(1);
});
