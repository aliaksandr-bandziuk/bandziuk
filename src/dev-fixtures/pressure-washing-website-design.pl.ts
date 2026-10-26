// Landing page fixture: Strona internetowa dla firmy mycia ciśnieniowego (PL),
// group «pressure-washing-website-design». New page.
// Market version for Polish one-person and small firms washing paving,
// facades and roofs; not a translation of the EN page.
// Semantic core: ref/home-services.md has no measured PL phrases for this
// niche (PL «On topic» = 0). Headings use the slug phrase «strona internetowa
// dla firmy mycia ciśnieniowego» (brief) and the services as Polish customers
// name them: mycie kostki brukowej, mycie elewacji, mycie dachów, mycie
// tarasów, impregnacja kostki, cena za m².
// Intent: ref/intent-check-home-services.md — EN «pressure washing website»
// and «pressure washing website design» share 1 URL → one page; SERPs hold
// washing companies, builders (Jobber, GoSite) and studios. No PL SERP check.
// Polish context: season from spring to autumn, price per m², wspólnoty
// mieszkaniowe and zarządcy nieruchomości as B2B buyers (faktura VAT,
// protokół), fugi re-sanded after washing paving, biocide on facades and
// roofs, Oferteo and OLX as lead sources, Profil Firmy w Google without a
// public address.
// Prices: /pl/cennik — prosta strona 3000–6000 zł, pełna od 8500 zł, projekt w
// cenie.
// NOT on this page: firmy sprzątające i sprzątanie biur
// (/pl/strona-dla-firmy-sprzatajacej — linked once); złota rączka
// (/pl/strona-internetowa-dla-zlotej-raczki); pozycjonowanie jako usługa
// (/pl/oferty/pozycjonowanie-lokalne — linked).
// Owner’s rules: never say there are no clients from the visitor’s segment;
// every page covers AI search.
import { p, h2, h3, li, ol, link, k } from "./pt";

export const pressureWashingWebsiteDesignPl = {
  lang: "pl",
  group: "pressure-washing-website-design",
  slug: "strona-internetowa-dla-firmy-mycia-cisnieniowego",
  title: "Strona internetowa dla firmy mycia ciśnieniowego",
  heading: "Strona internetowa dla firmy mycia ciśnieniowego",
  excerpt:
    "Strona internetowa dla firmy mycia ciśnieniowego, zaprojektowana i zbudowana przez jedną osobę: zdjęcia przed i po z tego samego miejsca, wycena za m², osobne podstrony mycia kostki brukowej, elewacji i dachów oraz oferta dla wspólnot i zarządców.",
  seo: {
    metaTitle: "Strona dla firmy mycia kostki, elewacji i dachów | Bandziuk",
    metaDescription:
      "Strona dla firmy mycia ciśnieniowego: zdjęcia przed i po, wycena za m², podstrony mycia kostki, elewacji i dachów, oferta dla wspólnot. Od 3000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt + wykonanie, jedna cena", "Od 3000 zł", "Zdjęcia przed i po w centrum"],
  heroPhonePoints: ["Przed · Po", "Wycena za m²", "Kostka · Elewacja · Dach", "Zadzwoń · SMS"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona internetowa dla firmy mycia ciśnieniowego, projekt w cenie", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Strona dla firmy mycia ciśnieniowego z podstronami powierzchni, galerią przed i po, wyceną za m², ofertą dla wspólnot i pozycjonowaniem lokalnym na start, projekt w cenie", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co dostajesz ze stroną dla firmy mycia ciśnieniowego",
      items: [
        { _key: k("o"), iconName: "image", title: "Suwak przed i po z tego samego miejsca", text: "Powierzchnia, miejscowość i metoda pod każdym zdjęciem" },
        { _key: k("o"), iconName: "gauge", title: "Wycena za m² w formularzu", text: "Albo mały, średni, duży podjazd dla tych, co nie mierzyli" },
        { _key: k("o"), iconName: "layers", title: "Podstrona dla każdej powierzchni", text: "Kostka, elewacja, dach, taras, ogrodzenie" },
        { _key: k("o"), iconName: "file-text", title: "Oferta dla wspólnot i zarządców", text: "Faktura VAT, terminy, protokół, kilka adresów" },
        { _key: k("o"), iconName: "shield-check", title: "Odpowiedź na „czy nie zniszczycie?”", text: "Ciśnienie, chemia, fugi, rośliny i OC zwykłymi słowami" },
        { _key: k("o"), iconName: "sparkles", title: "Usługi i ceny czytelne dla AI", text: "Tekst i dane strukturalne, nie napisy na zdjęciach" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona firmy mycia ciśnieniowego", value: "3000–6000 zł", note: "projekt w cenie" },
        { _key: k("r"), label: "Podstrony powierzchni, galeria, wycena za m², wspólnoty, SEO lokalne", value: "od 8500 zł", note: "projekt w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Strony firm usługowych, które zaprojektowałem i zbudowałem",
      subtitle:
        "Pierwsze cztery to warszawskie firmy usługowe, które zdobywają klientów przez telefony, Mapy Google i podstrony usług: warsztat samochodowy, pracownia renowacji felg pokazująca efekty na zdjęciach, przechowalnia opon i firma remontowa. Piąta, strona psychoterapeuty z Mediolanu, ma podstrony, które już pojawiają się w odpowiedziach ChatGPT. Ze stroną firmy mycia ciśnieniowego łączy je widoczny efekt pracy, ceny łatwe do znalezienia i krótka droga do zapytania.",
      picks: [
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
        "renovation-and-investment-website-with-premium-design",
        "psychotherapist-website-milan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony dla firmy mycia ciśnieniowego",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: proponuję pierwszy ekran, formularz wyceny za m² i podaję stałą cenę.",
      contextLabel: "Nazwa firmy, wizytówka Google lub obecna strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Co myjesz najczęściej?", options: ["Kostkę brukową i podjazdy", "Elewacje", "Dachy", "Obiekty wspólnot i firm"] },
        { _key: k("z"), question: "Jak dziś wyceniasz zlecenia?", options: ["Za m²", "Ryczałt za zlecenie", "Po oględzinach", "Różnie"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Strona internetowa dla firmy mycia ciśnieniowego powstaje u mnie w całości: plan podstron, grafika, teksty i kod. Jeden wykonawca odpowiada za efekt, a stała cena jest ustalona przed rozpoczęciem. W tej branży efekt pracy widać gołym okiem, więc zdjęcia sprzedają same. Trudność jest gdzie indziej: każda posesja ma inną powierzchnię i inny stan, klient chce znać koszt, zanim zadzwoni, i boi się, że myjka zniszczy mu elewację albo wypłucze fugi."),

        h2("Strona internetowa dla jednoosobowej firmy mycia ciśnieniowego"),
        p("Wiele takich firm to jedna osoba, bus lub przyczepa z agregatem i sezon od wiosny do jesieni. W maju i czerwcu myjesz od rana do wieczora, a telefon odbierasz w mokrych rękawicach. Strona przejmuje część rozmów:"),
        li("od pierwszego ekranu pokazuje efekt, więc nie trzeba nikogo przekonywać przez telefon"),
        li("zbiera rodzaj powierzchni, metraż, adres i zdjęcia w jednym zgłoszeniu"),
        li("mówi wprost, czego nie robisz, żeby nie dzwoniono w sprawie sprzątania mieszkań czy malowania"),
        li("sama wygląda czysto i porządnie — zabałaganiona strona to dziwna reklama mycia"),
        p("Klienci pytają też o sprawy praktyczne: czy potrzebny jest dostęp do wody i prądu, ile trwa mycie podjazdu, czy muszą być w domu i co z samochodem na podjeździe. Krótka sekcja „jak wygląda mycie” odpowiada na to raz, zamiast przez telefon przy każdym zleceniu."),

        h2("Zdjęcia przed i po myciu kostki, elewacji i dachu na stronie"),
        p("Para zdjęć przed i po to główny argument sprzedażowy, więc projekt strony jest zbudowany wokół niej. Najlepiej działa suwak, który klient przesuwa palcem po jednym zdjęciu: widzi, jak ta sama kostka czy ta sama dachówka zmienia kolor. Żeby to działało, zdjęcia trzeba robić według prostych zasad:"),
        li("to samo miejsce, wysokość i kadr przed i po — zaznacz punkt butem albo kredą"),
        li("telefon poziomo, światło dzienne, słońce nie prosto w obiektyw"),
        li("jedno zdjęcie w połowie pracy, z czystym pasem na zielonej od glonów kostce"),
        li("bez filtrów i podkręconych kolorów — klienci widzieli już przerobione „po” i przestają wierzyć wszystkim"),
        p("Pod każdą parą jedna linijka: powierzchnia, miejscowość, metoda. Galerię można filtrować, żeby właściciel zielonego dachu oglądał dachy, a nie parkingi przed sklepem."),

        h2("Kalkulator ceny za m² na stronie firmy mycia ciśnieniowego"),
        p("W Polsce mycie kostki, elewacji i dachów wycenia się zwykle za metr kwadratowy, więc formularz pyta o to samo, o co pytasz przez telefon:"),
        ol("Powierzchnia: kostka brukowa, elewacja, dach, taras, ogrodzenie."),
        ol("Metraż, a dla tych, którzy go nie znają — mały, średni lub duży podjazd z rysunkiem każdego."),
        ol("Stan i dodatki: lekkie zabrudzenia, mech i glony, plamy z oleju, impregnacja, uzupełnienie fug piaskiem."),
        ol("Adres, zdjęcia i telefon."),
        p("Formularz może od razu pokazać przedział ceny według Twoich stawek i minimalnej kwoty zlecenia albo tylko wysłać zgłoszenie, a cenę podajesz sam. Przedział na ekranie zwykle zachęca do wysłania zapytania; ostateczna cena zostaje Twoją decyzją po obejrzeniu zdjęć."),

        h2("Podstrony usług: mycie kostki brukowej, elewacji, dachów i tarasów"),
        p("Każda powierzchnia ma innego klienta i inne pytania, więc każda dostaje własną podstronę."),
        h3("Mycie kostki brukowej i impregnacja"),
        p("Klienta interesuje, czy zejdą glony, olej i ślady opon, co stanie się z fugami i czy warto zaimpregnować kostkę. Podstrona pokazuje to na zdjęciach i opisuje uzupełnianie piasku w fugach po myciu."),
        h3("Mycie elewacji"),
        p("Właściciel domu boi się o tynk, ocieplenie i okna. Strona wyjaśnia mycie niskim ciśnieniem ze środkiem na glony, zabezpieczanie okien i parapetów oraz to, jak długo elewacja zostaje czysta."),
        h3("Mycie dachów"),
        p("Mech i porosty na dachówce budzą strach o pokrycie. Podstrona mówi, czym i jakim ciśnieniem myjesz dachówkę ceramiczną, betonową i blachodachówkę, kto wchodzi na dach i jak jest zabezpieczony."),
        h3("Tarasy i ogrodzenia"),
        p("Drewno i deska kompozytowa wymagają ostrożności, a po myciu często malowania lub olejowania. Klient powinien wiedzieć to przed zamówieniem."),

        h2("Mycie ciśnieniowe dla wspólnot, zarządców i firm: osobna podstrona"),
        p("Chodniki osiedlowe, parkingi, wiaty śmietnikowe, elewacje bloków, place przed sklepami i stacjami — to zlecenia od zarządców nieruchomości, wspólnot mieszkaniowych i firm. Decyduje tu ktoś inny niż właściciel domu i patrzy na inne rzeczy:"),
        li("faktura VAT i dane firmy podane tekstem"),
        li("ubezpieczenie OC działalności, jeśli je masz, z możliwością przesłania polisy"),
        li("praca rano, wieczorem lub w weekend, żeby nie przeszkadzać mieszkańcom i klientom"),
        li("stałe mycie co sezon lub co kwartał, opisane jako Twoja oferta z Twoimi warunkami"),
        li("formularz z polami dla firmy: nazwa, liczba adresów, kto zatwierdza zlecenie"),

        h2("Bezpieczeństwo mycia na stronie: tynk, dachówka, fugi i rośliny"),
        p("Największą obawą klienta nie jest cena, tylko szkoda: popękany tynk, zniszczona dachówka, wypłukane fugi, uschnięte rośliny, woda w oknach. Na każdej podstronie krótki blok odpowiada na to wprost: jakim ciśnieniem myjesz daną powierzchnię, jakiego środka używasz, jak chronisz rośliny i okna i co obejmuje Twoje OC. Obok stoją opinie, w których klienci piszą o porządku i ostrożności."),
        p("Jeśli używasz środków biobójczych na glony i mech, strona podaje za producentem, kiedy dzieci i zwierzęta mogą znów wyjść na podjazd czy do ogrodu. Taka informacja podana przed zamówieniem buduje więcej zaufania niż zapewnienie, że wszystko jest bezpieczne."),

        h2("Sezon mycia ciśnieniowego na stronie: wiosenne terminy i usługi zimowe"),
        p("Sezon wyznacza rytm strony. Wiosną pierwszy ekran prowadzi do mycia kostki i elewacji, latem do tarasów i dachów. Wąski baner informuje o wolnych terminach albo zapisach na wiosnę i włączasz go sam w panelu. Jeśli zimą robisz coś innego — na przykład odśnieżanie albo mycie okien — te usługi mają własne podstrony, a nie jedną linijkę w stopce."),

        h2("Oferteo, OLX czy własna strona firmy mycia ciśnieniowego"),
        p("Oferteo i ogłoszenia na OLX przynoszą zapytania, ale to samo zapytanie trafia do kilku firm, a często wygrywa najniższa cena. Własna strona z galerią i cennikiem za m² przyciąga klienta, który pyta tylko Ciebie i już zna przedział kosztów. Platform nie trzeba porzucać — strona jest miejscem, do którego kierujesz klientów z ogłoszeń, żeby zobaczyli efekty."),
        p("Krótkie filmy przed i po z Instagrama, Facebooka czy TikToka też mają miejsce na stronie. Wstawiam je tak, żeby ładowały się dopiero po dotknięciu — strona zostaje szybka na telefonie, a klient ogląda ten sam materiał, który widział w mediach społecznościowych, obok cennika i formularza."),
        p(
          "Jeśli oprócz mycia na zewnątrz sprzątasz też wnętrza lub biura, zajrzyj na stronę ",
          link("strona dla firmy sprzątającej", "/pl/strona-dla-firmy-sprzatajacej"),
          ".",
        ),

        h2("Pozycjonowanie lokalne firmy mycia ciśnieniowego w Mapach Google"),
        p("Klienci wpisują „mycie kostki brukowej Pruszków”, „mycie elewacji Kraków” albo „mycie dachu” i wybierają z mapy. Firma bez lokalu ustawia Profil Firmy w Google jako działającą u klienta, z ukrytym adresem domowym i wpisanymi powiatami lub miejscowościami. Strona to wspiera: podstrona każdej powierzchni, miejscowości wypisane tekstem, te same dane w katalogach, zdjęcia przed i po dodawane także do wizytówki i opinie, które wymieniają usługę i miejsce."),
        p(
          "Konfiguracja na start jest częścią pełnej strony. Stałą pracę nad mapami i opiniami opisuję na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Strona firmy mycia ciśnieniowego, którą ChatGPT i Google AI Overviews potrafią przeczytać"),
        p("Klienci pytają ChatGPT i podsumowania AI w Google, czy mycie dachu ciśnieniem jest bezpieczne, jak często myć kostkę albo kto robi to w okolicy. Asystent odpowiada na podstawie tekstu, który może przeczytać. Jeśli powierzchnie, metody, obszar i ubezpieczenie są opisane słowami i oznaczone danymi strukturalnymi, model może je zacytować; cennik wklejony jako zdjęcie pozostaje dla niego niewidoczny."),
        p(
          "Zdobywanie wzmianek w odpowiedziach AI to osobna usługa — szczegóły na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Ile kosztuje strona internetowa dla firmy mycia ciśnieniowego"),
        p("Za projekt graficzny nie płacisz osobno:"),
        li("Prosta strona — strona główna z galerią przed i po, usługi, obszar działania, formularz: od 3000 do 6000 zł."),
        li("Pełna strona z podstroną każdej powierzchni, galerią z filtrami, wyceną za m², ofertą dla wspólnot i pozycjonowaniem lokalnym na start: od 8500 zł."),
        p("Praca ma cztery etapy: brief z usługami, stawkami i zdjęciami; projekt pierwszego ekranu, podstrony usługi i formularza na telefonie; wykonanie; uruchomienie z wizytówką, analityką i powiadomieniami."),
        p(
          "Mój sposób pracy nad stronami opisuję na stronie ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ", a widełki są w ",
          link("cenniku", "/pl/cennik"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strona dla firmy mycia ciśnieniowego: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona dla firmy mycia ciśnieniowego?", "Prosta strona kosztuje od 3000 do 6000 zł, pełna — od 8500 zł; w pełnej są podstrony powierzchni, galerią przed i po, wyceną za m², ofertą dla wspólnot i pozycjonowaniem lokalnym na start. Projekt graficzny jest w cenie."],
          ["Czy strona może od razu pokazać cenę mycia kostki?", "Tak, jeśli chcesz. Formularz liczy przedział według Twoich stawek za m² i minimalnej kwoty zlecenia, a ostateczną cenę potwierdzasz po obejrzeniu zdjęć."],
          ["Czy zdjęcia z telefonu wystarczą do galerii przed i po?", "Tak, jeśli „przed” i „po” są robione z tego samego miejsca, w dzień i bez filtrów. Wysyłam krótką instrukcję, jak je robić na zleceniu."],
          ["Czy potrzebuję osobnej podstrony do mycia dachów?", "Jeśli myjesz dachy, tak. Klienci szukają tej usługi innymi słowami i mają inne obawy niż przy kostce czy elewacji, a jedna podstrona nie odpowie na wszystko."],
          ["Czy strona przyda się przy zleceniach od wspólnot i zarządców?", "Tak. Osobna podstrona z fakturą VAT, OC, terminami pracy i formularzem dla firm odpowiada na pytania, które zadaje zarządca, zanim poprosi o ofertę."],
          ["Czy sam mogę dodawać zdjęcia i zmieniać ceny?", "Tak. Galerię, ceny za m² i baner sezonowy zmieniasz w prostym panelu, także z telefonu."],
          ["Czy współpraca może być zdalna?", "Tak. Mam siedzibę w Warszawie, ale z firmami z innych województw wszystko załatwiamy online: zdjęcia i stawki wysyłasz mailem lub na WhatsApp, makiety oglądasz na telefonie."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę dla firmy mycia ciśnieniowego: co mi wysłać"),
        p(
          "Napisz, jak nazywa się firma, podeślij wizytówkę Google albo obecną stronę, wymień powierzchnie, które myjesz, opisz sposób wyceny i obszar działania oraz napisz, czy pracujesz dla wspólnot i firm. Pięć–sześć par zdjęć przed i po z telefonu pomoże mi zaprojektować pierwszy ekran wokół Twoich efektów. W odpowiedzi dostaniesz plan strony i cenę, która się nie zmieni. Pisz przez ",
          link("formularz powyżej", "#quote"),
          " albo na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
