// scripts/apply-section-replacements.cjs
//
// Заменяет один раздел в блоке textContent новым разделом с H2. План — в drafts/:
// какой заголовок и какие абзацы убрать (по началу текста) и что вставить на их
// место. Остальные абзацы, в том числе без заголовка после удаляемого раздела,
// не трогаются. Цели ссылок проверяются на dev-сервере (или на BASE).
//
//   node scripts/apply-section-replacements.cjs drafts/<план>.json          → сухой прогон
//   node scripts/apply-section-replacements.cjs drafts/<план>.json --apply  → записывает
const fs = require("fs");
const path = require("path");
const { createClient } = require("@sanity/client");
const { blockFromMarkup } = require("./lib/portable-text-links.cjs");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local"), quiet: true });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const APPLY = process.argv.includes("--apply");
const PLAN_FILE = process.argv.find((a) => a.endsWith(".json"));
if (!PLAN_FILE) { console.error("Укажите план: node scripts/apply-section-replacements.cjs drafts/<план>.json [--apply]"); process.exit(1); }
const PLAN = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), PLAN_FILE), "utf8"));
const BASE = process.env.BASE || "http://localhost:3000";
const plain = (b) => (b.children || []).map((c) => c.text).join("");
const words = (s) => s.split(/\s+/).filter(Boolean).length;

async function main() {
  const hrefs = [...new Set(PLAN.items.flatMap((i) => i.paragraphs.flatMap((p) => [...p.matchAll(/\[\[[^|\]]+\|([^\]]+)\]\]/g)].map((m) => m[1]))))];
  for (const h of hrefs) {
    const r = await fetch(BASE + h, { redirect: "manual" });
    if (r.status !== 200) throw new Error(`ссылка отвечает ${r.status}: ${h}`);
  }
  console.log(`ссылок проверено: ${hrefs.length}, все 200`);

  let tx = client.transaction();
  for (const item of PLAN.items) {
    const doc = await client.getDocument(item.id);
    const blocks = [...doc.contentBlocks];
    const bi = blocks.findIndex((b) => b._type === "textContent" && b.content.some((x) => x.style?.startsWith("h") && plain(x).startsWith(PLAN.remove.headingStartsWith)));
    if (bi === -1) throw new Error(`${item.id}: не найден раздел «${PLAN.remove.headingStartsWith}…»`);
    const content = blocks[bi].content;
    const hi = content.findIndex((x) => x.style?.startsWith("h") && plain(x).startsWith(PLAN.remove.headingStartsWith));
    const toRemove = new Set([content[hi]._key]);
    for (const start of PLAN.remove.paragraphsStartWith) {
      const p = content.slice(hi + 1).find((x) => x.style === "normal" && plain(x).startsWith(start));
      if (!p) throw new Error(`${item.id}: не найден абзац «${start}…»`);
      toRemove.add(p._key);
    }
    const inserted = [blockFromMarkup(item.h2, "h2"), ...item.paragraphs.map((p) => blockFromMarkup(p))];
    const next = content.flatMap((x) => (x._key === content[hi]._key ? inserted : toRemove.has(x._key) ? [] : [x]));
    blocks[bi] = { ...blocks[bi], content: next };

    const removedWords = content.filter((x) => toRemove.has(x._key)).reduce((a, x) => a + words(plain(x)), 0);
    const addedWords = inserted.reduce((a, x) => a + words(plain(x)), 0);
    const headings = next.filter((x) => x.style?.startsWith("h")).map((x) => `${x.style}: ${plain(x)}`);
    console.log(`\n${item.page}\n  убрано: ${toRemove.size} блока (${removedWords} слов), добавлено: H2 + ${item.paragraphs.length} абзаца (${addedWords} слов)`);
    console.log(`  заголовки теперь:\n    ${headings.join("\n    ")}`);
    tx = tx.patch(item.id, (p) => p.set({ contentBlocks: blocks }));
  }
  if (!APPLY) { console.log("\nСухой прогон: ничего не записано."); return; }
  await tx.commit();
  console.log(`\nзаписано: ${PLAN.items.length} документов`);
}

main().catch((e) => { console.error("failed:", e.message); process.exit(1); });
