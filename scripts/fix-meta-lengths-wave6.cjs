// scripts/fix-meta-lengths-wave6.cjs
//
// Final wave of the snippet-length fix found by scripts/check-meta-lengths.cjs
// on 06.11.2026: 101 metaDescriptions over 160 characters and 30 metaTitles
// over 60 across 882 documents. Google cuts the overflow, so the last clause —
// often the price or the point — never reaches the reader.
//
// Waves 1-5 and fix-meta-index-pages.cjs cleared every overlong metaTitle and
// the sixty longest descriptions. This wave takes the remaining forty, all of
// them 161-164 characters, so each loses only a word or two: a leading
// «Sprawdź,» or «Разбираем,», one item from a list, a redundant clause. The
// subject, the keyword and the price stay in every one.
//
// Usage:
//   node scripts/fix-meta-lengths-wave6.cjs --lint     checks lengths only, no network
//   node scripts/fix-meta-lengths-wave6.cjs            dry run against Sanity
//   node scripts/fix-meta-lengths-wave6.cjs --apply    writes
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local"), quiet: true });

const APPLY = process.argv.includes("--apply");
const LINT = process.argv.includes("--lint");

const TITLE_LIMIT = 60;
const DESC_LIMIT = 160;

const EDITS = [
  {
    id: "singlepage-seo-for-chiropractors.pl",
    url: "/pl/pozycjonowanie-strony-gabinetu-fizjoterapii",
    oldDesc: "Pozycjonowanie strony gabinetu fizjoterapii, osteopatii i terapii manualnej: wizytówka Google, podstrony problemów, NFZ, opinie i widoczność w AI. Audyt od 1000 zł.",
    newDesc: "Pozycjonowanie strony gabinetu fizjoterapii, osteopatii i terapii manualnej: wizytówka Google, podstrony problemów, NFZ i AI. Audyt od 1000 zł.",
  },
  {
    id: "blog-ai-outdated-information",
    url: "/blog/where-ai-gets-outdated-information-about-your-company",
    oldDesc: "AI assistants describe your company as it was two years ago. Here is where that information lives, why your own website doesn't override it, and how to cut it off.",
    newDesc: "AI assistants describe your company as it was two years ago. Where that information lives, why your website does not override it, and how to cut it off.",
  },
  {
    id: "blog-construction-website-cost.pl",
    url: "/pl/blog/ile-kosztuje-strona-dla-firmy-budowlanej",
    oldDesc: "Sprawdź, ile kosztuje strona dla firmy budowlanej: od czego zależy cena, dlaczego podstrony realizacji przynoszą zapytania i czym różni się klient prywatny od B2B.",
    newDesc: "Ile kosztuje strona dla firmy budowlanej: od czego zależy cena, dlaczego podstrony realizacji przynoszą zapytania i czym różni się klient prywatny od B2B.",
  },
  {
    id: "blog-construction-website-cost.ru",
    url: "/ru/blog/skolko-stoit-sait-dlya-stroitelnoy-kompanii",
    oldDesc: "Разбираем, сколько стоит сайт для строительной компании: от чего зависит цена, почему страницы реализаций приводят заявки и что отличает частного заказчика от B2B.",
    newDesc: "Сколько стоит сайт для строительной компании: от чего зависит цена, почему страницы реализаций приводят заявки и что отличает частного заказчика от B2B.",
  },
  {
    id: "blog-how-to-choose-developer",
    url: "/blog/how-to-choose-a-web-developer",
    oldDesc: "How to choose a web developer: the questions to ask before signing, how to verify a portfolio, who owns the domain and code, and the answers that should worry you.",
    newDesc: "How to choose a web developer: what to ask before signing, how to verify a portfolio, who owns the domain and code, and the answers that should worry you.",
  },
  {
    id: "blog-how-to-choose-developer.ru",
    url: "/ru/blog/kak-vybrat-razrabotchika-saita",
    oldDesc: "Разбираем, как выбрать разработчика сайта: какие вопросы задать до договора, как проверить портфолио, кому принадлежат домен и код и по каким признакам отказаться.",
    newDesc: "Как выбрать разработчика сайта: какие вопросы задать до договора, как проверить портфолио, кому принадлежат домен и код и по каким признакам отказаться.",
  },
  {
    id: "blog-not-showing-in-google",
    url: "/blog/website-not-showing-in-google",
    oldDesc: "Why isn't my website showing in Google? How to check indexation, what the Search Console statuses mean, and how \"not indexed\" differs from \"indexed but invisible\".",
    newDesc: "Why a website is not showing in Google: how to check indexation, what the Search Console statuses mean, and how not indexed differs from low rankings.",
  },
  {
    id: "blog-not-showing-in-google.ru",
    url: "/ru/blog/saita-net-v-poiske-google",
    oldDesc: "Разбираем, почему сайта нет в поиске Google: как проверить индексацию, что означают статусы Search Console и чем отличается отсутствие в индексе от низких позиций.",
    newDesc: "Почему сайта нет в поиске Google: как проверить индексацию, что означают статусы Search Console и чем отличается отсутствие в индексе от низких позиций.",
  },
  {
    id: "blog-real-estate-agency-checklist",
    url: "/blog/what-a-real-estate-agency-website-needs",
    oldDesc: "A point-by-point checklist of what a real estate agency website must have: a filterable catalogue, full property pages, location pages and lead capture that works.",
    newDesc: "A checklist of what a real estate agency website must have: a filterable catalogue, full property pages, location pages and lead capture that works.",
  },
  {
    id: "service-ai-search-readiness",
    url: "/services/ai-search-readiness",
    oldDesc: "Making a site legible to AI assistants: facts stated as checkable claims, structured data, content reachable without scripts, and copy that survives summarisation.",
    newDesc: "Making a site legible to AI assistants: facts stated as checkable claims, structured data, content reachable without scripts, copy that survives summary.",
  },
  {
    id: "singlepage-florist-seo.pl",
    url: "/pl/pozycjonowanie-strony-kwiaciarni",
    oldDesc: "Pozycjonowanie strony kwiaciarni: podstrony dostawy kwiatów w dzielnicach, Dzień Kobiet i Dzień Matki, wizytówka Google, Allegro i odpowiedzi AI. Audyt od 1000 zł.",
    newDesc: "Pozycjonowanie strony kwiaciarni: podstrony dostawy kwiatów w dzielnicach, Dzień Kobiet i Dzień Matki, wizytówka Google i AI. Audyt od 1000 zł.",
  },
  {
    id: "singlepage-garage-door-seo.pl",
    url: "/pl/pozycjonowanie-strony-firmy-bram-garazowych",
    oldDesc: "Pozycjonowanie strony firmy bram garażowych: podstrony bram, napędów i serwisu, strony producentów, realizacje, wizytówka Google i odpowiedzi AI. Audyt od 1000 zł.",
    newDesc: "Pozycjonowanie strony firmy bram garażowych: podstrony bram, napędów i serwisu, strony producentów, wizytówka Google i AI. Audyt od 1000 zł.",
  },
  {
    id: "singlepage-locations",
    url: "/services/locations",
    oldDesc: "Website development and SEO for specific markets — what differs by country, which language mix a market actually needs, and how projects are set up across borders.",
    newDesc: "Website development and SEO for specific markets: what differs by country, which language mix a market needs, and how projects are set up across borders.",
  },
  {
    id: "9fe5b88b-edd7-47a4-9fc5-b049e7e40237",
    url: "/portfolio/anti-spam-protection-for-website-forms",
    oldDesc: "Server-side filter blocked 98% of form spam — no CAPTCHA friction for real users. Conversions held, CRM stayed clean, email reputation protected. Full case study.",
    newDesc: "Server-side filter blocked 98% of form spam with no CAPTCHA friction. Conversions held, CRM stayed clean, email reputation protected. Full case study.",
  },
  {
    id: "blog-auto-repair-website-cost",
    url: "/blog/auto-repair-shop-website-cost",
    oldDesc: "How much does an auto repair shop website cost? What drives the price, which features actually generate enquiries, and why a maps listing isn't enough on its own.",
    newDesc: "What an auto repair shop website costs: what drives the price, which features generate enquiries, and why a maps listing is not enough on its own.",
  },
  {
    id: "blog-platform-choice.ru",
    url: "/ru/blog/na-chem-delat-sait-biznesu",
    oldDesc: "Разбираем, на чём делать сайт бизнесу: WordPress, кастомная тема или современный фреймворк вроде Next.js. Что дешевле в год, что быстрее и что легче поддерживать.",
    newDesc: "На чём делать сайт бизнесу: WordPress, кастомная тема или современный фреймворк вроде Next.js. Что дешевле в год, что быстрее и что легче поддерживать.",
  },
  {
    id: "blog-psychologist-website-checklist.ru",
    url: "/ru/blog/chto-dolzhno-byt-na-saite-psihologa",
    oldDesc: "Разбираем по разделам, что должно быть на сайте психолога и психотерапевта: доверие, конфиденциальность, запись, страницы под запросы клиентов и техническая база.",
    newDesc: "Что должно быть на сайте психолога и психотерапевта: доверие, конфиденциальность, запись, страницы под запросы клиентов и техническая база.",
  },
  {
    id: "f9269d94-976e-43cd-bacb-8ed3c60039cd",
    url: "/services/landing-page-development",
    oldDesc: "Custom landing pages with Next.js or WordPress: fast, conversion-focused, with analytics and integrations. Purpose-built for your specific offer — not a template.",
    newDesc: "Custom landing pages with Next.js or WordPress: fast, conversion-focused, with analytics and integrations. Built for your offer, not a template.",
  },
  {
    id: "service-international-seo",
    url: "/services/international-seo",
    oldDesc: "Search work across several markets at once — site structure, hreflang, choosing which markets are worth entering, and reporting that never averages them together.",
    newDesc: "Search work across several markets at once: site structure, hreflang, choosing which markets are worth entering, and reporting that never averages them.",
  },
  {
    id: "singlepage-logistics-company",
    url: "/logistics-company-website",
    oldDesc: "Websites for transport and logistics companies: structured quote requests, shipment status lookup, service pages by cargo type, and driver recruitment that works.",
    newDesc: "Websites for transport and logistics companies: structured quote requests, shipment status lookup, service pages by cargo type and driver recruitment.",
  },
  {
    id: "singlepage-logistics-company.ru",
    url: "/ru/sait-dlya-transportnoy-kompanii",
    oldDesc: "Разработка сайтов для транспортных компаний: структурированные запросы на расчёт, проверка статуса груза, страницы по типам перевозок и работающий наём водителей.",
    newDesc: "Сайты для транспортных компаний: структурированные запросы на расчёт, проверка статуса груза, страницы по типам перевозок и работающий наём водителей.",
  },
  {
    id: "singlepage-optometry-seo.pl",
    url: "/pl/pozycjonowanie-strony-salonu-optycznego",
    oldDesc: "Pozycjonowanie strony salonu optycznego: badanie wzroku, soczewki, marki opraw, wizytówka Google każdego salonu, opinie, RODO i widoczność w AI. Audyt od 1000 zł.",
    newDesc: "Pozycjonowanie strony salonu optycznego: badanie wzroku, soczewki, marki opraw, wizytówka Google każdego salonu, opinie i AI. Audyt od 1000 zł.",
  },
  {
    id: "singlepage-pest-control-seo.pl",
    url: "/pl/pozycjonowanie-strony-firmy-ddd",
    oldDesc: "Pozycjonowanie strony firmy DDD: podstrony szkodników, deratyzacja dla wspólnot, oferta HACCP dla gastronomii, wizytówka Google i odpowiedzi AI. Audyt od 1000 zł.",
    newDesc: "Pozycjonowanie strony firmy DDD: podstrony szkodników, deratyzacja dla wspólnot, HACCP dla gastronomii, wizytówka Google i AI. Audyt od 1000 zł.",
  },
  {
    id: "singlepage-photographer.pl",
    url: "/pl/strona-dla-fotografa",
    oldDesc: "Tworzenie stron dla fotografów: portfolio rozdzielone według gatunków, szybkie galerie, pakiety cenowe, zapytania o wolne terminy i prywatne galerie dla klientów.",
    newDesc: "Strony dla fotografów: portfolio rozdzielone według gatunków, szybkie galerie, pakiety cenowe, zapytania o terminy i prywatne galerie dla klientów.",
  },
  {
    id: "singlepage-seo-przychodnia-warszawa.pl",
    url: "/pl/oferty/pozycjonowanie-strony-przychodni-warszawa",
    oldDesc: "Widoczność placówki medycznej w Warszawie — pacjent szuka tego, co mu dolega, a strona jest ułożona według poradni. Praca polega na połączeniu tych dwóch języków.",
    newDesc: "Widoczność przychodni w Warszawie: pacjent szuka tego, co mu dolega, a strona jest ułożona według poradni. Praca łączy te dwa języki. Audyt od 1000 zł.",
  },
  {
    id: "singlepage-startup-website",
    url: "/startup-website",
    oldDesc: "Websites for startups: fast to launch, built to iterate, editable without a developer, with technical SEO and AI-search readiness from day one — and code you own.",
    newDesc: "Websites for startups: fast to launch, built to iterate, editable without a developer, with technical SEO and AI-search readiness from day one.",
  },
  {
    id: "singlepage-travel-agency",
    url: "/travel-agency-website",
    oldDesc: "Websites for travel agencies: destination content that ranks, offers people can actually compare, visible financial protection and enquiries that arrive complete.",
    newDesc: "Websites for travel agencies: destination content that ranks, offers people can compare, visible financial protection and complete enquiries.",
  },
  {
    id: "singlepage-veterinary-clinic.ru",
    url: "/ru/sait-dlya-veterinarnoy-kliniki",
    oldDesc: "Разработка сайтов для ветклиник: информация о срочном приёме сразу на виду, страницы по видам животных и специализациям, контент о профилактике и локальный поиск.",
    newDesc: "Сайты для ветклиник: информация о срочном приёме сразу на виду, страницы по видам животных и специализациям, контент о профилактике и локальный поиск.",
  },
  {
    id: "blog-found-via-chatgpt",
    url: "/blog/how-clients-find-you-through-chatgpt",
    oldDesc: "A real case and the mechanics: how people look for contractors through ChatGPT and other AI assistants, why some sites make it into the answers and others don't.",
    newDesc: "A real case and the mechanics: how people look for contractors through ChatGPT, why some sites make it into the answers and others do not.",
  },
  {
    id: "blog-multilingual-website-cost.ru",
    url: "/ru/blog/skolko-stoit-multiyazychnyi-sait",
    oldDesc: "Разбираем, сколько стоит мультиязычный сайт: почему перевод — меньшая часть работы, что входит в техническую настройку локалей и как считается каждый новый язык.",
    newDesc: "Сколько стоит мультиязычный сайт: почему перевод — меньшая часть работы, что входит в техническую настройку локалей и как считается каждый новый язык.",
  },
  {
    id: "blog-psychologist-website-cost",
    url: "/blog/psychologist-website-cost",
    oldDesc: "How much does a psychologist's website cost? What drives the price, what a landing page and a full site with a blog include, and why AI-search readiness matters.",
    newDesc: "What a psychologist's website costs: what drives the price, what a landing page and a full site with a blog include, and why AI-search readiness matters.",
  },
  {
    id: "blog-psychologist-website-cost.pl",
    url: "/pl/blog/ile-kosztuje-strona-dla-psychologa",
    oldDesc: "Sprawdź, ile kosztuje strona dla psychologa: od czego zależy cena, co wchodzi w landing page i pełną stronę z blogiem, i po co optymalizacja pod wyszukiwanie AI.",
    newDesc: "Ile kosztuje strona dla psychologa: od czego zależy cena, co wchodzi w landing page i pełną stronę z blogiem, i po co optymalizacja pod wyszukiwanie AI.",
  },
  {
    id: "blog-slow-website",
    url: "/blog/why-is-my-website-slow",
    oldDesc: "Why does a website load slowly? How to measure speed properly, which causes give the biggest gains, and when optimisation stops helping and a rebuild is cheaper.",
    newDesc: "Why a website loads slowly: how to measure speed properly, which causes give the biggest gains, and when a rebuild is cheaper than more optimisation.",
  },
  {
    id: "service-ai-visibility-audit.ru",
    url: "/ru/uslugi/audit-vidimosti-v-ii-poiske",
    oldDesc: "Базовый аудит того, что ChatGPT, Perplexity и ИИ-ответы Google говорят о вашей компании: фиксированный набор запросов, трассировка источников и письменный отчёт.",
    newDesc: "Базовый аудит того, что ChatGPT, Perplexity и ИИ-ответы Google говорят о компании: фиксированный набор запросов, трассировка источников и отчёт.",
  },
  {
    id: "service-local-seo.pl",
    url: "/pl/oferty/pozycjonowanie-lokalne",
    oldDesc: "Praca nad wyszukiwaniem lokalnym dla firm z adresem — widoczność w mapach, profil firmy, sygnały lokalizacyjne i opinie, które decydują, do kogo klient zadzwoni.",
    newDesc: "Wyszukiwanie lokalne dla firm z adresem: widoczność w mapach, profil firmy, sygnały lokalizacyjne i opinie, które decydują, do kogo klient zadzwoni.",
  },
  {
    id: "singlepage-portugal.ru",
    url: "/ru/uslugi/lokacii/razrabotka-saitov-portugaliya",
    oldDesc: "Сайты и поисковая работа для бизнеса в Португалии: те же правила ЕС, та же валюта, счета внутри ЕС и соответствие нормам, до которых большинство сайтов не дошло.",
    newDesc: "Сайты и поисковая работа для бизнеса в Португалии: те же правила ЕС, та же валюта, счета внутри ЕС и соответствие нормам, до которых дошли немногие.",
  },
  {
    id: "singlepage-recruitment-agency.pl",
    url: "/pl/strona-dla-agencji-rekrutacyjnej",
    oldDesc: "Tworzenie stron dla agencji rekrutacyjnych: podstrony ofert z poprawnymi danymi strukturalnymi, osobne ścieżki dla pracodawców i kandydatów, dyskretne aplikacje.",
    newDesc: "Strony dla agencji rekrutacyjnych: podstrony ofert z poprawnymi danymi strukturalnymi, osobne ścieżki dla pracodawców i kandydatów, dyskretne aplikacje.",
  },
  {
    id: "singlepage-seo-for-interior-designers.pl",
    url: "/pl/pozycjonowanie-strony-projektanta-wnetrz",
    oldDesc: "Pozycjonowanie strony projektanta wnętrz: frazy z miastem, wizytówka Google, realizacje w Google Grafika, Homebook, artykuły dla klientów i AI. Audyt od 1000 zł.",
    newDesc: "Pozycjonowanie strony projektanta wnętrz: frazy z miastem, wizytówka Google, realizacje w Google Grafika, artykuły dla klientów i AI. Audyt od 1000 zł.",
  },
  {
    id: "singlepage-tree-service-seo.pl",
    url: "/pl/pozycjonowanie-strony-firmy-wycinki-drzew",
    oldDesc: "Pozycjonowanie strony firmy wycinki drzew: wycinka alpinistyczna, pielęgnacja koron, frezowanie pni, zezwolenia z gminy, wizytówka Google i AI. Audyt od 1000 zł.",
    newDesc: "Pozycjonowanie strony firmy wycinki drzew: wycinka alpinistyczna, pielęgnacja koron, zezwolenia z gminy, wizytówka Google i AI. Audyt od 1000 zł.",
  },
  {
    id: "singlepage-winery-seo.pl",
    url: "/pl/pozycjonowanie-strony-winnicy",
    oldDesc: "Pozycjonowanie strony winnicy: frazy enoturystów, degustacje i zwiedzanie, wizytówka Google, winobranie i wesela, podstrony win, odpowiedzi AI. Audyt od 1000 zł.",
    newDesc: "Pozycjonowanie strony winnicy: frazy enoturystów, degustacje i zwiedzanie, wizytówka Google, winobranie i wesela, odpowiedzi AI. Audyt od 1000 zł.",
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
