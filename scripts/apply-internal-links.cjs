// scripts/apply-internal-links.cjs
//
// Перелинковка: добавляет контекстные ссылки на страницы, у которых одна
// входящая ссылка — только из списка. План передаётся файлом. Основание: 30 польских страниц имеют одну
// входящую ссылку — только из списка (оферты, портфолио, блог), а в Search
// Console 64 страницы сайта висят как «просканирована, но не проиндексирована».
// План связок: drafts/pl-internal-links-plan.json.
//
//   node scripts/apply-internal-links.cjs drafts/pl-internal-links-plan.json          → сухой прогон
//   node scripts/apply-internal-links.cjs drafts/pl-internal-links-plan.json --apply  → применяет
//
// Механика та же, что в apply-portfolio-links.cjs: в конец последнего блока
// textContent добавляется один абзац со ссылками. Существующие абзацы не
// переписываются. Отдельно чинятся ссылки, ведущие на 404 и на редирект.
const fs = require("fs");
const path = require("path");
const { createClient } = require("@sanity/client");
const { insertInlineLink, key } = require("./lib/portable-text-links.cjs");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local") });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const APPLY = process.argv.includes("--apply");
const PLAN_FILE = process.argv.find((a) => a.endsWith(".json"));
if (!PLAN_FILE) { console.error("Укажите файл плана: node scripts/apply-internal-links.cjs drafts/<lang>-internal-links-plan.json [--apply]"); process.exit(1); }
const PLAN = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), PLAN_FILE), "utf8"));
const DEV = "http://localhost:3000";

function newParagraph(text) {
  return { _key: key(), _type: "block", style: "normal", markDefs: [], children: [{ _key: key(), _type: "span", text, marks: [] }] };
}

async function main() {
  // Каждая цель проверяется на dev-сервере: ссылка на 404 или редирект хуже, чем её отсутствие.
  const targets = [...new Set(PLAN.flatMap((p) => [...(p.paragraphs || []).flatMap((par) => par.links.map((l) => l.href)), ...(p.fixLinks || []).map((f) => f.to)]))];
  let badTarget = false;
  for (const href of targets) {
    const r = await fetch(DEV + href, { redirect: "manual" });
    if (r.status !== 200) { console.log(`! цель отвечает ${r.status}: ${href}`); badTarget = true; }
  }
  if (badTarget) { console.log("\nОстановлено: сначала исправьте цели."); process.exit(1); }
  console.log(`цели проверены: ${targets.length}, все отвечают 200\n`);

  let changed = 0;
  for (const item of PLAN) {
    const doc = await client.getDocument(item.docId);
    if (!doc) { console.log(`! НЕ НАЙДЕН документ ${item.docId} (${item.page})`); continue; }
    const blocks = [...(doc.contentBlocks || [])];

    // 1. Починка ссылок: меняем href в markDefs, текст не трогаем.
    let fixes = 0;
    for (const fix of item.fixLinks || []) {
      for (const block of blocks) {
        for (const c of block.content || []) {
          for (const md of c.markDefs || []) {
            if (md._type === "link" && md.href === fix.from) { md.href = fix.to; fixes++; }
          }
        }
      }
    }

    // 2. Новые абзацы — в последний блок textContent.
    const idx = blocks.map((b) => b._type).lastIndexOf("textContent");
    if (idx === -1) { console.log(`! нет блока textContent: ${item.page}`); continue; }
    let content = [...(blocks[idx].content || [])];
    const added = [];
    for (const par of item.paragraphs || []) {
      const already = par.links.every((l) => JSON.stringify(content).includes(l.href));
      if (already) { console.log(`— ссылки уже есть, пропускаю абзац: ${item.page}`); continue; }
      content = [...content, newParagraph(par.text)];
      for (const l of par.links) content = insertInlineLink(content, l.anchor, l.href);
      added.push(par);
    }
    blocks[idx] = { ...blocks[idx], content };

    if (!added.length && !fixes) { console.log(`— без изменений: ${item.page}`); continue; }
    console.log(`\n${"=".repeat(72)}\n${item.page}  (${item.docId})`);
    if (fixes) for (const f of item.fixLinks || []) console.log(`  чиню ссылку: ${f.from} → ${f.to}  (${f.why})`);
    for (const par of added) console.log(`  + абзац: ${par.text}\n    ссылки: ${par.links.map((l) => `"${l.anchor}" → ${l.href}`).join("; ")}`);

    if (APPLY) {
      await client.patch(item.docId).set({ contentBlocks: blocks }).commit();
      changed++;
    }
  }
  console.log(APPLY ? `\nприменено к ${changed} документам` : "\nсухой прогон, ничего не записано");
}

main().catch((e) => { console.error("failed:", e.message); process.exit(1); });
