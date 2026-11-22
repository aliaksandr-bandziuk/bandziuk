// scripts/dataforseo/competitor-backlinks.cjs
//
// Откуда конкуренты берут ссылки и какой механикой их можно повторить.
// Не «надо больше ссылок», а список конкретных доменов, которые ссылаются
// сразу на нескольких конкурентов и не ссылаются на нас.
//
// Три шага:
//   1. bulk_referring_domains — сколько ссылающихся доменов у нас и у каждого
//      конкурента. Это масштаб разрыва, без него разговор беспредметный.
//   2. domain_intersection — домены, которые ссылаются на двух и более
//      конкурентов, но не на нас. Чем больше конкурентов, тем выше вероятность,
//      что размещение там доступно всем, а не досталось по знакомству.
//   3. Разбор механики: по адресу ссылающейся страницы и анкору видно, что это
//      было — каталог, рейтинг, гостевая статья, пресс-релиз, форум, профиль.
//
//   node scripts/dataforseo/competitor-backlinks.cjs --dry-run
//   node scripts/dataforseo/competitor-backlinks.cjs --budget 3
//   node scripts/dataforseo/competitor-backlinks.cjs --market PL/PL --domains 10
//
// Вывод: research/dataforseo/competitor-backlinks.{csv,md}

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
const BUDGET_USD = Number(argVal("--budget", 3));
const PER_MARKET = Number(argVal("--domains", 8));
const ONLY_MARKET = argVal("--market", "");
const ROWS = Number(argVal("--rows", 1000));
const PROBE = process.argv.includes("--probe");

const ESTIMATE = {
  "backlinks/bulk_referring_domains/live": 0.03,
  "backlinks/referring_domains/live": 0.06,
};
let spent = 0, cachedCost = 0, planned = 0;

const cacheKey = (e, p) => path.join(RAW, `${e.replace(/[^a-z0-9]+/gi, "_")}__${crypto.createHash("sha1").update(e + JSON.stringify(p)).digest("hex").slice(0, 16)}.json`);

async function call(endpoint, payload, label) {
  const file = cacheKey(endpoint, payload);
  if (fs.existsSync(file)) {
    const cached = JSON.parse(fs.readFileSync(file, "utf8"));
    cachedCost += Number(cached.cost || 0);
    console.log(`cache  ${label}`);
    return cached;
  }
  const estimate = ESTIMATE[endpoint] ?? 0.1;
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

// Механика размещения — по адресу ссылающейся страницы и анкору. Это догадка
// по форме адреса, а не факт: в отчёте так и помечено, проверять глазами.
function mechanic(url = "", anchor = "") {
  const u = String(url).toLowerCase();
  if (/\/(katalog|catalog|firmy|firm|baza-firm|wizytowk|directory|listing|spis|yellow|panorama)/.test(u)) return "каталог фирм";
  if (/\/(ranking|rankingi|top-?\d|najlepsz|best-|porownanie|compare|reviews?|opinie)/.test(u)) return "рейтинг или обзор";
  if (/\/(blog|artykul|artykuly|wpis|post|news|aktualnosci|wiadomosci|publikacje|poradnik)/.test(u)) return "статья в чужом блоге";
  if (/(press|pr-|prnews|informacja-prasowa|komunikat)/.test(u)) return "пресс-релиз";
  if (/(forum|thread|viewtopic|discussion|community|grupa)/.test(u)) return "форум или сообщество";
  if (/(linkedin|facebook|twitter|x\.com|instagram|youtube|medium|dev\.to|github|behance|dribbble|producthunt)/.test(u)) return "профиль на площадке";
  if (/(praca|jobs|oferty-pracy|career|kariera)/.test(u)) return "вакансия";
  if (/(wydarzenia|event|konferencj|meetup|webinar|szkolenia)/.test(u)) return "событие или выступление";
  if (/\.(edu|gov)(\.|\/)|uczelnia|uniwersytet|szkola/.test(u)) return "учебное или государственное";
  if (/^https?:\/\/[^/]+\/?$/.test(u)) return "ссылка с главной (часто подвал)";
  if (/(developed by|realizacja|wykonanie|создание сайта|разработка сайта|made by)/i.test(anchor)) return "подпись исполнителя в подвале";
  return "прочее";
}

async function main() {
  if (!DRY_RUN && !CACHE_ONLY && (!LOGIN || !PASSWORD)) throw new Error("Нет доступов DATAFORSEO в .env.local");
  const land = JSON.parse(fs.readFileSync(path.join(OUT, "competitor-landscape.json"), "utf8"));

  // Кого разбираем: живые исполнители из выдачи, по рынкам.
  const byMarket = {};
  for (const [market, sets] of Object.entries(land.landscape || {})) {
    if (ONLY_MARKET && market !== ONLY_MARKET) continue;
    const taken = [];
    for (const [tag, rows] of Object.entries(sets)) {
      if (/заголовки/.test(tag) || !Array.isArray(rows)) continue;
      for (const r of rows) {
        if (!r.domain || r.kind !== "исполнитель") continue;
        const d = r.domain.replace(/^www\./, "");
        if (!taken.includes(d)) taken.push(d);
        if (taken.length >= PER_MARKET) break;
      }
      if (taken.length >= PER_MARKET) break;
    }
    if (taken.length) byMarket[market] = taken;
  }
  const all = [...new Set(Object.values(byMarket).flat())];
  console.log(`рынков ${Object.keys(byMarket).length}, домотов ${all.length}`);

  // Шаг 1: масштаб разрыва.
  const scale = [];
  const bulk = await call("backlinks/bulk_referring_domains/live", { targets: [OUR, ...all] }, `ссылающиеся домены: ${all.length + 1} сайтов`);
  const bulkRes = result0(bulk);
  for (const it of (bulkRes && bulkRes.items) || []) {
    scale.push({ target: it.target, referringDomains: it.referring_domains ?? null, referringMainDomains: it.referring_main_domains ?? null, backlinks: it.backlinks ?? null });
  }
  scale.sort((a, b) => (b.referringMainDomains ?? b.referringDomains ?? 0) - (a.referringMainDomains ?? a.referringDomains ?? 0));

  // Шаг 2: ссылающиеся домены по каждому конкуренту отдельно.
  //
  // Эндпоинт domain_intersection здесь не годится: его intersection_mode
  // принимает только all и partial, а в ответе нет ни адреса ссылающейся
  // страницы, ни анкора — одни метрики домена (проверено по документации
  // 22.11.2026). Поэтому берём доноров по каждому конкуренту и пересекаем
  // у себя: так видно, сколько конкурентов стоит у каждого донора.
  const donors = new Map();   // донор -> { rivals:Set, rank, backlinks }
  const ours = new Set();

  async function referringDomains(target, label) {
    const body = await call("backlinks/referring_domains/live", {
      target, limit: ROWS, backlinks_status_type: "live",
      exclude_internal_backlinks: true, include_subdomains: true,
    }, label);
    const res = result0(body);
    const items = (res && res.items) || [];
    if (PROBE && items[0]) console.log("       поля ответа:", Object.keys(items[0]).join(", "));
    return items;
  }

  // Кто уже ссылается на нас — этих из списка убираем.
  for (const it of await referringDomains(OUR, `наши доноры: ${OUR}`)) {
    const d = (it.domain || "").replace(/^www\./, "");
    if (d) ours.add(d);
  }
  console.log(`       на нас ссылаются: ${ours.size} доменов`);

  for (const [market, domains] of Object.entries(byMarket)) {
    for (const rival of domains) {
      const items = await referringDomains(rival, `${market} · доноры ${rival}`);
      console.log(`       ${rival}: доноров ${items.length}`);
      for (const it of items) {
        const d = (it.domain || "").replace(/^www\./, "");
        if (!d || ours.has(d) || d === OUR) continue;
        const row = donors.get(d) || { donor: d, markets: new Set(), rivals: new Set(), rank: it.rank ?? null, backlinks: 0, dofollow: 0, firstSeen: it.first_seen || "" };
        row.markets.add(market);
        row.rivals.add(rival);
        row.rank = Math.max(row.rank ?? 0, it.rank ?? 0);
        row.backlinks += Number(it.backlinks || 0);
        row.dofollow += Number((it.referring_links_attributes && it.referring_links_attributes.dofollow) || 0);
        donors.set(d, row);
      }
    }
  }

  const rows = [...donors.values()]
    .filter((r) => r.rivals.size >= 2)
    .map((r) => ({
      markets: [...r.markets].join(" "),
      donor: r.donor,
      rank: r.rank,
      rivals: r.rivals.size,
      rivalList: [...r.rivals].join(" "),
      backlinks: r.backlinks,
      firstSeen: String(r.firstSeen).slice(0, 10),
      mechanic: mechanic("https://" + r.donor + "/", ""),
    }));
  rows.sort((a, b) => b.rivals - a.rivals || (b.rank ?? 0) - (a.rank ?? 0));

  if (DRY_RUN) { console.log(`\nпробный прогон: вызовов на ~$${planned.toFixed(3)}, лимит $${BUDGET_USD}`); return; }

  const head = ["markets", "donor", "rank", "rivals", "backlinks", "firstSeen", "mechanic", "rivalList"];
  fs.writeFileSync(path.join(OUT, "competitor-backlinks.csv"),
    [head.join(","), ...rows.map((r) => head.map((h) => {
      const v = r[h]; return v == null ? "" : /[",\n]/.test(String(v)) ? `"${String(v).replace(/"/g, '""')}"` : String(v);
    }).join(","))].join("\n"));

  const L = ["# Откуда конкуренты берут ссылки", "", `Собрано ${new Date().toISOString().slice(0, 10)}.`, "",
    "## Масштаб разрыва", "", "| Сайт | Ссылающихся доменов | Всего ссылок |", "|---|---|---|"];
  for (const s of scale) L.push(`| ${s.target} | ${s.referringMainDomains ?? s.referringDomains ?? "—"} | ${s.backlinks ?? "—"} |`);
  L.push("", `## Доноры, которые ссылаются на нескольких конкурентов и не на нас`, "",
    `Всего таких доноров: ${rows.length}. Механика определена по форме адреса ссылающейся страницы — это догадка, проверять глазами.`, "");
  const byMech = {};
  for (const r of rows) byMech[r.mechanic] = (byMech[r.mechanic] || 0) + 1;
  L.push("| Механика | Доноров |", "|---|---|");
  for (const [m, n] of Object.entries(byMech).sort((a, b) => b[1] - a[1])) L.push(`| ${m} | ${n} |`);
  L.push("");
  for (const market of Object.keys(byMarket)) {
    const sel = rows.filter((r) => r.markets.includes(market)).slice(0, 80);
    if (!sel.length) continue;
    L.push(`### ${market}`, "", "| Донор | Ранг | Конкурентов | Ссылок | Первая замечена | У кого стоит |", "|---|---|---|---|---|---|");
    for (const r of sel) L.push(`| ${r.donor} | ${r.rank ?? "—"} | ${r.rivals} | ${r.backlinks} | ${r.firstSeen} | ${r.rivalList} |`);
    L.push("");
  }
  fs.writeFileSync(path.join(OUT, "competitor-backlinks.md"), L.join("\n") + "\n");
  console.log(`\nготово: research/dataforseo/competitor-backlinks.{csv,md}`);
  console.log(`доноров ${rows.length}, потрачено $${spent.toFixed(4)} (из кеша на $${cachedCost.toFixed(4)})`);
}
main().catch((e) => { console.error("\n" + (e.response ? JSON.stringify(e.response.data).slice(0, 400) : e.message)); process.exit(1); });
