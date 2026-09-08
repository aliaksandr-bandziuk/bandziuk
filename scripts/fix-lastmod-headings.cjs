// scripts/fix-lastmod-headings.cjs
//
// Правит H1, excerpt, meta и три подзаголовка уже опубликованной статьи про lastmod.
//
// Причина: заголовки были газетными. «Google перестал читать карту сайта» не
// говорит, чью карту, и читается так, будто Google вообще перестал читать
// карты сайта. «Поле lastmod, которое никто не проверяет» — интрига вместо
// предмета. Excerpt заканчивался фразой «покажут, ваш ли это случай», где
// «случай» ни разу не назван. Ключевые слова в них были, понятности не было.
//
// Правило, по которому переписано: заголовок должен быть понятен вне контекста
// и называть предмет и действие целиком.
//
// Трогает только title, excerpt, seo.* и текст трёх H2. Тело статьи, ссылки,
// категория, связи и слаг не меняются.
//
//   node scripts/fix-lastmod-headings.cjs          → сухой прогон
//   node scripts/fix-lastmod-headings.cjs --apply  → применяет
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

const APPLY = process.argv.includes("--apply");
const BASE_ID = "blog-sitemap-lastmod";
const docId = (lang) => (lang === "en" ? BASE_ID : `${BASE_ID}.${lang}`);

const FIELDS = {
  en: {
    title: "Sitemap lastmod: why Google stops re-reading your sitemap and how to fix it",
    "seo.metaTitle": "Sitemap lastmod: why Google stops re-reading it",
    "seo.metaDescription":
      "A sitemap without lastmod gets re-read less and less, so new URLs stay undiscovered. How to check the Last read date in Search Console and fix it.",
    excerpt:
      "If a sitemap has no lastmod field, Google re-reads it less and less often, and URLs added since the last read stay undiscovered. How to check the Last read date in Search Console, what to change in the sitemap generator, and what the fix does not solve.",
  },
  pl: {
    title: "lastmod w mapie witryny: dlaczego Google przestaje ją czytać i jak to naprawić",
    "seo.metaTitle": "lastmod w mapie witryny: dlaczego Google jej nie czyta",
    "seo.metaDescription":
      "Mapa witryny bez pola lastmod jest odczytywana coraz rzadziej, więc nowe adresy pozostają niewykryte. Jak sprawdzić datę odczytu w Search Console i to naprawić.",
    excerpt:
      "Jeśli mapa witryny nie ma pola lastmod, Google odczytuje ją coraz rzadziej, a adresy dodane po ostatnim odczycie pozostają niewykryte. Jak sprawdzić datę ostatniego odczytania w Search Console, co poprawić w generatorze mapy i czego ta poprawka nie rozwiązuje.",
  },
  ru: {
    title: "lastmod в карте сайта: почему Google перестаёт её перечитывать и как это исправить",
    "seo.metaTitle": "lastmod в карте сайта: почему Google её не перечитывает",
    "seo.metaDescription":
      "Карту сайта без поля lastmod Google перечитывает всё реже, и новые адреса остаются необнаруженными. Как проверить дату чтения в Search Console и исправить.",
    excerpt:
      "Если в карте сайта нет поля lastmod, Google перечитывает её всё реже, а адреса, добавленные после последнего чтения, остаются необнаруженными. Как проверить дату последнего чтения в Search Console, что поправить в генераторе карты и чего это исправление не решает.",
  },
};

// Три H2, у которых была та же болезнь. Остальные четыре уже называют предмет.
const HEADINGS = {
  en: [
    ["Sitemap submitted 415 URLs, Google discovered 27",
     "415 URLs in the sitemap, 27 discovered pages in Search Console"],
    ["What fixing lastmod changed: discovered pages 27 to 415",
     "What changed after fixing lastmod: discovered pages went from 27 to 415"],
    ["What a sitemap fix does not solve",
     "Problems that fixing the sitemap does not solve"],
  ],
  pl: [
    ["Mapa witryny zgłosiła 415 adresów, Google wykrył 27",
     "415 adresów w mapie witryny, 27 wykrytych stron w Search Console"],
    ["Co zmieniła naprawa lastmod: wykryte strony z 27 do 415",
     "Co zmieniła naprawa lastmod: wykryte strony wzrosły z 27 do 415"],
    ["Czego naprawa mapy witryny nie rozwiązuje",
     "Problemy, których naprawa mapy witryny nie rozwiązuje"],
  ],
  ru: [
    ["Карта сайта отдала 415 адресов, Google обнаружил 27",
     "415 адресов в карте сайта, 27 обнаруженных страниц в Search Console"],
    ["Что изменило исправление lastmod: обнаруженные страницы с 27 до 415",
     "Что изменило исправление lastmod: обнаруженные страницы выросли с 27 до 415"],
    ["Чего исправление карты сайта не решает",
     "Проблемы, которых исправление карты сайта не решает"],
  ],
};

const LIM = { "seo.metaTitle": 60, "seo.metaDescription": 160 };

/** Заменяет строковое значение целиком в любом месте дерева. */
function replaceExact(node, from, to, counter) {
  if (Array.isArray(node)) return node.map((n) => replaceExact(n, from, to, counter));
  if (!node || typeof node !== "object") return node;
  const out = {};
  for (const [k, v] of Object.entries(node)) {
    if (typeof v === "string" && v === from) { counter.n += 1; out[k] = to; }
    else out[k] = replaceExact(v, from, to, counter);
  }
  return out;
}

async function main() {
  const report = [];
  const say = (l = "") => { console.log(l); report.push(l); };

  let totalFields = 0;
  let totalHeads = 0;
  const commits = [];

  for (const lang of ["en", "pl", "ru"]) {
    const doc = await client.getDocument(docId(lang));
    if (!doc) { say(`! ${docId(lang)} не найден. Останавливаюсь.`); process.exit(1); }

    say(`\n${"=".repeat(70)}\n[${lang}] ${docId(lang)}`);
    const slug = doc.slug && doc.slug[lang] && doc.slug[lang].current;
    say(`  слаг (не меняю): ${slug}`);

    const current = {
      title: doc.title,
      "seo.metaTitle": doc.seo && doc.seo.metaTitle,
      "seo.metaDescription": doc.seo && doc.seo.metaDescription,
      excerpt: doc.excerpt,
    };
    const set = {};
    for (const [field, next] of Object.entries(FIELDS[lang])) {
      if (current[field] === next) { say(`  = ${field}: уже совпадает`); continue; }
      if (LIM[field] && next.length > LIM[field]) {
        say(`  ! ${field}: ${next.length} симв., лимит ${LIM[field]} — останавливаюсь`);
        process.exit(1);
      }
      say(`  ${field}${LIM[field] ? ` [${next.length}]` : ""}`);
      say(`     было:  ${current[field]}`);
      say(`     будет: ${next}`);
      set[field] = next;
      totalFields += 1;
    }

    let blocks = doc.contentBlocks || [];
    let heads = 0;
    for (const [from, to] of HEADINGS[lang]) {
      if (JSON.stringify(blocks).includes(to)) { say(`  = H2 уже поправлен: ${to.slice(0, 45)}…`); continue; }
      const counter = { n: 0 };
      const next = replaceExact(blocks, from, to, counter);
      if (counter.n !== 1) {
        say(`  ! H2 «${from.slice(0, 50)}…»: найдено ${counter.n}, ожидалось 1 — останавливаюсь`);
        process.exit(1);
      }
      blocks = next;
      heads += 1;
      say(`  H2`);
      say(`     было:  ${from}`);
      say(`     будет: ${to}`);
    }
    totalHeads += heads;

    if (Object.keys(set).length || heads) {
      commits.push({ id: docId(lang), set, blocks: heads ? blocks : null });
    }
  }

  say(`\n${"=".repeat(70)}`);
  if (!commits.length) {
    say("Изменений нет — всё уже применено.");
  } else if (APPLY) {
    for (const c of commits) {
      const p = client.patch(c.id);
      if (Object.keys(c.set).length) p.set(c.set);
      if (c.blocks) p.set({ contentBlocks: c.blocks });
      await p.commit();
      say(`→ ${c.id}`);
    }
    say(`Применено: полей ${totalFields}, заголовков ${totalHeads}, документов ${commits.length}.`);
  } else {
    say(`Это сухой прогон. Полей: ${totalFields}, заголовков: ${totalHeads}, документов: ${commits.length}.`);
    say("Применить: node scripts/fix-lastmod-headings.cjs --apply");
  }

  const name = APPLY ? "lastmod-headings-applied.txt" : "lastmod-headings-dry-run.txt";
  fs.writeFileSync(path.resolve(__dirname, "../drafts/" + name), report.join("\n"), "utf8");
  console.log(`\nОтчёт: drafts/${name}`);
}

main().catch((e) => { console.error("Ошибка:", e.message); process.exit(1); });
