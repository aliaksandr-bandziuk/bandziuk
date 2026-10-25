// Landing page fixture: Tworzenie stron internetowych w Katowicach (PL), group
// «tworzenie-stron-internetowych-katowice». City page, stage 3 pilot.
// Phrases (ref/city-keywords.md, ref/pl-cities.md; volumes/month, Poland):
// strony internetowe katowice 590 · tworzenie stron internetowych katowice 170
// · tworzenie stron internetowych katowice cennik 20. Brief adds «projektowanie
// stron Katowice» and «strona internetowa Katowice» for H2/H3/FAQ. «agencja
// reklamowa / marketingowa katowice» (390 / 320) — ad agencies, not targeted.
// PAA: «Jaka jest cena projektowania stron internetowych?» → FAQ.
// Intent (ref/intent-check-pl-cities.md): SEO vs website build 0 shared URLs →
// separate pages; «tworzenie stron», «projektowanie stron», «strony
// internetowe» share 0–1 URLs (fragmented SERP of small studios, Oferteo) →
// one page carrying all of them in headings and FAQ. Katowice vs Gliwice: 0
// shared URLs → page about Katowice, neighbours only as the area served.
// City angle: one metropolis of many towns (site structure for a service
// area), events and congress economy (Spodek, MCK) → venue/event sites with
// English versions, industrial suppliers and B2B → catalogue-type sites,
// renovation of old housing stock; how the local studio market looks.
// Prices: /pl/cennik — prosta strona 3000–6000 zł, pełna strona od 8500 zł,
// projekt graficzny w cenie.
// NOT on this page: pozycjonowanie (/pl/pozycjonowanie-stron-katowice); online
// shops (not offered); Gliwice and other GZM cities as separate targets;
// Google Ads and social media.
// Owner’s rules: remote from Warsaw, no visits promised; never say there are no
// clients from the visitor’s city or industry.
import { p, h2, h3, li, ol, link, k } from "./pt";

export const tworzenieStronInternetowychKatowicePl = {
  lang: "pl",
  group: "tworzenie-stron-internetowych-katowice",
  slug: "tworzenie-stron-internetowych-katowice",
  title: "Tworzenie stron internetowych w Katowicach",
  heading: "Tworzenie stron internetowych w Katowicach",
  excerpt:
    "Tworzenie stron internetowych w Katowicach: projektuję i buduję strony dla firm z Katowic i całej metropolii — usługi i miasta na osobnych podstronach, telefon jednym dotknięciem, wersje językowe i panel do samodzielnej edycji. Projekt w cenie, ceny w cenniku.",
  seo: {
    metaTitle: "Strony internetowe Katowice od 3000 zł | Bandziuk",
    metaDescription:
      "Strony internetowe dla firm z Katowic i metropolii: projekt w cenie, podstrony usług i miast, wersje językowe, formularz zgodny z RODO. Od 3000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt i wykonanie: jedna osoba", "Od 3000 zł", "Firmy z całej metropolii"],
  heroPhonePoints: ["Zadzwoń · WhatsApp", "Obsługujemy Katowice, Chorzów, Sosnowiec", "Realizacje z regionu", "Wersja EN"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona internetowa dla firmy z Katowic, projekt w cenie", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Pełna strona firmy z Katowic: podstrony usług i miast, wersje językowe, integracje, podstawy SEO, projekt w cenie", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co dostajecie ze stroną internetową z Katowic",
      items: [
        { _key: k("o"), iconName: "layers", title: "Podstrony usług i miast, w których pracujecie", text: "Katowice na pierwszym planie, sąsiednie miasta tam, gdzie macie klientów" },
        { _key: k("o"), iconName: "phone", title: "Kontakt widoczny bez przewijania", text: "Telefon, WhatsApp i formularz na każdej podstronie" },
        { _key: k("o"), iconName: "image", title: "Realizacje zamiast zdjęć ze stocku", text: "Galerie z opisem: co, gdzie i w jakim zakresie" },
        { _key: k("o"), iconName: "message-circle", title: "Wersja angielska, niemiecka lub ukraińska", text: "Dla gości wydarzeń, odbiorców z zagranicy i pracowników" },
        { _key: k("o"), iconName: "shield-check", title: "Formularz i cookies zgodne z RODO", text: "Klauzula informacyjna i zgoda przed analityką" },
        { _key: k("o"), iconName: "sparkles", title: "Czytelna dla Google i asystentów AI", text: "Fakty zapisane tekstem, dane strukturalne firmy" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona firmy z Katowic", value: "3000–6000 zł", note: "projekt w cenie" },
        { _key: k("r"), label: "Usługi, miasta, języki, integracje", value: "od 8500 zł", note: "projekt w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Strony internetowe, które zaprojektowałem i zbudowałem",
      subtitle:
        "Firma remontowo-inwestycyjna, warsztat samochodowy i pracownia renowacji felg z Warszawy, firma skanowania laserowego 3D i modelowania BIM oraz wielojęzyczny serwis agencji edukacyjnej dla dziesięciu krajów. To, co przyda się firmie z Katowic: strony lokalnych firm z dużego miasta, nastawione na telefon i zapytanie, strona techniczna B2B w trzech językach i serwis, który prowadzi klientów z wielu krajów do jednego formularza.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "renovation-and-investment-website-with-premium-design",
        "architecture-website-rebuild-and-seo-scan",
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "full-multilingual-website-development-and-seo-for-student-services",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej dla firmy z Katowic",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: proponuję listę podstron, mówię, które miasta i języki warto uwzględnić, i podaję stałą cenę w widełkach z cennika.",
      contextLabel: "Nazwa firmy lub obecna strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Kim są Wasi klienci?", options: ["Mieszkańcy Katowic i okolic", "Firmy z regionu", "Organizatorzy wydarzeń i goście", "Odbiorcy z całej Polski i zagranicy"] },
        { _key: k("z"), question: "Co macie teraz?", options: ["Brak strony", "Starą stronę na WordPressie", "Stronę z kreatora", "Tylko profil w Mapach Google"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Tworzenie stron internetowych w Katowicach to usługa, którą prowadzę zdalnie z Warszawy dla firm z Katowic i sąsiednich miast metropolii. Strukturę, projekt graficzny, wykonanie, teksty i uruchomienie robi jedna osoba, więc rozmawiacie z tym, kto naprawdę buduje stronę. Cena jest znana z cennika, zanim napiszecie pierwszą wiadomość."),

        h2("Strony internetowe Katowice: jakie firmy z metropolii potrzebują nowej strony"),
        p("Gospodarka Katowic zmieniła się w ciągu jednego pokolenia. Miasto kojarzone z górnictwem i przemysłem ciężkim jest dziś ośrodkiem usług, biur, uczelni i dużych wydarzeń, a przemysł działa dalej w całym regionie, często w nowej formie. Strony, o które proszą firmy z Katowic, odpowiadają tej mieszance:"),
        li("firmy usługowe z centrum, które obsługują biura i ich pracowników — od księgowości po sprzątanie i catering"),
        li("obiekty i firmy wydarzeń: sale, hotele, restauracje, wypożyczalnie sprzętu, fotografowie konferencji"),
        li("dostawcy dla przemysłu, zakłady obróbki, serwisy maszyn, które sprzedają innym firmom"),
        li("ekipy remontowe, instalatorzy i dekarze pracujący przy starszych kamienicach, blokach i domach w całym regionie"),
        li("gabinety, szkoły językowe i pracownie, do których klienci przyjeżdżają z kilku miast"),
        p("Strona dla obiektu, który gości kongres, i strona dla firmy, która remontuje dachy w Siemianowicach, wyglądają zupełnie inaczej. Dlatego zaczynam od pytania, kim są Wasi klienci i skąd przychodzą, a dopiero potem dobieram układ i liczbę podstron."),

        h2("Strona internetowa firmy, która obsługuje Katowice i sąsiednie miasta"),
        p("Katowice to jedno miasto w gęsto zabudowanej aglomeracji. Klient z Chorzowa, Mysłowic czy Rudy Śląskiej często nawet nie zauważa, kiedy przekracza granicę miasta, ale w wyszukiwarce wpisuje swoją miejscowość albo dzielnicę. Strona powinna to uwzględnić od pierwszego projektu:"),
        li("na stronie głównej od razu widać, że pracujecie w Katowicach i w których miastach obok"),
        li("osobna podstrona miasta powstaje tylko tam, gdzie macie realizacje i coś konkretnego do pokazania, a nie dla każdej z kilkunastu miejscowości"),
        li("przy realizacjach jest dzielnica lub miasto, np. „Remont łazienki, Katowice-Bogucice”"),
        li("kontakt podaje adres, godziny i dojazd tak, jak w wizytówce Google"),
        p("Warto też pamiętać, jak w metropolii poruszają się klienci. Do pracy dojeżdżają do centrum Katowic, ale hydraulika, fryzjera czy przedszkole wybierają blisko domu. Firma z usługami domowymi pokazuje więc dzielnice i miasta, do których dojeżdża, a gabinet czy pracownia w centrum — parking, przystanki i godziny po pracy."),
        p("Takiej struktury nie dopisuje się po latach. Zaplanowana od początku pozwala później rozbudować stronę o kolejne miasta bez przebudowy całości."),

        h2("Projektowanie stron w Katowicach: studia, agencje, freelancerzy i Oferteo"),
        p("Po wpisaniu „projektowanie stron Katowice”, „tworzenie stron internetowych Katowice” albo „strony internetowe Katowice” zobaczycie za każdym razem trochę inny zestaw firm. Są lokalne studia ze Śląska, ogólnopolskie agencje z podstroną dla Katowic, freelancerzy i portal Oferteo, który rozsyła jedno zapytanie do wielu wykonawców. Rynek jest rozdrobniony, więc porównywanie ofert zajmuje czas."),
        h3("O co zapytać wykonawcę strony w Katowicach"),
        li("kto konkretnie zaprojektuje i zbuduje stronę i czy rozmawiacie z tą osobą"),
        li("czy projekt graficzny jest w cenie, czy to osobna pozycja"),
        li("czy po uruchomieniu płacicie abonament wykonawcy i za co"),
        li("do kogo należą domena, kod i treści"),
        p("U mnie odpowiedź jest krótka: wszystko robi jedna osoba, projekt jest w cenie, abonamentu nie ma, a strona należy do Was."),

        h2("Strona internetowa dla obiektu, hotelu lub firmy wydarzeń w Katowicach"),
        p("Wydarzenia w Spodku i w Międzynarodowym Centrum Kongresowym przyciągają do Katowic gości z całej Polski i z zagranicy. Organizatorzy, którzy szukają sali, cateringu albo noclegów, czytają strony uważnie i porównują je jedną obok drugiej. Taka strona potrzebuje:"),
        li("podstrony dla każdej sali lub rodzaju wydarzenia z pojemnością, układami i wyposażeniem zapisanymi tekstem"),
        li("galerii ze zdjęciami z prawdziwych wydarzeń, a nie wizualizacji"),
        li("formularza zapytania z datą, liczbą osób i rodzajem wydarzenia, żeby nie wymieniać pięciu maili przed wyceną"),
        li("wersji angielskiej dla zagranicznych organizatorów i gości"),
        p("Dobrze działa też prosta informacja o dostępnych terminach albo o tym, jak wcześnie trzeba rezerwować przed dużymi wydarzeniami w mieście. Obiekt, który odpowiada na te pytania na stronie, dostaje zapytania od organizatorów, którzy już wiedzą, czego chcą, a nie tylko pytania o to, co jest na stronie."),

        h2("Wersje językowe strony internetowej dla firm z Katowic"),
        p("W Katowicach języki obce na stronie rzadko są ozdobą. Hotel i restauracja przy centrum kongresowym obsługują gości po angielsku, dostawca dla przemysłu wysyła oferty do Niemiec i Czech, a firma budowlana czy agencja pracy rekrutuje osoby, które czytają po ukraińsku. Każdy z tych przypadków wymaga czegoś innego:"),
        li("tłumaczę tylko podstrony, z którymi naprawdę przychodzą osoby z danym językiem, a nie całą stronę na siłę"),
        li("każda wersja ma własne adresy i oznaczenia hreflang, żeby Google pokazywał właściwą wersję"),
        li("formularz, klauzula RODO i komunikaty po wysłaniu są w tym samym języku co podstrona"),
        p(
          "Szczegóły budowy stron w kilku językach są na stronie ",
          link("tworzenie stron wielojęzycznych", "/pl/oferty/tworzenie-stron-wielojezycznych"),
          ".",
        ),

        h2("Strona internetowa dla dostawcy przemysłu i zakładu produkcyjnego ze Śląska"),
        p("Kupiec z działu zaopatrzenia nie szuka ładnych haseł, tylko odpowiedzi: co produkujecie, z jakich materiałów, w jakich seriach, na jakich maszynach i według jakich norm. Strona dostawcy dla przemysłu to w praktyce uporządkowany katalog możliwości, karty techniczne do pobrania i prosty formularz, w którym można przesłać rysunek. Często potrzebna jest wersja angielska albo niemiecka, bo odbiorcy są za granicą."),
        p(
          "Więcej o takich stronach piszę na stronie ",
          link("strona dla firmy produkcyjnej", "/pl/strona-dla-firmy-produkcyjnej"),
          ", a o stronach dla wykonawców robót na stronie ",
          link("strona internetowa dla firmy budowlanej", "/pl/strona-internetowa-dla-firmy-budowlanej"),
          ".",
        ),

        h2("Jak wygląda tworzenie strony internetowej, gdy wykonawca pracuje z Warszawy"),
        p("Z firmami z Katowic pracuję online i to nie wydłuża projektu. Każdy etap kończy się czymś, co możecie obejrzeć na telefonie:"),
        ol("Rozmowa wideo i brief: usługi, miasta, klienci, języki, zdjęcia, które już macie."),
        ol("Plan podstron i cena, której nie zmieniam bez Waszej zgody."),
        ol("Projekt strony głównej i jednej podstrony usługi, najpierw w wersji na telefon."),
        ol("Wykonanie i teksty; poprawiacie fakty we wspólnym dokumencie."),
        ol("Uruchomienie: domena, SSL, analityka po zgodzie, Search Console i krótka instrukcja edycji."),
        p("Uwagi zbieram w jednym miejscu, a decyzje zapadają w wiadomości, a nie na kolejnym spotkaniu. Zdjęcia z realizacji czy z obiektu możecie zrobić telefonem albo zlecić lokalnemu fotografowi; podpowiem, jakich ujęć potrzeba do każdej podstrony."),

        h2("Strona internetowa, którą ChatGPT i Google AI Overviews potrafią przeczytać"),
        p("Coraz więcej osób pyta ChatGPT albo czyta podsumowanie AI w Google: „hotel blisko Spodka z salą na szkolenie”, „firma od elewacji kamienic w Katowicach”. Polecenie dostaje firma, której strona odpowiada na takie pytanie wprost. Dlatego usługi, miasta, ceny lub widełki, godziny i języki obsługi zapisuję na stronie tekstem, a nie na grafikach, a dane strukturalne opisują firmę tak samo jak wizytówka Google."),
        p(
          "Widoczność w odpowiedziach AI rozwijana po uruchomieniu strony to osobna praca, opisana na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Strona internetowa a pozycjonowanie w Katowicach: co jest w cenie strony"),
        p("Każda strona, którą buduję, ma podstawy SEO w cenie: przemyślane adresy podstron, tytuły i opisy, dane strukturalne, szybkość na telefonie, mapę strony i podłączone Google Search Console. Dzięki temu Google od pierwszego dnia rozumie, czym się zajmujecie i gdzie."),
        p(
          "Walka o wysokie pozycje dla fraz z nazwą Katowic, podstrony dla kolejnych miast i praca nad Mapami to już stała usługa, opisana na stronie ",
          link("pozycjonowanie stron w Katowicach", "/pl/pozycjonowanie-stron-katowice"),
          ". Jeśli macie stronę, która ma pozycje, ale jest przestarzała, nowa wersja zachowa je dzięki przekierowaniom — proces opisuję na stronie ",
          link("przebudowa strony internetowej", "/pl/oferty/przebudowa-strony-internetowej"),
          ".",
        ),

        h2("Tworzenie stron internetowych Katowice: cennik i co wpływa na cenę"),
        li("Prosta strona — strona główna, kilka podstron usług, realizacje, kontakt, formularz zgodny z RODO: od 3000 do 6000 zł."),
        li("Pełna strona — podstrony usług i miast, wersje językowe, rozbudowany formularz lub rezerwacja, integracje i podstawy SEO lokalnego: od 8500 zł."),
        p(
          "Oba warianty obejmują projekt graficzny; aktualne widełki pokazuje ",
          link("cenniku", "/pl/cennik"),
          ". Cenę podnosi liczba podstron, języków i integracji, a obniżają ją Wasze gotowe teksty i zdjęcia. Ogólnie o tym, jak pracuję nad stronami firm, piszę na stronie ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ".",
        ),
        p("Po uruchomieniu nie ma abonamentu u mnie. Hosting i domenę opłacacie bezpośrednio u dostawcy, a za zmiany płacicie tylko wtedy, gdy o nie poprosicie. Oszczędzać warto na zakresie, na przykład zaczynając od kilku podstron i dokładając kolejne miasta później, a nie na szybkości, wersji mobilnej czy formularzu."),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strony internetowe w Katowicach: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Jaka jest cena projektowania stron internetowych w Katowicach?", "Prosta strona kosztuje od 3000 do 6000 zł, a pełna strona z podstronami usług i miast, wersjami językowymi i integracjami od 8500 zł. Projekt graficzny nie jest doliczany osobno. Konkretną kwotę dla Waszej firmy podaję po krótkim opisie."],
          ["Ile trwa stworzenie strony internetowej dla firmy z Katowic?", "Prosta strona zwykle od dwóch do czterech tygodni od briefu, pełna od czterech do sześciu, a z wersjami językowymi dłużej. Najwięcej zależy od tego, jak szybko gotowe są zdjęcia, teksty i Wasze uwagi."],
          ["Czy strona może mieć podstrony dla Chorzowa, Sosnowca czy Gliwic?", "Tak, jeśli macie tam klientów i realizacje. Podstrona miasta z konkretnymi informacjami pomaga klientom i Google; kilkanaście identycznych podstron różniących się tylko nazwą miasta szkodzi."],
          ["Czy przyjedziesz na spotkanie do Katowic?", "Pracuję z Warszawy, a z firmami z Katowic współpracuję online: rozmowa wideo, wspólny dokument i podgląd strony na każdym etapie. Projekt nie wymaga spotkań na miejscu."],
          ["Czy strona może mieć wersję angielską lub ukraińską?", "Tak. Każda wersja ma własne adresy podstron i oznaczenia dla Google, a tłumaczone są te podstrony, z którymi naprawdę przychodzą goście, odbiorcy z zagranicy albo pracownicy."],
          ["Czy zmiany na stronie zrobimy bez programisty?", "Tak. Teksty, ceny, zdjęcia, realizacje i godziny zmieniacie w prostym panelu, także z telefonu. Programista nie jest potrzebny do codziennych zmian."],
          ["Do kogo należy strona po uruchomieniu?", "Do Was: domena, kod i treści. Rachunek za hosting przychodzi od jego dostawcy, a ode mnie tylko za zlecone poprawki."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową w Katowicach: co mi wysłać"),
        p(
          "Wyślijcie nazwę firmy, link do obecnej strony albo wizytówki Google, listę usług, miasta metropolii, w których pracujecie, i języki, w których obsługujecie klientów. Kilka zdjęć z realizacji pomoże mi pokazać projekt, który wygląda jak Wasza firma. Odpowiem listą podstron i stałą ceną. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
