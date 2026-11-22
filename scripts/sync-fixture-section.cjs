// scripts/sync-fixture-section.cjs
//
// Copies one H2 section of a landing page from its fixture (the source of
// truth in src/dev-fixtures) into the published Sanity document, in the same
// place: before the H2 that follows it in the fixture, or at the end of the
// guide text if it is the last section. Made for retrofits such as the
// AI-search section every SEO page gets (owner's rule, 2026-10-22).
//
// A section = the H2 whose text starts with the given string, plus every block
// after it up to the next H2. Keys are regenerated (fixture keys are
// positional and would collide with keys already in the document). A section
// whose H2 is already in the document is skipped. Aborts on drafts. One
// transaction for everything.
//
// Usage (several --sync allowed; fixture::start of the H2 text):
//   node scripts/sync-fixture-section.cjs --sync "restaurant-seo.en::AI SEO for restaurants" [--apply]

const path = require("path");
const crypto = require("crypto");
const { createJiti } = require("jiti");
const { createClient } = require("@sanity/client");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local"), quiet: true });

const argv = process.argv.slice(2);
// Accept -apply as well as --apply: a single dash is an easy slip and the
// script answering with a dry run looks like it simply refused to work.
const APPLY = argv.includes("--apply") || argv.includes("-apply");
// Which textContent block the section belongs in. Landing fixtures use the
// «guide» layout, but pages built in the CMS can carry another one, so the
// layout is a flag rather than a constant. --layout "" matches the first
// textContent block whatever its layout.
const LAYOUT_ARG = argv.flatMap((a, i) => (a === "--layout" ? [argv[i + 1]] : []));
const LAYOUT = LAYOUT_ARG.length ? LAYOUT_ARG[0] : "guide";
const isTarget = (b) => b._type === "textContent" && (LAYOUT === "" || b.layout === LAYOUT);
const SPECS = argv.flatMap((a, i) => (a === "--sync" ? [argv[i + 1]] : [])).map((s) => {
  // Git Bash on Windows rewrites an argument that holds both a slash and «::»
  // as if it were a path list: «sections/foo.en::H2» arrives as
  // «sections\\foo.en;H2». Accept either separator, split on the first one
  // only (a heading may contain a semicolon), and put the slashes back.
  const at = (() => {
    const i = s.indexOf("::");
    return i > -1 ? { i, len: 2 } : { i: s.indexOf(";"), len: 1 };
  })();
  if (at.i < 1) throw new Error(`Bad --sync «${s}», expected fixture::H2 start`);
  const fixture = s.slice(0, at.i).replace(/\\/g, "/");
  const heading = s.slice(at.i + at.len);
  if (!fixture || !heading) throw new Error(`Bad --sync «${s}», expected fixture::H2 start`);
  return { fixture, heading };
});
if (!SPECS.length) {
  console.error('Usage: node scripts/sync-fixture-section.cjs --sync "fixture::H2 start" [--sync ...] [--apply]');
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
const key = () => crypto.randomBytes(6).toString("hex");
const plain = (b) => (b.children || []).map((c) => c.text).join("");
const docIdOf = (fx) => {
  const base = `singlepage-${fx.group ?? fx.slug}`;
  return fx.lang === "en" ? base : `${base}.${fx.lang}`;
};

// new keys for a block, its spans and its link marks
function rekey(b) {
  const map = {};
  const markDefs = (b.markDefs || []).map((m) => {
    const nk = key();
    map[m._key] = nk;
    return { ...m, _key: nk };
  });
  const children = (b.children || []).map((c) => ({ ...c, _key: key(), marks: (c.marks || []).map((m) => map[m] ?? m) }));
  return { ...b, _key: key(), markDefs, children };
}

async function main() {
  const plans = [];
  for (const spec of SPECS) {
    const mod = jiti(path.resolve(__dirname, `../src/dev-fixtures/${spec.fixture}.ts`));
    const fx = Object.values(mod).find((v) => v && v.contentBlocks);
    const guide = fx.contentBlocks.find(isTarget) || fx.contentBlocks.find((b) => b._type === "textContent");
    const content = guide.content;
    const start = content.findIndex((b) => b.style === "h2" && plain(b).startsWith(spec.heading));
    if (start < 0) throw new Error(`${spec.fixture}: no H2 starting «${spec.heading}»`);
    let end = content.findIndex((b, i) => i > start && b.style === "h2");
    const anchor = end > -1 ? plain(content[end]) : null;
    if (end < 0) end = content.length;
    const slug = typeof fx.slug === "string" ? fx.slug : fx.slug?.[fx.lang]?.current;
    plans.push({
      ...spec,
      id: docIdOf(fx),
      lang: fx.lang,
      slug,
      h2: plain(content[start]),
      section: content.slice(start, end),
      anchor,
    });
  }

  // A page rewritten over an older document keeps that document's id, which is
  // not `singlepage-<group>.<lang>`. Resolve those by slug before anything else
  // runs, so the draft check and the patches work on the real id.
  const known = new Set(
    await client.fetch(`*[_id in $ids]._id`, { ids: [...new Set(plans.map((p) => p.id))] }),
  );
  for (const pl of plans) {
    if (known.has(pl.id)) continue;
    if (!pl.lang || !pl.slug) throw new Error(`${pl.fixture}: cannot read lang/slug from the fixture`);
    const found = await client.fetch(
      `*[_type == "singlepage" && language == $lang && slug[$lang].current == $slug][0]._id`,
      { lang: pl.lang, slug: pl.slug },
    );
    if (!found) throw new Error(`${pl.id} not found in Sanity, and no singlepage with slug.${pl.lang}.current == "${pl.slug}"`);
    console.log(`id    ${pl.fixture}: ${pl.id} -> ${found} (resolved by slug)`);
    pl.id = found;
  }

  const ids = [...new Set(plans.map((p) => p.id))];
  const drafts = await client.fetch(`*[_id in $ids]._id`, { ids: ids.map((i) => `drafts.${i}`) });
  if (drafts.length) {
    console.log(`Aborting — drafts exist, publish or discard them first: ${drafts.join(", ")}`);
    process.exit(1);
  }
  const docs = await client.fetch(`*[_id in $ids]{_id, _rev, contentBlocks}`, { ids });

  const patches = [];
  for (const pl of plans) {
    const doc = docs.find((d) => d._id === pl.id);
    if (!doc) throw new Error(`${pl.id} not found in Sanity`);
    const guide = doc.contentBlocks.find(isTarget);
    if (!guide) {
      const seen = doc.contentBlocks
        .filter((b) => b._type === "textContent")
        .map((b) => `layout=${b.layout ?? "(none)"}`)
        .join(", ") || "none";
      throw new Error(`${pl.id}: no textContent block with layout «${LAYOUT}». Text blocks on this page: ${seen}. Pass --layout to pick one.`);
    }
    if (guide.content.some((b) => b.style === "h2" && plain(b) === pl.h2)) {
      console.log(`skip  ${pl.id}: «${pl.h2}» already there`);
      continue;
    }
    let op, where;
    const base = `contentBlocks[_key=="${guide._key}"].content`;
    if (pl.anchor) {
      const a = guide.content.find((b) => b.style === "h2" && plain(b) === pl.anchor);
      if (!a) throw new Error(`${pl.id}: anchor H2 «${pl.anchor}» not found — the page differs from its fixture, check by hand`);
      where = `before «${pl.anchor}»`;
      op = (p) => p.insert("before", `${base}[_key=="${a._key}"]`, pl.section.map(rekey));
    } else {
      where = "at the end of the text block";
      op = (p) => p.insert("after", `${base}[-1]`, pl.section.map(rekey));
    }
    console.log(`\n${pl.id} — insert ${where}:`);
    for (const b of pl.section) console.log(`  ${b.style === "h2" ? "H2 " : b.listItem ? "• " : ""}${plain(b)}`);
    patches.push({ id: doc._id, rev: doc._rev, op });
  }

  if (!patches.length) return console.log("\nNothing to do.");
  if (!APPLY) return console.log("\nDry run — nothing written. Add --apply to write.");
  // One `insert` per patch. A Sanity patch carries a single insert operation,
  // so chaining two of them onto the same patch silently keeps only the last —
  // which is how a two-section run used to write one section. Mutations inside
  // a transaction apply in order, so the revision guard goes on the first patch
  // of each document only; the rest ride on the same transaction.
  const tx = client.transaction();
  const guarded = new Set();
  for (const p of patches) {
    const first = !guarded.has(p.id);
    guarded.add(p.id);
    tx.patch(p.id, (patch) => p.op(first ? patch.ifRevisionId(p.rev) : patch));
  }
  await tx.commit();
  console.log(`\nWritten: ${[...new Set(patches.map((p) => p.id))].join(", ")}`);
  console.log("The webhook revalidates these pages; nothing to deploy.");
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
