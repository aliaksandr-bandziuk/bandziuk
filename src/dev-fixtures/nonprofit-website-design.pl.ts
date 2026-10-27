// Landing page fixture: Strona internetowa dla fundacji i stowarzyszenia (PL),
// group «nonprofit-website-design». Market version for Polish fundacje,
// stowarzyszenia and OPP, not a translation of nonprofit-website-design.en.
// Semantic core (ref/nonprofits-manufacturers.md|csv, BRIEF.md): «strona
// internetowa dla fundacji» 10 · «strona dla stowarzyszenia» (not measured).
// PL related searches are about NGO jobs and grants (dotacje dla NGO,
// organizacje pozarządowe przykłady) — not targeted; grants appear only as
// «informacja o dofinansowaniu na stronie». No PL PAA.
// Intent (ref/intent-check-nonprofits-manufacturers.md): «strona internetowa
// dla fundacji» and «strona dla stowarzyszenia» share 7 of 10 URLs (grantowo,
// instuweb, najszybsza, stronydlaorganizacji.org, ngo.pl, poradnik.ngo.pl,
// publicystyka.ngo.pl) → one page for both. SERP: studios (instuweb,
// undicom, grafmag) and guides (grantowo, poradnik.ngo.pl) → the guide
// covers the formal side (KRS data, 1,5%, zbiórki, RODO, dostępność).
// Angle: dane z KRS / ewidencji, numer KRS i 1,5% podatku dla OPP, darowizny
// online (operatorzy płatności — general, no integration claimed), zbiórki
// publiczne (zbiorki.gov.pl — general), wolontariat, sprawozdania,
// informacja o dofinansowaniu, RODO and wizerunek, dostępność cyfrowa (WCAG —
// general, «check current rules and the grant agreement»), editing by zarząd
// and wolontariusze. Legal points stated generally, no article numbers.
// Prices: /pl/cennik — prosta strona 3000–6000 zł, pełna strona od 8500 zł,
// projekt graficzny w cenie; same prices as for companies (FAQ says so).
// NOT on this page: pozycjonowanie (/pl/pozycjonowanie-strony-malej-firmy is
// the general SEO page, not linked as a sibling); Google Ads / Ad Grants and
// social media (not offered); multilingual builds in general
// (/pl/oferty/tworzenie-stron-wielojezycznych). Stands alone among the new
// pages: links only PL general website, AI, rebuild and pricing pages.
// Owner’s rules: every page covers AI search; never say there are no clients
// from the visitor’s segment.
import { p, h2, h3, li, ol, link, k } from "./pt";

export const nonprofitWebsiteDesignPl = {
  lang: "pl",
  group: "nonprofit-website-design",
  slug: "strona-internetowa-dla-fundacji",
  title: "Strona internetowa dla fundacji i stowarzyszenia",
  heading: "Strona internetowa dla fundacji i stowarzyszenia",
  excerpt:
    "Tworzę strony internetowe dla fundacji i stowarzyszeń: dane z KRS, numer do przekazania 1,5% podatku, darowizny online, wolontariat, sprawozdania i projekty z informacją o dofinansowaniu — z panelem, w którym zarząd sam dodaje aktualności, za cenę z cennika.",
  seo: {
    metaTitle: "Strona dla fundacji i stowarzyszenia od 3000 zł | Bandziuk",
    metaDescription:
      "Strona internetowa dla fundacji i stowarzyszenia: dane z KRS, 1,5% dla OPP, darowizny online, wolontariat, RODO, edycja przez zarząd. Od 3000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt + wykonanie, jedna cena", "Od 3000 zł", "Edytuje zarząd, nie programista"],
  heroPhonePoints: ["Wesprzyj nas · BLIK", "Przekaż 1,5% podatku", "Zostań wolontariuszem", "Sprawozdania"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona internetowa dla fundacji lub stowarzyszenia, projekt w cenie", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Strona fundacji lub stowarzyszenia z darowiznami online, wolontariatem, projektami, sprawozdaniami i panelem dla zarządu, projekt w cenie", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co dostajecie ze stroną internetową dla fundacji",
      items: [
        { _key: k("o"), iconName: "file-text", title: "Dane z KRS i numer do 1,5%", text: "Nazwa, siedziba, KRS, NIP i REGON w stopce każdej podstrony" },
        { _key: k("o"), iconName: "trending-up", title: "Darowizny online i przelewem", text: "Wpłata jednorazowa i cykliczna, numer konta z tytułem" },
        { _key: k("o"), iconName: "message-circle", title: "Wolontariat i wydarzenia", text: "Zgłoszenie wolontariusza w jednym krótkim formularzu" },
        { _key: k("o"), iconName: "layers", title: "Projekty i informacja o dofinansowaniu", text: "Każdy projekt z celem, okresem, logotypami grantodawcy" },
        { _key: k("o"), iconName: "shield-check", title: "RODO, wizerunek i dostępność", text: "Klauzule przy formularzach, kontrast i nawigacja klawiaturą" },
        { _key: k("o"), iconName: "sparkles", title: "Czytelna dla Google i asystentów AI", text: "Misja, obszar i cele tekstem, dane strukturalne organizacji" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona fundacji lub stowarzyszenia", value: "3000–6000 zł", note: "projekt w cenie" },
        { _key: k("r"), label: "Darowizny, wolontariat, projekty, sprawozdania", value: "od 8500 zł", note: "projekt w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: strony internetowe, które zaprojektowałem i zbudowałem",
      subtitle:
        "Wielojęzyczny serwis agencji edukacyjnej dla dziesięciu krajów z dziesiątkami podstron, które zespół aktualizuje sam, landing przechowalni opon, w którym właściciel bez programisty zmienia teksty i ustawienia SEO, oraz strony firmy skanowania laserowego 3D i BIM, firmy remontowo-inwestycyjnej i warsztatu samochodowego. Łączy je to, czego potrzebuje fundacja: odwiedzający najpierw sprawdza, komu może zaufać, a strona prowadzi go do jednego, konkretnego działania.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "full-multilingual-website-development-and-seo-for-student-services",
        "tyre-storage-landing-page-with-editable-seo",
        "architecture-website-rebuild-and-seo-scan",
        "renovation-and-investment-website-with-premium-design",
        "auto-repair-seo-and-ux-boost",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej dla fundacji lub stowarzyszenia",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: proponuję listę podstron i podaję stałą cenę w widełkach z cennika.",
      contextLabel: "Nazwa organizacji lub obecna strona",
      contextPlaceholder: "Link, nazwa lub numer KRS",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Jaka to organizacja?", options: ["Fundacja", "Stowarzyszenie rejestrowe", "Stowarzyszenie zwykłe", "Organizacja ze statusem OPP"] },
        { _key: k("z"), question: "Co macie teraz?", options: ["Brak strony", "Strona z kreatora lub darmowego programu", "Stara strona na WordPressie", "Tylko profil na Facebooku"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Tworzę strony internetowe dla fundacji i stowarzyszeń — strukturę, projekt graficzny, wykonanie, teksty i uruchomienie — więc za całość odpowiada jedna osoba, a cena jest znana z góry. Strona organizacji pozarządowej ma kilku odbiorców naraz: darczyńcę, który chce wpłacić pieniądze albo przekazać 1,5% podatku, wolontariusza, grantodawcę sprawdzającego, czy projekt jest opisany, i osobę, która szuka pomocy. Każdy z nich powinien w kilka sekund znaleźć swoją ścieżkę."),

        h2("Strona internetowa dla fundacji i stowarzyszenia: co powinna zawierać"),
        p("Na stronie organizacji, która przekonuje ludzi do wsparcia, powtarza się kilka stałych elementów:"),
        li("misja w jednym zdaniu: komu pomagacie, w czym i gdzie — „Pomagamy seniorom z gminy Wieliczka w zakupach i wizytach u lekarza”, a nie „Działamy dla dobra wspólnego”"),
        li("przycisk „Wesprzyj” widoczny na każdej podstronie, także na telefonie"),
        li("działania i projekty opisane konkretnie: co robicie, od kiedy, ile osób skorzystało, jeśli macie takie dane"),
        li("zespół i zarząd z imionami i nazwiskami — ludzie wpłacają ludziom"),
        li("aktualności, które naprawdę ktoś dodaje; trzy wpisy sprzed lat robią gorsze wrażenie niż ich brak"),
        li("kontakt i dane rejestrowe organizacji"),
        p("Projekt graficzny jest w cenie. Zamiast stockowych zdjęć dłoni i serduszek są zdjęcia z Waszych działań, czytelna typografia i kolory, które spełniają wymagania kontrastu."),

        h2("Dane z KRS, numer KRS i 1,5% podatku dla OPP na stronie fundacji"),
        p("Fundacje i stowarzyszenia rejestrowe są wpisane do KRS, a stowarzyszenie zwykłe — do ewidencji prowadzonej przez starostę. Pełna nazwa, siedziba, numer KRS lub numer z ewidencji, NIP i REGON w stopce strony to informacja, której szukają darczyńcy, grantodawcy i banki. Jakie dane są obowiązkowe, zależy od formy prawnej i od tego, czy organizacja prowadzi działalność gospodarczą — sprawdźcie aktualne przepisy."),
        p("Organizacja pożytku publicznego, która jest w corocznym wykazie OPP uprawnionych do 1,5%, potrzebuje na stronie osobnej podstrony „Przekaż 1,5% podatku”:"),
        li("numer KRS dużą czcionką, z przyciskiem do skopiowania"),
        li("instrukcja, gdzie wpisać numer w zeznaniu PIT i jak dodać cel szczegółowy, na przykład imię podopiecznego"),
        li("informacja, na co poszły pieniądze z poprzedniego roku"),
        p("Zeznania PIT składa się do końca kwietnia, a kampanie 1,5% zwykle ruszają w styczniu, więc ta podstrona powinna być wtedy widoczna na stronie głównej, a po sezonie schowana w menu."),

        h2("Darowizny online na stronie fundacji: przelew, BLIK i płatności cykliczne"),
        p("Najczęstszy błąd na stronach organizacji to numer konta schowany w zakładce „Kontakt”. Podstrona darowizn powinna dawać kilka dróg:"),
        li("przelew tradycyjny: numer konta z przyciskiem do skopiowania i gotowym tytułem przelewu"),
        li("płatność online przez operatora płatności, takiego jak PayU czy Przelewy24, z BLIK-iem i kartą"),
        li("wpłata cykliczna co miesiąc, jeśli wybrany operator ją obsługuje — stały darczyńca jest dla organizacji wart więcej niż jednorazowa wpłata"),
        li("proponowane kwoty z opisem, co za nie zrobicie, i pole na własną kwotę"),
        p("Umowę z operatorem płatności zawiera organizacja; ja podłączam formularz i sprawdzam, czy wpłata przechodzi na telefonie w kilku krokach. Darczyńcy, którzy chcą odliczyć darowiznę od dochodu, potrzebują dowodu wpłaty, więc na podstronie warto krótko napisać, co wystarczy, z odesłaniem do aktualnych przepisów."),
        h3("Zbiórka publiczna a darowizny na stronie: portal zbiorki.gov.pl"),
        p("Nie każda forma zbierania pieniędzy jest zbiórką publiczną w rozumieniu ustawy o zbiórkach publicznych. Jeśli Wasza zbiórka wymaga zgłoszenia, na stronie warto podać jej numer i link do jej karty na portalu zbiorki.gov.pl, a po zakończeniu — sprawozdanie. Czy dana akcja wymaga zgłoszenia, sprawdźcie w aktualnych przepisach."),

        h2("Wolontariat na stronie stowarzyszenia: zgłoszenie i ogłoszenia"),
        p("Osoba, która chce pomóc, rezygnuje, gdy musi napisać list motywacyjny. Formularz zgłoszenia wolontariusza pyta tylko o imię, kontakt, dostępność i obszar, w którym chce działać, a wiadomość trafia do koordynatora. Obok są aktualne potrzeby — „szukamy dwóch osób do zbiórki żywności w grudniu” — z datą, żeby nikt nie zgłaszał się do akcji sprzed roku. Wydarzenia mają własne podstrony z datą, miejscem i zapisami."),

        h2("Sprawozdania i transparentność fundacji: co pokazać darczyńcom"),
        p("Część obowiązków sprawozdawczych wynika z przepisów, na przykład organizacje pożytku publicznego upubliczniają sprawozdania merytoryczne i finansowe. Niezależnie od obowiązków podstrona „Sprawozdania” buduje zaufanie:"),
        li("sprawozdania z kolejnych lat jako pliki PDF z rokiem w nazwie"),
        li("statut i skład zarządu oraz rady fundacji"),
        li("krótkie podsumowanie roku zwykłym językiem: ile osób dostało pomoc, ile zebraliście i na co wydaliście"),
        p("Podsumowanie pisane tekstem, a nie tylko w PDF, czytają także wyszukiwarki i asystenci AI."),

        h2("Projekty i dotacje: informacja o dofinansowaniu na stronie organizacji"),
        p("Umowy dotacyjne — z funduszy europejskich, programów rządowych czy od samorządu — często wymagają informacji o dofinansowaniu na stronie organizacji. Każdy projekt dostaje więc własną podstronę z tytułem, celem, okresem realizacji, źródłem finansowania i logotypami w układzie, który określa umowa lub podręcznik programu. Po zakończeniu projekt przechodzi do archiwum, a nie znika — grantodawca przy kolejnym wniosku może chcieć zobaczyć Wasze wcześniejsze działania."),

        h2("RODO na stronie fundacji: dane darczyńców, wolontariuszy i wizerunek podopiecznych"),
        p("Fundacja zbiera dane przez formularz kontaktowy, zgłoszenie wolontariusza, zapis na newsletter i darowiznę, więc jest ich administratorem. Na stronie, którą buduję:"),
        li("każdy formularz pyta tylko o potrzebne dane i ma krótką klauzulę informacyjną"),
        li("zapis na newsletter jest osobną, niezaznaczoną zgodą"),
        li("baner cookies blokuje analitykę do czasu zgody"),
        li("zdjęcia podopiecznych, zwłaszcza dzieci, publikujecie tylko ze zgodą na wizerunek — na stronie jest miejsce na zdjęcia z działań, na których nie widać twarzy"),
        p("Szablon polityki prywatności przygotowuję na podstawie tego, co faktycznie robi strona. To ogólne wskazówki, nie porada prawna."),

        h2("Dostępność cyfrowa strony organizacji pozarządowej (WCAG)"),
        p("Organizacje, które realizują zadania finansowane ze środków publicznych, mogą mieć obowiązki wynikające z przepisów o dostępności cyfrowej, a wymagania dostępności często pojawiają się w warunkach dotacji. Sprawdźcie aktualne przepisy i swoją umowę. Niezależnie od obowiązku stronę buduję według WCAG 2.1 na poziomie AA: kontrast kolorów, nawigacja klawiaturą, opisy alternatywne zdjęć, nagłówki w logicznej kolejności i formularze z etykietami. Gdy jest potrzebna, przygotowuję deklarację dostępności. Wśród osób, którym pomagacie, mogą być osoby z niepełnosprawnościami — strona powinna działać także dla nich."),

        h2("Strona fundacji, którą ChatGPT i Google AI Overviews potrafią przeczytać"),
        p("Ludzie pytają ChatGPT, Perplexity albo podsumowania AI w Google: „której fundacji przekazać 1,5% na pomoc bezdomnym zwierzętom w Łodzi”, „gdzie zostać wolontariuszem w hospicjum w Gdańsku”. Asystent poleca organizacje, o których potrafi coś przeczytać i sprawdzić. Dlatego misja, obszar działania, miasto, numer KRS i sposób wsparcia są zapisane tekstem, a nie na grafikach, a dane strukturalne opisują organizację tak samo jak stopka strony."),
        p(
          "Dalsza praca nad tym, żeby organizacja pojawiała się w takich odpowiedziach, jest opisana na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Kreator, darmowa strona czy strona na zamówienie dla stowarzyszenia"),
        p("Kreatory stron i darmowe programy dla organizacji pozarządowych pozwalają uruchomić stronę szybko i bez budżetu. Dla małego stowarzyszenia, które potrzebuje wizytówki z kontaktem i numerem konta, to rozsądny wybór. Strona na zamówienie opłaca się, gdy zbieracie darowizny online, prowadzicie kilka projektów z dotacji, macie wolontariuszy, potrzebujecie wersji angielskiej dla zagranicznych partnerów albo chcecie spełnić wymagania dostępności, których szablon nie spełnia. Przeniesienie strony z kreatora to w praktyce budowa od nowa."),

        h2("Edycja strony przez zarząd i wolontariuszy oraz własność domeny"),
        p("W organizacji zmieniają się zarządy i koordynatorzy, więc strona nie może zależeć od jednej osoby. Aktualności, projekty, sprawozdania i ogłoszenia dla wolontariuszy dodaje się w prostym panelu, także z telefonu, a każda osoba ma własne konto, które można wyłączyć, gdy odchodzi. Dostajecie krótką instrukcję. Domenę rejestrujemy na organizację, a nie na prywatne nazwisko członka zarządu — to częsty powód utraty strony po zmianie składu."),
        p(
          "Jeśli macie już starą stronę, nowa wersja zachowuje adresy, które Google zna, dzięki przekierowaniom. Proces opisuję na stronie ",
          link("przebudowa strony internetowej", "/pl/oferty/przebudowa-strony-internetowej"),
          ".",
        ),

        h2("Jak powstaje i ile kosztuje strona internetowa dla fundacji"),
        ol("Brief. Przesyłacie misję, działania, projekty, dane z KRS i informację, skąd dziś przychodzą darczyńcy."),
        ol("Lista podstron i stała cena. Zmianę zakresu wyceniam przed jej wykonaniem."),
        ol("Projekt, najpierw na telefonie: strona główna, podstrona darowizn i podstrona projektu."),
        ol("Wykonanie, teksty i podłączenie operatora płatności, z którym organizacja ma umowę."),
        ol("Uruchomienie, analityka po zgodzie i instrukcja dla zarządu."),
        li("Prosta strona fundacji lub stowarzyszenia — misja, działania, zespół, dane rejestrowe, numer konta, kontakt: od 3000 do 6000 zł."),
        li("Pełna strona — darowizny online, 1,5%, wolontariat, wydarzenia, projekty z informacją o dofinansowaniu, sprawozdania, panel z kontami dla zarządu: od 8500 zł."),
        p(
          "Projekt graficzny jest w cenie, a widełki są w ",
          link("cenniku", "/pl/cennik"),
          ". Po uruchomieniu nie płacicie mi abonamentu: hosting i domenę opłacacie u dostawcy. Ogólnie o tym, jak buduję strony, piszę na stronie ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strona internetowa dla fundacji i stowarzyszenia: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona internetowa dla fundacji?", "Od 3000 do 6000 zł za prostą stronę i od 8500 zł za pełną stronę z darowiznami online, wolontariatem, projektami i sprawozdaniami. Projekt graficzny jest w cenie. Po krótkim opisie organizacji podaję stałą cenę."],
          ["Czy fundacje i stowarzyszenia dostają zniżkę?", "Ceny są takie same jak w cenniku dla firm. Przy mniejszym budżecie najlepiej zacząć od prostej strony za 3000–6000 zł z misją, danymi z KRS, numerem konta i kontaktem, a podstrony darowizn online, projektów i wolontariatu dodać później. Cena spada też, gdy dostarczacie gotowe teksty i zdjęcia."],
          ["Jakie dane z KRS powinny być na stronie fundacji?", "Zwykle pełna nazwa, siedziba, numer KRS, NIP i REGON, a w stowarzyszeniu zwykłym numer z ewidencji starosty. Zakres obowiązkowych danych zależy od formy prawnej i działalności gospodarczej — sprawdźcie aktualne przepisy."],
          ["Czy na stronie stowarzyszenia można przyjmować darowizny online?", "Tak. Organizacja zawiera umowę z operatorem płatności, a ja podłączam formularz z BLIK-iem, kartą, przelewem i, jeśli operator to obsługuje, wpłatą cykliczną. Czy akcja jest zbiórką publiczną wymagającą zgłoszenia, sprawdźcie w przepisach."],
          ["Czy strona fundacji musi spełniać wymagania dostępności cyfrowej?", "Obowiązki mogą mieć organizacje realizujące zadania ze środków publicznych, a wymagania często są w umowach dotacyjnych. Sprawdźcie przepisy i umowę. Stronę i tak buduję według WCAG 2.1 AA."],
          ["Czy zarząd sam zmieni treści na stronie?", "Tak. Aktualności, projekty, sprawozdania i ogłoszenia dodaje się w prostym panelu, każda osoba ma własne konto, a przy zmianie zarządu konta przekazuje się bez programisty."],
          ["Do kogo należy strona i domena?", "Do organizacji: domena, kod i treści. Domenę rejestrujemy na fundację lub stowarzyszenie, nie na osobę prywatną."],
          ["Czy pracujesz z organizacjami spoza Warszawy?", "Tak, z fundacjami i stowarzyszeniami z całej Polski. Projekt i wykonanie prowadzę zdalnie, po polsku, angielsku albo rosyjsku. Z zarządem rozmawiam na wideo."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową dla fundacji lub stowarzyszenia: co mi wysłać"),
        p(
          "Wyślijcie nazwę organizacji i numer KRS, link do obecnej strony albo profilu w mediach społecznościowych, krótki opis działań i projektów, informację, czy macie status OPP i czy chcecie przyjmować darowizny online. Odpowiem listą podstron i stałą ceną. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
