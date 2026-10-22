// scripts/apply-onpage-headings.cjs
//
// Ключевые слова в заголовках существующих страниц — по списку
// research/pseo/onpage.csv (26 страниц) плюс дефекты, найденные при разборе.
//
// Правило владельца: запрос стоит в H1 или подзаголовке (H2/H3), а не только в
// теле или meta title; каждый заголовок понятен сам по себе.
//
// Как устроено:
//   — каждая правка — пара «было → стало» с ТОЧНЫМ текстом. Если на странице
//     текст уже другой или встречается дважды, правка пропускается с ошибкой;
//   — H1 меняется через поле `heading` (переопределение H1, см. PropertyIntro).
//     `title` остаётся коротким: это подпись в хлебных крошках и карточках;
//   — вопросы FAQ на странице выводятся как H3 (@szhsin/react-accordion),
//     поэтому ключ можно ставить в них;
//   — все правки одной страницы уходят одной транзакцией с проверкой ревизии:
//     если документ успели изменить в студии, транзакция откатится.
//
//   node scripts/apply-onpage-headings.cjs            → сухой прогон: было → стало
//                                                       и текст под заголовком
//   node scripts/apply-onpage-headings.cjs --offline  → проверка по pages-dump.json,
//                                                       без сети
//   node scripts/apply-onpage-headings.cjs --apply    → применяет
//   node scripts/apply-onpage-headings.cjs --check-lastmod
//                                                     → сверяет <lastmod> в sitemap
//                                                       на локалхосте с датой правки
//
// lastmod. Sitemap (src/app/api/sitemap/route.ts) берёт <lastmod> из _updatedAt
// документа, а любая запись через API его обновляет — отдельно трогать нечего.
// Вебхук Sanity срабатывает и на правки через API: страницы перестраиваются
// (revalidateTag), адреса уходят в IndexNow. Боевой sitemap кэшируется CDN на
// час (s-maxage=3600). --check-lastmod проверяет это на локалхосте, не на Vercel.

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const APPLY = process.argv.includes("--apply");
const OFFLINE = process.argv.includes("--offline");
const CHECK = process.argv.includes("--check-lastmod");
const LOCAL = process.env.LOCAL_URL || "http://localhost:3000";

// op: heading | meta | rename | remove-faq | add-faq
const EDITS = [
  // ---------------------------------------------------------------- PL --
  { id: "b35e57c9-9cce-4ebd-ab05-5121ffa38fef", url: "/pl/tworzenie-stron-internetowych", q: "tworzenie stron internetowych (5400)",
    op: "heading", from: "Tworzenie stron na Next.js, z SEO technicznym w cenie", to: "Tworzenie stron internetowych na Next.js z SEO technicznym w cenie" },
  { id: "b35e57c9-9cce-4ebd-ab05-5121ffa38fef", url: "/pl/tworzenie-stron-internetowych", q: "tworzenie stron internetowych (5400)",
    op: "meta", from: "Tworzenie stron na Next.js — SEO techniczne w cenie", to: "Tworzenie stron internetowych — Next.js, SEO techniczne w cenie" },

  { id: "singlepage-ecommerce-seo.pl", url: "/pl/pozycjonowanie-sklepow-internetowych", q: "pozycjonowanie strony sklepu internetowego (170)",
    op: "rename", from: "Gdzie pozycjonowanie sklepu zarabia: na kategoriach, nie na stronie głównej", to: "Pozycjonowanie strony sklepu internetowego: zarabiają kategorie, nie strona główna" },
  { id: "singlepage-ecommerce-seo.pl", url: "/pl/pozycjonowanie-sklepow-internetowych", q: "seo dla sklepu internetowego (320)",
    op: "rename", from: "Czym pozycjonowanie sklepu różni się od zwykłego SEO?", to: "Czym SEO dla sklepu internetowego różni się od zwykłego SEO?" },

  { id: "singlepage-pozycjonowanie-warszawa.pl", url: "/pl/pozycjonowanie-stron-warszawa", q: "specjalista seo warszawa (30)",
    op: "rename", from: "Ile to kosztuje?", to: "Ile kosztuje pozycjonowanie strony u specjalisty SEO w Warszawie?" },
  { id: "singlepage-pozycjonowanie-warszawa.pl", url: "/pl/pozycjonowanie-stron-warszawa", q: "agencja seo warszawa (880)",
    op: "add-faq", after: "Ile to kosztuje?",
    to: "Specjalista SEO czy agencja SEO w Warszawie — czym różni się współpraca?",
    answer: [
      "W agencji SEO w Warszawie pracę zwykle dzieli się między opiekuna klienta, specjalistę SEO i programistę, a klient rozmawia głównie z opiekunem. Tutaj rozmawiasz bezpośrednio ze specjalistą, który robi audyt, sam wprowadza poprawki w kodzie strony i odpowiada za wynik.",
      "Nie ma przekazywania zadań między działami, więc poprawka nie czeka w kolejce u programisty. Ograniczenie jest odwrotną stroną tej zalety: jedna osoba prowadzi mniej projektów naraz niż agencja.",
    ] },
  { id: "singlepage-pozycjonowanie-warszawa.pl", url: "/pl/pozycjonowanie-stron-warszawa", q: "заголовок без предмета",
    op: "rename", from: "Dlaczego „pierwsze miejsce w Warszawie\" nic nie znaczy", to: "Dlaczego „pierwsze miejsce w Google w Warszawie\" nic nie znaczy" },

  { id: "singlepage-photographer.pl", url: "/pl/strona-dla-fotografa", q: "strona internetowa dla fotografa (140)",
    op: "rename", from: "Styl ocenia się w kilka sekund, a gatunki się nie mieszają", to: "Strona internetowa dla fotografa: styl widać w kilka sekund, a gatunki się nie mieszają" },

  { id: "singlepage-restaurant.pl", url: "/pl/strona-dla-restauracji", q: "strona internetowa dla restauracji (110)",
    op: "rename", from: "Menu jest stroną", to: "Strona internetowa dla restauracji: menu jako podstrony, a nie PDF" },

  { id: "singlepage-logistics-company.pl", url: "/pl/strona-dla-firmy-transportowej", q: "strona internetowa dla firmy transportowej (90)",
    op: "heading", from: "", to: "Tworzenie strony internetowej dla firmy transportowej" },
  { id: "singlepage-logistics-company.pl", url: "/pl/strona-dla-firmy-transportowej", q: "strona internetowa dla firmy transportowej (90)",
    op: "meta", from: "Strona dla firmy transportowej | Bandziuk", to: "Strona internetowa dla firmy transportowej | Bandziuk" },
  { id: "singlepage-logistics-company.pl", url: "/pl/strona-dla-firmy-transportowej", q: "заголовок без предмета",
    op: "rename", from: "Strona obsługująca dwa rynki, które nigdy się nie spotykają", to: "Strona firmy transportowej dla dwóch grup: klientów i kierowców" },

  { id: "singlepage-hotel-website.pl", url: "/pl/strona-dla-hotelu", q: "strona internetowa dla hotelu (70)",
    op: "heading", from: "", to: "Tworzenie strony internetowej dla hotelu" },
  { id: "singlepage-hotel-website.pl", url: "/pl/strona-dla-hotelu", q: "заголовок без предмета",
    op: "rename", from: "Arytmetyka rezerwacji bezpośredniej", to: "Strona hotelu i rezerwacje bezpośrednie bez prowizji portali" },

  { id: "singlepage-accounting-firm.pl", url: "/pl/strona-dla-biura-rachunkowego", q: "strona internetowa dla biura rachunkowego (70)",
    op: "heading", from: "", to: "Tworzenie strony internetowej dla biura rachunkowego" },
  { id: "singlepage-accounting-firm.pl", url: "/pl/strona-dla-biura-rachunkowego", q: "strona internetowa dla biura rachunkowego (70)",
    op: "meta", from: "Strona dla biura rachunkowego | Bandziuk", to: "Strona internetowa dla biura rachunkowego | Bandziuk" },

  { idBySlug: "pl|strona-dla-biura-podrozy", url: "/pl/strona-dla-biura-podrozy", q: "strona internetowa dla biura podróży (10)",
    op: "heading", from: "", to: "Tworzenie strony internetowej dla biura podróży" },
  { idBySlug: "pl|strona-dla-biura-podrozy", url: "/pl/strona-dla-biura-podrozy", q: "заголовок без предмета",
    op: "rename", from: "Pytanie, które każdy odwiedzający już sobie zadaje", to: "Co biuro podróży daje klientowi ponad samodzielną rezerwację — i jak pokazać to na stronie" },
  { idBySlug: "pl|strona-dla-biura-podrozy", url: "/pl/strona-dla-biura-podrozy", q: "strona internetowa dla biura podróży (10)",
    op: "meta", from: "Strona dla biura podróży | Bandziuk", to: "Strona internetowa dla biura podróży | Bandziuk" },

  // ---------------------------------------------------------------- EN --
  { id: "service-ai-search-readiness", url: "/ai-search-readiness", q: "ai search optimization (2900)",
    op: "heading", from: "", to: "AI search optimization: preparing a website for AI search" },
  { id: "service-ai-search-readiness", url: "/ai-search-readiness", q: "ai search optimization (2900)",
    op: "meta", from: "Preparing a Website for AI Search | Bandziuk", to: "AI Search Optimization: Preparing Your Website | Bandziuk" },
  { id: "service-ai-search-readiness", url: "/ai-search-readiness", q: "заголовок без предмета",
    op: "rename", from: "The limit", to: "What AI search optimization cannot guarantee" },

  { id: "26f33bcc-eaa6-4cbc-96a1-9135cf55431f", url: "/website-performance-and-code-audit", q: "website performance optimization (1000)",
    op: "heading", from: "", to: "Website Performance Optimization & Code Audit" },
  { id: "26f33bcc-eaa6-4cbc-96a1-9135cf55431f", url: "/website-performance-and-code-audit", q: "website performance optimization (1000)",
    op: "meta", from: "Website Performance & Code Audit — Speed and Stability", to: "Website Performance Optimization & Code Audit" },
  { id: "26f33bcc-eaa6-4cbc-96a1-9135cf55431f", url: "/website-performance-and-code-audit", q: "заголовок без предмета",
    op: "rename", from: "How My Audit Works", to: "How the website performance audit works" },
  { id: "26f33bcc-eaa6-4cbc-96a1-9135cf55431f", url: "/website-performance-and-code-audit", q: "заголовок без предмета",
    op: "rename", from: "Work Process", to: "Website performance optimization process, step by step" },
  { id: "26f33bcc-eaa6-4cbc-96a1-9135cf55431f", url: "/website-performance-and-code-audit", q: "заголовок без предмета",
    op: "rename", from: "Example Deliverables", to: "Example deliverables of a performance and code audit" },

  { id: "dc0a0998-d7e5-485a-b405-233ebfcb1630", url: "/seo-for-law-firms", q: "seo services for law firms (1300)",
    op: "rename", from: "Who This SEO Service Is For — And Who It Is Not For", to: "Who my SEO services for law firms are for — and who they are not for" },
  // Раздел 3 — о международных запросах (сухой прогон показал текст), поэтому
  // «Local SEO» туда не ставится. Локальному поиску — свой раздел 4.
  { id: "dc0a0998-d7e5-485a-b405-233ebfcb1630", url: "/seo-for-law-firms", q: "заголовок без предмета",
    op: "rename", from: "3. Jurisdiction and Cross-Border Queries", to: "3. International SEO for law firms: jurisdiction and cross-border queries" },
  { id: "dc0a0998-d7e5-485a-b405-233ebfcb1630", url: "/seo-for-law-firms", q: "local seo for law firms (1000)",
    op: "add-section", after: "3. Jurisdiction and Cross-Border Queries", style: "h3",
    to: "4. Local SEO for law firms: city and practice-area searches",
    answer: [
      "Most law firms do not need clients from abroad. They need clients from their own city, and those searches look different: “divorce lawyer in Warsaw”, “employment lawyer near me”. For them Google shows the map first and ordinary results second, so a firm can rank on the first page and still be out of sight.",
      "Local SEO for law firms works on both. For the map: a complete Google Business Profile with the right category for each practice, the same name, address and phone number everywhere the firm is listed, legal directories included, and client reviews collected within what the bar rules allow. For ordinary results: a separate page for each practice area in each city the firm actually serves, with the office address, the lawyers who handle these cases and the questions clients ask before the first consultation.",
      "A firm with one office needs one page per practice for its own city. Pages for cities without an office rarely reach the map, because distance between the office and the person searching is one of its main factors.",
    ] },

  { id: "9b8d7d33-0df4-4d4f-967c-9ff454a07a39", url: "/seo-for-real-estate", q: "seo for real estate agencies (70)",
    op: "heading", from: "", to: "SEO for Real Estate Agencies and Developers: Traffic, Rankings and Buyer Leads" },
  { id: "9b8d7d33-0df4-4d4f-967c-9ff454a07a39", url: "/seo-for-real-estate", q: "seo for real estate agencies (70)",
    op: "meta", from: "SEO for Real Estate: Organic Leads Without Paid Ad Dependence", to: "SEO for Real Estate Agencies — Organic Buyer Leads" },

  { id: "636f4976-f588-4f6c-a386-23feb6570fbf", url: "/website-design-for-models", q: "web design for models (170)",
    op: "rename", from: "Strategic Approach to Building a Model Portfolio Website", to: "Web design for models: a strategic approach to the portfolio website" },
  { id: "636f4976-f588-4f6c-a386-23feb6570fbf", url: "/website-design-for-models", q: "ошибка в заголовке",
    op: "rename", from: "When model needs a website", to: "When a model needs a personal website" },

  { id: "0e071d28-ee05-42a2-81a6-5be75b4264bc", url: "/seo-audit", q: "seo audit for small business (140)",
    op: "rename", from: "Is an SEO audit right for you?", to: "Is an SEO audit right for a small business?" },
  { id: "0e071d28-ee05-42a2-81a6-5be75b4264bc", url: "/seo-audit", q: "ошибка в заголовке",
    op: "rename", from: "What You Get After SEO Audit", to: "What you get after a website SEO audit" },

  { id: "923390d3-cf00-427c-bef1-2fdf903a7808", url: "/seo-for-auto-repair-shop", q: "local seo for auto repair shops (70)",
    op: "rename", from: "Who SEO for Auto Repair Shop Is and Is Not For", to: "Who local SEO for auto repair shops is for — and who it is not for" },
  { id: "923390d3-cf00-427c-bef1-2fdf903a7808", url: "/seo-for-auto-repair-shop", q: "русский вопрос на английской странице; дублирует «Do I need paid ads together with SEO?»",
    op: "remove-faq", from: "Работает ли SEO без рекламы?", keep: "Do I need paid ads together with SEO?" },

  { id: "f9269d94-976e-43cd-bacb-8ed3c60039cd", url: "/landing-page-development", q: "landing page for small business (40)",
    op: "rename", from: "What do I get with a landing page?", to: "What does a small business get with a custom landing page?" },
  { id: "f9269d94-976e-43cd-bacb-8ed3c60039cd", url: "/landing-page-development", q: "ошибка в заголовке",
    op: "rename", from: "Building Landing Page Process", to: "Landing page development process, step by step" },

  // ---------------------------------------------------------------- RU --
  { id: "a381d7a3-302c-4dc0-9362-2bc2e05790c7", url: "/ru/ceny", q: "стоимость продвижения сайта (1600)",
    op: "heading", from: "", to: "Стоимость продвижения и разработки сайта" },
  { id: "a381d7a3-302c-4dc0-9362-2bc2e05790c7", url: "/ru/ceny", q: "стоимость продвижения сайта (1600)",
    op: "meta", from: "Цены на SEO и разработку сайтов — сколько это стоит?", to: "Стоимость продвижения и разработки сайта — цены на SEO" },
  { id: "a381d7a3-302c-4dc0-9362-2bc2e05790c7", url: "/ru/ceny", q: "сколько стоит сайт (390)",
    op: "rename", from: "Разработка сайтов — ориентировочные цены", to: "Сколько стоит сайт: ориентировочные цены на разработку" },

  { id: "singlepage-ecommerce-seo.ru", url: "/ru/prodvizhenie-internet-magazina", q: "seo продвижение интернет-магазина (720)",
    op: "rename", from: "Где продвижение интернет-магазина зарабатывает: на категориях, а не на главной", to: "SEO-продвижение интернет-магазина: зарабатывают категории, а не главная" },
  { id: "singlepage-ecommerce-seo.ru", url: "/ru/prodvizhenie-internet-magazina", q: "продвижение сайта интернет-магазина (480), стоимость продвижения сайта интернет-магазина (10)",
    op: "rename", from: "Сколько стоит раскрутка интернет-магазина и когда видно результат", to: "Стоимость продвижения сайта интернет-магазина и когда виден результат" },
  { id: "singlepage-ecommerce-seo.ru", url: "/ru/prodvizhenie-internet-magazina", q: "seo для интернет-магазина (110)",
    op: "rename", from: "Чем продвижение магазина отличается от обычного SEO?", to: "Чем SEO для интернет-магазина отличается от обычного SEO?" },

  { id: "84798707-8328-4ca5-ad3f-6e4f17c95664", url: "/ru/seo-dlya-yuridicheskogo-sayta", q: "продвижение сайта юридической компании (50)",
    op: "heading", from: "", to: "SEO-продвижение сайта юридической компании и адвоката" },

  { id: "singlepage-photographer.ru", url: "/ru/sait-dlya-fotografa", q: "заказать сайт для фотографа (10)",
    op: "rename", from: "Сколько стоит сайт для фотографа?", to: "Сколько стоит заказать сайт для фотографа?" },
  { id: "singlepage-photographer.ru", url: "/ru/sait-dlya-fotografa", q: "заголовок без предмета",
    op: "rename", from: "Стиль оценивают за секунды, а жанры не смешиваются", to: "Сайт для фотографа: стиль виден за секунды, а жанры не смешиваются" },

  { id: "singlepage-hotel-website.ru", url: "/ru/sait-dlya-otelya", q: "заказать сайт для отеля (10)",
    op: "rename", from: "Сколько стоит сайт для отеля?", to: "Сколько стоит заказать сайт для отеля?" },
  { id: "singlepage-hotel-website.ru", url: "/ru/sait-dlya-otelya", q: "заголовок без предмета",
    op: "rename", from: "Арифметика прямой брони", to: "Сайт отеля и прямые бронирования без комиссии площадок" },

  { id: "singlepage-travel-agency.ru", url: "/ru/sait-dlya-turagentstva", q: "заголовок без предмета",
    op: "rename", from: "Вопрос, который посетитель уже себе задал", to: "Что турагентство даёт клиенту сверх самостоятельного бронирования — и как показать это на сайте" },
  { id: "singlepage-travel-agency.ru", url: "/ru/sait-dlya-turagentstva", q: "заказать сайт для турагентства (10)",
    op: "rename", from: "Сколько стоит сайт для турагентства?", to: "Сколько стоит заказать сайт для турагентства?" },

  { id: "singlepage-restaurant.ru", url: "/ru/sait-dlya-restorana", q: "заказать сайт для ресторана (10)",
    op: "rename", from: "Сколько стоит сайт для ресторана?", to: "Сколько стоит заказать сайт для ресторана?" },
  { id: "singlepage-restaurant.ru", url: "/ru/sait-dlya-restorana", q: "заголовок без предмета",
    op: "rename", from: "Меню и есть сайт", to: "Сайт для ресторана: меню — настоящие страницы, а не PDF" },

  { id: "ec128e15-9d97-47df-9aaa-d5b0db480966", url: "/ru/sait-salona-krasoty", q: "заказать сайт для салона красоты (10)",
    op: "rename", from: "Какая минимальная стоимость разработки сайта салона?", to: "Сколько стоит заказать сайт для салона красоты?" },

  { id: "d0a6b052-1ea6-41ba-9e6f-4bb873946e29", url: "/ru/sozdanie-saita-dlya-avtoservisa", q: "заказать сайт для автосервиса (10)",
    op: "rename", from: "Сколько стоит создание сайта для автосервиса?", to: "Сколько стоит заказать сайт для автосервиса?" },
  { id: "d0a6b052-1ea6-41ba-9e6f-4bb873946e29", url: "/ru/sozdanie-saita-dlya-avtoservisa", q: "сломанный заголовок",
    op: "rename", from: "Какому СТО нужен сайт для — и когда он не даст результата", to: "Какому автосервису нужен сайт — и когда он не даст результата" },
  { id: "d0a6b052-1ea6-41ba-9e6f-4bb873946e29", url: "/ru/sozdanie-saita-dlya-avtoservisa", q: "дубль вопроса",
    op: "remove-faq", from: "Сколько времени занимает разработка?", keep: "Сколько времени занимает разработка сайта для СТО?" },
];

// Заголовки, которые надо переименовать, но по снимку не видно, о чём раздел.
// Сухой прогон печатает их текст; переименование — следующим шагом.
const INSPECT = [];

// ------------------------------------------------------------------ utils --

const key = () => crypto.randomBytes(6).toString("hex");
const plain = (blocks) => (Array.isArray(blocks) ? blocks : [])
  .filter((b) => b && b._type === "block")
  .map((b) => (b.children || []).map((c) => c.text || "").join(""))
  .join(" ").replace(/\s+/g, " ").trim();
const cut = (s, n = 240) => (s.length > n ? s.slice(0, n) + "…" : s);

/** Все заголовки-блоки и вопросы FAQ документа с путями и текстом раздела под ними. */
function collect(doc) {
  const found = [];
  const walk = (arr, p) => {
    if (!Array.isArray(arr)) return;
    arr.forEach((node, i) => {
      if (!node || typeof node !== "object") return;
      const np = node._key ? `${p}[_key=="${node._key}"]` : `${p}[${i}]`;
      if (node._type === "block" && /^h[1-4]$/.test(String(node.style || ""))) {
        const spans = (node.children || []).filter((c) => typeof c.text === "string");
        // текст раздела — обычные абзацы до следующего заголовка
        const after = [];
        for (let j = i + 1; j < arr.length; j++) {
          const n = arr[j];
          if (n && n._type === "block" && /^h[1-4]$/.test(String(n.style || ""))) break;
          after.push(n);
        }
        // последний блок раздела — после него вставляется новый раздел
        const last = after.length ? after[after.length - 1] : node;
        const endPath = last._key ? `${p}[_key=="${last._key}"]` : np;
        found.push({ kind: node.style, text: spans.map((s) => s.text).join("").trim(), path: np, node, context: plain(after), endPath });
        return;
      }
      if (typeof node.question === "string") {
        found.push({ kind: "faq", text: node.question.trim(), path: np, node, context: plain(node.answer), itemsPath: p });
      }
      for (const [k, v] of Object.entries(node)) {
        if (k.startsWith("_") || !v || typeof v !== "object") continue;
        if (Array.isArray(v)) walk(v, `${np}.${k}`);
        else for (const [k2, v2] of Object.entries(v)) if (Array.isArray(v2)) walk(v2, `${np}.${k}.${k2}`);
      }
    });
  };
  walk(doc.contentBlocks, "contentBlocks");
  return found;
}

function para(text, style = "normal") {
  return { _type: "block", _key: key(), style, markDefs: [],
    children: [{ _type: "span", _key: key(), text, marks: [] }] };
}

// ------------------------------------------------------------------- main --

async function loadDocs(ids) {
  if (OFFLINE) {
    const dump = require(path.resolve(__dirname, "../research/pseo/pages-dump.json"));
    // в снимке нет блоков целиком — строим документ из заголовков с путями
    return dump.filter((d) => ids.includes(d.id)).map((d) => ({ ...d, _id: d.id, offline: true }));
  }
  const { createClient } = require("@sanity/client");
  require("dotenv").config({ path: path.resolve(__dirname, "../.env.local"), quiet: true });
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: "2025-08-04",
    token: process.env.SANITY_API_TOKEN,
    useCdn: false,
  });
  loadDocs.client = client;
  return client.fetch(`*[_id in $ids]{ _id, _rev, _updatedAt, language, "slug": select(language == "pl" => slug.pl.current, language == "ru" => slug.ru.current, slug.en.current), title, heading, seo, contentBlocks }`, { ids });
}

async function resolveSlugIds() {
  const need = [...EDITS, ...INSPECT].filter((e) => e.idBySlug);
  if (!need.length) return;
  const dump = require(path.resolve(__dirname, "../research/pseo/pages-dump.json"));
  for (const e of need) {
    const [lang, slug] = e.idBySlug.split("|");
    const d = dump.find((x) => x.lang === lang && x.slug === slug);
    if (!d) throw new Error(`Нет страницы ${e.idBySlug} в pages-dump.json — запусти pseo-inventory.cjs`);
    e.id = d.id;
  }
}

async function checkLastmod() {
  await resolveSlugIds();
  const ids = [...new Set(EDITS.map((e) => e.id))];
  const docs = await loadDocs(ids);
  let xml;
  try {
    const r = await fetch(`${LOCAL}/sitemap.xml`);
    xml = await r.text();
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
  } catch (e) {
    console.error(`Не открылся ${LOCAL}/sitemap.xml (${e.message}). Запусти локальный сервер: npm run dev`);
    process.exit(1);
  }
  // язык — по первому сегменту адреса, слаг — по последнему, как lastmodFor в route.ts
  const entries = [...xml.matchAll(/<url>[\s\S]*?<loc>([^<]+)<\/loc>[\s\S]*?<lastmod>([^<]+)<\/lastmod>/g)].map((m) => {
    const seg = new URL(m[1]).pathname.split("/").filter(Boolean);
    const lang = seg[0] === "pl" || seg[0] === "ru" ? seg[0] : "en";
    return { loc: m[1], lang, slug: seg[seg.length - 1] || "", lastmod: m[2] };
  });
  let good = 0;
  for (const d of docs) {
    const hit = entries.find((x) => x.lang === d.language && x.slug === d.slug);
    if (!hit) { console.log(`✗ ${d.language}/${d.slug}: нет в sitemap`); continue; }
    const same = new Date(hit.lastmod).getTime() === new Date(d._updatedAt).getTime();
    if (same) good++;
    console.log(`${same ? "✓" : "✗"} ${hit.loc}\n    lastmod ${hit.lastmod}  ·  _updatedAt ${d._updatedAt}`);
  }
  console.log(`\nСовпало ${good} из ${docs.length}. Боевой sitemap догонит в пределах часа (кэш CDN).`);
}

async function main() {
  if (CHECK) return checkLastmod();
  await resolveSlugIds();
  const ids = [...new Set([...EDITS, ...INSPECT].map((e) => e.id))];
  const docs = await loadDocs(ids);
  const byId = new Map(docs.map((d) => [d._id, d]));

  let ok = 0;
  let bad = 0;
  const plans = new Map(); // id → { doc, ops: [] }

  for (const id of ids) {
    const doc = byId.get(id);
    const edits = EDITS.filter((e) => e.id === id);
    const url = (edits[0] || INSPECT.find((e) => e.id === id)).url || id;
    console.log(`\n━━ ${url}  [${id}]`);
    if (!doc) { console.log("   ✗ документ не найден"); bad += edits.length; continue; }

    const heads = doc.offline
      ? doc.headings.map((h) => ({ kind: h.kind === "question" ? "faq" : h.kind, text: h.text, path: h.path.replace(/\.question$/, ""), context: "" }))
      : collect(doc);
    const plan = { doc, set: {}, unset: [], insert: [] };

    for (const e of edits) {
      const tag = `   [${e.q}]`;
      if (e.op === "heading" || e.op === "meta") {
        const field = e.op === "heading" ? "heading" : "seo.metaTitle";
        const now = e.op === "heading" ? (doc.heading || "") : ((doc.seo && doc.seo.metaTitle) || doc.metaTitle || "");
        if (now !== e.from) { console.log(`${tag}\n   ✗ ${field}: ожидалось «${e.from}», на сайте «${now}»`); bad++; continue; }
        const label = e.op === "heading" ? `H1 (поле heading${e.from ? "" : ", сейчас пусто — H1 = title «" + doc.title + "»"})` : "meta title";
        console.log(`${tag}\n   ${label}\n     было:  «${e.from || doc.title}»\n     стало: «${e.to}»${e.op === "meta" ? `  (${e.to.length} симв.)` : ""}`);
        plan.set[field] = e.to;
        ok++;
        continue;
      }

      const hits = heads.filter((h) => h.text === e.from);
      if (e.op === "add-faq") {
        const anchor = heads.filter((h) => h.kind === "faq" && h.text === e.after);
        if (anchor.length !== 1) { console.log(`${tag}\n   ✗ якорь «${e.after}» найден ${anchor.length} раз`); bad++; continue; }
        if (heads.some((h) => h.text === e.to)) { console.log(`${tag}\n   ✗ вопрос «${e.to}» уже есть`); bad++; continue; }
        console.log(`${tag}\n   новый вопрос FAQ (H3) после «${e.after}»:\n     «${e.to}»\n     ответ: ${e.answer.map((a) => cut(a, 400)).join(" / ")}`);
        plan.insert.push({ at: anchor[0].path, items: [{ _key: key(), question: e.to, answer: e.answer.map((a) => para(a)) }] });
        ok++;
        continue;
      }
      if (e.op === "add-section") {
        const anchor = heads.filter((h) => h.kind !== "faq" && h.text === e.after);
        if (anchor.length !== 1) { console.log(`${tag}\n   ✗ раздел «${e.after}» найден ${anchor.length} раз`); bad++; continue; }
        if (heads.some((h) => h.text === e.to)) { console.log(`${tag}\n   ✗ раздел «${e.to}» уже есть`); bad++; continue; }
        console.log(`${tag}\n   новый раздел ${e.style.toUpperCase()} после раздела «${e.after}»:\n     «${e.to}»\n     текст: ${e.answer.join("\n            ")}`);
        if (!doc.offline) plan.insert.push({ at: anchor[0].endPath, items: [para(e.to, e.style), ...e.answer.map((a) => para(a))] });
        ok++;
        continue;
      }
      if (hits.length !== 1) { console.log(`${tag}\n   ✗ «${e.from}» найдено ${hits.length} раз`); bad++; continue; }
      const h = hits[0];

      if (e.op === "remove-faq") {
        const keep = heads.filter((x) => x.text === e.keep);
        if (keep.length !== 1) { console.log(`${tag}\n   ✗ оставляемый вопрос «${e.keep}» найден ${keep.length} раз`); bad++; continue; }
        console.log(`${tag}\n   удалить вопрос FAQ «${e.from}»\n     его ответ:        ${cut(h.context) || "(в снимке нет)"}\n     остаётся «${e.keep}»: ${cut(keep[0].context) || "(в снимке нет)"}`);
        plan.unset.push(h.path);
        ok++;
        continue;
      }

      // rename
      const kind = h.kind === "faq" ? "вопрос FAQ (H3)" : h.kind.toUpperCase();
      console.log(`${tag}\n   ${kind}\n     было:  «${e.from}»\n     стало: «${e.to}»${h.context ? `\n     текст раздела: ${cut(h.context)}` : ""}`);
      if (h.kind === "faq") plan.set[`${h.path}.question`] = e.to;
      else if (!doc.offline) {
        const spans = (h.node.children || []).filter((c) => typeof c.text === "string");
        if (spans.length === 1) plan.set[`${h.path}.children[_key=="${spans[0]._key}"].text`] = e.to;
        else plan.set[`${h.path}.children`] = [{ _type: "span", _key: key(), text: e.to, marks: [] }];
      }
      ok++;
    }

    for (const ins of INSPECT.filter((x) => x.id === id)) {
      const h = heads.filter((x) => x.text === ins.from);
      console.log(`   ? посмотреть раздел «${ins.from}»: ${h.length === 1 ? cut(h[0].context, 600) || "(в снимке нет текста)" : `найдено ${h.length} раз`}`);
    }
    plans.set(id, plan);
  }

  console.log(`\nИтого: правок готово ${ok}, с ошибкой ${bad}.`);
  if (OFFLINE) { console.log("Проверка по снимку. Применение — без --offline и с --apply."); return; }
  if (!APPLY) { console.log("Сухой прогон: ничего не записано. Применить: --apply"); return; }
  if (bad) { console.log("Есть ошибки — ничего не записываю. Исправь пары «было» и запусти снова."); process.exit(1); }

  const client = loadDocs.client;
  for (const [id, plan] of plans) {
    let p = client.patch(id).ifRevisionId(plan.doc._rev);
    if (Object.keys(plan.set).length) p = p.set(plan.set);
    for (const ins of plan.insert) p = p.insert("after", ins.at, ins.items);
    if (plan.unset.length) p = p.unset(plan.unset);
    if (!Object.keys(plan.set).length && !plan.insert.length && !plan.unset.length) continue;
    const res = await p.commit({ autoGenerateArrayKeys: false });
    console.log(`✓ ${id}  _updatedAt ${res._updatedAt} — это и будет <lastmod>`);
  }
  console.log("Готово. Дальше: запусти локальный сервер и выполни --check-lastmod.");
}

main().catch((e) => { console.error("Ошибка:", e.message); process.exit(1); });
