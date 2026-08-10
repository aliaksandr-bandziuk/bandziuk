const fs = require("fs");
const path = require("path");
const { createClient } = require("@sanity/client");
const { parseBodyText } = require("./cluster-md-to-portable-text.cjs");
const { insertInlineLink } = require("./lib/portable-text-links.cjs");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local") });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const APPLY = process.argv.includes("--apply");

function key() { return Math.random().toString(16).slice(2, 14); }
function span(text, marks = []) { return { _key: key(), _type: "span", text, marks }; }
function block(children, style = "normal") { return { _key: key(), _type: "block", style, markDefs: [], children }; }

const HUB_IDS = {
  en: "831dc620-2863-4d55-baa0-aa874a7374ac",
  pl: "3a759a28-4135-4731-a318-cffee1b512f0",
  ru: "1c0a4ea3-2dd6-4081-a0a0-58ee87633f71",
};
const HUB_URL = { en: "/services/ai-ready-seo-and-geo-optimization", pl: "/pl/oferty/ai-seo-and-geo-optymalizacja", ru: "/ru/uslugi/ai-seo-i-geo-optimizaciya" };

const slugMap = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../.aeo-slugmap.json"), "utf8"));
function serviceUrl(lang, key_) {
  const prefix = lang === "en" ? "" : `/${lang}`;
  const parentSeg = { en: "services", pl: "oferty", ru: "uslugi" }[lang];
  return `${prefix}/${parentSeg}/${slugMap[key_][lang]}`;
}

// ---------- Icon refs reused positionally from the current 5-feature block ----------
const FEATURE_ICON = {
  audit: "9983978d-e60a-4e6e-8338-1f28c3848dfe",
  correction: "b36cc1c4-d2f0-404c-aa60-671aceb3fa9e",
  monitoring: "3567d5b9-75a3-4c42-9986-06ae3c4d6b2e",
  readiness: "558146a2-796e-4773-969e-860e0d9db2f0",
};

const FEATURES = {
  en: [
    { k: "audit", title: "Audit: what assistants say about you now" },
    { k: "correction", title: "Correction: fixing what they get wrong" },
    { k: "monitoring", title: "Monitoring: tracking it month to month" },
    { k: "readiness", title: "Readiness: making the site legible to them" },
  ],
  pl: [
    { k: "audit", title: "Audyt: co asystenci mówią o Was teraz" },
    { k: "correction", title: "Korekta: poprawianie tego, co przekręcają" },
    { k: "monitoring", title: "Monitoring: śledzenie tego z miesiąca na miesiąc" },
    { k: "readiness", title: "Przygotowanie: uczynienie strony czytelną dla nich" },
  ],
  ru: [
    { k: "audit", title: "Аудит: что ассистенты говорят о вас сейчас" },
    { k: "correction", title: "Исправление: правка того, что они путают" },
    { k: "monitoring", title: "Мониторинг: отслеживание месяц за месяцем" },
    { k: "readiness", title: "Подготовка: сделать сайт читаемым для них" },
  ],
};

const INTRO = {
  en: {
    title: "AI-ready SEO and GEO: two problems, four services",
    body: `People increasingly ask an assistant instead of searching. The answer names two or three companies, and the buyer usually contacts one of them. That produces two separate problems, and most work sold under this heading conflates them.

**Visibility** — whether you're named at all when someone describes their situation to ChatGPT, Perplexity or Google's AI answers.

**Accuracy** — what gets said about you when you are named. Outdated prices, services you dropped, a capability credited to a competitor, or a caution advising the buyer to check your credentials.

The diagnosis differs, and so does the work. If you appear in two answers out of twenty, that's visibility. If you appear in fifteen and half describe you incorrectly, that's accuracy — and adding content won't touch it.

This page explains the field and points you to the right service. Each of the four below is a separate piece of work with its own scope and price.`,
  },
  pl: {
    title: "AI-Ready SEO i GEO: dwa problemy, cztery usługi",
    body: `Ludzie coraz częściej pytają asystenta zamiast szukać. Odpowiedź wymienia dwie lub trzy firmy, a kupujący zwykle kontaktuje się z jedną z nich. Powstają z tego dwa osobne problemy, a większość pracy sprzedawanej pod tym hasłem je miesza.

**Widoczność** — czy w ogóle jesteście wymieniani, gdy ktoś opisuje swoją sytuację ChatGPT, Perplexity albo odpowiedziom AI w Google.

**Wiarygodność** — co się o Was mówi, gdy już Was wymienią. Nieaktualne ceny, usługi, z których zrezygnowaliście, możliwość przypisana konkurentowi albo ostrożna uwaga, żeby klient sprawdził Wasze uprawnienia.

Diagnoza jest inna i praca też. Jeśli pojawiacie się w dwóch odpowiedziach na dwadzieścia, to widoczność. Jeśli w piętnastu i połowa opisuje Was błędnie, to wiarygodność — a dokładanie treści tego nie ruszy.

Ta strona wyjaśnia temat i kieruje do właściwej usługi. Każda z czterech poniżej jest osobną pracą o własnym zakresie i cenie.`,
  },
  ru: {
    title: "AI-Ready SEO и GEO: две задачи, четыре услуги",
    body: `Люди всё чаще спрашивают ассистента вместо того, чтобы искать. Ответ называет две-три компании, и покупатель обычно обращается к одной из них. Отсюда две разные задачи, которые в работе под этим названием обычно смешивают.

**Видимость** — называют ли вас вообще, когда человек описывает свою ситуацию ChatGPT, Perplexity или ИИ-ответам Google.

**Достоверность** — что о вас говорят, когда назвали. Устаревшие цены, снятые услуги, возможность, приписанная конкуренту, или осторожное замечание проверить ваши документы.

Диагноз разный, и работа тоже. Если вы появляетесь в двух ответах из двадцати — это видимость. Если в пятнадцати и половина описывает вас неверно — это достоверность, и добавление контента её не тронет.

Эта страница объясняет тему и направляет к нужной услуге. Каждая из четырёх ниже — отдельная работа со своим объёмом и ценой.`,
  },
};

const TABLE = {
  en: {
    columns: ["Your situation", "Which problem", "Which service"],
    rows: [
      ["You don't know what assistants say about you", "Unknown — start here", "AI visibility audit"],
      ["They describe you incorrectly", "Accuracy", "Correcting wrong information in AI answers"],
      ["Corrections are done, you need to know if they held", "Accuracy, ongoing", "AI brand monitoring"],
      ["You're rarely or never named", "Visibility", "Preparing a website for AI search"],
    ],
  },
  pl: {
    columns: ["Wasza sytuacja", "Który problem", "Która usługa"],
    rows: [
      ["Nie wiecie, co asystenci o Was mówią", "Nieznany — zacznijcie tutaj", "Audyt widoczności w AI"],
      ["Opisują Was błędnie", "Wiarygodność", "Poprawa błędnych danych w odpowiedziach AI"],
      ["Korekty zrobione, trzeba wiedzieć, czy się utrzymały", "Wiarygodność, stale", "Monitoring marki w AI"],
      ["Rzadko lub nigdy Was nie wymieniają", "Widoczność", "Przygotowanie strony do wyszukiwania AI"],
    ],
  },
  ru: {
    columns: ["Ваша ситуация", "Какая задача", "Какая услуга"],
    rows: [
      ["Вы не знаете, что ассистенты о вас говорят", "Неизвестно — начните отсюда", "Аудит видимости в ИИ-поиске"],
      ["Вас описывают неверно", "Достоверность", "Исправление неверных данных в ИИ-ответах"],
      ["Исправления сделаны, нужно знать, удержались ли", "Достоверность, постоянно", "Мониторинг бренда в ИИ"],
      ["Вас редко называют или не называют вовсе", "Видимость", "Подготовка сайта к ИИ-поиску"],
    ],
  },
};

// MAIN body — "with project work in between" expanded to carry the Readiness link anchor.
const MAIN = {
  en: {
    title: "How to tell which of the four services you need",
    body: `### Start with the audit if you don't know

Almost everyone's first move is to type their company name into ChatGPT and read what comes back. That produces an impression, not a measurement — answers vary between runs, so a single check proves nothing either way.

The audit is the same question asked in a controlled way, recorded so that next month's run can be compared against it. It's also the only one of the four that tells you which of the other three you actually need. If you're unsure, it's the cheapest way to stop guessing.

### The distinction that decides everything

An error can live in one of two places, and only one of them is reachable.

**In a retrievable source** — an outdated directory listing, an old press item, a competitor's comparison page. The assistant searched, found it, repeated it. Fix the source and the claim changes on the next crawl.

**In the model's training data** — no live source exists. That version of your company persists until the model is retrained, on the platform's schedule, and source corrections don't reach it.

Knowing which you're dealing with is what stops months being spent on something that was never going to respond. It's established in the audit, before any correction work is quoted.

### What none of this promises

Nobody can guarantee what an assistant will say. Answers vary between runs, get reassembled over time, and depend on phrasing, language and whether the assistant searched at all.

No fixed timeline for corrections either: source changes take effect after a recrawl, usually weeks, and training-data claims may not change at all this quarter.

And this doesn't replace search work. AI visibility rests on the same technical foundation as search — if your pages aren't indexed or load badly, there's nothing here to build on.

### Prices

From €250 for a one-off audit to €800 a month for ongoing monitoring, with project work — like preparing a site to be legible to AI search — in between. Each service page carries its own figure and what it depends on; there's no single package price, because the four are genuinely different pieces of work.`,
  },
  pl: {
    title: "Jak rozpoznać, której z czterech usług potrzebujecie",
    body: `### Zacznijcie od audytu, jeśli nie wiecie

Niemal każdy zaczyna od wpisania nazwy firmy w ChatGPT i przeczytania, co wróci. Daje to wrażenie, a nie pomiar — odpowiedzi różnią się między przebiegami, więc pojedyncze sprawdzenie niczego nie dowodzi w żadną stronę.

Audyt to to samo pytanie zadane w sposób kontrolowany i zapisane tak, żeby przebieg z kolejnego miesiąca dało się z nim porównać. Jest też jedyną z czterech usług, która mówi, której z pozostałych trzech faktycznie potrzebujecie. Przy niepewności to najtańszy sposób, żeby przestać zgadywać.

### Rozróżnienie, które przesądza o wszystkim

Błąd może siedzieć w jednym z dwóch miejsc i tylko jedno jest osiągalne.

**W źródle osiągalnym dla wyszukiwarek** — nieaktualny wpis w katalogu, stara informacja prasowa, strona porównawcza konkurenta. Asystent szukał, znalazł, powtórzył. Poprawcie źródło, a twierdzenie zmieni się przy kolejnym skanowaniu.

**W danych treningowych modelu** — żywe źródło nie istnieje. Ta wersja Waszej firmy utrzymuje się do przetrenowania modelu, w harmonogramie platformy, a poprawki źródeł do niej nie sięgają.

Wiedza, z którym przypadkiem macie do czynienia, powstrzymuje przed miesiącami pracy nad czymś, co i tak nie miało zareagować. Ustala się to w audycie, zanim jakakolwiek korekta zostanie wyceniona.

### Czego nic z tego nie obiecuje

Nikt nie zagwarantuje, co powie asystent. Odpowiedzi różnią się między przebiegami, są składane od nowa i zależą od sformułowania, języka oraz tego, czy asystent w ogóle szukał.

Nie ma też stałego terminu korekt: zmiany źródeł działają po ponownym skanowaniu, zwykle po tygodniach, a twierdzenia z danych treningowych mogą nie zmienić się w tym kwartale wcale.

I nie zastępuje to pracy nad wyszukiwarkami. Widoczność w AI stoi na tym samym fundamencie technicznym co wyszukiwarki — jeśli podstrony nie są zaindeksowane albo ładują się źle, nie ma tu na czym budować.

### Ceny

Od 1000 zł za jednorazowy audyt do 3500 zł miesięcznie za stały monitoring, z pracą projektową — na przykład przygotowaniem strony, żeby była czytelna dla wyszukiwania AI — pomiędzy. Każda strona usługi ma własną kwotę i to, od czego zależy; nie ma jednej ceny pakietowej, bo te cztery to naprawdę różne prace.`,
  },
  ru: {
    title: "Как понять, какая из четырёх услуг вам нужна",
    body: `### Начните с аудита, если не знаете

Почти все начинают с того, что вводят название компании в ChatGPT и читают ответ. Это даёт впечатление, а не измерение: ответы различаются между прогонами, поэтому единичная проверка ничего не доказывает ни в ту, ни в другую сторону.

Аудит — тот же вопрос, заданный контролируемо и записанный так, чтобы прогон следующего месяца можно было с ним сравнить. Он же единственная из четырёх услуг, которая говорит, какая из остальных трёх вам действительно нужна. При неуверенности это самый дешёвый способ перестать гадать.

### Различение, которое решает всё

Ошибка может сидеть в одном из двух мест, и достижимо только одно.

**В источнике, достижимом для поиска** — устаревшая карточка в каталоге, старый пресс-релиз, сравнительная страница конкурента. Ассистент искал, нашёл, повторил. Исправьте источник — и утверждение изменится при следующем обходе.

**В обучающих данных модели** — живого источника не существует. Эта версия вашей компании держится до переобучения модели, по графику платформы, и правки источников до неё не достают.

Понимание, с каким случаем вы имеете дело, останавливает от месяцев работы над тем, что и не должно было отозваться. Это устанавливается в аудите, до того как оценена любая работа по исправлению.

### Чего всё это не обещает

Никто не может гарантировать, что скажет ассистент. Ответы различаются между прогонами, пересобираются со временем и зависят от формулировки, языка и от того, искал ли ассистент вообще.

Фиксированных сроков исправления тоже нет: правки источников действуют после переобхода, обычно через недели, а утверждения из обучающих данных могут не измениться в этом квартале вовсе.

И это не заменяет работу с поиском. Видимость в ИИ стоит на том же техническом фундаменте, что и поиск: если страницы не проиндексированы или плохо грузятся, строить здесь не на чем.

### Цены

От 250 € за разовый аудит до 800 € в месяц за постоянный мониторинг, с проектной работой — например, подготовкой сайта к тому, чтобы он был читаем для ИИ-поиска, — посередине. На странице каждой услуги своя сумма и то, от чего она зависит; единой пакетной цены нет, потому что эти четыре — действительно разные работы.`,
  },
};

const PARENT_LINK_ANCHOR = {
  audit: { en: "The audit is the same question asked in a controlled way", pl: "Audyt to to samo pytanie zadane w sposób kontrolowany", ru: "Аудит — тот же вопрос, заданный контролируемо" },
  correction: { en: "any correction work is quoted", pl: "jakakolwiek korekta zostanie wyceniona", ru: "любая работа по исправлению" },
  monitoring: { en: "€800 a month for ongoing monitoring", pl: "3500 zł miesięcznie za stały monitoring", ru: "800 € в месяц за постоянный мониторинг" },
  readiness: { en: "preparing a site to be legible to AI search", pl: "przygotowaniem strony, żeby była czytelna dla wyszukiwania AI", ru: "подготовкой сайта к тому, чтобы он был читаем для ИИ-поиска" },
};

const FAQ = {
  en: {
    title: "Frequently asked questions about AI search optimisation",
    items: [
      { q: "Will this improve my Google rankings?", a: "Not directly, and I won't claim otherwise. Part of the work overlaps with technical SEO — structured data, clear semantics, fixing what's outdated — and that helps search generally. But this targets what AI assistants say, a different surface with different mechanics. If rankings are the goal, ongoing SEO is the right service, and I'll say which your situation actually calls for." },
      { q: "Which of the four should I start with?", a: "The audit, unless you already know what's wrong and where it comes from. It's the cheapest of the four and it determines the rest — including the possibility that nothing needs doing yet." },
      { q: "Is GEO the same as AEO?", a: "Different names circulating for overlapping work: making a business legible and quotable to AI answer systems. I use them interchangeably rather than claiming a distinction, because the mechanics are the same regardless of the acronym." },
      { q: "Do we need this if our SEO is already good?", a: "Possibly not. Sites with strong technical foundations often already appear in AI answers — in which case the useful question is accuracy, not visibility, and that's a smaller piece of work. The audit will say which." },
      { q: "Can we do this ourselves?", a: "Much of it. The audit method, the correction sequence and the monthly measurement are documented in detail in my articles, and several clients have implemented from the reports themselves. The parts that are genuinely harder alone are the structured data and knowing which errors are worth pursuing." },
    ],
  },
  pl: {
    title: "Najczęstsze pytania o optymalizację pod wyszukiwanie AI",
    items: [
      { q: "Czy poprawi to moje pozycje w Google?", a: "Nie bezpośrednio i nie będę twierdził inaczej. Część pracy pokrywa się z technicznym SEO — dane strukturalne, czytelna semantyka, poprawianie nieaktualnego — i to pomaga wyszukiwarkom ogólnie. Ale to dotyczy tego, co mówią asystenci AI, a to inna powierzchnia o innej mechanice. Jeśli celem są pozycje, właściwą usługą jest stałe SEO, a ja powiem, czego Wasza sytuacja faktycznie wymaga." },
      { q: "Od której z czterech zacząć?", a: "Od audytu, chyba że już wiecie, co jest nie tak i skąd pochodzi. Jest najtańszy z czterech i przesądza o reszcie — łącznie z możliwością, że na razie nic nie trzeba robić." },
      { q: "Czy GEO to to samo co AEO?", a: "Różne nazwy krążące wokół pokrywającej się pracy: uczynienia firmy czytelną i cytowalną dla systemów odpowiedzi AI. Używam ich wymiennie, zamiast twierdzić, że jest między nimi różnica, bo mechanika jest ta sama niezależnie od skrótu." },
      { q: "Czy potrzebujemy tego, jeśli nasze SEO jest już dobre?", a: "Możliwe, że nie. Strony o mocnych fundamentach technicznych często już pojawiają się w odpowiedziach AI — wtedy użytecznym pytaniem jest wiarygodność, a nie widoczność, a to mniejszy zakres pracy. Audyt to rozstrzygnie." },
      { q: "Czy możemy zrobić to sami?", a: "W dużej części. Metoda audytu, kolejność korekty i comiesięczny pomiar są szczegółowo opisane w moich artykułach, a część klientów wdrożyła je samodzielnie na podstawie raportów. Trudniejsze samodzielnie są dane strukturalne i ocena, które błędy warto ścigać." },
    ],
  },
  ru: {
    title: "Частые вопросы об оптимизации под ИИ-поиск",
    items: [
      { q: "Улучшит ли это позиции в Google?", a: "Не напрямую, и утверждать обратное не стану. Часть работы пересекается с техническим SEO — структурированные данные, ясная семантика, исправление устаревшего, — и это помогает поиску в целом. Но нацелено это на то, что говорят ИИ-ассистенты, а там другая поверхность и другая механика. Если цель — позиции, правильная услуга это постоянное SEO, и я скажу, что нужно именно в вашем случае." },
      { q: "С какой из четырёх начинать?", a: "С аудита, если вы не знаете точно, что не так и откуда это. Он самый дешёвый из четырёх и определяет остальное — включая вариант, что делать пока ничего не нужно." },
      { q: "GEO и AEO — это одно и то же?", a: "Разные названия, ходящие вокруг пересекающейся работы: сделать бизнес понятным и цитируемым для систем ИИ-ответов. Я использую их взаимозаменяемо, а не утверждаю, что между ними есть разница, потому что механика одна независимо от аббревиатуры." },
      { q: "Нужно ли это, если SEO у нас уже хорошее?", a: "Возможно, нет. Сайты с крепкой технической базой часто уже появляются в ИИ-ответах — тогда полезный вопрос про достоверность, а не про видимость, и это меньший объём работы. Аудит это покажет." },
      { q: "Можем ли мы сделать это сами?", a: "В значительной части. Метод аудита, последовательность исправления и ежемесячное измерение подробно описаны в моих статьях, и часть клиентов внедряла по отчётам самостоятельно. Что действительно труднее в одиночку — структурированные данные и понимание, какие ошибки стоит преследовать." },
    ],
  },
};

async function main() {
  console.log(`${APPLY ? "Uploading" : "Would upload"} hub banner image...`);
  let hubImageAssetId = "PENDING_hub";
  if (APPLY) {
    const asset = await client.assets.upload("image", fs.createReadStream(path.resolve(__dirname, "../drafts/AI-READY-SEO-&-GEO-—-THE-HUB.jpg")), { filename: "ai-ready-hub-banner.jpg" });
    hubImageAssetId = asset._id;
    console.log(`  hub: ${hubImageAssetId}`);
  }

  for (const lang of ["en", "pl", "ru"]) {
    const id = HUB_IDS[lang];
    const doc = await client.fetch(`*[_id == $id][0]{contentBlocks}`, { id });
    const existingKeys = doc.contentBlocks.map((b) => b._key);
    const [featKey, introKey, tableKey, mainKey, imgKey, faqKey] = existingKeys;
    const existingImageBlock = doc.contentBlocks[4];

    // FEATURES (serviceFeaturesBlock) — 4 items, no description, reused icon refs
    const featuresBlock = {
      _key: featKey,
      _type: "serviceFeaturesBlock",
      features: FEATURES[lang].map((f) => ({
        _key: key(),
        feature: { _type: "reference", _ref: FEATURE_ICON[f.k] },
        title: f.title,
      })),
    };

    // INTRO (textContent)
    const introBlocks = [block([span(INTRO[lang].title)], "h2"), ...parseBodyText(INTRO[lang].body)];
    const introBlock = { _key: introKey, _type: "textContent", content: introBlocks, textAlign: "left" };

    // TABLE
    const tableBlock = {
      _key: tableKey,
      _type: "tableBlock",
      columns: TABLE[lang].columns,
      rows: TABLE[lang].rows.map((cells) => ({ _key: key(), cells })),
    };

    // MAIN (textContent) + 4 parent->child links
    let mainBlocks = [block([span(MAIN[lang].title)], "h2"), ...parseBodyText(MAIN[lang].body)];
    mainBlocks = insertInlineLink(mainBlocks, PARENT_LINK_ANCHOR.audit[lang], serviceUrl(lang, "audit"));
    mainBlocks = insertInlineLink(mainBlocks, PARENT_LINK_ANCHOR.correction[lang], serviceUrl(lang, "correction"));
    mainBlocks = insertInlineLink(mainBlocks, PARENT_LINK_ANCHOR.monitoring[lang], serviceUrl(lang, "monitoring"));
    mainBlocks = insertInlineLink(mainBlocks, PARENT_LINK_ANCHOR.readiness[lang], serviceUrl(lang, "readiness"));
    const mainBlock = { _key: mainKey, _type: "textContent", content: mainBlocks, textAlign: "left" };

    // IMAGE — swap asset only, keep everything else (alt, aspectRatio) as-is
    const imageBlock = {
      ...existingImageBlock,
      imageMain: {
        ...existingImageBlock.imageMain,
        picture: { ...existingImageBlock.imageMain.picture, asset: { _type: "reference", _ref: hubImageAssetId } },
      },
    };

    // FAQ
    const faqBlockObj = {
      _key: faqKey,
      _type: "faqBlock",
      faq: {
        _type: "accordionBlock",
        title: FAQ[lang].title,
        items: FAQ[lang].items.map((it) => ({ _key: key(), question: it.q, answer: [block([span(it.a)])] })),
      },
    };

    const newBlocks = [featuresBlock, introBlock, tableBlock, mainBlock, imageBlock, faqBlockObj];

    console.log(`\n${APPLY ? "PATCHING" : "WOULD PATCH"} ${lang} hub (${id})`);
    newBlocks.forEach((b, i) => console.log(`  [${i}] ${b._type} key=${b._key}`));

    if (APPLY) {
      await client.patch(id).set({ contentBlocks: newBlocks }).commit();
      console.log(`  PATCHED ${id}`);
    }
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
