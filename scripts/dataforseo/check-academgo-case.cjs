// scripts/dataforseo/check-academgo-case.cjs
//
// AcademGo case page. The case is about promoting a site in search: semantics
// per market, a new page structure, schema, speed, and the organic traffic and
// leads that followed. So the seeds are the broad promotion vocabulary a buyer
// uses — "продвижение сайта", "pozycjonowanie stron", "seo services" — plus the
// proof layer a case page can actually own ("кейс", "результаты", "case study"),
// plus the education vertical nobody on bandziuk.com covers yet.
//
// What the head terms are NOT for: the service pages already hold them
// (SEO-оптимизация и стратегия, Международное SEO, AI SEO и GEO, локальное SEO,
// pozycjonowanie na rynek …, SEO for … ). The case has to take the case-shaped
// queries, not compete with its own service pages.
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
//   phase 2 — live SERP (only when research/dataforseo-academgo/serp-plan.json exists):
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
//   — every response is cached under research/dataforseo-academgo/raw/, so a re-run
//     costs nothing for calls already made; the report shows both what this run
//     paid and what the cached research cost in total
//   — --dry-run shows the balance (free endpoint), the planned calls and an
//     estimate, and pays for nothing
//
// Credentials come from .env.local (DATAFORSEO_API_LOGIN / _PASSWORD) and are
// never printed.
//
// Usage:
//   node scripts/dataforseo/check-academgo-case.cjs --dry-run
//   node scripts/dataforseo/check-academgo-case.cjs --budget 2
//   (write research/dataforseo-academgo/serp-plan.json, then run again for phase 2)

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const axios = require("axios");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env.local"), quiet: true });

const ROOT = path.resolve(__dirname, "../..");
const OUT = path.join(ROOT, "research", "dataforseo-academgo");
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
    service: ["seo services", "search engine optimization services", "website promotion", "seo agency", "international seo"],
    case: ["seo case study", "seo results case study", "organic traffic growth case study", "seo for education", "education marketing agency", "seo for multiple countries", "website relaunch seo"],
  },
  pl: {
    service: ["pozycjonowanie stron internetowych", "agencja seo", "promocja strony w google", "optymalizacja seo", "pozycjonowanie miedzynarodowe"],
    case: ["case study pozycjonowania", "efekty pozycjonowania", "wzrost ruchu organicznego", "pozycjonowanie strony edukacyjnej", "pozycjonowanie na kilka krajow", "pozycjonowanie po przebudowie strony"],
  },
  ru: {
    service: ["продвижение сайта", "раскрутка сайта", "seo продвижение сайта", "продвижение сайта в google", "международное продвижение сайта"],
    case: ["кейс продвижения сайта", "результаты продвижения сайта", "рост органического трафика", "продвижение образовательного сайта", "продвижение сайта в нескольких странах", "продвижение сайта после редизайна"],
  },
};

// Phrase-match suggestions are pulled for these case seeds only (one call each).
const SUGGEST = {
  en: ["seo case study", "seo services", "seo for education"],
  pl: ["pozycjonowanie stron", "case study pozycjonowania"],
  ru: ["продвижение сайта", "кейс продвижения сайта"],
};

// Hand-picked phrasings checked in Google Ads directly. Keyword ideas drift
// towards whatever the seed word is most searched for ("how to cite a
// website", navigational "<brand> сайт"), and on the Polish and Russian markets
// they barely reached the case topic, so the phrasings a case page could answer
// are checked by name.
const CURATED = {
  en: ["seo case study", "seo case studies", "seo results case study", "organic traffic case study", "organic traffic growth", "how to increase organic traffic", "seo before and after", "seo success story", "website traffic growth case study", "lead generation seo case study", "seo services", "seo services for small business", "seo agency", "seo company", "website promotion", "promote website on google", "search engine optimization services", "international seo", "international seo services", "seo for multiple countries", "multi country seo", "seo for education", "seo for education sector", "education marketing agency", "seo for universities", "student recruitment marketing", "website relaunch seo", "site migration seo", "seo after redesign", "how long does seo take to work"],
  pl: ["case study pozycjonowania", "case study seo", "efekty pozycjonowania", "efekty pozycjonowania po ilu miesiacach", "wzrost ruchu organicznego", "jak zwiekszyc ruch na stronie", "pozycjonowanie stron internetowych", "pozycjonowanie stron", "agencja seo", "firma seo", "promocja strony internetowej", "reklama strony w google", "optymalizacja strony pod seo", "pozycjonowanie miedzynarodowe", "pozycjonowanie zagraniczne", "pozycjonowanie na kilka krajow", "pozycjonowanie strony edukacyjnej", "marketing edukacyjny", "pozycjonowanie szkoly jezykowej", "pozycjonowanie po przebudowie strony", "migracja strony a seo", "ile trwa pozycjonowanie"],
  ru: ["кейс продвижения сайта", "кейсы seo продвижения", "кейс seo", "результаты продвижения сайта", "рост органического трафика", "как увеличить трафик на сайт", "продвижение сайта", "раскрутка сайта", "seo продвижение сайта", "продвижение сайта в google", "сколько стоит продвижение сайта", "seo агентство", "seo специалист", "продвижение сайта за рубежом", "международное продвижение сайта", "продвижение сайта в нескольких странах", "продвижение многоязычного сайта", "продвижение образовательного сайта", "продвижение образовательного агентства", "продвижение сайта обучения за рубежом", "продвижение сайта после редизайна", "перенос сайта и seo", "через сколько работает seo", "seo для образовательных услуг"],
};

// Second batch, added after the SERPs showed that "strona dla konsultanta"
// means a medical national consultant and "сайт для консультанта" means a chat
// widget: the "expert" / "specialist" / "consulting" phrasings are checked here.
const CURATED_EXTRA = {
  en: ["seo portfolio", "seo examples", "seo work examples", "proven seo results", "traffic increase after seo", "seo growth case", "education agency marketing", "study abroad marketing", "ai search visibility", "seo and ai search case study"],
  pl: ["portfolio seo", "przyklady pozycjonowania", "realizacje seo", "skuteczne pozycjonowanie", "wzrost pozycji w google", "marketing agencji edukacyjnej", "studia za granica marketing", "widocznosc w ai", "pozycjonowanie a chatgpt"],
  ru: ["портфолио seo", "примеры продвижения сайтов", "успешные кейсы seo", "рост позиций в google", "увеличение заявок с сайта", "маркетинг образовательного агентства", "продвижение обучения за рубежом", "видимость в ии-ответах", "seo и ии поиск кейс"],
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
    if (!planned.length) console.log(`  (phase 2 skipped for ${lang}: no queries in research/dataforseo-academgo/serp-plan.json)`);
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
