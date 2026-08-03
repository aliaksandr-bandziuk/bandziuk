// scripts/verify-batchA-links.cjs
const BASE = "http://localhost:3000";

const CHECKS = [
  // Hub
  { page: "/services", locale: "en", expect: ["/dental-clinic-website", "/multilingual-website-development", "/website-with-online-booking", "/website-platform-migration", "/web-development-warsaw", "/lawyer-website-development", "/website-development-for-beauty-professionals"] },
  { page: "/pl/oferty", locale: "pl", expect: ["/pl/strona-dla-gabinetu-stomatologicznego", "/pl/tworzenie-stron-wielojezycznych", "/pl/tworzenie-stron-internetowych-warszawa"] },
  { page: "/ru/uslugi", locale: "ru", expect: ["/ru/sait-dlya-stomatologicheskoy-kliniki", "/ru/razrabotka-multiyazychnogo-saita", "/ru/razrabotka-saitov-varshava"] },

  // Capability reciprocals
  { page: "/website-with-online-booking", locale: "en", expect: ["/dental-clinic-website", "/hotel-website", "/fitness-studio-website"] },
  { page: "/pl/strona-z-rezerwacja-online", locale: "pl", expect: ["/pl/strona-dla-gabinetu-stomatologicznego", "/pl/strona-dla-hotelu", "/pl/strona-dla-studia-fitness"] },
  { page: "/ru/sait-s-onlain-zapisyu", locale: "ru", expect: ["/ru/sait-dlya-stomatologicheskoy-kliniki", "/ru/sait-dlya-otelya", "/ru/sait-dlya-fitnes-studii"] },

  { page: "/multilingual-website-development", locale: "en", expect: ["/hotel-website", "/logistics-company-website"] },
  { page: "/pl/tworzenie-stron-wielojezycznych", locale: "pl", expect: ["/pl/strona-dla-hotelu", "/pl/strona-dla-firmy-transportowej"] },
  { page: "/ru/razrabotka-multiyazychnogo-saita", locale: "ru", expect: ["/ru/sait-dlya-otelya", "/ru/sait-dlya-transportnoy-kompanii"] },

  { page: "/catalog-website-with-filters", locale: "en", expect: ["/property-developer-website", "/manufacturing-company-website"] },
  { page: "/pl/strona-katalogowa-z-filtrami", locale: "pl", expect: ["/pl/strona-dla-dewelopera", "/pl/strona-dla-firmy-produkcyjnej"] },
  { page: "/ru/sait-katalog-s-filtrami", locale: "ru", expect: ["/ru/sait-dlya-zastroishchika", "/ru/sait-dlya-proizvodstvennoy-kompanii"] },

  { page: "/website-platform-migration", locale: "en", expect: ["/startup-website"] },
  { page: "/pl/migracja-strony-na-inna-platforme", locale: "pl", expect: ["/pl/strona-dla-startupu"] },
  { page: "/ru/perenos-saita-na-druguyu-platformu", locale: "ru", expect: ["/ru/sait-dlya-startapa"] },

  // Service pages
  { page: "/website-development", locale: "en", expect: ["/multilingual-website-development", "/catalog-website-with-filters", "/website-with-online-booking", "/website-platform-migration", "/services"] },
  { page: "/pl/tworzenie-stron-internetowych", locale: "pl", expect: ["/pl/tworzenie-stron-wielojezycznych", "/pl/strona-katalogowa-z-filtrami", "/pl/strona-z-rezerwacja-online", "/pl/migracja-strony-na-inna-platforme", "/pl/oferty"] },
  { page: "/ru/razrabotka-saitov", locale: "ru", expect: ["/ru/razrabotka-multiyazychnogo-saita", "/ru/sait-katalog-s-filtrami", "/ru/sait-s-onlain-zapisyu", "/ru/perenos-saita-na-druguyu-platformu", "/ru/uslugi"] },

  { page: "/seo-optimization-and-strategy", locale: "en", expect: ["/multilingual-website-development", "/catalog-website-with-filters", "/services"] },
  { page: "/pl/strategia-i-optymalizacja-seo", locale: "pl", expect: ["/pl/tworzenie-stron-wielojezycznych", "/pl/strona-katalogowa-z-filtrami", "/pl/oferty"] },
  { page: "/ru/seo-optimizaciya-i-strategiya", locale: "ru", expect: ["/ru/razrabotka-multiyazychnogo-saita", "/ru/sait-katalog-s-filtrami", "/ru/uslugi"] },

  { page: "/ai-ready-seo-and-geo-optimization", locale: "en", expect: ["/multilingual-website-development", "/services"] },
  { page: "/pl/ai-seo-and-geo-optymalizacja", locale: "pl", expect: ["/pl/tworzenie-stron-wielojezycznych", "/pl/oferty"] },
  { page: "/ru/ai-seo-i-geo-optimizaciya", locale: "ru", expect: ["/ru/razrabotka-multiyazychnogo-saita", "/ru/uslugi"] },
];

// cross-locale leak detection: any href starting with /pl/ or /ru/ on an EN page, or missing prefix on PL/RU page, etc.
function checkCrossLocale(locale, hrefs) {
  const bad = [];
  for (const h of hrefs) {
    if (locale === "en" && (h.startsWith("/pl/") || h.startsWith("/ru/"))) bad.push(h);
    if (locale === "pl" && !h.startsWith("/pl/") && !h.startsWith("http")) bad.push(h);
    if (locale === "ru" && !h.startsWith("/ru/") && !h.startsWith("http")) bad.push(h);
  }
  return bad;
}

async function main() {
  let totalOk = 0, totalFail = 0;
  const hrefCache = new Map();

  for (const check of CHECKS) {
    const url = BASE + check.page;
    const res = await fetch(url);
    const html = await res.text();
    const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map((m) => m[1].replace(/&amp;/g, "&"));

    console.log(`\n=== ${check.page} (${res.status}) ===`);
    let pageOk = true;
    for (const target of check.expect) {
      if (hrefs.includes(target)) {
        console.log(`  OK   link -> ${target}`);
        totalOk++;
        if (!hrefCache.has(target)) hrefCache.set(target, true);
      } else {
        console.log(`  FAIL missing link -> ${target}`);
        totalFail++;
        pageOk = false;
      }
    }
    const crossLocaleLeaks = checkCrossLocale(check.locale, check.expect.filter((t) => hrefs.includes(t)));
    if (crossLocaleLeaks.length) {
      console.log(`  FAIL cross-locale leak: ${crossLocaleLeaks.join(", ")}`);
      totalFail += crossLocaleLeaks.length;
    }
  }

  console.log("\n=== RESOLVING TARGET URLS (200 check) ===");
  const uniqueTargets = [...hrefCache.keys()];
  let resolveOk = 0, resolveFail = 0;
  for (const t of uniqueTargets) {
    const res = await fetch(BASE + t);
    if (res.status === 200) {
      resolveOk++;
    } else {
      resolveFail++;
      console.log(`  FAIL ${t} -> ${res.status}`);
    }
  }
  console.log(`Resolved ${resolveOk}/${uniqueTargets.length} target URLs with 200.`);

  console.log(`\n=== SUMMARY: ${totalOk} link(s) OK, ${totalFail} FAIL, ${resolveFail} broken target(s) ===`);
}

main().catch((e) => { console.error(e); process.exit(1); });
