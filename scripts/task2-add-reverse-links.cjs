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

const GEO_IDS = {
  en: "831dc620-2863-4d55-baa0-aa874a7374ac",
  pl: "3a759a28-4135-4731-a318-cffee1b512f0",
  ru: "1c0a4ea3-2dd6-4081-a0a0-58ee87633f71",
};

const LINKS = {
  en: [
    { matchText: "whether you were named, what was claimed, whether it's accurate", href: "/blog/how-to-check-what-ai-says-about-your-company" },
    { matchText: "Third-party listings corrected where they accept requests", href: "/blog/how-to-correct-wrong-information-in-chatgpt" },
    { matchText: "stops your capabilities being attributed to a similarly named competitor", href: "/blog/when-ai-attributes-your-features-to-a-competitor" },
    { matchText: "The prompt set re-run monthly, the citation report in Bing Webmaster Tools", href: "/blog/how-to-monitor-brand-mentions-in-ai-answers" },
  ],
  pl: [
    { matchText: "czy Was wymieniono, co twierdzono, czy to prawda", href: "/pl/blog/co-asystenci-ai-mowia-o-twojej-firmie" },
    { matchText: "Wpisy zewnętrzne skorygowane tam, gdzie przyjmują zgłoszenia", href: "/pl/blog/jak-poprawic-bledne-dane-o-firmie-w-chatgpt" },
    { matchText: "powstrzymuje przypisywanie Waszych możliwości podobnie nazwanemu konkurentowi", href: "/pl/blog/ai-przypisuje-wasze-funkcje-konkurentowi" },
    { matchText: "Zestaw zapytań uruchamiany co miesiąc, raport cytowań w Bing Webmaster Tools", href: "/pl/blog/monitoring-wzmianek-o-marce-w-odpowiedziach-ai" },
  ],
  ru: [
    { matchText: "назвали ли вас, что утверждали, верно ли это", href: "/ru/blog/chto-ii-assistenty-govoryat-o-vashey-kompanii" },
    { matchText: "Сторонние карточки скорректированы там, где принимают запросы", href: "/ru/blog/kak-ispravit-nevernye-dannye-o-kompanii-v-chatgpt" },
    { matchText: "не даёт приписать ваши возможности похоже названному конкуренту", href: "/ru/blog/ii-pripisyvaet-vashi-funkcii-konkurentu" },
    { matchText: "Набор запросов, прогоняемый ежемесячно, отчёт по цитированиям в Bing Webmaster Tools", href: "/ru/blog/monitoring-upominaniy-brenda-v-ii-otvetah" },
  ],
};

async function main() {
  for (const [lang, docId] of Object.entries(GEO_IDS)) {
    const doc = await client.fetch(`*[_id == $id][0]{contentBlocks}`, { id: docId });
    const mainBlockIdx = doc.contentBlocks.findIndex((b) => b._type === "textContent" && b.content.some((c) => c.style === "h3" && c.children.some((s) => /don't promise|nie obiecuję|не обещаю/.test(s.text))));
    if (mainBlockIdx === -1) throw new Error(`${lang}: MAIN block not found`);
    const mainBlock = doc.contentBlocks[mainBlockIdx];

    let content = mainBlock.content;
    for (const { matchText, href } of LINKS[lang]) {
      content = insertInlineLink(content, matchText, href);
    }
    console.log(`${lang}: applied ${LINKS[lang].length} links to block[${mainBlockIdx}] (${mainBlock._key})`);

    if (APPLY) {
      const newBlocks = [...doc.contentBlocks];
      newBlocks[mainBlockIdx] = { ...mainBlock, content };
      await client.patch(docId).set({ contentBlocks: newBlocks }).commit();
      console.log(`  COMMITTED ${docId}`);
    }
  }
  if (!APPLY) console.log("\nDry run only — re-run with --apply.");
}

main().catch((e) => { console.error(e); process.exit(1); });
