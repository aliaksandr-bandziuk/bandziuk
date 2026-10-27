// scripts/move-attorney-seo-link.cjs
//
// One-off fix after apply-attorney-seo-links.cjs (27.10.2026): on
// /blog/why-lawyer-needs-a-website the new link sentence landed between
// «Here’s how to implement both effectively:» and the table it introduces.
// Moves the sentence to just before «Here’s how…». Also moves the EN article
// from «Web Development» to «SEO Strategy» (PL/RU already sit in the SEO
// strategy category). Idempotent; aborts on drafts.
//
// Usage: node scripts/move-attorney-seo-link.cjs           dry run
//        node scripts/move-attorney-seo-link.cjs --apply   write

const path = require("path");
const { createClient } = require("@sanity/client");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local"), quiet: true });

const APPLY = process.argv.includes("--apply");
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});
const ID = "53f4a797-8b17-4427-9b13-74b8c4db71e0";
const HREF = "/blog/attorney-seo";
const plain = (b) => (b.children || []).map((c) => c.text).join("");

const ART = "blog-attorney-seo", SEO_CAT = "79c9a689-22de-413b-ac24-a00aa192206d";

async function category() {
  const a = await client.fetch(`*[_id == $id][0]{_rev, "c": category._ref, "t": category->title}`, { id: ART });
  if (a.c === SEO_CAT) return console.log("Category already «SEO Strategy».");
  console.log(`category «${a.t}» → «SEO Strategy»`);
  if (APPLY) { await client.patch(ART).ifRevisionId(a._rev).set({ category: { _type: "reference", _ref: SEO_CAT } }).commit(); console.log("  written"); }
}

(async () => {
  await category();
  if (await client.fetch(`*[_id == $id][0]._id`, { id: `drafts.${ID}` })) { console.log("Aborting — draft exists"); process.exit(1); }
  const doc = await client.fetch(`*[_id == $id][0]{_id, _rev, contentBlocks}`, { id: ID });
  for (const b of doc.contentBlocks || []) {
    const c = b.content || [];
    const li = c.findIndex((x) => (x.markDefs || []).some((m) => m.href === HREF));
    if (li === -1) continue;
    const hi = c.findIndex((x) => /^Here.s how to implement both effectively/.test(plain(x)));
    if (hi === -1) { console.log("anchor «Here’s how…» not in the same block — nothing done"); return; }
    if (li < hi) { console.log("Already before «Here’s how…» — nothing to do."); return; }
    const link = c[li];
    console.log(`move «${plain(link)}»\n  before «${plain(c[hi])}»`);
    if (!APPLY) return console.log("\nDry run — add --apply to write.");
    const base = `contentBlocks[_key=="${b._key}"].content`;
    await client.transaction()
      .patch(ID, (p) => p.ifRevisionId(doc._rev).unset([`${base}[_key=="${link._key}"]`]))
      .patch(ID, (p) => p.insert("before", `${base}[_key=="${c[hi]._key}"]`, [link]))
      .commit();
    return console.log("\nWritten. The webhook revalidates the page.");
  }
  console.log("Link not found — nothing done.");
})().catch((e) => { console.error(e.message || e); process.exit(1); });
