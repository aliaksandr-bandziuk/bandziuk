// Landing page fixture: Pozycjonowanie firmy DDD (PL), group «pest-control-seo».
// New page. Market version for Polish firmy DDD (dezynsekcja, deratyzacja,
// dezynfekcja) — owner-run firms with a few technicians and cars — not a
// translation of pest-control-seo.en.
// Semantic core: ref/home-services.md has no measured PL phrases for this
// niche; H1 and headings carry the slug phrase «pozycjonowanie firmy DDD» and
// the service words customers and buyers use: dezynsekcja, deratyzacja,
// dezynfekcja, pluskwy, prusaki, osy i szerszenie, myszy i szczury, umowa DDD
// HACCP. PL PAA from the core: «Co jest lepsze: pozycjonowanie czy Google
// Ads?» (FAQ), «Ile kosztuje pozycjonowanie firmy?» (cost H2 + FAQ).
// Intent: ref/intent-check-home-services.md — EN «pest control seo» vs «pest
// control website design» 0 of 10 shared URLs → SEO and website are separate
// pages here too; /pl/strona-internetowa-dla-firmy-ddd is the sibling.
// Angles: three markets (households, gastronomia i firmy spożywcze with HACCP
// paperwork, wspólnoty / spółdzielnie / zarządcy with periodic deratyzacja
// required in some gminy — general), colloquial vs professional phrases,
// pest pages (pluskwy, prusaki i mrówki faraona, osy i szerszenie, gryzonie),
// wizytówka Google with discreet reviews, Oferteo / Fixly / OLX as the
// alternative, cost pages, środki biobójcze and safety wording (general),
// AI answers.
// NOT on this page: projekt i budowa strony, wybór szkodnika, formularz ze
// zdjęciem (/pl/strona-internetowa-dla-firmy-ddd — sibling); wizytówka in depth
// (/pl/oferty/pozycjonowanie-lokalne); sprzątanie
// (/pl/oferty/pozycjonowanie-strony-firmy-sprzatajacej-warszawa — neighbour,
// linked once); Google Ads.
// Owner’s rules: every SEO page covers AI search (GEO, AEO); never say there
// are no clients from the visitor’s industry; no guaranteed positions.
import { p, h2, h3, li, link, k } from "./pt";

export const pestControlSeoPl = {
  lang: "pl",
  group: "pest-control-seo",
  slug: "pozycjonowanie-strony-firmy-ddd",
  title: "Pozycjonowanie strony firmy DDD",
  heading: "Pozycjonowanie strony firmy DDD",
  excerpt:
    "Zajmuję się pozycjonowaniem firm DDD: podstrony dezynsekcji, deratyzacji i dezynfekcji, osobne strony o pluskwach, prusakach, osach i gryzoniach, oferta dla gastronomii z dokumentacją pod HACCP, deratyzacja dla wspólnot, wizytówka Google i obecność w odpowiedziach AI, rozliczane w telefonach i zleceniach, a nie w pozycjach.",
  seo: {
    metaTitle: "SEO dla firmy DDD: dezynsekcja i deratyzacja | Bandziuk",
    metaDescription:
      "Pozycjonowanie strony firmy DDD: podstrony szkodników, deratyzacja dla wspólnot, oferta HACCP dla gastronomii, wizytówka Google i odpowiedzi AI. Audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Dezynsekcja, deratyzacja, dezynfekcja", "Audyt od 1000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Pluskwy Kraków — szybki termin", "Deratyzacja wspólnoty", "Umowa DDD dla restauracji", "Zadzwoń · WhatsApp"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO firmy DDD: strona, wizytówka Google, konkurencja w Twoich miastach", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO dla firmy DDD: podstrony szkodników, oferta dla gastronomii i wspólnot, dane strukturalne", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie strony firmy DDD", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje pozycjonowanie strony firmy DDD",
      items: [
        { _key: k("o"), iconName: "search", title: "Frazy, które wpisują klienci firm DDD", text: "Pluskwy, prusaki, myszy, osy — z nazwą miasta" },
        { _key: k("o"), iconName: "layers", title: "Podstrona dla każdego szkodnika", text: "Objawy, metoda, przygotowanie lokalu, gwarancja" },
        { _key: k("o"), iconName: "file-text", title: "Oferta dla gastronomii i wspólnot", text: "Umowy stałe, protokoły, dokumentacja pod HACCP" },
        { _key: k("o"), iconName: "map-pin", title: "Wizytówka Google i obszar działania", text: "Miasta i powiaty, do których naprawdę jeździcie" },
        { _key: k("o"), iconName: "sparkles", title: "Widoczność w odpowiedziach AI", text: "ChatGPT, Perplexity i podsumowania AI w Google" },
        { _key: k("o"), iconName: "trending-up", title: "Raport w telefonach i zleceniach", text: "Obok tego, co dają Oferteo, Fixly i OLX" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO firmy DDD", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe pozycjonowanie strony firmy DDD", value: "od 3500 zł / mies.", note: "podstrony szkodników, Mapy, opinie, AI", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: lokalne firmy usługowe, dla których budowałem i pozycjonowałem strony",
      subtitle:
        "Warsztat samochodowy, pracownia felg i przechowalnia opon to trzy warszawskie firmy, dla których telefon i Mapy Google są głównym źródłem klientów — budowałem im podstrony usług i pracowałem nad lokalnymi wynikami i wizytówką. ScanM2, firma skanowania laserowego 3D i modelowania BIM, miała dwa lata bez zapytań na stronie z kreatora; po przebudowie jej ruch organiczny wzrósł 29-krotnie, a zapytania przychodzą co tydzień. Strona psychoterapeuty z Mediolanu przeszła migrację 468 wpisów bez utraty adresów, a jej nowe podstrony pojawiają się już w odpowiedziach ChatGPT. Firma DDD potrzebuje tego samego zestawu: podstron pod konkretne zlecenia, mocnej wizytówki i obecności w odpowiedziach AI.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
        "architecture-website-rebuild-and-seo-scan",
        "psychotherapist-website-milan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena pozycjonowania strony firmy DDD",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: co poprawiłbym najpierw na stronie i w wizytówce Google i za jaką stałą cenę.",
      contextLabel: "Nazwa firmy lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Jakich zleceń chcesz więcej?", options: ["Od osób prywatnych", "Umów z gastronomią i firmami spożywczymi", "Deratyzacji dla wspólnot i spółdzielni", "Wszystkiego po trochu"] },
        { _key: k("z"), question: "Skąd dziś przychodzą zlecenia?", options: ["Z Map Google", "Z Oferteo lub Fixly", "Z ogłoszeń na OLX", "Z poleceń i stałych umów"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Pozycjonowanie strony firmy DDD to praca nad tym, żeby osoba z pluskwami w wynajmowanym mieszkaniu, właściciel restauracji przed kontrolą sanepidu i zarządca, który szuka wykonawcy deratyzacji dla kilku budynków, znajdowali w Google Twoją firmę, a nie kolejny portal z ofertami. Pracuję sam, bez opiekuna klienta: ten, kto przegląda Twoją stronę i wizytówkę, sam pisze podstrony, zmienia kod i przygotowuje raport."),

        h2("Pozycjonowanie strony firmy DDD: dom, gastronomia i wspólnoty to trzy różne rynki"),
        p("Firma DDD sprzedaje tę samą wiedzę trzem klientom, którzy szukają zupełnie inaczej:"),
        li("osoby prywatne — zlecenie jednorazowe, pilne i często krępujące: pluskwy, prusaki, myszy w ścianie, gniazdo os nad drzwiami balkonowymi"),
        li("gastronomia, piekarnie, sklepy i magazyny żywności — umowa stała, wizyty co miesiąc albo co kwartał, monitoring i dokumenty, które trzeba pokazać przy kontroli"),
        li("wspólnoty, spółdzielnie i zarządcy nieruchomości — deratyzacja piwnic, zsypów i altan śmietnikowych, często zamawiana w terminie, z protokołem i fakturą na wspólnotę"),
        p("Jedna podstrona „Usługi” z listą wszystkiego nie odpowiada żadnemu z nich. Każda grupa dostaje własne podstrony, własne formularze i własne argumenty."),

        h2("Frazy w pozycjonowaniu strony firmy DDD: jak ludzie szukają dezynsekcji i deratyzacji"),
        p("Osoba prywatna rzadko wpisuje słowo „dezynsekcja”. Pisze tak, jak mówi: „jak pozbyć się pluskiew”, „firma od pluskiew Wrocław”, „prusaki w bloku co robić”, „kto usuwa gniazdo szerszeni”, „myszy na strychu domu”. Kierownik lokalu i zarządca używają języka branży: „deratyzacja HACCP”, „umowa DDD dla restauracji”, „dezynfekcja magazynu”, „deratyzacja wspólnoty mieszkaniowej cena”."),
        p("Przed pisaniem czegokolwiek zbieram dane wyszukiwań dla Twoich usług i miast. Często okazuje się, że frazy potoczne są wpisywane częściej niż fachowe, a frazy firmowe rzadziej, ale każda z nich może skończyć się roczną umową. Podstrony muszą obsłużyć jedne i drugie."),

        h2("Podstrony szkodników: pluskwy, prusaki, osy i szerszenie, myszy i szczury"),
        p("Każdy szkodnik ma inne pytania, inną metodę i inny sezon, więc dostaje osobną podstronę z Twoim sposobem działania, liczbą zabiegów, przygotowaniem lokalu i tym, co się dzieje, gdy problem wraca."),
        h3("Pluskwy: zlecenie, przy którym liczy się czas i dyskrecja"),
        p("Klient z pluskwami chce wiedzieć, czy stosujecie oprysk, zamgławianie czy metodę termiczną, ile zabiegów potrzeba, jak przygotować mieszkanie i rzeczy, kiedy można w nim spać i czy sąsiedzi zobaczą oklejony samochód. Osobna sekcja dla właścicieli mieszkań na wynajem krótkoterminowy, hosteli i hoteli odpowiada na ich pytania: szybki termin między gośćmi, faktura, poufność."),
        h3("Prusaki, karaluchy i mrówki faraona w bloku"),
        p("W budynku wielorodzinnym jeden lokal rzadko wystarcza, bo owady przechodzą pionami instalacji. Podstrona tłumaczy, dlaczego zabieg w jednym mieszkaniu wraca po miesiącu i jak wygląda współpraca ze spółdzielnią przy całym pionie. Takie wyjaśnienie przyciąga i lokatorów, i zarządców."),
        h3("Osy i szerszenie: telefony od czerwca do września"),
        p("Gniazda na balkonach, pod dachem i w ogrodach to krótki, intensywny sezon. Podstrona z obszarem działania, czasem dojazdu i ceną za usunięcie gniazda powinna być wysoko, zanim zacznie się lato, a nie w połowie sierpnia."),
        h3("Myszy i szczury: deratyzacja domów, firm i budynków"),
        p("Gryzonie wchodzą do budynków jesienią. Właściciel domu szuka kogoś, kto usunie szkodniki i uszczelni miejsca, którymi weszły; firma szuka stałego monitoringu ze stacjami deratyzacyjnymi rozmieszczonymi według planu. To dwie różne podstrony."),

        h2("Oferta DDD dla gastronomii i firm spożywczych: umowa, monitoring i dokumentacja HACCP"),
        p("Restauracja, piekarnia czy magazyn żywności nie kupują pojedynczego zabiegu, tylko spokój przy kontroli sanepidu i audycie sieci handlowej. Na podstronie dla tych klientów powinno być:"),
        li("dla jakich obiektów pracujecie: gastronomia, produkcja żywności, magazyny, sklepy"),
        li("co obejmuje umowa: częstotliwość wizyt, przeglądy stacji, reakcja na zgłoszenie między wizytami"),
        li("jaką dokumentację zostawiacie: plan rozmieszczenia stacji, raporty z wizyt, karty charakterystyki i pozwolenia stosowanych środków"),
        li("jak umówić bezpłatne oględziny obiektu i przygotowanie oferty, jeśli je proponujecie"),
        p("Takich zapytań jest mało, ale jedno może oznaczać umowę na lata, dlatego ta podstrona często zarabia najwięcej."),

        h2("Deratyzacja dla wspólnot, spółdzielni i zarządców nieruchomości"),
        p("W części gmin regulamin utrzymania czystości i porządku nakłada na właścicieli nieruchomości obowiązek okresowej deratyzacji, zwykle wiosną i jesienią. Zarządcy szukają wtedy wykonawcy w krótkim oknie i porównują kilka ofert. Podstrona, która mówi, co obejmuje zabieg w budynku, jaki protokół dostaje wspólnota, jak liczycie cenę i w jakich terminach macie wolne miejsca, musi być w Google na kilka tygodni przed sezonem. Treść o obowiązkach opisuję ogólnie, z odesłaniem do uchwały Twojej gminy."),

        h2("Wizytówka Google firmy DDD i lokalne wyniki w miastach i powiatach"),
        p("Na frazy z „blisko mnie” i z nazwą miasta Google pokazuje najpierw mapę. W wizytówce firmy DDD liczą się:"),
        li("kategoria główna związana ze zwalczaniem szkodników, usługi wpisane osobno i obszar działania z miastami, do których naprawdę jeździcie"),
        li("ukryty adres, jeśli klienci nie przyjeżdżają do Waszej siedziby"),
        li("zdjęcia z pracy co tydzień: technicy, samochody, stacje deratyzacyjne, uszczelnione otwory — bez zdjęć martwych szkodników"),
        li("opinie zebrane z wyczuciem: klient z pluskwami chętniej napisze „szybko i dyskretnie” niż nazwę owada, i to też jest dobra opinia"),
        p(
          "Podstrony miejscowości tworzę tylko tam, gdzie macie klientów i coś do powiedzenia o danym miejscu. Całą pracę nad Mapami Google opisuję na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Oferteo, Fixly i OLX a pozycjonowanie strony firmy DDD"),
        p("Portale z zapytaniami sprzedają to samo zgłoszenie kilku firmom naraz, a ogłoszenie na OLX znika w tłumie podobnych. Dają zlecenia od pierwszego dnia, ale za każde trzeba zapłacić albo stoczyć wyścig cenowy. Pozycjonowanie rozkręca się miesiącami, za to telefony z Google i z Map trafiają tylko do Ciebie i nie kosztują nic za sztukę. Wiele firm DDD korzysta z portali w sezonie i równolegle buduje własne źródło klientów. Moja część to strona i wizytówka; w raporcie zestawiam ich wynik z tym, co dają portale."),

        h2("Ceny dezynsekcji i deratyzacji na stronie: odpowiedź na pytanie „ile kosztuje”"),
        p("„Ile kosztuje odpluskwianie mieszkania”, „cena usunięcia gniazda os”, „koszt deratyzacji budynku” — te pytania padają w Google częściej, niż firmy DDD odpowiadają na nie na swoich stronach. Widełki cenowe z opisem, od czego zależy kwota — metraż, stopień zasiedlenia, liczba zabiegów, dojazd poza miasto — zatrzymują klienta na Twojej stronie i odsiewają tych, dla których usługa jest za droga. Pełnego cennika nie trzeba publikować."),

        h2("Środki biobójcze i bezpieczeństwo domowników w pozycjonowaniu strony firmy DDD"),
        p("Przed wpuszczeniem technika klienci pytają, czy zabieg jest bezpieczny dla dzieci, kota i rybek, ile godzin trzeba spędzić poza mieszkaniem i czym będzie pachnieć. Odpowiedzi na te pytania na stronie budują zaufanie i trafiają do podsumowań AI:"),
        li("jakiego rodzaju środków używacie — biobójczych, dopuszczonych do obrotu w Polsce i stosowanych zgodnie z etykietą"),
        li("kiedy można wrócić do pomieszczeń i co zrobić ze zwierzętami"),
        li("kto wykonuje zabiegi i jakie ma przeszkolenie, oraz informacja o ubezpieczeniu OC firmy"),
        p("Hasła w stylu „w 100% nieszkodliwe” lepiej pominąć: etykieta środka rzadko na nie pozwala. To ogólne wskazówki, a nie porada prawna."),

        h2("Pozycjonowanie strony firmy DDD w ChatGPT i Google AI Overviews (GEO, AEO)"),
        p("Coraz więcej osób wpisuje pytania do ChatGPT, Perplexity albo podsumowań AI w Google: „jak sprawdzić, czy mam pluskwy”, „czy po oprysku na karaluchy można spać w mieszkaniu”, „kto robi deratyzację HACCP w Łodzi”. Odpowiedź powstaje z tych stron, które asystent umie odczytać i zweryfikować. Taką pracę określa się jako GEO (generative engine optimization) albo AEO (answer engine optimization). W firmie DDD oznacza ona:"),
        li("wprost napisane odpowiedzi na pytania o objawy, przygotowanie lokalu i bezpieczeństwo, podpisane przez właściciela albo technika"),
        li("usługi, obszar działania, widełki cen i zakres umów dla firm zapisane zwykłymi zdaniami"),
        li("dane strukturalne opisujące firmę, jej usługi i miejscowości"),
        li("identyczne dane firmy na stronie, w wizytówce Google, na Oferteo i w Panoramie Firm"),
        p(
          "Na początku współpracy i po niej porównuję, jak asystenci opisują Twoją firmę. Szczegóły na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Ile kosztuje pozycjonowanie strony firmy DDD"),
        li("Audyt SEO strony, wizytówki i konkurencji w Twoich miastach: od 1000 zł, jednorazowo, z listą poprawek według wpływu."),
        li("Jednorazowe prace — podstrony szkodników, oferta dla gastronomii i wspólnot, poprawki wizytówki, dane strukturalne: od 1000 do 3000 zł."),
        li("Stałe pozycjonowanie strony firmy DDD — nowe podstrony, wizytówka, opinie, widoczność w AI i raporty w telefonach: od 3500 zł miesięcznie, przy silnej konkurencji w dużych miastach od 5500 zł miesięcznie."),
        p(
          "Jeśli stronę trzeba najpierw zbudować od nowa, zajrzyj na stronę ",
          link("strona internetowa dla firmy DDD", "/pl/strona-internetowa-dla-firmy-ddd"),
          ". Firmy, które obok DDD sprzątają biura i obiekty, znajdą więcej na stronie ",
          link("pozycjonowanie strony firmy sprzątającej", "/pl/oferty/pozycjonowanie-strony-firmy-sprzatajacej-warszawa"),
          ". Moje podejście do stałej pracy opisuję na stronie ",
          link("strategia i optymalizacja SEO", "/pl/oferty/strategia-i-optymalizacja-seo"),
          ", a wszystkie widełki są w ",
          link("cenniku", "/pl/cennik"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie strony firmy DDD: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje pozycjonowanie strony firmy DDD?", "Audyt kosztuje od 1000 zł jednorazowo, pojedyncze prace od 1000 do 3000 zł, a stałe pozycjonowanie od 3500 zł miesięcznie, a tam, gdzie konkurencja jest silna, od 5500 zł. Stałą cenę podaję, gdy opiszesz firmę, usługi i teren działania."],
          ["Kiedy pozycjonowanie strony firmy DDD zaczyna przynosić telefony?", "Poprawki wizytówki i opinii potrafią dać efekt w kilka tygodni. Nowe podstrony szkodników zwykle potrzebują dwóch–czterech miesięcy, w dużych miastach dłużej. Dlatego podstrony sezonowe, na przykład o osach czy deratyzacji wspólnot, przygotowuję z wyprzedzeniem."],
          ["Co jest lepsze dla firmy DDD: pozycjonowanie czy Google Ads?", "Jedno nie zastępuje drugiego. Google Ads daje telefony od razu i kosztuje za każde kliknięcie, pozycjonowanie rośnie wolniej, ale wejścia z wyszukiwarki są bezpłatne. Wiele firm prowadzi kampanię w sezonie, a pozycjonowanie traktuje jako stałe źródło zleceń."],
          ["Czy firma DDD powinna podawać ceny na stronie?", "Widełki — tak, zwłaszcza dla pluskiew, os i deratyzacji budynków. Wystarczy napisać, od czego zależy cena. Klient, który zna przybliżony koszt przed telefonem, częściej zamawia, a asystenci AI mają z czego zacytować Twoją ofertę."],
          ["Czy klienci z pluskwami w ogóle zostawiają opinie?", "Tak, jeśli poprosisz ich z wyczuciem i nie oczekujesz nazwy owada. Opinia „przyjechali następnego dnia, dyskretnie i skutecznie” działa równie dobrze. Odpowiadaj na każdą bez podawania szczegółów zlecenia."],
          ["Czy ChatGPT poleca firmy DDD?", "Tak, gdy ktoś zapyta o firmę w swoim mieście. Asystent wybiera firmy, o których znajduje sprawdzalne fakty: usługi, obszar, opinie i jasne odpowiedzi na typowe pytania. Nikt nie zagwarantuje polecenia, ale te fakty zwiększają szanse; sprawdzam wynik przed i po pracy."],
          ["Czy pracujesz z firmami DDD spoza Warszawy?", "Tak, z całej Polski — od Krakowa, Trójmiasta i Śląska po małe powiaty. Pracuję zdalnie i opieram się na danych wyszukiwań z Twoich miejscowości; rozmawiamy po polsku, a jeśli trzeba, także po angielsku lub rosyjsku."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie strony firmy DDD: co mi wysłać"),
        p(
          "Wyślij nazwę firmy, link do strony i do wizytówki w Mapach Google, listę usług i szkodników, przy których chcesz mieć więcej zleceń, miejscowości, do których jeździcie, i informację, czy zależy Ci bardziej na klientach prywatnych, gastronomii czy wspólnotach. Odpowiem, co poprawiłbym najpierw i za jaką stałą cenę. Skorzystaj z ",
          link("formularza powyżej", "#quote"),
          " albo napisz na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
