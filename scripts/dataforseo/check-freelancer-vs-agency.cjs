// scripts/dataforseo/check-freelancer-vs-agency.cjs
//
// Отвечает на один вопрос: есть ли измеримый спрос на статью «фрилансер или
// агентство», и в каких языках её имеет смысл делать.
//
// Зачем. 09.11.2026 выгрузка вопросных запросов из Search Console
// (research/ai-questions-gsc-2026-11-09.md) показала 180 показов на одной
// фразе «should i use a freelancer or an agency for my website?» и ещё четыре
// формулировки вокруг неё. Это данные о том, что нас УЖЕ показывают, но не о
// размере темы: Search Console видит только те запросы, по которым мы попали
// в выдачу. Поэтому перед текстом — обычный замер частот, как требует правило
// владельца: исследование ключей, потом текст, и переводы только туда, где
// спрос есть.
//
// Контроль: в каждом языке добавлены коммерческие головные фразы. Колонка
// нулей по ним означает, что вызов не прошёл, а не что спроса нет.
//
// Рынки как в check-audit-article-demand.cjs:
//   en → США; pl → Польша, польский; ru → Польша и Казахстан, русский.
//
//   node scripts/dataforseo/check-freelancer-vs-agency.cjs --dry-run
//   node scripts/dataforseo/check-freelancer-vs-agency.cjs --budget 0.5
//
// Вывод: research/dataforseo/freelancer-vs-agency.json и .md

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
    "decision": ["freelancer vs agency", "freelance web designer vs agency", "web design agency vs freelancer", "should i hire a freelancer or an agency", "hire freelancer or agency", "freelancer or agency for website"],
    "seo variant": ["seo freelancer vs agency", "seo agency vs freelancer", "hire an seo freelancer or agency", "freelance seo consultant vs agency"],
    "cost": ["is a freelancer cheaper than an agency", "freelance web designer cost", "web design agency cost", "how much does a freelance web developer charge"],
    "risk": ["risks of hiring a freelance web developer", "pros and cons of hiring a freelancer", "what to ask a freelance web developer", "how to vet a freelance web developer"],
    "control (commercial)": ["freelance web developer", "web design agency", "hire web developer"],
  },
  pl: {
    "decyzja": ["freelancer czy agencja", "agencja czy freelancer", "strona internetowa freelancer czy agencja", "freelancer czy agencja seo"],
    "koszt": ["ile kosztuje strona u freelancera", "czy freelancer jest tańszy niż agencja", "ile bierze freelancer za stronę"],
    "ryzyko": ["czy warto zatrudnić freelancera", "wady i zalety freelancera", "jak sprawdzić freelancera"],
    "kontrola (komercyjne)": ["freelancer seo", "agencja seo", "tworzenie stron internetowych"],
  },
  ru: {
    "решение": ["фрилансер или агентство", "агентство или фрилансер", "фрилансер или студия", "заказать сайт у фрилансера или в студии", "чем отличается фрилансер от агентства"],
    "стоимость": ["сколько стоит сайт у фрилансера", "дешевле ли фрилансер чем агентство"],
    "риск": ["стоит ли заказывать сайт у фрилансера", "как проверить фрилансера", "плюсы и минусы фрилансера"],
    "контроль (коммерческие)": ["создание сайта", "продвижение сайта", "заказать сайт"],
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
  const lines = ["# Спрос под статью «фрилансер или агентство»", "", `Снято: ${new Date().toISOString().slice(0, 10)}.`, ""];

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
  fs.writeFileSync(path.join(OUT, "freelancer-vs-agency.json"), JSON.stringify(report, null, 1));
  fs.writeFileSync(path.join(OUT, "freelancer-vs-agency.md"), lines.join("\n"));
  console.log(`\nWritten: research/dataforseo/freelancer-vs-agency.{json,md} · paid $${spent.toFixed(4)} · cached $${cachedCost.toFixed(4)}`);
}

main().catch((e) => { console.error("\n" + (e.response ? JSON.stringify(e.response.data).slice(0, 400) : e.message)); process.exit(1); });
