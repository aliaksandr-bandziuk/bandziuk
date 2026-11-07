// scripts/fix-meta-lengths-wave1.cjs
//
// First wave of the snippet-length fix found by scripts/check-meta-lengths.cjs
// on 06.11.2026: 101 metaDescriptions over 160 characters and 30 metaTitles
// over 60 across 882 documents. Google cuts the overflow, so the last clause —
// often the price or the point — never reaches the reader.
//
// This wave takes the twenty longest descriptions and the five titles that
// overflow on the same pages. Shortened, not rewritten: the subject, the
// keyword and the figure stay, the trailing clause goes.
//
// Usage:
//   node scripts/fix-meta-lengths-wave1.cjs --lint     checks lengths only, no network
//   node scripts/fix-meta-lengths-wave1.cjs            dry run against Sanity
//   node scripts/fix-meta-lengths-wave1.cjs --apply    writes
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local"), quiet: true });

const APPLY = process.argv.includes("--apply");
const LINT = process.argv.includes("--lint");

const TITLE_LIMIT = 60;
const DESC_LIMIT = 160;

const EDITS = [
  {
    id: "service-ai-misinformation-correction.ru",
    url: "/ru/uslugi/ispravlenie-nevernyh-dannyh-v-ii",
    oldTitle: "Исправление неверных данных о компании в ChatGPT и ИИ | Bandziuk",
    newTitle: "Исправление неверных данных о компании в ChatGPT и ИИ",
    oldDesc: "ChatGPT описывает вашу компанию неверно. Нахожу утверждение до источника — ваши страницы, карточки в справочниках, Wikidata, граф знаний — исправляю исправимое и прямо говорю, что таковым не является. От 800 €.",
    newDesc: "ChatGPT описывает вашу компанию неверно. Нахожу источник утверждения — страницы, справочники, Wikidata, граф знаний — и исправляю исправимое. От 800 €.",
  },
  {
    id: "service-ai-misinformation-correction",
    url: "/services/fix-ai-misinformation",
    oldTitle: "Fix Wrong Information About Your Company in ChatGPT & AI Answers",
    newTitle: "Fix What ChatGPT Gets Wrong About Your Company",
    oldDesc: "ChatGPT describes your company incorrectly. I trace the claim to its source — your pages, directory listings, Wikidata, the knowledge graph — correct what's correctable and say plainly what isn't. From €800.",
    newDesc: "ChatGPT describes your company incorrectly. I trace the claim to its source — your pages, directories, Wikidata, knowledge graph — and correct it. From €800.",
  },
  {
    id: "blog-legalizacja-cudzoziemcy.pl",
    url: "/pl/blog/strona-biura-obslugi-cudzoziemcow",
    oldDesc: "Poradnik dla biur legalizacji pobytu i agencji relokacyjnych: 9 900 zapytań o kartę pobytu i 480 o zezwolenie na pracę dla cudzoziemca miesięcznie. Kto je dziś zbiera i czego brakuje na waszej stronie.",
    newDesc: "Poradnik dla biur legalizacji pobytu i agencji relokacyjnych: 9 900 zapytań o kartę pobytu miesięcznie. Kto je zbiera i czego brakuje na waszej stronie.",
  },
  {
    id: "service-ai-misinformation-correction.pl",
    url: "/pl/oferty/poprawa-blednych-danych-w-ai",
    oldDesc: "ChatGPT opisuje Waszą firmę błędnie. Namierzam twierdzenie do źródła — Wasze strony, wpisy w katalogach, Wikidata, graf wiedzy — poprawiam to, co naprawialne, i mówię wprost, co nie jest. Od 3500 zł.",
    newDesc: "ChatGPT opisuje Waszą firmę błędnie. Namierzam źródło twierdzenia — strony, katalogi, Wikidata, graf wiedzy — i poprawiam to, co naprawialne. Od 3500 zł.",
  },
  {
    id: "blog-legalizacja-cudzoziemcy",
    url: "/blog/search-queries-that-bring-immigration-clients",
    oldDesc: "For residency, citizenship and visa advisory firms: golden visa gets 6,600 searches a month with buyers behind it, while the bigger numbers in the niche belong to charities and movers.",
    newDesc: "For residency, citizenship and visa advisers: golden visa draws 6,600 searches a month with buyers behind it, while the bigger numbers belong elsewhere.",
  },
  {
    id: "dd5a054f-83a1-4865-93f3-625c2ecdacc2",
    url: "/ru/uslugi/razrabotka-lendingov",
    oldTitle: "Разработка лендингов — кастомные, быстрые страницы под лиды и SEO",
    newTitle: "Разработка лендингов: быстрые страницы под лиды и SEO",
    oldDesc: "Создаю лендинги на Next.js или WordPress: быстрые, SEO-оптимизированные и готовые к интеграции с CRM, аналитикой и A/B тестами. Лендинги, которые приносят клиентов, а не просто трафик.",
    newDesc: "Создаю лендинги на Next.js или WordPress: быстрые, готовые к интеграции с CRM, аналитикой и A/B-тестами. Приносят клиентов, а не просто трафик.",
  },
  {
    id: "70ad1e7c-e5e9-487a-abde-4f24a9105329",
    url: "/pl/blog/strona-agencji-nieruchomosci-cypr",
    oldTitle: "Jak strona internetowa pomaga agencji nieruchomości pozyskiwać klientów",
    newTitle: "Strona agencji nieruchomości: jak pozyskiwać klientów",
    oldDesc: "Strategiczna analiza: jak dobrze zaprojektowana strona internetowa pomaga agencji nieruchomości budować widoczność, zaufanie i przyciągać klientów w Polsce oraz na rynku cypryjskim.",
    newDesc: "Jak zaprojektowana strona pomaga agencji nieruchomości budować widoczność i zaufanie oraz pozyskiwać klientów w Polsce i na rynku cypryjskim.",
  },
  {
    id: "singlepage-catalog-website.pl",
    url: "/pl/strona-katalogowa-z-filtrami",
    oldDesc: "Strony katalogowe zbudowane do wyszukiwania i znajdowania: natychmiastowe filtry, indeksowalne podstrony, automatyczna synchronizacja z bazą i szybkość przy dużej liczbie pozycji.",
    newDesc: "Strony katalogowe zbudowane do wyszukiwania: natychmiastowe filtry, indeksowalne podstrony, synchronizacja z bazą i szybkość przy tysiącach pozycji.",
  },
  {
    id: "singlepage-thailand.ru",
    url: "/ru/uslugi/lokacii/razrabotka-saitov-tailand",
    oldDesc: "Сайты для компаний в Таиланде — построенные под отображение тайского письма и связь через мессенджеры, а не приспособленные из шаблона, не рассчитанного ни на то, ни на другое.",
    newDesc: "Сайты для компаний в Таиланде: построены под тайское письмо и связь через мессенджеры, а не приспособлены из неподходящего шаблона.",
  },
  {
    id: "singlepage-manufacturing-company",
    url: "/manufacturing-company-website",
    oldDesc: "Websites for manufacturers: products described by specification, technical documentation available, certifications visible, and structured quote requests that arrive complete.",
    newDesc: "Websites for manufacturers: products described by specification, documentation available, certifications visible and quote requests that arrive complete.",
  },
  {
    id: "21d6001f-5181-4249-aef2-5ed9425bf81d",
    url: "/ru/uslugi/razrabotka-saitov",
    oldDesc: "Сайты на Next.js, Sanity или WordPress с Core Web Vitals, структурированными данными и техническим SEO, заложенными при разработке. Один разработчик, без агентской прослойки.",
    newDesc: "Сайты на Next.js, Sanity или WordPress с Core Web Vitals, микроразметкой и техническим SEO, заложенными при разработке. Один разработчик, без агентства.",
  },
  {
    id: "42a469a6-28f3-4015-8b88-414c8eb3d4fa",
    url: "/services/seo-optimization-and-strategy",
    oldTitle: "SEO Strategy & Optimization — Technical SEO for Google & AI Search",
    newTitle: "SEO Strategy and Optimization for Google and AI Search",
    oldDesc: "I develop and implement SEO strategies: technical optimization, schema.org, hreflang, crawlability, internal linking, and AI-ready metadata for Google and new search engines.",
    newDesc: "SEO strategy developed and implemented: technical optimization, schema.org, hreflang, crawlability, internal linking and AI-ready metadata.",
  },
  {
    id: "singlepage-logistics-company.pl",
    url: "/pl/strona-dla-firmy-transportowej",
    oldDesc: "Tworzenie stron dla firm transportowych: uporządkowane zapytania o wycenę, sprawdzanie statusu przesyłki, podstrony według rodzaju ładunku i skuteczna rekrutacja kierowców.",
    newDesc: "Strony dla firm transportowych: uporządkowane zapytania o wycenę, status przesyłki, podstrony według rodzaju ładunku i rekrutacja kierowców.",
  },
  {
    id: "singlepage-online-booking.pl",
    url: "/pl/strona-z-rezerwacja-online",
    oldDesc: "Rezerwacja wbudowana w stronę, nie doklejona: realna dostępność w kalendarzu, automatyczne przypomnienia, zadatki i droga od zainteresowania do rezerwacji w kilka kliknięć.",
    newDesc: "Rezerwacja wbudowana w stronę, nie doklejona: realna dostępność w kalendarzu, automatyczne przypomnienia, zadatki i rezerwacja w kilka kliknięć.",
  },
  {
    id: "singlepage-platform-migration.pl",
    url: "/pl/migracja-strony-na-inna-platforme",
    oldDesc: "Przeniesienie strony na nową platformę bez utraty pozycji: zachowana struktura adresów, mapa przekierowań, przeniesione znaczniki i wersje językowe, weryfikacja po starcie.",
    newDesc: "Przeniesienie strony na nową platformę bez utraty pozycji: struktura adresów, mapa przekierowań, znaczniki i wersje językowe, kontrola po starcie.",
  },
  {
    id: "b35e57c9-9cce-4ebd-ab05-5121ffa38fef",
    url: "/pl/oferty/tworzenie-stron-internetowych",
    oldDesc: "Strony na Next.js, Sanity albo WordPressie z Core Web Vitals, danymi strukturalnymi i SEO technicznym zrobionymi w trakcie budowy. Jeden developer, bez warstwy agencyjnej.",
    newDesc: "Strony na Next.js, Sanity albo WordPressie z Core Web Vitals, danymi strukturalnymi i SEO technicznym w trakcie budowy. Jeden developer, bez agencji.",
  },
  {
    id: "blog-found-via-chatgpt.pl",
    url: "/pl/blog/jak-klienci-znajduja-specjalistow-przez-chatgpt",
    oldDesc: "Na prawdziwym przykładzie: jak ludzie szukają wykonawców przez ChatGPT i innych asystentów AI, dlaczego jedne strony trafiają do odpowiedzi, a inne nie, i co z tym zrobić.",
    newDesc: "Na prawdziwym przykładzie: jak ludzie szukają wykonawców przez ChatGPT, dlaczego jedne strony trafiają do odpowiedzi, a inne nie, i co z tym zrobić.",
  },
  {
    id: "singlepage-veterinary-clinic",
    url: "/veterinary-clinic-website",
    oldDesc: "Websites for veterinary clinics: emergency information that's instantly findable, pages by species and specialisation, preventive care content and local search visibility.",
    newDesc: "Websites for veterinary clinics: emergency information found instantly, pages by species and specialisation, preventive care and local visibility.",
  },
  {
    id: "blog-legalizacja-cudzoziemcy.ru",
    url: "/ru/blog/sait-agentstva-po-legalizacii",
    oldDesc: "Для агентств по легализации и релокации: 2 400 запросов «карта побыту» в месяц в Польше собирают конкуренты, а не ведомства. Разбор выдачи и чего не хватает вашему сайту.",
    newDesc: "Для агентств по легализации и релокации: 2 400 запросов «карта побыту» в месяц собирают конкуренты, а не ведомства. Чего не хватает вашему сайту.",
  },
  {
    id: "blog-multilingual-website-cost",
    url: "/blog/multilingual-website-cost",
    oldDesc: "How much does a multilingual website cost? Why translation is the smaller half of the work, what the technical locale setup involves, and how each extra language adds up.",
    newDesc: "What a multilingual website costs: why translation is the smaller half, what the technical locale setup involves, and how each language adds up.",
  },
];

function lint() {
  let bad = 0;
  const seen = new Set();
  for (const e of EDITS) {
    if (seen.has(e.id)) { console.log(`DUPLICATE id ${e.id}`); bad += 1; }
    seen.add(e.id);
    if (e.newDesc.length > DESC_LIMIT) { console.log(`DESC ${e.newDesc.length} > ${DESC_LIMIT}  ${e.url}`); bad += 1; }
    if (e.newTitle && e.newTitle.length > TITLE_LIMIT) { console.log(`TITLE ${e.newTitle.length} > ${TITLE_LIMIT}  ${e.url}`); bad += 1; }
    if (e.newDesc === e.oldDesc) { console.log(`NO CHANGE in description  ${e.url}`); bad += 1; }
    if (e.newTitle && e.newTitle === e.oldTitle) { console.log(`NO CHANGE in title  ${e.url}`); bad += 1; }
  }
  console.log(`${EDITS.length} entries, ${bad} problem(s).`);
  if (!bad) {
    console.log("\nlengths:");
    EDITS.forEach((e) => console.log(`  desc ${String(e.newDesc.length).padStart(3)}${e.newTitle ? `  title ${String(e.newTitle.length).padStart(2)}` : "          "}  ${e.url}`));
  }
  return bad;
}

async function main() {
  const problems = lint();
  if (LINT) process.exit(problems ? 1 : 0);
  if (problems) {
    console.log("\nAborting — fix the entries above first.");
    process.exit(1);
  }

  const { createClient } = require("@sanity/client");
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: "2025-08-04",
    token: process.env.SANITY_API_TOKEN,
    useCdn: false,
  });

  console.log("");
  const plan = [];
  const failed = [];
  let skipped = 0;

  for (const e of EDITS) {
    const draft = await client.getDocument(`drafts.${e.id}`);
    if (draft) { failed.push(`${e.url}: has an unpublished draft`); continue; }

    const doc = await client.getDocument(e.id);
    if (!doc) { failed.push(`${e.url}: document ${e.id} not found`); continue; }

    const curDesc = (doc.seo && doc.seo.metaDescription) || "";
    const curTitle = (doc.seo && doc.seo.metaTitle) || "";

    const descDone = curDesc === e.newDesc;
    const titleDone = !e.newTitle || curTitle === e.newTitle;
    if (descDone && titleDone) { console.log(`${e.url}\n  already applied\n`); skipped += 1; continue; }

    if (!descDone && curDesc !== e.oldDesc) {
      failed.push(`${e.url}: the current description is neither the old nor the new version`);
      continue;
    }
    if (e.newTitle && !titleDone && curTitle !== e.oldTitle) {
      failed.push(`${e.url}: the current metaTitle is neither the old nor the new version`);
      continue;
    }

    const set = {};
    if (!descDone) set["seo.metaDescription"] = e.newDesc;
    if (e.newTitle && !titleDone) set["seo.metaTitle"] = e.newTitle;

    console.log(`${e.url}`);
    if (set["seo.metaTitle"]) console.log(`  title ${curTitle.length} -> ${e.newTitle.length}\n    «${e.newTitle}»`);
    if (set["seo.metaDescription"]) console.log(`  desc  ${curDesc.length} -> ${e.newDesc.length}\n    «${e.newDesc}»`);
    console.log("");

    plan.push({ e, set, rev: doc._rev });
  }

  if (failed.length) {
    console.log("Problems:");
    failed.forEach((f) => console.log(`  ${f}`));
    console.log("\nAborting — nothing written, so one stale row cannot half-apply the wave.");
    process.exit(1);
  }

  if (!APPLY) {
    console.log(`Dry run — nothing written. ${plan.length} document(s) would change, ${skipped} already applied.`);
    return;
  }

  for (const { e, set, rev } of plan) {
    await client.patch(e.id).ifRevisionId(rev).set(set).commit();
  }

  const stillWrong = [];
  for (const { e } of plan) {
    const after = await client.getDocument(e.id);
    const d = (after.seo && after.seo.metaDescription) || "";
    const t = (after.seo && after.seo.metaTitle) || "";
    if (d !== e.newDesc) stillWrong.push(`${e.url}: description`);
    if (e.newTitle && t !== e.newTitle) stillWrong.push(`${e.url}: metaTitle`);
  }
  if (stillWrong.length) {
    console.log("WARNING — re-read does not match what was written:");
    stillWrong.forEach((s) => console.log(`  ${s}`));
    process.exit(1);
  }
  console.log(`Done: ${plan.length} written, ${skipped} already applied. Self-check passed.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
