// Landing page fixture: Strona internetowa dla kliniki medycyny estetycznej
// (PL), group «med-spa-website-design». Market version for Polish kliniki and
// gabinety medycyny estetycznej, not a translation of
// med-spa-website-design.en. In PL this is a development page that includes
// design: the market searches for «strona dla kliniki medycyny estetycznej».
// Semantic core: ref/medical-practices.md — PL «on topic» list is empty
// (volumes under the source’s floor); target phrases from BRIEF.md: «strona
// internetowa dla kliniki medycyny estetycznej» (H1, H2, cost H2, FAQ),
// «strona gabinetu medycyny estetycznej» (H2), «strona www kliniki medycyny
// estetycznej» (metaTitle).
// Intent: ref/intent-check-medical-practices.md — «strona dla kliniki medycyny
// estetycznej» vs «pozycjonowanie kliniki medycyny estetycznej» 0 shared URLs,
// 0 shared domains → separate pages (sibling linked). SERP: real clinic sites
// (skin-medic, klinikapromedion, kamskin, m-clinic, molasclinic), Booksy and
// a medical-marketing studio → owners looking at examples and builders; the
// page answers with what a good clinic site contains.
// Polish angles: pierwszy ekran na telefonie; menu według zabiegu i problemu;
// Booksy, Versum, ZnanyLekarz; cennik, karnety, bony podarunkowe; metamorfozy
// ze zgodą na wizerunek; informacja zamiast reklamy w szablonie zabiegu;
// karta kwalifikacyjna i RODO; projekt w spokojnym stylu (Giuseppe).
// NOT on this page: pozycjonowanie, wizytówka Google, opinie, Instagram
// (/pl/pozycjonowanie-strony-kliniki-medycyny-estetycznej); chirurgia plastyczna
// (/pl/strona-internetowa-dla-chirurga-plastycznego); salony bez zabiegów
// medycznych (beauty salon page, linked once).
// Prices: /pl/cennik (3000–6000 zł, od 8500 zł), projekt w cenie. Owner’s
// rules: every page covers AI search; Giuseppe’s case first; never say there
// are no clients from the visitor’s industry.
import { p, h2, li, link, k } from "./pt";

export const medSpaWebsiteDesignPl = {
  lang: "pl",
  group: "med-spa-website-design",
  slug: "strona-internetowa-dla-kliniki-medycyny-estetycznej",
  title: "Strona internetowa dla kliniki medycyny estetycznej",
  heading: "Strona internetowa dla kliniki medycyny estetycznej",
  excerpt:
    "Projektuję i wykonuję strony internetowe dla klinik i gabinetów medycyny estetycznej: menu zabiegów wygodne na telefonie, rezerwacja z Booksy lub Versum, cennik i karnety tekstem, galeria metamorfoz za zgodą pacjentów i formularze zgodne z RODO.",
  seo: {
    metaTitle: "Strona www kliniki medycyny estetycznej | Bandziuk",
    metaDescription:
      "Strona internetowa dla kliniki medycyny estetycznej: menu zabiegów, rezerwacja Booksy, profile lekarzy, metamorfozy za zgodą, karnety, RODO. Od 3000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt + wykonanie, jedna cena", "Od 3000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Umów konsultację", "Zabiegi według problemu", "Karnety i bony", "Nasi lekarze"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona internetowa dla gabinetu medycyny estetycznej, projekt w cenie", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Strona kliniki medycyny estetycznej z podstronami zabiegów i problemów, profilami lekarzy, galerią metamorfoz, karnetami i rezerwacją online, projekt w cenie", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co dostajecie ze stroną internetową dla kliniki medycyny estetycznej",
      items: [
        { _key: k("o"), iconName: "layers", title: "Menu zabiegów wygodne na telefonie", text: "Według zabiegu i według problemu, jeden wzór podstrony" },
        { _key: k("o"), iconName: "plug", title: "Rezerwacja z Waszego systemu", text: "Booksy, Versum, ZnanyLekarz albo prośba o termin" },
        { _key: k("o"), iconName: "file-text", title: "Cennik, karnety i bony tekstem", text: "Edytowane przez recepcję, bez grafik i PDF" },
        { _key: k("o"), iconName: "image", title: "Galeria metamorfoz za zgodą", text: "Filtr po zabiegu, to samo światło, bez retuszu" },
        { _key: k("o"), iconName: "shield-check", title: "Formularze zgodne z RODO", text: "Bez danych o zdrowiu w zwykłym formularzu" },
        { _key: k("o"), iconName: "sparkles", title: "Czytelna dla Google i asystentów AI", text: "Zabiegi, lekarze i ceny zapisane tekstem" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona gabinetu medycyny estetycznej", value: "3000–6000 zł", note: "projekt w cenie" },
        { _key: k("r"), label: "Zabiegi, lekarze, metamorfozy, karnety, rezerwacja", value: "od 8500 zł", note: "projekt w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: strony internetowe, które zaprojektowałem i zbudowałem",
      subtitle:
        "Na początek strona Giuseppe, psychoterapeuty z Mediolanu: prywatna praktyka medyczna, spokojny projekt dla osób w niepokoju, panel pilnujący niedozwolonych sformułowań i 468 artykułów przeniesionych z przekierowaniami 301 ze wszystkich starych adresów. Dalej strona warszawskiej firmy remontowo-inwestycyjnej w stylu premium, platforma nieruchomości na Cyprze z katalogiem, filtrami i mapą w pięciu językach, wielojęzyczny serwis agencji edukacyjnej i nowa strona na WordPressie dla pracowni renowacji felg. Klinika estetyczna bierze z nich elegancki, ale czytelny wygląd, rozbudowany katalog usług, który łatwo przeglądać, i krótką drogę do rezerwacji.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "psychotherapist-website-milan",
        "renovation-and-investment-website-with-premium-design",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "full-multilingual-website-development-and-seo-for-student-services",
        "felgilab-wordpress-rebuild",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej dla kliniki medycyny estetycznej",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: proponuję listę podstron, zawartość pierwszego ekranu na telefonie i stałą cenę.",
      contextLabel: "Nazwa kliniki lub obecna strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Co macie teraz?", options: ["Brak strony", "Strona z kreatora", "Stara strona na WordPressie", "Tylko Instagram i Booksy"] },
        { _key: k("z"), question: "W czym prowadzicie rezerwacje?", options: ["Booksy", "Versum", "ZnanyLekarz", "Telefon i zeszyt"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Strona internetowa dla kliniki medycyny estetycznej to miejsce, w którym pacjentka po obejrzeniu Instagrama sprawdza, czy może Wam zaufać, i rezerwuje wizytę. Projektuję ją i buduję sam — od listy podstron, przez projekt graficzny, po podłączenie rezerwacji i uruchomienie — więc za wygląd i działanie odpowiada jedna osoba, a cena jest znana z góry."),

        h2("Strona internetowa dla kliniki medycyny estetycznej: pierwszy ekran na telefonie"),
        p("Pacjentki trafiają na stronę kliniki zwykle z telefonu, często prosto z Instagrama. Pierwszy ekran ma więc odpowiedzieć bez przewijania:"),
        li("co robicie i gdzie — „Medycyna estetyczna i kosmetologia, Gdynia Orłowo”, a nie „Odkryj swoje piękno”"),
        li("przycisk „Umów konsultację” i przycisk połączenia lub wiadomości"),
        li("kto przyjmuje: lekarz prowadzący albo zespół z imienia i nazwiska"),
        li("adres i godziny, po jednej linii"),
        p("Na telefonie przyciski rezerwacji i telefonu są przypięte u dołu ekranu na każdej podstronie. Bannery z promocjami nie zasłaniają treści — przy zabiegach lekarskich i tak nie powinny mieć charakteru reklamy."),

        h2("Menu zabiegów na stronie gabinetu medycyny estetycznej: według zabiegu i według problemu"),
        p("Lista zabiegów kliniki rośnie szybko: toksyna botulinowa, kwas hialuronowy, stymulatory tkankowe, mezoterapia, lasery, HIFU, peelingi, zabiegi na ciało. Pacjenci szukają na dwa sposoby. Jedni znają nazwę zabiegu, inni tylko problem: „cienie pod oczami”, „przebarwienia”, „wiotka skóra szyi”. Menu prowadzi obiema drogami — zabiegi pogrupowane na iniekcyjne, laserowe i kosmetologiczne oraz podstrony problemów, które wymieniają zabiegi stosowane w danej sytuacji, bez obiecywania efektu."),
        p("Każda podstrona zabiegu ma ten sam układ: na czym polega, kto go wykonuje, przeciwwskazania, przebieg wizyty, czas rekonwalescencji, liczba zabiegów, cena i przycisk rezerwacji od razu ustawiony na ten zabieg. W szablonie nie ma miejsca na marki leków na receptę ani hasła reklamowe, więc nowe podstrony dodawane przez recepcję zostają w granicach informacji o usługach."),

        h2("Rezerwacja online na stronie kliniki: Booksy, Versum, ZnanyLekarz lub formularz"),
        p("Kliniki estetyczne prowadzą kalendarz w różnych systemach, a strona go nie zastępuje — przekazuje do niego pacjenta we właściwym momencie. Zależnie od tego, co oferuje Wasz system:"),
        li("przycisk otwierający rezerwację w Booksy lub Versum z wybranym już zabiegiem albo specjalistą"),
        li("kalendarz z ZnanyLekarz przy konsultacjach lekarskich"),
        li("krótka prośba o termin przy zabiegach, które wymagają wcześniejszej kwalifikacji"),
        p("Widżet ładuje się dopiero po kliknięciu, żeby nie spowalniać strony. Zasady zadatku i odwoływania wizyt są widoczne przed rezerwacją, a nie dopiero w potwierdzeniu SMS."),

        h2("Cennik, karnety i bony podarunkowe na stronie kliniki medycyny estetycznej"),
        p("Cennika pacjentki szukają jako jednej z pierwszych podstron, a w wielu klinikach wciąż jest skanem ulotki. Na stronie jest tekstem z wyszukiwarką i podziałem na grupy zabiegów, z ceną za obszar, ampułkostrzykawkę albo zabieg i informacją o płatnej konsultacji. Recepcja zmienia ceny w panelu, także z telefonu."),
        p("Karnety i pakiety serii zabiegów dostają czytelne tabelki z ceną jednej wizyty w pakiecie. Bony podarunkowe można sprzedawać online — przez system rezerwacji, jeśli to obsługuje, albo przez bramkę płatności z bonem wysyłanym mailem."),

        h2("Galeria metamorfoz na stronie kliniki: zgoda na wizerunek, jednakowe zdjęcia, bez retuszu"),
        p("Galeria ma pomóc ocenić efekt, a nie olśnić. Każda metamorfoza ma opis — zabieg, obszar, liczba sesji, odstęp między zdjęciami, osoba wykonująca — i filtr po zabiegu i problemie. Zasady projektu:"),
        li("zdjęcia tylko z pisemną zgodą na rozpowszechnianie wizerunku, przechowywaną razem z dokumentacją"),
        li("to samo światło, kadr i tło przed i po, bez filtrów i retuszu"),
        li("możliwość kadrowania twarzy, jeśli pacjentka sobie tego życzy"),
        li("krótka informacja, że efekty są indywidualne, obok zdjęć, a nie w stopce"),
        p("Przy zabiegach lekarskich zakres publikacji metamorfoz warto uzgodnić z prawnikiem, bo łatwo uznać je za reklamę."),

        h2("Podstrony lekarzy i kosmetologów: wzór profilu na stronie kliniki"),
        p("Pacjentka wybiera osobę tak samo jak zabieg. Profil lekarza ma prawdziwe zdjęcie z gabinetu, tytuł i numer prawa wykonywania zawodu tekstem, specjalizację, szkolenia, listę wykonywanych zabiegów i przycisk rezerwacji do tej osoby. Profil kosmetologa — wykształcenie i zakres zabiegów. Dzięki jednemu wzorowi dodanie nowej osoby do zespołu zajmuje kilka minut, a podstrony zabiegów same pokazują, kto je wykonuje."),

        h2("Projekt graficzny strony kliniki medycyny estetycznej: spokojny styl zamiast efektów"),
        p("Kliniki estetyczne chętnie sięgają po estetykę hoteli i marek kosmetycznych. Działa to, dopóki projekt zostaje spokojny: kilka kolorów, jeden kolor akcentu zarezerwowany dla rezerwacji, szeryfowy lub elegancki bezszeryfowy krój w nagłówkach, dużo przestrzeni i prawdziwe zdjęcia zespołu i gabinetów zamiast zdjęć modelek z banku zdjęć. Wiele osób boi się igły albo tego, jak będzie wyglądać po zabiegu, a strona powinna to napięcie zmniejszać."),
        p("Tak zaprojektowałem stronę Giuseppe, psychoterapeuty z Mediolanu: ciemny motyw z jasnymi sekcjami, szeryfowy krój z prawdziwą kursywą i żadnej presji. Włoskie zasady reklamy usług medycznych są surowe, dlatego panel tej strony sam podświetla ryzykowne zwroty: obietnice efektu, opinie pacjentów, rabaty, „darmową konsultację”. Strona kliniki może mieć podobną kontrolę dla słów takich jak „gwarantowany efekt” czy „bezbolesny”."),

        h2("Formularze, karta kwalifikacyjna i RODO na stronie kliniki medycyny estetycznej"),
        p("Przed zabiegiem lekarskim klinika zbiera wywiad: leki, alergie, ciąża, wcześniejsze zabiegi. To dane o zdrowiu, czyli szczególna kategoria w RODO, i zwykły formularz kontaktowy nie jest na nie miejscem. Formularz na stronie pyta o imię, telefon, zabieg i termin, z prośbą, by nie opisywać stanu zdrowia. Karta kwalifikacyjna i zgoda na zabieg działają w systemie gabinetowym albo u dostawcy z umową powierzenia przetwarzania danych. Klauzula informacyjna jest przy formularzu, a analityka nie zbiera danych z formularzy i stron rezerwacji."),
        p("Kilka lat temu pracowałem przy oprogramowaniu medycznym z dokumentacją pacjentów; umowa o poufności nie pozwala podać nazwy. Wyniosłem z tego zasadę: przez stronę klinika pyta tylko o to, czego wymaga umówienie wizyty. Ostateczną ocenę daje inspektor ochrony danych albo prawnik."),

        h2("Strona kliniki medycyny estetycznej, którą ChatGPT i przeglądy AI w Google potrafią przeczytać"),
        p("Pacjentki pytają ChatGPT albo przegląd od AI w Google, gdzie w mieście lekarz wykonuje wolumetrię albo która klinika ma laser frakcyjny. Asystent odpowiada na podstawie tekstu, który potrafi przeczytać. Dlatego zabiegi, lekarze z kwalifikacjami, adresy, godziny, ceny i zasady karnetów są w kodzie strony jako tekst, a nie grafika czy skrypt, mają dane strukturalne i zgadzają się z wizytówką Google. Na stronie Giuseppe pomogły temu jawne zasady dla robotów AI w robots.txt i dane strukturalne praktyki, a nowe podstrony pojawiają się już w odpowiedziach ChatGPT."),
        p(
          "Dalszą pracę nad widocznością w AI opisuję na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ", a pozycjonowanie w Google — na stronie ",
          link("pozycjonowanie kliniki medycyny estetycznej", "/pl/pozycjonowanie-strony-kliniki-medycyny-estetycznej"),
          ".",
        ),

        h2("Kreator, szablon czy strona na zamówienie dla gabinetu medycyny estetycznej"),
        p("Strona z kreatora albo gotowy szablon wystarczy na start gabinetu z jednym lekarzem i kilkoma zabiegami. Ograniczenia widać, gdy klinika rośnie: wszystkie zabiegi na jednej podstronie, brak miejsca na kwalifikacje, cennik jako grafika, galeria bez opisów i formularz wysyłający dane o zdrowiu na zwykłą skrzynkę. Strona na zamówienie jest zbudowana wokół Waszego menu zabiegów i systemu rezerwacji, a kod, treści i domena należą do kliniki."),
        p(
          "Jeśli strona już istnieje, przebudowa zachowuje pozycje w Google: stare adresy są przypisane do nowych i przekierowane, tak jak przy wszystkich 468 artykułach Giuseppe. Opisuję to na stronie ",
          link("przebudowa strony internetowej", "/pl/oferty/przebudowa-strony-internetowej"),
          ".",
        ),

        h2("Ile kosztuje strona internetowa dla kliniki medycyny estetycznej"),
        li("Prosta strona gabinetu medycyny estetycznej — strona główna, menu zabiegów, zespół, cennik, kontakt i przycisk rezerwacji: od 3000 do 6000 zł."),
        li("Strona kliniki z podstronami zabiegów i problemów, profilami lekarzy i kosmetologów, galerią metamorfoz, karnetami, bonami i podłączoną rezerwacją: od 8500 zł."),
        p(
          "Projekt graficzny jest w cenie w obu przypadkach. Jak tworzę strony w ogóle, opisuję na stronie ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ", a strony gabinetów lekarskich innych specjalności — na stronie ",
          link("strona internetowa dla lekarza", "/pl/strona-internetowa-dla-lekarza"),
          ". Chirurdzy plastyczni mają osobną ",
          link("stronę internetową dla chirurga plastycznego", "/pl/strona-internetowa-dla-chirurga-plastycznego"),
          ", a salony bez zabiegów medycznych — ",
          link("stronę salonu kosmetycznego", "/pl/tworzenie-stron-internetowych-dla-branzy-beauty/strona-salonu-kosmetycznego"),
          ". Pełne widełki są w ",
          link("cenniku", "/pl/cennik"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strona internetowa dla kliniki medycyny estetycznej: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona internetowa dla kliniki medycyny estetycznej?", "Od 3000 do 6000 zł za prostą stronę gabinetu, od 8500 zł za stronę kliniki z podstronami zabiegów, profilami zespołu, galerią metamorfoz, karnetami i rezerwacją online. Projekt graficzny jest w cenie. Stałą cenę podaję po krótkim opisie kliniki."],
          ["Ile trwa stworzenie strony dla kliniki medycyny estetycznej?", "Zwykle od czterech do siedmiu tygodni od briefu. Najwięcej czasu zajmują treści: opisy zabiegów zatwierdzone przez lekarzy, metamorfozy ze zgodami i zdjęcia zespołu."],
          ["Czy podłączysz rezerwację z Booksy lub Versum?", "Tak, przez link, przycisk albo widżet, który udostępnia Wasz system. Przed wyceną sprawdzam, co pozwala Wasze konto, żeby w projekcie była ścieżka rezerwacji, która naprawdę działa."],
          ["Czy na stronie można sprzedawać bony podarunkowe?", "Tak — przez system rezerwacji, jeśli ma taką funkcję, albo przez bramkę płatności z bonem wysyłanym mailem. Wybór zależy od tego, jak recepcja rozlicza bony."],
          ["Czy sami zmienimy cennik, zabiegi i zespół?", "Tak. Recepcja zmienia cennik, zabiegi, profile i metamorfozy w panelu z gotowymi polami, więc nowa treść wygląda tak samo jak reszta strony — również wtedy, gdy edytuje z telefonu."],
          ["Czy strona kliniki może pokazywać metamorfozy i opinie?", "Metamorfozy — tylko za pisemną zgodą pacjentów i bez retuszu, a przy zabiegach lekarskich po sprawdzeniu z prawnikiem. Opinie zwykle lepiej zostawić w Google i Booksy, gdzie są niezależne, i podlinkować je ze strony."],
          ["Jak wygląda współpraca z kliniką z innego miasta?", "Tak samo jak z kliniką w Warszawie: brief, akceptacja projektu i szkolenie z panelu odbywają się na rozmowach wideo, a zdjęcia gabinetów i zespołu robi wybrany przez Was fotograf."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową dla kliniki medycyny estetycznej: co mi wysłać"),
        p(
          "Wyślijcie link do obecnej strony albo Instagrama, listę zabiegów i zespołu, cennik, zasady karnetów i bonów, system rezerwacji i kilka zdjęć gabinetów. Odpowiem planem podstron, szkicem pierwszego ekranu i stałą ceną. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
