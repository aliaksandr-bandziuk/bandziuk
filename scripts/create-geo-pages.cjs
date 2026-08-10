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

// ---------- Parsers ----------
function parseGeoHubFile(mdPath) {
  const raw = fs.readFileSync(mdPath, "utf8");
  const sections = splitSections(raw);
  const slugSection = getSection(sections, "SLUG");
  const slugs = {};
  slugSection.split("\n").forEach((line) => {
    const m = line.match(/^(EN|PL|RU):\s*(.+)$/);
    if (m) slugs[m[1].toLowerCase()] = m[2].trim();
  });
  const meta = parseLocaleBlocks(getSection(sections, "META"));
  const hero = parseLocaleBlocks(getSection(sections, "HERO"));
  const main = parseLocaleBlocks(getSection(sections, "MAIN"));
  const out = {};
  for (const lang of ["en", "pl", "ru"]) {
    out[lang] = {
      slug: slugs[lang],
      meta: parseKeyValues(meta[lang]),
      hero: parseKeyValues(hero[lang]),
      main: parseTitledMarkdown(main[lang]),
    };
  }
  return out;
}

function parseUaeFile(mdPath) {
  const raw = fs.readFileSync(mdPath, "utf8");
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
  for (const lang of ["en", "ru"]) {
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
const MAIN_HUB_ID = { en: "4de72361-ec2a-469d-8b56-813ddbf3adca", pl: "631d883e-6f87-4346-9c6d-48b596c2daa7", ru: "3774c0a1-8857-4149-be24-9a357af4be00" };
const MAIN_HUB_SLUG = { en: "services", pl: "oferty", ru: "uslugi" };
const BY_LOCATION_BLOCK_KEY = { en: "7d380d65427b", pl: "cf064f40ec23", ru: "9d24db26f996" };

const GEO_HUB_ID = { en: "singlepage-locations", pl: "singlepage-locations.pl", ru: "singlepage-locations.ru" };
const GEO_HUB_SLUG = { en: "locations", pl: "lokalizacje", ru: "lokacii" };

const UAE_ID = { en: "singlepage-uae", ru: "singlepage-uae.ru" };

const MULTILINGUAL_SLUG = { en: "multilingual-website-development", pl: "tworzenie-stron-wielojezycznych", ru: "razrabotka-multiyazychnogo-saita" };
const AI_READINESS_SLUG = { en: "ai-search-readiness", pl: "przygotowanie-strony-do-wyszukiwania-ai", ru: "podgotovka-saita-k-ii-poisku" };
const CYPRUS_CASE_SLUG = { en: "build-and-optimize-a-multilingual-real-estate-platform", ru: "razrabotka-saita-dlya-agentstva-elitnoi-nedvizhimosti-na-kipre" };

function prefix(lang) { return lang === "en" ? "" : `/${lang}`; }
function mainHubUrl(lang) { return `${prefix(lang)}/${MAIN_HUB_SLUG[lang]}`; }
function geoHubUrl(lang) { return `${prefix(lang)}/${MAIN_HUB_SLUG[lang]}/${GEO_HUB_SLUG[lang]}`; }
function multilingualUrl(lang) { return `${prefix(lang)}/${MULTILINGUAL_SLUG[lang]}`; }
function aiReadinessUrl(lang) { return `${prefix(lang)}/${MAIN_HUB_SLUG[lang]}/${AI_READINESS_SLUG[lang]}`; }
function cyprusCaseUrl(lang) { return `${prefix(lang)}/portfolio/${CYPRUS_CASE_SLUG[lang]}`; }

// ---------- Link anchors (verbatim substrings confirmed against the source files) ----------
const HUB_LINK_ANCHOR = { en: "the services themselves", pl: "same usługi", ru: "самих услуг" };
const GEO_HUB_ANCHOR = { en: "local search dominates", ru: "доминирует локальный поиск" };
const CYPRUS_CASE_ANCHOR = { en: "a property catalogue running in four languages", ru: "каталог недвижимости на четырёх языках" };
const MULTILINGUAL_ANCHOR = { en: "a multi-page multilingual site", ru: "многостраничный мультиязычный" };
const AI_READINESS_ANCHOR = { en: "survive being summarised by an AI assistant", ru: "пережить пересказ ИИ-ассистентом" };

async function main() {
  const geoData = parseGeoHubFile(path.resolve(__dirname, "../drafts/geo-hub-tagged-content.md"));
  const uaeData = parseUaeFile(path.resolve(__dirname, "../drafts/geo-uae-tagged-content.md"));

  // ---------- Build geo hub docs (3 locales) ----------
  const geoDocs = [];
  for (const lang of ["en", "pl", "ru"]) {
    const d = geoData[lang];
    let mainBlocks = [block([span(d.main.title)], "h2"), ...parseBodyText(d.main.body)];
    mainBlocks = insertInlineLink(mainBlocks, HUB_LINK_ANCHOR[lang], mainHubUrl(lang));

    geoDocs.push({
      _id: GEO_HUB_ID[lang],
      _type: "singlepage",
      language: lang,
      pageType: "servicesIndex",
      title: d.hero.headline,
      slug: { _type: "localizedSlug", [lang]: { _type: "slug", current: d.slug } },
      seo: { metaTitle: d.meta.metaTitle, metaDescription: d.meta.metaDescription },
      excerpt: d.hero.excerpt,
      allowIntroBlock: true,
      parentPage: { _type: "reference", _ref: MAIN_HUB_ID[lang] },
      contentBlocks: [{ _key: key(), _type: "textContent", content: mainBlocks, textAlign: "left" }],
    });
    console.log(`PREPARED geo hub ${GEO_HUB_ID[lang]} (${lang}) — slug=${d.slug}`);
  }
  const geoI18n = {
    _id: "singlepage-locations.i18n",
    _type: "translation.metadata",
    documentId: GEO_HUB_ID.en,
    translations: ["en", "pl", "ru"].map((lang) => ({ _key: lang, value: { _type: "reference", _ref: GEO_HUB_ID[lang] } })),
  };

  // ---------- Build UAE docs (2 locales: en, ru — no pl) ----------
  const uaeDocs = [];
  for (const lang of ["en", "ru"]) {
    const d = uaeData[lang];
    let seoBlocks = [block([span(d.seoText.title)], "h2"), ...parseBodyText(d.seoText.body)];
    seoBlocks = insertInlineLink(seoBlocks, GEO_HUB_ANCHOR[lang], geoHubUrl(lang));
    seoBlocks = insertInlineLink(seoBlocks, CYPRUS_CASE_ANCHOR[lang], cyprusCaseUrl(lang));

    const faqBlockObj = buildFaqBlock(d.faq.title, d.faq.items);
    insertLinkIntoFaqAnswer(faqBlockObj, MULTILINGUAL_ANCHOR[lang], multilingualUrl(lang));
    insertLinkIntoFaqAnswer(faqBlockObj, AI_READINESS_ANCHOR[lang], aiReadinessUrl(lang));

    const contentBlocks = [
      buildBenefitsBlock(d.pain.title, d.pain.items),
      buildGridBlock(d.features.title, d.features.items),
      { _key: key(), _type: "textContent", content: seoBlocks, textAlign: "left" },
      buildStepsBlock(d.steps.title, d.steps.items),
      faqBlockObj,
    ];

    uaeDocs.push({
      _id: UAE_ID[lang],
      _type: "singlepage",
      language: lang,
      pageType: "service",
      title: d.hero.headline,
      slug: { _type: "localizedSlug", [lang]: { _type: "slug", current: d.slug } },
      seo: { metaTitle: d.meta.metaTitle, metaDescription: d.meta.metaDescription },
      excerpt: d.hero.excerpt,
      allowIntroBlock: true,
      areaServed: ["United Arab Emirates"],
      parentPage: { _type: "reference", _ref: GEO_HUB_ID[lang] },
      contentBlocks,
    });
    console.log(`PREPARED UAE ${UAE_ID[lang]} (${lang}) — slug=${d.slug}`);
  }
  const uaeI18n = {
    _id: "singlepage-uae.i18n",
    _type: "translation.metadata",
    documentId: UAE_ID.en,
    translations: ["en", "ru"].map((lang) => ({ _key: lang, value: { _type: "reference", _ref: UAE_ID[lang] } })),
  };

  if (process.env.DEBUG_DUMP) {
    const all = [...geoDocs, geoI18n, ...uaeDocs, uaeI18n];
    const target = all.find((d) => d._id === process.env.DEBUG_DUMP);
    console.log(JSON.stringify(target, null, 1));
    return;
  }

  if (!APPLY) {
    console.log(`\nDry run only — ${geoDocs.length} geo hub docs + 1 i18n, ${uaeDocs.length} UAE docs + 1 i18n prepared. Re-run with --apply.`);
    return;
  }

  console.log("\nStep 1/3: committing geo hub docs + i18n...");
  let tx1 = client.transaction();
  for (const doc of geoDocs) tx1 = tx1.createOrReplace(doc);
  tx1 = tx1.createOrReplace(geoI18n);
  const r1 = await tx1.commit();
  console.log("COMMITTED:", r1.results.map((r) => r.id).join(", "));

  console.log("\nStep 2/3: committing UAE docs + i18n...");
  let tx2 = client.transaction();
  for (const doc of uaeDocs) tx2 = tx2.createOrReplace(doc);
  tx2 = tx2.createOrReplace(uaeI18n);
  const r2 = await tx2.commit();
  console.log("COMMITTED:", r2.results.map((r) => r.id).join(", "));

  console.log("\nStep 3/3: adding geo hub to 'By location' curated group on the main hub (3 locales)...");
  for (const lang of ["en", "pl", "ru"]) {
    await client
      .patch(MAIN_HUB_ID[lang])
      .insert("after", `contentBlocks[_key=="${BY_LOCATION_BLOCK_KEY[lang]}"].items[-1]`, [
        { _key: key(), _type: "reference", _ref: GEO_HUB_ID[lang] },
      ])
      .commit();
    console.log(`  ${lang}: patched ${MAIN_HUB_ID[lang]}`);
  }

  console.log("\nAll done.");
}

main().catch((e) => { console.error(e); process.exit(1); });
