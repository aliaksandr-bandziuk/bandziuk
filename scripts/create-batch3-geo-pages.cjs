// Batch 3 of the geo country pages: Germany, UK, USA (EN + PL + RU — promotion pages).
// Switzerland held back: geo-promo-switzerland-banner.jpg is missing from drafts.
const fs = require("fs");
const path = require("path");
const { createClient } = require("@sanity/client");
const {
  splitSections, parseLocaleBlocks, getSection, parseKeyValues, parseNumberedItems, parseTitledMarkdown, parseBodyText,
} = require("./lib/tagged-content-parser.cjs");
const { insertInlineLink } = require("./lib/portable-text-links.cjs");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local") });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const APPLY = process.argv.includes("--apply");
const LANGS = ["en", "pl", "ru"];

function key() { return Math.random().toString(16).slice(2, 14); }
function span(text, marks = []) { return { _key: key(), _type: "span", text, marks }; }
function block(children, style = "normal") { return { _key: key(), _type: "block", style, markDefs: [], children }; }

function buildBenefitsBlock(title, items) {
  return { _key: key(), _type: "benefitsBlock", title, benefits: items.map((it) => ({ _key: key(), title: it.title, description: it.description })) };
}
function buildGridBlock(title, items) {
  return { _key: key(), _type: "gridBlock", title, items: items.map((it) => ({ _key: key(), title: it.title, description: it.description })) };
}
function buildStepsBlock(title, items) {
  return { _key: key(), _type: "stepsBlock", title, steps: items.map((it, i) => ({ _key: key(), stepNumber: i + 1, title: it.title, description: it.description })) };
}
function buildFaqBlock(title, items) {
  return {
    _key: key(),
    _type: "faqBlock",
    faq: {
      _type: "accordionBlock",
      title,
      items: items.map((it) => ({ _key: key(), question: it.title, answer: [block([span(it.description)])] })),
    },
  };
}
function insertLinkIntoFaqAnswer(faqBlockObj, anchor, href) {
  const idx = faqBlockObj.faq.items.findIndex((it) => {
    const text = it.answer.map((b) => b.children.map((c) => c.text).join("")).join(" ");
    return text.includes(anchor);
  });
  if (idx === -1) throw new Error(`FAQ anchor not found: "${anchor}"`);
  faqBlockObj.faq.items[idx].answer = insertInlineLink(faqBlockObj.faq.items[idx].answer, anchor, href);
}

// ---------- Standard closing section (verbatim, EN/PL/RU — appended to every SEO_TEXT) ----------
const CLOSING_SECTION = {
  en: {
    heading: "What gets checked before anything ships",
    body: `The part that's hard to advertise and easy to verify. Every language version is opened and read rather than assumed to work because the first one did. Layouts are checked in each script the site actually carries, on mobile conditions rather than on a fast connection at a desk. Structured data is validated against what the page actually says instead of being copied from a template. Every claim on the page is one that can be checked, because a claim that can't be is a liability the first time someone tries.

None of that is remarkable individually. What makes the difference is that it's done every time rather than when there's room in the schedule.`,
  },
  pl: {
    heading: "Co jest sprawdzane, zanim cokolwiek zostanie oddane",
    body: `Część trudna do reklamowania i łatwa do zweryfikowania. Każda wersja językowa jest otwierana i czytana, a nie uznawana za działającą dlatego, że pierwsza działała. Układy sprawdzane są w każdym piśmie, które strona faktycznie niesie, w warunkach mobilnych, a nie na szybkim łączu przy biurku. Dane strukturalne są walidowane względem tego, co strona rzeczywiście mówi, zamiast być kopiowane z szablonu. Każde twierdzenie na stronie jest takie, które da się sprawdzić — bo twierdzenie, którego się nie da, staje się problemem przy pierwszej próbie.

Nic z tego nie jest z osobna nadzwyczajne. Różnicę robi to, że dzieje się za każdym razem, a nie wtedy, gdy w harmonogramie zostaje miejsce.`,
  },
  ru: {
    heading: "Что проверяется до того, как что-то сдаётся",
    body: `Та часть, которую трудно рекламировать и легко проверить. Каждая языковая версия открывается и читается, а не считается работающей потому, что работала первая. Вёрстка проверяется на каждой письменности, которую сайт реально несёт, в мобильных условиях, а не на быстром соединении за столом. Структурированные данные сверяются с тем, что страница действительно говорит, а не копируются из шаблона. Каждое утверждение на странице такое, которое можно проверить, — потому что утверждение, которое нельзя, становится проблемой при первой же попытке.

Ничто из этого по отдельности не выдающееся. Разницу делает то, что это происходит каждый раз, а не когда в графике остаётся место.`,
  },
};
function closingSectionBlocks(lang) {
  const c = CLOSING_SECTION[lang];
  const paragraphs = c.body.split("\n\n").map((p) => block([span(p.trim())]));
  return [block([span(c.heading)], "h3"), ...paragraphs];
}

// ---------- Parser for promo-page files (EN + PL + RU) ----------
function parsePromoPageFile(mdPath) {
  let raw = fs.readFileSync(mdPath, "utf8");
  // Strip stray "---" dividers that sit between locale blocks WITHIN a tag section
  // (confirmed in the Germany file's [SEO_TEXT], between EN/PL and PL/RU) — a real
  // section boundary is always followed by a "[TAG]" line, never a bare "PL:"/"RU:"
  // marker, so this heuristic only ever matches the erroneous ones.
  const lines = raw.split("\n");
  const cleaned = [];
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim() === "---") {
      let j = i + 1;
      while (j < lines.length && lines[j].trim() === "") j++;
      if (j < lines.length && /^(PL|RU):\s*$/.test(lines[j])) continue; // drop the rogue divider
    }
    cleaned.push(lines[i]);
  }
  raw = cleaned.join("\n");
  const sections = splitSections(raw);
  const slugSection = getSection(sections, "SLUG");
  const slugs = {};
  slugSection.split("\n").forEach((line) => {
    const m = line.match(/^(EN|PL|RU):\s*(.+)$/);
    if (m) slugs[m[1].toLowerCase()] = m[2].trim();
  });
  const meta = parseLocaleBlocks(getSection(sections, "META"));
  const hero = parseLocaleBlocks(getSection(sections, "HERO"));
  const pain = parseLocaleBlocks(getSection(sections, "PAIN"));
  const features = parseLocaleBlocks(getSection(sections, "FEATURES"));
  const seoText = parseLocaleBlocks(getSection(sections, "SEO_TEXT"));
  const steps = parseLocaleBlocks(getSection(sections, "STEPS"));
  const faq = parseLocaleBlocks(getSection(sections, "FAQ"));
  const out = {};
  for (const lang of LANGS) {
    out[lang] = {
      slug: slugs[lang],
      meta: parseKeyValues(meta[lang]),
      hero: parseKeyValues(hero[lang]),
      pain: parseNumberedItems(pain[lang]),
      features: parseNumberedItems(features[lang]),
      seoText: parseTitledMarkdown(seoText[lang]),
      steps: parseNumberedItems(steps[lang]),
      faq: parseNumberedItems(faq[lang]),
    };
  }
  return out;
}

// ---------- Reference IDs / URL helpers ----------
const MAIN_HUB_SLUG = { en: "services", pl: "oferty", ru: "uslugi" };
const GEO_HUB_ID = { en: "singlepage-locations", pl: "singlepage-locations.pl", ru: "singlepage-locations.ru" };
const GEO_HUB_SLUG = { en: "locations", pl: "lokalizacje", ru: "lokacii" };

const MULTILINGUAL_SLUG = { en: "multilingual-website-development", pl: "tworzenie-stron-wielojezycznych", ru: "razrabotka-multiyazychnogo-saita" };
const AI_READINESS_SLUG = { en: "ai-search-readiness", pl: "przygotowanie-strony-do-wyszukiwania-ai", ru: "podgotovka-saita-k-ii-poisku" };
const AI_BRAND_MONITORING_SLUG = { en: "ai-brand-monitoring", pl: "monitoring-marki-w-ai", ru: "monitoring-brenda-v-ii" };
const GERMANY_SLUG = { en: "seo-for-german-market", pl: "pozycjonowanie-na-rynek-niemiecki", ru: "prodvizhenie-na-nemetskiy-rynok" };
const UK_SLUG = { en: "seo-for-uk-market", pl: "pozycjonowanie-na-rynek-brytyjski", ru: "prodvizhenie-na-britanskiy-rynok" };

function prefix(lang) { return lang === "en" ? "" : `/${lang}`; }
function geoHubUrl(lang) { return `${prefix(lang)}/${MAIN_HUB_SLUG[lang]}/${GEO_HUB_SLUG[lang]}`; }
function multilingualUrl(lang) { return `${prefix(lang)}/${MULTILINGUAL_SLUG[lang]}`; }
function aiReadinessUrl(lang) { return `${prefix(lang)}/${MAIN_HUB_SLUG[lang]}/${AI_READINESS_SLUG[lang]}`; }
function aiBrandMonitoringUrl(lang) { return `${prefix(lang)}/${MAIN_HUB_SLUG[lang]}/${AI_BRAND_MONITORING_SLUG[lang]}`; }
function germanyPageUrl(lang) { return `${prefix(lang)}/${MAIN_HUB_SLUG[lang]}/${GEO_HUB_SLUG[lang]}/${GERMANY_SLUG[lang]}`; }
function ukPageUrl(lang) { return `${prefix(lang)}/${MAIN_HUB_SLUG[lang]}/${GEO_HUB_SLUG[lang]}/${UK_SLUG[lang]}`; }

// ---------- Per-page config ----------
const PAGES = [
  {
    name: "Germany",
    file: "geo-promo-germany-tagged-content.md",
    banner: "geo-promo-germany-banner.jpg",
    id: { en: "singlepage-seo-germany", pl: "singlepage-seo-germany.pl", ru: "singlepage-seo-germany.ru" },
    areaServed: ["Germany"],
    links: {
      content: [
        { anchor: { en: "Same mechanics, different language.", pl: "Ta sama mechanika, inny język.", ru: "Механика та же, язык другой." }, url: geoHubUrl },
        { anchor: { en: "the German page and the English page split the signal instead of covering two markets", pl: "niemiecka i angielska podstrona dzielą sygnał, zamiast pokrywać dwa rynki", ru: "немецкая и английская страницы делят сигнал вместо того, чтобы покрывать два рынка" }, url: multilingualUrl },
        { anchor: { en: "can be entirely absent from German AI answers", pl: "może być zupełnie nieobecna w niemieckich odpowiedziach AI", ru: "может полностью отсутствовать в немецких ИИ-ответах" }, url: aiReadinessUrl },
      ],
      faq: [],
    },
  },
  {
    name: "UK",
    file: "geo-promo-uk-tagged-content.md",
    banner: "geo-promo-uk-banner.jpg",
    id: { en: "singlepage-seo-uk", pl: "singlepage-seo-uk.pl", ru: "singlepage-seo-uk.ru" },
    areaServed: ["United Kingdom"],
    links: {
      content: [
        { anchor: { en: "Every other market on this site has an obvious obstacle.", pl: "Każdy inny rynek na tej stronie ma oczywistą przeszkodę.", ru: "У каждого другого рынка на этом сайте есть очевидное препятствие." }, url: geoHubUrl },
        { anchor: { en: "Germany needs German.", pl: "Niemcy wymagają niemieckiego.", ru: "Германии нужен немецкий." }, url: germanyPageUrl },
        { anchor: { en: "English-language assistants have more sources, more usage and more competition than any other language.", pl: "Anglojęzyczni asystenci mają więcej źródeł, więcej użycia i więcej konkurencji niż w jakimkolwiek innym języku.", ru: "У англоязычных ассистентов больше источников, больше использования и больше конкуренции, чем в любом другом языке." }, url: aiReadinessUrl },
      ],
      faq: [],
    },
  },
  {
    name: "USA",
    file: "geo-promo-usa-tagged-content.md",
    banner: "geo-promo-usa-banner.jpg",
    id: { en: "singlepage-seo-usa", pl: "singlepage-seo-usa.pl", ru: "singlepage-seo-usa.ru" },
    areaServed: ["United States"],
    links: {
      content: [
        { anchor: { en: "Every other market on this site can be entered as a whole.", pl: "Każdy inny rynek na tej stronie da się objąć w całości.", ru: "Любой другой рынок на этом сайте можно охватить целиком." }, url: geoHubUrl },
        { anchor: { en: "Britain is a country you can address.", pl: "Brytania to kraj, do którego można się zwrócić.", ru: "Британия — страна, к которой можно обратиться." }, url: ukPageUrl },
        { anchor: { en: "AI assistant answers name two or three companies, and the criteria aren't the same as search rankings.", pl: "Odpowiedzi asystentów AI wymieniają dwie albo trzy firmy, a kryteria nie są tożsame z pozycjami w wyszukiwarce.", ru: "Ответы ИИ-ассистентов называют две-три компании, и критерии не совпадают с позициями в выдаче." }, url: aiReadinessUrl },
        { anchor: { en: "It needs measuring separately — a fixed set of prompts run monthly — because it moves independently of positions and a blended number hides it.", pl: "Wymaga osobnego pomiaru — stały zestaw zapytań uruchamiany co miesiąc — bo porusza się niezależnie od pozycji, a uśredniona liczba to ukrywa.", ru: "Требует отдельного измерения — фиксированный набор запросов раз в месяц, — потому что движется независимо от позиций, а усреднённая цифра это скрывает." }, url: aiBrandMonitoringUrl },
      ],
      faq: [],
    },
  },
];

async function main() {
  const built = [];

  for (const pageCfg of PAGES) {
    const data = parsePromoPageFile(path.resolve(__dirname, "../drafts", pageCfg.file));
    const docs = [];
    for (const lang of LANGS) {
      const d = data[lang];
      let seoBlocks = [block([span(d.seoText.title)], "h2"), ...parseBodyText(d.seoText.body), ...closingSectionBlocks(lang)];
      for (const link of pageCfg.links.content) {
        seoBlocks = insertInlineLink(seoBlocks, link.anchor[lang], link.url(lang));
      }

      const faqBlockObj = buildFaqBlock(d.faq.title, d.faq.items);
      for (const link of pageCfg.links.faq) {
        insertLinkIntoFaqAnswer(faqBlockObj, link.anchor[lang], link.url(lang));
      }

      const contentBlocks = [
        buildBenefitsBlock(d.pain.title, d.pain.items),
        buildGridBlock(d.features.title, d.features.items),
        { _key: key(), _type: "textContent", content: seoBlocks, textAlign: "left" },
        buildStepsBlock(d.steps.title, d.steps.items),
        faqBlockObj,
      ];

      docs.push({
        _id: pageCfg.id[lang],
        _type: "singlepage",
        language: lang,
        pageType: "service",
        title: d.hero.headline,
        slug: { _type: "localizedSlug", [lang]: { _type: "slug", current: d.slug } },
        seo: { metaTitle: d.meta.metaTitle, metaDescription: d.meta.metaDescription },
        excerpt: d.hero.excerpt,
        allowIntroBlock: true,
        areaServed: pageCfg.areaServed,
        parentPage: { _type: "reference", _ref: GEO_HUB_ID[lang] },
        contentBlocks,
      });
      console.log(`PREPARED ${pageCfg.name} ${pageCfg.id[lang]} (${lang}) — slug=${d.slug}`);
    }
    const i18n = {
      _id: `${pageCfg.id.en}.i18n`,
      _type: "translation.metadata",
      documentId: pageCfg.id.en,
      translations: LANGS.map((lang) => ({ _key: lang, value: { _type: "reference", _ref: pageCfg.id[lang] } })),
    };
    built.push({ name: pageCfg.name, docs, i18n, bannerPath: path.resolve(__dirname, "../drafts", pageCfg.banner) });
  }

  if (process.env.DEBUG_DUMP) {
    const all = built.flatMap((p) => [...p.docs, p.i18n]);
    const target = all.find((d) => d._id === process.env.DEBUG_DUMP);
    console.log(JSON.stringify(target, null, 1));
    return;
  }

  if (!APPLY) {
    console.log(`\nDry run only — ${built.length} pages x 3 locales + i18n prepared. Re-run with --apply.`);
    return;
  }

  for (const p of built) {
    console.log(`\nUploading banner for ${p.name}...`);
    const asset = await client.assets.upload("image", fs.createReadStream(p.bannerPath), { filename: path.basename(p.bannerPath) });
    console.log(`  uploaded -> ${asset._id}`);
    for (const doc of p.docs) {
      doc.previewImage = { _type: "image", asset: { _type: "reference", _ref: asset._id }, alt: doc.title };
    }

    console.log(`Committing ${p.name} docs + i18n...`);
    let tx = client.transaction();
    for (const doc of p.docs) tx = tx.createOrReplace(doc);
    tx = tx.createOrReplace(p.i18n);
    const r = await tx.commit();
    console.log("COMMITTED:", r.results.map((rr) => rr.id).join(", "));
  }

  console.log("\nAll done.");
}

main().catch((e) => { console.error(e); process.exit(1); });
