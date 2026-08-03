// scripts/verify-batchC-links.cjs
const BASE = "http://localhost:3000";

const CHECKS = [
  { page: "/startup-website", locale: "en", expect: ["/blog/website-builder-vs-custom-development", "/blog/website-redesign-without-losing-traffic", "/blog/how-clients-find-you-through-chatgpt"] },
  { page: "/pl/strona-dla-startupu", locale: "pl", expect: ["/pl/blog/kreator-stron-czy-strona-na-zamowienie", "/pl/blog/redesign-strony-bez-utraty-ruchu", "/pl/blog/jak-klienci-znajduja-specjalistow-przez-chatgpt"] },
  { page: "/ru/sait-dlya-startapa", locale: "ru", expect: ["/ru/blog/konstruktor-ili-razrabotka-saita", "/ru/blog/redizayn-sayta-bez-poteri-trafika", "/ru/blog/kak-klienty-nahodyat-cherez-chatgpt"] },

  { page: "/restaurant-website", locale: "en", expect: ["/blog/website-builder-vs-custom-development"] },
  { page: "/pl/strona-dla-restauracji", locale: "pl", expect: ["/pl/blog/kreator-stron-czy-strona-na-zamowienie"] },
  { page: "/ru/sait-dlya-restorana", locale: "ru", expect: ["/ru/blog/konstruktor-ili-razrabotka-saita"] },

  { page: "/photographer-website", locale: "en", expect: ["/blog/website-builder-vs-custom-development"] },
  { page: "/pl/strona-dla-fotografa", locale: "pl", expect: ["/pl/blog/kreator-stron-czy-strona-na-zamowienie"] },
  { page: "/ru/sait-dlya-fotografa", locale: "ru", expect: ["/ru/blog/konstruktor-ili-razrabotka-saita"] },

  { page: "/fitness-studio-website", locale: "en", expect: ["/blog/website-builder-vs-custom-development"] },
  { page: "/pl/strona-dla-studia-fitness", locale: "pl", expect: ["/pl/blog/kreator-stron-czy-strona-na-zamowienie"] },
  { page: "/ru/sait-dlya-fitnes-studii", locale: "ru", expect: ["/ru/blog/konstruktor-ili-razrabotka-saita"] },

  { page: "/cleaning-company-website", locale: "en", expect: ["/blog/website-builder-vs-custom-development"] },
  { page: "/pl/strona-dla-firmy-sprzatajacej", locale: "pl", expect: ["/pl/blog/kreator-stron-czy-strona-na-zamowienie"] },
  { page: "/ru/sait-dlya-kliningovoy-kompanii", locale: "ru", expect: ["/ru/blog/konstruktor-ili-razrabotka-saita"] },

  { page: "/language-school-website", locale: "en", expect: ["/blog/website-builder-vs-custom-development"] },
  { page: "/pl/strona-dla-szkoly-jezykowej", locale: "pl", expect: ["/pl/blog/kreator-stron-czy-strona-na-zamowienie"] },
  { page: "/ru/sait-dlya-yazykovoy-shkoly", locale: "ru", expect: ["/ru/blog/konstruktor-ili-razrabotka-saita"] },

  { page: "/website-platform-migration", locale: "en", expect: ["/blog/website-redesign-without-losing-traffic"] },
  { page: "/pl/migracja-strony-na-inna-platforme", locale: "pl", expect: ["/pl/blog/redesign-strony-bez-utraty-ruchu"] },
  { page: "/ru/perenos-saita-na-druguyu-platformu", locale: "ru", expect: ["/ru/blog/redizayn-sayta-bez-poteri-trafika"] },

  { page: "/web-development-warsaw", locale: "en", expect: ["/blog/website-redesign-without-losing-traffic", "/blog/how-much-seo-costs"] },
  { page: "/pl/tworzenie-stron-internetowych-warszawa", locale: "pl", expect: ["/pl/blog/redesign-strony-bez-utraty-ruchu", "/pl/blog/ile-kosztuje-pozycjonowanie-strony"] },
  { page: "/ru/razrabotka-saitov-varshava", locale: "ru", expect: ["/ru/blog/redizayn-sayta-bez-poteri-trafika", "/ru/blog/skolko-stoit-prodvizhenie-saita"] },

  { page: "/dental-clinic-website", locale: "en", expect: ["/blog/how-much-seo-costs"] },
  { page: "/pl/strona-dla-gabinetu-stomatologicznego", locale: "pl", expect: ["/pl/blog/ile-kosztuje-pozycjonowanie-strony"] },
  { page: "/ru/sait-dlya-stomatologicheskoy-kliniki", locale: "ru", expect: ["/ru/blog/skolko-stoit-prodvizhenie-saita"] },

  { page: "/veterinary-clinic-website", locale: "en", expect: ["/blog/how-much-seo-costs"] },
  { page: "/pl/strona-dla-przychodni-weterynaryjnej", locale: "pl", expect: ["/pl/blog/ile-kosztuje-pozycjonowanie-strony"] },
  { page: "/ru/sait-dlya-veterinarnoy-kliniki", locale: "ru", expect: ["/ru/blog/skolko-stoit-prodvizhenie-saita"] },

  { page: "/accounting-firm-website", locale: "en", expect: ["/blog/how-much-seo-costs"] },
  { page: "/pl/strona-dla-biura-rachunkowego", locale: "pl", expect: ["/pl/blog/ile-kosztuje-pozycjonowanie-strony"] },
  { page: "/ru/sait-dlya-buhgalterskoy-firmy", locale: "ru", expect: ["/ru/blog/skolko-stoit-prodvizhenie-saita"] },

  { page: "/multilingual-website-development", locale: "en", expect: ["/blog/how-clients-find-you-through-chatgpt"] },
  { page: "/pl/tworzenie-stron-wielojezycznych", locale: "pl", expect: ["/pl/blog/jak-klienci-znajduja-specjalistow-przez-chatgpt"] },
  { page: "/ru/razrabotka-multiyazychnogo-saita", locale: "ru", expect: ["/ru/blog/kak-klienty-nahodyat-cherez-chatgpt"] },

  // relatedArticles reciprocal — check the article pages themselves show a link back to the selling landing/service
  { page: "/blog/website-builder-vs-custom-development", locale: "en", expect: ["/startup-website"] },
  { page: "/pl/blog/kreator-stron-czy-strona-na-zamowienie", locale: "pl", expect: ["/pl/strona-dla-startupu"] },
  { page: "/ru/blog/konstruktor-ili-razrabotka-saita", locale: "ru", expect: ["/ru/sait-dlya-startapa"] },

  { page: "/blog/website-redesign-without-losing-traffic", locale: "en", expect: ["/website-platform-migration"] },
  { page: "/pl/blog/redesign-strony-bez-utraty-ruchu", locale: "pl", expect: ["/pl/migracja-strony-na-inna-platforme"] },
  { page: "/ru/blog/redizayn-sayta-bez-poteri-trafika", locale: "ru", expect: ["/ru/perenos-saita-na-druguyu-platformu"] },

  { page: "/blog/how-much-seo-costs", locale: "en", expect: ["/seo-optimization-and-strategy"] },
  { page: "/pl/blog/ile-kosztuje-pozycjonowanie-strony", locale: "pl", expect: ["/pl/strategia-i-optymalizacja-seo"] },
  { page: "/ru/blog/skolko-stoit-prodvizhenie-saita", locale: "ru", expect: ["/ru/seo-optimizaciya-i-strategiya"] },

  { page: "/blog/how-clients-find-you-through-chatgpt", locale: "en", expect: ["/ai-ready-seo-and-geo-optimization"] },
  { page: "/pl/blog/jak-klienci-znajduja-specjalistow-przez-chatgpt", locale: "pl", expect: ["/pl/ai-seo-and-geo-optymalizacja"] },
  { page: "/ru/blog/kak-klienty-nahodyat-cherez-chatgpt", locale: "ru", expect: ["/ru/ai-seo-i-geo-optimizaciya"] },
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

  console.log("\n=== INLINE LINK COUNT PER LANDING PAGE (ceiling ~8) ===");
  const LANDING_PAGES = [
    "/startup-website", "/restaurant-website", "/photographer-website", "/fitness-studio-website",
    "/cleaning-company-website", "/language-school-website", "/website-platform-migration",
    "/web-development-warsaw", "/dental-clinic-website", "/veterinary-clinic-website",
    "/accounting-firm-website", "/multilingual-website-development",
  ];
  const counts = [];
  for (const p of LANDING_PAGES) {
    const res = await fetch(BASE + p);
    const html = await res.text();
    const n = (html.match(/<a class="RichText_link[^>]*>/g) || []).length;
    counts.push({ page: p, count: n });
    console.log(`  ${n}  ${p}`);
  }
  const over = counts.filter((c) => c.count > 8);
  if (over.length) console.log(`\nOVER CEILING: ${over.map((c) => c.page).join(", ")}`);
  else console.log("\nAll checked pages within the ~8 inline-link ceiling.");

  console.log(`\n=== SUMMARY: ${totalOk} link(s) OK, ${totalFail} FAIL, ${resolveFail} broken target(s) ===`);
}

main().catch((e) => { console.error(e); process.exit(1); });
