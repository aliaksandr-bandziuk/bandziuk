// scripts/change-lastmod-slug.cjs
//
// Меняет слаги статьи про lastmod во всех трёх локалях.
//
// Было: адрес повторял прежнюю газетную рамку заголовка
// (google-perestal-chitat-kartu-saita-lastmod). Стало: термин, который
// действительно ищут, короткий и читаемый в выдаче.
//
// Момент выбран сознательно: статья опубликована сегодня, внешних ссылок нет,
// блог живёт на динамическом роуте (без generateStaticParams), поэтому новый
// адрес отвечает сразу, без пересборки. Позже это стоило бы дороже.
//
// Редиректы со старых адресов скрипт НЕ ставит — они добавляются руками
// в next.config.mjs и требуют деплоя. Готовые строки печатаются в отчёте.
//
//   node scripts/change-lastmod-slug.cjs          → сухой прогон
//   node scripts/change-lastmod-slug.cjs --apply  → меняет слаги
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
const BASE_ID = "blog-sitemap-lastmod";
const docId = (lang) => (lang === "en" ? BASE_ID : `${BASE_ID}.${lang}`);
const blogUrl = (lang, slug) => (lang === "en" ? "" : `/${lang}`) + `/blog/${slug}`;

const NEW_SLUG = {
  en: "sitemap-lastmod",
  pl: "lastmod-w-mapie-witryny",
  ru: "lastmod-v-karte-saita",
};

async function main() {
  const report = [];
  const say = (l = "") => { console.log(l); report.push(l); };

  const changes = [];
  for (const lang of ["en", "pl", "ru"]) {
    const doc = await client.getDocument(docId(lang));
    if (!doc) { say(`! ${docId(lang)} не найден. Останавливаюсь.`); process.exit(1); }

    const oldSlug = doc.slug && doc.slug[lang] && doc.slug[lang].current;
    const newSlug = NEW_SLUG[lang];
    say(`\n${"=".repeat(70)}\n[${lang}] ${docId(lang)}`);

    if (oldSlug === newSlug) { say(`  = слаг уже "${newSlug}"`); continue; }

    // занят ли новый слаг кем-то ещё — блогом или страницей
    const busyBlog = await client.fetch(
      groq`*[_type == "blog" && language == $lang && slug[$lang].current == $slug && _id != $self][0]{_id}`,
      { lang, slug: newSlug, self: docId(lang) },
    );
    if (busyBlog) { say(`  ! слаг "${newSlug}" занят статьёй ${busyBlog._id}. Останавливаюсь.`); process.exit(1); }

    say(`  было:  ${blogUrl(lang, oldSlug)}`);
    say(`  будет: ${blogUrl(lang, newSlug)}`);
    changes.push({ lang, id: docId(lang), oldSlug, newSlug });
  }

  if (!changes.length) {
    say("\nИзменений нет — слаги уже новые.");
  } else if (APPLY) {
    for (const c of changes) {
      await client
        .patch(c.id)
        .set({ [`slug.${c.lang}`]: { _type: "slug", current: c.newSlug } })
        .commit();
      say(`\n→ ${c.id}: ${c.oldSlug} → ${c.newSlug}`);
    }
    say(`\nПрименено: ${changes.length}.`);
  } else {
    say(`\nЭто сухой прогон. Слагов к смене: ${changes.length}.`);
    say("Применить: node scripts/change-lastmod-slug.cjs --apply");
  }

  // строки для next.config.mjs
  if (changes.length) {
    const pad = (s, n) => s + " ".repeat(Math.max(1, n - s.length));
    say(`\n${"=".repeat(70)}`);
    say("Вставить в next.config.mjs, в массив статических редиректов,");
    say("после блока «Английский слаг под русским префиксом»:");
    say("");
    say("  // Слаг статьи про lastmod сменён в день публикации: адрес повторял");
    say("  // газетную рамку заголовка. Редирект на случай, если Google успел его увидеть.");
    for (const c of changes) {
      const src = `'${blogUrl(c.lang, c.oldSlug)}',`;
      const dst = `'${blogUrl(c.lang, c.newSlug)}',`;
      say(`  { source: ${pad(src, 58)}destination: ${pad(dst, 46)}permanent: true },`);
    }
    say("");
    say("Без деплоя редиректы не заработают: старые адреса до него отдают 404.");
  }

  const name = APPLY ? "lastmod-slug-applied.txt" : "lastmod-slug-dry-run.txt";
  fs.writeFileSync(path.resolve(__dirname, "../drafts/" + name), report.join("\n"), "utf8");
  console.log(`\nОтчёт: drafts/${name}`);
}

main().catch((e) => { console.error("Ошибка:", e.message); process.exit(1); });
