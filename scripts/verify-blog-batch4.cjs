// scripts/verify-blog-batch4.cjs
const BASE = "http://localhost:3000";

function decodeEntities(s) {
  if (s == null) return s;
  return s.replace(/&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, "&");
}

const ARTICLES = [
  {
    label: "website-build-timeline",
    urls: {
      en: "/blog/how-long-does-it-take-to-build-a-website",
      pl: "/pl/blog/ile-trwa-stworzenie-strony-internetowej",
      ru: "/ru/blog/skolko-vremeni-zanimaet-razrabotka-saita",
    },
    publishedAt: "2026-07-31T12:00:00Z",
    expectCoverAlt: {
      en: "Website build stages and how long each one takes",
      pl: "Etapy tworzenia strony internetowej i czas każdego z nich",
      ru: "Этапы разработки сайта и сроки по каждому из них",
    },
    expectServiceOffered: { en: "/web-development-warsaw", pl: "/pl/tworzenie-stron-internetowych-warszawa", ru: "/ru/razrabotka-saitov-varshava" },
    expectRelated: {
      en: ["/blog/how-to-choose-a-web-developer", "/blog/freelancer-vs-agency-web-development", "/blog/what-to-build-a-business-website-on"],
      pl: ["/pl/blog/jak-wybrac-wykonawce-strony-internetowej", "/pl/blog/freelancer-czy-agencja", "/pl/blog/na-czym-zbudowac-strone-firmowa"],
      ru: ["/ru/blog/kak-vybrat-razrabotchika-saita", "/ru/blog/frilanser-ili-agentstvo", "/ru/blog/na-chem-delat-sait-biznesu"],
    },
  },
  {
    label: "multilingual-website-cost",
    urls: {
      en: "/blog/multilingual-website-cost",
      pl: "/pl/blog/ile-kosztuje-strona-wielojezyczna",
      ru: "/ru/blog/skolko-stoit-multiyazychnyi-sait",
    },
    publishedAt: "2026-07-31T13:00:00Z",
    expectCoverAlt: {
      en: "Language versions of a website connected by correct technical markup",
      pl: "Wersje językowe strony połączone poprawnymi znacznikami technicznymi",
      ru: "Языковые версии сайта, связанные корректной технической разметкой",
    },
    expectServiceOffered: { en: "/multilingual-website-development", pl: "/pl/tworzenie-stron-wielojezycznych", ru: "/ru/razrabotka-multiyazychnogo-saita" },
    expectRelated: {
      en: ["/blog/website-redesign-without-losing-traffic", "/blog/what-to-build-a-business-website-on", "/blog/how-long-does-it-take-to-build-a-website"],
      pl: ["/pl/blog/redesign-strony-bez-utraty-ruchu", "/pl/blog/na-czym-zbudowac-strone-firmowa", "/pl/blog/ile-trwa-stworzenie-strony-internetowej"],
      ru: ["/ru/blog/redizayn-sayta-bez-poteri-trafika", "/ru/blog/na-chem-delat-sait-biznesu", "/ru/blog/skolko-vremeni-zanimaet-razrabotka-saita"],
    },
  },
  {
    label: "chatgpt-recommendations",
    urls: {
      en: "/blog/how-to-get-recommended-by-chatgpt",
      pl: "/pl/blog/jak-trafic-do-rekomendacji-chatgpt",
      ru: "/ru/blog/kak-popast-v-rekomendacii-chatgpt",
    },
    publishedAt: "2026-07-31T14:00:00Z",
    expectCoverAlt: {
      en: "Checking how a business is mentioned in AI assistant answers",
      pl: "Sprawdzanie wzmianek o firmie w odpowiedziach asystentów AI",
      ru: "Проверка упоминаний бизнеса в ответах ИИ-ассистентов",
    },
    expectServiceOffered: { en: "/ai-ready-seo-and-geo-optimization", pl: "/pl/ai-seo-and-geo-optymalizacja", ru: "/ru/ai-seo-i-geo-optimizaciya" },
    expectRelated: {
      en: ["/blog/how-clients-find-you-through-chatgpt", "/blog/website-not-showing-in-google", "/blog/how-much-seo-costs"],
      pl: ["/pl/blog/jak-klienci-znajduja-specjalistow-przez-chatgpt", "/pl/blog/strona-nie-pojawia-sie-w-google", "/pl/blog/ile-kosztuje-pozycjonowanie-strony"],
      ru: ["/ru/blog/kak-klienty-nahodyat-cherez-chatgpt", "/ru/blog/saita-net-v-poiske-google", "/ru/blog/skolko-stoit-prodvizhenie-saita"],
    },
  },
];

// Earlier-batch backfill checks — confirm Pass 3 patched these in correctly.
const BACKFILL_CHECKS = [
  { page: "/blog/how-to-choose-a-web-developer", expect: "/blog/how-long-does-it-take-to-build-a-website" },
  { page: "/pl/blog/jak-wybrac-wykonawce-strony-internetowej", expect: "/pl/blog/ile-trwa-stworzenie-strony-internetowej" },
  { page: "/ru/blog/kak-vybrat-razrabotchika-saita", expect: "/ru/blog/skolko-vremeni-zanimaet-razrabotka-saita" },
  { page: "/blog/freelancer-vs-agency-web-development", expect: "/blog/how-long-does-it-take-to-build-a-website" },
  { page: "/pl/blog/freelancer-czy-agencja", expect: "/pl/blog/ile-trwa-stworzenie-strony-internetowej" },
  { page: "/ru/blog/frilanser-ili-agentstvo", expect: "/ru/blog/skolko-vremeni-zanimaet-razrabotka-saita" },
  { page: "/blog/website-not-showing-in-google", expect: "/blog/how-to-get-recommended-by-chatgpt" },
  { page: "/pl/blog/strona-nie-pojawia-sie-w-google", expect: "/pl/blog/jak-trafic-do-rekomendacji-chatgpt" },
  { page: "/ru/blog/saita-net-v-poiske-google", expect: "/ru/blog/kak-popast-v-rekomendacii-chatgpt" },
];

// Pass 4 bidirectional backlink check on the pre-existing published article.
const BACKLINK_CHECKS = [
  { page: "/blog/how-clients-find-you-through-chatgpt", expect: "/blog/how-to-get-recommended-by-chatgpt" },
  { page: "/pl/blog/jak-klienci-znajduja-specjalistow-przez-chatgpt", expect: "/pl/blog/jak-trafic-do-rekomendacji-chatgpt" },
  { page: "/ru/blog/kak-klienty-nahodyat-cherez-chatgpt", expect: "/ru/blog/kak-popast-v-rekomendacii-chatgpt" },
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

  console.log("\n\n=== EARLIER-BATCH BACKFILL CHECKS (Pass 3) ===");
  for (const check of BACKFILL_CHECKS) {
    const res = await fetch(BASE + check.page);
    const html = await res.text();
    const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map((m) => m[1].replace(/&amp;/g, "&"));
    console.log(`\n${check.page}`);
    if (hrefs.includes(check.expect)) { console.log(`  OK   backfilled link -> ${check.expect}`); ok++; }
    else { console.log(`  FAIL backfilled link missing: ${check.expect}`); fail++; }
  }

  console.log("\n\n=== BACKLINK CHECK (Pass 4, pre-existing published article) ===");
  for (const check of BACKLINK_CHECKS) {
    const res = await fetch(BASE + check.page);
    const html = await res.text();
    const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map((m) => m[1].replace(/&amp;/g, "&"));
    console.log(`\n${check.page}`);
    if (hrefs.includes(check.expect)) { console.log(`  OK   backlink -> ${check.expect}`); ok++; }
    else { console.log(`  FAIL backlink missing: ${check.expect}`); fail++; }
  }

  console.log(`\n=== SUMMARY: ${ok} OK, ${fail} FAIL ===`);
}

main().catch((e) => { console.error(e); process.exit(1); });
