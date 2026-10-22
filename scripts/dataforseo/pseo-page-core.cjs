// scripts/dataforseo/pseo-page-core.cjs
//
// Semantic core of ONE landing page, in all three languages, before its text
// is finalised and localised.
//
// Why. The pSEO matrix holds only head phrases per cell (service × industry ×
// city). A page also needs the tails people type, the neighbouring wordings
// and the questions Google shows under "People also ask" — that is what the
// H2s, H3s and FAQ are built from. For PL and RU this is the only honest
// source: a translated English heading rarely matches what the market types.
//
// Sources per language:
//   keyword_suggestions  phrases containing the seed (no location: same basis
//                        as the matrix volumes)
//   related_keywords     Google's "searches related to" graph, depth 1, with a
//                        market location (en US, pl Poland, ru Kazakhstan —
//                        Labs has no Poland+Russian pair)
//   SERP top-10          People also ask + related searches (en US, pl/ru Poland)
//
// Every call is cached in research/pseo/raw/, a rerun costs nothing.
//
//   node scripts/dataforseo/pseo-page-core.cjs --topic restaurant-website-design --dry-run
//   node scripts/dataforseo/pseo-page-core.cjs --topic restaurant-website-design
//
// Output: research/pseo/page-core/<topic>.csv and <topic>.md

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const axios = require("axios");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env.local"), quiet: true });

const ROOT = path.resolve(__dirname, "../..");
const OUT = path.join(ROOT, "research", "pseo", "page-core");
const RAW = path.join(ROOT, "research", "pseo", "raw");
const LOGIN = process.env.DATAFORSEO_API_LOGIN;
const PASSWORD = process.env.DATAFORSEO_API_PASSWORD;

const argv = process.argv.slice(2);
const flag = (n, d) => {
  const i = argv.indexOf("--" + n);
  return i > -1 && argv[i + 1] && !argv[i + 1].startsWith("--") ? argv[i + 1] : d;
};
const DRY = argv.includes("--dry-run");
const BUDGET = Number(flag("budget", 1.5));
const TOPIC = flag("topic", "restaurant-website-design");

// Topics: seeds per language, the stems a phrase must contain to belong to the
// topic, and the phrases that are the head (shown first in the report).
const TOPICS = {
  "restaurant-website-design": {
    relevant: /restaura|cafe|café|caf[eé]s|bistro|menu|kawiarni|ресторан|кафе|меню/i,
    // phrases about building / SEO belong to other pages; reported, not used here
    otherPage: {
      seo: /\bseo\b|pozycjonow|продвиж|marketing/i,
      development: /development|developer|build|builder|create|creat|make|tworzen|wykonan|stworz|создан|разработ|сделат|заказ/i,
    },
    seeds: {
      en: ["restaurant website design", "restaurant web design", "restaurant menu design", "restaurant website examples", "restaurant website template", "web design for restaurants"],
      pl: ["projektowanie stron dla restauracji", "strona internetowa restauracji", "strona dla restauracji", "projekt strony restauracji", "menu restauracji online", "szablon strony restauracji"],
      ru: ["дизайн сайта ресторана", "сайт ресторана", "сайт для ресторана", "меню ресторана онлайн", "шаблон сайта ресторана", "сайт для кафе"],
    },
    serp: {
      en: ["restaurant website design", "web design for restaurants"],
      pl: ["projektowanie stron dla restauracji", "strona internetowa dla restauracji"],
      ru: ["дизайн сайта ресторана", "сайт для ресторана"],
    },
  },
  // RU re-check of topic 2 (22.10.2026): the first run seeded only
  // «продвижение / маркетинг», so SEO and «раскрутка» phrasing was never measured.
  "restaurant-seo-ru": {
    relevant: /ресторан|кафе|общепит|кофейн|бар\b/i,
    otherPage: {
      warsaw: /варшав/i,
      development: /создан|разработ|дизайн|шаблон|сделать сайт|заказать сайт|конструктор|тильд/i,
    },
    seeds: {
      ru: [
        "раскрутка сайта ресторана", "раскрутка ресторана", "seo продвижение ресторана",
        "seo для ресторана", "продвижение сайта ресторана", "seo ресторана",
        "продвижение сайта кафе", "раскрутка кафе",
      ],
    },
    serp: {
      ru: ["раскрутка сайта ресторана", "seo продвижение ресторана"],
    },
  },
  "restaurant-seo": {
    relevant: /restaura|cafe|café|bistro|kawiarni|gastronom|horeca|ресторан|кафе/i,
    // checked in this order; the first match wins
    otherPage: {
      // PL/RU already have Warsaw restaurant SEO pages
      warsaw: /warsz|warsaw|варшав/i,
      development: /develop|design|builder|\bbuild|creat|template|tworzen|projekt|stworz|szablon|создан|разработ|дизайн|шаблон|сделать сайт|заказать сайт/i,
    },
    seeds: {
      en: ["restaurant seo", "seo for restaurants", "local seo for restaurants", "restaurant seo services", "restaurant seo company", "google business profile restaurant"],
      pl: ["pozycjonowanie restauracji", "pozycjonowanie strony restauracji", "seo dla restauracji", "marketing restauracji", "wizytówka google restauracja", "pozycjonowanie lokalne restauracji"],
      ru: ["продвижение ресторана", "продвижение сайта ресторана", "seo продвижение ресторана", "продвижение ресторана в интернете", "продвижение ресторана в google", "маркетинг ресторана"],
    },
    serp: {
      en: ["restaurant seo", "seo for restaurants"],
      pl: ["pozycjonowanie restauracji", "seo dla restauracji"],
      ru: ["продвижение сайта ресторана", "seo продвижение ресторана"],
    },
  },
};

const LOC_RELATED = { en: 2840, pl: 2616, ru: 2398 };
const LOC_SERP = { en: 2840, pl: 2616, ru: 2616 };
const ESTIMATE = {
  "dataforseo_labs/google/keyword_suggestions/live": 0.02,
  "dataforseo_labs/google/related_keywords/live": 0.02,
  "serp/google/organic/live/advanced": 0.006,
};

let spent = 0;
let planned = 0;
const failures = [];

async function call(endpoint, payload, label) {
  const h = crypto.createHash("sha1").update(endpoint + JSON.stringify(payload)).digest("hex").slice(0, 16);
  const file = path.join(RAW, `${endpoint.replace(/[^a-z0-9]+/gi, "_")}__${h}.json`);
  if (fs.existsSync(file)) return JSON.parse(fs.readFileSync(file, "utf8"));
  const est = ESTIMATE[endpoint] ?? 0.03;
  if (DRY) { planned += est; console.log(`would call  ${label}  (~$${est.toFixed(3)})`); return null; }
  if (spent + est > BUDGET) throw new Error(`Budget ceiling $${BUDGET} reached at $${spent.toFixed(3)}; nothing more requested.`);
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await axios.post(`https://api.dataforseo.com/v3/${endpoint}`, [payload], {
        auth: { username: LOGIN, password: PASSWORD },
        timeout: 180000,
      });
      const body = res.data;
      spent += Number(body.cost || 0);
      const task = body.tasks && body.tasks[0];
      if (task && task.status_code === 40202 && attempt < 3) { await new Promise((r) => setTimeout(r, 7000 * attempt)); continue; }
      if (!(body.status_code === 20000 && task && task.status_code === 20000)) {
        const msg = task ? `${task.status_code} ${task.status_message}` : body.status_message;
        console.warn(`  ! ${label}: ${msg}`);
        failures.push({ label, msg });
        return null;
      }
      fs.mkdirSync(RAW, { recursive: true });
      fs.writeFileSync(file, JSON.stringify(body, null, 1));
      console.log(`paid  ${label}  $${Number(body.cost || 0).toFixed(4)}`);
      await new Promise((r) => setTimeout(r, 5500)); // 12 calls/min account limit
      return body;
    } catch (e) {
      if (attempt === 3) { failures.push({ label, msg: e.message }); return null; }
      await new Promise((r) => setTimeout(r, 7000 * attempt));
    }
  }
  return null;
}

const items = (body) => (body && body.tasks && body.tasks[0] && body.tasks[0].result && body.tasks[0].result[0] && body.tasks[0].result[0].items) || [];
const norm = (s) => String(s || "").toLowerCase().replace(/\s+/g, " ").trim();

async function main() {
  const topic = TOPICS[TOPIC];
  if (!topic) throw new Error(`Unknown topic ${TOPIC}. Known: ${Object.keys(TOPICS).join(", ")}`);
  if (!DRY && !LOGIN) throw new Error("DATAFORSEO_API_LOGIN missing in .env.local");

  const kw = new Map(); // lang|keyword → row
  const add = (lang, keyword, volume, source) => {
    const k = `${lang}|${norm(keyword)}`;
    const row = kw.get(k) || { lang, keyword: norm(keyword), volume: 0, sources: new Set() };
    row.volume = Math.max(row.volume, Number(volume) || 0);
    row.sources.add(source);
    kw.set(k, row);
  };
  const paa = { en: new Set(), pl: new Set(), ru: new Set() };
  const related = { en: new Set(), pl: new Set(), ru: new Set() };

  for (const lang of Object.keys(topic.seeds)) {
    for (const seed of topic.seeds[lang]) {
      const s = await call("dataforseo_labs/google/keyword_suggestions/live",
        { keyword: seed, language_code: lang, limit: 200, include_seed_keyword: true, filters: [["keyword_info.search_volume", ">=", 10]] },
        `${lang} suggestions «${seed}»`);
      for (const it of items(s)) add(lang, it.keyword, it.keyword_info && it.keyword_info.search_volume, "suggestions");
      const r = await call("dataforseo_labs/google/related_keywords/live",
        { keyword: seed, language_code: lang, location_code: LOC_RELATED[lang], depth: 1, limit: 100 },
        `${lang} related «${seed}»`);
      for (const it of items(r)) {
        const d = it.keyword_data || {};
        add(lang, d.keyword, d.keyword_info && d.keyword_info.search_volume, "related");
      }
    }
    for (const q of topic.serp[lang]) {
      const b = await call("serp/google/organic/live/advanced",
        { keyword: q, language_code: lang, location_code: LOC_SERP[lang], device: "desktop", depth: 10, people_also_ask_click_depth: 1 },
        `${lang} serp «${q}»`);
      for (const it of items(b)) {
        if (it.type === "people_also_ask") for (const e of it.items || []) if (e.title) paa[lang].add(e.title.trim());
        if (it.type === "related_searches") for (const e of it.items || []) related[lang].add(String(e).trim());
      }
    }
  }

  if (DRY) { console.log(`\nDry run. Estimate: ~$${planned.toFixed(2)} (budget $${BUDGET}).`); return; }

  // classify
  const rows = [...kw.values()].map((r) => {
    let fit = "this page";
    if (!topic.relevant.test(r.keyword)) fit = "off topic";
    else {
      const hit = Object.entries(topic.otherPage).find(([, re]) => re.test(r.keyword));
      if (hit) fit = `${hit[0]} page`;
    }
    return { ...r, sources: [...r.sources].join("+"), fit };
  }).sort((a, b) => a.lang.localeCompare(b.lang) || b.volume - a.volume);

  fs.mkdirSync(OUT, { recursive: true });
  const esc = (v) => `"${String(v ?? "").replace(/"/g, '""')}"`;
  fs.writeFileSync(path.join(OUT, `${TOPIC}.csv`),
    ["lang,fit,volume,keyword,sources", ...rows.map((r) => [r.lang, r.fit, r.volume, r.keyword, r.sources].map(esc).join(","))].join("\n") + "\n");

  const lines = [];
  const say = (l = "") => { console.log(l); lines.push(l); };
  say(`# Semantic core: ${TOPIC}`);
  say("");
  say(`Collected ${new Date().toISOString().slice(0, 10)}. Spent $${spent.toFixed(3)}. Volumes: suggestions — all locations; related — en US, pl Poland, ru Kazakhstan.`);
  for (const lang of Object.keys(topic.seeds)) {
    const mine = rows.filter((r) => r.lang === lang && r.fit === "this page");
    const other = rows.filter((r) => r.lang === lang && r.fit !== "this page" && r.fit !== "off topic");
    say("");
    say(`## ${lang.toUpperCase()}`);
    say("");
    say(`### For this page (${mine.length})`);
    for (const r of mine.slice(0, 60)) say(`- ${r.volume} · ${r.keyword}`);
    say("");
    say(`### Belongs to other pages — do not target here (${other.length})`);
    for (const r of other.slice(0, 15)) say(`- ${r.volume} · ${r.keyword} → ${r.fit}`);
    say("");
    say(`### People also ask (${paa[lang].size})`);
    for (const q of paa[lang]) say(`- ${q}`);
    say("");
    say(`### Related searches (${related[lang].size})`);
    for (const q of related[lang]) say(`- ${q}`);
  }
  if (failures.length) { say(""); say("## Failed calls"); for (const f of failures) say(`- ${f.label}: ${f.msg}`); }
  fs.writeFileSync(path.join(OUT, `${TOPIC}.md`), lines.join("\n") + "\n");
  console.log(`\nWritten: research/pseo/page-core/${TOPIC}.csv and .md`);
}

main().catch((e) => { console.error("Error:", e.message); process.exit(1); });
