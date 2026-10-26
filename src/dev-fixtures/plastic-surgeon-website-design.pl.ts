// Landing page fixture: Strona internetowa dla chirurga plastycznego (PL),
// group «plastic-surgeon-website-design». Design + development, one price.
// Market version for Polish plastic surgeons and kliniki chirurgii
// plastycznej, not a translation of the EN page.
// Semantic core: ref/medical-practices.md — PL has no phrases above the
// source’s floor; the slug phrase «strona internetowa dla chirurga
// plastycznego» and variants («strona kliniki chirurgii plastycznej», «strona
// www chirurga plastycznego») go into H1/H2. EN reference volumes: plastic
// surgeon website design 170, plastic surgery websites 140.
// Intent: ref/intent-check-medical-practices.md — EN «plastic surgeon website
// design» vs «seo for plastic surgeons»: 0 shared URLs → separate pages; PL
// «strona dla kliniki medycyny estetycznej» vs its SEO page: 0 shared → the
// same split holds in PL; medycyna estetyczna has its own design page.
// Polish angles: informacja, nie reklama (lekarze — general); kwalifikacje
// (specjalizacja, PWZ); zdjęcia przed i po — check with the izba lekarska;
// RODO and patient photos; pacjenci z zagranicy; cennik i raty; ZnanyLekarz.
// NOT on this page: ranking work, Google profile, reviews
// (/pl/pozycjonowanie-strony-chirurga-plastycznego); medycyna estetyczna
// (/pl/strona-internetowa-dla-kliniki-medycyny-estetycznej); general doctor
// sites (/pl/strona-internetowa-dla-lekarza).
// Main case: Giuseppe — calm design, advertising rules in the CMS, guard
// rails, analytics after consent, 44 working days, pages in ChatGPT. NDA
// medical system mentioned once. Owner’s rule: «AI can read» H2.
import { p, h2, li, ol, link, k } from "./pt";

export const plasticSurgeonWebsiteDesignPl = {
  lang: "pl",
  group: "plastic-surgeon-website-design",
  slug: "strona-internetowa-dla-chirurga-plastycznego",
  title: "Strona internetowa dla chirurga plastycznego",
  heading: "Strona internetowa dla chirurga plastycznego",
  excerpt:
    "Tworzę strony internetowe dla chirurgów plastycznych i klinik chirurgii plastycznej: profile chirurgów z rzetelnie zapisanymi kwalifikacjami, przejrzyste podstrony operacji, galerie oparte na zgodzie pacjentów, formularze konsultacji zgodne z RODO i wersje dla pacjentów z zagranicy.",
  seo: {
    metaTitle: "Strona www kliniki chirurgii plastycznej | Bandziuk",
    metaDescription:
      "Strona internetowa dla chirurga plastycznego: profile chirurgów, podstrony operacji, galeria za zgodą pacjentów, formularze zgodne z RODO, języki. Od 3000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt + wykonanie, jedna cena", "Od 3000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Poznaj chirurga", "Operacje i rekonwalescencja", "Konsultacja online", "Cennik i raty"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona internetowa dla chirurga plastycznego", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Strona kliniki chirurgii plastycznej z profilami chirurgów, podstronami operacji, galerią, bezpiecznym formularzem konsultacji i wersjami językowymi", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co dostajesz ze stroną internetową dla chirurga plastycznego",
      items: [
        { _key: k("o"), iconName: "shield-check", title: "Profile chirurgów z kwalifikacjami tekstem", text: "Specjalizacja, PWZ, szkolenia, towarzystwa" },
        { _key: k("o"), iconName: "layers", title: "Jeden układ dla każdej podstrony operacji", text: "Przebieg, znieczulenie, rekonwalescencja, cena" },
        { _key: k("o"), iconName: "image", title: "Galeria przed i po oparta na zgodzie", text: "Jeśli ją publikujecie — szybka i dyskretna" },
        { _key: k("o"), iconName: "message-circle", title: "Konsultacja online bez zdjęć w mailu", text: "Zdjęcia przez system z umową powierzenia" },
        { _key: k("o"), iconName: "map-pin", title: "Wersje dla pacjentów z zagranicy", text: "Angielski, niemiecki, przyjazd i opieka" },
        { _key: k("o"), iconName: "sparkles", title: "Czytelna dla Google i asystentów AI", text: "Chirurdzy, operacje i adresy tekstem" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona chirurga plastycznego", value: "3000–6000 zł", note: "projekt w cenie" },
        { _key: k("r"), label: "Klinika: chirurdzy, operacje, galeria, języki", value: "od 8500 zł", note: "projekt w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Wybrane realizacje: prywatna praktyka medyczna i strony premium",
      subtitle:
        "Strona prywatnej praktyki psychoterapeuty w Mediolanie: spokojny projekt dla osób w stresie i zasady informowania wbudowane w panel. Obok strony premium i wielojęzyczne z galeriami, wideo i katalogami — z takich elementów składa się strona kliniki chirurgii plastycznej.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "psychotherapist-website-milan",
        "renovation-and-investment-website-with-premium-design",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "architecture-website-rebuild-and-seo-scan",
        "full-multilingual-website-development-and-seo-for-student-services",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej dla chirurga plastycznego",
      subtitle: "W ciągu jednego dnia roboczego wyślę szkic strony głównej, profilu chirurga i podstrony operacji ze stałą ceną.",
      contextLabel: "Nazwa kliniki lub obecna strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Kogo dotyczy strona?", options: ["Jeden chirurg", "Kilku chirurgów", "Klinika z blokiem operacyjnym", "Chirurgia i medycyna estetyczna"] },
        { _key: k("z"), question: "Dla jakich pacjentów?", options: ["Z Polski", "Z Polski i z zagranicy", "Głównie z zagranicy"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Tworzę strony internetowe dla chirurgów plastycznych i klinik chirurgii plastycznej — projekt, wykonanie i uruchomienie — więc za wygląd i działanie strony odpowiada jedna osoba. Taka strona ma jedno zadanie: pomóc osobie, która rozważa operację, przekonać się, że ten chirurg jest właściwy, i umówić konsultację. Każdy element projektu oceniam właśnie pod tym kątem."),

        h2("Strona internetowa dla chirurga plastycznego: co pacjent sprawdza przed konsultacją"),
        p("Osoba, która wchodzi na stronę kliniki, ma konkretne wątpliwości: czy chirurg ma doświadczenie w tej operacji, czy efekty wyglądają naturalnie, ile potrwa zwolnienie, czy ją na to stać. Strona główna i menu odpowiadają na te pytania, a nie na strukturę organizacyjną kliniki:"),
        li("imię i nazwisko chirurga, specjalizacja i prawdziwe zdjęcie na pierwszym ekranie"),
        li("operacje pogrupowane: twarz, piersi, sylwetka, a chirurgia rekonstrukcyjna osobno"),
        li("cennik i informacja o ratach w zasięgu jednego kliknięcia"),
        li("przyciski konsultacji, telefonu i wiadomości przypięte na dole ekranu telefonu"),
        p("Styl jest dyskretny, nie błyszczący: zdjęcia chirurga, zespołu i sali, stonowana kolorystyka i czytelna typografia. Zdjęcia modelek z banku zdjęć zdradzają szablon i nic nie mówią o Waszej pracy."),
        p("Większość osób przegląda strony klinik na telefonie, często wieczorem i tak, żeby nikt nie zaglądał przez ramię. Dlatego pierwszy ekran nie zaczyna się od zdjęć ciała, teksty są krótkie i podzielone na sekcje, a menu prowadzi do operacji w dwóch dotknięciach. Ta sama dyskrecja dotyczy powiadomień i nazw wiadomości: potwierdzenie zgłoszenia nie zdradza w temacie, o jaką operację chodzi."),

        h2("Profil chirurga na stronie kliniki chirurgii plastycznej: kwalifikacje bez przesady"),
        p("Profil chirurga to podstrona, do której pacjent wraca przed konsultacją. Szablon zawiera pełne imię i nazwisko, numer prawa wykonywania zawodu, tytuł specjalisty albo etap specjalizacji, miejsce szkolenia i staże, towarzystwa naukowe pod ich pełnymi nazwami, operacje, które ten chirurg wykonuje, i przycisk konsultacji właśnie u niego. Krótki film albo kilka zdań o podejściu do pacjenta działa lepiej niż lista przymiotników."),
        p("Zgodnie z zasadą „informacja, nie reklama” profil podaje fakty, bez „najlepszego chirurga” i bez porównań z innymi. Loga towarzystw pojawiają się tylko tam, gdzie ich regulaminy na to pozwalają."),

        h2("Podstrona operacji na stronie chirurga plastycznego: jeden układ dla twarzy, piersi i sylwetki"),
        p("Każda podstrona operacji ma ten sam układ, więc pacjentka, która przeczytała o plastyce nosa, wie, gdzie szukać rekonwalescencji przy plastyce brzucha. Najpierw krótkie podsumowanie: co zmienia operacja, ile trwa, jakie znieczulenie, ile dni w klinice. Potem szczegóły: kwalifikacja, techniki, rekonwalescencja tydzień po tygodniu, możliwe powikłania, cena z linkiem do rat. Spis treści na górze pozwala przeskoczyć do potrzebnej części."),
        p("Pod tekstem jest chirurg, który go sprawdził, i data ostatniej weryfikacji. Podstrona kończy się zaproszeniem na konsultację, a nie obietnicą efektu."),

        h2("Galeria przed i po na stronie internetowej chirurga plastycznego: decyzja i projekt"),
        p("Zdjęcia przed i po bywają w Polsce oceniane jako reklama, więc decyzję o galerii warto skonsultować z okręgową izbą lekarską. Strona jest projektowana tak, żeby działała dobrze w obu wariantach. Jeśli galerii nie ma, jej miejsce zajmują opis przebiegu i rekonwalescencji, zdjęcia sali i zespołu oraz zaproszenie na konsultację, na której chirurg pokazuje przykłady."),
        p("Jeśli galeria jest, ma osobną część dla każdej operacji, przypadki pokazane parami w tym samym rozmiarze, informację przed zdjęciami z nagością i odsłanianie dopiero po dotknięciu. Zdjęcia ładują się w nowoczesnych formatach w miarę przewijania, a każdy przypadek da się usunąć jednym ruchem, gdy pacjent wycofa zgodę."),

        h2("Formularz konsultacji i zdjęcia od pacjenta: RODO na stronie kliniki chirurgii plastycznej"),
        p("Wiele klinik prosi o zdjęcia przed konsultacją online. Zdjęcie ciała dołączone do zwykłego formularza i wysłane mailem to dane o zdrowiu w miejscu, które do tego nie służy. Dlatego projektuję dwie oddzielne drogi:"),
        li("krótki formularz konsultacji: imię, telefon lub e-mail, operacja, preferowany termin — bez zdjęć i opisu dolegliwości"),
        li("zdjęcia i wywiad medyczny przez system gabinetowy albo dostawcę, z którym klinika ma umowę powierzenia przetwarzania danych"),
        li("klauzula informacyjna przy formularzu, a analityka i piksele wyłączone na stronach konsultacji"),
        p("Kilka lat temu pracowałem, w ramach NDA, przy systemie medycznym przechowującym dane pacjentów; nie mogę go nazwać, ale zostawił mi zasadę: strona zbiera jak najmniej. Ostateczną zgodność z RODO potwierdza Wasz inspektor ochrony danych."),

        h2("Strona kliniki chirurgii plastycznej dla pacjentów z zagranicy: wersje językowe i przyjazd"),
        p(
          "Pacjent z Londynu, Dublina czy Hamburga ogląda stronę inaczej niż pacjent z Polski. Potrzebuje działu „Operacja w Polsce” we własnym języku: jak wygląda konsultacja online, ile nocy zaplanować, gdzie mieszkać w czasie rekonwalescencji, jak dojechać z lotniska, kiedy kontrola i jak wygląda opieka po powrocie. Każda wersja językowa ma własne adresy i przetłumaczone podstrony operacji, a nie wtyczkę z automatycznym tłumaczeniem. Takie strony opisuję na stronie ",
          link("tworzenie stron wielojęzycznych", "/pl/oferty/tworzenie-stron-wielojezycznych"),
          "; platforma Cyprus VIP Estates, którą zbudowałem, działa w pięciu językach, w tym po hebrajsku.",
        ),

        h2("Cennik i raty na stronie internetowej chirurga plastycznego"),
        p("Cena to pytanie, które pacjenci wolą sprawdzić sami, zanim zadzwonią. Cennik w formie tekstu, z widełkami dla każdej operacji i jasną listą, co obejmuje — znieczulenie, pobyt, odzież uciskowa, kontrole — oraz podstrona o ratach z partnerami i linkiem do wniosku zmniejszają liczbę zapytań od osób, które nie mogą się zdecydować, i ułatwiają kontakt tym, które mogą. Na każdej podstronie operacji krótki blok z ceną prowadzi do obu."),

        h2("Zasady informowania wbudowane w panel strony: przykład prywatnej praktyki z Mediolanu"),
        p("Mój najmocniejszy przykład to prywatna praktyka medyczna z rygorystycznymi zasadami: Giuseppe, psycholog i psychoterapeuta z Mediolanu. Przebudowałem jego stronę na Next.js i Sanity, ze spokojnym projektem dla osób w lęku — ciemne tło przełamane jasnymi sekcjami i szeryfowy krój z prawdziwą kursywą. Gdy Giuseppe pisze tekst, panel wskazuje sformułowania, których zabrania artykuł 40 włoskiego kodeksu etyki psychologów: rabaty, cytowane opinie pacjentów, obiecywanie efektów i hasło „darmowa konsultacja”. Najważniejszych stron nie da się usunąć, opublikowane adresy są zablokowane, analityka działa dopiero po zgodzie, a instrukcja obsługi powstała po angielsku i po włosku. Od pierwszej linii kodu do przekazania minęły 44 dni robocze."),
        p("Na stronie chirurga plastycznego panel może tak samo oznaczać „gwarancję efektu”, „bezbolesny zabieg” czy promocje, zanim tekst trafi do sieci, a przypadek w galerii może wymagać daty zgody przed publikacją."),

        h2("Strona internetowa dla chirurga plastycznego, którą ChatGPT i przeglądy AI w Google potrafią przeczytać"),
        p(
          "Pacjenci pytają asystentów, który chirurg w ich mieście wykonuje rekonstrukcję piersi albo korektę nosa po wcześniejszej operacji. Asystent odpowiada na podstawie tekstu, który może przeczytać i sprawdzić, dlatego chirurdzy, kwalifikacje, operacje, adresy, języki i informacja o ratach stoją na stronie jako zwykły tekst i dane strukturalne, a ich treść pokrywa się z Mapami Google i profilem w ZnanyLekarz. Nowe podstrony Giuseppe już pojawiają się w odpowiedziach ChatGPT. O stałej pracy nad obecnością w odpowiedziach AI piszę na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          "; o miejscu w wynikach Google dla poszczególnych operacji — na stronie ",
          link("pozycjonowanie strony chirurga plastycznego", "/pl/pozycjonowanie-strony-chirurga-plastycznego"),
          ".",
        ),

        h2("Szablon, platforma abonamentowa czy strona kliniki chirurgii plastycznej od zera"),
        p(
          "Gotowe szablony i platformy abonamentowe dla lekarzy uruchamia się szybko i dla chirurga, który zaczyna własną praktykę, mogą wystarczyć. Ograniczenia widać przy kilku chirurgach, wielu operacjach, galerii, pacjentach z zagranicy i wersjach językowych. Strona zaprojektowana od zera należy do Was — kod, treści i domena. Kliniki, które łączą chirurgię z medycyną estetyczną, znajdą więcej na stronie ",
          link("strona internetowa dla kliniki medycyny estetycznej", "/pl/strona-internetowa-dla-kliniki-medycyny-estetycznej"),
          ", a inne specjalności — na stronie ",
          link("strona internetowa dla lekarza", "/pl/strona-internetowa-dla-lekarza"),
          ".",
        ),

        h2("Jak powstaje strona internetowa dla chirurga plastycznego"),
        ol("Brief. Przesyłacie listę chirurgów i operacji, cennik, informację o galerii i zgodach oraz narzędzia, w których przyjmujecie zgłoszenia."),
        ol("Ścieżki pacjenta. Na ekranie telefonu uzgadniamy trzy: przeczytać o operacji, sprawdzić chirurga, umówić konsultację."),
        ol("Projekt. Strona główna, profil chirurga, podstrona operacji i cennik dostają pełny projekt; kolejne podstrony powstają z tych samych elementów."),
        ol("Wykonanie i uruchomienie. Testuję formularze, dostępność i szybkość, a przy przebudowie przekierowuję każdy stary adres."),
        p(
          "Przebudowę istniejącej strony opisuję na stronie ",
          link("przebudowa strony internetowej", "/pl/oferty/przebudowa-strony-internetowej"),
          ", ogólną usługę — na stronie ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ".",
        ),

        h2("Ile kosztuje strona internetowa dla chirurga plastycznego"),
        li("Prosta strona chirurga — strona główna, chirurg, najważniejsze operacje, cennik, kontakt: od 3000 do 6000 zł."),
        li("Strona kliniki chirurgii plastycznej z profilami chirurgów, podstronami operacji, galerią, bezpiecznym formularzem konsultacji i wersjami językowymi: od 8500 zł."),
        p(
          "W obu wariantach projekt graficzny wliczam w cenę; wszystkie widełki zebrałem w ",
          link("cenniku", "/pl/cennik"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strona internetowa dla chirurga plastycznego: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona internetowa dla chirurga plastycznego?", "Od 3000 do 6000 zł za prostą stronę chirurga, od 8500 zł za stronę kliniki z kilkoma chirurgami, podstronami operacji, galerią i wersjami językowymi. Projekt jest w cenie, a stałą kwotę podaję po krótkim briefie."],
          ["Ile trwa stworzenie strony kliniki chirurgii plastycznej?", "Zwykle od pięciu do ośmiu tygodni, zależnie od liczby operacji, języków i tempa, w jakim gotowe są zdjęcia i zatwierdzone teksty. Strona Giuseppe w Mediolanie, z migracją setek artykułów, powstała w 44 dni robocze."],
          ["Czy na stronie musi być galeria przed i po?", "Nie. Projekt działa także bez galerii, z opisem przebiegu i rekonwalescencji oraz zdjęciami zespołu i sali. O publikacji zdjęć efektów warto porozmawiać z okręgową izbą lekarską."],
          ["Jak pacjent może bezpiecznie przesłać zdjęcia do konsultacji online?", "Przez system gabinetowy albo dostawcę, z którym klinika ma umowę powierzenia danych — nie przez zwykły formularz ani e-mail. Krótki formularz zgłoszenia nie zbiera zdjęć ani informacji o zdrowiu."],
          ["Czy sami możemy dodawać operacje, ceny i przypadki?", "Tak. Operacje, cennik, profile chirurgów i galerię edytuje się w prostym panelu, a układ zostaje spójny. Najważniejszych stron nie da się przypadkiem usunąć."],
          ["Czy przebudowa strony nie zaszkodzi pozycjom w Google?", "Nie, jeśli każdy stary adres dostaje przekierowanie na nową podstronę. U Giuseppe przeniosłem w ten sposób wszystkie 468 artykułów."],
          ["Czy współpracujesz z klinikami spoza Warszawy?", "Tak. Projekt i wykonanie robię zdalnie dla klinik z całej Polski: rozmowy wideo, wspólne dokumenty i akceptacja każdego etapu."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową dla chirurga plastycznego: co mi wysłać"),
        p(
          "Potrzebuję nazwy kliniki, linku do obecnej strony albo profilu w ZnanyLekarz, listy chirurgów i operacji, cennika, informacji, czy chcecie galerię, i języków, w których przyjmujecie pacjentów. Kilka zdjęć chirurga i sali pozwoli mi pokazać pierwszy ekran, który wygląda jak Wasza klinika. W odpowiedzi dostaniecie szkic i stałą cenę. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
