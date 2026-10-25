// Landing page fixture: Pozycjonowanie strony firmy produkcyjnej (PL), group
// «manufacturing-seo». Market version for Polish producers and subcontractors
// (obróbka, produkcja kontraktowa) selling in Poland and exporting to Germany
// and Scandinavia, not a translation of manufacturing-seo.en.
// Semantic core (ref/nonprofits-manufacturers.md, BRIEF.md): «pozycjonowanie
// strony firmy produkcyjnej», «pozycjonowanie firmy produkcyjnej»,
// «pozycjonowanie producenta» — no measured volume; SERP entirely agencies
// (delante, ibif, artefakt, semcore, empressia, premiumdigital) → buyers’
// demand. No PL PAA.
// Intent (ref/intent-check-nonprofits-manufacturers.md): «pozycjonowanie
// firmy produkcyjnej» vs «strona internetowa dla firmy produkcyjnej» 0 shared
// URLs, 1 shared domain → SEO and the build are separate pages; no paragraph
// is shared with /pl/strona-internetowa-dla-firmy-produkcyjnej.
// Angle: frazy techniczne (proces + materiał + parametr + branża), podstrony
// procesów, materiałów i branż, frazy niemieckojęzyczne (Lohnfertigung,
// Zulieferer) and Scandinavian buyers, Europages / wlw and katalogi branżowe
// as citations, targi (Poznań — general), certyfikaty jako frazy, regional
// subcontractor searches, zakupowcy asking ChatGPT for shortlists, measuring
// zapytania ofertowe, not ruch.
// NOT on this page: what the site contains and how it is built — park
// maszynowy layout, karty techniczne, RFQ form build, language-version build
// (/pl/strona-internetowa-dla-firmy-produkcyjnej); one industry in depth
// (/pl/oferty/pozycjonowanie-strony-producenta-bielizny, linked once);
// Google Ads, LinkedIn Ads, social media (not offered).
// Owner’s rules: PL form «pozycjonowanie strony X»; every SEO page covers AI
// search (GEO, AEO); never say there are no clients from the visitor’s segment.
import { p, h2, h3, li, link, k } from "./pt";

export const manufacturingSeoPl = {
  lang: "pl",
  group: "manufacturing-seo",
  slug: "pozycjonowanie-strony-firmy-produkcyjnej",
  title: "Pozycjonowanie strony firmy produkcyjnej",
  heading: "Pozycjonowanie strony firmy produkcyjnej",
  excerpt:
    "Zajmuję się pozycjonowaniem stron firm produkcyjnych i podwykonawców: frazy techniczne po polsku, niemiecku i angielsku, podstrony procesów, materiałów i branż, katalogi takie jak Europages i widoczność w odpowiedziach AI, z której korzystają zakupowcy — a wynik liczę w zapytaniach ofertowych.",
  seo: {
    metaTitle: "Pozycjonowanie producenta w Polsce i w DE | Bandziuk",
    metaDescription:
      "Pozycjonowanie strony firmy produkcyjnej: frazy techniczne, podstrony procesów i materiałów, wersja niemiecka, Europages, AI. Audyt SEO od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Frazy techniczne PL · DE · EN", "Audyt od 1000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Obróbka CNC aluminium seria", "Lohnfertigung Polen", "Wyślij rysunek", "Poleca ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO strony firmy produkcyjnej: frazy, podstrony, wersje językowe, konkurencja", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO dla producenta: podstrony procesów i materiałów, dane strukturalne, poprawki techniczne", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie strony firmy produkcyjnej", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje pozycjonowanie strony firmy produkcyjnej",
      items: [
        { _key: k("o"), iconName: "search", title: "Mapa fraz technicznych", text: "Proces, materiał, parametr i branża — tak, jak szuka konstruktor" },
        { _key: k("o"), iconName: "layers", title: "Podstrony procesów, materiałów i branż", text: "Każda pod inne zapytanie, połączone z formularzem" },
        { _key: k("o"), iconName: "map-pin", title: "Frazy niemieckie i skandynawskie", text: "Słownictwo zakupowców z Niemiec, Szwecji, Danii i Norwegii" },
        { _key: k("o"), iconName: "plug", title: "Europages i katalogi branżowe", text: "Spójne dane firmy, które cytują Google i asystenci AI" },
        { _key: k("o"), iconName: "sparkles", title: "Widoczność w odpowiedziach AI", text: "Gdy zakupowiec prosi ChatGPT o listę dostawców" },
        { _key: k("o"), iconName: "trending-up", title: "Raport w zapytaniach ofertowych", text: "Ile zapytań z rysunkiem przyszło z wyszukiwarki" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO strony producenta", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe pozycjonowanie firmy produkcyjnej", value: "od 3500 zł / mies.", note: "frazy PL i DE, podstrony, AI, raporty", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: strony firm, które budowałem i pozycjonowałem",
      subtitle:
        "Wielojęzyczny serwis agencji edukacyjnej dla dziesięciu krajów, z osobnymi podstronami pod zapytania w różnych językach, biuro architektoniczne, którego ruch organiczny wzrósł 29 razy po przebudowie, a także firma remontowo-inwestycyjna, warsztat samochodowy i pracownia renowacji felg. Łączy je to, na czym opiera się pozycjonowanie producenta: podstrona odpowiada na jedno konkretne zapytanie i prowadzi do formularza.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "full-multilingual-website-development-and-seo-for-student-services",
        "architecture-website-rebuild-and-seo-scan",
        "renovation-and-investment-website-with-premium-design",
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena pozycjonowania strony firmy produkcyjnej",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: na jakie frazy i w jakich językach warto pracować najpierw i za jaką stałą cenę.",
      contextLabel: "Nazwa firmy lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Czym zajmuje się firma?", options: ["Obróbka i usługi dla przemysłu", "Produkcja kontraktowa pod cudzą marką", "Własne wyroby", "Kilka z powyższych"] },
        { _key: k("z"), question: "Gdzie są Wasi klienci?", options: ["W Polsce", "W Niemczech", "W Skandynawii", "W kilku krajach UE"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Pozycjonowanie strony firmy produkcyjnej to praca nad tym, żeby konstruktor, zakupowiec albo właściciel marki szukający podwykonawcy znalazł Waszą firmę w Google, w katalogach branżowych i w odpowiedziach AI — i wysłał zapytanie ofertowe. Robię to sam: dane wyszukiwań, podstrony, poprawki w kodzie, frazy w kilku językach i raporty. Wynik liczę w zapytaniach, a nie w odwiedzinach."),

        h2("Pozycjonowanie firmy produkcyjnej: kto szuka producenta w Google"),
        p("Na stronę producenta trafiają trzy różne osoby i każda wpisuje co innego:"),
        li("konstruktor albo technolog, który ma rysunek i szuka kogoś, kto wykona detal w danym procesie i materiale"),
        li("zakupowiec, który szuka drugiego dostawcy, porównuje kilka firm i sprawdza certyfikaty"),
        li("właściciel marki, który szuka produkcji kontraktowej, często pierwszy raz"),
        p("Każda z tych osób potrzebuje innej podstrony docelowej: konstruktor — opisu procesu z parametrami, zakupowiec — certyfikatów, terminów i krajów dostaw, właściciel marki — wyjaśnienia, jak wygląda współpraca od próbki do pierwszej serii i jakie są minimalne ilości. Właściciel marki wpisuje też zupełnie inne frazy: „produkcja kosmetyków pod własną marką”, „szwalnia na zlecenie małe ilości”, „producent mebli private label”."),
        p("Pozycjonowanie producenta zaczyna się od rozdzielenia tych ścieżek. Strona, która w tytule mówi „Producent wysokiej jakości elementów metalowych”, nie odpowiada żadnej z tych osób."),

        h2("Frazy techniczne w pozycjonowaniu producenta: proces, materiał, parametr i branża"),
        p("Ludzie z przemysłu szukają precyzyjnie: „cięcie laserem stali nierdzewnej 15 mm”, „frezowanie CNC aluminium małe serie”, „malowanie proszkowe konstrukcji Wielkopolska”, „wtryskiwanie tworzyw sztucznych podwykonawca”, „szycie konfekcji na zlecenie”. Takie frazy mają małą liczbę wyszukiwań, ale za każdą stoi konkretne zlecenie. Kilkadziesiąt trafnych fraz daje więcej zapytań niż jedna ogólna „obróbka metali”."),
        p("Mapę fraz buduję z danych: co już przyprowadza ludzi w Google Search Console, co wpisują klienci w zapytaniach, które przychodzą mailem, i z czym są wysoko konkurenci. Słownictwo sprawdzam z Waszym technologiem, bo zakupowiec wpisuje „gięcie blach”, a konstruktor „gięcie na prasie krawędziowej”."),

        h2("Podstrony procesów, materiałów i branż na stronie firmy produkcyjnej"),
        p("Jedna podstrona „Usługi” z listą dziesięciu procesów nie wejdzie wysoko na żadną z fraz. W pozycjonowaniu producenta każde ważne zapytanie dostaje własną podstronę:"),
        h3("Podstrona procesu: obróbka, cięcie, spawanie, montaż"),
        p("Opis procesu z parametrami, które konstruktor sprawdza w pierwszej kolejności: wymiary, grubości, tolerancje, wielkość serii, czas realizacji."),
        h3("Podstrona materiału: stal nierdzewna, aluminium, tworzywa"),
        p("Co obrabiacie w danym materiale, w jakich gatunkach i z jakim wykończeniem — osobno, bo „obróbka aluminium” i „obróbka stali nierdzewnej” to dwa różne wyszukiwania."),
        h3("Podstrona branży: motoryzacja, maszyny, meble, medycyna"),
        p("Dla jakich branż pracujecie i jakie wymagania znacie, bez nazw klientów, jeśli się na to nie zgodzili."),
        p(
          "Jak wygląda pozycjonowanie producenta w jednej branży szczegółowo, z sezonami zakupowymi i targami, pokazuję na stronie ",
          link("pozycjonowanie strony producenta bielizny", "/pl/oferty/pozycjonowanie-strony-producenta-bielizny"),
          ".",
        ),

        h2("Pozycjonowanie producenta w Niemczech i Skandynawii: frazy niemieckojęzyczne"),
        p("Wielu polskich podwykonawców sprzedaje głównie do Niemiec, a niemiecki zakupowiec szuka po niemiecku: „Lohnfertigung Polen”, „CNC-Fräsen Zulieferer”, „Blechbearbeitung Polen”, „Pulverbeschichtung Lohnauftrag”. Część szuka dostawcy z Polski wprost, bo zna koszty i odległość. Przetłumaczona polska strona nie łapie tych wyszukiwań, bo tłumacz wybiera inne słowa niż te, które wpisuje rynek."),
        li("frazy niemieckie dobieram z danych wyszukiwań dla Niemiec, Austrii i Szwajcarii, a nie z tłumaczenia"),
        li("każda wersja językowa ma własne adresy i oznaczenia hreflang, żeby Google pokazywał niemiecką wersję w Niemczech"),
        li("zakupowcy ze Szwecji, Danii i Norwegii często szukają po angielsku, więc wersja angielska ma frazy pod nich, a nie pod Wielką Brytanię"),
        li("teksty przed publikacją powinien sprawdzić ktoś, kto pisze po niemiecku jak native speaker — Wasz pracownik, partner handlowy albo tłumacz z branży"),

        h2("Europages, katalogi branżowe i targi a widoczność firmy produkcyjnej"),
        p("Zakupowcy przemysłowi korzystają z katalogów: Europages, niemieckiego wlw (Wer liefert was) i katalogów branżowych w Polsce. Wpis w katalogu sam w sobie rzadko przynosi zlecenie, ale jest źródłem, z którego Google i asystenci AI sprawdzają, czy firma istnieje i co robi. Pilnuję, żeby nazwa, adres, procesy i certyfikaty były w nich takie same jak na stronie."),
        p("Targi — w Poznaniu, w Niemczech czy w Skandynawii — działają razem z wyszukiwarką. Po rozmowie na stoisku zakupowiec wpisuje w Google nazwę firmy albo zapamiętany proces. Przed targami sprawdzam, czy strona wychodzi na nazwę firmy w każdym języku, a lista wystawców z linkiem do strony to wartościowe odwołanie."),

        h2("Certyfikaty ISO w pozycjonowaniu podwykonawcy"),
        p("Dla wielu zakupowców certyfikat to warunek wejścia, więc wpisują go w wyszukiwarkę: „spawanie ISO 3834”, „obróbka CNC ISO 9001”, „dostawca IATF 16949”, „produkcja wyrobów medycznych ISO 13485”. Strona, która ma certyfikaty tylko w pliku PDF w stopce, na te frazy nie wychodzi. Nazwa i zakres certyfikatu zapisane tekstem na podstronach procesów i branż, których dotyczy, to jedna z najprostszych poprawek w pozycjonowaniu producenta."),

        h2("Lokalne i regionalne pozycjonowanie podwykonawcy"),
        p("Część zleceń przychodzi z okolicy, bo transport i wizyty w zakładzie są łatwiejsze: „obróbka CNC Śląsk”, „cięcie laserem Bydgoszcz”, „spawalnia Rzeszów”. Pomaga wizytówka Google zakładu z właściwą kategorią i zdjęciami hali oraz podstrona, która mówi, w jakim promieniu dostarczacie. Tworzenie osobnych podstron dla miast, w których nie macie zakładu, rzadko się opłaca. W lokalnych wynikach liczą się też opinie: kilka rzeczowych opinii od firm, z którymi pracujecie, robi w wizytówce zakładu dużą różnicę, bo w przemyśle mało kto o nie prosi."),

        h2("Pozycjonowanie producenta w ChatGPT i Google AI Overviews (GEO, AEO)"),
        p("Zakupowcy i konstruktorzy coraz częściej proszą ChatGPT, Perplexity albo podsumowania AI w Google o listę dostawców: „firmy w Polsce, które robią obróbkę CNC tytanu z ISO 13485”, „producent opakowań kartonowych na zlecenie, małe serie”. Asystent wybiera firmy, o których znajduje sprawdzalne fakty. Pracę nad tym nazywa się GEO (generative engine optimization) albo AEO (answer engine optimization):"),
        li("procesy, materiały, zakresy wymiarów, certyfikaty, języki obsługi i kraje dostaw zapisane prostymi zdaniami"),
        li("dane strukturalne firmy i usług zgodne z katalogami"),
        li("te same dane w Europages, katalogach branżowych i wizytówce Google"),
        li("wzmianki w mediach branżowych i na listach wystawców targów"),
        p(
          "Przed pracą i po niej sprawdzam, czy asystenci wymieniają Waszą firmę i kogo podają zamiast niej. Więcej na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Audyt SEO strony firmy produkcyjnej: od czego zaczyna się praca"),
        p("Strony producentów często mają te same problemy: oferta w katalogu PDF, którego Google nie łączy z frazami, wersja niemiecka bez własnych adresów, zdjęcia maszyn bez opisu, tytuły podstron typu „Oferta” i „Usługi”. Audyt pokazuje, które z nich blokują zapytania, i układa poprawki według wpływu. Szczegóły na stronie ",
          link("audyt SEO strony internetowej", "/pl/oferty/audyt-seo-strony-internetowej"),
          ".",
        ),

        h2("Ile trwa pozycjonowanie strony firmy produkcyjnej i jak mierzę zapytania ofertowe"),
        p("Poprawki tytułów i techniki potrafią dać efekt w kilka tygodni. Nowe podstrony procesów zwykle potrzebują dwóch–czterech miesięcy, a wersja niemiecka na nowej konkurencji dłużej. Cykl zakupowy w przemyśle też jest długi: zapytanie z marca bywa zamówieniem we wrześniu."),
        p("Dlatego w raporcie liczę zapytania ofertowe i telefony z wyszukiwarki, z podziałem na kraje i podstrony, mierzone w GA4 i Google Search Console. Osobno zaznaczam zapytania z rysunkiem, bo to one najczęściej kończą się zamówieniem. Pozycje fraz są obok tych liczb, a nie zamiast nich."),
        p("Sprawdzam też, które podstrony przyprowadzają zapytania bez szans na zlecenie — od klientów indywidualnych z jedną sztuką albo od studentów szukających praktyk — i poprawiam teksty tak, żeby jasno mówiły, dla kogo jest oferta, na przykład podając minimalną wielkość serii."),

        h2("Ile kosztuje pozycjonowanie strony producenta"),
        li("Audyt SEO strony, wersji językowych i konkurencji: od 1000 zł, jednorazowo, z listą poprawek według wpływu."),
        li("Jednorazowe prace — podstrony procesów i materiałów, dane strukturalne, poprawki techniczne: od 1000 do 3000 zł."),
        li("Stałe pozycjonowanie strony firmy produkcyjnej — frazy, podstrony, widoczność w AI i raporty: od 3500 zł miesięcznie, przy kilku rynkach językowych lub bardzo konkurencyjnych procesach od 5500 zł miesięcznie."),
        p(
          "Pełne widełki są w ",
          link("cenniku", "/pl/cennik"),
          ". Jeśli strona wymaga przebudowy, zanim będzie miała co pozycjonować, zajrzyjcie na stronę ",
          link("strona internetowa dla firmy produkcyjnej", "/pl/strona-internetowa-dla-firmy-produkcyjnej"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie strony firmy produkcyjnej: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje pozycjonowanie firmy produkcyjnej?", "Stałe pozycjonowanie kosztuje od 3500 zł miesięcznie, przy kilku rynkach językowych lub bardzo konkurencyjnych procesach od 5500 zł. Audyt to od 1000 zł jednorazowo, a pojedyncze prace od 1000 do 3000 zł. Po krótkim opisie firmy podaję stałą cenę."],
          ["Czy SEO ma sens w przemyśle, skoro klienci przychodzą z targów i poleceń?", "Tak, bo po targach i poleceniu zakupowiec i tak sprawdza firmę w Google, a drugiego dostawcę często szuka sam. Frazy przemysłowe mają mało wyszukiwań, ale każde zapytanie ma dużą wartość."],
          ["Czy pozycjonujesz stronę firmy produkcyjnej po niemiecku?", "Tak. Frazy niemieckie dobieram z danych wyszukiwań dla Niemiec, Austrii i Szwajcarii, a teksty przed publikacją powinna sprawdzić osoba pisząca po niemiecku jak native speaker, na przykład Wasz handlowiec. Wersja niemiecka potrzebuje własnych adresów i oznaczeń hreflang."],
          ["Czy wpis w Europages pomaga w pozycjonowaniu?", "Pomaga pośrednio: to źródło, z którego Google i asystenci AI sprawdzają dane firmy. Ważne, żeby procesy, adres i certyfikaty były tam takie same jak na stronie."],
          ["Czy ChatGPT może polecić naszą firmę jako dostawcę?", "Tak, gdy zakupowiec poprosi o listę dostawców, a asystent znajdzie o Was sprawdzalne fakty: procesy, materiały, certyfikaty i kraje dostaw zapisane tekstem na stronie i w katalogach."],
          ["Ile trwa pozycjonowanie strony producenta?", "Poprawki techniczne działają w kilka tygodni, nowe podstrony procesów zwykle w dwa–cztery miesiące, wersja niemiecka dłużej. Zamówienia z tych zapytań przychodzą zgodnie z cyklem zakupowym Waszych klientów."],
          ["Czy pracujesz z producentami spoza Warszawy?", "Tak, z firmami z całej Polski. Pozycjonowanie robię zdalnie, a rozmowę z technologiem o słownictwie prowadzimy przez wideo, po polsku, angielsku albo rosyjsku."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie strony firmy produkcyjnej: co mi wysłać"),
        p(
          "Wyślijcie link do strony, listę procesów i materiałów, które chcecie sprzedawać więcej, kraje, do których dostarczacie, certyfikaty i kilka przykładowych zapytań, które przyszły w ostatnich miesiącach. Odpowiem, na jakie frazy i w jakich językach warto pracować najpierw i za jaką stałą cenę. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
