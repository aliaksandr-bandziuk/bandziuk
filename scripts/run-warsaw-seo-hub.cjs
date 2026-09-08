// scripts/run-warsaw-seo-hub.cjs
//
// Создаёт страницу под запрос «pozycjonowanie warszawa» (720/мес, тренд +22 %,
// конкуренция 13 — самая низкая среди польских коммерческих запросов выгрузки)
// в двух локалях, PL и RU, и правит metaTitle головной страницы, чтобы две
// страницы не конкурировали за один запрос.
//
// Локали PL+RU без EN — так же, как созданы восемь нишевых варшавских страниц
// (см. run-batch1.cjs: i18n-группа там из двух локалей).
//
//   node scripts/run-warsaw-seo-hub.cjs          → сухой прогон, ничего не пишет
//   node scripts/run-warsaw-seo-hub.cjs --apply  → создаёт транзакцией
const fs = require("fs");
const path = require("path");
const groq = String.raw;
const { parseTaggedContent } = require("./parse-tagged-content.cjs");
const {
  client, ref, key, SERVICES_HUB,
  benefitsBlock, gridBlock, stepsBlock, faqBlock, textContent,
} = require("./create-batch1-warsaw.cjs");

const APPLY = process.argv.includes("--apply");
const BASE = "singlepage-pozycjonowanie-warszawa";
const DRAFT = path.resolve(__dirname, "../drafts/warsaw-seo-hub-tagged-content.md");

// Ссылки в теле SEO_TEXT. Все адреса сверены по инвентарю 08.09.
const LINKS = {
  pl: {
    LOCAL: "/pl/oferty/pozycjonowanie-lokalne",
    CASE_FELGI: "/pl/portfolio/przebudowa-strony-felgilab-wordpress",
    CASE_REMONT: "/pl/portfolio/strona-dla-firmy-remontowej-i-inwestycyjnej-warszawa",
    CASE_WARSZTAT: "/pl/portfolio/seo-warsztatu-i-wzrost-konwersji",
    N_LAW: "/pl/oferty/pozycjonowanie-strony-kancelarii-prawnej-warszawa",
    N_DENT: "/pl/oferty/pozycjonowanie-strony-gabinetu-stomatologicznego-warszawa",
    N_CLINIC: "/pl/oferty/pozycjonowanie-strony-przychodni-warszawa",
    N_AUTO: "/pl/oferty/pozycjonowanie-strony-warsztatu-samochodowego-warszawa",
    N_BEAUTY: "/pl/oferty/pozycjonowanie-strony-salonu-kosmetycznego-warszawa",
    N_REST: "/pl/oferty/pozycjonowanie-strony-restauracji-warszawa",
    N_BUILD: "/pl/oferty/pozycjonowanie-strony-firmy-budowlanej-warszawa",
    N_CLEAN: "/pl/oferty/pozycjonowanie-strony-firmy-sprzatajacej-warszawa",
  },
  ru: {
    LOCAL: "/ru/uslugi/lokalnoe-seo-prodvizhenie",
    CASE_FELGI: "/ru/portfolio/pererabotka-saita-felgilab-wordpress",
    CASE_REMONT: "/ru/portfolio/sayt-dlya-remontnoy-i-investicionnoy-kompanii",
    CASE_WARSZTAT: "/ru/portfolio/seo-i-ux-dlya-avtoremontnoi-kompanii",
    N_LAW: "/ru/uslugi/prodvizhenie-saita-yurista-varshava",
    N_DENT: "/ru/uslugi/prodvizhenie-saita-stomatologii-varshava",
    N_CLINIC: "/ru/uslugi/prodvizhenie-saita-medicinskoy-kliniki-varshava",
    N_AUTO: "/ru/uslugi/prodvizhenie-saita-avtoservisa-varshava",
    N_BEAUTY: "/ru/uslugi/prodvizhenie-saita-salona-krasoty-varshava",
    N_REST: "/ru/uslugi/prodvizhenie-saita-restorana-varshava",
    N_BUILD: "/ru/uslugi/prodvizhenie-saita-stroitelnoy-kompanii-varshava",
    N_CLEAN: "/ru/uslugi/prodvizhenie-saita-kliningovoy-kompanii-varshava",
  },
};

// Якорь → идентификатор ссылки. Каждая фраза обязана встречаться в теле
// ровно один раз; insertLink падает и на отсутствии, и на неоднозначности.
const ANCHORS = {
  pl: [
    ["warsztatu renowacji felg", "CASE_FELGI"],
    ["warszawskiej firmy remontowo-inwestycyjnej", "CASE_REMONT"],
    ["warszawskiego warsztatu samochodowego", "CASE_WARSZTAT"],
    ["kancelaria prawna", "N_LAW"],
    ["gabinet stomatologiczny", "N_DENT"],
    ["przychodnia", "N_CLINIC"],
    ["warsztat samochodowy", "N_AUTO"],
    ["salon kosmetyczny", "N_BEAUTY"],
    ["restauracja", "N_REST"],
    ["firma budowlana", "N_BUILD"],
    ["firma sprzątająca", "N_CLEAN"],
    ["pozycjonowaniu lokalnym", "LOCAL"],
  ],
  ru: [
    ["мастерской по реставрации дисков", "CASE_FELGI"],
    ["варшавской ремонтно-инвестиционной компании", "CASE_REMONT"],
    ["варшавской автомастерской", "CASE_WARSZTAT"],
    ["юрист", "N_LAW"],
    ["стоматология", "N_DENT"],
    ["медицинская клиника", "N_CLINIC"],
    ["автосервис", "N_AUTO"],
    ["салон красоты", "N_BEAUTY"],
    ["ресторан", "N_REST"],
    ["строительная компания", "N_BUILD"],
    ["клининговая компания", "N_CLEAN"],
    ["локальное SEO", "LOCAL"],
  ],
};

// Головная страница: убрать «Warszawa» из metaTitle, чтобы не конкурировала
// с этой страницей за один запрос. Поставлено сегодня, снимается осознанно.
const HEAD_FIX = {
  lang: "pl",
  slug: "strategia-i-optymalizacja-seo",
  from: "Pozycjonowanie stron internetowych — Warszawa | Bandziuk",
  to: "Pozycjonowanie stron internetowych | Bandziuk",
};

function insertLink(body, phrase, linkId) {
  const idx = body.indexOf(phrase);
  if (idx === -1) throw new Error(`якорь не найден: "${phrase}"`);
  if (body.indexOf(phrase, idx + 1) !== -1) throw new Error(`якорь не уникален: "${phrase}"`);
  return body.slice(0, idx) + `[[${phrase}|${linkId}]]` + body.slice(idx + phrase.length);
}

function buildDoc(parsed, lang, bannerAssetId, altText) {
  let body = parsed.seoText[lang].body;
  for (const [phrase, id] of ANCHORS[lang]) body = insertLink(body, phrase, id);
  return {
    _id: `${BASE}.${lang}`,
    _type: "singlepage",
    language: lang,
    pageType: "service",
    title: parsed.hero[lang].headline,
    slug: { _type: "localizedSlug", [lang]: { _type: "slug", current: parsed.slug[lang] } },
    seo: { metaTitle: parsed.meta[lang].metaTitle, metaDescription: parsed.meta[lang].metaDescription },
    excerpt: parsed.hero[lang].excerpt,
    areaServed: ["Poland"],
    parentPage: ref(SERVICES_HUB[lang]),
    previewImage: { _type: "image", asset: ref(bannerAssetId), alt: altText },
    allowIntroBlock: true,
    contentBlocks: [
      benefitsBlock(parsed.pain[lang].title, parsed.pain[lang].items),
      gridBlock(parsed.features[lang].title, parsed.features[lang].items),
      textContent(parsed.seoText[lang].title, body, LINKS[lang]),
      stepsBlock(parsed.steps[lang].title, parsed.steps[lang].items),
      faqBlock(parsed.faq[lang].title, parsed.faq[lang].items),
    ],
  };
}

const ALT = {
  pl: "Pozycjonowanie stron internetowych w Warszawie",
  ru: "Продвижение сайтов в Варшаве",
};

async function main() {
  const report = [];
  const say = (l = "") => { console.log(l); report.push(l); };

  const parsed = parseTaggedContent(DRAFT);

  // ── проверка, что такой страницы ещё нет
  for (const lang of ["pl", "ru"]) {
    const clash = await client.fetch(
      groq`*[_type == "singlepage" && language == $lang && slug[$lang].current == $slug][0]{_id}`,
      { lang, slug: parsed.slug[lang] },
    );
    if (clash) {
      say(`! [${lang}] slug "${parsed.slug[lang]}" уже занят документом ${clash._id}. Останавливаюсь.`);
      process.exit(1);
    }
    const idClash = await client.getDocument(`${BASE}.${lang}`);
    if (idClash) {
      say(`! документ ${BASE}.${lang} уже существует. Останавливаюсь.`);
      process.exit(1);
    }
  }

  // ── баннер: переиспользуем изображение страницы локального SEO,
  //    чтобы не выдумывать картинку. Заменить можно потом в Студии.
  const banners = {};
  for (const [lang, slug] of [["pl", "pozycjonowanie-lokalne"], ["ru", "lokalnoe-seo-prodvizhenie"]]) {
    const src = await client.fetch(
      groq`*[_type == "singlepage" && language == $lang && slug[$lang].current == $slug][0]{
        "asset": previewImage.asset._ref
      }`,
      { lang, slug },
    );
    if (!src || !src.asset) {
      say(`! не нашёл previewImage у ${lang}:${slug} — нужен баннер, останавливаюсь.`);
      process.exit(1);
    }
    banners[lang] = src.asset;
  }
  say(`Баннер переиспользован со страницы локального SEO: ${banners.pl} / ${banners.ru}`);
  say("Если нужна своя картинка — поменяйте previewImage в Студии после создания.");

  // ── сборка
  const docs = [];
  for (const lang of ["pl", "ru"]) {
    const doc = buildDoc(parsed, lang, banners[lang], ALT[lang]);
    docs.push(doc);
    const tc = doc.contentBlocks.find((b) => b._type === "textContent");
    const links = (JSON.stringify(tc).match(/"link"/g) || []).length;
    say(`\n${"=".repeat(70)}\n[${lang}] ${doc._id}`);
    say(`  URL: /${lang}/${lang === "pl" ? "oferty" : "uslugi"}/${parsed.slug[lang]}`);
    say(`  H1: ${doc.title}`);
    say(`  metaTitle [${doc.seo.metaTitle.length}]: ${doc.seo.metaTitle}`);
    say(`  metaDescription [${doc.seo.metaDescription.length}]`);
    say(`  блоки: ${doc.contentBlocks.map((b) => b._type).join(" > ")}`);
    say(`  H2 текста: ${parsed.seoText[lang].title}`);
    say(`  слов в теле: ${parsed.seoText[lang].body.split(/\s+/).length}, ссылок: ${links} (ожидалось ${ANCHORS[lang].length})`);
    if (links !== ANCHORS[lang].length) {
      say("  ! число ссылок не совпало — останавливаюсь");
      process.exit(1);
    }
    say(`  пункты: боли ${parsed.pain[lang].items.length}, возможности ${parsed.features[lang].items.length}, шаги ${parsed.steps[lang].items.length}, FAQ ${parsed.faq[lang].items.length}`);
  }

  // ── правка головной страницы
  const head = await client.fetch(
    groq`*[_type == "singlepage" && language == $lang && slug[$lang].current == $slug][0]{
      _id, "mt": seo.metaTitle
    }`,
    { lang: HEAD_FIX.lang, slug: HEAD_FIX.slug },
  );
  let headPatch = null;
  say(`\n${"=".repeat(70)}\nГоловная страница /pl/oferty/${HEAD_FIX.slug}`);
  if (!head) {
    say("  ! не найдена — правка metaTitle пропускается");
  } else if (head.mt === HEAD_FIX.to) {
    say("  = metaTitle уже без «Warszawa»");
  } else if (head.mt !== HEAD_FIX.from) {
    say(`  ! metaTitle не тот, что ожидался. Сейчас: "${head.mt}". Правку пропускаю, разберитесь вручную.`);
  } else {
    say(`  было:  ${head.mt}`);
    say(`  будет: ${HEAD_FIX.to}`);
    headPatch = head._id;
  }

  say("");
  if (APPLY) {
    const tx = client.transaction();
    docs.forEach((d) => tx.create(d));
    tx.create({
      _id: `${BASE}.i18n`,
      _type: "translation.metadata",
      documentId: BASE,
      translations: [
        { _key: "pl", value: ref(`${BASE}.pl`) },
        { _key: "ru", value: ref(`${BASE}.ru`) },
      ],
    });
    if (headPatch) tx.patch(headPatch, { set: { "seo.metaTitle": HEAD_FIX.to } });
    const res = await tx.commit();
    say(`→ создано: ${res.results.map((r) => r.id).join(", ")}`);
  } else {
    say("Это сухой прогон, в Sanity ничего не записано.");
    say(`Будет создано: ${BASE}.pl, ${BASE}.ru, ${BASE}.i18n` + (headPatch ? " + правка metaTitle головной" : ""));
    say("Применить: node scripts/run-warsaw-seo-hub.cjs --apply");
  }

  const name = APPLY ? "warsaw-seo-hub-applied.txt" : "warsaw-seo-hub-dry-run.txt";
  fs.writeFileSync(path.resolve(__dirname, "../drafts/" + name), report.join("\n"), "utf8");
  console.log(`\nОтчёт: drafts/${name}`);
}

main().catch((e) => { console.error("Ошибка:", e.message); process.exit(1); });
