// scripts/apply-batchA-links.cjs
// Batch A remainder: capability-page reciprocal links + service-page -> capability/hub links.
// Hub itself (relatedServicesBlock groups) was already applied via add-hub-links.cjs.
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
  multilingual: { en: "/multilingual-website-development", pl: "/pl/tworzenie-stron-wielojezycznych", ru: "/ru/razrabotka-multiyazychnogo-saita" },
  catalog: { en: "/catalog-website-with-filters", pl: "/pl/strona-katalogowa-z-filtrami", ru: "/ru/sait-katalog-s-filtrami" },
  onlineBooking: { en: "/website-with-online-booking", pl: "/pl/strona-z-rezerwacja-online", ru: "/ru/sait-s-onlain-zapisyu" },
  platformMigration: { en: "/website-platform-migration", pl: "/pl/migracja-strony-na-inna-platforme", ru: "/ru/perenos-saita-na-druguyu-platformu" },
  dental: { en: "/dental-clinic-website", pl: "/pl/strona-dla-gabinetu-stomatologicznego", ru: "/ru/sait-dlya-stomatologicheskoy-kliniki" },
  hotel: { en: "/hotel-website", pl: "/pl/strona-dla-hotelu", ru: "/ru/sait-dlya-otelya" },
  fitness: { en: "/fitness-studio-website", pl: "/pl/strona-dla-studia-fitness", ru: "/ru/sait-dlya-fitnes-studii" },
  logistics: { en: "/logistics-company-website", pl: "/pl/strona-dla-firmy-transportowej", ru: "/ru/sait-dlya-transportnoy-kompanii" },
  startup: { en: "/startup-website", pl: "/pl/strona-dla-startupu", ru: "/ru/sait-dlya-startapa" },
  manufacturing: { en: "/manufacturing-company-website", pl: "/pl/strona-dla-firmy-produkcyjnej", ru: "/ru/sait-dlya-proizvodstvennoy-kompanii" },
  propertyDeveloper: { en: "/property-developer-website", pl: "/pl/strona-dla-dewelopera", ru: "/ru/sait-dlya-zastroishchika" },
  hub: { en: "/services", pl: "/pl/oferty", ru: "/ru/uslugi" },
};

// Each entry: docId -> { replacements: [{old,new}], links: [{matchText, href}] } per lang, applied to the doc's textContent block.
const PLAN = [
  {
    label: "online-booking -> dental, hotel, fitness",
    docs: {
      en: {
        id: "singlepage-online-booking",
        replacements: [{ old: "Clinics, studios, workshops, consultants", new: "Clinics, hotels, studios, workshops, consultants" }],
        links: [
          { matchText: "Clinics", href: HREF.dental.en },
          { matchText: "hotels", href: HREF.hotel.en },
          { matchText: "studios", href: HREF.fitness.en },
        ],
      },
      pl: {
        id: "singlepage-online-booking.pl",
        replacements: [{ old: "Gabinety, studia, warsztaty, konsultanci", new: "Gabinety, hotele, studia, warsztaty, konsultanci" }],
        links: [
          { matchText: "Gabinety", href: HREF.dental.pl },
          { matchText: "hotele", href: HREF.hotel.pl },
          { matchText: "studia", href: HREF.fitness.pl },
        ],
      },
      ru: {
        id: "singlepage-online-booking.ru",
        replacements: [{ old: "Клиники, студии, мастерские, консультанты", new: "Клиники, отели, студии, мастерские, консультанты" }],
        links: [
          { matchText: "Клиники", href: HREF.dental.ru },
          { matchText: "отели", href: HREF.hotel.ru },
          { matchText: "студии", href: HREF.fitness.ru },
        ],
      },
    },
  },
  {
    label: "multilingual-website -> hotel, logistics",
    docs: {
      en: {
        id: "singlepage-multilingual-website",
        replacements: [{
          old: "because each version was built to work in its own market rather than to mirror the original.",
          new: "because each version was built to work in its own market rather than to mirror the original. The same logic applies to hotels with international guests and logistics companies whose clients and drivers are in different countries.",
        }],
        links: [
          { matchText: "hotels with international guests", href: HREF.hotel.en },
          { matchText: "logistics companies", href: HREF.logistics.en },
        ],
      },
      pl: {
        id: "singlepage-multilingual-website.pl",
        replacements: [{
          old: "bo każda wersja została zbudowana, żeby działać na swoim rynku, a nie odbijać oryginał.",
          new: "bo każda wersja została zbudowana, żeby działać na swoim rynku, a nie odbijać oryginał. Ta sama logika dotyczy hoteli z międzynarodowymi gośćmi i firm transportowych, których klienci i kierowcy są w różnych krajach.",
        }],
        links: [
          { matchText: "hoteli z międzynarodowymi gośćmi", href: HREF.hotel.pl },
          { matchText: "firm transportowych", href: HREF.logistics.pl },
        ],
      },
      ru: {
        id: "singlepage-multilingual-website.ru",
        replacements: [{
          old: "потому что каждая версия строилась работать на своём рынке, а не отражать оригинал.",
          new: "потому что каждая версия строилась работать на своём рынке, а не отражать оригинал. Та же логика применима к отелям с иностранными гостями и транспортным компаниям, чьи клиенты и водители находятся в разных странах.",
        }],
        links: [
          { matchText: "отелям с иностранными гостями", href: HREF.hotel.ru },
          { matchText: "транспортным компаниям", href: HREF.logistics.ru },
        ],
      },
    },
  },
  {
    label: "catalog-website -> property-developer, manufacturing (natural anchors, no text edit)",
    docs: {
      en: { id: "singlepage-catalog-website", replacements: [], links: [
        { matchText: "A property catalogue", href: HREF.propertyDeveloper.en },
        { matchText: "a manufacturer's specification-driven line-up", href: HREF.manufacturing.en },
      ]},
      pl: { id: "singlepage-catalog-website.pl", replacements: [], links: [
        { matchText: "Katalog nieruchomości, flota sprzętu do wynajęcia", href: HREF.propertyDeveloper.pl },
        { matchText: "linia produktowa producenta opisana parametrami", href: HREF.manufacturing.pl },
      ]},
      ru: { id: "singlepage-catalog-website.ru", replacements: [], links: [
        { matchText: "Каталог недвижимости, парк техники в аренду", href: HREF.propertyDeveloper.ru },
        { matchText: "продуктовая линейка производителя, описанная параметрами", href: HREF.manufacturing.ru },
      ]},
    },
  },
  {
    label: "platform-migration -> startup",
    docs: {
      en: {
        id: "singlepage-platform-migration",
        replacements: [{
          old: "which is what the work was actually for.",
          new: "which is what the work was actually for. The same discipline applies when a startup outgrows its first platform.",
        }],
        links: [{ matchText: "a startup outgrows its first platform", href: HREF.startup.en }],
      },
      pl: {
        id: "singlepage-platform-migration.pl",
        replacements: [{
          old: "a właśnie po to wykonuje się tę pracę.",
          new: "a właśnie po to wykonuje się tę pracę. Ta sama dyscyplina dotyczy startupu, który wyrasta z pierwszej platformy.",
        }],
        links: [{ matchText: "startupu, który wyrasta z pierwszej platformy", href: HREF.startup.pl }],
      },
      ru: {
        id: "singlepage-platform-migration.ru",
        replacements: [{
          old: "а именно ради этого работа и делается.",
          new: "а именно ради этого работа и делается. Та же тщательность применима, когда стартап перерастает свою первую платформу.",
        }],
        links: [{ matchText: "стартап перерастает свою первую платформу", href: HREF.startup.ru }],
      },
    },
  },
  {
    label: "website-development -> multilingual, catalog, online-booking, platform-migration, hub",
    docs: {
      en: {
        id: "8701994a-d9ba-4230-84b5-2e491b87cb61",
        replacements: [{
          old: "This process ensures your website is efficient, maintainable, and measurable — built to perform, not just exist.",
          new: "This process ensures your website is efficient, maintainable, and measurable — built to perform, not just exist. That includes specialised builds too — multilingual websites, catalogues with filters, sites with online booking, and platform migrations — all listed on the full services page.",
        }],
        links: [
          { matchText: "multilingual websites", href: HREF.multilingual.en },
          { matchText: "catalogues with filters", href: HREF.catalog.en },
          { matchText: "sites with online booking", href: HREF.onlineBooking.en },
          { matchText: "platform migrations", href: HREF.platformMigration.en },
          { matchText: "the full services page", href: HREF.hub.en },
        ],
      },
      pl: {
        id: "b35e57c9-9cce-4ebd-ab05-5121ffa38fef",
        replacements: [{
          old: "każda realizacja jest nie tylko atrakcyjna wizualnie, lecz także funkcjonalna i skuteczna w osiąganiu celów.",
          new: "każda realizacja jest nie tylko atrakcyjna wizualnie, lecz także funkcjonalna i skuteczna w osiąganiu celów. Obejmuje to też realizacje specjalistyczne — strony wielojęzyczne, katalogi z filtrami, strony z rezerwacją online i migracje na inną platformę — wszystkie wymienione na pełnej stronie usług.",
        }],
        links: [
          { matchText: "strony wielojęzyczne", href: HREF.multilingual.pl },
          { matchText: "katalogi z filtrami", href: HREF.catalog.pl },
          { matchText: "strony z rezerwacją online", href: HREF.onlineBooking.pl },
          { matchText: "migracje na inną platformę", href: HREF.platformMigration.pl },
          { matchText: "pełnej stronie usług", href: HREF.hub.pl },
        ],
      },
      ru: {
        id: "21d6001f-5181-4249-aef2-5ed9425bf81d",
        replacements: [{
          old: "Такой подход обеспечивает не просто красивый сайт, а рабочий инструмент, приносящий заявки, продажи и узнаваемость.",
          new: "Такой подход обеспечивает не просто красивый сайт, а рабочий инструмент, приносящий заявки, продажи и узнаваемость. Это касается и специализированных проектов — мультиязычных сайтов, каталогов с фильтрами, сайтов с онлайн-записью и переноса на другую платформу — все они перечислены на полной странице услуг.",
        }],
        links: [
          { matchText: "мультиязычных сайтов", href: HREF.multilingual.ru },
          { matchText: "каталогов с фильтрами", href: HREF.catalog.ru },
          { matchText: "сайтов с онлайн-записью", href: HREF.onlineBooking.ru },
          { matchText: "переноса на другую платформу", href: HREF.platformMigration.ru },
          { matchText: "полной странице услуг", href: HREF.hub.ru },
        ],
      },
    },
  },
  {
    label: "seo-optimization-and-strategy -> multilingual, catalog, hub",
    docs: {
      en: {
        id: "42a469a6-28f3-4015-8b88-414c8eb3d4fa",
        replacements: [{
          old: "This creates a cycle of constant improvement, not just a one-time “SEO setup.”",
          new: "This creates a cycle of constant improvement, not just a one-time “SEO setup.” The same structural thinking is what makes multilingual websites rank in every market and turns a catalogue's filters into pages search engines can actually index — both covered on the full services page.",
        }],
        links: [
          { matchText: "multilingual websites", href: HREF.multilingual.en },
          { matchText: "a catalogue's filters", href: HREF.catalog.en },
          { matchText: "the full services page", href: HREF.hub.en },
        ],
      },
      pl: {
        id: "77c5f5df-a6f3-49ca-8f42-f1439e3490c6",
        replacements: [{
          old: "Każdy z tych elementów wpływa na lepszą indeksację, widoczność i doświadczenie użytkownika.",
          new: "Każdy z tych elementów wpływa na lepszą indeksację, widoczność i doświadczenie użytkownika. To samo myślenie strukturalne sprawia, że strony wielojęzyczne rankują na każdym rynku, a filtry katalogu zamieniają się w podstrony, które wyszukiwarki faktycznie indeksują — oba tematy opisane na pełnej stronie usług.",
        }],
        links: [
          { matchText: "strony wielojęzyczne", href: HREF.multilingual.pl },
          { matchText: "filtry katalogu", href: HREF.catalog.pl },
          { matchText: "pełnej stronie usług", href: HREF.hub.pl },
        ],
      },
      ru: {
        id: "6a81eab0-6993-41a6-adc3-d9047a3b35a0",
        replacements: [{
          old: "Так ваш сайт начинает появляться не только в результатах поиска, но и в ответах, формируемых AI — на шаг впереди конкурентов.",
          new: "Так ваш сайт начинает появляться не только в результатах поиска, но и в ответах, формируемых AI — на шаг впереди конкурентов. То же структурное мышление делает так, что мультиязычные сайты ранжируются на каждом рынке, а фильтры каталога превращаются в страницы, которые поисковики действительно индексируют, — обе темы разобраны на полной странице услуг.",
        }],
        links: [
          { matchText: "мультиязычные сайты", href: HREF.multilingual.ru },
          { matchText: "фильтры каталога", href: HREF.catalog.ru },
          { matchText: "полной странице услуг", href: HREF.hub.ru },
        ],
      },
    },
  },
  {
    label: "ai-ready-seo-and-geo-optimization -> multilingual, hub",
    docs: {
      en: {
        id: "831dc620-2863-4d55-baa0-aa874a7374ac",
        replacements: [{
          old: "In short — I don’t just optimize for Google; I optimize for how AI reads Google.",
          new: "In short — I don’t just optimize for Google; I optimize for how AI reads Google. That matters especially for multilingual websites, where each market's version needs to be legible to AI search on its own terms — one of several specialised builds on the full services page.",
        }],
        links: [
          { matchText: "multilingual websites", href: HREF.multilingual.en },
          { matchText: "the full services page", href: HREF.hub.en },
        ],
      },
      pl: {
        id: "3a759a28-4135-4731-a318-cffee1b512f0",
        replacements: [{
          old: "Dzięki temu Twoja strona jest gotowa nie tylko na dzisiejsze wyszukiwanie, ale i na jego przyszłość — AI Search i GEO.",
          new: "Dzięki temu Twoja strona jest gotowa nie tylko na dzisiejsze wyszukiwanie, ale i na jego przyszłość — AI Search i GEO. Ma to szczególne znaczenie dla stron wielojęzycznych, gdzie każda wersja rynkowa musi być czytelna dla wyszukiwania AI na swoich zasadach — to jedna z kilku specjalistycznych realizacji opisanych na pełnej stronie usług.",
        }],
        links: [
          { matchText: "stron wielojęzycznych", href: HREF.multilingual.pl },
          { matchText: "pełnej stronie usług", href: HREF.hub.pl },
        ],
      },
      ru: {
        id: "1c0a4ea3-2dd6-4081-a0a0-58ee87633f71",
        replacements: [{
          old: "AI SEO и GEO-оптимизация дают вашему бизнесу: устойчивость к изменениям алгоритмов, видимость в генеративных поисковых системах, и стратегическое преимущество перед конкурентами.",
          new: "AI SEO и GEO-оптимизация дают вашему бизнесу: устойчивость к изменениям алгоритмов, видимость в генеративных поисковых системах, и стратегическое преимущество перед конкурентами. Это особенно важно для мультиязычных сайтов, где версия под каждый рынок должна быть понятна ИИ-поиску на своих условиях, — один из нескольких специализированных проектов на полной странице услуг.",
        }],
        links: [
          { matchText: "мультиязычных сайтов", href: HREF.multilingual.ru },
          { matchText: "полной странице услуг", href: HREF.hub.ru },
        ],
      },
    },
  },
];

async function main() {
  const allIds = [];
  for (const group of PLAN) for (const lang of ["en", "pl", "ru"]) allIds.push(group.docs[lang].id);

  const existing = await client.fetch(`*[_id in $ids]{ _id, contentBlocks }`, { ids: allIds });
  const docMap = Object.fromEntries(existing.map((d) => [d._id, d]));

  console.log("=== PLAN ===");
  for (const group of PLAN) {
    console.log(`\n--- ${group.label} ---`);
    for (const lang of ["en", "pl", "ru"]) {
      const spec = group.docs[lang];
      console.log(`  ${spec.id}: ${spec.replacements.length} text edit(s), ${spec.links.length} link(s)`);
    }
  }

  const results = [];
  for (const group of PLAN) {
    for (const lang of ["en", "pl", "ru"]) {
      const spec = group.docs[lang];
      const doc = docMap[spec.id];
      if (!doc) {
        results.push({ id: spec.id, ok: false, error: "doc not found" });
        continue;
      }
      const tcIndices = doc.contentBlocks
        .map((b, i) => (b._type === "textContent" ? i : -1))
        .filter((i) => i !== -1);
      if (tcIndices.length === 0) {
        results.push({ id: spec.id, ok: false, error: "no textContent block" });
        continue;
      }
      try {
        // Find which textContent block contains the anchor text for the FIRST replacement/link
        // (they must all land in the same block, since replaceText/insertInlineLink operate on one `content` array).
        const needle = spec.replacements[0]?.old ?? spec.links[0]?.matchText;
        const targetIndex = tcIndices.find((i) =>
          doc.contentBlocks[i].content.some((block) =>
            (block.children || []).map((c) => c.text || "").join("").includes(needle)
          )
        );
        if (targetIndex === undefined) {
          throw new Error(`no textContent block (of ${tcIndices.length}) contains: "${needle}"`);
        }
        let content = doc.contentBlocks[targetIndex].content;
        for (const r of spec.replacements) content = replaceText(content, r.old, r.new);
        for (const l of spec.links) content = insertInlineLink(content, l.matchText, l.href);
        const newContentBlocks = [...doc.contentBlocks];
        newContentBlocks[targetIndex] = { ...newContentBlocks[targetIndex], content };
        results.push({ id: spec.id, ok: true, newContentBlocks });
      } catch (err) {
        results.push({ id: spec.id, ok: false, error: err.message });
      }
    }
  }

  console.log("\n=== VALIDATION ===");
  const failed = results.filter((r) => !r.ok);
  for (const r of results) {
    console.log(`${r.ok ? "OK  " : "FAIL"} ${r.id}${r.ok ? "" : "  -- " + r.error}`);
  }
  if (failed.length) {
    console.log(`\n${failed.length} document(s) failed validation. Aborting — nothing was patched.`);
    process.exit(1);
  }

  if (!APPLY) {
    console.log("\nAll transformations validated successfully. Dry run only (no --apply flag) — nothing was patched.");
    return;
  }

  console.log("\n=== PATCHING ===");
  for (const r of results) {
    await client.patch(r.id).set({ contentBlocks: r.newContentBlocks }).commit();
    console.log(`Patched ${r.id}`);
  }
  console.log("\nDone.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
