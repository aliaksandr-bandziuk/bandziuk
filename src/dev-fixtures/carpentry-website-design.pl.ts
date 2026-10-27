// Landing page fixture: Strona internetowa dla stolarza (PL), group
// «carpentry-website-design». New page. Market version for Polish stolarze,
// stolarnie and firmy robiące meble na wymiar, not a translation of the EN
// page. In PL this is a development page that includes design.
// Semantic core: ref/batch-h1.md has no measured PL phrases for carpentry
// (PL «On topic» = recruitment only). Headings use the slug phrase «strona
// internetowa dla stolarza» (brief) and the market’s words from BRIEF.md:
// stolarz, stolarnia, meble na wymiar, zabudowa kuchenna, schody drewniane.
// Intent: ref/intent-check-batch-h.md — EN «carpentry website» vs «handyman
// website design» 0 of 10 shared URLs → own page. No PL SERP check.
// Polish angles: realizacje by type (zabudowa kuchenna, szafy wnękowe,
// garderoby, schody drewniane, drzwi, meble z litego drewna, lokale
// usługowe), materiały (lite drewno, fornir, płyta laminowana, MDF), wycena
// with rzut mieszkania from the umowa deweloperska and photos of the stan
// deweloperski, ceny „od” per metr bieżący / stopień / sztuka, płatny pomiar
// odliczany od zamówienia, przebieg zlecenia with zaliczka and termin
// realizacji, page for architekci wnętrz / firmy wykończeniowe / deweloperzy,
// Oferteo / Fixly / Instagram / szablon vs own site, Mapy Google with
// warsztat or salon, AI-readable build, cost. Client consent for publishing
// photos of interiors.
// NOT on this page: drobne naprawy (/pl/strona-internetowa-dla-zlotej-raczki
// — linked once); firmy budowlane (/pl/strona-internetowa-dla-firmy-budowlanej
// — linked once); stała praca nad Mapami (/pl/oferty/pozycjonowanie-lokalne —
// linked). Portfolio: renovation, Felgilab, ScanM2, auto repair, tyre storage.
// Prices: /pl/cennik — 3000–6000 zł, od 8500 zł, projekt w cenie; «faktura».
// Owner’s rules: never say there are no clients from the visitor’s industry;
// every page covers AI search.
import { p, h2, h3, li, ol, link, k } from "./pt";

export const carpentryWebsiteDesignPl = {
  lang: "pl",
  group: "carpentry-website-design",
  slug: "strona-internetowa-dla-stolarza",
  title: "Strona internetowa dla stolarza",
  heading: "Strona internetowa dla stolarza i stolarni",
  excerpt:
    "Strona internetowa dla stolarza i stolarni, zaprojektowana i zbudowana przez jedną osobę: realizacje podzielone na kuchnie, szafy, schody i meble na wymiar, formularz wyceny, do którego klient dołącza wymiary, zdjęcia i rzut mieszkania, ceny „od” oraz osobna podstrona dla architektów wnętrz.",
  seo: {
    metaTitle: "Strona www dla stolarni i mebli na wymiar | Bandziuk",
    metaDescription:
      "Strona internetowa dla stolarza: realizacje według rodzaju prac, wycena mebli na wymiar z wymiarami i rzutem, ceny „od”, podstrona dla architektów. Od 3000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt + wykonanie, jedna cena", "Od 3000 zł", "Dla stolarzy i stolarni"],
  heroPhonePoints: ["Kuchnie · Szafy · Schody", "Wyślij wymiary i rzut", "Ceny „od” za metr", "Wolne terminy: luty"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona internetowa dla stolarza, projekt w cenie", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Strona stolarni z realizacjami według rodzaju prac, podstroną materiałów, formularzem wyceny z wymiarami i rzutem, podstroną dla architektów i pozycjonowaniem lokalnym na start, projekt w cenie", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co dostajesz ze stroną internetową dla stolarza",
      items: [
        { _key: k("o"), iconName: "image", title: "Realizacje według rodzaju prac", text: "Kuchnie, szafy, garderoby, schody, drzwi, meble" },
        { _key: k("o"), iconName: "file-text", title: "Wycena z wymiarami i rzutem mieszkania", text: "Zdjęcia, PDF od dewelopera lub architekta" },
        { _key: k("o"), iconName: "layers", title: "Materiały opisane po ludzku", text: "Lite drewno, fornir, płyta, MDF i ich ceny" },
        { _key: k("o"), iconName: "users", title: "Podstrona dla architektów wnętrz", text: "Rysunki, terminy, zasady współpracy" },
        { _key: k("o"), iconName: "map-pin", title: "Warsztat, salon i obszar montażu", text: "Gdzie produkujesz, gdzie montujesz, jak dojechać" },
        { _key: k("o"), iconName: "sparkles", title: "Czytelna dla Google i asystentów AI", text: "Usługi, ceny i terminy zapisane tekstem" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona stolarza", value: "3000–6000 zł", note: "projekt w cenie" },
        { _key: k("r"), label: "Realizacje, materiały, wycena z rzutem, architekci, SEO lokalne", value: "od 8500 zł", note: "projekt w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Strony warsztatów i firm usługowych, które zbudowałem",
      subtitle:
        "Warszawska firma remontowo-inwestycyjna ma projekt premium, w którym klienta przekonują duże zdjęcia gotowych wnętrz — kuchni, zabudów, schodów — czyli to samo, co sprzedaje stolarnia. Felgilab, warszawska pracownia renowacji felg, dostała nową stronę na WordPressie z osobną podstroną i ceną dla każdej usługi; tak samo układa się ofertę kuchni, szaf i schodów. ScanM2 sprzedaje skanowanie laserowe 3D i BIM architektom i wykonawcom, a po przebudowie strony w trzech językach dostaje zapytania co tydzień — to ci sami odbiorcy, do których mówi podstrona dla architektów. Warszawski warsztat samochodowy dostał SEO lokalne, pracę nad Mapami Google i podstrony usług. Przechowalnia opon ma stronę na WordPressie, której teksty właściciel zmienia sam, tak jak Ty będziesz zmieniać ceny i terminy.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "renovation-and-investment-website-with-premium-design",
        "felgilab-wordpress-rebuild",
        "architecture-website-rebuild-and-seo-scan",
        "auto-repair-seo-and-ux-boost",
        "tyre-storage-landing-page-with-editable-seo",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej dla stolarza",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: proponuję listę podstron, układ formularza wyceny i podaję stałą cenę.",
      contextLabel: "Nazwa stolarni, Instagram lub obecna strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Co robisz najczęściej?", options: ["Kuchnie i zabudowy na wymiar", "Szafy wnękowe i garderoby", "Schody i drzwi drewniane", "Meble z litego drewna", "Zlecenia dla architektów i firm"] },
        { _key: k("z"), question: "Skąd dziś przychodzą klienci?", options: ["Polecenia i Instagram", "Oferteo lub Fixly", "Mapy Google", "Architekci i firmy wykończeniowe"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Strona internetowa dla stolarza to usługa, w której sam planuję, projektuję i buduję stronę Twojej stolarni — od listy podstron po uruchomienie — więc o wszystko pytasz jedną osobę, a cenę znasz przed startem. Meble na wymiar sprzedaje się trudniej niż gotowe: klient płaci zaliczkę za coś, czego jeszcze nie ma, i porównuje dwie–trzy stolarnie przez kilka tygodni. Strona ma go przekonać, zanim w ogóle umówi pomiar."),

        h2("Strona internetowa dla stolarza: co ma zrobić, zanim klient zadzwoni"),
        p("Typowy klient stolarni właśnie odebrał mieszkanie w stanie deweloperskim albo remontuje dom i szuka kogoś do kuchni, szaf i schodów. Zanim zadzwoni, chce wiedzieć trzy rzeczy: czy robisz to, czego potrzebuje, w jakim stylu i jakiej jakości, oraz w jakich widełkach cenowych się poruszasz. Strona odpowiada na nie zdjęciami prawdziwych realizacji, cenami „od” i informacją o terminie, a resztę zbiera w formularzu."),
        p("Kupujący nowe mieszkania szukają stolarza z wyprzedzeniem, często kilka miesięcy przed odbiorem kluczy, bo wiedzą, że dobre stolarnie mają kolejkę. Strona, która podaje wolny termin i pozwala wysłać rzut jeszcze przed odbiorem, łapie ich dokładnie wtedy, gdy porównują wykonawców."),
        p(
          "Jeśli zajmujesz się głównie drobnymi naprawami, lepiej pasuje ",
          link("strona internetowa dla złotej rączki", "/pl/strona-internetowa-dla-zlotej-raczki"),
          ", a jeśli budujesz domy albo prowadzisz całe remonty — ",
          link("strona internetowa dla firmy budowlanej", "/pl/strona-internetowa-dla-firmy-budowlanej"),
          ".",
        ),

        h2("Realizacje stolarni na stronie: zabudowa kuchenna, szafy, garderoby i schody drewniane"),
        p("Galeria to podstrona, do której klient wraca najczęściej, często razem z partnerem wieczorem na kanapie. Sto zdjęć w jednym ciągu nie pomaga mu wybrać, więc realizacje są podzielone tak, jak się ich szuka:"),
        li("zabudowa kuchenna i wyspy"),
        li("szafy wnękowe, garderoby i zabudowy pod skosem"),
        li("schody drewniane — na beton i samonośne — z balustradami"),
        li("drzwi wewnętrzne, boazerie i parapety"),
        li("meble łazienkowe, stoły, łóżka i biurka z litego drewna"),
        li("zabudowy lokali: restauracje, biura, sklepy"),
        p("Każda realizacja ma własną podstronę: miasto lub dzielnica, materiał, okucia, czas wykonania i jedno zdanie o problemie, który rozwiązała, np. garderoba w poddaszu z niskim kolanem. Zdjęcia z warsztatu — łączenia, szlifowanie, lakierowanie — pokazują rzemiosło, którego na gotowej kuchni nie widać. Przed publikacją zdjęć wnętrza pytasz klienta o zgodę, a strona nie podaje adresu, tylko okolicę."),

        h2("Lite drewno, fornir, płyta czy MDF: materiały i wykończenia na stronie stolarni"),
        p("Przy każdej wycenie padają te same pytania: dąb lity czy fornir, płyta laminowana czy MDF lakierowany, olej czy lakier, dlaczego drożej niż w sieciówce. Krótka podstrona o materiałach odpowiada raz, a dobrze:"),
        li("gatunki drewna, z którymi pracujesz — dąb, jesion, buk, orzech — każdy na zdjęciu Twojego mebla"),
        li("lite drewno, fornir, płyta i MDF: gdzie którego używasz i dlaczego"),
        li("wykończenia — olej, lakier, bejca — i jak się starzeją"),
        li("okucia: zawiasy i prowadnice z cichym domykiem, podnośniki frontów"),
        p("Podstrona realizacji linkuje do użytych materiałów, więc klient, któremu spodobała się szafka z orzecha, od razu widzi, ile orzech kosztuje względem dębu. Jeśli w warsztacie lub salonie masz próbki frontów, blatów i kolorów lakieru, strona zaprasza do ich obejrzenia po wcześniejszym umówieniu."),

        h2("Formularz wyceny mebli na wymiar: wymiary, zdjęcia i rzut mieszkania"),
        p("Dobry formularz oszczędza pustego pomiaru. Pyta o to, o co zapytałbyś przez telefon:"),
        ol("Rodzaj prac z Twojej listy."),
        ol("Wymiary orientacyjne — z prostym rysunkiem, który pokazuje, co zmierzyć."),
        ol("Zdjęcia pomieszczenia z telefonu."),
        ol("Rzut mieszkania z umowy deweloperskiej albo projekt od architekta wnętrz jako PDF lub zdjęcie, plus inspiracje z Pinteresta."),
        ol("Preferowany materiał, widełki budżetu do wyboru i termin, na który meble są potrzebne."),
        p("Zapytanie przychodzi na e-mail ze wszystkimi załącznikami, a większe pliki trafiają do wspólnego folderu. Odpowiadasz orientacyjną kwotą, prosisz o brakujący wymiar albo umawiasz pomiar — i grzecznie odmawiasz, gdy budżet i zakres się nie spotykają."),

        h2("Ceny „od” na stronie stolarza: metr bieżący zabudowy, stopień schodów, sztuka drzwi"),
        p("Meble na wymiar nie mają cennika, ale klient potrzebuje widełek, żeby zdecydować, czy pisać. Każdy rodzaj prac dostaje cenę „od” w jednostce, w której i tak wyceniasz: zabudowa kuchenna i szafy za metr bieżący, schody za stopień albo bieg, drzwi za sztukę. Obok stoi krótka uwaga, co podnosi kwotę: materiał, wykończenie, okucia, wysokość, wniesienie na piętro bez windy."),
        p("Jeśli pomiar jest płatny i odliczany od zamówienia, strona mówi to wprost. Cena „od” odsiewa klienta, który liczył na ceny z marketu, a reszcie daje powód, żeby wysłać zapytanie."),

        h2("Od pomiaru do montażu: przebieg zlecenia i termin realizacji na stronie stolarni"),
        p("Klient, który pierwszy raz zamawia meble na wymiar, nie wie, co dzieje się między telefonem a montażem. Krótka sekcja to pokazuje: pomiar i rozmowa, projekt z wizualizacją 3D i poprawkami, zaliczka i zamówienie materiału, produkcja w warsztacie, montaż i regulacja, faktura i gwarancja."),
        p("Nad tą listą stoi jedno zdanie, które zmieniasz sam w panelu: aktualny termin realizacji, np. „Przyjmujemy zamówienia z montażem w lutym”. Odpowiada na pytanie zadawane w prawie każdej rozmowie i ustawia oczekiwania przed wpłatą zaliczki."),

        h2("Strona stolarni dla architektów wnętrz, firm wykończeniowych i deweloperów"),
        p("Dla wielu stolarni zlecenia od architektów wnętrz i firm wykończeniowych znaczą więcej niż pojedynczy klienci. Ci odbiorcy pytają o inne rzeczy: czy pracujesz z ich projektu wykonawczego, w jakich formatach przyjmujesz rysunki, jak szybko odpowiadasz na poprawki i czy dotrzymujesz harmonogramu budowy. Osobna podstrona mówi o tym konkretnie:"),
        li("jakie prace bierzesz dla branży: zabudowy, schody, lokale usługowe, mieszkania pokazowe"),
        li("formaty rysunków i sposób uzgadniania zmian"),
        li("moce produkcyjne, typowe terminy i obszar montażu"),
        li("formularz dla architektów z miejscem na rysunki i harmonogram"),
        p("Deweloperzy i firmy wykończeniowe patrzą jeszcze na powtarzalność: czy zrobisz te same szafy w kilkunastu mieszkaniach jednej inwestycji, w terminie i z fakturą za każdy etap."),
        p("ScanM2, firma skanowania laserowego 3D i BIM, sprzedaje tym samym architektom i wykonawcom; od kiedy przeniosłem jej stronę z kreatora no-code, zapytania przychodzą co tydzień."),

        h2("Oferteo, Instagram, szablon czy własna strona internetowa stolarza"),
        p("Wiele stolarni żyje z poleceń i Instagrama, część kupuje zapytania na Oferteo albo Fixly. Instagram dobrze pokazuje zdjęcia, ale nie układa ich według rodzaju prac i nie zbiera wymiarów. Na platformach z zapytaniami klient od mebli na wymiar dostaje kilka ofert naraz i zwykle porównuje tylko kwotę, a różnica w jakości łączeń i okuć ginie."),
        p("Szablon z kreatora to rozsądny start, ale ma jedną galerię na wszystko i formularz bez załączników. Własna strona, najczęściej na WordPressie, jest ułożona wokół Twoich rodzajów prac, a domena, kod i treści należą do Ciebie. Jak buduję na tej platformie, opisuję na stronie ",
          link("strona na WordPress", "/pl/oferty/strona-na-wordpress"),
          ".",
        ),
        h3("Co łączy najlepsze strony stolarni"),
        p("Prawdziwe realizacje podzielone na rodzaje prac, jasno podany obszar montażu, widełki cen i łatwe wysłanie wymiarów. Krój pisma i kolory mają mniejsze znaczenie niż to, czy klient w dwóch kliknięciach znajdzie schody podobne do swoich."),

        h2("Pozycjonowanie lokalne strony stolarza w Mapach Google: warsztat, salon i obszar montażu"),
        p("Klienci wpisują „stolarz Piaseczno”, „meble na wymiar Kraków” albo „schody drewniane Poznań” i wybierają z mapy. Jeśli można odwiedzić warsztat albo salon z ekspozycją, Profil Firmy w Google pokazuje adres i godziny; jeśli tylko montujesz u klienta, profil jest ustawiony jako firma działająca w terenie, z wypisanymi miejscowościami. Strona wspiera go podstronami głównych rodzajów prac i tymi samymi danymi co w katalogach."),
        p(
          "Podstawowa konfiguracja jest częścią pełnej strony, a stałą pracę nad Mapami i opiniami opisuję na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Strona stolarza, którą ChatGPT i Google AI Overviews potrafią przeczytać"),
        p("Coraz więcej osób pyta ChatGPT albo podsumowanie AI w Google, kto w okolicy zrobi garderobę na wymiar albo dębowe schody i ile to kosztuje. Asystent odpowiada na podstawie tekstu, który potrafi przeczytać. Rodzaje prac, materiały, ceny „od”, termin realizacji i obszar montażu zapisuję więc w HTML zwykłym tekstem, nie na grafikach, a firmę i usługi opisuję danymi strukturalnymi."),
        p(
          "Stałą pracę nad tym, żeby asystenci wymieniali stolarnię w odpowiedziach, opisuje strona ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Ile kosztuje strona internetowa dla stolarza"),
        p("Projekt graficzny jest częścią ceny, nie osobną pozycją na fakturze."),
        li("Prosta strona stolarza — strona główna, rodzaje prac z cenami „od”, galeria, o firmie, formularz: od 3000 do 6000 zł."),
        li("Strona stolarni z podstronami realizacji według rodzaju prac, podstroną materiałów, wyceną z wymiarami i rzutem, podstroną dla architektów i pozycjonowaniem lokalnym na start: od 8500 zł."),
        p(
          "Etapy pracy — brief, lista podstron, projekt na telefonie, wykonanie i start — znajdziesz na stronie ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ", a wszystkie stawki są w ",
          link("cenniku", "/pl/cennik"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strona internetowa dla stolarza: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona internetowa dla stolarza?", "Prosta strona kosztuje od 3000 do 6000 zł, pełna strona stolarni od 8500 zł — z realizacjami według rodzaju prac, materiałami, wyceną z rzutem, podstroną dla architektów i konfiguracją Map Google. Za projekt graficzny nie dopłacasz; stałą kwotę podaję, gdy zobaczę Twoje realizacje."],
          ["Jak długo powstaje strona stolarni?", "Zwykle cztery–sześć tygodni od briefu. Najwięcej czasu zabiera wybór zdjęć realizacji i ustalenie cen „od”; prosta strona z krótką galerią może ruszyć szybciej."],
          ["Mam tylko zdjęcia z telefonu. Wystarczą?", "Tak, jeśli są robione w dziennym świetle i z kilku stałych ujęć. Dostajesz krótką listę ujęć — całe wnętrze, zbliżenie łączeń i wykończenia, jedno zdjęcie z montażu — a kolejne realizacje dodajesz, gdy je kończysz."],
          ["Czy klient może przesłać projekt od architekta albo rzut od dewelopera?", "Tak. Formularz przyjmuje pliki PDF i zdjęcia, a większe komplety rysunków trafiają do wspólnego folderu powiązanego z zapytaniem, więc nic nie odbija się od skrzynki."],
          ["Czy podawać ceny, skoro każdy mebel jest na wymiar?", "Tak, jako ceny „od” za metr bieżący, stopień albo sztukę, z uwagą, co je podnosi. Mniej rozmów z osobami, które liczyły na ceny z marketu, i więcej konkretnych zapytań."],
          ["Czy sam dodam nowe realizacje i zmienię termin realizacji?", "Tak. Realizacje, zdjęcia, ceny i zdanie o terminie zmieniasz w prostym panelu, także z telefonu, a każda nowa realizacja ma ten sam układ."],
          ["Czy pracujesz ze stolarniami spoza Warszawy?", "Tak, z całej Polski. Pracuję zdalnie: rozmawiamy przez wideo i telefon, brief możesz nagrać jako wiadomość głosową, a projekt strony oglądasz i akceptujesz online. Wystawiam fakturę."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową dla stolarza: co mi wysłać"),
        p(
          "Wyślij nazwę stolarni, link do Instagrama, wizytówki Google lub obecnej strony, rodzaje prac z orientacyjnymi cenami „od”, obszar, w którym montujesz, informację, czy klienci mogą odwiedzić warsztat lub salon, i czy pracujesz z architektami wnętrz. Dziesięć zdjęć gotowych realizacji pomoże mi zaplanować galerię. Odpowiem listą podstron i stałą ceną. Skorzystaj z ",
          link("formularza powyżej", "#quote"),
          " albo napisz na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
