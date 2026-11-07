// scripts/fix-meta-lengths-wave2.cjs
//
// Second wave of the snippet-length fix found by scripts/check-meta-lengths.cjs
// on 06.11.2026: 101 metaDescriptions over 160 characters and 30 metaTitles
// over 60 across 882 documents. Google cuts the overflow, so the last clause —
// often the price or the point — never reaches the reader.
//
// Wave 1 took the twenty longest descriptions. This wave takes the next
// twenty, 166-170 characters each; none of these pages has an overlong title.
// Shortened, not rewritten: the subject, the keyword and the figure stay, the
// trailing clause goes. Two entries also drop the word "honest"/"uczciwe",
// which the site should not use about itself.
//
// Usage:
//   node scripts/fix-meta-lengths-wave2.cjs --lint     checks lengths only, no network
//   node scripts/fix-meta-lengths-wave2.cjs            dry run against Sanity
//   node scripts/fix-meta-lengths-wave2.cjs --apply    writes
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local"), quiet: true });

const APPLY = process.argv.includes("--apply");
const LINT = process.argv.includes("--lint");

const TITLE_LIMIT = 60;
const DESC_LIMIT = 160;

const EDITS = [
  {
    id: "blog-psychologist-website-checklist.pl",
    url: "/pl/blog/co-powinno-byc-na-stronie-psychologa",
    oldDesc: "Sprawdź, co powinno znaleźć się na stronie psychologa i psychoterapeuty: zaufanie, RODO w formularzu, podstrony pod problemy pacjentów i baza techniczna pod wyszukiwarkę.",
    newDesc: "Co powinno znaleźć się na stronie psychologa i psychoterapeuty: zaufanie, RODO w formularzu, podstrony pod problemy pacjentów i baza techniczna pod SEO.",
  },
  {
    id: "singlepage-startup-website.ru",
    url: "/ru/sait-dlya-startapa",
    oldDesc: "Сайты для стартапов: быстрый запуск, готовность к итерациям, редактирование без разработчика, техническое SEO и готовность к ИИ-поиску с первого дня — и код, который ваш.",
    newDesc: "Сайты для стартапов: быстрый запуск, готовность к итерациям, редактирование без разработчика, техническое SEO и ИИ-поиск с первого дня. Код ваш.",
  },
  {
    id: "blog-ai-misattribution-competitor",
    url: "/blog/when-ai-attributes-your-features-to-a-competitor",
    oldDesc: "AI assistants credit your capabilities to a competitor, or theirs to you. Why the confusion happens, which businesses are most exposed, and how to separate the entities.",
    newDesc: "AI assistants credit your capabilities to a competitor, or theirs to you. Why it happens, which businesses are most exposed, and how to separate the entities.",
  },
  {
    id: "blog-multilingual-website-cost.pl",
    url: "/pl/blog/ile-kosztuje-strona-wielojezyczna",
    oldDesc: "Sprawdź, ile kosztuje strona wielojęzyczna: dlaczego tłumaczenie to mniejsza część pracy, co obejmuje konfiguracja techniczna wersji i jak liczy się każdy kolejny język.",
    newDesc: "Ile kosztuje strona wielojęzyczna: dlaczego tłumaczenie to mniejsza część pracy, co obejmuje konfiguracja techniczna wersji i jak liczy się każdy język.",
  },
  {
    id: "singlepage-lingerie-seo",
    url: "/services/seo-for-lingerie-manufacturers",
    oldDesc: "Search work for lingerie and underwear manufacturers — where paid advertising is restricted, buyers are wholesale, and organic visibility carries more weight than usual.",
    newDesc: "Search work for lingerie and underwear manufacturers: paid advertising is restricted, buyers are wholesale, and organic visibility carries more weight.",
  },
  {
    id: "blog-ai-distorts-marketing-message.ru",
    url: "/ru/blog/kak-ii-otvety-iskazhayut-marketingovoe-soobshchenie",
    oldDesc: "ИИ-ассистенты пересказывают ваше позиционирование до того, как покупатель прочитает сайт. Что переживает пересказ, что исчезает и как писать, чтобы сообщение держалось.",
    newDesc: "ИИ-ассистенты пересказывают ваше позиционирование раньше, чем покупатель откроет сайт. Что переживает пересказ, что исчезает и как писать, чтобы держалось.",
  },
  {
    id: "blog-not-showing-in-google.pl",
    url: "/pl/blog/strona-nie-pojawia-sie-w-google",
    oldDesc: "Sprawdź, dlaczego strona nie pojawia się w Google: jak zweryfikować indeksację, co oznaczają statusy Search Console i czym brak w indeksie różni się od niskich pozycji.",
    newDesc: "Dlaczego strona nie pojawia się w Google: jak zweryfikować indeksację, co oznaczają statusy Search Console i czym brak w indeksie różni się od pozycji.",
  },
  {
    id: "service-ai-brand-monitoring.pl",
    url: "/pl/oferty/monitoring-marki-w-ai",
    oldDesc: "Comiesięczny monitoring tego, co asystenci AI mówią o Waszej firmie: zamrożony zestaw zapytań, udział obecności, znalezione błędy, cytowane źródła i ruch od asystentów.",
    newDesc: "Comiesięczny monitoring tego, co asystenci AI mówią o Waszej firmie: zamrożony zestaw zapytań, udział obecności, znalezione błędy i cytowane źródła.",
  },
  {
    id: "singlepage-recruitment-agency",
    url: "/recruitment-agency-website",
    oldDesc: "Websites for recruitment agencies: job pages with proper structured data, separate paths for employers and candidates, and discreet applications that actually get sent.",
    newDesc: "Websites for recruitment agencies: job pages with proper structured data, separate paths for employers and candidates, and applications that get sent.",
  },
  {
    id: "blog-builder-vs-custom",
    url: "/blog/website-builder-vs-custom-development",
    oldDesc: "An honest comparison of website builders and custom development: when a builder is genuinely enough, where its technical ceiling starts, and how to tell you've hit it.",
    newDesc: "Website builders against custom development: when a builder is enough, where its technical ceiling starts, and how to tell when a business has hit it.",
  },
  {
    id: "blog-builder-vs-custom.pl",
    url: "/pl/blog/kreator-stron-czy-strona-na-zamowienie",
    oldDesc: "Uczciwe porównanie kreatorów stron i tworzenia na zamówienie: kiedy kreator wystarcza, gdzie zaczyna się jego sufit techniczny i po czym poznać, że firma go przerosła.",
    newDesc: "Kreatory stron a tworzenie na zamówienie: kiedy kreator wystarcza, gdzie zaczyna się jego sufit techniczny i po czym poznać, że firma go przerosła.",
  },
  {
    id: "blog-chatgpt-recommendations",
    url: "/blog/how-to-get-recommended-by-chatgpt",
    oldDesc: "A practical guide to getting your business recommended by ChatGPT and other AI assistants: what to implement step by step and how to measure results rather than guess.",
    newDesc: "A practical guide to getting your business recommended by ChatGPT and other AI assistants: what to implement step by step and how to measure results.",
  },
  {
    id: "singlepage-architecture-studio.pl",
    url: "/pl/strona-dla-biura-architektonicznego",
    oldDesc: "Tworzenie stron dla biur architektonicznych: szybkie portfolio pełne zdjęć, podstrony projektów, które rankują, podział według typu projektu i jasny opis etapów pracy.",
    newDesc: "Strony dla biur architektonicznych: szybkie portfolio pełne zdjęć, podstrony projektów, które rankują, podział według typu projektu i etapy pracy.",
  },
  {
    id: "singlepage-gym-seo.pl",
    url: "/pl/pozycjonowanie-strony-silowni",
    oldDesc: "Pozycjonowanie strony siłowni i klubu fitness: wizytówka w Mapach Google, podstrony zajęć i karnetów, MultiSport i FitProfit, opinie i odpowiedzi AI. Audyt od 1000 zł.",
    newDesc: "Pozycjonowanie strony siłowni i klubu fitness: Mapy Google, podstrony zajęć i karnetów, MultiSport i FitProfit, opinie i AI. Audyt od 1000 zł.",
  },
  {
    id: "singlepage-online-booking.ru",
    url: "/ru/sait-s-onlain-zapisyu",
    oldDesc: "Запись, встроенная в сайт, а не приклеенная: реальная доступность в календаре, автоматические напоминания, предоплата и путь от интереса до записи в несколько касаний.",
    newDesc: "Запись, встроенная в сайт, а не приклеенная: реальная доступность в календаре, автоматические напоминания, предоплата и путь до записи в пару касаний.",
  },
  {
    id: "singlepage-startup-website.pl",
    url: "/pl/strona-dla-startupu",
    oldDesc: "Strony dla startupów: szybkie uruchomienie, gotowe na iteracje, edytowalne bez programisty, z technicznym SEO i gotowością na wyszukiwanie AI — i kod, który jest Wasz.",
    newDesc: "Strony dla startupów: szybkie uruchomienie, gotowe na iteracje, edytowalne bez programisty, z technicznym SEO i gotowością na AI. Kod jest Wasz.",
  },
  {
    id: "singlepage-veterinary-clinic.pl",
    url: "/pl/strona-dla-przychodni-weterynaryjnej",
    oldDesc: "Tworzenie stron dla przychodni weterynaryjnych: informacja o dyżurach widoczna od razu, podstrony według gatunków i specjalizacji, treści o profilaktyce i lokalne SEO.",
    newDesc: "Strony dla przychodni weterynaryjnych: dyżury widoczne od razu, podstrony według gatunków i specjalizacji, treści o profilaktyce i lokalne SEO.",
  },
  {
    id: "blog-found-via-chatgpt.ru",
    url: "/ru/blog/kak-klienty-nahodyat-cherez-chatgpt",
    oldDesc: "Разбираем на реальном примере, как люди ищут подрядчиков через ChatGPT и другие ИИ-ассистенты, почему одни сайты попадают в ответы, а другие нет, и что с этим делать.",
    newDesc: "Разбираем на реальном примере, как люди ищут подрядчиков через ChatGPT, почему одни сайты попадают в ответы, а другие нет, и что с этим делать.",
  },
  {
    id: "blog-llms-txt",
    url: "/blog/does-your-site-need-llms-txt",
    oldDesc: "What an llms.txt file is, its format with a working example, how to create one by hand or from a CMS, and what the measurements say about whether it changes anything.",
    newDesc: "What an llms.txt file is, its format with a working example, how to create one by hand or from a CMS, and what the measurements say about its effect.",
  },
  {
    id: "service-ai-visibility-audit",
    url: "/services/ai-visibility-audit",
    oldDesc: "A baseline audit of what ChatGPT, Perplexity and Google's AI answers say about your company: a fixed prompt set, source tracing for every error, and a written report.",
    newDesc: "A baseline audit of what ChatGPT, Perplexity and Google's AI answers say about your company: a fixed prompt set, source tracing and a written report.",
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
