// Restores textContent (and faqBlock where also lost) on the 4 AEO service
// documents that were edited by someone else in Sanity Studio after creation,
// then removes the manual landingCtaBlock — matching what was already applied
// to the other 8. Rebuilds using the exact same logic as the original
// create-aeo-services.cjs (same parser, same link insertions), inserted into
// the CURRENT live contentBlocks so the surviving blocks (benefitsBlock,
// gridBlock, stepsBlock) are left untouched.
const fs = require("fs");
const path = require("path");
const { createClient } = require("@sanity/client");
const { splitSections, parseLocaleBlocks, getSection, parseTitledMarkdown, parseBodyText } = require("./lib/tagged-content-parser.cjs");
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

const slugMap = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../.aeo-slugmap.json"), "utf8"));
function hubUrl(lang) {
  const slugs = { en: "ai-ready-seo-and-geo-optimization", pl: "ai-seo-and-geo-optymalizacja", ru: "ai-seo-i-geo-optimizaciya" };
  const prefix = lang === "en" ? "" : `/${lang}`;
  const parentSeg = { en: "services", pl: "oferty", ru: "uslugi" }[lang];
  return `${prefix}/${parentSeg}/${slugs[lang]}`;
}
function serviceUrl(lang, svcKey) {
  const prefix = lang === "en" ? "" : `/${lang}`;
  const parentSeg = { en: "services", pl: "oferty", ru: "uslugi" }[lang];
  return `${prefix}/${parentSeg}/${slugMap[svcKey][lang]}`;
}

const CHILD_TO_PARENT_SENTENCE = {
  en: "This is one of four services under AI-Ready SEO & GEO, the broader work of making a business legible and accurate to AI search.",
  pl: "To jedna z czterech usług w ramach AI-Ready SEO & GEO — szerszej pracy nad tym, żeby firma była czytelna i wiarygodna dla wyszukiwania AI.",
  ru: "Это одна из четырёх услуг в рамках AI-Ready SEO & GEO — более широкой работы над тем, чтобы бизнес был понятен и точен для ИИ-поиска.",
};
const CHILD_TO_PARENT_ANCHOR = { en: "AI-Ready SEO & GEO", pl: "AI-Ready SEO & GEO", ru: "AI-Ready SEO & GEO" };
const PREREQ_ANCHOR = {
  correction: { en: "the audit is where it happens", pl: "audycie", ru: "аудите" },
  monitoring: { en: "the audit repeated on a schedule", pl: "audyt powtarzany według harmonogramu", ru: "аудит, повторяемый по графику" },
};

function parseServiceFileLocale(mdPath, lang) {
  const raw = fs.readFileSync(mdPath, "utf8");
  const sections = splitSections(raw);
  const seoText = parseLocaleBlocks(getSection(sections, "SEO_TEXT"))[lang];
  const faq = parseLocaleBlocks(getSection(sections, "FAQ"))[lang];
  const { parseNumberedItems } = require("./lib/tagged-content-parser.cjs");
  return { seoText: parseTitledMarkdown(seoText), faq: parseNumberedItems(faq) };
}

// [svcKey, baseId (locale-specific), lang, mdFile, needsFaqRestore]
const TARGETS = [
  { svcKey: "audit", id: "service-ai-visibility-audit", lang: "en", mdFile: "drafts/landing-ai-visibility-audit-tagged-content.md", needsFaqRestore: false },
  { svcKey: "correction", id: "service-ai-misinformation-correction", lang: "en", mdFile: "drafts/service-ai-misinformation-correction-tagged-content.md", needsFaqRestore: true },
  { svcKey: "monitoring", id: "service-ai-brand-monitoring", lang: "en", mdFile: "drafts/service-ai-brand-monitoring-tagged-content.md", needsFaqRestore: true },
  { svcKey: "monitoring", id: "service-ai-brand-monitoring.pl", lang: "pl", mdFile: "drafts/service-ai-brand-monitoring-tagged-content.md", needsFaqRestore: true },
];

async function main() {
  for (const t of TARGETS) {
    const doc = await client.fetch(`*[_id == $id][0]{contentBlocks}`, { id: t.id });
    const currentTypes = doc.contentBlocks.map((b) => b._type);
    console.log(`\n${t.id} — current: ${JSON.stringify(currentTypes)}`);

    const parsed = parseServiceFileLocale(path.resolve(__dirname, "..", t.mdFile), t.lang);

    // Rebuild textContent (SEO_TEXT + child->parent sentence + links)
    let seoBlocks = [block([span(parsed.seoText.title)], "h2"), ...parseBodyText(parsed.seoText.body)];
    seoBlocks.push(block([span(CHILD_TO_PARENT_SENTENCE[t.lang])]));
    seoBlocks = insertInlineLink(seoBlocks, CHILD_TO_PARENT_ANCHOR[t.lang], hubUrl(t.lang));
    const textContentBlock = { _key: key(), _type: "textContent", content: seoBlocks, textAlign: "left" };

    // Rebuild faqBlock if needed, with the audit-prerequisite link
    let faqBlockObj = null;
    if (t.needsFaqRestore) {
      faqBlockObj = {
        _key: key(),
        _type: "faqBlock",
        faq: {
          _type: "accordionBlock",
          title: parsed.faq.title,
          items: parsed.faq.items.map((it) => ({ _key: key(), question: it.title, answer: [block([span(it.description)])] })),
        },
      };
      const anchor = PREREQ_ANCHOR[t.svcKey][t.lang];
      const idx = faqBlockObj.faq.items.findIndex((it) => {
        const text = it.answer.map((b) => b.children.map((c) => c.text).join("")).join(" ");
        return text.includes(anchor);
      });
      if (idx === -1) throw new Error(`${t.id}: prereq anchor "${anchor}" not found in rebuilt FAQ`);
      faqBlockObj.faq.items[idx].answer = insertInlineLink(faqBlockObj.faq.items[idx].answer, anchor, serviceUrl(t.lang, "audit"));
    }

    // Splice into current blocks: textContent after gridBlock (before stepsBlock);
    // faqBlock (if rebuilt) before landingCtaBlock; then drop landingCtaBlock.
    const blocks = doc.contentBlocks.map((b) => ({ ...b }));
    const stepsIdx = blocks.findIndex((b) => b._type === "stepsBlock");
    if (stepsIdx === -1) throw new Error(`${t.id}: stepsBlock not found, can't position textContent`);
    blocks.splice(stepsIdx, 0, textContentBlock);

    if (faqBlockObj) {
      const ctaIdx = blocks.findIndex((b) => b._type === "landingCtaBlock");
      if (ctaIdx === -1) throw new Error(`${t.id}: landingCtaBlock not found, can't position rebuilt faqBlock`);
      blocks.splice(ctaIdx, 0, faqBlockObj);
    }

    const finalBlocks = blocks.filter((b) => b._type !== "landingCtaBlock");
    console.log(`  restored -> ${JSON.stringify(finalBlocks.map((b) => b._type))}`);

    if (APPLY) {
      await client.patch(t.id).set({ contentBlocks: finalBlocks }).commit();
      console.log(`  PATCHED ${t.id}`);
    }
  }
}
main().catch((e) => { console.error(e); process.exit(1); });
