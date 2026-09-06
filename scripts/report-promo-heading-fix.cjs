// Report-only: computes before/after for the H1/metaTitle/3-subheading fix on the 10
// promotion pages, per the "name the object: websites" instruction. No writes here.
const path = require("path");
const { createClient } = require("@sanity/client");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local") });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const PAGES = ["germany", "uk", "usa", "netherlands", "ireland", "france", "italy", "baltics", "australia", "switzerland"];

function transformEnTitle(s) {
  // "SEO and AI Search for the X Market" / "SEO and AI search for the x market" -> prepend "Website "
  if (!/^SEO and AI (Search|search) for the .+ (Market|market)/.test(s)) return null;
  return `Website ${s}`;
}
function transformEnMetaTitle(s) {
  const m = s.match(/^(SEO and AI Search for the .+ Markets?) \| Bandziuk$/);
  if (!m) return null;
  return `Website ${m[1]} | Bandziuk`;
}
function transformEnFeatures(s) {
  const m = s.match(/^What promoting to (the .+ markets?) involves$/);
  if (!m) return null;
  return `What website SEO for ${m[1]} involves`;
}
function transformEnSteps(s) {
  const m = s.match(/^How work on (the .+ markets?) starts$/);
  if (!m) return null;
  return `How website SEO work on ${m[1]} starts`;
}
function transformEnFaq(s) {
  const m = s.match(/^Frequently asked questions about promoting to (the .+ markets?)$/);
  if (!m) return null;
  return `Frequently asked questions about website SEO for ${m[1]}`;
}

function transformPlTitle(s) {
  const m = s.match(/^Pozycjonowanie (na .+)$/);
  if (!m) return null;
  return `Pozycjonowanie stron internetowych ${m[1]}`;
}
function transformPlMetaTitle(s) {
  const m = s.match(/^Pozycjonowanie (na .+) \| Bandziuk$/);
  if (!m) return null;
  return `Pozycjonowanie stron internetowych ${m[1]} | Bandziuk`;
}
function transformPlFeatures(s) {
  const m = s.match(/^Co obejmuje pozycjonowanie (na .+)$/);
  if (!m) return null;
  return `Co obejmuje pozycjonowanie stron internetowych ${m[1]}`;
}
function transformPlSteps(s, metaTitle) {
  // rebuilt from the metaTitle's "na ..." tail (accusative), not derived from the STEPS line itself
  const m = metaTitle.match(/^Pozycjonowanie (na .+) \| Bandziuk$/);
  if (!m) return null;
  if (!/^Jak zaczyna się praca nad rynk/.test(s)) return { mismatch: true };
  return `Jak zaczyna się pozycjonowanie stron ${m[1]}`;
}
function transformPlFaq(s) {
  const m = s.match(/^Najczęstsze pytania o pozycjonowanie (na .+)$/);
  if (!m) return null;
  return `Najczęstsze pytania o pozycjonowanie stron internetowych ${m[1]}`;
}

function transformRuTitle(s) {
  const m = s.match(/^Продвижение (на .+)$/);
  if (!m) return null;
  return `SEO-продвижение сайта ${m[1]}`;
}
function transformRuMetaTitle(s) {
  const m = s.match(/^Продвижение (на .+) \| Bandziuk$/);
  if (!m) return null;
  return `SEO-продвижение сайта ${m[1]} | Bandziuk`;
}
function transformRuFeatures(s) {
  const m = s.match(/^Что входит в продвижение (на .+)$/);
  if (!m) return null;
  return `Что входит в SEO-продвижение сайта ${m[1]}`;
}
function transformRuSteps(s, metaTitle) {
  // "под X рынок" built from the metaTitle's "на X рынок" tail with "на" swapped for "под" — not
  // derived from the STEPS line's own instrumental case ("над ... рынком").
  const m = metaTitle.match(/^Продвижение на (.+) \| Bandziuk$/);
  if (!m) return null;
  if (!/^Как начинается работа над/.test(s)) return { mismatch: true };
  return `Как начинается раскрутка сайта под ${m[1]}`;
}
function transformRuFaq(s) {
  const m = s.match(/^Частые вопросы о продвижении (на .+)$/);
  if (!m) return null;
  return `Частые вопросы о SEO-продвижении сайта ${m[1]}`;
}

async function main() {
  const report = [];
  for (const p of PAGES) {
    const pageReport = { page: p, locales: {} };
    for (const [suffix, lang] of [["", "en"], [".pl", "pl"], [".ru", "ru"]]) {
      const id = `singlepage-seo-${p}${suffix}`;
      const doc = await client.fetch(
        `*[_id==$id][0]{_id, title, "metaTitle": seo.metaTitle, contentBlocks[]{_type, title, "faqTitle": faq.title}}`,
        { id }
      );
      if (!doc) { pageReport.locales[lang] = { error: "MISSING DOC" }; continue; }
      const grid = doc.contentBlocks.find((b) => b._type === "gridBlock");
      const steps = doc.contentBlocks.find((b) => b._type === "stepsBlock");
      const faq = doc.contentBlocks.find((b) => b._type === "faqBlock");

      const fields = {};
      if (lang === "en") {
        fields.title = { before: doc.title, after: transformEnTitle(doc.title) };
        fields.metaTitle = { before: doc.metaTitle, after: transformEnMetaTitle(doc.metaTitle) };
        fields.features = { before: grid.title, after: transformEnFeatures(grid.title) };
        fields.steps = { before: steps.title, after: transformEnSteps(steps.title) };
        fields.faq = { before: faq.faqTitle, after: transformEnFaq(faq.faqTitle) };
      } else if (lang === "pl") {
        fields.title = { before: doc.title, after: transformPlTitle(doc.title) };
        fields.metaTitle = { before: doc.metaTitle, after: transformPlMetaTitle(doc.metaTitle) };
        fields.features = { before: grid.title, after: transformPlFeatures(grid.title) };
        fields.steps = { before: steps.title, after: transformPlSteps(steps.title, doc.metaTitle) };
        fields.faq = { before: faq.faqTitle, after: transformPlFaq(faq.faqTitle) };
      } else {
        fields.title = { before: doc.title, after: transformRuTitle(doc.title) };
        fields.metaTitle = { before: doc.metaTitle, after: transformRuMetaTitle(doc.metaTitle) };
        fields.features = { before: grid.title, after: transformRuFeatures(grid.title) };
        fields.steps = { before: steps.title, after: transformRuSteps(steps.title, doc.metaTitle) };
        fields.faq = { before: faq.faqTitle, after: transformRuFaq(faq.faqTitle) };
      }
      pageReport.locales[lang] = fields;
    }
    report.push(pageReport);
  }

  // Print + flag anomalies
  let anomalies = 0;
  for (const pr of report) {
    console.log(`\n\n########## ${pr.page.toUpperCase()} ##########`);
    for (const lang of ["en", "pl", "ru"]) {
      const f = pr.locales[lang];
      console.log(`\n--- ${lang} ---`);
      if (f.error) { console.log("  ERROR:", f.error); anomalies++; continue; }
      for (const [key, v] of Object.entries(f)) {
        if (v.after === null || (v.after && v.after.mismatch)) {
          console.log(`  [ANOMALY] ${key}: "${v.before}" did not match expected pattern`);
          anomalies++;
        } else {
          console.log(`  ${key}:`);
          console.log(`    before: ${v.before}`);
          console.log(`    after:  ${v.after}`);
        }
      }
    }
  }
  console.log(`\n\nTotal anomalies: ${anomalies}`);

  require("fs").writeFileSync(
    "C:/Users/HP/AppData/Local/Temp/claude/d--applications-bandziuk/f00995b0-3431-4d8b-be5b-dd648c3f8b85/scratchpad/promo-heading-fix-report.json",
    JSON.stringify(report, null, 2)
  );
}

main().catch((e) => { console.error(e); process.exit(1); });
