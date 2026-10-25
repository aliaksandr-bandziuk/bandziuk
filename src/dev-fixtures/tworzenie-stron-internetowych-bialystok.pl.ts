// Landing page fixture: Tworzenie stron internetowych Białystok (PL), group
// «tworzenie-stron-internetowych-bialystok». Stage 3 city pilot, Białystok only.
// Semantic core (ref/city-keywords.md, ref/pl-cities.md): tworzenie stron
// internetowych białystok 110; brief phrases without measured volume: strony
// internetowe białystok, strona internetowa białystok, projektowanie stron
// białystok, cennik. PAA: Jaka jest cena projektowania stron internetowych?
// (H2 + FAQ).
// Intent (ref/intent-check-pl-cities.md): website vs SEO 0 shared URLs → SEO is
// /pl/pozycjonowanie-stron-bialystok; «tworzenie stron», «projektowanie
// stron», «strony internetowe» share 0–1 URLs → all carried by this one page.
// City part: Podlasie food producers selling outside the region, services for
// the city and the whole voivodeship, international students of the medical
// university, nature tourism (Puszcza Białowieska, Biebrza, Narew, Supraśl),
// guests from Lithuania; language versions LT/EN/UA; searching with districts
// and nearby towns; who builds sites in Białystok.
// Prices: prosta strona 3000–6000 zł, pełna od 8500 zł, projekt w cenie.
// NOT on this page: pozycjonowanie (/pl/pozycjonowanie-stron-bialystok);
// e-commerce and online shops (not offered); Warsaw pages. Belarus
// deliberately not mentioned (brief).
// Owner’s rules: remote work from Warsaw, no visits promised; never say there
// are no clients from the visitor’s city or industry.
import { p, h2, li, ol, link, k } from "./pt";

export const tworzenieStronInternetowychBialystokPl = {
  lang: "pl",
  group: "tworzenie-stron-internetowych-bialystok",
  slug: "tworzenie-stron-internetowych-bialystok",
  title: "Tworzenie stron internetowych Białystok",
  heading: "Tworzenie stron internetowych w Białymstoku",
  excerpt:
    "Tworzenie stron internetowych w Białymstoku dla producentów, firm usługowych i obiektów turystycznych z Podlasia: projekt graficzny w cenie, wersje litewska, angielska lub ukraińska, zapytanie lub telefon jednym dotknięciem — jeden wykonawca, praca online, ceny z cennika.",
  seo: {
    metaTitle: "Tworzenie stron internetowych Białystok | Bandziuk",
    metaDescription:
      "Strony internetowe w Białymstoku: projekt w cenie, wersje litewska, angielska i ukraińska, szybkie na telefonie, czytelne dla Google i AI. Od 3000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt graficzny w cenie", "Od 3000 zł", "Wersje PL · LT · EN · UA"],
  heroPhonePoints: ["Oferta i ceny", "Lietuvių · English", "Dojazd i parking", "Zapytaj · Zadzwoń"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona internetowa dla firmy z Białegostoku, projekt w cenie", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Pełna strona dla firmy z Białegostoku: podstrony usług lub produktów, wersje językowe, zapytania ofertowe lub rezerwacje, SEO lokalne, projekt w cenie", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co dostajecie ze stroną internetową w Białymstoku",
      items: [
        { _key: k("o"), iconName: "layers", title: "Podstrony usług lub produktów", text: "Opis, zdjęcia, ceny lub dane techniczne" },
        { _key: k("o"), iconName: "message-circle", title: "Wersje litewska, angielska, ukraińska", text: "Tylko te, których naprawdę szukają Wasi klienci" },
        { _key: k("o"), iconName: "file-text", title: "Zapytanie ofertowe lub rezerwacja", text: "Formularz zgodny z RODO, w języku podstrony" },
        { _key: k("o"), iconName: "map-pin", title: "Dane jak w wizytówce Google", text: "Adres, osiedle, dojazd, obszar działania" },
        { _key: k("o"), iconName: "gauge", title: "Szybka na telefonie", text: "Pierwszy ekran w mniej niż 2,5 sekundy" },
        { _key: k("o"), iconName: "sparkles", title: "Czytelna dla Google i asystentów AI", text: "Fakty tekstem, dane strukturalne w każdym języku" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona firmy z Białegostoku", value: "3000–6000 zł", note: "projekt w cenie" },
        { _key: k("r"), label: "Produkty, języki, zapytania, SEO lokalne", value: "od 8500 zł", note: "projekt w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: strony wielojęzyczne i strony lokalnych firm, które zbudowałem",
      subtitle:
        "Firma z Białegostoku, która mówi do klientów w kilku językach, zwróci uwagę na serwis agencji edukacyjnej obejmujący dziesięć krajów oraz na trójjęzyczną (EN/PL/DE) stronę firmy skanowania laserowego 3D i BIM, przeniesioną z kreatora no-code na WordPress. Trzy pozostałe — pracownia renowacji felg, firma remontowo-inwestycyjna i warsztat samochodowy, wszystkie z Warszawy — pokazują strony lokalnych usług, na których klient od razu widzi zakres pracy i sposób kontaktu.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "full-multilingual-website-development-and-seo-for-student-services",
        "architecture-website-rebuild-and-seo-scan",
        "felgilab-wordpress-rebuild",
        "renovation-and-investment-website-with-premium-design",
        "auto-repair-seo-and-ux-boost",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej dla firmy z Białegostoku",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: proponuję listę podstron i wersji językowych oraz stałą cenę w widełkach z cennika.",
      contextLabel: "Nazwa firmy lub obecna strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Jakie języki są potrzebne?", options: ["Tylko polski", "Polski i angielski", "Polski i litewski", "Kilka języków"] },
        { _key: k("z"), question: "Czego ma dotyczyć strona?", options: ["Usługi dla mieszkańców", "Produkcja i sprzedaż hurtowa", "Noclegi i turystyka na Podlasiu", "Coś innego"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Tworzenie stron internetowych w Białymstoku obejmuje u mnie cały proces: ustalenie, dla kogo jest strona, listę podstron, projekt graficzny, wykonanie, teksty, wersje językowe i uruchomienie. Robi to jedna osoba, więc nie płacicie za koordynację między działami, a cenę znacie z cennika jeszcze przed pierwszą wiadomością. Pracuję z Warszawy, a z firmami z Białegostoku i Podlasia współpracuję online."),

        h2("Tworzenie stron internetowych w Białymstoku: zakres i podstawy"),
        p("Każda strona, niezależnie od wariantu, ma:"),
        li("projekt graficzny przygotowany najpierw na telefon, potem na komputer"),
        li("wykonanie w WordPressie lub Next.js — wybór zależy od tego, kto będzie dodawał treści i jak często"),
        li("tytuły, opisy i adresy podstron gotowe pod Google, dane strukturalne, GA4 i Search Console"),
        li("formularz z informacją o przetwarzaniu danych i baner cookies z prawdziwą możliwością odmowy"),
        li("panel, w którym zmieniacie ceny, zdjęcia, godziny i aktualności bez programisty"),
        p("Własność jest prosta: domena, kod i treści należą do firmy. Po starcie nie ma u mnie abonamentu, płacicie tylko za zmiany zlecone później."),

        h2("Strony internetowe dla firm z Białegostoku: producenci, usługi i turystyka na Podlasiu"),
        p("Białystok jest stolicą regionu, w którym ważną rolę gra przemysł spożywczy: mleczarnie, zakłady mięsne, producenci słodyczy i wielu mniejszych przetwórców. Ich strona nie sprzedaje sąsiadom, tylko przekonuje kupca z sieci handlowej, hurtowni albo z zagranicy, że firma dostarczy towar w odpowiedniej ilości i jakości. Mniejsi wytwórcy produktów regionalnych z Podlasia potrzebują z kolei strony, która opowie o pochodzeniu i sposobie wytwarzania i pokaże, gdzie można ich produkty kupić."),
        p("Zupełnie inaczej wygląda strona obiektu turystycznego. Pensjonat w Supraślu, agroturystyka nad Narwią albo hotel w centrum Białegostoku przyjmują gości, którzy przyjeżdżają do Puszczy Białowieskiej, nad Biebrzę albo na weekend w mieście. Taki gość ogląda zdjęcia, sprawdza dojazd i porównuje cenę z portalem rezerwacyjnym."),
        p("Trzecia grupa to usługi dla mieszkańców Białegostoku i całego województwa: gabinety lekarskie i stomatologiczne, warsztaty, firmy remontowe, szkoły językowe. Ich strona ma przede wszystkim szybko powiedzieć, co, gdzie i za ile. Każda z tych grup dostaje inny układ podstron i inny główny przycisk."),

        h2("Strona w kilku językach dla firmy z Białegostoku: litewski, angielski, ukraiński"),
        p("Położenie blisko Litwy i uczelnie z dużą liczbą studentów z zagranicy sprawiają, że wiele białostockich firm obsługuje ludzi, którzy nie czytają po polsku. Goście z Litwy przyjeżdżają na zakupy, do lekarza czy na wypoczynek, studenci uczelni medycznej szukają po angielsku dentysty, mieszkania albo siłowni, a część mieszkańców woli język ukraiński."),
        li("przygotowuję tylko te wersje, których szukają Wasi klienci, i tylko te podstrony, które są im potrzebne"),
        li("każda wersja ma osobne adresy i oznaczenia hreflang, żeby Google pokazywał gościowi z Litwy wersję litewską"),
        li("ceny, godziny i zasady rezerwacji są identyczne we wszystkich językach"),
        li("teksty w obcym języku sprawdza osoba, która nim mówi — Wasz pracownik albo tłumacz"),
        p(
          "Więcej o budowie takich stron na stronie ",
          link("tworzenie stron wielojęzycznych", "/pl/oferty/tworzenie-stron-wielojezycznych"),
          ".",
        ),

        h2("Jak mieszkańcy Białegostoku i regionu szukają wykonawcy i co ma pokazać strona"),
        p("Klient z Białegostoku często dopisuje do zapytania osiedle — Antoniuk, Dziesięciny, Wysoki Stoczek, Bojary — albo pobliską miejscowość, jak Wasilków, Choroszcz czy Łapy. Klient z dalszej części Podlasia, z Łomży, Suwałk czy Hajnówki, wpisuje „Białystok”, bo tam szuka specjalisty, którego nie ma u siebie. Taki człowiek planuje przyjazd, więc na stronie musi znaleźć adres, parking, godziny i informację, czy trzeba się umówić."),
        p("Firma, która jeździ do klientów, powinna napisać, jak daleko dojeżdża. Strona, która tego nie mówi, odsyła klienta z Supraśla czy Zabłudowa do konkurenta, który zrobił to wyraźnie."),

        h2("Kto tworzy strony internetowe w Białymstoku i jak wybrać wykonawcę"),
        p("W wynikach dla „tworzenie stron internetowych Białystok” są białostockie studia i agencje, ogólnopolskie firmy z podstroną dla Białegostoku, portal Oferteo i ogłoszenia freelancerów. Wyniki dla „projektowanie stron” i „strony internetowe” różnią się od siebie prawie całkowicie, więc warto porównywać oferty, a nie tylko pierwszy wynik."),
        p("Przy wyborze zapytajcie każdego wykonawcę o to samo: kto zaprojektuje i zaprogramuje stronę, czy cena jest stała, czy projekt graficzny jest w niej zawarty, do kogo należą domena i kod, czy po starcie trzeba płacić abonament. U mnie odpowiedzi są proste: wszystko robię sam, cena jest stała i podana w cenniku, projekt jest w cenie, strona należy do Was, abonamentu nie ma. Nie tworzę sklepów internetowych — buduję strony firmowe, usługowe i wielojęzyczne."),

        h2("Projektowanie stron w Białymstoku: projekt graficzny w cenie, oparty na Waszych zdjęciach"),
        p("Najpierw powstaje projekt strony głównej i jednej podstrony, oglądany na Waszym telefonie w przeglądarce. Zamiast zdjęć ze stocku używam Waszych: zakładu, produktów, gabinetu, wnętrz pensjonatu, okolicy. Podlasie ma krajobraz, którego nie trzeba udawać, a prawdziwe zdjęcie lasu za oknem przekonuje gościa lepiej niż przypadkowy kadr z banku zdjęć."),
        p("Kolorystyka i typografia wynikają z Waszego logo i charakteru firmy. Dla producenta liczy się czytelność tabel i plików do pobrania, dla obiektu turystycznego — duże zdjęcia i rezerwacja, dla gabinetu — spokój i szybki kontakt."),

        h2("Strona dla producenta z Podlasia: katalog, dane techniczne i zapytania ofertowe"),
        p(
          "Strona zakładu spożywczego lub innego producenta z regionu jest bliżej katalogu niż wizytówki: podstrony grup produktów, opakowania i gramatury, certyfikaty, możliwości produkcji pod marką odbiorcy, wersja angielska dla kupców z zagranicy i formularz zapytania ofertowego z polami, które pozwolą od razu przygotować ofertę. Więcej na stronie ",
          link("strona dla firmy produkcyjnej", "/pl/strona-dla-firmy-produkcyjnej"),
          ". Gabinety, do których przychodzą studenci i goście z zagranicy, znajdą swoje potrzeby opisane na stronie ",
          link("strona dla gabinetu stomatologicznego", "/pl/strona-dla-gabinetu-stomatologicznego"),
          ".",
        ),

        h2("Strona internetowa, którą ChatGPT i Google AI Overviews potrafią przeczytać"),
        p(
          "Gość planujący wyjazd pyta ChatGPT o pensjonat blisko Puszczy Białowieskiej, a kupiec z Wilna — o producenta serów z Podlasia. Asystenci polecają tylko tych, o których coś przeczytają. Dlatego na stronach, które buduję, oferta, lokalizacja, ceny, godziny i języki obsługi są zapisane tekstem, dane strukturalne opisują firmę tak samo jak wizytówka Google, a każda wersja językowa jest pełnoprawna, a nie automatycznym tłumaczeniem. Dalszą pracę nad widocznością w asystentach opisuję na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Budowa strony dla firmy z Białegostoku krok po kroku: współpraca zdalna"),
        ol("Rozmowa wideo albo wiadomość głosowa: czym się zajmujecie, kim są klienci, w jakich językach mówią."),
        ol("Lista podstron i wersji językowych oraz stała cena w widełkach z cennika."),
        ol("Projekt strony głównej i jednej podstrony, do uzgodnienia na podglądzie."),
        ol("Teksty po polsku na podstawie rozmowy, potem wersje językowe z Waszym tłumaczem lub pracownikiem."),
        ol("Start z domeną, analityką, Search Console i połączeniem z wizytówką Google; krótka instrukcja panelu."),
        p("Prosta strona zajmuje zwykle dwa–cztery tygodnie, pełna z wersjami językowymi cztery–osiem. Obiekty turystyczne najlepiej zamawiają stronę zimą, żeby była gotowa przed majówką."),

        h2("Po uruchomieniu strony: przebudowa, własność i pozycjonowanie w Białymstoku"),
        p(
          "Jeśli macie już stronę, nowa wersja zachowuje domenę i adresy, które Google zna, dzięki przekierowaniom, więc nie zaczynacie od zera. Nowa strona ma podstawy SEO, ale miejsce w czołówce dla fraz z Białymstokiem buduje się miesiącami — to osobna usługa, opisana na stronie ",
          link("pozycjonowanie stron w Białymstoku", "/pl/pozycjonowanie-stron-bialystok"),
          ".",
        ),
        p("Hosting i domenę zamawiacie na swoje dane albo przenoszę je na Was po starcie, więc żaden wykonawca nie trzyma Waszej strony jako zakładnika. Dostajecie dostęp administratora do panelu, Search Console i analityki. Jeśli za rok zechcecie, żeby stroną zajmował się ktoś inny w Białymstoku, dostajecie dostępy i kod, a przekazanie nie wymaga mojej zgody. Kopie zapasowe ustawiam przy uruchomieniu, a drobne zmiany zrobicie sami w panelu."),

        h2("Ile kosztuje strona internetowa w Białymstoku: cennik"),
        li("Prosta strona białostockiej firmy z kilkoma podstronami usług, kontaktem i formularzem zgodnym z RODO: 3000–6000 zł."),
        li("Pełna strona — podstrony usług lub produktów, wersje językowe, zapytania ofertowe lub rezerwacje, integracje, SEO lokalne: od 8500 zł."),
        p(
          "W obu wariantach projekt graficzny jest wliczony w cenę, a pełne widełki znajdziecie w ",
          link("cenniku", "/pl/cennik"),
          ". Wersje językowe wyceniam razem ze stroną, więc koszt znacie od początku. Ogólnie o moim podejściu do budowy stron piszę na stronie ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strony internetowe w Białymstoku: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Jaka jest cena projektowania stron internetowych w Białymstoku?", "Prosta strona kosztuje od 3000 do 6000 zł, pełna z podstronami produktów lub usług, wersjami językowymi i zapytaniami ofertowymi od 8500 zł. Projekt graficzny jest w cenie, a stałą cenę podaję po krótkim opisie firmy."],
          ["Ile trwa tworzenie strony internetowej w Białymstoku?", "Zwykle dwa–cztery tygodnie dla prostej strony i cztery–osiem dla pełnej z wersjami językowymi. Czas zależy głównie od zdjęć, tekstów i tłumaczeń po Waszej stronie."],
          ["Czy strona może mieć wersję litewską?", "Tak, jeśli goście z Litwy są dla Was ważni. Litewskie podstrony mają osobne adresy URL i znaczniki hreflang, obejmują to, co ci goście czytają najczęściej, a ich treść zatwierdza ktoś, kto zna litewski."],
          ["Czy pracujesz z firmami z Białegostoku na odległość?", "Tak. Pracuję z Warszawy, a rozmowy, projekt, poprawki i start odbywają się online. Projekt oglądacie w przeglądarce na swoim telefonie i komputerze."],
          ["Czy strona pomoże firmie pojawić się w Mapach Google?", "Strona ma te same dane co wizytówka i potwierdza je danymi strukturalnymi, co wspiera widoczność w Mapach. Prowadzenie wizytówki i walka o miejsca w Mapach to część pozycjonowania."],
          ["Czy zrobisz sklep internetowy dla producenta?", "Nie. Buduję strony firmowe z katalogiem produktów i zapytaniem ofertowym, ale nie sklepy z koszykiem i płatnościami online."],
          ["Czy strona będzie nasza?", "Tak. Domena, kod i treści należą do Was, a stronę można w każdej chwili przenieść do innego hostingu lub wykonawcy."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową w Białymstoku: co mi wysłać"),
        p(
          "Przyślijcie krótki opis firmy, adres strony albo wizytówki, listę produktów lub usług i informację, czy klienci mówią po litewsku, angielsku albo ukraińsku. Zdjęcia zakładu, wnętrz czy podlaskiej okolicy też się przydadzą. Dostaniecie plan podstron i wersji językowych ze stałą ceną. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
