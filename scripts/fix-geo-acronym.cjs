// scripts/fix-geo-acronym.cjs
//
// Фактическая ошибка в расшифровке аббревиатуры GEO.
//
// На сайте она раскрывается как «Generative Experience Optimization».
// Правильно — «Generative Engine Optimization»: термин из работы 2023 года,
// в которой он и появился, и именно в этом виде его вводят в поиск
// (260 запросов в месяц, тренд +243%).
// «Search Generative Experience» — это SGE, другое понятие: так назывался
// эксперимент Google с ИИ-ответами в выдаче, а не метод оптимизации.
//
// Где встречается (по инвентарю от 08.09, только тело страниц):
//   en seo-optimization-and-strategy    2
//   pl strategia-i-optymalizacja-seo    3
//   pl tworzenie-landing-page           2
//   ru seo-optimizaciya-i-strategiya    1
//   ru razrabotka-lendingov             2
// Плюс excerpt и metaDescription страницы ai-ready-seo-and-geo-optimization —
// их чинит apply-en-geo-lexicon.cjs, здесь они не трогаются.
//
// Ошибка стоит на страницах, которые продают экспертизу ровно в этой теме,
// и это первое, что процитирует ассистент, если возьмёт текст со страницы.
//
//   node scripts/fix-geo-acronym.cjs          → сухой прогон
//   node scripts/fix-geo-acronym.cjs --apply  → применяет
const fs = require("fs");
const path = require("path");
const groq = String.raw;
const { createClient } = require("@sanity/client");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local") });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const APPLY = process.argv.includes("--apply");

const WRONG = "Generative Experience Optimization";
const RIGHT = "Generative Engine Optimization";

/** Подстрочная замена внутри строковых значений. Считает попадания. */
function replaceSub(node, from, to, counter) {
  if (Array.isArray(node)) return node.map((n) => replaceSub(n, from, to, counter));
  if (!node || typeof node !== "object") return node;
  const out = {};
  for (const [k, v] of Object.entries(node)) {
    if (typeof v === "string" && v.includes(from)) {
      counter.n += v.split(from).length - 1;
      out[k] = v.split(from).join(to);
    } else out[k] = replaceSub(v, from, to, counter);
  }
  return out;
}

async function main() {
  const report = [];
  const say = (l = "") => {
    console.log(l);
    report.push(l);
  };

  // забираем документы целиком одним запросом и ищем локально —
  // так найдётся и то, что появилось после снятия инвентаря,
  // и не зависим от того, какие GROQ-функции доступны
  const all = await client.fetch(
    groq`*[_type in ["singlepage", "blog", "portfolio"]]`,
  );
  const candidates = all.filter((d) => JSON.stringify(d).includes(WRONG));

  say("=".repeat(70));
  say(`Замена: «${WRONG}» → «${RIGHT}»`);
  say(`Документов всего: ${all.length}. С ошибкой: ${candidates.length}.`);

  let touched = 0;
  let total = 0;
  for (const doc of candidates) {
    const slug =
      (doc.slug && (doc.slug.current || (doc.slug[doc.language] && doc.slug[doc.language].current))) || "?";
    const counter = { n: 0 };
    const patched = replaceSub(doc, WRONG, RIGHT, counter);
    touched += 1;
    total += counter.n;
    say(`\n  [${doc.language}] ${doc._type} ${slug} — вхождений: ${counter.n}`);

    // показываем контекст каждого вхождения
    const ctx = JSON.stringify(doc).split(WRONG);
    for (let i = 0; i < ctx.length - 1; i++) {
      const tail = ctx[i].slice(-70).replace(/\\"/g, '"');
      const head = ctx[i + 1].slice(0, 50).replace(/\\"/g, '"');
      say(`     …${tail}[${WRONG}]${head}…`);
    }

    // патчим только те поля верхнего уровня, которые действительно изменились
    const changed = {};
    for (const k of Object.keys(patched)) {
      if (k.startsWith("_")) continue;
      if (JSON.stringify(patched[k]) !== JSON.stringify(doc[k])) changed[k] = patched[k];
    }
    say(`     поля к записи: ${Object.keys(changed).join(", ") || "(нет)"}`);

    if (APPLY) {
      await client.patch(doc._id).set(changed).commit();
      say("     → применено");
    }
  }

  say(`\nДокументов с ошибкой: ${touched}. Вхождений всего: ${total}.`);
  if (!APPLY) say("Это сухой прогон. Применить: node scripts/fix-geo-acronym.cjs --apply");

  const name = APPLY ? "geo-acronym-applied.txt" : "geo-acronym-dry-run.txt";
  fs.writeFileSync(path.resolve(__dirname, "../drafts/" + name), report.join("\n"), "utf8");
  console.log(`\nОтчёт: drafts/${name}`);
}

main().catch((e) => {
  console.error("Ошибка:", e.message);
  process.exit(1);
});
