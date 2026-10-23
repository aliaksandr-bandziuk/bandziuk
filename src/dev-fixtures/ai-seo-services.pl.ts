// Landing page fixture: Usługi AI SEO (PL), market version of
// ai-seo-services.en, nested under /pl/oferty like the other AI services.
// Semantic core: research/pseo/page-core/ai-search.md (PL): ai seo / seo ai
// 720 (one bucket), ai seo expert 10, seo ai agency 10.
// Intent: research/pseo/intent-check-ai-services.md — «seo ai» 0 shared URLs
// with «pozycjonowanie w ai» (owned by /pl/oferty/pozycjonowanie-w-ai-i-chatgpt,
// linked, not targeted here). SERP: agencies + a few tools → our service.
// Prices: PL AI hub states audyt od 1000 zł, stała praca do 3500 zł / mies.
import { p, h2, li, ol, link, k } from "./pt";

export const aiSeoServicesPl = {
  lang: "pl",
  group: "ai-seo-services",
  slug: "uslugi-ai-seo",
  parentPath: ["oferty"],
  pageType: "service",
  title: "Usługi AI SEO",
  heading: "Usługi AI SEO: widoczność w Google i w odpowiedziach AI",
  excerpt:
    "Świadczę usługi AI SEO: jedna praca, dzięki której firmę znajdują w Google i poprawnie wymieniają ChatGPT, Perplexity i podsumowania AI w Google — z pomiarem przed i po.",
  seo: {
    metaTitle: "Usługi AI SEO: Google i odpowiedzi AI | Bandziuk",
    metaDescription:
      "Usługi AI SEO: widoczność w Google oraz w odpowiedziach ChatGPT, Perplexity i AI Overviews. Strona, wzmianki, dane strukturalne i pomiar. Audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Google + ChatGPT + AI Overviews", "Audyt od 1000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Wymienieni w ChatGPT", "Cytowani w AI Overviews", "Widoczni w Google", "Pomiar co miesiąc"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt AI SEO: co pokazują o firmie Google i asystenci AI", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Optymalizacja strony pod AI SEO: fakty, dane strukturalne, dostępność dla robotów", price: 3500, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe AI SEO: Google i odpowiedzi AI z monitoringiem", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co otrzymujecie",
      title: "Co obejmują usługi AI SEO",
      items: [
        { _key: k("o"), iconName: "search", title: "Punkt wyjścia w Google i w odpowiedziach AI", text: "Stały zestaw pytań klientów, sprawdzony przed pracą" },
        { _key: k("o"), iconName: "file-text", title: "Podstrony, które asystent może zacytować", text: "Fakty jako sprawdzalne zdania, jedno pytanie na podstronę" },
        { _key: k("o"), iconName: "code", title: "Dane strukturalne i treść dostępna dla robotów", text: "To, co mówi strona, czytelne bez skryptów" },
        { _key: k("o"), iconName: "link", title: "Wzmianki tam, gdzie czytają asystenci", text: "Katalogi, opinie i artykuły, które Was wymieniają" },
        { _key: k("o"), iconName: "shield-check", title: "Błędne fakty znalezione i poprawione", text: "U źródła, a nie w kłótni z chatbotem" },
        { _key: k("o"), iconName: "trending-up", title: "Pomiar co miesiąc", text: "Pozycje, cytowania i wzmianki — te same pytania za każdym razem" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt AI SEO", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe AI SEO", value: "od 3500 zł / mies.", note: "Google + odpowiedzi AI", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: wyniki na stronach, które optymalizowałem",
      subtitle:
        "Te same strony sprawdzam teraz także w odpowiedziach AI: biuro architektoniczne, którego ruch organiczny wzrósł 29 razy, wielojęzyczna agencja edukacyjna i lokalne firmy usługowe.",
      picks: [
        "architecture-website-rebuild-and-seo-scan",
        "full-multilingual-website-development-and-seo-for-student-services",
        "auto-repair-seo-and-ux-boost",
        "renovation-and-investment-website-with-premium-design",
        "felgilab-wordpress-rebuild",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena usług AI SEO",
      subtitle: "Odpowiem w ciągu dnia roboczego: co sprawdziłbym najpierw w Google i w odpowiedziach AI, i ile to kosztuje.",
      contextLabel: "Nazwa firmy lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i otrzymaj wycenę",
      note: "Albo napiszcie na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Czego potrzebujecie najpierw?", options: ["Wiedzieć, co AI mówi o firmie", "Być wymienianymi w AI", "Google i AI razem", "Nie wiem"] },
        { _key: k("z"), question: "Gdzie są Wasi klienci?", options: ["W jednym mieście", "W Polsce", "W kilku krajach"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Świadczę usługi AI SEO: pracę, dzięki której firmę znajdują w Google i wymieniają, z poprawnymi faktami, gdy klienci zamiast szukać pytają ChatGPT, Perplexity, Gemini albo podsumowania AI w Google. To dwa kanały, które nagradzają co innego — Google układa strony, asystenci cytują źródła, którym ufają — więc praca obejmuje oba, a każdy mierzę osobno."),

        h2("Co obejmują usługi AI SEO: pozycje w Google i odpowiedzi AI, mierzone osobno"),
        p("Klient, który pyta asystenta „które biuro rachunkowe w Warszawie obsługuje startupy”, dostaje dwie–trzy nazwy i zwykle kontaktuje się z jedną z nich. To, czy będzie wśród nich Wasza firma, zależy od tego:"),
        li("czy asystent odróżnia Waszą firmę od innych o podobnej nazwie"),
        li("czy znajduje podstrony, które jasno mówią, co robicie, dla kogo i gdzie"),
        li("czy inne strony, którym ufa — katalogi, opinie, artykuły — mówią o Was to samo"),
        li("czy te fakty się ze sobą zgadzają"),
        p("Usługi AI SEO obejmują to wszystko, a zwykłe SEO zostaje częścią pracy: podsumowania AI w Google korzystają ze stron, które już są wysoko, a ChatGPT i Perplexity częściej sięgają po wideo, sieci zawodowe, fora i duże serwisy. Wysiłek w jednym kanale sam nie przenosi się na drugi, więc dzielę go między nie świadomie."),

        h2("Czym jest SEO AI, a czym nie jest"),
        p("„SEO AI” oznacza dwie różne rzeczy. Pierwsza to SEO pod wyszukiwanie AI: widoczność firmy i poprawny opis w odpowiedziach asystentów. Druga to SEO robione narzędziami AI: generatory tekstów, masowe treści, automatyczne linki. Moje usługi to pierwsze. Narzędzi AI używam tam, gdzie oszczędzają czas — przy grupowaniu fraz czy sprawdzaniu stron — ale nie sprzedaję masowo generowanych treści: rzadko się pozycjonują, a asystent nie ma powodu cytować strony, która mówi to samo co tysiąc innych."),

        h2("Jak asystenci AI wybierają firmy, które wymieniają"),
        p(
          "W mojej ",
          link("analizie 141 odpowiedzi AI na pytania „kogo zatrudnić”", "/pl/blog/pozycjonowanie-w-ai-badanie"),
          " dwie rzeczy znaczyły więcej niż jakość strony: czy asystent odróżniał firmę od innych o podobnej nazwie i czy firma mówiła, co robi, prostymi zdaniami oznajmującymi — jedyna odpowiedź, która wyjaśniła swój wybór, zacytowała właśnie takie zdanie. Źródła, które cytowali asystenci, były też inne niż te, które są wysoko w Google.",
        ),
        p("Dlatego AI SEO zaczyna się od tego, co jest napisane, a nie od sztuczek: asystent nie poleci firmy „dla startupów”, jeśli to słowo nie pojawia się nigdzie, gdzie może je przeczytać."),

        h2("Optymalizacja strony pod AI SEO: fakty, struktura, dostępność"),
        p("Na samej stronie optymalizacja pod AI SEO obejmuje:"),
        li("fakty, które Was wyróżniają — usługi, rynki, klientów, ceny tam, gdzie można je podać — zapisane prostymi, sprawdzalnymi zdaniami"),
        li("jedną podstronę na pytanie, które zadają klienci, z odpowiedzią w pierwszych zdaniach"),
        li("dane strukturalne, które powtarzają to, co widać na stronie — nie więcej i nie mniej"),
        li("treść dostępną bez uruchamiania skryptów, bo wiele robotów AI ich nie uruchamia"),
        p(
          "Tę część można zamówić osobno: ",
          link("przygotowanie strony do wyszukiwania AI", "/pl/oferty/przygotowanie-strony-do-wyszukiwania-ai"),
          ".",
        ),

        h2("AI SEO poza stroną: wzmianki, katalogi i opinie, którym ufają asystenci"),
        p("Asystenci rzadko ufają tylko temu, co firma mówi o sobie. Szukają tych samych faktów na innych stronach: w wizytówkach, katalogach branżowych, serwisach z opiniami, artykułach i zestawieniach. Ta część pracy sprawdza, z których źródeł asystenci w Waszej branży naprawdę korzystają, dba o to, żeby Wasze dane były tam pełne i jednakowe, i zdobywa wzmianki tam, gdzie Was brakuje. Bez kupionych „cytowań AI” i fałszywych opinii."),

        h2("Błędne informacje o firmie w odpowiedziach AI"),
        p(
          "Czasem problemem nie jest brak widoczności, tylko błędny opis: stary adres, usługa, której już nie ma, cena konkurenta. Rozwiązanie to znaleźć źródło, z którego asystent to wziął, i poprawić je tam. Jak to działa, opisuję na stronie ",
          link("poprawa błędnych danych o firmie w AI", "/pl/oferty/poprawa-blednych-danych-w-ai"),
          ".",
        ),

        h2("Jak mierzę wyniki AI SEO"),
        p("Odpowiedzi AI zmieniają się z każdym zapytaniem, więc jeden zrzut ekranu niczego nie dowodzi. Pomiar to stały zestaw pytań, które zadają Wasi klienci, sprawdzany w kilku asystentach i językach według harmonogramu: czy jesteście wymieniani, jak Was opisują i jakie źródła cytują. Obok tego: pozycje w Google, cytowania w podsumowaniach AI i zapytania od klientów."),
        p(
          "Punkt wyjścia to ",
          link("audyt widoczności w wyszukiwaniu AI", "/pl/oferty/audyt-widocznosci-w-ai"),
          ", część stała to ",
          link("monitoring marki w odpowiedziach AI", "/pl/oferty/monitoring-marki-w-ai"),
          ".",
        ),

        h2("GEO, AEO i pozycjonowanie w ChatGPT: co oznaczają te nazwy"),
        p("Ta sama dziedzina ma kilka nazw. GEO (generative engine optimization) dotyczy tego, czy firma pojawia się w odpowiedziach pisanych przez asystentów. AEO (answer engine optimization) — tego, czy to Wasze sformułowanie zostanie zacytowane jako odpowiedź na konkretne pytanie. „Pozycjonowanie w ChatGPT” i „LLM SEO” to potoczne nazwy tej samej pracy. W praktyce się przenikają, a usługi AI SEO obejmują je wszystkie."),
        p(
          "Więcej na stronach ",
          link("AI SEO i optymalizacja GEO", "/pl/oferty/ai-seo-and-geo-optymalizacja"),
          " oraz ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Agencja SEO AI czy niezależny specjalista: jak wybrać"),
        p("Wśród firm, które sprzedają SEO AI, są duże agencje, dostawcy narzędzi i freelancerzy. Ja pracuję jako niezależny konsultant: ta sama osoba sprawdza Waszą widoczność, zmienia podstrony i mierzy wynik. Niezależnie od wyboru zapytajcie:"),
        li("Czy mierzycie odpowiedzi AI stałym zestawem pytań, przed i po?"),
        li("Czy „AI SEO” to dla Was widoczność w wyszukiwaniu AI, czy generowanie treści przez AI?"),
        li("Z jakich źródeł korzystają asystenci w naszej branży i skąd to wiecie?"),
        li("Co obiecujecie? Nikt nie może zagwarantować miejsca w odpowiedziach ChatGPT; kto to robi, sprzedaje coś innego."),
        p(
          "Jak wygląda współpraca ze mną jako niezależnym konsultantem, opisuję na stronie ",
          link("ekspert AI SEO", "/pl/oferty/ekspert-ai-seo"),
          ".",
        ),

        h2("Ile kosztują usługi AI SEO"),
        li("Audyt AI SEO — co pokazują o Was Google i asystenci AI, ze źródłami: od 1000 zł, jednorazowo."),
        li("Optymalizacja strony pod AI SEO — fakty, dane strukturalne, dostępność dla robotów: od 3500 zł jako projekt."),
        li("Stałe AI SEO — Google i odpowiedzi AI razem, wzmianki, poprawki i monitoring: od 3500 zł miesięcznie."),
        p(
          "Pełne ceny są na stronie ",
          link("cennika", "/pl/cennik"),
          ".",
        ),

        h2("Jak przebiega praca nad AI SEO"),
        ol("Pytania. Ustalamy pytania, które zadają Wasi klienci, w językach i na rynkach, na których sprzedajecie."),
        ol("Punkt wyjścia. Sprawdzam je w asystentach i w Google i zapisuję, kto jest wymieniany, jak i na podstawie jakich źródeł."),
        ol("Poprawki. Podstrony, dane strukturalne, katalogi i wzmianki zmieniam w kolejności od największego wpływu."),
        ol("Ponowny pomiar. Te same pytania sprawdzam jeszcze raz; różnica to wynik."),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Usługi AI SEO: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Czym są usługi AI SEO?", "To praca, dzięki której firma jest widoczna w odpowiedziach generowanych przez AI — ChatGPT, Perplexity, Gemini, podsumowania AI w Google — i w zwykłych wynikach Google: jasne fakty na stronie, dane strukturalne, spójne wzmianki na innych stronach i pomiar tego, co mówią asystenci, przed i po."],
          ["Czy ChatGPT może robić SEO?", "Może pomóc w szkicach tekstów i pomysłach. Nie widzi Waszych pozycji, konkurencji ani tego, co mówią o Was inne asystenty, i nie zmieni źródeł, z których się uczy. AI SEO zajmuje się właśnie tymi źródłami."],
          ["Czy gwarantujecie, że ChatGPT nas poleci?", "Nie. Nikt nie kontroluje odpowiedzi asystenta. Można sprawić, że fakty o Was będą jasne, spójne i obecne tam, gdzie asystenci szukają, i zmierzyć, jak często jesteście wymieniani przed i po."],
          ["Czy nadal potrzebujemy zwykłego SEO?", "Tak — dla samego Google i dla podsumowań AI, które korzystają ze stron wysoko w wynikach. ChatGPT i Perplexity sięgają po szerszy zestaw źródeł, więc AI SEO dokłada tam pracę, a nie zastępuje SEO."],
          ["Kiedy widać efekty AI SEO?", "Zmiany na Waszej stronie mogą pojawić się w odpowiedziach AI po kilku tygodniach, gdy roboty ją ponownie odwiedzą. Wzmianki na innych stronach i zmiana opisu firmy przez asystentów zajmują zwykle dwa–cztery miesiące."],
          ["Ile kosztują usługi AI SEO?", "Audyt od 1000 zł, optymalizacja strony od 3500 zł jako projekt, stałe AI SEO od 3500 zł miesięcznie. Po krótkim opisie firmy podaję stałą cenę."],
          ["Czy piszecie treści za pomocą AI?", "Nie jako produkt. Narzędzi AI używam do analizy i szkiców; to, co publikujemy, jest pisane wokół faktów o Waszej firmie, bo właśnie je cytują asystenci."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów usługi AI SEO: co mi przesłać"),
        p(
          "Prześlijcie nazwę firmy i stronę, rynki i języki, na których sprzedajecie, oraz trzy–cztery pytania, które Wasi klienci zadaliby asystentowi. Odpowiem, co sprawdziłbym najpierw, i podam stałą cenę. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
