// scripts/create-service-page.cjs
//
// Создаёт страницу услуги в трёх локалях плюс документ переводов. Контент
// передаётся файлом из drafts/. Основание для каждой страницы — аудит услуг
// drafts/services-audit-2026-09.md.
//
//   node scripts/create-service-page.cjs drafts/page-<имя>.json          → сухой прогон
//   node scripts/create-service-page.cjs drafts/page-<имя>.json --apply  → создаёт
//
// Порядок и форма документов — как в scripts/PAGE_CREATION.md: у каждой локали
// только её собственный slug, документ переводов создаётся последним.
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { createClient } = require("@sanity/client");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local") });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const APPLY = process.argv.includes("--apply");
const DATA_FILE = process.argv.find((a) => a.endsWith(".json"));
if (!DATA_FILE) { console.error("Укажите файл контента: node scripts/create-service-page.cjs drafts/page-<имя>.json [--apply]"); process.exit(1); }
const DATA = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), DATA_FILE), "utf8"));
const LANGS = ["en", "pl", "ru"];
const key = () => crypto.randomBytes(6).toString("hex");
const span = (text) => ({ _key: key(), _type: "span", text, marks: [] });
const block = (text, style = "normal") => ({ _key: key(), _type: "block", style, markDefs: [], children: [span(text)] });

function counting(metric) {
  if (!metric) return undefined;
  const m = metric.match(/^(\d+)(.*)$/);
  return m ? { _type: "counting", conuntNumber: Number(m[1]), sign: m[2] || "" } : undefined;
}

function buildDoc(lang) {
  const d = DATA.locales[lang];
  const contentBlocks = [
    {
      _key: key(),
      _type: "benefitsBlock",
      title: d.pain.title,
      benefits: d.pain.items.map((it) => {
        const c = counting(it.metric);
        return { _key: key(), title: it.title, description: it.description, ...(c ? { counting: c } : {}) };
      }),
    },
    {
      _key: key(),
      _type: "gridBlock",
      title: d.features.title,
      items: d.features.items.map((it) => ({ _key: key(), title: it.title, description: it.description })),
    },
    {
      _key: key(),
      _type: "textContent",
      textAlign: "left",
      content: d.text.sections.flatMap((s) => [block(s.h2, "h2"), ...s.body.split("\n\n").map((p) => block(p))]),
    },
    {
      _key: key(),
      _type: "stepsBlock",
      title: d.steps.title,
      steps: d.steps.items.map((it, i) => ({ _key: key(), stepNumber: i + 1, title: it.title, description: it.description })),
    },
    {
      _key: key(),
      _type: "faqBlock",
      faq: {
        _type: "accordionBlock",
        title: d.faq.title,
        items: d.faq.items.map((it) => ({ _key: key(), question: it.q, answer: [block(it.a)] })),
      },
    },
  ];

  return {
    _id: lang === "en" ? DATA.baseId : `${DATA.baseId}.${lang}`,
    _type: "singlepage",
    language: lang,
    pageType: DATA.pageType,
    // Без этого флага [...slug] не рендерит шапку, а значит и H1 страницы.
    allowIntroBlock: true,
    title: d.title,
    excerpt: d.excerpt,
    // Только собственный slug локали — иначе плагин переводов ругается.
    slug: { _type: "localizedSlug", [lang]: { _type: "slug", current: d.slug } },
    seo: { metaTitle: d.metaTitle, metaDescription: d.metaDescription },
    parentPage: { _type: "reference", _ref: DATA.parent[lang] },
    contentBlocks,
  };
}

async function main() {
  const docs = LANGS.map(buildDoc);

  for (const doc of docs) {
    if (!doc.seo.metaTitle || !doc.seo.metaDescription) throw new Error(`${doc._id}: пустой title или description`);
    if (doc.seo.metaTitle.length > 60) console.log(`! ${doc.language}: meta title ${doc.seo.metaTitle.length} знаков`);
    if (doc.seo.metaDescription.length > 160) console.log(`! ${doc.language}: meta description ${doc.seo.metaDescription.length} знаков`);
    const parent = await client.getDocument(doc.parentPage._ref);
    if (!parent) throw new Error(`${doc._id}: не найден родитель ${doc.parentPage._ref}`);
    const existing = await client.fetch(`*[_type=="singlepage" && language==$lang && slug[$lang].current==$slug][0]._id`, { lang: doc.language, slug: DATA.locales[doc.language].slug });
    if (existing && existing !== doc._id) throw new Error(`${doc.language}: адрес ${DATA.locales[doc.language].slug} уже занят документом ${existing}`);
  }

  const i18n = {
    _id: `${DATA.baseId}.i18n`,
    _type: "translation.metadata",
    schemaTypes: ["singlepage"],
    translations: LANGS.map((lang) => ({
      _key: lang,
      _type: "internationalizedArrayReferenceValue",
      value: { _type: "reference", _ref: lang === "en" ? DATA.baseId : `${DATA.baseId}.${lang}` },
    })),
  };

  for (const doc of docs) {
    const d = DATA.locales[doc.language];
    const url = doc.language === "en" ? `/services/${d.slug}` : `/${doc.language}/${doc.language === "pl" ? "oferty" : "uslugi"}/${d.slug}`;
    console.log(`\n${"=".repeat(72)}\n[${doc.language}] ${url}   (${doc._id})`);
    console.log(`  H1: ${doc.title}`);
    console.log(`  title: ${doc.seo.metaTitle} (${doc.seo.metaTitle.length})`);
    console.log(`  description: ${doc.seo.metaDescription.length} знаков`);
    console.log(`  блоки: ${doc.contentBlocks.map((b) => b._type).join(", ")}`);
    console.log(`  H2 в тексте: ${doc.contentBlocks.find((b) => b._type === "textContent").content.filter((c) => c.style === "h2").map((c) => c.children[0].text).join(" | ")}`);
    console.log(`  вопросов в FAQ: ${doc.contentBlocks.find((b) => b._type === "faqBlock").faq.items.length}`);
  }

  if (!APPLY) { console.log("\nСухой прогон: ничего не создано. Запустите с --apply."); return; }

  let tx = client.transaction();
  for (const doc of docs) tx = tx.createOrReplace(doc);
  tx = tx.createOrReplace(i18n);
  await tx.commit();

  for (const doc of docs) {
    const saved = await client.getDocument(doc._id);
    if (!saved) throw new Error(`не создан ${doc._id}`);
  }
  const savedI18n = await client.getDocument(i18n._id);
  console.log(`\nсоздано: ${docs.length} документа + переводы (${savedI18n ? "ок" : "НЕТ"})`);
}

main().catch((e) => { console.error("failed:", e.message); process.exit(1); });
