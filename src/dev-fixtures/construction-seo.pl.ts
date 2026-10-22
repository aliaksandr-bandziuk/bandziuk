// Landing page fixture: Pozycjonowanie strony firmy budowlanej (PL), variant A.
// Market version for Poland as a whole; the Warsaw query stays with
// /pl/oferty/pozycjonowanie-strony-firmy-budowlanej-warszawa (linked).
// Semantic core: research/pseo/page-core/construction-recheck.md (PL):
// «pozycjonowanie strony firmy budowlanej» — SEO-agency SERP, volume under the
// source's floor; «reklama firmy budowlanej w internecie» 10; PAA: O co chodzi
// z pozycjonowaniem strony? Jaki jest koszt pozycjonowania SEO? Czy SEO ma
// jeszcze sens? Co jest lepsze: pozycjonowanie czy Google Ads? Jak samemu
// zrobić SEO? «marketing firmy budowlanej» (70) is a marketing-agency SERP —
// mentioned, not targeted. Owner's rules: PL form «pozycjonowanie STRONY X»;
// every SEO page covers AI search (GEO/AEO).
import { p, h2, li, ol, link, k } from "./pt";

export const constructionSeoPl = {
  lang: "pl",
  group: "seo-for-construction-companies",
  slug: "pozycjonowanie-strony-firmy-budowlanej",
  title: "Pozycjonowanie strony firmy budowlanej",
  heading: "Pozycjonowanie strony firmy budowlanej",
  excerpt:
    "Zajmuję się pozycjonowaniem stron firm budowlanych: Mapy Google, podstrony usług, miejscowości i realizacji oraz widoczność w odpowiedziach AI, tak żeby znajdowali Was ludzie, którzy planują budowę albo remont w Waszej okolicy.",
  seo: {
    metaTitle: "Pozycjonowanie strony firmy budowlanej | Bandziuk",
    metaDescription:
      "Pozycjonowanie strony firmy budowlanej: Mapy Google, podstrony usług i miejscowości, realizacje czytelne dla Google, opinie i widoczność w AI. Audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Strona + Mapy Google + AI", "Audyt od 1000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Top 3 w Mapach", "Rozbudowa domu w Twoim mieście", "Realizacje ze zdjęciami", "Zapytaj o wycenę"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO firmy budowlanej: strona i wizytówka Google", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO dla firmy budowlanej: podstrony usług i miejscowości, wizytówka, dane strukturalne", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie strony firmy budowlanej", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje pozycjonowanie strony firmy budowlanej",
      items: [
        { _key: k("o"), iconName: "map-pin", title: "Wizytówka Google dla każdego biura", text: "Kategorie, obszar działania i zdjęcia realizacji na bieżąco" },
        { _key: k("o"), iconName: "layers", title: "Podstrony usług i miejscowości", text: "Pod to, co wpisują klienci: usługa plus miasto" },
        { _key: k("o"), iconName: "image", title: "Realizacje czytelne dla wyszukiwarki", text: "Rodzaj prac, miejsce i metraż tekstem obok zdjęć" },
        { _key: k("o"), iconName: "message-circle", title: "Opinie przypisane do realizacji", text: "Prośba przy odbiorze, odpowiedź w ciągu kilku dni" },
        { _key: k("o"), iconName: "sparkles", title: "Widoczność w odpowiedziach AI", text: "ChatGPT, Perplexity i podsumowania AI w Google" },
        { _key: k("o"), iconName: "trending-up", title: "Raport w zapytaniach", text: "Telefony i prośby o wycenę, nie tylko pozycje" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO: strona i wizytówka Google", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe pozycjonowanie firmy budowlanej", value: "od 3500 zł / mies.", note: "mapy, podstrony, opinie, AI", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: wyniki w wyszukiwarce na stronach, które optymalizowałem",
      subtitle:
        "Najbliżej budownictwa są biuro architektoniczne, którego ruch organiczny wzrósł 29 razy, i firma remontowa. Pozostałe to lokalne firmy usługowe, w których ta sama praca dała mierzalny ruch z wyszukiwarki.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "architecture-website-rebuild-and-seo-scan",
        "renovation-and-investment-website-with-premium-design",
        "auto-repair-seo-and-ux-boost",
        "full-multilingual-website-development-and-seo-for-student-services",
        "felgilab-wordpress-rebuild",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena pozycjonowania strony firmy budowlanej",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: co poprawiłbym najpierw w wizytówce Google i na stronie, i za jaką stałą cenę.",
      contextLabel: "Nazwa firmy lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Skąd teraz przychodzą zlecenia?", options: ["Z poleceń", "Z Google", "Z portali i katalogów", "Nie wiem"] },
        { _key: k("z"), question: "Co budujecie?", options: ["Domy", "Remonty i wykończenia", "Obiekty komercyjne", "Wszystkiego po trochu"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Pozycjonowaniem stron firm budowlanych zajmuję się sam — wizytówką Google, stroną i podstronami usług, miejscowości i realizacji — więc osoba, która robi audyt, jest tą samą, która potem wprowadza poprawki. Pozycjonowanie firmy budowlanej jest przede wszystkim lokalne: klient szuka konkretnej usługi w konkretnym miejscu i najczęściej wybiera z wyników w mapach i z kilku pierwszych linków."),

        h2("Na czym polega pozycjonowanie strony firmy budowlanej: Mapy Google, podstrony usług i realizacji"),
        p("Pozycjonowanie strony firmy budowlanej to praca nad tym, żeby firma pojawiała się, gdy ktoś szuka potrzebnej mu usługi — „rozbudowa domu”, „remont mieszkania pod klucz”, „budowa domu z bloczka” — razem ze swoim miastem, i żeby własna strona wygrywała wyszukiwanie nazwy firmy. Decydują o tym trzy miejsca:"),
        li("wyniki w mapach — trzy firmy z mapą, oceną i telefonem, wyświetlane nad zwykłymi wynikami przy wyszukiwaniach lokalnych"),
        li("zwykłe wyniki, w których strona firmy konkuruje z katalogami, portalami ze zleceniami i dużymi firmami"),
        li("odpowiedzi AI — podsumowania AI w Google i asystenci tacy jak ChatGPT, którzy polecają lokalne firmy i cytują to, co mogą o nich przeczytać"),
        p("Wyniki w mapach zależą głównie od wizytówki Google i opinii, zwykłe wyniki od strony, a odpowiedzi AI od jednego i drugiego oraz od faktów zapisanych tak, żeby maszyna mogła je zacytować: usługi, miejscowości, realizacje, lata na rynku."),

        h2("Pozycjonowanie lokalne firmy budowlanej: wizytówka Google i obszar działania"),
        p("W większości firm budowlanych blok map przynosi więcej zapytań niż wszystko inne razem. Co wprowadza firmę do tego bloku:"),
        li("właściwa kategoria główna — pod to, czym zajmujecie się przede wszystkim — i kategorie dodatkowe dla reszty, a nie jedna ogólna „Firma budowlana”"),
        li("obszar działania zgodny z tym, gdzie naprawdę pracujecie, i ten sam adres biura wszędzie"),
        li("zdjęcia z prawdziwych realizacji, dodawane regularnie, z nazwą prac w opisie"),
        li("usługi w wizytówce z krótkimi opisami"),
        li("ta sama nazwa, adres i telefon na stronie, w wizytówce i w głównych katalogach"),
        p("Firma z kilkoma biurami dostaje wizytówkę dla każdego biura, połączoną z własną podstroną. Fikcyjnych adresów i biur wirtualnych nie ustawiam: Google blokuje takie wizytówki, a firma traci pozycję w mapach, którą już miała."),

        h2("Słowa kluczowe dla firmy budowlanej: wyszukiwania „usługa + miasto”"),
        p("Klienci rzadko szukają „firmy budowlanej”. Szukają usługi: „remont kuchni”, „rozbudowa domu”, „wymiana dachu”, „budowa domu pod klucz” — zwykle z miastem albo dzielnicą. Każde takie połączenie, które naprawdę sprzedajecie, potrzebuje podstrony, która na nie odpowiada:"),
        li("podstrona dla każdej usługi: co obejmuje, typowy czas i widełki cenowe, jeśli da się je podać"),
        li("podstrona dla każdego miasta lub regionu, w którym działacie, z realizacjami stamtąd"),
        li("linki między nimi: podstrona usługi wymienia miejscowości, podstrona miejscowości — usługi"),
        p("Zanim zacznę pracę, pobieram prawdziwe dane wyszukiwań dla Waszych usług i miast, żeby podstrony powstawały wokół fraz, których używają klienci, a nie wokół wewnętrznych nazw prac."),

        h2("Realizacje jako treść SEO na stronie firmy budowlanej"),
        p("Ukończone realizacje to najsilniejsza treść, jaką ma firma budowlana, a na większości stron wyszukiwarka nie może jej przeczytać: galeria zdjęć bez tekstu nic nie mówi Google. Podstrona realizacji, która jest wysoko w wynikach, ma fakty zapisane tekstem — rodzaj prac, miejsce, metraż, czas, potrzebę klienta — obok zdjęć, i linki do pasujących podstron usługi i miejscowości."),
        p("Wtedy każda nowa realizacja staje się nową podstroną, którą można znaleźć po rodzaju prac i miejscu."),

        h2("Opinie i zaufanie w pozycjonowaniu firmy budowlanej"),
        p("Budowa to droga decyzja i opinie czyta się tu uważniej niż w większości usług. Ustawiam stały proces: klient jest proszony o opinię przy odbiorze prac, każda opinia dostaje odpowiedź w ciągu kilku dni, a w opiniach zwykłymi słowami pada nazwa prac i miejscowości — to przy okazji pomaga wizytówce pojawiać się w takich wyszukiwaniach."),
        p("Z dokumentami na stronie jest tak samo: uprawnienia, ubezpieczenie OC, gwarancja i członkostwo w stowarzyszeniach zapisane tekstem i oznaczone danymi strukturalnymi, żeby czytali je i klienci, i wyszukiwarki. Czego nie robię: kupowania opinii ani proszenia wyłącznie zadowolonych klientów. Jedno i drugie łamie zasady Google i łatwo to wykryć."),

        h2("Pozycjonowanie strony firmy budowlanej w AI: widoczność w ChatGPT i Google AI Overviews (GEO, AEO)"),
        p("Coraz więcej klientów pyta ChatGPT, Perplexity albo podsumowania AI w Google, komu powierzyć budowę albo remont, zanim otworzy jakąkolwiek stronę. Te odpowiedzi powstają z tego, co asystent może przeczytać i czemu ufa: wizytówki Google, opinii, katalogów i Waszych własnych podstron. Pracę nad tym, żeby trafić do takich odpowiedzi, nazywa się GEO (generative engine optimization) albo AEO (answer engine optimization). W firmie budowlanej to część tego samego pozycjonowania:"),
        li("usługi, miejscowości, lata na rynku i uprawnienia zapisane prostymi faktami, które asystent może zacytować, a nie tylko pokazane na grafikach"),
        li("dane strukturalne, w których nazwana jest firma, jej usługi i obszar działania"),
        li("te same dane firmy na stronie, w wizytówce i w katalogach, żeby asystent nie pomylił Was z inną firmą"),
        li("odpowiedzi na pytania klientów — widełki cen, terminy, pozwolenia — zapisane na podstronach usług"),
        p(
          "Przed rozpoczęciem pracy i po jej zakończeniu sprawdzam, jak asystenci opisują Waszą firmę. Więcej na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Reklama firmy budowlanej w internecie: pozycjonowanie czy Google Ads"),
        p("Reklama w Google Ads przynosi zapytania od pierwszego dnia i kończy się razem z budżetem. Pozycjonowanie strony wymaga miesięcy, ale działa dalej bez płacenia za kliknięcie. Wiele firm budowlanych łączy jedno z drugim: reklama na sezon, pozycjonowanie na długi okres."),
        p("Marketing firmy budowlanej w agencji to zwykle pakiet: reklamy, media społecznościowe, wideo, czasem kupowanie zleceń z portali, a SEO jest w nim jedną częścią. Ja jestem jednym specjalistą SEO, który buduje też strony. Czego nie robię: kampanii Google Ads, prowadzenia mediów społecznościowych i kupowania zleceń. Jeśli tego potrzebujecie, lepsza będzie agencja, a pozycjonowanie strony można zlecić osobno."),

        h2("Sezonowość w pozycjonowaniu firmy budowlanej: zacząć przed sezonem budowlanym"),
        p("Popyt na większość prac budowlanych rośnie pod koniec zimy i wiosną, kiedy ludzie planują prace na cały rok. Nowe podstrony potrzebują tygodni i miesięcy, żeby wspiąć się w wynikach, więc praca zaczęta wiosną daje efekt jesienią. Lepiej zacząć przed sezonem, żeby podstrony były na miejscu, kiedy klienci zaczną szukać."),

        h2("Ile kosztuje pozycjonowanie strony firmy budowlanej"),
        li("Audyt SEO strony i wizytówki Google: od 1000 zł, jednorazowo. Dostajecie listę poprawek ułożoną według wpływu na wynik."),
        li("Jednorazowe prace — podstrony usług i miejscowości, uporządkowanie wizytówki, dane strukturalne: od 1000 do 3000 zł."),
        li("Stałe pozycjonowanie strony firmy budowlanej — wyszukiwanie lokalne, nowe podstrony, proces opinii, widoczność w AI i raporty: od 3500 zł miesięcznie, w bardzo konkurencyjnych miastach od 5500 zł miesięcznie."),
        p(
          "W wielu firmach poprawna wizytówka i kilka podstron usług i miejscowości dają większość efektu, a audyt pokazuje, czy stała praca jest w ogóle potrzebna. Pełne widełki są w ",
          link("cenniku", "/pl/cennik"),
          ". Firmy z Warszawy znajdą szczegóły na stronie ",
          link("pozycjonowanie strony firmy budowlanej w Warszawie", "/pl/oferty/pozycjonowanie-strony-firmy-budowlanej-warszawa"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie strony firmy budowlanej: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Na czym polega pozycjonowanie strony firmy budowlanej?", "Na tym, żeby firma pojawiała się w Google i w mapach, gdy ktoś szuka potrzebnych mu prac w swojej okolicy: wizytówka Google, podstrony usług i miejscowości, realizacje zapisane tekstem, opinie, dane strukturalne i widoczność w odpowiedziach AI. Reklamy płatne nie są częścią pozycjonowania."],
          ["Ile kosztuje pozycjonowanie strony firmy budowlanej?", "Audyt strony i wizytówki kosztuje od 1000 zł jednorazowo, pojedyncze prace od 1000 do 3000 zł, a stałe pozycjonowanie od 3500 zł miesięcznie, w bardzo konkurencyjnych miastach od 5500 zł. Po krótkim opisie firmy podaję stałą cenę."],
          ["Czy pozycjonowanie strony ma jeszcze sens, skoro jest AI?", "Tak. Asystenci AI budują odpowiedzi z tych samych źródeł, które buduje pozycjonowanie: wizytówki, opinii i podstron z faktami. Firma, której nie ma w Google, zwykle nie ma jej też w odpowiedziach ChatGPT."],
          ["Ile czasu trwa pozycjonowanie firmy budowlanej?", "Zmiany w wizytówce Google potrafią zadziałać w wynikach map w kilka tygodni. Nowe podstrony usług i miejscowości zwykle potrzebują dwóch–czterech miesięcy, w dużych miastach dłużej. Dlatego warto zacząć przed sezonem budowlanym."],
          ["Czy pozycjonowanie jest potrzebne, jeśli zlecenia przychodzą z poleceń?", "Ci, którzy przychodzą z polecenia, też szukają: przed telefonem prawie każdy sprawdza firmę po nazwie, czyta opinie i ogląda realizacje. Pozycjonowanie sprawia, że znajdą Waszą stronę i pełną wizytówkę, i dodaje klientów, którzy nie znają nikogo, kto z Wami pracował."],
          ["Jak samemu zrobić SEO strony firmy budowlanej?", "Zacznijcie od wizytówki Google: właściwe kategorie, obszar działania, zdjęcia realizacji i odpowiedzi na opinie. Potem dodajcie na stronie osobną podstronę dla każdej usługi i opiszcie tekstem kilka realizacji. To bezpłatne i daje sporo; audyt pokaże, co jeszcze blokuje stronę."],
          ["Czy pracujesz z firmami budowlanymi spoza Warszawy?", "Tak, z całej Polski. Pozycjonowanie lokalne robię zdalnie: wizytówka, strona i dane wyszukiwań dla Waszych miast."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie strony firmy budowlanej: co mi wysłać"),
        p(
          "Wyślijcie nazwę firmy, link do strony i do wizytówki w Mapach Google, usługi, przy których chcecie więcej zleceń, i miejscowości, w których pracujecie. Odpowiem, co poprawiłbym najpierw i za jaką stałą cenę. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
