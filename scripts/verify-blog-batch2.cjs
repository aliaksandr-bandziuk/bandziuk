// scripts/verify-blog-batch2.cjs
const BASE = "http://localhost:3000";

function decodeEntities(s) {
  if (s == null) return s;
  return s.replace(/&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, "&");
}

const ARTICLES = [
  {
    label: "how-to-choose-developer",
    urls: {
      en: "/blog/how-to-choose-a-web-developer",
      pl: "/pl/blog/jak-wybrac-wykonawce-strony-internetowej",
      ru: "/ru/blog/kak-vybrat-razrabotchika-saita",
    },
    publishedAt: "2026-07-17T12:00:00Z",
    expectCoverAlt: {
      en: "Comparing web development quotes by scope rather than by price",
      pl: "Porównanie ofert wykonawców strony według zakresu prac, a nie ceny",
      ru: "Сравнение предложений разработчиков сайта по объёму работ, а не по цене",
    },
    expectServiceOffered: { en: "/web-development-warsaw", pl: "/pl/tworzenie-stron-internetowych-warszawa", ru: "/ru/razrabotka-saitov-varshava" },
    expectRelated: {
      en: ["/blog/freelancer-vs-agency-web-development", "/blog/what-to-build-a-business-website-on"],
      pl: ["/pl/blog/freelancer-czy-agencja", "/pl/blog/na-czym-zbudowac-strone-firmowa"],
      ru: ["/ru/blog/frilanser-ili-agentstvo", "/ru/blog/na-chem-delat-sait-biznesu"],
    },
  },
  {
    label: "freelancer-vs-agency",
    urls: {
      en: "/blog/freelancer-vs-agency-web-development",
      pl: "/pl/blog/freelancer-czy-agencja",
      ru: "/ru/blog/frilanser-ili-agentstvo",
    },
    publishedAt: "2026-07-17T13:00:00Z",
    expectCoverAlt: {
      en: "Comparing a freelancer and an agency for a web development project",
      pl: "Porównanie freelancera i agencji przy zlecaniu strony internetowej",
      ru: "Сравнение фрилансера и агентства при заказе разработки сайта",
    },
    expectServiceOffered: { en: "/web-development-warsaw", pl: "/pl/tworzenie-stron-internetowych-warszawa", ru: "/ru/razrabotka-saitov-varshava" },
    expectRelated: {
      en: ["/blog/how-to-choose-a-web-developer", "/blog/what-to-build-a-business-website-on"],
      pl: ["/pl/blog/jak-wybrac-wykonawce-strony-internetowej", "/pl/blog/na-czym-zbudowac-strone-firmowa"],
      ru: ["/ru/blog/kak-vybrat-razrabotchika-saita", "/ru/blog/na-chem-delat-sait-biznesu"],
    },
  },
  {
    label: "platform-choice",
    urls: {
      en: "/blog/what-to-build-a-business-website-on",
      pl: "/pl/blog/na-czym-zbudowac-strone-firmowa",
      ru: "/ru/blog/na-chem-delat-sait-biznesu",
    },
    publishedAt: "2026-07-17T14:00:00Z",
    expectCoverAlt: {
      en: "Choosing a platform for a business website: WordPress or a modern framework",
      pl: "Wybór platformy pod stronę firmową: WordPress czy nowoczesny framework",
      ru: "Выбор платформы для сайта бизнеса: WordPress или современный фреймворк",
    },
    expectServiceOffered: { en: "/website-platform-migration", pl: "/pl/migracja-strony-na-inna-platforme", ru: "/ru/perenos-saita-na-druguyu-platformu" },
    expectRelated: {
      en: ["/blog/website-builder-vs-custom-development", "/blog/how-to-choose-a-web-developer"],
      pl: ["/pl/blog/kreator-stron-czy-strona-na-zamowienie", "/pl/blog/jak-wybrac-wykonawce-strony-internetowej"],
      ru: ["/ru/blog/konstruktor-ili-razrabotka-saita", "/ru/blog/kak-vybrat-razrabotchika-saita"],
    },
  },
];

// Batch 1 backfill checks — confirm Pass 3 patched these in correctly.
const BACKFILL_CHECKS = [
  { page: "/blog/auto-repair-shop-website-cost", expect: "/blog/what-to-build-a-business-website-on" },
  { page: "/pl/blog/ile-kosztuje-strona-dla-warsztatu-samochodowego", expect: "/pl/blog/na-czym-zbudowac-strone-firmowa" },
  { page: "/ru/blog/skolko-stoit-sait-dlya-avtoservisa", expect: "/ru/blog/na-chem-delat-sait-biznesu" },
  { page: "/blog/construction-company-website-cost", expect: "/blog/how-to-choose-a-web-developer" },
  { page: "/pl/blog/ile-kosztuje-strona-dla-firmy-budowlanej", expect: "/pl/blog/jak-wybrac-wykonawce-strony-internetowej" },
  { page: "/ru/blog/skolko-stoit-sait-dlya-stroitelnoy-kompanii", expect: "/ru/blog/kak-vybrat-razrabotchika-saita" },
];

async function main() {
  let ok = 0, fail = 0;

  for (const art of ARTICLES) {
    for (const lang of ["en", "pl", "ru"]) {
      const url = BASE + art.urls[lang];
      const res = await fetch(url);
      const rawHtml = await res.text();
      const html = rawHtml.replace(/\\+"/g, '"');
      console.log(`\n=== ${art.label} [${lang}] ${art.urls[lang]} (${res.status}) ===`);

      if (res.status === 200) { ok++; } else { fail++; console.log("  FAIL non-200 status"); continue; }

      const imgMatch = rawHtml.match(/<img alt="([^"]*)"[^>]*data-nimg="fill"/);
      const actualAlt = imgMatch ? decodeEntities(imgMatch[1]) : null;
      if (actualAlt === art.expectCoverAlt[lang]) { console.log(`  OK   cover image alt="${actualAlt}"`); ok++; }
      else { console.log(`  FAIL cover image alt mismatch: expected "${art.expectCoverAlt[lang]}", got "${actualAlt}"`); fail++; }

      const authorMatch = html.match(/"author":\{"@type":"Person","name":"([^"]*)"/);
      if (authorMatch && decodeEntities(authorMatch[1]) === "Aliaksandr Bandziuk") { console.log("  OK   author = Aliaksandr Bandziuk"); ok++; }
      else { console.log(`  FAIL author mismatch: ${authorMatch ? authorMatch[1] : "not found"}`); fail++; }

      if (html.includes(art.publishedAt)) { console.log(`  OK   datePublished = ${art.publishedAt}`); ok++; }
      else { console.log(`  FAIL datePublished not found: expected ${art.publishedAt}`); fail++; }

      if (html.includes('"@type":"BlogPosting"')) { console.log("  OK   BlogPosting JSON-LD present"); ok++; }
      else { console.log("  FAIL BlogPosting JSON-LD missing"); fail++; }

      if (!html.includes('"@type":"FAQPage"')) { console.log("  OK   no FAQPage JSON-LD (expected)"); ok++; }
      else { console.log("  FAIL unexpected FAQPage JSON-LD present"); fail++; }

      const hreflangCount = (html.match(/rel="alternate"/g) || []).length;
      if (hreflangCount === 4) { console.log("  OK   4 hreflang alternates"); ok++; }
      else { console.log(`  FAIL hreflang count = ${hreflangCount}, expected 4`); fail++; }

      if (!/name="robots"[^>]*noindex/.test(html)) { console.log("  OK   no noindex"); ok++; }
      else { console.log("  FAIL noindex present"); fail++; }

      const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map((m) => m[1].replace(/&amp;/g, "&"));
      if (hrefs.includes(art.expectServiceOffered[lang])) { console.log(`  OK   serviceOffered link -> ${art.expectServiceOffered[lang]}`); ok++; }
      else { console.log(`  FAIL serviceOffered link missing: ${art.expectServiceOffered[lang]}`); fail++; }

      for (const target of art.expectRelated[lang]) {
        if (hrefs.includes(target)) { console.log(`  OK   relatedArticles link -> ${target}`); ok++; }
        else { console.log(`  FAIL relatedArticles link missing: ${target}`); fail++; }
      }
    }
  }

  console.log("\n\n=== BATCH 1 BACKFILL CHECKS (Pass 3) ===");
  for (const check of BACKFILL_CHECKS) {
    const res = await fetch(BASE + check.page);
    const html = await res.text();
    const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map((m) => m[1].replace(/&amp;/g, "&"));
    console.log(`\n${check.page}`);
    if (hrefs.includes(check.expect)) { console.log(`  OK   backfilled link -> ${check.expect}`); ok++; }
    else { console.log(`  FAIL backfilled link missing: ${check.expect}`); fail++; }
  }

  console.log(`\n=== SUMMARY: ${ok} OK, ${fail} FAIL ===`);
}

main().catch((e) => { console.error(e); process.exit(1); });
