// Landing page fixture: Pozycjonowanie strony sklepu jubilerskiego (PL), group
// «jewelry-store-seo». New page. Market version for Polish jubilerzy and
// sklepy z biżuterią — a jeweler with a salon and a workshop, an online
// jewelry shop, a brand of biżuteria autorska selling on its own site, Allegro,
// Etsy, Pakamera and Instagram — not a translation of jewelry-store-seo.en.
// Semantic core: ref/batch-h2.md has no measured PL phrases for this group;
// H1 and headings carry the owner’s form «pozycjonowanie strony sklepu
// jubilerskiego» / «pozycjonowanie stron sklepów jubilerskich» (never without
// «strony»), plus the words customers type (brief): biżuteria złota,
// pierścionek zaręczynowy, obrączki ślubne, sklep jubilerski [miasto], jubiler
// [miasto]; próby złota (333, 585, 750) and srebro 925 as text. No PL PAA.
// Intent: ref/intent-check-batch-h.md — EN «jewelry seo» vs «ecommerce seo
// services» 0 of 10 shared URLs → own page; the shop SEO service
// (/pl/oferty/pozycjonowanie-sklepow-internetowych) is linked once.
// Angles: search by rodzaj, kruszec, próba, kamień, okazja; filters and
// indexing; karta produktu (próba, waga, cecha probiercza in general terms,
// kamień, certyfikat, rozmiar, zwroty); facts vs lifestyle copy (Cyprus
// platform, +16%); zdjęcia and structured data, Merchant Center; pierścionki
// zaręczynowe and obrączki; Polish gift calendar (komunia, chrzest, 18-stka,
// Walentynki, Gwiazdka); Mapy Google for the salon (naprawa, zmniejszanie,
// grawerowanie, skup złota if offered); biżuteria autorska vs marketplaces;
// AI answers; report and cost (large stores from 5500 zł).
// NOT on this page: building the shop, payments (no PL sibling website page
// yet); general shop SEO (linked once); maps in depth
// (/pl/oferty/pozycjonowanie-lokalne); ads. Neighbour: florist SEO
// (/pl/pozycjonowanie-strony-kwiaciarni) linked once; its paragraphs, occasion
// list and FAQ wording are not reused.
// Owner’s rules: PL form «pozycjonowanie strony …»; «faktura» never with VAT;
// every SEO page covers AI search (GEO, AEO); never say there are no clients
// from the visitor’s industry; the Cyprus client is never named.
import { p, h2, h3, li, link, k } from "./pt";

export const jewelryStoreSeoPl = {
  lang: "pl",
  group: "jewelry-store-seo",
  slug: "pozycjonowanie-strony-sklepu-jubilerskiego",
  title: "Pozycjonowanie strony sklepu jubilerskiego",
  heading: "Pozycjonowanie strony sklepu jubilerskiego",
  excerpt:
    "Zajmuję się pozycjonowaniem stron sklepów jubilerskich: kategorie i filtry dopasowane do tego, jak szuka się pierścionków, obrączek i łańcuszków, karty produktów z próbą, wagą i kamieniem, strony prezentów na komunię i święta, wizytówka salonu w Mapach Google i obecność w odpowiedziach AI — z wynikiem liczonym w sprzedaży i wizytach.",
  seo: {
    metaTitle: "SEO dla jubilera i sklepu z biżuterią | Bandziuk",
    metaDescription:
      "Pozycjonowanie strony sklepu jubilerskiego: kategorie i filtry, karty produktów z próbą złota, obrączki, Mapy Google i odpowiedzi AI. Audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Katalog, salon i odpowiedzi AI", "Audyt od 1000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Obrączki ślubne Kraków", "Kolczyki złote próba 585", "Jubiler blisko mnie", "Poleca ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO sklepu jubilerskiego: katalog, karty produktów, wizytówka Google, odpowiedzi AI", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO dla jubilera: kategorie i filtry, szablon karty produktu, dział zaręczynowy, dane strukturalne", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie strony sklepu jubilerskiego", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje pozycjonowanie strony sklepu jubilerskiego",
      items: [
        { _key: k("o"), iconName: "search", title: "Frazy według rodzaju, kruszcu i kamienia", text: "Tak, jak klienci naprawdę wpisują biżuterię" },
        { _key: k("o"), iconName: "layers", title: "Kategorie i filtry, które mają szansę w Google", text: "Indeksowane tylko połączenia z popytem" },
        { _key: k("o"), iconName: "file-text", title: "Karty produktów z faktami", text: "Próba, waga, kamień, rozmiar, certyfikat, zwrot" },
        { _key: k("o"), iconName: "map-pin", title: "Salon jubilerski w Mapach Google", text: "Naprawy, grawer, zmniejszanie pierścionków" },
        { _key: k("o"), iconName: "sparkles", title: "Sklep polecany przez ChatGPT i AI", text: "Kruszec, certyfikaty i zwroty opisane wprost" },
        { _key: k("o"), iconName: "trending-up", title: "Raport w sprzedaży i wizytach", text: "Zamówienia i umówione wizyty według podstron" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO sklepu jubilerskiego", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe pozycjonowanie strony sklepu jubilerskiego", value: "od 3500 zł / mies.", note: "katalog, produkty, Mapy, AI", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: katalogi i strony sprzedażowe, które budowałem i pozycjonowałem",
      subtitle:
        "Ze sklepem jubilerskim łączy je katalog, który klienci przeszukują po cechach, i kupujący sprawdzający każdy szczegół przed zapłatą. Dla platformy nieruchomości na Cyprze zbudowałem katalog około 375 inwestycji z filtrami i mapą i prowadzę jego SEO; kiedy opisy przerobiono kiedyś na styl lifestyle’owy, strony sprzedażowe straciły ruch, a powrót do rzeczowych opisów przyniósł o 16% więcej kliknięć. Warszawskiemu salonowi Landi Room zrobiłem stronę sprzedaży kursu z płatnością Stripe — pierwsza kampania Google Ads dała ponad 100 sprzedaży. ScanM2, firma skanowania laserowego 3D, po przejściu z kreatora no-code na WordPressa ma 29 razy większy ruch organiczny. Strona konsultantki analityki handlu ma 153 podstrony w trzech językach pisane tak, by cytowały je asystenty AI, a strona psychoterapeuty z Mediolanu pojawia się już w odpowiedziach ChatGPT.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "build-and-optimize-a-multilingual-real-estate-platform",
        "e-commerce-landing-page-with-secured-video-access",
        "architecture-website-rebuild-and-seo-scan",
        "consultant-website-design-retail-analytics",
        "psychotherapist-website-milan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena pozycjonowania strony sklepu jubilerskiego",
      subtitle: "W ciągu jednego dnia roboczego odpiszę, od czego zacząłbym w Twoim katalogu i wizytówce, i podam stałą cenę.",
      contextLabel: "Nazwa sklepu lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Jak sprzedajesz biżuterię?", options: ["Salon jubilerski z pracownią", "Sklep internetowy", "Marka biżuterii autorskiej", "Salon i sklep online jednocześnie"] },
        { _key: k("z"), question: "Czego chcesz więcej?", options: ["Zamówień w sklepie online", "Klientów w salonie", "Zamówień na pierścionki i obrączki", "Napraw, graweru i usług"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Pozycjonowanie strony sklepu jubilerskiego to praca nad tym, żeby osoba szukająca obrączek na wrzesień, złotego łańcuszka z medalikiem na komunię albo pierścionka zaręczynowego z brylantem trafiła na Twoją stronę, a jeśli woli zobaczyć biżuterię na żywo — do Twojego salonu. Pracuję dla jubilerów z salonem i pracownią, sklepów internetowych z biżuterią i marek biżuterii autorskiej. Wszystko robię sam: dobór fraz, strukturę katalogu, karty produktów, zmiany w kodzie i raporty."),

        h2("Pozycjonowanie strony sklepu jubilerskiego: jak klienci szukają biżuterii w Google"),
        p("Klient rzadko wpisuje samo „biżuteria”. Zapytanie składa się z kilku cech i każda kombinacja, której ludzie faktycznie używają, potrzebuje swojej odpowiedzi w sklepie:"),
        li("rodzaj i kruszec — „biżuteria złota damska”, „łańcuszek srebrny męski”, „kolczyki złote próba 585”"),
        li("kamień — „pierścionek zaręczynowy z brylantem”, „kolczyki z szafirem”, „diament laboratoryjny czy naturalny”"),
        li("okazja i odbiorca — „prezent na 18 urodziny dla dziewczyny”, „medalik na chrzest z grawerem”"),
        li("sklep i usługa — „jubiler Wrocław”, „sklep jubilerski Poznań”, „grawerowanie obrączek”"),
        h3("Gotowe listy fraz dla sklepu z biżuterią: dlaczego to za mało"),
        p("Listy „najlepszych słów kluczowych dla biżuterii” krążą po sieci i każdy sklep, który z nich korzysta, walczy o te same hasła. Liczy się co innego: które połączenia cech masz w ofercie, ile osób szuka ich w Polsce i w Twoim mieście oraz która jedna podstrona na nie odpowiada. Każde zapytanie przypisuję do jednego adresu, żeby dwie Twoje strony nie konkurowały ze sobą."),

        h2("Kategorie i filtry sklepu jubilerskiego: które strony indeksować w Google"),
        p("Filtry w sklepie z biżuterią mnożą adresy błyskawicznie: kruszec, próba, kamień, rodzaj, rozmiar i cena dają tysiące kombinacji. Tylko część z nich odpowiada prawdziwym wyszukiwaniom — „obrączki z białego złota” tak, „rozmiar 15, od najtańszych, tylko nowości” nie. Zasady, które ustawiam:"),
        li("stała, indeksowana podstrona dla połączeń z popytem i kilkoma produktami, z własnym tytułem, nagłówkiem i krótkim tekstem"),
        li("filtry bez popytu działają dla klientów, ale nie trafiają do indeksu — przez canonical albo noindex"),
        li("sortowanie i przedziały cen nie tworzą nowych adresów do skanowania"),
        li("menu i linki wewnętrzne prowadzą do wybranych kategorii, a puste kombinacje nie stają się podstronami"),
        p("W WooCommerce i większości platform sklepowych robi się to w ustawieniach motywu i wtyczki filtrów, czasem z drobną zmianą w kodzie, którą wprowadzam sam."),

        h2("Karta produktu w pozycjonowaniu stron sklepów jubilerskich: próba, waga, kamień i certyfikat"),
        p("Kupujący pierścionek za kilka tysięcy złotych czyta kartę produktu zdanie po zdaniu, tak samo jak Google i asystent AI, który porównuje dwa sklepy. Na karcie powinny być:"),
        li("kruszec i próba zapisane tekstem — złoto 333, 585 lub 750, srebro 925, platyna — waga w gramach i informacja, że wyrób ma cechę probierczą, jeśli ją ma"),
        li("kamień: rodzaj, naturalny czy laboratoryjny, masa w karatach, szlif, barwa i czystość, a przy brylantach certyfikat z numerem, na przykład z laboratorium GIA albo IGI"),
        li("rozmiar pierścionka z tabelą obwodów w milimetrach, długość łańcuszka i informacja, czy pierścionek da się później zmniejszyć lub powiększyć"),
        li("czas realizacji, zwroty i gwarancja — osobno dla wyrobów z grawerem i robionych na zamówienie, których zwykle nie da się zwrócić"),
        p("Jeśli sprzedajesz te same wzory co inne sklepy, opis z hurtowni jest już na kilkudziesięciu stronach. Własny opis z powyższymi faktami ma szansę w wynikach, kopia — prawie żadnej."),

        h2("Opisy biżuterii, które pozycjonują stronę sklepu: fakty przed ozdobnikami"),
        p("Na cypryjskiej platformie nieruchomości, którą prowadzę, opisy przepisano kiedyś w stylu lifestyle — o atmosferze, marzeniach i stylu życia. Strony sprzedażowe straciły ruch, a po powrocie do rzeczowych opisów kliknięć było o 16% więcej. Opisy biżuterii kuszą tak samo: „symbol wiecznej miłości” nie mówi nic kupującemu, wyszukiwarce ani asystentowi AI, a „złoto 585, 2,4 g, cyrkonia 5 mm, rozmiar 14” odpowiada od razu na trzy pytania. Zdanie o emocjach może się pojawić — po faktach."),

        h2("Zdjęcia biżuterii w Google Grafika i dane strukturalne produktu"),
        p("Biżuterię wybiera się oczami, a Google Grafika i zakładka Zakupy pokazują najpierw obraz. Sprawdzam i poprawiam:"),
        li("nazwy plików i teksty alternatywne opisujące wyrób, np. „obrączki z żółtego złota 585 szerokość 4 mm”, a nie DSC_1187"),
        li("kilka ujęć, zdjęcie na dłoni lub uchu dla skali i krótkie wideo przy kamieniach, które potrzebują światła"),
        li("kompresję i wymiary zdjęć, żeby kategoria z kilkudziesięcioma zdjęciami szybko ładowała się w telefonie"),
        li("dane strukturalne Product i Offer z ceną, dostępnością, kosztem dostawy i zasadami zwrotu"),
        p("Te same dane trafiają do Google Merchant Center, gdzie bezpłatne informacje o produktach pokazują Twoje wyroby w zakładce Zakupy bez płacenia za reklamę."),

        h2("Pierścionki zaręczynowe i obrączki ślubne: osobny dział w pozycjonowaniu strony jubilera"),
        p("Pierścionek zaręczynowy wybiera się tygodniami, często w tajemnicy, a obrączki para kupuje razem i porównuje kilka salonów. Ten dział potrzebuje własnej struktury:"),
        li("podstrony według kamienia, kruszcu i oprawy — z brylantem, z diamentem laboratoryjnym, z szafirem, solitery — tylko dla tego, co masz lub wykonujesz"),
        li("poradniki: diament naturalny a laboratoryjny opisany bez umniejszania żadnego, jak dyskretnie poznać rozmiar palca, od czego zależy cena"),
        li("obrączki z ceną za parę, szerokością, profilem i informacją o grawerze w cenie"),
        li("opis pracy na zamówienie u złotnika — rozmowa, projekt, akceptacja, wykonanie, termin — i formularz umówienia wizyty"),

        h2("Komunia, chrzest, Walentynki i Gwiazdka: strony prezentowe w pozycjonowaniu strony jubilera"),
        p("Polski kalendarz jubilera ma własne szczyty. Rodzice i chrzestni szukają łańcuszków z medalikiem i krzyżykiem na komunię już wczesną wiosną, przed majowymi uroczystościami; medalik na chrzest z grawerem daty kupuje się przez cały rok; do tego osiemnastki, rocznice ślubu, Walentynki i prezenty pod choinkę. Strona prezentowa zbiera wyroby według odbiorcy i budżetu i mówi wprost, do kiedy zamówić z grawerem, żeby zdążyć."),
        p(
          "Takie podstrony piszę razem z Twoim planem zakupów towaru na sezon, żeby Google zdążył je zaindeksować, zanim wzrośnie liczba wyszukiwań. Kwiaciarnie mają podobny kalendarz, ale klient decyduje tam w godzinę, a nie w kilka tygodni — opisuję to na stronie ",
          link("pozycjonowanie strony kwiaciarni", "/pl/pozycjonowanie-strony-kwiaciarni"),
          ".",
        ),

        h2("Jubiler w Mapach Google: wizytówka salonu, naprawa biżuterii i grawerowanie"),
        p("„Jubiler blisko mnie”, „naprawa łańcuszka Łódź”, „zmniejszenie pierścionka”, „grawerowanie obrączek Katowice” — te wyszukiwania kończą się na mapie. Salon wygrywa je dzięki:"),
        li("osobnym podstronom usług: naprawa, czyszczenie, zmiana rozmiaru, grawer, wycena biżuterii, skup złota — jeśli je prowadzisz — z orientacyjną ceną i czasem realizacji"),
        li("kategorii głównej „Jubiler” w wizytówce i dodatkowym kategoriom zgodnym z tym, co faktycznie robisz"),
        li("zdjęciom salonu i pracowni, aktualnym godzinom i linkowi do umówienia wizyty"),
        li("opiniom, w których klienci wspominają konkretny wyrób albo usługę, z Twoimi odpowiedziami"),
        p(
          "Szerzej o pracy z Mapami Google piszę na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Pozycjonowanie strony z biżuterią autorską obok Allegro, Etsy, Pakamery i Instagrama"),
        p("Marki biżuterii autorskiej często zaczynają od Allegro, Etsy, Pakamery albo Instagrama. Tam sprzedaż przychodzi szybko, ale z prowizją i obok dziesiątek podobnych ofert, a pozycjonowanie w samym serwisie rządzi się jego zasadami. Własna strona może być wysoko na nazwę marki, nazwy kolekcji i techniki, z którymi pracujesz, a każde zamówienie z niej jest wyłącznie Twoje. Te same fakty o marce na stronie i w serwisach pomagają Google i asystentom AI połączyć je w jedną całość."),

        h2("Pozycjonowanie strony sklepu jubilerskiego w ChatGPT i Google AI Overviews (GEO, AEO)"),
        p("Pytania „gdzie w Krakowie kupić pierścionek z diamentem laboratoryjnym”, „który jubiler w Gdańsku robi obrączki na zamówienie” czy „złoto 585 czy 750 na pierścionek na co dzień” coraz częściej trafiają do ChatGPT, Perplexity i podsumowań AI w Google. Asystent poleca sklepy, o których znajduje sprawdzalne fakty. GEO i AEO dla jubilera oznaczają:"),
        li("kruszce, próby, certyfikaty, zasady zwrotu i przebieg zamówienia indywidualnego zapisane tekstem, a nie tylko na zdjęciach czy w PDF"),
        li("poradniki, które odpowiadają na pytanie w pierwszych zdaniach, podpisane przez jubilera albo złotnika"),
        li("dane strukturalne Product, Offer i JewelryStore łączące katalog z firmą"),
        li("tę samą nazwę, adres, godziny i zasady na stronie, w wizytówce i w serwisach sprzedażowych"),
        p(
          "Na starcie zapisuję, co asystenci mówią o Twoim sklepie i kogo polecają zamiast niego, i po kilku miesiącach porównuję. Więcej o tej usłudze: ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Ile kosztuje pozycjonowanie strony sklepu jubilerskiego i jak mierzę wynik"),
        p("W raporcie dla jubilera są pieniądze i rozmowy: sprzedaż z wyszukiwarki według kategorii, średnia wartość zamówienia, umówione wizyty w salonie, zapytania o pierścionki na zamówienie, telefony i prośby o trasę z wizytówki. Dane pochodzą z Twojego sklepu, kalendarza rezerwacji i Google Analytics, więc zgadzają się z tym, co widzisz w panelu sklepu."),
        li("Audyt katalogu, kart produktów, danych strukturalnych, wizytówki i odpowiedzi AI: od 1000 zł płatne raz; na końcu dostajesz poprawki uszeregowane według tego, ile mogą dać sprzedaży."),
        li("Prace jednorazowe — zasady filtrów i kategorii, szablon karty produktu, dział zaręczynowy, dane strukturalne i poprawki pliku produktowego: od 1000 do 3000 zł."),
        li("Stałe pozycjonowanie strony sklepu jubilerskiego — nowe kategorie i strony prezentowe, dane produktów, Mapy Google, widoczność w AI i raporty: od 3500 zł miesięcznie, dla dużych sklepów jubilerskich z rozbudowanym katalogiem i silną konkurencją od 5500 zł."),
        p(
          "Pierwsze efekty zwykle widać po około półtora miesiąca, a stabilny wzrost przychodzi w ciągu 3–6 miesięcy. Jeśli biżuteria jest jedną z wielu kategorii w dużym sklepie internetowym, lepiej pasuje ",
          link("pozycjonowanie sklepów internetowych", "/pl/oferty/pozycjonowanie-sklepow-internetowych"),
          ". Jak wygląda stała współpraca, opisuję na stronie ",
          link("strategia i optymalizacja SEO", "/pl/oferty/strategia-i-optymalizacja-seo"),
          ", a wszystkie ceny są w ",
          link("cenniku", "/pl/cennik"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie strony sklepu jubilerskiego: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje pozycjonowanie strony sklepu jubilerskiego?", "Audyt od 1000 zł, pojedyncze prace od 1000 do 3000 zł, stała współpraca od 3500 zł miesięcznie, a dla dużych sklepów z silną konkurencją od 5500 zł. Pierwsza rozmowa trwa 15–30 minut i jest bezpłatna; po niej podaję stałą cenę."],
          ["Po jakim czasie widać efekty pozycjonowania strony sklepu z biżuterią?", "Pierwsze efekty zwykle po około półtora miesiąca, stabilny wzrost w ciągu 3–6 miesięcy. Dlatego strony na komunie czy Gwiazdkę przygotowujemy z wyprzedzeniem, a nie w tygodniu przed szczytem."],
          ["Czy każda kombinacja filtrów w sklepie powinna być w Google?", "Nie. Własną indeksowaną podstronę dostają tylko połączenia, których ludzie szukają i w których masz kilka produktów, np. obrączki z białego złota. Reszta filtrów służy klientom, ale nie zaśmieca indeksu."],
          ["Czy mogę używać opisów od producenta lub hurtowni?", "Jako źródła danych — tak. Jako gotowego tekstu — raczej nie, bo ten sam opis jest już w wielu sklepach. Krótki własny opis z próbą, wagą, kamieniem i rozmiarem zwykle radzi sobie lepiej."],
          ["Sprzedaję głównie na Allegro. Czy własna strona ma sens?", "Tak, jeśli chcesz sprzedawać bez prowizji i budować markę. Allegro przynosi klientów w samym serwisie, a własna strona zbiera wyszukiwania nazwy marki, kolekcji i usług. Wiele sklepów prowadzi oba kanały."],
          ["Czy ChatGPT poleca sklepy jubilerskie?", "Tak, gdy ktoś pyta, gdzie kupić pierścionek albo kto robi biżuterię na zamówienie w jego mieście. Polecenia nie da się zagwarantować; jasne fakty o kruszcu, certyfikatach, zwrotach i lokalizacji podnoszą szanse, a ja porównuję odpowiedzi asystentów przed pracą i po niej."],
          ["Czy pracujesz z jubilerami spoza Warszawy?", "Tak, miejsce nie ma znaczenia: pracuję zdalnie dla salonów i sklepów w całym kraju. Opieram się, na danych wyszukiwań dla Twojego miasta i asortymentu. Rozmawiamy po polsku — przez telefon, mailowo albo na WhatsApp."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie strony sklepu jubilerskiego: co mi wysłać"),
        p(
          "Wyślij adres sklepu i link do wizytówki w Mapach Google, nazwę platformy sklepowej, opis asortymentu — rodzaje, kruszce, kamienie naturalne czy laboratoryjne, praca na zamówienie — informację, czy masz salon, oraz to, czego chcesz więcej i skąd dziś przychodzą zamówienia. W odpowiedzi dostaniesz pierwsze kroki i stałą cenę. Skorzystaj z ",
          link("formularza powyżej", "#quote"),
          " albo napisz na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
