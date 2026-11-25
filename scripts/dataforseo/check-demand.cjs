// scripts/dataforseo/check-demand.cjs
//
// Частотность произвольных фраз по произвольным рынкам. Общий инструмент
// вместо сорок пятого одноразового скрипта: в scripts/dataforseo уже лежат
// сорок четыре файла с захардкоженными списками, и каждый новый замер
// требовал ещё одного.
//
// Группы нужны, чтобы сравнивать не фразы, а ФОРМЫ запроса. Именно форма
// решает, кто стоит в выдаче: проверка 04.11.2026 показала, что «X web
// design» трижды подряд приводила галереи шаблонов (Dribbble, Behance,
// Figma, ThemeForest), а «seo for X» — руководства самих платформ. Поэтому
// у каждой фразы можно указать форму через «::», и в отчёте формы считаются
// отдельно.
//
// Рынок — пара «язык:страна». Код страны у DataForSEO = 2000 + числовой код
// ISO 3166-1 (Польша 616 -> 2616), поэтому коды ниже проверяются по
// справочнику ISO, без обращения к API.
//
// Один вызов на рынок, независимо от числа фраз, примерно $0.09 за вызов.
//
// Usage:
//   node scripts/dataforseo/check-demand.cjs --name hair-transplant \
//     --terms "seo::seo for hair transplant clinics|design::hair clinic website design" \
//     --markets en:us,en:gb --dry-run
//
//   node scripts/dataforseo/check-demand.cjs --name hair-transplant --file research/terms.txt --markets en:us
//
// Вывод: research/dataforseo/demand-<name>.{json,md}

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
const argv = process.argv.slice(2);
const DRY_RUN = argv.includes("--dry-run");
const argVal = (f, d) => { const i = argv.indexOf(f); return i > -1 ? argv[i + 1] : d; };
const BUDGET_USD = Number(argVal("--budget", 1));
const NAME = String(argVal("--name", "terms")).replace(/[^a-z0-9-]+/gi, "-").toLowerCase();

const COUNTRY = {
  us: 2840, gb: 2826, pl: 2616, de: 2276, cy: 2196, ua: 2804, nl: 2528, ch: 2756,
  fr: 2250, it: 2380, es: 2724, il: 2376, kz: 2398, ae: 2784, tr: 2792, ca: 2124, au: 2036,
};

// Фразы: «форма::фраза» или просто фраза. В файле — по одной на строку,
// пустые строки и строки с # пропускаются.
function readTerms() {
  const file = argVal("--file", "");
  const raw = file
    ? fs.readFileSync(path.resolve(ROOT, file), "utf8").split(/\r?\n/)
    : String(argVal("--terms", "")).split("|");
  const out = [];
  for (const line of raw) {
    const s = line.trim();
    if (!s || s.startsWith("#")) continue;
    const i = s.indexOf("::");
    out.push(i > -1 ? { group: s.slice(0, i).trim(), term: s.slice(i + 2).trim() } : { group: "—", term: s });
  }
  return out.filter((t) => t.term);
}

function readMarkets() {
  const spec = String(argVal("--markets", "en:us"));
  return spec.split(",").map((p) => {
    const [lang, country] = p.trim().toLowerCase().split(":");
    if (!lang || !country) throw new Error(`Рынок пишется как «язык:страна», получено: ${p}`);
    if (!COUNTRY[country]) throw new Error(`Неизвестная страна «${country}». Доступны: ${Object.keys(COUNTRY).join(", ")}`);
    return { lang, country, label: `${lang.toUpperCase()}/${country.toUpperCase()}`, location_code: COUNTRY[country] };
  });
}

const ESTIMATE = { "keywords_data/google_ads/search_volume/live": 0.09 };
let spent = 0, cachedCost = 0, planned = 0;

const cacheKey = (e, p) => path.join(RAW, `${e.replace(/[^a-z0-9]+/gi, "_")}__${crypto.createHash("sha1").update(e + JSON.stringify(p)).digest("hex").slice(0, 16)}.json`);

async function call(endpoint, payload, label) {
  const file = cacheKey(endpoint, payload);
  if (fs.existsSync(file)) {
    const cached = JSON.parse(fs.readFileSync(file, "utf8"));
    cachedCost += Number(cached.cost || 0);
    console.log(`из кеша  ${label}`);
    return cached;
  }
  const estimate = ESTIMATE[endpoint] ?? 0.05;
  if (DRY_RUN) { planned += estimate; console.log(`вызвал бы  ${label}  (~$${estimate.toFixed(3)})`); return null; }
  if (spent + estimate > BUDGET_USD) throw new Error(`Лимит бюджета: потрачено $${spent.toFixed(4)} из $${BUDGET_USD}`);
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
  console.log(`оплачено  ${label}  $${Number(body.cost || 0).toFixed(4)}`);
  return body;
}

const results = (b) => (b && b.tasks && b.tasks[0] && b.tasks[0].result) || [];
const norm = (k) => k.replace(/[^\p{L}\p{N}\s]/gu, " ").replace(/\s+/g, " ").trim().toLowerCase();

async function main() {
  const terms = readTerms();
  if (!terms.length) throw new Error("Нет фраз: передайте --terms «a|b|c» или --file <путь>");
  const markets = readMarkets();
  if (!DRY_RUN && (!LOGIN || !PASSWORD)) throw new Error("Нет доступов DATAFORSEO в .env.local");

  console.log(`фраз: ${terms.length} | рынков: ${markets.length} | вызовов: ${markets.length}`);

  const groupOf = {};
  for (const t of terms) groupOf[norm(t.term)] = t.group;
  const keywords = [...new Set(terms.map((t) => norm(t.term)))];

  const report = { generatedAt: new Date().toISOString(), terms: terms.length, markets: {} };
  const lines = [`# Спрос: ${NAME}`, "", `Снято ${new Date().toISOString().slice(0, 10)}. Фраз ${terms.length}, рынков ${markets.length}.`, ""];

  for (const m of markets) {
    const body = await call(
      "keywords_data/google_ads/search_volume/live",
      { keywords, location_code: m.location_code, language_code: m.lang },
      `${m.label} · ${keywords.length} фраз`,
    );
    const rows = results(body).map((r) => ({
      keyword: r.keyword,
      volume: r.search_volume ?? 0,
      competition: r.competition_level || "",
      cpc: r.cpc ?? null,
      group: groupOf[norm(r.keyword || "")] || "—",
    })).sort((a, b) => b.volume - a.volume);
    report.markets[m.label] = rows;
    if (DRY_RUN || !rows.length) continue;

    const byGroup = {};
    for (const r of rows) (byGroup[r.group] ||= []).push(r);
    lines.push(`## ${m.label}`, "");
    lines.push("| Форма | Сумма | Фраз с объёмом | Лучшая фраза |", "|---|---|---|---|");
    for (const [g, rs] of Object.entries(byGroup).sort((a, b) => b[1].reduce((n, r) => n + r.volume, 0) - a[1].reduce((n, r) => n + r.volume, 0))) {
      const sum = rs.reduce((n, r) => n + r.volume, 0);
      const live = rs.filter((r) => r.volume > 0).length;
      lines.push(`| ${g} | ${sum} | ${live} из ${rs.length} | ${rs[0].keyword} (${rs[0].volume}) |`);
    }
    lines.push("", "| Фраза | Объём | Конкуренция | CPC | Форма |", "|---|---|---|---|---|");
    for (const r of rows) lines.push(`| ${r.keyword} | ${r.volume} | ${r.competition} | ${r.cpc ?? "—"} | ${r.group} |`);
    lines.push("");
  }

  if (DRY_RUN) { console.log(`\nпробный прогон: вызовов на ~$${planned.toFixed(3)}, лимит $${BUDGET_USD}`); return; }

  fs.mkdirSync(OUT, { recursive: true });
  fs.writeFileSync(path.join(OUT, `demand-${NAME}.json`), JSON.stringify(report, null, 1));
  fs.writeFileSync(path.join(OUT, `demand-${NAME}.md`), lines.join("\n") + "\n");
  console.log(`\nготово: research/dataforseo/demand-${NAME}.{json,md}`);
  console.log(`потрачено $${spent.toFixed(4)} (из кеша на $${cachedCost.toFixed(4)})`);
}

main().catch((e) => { console.error("\n" + (e.response ? JSON.stringify(e.response.data).slice(0, 400) : e.message)); process.exit(1); });
