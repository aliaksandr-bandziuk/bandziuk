const path = require("path");
const { client, key } = require("./create-batch1-warsaw.cjs");

const LOCAL_SEO = { pl: "/pl/oferty/pozycjonowanie-lokalne", ru: "/ru/uslugi/lokalnoe-seo-prodvizhenie" };
const INTL_SEO = { en: "/services/international-seo", pl: "/pl/oferty/seo-miedzynarodowe", ru: "/ru/uslugi/mezhdunarodnoe-seo" };
const CATALOG = { en: "/catalog-website-with-filters", pl: "/pl/strona-katalogowa-z-filtrami" };
const MULTILINGUAL_COST = { en: "/blog/multilingual-website-cost", pl: "/pl/blog/ile-kosztuje-strona-wielojezyczna" };

function trailerBlock(sentence, href) {
  const defKey = key();
  return {
    _key: key(),
    _type: "block",
    style: "normal",
    markDefs: [{ _key: defKey, _type: "link", href }],
    children: [{ _key: key(), _type: "span", marks: [defKey], text: sentence }],
  };
}

// { id, wrapperKey, lastKey, sentence, href }
const PATCHES = [
  // ---- Group 1: Local SEO -> 6 Warsaw niche pages (PL + RU) ----
  { id: "singlepage-seo-salon-warszawa.pl", wrapperKey: "49c285104d34", lastKey: "34c9b1d1f229",
    sentence: "Ten sam mechanizm widoczności w mapach, który decyduje o zapisach do salonu, opisujemy szerzej w artykule o pozycjonowaniu lokalnym.", href: LOCAL_SEO.pl },
  { id: "singlepage-seo-salon-warszawa.ru", wrapperKey: "dc328888370f", lastKey: "3aa39b26b99b",
    sentence: "Тот же механизм видимости в картах, который определяет запись в салон, подробнее разобран в статье о локальном SEO-продвижении.", href: LOCAL_SEO.ru },

  { id: "singlepage-seo-warsztat-warszawa.pl", wrapperKey: "f72d9ebea7ae", lastKey: "ddcb8fc3bb8d",
    sentence: "Ten sam mechanizm widoczności w mapach, który przyciąga klientów do warsztatu, opisujemy szerzej w artykule o pozycjonowaniu lokalnym.", href: LOCAL_SEO.pl },
  { id: "singlepage-seo-warsztat-warszawa.ru", wrapperKey: "e634834811b8", lastKey: "d1ce74dccc11",
    sentence: "Тот же механизм видимости в картах, который приводит клиентов в автосервис, подробнее разобран в статье о локальном SEO-продвижении.", href: LOCAL_SEO.ru },

  { id: "singlepage-seo-kancelaria-warszawa.pl", wrapperKey: "4069ba089d70", lastKey: "f5a771689622",
    sentence: "Widoczność kancelarii w lokalnych wynikach wyszukiwania opisujemy szerzej w artykule o pozycjonowaniu lokalnym.", href: LOCAL_SEO.pl },
  { id: "singlepage-seo-kancelaria-warszawa.ru", wrapperKey: "e42fca0d1a85", lastKey: "bed795ba59b8",
    sentence: "Видимость юридической компании в локальных результатах поиска подробнее разобрана в статье о локальном SEO-продвижении.", href: LOCAL_SEO.ru },

  { id: "singlepage-seo-stomatologia-warszawa.pl", wrapperKey: "dfd54d878694", lastKey: "7ba6a5bd0d98",
    sentence: "Ten sam mechanizm widoczności w mapach, który decyduje o wyborze gabinetu, opisujemy szerzej w artykule o pozycjonowaniu lokalnym.", href: LOCAL_SEO.pl },
  { id: "singlepage-seo-stomatologia-warszawa.ru", wrapperKey: "0f502034f355", lastKey: "af05ca4e00ca",
    sentence: "Тот же механизм видимости в картах, который влияет на выбор стоматологии, подробнее разобран в статье о локальном SEO-продвижении.", href: LOCAL_SEO.ru },

  { id: "singlepage-seo-budowlana-warszawa.pl", wrapperKey: "3a3e01f7a8f2", lastKey: "28f699287277",
    sentence: "Widoczność firmy budowlanej w lokalnych wynikach wyszukiwania opisujemy szerzej w artykule o pozycjonowaniu lokalnym.", href: LOCAL_SEO.pl },
  { id: "singlepage-seo-budowlana-warszawa.ru", wrapperKey: "af2e28540d2f", lastKey: "fa0d2b5c2592",
    sentence: "Видимость строительной компании в локальных результатах поиска подробнее разобрана в статье о локальном SEO-продвижении.", href: LOCAL_SEO.ru },

  { id: "singlepage-seo-sprzatanie-warszawa.pl", wrapperKey: "f42698ca197a", lastKey: "43b12b871701",
    sentence: "Widoczność firmy sprzątającej w lokalnych wynikach wyszukiwania opisujemy szerzej w artykule o pozycjonowaniu lokalnym.", href: LOCAL_SEO.pl },
  { id: "singlepage-seo-sprzatanie-warszawa.ru", wrapperKey: "059033e8be83", lastKey: "ec76a716dee3",
    sentence: "Видимость клининговой компании в локальных результатах поиска подробнее разобрана в статье о локальном SEO-продвижении.", href: LOCAL_SEO.ru },

  // ---- Group 2: International SEO -> single-country pages (EN + RU), lingerie SEO (EN+PL+RU) ----
  { id: "singlepage-swiss-auto", wrapperKey: "9d7fdb5d93d0", lastKey: "1bf5a057c506",
    sentence: "If a business runs the same kind of search work across more than one country market, that broader, multi-market version is covered separately in international and multilingual SEO.", href: INTL_SEO.en },
  { id: "singlepage-swiss-auto.ru", wrapperKey: "158a3f7f04cd", lastKey: "7d3dce86b8de",
    sentence: "Если бизнес ведёт такую же работу с поиском сразу в нескольких страновых рынках, более широкая, мультирыночная версия этой работы описана отдельно — в статье о международном и мультиязычном SEO.", href: INTL_SEO.ru },

  { id: "singlepage-swiss-consulting", wrapperKey: "139e506fcf19", lastKey: "1d103fee2739",
    sentence: "If a business runs the same kind of search work across more than one country market, that broader, multi-market version is covered separately in international and multilingual SEO.", href: INTL_SEO.en },
  { id: "singlepage-swiss-consulting.ru", wrapperKey: "5f4abf3dc336", lastKey: "ad69cda50927",
    sentence: "Если бизнес ведёт такую же работу с поиском сразу в нескольких страновых рынках, более широкая, мультирыночная версия этой работы описана отдельно — в статье о международном и мультиязычном SEO.", href: INTL_SEO.ru },

  { id: "singlepage-swiss-premium", wrapperKey: "4e776aefb7c4", lastKey: "6773fd6ea1de",
    sentence: "If a business runs the same kind of search work across more than one country market, that broader, multi-market version is covered separately in international and multilingual SEO.", href: INTL_SEO.en },
  { id: "singlepage-swiss-premium.ru", wrapperKey: "4d18428f6077", lastKey: "46080e3a2884",
    sentence: "Если бизнес ведёт такую же работу с поиском сразу в нескольких страновых рынках, более широкая, мультирыночная версия этой работы описана отдельно — в статье о международном и мультиязычном SEO.", href: INTL_SEO.ru },

  { id: "singlepage-germany-auto", wrapperKey: "ba67b9c9aa1f", lastKey: "4b3e9542fd03",
    sentence: "If a business runs the same kind of search work across more than one country market, that broader, multi-market version is covered separately in international and multilingual SEO.", href: INTL_SEO.en },
  { id: "singlepage-germany-auto.ru", wrapperKey: "39fcf116deba", lastKey: "59e744c836c6",
    sentence: "Если бизнес ведёт такую же работу с поиском сразу в нескольких страновых рынках, более широкая, мультирыночная версия этой работы описана отдельно — в статье о международном и мультиязычном SEO.", href: INTL_SEO.ru },

  { id: "singlepage-uae-auto", wrapperKey: "a229e87a9ee2", lastKey: "c7ee47e95092",
    sentence: "If a business runs the same kind of search work across more than one country market, that broader, multi-market version is covered separately in international and multilingual SEO.", href: INTL_SEO.en },
  { id: "singlepage-uae-auto.ru", wrapperKey: "1b1a3d8eb307", lastKey: "53f28a5209de",
    sentence: "Если бизнес ведёт такую же работу с поиском сразу в нескольких страновых рынках, более широкая, мультирыночная версия этой работы описана отдельно — в статье о международном и мультиязычном SEO.", href: INTL_SEO.ru },

  { id: "singlepage-uae-realestate", wrapperKey: "99448f032d9d", lastKey: "c1f6d25fe112",
    sentence: "If a business runs the same kind of search work across more than one country market, that broader, multi-market version is covered separately in international and multilingual SEO.", href: INTL_SEO.en },
  { id: "singlepage-uae-realestate.ru", wrapperKey: "8ba22971c08b", lastKey: "3c157b509912",
    sentence: "Если бизнес ведёт такую же работу с поиском сразу в нескольких страновых рынках, более широкая, мультирыночная версия этой работы описана отдельно — в статье о международном и мультиязычном SEO.", href: INTL_SEO.ru },

  { id: "singlepage-spain-realestate", wrapperKey: "379db9645258", lastKey: "664c8876d204",
    sentence: "If a business runs the same kind of search work across more than one country market, that broader, multi-market version is covered separately in international and multilingual SEO.", href: INTL_SEO.en },
  { id: "singlepage-spain-realestate.ru", wrapperKey: "f8feba208b81", lastKey: "de8374be24aa",
    sentence: "Если бизнес ведёт такую же работу с поиском сразу в нескольких страновых рынках, более широкая, мультирыночная версия этой работы описана отдельно — в статье о международном и мультиязычном SEO.", href: INTL_SEO.ru },

  { id: "singlepage-lingerie-seo", wrapperKey: "b092f5f703a9", lastKey: "1c80e01001ad",
    sentence: "If a business runs the same kind of search work across more than one country market, that broader, multi-market version is covered separately in international and multilingual SEO.", href: INTL_SEO.en },
  { id: "singlepage-lingerie-seo.pl", wrapperKey: "104a4174b4f3", lastKey: "ff9b87bd4c88",
    sentence: "Jeśli firma prowadzi taką samą pracę z wyszukiwarką jednocześnie na kilku rynkach krajowych, szersza, wielorynkowa wersja tej pracy jest opisana osobno — w artykule o SEO międzynarodowym i wielojęzycznym.", href: INTL_SEO.pl },
  { id: "singlepage-lingerie-seo.ru", wrapperKey: "9c31f76539ab", lastKey: "f9dad2dfb06d",
    sentence: "Если бизнес ведёт такую же работу с поиском сразу в нескольких страновых рынках, более широкая, мультирыночная версия этой работы описана отдельно — в статье о международном и мультиязычном SEO.", href: INTL_SEO.ru },

  // ---- Group 3: Catalog-with-filters landing (EN/PL only, target has no RU) ----
  { id: "singlepage-swiss-premium", wrapperKey: "4e776aefb7c4", lastKey: null, // appended after group-2 insert, see main()
    sentence: "For a product range large enough to need browsing by attribute rather than by category alone, catalogue website development with filters is covered separately.", href: CATALOG.en, group3: true },

  { id: "singlepage-lingerie-website", wrapperKey: "f189e0741f0e", lastKey: "2ef743c1d9d5",
    sentence: "For a product range large enough to need browsing by attribute rather than by category alone, catalogue website development with filters is covered separately.", href: CATALOG.en },
  { id: "singlepage-lingerie-website.pl", wrapperKey: "0340229461d8", lastKey: "4040c2d5553b",
    sentence: "Dla asortymentu na tyle dużego, że wymaga przeglądania po atrybutach, a nie tylko po kategoriach, tworzenie strony katalogowej z filtrami opisujemy osobno.", href: CATALOG.pl },

  { id: "singlepage-lingerie-seo", wrapperKey: "b092f5f703a9", lastKey: null, // appended after group-2 insert
    sentence: "For a product range large enough to need browsing by attribute rather than by category alone, catalogue website development with filters is covered separately.", href: CATALOG.en, group3: true },
  { id: "singlepage-lingerie-seo.pl", wrapperKey: "104a4174b4f3", lastKey: null, // appended after group-2 insert
    sentence: "Dla asortymentu na tyle dużego, że wymaga przeglądania po atrybutach, a nie tylko po kategoriach, tworzenie strony katalogowej z filtrami opisujemy osobno.", href: CATALOG.pl, group3: true },

  // ---- Group 4: multilingual-cost article (EN/PL only, target has no RU) ----
  { id: "singlepage-lingerie-website", wrapperKey: "f189e0741f0e", lastKey: null, // appended after group-3 insert
    sentence: "The cost breakdown for building that kind of multilingual catalogue is covered separately in how much a multilingual website costs.", href: MULTILINGUAL_COST.en, group4: true },
  { id: "singlepage-lingerie-website.pl", wrapperKey: "0340229461d8", lastKey: null, // appended after group-3 insert
    sentence: "Rozbicie kosztów budowy takiego wielojęzycznego katalogu opisujemy osobno w artykule o tym, ile kosztuje strona wielojęzyczna.", href: MULTILINGUAL_COST.pl, group4: true },
];

async function main() {
  // Track the running "last content key" per document so chained appends
  // (same doc receiving 2 or 3 trailer paragraphs) insert after the
  // paragraph just added, not the original last paragraph.
  const runningLastKey = {};
  const touched = new Set();

  for (const p of PATCHES) {
    const lastKey = p.lastKey || runningLastKey[p.id];
    const block = trailerBlock(p.sentence, p.href);
    await client
      .patch(p.id)
      .insert("after", `contentBlocks[_key=="${p.wrapperKey}"].content[_key=="${lastKey}"]`, [block])
      .commit();
    runningLastKey[p.id] = block._key;
    touched.add(p.id);
    console.log(`patched ${p.id} -> ${p.href}`);
  }

  console.log("\nTouched documents:", [...touched].sort().join(", "));
}

main().catch((e) => { console.error(e); process.exit(1); });
