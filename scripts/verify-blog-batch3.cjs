// scripts/verify-blog-batch3.cjs
const BASE = "http://localhost:3000";

function decodeEntities(s) {
  if (s == null) return s;
  return s.replace(/&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, "&");
}

const ARTICLES = [
  {
    label: "website-no-leads",
    urls: {
      en: "/blog/why-my-website-gets-no-leads",
      pl: "/pl/blog/dlaczego-strona-nie-generuje-zapytan",
      ru: "/ru/blog/pochemu-sait-ne-prinosit-zayavok",
    },
    publishedAt: "2026-07-24T12:00:00Z",
    expectCoverAlt: {
      en: "Website diagnosis: impressions, clicks and enquiries in reports",
      pl: "Diagnoza strony: wyświetlenia, kliknięcia i zapytania w raportach",
      ru: "Диагностика сайта: показы, клики и заявки в отчётах",
    },
    expectServiceOffered: { en: "/website-platform-migration", pl: "/pl/migracja-strony-na-inna-platforme", ru: "/ru/perenos-saita-na-druguyu-platformu" },
    expectRelated: {
      en: ["/blog/website-not-showing-in-google", "/blog/why-is-my-website-slow", "/blog/how-much-seo-costs"],
      pl: ["/pl/blog/strona-nie-pojawia-sie-w-google", "/pl/blog/wolno-ladujaca-sie-strona", "/pl/blog/ile-kosztuje-pozycjonowanie-strony"],
      ru: ["/ru/blog/saita-net-v-poiske-google", "/ru/blog/sait-medlenno-zagruzhaetsya", "/ru/blog/skolko-stoit-prodvizhenie-saita"],
    },
  },
  {
    label: "slow-website",
    urls: {
      en: "/blog/why-is-my-website-slow",
      pl: "/pl/blog/wolno-ladujaca-sie-strona",
      ru: "/ru/blog/sait-medlenno-zagruzhaetsya",
    },
    publishedAt: "2026-07-24T13:00:00Z",
    expectCoverAlt: {
      en: "Checking website loading speed on a mobile device",
      pl: "Sprawdzanie szybkości ładowania strony na urządzeniu mobilnym",
      ru: "Проверка скорости загрузки сайта на мобильном устройстве",
    },
    expectServiceOffered: { en: "/website-platform-migration", pl: "/pl/migracja-strony-na-inna-platforme", ru: "/ru/perenos-saita-na-druguyu-platformu" },
    expectRelated: {
      en: ["/blog/what-to-build-a-business-website-on", "/blog/why-my-website-gets-no-leads", "/blog/website-not-showing-in-google"],
      pl: ["/pl/blog/na-czym-zbudowac-strone-firmowa", "/pl/blog/dlaczego-strona-nie-generuje-zapytan", "/pl/blog/strona-nie-pojawia-sie-w-google"],
      ru: ["/ru/blog/na-chem-delat-sait-biznesu", "/ru/blog/pochemu-sait-ne-prinosit-zayavok", "/ru/blog/saita-net-v-poiske-google"],
    },
  },
  {
    label: "not-showing-in-google",
    urls: {
      en: "/blog/website-not-showing-in-google",
      pl: "/pl/blog/strona-nie-pojawia-sie-w-google",
      ru: "/ru/blog/saita-net-v-poiske-google",
    },
    publishedAt: "2026-07-24T14:00:00Z",
    expectCoverAlt: {
      en: "Checking website indexation in Google Search Console",
      pl: "Sprawdzanie indeksacji strony w Google Search Console",
      ru: "Проверка индексации сайта в Google Search Console",
    },
    expectServiceOffered: { en: "/seo-optimization-and-strategy", pl: "/pl/strategia-i-optymalizacja-seo", ru: "/ru/seo-optimizaciya-i-strategiya" },
    expectRelated: {
      en: ["/blog/why-my-website-gets-no-leads", "/blog/how-much-seo-costs"],
      pl: ["/pl/blog/dlaczego-strona-nie-generuje-zapytan", "/pl/blog/ile-kosztuje-pozycjonowanie-strony"],
      ru: ["/ru/blog/pochemu-sait-ne-prinosit-zayavok", "/ru/blog/skolko-stoit-prodvizhenie-saita"],
    },
  },
];

// Batch 1/2 backfill checks — confirm Pass 3 patched these in correctly.
const BACKFILL_CHECKS = [
  { page: "/blog/what-a-psychologist-website-needs", expect: "/blog/why-my-website-gets-no-leads" },
  { page: "/pl/blog/co-powinno-byc-na-stronie-psychologa", expect: "/pl/blog/dlaczego-strona-nie-generuje-zapytan" },
  { page: "/ru/blog/chto-dolzhno-byt-na-saite-psihologa", expect: "/ru/blog/pochemu-sait-ne-prinosit-zayavok" },
  { page: "/blog/auto-repair-shop-website-cost", expect: "/blog/why-is-my-website-slow" },
  { page: "/pl/blog/ile-kosztuje-strona-dla-warsztatu-samochodowego", expect: "/pl/blog/wolno-ladujaca-sie-strona" },
  { page: "/ru/blog/skolko-stoit-sait-dlya-avtoservisa", expect: "/ru/blog/sait-medlenno-zagruzhaetsya" },
  { page: "/blog/what-to-build-a-business-website-on", expect: "/blog/why-is-my-website-slow" },
  { page: "/pl/blog/na-czym-zbudowac-strone-firmowa", expect: "/pl/blog/wolno-ladujaca-sie-strona" },
  { page: "/ru/blog/na-chem-delat-sait-biznesu", expect: "/ru/blog/sait-medlenno-zagruzhaetsya" },
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

  console.log("\n\n=== BATCH 1/2 BACKFILL CHECKS (Pass 3) ===");
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
