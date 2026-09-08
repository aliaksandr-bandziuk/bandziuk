// scripts/check-duplicate-meta.cjs
//
// Диагностика: одинаковые title, metaTitle и metaDescription на разных страницах.
//
// Повод: у /services/website-performance-and-code-audit metaDescription —
// это дословно описание GEO-хаба («I optimize websites for the AI-powered
// future of search…»), то есть не про эту страницу вообще. Раз одна такая
// пара нашлась случайно, стоит посмотреть, сколько их всего.
//
// Дубли описаний — не катастрофа, Google их просто игнорирует и пишет своё,
// но это ровно тот случай, когда сниппет в выдаче перестаёт продавать
// страницу, а на коммерческих страницах он и есть объявление.
//
// Ничего не меняет — только читает и пишет отчёт.
//
//   node scripts/check-duplicate-meta.cjs
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

const LIMITS = { metaTitle: 60, metaDescription: 160 };

async function main() {
  const report = [];
  const say = (l = "") => {
    console.log(l);
    report.push(l);
  };

  const rows = await client.fetch(
    groq`*[_type in ["singlepage", "blog", "portfolio"]]{
      _type, language,
      "slug": coalesce(slug.current, slug.en.current, slug.pl.current, slug.ru.current),
      "parent": parentPage->slug.current,
      title,
      "metaTitle": seo.metaTitle,
      "metaDescription": seo.metaDescription
    }`,
  );
  const label = (r) =>
    `[${r.language}] ${r._type} ${(r.parent ? r.parent + "/" : "") + (r.slug || "?")}`;

  say("=".repeat(70));
  say(`Проверено документов: ${rows.length}`);

  for (const field of ["metaTitle", "metaDescription", "title"]) {
    const map = new Map();
    for (const r of rows) {
      const v = (r[field] || "").trim();
      if (!v) continue;
      if (!map.has(v)) map.set(v, []);
      map.get(v).push(r);
    }
    // дубли считаем только внутри одного языка: одинаковый текст в en и pl —
    // это разные страницы для разных выдач, а не дубль
    const dups = [...map.entries()]
      .map(([v, list]) => {
        const byLang = new Map();
        list.forEach((r) => {
          if (!byLang.has(r.language)) byLang.set(r.language, []);
          byLang.get(r.language).push(r);
        });
        return [v, [...byLang.values()].filter((g) => g.length > 1)];
      })
      .filter(([, groups]) => groups.length > 0);

    say(`\n${"=".repeat(70)}\n${field}: наборов-дублей ${dups.length}`);
    for (const [v, groups] of dups) {
      for (const g of groups) {
        say(`\n  «${v.slice(0, 110)}${v.length > 110 ? "…" : ""}»`);
        g.forEach((r) => say(`     · ${label(r)}`));
      }
    }
  }

  say(`\n${"=".repeat(70)}\nПустые и слишком длинные поля`);
  for (const field of ["metaTitle", "metaDescription"]) {
    const empty = rows.filter((r) => !(r[field] || "").trim());
    const long = rows.filter((r) => (r[field] || "").length > LIMITS[field]);
    say(`\n  ${field}: пусто у ${empty.length}, длиннее ${LIMITS[field]} симв. у ${long.length}`);
    empty.slice(0, 25).forEach((r) => say(`     пусто: ${label(r)}`));
    if (empty.length > 25) say(`     …и ещё ${empty.length - 25}`);
    long
      .sort((a, b) => (b[field] || "").length - (a[field] || "").length)
      .slice(0, 25)
      .forEach((r) => say(`     ${(r[field] || "").length} симв.: ${label(r)}`));
    if (long.length > 25) say(`     …и ещё ${long.length - 25}`);
  }

  fs.writeFileSync(path.resolve(__dirname, "../drafts/duplicate-meta.txt"), report.join("\n"), "utf8");
  console.log("\nОтчёт: drafts/duplicate-meta.txt");
}

main().catch((e) => {
  console.error("Ошибка:", e.message);
  process.exit(1);
});
