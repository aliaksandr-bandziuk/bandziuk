// scripts/fix-meta-lengths-wave4.cjs
//
// Fourth wave of the snippet-length fix found by scripts/check-meta-lengths.cjs
// on 06.11.2026: 101 metaDescriptions over 160 characters and 30 metaTitles
// over 60 across 882 documents. Google cuts the overflow, so the last clause —
// often the price or the point — never reaches the reader.
//
// Waves 1 and 2 took the forty longest descriptions, wave 3 took every
// overlong title. This wave takes descriptions 41-60, 164-166 characters each.
// Shortened, not rewritten: the subject, the keyword and the figure stay, the
// trailing clause goes. One entry also drops «Честное сравнение», the same
// self-description removed from its English and Polish twins in wave 2.
//
// Usage:
//   node scripts/fix-meta-lengths-wave4.cjs --lint     checks lengths only, no network
//   node scripts/fix-meta-lengths-wave4.cjs            dry run against Sanity
//   node scripts/fix-meta-lengths-wave4.cjs --apply    writes
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local"), quiet: true });

const APPLY = process.argv.includes("--apply");
const LINT = process.argv.includes("--lint");

const TITLE_LIMIT = 60;
const DESC_LIMIT = 160;

const EDITS = [
  {
    id: "service-traffic-drop-recovery.pl",
    url: "/pl/oferty/odzyskanie-pozycji-po-spadku-ruchu",
    oldDesc: "Ruch z wyszukiwarki spadł i nikt nie wie dlaczego. Znajduję przyczynę — migrację, redesign, indeksację czy algorytm — i mówię wprost, co da się odzyskać, a czego nie.",
    newDesc: "Ruch z wyszukiwarki spadł i nikt nie wie dlaczego. Znajduję przyczynę — migrację, redesign, indeksację czy algorytm — i mówię, co da się odzyskać.",
  },
  {
    id: "singlepage-locations.pl",
    url: "/pl/oferty/lokalizacje",
    oldDesc: "Tworzenie stron i SEO pod konkretne rynki — co różni się w zależności od kraju, jakiego zestawu języków wymaga dany rynek i jak układa się współpraca ponad granicami.",
    newDesc: "Tworzenie stron i SEO pod konkretne rynki: co różni się w zależności od kraju, jakiego zestawu języków wymaga rynek i jak układa się współpraca.",
  },
  {
    id: "singlepage-uae",
    url: "/services/locations/website-development-uae",
    oldDesc: "Websites and search work for businesses in the UAE, delivered remotely from Poland in English and Russian — multilingual builds, GCC-facing SEO, invoices from the EU.",
    newDesc: "Websites and search work for businesses in the UAE, delivered remotely from Poland in English and Russian: multilingual builds, GCC SEO, EU invoices.",
  },
  {
    id: "singlepage-lingerie-website",
    url: "/services/website-development-for-lingerie-manufacturers",
    oldDesc: "B2B websites for lingerie and underwear manufacturers — wholesale catalogues, size systems across markets, private label enquiries and multilingual export structure.",
    newDesc: "B2B websites for lingerie and underwear manufacturers: wholesale catalogues, size systems across markets, private label enquiries, export structure.",
  },
  {
    id: "singlepage-med-spa-seo.pl",
    url: "/pl/pozycjonowanie-strony-kliniki-medycyny-estetycznej",
    oldDesc: "Pozycjonowanie strony kliniki medycyny estetycznej: podstrony zabiegów, lekarze z PWZ, cennik i karnety, wizytówka Google, Booksy, widoczność w AI. Audyt od 1000 zł.",
    newDesc: "Pozycjonowanie strony kliniki medycyny estetycznej: podstrony zabiegów, lekarze z PWZ, cennik, wizytówka Google, Booksy i AI. Audyt od 1000 zł.",
  },
  {
    id: "singlepage-platform-migration",
    url: "/website-platform-migration",
    oldDesc: "Moving a site to a new platform without losing rankings: URL structure preserved, redirects mapped, markup and language versions carried over, verified after launch.",
    newDesc: "Moving a site to a new platform without losing rankings: URL structure preserved, redirects mapped, markup and language versions carried over.",
  },
  {
    id: "singlepage-platform-migration.ru",
    url: "/ru/perenos-saita-na-druguyu-platformu",
    oldDesc: "Переезд сайта на новую платформу без потери позиций: структура адресов сохранена, редиректы размечены, разметка и языковые версии перенесены, проверка после запуска.",
    newDesc: "Переезд сайта на новую платформу без потери позиций: структура адресов сохранена, редиректы размечены, разметка и языковые версии перенесены.",
  },
  {
    id: "singlepage-seo-for-orthodontists.pl",
    url: "/pl/pozycjonowanie-strony-gabinetu-ortodontycznego",
    oldDesc: "Pozycjonowanie strony gabinetu ortodontycznego: podstrony dla rodziców i dorosłych, ceny aparatów i nakładek, wizytówka Google każdej placówki, AI. Audyt od 1000 zł.",
    newDesc: "Pozycjonowanie strony gabinetu ortodontycznego: podstrony dla rodziców i dorosłych, ceny aparatów i nakładek, wizytówka Google. Audyt od 1000 zł.",
  },
  {
    id: "singlepage-seo-for-tour-operators.pl",
    url: "/pl/pozycjonowanie-strony-biura-podrozy",
    oldDesc: "Pozycjonowanie strony biura podróży: podstrony wycieczek według kierunku, nisza zamiast walki z Itaką, sezon ferii, języki, opinie i odpowiedzi AI. Audyt od 1000 zł.",
    newDesc: "Pozycjonowanie strony biura podróży: podstrony wycieczek według kierunku, nisza zamiast walki z Itaką, sezon, języki i opinie. Audyt od 1000 zł.",
  },
  {
    id: "7d66c37d-0158-4aa4-9293-8f4a9e8891e9",
    url: "/contacts",
    oldDesc: "Get in touch to discuss your website, redesign, SEO improvements, or long-term development support. I work with clients across Europe, the UK, the US and worldwide.",
    newDesc: "Get in touch about a website, a redesign, SEO improvements or long-term development support. I work with clients across Europe, the UK and the US.",
  },
  {
    id: "blog-auto-repair-website-cost.pl",
    url: "/pl/blog/ile-kosztuje-strona-dla-warsztatu-samochodowego",
    oldDesc: "Sprawdź, ile kosztuje strona dla warsztatu samochodowego: od czego zależy cena, które funkcje realnie przynoszą zapytania i dlaczego wizytówka Google nie wystarcza.",
    newDesc: "Ile kosztuje strona dla warsztatu samochodowego: od czego zależy cena, które funkcje przynoszą zapytania i dlaczego wizytówka Google nie wystarcza.",
  },
  {
    id: "blog-auto-repair-website-cost.ru",
    url: "/ru/blog/skolko-stoit-sait-dlya-avtoservisa",
    oldDesc: "Разбираем, сколько стоит сайт для автосервиса: от чего зависит цена, какие функции реально приводят заявки и почему карты и агрегаторы не заменяют собственный сайт.",
    newDesc: "Сколько стоит сайт для автосервиса: от чего зависит цена, какие функции реально приводят заявки и почему карты и агрегаторы не заменяют свой сайт.",
  },
  {
    id: "blog-beauty-salon-website-cost.pl",
    url: "/pl/blog/ile-kosztuje-strona-dla-salonu-kosmetycznego",
    oldDesc: "Sprawdź, ile kosztuje strona dla salonu kosmetycznego i specjalisty beauty: od czego zależy cena, co wchodzi w każdy poziom i dlaczego Instagram nie zastąpi strony.",
    newDesc: "Ile kosztuje strona dla salonu kosmetycznego i specjalisty beauty: od czego zależy cena, co wchodzi w każdy poziom i dlaczego Instagram nie wystarcza.",
  },
  {
    id: "blog-builder-vs-custom.ru",
    url: "/ru/blog/konstruktor-ili-razrabotka-saita",
    oldDesc: "Честное сравнение конструкторов и индивидуальной разработки: когда конструктора достаточно, где у него потолок, и по каким признакам понять, что вы в него упёрлись.",
    newDesc: "Конструкторы против индивидуальной разработки: когда конструктора достаточно, где у него потолок и по каким признакам понять, что вы в него упёрлись.",
  },
  {
    id: "blog-correct-ai-misinformation",
    url: "/blog/how-to-correct-wrong-information-in-chatgpt",
    oldDesc: "Your company is described incorrectly by AI assistants. Here is the correction sequence that works, what each platform responds to, and what cannot be fixed at all.",
    newDesc: "Your company is described incorrectly by AI assistants. The correction sequence that works, what each platform responds to, and what cannot be fixed.",
  },
  {
    id: "blog-how-to-choose-developer.pl",
    url: "/pl/blog/jak-wybrac-wykonawce-strony-internetowej",
    oldDesc: "Sprawdź, jak wybrać wykonawcę strony internetowej: o co zapytać przed umową, jak zweryfikować portfolio, do kogo należą domena i kod oraz co powinno zapalić lampkę.",
    newDesc: "Jak wybrać wykonawcę strony internetowej: o co zapytać przed umową, jak zweryfikować portfolio, do kogo należą domena i kod oraz co powinno niepokoić.",
  },
  {
    id: "blog-platform-choice",
    url: "/blog/what-to-build-a-business-website-on",
    oldDesc: "What should a business website be built on: WordPress, a custom theme, or a modern framework like Next.js? What costs less over years and what's easier to maintain.",
    newDesc: "What to build a business website on: WordPress, a custom theme or a framework like Next.js. What costs less over years and what is easier to maintain.",
  },
  {
    id: "blog-real-estate-agency-checklist.pl",
    url: "/pl/blog/co-powinno-byc-na-stronie-biura-nieruchomosci",
    oldDesc: "Sprawdź punkt po punkcie, co musi znaleźć się na stronie biura nieruchomości: katalog z filtrami, karta oferty, podstrony dzielnic i skuteczne pozyskiwanie zapytań.",
    newDesc: "Co musi znaleźć się na stronie biura nieruchomości: katalog z filtrami, karta oferty, podstrony dzielnic i skuteczne pozyskiwanie zapytań.",
  },
  {
    id: "service-ai-search-readiness.pl",
    url: "/pl/oferty/przygotowanie-strony-do-wyszukiwania-ai",
    oldDesc: "Uczynienie strony czytelną dla asystentów AI: fakty jako sprawdzalne twierdzenia, dane strukturalne, treść dostępna bez skryptów i teksty przeżywające streszczenie.",
    newDesc: "Strona czytelna dla asystentów AI: fakty jako sprawdzalne twierdzenia, dane strukturalne, treść dostępna bez skryptów i teksty przeżywające streszczenie.",
  },
  {
    id: "singlepage-catalog-website.ru",
    url: "/ru/sait-katalog-s-filtrami",
    oldDesc: "Каталоги, в которых удобно искать и которые находятся в поиске: мгновенные фильтры, индексируемые страницы, автосинхронизация с базой и скорость на больших объёмах.",
    newDesc: "Каталоги, в которых удобно искать и которые находятся в поиске: мгновенные фильтры, индексируемые страницы, синхронизация с базой и скорость.",
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
