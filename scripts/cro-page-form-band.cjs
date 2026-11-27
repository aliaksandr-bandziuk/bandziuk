// /pl/oferty/optymalizacja-konwersji, 2026-11-27, owner's request:
//   1. remove the closing text block "Zamów optymalizację konwersji strony: co mi wysłać"
//      — the page goes straight to the final contact section with its form;
//   2. put a short request form in the middle of the long text, after the
//      chapter about local businesses (6 of 12).
// Safe to run twice. The removed block stays in Studio's history.
//
//   node scripts/cro-page-form-band.cjs           dry run
//   node scripts/cro-page-form-band.cjs --apply   writes to Sanity
const path = require("path");
const crypto = require("crypto");
const { createClient } = require("@sanity/client");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local") });

const APPLY = process.argv.includes("--apply");
const LANG = "pl";
const SLUG = "optymalizacja-konwersji";
const CLOSING_H2 = "Zamów optymalizację konwersji strony";
const AFTER_CHAPTER = "Optymalizacja konwersji dla firm lokalnych";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const key = () => crypto.randomBytes(6).toString("hex");
const text = (b) => (b && Array.isArray(b.children) ? b.children.map((c) => c.text || "").join("") : "");
const isH2 = (b) => b && b._type === "block" && b.style === "h2";

(async () => {
  const doc = await client.fetch(
    `*[_type == "singlepage" && language == $lang && slug[$lang].current == $slug && !(_id in path("drafts.**"))][0]`,
    { lang: LANG, slug: SLUG },
  );
  if (!doc) throw new Error(`No published singlepage ${SLUG}`);
  const draft = await client.fetch(`*[_id == $id][0]{_id}`, { id: `drafts.${doc._id}` });
  if (draft) {
    console.log(`A draft exists (${draft._id}). Publish or discard it in Studio first, then run again.`);
    process.exit(1);
  }
  console.log(`Page: ${doc._id} — ${doc.title}\n`);

  const blocks = doc.contentBlocks || [];
  const patch = client.patch(doc._id);
  let todo = 0;

  // 1. The closing text block
  const closing = blocks.find(
    (b) => b._type === "textContent" && (b.content || []).some((x) => isH2(x) && text(x).startsWith(CLOSING_H2)),
  );
  if (closing) {
    const chapters = (closing.content || []).filter(isH2).length;
    if (chapters > 1) throw new Error("The closing block holds more than one H2 — not removing it blindly.");
    console.log(`- remove text block “${text((closing.content || []).find(isH2))}”`);
    console.log(`  its text: ${(closing.content || []).filter((x) => !isH2(x)).map(text).join(" ").slice(0, 160)}…`);
    patch.unset([`contentBlocks[_key=="${closing._key}"]`]);
    todo++;
  }

  // 2. Short form after the chapter about local businesses
  const tc = blocks.find((b) => b._type === "textContent" && b.layout === "chapters");
  if (!tc) throw new Error("No text block with layout “chapters” — run cro-page-chapters.cjs first.");
  const content = JSON.parse(JSON.stringify(tc.content || []));
  if (!content.some((b) => b._type === "pageSnippet" && b.kind === "shortForm")) {
    const start = content.findIndex((b) => isH2(b) && text(b).startsWith(AFTER_CHAPTER));
    if (start < 0) throw new Error(`Chapter not found: “${AFTER_CHAPTER}…”`);
    let end = content.findIndex((b, i) => i > start && isH2(b));
    if (end < 0) end = content.length;
    content.splice(end, 0, { _key: key(), _type: "pageSnippet", kind: "shortForm" });
    patch.set({ [`contentBlocks[_key=="${tc._key}"].content`]: content });
    console.log(`+ short request form after the chapter “${AFTER_CHAPTER}…”`);
    todo++;
  }

  if (!todo) {
    console.log("Nothing to do: already in place.");
    return;
  }
  if (!APPLY) {
    console.log("\nDry run. Run with --apply to write.");
    return;
  }
  await patch.commit();
  console.log("\nWritten.");
})().catch((e) => {
  console.error(e.message || e);
  process.exit(1);
});
