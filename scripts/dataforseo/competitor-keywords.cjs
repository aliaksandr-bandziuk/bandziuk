// scripts/dataforseo/competitor-keywords.cjs
//
// Длинный хвост конкурентов. Берём домены, которые парсер выдачи нашёл живыми
// исполнителями, и спрашиваем все фразы, по которым они стоят в топ-20. Это
// проверенный коммерческий хвост: за эти фразы кто-то уже держит страницы и
// получает по ним клиентов.
//
// Почему не подсказки по ключевым словам. Подсказки идут от головного шаблона
// («seo for», «сайт для») и приносят потребительский хвост: «нобд сайт для
// учителей», «ак орда сайт». Фразы конкурента отобраны самим рынком.
//
// На выходе по каждой фразе: частота, конкуренция, сколько конкурентов по ней
// стоит, лучшая позиция среди них, адрес их страницы, и есть ли страница у нас.
//
//   node scripts/dataforseo/competitor-keywords.cjs --dry-run
//   node scripts/dataforseo/competitor-keywords.cjs --budget 3
//   node scripts/dataforseo/competitor-keywords.cjs --domains 8 --max 500
//
// Вывод: research/dataforseo/competitor-keywords.{csv,md}

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const axios = require("axios");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env.local"), quiet: true });

const ROOT = path.resolve(__dirname, "../..");
const OUT = path.join(ROOT, "research", "dataforseo");
const RAW = path.join(OUT, "raw");
const FIX = path.join(ROOT, "src", "dev-fixtures");

const LOGIN = process.env.DATAFORSEO_API_LOGIN;
const PASSWORD = process.env.DATAFORSEO_API_PASSWORD;
const DRY_RUN = process.argv.includes("--dry-run");
const CACHE_ONLY = process.argv.includes("--cache-only");
const argVal = (f, d) => { const i = process.argv.indexOf(f); return i > -1 ? process.argv[i + 1] : d; };
const BUDGET_USD = Number(argVal("--budget", 3));
const PER_MARKET = Number(argVal("--domains", 8));
const MIN_VOLUME = Number(argVal("--min", 10));
const MAX_VOLUME = Number(argVal("--max", 1000));
const ROWS = Number(argVal("--rows", 1000));

// Labs отказывает на паре «Польша + русский» (40501), поэтому русскоязычные
// домены спрашиваем по Казахстану — там тот же язык и запрос проходит.
const MARKETS = {
  "EN/US": { location_code: 2840, language_code: "en" },
  "PL/PL": { location_code: 2616, language_code: "pl" },
  "RU/PL": { location_code: 2398, language_code: "ru" },
  "RU/KZ": { location_code: 2398, language_code: "ru" },
};

const ESTIMATE = { "dataforseo_labs/google/ranked_keywords/live": 0.12 };
let spent = 0, cachedCost = 0, planned = 0;

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
  const estimate = ESTIMATE[endpoint] ?? 0.12;
  if (DRY_RUN) { planned += estimate; console.log(`would call ${label} (~$${estimate.toFixed(3)})`); return null; }
  if (CACHE_ONLY) { console.log(`пропуск (нет в кеше) ${label}`); return null; }
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
  console.log(`paid   ${label}  $${Number(body.cost || 0).toFixed(4)}`);
  return body;
}
const result0 = (b) => (b && b.tasks && b.tasks[0] && b.tasks[0].result && b.tasks[0].result[0]) || null;

// --------------------------------------------------------- что уже есть у нас --
const STOP = new Set(["the","a","an","and","or","for","to","in","of","with","my","your","our","best","top","cheap","near","me","dla","w","na","do","od","z","za","się","для","и","в","на","с","по","под","от","сайт","сайта","site","website","strona","strony"]);
const stem = (w) => (w.length > 5 ? w.slice(0, 5) : w);
const words = (s) => String(s).toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").split(" ").filter((w) => w && !STOP.has(w));
function fixtureIndex() {
  const idx = [];
  for (const f of fs.readdirSync(FIX)) {
    if (!/\.(en|pl|ru)\.ts$/.test(f)) continue;
    const src = fs.readFileSync(path.join(FIX, f), "utf8");
    const pick = (re) => { const m = src.match(re); return m ? m[1] : ""; };
    const blob = [pick(/slug:\s*"([^"]+)"/).replace(/-/g, " "), pick(/metaTitle:\s*"([^"]+)"/), pick(/h1:\s*"([^"]+)"/)].join(" ");
    idx.push({ file: f, lang: f.match(/\.(en|pl|ru)\.ts$/)[1], set: new Set(words(blob).map(stem)) });
  }
  return idx;
}
function coveredBy(idx, phrase, lang) {
  const w = words(phrase).map(stem);
  if (!w.length) return "";
  for (const p of idx) if (p.lang === lang && w.every((x) => p.set.has(x))) return p.file;
  return "";
}

// Фильтры по смыслу: наша услуга, не чужая тема, не инструмент и не обучение.
const SERVICE = /(seo|geo|aeo|llm|web design|website|web development|landing|pozycjonowan|strona|strony|www|sklep internetowy|audyt|сайт|продвижен|раскрутк|лендинг|веб|разработк|оптимизац|реклам|ads|adwords|marketing|marketing)/i;
const OFFTOPIC = /(вид на жительство|внж|виза|visa|знакомств|dating|скачать|download|praca|вакансии|работа|резюме|kurs|szkolenie|course|tutorial|бесплатно|darmow|free |porn|adult)/i;
const BRAND = /(widoczni|pikseo|devagroup|wenet|afterweb|boostagency|mojodesign|webtheoria|limdez|natasalagou|absolute|semrush|ahrefs|surfer|senuto)/i;

async function main() {
  if (!DRY_RUN && !CACHE_ONLY && (!LOGIN || !PASSWORD)) throw new Error("Нет доступов DATAFORSEO в .env.local");
  const land = JSON.parse(fs.readFileSync(path.join(OUT, "competitor-landscape.json"), "utf8"));
  const idx = fixtureIndex();
  const picks = [];
  for (const [market, sets] of Object.entries(land.landscape || {})) {
    if (!MARKETS[market]) continue;
    const pool = [];
    for (const [tag, rows] of Object.entries(sets)) {
      if (/заголовки/.test(tag) || !Array.isArray(rows)) continue;
      pool.push(...rows);
    }
    const taken = [];
    for (const r of pool) {
      if (!r.domain || r.kind !== "исполнитель") continue;
      const d = r.domain.replace(/^www\./, "");
      if (taken.includes(d)) continue;
      taken.push(d);
      if (taken.length >= PER_MARKET) break;
    }
    for (const d of taken) picks.push({ market, domain: d });
  }
  console.log(`домотов на разбор: ${picks.length}`);

  const tally = new Map();
  for (const { market, domain } of picks) {
    const m = MARKETS[market];
    const body = await call("dataforseo_labs/google/ranked_keywords/live", {
      target: domain, location_code: m.location_code, language_code: m.language_code, limit: ROWS,
      order_by: ["keyword_data.keyword_info.search_volume,desc"],
      filters: [["ranked_serp_element.serp_item.rank_group", "<=", 20], "and", ["keyword_data.keyword_info.search_volume", ">=", MIN_VOLUME]],
    }, `${market} · фразы ${domain}`);
    const res = result0(body);
    const items = (res && res.items) || [];
    console.log(`       ${domain}: фраз ${items.length}`);
    for (const it of items) {
      const kd = it.keyword_data || {};
      const kw = kd.keyword;
      if (!kw) continue;
      const info = kd.keyword_info || {};
      const serp = (it.ranked_serp_element || {}).serp_item || {};
      const key = `${market}|${kw}`;
      const row = tally.get(key) || {
        market, keyword: kw, volume: info.search_volume || 0,
        competition: info.competition != null ? Math.round(info.competition * 100) : null,
        cpc: info.cpc != null ? Number(info.cpc).toFixed(2) : null,
        difficulty: (kd.keyword_properties || {}).keyword_difficulty ?? null,
        rivals: 0, bestPosition: 99, bestRival: "", bestUrl: "",
      };
      row.rivals += 1;
      const pos = serp.rank_group || 99;
      if (pos < row.bestPosition) { row.bestPosition = pos; row.bestRival = domain; row.bestUrl = serp.url || ""; }
      tally.set(key, row);
    }
  }

  const lang = (m) => (m.startsWith("EN") ? "en" : m.startsWith("PL") ? "pl" : "ru");
  const rows = [...tally.values()].map((r) => ({
    ...r, wordCount: r.keyword.trim().split(/\s+/).length,
    covered: coveredBy(idx, r.keyword, lang(r.market)),
  })).map((r) => ({
    ...r, covered: r.covered ? "да" : "нет", coveredBy: r.covered,
    // Кандидат: наша услуга, не чужая тема и не бренд, частота в пределах
    // хвоста, несколько слов, и страницы у нас нет.
    chance: SERVICE.test(r.keyword) && !OFFTOPIC.test(r.keyword) && !BRAND.test(r.keyword)
      && r.volume >= MIN_VOLUME && r.volume <= MAX_VOLUME && r.wordCount >= 2 && !r.covered ? "кандидат" : "",
  }));
  rows.sort((a, b) => (b.chance ? 1 : 0) - (a.chance ? 1 : 0) || b.rivals - a.rivals || b.volume - a.volume);

  if (DRY_RUN) { console.log(`\nпробный прогон: вызовов на ~$${planned.toFixed(3)}, лимит $${BUDGET_USD}`); return; }
  const head = ["market", "keyword", "volume", "wordCount", "competition", "cpc", "difficulty", "rivals", "bestPosition", "bestRival", "bestUrl", "covered", "coveredBy", "chance"];
  fs.writeFileSync(path.join(OUT, "competitor-keywords.csv"),
    [head.join(","), ...rows.map((r) => head.map((h) => {
      const v = r[h]; return v == null ? "" : /[",\n]/.test(String(v)) ? `"${String(v).replace(/"/g, '""')}"` : String(v);
    }).join(","))].join("\n"));

  const L = ["# Длинный хвост конкурентов", "", `Собрано ${new Date().toISOString().slice(0, 10)}: фразы, по которым найденные исполнители стоят в топ-20.`, "",
    `Всего фраз: ${rows.length}. Кандидатов (наша услуга, частота ${MIN_VOLUME}–${MAX_VOLUME}, страницы у нас нет): ${rows.filter((r) => r.chance).length}.`, "",
    `Колонка «конкурентов» важнее частоты: если за фразу держатся несколько исполнителей, она приводит клиентов.`, ""];
  for (const market of Object.keys(MARKETS)) {
    const cand = rows.filter((r) => r.market === market && r.chance);
    if (!cand.length) continue;
    L.push(`## ${market}`, "", `Кандидатов: ${cand.length}.`, "", "| Фраза | Частота | Конкурентов | Лучшая поз. | Конк. | CPC | Чья страница |", "|---|---|---|---|---|---|---|");
    for (const r of cand.slice(0, 80)) L.push(`| ${r.keyword} | ${r.volume} | ${r.rivals} | ${r.bestPosition} | ${r.competition ?? "—"} | ${r.cpc ?? "—"} | ${r.bestRival} |`);
    L.push("");
  }
  fs.writeFileSync(path.join(OUT, "competitor-keywords.md"), L.join("\n") + "\n");
  console.log(`\nготово: research/dataforseo/competitor-keywords.{csv,md}`);
  console.log(`фраз ${rows.length}, кандидатов ${rows.filter((r) => r.chance).length}`);
  console.log(`потрачено $${spent.toFixed(4)} (из кеша на $${cachedCost.toFixed(4)})`);
}
main().catch((e) => { console.error("\n" + (e.response ? JSON.stringify(e.response.data).slice(0, 400) : e.message)); process.exit(1); });
