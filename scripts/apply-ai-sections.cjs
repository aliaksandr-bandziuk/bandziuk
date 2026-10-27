// scripts/apply-ai-sections.cjs
//
// Adds the AI-search section (owner's rule of 22.10.2026: every SEO page covers
// visibility in ChatGPT, Perplexity and Google AI Overviews) to existing SEO
// pages that have no fixture. Sections are written per page, by niche, and
// stored in research/pseo/ai-sections/<pack>.<lang>.json:
//   [{ id, slug, heading, blocks: [{ type: "p" | "li", text }] }]
// A link inside text is written as [anchor](/path).
//
// Each section goes at the end of the page's main text block (the guide block,
// or the text block with the most paragraphs), after its last paragraph —
// closing headings that introduce the next block are skipped.
//
// Idempotent (a page whose text already has the heading is skipped); aborts on
// drafts; one transaction, one patch per page.
//
// Usage: node scripts/apply-ai-sections.cjs --pack p1            dry run, prints every section in full
//        node scripts/apply-ai-sections.cjs --pack p1 --apply    write

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { createClient } = require("@sanity/client");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local"), quiet: true });

const argv = process.argv.slice(2);
const APPLY = argv.includes("--apply");
const PACK = argv[argv.indexOf("--pack") + 1];
if (!PACK || argv.indexOf("--pack") < 0) { console.error("Usage: node scripts/apply-ai-sections.cjs --pack p1 [--apply]"); process.exit(1); }

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const key = () => crypto.randomBytes(6).toString("hex");
const plain = (b) => (b.children || []).map((c) => c.text || "").join("");
const isHeading = (b) => /^h[1-6]$/.test(b.style || "");

function block(style, text, listItem) {
  const markDefs = [];
  const children = [];
  const re = /\[([^\]]+)\]\((\/[^)\s]*)\)/g;
  let last = 0, m;
  while ((m = re.exec(text))) {
    if (m.index > last) children.push({ _type: "span", _key: key(), text: text.slice(last, m.index), marks: [] });
    const mk = key();
    markDefs.push({ _type: "link", _key: mk, href: m[2] });
    children.push({ _type: "span", _key: key(), text: m[1], marks: [mk] });
    last = m.index + m[0].length;
  }
  if (last < text.length) children.push({ _type: "span", _key: key(), text: text.slice(last), marks: [] });
  const b = { _type: "block", _key: key(), style, markDefs, children };
  if (listItem) { b.listItem = listItem; b.level = 1; }
  return b;
}

function sectionBlocks(s) {
  return [block("h2", s.heading), ...s.blocks.map((b) => (b.type === "li" ? block("normal", b.text, "bullet") : block("normal", b.text)))];
}

async function main() {
  const dir = path.resolve(__dirname, "../research/pseo/ai-sections");
  const files = fs.readdirSync(dir).filter((f) => f.startsWith(`${PACK}.`) && f.endsWith(".json"));
  if (!files.length) throw new Error(`No research/pseo/ai-sections/${PACK}.*.json`);
  const sections = files.flatMap((f) => JSON.parse(fs.readFileSync(path.join(dir, f), "utf8")));

  const ids = sections.map((s) => s.id);
  const drafts = await client.fetch(`*[_id in $ids]._id`, { ids: ids.map((i) => `drafts.${i}`) });
  if (drafts.length) { console.log(`Aborting — drafts exist, publish or discard them first: ${drafts.join(", ")}`); process.exit(1); }
  const docs = await client.fetch(`*[_id in $ids]{_id, _rev, contentBlocks}`, { ids });

  const patches = [];
  for (const s of sections) {
    const doc = docs.find((d) => d._id === s.id);
    if (!doc) { console.log(`warn  ${s.slug} (${s.id}) not found — skipped`); continue; }
    const texts = (doc.contentBlocks || []).filter((b) => b._type === "textContent");
    if (texts.some((t) => (t.content || []).some((b) => isHeading(b) && plain(b).trim() === s.heading.trim()))) { console.log(`skip  ${s.slug}: section already there`); continue; }
    const paras = (x) => (x.content || []).filter((y) => !isHeading(y)).length;
    const main = texts.find((x) => x.layout === "guide") || [...texts].sort((x, y) => paras(y) - paras(x))[0];
    if (!main || !(main.content || []).length) { console.log(`warn  ${s.slug}: no main text block — skipped`); continue; }
    let end = main.content.length;
    while (end > 0 && (isHeading(main.content[end - 1]) || !plain(main.content[end - 1]).trim())) end--;
    const after = main.content[end - 1];
    if (!after) { console.log(`warn  ${s.slug}: no paragraph in the main text — skipped`); continue; }
    const blocks = sectionBlocks(s);
    const words = s.blocks.map((b) => b.text).join(" ").split(/\s+/).length;
    console.log(`\n── ${s.slug}  (${s.id})  ${words} words`);
    console.log(`   after «${plain(after).slice(0, 70)}…»`);
    console.log(`   H2 ${s.heading}`);
    for (const b of s.blocks) console.log(`   ${b.type === "li" ? "• " : ""}${b.text}`);
    patches.push({ id: doc._id, rev: doc._rev, where: `contentBlocks[_key=="${main._key}"].content[_key=="${after._key}"]`, blocks });
  }

  if (!patches.length) return console.log("\nNothing to do.");
  if (!APPLY) return console.log(`\nDry run — ${patches.length} page(s), nothing written. Add --apply to write.`);
  const tx = client.transaction();
  for (const p of patches) tx.patch(p.id, (q) => q.ifRevisionId(p.rev).insert("after", p.where, p.blocks));
  await tx.commit();
  console.log(`\nWritten: ${patches.length} page(s). The webhook revalidates them.`);
}

main().catch((err) => { console.error(err.message || err); process.exit(1); });
