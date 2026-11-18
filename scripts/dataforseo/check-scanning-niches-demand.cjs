// scripts/dataforseo/check-scanning-niches-demand.cjs
//
// Замер под партию посадочных страниц для технических B2B-ниш, выросшую из
// кейса ScanM2 (3D-лазерное сканирование и BIM, EN/PL/DE, 29x органики).
//
// Меряем ОБА интента по каждой нише:
//   · продвижение  — ищут исполнителя по SEO для своей отрасли;
//   · сайт         — ищут того, кто сделает сайт;
//   · услуга       — ищут саму услугу; это не наш клиент, но показывает,
//                    есть ли в нише кого приводить, и даёт слова для текста.
//
// Контроль: в каждом языке коммерческие головные фразы. Нули по ним означают,
// что вызов не прошёл, а не что спроса нет.
//
//   node scripts/dataforseo/check-scanning-niches-demand.cjs --dry-run
//   node scripts/dataforseo/check-scanning-niches-demand.cjs --budget 0.6
//
// Вывод: research/dataforseo/scanning-niches.json и .md

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
    "3d сканирование · продвижение": ["seo for 3d scanning companies", "3d laser scanning seo", "marketing for 3d scanning companies", "how to get clients for 3d scanning"],
    "3d сканирование · сайт": ["website for 3d scanning company", "web design for 3d scanning company", "3d scanning company website"],
    "3d сканирование · услуга": ["3d laser scanning services", "laser scanning services", "3d scanning company", "point cloud services", "scan to bim"],

    "bim · продвижение": ["seo for bim companies", "bim services seo", "marketing for bim companies"],
    "bim · сайт": ["website for bim company", "bim company website design"],
    "bim · услуга": ["bim modeling services", "bim services", "scan to bim services", "revit modeling services"],

    "геодезия · продвижение": ["seo for land surveyors", "land surveyor seo", "marketing for land surveyors", "how to get surveying clients"],
    "геодезия · сайт": ["website design for land surveyors", "land surveyor website", "surveying company website"],
    "геодезия · услуга": ["land surveying services", "topographic survey", "as built survey"],

    "дроны · продвижение": ["seo for drone companies", "drone business marketing", "how to get drone clients"],
    "дроны · сайт": ["drone company website", "website for drone business"],
    "дроны · услуга": ["drone survey services", "aerial survey services", "drone mapping services", "drone inspection services"],

    "cad и обмеры · продвижение": ["seo for cad companies", "marketing for drafting services"],
    "cad и обмеры · сайт": ["cad company website", "website for drafting company"],
    "cad и обмеры · услуга": ["cad drafting services", "as built drawings services", "reverse engineering services", "floor plan drafting services"],

    "инженерные бюро · продвижение": ["seo for engineering firms", "engineering firm marketing", "seo for engineers", "marketing for structural engineers"],
    "инженерные бюро · сайт": ["engineering firm website design", "website for engineering company", "engineering company website"],
    "инженерные бюро · услуга": ["structural engineering services", "mep engineering services", "civil engineering services"],

    "инспекция и ndt · продвижение": ["seo for inspection companies", "marketing for inspection companies", "ndt company marketing"],
    "инспекция и ndt · сайт": ["inspection company website", "website for inspection company"],
    "инспекция и ndt · услуга": ["ndt services", "non destructive testing services", "industrial inspection services", "building inspection services"],

    "3d печать · продвижение": ["seo for 3d printing companies", "3d printing business marketing", "how to get 3d printing clients"],
    "3d печать · сайт": ["3d printing company website", "website for 3d printing business"],
    "3d печать · услуга": ["3d printing services", "rapid prototyping services", "3d printing service near me"],

    "метрология · продвижение": ["seo for metrology companies", "marketing for calibration services"],
    "метрология · сайт": ["metrology company website", "calibration company website"],
    "метрология · услуга": ["metrology services", "dimensional inspection services", "calibration services"],

    "контроль (коммерческие)": ["seo services", "seo agency", "website design", "b2b seo services"],
  },

  pl: {
    "skanowanie 3d · pozycjonowanie": ["pozycjonowanie firmy technicznej", "seo dla firm technicznych", "marketing firmy skanowanie 3d"],
    "skanowanie 3d · strona": ["strona internetowa dla firmy technicznej", "tworzenie stron dla firm budowlanych"],
    "skanowanie 3d · usługa": ["skanowanie laserowe 3d", "skanowanie 3d budynków", "inwentaryzacja skanowanie 3d", "chmura punktów"],

    "bim · pozycjonowanie": ["pozycjonowanie bim", "marketing bim"],
    "bim · strona": ["strona internetowa dla firmy bim"],
    "bim · usługa": ["modelowanie bim", "usługi bim", "scan to bim", "modelowanie revit"],

    "geodezja · pozycjonowanie": ["pozycjonowanie dla geodety", "seo dla geodety", "marketing dla geodety", "jak zdobyć klientów geodeta"],
    "geodezja · strona": ["strona internetowa dla geodety", "tworzenie stron dla geodetów", "strona dla firmy geodezyjnej"],
    "geodezja · usługa": ["usługi geodezyjne", "geodeta", "pomiary geodezyjne", "inwentaryzacja powykonawcza"],

    "drony · pozycjonowanie": ["pozycjonowanie firmy dronowej", "marketing usług dronowych"],
    "drony · strona": ["strona dla firmy dronowej"],
    "drony · usługa": ["usługi dronem", "pomiary dronem", "fotogrametria z drona", "inspekcje dronem"],

    "cad i inwentaryzacje · pozycjonowanie": ["pozycjonowanie biura projektowego"],
    "cad i inwentaryzacje · strona": ["strona internetowa dla biura projektowego"],
    "cad i inwentaryzacje · usługa": ["inwentaryzacja budynku", "rysunki powykonawcze", "usługi cad", "projekty wykonawcze"],

    "biura inżynierskie · pozycjonowanie": ["pozycjonowanie dla firm inżynieryjnych", "seo dla inżynierów"],
    "biura inżynierskie · strona": ["strona internetowa dla firmy inżynieryjnej"],
    "biura inżynierskie · usługa": ["usługi inżynierskie", "projektowanie konstrukcji", "biuro projektowe"],

    "inspekcje i ndt · pozycjonowanie": ["pozycjonowanie firmy inspekcyjnej"],
    "inspekcje i ndt · strona": ["strona dla firmy inspekcyjnej"],
    "inspekcje i ndt · usługa": ["badania nieniszczące", "inspekcje przemysłowe", "przeglądy techniczne budynków"],

    "druk 3d · pozycjonowanie": ["pozycjonowanie druk 3d", "marketing druk 3d"],
    "druk 3d · strona": ["strona dla firmy druk 3d"],
    "druk 3d · usługa": ["druk 3d usługi", "wydruki 3d na zamówienie", "prototypowanie 3d"],

    "metrologia · usługa": ["usługi metrologiczne", "wzorcowanie przyrządów", "pomiary współrzędnościowe"],

    "kontrola (komercyjne)": ["pozycjonowanie stron", "tworzenie stron internetowych", "audyt seo"],
  },

  ru: {
    "3d сканирование · продвижение": ["продвижение сайта 3d сканирование", "seo для технических компаний"],
    "3d сканирование · сайт": ["сайт для компании 3d сканирования", "создание сайта для технической компании"],
    "3d сканирование · услуга": ["лазерное сканирование зданий", "3d сканирование услуги", "облако точек", "обмерные работы"],

    "bim · продвижение": ["продвижение bim"],
    "bim · сайт": ["сайт для bim компании"],
    "bim · услуга": ["bim моделирование", "услуги bim", "проектирование в revit"],

    "геодезия · продвижение": ["продвижение сайта геодезия", "seo для геодезической компании"],
    "геодезия · сайт": ["сайт для геодезической компании", "создание сайта геодезия"],
    "геодезия · услуга": ["геодезические услуги", "геодезическая съемка", "исполнительная съемка"],

    "дроны · продвижение": ["продвижение услуг аэросъемки"],
    "дроны · сайт": ["сайт для компании аэросъемки"],
    "дроны · услуга": ["аэросъемка услуги", "съемка с дрона", "фотограмметрия с дрона"],

    "cad и обмеры · услуга": ["услуги cad", "обмерный план", "исполнительная документация"],

    "инженерные бюро · продвижение": ["продвижение проектной организации"],
    "инженерные бюро · сайт": ["сайт для проектного бюро"],
    "инженерные бюро · услуга": ["проектное бюро", "инженерные изыскания", "проектирование конструкций"],

    "инспекция · услуга": ["техническое обследование зданий", "неразрушающий контроль", "промышленная инспекция"],

    "3d печать · продвижение": ["продвижение 3d печати"],
    "3d печать · сайт": ["сайт для 3d печати"],
    "3d печать · услуга": ["3d печать на заказ", "услуги 3d печати", "прототипирование"],

    "контроль (коммерческие)": ["seo продвижение", "создание сайта", "seo аудит"],
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
    "# Спрос по техническим нишам вокруг кейса ScanM2",
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
  fs.writeFileSync(path.join(OUT, "scanning-niches.json"), JSON.stringify(report, null, 1));
  fs.writeFileSync(path.join(OUT, "scanning-niches.md"), lines.join("\n"));
  console.log(`\nWritten: research/dataforseo/scanning-niches.{json,md} · paid $${spent.toFixed(4)} · cached $${cachedCost.toFixed(4)}`);
}

main().catch((e) => { console.error("\n" + (e.response ? JSON.stringify(e.response.data).slice(0, 400) : e.message)); process.exit(1); });
