// Landing page fixture: Strona internetowa dla piekarni (PL), group
// «bakery-website-design». New page. Market version for Polish piekarnie and
// cukiernie, not a translation of bakery-website-design.en. In PL this is a
// development page that includes design.
// Semantic core: ref/food-venues.md has no measured PL phrases for bakeries
// (PL suggestions return 0–2 phrases for food venues); target phrases from the
// BRIEF.md slug and angles: «strona internetowa dla piekarni» (H1, H2, cost H2,
// FAQ), «strona internetowa dla cukierni» / «strona cukierni» (H1, H2, FAQ),
// «strona www piekarni» (metaTitle), «torty na zamówienie» (H2).
// Intent: ref/intent-check-food.md — EN «bakery website design» vs «bakery
// website» 0 of 10 shared URLs (design SERP = owners, plain SERP = bakeries
// themselves); RU «сайт пекарни» vs «сайт кондитерской» 0 shared URLs but
// both are customers’ SERPs → one page for piekarnia + cukiernia, written for
// owners.
// Polish angles: godziny i niedziele, katalog z dniami wypieku, torty na
// urodziny / chrzciny / komunię z zaliczką BLIK i Przelewy24, tłusty czwartek
// i Wielkanoc z odbiorem o godzinie, 14 alergenów (UE), odbiorcy hurtowi z
// NIP, kilka sklepów, Pyszne.pl / Glovo / Wolt, Shoper / WordPress / Wix vs
// projekt na zamówienie, AI-readable build, cost.
// NOT on this page: pozycjonowanie (frazy „piekarnia blisko mnie”, „torty na
// zamówienie + miasto”, wizytówka Google, sezonowe wyszukiwania) →
// /pl/pozycjonowanie-strony-piekarni (sibling, another author; linked once);
// wizytówka → /pl/oferty/pozycjonowanie-lokalne; kawiarnia lub restauracja
// przy piekarni → /pl/strona-dla-restauracji (closest restaurant page, linked
// once, no shared arguments).
// Portfolio: Landi Room (płatność online), Felgilab (cennik), firma
// remontowo-inwestycyjna (zdjęcia), przechowalnia opon (jedna strona, edycja
// przez właściciela), warsztat samochodowy (Mapy Google).
// Prices: /pl/cennik (3000–6000 zł, od 8500 zł), projekt w cenie. Owner’s
// rules: every page covers AI search; never say there are no clients from the
// visitor’s industry.
import { p, h2, li, link, k } from "./pt";

export const bakeryWebsiteDesignPl = {
  lang: "pl",
  group: "bakery-website-design",
  slug: "strona-internetowa-dla-piekarni",
  title: "Strona internetowa dla piekarni",
  heading: "Strona internetowa dla piekarni i cukierni",
  excerpt:
    "Tworzę strony internetowe dla piekarni i cukierni: katalog pieczywa i ciast z dniami wypieku, zamawianie tortów z liczbą porcji, zdjęciem wzoru i zaliczką BLIK, odbiór o wybranej godzinie na tłusty czwartek i Wielkanoc, alergeny przy każdym produkcie i podstronę dla odbiorców hurtowych.",
  seo: {
    metaTitle: "Strona www piekarni z zamawianiem tortów | Bandziuk",
    metaDescription:
      "Strona internetowa dla piekarni i cukierni: katalog wypieków, torty na zamówienie z zaliczką BLIK, odbiór o wybranej godzinie, alergeny, hurt. Od 3000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt + wykonanie, jedna cena", "Od 3000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Dziś otwarte 6:00–18:00", "Zamów tort", "Odbiór w czwartek 7:00", "Alergeny przy produkcie"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona internetowa dla piekarni lub cukierni, projekt w cenie", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Strona piekarni z katalogiem wypieków, zamawianiem tortów z zaliczką online, odbiorem o wybranej godzinie, filtrami alergenów, podstroną hurtową i kilkoma sklepami, projekt w cenie", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co dostajecie ze stroną internetową dla piekarni",
      items: [
        { _key: k("o"), iconName: "image", title: "Katalog pieczywa, ciast i tortów", text: "Wasze zdjęcia, ceny i dni wypieku" },
        { _key: k("o"), iconName: "file-text", title: "Formularz zamówienia tortu", text: "Porcje, data, smak, napis, zdjęcie wzoru" },
        { _key: k("o"), iconName: "shield-check", title: "Zaliczka BLIK-iem lub kartą", text: "Wpłacona, zanim cukiernik zacznie pracę" },
        { _key: k("o"), iconName: "layers", title: "Zamówienia z odbiorem o godzinie", text: "Tłusty czwartek, Wielkanoc, chleb na sobotę" },
        { _key: k("o"), iconName: "map-pin", title: "Sklepy, godziny i strefy dostawy", text: "Podstrona dla każdego punktu sprzedaży" },
        { _key: k("o"), iconName: "sparkles", title: "Zrozumiała dla Google i ChatGPT", text: "Wypieki, alergeny i godziny zapisane tekstem" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona piekarni lub cukierni", value: "3000–6000 zł", note: "projekt w cenie" },
        { _key: k("r"), label: "Katalog, torty z zaliczką, odbiór o godzinie, hurt", value: "od 8500 zł", note: "projekt w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: strony lokalnych firm, które zbudowałem",
      subtitle:
        "Wspólne z piekarnią mają to, że przyjmują płatności lub zapytania online, pokazują ceny wprost i trafiają do nich klienci z okolicy. Warszawski salon Landi Room sprzedaje kurs online przez Stripe Checkout, a dostęp otwiera się zaraz po płatności — tak samo działa zaliczka za tort. Pracownia renowacji felg Felgilab dostała nową stronę na WordPressie z czytelnymi podstronami usług i cen. Warszawska firma remontowo-inwestycyjna ma projekt premium, w którym sprzedają duże zdjęcia realizacji. Warszawska przechowalnia opon działa na jednej stronie, której teksty właściciel zmienia sam. Warsztat samochodowy z Warszawy dostał SEO lokalne, pracę nad Mapami Google i podstrony usług.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "e-commerce-landing-page-with-secured-video-access",
        "felgilab-wordpress-rebuild",
        "renovation-and-investment-website-with-premium-design",
        "tyre-storage-landing-page-with-editable-seo",
        "auto-repair-seo-and-ux-boost",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej dla piekarni lub cukierni",
      subtitle: "Następnego dnia roboczego dostajecie listę podstron, opis tego, jak zadziałają zamówienia tortów i odbiór, oraz stałą cenę.",
      contextLabel: "Nazwa piekarni lub obecna strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Co macie teraz?", options: ["Tylko Facebook i Instagram", "Szablon WordPressa", "Sklep na Shoperze lub w kreatorze", "Starą stronę bez zamówień"] },
        { _key: k("z"), question: "Co strona ma obsługiwać najpierw?", options: ["Torty na zamówienie", "Zamówienia świąteczne z odbiorem", "Odbiorców hurtowych", "Wszystko naraz"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Strona internetowa dla piekarni lub cukierni to miejsce, w którym klient sprawdza godziny otwarcia i dzisiejsze wypieki, zamawia tort na konkretną datę i płaci zaliczkę BLIK-iem, a kawiarnia z sąsiedztwa składa stałe zamówienie na pieczywo. Projektuję ją i buduję sam — od układu podstron i wyglądu po formularze, płatności i panel — więc całość prowadzi jedna osoba, a cenę znacie przed rozpoczęciem pracy."),

        h2("Strona internetowa dla piekarni: godziny otwarcia i dzisiejsze wypieki na pierwszym ekranie"),
        p("Do piekarni wpada się po drodze — do pracy, ze szkoły, przed niedzielnym obiadem. Kto otwiera stronę na telefonie, chce wiedzieć, czy zdąży i co jeszcze zastanie. Pierwszy ekran podaje:"),
        li("godziny na dziś, z osobną informacją o niedzielach i dniach przed świętami — „Dziś otwarte 6:00–18:00”"),
        li("co dziś wyszło z pieca albo link do listy dnia"),
        li("przycisk „Zamów tort”, który prowadzi do formularza, a nie do numeru telefonu"),
        li("adres z wyznaczeniem trasy w Mapach Google jednym dotknięciem"),
        p("Gdy chleb na zakwasie znika przed południem, krótka linijka „Zakwasowy zwykle do 11:00 — zarezerwuj na sobotę” oszczędza klientom pustego kursu i zamienia ich w zamówienia z wyprzedzeniem."),

        h2("Katalog pieczywa i ciast na stronie piekarni: zdjęcia, ceny i dni wypieku"),
        p("Oferta piekarni ma swój rytm: kajzerki codziennie, chleb żytni w piątki, makowiec od grudnia. Katalog na stronie oddaje ten rytm. Przy każdym produkcie jest:"),
        li("zdjęcie wypieku z Waszego pieca, przekrojonego tam, gdzie sprzedaje miąższ albo warstwy"),
        li("cena za sztukę, bochenek lub kilogram oraz gramatura"),
        li("dni, w które się go piecze, i informacja, czy można go zamówić wcześniej"),
        li("skład i alergeny zapisane tekstem"),
        p("Wypieki sezonowe wyłącza się w panelu zamiast je kasować, więc za rok makowiec wraca z tymi samymi zdjęciami i pod tym samym adresem. Kategorie są takie jak przy ladzie — pieczywo, drożdżówki, ciasta, torty, ciastka — a nie takie, jakie wymyślił autor szablonu."),

        h2("Torty na zamówienie przez stronę cukierni: termin, liczba porcji, zdjęcie wzoru i zaliczka"),
        p("Tort na urodziny, chrzciny czy komunię to małe zlecenie z terminem, a ustalanie go przez telefon i Messengera ciągnie się dniami. Formularz zbiera wszystko za jednym razem:"),
        li("najpierw data odbioru lub dostawy — terminy krótsze niż Wasz czas realizacji są nieaktywne"),
        li("wielkość według liczby porcji, z podpowiedzią, ilu gości wykarmi tort okrągły 20 cm, 24 cm albo dwupiętrowy"),
        li("biszkopt, krem, dekoracja i napis z limitem znaków — wybierane z Waszych list, nie wpisywane w puste pole"),
        li("miejsce na zdjęcie wzoru albo opis motywu przewodniego"),
        li("potrzeby dietetyczne: bez glutenu, bez laktozy, wegański — tylko jeśli je realizujecie"),
        p("Torty z gotowej oferty klient opłaca od razu. Torty z indywidualną dekoracją kończą się zapytaniem: potwierdzacie projekt i cenę, a klient dostaje link do zaliczki płatnej BLIK-iem, kartą albo szybkim przelewem przez Przelewy24. Po wpłacie termin blokuje się w kalendarzu pracowni, więc w majowe soboty nie przyjmiecie więcej tortów komunijnych, niż zdąży zrobić cukiernik."),

        h2("Zamówienia na tłusty czwartek i Wielkanoc: odbiór w piekarni o wybranej godzinie"),
        p("Tłusty czwartek, Wielkanoc i Boże Narodzenie to dni, w których kolejka wychodzi na ulicę. Zamówienia przez stronę zamieniają je w listę, według której można piec. Klient wybiera produkty i godzinę odbioru — na przykład czwartek 7:00–8:00 — a każdy przedział przyjmuje tylko tyle zamówień, ile zdąży wydać obsługa. Pączki zamawia się na sztuki albo tuziny. Przed Wielkanocą osobna podstrona zbiera mazurki, babki i serniki z datą zamknięcia zamówień, a po tej dacie pokazuje napis „już tylko w sklepie”. Listę na każdą godzinę drukujecie z panelu, więc rano zamówienia są spakowane i podpisane, zanim otworzycie drzwi."),

        h2("14 alergenów i skład wypieków na stronie piekarni"),
        p("Przepisy UE wymagają informacji o 14 alergenach także przy produktach sprzedawanych bez opakowania, a w piekarni dotyczy to prawie wszystkiego: glutenu, jaj, mleka, sezamu, orzechów. Na stronie skład i alergeny stoją przy każdym produkcie zwykłym tekstem, nie na zdjęciu etykiety, a alergeny są wyróżnione. Katalog można filtrować — bez glutenu, bez laktozy, wegańskie — jeśli macie takie wypieki. Przy produktach bezglutenowych strona wprost mówi o ryzyku zanieczyszczenia krzyżowego, gdy wszystko powstaje w jednej pracowni. Skład zmieniacie w tym samym miejscu co ceny, a zmiana pojawia się na całej stronie naraz."),

        h2("Strona piekarni dla odbiorców hurtowych: sklepy, kawiarnie i restauracje"),
        p("Stałe dostawy do sklepów osiedlowych, kawiarni i restauracji często dają piekarni pewniejszy przychód niż sprzedaż przy ladzie. Odbiorcy hurtowi dostają osobną podstronę:"),
        li("asortyment, minimalne zamówienie oraz dni i godziny dostaw"),
        li("formularz współpracy: nazwa firmy, NIP, adres dostawy, osoba kontaktowa, co i jak często"),
        li("cennik hurtowy widoczny po zalogowaniu albo wysyłany po pierwszej rozmowie"),
        li("stałe zamówienie, które kierownik kawiarni zmienia do ustalonej godziny dnia poprzedniego"),
        p("Klienci detaliczni nie widzą cen hurtowych, a kawiarnia nie musi dzwonić, żeby zmienić wtorkową dostawę."),

        h2("Piekarnia z kilkoma sklepami: podstrona punktu, strefy dostawy, Pyszne.pl, Glovo i Wolt"),
        p("Piekarnia z trzema sklepami potrzebuje podstrony dla każdego, a nie jednej listy adresów w stopce. Każdy punkt ma swoje godziny, także świąteczne, mapę, informację, co wypieka się na miejscu, a co przyjeżdża z pracowni, oraz telefon. Przy zamówieniu z odbiorem klient najpierw wybiera sklep, żeby tort nie czekał na niego na drugim końcu miasta. Jeśli dowozicie, strona pokazuje strefy z ceną dostawy i minimalnym zamówieniem. Sprzedaż przez Pyszne.pl, Glovo czy Wolt może działać jak dotąd — strona do nich linkuje, ale na pierwszym planie stawia zamówienia własne, od których nie płacicie prowizji."),
        p(
          "Jeśli przy piekarni działa kawiarnia lub restauracja z obsługą przy stolikach, tę część opisuję na stronie ",
          link("strona internetowa dla restauracji", "/pl/strona-dla-restauracji"),
          ".",
        ),

        h2("Projekt strony cukierni i piekarni: zdjęcia wypieków i kolory z Waszych opakowań"),
        p("Wypieki fotografuje się z bliska i w dziennym świetle: przekrojony bochenek z dziurkami w miąższu, warstwy ciasta francuskiego, lukier na pączku, kawałek tortu z widocznymi przekładkami. Projekt bierze kolory i liternictwo z tego, co już macie — z pudełek na torty, papierowych toreb, szyldu — i kładzie wypieki na ciepłym, jednolitym tle, które nie przekłamuje ich koloru."),
        p("Na start wystarczą zdjęcia z telefonu robione przy oknie, na jednym tle i pod tym samym kątem w każdej kategorii; sesję u fotografa można dodać później bez zmian w układzie strony. Zdjęcia są kompresowane i dopasowane do ekranu, więc katalog z pięćdziesięcioma ciastkami otwiera się szybko także na telefonie."),

        h2("Szablon strony piekarni, Shoper czy strona cukierni na zamówienie"),
        p("Wiele piekarni i cukierni zaczyna od profilu na Facebooku i Instagramie, szablonu WordPressa albo sklepu na Shoperze czy w kreatorze Wix. Na początek to wystarcza: klienci widzą adres i zdjęcia. Kłopot pojawia się przy tym, co odróżnia piekarnię od zwykłego sklepu: czas realizacji tortu, limity w godzinach odbioru, produkty pieczone w wybrane dni, odbiorcy hurtowi, alergeny przy każdym produkcie. Szablony łatają to wtyczkami, które ze sobą nie współpracują."),
        p("Strona na zamówienie jest ułożona wokół Waszej oferty i rytmu pracowni — na WordPressie z WooCommerce albo na Next.js z panelem headless CMS — a domena, kod i lista klientów należą do Was. Przy przejściu ze starej strony każdy dotychczasowy adres dostaje przekierowanie 301, żeby nie stracić pozycji w Google."),

        h2("Strona piekarni, którą ChatGPT i Google AI Overviews potrafią przeczytać"),
        p("Pytania „gdzie zamówić tort bezglutenowy na Mokotowie” albo „która piekarnia w Krakowie jest otwarta w niedzielę rano” coraz częściej trafiają do ChatGPT i podsumowań AI w Google. Asystent odpowiada na podstawie tekstu, który potrafi przeczytać. Dlatego godziny, adresy sklepów, nazwy i ceny wypieków, czas realizacji tortów i alergeny są w HTML zwykłym tekstem, a piekarnia, jej punkty i produkty mają dane strukturalne schema.org. Na tych samych zasadach działa strona psychoterapeuty z Mediolanu, której nowe podstrony pojawiają się już w odpowiedziach ChatGPT."),
        p(
          "O tym, jak utrzymać piekarnię w odpowiedziach AI, piszę na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          "; o miejscu w Google na zapytania typu „torty na zamówienie” z nazwą miasta — na stronie ",
          link("pozycjonowanie strony piekarni", "/pl/pozycjonowanie-strony-piekarni"),
          ", a wizytówce w Mapach Google poświęcona jest strona ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Ile kosztuje strona internetowa dla piekarni"),
        li("Prosta strona piekarni lub cukierni — strona główna, wypieki z cenami, formularz zapytania o tort, sklepy i kontakt: od 3000 do 6000 zł."),
        li("Strona z katalogiem i dniami wypieku, zamawianiem tortów z zaliczką online, odbiorem o wybranej godzinie, filtrami alergenów, podstroną hurtową i kilkoma sklepami: od 8500 zł."),
        p(
          "Projekt graficzny jest wliczony w obie kwoty. Jak wygląda współpraca krok po kroku, pokazuję na stronie ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ", a ceny wszystkich usług są w ",
          link("cenniku", "/pl/cennik"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strona internetowa dla piekarni i cukierni: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona internetowa dla piekarni?", "Prosta strona z wypiekami, formularzem zapytania o tort i sklepami kosztuje od 3000 do 6000 zł. Strona z pełnym katalogiem, zamawianiem tortów z zaliczką, odbiorem o godzinie, alergenami i podstroną hurtową — od 8500 zł. Projekt graficzny jest w cenie; stałą kwotę podaję po obejrzeniu Waszej oferty."],
          ["Ile trwa zrobienie strony cukierni z zamawianiem tortów?", "Zwykle od czterech do siedmiu tygodni od briefu. Najwięcej czasu zajmuje spisanie smaków, wielkości, czasu realizacji i zasad odbioru; prostą stronę bez płatności online można uruchomić szybciej."],
          ["Czy klient może wpłacić zaliczkę za tort przez stronę?", "Tak. Tort z gotowej oferty opłaca się od razu, a przy torcie z indywidualną dekoracją klient dostaje link do zaliczki po potwierdzeniu projektu. Płaci BLIK-iem, kartą albo szybkim przelewem."],
          ["Czy strona wytrzyma tłusty czwartek?", "Tak. Strony katalogu są przygotowane z wyprzedzeniem i nie obciążają serwera, a każdy przedział godzin odbioru ma limit zamówień. Gdy przedział się zapełni, klient widzi kolejny wolny."],
          ["Czy nadal możemy sprzedawać przez Pyszne.pl, Glovo i Wolt?", "Tak. Strona nie zastępuje tych serwisów, tylko daje klientom drogę do zamówień bez prowizji: tortów, zamówień świątecznych i odbioru w sklepie. Linki do aplikacji dostaw mogą zostać na stronie."],
          ["Czy sami zmienimy ceny, skład i godziny otwarcia?", "Tak. Produkty, ceny, dni wypieku, alergeny, godziny odbioru i godziny świąteczne zmieniacie w prostym panelu, z komputera albo z telefonu."],
          ["Czy pracujesz z piekarniami spoza Warszawy?", "Tak, z całej Polski. Wszystko omawiamy przez wideo, telefon i maile, kolejne etapy akceptujecie online, a po zakończeniu pracy wystawiam fakturę."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową dla piekarni: co mi wysłać"),
        p(
          "Wyślijcie link do obecnej strony albo profilu na Facebooku, listę wypieków z cenami, torty robione na zamówienie z wielkościami i czasem realizacji, adresy i godziny sklepów, informację o dostawach i odbiorcach hurtowych oraz kilka zdjęć Waszych wypieków. Odpowiem listą podstron i stałą ceną. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
