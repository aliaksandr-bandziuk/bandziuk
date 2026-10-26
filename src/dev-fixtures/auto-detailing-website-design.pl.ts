// Landing page fixture: Strona internetowa dla studia detailingu (PL), group
// «auto-detailing-website-design». New page.
// Market version for Polish detailing studios and mobile detailers (JDG and
// small teams); not a translation of the EN page.
// Semantic core: ref/creative-leisure.md has no measured PL phrases for this
// niche (PL «On topic» lists only personal trainers). Headings use the slug
// phrase «strona internetowa dla studia detailingu» (brief) and the words
// Polish customers use: detailing, pranie tapicerki, korekta lakieru, powłoka
// ceramiczna, folia PPF, przygotowanie auta do sprzedaży, detailing mobilny.
// Intent: ref/intent-check-creative-leisure.md — EN «auto detailing website»
// = supply stores, «auto detailing website design» = studios and builders
// (0 shared URLs) → this page targets the owner who wants a site. No PL SERP
// check for this pair.
// Polish context: Booksy and Instagram/Facebook as booking channels, Otomoto
// and OLX sellers preparing cars for sale, zadatek vs zaliczka (Kodeks
// cywilny, general terms only), faktura VAT for company and leased cars,
// Profil Firmy w Google, BLIK and card payments.
// Prices: /pl/cennik — prosta strona 3000–6000 zł, pełna od 8500 zł, projekt w
// cenie.
// NOT on this page: pozycjonowanie wypożyczalni
// (/pl/pozycjonowanie-wypozyczalni-samochodow), strona komisu
// (/pl/strona-internetowa-dla-komisu-samochodowego), pozycjonowanie
// warsztatu (/pl/oferty/pozycjonowanie-strony-warsztatu-samochodowego-warszawa
// — neighbour, linked once), sklepy z kosmetykami samochodowymi.
// Owner’s rules: never say there are no clients from the visitor’s segment;
// every page covers AI search.
import { p, h2, h3, li, ol, link, k } from "./pt";

export const autoDetailingWebsiteDesignPl = {
  lang: "pl",
  group: "auto-detailing-website-design",
  slug: "strona-internetowa-dla-studia-detailingu",
  title: "Strona internetowa dla studia detailingu",
  heading: "Strona internetowa dla studia detailingu",
  excerpt:
    "Strona internetowa dla studia detailingu, zaprojektowana i zbudowana przez jedną osobę: pakiety od prania tapicerki po powłokę ceramiczną i folię PPF, zdjęcia przed i po, cennik według wielkości auta i rezerwacja terminu z zadatkiem, bez wymiany dziesięciu wiadomości.",
  seo: {
    metaTitle: "Strona dla studia detailingu i auto detailingu | Bandziuk",
    metaDescription:
      "Strona dla studia detailingu: pakiety od prania tapicerki po ceramikę i PPF, galerie przed i po, detailing mobilny, rezerwacja z zadatkiem. Od 3000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt + wykonanie, jedna cena", "Od 3000 zł", "Dla studiów i detailingu mobilnego"],
  heroPhonePoints: ["Zarezerwuj termin", "Tapicerka · Ceramika · PPF", "Zdjęcia przed i po", "Faktura VAT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona internetowa dla studia detailingu, projekt w cenie", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Strona studia detailingu z podstronami pakietów, galeriami przed i po, rezerwacją z zadatkiem i pozycjonowaniem lokalnym na start, projekt w cenie", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co dostajesz ze stroną internetową dla studia detailingu",
      items: [
        { _key: k("o"), iconName: "layers", title: "Pakiety od prania tapicerki po folię PPF", text: "Zakres, czas pracy, cena według wielkości auta" },
        { _key: k("o"), iconName: "image", title: "Galerie przed i po, które szybko się ładują", text: "To samo auto, ten sam kadr, podpis z pakietem" },
        { _key: k("o"), iconName: "file-text", title: "Przygotowanie auta do sprzedaży", text: "Dla sprzedających na Otomoto i OLX" },
        { _key: k("o"), iconName: "plug", title: "Rezerwacja terminu z zadatkiem", text: "Booksy albo kalendarz na stronie, zasady tekstem" },
        { _key: k("o"), iconName: "shield-check", title: "Gwarancja powłok i opinie z Google", text: "Marka produktu, warunki gwarancji, faktura VAT" },
        { _key: k("o"), iconName: "sparkles", title: "Pakiety i ceny czytelne dla ChatGPT", text: "Tekst i dane strukturalne zamiast grafik z cennikiem" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona studia detailingu", value: "3000–6000 zł", note: "projekt w cenie" },
        { _key: k("r"), label: "Podstrony pakietów, galerie, rezerwacja z zadatkiem, SEO lokalne", value: "od 8500 zł", note: "projekt w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Strony warszawskich firm motoryzacyjnych i usług premium, które zbudowałem",
      subtitle:
        "Felgilab, warszawska pracownia renowacji felg, dostała przebudowaną stronę na WordPressie z podstronami usług i cennikami — taki sam układ potrzebny jest studiu detailingu. Warsztat samochodowy dostał pozycjonowanie lokalne, pracę nad Mapami Google i podstrony usług, a przechowalnia opon — stronę, której teksty SEO właściciel zmienia sam. Strona firmy remontowo-inwestycyjnej pokazuje, jak projekt premium sprzedaje drogą usługę, a ScanM2, firma skanowania laserowego 3D, po przebudowie na WordPressie z zachowanym projektem przyciąga z wyszukiwarki 29 razy więcej odwiedzin niż wcześniej i co tydzień dostaje zapytania. Studio detailingu potrzebuje tych samych elementów: widocznych efektów, jasnych pakietów z cenami i krótkiej drogi do rezerwacji.",
      picks: [
        "felgilab-wordpress-rebuild",
        "auto-repair-seo-and-ux-boost",
        "tyre-storage-landing-page-with-editable-seo",
        "renovation-and-investment-website-with-premium-design",
        "architecture-website-rebuild-and-seo-scan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej dla studia detailingu",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: proponuję listę podstron z pakietami i rezerwacją oraz podaję stałą cenę.",
      contextLabel: "Nazwa studia, Instagram, wizytówka Google lub obecna strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Jak klienci umawiają się dziś na termin?", options: ["Telefon i SMS", "Wiadomości na Instagramie i Messengerze", "Booksy", "Przyjeżdżają do studia bez zapowiedzi"] },
        { _key: k("z"), question: "Gdzie pracujesz?", options: ["Tylko w studiu", "Tylko u klienta", "W studiu i z dojazdem"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Strona internetowa dla studia detailingu to projekt, który robię od początku do końca sam: układ, grafikę, teksty i uruchomienie. Rozmawiasz z jedną osobą i znasz cenę przed startem. W Polsce detailing wciąż bywa mylony z myjnią ręczną: klient zestawia mycie za kilkadziesiąt złotych z ceramiką za kilka tysięcy i nie wie, za co płaci różnicę. Strona ma to wytłumaczyć, pokazać efekty na autach z Twojego miasta i doprowadzić do rezerwacji, zanim klient pojedzie do myjni obok."),

        h2("Strona internetowa dla studia detailingu: co ma załatwić, zanim klient zadzwoni"),
        p("Klienci studiów piszą głównie na Messengerze i Instagramie, a odpowiedź „cena zależy od stanu auta” rzadko kończy się rezerwacją. Strona przejmuje pytania, które padają codziennie:"),
        li("ile trwa pranie tapicerki i kiedy fotele wyschną"),
        li("czy przed korektą lakieru trzeba umyć auto i czy można zostawić je na noc"),
        li("ile kosztuje ceramika na SUV-a, a ile na małe auto miejskie"),
        li("czy wystawiasz fakturę VAT na firmę i auto w leasingu"),
        p("Klient, który zna odpowiedzi, pisze już z konkretnym pakietem i terminem."),

        h2("Pakiety detailingu na stronie: pranie tapicerki, korekta lakieru, powłoka ceramiczna, folia PPF"),
        p("Nazwy pakietów bywają marketingowe — „Gold”, „Premium”, „Full Detail” — i klient nie wie, co dostanie. Na stronie każdy pakiet ma obok nazwy listę czynności, czas pracy i cenę „od”:"),
        li("detailing wnętrza: odkurzanie, pranie tapicerki i dywaników, czyszczenie i impregnacja skóry, usuwanie sierści i zapachów"),
        li("mycie detailingowe: mycie ręczne, dekontaminacja, glinkowanie, felgi i opony, wosk lub sealant"),
        li("korekta lakieru: jedno- lub wieloetapowa, usuwanie hologramów i rys, zwykle przed powłoką"),
        li("powłoka ceramiczna: przygotowanie lakieru, aplikacja, czas utwardzania, zasady mycia po odbiorze"),
        li("folia ochronna PPF: przód auta, strefy narażone na odpryski albo całe nadwozie, z nazwą folii, którą montujesz"),
        h3("Powłoka ceramiczna i folia PPF: osobne podstrony z gwarancją"),
        p("Nad ceramiką i folią klient myśli tygodniami i porównuje kilka studiów. Podstrona powłoki ceramicznej mówi, na ile lat producent deklaruje trwałość, na czym polega korekta przed aplikacją, ile dni auto stoi w studiu i jak je myć, żeby nie stracić gwarancji. Podstrona PPF pokazuje zakres oklejenia na schemacie auta, nazwę folii i warunki gwarancji na montaż. Warto też odpowiedzieć na pytanie, które w Polsce pada często: czy folię da się zdjąć bez śladu przed sprzedażą auta."),
        h3("Cennik studia detailingu według wielkości i stanu auta"),
        p("Cennik dzieli auta na klasy, które klient rozpoznaje bez zastanowienia: miejskie (Yaris, Fabia), kompakt i kombi (Golf, Octavia), SUV, van i bus. Przy praniu tapicerki liczy się też liczba miejsc i materiał foteli, przy korekcie — stan lakieru, który oceniasz na miejscu. Dlatego cena jest „od”, a obok stoi informacja, że ostateczną kwotę potwierdzasz po obejrzeniu auta albo zdjęć przesłanych przez klienta."),

        h2("Zdjęcia przed i po na stronie studia detailingu"),
        p("Galeria na stronie konkuruje z Twoim Instagramem, więc musi dać coś, czego profil nie ma: porządek. Realizacje są pogrupowane według usługi i typu auta, każda ma podpis z modelem, rocznikiem i zakresem prac, a zdjęcia przed i po są robione z tego samego miejsca. Przy korekcie lakieru najlepiej działa ujęcie w świetle lampy inspekcyjnej, przy praniu — fotel wyprany do połowy."),
        p("Nowe realizacje dodajesz z telefonu zaraz po odbiorze auta, a strona sama zmniejsza pliki i zapisuje je w lekkim formacie. Dzięki temu nawet długa galeria otwiera się szybko na komórce, a najlepsze pary pojawiają się jednocześnie na podstronie pakietu, obok ceny."),

        h2("Przygotowanie auta do sprzedaży i detailing aut firmowych: podstrony dla Otomoto, OLX i flot"),
        p("Sporą grupę klientów studia stanowią ludzie, którzy za tydzień wystawiają auto na Otomoto albo OLX. Nie szukają powłoki na lata, tylko pakietu, po którym zdjęcia w ogłoszeniu będą wyglądać dobrze, a kupujący nie poczuje papierosów w kabinie. Osobna podstrona opisuje taki pakiet: wnętrze, szybka korekta, czyszczenie komory silnika, ewentualnie zdjęcia do ogłoszenia, jeśli je robisz. Ta sama strona przyda się komisom, które przygotowują kilka aut miesięcznie i pytają o stałą stawkę."),
        p("Podobnie z firmami. Właściciel floty albo osoba z autem w leasingu chce wiedzieć, czy dostanie fakturę VAT, czy możesz odebrać auto spod biura i czy pakiet przed zwrotem samochodu do leasingodawcy obejmuje usunięcie drobnych rys. Kilka zdań na ten temat przyciąga zlecenia, które wracają co kwartał."),

        h2("Detailing mobilny: obszar dojazdu i warunki pracy u klienta"),
        p("Detailing mobilny to zwykle bus z agregatem i zbiornikiem wody, który obsługuje miasto i okoliczne gminy. Strona wymienia je z nazwy — na przykład Piaseczno, Konstancin, Marki i Ząbki pod Warszawą — i podaje dopłatę za dojazd poza strefę. Formularz zaczyna od miejscowości, więc klient z dalszej gminy od razu widzi, czy i za ile przyjedziesz."),
        p("Obok jest krótka lista wymagań: miejsce na zaparkowanie busa, dostęp do prądu i wody, jeśli są potrzebne, możliwość pracy w hali garażowej bloku albo na parkingu firmy. Mieszkańcy osiedli często nie wiedzą, czy zarządca pozwala na pranie tapicerki w garażu, więc warto napisać, jak to wygląda u Ciebie."),

        h2("Rezerwacja i zadatek na stronie studia detailingu"),
        p("Klient, który nie przyjechał na umówioną ceramikę, zostawia puste stanowisko na kilka dni. Dlatego przy długich usługach rezerwacja kończy się wpłatą:"),
        ol("Klient wybiera usługę i klasę auta, a strona podaje cenę „od” i czas pracy."),
        ol("Zaznacza dodatki: ozonowanie, renowację reflektorów, czyszczenie komory silnika."),
        ol("Wybiera termin; przy ceramice i folii kalendarz sam rezerwuje kilka dni stanowiska."),
        ol("Płaci zadatek BLIK-iem lub kartą przez bramkę płatności i dostaje potwierdzenie z adresem studia, godziną oddania auta i zasadami odwołania."),
        p("Jeśli korzystasz z Booksy, kalendarz zostaje i jest osadzony na stronie w Twoich kolorach. Warto rozróżnić zadatek i zaliczkę: według Kodeksu cywilnego zadatek przy rezygnacji klienta zwykle przepada, a zaliczka podlega zwrotowi. Na stronie słowo musi pasować do Twoich zasad; to ogólna informacja, nie porada prawna."),

        h2("Booksy, Instagram czy własna strona studia detailingu"),
        p("Instagram świetnie pokazuje efekty, a Booksy przyjmuje rezerwacje. Oba mają jednak ograniczenia. Profil na Instagramie nie odpowiada w Google na „powłoka ceramiczna Wrocław”, a na Booksy Twój profil stoi obok innych studiów z okolicy. Własna strona zbiera ruch z wyszukiwarki dla każdego pakietu osobno, ma Twoją domenę i nie znika, gdy zmienisz system rezerwacji."),
        p("Nie trzeba z niczego rezygnować. Galeria może pokazywać najnowsze posty z Instagrama, a przycisk rezerwacji prowadzi do Booksy albo do kalendarza na stronie. Strona jest miejscem, które łączy te kanały i w którym jest pełny cennik."),

        h2("Pozycjonowanie lokalne studia detailingu w Mapach Google"),
        p("Kierowcy szukają usługi z nazwą miasta: „detailing Poznań”, „pranie tapicerki samochodowej Gdańsk”, „folia PPF Kraków”, a w dużych miastach także z dzielnicą, np. „detailing Mokotów”. W Mapach Google liczy się wizytówka z właściwą kategorią, usługami nazwanymi tak samo jak na stronie, świeżymi zdjęciami realizacji i opiniami, w których klienci piszą, co zrobiono z ich autem. Detailing mobilny prowadzi wizytówkę jako firma z obszarem obsługi, bez publicznego adresu."),
        p(
          "Podstawowa konfiguracja jest częścią pełnej strony. Stałą pracę opisuję na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ". Jeśli prowadzisz też warsztat, zajrzyj na stronę ",
          link("pozycjonowanie warsztatu samochodowego", "/pl/oferty/pozycjonowanie-strony-warsztatu-samochodowego-warszawa"),
          ".",
        ),

        h2("Strona studia detailingu, którą ChatGPT i Google AI Overviews potrafią przeczytać"),
        p("Kierowcy pytają ChatGPT albo podsumowania AI w Google, czy ceramika ma sens w nowym aucie, ile wytrzymuje folia PPF i kto w okolicy robi korektę lakieru. Asystent poleca firmy, o których znajdzie konkretne informacje w kilku miejscach. Studio, którego cennik to zdjęcie kartki wrzucone na Instagram, dla niego nie istnieje. Pakiety, ceny „od”, czas pracy, miejscowości dojazdu i marki powłok zapisane zwykłym tekstem, razem z danymi strukturalnymi firmy, asystent może przeczytać i powtórzyć."),
        p(
          "Regularne wzmianki w odpowiedziach asystentów to osobne zadanie, opisane na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Jak powstaje strona internetowa dla studia detailingu"),
        ol("Brief. Przesyłasz pakiety, orientacyjne ceny według klas aut, miejscowości dojazdu i link do Booksy, jeśli z niego korzystasz."),
        ol("Projekt. Najpierw powstaje wersja na telefon — pierwszy ekran, cennik i rezerwacja — a potem wersja na komputer."),
        ol("Wykonanie. W panelu sam zmieniasz ceny, dodajesz pakiety i realizacje."),
        ol("Uruchomienie. Podpinam rezerwację, płatność zadatku, analitykę i wizytówkę Google; dostajesz krótką instrukcję."),
        p(
          "Mój sposób pracy nad stronami opisuję szerzej na stronie ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ".",
        ),

        h2("Ile kosztuje strona internetowa dla studia detailingu"),
        p("Cena obejmuje projekt graficzny i wykonanie:"),
        li("Prosta strona — strona główna, pakiety z cenami „od”, galeria, o studiu, kontakt i link do rezerwacji: od 3000 do 6000 zł."),
        li("Pełna strona z podstronami pakietów, galeriami przed i po, podstroną przygotowania auta do sprzedaży, rezerwacją z zadatkiem i pozycjonowaniem lokalnym na start: od 8500 zł."),
        p(
          "Po uruchomieniu płacisz za hosting i domenę, a mnie tylko za zmiany, o które poprosisz. Widełki są w ",
          link("cenniku", "/pl/cennik"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strona internetowa dla studia detailingu: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona internetowa dla studia detailingu?", "Prosta strona studia kosztuje od 3000 do 6000 zł. Wersja z podstronami pakietów, galeriami przed i po, rezerwacją z zadatkiem i pozycjonowaniem lokalnym na start zaczyna się od 8500 zł. Projekt graficzny jest wliczony, a stałą kwotę podaję, gdy poznam Twoje pakiety i sposób pracy."],
          ["Czy mogę zostać przy Booksy?", "Tak. Booksy zostaje: osadzam kalendarz na stronie albo prowadzę do niego przyciskiem „Zarezerwuj”. Stali klienci dalej umawiają się w aplikacji, a nowi trafiają z Google na stronę z pełnym cennikiem i galerią."],
          ["Czy podawać ceny detailingu na stronie?", "Tak. Ceny „od” dla każdej klasy auta odsiewają osoby, które szukają myjni, a pozostałym oszczędzają wiadomości „ile za SUV-a?”. Ostateczną kwotę potwierdzasz po obejrzeniu auta."],
          ["Zadatek czy zaliczka przy rezerwacji powłoki ceramicznej?", "To zależy od Twoich zasad. Zadatek przy rezygnacji klienta zwykle przepada, zaliczka jest zwracana. Strona używa słowa, które pasuje do regulaminu, i pokazuje zasady przed płatnością."],
          ["Czy sam dodam nowe zdjęcia przed i po?", "Tak. Panel działa w przeglądarce telefonu: po odbiorze auta wrzucasz zdjęcia, wybierasz pakiet i wpisujesz model, a strona sama zmniejsza pliki."],
          ["Czy strona pomoże mi pojawić się w Mapach Google?", "Strona daje Google podstrony usług, listę miejscowości i dane strukturalne. Na pozycję w Mapach wpływa też sama wizytówka: kategorie, zdjęcia i opinie. Ustawiam ją przy starcie strony, a stałą pracę nad nią wyceniam osobno."],
          ["Czy współpraca może być zdalna, jeśli studio jest poza Warszawą?", "Tak. Studia z Krakowa, Poznania czy Rzeszowa obsługuję tak samo jak warszawskie: zdjęcia i cennik przesyłasz w wiadomości, rozmawiamy przez telefon lub wideo, a projekt oglądasz na swoim telefonie."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową dla studia detailingu: co mi wysłać"),
        p(
          "Wyślij nazwę studia, link do Instagrama, wizytówki Google lub obecnej strony, listę pakietów z orientacyjnymi cenami, informację, czy pracujesz w studiu, u klienta, czy w obu miejscach, i system rezerwacji, z którego korzystasz. Kilka zdjęć przed i po pokaże mi, jak dużej galerii potrzebujesz. W odpowiedzi dostaniesz propozycję listy podstron i stałą cenę. Skorzystaj z ",
          link("formularza powyżej", "#quote"),
          " albo napisz na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
