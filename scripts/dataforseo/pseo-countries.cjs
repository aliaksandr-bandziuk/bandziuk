// scripts/dataforseo/pseo-countries.cjs
//
// Страны для оси service-country (09.11.2026).
//
// Зачем отдельная таблица. Город в шаблон встаёт как есть («продвижение сайта
// астана»), а страна — нет: нужна предложная форма («создание сайта в
// Германии», «на Кипре») и прилагательное для рыночной формы («продвижение на
// немецкий рынок», «pozycjonowanie na rynek niemiecki»). Это три разных слова
// от одного названия, и без таблицы их не получить.
//
// Формы важнее полноты списка. «на Кипре», «na Słowacji», «na Węgrzech»,
// «na Litwie», «na Łotwie», «na Ukrainie», «na Malcie» — предлог «на», а не
// «в»/«w». Перепутанная форма даст ноль показов не потому, что спроса нет, а
// потому что так никто не пишет, и это худший вид ложного отрицания.
//
// Россия исключена: владелец не работает с теми, кто там живёт и ведёт дела.
// Индия и Пакистан исключены как не его рынок — то же правило, что в
// pseo-vocab.cjs.
//
// Поля: key — общий ключ, чтобы связать три языка; en — английское название;
// ruLoc/plLoc — предложная форма с предлогом; ruAdj/plAdj — прилагательное
// для рыночной формы.

const COUNTRY_TABLE = [
  // ---------------------------------------------------------- Евросоюз --
  { key: "poland",      en: "poland",         ruLoc: "в польше",            ruAdj: "польский",          plLoc: "w polsce",              plAdj: "polski" },
  { key: "germany",     en: "germany",        ruLoc: "в германии",          ruAdj: "немецкий",          plLoc: "w niemczech",           plAdj: "niemiecki" },
  { key: "france",      en: "france",         ruLoc: "во франции",          ruAdj: "французский",       plLoc: "we francji",            plAdj: "francuski" },
  { key: "spain",       en: "spain",          ruLoc: "в испании",           ruAdj: "испанский",         plLoc: "w hiszpanii",           plAdj: "hiszpański" },
  { key: "italy",       en: "italy",          ruLoc: "в италии",            ruAdj: "итальянский",       plLoc: "we włoszech",           plAdj: "włoski" },
  { key: "netherlands", en: "netherlands",    ruLoc: "в нидерландах",       ruAdj: "голландский",       plLoc: "w holandii",            plAdj: "holenderski" },
  { key: "belgium",     en: "belgium",        ruLoc: "в бельгии",           ruAdj: "бельгийский",       plLoc: "w belgii",              plAdj: "belgijski" },
  { key: "austria",     en: "austria",        ruLoc: "в австрии",           ruAdj: "австрийский",       plLoc: "w austrii",             plAdj: "austriacki" },
  { key: "czechia",     en: "czech republic", ruLoc: "в чехии",             ruAdj: "чешский",           plLoc: "w czechach",            plAdj: "czeski" },
  { key: "slovakia",    en: "slovakia",       ruLoc: "в словакии",          ruAdj: "словацкий",         plLoc: "na słowacji",           plAdj: "słowacki" },
  { key: "hungary",     en: "hungary",        ruLoc: "в венгрии",           ruAdj: "венгерский",        plLoc: "na węgrzech",           plAdj: "węgierski" },
  { key: "romania",     en: "romania",        ruLoc: "в румынии",           ruAdj: "румынский",         plLoc: "w rumunii",             plAdj: "rumuński" },
  { key: "bulgaria",    en: "bulgaria",       ruLoc: "в болгарии",          ruAdj: "болгарский",        plLoc: "w bułgarii",            plAdj: "bułgarski" },
  { key: "croatia",     en: "croatia",        ruLoc: "в хорватии",          ruAdj: "хорватский",        plLoc: "w chorwacji",           plAdj: "chorwacki" },
  { key: "slovenia",    en: "slovenia",       ruLoc: "в словении",          ruAdj: "словенский",        plLoc: "w słowenii",            plAdj: "słoweński" },
  { key: "greece",      en: "greece",         ruLoc: "в греции",            ruAdj: "греческий",         plLoc: "w grecji",              plAdj: "grecki" },
  { key: "portugal",    en: "portugal",       ruLoc: "в португалии",        ruAdj: "португальский",     plLoc: "w portugalii",          plAdj: "portugalski" },
  { key: "ireland",     en: "ireland",        ruLoc: "в ирландии",          ruAdj: "ирландский",        plLoc: "w irlandii",            plAdj: "irlandzki" },
  { key: "denmark",     en: "denmark",        ruLoc: "в дании",             ruAdj: "датский",           plLoc: "w danii",               plAdj: "duński" },
  { key: "sweden",      en: "sweden",         ruLoc: "в швеции",            ruAdj: "шведский",          plLoc: "w szwecji",             plAdj: "szwedzki" },
  { key: "finland",     en: "finland",        ruLoc: "в финляндии",         ruAdj: "финский",           plLoc: "w finlandii",           plAdj: "fiński" },
  { key: "estonia",     en: "estonia",        ruLoc: "в эстонии",           ruAdj: "эстонский",         plLoc: "w estonii",             plAdj: "estoński" },
  { key: "latvia",      en: "latvia",         ruLoc: "в латвии",            ruAdj: "латвийский",        plLoc: "na łotwie",             plAdj: "łotewski" },
  { key: "lithuania",   en: "lithuania",      ruLoc: "в литве",             ruAdj: "литовский",         plLoc: "na litwie",             plAdj: "litewski" },
  { key: "cyprus",      en: "cyprus",         ruLoc: "на кипре",            ruAdj: "кипрский",          plLoc: "na cyprze",             plAdj: "cypryjski" },
  { key: "malta",       en: "malta",          ruLoc: "на мальте",           ruAdj: "мальтийский",       plLoc: "na malcie",             plAdj: "maltański" },
  { key: "luxembourg",  en: "luxembourg",     ruLoc: "в люксембурге",       ruAdj: "люксембургский",    plLoc: "w luksemburgu",         plAdj: "luksemburski" },
  // ------------------------------------------------- остальная Европа --
  { key: "uk",          en: "uk",             ruLoc: "в великобритании",    ruAdj: "британский",        plLoc: "w wielkiej brytanii",   plAdj: "brytyjski" },
  { key: "switzerland", en: "switzerland",    ruLoc: "в швейцарии",         ruAdj: "швейцарский",       plLoc: "w szwajcarii",          plAdj: "szwajcarski" },
  { key: "norway",      en: "norway",         ruLoc: "в норвегии",          ruAdj: "норвежский",        plLoc: "w norwegii",            plAdj: "norweski" },
  { key: "serbia",      en: "serbia",         ruLoc: "в сербии",            ruAdj: "сербский",          plLoc: "w serbii",              plAdj: "serbski" },
  { key: "montenegro",  en: "montenegro",     ruLoc: "в черногории",        ruAdj: "черногорский",      plLoc: "w czarnogórze",         plAdj: "czarnogórski" },
  { key: "albania",     en: "albania",        ruLoc: "в албании",           ruAdj: "албанский",         plLoc: "w albanii",             plAdj: "albański" },
  { key: "turkey",      en: "turkey",         ruLoc: "в турции",            ruAdj: "турецкий",          plLoc: "w turcji",              plAdj: "turecki" },
  { key: "ukraine",     en: "ukraine",        ruLoc: "в украине",           ruAdj: "украинский",        plLoc: "na ukrainie",           plAdj: "ukraiński" },
  { key: "moldova",     en: "moldova",        ruLoc: "в молдове",           ruAdj: "молдавский",        plLoc: "w mołdawii",            plAdj: "mołdawski" },
  { key: "georgia",     en: "georgia",        ruLoc: "в грузии",            ruAdj: "грузинский",        plLoc: "w gruzji",              plAdj: "gruziński" },
  { key: "armenia",     en: "armenia",        ruLoc: "в армении",           ruAdj: "армянский",         plLoc: "w armenii",             plAdj: "ormiański" },
  { key: "azerbaijan",  en: "azerbaijan",     ruLoc: "в азербайджане",      ruAdj: "азербайджанский",   plLoc: "w azerbejdżanie",       plAdj: "azerski" },
  // ------------------------------------------------------ Ближний Восток --
  { key: "uae",         en: "uae",            ruLoc: "в оаэ",               ruAdj: "эмиратский",        plLoc: "w zea",                 plAdj: "emiracki" },
  { key: "qatar",       en: "qatar",          ruLoc: "в катаре",            ruAdj: "катарский",         plLoc: "w katarze",             plAdj: "katarski" },
  { key: "saudi",       en: "saudi arabia",   ruLoc: "в саудовской аравии", ruAdj: "саудовский",        plLoc: "w arabii saudyjskiej",  plAdj: "saudyjski" },
  { key: "israel",      en: "israel",         ruLoc: "в израиле",           ruAdj: "израильский",       plLoc: "w izraelu",             plAdj: "izraelski" },
  { key: "kuwait",      en: "kuwait",         ruLoc: "в кувейте",           ruAdj: "кувейтский",        plLoc: "w kuwejcie",            plAdj: "kuwejcki" },
  { key: "oman",        en: "oman",           ruLoc: "в омане",             ruAdj: "оманский",          plLoc: "w omanie",              plAdj: "omański" },
  { key: "bahrain",     en: "bahrain",        ruLoc: "в бахрейне",          ruAdj: "бахрейнский",       plLoc: "w bahrajnie",           plAdj: "bahrajski" },
  // ------------------------------------------------------------ Америка --
  { key: "usa",         en: "usa",            ruLoc: "в сша",               ruAdj: "американский",      plLoc: "w usa",                 plAdj: "amerykański" },
  { key: "canada",      en: "canada",         ruLoc: "в канаде",            ruAdj: "канадский",         plLoc: "w kanadzie",            plAdj: "kanadyjski" },
  { key: "mexico",      en: "mexico",         ruLoc: "в мексике",           ruAdj: "мексиканский",      plLoc: "w meksyku",             plAdj: "meksykański" },
  { key: "brazil",      en: "brazil",         ruLoc: "в бразилии",          ruAdj: "бразильский",       plLoc: "w brazylii",            plAdj: "brazylijski" },
  { key: "argentina",   en: "argentina",      ruLoc: "в аргентине",         ruAdj: "аргентинский",      plLoc: "w argentynie",          plAdj: "argentyński" },
  // -------------------------------------------- Азия и Тихий океан --
  { key: "singapore",   en: "singapore",      ruLoc: "в сингапуре",         ruAdj: "сингапурский",      plLoc: "w singapurze",          plAdj: "singapurski" },
  { key: "hongkong",    en: "hong kong",      ruLoc: "в гонконге",          ruAdj: "гонконгский",       plLoc: "w hongkongu",           plAdj: "hongkoński" },
  { key: "thailand",    en: "thailand",       ruLoc: "в таиланде",          ruAdj: "тайский",           plLoc: "w tajlandii",           plAdj: "tajski" },
  { key: "vietnam",     en: "vietnam",        ruLoc: "во вьетнаме",         ruAdj: "вьетнамский",       plLoc: "w wietnamie",           plAdj: "wietnamski" },
  { key: "indonesia",   en: "indonesia",      ruLoc: "в индонезии",         ruAdj: "индонезийский",     plLoc: "w indonezji",           plAdj: "indonezyjski" },
  { key: "malaysia",    en: "malaysia",       ruLoc: "в малайзии",          ruAdj: "малайзийский",      plLoc: "w malezji",             plAdj: "malezyjski" },
  { key: "japan",       en: "japan",          ruLoc: "в японии",            ruAdj: "японский",          plLoc: "w japonii",             plAdj: "japoński" },
  { key: "korea",       en: "south korea",    ruLoc: "в южной корее",       ruAdj: "корейский",         plLoc: "w korei południowej",   plAdj: "koreański" },
  { key: "australia",   en: "australia",      ruLoc: "в австралии",         ruAdj: "австралийский",     plLoc: "w australii",           plAdj: "australijski" },
  { key: "newzealand",  en: "new zealand",    ruLoc: "в новой зеландии",    ruAdj: "новозеландский",    plLoc: "w nowej zelandii",      plAdj: "nowozelandzki" },
  // ------------------------------------------- Средняя Азия и Африка --
  { key: "kazakhstan",  en: "kazakhstan",     ruLoc: "в казахстане",        ruAdj: "казахстанский",     plLoc: "w kazachstanie",        plAdj: "kazachski" },
  { key: "uzbekistan",  en: "uzbekistan",     ruLoc: "в узбекистане",       ruAdj: "узбекский",         plLoc: "w uzbekistanie",        plAdj: "uzbecki" },
  { key: "kyrgyzstan",  en: "kyrgyzstan",     ruLoc: "в кыргызстане",       ruAdj: "киргизский",        plLoc: "w kirgistanie",         plAdj: "kirgiski" },
  { key: "southafrica", en: "south africa",   ruLoc: "в юар",               ruAdj: "южноафриканский",   plLoc: "w rpa",                 plAdj: "południowoafrykański" },
  { key: "morocco",     en: "morocco",        ruLoc: "в марокко",           ruAdj: "марокканский",      plLoc: "w maroku",              plAdj: "marokański" },
  { key: "egypt",       en: "egypt",          ruLoc: "в египте",            ruAdj: "египетский",        plLoc: "w egipcie",             plAdj: "egipski" },
  // ------------------------------------ дополнение 09.11.2026 --
  { key: "iceland",     en: "iceland",        ruLoc: "в исландии",          ruAdj: "исландский",        plLoc: "na islandii",           plAdj: "islandzki" },
  { key: "bosnia",      en: "bosnia",         ruLoc: "в боснии",            ruAdj: "боснийский",        plLoc: "w bośni",               plAdj: "bośniacki" },
  { key: "macedonia",   en: "north macedonia", ruLoc: "в северной македонии", ruAdj: "македонский",     plLoc: "w macedonii północnej", plAdj: "macedoński" },
  { key: "philippines", en: "philippines",    ruLoc: "на филиппинах",       ruAdj: "филиппинский",      plLoc: "na filipinach",         plAdj: "filipiński" },
  { key: "taiwan",      en: "taiwan",         ruLoc: "на тайване",          ruAdj: "тайваньский",       plLoc: "na tajwanie",           plAdj: "tajwański" },
  { key: "china",       en: "china",          ruLoc: "в китае",             ruAdj: "китайский",         plLoc: "w chinach",             plAdj: "chiński" },
  { key: "chile",       en: "chile",          ruLoc: "в чили",              ruAdj: "чилийский",         plLoc: "w chile",               plAdj: "chilijski" },
  { key: "colombia",    en: "colombia",       ruLoc: "в колумбии",          ruAdj: "колумбийский",      plLoc: "w kolumbii",            plAdj: "kolumbijski" },
  { key: "peru",        en: "peru",           ruLoc: "в перу",              ruAdj: "перуанский",        plLoc: "w peru",                plAdj: "peruwiański" },
  { key: "costarica",   en: "costa rica",     ruLoc: "в коста-рике",        ruAdj: "костариканский",    plLoc: "w kostaryce",           plAdj: "kostarykański" },
  { key: "panama",      en: "panama",         ruLoc: "в панаме",            ruAdj: "панамский",         plLoc: "w panamie",             plAdj: "panamski" },
  { key: "uruguay",     en: "uruguay",        ruLoc: "в уругвае",           ruAdj: "уругвайский",       plLoc: "w urugwaju",            plAdj: "urugwajski" },
  { key: "dominicana",  en: "dominican republic", ruLoc: "в доминикане",    ruAdj: "доминиканский",     plLoc: "na dominikanie",        plAdj: "dominikański" },
  { key: "nigeria",     en: "nigeria",        ruLoc: "в нигерии",           ruAdj: "нигерийский",       plLoc: "w nigerii",             plAdj: "nigeryjski" },
  { key: "kenya",       en: "kenya",          ruLoc: "в кении",             ruAdj: "кенийский",         plLoc: "w kenii",               plAdj: "kenijski" },
  { key: "ghana",       en: "ghana",          ruLoc: "в гане",              ruAdj: "ганский",           plLoc: "w ghanie",              plAdj: "ghański" },
  { key: "tunisia",     en: "tunisia",        ruLoc: "в тунисе",            ruAdj: "тунисский",         plLoc: "w tunezji",             plAdj: "tunezyjski" },
  { key: "jordan",      en: "jordan",         ruLoc: "в иордании",          ruAdj: "иорданский",        plLoc: "w jordanii",            plAdj: "jordański" },
  { key: "lebanon",     en: "lebanon",        ruLoc: "в ливане",            ruAdj: "ливанский",         plLoc: "w libanie",             plAdj: "libański" },
];

/** Формы страны для языка: loc — предложная с предлогом, adj — прилагательное. */
function formFor(row, lang) {
  if (lang === "ru") return { loc: row.ruLoc, adj: row.ruAdj };
  if (lang === "pl") return { loc: row.plLoc, adj: row.plAdj };
  return { loc: `in ${row.en}`, adj: row.en };
}

module.exports = { COUNTRY_TABLE, formFor };
