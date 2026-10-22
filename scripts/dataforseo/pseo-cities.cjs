// scripts/dataforseo/pseo-cities.cjs
//
// Города: рынок, языки страницы и формы написания.
//
// Правило владельца (21.10.2026): польские и казахские города не переводим,
// а города других стран, где есть русскоязычный бизнес, переводим с
// английского на русский.
//
// Отсюда три разряда:
//   pl       город польского рынка — страница только польская
//   ru       город рынка, где говорят по-русски и не по-английски:
//            Казахстан, Украина, Средняя Азия, Кавказ, Молдова
//   en+ru    международный город, где есть и англоязычный, и русскоязычный
//            бизнес: Дубай, Лондон, Торонто, Лимассол, Прага, Берлин, Рига
//   en       город чисто англоязычного рынка: Оттава, Окленд, Перт, Калгари —
//            русская версия там никому не адресована
//
// Таблица нужна ещё и затем, чтобы связать «dubai» и «дубай»: в словаре это
// две независимые строки, и без общего ключа правило не применить. Та же
// задача, что решена для отраслей в pseo-industries.cjs.

// Международные: обе языковые версии. Ключ — английская форма.
const BILINGUAL = [
  { key: "dubai", en: "dubai", ru: "дубай" },
  { key: "abu-dhabi", en: "abu dhabi", ru: "абу-даби" },
  { key: "london", en: "london", ru: "лондон" },
  { key: "toronto", en: "toronto", ru: "торонто" },
  { key: "vancouver", en: "vancouver", ru: "ванкувер" },
  { key: "new-york", en: "new york", ru: "нью-йорк" },
  { key: "miami", en: "miami", ru: "майами" },
  { key: "singapore", en: "singapore", ru: "сингапур" },
  { key: "tel-aviv", en: "tel aviv", ru: "тель-авив" },
  { key: "limassol", en: "limassol", ru: "лимассол" },
  { key: "nicosia", en: "nicosia", ru: "никосия" },
  { key: "larnaca", en: "larnaca", ru: "ларнака" },
  { key: "prague", en: "prague", ru: "прага" },
  { key: "berlin", en: "berlin", ru: "берлин" },
  { key: "munich", en: "munich", ru: "мюнхен" },
  { key: "hamburg", en: "hamburg", ru: "гамбург" },
  { key: "frankfurt", en: "frankfurt", ru: "франкфурт" },
  { key: "vienna", en: "vienna", ru: "вена" },
  { key: "amsterdam", en: "amsterdam", ru: "амстердам" },
  { key: "barcelona", en: "barcelona", ru: "барселона" },
  { key: "madrid", en: "madrid", ru: "мадрид" },
  { key: "lisbon", en: "lisbon", ru: "лиссабон" },
  { key: "milan", en: "milan", ru: "милан" },
  { key: "riga", en: "riga", ru: "рига" },
  { key: "tallinn", en: "tallinn", ru: "таллин" },
  { key: "vilnius", en: "vilnius", ru: "вильнюс" },
  { key: "stockholm", en: "stockholm", ru: "стокгольм" },
  { key: "helsinki", en: "helsinki", ru: "хельсинки" },
  { key: "istanbul", en: "istanbul", ru: "стамбул" },
  { key: "belgrade", en: "belgrade", ru: "белград" },
  { key: "tbilisi", en: "tbilisi", ru: "тбилиси" },
  { key: "batumi", en: "batumi", ru: "батуми" },
  { key: "yerevan", en: "yerevan", ru: "ереван" },
  { key: "baku", en: "baku", ru: "баку" },
];

// Города рынков, где русский — рабочий язык, а английский нет.
// Казахстан, Украина, Средняя Азия, Молдова.
const RU_ONLY = [
  "астана", "алматы", "шымкент", "караганда", "актобе", "тараз", "павлодар",
  "усть-каменогорск", "атырау", "костанай", "кызылорда", "актау", "семей", "уральск",
  "киев", "харьков", "одесса", "днепр", "львов", "запорожье", "винница", "николаев",
  "полтава", "черкассы", "чернигов", "ивано-франковск", "тернополь", "ужгород",
  "ташкент", "бишкек", "кишинев", "каунас", "анталия", "хайфа", "будва", "варшава",
  "краков", "вроцлав", "познань", "гданьск",
];

const byEn = new Map(BILINGUAL.map((c) => [c.en, c]));
const byRu = new Map(BILINGUAL.map((c) => [c.ru, c]));
const ruOnly = new Set(RU_ONLY);

/**
 * Языки, на которых город заслуживает страницы.
 * lang — язык, на котором город найден в выгрузке.
 */
function langsFor(lang, city) {
  const c = String(city || "").toLowerCase().trim();
  if (lang === "pl") return ["pl"];                 // польский рынок, не переводим
  if (lang === "ru") {
    if (ruOnly.has(c)) return ["ru"];               // Казахстан, Украина, Средняя Азия
    if (byRu.has(c)) return ["en", "ru"];           // международный
    return ["ru"];
  }
  if (lang === "en") {
    if (byEn.has(c)) return ["en", "ru"];           // международный
    return ["en"];                                   // Оттава, Окленд, Перт и прочие
  }
  return [lang];
}

/** Общий ключ города: международный — по английской форме, иначе сам город. */
function cityKey(lang, city) {
  const c = String(city || "").toLowerCase().trim();
  if (lang === "ru" && byRu.has(c)) return byRu.get(c).key;
  if (lang === "en" && byEn.has(c)) return byEn.get(c).key;
  return `${lang}:${c}`;
}

/** Форма города на нужном языке, если город международный. */
function formFor(key, lang) {
  const c = BILINGUAL.find((x) => x.key === key);
  return c ? c[lang] || "" : "";
}

module.exports = { BILINGUAL, RU_ONLY, langsFor, cityKey, formFor };
