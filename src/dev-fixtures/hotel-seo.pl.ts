// Landing page fixture: Pozycjonowanie strony hotelu (PL), group «hotel-seo».
// Market version for hotels, pensjonaty and apartamenty in Poland, not a
// translation of hotel-seo.en.
// Semantic core: ref/hotels.md / hotels.csv (PL): «pozycjonowanie strony
// hotelu» 170 (core; SERP = Profitroom + Polish SEO agencies → owners’ demand);
// «marketing dla hotelu» 140, «marketing hotelu» 90, «marketing w hotelu» 70
// (one H2: where SEO fits in hotel marketing); «marketing mix hotelu / w
// hotelu / na przykładzie hotelu» 10 each and «marketing w hotelu zadania» 10
// (student queries, not targeted).
// PAA: Ile kosztuje pozycjonowanie strony w 2026? Jak długo trwa
// pozycjonowanie strony? Czy można samemu pozycjonować stronę? (FAQ, adapted
// to hotels).
// Intent: ref/intent-check-hotels.md — «pozycjonowanie strony hotelu» vs
// «strona internetowa dla hotelu» 0 shared URLs → SEO and the build are
// separate pages; «strona dla pensjonatu» vs «strona internetowa dla hotelu» 1
// shared → pensjonaty go in one H2 here, no page of their own.
// NOT on this page: building the site (/pl/strona-dla-hotelu); the hotel
// restaurant (/pl/pozycjonowanie-restauracji); travel agencies
// (/pl/strona-dla-biura-podrozy). Zakopane, Sopot, Kołobrzeg etc. are examples
// of guests’ searches, not clients.
// Owner’s rules: PL form «pozycjonowanie strony X»; every SEO page covers AI
// search (GEO, AEO).
import { p, h2, h3, li, link, k } from "./pt";

export const hotelSeoPl = {
  lang: "pl",
  group: "hotel-seo",
  slug: "pozycjonowanie-strony-hotelu",
  title: "Pozycjonowanie strony hotelu",
  heading: "Pozycjonowanie strony hotelu",
  excerpt:
    "Zajmuję się pozycjonowaniem stron hoteli, pensjonatów i apartamentów: frazy „noclegi + miejscowość”, podstrony pokoi i okolicy, wizytówka Google, wersje językowe i widoczność w AI, tak żeby goście rezerwowali bezpośrednio u Was, a nie przez Booking.com.",
  seo: {
    metaTitle: "Pozycjonowanie strony hotelu i pensjonatu | Bandziuk",
    metaDescription:
      "Pozycjonowanie strony hotelu: rezerwacje bezpośrednie zamiast prowizji, frazy „noclegi + miasto”, wizytówka Google, wersja niemiecka i AI. Audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Rezerwacje bezpośrednie + AI", "Audyt od 1000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Noclegi Zakopane z parkingiem", "Sprawdź dostępność", "Rezerwuj bezpośrednio", "Pokój z widokiem na morze"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO hotelu: strona, wyszukiwanie nazwy obiektu i wizytówka Google", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO dla hotelu: podstrony pokoi i okolicy, wersje językowe, dane strukturalne", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie strony hotelu", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje pozycjonowanie strony hotelu",
      items: [
        { _key: k("o"), iconName: "search", title: "Frazy „noclegi + miejscowość” z danymi", text: "Miejsce, termin i udogodnienia, które wpisują goście" },
        { _key: k("o"), iconName: "layers", title: "Podstrona dla każdego typu pokoju", text: "Pokoje rodzinne, apartamenty, sale, wesela" },
        { _key: k("o"), iconName: "map-pin", title: "Wizytówka Google i Google Hotels", text: "Kategoria, udogodnienia, zdjęcia i link do rezerwacji" },
        { _key: k("o"), iconName: "message-circle", title: "Wersje językowe dla gości z zagranicy", text: "Niemiecka i angielska, połączone przez hreflang" },
        { _key: k("o"), iconName: "sparkles", title: "Widoczność w odpowiedziach AI", text: "ChatGPT, Perplexity i podsumowania AI w Google" },
        { _key: k("o"), iconName: "trending-up", title: "Raport w rezerwacjach bezpośrednich", text: "Rezerwacje z wyszukiwarki w Waszym silniku, nie tylko pozycje" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO: strona hotelu i wizytówka Google", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe pozycjonowanie strony hotelu", value: "od 3500 zł / mies.", note: "podstrony, sezony, mapy, AI", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: strony wielojęzyczne i lokalnych firm, które budowałem i optymalizowałem",
      subtitle:
        "Wielojęzyczne strony oparte na zdjęciach i rezerwacjach, które zbudowałem i pozycjonowałem — tej samej pracy potrzebuje hotel: jasnych podstron, szybkich stron na telefonie i widoczności w Google i odpowiedziach AI.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "full-multilingual-website-development-and-seo-for-student-services",
        "renovation-and-investment-website-with-premium-design",
        "tyre-storage-landing-page-with-editable-seo",
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena pozycjonowania strony hotelu",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: co poprawiłbym najpierw na stronie obiektu i w wizytówce Google, i za jaką stałą cenę.",
      contextLabel: "Nazwa obiektu lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Skąd teraz przychodzi najwięcej rezerwacji?", options: ["Z Booking.com i innych portali", "Bezpośrednio ze strony", "Telefonicznie i mailowo", "Nie wiem"] },
        { _key: k("z"), question: "Jaki to obiekt?", options: ["Hotel", "Pensjonat lub dom gościnny", "Apartamenty na wynajem", "Kilka obiektów"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Pozycjonowanie strony hotelu robię sam: od danych wyszukiwań dla Waszej miejscowości, przez podstrony pokoi i okolicy, po wizytówkę Google i wersje językowe. Ta sama osoba przygotowuje audyt i wprowadza poprawki. Celem są rezerwacje przez Wasz własny system rezerwacyjny, od których nie płacicie prowizji portalom."),

        h2("Pozycjonowanie strony hotelu: jak gość trafia z Google do rezerwacji bezpośredniej"),
        p("Gość z Warszawy, który planuje ferie w górach, zwykle zaczyna od „noclegi Zakopane”, porównuje oferty na Booking.com i w Google, a na końcu wpisuje nazwę wybranego obiektu, żeby zobaczyć zdjęcia, dojazd i cenę. Pozycjonowanie strony hotelu pracuje na wszystkich trzech etapach:"),
        li("wyszukiwanie miejsca — długie frazy z miejscowością i tym, na czym gościowi zależy"),
        li("porównanie — wizytówka Google, opinie i własna cena w Google Hotels obok cen portali"),
        li("wyszukiwanie nazwy — strona obiektu na pierwszym miejscu, z przyciskiem „sprawdź dostępność”"),
        p("Ogólne frazy typu „hotel Kraków” należą do portali i sieci. Mały hotel albo pensjonat wygrywa na frazach dłuższych i na własnej nazwie."),

        h2("Booking.com a strona hotelu: prowizja i rezerwacje bezpośrednie"),
        p("W Polsce Booking.com jest dla wielu hoteli i pensjonatów głównym źródłem rezerwacji, a po wpisaniu nazwy obiektu często stoi w Google wyżej niż jego własna strona. Każda taka rezerwacja to prowizja — na dużych portalach zwykle w okolicach 15–25%, zależnie od umowy — także od gościa, który szukał właśnie Was."),
        p("Pozycjonowanie nie zastąpi portali, ale może odzyskać wyszukiwanie nazwy:"),
        li("strona główna z dokładną nazwą, miejscowością i adresem w tytule, w treści i w danych strukturalnych"),
        li("widoczny przycisk rezerwacji z wyborem dat zamiast formularza „zapytaj o wolne terminy”"),
        li("jasna informacja, co daje rezerwacja bezpośrednia — śniadanie, późne wymeldowanie, parking — w granicach tego, na co pozwalają umowy z portalami"),
        li("wizytówka Google z linkiem do Waszej strony, a nie do profilu na portalu"),

        h2("Frazy „noclegi + miasto” w pozycjonowaniu hotelu i pensjonatu"),
        p("Goście w Polsce częściej wpisują „noclegi” niż „hotel”, a do miejscowości dodają to, co dla nich ważne:"),
        li("miejsce i udogodnienie: „noclegi Zakopane z basenem”, „pensjonat Karpacz z widokiem na Śnieżkę”, „hotel Kraków stare miasto z parkingiem”"),
        li("morze: „noclegi Sopot blisko plaży”, „apartament Kołobrzeg przy promenadzie”, „noclegi nad morzem z psem”"),
        li("okazja: „hotel na wesele Mazury”, „hotel na szkolenie pod Warszawą”, „weekend we dwoje w górach”"),
        li("termin: „noclegi na majówkę”, „sylwester w górach z noclegiem”"),
        p("Przed pisaniem sprawdzam prawdziwe dane wyszukiwań dla Waszej miejscowości i to, które frazy trzymają portale. Każda fraza dostaje jedną podstronę, a wybieram te, które obiekt Waszej wielkości realnie może wygrać."),

        h2("Sezonowość nad morzem, w górach i w mieście: kiedy publikować podstrony hotelu"),
        p("Nowa podstrona potrzebuje zwykle od kilku tygodni do kilku miesięcy, żeby wejść wysoko, więc publikuję ją przed sezonem, a nie w jego trakcie:"),
        li("nad morzem goście szukają lata już zimą i wiosną, więc podstrony wakacyjne i oferty na długie pobyty powinny być gotowe na początku roku"),
        li("w górach są dwa szczyty: ferie zimowe, które w Polsce przypadają w różnych województwach w różnych tygodniach, i lato; podstrona ferii może wymieniać terminy dla województw, z których przyjeżdża najwięcej gości"),
        li("w mieście ruch zależy od targów, koncertów i konferencji, a w tygodniu od gości biznesowych"),
        li("majówka, Boże Ciało, długie weekendy i sylwester to osobne, wcześnie planowane wyszukiwania"),
        p("Podstrony sezonowe zostają pod tym samym adresem co roku, z nowymi datami i cenami. Poza sezonem warto mieć podstrony ofert, które sprzedają się wtedy najlepiej: SPA, pobyty dla seniorów, szkolenia firmowe."),

        h2("Podstrony pokoi, okolicy, wesel i konferencji na stronie hotelu"),
        h3("Pokoje i apartamenty"),
        p("Każdy typ pokoju dostaje własną podstronę: metraż, łóżka, widok, liczba osób, łazienka, udogodnienia dla osób z niepełnosprawnościami, prawdziwe zdjęcia i przycisk rezerwacji. Warto napisać wprost, czy cena obejmuje śniadanie, parking i opłatę miejscową, jeśli miejscowość ją pobiera — to pytania, które goście zadają najczęściej."),
        h3("Okolica opisana rzetelnie"),
        p("„Do Krupówek 12 minut pieszo” jest lepsze niż „w samym sercu Zakopanego”, jeśli to zmierzone. Jedna dobra podstrona o okolicy i kilka o miejscach, do których goście naprawdę przyjeżdżają — stok, termy, molo, hala targowa — dają więcej niż dziesiątki krótkich tekstów o każdej atrakcji w regionie."),
        h3("Wesela, konferencje i imprezy firmowe"),
        p(
          "W Polsce wiele hoteli poza sezonem żyje z wesel, szkoleń i wyjazdów integracyjnych. Te podstrony potrzebują pojemności sal w różnych ustawieniach, menu, liczby pokoi dla gości, wolnych terminów i formularza zapytania. Jeśli restauracja hotelowa przyjmuje gości z zewnątrz, może mieć własne pozycjonowanie — opisuję je na stronie ",
          link("pozycjonowanie restauracji", "/pl/pozycjonowanie-restauracji"),
          ".",
        ),

        h2("Wizytówka Google hotelu, Google Hotels i opinie gości"),
        p("Przy wyszukiwaniach w Mapach Google decyduje wizytówka: kategoria główna „Hotel” albo bliższa, np. pensjonat czy apartamenty, godziny zameldowania i wymeldowania, udogodnienia, aktualne zdjęcia pokoi i wejścia, link do własnej strony. W wizytówce hotelu Google pokazuje też ceny z różnych serwisów; obiekt może dodać tam własną cenę przez Google Hotel Center i partnera łączności — zwykle dostawcę silnika rezerwacyjnego albo channel managera. Za kliknięcia w podstawowe, bezpłatne linki rezerwacji Google nie pobiera opłat."),
        p("Opinie w Google i na TripAdvisorze goście czytają przed rezerwacją. Najlepiej działa stała prośba w mailu po pobycie i odpowiedź na każdą opinię w ciągu kilku dni, także krytyczną. Kupowanie opinii łamie zasady Google."),

        h2("Silnik rezerwacyjny na stronie hotelu: Profitroom i podobne systemy a pozycjonowanie"),
        p("Wiele polskich hoteli korzysta z silników rezerwacyjnych takich jak Profitroom albo podobnych systemów. Silnik odpowiada za rezerwację, a strona — za to, żeby gość w ogóle do niej trafił. Typowe problemy:"),
        li("skrypt widżetu rezerwacji spowalnia każdą podstronę na telefonie"),
        li("silnik działa w innej domenie bez śledzenia między domenami, więc rezerwacje z Google wyglądają jak wejścia z samego silnika"),
        li("opisy pokoi są tylko w silniku, którego wyszukiwarka nie indeksuje"),
        li("brak danych strukturalnych typu Hotel z adresem, godzinami zameldowania, udogodnieniami i kategorią obiektu"),
        p("W Polsce nazwy rodzajów obiektów, takich jak hotel czy pensjonat, i gwiazdki wiążą się z kategoryzacją, więc w danych strukturalnych podaję kategorię nadaną oficjalnie, a nie deklarowaną. To ogólna wskazówka, nie porada prawna. Czy Wasz silnik obsługuje połączenie z Google Hotels, trzeba sprawdzić u dostawcy."),
        p(
          "Jeśli stronę trzeba zbudować od nowa, opisuję to na stronie ",
          link("strona dla hotelu", "/pl/strona-dla-hotelu"),
          ".",
        ),

        h2("Wersje językowe strony hotelu dla gości z Niemiec i z zagranicy"),
        p("Nad Bałtykiem, w Świnoujściu, Międzyzdrojach czy Kołobrzegu, i w Karkonoszach wielu gości przyjeżdża z Niemiec. Szukają po niemiecku, często z niemieckimi nazwami miejscowości: „Hotel Kolberg Ostsee”, „Ferienwohnung Misdroy”. W Krakowie, Gdańsku i Warszawie dochodzą goście anglojęzyczni na city break. Dla wyszukiwarki to osobne frazy i osobne podstrony:"),
        li("oddzielny adres dla każdego języka, z tekstem napisanym albo poprawionym przez osobę, która zna język, a nie automatyczny tłumacz"),
        li("poprawne znaczniki hreflang łączące wersje"),
        li("te same pokoje, ceny i zasady pobytu we wszystkich wersjach"),
        li("silnik rezerwacyjny otwierający się w języku gościa"),

        h2("Pozycjonowanie pensjonatu i apartamentów: mniejsze obiekty w Google"),
        p("Pensjonat z ośmioma pokojami albo kilka apartamentów w jednym mieście nie potrzebuje rozbudowanej strategii. Zwykle wystarczą: kompletna wizytówka Google, strona z osobnymi podstronami dla każdego pokoju lub apartamentu, rzetelny opis okolicy i dojazdu, prosty system rezerwacji i regularne odpowiedzi na opinie. Właściciel, który ma apartamenty w kilku budynkach, potrzebuje podstrony dla każdego adresu, bo goście szukają konkretnej lokalizacji: „apartament Sopot Monte Cassino”, „apartament Zakopane blisko Gubałówki”."),

        h2("Pozycjonowanie hotelu w AI: widoczność w ChatGPT i Google AI Overviews (GEO, AEO)"),
        p("Goście coraz częściej pytają ChatGPT, Perplexity albo podsumowania AI w Google, gdzie w Zakopanem przenocować z dziećmi i parkingiem albo jaki pensjonat w Karpaczu przyjmuje psy. Asystent poleca obiekty, o których znajduje konkretne fakty. Pracę nad tym nazywa się GEO (generative engine optimization) albo AEO (answer engine optimization). Dla hotelu oznacza to:"),
        li("położenie opisane słowami, z odległościami do miejsc, o które pytają goście"),
        li("udogodnienia i zasady — parking, zwierzęta, dzieci, godziny śniadań, zameldowanie — zapisane tekstem, nie tylko ikonami"),
        li("te same dane na stronie, w wizytówce Google, na TripAdvisorze i na portalach"),
        p(
          "Przed pracą i po niej sprawdzam, jak asystenci opisują Wasz obiekt. Więcej na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Marketing dla hotelu: gdzie w marketingu hotelu mieści się pozycjonowanie"),
        p("Marketing w hotelu to zwykle kilka kanałów naraz: portale rezerwacyjne, kampanie w Google i w metawyszukiwarkach, media społecznościowe, newsletter do stałych gości, oferty pakietowe. Agencja marketingu dla hotelu często prowadzi je wszystkie. Ja robię część SEO i, jeśli trzeba, stronę; kampanii i mediów społecznościowych nie prowadzę."),
        p("Pozycjonowanie jest wolniejsze niż kampania, ale nie płaci się za kliknięcie ani prowizji od rezerwacji. Dlatego w marketingu hotelu pełni rolę kanału, który z czasem zmniejsza zależność od portali, a pozostałe kanały dbają o gości, którzy już Was znają."),

        h2("Ile kosztuje pozycjonowanie strony hotelu"),
        li("Audyt SEO strony, wyszukiwania nazwy obiektu i wizytówki Google: od 1000 zł, jednorazowo, z listą poprawek według wpływu na wynik."),
        li("Jednorazowe prace — podstrony pokoi, okolicy i sal, wersje językowe, dane strukturalne, poprawki techniczne: od 1000 do 3000 zł."),
        li("Stałe pozycjonowanie strony hotelu — nowe podstrony, przygotowanie sezonów, mapy, widoczność w AI i raporty rezerwacji: od 3500 zł miesięcznie, w bardzo konkurencyjnych miejscowościach od 5500 zł miesięcznie."),
        p(
          "Pensjonat albo kilka apartamentów często osiąga większość efektu dzięki audytowi i kilku dobrym podstronom. Pełne widełki są w ",
          link("cenniku", "/pl/cennik"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie strony hotelu: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje pozycjonowanie strony hotelu w 2026?", "Audyt strony i wizytówki od 1000 zł jednorazowo, pojedyncze prace od 1000 do 3000 zł, stałe pozycjonowanie od 3500 zł miesięcznie, w bardzo konkurencyjnych miejscowościach od 5500 zł. Stałą cenę podaję po krótkim opisie obiektu i miejscowości."],
          ["Czy pozycjonowanie zmniejszy prowizje płacone Booking.com?", "Może przenieść część rezerwacji na Waszą stronę, głównie gości, którzy znają już nazwę obiektu albo szukają czegoś konkretnego. Portali nie zastąpi; większość obiektów korzysta z obu kanałów i dzięki SEO płaci prowizję od mniejszej liczby rezerwacji."],
          ["Jak długo trwa pozycjonowanie strony hotelu?", "Poprawki w wizytówce i w wyszukiwaniu nazwy potrafią zadziałać w kilka tygodni. Nowe podstrony zwykle potrzebują dwóch–czterech miesięcy, dlatego podstrony sezonowe publikuję z wyprzedzeniem."],
          ["Czy można samemu pozycjonować stronę pensjonatu?", "Część tak: uzupełnić wizytówkę Google, zrobić osobną podstronę dla każdego pokoju, opisać dojazd i odpowiadać na opinie. Audyt pomaga ustalić, co daje najwięcej, a technikę — szybkość, silnik rezerwacyjny, dane strukturalne i wersje językowe — zwykle lepiej zlecić."],
          ["Czy stronę z silnikiem Profitroom albo innym systemem rezerwacji da się pozycjonować?", "Tak. Silnik obsługuje rezerwację, a pozycjonowanie dotyczy strony, z której gość do niej trafia. Sprawdzam, czy widżet nie spowalnia strony i czy rezerwacje z Google są poprawnie liczone."],
          ["Czy prowadzisz też kampanie i media społecznościowe hotelu?", "Nie. Robię pozycjonowanie i, jeśli trzeba, stronę. Kampanie i media społecznościowe lepiej powierzyć agencji albo osobie w hotelu; SEO działa obok nich."],
          ["Czy pracujesz z obiektami spoza Warszawy?", "Tak, z całej Polski: nad morzem, w górach, na Mazurach i w miastach. Pozycjonowanie robię zdalnie: strona, wizytówka i dane wyszukiwań dla Waszej miejscowości."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie strony hotelu: co mi wysłać"),
        p(
          "Wyślijcie nazwę obiektu, link do strony i do wizytówki w Mapach Google, nazwę silnika rezerwacyjnego albo channel managera, mniej więcej jaka część rezerwacji przychodzi z portali, z jakich krajów są goście oraz kiedy macie sezon, a kiedy wolne pokoje. Odpowiem, co poprawiłbym najpierw i za jaką stałą cenę. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
