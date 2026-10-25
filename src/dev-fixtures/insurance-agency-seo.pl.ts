// Landing page fixture: Pozycjonowanie strony agenta ubezpieczeniowego (PL),
// group «insurance-agency-seo». New page. Market version for Polish agenci
// ubezpieczeniowi (agenci wyłączni i multiagencje) and small networks of
// placówki, not a translation of insurance-agency-seo.en.
// Semantic core (ref/real-estate-finance.md): no PL phrases measured for
// insurance; H1 and headings carry «pozycjonowanie strony agenta
// ubezpieczeniowego», «pozycjonowanie agenta ubezpieczeniowego»,
// «pozycjonowanie multiagencji», «agencja ubezpieczeniowa» with OC/AC,
// ubezpieczenie mieszkania, na życie, firmowe. EN reference volumes for the
// topic: insurance agent seo 590 = insurance agency seo.
// Intent (ref/intent-check-real-estate-finance.md): EN «insurance agent seo»
// vs «insurance agency seo» 8 of 10 shared → one SEO page for agent and
// agency; SEO vs website design 0 shared → the build is the sibling page
// /pl/strona-internetowa-dla-agenta-ubezpieczeniowego (linked once).
// Angle: competing with porównywarki (Rankomat, mubi) and towarzystwa for OC
// phrases; agent wyłączny vs multiagencja (TU rules on brand — general);
// podstrony: OC/AC (auto sprowadzone, młody kierowca), mieszkanie z cesją do
// kredytu, życie, OC zawodowe i firmowe; rejestr pośredników prowadzony przez
// KNF and numer wpisu (general, no article numbers, «nie porada prawna»);
// YMYL; wizytówka Google per placówka (near SKP and car dealers); opinie bez
// szczegółów szkody; formularz kalkulacji without PESEL on step one (RODO);
// measuring in kalkulacje, telefony and polisy; AI answers (GEO, AEO).
// NOT on this page: site design and build, carrier template vs own site
// (/pl/strona-internetowa-dla-agenta-ubezpieczeniowego); kredyty hipoteczne
// (/pl/pozycjonowanie-strony-posrednika-kredytowego, linked once in the cesja
// paragraph); Google Ads, lead buying, social media (not offered).
// Owner’s rules: PL form «pozycjonowanie strony X»; every SEO page covers AI
// search (GEO, AEO); never say there are no clients from the visitor’s segment.
import { p, h2, h3, li, link, k } from "./pt";

export const insuranceAgencySeoPl = {
  lang: "pl",
  group: "insurance-agency-seo",
  slug: "pozycjonowanie-strony-agenta-ubezpieczeniowego",
  title: "Pozycjonowanie strony agenta ubezpieczeniowego",
  heading: "Pozycjonowanie strony agenta ubezpieczeniowego",
  excerpt:
    "Zajmuję się pozycjonowaniem stron agentów ubezpieczeniowych i multiagencji: podstrony OC/AC, ubezpieczeń mieszkań, na życie i dla firm, wizytówka Google każdej placówki, dane zgodne z rejestrem KNF i widoczność w odpowiedziach AI — z wynikiem liczonym w kalkulacjach i polisach.",
  seo: {
    metaTitle: "SEO dla agenta ubezpieczeniowego i multiagencji | Bandziuk",
    metaDescription:
      "Pozycjonowanie strony agenta ubezpieczeniowego: podstrony OC/AC, mieszkań, życia i firm, wizytówka Google, opinie, odpowiedzi AI. Audyt SEO od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Multiagencja w Google i AI", "Audyt od 1000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["OC auto sprowadzone Lublin", "Placówka w Mapach Google", "Poproś o kalkulację", "Poleca ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO strony agenta ubezpieczeniowego: strona, wizytówki placówek, konkurencja, AI", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO dla multiagencji: podstrony ubezpieczeń, dane z rejestru, dane strukturalne", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie strony agenta ubezpieczeniowego", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje pozycjonowanie strony agenta ubezpieczeniowego",
      items: [
        { _key: k("o"), iconName: "layers", title: "Podstrona dla każdego ubezpieczenia", text: "OC/AC, mieszkanie z cesją, życie, OC zawodowe, flota" },
        { _key: k("o"), iconName: "map-pin", title: "Wizytówka Google każdej placówki", text: "Kategoria, godziny, zdjęcia i link do podstrony placówki" },
        { _key: k("o"), iconName: "shield-check", title: "Dane zgodne z rejestrem KNF", text: "Numer wpisu, towarzystwa, autor i data przy poradnikach" },
        { _key: k("o"), iconName: "message-circle", title: "Opinie po likwidacji szkody", text: "Prośba w dobrym momencie, odpowiedź bez szczegółów polisy" },
        { _key: k("o"), iconName: "sparkles", title: "Widoczność w odpowiedziach AI", text: "ChatGPT, Perplexity i podsumowania AI w Google" },
        { _key: k("o"), iconName: "trending-up", title: "Raport w kalkulacjach i polisach", text: "Telefony, formularze i WhatsApp według rodzaju ubezpieczenia" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO strony agenta", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe pozycjonowanie agencji ubezpieczeniowej", value: "od 3500 zł / mies.", note: "podstrony, wizytówki, opinie, AI", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: strony, które budowałem i pozycjonowałem pod zapytania od klientów",
      subtitle:
        "Cyprus VIP Estates to luksusowe nieruchomości na Cyprze — zakup, przy którym klient długo porównuje i musi zaufać sprzedającemu. Zbudowałem ten wielojęzyczny serwis z integracją z CRM, dzięki której każde zapytanie trafia do działu sprzedaży, i co miesiąc prowadzę jego pozycjonowanie. Obok: agencja edukacyjna z jedną strukturą dla dziesięciu krajów, firma skanowania laserowego 3D i modelowania BIM, która po przebudowie strony dostaje zapytania co tydzień, oraz warszawska firma remontowo-inwestycyjna i warsztat samochodowy. Agencja ubezpieczeniowa potrzebuje tego samego: podstrony dla każdego produktu, widoczności każdej placówki w okolicy i krótkiej drogi od wyszukiwania do prośby o kalkulację.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "build-and-optimize-a-multilingual-real-estate-platform",
        "full-multilingual-website-development-and-seo-for-student-services",
        "architecture-website-rebuild-and-seo-scan",
        "renovation-and-investment-website-with-premium-design",
        "auto-repair-seo-and-ux-boost",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena pozycjonowania strony agenta ubezpieczeniowego",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: które ubezpieczenia i placówki pozycjonowałbym najpierw i za jaką stałą cenę. Proszę nie wysyłać danych klientów ani polis.",
      contextLabel: "Nazwa agencji lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Jak działacie?", options: ["Agent wyłączny jednego towarzystwa", "Multiagencja", "Sieć kilku placówek", "Agent dopiero buduje portfel"] },
        { _key: k("z"), question: "Których ubezpieczeń chcecie sprzedawać więcej?", options: ["OC/AC i komunikacyjne", "Mieszkania i domy", "Na życie i zdrowotne", "Firmowe i OC zawodowe", "Kilku z nich"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Pozycjonowanie strony agenta ubezpieczeniowego to praca nad tym, żeby osoba, która szuka OC na właśnie kupione auto, ubezpieczenia mieszkania do kredytu albo polisy dla swojej firmy, znalazła w Google Waszą agencję — a nie tylko porównywarkę — i zadzwoniła albo poprosiła o kalkulację. Robię to sam: audyt, podstrony ubezpieczeń, wizytówki placówek, poprawki w kodzie i raporty, dla agentów wyłącznych, multiagencji i małych sieci placówek."),

        h2("Pozycjonowanie agenta ubezpieczeniowego: z kim konkurujecie w Google"),
        p("Na frazy typu „OC samochodu” czy „ubezpieczenie mieszkania” pierwszą stronę zajmują porównywarki takie jak Rankomat czy mubi, strony towarzystw i portale finansowe. Agent nie wygra z nimi frazy ogólnej i nie musi. Wygrywa tam, gdzie liczy się człowiek i miejsce:"),
        li("frazy z miastem i dzielnicą: „agent ubezpieczeniowy Lublin”, „ubezpieczenia OC Bemowo”, „multiagencja Gdynia”"),
        li("sytuacje, w których kalkulator nie wystarcza: auto sprowadzone z zagranicy, młody kierowca po szkodzie, firma z flotą, OC zawodowe w nietypowym zawodzie"),
        li("pomoc przy szkodzie, której porównywarka nie daje"),
        li("odpowiedzi ChatGPT i podsumowania AI w Google, które coraz częściej polecają konkretnego agenta"),
        p("Pozycjonowanie agenta ubezpieczeniowego łączy te miejsca w jedną listę zadań, ułożoną według tego, które ubezpieczenia przynoszą Wam najwięcej prowizji."),

        h2("Agent wyłączny czy multiagencja: jak model działania zmienia pozycjonowanie strony"),
        p("Multiagencja może pokazać, z iloma towarzystwami współpracuje, i to jest jej główny argument w wyszukiwarce: klient wpisuje „porównanie ofert OC u agenta” albo nazwę konkretnego towarzystwa z miastem, bo chce porozmawiać z kimś, kto zestawi kilka ofert. Podstrona, która mówi, jakie towarzystwa macie dla każdego rodzaju ubezpieczenia i jak wygląda porównanie, odpowiada na takie wyszukiwanie."),
        p("Agent wyłączny działa w imieniu jednego towarzystwa, które zwykle ma zasady używania swojej nazwy i logo, opisu produktów i własnych stron agentów. Zanim zacznę pracę, proszę o te wytyczne — sprawdźcie je w swoim towarzystwie. Własna domena, jeśli jest dozwolona, zostaje z Wami przy zmianie współpracy; jeśli nie, pracujemy nad wizytówką Google, opiniami i stroną agenta w serwisie towarzystwa."),

        h2("Podstrony ubezpieczeń na stronie agenta: OC/AC, mieszkanie, życie i firma"),
        p("Jedna podstrona „Oferta” z listą dziesięciu ubezpieczeń nie wejdzie wysoko na żadne z nich. Każdy rodzaj ubezpieczenia, który chcecie sprzedawać, dostaje własną podstronę z miastem w tytule."),
        h3("Ubezpieczenie OC i AC samochodu: frazy z sytuacją kierowcy"),
        p("Ludzie wpisują swoją sytuację: „OC na auto sprowadzone z Niemiec”, „ubezpieczenie dla młodego kierowcy”, „czy OC przechodzi na nowego właściciela”, „AC na samochód w leasingu”. Podstrona dla każdej z nich mówi, co wpływa na składkę, jakie dokumenty przygotować i jak szybko dostanie się polisę."),
        h3("Ubezpieczenie mieszkania i domu z cesją na bank"),
        p(
          "Bank przy kredycie hipotecznym wymaga zwykle ubezpieczenia nieruchomości z cesją praw z polisy, a kupujący szuka go w pośpiechu przed podpisaniem umowy. Podstrona „ubezpieczenie mieszkania do kredytu” z listą tego, czego wymagają banki, przyciąga dokładnie tych ludzi. To dobra okazja do współpracy z pośrednikami kredytowymi — ich stronom poświęcam osobną stronę: ",
          link("pozycjonowanie strony pośrednika kredytowego", "/pl/pozycjonowanie-strony-posrednika-kredytowego"),
          ".",
        ),
        h3("Ubezpieczenia na życie i zdrowotne"),
        p("Klient porównuje tu tygodniami i chce rozmowy, nie formularza. Podstrony odpowiadają na pierwsze pytania — ile ochrony potrzebuje rodzina, czym różni się polisa grupowa od indywidualnej, czy choroba przewlekła przekreśla ubezpieczenie — i kończą się propozycją spotkania lub rozmowy wideo."),
        h3("Ubezpieczenia firmowe i OC zawodowe"),
        p("Przedsiębiorcy wpisują swój zawód i wymóg: „OC księgowego”, „OC dla programisty na B2B”, „OC przewoźnika OCP”, „ubezpieczenie floty 10 aut”. Takich wyszukiwań jest mniej, ale składki są wyższe, a porównywarki rzadko mają na nie dobrą odpowiedź."),

        h2("Rejestr agentów KNF, numer wpisu i zaufanie do strony agencji ubezpieczeniowej"),
        p("Google traktuje treści o pieniądzach i ubezpieczeniach jako YMYL („Your Money or Your Life”) i ocenia je surowiej niż większość innych tematów. Na stronie agencji pomagają w tym:"),
        li("numer wpisu do rejestru pośredników ubezpieczeniowych prowadzonego przez KNF, który klient może sam sprawdzić"),
        li("lista towarzystw, w imieniu których działacie, zgodna z rejestrem"),
        li("imię, nazwisko i doświadczenie autora przy każdym poradniku oraz data aktualizacji"),
        li("brak obietnic typu „najtańsze OC w mieście” i opis zakresu ochrony jako przykładu, z odesłaniem do ogólnych warunków ubezpieczenia"),
        p("To ogólny opis, nie porada prawna. Obowiązki informacyjne agenta sprawdźcie w aktualnych przepisach i w swoim towarzystwie; ostatnie słowo co do każdego tekstu należy do Was."),

        h2("Wizytówka Google agencji ubezpieczeniowej i frazy z nazwą miasta"),
        p("Przy wyszukiwaniu „agent ubezpieczeniowy” z miastem albo „w pobliżu” nad wynikami pojawia się mapa z trzema firmami. Każda placówka, w której przyjmujecie klientów — także ta przy stacji kontroli pojazdów czy salonie samochodowym — dostaje wizytówkę z kategorią „Agencja ubezpieczeniowa”, rodzajami ubezpieczeń jako usługami, prawdziwymi zdjęciami i linkiem do podstrony tej placówki. Sieć kilku placówek dostaje podstronę dla każdego miasta z ludźmi, którzy tam pracują, a nie jeden tekst ze zmienioną nazwą miasta."),
        p(
          "Całą pracę nad Mapami Google opisuję na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Opinie klientów agenta ubezpieczeniowego: kiedy prosić i jak odpowiadać"),
        p("Ubezpieczenie sprawdza się przy szkodzie, więc najcenniejsza jest opinia po sprawnie załatwionej likwidacji albo po odnowieniu, przy którym klient zaoszczędził. Wtedy warto wysłać bezpośredni link do formularza opinii. Zasady Google zabraniają nagradzania za opinie, więc prośba nie może obiecywać rabatu ani prezentu."),
        p("W odpowiedzi nie potwierdzajcie, że autor jest klientem, i nie piszcie nic o polisie ani szkodzie — dane klientów chroni RODO i tajemnica ubezpieczeniowa także w publicznej odpowiedzi. Spokojna, ogólna odpowiedź na negatywną opinię o odmowie wypłaty czyta więcej osób niż samą opinię."),

        h2("Poradniki na stronie multiagencji: odpowiedzi na pytania o polisy"),
        p("Treści, które przyprowadzają klientów, odpowiadają na pytania zadawane przed telefonem do agenta: „jak wypowiedzieć OC po zakupie auta”, „co obejmuje assistance”, „czy ubezpieczenie mieszkania pokrywa zalanie sąsiada”. Listę tematów buduję z danych wyszukiwań i z pytań, które słyszycie w placówce. Tekst piszę na podstawie Waszych notatek, a agent sprawdza każde zdanie o zakresie ochrony. Jeden rzetelny poradnik miesięcznie daje więcej niż kilka ogólnych."),

        h2("Formularz kalkulacji, telefon i WhatsApp: jak mierzę wyniki pozycjonowania agenta"),
        p("Agencja zarabia na polisach, więc w raporcie liczę to, co do nich prowadzi, z podziałem na rodzaje ubezpieczeń:"),
        li("telefony z wyszukiwarki i kliknięcia w WhatsApp, mierzone w GA4"),
        li("prośby o kalkulację z każdej podstrony, z adresem, od którego zaczęła się wizyta"),
        li("zawarte polisy, jeśli Wasz system agencyjny zapisuje źródło klienta"),
        p("Formularz, który na pierwszym kroku prosi o PESEL i numer rejestracyjny, odstrasza wielu ludzi i zbiera dane, które trzeba chronić zgodnie z RODO. Na start wystarczą imię, telefon i rodzaj ubezpieczenia, a resztę ustalacie w rozmowie. W raporcie są liczby, nigdy dane klientów."),

        h2("Pozycjonowanie agenta ubezpieczeniowego w ChatGPT i Google AI Overviews (GEO, AEO)"),
        p("Ludzie pytają ChatGPT, Perplexity i podsumowania AI w Google, gdzie w ich mieście znaleźć agenta, który porówna kilka ofert OC, albo kto ubezpieczy firmę transportową. Asystent traktuje ubezpieczenia jako temat YMYL i wybiera agencje, o których znajduje sprawdzalne fakty. Pracę nad tym nazywa się GEO (generative engine optimization) albo AEO (answer engine optimization):"),
        li("rodzaje ubezpieczeń, towarzystwa, miasta, godziny i języki obsługi zapisane prostymi zdaniami"),
        li("numer wpisu do rejestru i dane placówek zgodne na stronie, w wizytówce i w katalogach"),
        li("dane strukturalne agencji, placówek i agentów"),
        li("poradniki z autorem i datą, z których każdy odpowiada na jedno pytanie"),
        p(
          "Przed pracą i po niej sprawdzam, co asystenci mówią o Waszej agencji i kogo polecają zamiast niej. Więcej na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Audyt SEO strony agencji ubezpieczeniowej i czas do pierwszych efektów"),
        p("Każda współpraca zaczyna się od audytu, a przy jednej placówce audyt i poprawki to często większość potrzebnej pracy. Sprawdzam, które ubezpieczenia nie mają własnej podstrony, jak Google indeksuje stronę i jak szybko działa ona na telefonie, czy wizytówki zgadzają się ze stroną i rejestrem oraz jak dziś opisują agencję asystenci AI. Szczegóły na stronie ",
          link("audyt SEO strony internetowej", "/pl/oferty/audyt-seo-strony-internetowej"),
          ".",
        ),
        p("Poprawki w wizytówce i tytułach potrafią dać efekt w kilka tygodni. Nowa podstrona ubezpieczenia zwykle potrzebuje dwóch–czterech miesięcy, a frazy komunikacyjne w dużych miastach, gdzie konkurują porównywarki, dłużej."),

        h2("Ile kosztuje pozycjonowanie strony agenta ubezpieczeniowego"),
        li("Audyt SEO strony, wizytówek placówek i konkurencji w Waszym mieście: od 1000 zł, jednorazowo, z listą poprawek według wpływu."),
        li("Jednorazowe prace — podstrony ubezpieczeń, dane z rejestru, dane strukturalne, pomiar kalkulacji: od 1000 do 3000 zł."),
        li("Stałe pozycjonowanie strony agenta ubezpieczeniowego — podstrony, poradniki, wizytówki, widoczność w AI i raporty: od 3500 zł miesięcznie, przy sieci placówek w dużych miastach od 5500 zł miesięcznie."),
        p(
          "Pełne widełki są w ",
          link("cenniku", "/pl/cennik"),
          ". Jak planuję stałą pracę, opisuję na stronie ",
          link("strategia i optymalizacja SEO", "/pl/oferty/strategia-i-optymalizacja-seo"),
          ". Jeśli stroną jest szablon od towarzystwa albo strony nie ma wcale, zajrzyjcie na stronę ",
          link("strona internetowa dla agenta ubezpieczeniowego", "/pl/strona-internetowa-dla-agenta-ubezpieczeniowego"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie strony agenta ubezpieczeniowego: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje pozycjonowanie strony agenta ubezpieczeniowego?", "Stałe pozycjonowanie kosztuje od 3500 zł miesięcznie, przy sieci placówek w dużych miastach od 5500 zł. Audyt to od 1000 zł jednorazowo, a pojedyncze prace od 1000 do 3000 zł. Po krótkim opisie agencji podaję stałą cenę."],
          ["Czy agent może wygrać w Google z porównywarkami OC?", "Na ogólną frazę „OC samochodu” zwykle nie. Na frazy z miastem, na nietypowe sytuacje kierowców, ubezpieczenia firmowe i OC zawodowe — tak, bo tam klient szuka człowieka, a nie kalkulatora."],
          ["Czy agent wyłączny może pozycjonować własną stronę?", "Często tak, ale w granicach zasad towarzystwa dotyczących nazwy, logo i opisu produktów. Sprawdźcie je przed startem. Wizytówka Google i opinie należą do Was w każdym modelu."],
          ["Czy numer wpisu do rejestru KNF powinien być na stronie?", "Warto go pokazać: klient i asystenci AI mogą go sprawdzić, a to sygnał zaufania. Zakres obowiązków informacyjnych agenta sprawdźcie w przepisach i w swoim towarzystwie — to ogólny opis, nie porada prawna."],
          ["Ile trwa pozycjonowanie strony agenta ubezpieczeniowego?", "Wizytówka i poprawki techniczne działają w kilka tygodni. Nowe podstrony ubezpieczeń zwykle potrzebują dwóch–czterech miesięcy, frazy komunikacyjne w dużych miastach dłużej."],
          ["Czy ChatGPT poleca agentów ubezpieczeniowych?", "Tak, gdy ktoś zapyta o agenta w swoim mieście. Asystent wybiera agencje, o których znajduje sprawdzalne fakty: rodzaje ubezpieczeń, towarzystwa, adres placówki, numer wpisu i opinie. Tę pracę wykonuję w ramach pozycjonowania."],
          ["Czy pracujesz z agencjami spoza Warszawy?", "Tak, z całej Polski. Pozycjonowanie robię zdalnie: strona, wizytówki placówek i dane wyszukiwań dla Waszych miast."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie strony agenta ubezpieczeniowego: co mi wysłać"),
        p(
          "Wyślijcie link do strony i do wizytówek placówek w Mapach Google, informację, czy jesteście agentem wyłącznym czy multiagencją, ubezpieczenia, których chcecie sprzedawać więcej, i miasta, w których macie placówki. Proszę nie dołączać danych klientów ani polis. Odpowiem, co poprawiłbym najpierw i za jaką stałą cenę. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
