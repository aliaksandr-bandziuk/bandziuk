// Landing page fixture: Pozycjonowanie w ChatGPT (PL), market version of
// chatgpt-seo-services.en, nested under /pl/oferty.
// Semantic core: research/pseo/page-core/ai-search.md (PL): pozycjonowanie w
// chatgpt 170.
// Intent: research/pseo/intent-check-ai-services.md — «pozycjonowanie w
// chatgpt» vs «pozycjonowanie w ai» 0 shared URLs → own page, separate from
// /pl/oferty/pozycjonowanie-w-ai-i-chatgpt (AEO).
// Facts: the owner's study and developers.openai.com/api/docs/bots.
import { p, h2, li, ol, link, k } from "./pt";

export const chatgptSeoServicesPl = {
  lang: "pl",
  group: "chatgpt-seo-services",
  slug: "pozycjonowanie-w-chatgpt",
  parentPath: ["oferty"],
  pageType: "service",
  title: "Pozycjonowanie w ChatGPT",
  heading: "Pozycjonowanie w ChatGPT: jak sprawić, żeby ChatGPT polecał Waszą firmę",
  excerpt:
    "Zajmuję się pozycjonowaniem w ChatGPT: pracą, dzięki której ChatGPT wymienia Waszą firmę — z poprawnymi faktami — gdy klienci pytają, kogo wybrać, z pomiarem na stałym zestawie pytań przed i po.",
  seo: {
    metaTitle: "Pozycjonowanie w ChatGPT: firma w odpowiedziach | Bandziuk",
    metaDescription:
      "Pozycjonowanie w ChatGPT: jak ChatGPT wybiera firmy, co czyta i jaka praca sprawia, że wymienia Waszą — z pomiarem przed i po. Audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Na podstawie analizy 141 odpowiedzi AI", "Audyt od 1000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Kogo wybrać?", "Wymienieni w ChatGPT", "Poprawne fakty", "Pomiar co miesiąc"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt widoczności w ChatGPT: co ChatGPT mówi o firmie i dlaczego", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Stałe pozycjonowanie w ChatGPT: źródła, wzmianki, fakty na stronie i monitoring", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co otrzymujecie",
      title: "Co obejmuje pozycjonowanie w ChatGPT",
      items: [
        { _key: k("o"), iconName: "search", title: "Co ChatGPT mówi o Was teraz", text: "Pytania Waszych klientów, sprawdzone przed pracą" },
        { _key: k("o"), iconName: "link", title: "Źródła, z których korzysta ChatGPT", text: "Skąd biorą się nazwy firm, odpowiedź po odpowiedzi" },
        { _key: k("o"), iconName: "message-circle", title: "Wzmianki tam, gdzie szuka ChatGPT", text: "Katalogi, opinie i artykuły, które Was wymieniają" },
        { _key: k("o"), iconName: "file-text", title: "Fakty, które ChatGPT może zacytować", text: "Co robicie, dla kogo i gdzie — prostymi zdaniami" },
        { _key: k("o"), iconName: "settings", title: "Poprawnie ustawione roboty OpenAI", text: "Wyszukiwanie dozwolone, trening — Wasza decyzja" },
        { _key: k("o"), iconName: "trending-up", title: "Pomiar co miesiąc", text: "Te same pytania, więc wynik jest porównaniem" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt widoczności w ChatGPT", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe pozycjonowanie w ChatGPT", value: "od 3500 zł / mies.", note: "z monitoringiem", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: wyniki na stronach, które optymalizowałem",
      subtitle:
        "Te same strony sprawdzam teraz w ChatGPT i innych asystentach: firma skanowania laserowego 3D i modelowania BIM, której ruch organiczny wzrósł 29 razy, agencja edukacyjna w dziesięciu krajach i lokalne firmy usługowe.",
      picks: [
        "architecture-website-rebuild-and-seo-scan",
        "full-multilingual-website-development-and-seo-for-student-services",
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena pozycjonowania w ChatGPT",
      subtitle: "Odpowiem w ciągu dnia roboczego: co sprawdziłbym najpierw w ChatGPT i ile to kosztuje.",
      contextLabel: "Nazwa firmy lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i otrzymaj wycenę",
      note: "Albo napiszcie na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Czy ChatGPT Was teraz wymienia?", options: ["Tak, poprawnie", "Tak, ale z błędami", "Nie", "Nie sprawdzaliśmy"] },
        { _key: k("z"), question: "Gdzie są Wasi klienci?", options: ["W jednym mieście", "W Polsce", "W kilku krajach"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Zajmuję się pozycjonowaniem w ChatGPT: pracą, dzięki której ChatGPT wymienia firmę, z poprawnymi faktami, gdy klienci pytają „kogo zatrudnić” albo „co wybrać”. ChatGPT nie pokazuje dziesięciu linków: podaje dwie–trzy firmy, a ta, której wśród nich nie ma, dla tego pytania nie istnieje. Praca opiera się na tym, jak ChatGPT naprawdę wybiera te nazwy, i jest mierzona przed i po."),

        h2("Jak wyszukiwanie ChatGPT wybiera firmy, które poleca"),
        p(
          "W mojej ",
          link("analizie 141 odpowiedzi AI na pytania zakupowe", "/pl/blog/pozycjonowanie-w-ai-badanie"),
          " ChatGPT zachowywał się zupełnie inaczej niż pozostali asystenci:",
        ),
        li("cytował 1,6 źródła na odpowiedź, wobec 16,7 w Perplexity i 3,7 w Google AI Mode — wybór następuje, zanim przeczyta jakąkolwiek stronę"),
        li("do własnej strony firmy linkował mniej więcej raz na odpowiedź"),
        li("linki do Map Google pojawiały się w połowie odpowiedzi, ale każdy był wyszukiwaniem złożonym z nazwy i miasta, a nie wizytówką firmy"),
        p("Wniosek praktyczny: praca, dzięki której ChatGPT wymienia firmę, w dużej mierze nie dzieje się na jej stronie. Dzieje się w źródłach, które ChatGPT znajduje w swoim wyszukiwaniu — katalogach, opiniach, artykułach, zestawieniach — i w tym, jak jasno te źródła mówią, czym firma się zajmuje."),

        h2("Pozycjonowanie w ChatGPT poza stroną: źródła i wzmianki"),
        p("Dla każdego pytania klientów sprawdzam, na jakich źródłach ChatGPT opiera się w Waszej branży i czy Wy w nich jesteście. Praca idzie tam, gdzie są luki:"),
        li("katalogi i serwisy z opiniami, które naprawdę stoją za odpowiedziami ChatGPT w Waszej branży — nie każdy katalog, który przyjmuje wpisy"),
        li("artykuły i zestawienia w serwisach, z których ChatGPT już korzysta, gdzie wzmiankę się zdobywa, a nie kupuje"),
        li("ta sama nazwa, opis i dane kontaktowe wszędzie, żeby ChatGPT był pewien, że wszystkie wzmianki dotyczą jednej firmy"),

        h2("Pozycjonowanie w ChatGPT na stronie: fakty, które można zacytować"),
        p("Wasza strona nadal ma znaczenie tam, gdzie ChatGPT ją otwiera, i to z niej kopiują inne serwisy. Na niej:"),
        li("co robicie, dla kogo, gdzie i w jakich językach — prostymi zdaniami oznajmującymi; w moim badaniu jedyna odpowiedź, która wyjaśniła swój wybór, zacytowała właśnie takie zdanie"),
        li("nazwa, której nie da się pomylić z inną firmą, spójna na stronie i w danych strukturalnych"),
        li("dla firm lokalnych pełna wizytówka Google: przy pytaniach z miastem ChatGPT czytał z niej godziny otwarcia, kategorię i ocenę"),
        p(
          "Część techniczną — treść czytelną bez skryptów, dane strukturalne zgodne ze stroną — opisuję na stronie ",
          link("przygotowanie strony do wyszukiwania AI", "/pl/oferty/przygotowanie-strony-do-wyszukiwania-ai"),
          ".",
        ),

        h2("Roboty OpenAI: OAI-SearchBot, GPTBot i ChatGPT-User"),
        p("OpenAI używa osobnych robotów do osobnych zadań, a strona może traktować je różnie:"),
        li("OAI-SearchBot znajduje strony dla wyszukiwania ChatGPT — zablokowanie go usuwa stronę z odpowiedzi wyszukiwania ChatGPT"),
        li("GPTBot zbiera treści, które mogą posłużyć do trenowania modeli OpenAI — zablokowanie go nie wpływa na wyszukiwanie"),
        li("ChatGPT-User otwiera stronę, gdy użytkownik pyta o nią ChatGPT; sam niczego nie indeksuje"),
        p("Wiele stron blokuje wszystkie trzy przypadkiem — przez wtyczkę bezpieczeństwa, regułę CDN albo skopiowany robots.txt. Sprawdzam, co naprawdę przepuszcza Wasz serwer, i ustawiam to tak, żeby wyszukiwanie ChatGPT mogło czytać stronę, a trening pozostał Waszą decyzją."),

        h2("Kiedy ChatGPT podaje błędne informacje o firmie"),
        p(
          "Stary adres, usługa, której już nie ma, cena konkurenta przy Waszej nazwie: ChatGPT powtarza to, co mówią jego źródła. Rozwiązanie to znaleźć to źródło i poprawić je tam, a nie kłócić się z chatbotem. Jak to działa, opisuję na stronie ",
          link("poprawa błędnych danych o firmie w AI", "/pl/oferty/poprawa-blednych-danych-w-ai"),
          ".",
        ),

        h2("Jak mierzę widoczność w ChatGPT"),
        p("Odpowiedzi ChatGPT zmieniają się z każdym zapytaniem, więc jeden zrzut ekranu niczego nie dowodzi. Używam stałego zestawu pytań, które zadają Wasi klienci, sprawdzanego według harmonogramu w Waszych językach, i zapisuję, czy jesteście wymieniani, jak Was opisano i jakie źródła stoją za odpowiedzią. Różnica między punktem wyjścia a kolejnymi pomiarami to wynik."),
        p(
          "ChatGPT to jeden z kilku asystentów, a każdy czyta inne źródła. Jeśli potrzebujecie także Google, Perplexity i podsumowań AI, zajrzyjcie na strony ",
          link("usługi AI SEO", "/pl/oferty/uslugi-ai-seo"),
          " i ",
          link("LLM SEO", "/pl/oferty/llm-seo"),
          ".",
        ),

        h2("Ile kosztuje pozycjonowanie w ChatGPT"),
        li("Audyt widoczności w ChatGPT — co ChatGPT mówi o Was, na podstawie jakich źródeł i co poprawić najpierw: od 1000 zł, jednorazowo."),
        li("Stałe pozycjonowanie w ChatGPT — źródła, wzmianki, fakty na stronie, poprawki i monitoring: od 3500 zł miesięcznie."),
        p(
          "Sam monitoring, jeśli chcecie tylko śledzić, co mówią ChatGPT i inni asystenci, zaczyna się od 1000 zł miesięcznie. Pełne ceny są na stronie ",
          link("cennika", "/pl/cennik"),
          ".",
        ),

        h2("Jak przebiega pozycjonowanie w ChatGPT"),
        ol("Pytania. Ustalamy pytania, które Wasi klienci zadają ChatGPT, w Waszych językach i na Waszych rynkach."),
        ol("Punkt wyjścia. Sprawdzam je i zapisuję, kto jest wymieniany, jak i na podstawie jakich źródeł."),
        ol("Praca. Źródła, wzmianki, ustawienia robotów i fakty na stronie poprawiam w kolejności od największego wpływu."),
        ol("Ponowny pomiar. Te same pytania sprawdzam co miesiąc."),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie w ChatGPT: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Czym jest pozycjonowanie w ChatGPT?", "To praca, dzięki której ChatGPT wymienia firmę z poprawnymi faktami: znalezienie źródeł, z których korzysta w Waszej branży, obecność w nich, fakty zapisane tak, żeby dało się je zacytować, ustawienie robotów OpenAI i pomiar odpowiedzi przed i po."],
          ["Jak ChatGPT decyduje, które firmy polecić?", "Przy pytaniach o wykonawców przeszukuje sieć i wybiera niewielki zestaw źródeł — w moim badaniu 1,6 na odpowiedź. Wymienia firmy, które te źródła opisują jasno i spójnie. Własna strona firmy to tylko jedno z nich."],
          ["Czy gwarantujecie, że ChatGPT nas poleci?", "Nie. Nikt nie kontroluje odpowiedzi ChatGPT. Można sprawić, że będziecie obecni i poprawnie opisani w źródłach, z których korzysta, i zmierzyć, jak często jesteście wymieniani przed i po."],
          ["Czy powinniśmy zablokować GPTBot?", "To decyzja biznesowa: GPTBot dotyczy trenowania modeli OpenAI, a nie wyszukiwania. Zablokowanie go nie usuwa Was z wyszukiwania ChatGPT; zablokowanie OAI-SearchBot — tak."],
          ["Kiedy widać efekty pozycjonowania w ChatGPT?", "Zmiany robotów i na stronie mogą być widoczne po kilku tygodniach. Nowe wzmianki w innych serwisach i zmiana opisu firmy przez ChatGPT zajmują zwykle dwa–cztery miesiące."],
          ["Ile kosztuje pozycjonowanie w ChatGPT?", "Audyt od 1000 zł, stała praca od 3500 zł miesięcznie, sam monitoring od 1000 zł miesięcznie. Po krótkim opisie firmy podaję stałą cenę."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie w ChatGPT: co mi przesłać"),
        p(
          "Prześlijcie nazwę firmy i stronę, rynki, na których sprzedajecie, oraz trzy–cztery pytania, które Wasi klienci zadaliby ChatGPT. Odpowiem, co sprawdziłbym najpierw, i podam stałą cenę. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
