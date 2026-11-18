// scripts/dataforseo/check-service-wording.cjs
//
// Замер формулировок САМИХ УСЛУГ на трёх языках: как люди называют SEO,
// GEO, AEO, AIO, продвижение в ИИ, ChatGPT и Perplexity, и что из этого
// вообще ищут. Нужен для подзаголовков посадочных страниц: до сих пор
// ключи в них ставились по смыслу, а не по числам.
//
// Это НЕ замер ниш (он лежит в scanning-niches.md) — там мерился спрос
// отрасли, здесь мерится словарь услуги.
//
//   node scripts/dataforseo/check-service-wording.cjs --dry-run
//   node scripts/dataforseo/check-service-wording.cjs --budget 0.6
//
// Вывод: research/dataforseo/service-wording.json и .md

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
const DRY_RUN = process.argv.includes("--dry-run");
const budgetArg = process.argv.indexOf("--budget");
const BUDGET_USD = budgetArg > -1 ? Number(process.argv[budgetArg + 1]) : 0.6;

const MARKETS = {
  en: [{ label: "US", location_code: 2840, language_code: "en" }],
  pl: [{ label: "PL", location_code: 2616, language_code: "pl" }],
  ru: [
    { label: "PL", location_code: 2616, language_code: "ru" },
    { label: "KZ", location_code: 2398, language_code: "ru" },
  ],
};

const KEYWORDS = {
  en: {
    "seo, базовые формы": ["seo services", "seo agency", "seo company", "search engine optimization", "local seo", "technical seo", "seo consultant", "seo audit"],
    "geo": ["generative engine optimization", "geo optimization", "geo seo", "generative seo"],
    "aeo и aio": ["answer engine optimization", "aeo seo", "ai overviews optimization", "ai overview seo"],
    "ии-поиск, общие": ["ai seo", "ai seo services", "llm seo", "ai search optimization", "ai visibility", "ai search visibility", "seo for ai", "optimize for ai search"],
    "ассистенты по именам": ["chatgpt seo", "seo for chatgpt", "how to rank in chatgpt", "perplexity seo", "how to get cited by chatgpt", "gemini seo", "google ai mode seo"],
    "сайты": ["website design", "web development services", "website redesign"],
  },
  pl: {
    "seo, podstawowe formy": ["pozycjonowanie stron", "pozycjonowanie strony", "agencja seo", "seo", "pozycjonowanie lokalne", "audyt seo", "specjalista seo"],
    "geo": ["optymalizacja geo", "generative engine optimization", "geo pozycjonowanie"],
    "aeo i aio": ["answer engine optimization", "optymalizacja pod ai overviews"],
    "ai, ogólne": ["ai seo", "pozycjonowanie w ai", "optymalizacja pod ai", "widoczność w ai", "llm seo", "seo dla ai"],
    "asystenci po nazwie": ["pozycjonowanie w chatgpt", "seo chatgpt", "jak pojawić się w chatgpt", "perplexity seo", "gemini seo"],
    "strony": ["tworzenie stron internetowych", "projektowanie stron", "przebudowa strony"],
  },
  ru: {
    "seo, базовые формы": ["продвижение сайта", "раскрутка сайта", "seo продвижение", "сео продвижение", "поисковое продвижение", "seo оптимизация", "локальное продвижение", "seo аудит", "seo специалист"],
    "geo": ["geo оптимизация", "гео оптимизация", "generative engine optimization"],
    "aeo и aio": ["answer engine optimization", "aeo оптимизация", "оптимизация под ai overviews"],
    "ии, общие": ["ai seo", "ии продвижение", "продвижение в ии", "оптимизация под ии", "видимость в ии", "llm seo", "продвижение в нейросетях", "оптимизация под нейросети"],
    "ассистенты по именам": ["продвижение в chatgpt", "seo для chatgpt", "как попасть в chatgpt", "perplexity продвижение", "gemini seo"],
    "сайты": ["создание сайта", "разработка сайта", "редизайн сайта"],
  },
};

const ESTIMATE = { "keywords_data/google_ads/search_volume/live": 0.09 };
let spent = 0, cachedCost = 0, plannedEstimate = 0;

function assertBudget(next = 0) {
  if (spent + next > BUDGET_USD) throw new Error(`Budget cap reached: $${spent.toFixed(4)} of $${BUDGET_USD}.`);
}
function cacheKey(endpoint, payload) {
  const h = crypto.createHash("sha1").update(endpoint + JSON.stringify(payload)).digest("hex").slice(0, 16);
  return path.join(RAW, `${endpoint.replace(/[^a-z0-9]+/gi, "_")}__${h}.json`);
}
async function call(endpoint, payload, label) {
  const file = cacheKey(endpoint, payload);
  if (fs.existsSync(file)) {
    const cached = JSON.parse(fs.readFileSync(file, "utf8"));
    cachedCost += Number(cached.cost || 0);
    console.log(`cache  ${label}`);
    return cached;
  }
  const estimate = ESTIMATE[endpoint] ?? 0.05;
  if (DRY_RUN) { plannedEstimate += estimate; console.log(`would call ${label} (~$${estimate.toFixed(3)})`); return null; }
  assertBudget(estimate);
  const res = await axios.post(`https://api.dataforseo.com/v3/${endpoint}`, [payload], { auth: { username: LOGIN, password: PASSWORD }, timeout: 120000 });
  const body = res.data;
  spent += Number(body.cost || 0);
  const task = body.tasks && body.tasks[0];
  if (body.status_code !== 20000 || (task && task.status_code !== 20000)) {
    console.warn(`  ! ${label}: ${task ? task.status_code + " " + task.status_message : body.status_message}`);
  } else {
    fs.mkdirSync(RAW, { recursive: true });
    fs.writeFileSync(file, JSON.stringify(body, null, 1));
  }
  console.log(`paid   ${label}  $${Number(body.cost || 0).toFixed(4)}`);
  return body;
}
const items = (b) => (b && b.tasks && b.tasks[0] && b.tasks[0].result) || [];
const norm = (k) => k.replace(/[^\p{L}\p{N}\s]/gu, " ").replace(/\s+/g, " ").trim().toLowerCase();

async function main() {
  if (!LOGIN || !PASSWORD) throw new Error("DATAFORSEO credentials not found in .env.local");
  const report = { generatedAt: new Date().toISOString(), languages: {} };
  const lines = ["# Словарь услуг: как на трёх языках ищут SEO, GEO, AEO и продвижение в ИИ", "", `Снято: ${new Date().toISOString().slice(0, 10)}.`, "", "Нужно для подзаголовков посадочных страниц: какие формы ставить в H2 и H3, а какие только в тело текста.", ""];

  for (const lang of Object.keys(KEYWORDS)) {
    const groupOf = {};
    const all = [];
    for (const [group, list] of Object.entries(KEYWORDS[lang])) {
      for (const k of list) { groupOf[norm(k)] = group; all.push(k); }
    }
    report.languages[lang] = { markets: {} };
    for (const market of MARKETS[lang]) {
      const body = await call(
        "keywords_data/google_ads/search_volume/live",
        { keywords: [...new Set(all.map(norm))], location_code: market.location_code, language_code: market.language_code },
        `${lang}/${market.label} · ${all.length} kw`
      );
      const rows = (items(body) || []).map((r) => ({
        keyword: r.keyword, volume: r.search_volume, competition: r.competition_level,
        group: groupOf[norm(r.keyword || "")] || "?",
      }));
      report.languages[lang].markets[market.label] = rows;
      if (!DRY_RUN && rows.length) {
        lines.push(`## ${lang.toUpperCase()} / ${market.label}`, "");
        const byGroup = {};
        for (const r of rows) (byGroup[r.group] ||= []).push(r);
        for (const g of Object.keys(KEYWORDS[lang])) {
          const rs = byGroup[g];
          if (!rs) continue;
          const sum = rs.reduce((n, r) => n + (r.volume || 0), 0);
          lines.push(`**${g}** — всего ${sum}`);
          for (const r of rs.sort((a, b) => (b.volume || 0) - (a.volume || 0))) {
            lines.push(`- ${r.keyword} — ${r.volume == null ? "нет данных" : r.volume}`);
          }
          lines.push("");
        }
      }
    }
  }
  if (DRY_RUN) { console.log(`\nDry run: about $${plannedEstimate.toFixed(2)}.`); return; }
  fs.mkdirSync(OUT, { recursive: true });
  fs.writeFileSync(path.join(OUT, "service-wording.json"), JSON.stringify(report, null, 1));
  fs.writeFileSync(path.join(OUT, "service-wording.md"), lines.join("\n"));
  console.log(`\nWritten: research/dataforseo/service-wording.{json,md} · paid $${spent.toFixed(4)} · cached $${cachedCost.toFixed(4)}`);
}
main().catch((e) => { console.error("\n" + (e.response ? JSON.stringify(e.response.data).slice(0, 400) : e.message)); process.exit(1); });
