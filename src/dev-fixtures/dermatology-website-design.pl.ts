// Landing page fixture: Strona internetowa dla gabinetu dermatologicznego (PL),
// group «dermatology-website-design». New page. Market version for Polish
// private (prywatne) gabinety i kliniki dermatologiczne that treat skin
// disease and run dermatologia estetyczna — not a translation of
// dermatology-website-design.en.
// Semantic core: ref/batch-h2.md has no measurable PL dermatology phrases;
// heading phrases from BRIEF.md: «strona internetowa dla gabinetu
// dermatologicznego» (H1, H2, cost H2, FAQ), «strona gabinetu
// dermatologicznego», «strona dermatologa» (H2), «dermatolog prywatnie»
// (price H2), «dermatologia estetyczna» (H2), ZnanyLekarz as a booking channel
// the site complements (booking H2, FAQ), «strona www gabinetu
// dermatologicznego» (metaTitle).
// Intent: ref/intent-check-batch-h.md — EN «dermatology website design» vs
// «medical website design» and vs «med spa website design» 0 shared URLs →
// own page in every language.
// Polish angles: two paths (leczenie / dermatologia estetyczna); list of page
// types; condition template with lekarz sprawdzający and data weryfikacji as
// required fields; booking by rodzaj wizyty with ZnanyLekarz or own system;
// private price list in two parts, NFZ only as a short note (skierowanie);
// zadatek online via Stripe Checkout (BLIK, Przelewy24 — Stripe’s own
// methods, not claimed for Landi Room); exact titles (specjalista dermatologii
// i wenerologii, lekarz w trakcie specjalizacji, kosmetolog, numer PWZ);
// clinical images on tap, metamorfozy with consent date; skin photos never
// through the site (RODO, umowa powierzenia — general); WCAG and skin tones;
// AI-readable build (Giuseppe proof).
// NOT on this page: ranking, wizytówka Google, opinie, badanie znamion as SEO
// content (/pl/pozycjonowanie-strony-gabinetu-dermatologicznego — linked);
// general doctor sites and the «informacja, nie reklama» rule in detail
// (/pl/strona-internetowa-dla-lekarza — linked); aesthetic clinic as its own
// brand (/pl/strona-internetowa-dla-kliniki-medycyny-estetycznej — linked).
// Prices: /pl/cennik — 3000–6000 zł, od 8500 zł, projekt w cenie. Owner’s
// rules: every page covers AI search; never say there are no clients from the
// visitor’s segment; no personal visits promised; «faktura» only.
import { p, h2, li, link, k } from "./pt";

export const dermatologyWebsiteDesignPl = {
  lang: "pl",
  group: "dermatology-website-design",
  slug: "strona-internetowa-dla-gabinetu-dermatologicznego",
  title: "Strona internetowa dla gabinetu dermatologicznego",
  heading: "Strona internetowa dla gabinetu dermatologicznego",
  excerpt:
    "Tworzę strony internetowe dla prywatnych gabinetów dermatologicznych: osobne ścieżki dla leczenia chorób skóry i dermatologii estetycznej, podstrony chorób sprawdzone przez lekarza, zapisy według rodzaju wizyty, także przez ZnanyLekarz, i zdjęcia zmian skórnych przesyłane poza stroną — projekt w cenie.",
  seo: {
    metaTitle: "Strona www gabinetu dermatologicznego od 3000 zł | Bandziuk",
    metaDescription:
      "Strona dla gabinetu dermatologicznego: leczenie i dermatologia estetyczna osobno, zapisy według rodzaju wizyty, ZnanyLekarz, zgodność z RODO. Od 3000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt + wykonanie, jedna cena", "Od 3000 zł", "Leczenie i estetyka osobno"],
  heroPhonePoints: ["Badanie znamion", "Dermatolog prywatnie", "Konsultacja estetyczna", "Zapis przez ZnanyLekarz"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona internetowa dla gabinetu dermatologicznego, projekt w cenie", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Strona gabinetu dermatologicznego z częścią leczniczą i estetyczną, wzorami podstron chorób z lekarzem sprawdzającym, zapisami według rodzaju wizyty, profilami zespołu, metamorfozami i odnośnikami do teleporady, projekt w cenie", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajecie",
      title: "Co obejmuje strona internetowa dla gabinetu dermatologicznego",
      items: [
        { _key: k("o"), iconName: "layers", title: "Dwie ścieżki od pierwszego ekranu", text: "Choroby skóry i znamiona osobno, estetyka osobno" },
        { _key: k("o"), iconName: "file-text", title: "Podstrony chorób z lekarzem sprawdzającym", text: "Bez nazwiska i daty weryfikacji nie wyjdą do sieci" },
        { _key: k("o"), iconName: "plug", title: "Zapis według rodzaju wizyty", text: "Własny system albo kalendarz w ZnanyLekarz" },
        { _key: k("o"), iconName: "users", title: "Kto przyjmuje z jakim problemem", text: "Specjaliści, rezydenci, kosmetolodzy — tytuły dokładnie" },
        { _key: k("o"), iconName: "image", title: "Zdjęcia kliniczne i metamorfozy za zgodą", text: "Pokazywane po dotknięciu, podpisy bez obietnic" },
        { _key: k("o"), iconName: "sparkles", title: "Zrozumiała dla Google i ChatGPT", text: "Choroby, lekarze, ceny i godziny zapisane tekstem" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona gabinetu dermatologicznego", value: "3000–6000 zł", note: "projekt w cenie" },
        { _key: k("r"), label: "Leczenie i estetyka, zapisy, zespół, metamorfozy", value: "od 8500 zł", note: "projekt w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: strony, które zaprojektowałem i zbudowałem dla usług opartych na zaufaniu",
      subtitle:
        "Giuseppe, psychoterapeuta z Mediolanu, prowadzi prywatną praktykę, do której pacjent zapisuje się dopiero wtedy, gdy zaufa: przebudowałem jego stronę na Next.js i Sanity, w spokojnym stylu, po włosku i angielsku, z danymi strukturalnymi, a jego nowe podstrony cytuje już ChatGPT. Warszawski salon kosmetyczny sprzedaje kurs online ze strony, którą zbudowałem ze Stripe Checkout — tą samą bramką gabinet pobierze zadatek za konsultację estetyczną. Moja własna strona działa w trzech językach z danymi schema.org i hreflang, 153-stronicowy serwis konsultantki od analityki handlu jest pisany tak, by cytowali go asystenci AI, a warszawska firma remontowo-inwestycyjna ma wygląd premium, z którego może czerpać część estetyczna.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "psychotherapist-website-milan",
        "e-commerce-landing-page-with-secured-video-access",
        "develop-and-optimize-a-personal-website-with-seo",
        "consultant-website-design-retail-analytics",
        "renovation-and-investment-website-with-premium-design",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej dla gabinetu dermatologicznego",
      subtitle: "W ciągu jednego dnia roboczego wyślę propozycję podstron dla części leczniczej i estetycznej oraz stałą cenę. Danych pacjentów proszę nie wpisywać.",
      contextLabel: "Nazwa gabinetu lub obecna strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Co obejmuje Wasz gabinet?", options: ["Tylko dermatologię leczniczą", "Leczenie i dermatologię estetyczną", "Także zabiegi chirurgii dermatologicznej", "Głównie zabiegi estetyczne"] },
        { _key: k("z"), question: "Jak pacjenci zapisują się teraz?", options: ["Telefonicznie", "Przez ZnanyLekarz", "Przez system gabinetowy online", "Różnie"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Strona internetowa dla gabinetu dermatologicznego to usługa, którą wykonuję sam od początku do końca: lista podstron, projekt graficzny, wykonanie i uruchomienie, z ceną znaną przed startem. Robię ją dla prywatnych gabinetów i klinik, które leczą choroby skóry i wykonują zabiegi dermatologii estetycznej. Na taką stronę wchodzą dwie bardzo różne osoby: pacjentka zaniepokojona znamieniem, które się zmieniło, i ktoś, kto porównuje ceny laseroterapii. Strona ma obsłużyć obie, nie mieszając ich spraw."),

        h2("Strona internetowa dla gabinetu dermatologicznego: osobne ścieżki dla leczenia skóry i dermatologii estetycznej"),
        p("Na stronie głównej pacjent najpierw wybiera, z czym przychodzi: „Choroby skóry i znamiona” albo „Dermatologia estetyczna”. Za każdym wyborem stoi osobne menu, osobny układ podstron i osobny przycisk zapisu, choć gabinet, zespół, adres i system rejestracji są te same."),
        p("Podział widać też niżej:"),
        li("część lecznicza ma oszczędny układ, rzeczowe opisy i przycisk z nazwą wizyty, na przykład „Umów badanie znamion”"),
        li("część estetyczna może mieć więcej zdjęć zespołu i gabinetu oraz widełki cen, ale korzysta z tych samych krojów pisma i siatki"),
        li("pakiety i promocje zabiegów nie pojawiają się na podstronach chorób"),
        li("odnośniki między częściami ustawiam ręcznie i tylko tam, gdzie kolejne pytanie pacjenta naprawdę dotyczy drugiej strony"),
        p(
          "Jeśli zabiegi estetyczne prowadzicie jako osobną markę z karnetami i własną rezerwacją, to inny projekt, opisany na stronie ",
          link("strona internetowa dla kliniki medycyny estetycznej", "/pl/strona-internetowa-dla-kliniki-medycyny-estetycznej"),
          ".",
        ),

        h2("Lista podstron na stronie gabinetu dermatologicznego: choroby skóry, znamiona, zabiegi, dzieci i estetyka"),
        p("Zanim powstanie projekt, uzgadniamy listę podstron — z tego, co gabinet robi i czego chce robić więcej. Typowa strona dermatologa składa się z kilku rodzajów podstron, a każdy ma swój wzór:"),
        li("choroby skóry: trądzik, AZS, łuszczyca, brodawki wirusowe, łysienie i inne, z którymi przychodzi najwięcej osób"),
        li("badanie znamion — dermatoskopia, a także wideodermatoskopia, jeśli ją wykonujecie"),
        li("zabiegi lecznicze, takie jak usuwanie zmian skórnych czy krioterapia, z wyjaśnieniem, kiedy najpierw potrzebna jest konsultacja"),
        li("dermatologia dziecięca, jeśli przyjmujecie dzieci, z podanym wiekiem"),
        li("zabiegi estetyczne — tylko te lasery, peelingi i zabiegi iniekcyjne, które naprawdę wykonujecie"),
        li("profile zespołu, cennik, dojazd i strona „Pierwsza wizyta”"),
        p(
          "Mały gabinet zaczyna od kilku podstron każdego rodzaju i dokłada kolejne bez nowego projektu. Jak sprawić, żeby pojawiały się wysoko w Google, opisuję na stronie ",
          link("pozycjonowanie strony gabinetu dermatologicznego", "/pl/pozycjonowanie-strony-gabinetu-dermatologicznego"),
          ".",
        ),

        h2("Wzór podstrony choroby skóry na stronie dermatologa: lekarz sprawdzający i data weryfikacji"),
        p("Pacjent czyta podstronę choroby, zanim zdecyduje, czy iść do lekarza. Dlatego w panelu nie jest to puste pole tekstowe, tylko wzór z określonymi polami:"),
        li("krótkie wyjaśnienie prostym językiem, z nazwą medyczną objaśnioną raz"),
        li("blok „Kiedy umówić wizytę” wysoko na stronie"),
        li("przebieg wizyty i metody leczenia stosowane w gabinecie, bez obietnicy efektu"),
        li("lekarz, który sprawdził tekst, wybierany z listy zespołu, oraz data weryfikacji — bez tych pól podstrona nie zostanie opublikowana"),
        li("rodzaj wizyty, do którego prowadzi przycisk zapisu na tej podstronie"),
        p("Podstrony sprawdzone ponad rok temu trafiają na listę w panelu, więc widać, które teksty czekają na przegląd. Treść medyczną dostarczają albo zatwierdzają Wasi lekarze, a ja układam ją we wzorze prostym językiem. Wzór nie ma też pól na hasła w rodzaju „najlepszy efekt” — strona lekarza ma informować, nie reklamować."),

        h2("Zapis według rodzaju wizyty na stronie gabinetu dermatologicznego i kalendarz w ZnanyLekarz"),
        p("W gabinecie dermatologicznym przycisk „Umów się” może oznaczać krótką wizytę kontrolną albo długą konsultację estetyczną, a źle wybrany termin kończy się telefonem z rejestracji. Dlatego ścieżka zapisu zaczyna się od pytania, po co pacjent przychodzi:"),
        li("konsultacja z nowym problemem skórnym"),
        li("badanie znamion lub wideodermatoskopia"),
        li("wizyta kontrolna w trakcie leczenia"),
        li("konsultacja z zakresu dermatologii estetycznej"),
        li("usunięcie zmiany skórnej — po kwalifikacji, więc zamiast kalendarza krótka prośba o termin"),
        p("Dalej pacjent trafia do kalendarza z wybranym już rodzajem wizyty. Wiele gabinetów zapisuje pacjentów przez ZnanyLekarz i strona tego nie zmienia: przycisk otwiera kalendarz lekarza w serwisie, a usługi nazywają się na stronie tak samo jak w profilu. Strona dokłada to, na co w profilu brakuje miejsca — opisy chorób, przygotowanie do badania, cennik zabiegów estetycznych. Przy własnym systemie gabinetowym sprawdzam przed wyceną, czy przyjmuje rodzaj wizyty w linku."),

        h2("Cennik wizyt u dermatologa prywatnie i zadatek za konsultację estetyczną online"),
        p("Ta strona powstaje dla gabinetów prywatnych. Do dermatologa na NFZ potrzebne jest skierowanie; jeśli macie też kontrakt, wystarczy krótka informacja, a reszta strony mówi o wizytach prywatnych."),
        p("Cennik ma dwie części, tak jak cała strona. W leczniczej są konsultacja, wizyta kontrolna, badanie znamion, usunięcie zmiany i badanie histopatologiczne jako osobna pozycja, żeby pacjent nie był zaskoczony przy płatności. W estetycznej — cena za zabieg lub obszar i koszt konsultacji. Recepcja zmienia ceny w panelu, a każda podstrona usługi pokazuje swoją cenę obok przycisku zapisu."),
        p("Za konsultację estetyczną gabinet może pobierać zadatek online przez Stripe Checkout, który obsługuje także BLIK i Przelewy24. Tę samą bramkę płatności podłączyłem na stronie warszawskiego salonu kosmetycznego, która sprzedaje kurs online."),

        h2("Profile lekarzy na stronie gabinetu dermatologicznego: specjaliści, rezydenci i kosmetolodzy"),
        p("Pacjent chce wiedzieć, kto go przyjmie, a zespół dermatologiczny bywa mieszany. Każda osoba ma profil z jednego wzoru, a tytuły są zapisane dokładnie:"),
        li("specjalista dermatologii i wenerologii — z tytułem naukowym, jeśli go ma, i numerem prawa wykonywania zawodu"),
        li("lekarz w trakcie specjalizacji z dermatologii i wenerologii — opisany właśnie tak, z wizytami, które prowadzi"),
        li("kosmetolog — z wykształceniem i listą zabiegów, wyraźnie w części estetycznej"),
        li("dni przyjęć, języki i przycisk zapisu do tej osoby"),
        p(
          "Na podstronie każdej choroby i zabiegu widać, kto z zespołu się nimi zajmuje. Profile lekarzy innych specjalności opisuję na stronie ",
          link("strona internetowa dla lekarza", "/pl/strona-internetowa-dla-lekarza"),
          ".",
        ),

        h2("Zdjęcia kliniczne i metamorfozy na stronie dermatologa: zgoda pacjenta i podpisy bez obietnic"),
        p("Zdjęcie grzybicy paznokci czy ropnego trądziku pomaga rozpoznać problem, ale nie każdy chce je oglądać. Dlatego na podstronach chorób zdjęcie kliniczne pojawia się dopiero po dotknięciu przycisku „Pokaż zdjęcie”, a obok stoi jedno zdanie opisu. Źródła są dwa: przypadki z gabinetu, na których publikację pacjent podpisał zgodę, albo licencjonowana baza zdjęć medycznych. Grafiki z wyszukiwarki nie wchodzą w grę."),
        p("Metamorfozy są tylko w części estetycznej. Każda to wpis w panelu z zabiegiem, liczbą sesji, osobą wykonującą i datą podpisania zgody na wizerunek; bez tej daty wpis zostaje szkicem. Podpis mówi, co zrobiono, a nie co osiągnie oglądający. Czy i jak pokazywać efekty zabiegów wykonywanych przez lekarza, oceni prawnik gabinetu."),

        h2("Zdjęcia zmian skórnych i formularze na stronie gabinetu dermatologicznego zgodnie z RODO"),
        p("Pacjent chętnie wysłałby zdjęcie wysypki przed wizytą, ale fotografia skóry podpisana imieniem i nazwiskiem to dana o zdrowiu, czyli szczególna kategoria w RODO. Dlatego strona w ogóle nie przyjmuje plików. Przyciski „Wyślij zdjęcia” i „Teleporada” otwierają system, którego gabinet już używa do teleporad lub dokumentacji, u dostawcy, z którym macie umowę powierzenia przetwarzania danych."),
        p("Ta sama zasada obowiązuje na całej stronie:"),
        li("formularz kontaktowy pyta o imię, telefon, rodzaj wizyty i dogodny termin — nic o skórze"),
        li("ankietę przed pierwszą wizytą, listę leków i zgody pacjent wypełnia w systemie gabinetowym, z linkiem w potwierdzeniu rezerwacji"),
        li("narzędzia analityczne i reklamowe nie działają na stronach zapisu i teleporady"),
        p("To rozwiązania projektowe, nie opinia prawna; konfigurację potwierdza inspektor ochrony danych albo prawnik."),

        h2("Projekt strony dermatologa dostępny dla każdego: WCAG, spokojny styl i różne odcienie skóry"),
        p("Tekst od 16 pikseli, kontrast na poziomie AA według WCAG, duże przyciski, etykiety przy polach formularzy i obsługa czytnika ekranu to podstawa każdej strony medycznej — także dla starszych pacjentów, którzy przychodzą na kontrolę znamion. U dermatologa dochodzą dwie sprawy:"),
        li("zdjęcia i ilustracje pokazują różne odcienie skóry, bo AZS czy przebarwienie wygląda inaczej na skórze ciemnej niż na jasnej, a pacjent powinien rozpoznać swoją"),
        li("tekst alternatywny opisuje zdjęcie kliniczne słowami pacjenta, a nie podręcznika"),
        p(
          "Styl jest spokojny: jasne tło, jeden kolor akcentu zarezerwowany dla zapisu i żadnych filmów uruchamianych samoczynnie na podstronach chorób. Część estetyczna może być cieplejsza, ale zostaje przy tych samych krojach i odstępach. Pacjentom z zagranicy służy wersja po angielsku lub ukraińsku, każda pod własnymi adresami — o takich stronach piszę w ofercie ",
          link("tworzenie stron wielojęzycznych", "/pl/oferty/tworzenie-stron-wielojezycznych"),
          ".",
        ),

        h2("Strona gabinetu dermatologicznego, którą ChatGPT i Google AI Overviews potrafią przeczytać"),
        p("Pacjenci pytają ChatGPT, Perplexity i podsumowania AI w Google na przykład: „który dermatolog w Toruniu przyjmuje prywatnie dzieci” albo „gdzie w Katowicach usunąć znamię z badaniem histopatologicznym”. Asystent wymienia tylko gabinety, o których potrafi przeczytać fakty i porównać je z innymi źródłami. Dlatego choroby, rodzaje wizyt, lekarze z dokładnymi tytułami, adres, godziny, języki i ceny są na stronie tekstem, zgodnym z wizytówką Google i profilem w ZnanyLekarz. Dane strukturalne opisują gabinet i każdego lekarza, a podstrony chorób mają w kodzie nazwisko lekarza sprawdzającego i datę. Plik robots.txt zawiera jawne zasady dla robotów AI, tak jak na stronie Giuseppe, psychoterapeuty z Mediolanu, którego nowe podstrony pojawiają się już w odpowiedziach ChatGPT."),
        p(
          "Żeby gabinet pojawiał się w tych odpowiedziach stale, potrzebna jest dalsza praca — szczegóły w ofercie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Ile kosztuje strona internetowa dla gabinetu dermatologicznego"),
        p("Projekt graficzny jest w cenie — nie ma za niego osobnej opłaty."),
        li("Prosta strona gabinetu dermatologicznego — strona główna z dwiema ścieżkami, kilka podstron chorób i zabiegów, profile zespołu, cennik i przycisk zapisu: od 3000 do 6000 zł."),
        li("Pełna strona z częścią leczniczą i estetyczną, wzorami podstron z polami dla lekarza sprawdzającego, zapisami według rodzaju wizyty, metamorfozami za zgodą, odnośnikami do teleporady i danymi strukturalnymi: od 8500 zł."),
        p(
          "Domena i hosting są zarejestrowane na gabinet, a kod i treści oddaję przy uruchomieniu; za hosting, domenę i system rezerwacji płacicie ich dostawcom. Strona Giuseppe była gotowa do przekazania po 44 dniach roboczych, a jego 468 artykułów przeniosłem z przekierowaniami 301 — tak samo istniejąca strona gabinetu zmienia wygląd bez utraty pozycji w Google. Wszystkie widełki zawiera ",
          link("cennik", "/pl/cennik"),
          ", a mój sposób pracy nad stronami opisuje oferta ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strona internetowa dla gabinetu dermatologicznego: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona internetowa dla gabinetu dermatologicznego?", "Za prostą stronę zapłacicie od 3000 do 6000 zł, za pełną — od 8500 zł; pełna ma część leczniczą i estetyczną, zapisy według rodzaju wizyty, profile zespołu i metamorfozy. Projekt graficzny jest w cenie. Stałą cenę podaję, gdy poznam zakres usług, zespół i sposób zapisów. Pierwsza rozmowa, 15–30 minut, jest bezpłatna."],
          ["Czy strona zastąpi zapisy przez ZnanyLekarz?", "Nie musi. Jeśli pacjenci umawiają się przez ZnanyLekarz, przycisk na stronie prowadzi do Waszego kalendarza w serwisie, a strona odpowiada na pytania, na które profil nie ma miejsca: czym jest dana choroba, jak przygotować się do badania, ile kosztuje zabieg estetyczny."],
          ["Czy dermatologia estetyczna może wyglądać inaczej niż część lecznicza?", "Tak, w granicach jednej marki: inne zdjęcia, cieplejszy kolor akcentu i układ z cenami, ale wspólne logo, kroje pisma i menu. Gdy estetyka działa jako osobna klinika z karnetami, lepiej sprawdzi się jej własna strona."],
          ["Czy pacjent może wpłacić zadatek za konsultację estetyczną przez stronę?", "Tak. Zadatek może przyjąć Wasz system rezerwacji, o ile to potrafi, albo Stripe Checkout dołączony do formularza konsultacji, z BLIK-iem i Przelewy24. Na stronie warszawskiego salonu kosmetycznego Stripe obsłużył ponad 100 zakupów kursu online z pierwszej kampanii Google Ads."],
          ["Jak opisać na stronie lekarzy w trakcie specjalizacji i kosmetologów?", "Dokładnie tym, kim są: „lekarz w trakcie specjalizacji z dermatologii i wenerologii”, „kosmetolog”, z zakresem wizyt i zabiegów, które prowadzą. Specjaliści mają podany tytuł i numer prawa wykonywania zawodu. Każdy opis zatwierdzacie przed uruchomieniem."],
          ["Gdzie pacjent wysyła zdjęcia zmian skórnych, skoro nie przez stronę?", "Do systemu, którego używacie do teleporad lub dokumentacji. Strona tylko do niego prowadzi z przycisku „Wyślij zdjęcia”, więc plik nie ląduje na zwykłej skrzynce ani w formularzu. To wskazówka projektowa, nie opinia prawna."],
          ["Czy pracujesz z gabinetami spoza Warszawy?", "Tak, z całej Polski. Praca toczy się zdalnie: rozmowy wideo, wspólny plik z projektem i uwagi na bieżąco, po polsku. Za stronę wystawiam fakturę."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową dla gabinetu dermatologicznego: co mi wysłać"),
        p(
          "Napiszcie, jak nazywa się gabinet i gdzie jest obecna strona, jakie choroby i zabiegi obejmujecie w części leczniczej i estetycznej, kto jest w zespole i z jakim tytułem, jak pacjenci się zapisują — przez ZnanyLekarz, system gabinetowy czy telefon — i czy przyjmujecie dzieci. Przydadzą się też dwie–trzy strony gabinetów, które Wam się podobają. Bez danych pacjentów. Odeślę proponowaną listę podstron razem ze stałą ceną. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
