// scripts/apply-batchD-links.cjs
// Batch D: landings -> portfolio cases (Felgilab, Cyprus VIP Estates) + existing
// real-estate-agency/property-developer pages -> catalog-website (via FAQ answers, since
// those two pages have no textContent block at all).
const path = require("path");
const { createClient } = require("@sanity/client");
const { insertInlineLink, replaceText } = require("./lib/portable-text-links.cjs");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local") });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const APPLY = process.argv.includes("--apply");

const HREF = {
  felgilab: { en: "/portfolio/felgilab-wordpress-rebuild", pl: "/pl/portfolio/przebudowa-strony-felgilab-wordpress", ru: "/ru/portfolio/pererabotka-saita-felgilab-wordpress" },
  cyprusVipEstates: { en: "/portfolio/build-and-optimize-a-multilingual-real-estate-platform", pl: "/pl/portfolio/rozwoj-wielojezycznej-platformy-nieruchomosci-premium", ru: "/ru/portfolio/razrabotka-saita-dlya-agentstva-elitnoi-nedvizhimosti-na-kipre" },
  catalog: { en: "/catalog-website-with-filters", pl: "/pl/strona-katalogowa-z-filtrami", ru: "/ru/sait-katalog-s-filtrami" },
};

// --- textContent-based edits (the 20 landings) ---
const TEXTCONTENT_PLAN = [
  // Warsaw -> Felgilab (natural, existing phrase)
  { id: "singlepage-web-development-warsaw", replacements: [], links: [{ matchText: "A Warsaw wheel restoration workshop I rebuilt", href: HREF.felgilab.en }] },
  { id: "singlepage-web-development-warsaw.pl", replacements: [], links: [{ matchText: "Warszawski warsztat renowacji felg, który przebudowałem", href: HREF.felgilab.pl }] },
  { id: "singlepage-web-development-warsaw.ru", replacements: [], links: [{ matchText: "Варшавская мастерская реставрации дисков, которую я пересобрал", href: HREF.felgilab.ru }] },

  // platform-migration -> Felgilab (natural, existing phrase)
  { id: "singlepage-platform-migration", replacements: [], links: [{ matchText: "I moved a Warsaw workshop", href: HREF.felgilab.en }] },
  { id: "singlepage-platform-migration.pl", replacements: [], links: [{ matchText: "Przeniosłem warszawski warsztat", href: HREF.felgilab.pl }] },
  { id: "singlepage-platform-migration.ru", replacements: [], links: [{ matchText: "Я перенёс варшавскую мастерскую", href: HREF.felgilab.ru }] },

  // cleaning -> Felgilab (natural, existing "parameter-based calculators" claim)
  { id: "singlepage-cleaning-company", replacements: [], links: [{ matchText: "I've built parameter-based calculators of exactly this kind", href: HREF.felgilab.en }] },
  { id: "singlepage-cleaning-company.pl", replacements: [], links: [{ matchText: "Budowałem kalkulatory oparte na parametrach dokładnie tego rodzaju", href: HREF.felgilab.pl }] },
  { id: "singlepage-cleaning-company.ru", replacements: [], links: [{ matchText: "Калькуляторы на параметрах именно такого рода я делал", href: HREF.felgilab.ru }] },

  // logistics -> Felgilab (natural, existing "status checking" claim)
  { id: "singlepage-logistics-company", replacements: [], links: [{ matchText: "I've implemented order status checking by phone number for a client", href: HREF.felgilab.en }] },
  { id: "singlepage-logistics-company.pl", replacements: [], links: [{ matchText: "wdrażałem sprawdzanie statusu zlecenia po numerze telefonu u klienta", href: HREF.felgilab.pl }] },
  { id: "singlepage-logistics-company.ru", replacements: [], links: [{ matchText: "я внедрял проверку статуса заказа по номеру телефона клиенту", href: HREF.felgilab.ru }] },

  // online-booking -> Felgilab (natural, "workshops" already present in the enumeration from Batch A)
  { id: "singlepage-online-booking", replacements: [], links: [{ matchText: "workshops", href: HREF.felgilab.en }] },
  { id: "singlepage-online-booking.pl", replacements: [], links: [{ matchText: "warsztaty", href: HREF.felgilab.pl }] },
  { id: "singlepage-online-booking.ru", replacements: [], links: [{ matchText: "мастерские", href: HREF.felgilab.ru }] },

  // multilingual -> Cyprus VIP Estates (natural, existing phrase)
  { id: "singlepage-multilingual-website", replacements: [], links: [{ matchText: "A real estate catalogue I built", href: HREF.cyprusVipEstates.en }] },
  { id: "singlepage-multilingual-website.pl", replacements: [], links: [{ matchText: "Katalog nieruchomości, który zbudowałem, działa w czterech językach", href: HREF.cyprusVipEstates.pl }] },
  { id: "singlepage-multilingual-website.ru", replacements: [], links: [{ matchText: "Каталог недвижимости, который я построил, работает на четырёх языках", href: HREF.cyprusVipEstates.ru }] },

  // catalog -> Cyprus VIP Estates (natural, existing phrase, different sentence than the property-developer/manufacturing links)
  { id: "singlepage-catalog-website", replacements: [], links: [{ matchText: "A real estate catalogue I built runs in four languages", href: HREF.cyprusVipEstates.en }] },
  { id: "singlepage-catalog-website.pl", replacements: [], links: [{ matchText: "Katalog nieruchomości, który zbudowałem, działa w czterech językach i przynosi ponad 1500 wizyt z organiku miesięcznie", href: HREF.cyprusVipEstates.pl }] },
  { id: "singlepage-catalog-website.ru", replacements: [], links: [{ matchText: "Каталог недвижимости, который я построил, работает на четырёх языках и приносит больше 1500 органических визитов в месяц", href: HREF.cyprusVipEstates.ru }] },

  // travel-agency -> Cyprus VIP Estates (bridge)
  { id: "singlepage-travel-agency", replacements: [{ old: "It's also increasingly what AI assistants draw on when someone asks for advice on a destination.", new: "It's also increasingly what AI assistants draw on when someone asks for advice on a destination. A multilingual real estate platform I built works the same way — the content earns visitors, not ads." }], links: [{ matchText: "A multilingual real estate platform I built", href: HREF.cyprusVipEstates.en }] },
  { id: "singlepage-travel-agency.pl", replacements: [{ old: "To także coraz częściej materiał, z którego korzystają asystenci AI, gdy ktoś pyta o radę w sprawie kierunku.", new: "To także coraz częściej materiał, z którego korzystają asystenci AI, gdy ktoś pyta o radę w sprawie kierunku. Wielojęzyczna platforma nieruchomości, którą zbudowałem, działa tak samo — treść przyciąga odwiedzających, nie reklamy." }], links: [{ matchText: "Wielojęzyczna platforma nieruchomości, którą zbudowałem", href: HREF.cyprusVipEstates.pl }] },
  { id: "singlepage-travel-agency.ru", replacements: [{ old: "Это же всё чаще материал, на который опираются ИИ-ассистенты, когда у них спрашивают совета о направлении.", new: "Это же всё чаще материал, на который опираются ИИ-ассистенты, когда у них спрашивают совета о направлении. Мультиязычная платформа недвижимости, которую я построил, работает так же — контент приводит посетителей, а не реклама." }], links: [{ matchText: "Мультиязычная платформа недвижимости, которую я построил", href: HREF.cyprusVipEstates.ru }] },

  // hotel -> Cyprus VIP Estates (bridge)
  { id: "singlepage-hotel-website", replacements: [{ old: "while the images stayed exactly as they were.", new: "while the images stayed exactly as they were. I've built exactly that kind of multilingual, image-heavy site for a real estate client whose buyers come from more than twenty countries." }], links: [{ matchText: "a real estate client whose buyers come from more than twenty countries", href: HREF.cyprusVipEstates.en }] },
  { id: "singlepage-hotel-website.pl", replacements: [{ old: "a zdjęcia zostały dokładnie takie, jakie były.", new: "a zdjęcia zostały dokładnie takie, jakie były. Budowałem dokładnie taką wielojęzyczną, pełną zdjęć stronę dla klienta z branży nieruchomości, którego klienci przyjeżdżają z ponad dwudziestu krajów." }], links: [{ matchText: "klienta z branży nieruchomości, którego klienci przyjeżdżają z ponad dwudziestu krajów", href: HREF.cyprusVipEstates.pl }] },
  { id: "singlepage-hotel-website.ru", replacements: [{ old: "а снимки остались ровно такими, какими были.", new: "а снимки остались ровно такими, какими были. Именно такой мультиязычный, насыщенный фотографиями сайт я строил для клиента в сфере недвижимости, чьи покупатели приезжают более чем из двадцати стран." }], links: [{ matchText: "клиента в сфере недвижимости, чьи покупатели приезжают более чем из двадцати стран", href: HREF.cyprusVipEstates.ru }] },
];

// --- faqBlock-based edits (the 2 existing pages with no textContent block) ---
const FAQ_PLAN = [
  { id: "singlepage-property-developer-website", qIndex: 1, matchText: "catalog-based sites", href: HREF.catalog.en },
  { id: "singlepage-property-developer-website.pl", qIndex: 1, matchText: "strony katalogowe", href: HREF.catalog.pl },
  { id: "singlepage-property-developer-website.ru", qIndex: 1, matchText: "каталожные сайты", href: HREF.catalog.ru },

  { id: "singlepage-real-estate-agency-website", qIndex: 0, matchText: "filter complexity", href: HREF.catalog.en },
  { id: "singlepage-real-estate-agency-website.pl", qIndex: 0, matchText: "złożoność filtrów", href: HREF.catalog.pl },
  { id: "singlepage-real-estate-agency-website.ru", qIndex: 0, matchText: "сложность фильтров", href: HREF.catalog.ru },
];

async function main() {
  const tcIds = [...new Set(TEXTCONTENT_PLAN.map((e) => e.id))];
  const faqIds = [...new Set(FAQ_PLAN.map((e) => e.id))];
  const allIds = [...new Set([...tcIds, ...faqIds])];

  const docs = await client.fetch(`*[_id in $ids]{ _id, contentBlocks }`, { ids: allIds });
  const docMap = Object.fromEntries(docs.map((d) => [d._id, d]));
  const missing = allIds.filter((id) => !docMap[id]);
  if (missing.length) {
    console.log("Aborting — missing docs:", missing.join(", "));
    process.exit(1);
  }

  const working = Object.fromEntries(allIds.map((id) => [id, JSON.parse(JSON.stringify(docMap[id].contentBlocks))]));
  const results = [];

  for (const entry of TEXTCONTENT_PLAN) {
    const blocks = working[entry.id];
    const tcIndices = blocks.map((b, i) => (b._type === "textContent" ? i : -1)).filter((i) => i !== -1);
    try {
      const needle = entry.replacements[0]?.old ?? entry.links[0]?.matchText;
      const targetIndex = tcIndices.find((i) =>
        blocks[i].content.some((block) => (block.children || []).map((c) => c.text || "").join("").includes(needle))
      );
      if (targetIndex === undefined) throw new Error(`no textContent block contains: "${needle}"`);
      let content = blocks[targetIndex].content;
      for (const r of entry.replacements) content = replaceText(content, r.old, r.new);
      for (const l of entry.links) content = insertInlineLink(content, l.matchText, l.href);
      blocks[targetIndex] = { ...blocks[targetIndex], content };
      results.push({ kind: "text", id: entry.id, ok: true });
    } catch (err) {
      results.push({ kind: "text", id: entry.id, ok: false, error: err.message });
    }
  }

  for (const entry of FAQ_PLAN) {
    const blocks = working[entry.id];
    const faqIndex = blocks.findIndex((b) => b._type === "faqBlock");
    try {
      if (faqIndex === -1) throw new Error("no faqBlock");
      const answer = blocks[faqIndex].faq.items[entry.qIndex].answer;
      const newAnswer = insertInlineLink(answer, entry.matchText, entry.href);
      const newItems = [...blocks[faqIndex].faq.items];
      newItems[entry.qIndex] = { ...newItems[entry.qIndex], answer: newAnswer };
      blocks[faqIndex] = { ...blocks[faqIndex], faq: { ...blocks[faqIndex].faq, items: newItems } };
      results.push({ kind: "faq", id: entry.id, ok: true });
    } catch (err) {
      results.push({ kind: "faq", id: entry.id, ok: false, error: err.message });
    }
  }

  console.log("=== VALIDATION ===");
  let okCount = 0;
  const failed = [];
  for (const r of results) {
    if (r.ok) okCount++;
    else { failed.push(r); console.log(`FAIL [${r.kind}] ${r.id} -- ${r.error}`); }
  }
  console.log(`${okCount}/${results.length} edits validated OK.`);

  if (failed.length) {
    console.log(`\n${failed.length} edit(s) failed. Aborting — nothing was patched.`);
    process.exit(1);
  }

  if (!APPLY) {
    console.log("\nAll transformations validated successfully. Dry run only (no --apply flag) — nothing was patched.");
    return;
  }

  console.log("\n=== PATCHING ===");
  for (const id of allIds) {
    await client.patch(id).set({ contentBlocks: working[id] }).commit();
    console.log(`Patched ${id}`);
  }
  console.log("\nDone.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
