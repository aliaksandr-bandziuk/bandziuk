// scripts/dataforseo/check-translation-demand.cjs
//
// Step 6 of the pSEO plan: which EN-only pages deserve a PL and/or RU version.
//
// 49 fixture groups have an EN page and no PL and/or RU one (live check
// 29.10.2026). Translating all of them blind would be wrong twice over: half
// are American trades (HVAC, roofing, plumbing) that may have no demand here,
// and several are already covered by a sibling group in PL/RU, where a second
// page would only split the same demand.
//
// So the groups already covered are dropped here (see SKIP below), and for the
// rest this script measures the demand of the phrasings a PL or RU page would
// target. Nothing else: no SERP calls until the volumes say a page is worth it.
//
// Markets, same convention as check-niche-website-demand.cjs:
//   pl → Poland, Polish
//   ru → Poland, Russian + Kazakhstan, Russian (Labs has no Poland+Russian pair)
// Controls: phrases of pages that already exist and rank, so a row of zeroes
// can be read as "no demand" and not as "the call went wrong".
//
// One Google Ads call per market (three in total), a few cents. Every call is
// cached in research/dataforseo/raw/, a rerun costs nothing.
//
//   node scripts/dataforseo/check-translation-demand.cjs --dry-run
//   node scripts/dataforseo/check-translation-demand.cjs --budget 0.5
//
// Output: research/dataforseo/translation-demand.json and .md

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
const bi = process.argv.indexOf("--budget");
const BUDGET_USD = bi > -1 ? Number(process.argv[bi + 1]) : 0.5;

const MARKETS = {
  pl: [{ label: "PL", location_code: 2616, language_code: "pl" }],
  ru: [
    { label: "PL", location_code: 2616, language_code: "ru" },
    { label: "KZ", location_code: 2398, language_code: "ru" },
  ],
};

// Groups left out on purpose: a PL/RU page for the same demand already exists.
const SKIP = {
  "cafe-website-design": "cafe-website (PL/RU)",
  "law-firm-website-design": "lawyer-website-development (PL/RU)",
  "construction-website-design": "construction-company-website (PL/RU)",
  "contractor-website-design": "construction-company-website (PL/RU)",
  "website-for-contractors": "construction-company-website (PL/RU)",
  "seo-for-contractors": "construction-seo (PL/RU)",
  "local-seo-for-contractors": "construction-seo (PL/RU)",
  "local-seo-for-lawyers": "seo-for-law-firms (PL/RU)",
  "local-seo-for-dentists": "dentist-seo (PL/RU)",
  "local-seo-for-small-business": "seo-services-for-small-business (PL/RU)",
  "hvac-websites": "same topic as hvac-website-design",
  "roofing-websites": "same topic as roofing-website-design",
  "website-for-plumbers": "same topic as plumbing-website-design",
  "website-for-electricians": "same topic as electrician-website-design",
  "lawn-care-website": "same topic as landscaping-website-design",
  "personal-injury-seo": "US-only market (contingency fees, state bar rules)",
};

// topic → { pl: [phrasings], ru: [phrasings] }. Only the languages the page is
// missing are measured. PL wording follows the owner's rule: «pozycjonowanie
// strony X», never «pozycjonowanie firmy X».
const TOPICS = {
  "architecture-website-design": {
    pl: ["strona internetowa dla architekta", "strona dla biura architektonicznego", "strona internetowa dla pracowni architektonicznej"],
    ru: ["сайт для архитектора", "сайт архитектурного бюро", "сайт для архитектурной студии"],
  },
  "seo-for-architects": { ru: ["продвижение сайта архитектора", "продвижение архитектурного бюро", "seo для архитектора"] },
  "b2b-website-design": {
    pl: ["strona internetowa dla firmy b2b", "strona dla firmy produkcyjnej b2b", "strona internetowa b2b"],
    ru: ["сайт для b2b компании", "корпоративный сайт b2b", "сайт b2b компании"],
  },
  "b2b-seo": { pl: ["pozycjonowanie strony b2b", "pozycjonowanie w b2b", "seo b2b"] },
  "it-company-website-design": {
    pl: ["strona internetowa dla firmy it", "strona dla software house", "strona internetowa dla firmy informatycznej"],
    ru: ["сайт для it компании", "сайт для айти компании", "сайт для разработчиков программного обеспечения"],
  },
  "seo-for-it-companies": {
    pl: ["pozycjonowanie strony firmy it", "pozycjonowanie dla software house", "seo dla firmy informatycznej"],
    ru: ["продвижение сайта it компании", "seo для it компании", "продвижение айти компании"],
  },
  "startup-website-design": {
    pl: ["strona internetowa dla startupu", "strona dla startupu", "landing page dla startupu"],
    ru: ["сайт для стартапа", "лендинг для стартапа", "создание сайта для стартапа"],
  },
  "seo-for-startups": {
    pl: ["pozycjonowanie strony startupu", "seo dla startupu", "pozycjonowanie startupu"],
    ru: ["продвижение сайта стартапа", "seo для стартапа", "продвижение стартапа"],
  },
  "manufacturing-website-design": {
    pl: ["strona internetowa dla firmy produkcyjnej", "strona dla producenta", "strona internetowa dla zakładu produkcyjnego"],
    ru: ["сайт для производителя", "сайт производственной компании", "сайт для завода"],
  },
  "hotel-website-design": {
    pl: ["strona internetowa dla hotelu", "strona dla hotelu", "strona internetowa hotelu"],
    ru: ["сайт для отеля", "сайт для гостиницы", "создание сайта для отеля"],
  },
  "vacation-rental-website-design": {
    pl: ["strona dla apartamentów na wynajem", "strona internetowa dla wynajmu krótkoterminowego", "strona dla domku letniskowego"],
    ru: ["сайт для посуточной аренды", "сайт для апартаментов", "сайт для аренды жилья"],
  },
  "dental-website-design": {
    pl: ["strona internetowa dla gabinetu stomatologicznego", "strona dla stomatologa", "strona internetowa dla dentysty"],
    ru: ["сайт для стоматологии", "сайт стоматологической клиники", "сайт для стоматолога"],
  },
  "seo-for-doctors": {
    pl: ["pozycjonowanie strony lekarza", "pozycjonowanie strony przychodni", "seo dla lekarza"],
    ru: ["продвижение сайта врача", "продвижение сайта поликлиники", "seo для врача"],
  },
  "healthcare-seo": {
    pl: ["pozycjonowanie strony placówki medycznej", "pozycjonowanie strony kliniki", "seo dla kliniki"],
    ru: ["продвижение медицинского сайта", "продвижение сайта медцентра", "seo для клиники"],
  },
  "medical-seo": { pl: ["pozycjonowanie strony medycznej", "pozycjonowanie strony gabinetu lekarskiego", "seo medyczne"] },
  "veterinary-website-design": {
    pl: ["strona internetowa dla weterynarza", "strona dla przychodni weterynaryjnej", "strona internetowa dla lecznicy dla zwierząt"],
    ru: ["сайт для ветеринарной клиники", "сайт для ветеринара", "сайт ветклиники"],
  },
  "veterinary-seo": { pl: ["pozycjonowanie strony weterynarza", "pozycjonowanie strony przychodni weterynaryjnej", "seo dla weterynarza"] },
  "nonprofit-seo": {
    pl: ["pozycjonowanie strony fundacji", "pozycjonowanie strony stowarzyszenia", "seo dla fundacji"],
    ru: ["продвижение сайта фонда", "продвижение сайта некоммерческой организации", "seo для фонда"],
  },
  "nonprofit-website-design": { ru: ["сайт для фонда", "сайт для некоммерческой организации", "сайт благотворительного фонда"] },
  "charity-website-design": {
    pl: ["strona dla organizacji charytatywnej", "strona internetowa dla zbiórki charytatywnej"],
    ru: ["сайт для благотворительного фонда", "сайт для благотворительной организации"],
  },
  "restaurant-website-design": { pl: ["strona internetowa dla restauracji", "strona dla restauracji", "projekt strony restauracji"] },
  // American trades: the block that most likely has no demand here. Measured
  // together so one verdict covers them.
  "plumbing-website-design": {
    pl: ["strona internetowa dla hydraulika", "strona dla hydraulika"],
    ru: ["сайт для сантехника", "сайт для сантехнических услуг"],
  },
  "seo-for-plumbers": { pl: ["pozycjonowanie strony hydraulika", "seo dla hydraulika"], ru: ["продвижение сайта сантехника", "seo для сантехника"] },
  "local-seo-for-plumbers": { pl: ["lokalne pozycjonowanie hydraulika"], ru: ["локальное продвижение сантехника"] },
  "electrician-website-design": {
    pl: ["strona internetowa dla elektryka", "strona dla elektryka"],
    ru: ["сайт для электрика", "сайт для электромонтажных услуг"],
  },
  "seo-for-electricians": { pl: ["pozycjonowanie strony elektryka", "seo dla elektryka"], ru: ["продвижение сайта электрика", "seo для электрика"] },
  "roofing-website-design": {
    pl: ["strona internetowa dla dekarza", "strona dla firmy dekarskiej"],
    ru: ["сайт для кровельной компании", "сайт для кровельщика"],
  },
  "roofing-seo": { pl: ["pozycjonowanie strony firmy dekarskiej", "seo dla dekarza"], ru: ["продвижение сайта кровельной компании", "seo для кровельщика"] },
  "hvac-website-design": {
    pl: ["strona internetowa dla firmy klimatyzacyjnej", "strona dla instalatora klimatyzacji"],
    ru: ["сайт для компании по кондиционерам", "сайт для монтажа кондиционеров"],
  },
  "hvac-seo": { pl: ["pozycjonowanie strony firmy klimatyzacyjnej", "seo dla klimatyzacji"], ru: ["продвижение сайта по кондиционерам", "seo для вентиляции и кондиционирования"] },
  "landscaping-website-design": {
    pl: ["strona internetowa dla firmy ogrodniczej", "strona dla architekta krajobrazu"],
    ru: ["сайт для ландшафтной компании", "сайт для ландшафтного дизайнера"],
  },
  "landscaping-seo": { pl: ["pozycjonowanie strony firmy ogrodniczej", "seo dla architekta krajobrazu"], ru: ["продвижение сайта ландшафтной компании", "seo для ландшафтного дизайна"] },
  "seo-for-painting-contractors": { pl: ["pozycjonowanie strony malarza", "seo dla firmy malarskiej"], ru: ["продвижение сайта маляра", "seo для малярных работ"] },
};

// Phrases of pages that exist and already have measured demand. If these come
// back empty, the call is broken, not the market.
const CONTROLS = {
  pl: ["pozycjonowanie stron internetowych", "strona internetowa dla firmy", "pozycjonowanie strony kancelarii prawnej", "strona internetowa dla fotografa"],
  ru: ["продвижение сайта", "создание сайта", "сайт для юриста", "продвижение сайта стоматологии"],
};

const ESTIMATE = { "keywords_data/google_ads/search_volume/live": 0.09 };
let spent = 0, cachedCost = 0, plannedEstimate = 0;

const assertBudget = (next = 0) => {
  if (spent + next > BUDGET_USD) throw new Error(`Budget cap reached: $${spent.toFixed(4)} of $${BUDGET_USD}.`);
};
const cacheKey = (endpoint, payload) =>
  path.join(RAW, `${endpoint.replace(/[^a-z0-9]+/gi, "_")}__${crypto.createHash("sha1").update(endpoint + JSON.stringify(payload)).digest("hex").slice(0, 16)}.json`);

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
  console.log(`topics: ${Object.keys(TOPICS).length} · skipped as already covered: ${Object.keys(SKIP).length}\n`);

  const report = { generatedAt: new Date().toISOString(), skipped: SKIP, languages: {} };
  for (const lang of ["pl", "ru"]) {
    const topicOf = {}, all = [];
    for (const [topic, langs] of Object.entries(TOPICS)) {
      for (const kw of langs[lang] || []) { topicOf[norm(kw)] = topic; all.push(kw); }
    }
    for (const kw of CONTROLS[lang]) { topicOf[norm(kw)] = "· контроль"; all.push(kw); }
    report.languages[lang] = { markets: {} };
    for (const m of MARKETS[lang]) {
      const body = await call(
        "keywords_data/google_ads/search_volume/live",
        { keywords: [...new Set(all.map(norm))], location_code: m.location_code, language_code: m.language_code },
        `${lang}/${m.label} · ${new Set(all.map(norm)).size} kw`,
      );
      report.languages[lang].markets[m.label] = items(body).map((r) => ({
        keyword: r.keyword, volume: r.search_volume, competition: r.competition_level, topic: topicOf[norm(r.keyword || "")] || "?",
      }));
    }
  }

  if (DRY_RUN) return console.log(`\nDry run: about $${plannedEstimate.toFixed(2)}.`);

  // report: one row per topic+language, volumes summed over phrasings, markets side by side
  const lines = ["# Спрос на переводы EN-страниц (PL/RU)", "", `Замер ${new Date().toISOString().slice(0, 10)}. Частоты сложены по формулировкам темы.`, ""];
  for (const lang of ["pl", "ru"]) {
    const marks = MARKETS[lang].map((m) => m.label);
    lines.push(`## ${lang.toUpperCase()}`, "", `| тема | ${marks.join(" | ")} | лучшая фраза |`, `|---|${marks.map(() => "---").join("|")}|---|`);
    const rows = {};
    for (const m of marks) {
      for (const r of report.languages[lang].markets[m] || []) {
        const t = (rows[r.topic] ||= { sum: {}, best: { v: -1, k: "" } });
        t.sum[m] = (t.sum[m] || 0) + (r.volume || 0);
        if ((r.volume || 0) > t.best.v) t.best = { v: r.volume || 0, k: r.keyword };
      }
    }
    for (const [topic, t] of Object.entries(rows).sort((a, b) => Math.max(...Object.values(b[1].sum), 0) - Math.max(...Object.values(a[1].sum), 0))) {
      lines.push(`| ${topic} | ${marks.map((m) => t.sum[m] ?? "—").join(" | ")} | ${t.best.k} (${t.best.v}) |`);
    }
    lines.push("");
  }
  lines.push("## Не измерялись — тема уже закрыта парой PL/RU", "", ...Object.entries(SKIP).map(([k, v]) => `- \`${k}\` → ${v}`));

  fs.mkdirSync(OUT, { recursive: true });
  fs.writeFileSync(path.join(OUT, "translation-demand.json"), JSON.stringify(report, null, 1));
  fs.writeFileSync(path.join(OUT, "translation-demand.md"), lines.join("\n"));
  console.log(`\nWritten: research/dataforseo/translation-demand.{json,md} · paid $${spent.toFixed(4)} · cached $${cachedCost.toFixed(4)}`);
  console.log(lines.join("\n"));
}

main().catch((e) => { console.error("\n" + (e.response ? JSON.stringify(e.response.data).slice(0, 400) : e.message)); process.exit(1); });
