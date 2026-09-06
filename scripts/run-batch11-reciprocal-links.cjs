const { client, key } = require("./create-batch1-warsaw.cjs");

const CLINIC = { pl: "/pl/oferty/pozycjonowanie-strony-przychodni-warszawa", ru: "/ru/uslugi/prodvizhenie-saita-medicinskoy-kliniki-varshava" };
const RESTAURANT = { pl: "/pl/oferty/pozycjonowanie-strony-restauracji-warszawa", ru: "/ru/uslugi/prodvizhenie-saita-restorana-varshava" };
const DENTAL = { pl: "/pl/oferty/pozycjonowanie-strony-gabinetu-stomatologicznego-warszawa", ru: "/ru/uslugi/prodvizhenie-saita-stomatologii-varshava" };
const WARSAW_DEV = { pl: "/pl/tworzenie-stron-internetowych-warszawa", ru: "/ru/razrabotka-saitov-varshava" };
const MEDTOURISM = { pl: "/pl/oferty/pozycjonowanie-kliniki-na-pacjentow-z-niemiec", ru: "/ru/uslugi/prodvizhenie-kliniki-v-polshe-na-nemeckih-pacientov" };
const RESTAURANT_DEV = { pl: "/pl/strona-dla-restauracji", ru: "/ru/sait-dlya-restorana" };
const LOCAL_SEO = { pl: "/pl/oferty/pozycjonowanie-lokalne", ru: "/ru/uslugi/lokalnoe-seo-prodvizhenie" };

function trailerBlock(segments) {
  const markDefs = [];
  const children = [];
  for (const seg of segments) {
    if (seg.href) {
      const defKey = key();
      markDefs.push({ _key: defKey, _type: "link", href: seg.href });
      children.push({ _key: key(), _type: "span", marks: [defKey], text: seg.text });
    } else {
      children.push({ _key: key(), _type: "span", marks: [], text: seg.text });
    }
  }
  return { _key: key(), _type: "block", style: "normal", markDefs, children };
}

async function appendParagraph(id, wrapperKey, lastKey, segments) {
  const block = trailerBlock(segments);
  await client
    .patch(id)
    .insert("after", `contentBlocks[_key=="${wrapperKey}"].content[_key=="${lastKey}"]`, [block])
    .commit();
  return block._key;
}

async function main() {
  // ---- Clinic: paragraph A (dental + medtourism differentiation) ----
  let lastKey = await appendParagraph(
    "singlepage-seo-przychodnia-warszawa.pl", "ad09e6979ff3", "d08263a4f138",
    [
      { text: "Warszawska strona stomatologii", href: DENTAL.pl },
      { text: " adresuje inny przypadek: tam pacjent już wie, że potrzebuje dentysty, tutaj nie wie, do jakiego specjalisty iść. " },
      { text: "Pozycjonowanie kliniki na pacjentów z Niemiec", href: MEDTOURISM.pl },
      { text: " opisuje inny profil pacjenta — zagranicznego, a nie warszawskiego." },
    ]
  );
  // paragraph B (Local SEO + Warsaw dev-landing)
  await appendParagraph(
    "singlepage-seo-przychodnia-warszawa.pl", "ad09e6979ff3", lastKey,
    [
      { text: "Ten sam mechanizm widoczności w mapach, który wpływa na wybór placówki przez pacjenta, opisujemy szerzej w " },
      { text: "artykule o pozycjonowaniu lokalnym", href: LOCAL_SEO.pl },
      { text: ". Inne projekty w Warszawie są zebrane na " },
      { text: "stronie tworzenia stron internetowych w Warszawie", href: WARSAW_DEV.pl },
      { text: "." },
    ]
  );
  console.log("clinic.pl: added 2 trailer paragraphs");

  lastKey = await appendParagraph(
    "singlepage-seo-przychodnia-warszawa.ru", "5033d0714176", "0daa58b63340",
    [
      { text: "Варшавская страница стоматологии", href: DENTAL.ru },
      { text: " описывает другой случай: там пациент уже знает, что ему нужен стоматолог, здесь — не знает, к какому специалисту идти. " },
      { text: "Продвижение и раскрутка клиники в Польше на немецких пациентов", href: MEDTOURISM.ru },
      { text: " описывает другой профиль пациента — иностранного, а не варшавского." },
    ]
  );
  await appendParagraph(
    "singlepage-seo-przychodnia-warszawa.ru", "5033d0714176", lastKey,
    [
      { text: "Тот же механизм видимости в картах, который влияет на выбор пациентом учреждения, подробнее разобран в " },
      { text: "статье о локальном SEO-продвижении", href: LOCAL_SEO.ru },
      { text: ". Другие проекты в Варшаве собраны на " },
      { text: "странице разработки сайтов в Варшаве", href: WARSAW_DEV.ru },
      { text: "." },
    ]
  );
  console.log("clinic.ru: added 2 trailer paragraphs");

  // ---- Restaurant: restaurant-dev + Warsaw geo-landing ----
  await appendParagraph(
    "singlepage-seo-restauracja-warszawa.pl", "64e2da0867ab", "3d8f6ba0c7cd",
    [
      { text: "Jeśli restauracja potrzebuje nowej strony, a nie tylko widoczności istniejącej, to osobna usługa: " },
      { text: "tworzenie strony dla restauracji", href: RESTAURANT_DEV.pl },
      { text: ". Inne projekty w Warszawie są zebrane na " },
      { text: "stronie tworzenia stron internetowych w Warszawie", href: WARSAW_DEV.pl },
      { text: "." },
    ]
  );
  await appendParagraph(
    "singlepage-seo-restauracja-warszawa.ru", "dd6a4b4a5c58", "bb0285e93aa4",
    [
      { text: "Если ресторану нужен новый сайт, а не только видимость существующего, это отдельная услуга: " },
      { text: "сайт для ресторана", href: RESTAURANT_DEV.ru },
      { text: ". Другие проекты в Варшаве собраны на " },
      { text: "странице разработки сайтов в Варшаве", href: WARSAW_DEV.ru },
      { text: "." },
    ]
  );
  console.log("restaurant.pl/.ru: added trailer paragraph");

  // ---- Dental: reciprocal link to clinic ----
  await appendParagraph(
    "singlepage-seo-stomatologia-warszawa.pl", "dfd54d878694", "719ab85cf2de",
    [
      { text: "Warszawska strona przychodni", href: CLINIC.pl },
      { text: " adresuje inny przypadek: tam pacjent szuka po objawie i nie wie, do jakiego specjalisty iść, tutaj wiadomo, że potrzeba dentysty." },
    ]
  );
  await appendParagraph(
    "singlepage-seo-stomatologia-warszawa.ru", "0f502034f355", "de87d4c6aa17",
    [
      { text: "Варшавская страница медицинской клиники", href: CLINIC.ru },
      { text: " описывает другой случай: там пациент ищет по симптому и не знает, к какому специалисту идти, здесь известно, что нужен стоматолог." },
    ]
  );
  console.log("dental.pl/.ru: added reciprocal link to clinic");

  // ---- Warsaw dev-landing: add clinic + restaurant ----
  await appendParagraph(
    "singlepage-web-development-warsaw.pl", "9421a88ff3bc", "ec2c4e7cf3e9",
    [
      { text: "Do tego doszły jeszcze dwa projekty: " },
      { text: "pozycjonowanie strony przychodni w Warszawie", href: CLINIC.pl },
      { text: " i " },
      { text: "pozycjonowanie strony restauracji w Warszawie", href: RESTAURANT.pl },
      { text: "." },
    ]
  );
  await appendParagraph(
    "singlepage-web-development-warsaw.ru", "a783c7a337cc", "dd7f9b0ed388",
    [
      { text: "К этому добавились ещё два проекта: " },
      { text: "продвижение сайта медицинской клиники в Варшаве", href: CLINIC.ru },
      { text: " и " },
      { text: "продвижение сайта ресторана в Варшаве", href: RESTAURANT.ru },
      { text: "." },
    ]
  );
  console.log("Warsaw dev-landing: added clinic + restaurant");

  // ---- Medtourism: reciprocal link to clinic ----
  await appendParagraph(
    "singlepage-medtourism-de-pl", "778e9ac437bc", "f985ca9b6572",
    [
      { text: "Warszawska przychodnia", href: CLINIC.pl },
      { text: " obsługuje inny profil pacjenta niż opisany tutaj — miejscowego, a nie przyjezdnego z Niemiec." },
    ]
  );
  await appendParagraph(
    "singlepage-medtourism-de-pl.ru", "e2325f21fce9", "f5393e694c7b",
    [
      { text: "Варшавская клиника", href: CLINIC.ru },
      { text: " обслуживает другой профиль пациента, чем описанный здесь, — местного, а не приезжего из Германии." },
    ]
  );
  console.log("medtourism.pl/.ru: added reciprocal link to clinic");

  // ---- Services hub curated Warsaw section: add clinic + restaurant ----
  await client
    .patch("631d883e-6f87-4346-9c6d-48b596c2daa7")
    .append('contentBlocks[title=="SEO dla firm w Warszawie"].items', [
      { _key: key(), _type: "reference", _ref: "singlepage-seo-przychodnia-warszawa.pl" },
      { _key: key(), _type: "reference", _ref: "singlepage-seo-restauracja-warszawa.pl" },
    ])
    .commit();
  await client
    .patch("3774c0a1-8857-4149-be24-9a357af4be00")
    .append('contentBlocks[title=="SEO для компаний в Варшаве"].items', [
      { _key: key(), _type: "reference", _ref: "singlepage-seo-przychodnia-warszawa.ru" },
      { _key: key(), _type: "reference", _ref: "singlepage-seo-restauracja-warszawa.ru" },
    ])
    .commit();
  console.log("services hub PL/RU: added clinic + restaurant to curated Warsaw section (now 8 items each)");
}

main().catch((e) => { console.error(e); process.exit(1); });
