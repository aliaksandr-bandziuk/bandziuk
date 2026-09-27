// scripts/dataforseo/check-niche-website-demand.cjs
//
// Answers one question: for which niche do people actually search "a website
// for <niche>"? Run after check-relocation-topic.cjs showed that the relocation
// and legalisation niche has no such demand in any of the three languages — the
// point here is to see whether that is peculiar to the niche or normal for the
// whole "website for X" pattern.
//
// Two control niches per language (lawyers, real estate) are included on
// purpose: bandziuk.com already has pages and measured demand for those, so
// they calibrate the rest of the numbers.
//
// One Google Ads call per market, so the whole run is a few cents.
//
// Usage:
//   node scripts/dataforseo/check-niche-website-demand.cjs --dry-run
//   node scripts/dataforseo/check-niche-website-demand.cjs --budget 0.5

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
  pl: [{ label: "PL", location_code: 2616, language_code: "pl" }],
  ru: [
    { label: "PL", location_code: 2616, language_code: "ru" },
    { label: "KZ", location_code: 2398, language_code: "ru" },
  ],
  en: [{ label: "US", location_code: 2840, language_code: "en" }],
};

// The niche label is kept next to every phrasing so several wordings of the
// same niche can be summed: a single phrasing being null says nothing.
const KEYWORDS = {
  pl: {
    "relokacja/legalizacja": ["strona dla agencji relokacyjnej", "strona internetowa dla agencji relokacyjnej", "strona dla biura legalizacji pobytu", "strona dla doradcy imigracyjnego"],
    "biuro tłumaczeń": ["strona dla biura tłumaczeń", "strona internetowa dla biura tłumaczeń", "strona dla tłumacza", "strona internetowa dla tłumacza"],
    "agencja pracy": ["strona dla agencji pracy", "strona internetowa dla agencji pracy", "strona dla agencji pracy tymczasowej"],
    "szkoła językowa": ["strona dla szkoły językowej", "strona internetowa dla szkoły językowej", "strona dla szkoły"],
    "kancelaria (kontrola)": ["strona dla kancelarii", "strona dla prawnika", "strona internetowa dla prawnika", "strona dla adwokata"],
    "nieruchomości (kontrola)": ["strona dla agencji nieruchomości", "strona internetowa dla agencji nieruchomości", "strona dla biura nieruchomości"],
    "biuro rachunkowe": ["strona dla biura rachunkowego", "strona internetowa dla biura rachunkowego", "strona dla księgowej"],
    "turystyka": ["strona dla biura podróży", "strona internetowa dla biura podróży", "strona dla agencji turystycznej"],
  },
  ru: {
    "релокация/миграция": ["сайт для релокационного агентства", "сайт для миграционного агентства", "сайт для визового центра", "сайт для юриста по миграции"],
    "бюро переводов": ["сайт для бюро переводов", "сайт бюро переводов", "сайт для переводчика"],
    "кадровое агентство": ["сайт для кадрового агентства", "сайт кадрового агентства", "сайт для агентства по трудоустройству"],
    "языковая школа": ["сайт для языковой школы", "сайт языковой школы", "сайт для школы"],
    "юрист (контроль)": ["сайт для юриста", "сайт юриста", "сайт для адвоката", "сайт юридической компании"],
    "недвижимость (контроль)": ["сайт для агентства недвижимости", "сайт агентства недвижимости", "сайт для риэлтора"],
    "турагентство": ["сайт для турагентства", "сайт турагентства", "сайт для туристического агентства"],
    "медцентр": ["сайт для медицинского центра", "сайт для клиники", "сайт для стоматологии"],
  },
  en: {
    "relocation/immigration": ["relocation agency website", "immigration consultant website", "visa agency website", "website for immigration consultants"],
    "translation agency": ["translation agency website", "website for translation agency", "translator website"],
    "recruitment agency": ["recruitment agency website", "website for recruitment agency", "staffing agency website"],
    "language school": ["language school website", "website for language school"],
    "law firm (control)": ["law firm website", "lawyer website", "attorney website design"],
    "real estate (control)": ["real estate agency website", "realtor website", "real estate website design"],
    "travel agency": ["travel agency website", "website for travel agency"],
    "clinic": ["medical practice website", "dental website design", "clinic website"],
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

  for (const lang of Object.keys(KEYWORDS)) {
    const nicheOf = {};
    const all = [];
    for (const [niche, list] of Object.entries(KEYWORDS[lang])) {
      for (const k of list) { nicheOf[norm(k)] = niche; all.push(k); }
    }
    report.languages[lang] = { markets: {} };
    for (const market of MARKETS[lang]) {
      const body = await call(
        "keywords_data/google_ads/search_volume/live",
        { keywords: [...new Set(all.map(norm))], location_code: market.location_code, language_code: market.language_code },
        `${lang}/${market.label} · ${all.length} kw`
      );
      const rows = (items(body) || []).map((r) => ({ keyword: r.keyword, volume: r.search_volume, competition: r.competition_level, niche: nicheOf[norm(r.keyword || "")] || "?" }));
      report.languages[lang].markets[market.label] = rows;
    }
  }

  if (DRY_RUN) { console.log(`\nDry run: about $${plannedEstimate.toFixed(2)}.`); return; }
  fs.writeFileSync(path.join(OUT, "niche-website-demand.json"), JSON.stringify(report, null, 1));
  console.log(`\nWritten: research/dataforseo/niche-website-demand.json · paid $${spent.toFixed(4)} · cached $${cachedCost.toFixed(4)}`);
}

main().catch((e) => { console.error("\n" + (e.response ? JSON.stringify(e.response.data).slice(0, 400) : e.message)); process.exit(1); });
