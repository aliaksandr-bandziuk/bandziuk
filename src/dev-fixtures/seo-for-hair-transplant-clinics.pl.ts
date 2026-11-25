// Landing page fixture: Pozycjonowanie strony kliniki przeszczepu włosów (PL),
// group «seo-for-hair-transplant-clinics». Market version for Polish hair
// transplant clinics and lekarze wykonujący przeszczepy, not a translation of
// the EN page.
// Semantic core: demand-new-niches + demand-niches-round2 (PL/PL) — every
// Polish phrase is below the source's floor: przeszczep włosów seo 0,
// marketing kliniki przeszczepu włosów 0, strona internetowa dla kliniki
// przeszczepu włosów 0. The only Polish medical phrase with volume in the
// whole measurement is marketing medyczny 260 (CPC 5.82), so it goes in an H2.
// Service vocabulary from claude/service-wording-demand.md: pozycjonowanie
// stron 5400, pozycjonowanie strony 5400, agencja seo 2400, audyt seo 1600,
// seo freelancer 880, specjalista seo 390. AI vocabulary for PL: ai seo 720,
// pozycjonowanie w ai 260, pozycjonowanie w chatgpt 170, widoczność w ai 110,
// llm seo 110; GEO as a whole 310 and AEO 50 in PL, so they are glossed in the
// body and in H3, never the target of an H2 on their own.
// EN reference volumes for the same niche: hair transplant seo 20, seo for
// hair transplant clinics 10, hair transplant advertising 20. Patient side
// (EN/US, for the structure this page proposes): hair transplant cost 27100,
// hair transplant turkey 27100, fue 18100, hair transplant surgeon 14800.
//
// Polish angles, and this is what makes it a market version rather than a
// translation: Poland sits on the OTHER side of the Turkey comparison — the
// Polish patient is the one flying to Istanbul, so the clinic's pages have to
// answer «why here» (follow-up two hours away, recourse, the surgeon you can
// return to) instead of selling the trip; Poland is at the same time an
// inbound destination for patients from the UK, Ireland, Germany and
// Scandinavia, so the clinic has two audiences at once; the procedure is fully
// private, NFZ covers nothing, so the price question is the whole funnel;
// informacja bez cech reklamy (art. 14 ust. 1 ustawy o działalności
// leczniczej) and the lekarz's responsibility for published content shape what
// may be claimed; PWZ on the surgeon's page; ZnanyLekarz beside Google;
// RODO on photo consent; raty.
// NOT on this page: building the site (own group); chirurgia plastyczna
// (/pl/pozycjonowanie-strony-chirurga-plastycznego); medycyna estetyczna
// (/pl/pozycjonowanie-strony-kliniki-medycyny-estetycznej); dermatologia and
// hair loss as a condition (/pl/pozycjonowanie-strony-gabinetu-dermatologicznego);
// ads and social media (the owner does not run them). Main case: Giuseppe,
// a psychotherapist in Milan — private medical practice under strict
// advertising rules, 301 migration, pages quoted in ChatGPT.
// Owner's rule: every SEO page covers AI search (GEO, AEO).
import { p, h2, li, link, k } from "./pt";

export const seoForHairTransplantClinicsPl = {
  lang: "pl",
  group: "seo-for-hair-transplant-clinics",
  slug: "pozycjonowanie-strony-kliniki-przeszczepu-wlosow",
  title: "Pozycjonowanie strony kliniki przeszczepu włosów",
  heading: "Pozycjonowanie strony kliniki przeszczepu włosów",
  excerpt:
    "Pozycjonowanie, GEO i AEO dla klinik przeszczepu włosów: podstrona dla każdej techniki, cennik odpowiadający na pytanie o koszt, lekarz wykonujący zabieg z numerem PWZ, galerie z datą miesiąca po zabiegu i klinika wymieniana w ChatGPT, Perplexity oraz w odpowiedziach AI w Google.",
  seo: {
    metaTitle: "Pozycjonowanie kliniki przeszczepu włosów | Bandziuk",
    metaDescription:
      "Pozycjonowanie strony kliniki przeszczepu włosów: techniki, cennik, lekarz z PWZ, galerie z datą, widoczność w ChatGPT i AI. Audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Informacja, nie reklama", "Audyt od 1000 zł", "Widoczność w ChatGPT i AI"],
  heroPhonePoints: ["Przeszczep włosów cena", "FUE czy DHI", "Kto wykonuje nacięcia", "Przeszczep w Polsce czy w Turcji"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO strony kliniki przeszczepu włosów, galerii i wizytówki Google", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO: podstrony technik, cennika i galerii, opis lekarza, dane strukturalne", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie strony kliniki przeszczepu włosów", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajecie",
      title: "Co obejmuje pozycjonowanie strony kliniki przeszczepu włosów",
      items: [
        { _key: k("o"), iconName: "layers", title: "Podstrona dla każdej techniki, którą wykonujecie", text: "FUE, FUT i DHI, z pełną nazwą obok każdego skrótu" },
        { _key: k("o"), iconName: "file-text", title: "Cennik, który odpowiada na pytanie o koszt", text: "Widełki, co je zmienia, liczba grafów w tekście, nie w obrazku" },
        { _key: k("o"), iconName: "shield-check", title: "Lekarz wykonujący zabieg: specjalizacja i numer PWZ", text: "Kto wykonuje nacięcia, a kto umieszcza grafy" },
        { _key: k("o"), iconName: "image", title: "Galerie z datą miesiąca po zabiegu", text: "Trzeci, szósty i dwunasty miesiąc, zgody zgodne z RODO" },
        { _key: k("o"), iconName: "map-pin", title: "Wizytówka Google i profil w ZnanyLekarz", text: "Kategoria, zabiegi jako usługi, prawdziwe zdjęcia kliniki" },
        { _key: k("o"), iconName: "sparkles", title: "GEO i AEO: klinika wymieniana w ChatGPT i Perplexity", text: "Pomiar tego, co asystenci mówią teraz, poprawka i pomiar ponownie" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO kliniki przeszczepu włosów", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe pozycjonowanie kliniki przeszczepu włosów", value: "od 3500 zł / mies.", note: "techniki, cennik, galerie, mapy, widoczność w AI", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: prywatna praktyka medyczna i strony, które sprzedają za granicę",
      subtitle:
        "Najpierw prywatna praktyka medyczna w Mediolanie, która pracuje pod surowymi przepisami o reklamie i jest dziś cytowana w odpowiedziach ChatGPT. Dalej strony wielojęzyczne dla klientów decydujących z innego miasta lub kraju oraz usługi premium wybierane po tygodniach porównywania — czyli warunki, w jakich konkuruje klinika przeszczepu włosów.",
      picks: [
        "psychotherapist-website-milan",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "full-multilingual-website-development-and-seo-for-student-services",
        "architecture-website-rebuild-and-seo-scan",
        "renovation-and-investment-website-with-premium-design",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena pozycjonowania strony kliniki przeszczepu włosów",
      subtitle: "W jeden dzień roboczy dostajecie pierwsze poprawki, które bym wprowadził na stronie, w galeriach i w wizytówce Google, oraz stałą cenę.",
      contextLabel: "Nazwa kliniki lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i odbierz wycenę",
      note: "Albo napiszcie na WhatsApp — odpowiadam w tym samym czasie.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Na które zabiegi chcecie więcej pacjentów?", options: ["Przeszczep FUE", "DHI albo zabieg bez golenia", "Przeszczep brody lub brwi", "Łysienie u kobiet"] },
        { _key: k("z"), question: "Skąd przyjeżdżają Wasi pacjenci?", options: ["Z tego samego miasta i regionu", "Z całej Polski", "Z zagranicy", "I z Polski, i z zagranicy"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Zajmuję się pozycjonowaniem, GEO i AEO dla klinik przeszczepu włosów oraz dla lekarzy wykonujących te zabiegi — od praktyk jednoosobowych do klinik z własnym blokiem zabiegowym."),
        p("Robię podstrony technik i cennika, opis lekarza z numerem PWZ, galerie, podstrony powikłań, wizytówkę Google oraz widoczność w ChatGPT, Perplexity, Gemini i w odpowiedziach AI w Google. Wszystko wykonuję sam, od audytu do kodu."),

        h2("Pozycjonowanie strony kliniki przeszczepu włosów: od czego zależy liczba konsultacji"),
        p("Przeszczep włosów jest wyszukiwany inaczej niż każdy inny zabieg estetyczny, i ten układ sprawdzam w danych przed zaproponowaniem struktury strony."),
        p("Prawie cały popyt niosą trzy pytania: ile to kosztuje, gdzie wykonać zabieg i którą techniką. Klinika z jedną podstroną o nazwie „przeszczep włosów” nie konkuruje o żadne z nich."),
        p(
          "To inna praca niż pozycjonowanie chirurgii plastycznej — wyniki wyszukiwania dla obu zapytań nie mają wspólnych domen. Chirurgia plastyczna jest opisana na stronie ",
          link("pozycjonowanie strony chirurga plastycznego", "/pl/pozycjonowanie-strony-chirurga-plastycznego"),
          ", medycyna estetyczna na stronie ",
          link("pozycjonowanie kliniki medycyny estetycznej", "/pl/pozycjonowanie-strony-kliniki-medycyny-estetycznej"),
          ", a łysienie jako choroba należy do ",
          link("gabinetu dermatologicznego", "/pl/pozycjonowanie-strony-gabinetu-dermatologicznego"),
          ".",
        ),

        h2("Przeszczep włosów w Polsce czy w Turcji: podstrona, która odpowiada na to porównanie"),
        p("To pytanie decyduje o polskim rynku, i prawie żadna polska klinika nie odpowiada na nie wprost. Pacjent zna ceny stambulskie, zanim otworzy Waszą stronę."),
        p("Podstrona porównania nie atakuje nikogo i nie obiecuje wyniku. Pokazuje, co pacjent dostaje tutaj i czego nie widać w cenie pakietu:"),
        li("kontrola po zabiegu w odległości dwóch godzin, a nie dwóch lotów"),
        li("ten sam lekarz przy kontroli po trzecim, szóstym i dwunastym miesiącu"),
        li("droga odwoławcza w polskim systemie: izba lekarska, rzecznik praw pacjenta, sąd w Polsce"),
        li("dokumentacja medyczna po polsku, przekazywana dalej bez tłumaczenia przysięgłego"),
        li("korekta, jeśli wynik wymaga drugiej sesji — kto ją wykonuje i na jakich warunkach"),
        p("Ta podstrona odpowiada też na zapytania o powrót do Polski po zabiegu wykonanym za granicą, które przyprowadzają pacjenta już po problemie."),

        h2("Cennik przeszczepu włosów i raty: podstrony, które odpowiadają na pytanie o koszt"),
        p("Zabieg jest w całości prywatny, NFZ nie finansuje nic, więc pytanie o cenę jest całym lejem sprzedażowym. Klinika, która trzyma cenę za formularzem, oddaje to zapytanie katalogom i klinikom zagranicznym."),
        p("Uchwały samorządu lekarskiego dopuszczają podanie cen na własnej stronie praktyki, a dla tej niszy cena i jest zapytaniem. Podstrona cennika daje widełki, tłumaczy, co je zmienia, i mówi, że ostateczną kwotę ustala lekarz po ocenie strefy dawczej."),
        li("widełki wraz z liczbą grafów, którą obejmują"),
        li("co zmienia cenę: technika, liczba grafów, udział lekarza, znieczulenie, liczba sesji"),
        li("co zawiera kwota: leki, kontrole, pierwsze mycie, druga sesja, jeśli jest potrzebna"),
        li("raty i finansowanie, wyszukiwane oddzielnie od samej ceny"),
        p("Zapytania o konkretną liczbę grafów istnieją, ale są drobnym ułamkiem zapytania o cenę ogólną. Tabela grafów należy więc do wnętrza podstrony cennika, a nie do osobnych podstron."),

        h2("Podstrony technik przeszczepu włosów: FUE, FUT, DHI i słowa, których używa pacjent"),
        p("Pacjent przychodzi, znając nazwy technik, i porównuje kliniki po tym, które z nich wykonują. FUE niesie najwięcej zapytań, a pełna nazwa — przeszczep metodą ekstrakcji jednostek mieszkowych — jest wyszukiwana prawie tak często jak skrót."),
        li("jedna podstrona na technikę: dla kogo jest, dla kogo nie jest i jak wygląda strefa dawcza po zabiegu"),
        li("skrót i pełna nazwa w nagłówku oraz w pierwszym akapicie"),
        li("kwestia golenia opisana wprost, bo zabiegi bez golenia wybiera się właśnie z tego powodu"),
        li("czas sesji, liczba sesji i przebieg samego dnia zabiegowego"),
        p("Autorskie nazwy technik wymyślone przez klinikę same nie przynoszą zapytań. Na stronie powinno stać jedno zdanie o tym, wersją której standardowej techniki są, żeby pacjent szukający standardowej nazwy trafił do Was."),

        h2("Lekarz wykonujący przeszczep: specjalizacja, numer PWZ i podział pracy w zespole"),
        p("Zapytanie o lekarza wykonującego zabieg jest jednym z największych w tej niszy, a zapytanie o konsultację ma najdroższe kliknięcie, jakie zmierzyłem dla stron tego rodzaju."),
        p("W tej niszy podstrona lekarza ma jeszcze jedno zadanie. Podział pracy między lekarzem a zespołem to pytanie, które pacjenci omawiają najczęściej, a kliniki wyjaśniają najrzadziej."),
        p("Podstrona mówi więc wprost, kto wykonuje nacięcia, kto umieszcza grafy, ilu pacjentów lekarz przyjmuje w jednym dniu i czy kontrole prowadzi ten sam lekarz. Numer prawa wykonywania zawodu stoi obok nazwiska i jest sprawdzalny w rejestrze."),

        h2("Pozycjonowanie kliniki przeszczepu włosów na pacjentów z zagranicy"),
        p("Polska jest jednocześnie kierunkiem wyjazdowym i docelowym. Pacjenci z Wielkiej Brytanii, Irlandii, Niemiec i Skandynawii porównują polskie kliniki z tureckimi, a decydują w swoim języku."),
        li("wersja językowa pisana osobno, z własnymi widełkami cen dla tego rynku, a nie tłumaczona słowo w słowo"),
        li("ile nocy trzeba zostać, kiedy jest mycie i kontrola oraz kiedy lot uznaje się za bezpieczny"),
        li("co jest zorganizowane, a co nie: transfer, nocleg, tłumacz — jako fakty, nie jako pakiet, którego nie sprzedajecie"),
        li("jak wygląda opieka po powrocie i kto odpowiada na pytania na tym etapie"),
        p("Klinika sprzedająca za granicę konkuruje na kilku rynkach wyszukiwania jednocześnie, a każdy z nich ma własnych konkurentów i własne oczekiwania cenowe."),

        h2("Podstrony poza skórą głowy: broda, brwi i łysienie u kobiet"),
        p("Trzy grupy zapytań stoją obok głównej i przyprowadzają innego pacjenta z innym pytaniem."),
        p("Łysienie u kobiet niesie własny, znaczący popyt, a prawie żadna strona kliniki nie zwraca się do tej pacjentki wprost: treść zakłada mężczyznę, galerie pokazują mężczyzn, a kobieta czytająca taką stronę sama się z rynku wypisuje."),
        p("Przeszczep brody i przeszczep brwi mają własne stałe zapytania oraz własne obawy o gęstość i kierunek wzrostu. Każda z tych grup dostaje osobną podstronę, bo kryteria kwalifikacji, liczby grafów i zdjęcia, które przekonują, są inne."),

        h2("Zdjęcia przed i po oraz harmonogram odrostu: galerie z datą miesiąca"),
        p("Galerie są najczęściej odwiedzaną częścią strony kliniki włosów i zwykle najmniej czytelną dla wyszukiwarki: setki obrazków bez tekstu, wczytywanych przez wolną wtyczkę."),
        p("W tej niszy dochodzi problem, którego nie ma żaden inny zabieg — czas. Włosy odrastają przez rok, więc zdjęcie bez daty czyta się jako zdjęcie stockowe dla pacjenta, który o tym wie."),
        li("każdy przypadek z datą miesiąca po zabiegu — trzeci, szósty, dwunasty — i podaną liczbą grafów"),
        li("to samo światło, kąt i odległość na obu zdjęciach, bez obróbki poza kadrowaniem"),
        li("osobna podstrona o harmonogramie odrostu, razem z fazą wypadania, która przeraża pacjenta w trzecim tygodniu"),
        li("skompresowane obrazki z opisowymi nazwami plików i tekstem alternatywnym o zabiegu, nigdy o osobie"),
        li("zgoda na publikację zgodna z RODO i z wytycznymi okręgowej izby lekarskiej, potwierdzona przez Waszego doradcę"),

        h2("Podstrony powikłań: blizny, gojenie i nieudany wynik opisane wprost"),
        p("Blizny, gojenie, skuteczność i wygląd nieudanego wyniku są wyszukiwane, a kliniki licytują te zapytania w reklamie. Zapytanie o nieudany przeszczep ma kliknięcie droższe niż większość zapytań komercyjnych w tej niszy."),
        p("Klinika, która odpowiada na własne najtrudniejsze pytanie, zatrzymuje pacjenta, który tę odpowiedź znalazłby u konkurencji albo na forum."),
        p("Podstrona opisuje, co może pójść nie tak, jak często, co klinika w takiej sytuacji robi i jak wygląda korekta. Nie obiecuje wyniku — i to jest jednocześnie wymóg przepisów i powód, dla którego strona jest wiarygodna."),

        h2("Wizytówka Google, ZnanyLekarz i opinie pacjentów kliniki włosów"),
        p("Przy zapytaniach z nazwą miasta mapy stoją nad wynikami organicznymi. Wizytówka potrzebuje właściwej kategorii głównej, zabiegów wpisanych jako usługi, prawdziwych zdjęć kliniki i zespołu — nigdy zdjęć pacjentów — oraz linków do odpowiednich podstron."),
        p("ZnanyLekarz w Polsce ma dla lekarza realną wagę i często stoi w wynikach wyżej niż własna strona. Dane lekarza i kliniki muszą być w obu miejscach identyczne, a opinii nie wolno kupować ani pisać samemu."),
        p("Odpowiedź na opinię nigdy nie potwierdza, że autor był pacjentem, i nie wymienia jego zabiegu, nawet jeśli on sam to zrobił. Krótka, rzeczowa odpowiedź z zaproszeniem do kontaktu chroni tajemnicę i pokazuje czytelnikom, że klinika reaguje."),

        h2("Informacja bez cech reklamy: co może zawierać strona kliniki przeszczepu włosów"),
        p("Podmiot wykonujący działalność leczniczą może podawać informacje o zakresie i rodzajach świadczeń, ale treść nie może mieć cech reklamy (art. 14 ust. 1 ustawy o działalności leczniczej). Lekarz odpowiada też za to, co publikuje w jego imieniu wykonawca."),
        p("W praktyce to znaczy: żadnych obietnic wyniku, żadnych opinii pacjentów w roli dowodu skuteczności, żadnych promocji i rabatów na zabieg. Zdjęcia przed i po konsultuję z Wami i z Waszą izbą lekarską przed publikacją."),
        p("Piszę strony, które rosną w wynikach bez obiecanego rezultatu, a wszystko, co medyczne lub prawne, zatwierdza lekarz z Waszej kliniki. Tak samo działa opisany niżej przypadek z Mediolanu."),

        h2("Pozycjonowanie strony kliniki przeszczepu włosów w ChatGPT i AI Overviews (GEO, AEO)"),
        p("Zanim pacjent otworzy jakąkolwiek stronę kliniki, pyta asystenta: „ile kosztuje przeszczep włosów w Polsce”, „FUE czy DHI przy cofającej się linii włosów”, „co może pójść nie tak przy przeszczepie w Turcji”."),
        p("To samo pytanie trafia do Perplexity i Gemini oraz do odpowiedzi AI nad wynikami Google. Ta praca ma dwie nazwy — GEO, czyli generative engine optimization, i AEO, czyli answer engine optimization — a bywa wyszukiwana również jako ai seo, pozycjonowanie w AI i llm seo."),
        p("Asystenci cytują fakty, które mogą przeczytać i potwierdzić w kilku miejscach, więc praca na stronie kliniki włosów to:"),
        li("techniki, widełki grafów, ceny, czas sesji i etapy gojenia zapisane tekstem, nigdy w obrazku ani za formularzem"),
        li("krótkie odpowiedzi na pytania pacjentów, zatwierdzone przez lekarza, razem z tymi o powikłaniach"),
        li("te same dane kliniki i lekarza wszędzie: strona, wizytówka Google, rejestr PWZ, ZnanyLekarz, katalogi"),
        li("dane strukturalne łączące klinikę, jej lekarzy, zabiegi i lokalizacje"),
        p("Zapisuję, co ChatGPT, Perplexity i odpowiedzi AI w Google mówią o klinice przed pracą, poprawiam nieprawdziwe dane u źródła i mierzę te same pytania ponownie. To właśnie oznacza w praktyce widoczność w AI."),
        p(
          "Działa to dla praktyk medycznych: Giuseppe, psychoterapeuta z Mediolanu, trafił do mnie przez ChatGPT, a podstrony jego przebudowanej strony są dziś cytowane w odpowiedziach ChatGPT. Metodę opisuję na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Prywatna praktyka medyczna pod surowymi przepisami: przypadek z Mediolanu"),
        p("Mój najmocniejszy przypadek medyczny pochodzi z praktyki o surowszych przepisach reklamowych niż te, które obowiązują polską klinikę włosów."),
        p("Dla Giuseppe, psychologa i psychoterapeuty z Mediolanu, przeniosłem stronę z WordPressa na Next.js i Sanity, przeniosłem wszystkie 468 wpisów blogowych z przekierowaniami 301 z każdego starego adresu i zbudowałem strony filarowe, podstrony dla Mediolanu, Monzy i terapii online oraz 150 wpisów FAQ z danymi strukturalnymi."),
        p("Jego system zarządzania treścią oznacza każde zdanie łamiące włoskie przepisy o reklamie świadczeń zdrowotnych — obiecany wynik, opinię pacjenta, rabat — zanim trafi na stronę."),
        p("Dla kliniki przeszczepu włosów przenosi się sama metoda: strona medyczna może rosnąć w wynikach bez obietnic, zachować wszystkie stare adresy przy przebudowie i stać się źródłem, które cytuje asystent."),

        h2("Marketing medyczny kliniki włosów: gdzie jest miejsce na pozycjonowanie"),
        p("Marketing medyczny kliniki przeszczepu włosów to zwykle reklamy w wyszukiwarce, Instagram i TikTok, wyjazdy z influencerami, pośrednicy odsprzedający pacjentów i własna strona."),
        p("Reklamy i media społecznościowe przynoszą uwagę, dopóki za nie płacicie. Wyszukiwanie przyprowadza pacjenta, który już liczy koszt zabiegu, a podstrony pracują dalej po zakończeniu kampanii."),
        p("Zajmuję się pozycjonowaniem i budową stron; nie prowadzę reklam ani profili społecznościowych. Podstrony, które robię, wspierają je: obserwator, który wyszuka nazwę kliniki, trafia na stronę odpowiadającą na to, czego rolka nie wyjaśni."),
        p(
          "Szerszą usługę opisuję na stronie ",
          link("strategia i optymalizacja SEO", "/pl/oferty/strategia-i-optymalizacja-seo"),
          ", a sam audyt na stronie ",
          link("audyt SEO strony internetowej", "/pl/oferty/audyt-seo-strony-internetowej"),
          ".",
        ),

        h2("Ile kosztuje pozycjonowanie strony kliniki przeszczepu włosów"),
        li("Audyt SEO strony, galerii i wizytówki Google: od 1000 zł jednorazowo, z poprawkami ułożonymi według liczby konsultacji, które mogą przynieść."),
        li("Prace jednorazowe — podstrony technik, cennika i galerii, opis lekarza, dane strukturalne, poprawki techniczne: 1000–3000 zł."),
        li("Stałe pozycjonowanie — nowe podstrony technik i rynków, galerie, mapy, widoczność w AI i raporty w zapytaniach o konsultację: od 3500 zł miesięcznie; na najbardziej konkurencyjnych rynkach od 5500 zł miesięcznie."),
        p(
          "Wszystkie ceny są na stronie ",
          link("cennik", "/pl/cennik"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie strony kliniki przeszczepu włosów: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje pozycjonowanie strony kliniki przeszczepu włosów?", "Audyt od 1000 zł, prace jednorazowe 1000–3000 zł, stała współpraca od 3500 zł miesięcznie, a na najbardziej konkurencyjnych rynkach od 5500 zł. Opowiedzcie o klinice, lekarzach i rynkach, na które sprzedajecie, a wycena wróci jako stała kwota."],
          ["Po jakim czasie pozycjonowanie przynosi konsultacje?", "Zmiany w wizytówce Google i na podstronach, które już się wyświetlają, widać zwykle w kilka tygodni. Nowa podstrona techniki albo cennika potrzebuje trzech do sześciu miesięcy, a dłużej na rynkach, gdzie kliniki reklamują się przez granice."],
          ["Czy można podać cenę zabiegu na stronie?", "Tak, jako widełki wraz z liczbą grafów, którą obejmują. Uchwały samorządu lekarskiego dopuszczają ceny na własnej stronie praktyki, a w tej niszy cena jest największym zapytaniem — klinika, która ją ukrywa, oddaje to zapytanie katalogom i klinikom zagranicznym."],
          ["Czy wolno porównywać się z klinikami w Turcji?", "Tak, o ile podstrona podaje fakty i nie obiecuje wyniku ani nie krytykuje konkretnych placówek. Pacjent to porównanie robi tak czy inaczej; lepiej, żeby znalazł je u Was wraz z informacją o kontroli, dokumentacji i drodze odwoławczej w Polsce."],
          ["Czy możemy pokazywać zdjęcia przed i po?", "Za pisemną zgodą na publikację zgodną z RODO, przy tym samym świetle i kadrze, bez obróbki poza kadrowaniem — i z datą miesiąca po zabiegu, bo odrost trwa rok. Zakres konsultuję z Wami i z Waszą okręgową izbą lekarską przed publikacją."],
          ["Kto pisze treści medyczne?", "Przygotowuję strukturę, dane z wyszukiwania i wersję roboczą; lekarz z Waszej kliniki poprawia i zatwierdza wszystko, co medyczne, a podstrona pokazuje, kto i kiedy to zatwierdził. Porada medyczna zostaje po Waszej stronie."],
          ["Czy pacjenci znajdą klinikę przez ChatGPT i Perplexity?", "Coraz częściej, jeśli jest co zacytować. ChatGPT, Perplexity i Gemini powtarzają to, co mogą przeczytać: techniki, widełki grafów, ceny, etapy gojenia i numer PWZ lekarza, zapisane tekstem. Klinika, której cennik leży w obrazku albo za formularzem, wypada z odpowiedzi."],
          ["Pracujecie z klinikami spoza Polski?", "Tak. Pracuję z Warszawy, zdalnie, w całej Unii; faktura z JDG, rozliczenie w złotych albo w euro. Przy pacjentach z zagranicy każda wersja językowa jest pisana osobno, z własnymi widełkami cen dla swojego rynku."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie strony kliniki przeszczepu włosów: co mi wysłać"),
        p(
          "Podajcie nazwę kliniki i linki do strony oraz wizytówki Google, a także lekarzy wykonujących zabiegi, techniki, które macie w ofercie, kraje, z których przyjeżdżają pacjenci, i języki, w których sprzedajecie. W odpowiedzi dostajecie moje pierwsze poprawki i stałą cenę. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
