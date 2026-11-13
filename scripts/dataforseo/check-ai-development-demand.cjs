// scripts/dataforseo/check-ai-development-demand.cjs
//
// Замер спроса под две статьи о разработке сайта с ИИ: первая — про цену,
// которая растёт незаметно (производительность, бюджет обхода), вторая — про
// промпт, который запрещал странице продавать (коммерческий интент).
//
// Зачем. Кейс у нас есть и он редкий, но правило то же, что и всегда:
// сначала замер, потом текст, и переводы только туда, где спрос есть.
// Отдельный вопрос, на который этот прогон должен ответить, — жив ли в
// частотах термин «вайбкодинг» или тема ищется описательно («сайт сделал
// ИИ», «ошибки в коде нейросети»).
//
// Контроль: в каждом языке есть коммерческие головные фразы. Колонка нулей
// по ним означает, что вызов не прошёл, а не что спроса нет.
//
// Рынки как в check-audit-article-demand.cjs:
//   en → США; pl → Польша, польский; ru → Польша и Казахстан, русский.
//
//   node scripts/dataforseo/check-ai-development-demand.cjs --dry-run
//   node scripts/dataforseo/check-ai-development-demand.cjs --budget 0.5
//
// Вывод: research/dataforseo/ai-development-demand.json и .md

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
const BUDGET_USD = budgetArg > -1 ? Number(process.argv[budgetArg + 1]) : 0.5;

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
    "vibe coding": ["vibe coding", "vibe coding problems", "vibe coded app", "is vibe coding good", "vibe coding production"],
    "ai builds the site": ["can ai build a website", "ai generated website", "ai website builder vs developer", "build a website with chatgpt", "do i still need a developer with ai"],
    "ai code quality": ["ai generated code problems", "is ai generated code reliable", "ai code technical debt", "fix ai generated code", "hire developer to fix ai code", "ai code review"],
    "slow site": ["why is my website slow", "website slow after redesign", "slow database queries website", "crawl budget seo", "googlebot slow response time"],
    "ai content and seo": ["ai generated content seo", "does ai content rank on google", "ai content hurt seo", "ai written product descriptions seo"],
    "control (commercial)": ["web development services", "seo services", "hire web developer"],
  },
  pl: {
    "vibe coding": ["vibe coding", "czym jest vibe coding", "programowanie z ai"],
    "ai buduje stronę": ["strona internetowa zrobiona przez ai", "czy ai zrobi stronę internetową", "tworzenie stron z chatgpt", "czy programista jest jeszcze potrzebny"],
    "jakość kodu ai": ["błędy w kodzie generowanym przez ai", "poprawa kodu po ai", "audyt kodu strony"],
    "wolna strona": ["dlaczego strona wolno się ładuje", "optymalizacja szybkości strony", "budżet indeksowania"],
    "ai i seo": ["treści generowane przez ai a seo", "czy google karze za treści ai", "opisy produktów ai seo"],
    "kontrola (komercyjne)": ["tworzenie stron internetowych", "pozycjonowanie stron", "audyt seo"],
  },
  ru: {
    "вайбкодинг": ["вайбкодинг", "вайб кодинг", "что такое вайбкодинг"],
    "ии делает сайт": ["сайт сделанный нейросетью", "может ли нейросеть сделать сайт", "создание сайта с помощью нейросети", "нужен ли программист если есть нейросеть"],
    "качество кода ии": ["ошибки в коде нейросети", "исправить код после нейросети", "аудит кода сайта"],
    "медленный сайт": ["почему сайт медленно загружается", "оптимизация скорости сайта", "краулинговый бюджет"],
    "ии и seo": ["тексты нейросети и seo", "наказывает ли google за ии тексты", "описания товаров нейросетью seo"],
    "контроль (коммерческие)": ["создание сайта", "продвижение сайта", "seo аудит"],
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
  const lines = ["# Спрос под статьи о разработке сайта с ИИ", "", `Снято: ${new Date().toISOString().slice(0, 10)}.`, ""];

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
        for (const [g, rs] of Object.entries(byGroup)) {
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
  fs.writeFileSync(path.join(OUT, "ai-development-demand.json"), JSON.stringify(report, null, 1));
  fs.writeFileSync(path.join(OUT, "ai-development-demand.md"), lines.join("\n"));
  console.log(`\nWritten: research/dataforseo/ai-development-demand.{json,md} · paid $${spent.toFixed(4)} · cached $${cachedCost.toFixed(4)}`);
}

main().catch((e) => { console.error("\n" + (e.response ? JSON.stringify(e.response.data).slice(0, 400) : e.message)); process.exit(1); });
