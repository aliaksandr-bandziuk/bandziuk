// Landing page fixture: Strona internetowa dla artysty (PL), group
// «artist-website-design». New page. Market version for Polish artists
// (malarze, graficy, rzeźbiarze, ilustratorzy; absolwenci ASP, artyści
// niezależni i reprezentowani przez galerie) — not a translation of
// artist-website-design.en.
// Semantic core: ref/creative-leisure.md has no measured PL phrases for
// artists; heading phrases from BRIEF.md (slug phrase) and the EN core:
// «strona internetowa dla artysty» (H1, H2s, excerpt), «strona artysty
// malarza» (metaTitle, H2), «portfolio artysty» (H2), «sprzedaż obrazów przez
// internet» (shop H2), «obrazy na zamówienie» (commissions H2), «ile kosztuje
// strona internetowa dla artysty» (cost H2, FAQ).
// Intent: ref/intent-check-creative-leisure.md — EN «website for artists» vs
// «artist website design» 2 shared URLs of 10: platforms and builders vs
// studios → the page speaks to the artist, not to art buyers.
// Polish context: ASP, plenery, rezydencje i stypendia, galerie i aukcje
// młodej sztuki, Pakamera, Allegro, Etsy, Instagram; obrazy na zamówienie,
// murale dla kawiarni i firm; odbitki: linoryt, sitodruk, giclée; płatności
// BLIK i Przelewy24, wysyłka dużych formatów kurierem; wersja angielska dla
// kolekcjonerów z zagranicy.
// Prices: /pl/cennik — prosta strona 3000–6000 zł, pełna od 8500 zł, projekt
// graficzny w cenie.
// NOT on this page: promocja sztuki i kampanie reklamowe, wystawianie prac w
// serwisach aukcyjnych; fotografowie (/pl/strona-dla-fotografa — linked
// once); wizażystki (/pl/strona-internetowa-dla-wizazystki); pisarze
// (/pl/strona-internetowa-dla-pisarza).
// Owner’s rules: never say there are no clients from the visitor’s segment;
// every page covers AI search.
import { p, h2, h3, li, link, k } from "./pt";

export const artistWebsiteDesignPl = {
  lang: "pl",
  group: "artist-website-design",
  slug: "strona-internetowa-dla-artysty",
  title: "Strona internetowa dla artysty",
  heading: "Strona internetowa dla artysty",
  excerpt:
    "Strona internetowa dla artysty malarza, grafika czy rzeźbiarza, zaprojektowana i zbudowana przez jedną osobę: portfolio z dużymi zdjęciami prac, karty prac z techniką, wymiarami i ceną, cykle, CV i wystawy, obrazy na zamówienie i sprzedaż grafik z płatnością BLIK.",
  seo: {
    metaTitle: "Strona artysty malarza i portfolio prac | Bandziuk",
    metaDescription:
      "Strona internetowa dla artysty: portfolio w cyklach, karty prac z wymiarami i ceną, CV i wystawy, obrazy na zamówienie, sprzedaż grafik. Od 3000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt graficzny w cenie", "Od 3000 zł", "Duże zdjęcia bez czekania"],
  heroPhonePoints: ["Cykl „Wisła”, 2026", "Olej na płótnie, 100 × 80 cm", "Dostępny · Zapytaj o cenę", "Linoryty sygnowane, nakład 30"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona-portfolio dla artysty, projekt graficzny w cenie", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Pełna strona artysty z kartami prac, cyklami, CV i wystawami, zamówieniami, sklepem z grafikami i wersją angielską w razie potrzeby, projekt graficzny w cenie", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje strona internetowa dla artysty",
      items: [
        { _key: k("o"), iconName: "image", title: "Duże zdjęcia prac, szybko", text: "Kilka rozmiarów każdego zdjęcia, wierne kolory" },
        { _key: k("o"), iconName: "file-text", title: "Karta każdej pracy", text: "Technika, wymiary, rok, cena lub zapytanie" },
        { _key: k("o"), iconName: "layers", title: "Cykle i serie", text: "Każdy cykl z krótkim opisem i datami" },
        { _key: k("o"), iconName: "trending-up", title: "CV artystyczne i wystawy", text: "Wystawy, rezydencje, nagrody, kolekcje" },
        { _key: k("o"), iconName: "shield-check", title: "Sprzedaż z płatnością BLIK", text: "Grafiki i odbitki przez Przelewy24 lub Stripe" },
        { _key: k("o"), iconName: "sparkles", title: "Czytelna dla Google i asystentów AI", text: "Artysta, prace i wystawy jako dane strukturalne" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona-portfolio artysty", value: "3000–6000 zł", note: "projekt graficzny w cenie" },
        { _key: k("r"), label: "Karty prac, cykle, CV, zamówienia, sklep z grafikami", value: "od 8500 zł", note: "projekt graficzny w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Strony, na których o decyzji przesądza obraz, a potem prosta droga do kontaktu",
      subtitle:
        "Sasha Dith, DJ i producent, przyniósł własną makietę z Figmy, a ja odwzorowałem ją co do piksela w nowej stronie na Next.js 14: wideo, dyskografia z linkami do streamingu i formularz rezerwacji na tle zdjęcia z koncertu; multimedia doładowują się w miarę przewijania, a całość otwiera się w mniej niż sekundę, choć wcześniej stały tam wolne strony z kreatora. Warszawska firma remontowo-inwestycyjna dostała stronę premium, na której klienta przekonują zdjęcia gotowych wnętrz. W pięciojęzycznym serwisie Cyprus VIP Estates kupujący filtrują katalog, przeglądają mapę i wysyłają zapytania wprost do CRM — podobnie działa katalog prac z filtrami techniki i dostępności. Kursantki warszawskiego salonu Landi Room płacą za kurs wideo w Stripe Checkout i dostają link, który działa 14 dni i nie pozwala pobrać nagrania. Konsultantka analityki handlu i mody ma trzyjęzyczny serwis 153 stron oparty na jej własnej marce. Wspólne z Twoją stroną: odbiorca najpierw patrzy, a potem musi łatwo zapytać, zarezerwować albo zapłacić.",
      picks: [
        "official-website-for-dj-and-producer-sasha-dith",
        "renovation-and-investment-website-with-premium-design",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "e-commerce-landing-page-with-secured-video-access",
        "consultant-website-design-retail-analytics",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej dla artysty",
      subtitle: "Opisz, co tworzysz i jak sprzedajesz. Odpowiem propozycją podstron — portfolio, cykle, CV, zamówienia, sklep — i stałą ceną z widełek cennika.",
      contextLabel: "Imię i nazwisko, Instagram albo obecna strona",
      contextPlaceholder: "Nazwisko lub link",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Możesz też przesłać kilka zdjęć prac na WhatsApp.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Co głównie tworzysz?", options: ["Obrazy olejne lub akrylowe", "Grafikę: linoryt, sitodruk, akwafortę", "Rzeźbę lub ceramikę", "Ilustrację i portrety na zamówienie"] },
        { _key: k("z"), question: "Gdzie dziś pokazujesz prace?", options: ["Tylko na Instagramie", "Na Pakamerze, Allegro lub Etsy", "W galerii, która mnie reprezentuje", "Na starej stronie z kreatora"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Strona internetowa dla artysty to moja usługa dla malarzy, grafików, rzeźbiarzy i ilustratorów: sam planuję układ, projektuję wygląd, programuję i uruchamiam stronę, a cenę znasz przed rozpoczęciem pracy. Strona ma być spokojną salą wystawową — duże obrazy, mało słów, nic, co odciąga uwagę od prac — i jednocześnie miejscem, z którego kolekcjoner, kurator i klient zamówienia trafiają tam, gdzie powinni."),

        h2("Strona internetowa dla artysty: co sprawdza kolekcjoner, kurator i galerzysta"),
        p("Ktoś widział Twój obraz na wystawie zbiorowej, na aukcji młodej sztuki albo na Instagramie i wpisuje nazwisko w telefon. Każdy z tych gości ma inne pytanie: kolekcjoner chce wiedzieć, co jest dostępne, kurator szuka CV, osoba z biura albo kawiarni pyta, czy przyjmujesz zamówienia. Pierwszy ekran pokazuje więc jedną mocną pracę z bieżącego cyklu, jedno zdanie o Tobie — „Malarka, olej i tempera, Kraków” — i menu nazwane słowami: Prace, Dostępne, Na zamówienie, CV, Kontakt. Manifest artystyczny jest jedno kliknięcie dalej."),

        h2("Portfolio artysty na stronie: duże zdjęcia prac, które szybko się otwierają"),
        p("O obrazie decydują szczegóły faktury, a szczegóły to ciężkie pliki. Wrzucone wprost z aparatu sprawiają, że portfolio na telefonie wczytuje się tak długo, że gość wychodzi przed drugą pracą. Przy budowie strony:"),
        li("każde zdjęcie dostaje kilka szerokości i format WebP lub AVIF — telefon pobiera mały plik, duży monitor ostry"),
        li("zostaje zachowany profil kolorów, żeby czerwień kadmowa nie zrobiła się pomarańczowa"),
        li("kolejne prace doczytują się dopiero w trakcie przewijania"),
        li("powiększenie na pełnym ekranie pozwala obejrzeć fakturę z bliska"),
        p("Na stronę trafiają zdjęcia w rozdzielczości ekranowej, nigdy pliki do druku, a w opisie każdej pracy jest Twoje nazwisko i znak praw autorskich. Zdjęcia zrób na wprost, przy równym, rozproszonym świetle i bez ramy, a rzeźbę z trzech–czterech stron plus jedno ujęcie we wnętrzu, które pokazuje skalę; dobry fotograf prac to wydatek, który zwraca się przy każdej sprzedaży. Kopiowania nie da się zablokować całkowicie — zrzut ekranu zrobi każdy — ale taki zestaw sprawia, że skopiowany obraz nie nadaje się do niczego poza podglądem."),

        h2("Karta pracy na stronie artysty malarza: technika, wymiary, rok i cena"),
        p("Każda praca ma własny adres, więc kolekcjonerowi wysyłasz link, a nie zdjęcie z telefonu. Na karcie, zwykłym tekstem:"),
        li("tytuł, rok i technika — „akryl i węgiel na płótnie”"),
        li("wymiary w centymetrach, z ramą lub bez, i informacja, czy obraz jest gotowy do powieszenia"),
        li("status: dostępny, sprzedany, wypożyczony na wystawę — z nazwą galerii"),
        li("cena, przedział cenowy albo przycisk „Zapytaj o tę pracę”, który wkleja tytuł do wiadomości"),
        li("kilka zdań o obrazie i dwie–trzy prace z tego samego cyklu"),
        p("Prace sprzedane nie znikają: pokazują dorobek i często zachęcają kogoś do zamówienia czegoś podobnego."),

        h2("Cykle i serie prac na stronie internetowej artysty"),
        p("Długa siatka miniatur miesza wszystkie okresy twórczości. Podział na cykle porządkuje portfolio: każdy cykl ma własną stronę z krótkim tekstem — skąd wziął się pomysł, jakie materiały, gdzie był pokazywany — a kurator widzi, jak rozwija się Twoja praktyka. Filtry według techniki, formatu i dostępności pomagają komuś, kto szuka obrazu na konkretną ścianę. Starsze cykle przechodzą do archiwum."),

        h2("Biogram, CV artystyczne i wystawy na stronie artysty"),
        p("Kuratorzy, komisje konkursowe i galerie oczekują CV w znajomym układzie. Na stronie jest ono tekstem, a nie tylko plikiem PDF, więc da się je przeczytać na telefonie i znaleźć w Google; wersję do pobrania dodaję obok:"),
        li("wykształcenie — ASP lub inna uczelnia — oraz rezydencje i plenery"),
        li("wystawy indywidualne i zbiorowe od najnowszych, z miejscem i miastem"),
        li("stypendia, nagrody, prace w kolekcjach publicznych i prywatnych"),
        li("publikacje i artykuły prasowe z linkami"),
        p("Najbliższe wystawy i wernisaże mają osobną zakładkę z datą, adresem i godzinami otwarcia, a biogram w trzeciej osobie i portret do pobrania czekają na dziennikarzy."),

        h2("Obrazy na zamówienie: podstrona zamówień portretów i murali"),
        p("Klient zamówienia kupuje coś, co jeszcze nie istnieje, więc potrzebuje więcej wyjaśnień niż przy gotowym obrazie. Podstrona zamówień mówi:"),
        li("co przyjmujesz: portrety ze zdjęcia, obrazy do konkretnego wnętrza, murale w kawiarniach i biurach, ilustracje"),
        li("przykłady wcześniejszych zamówień, za zgodą klientów"),
        li("etapy: rozmowa, szkic, akceptacja, malowanie, odbiór, i ile poprawek jest w cenie"),
        li("czas realizacji, zaliczkę i cenę „od” według formatu, jeśli zdecydujesz się ją podać"),
        li("formularz z pytaniem o wymiar, temat, zdjęcia referencyjne, termin i budżet"),

        h2("Sprzedaż obrazów i grafik przez stronę artysty: płatność i wysyłka"),
        p("Oryginał i grafika to dwa różne zakupy. Duży obraz zwykle zaczyna się od rozmowy o ramie, transporcie czy obejrzeniu go w pracowni, więc lepiej sprawdza się przycisk zapytania. Grafiki, odbitki i małe formaty kupuje się szybciej i tu przydaje się koszyk:"),
        li("przy linorytach i sitodrukach nakład, papier, numer odbitki i sygnatura"),
        li("płatność BLIK-iem, szybkim przelewem (Przelewy24) lub kartą (Stripe)"),
        li("koszty wysyłki według formatu: tuba na odbitki, karton z narożnikami i kurier z ubezpieczeniem dla obrazów, które nie mieszczą się w paczkomacie"),
        p(
          "Fotografowie sprzedający odbitki mają nieco inne potrzeby; dla nich jest ",
          link("strona dla fotografa", "/pl/strona-dla-fotografa"),
          ".",
        ),

        h2("Sztuka do biur, hoteli i restauracji: podstrona dla klientów firmowych"),
        p("Obrazy kupują nie tylko kolekcjonerzy. Właściciel kawiarni szuka dużego płótna nad barem, hotel butikowy — serii prac do pokoi, firma — obrazów do nowego biura albo prezentu dla kontrahenta. Taki klient myśli inaczej: ma wymiar ściany, termin otwarcia i budżet do rozliczenia na fakturę. Osobna podstrona dla firm pokazuje:"),
        li("zdjęcia Twoich prac we wnętrzach, jeśli takie masz, albo wizualizacje na ścianie"),
        li("możliwość zamówienia serii w jednym stylu i formacie"),
        li("sposób rozliczenia, transport i montaż, jeśli je zapewniasz"),
        li("formularz z pytaniem o wnętrze, liczbę prac, termin i budżet"),

        h2("Galeria, Pakamera i aukcje a własna strona artysty"),
        p("Jeśli reprezentuje Cię galeria, strona nie konkuruje z nią: przy pracach, które galeria ma w ofercie, zamiast ceny jest link do niej, a ceny na Twojej stronie zgadzają się z cennikiem galerii. Jeśli sprzedajesz na Pakamerze, Allegro albo Etsy, karta pracy prowadzi do aukcji, więc ceny i dostępność aktualizujesz w jednym miejscu. Prace wystawione na aukcjach młodej sztuki mogą mieć notkę z nazwą domu aukcyjnego i datą."),

        h2("Instagram czy własna strona internetowa dla artysty"),
        p("Instagram jest dla wielu artystów głównym oknem wystawowym i warto go prowadzić. To jednak strumień: posty toną po kilku dniach, kolejność ustala algorytm, a kadr przycina platforma. Strona to stały katalog — wszystkie cykle, ceny, pełne CV — a link w biogramie prowadzi do bieżącego cyklu albo do prac dostępnych. Szablon na Wixie albo Squarespace wystarczy na start, przy kilkunastu pracach. Strona na zamówienie opłaca się, gdy prac są setki, sprzedajesz oryginały i grafiki na różne sposoby albo wystawiasz za granicą."),
        p(
          "Dla kolekcjonerów i galerii z zagranicy przygotowuję wersję angielską lub niemiecką — szczegóły na stronie ",
          link("tworzenie stron wielojęzycznych", "/pl/oferty/tworzenie-stron-wielojezycznych"),
          ".",
        ),

        h2("Strona artysty, którą ChatGPT i Google AI Overviews potrafią przeczytać"),
        p("Kolekcjonerzy i kuratorzy coraz częściej pytają asystentów AI: „polscy malarze abstrakcji tworzący duże formaty”, „artysta, który namaluje mural w kawiarni w Gdańsku”. ChatGPT, Perplexity czy odpowiedź AI nad wynikami Google wskażą jednak tylko artystę, o którym coś przeczytają. Na stronie nazwisko, technika, tematy, miasto, galerie i wystawy są więc zwykłym tekstem, a w kodzie dane strukturalne oznaczają Ciebie, każdą pracę z techniką, wymiarami i rokiem oraz każdą wystawę z miejscem i datami."),
        p(
          "Żeby asystenci faktycznie wymieniali Twoje nazwisko, trzeba nad tym dalej pracować — tym zajmuje się ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Ile kosztuje strona internetowa dla artysty"),
        li("Prosta strona-portfolio — strona główna, prace w cyklach, „O mnie” z manifestem, CV i kontakt: od 3000 do 6000 zł z projektem graficznym."),
        li("Pełna strona artysty z kartami prac i statusami, filtrami, wystawami, podstroną zamówień, sklepem z grafikami i wersją językową w razie potrzeby: od 8500 zł, projekt graficzny wliczony."),
        p(
          "Domena, hosting i kod są Twoje od dnia uruchomienia; potem płacisz już tylko za domenę i hosting. Widełki wszystkich usług są w ",
          link("cenniku", "/pl/cennik"),
          ", a to, jak przebiega praca nad stroną od pierwszej rozmowy, opisuje strona ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strona internetowa dla artysty: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona internetowa dla artysty?", "Prosta strona-portfolio to 3000–6000 zł, a pełna strona z kartami prac, wystawami, zamówieniami i sklepem z grafikami — od 8500 zł. W obu wariantach projekt graficzny jest wliczony. Gdy napiszesz, ile prac i cykli chcesz pokazać, podam stałą kwotę."],
          ["Czy podawać ceny obrazów na stronie?", "Przy grafikach i mniejszych pracach cena widoczna od razu ułatwia zakup. Przy dużych oryginałach często wystarcza przedział albo przycisk „Zapytaj o tę pracę”. Jeśli współpracujesz z galerią, ceny na stronie powinny zgadzać się z jej cennikiem."],
          ["Czy sam dodam nowe prace i oznaczę sprzedane?", "Tak. Nowa praca to formularz w panelu: zdjęcie, tytuł, rok, technika, wymiary, cykl, cena i status. Zmianę na „sprzedany” albo „na wystawie” od razu widać na wszystkich podstronach, gdzie praca się pojawia."],
          ["Czy ktoś może ukraść zdjęcia moich obrazów?", "Skopiować da się wszystko, co widać na ekranie. Strona pokazuje więc tylko zdjęcia w rozdzielczości ekranowej, z Twoim nazwiskiem w metadanych i opisie, a pliki do druku zostają u Ciebie. Taka kopia nie przyda się nikomu do wydruku."],
          ["Mam galerię — po co mi własna strona?", "Galeria pokazuje prace, które ma u siebie. Twoja strona pokazuje całą twórczość, CV i kontakt, a przy pracach z galerii kieruje kolekcjonera prosto do niej, więc obie strony się uzupełniają."],
          ["Czy pracujesz z artystami spoza Warszawy?", "Tak, z całej Polski. Cała praca toczy się zdalnie: spotkania online, uwagi do projektu zaznaczasz bezpośrednio na makiecie, a zdjęcia prac przesyłasz przez dysk w chmurze. Rozliczamy się na podstawie umowy i faktury."],
          ["Czy moje prace pojawią się w odpowiedziach ChatGPT?", "Buduję ją tak, żeby asystent AI znalazł na niej fakty: kim jesteś i co tworzysz — tekstem, a prace i wystawy — w danych strukturalnych. Polecanie przy konkretnych pytaniach to już stała praca nad pozycjonowaniem w AI, którą wykonuję osobno."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową dla artysty: co mi wysłać"),
        p(
          "Wyślij mi swoje imię i nazwisko, link do Instagrama i obecnej strony lub profilu w galerii, listę cykli z przybliżoną liczbą prac, informację, jak sprzedajesz — oryginały, grafiki, zamówienia — aktualne CV i dwie–trzy strony artystów, których klimat Ci odpowiada. Wrócę z listą podstron i stałą ceną. Użyj ",
          link("formularza powyżej", "#quote"),
          " albo napisz na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
