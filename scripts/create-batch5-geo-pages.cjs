// Batch 5 of the geo country pages: Baltics, Australia (EN + PL + RU — promotion pages).
// Last batch of the 16 — Switzerland remains separately blocked on its missing banner.
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
  const lines = raw.split("\n");
  const cleaned = [];
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim() === "---") {
      let j = i + 1;
      while (j < lines.length && lines[j].trim() === "") j++;
      if (j < lines.length && /^(PL|RU):\s*$/.test(lines[j])) continue;
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

const AI_READINESS_SLUG = { en: "ai-search-readiness", pl: "przygotowanie-strony-do-wyszukiwania-ai", ru: "podgotovka-saita-k-ii-poisku" };
const GERMANY_SLUG = { en: "seo-for-german-market", pl: "pozycjonowanie-na-rynek-niemiecki", ru: "prodvizhenie-na-nemetskiy-rynok" };
const UK_SLUG = { en: "seo-for-uk-market", pl: "pozycjonowanie-na-rynek-brytyjski", ru: "prodvizhenie-na-britanskiy-rynok" };
const USA_SLUG = { en: "seo-for-us-market", pl: "pozycjonowanie-na-rynek-amerykanski", ru: "prodvizhenie-na-amerikanskiy-rynok" };

function prefix(lang) { return lang === "en" ? "" : `/${lang}`; }
function geoHubUrl(lang) { return `${prefix(lang)}/${MAIN_HUB_SLUG[lang]}/${GEO_HUB_SLUG[lang]}`; }
function aiReadinessUrl(lang) { return `${prefix(lang)}/${MAIN_HUB_SLUG[lang]}/${AI_READINESS_SLUG[lang]}`; }
function germanyPageUrl(lang) { return `${prefix(lang)}/${MAIN_HUB_SLUG[lang]}/${GEO_HUB_SLUG[lang]}/${GERMANY_SLUG[lang]}`; }
function ukPageUrl(lang) { return `${prefix(lang)}/${MAIN_HUB_SLUG[lang]}/${GEO_HUB_SLUG[lang]}/${UK_SLUG[lang]}`; }
function usaPageUrl(lang) { return `${prefix(lang)}/${MAIN_HUB_SLUG[lang]}/${GEO_HUB_SLUG[lang]}/${USA_SLUG[lang]}`; }

// ---------- Per-page config ----------
const PAGES = [
  {
    name: "Baltics",
    file: "geo-promo-baltics-tagged-content.md",
    banner: "geo-promo-baltics-banner.jpg",
    id: { en: "singlepage-seo-baltics", pl: "singlepage-seo-baltics.pl", ru: "singlepage-seo-baltics.ru" },
    areaServed: ["Lithuania", "Latvia", "Estonia"],
    links: {
      content: [
        { anchor: { en: "Germany", pl: "Niemczech", ru: "Германии" }, url: germanyPageUrl },
        { anchor: { en: "elsewhere on this site", pl: "gdzie indziej na tej witrynie", ru: "в другом месте этого сайта" }, url: geoHubUrl },
        { anchor: { en: "The Lithuanian-, Latvian- and Estonian-language source pools are very small compared with the major European languages", pl: "Litewsko-, łotewsko- i estońskojęzyczne pule źródeł są bardzo małe w porównaniu z dużymi językami europejskimi", ru: "Литовско-, латышско- и эстонскоязычные базы источников очень малы по сравнению с крупными европейскими языками" }, url: aiReadinessUrl },
      ],
      faq: [],
    },
  },
  {
    name: "Australia",
    file: "geo-promo-australia-tagged-content.md",
    banner: "geo-promo-australia-banner.jpg",
    id: { en: "singlepage-seo-australia", pl: "singlepage-seo-australia.pl", ru: "singlepage-seo-australia.ru" },
    areaServed: ["Australia"],
    links: {
      content: [
        { anchor: { en: "In the United States the country is too fragmented to target nationally, and narrowing is compulsory.", pl: "W Stanach Zjednoczonych kraj jest zbyt rozdrobniony, by celować ogólnokrajowo, a zawężanie jest obowiązkowe.", ru: "В США страна слишком раздроблена, чтобы целиться общенационально, и сужение обязательно." }, url: usaPageUrl },
        { anchor: { en: "That's the same situation as Britain, and the same conclusion applies", pl: "Sytuacja jest ta sama co w Brytanii i wniosek ten sam", ru: "Ситуация та же, что в Британии, и вывод тот же" }, url: ukPageUrl },
        { anchor: { en: "works from a much narrower set of sources than a general English query does", pl: "pracuje ze znacznie węższym zbiorem źródeł niż ogólne zapytanie angielskie", ru: "работает с существенно более узким набором источников, чем общий английский запрос" }, url: aiReadinessUrl },
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
