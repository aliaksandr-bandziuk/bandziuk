// Landing page fixture: Pozycjonowanie gabinetu ortodontycznego (PL), group
// «seo-for-orthodontists». Market version for Polish orthodontic practices
// (gabinety ortodontyczne, specjaliści ortodoncji, gabinety stomatologiczne z
// działem ortodoncji), not a translation of seo-for-orthodontists.en.
// Semantic core: ref/medical-practices.md has no measured PL phrases; heading
// phrase from BRIEF.md: «pozycjonowanie gabinetu ortodontycznego» (H1, H2).
// Phrases patients use, by observation, in H2/H3 and the keyword section:
// aparat na zęby cena, aparat stały, aparat ruchomy NFZ, nakładki
// przezroczyste, ortodonta dla dorosłych, ortodonta + miasto.
// Intent: ref/intent-check-medical-practices.md — EN «seo for orthodontists»
// vs «dentist seo» 0 shared URLs → separate page from
// /pl/pozycjonowanie-strony-gabinetu-stomatologicznego (linked once).
// Polish angles: ortodonta = lekarz dentysta → informacja, nie reklama
// (general, «sprawdźcie w izbie lekarskiej»); tytuł specjalisty ortodoncji;
// NFZ only in a limited scope (general, «sprawdźcie aktualne zasady»); raty;
// ZnanyLekarz; RODO and a child’s image in before/after photos; referrals
// from general dentists; several locations.
// NOT on this page: building and designing the site
// (/pl/strona-internetowa-dla-ortodonty — sibling); general dental SEO
// (/pl/pozycjonowanie-strony-gabinetu-stomatologicznego); przychodnie
// (/pl/oferty/pozycjonowanie-strony-przychodni-warszawa).
// Owner’s rule: every SEO page covers AI search (GEO, AEO).
import { p, h2, h3, li, link, k } from "./pt";

export const seoForOrthodontistsPl = {
  lang: "pl",
  group: "seo-for-orthodontists",
  slug: "pozycjonowanie-gabinetu-ortodontycznego",
  title: "Pozycjonowanie gabinetu ortodontycznego",
  heading: "Pozycjonowanie gabinetu ortodontycznego",
  excerpt:
    "Zajmuję się pozycjonowaniem gabinetów ortodontycznych: podstrony dla rodziców dzieci i nastolatków, dla dorosłych rozważających nakładki, rzeczowe informacje o cenach i ratach, wizytówka Google każdej placówki i widoczność w AI — w granicach zasad, które obowiązują lekarzy dentystów.",
  seo: {
    metaTitle: "SEO dla ortodonty: aparaty, nakładki, raty | Bandziuk",
    metaDescription:
      "Pozycjonowanie gabinetu ortodontycznego: podstrony dla rodziców i dorosłych, ceny aparatów i nakładek, wizytówka Google każdej placówki, AI. Audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Rodzice, dorośli, skierowania", "Audyt od 1000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Ortodonta dla dziecka", "Aparat stały — cena", "Nakładki przezroczyste", "Raty i płatność"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO gabinetu ortodontycznego: strona i wizytówki Google placówek", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO dla ortodonty: podstrony dla rodziców i dorosłych, koszty leczenia, dane strukturalne", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie gabinetu ortodontycznego", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje pozycjonowanie gabinetu ortodontycznego",
      items: [
        { _key: k("o"), iconName: "search", title: "Frazy według wieku pacjenta i rodzaju aparatu", text: "Dziecko, nastolatek, dorosły — z danymi wyszukiwań" },
        { _key: k("o"), iconName: "layers", title: "Podstrony dla rodziców i dla dorosłych", text: "Aparaty ruchome i stałe, nakładki, retencja" },
        { _key: k("o"), iconName: "file-text", title: "Koszty leczenia opisane rzeczowo", text: "Widełki, co obejmują, raty, zakres NFZ" },
        { _key: k("o"), iconName: "shield-check", title: "Treści w granicach zasad dla dentystów", text: "Informacja bez obietnic i bez promocji" },
        { _key: k("o"), iconName: "map-pin", title: "Wizytówka i ZnanyLekarz dla każdej placówki", text: "Dni przyjęć, lekarze, zdjęcia, link do podstrony" },
        { _key: k("o"), iconName: "sparkles", title: "Widoczność w ChatGPT i przeglądach AI", text: "Fakty o gabinecie, które asystent może przytoczyć" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO: strona gabinetu ortodontycznego i wizytówki", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe pozycjonowanie gabinetu ortodontycznego", value: "od 3500 zł / mies.", note: "podstrony, placówki, opinie, AI", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: prywatny gabinet w Mediolanie i strony firm usługowych",
      subtitle:
        "Na początek Giuseppe, psychoterapeuta z Mediolanu: prywatna praktyka z trzema gabinetami, zawód z surowymi zasadami informowania o usługach i nowe podstrony, które już pojawiają się w odpowiedziach ChatGPT — to układ bardzo podobny do gabinetu ortodontycznego z kilkoma placówkami. Dalej projekty, w których wyszukiwarka była głównym zadaniem: lokalne SEO warsztatu w Warszawie, firma od skanowania laserowego 3D, której ruch z Google po przebudowie urósł 29 razy, i dwie strony wielojęzyczne.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "psychotherapist-website-milan",
        "auto-repair-seo-and-ux-boost",
        "architecture-website-rebuild-and-seo-scan",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "full-multilingual-website-development-and-seo-for-student-services",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena pozycjonowania gabinetu ortodontycznego",
      subtitle: "W ciągu jednego dnia roboczego napiszę, od czego zacząłbym na stronie i w wizytówkach Waszych placówek, i podam stałą cenę.",
      contextLabel: "Nazwa gabinetu lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Kto przeważa wśród Waszych pacjentów?", options: ["Dzieci i nastolatki", "Dorośli", "Mniej więcej po równo", "Głównie pacjenci z nakładkami"] },
        { _key: k("z"), question: "Skąd dziś trafiają nowi pacjenci?", options: ["Ze skierowań od stomatologów", "Z Google i Map Google", "Z ZnanyLekarz", "Z poleceń znajomych"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Pozycjonowanie gabinetu ortodontycznego to praca nad tym, żeby rodzic szukający aparatu dla dziecka, dorosły rozważający nakładki i pacjent wysłany przez swojego stomatologa trafili na Waszą stronę, a nie na listę w serwisie z rezerwacjami. Robię ją sam: dane wyszukiwań, podstrony, wizytówki placówek i poprawki w kodzie. Wynik liczę w zgłoszeniach na konsultację, a nie w pozycjach fraz."),

        h2("Na czym polega pozycjonowanie gabinetu ortodontycznego"),
        p("Ortodoncja to inny rynek niż stomatologia ogólna. Gabinet stomatologiczny żyje z wielu krótkich wizyt, gabinet ortodontyczny — z jednej decyzji o leczeniu, które trwa zwykle od roku do trzech lat. Ta decyzja zapada inaczej:"),
        li("szuka często ktoś inny niż pacjent: mama albo tata jedenastolatka, który właśnie usłyszał od dentysty, że „trzeba iść do ortodonty”"),
        li("rodzina porównuje kilka gabinetów, czyta o rodzajach aparatów i liczy koszty, zanim zadzwoni"),
        li("dorosły chce wiedzieć, czy leczenie będzie widać w pracy i ile wizyt go czeka"),
        p(
          "Dlatego podstrony, frazy i raporty planuję osobno dla ortodoncji. Gabinety stomatologii ogólnej znajdą swoją wersję na stronie ",
          link("pozycjonowanie strony gabinetu stomatologicznego", "/pl/pozycjonowanie-strony-gabinetu-stomatologicznego"),
          ".",
        ),

        h2("Pozycjonowanie gabinetu ortodontycznego a zakaz reklamy lekarzy dentystów"),
        p("Ortodonta jest lekarzem dentystą, więc jego strona podlega tym samym ograniczeniom co strona każdego dentysty: ma przekazywać rzeczową informację, a nie zachęcać jak reklama. W ortodoncji kłopot sprawiają zwłaszcza trzy rzeczy, które w innych branżach są codziennością:"),
        li("„darmowa konsultacja” albo „rabat na aparat do końca miesiąca” — to już promocja, a nie informacja o cenie"),
        li("obietnice w rodzaju „proste zęby w pół roku” albo „idealny uśmiech”"),
        li("metamorfozy z mediów społecznościowych przeniesione na stronę bez zgody i bez opisu leczenia"),
        p("Cennik, zakres usług, kwalifikacje lekarzy i opis przebiegu leczenia są w porządku i właśnie ich szuka Google. Granicę dokładnie wyznacza samorząd lekarski, dlatego przy wątpliwych sformułowaniach sprawdźcie aktualne stanowisko swojej okręgowej izby lekarskiej. Nie udzielam porad prawnych; piszę tak, żeby tekst dało się obronić jako informację."),

        h2("Frazy dla gabinetu ortodontycznego: aparat na zęby, nakładki, cena i miasto"),
        p("Samo „ortodonta” wpisują głównie osoby, które znają już nazwę gabinetu. Nowych pacjentów przynoszą frazy dokładniejsze:"),
        li("dzieci: „aparat na zęby dla dziecka”, „aparat ruchomy NFZ”, „kiedy pierwsza wizyta u ortodonty”"),
        li("nastolatki: „aparat stały kolorowe gumki”, „aparat czy nakładki dla nastolatka”"),
        li("dorośli: „ortodonta dla dorosłych”, „nakładki przezroczyste”, „aparat lingwalny”, „aparat estetyczny”"),
        li("koszty: „aparat stały cena”, „ile kosztuje aparat na zęby”, „nakładki cena Gdańsk”, „aparat na raty”"),
        li("po leczeniu: „retainer”, „płytka retencyjna”, „zęby przesuwają się po aparacie”"),
        p("Przed pisaniem sprawdzam, jak tych fraz szukają ludzie w Waszych miejscowościach, i każdą przypisuję jednej podstronie. Nagłówki używają słów pacjentów, a nazwa fachowa pojawia się w tekście raz."),

        h2("Podstrony dla rodziców: aparat ortodontyczny dla dziecka i nastolatka"),
        p("Rodzice czytają najdokładniej i zadają te same pytania: w jakim wieku przyjść, czy z leczeniem można poczekać, czym różni się aparat ruchomy od stałego, ile trwają wizyty kontrolne i czy da się je umówić po szkole. Każde z tych pytań zasługuje na odpowiedź na stronie gabinetu, a pytania o wiek i pierwszą wizytę — na osobną podstronę."),
        h3("Aparat ruchomy, aparat stały i leczenie dwuetapowe"),
        p("Rodzic nie zna słowa „dwuetapowe”, ale szuka „aparat ruchomy a potem stały”. Podstrona opisuje oba etapy prostym językiem, podaje, kto w gabinecie prowadzi leczenie dzieci, i wyjaśnia, co się dzieje, gdy na aparat jest za wcześnie i dziecko przychodzi tylko na kontrolę."),
        h3("Nastolatki i aparat stały"),
        p("Nastolatek też czyta: jedzenie z aparatem, sport, zdjęcia w szkole, nakładki jako alternatywa. Krótkie, rzeczowe odpowiedzi na te pytania zatrzymują go na stronie dłużej niż ogólny opis gabinetu."),

        h2("Ortodoncja dorosłych i nakładki przezroczyste na stronie gabinetu"),
        p("Dorośli często zaczynają od nazwy systemu nakładek, a potem porównują: nakładki czy aparat, jak bardzo widać, ile to trwa i ile kosztuje. Pomaga osobna podstrona leczenia dorosłych, osobna o nakładkach i krótkie zestawienie możliwości bez oceniania, co jest „lepsze”. Jeśli gabinet figuruje w wyszukiwarce lekarzy producenta nakładek, wpis powinien prowadzić do podstrony o nakładkach, a status lekarza opisujecie tylko tak, jak pozwala producent."),

        h2("Cena leczenia ortodontycznego, raty i NFZ na stronie gabinetu"),
        p("„Ile kosztuje aparat na zęby” to jedno z najczęstszych pytań w ortodoncji. Podanie ceny jest informacją, a nie reklamą, więc podstrona kosztów może i powinna istnieć:"),
        li("widełki dla każdego rodzaju leczenia i to, co obejmują: diagnostyka, aparat, wizyty kontrolne, retencja"),
        li("osobno cena konsultacji i diagnostyki, żeby nikt nie był zaskoczony przy pierwszej wizycie"),
        li("płatność w ratach — przez gabinet albo firmę finansującą — opisana warunkami, nie hasłem"),
        li("zakres NFZ: refundacja leczenia ortodontycznego jest ograniczona, głównie do aparatów ruchomych u młodszych dzieci; sprawdźcie aktualne zasady i napiszcie, czy macie umowę"),
        p("Rodzice dzwonią rzadziej z pytaniem „a ile to mniej więcej kosztuje”, a do gabinetu przychodzą osoby, które znają rząd wielkości."),

        h2("Specjalista ortodoncji jako autor treści i zdjęcia przed i po leczeniu"),
        p("Treści o zdrowiu Google sprawdza z większą podejrzliwością niż poradniki o czymkolwiek innym. W ortodoncji ważne jest dodatkowo, kto prowadzi leczenie: tytuł specjalisty ortodoncji to konkretna specjalizacja, a nie każdy dentysta zakładający aparaty ją ma. Profil lekarza podaje dokładnie: dyplom, specjalizację albo jej brak, numer prawa wykonywania zawodu, kursy i towarzystwa naukowe. Każda podstrona leczenia ma nazwisko lekarza, który ją sprawdził, i datę."),
        p("Zdjęcia przed i po leczeniu bywają oceniane jako reklama, więc zanim je opublikujecie, sprawdźcie stanowisko izby. Jeśli zostają, to tylko z pisemną zgodą — u dziecka zgodę na wykorzystanie wizerunku podpisuje rodzic — w tych samych ujęciach i świetle, bez retuszu, z opisem rodzaju leczenia. Zdjęcie zębów z twarzą dziecka to dane, które RODO każe traktować ostrożnie."),

        h2("Pacjenci kierowani przez stomatologów: podstrona dla gabinetów współpracujących"),
        p("Wielu pacjentów ortodonty przychodzi od dentysty ogólnego. Rodzic wychodzi z kartką z nazwiskiem i wieczorem wpisuje je w Google; dentysta sprawdza Waszą stronę, zanim zacznie do Was kierować. Pomagają dwie krótkie podstrony: dla pacjenta z polecenia (co zabrać, jak wygląda pierwsza wizyta, jak przekazujecie informację jego dentyście) i dla gabinetów współpracujących (jak przesłać zdjęcia RTG, kontakt do lekarza). Dokumentacja medyczna nie powinna krążyć przez zwykły formularz kontaktowy; do jej przesyłania służy bezpieczny kanał z umową powierzenia danych."),

        h2("Wizytówka Google, ZnanyLekarz i opinie dla każdej placówki gabinetu ortodontycznego"),
        p("Gabinety ortodontyczne często przyjmują w dwóch–trzech miejscach, a w niektórych tylko w wybrane dni. Każda placówka potrzebuje własnej wizytówki z kategorią „Ortodonta”, prawdziwymi godzinami tych dni, zdjęciami i linkiem do swojej podstrony. Ten sam porządek obowiązuje w ZnanyLekarz, gdzie wielu rodziców umawia pierwszą wizytę."),
        p(
          "Opinie piszą często rodzice. Prośba o opinię najlepiej działa w naturalnym momencie — przy zdjęciu aparatu albo założeniu retainera — i trafia do wszystkich, nie tylko do zadowolonych. Konkursy z nagrodą za opinię łamią zasady Google. W odpowiedzi nie potwierdzacie, że autor jest pacjentem, i nie piszecie nic o leczeniu. Więcej o pracy z mapami na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Pozycjonowanie gabinetu ortodontycznego w ChatGPT i Google AI Overviews (GEO, AEO)"),
        p("Rodzice pytają ChatGPT, w jakim wieku iść z dzieckiem do ortodonty, a zaraz potem, który gabinet w ich mieście ma raty albo przyjmuje w soboty. Odpowiedź powstaje z porównania kilku źródeł naraz: Waszej strony, wizytówek i ZnanyLekarz. Starania o miejsce w takich odpowiedziach nazywa się GEO albo AEO. Dla gabinetu ortodontycznego to:"),
        li("rodzaje leczenia, wiek pacjentów, placówki, dni przyjęć i formy płatności zapisane prostymi zdaniami"),
        li("widełki cen z opisem, co obejmują"),
        li("dane strukturalne łączące lekarzy z placówkami"),
        li("identyczne dane na stronie, w wizytówkach i w ZnanyLekarz"),
        p(
          "Giuseppe, psychoterapeuta przyjmujący w Mediolanie, Monzy, Cernusco sul Naviglio i online, trafił do mnie przez ChatGPT. Jego nowa strona opisuje każdy gabinet, rodzaj terapii i problem jako fakty z danymi strukturalnymi, a podstrony dodane po starcie już pojawiają się w odpowiedziach ChatGPT. Szczegóły na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Ile kosztuje pozycjonowanie gabinetu ortodontycznego"),
        li("Audyt strony i wizytówek wszystkich placówek: od 1000 zł, jednorazowo, z listą zmian ułożoną według wpływu."),
        li("Pojedyncze zadania — podstrony dla rodziców i dorosłych, koszty leczenia, podstrona dla stomatologów, dane strukturalne: od 1000 do 3000 zł."),
        li("Stałe pozycjonowanie gabinetu ortodontycznego — nowe podstrony, placówki, opinie, widoczność w AI i raport w zgłoszeniach: od 3500 zł miesięcznie, w największych miastach z silną konkurencją od 5500 zł."),
        p(
          "Jeśli strona wymaga przebudowy, opisuję to na stronie ",
          link("strona internetowa dla ortodonty", "/pl/strona-internetowa-dla-ortodonty"),
          ". Strategię SEO dla każdej strony opisuję w ofercie ",
          link("strategia i optymalizacja SEO", "/pl/oferty/strategia-i-optymalizacja-seo"),
          ", przychodnie znajdą swoją wersję na stronie ",
          link("pozycjonowanie strony przychodni", "/pl/oferty/pozycjonowanie-strony-przychodni-warszawa"),
          ", a pełne widełki są w ",
          link("cenniku", "/pl/cennik"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie gabinetu ortodontycznego: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje pozycjonowanie gabinetu ortodontycznego?", "Za audyt zapłacicie od 1000 zł. Pojedyncze zadanie to od 1000 do 3000 zł. Comiesięczna praca zaczyna się od 3500 zł, a tam, gdzie gabinetów ortodontycznych jest bardzo dużo, od 5500 zł. Kwotę podaję jedną i stałą, gdy znam placówki i rodzaje leczenia."],
          ["Czy gabinet ortodontyczny może napisać o bezpłatnej konsultacji?", "Informacja o cenie konsultacji, także zerowej, to co innego niż hasło promocyjne. Bezpieczniej podać ją w cenniku obok innych pozycji niż w banerze. Ostateczną ocenę daje izba lekarska, więc wątpliwe sformułowania warto z nią skonsultować."],
          ["Czy warto podawać ceny aparatów na stronie?", "Tak. Cena to informacja, której pacjenci szukają najczęściej. Widełki z opisem, co obejmują, przyciągają osoby gotowe na leczenie i zmniejszają liczbę telefonów z pytaniem o koszt."],
          ["Czym różni się pozycjonowanie ortodonty od pozycjonowania dentysty?", "Innym pacjentem i inną decyzją. W ortodoncji szukają rodzice dzieci, dorośli porównujący nakładki z aparatem i pacjenci z polecenia stomatologa, a leczenie trwa latami. Dlatego frazy, podstrony i raport wyglądają inaczej."],
          ["Czy wystarczy profil w ZnanyLekarz?", "Profil przynosi umówienia, ale wyświetla się w towarzystwie innych ortodontów z okolicy. Na własnej stronie nazwisko lekarza wygrywa w Google, leczenie można opisać dokładnie, a asystenci AI mają z czego czerpać. Warto mieć oba, z identycznymi danymi."],
          ["Kiedy widać efekty pozycjonowania gabinetu ortodontycznego?", "Poprawione wizytówki potrafią przesunąć się w kilka tygodni. Nowe podstrony o aparatach i nakładkach potrzebują kilku miesięcy, a rodziny podejmują decyzję jeszcze przez kilka tygodni, dlatego zgłoszenia oceniam w perspektywie około pół roku."],
          ["Czy pracujesz z gabinetami spoza Warszawy?", "Tak, z całej Polski — pracuję zdalnie, a strona, wizytówki i dane wyszukiwań dla Waszego miasta nie wymagają mojej obecności. Gabinety z Warszawy i okolic mogę też odwiedzić na miejscu."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie gabinetu ortodontycznego: co mi wysłać"),
        p(
          "Napiszcie nazwę gabinetu, adres strony, linki do wizytówek i profili w ZnanyLekarz każdej placówki, mniej więcej jaki odsetek pacjentów to dzieci, a jaki dorośli, i przy jakim leczeniu chcecie więcej zgłoszeń. Odeślę trzy pierwsze zmiany, od których bym zaczął, i stałą cenę. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
