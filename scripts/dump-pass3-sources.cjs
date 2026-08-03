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

const SOURCES = [
  "blog-beauty-salon-website-cost",
  "blog-legal-seo-cost",
  "blog-agency-website-cost",
  "blog-developer-website-cost",
  "blog-psychologist-website-cost",
  "blog-auto-repair-website-cost",
  "blog-construction-website-cost",
  "blog-multilingual-website-cost",
  "blog-seo-cost",
  "blog-website-no-leads",
  "blog-slow-website",
  "blog-not-showing-in-google",
  "blog-how-to-choose-developer",
  "blog-freelancer-vs-agency",
  "blog-platform-choice",
  "blog-builder-vs-custom",
  "blog-website-build-timeline",
  "blog-found-via-chatgpt",
  "blog-psychologist-website-checklist",
  "blog-real-estate-agency-checklist",
];

function dumpBlocks(contentBlocks) {
  const out = [];
  (contentBlocks || []).forEach((b, i) => {
    if (b._type === "textContent") {
      const text = (b.content || []).filter(x => x._type === "block").map(x => (x.children || []).map(c => c.text).join("")).join(" | ");
      out.push(`textContent[${i}]: ${text}`);
    }
    if (b._type === "faqBlock") {
      (b.faq?.items || []).forEach((item, j) => {
        const q = item.question;
        const a = (item.answer || []).filter(x => x._type === "block").map(x => (x.children || []).map(c => c.text).join("")).join(" ");
        out.push(`faqBlock.items[${j}] Q: ${q}`);
        out.push(`faqBlock.items[${j}] A: ${a}`);
      });
    }
    if (b._type === "accordionBlock") {
      (b.items || []).forEach((item, j) => {
        const title = item.title;
        const content = (item.content || []).filter(x => x._type === "block").map(x => (x.children || []).map(c => c.text).join("")).join(" ");
        out.push(`accordionBlock.items[${j}] title: ${title}`);
        out.push(`accordionBlock.items[${j}] content: ${content}`);
      });
    }
    if (b._type === "doubleTextBlock") {
      for (const side of ["leftContent", "rightContent"]) {
        const c = b[side]?.blockContent?.content;
        if (!c) continue;
        const text = c.filter(x => x._type === "block").map(x => (x.children || []).map(cc => cc.text).join("")).join(" | ");
        out.push(`doubleTextBlock[${i}].${side}: ${text}`);
      }
    }
  });
  return out.join("\n");
}

(async () => {
  for (const base of SOURCES) {
    for (const [suffix, lang] of [["", "en"], [".pl", "pl"], [".ru", "ru"]]) {
      const id = base + suffix;
      const doc = await client.fetch(`*[_id == $id][0]{_id, contentBlocks}`, { id });
      console.log(`\n\n========== ${id} (${lang}) ==========`);
      if (!doc) { console.log("NOT FOUND"); continue; }
      console.log(dumpBlocks(doc.contentBlocks));
    }
  }
})();
