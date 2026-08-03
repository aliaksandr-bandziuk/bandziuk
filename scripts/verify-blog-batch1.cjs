// scripts/verify-blog-batch1.cjs
const BASE = "http://localhost:3000";

function decodeEntities(s) {
  if (s == null) return s;
  return s.replace(/&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, "&");
}

const ARTICLES = [
  {
    label: "psychologist checklist",
    urls: {
      en: "/blog/what-a-psychologist-website-needs",
      pl: "/pl/blog/co-powinno-byc-na-stronie-psychologa",
      ru: "/ru/blog/chto-dolzhno-byt-na-saite-psihologa",
    },
    publishedAt: "2026-07-10T12:00:00Z",
    expectCoverAlt: {
      en: "Therapist website showing the approach and a consultation booking form",
      pl: "Strona psychologa z opisem podejścia i formularzem zapisu na konsultację",
      ru: "Сайт психолога с описанием подхода и формой записи на консультацию",
    },
    expectServiceOffered: { en: "/website-for-psychologists-therapists", pl: "/pl/strona-dla-psychologow-terapeutow", ru: "/ru/sait-dlya-psihologov-terapevtov" },
    expectRelated: {
      en: ["/blog/psychologist-website-cost", "/dental-clinic-website"],
      pl: ["/pl/blog/ile-kosztuje-strona-dla-psychologa", "/pl/strona-dla-gabinetu-stomatologicznego"],
      ru: ["/ru/blog/skolko-stoit-sait-psihologa", "/ru/sait-dlya-stomatologicheskoy-kliniki"],
    },
  },
  {
    label: "auto-repair cost",
    urls: {
      en: "/blog/auto-repair-shop-website-cost",
      pl: "/pl/blog/ile-kosztuje-strona-dla-warsztatu-samochodowego",
      ru: "/ru/blog/skolko-stoit-sait-dlya-avtoservisa",
    },
    publishedAt: "2026-07-10T13:00:00Z",
    expectCoverAlt: {
      en: "Auto repair shop website with a price calculator and enquiry form",
      pl: "Strona warsztatu samochodowego z kalkulatorem wyceny i formularzem zapytania",
      ru: "Сайт автосервиса с калькулятором стоимости и формой заявки",
    },
    expectServiceOffered: { en: "/web-development-warsaw", pl: "/pl/tworzenie-stron-internetowych-warszawa", ru: "/ru/razrabotka-saitov-varshava" },
    expectRelated: {
      en: ["/blog/construction-company-website-cost"],
      pl: ["/pl/blog/ile-kosztuje-strona-dla-firmy-budowlanej"],
      ru: ["/ru/blog/skolko-stoit-sait-dlya-stroitelnoy-kompanii"],
    },
  },
  {
    label: "construction cost",
    urls: {
      en: "/blog/construction-company-website-cost",
      pl: "/pl/blog/ile-kosztuje-strona-dla-firmy-budowlanej",
      ru: "/ru/blog/skolko-stoit-sait-dlya-stroitelnoy-kompanii",
    },
    publishedAt: "2026-07-10T14:00:00Z",
    expectCoverAlt: {
      en: "Construction company website with a project gallery and quote request form",
      pl: "Strona firmy budowlanej z galerią realizacji i formularzem wyceny",
      ru: "Сайт строительной компании с галереей реализаций и формой расчёта",
    },
    expectServiceOffered: { en: "/website-platform-migration", pl: "/pl/migracja-strony-na-inna-platforme", ru: "/ru/perenos-saita-na-druguyu-platformu" },
    expectRelated: {
      en: ["/blog/auto-repair-shop-website-cost", "/blog/website-redesign-without-losing-traffic"],
      pl: ["/pl/blog/ile-kosztuje-strona-dla-warsztatu-samochodowego", "/pl/blog/redesign-strony-bez-utraty-ruchu"],
      ru: ["/ru/blog/skolko-stoit-sait-dlya-avtoservisa", "/ru/blog/redizayn-sayta-bez-poteri-trafika"],
    },
  },
];

async function main() {
  let ok = 0, fail = 0;

  for (const art of ARTICLES) {
    for (const lang of ["en", "pl", "ru"]) {
      const url = BASE + art.urls[lang];
      const res = await fetch(url);
      const rawHtml = await res.text();
      const html = rawHtml.replace(/\\+"/g, '"'); // unescape for JSON-LD regex matching (SSR payload double-escapes quotes)
      console.log(`\n=== ${art.label} [${lang}] ${art.urls[lang]} (${res.status}) ===`);

      // 1. renders
      if (res.status === 200) { ok++; } else { fail++; console.log("  FAIL non-200 status"); continue; }

      // 2. cover image with alt — first data-nimg="fill" image on the page is the BlogIntro hero.
      const imgMatch = rawHtml.match(/<img alt="([^"]*)"[^>]*data-nimg="fill"/);
      const actualAlt = imgMatch ? decodeEntities(imgMatch[1]) : null;
      if (actualAlt === art.expectCoverAlt[lang]) { console.log(`  OK   cover image alt="${actualAlt}"`); ok++; }
      else { console.log(`  FAIL cover image alt mismatch: expected "${art.expectCoverAlt[lang]}", got "${actualAlt}"`); fail++; }

      // 3. author
      const authorMatch = html.match(/"author":\{"@type":"Person","name":"([^"]*)"/);
      if (authorMatch && decodeEntities(authorMatch[1]) === "Aliaksandr Bandziuk") { console.log("  OK   author = Aliaksandr Bandziuk"); ok++; }
      else { console.log(`  FAIL author mismatch: ${authorMatch ? authorMatch[1] : "not found"}`); fail++; }

      // 4. publishedAt / datePublished — dev-mode RSC streaming can split the JSON string across
      // chunk boundaries, breaking a single regex match; a direct substring check on the raw
      // (unescaped) response is robust to that.
      if (html.includes(art.publishedAt)) { console.log(`  OK   datePublished = ${art.publishedAt}`); ok++; }
      else { console.log(`  FAIL datePublished not found: expected ${art.publishedAt}`); fail++; }

      // 5. BlogPosting JSON-LD present
      if (html.includes('"@type":"BlogPosting"')) { console.log("  OK   BlogPosting JSON-LD present"); ok++; }
      else { console.log("  FAIL BlogPosting JSON-LD missing"); fail++; }

      // 6. no FAQPage JSON-LD (expected, since no faqBlock)
      if (!html.includes('"@type":"FAQPage"')) { console.log("  OK   no FAQPage JSON-LD (expected)"); ok++; }
      else { console.log("  FAIL unexpected FAQPage JSON-LD present"); fail++; }

      // 7. hreflang (4 links: en/pl/ru/x-default)
      const hreflangCount = (html.match(/rel="alternate"/g) || []).length;
      if (hreflangCount === 4) { console.log("  OK   4 hreflang alternates"); ok++; }
      else { console.log(`  FAIL hreflang count = ${hreflangCount}, expected 4`); fail++; }

      // 8. no noindex
      if (!/name="robots"[^>]*noindex/.test(html)) { console.log("  OK   no noindex"); ok++; }
      else { console.log("  FAIL noindex present"); fail++; }

      // 9. serviceOffered resolves (ServiceOffered sidebar link)
      const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map((m) => m[1].replace(/&amp;/g, "&"));
      if (hrefs.includes(art.expectServiceOffered[lang])) { console.log(`  OK   serviceOffered link -> ${art.expectServiceOffered[lang]}`); ok++; }
      else { console.log(`  FAIL serviceOffered link missing: ${art.expectServiceOffered[lang]}`); fail++; }

      // 10. relatedArticles resolve (the ones expected to be live now)
      for (const target of art.expectRelated[lang]) {
        if (hrefs.includes(target)) { console.log(`  OK   relatedArticles link -> ${target}`); ok++; }
        else { console.log(`  FAIL relatedArticles link missing: ${target}`); fail++; }
      }
    }
  }

  console.log(`\n=== SUMMARY: ${ok} OK, ${fail} FAIL ===`);
}

main().catch((e) => { console.error(e); process.exit(1); });
