// Landing page fixture: Pozycjonowanie strony piekarni (PL), group
// «bakery-seo». New page. Market version for Polish piekarnie and cukiernie —
// craft bakeries, family bakeries with several sklepy firmowe, cukiernie with
// torty na zamówienie — not a translation of bakery-seo.en.
// Semantic core: BRIEF.md — bakery SEO ~10 a month per language; no measured
// PL phrase in ref/food-venues.md. H1 and headings carry «pozycjonowanie
// strony piekarni» (owner’s rule: always «strony») and «cukierni», plus
// customers’ phrases as examples: piekarnia blisko mnie, piekarnia czynna w
// niedzielę, chleb na zakwasie, tort na zamówienie, tort komunijny, pączki na
// tłusty czwartek, mazurek, makowiec, piekarnia bezglutenowa.
// Intent: ref/intent-check-food.md — EN «bakery website design» vs «bakery
// website» 0 shared; RU «сайт пекарни» vs «сайт кондитерской» 0 shared → one
// page covers piekarnia and cukiernia as the owner’s business, website pages
// are separate.
// Angles: five search groups, wizytówka (Piekarnia / Cukiernia, products,
// morning photos, early and Sunday hours, sold-out note, reviews), torty na
// zamówienie (price per kg or portion, lead time incl. May communion season,
// tort weselny), Polish season peaks (tłusty czwartek incl. firmy, Wielkanoc,
// Boże Narodzenie, komunie), zakwas / bezglutenowe / wegańskie, Grafika
// Google (file names, alt, captions, own photos), several sklepy firmowe,
// dostawy dla gastronomii (B2B), AI answers, raport, koszt.
// NOT on this page: budowa strony — formularz tortu, katalog, zaliczki,
// tabela alergenów (/pl/strona-internetowa-dla-piekarni — sibling, linked
// once); restaurant arguments (/pl/pozycjonowanie-strony-restauracji —
// linked once); wizytówka in depth (/pl/oferty/pozycjonowanie-lokalne);
// reklamy, social media.
// Owner’s rules: every SEO page covers AI search (GEO, AEO); never say there
// are no clients from the visitor’s industry; «faktura» only, never «faktura
// VAT»; no guaranteed positions.
import { p, h2, li, link, k } from "./pt";

export const bakerySeoPl = {
  lang: "pl",
  group: "bakery-seo",
  slug: "pozycjonowanie-strony-piekarni",
  title: "Pozycjonowanie strony piekarni",
  heading: "Pozycjonowanie strony piekarni i cukierni",
  excerpt:
    "Zajmuję się pozycjonowaniem strony piekarni i cukierni: torty na zamówienie z cenami i terminami, podstrony na tłusty czwartek, Wielkanoc i komunie, chleb na zakwasie i wypieki bezglutenowe, wizytówka Google ze zdjęciami wypieków, oferta dla kawiarni i sklepów oraz miejsce w odpowiedziach AI.",
  seo: {
    metaTitle: "SEO piekarni i cukierni: torty, Mapy Google | Bandziuk",
    metaDescription:
      "Pozycjonowanie strony piekarni i cukierni: torty na zamówienie, tłusty czwartek, Wielkanoc, wizytówka Google, wypieki bezglutenowe i AI. Audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Torty, święta, Mapy Google", "Audyt od 1000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Piekarnia blisko mnie · od 6:00", "Tort komunijny na zamówienie", "Pączki na tłusty czwartek", "Zadzwoń · Trasa"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO piekarni lub cukierni: strona, wizytówka Google, konkurencja w okolicy i odpowiedzi AI", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO dla piekarni: podstrony tortów, świąt i wypieków bezglutenowych, podpisy zdjęć, dane strukturalne", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie strony piekarni lub cukierni", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje pozycjonowanie strony piekarni",
      items: [
        { _key: k("o"), iconName: "layers", title: "Podstrony tortów na zamówienie", text: "Cena za kilogram, termin, prawdziwe realizacje" },
        { _key: k("o"), iconName: "file-text", title: "Tłusty czwartek, Wielkanoc, komunie", text: "Podstrony gotowe przed szczytem" },
        { _key: k("o"), iconName: "map-pin", title: "Wizytówka Google piekarni", text: "Produkty, poranne zdjęcia, godziny w niedziele" },
        { _key: k("o"), iconName: "image", title: "Zdjęcia tortów w Grafice Google", text: "Nazwy plików, podpisy, opisy" },
        { _key: k("o"), iconName: "sparkles", title: "Piekarnia w odpowiedziach AI", text: "Ceny, terminy i składniki zapisane tekstem" },
        { _key: k("o"), iconName: "trending-up", title: "Raport w zamówieniach", text: "Torty, święta, telefony i trasy" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO piekarni lub cukierni", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe pozycjonowanie strony piekarni", value: "od 3500 zł / mies.", note: "torty, święta, Mapy, AI", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: lokalne firmy, które sprzedają klientom z okolicy",
      subtitle:
        "Łączy je z piekarnią to, że klient szuka w pobliżu, na telefonie, a strona i wizytówka mają zamienić to wyszukiwanie w zamówienie. Dla warsztatu samochodowego z Warszawy przygotowałem lokalne SEO, wizytówkę w Mapach i podstrony usług — tak samo działa „piekarnia blisko mnie”. Felgilab, warszawska pracownia renowacji felg, ma na nowym WordPressie podstrony usług i cen, podobne do cennika tortów. Landi Room, warszawski salon kosmetyczny, sprzedaje kurs online przez stronę ze Stripe Checkout i z pierwszej kampanii Google Ads miał ponad 100 sprzedaży — to ten sam mechanizm co zaliczka za tort albo przedsprzedaż pączków. Podstrony, które zrobiłem psychoterapeucie z Mediolanu, cytuje ChatGPT, a ScanM2, która zajmuje się skanowaniem laserowym 3D, po przebudowie strony dostaje z Google 29 razy więcej odwiedzin niż wcześniej.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "e-commerce-landing-page-with-secured-video-access",
        "psychotherapist-website-milan",
        "architecture-website-rebuild-and-seo-scan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena pozycjonowania strony piekarni lub cukierni",
      subtitle: "W ciągu jednego dnia roboczego dostajesz listę pierwszych poprawek — w wizytówce, w podstronach tortów albo przed najbliższym świętem — i stałą cenę.",
      contextLabel: "Nazwa piekarni lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Czego chcesz sprzedawać więcej?", options: ["Tortów na zamówienie", "Wypieków na święta i tłusty czwartek", "Pieczywa w sklepach firmowych", "Dostaw dla kawiarni i sklepów"] },
        { _key: k("z"), question: "Ile macie punktów sprzedaży?", options: ["Jedną piekarnię lub cukiernię", "Dwa–trzy sklepy firmowe", "Kilka sklepów w różnych miejscowościach", "Sprzedajemy głównie hurtowo"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Pozycjonowanie strony piekarni to praca nad tym, żeby osoba szukająca „chleb na zakwasie Gdynia”, „tort urodzinowy na zamówienie Lublin” albo „pączki na tłusty czwartek zamówienie” trafiła do Twojej piekarni lub cukierni — w Mapach Google, w wynikach wyszukiwania i w odpowiedziach AI. Pracuję sam: robię audyt, piszę podstrony, wprowadzam zmiany w kodzie i pokazuję wynik w zamówieniach. Zapytań o piekarnie jest mniej niż o lokale gastronomiczne, ale jeden tort weselny albo stała dostawa pieczywa do kawiarni są warte więcej niż dzień sprzedaży bułek."),

        h2("Pozycjonowanie strony piekarni: jak klienci szukają chleba, ciast i tortów"),
        p("Frazy piekarni i cukierni układają się w pięć grup, a każda potrzebuje innego miejsca na stronie:"),
        li("piekarnia — „piekarnia blisko mnie”, „piekarnia czynna w niedzielę”, „chleb na zakwasie”, „piekarnia rzemieślnicza Kraków”"),
        li("torty — „tort na zamówienie Poznań”, „tort urodzinowy dla dziecka”, „tort komunijny”, „tort ze zdjęciem”"),
        li("uroczystości — „tort weselny cena”, „słodki stół na wesele”, „ciasta na komunię”"),
        li("dieta — „piekarnia bezglutenowa”, „tort wegański”, „ciasto bez cukru”"),
        li("święta — „pączki na tłusty czwartek”, „mazurek wielkanocny zamówienie”, „makowiec na święta”"),
        p("Większość piekarni jest widoczna tylko na pierwszą grupę, bo strona to adres i numer telefonu. Pozostałe cztery przynoszą zamówienia z zaliczką."),

        h2("Wizytówka Google piekarni: zdjęcia wypieków, produkty i godziny od świtu"),
        p("Na „piekarnia blisko mnie” odpowiada mapa. W wizytówce piekarni liczą się:"),
        li("kategoria główna „Piekarnia”, a „Cukiernia” jako dodatkowa tylko wtedy, gdy torty i ciasta robicie na co dzień"),
        li("godziny od pierwszego porannego wypieku, także w niedziele — piekarnie bywają otwarte, gdy sklepy obok są zamknięte, i ludzie szukają właśnie tego"),
        li("produkty z cenami i zdjęciami: chleb dnia, drożdżówki, sernik, najczęściej zamawiane torty"),
        li("zdjęcia robione rano, przy pełnych półkach, a nie po południu"),
        li("zdanie w opisie, że pieczywo bywa wyprzedane przed zamknięciem, i o której zwykle się kończy"),
        p(
          "Opinie, w których klient wymienia tort, okazję i smak, pomagają podwójnie: pozycji w Mapach i kolejnej osobie, która wybiera cukiernię. Prośbę o opinię najłatwiej wysłać razem z potwierdzeniem odbioru tortu. Pracę nad Mapami szerzej opisuję na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Torty na zamówienie w Google: podstrony tortów urodzinowych, komunijnych i weselnych"),
        p("Kto zamawia tort, wpisuje okazję i miasto, a potem szuka trzech odpowiedzi: czy to zrobicie, na kiedy i mniej więcej za ile. Każdy rodzaj tortu dostaje podstronę, która odpowiada na to w pierwszych linijkach:"),
        li("cena za kilogram albo za porcję i to, co ją podnosi — piętra, figurki z masy cukrowej, świeże owoce, opłatek ze zdjęciem"),
        li("z jakim wyprzedzeniem zamawiać, osobno na zwykły weekend i na majowy sezon komunii"),
        li("galeria prawdziwych tortów z podpisem: smak, waga, okazja"),
        li("jak wygląda zamówienie i zaliczka — jednym zdaniem, z linkiem do formularza"),
        p("Tort weselny potrzebuje własnej podstrony: jak umówić degustację, jakie są smaki i kremy, ile kosztuje porcja przy danej liczbie gości i jak wygląda dowóz i ustawienie tortu na sali. Pary porównują kilka cukierni, więc wygrywa ta, która odpowiada konkretnie."),

        h2("Tłusty czwartek, Wielkanoc i Boże Narodzenie: sezonowe pozycjonowanie strony cukierni"),
        p("Polski kalendarz cukierni ma kilka ostrych szczytów. Przed tłustym czwartkiem ludzie wpisują „pączki zamówienie” z nazwą miasta już tydzień–dwa wcześniej, a firmy zamawiają pączki dla całych zespołów. Przed Wielkanocą rosną frazy o mazurkach, babkach i serniku, przed Bożym Narodzeniem — o makowcu, piernikach i ciastach na Wigilię, a od kwietnia — o tortach i ciastach komunijnych."),
        p("Każdy szczyt ma podstronę z listą wypieków, cenami, terminem przyjmowania zamówień i dniami odbioru, opublikowaną kilka tygodni przed świętem. Na tłusty czwartek warto dodać sekcję dla firm: minimalna liczba sztuk, opakowania zbiorcze, faktura. Gdy limit zamówień się wyczerpie, pierwsza linijka podstrony mówi to wprost i wskazuje, co jeszcze można kupić na miejscu bez zamawiania."),

        h2("Chleb na zakwasie, wypieki bezglutenowe i wegańskie: podstrony dla uważnych klientów"),
        p("Klienci piekarni rzemieślniczej i osoby na diecie czytają stronę najuważniej. Kto szuka „chleb na zakwasie bez drożdży”, chce wiedzieć, jak długo trwa fermentacja i z jakiej mąki pieczecie. Kto szuka „piekarnia bezglutenowa”, musi wiedzieć, czy wypieki powstają w osobnej pracowni, czy we wspólnej, i jak unikacie kontaktu z mąką pszenną. Podstrona, która mówi to konkretnie, ze składnikami i alergenami każdego produktu, zdobywa klientów na lata, a ogólnikowe hasła tracą ich przy pierwszej wizycie. Piszę tylko to, co potwierdzisz; zasady oznaczania żywności jako bezglutenowej wynikają z przepisów, a nie z tekstu na stronie."),

        h2("Zdjęcia tortów i ciast w Grafice Google: nazwy plików, podpisy i opisy"),
        p("Wiele osób szuka pomysłu na tort w Grafice Google albo na Pintereście, zanim w ogóle wybierze cukiernię. Zdjęcie podpisane „tort na roczek z misiem, 2 kg, krem śmietankowy z truskawkami” może przyprowadzić rodzica, który wpisał prawie to samo. Liczą się trzy rzeczy: nazwa pliku i tekst alternatywny opisujące tort, podpis widoczny pod zdjęciem i tekst podstrony wokół galerii. Zdjęcia muszą pochodzić z Twojej pracowni — ten sam obraz z banku zdjęć jest na setkach stron i niczym Cię nie wyróżnia."),

        h2("Kilka sklepów firmowych piekarni: podstrona i wizytówka dla każdego punktu"),
        p("Piekarnia z kilkoma sklepami w mieście i okolicznych miejscowościach potrzebuje wizytówki dla każdego punktu z jego godzinami — sklep przy osiedlu otwiera o 6:00, punkt w galerii o 9:00 — i podstrony, która mówi, co tam jest: czy jest kawa i miejsce do siedzenia, czy można odebrać tort, czy jest parking. Ktoś, kto chce odebrać tort w drodze do pracy, musi od razu zobaczyć, że punkt w galerii wydaje zamówienia dopiero od 9:00, a sklep przy osiedlu — od świtu."),

        h2("Dostawy pieczywa dla kawiarni, sklepów i hoteli: pozycjonowanie oferty hurtowej"),
        p("Piekarnia, która zaopatruje kawiarnie, sklepy osiedlowe, hotele i firmy cateringowe, ma drugi zestaw fraz: „dostawy pieczywa dla firm”, „pieczywo dla gastronomii”, „ciasta dla kawiarni” z nazwą miasta. Jest ich niewiele, ale jeden klient to dostawa codziennie przez lata. Podstrona dla firm mówi, co dostarczacie, od jakiej ilości, w jakie dni i o której, do której godziny przyjmujecie zamówienie na jutro i jak zacząć — na przykład od próbnej dostawy. Dla właściciela kawiarni ważne są też termin płatności faktury i jeden numer telefonu do zmian w zamówieniu."),

        h2("Pozycjonowanie strony piekarni w ChatGPT i Google AI Overviews (GEO, AEO)"),
        p("Pytania „która cukiernia w Gdańsku robi torty bezglutenowe”, „gdzie zamówić 50 pączków na tłusty czwartek w Katowicach” czy „ile kosztuje kilogram tortu weselnego” ludzie wpisują dziś również w ChatGPT i Perplexity, a Google odpowiada na nie podsumowaniem AI. Asystent wybiera kilka miejsc i podaje powód, wzięty z tekstów, które umie odczytać. Mówi się o tym GEO albo AEO (generative / answer engine optimization); w piekarni to:"),
        li("cenę za kilogram lub porcję, terminy zamówień i obszar dowozu zapisane zdaniami, a nie tylko w formularzu"),
        li("dokładne informacje o składnikach i alergenach, bo asystent powtarza je niemal dosłownie"),
        li("dane strukturalne Bakery z adresem, godzinami i linkiem do oferty"),
        li("te same dane w wizytówce, na Facebooku, w katalogach ślubnych i na stronie"),
        p(
          "Przed rozpoczęciem pracy i po kilku miesiącach zadaję asystentom pytania Twoich klientów i zapisuję, które piekarnie polecają. Więcej o metodzie: ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Raport z pozycjonowania strony piekarni: zamówienia tortów, telefony i trasy"),
        p("Raport pokazuje to, co liczy właściciel piekarni: zapytania o torty i wpłacone zaliczki, które zaczęły się od wyszukiwania, zamówienia świąteczne według źródła, telefony i prośby o trasę z wizytówki każdego sklepu oraz podstrony, które je przyniosły. Po tłustym czwartku i Wielkanocy porównujemy wynik z poprzednim rokiem."),

        h2("Ile kosztuje pozycjonowanie strony piekarni"),
        li("Audyt SEO piekarni lub cukierni — strona, wizytówka, konkurencja w okolicy i odpowiedzi AI: od 1000 zł, jednorazowo."),
        li("Jednorazowe prace — podstrony tortów, świąt i wypieków bezglutenowych, podpisy zdjęć, porządek w wizytówce, dane strukturalne: od 1000 do 3000 zł."),
        li("Stałe pozycjonowanie strony piekarni — podstrony przed każdym sezonem, Mapy, opinie, AI i raport z zamówień: od 3500 zł miesięcznie."),
        p(
          "Osiedlowej piekarni często wystarczy audyt i kilka dobrych podstron. Jeśli najpierw potrzebny jest formularz zamówienia tortu, katalog wypieków albo przedsprzedaż, zajrzyj na stronę ",
          link("strona internetowa dla piekarni", "/pl/strona-internetowa-dla-piekarni"),
          ". Cukiernia z kawiarnią, która podaje też obiady, znajdzie więcej na stronie ",
          link("pozycjonowanie strony restauracji", "/pl/pozycjonowanie-strony-restauracji"),
          ". O stałej współpracy piszę na stronie ",
          link("strategia i optymalizacja SEO", "/pl/oferty/strategia-i-optymalizacja-seo"),
          ", pełny cennik jest w ",
          link("cenniku", "/pl/cennik"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie strony piekarni: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje pozycjonowanie strony piekarni?", "Audyt kosztuje od 1000 zł, pojedyncze zadania od 1000 do 3000 zł, a stała praca od 3500 zł miesięcznie. Cenę podam po krótkim opisie: co pieczecie, ile macie sklepów i jakich zamówień chcesz więcej."],
          ["Kiedy przygotować stronę na tłusty czwartek i Wielkanoc?", "Podstrona powinna być odświeżona i podlinkowana mniej więcej miesiąc–półtora przed świętem, a wizytówka na dwa–trzy tygodnie wcześniej powinna pokazywać termin zamówień. Firmy planują pączki dla zespołów wcześniej niż klienci indywidualni."],
          ["Czy podawać ceny tortów na stronie?", "Tak, przynajmniej cenę „od” za kilogram albo za porcję. Kto zamawia tort, porównuje kilka cukierni, a asystent AI poleci cukiernię z ceną tylko wtedy, gdy umie ją odczytać."],
          ["Czy zdjęcia tortów pomagają w pozycjonowaniu?", "Tak, jeśli są Twoje i opisane: nazwa pliku, tekst alternatywny i podpis ze smakiem, wagą i okazją. Wtedy mogą przyprowadzać klientów z Grafiki Google, gdzie wiele osób szuka pomysłów na tort."],
          ["Czy pozycjonowanie ma sens dla małej piekarni osiedlowej?", "Tak, ale w małej skali: poprawna wizytówka, godziny w niedziele, kilka podstron i prośby o opinię. Stała praca opłaca się zwykle przy tortach na zamówienie, kilku sklepach albo dostawach dla firm."],
          ["Czy ChatGPT może polecić moją cukiernię?", "Tak, gdy ktoś pyta o tort lub wypieki w Twoim mieście, a ceny, terminy i składniki są łatwe do odczytania i zgodne w wizytówce i na stronie. Gwarancji polecenia nie ma; sprawdzam odpowiedzi asystentów na starcie i kilka miesięcy później."],
          ["Czy pracujesz z piekarniami spoza Warszawy?", "Tak — pracuję zdalnie dla piekarni z całego kraju, na danych wyszukiwań z ich okolicy; zdjęcia wypieków i informacje o recepturach przesyłasz Ty. Rozmawiamy przez telefon, wideo albo WhatsApp, a za pracę wystawiam fakturę."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie strony piekarni: co mi wysłać"),
        p(
          "Wyślij nazwę piekarni lub cukierni, adres strony i linki do wizytówek w Mapach Google, liczbę sklepów, informację, czy robicie torty na zamówienie i wypieki bezglutenowe, czy dostarczacie pieczywo firmom oraz czego chcesz więcej przed najbliższym sezonem — tortów, pączków, wielkanocnych ciast czy stałych klientów hurtowych. Odeślę listę pierwszych zmian i stałą cenę. Skorzystaj z ",
          link("formularza powyżej", "#quote"),
          " albo napisz na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
