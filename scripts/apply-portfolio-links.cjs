// scripts/apply-portfolio-links.cjs
//
// Перелинковка кейсов, батч 1: автосервис и архитектура во всех трёх локалях.
// Основание: drafts/portfolio-linking-plan.md — 32 кейса из 42 не имеют ни одной
// входящей ссылки, девять из них сидят в GSC как «просканирована, но не проиндексирована».
//
//   node scripts/apply-portfolio-links.cjs          → сухой прогон
//   node scripts/apply-portfolio-links.cjs --apply  → применяет
//
// Механика: в конец блока textContent добавляется один короткий абзац со ссылкой
// на кейс. Существующий текст НЕ переписывается — переписывать чужие абзацы ради
// ссылки рискованно, а добавленное предложение видно и легко откатить.
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

// План связок лежит в scripts/portfolio-links-plan.json — он сгенерирован из
// инвентаря и портфолио, чтобы карту можно было читать и править отдельно от кода.
// Анкор — собственное название кейса, а не придуманная формулировка: так в ссылку
// не попадает утверждение, которого нет на самой странице кейса.
const PLAN = require("./portfolio-links-plan.json");

function newParagraph(text) {
  return {
    _key: key(),
    _type: "block",
    style: "normal",
    markDefs: [],
    children: [{ _key: key(), _type: "span", text, marks: [] }],
  };
}

async function main() {
  const report = [];
  const say = (l = "") => { console.log(l); report.push(l); };
  let applied = 0;

  for (const item of PLAN) {
    const doc = await client.getDocument(item.docId);
    if (!doc) { say(`! НЕ НАЙДЕН документ ${item.docId} (${item.page})`); continue; }

    const blocks = doc.contentBlocks || [];
    const idx = blocks.findIndex((b) => b._type === "textContent");
    if (idx === -1) { say(`! нет блока textContent: ${item.page}`); continue; }

    const content = blocks[idx].content || [];

    // Не дублируем: если ссылка на этот кейс уже есть где-то в блоке — пропускаем.
    const already = JSON.stringify(content).includes(item.href);
    if (already) { say(`— уже есть ссылка на кейс, пропускаю: ${item.page}`); continue; }

    let updated = [...content, newParagraph(item.text)];
    updated = insertInlineLink(updated, item.anchor, item.href);

    const linkOk = JSON.stringify(updated).includes(item.href);
    say(`\n${"=".repeat(70)}\n[${item.lang}] ${item.page}  (${item.docId})`);
    say(`  добавляется абзац: ${item.text}`);
    say(`  анкор: "${item.anchor}" → ${item.href}`);
    say(`  ссылка проставлена: ${linkOk ? "да" : "НЕТ — проверить анкор"}`);
    if (!linkOk) continue;

    if (APPLY) {
      await client.patch(item.docId).set({ [`contentBlocks[_key=="${blocks[idx]._key}"].content`]: updated }).commit();
      say(`  → применено`);
      applied++;
    }
  }

  say(`\nЗапланировано: ${PLAN.length}. Применено: ${applied}.`);
  if (!APPLY) say("Это сухой прогон. Применить: node scripts/apply-portfolio-links.cjs --apply");
  const rp = path.resolve(__dirname, APPLY ? "../drafts/portfolio-links-applied.txt" : "../drafts/portfolio-links-dry-run.txt");
  fs.writeFileSync(rp, report.join("\n"), "utf8");
  console.log(`\nОтчёт: drafts/${APPLY ? "portfolio-links-applied.txt" : "portfolio-links-dry-run.txt"}`);
}

main().catch((e) => { console.error("Ошибка:", e.message); process.exit(1); });
