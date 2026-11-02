// scripts/dataforseo/check-owner-intent.cjs
//
// Один вопрос: этот запрос задаёт ВЛАДЕЛЕЦ бизнеса, которому нужен сайт, или
// КЛИЕНТ этого бизнеса, который ищет чей-то готовый сайт?
//
// Зачем понадобился. 02.11.2026 пересборка ядра (pseo-core.cjs) принесла
// одиночные формы «X website» с огромными объёмами: «doctor website» 90 500,
// «ecommerce website» 33 100, «translator website» 27 100, «wedding planner
// website» 22 200, «painting website» 12 100. По правилу из
// claude/pseo-matrix-gaps.md такие числа не значат ничего, пока не посмотришь
// выдачу: по общепиту уже выяснилось, что «bakery website» ищут гости, а
// владелец ищет «bakery website design». Планировать страницу по частоте,
// не посмотрев топ-10, — это оплатить работу под чужое намерение.
//
// Что печатает. По каждой фразе: есть ли AI Overview и десять доменов в том
// порядке, в котором они стоят. Оценку скрипт НЕ выставляет: домены читает
// человек. Признаки, по которым решение принимается глазами:
//   — конструкторы и галереи (wix, squarespace, webflow, behance, dribbble,
//     template-маркеты) — спрашивает владелец, ему нужен сайт;
//   — студии и агентства — то же самое, и это наши конкуренты;
//   — каталоги, маркетплейсы и агрегаторы самого бизнеса (zocdoc, booking,
//     practo) — спрашивает клиент, страница под такой запрос бесполезна;
//   — готовые сервисы вместо бизнеса (deepl, translate.google по «translator
//     website») — спрашивают пользователя инструмента, а не владельца.
//
// Полные заголовки и «крошки» пишутся в research/pseo/owner-intent.md: в
// консоль они не влезают, а решают иногда именно они.
//
// Выдача: en — США (2840), pl и ru — Польша (2616), как в pseo-serp.cjs и
// pseo-intent.cjs. Кэш на каждую фразу: повторный прогон после сбоя платит
// только за недостающее. Цена около $0.006 за фразу.
//
//   node scripts/dataforseo/check-owner-intent.cjs --dry-run
//   node scripts/dataforseo/check-owner-intent.cjs
//   node scripts/dataforseo/check-owner-intent.cjs --only "doctor website"

const fs = require("fs");
const path = require("path");
const axios = require("axios");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env.local"), quiet: true });

const DIR = path.resolve(__dirname, "../../research/pseo");
const CACHE = path.join(DIR, "raw", "owner-intent");
const DRY = process.argv.includes("--dry-run");
const ONLY = (() => { const i = process.argv.indexOf("--only"); return i > -1 ? process.argv[i + 1] : null; })();

const LOC = {
  en: { location_code: 2840, language_code: "en" },
  pl: { location_code: 2616, language_code: "pl" },
  ru: { location_code: 2616, language_code: "ru" },
};

// [язык, фраза, объём, откуда взялась]
// Отобраны 02.11.2026 из drafts/core-coverage.csv: строки, где объём большой,
// а намерение не очевидно. Города и информационные запросы не проверяются.
const PHRASES = [
  ["en", "doctor website", 90500, "stale-gap, своей страницы нет"],
  ["en", "ecommerce website", 33100, "stale-gap, есть только SEO-страница для магазинов"],
  ["en", "translator website", 27100, "stale-gap, совпадение ложное"],
  ["en", "wedding planner website", 22200, "stale-gap, совпало с /catering-seo — ложно"],
  ["en", "painting website", 12100, "stale-gap, есть /seo-for-painting-contractors"],
  ["en", "dj website", 9900, "no-rare-keys"],
  ["en", "gym website", 8100, "no-rare-keys"],
  ["en", "tutoring website", 6600, "gap"],
  ["en", "podcast website", 4400, "gap"],
  ["en", "b2b website", 4400, "no-rare-keys"],
  ["en", "spa website", 3600, "no-rare-keys"],
  ["en", "nutritionist website", 2400, "gap"],
  ["en", "grocery store website", 2400, "gap"],
  ["en", "courier website", 1000, "gap"],
  ["en", "woodworking website", 1000, "gap"],
  ["en", "notary website", 720, "gap"],
  ["en", "clothing store website", 720, "gap"],
];

const auth = Buffer.from(`${process.env.DATAFORSEO_API_LOGIN}:${process.env.DATAFORSEO_API_PASSWORD}`).toString("base64");

async function serp(lang, keyword) {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const { data } = await axios.post(
        "https://api.dataforseo.com/v3/serp/google/organic/live/advanced",
        [{ ...LOC[lang], keyword, device: "desktop", depth: 10 }],
        { headers: { Authorization: `Basic ${auth}` }, timeout: 120000 },
      );
      const t = data.tasks && data.tasks[0];
      if (!t || t.status_code !== 20000) throw new Error(t ? `${t.status_code} ${t.status_message}` : "пустой ответ");
      const items = (t.result && t.result[0] && t.result[0].items) || [];
      return {
        aio: items.some((i) => i.type === "ai_overview"),
        ads: items.filter((i) => i.type === "paid").length,
        organic: items.filter((i) => i.type === "organic").slice(0, 10).map((i) => ({
          domain: i.domain || "", title: i.title || "", breadcrumb: i.breadcrumb || "",
        })),
      };
    } catch (e) {
      if (attempt === 3) throw e;
      await new Promise((r) => setTimeout(r, 6500 * attempt));
    }
  }
}

async function main() {
  const list = ONLY ? PHRASES.filter((p) => p[1] === ONLY) : PHRASES;
  if (!list.length) throw new Error(`Фразы «${ONLY}» в списке нет`);
  const cached = list.filter((p) => fs.existsSync(path.join(CACHE, `${p[0]}-${p[1].replace(/[^\p{L}\p{N}]+/gu, "-")}.json`))).length;
  console.log(`Фраз: ${list.length}, из них в кэше ${cached}, к оплате ${list.length - cached} ≈ $${((list.length - cached) * 0.006).toFixed(2)}.`);
  if (DRY) { console.log("Сухой прогон: ничего не запрошено."); return; }
  if (!process.env.DATAFORSEO_API_LOGIN) throw new Error("Нет DATAFORSEO_API_LOGIN в .env.local");

  const out = [];
  const say = (l = "") => { console.log(l); out.push(l); };
  const file = [];
  say("");
  for (const [lang, kw, vol, src] of list) {
    const cf = path.join(CACHE, `${lang}-${kw.replace(/[^\p{L}\p{N}]+/gu, "-")}.json`);
    let r;
    if (fs.existsSync(cf)) r = JSON.parse(fs.readFileSync(cf, "utf8"));
    else {
      try {
        r = await serp(lang, kw);
        fs.mkdirSync(CACHE, { recursive: true });
        fs.writeFileSync(cf, JSON.stringify(r), "utf8");
      } catch (e) { say(`${lang} ${String(vol).padStart(6)}  «${kw}» — сбой: ${e.message}`); continue; }
      await new Promise((x) => setTimeout(x, 1000));
    }
    const flags = [r.aio ? "AIO" : null, r.ads ? `реклама ${r.ads}` : null].filter(Boolean).join(", ");
    say(`${lang} ${String(vol).padStart(6)}  «${kw}»${flags ? "  [" + flags + "]" : ""}`);
    say(`        ${r.organic.map((o) => o.domain).join("  ")}`);
    file.push(`## ${lang} · «${kw}» — ${vol}/мес`, `Источник строки: ${src}. AI Overview: ${r.aio ? "есть" : "нет"}. Рекламных блоков: ${r.ads}.`, "");
    r.organic.forEach((o, n) => {
      file.push(`${String(n + 1).padStart(2)}. ${o.domain}`, `    ${o.title}`, o.breadcrumb ? `    ${o.breadcrumb}` : "");
    });
    file.push("");
  }
  const dest = path.join(DIR, "owner-intent.md");
  fs.writeFileSync(dest, ["# Владелец или клиент: состав топ-10 по одиночным формам «X website»", "", "Скрипт оценок не ставит. Домены и заголовки читает человек.", ""].concat(file).join("\n") + "\n", "utf8");
  console.log(`\nЗаголовки целиком: research/pseo/owner-intent.md`);
}

main().catch((e) => { console.error(e.message || e); process.exit(1); });
