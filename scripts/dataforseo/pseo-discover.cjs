// scripts/dataforseo/pseo-discover.cjs
//
// Сбор запросов под программные посадочные страницы, три языка, один прогон.
//
// Правило отбора задано владельцем сайта: любой запрос с частотой от 5 в месяц
// заслуживает страницы. Порог уходит прямо в API — keyword_suggestions умеет
// фильтровать по keyword_info.search_volume на своей стороне, поэтому мусор
// ниже порога не оплачивается и не скачивается.
//
// ГЕОГРАФИЯ: по умолчанию локация не указывается вообще. У обоих используемых
// эндпоинтов поле location_code необязательное, и без него возвращаются данные
// «по всем доступным локациям». Это сознательный выбор: русскоязычная и
// англоязычная аудитория живёт и ведёт дела по всему миру, привязка к одной
// стране отрезала бы большую её часть.
//
// Отдельно про Россию. Её в наборе локаций DataForSEO нет (Google свернул
// рекламу в России в 2022-м, данных Keyword Planner по ней не существует),
// поэтому мировая выборка по русскому языку России и не содержит. Шаг 0
// проверяет это бесплатным эндпоинтом и печатает ответ, чтобы утверждение
// не приходилось брать на слово.
//
// Шаги:
//   0. баланс счёта и проверка наличия России и Беларуси в локациях (бесплатно)
//   1. keyword_suggestions по каждому сиду — phrase-match, то есть только
//      фразы, содержащие сид целиком. Это основной источник длинного хвоста.
//   2. keyword_ideas по трём сидам на язык — фразы той же категории без
//      обязательного вхождения. Даёт формулировки, которые сам не придумаешь.
//   3. склейка, дедупликация, отсев навигационных запросов и стоп-листа
//   4. research/pseo/keywords-<lang>.csv, rejected-<lang>.csv, summary.md
//
// Стоимость под контролем: оценка перед каждым вызовом, реальная цена после,
// жёсткий потолок --budget, все ответы кешируются в research/pseo/raw/
// (в .gitignore), поэтому повторный прогон бесплатен. --dry-run не платит ни
// за что и показывает план.
//
// Учётные данные читаются из .env.local и никогда не печатаются.
//
// Запуск:
//   node scripts/dataforseo/pseo-discover.cjs --dry-run
//   node scripts/dataforseo/pseo-discover.cjs --budget 8
//   node scripts/dataforseo/pseo-discover.cjs --budget 8 --lang pl
//   node scripts/dataforseo/pseo-discover.cjs --budget 8 --location 2616
//        (если мировая выборка почему-то отказана — прогон по одной стране)

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const axios = require("axios");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env.local"), quiet: true });

const { SEEDS, IDEAS_SEEDS, STOP, CITY } = require("./pseo-seeds.cjs");

const ROOT = path.resolve(__dirname, "../..");
const OUT = path.join(ROOT, "research", "pseo");
const RAW = path.join(OUT, "raw");

const LOGIN = process.env.DATAFORSEO_API_LOGIN;
const PASSWORD = process.env.DATAFORSEO_API_PASSWORD;

const argv = process.argv.slice(2);
const flag = (name, dflt) => {
  const i = argv.indexOf("--" + name);
  return i > -1 && argv[i + 1] && !argv[i + 1].startsWith("--") ? argv[i + 1] : dflt;
};
const DRY_RUN = argv.includes("--dry-run");
const BUDGET_USD = Number(flag("budget", 8));
const MIN_VOLUME = Number(flag("min", 5));
// Верхний отсев. В нише Бандзюка мировая частота выше десяти тысяч означает
// не спрос на услугу, а попадание в чужой смысл слова: «website for
// realtor.com» (1 000 000), «google translate for website» (823 000),
// «bing webmaster tools» (135 000). Поднимается флагом --max при надобности.
const MAX_VOLUME = Number(flag("max", 10000));
const LIMIT = Number(flag("limit", 300));
const LOCATION = flag("location", null) ? Number(flag("location", null)) : null;
const ONLY_LANG = flag("lang", null);
// Канал keyword_ideas выключен по умолчанию. Он отдаёт «запросы той же
// категории», а категорию определяет по самому частотному смыслу слова, и
// трижды подряд притаскивал чужое: «agencja reklamowa», «smolar agencja
// promocyjno-reklamowa», «śląsk wrocław pogoń grodzisk» (футбол),
// «domy na sprzedaż wrocław». Все ценные формулировки из него приходят и
// через phrase-match. Включается флагом --ideas, если понадобится.
const USE_IDEAS = argv.includes("--ideas");
const LANGS = (ONLY_LANG ? [ONLY_LANG] : ["pl", "ru", "en"]).filter((l) => SEEDS[l]);

const ESTIMATE = {
  "dataforseo_labs/google/keyword_suggestions/live": 0.02,
  "dataforseo_labs/google/keyword_ideas/live": 0.03,
  "keywords_data/google_ads/search_volume/live": 0.09,
};

// keyword_ideas, в отличие от keyword_suggestions, требует локацию: без неё
// возвращает 40501 Invalid Field: 'location_name'. Поэтому локация здесь
// нужна, но используется только чтобы НАЙТИ формулировки. Частоты из этого
// ответа отбрасываются и добираются отдельным мировым вызовом search_volume,
// иначе в одном файле смешались бы мировые частоты и частоты одной страны.
// Для ru Польша не годится: Labs отвечает 40501 Invalid Field: 'language_code',
// то есть пары «Польша + русский» в их наборе нет. Казахстан — та же локация,
// через которую русские частоты читались в прежних скриптах проекта.
const IDEAS_LOCATION = { pl: 2616, ru: 2398, en: 2840 };

// Страны, чьи города выгружаются в cities.json для кластеризатора. Набор
// отвечает тому, где владелец сайта работает и где живёт его аудитория:
// Польша прежде всего, затем Европа, англоязычные рынки и страны, откуда
// приходят русскоязычные запросы.
const CITY_COUNTRIES = new Set([
  "PL", "UA", "KZ", "DE", "CZ", "SK", "LT", "LV", "EE", "CY", "GE", "AM", "MD",
  "GB", "IE", "US", "CA", "AU", "NZ", "NL", "BE", "AT", "CH", "ES", "PT", "IT",
  "FR", "SE", "NO", "DK", "FI", "AE", "SG", "IL", "TR", "RS", "BG", "RO", "HU", "GR",
]);

let spent = 0;
let cachedCost = 0;
let planned = 0;
const failures = [];

function assertBudget(next = 0) {
  if (spent + next > BUDGET_USD) {
    throw new Error(
      `Потолок бюджета: заплачено $${spent.toFixed(4)} из $${BUDGET_USD}, следующий вызов ~$${next.toFixed(3)}. Больше ничего не запрашивалось.`,
    );
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
    console.log(`кеш    ${label}`);
    return cached;
  }
  const estimate = ESTIMATE[endpoint] ?? 0.05;
  if (DRY_RUN) {
    planned += estimate;
    console.log(`вызвал бы  ${label}  (~$${estimate.toFixed(3)})`);
    return null;
  }
  assertBudget(estimate);
  const res = await axios.post(`https://api.dataforseo.com/v3/${endpoint}`, [payload], {
    auth: { username: LOGIN, password: PASSWORD },
    timeout: 180000,
  });
  const body = res.data;
  spent += Number(body.cost || 0);
  const task = body.tasks && body.tasks[0];
  const ok = body.status_code === 20000 && task && task.status_code === 20000;
  if (!ok) {
    const msg = task ? `${task.status_code} ${task.status_message}` : body.status_message;
    console.warn(`  ! ${label}: ${msg}`);
    failures.push({ label, msg });
    return body;
  }
  fs.mkdirSync(RAW, { recursive: true });
  fs.writeFileSync(file, JSON.stringify(body, null, 1));
  console.log(`оплачено ${label}  $${Number(body.cost || 0).toFixed(4)}`);
  return body;
}

// Украинский в русской выборке: мировая география включает Украину, а
// классификатор языка DataForSEO эти два не разделяет — в первом прогоне
// пришли «сайт для пошуку роботи» и «сайт для бухгалтерів бюджетних установ».
// Букв і, ї, є, ґ недостаточно: «пошуку роботи» целиком состоит из общих букв.
// Поэтому к буквам добавлены словарные маркеры — корни, которых в русском нет
// совсем. Короткие служебные слова («як», «що») намеренно не включены:
// как подстроки они срабатывают на русских словах.
// «установ» только как целое слово, иначе под фильтр попадает русская
// «установка сайта на хостинг». Границу слова здесь даёт не \b (в JavaScript
// он считает словом только латиницу и на кириллице не срабатывает),
// а проверка «дальше не идёт ещё одна кириллическая буква».
const UKRAINIAN = /[іїєґ]|пошук|безкоштовн|вартіст|створ|зробит|замовит|послуг|установ(?![а-яё])|бюджетних|потрібн|також|нерухом|будівель/i;

const result0 = (b) => (b && b.tasks && b.tasks[0] && b.tasks[0].result && b.tasks[0].result[0]) || null;
const norm = (k) => String(k || "").replace(/\s+/g, " ").trim().toLowerCase();

/** Приводит элемент ответа Labs к одной плоской строке. */
function toRow(item, lang, group, source) {
  const info = item.keyword_info || {};
  const props = item.keyword_properties || {};
  const intent = item.search_intent_info || {};
  const kw = norm(item.keyword);
  return {
    keyword: kw,
    geo: CITY[lang] && CITY[lang].test(kw) ? "1" : "",
    volume: info.search_volume == null ? "" : info.search_volume,
    competition: info.competition_level || "",
    cpc: info.cpc == null ? "" : info.cpc,
    difficulty: props.keyword_difficulty == null ? "" : props.keyword_difficulty,
    intent: intent.main_intent || "",
    lang,
    group,
    source,
  };
}

// ------------------------------------------------------------------ шаг 0 --

async function step0() {
  console.log("--- шаг 0: баланс и локации ---");
  if (DRY_RUN) console.log("(в сухом прогоне оба вызова бесплатны и выполняются)");

  try {
    const u = await axios.get("https://api.dataforseo.com/v3/appendix/user_data", {
      auth: { username: LOGIN, password: PASSWORD },
      timeout: 60000,
    });
    const d = result0(u.data) || {};
    const money = d.money || {};
    console.log(`баланс: $${Number(money.balance ?? NaN).toFixed(2)}   лимит в день: $${money.limit ?? "?"}`);
  } catch (e) {
    console.warn("  ! баланс прочитать не удалось:", e.message);
  }

  try {
    const l = await axios.get("https://api.dataforseo.com/v3/keywords_data/google_ads/locations", {
      auth: { username: LOGIN, password: PASSWORD },
      timeout: 120000,
    });
    const list = (l.data.tasks && l.data.tasks[0] && l.data.tasks[0].result) || [];
    const countries = list.filter((x) => x.location_type === "Country");
    const find = (name) => countries.find((x) => String(x.location_name).toLowerCase() === name);
    console.log(`локаций всего: ${list.length}, из них стран: ${countries.length}`);
    for (const name of ["russia", "belarus", "poland", "kazakhstan", "ukraine", "germany", "cyprus"]) {
      const hit = find(name);
      console.log(`  ${name.padEnd(12)} ${hit ? "есть, код " + hit.location_code : "НЕТ в наборе"}`);
    }

    // Названия городов нужны кластеризатору: город в запросе — это отдельная
    // страница, и склеивать «projektowanie stron gorzów» с «... legnica»
    // нельзя. Список руками не составить — в одной Польше их сотни, и ровно
    // на этом первая версия сломалась. Берём из того же бесплатного ответа.
    const cities = new Set();
    for (const x of list) {
      if (x.location_type !== "City") continue;
      if (!CITY_COUNTRIES.has(x.country_iso_code)) continue;
      const name = String(x.location_name || "").split(",")[0].trim().toLowerCase();
      if (name.length >= 4) cities.add(name);
    }
    fs.mkdirSync(OUT, { recursive: true });
    fs.writeFileSync(path.join(OUT, "cities.json"), JSON.stringify([...cities].sort()), "utf8");
    console.log(`городов сохранено: ${cities.size} → research/pseo/cities.json`);
  } catch (e) {
    console.warn("  ! список локаций прочитать не удалось:", e.message);
  }
  console.log("");
}

// ------------------------------------------------------- шаги 1 и 2: сбор --

async function collect(lang) {
  const rows = [];
  const geo = LOCATION ? { location_code: LOCATION } : {};

  // 1. phrase-match по каждому сиду
  for (const [group, seeds] of Object.entries(SEEDS[lang])) {
    for (const seed of seeds) {
      const body = await call(
        "dataforseo_labs/google/keyword_suggestions/live",
        {
          keyword: seed,
          language_code: lang,
          ...geo,
          limit: LIMIT,
          include_seed_keyword: true,
          filters: [["keyword_info.search_volume", ">=", MIN_VOLUME]],
          order_by: ["keyword_info.search_volume,desc"],
        },
        `suggestions · ${lang} · ${seed}`,
      );
      const res = result0(body);
      for (const it of (res && res.items) || []) rows.push(toRow(it, lang, group, `suggest:${seed}`));
    }
  }

  // 2. ideas по узкому набору сидов — только для поиска формулировок.
  //    Локация обязательна (см. IDEAS_LOCATION), поэтому частоты из ответа
  //    не берутся: они относились бы к одной стране.
  const ideas = USE_IDEAS ? (IDEAS_SEEDS[lang] || []) : [];
  if (ideas.length) {
    const body = await call(
      "dataforseo_labs/google/keyword_ideas/live",
      {
        keywords: ideas,
        language_code: lang,
        location_code: LOCATION || IDEAS_LOCATION[lang],
        limit: LIMIT,
        include_serp_info: false,
      },
      `ideas · ${lang} · ${ideas.length} сидов`,
    );
    const found = ((result0(body) || {}).items || []).map((it) => toRow(it, lang, "ideas", "ideas"));

    // 3. мировые частоты для найденного — тем же эндпоинтом, что и остальное,
    //    без локации. До 1000 запросов за вызов.
    const fresh = found.filter((r) => r.keyword && !rows.some((x) => x.keyword === r.keyword));
    for (let i = 0; i < fresh.length; i += 1000) {
      const batch = fresh.slice(i, i + 1000);
      const priced = await call(
        "keywords_data/google_ads/search_volume/live",
        { keywords: batch.map((r) => r.keyword), language_code: lang },
        `volume · ${lang} · ideas ${batch.length} шт.`,
      );
      const vol = new Map();
      for (const it of ((priced && priced.tasks && priced.tasks[0] && priced.tasks[0].result) || [])) {
        vol.set(norm(it.keyword), it);
      }
      for (const r of batch) {
        const hit = vol.get(r.keyword);
        // difficulty и intent оставляем из ответа ideas: они по одному рынку,
        // но это единственное, что по ним есть, и источник в CSV это называет.
        r.volume = hit && hit.search_volume != null ? hit.search_volume : "";
        r.competition = (hit && hit.competition_level) || "";
        r.cpc = hit && hit.cpc != null ? hit.cpc : "";
        rows.push(r);
      }
    }
  }

  return rows;
}

// ------------------------------------------------------------------ шаг 3 --

function sift(rows, lang) {
  const stop = STOP[lang] || [];
  const kept = new Map();
  const rejected = [];

  for (const r of rows) {
    if (!r.keyword) continue;
    const prev = kept.get(r.keyword);
    // дубликат: оставляем строку с заполненной частотой, источники склеиваем
    if (prev) {
      if (!String(prev.source).includes(r.source)) prev.source += " + " + r.source;
      if (prev.volume === "" && r.volume !== "") Object.assign(prev, { volume: r.volume, difficulty: r.difficulty, intent: r.intent });
      continue;
    }

    if (lang === "ru" && UKRAINIAN.test(r.keyword)) { rejected.push({ ...r, reason: "украинский" }); continue; }

    const hitStop = stop.find((s) => r.keyword.includes(s));
    if (hitStop) { rejected.push({ ...r, reason: "стоп-слово: " + hitStop }); continue; }
    if (r.volume !== "" && Number(r.volume) < MIN_VOLUME) { rejected.push({ ...r, reason: `частота < ${MIN_VOLUME}` }); continue; }
    if (r.volume !== "" && Number(r.volume) > MAX_VOLUME) { rejected.push({ ...r, reason: `частота > ${MAX_VOLUME}, чужой смысл` }); continue; }

    // Метка интента НЕ используется для отсева. Классификатор Google
    // систематически помечает навигационными шаблон «страница для <профессии>»
    // и технические термины: в первом прогоне под нож попали
    // «strona internetowa dla fotografa», «pozycjonowanie sklepu prestashop»
    // и даже «core web vitals» с частотой 880. Это лучшие кандидаты в лендинги,
    // а не навигационные запросы. Интент остаётся колонкой в CSV для человека.

    kept.set(r.keyword, { ...r });
  }

  const out = [...kept.values()].sort((a, b) => (Number(b.volume) || 0) - (Number(a.volume) || 0));
  return { kept: out, rejected };
}

// ------------------------------------------------------------------ шаг 4 --

const CSV_COLS = ["keyword", "volume", "difficulty", "intent", "geo", "competition", "cpc", "group", "source"];

function toCsv(rows, extraCol) {
  const cols = extraCol ? [...CSV_COLS, extraCol] : CSV_COLS;
  const esc = (v) => `"${String(v == null ? "" : v).replace(/"/g, '""')}"`;
  return [cols.join(","), ...rows.map((r) => cols.map((c) => esc(r[c])).join(","))].join("\n") + "\n";
}

async function main() {
  if (!LOGIN || !PASSWORD) throw new Error("DATAFORSEO_API_LOGIN / _PASSWORD не найдены в .env.local");
  fs.mkdirSync(OUT, { recursive: true });

  console.log(
    `География: ${LOCATION ? "локация " + LOCATION : "все доступные локации (location_code не передаётся)"}\n` +
    `Порог частоты: ${MIN_VOLUME}/мес, лимит строк на вызов: ${LIMIT}, языки: ${LANGS.join(", ")}\n` +
    `Бюджет: $${BUDGET_USD}${DRY_RUN ? "  (сухой прогон, платных вызовов не будет)" : ""}\n`,
  );

  await step0();

  const summary = [];
  for (const lang of LANGS) {
    const seedCount = Object.values(SEEDS[lang]).reduce((n, a) => n + a.length, 0);
    console.log(`--- ${lang}: ${seedCount} сидов + ideas ---`);
    const raw = await collect(lang);
    if (DRY_RUN) { console.log(""); continue; }

    const { kept, rejected } = sift(raw, lang);
    fs.writeFileSync(path.join(OUT, `keywords-${lang}.csv`), toCsv(kept), "utf8");
    fs.writeFileSync(path.join(OUT, `rejected-${lang}.csv`), toCsv(rejected, "reason"), "utf8");

    const band = (lo, hi) => kept.filter((r) => Number(r.volume) >= lo && (hi == null || Number(r.volume) < hi)).length;
    const easy = kept.filter((r) => r.difficulty !== "" && Number(r.difficulty) <= 20).length;
    // Рабочая выборка: низкочастотное и при этом не защищённое конкурентами.
    // Именно из неё берутся страницы первой партии.
    const work = kept.filter(
      (r) => Number(r.volume) >= 10 && Number(r.volume) < 200 && r.difficulty !== "" && Number(r.difficulty) <= 20,
    ).length;
    const geo = kept.filter((r) => r.geo === "1").length;
    summary.push({ lang, got: raw.length, kept: kept.length, rejected: rejected.length, b5: band(5, 10), b10: band(10, 50), b50: band(50, 200), b200: band(200, null), easy, work, geo });
    console.log(`  получено ${raw.length}, оставлено ${kept.length}, отсеяно ${rejected.length}, из оставленных difficulty<=20: ${easy}\n`);
  }

  if (DRY_RUN) {
    console.log(`Сухой прогон. Платных вызовов не делалось. Оценка полного прогона: ~$${planned.toFixed(2)} (без учёта уже закешированного).`);
    return;
  }

  const md = [
    "# Сбор запросов под программные лендинги",
    "",
    `Собрано: ${new Date().toISOString().slice(0, 16).replace("T", " ")} UTC`,
    `География: ${LOCATION ? "локация " + LOCATION : "все доступные локации"}. Порог: ${MIN_VOLUME}/мес.`,
    "",
    "| язык | получено | оставлено | отсеяно | 5–9 | 10–49 | 50–199 | 200+ | difficulty<=20 | в работу | с географией |",
    "| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |",
    ...summary.map((s) => `| ${s.lang} | ${s.got} | ${s.kept} | ${s.rejected} | ${s.b5} | ${s.b10} | ${s.b50} | ${s.b200} | ${s.easy} | ${s.work} | ${s.geo} |`),
    "",
    `Всего оставлено: ${summary.reduce((n, s) => n + s.kept, 0)}.`,
    `Рабочая выборка (10–199 в месяц и difficulty до 20): ${summary.reduce((n, s) => n + s.work, 0)}.`,
    `С географией в запросе: ${summary.reduce((n, s) => n + s.geo, 0)} — колонка geo в CSV.`,
    "",
    "## Про полосу 5–9",
    "",
    "Она всегда нулевая, и это не ошибка сбора. Google Keyword Planner округляет",
    "частоты до своей сетки, минимальное ненулевое значение в ней — 10. Запрос,",
    "который ищут от 1 до 9 раз в месяц, показывается либо как 0, либо подтянутым",
    "к 10. Поэтому порог «от 5 в месяц» на практике означает «от 10»: ниже лежит",
    "предел измерения источника, а не отсутствие спроса. Ahrefs и Semrush берут",
    "основу оттуда же и того же предела не обходят.",
    "",
    "Файлы: keywords-<lang>.csv — отобранное, rejected-<lang>.csv — отсеянное с причиной.",
    "Отсев стоит перечитать: стоп-лист консервативный, но мог зацепить лишнее.",
    "",
    failures.length ? "## Неудачные вызовы\n\n" + failures.map((f) => `- ${f.label}: ${f.msg}`).join("\n") : "Неудачных вызовов нет.",
    "",
  ].join("\n");
  fs.writeFileSync(path.join(OUT, "summary.md"), md, "utf8");

  console.log(md.split("\n").slice(4).join("\n"));
  console.log(`\nЗаписано в research/pseo/. Заплачено этим прогоном $${spent.toFixed(4)}, из кеша взято на $${cachedCost.toFixed(4)}.`);
}

main().catch((e) => {
  const detail = e.response ? JSON.stringify(e.response.data).slice(0, 500) : e.message;
  console.error("\nОшибка: " + detail);
  process.exit(1);
});
