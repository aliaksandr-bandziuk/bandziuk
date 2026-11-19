// scripts/dataforseo/check-repair-niches-demand.cjs
//
// Замер под ремонтные ниши: ремонт телефонов и электроники, ремонт бытовой
// техники. Две ниши в одном прогоне, чтобы сравнить их между собой и решить,
// это одна страница или две: телефон несут в точку и ждут час, за стиральной
// машиной мастера вызывают на дом — заявка разная.
//
// В каждой нише три группы: продвижение (наш клиент), сайт (наш клиент),
// услуга (его клиент — показывает, есть ли в нише кого приводить, и даёт
// слова для текста). Контроль — коммерческие головные фразы: нули по ним
// означают, что вызов не прошёл, а не что спроса нет.
//
// Отдельно смотрим «наклейку защитного стекла»: услуга почти бесплатная, но
// по чужой Search Console собирает основную долю кликов, то есть работает
// дверью для дорогого ремонта.
//
//   node scripts/dataforseo/check-repair-niches-demand.cjs --dry-run
//   node scripts/dataforseo/check-repair-niches-demand.cjs --budget 0.4
//
// Вывод: research/dataforseo/repair-niches.json и .md

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
    "телефоны · продвижение": ["seo for phone repair shops", "phone repair marketing", "how to get customers for phone repair"],
    "телефоны · сайт": ["phone repair website", "website for phone repair shop"],
    "телефоны · услуга": ["phone screen repair", "screen protector installation", "laptop repair service", "tablet repair service"],

    "бытовая техника · продвижение": ["seo for appliance repair", "appliance repair marketing", "appliance repair leads"],
    "бытовая техника · сайт": ["appliance repair website"],
    "бытовая техника · услуга": ["appliance repair service", "washing machine repair", "refrigerator repair", "dishwasher repair"],

    "контроль (коммерческие)": ["seo services", "website design", "seo agency"],
  },

  pl: {
    "telefony · pozycjonowanie": ["pozycjonowanie serwisu telefonow", "marketing serwisu gsm"],
    "telefony · strona": ["strona dla serwisu telefonow", "strona internetowa serwis gsm"],
    "telefony · usługa": ["naprawa telefonow", "wymiana szybki w telefonie", "naklejanie szkla hartowanego", "naprawa laptopow", "serwis gsm"],

    "agd · pozycjonowanie": ["pozycjonowanie serwisu agd", "marketing serwisu agd"],
    "agd · strona": ["strona dla serwisu agd"],
    "agd · usługa": ["naprawa pralek", "serwis agd", "naprawa lodowek", "naprawa zmywarek"],

    "kontrola (komercyjne)": ["pozycjonowanie stron", "tworzenie stron internetowych", "agencja seo"],
  },

  ru: {
    "телефоны · продвижение": ["продвижение ремонта телефонов", "реклама ремонта телефонов"],
    "телефоны · сайт": ["сайт для ремонта телефонов"],
    "телефоны · услуга": ["ремонт телефонов", "замена экрана телефона", "наклейка защитного стекла", "ремонт ноутбуков"],

    "бытовая техника · продвижение": ["продвижение ремонта бытовой техники"],
    "бытовая техника · сайт": ["сайт для ремонта бытовой техники"],
    "бытовая техника · услуга": ["ремонт стиральных машин", "ремонт холодильников", "ремонт бытовой техники на дому"],

    "контроль (коммерческие)": ["создание сайта", "продвижение сайта", "seo продвижение"],
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
  const lines = [
    "# Спрос по ремонтным нишам: телефоны и бытовая техника",
    "",
    `Снято: ${new Date().toISOString().slice(0, 10)}.`,
    "",
    "В каждой нише три группы: продвижение (наш клиент), сайт (наш клиент),",
    "услуга (его клиент — показывает, есть ли в нише кого приводить).",
    "",
  ];

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
        const order = Object.keys(KEYWORDS[lang]);
        for (const g of order) {
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
  fs.writeFileSync(path.join(OUT, "repair-niches.json"), JSON.stringify(report, null, 1));
  fs.writeFileSync(path.join(OUT, "repair-niches.md"), lines.join("\n"));
  console.log(`\nWritten: research/dataforseo/repair-niches.{json,md} · paid $${spent.toFixed(4)} · cached $${cachedCost.toFixed(4)}`);
}

main().catch((e) => { console.error("\n" + (e.response ? JSON.stringify(e.response.data).slice(0, 400) : e.message)); process.exit(1); });
