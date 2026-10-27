// Landing page fixture: Strona internetowa dla agenta nieruchomości (PL), group
// «realtor-website-design». New page. Market version for Polish pośrednicy w
// obrocie nieruchomościami (own JDG, agents building a name inside a biuro,
// small teams) — not a translation of realtor-website-design.en.
// Semantic core: ref/real-estate-finance.md (PL) has no measured on-topic
// phrases; heading phrases from BRIEF.md: «strona internetowa dla agenta
// nieruchomości» (H1, H2), «strona pośrednika nieruchomości» (metaTitle, H2),
// «strona z programu do ofert / kreatora czy na zamówienie», «ile kosztuje
// strona internetowa dla agenta nieruchomości». PAA (PL) used: «Ile procent
// bierze pośrednik od sprzedaży nieruchomości?» and «Na co należy uważać przy
// umowie z biurem nieruchomości?» → H2 for sellers (umowa na wyłączność,
// prowizja) + FAQ; «Jak sprawdzić agencję nieruchomości?» → trust H2.
// Intent: ref/intent-check-real-estate-finance.md — «strona dla agenta
// nieruchomości» vs «strona dla biura nieruchomości» 0 shared URLs → separate
// from /pl/strona-dla-agencji-nieruchomosci; agent SERP: rcs.pl, adnier,
// strefaagenta, real-agent.net, YouTube (agent-marketing content and builders).
// Polish context: Otodom, Morizon, Gratka, OLX as where buyers see listings
// (no «compete with portals» thesis); programs exporting listings (ASARI,
// Galactica Virgo, EstiCRM — general, «depending on the package»); zawód
// deregulowany, OC insurance, associations; RODO on forms.
// Prices: /pl/cennik — prosta strona 3000–6000 zł, pełna od 8500 zł, projekt
// graficzny w cenie.
// NOT on this page: pozycjonowanie agenta, wizytówka Google, frazy dzielnic
// (/pl/pozycjonowanie-strony-agenta-nieruchomosci — sibling); strona biura i
// dewelopera, katalog ofert (/pl/strona-dla-agencji-nieruchomosci,
// /pl/strona-dla-dewelopera — linked once); SEO katalogu (/pl/seo-dla-stron-nieruchomosci).
// Owner’s rules: every page covers AI search; never say there are no clients
// from the visitor’s segment.
import { p, h2, li, ol, link, k } from "./pt";

export const realtorWebsiteDesignPl = {
  lang: "pl",
  group: "realtor-website-design",
  slug: "strona-internetowa-dla-agenta-nieruchomosci",
  title: "Strona internetowa dla agenta nieruchomości",
  heading: "Strona internetowa dla agenta nieruchomości",
  excerpt:
    "Tworzę strony internetowe dla agentów nieruchomości i pośredników na własnej działalności: marka osobista, podstrony dzielnic, oferty ze zdjęciami i wideo, strona dla sprzedających i formularz wyceny mieszkania — projekt w cenie, ceny podane w cenniku.",
  seo: {
    metaTitle: "Strona dla pośrednika nieruchomości od 3000 zł | Bandziuk",
    metaDescription:
      "Strona internetowa dla agenta nieruchomości: marka osobista, dzielnice, oferty z wideo, wycena mieszkania, import ofert z programu. Projekt w cenie, od 3000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt + wykonanie, jedna cena", "Od 3000 zł", "Strona zostaje z Tobą po zmianie biura"],
  heroPhonePoints: ["Ile jest warte moje mieszkanie?", "Oferty z wideo", "Mokotów · Wilanów · Ursynów", "Zadzwoń · WhatsApp"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona internetowa dla agenta nieruchomości, projekt w cenie", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Strona agenta nieruchomości z podstronami dzielnic, ofertami importowanymi z programu, wideo, stroną dla sprzedających, formularzem wyceny i SEO lokalnym, projekt w cenie", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co dostajesz ze stroną internetową dla agenta nieruchomości",
      items: [
        { _key: k("o"), iconName: "image", title: "Twoja twarz i nazwisko zamiast stocku", text: "Sesja, krótki film, historia i specjalizacja" },
        { _key: k("o"), iconName: "map-pin", title: "Podstrona dla każdej dzielnicy i osiedla", text: "Twoje zdjęcia, komentarz do rynku z datą" },
        { _key: k("o"), iconName: "layers", title: "Oferty z programu, z wideo i spacerem 3D", text: "Bez ręcznego przepisywania ogłoszeń" },
        { _key: k("o"), iconName: "file-text", title: "Strona dla sprzedających", text: "Umowa na wyłączność, prowizja, plan sprzedaży" },
        { _key: k("o"), iconName: "phone", title: "Wycena mieszkania, telefon i WhatsApp", text: "Zgłoszenia zgodne z RODO, prosto do Ciebie" },
        { _key: k("o"), iconName: "sparkles", title: "Czytelna dla Google i asystentów AI", text: "Nazwisko, miasto, dzielnice i języki tekstem" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona agenta nieruchomości", value: "3000–6000 zł", note: "projekt w cenie" },
        { _key: k("r"), label: "Dzielnice, import ofert, wideo, wycena, SEO lokalne", value: "od 8500 zł", note: "projekt w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: strony nieruchomości i firm usługowych, które zaprojektowałem i zbudowałem",
      subtitle:
        "Cyprus VIP Estates to serwis nieruchomości luksusowych na Cyprze, który zaprojektowałem i zbudowałem od zera: katalog ofert z filtrami, interaktywna mapa, prezentacje wideo inwestycji, integracja z CRM i wersje po angielsku, niemiecku, polsku, rosyjsku i hebrajsku. Serwis przynosi zapytania od kupujących, a jego SEO prowadzę co miesiąc. Obok: warszawska firma remontowo-inwestycyjna z projektem premium, firma skanowania laserowego 3D, której ruch organiczny po przebudowie wzrósł 29-krotnie, wielojęzyczny serwis agencji edukacyjnej na dziesięć krajów i warsztat samochodowy z Warszawy.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "build-and-optimize-a-multilingual-real-estate-platform",
        "renovation-and-investment-website-with-premium-design",
        "architecture-website-rebuild-and-seo-scan",
        "full-multilingual-website-development-and-seo-for-student-services",
        "auto-repair-seo-and-ux-boost",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej dla agenta nieruchomości",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: proponuję listę podstron i podaję stałą cenę w widełkach z cennika.",
      contextLabel: "Imię i nazwisko, biuro lub obecna strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Jak pracujesz?", options: ["Samodzielnie, na własnej działalności", "W biurze, pod własnym nazwiskiem", "Mały zespół agentów"] },
        { _key: k("z"), question: "Co masz teraz?", options: ["Brak strony", "Stronę z programu do ofert", "Stronę z kreatora", "Profil na Facebooku i oferty na portalach"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Tworzę strony internetowe dla agentów nieruchomości — pośredników na własnej działalności, agentów, którzy w biurze budują markę pod własnym nazwiskiem, i małych zespołów. Projekt graficzny, wykonanie, teksty i uruchomienie robi jedna osoba, a cena jest znana z góry. Kupujący znajduje mieszkanie na Otodom, Morizonie, Gratce albo w OLX. Sprzedający, zanim podpisze umowę pośrednictwa, wpisuje w Google imię i nazwisko agenta. Twoja strona jest odpowiedzią na to drugie wyszukiwanie."),

        h2("Strona internetowa dla agenta nieruchomości: co sprawdza sprzedający przed podpisaniem umowy"),
        p("Właściciel mieszkania rozmawia zwykle z dwoma–trzema pośrednikami i porównuje ich wieczorem na telefonie. Pierwszy ekran strony ma mu odpowiedzieć, zanim przewinie:"),
        li("kim jesteś — zdjęcie, imię i nazwisko, miasto i dzielnice, a jeśli pracujesz w biurze, także jego nazwa"),
        li("czym się zajmujesz — mieszkania z rynku wtórnego, domy pod miastem, najem, nieruchomości dla inwestorów"),
        li("jak sprzedajesz — zdjęcia, wideo, home staging, prezentacje, kampanie poza portalami"),
        li("co mówią klienci — ocena z wizytówki Google i dwie–trzy opinie"),
        li("jak się skontaktować — telefon i WhatsApp jednym dotknięciem oraz przycisk „Wyceń moje mieszkanie”"),
        p("Hasło w stylu „Twój zaufany partner w świecie nieruchomości” nie odpowiada na żadne z tych pytań. „Sprzedaję mieszkania na Mokotowie i Ursynowie od 2016 roku” — odpowiada na trzy."),

        h2("Strona z programu do ofert lub kreatora czy strona agenta na zamówienie"),
        p("Programy, z których biura i agenci eksportują oferty na portale — ASARI, Galactica Virgo, EstiCRM i podobne — w części pakietów dają gotową stronę z automatycznym importem ofert. Do tego dochodzą kreatory z szablonami dla nieruchomości. To rozsądne rozwiązanie, gdy:"),
        li("zaczynasz i chcesz mieć oferty w sieci od pierwszego dnia za niewielki abonament"),
        li("klienci przychodzą głównie z polecenia, a strona ma być tylko wizytówką"),
        li("nie planujesz własnych tekstów o dzielnicach ani filmów"),
        p("Strona na zamówienie opłaca się, gdy budujesz markę osobistą i chcesz, żeby strona wyglądała jak Ty, a nie jak wiele innych stron z tego samego szablonu, gdy piszesz o swoich dzielnicach, nagrywasz wideo, obsługujesz kupujących z zagranicy albo chcesz, żeby strona została z Tobą po zmianie biura lub programu."),
        p("Strona na zamówienie nie oznacza rezygnacji z importu. Oferty mogą trafiać na nią z tego samego programu — przez eksport XML albo API — jeśli Twój pakiet na to pozwala. Sprawdzam to przed wyceną, zamiast obiecywać połączenie, którego może nie być."),

        h2("Marka osobista pośrednika nieruchomości na stronie: zdjęcia, wideo i historia"),
        p("Sprzedający wybiera człowieka, z którym przez kilka miesięcy będzie ustalał ceny, terminy prezentacji i negocjacje. Podstrona „O mnie” jest więc projektowana jako pierwsza:"),
        li("zdjęcia z sesji zrobionej dla strony — przy pracy, na Twoich ulicach, z zespołem — w jednym świetle i kadrze"),
        li("historia w kilku akapitach: skąd jesteś, od kiedy pracujesz w zawodzie, które dzielnice i typy nieruchomości znasz"),
        li("krótki film, w którym mówisz o sobie i o tym, jak pracujesz ze sprzedającymi"),
        li("liczby, które możesz udokumentować, na przykład liczba transakcji z ostatniego roku — bez ozdobników"),
        li("języki, w których obsługujesz klientów, zapisane tekstem"),
        p("Jeśli pracujesz w biurze, Twój kolor i logo stoją obok znaku biura w proporcjach, na które biuro się zgadza."),

        h2("Strona dla sprzedających: umowa na wyłączność, prowizja i plan sprzedaży"),
        p("Sprzedający pytają najczęściej o dwie rzeczy: ile procent bierze pośrednik i na co uważać przy umowie. Osobna podstrona odpowiada na oba pytania, zanim padną na spotkaniu:"),
        li("czym różni się umowa na wyłączność od otwartej i dlaczego proponujesz tę pierwszą"),
        li("co obejmuje Twoje wynagrodzenie: zdjęcia, wideo, ogłoszenia na portalach, prezentacje, negocjacje, pomoc przy dokumentach i u notariusza"),
        li("Twoja prowizja albo jej widełki, jeśli zdecydujesz się je podać, i kiedy jest należna"),
        li("plan sprzedaży krok po kroku, od wyceny do aktu notarialnego"),
        li("wzór umowy do pobrania, żeby sprzedający przeczytał ją spokojnie przed spotkaniem"),
        p("Jasno opisany proces skraca rozmowę o zaufaniu i zostawia czas na rozmowę o mieszkaniu."),

        h2("Oferty na stronie pośrednika: zdjęcia, wideo i spacer 3D"),
        p("Ogłoszenie na portalu ma narzucony układ i stoi obok dziesiątek podobnych. Na Twojej stronie ta sama oferta może być pokazana pełniej:"),
        li("duża galeria, która szybko się otwiera i przewija palcem na telefonie"),
        li("film i spacer 3D wysoko na stronie, ładowane dopiero po dotknięciu"),
        li("cena, metraż, piętro, czynsz i stan prawny w stałym bloku, zapisane tekstem"),
        li("rzut, mapa i kilka zdań o mieszkaniu i okolicy Twoimi słowami"),
        li("przycisk umówienia prezentacji z Twoim numerem telefonu"),
        p("Sprzedane nieruchomości zostają na stronie jako dowód Twojej pracy, w zakresie, na który zgodzili się klienci."),

        h2("Podstrony dzielnic i osiedli na stronie agenta nieruchomości"),
        p("Podstrona dzielnicy pokazuje to, czego nie pokaże portal: Twoją znajomość okolicy. Każda ma ten sam układ — opis Twoimi słowami, Twoje zdjęcia i krótki film, komunikacja, szkoły i zieleń jako fakty, oferty z tej okolicy i komentarz do cen z datą aktualizacji. Na końcu stoi Twoje zdjęcie z podpisem, że to Ty sprzedajesz w tej dzielnicy."),
        p(
          "Jak sprawić, żeby te podstrony pojawiały się w Google i w Mapach, opisuję na stronie ",
          link("pozycjonowanie strony agenta nieruchomości", "/pl/pozycjonowanie-strony-agenta-nieruchomosci"),
          ".",
        ),

        h2("Zaufanie do pośrednika nieruchomości w zawodzie deregulowanym"),
        p("Zawód pośrednika jest deregulowany, więc licencja nie jest wymagana, a sprzedający nie ma jednego rejestru, w którym sprawdzi agenta. Strona daje mu to, co może sprawdzić sam:"),
        li("pełne dane działalności: nazwa, NIP, adres, a w biurze — nazwa i dane biura"),
        li("informacja o ubezpieczeniu OC pośrednika"),
        li("przynależność do stowarzyszeń, certyfikaty i licencja zawodowa, jeśli ją masz"),
        li("opinie z wizytówki Google, z podanym źródłem, zamiast cytatów bez podpisu"),
        p("Jakie dane musisz podawać i w jakiej formie, ustal z biurem albo swoim stowarzyszeniem; strona ma na nie stałe miejsca."),

        h2("Formularz wyceny mieszkania i zapytania o ofertę zgodne z RODO"),
        p("Najwięcej zgłoszeń na stronie agenta przychodzi z trzech miejsc: formularza wyceny, zapytania o konkretną ofertę i przycisku WhatsApp. Formularz wyceny pyta o adres, metraż, piętro i stan mieszkania oraz telefon — bez automatycznej „wyceny w 30 sekund”, która nie zna stanu mieszkania ani okolicy. Odpowiadasz własną analizą, a to jest pierwszy krok do umowy."),
        p("Przy każdym formularzu jest klauzula informacyjna i link do polityki prywatności, a baner cookies pyta o zgodę przed uruchomieniem analityki. Zgłoszenia trafiają na Twoją skrzynkę, na telefon albo do programu, w którym prowadzisz klientów, jeśli przyjmuje dane z zewnątrz."),

        h2("Szybka strona agenta nieruchomości na telefonie, mimo wielu zdjęć"),
        p("Strona pośrednika waży więcej niż typowa strona firmy: dziesiątki zdjęć w każdej ofercie, filmy, mapy. Mimo to główna treść każdej podstrony pojawia się na telefonie w mniej niż 2,5 sekundy — próg, który Google uznaje za dobry. Zdjęcia są przycinane pod ekran i zapisywane w formatach WebP lub AVIF, galeria dociąga kolejne zdjęcia podczas przewijania, a film ładuje się dopiero po dotknięciu. Jeśli obsługujesz kupujących z zagranicy, strona dostaje wersję angielską albo ukraińską z osobnymi adresami podstron."),

        h2("Strona agenta nieruchomości, którą ChatGPT i Google AI Overviews potrafią przeczytać"),
        p("Ludzie pytają ChatGPT, Perplexity i podsumowania AI w Google: „dobry pośrednik do sprzedaży mieszkania na Bielanach”, „agent nieruchomości w Gdyni, który mówi po angielsku”. Asystent poleca tylko tych, o których potrafi coś przeczytać. Dlatego imię i nazwisko, miasto, dzielnice, typy nieruchomości, języki i dane kontaktowe są zapisane tekstem, zgodnie z wizytówką Google, dane strukturalne opisują Cię jako pośrednika, a każdy komentarz do rynku ma datę."),
        p(
          "Widoczność w odpowiedziach AI to dalsza, stała praca, opisana na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Ile kosztuje strona internetowa dla agenta nieruchomości"),
        p("Projekt graficzny jest w cenie w obu wariantach:"),
        li("Prosta strona agenta — strona główna, „O mnie”, kilka podstron dzielnic, wybrane oferty, strona dla sprzedających i formularz wyceny: od 3000 do 6000 zł."),
        li("Pełna strona z importem ofert z programu, podstronami dzielnic, wideo, wersją językową i SEO lokalnym: od 8500 zł."),
        p("Domena jest zarejestrowana na Ciebie, hosting jest na Twoim koncie, a kod i treści przekazuję przy uruchomieniu. Po zmianie biura zmieniasz logo i dane w stopce, a reszta strony zostaje. Abonamentu u mnie nie ma — płacisz za hosting, domenę i ewentualnie program do ofert."),
        ol("Brief: dzielnice, typy nieruchomości, link do profilu na portalu, zdjęcia, nazwa programu do ofert."),
        ol("Lista podstron i stała cena."),
        ol("Projekt najpierw na telefonie: strona główna, „O mnie” i podstrona dzielnicy."),
        ol("Wykonanie, teksty i uruchomienie z Search Console i analityką po zgodzie."),
        p(
          "Widełki są w ",
          link("cenniku", "/pl/cennik"),
          ", a o tym, jak buduję strony w ogóle, piszę na stronie ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ". Biura z pełnym katalogiem ofert i deweloperzy znajdą swoje strony: ",
          link("strona dla agencji nieruchomości", "/pl/strona-dla-agencji-nieruchomosci"),
          " i ",
          link("strona dla dewelopera", "/pl/strona-dla-dewelopera"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strona internetowa dla agenta nieruchomości: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona internetowa dla agenta nieruchomości?", "Od 3000 do 6000 zł za prostą stronę i od 8500 zł za pełną stronę z importem ofert, podstronami dzielnic, wideo i SEO lokalnym. Projekt graficzny jest w cenie. Po krótkim opisie Twojej pracy podaję stałą cenę."],
          ["Czy agent potrzebuje własnej strony, skoro jego oferty są na Otodom i OLX?", "Portale pokazują oferty, a nie agenta. Sprzedający, który wybiera pośrednika do umowy na wyłączność, sprawdza Ciebie: zdjęcia, opinie, dzielnice, sposób pracy. Strona jest jedynym miejscem, gdzie to wszystko jest razem i należy do Ciebie."],
          ["Czy oferty z mojego programu mogą pojawiać się na stronie automatycznie?", "Często tak. Programy takie jak ASARI, Galactica Virgo czy EstiCRM eksportują oferty na portale, a w wielu pakietach także na własną stronę, przez XML lub API. Sprawdzam, co pozwala Twój pakiet, przed wyceną."],
          ["Czy mogę podać na stronie swoją prowizję?", "Możesz podać stawkę albo widełki i opisać, co obejmuje wynagrodzenie i kiedy jest należne. Sprzedający zna wtedy koszt przed spotkaniem. Decyzja należy do Ciebie lub Twojego biura."],
          ["Co się stanie ze stroną, gdy zmienię biuro?", "Nic złego: domena, hosting, kod i treści są Twoje. Zmieniasz logo i dane biura w stopce, a podstrony dzielnic, opinie i filmy zostają."],
          ["Ile trwa stworzenie strony dla agenta nieruchomości?", "Prosta strona zwykle od dwóch do czterech tygodni od briefu, pełna z importem ofert od czterech do sześciu. Najwięcej zależy od zdjęć, filmów i tego, jak szybko odpowiada dostawca programu do ofert."],
          ["Czy robisz strony dla agentów spoza Warszawy?", "Tak, dla pośredników z całej Polski. Pracuję zdalnie, po polsku, angielsku albo rosyjsku. Zdjęcia do strony robi Twój fotograf według listy ujęć, którą przygotowuję."],
          ["Czy strona agenta będzie widoczna w ChatGPT?", "Strona jest zbudowana tak, żeby asystenci mogli ją przeczytać: fakty tekstem, dane strukturalne i daty. Polecanie w odpowiedziach na konkretne pytania to dalsza praca nad SEO i widocznością w AI, którą też prowadzę."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową dla agenta nieruchomości: co mi wysłać"),
        p(
          "Wyślij swoje imię i nazwisko, nazwę biura, jeśli w nim pracujesz, link do profilu na Otodom albo obecnej strony, dzielnice i typy nieruchomości, nazwę programu do ofert i dwie–trzy strony agentów, które Ci się podobają. Twoje zdjęcia albo filmy z ofert pomogą mi pokazać stronę główną, która wygląda jak Ty. Odpowiem listą podstron i stałą ceną. Skorzystaj z ",
          link("formularza powyżej", "#quote"),
          " albo napisz na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
