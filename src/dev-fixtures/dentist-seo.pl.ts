// Landing page fixture: Pozycjonowanie strony gabinetu stomatologicznego (PL),
// group «dentist-seo». Market version for Poland as a whole, not a translation
// of dentist-seo.en. The Warsaw query stays with
// /pl/oferty/pozycjonowanie-strony-gabinetu-stomatologicznego-warszawa (linked).
// Semantic core: ref/dental-medical.md / dental-medical.csv (PL): «marketing
// gabinetu stomatologicznego» 50 (H2: where SEO fits in marketing a dental
// practice), «marketing gabinetu stomatologicznego pdf» 10 (not targeted).
// «pozycjonowanie strony gabinetu stomatologicznego» — volume under the
// source’s floor; SERP = Polish SEO agencies (owner demand).
// PAA: Jak reklamować gabinet stomatologiczny? Jak pozyskać pacjentów do
// gabinetu stomatologicznego? Jak pozyskać nowych pacjentów? (FAQ).
// Not targeted: Ile kosztuje założenie / wyposażenie gabinetu, wymogi Sanepidu
// (founders’ questions, not SEO).
// Intent: ref/intent-check-dental-medical.md — «pozycjonowanie strony gabinetu
// stomatologicznego» vs «… warszawa» 0 shared URLs → this is the all-Poland
// page; «strona dla lekarza» vs «strona dla gabinetu stomatologicznego» 0
// shared.
// NOT on this page: Warsaw specifics
// (/pl/oferty/pozycjonowanie-strony-gabinetu-stomatologicznego-warszawa);
// building the site (/pl/strona-dla-gabinetu-stomatologicznego); German
// patients (/pl/oferty/pozycjonowanie-kliniki-na-pacjentow-z-niemiec).
// Key angle: information, not advertising (doctors and dentists in Poland may
// inform, not advertise). Owner’s rule: every SEO page covers AI search.
import { p, h2, h3, li, link, k } from "./pt";

export const dentistSeoPl = {
  lang: "pl",
  group: "dentist-seo",
  slug: "pozycjonowanie-strony-gabinetu-stomatologicznego",
  title: "Pozycjonowanie strony gabinetu stomatologicznego",
  heading: "Pozycjonowanie strony gabinetu stomatologicznego",
  excerpt:
    "Zajmuję się pozycjonowaniem stron gabinetów stomatologicznych: rzeczowe podstrony zabiegów, NFZ i leczenia prywatnego, wizytówka Google i widoczność w AI — informacja, nie reklama, tak żeby pacjenci z okolicy znajdowali Wasz gabinet.",
  seo: {
    metaTitle: "Pozycjonowanie gabinetu stomatologicznego | Bandziuk",
    metaDescription:
      "Pozycjonowanie strony gabinetu stomatologicznego zgodne z zakazem reklamy: podstrony zabiegów, NFZ, wizytówka Google, RODO i widoczność w AI. Audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Informacja, nie reklama", "Audyt od 1000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Stomatolog w Twoim mieście", "Rejestracja online", "NFZ i prywatnie", "Lekarze i kwalifikacje"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO gabinetu stomatologicznego: strona i wizytówka Google", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO dla gabinetu stomatologicznego: podstrony zabiegów, NFZ, dane strukturalne", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie strony gabinetu stomatologicznego", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje pozycjonowanie strony gabinetu stomatologicznego",
      items: [
        { _key: k("o"), iconName: "shield-check", title: "Treści w granicach informacji o usługach", text: "Bez obietnic efektów i bez „najlepszego dentysty”" },
        { _key: k("o"), iconName: "layers", title: "Podstrona dla każdego zabiegu", text: "Implanty, kanałowe, ortodoncja, protetyka, dzieci" },
        { _key: k("o"), iconName: "file-text", title: "NFZ i leczenie prywatne osobno", text: "Co w ramach umowy, co odpłatnie, jak się zapisać" },
        { _key: k("o"), iconName: "map-pin", title: "Wizytówka Google i ZnanyLekarz", text: "Te same dane, godziny i lekarze wszędzie" },
        { _key: k("o"), iconName: "sparkles", title: "Widoczność w odpowiedziach AI", text: "ChatGPT, Perplexity i podsumowania AI w Google" },
        { _key: k("o"), iconName: "trending-up", title: "Raport w rejestracjach", text: "Telefony i wizyty z wyszukiwarki, nie tylko pozycje" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO: strona gabinetu i wizytówka Google", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe pozycjonowanie gabinetu stomatologicznego", value: "od 3500 zł / mies.", note: "podstrony, mapy, AI, raporty", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: strony lokalnych firm usługowych, które optymalizowałem",
      subtitle:
        "Żadna z tych stron nie należy do gabinetu stomatologicznego. To najbliższa praca, jaką mam: lokalne firmy usługowe, do których klienci trafiają z wyszukiwarki i map, oraz wielojęzyczny serwis, w którym te same metody dały mierzalny ruch.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
        "renovation-and-investment-website-with-premium-design",
        "full-multilingual-website-development-and-seo-for-student-services",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena pozycjonowania strony gabinetu stomatologicznego",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: co poprawiłbym najpierw na stronie gabinetu i w wizytówce Google, i za jaką stałą cenę.",
      contextLabel: "Nazwa gabinetu lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Skąd teraz przychodzą nowi pacjenci?", options: ["Z ZnanyLekarz", "Z Google i Map Google", "Z poleceń", "Nie wiem"] },
        { _key: k("z"), question: "Jak przyjmujecie pacjentów?", options: ["Tylko prywatnie", "NFZ i prywatnie", "Głównie NFZ", "Kilka placówek"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Pozycjonowanie strony gabinetu stomatologicznego robię sam — od danych wyszukiwań, przez podstrony zabiegów, po wizytówkę Google — więc osoba, która przygotowuje audyt, jest tą samą, która potem wprowadza poprawki. W stomatologii pozycjonowanie ma jeszcze jedną zaletę: strona z rzeczowymi informacjami to kanał, który mieści się w zasadach obowiązujących lekarzy dentystów w Polsce."),

        h2("Na czym polega pozycjonowanie strony gabinetu stomatologicznego"),
        p("Pacjent szuka gabinetu na trzy sposoby i każdy wymaga innej pracy:"),
        li("pilnie — „ból zęba weekend”, „stomatolog dyżur”, „złamany ząb” — i dzwoni do jednego z pierwszych gabinetów w mapach"),
        li("planując leczenie — „implanty cena”, „leczenie kanałowe pod mikroskopem”, „aparat na zęby dla dziecka” — porównuje kilka gabinetów i czyta"),
        li("po nazwie, z polecenia albo po wizycie na ZnanyLekarz, i wtedy własna strona powinna być pierwsza, z aktualnymi godzinami i rejestracją"),
        p("Pilne wyszukiwania rozstrzyga w dużej mierze wizytówka Google, planowane leczenie — strona gabinetu, a odpowiedzi AI korzystają z obu źródeł. Gabinet, który przyjmuje pacjentów z bólem w dniu zgłoszenia, potrzebuje osobnej podstrony z godzinami i telefonem w formie przycisku; jeśli nie przyjmuje, lepiej napisać to wprost i wskazać, gdzie szukać pomocy."),

        h2("Informacja, nie reklama: pozycjonowanie gabinetu stomatologicznego a zakaz reklamy lekarzy dentystów"),
        p("Ustawa o zawodach lekarza i lekarza dentysty oraz Kodeks Etyki Lekarskiej pozwalają lekarzom dentystom informować o swoich usługach, ale nie reklamować ich. Podobna zasada obejmuje placówki medyczne. W praktyce strona gabinetu może podawać fakty: zakres usług, kwalifikacje lekarzy, sprzęt, godziny, adres, sposób zapisu i warunki leczenia. Nie powinna obiecywać efektów, porównywać się z innymi gabinetami ani używać określeń typu „najlepszy dentysta w mieście”."),
        p("Dla pozycjonowania to dobra wiadomość. Google i asystenci AI szukają właśnie rzeczowych odpowiedzi: co obejmuje zabieg, ile trwa, kto go wykonuje, ile kosztuje. Piszę podstrony tak, żeby były informacją, a nie zachętą. Nie udzielam porad prawnych; w razie wątpliwości ostatnie słowo należy do samorządu lekarskiego albo Waszego prawnika."),

        h2("Frazy kluczowe dla gabinetu stomatologicznego: zabieg, problem i miasto"),
        p("Pacjenci rzadko wpisują samo „stomatolog”. Łączą zabieg albo problem z miejscowością:"),
        li("zabieg i miasto: „implanty Kraków”, „ortodonta Gdańsk”, „licówki Poznań”"),
        li("sposób leczenia: „leczenie kanałowe pod mikroskopem”, „ekstrakcja ósemki w znieczuleniu”"),
        li("finansowanie: „dentysta na NFZ Wrocław”, „implanty na raty”"),
        li("pacjent: „dentysta dla dzieci”, „stomatolog dla osób z lękiem”"),
        p("Przed pisaniem sprawdzam prawdziwe dane wyszukiwań dla Waszych zabiegów i miejscowości. Każda fraza dostaje jedną podstronę; dwie podstrony walczące o „implanty” zwykle oznaczają, że żadna nie jest wysoko."),

        h2("Podstrony zabiegów na stronie gabinetu stomatologicznego: implanty, leczenie kanałowe, ortodoncja"),
        p("Zabiegi, które pacjent planuje tygodniami, potrzebują osobnych podstron z odpowiedziami na pytania zadawane przed konsultacją."),
        h3("Implanty i protetyka"),
        p("Liczba wizyt, czas gojenia podany ogólnie, rodzaje uzupełnień, widełki cen i możliwość płatności w ratach. Pacjent chce wiedzieć, który lekarz wykonuje zabieg, więc podstrona go wymienia."),
        h3("Leczenie kanałowe pod mikroskopem"),
        p("Fraza, którą pacjenci wpisują dosłownie. Podstrona wyjaśnia, jak wygląda wizyta, ile może trwać i od czego zależy cena — bez zapewnień o „uratowaniu każdego zęba”."),
        h3("Ortodoncja i stomatologia dziecięca"),
        p("Rodzice szukają informacji o pierwszej wizycie dziecka, aparatach stałych i ruchomych, nakładkach i o tym, czy leczenie dzieci jest na NFZ. To osobne podstrony, nie akapit na stronie głównej."),

        h2("Leczenie na NFZ i prywatnie: osobne podstrony na stronie gabinetu stomatologicznego"),
        p("Gabinet z umową z NFZ ma dwie grupy pacjentów, które szukają inaczej. Osoba wpisująca „dentysta NFZ” chce wiedzieć, czy przyjmujecie nowych pacjentów, jak się zapisać, jakie dokumenty zabrać i jak długo się czeka. Osoba szukająca leczenia prywatnego porównuje zakres i ceny. Jedna podstrona dla obu grup myli wszystkich. Lepiej opisać osobno, co wykonujecie w ramach umowy, a co odpłatnie, i podlinkować z obu podstron rejestrację."),

        h2("Profil w ZnanyLekarz a własna strona gabinetu stomatologicznego w Google"),
        p("ZnanyLekarz jest wysoko w wynikach dla wielu fraz „stomatolog + miasto” i dla wielu gabinetów przynosi rejestracje. Ma jednak swoje ograniczenia: na listach obok Was stoją inni lekarze z okolicy, układ i zasady ustala portal, a opis gabinetu jest krótki. Profil warto prowadzić starannie — aktualne usługi, zdjęcia, odpowiedzi na opinie — i jednocześnie budować własną stronę, która wygrywa wyszukiwania nazwy gabinetu i pełniej odpowiada na pytania o zabiegi. Dane w obu miejscach i w wizytówce Google muszą być takie same."),

        h2("Wizytówka Google gabinetu stomatologicznego i opinie pacjentów"),
        p("Przy wyszukiwaniach „dentysta w pobliżu” decyduje blok map. Liczą się właściwa kategoria główna, godziny przyjęć z dyżurami, zdjęcia gabinetu i zespołu, usługi z krótkimi opisami i link do pasującej podstrony. Opinie zbieram w wizytówce Google i w ZnanyLekarz, gdzie są niezależne. Cytowanie pochwał pacjentów na własnej stronie bywa oceniane jako reklama, więc tego nie robię. Kupowanie opinii i proszenie wyłącznie zadowolonych pacjentów łamie zasady Google."),

        h2("Lekarz dentysta jako autor treści: wiarygodność strony gabinetu w Google (YMYL)"),
        p("Google traktuje treści o zdrowiu surowiej niż większość tematów. Każda podstrona zabiegu podaje lekarza, który ją napisał albo sprawdził, z odnośnikiem do jego profilu: dyplom, specjalizacja, numer prawa wykonywania zawodu, kursy. Podstrony medyczne mają datę ostatniej weryfikacji. Ja przygotowuję strukturę i tekst, a lekarz z gabinetu sprawdza treść kliniczną przed publikacją. Strona nie udziela porad i nie stawia diagnoz; pacjenta z objawami kieruje na wizytę."),

        h2("Formularze, rejestracja online i RODO na stronie gabinetu stomatologicznego"),
        p("Dane o zdrowiu to w RODO szczególna kategoria danych. Formularz kontaktowy nie powinien pytać o objawy ani przebieg leczenia, jeśli nie jest to potrzebne — imię, telefon i preferowany termin zwykle wystarczą. Do tego klauzula informacyjna, połączenie HTTPS i umowa powierzenia z dostawcą formularza. Rejestracja online z ZnanyLekarz albo z systemu do prowadzenia gabinetu, na przykład Medesk, powinna ładować się tak, żeby nie spowalniać strony na telefonie. To ogólne wskazówki, nie opinia prawna."),
        p(
          "Jeśli stronę trzeba zbudować od nowa, opisuję to na stronie ",
          link("strona dla gabinetu stomatologicznego", "/pl/strona-dla-gabinetu-stomatologicznego"),
          ". Gabinety, które przyjmują pacjentów z Niemiec, znajdą szczegóły na stronie ",
          link("pozycjonowanie kliniki na pacjentów z Niemiec", "/pl/oferty/pozycjonowanie-kliniki-na-pacjentow-z-niemiec"),
          ".",
        ),

        h2("Pozycjonowanie gabinetu stomatologicznego w AI: widoczność w ChatGPT i Google AI Overviews (GEO, AEO)"),
        p("Coraz więcej pacjentów pyta ChatGPT, Perplexity albo podsumowania AI w Google, gdzie w ich mieście zrobić implant albo leczenie kanałowe pod mikroskopem. Pracę nad tym, żeby gabinet trafiał do takich odpowiedzi, nazywa się GEO (generative engine optimization) albo AEO (answer engine optimization). Asystent nie poleci gabinetu, o którym nie znajdzie rzeczowych informacji. Dla gabinetu oznacza to:"),
        li("zabiegi, lekarzy, kwalifikacje, języki, godziny i informację o NFZ zapisane prostymi faktami"),
        li("widełki cen i formy płatności w tekście, który asystent może zacytować"),
        li("dane strukturalne oznaczające gabinet stomatologiczny, jego lekarzy i placówki"),
        li("te same dane na stronie, w wizytówce Google i w ZnanyLekarz"),
        p(
          "Przed pracą i po niej sprawdzam, jak asystenci opisują Wasz gabinet. Więcej na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Gdzie pozycjonowanie pasuje w marketingu gabinetu stomatologicznego"),
        p("Marketing gabinetu stomatologicznego w agencji to zwykle pakiet: kampanie, media społecznościowe, przypomnienia o wizytach kontrolnych, czasem obsługa rejestracji. Zakaz reklamy dotyczy każdego z tych kanałów, nie tylko strony. Ja robię część SEO i, jeśli trzeba, stronę. Nie prowadzę kampanii ani mediów społecznościowych. Pozycjonowanie jest wolniejsze niż kampania, ale opiera się na informacji, którą pacjent sam wyszukuje, i działa dalej bez opłat za kliknięcie."),
        p("Jak więc pozyskać pacjentów do gabinetu stomatologicznego w granicach tych zasad? Pacjent, który wpisuje „implanty Lublin”, sam zgłasza potrzebę, a strona tylko odpowiada na jego pytanie. Dlatego w stomatologii pozycjonowanie bywa głównym kanałem pozyskiwania nowych pacjentów, a pozostały marketing dba o tych, którzy już się leczą: przypomnienia o kontroli i higienizacji, sprawna recepcja, odpowiedzi na opinie."),

        h2("Ile kosztuje pozycjonowanie strony gabinetu stomatologicznego"),
        li("Audyt SEO strony i wizytówki Google: od 1000 zł, jednorazowo, z listą poprawek według wpływu na wynik."),
        li("Jednorazowe prace — podstrony zabiegów, NFZ i leczenia prywatnego, dane strukturalne, poprawki techniczne: od 1000 do 3000 zł."),
        li("Stałe pozycjonowanie strony gabinetu stomatologicznego — nowe podstrony, mapy, widoczność w AI i raporty: od 3500 zł miesięcznie, w bardzo konkurencyjnych miastach od 5500 zł miesięcznie."),
        p(
          "Pełne widełki są w ",
          link("cenniku", "/pl/cennik"),
          ". Gabinety z Warszawy znajdą szczegóły na stronie ",
          link("pozycjonowanie strony gabinetu stomatologicznego w Warszawie", "/pl/oferty/pozycjonowanie-strony-gabinetu-stomatologicznego-warszawa"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie strony gabinetu stomatologicznego: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Jak reklamować gabinet stomatologiczny?", "Lekarze dentyści w Polsce mogą informować o swoich usługach, a nie je reklamować. Dlatego najbezpieczniejsze kanały to rzeczowa strona gabinetu, wizytówka Google i profil w ZnanyLekarz: zakres usług, lekarze, godziny, ceny i sposób zapisu, bez obietnic efektów i porównań z innymi."],
          ["Jak pozyskać pacjentów do gabinetu stomatologicznego?", "Być widocznym tam, gdzie pacjenci szukają: w mapach Google, w zwykłych wynikach dla „zabieg + miasto” i w ZnanyLekarz. Do tego podstrony zabiegów z odpowiedziami na pytania pacjentów, prosta rejestracja i szybkie oddzwanianie."],
          ["Jak pozyskać nowych pacjentów?", "Nowi pacjenci najczęściej sprawdzają gabinet w internecie, nawet jeśli przyszli z polecenia: szukają nazwy, czytają opinie i podstrony zabiegów. Kompletna wizytówka, aktualna strona i odpowiedzi na opinie sprawiają, że polecenie kończy się wizytą."],
          ["Ile kosztuje pozycjonowanie strony gabinetu stomatologicznego?", "Audyt strony i wizytówki od 1000 zł jednorazowo, pojedyncze prace od 1000 do 3000 zł, stałe pozycjonowanie od 3500 zł miesięcznie, w bardzo konkurencyjnych miastach od 5500 zł. Stałą cenę podaję po krótkim opisie gabinetu."],
          ["Czy wystarczy profil w ZnanyLekarz?", "Dla wielu gabinetów to ważne źródło rejestracji, ale profil stoi obok innych lekarzy i zależy od zasad portalu. Własna strona wygrywa wyszukiwania nazwy gabinetu, opisuje zabiegi pełniej i jest źródłem dla odpowiedzi AI. Najlepiej prowadzić jedno i drugie."],
          ["Ile trwa pozycjonowanie gabinetu stomatologicznego?", "Poprawki w wizytówce Google potrafią zadziałać w kilka tygodni. Nowe podstrony zabiegów zwykle potrzebują dwóch–czterech miesięcy, w dużych miastach dłużej."],
          ["Czy pracujesz z gabinetami spoza Warszawy?", "Tak, z całej Polski. Pozycjonowanie robię zdalnie: strona, wizytówka i dane wyszukiwań dla Waszej miejscowości."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie strony gabinetu stomatologicznego: co mi wysłać"),
        p(
          "Wyślijcie nazwę gabinetu, link do strony, do wizytówki w Mapach Google i do profilu w ZnanyLekarz, zabiegi, przy których chcecie więcej pacjentów, informację, czy przyjmujecie na NFZ, i miejscowość. Odpowiem, co poprawiłbym najpierw i za jaką stałą cenę. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
