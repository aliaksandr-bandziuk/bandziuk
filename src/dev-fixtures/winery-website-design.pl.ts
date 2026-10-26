// Landing page fixture: Strona internetowa dla winnicy (PL), group
// «winery-website-design». New page. Market version for Polish winnice —
// small family vineyards with degustacje, zwiedzanie, sometimes noclegi or an
// event hall, selling wine at the cellar door — not a translation of
// winery-website-design.en. In PL this is a development page that includes
// design.
// Semantic core: ref/creative-leisure.md has no PL phrases above the floor for
// wineries; H1 and headings carry the slug phrase «strona internetowa dla
// winnicy», plus «strona www winnicy» (metaTitle), «strona winnicy» (H2) and
// the words owners use: degustacja, zwiedzanie, klub wina, enoturystyka.
// Intent: ref/intent-check-creative-leisure.md — EN «winery website design» vs
// «winery seo» 0 of 10 shared URLs → separate pages;
// /pl/pozycjonowanie-winnicy is the sibling. EN design SERP = galleries and
// wine-industry studios → owners looking for examples and a designer.
// Polish angles: pierwszy ekran z godzinami degustacji, rezerwacja z
// przedpłatą (BLIK, Przelewy24 — general), klub wina i lista przedsprzedaży,
// sklep only where the law allows it — rezerwacja z odbiorem w winnicy as the
// safe default («sprawdź przepisy»), bramka 18+, wydarzenia, wesela i noclegi,
// wersje językowe for guests from Germany, Czechia and Slovakia, zdjęcia i
// projekt premium (renovation case), AI-readable build (Giuseppe), kreator vs
// projekt (ScanM2), cost.
// NOT on this page: pozycjonowanie, frazy, wizytówka Google, opinie, sezon
// w SEO (/pl/pozycjonowanie-winnicy — sibling); noclegi as a separate
// business (/pl/strona-internetowa-dla-pensjonatu — neighbour, linked once).
// Prices: /pl/cennik (3000–6000 zł, od 8500 zł), projekt w cenie. Owner’s
// rules: every page covers AI search; never say there are no clients from the
// visitor’s industry; alcohol rules only in general terms.
import { p, h2, li, link, k } from "./pt";

export const wineryWebsiteDesignPl = {
  lang: "pl",
  group: "winery-website-design",
  slug: "strona-internetowa-dla-winnicy",
  title: "Strona internetowa dla winnicy",
  heading: "Strona internetowa dla winnicy",
  excerpt:
    "Projektuję i wykonuję strony internetowe dla winnic: rezerwacja degustacji i zwiedzania z kalendarzem, klub wina, sprzedaż tylko w formie, na którą pozwalają przepisy, bramka 18+, kalendarz wydarzeń i wesel, wersje językowe dla gości z zagranicy i projekt oparty na zdjęciach z Twojej winnicy.",
  seo: {
    metaTitle: "Strona www winnicy: degustacje i enoturystyka | Bandziuk",
    metaDescription:
      "Strona internetowa dla winnicy: rezerwacja degustacji, klub wina, wydarzenia i wesela, bramka 18+, wersje językowe i zdjęcia, projekt w cenie. Od 3000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt + wykonanie, jedna cena", "Od 3000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Zarezerwuj degustację", "Otwarte w sobotę 12–18", "Klub wina", "Wesele w winnicy"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona internetowa dla winnicy, projekt w cenie", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Strona winnicy z podstronami degustacji, rezerwacją online, klubem wina, wydarzeniami i weselami, bramką 18+ i wersjami językowymi, projekt w cenie", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co dostajesz ze stroną internetową dla winnicy",
      items: [
        { _key: k("o"), iconName: "plug", title: "Rezerwacja degustacji i zwiedzania", text: "Kalendarz, limity miejsc, przedpłata BLIK" },
        { _key: k("o"), iconName: "layers", title: "Klub wina i lista przedsprzedaży", text: "Zapis, warunki, powiadomienie o roczniku" },
        { _key: k("o"), iconName: "shield-check", title: "Sprzedaż i bramka 18+ zgodnie z zasadami", text: "Rezerwacja z odbiorem tam, gdzie to bezpieczne" },
        { _key: k("o"), iconName: "file-text", title: "Wydarzenia, wesela i noclegi", text: "Kalendarz, zapytania z datą i liczbą gości" },
        { _key: k("o"), iconName: "image", title: "Projekt oparty na Twoich zdjęciach", text: "Winorośl, piwnica, ludzie — szybko na wsi" },
        { _key: k("o"), iconName: "sparkles", title: "Czytelna dla Google i asystentów AI", text: "Godziny, ceny i zasady zapisane tekstem" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona winnicy", value: "3000–6000 zł", note: "projekt w cenie" },
        { _key: k("r"), label: "Degustacje, rezerwacja, klub, wydarzenia, języki", value: "od 8500 zł", note: "projekt w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: wielojęzyczne i fotograficzne strony, które zaprojektowałem",
      subtitle:
        "Najpierw platforma nieruchomości premium na Cyprze, zbudowana od zera: pięć języków razem z hebrajskim, katalog z filtrami i mapą, prezentacje wideo — to ten sam układ wielojęzyczny, którego potrzebuje winnica odwiedzana przez gości z zagranicy. Dalej strona warszawskiej firmy remontowo-inwestycyjnej, w której markę niosą duże zdjęcia i oszczędna typografia, tak jak w winnicy. Strona psychoterapeuty z Mediolanu ma spokojny projekt, 468 przeniesionych wpisów i podstrony cytowane już przez ChatGPT. Serwis agencji edukacyjnej obsługuje czytelników z dziesięciu krajów. ScanM2 przeniósł się z kreatora na WordPressa i ma 29 razy większy ruch organiczny.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "build-and-optimize-a-multilingual-real-estate-platform",
        "renovation-and-investment-website-with-premium-design",
        "psychotherapist-website-milan",
        "full-multilingual-website-development-and-seo-for-student-services",
        "architecture-website-rebuild-and-seo-scan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej dla winnicy",
      subtitle: "W ciągu dnia roboczego wyślę plan podstron winnicy, przyciski na pierwszy ekran telefonu i stałą cenę.",
      contextLabel: "Nazwa winnicy lub obecna strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Co macie teraz?", options: ["Tylko Facebook i Instagram", "Stronę z kreatora", "Starą stronę na WordPressie", "Nic, winnica dopiero rusza"] },
        { _key: k("z"), question: "Co ma obsługiwać strona?", options: ["Rezerwację degustacji", "Klub wina i przedsprzedaż", "Wesela i noclegi", "Wszystko po trochu"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Strona internetowa dla winnicy to miejsce, w którym enoturysta sprawdza, czy w sobotę jest degustacja, ile kosztuje i jak dojechać, a potem rezerwuje termin. Taką stronę robię w całości sam: układam podstrony, rysuję projekt, programuję, podpinam kalendarz i płatności, uruchamiam. Masz jednego wykonawcę i cenę ustaloną przed startem."),

        h2("Strona internetowa dla winnicy: pierwszy ekran z godzinami degustacji"),
        p("Strony winnic często otwiera pełnoekranowe zdjęcie krzewów i hasło o pasji. Gość z telefonem w ręku, czasem już w samochodzie, potrzebuje czegoś innego:"),
        li("kim jesteście i gdzie — „Rodzinna winnica pod Jasłem, degustacje i zwiedzanie”"),
        li("najbliższe godziny otwarcia i informacja, czy trzeba rezerwować"),
        li("przyciski „Zarezerwuj degustację” i „Dojazd”"),
        li("najbliższe wydarzenie w jednej linijce"),
        p("Na telefonie przyciski rezerwacji i dojazdu są przypięte u dołu ekranu na każdej podstronie. Film z drona, jeśli go macie, ładuje się niżej i dopiero wtedy, gdy gość do niego przewinie."),

        h2("Rezerwacja degustacji na stronie winnicy: kalendarz, limity miejsc i przedpłata"),
        p("W wielu winnicach rezerwacje wciąż idą przez telefon i Messengera, a właściciel odbiera je w trakcie pracy w winnicy. Strona może przejąć większość tej pracy:"),
        li("kalendarz z terminami degustacji i limitem miejsc, który sam zamyka pełne godziny"),
        li("przedpłata przez BLIK lub Przelewy24 przy rezerwacji, z jasnymi zasadami zwrotu"),
        li("osobny formularz dla grup i firm z pytaniem o liczbę osób, termin i fakturę"),
        li("automatyczny e-mail z potwierdzeniem, mapą dojazdu i godziną"),
        p("Każda forma wizyty ma kartę według jednego wzoru: liczba win, przekąski, czas trwania, cena od osoby, minimalny wiek, zasady dla kierowców. Gość porównujący degustację klasyczną z kolacją z winiarzem widzi różnice od razu."),

        h2("Klub wina i przedsprzedaż rocznika na stronie winnicy"),
        p("Rocznik z małej polskiej winnicy często kończy się w kilka miesięcy, a najwierniejsi goście chcą go zarezerwować wcześniej. Na stronie da się to zorganizować bez osobnego systemu: zapis do klubu z opisem korzyści, lista przedsprzedaży na nowy rocznik, powiadomienie e-mailem o premierze i o odbiorze w winnicy. Zapis działa też na tablecie przy barze degustacyjnym, więc obsługa może zapisać gościa od razu po degustacji."),

        h2("Bony prezentowe na degustację i zwiedzanie winnicy"),
        p("Degustacja dla dwojga to popularny prezent na urodziny, rocznicę czy święta, a kupujący zwykle nie jest tym, kto przyjedzie. Strona winnicy może sprzedawać bon bez udziału właściciela: wybór formy wizyty lub kwoty, płatność online, plik PDF z unikalnym kodem wysłany e-mailem i data ważności. Obdarowany wpisuje kod przy rezerwacji terminu, a kalendarz sam pilnuje, żeby bon nie został użyty dwa razy. Projekt bonu powtarza styl etykiet, więc nadaje się do wydrukowania i włożenia do koperty. Bon na degustację to sprzedaż usługi, nie wina, ale jego treść też powinna mówić o wizycie, a nie o piciu."),

        h2("Sprzedaż wina na stronie winnicy: co pozwalają przepisy"),
        p("Sprzedaż alkoholu w Polsce wymaga zezwoleń, a sprzedaż na odległość i wysyłka wina to obszar, w którym przepisy i ich interpretacje są niejednoznaczne i się zmieniają. Zanim strona zacznie przyjmować zamówienia, sprawdź aktualne zasady z prawnikiem lub doradcą. Projekt dopasowuję do tego, co wolno Ci robić:"),
        li("rezerwacja wina przez stronę z odbiorem i zapłatą w winnicy — rozwiązanie, które wiele winnic wybiera jako najbezpieczniejsze"),
        li("lista sklepów, winiarni i restauracji, w których można kupić Twoje wina"),
        li("sklep internetowy tylko tam, gdzie masz potwierdzenie, że ta forma sprzedaży jest dla Ciebie dozwolona"),
        p("Podstrona każdego wina ma jeden wzór: zdjęcie etykiety, szczep, rocznik, nuty, do czego podać, medale i właściwy przycisk — zarezerwuj butelki, zapisz się na degustację albo zobacz, gdzie kupić."),

        h2("Bramka 18+ na stronie winnicy: jak ją zrobić, żeby nie przeszkadzała"),
        p("Strona o winie zwykle pyta gościa o pełnoletność. Bramka powinna być lekka: jedno pytanie, zapamiętana odpowiedź, wygląd jak reszta strony, a nie szare okienko z innej epoki. Buduję ją jako warstwę nad gotową treścią, więc pierwsza wizyta nie zwalnia, a tekst pozostaje dostępny dla robotów. Weryfikację wieku przy odbiorze wina zostawiamy obsłudze winnicy."),

        h2("Wydarzenia, wesela i noclegi na stronie winnicy"),
        p("Kalendarz wydarzeń z filtrami — winobranie, koncerty, kolacje, dni otwarte — pokazuje tylko nadchodzące terminy i prowadzi do zapisów lub biletów. Minione wydarzenia trafiają do archiwum ze zdjęciami: nowy gość widzi, jak wygląda wieczór w Twojej winnicy. Wesela i przyjęcia dostają osobny dział: sala lub namiot z liczbą miejsc, zdjęcia prawdziwych przyjęć, zasady cateringu i formularz z pytaniem o datę, liczbę gości i budżet."),
        p(
          "Jeśli przy winnicy działają pokoje gościnne lub agroturystyka, więcej o rezerwacji noclegów bez prowizji portali piszę na stronie ",
          link("strona internetowa dla pensjonatu", "/pl/strona-internetowa-dla-pensjonatu"),
          ".",
        ),

        h2("Strona winnicy w kilku językach: goście z Niemiec, Czech i Słowacji"),
        p("Winnice w Lubuskiem odwiedzają goście zza zachodniej granicy, na Podkarpacie i do Małopolski przyjeżdżają Słowacy i Czesi, a w Krakowie i okolicach turyści z całego świata. Wersja niemiecka lub angielska przyciąga gości, których strona tylko po polsku nie zatrzyma. Każda wersja ma własne adresy, przetłumaczone podstrony degustacji i win oraz przełącznik, który prowadzi do tej samej podstrony w innym języku, a nie na stronę główną. Ceny i godziny wpisujesz raz i są takie same w każdej wersji. Opisy win tłumaczy ktoś, kto zna słownictwo winiarskie."),
        p(
          "Jak planuję wersje językowe, opisuję na stronie ",
          link("tworzenie stron wielojęzycznych", "/pl/oferty/tworzenie-stron-wielojezycznych"),
          ".",
        ),

        h2("Zdjęcia i projekt graficzny strony winnicy: winorośl, piwnica, ludzie"),
        p("Winnica sprzedaje miejsce i nastrój, więc zdjęcia niosą stronę bardziej niż tekst. Warto zaplanować sesję w kilku porach roku: pąki wiosną, zielone rzędy latem, winobranie, piwnica z beczkami lub zbiornikami, winiarz przy pracy, goście przy stole, wieczorne światło. Zdjęcia stockowe z Toskanii widać od razu i nijak nie pasują do winnicy pod Zieloną Górą."),
        p("Wokół zdjęć projekt zostaje spokojny: kilka kolorów zaczerpniętych z etykiet, krój pisma pasujący do etykiety, dużo miejsca i jeden kolor zarezerwowany dla przycisków rezerwacji. Tak działa strona premium, którą zbudowałem dla warszawskiej firmy remontowo-inwestycyjnej. Zdjęcia zapisuję w nowoczesnych formatach i rozmiarach dla każdego ekranu, żeby galeria otwierała się szybko także na słabym zasięgu."),

        h2("Strona winnicy, którą odczytają ChatGPT i Google AI Overviews"),
        p("Gdy ktoś pyta ChatGPT albo podsumowania AI w Google, która winnica w okolicy przyjmuje grupy lub organizuje kolacje z winiarzem, odpowiedź powstaje z tekstu, który asystent może przeczytać. Dlatego formy wizyt, ceny, godziny, zasady, wina i warunki klubu zapisuję w kodzie strony jako tekst, a nie na grafikach czy w PDF-ie, dodaję dane strukturalne dla winnicy, wydarzeń i win i pilnuję, żeby zgadzały się z wizytówką Google. Na stronie Giuseppe, psychoterapeuty z Mediolanu, robots.txt ma osobne reguły dla robotów AI, a praktyka i usługi są opisane danymi strukturalnymi; ChatGPT już przywołuje jego nowe podstrony w odpowiedziach."),
        p(
          "O stałej pracy nad takimi odpowiedziami więcej w ofercie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ", a widoczność w Google i Mapach na stronie ",
          link("pozycjonowanie winnicy", "/pl/pozycjonowanie-winnicy"),
          ".",
        ),

        h2("Kreator, szablon czy projekt od zera: jaka strona dla winnicy"),
        p("Strona z kreatora albo profil na Facebooku wystarczą winnicy, która dopiero rusza i przyjmuje kilka grup w miesiącu. Ograniczenia widać, gdy dochodzą kalendarz degustacji, klub wina, wesela, noclegi i druga wersja językowa: wszystko ląduje na jednej podstronie, rezerwacje wracają do telefonu, a w wyszukiwarce strona prawie nie istnieje. Projekt od zera układa się wokół Twojej oferty, a kod, treści i domena należą do winnicy."),
        p(
          "Przykład z portfolio: ScanM2 (skanowanie 3D i modele BIM) miał stronę z kreatora, z której przez dwa lata nie przyszło żadne zapytanie. Przeniosłem ją na WordPressa bez zmiany wyglądu — ruch z Google jest dziś 29 razy większy, a zapytania spływają co tydzień. Przeprowadzkę strony z zachowaniem pozycji opisuje oferta ",
          link("przebudowa strony internetowej", "/pl/oferty/przebudowa-strony-internetowej"),
          " — razem z mapą przekierowań starych adresów.",
        ),

        h2("Ile kosztuje strona internetowa dla winnicy"),
        p("Za projekt graficzny nie płacisz osobno — jest wliczony w cenę wykonania."),
        li("Prosta strona winnicy — strona główna, formy wizyt, wina, dojazd, kontakt i przyciski rezerwacji: 3000–6000 zł."),
        li("Pełna strona winnicy z podstronami degustacji, rezerwacją online, klubem wina, wydarzeniami, weselami, bramką 18+ i wersjami językowymi: od 8500 zł."),
        p(
          "Kolejne etapy od briefu do uruchomienia opisuję w zakładce ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ", a wszystkie stawki zebrane są w ",
          link("cenniku", "/pl/cennik"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strona internetowa dla winnicy: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona internetowa dla winnicy?", "Prosta strona to 3000–6000 zł, rozbudowana — z rezerwacją online, klubem wina, wydarzeniami, weselami i wersjami językowymi — od 8500 zł. Projekt graficzny wliczam w obie kwoty; dokładną, stałą cenę podam, gdy opiszesz winnicę."],
          ["Ile trwa wykonanie strony dla winnicy?", "Kod to mniejsza część pracy — typowo cała strona powstaje w cztery do siedmiu tygodni, a tempo wyznaczają opisy degustacji i win, regulamin klubu i sesja zdjęciowa. Dobry moment na start to zima albo wiosna; we wrześniu i październiku winnica myśli o winobraniu, nie o akceptowaniu podstron."],
          ["Czy przez stronę można sprzedawać wino?", "To zależy od Twoich zezwoleń i aktualnych przepisów, które w Polsce budzą wątpliwości przy sprzedaży na odległość. Najczęściej proponuję rezerwację butelek z odbiorem w winnicy, a sklep tylko wtedy, gdy masz potwierdzenie, że to dozwolone."],
          ["Czy strona winnicy musi mieć bramkę 18+?", "Na stronie o winie warto ją mieć. Robię ją lekką: jedno pytanie, zapamiętana odpowiedź i treść dostępna dla wyszukiwarek. Wiek przy odbiorze wina i tak sprawdza obsługa."],
          ["Czy goście mogą zapłacić za degustację z góry?", "Tak, przez BLIK, Przelewy24 albo inną bramkę płatności, z zasadami zwrotu widocznymi przed płatnością. Przedpłata ogranicza puste miejsca po rezerwacjach, z których nikt nie przyjechał."],
          ["Czy sam zmienię terminy, ceny i wydarzenia?", "Tak. Terminy degustacji, ceny, wina i wydarzenia edytujesz w prostym panelu — na WordPressie albo w CMS-ie typu Sanity — także z telefonu, a układ strony się nie rozjeżdża."],
          ["Czy pracujesz z winnicami spoza Warszawy?", "Tak, z całej Polski. Cały projekt prowadzę zdalnie — rozmowy, akceptacje, uruchomienie — po polsku, a wersje dla gości z zagranicy mogę przygotować po angielsku i rosyjsku; niemiecką czy czeską dostarcza tłumacz."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową dla winnicy: co mi wysłać"),
        p(
          "Wyślij link do obecnej strony albo profilu na Facebooku lub Instagramie, listę form wizyt z cenami, informacje o klubie wina, wydarzeniach, weselach i noclegach, języki, których potrzebujesz, oraz kilka zdjęć winnicy. Odeślę proponowaną listę podstron i jedną stałą cenę. Skorzystaj z ",
          link("formularza powyżej", "#quote"),
          " albo napisz na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
