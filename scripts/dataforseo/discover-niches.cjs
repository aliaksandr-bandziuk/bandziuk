// scripts/dataforseo/discover-niches.cjs
//
// Разведка ниш, а не проверка готового списка. Берём головные шаблоны, по
// которым нас ищет владелец бизнеса («seo for X», «website for X»,
// «strona internetowa dla X», «продвижение сайта X», «сайт для X»), и просим
// DataForSEO выдать все фразы, которые такой шаблон содержат. Хвост фразы —
// это и есть ниша: сантехник, автосалон, пекарня, kancelaria, ветклиника.
//
// Дальше скрипт сам сверяет найденные хвосты с нашими 508 фикстурами и делит
// их на «уже есть» и «нет страницы». На выходе — список возможных страниц,
// отранжированный по спросу, а не придуманный из головы.
//
// Контроль: по каждому шаблону печатается, сколько фраз вернулось и какая
// суммарная частота. Нули по всем шаблонам означают, что вызов не прошёл.
//
//   node scripts/dataforseo/discover-niches.cjs --dry-run
//   node scripts/dataforseo/discover-niches.cjs --budget 1.2
//   node scripts/dataforseo/discover-niches.cjs --min 30     порог частоты
//
// Вывод: research/dataforseo/niche-discovery.json и .md

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const axios = require("axios");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env.local"), quiet: true });

const ROOT = path.resolve(__dirname, "../..");
const OUT = path.join(ROOT, "research", "dataforseo");
const RAW = path.join(OUT, "raw");
const FIXTURES = path.join(ROOT, "src", "dev-fixtures");

const LOGIN = process.env.DATAFORSEO_API_LOGIN;
const PASSWORD = process.env.DATAFORSEO_API_PASSWORD;
const DRY_RUN = process.argv.includes("--dry-run");
const CACHE_ONLY = process.argv.includes("--cache-only");
const argNum = (flag, def) => {
  const i = process.argv.indexOf(flag);
  return i > -1 ? Number(process.argv[i + 1]) : def;
};
const BUDGET_USD = argNum("--budget", 5);
const MIN_VOLUME = argNum("--min", 20);

const MARKETS = {
  en: [{ label: "US", location_code: 2840, language_code: "en" }],
  pl: [{ label: "PL", location_code: 2616, language_code: "pl" }],
  ru: [
    { label: "PL", location_code: 2616, language_code: "ru" },
    { label: "KZ", location_code: 2398, language_code: "ru" },
  ],
};

// Шаблоны, по которым ищет владелец бизнеса. Хвост после шаблона — ниша.
const SEEDS = {
  en: ["seo for", "seo services for", "marketing for", "digital marketing for", "web design for", "website design for", "lead generation for", "google ads for", "local seo for", "seo agency for", "ppc for", "online marketing for", "website for", "ecommerce seo for"],
  pl: ["pozycjonowanie dla", "pozycjonowanie strony", "marketing dla", "strona internetowa dla", "agencja seo dla", "reklama google dla", "seo dla", "sklep internetowy dla", "kampanie google dla", "tworzenie stron dla"],
  ru: ["продвижение сайта", "продвижение для", "маркетинг для", "сайт для компании", "реклама для", "раскрутка сайта", "сайт для", "лендинг для", "контекстная реклама для"],
};

// Вторая семья шаблонов: та же услуга, но словами про ИИ. Здесь важен не только
// хвост-ниша, но и сама фраза — ею владелец называет работу, которую мы
// продаём как GEO и AEO. Имена моделей ставим только в связке с услугой:
// «gemini» и «claude» сами по себе дают знак зодиака и художника.
const SEEDS_AI = {
  en: ["ai seo", "ai seo for", "chatgpt seo", "generative engine optimization", "answer engine optimization", "llm seo", "ai visibility", "ai search optimization", "ai overviews optimization"],
  pl: ["ai seo", "pozycjonowanie w chatgpt", "widoczność w chatgpt", "seo ai dla", "optymalizacja pod ai", "llm seo"],
  ru: ["ai seo", "продвижение в chatgpt", "видимость в нейросетях", "продвижение в нейросетях", "llm seo", "оптимизация под ии"],
};

// Хвост считается нишей, только если похож на профессию, компанию или отрасль.
// Без этого фильтра «website for» приносит movies, anime, snapchat и proxy —
// это запросы потребителей, а не владельцев бизнеса (проверено 22.11.2026).
// Хвост — ниша, только если это профессия, тип заведения или отрасль. Раньше
// здесь стояло «любое слово на -s», и шаблон «website for» приносил klm
// airlines, flights, irs payments, job seekers и drawings: это ищет
// потребитель чужой сайт, а не владелец свой (ошибка найдена 22.11.2026).
const TRADE = {
  en: /(ers|ors|ists|ians|eers|ologists|icians|smiths)$|(shops?|stores?|retailers?|wholesalers?|distributors?|clinics?|hospitals?|salons?|spas?|barbers?|firms?|law ?firms?|attorneys|agenc(y|ies)|studios?|contractors?|practices?|dealers?|dealerships?|builders?|centers?|centres?|schools?|universities|colleges|academies|hotels?|motels?|hostels?|restaurants?|cafes?|bakeries|bars?|pubs?|gyms?|labs?|garages?|brands?|manufacturers?|suppliers?|installers?|therapists?|doctors?|lawyers?|dentists?|vets?|veterinarians?|realtors?|nonprofits?|non profit organi[sz]ations?|charities|churches|franchises|franchisees|startups?|saas|ecommerce|e-commerce|freelancers?|consultants?|coaches|influencers?|youtubers?|bloggers?|podcasters?|photographers?|videographers?|architects?|engineers?|accountants?|bookkeepers?|associations?|clubs?|events?|conferences?|weddings?)$/i,
  pl: /(ów|ek|arzy|istów|ników|niczych|owni|firm|firmy|gabinetu|gabinetów|kancelarii|warsztatu|warsztatów|salonu|salonów|kliniki|klinik|sklepu|sklepów|hotelu|hoteli|restauracji|biura|biur|przedszkola|serwisu|serwisów|startupów|dentystów|adwokatów|lekarzy)$/,
  ru: /(ов|ей|иков|истов|щиков|телей|компании|клиники|салона|магазина|сервиса|студии|мастерской|бюро|агентства|центра|отеля|ресторана|завода|производства|школы|кафе|турагентства|фотостудии)$/,
};
const NOISE = /(movie|film|anime|game|gaming|proxy|snapchat|fifa|porn|dating|znakomstv|знакомств|фильм|аниме|прокси|скачив|просмотр|geja|gejów|mezczyzn|kobiet|nastolat|презентац|учителей|рисован|airline|flight|airfare|\birs\b|usps|job (opening|seeker)|employee|textbook|icon|drawing|series|show|streaming|invitation|definition|citation|resume|\bcv\b|used cars?|buy(ing)? cars?|\bcars?$|ticket|tracking|dummies|beginner|newbie|keyword|subdomain)/i;

// Слова, которые не являются нишей: они остаются в хвосте от самого шаблона.
const STOP = {
  en: new Set(["a", "an", "the", "my", "your", "our", "small", "local", "best", "cheap", "top", "free", "company", "companies", "business", "businesses", "websites", "website", "site", "sites", "services", "service", "near", "me", "and", "in", "of", "for", "with", "price", "cost", "agency"]),
  pl: new Set(["dla", "firmy", "firm", "małej", "małych", "lokalnej", "strony", "stron", "strona", "internetowej", "internetowych", "www", "cena", "cennik", "tanie", "najlepsze", "i", "w", "na", "do", "od"]),
  ru: new Set(["для", "сайта", "сайт", "сайты", "компании", "фирмы", "бизнеса", "малого", "дешево", "недорого", "цена", "цены", "стоимость", "в", "на", "и", "под", "с", "от"]),
};

const ESTIMATE = { "dataforseo_labs/google/keyword_suggestions/live": 0.13, "keywords_data/google_ads/keywords_for_keywords/live": 0.09 };
let spent = 0, cachedCost = 0, planned = 0;

function assertBudget(next = 0) {
  if (spent + next > BUDGET_USD) throw new Error(`Budget cap reached: $${spent.toFixed(4)} of $${BUDGET_USD}; next call ~$${next.toFixed(3)}.`);
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
  if (DRY_RUN) { planned += estimate; console.log(`would call ${label} (~$${estimate.toFixed(3)})`); return null; }
  // --cache-only: пересобрать выгрузку из уже оплаченных ответов, не выходя в сеть
  // (из оболочки агента DataForSEO закрыт списком разрешённых адресов).
  if (CACHE_ONLY) { console.log(`пропуск (нет в кеше) ${label}`); return null; }
  assertBudget(estimate);
  // Google Ads у DataForSEO держит лимит 12 запросов в минуту: без паузы
  // хвост прогона возвращается пустым с кодом 40202 (проверено 22.11.2026).
  const ads = endpoint.startsWith("keywords_data/");
  if (ads) await sleep(5500);
  const post = () => axios.post(`https://api.dataforseo.com/v3/${endpoint}`, [payload], { auth: { username: LOGIN, password: PASSWORD }, timeout: 120000 });
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
const items = (b) => (b && b.tasks && b.tasks[0] && b.tasks[0].result) || [];

// --------------------------------------------------------------- покрытие --
// Что у нас уже есть: слова из слагов и H1 всех фикстур, по языкам.
function coverage() {
  const by = { en: new Set(), pl: new Set(), ru: new Set() };
  for (const f of fs.readdirSync(FIXTURES).filter((x) => /\.(en|pl|ru)\.ts$/.test(x))) {
    const lang = f.match(/\.(en|pl|ru)\.ts$/)[1];
    const src = fs.readFileSync(path.join(FIXTURES, f), "utf8");
    const slug = (src.match(/slug: "([^"]+)"/) || [])[1] || "";
    const h1 = (src.match(/heading:\s*\n?\s*"([^"]+)"/) || [])[1] || "";
    for (const w of (slug.replace(/-/g, " ") + " " + h1).toLowerCase().split(/[^\p{L}\p{N}]+/u)) {
      if (w.length > 3) by[lang].add(w);
    }
  }
  return by;
}
// Сверка по основе слова: «roofers» и «roofing», «lawfirms» и «law firm»,
// «dentystów» и «dentysty» — это одна и та же ниша, и помечать её новой нельзя.
const stem = (w) => {
  const x = w.replace(/[^\p{L}\p{N}]/gu, "");
  return x.length > 4 ? x.slice(0, 4) : x;
};

async function main() {
  if (!DRY_RUN && (!LOGIN || !PASSWORD)) throw new Error("DATAFORSEO credentials not found in .env.local");
  const have = coverage();
  const report = { generatedAt: new Date().toISOString(), minVolume: MIN_VOLUME, markets: {} };
  const lines = [
    "# Разведка ниш: какие страницы ещё можно сделать",
    "",
    `Снято: ${new Date().toISOString().slice(0, 10)}. Порог частоты: ${MIN_VOLUME}.`,
    "",
    "Шаблоны («seo for X», «strona internetowa dla X», «продвижение сайта X») отданы",
    "в keyword_suggestions; хвост каждой найденной фразы — ниша. Пометка «есть»",
    "означает, что слова ниши уже встречаются в слаге или H1 наших фикстур.",
    "",
  ];

  for (const lang of Object.keys(SEEDS)) {
    for (const market of MARKETS[lang]) {
      const key = `${lang.toUpperCase()}/${market.label}`;
      const tails = new Map();
      const aiPhrases = new Map();
      for (const seed of [...SEEDS[lang], ...SEEDS_AI[lang]]) {
        const isAi = SEEDS_AI[lang].includes(seed);
        // Labs не знает комбинации «Польша + русский» и отвечает 40501, поэтому
        // для русского идём в Google Ads: keywords_for_keywords принимает любую
        // пару язык-локация и тоже отдаёт идеи с частотами.
        const viaAds = lang === "ru";
        const body = viaAds
          ? await call(
              "keywords_data/google_ads/keywords_for_keywords/live",
              { keywords: [seed], location_code: market.location_code, language_code: market.language_code, sort_by: "search_volume" },
              `${key} · ${seed} (ads)`
            )
          : await call(
              "dataforseo_labs/google/keyword_suggestions/live",
              {
                keyword: seed,
                location_code: market.location_code,
                language_code: market.language_code,
                include_seed_keyword: false,
                limit: 1000,
                filters: [["keyword_info.search_volume", ">=", MIN_VOLUME]],
                order_by: ["keyword_info.search_volume,desc"],
              },
              `${key} · ${seed}`
            );
        const list = viaAds
          ? (items(body) || []).map((r) => ({ keyword: r.keyword, keyword_info: { search_volume: r.search_volume } }))
          : ((items(body)[0] || {}).items || []);
        let sum = 0;
        for (const it of list) {
          const kw = (it.keyword || "").toLowerCase();
          const vol = (it.keyword_info && it.keyword_info.search_volume) || 0;
          sum += vol;
          if (isAi) {
            // Фраза про ИИ-видимость ценна целиком: это название услуги.
            const prevP = aiPhrases.get(kw) || { keyword: kw, volume: vol, seed };
            prevP.volume = Math.max(prevP.volume, vol);
            aiPhrases.set(kw, prevP);
          }
          if (!kw.includes(seed)) continue;
          const tailWords = kw.split(seed).slice(1).join(" ").split(/[^\p{L}\p{N}]+/u)
            .filter((w) => w.length > 2 && !STOP[lang].has(w));
          if (!tailWords.length) continue;
          const tail = tailWords.join(" ");
          if (NOISE.test(kw) || !TRADE[lang].test(tailWords[tailWords.length - 1])) continue;
          const prev = tails.get(tail) || { tail, volume: 0, examples: [] };
          prev.volume += vol;
          if (prev.examples.length < 3) prev.examples.push(`${kw} (${vol})`);
          tails.set(tail, prev);
        }
        if (!DRY_RUN) console.log(`       ${key} · ${seed}: фраз ${list.length}, суммарная частота ${sum}`);
      }
      const rows = [...tails.values()]
        .map((r) => ({ ...r, covered: r.tail.split(" ").some((w) => [...have[lang]].some((h) => stem(h) === stem(w))) }))
        .sort((a, b) => b.volume - a.volume);
      const ai = [...aiPhrases.values()].sort((a, b) => b.volume - a.volume);
      report.markets[key] = rows;
      report.markets[key + " · ИИ-фразы"] = ai;
      if (DRY_RUN || !rows.length) continue;
      const fresh = rows.filter((r) => !r.covered).slice(0, 40);
      lines.push(`## ${key}`, "", `Хвостов всего ${rows.length}, из них без страницы ${rows.filter((r) => !r.covered).length}.`, "",
        "| Ниша | Частота | Пример фразы |", "|---|---|---|");
      for (const r of fresh) lines.push(`| ${r.tail} | ${r.volume} | ${r.examples[0] || ""} |`);
      lines.push("");
      if (ai.length) {
        lines.push(`### ${key} · как называют работу с ИИ-видимостью`, "", "| Фраза | Частота |", "|---|---|");
        for (const r of ai.slice(0, 30)) lines.push(`| ${r.keyword} | ${r.volume} |`);
        lines.push("");
      }
    }
  }

  fs.mkdirSync(OUT, { recursive: true });
  if (!DRY_RUN) {
    fs.writeFileSync(path.join(OUT, "niche-discovery.json"), JSON.stringify(report, null, 1));
    fs.writeFileSync(path.join(OUT, "niche-discovery.md"), lines.join("\n") + "\n");
    console.log(`\nготово: research/dataforseo/niche-discovery.md`);
    console.log(`потрачено $${spent.toFixed(4)} (из кеша на $${cachedCost.toFixed(4)})`);
  } else {
    console.log(`\nпробный прогон: вызовов на ~$${planned.toFixed(3)}, лимит $${BUDGET_USD}`);
  }
}

main().catch((e) => { console.error("\n" + (e.response ? JSON.stringify(e.response.data).slice(0, 400) : e.message)); process.exit(1); });
