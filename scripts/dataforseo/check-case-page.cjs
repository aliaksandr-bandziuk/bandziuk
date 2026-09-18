// scripts/dataforseo/check-case-page.cjs
//
// Checks what a portfolio case page can realistically rank for, in all three
// languages, and how much of the demand is answered inside AI answers rather
// than by the blue links.
//
// Two phases, because the SERP list has to be chosen after the cannibalisation
// check, not before it:
//
//   phase 1 — research (always runs, cached):
//     1. keyword ideas around all seeds             (DataForSEO Labs, keyword_ideas)
//     2. phrase-match suggestions for the case seeds (DataForSEO Labs, keyword_suggestions)
//     3. Google Ads search volume for seeds + top candidates; for English also
//        the US as a reference market
//
//   phase 2 — live SERP (only when research/dataforseo/serp-plan.json exists):
//     organic/live/advanced for the planned queries — AI overview present or not,
//     People Also Ask, top-10 domains, and whether bandziuk.com is in the top 20
//
// Seeds come in two groups. "service" seeds describe what bandziuk.com already
// sells on its service pages; they are collected so the cannibalisation check
// can see them, not so the case page targets them. "case" seeds describe what
// the case itself is about.
//
// Cost control:
//   — hard budget cap: checked before every call against a price estimate and
//     again after every call against the real cost; the run stops when hit
//   — every response is cached under research/dataforseo/raw/, so a re-run
//     costs nothing for calls already made; the report shows both what this run
//     paid and what the cached research cost in total
//   — --dry-run shows the balance (free endpoint), the planned calls and an
//     estimate, and pays for nothing
//
// Credentials come from .env.local (DATAFORSEO_API_LOGIN / _PASSWORD) and are
// never printed.
//
// Usage:
//   node scripts/dataforseo/check-case-page.cjs --dry-run
//   node scripts/dataforseo/check-case-page.cjs --budget 2
//   (write research/dataforseo/serp-plan.json, then run again for phase 2)

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const axios = require("axios");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env.local"), quiet: true });

const ROOT = path.resolve(__dirname, "../..");
const OUT = path.join(ROOT, "research", "dataforseo");
const RAW = path.join(OUT, "raw");
const SERP_PLAN = path.join(OUT, "serp-plan.json");

const DRY_RUN = process.argv.includes("--dry-run");
const budgetArg = process.argv.indexOf("--budget");
const BUDGET_USD = budgetArg > -1 ? Number(process.argv[budgetArg + 1]) : 3;

const LOGIN = process.env.DATAFORSEO_API_LOGIN;
const PASSWORD = process.env.DATAFORSEO_API_PASSWORD;

// ---------------------------------------------------------------- markets --
//
// Russia and Belarus are not available in DataForSEO. Russian volumes are read
// from Kazakhstan; the Russian-language SERP is read from Poland, where this
// site's Russian-speaking readers actually are. English: the UK is the target
// market, the US is read for volume only, as a reference.

const MARKETS = {
  en: { volume: { location_code: 2826, language_code: "en" }, reference: { location_code: 2840, language_code: "en" }, serp: { location_code: 2826, language_code: "en" } },
  pl: { volume: { location_code: 2616, language_code: "pl" }, serp: { location_code: 2616, language_code: "pl" } },
  ru: { volume: { location_code: 2398, language_code: "ru" }, serp: { location_code: 2616, language_code: "ru" } },
};

const SEEDS = {
  en: {
    service: ["next js website development", "multilingual website development", "headless cms website", "generative engine optimization", "ai search optimization"],
    case: ["website for consultants", "consultant website design", "website with calculator", "sanity cms examples", "next js website examples", "how to get cited by chatgpt", "how to appear in ai overviews"],
  },
  pl: {
    service: ["tworzenie stron next js", "strona wielojezyczna", "headless cms strona", "pozycjonowanie pod ai", "optymalizacja pod sztuczna inteligencje"],
    case: ["strona dla konsultanta", "strona internetowa dla doradcy", "strona dla eksperta", "strona z kalkulatorem", "strona internetowa przykład", "jak pojawić się w odpowiedziach ai", "jak być widocznym w chatgpt"],
  },
  ru: {
    service: ["разработка сайта на next js", "многоязычный сайт", "headless cms сайт", "продвижение в нейросетях", "оптимизация под ии поиск"],
    case: ["сайт для консультанта", "сайт эксперта", "сайт для консалтинговой компании", "сайт с калькулятором", "пример сайта", "как попасть в ответы chatgpt", "как попасть в ответы нейросетей"],
  },
};

// Phrase-match suggestions are pulled for these case seeds only (one call each).
const SUGGEST = {
  en: ["website for consultants", "consultant website", "sanity cms"],
  pl: ["strona dla", "strona internetowa dla"],
  ru: ["сайт для консультанта", "сайт эксперта"],
};

// Hand-picked phrasings checked in Google Ads directly. Keyword ideas drift
// towards whatever the seed word is most searched for ("how to cite a
// website", navigational "<brand> сайт"), and on the Polish and Russian markets
// they barely reached the case topic, so the phrasings a case page could answer
// are checked by name.
const CURATED = {
  en: ["consultant website examples", "consultant website design", "website for consultants", "website for a consultant", "best consultant websites", "personal website for consultant", "expert website design", "website with calculators", "calculator website", "excel style website", "analytics consultant website", "retail consultant website", "next js sanity example", "sanity cms examples", "sanity cms website examples", "multilingual website example", "multilingual website examples", "how to get cited in ai overviews", "how to get cited by chatgpt", "how to get your website cited by ai", "how to appear in chatgpt answers", "how to optimize for ai overviews", "ai overview optimization", "llm seo", "website case study", "web design case study", "seo case study", "website redesign case study"],
  pl: ["strona dla konsultanta", "strona internetowa dla konsultanta", "strona dla doradcy", "strona dla eksperta", "strona internetowa dla eksperta", "strona internetowa dla analityka", "strona z kalkulatorem", "kalkulator na stronie", "przykładowa strona internetowa", "strona internetowa przykłady", "przykłady stron internetowych", "strona wielojęzyczna przykład", "strona next js", "sanity cms", "jak pojawić się w chatgpt", "pozycjonowanie w chatgpt", "pozycjonowanie w ai", "case study strona internetowa", "realizacja strony internetowej", "portfolio stron internetowych", "strona dla freelancera", "strona dla coacha", "strona internetowa dla doradcy biznesowego", "strona internetowa dla konsultanta biznesowego", "wielojęzyczna strona internetowa"],
  ru: ["сайт для консультанта", "сайт эксперта", "сайт для эксперта", "личный сайт эксперта", "сайт эксперта пример", "сайт для аналитика", "сайт с калькулятором", "калькулятор на сайт", "многоязычный сайт пример", "пример сайта эксперта", "кейс разработки сайта", "кейс создание сайта", "портфолио веб разработчика", "как попасть в ответы chatgpt", "как попасть в ответы нейросетей", "продвижение в chatgpt", "сайт на next js", "sanity cms", "сайт для коуча", "сайт для психолога", "сайт для консалтинга", "создание сайта для эксперта", "сайт для бизнес консультанта", "сайт визитка для эксперта", "многоязычный сайт"],
};

// Second batch, added after the SERPs showed that "strona dla konsultanta"
// means a medical national consultant and "сайт для консультанта" means a chat
// widget: the "expert" / "specialist" / "consulting" phrasings are checked here.
const CURATED_EXTRA = {
  en: ["consulting website design", "consulting website", "consulting website examples", "consultant website template", "website for consulting business", "expert website", "retail analytics website", "sanity cms website example", "next js multilingual website"],
  pl: ["strony dla ekspertów", "strona internetowa dla ekspertów", "strona www dla eksperta", "strona dla specjalisty", "strona internetowa specjalisty", "strona dla doradcy biznesowego", "strona dla analityka", "strona osobista", "wizytówka eksperta", "strona internetowa dla trenera biznesu", "kalkulatory na stronie", "strona z kalkulatorami", "sanity cms przykład"],
  ru: ["экспертный сайт", "создание сайта эксперта", "сайт эксперта под ключ", "личный сайт", "личный сайт специалиста", "сайт специалиста", "сайт для специалиста", "сайт для бизнес тренера", "сайт аналитика", "кейс сайт эксперта", "калькулятор для сайта", "калькуляторы на сайте", "сайт консультанта"],
};

// Rough prices used for the pre-call budget check (USD). The real cost from
// each response is what is counted.
const ESTIMATE = {
  "dataforseo_labs/google/keyword_ideas/live": 0.03,
  "dataforseo_labs/google/keyword_suggestions/live": 0.02,
  "keywords_data/google_ads/search_volume/live": 0.09,
  "serp/google/organic/live/advanced": 0.006,
};

// ------------------------------------------------------------------ spend --

let spent = 0; // paid by this run
let cachedCost = 0; // what the cached responses cost when they were bought
const ledger = [];

function assertBudget(next = 0) {
  if (spent + next > BUDGET_USD) {
    throw new Error(`Budget cap reached: spent $${spent.toFixed(4)} of $${BUDGET_USD}, next call ~$${next.toFixed(3)}. Nothing further was requested.`);
  }
}

// ------------------------------------------------------------------- http --

function cacheKey(endpoint, payload) {
  const h = crypto.createHash("sha1").update(endpoint + JSON.stringify(payload)).digest("hex").slice(0, 16);
  return path.join(RAW, `${endpoint.replace(/[^a-z0-9]+/gi, "_")}__${h}.json`);
}

let plannedEstimate = 0;

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
    // A failed task is not cached, so a fixed request can be retried.
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

// ------------------------------------------------------------------ steps --

async function balance() {
  const res = await axios.get("https://api.dataforseo.com/v3/appendix/user_data", {
    auth: { username: LOGIN, password: PASSWORD },
    timeout: 60000,
  });
  const money = res.data?.tasks?.[0]?.result?.[0]?.money;
  if (money) console.log(`account balance: $${Number(money.balance).toFixed(2)}\n`);
  return money;
}

const toCandidate = (i, source) => ({
  keyword: i.keyword,
  volume: i.keyword_info?.search_volume ?? null,
  competition: i.keyword_info?.competition_level ?? null,
  difficulty: i.keyword_properties?.keyword_difficulty ?? null,
  intent: i.search_intent_info?.main_intent ?? null,
  source,
});

async function keywordIdeas(lang) {
  const m = MARKETS[lang].volume;
  const seeds = [...SEEDS[lang].service, ...SEEDS[lang].case];
  const body = await call("dataforseo_labs/google/keyword_ideas/live", { keywords: seeds, ...m, limit: 300, include_serp_info: false }, `keyword ideas · ${lang}`);
  const res = items(body)[0];
  return ((res && res.items) || []).map((i) => toCandidate(i, "ideas"));
}

async function keywordSuggestions(lang) {
  const m = MARKETS[lang].volume;
  const out = [];
  for (const seed of SUGGEST[lang]) {
    const body = await call("dataforseo_labs/google/keyword_suggestions/live", { keyword: seed, ...m, limit: 100, include_seed_keyword: true }, `suggestions · ${lang} · ${seed}`);
    const res = items(body)[0];
    out.push(...((res && res.items) || []).map((i) => toCandidate(i, `suggest:${seed}`)));
  }
  return out;
}

async function searchVolume(lang, keywords, market, label) {
  if (!keywords.length) return [];
  // Google Ads rejects keywords with punctuation; strip it rather than lose the batch.
  const clean = [...new Set(keywords.map((k) => k.replace(/[^\p{L}\p{N}\s]/gu, " ").replace(/\s+/g, " ").trim()).filter(Boolean))].slice(0, 700);
  const body = await call("keywords_data/google_ads/search_volume/live", { keywords: clean, ...market }, `search volume · ${label} · ${clean.length} kw`);
  return items(body) || [];
}

async function serp(lang, keyword) {
  const m = MARKETS[lang].serp;
  const body = await call("serp/google/organic/live/advanced", { keyword, ...m, depth: 20, people_also_ask_click_depth: 1 }, `serp · ${lang} · ${keyword}`);
  const res = items(body)[0];
  if (!res) return null;
  const blocks = res.items || [];
  const types = [...new Set(blocks.map((b) => b.type))];
  const aiOverview = types.some((t) => String(t).includes("ai_overview"));
  const paa = blocks.filter((b) => b.type === "people_also_ask").flatMap((b) => (b.items || []).map((q) => q.title)).filter(Boolean);
  const organicAll = blocks.filter((b) => b.type === "organic");
  const organic = organicAll.slice(0, 10).map((b) => ({ pos: b.rank_group, domain: b.domain, title: b.title }));
  const own = organicAll.filter((b) => /bandziuk\.com$/.test(b.domain || "")).map((b) => ({ pos: b.rank_group, url: b.url }));
  const aiRefs = blocks.filter((b) => String(b.type).includes("ai_overview")).flatMap((b) => (b.references || []).map((r) => r.domain)).filter(Boolean);
  return { keyword, aiOverview, aiRefs: [...new Set(aiRefs)], blockTypes: types, paa: [...new Set(paa)], organic, own };
}

// ------------------------------------------------------------------- main --

async function main() {
  if (!LOGIN || !PASSWORD) throw new Error("DATAFORSEO_API_LOGIN / DATAFORSEO_API_PASSWORD not found in .env.local");
  fs.mkdirSync(RAW, { recursive: true });
  console.log(DRY_RUN ? "DRY RUN — nothing will be paid for\n" : `budget cap: $${BUDGET_USD}\n`);
  const money = await balance(); // free endpoint, also in a dry run

  const plan = fs.existsSync(SERP_PLAN) ? JSON.parse(fs.readFileSync(SERP_PLAN, "utf8")) : null;
  const report = { generatedAt: new Date().toISOString(), budget: BUDGET_USD, languages: {} };

  for (const lang of ["en", "pl", "ru"]) {
    console.log(`\n=== ${lang} ===`);
    const seeds = [...SEEDS[lang].service, ...SEEDS[lang].case];

    const all = [...(await keywordIdeas(lang)), ...(await keywordSuggestions(lang))];
    const byKw = new Map();
    for (const c of all) {
      if (!c.keyword) continue;
      const prev = byKw.get(c.keyword);
      if (!prev) byKw.set(c.keyword, c);
      else if (!prev.source.includes(c.source)) prev.source += `,${c.source}`;
    }
    for (const s of seeds) if (!byKw.has(s)) byKw.set(s, { keyword: s, volume: null, competition: null, difficulty: null, intent: null, source: "seed" });
    const candidates = [...byKw.values()].sort((a, b) => (b.volume || 0) - (a.volume || 0));

    // Curated phrasings: a separate Ads call, so the earlier cached call stays valid.
    const curatedVol = [
      ...(await searchVolume(lang, CURATED[lang], MARKETS[lang].volume, `${lang} · curated`)),
      ...(await searchVolume(lang, CURATED_EXTRA[lang], MARKETS[lang].volume, `${lang} · curated 2`)),
    ];
    const curatedUs = MARKETS[lang].reference
      ? [
          ...(await searchVolume(lang, CURATED[lang], MARKETS[lang].reference, `${lang}-US · curated`)),
          ...(await searchVolume(lang, CURATED_EXTRA[lang], MARKETS[lang].reference, `${lang}-US · curated 2`)),
        ]
      : [];
    const usByKw = new Map(curatedUs.map((v) => [v.keyword, v.search_volume]));
    for (const v of curatedVol) {
      const existing = candidates.find((c) => c.keyword === v.keyword);
      if (existing) { existing.source += ",curated"; existing.curatedVolume = v.search_volume; }
      else candidates.push({ keyword: v.keyword, volume: null, curatedVolume: v.search_volume, usVolume: usByKw.get(v.keyword) ?? null, competition: v.competition ?? null, difficulty: null, intent: null, source: "curated" });
    }

    const forVolume = [...seeds, ...candidates.filter((c) => !seeds.includes(c.keyword)).slice(0, 250).map((c) => c.keyword)];
    const volumes = await searchVolume(lang, forVolume, MARKETS[lang].volume, lang);
    const volByKw = new Map(volumes.map((v) => [v.keyword, v.search_volume]));
    for (const c of candidates) {
      const k = c.keyword.replace(/[^\p{L}\p{N}\s]/gu, " ").replace(/\s+/g, " ").trim();
      if (volByKw.has(k) && volByKw.get(k) != null) c.adsVolume = volByKw.get(k);
    }
    if (MARKETS[lang].reference) {
      const ref = await searchVolume(lang, forVolume, MARKETS[lang].reference, `${lang}-US`);
      const refByKw = new Map(ref.map((v) => [v.keyword, v.search_volume]));
      for (const c of candidates) {
        const k = c.keyword.replace(/[^\p{L}\p{N}\s]/gu, " ").replace(/\s+/g, " ").trim();
        if (refByKw.has(k)) c.usVolume = refByKw.get(k);
      }
    }

    const serps = [];
    const planned = plan && plan[lang] ? plan[lang] : [];
    if (!planned.length) console.log(`  (phase 2 skipped for ${lang}: no queries in research/dataforseo/serp-plan.json)`);
    for (const kw of planned) {
      try {
        const s = await serp(lang, kw);
        if (s) serps.push(s);
      } catch (e) {
        if (String(e.message).startsWith("Budget cap")) throw e;
        console.warn(`  ! serp failed for "${kw}": ${e.message}`);
      }
    }

    report.languages[lang] = {
      market: MARKETS[lang],
      seeds: SEEDS[lang],
      candidates,
      serps,
      aiOverviewShare: serps.length ? `${serps.filter((s) => s.aiOverview).length} of ${serps.length}` : null,
    };

    if (!DRY_RUN) {
      const csv = ["keyword,labs_volume,ads_volume,us_volume,difficulty,intent,source"]
        .concat(candidates.map((c) => `"${c.keyword.replace(/"/g, '""')}",${c.volume ?? ""},${c.adsVolume ?? ""},${c.usVolume ?? ""},${c.difficulty ?? ""},${c.intent ?? ""},${c.source}`))
        .join("\n");
      fs.writeFileSync(path.join(OUT, `keywords-${lang}.csv`), csv, "utf8");
    }
  }

  if (DRY_RUN) {
    console.log(`\nDry run finished — no paid calls were made. Uncached calls would cost about $${plannedEstimate.toFixed(2)} (cap $${BUDGET_USD}).`);
    if (money && Number(money.balance) < plannedEstimate) console.log("! balance is below the estimate");
    return;
  }

  report.spend = { thisRun: Number(spent.toFixed(4)), cachedResearch: Number(cachedCost.toFixed(4)), total: Number((spent + cachedCost).toFixed(4)), ledger };
  fs.writeFileSync(path.join(OUT, "report.json"), JSON.stringify(report, null, 1), "utf8");
  console.log(`\nWritten: ${path.relative(ROOT, OUT)}/report.json, keywords-*.csv`);
  console.log(`Paid by this run: $${spent.toFixed(4)} · cached research cost: $${cachedCost.toFixed(4)} · total: $${(spent + cachedCost).toFixed(4)}`);
}

main().catch((e) => {
  console.error(`\n${e.message}`);
  if (spent > 0) console.error(`Spent before stopping: $${spent.toFixed(4)}`);
  process.exit(1);
});
