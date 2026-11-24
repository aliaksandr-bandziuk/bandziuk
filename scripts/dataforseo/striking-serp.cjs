// scripts/dataforseo/striking-serp.cjs
//
// Отбор запросов, которые реально довести до топ-5. Берём те, где сайт уже
// стоит на 11–20 позиции (research/search-console/striking-distance.csv), и
// по каждому смотрим живую выдачу: кто в топ-10, сколько там каталогов и
// насколько сильны домены конкурентов по числу ссылающихся доменов.
//
// Смысл отбора: на позицию 11–20 влияет текст страницы, а вот пробиться в
// топ-5 можно только там, где выдача слабая. Запрос, у которого в топ-10
// стоят clutch, designrush и агентства с тысячами доноров, мы не возьмём
// никаким текстом — у сайта 74 ссылающихся домена.
//
//   node scripts/dataforseo/striking-serp.cjs --dry-run
//   node scripts/dataforseo/striking-serp.cjs --limit 85 --budget 1
//   node scripts/dataforseo/striking-serp.cjs --ru-markets ua,pl,il,lv
//   node scripts/dataforseo/striking-serp.cjs --ru-markets all --budget 4
//
// Вывод: research/dataforseo/striking-serp.{csv,md}

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const axios = require("axios");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env.local"), quiet: true });

const ROOT = path.resolve(__dirname, "../..");
const OUT = path.join(ROOT, "research", "dataforseo");
const RAW = path.join(OUT, "raw");
const OUR = "bandziuk.com";

const LOGIN = process.env.DATAFORSEO_API_LOGIN;
const PASSWORD = process.env.DATAFORSEO_API_PASSWORD;
const DRY_RUN = process.argv.includes("--dry-run");
const CACHE_ONLY = process.argv.includes("--cache-only");
const argVal = (f, d) => { const i = process.argv.indexOf(f); return i > -1 ? process.argv[i + 1] : d; };
const BUDGET_USD = Number(argVal("--budget", 1.5));
const LIMIT = Number(argVal("--limit", 85));

// Рынок по языку запроса. Search Console страну запроса в выгрузке не даёт,
// поэтому для русского мы раньше брали одну страну — Казахстан. Это оказалось
// неверно: 22.11.2026 у юридического запроса 458 показов из 535 пришли с
// Украины, то есть выдачу мы проверяли не там, где спрос. Теперь русские
// запросы прогоняются по списку стран с большой русскоязычной аудиторией, и в
// отчёт попадает по строке на страну — видно, где выдача слабая, а где занята.
//
// location_code страны у DataForSEO = 2000 + числовой код страны по ISO 3166-1
// (Польша 616 -> 2616, Украина 804 -> 2804), поэтому коды ниже сверяются по
// справочнику ISO, без обращения к API.
const RU_MARKETS = {
  ua: { location_code: 2804, label: "RU/UA" },
  pl: { location_code: 2616, label: "RU/PL" },
  de: { location_code: 2276, label: "RU/DE" },
  cy: { location_code: 2196, label: "RU/CY" },
  il: { location_code: 2376, label: "RU/IL" },
  kz: { location_code: 2398, label: "RU/KZ" },
  lv: { location_code: 2428, label: "RU/LV" },
  lt: { location_code: 2440, label: "RU/LT" },
  ee: { location_code: 2233, label: "RU/EE" },
  md: { location_code: 2498, label: "RU/MD" },
  ge: { location_code: 2268, label: "RU/GE" },
  am: { location_code: 2051, label: "RU/AM" },
  cz: { location_code: 2203, label: "RU/CZ" },
  es: { location_code: 2724, label: "RU/ES" },
  ae: { location_code: 2784, label: "RU/AE" },
  uz: { location_code: 2860, label: "RU/UZ" },
};

// По умолчанию четыре страны, а не все шестнадцать: каждая добавленная страна
// умножает число запросов к выдаче, а бюджет скрипта — полтора доллара.
// Украина даёт основной объём показов, Польша и Кипр — рынки, где мы реально
// продаём, Германия — крупнейшая русскоязычная диаспора в ЕС.
// Другой список: --ru-markets ua,pl,il,lv   или   --ru-markets all
const RU_DEFAULT = ["ua", "pl", "cy", "de"];
const ruSelected = (() => {
  const raw = String(argVal("--ru-markets", RU_DEFAULT.join(","))).toLowerCase();
  const keys = raw === "all" ? Object.keys(RU_MARKETS) : raw.split(/[,\s]+/).filter(Boolean);
  const unknown = keys.filter((k) => !RU_MARKETS[k]);
  if (unknown.length) throw new Error(`Неизвестные страны в --ru-markets: ${unknown.join(", ")}. Доступны: ${Object.keys(RU_MARKETS).join(", ")}`);
  return keys.length ? keys : RU_DEFAULT;
})();

const MARKET = {
  en: [{ location_code: 2840, language_code: "en", label: "EN/US" }],
  pl: [{ location_code: 2616, language_code: "pl", label: "PL/PL" }],
  ru: ruSelected.map((k) => ({ ...RU_MARKETS[k], language_code: "ru" })),
};

const AGGREGATOR = /^(www\.)?(clutch\.co|designrush\.com|themanifest\.com|sortlist\.com|semrush\.com|agencies\.semrush\.com|upwork\.com|fiverr\.com|freelancer\.com|yelp\.com|builtin\.com|goodfirms\.co|trustpilot\.com|oferteo\.pl|fixly\.pl|olx\.|kaspi\.kz|profi\.kz|ratingruneta\.ru|yandex\.|google\.|youtube\.com|facebook\.com|linkedin\.com|instagram\.com|reddit\.com|quora\.com|medium\.com|wikipedia\.org|hh\.|rabota\.|indeed\.)/i;

// DataForSEO отдаёт часть выдачи замаскированной: domain равен google.com, а
// url выглядит как google.com/goto?url=… Настоящий хост виден в breadcrumb —
// тот же приём, что в identify() в pseo-intent.cjs (разбор в
// claude/dataforseo-goto-urls.md). Без этого весь топ-10 читается как
// «google.com» и любой отбор выдачи бессмыслен (ошибка найдена 22.11.2026).
function hostOf(item) {
  const u = String(item.url || "");
  const d = String(item.domain || "").toLowerCase().replace(/^www\./, "");
  const wrapped = /^(www\.)?google\./i.test(d) || /google\.[a-z.]+\/goto/i.test(u);
  if (!wrapped && d) return d;
  const m = String(item.breadcrumb || "").match(/^https?:\/\/([^\s\u203a/]+)/i);
  if (m) return m[1].toLowerCase().replace(/^www\./, "");
  // website_name — это имя сайта, а не домен («Kancelaria Herbert Kawecki»).
  // Если в список целей попадёт строка с пробелом, DataForSEO отклоняет весь
  // запрос целиком: 40501 Invalid Field: 'targets' (проверено 22.11.2026).
  const wn = String(item.website_name || "").trim().toLowerCase();
  return isDomain(wn) ? wn : "";
}
const isDomain = (h) => /^[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9-]+)*\.[a-z]{2,}$/i.test(String(h || ""));

const ESTIMATE = { "serp/google/organic/live/advanced": 0.0025, "backlinks/bulk_referring_domains/live": 0.03 };
let spent = 0, cachedCost = 0, planned = 0;

const cacheKey = (e, p) => path.join(RAW, `${e.replace(/[^a-z0-9]+/gi, "_")}__${crypto.createHash("sha1").update(e + JSON.stringify(p)).digest("hex").slice(0, 16)}.json`);

async function call(endpoint, payload, label) {
  const file = cacheKey(endpoint, payload);
  if (fs.existsSync(file)) {
    const cached = JSON.parse(fs.readFileSync(file, "utf8"));
    cachedCost += Number(cached.cost || 0);
    return cached;
  }
  const estimate = ESTIMATE[endpoint] ?? 0.05;
  if (DRY_RUN) { planned += estimate; return null; }
  if (CACHE_ONLY) return null;
  if (spent + estimate > BUDGET_USD) throw new Error(`Лимит бюджета: потрачено $${spent.toFixed(4)} из $${BUDGET_USD}`);
  const res = await axios.post(`https://api.dataforseo.com/v3/${endpoint}`, [payload], { auth: { username: LOGIN, password: PASSWORD }, timeout: 180000 });
  const body = res.data;
  spent += Number(body.cost || 0);
  const task = body.tasks && body.tasks[0];
  if (body.status_code !== 20000 || (task && task.status_code !== 20000)) {
    console.warn(`  ! ${label}: ${task ? task.status_code + " " + task.status_message : body.status_message}`);
  } else {
    fs.mkdirSync(RAW, { recursive: true });
    fs.writeFileSync(file, JSON.stringify(body, null, 1));
  }
  return body;
}
const result0 = (b) => (b && b.tasks && b.tasks[0] && b.tasks[0].result && b.tasks[0].result[0]) || null;

function queries() {
  const file = path.join(OUT, "striking-distance.csv");
  if (!fs.existsSync(file)) throw new Error("Нет research/dataforseo/striking-distance.csv — сначала node scripts/dataforseo/longtail-inventory.cjs");
  const rows = fs.readFileSync(file, "utf8").split(/\r?\n/).slice(1).filter(Boolean);
  const out = [];
  for (const line of rows) {
    const m = line.match(/^("([^"]*)"|[^,]*),([a-z]*),([^,]*),([^,]*),([^,]*),/);
    if (!m) continue;
    const keyword = (m[2] ?? m[1] ?? "").trim();
    const lang = m[3], impressions = Number(m[4] || 0), position = Number(m[6] || 0);
    if (!keyword || !MARKET[lang]) continue;
    if (position < 11 || position > 20) continue;
    out.push({ keyword, lang, impressions, position });
  }
  out.sort((a, b) => b.impressions - a.impressions);
  return out.slice(0, LIMIT);
}

async function main() {
  if (!DRY_RUN && !CACHE_ONLY && (!LOGIN || !PASSWORD)) throw new Error("Нет доступов DATAFORSEO в .env.local");
  const list = queries();
  console.log(`запросов на позициях 11–20: ${list.length}`);
  const calls = list.reduce((n, q) => n + MARKET[q.lang].length, 0);
  console.log(`рынки для русских запросов: ${MARKET.ru.map((m) => m.label).join(", ")}`);
  console.log(`вызовов выдачи: ${calls}`);

  const rows = [];
  const domains = new Set();
  for (const q of list) {
    // Русский запрос проверяется в нескольких странах сразу — показы у него
    // собраны со всех, и одной выдачей они не описываются.
    for (const m of MARKET[q.lang]) {
      const body = await call("serp/google/organic/live/advanced", {
        keyword: q.keyword, location_code: m.location_code, language_code: m.language_code, depth: 100, device: "desktop",
      }, `${m.label} · ${q.keyword}`);
      const res = result0(body);
      const items = ((res && res.items) || []).filter((it) => it.type === "organic");
      const hosts = items.map(hostOf);
      const top10 = hosts.slice(0, 10).filter(Boolean);
      const ours = hosts.findIndex((h) => h.includes(OUR));
      top10.forEach((d) => { if (isDomain(d)) domains.add(d); });
      rows.push({
        market: m.label, keyword: q.keyword, impressions: q.impressions,
        gscPosition: q.position, livePosition: ours > -1 ? ours + 1 : "",
        aggregators: top10.filter((d) => AGGREGATOR.test(d)).length,
        top10: top10.join(" "),
        // Пустая выдача — это не «слабая выдача», а несостоявшийся вызов:
        // не каждая пара «страна + язык» есть у DataForSEO. Помечаем, чтобы
        // такая строка не попала в «берём».
        empty: top10.length === 0,
      });
      console.log(`  ${m.label} ${String(q.impressions).padStart(4)} поз${String(q.position).padStart(5)}  ${q.keyword}${top10.length ? "" : "  (выдача не получена)"}`);
    }
  }

  // Сила доменов из топ-10: одним вызовом на каждую сотню.
  const strength = {};
  const all = [...domains];
  for (let i = 0; i < all.length; i += 100) {
    const batch = all.slice(i, i + 100);
    const body = await call("backlinks/bulk_referring_domains/live", { targets: batch }, `сила доменов ${i + 1}–${i + batch.length}`);
    const res = result0(body);
    for (const it of (res && res.items) || []) strength[(it.target || "").replace(/^www\./, "")] = it.referring_main_domains ?? it.referring_domains ?? null;
  }

  for (const r of rows) {
    const vals = r.top10.split(" ").map((d) => strength[d]).filter((v) => typeof v === "number").sort((a, b) => a - b);
    r.medianStrength = vals.length ? vals[Math.floor(vals.length / 2)] : "";
    r.weakInTop10 = vals.filter((v) => v <= 200).length;
    // Берём, если выдача слабая: мало каталогов и есть домены нашего калибра.
    r.verdict = r.empty ? "выдача не получена" : r.aggregators <= 2 && r.weakInTop10 >= 3 ? "берём" : r.aggregators >= 4 ? "выдача занята каталогами" : "домены сильнее нас";
  }
  rows.sort((a, b) => (a.verdict === "берём" ? -1 : 1) - (b.verdict === "берём" ? -1 : 1) || b.impressions - a.impressions);

  if (DRY_RUN) { console.log(`\nпробный прогон: вызовов на ~$${planned.toFixed(3)}, лимит $${BUDGET_USD}`); return; }

  const head = ["market", "keyword", "impressions", "gscPosition", "livePosition", "aggregators", "weakInTop10", "medianStrength", "verdict", "top10"];
  fs.writeFileSync(path.join(OUT, "striking-serp.csv"),
    [head.join(","), ...rows.map((r) => head.map((h) => {
      const v = r[h]; return v == null ? "" : /[",\n]/.test(String(v)) ? `"${String(v).replace(/"/g, '""')}"` : String(v);
    }).join(","))].join("\n"));

  const take = rows.filter((r) => r.verdict === "берём");
  const L = ["# Запросы на 11–20 позиции: какие можно довести до топ-5", "",
    `Собрано ${new Date().toISOString().slice(0, 10)}. Запросов разобрано ${rows.length}, пригодных ${take.length}.`, "",
    `«Берём» означает: в топ-10 не больше двух каталогов и минимум три домена с числом ссылающихся доменов до 200 — то есть нашего калибра (у нас 74).`, "",
    "| Запрос | Рынок | Показы | Поз. GSC | Поз. сейчас | Каталогов в топ-10 | Слабых в топ-10 | Медиана доноров |", "|---|---|---|---|---|---|---|---|"];
  for (const r of take) L.push(`| ${r.keyword} | ${r.market} | ${r.impressions} | ${r.gscPosition} | ${r.livePosition || "—"} | ${r.aggregators} | ${r.weakInTop10} | ${r.medianStrength} |`);
  fs.writeFileSync(path.join(OUT, "striking-serp.md"), L.join("\n") + "\n");
  console.log(`\nготово: research/dataforseo/striking-serp.{csv,md}`);
  console.log(`пригодных запросов ${take.length} из ${rows.length}, потрачено $${spent.toFixed(4)} (из кеша на $${cachedCost.toFixed(4)})`);
}
main().catch((e) => { console.error("\n" + (e.response ? JSON.stringify(e.response.data).slice(0, 400) : e.message)); process.exit(1); });
