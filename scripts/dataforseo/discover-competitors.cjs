// scripts/dataforseo/discover-competitors.cjs
//
// Разведка конкурентов в три стадии. Не «кто вообще есть на рынке», а кто
// стоит в выдаче по тем запросам, за которые мы платим страницами.
//
//   стадия serp   — по списку наших коммерческих запросов (research/dataforseo/
//                   keywords-*.csv, интент commercial/transactional) спрашиваем
//                   DataForSEO, какие домены встречаются в топе чаще всего.
//                   Отдельным списком — запросы про ИИ-видимость: там своя
//                   выдача и свои игроки.
//   стадия pages  — у найденных домотов берём страницы-кормильцы: какие адреса
//                   приносят им органический трафик и по скольким запросам.
//                   Это показывает, какой тип страниц у них работает.
//   стадия onpage — разбор самих страниц: тайтл, описание, заголовки H1–H3,
//                   объём текста, внутренние и внешние ссылки, время ответа.
//
// Контроль: по каждому вызову печатается, сколько строк вернулось. Нули по
// всей стадии означают, что запрос не прошёл, а не что конкурентов нет.
// Домены из каталогов и бирж помечаются отдельно: изучать у них нечего,
// но знать, сколько мест в топе они занимают, нужно.
//
//   node scripts/dataforseo/discover-competitors.cjs --dry-run
//   node scripts/dataforseo/discover-competitors.cjs --stage serp
//   node scripts/dataforseo/discover-competitors.cjs --budget 2
//   node scripts/dataforseo/discover-competitors.cjs --cache-only
//
// Вывод: research/dataforseo/competitor-landscape.{json,md}

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
const CACHE_ONLY = process.argv.includes("--cache-only");
const DEBUG = process.argv.includes("--debug");
const argVal = (flag, def) => {
  const i = process.argv.indexOf(flag);
  return i > -1 ? process.argv[i + 1] : def;
};
const BUDGET_USD = Number(argVal("--budget", 3));
const STAGE = argVal("--stage", "all");
const TOP_QUERIES = Number(argVal("--queries", 80));
const TOP_DOMAINS = Number(argVal("--domains", 6));
const TOP_PAGES = Number(argVal("--pages", 3));
const ONPAGE_DOMAINS = Number(argVal("--onpage-domains", 10));
const SERP_QUERIES = Number(argVal("--serp-queries", 40));

const MARKETS = [
  { key: "EN/US", lang: "en", location_code: 2840, language_code: "en" },
  { key: "PL/PL", lang: "pl", location_code: 2616, language_code: "pl" },
  { key: "RU/PL", lang: "ru", location_code: 2616, language_code: "ru" },
  { key: "RU/KZ", lang: "ru", location_code: 2398, language_code: "ru" },
];

// Запросы про ИИ-видимость: в наших csv их почти нет, а выдача по ним своя.
const AI_QUERIES = {
  en: ["ai seo", "ai seo services", "generative engine optimization", "answer engine optimization", "geo agency", "llm seo", "ai visibility", "chatgpt seo", "ai search optimization", "ai overviews optimization"],
  pl: ["ai seo", "pozycjonowanie w chatgpt", "widoczność w chatgpt", "optymalizacja pod ai", "llm seo", "seo ai"],
  ru: ["ai seo", "продвижение в chatgpt", "видимость в нейросетях", "продвижение в нейросетях", "llm seo", "оптимизация под ии"],
};

// Каталоги, биржи, доски и рейтинги. Журнал research/competitors.md показал,
// что они занимают 2–4 места из 10 почти в каждой географической выдаче.
// Изучать их приёмы бессмысленно: это другой тип сайта.
const AGGREGATORS = /^(www\.)?(clutch\.co|designrush\.com|themanifest\.com|sortlist\.com|agencies\.semrush\.com|semrush\.com|revenuebase\.ai|agencylist\.com|digitalagencynetwork\.com|upwork\.com|fiverr\.com|freelancer\.com|yelp\.com|builtin\.com|goodfirms\.co|trustpilot\.com|oferteo\.pl|fixly\.pl|olx\.|obyavleniya\.kaspi\.kz|profi\.kz|ratingruneta\.ru|uslugi\.yandex\.|yandex\.|google\.|youtube\.com|facebook\.com|linkedin\.com|instagram\.com|reddit\.com|quora\.com|medium\.com|wikipedia\.org|g2\.com|capterra\.com|producthunt\.com)/i;
// Площадки конструкторов и крупных сервисов: в выдаче стоят их блоги и лендинги,
// а не исполнители. Для изучения конверсий годятся, для сравнения сил — нет.
const PLATFORMS = /^(www\.)?(wix\.com|squarespace\.com|shopify\.com|wordpress\.com|webflow\.com|hubspot\.com|ahrefs\.com|moz\.com|signup\.moz\.com|searchenginejournal\.com|searchengineland\.com|backlinko\.com|neilpatel\.com|surferseo\.com|semrush\.com|similarweb\.com|wordstream\.com|mailchimp\.com|salesforce\.com|zapier\.com|vercel\.com|amplitude\.com|unisender\.com|sendpulse\.|tilda\.|chatgpt\.com|developers\.google\.com|forbes\.com|wikipedia\.org|reputation\.com|seo\.ai|seoptimer\.com)/i;
// Курсы, вузы и работные сайты. В казахстанской выдаче они заняли верх списка:
// по запросам вроде «сео продвижение сайтов» ищут не исполнителя, а обучение.
// Записывать их в конкурентов — значит изучать не тот рынок (проверено 22.11.2026).
const LEARNING = /^(www\.)?(skillbox\.|lerna\.|practicum\.yandex\.|foxford\.|media\.foxford\.|netology\.|geekbrains\.|coursera\.org|udemy\.com|stepik\.org|careerist\.ru|kazahstan\.careerist\.ru|hh\.|rabota\.|indeed\.|glassdoor\.|convertmonster\.ru|cxl\.com|tilda\.education)/i;

const ESTIMATE = {
  "serp/google/organic/live/advanced": 0.0025,
  "dataforseo_labs/google/serp_competitors/live": 0.06,
  "dataforseo_labs/google/relevant_pages/live": 0.05,
  "on_page/instant_pages": 0.0015,
};
let spent = 0, cachedCost = 0, planned = 0;

function assertBudget(next = 0) {
  if (spent + next > BUDGET_USD) throw new Error(`Лимит бюджета: потрачено $${spent.toFixed(4)} из $${BUDGET_USD}, следующий вызов ~$${next.toFixed(3)}.`);
}
function cacheKey(endpoint, payload) {
  const h = crypto.createHash("sha1").update(endpoint + JSON.stringify(payload)).digest("hex").slice(0, 16);
  return path.join(RAW, `${endpoint.replace(/[^a-z0-9]+/gi, "_")}__${h}.json`);
}
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function call(endpoint, payload, label) {
  const file = cacheKey(endpoint, payload);
  if (fs.existsSync(file)) {
    const cached = JSON.parse(fs.readFileSync(file, "utf8"));
    cachedCost += Number(cached.cost || 0);
    console.log(`cache  ${label}`);
    return cached;
  }
  const estimate = ESTIMATE[endpoint] ?? 0.05;
  if (DRY_RUN) { planned += estimate; console.log(`would call ${label} (~$${estimate.toFixed(4)})`); return null; }
  if (CACHE_ONLY) { console.log(`пропуск (нет в кеше) ${label}`); return null; }
  assertBudget(estimate);
  const post = () => axios.post(`https://api.dataforseo.com/v3/${endpoint}`, [payload], { auth: { username: LOGIN, password: PASSWORD }, timeout: 180000 });
  let res = await post();
  const limited = (b) => b && b.tasks && b.tasks[0] && b.tasks[0].status_code === 40202;
  if (limited(res.data)) {
    console.log(`       лимит в минуту, жду 60 с и повторяю: ${label}`);
    await sleep(60000);
    res = await post();
  }
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

// Ядро услуг: запросы, под которые у нас сделаны страницы. Берём их руками,
// потому что csv прежних исследований перекошены в одну тему (английский — в
// «website consultant», польский — в цену страницы) и не описывают наш фронт.
const CORE = {
  en: ["seo consultant", "seo freelancer", "web design cyprus", "website performance audit", "llm seo services", "ai ready seo", "seo for dentists", "seo for law firms", "ecommerce seo services", "website redesign seo", "seo audit price", "freelance web developer"],
  pl: ["pozycjonowanie stron warszawa", "tworzenie stron internetowych warszawa", "agencja seo warszawa", "audyt seo cena", "pozycjonowanie sklepu internetowego", "strona internetowa dla firm", "specjalista seo warszawa", "pozycjonowanie lokalne", "freelancer seo", "strona internetowa dla gabinetu"],
  ru: ["продвижение сайта", "создание сайта алматы", "продвижение юридического сайта", "сколько стоит продвижение сайта", "продвижение сайта за границей", "seo специалист", "сайт под ключ цена", "продвижение сайта в сша"],
};

// Казахстан — отдельный случай: общий русский список перекошен в запросы про
// продвижение во Франции и США, а в казахстанской выдаче по ним стоят курсы.
// Здесь нужен местный заказчицкий запрос.
const CORE_BY_MARKET = {
  "RU/KZ": ["создание сайта алматы", "создание сайта астана", "заказать сайт алматы", "продвижение сайта алматы", "продвижение сайта астана", "seo продвижение алматы", "веб студия алматы", "разработка сайтов алматы", "интернет магазин алматы заказать", "сайт под ключ алматы"],
};

// Search Console: запросы, по которым нас уже показывают. Это фронт, на котором
// мы стоим прямо сейчас, а не желаемый. Язык определяем по письму самой фразы.
function gscQueries(lang) {
  const dir = path.join(ROOT, "research", "search-console");
  if (!fs.existsSync(dir)) return [];
  const file = fs.readdirSync(dir).filter((f) => /^gsc-queries.*\.csv$/.test(f)).sort().pop();
  if (!file) return [];
  const rows = fs.readFileSync(path.join(dir, file), "utf8").split(/\r?\n/).slice(1).filter(Boolean);
  const out = [];
  for (const line of rows) {
    const m = line.match(/^("([^"]*)"|[^,]*),([^,]*),([^,]*),/);
    if (!m) continue;
    const kw = (m[2] ?? m[1] ?? "").trim();
    const impressions = Number(m[4] || 0);
    if (!kw || kw.length < 6) continue;
    const l = /[а-яё]/i.test(kw) ? "ru" : /[ąęśćżźłń]|pozycjon|stron|internetow|cennik|firmy/i.test(kw) ? "pl" : "en";
    if (l !== lang) continue;
    // Вопросы и «как сделать» ведут в чужие блоги: конкурент по ним — не исполнитель.
    if (/^(how|what|why|should|can|does|is|are|когда|как|что|почему|czy|jak|co)\b/i.test(kw)) continue;
    out.push({ keyword: kw, impressions });
  }
  out.sort((a, b) => b.impressions - a.impressions);
  return out;
}

// ------------------------------------------------------------- наши запросы --
// Берём из уже собранных csv только то, за что платят: коммерческий и
// транзакционный интент. Информационные запросы ведут в чужие блоги, а нам
// нужны те, по которым выбирают исполнителя.
function moneyQueries(lang) {
  const file = path.join(OUT, `keywords-${lang}.csv`);
  if (!fs.existsSync(file)) return [];
  const rows = fs.readFileSync(file, "utf8").split("\n").slice(1).filter(Boolean);
  const out = [];
  for (const line of rows) {
    const m = line.match(/^"?([^",]+(?:[^"]*)?)"?,(\d*),(\d*),(\d*),(\d*),([a-z]*),/);
    if (!m) continue;
    const [, kw, labs, ads, , , intent] = m;
    const vol = Number(labs || ads || 0);
    if (!/commercial|transactional/.test(intent)) continue;
    out.push({ keyword: kw.replace(/^"|"$/g, ""), volume: vol });
  }
  out.sort((a, b) => b.volume - a.volume);
  const seen = new Set();
  return out.filter((r) => (seen.has(r.keyword) ? false : seen.add(r.keyword))).slice(0, TOP_QUERIES);
}

function kind(domain) {
  if (AGGREGATORS.test(domain)) return "каталог/биржа";
  if (LEARNING.test(domain)) return "курсы/работа";
  if (PLATFORMS.test(domain)) return "платформа/медиа";
  return "исполнитель";
}

// Страница услуги или статья. Для изучения приёмов продажи нужна первая:
// в блоге и словаре конкурент решает другую задачу. Первый прогон привёл
// «co to jest DuckDuckGo» и «heurystyka» — это не оффер (проверено 22.11.2026).
const ARTICLE = /\/(blog|slownik|slownik-pojec|baza-wiedzy|poradnik|poradniki|artykul|artykuly|news|aktualnosci|wiedza|academy|guide|guides|resources|insights|articles|stati|statya|journal|post|posts|tag|category|kategoria|author|autor)\//i;
const SERVICE = /\/(oferta|uslugi|usluga|services?|service|pozycjonowanie|seo|sem|google-ads|adwords|kampanie|audyt|audit|cennik|pricing|price|ceny|stron[ya]?|strony-internetowe|tworzenie-stron|web-design|website-design|development|sklep|ecommerce|e-commerce|sozdanie-sajta|prodvizhenie|kontakt|contact|about|o-nas)/i;
function pageKind(url) {
  let p = "/";
  try { p = new URL(url).pathname; } catch { /* оставляем корень */ }
  if (p === "/" || p === "") return "главная";
  if (ARTICLE.test(p)) return "статья";
  // Длинный слаг из многих слов почти всегда статья, даже без /blog/ в адресе.
  const slug = p.replace(/\/$/, "").split("/").pop() || "";
  if ((slug.match(/-/g) || []).length >= 4 && !SERVICE.test(p)) return "статья";
  if (SERVICE.test(p)) return "услуга";
  return "прочее";
}

// Запасной путь. Labs отказывает на паре «Польша + русский» кодом 40501 — то же
// ограничение, что в парсере ниш. Обычная выдача принимает любую пару, стоит
// $0.0025 за запрос и попутно отдаёт заголовки: ими конкурент называет услугу.
async function serpFallback(m, keywords, tag) {
  const tally = new Map();
  const titles = [];
  for (const kw of keywords.slice(0, SERP_QUERIES)) {
    const body = await call(
      "serp/google/organic/live/advanced",
      { keyword: kw, location_code: m.location_code, language_code: m.language_code, depth: 20, device: "desktop" },
      `${m.key} · ${tag} · выдача «${kw}»`
    );
    const res = result0(body);
    const items = ((res && res.items) || []).filter((it) => it.type === "organic");
    items.forEach((it, idx) => {
      const d = it.domain;
      if (!d) return;
      const row = tally.get(d) || { domain: d, positions: [], queries: 0 };
      row.queries += 1;
      row.positions.push(it.rank_absolute ?? idx + 1);
      tally.set(d, row);
      if (titles.length < 400) titles.push({ keyword: kw, domain: d, title: it.title || "", position: it.rank_absolute ?? idx + 1 });
    });
  }
  const rows = [...tally.values()].map((r) => {
    const sorted = r.positions.slice().sort((a, b) => a - b);
    return {
      domain: r.domain,
      kind: kind(r.domain),
      queries: r.queries,
      avgPosition: r.positions.reduce((a, b) => a + b, 0) / r.positions.length,
      medianPosition: sorted[Math.floor(sorted.length / 2)],
      visibility: Number((r.positions.filter((p) => p <= 10).length / Math.max(1, Math.min(SERP_QUERIES, keywords.length))).toFixed(3)),
      etv: null,
    };
  });
  rows.sort((a, b) => b.visibility - a.visibility || a.avgPosition - b.avgPosition);
  return { rows, titles };
}

// -------------------------------------------------------------- стадия serp --
const tagLabel = (t) => t;

async function stageSerp() {
  const landscape = {};
  for (const m of MARKETS) {
    // Порядок источников — это приоритет: ядро услуг, затем живые показы,
    // затем остатки csv. Дубликаты снимаем, список режем по --queries.
    const merged = [];
    for (const kw of [].concat(CORE_BY_MARKET[m.key] || CORE[m.lang] || [], gscQueries(m.lang).map((q) => q.keyword), moneyQueries(m.lang).map((q) => q.keyword))) {
      if (!merged.includes(kw)) merged.push(kw);
      if (merged.length >= TOP_QUERIES) break;
    }
    const sets = [
      { tag: "коммерческие", keywords: merged },
      { tag: "ИИ-видимость", keywords: AI_QUERIES[m.lang] || [] },
    ];
    landscape[m.key] = {};
    for (const set of sets) {
      if (!set.keywords.length) continue;
      const body = await call(
        "dataforseo_labs/google/serp_competitors/live",
        // Без order_by: имя поля сортировки у этого эндпоинта меняется между
        // версиями, а отказ 40501 стоит целого вызова. Сортируем у себя.
        { keywords: set.keywords, location_code: m.location_code, language_code: m.language_code, limit: 60 },
        `${m.key} · ${set.tag} (${set.keywords.length} запросов)`
      );
      const res = result0(body);
      let items = (res && res.items) || [];
      if (DEBUG && items[0]) console.log("       поля ответа:", Object.keys(items[0]).join(", "));
      if (!items.length && !DRY_RUN) {
        console.log(`       ${m.key} · ${tagLabel(set.tag)}: Labs пусто, иду через обычную выдачу`);
        const fb = await serpFallback(m, set.keywords, set.tag);
        landscape[m.key][set.tag] = fb.rows;
        landscape[m.key][`${set.tag} · заголовки`] = fb.titles;
        console.log(`       ${m.key} · ${set.tag}: домотов ${fb.rows.length} (из выдачи)`);
        continue;
      }
      items.sort((a, b) => (b.visibility ?? b.etv ?? b.count ?? 0) - (a.visibility ?? a.etv ?? a.count ?? 0));
      landscape[m.key][set.tag] = items.map((it) => ({
        domain: it.domain,
        kind: kind(it.domain || ""),
        queries: it.keywords_count ?? it.count ?? null,
        avgPosition: it.avg_position ?? null,
        medianPosition: it.median_position ?? null,
        visibility: it.visibility ?? null,
        etv: it.etv ?? null,
      }));
      console.log(`       ${m.key} · ${set.tag}: домотов ${items.length}`);
    }
  }
  return landscape;
}

// ------------------------------------------------------------- стадия pages --
async function stagePages(landscape) {
  const pages = {};
  for (const m of MARKETS) {
    const market = landscape[m.key] || {};
    const pool = [].concat(market["коммерческие"] || [], market["ИИ-видимость"] || []);
    const picks = [];
    for (const row of pool) {
      if (!row.domain || row.kind !== "исполнитель") continue;
      if (picks.includes(row.domain)) continue;
      picks.push(row.domain);
      if (picks.length >= TOP_DOMAINS) break;
    }
    for (const domain of picks) {
      const body = await call(
        "dataforseo_labs/google/relevant_pages/live",
        { target: domain, location_code: m.location_code, language_code: m.language_code, limit: 15, order_by: ["metrics.organic.etv,desc"] },
        `${m.key} · страницы ${domain}`
      );
      const res = result0(body);
      const items = (res && res.items) || [];
      if (DEBUG && items[0]) console.log("       поля ответа:", Object.keys(items[0]).join(", "));
      pages[`${m.key} · ${domain}`] = items.map((it) => {
        const org = (it.metrics && it.metrics.organic) || {};
        return {
          url: it.page_address || (it.meta && it.meta.url) || null,
          queries: org.count ?? null,
          etv: org.etv ?? null,
          top3: (org.pos_1 ?? 0) + (org.pos_2_3 ?? 0),
        };
      }).filter((r) => r.url);
      console.log(`       ${domain}: страниц ${items.length}`);
    }
  }
  return pages;
}

// ------------------------------------------------------------ стадия onpage --
async function stageOnpage(pages) {
  const urls = [];
  const perDomain = {};
  for (const [label, rows] of Object.entries(pages)) {
    const domain = label.split(" · ")[1];
    perDomain[domain] = perDomain[domain] || 0;
    // Сначала услуги и главная, статьи берём только если услуг не нашлось.
    const ranked = [].concat(
      rows.filter((r) => pageKind(r.url) === "услуга"),
      rows.filter((r) => pageKind(r.url) === "главная"),
      rows.filter((r) => pageKind(r.url) === "прочее"),
    );
    for (const r of ranked) {
      if (perDomain[domain] >= TOP_PAGES) break;
      if (urls.some((u) => u.url === r.url)) continue;
      urls.push({ url: r.url, domain, market: label.split(" · ")[0], etv: r.etv, queries: r.queries, pageKind: pageKind(r.url) });
      perDomain[domain] += 1;
    }
    if (Object.keys(perDomain).length >= ONPAGE_DOMAINS) break;
  }
  const out = [];
  for (const u of urls) {
    const body = await call("on_page/instant_pages", { url: u.url, enable_javascript: false }, `разбор ${u.url.slice(0, 70)}`);
    const res = result0(body);
    const item = (res && res.items && res.items[0]) || null;
    if (!item) { out.push({ ...u, error: "страница не разобрана" }); continue; }
    const meta = item.meta || {};
    const h = meta.htags || {};
    out.push({
      ...u,
      title: meta.title || null,
      titleLength: (meta.title || "").length,
      description: meta.description || null,
      descriptionLength: (meta.description || "").length,
      h1: h.h1 || [],
      h2: h.h2 || [],
      h3count: (h.h3 || []).length,
      words: (meta.content && meta.content.plain_text_word_count) ?? null,
      internalLinks: meta.internal_links_count ?? null,
      externalLinks: meta.external_links_count ?? null,
      images: meta.images_count ?? null,
      responseMs: (item.page_timing && item.page_timing.duration_time) ?? null,
    });
  }
  return out;
}

// ------------------------------------------------------------------- отчёт --
function report(landscape, pages, onpage) {
  const L = [`# Конкуренты: кто стоит в выдаче по нашим запросам`, "", `Собрано ${new Date().toISOString().slice(0, 10)} скриптом scripts/dataforseo/discover-competitors.cjs.`, "", `Это наблюдения, а не рекомендации. «Каталог/биржа» и «платформа/медиа» — другой тип сайта, их приёмы к нам не переносятся, но места в топе они занимают.`, ""];
  for (const [market, sets] of Object.entries(landscape)) {
    L.push(`## ${market}`, "");
    for (const [tag, rows] of Object.entries(sets)) {
      if (/· заголовки$/.test(tag)) continue;
      if (!rows.length) { L.push(`### ${tag}`, "", "Выдача не вернулась.", ""); continue; }
      L.push(`### ${tag}`, "", "| Домен | Тип | Наших запросов в топе | Средняя позиция | Видимость |", "|---|---|---|---|---|");
      for (const r of rows.slice(0, 25)) L.push(`| ${r.domain} | ${r.kind} | ${r.queries ?? "—"} | ${r.avgPosition != null ? Number(r.avgPosition).toFixed(1) : "—"} | ${r.visibility != null ? Number(r.visibility).toFixed(3) : "—"} |`);
      L.push("");
    }
  }
  const titleSets = [];
  for (const [market, sets] of Object.entries(landscape)) {
    for (const [tag, rows] of Object.entries(sets)) if (/· заголовки$/.test(tag) && rows.length) titleSets.push([market, tag, rows]);
  }
  if (titleSets.length) {
    L.push(`## Как конкуренты называют услугу в заголовках выдачи`, "", `Собрано из обычной выдачи там, где Labs отказывает на паре язык-страна. Заголовок — это обещание, которым они забирают клик.`, "");
    for (const [market, tag, rows] of titleSets) {
      L.push(`### ${market} · ${tag.replace(" · заголовки", "")}`, "", "| Запрос | Поз. | Домен | Заголовок |", "|---|---|---|---|");
      for (const r of rows.filter((x) => x.position <= 10).slice(0, 80)) L.push(`| ${r.keyword} | ${r.position} | ${r.domain} | ${String(r.title).replace(/\|/g, "/").slice(0, 90)} |`);
      L.push("");
    }
  }
  if (Object.keys(pages).length) {
    L.push(`## Страницы-кормильцы`, "", `Какие адреса приносят конкурентам органику — видно, какой тип страниц у них работает.`, "");
    for (const [label, rows] of Object.entries(pages)) {
      if (!rows.length) continue;
      L.push(`### ${label}`, "", "| Страница | Тип | Запросов | Оценка трафика | В топ-3 |", "|---|---|---|---|---|");
      for (const r of rows.slice(0, 10)) L.push(`| ${r.url} | ${pageKind(r.url)} | ${r.queries ?? "—"} | ${r.etv != null ? Number(r.etv).toFixed(0) : "—"} | ${r.top3 || 0} |`);
      L.push("");
    }
  }
  if (onpage && onpage.length) {
    L.push(`## Разбор страниц`, "", "| Страница | Тайтл | Знаков в тайтле | Знаков в описании | H2 | H3 | Слов | Внутр. ссылок | Ответ, мс |", "|---|---|---|---|---|---|---|---|---|");
    for (const r of onpage) {
      if (r.error) { L.push(`| ${r.url} | ${r.error} | — | — | — | — | — | — | — |`); continue; }
      L.push(`| ${r.url} | ${(r.title || "").slice(0, 60)} | ${r.titleLength} | ${r.descriptionLength} | ${r.h2.length} | ${r.h3count} | ${r.words ?? "—"} | ${r.internalLinks ?? "—"} | ${r.responseMs ?? "—"} |`);
    }
    L.push("");
    L.push(`### Заголовки H2 по страницам`, "", `Порядок блоков на странице конкурента — это его сценарий продажи.`, "");
    for (const r of onpage) {
      if (r.error || !r.h2.length) continue;
      L.push(`**${r.url}**`, "", r.h2.slice(0, 20).map((x) => `- ${String(x).trim().slice(0, 120)}`).join("\n"), "");
    }
  }
  return L.join("\n");
}

async function main() {
  if (!DRY_RUN && !CACHE_ONLY && (!LOGIN || !PASSWORD)) throw new Error("Нет доступов DATAFORSEO в .env.local");
  fs.mkdirSync(OUT, { recursive: true });
  const prevFile = path.join(OUT, "competitor-landscape.json");
  const prev = fs.existsSync(prevFile) ? JSON.parse(fs.readFileSync(prevFile, "utf8")) : {};

  const run = { generatedAt: new Date().toISOString(), landscape: prev.landscape || {}, pages: prev.pages || {}, onpage: prev.onpage || [] };
  if (STAGE === "all" || STAGE === "serp") run.landscape = await stageSerp();
  if (STAGE === "all" || STAGE === "pages") run.pages = await stagePages(run.landscape);
  if (STAGE === "all" || STAGE === "onpage") run.onpage = await stageOnpage(run.pages);

  if (DRY_RUN) { console.log(`\nпробный прогон: вызовов на ~$${planned.toFixed(3)}, лимит $${BUDGET_USD}`); return; }
  fs.writeFileSync(prevFile, JSON.stringify(run, null, 1));
  fs.writeFileSync(path.join(OUT, "competitor-landscape.md"), report(run.landscape, run.pages, run.onpage) + "\n");
  console.log(`\nготово: research/dataforseo/competitor-landscape.md`);
  console.log(`потрачено $${spent.toFixed(4)} (из кеша на $${cachedCost.toFixed(4)})`);
}
main().catch((e) => { console.error("\n" + (e.response ? JSON.stringify(e.response.data).slice(0, 400) : e.message)); process.exit(1); });
