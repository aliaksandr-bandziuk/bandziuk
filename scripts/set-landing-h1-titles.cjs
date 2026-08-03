// scripts/set-landing-h1-titles.cjs
// Patches only the `title` field (H1) on all 20 landings x 3 locales.
// excerpt (= hero subheadline paragraph) is intentionally left untouched.
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

const APPLY = process.argv.includes("--apply");

const LANDINGS = {
  "singlepage-multilingual-website": {
    en: "Multilingual website development",
    pl: "Tworzenie strony wielojęzycznej",
    ru: "Разработка мультиязычного сайта",
  },
  "singlepage-catalog-website": {
    en: "Catalogue website development",
    pl: "Tworzenie strony katalogowej z filtrami",
    ru: "Разработка сайта-каталога с фильтрами",
  },
  "singlepage-online-booking": {
    en: "Website development with online booking",
    pl: "Tworzenie strony z rezerwacją online",
    ru: "Разработка сайта с онлайн-записью",
  },
  "singlepage-dental-clinic-website": {
    en: "Dental clinic website development",
    pl: "Tworzenie strony dla gabinetu stomatologicznego",
    ru: "Разработка сайта для стоматологической клиники",
  },
  "singlepage-veterinary-clinic": {
    en: "Veterinary clinic website development",
    pl: "Tworzenie strony dla przychodni weterynaryjnej",
    ru: "Разработка сайта для ветеринарной клиники",
  },
  "singlepage-accounting-firm": {
    en: "Accounting firm website development",
    pl: "Tworzenie strony dla biura rachunkowego",
    ru: "Разработка сайта для бухгалтерской фирмы",
  },
  "singlepage-architecture-studio": {
    en: "Architecture studio website development",
    pl: "Tworzenie strony dla biura architektonicznego",
    ru: "Разработка сайта для архитектурного бюро",
  },
  "singlepage-photographer": {
    en: "Photographer website development",
    pl: "Tworzenie strony dla fotografa",
    ru: "Разработка сайта для фотографа",
  },
  "singlepage-language-school": {
    en: "Language school website development",
    pl: "Tworzenie strony dla szkoły językowej",
    ru: "Разработка сайта для языковой школы",
  },
  "singlepage-fitness-studio": {
    en: "Fitness studio website development",
    pl: "Tworzenie strony dla studia fitness",
    ru: "Разработка сайта для фитнес-студии",
  },
  "singlepage-cleaning-company": {
    en: "Cleaning company website development",
    pl: "Tworzenie strony dla firmy sprzątającej",
    ru: "Разработка сайта для клининговой компании",
  },
  "singlepage-logistics-company": {
    en: "Transport company website development",
    pl: "Tworzenie strony dla firmy transportowej",
    ru: "Разработка сайта для транспортной компании",
  },
  "singlepage-hotel-website": {
    en: "Hotel website development",
    pl: "Tworzenie strony dla hotelu",
    ru: "Разработка сайта для отеля",
  },
  "singlepage-travel-agency": {
    en: "Travel agency website development",
    pl: "Tworzenie strony dla biura podróży",
    ru: "Разработка сайта для турагентства",
  },
  "singlepage-restaurant": {
    en: "Restaurant website development",
    pl: "Tworzenie strony dla restauracji",
    ru: "Разработка сайта для ресторана",
  },
  "singlepage-recruitment-agency": {
    en: "Recruitment agency website development",
    pl: "Tworzenie strony dla agencji rekrutacyjnej",
    ru: "Разработка сайта для кадрового агентства",
  },
  "singlepage-manufacturing-company": {
    en: "Manufacturing company website development",
    pl: "Tworzenie strony dla firmy produkcyjnej",
    ru: "Разработка сайта для производственной компании",
  },
  "singlepage-startup-website": {
    en: "Startup website development",
    pl: "Tworzenie strony dla startupu",
    ru: "Разработка сайта для стартапа",
  },
  "singlepage-web-development-warsaw": {
    en: "Website development in Warsaw",
    pl: "Tworzenie stron internetowych w Warszawie",
    ru: "Разработка сайтов в Варшаве",
  },
  "singlepage-platform-migration": {
    en: "Website migration to a new platform",
    pl: "Migracja strony na inną platformę",
    ru: "Перенос сайта на другую платформу",
  },
};

function docIdFor(baseId, lang) {
  return lang === "en" ? baseId : `${baseId}.${lang}`;
}

async function main() {
  const entries = Object.entries(LANDINGS);
  const allIds = entries.flatMap(([baseId]) => ["en", "pl", "ru"].map((l) => docIdFor(baseId, l)));

  const docs = await client.fetch(`*[_id in $ids]{ _id, title, excerpt }`, { ids: allIds });
  const docMap = Object.fromEntries(docs.map((d) => [d._id, d]));

  const missing = allIds.filter((id) => !docMap[id]);
  if (missing.length) {
    console.log("Aborting — missing docs:", missing.join(", "));
    process.exit(1);
  }

  console.log(`=== PLAN (${entries.length} landings -> ${allIds.length} docs) ===`);
  for (const [baseId, titles] of entries) {
    console.log(`\n${baseId}`);
    for (const lang of ["en", "pl", "ru"]) {
      const id = docIdFor(baseId, lang);
      const cur = docMap[id];
      console.log(`  ${id}`);
      console.log(`    title:   "${cur.title}" -> "${titles[lang]}"`);
      console.log(`    excerpt: unchanged ("${cur.excerpt}")`);
    }
  }

  if (!APPLY) {
    console.log("\nDry run only (no --apply flag) — nothing was patched.");
    return;
  }

  console.log("\n=== PATCHING ===");
  for (const [baseId, titles] of entries) {
    for (const lang of ["en", "pl", "ru"]) {
      const id = docIdFor(baseId, lang);
      await client.patch(id).set({ title: titles[lang] }).commit();
      console.log(`Patched ${id}`);
    }
  }
  console.log("\nDone.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
