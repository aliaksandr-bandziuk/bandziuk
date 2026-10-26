// Landing page fixture: Strona internetowa dla kwiaciarni (PL), group
// «florist-website-design». New page. Market version for Polish kwiaciarnie,
// not a translation of florist-website-design.en. In PL this is a development
// page that includes design.
// Semantic core: ref/creative-leisure.md has no measured PL phrases for
// florists; target phrases from BRIEF.md slug: «strona internetowa dla
// kwiaciarni» (H1, H2, cost H2, FAQ), «sklep z kwiatami online» / «sklep
// internetowy kwiaciarni» (H2), «strona www kwiaciarni» (metaTitle).
// Intent: ref/intent-check-creative-leisure.md — EN «florist website design»
// vs «florist seo» 0 of 10 shared URLs → separate pages; sibling
// /pl/pozycjonowanie-strony-kwiaciarni linked. EN «website for florists» returns
// shops themselves — the PL page targets the owner’s phrase.
// Polish angles: first screen with today’s order hour, sklep z kwiatami with
// strefy dostawy, godziny, limit zamówień na Dzień Kobiet; own photos with
// sizes and a substitution note; zamówienie: odbiorca, bilecik, anonimowa
// dostawa, faktura z NIP, BLIK / Przelewy24 / PayU; subskrypcja for homes and
// firms; wedding and First Communion enquiry form; calm design (renovation
// case); Shoper / WordPress template vs custom; AI-readable build; cost.
// NOT on this page: pozycjonowanie, podstrony dostaw jako SEO, wizytówka
// Google, Allegro i sieci w wynikach, kalendarz sezonów
// (/pl/pozycjonowanie-strony-kwiaciarni — sibling; wizytówka →
// /pl/oferty/pozycjonowanie-lokalne). The brief names no neighbour page for
// florists. Portfolio: renovation (premium visual), Landi Room (Stripe +
// automatic confirmation), Cyprus VIP Estates (catalog), Felgilab, Giuseppe.
// Prices: /pl/cennik (3000–6000 zł, od 8500 zł), projekt w cenie. Owner’s
// rules: every page covers AI search; never say there are no clients from the
// visitor’s industry; the excluded occasion type is not mentioned.
import { p, h2, li, link, k } from "./pt";

export const floristWebsiteDesignPl = {
  lang: "pl",
  group: "florist-website-design",
  slug: "strona-internetowa-dla-kwiaciarni",
  title: "Strona internetowa dla kwiaciarni",
  heading: "Strona internetowa dla kwiaciarni",
  excerpt:
    "Projektuję i wykonuję strony internetowe dla kwiaciarni: sklep z kwiatami online ze strefami i godzinami dostawy, prawdziwe zdjęcia Waszych bukietów, zamówienie z bilecikiem i płatnością BLIK, subskrypcje kwiatów dla domu i firm oraz formularz zapytań o florystykę ślubną i komunijną.",
  seo: {
    metaTitle: "Strona www kwiaciarni ze sklepem i dostawą | Bandziuk",
    metaDescription:
      "Strona internetowa dla kwiaciarni: sklep z kwiatami, strefy i godziny dostawy, zdjęcia bukietów, bilecik i BLIK, subskrypcje, zapytania ślubne. Od 3000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt + wykonanie, jedna cena", "Od 3000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Dostawa jeszcze dziś", "Wybierz godzinę dostawy", "Dodaj bilecik", "Zapytaj o ślub"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona internetowa dla kwiaciarni, projekt w cenie", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Strona kwiaciarni ze sklepem online, strefami i godzinami dostawy, zamówieniem z bilecikiem, subskrypcjami i zapytaniami ślubnymi, projekt w cenie", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co dostajecie ze stroną internetową dla kwiaciarni",
      items: [
        { _key: k("o"), iconName: "map-pin", title: "Sklep z kwiatami ułożony wokół dostawy", text: "Strefy, ceny dostawy, godziny i limit zamówień" },
        { _key: k("o"), iconName: "image", title: "Zdjęcia Waszych bukietów", text: "Jeden styl zdjęć, widoczny rozmiar, bez cudzych fotek" },
        { _key: k("o"), iconName: "shield-check", title: "Zamówienie pomyślane jako prezent", text: "Odbiorca, bilecik, BLIK, faktura z NIP" },
        { _key: k("o"), iconName: "layers", title: "Subskrypcje kwiatów", text: "Do domu i biura, z pauzą i zmianą terminu online" },
        { _key: k("o"), iconName: "message-circle", title: "Zapytania o śluby i komunie", text: "Data, miejsce, widełki budżetu, zdjęcia inspiracji" },
        { _key: k("o"), iconName: "sparkles", title: "Czytelna dla Google i asystentów AI", text: "Dostawa, bukiety i ceny zapisane tekstem" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona kwiaciarni", value: "3000–6000 zł", note: "projekt w cenie" },
        { _key: k("r"), label: "Sklep, strefy dostawy, subskrypcje, śluby", value: "od 8500 zł", note: "projekt w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: strony internetowe, które zbudowałem",
      subtitle:
        "Każda z tych stron robi część tego, czego potrzebuje kwiaciarnia. Warszawska firma remontowo-inwestycyjna dostała projekt premium, w którym sprzedają duże zdjęcia skończonych wnętrz — u Was tę rolę grają bukiety. Warszawski salon Landi Room sprzedaje kurs online przez Stripe Checkout, a kupująca dostaje dostęp automatycznie po zapłacie — tak samo jak zamówienie kwiatów potrzebuje płatności i natychmiastowego potwierdzenia. Cyprus VIP Estates, zbudowany od zera w pięciu językach, ma katalog z filtrami i mapą, a zapytania trafiają prosto do CRM. Pracownia renowacji felg Felgilab dostała nową stronę na WordPressie z czytelnymi podstronami usług i cen. Psychoterapeuta z Mediolanu ma spokojny projekt na Next.js i Sanity, a nowe podstrony pojawiają się już w odpowiedziach ChatGPT.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "renovation-and-investment-website-with-premium-design",
        "e-commerce-landing-page-with-secured-video-access",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "felgilab-wordpress-rebuild",
        "psychotherapist-website-milan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej dla kwiaciarni",
      subtitle: "Następnego dnia roboczego dostajecie propozycję podstron, opis tego, jak zadziała dostawa i koszyk, oraz stałą cenę.",
      contextLabel: "Nazwa kwiaciarni lub obecna strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Co macie teraz?", options: ["Tylko Instagram i telefon", "Konto na Allegro", "Sklep na Shoperze lub z kreatora", "Starą stronę na WordPressie"] },
        { _key: k("z"), question: "Co strona ma sprzedawać najpierw?", options: ["Kwiaty z dostawą na dziś", "Florystykę ślubną i komunijną", "Subskrypcje i kwiaty dla firm", "Wszystko po trochu"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Strona internetowa dla kwiaciarni to Wasz własny sklep z kwiatami w sieci, w którym klient wybiera bukiet, dzień i godzinę dostawy, wpisuje bilecik i płaci BLIK-iem w kilku krótkich krokach. Całość robię osobiście: układ podstron, projekt graficzny, ustawienia dostaw i podłączenie płatności. Nie ma podwykonawców, więc o wygląd i działanie sklepu pytacie jedną osobę, a kwotę znacie przed startem."),

        h2("Strona internetowa dla kwiaciarni: pierwszy ekran na telefonie"),
        p("Kwiaty zamawia się zwykle z telefonu i często w ostatniej chwili, w przerwie w pracy albo wieczorem przed imieninami. Pierwszy ekran odpowiada bez przewijania:"),
        li("czy dowozicie dziś i do której godziny przyjmujecie zamówienia — „Dostawa kwiatów na Mokotowie i Ursynowie, zamówienia na dziś do 14:00”, z Waszą godziną"),
        li("od czego zacząć — bestsellery, bukiety według okazji albo według ceny"),
        li("przycisk połączenia i wiadomości dla tych, którzy wolą porozmawiać z florystką"),
        li("adres i godziny otwarcia dla odbioru osobistego"),
        p("Na telefonie koszyk i telefon są przypięte u dołu ekranu. Napis o dostawie na dziś zmienia się sam, gdy minie godzina graniczna, żeby nikt nie zamówił wieczorem bukietu, którego nie da się już dowieźć."),

        h2("Sklep z kwiatami online: strefy dostawy, godziny i limit zamówień"),
        p("Dostawa odróżnia kwiaciarnię od innych sklepów internetowych i na niej najczęściej wykładają się gotowe szablony. Sklep, który buduję, zna:"),
        li("strefy dostawy — sprawdzenie adresu albo kodu pocztowego przed zamówieniem i cenę dla każdej strefy"),
        li("godzinę graniczną zamówień na dziś, inną w soboty, i dni bez dostaw"),
        li("przedziały godzin, które możecie obiecać — przed południem, po południu albo bez godziny — i ile zamówień mieści się w każdym"),
        li("limity na Dzień Kobiet, Walentynki i Dzień Matki: przedział zamyka się, gdy jest pełny, zamiast przyjmować zamówienia, których kierowca nie rozwiezie"),
        p("Odbiór osobisty w kwiaciarni ma własne godziny. Wszystkie te zasady ustawiacie w panelu, więc zmiana ceny dostawy czy zablokowanie dnia nie wymaga programisty."),

        h2("Zdjęcia bukietów w sklepie kwiaciarni: własne kompozycje i rozmiary"),
        p("Zdjęcia z hurtowni albo z katalogu sieci pokazują bukiety, których Wasza kwiaciarnia może nigdy nie ułożyć, a klient widzi różnicę przy doręczeniu. Lepiej sprzedają zdjęcia Waszych kompozycji, robione za każdym razem tak samo:"),
        li("to samo tło, światło i kadr dla każdego produktu, żeby katalog wyglądał jak jedna kwiaciarnia"),
        li("każdy bukiet w dwóch–trzech rozmiarach z widoczną skalą — wazon, dłoń albo wymiary"),
        li("drugie zdjęcie z boku albo w opakowaniu, bo kupującego prezent interesuje, jak bukiet dotrze"),
        p("Kwiaty zmieniają się z sezonem, więc przy każdym produkcie jest krótka informacja: florystka może zastąpić kwiat innym o tej samej wartości i kolorystyce. Napisana przed zamówieniem, oszczędza rozmów zaczynających się od „to nie jest bukiet, który zamawiałam”. Zdjęcia są skompresowane i podawane w nowoczesnych formatach, więc katalog stu bukietów otwiera się szybko także na telefonie."),

        h2("Zamówienie kwiatów z dostawą: odbiorca, bilecik, BLIK i faktura"),
        p("Zamówienie kwiatów obsługuje dwie osoby: tę, która płaci, i tę, która otwiera drzwi. Kwiaciarnia dostaje wszystko, czego potrzebuje, w kilku krótkich krokach:"),
        li("najpierw data dostawy, bo od niej zależy, co jest dostępne i ile kosztuje dowóz"),
        li("imię, adres i telefon odbiorcy, z polem na uwagi: recepcja, numer sali, kod do bramy"),
        li("treść bilecika z limitem znaków i kilkoma gotowymi propozycjami dla tych, którym brakuje słów"),
        li("dane zamawiającego, płatność BLIK, Przelewy24 lub PayU, opcja dostawy anonimowej i faktura na firmę po wpisaniu NIP"),
        p("Zakup bez zakładania konta jest domyślny: wymaganie rejestracji przed kupnem bukietu urodzinowego traci zamówienie. Potwierdzenie mailem lub SMS-em i druga wiadomość po doręczeniu oszczędzają telefonów z pytaniem, czy kwiaty dotarły."),

        h2("Subskrypcja kwiatów na stronie kwiaciarni: dom, biuro, restauracja"),
        p("Subskrypcje dają stały przychód między świętami. Na stronie to osobny produkt: co tydzień, co dwa tygodnie albo co miesiąc, z wybranym rozmiarem i dniem dostawy. Klient sam robi pauzę, przesuwa termin albo rezygnuje, a płatności cykliczne obsługuje operator płatności, więc nikt nie goni przelewów. Biura, hotele i restauracje dostają formularz dla firm: liczba kompozycji, dzień dostawy, osoba do faktur — a warunki uzgadniacie przed pierwszą dostawą."),

        h2("Sklep internetowy kwiaciarni w Dzień Kobiet i Walentynki: szybkość i obciążenie"),
        p("Kilka dni w roku przynosi więcej odwiedzin niż cały spokojny miesiąc, a strona musi wtedy działać najszybciej. Katalog i podstrony są generowane z wyprzedzeniem i podawane z pamięci podręcznej, więc ruch nie spowalnia serwera, a obciążony jest tylko koszyk i płatność. Na święto przygotowujecie krótszą listę bukietów, żeby pracownia zdążyła je ułożyć, a pasek na górze strony podaje godzinę końca zamówień. Gdy przedziały dostaw się zapełnią, sklep sam proponuje odbiór osobisty albo następny dzień, zamiast przyjmować zamówienia, których nie da się zrealizować."),

        h2("Formularz zapytań o florystykę ślubną i komunijną"),
        p("Ślubu nie wkłada się do koszyka. Strona pokazuje prawdziwe realizacje — salę, porę roku, kwiaty, publikowane za zgodą pary — i prowadzi do formularza, który zbiera to, czego potrzebujecie przed pierwszą rozmową:"),
        li("data i miejsce, żeby od razu sprawdzić, czy termin jest wolny"),
        li("liczba gości i stołów oraz zakres: bukiet, butonierki, dekoracje stołów, kościoła, auta"),
        li("widełki budżetu do wyboru zamiast pustego pola"),
        li("miejsce na zdjęcia inspiracji albo link do tablicy na Pintereście"),
        p("Przed komunią ten sam formularz ma krótszą wersję: dekoracja kościoła lub sali, liczba stołów, data. Zajęte terminy można oznaczyć w formularzu, żeby nikt nie czekał na odpowiedź, której nie możecie dać."),

        h2("Projekt graficzny strony kwiaciarni: spokojne tło dla kwiatów"),
        p("Strona kwiaciarni powinna wyglądać jak sama kwiaciarnia: jej kolory, papier do pakowania, napis na witrynie. Kolor wnoszą kwiaty, więc projekt trzyma się kilku spokojnych tonów, jednego koloru akcentu dla przycisków zamówienia i kroju, który dobrze czyta się na małym ekranie. Prowadzą duże zdjęcia, teksty są krótkie, a sezonowe bannery nie zasłaniają bukietów."),
        p("Tak samo pracowałem przy stronie warszawskiej firmy remontowo-inwestycyjnej: projekt premium, w którym sprzedają duże zdjęcia skończonych wnętrz, a grafika im nie przeszkadza. W kwiaciarni to miejsce zajmują kompozycje."),

        h2("Shoper, szablon WordPress czy strona kwiaciarni na zamówienie"),
        p("Wiele kwiaciarni zaczyna od Instagrama, konta na Allegro, sklepu na Shoperze albo gotowego szablonu. To rozsądny start: zamówienia przychodzą od pierwszego dnia. Ograniczenia widać, gdy kwiaciarnia rośnie: szablon nie zna stref ani przedziałów godzin, katalog wypełniają cudze zdjęcia, sklep wygląda jak setki innych, a przy przeprowadzce trudno zabrać klientów i historię zamówień. Strona na zamówienie jest zbudowana wokół Waszych zasad dostawy i zdjęć, na WordPressie z WooCommerce albo na platformie, której już używacie, a kod, domena i dane klientów należą do kwiaciarni."),
        p(
          "Przy zmianie starej strony na nową każdy dotychczasowy adres produktu i kategorii dostaje przekierowanie 301 na swój odpowiednik — tak przeniosłem 468 wpisów bloga Giuseppe bez zgubienia żadnego adresu. Więcej na stronie ",
          link("przebudowa strony internetowej", "/pl/oferty/przebudowa-strony-internetowej"),
          ".",
        ),

        h2("Strona kwiaciarni, którą ChatGPT i Google AI Overviews potrafią przeczytać"),
        p("Gdy ktoś pyta ChatGPT albo podsumowanie AI w Google, która kwiaciarnia w okolicy dowozi w niedzielę albo robi bukiety ślubne w określonym budżecie, odpowiedź powstaje z tekstu, który asystent potrafi przeczytać. Strefy i koszt dostawy, godziny, nazwy i ceny bukietów zapisuję więc w HTML zwykłym tekstem — nie na banerach i nie wewnątrz skryptu koszyka — a kwiaciarnię i produkty opisuję znacznikami schema. Według tych samych zasad zbudowana jest strona Giuseppe z Mediolanu, a ChatGPT już cytuje jej nowe podstrony."),
        p(
          "Jak dbam o obecność firmy w odpowiedziach AI na stałe, wyjaśniam na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ", wyniki w Google na frazy z dostawą i okazjami — na stronie ",
          link("pozycjonowanie kwiaciarni", "/pl/pozycjonowanie-strony-kwiaciarni"),
          ", a pracę nad wizytówką w Mapach Google — na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Ile kosztuje strona internetowa dla kwiaciarni"),
        li("Prosta strona kwiaciarni — strona główna, bestsellery z przyciskiem zamówienia lub zapytania, śluby, o nas i kontakt: od 3000 do 6000 zł."),
        li("Strona ze sklepem z kwiatami, strefami i godzinami dostawy, zamówieniem z bilecikiem i płatnościami, subskrypcjami i formularzem ślubnym: od 8500 zł."),
        p(
          "W obu wariantach projekt graficzny nie jest doliczany osobno. Przebieg prac od briefu do uruchomienia opisuję na stronie ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ", a stawki za wszystkie usługi są w ",
          link("cenniku", "/pl/cennik"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strona internetowa dla kwiaciarni: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona internetowa dla kwiaciarni?", "Prosta strona kosztuje od 3000 do 6000 zł, strona ze sklepem od 8500 zł — razem ze strefami i godzinami dostawy, płatnościami, subskrypcjami i formularzem ślubnym. Projekt graficzny jest w cenie, a stałą cenę podaję po obejrzeniu katalogu i zasad dostawy."],
          ["Ile trwa zbudowanie sklepu z kwiatami online?", "Zwykle od pięciu do ośmiu tygodni od briefu. Najwięcej czasu zajmują zdjęcia bukietów i ustalenie zasad dostawy; prostą stronę bez sklepu można uruchomić szybciej."],
          ["Czy sklep obsłuży dostawę na dziś i strefy dostawy?", "Tak. Strefy z cenami, godzina graniczna, zasady sobotnie, dni bez dostaw i limit zamówień w przedziale godzin to ustawienia, które zmieniacie sami w panelu."],
          ["Jakie płatności będą na stronie kwiaciarni?", "BLIK, szybkie przelewy i karty przez Przelewy24 lub PayU, a jeśli chcecie — także płatność przy odbiorze w kwiaciarni. Faktura na firmę generuje się po wpisaniu NIP."],
          ["Czy możemy dalej sprzedawać na Allegro?", "Tak. Strona przyjmuje zamówienia bezpośrednie bez prowizji, a Allegro działa jak dotąd. Bukiety i ceny prowadzicie w panelu strony, a ofertę na Allegro aktualizujecie po swojej stronie."],
          ["Czy sami zmienimy bukiety, ceny i dni dostaw?", "Tak. Produkty, ceny, rozmiary, koszty dostawy i zablokowane dni zmieniacie w prostym panelu, także z telefonu, a nowy bukiet wygląda tak samo jak reszta katalogu."],
          ["Czy pracujesz z kwiaciarniami z innych miast?", "Tak, z każdego miasta. Omawiamy wszystko przez wideo i maile, akceptujecie kolejne etapy online, a zdjęcia bukietów robi Wasz fotograf albo ktoś z kwiaciarni według mojej instrukcji: tło, światło, kadr."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową dla kwiaciarni: co mi wysłać"),
        p(
          "Wyślijcie link do obecnej strony, Instagrama albo konta na Allegro, listę bestsellerów z cenami, strefy i ceny dostawy, godzinę przyjmowania zamówień na dziś, informację o subskrypcjach i florystyce ślubnej, system płatności i kilka zdjęć Waszych bukietów. Odpowiem planem podstron i stałą ceną. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
