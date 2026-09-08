// scripts/apply-pl-pozycjonowanie.cjs
//
// Перенацеливает /pl/oferty/strategia-i-optymalizacja-seo на головной польский
// коммерческий термин «pozycjonowanie stron» (6600 запросов в месяц, сайт
// не ранжируется, страницы под ядро нет). Подробное обоснование —
// в шапке scripts/pl-pozycjonowanie-blocks.cjs.
//
// Меняет: title (он же H1), excerpt, seo.metaTitle, seo.metaDescription
// и дописывает три раздела с одиннадцатью внутренними ссылками.
// URL и slug не трогает — редирект не нужен.
//
//   node scripts/apply-pl-pozycjonowanie.cjs          → сухой прогон
//   node scripts/apply-pl-pozycjonowanie.cjs --apply  → применяет
const fs = require("fs");
const path = require("path");
const groq = String.raw;
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
const ITEM = require("./pl-pozycjonowanie-blocks.cjs");

function lastTextContentIndex(blocks) {
  let idx = -1;
  blocks.forEach((b, i) => {
    if (b._type === "textContent") idx = i;
  });
  return idx;
}

async function main() {
  const report = [];
  const say = (l = "") => {
    console.log(l);
    report.push(l);
  };

  // документ ищем по slug + language, id не зашиваем
  const docs = await client.fetch(
    groq`*[_type == "singlepage" && language == $lang && slug[$lang].current == $slug]{
      _id, title, excerpt, seo, "blockTypes": contentBlocks[]._type
    }`,
    { lang: ITEM.lang, slug: ITEM.slug },
  );
  if (docs.length !== 1) {
    say(`! по slug "${ITEM.slug}" (${ITEM.lang}) найдено документов: ${docs.length} — ожидался один. Останавливаюсь.`);
    process.exit(1);
  }
  const docId = docs[0]._id;
  const doc = await client.getDocument(docId);
  let blocks = doc.contentBlocks || [];

  say(`${"=".repeat(70)}\n${ITEM.page}   (${docId})`);
  say(`структура: ${blocks.map((b, i) => i + ":" + b._type).join(" ")}`);

  // ── 1. поля
  say("\n--- поля ---");
  const patchFields = {};
  const current = {
    title: doc.title,
    excerpt: doc.excerpt,
    "seo.metaTitle": doc.seo && doc.seo.metaTitle,
    "seo.metaDescription": doc.seo && doc.seo.metaDescription,
  };
  for (const [field, next] of Object.entries(ITEM.fields)) {
    const now = current[field];
    if (now === next) {
      say(`  = ${field}: уже совпадает`);
      continue;
    }
    say(`  ${field}`);
    say(`     было:  ${now === undefined ? "(пусто)" : now}`);
    say(`     будет: ${next}   [${next.length} симв.]`);
    patchFields[field] = next;
  }

  // ── 2. текст
  say("\n--- текст ---");
  let inserted = false;
  let updated = blocks;
  if (JSON.stringify(blocks).includes(ITEM.marker)) {
    say("  — разделы уже добавлены, пропускаю вставку");
  } else {
    let content = markdownToPortableText(ITEM.md);
    const h2 = content
      .filter((b) => b.style === "h2")
      .map((b) => b.children.map((c) => c.text).join(""));
    if (h2.length !== 3) {
      say(`  ! ожидалось 3 H2, получено ${h2.length} — останавливаюсь`);
      process.exit(1);
    }
    if (/\]\(/.test(ITEM.md)) {
      say("  ! в md есть markdown-ссылка, она не будет разобрана — останавливаюсь");
      process.exit(1);
    }

    let linked = 0;
    for (const l of ITEM.links) {
      try {
        content = insertInlineLink(content, l.text, l.href);
        linked += 1;
      } catch (e) {
        say(`  ! ссылка "${l.text}": ${e.message}`);
        break;
      }
    }
    const marks = (JSON.stringify(content).match(/"link"/g) || []).length;
    if (linked !== ITEM.links.length || marks !== ITEM.links.length) {
      say(`  ! ожидалось ссылок: ${ITEM.links.length}, проставлено: ${linked}, аннотаций: ${marks} — останавливаюсь`);
      process.exit(1);
    }

    const idx = lastTextContentIndex(blocks);
    if (idx === -1) {
      say("  ! на странице нет блоков textContent — останавливаюсь");
      process.exit(1);
    }
    updated = [
      ...blocks.slice(0, idx + 1),
      { _key: key(), _type: "textContent", content },
      ...blocks.slice(idx + 1),
    ];
    inserted = true;

    say(`  вставка после блока ${idx} (последний textContent), перед: ${blocks[idx + 1]?._type || "конец"}`);
    say(`  H2: ${h2.length}, абзацев: ${content.filter((b) => b.style === "normal").length}, слов: ${ITEM.md.split(/\s+/).length}, ссылок: ${linked}`);
    h2.forEach((t) => say(`     · ${t}`));
    say("  ссылки:");
    ITEM.links.forEach((l) => say(`     · ${l.text} → ${l.href}`));
  }

  // ── 3. запись
  const hasFieldChanges = Object.keys(patchFields).length > 0;
  say("");
  if (!hasFieldChanges && !inserted) {
    say("Изменений нет — всё уже применено.");
  } else if (APPLY) {
    const p = client.patch(docId);
    if (hasFieldChanges) p.set(patchFields);
    if (inserted) p.set({ contentBlocks: updated });
    await p.commit();
    say(`→ применено: полей ${Object.keys(patchFields).length}, вставка текста: ${inserted ? "да" : "нет"}`);
  } else {
    say(`Это сухой прогон. Полей к изменению: ${Object.keys(patchFields).length}, вставка текста: ${inserted ? "да" : "нет"}.`);
    say("Применить: node scripts/apply-pl-pozycjonowanie.cjs --apply");
  }

  const name = APPLY ? "pl-pozycjonowanie-applied.txt" : "pl-pozycjonowanie-dry-run.txt";
  fs.writeFileSync(path.resolve(__dirname, "../drafts/" + name), report.join("\n"), "utf8");
  console.log(`\nОтчёт: drafts/${name}`);
}

main().catch((e) => {
  console.error("Ошибка:", e.message);
  process.exit(1);
});
