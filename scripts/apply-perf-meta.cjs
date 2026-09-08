// scripts/apply-perf-meta.cjs
//
// Правка meta трёх страниц аудита производительности + диагностика по хабам.
//
// Повод: у /services/website-performance-and-code-audit в metaDescription
// стоит текст про ИИ-поиск («I optimize websites for the AI-powered future
// of search…») — почти тот же, что был у GEO-хаба. Ни слова про скорость,
// Core Web Vitals или код. Человек, ищущий performance audit, видит в выдаче
// объявление не о том. Страница при этом сегодня дописана и это единственное
// подтверждённое несоответствие из отчёта duplicate-meta.
//
// Проверка на дубли, кстати, дала ноль совпадений по всем 406 документам:
// meta на сайте писались по отдельности, а не копировались. Здесь именно
// похожий, а не идентичный текст — потому проверка его и не поймала.
//
// Русский и польский близнецы правятся заодно: их meta я не видел, поэтому
// сухой прогон покажет «было» и по ним — если там всё в порядке,
// эти два элемента можно просто убрать из PATCH перед применением.
//
// Ниже WATCH — только чтение, ничего не меняет: показывает текущие meta
// хабов услуг и страниц, которых мы сегодня касались, чтобы решить,
// стоит ли трогать их отдельно.
//
//   node scripts/apply-perf-meta.cjs          → сухой прогон
//   node scripts/apply-perf-meta.cjs --apply  → применяет
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

const PATCH = [
  {
    lang: "en",
    slug: "website-performance-and-code-audit",
    metaTitle: "Website Performance & Code Audit | Bandziuk",
    metaDescription:
      "A performance and code audit for sites that are slow or unstable: Core Web Vitals measured on real-user data, causes ranked by impact, and the fixes implemented.",
  },
  {
    lang: "ru",
    slug: "uskorenie-saita-i-uluchshenie-poiskovoi-vidimosti",
    metaTitle: "Аудит производительности и кода сайта | Bandziuk",
    metaDescription:
      "Аудит скорости и кода: Core Web Vitals по данным реальных пользователей, причины по степени влияния, исправления в коде и проверка результата после правок.",
  },
  {
    lang: "pl",
    slug: "audyt-wydajnosci-i-kodu",
    metaTitle: "Audyt wydajności i kodu strony | Bandziuk",
    metaDescription:
      "Audyt szybkości i kodu: Core Web Vitals na danych rzeczywistych użytkowników, przyczyny uporządkowane według wpływu, poprawki wdrożone i sprawdzone po zmianach.",
  },
];

// только чтение
const WATCH = [
  ["en", "services"],
  ["pl", "oferty"],
  ["ru", "uslugi"],
  ["en", "cms-integration-and-api-work"],
  ["pl", "integracja-cms-i-api"],
  ["ru", "integraciya-cms-i-api"],
  ["pl", "strategia-i-optymalizacja-seo"],
];

const LIM = { metaTitle: 60, metaDescription: 160 };
const mark = (v, f) => `${(v || "").length}${(v || "").length > LIM[f] ? " ⚠" : ""}`;

async function one(lang, slug) {
  const rows = await client.fetch(
    groq`*[_type == "singlepage" && language == $lang && slug[$lang].current == $slug]{
      _id, title, "metaTitle": seo.metaTitle, "metaDescription": seo.metaDescription
    }`,
    { lang, slug },
  );
  return rows.length === 1 ? rows[0] : null;
}

async function main() {
  const report = [];
  const say = (l = "") => {
    console.log(l);
    report.push(l);
  };

  say("=".repeat(70));
  say("ПРАВКА");
  let changes = 0;
  const commits = [];
  for (const item of PATCH) {
    const r = await one(item.lang, item.slug);
    if (!r) {
      say(`\n  ! [${item.lang}] ${item.slug} — не найдена или найдена не одна`);
      continue;
    }
    say(`\n  [${item.lang}] ${item.slug}`);
    say(`     title (H1, не меняю): ${r.title}`);
    const set = {};
    for (const f of ["metaTitle", "metaDescription"]) {
      if ((r[f] || "") === item[f]) {
        say(`     = ${f}: уже совпадает`);
        continue;
      }
      say(`     ${f}`);
      say(`        было:  ${r[f] || "(пусто)"}   [${mark(r[f], f)}]`);
      say(`        будет: ${item[f]}   [${mark(item[f], f)}]`);
      set["seo." + f] = item[f];
    }
    if (Object.keys(set).length) {
      commits.push({ id: r._id, set });
      changes += Object.keys(set).length;
    }
  }

  say(`\n${"=".repeat(70)}`);
  say("ДИАГНОСТИКА (только чтение)");
  for (const [lang, slug] of WATCH) {
    const r = await one(lang, slug);
    if (!r) {
      say(`\n  ! [${lang}] ${slug} — не найдена`);
      continue;
    }
    say(`\n  [${lang}] ${slug}`);
    say(`     title: ${r.title}`);
    say(`     metaTitle [${mark(r.metaTitle, "metaTitle")}]: ${r.metaTitle || "(пусто)"}`);
    say(`     metaDescription [${mark(r.metaDescription, "metaDescription")}]: ${r.metaDescription || "(пусто)"}`);
  }

  say(`\n${"=".repeat(70)}`);
  if (!changes) {
    say("Изменений нет.");
  } else if (APPLY) {
    for (const c of commits) await client.patch(c.id).set(c.set).commit();
    say(`→ применено полей: ${changes} на ${commits.length} страницах.`);
  } else {
    say(`Это сухой прогон. Полей к изменению: ${changes} на ${commits.length} страницах.`);
    say("Применить: node scripts/apply-perf-meta.cjs --apply");
  }

  const name = APPLY ? "perf-meta-applied.txt" : "perf-meta-dry-run.txt";
  fs.writeFileSync(path.resolve(__dirname, "../drafts/" + name), report.join("\n"), "utf8");
  console.log(`\nОтчёт: drafts/${name}`);
}

main().catch((e) => {
  console.error("Ошибка:", e.message);
  process.exit(1);
});
