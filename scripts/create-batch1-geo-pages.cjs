// Batch 1 of the geo country pages: UAE, Montenegro, Georgia (EN + RU, no PL — dev pages).
// Pattern follows scripts/create-geo-pages.cjs (which built the geo hub + UAE previously).
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

// ---------- Standard closing section (verbatim, EN/RU — appended to every SEO_TEXT) ----------
const CLOSING_SECTION = {
  en: {
    heading: "What gets checked before anything ships",
    body: `The part that's hard to advertise and easy to verify. Every language version is opened and read rather than assumed to work because the first one did. Layouts are checked in each script the site actually carries, on mobile conditions rather than on a fast connection at a desk. Structured data is validated against what the page actually says instead of being copied from a template. Every claim on the page is one that can be checked, because a claim that can't be is a liability the first time someone tries.

None of that is remarkable individually. What makes the difference is that it's done every time rather than when there's room in the schedule.`,
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

// ---------- Parser for dev-page files (EN + RU only) ----------
function parseDevPageFile(mdPath) {
  let raw = fs.readFileSync(mdPath, "utf8");
  // Strip stray "PL: <note>" author-comment lines (e.g. "PL: — не делается, см. заголовок файла").
  // A real locale marker is "PL:" alone on its own line; anything with trailing text after the
  // colon is a note, not content, and would otherwise get swept into the EN locale's body text
  // by parseLocaleBlocks (which only breaks on an exact "^(EN|PL|RU):\s*$" marker).
  raw = raw.split("\n").filter((line) => !/^PL:\s+\S/.test(line)).join("\n");
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
const MAIN_HUB_SLUG = { en: "services", ru: "uslugi" };
const GEO_HUB_ID = { en: "singlepage-locations", ru: "singlepage-locations.ru" };
const GEO_HUB_SLUG = { en: "locations", ru: "lokacii" };

const MULTILINGUAL_SLUG = { en: "multilingual-website-development", ru: "razrabotka-multiyazychnogo-saita" };
const AI_READINESS_SLUG = { en: "ai-search-readiness", ru: "podgotovka-saita-k-ii-poisku" };
const CYPRUS_CASE_SLUG = { en: "build-and-optimize-a-multilingual-real-estate-platform", ru: "razrabotka-saita-dlya-agentstva-elitnoi-nedvizhimosti-na-kipre" };
const COST_ARTICLE_SLUG = { en: "multilingual-website-cost", ru: "skolko-stoit-multiyazychnyi-sait" };
const CHATGPT_ARTICLE_SLUG = { en: "how-clients-find-you-through-chatgpt", ru: "kak-klienty-nahodyat-cherez-chatgpt" };

function prefix(lang) { return lang === "en" ? "" : `/${lang}`; }
function geoHubUrl(lang) { return `${prefix(lang)}/${MAIN_HUB_SLUG[lang]}/${GEO_HUB_SLUG[lang]}`; }
function multilingualUrl(lang) { return `${prefix(lang)}/${MULTILINGUAL_SLUG[lang]}`; }
function aiReadinessUrl(lang) { return `${prefix(lang)}/${MAIN_HUB_SLUG[lang]}/${AI_READINESS_SLUG[lang]}`; }
function cyprusCaseUrl(lang) { return `${prefix(lang)}/portfolio/${CYPRUS_CASE_SLUG[lang]}`; }
function costArticleUrl(lang) { return `${prefix(lang)}/blog/${COST_ARTICLE_SLUG[lang]}`; }
function chatgptArticleUrl(lang) { return `${prefix(lang)}/blog/${CHATGPT_ARTICLE_SLUG[lang]}`; }

// ---------- Per-page config ----------
const PAGES = [
  {
    name: "UAE",
    file: "geo-uae-tagged-content.md",
    banner: "geo-uae-banner.jpg",
    id: { en: "singlepage-uae", ru: "singlepage-uae.ru" },
    areaServed: ["United Arab Emirates"],
    links: {
      content: [
        { anchor: { en: "local search dominates", ru: "доминирует локальный поиск" }, url: geoHubUrl },
        { anchor: { en: "a property catalogue running in four languages", ru: "каталог недвижимости на четырёх языках" }, url: cyprusCaseUrl },
      ],
      faq: [
        { anchor: { en: "a multi-page multilingual site", ru: "многостраничный мультиязычный" }, url: multilingualUrl },
        { anchor: { en: "survive being summarised by an AI assistant", ru: "пережить пересказ ИИ-ассистентом" }, url: aiReadinessUrl },
        { anchor: { en: "the figure depending on languages and scope", ru: "сумма зависит от языков и объёма" }, url: costArticleUrl },
      ],
    },
  },
  {
    name: "Montenegro",
    file: "geo-montenegro-tagged-content.md",
    banner: "geo-montenegro-banner.jpg",
    id: { en: "singlepage-montenegro", ru: "singlepage-montenegro.ru" },
    areaServed: ["Montenegro"],
    links: {
      content: [
        { anchor: { en: "A property catalogue I built for that behaviour", ru: "Каталог недвижимости, который я строил под такое поведение" }, url: cyprusCaseUrl },
        { anchor: { en: "increasingly they start by asking an AI assistant rather than a search engine", ru: "всё чаще начинает с вопроса ИИ-ассистенту, а не с поисковой строки" }, url: aiReadinessUrl },
      ],
      faq: [
        { anchor: { en: "a multi-page multilingual site", ru: "многостраничный мультиязычный" }, url: multilingualUrl },
      ],
    },
  },
  {
    name: "Georgia",
    file: "geo-georgia-tagged-content.md",
    banner: "geo-georgia-banner.jpg",
    id: { en: "singlepage-georgia", ru: "singlepage-georgia.ru" },
    areaServed: ["Georgia"],
    links: {
      content: [
        { anchor: { en: "most others I work with", ru: "большинства, с которыми я работаю" }, url: geoHubUrl },
        { anchor: { en: "what an AI assistant says when asked about you", ru: "что скажет о вас ИИ-ассистент" }, url: aiReadinessUrl },
        { anchor: { en: "a client in Milan found it through an AI assistant rather than a search engine", ru: "клиент из Милана нашёл его через ИИ-ассистента, а не через поисковую систему" }, url: chatgptArticleUrl },
      ],
      faq: [
        { anchor: { en: "a multi-page multilingual site", ru: "многостраничный мультиязычный" }, url: multilingualUrl },
      ],
    },
  },
];

async function main() {
  const built = []; // { name, docs: [enDoc, ruDoc], i18n, bannerPath }

  for (const pageCfg of PAGES) {
    const data = parseDevPageFile(path.resolve(__dirname, "../drafts", pageCfg.file));
    const docs = [];
    for (const lang of ["en", "ru"]) {
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
      translations: ["en", "ru"].map((lang) => ({ _key: lang, value: { _type: "reference", _ref: pageCfg.id[lang] } })),
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
    console.log(`\nDry run only — ${built.length} pages x 2 locales + i18n prepared. Re-run with --apply.`);
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
