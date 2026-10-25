// Landing page fixture: Strona internetowa dla małej firmy (PL), group
// «small-business-website-design».
// Market version for Polish small firms (JDG, small sp. z o.o.), not a
// translation of small-business-website-design.en.
// Semantic core: ref/small-business.md (PL): strona internetowa dla małej firmy
// 40 (brief: 40–90/month). Headings also use «ile kosztuje strona internetowa
// dla małej firmy» and «kreator stron czy strona na zamówienie» (brief). No
// other measured PL phrases. PAA for PL in the core are SEO questions (Ile
// kosztuje SEO miesięcznie?, Czy da się pozycjonować wizytówkę Google?) — they
// belong to /pl/pozycjonowanie-strony-malej-firmy; here only the wizytówka
// Google ↔ strona relation is covered.
// Intent: ref/intent-check-small-business.md — «pozycjonowanie dla małej
// firmy» vs «strona internetowa dla małej firmy» 0 shared URLs, 0 shared
// domains → separate pages. SERP for this page: studios (tombrand, empressia,
// inter-web, pimpmyweb, studio113, webdragons) and an epraktycznie guide.
// Polish context: wizytówka Google (Profil Firmy w Google), Oferteo and
// Panorama Firm as lead sources, RODO on contact forms, cookie consent.
// Prices: /pl/cennik — prosta strona 3000–6000 zł, pełna strona od 8500 zł,
// projekt graficzny w cenie.
// NOT on this page: pozycjonowanie (/pl/pozycjonowanie-strony-malej-firmy);
// SEO lokalne i wizytówka jako usługa (/pl/oferty/pozycjonowanie-lokalne);
// landing page (/pl/oferty/tworzenie-landing-page); strona dla startupu
// (/pl/strona-dla-startupu); warsztaty samochodowe
// (/pl/tworzenie-stron-dla-warsztatow-samochodowych).
// Owner’s rule: every page covers AI search; never say there are no clients
// from the visitor’s segment.
import { p, h2, h3, li, ol, link, k } from "./pt";

export const smallBusinessWebsiteDesignPl = {
  lang: "pl",
  group: "small-business-website-design",
  slug: "strona-internetowa-dla-malej-firmy",
  title: "Strona internetowa dla małej firmy",
  heading: "Strona internetowa dla małej firmy",
  excerpt:
    "Tworzę strony internetowe dla małych firm: podstrona dla każdej usługi, telefon i WhatsApp jednym dotknięciem, formularz zgodny z RODO i panel, w którym sami zmieniacie ceny i godziny — za cenę podaną w cenniku.",
  seo: {
    metaTitle: "Strona dla małej firmy: projekt i wykonanie | Bandziuk",
    metaDescription:
      "Strona internetowa dla małej firmy: usługi z cenami, telefon i WhatsApp, formularz zgodny z RODO, szybka na telefonie i Wasza. Od 3000 zł, ceny w cenniku.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt + wykonanie, jedna cena", "Od 3000 zł", "Ceny podane w cenniku"],
  heroPhonePoints: ["Zadzwoń · WhatsApp", "Usługi i ceny", "Opinie z Google", "Zapytaj o termin"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona internetowa dla małej firmy, projekt w cenie", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Strona dla małej firmy z podstronami usług i miejscowości, formularzem zapytań, integracjami i SEO lokalnym, projekt w cenie", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co dostajecie ze stroną internetową dla małej firmy",
      items: [
        { _key: k("o"), iconName: "layers", title: "Podstrona dla każdej usługi", text: "Co obejmuje, ile kosztuje, zdjęcia z Waszej pracy" },
        { _key: k("o"), iconName: "phone", title: "Telefon, WhatsApp i dojazd na każdej podstronie", text: "Jednym dotknięciem, bez szukania danych w stopce" },
        { _key: k("o"), iconName: "shield-check", title: "Formularz i cookies zgodne z RODO", text: "Klauzula informacyjna, zgody, baner cookies" },
        { _key: k("o"), iconName: "map-pin", title: "Spójna z wizytówką Google", text: "Te same dane, opinie i godziny otwarcia" },
        { _key: k("o"), iconName: "file-text", title: "Treści i ceny edytujecie sami", text: "Prosty panel, także z telefonu" },
        { _key: k("o"), iconName: "sparkles", title: "Czytelna dla Google i asystentów AI", text: "Fakty tekstem, dane strukturalne firmy" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona małej firmy", value: "3000–6000 zł", note: "projekt w cenie" },
        { _key: k("r"), label: "Usługi, miejscowości, formularze, SEO lokalne", value: "od 8500 zł", note: "projekt w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Strony małych firm, które zaprojektowałem i zbudowałem",
      subtitle:
        "Małe lokalne firmy, głównie z Warszawy: firma remontowo-inwestycyjna, warsztat samochodowy, pracownia renowacji felg, przechowalnia opon i firma skanowania laserowego 3D i BIM. Każda strona jest nastawiona na telefony i zapytania od klientów i szybko działa na telefonie.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "renovation-and-investment-website-with-premium-design",
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
        "architecture-website-rebuild-and-seo-scan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej dla małej firmy",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: proponuję listę podstron i podaję stałą cenę w widełkach z cennika.",
      contextLabel: "Nazwa firmy lub obecna strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Co macie teraz?", options: ["Brak strony", "Strona z kreatora", "Stara strona na WordPressie", "Tylko wizytówka Google lub Facebook"] },
        { _key: k("z"), question: "Skąd przychodzą klienci?", options: ["Z Google i Map Google", "Z Oferteo lub Panoramy Firm", "Z polecenia", "Z mediów społecznościowych"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Tworzę strony internetowe dla małych firm — projekt graficzny, wykonanie, teksty i uruchomienie — więc za całość odpowiada jedna osoba, a cena jest znana, zanim napiszecie. Właściciel małej firmy zwykle sam odbiera telefony, wystawia faktury i jeździ do klientów. Strona ma mu w tym pomagać: przyprowadzać zapytania, odpowiadać na powtarzające się pytania i nie wymagać opieki co tydzień."),

        h2("Czego mała firma potrzebuje od strony internetowej"),
        p("Klient, który trafia na stronę małej firmy, chce w kilka sekund sprawdzić trzy rzeczy: czy robicie to, czego szuka, czy działacie w jego okolicy i jak się z Wami skontaktować. Dopiero potem patrzy na ceny, zdjęcia i opinie. Strona internetowa dla małej firmy jest układana właśnie w tej kolejności:"),
        li("pierwsze zdanie mówi, co robicie i gdzie — „Hydraulik Warszawa Bemowo”, a nie „Profesjonalizm i pasja”"),
        li("telefon i WhatsApp są widoczne bez przewijania, na każdej podstronie"),
        li("ceny albo widełki cenowe są podane wprost — oszczędzają Wam telefonów od osób, dla których usługa jest za droga"),
        li("godziny, obszar działania i dojazd są w jednym miejscu"),

        h2("Kreator stron czy strona na zamówienie dla małej firmy"),
        p("Wix, WebWave czy kreatory dostępne u polskich firm hostingowych pozwalają uruchomić stronę w weekend za miesięczny abonament. Dla części małych firm to dobry wybór i lepiej powiedzieć to wprost, niż sprzedawać stronę na zamówienie komuś, kto jej nie potrzebuje."),
        h3("Kiedy kreator stron wystarczy"),
        li("macie jedną–dwie usługi i strona ma być przede wszystkim wizytówką"),
        li("klienci przychodzą z polecenia albo z Oferteo, a nie z wyszukiwarki"),
        li("macie czas, żeby samodzielnie złożyć stronę z szablonu i ją aktualizować"),
        h3("Kiedy strona na zamówienie się opłaca"),
        li("sprzedajecie kilka usług i chcecie, żeby każda była znajdowana w Google osobno"),
        li("potrzebujecie pełnej kontroli nad SEO: adresami podstron, tytułami, danymi strukturalnymi, przekierowaniami"),
        li("abonament rośnie z każdą funkcją — rezerwacje, druga wersja językowa, sklep"),
        li("strona ma współpracować z systemem rezerwacji, CRM albo programem do faktur"),
        li("chcecie, żeby strona była Wasza i dała się przenieść do innego hostingu lub wykonawcy"),
        p("Przeniesienie strony z kreatora to w praktyce budowa od nowa, nie eksport. Warto o tym pomyśleć na początku, a nie po trzech latach abonamentu."),

        h2("Jakie podstrony powinna mieć strona małej firmy"),
        p("Mała firma nie potrzebuje rozbudowanego serwisu. Potrzebuje kilku podstron, które odpowiadają na pytania klientów:"),
        li("strona główna z jasnym opisem działalności, głównymi usługami i kontaktem"),
        li("podstrona każdej usługi: co obejmuje, ile trwa, ile kosztuje, zdjęcia z prawdziwych zleceń"),
        li("o firmie — klienci małej firmy wybierają konkretnych ludzi, więc pokazujemy Was, a nie zdjęcia stockowe"),
        li("opinie klientów, najlepiej te z wizytówki Google"),
        li("kontakt z mapą, godzinami otwarcia, danymi firmy (NIP, adres) i dojazdem"),
        p("Blog nie jest obowiązkowy. Jeśli nikt nie będzie w nim pisał, lepiej go nie zakładać, niż zostawić trzy wpisy sprzed lat."),

        h2("Strona internetowa a wizytówka Google, Oferteo i Panorama Firm"),
        p("Wiele małych firm zdobywa klientów przez wizytówkę Google (Profil Firmy w Google), Oferteo albo katalog Panorama Firm. Strona tego nie zastępuje — uzupełnia. Klient, który znalazł Was w Mapach Google albo dostał Waszą ofertę na Oferteo, zanim zadzwoni, wchodzi na stronę i sprawdza zdjęcia, ceny i opinie."),
        li("wizytówka Google prowadzi do strony, a strona pokazuje te same dane: nazwę, adres, telefon i godziny"),
        li("opinie z wizytówki można wyświetlać na stronie, żeby klient nie musiał ich szukać"),
        li("wpisy w Panoramie Firm i innych katalogach mają ten sam adres i telefon co strona — spójność danych pomaga w lokalnych wynikach Google"),
        li("klient z Oferteo, który widzi porządną stronę z cenami i realizacjami, częściej wybiera Was zamiast kolejnej oferty z listy"),
        p(
          "Prowadzenie wizytówki i lokalne wyniki wyszukiwania to osobna usługa, opisana na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("RODO i cookies na stronie internetowej małej firmy"),
        p("Formularz kontaktowy zbiera dane osobowe, więc mała firma jest ich administratorem w rozumieniu RODO. Strona jest przygotowana technicznie tak, żeby to obsłużyć:"),
        li("przy formularzu jest krótka klauzula informacyjna i link do polityki prywatności"),
        li("formularz pyta tylko o dane potrzebne do odpowiedzi — imię, telefon lub e-mail, opis sprawy"),
        li("baner cookies pyta o zgodę, zanim uruchomi Google Analytics 4 czy piksel reklamowy, a odmowa jest równie łatwa jak zgoda"),
        li("połączenie jest szyfrowane (SSL), a zgłoszenia przychodzą na Waszą skrzynkę, bez zbędnych kopii w zewnętrznych serwisach"),
        p("Przygotowuję szablon polityki prywatności dopasowany do tego, co faktycznie robi strona. Ostateczną treść, jak każdy dokument prawny, warto przejrzeć z osobą, która prowadzi Waszą firmę od strony prawnej."),

        h2("Projekt i wykonanie strony małej firmy przez jedną osobę"),
        p("W agencji małą stronę dzielą między siebie project manager, grafik, programista i copywriter. U mnie całość robi jedna osoba: struktura, projekt, wykonanie w Next.js albo WordPressie, teksty, podstawy SEO i uruchomienie. Rozmawiacie z tym, kto wykonuje pracę, a decyzja zapada w jednej wiadomości, a nie na spotkaniu."),
        p("W obu wariantach cenowych dostajecie projekt na telefon i komputer, hosting z SSL, podpiętą domenę, tytuły i opisy podstron, dane strukturalne, Google Analytics 4 i Search Console oraz panel, w którym sami zmieniacie teksty, ceny i zdjęcia."),
        p(
          "Ogólny opis tego, jak buduję strony dla firm każdej wielkości, jest na stronie ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ". Firmy z Warszawy mogą też zajrzeć na ",
          link("tworzenie stron internetowych w Warszawie", "/pl/tworzenie-stron-internetowych-warszawa"),
          " — przyjeżdżam wtedy na spotkanie.",
        ),

        h2("Strona małej firmy, którą ChatGPT i AI Overviews w Google potrafią przeczytać"),
        p("Klienci coraz częściej pytają ChatGPT, Perplexity albo podsumowania AI w Google: „dobry mechanik na Woli”, „księgowa dla JDG, która mówi po ukraińsku”, „fryzjer otwarty w niedzielę”. Asystenci polecają tylko te firmy, o których potrafią coś przeczytać. Dlatego usługi, ceny, obszar działania, godziny i języki obsługi są na stronie zapisane tekstem, a nie na grafikach, a dane strukturalne opisują firmę, jej usługi i opinie tak samo jak wizytówka Google."),
        p(
          "Widoczność w odpowiedziach AI to dalsza, stała praca, opisana na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ". Pozycjonowanie samej strony w Google opisuję na stronie ",
          link("pozycjonowanie strony małej firmy", "/pl/pozycjonowanie-strony-malej-firmy"),
          ".",
        ),

        h2("Przebudowa starej strony małej firmy bez utraty pozycji w Google"),
        p(
          "Często zaczynamy od strony sprzed lat: zrobionej przez znajomego, wolnej na telefonie i niemożliwej do edycji. Przebudowa zachowuje to, co działa — domenę, podstrony, które Google już wyświetla, opinie i dobre zdjęcia. Przed uruchomieniem każdy stary adres dostaje przekierowanie na nową podstronę, a po starcie sprawdzam Search Console. Tak samo wygląda przejście z kreatora. Proces opisuję na stronie ",
          link("przebudowa strony internetowej", "/pl/oferty/przebudowa-strony-internetowej"),
          ".",
        ),

        h2("Strona i pozycjonowanie dla małej firmy z Waszej branży"),
        p(
          "Niektóre branże mają własne potrzeby i własne strony z opisem: ",
          link("strony dla warsztatów samochodowych", "/pl/tworzenie-stron-dla-warsztatow-samochodowych"),
          ", a po stronie widoczności w Google — ",
          link("pozycjonowanie firmy budowlanej", "/pl/pozycjonowanie-strony-firmy-budowlanej"),
          ", ",
          link("gabinetu stomatologicznego", "/pl/pozycjonowanie-strony-gabinetu-stomatologicznego"),
          ", ",
          link("hotelu", "/pl/pozycjonowanie-strony-hotelu"),
          " i ",
          link("restauracji", "/pl/pozycjonowanie-restauracji"),
          ". Dla każdej innej małej firmy punktem wyjścia jest ta strona.",
        ),

        h2("Jak powstaje strona internetowa dla małej firmy"),
        ol("Brief. Przesyłacie, co sprzedajecie, gdzie i komu, pytania, które zadają klienci, oraz zdjęcia i teksty, jeśli je macie. Wiadomość głosowa też wystarczy."),
        ol("Lista podstron i stała cena. Jeśli zakres zmieni się później, zmianę wyceniam przed jej wykonaniem."),
        ol("Projekt, najpierw na telefonie. Strona główna i jedna podstrona usługi są projektowane i uzgadniane z Wami."),
        ol("Wykonanie i teksty. Jeśli nie macie tekstów, piszę je na podstawie briefu, a Wy poprawiacie fakty."),
        ol("Uruchomienie. Domena, analityka, Search Console i wizytówka Google połączone; dostajecie krótką instrukcję edycji."),

        h2("Ile kosztuje strona internetowa dla małej firmy"),
        p(
          "Ceny są podane w ",
          link("cenniku", "/pl/cennik"),
          ", więc widełki znacie przed pierwszą wiadomością. Projekt graficzny jest w cenie w obu przypadkach:",
        ),
        li("Prosta strona dla małej firmy — strona główna, kilka podstron usług, o firmie, kontakt, formularz zgodny z RODO: od 3000 do 6000 zł."),
        li("Pełna strona z podstronami usług i miejscowości, rozbudowanym formularzem lub rezerwacją, integracjami i SEO lokalnym: od 8500 zł."),
        p("Po uruchomieniu nie płacicie mi abonamentu. Opłacacie hosting i domenę u dostawcy, a mnie tylko za zmiany, o które poprosicie. Cena spada, gdy dostarczacie własne teksty i zdjęcia albo gdy zaczynamy od prostej wersji i dokładamy podstrony z czasem; nie spada kosztem szybkości, wersji mobilnej czy podstaw SEO."),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strona internetowa dla małej firmy: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona internetowa dla małej firmy?", "Od 3000 do 6000 zł za prostą stronę i od 8500 zł za pełną stronę z podstronami usług i miejscowości, rozbudowanym formularzem, integracjami i SEO lokalnym. Projekt graficzny jest w cenie, a ceny są podane w cenniku. Po krótkim opisie firmy podaję stałą cenę."],
          ["Kreator stron czy strona na zamówienie — co wybrać dla małej firmy?", "Kreator wystarczy, gdy macie jedną–dwie usługi, czas na samodzielną pracę i klientów głównie z polecenia. Strona na zamówienie opłaca się, gdy chcecie być znajdowani w Google na kilka usług, potrzebujecie integracji albo abonament kreatora rośnie z każdą funkcją."],
          ["Czy mała firma potrzebuje strony, skoro ma wizytówkę Google?", "Wizytówka przyprowadza klientów, a strona jest miejscem, w którym sprawdzają Was przed telefonem: usługi, ceny, zdjęcia, opinie. To też jedyne miejsce w sieci, które naprawdę należy do Was — zasady wizytówki czy katalogu może zmienić ktoś inny."],
          ["Czy formularz kontaktowy na stronie musi być zgodny z RODO?", "Tak, bo zbiera dane osobowe. Przy formularzu jest klauzula informacyjna i link do polityki prywatności, formularz pyta tylko o potrzebne dane, a baner cookies zbiera zgodę przed uruchomieniem analityki."],
          ["Ile trwa stworzenie strony dla małej firmy?", "Prosta strona zwykle od dwóch do czterech tygodni od briefu, pełna od czterech do sześciu. Najwięcej zależy od tego, jak szybko gotowe są teksty, zdjęcia i Wasze uwagi."],
          ["Czy sami możemy zmieniać ceny, godziny i zdjęcia?", "Tak. Teksty, ceny, zdjęcia, godziny i nowe podstrony edytuje się w prostym panelu, także z telefonu. Do codziennych zmian programista nie jest potrzebny."],
          ["Do kogo należy strona?", "Do Was: domena, kod i treści. Możecie w każdej chwili przenieść stronę do innego hostingu albo innego wykonawcy."],
          ["Czy strona może powstać zdalnie, dla firmy spoza Warszawy?", "Tak. Projekt i wykonanie prowadzę zdalnie, po polsku, angielsku albo rosyjsku, dla firm z całej Polski i z zagranicy. W Warszawie mogę przyjechać na spotkanie."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową dla małej firmy: co mi wysłać"),
        p(
          "Wyślijcie nazwę firmy, link do obecnej strony albo wizytówki Google, listę usług, miejscowości, w których pracujecie, i informację, skąd dziś przychodzą klienci. Kilka zdjęć z Waszej pracy albo lokalu pomoże mi pokazać stronę główną, która wygląda jak Wasza firma. Odpowiem listą podstron i stałą ceną. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
