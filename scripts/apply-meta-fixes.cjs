// scripts/apply-meta-fixes.cjs
//
// Вторая редакция после сухого прогона apply-perf-meta.cjs.
//
// Что изменилось по сравнению с первой версией:
//   — русское и польское описания страниц аудита производительности НЕ трогаем.
//     Они по теме и написаны нормально («Провожу технический аудит
//     производительности и кода…»), а мои варианты были не лучше, просто другие.
//     Менять их — churn, а не работа;
//   — заголовки, наоборот, правим у всех трёх, но не заменой на «название |
//     бренд», как я предложил сначала. Это выбрасывало выгоду ради краткости.
//     Правильнее подрезать до 60 символов, сохранив то, ради чего заголовок
//     написан;
//   — добавлены три хаба, которые вылезли в диагностике.
//
// Подтверждённый дефект остаётся один: у /services/website-performance-and-code-audit
// в описании стоит текст про ИИ-поиск. Остальное — длина и опечатки.
//
// Отдельно: у русского хаба услуг в заголовке «Разработка сайтов и SEO |  для
// бизнеса в Европе, США и СНГ» — вертикальная черта посреди фразы и два пробела
// подряд. В выдаче это читается как сломанная вёрстка.
//
//   node scripts/apply-meta-fixes.cjs          → сухой прогон
//   node scripts/apply-meta-fixes.cjs --apply  → применяет
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

// Поле отсутствует в объекте — значит не трогаем.
const PATCH = [
  {
    lang: "en",
    slug: "website-performance-and-code-audit",
    why: "описание про ИИ-поиск вместо аудита скорости; заголовок 68 симв.",
    metaTitle: "Website Performance & Code Audit — Speed and Stability",
    metaDescription:
      "A performance and code audit for sites that are slow or unstable: Core Web Vitals measured on real-user data, causes ranked by impact, fixes implemented.",
  },
  {
    lang: "ru",
    slug: "uskorenie-saita-i-uluchshenie-poiskovoi-vidimosti",
    why: "заголовок 65 симв. — обрезается; описание оставляем как есть",
    metaTitle: "Аудит производительности и кода — ускорение сайта",
  },
  {
    lang: "pl",
    slug: "audyt-wydajnosci-i-kodu",
    why: "заголовок 73 симв. — обрезается; описание оставляем как есть",
    metaTitle: "Audyt wydajności i kodu — szybkość i stabilność strony",
  },
  {
    lang: "en",
    slug: "services",
    why: "описание 214 симв., обрезается на середине мысли",
    metaDescription:
      "Website development, SEO and conversion-focused landing pages — working directly with the developer who also does the SEO, with no agency layer in between.",
  },
  {
    lang: "pl",
    slug: "oferty",
    why: "заголовок 81 симв., вторая половина — англоязычный довесок; описание 168",
    metaTitle: "Usługi: tworzenie stron, SEO i integracje | Bandziuk",
    metaDescription:
      "Tworzenie stron internetowych, SEO, landing page i audyty techniczne. Full-stack developer: od projektu po wydajność i integracje CMS/API.",
  },
  {
    lang: "ru",
    slug: "uslugi",
    why: "в заголовке вертикальная черта посреди фразы и двойной пробел",
    metaTitle: "Разработка сайтов и SEO для бизнеса в Европе, США и СНГ",
  },
];

const LIM = { metaTitle: 60, metaDescription: 160 };
const mark = (v, f) => `${(v || "").length}${(v || "").length > LIM[f] ? " ⚠" : ""}`;

async function main() {
  const report = [];
  const say = (l = "") => {
    console.log(l);
    report.push(l);
  };

  let changes = 0;
  const commits = [];
  for (const item of PATCH) {
    const rows = await client.fetch(
      groq`*[_type == "singlepage" && language == $lang && slug[$lang].current == $slug]{
        _id, title, "metaTitle": seo.metaTitle, "metaDescription": seo.metaDescription
      }`,
      { lang: item.lang, slug: item.slug },
    );
    if (rows.length !== 1) {
      say(`\n! [${item.lang}] ${item.slug} — найдено документов: ${rows.length}, ожидался один. Останавливаюсь.`);
      process.exit(1);
    }
    const r = rows[0];
    say(`\n${"=".repeat(70)}\n[${item.lang}] ${item.slug}`);
    say(`  причина: ${item.why}`);
    say(`  title (H1, не меняю): ${r.title}`);

    const set = {};
    for (const f of ["metaTitle", "metaDescription"]) {
      if (!(f in item)) {
        say(`  · ${f}: не трогаю   [${mark(r[f], f)}]`);
        continue;
      }
      if ((r[f] || "") === item[f]) {
        say(`  = ${f}: уже совпадает`);
        continue;
      }
      if (item[f].length > LIM[f]) {
        say(`  ! ${f}: предложенный текст ${item[f].length} симв., лимит ${LIM[f]} — останавливаюсь`);
        process.exit(1);
      }
      say(`  ${f}`);
      say(`     было:  ${r[f] || "(пусто)"}   [${mark(r[f], f)}]`);
      say(`     будет: ${item[f]}   [${mark(item[f], f)}]`);
      set["seo." + f] = item[f];
    }
    if (Object.keys(set).length) {
      commits.push({ id: r._id, set, label: `${item.lang}/${item.slug}` });
      changes += Object.keys(set).length;
    }
  }

  say(`\n${"=".repeat(70)}`);
  if (!changes) {
    say("Изменений нет.");
  } else if (APPLY) {
    for (const c of commits) {
      await client.patch(c.id).set(c.set).commit();
      say(`→ ${c.label}: ${Object.keys(c.set).join(", ")}`);
    }
    say(`Применено полей: ${changes} на ${commits.length} страницах.`);
  } else {
    say(`Это сухой прогон. Полей к изменению: ${changes} на ${commits.length} страницах.`);
    say("Применить: node scripts/apply-meta-fixes.cjs --apply");
  }

  const name = APPLY ? "meta-fixes-applied.txt" : "meta-fixes-dry-run.txt";
  fs.writeFileSync(path.resolve(__dirname, "../drafts/" + name), report.join("\n"), "utf8");
  console.log(`\nОтчёт: drafts/${name}`);
}

main().catch((e) => {
  console.error("Ошибка:", e.message);
  process.exit(1);
});
