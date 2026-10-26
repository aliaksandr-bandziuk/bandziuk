// Landing page fixture: Strona internetowa dla salonu optycznego (PL), group
// «optometrist-website-design». Market version for Polish salony optyczne and
// gabinety optometryczne, not a translation of optometrist-website-design.en.
// In PL this is a development page that includes design: the market searches
// for «strona dla salonu optycznego / optyka», not for «projektowanie».
// Semantic core: ref/medical-practices.md has no PL volumes for this group.
// Target phrases from the brief: «strona internetowa dla salonu optycznego»
// (slug, H1, H2), salon optyczny, optometrysta, badanie wzroku. EN reference:
// optometrist website design 90.
// Intent: ref/intent-check-medical-practices.md — EN «optometrist website
// design» vs «optometry seo»: 0 shared URLs → separate pages; the PL SEO page
// is /pl/pozycjonowanie-salonu-optycznego.
// Polish angles: zapis na badanie wzroku (Booksy, ZnanyLekarz, formularz),
// katalog opraw zamiast sklepu, soczewki i ponowne zamówienie, czytelność dla
// słabowidzących (WCAG), informacja zamiast reklamy, RODO, kilka salonów,
// wersje językowe dla klientów z Ukrainy i cudzoziemców.
// NOT on this page: SEO work — wizytówki, opinie, podstrony pod frazy
// (/pl/pozycjonowanie-strony-salonu-optycznego); strony lekarzy i przychodni
// (/pl/strona-internetowa-dla-lekarza); sklep internetowy z okularami.
// Owner’s rule: design pages carry the H2 «… którą ChatGPT i przeglądy AI w
// Google potrafią przeczytać»; Giuseppe’s case; NDA medical system once.
import { p, h2, li, ol, link, k } from "./pt";

export const optometristWebsiteDesignPl = {
  lang: "pl",
  group: "optometrist-website-design",
  slug: "strona-internetowa-dla-salonu-optycznego",
  title: "Strona internetowa dla salonu optycznego",
  heading: "Strona internetowa dla salonu optycznego",
  excerpt:
    "Tworzę strony internetowe dla salonów optycznych i gabinetów optometrycznych: zapis na badanie wzroku w kilku kliknięciach, katalog opraw z Waszych półek, ponowne zamówienie soczewek i tekst, który przeczyta także ktoś, kto przyszedł do Was, bo słabo widzi.",
  seo: {
    metaTitle: "Strona www dla salonu optycznego i optyka | Bandziuk",
    metaDescription:
      "Strona internetowa dla salonu optycznego: zapis na badanie wzroku, katalog opraw, soczewki, czytelność dla słabowidzących, RODO, dane dla AI. Od 3000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt + wykonanie, jedna cena", "Od 3000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Umów badanie wzroku", "Nasze oprawki", "Zamów soczewki", "Salony i godziny"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona internetowa dla salonu optycznego lub optometrysty", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Strona salonu optycznego z podstronami salonów i specjalistów, zapisem na badanie, katalogiem opraw, zamawianiem soczewek i testem dostępności", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co dostajesz ze stroną internetową dla salonu optycznego",
      items: [
        { _key: k("o"), iconName: "gauge", title: "Czytelna bez okularów", text: "Duży tekst, mocny kontrast, działa przy powiększeniu" },
        { _key: k("o"), iconName: "plug", title: "Zapis na badanie wzroku", text: "Z Booksy, ZnanyLekarz albo przez krótki formularz" },
        { _key: k("o"), iconName: "image", title: "Katalog opraw z Waszych półek", text: "Marki, kształty, ceny i rezerwacja przymiarki" },
        { _key: k("o"), iconName: "phone", title: "Soczewki bez dzwonienia", text: "Ponowne zamówienie dla stałych klientów" },
        { _key: k("o"), iconName: "shield-check", title: "Zapis bez danych o zdrowiu", text: "Imię, telefon i termin — wyniki zostają w salonie" },
        { _key: k("o"), iconName: "sparkles", title: "Salony i marki zrozumiałe dla AI", text: "Godziny, specjaliści i oprawki zapisane tekstem" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona salonu optycznego", value: "3000–6000 zł", note: "projekt w cenie" },
        { _key: k("r"), label: "Kilka salonów, zapisy, katalog opraw, soczewki", value: "od 8500 zł", note: "projekt w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: strona prywatnej praktyki i katalogi, które zbudowałem",
      subtitle:
        "Pierwsza jest strona prywatnej praktyki psychoterapeuty w Mediolanie: spokojny projekt dla zdenerwowanych odwiedzających, mapa gabinetów i 468 wpisów przeniesionych bez utraty adresów. Dalej katalog nieruchomości z filtrami i mapą — ten sam układ przyda się katalogowi opraw — strona warszawskiej firmy remontowej z dopracowanym projektem, przebudowana strona warszawskiego warsztatu i strona wielojęzyczna dla dziesięciu krajów.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "psychotherapist-website-milan",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "renovation-and-investment-website-with-premium-design",
        "felgilab-wordpress-rebuild",
        "full-multilingual-website-development-and-seo-for-student-services",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej dla salonu optycznego",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: proponuję układ strony głównej, zapisu na badanie i katalogu opraw oraz podaję stałą cenę.",
      contextLabel: "Nazwa salonu lub obecna strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Jak klienci zapisują się teraz na badanie wzroku?", options: ["Telefonicznie", "Przez Booksy", "Przez ZnanyLekarz", "Przychodzą bez zapisu"] },
        { _key: k("z"), question: "Co strona ma pokazać najpierw?", options: ["Badanie wzroku", "Oprawki i marki", "Soczewki kontaktowe", "Kilka salonów"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Strona internetowa dla salonu optycznego, którą robię, obejmuje strukturę, projekt, wykonanie i podłączenie zapisów — wszystko od jednej osoby, w jednej cenie. Pracuję z niezależnymi salonami, gabinetami optometrycznymi i salonami z lekarzem okulistą. Taką stronę często otwiera ktoś bez okularów, na telefonie, czasem tuż po badaniu z rozszerzonymi źrenicami — i od tego zaczynam projekt."),

        h2("Strona internetowa dla salonu optycznego: pierwszy ekran z zapisem na badanie wzroku"),
        p("Na pierwszym ekranie klient powinien bez przewijania znaleźć cztery rzeczy: przycisk „Umów badanie wzroku”, najbliższy salon z dzisiejszymi godzinami i numerem do kliknięcia, wejście do katalogu opraw oraz zamówienie soczewek albo informację o odbiorze okularów. Nagłówek mówi wprost, kim jesteście: „Badanie wzroku, okulary i soczewki — Lublin, ul. …”, a nie „Zobacz świat wyraźniej”."),
        p("Slajdery z kampaniami marek wyglądają dobrze w prezentacji, ale na telefonie spychają te cztery rzeczy w dół. Zostawiam jeden kolor akcentu dla przycisku zapisu i spokojne tło."),

        h2("Strona salonu optycznego czytelna dla osób słabowidzących: WCAG w praktyce"),
        p("Do salonu optycznego trafia więcej osób słabo widzących niż do niemal każdej innej firmy, więc czytelność jest tu sednem zamówienia. Projekt trzyma się wytycznych WCAG i jest testowany:"),
        li("tekst na telefonie co najmniej 18 pikseli, bez jasnoszarych liter na białym tle"),
        li("kontrast co najmniej na poziomie AA, także na przyciskach i w polach formularzy"),
        li("układ, który się nie rozsypuje przy powiększeniu 200% i dużej czcionce systemowej"),
        li("żadnego tekstu w grafikach — cennik i godziny zawsze jako tekst"),
        li("widoczne obramowanie zaznaczonego elementu i pełna obsługa klawiaturą"),
        p("Prosty test, który robię przed oddaniem strony: otworzyć ją na telefonie bez okularów. Jeśli godziny salonu i przycisk zapisu da się odczytać od razu, projekt spełnia swoje zadanie."),

        h2("Zapis na badanie wzroku na stronie salonu: Booksy, ZnanyLekarz albo formularz"),
        p("Zapis prowadzi w kolejności, w jakiej myśli klient: salon, rodzaj wizyty — badanie u optometrysty, dobór soczewek, badanie dziecka, wizyta u okulisty — potem termin. Za przyciskiem jest to, czego już używacie: kalendarz z Booksy, z ZnanyLekarz, z programu salonu albo krótki formularz prośby o termin, po którym salon oddzwania. Na telefonie przyciski „Umów” i „Zadzwoń” są przypięte u dołu ekranu."),
        p("Strona potwierdzenia mówi, co zabrać — obecne okulary, opakowania soczewek, wcześniejsze recepty — i czy badanie może obejmować krople rozszerzające źrenice, żeby nikt nie planował od razu jazdy samochodem."),

        h2("Katalog opraw na stronie salonu optycznego: marki, zdjęcia i rezerwacja przymiarki"),
        p("Oprawki to część oferty, którą ludzie przeglądają z przyjemnością, a katalog daje im powód, żeby przyjść do salonu. To katalog, nie sklep: filtry po marce, kształcie, materiale, rozmiarze i cenie, zdjęcia zrobione na Waszych półkach i przycisk „Zarezerwuj przymiarkę”, który wysyła model i salon do obsługi. Podobny układ — filtry, mapa, karty z danymi — zbudowałem dla katalogu nieruchomości na Cyprze."),
        p("Obsługa dodaje oprawki w prostym panelu: jeden wpis na model, kilka zdjęć, marka i widełki ceny. Wirtualną przymiarkę da się osadzić, ale mocno spowalnia stronę na telefonie, więc dodaję ją tylko wtedy, gdy klienci naprawdę o nią pytają. Każda marka ma też własną podstronę z krótkim opisem, zdjęciami modeli i listą salonów, w których jest dostępna."),

        h2("Soczewki kontaktowe i ponowne zamówienie na stronie salonu optycznego"),
        p("Stały klient noszący soczewki potrzebuje jednej krótkiej ścieżki: imię, telefon i salon, z którego odbierze zamówienie. Obsługa sprawdza jego dane w kartotece i odpisuje z ceną i terminem odbioru. W formularzu nie wpisuje się mocy soczewek ani nie wysyła zdjęć recepty mailem. To prosty sposób, żeby klient nie odszedł do sklepu internetowego."),
        p("Cennik pokazuję w prostej tabeli: badanie wzroku, dobór soczewek, widełki szkieł jednoogniskowych i progresywnych. Jeśli badanie jest bezpłatne przy zakupie okularów, warunki stoją tuż obok ceny, a nie w przypisie drobnym drukiem. Salon, który realizuje zlecenia NFZ na okulary, dostaje przy cenniku krótką ramkę: co przynieść i od czego zależy dopłata."),

        h2("Optometrysta i okulista na stronie salonu: profile, kwalifikacje i spokojny projekt"),
        p("Klient chce wiedzieć, kto zbada mu wzrok. Każdy optometrysta i okulista ma profil: prawdziwe zdjęcie z gabinetu badań, wykształcenie, numer prawa wykonywania zawodu, jeśli go ma, języki i dni pracy w poszczególnych salonach. Treści są informacją, nie reklamą: bez obietnic „idealnego widzenia” i bez porównań z innymi salonami. Lekarza okulistę obowiązuje zakaz reklamy, a zasady dla optometrystów warto sprawdzić na bieżąco."),
        p("Dla Giuseppe, psychoterapeuty z Mediolanu, zaprojektowałem spokojną stronę dla osób w lęku: ciemne tło przeplatane jasnymi pasami, krój szeryfowy z prawdziwą kursywą i mapa trzech gabinetów. Salon optyczny potrzebuje jaśniejszej palety, ale tej samej powściągliwości: jeden kolor akcentu, dużo miejsca, nic, co się rusza, gdy ktoś czyta."),

        h2("Formularze i RODO na stronie salonu optycznego"),
        p("Dane o zdrowiu, w tym wyniki badania wzroku, to w RODO szczególna kategoria danych. Strona zbiera ich jak najmniej:"),
        li("formularz zapisu ma cztery pola — imię, telefon, salon, termin — i nie ma miejsca na opis dolegliwości"),
        li("karty pacjenta i wyniki badań zostają w programie salonu, z którego dostawcą macie umowę powierzenia"),
        li("klauzula informacyjna jest przy formularzu, a analityka nie działa na stronach zapisu"),
        p("Kilka lat temu pracowałem przy systemie medycznym z danymi pacjentów; obejmuje go NDA, więc nie podaję nazwy. Wyniosłem stamtąd prostą zasadę: strona trzyma tylko tyle danych o zdrowiu, ile naprawdę musi. Czy Wasza konfiguracja spełnia przepisy, ocenia inspektor ochrony danych albo prawnik."),

        h2("Strona salonu optycznego, którą ChatGPT i przeglądy AI w Google potrafią przeczytać"),
        p("Klienci pytają ChatGPT albo przegląd AI w Google, który salon w okolicy bada wzrok dzieciom, prowadzi daną markę opraw albo jest otwarty w sobotę. Asystenci odpowiadają na podstawie tego, co mogą przeczytać, więc salony, specjaliści, usługi, godziny i marki są zapisane tekstem i danymi strukturalnymi, zgodnie z wizytówkami Google."),
        p(
          "Do mnie Giuseppe trafił właśnie z ChatGPT, a dziś ChatGPT cytuje już nowe podstrony jego praktyki. Stałą pracę nad obecnością w odpowiedziach asystentów opisuję na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ", a widoczność w Google dla badań i marek opraw — na stronie ",
          link("pozycjonowanie salonu optycznego", "/pl/pozycjonowanie-strony-salonu-optycznego"),
          ".",
        ),

        h2("Kilka salonów i wersje językowe na stronie salonu optycznego"),
        p("Firma z kilkoma salonami dostaje podstronę dla każdego: adres, wejście, parking, godziny, osoby badające i marki dostępne na miejscu. W miastach, gdzie wielu klientów to osoby z Ukrainy albo cudzoziemcy pracujący w Polsce, przydaje się wersja ukraińska lub angielska — z osobnymi adresami i informacją, kto bada w danym języku, a nie z jedną przetłumaczoną stroną główną. Mapa wszystkich salonów na jednej podstronie pomaga wybrać najbliższy, a każdy punkt na mapie prowadzi do podstrony salonu, nie do ogólnego kontaktu."),

        h2("Gotowa strona z kreatora czy strona salonu optycznego na zamówienie"),
        p("Kreator wystarczy salonowi, który potrzebuje adresu, godzin i numeru telefonu. Ograniczenia pojawiają się przy katalogu opraw, kilku salonach, zapisach i czytelności dla słabowidzących. Strona na zamówienie należy do Was — kod, treści i domena — a przeniesienie ze starej strony robię bez utraty pozycji: każdy stary adres przekierowuję na nowy. U Giuseppe przeniosłem tak wszystkie 468 wpisów bloga."),

        h2("Jak powstaje strona internetowa dla salonu optycznego"),
        ol("Brief. Przesyłacie listę salonów, osób badających, usług, marek opraw i pytania, które najczęściej słyszy obsługa."),
        ol("Ścieżki. Uzgadniamy na ekranie telefonu trzy najważniejsze: zapis na badanie, katalog opraw, zamówienie soczewek."),
        ol("Projekt. Najpierw rysuję w pełni stronę główną, zapis, podstronę salonu i katalog; reszta korzysta z gotowych elementów."),
        ol("Wykonanie i przekazanie. Podłączam zapisy, testuję formularze i dostępność, a obsługa dostaje instrukcję dodawania opraw i zmiany godzin."),
        p(
          "Strona Giuseppe powstała w 44 dni robocze od pierwszej linii kodu do przekazania, z instrukcjami i nagraniami wideo. Jak tworzę strony ogólnie, opisuję na stronie ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          "; gabinety lekarskie i przychodnie mają osobną stronę ",
          link("strona internetowa dla lekarza", "/pl/strona-internetowa-dla-lekarza"),
          ".",
        ),

        h2("Ile kosztuje strona internetowa dla salonu optycznego"),
        li("Prosta strona salonu — badanie wzroku, oprawki według marek, soczewki, cennik, kontakt i zapis: od 3000 do 6000 zł."),
        li("Strona z podstronami salonów i specjalistów, zapisem na badanie, katalogiem opraw z filtrami, zamawianiem soczewek i testem dostępności: od 8500 zł."),
        p(
          "W obu wariantach projekt graficzny nie jest doliczany osobno. Wszystkie stawki znajdziecie w ",
          link("cenniku", "/pl/cennik"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strona internetowa dla salonu optycznego: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona internetowa dla salonu optycznego?", "Od 3000 do 6000 zł za prostą stronę salonu, od 8500 zł za stronę z kilkoma salonami, zapisem na badanie, katalogiem opraw i zamawianiem soczewek. Projekt graficzny nie jest doliczany. Wystarczy krótki opis salonu, żebym podał stałą kwotę."],
          ["Ile trwa stworzenie strony dla salonu optycznego?", "Najczęściej miesiąc do półtora. Tempo wyznacza liczba salonów i opraw do sfotografowania oraz to, jak szybko optometrysta zatwierdzi teksty o badaniu."],
          ["Czy można podłączyć zapisy z Booksy albo ZnanyLekarz?", "Tak, jeśli serwis udostępnia kalendarz do osadzenia albo link — oba to umożliwiają. Bez tego krótki formularz prośby o termin trafia do obsługi salonu."],
          ["Czy potrzebujemy sklepu internetowego z okularami?", "Zwykle nie. Katalog z filtrami i rezerwacją przymiarki sprowadza klienta do salonu, gdzie dobór szkieł i dopasowanie oprawki robi się porządnie. Sklep z okularami korekcyjnymi to osobny projekt."],
          ["Czy sami zmienimy oprawki, ceny i godziny?", "Tak. Oprawki, cennik, godziny salonów i profile specjalistów edytuje się w prostym panelu, także z telefonu."],
          ["Czy przeniesiecie naszą stronę bez utraty pozycji w Google?", "Tak. Każdy stary adres dostaje przekierowanie na nową podstronę, a dane strukturalne są przenoszone przed uruchomieniem."],
          ["Jak strona salonu optycznego spełnia wymogi RODO?", "Zwykłe formularze nie zbierają danych o zdrowiu, klauzula informacyjna jest przy formularzu, a wyniki badań zostają w programie salonu. Ostateczną ocenę daje inspektor ochrony danych albo prawnik."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową dla salonu optycznego: co mi wysłać"),
        p(
          "Wyślijcie nazwę salonu, link do obecnej strony albo wizytówki Google, adresy salonów, informację, kto bada wzrok, marki opraw, które prowadzicie, i system, w którym przyjmujecie zapisy. Kilka zdjęć salonu i gabinetu badań pomoże mi pokazać pierwszy ekran, który wygląda jak Wasz salon. Odpowiem propozycją układu i stałą ceną. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
