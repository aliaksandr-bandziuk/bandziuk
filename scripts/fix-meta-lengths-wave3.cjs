// scripts/fix-meta-lengths-wave3.cjs
//
// Third wave of the snippet-length fix found by scripts/check-meta-lengths.cjs
// on 06.11.2026. Waves 1 and 2 took the forty longest descriptions; this one
// takes every remaining metaTitle over 60 characters — all 25 of them — plus
// the one description on those pages still over 160.
//
// Most are mechanical: the «| Bandziuk» suffix costs 11 characters and is the
// only thing pushing fourteen Polish and Russian titles over the limit, while
// the brand is already in the domain shown next to the title in the result.
//
// One real defect surfaced here: /ru/uslugi/seo-optimizaciya-i-strategiya has
// shipped «оптмиизация» in its metaTitle, so the page announces itself in the
// search result with a typo.
//
// Usage:
//   node scripts/fix-meta-lengths-wave3.cjs --lint     checks lengths only, no network
//   node scripts/fix-meta-lengths-wave3.cjs            dry run against Sanity
//   node scripts/fix-meta-lengths-wave3.cjs --apply    writes
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local"), quiet: true });

const APPLY = process.argv.includes("--apply");
const LINT = process.argv.includes("--lint");

const TITLE_LIMIT = 60;
const DESC_LIMIT = 160;

const t = (id, url, oldTitle, newTitle, extra = {}) => ({ id, url, oldTitle, newTitle, ...extra });

const EDITS = [
  t("2f9b4f91-19e4-41c0-8208-9ec3a7cd1856", "/ru/blog/sait-agentstva-nedvizhimosti-kipr-keis",
    "Сайт для агентства недвижимости на Кипре: как привлекать премиальных клиентов",
    "Сайт агентства недвижимости на Кипре: премиальные клиенты"),
  t("singlepage-seo-stomatologia-warszawa.pl", "/pl/oferty/pozycjonowanie-strony-gabinetu-stomatologicznego-warszawa",
    "Pozycjonowanie strony gabinetu stomatologicznego w Warszawie | Bandziuk",
    "Pozycjonowanie strony gabinetu stomatologicznego w Warszawie"),
  t("singlepage-seo-warsztat-warszawa.pl", "/pl/oferty/pozycjonowanie-strony-warsztatu-samochodowego-warszawa",
    "Pozycjonowanie strony warsztatu samochodowego w Warszawie | Bandziuk",
    "Pozycjonowanie strony warsztatu samochodowego w Warszawie"),
  t("6a81eab0-6993-41a6-adc3-d9047a3b35a0", "/ru/uslugi/seo-optimizaciya-i-strategiya",
    "SEO-стратегия и оптмиизация — Техническое SEO под Google и AI-поиск",
    "SEO-стратегия и оптимизация под Google и ИИ-поиск"),
  t("singlepage-swiss-consulting", "/locations/seo-for-swiss-market/seo-for-consulting-firms-switzerland",
    "SEO for Consulting and Professional Firms in Switzerland | Bandziuk",
    "SEO for Consulting and Professional Firms in Switzerland"),
  t("4de72361-ec2a-469d-8b56-813ddbf3adca", "/services",
    "Services: websites, SEO, integrations and AI visibility | Bandziuk",
    "Services: websites, SEO, integrations and AI visibility"),
  t("1d442fbd-0483-48e3-9063-7fdef9e1d322", "/blog/real-estate-website-cyprus-case-study",
    "How a Real Estate Agency in Cyprus Gets Buyers from 25+ Countries",
    "A Cyprus Real Estate Agency with Buyers from 25+ Countries"),
  t("singlepage-seo-salon-warszawa.pl", "/pl/oferty/pozycjonowanie-strony-salonu-kosmetycznego-warszawa",
    "Pozycjonowanie strony salonu kosmetycznego w Warszawie | Bandziuk",
    "Pozycjonowanie strony salonu kosmetycznego w Warszawie"),
  t("singlepage-georgia", "/services/locations/website-development-georgia",
    "Website Development for Companies in Georgia (Tbilisi) | Bandziuk",
    "Website Development for Companies in Georgia (Tbilisi)"),
  t("5df13421-2160-4793-8efe-4b3d283dcf31", "/ru/blog/riski-ai-otvetov",
    "Риски AI-ответов: как ИИ может навредить бренду и как защититься",
    "Риски ИИ-ответов: как они вредят бренду и как защититься"),
  t("3774c0a1-8857-4149-be24-9a357af4be00", "/ru/uslugi",
    "Услуги: разработка сайтов, SEO, интеграции и ИИ-поиск | Bandziuk",
    "Услуги: разработка сайтов, SEO, интеграции и ИИ-поиск"),
  t("b35e57c9-9cce-4ebd-ab05-5121ffa38fef", "/pl/oferty/tworzenie-stron-internetowych",
    "Tworzenie stron internetowych — Next.js, SEO techniczne w cenie",
    "Tworzenie stron internetowych: Next.js i SEO techniczne"),
  t("285c29ad-bc6b-4fde-a1bf-91aebd7e47e6", "/pl/oferty/tworzenie-landing-page",
    "Tworzenie landing page — Szybkie i konwersyjne strony lądowania",
    "Tworzenie landing page: szybkie strony lądowania"),
  t("singlepage-seo-kancelaria-warszawa.pl", "/pl/oferty/pozycjonowanie-strony-kancelarii-prawnej-warszawa",
    "Pozycjonowanie strony kancelarii prawnej w Warszawie | Bandziuk",
    "Pozycjonowanie strony kancelarii prawnej w Warszawie"),
  t("singlepage-seo-sprzatanie-warszawa.pl", "/pl/oferty/pozycjonowanie-strony-firmy-sprzatajacej-warszawa",
    "Pozycjonowanie strony firmy sprzątającej w Warszawie | Bandziuk",
    "Pozycjonowanie strony firmy sprzątającej w Warszawie"),
  t("singlepage-seo-usa.ru", "/ru/uslugi/lokacii/prodvizhenie-na-amerikanskiy-rynok",
    "Продвижение сайта в США: SEO для американского рынка | Bandziuk",
    "Продвижение сайта в США: SEO для американского рынка"),
  t("blog-legalizacja-cudzoziemcy.ru", "/ru/blog/sait-agentstva-po-legalizacii",
    "Сайт агентства по легализации: как получать клиентов из поиска",
    "Сайт агентства по легализации: клиенты из поиска"),
  t("singlepage-swiss-premium.ru", "/ru/lokacii/prodvizhenie-na-shveytsarskiy-rynok/prodvizhenie-saitov-premialnyh-tovarov-shveytsariya",
    "Продвижение сайтов премиальных товаров из Швейцарии | Bandziuk",
    "Продвижение сайтов премиальных товаров из Швейцарии",
    {
      oldDesc: "Поисковая работа для швейцарских премиальных товаров, продаваемых за рубеж: происхождение — сам аргумент, покупатель в другой стране, а проверяет он подлинность.",
      newDesc: "Поисковая работа для швейцарских премиальных товаров на экспорт: происхождение — сам аргумент, покупатель в другой стране и проверяет подлинность.",
    }),
  t("singlepage-seo-australia", "/services/locations/seo-for-australian-market",
    "Website SEO and AI Search for the Australian Market | Bandziuk",
    "Website SEO and AI Search for the Australian Market"),
  t("d7c4dc47-ce4c-4324-b334-46300222b521", "/pl/blog/dlaczego-prawnikowi-potrzebna-strona-www",
    "Strona dla adwokata — jak przyciąga klientów i buduje zaufanie",
    "Strona dla adwokata: jak przyciąga klientów kancelarii"),
  t("blog-brand-vs-retailers.pl", "/pl/blog/dlaczego-marka-bielizny-przegrywa-z-detalistami",
    "Dlaczego marka bielizny przegrywa w wyszukiwarce z detalistami",
    "Dlaczego marka bielizny przegrywa w Google z detalistami"),
  t("blog-small-business-seo.ru", "/ru/blog/kak-samomu-prodvigat-sait",
    "Как продвигать сайт самостоятельно: план для владельца бизнеса",
    "Как продвигать сайт самостоятельно: план для владельца"),
  t("1c5a69fb-e00a-4e2d-aa4d-eee83fb384f6", "/portfolio/proscore-agency-website-development",
    "Marketing Agency Website — Bilingual WordPress, Custom Design",
    "Marketing Agency Website: Bilingual WordPress Build"),
  t("870bdfc3-bad0-458a-ae8d-5b8bf87636af", "/blog/how-i-automated-website-page-production",
    "Automated Page Production: 4× Faster, 75% Lower Content Costs",
    "Automated Page Production: 4× Faster, 75% Cheaper"),
  t("singlepage-seo-budowlana-warszawa.pl", "/pl/oferty/pozycjonowanie-strony-firmy-budowlanej-warszawa",
    "Pozycjonowanie strony firmy budowlanej w Warszawie | Bandziuk",
    "Pozycjonowanie strony firmy budowlanej w Warszawie"),
];

function lint() {
  let bad = 0;
  const seen = new Set();
  for (const e of EDITS) {
    if (seen.has(e.id)) { console.log(`DUPLICATE id ${e.id}`); bad += 1; }
    seen.add(e.id);
    if (e.newTitle.length > TITLE_LIMIT) { console.log(`TITLE ${e.newTitle.length} > ${TITLE_LIMIT}  ${e.url}`); bad += 1; }
    if (e.newTitle === e.oldTitle) { console.log(`NO CHANGE in title  ${e.url}`); bad += 1; }
    if (e.newDesc && e.newDesc.length > DESC_LIMIT) { console.log(`DESC ${e.newDesc.length} > ${DESC_LIMIT}  ${e.url}`); bad += 1; }
    if (e.newDesc && e.newDesc === e.oldDesc) { console.log(`NO CHANGE in description  ${e.url}`); bad += 1; }
  }
  console.log(`${EDITS.length} entries, ${bad} problem(s).`);
  if (!bad) {
    console.log("\nlengths:");
    EDITS.forEach((e) => console.log(`  title ${String(e.newTitle.length).padStart(2)}${e.newDesc ? `  desc ${e.newDesc.length}` : "         "}  ${e.url}`));
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

    const curTitle = (doc.seo && doc.seo.metaTitle) || "";
    const curDesc = (doc.seo && doc.seo.metaDescription) || "";

    const titleDone = curTitle === e.newTitle;
    const descDone = !e.newDesc || curDesc === e.newDesc;
    if (titleDone && descDone) { console.log(`${e.url}\n  already applied\n`); skipped += 1; continue; }

    if (!titleDone && curTitle !== e.oldTitle) {
      failed.push(`${e.url}: the current metaTitle is neither the old nor the new version`);
      continue;
    }
    if (e.newDesc && !descDone && curDesc !== e.oldDesc) {
      failed.push(`${e.url}: the current description is neither the old nor the new version`);
      continue;
    }

    const set = {};
    if (!titleDone) set["seo.metaTitle"] = e.newTitle;
    if (e.newDesc && !descDone) set["seo.metaDescription"] = e.newDesc;

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
    const tt = (after.seo && after.seo.metaTitle) || "";
    const dd = (after.seo && after.seo.metaDescription) || "";
    if (tt !== e.newTitle) stillWrong.push(`${e.url}: metaTitle`);
    if (e.newDesc && dd !== e.newDesc) stillWrong.push(`${e.url}: description`);
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
