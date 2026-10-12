// scripts/dataforseo/check-growth-directions.cjs
//
// Measures the three directions that could actually bring organic traffic,
// before anything is written. The site currently takes 36 clicks a quarter
// from 383 indexed pages, and the Search Console export of 2026-10-12 showed
// why: the queries behind the service grid carry single-digit monthly volume,
// so even perfect rankings cap out low (drafts/gsc-12-10-performance.md).
//
//   cost     — "how much does X cost" queries. The site already ranks 6–12 on
//              several of them, so this is the layer closest to traffic.
//   ai       — AI visibility / generative engine optimization, where the owner
//              has measured data nobody else publishes.
//   local    — Poland, which already produces most of the clicks (9 of 36).
//
// One Google Ads call per market with every seed, tagged locally; the markets
// are the ones the clicks actually come from. Russia is not available in the
// API, so Russian is measured in Ukraine (the largest Russian-language source
// of impressions) and in Poland.
//
// Usage:
//   node scripts/dataforseo/check-growth-directions.cjs --dry-run
//   node scripts/dataforseo/check-growth-directions.cjs --budget 1

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const axios = require("axios");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env.local"), quiet: true });

const ROOT = path.resolve(__dirname, "../..");
const OUT = path.join(ROOT, "research", "dataforseo");
const RAW = path.join(OUT, "raw");
const LOGIN = process.env.DATAFORSEO_API_LOGIN;
const PASSWORD = process.env.DATAFORSEO_API_PASSWORD;
const DRY = process.argv.includes("--dry-run");
const bArg = process.argv.indexOf("--budget");
const BUDGET = bArg > -1 ? Number(process.argv[bArg + 1]) : 1;

const MARKETS = [
  { label: "PL/pl", location_code: 2616, language_code: "pl", seeds: "pl" },
  { label: "UA/ru", location_code: 2804, language_code: "ru", seeds: "ru" },
  { label: "PL/ru", location_code: 2616, language_code: "ru", seeds: "ru" },
  { label: "US/en", location_code: 2840, language_code: "en", seeds: "en" },
  { label: "UK/en", location_code: 2826, language_code: "en", seeds: "en" },
];

const SEEDS = {
  pl: {
    cost: [
      "ile kosztuje strona internetowa", "ile kosztuje pozycjonowanie", "ile kosztuje sklep internetowy",
      "ile kosztuje audyt seo", "cena strony internetowej", "koszt strony internetowej",
      "ile kosztuje landing page", "ile kosztuje strona wizytówka", "ile kosztuje prowadzenie strony",
      "ile kosztuje sklep w prestashop", "ile kosztuje reklama google", "cennik tworzenia stron",
    ],
    ai: [
      "pozycjonowanie w ai", "optymalizacja pod ai", "seo dla chatgpt", "widoczność w ai",
      "pozycjonowanie w chatgpt", "jak pojawić się w chatgpt", "ai overviews seo", "geo pozycjonowanie",
    ],
    local: [
      "tworzenie stron internetowych warszawa", "pozycjonowanie warszawa", "agencja seo warszawa",
      "strony internetowe warszawa", "specjalista seo warszawa", "audyt seo warszawa",
      "freelancer tworzenie stron", "pozycjonowanie stron cena", "tworzenie stron internetowych cena",
    ],
  },
  ru: {
    cost: [
      "сколько стоит создание сайта", "сколько стоит сайт", "сколько стоит продвижение сайта",
      "цена создания сайта", "сколько стоит интернет магазин", "сколько стоит лендинг",
      "стоимость разработки сайта", "сколько стоит сайт визитка", "сколько стоит seo",
      "сколько стоит поддержка сайта", "сколько стоит редизайн сайта", "цена seo продвижения",
    ],
    ai: [
      "продвижение в chatgpt", "seo для нейросетей", "оптимизация под ии", "видимость в ии",
      "продвижение в ии", "как попасть в ответы chatgpt", "ai оптимизация сайта", "geo оптимизация",
    ],
    local: [
      "создание сайтов варшава", "продвижение сайта варшава", "сайт под ключ польша",
      "seo специалист варшава", "разработка сайта польша", "продвижение сайта польша",
    ],
  },
  en: {
    cost: [
      "how much does a website cost", "website design cost", "ecommerce website cost",
      "landing page cost", "seo cost", "website maintenance cost", "multilingual website cost",
      "wordpress website cost", "website redesign cost", "how much does seo cost",
      "web developer hourly rate", "cost of a website for small business",
    ],
    ai: [
      "generative engine optimization", "ai seo", "llm seo", "how to rank in chatgpt",
      "ai visibility", "answer engine optimization", "chatgpt seo", "how to appear in ai overviews",
      "ai search optimization", "geo optimization seo", "brand monitoring in ai", "llms.txt",
    ],
    local: [
      "web developer warsaw", "seo freelancer", "hire a web developer", "freelance seo consultant",
      "nextjs developer for hire", "headless cms developer",
    ],
  },
};

const ESTIMATE = 0.09;
let spent = 0, planned = 0;

async function call(payload, label) {
  const h = crypto.createHash("sha1").update("growth" + JSON.stringify(payload)).digest("hex").slice(0, 16);
  const file = path.join(RAW, `growth__${h}.json`);
  if (fs.existsSync(file)) { console.log(`cache  ${label}`); return JSON.parse(fs.readFileSync(file, "utf8")); }
  if (DRY) { planned += ESTIMATE; console.log(`would call  ${label}  (~$${ESTIMATE})`); return null; }
  if (spent + ESTIMATE > BUDGET) throw new Error(`Budget cap: $${spent.toFixed(4)} of $${BUDGET}`);
  const res = await axios.post("https://api.dataforseo.com/v3/keywords_data/google_ads/search_volume/live", [payload], {
    auth: { username: LOGIN, password: PASSWORD }, timeout: 120000,
  });
  spent += Number(res.data.cost || 0);
  fs.mkdirSync(RAW, { recursive: true });
  fs.writeFileSync(file, JSON.stringify(res.data, null, 1));
  console.log(`paid   ${label}  $${Number(res.data.cost || 0).toFixed(4)}`);
  return res.data;
}

const norm = (k) => k.replace(/[^\p{L}\p{N}\s]/gu, " ").replace(/\s+/g, " ").trim().toLowerCase();

(async () => {
  if (!LOGIN || !PASSWORD) throw new Error("DATAFORSEO credentials missing from .env.local");
  const report = { generatedAt: new Date().toISOString(), markets: {} };

  for (const m of MARKETS) {
    const groups = SEEDS[m.seeds];
    const dirOf = {};
    const all = [];
    for (const [dir, list] of Object.entries(groups)) {
      for (const k of list) { dirOf[norm(k)] = dir; all.push(norm(k)); }
    }
    const body = await call(
      { keywords: [...new Set(all)], location_code: m.location_code, language_code: m.language_code },
      `${m.label} · ${new Set(all).size} kw`
    );
    if (!body) continue;
    const items = body.tasks?.[0]?.result || [];
    report.markets[m.label] = items.map((r) => ({
      keyword: r.keyword,
      volume: r.search_volume,
      competition: r.competition_level,
      cpc: r.cpc,
      direction: dirOf[norm(r.keyword || "")] || "?",
    }));
  }

  if (DRY) { console.log(`\nDry run — about $${planned.toFixed(2)}.`); return; }
  fs.writeFileSync(path.join(OUT, "growth-directions.json"), JSON.stringify(report, null, 1));
  console.log(`\nWritten: research/dataforseo/growth-directions.json · paid $${spent.toFixed(4)}`);
})().catch((e) => { console.error("\n" + (e.response ? JSON.stringify(e.response.data).slice(0, 300) : e.message)); process.exitCode = 1; });
