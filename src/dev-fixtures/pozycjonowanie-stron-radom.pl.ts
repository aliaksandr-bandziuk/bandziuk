// Landing page fixture: Pozycjonowanie stron Radom (PL), group
// «pozycjonowanie-stron-radom». Stage 3 city pilot, written for Radom only.
// Semantic core (ref/city-keywords.md, ref/pl-cities.md): pozycjonowanie stron
// radom 320 · seo radom 90 · pozycjonowanie stron internetowych radom 50;
// brief phrases without measured volume: agencja SEO radom, audyt SEO radom,
// pozycjonowanie lokalne / wizytówka Google w Radomiu, cennik. PAA: Ile
// kosztuje pozycjonowanie strony w 2026? Jak długo trwa pozycjonowanie strony?
// Czy pozycjonowanie stron ma sens? Kto zajmuje się pozycjonowaniem stron? Jak
// samemu pozycjonować stronę? (H2 or FAQ).
// Intent (ref/intent-check-pl-cities.md): SEO vs website 0 shared URLs → two
// pages; pozycjonowanie / agencja SEO / audyt SEO share 1–2 URLs → one page.
// Local SERP pattern: a few local firms, national agencies with city pages,
// Warsaw firms, Oferteo → angle: one specialist, published prices, smaller
// competition.
// City part: smaller market with industrial tradition, S7 between Warsaw and
// Kraków, construction and services, Radom as the service centre for the
// surrounding powiaty; searches with nearby towns (Kozienice, Pionki, Zwoleń,
// Szydłowiec, Skaryszew, Iłża, Jedlińsk) rather than districts; Warsaw as a
// separate SERP. Smaller city → stałe pozycjonowanie od 3500 zł (no 5500 tier).
// NOT on this page: the website build (/pl/tworzenie-stron-internetowych-radom);
// Warsaw SEO as a target; e-commerce (not offered); Google Ads and social media
// (not offered).
// Owner’s rules: remote work from Warsaw, no visits promised; never say there
// are no clients from the visitor’s city or industry.
import { p, h2, li, link, k } from "./pt";

export const pozycjonowanieStronRadomPl = {
  lang: "pl",
  group: "pozycjonowanie-stron-radom",
  slug: "pozycjonowanie-stron-radom",
  title: "Pozycjonowanie stron Radom",
  heading: "Pozycjonowanie stron w Radomiu",
  excerpt:
    "Pozycjonowanie stron w Radomiu dla firm, które obsługują miasto i okoliczne gminy: audyt, podstrony usług i miejscowości, wizytówka Google i widoczność w odpowiedziach AI — wykonuje je jeden specjalista SEO, zdalnie, za stałą cenę z cennika.",
  seo: {
    metaTitle: "SEO Radom: pozycjonowanie stron od 1000 zł | Bandziuk",
    metaDescription:
      "Pozycjonowanie stron w Radomiu: audyt SEO, podstrony usług i okolicznych miejscowości, wizytówka Google, widoczność w AI. Jeden specjalista, audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Jeden specjalista SEO, bez opiekuna klienta", "Audyt od 1000 zł", "Radom i okoliczne gminy"],
  heroPhonePoints: ["Elektryk Radom Kozienice", "Mapy Google: 3 firmy", "Zadzwoń", "Poleca ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO strony firmy z Radomia: strona, wizytówka Google, konkurencja", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO w Radomiu: podstrony usług i miejscowości, wizytówka, poprawki techniczne", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie stron w Radomiu", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje pozycjonowanie stron w Radomiu",
      items: [
        { _key: k("o"), iconName: "search", title: "Audyt SEO z konkurencją z Radomia", text: "Co blokuje stronę i które miejsca da się zająć" },
        { _key: k("o"), iconName: "layers", title: "Podstrony usług i okolicznych miejscowości", text: "Kozienice, Pionki, Zwoleń — tam, gdzie jeździcie do klientów" },
        { _key: k("o"), iconName: "map-pin", title: "Wizytówka Google z obszarem działania", text: "Radom i gminy wokół, bez pokazywania adresu domowego" },
        { _key: k("o"), iconName: "gauge", title: "Poprawki techniczne w kodzie", text: "Szybkość, indeksowanie, tytuły — robi je ta sama osoba" },
        { _key: k("o"), iconName: "sparkles", title: "Fakty o firmie dla ChatGPT i AI Overviews", text: "Usługi, ceny i zasięg zapisane do cytowania" },
        { _key: k("o"), iconName: "trending-up", title: "Raport w telefonach i zapytaniach", text: "Co przyniosła wyszukiwarka, nie tylko pozycje" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO strony firmy z Radomia", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe pozycjonowanie stron w Radomiu", value: "od 3500 zł / mies.", note: "podstrony, wizytówka, AI, raporty", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: strony firm usługowych i technicznych, które budowałem i pozycjonowałem",
      subtitle:
        "Pięć projektów: cztery warszawskie firmy usługowe (warsztat samochodowy, pracownia renowacji felg, przechowalnia opon, firma remontowo-inwestycyjna) i firma skanowania laserowego 3D i modelowania BIM, która po przebudowie strony ma 29 razy większy ruch organiczny. Z radomskimi warsztatami, wykonawcami i firmami technicznymi łączy je to, że klient szuka w Google konkretnej usługi, a strona ma go szybko doprowadzić do telefonu albo zapytania.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
        "renovation-and-investment-website-with-premium-design",
        "architecture-website-rebuild-and-seo-scan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena pozycjonowania strony firmy z Radomia",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: co poprawiłbym najpierw, czy wystarczy wizytówka i kilka podstron, i za jaką stałą cenę.",
      contextLabel: "Nazwa firmy lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Gdzie są Wasi klienci?", options: ["Tylko w Radomiu", "Radom i okoliczne gminy", "Cała Polska", "Także Warszawa"] },
        { _key: k("z"), question: "Skąd dziś przychodzą zlecenia?", options: ["Z poleceń", "Z Google i Map Google", "Z Oferteo i portali", "Trudno powiedzieć"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Pozycjonowanie stron w Radomiu robię dla firm, które chcą, żeby klienci z Radomia i okolicznych gmin znajdowali je w Google, w Mapach Google i w odpowiedziach asystentów AI. Jestem jednym specjalistą SEO: audyt, poprawki na stronie, podstrony usług, wizytówkę i raporty wykonuję sam. Pracuję z Warszawy, a z radomskimi firmami współpracuję zdalnie, według etapów ustalonych na początku."),

        h2("Pozycjonowanie stron w Radomiu: na czym polega ta praca"),
        p("Pozycjonowanie to nie jednorazowe „dodanie słów kluczowych”, tylko kilka rzeczy robionych w kolejności, która w Radomiu daje najszybszy efekt:"),
        li("uporządkowanie strony tak, żeby Google poprawnie ją indeksował i żeby szybko działała na telefonie"),
        li("podstrony dla usług, z których żyje firma, z Radomiem i okolicą w tytułach i w treści"),
        li("wizytówka Google, która w mniejszym mieście często daje najwięcej telefonów"),
        li("fakty o firmie zapisane tak, żeby mogły je cytować ChatGPT i podsumowania AI w Google"),
        p("Po każdym miesiącu wiecie, co zrobiłem i co z tego wynikło w telefonach i zapytaniach. Nie ma osobnych pakietów na technikę, treści i linki — jest jedna lista zadań."),

        h2("Rynek w Radomiu: przemysł, budownictwo i usługi dla całego regionu"),
        p("Radom ma długą tradycję przemysłową i do dziś działa tu wiele zakładów produkcyjnych, hurtowni i firm transportowych, które korzystają z położenia przy trasie S7 między Warszawą a Krakowem. Obok nich pracują firmy budowlane, wykonawcy instalacji, stolarnie, firmy wykończeniowe i cała sieć usług dla mieszkańców: warsztaty, gabinety, biura rachunkowe, szkoły jazdy."),
        p("Radom obsługuje też znacznie większy obszar niż samo miasto. Mieszkańcy powiatów radomskiego, kozienickiego, zwoleńskiego czy szydłowieckiego przyjeżdżają tu do lekarza, do mechanika i po materiały budowlane. Dla wielu radomskich firm klient spoza miasta jest tak samo ważny jak klient z Ustronia czy Gołębiowa — i strona powinna to pokazywać."),
        p("Rynek jest mniejszy niż w Warszawie czy Krakowie. Dla pozycjonowania to zaleta: mniej firm walczy o te same frazy, więc porządnie zrobiona strona i wizytówka mają realną szansę na wysokie miejsca szybciej i za mniejszy budżet niż w dużym mieście."),

        h2("Jak klienci szukają firm w Radomiu: okoliczne miejscowości i Warszawa"),
        p("Wyszukiwania z Radomia wyglądają inaczej niż w dużych aglomeracjach. Nazwy osiedli — Michałów, Zamłynie, Śródmieście — pojawiają się w zapytaniach rzadziej, bo odległości w mieście są niewielkie i ludzie wpisują po prostu „Radom” i usługę. Za to sporo zapytań zawiera okoliczne miejscowości: Kozienice, Pionki, Zwoleń, Szydłowiec, Skaryszew, Iłżę, Jedlińsk. Firma, która tam jeździ albo stamtąd ma klientów, może mieć dla nich osobne podstrony, jeśli dane pokazują popyt."),
        p("Drugi nawyk to porównywanie z Warszawą. Część mieszkańców pracuje lub bywa w stolicy i szuka usługi w obu miastach, a część radomskich firm budowlanych i transportowych przyjmuje zlecenia z Warszawy. To osobne wyniki i osobne frazy, więc warto świadomie zdecydować, czy pozycjonujemy się tylko w Radomiu, czy także na wybrane frazy warszawskie. Firmy, które zatrudniają pracowników z Ukrainy albo mają ukraińskojęzycznych klientów, korzystają też na krótkiej informacji po ukraińsku."),

        h2("SEO w Radomiu: agencja SEO, firma z Warszawy czy jeden specjalista"),
        p("W wynikach dla „pozycjonowanie stron Radom” i „SEO Radom” lokalnych firm jest mniej niż w dużych miastach. Obok kilku radomskich wykonawców są ogólnopolskie agencje z podstroną dla Radomia, firmy z Warszawy i portal Oferteo, który zbiera zapytania i przekazuje je wielu wykonawcom naraz. W tak małym gronie łatwo trafić na ofertę z umową na rok i raportem, w którym są tylko pozycje."),
        p("Jestem jednym specjalistą. Po audycie nie przekazuję zadań dalej: sam zmieniam kod strony (WordPress, Next.js lub inny system), sam piszę podstrony i sam objaśniam raport. Nie ma opiekuna klienta ani handlowca, a ceny są opublikowane, więc wiecie, ile zapłacicie, zanim zadzwonicie. Nie prowadzę Google Ads ani mediów społecznościowych."),
        p("Z firmami z Radomia współpracuję online: rozmowa wideo, wspólny dokument z zadaniami, dostęp do Search Console i wizytówki, raport co miesiąc. Spotkania na miejscu nie są do tego potrzebne."),

        h2("Audyt SEO w Radomiu: od czego zaczynam"),
        p("Audyt pokazuje, co blokuje stronę i co da najwięcej zapytań. W Radomiu sprawdzam przede wszystkim:"),
        li("czy strona pokazuje się na „Radom” i na nazwy okolicznych miejscowości, i dla których usług brakuje podstron"),
        li("błędy techniczne, indeksowanie i szybkość na telefonie"),
        li("kto jest w pierwszej dziesiątce — radomskie firmy, agencje czy portale — i które miejsca da się zdobyć"),
        li("czy wizytówka Google ma właściwą kategorię i zgadza się ze stroną"),
        li("co ChatGPT i podsumowania AI mówią dziś o Waszej firmie"),
        p(
          "Dla wielu radomskich firm audyt i jednorazowe poprawki to większość potrzebnej pracy. Szczegóły na stronie ",
          link("audyt SEO strony internetowej", "/pl/oferty/audyt-seo-strony-internetowej"),
          ".",
        ),

        h2("Pozycjonowanie lokalne w Radomiu: wizytówka Google w mniejszym mieście"),
        p("W Radomiu blok map z trzema firmami pojawia się przy większości wyszukiwań usług. Ponieważ konkurencja jest mniejsza, dobrze prowadzona wizytówka często wystarcza, żeby się w nim znaleźć: właściwa kategoria główna, opisane usługi, prawdziwe zdjęcia, aktualne godziny, regularne opinie i odpowiedzi na nie. Firma, która dojeżdża do klientów, ustawia obszar działania na Radom i okoliczne gminy zamiast pokazywać adres domowy."),
        p(
          "W Radomiu liczy się też porządek w danych: nazwa, adres i numer telefonu mają wyglądać identycznie wszędzie, gdzie firma występuje w sieci. Całą pracę nad Mapami opisuję na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Pozycjonowanie stron internetowych w Radomiu dla firm produkcyjnych i budowlanych"),
        p(
          "Radomskie zakłady produkcyjne często sprzedają firmom w całej Polsce i za granicą, więc dla nich nazwa miasta w frazie znaczy mniej niż produkt, materiał czy rodzaj obróbki. Pozycjonowanie opiera się wtedy na podstronach produktów z parametrami i na zapytaniach ofertowych — opisuję to na stronie ",
          link("pozycjonowanie strony firmy produkcyjnej", "/pl/pozycjonowanie-strony-firmy-produkcyjnej"),
          ".",
        ),
        p(
          "Firmy budowlane i wykończeniowe działają odwrotnie: klient szuka lokalnie, porównuje realizacje i chce wiedzieć, czy firma dojedzie do jego miejscowości. Tu pomagają podstrony rodzajów prac, galerie z opisem i zasięg w wizytówce — więcej na stronie ",
          link("pozycjonowanie strony firmy budowlanej", "/pl/pozycjonowanie-strony-firmy-budowlanej"),
          ".",
        ),

        h2("Pozycjonowanie stron w Radomiu w ChatGPT i Google AI Overviews (GEO, AEO)"),
        p("Coraz więcej osób zadaje pytania asystentom: „elektryk w Radomiu na jutro”, „hurtownia stali niedaleko Radomia”, „dentysta na Ustroniu przyjmujący w sobotę”. ChatGPT, Perplexity i podsumowania AI w Google wybierają firmy, o których znajdują konkretne fakty. Ten obszar pracy ma swoje skróty: GEO od generative engine optimization i AEO od answer engine optimization. W mniejszym mieście daje ona sporo, bo wiele firm nie opisuje na stronie nawet podstawowych faktów, więc asystent nie ma czego cytować:"),
        li("usługi, ceny, godziny i obszar działania zapisane zwykłymi zdaniami"),
        li("dane strukturalne zgodne z wizytówką Google"),
        li("te same dane firmy w katalogach i na portalach"),
        p(
          "Przed pracą i po niej sprawdzam, jak asystenci opisują Waszą firmę. Więcej na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Jak samemu pozycjonować stronę firmy z Radomia"),
        li("dodajcie do tytułów podstron usługę i Radom, a jeśli jeździcie dalej — nazwy miejscowości, np. „Montaż pomp ciepła — Radom, Kozienice, Pionki”"),
        li("załóżcie lub przejmijcie wizytówkę Google i uzupełnijcie wszystkie pola"),
        li("proście zadowolonych klientów o opinię zaraz po zakończonej pracy"),
        li("zajrzyjcie do Search Console: często strona jest już blisko pierwszej strony wyników dla jakiejś frazy i wystarczy ją dopracować"),
        p("Zlecić warto technikę, przeniesienie strony i branże, w których w Radomiu konkurują już firmy z dużymi stronami albo agencje ogólnopolskie."),

        h2("Jak długo trwa pozycjonowanie strony w Radomiu i czy ma to sens"),
        p("W Radomiu efekty przychodzą zwykle szybciej niż w dużych miastach. Poprawki wizytówki i tytułów potrafią zadziałać w kilka tygodni, nowa podstrona usługi potrzebuje zwykle dwóch–trzech miesięcy. Frazy, o które walczą agencje z całej Polski, i frazy warszawskie wymagają więcej czasu."),
        p("Sens zależy od tego, czy ludzie szukają Waszej usługi w Google, i to sprawdzam w audycie. Jeśli wyszukiwań jest bardzo mało, mówię o tym i proponuję mniejszy zakres — np. tylko wizytówkę i kilka podstron — zamiast stałej współpracy. W raporcie liczę telefony i zapytania, a pozycje są tylko tłem."),

        h2("Ile kosztuje pozycjonowanie stron w Radomiu: cennik"),
        li("Audyt SEO strony i wizytówki z analizą konkurencji w Radomiu: od 1000 zł, jednorazowo."),
        li("Jednorazowe prace — podstrony usług i miejscowości, wizytówka, poprawki techniczne: od 1000 do 3000 zł."),
        li("Stałe pozycjonowanie strony firmy z Radomia: od 3500 zł miesięcznie."),
        p(
          "Ceny są opublikowane w ",
          link("cenniku", "/pl/cennik"),
          ". Jeśli obecna strona nadaje się tylko do przebudowy, zajrzyjcie na stronę ",
          link("tworzenie stron internetowych w Radomiu", "/pl/tworzenie-stron-internetowych-radom"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie stron w Radomiu: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje pozycjonowanie strony w Radomiu?", "Audyt to wydatek od 1000 zł, pojedyncze zlecenia mieszczą się w 1000–3000 zł, stała współpraca zaczyna się od 3500 zł miesięcznie. Często wystarczają audyt i jednorazowe poprawki — powiem to po pierwszym przejrzeniu strony."],
          ["Jak długo trwa pozycjonowanie strony firmy z Radomia?", "Zmiany w wizytówce i tytułach działają zwykle po kilku tygodniach, nowe podstrony usług po dwóch–trzech miesiącach. Przy frazach ogólnopolskich i warszawskich trzeba liczyć więcej czasu."],
          ["Czy pozycjonowanie stron w Radomiu ma sens przy mniejszej konkurencji?", "Właśnie dlatego ma. Mniej firm walczy o te same frazy, więc porządna strona i wizytówka szybciej trafiają wysoko. Jeśli Waszej usługi prawie nikt nie szuka, powiem to po audycie."],
          ["Kto zajmuje się pozycjonowaniem stron w Radomiu?", "W wynikach są radomscy wykonawcy, agencje ogólnopolskie, firmy z Warszawy i portal Oferteo. Ja pracuję sam: robię audyt, wdrożenie i raport, bez opiekuna klienta i z cenami podanymi w cenniku."],
          ["Czy da się być wyżej w Mapach Google w Radomiu?", "Tak. Kategoria, usługi, zdjęcia, godziny, opinie i obszar działania obejmujący okoliczne gminy poprawiają pozycję w Mapach. W Radomiu często to najszybsze źródło telefonów."],
          ["Czy radomska firma może pozycjonować się także w Warszawie?", "Może, ale to osobne wyniki i większa konkurencja. Potrzebne są podstrony napisane pod Warszawę i realny zasięg usług. W audycie sprawdzam, czy to się opłaca."],
          ["Jak wygląda współpraca zdalna z Warszawy dla firmy z Radomia?", "Rozmowa wideo, dostęp do Search Console, Analytics i wizytówki, lista zadań we wspólnym dokumencie i miesięczny raport. Całość prowadzę online."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie stron w Radomiu: co mi wysłać"),
        p(
          "Wyślijcie link do strony i do wizytówki Google, usługi, przy których chcecie więcej zleceń, miejscowości wokół Radomia, do których jeździcie, i informację, czy macie teraz umowę z agencją. Odpowiem, od czego zacząłbym i za jaką stałą cenę. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
