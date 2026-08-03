// scripts/verify-batchD-links.cjs
const BASE = "http://localhost:3000";

const CHECKS = [
  { page: "/web-development-warsaw", locale: "en", expect: ["/portfolio/felgilab-wordpress-rebuild"] },
  { page: "/pl/tworzenie-stron-internetowych-warszawa", locale: "pl", expect: ["/pl/portfolio/przebudowa-strony-felgilab-wordpress"] },
  { page: "/ru/razrabotka-saitov-varshava", locale: "ru", expect: ["/ru/portfolio/pererabotka-saita-felgilab-wordpress"] },

  { page: "/website-platform-migration", locale: "en", expect: ["/portfolio/felgilab-wordpress-rebuild"] },
  { page: "/pl/migracja-strony-na-inna-platforme", locale: "pl", expect: ["/pl/portfolio/przebudowa-strony-felgilab-wordpress"] },
  { page: "/ru/perenos-saita-na-druguyu-platformu", locale: "ru", expect: ["/ru/portfolio/pererabotka-saita-felgilab-wordpress"] },

  { page: "/cleaning-company-website", locale: "en", expect: ["/portfolio/felgilab-wordpress-rebuild"] },
  { page: "/pl/strona-dla-firmy-sprzatajacej", locale: "pl", expect: ["/pl/portfolio/przebudowa-strony-felgilab-wordpress"] },
  { page: "/ru/sait-dlya-kliningovoy-kompanii", locale: "ru", expect: ["/ru/portfolio/pererabotka-saita-felgilab-wordpress"] },

  { page: "/logistics-company-website", locale: "en", expect: ["/portfolio/felgilab-wordpress-rebuild"] },
  { page: "/pl/strona-dla-firmy-transportowej", locale: "pl", expect: ["/pl/portfolio/przebudowa-strony-felgilab-wordpress"] },
  { page: "/ru/sait-dlya-transportnoy-kompanii", locale: "ru", expect: ["/ru/portfolio/pererabotka-saita-felgilab-wordpress"] },

  { page: "/website-with-online-booking", locale: "en", expect: ["/portfolio/felgilab-wordpress-rebuild"] },
  { page: "/pl/strona-z-rezerwacja-online", locale: "pl", expect: ["/pl/portfolio/przebudowa-strony-felgilab-wordpress"] },
  { page: "/ru/sait-s-onlain-zapisyu", locale: "ru", expect: ["/ru/portfolio/pererabotka-saita-felgilab-wordpress"] },

  { page: "/multilingual-website-development", locale: "en", expect: ["/portfolio/build-and-optimize-a-multilingual-real-estate-platform"] },
  { page: "/pl/tworzenie-stron-wielojezycznych", locale: "pl", expect: ["/pl/portfolio/rozwoj-wielojezycznej-platformy-nieruchomosci-premium"] },
  { page: "/ru/razrabotka-multiyazychnogo-saita", locale: "ru", expect: ["/ru/portfolio/razrabotka-saita-dlya-agentstva-elitnoi-nedvizhimosti-na-kipre"] },

  { page: "/catalog-website-with-filters", locale: "en", expect: ["/portfolio/build-and-optimize-a-multilingual-real-estate-platform"] },
  { page: "/pl/strona-katalogowa-z-filtrami", locale: "pl", expect: ["/pl/portfolio/rozwoj-wielojezycznej-platformy-nieruchomosci-premium"] },
  { page: "/ru/sait-katalog-s-filtrami", locale: "ru", expect: ["/ru/portfolio/razrabotka-saita-dlya-agentstva-elitnoi-nedvizhimosti-na-kipre"] },

  { page: "/travel-agency-website", locale: "en", expect: ["/portfolio/build-and-optimize-a-multilingual-real-estate-platform"] },
  { page: "/pl/strona-dla-biura-podrozy", locale: "pl", expect: ["/pl/portfolio/rozwoj-wielojezycznej-platformy-nieruchomosci-premium"] },
  { page: "/ru/sait-dlya-turagentstva", locale: "ru", expect: ["/ru/portfolio/razrabotka-saita-dlya-agentstva-elitnoi-nedvizhimosti-na-kipre"] },

  { page: "/hotel-website", locale: "en", expect: ["/portfolio/build-and-optimize-a-multilingual-real-estate-platform"] },
  { page: "/pl/strona-dla-hotelu", locale: "pl", expect: ["/pl/portfolio/rozwoj-wielojezycznej-platformy-nieruchomosci-premium"] },
  { page: "/ru/sait-dlya-otelya", locale: "ru", expect: ["/ru/portfolio/razrabotka-saita-dlya-agentstva-elitnoi-nedvizhimosti-na-kipre"] },

  { page: "/property-developer-website", locale: "en", expect: ["/catalog-website-with-filters"] },
  { page: "/pl/strona-dla-dewelopera", locale: "pl", expect: ["/pl/strona-katalogowa-z-filtrami"] },
  { page: "/ru/sait-dlya-zastroishchika", locale: "ru", expect: ["/ru/sait-katalog-s-filtrami"] },

  { page: "/real-estate-agency-website", locale: "en", expect: ["/catalog-website-with-filters"] },
  { page: "/pl/strona-dla-agencji-nieruchomosci", locale: "pl", expect: ["/pl/strona-katalogowa-z-filtrami"] },
  { page: "/ru/sait-dlya-agentstva-nedvizhimosti", locale: "ru", expect: ["/ru/sait-katalog-s-filtrami"] },
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

  for (const check of CHECKS) {
    const url = BASE + check.page;
    const res = await fetch(url);
    const html = await res.text();
    const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map((m) => m[1].replace(/&amp;/g, "&"));

    console.log(`\n=== ${check.page} (${res.status}) ===`);
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

  console.log("\n=== FINAL INLINE LINK COUNT PER LANDING (ceiling ~8, cumulative across all batches) ===");
  const ALL_LANDINGS = [
    "/dental-clinic-website", "/veterinary-clinic-website", "/accounting-firm-website", "/architecture-studio-website",
    "/photographer-website", "/language-school-website", "/fitness-studio-website", "/cleaning-company-website",
    "/restaurant-website", "/hotel-website", "/travel-agency-website", "/logistics-company-website",
    "/recruitment-agency-website", "/manufacturing-company-website", "/startup-website", "/web-development-warsaw",
    "/website-with-online-booking", "/multilingual-website-development", "/catalog-website-with-filters", "/website-platform-migration",
  ];
  const counts = [];
  for (const p of ALL_LANDINGS) {
    const res = await fetch(BASE + p);
    const html = await res.text();
    const n = (html.match(/<a class="RichText_link[^>]*>/g) || []).length;
    counts.push({ page: p, count: n });
    console.log(`  ${n}  ${p}`);
  }
  const over = counts.filter((c) => c.count > 8);
  if (over.length) console.log(`\nOVER CEILING: ${over.map((c) => c.page).join(", ")}`);
  else console.log("\nAll 20 landings within the ~8 inline-link ceiling.");

  console.log(`\n=== SUMMARY: ${totalOk} link(s) OK, ${totalFail} FAIL, ${resolveFail} broken target(s) ===`);
}

main().catch((e) => { console.error(e); process.exit(1); });
