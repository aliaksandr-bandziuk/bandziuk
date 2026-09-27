// scripts/dataforseo/check-relocation-topic.cjs
//
// Sizes the demand for an article aimed at relocation / legalisation /
// immigration agencies, in the three languages of bandziuk.com, before the
// topic is chosen. The article is also meant to carry a link to
// moveandinvest.com, so the residency-by-investment family is measured too.
//
// Three families of queries per language, because they answer different
// questions and must not be averaged together:
//
//   site    — "a website for such an agency": what a page could rank for if the
//             article is written for the agency owner as a buyer.
//   clients — "how such an agency gets clients": the buyer's actual pain, which
//             usually carries more commercial intent than the "website" family.
//   market  — the agency's OWN service terms. Not something bandziuk.com would
//             rank for; measured to size the niche and to quote real numbers
//             inside the article as evidence that the traffic exists.
//
// Cost control is the same as check-case-page.cjs: every response is cached
// under research/dataforseo/raw/, a hard budget cap is checked before each
// call, and --dry-run prices the run without paying.
//
// Usage:
//   node scripts/dataforseo/check-relocation-topic.cjs --dry-run
//   node scripts/dataforseo/check-relocation-topic.cjs --budget 1.5

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
const BUDGET_USD = budgetArg > -1 ? Number(process.argv[budgetArg + 1]) : 1.5;

// Russia is not available in the API; Kazakhstan is the proxy used elsewhere in
// this project. Russian is also measured in Poland, where the audience for
// "relocation to Poland" actually searches.
const MARKETS = {
  en: [
    { label: "UK", location_code: 2826, language_code: "en" },
    { label: "US", location_code: 2840, language_code: "en" },
  ],
  pl: [{ label: "PL", location_code: 2616, language_code: "pl" }],
  ru: [
    { label: "KZ", location_code: 2398, language_code: "ru" },
    { label: "PL", location_code: 2616, language_code: "ru" },
  ],
};

const SEEDS = {
  en: {
    site: [
      "relocation agency website", "immigration law firm website", "website for immigration consultants",
      "visa agency website", "immigration website design", "multilingual website for agency",
      "website for relocation company", "immigration consultant website",
    ],
    clients: [
      "how to get immigration clients", "immigration lawyer marketing", "seo for immigration lawyers",
      "marketing for relocation companies", "lead generation for immigration firms",
      "how to attract expat clients", "immigration marketing agency",
    ],
    market: [
      "relocation services", "relocation agency", "immigration consultant", "golden visa",
      "residency by investment", "citizenship by investment", "move abroad", "expat relocation",
    ],
  },
  pl: {
    site: [
      "strona internetowa dla agencji relokacyjnej", "strona dla kancelarii imigracyjnej",
      "strona internetowa dla biura legalizacji pobytu", "strona dla agencji pracy dla obcokrajowców",
      "strona wielojęzyczna dla firmy", "strona internetowa po ukraińsku",
      "strona internetowa dla doradcy imigracyjnego",
    ],
    clients: [
      "jak zdobyć klientów na legalizację pobytu", "marketing dla kancelarii imigracyjnej",
      "pozycjonowanie kancelarii imigracyjnej", "reklama usług legalizacji pobytu",
      "jak pozyskać klientów obcokrajowców", "marketing dla agencji relokacyjnej",
    ],
    market: [
      "legalizacja pobytu", "karta pobytu", "karta pobytu warszawa", "zezwolenie na pobyt czasowy",
      "pomoc w legalizacji pobytu", "agencja relokacyjna", "usługi relokacyjne",
      "obywatelstwo polskie", "pobyt stały", "doradca imigracyjny",
    ],
  },
  ru: {
    site: [
      "сайт для релокационного агентства", "сайт для миграционного агентства", "сайт для визового центра",
      "многоязычный сайт для агентства", "сайт для юриста по миграции", "разработка сайта для агентства",
    ],
    clients: [
      "как привлечь клиентов на релокацию", "продвижение миграционного агентства",
      "реклама визовых услуг", "как найти клиентов на визы", "продвижение юриста по миграции",
      "маркетинг для релокационного агентства",
    ],
    market: [
      "релокация", "релокация в польшу", "карта побыту", "вид на жительство в польше",
      "легализация пребывания в польше", "миграционный юрист", "визовый центр",
      "золотая виза", "гражданство за инвестиции", "вид на жительство за инвестиции",
    ],
  },
};

// Second batch, added after the first run came back all-null and the owner
// pointed out that the seeds leaned on the words an agency is CALLED in
// marketing copy ("agencja relokacyjna", "doradca imigracyjny") rather than the
// words the ordinary intermediary trade uses about itself: obsługa
// cudzoziemców, legalizacja zatrudnienia, pośrednictwo. A separate Ads call, so
// the cached first call stays valid.
const EXTRA = {
  pl: {
    site: [
      "strona dla biura obsługi cudzoziemców", "strona internetowa dla biura obsługi cudzoziemców",
      "strona dla agencji legalizacji pobytu", "strona dla firmy legalizującej pobyt",
      "strona dla biura imigracyjnego", "strona www dla agencji relokacyjnej",
      "tworzenie strony dla agencji pracy", "strona dla pośrednika pracy",
      "strona dla firmy outsourcingowej dla cudzoziemców",
    ],
    clients: [
      "pozycjonowanie agencji relokacyjnej", "pozycjonowanie biura legalizacji pobytu",
      "reklama google agencja pracy", "marketing obsługa cudzoziemców",
      "jak zdobyć klientów cudzoziemców", "jak reklamować usługi dla cudzoziemców",
      "pozycjonowanie strony dla cudzoziemców",
    ],
    market: [
      "obsługa cudzoziemców", "biuro obsługi cudzoziemców", "legalizacja zatrudnienia cudzoziemców",
      "zezwolenie na pracę dla cudzoziemca", "pomoc w uzyskaniu karty pobytu",
      "usługi imigracyjne", "biuro imigracyjne", "agencja legalizacji pobytu",
      "pośrednictwo pracy dla cudzoziemców", "outsourcing kadrowy cudzoziemcy",
    ],
  },
  ru: {
    site: [
      "сайт агентства по легализации", "сайт для агентства по релокации",
      "сайт для агентства по трудоустройству за границей", "сайт для фирмы по легализации",
      "сайт под ключ для агентства", "сайт для посредника по визам",
    ],
    clients: [
      "продвижение сайта агентства", "продвижение агентства по релокации",
      "как привлечь клиентов иностранцев", "реклама услуг по легализации",
      "seo для миграционного агентства", "как получать заявки на визы",
    ],
    market: [
      "легализация в польше", "помощь с картой побыту", "агентство по легализации",
      "оформление карты побыту", "разрешение на работу в польше",
      "помощь в получении внж", "услуги по релокации", "релокационное агентство",
    ],
  },
  en: {
    site: [
      "immigration agency website", "relocation consultant website", "website for visa consultants",
      "immigration firm website design", "website for an immigration agency",
      "relocation company web design",
    ],
    clients: [
      "seo for immigration consultants", "marketing for immigration agency",
      "google ads for immigration", "how to get visa clients",
      "how to get clients for relocation services", "immigration lead generation",
    ],
    market: [
      "immigration services", "visa services", "relocation assistance", "immigration agency",
      "visa consultant", "relocation consultant", "help with residence permit",
    ],
  },
};

// Phrase-match expansion: broad heads only, so the suggestions come back with
// the real phrasings people use rather than our guesses.
const SUGGEST = {
  en: ["relocation agency", "immigration website", "residency by investment"],
  pl: ["legalizacja pobytu", "agencja relokacyjna", "strona dla kancelarii"],
  ru: ["релокация", "миграционное агентство", "вид на жительство"],
};

const ESTIMATE = {
  "dataforseo_labs/google/keyword_ideas/live": 0.03,
  "dataforseo_labs/google/keyword_suggestions/live": 0.02,
  "keywords_data/google_ads/search_volume/live": 0.09,
};

let spent = 0;
let cachedCost = 0;
let plannedEstimate = 0;
const ledger = [];

function assertBudget(next = 0) {
  if (spent + next > BUDGET_USD) {
    throw new Error(`Budget cap reached: spent $${spent.toFixed(4)} of $${BUDGET_USD}, next call ~$${next.toFixed(3)}. Nothing further was requested.`);
  }
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
  if (DRY_RUN) {
    plannedEstimate += estimate;
    console.log(`would call  ${endpoint}  — ${label}  (~$${estimate.toFixed(3)})`);
    return null;
  }
  assertBudget(estimate);
  const res = await axios.post(`https://api.dataforseo.com/v3/${endpoint}`, [payload], {
    auth: { username: LOGIN, password: PASSWORD },
    timeout: 120000,
  });
  const body = res.data;
  const cost = Number(body.cost || 0);
  spent += cost;
  ledger.push({ endpoint, label, cost });
  const task = body.tasks && body.tasks[0];
  if (body.status_code !== 20000 || (task && task.status_code !== 20000)) {
    console.warn(`  ! ${label}: ${task ? task.status_code + " " + task.status_message : body.status_code + " " + body.status_message}`);
  } else {
    fs.mkdirSync(RAW, { recursive: true });
    fs.writeFileSync(file, JSON.stringify(body, null, 1));
  }
  console.log(`paid   ${label}  $${cost.toFixed(4)}  (this run $${spent.toFixed(4)})`);
  assertBudget(0);
  return body;
}

const items = (body) => (body && body.tasks && body.tasks[0] && body.tasks[0].result) || [];

async function searchVolume(keywords, market, label) {
  if (!keywords.length) return [];
  // Google Ads rejects punctuation; strip it rather than lose the batch.
  const clean = [...new Set(keywords.map((k) => k.replace(/[^\p{L}\p{N}\s]/gu, " ").replace(/\s+/g, " ").trim()).filter(Boolean))].slice(0, 700);
  const body = await call(
    "keywords_data/google_ads/search_volume/live",
    { keywords: clean, location_code: market.location_code, language_code: market.language_code },
    `volume · ${label} · ${clean.length} kw`
  );
  return items(body) || [];
}

async function keywordIdeas(lang, market) {
  const seeds = [...SEEDS[lang].site, ...SEEDS[lang].clients].slice(0, 20);
  const body = await call(
    "dataforseo_labs/google/keyword_ideas/live",
    { keywords: seeds, location_code: market.location_code, language_code: market.language_code, limit: 300, include_serp_info: false },
    `ideas · ${lang}/${market.label}`
  );
  const res = items(body)[0];
  return ((res && res.items) || []).map((i) => ({
    keyword: i.keyword,
    volume: i.keyword_info?.search_volume ?? null,
    competition: i.keyword_info?.competition_level ?? null,
    difficulty: i.keyword_properties?.keyword_difficulty ?? null,
    intent: i.search_intent_info?.main_intent ?? null,
    source: "ideas",
  }));
}

async function keywordSuggestions(lang, market) {
  const out = [];
  for (const seed of SUGGEST[lang]) {
    const body = await call(
      "dataforseo_labs/google/keyword_suggestions/live",
      { keyword: seed, location_code: market.location_code, language_code: market.language_code, limit: 100, include_seed_keyword: true },
      `suggest · ${lang}/${market.label} · ${seed}`
    );
    const res = items(body)[0];
    out.push(...((res && res.items) || []).map((i) => ({
      keyword: i.keyword,
      volume: i.keyword_info?.search_volume ?? null,
      difficulty: i.keyword_properties?.keyword_difficulty ?? null,
      intent: i.search_intent_info?.main_intent ?? null,
      source: `suggest:${seed}`,
    })));
  }
  return out;
}

async function main() {
  if (!LOGIN || !PASSWORD) throw new Error("DATAFORSEO_API_LOGIN / DATAFORSEO_API_PASSWORD not found in .env.local");
  console.log(DRY_RUN ? "DRY RUN — nothing will be paid for\n" : `budget cap: $${BUDGET_USD}\n`);

  const report = { generatedAt: new Date().toISOString(), budget: BUDGET_USD, languages: {} };

  for (const lang of ["pl", "ru", "en"]) {
    const primary = MARKETS[lang][0];
    console.log(`\n=== ${lang.toUpperCase()} ===`);

    const seeds = { ...SEEDS[lang] };
    // One Ads call per market with every seed: the endpoint takes up to 700
    // keywords, so splitting by family would only multiply the price. The
    // family is attached afterwards, by looking the keyword back up in SEEDS.
    const norm = (k) => k.replace(/[^\p{L}\p{N}\s]/gu, " ").replace(/\s+/g, " ").trim().toLowerCase();
    const familyOf = {};
    for (const family of ["site", "clients", "market"]) {
      for (const k of seeds[family]) familyOf[norm(k)] = family;
    }
    const allSeeds = [...seeds.site, ...seeds.clients, ...seeds.market];
    const volumes = {};
    for (const market of MARKETS[lang]) {
      const got = await searchVolume(allSeeds, market, `${lang}/${market.label}`);
      volumes[market.label] = (got || []).map((r) => ({ ...r, family: familyOf[norm(r.keyword || "")] || "?" }));
    }

    // Second batch, own call per market (see EXTRA).
    const extraFamilyOf = {};
    for (const family of ["site", "clients", "market"]) {
      for (const k of EXTRA[lang][family]) extraFamilyOf[norm(k)] = family;
    }
    const extraSeeds = [...EXTRA[lang].site, ...EXTRA[lang].clients, ...EXTRA[lang].market];
    const extra = {};
    for (const market of MARKETS[lang]) {
      const got = await searchVolume(extraSeeds, market, `${lang}/${market.label} · extra`);
      extra[market.label] = (got || []).map((r) => ({ ...r, family: extraFamilyOf[norm(r.keyword || "")] || "?" }));
    }

    const ideas = await keywordIdeas(lang, primary);
    const suggestions = await keywordSuggestions(lang, primary);

    report.languages[lang] = { markets: MARKETS[lang], seeds, volumes, extra, extraSeeds: EXTRA[lang], ideas, suggestions };
  }

  if (DRY_RUN) {
    console.log(`\nDry run finished — no paid calls. Uncached calls would cost about $${plannedEstimate.toFixed(2)} (cap $${BUDGET_USD}).`);
    return;
  }

  report.spend = { thisRun: Number(spent.toFixed(4)), cachedResearch: Number(cachedCost.toFixed(4)), ledger };
  fs.mkdirSync(OUT, { recursive: true });
  fs.writeFileSync(path.join(OUT, "relocation-topic.json"), JSON.stringify(report, null, 1));
  console.log(`\nWritten: research/dataforseo/relocation-topic.json`);
  console.log(`Paid by this run: $${spent.toFixed(4)} · cached: $${cachedCost.toFixed(4)}`);
}

main().catch((e) => {
  console.error("\n" + (e.response ? JSON.stringify(e.response.data).slice(0, 500) : e.message));
  process.exit(1);
});
