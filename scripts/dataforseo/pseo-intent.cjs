// scripts/dataforseo/pseo-intent.cjs
//
// Одно намерение или два? Проверка по пересечению выдачи.
//
// Зачем. Правило «разработка, дизайн и SEO — разные страницы» верно для
// покупателя, но решает Google: если по двум запросам в топ-10 стоят одни и те
// же адреса, поисковик видит одно намерение, и вторая страница будет отбирать
// позиции у первой. Пример: «web design for restaurants» (2 900) и «website for
// restaurants» (14 800), под второй уже есть /restaurant-website.
//
// Как читать результат (обычная практика, решение принимает человек):
//   4 и больше общих адресов в топ-10 — одно намерение, одна страница;
//   2–3 — пограничный случай, смотреть глазами, какие адреса общие;
//   0–1 — разные намерения, разные страницы.
//
// Выдача: en — США (2840), pl и ru — Польша (2616), как в pseo-serp.cjs.
// Цена: около $0.006 за запрос; одинаковые запросы в разных парах
// запрашиваются один раз.
//
//   node scripts/dataforseo/pseo-intent.cjs --dry-run
//   node scripts/dataforseo/pseo-intent.cjs

const fs = require("fs");
const path = require("path");
const axios = require("axios");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env.local"), quiet: true });

const DIR = path.resolve(__dirname, "../../research/pseo");
const DRY = process.argv.includes("--dry-run");

const LOC = {
  en: { location_code: 2840, language_code: "en" },
  pl: { location_code: 2616, language_code: "pl" },
  ru: { location_code: 2616, language_code: "ru" },
};

// [тема, язык, запрос новой страницы, запрос страницы, с которой она может конфликтовать]
const PAIR_SETS = {};
PAIR_SETS.restaurant = [
  ["1 дизайн ресторана", "en", "web design for restaurants", "website for restaurants"],
  ["1 дизайн ресторана", "en", "restaurant website design", "restaurant website"],
  ["1 дизайн ресторана", "pl", "projektowanie strony dla restauracji", "strona internetowa dla restauracji"],
  ["1 дизайн ресторана", "ru", "дизайн сайта для ресторана", "сайт для ресторана"],
  ["2 SEO ресторана", "en", "seo for restaurants", "website for restaurants"],
  ["2 SEO ресторана", "ru", "продвижение сайта ресторана", "сайт для ресторана"],
  ["3 дизайн стройка", "en", "web design for construction companies", "construction company website"],
  ["4 SEO стройка", "en", "seo for construction companies", "web design for construction companies"],
  ["4 SEO стройка", "ru", "продвижение сайта строительной компании", "сайт для строительной компании"],
  ["5 разработка стройка", "pl", "strona internetowa dla firmy budowlanej", "projektowanie strony dla firmy budowlanej"],
];

// 22.10.2026: food-service venues (research/pseo/page-core/food-venues.md).
// Merge or split, design vs development, and conflicts with restaurant pages.
PAIR_SETS.food = [
  ["кафе = кофейня?", "en", "cafe website", "coffee shop website"],
  ["кафе: дизайн vs разработка", "en", "cafe website design", "cafe website"],
  ["кафе vs ресторан", "en", "cafe website", "restaurant website"],
  ["пекарня: дизайн vs разработка", "en", "bakery website design", "bakery website"],
  ["пекарня vs кафе", "en", "bakery website", "cafe website"],
  ["кейтеринг: дизайн vs разработка", "en", "catering website design", "catering website"],
  ["кейтеринг: SEO vs разработка", "en", "catering seo", "catering website"],
  ["фудтрак: дизайн vs разработка", "en", "food truck website design", "food truck website"],
  ["пиццерия: это вообще про сайты?", "en", "pizza website", "restaurant website"],
  ["бар: это вообще про сайты?", "en", "bar website", "restaurant website"],
  ["кафе = кофейня?", "ru", "сайт кафе", "сайт кофейни"],
  ["кафе vs ресторан", "ru", "сайт кафе", "сайт для ресторана"],
  ["пекарня = кондитерская?", "ru", "сайт пекарни", "сайт кондитерской"],
  ["пиццерия vs ресторан", "ru", "сайт пиццерии", "сайт для ресторана"],
];

const SET = (() => { const i = process.argv.indexOf("--set"); return i > -1 ? process.argv[i + 1] : "restaurant"; })();
const PAIRS = PAIR_SETS[SET];
if (!PAIRS) throw new Error(`Unknown --set ${SET}. Known: ${Object.keys(PAIR_SETS).join(", ")}`);

const norm = (u) => String(u || "").toLowerCase()
  .replace(/^https?:\/\//, "").replace(/^www\./, "").replace(/[?#].*$/, "").replace(/\/+$/, "");
const host = (u) => norm(u).split("/")[0];

async function serp(lang, keyword) {
  const auth = Buffer.from(`${process.env.DATAFORSEO_API_LOGIN}:${process.env.DATAFORSEO_API_PASSWORD}`).toString("base64");
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const { data } = await axios.post(
        "https://api.dataforseo.com/v3/serp/google/organic/live/advanced",
        [{ keyword, ...LOC[lang], device: "desktop", depth: 10 }],
        { headers: { Authorization: `Basic ${auth}` }, timeout: 120000 },
      );
      const t = data.tasks && data.tasks[0];
      if (!t || t.status_code !== 20000) throw new Error(t ? `${t.status_code} ${t.status_message}` : "пустой ответ");
      const items = (t.result && t.result[0] && t.result[0].items) || [];
      return {
        urls: items.filter((i) => i.type === "organic").slice(0, 10).map((i) => norm(i.url)),
        aio: items.some((i) => i.type === "ai_overview"),
      };
    } catch (e) {
      if (attempt === 3) throw e;
      await new Promise((r) => setTimeout(r, 6500 * attempt));
    }
  }
}

async function main() {
  const queries = new Map();
  for (const [, lang, a, b] of PAIRS) { queries.set(`${lang}|${a}`, null); queries.set(`${lang}|${b}`, null); }
  console.log(`Пар: ${PAIRS.length}, разных запросов: ${queries.size}, оценка ~$${(queries.size * 0.006).toFixed(2)}.`);
  if (DRY) { console.log("Сухой прогон: ничего не запрошено."); return; }
  if (!process.env.DATAFORSEO_API_LOGIN) throw new Error("Нет DATAFORSEO_API_LOGIN в .env.local");

  for (const k of queries.keys()) {
    const [lang, kw] = k.split("|");
    process.stdout.write(".");
    queries.set(k, await serp(lang, kw));
    await new Promise((r) => setTimeout(r, 1000));
  }
  console.log("\n");

  const out = [];
  const say = (l = "") => { console.log(l); out.push(l); };
  say("# Одно намерение или два: пересечение топ-10");
  say("");
  say("4+ общих адресов — одна страница; 2–3 — смотреть глазами; 0–1 — разные страницы.");
  for (const [topic, lang, a, b] of PAIRS) {
    const A = queries.get(`${lang}|${a}`);
    const B = queries.get(`${lang}|${b}`);
    const common = A.urls.filter((u) => B.urls.includes(u));
    const commonHosts = [...new Set(A.urls.map(host))].filter((h) => B.urls.map(host).includes(h));
    say("");
    say(`## ${topic} · ${lang}: «${a}» и «${b}»`);
    say(`общих адресов: ${common.length} из 10 · общих доменов: ${commonHosts.length}${A.aio ? " · AI Overview по первому" : ""}${B.aio ? " · AI Overview по второму" : ""}`);
    for (const u of common) say(`  = ${u}`);
    say(`  только «${a}»: ${A.urls.filter((u) => !common.includes(u)).map(host).join(", ")}`);
    say(`  только «${b}»: ${B.urls.filter((u) => !common.includes(u)).map(host).join(", ")}`);
  }
  fs.writeFileSync(path.join(DIR, SET === "restaurant" ? "intent-check.md" : `intent-check-${SET}.md`), out.join("\n") + "\n", "utf8");
  say("");
  say(`Записано: research/pseo/${SET === "restaurant" ? "intent-check.md" : `intent-check-${SET}.md`}`);
}

main().catch((e) => { console.error("Ошибка:", e.message); process.exit(1); });
