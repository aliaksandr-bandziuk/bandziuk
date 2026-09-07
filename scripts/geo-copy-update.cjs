// scripts/geo-copy-update.cjs
//
// Гео-страницы (RU): выравнивание формулировок под реальные запросы.
// Основание: drafts/geo-copy-fr-ch.md и drafts/geo-copy-nl-ie-us.md.
//
// Режимы:
//   node scripts/geo-copy-update.cjs --dump    → пишет drafts/geo-sanity-dump.json, ничего не меняет
//   node scripts/geo-copy-update.cjs           → dry-run: печатает «было → стало», ничего не меняет
//   node scripts/geo-copy-update.cjs --apply   → применяет патчи
//
// Ничего не удаляет и не создаёт документов: только патчит поля существующих RU-страниц.
const fs = require("fs");
const path = require("path");
const { createClient } = require("@sanity/client");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local") });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const DUMP = process.argv.includes("--dump");

const SLUGS = [
  "prodvizhenie-na-frantsuzskiy-rynok",
  "prodvizhenie-na-shveytsarskiy-rynok",
  "prodvizhenie-na-gollandskiy-rynok",
  "prodvizhenie-na-irlandskiy-rynok",
  "prodvizhenie-na-amerikanskiy-rynok",
];

/** Собирает текст спанов одного portable-text блока. */
function blockText(block) {
  return (block.children || []).map((c) => c.text || "").join("");
}

/**
 * Рекурсивный обход документа. Собирает всё, что может оказаться заголовком
 * или вопросом, вместе с путём и ключами — чтобы патчить точечно, а не угадывать
 * структуру блоков по схеме.
 */
function walk(node, trail, acc) {
  if (Array.isArray(node)) {
    node.forEach((item, i) => {
      const step = item && item._key ? `[_key=="${item._key}"]` : `[${i}]`;
      walk(item, trail + step, acc);
    });
    return;
  }
  if (!node || typeof node !== "object") return;

  if (node._type === "block" && /^h[1-4]$/.test(node.style || "")) {
    acc.headings.push({
      path: trail,
      style: node.style,
      blockKey: node._key,
      spanKeys: (node.children || []).map((c) => c._key),
      spanCount: (node.children || []).length,
      text: blockText(node),
    });
  }

  for (const [k, v] of Object.entries(node)) {
    if (typeof v === "string") {
      if (["question", "title", "pretitle", "subtitle", "heading", "label"].includes(k)) {
        acc.fields.push({ path: trail ? `${trail}.${k}` : k, key: k, value: v });
      }
      continue;
    }
    walk(v, trail ? `${trail}.${k}` : k, acc);
  }
}


const APPLY = process.argv.includes("--apply");
const PATCHES = require("./geo-copy-patches.json");

/** Первый блок нужного типа в contentBlocks. */
function blockOfType(doc, type) {
  return (doc.contentBlocks || []).find((b) => b._type === type) || null;
}

/**
 * Заголовок portable text нужного стиля с нужным текстом.
 * Правим только блоки с одним спаном: если спанов больше, текст разрезан
 * разметкой, и слепая замена склеила бы его в один — такие пропускаем с предупреждением.
 */
function headingSpanPath(container, containerKey, field, style, oldText, warns) {
  const list = container[field] || [];
  const hit = list.find(
    (b) => b._type === "block" && b.style === style && (b.children || []).map((c) => c.text || "").join("") === oldText
  );
  if (!hit) {
    warns.push(`не найден ${style}: "${oldText}"`);
    return null;
  }
  if ((hit.children || []).length !== 1) {
    warns.push(`${style} состоит из ${hit.children.length} спанов, пропускаю: "${oldText}"`);
    return null;
  }
  return `contentBlocks[_key=="${containerKey}"].${field}[_key=="${hit._key}"].children[_key=="${hit.children[0]._key}"].text`;
}

async function runPatches(docs) {
  let totalOps = 0;
  const allWarns = [];
  // Отчёт пишем сами, без перенаправления вывода в оболочке.
  const report = [];
  const say = (line = "") => {
    console.log(line);
    report.push(line);
  };

  for (const doc of docs) {
    const slug = doc.slug?.ru?.current;
    const cfg = PATCHES[slug];
    if (!cfg) continue;

    const ops = {};
    const warns = [];
    const push = (path, oldVal, newVal) => {
      if (oldVal === newVal) return;
      ops[path] = { old: oldVal, new: newVal };
    };

    push("title", doc.title, cfg.title);
    push("excerpt", doc.excerpt, cfg.excerpt);
    push("seo.metaTitle", doc.seo?.metaTitle, cfg.metaTitle);
    push("seo.metaDescription", doc.seo?.metaDescription, cfg.metaDescription);

    const grid = blockOfType(doc, "gridBlock");
    if (grid) push(`contentBlocks[_key=="${grid._key}"].title`, grid.title, cfg.gridTitle);
    else warns.push("нет gridBlock");

    const steps = blockOfType(doc, "stepsBlock");
    if (steps) push(`contentBlocks[_key=="${steps._key}"].title`, steps.title, cfg.stepsTitle);
    else warns.push("нет stepsBlock");

    const faq = blockOfType(doc, "faqBlock");
    if (faq) {
      push(`contentBlocks[_key=="${faq._key}"].faq.title`, faq.faq?.title, cfg.faqTitle);
      for (const [oldQ, newQ] of Object.entries(cfg.faq || {})) {
        const item = (faq.faq?.items || []).find((i) => i.question === oldQ);
        if (!item) { warns.push(`не найден вопрос: "${oldQ}"`); continue; }
        push(`contentBlocks[_key=="${faq._key}"].faq.items[_key=="${item._key}"].question`, item.question, newQ);
      }
    } else warns.push("нет faqBlock");

    const tc = blockOfType(doc, "textContent");
    if (tc) {
      for (const [style, map] of [["h2", cfg.h2 || {}], ["h3", cfg.h3 || {}]]) {
        for (const [oldText, newText] of Object.entries(map)) {
          const path = headingSpanPath(tc, tc._key, "content", style, oldText, warns);
          if (path) push(path, oldText, newText);
        }
      }
    } else warns.push("нет textContent");

    say(`\n${"=".repeat(70)}\n${slug}  (${doc._id})`);
    for (const [path, v] of Object.entries(ops)) {
      say(`  ${path}`);
      say(`    было : ${v.old}`);
      say(`    стало: ${v.new}`);
    }
    if (!Object.keys(ops).length) say("  правок нет");
    warns.forEach((w) => say(`  ! ${w}`));
    allWarns.push(...warns.map((w) => `${slug}: ${w}`));
    totalOps += Object.keys(ops).length;

    if (APPLY && Object.keys(ops).length) {
      const setObj = {};
      for (const [path, v] of Object.entries(ops)) setObj[path] = v.new;
      await client.patch(doc._id).set(setObj).commit();
      say(`  → применено: ${Object.keys(ops).length} полей`);
    }
  }

  say(`\nИтого правок: ${totalOps}. Предупреждений: ${allWarns.length}.`);
  if (!APPLY) say("Это сухой прогон. Применить: node scripts/geo-copy-update.cjs --apply");

  const reportPath = path.resolve(__dirname, APPLY ? "../drafts/geo-applied.txt" : "../drafts/geo-dry-run.txt");
  fs.writeFileSync(reportPath, report.join("\n"), "utf8");
  console.log(`\nОтчёт записан: drafts/${APPLY ? "geo-applied.txt" : "geo-dry-run.txt"}`);
}

async function main() {
  const docs = await client.fetch(
    `*[_type == "singlepage" && language == "ru" && slug.ru.current in $slugs]`,
    { slugs: SLUGS }
  );

  console.log(`Найдено документов: ${docs.length} из ${SLUGS.length}`);
  for (const s of SLUGS) {
    if (!docs.find((d) => d.slug?.ru?.current === s)) console.log(`  НЕ НАЙДЕН: ${s}`);
  }

  if (!DUMP) {
    return runPatches(docs);
  }

  const out = docs.map((doc) => {
    const acc = { headings: [], fields: [] };
    walk(doc.contentBlocks || [], "contentBlocks", acc);
    return {
      _id: doc._id,
      isDraft: String(doc._id).startsWith("drafts."),
      _publishedAt: doc._publishedAt ?? null,
      _updatedAt: doc._updatedAt,
      slug: doc.slug?.ru?.current,
      pageType: doc.pageType,
      title: doc.title,
      excerpt: doc.excerpt,
      seo: doc.seo,
      parentPage: doc.parentPage?._ref,
      blocks: (doc.contentBlocks || []).map((b) => ({ _type: b._type, _key: b._key })),
      headings: acc.headings,
      fields: acc.fields,
    };
  });

  const target = path.resolve(__dirname, "../drafts/geo-sanity-dump.json");
  fs.writeFileSync(target, JSON.stringify(out, null, 2), "utf8");
  console.log(`\nВыгружено в drafts/geo-sanity-dump.json (${(fs.statSync(target).size / 1024).toFixed(1)} КБ)`);
}

main().catch((e) => {
  console.error("Ошибка:", e.message);
  process.exit(1);
});
