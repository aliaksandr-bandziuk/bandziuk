// scripts/apply-audit-text.cjs
//
// Дописывает два раздела трём страницам SEO-аудита и чинит опечатку в живом H2.
// Причина: 317–386 слов при медиане 1408 у сервисных страниц, при том что
// ценовые запросы про аудит — единственная группа ценового кластера с позициями
// 29–46, а не в девятом десятке.
//
//   node scripts/apply-audit-text.cjs          → сухой прогон
//   node scripts/apply-audit-text.cjs --apply  → применяет
const fs = require("fs");
const path = require("path");
const { createClient } = require("@sanity/client");
const { markdownToPortableText, key } = require("./lib/markdown-to-portable-text.cjs");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local") });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const APPLY = process.argv.includes("--apply");
const TEXTS = require("./audit-text-blocks.cjs");

// Опечатка в заголовке H2 на живой коммерческой странице.
const TYPO = { from: "What You Get After SEO Audig", to: "What You Get After SEO Audit" };

/** Меняет точное значение span.text по всему дереву. */
function fixText(node, from, to, counter) {
  if (Array.isArray(node)) return node.map((n) => fixText(n, from, to, counter));
  if (!node || typeof node !== "object") return node;
  const out = {};
  for (const [k, v] of Object.entries(node)) {
    if (k === "text" && v === from) { counter.n += 1; out[k] = to; }
    else out[k] = fixText(v, from, to, counter);
  }
  return out;
}

/** Индекс блока textContent, среди заголовков которого есть нужный. */
function findAnchor(blocks, heading) {
  return blocks.findIndex(
    (b) =>
      b._type === "textContent" &&
      (b.content || []).some(
        (blk) =>
          /^h[23]$/.test(blk.style || "") &&
          (blk.children || []).map((c) => c.text || "").join("").includes(heading)
      )
  );
}

async function main() {
  const report = [];
  const say = (l = "") => { console.log(l); report.push(l); };
  let applied = 0;

  for (const item of TEXTS) {
    const doc = await client.getDocument(item.docId);
    if (!doc) { say(`! НЕ НАЙДЕН ${item.docId}`); continue; }

    let blocks = doc.contentBlocks || [];
    say(`\n${"=".repeat(70)}\n[${item.lang}] ${item.page}`);

    // 1. опечатка (только там, где она есть)
    const typoCount = { n: 0 };
    blocks = fixText(blocks, TYPO.from, TYPO.to, typoCount);
    if (typoCount.n) say(`  опечатка: "${TYPO.from}" → "${TYPO.to}" (${typoCount.n})`);

    // 2. вставка текста
    if (JSON.stringify(blocks).includes(item.marker)) {
      say("  — текст уже добавлен, пропускаю вставку");
      if (typoCount.n && APPLY) {
        await client.patch(item.docId).set({ contentBlocks: blocks }).commit();
        say("  → применена только правка опечатки");
        applied++;
      }
      continue;
    }

    const idx = findAnchor(blocks, item.afterHeading);
    if (idx === -1) { say(`  ! не найден якорный заголовок "${item.afterHeading}", пропускаю`); continue; }

    const content = markdownToPortableText(item.md);
    const h2 = content.filter((b) => b.style === "h2").length;
    const paras = content.filter((b) => b.style === "normal").length;
    if (h2 !== 2) { say(`  ! ожидалось 2 H2, получено ${h2} — пропускаю`); continue; }

    const updated = [
      ...blocks.slice(0, idx + 1),
      { _key: key(), _type: "textContent", content },
      ...blocks.slice(idx + 1),
    ];

    say(`  вставка после блока ${idx} («${item.afterHeading}»), перед: ${blocks[idx + 1]?._type || "конец"}`);
    say(`  H2: ${h2}, абзацев: ${paras}, слов: ${item.md.split(/\s+/).length}`);
    say(`  заголовки: ${content.filter((b) => b.style === "h2").map((b) => b.children.map((c) => c.text).join("")).join(" // ")}`);

    if (APPLY) {
      await client.patch(item.docId).set({ contentBlocks: updated }).commit();
      say("  → применено");
      applied++;
    }
  }

  say(`\nЗапланировано: ${TEXTS.length}. Применено: ${applied}.`);
  if (!APPLY) say("Это сухой прогон. Применить: node scripts/apply-audit-text.cjs --apply");
  const rp = path.resolve(__dirname, APPLY ? "../drafts/audit-text-applied.txt" : "../drafts/audit-text-dry-run.txt");
  fs.writeFileSync(rp, report.join("\n"), "utf8");
  console.log(`\nОтчёт: drafts/${APPLY ? "audit-text-applied.txt" : "audit-text-dry-run.txt"}`);
}

main().catch((e) => { console.error("Ошибка:", e.message); process.exit(1); });
