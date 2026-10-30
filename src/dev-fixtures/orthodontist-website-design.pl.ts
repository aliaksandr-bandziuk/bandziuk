// Landing page fixture: Strona internetowa dla ortodonty (PL), group
// «orthodontist-website-design». Market version for Polish orthodontic
// practices, not a translation of orthodontist-website-design.en. In PL this
// is a development page that includes design.
// Semantic core: ref/medical-practices.md has no measured PL phrases; heading
// phrase from BRIEF.md: «strona internetowa dla ortodonty» (H1, H2); metaTitle
// uses «strona www gabinetu ortodontycznego».
// Intent: ref/intent-check-medical-practices.md — EN «orthodontist website
// design» vs «dental website design» 1 shared URL → separate page from
// /pl/strona-dla-gabinetu-stomatologicznego (linked once).
// Polish angles: two audiences (rodzice dzieci i nastolatków, dorośli i
// nakładki); informacja, nie reklama — design that keeps promotions off the
// page (general, «sprawdźcie w izbie lekarskiej»); galeria z zgodą rodzica,
// wizerunek dziecka, RODO; cennik z ratami i zakresem NFZ (general);
// rejestracja online / ZnanyLekarz; kilka placówek; zakładka dla stomatologów;
// strefa pacjenta w trakcie leczenia; szablon vs projekt; migration.
// NOT on this page: SEO, frazy, wizytówki i opinie
// (/pl/pozycjonowanie-strony-gabinetu-ortodontycznego — sibling); general dental
// site (/pl/strona-dla-gabinetu-stomatologicznego); doctors in general
// (/pl/strona-internetowa-dla-lekarza).
// Owner’s rules: AI-readable site H2; Giuseppe as the main case; NDA medical
// system mentioned once.
import { p, h2, li, ol, link, k } from "./pt";

export const orthodontistWebsiteDesignPl = {
  lang: "pl",
  group: "orthodontist-website-design",
  slug: "strona-internetowa-dla-ortodonty",
  title: "Strona internetowa dla ortodonty",
  heading: "Strona internetowa dla ortodonty",
  excerpt:
    "Projektuję i buduję strony internetowe dla ortodontów: osobne wejścia dla rodziców i dla dorosłych, opis leczenia aparatem i nakładkami, galeria ze zgodami, czytelny cennik z ratami, mapa placówek i rejestracja na konsultację — bez treści, które wyglądają jak reklama.",
  seo: {
    metaTitle: "Strona www gabinetu ortodontycznego | Bandziuk",
    metaDescription:
      "Strona internetowa dla ortodonty: ścieżki dla rodziców i dorosłych, aparaty i nakładki, galeria ze zgodą, cennik z ratami, mapa placówek, RODO. Od 3000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt + wykonanie, jedna cena", "Od 3000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Umów konsultację", "Aparat czy nakładki?", "Cennik i raty", "Nasze gabinety"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona gabinetu ortodontycznego, projekt w cenie", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Strona dla ortodonty ze ścieżkami dla rodziców i dorosłych, galerią, cennikiem, podstronami placówek i zakładką dla stomatologów, projekt w cenie", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co dostajesz ze stroną internetową dla ortodonty",
      items: [
        { _key: k("o"), iconName: "layers", title: "Dwa wejścia: dla rodziców i dla dorosłych", text: "Dziecko i nastolatek osobno, nakładki osobno" },
        { _key: k("o"), iconName: "image", title: "Galeria leczenia ze zgodami", text: "Te same ujęcia, bez retuszu, opis leczenia" },
        { _key: k("o"), iconName: "file-text", title: "Cennik w kartach, nie w PDF", text: "Widełki, co obejmują, raty, informacja o NFZ" },
        { _key: k("o"), iconName: "map-pin", title: "Mapa i podstrona każdej placówki", text: "Dni przyjęć, lekarze, dojazd, wejście" },
        { _key: k("o"), iconName: "shield-check", title: "Formularze bez danych o zdrowiu", text: "Zdjęcia i dokumentacja tylko bezpiecznym kanałem" },
        { _key: k("o"), iconName: "sparkles", title: "Czytelna dla Google i asystentów AI", text: "Leczenie, placówki i wiek pacjentów tekstem" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona gabinetu ortodontycznego", value: "3000–6000 zł", note: "projekt w cenie" },
        { _key: k("r"), label: "Rodzice, dorośli, galeria, placówki, stomatolodzy", value: "od 8500 zł", note: "projekt w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: najpierw prywatny gabinet z Mediolanu, potem cztery inne realizacje",
      subtitle:
        "Giuseppe, psychoterapeuta z Mediolanu, to prywatna praktyka medyczna z trzema gabinetami na jednej mapie, spokojnym projektem dla osób w stresie i 468 starymi wpisami przeniesionymi bez utraty adresów. Pozostałe strony pokazują elementy, których potrzebuje strona ortodonty: katalog z filtrami i mapą, projekt oparty na zdjęciach, przebudowę z zachowaniem wyglądu i wiele wersji językowych.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "psychotherapist-website-milan",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "renovation-and-investment-website-with-premium-design",
        "architecture-website-rebuild-and-seo-scan",
        "full-multilingual-website-development-and-seo-for-student-services",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej dla ortodonty",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: co powinien mówić pierwszy ekran rodzicom i dorosłym, lista podstron i stała cena.",
      contextLabel: "Nazwa gabinetu lub obecna strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Ile macie placówek?", options: ["Jedną", "Dwie lub trzy", "Cztery i więcej"] },
        { _key: k("z"), question: "Czego potrzebujecie?", options: ["Nowej strony od zera", "Przebudowy obecnej strony", "Wyjścia z gotowego abonamentu", "Jeszcze nie wiem"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Strona internetowa dla ortodonty to w moim wykonaniu projekt i kod od jednej osoby: układam strukturę, projektuję ekrany, programuję i uruchamiam stronę, więc nie ma przekazywania pracy między grafikiem a programistą. Taka strona ma dwóch bardzo różnych gości — rodzica, który decyduje o aparacie dla dziecka, i dorosłego, który chce prostych zębów bez zwracania uwagi w pracy — i obu ma doprowadzić do zapisu na konsultację."),

        h2("Strona internetowa dla ortodonty: pierwszy ekran dla rodziców i dla dorosłych"),
        p("Na stronie głównej każdy z nich dostaje swoje wejście: „Leczenie dzieci i nastolatków” oraz „Nakładki i dyskretne aparaty dla dorosłych”. Pod oboma jeden przycisk zapisu i numer telefonu. Niżej, po jednej linijce: nazwisko lekarza i specjalizacja, adresy placówek, informacja o ratach. Zamiast przesuwającego się slajdera z uśmiechniętymi modelami — zdjęcie Waszego gabinetu i zespołu w dziennym świetle."),

        h2("Strona ortodonty jako informacja: projekt zgodny z zasadami dla lekarzy dentystów"),
        p("Informacja o świadczeniach ortodonty nie może mieć cech reklamy, a to wpływa na sam projekt, nie tylko na teksty. Na stronie nie ma banerów z odliczaniem do końca promocji, wyskakujących okienek z „rabatem na start” ani przycisków w stylu „odbierz darmową konsultację”. Jest spokojny układ, w którym fakty — zakres leczenia, ceny, kwalifikacje, terminy — są łatwe do znalezienia."),
        p("Giuseppe, psychoterapeutę z Mediolanu, wiążą włoskie zasady reklamy usług medycznych. Jego panel redakcyjny ostrzega, gdy w szkicu pojawia się obietnica efektu, wypowiedź pacjenta, zniżka albo „darmowa konsultacja”. Podobne ostrzeżenie można ustawić dla sformułowań, których unika gabinet ortodontyczny; listę warto uzgodnić z prawnikiem albo sprawdzić w izbie lekarskiej."),

        h2("Ścieżka leczenia dziecka na stronie ortodonty: od pierwszej wizyty do retencji"),
        p("Leczenie dziecka łatwiej zrozumieć jako oś czasu niż jako tekst: pierwsza wizyta, obserwacja, jeśli jest za wcześnie, aparat ruchomy, aparat stały albo nakładki, a na końcu retencja. Projektuję ją jako kilka krótkich kroków z orientacyjnym wiekiem i częstotliwością wizyt; treść każdego kroku pisze albo zatwierdza lekarz."),
        p("Osobny ekran pokazuje pierwszą wizytę: co dzieje się na fotelu, ile trwa, czy rodzic może być w gabinecie, jakie zdjęcia i wyciski się wykonuje. Rodzic zdenerwowanego dziesięciolatka szuka właśnie tego."),

        h2("Aparat czy nakładki: porównanie dla dorosłych na stronie gabinetu ortodontycznego"),
        p("Dorosły porównuje możliwości obok siebie, więc zamiast trzech osobnych opisów lepiej sprawdza się tabela: jak bardzo widać, orientacyjny czas leczenia, częstotliwość wizyt, jedzenie i higiena, codzienne obowiązki pacjenta. Każda kolumna prowadzi do pełnej podstrony z lekarzem, który prowadzi takie leczenie. W części dla dorosłych są zdjęcia dorosłych pacjentów, nie nastolatków, i możliwość zadania pytania na piśmie dla kogoś, kto nie może zadzwonić w godzinach pracy."),

        h2("Galeria leczenia na stronie ortodonty: zgoda rodzica, wizerunek dziecka i RODO"),
        p("Jeśli po konsultacji z izbą lekarską zdecydujecie się na galerię, projekt pilnuje jej uczciwości:"),
        li("każdy przypadek ma pisemną zgodę przechowywaną w dokumentacji, a u dziecka podpisuje ją rodzic lub opiekun"),
        li("zdjęcia przed i po w tych samych ujęciach — przód, boki, zgryz — i w tym samym świetle"),
        li("bez retuszu, wybielania i kadrowania, które ukrywa stłoczenia"),
        li("przy każdym przypadku rodzaj leczenia, czas trwania i informacja, że efekty bywają różne"),
        li("filtry według rodzaju leczenia i wieku, bez imion i nazwisk pacjentów"),
        p("Zdjęcie uzębienia z twarzą dziecka łączy wizerunek z danymi o zdrowiu. Dlatego galeria nie korzysta z zewnętrznych serwisów zdjęciowych, a pliki nie mają w nazwach danych pacjenta."),

        h2("Cennik leczenia ortodontycznego na stronie: karty cen, raty i NFZ"),
        p("Cennik projektuję jako karty: jedna na rodzaj leczenia, w niej widełki, lista tego, co obejmuje cena, i przykładowa rata, jeśli gabinet ją oferuje. Pacjent może je porównać na telefonie bez otwierania pliku PDF. Konsultacja i diagnostyka mają osobną pozycję. Krótka ramka wyjaśnia, czy gabinet ma umowę z NFZ i dla kogo — refundacja w ortodoncji jest wąska, więc lepiej opisać ją jasno niż zostawić rodzicom domysły."),

        h2("Rejestracja na konsultację ortodontyczną i formularze zgodne z RODO"),
        p("Każda podstrona kończy się zapisem na konsultację. Na telefonie przycisk zapisu i numer telefonu są przypięte do dołu ekranu. Za przyciskiem jest kalendarz z ZnanyLekarz albo z programu gabinetowego, a jeśli samodzielny zapis nie wchodzi w grę — krótki formularz: imię, telefon, wiek pacjenta i wybrana placówka."),
        p("Coraz więcej gabinetów przyjmuje zdjęcia zębów przed pierwszą wizytą. To dane o zdrowiu, często dziecka, więc trafiają do narzędzia objętego umową powierzenia przetwarzania, a nie na zwykłą skrzynkę mailową. Około pięciu lat temu brałem udział w budowie systemu medycznego przetwarzającego dane pacjentów — nazwy nie podam, bo obowiązuje mnie NDA — i od tamtej pory strona w moim projekcie trzyma u siebie możliwie mało. Ocenę zgodności daje Wasz inspektor ochrony danych."),

        h2("Strona gabinetu ortodontycznego z kilkoma placówkami: mapa, dni przyjęć i lekarze"),
        p("Przy dwóch lub trzech placówkach strona dostaje wyszukiwarkę gabinetów: mapę i listę, a przy każdym miejscu podstronę z dniami przyjęć, lekarzami, wejściem, parkingiem i zdjęciem budynku. Formularz zapisu pyta, która placówka jest wygodniejsza. Strona Giuseppe działa tak samo w mniejszej skali: trzy miejsca przyjęć — Mediolan, Monza, Cernusco sul Naviglio — na jednej mapie, każde z własną podstroną, i osobna podstrona terapii online."),
        p("Profil ortodonty pokazuje dyplom, specjalizację, numer prawa wykonywania zawodu, placówki i dni przyjęć, z prawdziwym portretem. Dla stomatologów, którzy kierują do Was pacjentów, jest osobna zakładka: jak skierować, jak przesłać zdjęcie RTG bezpiecznym kanałem i jak zadzwonić bezpośrednio do lekarza."),

        h2("Strefa pacjenta w trakcie leczenia ortodontycznego: awarie aparatu i nakładki"),
        p("Pacjenci w trakcie leczenia odwiedzają stronę częściej niż nowi. Osobna strefa odciąża rejestrację: co zrobić, gdy odklei się zamek albo drut kłuje policzek, które sytuacje wymagają telefonu tego samego dnia, jak czyścić aparat, ile godzin nosić nakładki, jak dbać o retainer. Krótkie filmy nagrane przez Wasz zespół sprawdzają się tu lepiej niż materiały z banku zdjęć."),

        h2("Strona internetowa dla ortodonty, którą ChatGPT i przeglądy AI w Google potrafią przeczytać"),
        p("Rodzice pytają asystentów AI, który ortodonta w okolicy leczy małe dzieci, przyjmuje w soboty albo ma raty. Asystent składa odpowiedź z tekstu, który potrafi odczytać i porównać z wizytówką i ZnanyLekarz. Dlatego placówki z dniami przyjęć, wiek pacjentów, rodzaje leczenia, języki i formy płatności są zapisane w treści strony, nie na grafikach, a dane strukturalne łączą lekarzy z placówkami. Strona Giuseppe jest zbudowana w ten sposób i ChatGPT przytacza już podstrony opublikowane po starcie."),
        p(
          "Utrzymanie gabinetu w tych odpowiedziach to osobna usługa: ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ". Widoczność w Google na frazy o aparatach i nakładkach opisuję na stronie ",
          link("pozycjonowanie gabinetu ortodontycznego", "/pl/pozycjonowanie-strony-gabinetu-ortodontycznego"),
          ".",
        ),

        h2("Ile kosztuje strona internetowa dla ortodonty i kiedy wystarczy gotowy szablon"),
        p("Gotowa strona w abonamencie od firmy obsługującej gabinety jest rozsądna na start jednej placówki. Ograniczenia wychodzą później: tekst wspólny z wieloma gabinetami, galeria bez filtrów, brak podstron placówek i strona, której nie zabierzecie, odchodząc. Przeniesienie nie musi kosztować pozycji: strona Giuseppe przeszła z WordPressa na Next.js ze wszystkimi 468 wpisami i przekierowaniem 301 z każdego starego adresu."),
        li("Prosta strona gabinetu ortodontycznego — strona główna, leczenie dzieci i dorosłych, lekarz, cennik, jedna placówka, zapis online: od 3000 do 6000 zł."),
        li("Strona ze ścieżkami dla rodziców i dorosłych, galerią z filtrami, cennikiem w kartach, podstronami placówek i zakładką dla stomatologów: od 8500 zł."),
        p("Projekt graficzny jest w cenie. Praca przebiega w czterech krokach:"),
        ol("Brief: lekarze, placówki z dniami przyjęć, rodzaje leczenia, cennik i pytania, które najczęściej słyszy rejestracja."),
        ol("Szkic pierwszego ekranu i ścieżek dla rodziców i dorosłych na telefonie."),
        ol("Projekt strony głównej, podstrony leczenia i podstrony placówki, a potem reszta według tego samego systemu."),
        ol("Wykonanie, podłączenie zapisu, test formularzy i instrukcja dla rejestracji. Strona Giuseppe była gotowa do oddania po 44 dniach roboczych, licząc od startu programowania."),
        p(
          "Ogólnie o tym, jak buduję strony, piszę w ofercie ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ". Gabinety stomatologii ogólnej mają swoją ",
          link("stronę dla gabinetu stomatologicznego", "/pl/strona-dla-gabinetu-stomatologicznego"),
          ", lekarze innych specjalności — ",
          link("stronę internetową dla lekarza", "/pl/strona-internetowa-dla-lekarza"),
          ". Pełne widełki są w ",
          link("cenniku", "/pl/cennik"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strona internetowa dla ortodonty: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona internetowa dla ortodonty?", "Prosta strona jednej placówki to od 3000 do 6000 zł, strona ze ścieżkami dla rodziców i dorosłych, galerią, cennikiem w kartach, podstronami placówek i zakładką dla stomatologów — od 8500 zł. Projekt graficzny jest w obu cenach, a po opisie gabinetu podaję jedną stałą kwotę."],
          ["Jak długo powstaje strona gabinetu ortodontycznego?", "Zwykle miesiąc do półtora od briefu. Wydłuża to większa liczba placówek, przypadków w galerii i wolniejsze zatwierdzanie tekstów. Szkic pierwszego ekranu na telefonie dostajecie w pierwszym lub drugim tygodniu."],
          ["Czy na stronie ortodonty można pokazać zdjęcia przed i po?", "To zależy od oceny izby lekarskiej, bo takie zdjęcia bywają traktowane jako reklama. Jeśli je publikujecie, to z pisemną zgodą (u dzieci — rodzica), w tych samych ujęciach, bez retuszu i bez danych pacjenta."],
          ["Czy pacjenci mogą przesłać zdjęcia zębów przez stronę?", "Tak, jeśli upload obsługuje dostawca, któremu powierzyliście przetwarzanie danych na piśmie. Zwykły formularz i e-mail odpadają, a konfigurację zatwierdza Wasz inspektor ochrony danych."],
          ["Czy da się podłączyć kalendarz z ZnanyLekarz?", "Tak, jeśli korzystacie z kalendarza ZnanyLekarz albo programu gabinetowego z rezerwacją online. Gdy to niemożliwe, krótki formularz przekazuje prośbę o termin do rejestracji."],
          ["Czy sami zmienimy cennik, godziny i galerię?", "Tak. Placówki, dni przyjęć, karty cen, zespół i przypadki w galerii zmienia rejestracja w panelu redakcyjnym — da się to zrobić nawet na telefonie. Do tego instrukcja i krótkie nagrania."],
          ["Czy pracujesz z gabinetami spoza Warszawy?", "Tak, z całej Polski, zdalnie. Gabinety z Warszawy i okolic mogę odwiedzić na miejscu, na przykład przy sesji zdjęciowej zespołu."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową dla ortodonty: co mi wysłać"),
        p(
          "Potrzebuję nazwy gabinetu, adresu dzisiejszej strony (albo wpisu w ZnanyLekarz), placówek z dniami przyjęć, rodzaje leczenia dla dzieci i dorosłych, informację o NFZ i ratach oraz kilka zdjęć zespołu i gabinetu. Odeślę szkic pierwszego ekranu i stałą cenę. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
