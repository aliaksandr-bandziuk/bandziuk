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
function refArr(ids) { return ids.map((id) => ({ _key: key(), _type: "reference", _ref: id })); }

// ---------- Block builders ----------
function buildBenefitsBlock(existingKey, title, items) {
  return {
    _key: existingKey || key(),
    _type: "benefitsBlock",
    title,
    benefits: items.map((it) => ({ _key: key(), title: it.title, description: it.description })),
  };
}
function buildGridBlock(existingKey, title, items) {
  return {
    _key: existingKey || key(),
    _type: "gridBlock",
    title,
    items: items.map((it) => ({ _key: key(), title: it.title, description: it.description })),
  };
}
function buildTextContentBlock(existingKey, titleText, bodyMarkdown) {
  const blocks = [block([span(titleText)], "h2"), ...parseBodyText(bodyMarkdown)];
  return { _key: existingKey || key(), _type: "textContent", content: blocks, textAlign: "left" };
}
function buildStepsBlock(existingKey, title, items) {
  return {
    _key: existingKey || key(),
    _type: "stepsBlock",
    title,
    steps: items.map((it, i) => ({ _key: key(), stepNumber: i + 1, title: it.title, description: it.description })),
  };
}
function buildFaqBlock(existingKey, title, items) {
  return {
    _key: existingKey || key(),
    _type: "faqBlock",
    faq: {
      _type: "accordionBlock",
      title,
      items: items.map((it) => ({
        _key: key(),
        question: it.title,
        answer: [block([span(it.description)])],
      })),
    },
  };
}
function buildLandingCtaBlock(existingKey, title) {
  return { _key: existingKey || key(), _type: "landingCtaBlock", title };
}
function buildTableBlock(existingKey, columns, rows) {
  return { _key: existingKey || key(), _type: "tableBlock", columns, rows: rows.map((cells) => ({ _key: key(), cells })) };
}

// ---------- Parse a service content file into per-locale field sets ----------
function parseServiceFile(mdPath) {
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
  const cta = parseLocaleBlocks(getSection(sections, "CTA"));

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
      cta: parseKeyValues(cta[lang]),
    };
  }
  return out;
}

// ---------- Config ----------
const IMAGE_FILES = {
  audit: path.resolve(__dirname, "../drafts/AI-VISIBILITY-AUDIT.jpg"),
  correction: path.resolve(__dirname, "../drafts/CORRECTING-WRONG-INFORMATION-IN-AI-ANSWERS.jpg"),
  monitoring: path.resolve(__dirname, "../drafts/AI-BRAND-MONITORING.jpg"),
  readiness: path.resolve(__dirname, "../drafts/PREPARING-A-WEBSITE-FOR-AI-SEARCH.jpg"),
};

const HUB_IDS = {
  en: "831dc620-2863-4d55-baa0-aa874a7374ac",
  pl: "3a759a28-4135-4731-a318-cffee1b512f0",
  ru: "1c0a4ea3-2dd6-4081-a0a0-58ee87633f71",
};
const SERVICES_INDEX_IDS = {
  en: "4de72361-ec2a-469d-8b56-813ddbf3adca",
  pl: "631d883e-6f87-4346-9c6d-48b596c2daa7",
  ru: "3774c0a1-8857-4149-be24-9a357af4be00",
};
const AUTHOR = { en: "author-aliaksandr-bandziuk", pl: "author-aliaksandr-bandziuk.pl", ru: "author-aliaksandr-bandziuk.ru" };

const SERVICES = [
  { key: "audit", baseId: "service-ai-visibility-audit", mdFile: "drafts/landing-ai-visibility-audit-tagged-content.md", featureIconRef: "9983978d-e60a-4e6e-8338-1f28c3848dfe" },
  { key: "correction", baseId: "service-ai-misinformation-correction", mdFile: "drafts/service-ai-misinformation-correction-tagged-content.md", featureIconRef: "b36cc1c4-d2f0-404c-aa60-671aceb3fa9e" },
  { key: "monitoring", baseId: "service-ai-brand-monitoring", mdFile: "drafts/service-ai-brand-monitoring-tagged-content.md", featureIconRef: "3567d5b9-75a3-4c42-9986-06ae3c4d6b2e" },
  { key: "readiness", baseId: "service-ai-search-readiness", mdFile: "drafts/service-ai-search-readiness-tagged-content.md", featureIconRef: "558146a2-796e-4773-969e-860e0d9db2f0" },
];

// Child -> parent closing sentence (appended to SEO_TEXT body, then linked)
const CHILD_TO_PARENT_SENTENCE = {
  en: "This is one of four services under AI-Ready SEO & GEO, the broader work of making a business legible and accurate to AI search.",
  pl: "To jedna z czterech usług w ramach AI-Ready SEO & GEO — szerszej pracy nad tym, żeby firma była czytelna i wiarygodna dla wyszukiwania AI.",
  ru: "Это одна из четырёх услуг в рамках AI-Ready SEO & GEO — более широкой работы над тем, чтобы бизнес был понятен и точен для ИИ-поиска.",
};
const CHILD_TO_PARENT_ANCHOR = { en: "AI-Ready SEO & GEO", pl: "AI-Ready SEO & GEO", ru: "AI-Ready SEO & GEO" };

// Audit-as-prerequisite anchor per child (exact substring already in the parsed text)
const PREREQ_ANCHOR = {
  correction: { en: "the audit is where it happens", pl: "audycie", ru: "аудите" },
  monitoring: { en: "the audit repeated on a schedule", pl: "audyt powtarzany według harmonogramu", ru: "аудит, повторяемый по графику" },
  readiness: { en: "The audit tells you which of the two you have", pl: "Audyt mówi, który z dwóch problemów macie", ru: "Аудит говорит, какая из двух задач у вас" },
};

function hubUrl(lang) {
  const slugs = { en: "ai-ready-seo-and-geo-optimization", pl: "ai-seo-and-geo-optymalizacja", ru: "ai-seo-i-geo-optimizaciya" };
  const prefix = lang === "en" ? "" : `/${lang}`;
  const parentSeg = { en: "services", pl: "oferty", ru: "uslugi" }[lang];
  return `${prefix}/${parentSeg}/${slugs[lang]}`;
}
function serviceUrl(lang, slug) {
  const prefix = lang === "en" ? "" : `/${lang}`;
  const parentSeg = { en: "services", pl: "oferty", ru: "uslugi" }[lang];
  return `${prefix}/${parentSeg}/${slug}`;
}

async function main() {
  console.log(`${APPLY ? "Uploading" : "Would upload"} 5 banner images...`);
  const imageAssetIds = {};
  for (const [k, filePath] of Object.entries(IMAGE_FILES)) {
    if (APPLY) {
      const asset = await client.assets.upload("image", fs.createReadStream(filePath), { filename: path.basename(filePath) });
      imageAssetIds[k] = asset._id;
      console.log(`  ${k}: ${asset._id}`);
    } else {
      imageAssetIds[k] = `PENDING_${k}`;
      console.log(`  ${k}: ${filePath}`);
    }
  }

  // Parse all 4 service files
  const parsed = {};
  for (const svc of SERVICES) {
    parsed[svc.key] = parseServiceFile(path.resolve(__dirname, "..", svc.mdFile));
  }

  // Build slugs map for URL resolution (per key, per lang)
  const slugMap = {};
  for (const svc of SERVICES) {
    slugMap[svc.key] = {};
    for (const lang of LANGS) slugMap[svc.key][lang] = parsed[svc.key][lang].slug;
  }

  // ---------- Build the 4 child docs x 3 locales ----------
  const allDocs = [];
  const allI18n = [];

  for (const svc of SERVICES) {
    const idsByLang = {};
    for (const lang of LANGS) idsByLang[lang] = lang === "en" ? svc.baseId : `${svc.baseId}.${lang}`;

    for (const lang of LANGS) {
      const d = parsed[svc.key][lang];

      // Build SEO_TEXT content, append child->parent sentence, then link both anchors
      let seoBlocks = [block([span(d.seoText.title)], "h2"), ...parseBodyText(d.seoText.body)];
      seoBlocks.push(block([span(CHILD_TO_PARENT_SENTENCE[lang])]));
      seoBlocks = insertInlineLink(seoBlocks, CHILD_TO_PARENT_ANCHOR[lang], hubUrl(lang));

      // Audit-prerequisite link (correction/monitoring in FAQ answer; readiness in SEO_TEXT)
      let faqItems = d.faq.items;
      if (svc.key === "correction" || svc.key === "monitoring") {
        const idx = faqItems.findIndex((it) => it.description.includes(PREREQ_ANCHOR[svc.key][lang]));
        if (idx === -1) throw new Error(`${svc.key}/${lang}: prereq anchor not found in FAQ: "${PREREQ_ANCHOR[svc.key][lang]}"`);
      } else if (svc.key === "readiness") {
        seoBlocks = insertInlineLink(seoBlocks, PREREQ_ANCHOR.readiness[lang], serviceUrl(lang, slugMap.audit[lang]));
      }

      const contentBlocks = [
        buildBenefitsBlock(null, d.pain.title, d.pain.items),
        buildGridBlock(null, d.features.title, d.features.items),
        { _key: key(), _type: "textContent", content: seoBlocks, textAlign: "left" },
        buildStepsBlock(null, d.steps.title, d.steps.items),
        buildFaqBlock(null, d.faq.title, faqItems),
        buildLandingCtaBlock(null, d.cta.title),
      ];

      // FAQ prereq link applied after building (needs faqBlock's own portable text answer)
      if (svc.key === "correction" || svc.key === "monitoring") {
        const faqBlockObj = contentBlocks[4];
        const targetIdx = faqBlockObj.faq.items.findIndex((it) => {
          const text = it.answer.map((b) => b.children.map((c) => c.text).join("")).join(" ");
          return text.includes(PREREQ_ANCHOR[svc.key][lang]);
        });
        if (targetIdx === -1) throw new Error(`${svc.key}/${lang}: prereq anchor not found in built FAQ`);
        faqBlockObj.faq.items[targetIdx].answer = insertInlineLink(
          faqBlockObj.faq.items[targetIdx].answer,
          PREREQ_ANCHOR[svc.key][lang],
          serviceUrl(lang, slugMap.audit[lang])
        );
      }

      const doc = {
        _id: idsByLang[lang],
        _type: "singlepage",
        language: lang,
        pageType: "service",
        title: d.hero.headline,
        slug: { _type: "localizedSlug", [lang]: { _type: "slug", current: d.slug } },
        seo: { metaTitle: d.meta.metaTitle, metaDescription: d.meta.metaDescription },
        excerpt: d.hero.excerpt,
        allowIntroBlock: true,
        previewImage: { _type: "image", alt: d.meta.metaTitle, asset: { _type: "reference", _ref: imageAssetIds[svc.key] } },
        parentPage: { _type: "reference", _ref: SERVICES_INDEX_IDS[lang] },
        contentBlocks,
      };
      allDocs.push(doc);
      console.log(`PREPARED ${idsByLang[lang]} (${lang}) — slug=${d.slug}`);
    }

    allI18n.push({
      _id: `${svc.baseId}.i18n`,
      _type: "translation.metadata",
      documentId: idsByLang.en,
      translations: LANGS.map((lang) => ({ _key: lang, value: { _type: "reference", _ref: idsByLang[lang] } })),
    });
  }

  fs.writeFileSync(path.join(__dirname, "..", ".aeo-slugmap.json"), JSON.stringify(slugMap, null, 1));

  if (process.env.DEBUG_DUMP) {
    const target = allDocs.find((d) => d._id === process.env.DEBUG_DUMP);
    console.log(JSON.stringify(target, null, 1));
    return;
  }

  if (!APPLY) {
    console.log(`\nDry run only — ${allDocs.length} child docs + ${allI18n.length} i18n docs prepared. Re-run with --apply.`);
    console.log("Slug map:", JSON.stringify(slugMap, null, 1));
    return;
  }

  console.log("\nCommitting transaction: child docs + i18n docs...");
  let tx = client.transaction();
  for (const doc of allDocs) tx = tx.createOrReplace(doc);
  for (const doc of allI18n) tx = tx.createOrReplace(doc);
  const result = await tx.commit();
  console.log("COMMITTED. IDs:", result.results.map((r) => r.id).join(", "));
}

main().catch((e) => { console.error(e); process.exit(1); });
