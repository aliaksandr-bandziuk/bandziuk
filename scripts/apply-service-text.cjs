// scripts/apply-service-text.cjs
//
// Дописывает по два раздела шести самым тонким сервисным страницам сайта
// (два кластера × три локали) и чинит непереведённый английский H2 на
// польской странице интеграций.
//
// Вставка идёт после последнего блока textContent — то есть перед
// imageFullBlock и FAQ. Структура у всех шести страниц одинаковая:
//   serviceFeaturesBlock > textContent > tableBlock > textContent > imageFullBlock > faqBlock
//
//   node scripts/apply-service-text.cjs          → сухой прогон
//   node scripts/apply-service-text.cjs --apply  → применяет
const fs = require("fs");
const path = require("path");
const { createClient } = require("@sanity/client");
const { markdownToPortableText, key } = require("./lib/markdown-to-portable-text.cjs");
const { insertInlineLink } = require("./lib/portable-text-links.cjs");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local") });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const APPLY = process.argv.includes("--apply");
const TEXTS = require("./service-text-blocks.cjs");

// Английский заголовок, оставшийся непереведённым на польской странице.
const TYPOS = {
  "5ddf5532-8ec3-4bb8-a031-6fd3967aefc3": {
    from: "Problems I solve with CMS and API support",
    to: "Problemy, które rozwiązuję przy integracji CMS i API",
  },
};

/** Меняет точное значение span.text по всему дереву. */
function fixText(node, from, to, counter) {
  if (Array.isArray(node)) return node.map((n) => fixText(n, from, to, counter));
  if (!node || typeof node !== "object") return node;
  const out = {};
  for (const [k, v] of Object.entries(node)) {
    if (k === "text" && v === from) {
      counter.n += 1;
      out[k] = to;
    } else out[k] = fixText(v, from, to, counter);
  }
  return out;
}

/** Индекс последнего блока textContent. */
function lastTextContentIndex(blocks) {
  let idx = -1;
  blocks.forEach((b, i) => {
    if (b._type === "textContent") idx = i;
  });
  return idx;
}

function headings(content) {
  return content
    .filter((b) => b.style === "h2")
    .map((b) => (b.children || []).map((c) => c.text).join(""));
}

async function main() {
  const report = [];
  const say = (l = "") => {
    console.log(l);
    report.push(l);
  };
  let applied = 0;

  for (const item of TEXTS) {
    const doc = await client.getDocument(item.docId);
    if (!doc) {
      say(`! НЕ НАЙДЕН ${item.docId}`);
      continue;
    }

    let blocks = doc.contentBlocks || [];
    say(`\n${"=".repeat(70)}\n[${item.lang}] ${item.page}`);

    // 1. непереведённый заголовок — только там, где он есть
    let typoCount = { n: 0 };
    const typo = TYPOS[item.docId];
    if (typo) {
      blocks = fixText(blocks, typo.from, typo.to, typoCount);
      if (typoCount.n) say(`  заголовок: "${typo.from}" → "${typo.to}" (${typoCount.n})`);
      else say(`  заголовок "${typo.from}" не найден — возможно, уже исправлен`);
    }

    // 2. вставка текста
    if (JSON.stringify(blocks).includes(item.marker)) {
      say("  — текст уже добавлен, пропускаю вставку");
      if (typoCount.n && APPLY) {
        await client.patch(item.docId).set({ contentBlocks: blocks }).commit();
        say("  → применена только правка заголовка");
        applied++;
      }
      continue;
    }

    const idx = lastTextContentIndex(blocks);
    if (idx === -1) {
      say("  ! на странице нет блоков textContent — пропускаю");
      continue;
    }

    let content = markdownToPortableText(item.md);
    const h2 = headings(content);
    const paras = content.filter((b) => b.style === "normal").length;
    if (h2.length !== 2) {
      say(`  ! ожидалось 2 H2, получено ${h2.length} — пропускаю`);
      continue;
    }
    // страховка: markdownToPortableText не разбирает [текст](url) — ссылки идут через links
    if (/\]\(/.test(item.md)) {
      say("  ! в md есть markdown-ссылка, она не будет разобрана — пропускаю");
      continue;
    }

    // ссылки: вставляются аннотациями уже после конвертации
    const wanted = item.links || [];
    let linked = 0;
    let linkError = null;
    for (const l of wanted) {
      try {
        content = insertInlineLink(content, l.text, l.href);
        linked += 1;
      } catch (e) {
        linkError = `"${l.text}" → ${e.message}`;
        break;
      }
    }
    if (linked !== wanted.length) {
      say(`  ! ожидалось ссылок: ${wanted.length}, проставлено: ${linked}. ${linkError || ""}`);
      say("  ! пропускаю страницу — публиковать текст без ссылок не буду");
      continue;
    }
    const marksLeft = JSON.stringify(content).match(/"link"/g);
    if ((marksLeft ? marksLeft.length : 0) !== wanted.length) {
      say("  ! число link-аннотаций не совпало с ожидаемым — пропускаю");
      continue;
    }

    const updated = [
      ...blocks.slice(0, idx + 1),
      { _key: key(), _type: "textContent", content },
      ...blocks.slice(idx + 1),
    ];

    say(`  вставка после блока ${idx} (последний textContent), перед: ${blocks[idx + 1]?._type || "конец"}`);
    say(`  H2: ${h2.length}, абзацев: ${paras}, слов: ${item.md.split(/\s+/).length}, ссылок: ${linked}`);
    say(`  заголовки: ${h2.join(" // ")}`);
    if (wanted.length) say(`  ссылки: ${wanted.map((l) => l.text + " → " + l.href).join(" | ")}`);

    if (APPLY) {
      await client.patch(item.docId).set({ contentBlocks: updated }).commit();
      say("  → применено");
      applied++;
    }
  }

  say(`\nЗапланировано: ${TEXTS.length}. Применено: ${applied}.`);
  if (!APPLY) say("Это сухой прогон. Применить: node scripts/apply-service-text.cjs --apply");
  const name = APPLY ? "service-text-applied.txt" : "service-text-dry-run.txt";
  fs.writeFileSync(path.resolve(__dirname, "../drafts/" + name), report.join("\n"), "utf8");
  console.log(`\nОтчёт: drafts/${name}`);
}

main().catch((e) => {
  console.error("Ошибка:", e.message);
  process.exit(1);
});
