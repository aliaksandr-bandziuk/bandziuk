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
  // garage-and-auto-repair-website -> blog-auto-repair-website-cost (FAQ answer)
  { doc: "61a47860-d61d-499c-8606-1831231b222e", block: "faq", question: "How much does garage website design and development cost?", matchText: "The cost depends on the number of services, complexity of booking systems, integrations and structural requirements.", href: "/blog/auto-repair-shop-website-cost" },
  { doc: "f62631da-bb64-44fb-8a41-6f2ee35d13c5", block: "faq", question: "Ile kosztuje strona internetowa dla warsztatu samochodowego?", matchText: "Koszt zależy od zakresu projektu: liczby podstron, systemu rezerwacji, dodatkowych funkcjonalności oraz stopnia rozbudowania oferty.", href: "/pl/blog/ile-kosztuje-strona-dla-warsztatu-samochodowego" },
  { doc: "d0a6b052-1ea6-41ba-9e6f-4bb873946e29", block: "faq", question: "Сколько стоит создание сайта для автосервиса?", matchText: "Стоимость создания сайта для автосервиса зависит от задач бизнеса и функционала.", href: "/ru/blog/skolko-stoit-sait-dlya-avtoservisa" },
  // blog-auto-repair-website-cost -> garage-and-auto-repair-website (textContent)
  { doc: "blog-auto-repair-website-cost", block: "textContent", matchText: "I combine development and SEO, so the service structure, local optimisation and technical base are designed together.", href: "/garage-and-auto-repair-website" },
  { doc: "blog-auto-repair-website-cost.pl", block: "textContent", matchText: "Łączę tworzenie stron z SEO, więc struktura usług, optymalizacja lokalna i baza techniczna projektowane są razem.", href: "/pl/tworzenie-stron-dla-warsztatow-samochodowych" },
  { doc: "blog-auto-repair-website-cost.ru", block: "textContent", matchText: "Я совмещаю разработку и SEO, поэтому структура услуг, локальная оптимизация и техническая база проектируются вместе.", href: "/ru/sozdanie-saita-dlya-avtoservisa" },
];

function textOf(arr) { return (arr || []).filter(b => b._type === "block").map(b => (b.children || []).map(c => c.text).join("")).join(""); }

async function main() {
  for (const link of LINKS) {
    const doc = await client.fetch(`*[_id == $id][0]{_id, contentBlocks}`, { id: link.doc });
    if (!doc) { console.log("NOT FOUND", link.doc); continue; }

    if (link.block === "faq") {
      const faqIdx = doc.contentBlocks.findIndex(b => b._type === "faqBlock");
      const items = doc.contentBlocks[faqIdx].faq.items;
      const itemIdx = items.findIndex(it => it.question === link.question);
      if (itemIdx === -1) { console.log("FAQ Q NOT FOUND", link.doc, link.question); continue; }
      const answer = items[itemIdx].answer;
      if (!textOf(answer).includes(link.matchText)) { console.log("MATCH NOT FOUND (faq)", link.doc); continue; }
      try {
        const newAnswer = insertInlineLink(answer, link.matchText, link.href);
        doc.contentBlocks[faqIdx].faq.items[itemIdx] = { ...items[itemIdx], answer: newAnswer };
        console.log(`${APPLY ? "APPLYING" : "WOULD APPLY"} ${link.doc} [faq] -> ${link.href}`);
        if (APPLY) { await client.patch(link.doc).set({ contentBlocks: doc.contentBlocks }).commit(); console.log("  PATCHED"); }
      } catch (err) { console.log("FAIL", link.doc, err.message); }
    } else {
      const tcIdx = doc.contentBlocks.findIndex(b => b._type === "textContent" && textOf(b.content).includes(link.matchText));
      if (tcIdx === -1) { console.log("MATCH NOT FOUND (textContent)", link.doc); continue; }
      try {
        const newContent = insertInlineLink(doc.contentBlocks[tcIdx].content, link.matchText, link.href);
        doc.contentBlocks[tcIdx] = { ...doc.contentBlocks[tcIdx], content: newContent };
        console.log(`${APPLY ? "APPLYING" : "WOULD APPLY"} ${link.doc} [textContent] -> ${link.href}`);
        if (APPLY) { await client.patch(link.doc).set({ contentBlocks: doc.contentBlocks }).commit(); console.log("  PATCHED"); }
      } catch (err) { console.log("FAIL", link.doc, err.message); }
    }
  }
}
main().catch(e => { console.error(e); process.exit(1); });
