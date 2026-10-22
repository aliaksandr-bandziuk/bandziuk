// scripts/dataforseo/pseo-serp.cjs
//
// Сверяет difficulty из выгрузки с живой выдачей и отбирает страницы
// для первой партии.
//
// Зачем. Колонка difficulty в pages-<lang>.csv получена запросом без локации,
// и доверия она пока не заслужила: по ней «pozycjonowanie stron toruń» имеет
// сложность 1 при 2900 запросов в месяц, а «agencja seo» — 5. Если это правда,
// городское направление открыто. Если нет, отбор надо делать иначе. Выяснить
// это можно только посмотрев, кто реально стоит в топ-10.
//
// Что проверяется по каждому запросу:
//   — состав топ-10: домены печатаются как есть, без оценок
//   — сколько позиций заняли каталоги, маркетплейсы и форумы: это слабые
//     результаты, и такие позиции забираются обычной нормальной страницей
//   — есть ли AI Overview: если есть, часть кликов не достанется никому,
//     и это отдельный разговор про GEO
//   — сколько рекламных блоков: показывает, есть ли в запросе деньги
//   — стоит ли bandziuk.com в топ-20 уже сейчас
//
// Оценку «легко / сложно» скрипт НЕ выставляет. Он считает наблюдаемые
// признаки и печатает домены, а решение принимает человек: автоматическая
// оценка здесь была бы ещё одним числом неизвестного происхождения, а именно
// от такого числа мы и уходим.
//
// Выборка строится не по верхушке, а по полосам difficulty (0–10, 11–25,
// 26–50, 51–100 и пустое значение) — иначе проверка подтвердит только то,
// что лёгкие запросы лёгкие, и ничего не скажет о самой метрике.
//
// Цена: около $0.006 за запрос. Девяносто проверок — меньше доллара.
//
//   node scripts/dataforseo/pseo-serp.cjs --dry-run
//   node scripts/dataforseo/pseo-serp.cjs --budget 1
//   node scripts/dataforseo/pseo-serp.cjs --budget 1 --lang pl --per-type 8

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const axios = require("axios");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env.local"), quiet: true });

const ROOT = path.resolve(__dirname, "../..");
const DIR = path.join(ROOT, "research", "pseo");
const RAW = path.join(DIR, "raw");

const LOGIN = process.env.DATAFORSEO_API_LOGIN;
const PASSWORD = process.env.DATAFORSEO_API_PASSWORD;

const argv = process.argv.slice(2);
const flag = (n, d) => {
  const i = argv.indexOf("--" + n);
  return i > -1 && argv[i + 1] && !argv[i + 1].startsWith("--") ? argv[i + 1] : d;
};
const DRY_RUN = argv.includes("--dry-run");
const BUDGET_USD = Number(flag("budget", 1));
const PER_TYPE = Number(flag("per-type", 5));
const ONLY_LANG = flag("lang", null);
const LANGS = ONLY_LANG ? [ONLY_LANG] : ["pl", "ru", "en"];
const OWN = "bandziuk.com";

// Локации для выдачи. Для русского — Польша: именно там живёт русскоязычная
// аудитория этого сайта, и та же логика применена в прежних скриптах проекта.
// Для английского — США как крупнейший рынок; при надобности меняется флагом.
const SERP = {
  pl: { location_code: 2616, language_code: "pl" },
  ru: { location_code: 2616, language_code: "ru" },
  en: { location_code: Number(flag("en-location", 2840)), language_code: "en" },
};

// Слабые результаты: каталоги, маркетплейсы, соцсети и форумы. Позицию в топ-10,
// занятую такой страницей, забирает обычная нормальная страница по теме —
// в отличие от позиции, занятой сайтом конкурента.
const WEAK = [
  "clutch.co", "upwork.com", "fiverr.com", "freelancer.com", "g2.com", "capterra.com",
  "trustpilot.com", "yelp.com", "goldenline.pl", "panoramafirm.pl", "oferteo.pl",
  "fixly.pl", "aleo.com", "pkt.pl", "allegro.pl", "olx.pl", "otomoto.pl",
  "linkedin.com", "facebook.com", "instagram.com", "youtube.com", "tiktok.com",
  "reddit.com", "quora.com", "medium.com", "wikipedia.org", "pinterest.com",
  "wykop.pl", "forum.pasja-informatyki.pl", "habr.com", "vc.ru", "dtf.ru",
  "wordpress.org", "wix.com", "squarespace.com", "shopify.com", "canva.com",
  "goldenbusiness.pl", "firmy.net", "bizin.pl", "yandex.ru", "google.com",
];

const ESTIMATE = { "serp/google/organic/live/advanced": 0.006 };
let spent = 0;
let cachedCost = 0;
let planned = 0;

function assertBudget(next = 0) {
  if (spent + next > BUDGET_USD) {
    throw new Error(`Потолок бюджета: заплачено $${spent.toFixed(4)} из $${BUDGET_USD}. Больше ничего не запрашивалось.`);
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
    process.stdout.write("к");
    return cached;
  }
  const estimate = ESTIMATE[endpoint] ?? 0.01;
  if (DRY_RUN) { planned += estimate; return null; }
  assertBudget(estimate);
  const res = await axios.post(`https://api.dataforseo.com/v3/${endpoint}`, [payload], {
    auth: { username: LOGIN, password: PASSWORD },
    timeout: 120000,
  });
  const body = res.data;
  spent += Number(body.cost || 0);
  const task = body.tasks && body.tasks[0];
  if (body.status_code !== 20000 || (task && task.status_code !== 20000)) {
    process.stdout.write("!");
    return body;
  }
  fs.mkdirSync(RAW, { recursive: true });
  fs.writeFileSync(file, JSON.stringify(body, null, 1));
  process.stdout.write(".");
  return body;
}

// ---------------------------------------------------------------------- csv --

function parseLine(line) {
  const out = [];
  let cur = "";
  let inQ = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '"') {
      if (inQ && line[i + 1] === '"') { cur += '"'; i++; }
      else inQ = !inQ;
    } else if (c === "," && !inQ) { out.push(cur); cur = ""; }
    else cur += c;
  }
  out.push(cur);
  return out;
}

function readCsv(file) {
  const lines = fs.readFileSync(file, "utf8").replace(/^﻿/, "").split(/\r?\n/).filter((l) => l.trim() !== "");
  const head = parseLine(lines[0]);
  return lines.slice(1).map((l) => {
    const cells = parseLine(l);
    const row = {};
    head.forEach((h, i) => { row[h] = cells[i] == null ? "" : cells[i]; });
    return row;
  });
}

function writeCsv(file, cols, rows) {
  const esc = (v) => `"${String(v == null ? "" : v).replace(/"/g, '""')}"`;
  fs.writeFileSync(file, [cols.join(","), ...rows.map((r) => cols.map((c) => esc(r[c])).join(","))].join("\n") + "\n", "utf8");
}

// ------------------------------------------------------------------ выборка --

const BANDS = [
  { name: "0–10", test: (d) => d !== "" && Number(d) <= 10 },
  { name: "11–25", test: (d) => d !== "" && Number(d) > 10 && Number(d) <= 25 },
  { name: "26–50", test: (d) => d !== "" && Number(d) > 25 && Number(d) <= 50 },
  { name: "51–100", test: (d) => d !== "" && Number(d) > 50 },
  { name: "пусто", test: (d) => d === "" },
];

/** По каждому типу берёт страницы из разных полос difficulty. */
function pick(pages, perType) {
  const out = [];
  const types = [...new Set(pages.map((p) => p.type))];
  for (const type of types) {
    const inType = pages.filter((p) => p.type === type).sort((a, b) => Number(b.volume) - Number(a.volume));
    const taken = [];
    // по одной из каждой полосы, потом добираем по частоте
    for (const band of BANDS) {
      const hit = inType.find((p) => band.test(p.difficulty) && !taken.includes(p));
      if (hit) { taken.push(hit); hit.band = band.name; }
      if (taken.length >= perType) break;
    }
    for (const p of inType) {
      if (taken.length >= perType) break;
      if (!taken.includes(p)) {
        p.band = (BANDS.find((b) => b.test(p.difficulty)) || { name: "?" }).name;
        taken.push(p);
      }
    }
    out.push(...taken);
  }
  return out;
}

const host = (url) => { try { return new URL(url).hostname.replace(/^www\./, ""); } catch { return ""; } };
const isWeak = (d) => WEAK.some((w) => d === w || d.endsWith("." + w));

// --------------------------------------------------------------------- main --

const COLS = ["lang", "type", "band", "difficulty", "volume", "head", "weak_in_top10", "ai_overview", "ads", "own_rank", "top10"];

async function main() {
  if (!LOGIN || !PASSWORD) throw new Error("DATAFORSEO_API_LOGIN / _PASSWORD не найдены в .env.local");

  const jobs = [];
  for (const lang of LANGS) {
    const file = path.join(DIR, `pages-${lang}.csv`);
    if (!fs.existsSync(file)) { console.warn(`! нет ${file}, пропускаю`); continue; }
    const pages = readCsv(file).filter((p) => p.type !== "info");
    for (const p of pick(pages, PER_TYPE)) jobs.push({ lang, page: p });
  }
  if (!jobs.length) { console.error("Нечего проверять. Сначала pseo-cluster.cjs."); process.exit(1); }

  console.log(`Проверок: ${jobs.length}. Оценка: ~$${(jobs.length * 0.006).toFixed(2)}. Бюджет: $${BUDGET_USD}.`);
  console.log(`Выдача читается: pl → Польша/pl, ru → Польша/ru, en → код ${SERP.en.location_code}/en.\n`);
  if (DRY_RUN) {
    for (const j of jobs) console.log(`  ${j.lang} ${j.page.type.padEnd(9)} d=${String(j.page.difficulty || "-").padStart(3)} [${j.page.band}] ${j.page.head}`);
    console.log(`\nСухой прогон. Оценка полного: ~$${(jobs.length * 0.006).toFixed(2)}.`);
    return;
  }

  const rows = [];
  process.stdout.write("Запросы: ");
  for (const j of jobs) {
    const body = await call(
      "serp/google/organic/live/advanced",
      { keyword: j.page.head, ...SERP[j.lang], device: "desktop", depth: 20 },
      j.page.head,
    );
    const items = (body && body.tasks && body.tasks[0] && body.tasks[0].result && body.tasks[0].result[0] && body.tasks[0].result[0].items) || [];
    const organic = items.filter((i) => i.type === "organic");
    const top10 = organic.slice(0, 10).map((i) => host(i.url || i.domain || "")).filter(Boolean);
    const ownAt = organic.findIndex((i) => host(i.url || "") === OWN || String(i.domain || "").includes(OWN));
    rows.push({
      lang: j.lang,
      type: j.page.type,
      band: j.page.band,
      difficulty: j.page.difficulty,
      volume: j.page.volume,
      head: j.page.head,
      weak_in_top10: top10.filter(isWeak).length,
      ai_overview: items.some((i) => i.type === "ai_overview") ? "да" : "",
      ads: items.filter((i) => i.type === "paid").length,
      own_rank: ownAt > -1 ? ownAt + 1 : "",
      top10: top10.join(" | "),
    });
  }
  console.log("\n");

  writeCsv(path.join(DIR, "serp-check.csv"), COLS, rows);

  // ------------------------------------------------------------ сводка --
  const lines = [];
  const say = (l = "") => { console.log(l); lines.push(l); };

  say("# Сверка difficulty с живой выдачей");
  say("");
  say(`Проверено: ${new Date().toISOString().slice(0, 16).replace("T", " ")} UTC, запросов ${rows.length}.`);
  say("");
  say("## Совпадает ли difficulty с составом выдачи");
  say("");
  say("Если метрика честная, в полосе 0–10 слабых результатов в топ-10 должно быть");
  say("много, а в полосе 51–100 мало. Если зависимости нет, метрика ничего не");
  say("измеряет и отбирать по ней нельзя.");
  say("");
  say("| полоса difficulty | запросов | слабых в топ-10, в среднем | с AI Overview | реклама, в среднем |");
  say("| --- | --- | --- | --- | --- |");
  for (const band of BANDS) {
    const sel = rows.filter((r) => r.band === band.name);
    if (!sel.length) continue;
    const avg = (f) => (sel.reduce((n, r) => n + Number(r[f] || 0), 0) / sel.length).toFixed(1);
    const ai = sel.filter((r) => r.ai_overview).length;
    say(`| ${band.name} | ${sel.length} | ${avg("weak_in_top10")} | ${ai} | ${avg("ads")} |`);
  }
  say("");

  say("## По типам страниц");
  say("");
  say("| тип | запросов | слабых в топ-10, в среднем | с AI Overview |");
  say("| --- | --- | --- | --- |");
  for (const type of [...new Set(rows.map((r) => r.type))]) {
    const sel = rows.filter((r) => r.type === type);
    const avg = (sel.reduce((n, r) => n + Number(r.weak_in_top10 || 0), 0) / sel.length).toFixed(1);
    say(`| ${type} | ${sel.length} | ${avg} | ${sel.filter((r) => r.ai_overview).length} |`);
  }
  say("");

  const soft = rows.filter((r) => Number(r.weak_in_top10) >= 3).sort((a, b) => Number(b.volume) - Number(a.volume));
  say(`## Самая мягкая выдача: ${soft.length} запросов, где каталоги и форумы заняли от трёх позиций`);
  say("");
  say("Это кандидаты в первую партию: такие позиции забираются обычной страницей по теме.");
  say("");
  for (const r of soft.slice(0, 25)) {
    say(`- **${r.head}** (${r.lang}, ${r.type}) — ${r.volume}/мес, difficulty ${r.difficulty || "—"}, слабых ${r.weak_in_top10}${r.ai_overview ? ", есть AI Overview" : ""}`);
    say(`  - топ-10: ${r.top10.split(" | ").slice(0, 8).join(", ")}`);
  }
  say("");

  const already = rows.filter((r) => r.own_rank);
  if (already.length) {
    say("## Где bandziuk.com уже в топ-20");
    say("");
    for (const r of already) say(`- ${r.head} — позиция ${r.own_rank} (${r.lang}, ${r.volume}/мес)`);
    say("");
  }

  say("Полные данные по каждому запросу: research/pseo/serp-check.csv, колонка top10.");

  fs.writeFileSync(path.join(DIR, "serp-check.md"), lines.join("\n") + "\n", "utf8");
  console.log(`\nЗаплачено $${spent.toFixed(4)}, из кеша $${cachedCost.toFixed(4)}. Записано: research/pseo/serp-check.csv, serp-check.md`);
}

main().catch((e) => {
  const detail = e.response ? JSON.stringify(e.response.data).slice(0, 400) : e.message;
  console.error("\nОшибка: " + detail);
  process.exit(1);
});
