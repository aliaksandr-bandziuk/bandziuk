// Landing page fixture: Strona internetowa dla banku (PL), group
// «bank-website». New page, market version — not a translation of
// bank-website.en.
//
// Why (07.11.2026). EN measured: «bank website design» 320, «web design for
// banks» 320, «bank web design» 320. PL has no measured phrase above the
// threshold; the page is made under the owner's rule that an industry with
// demand in one language gets pages in all three.
// See claude/industry-delta-2026-11-07.md.
//
// PL buyer: banki spółdzielcze (several hundred, grouped around SGB and BPS),
// each with branches in small towns and a site that was built once and left.
// They hire a contractor instead of running a tender.
//
// Local specifics: obowiązkowe informacje i RRSO w komunikacji kredytowej,
// tabele opłat i prowizji oraz regulaminy jako PDF-y, ustawa o dostępności
// (wdrożenie dyrektywy 2019/882) obowiązująca usługi bankowe od 28.06.2025,
// ostrzeżenia banków przed domenami podobnymi do bankowych.
//
// NOT on this page: pozycjonowanie (/pl/pozycjonowanie-strony-banku), bankowość
// elektroniczna za logowaniem, fintech.
//
// Owner's rules: projekt wliczony w cenę, osobno nie sprzedawany; każda strona
// porusza wyszukiwanie AI; nigdy nie mówimy, że nie ma klientów z branży.
import { p, h2, li, link, k } from "./pt";

export const bankWebsitePl = {
  lang: "pl",
  group: "bank-website",
  slug: "strona-internetowa-dla-banku",
  title: "Strona internetowa dla banku",
  heading: "Strona internetowa dla banku i banku spółdzielczego: witryna, która stoi obok logowania",
  excerpt:
    "Projektuję i buduję strony dla banków i banków spółdzielczych: warunki produktów trzymane jako dane, jedna domena bez podobnych adresów, dokumenty możliwe do przeczytania, dostępność jako wymóg i budowa, która przechodzi audyt bezpieczeństwa dostawcy. Projekt w cenie, od 8500 zł.",
  seo: {
    metaTitle: "Strona dla banku: budowa i projekt od 8500 zł",
    metaDescription:
      "Strona internetowa dla banku: warunki produktów jako dane, jedna domena, czytelne dokumenty, dostępność i audyt bezpieczeństwa. Projekt w cenie, od 8500 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt w cenie", "Od 8500 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Konta i karty", "Kalkulator kredytu", "Znajdź placówkę", "Zaloguj się"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Strona banku: struktura, podstrony produktów i placówek, projekt w cenie", price: 8500, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Landing page pod jeden produkt bankowy, projekt i wdrożenie", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Przebudowa strony banku z zachowaniem pozycji i dokumentów", price: 4000, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co buduję",
      title: "Co obejmuje budowa strony internetowej dla banku",
      items: [
        { _key: k("o"), iconName: "database", title: "Warunki jako dane", text: "Zatwierdzasz raz, pojawia się wszędzie" },
        { _key: k("o"), iconName: "shield-check", title: "Jedna domena", text: "Sam adres jest zabezpieczeniem" },
        { _key: k("o"), iconName: "file-text", title: "Czytelne dokumenty", text: "Tabele opłat jako podstrony, nie tylko PDF" },
        { _key: k("o"), iconName: "map-pin", title: "Podstrona każdej placówki", text: "Godziny, usługi, bankomat, dostępność" },
        { _key: k("o"), iconName: "eye", title: "Dostępność od początku", text: "Dla usług bankowych to wymóg prawny" },
        { _key: k("o"), iconName: "file-lock", title: "Budowa pod audyt dostawcy", text: "Ankiety, skrypty, przepływy danych" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Gdzie pęka strona banku: styk witryny i logowania"),
        p("Projektuję i buduję strony dla banków i banków spółdzielczych, a projekt graficzny jest częścią budowy, nie osobną fakturą. Pierwsza rzecz do ustalenia to styk. Bank prowadzi dwie rzeczy, które klient przeżywa jako jedną: publiczną stronę opisującą produkty i aplikację bankową za logowaniem. To różne systemy o różnym profilu ryzyka, a prawie każdy kosztowny błąd na stronie banku dzieje się tam, gdzie się spotykają."),
        p("W praktyce znaczy to tyle: strona publiczna nie udaje logowania, nie zbiera niczego, co wygląda jak dane do logowania, i nie mieszka na domenie podobnej do głównej. Mikrostrona kampanijna pod własnym adresem uczy klientów, że adresom podobnym do bankowego można ufać — czyli dokładnie nawyku, na którym żyje phishing — a przy okazji dzieli moc wypracowaną przez lata."),

        h2("Warunki produktów trzymamy jako dane, a nie jako przepisany tekst"),
        p("Na większości bankowych stron oprocentowanie występuje w sześciu miejscach: na podstronie produktu, w tabeli porównawczej, w banerze kampanii, w FAQ, w PDF-ie i na starym landingu, o którym nikt nie pamięta. Gdy zgodność zatwierdza nową liczbę, pięć z nich zostaje poprawionych, a jedno nie — i właśnie to jedno klient zrobi zrzutem ekranu."),
        p("Dlatego warunki są modelowane jako dane z datą obowiązywania: zatwierdzone raz, publikowane wszędzie, a poprzednia wartość trafia do archiwum zamiast zostać nadpisana. Znika cała kategoria ryzyka, a przy okazji to właśnie sprawia, że te same warunki są czytelne dla wyszukiwarki i asystentów AI, zamiast siedzieć w obrazku z tabelą."),

        h2("Tabele opłat, regulaminy i dokumenty, których nie da się przeczytać"),
        p("Banki publikują dużo PDF-ów i muszą to robić. Psuje się wtedy, gdy PDF jest jedyną wersją: tabela opłat istniejąca wyłącznie jako skan jest niewidoczna dla wyszukiwarki, nieużyteczna dla czytnika ekranu i nieczytelna na telefonie. Budowa zostawia dokument tam, gdzie prawnie należy, i stawia obok czytelną podstronę: ta sama treść tekstem, z plikiem podlinkowanym."),

        h2("Dostępność jest wymogiem, zanim stanie się zaletą"),
        p("Dla usług bankowych dostępność obowiązuje od 28 czerwca 2025 roku i w praktyce decyduje o wyborach projektowych, zamiast je zdobić: kontrast, który przetrwa słoneczny przystanek, formularze działające z klawiatury, błędy ogłaszane, a nie tylko pokazane na czerwono, i struktura nagłówków, która jest tą samą strukturą, którą czyta wyszukiwarka. Dokładanie tego po starcie kosztuje więcej, a termin się nie przesunie."),

        h2("Audyt bezpieczeństwa dostawcy i jego wpływ na harmonogram"),
        p("Bank nie wybiera wykonawcy po samym portfolio. Będzie ankieta: gdzie trafiają dane, jakie skrypty zewnętrzne się ładują, kto ma do czego dostęp, jak zatwierdzane są wdrożenia. Na ten etap planuje się tygodnie, a nie dni."),
        li("skrypty zewnętrzne trzymane są z dala od podstron z formularzami, a analityka skonfigurowana tak, żeby nie mogła czytać tego, co wpisuje użytkownik;"),
        li("system zarządzania treścią ma role i krok akceptacji, więc za każdą publikacją stoi osoba, która ją zatwierdziła;"),
        li("hosting, logi i kopie zapasowe są opisane na piśmie przed startem, bo o to pyta ankieta;"),
        li("wszystko jest Wasze od pierwszego dnia: repozytorium, domena, konto hostingowe i każdy dostęp."),

        h2("Przebudowa strony banku bez utraty pozycji i dokumentów"),
        p(
          "Większość projektów bankowych to przebudowy, a ryzyko jest takie samo jak wszędzie plus jedno: dokumenty. Każdy istniejący adres trafia do mapy, a każdy zmieniony dostaje przekierowanie — razem z linkami do PDF-ów z tabelami opłat, na które wskazują inne serwisy i Wasze własne pisma. Metoda jest opisana na stronie ",
          link("przebudowa strony internetowej", "/pl/oferty/przebudowa-strony-internetowej"),
          ", a praca nad pozycjami później to ",
          link("pozycjonowanie strony banku", "/pl/pozycjonowanie-strony-banku"),
          ".",
        ),

        h2("Ile kosztuje strona internetowa dla banku"),
        p(
          "Strona od 8500 zł z projektem w cenie — nie sprzedaję makiet, których nie zamierzam zbudować. Landing page pod jeden produkt 3000–6000 zł. Przebudowa z zachowaniem pozycji i dokumentów od 4000 zł. Cenę przesuwa liczba produktów, liczba placówek, liczba języków, to, czy warunki przychodzą z systemu, który już macie, i długość akceptacji. Liczby są na stronie ",
          link("cennik", "/pl/cennik"),
          ".",
        ),

        h2("Ile trwa budowa strony dla banku"),
        p("Landing produktowy dwa–trzy tygodnie, pełna strona cztery–sześć, strona z siecią placówek i biblioteką dokumentów dłużej i wyceniana osobno. Wydłuża to prawie nigdy nie kod: akceptacje, audyt bezpieczeństwa i ustalanie brzmienia warunków produktów. W terminie kończą się projekty, w których po Waszej stronie decyduje jedna osoba i akceptuje jedna osoba."),
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: katalogi, serwisy wielojęzyczne i praca w ograniczeniach",
      subtitle:
        "Wielojęzyczna platforma nieruchomości z katalogiem, filtrami i widocznością zbudowaną bez kupowania linków; strona agencji edukacyjnej, która urosła z jednego kraju do dziesięciu; strona firmy remontowo-inwestycyjnej w premium; wielojęzyczny serwis usług studenckich; strona konsultantki zbudowana wokół jednej specjalizacji.",
      picks: [
        "build-and-optimize-a-multilingual-real-estate-platform",
        "seo-case-study-education-agency",
        "renovation-and-investment-website-with-premium-design",
        "full-multilingual-website-development-and-seo-for-student-services",
        "consultant-website-design-retail-analytics",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej dla Waszego banku",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: co zbuduję, w jakich językach i ile to kosztuje.",
      contextLabel: "Nazwa instytucji lub adres strony",
      contextPlaceholder: "Link albo nazwa",
      buttonText: "Wyślij i otrzymaj wycenę",
      note: "Albo napiszcie na WhatsApp — odpowiadam tak samo szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Czego potrzebujecie?", options: ["Nowej strony", "Przebudowy obecnej", "Landinga pod jeden produkt", "Jeszcze nie wiemy"] },
        { _key: k("z"), question: "Gdzie dziś są warunki produktów?", options: ["Wpisane ręcznie w podstrony", "W PDF-ach", "W systemie, który mamy", "Nie wiem"] },
        { _key: k("z"), question: "Ile macie placówek?", options: ["Tylko online", "Do 10", "Od 10 do 50", "Powyżej 50"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Jak zbudować stronę banku czytelną dla asystentów AI (GEO, AEO)"),
        p("Klienci coraz częściej pytają asystenta, zanim zapytają bank: konto bez opłat dla małej firmy, kredyt dla osoby na działalności, lokata z możliwością wcześniejszego zerwania. Asystent odpowiada z tekstu, który potrafi przeczytać. Bank, którego warunki leżą w obrazkach i PDF-ach, jest cytowany z drugiej ręki przez porównywarkę, a porównywarki bywają nieaktualne — więc własne warunki docierają do klienta w wersji, której bank nie napisał."),
        p(
          "Budowa, która tego unika, jest zwyczajna: warunki tekstem, dane strukturalne zgodne z tym, co widać, jedna nazwa produktu wszędzie, treść obecna zanim wykona się jakikolwiek skrypt. Doprowadzenie istniejącej strony do tego stanu to ",
          link("przygotowanie strony do wyszukiwania AI", "/pl/oferty/przygotowanie-strony-do-wyszukiwania-ai"),
          ", a sprawdzenie, co asystenci mówią dziś, to ",
          link("audyt widoczności w AI", "/pl/oferty/audyt-widocznosci-w-ai"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strona internetowa dla banku: częste pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona internetowa dla banku?", "Od 8500 zł z projektem w cenie, landing page pod jeden produkt 3000–6000 zł, przebudowa z zachowaniem pozycji i dokumentów od 4000 zł. Cenę przesuwa liczba produktów, placówek i języków oraz długość akceptacji."],
          ["Czy można kupić sam projekt graficzny?", "Nie, i powód jest praktyczny: makieta, której nikt nie zobowiązał się zbudować, to miejsce, gdzie projekty bankowe tracą pieniądze, bo wycina się z nich zwykle to, co dotyczy dostępności. Projekt idzie razem z budową i mieści się w jej cenie."],
          ["Czy budujecie bankowość elektroniczną?", "Nie. Zakresem jest strona publiczna: produkty, warunki, dokumenty, placówki, formularze. Aplikacja za logowaniem to inny system o innym profilu ryzyka, a strona jest budowana tak, żeby stać obok niej, a nie ją udawać."],
          ["Będziecie musieli przejść audyt bezpieczeństwa. To problem?", "To standard. Ankiety o przepływ danych, skrypty zewnętrzne, dostępy i akceptację wdrożeń są normalne w pracy z bankiem, a ten etap planuję w tygodniach, zamiast odkrywać go na końcu."],
          ["Nasze oprocentowanie często się zmienia. Jak uniknąć nieaktualnych liczb?", "Trzymając warunki jako dane z datą obowiązywania zamiast wpisywać je w podstrony. Zatwierdzona liczba publikuje się raz i pojawia wszędzie, gdzie jest używana, a poprzednia trafia do archiwum."],
          ["Czy możemy zostawić nasze PDF-y z tabelami opłat?", "Tak i powinniście. Budowa dokłada obok czytelną podstronę z tą samą treścią jako tekstem, więc plik zostaje tam, gdzie prawnie należy, a treść jest użyteczna na telefonie, dla czytnika ekranu i dla wyszukiwarki."],
          ["Czy pracujecie z klientami regulowanymi?", "Tak. Praca regulowana to teksty pod akceptacją, obowiązkowe informacje i publikacja z udziałem kilku osób — to część metody, a nie przeszkoda."],
          ["Czy strona będzie dostępna cyfrowo?", "Tak, a dla usług bankowych jest to wymóg prawny, nie preferencja. Wchodzi do budowy od początku, bo dokładanie dostępności po starcie kosztuje więcej i zwykle tak wygląda."],
          ["Czy przebudowa nie zabierze nam ruchu z wyszukiwarki?", "Nie, jeśli zrobić mapę adresów i przekierowania — a dokumenty dostają to samo traktowanie co podstrony, razem z PDF-ami, na które wskazują inne serwisy i Wasze pisma."],
          ["Czy strona będzie nasza?", "Tak: kod, repozytorium, domena, konto hostingowe, treści i wszystkie dostępy. Nic nie zostaje u mnie jako dźwignia."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Jak zacząć projekt strony dla banku: co mi przysłać"),
        p("Napiszcie, czy to nowa strona, czy przebudowa, ile macie produktów i placówek, gdzie dziś mieszkają warunki, jakich języków potrzebujecie i ile zwykle trwa runda akceptacji. Przyślijcie link do obecnej strony, jeśli jest. Odpowiem w ciągu jednego dnia roboczego: co zbuduję, w jakich językach i ile to kosztuje."),
      ],
    },
  ],
};
