// Landing page fixture: Strona internetowa dla gospodarstwa (PL), group
// «farm-website-design». New page. Market version for Polish family farms that
// sell direct (gospodarstwa rolne: warzywa, owoce, jaja, miód, sery, drób na
// święta), not a translation of farm-website-design.en. In PL this is a
// development page that includes design.
// Semantic core: ref/batch-h2.md has no measured PL phrases for farms; H1 and
// headings carry the slug phrase «strona internetowa dla gospodarstwa», plus
// «strona www gospodarstwa» (metaTitle), «strona gospodarstwa» (H2) and the
// words owners use from BRIEF.md: gospodarstwo rolne, sprzedaż bezpośrednia,
// RHD, paczki warzyw, jaja, miody, samozbiór, RWS (Polish CSA).
// Intent: ref/intent-check-delta.md — EN «farm website» vs «farm website
// design» 1 of 10 shared URLs → one page for farmers building a site and
// owners choosing a designer.
// Polish angles: kanały sprzedaży decide the structure, lista „co mamy w tym
// tygodniu” z telefonu, zamówienia paczek z terminem i punktami odbioru, BLIK /
// Przelewy24, przedpłata na gęsi i indyki, RHD / sprzedaż bezpośrednia only in
// general terms («sprawdźcie w sanepidzie / inspekcji weterynaryjnej»), RWS i
// abonament na skrzynki, samozbiór, dojazd i targi w Mapach Google, opis
// uprawy i certyfikatów (eko / bio only with a certificate — EU rule, general),
// oferta dla restauracji i kooperatyw, warsztaty i zagroda edukacyjna, szablon
// vs strona na zamówienie (Felgilab, tyre storage), AI-readable build
// (Giuseppe), cost.
// NOT on this page: noclegi i agroturystyka (/pl/strona-internetowa-dla-
// pensjonatu — neighbour, linked once; its agroturystyka H2 is not repeated);
// degustacje wina (/pl/strona-internetowa-dla-winnicy — neighbour, linked
// once); stała praca nad wizytówką (/pl/oferty/pozycjonowanie-lokalne).
// Prices: /pl/cennik (3000–6000 zł, od 8500 zł), projekt w cenie. Owner’s
// rules: every page covers AI search; never say there are no clients from the
// visitor’s industry; «faktura» only; no timelines in weeks.
import { p, h2, li, link, k } from "./pt";

export const farmWebsiteDesignPl = {
  lang: "pl",
  group: "farm-website-design",
  slug: "strona-internetowa-dla-gospodarstwa",
  title: "Strona internetowa dla gospodarstwa",
  heading: "Strona internetowa dla gospodarstwa rolnego",
  excerpt:
    "Tworzę strony internetowe dla gospodarstw rolnych, które sprzedają bezpośrednio: lista „co mamy w tym tygodniu” zmieniana z telefonu, zamówienia paczek warzyw z odbiorem w gospodarstwie lub w punkcie w mieście, płatność BLIK-iem, zapisy do RWS, samozbiór, dojazd, który znajduje nawigacja, i oferta dla restauracji.",
  seo: {
    metaTitle: "Strona www gospodarstwa: sprzedaż bezpośrednia | Bandziuk",
    metaDescription:
      "Strona internetowa dla gospodarstwa: lista produktów zmieniana z telefonu, zamówienia paczek z odbiorem, BLIK, RWS, samozbiór, dojazd, restauracje. Od 3000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt + wykonanie, jedna cena", "Od 3000 zł", "Listę produktów zmieniacie sami"],
  heroPhonePoints: ["W tym tygodniu: szparagi", "Odbiór w piątek 16–18", "Zapłać BLIK-iem", "Samozbiór dziś czynny"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona internetowa dla gospodarstwa, projekt w cenie", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Strona gospodarstwa z listą produktów, zamówieniami z odbiorem i dowozem, płatnościami, zapisami do RWS, samozbiorem i ofertą dla restauracji, projekt w cenie", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajecie",
      title: "Co dostajecie ze stroną internetową dla gospodarstwa",
      items: [
        { _key: k("o"), iconName: "file-text", title: "Lista „co mamy” zmieniana z telefonu", text: "Jest, kończy się, wyprzedane, będzie wkrótce" },
        { _key: k("o"), iconName: "shield-check", title: "Zamówienia z odbiorem i dowozem", text: "Termin zamówień, punkty w mieście, BLIK" },
        { _key: k("o"), iconName: "layers", title: "RWS i abonament na skrzynki", text: "Udziały, sezon, raty, lista oczekujących" },
        { _key: k("o"), iconName: "map-pin", title: "Dojazd, sklepik i targi", text: "Pinezka przy bramie, godziny, dni bazarków" },
        { _key: k("o"), iconName: "users", title: "Samozbiór, warsztaty, restauracje", text: "Zapisy gości i cennik dla kucharzy" },
        { _key: k("o"), iconName: "sparkles", title: "Zrozumiała dla Google i AI", text: "Produkty, godziny i uprawa zapisane tekstem" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona gospodarstwa", value: "3000–6000 zł", note: "projekt w cenie" },
        { _key: k("r"), label: "Zamówienia, płatności, RWS, samozbiór, restauracje", value: "od 8500 zł", note: "projekt w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: strony z cennikami, płatnościami online i zapisami",
      subtitle:
        "Te projekty mają te same elementy, z których składa się strona gospodarstwa. Warszawska pracownia renowacji felg Felgilab dostała nową stronę na WordPressie, na której usługi i ceny są rozpisane tak, jak u Was produkty z ceną za kilogram. Przechowalnia opon z Warszawy ma jednostronicową stronę, której teksty właściciel zmienia sam — tak jak Wy listę tego, co jest w tym tygodniu. Landi Room, salon beauty z Warszawy, sprzedał ponad 100 kursów online z pierwszej kampanii Google Ads, a kupujący płacą przez Stripe Checkout — tak samo przyjmuje się przedpłatę za paczkę czy świąteczną gęś. Strona DJ-a i producenta Sashy Ditha łączy galerię wideo z formularzem rezerwacji i otwiera się w niecałą sekundę, czego potrzebuje podstrona warsztatów i dni otwartych. Warszawskiej firmie remontowo-inwestycyjnej zaprojektowałem stronę premium, na której sprzedają zdjęcia gotowych realizacji; u Was zrobią to zdjęcia pola i zbiorów.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
        "e-commerce-landing-page-with-secured-video-access",
        "official-website-for-dj-and-producer-sasha-dith",
        "renovation-and-investment-website-with-premium-design",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej dla gospodarstwa",
      subtitle: "Następnego dnia roboczego dostajecie listę podstron, propozycję, który kanał sprzedaży trafi na stronę główną, i stałą cenę.",
      contextLabel: "Nazwa gospodarstwa, strona lub profil na Facebooku",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Jak dziś sprzedajecie?", options: ["Na miejscu i na targach", "Przez Facebooka, Messengera i telefon", "Przez RWS lub kooperatywę", "Mamy starą stronę"] },
        { _key: k("z"), question: "Co strona ma obsługiwać najpierw?", options: ["Zamówienia paczek z odbiorem", "Zapisy do RWS lub abonament", "Samozbiór i wizyty", "Sprzedaż do restauracji i sklepów"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Strona internetowa dla gospodarstwa rolnego to w mojej wersji narzędzie do sprzedaży bezpośredniej: mówi, co jest w tym tygodniu, przyjmuje zamówienia z odbiorem i prowadzi klienta pod samą bramę. Robię ją w całości sam — plan podstron, projekt graficzny, kod, płatności i panel do edycji — za kwotę ustaloną przed rozpoczęciem pracy. Ma działać wtedy, gdy Wy jesteście w polu, w oborze albo na targu."),

        h2("Strona internetowa dla gospodarstwa, które sprzedaje bezpośrednio"),
        p("Gospodarstwa, które zgłaszają się po stronę, rzadko sprzedają jednym kanałem. Zwykle jest to kilka pozycji z tej listy:"),
        li("sklepik albo stragan przy domu, czynny w sezonie"),
        li("sobotnie targi i bazarki w najbliższym mieście"),
        li("paczki warzyw i owoców z odbiorem w punktach albo z dowozem"),
        li("jaja, miód, sery i przetwory, a przed świętami gęsi, kaczki i indyki na zamówienie"),
        li("samozbiór truskawek, borówek czy jabłek"),
        li("sprzedaż do restauracji, sklepów z lokalną żywnością i kooperatyw spożywczych"),
        p("Na początek ustalamy, który kanał przynosi najwięcej i ile czasu zabiera jego obsługa. Ten najważniejszy dostaje główny przycisk na każdej podstronie, pozostałe czekają w menu. Dlatego gospodarstwo żyjące z paczek i gospodarstwo żyjące z samozbioru dostają różne strony główne, choć oba mogą uprawiać to samo."),

        h2("Lista „co mamy w tym tygodniu” na stronie gospodarstwa, zmieniana z telefonu"),
        p("Najczęstsza wiadomość na Messengerze brzmi: „Są już młode ziemniaki?”. Odpowiedź powinna wisieć na stronie, na głównej i przy zamówieniach:"),
        li("każdy produkt ze statusem: jest, kończy się, wyprzedane, będzie od połowy czerwca"),
        li("cena i jednostka: za kilogram, za łubiankę, za 10 jaj, za słoik 900 ml"),
        li("krótka uwaga, jeśli coś wyjaśnia: „pierwsze szparagi z tunelu”, „jaj mniej, kury przechodzą pierzenie”"),
        p("Zmiana trwa tyle, co wysłanie SMS-a. Otwieracie panel w telefonie, stukacie w produkt, przestawiacie status i zapisujecie — lista na głównej, w zamówieniach i na podstronie sklepiku zmienia się jednocześnie. Bez siadania wieczorem do laptopa i bez posta sprzed miesiąca, z którego ktoś wyczytał, że truskawki jeszcze są."),

        h2("Zamówienia online w gospodarstwie: paczki warzyw, dni odbioru i płatność BLIK"),
        p("Zamówienia z wyprzedzeniem pozwalają zbierać i pakować pod konkretnych ludzi, a nie na oko. Formularz albo prosty sklep odwzorowuje to, jak naprawdę wydajecie towar:"),
        li("termin zamówień, np. do środy do 20:00, i odbiór w piątek w gospodarstwie albo w punkcie w mieście"),
        li("dowóz w stałe dni według trasy, z listą miejscowości i osiedli"),
        li("limity dla produktów, których jest mało, żeby nie sprzedać trzydziestu słoików miodu, gdy na półce stoi dwadzieścia"),
        li("przedpłata BLIK-iem lub przez Przelewy24 na święta: gęsi na Świętego Marcina, kaczki i indyki na Boże Narodzenie, z ceną za kilogram i rozliczeniem reszty przy odbiorze po zważeniu"),
        p("Zasady sprzedaży z gospodarstwa — rolniczy handel detaliczny, sprzedaż bezpośrednia czy działalność marginalna — zależą od produktu i od tego, do kogo trafia. Zanim produkt pojawi się w sklepie online, sprawdźcie warunki w sanepidzie albo u powiatowego lekarza weterynarii. Strona pokaże tę formę sprzedaży, na którą macie zgodę, na przykład zamówienie z odbiorem osobistym."),
        p("Płatność działa jak w Landi Room z mojego portfolio: klient płaci online, od razu dostaje potwierdzenie, a dzień przed odbiorem — przypomnienie z godziną i adresem punktu."),

        h2("Rolnictwo Wspierane Społecznie i abonament na skrzynki warzyw na stronie gospodarstwa"),
        p("W RWS członkowie płacą z góry za sezon albo w ratach, a gospodarstwo ma pieniądze wtedy, gdy kupuje nasiona i planuje zasiewy. Podstrona zapisów tłumaczy umowę prostymi słowami: wielkość udziału ze zdjęciem typowej lipcowej skrzynki, daty pierwszego i ostatniego odbioru, punkty odbioru z dniem i godziną, kwotę i harmonogram wpłat, a jeśli tak to u Was działa — dyżury przy pakowaniu. Członek ma konto, w którym zgłasza wyjazd i pomija tydzień albo zmienia punkt. Gdy miejsca się skończą, formularz zamienia się w listę oczekujących, a zapisy na następny sezon trafiają najpierw do niej. Gospodarstwom bez RWS ten sam mechanizm służy do abonamentu na skrzynkę co tydzień lub co dwa tygodnie."),

        h2("Samozbiór truskawek i borówek: kalendarz i komunikat dnia na stronie gospodarstwa"),
        p("Na samozbiór jedzie się w sobotę rano z dziećmi i łubiankami, więc rozczarowanie jest duże, gdy pole wyzbierano w piątek. Podstrona samozbioru zawiera:"),
        li("komunikat dnia na samej górze: czynne czy nie, w jakich godzinach, które pole — zmieniany z telefonu o szóstej rano"),
        li("kalendarz z orientacyjnymi tygodniami dla truskawek, borówek, czereśni i dyń, z dopiskiem, że pogoda potrafi go przesunąć"),
        li("cenę za kilogram, ważenie przy wyjściu i informację, czy pojemniki są na miejscu"),
        li("w szczycie sezonu zapisy na godzinę wejścia, żeby o dziesiątej nie stało sto aut na łące"),
        p("Rodzinom z miasta przydają się też rzeczy dla Was oczywiste: czy jest toaleta, czy można przyjść z psem i gdzie umyć ręce."),

        h2("Dojazd do gospodarstwa, godziny sklepiku i targi w Mapach Google"),
        p("Wiejskie adresy mylą nawigację: numer domu bywa kilometr od bramy, a pinezka ląduje w środku pola. Podstrona „Jak dojechać” podaje:"),
        li("pinezkę ustawioną ręcznie przy wjeździe i opis od ostatniego skrzyżowania: „za przystankiem w prawo, brama z tablicą »Jaja, miód«”"),
        li("gdzie zaparkować w sobotę, kiedy przyjeżdża najwięcej osób"),
        li("godziny sklepiku w sezonie i poza nim oraz pasek o dniach, w które zamykacie wcześniej"),
        li("płatność na miejscu: gotówka, karta czy BLIK na numer telefonu"),
        li("targi i bazarki: miasto, dzień, godziny i miejsce stoiska"),
        p(
          "Te same dane — nazwa, adres, godziny, pinezka — trafiają do wizytówki Google. Kto wpisze „jajka od rolnika” albo „miód z pasieki” z nazwą miejscowości, zobaczy w Mapach to samo co na stronie. Stałą pracę nad wizytówką i opiniami opisuję na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Historia gospodarstwa, sposób uprawy i certyfikaty zapisane tekstem"),
        p("Ktoś, kto jedzie dwadzieścia kilometrów po jaja, chce wiedzieć, od kogo kupuje. Napiszcie to własnymi słowami: kto prowadzi gospodarstwo, od którego pokolenia, co uprawiacie i hodujecie. Sposób produkcji zasługuje na osobną podstronę z dokładnymi sformułowaniami. Słowa „ekologiczny”, „eko” i „bio” przy żywności są w Unii Europejskiej zastrzeżone dla produktów z certyfikatem, więc piszemy je tylko wtedy, gdy go macie — z nazwą jednostki certyfikującej. To, co robicie bez certyfikatu, opisujemy jako praktykę: „warzywa bez syntetycznych oprysków”, „krowy na pastwisku od kwietnia do listopada”, „pasieka przy lipach i gryce”."),
        p("Zdjęcia pochodzą z Waszego gospodarstwa przez cały rok: pole wiosną, zbiory, zwierzęta, stragan w ruchliwy poranek. Zdjęcie czerwonej stodoły z banku zdjęć nie mówi nic o Waszym miejscu."),

        h2("Oferta dla restauracji, sklepów i kooperatyw na stronie gospodarstwa"),
        p("Kucharz i właściciel sklepu z lokalną żywnością pytają o inne rzeczy niż klient z paczką. Osobna podstrona — otwarta albo na hasło, jeśli ceny hurtowe nie są publiczne — podaje listę na bieżący tydzień z opakowaniami zbiorczymi, minimalne zamówienie, dni dostaw i termin zamówień dla każdego z nich, formę faktury i termin płatności. Zamawia się formularzem, który pamięta dane firmy, albo bezpośrednio u osoby, która to prowadzi. Kooperatywy spożywcze dostają jedną zbiorczą listę zamiast trzydziestu osobnych wiadomości."),

        h2("Warsztaty, dni otwarte i wycieczki szkolne na stronie gospodarstwa"),
        p("Dni otwarte, warsztaty serowarskie czy pszczelarskie, święto dyni i lekcje w zagrodzie edukacyjnej dostają osobne podstrony z datą, programem, ceną i zapisami z limitem miejsc. Szkoły i przedszkola wysyłają formularz z terminem, liczbą dzieci i opiekunów oraz wiekiem grupy, więc odpowiadacie jedną wiadomością. Podobne połączenie galerii i formularza rezerwacji zbudowałem dla Sashy Ditha."),
        p(
          "Jeśli przyjmujecie gości na noc, rezerwację pokoi opisuję na stronie ",
          link("strona internetowa dla pensjonatu", "/pl/strona-internetowa-dla-pensjonatu"),
          ", a degustacje własnego wina lub cydru — na stronie ",
          link("strona internetowa dla winnicy", "/pl/strona-internetowa-dla-winnicy"),
          ".",
        ),

        h2("Profil na Facebooku, szablon czy strona gospodarstwa na zamówienie"),
        p("Wiele gospodarstw sprzedaje przez profil na Facebooku, grupy osiedlowe i Messengera, a zapisy do RWS prowadzi w arkuszu. Na start to wystarcza. Kłopot zaczyna się, gdy zamówień przybywa: wiadomości giną, lista w arkuszu rozjeżdża się z tym, co jest w skrzynkach, a Google prawie nie widzi profilu. Darmowy szablon albo kreator rozwiązuje część problemu, ale nie zna Waszych dni odbioru ani punktów."),
        p(
          "Strona na zamówienie jest zbudowana wokół Waszych kanałów sprzedaży, najczęściej na WordPressie, a kod, domena i lista klientów należą do gospodarstwa. Felgilab i warszawska przechowalnia opon dostały strony, w których właściciele sami zmieniają ceny i teksty — dokładnie tej samodzielności potrzebuje gospodarz w maju. Więcej o takich wdrożeniach na stronie ",
          link("strona na WordPress", "/pl/oferty/strona-na-wordpress"),
          ", a o stronach dla innych lokalnych firm — na stronie ",
          link("strona internetowa dla małej firmy", "/pl/strona-internetowa-dla-malej-firmy"),
          ".",
        ),

        h2("Strona gospodarstwa, którą ChatGPT i Google AI Overviews potrafią przeczytać"),
        p("Coraz więcej osób pyta ChatGPT albo podsumowanie AI w Google: „gdzie pod Grójcem jest samozbiór czereśni”, „kto koło Gniezna sprzedaje jaja od kur z pastwiska”. Odpowiedź powstaje z tekstu, który asystent potrafi odczytać. Dlatego produkty z ich statusem, ceny, godziny sklepiku, dni targów, punkty odbioru i sposób uprawy zapisuję w HTML zwykłym tekstem, a nie na zdjęciu tablicy kredowej czy w cenniku w PDF. Podstrony dostają dane strukturalne LocalBusiness, Product i Event, zgodne z wizytówką Google. Na tych zasadach postawiłem stronę Giuseppe, psychoterapeuty z Mediolanu, i ChatGPT już cytuje jej nowe podstrony."),
        p(
          "Stałą obecność w odpowiedziach AI opisuję na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Ile kosztuje strona internetowa dla gospodarstwa"),
        li("Prosta strona gospodarstwa — strona główna, lista „co mamy”, dojazd z godzinami sklepiku i dniami targów, historia gospodarstwa, kontakt i formularz zamówienia: 3000–6000 zł."),
        li("Strona gospodarstwa z listą produktów, zamówieniami z odbiorem i dowozem, płatnościami, zapisami do RWS, samozbiorem, warsztatami i ofertą dla restauracji: od 8500 zł."),
        p(
          "Projekt graficzny jest w obu kwotach. Po uruchomieniu płacicie za hosting, domenę i prowizje operatora płatności. Etapy pracy opisuję w zakładce ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ", a pełne stawki są w ",
          link("cenniku", "/pl/cennik"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strona internetowa dla gospodarstwa: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona internetowa dla gospodarstwa?", "Prosta strona to 3000–6000 zł, a strona z zamówieniami, płatnościami, zapisami do RWS, samozbiorem i ofertą dla restauracji — od 8500 zł. Projekt graficzny jest wliczony. Stałą kwotę podaję, gdy wiem, co sprzedajecie, jakimi kanałami i z jakich narzędzi już korzystacie."],
          ["Czy sami zmienimy listę produktów z telefonu?", "Tak, lista jest do tego zrobiona. Status, cenę albo uwagę przy produkcie zmieniacie w telefonie, a strona główna, zamówienia i podstrona sklepiku pokazują to od razu. Komputer ani programista nie są potrzebni."],
          ["Czy klienci zapłacą BLIK-iem za paczkę albo zamówioną gęś?", "Tak. BLIK, przelew online i karta działają przez Przelewy24 albo innego operatora płatności. Przy drobiu na wagę klient wpłaca przedpłatę, a resztę rozlicza przy odbiorze — zasada jest napisana przed płatnością."],
          ["Czy strona obsłuży zapisy do RWS i kilka punktów odbioru?", "Tak. Udziały, daty sezonu, punkty odbioru i raty ustawiacie w panelu, a członkowie sami pomijają tydzień albo zmieniają punkt. Gdy miejsc zabraknie, zapisy przechodzą na listę oczekujących."],
          ["Czy przez stronę wolno sprzedawać produkty z RHD?", "To zależy od produktu i od tego, jak jesteście zarejestrowani — warunki potwierdzi sanepid albo inspekcja weterynaryjna. Strona dostosowuje się do tego, na co macie zgodę: sklep z wysyłką, zamówienie z odbiorem w gospodarstwie albo sam cennik z telefonem."],
          ["Czy wystarczy profil na Facebooku albo darmowy szablon?", "Gospodarstwu, które sprzedaje jedną rzecz w jednym miejscu, często tak. Strona na zamówienie opłaca się, gdy łączycie sklepik, targi, paczki, RWS albo restauracje i chcecie, żeby lista produktów, zamówienia i dojazd zawsze się zgadzały."],
          ["Czy pracujesz z gospodarstwami z całej Polski?", "Tak, z każdego regionu. Rozmawiamy przez wideo i telefon, materiały przesyłacie mailem albo przez WhatsApp, a etapy akceptujecie online. Zdjęcia robi ktoś z Was albo fotograf według krótkiej instrukcji ode mnie."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową dla gospodarstwa: co mi wysłać"),
        p(
          "Wyślijcie link do profilu na Facebooku albo obecnej strony, listę produktów z cenami i jednostkami, opis tego, jak dziś sprzedajecie — sklepik, targi, paczki, RWS, restauracje — punkty i dni odbioru oraz kilka zdjęć gospodarstwa. W odpowiedzi dostaniecie proponowaną listę podstron i stałą cenę. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
