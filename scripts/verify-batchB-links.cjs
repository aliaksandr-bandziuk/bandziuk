// scripts/verify-batchB-links.cjs
const BASE = "http://localhost:3000";

const CHECKS = [
  { page: "/dental-clinic-website", locale: "en", expect: ["/website-with-online-booking", "/website-development", "/pricing"] },
  { page: "/pl/strona-dla-gabinetu-stomatologicznego", locale: "pl", expect: ["/pl/strona-z-rezerwacja-online", "/pl/tworzenie-stron-internetowych", "/pl/cennik"] },
  { page: "/ru/sait-dlya-stomatologicheskoy-kliniki", locale: "ru", expect: ["/ru/sait-s-onlain-zapisyu", "/ru/razrabotka-saitov", "/ru/ceny"] },

  { page: "/veterinary-clinic-website", locale: "en", expect: ["/website-with-online-booking", "/website-development", "/pricing"] },
  { page: "/pl/strona-dla-przychodni-weterynaryjnej", locale: "pl", expect: ["/pl/strona-z-rezerwacja-online", "/pl/tworzenie-stron-internetowych", "/pl/cennik"] },
  { page: "/ru/sait-dlya-veterinarnoy-kliniki", locale: "ru", expect: ["/ru/sait-s-onlain-zapisyu", "/ru/razrabotka-saitov", "/ru/ceny"] },

  { page: "/accounting-firm-website", locale: "en", expect: ["/website-development", "/pricing"] },
  { page: "/pl/strona-dla-biura-rachunkowego", locale: "pl", expect: ["/pl/tworzenie-stron-internetowych", "/pl/cennik"] },
  { page: "/ru/sait-dlya-buhgalterskoy-firmy", locale: "ru", expect: ["/ru/razrabotka-saitov", "/ru/ceny"] },

  { page: "/architecture-studio-website", locale: "en", expect: ["/website-development", "/pricing"] },
  { page: "/pl/strona-dla-biura-architektonicznego", locale: "pl", expect: ["/pl/tworzenie-stron-internetowych", "/pl/cennik"] },
  { page: "/ru/sait-dlya-arhitekturnogo-byuro", locale: "ru", expect: ["/ru/razrabotka-saitov", "/ru/ceny"] },

  { page: "/photographer-website", locale: "en", expect: ["/website-development", "/pricing"] },
  { page: "/pl/strona-dla-fotografa", locale: "pl", expect: ["/pl/tworzenie-stron-internetowych", "/pl/cennik"] },
  { page: "/ru/sait-dlya-fotografa", locale: "ru", expect: ["/ru/razrabotka-saitov", "/ru/ceny"] },

  { page: "/language-school-website", locale: "en", expect: ["/website-with-online-booking", "/multilingual-website-development", "/website-development", "/pricing"] },
  { page: "/pl/strona-dla-szkoly-jezykowej", locale: "pl", expect: ["/pl/strona-z-rezerwacja-online", "/pl/tworzenie-stron-wielojezycznych", "/pl/tworzenie-stron-internetowych", "/pl/cennik"] },
  { page: "/ru/sait-dlya-yazykovoy-shkoly", locale: "ru", expect: ["/ru/sait-s-onlain-zapisyu", "/ru/razrabotka-multiyazychnogo-saita", "/ru/razrabotka-saitov", "/ru/ceny"] },

  { page: "/fitness-studio-website", locale: "en", expect: ["/website-with-online-booking", "/website-development", "/pricing"] },
  { page: "/pl/strona-dla-studia-fitness", locale: "pl", expect: ["/pl/strona-z-rezerwacja-online", "/pl/tworzenie-stron-internetowych", "/pl/cennik"] },
  { page: "/ru/sait-dlya-fitnes-studii", locale: "ru", expect: ["/ru/sait-s-onlain-zapisyu", "/ru/razrabotka-saitov", "/ru/ceny"] },

  { page: "/cleaning-company-website", locale: "en", expect: ["/website-development", "/pricing"] },
  { page: "/pl/strona-dla-firmy-sprzatajacej", locale: "pl", expect: ["/pl/tworzenie-stron-internetowych", "/pl/cennik"] },
  { page: "/ru/sait-dlya-kliningovoy-kompanii", locale: "ru", expect: ["/ru/razrabotka-saitov", "/ru/ceny"] },

  { page: "/restaurant-website", locale: "en", expect: ["/website-with-online-booking", "/website-development", "/pricing"] },
  { page: "/pl/strona-dla-restauracji", locale: "pl", expect: ["/pl/strona-z-rezerwacja-online", "/pl/tworzenie-stron-internetowych", "/pl/cennik"] },
  { page: "/ru/sait-dlya-restorana", locale: "ru", expect: ["/ru/sait-s-onlain-zapisyu", "/ru/razrabotka-saitov", "/ru/ceny"] },

  { page: "/hotel-website", locale: "en", expect: ["/website-with-online-booking", "/multilingual-website-development", "/website-development", "/pricing"] },
  { page: "/pl/strona-dla-hotelu", locale: "pl", expect: ["/pl/strona-z-rezerwacja-online", "/pl/tworzenie-stron-wielojezycznych", "/pl/tworzenie-stron-internetowych", "/pl/cennik"] },
  { page: "/ru/sait-dlya-otelya", locale: "ru", expect: ["/ru/sait-s-onlain-zapisyu", "/ru/razrabotka-multiyazychnogo-saita", "/ru/razrabotka-saitov", "/ru/ceny"] },

  { page: "/travel-agency-website", locale: "en", expect: ["/catalog-website-with-filters", "/multilingual-website-development", "/website-development", "/pricing"] },
  { page: "/pl/strona-dla-biura-podrozy", locale: "pl", expect: ["/pl/strona-katalogowa-z-filtrami", "/pl/tworzenie-stron-wielojezycznych", "/pl/tworzenie-stron-internetowych", "/pl/cennik"] },
  { page: "/ru/sait-dlya-turagentstva", locale: "ru", expect: ["/ru/sait-katalog-s-filtrami", "/ru/razrabotka-multiyazychnogo-saita", "/ru/razrabotka-saitov", "/ru/ceny"] },

  { page: "/logistics-company-website", locale: "en", expect: ["/multilingual-website-development", "/website-development", "/pricing"] },
  { page: "/pl/strona-dla-firmy-transportowej", locale: "pl", expect: ["/pl/tworzenie-stron-wielojezycznych", "/pl/tworzenie-stron-internetowych", "/pl/cennik"] },
  { page: "/ru/sait-dlya-transportnoy-kompanii", locale: "ru", expect: ["/ru/razrabotka-multiyazychnogo-saita", "/ru/razrabotka-saitov", "/ru/ceny"] },

  { page: "/recruitment-agency-website", locale: "en", expect: ["/catalog-website-with-filters", "/multilingual-website-development", "/website-development", "/pricing"] },
  { page: "/pl/strona-dla-agencji-rekrutacyjnej", locale: "pl", expect: ["/pl/strona-katalogowa-z-filtrami", "/pl/tworzenie-stron-wielojezycznych", "/pl/tworzenie-stron-internetowych", "/pl/cennik"] },
  { page: "/ru/sait-dlya-kadrovogo-agentstva", locale: "ru", expect: ["/ru/sait-katalog-s-filtrami", "/ru/razrabotka-multiyazychnogo-saita", "/ru/razrabotka-saitov", "/ru/ceny"] },

  { page: "/manufacturing-company-website", locale: "en", expect: ["/catalog-website-with-filters", "/multilingual-website-development", "/website-development", "/pricing"] },
  { page: "/pl/strona-dla-firmy-produkcyjnej", locale: "pl", expect: ["/pl/strona-katalogowa-z-filtrami", "/pl/tworzenie-stron-wielojezycznych", "/pl/tworzenie-stron-internetowych", "/pl/cennik"] },
  { page: "/ru/sait-dlya-proizvodstvennoy-kompanii", locale: "ru", expect: ["/ru/sait-katalog-s-filtrami", "/ru/razrabotka-multiyazychnogo-saita", "/ru/razrabotka-saitov", "/ru/ceny"] },

  { page: "/startup-website", locale: "en", expect: ["/website-platform-migration", "/multilingual-website-development", "/ai-ready-seo-and-geo-optimization", "/pricing"] },
  { page: "/pl/strona-dla-startupu", locale: "pl", expect: ["/pl/migracja-strony-na-inna-platforme", "/pl/tworzenie-stron-wielojezycznych", "/pl/ai-seo-and-geo-optymalizacja", "/pl/cennik"] },
  { page: "/ru/sait-dlya-startapa", locale: "ru", expect: ["/ru/perenos-saita-na-druguyu-platformu", "/ru/razrabotka-multiyazychnogo-saita", "/ru/ai-seo-i-geo-optimizaciya", "/ru/ceny"] },

  { page: "/web-development-warsaw", locale: "en", expect: ["/website-platform-migration", "/website-development", "/pricing"] },
  { page: "/pl/tworzenie-stron-internetowych-warszawa", locale: "pl", expect: ["/pl/migracja-strony-na-inna-platforme", "/pl/tworzenie-stron-internetowych", "/pl/cennik"] },
  { page: "/ru/razrabotka-saitov-varshava", locale: "ru", expect: ["/ru/perenos-saita-na-druguyu-platformu", "/ru/razrabotka-saitov", "/ru/ceny"] },

  { page: "/website-with-online-booking", locale: "en", expect: ["/website-development"] }, // + Batch A's dental/hotel/fitness
  { page: "/pl/strona-z-rezerwacja-online", locale: "pl", expect: ["/pl/tworzenie-stron-internetowych"] },
  { page: "/ru/sait-s-onlain-zapisyu", locale: "ru", expect: ["/ru/razrabotka-saitov"] },

  { page: "/multilingual-website-development", locale: "en", expect: ["/seo-optimization-and-strategy"] },
  { page: "/pl/tworzenie-stron-wielojezycznych", locale: "pl", expect: ["/pl/strategia-i-optymalizacja-seo"] },
  { page: "/ru/razrabotka-multiyazychnogo-saita", locale: "ru", expect: ["/ru/seo-optimizaciya-i-strategiya"] },

  { page: "/catalog-website-with-filters", locale: "en", expect: ["/seo-optimization-and-strategy"] },
  { page: "/pl/strona-katalogowa-z-filtrami", locale: "pl", expect: ["/pl/strategia-i-optymalizacja-seo"] },
  { page: "/ru/sait-katalog-s-filtrami", locale: "ru", expect: ["/ru/seo-optimizaciya-i-strategiya"] },

  { page: "/website-platform-migration", locale: "en", expect: ["/seo-optimization-and-strategy"] },
  { page: "/pl/migracja-strony-na-inna-platforme", locale: "pl", expect: ["/pl/strategia-i-optymalizacja-seo"] },
  { page: "/ru/perenos-saita-na-druguyu-platformu", locale: "ru", expect: ["/ru/seo-optimizaciya-i-strategiya"] },
];

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
  const hrefCache = new Set();
  const richTextLinkCounts = [];

  for (const check of CHECKS) {
    const url = BASE + check.page;
    const res = await fetch(url);
    const html = await res.text();
    const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map((m) => m[1].replace(/&amp;/g, "&"));
    const richTextLinks = (html.match(/<a class="RichText_link[^>]*>/g) || []).length;
    richTextLinkCounts.push({ page: check.page, count: richTextLinks });

    console.log(`\n=== ${check.page} (${res.status}) — ${richTextLinks} inline RichText link(s) ===`);
    for (const target of check.expect) {
      if (hrefs.includes(target)) {
        console.log(`  OK   link -> ${target}`);
        totalOk++;
        hrefCache.add(target);
      } else {
        console.log(`  FAIL missing link -> ${target}`);
        totalFail++;
      }
    }
    const leaks = checkCrossLocale(check.locale, check.expect.filter((t) => hrefs.includes(t)));
    if (leaks.length) {
      console.log(`  FAIL cross-locale leak: ${leaks.join(", ")}`);
      totalFail += leaks.length;
    }
  }

  console.log("\n=== RESOLVING TARGET URLS (200 check) ===");
  let resolveOk = 0, resolveFail = 0;
  for (const t of hrefCache) {
    const res = await fetch(BASE + t);
    if (res.status === 200) resolveOk++;
    else { resolveFail++; console.log(`  FAIL ${t} -> ${res.status}`); }
  }
  console.log(`Resolved ${resolveOk}/${hrefCache.size} target URLs with 200.`);

  console.log("\n=== INLINE LINK COUNT PER PAGE (ceiling ~8) ===");
  const over = richTextLinkCounts.filter((r) => r.count > 8);
  for (const r of richTextLinkCounts) console.log(`  ${r.count}  ${r.page}`);
  if (over.length) console.log(`\nOVER CEILING: ${over.map((r) => r.page).join(", ")}`);
  else console.log("\nAll pages within the ~8 inline-link ceiling.");

  console.log(`\n=== SUMMARY: ${totalOk} link(s) OK, ${totalFail} FAIL, ${resolveFail} broken target(s) ===`);
}

main().catch((e) => { console.error(e); process.exit(1); });
