const path = require("path");
const { createClient } = require("@sanity/client");
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

const LINKS = [
  // No PL entries: web-development-cyprus has no PL translation, and cross-locale links are forbidden.
  { doc: "singlepage-real-estate-agency-website", question: "Will the site bring clients from search?", matchText: "Cyprus VIP Estates, 1500+ organic visitors.", href: "/web-development-cyprus" },
  { doc: "singlepage-real-estate-agency-website.ru", question: "Будет ли сайт приводить клиентов из поиска?", matchText: "Cyprus VIP Estates — 1500+ посетителей из органики.", href: "/ru/sozdanie-saitov-na-kipre" },
  { doc: "singlepage-property-developer-website", question: "Do you work with international developers?", matchText: "I built a multilingual real estate catalog site for the Cyprus agency Cyprus VIP Estates.", href: "/web-development-cyprus" },
  { doc: "singlepage-property-developer-website.ru", question: "Работаете ли вы с зарубежными застройщиками?", matchText: "я построил мультиязычный каталожный сайт недвижимости для кипрского агентства Cyprus VIP Estates.", href: "/ru/sozdanie-saitov-na-kipre" },
];

function textOf(arr) { return (arr || []).filter(b => b._type === "block").map(b => (b.children || []).map(c => c.text).join("")).join(""); }

async function main() {
  for (const link of LINKS) {
    const doc = await client.fetch(`*[_id == $id][0]{_id, contentBlocks}`, { id: link.doc });
    if (!doc) { console.log("NOT FOUND", link.doc); continue; }
    const faqIdx = doc.contentBlocks.findIndex(b => b._type === "faqBlock");
    const items = doc.contentBlocks[faqIdx].faq.items;
    const itemIdx = items.findIndex(it => it.question === link.question);
    if (itemIdx === -1) { console.log("Q NOT FOUND", link.doc, link.question); continue; }
    const answer = items[itemIdx].answer;
    if (!textOf(answer).includes(link.matchText)) { console.log("MATCH NOT FOUND", link.doc, "|", link.matchText); continue; }
    try {
      const newAnswer = insertInlineLink(answer, link.matchText, link.href);
      doc.contentBlocks[faqIdx].faq.items[itemIdx] = { ...items[itemIdx], answer: newAnswer };
      console.log(`${APPLY ? "APPLYING" : "WOULD APPLY"} ${link.doc} -> ${link.href}`);
      if (APPLY) { await client.patch(link.doc).set({ contentBlocks: doc.contentBlocks }).commit(); console.log("  PATCHED"); }
    } catch (err) { console.log("FAIL", link.doc, err.message); }
  }
}
main().catch(e => { console.error(e); process.exit(1); });
