// scripts/apply-en-geo-lexicon.cjs
//
// Английский GEO-хаб: перенацеливание на фразы, которые люди реально вводят.
//
// Что показала проверка:
//   — «Generative Engine Optimization» встречается на английской части сайта
//     ровно один раз, и не здесь, а на нишевой /services/seo-for-auto-repair-shop;
//     то же с «Answer Engine Optimization». Головная страница услуги использует
//     только аббревиатуру GEO;
//   — объёмы: generative engine optimization 260/мес (тренд +243%),
//     ai visibility 90 (+200%), answer engine optimization 50,
//     ai search optimization 40, chatgpt seo 30.
//
// Почему НЕ пишем новых разделов. Тема закрыта плотнее, чем любая другая
// на сайте: 13 английских статей про ИИ-ответы, страница ai-search-readiness
// разбирает механику («What assistants actually do with your copy»), а FAQ хаба
// уже отвечает на вопрос про GEO и AEO. Страница на 748 слов при медиане 883
// и с честной структурой — дописывать туда нечего. Проблема чисто лексическая,
// поэтому правки хирургические: заголовок, meta, excerpt и три точечные замены
// в уже существующих формулировках, без изменения смысла.
//
// Страницу ai-visibility-audit не трогаем: фраза «AI visibility» (90/мес, +200%)
// уже стоит у неё в title, и головной странице этот запрос забирать не нужно.
//
//   node scripts/apply-en-geo-lexicon.cjs          → сухой прогон
//   node scripts/apply-en-geo-lexicon.cjs --apply  → применяет
const fs = require("fs");
const path = require("path");
const groq = String.raw;
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

// Пять английских ИИ-страниц — по ним только диагностика, правим одну.
const AUDIT_SLUGS = [
  "ai-ready-seo-and-geo-optimization",
  "ai-visibility-audit",
  "ai-brand-monitoring",
  "ai-search-readiness",
  "fix-ai-misinformation",
];

const TARGET_SLUG = "ai-ready-seo-and-geo-optimization";

const FIELDS = {
  title: "Generative Engine Optimization (GEO) and AI-Ready SEO",
  excerpt:
    "Generative Engine Optimization (GEO), Answer Engine Optimization (AEO), AI SEO — names for one job: being named, and named correctly, when buyers ask an assistant instead of searching.",
  "seo.metaTitle": "Generative Engine Optimization (GEO) & AEO | Bandziuk",
  "seo.metaDescription":
    "Generative Engine Optimization and Answer Engine Optimization: getting your business named — and named correctly — in ChatGPT, Perplexity and Google AI answers.",
};

// Точечные замены. Каждая — полная строка целиком, смысл не меняется:
// термины называются полностью там, где раньше стояли только аббревиатуры.
const REPLACEMENTS = [
  {
    from: "AI-ready SEO and GEO: two problems, four services",
    to: "AI-ready SEO and Generative Engine Optimization: two problems, four services",
    where: "H2",
  },
  {
    from: "Is GEO the same as AEO?",
    to: "Is Generative Engine Optimization the same as Answer Engine Optimization?",
    where: "вопрос FAQ",
  },
  {
    from:
      "Different names circulating for overlapping work: making a business legible and quotable to AI answer systems. I use them interchangeably rather than claiming a distinction, because the mechanics are the same regardless of the acronym.",
    to:
      "Generative Engine Optimization (GEO), Answer Engine Optimization (AEO) and AI SEO are different names circulating for overlapping work: making a business legible and quotable to AI answer systems. I use them interchangeably rather than claiming a distinction, because the mechanics are the same regardless of the acronym.",
    where: "ответ FAQ",
  },
];

/** Заменяет строковое значение целиком в любом месте дерева. Считает попадания. */
function replaceExact(node, from, to, counter) {
  if (Array.isArray(node)) return node.map((n) => replaceExact(n, from, to, counter));
  if (!node || typeof node !== "object") return node;
  const out = {};
  for (const [k, v] of Object.entries(node)) {
    if (typeof v === "string" && v === from) {
      counter.n += 1;
      out[k] = to;
    } else out[k] = replaceExact(v, from, to, counter);
  }
  return out;
}

async function main() {
  const report = [];
  const say = (l = "") => {
    console.log(l);
    report.push(l);
  };

  // ── диагностика по пяти страницам
  say("=".repeat(70));
  say("ДИАГНОСТИКА: английские ИИ-страницы — что стоит в title и meta сейчас");
  const rows = await client.fetch(
    groq`*[_type == "singlepage" && language == "en" && slug.en.current in $slugs]{
      "slug": slug.en.current, title, "mt": seo.metaTitle, "md": seo.metaDescription
    }`,
    { slugs: AUDIT_SLUGS },
  );
  for (const sl of AUDIT_SLUGS) {
    const r = rows.find((x) => x.slug === sl);
    if (!r) {
      say(`\n  ! ${sl} — не найдена`);
      continue;
    }
    const hasGEO = /Generative Engine Optimization/i.test(JSON.stringify(r));
    const hasAEO = /Answer Engine Optimization/i.test(JSON.stringify(r));
    say(`\n  /services/${sl}`);
    say(`    title: ${r.title}`);
    say(`    metaTitle: ${r.mt || "(пусто)"}   [${(r.mt || "").length}]`);
    say(`    metaDescription: ${r.md || "(пусто)"}   [${(r.md || "").length}]`);
    say(`    полные фразы в title/meta: GEO ${hasGEO ? "есть" : "нет"}, AEO ${hasAEO ? "есть" : "нет"}`);
  }

  // ── правка одной страницы
  const docs = await client.fetch(
    groq`*[_type == "singlepage" && language == "en" && slug.en.current == $slug]{_id}`,
    { slug: TARGET_SLUG },
  );
  if (docs.length !== 1) {
    say(`\n! по slug "${TARGET_SLUG}" найдено документов: ${docs.length} — ожидался один. Останавливаюсь.`);
    process.exit(1);
  }
  const docId = docs[0]._id;
  const doc = await client.getDocument(docId);

  say(`\n${"=".repeat(70)}`);
  say(`ПРАВКА: /services/${TARGET_SLUG}   (${docId})`);

  say("\n--- поля ---");
  const current = {
    title: doc.title,
    excerpt: doc.excerpt,
    "seo.metaTitle": doc.seo && doc.seo.metaTitle,
    "seo.metaDescription": doc.seo && doc.seo.metaDescription,
  };
  const patchFields = {};
  for (const [field, next] of Object.entries(FIELDS)) {
    if (current[field] === next) {
      say(`  = ${field}: уже совпадает`);
      continue;
    }
    say(`  ${field}`);
    say(`     было:  ${current[field] === undefined ? "(пусто)" : current[field]}`);
    say(`     будет: ${next}   [${next.length} симв.]`);
    patchFields[field] = next;
  }

  say("\n--- точечные замены в тексте ---");
  let blocks = doc.contentBlocks || [];
  let replaced = 0;
  for (const r of REPLACEMENTS) {
    if (JSON.stringify(blocks).includes(r.to)) {
      say(`  = ${r.where}: уже применено`);
      continue;
    }
    const counter = { n: 0 };
    const next = replaceExact(blocks, r.from, r.to, counter);
    if (counter.n === 0) {
      say(`  ! ${r.where}: исходная строка не найдена — останавливаюсь, чтобы не применить половину`);
      say(`    искал: ${r.from.slice(0, 80)}...`);
      process.exit(1);
    }
    if (counter.n > 1) {
      say(`  ! ${r.where}: строка найдена ${counter.n} раза — неоднозначно, останавливаюсь`);
      process.exit(1);
    }
    blocks = next;
    replaced += 1;
    say(`  ${r.where}:`);
    say(`     было:  ${r.from}`);
    say(`     будет: ${r.to}`);
  }

  // проверка, что ничего кроме заменённого не съехало
  const before = JSON.stringify(doc.contentBlocks || []).length;
  const after = JSON.stringify(blocks).length;
  const expected = REPLACEMENTS.filter((r) => !JSON.stringify(doc.contentBlocks || []).includes(r.to))
    .reduce((a, r) => a + (r.to.length - r.from.length), 0);
  say(`\n  контроль длины: было ${before}, стало ${after}, ожидаемая разница ${expected}, фактическая ${after - before}`);
  if (after - before !== expected) {
    say("  ! длина изменилась не так, как ожидалось — останавливаюсь");
    process.exit(1);
  }

  say("");
  const hasFieldChanges = Object.keys(patchFields).length > 0;
  if (!hasFieldChanges && replaced === 0) {
    say("Изменений нет — всё уже применено.");
  } else if (APPLY) {
    const p = client.patch(docId);
    if (hasFieldChanges) p.set(patchFields);
    if (replaced) p.set({ contentBlocks: blocks });
    await p.commit();
    say(`→ применено: полей ${Object.keys(patchFields).length}, замен ${replaced}`);
  } else {
    say(`Это сухой прогон. Полей к изменению: ${Object.keys(patchFields).length}, замен: ${replaced}.`);
    say("Применить: node scripts/apply-en-geo-lexicon.cjs --apply");
  }

  const name = APPLY ? "en-geo-lexicon-applied.txt" : "en-geo-lexicon-dry-run.txt";
  fs.writeFileSync(path.resolve(__dirname, "../drafts/" + name), report.join("\n"), "utf8");
  console.log(`\nОтчёт: drafts/${name}`);
}

main().catch((e) => {
  console.error("Ошибка:", e.message);
  process.exit(1);
});
