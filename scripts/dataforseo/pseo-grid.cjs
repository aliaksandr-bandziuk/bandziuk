// scripts/dataforseo/pseo-grid.cjs
//
// Строит матрицу «услуга × отрасль × город × язык» и проверяет спрос по всей
// сетке массовой выгрузкой частот.
//
// Чем отличается от pseo-discover.cjs и почему он понадобился. Discover ищет
// формулировки от сидов через keyword_suggestions — по $0.02–0.05 за сид. Для
// сетки из десятков тысяч комбинаций это сотни долларов, и главное — открытие
// там не нужно: комбинации мы задаём сами. Нужна проверка, а она делается
// эндпоинтом keywords_data/google_ads/search_volume/live, который берёт
// 1000 фраз за один вызов по $0.09. Сорок девять тысяч комбинаций обходятся
// примерно в четыре доллара.
//
// Четыре оси, каждая помечена в колонке axis:
//   service-only     головные запросы: «pozycjonowanie stron»
//   service-industry «strona internetowa dla fotografa»
//   service-city     «продвижение сайта астана»
//   industry-city    «seo for law firms in dubai» — самая объёмная
//
// География: локация не указывается, данные приходят по всем доступным
// локациям. Город задаётся словом в самой фразе, поэтому привязка к стране не
// нужна и только отрезала бы часть рынка. России, Индии и Пакистана в
// словарях нет сознательно.
//
// Порог: 10 запросов в месяц. Ниже него данных не существует — Keyword Planner
// округляет до своей сетки, и минимальное ненулевое значение равно 10.
//
// Прогон длинный: полсотни вызовов по 10–30 секунд, то есть минут десять-
// двадцать. Каждая пачка кешируется отдельно, поэтому прерванный прогон
// продолжается с места остановки и повторно не оплачивается.
//
//   node scripts/dataforseo/pseo-grid.cjs --dry-run
//   node scripts/dataforseo/pseo-grid.cjs --budget 6
//   node scripts/dataforseo/pseo-grid.cjs --budget 3 --lang pl
//   node scripts/dataforseo/pseo-grid.cjs --budget 6 --axes service-industry,industry-city

const fs = require("fs");
const path = require("path");
const axios = require("axios");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env.local"), quiet: true });

const V = require("./pseo-vocab.cjs");

const ROOT = path.resolve(__dirname, "../..");
const OUT = path.join(ROOT, "research", "pseo");
const RAW = path.join(OUT, "raw-grid");           // прежний кеш: пачка целиком
const VOL = (lang) => path.join(OUT, `volumes-${lang}.json`); // нынешний: по фразе

const LOGIN = process.env.DATAFORSEO_API_LOGIN;
const PASSWORD = process.env.DATAFORSEO_API_PASSWORD;

const argv = process.argv.slice(2);
const flag = (n, d) => {
  const i = argv.indexOf("--" + n);
  return i > -1 && argv[i + 1] && !argv[i + 1].startsWith("--") ? argv[i + 1] : d;
};
const DRY_RUN = argv.includes("--dry-run");
const BUDGET_USD = Number(flag("budget", 6));
const MIN_VOLUME = Number(flag("min", 10));
const ONLY_LANG = flag("lang", null);
const LANGS = ONLY_LANG ? [ONLY_LANG] : ["pl", "ru", "en"];
const ALL_AXES = ["service-only", "service-industry", "service-city", "industry-city"];
const AXES = (flag("axes", null) || ALL_AXES.join(",")).split(",").map((s) => s.trim()).filter(Boolean);

const BATCH = 1000; // предел эндпоинта

// DataForSEO пропускает 12 вызовов в минуту и отвечает 40202, когда предел
// превышен. Первый прогон этим и оборвался: прошли 12 пачек, остальные 37
// отвалились. Держим запас — 10 вызовов в минуту, то есть 6 секунд паузы,
// плюс повтор с выдержкой, если всё же упрёмся.
const PRICE_PER_CALL = 0.09;
const MIN_GAP_MS = Number(flag("gap", 6500));
const RETRIES = Number(flag("retries", 4));
let lastCallAt = 0;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function throttle() {
  const wait = lastCallAt + MIN_GAP_MS - Date.now();
  if (wait > 0) await sleep(wait);
  lastCallAt = Date.now();
}

let spent = 0;
let cachedCost = 0;
let planned = 0;
const failed = [];

function assertBudget(next = 0) {
  if (spent + next > BUDGET_USD) {
    throw new Error(
      `Потолок бюджета: заплачено $${spent.toFixed(4)} из $${BUDGET_USD}. ` +
      `Всё купленное осталось в кеше — поднимите --budget и запустите снова, ` +
      `оплаченные пачки повторно не покупаются.`,
    );
  }
}

const norm = (s) => String(s || "").toLowerCase().replace(/\s+/g, " ").trim();

// ------------------------------------------------------------- построение --

function buildPhrases(lang) {
  const seen = new Map();
  const add = (phrase, axis, meta) => {
    const k = norm(phrase);
    // DataForSEO отбрасывает слишком длинные запросы; десять слов — запас
    if (!k || k.split(" ").length > 10) return;
    if (seen.has(k)) return;
    seen.set(k, { keyword: k, axis, ...meta });
  };

  if (AXES.includes("service-only")) {
    for (const s of V.SERVICE_ONLY[lang] || []) add(s, "service-only", { service: "", industry: "", city: "" });
  }
  if (AXES.includes("service-industry")) {
    for (const tpl of V.SERVICE_TEMPLATES[lang] || []) {
      for (const ind of V.INDUSTRIES[lang] || []) {
        add(tpl.t(ind), "service-industry", { service: tpl.key, industry: ind, city: "" });
      }
    }
  }
  if (AXES.includes("service-industry")) {
    // единственное число перед услугой: «bakery website», «roofing seo» (дельта 27.10.2026)
    for (const tpl of V.SERVICE_TEMPLATES_ONE[lang] || []) {
      for (const [ind, one] of V.INDUSTRY_ONE[lang] || []) {
        add(tpl.t(one), "service-industry", { service: tpl.key, industry: ind, city: "" });
      }
    }
  }
  if (AXES.includes("service-city")) {
    for (const tpl of V.CITY_TEMPLATES[lang] || []) {
      for (const c of V.CITIES[lang] || []) {
        add(tpl.t(c), "service-city", { service: tpl.key, industry: "", city: c });
      }
    }
  }
  if (AXES.includes("industry-city")) {
    for (const tpl of V.INDUSTRY_CITY_TEMPLATES[lang] || []) {
      for (const ind of V.INDUSTRIES[lang] || []) {
        for (const c of V.CITIES[lang] || []) {
          add(tpl(ind, c), "industry-city", { service: "", industry: ind, city: c });
        }
      }
    }
  }
  return [...seen.values()];
}

// ----------------------------------------------------------------- вызовы --

// Кеш по фразе, а не по пачке. Прежний вариант запоминал пачку целиком, и
// любое пополнение словаря меняло состав всех пачек — то есть за одну новую
// отрасль пришлось бы заплатить за всю сетку заново. Теперь в API уходят
// только фразы, которых в кеше ещё нет.

function loadVolumes(lang) {
  const file = VOL(lang);
  if (fs.existsSync(file)) {
    try { return new Map(Object.entries(JSON.parse(fs.readFileSync(file, "utf8")))); }
    catch (e) { console.warn(`  ! ${path.basename(file)} не прочитан: ${e.message}`); }
  }
  return new Map();
}

function saveVolumes(lang, map) {
  fs.mkdirSync(OUT, { recursive: true });
  fs.writeFileSync(VOL(lang), JSON.stringify(Object.fromEntries(map)), "utf8");
}

/** Переносит уже оплаченные ответы из прежнего пачечного кеша. */
function seedFromBatchCache(lang, map) {
  if (!fs.existsSync(RAW)) return 0;
  let added = 0;
  for (const f of fs.readdirSync(RAW)) {
    if (!f.startsWith(`volume_${lang}__`)) continue;
    let body;
    try { body = JSON.parse(fs.readFileSync(path.join(RAW, f), "utf8")); } catch { continue; }
    cachedCost += Number(body.cost || 0);
    const result = (body.tasks && body.tasks[0] && body.tasks[0].result) || [];
    for (const r of result) {
      const k = norm(r.keyword);
      if (!k || map.has(k)) continue;
      map.set(k, {
        v: r.search_volume == null ? 0 : Number(r.search_volume),
        c: r.competition_level || "",
        p: r.cpc == null ? "" : r.cpc,
      });
      added += 1;
    }
  }
  return added;
}

async function priceBatch(lang, keywords, label) {
  if (DRY_RUN) { planned += PRICE_PER_CALL; console.log(`вызвал бы ${label} (~$${PRICE_PER_CALL.toFixed(2)})`); return null; }

  for (let attempt = 1; attempt <= RETRIES + 1; attempt++) {
    assertBudget(PRICE_PER_CALL);
    await throttle();

    let body;
    try {
      const res = await axios.post(
        "https://api.dataforseo.com/v3/keywords_data/google_ads/search_volume/live",
        [{ keywords, language_code: lang }],
        { auth: { username: LOGIN, password: PASSWORD }, timeout: 300000 },
      );
      body = res.data;
    } catch (e) {
      body = (e.response && e.response.data) || { status_code: 0, status_message: e.message };
    }

    spent += Number(body.cost || 0);
    const task = body.tasks && body.tasks[0];
    const code = (task && task.status_code) || body.status_code;
    const ok = body.status_code === 20000 && task && task.status_code === 20000;

    if (ok) {
      // Запись идёт в пофразовый кеш volumes-<lang>.json после возврата:
      // отдельный файл на пачку больше не нужен.
      console.log(`оплачено ${label}  $${Number(body.cost || 0).toFixed(4)}  (всего $${spent.toFixed(2)})`);
      return body;
    }

    // 40202 — превышен предел вызовов в минуту. Отказ ничего не стоит,
    // поэтому ждём и пробуем снова, а не теряем пачку.
    const msg = (task && task.status_message) || body.status_message;
    if (code === 40202 && attempt <= RETRIES) {
      const wait = 20000 * attempt;
      console.warn(`  · ${label}: предел вызовов, жду ${wait / 1000} с и повторяю (попытка ${attempt} из ${RETRIES})`);
      await sleep(wait);
      continue;
    }
    console.warn(`  ! ${label}: ${code} ${msg}`);
    failed.push(label);
    return body;
  }
  return null;
}

// -------------------------------------------------------------------- csv --

const COLS = ["keyword", "volume", "axis", "service", "industry", "city", "competition", "cpc"];

function writeCsv(file, cols, rows) {
  const esc = (v) => `"${String(v == null ? "" : v).replace(/"/g, '""')}"`;
  fs.writeFileSync(file, [cols.join(","), ...rows.map((r) => cols.map((c) => esc(r[c])).join(","))].join("\n") + "\n", "utf8");
}

// ------------------------------------------------------------------- main --

async function main() {
  if (!LOGIN || !PASSWORD) throw new Error("DATAFORSEO_API_LOGIN / _PASSWORD не найдены в .env.local");
  fs.mkdirSync(OUT, { recursive: true });

  // Кеш подтягивается до подсчёта стоимости, иначе оценка в шапке считает
  // заново уже оплаченное и пугает несуществующей суммой.
  const plan = LANGS.map((lang) => {
    const phrases = buildPhrases(lang);
    const known = loadVolumes(lang);
    const seeded = seedFromBatchCache(lang, known);
    if (seeded) saveVolumes(lang, known);
    return { lang, phrases, known, seeded };
  });
  const total = plan.reduce((n, p) => n + p.phrases.length, 0);
  const calls = plan.reduce((n, p) => n + Math.ceil(p.phrases.filter((x) => !p.known.has(x.keyword)).length / BATCH), 0);

  console.log(`Оси: ${AXES.join(", ")}`);
  console.log(`Языки: ${LANGS.join(", ")}. Порог: ${MIN_VOLUME}/мес. Локация не задаётся — весь мир.`);
  for (const p of plan) {
    const need = p.phrases.filter((x) => !p.known.has(x.keyword)).length;
    console.log(`  ${p.lang}: ${p.phrases.length.toLocaleString("ru-RU")} фраз, в кеше ${p.known.size.toLocaleString("ru-RU")}, спросить ${need.toLocaleString("ru-RU")}`);
  }
  console.log(`Всего ${total.toLocaleString("ru-RU")} фраз. Новых вызовов ${calls}, оценка $${(calls * PRICE_PER_CALL).toFixed(2)}, бюджет $${BUDGET_USD}.`);
  console.log(`Пауза между вызовами ${(MIN_GAP_MS / 1000).toFixed(1)} с: у DataForSEO предел 12 вызовов в минуту.`);
  console.log(`Прогон долгий: примерно ${Math.ceil((calls * MIN_GAP_MS) / 60000)} минут. Каждая пачка кешируется.\n`);

  const summary = [];

  for (const { lang, phrases, known, seeded } of plan) {
    if (seeded) console.log(`  перенесено из прежнего кеша: ${seeded.toLocaleString("ru-RU")} фраз`);

    const unknown = phrases.filter((p) => !known.has(p.keyword));
    const batches = [];
    for (let i = 0; i < unknown.length; i += BATCH) batches.push(unknown.slice(i, i + BATCH));

    console.log(`--- ${lang}: в кеше ${known.size.toLocaleString("ru-RU")}, спросить ${unknown.length.toLocaleString("ru-RU")} (${batches.length} пачек) ---`);

    for (let i = 0; i < batches.length; i++) {
      const keywords = batches[i].map((p) => p.keyword);
      const body = await priceBatch(lang, keywords, `${lang} ${i + 1}/${batches.length}`);
      const result = (body && body.tasks && body.tasks[0] && body.tasks[0].result) || [];
      for (const r of result) {
        const k = norm(r.keyword);
        if (!k) continue;
        known.set(k, {
          v: r.search_volume == null ? 0 : Number(r.search_volume),
          c: r.competition_level || "",
          p: r.cpc == null ? "" : r.cpc,
        });
      }
      // сохраняем после каждой пачки: прерванный прогон ничего не теряет
      if (result.length) saveVolumes(lang, known);
    }

    if (DRY_RUN) { console.log(""); continue; }

    const rows = [];
    for (const meta of phrases) {
      const hit = known.get(meta.keyword);
      if (!hit || Number(hit.v) < MIN_VOLUME) continue;
      rows.push({
        keyword: meta.keyword,
        volume: Number(hit.v),
        axis: meta.axis,
        service: meta.service,
        industry: meta.industry,
        city: meta.city,
        competition: hit.c || "",
        cpc: hit.p == null ? "" : hit.p,
      });
    }

    rows.sort((a, b) => b.volume - a.volume);
    writeCsv(path.join(OUT, `grid-${lang}.csv`), COLS, rows);
    summary.push({ lang, asked: phrases.length, found: rows.length, rows });
    console.log(`  проверено ${phrases.length.toLocaleString("ru-RU")}, спрос от ${MIN_VOLUME} есть у ${rows.length.toLocaleString("ru-RU")}\n`);
  }

  if (DRY_RUN) {
    console.log(`Сухой прогон. Оценка полного: ~$${planned.toFixed(2)}.`);
    return;
  }

  // ------------------------------------------------------------ отчёт --
  const lines = [];
  const say = (l = "") => { console.log(l); lines.push(l); };

  say("# Матрица спроса: услуга × отрасль × город");
  say("");
  say(`Построено: ${new Date().toISOString().slice(0, 16).replace("T", " ")} UTC. Порог ${MIN_VOLUME}/мес.`);
  say(`Проверено комбинаций: ${total.toLocaleString("ru-RU")}. Заплачено $${spent.toFixed(2)}, из кеша $${cachedCost.toFixed(2)}.`);
  say("");

  say("| язык | проверено | со спросом | доля |");
  say("| --- | --- | --- | --- |");
  for (const s of summary) {
    say(`| ${s.lang} | ${s.asked.toLocaleString("ru-RU")} | ${s.found.toLocaleString("ru-RU")} | ${((s.found / s.asked) * 100).toFixed(1)}% |`);
  }
  say("");

  say("## По осям");
  say("");
  say("| язык | ось | тем | сумма частот |");
  say("| --- | --- | --- | --- |");
  for (const s of summary) {
    for (const axis of ALL_AXES) {
      const sel = s.rows.filter((r) => r.axis === axis);
      if (!sel.length) continue;
      const vol = sel.reduce((n, r) => n + r.volume, 0);
      say(`| ${s.lang} | ${axis} | ${sel.length.toLocaleString("ru-RU")} | ${vol.toLocaleString("ru-RU")} |`);
    }
  }
  say("");

  for (const s of summary) {
    const byInd = new Map();
    for (const r of s.rows) {
      if (!r.industry) continue;
      const cur = byInd.get(r.industry) || { n: 0, vol: 0 };
      cur.n += 1; cur.vol += r.volume;
      byInd.set(r.industry, cur);
    }
    const top = [...byInd.entries()].sort((a, b) => b[1].vol - a[1].vol).slice(0, 20);
    if (!top.length) continue;
    say(`## ${s.lang}: отрасли с наибольшим спросом`);
    say("");
    say("| отрасль | тем | сумма частот |");
    say("| --- | --- | --- |");
    for (const [ind, v] of top) say(`| ${ind} | ${v.n} | ${v.vol.toLocaleString("ru-RU")} |`);
    say("");
  }

  for (const s of summary) {
    const byCity = new Map();
    for (const r of s.rows) {
      if (!r.city) continue;
      const cur = byCity.get(r.city) || { n: 0, vol: 0 };
      cur.n += 1; cur.vol += r.volume;
      byCity.set(r.city, cur);
    }
    const top = [...byCity.entries()].sort((a, b) => b[1].vol - a[1].vol).slice(0, 20);
    if (!top.length) continue;
    say(`## ${s.lang}: города с наибольшим спросом`);
    say("");
    say("| город | тем | сумма частот |");
    say("| --- | --- | --- |");
    for (const [c, v] of top) say(`| ${c} | ${v.n} | ${v.vol.toLocaleString("ru-RU")} |`);
    say("");
  }

  for (const s of summary) {
    say(`## ${s.lang}: двадцать самых частотных`);
    say("");
    for (const r of s.rows.slice(0, 20)) say(`- **${r.keyword}** — ${r.volume}/мес, ось ${r.axis}`);
    say("");
  }

  if (failed.length) {
    say(`## Пачки, которые не прошли: ${failed.length}`);
    say("");
    say("Их фразы в выгрузку не попали, и отсутствие темы здесь ничего не значит.");
    say("Отказ не оплачивается — достаточно запустить прогон снова: купленные");
    say("пачки возьмутся из кеша.");
    say("");
    for (const f of failed) say(`- ${f}`);
    say("");
  }

  say("## Оговорка про латинские термины");
  say("");
  say("Локация не задаётся, поэтому для фраз, которые одинаково пишутся на всех");
  say("языках — «landing page», «headless cms», «core web vitals», «seo» — в");
  say("выгрузку подмешивается глобальный английский спрос. У польского «landing");
  say("page» в первом прогоне вышло 246 000 в месяц, чего быть не может: через");
  say("другой эндпоинт с тем же языком получалось 880. Числа по таким фразам");
  say("недостоверны; достоверны те, где формулировка сама по себе принадлежит");
  say("языку — «pozycjonowanie stron», «продвижение сайта», «tworzenie stron».");
  say("");

  say("Полные данные: research/pseo/grid-<lang>.csv");
  say("");
  say("Отсутствие строки означает, что частота ниже 10 или данных нет вовсе.");
  say("Это не приговор теме: порог 10 — предел измерения источника, а не");
  say("отсутствие спроса. Такие комбинации стоит перепроверить через несколько");
  say("месяцев, прогон по кешу обойдётся только в новые пачки.");

  fs.writeFileSync(path.join(OUT, "grid.md"), lines.join("\n") + "\n", "utf8");
  console.log(`\nЗаписано: research/pseo/grid-*.csv, grid.md`);
}

main().catch((e) => {
  const detail = e.response ? JSON.stringify(e.response.data).slice(0, 500) : e.message;
  console.error("\nОшибка: " + detail);
  process.exit(1);
});
