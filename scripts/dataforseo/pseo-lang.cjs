// scripts/dataforseo/pseo-lang.cjs
//
// Нормализация и срезание окончаний для трёх языков сайта.
// Вынесено отдельно, потому что этим пользуются и кластеризатор, и
// сопоставление спроса с существующими страницами.
//
// Примечание: в pseo-cluster.cjs пока лежат свои копии этих функций.
// Они совпадают строка в строку; объединить стоит, но отдельной правкой,
// чтобы не ломать работающий разбор заодно с добавлением нового скрипта.

const SUFFIXES = {
  pl: ["owania", "owanie", "owych", "ego", "emu", "ami", "ach", "owie", "ow", "om", "em", "ie", "ia", "ych", "y", "a", "e", "i", "u", "ą", "ę"],
  ru: ["ование", "ования", "ами", "ями", "ого", "ему", "ому", "ых", "их", "ов", "ев", "ей", "ам", "ям", "ах", "ях", "ом", "ем", "ую", "ая", "ое", "ые", "ый", "ий", "а", "я", "ы", "и", "у", "ю", "о", "е", "ь"],
  en: ["ization", "isation", "ing", "ies", "ers", "er", "es", "s"],
};

const DIACRITICS = { ł: "l", ó: "o", ą: "a", ć: "c", ę: "e", ń: "n", ś: "s", ź: "z", ż: "z", ё: "е", й: "и" };

// Предлоги, союзы и частицы: смысл страницы они не меняют.
const FUNCTION_WORDS = {
  pl: new Set(["w", "we", "na", "do", "i", "z", "ze", "o", "od", "po", "za", "bez", "przy", "oraz", "lub", "a", "jest", "sie", "dla"]),
  ru: new Set(["в", "во", "на", "и", "с", "со", "по", "от", "до", "за", "без", "при", "или", "а", "это", "же", "для"]),
  en: new Set(["a", "an", "the", "in", "of", "to", "and", "or", "on", "with", "at", "by", "is", "are", "does", "my", "your", "it", "for"]),
};

// Слова, которые называют одну и ту же услугу разными словами. При сравнении
// спроса с существующей страницей они не должны разводить их по разным темам:
// «tworzenie strony dla fotografa» и «strona internetowa dla fotografa» —
// одна страница, и отличаются они только этой группой слов.
const SERVICE_SYNONYMS = {
  pl: {
    tworze: "wykonanie", stworz: "wykonanie", wykona: "wykonanie",
    budowa: "wykonanie", zrobie: "wykonanie",
    // «projektowanie» — это дизайн, а не разработка. Раньше оно сводилось к
    // тому же слову, что «tworzenie», и страница «projektowanie strony dla X»
    // молча считалась закрытой страницей «Tworzenie strony dla X».
    projek: "projekt",
    intern: "www", witryn: "stron", serwis: "stron",
    // Цена одним словом: «ile kosztuje» и «cena» — об одном
    cena: "koszt", ceny: "koszt", cennik: "koszt", koszt: "koszt", kosztu: "koszt", ile: "koszt",
  },
  ru: {
    создан: "разраб", создат: "разраб", разраб: "разраб", сделат: "разраб", изготов: "разраб",
    веб: "саит", вебсаи: "саит", страниц: "саит",
    продви: "продви", раскру: "продви", оптими: "продви",
    // «цена», «стоимость» и «сколько стоит» — одно и то же. Без этого
    // запрос «цена разработки сайта» не узнавал раздел
    // «Сколько стоит разработка сайта?», который на странице уже стоит.
    цена: "цена", цены: "цена", стоимо: "цена", стоит: "цена", сколько: "цена", прайс: "цена",
  },
  en: {
    creati: "build", creato: "build", make: "build", makin: "build",
    maker: "build", develo: "build", buildi: "build", design: "design",
    websit: "site", webpag: "site", page: "site",
    cost: "price", costs: "price", pricin: "price", price: "price", much: "price",
  },
};

function normalize(s) {
  return String(s || "")
    .toLowerCase()
    .replace(/[łóąćęńśźżёй]/g, (c) => DIACRITICS[c] || c)
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function stem(word, lang) {
  if (word.length <= 4) return word;
  // Английское -y и -ies — одна основа: agency/agencies, bakery/bakeries.
  // Без этого «website for real estate agencies» не узнавал страницу
  // «Real Estate Agency Website Development» и попадал в «создать».
  if (lang === "en" && word.endsWith("y") && !word.endsWith("ay") && !word.endsWith("ey") && !word.endsWith("oy")) {
    word = word.slice(0, -1);
  }
  for (const suf of SUFFIXES[lang] || []) {
    if (word.endsWith(suf) && word.length - suf.length >= 4) return word.slice(0, -suf.length).slice(0, 6);
  }
  return word.slice(0, 6);
}

/** Приводит основу к единому виду, если это одно из слов-синонимов услуги. */
function canon(stemmed, lang) {
  const map = SERVICE_SYNONYMS[lang] || {};
  return map[stemmed] || stemmed;
}

/** Множество основ без служебных слов. useSynonyms сводит синонимы услуги. */
function tokenSet(text, lang, useSynonyms = false) {
  const fw = FUNCTION_WORDS[lang] || new Set();
  const out = new Set();
  for (const w of normalize(text).split(" ")) {
    if (!w || fw.has(w)) continue;
    const s = stem(w, lang);
    out.add(useSynonyms ? canon(s, lang) : s);
  }
  return out;
}

/** Доля общего: пересечение, делённое на размер меньшего множества. */
function containment(a, b) {
  if (!a.size || !b.size) return 0;
  let inter = 0;
  for (const t of a) if (b.has(t)) inter++;
  return inter / Math.min(a.size, b.size);
}

/** Жаккар: пересечение, делённое на объединение. */
function jaccard(a, b) {
  if (!a.size || !b.size) return 0;
  let inter = 0;
  for (const t of a) if (b.has(t)) inter++;
  return inter / (a.size + b.size - inter);
}

module.exports = { normalize, stem, canon, tokenSet, containment, jaccard, FUNCTION_WORDS, SUFFIXES };
