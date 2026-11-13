// scripts/dataforseo/check-ai-agent-oversight.cjs
//
// Замер под статью «Your AI Agent Cannot Tell You the Site Is Failing».
// Прошлый прогон (check-ai-development-demand.cjs) мерил вайбкодинг и скорость;
// эта статья про другое — надзор за ИИ-агентом, органика у сайтов, собранных
// ИИ, и нужен ли специалист рядом с агентом. Нужны частоты, чтобы поставить
// ключ в метатайтл и в подзаголовки, а не угадывать.
//
// Контроль: в каждом языке коммерческие головные фразы. Колонка нулей по ним
// означает, что вызов не прошёл, а не что спроса нет.
//
//   node scripts/dataforseo/check-ai-agent-oversight.cjs --dry-run
//   node scripts/dataforseo/check-ai-agent-oversight.cjs --budget 0.5
//
// Вывод: research/dataforseo/ai-agent-oversight.json и .md

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
    "ai agent": ["ai agent", "ai coding agent", "ai agent for website", "ai agent mistakes", "ai agent oversight", "who checks ai work"],
    "ai + seo": ["ai seo", "ai seo specialist", "ai for seo", "ai seo audit", "ai generated website seo", "seo for ai generated content", "does ai content rank on google"],
    "need a specialist": ["do i need an seo specialist", "can ai replace seo", "is seo dead with ai", "ai vs seo specialist", "hire seo specialist"],
    "problems with ai builds": ["ai generated website problems", "website built with ai", "ai code review", "ai code audit", "fix ai generated website"],
    "geo / aeo": ["generative engine optimization", "answer engine optimization", "how to get cited by chatgpt", "ai search visibility"],
    "control (commercial)": ["seo services", "seo audit", "ai seo services"],
  },
  pl: {
    "agent ai": ["agent ai", "agenci ai", "błędy agenta ai", "ai do tworzenia stron"],
    "ai i seo": ["ai seo", "seo a sztuczna inteligencja", "czy ai zastąpi seo", "audyt seo ai", "strona zrobiona przez ai seo"],
    "czy potrzebny specjalista": ["czy specjalista seo jest potrzebny", "czy ai zastąpi specjalistów", "pozycjonowanie a ai"],
    "geo / aeo": ["optymalizacja pod ai", "widoczność w chatgpt", "pozycjonowanie w ai"],
    "kontrola (komercyjne)": ["pozycjonowanie stron", "audyt seo", "tworzenie stron internetowych"],
  },
  ru: {
    "ии-агент": ["ии агент", "ai агент", "агент разработчик ии", "ошибки ии агента"],
    "ии и seo": ["ии и seo", "seo с помощью ии", "заменит ли ии seo специалиста", "продвижение сайта сделанного нейросетью"],
    "нужен ли специалист": ["нужен ли seo специалист", "заменит ли нейросеть специалиста", "нужен ли программист если есть ии"],
    "geo / aeo": ["оптимизация под ии", "видимость в chatgpt", "продвижение в нейросетях"],
    "контроль (коммерческие)": ["seo продвижение", "seo аудит", "создание сайта"],
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
  const lines = ["# Спрос под статью про надзор за ИИ-агентом", "", `Снято: ${new Date().toISOString().slice(0, 10)}.`, ""];

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
  fs.writeFileSync(path.join(OUT, "ai-agent-oversight.json"), JSON.stringify(report, null, 1));
  fs.writeFileSync(path.join(OUT, "ai-agent-oversight.md"), lines.join("\n"));
  console.log(`\nWritten: research/dataforseo/ai-agent-oversight.{json,md} · paid $${spent.toFixed(4)} · cached $${cachedCost.toFixed(4)}`);
}

main().catch((e) => { console.error("\n" + (e.response ? JSON.stringify(e.response.data).slice(0, 400) : e.message)); process.exit(1); });
