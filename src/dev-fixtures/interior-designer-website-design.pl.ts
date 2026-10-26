// Landing page fixture: Strona internetowa dla projektanta wnętrz (PL), group
// «interior-designer-website-design». New page. Market version for Polish
// projektanci i architekci wnętrz (own JDG, small pracownie) — not a
// translation of interior-designer-website-design.en.
// Semantic core: ref/home-services.md has no measured PL phrases; heading
// phrases from BRIEF.md and the intent check: «strona internetowa dla
// projektanta wnętrz» (H1, H2s), «strona dla pracowni projektowania wnętrz»
// (metaTitle, H2), «portfolio projektanta wnętrz», «cena projektu wnętrz za m²»,
// «projekt wnętrz online», «ile kosztuje strona internetowa dla projektanta
// wnętrz» (cost H2, FAQ).
// Intent: ref/intent-check-home-services.md — «strona dla projektanta wnętrz» vs
// «pozycjonowanie projektanta wnętrz» 1 shared URL (YouTube) → separate pages;
// the «strona» SERP mixes design studios and planner5d (consumers) → the page
// speaks to the designer from the first sentence.
// Polish context: mieszkania w stanie deweloperskim and zmiany lokatorskie,
// projekt koncepcyjny / wykonawczy / nadzór autorski / kompletacja, wycena za m²
// (designer’s own choice, no rates named), wizualizacje vs zdjęcia z realizacji,
// Instagram, Pinterest, Homebook, RODO on forms.
// Prices: /pl/cennik — prosta strona 3000–6000 zł, pełna od 8500 zł, projekt
// graficzny w cenie.
// NOT on this page: frazy, wizytówka Google, pozycje realizacji w Google,
// linki (/pl/pozycjonowanie-strony-projektanta-wnetrz — sibling); pracownie z własną
// ekipą wykończeniową (/pl/strona-internetowa-dla-firmy-budowlanej — linked
// once); programy do projektowania wnętrz (consumer intent).
// Owner’s rules: every page covers AI search; never say there are no clients
// from the visitor’s segment.
import { p, h2, li, link, k } from "./pt";

export const interiorDesignerWebsiteDesignPl = {
  lang: "pl",
  group: "interior-designer-website-design",
  slug: "strona-internetowa-dla-projektanta-wnetrz",
  title: "Strona internetowa dla projektanta wnętrz",
  heading: "Strona internetowa dla projektanta wnętrz",
  excerpt:
    "Tworzę strony internetowe dla projektantów i architektów wnętrz oraz małych pracowni: portfolio z dużymi zdjęciami, które szybko się otwiera, opisy realizacji, zakres usług i sposób wyceny, projekt online i formularz zapytania zgodny z RODO — projekt graficzny w cenie, od 3000 zł.",
  seo: {
    metaTitle: "Strona dla pracowni projektowania wnętrz | Bandziuk",
    metaDescription:
      "Strona internetowa dla projektanta wnętrz: szybkie portfolio, opisy realizacji, zakres usług i cena za m², projekt online, formularz RODO. Od 3000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt + wykonanie, jedna cena", "Od 3000 zł", "Portfolio, które nie każe czekać"],
  heroPhonePoints: ["Mieszkanie 62 m², Wilanów", "Koncepcja · Projekt wykonawczy", "Projekt online", "Zapytaj o termin"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona internetowa dla projektanta wnętrz, projekt graficzny w cenie", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Strona pracowni projektowania wnętrz z podstronami realizacji, usług i projektu online, formularzem zapytania, wersją angielską w razie potrzeby i podstawowym SEO lokalnym, projekt graficzny w cenie", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co dostajesz ze stroną internetową dla projektanta wnętrz",
      items: [
        { _key: k("o"), iconName: "image", title: "Duże zdjęcia realizacji bez czekania", text: "Przycięte pod ekran, ostre na dużym monitorze" },
        { _key: k("o"), iconName: "layers", title: "Podstrona dla każdej realizacji", text: "Założenia, ograniczenia, rozwiązanie, autorzy zdjęć" },
        { _key: k("o"), iconName: "file-text", title: "Zakres usług i sposób wyceny", text: "Koncepcja, wykonawczy, nadzór — za m² lub ryczałt" },
        { _key: k("o"), iconName: "message-circle", title: "Formularz, który odsiewa zapytania", text: "Metraż, stan mieszkania, termin, budżet" },
        { _key: k("o"), iconName: "map-pin", title: "Miasto i obszar pracy zapisane tekstem", text: "Projekty na miejscu i online w całej Polsce" },
        { _key: k("o"), iconName: "sparkles", title: "Czytelna dla Google i asystentów AI", text: "Nazwa pracowni, styl, usługi i miasto tekstem" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona projektanta wnętrz", value: "3000–6000 zł", note: "projekt graficzny w cenie" },
        { _key: k("r"), label: "Realizacje, usługi, projekt online, formularz, SEO lokalne", value: "od 8500 zł", note: "projekt graficzny w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: strony firm, które klient wybiera po zdjęciach i opisie pracy",
      subtitle:
        "Dla warszawskiej firmy zajmującej się remontami, wykończeniami i inwestycjami w nieruchomości zaprojektowałem i zbudowałem stronę o wyglądzie premium, na której klienta przekonują skończone wnętrza. Cyprus VIP Estates to serwis nieruchomości luksusowych w pięciu językach, zbudowany od zera, z katalogiem z filtrami, mapą, wideo i zapytaniami trafiającymi do CRM. Strona ScanM2 — skanowanie laserowe 3D i modele BIM — stała na kreatorze i przez dwa lata nie dała ani jednego zapytania; przeniosłem ją na WordPress z zachowaniem wyglądu i dziś ruch z Google jest 29 razy większy, a zapytania wpadają każdego tygodnia. Strona psychoterapeuty z Mediolanu przeszła na Next.js i Sanity razem z 468 wpisami i przekierowaniami 301 ze wszystkich starych adresów. Warszawski warsztat samochodowy dostał SEO lokalne, pracę nad Mapami Google i nowe podstrony usług. Z pracownią wnętrz łączy je jedno: klient najpierw ogląda, potem czyta, jak firma pracuje, i dopiero wtedy pisze.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "renovation-and-investment-website-with-premium-design",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "architecture-website-rebuild-and-seo-scan",
        "psychotherapist-website-milan",
        "auto-repair-seo-and-ux-boost",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej dla projektanta wnętrz",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: proponuję listę podstron — portfolio, realizacje, usługi — i podaję stałą cenę w widełkach z cennika.",
      contextLabel: "Nazwa pracowni, strona lub Instagram",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Co masz teraz?", options: ["Tylko Instagram", "Profil na Homebooku", "Stronę z kreatora: Wix, Squarespace", "Starą stronę na WordPressie"] },
        { _key: k("z"), question: "Kogo strona ma przyciągać?", options: ["Właścicieli mieszkań od dewelopera", "Inwestorów budujących dom", "Klientów projektu online z innych miast", "Klientów komercyjnych: lokale, biura, gastronomia"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Tworzę strony internetowe dla projektantów wnętrz, architektów wnętrz i małych pracowni projektowych: projektuję, programuję, piszę teksty i uruchamiam stronę sam, a cenę znasz przed startem. Instagram, Pinterest i Homebook pokazują Twoje wnętrza. Własna strona odpowiada na to, o co klient pyta, zanim napisze: co dostanie, jak wygląda współpraca i od czego zależy cena."),

        h2("Strona internetowa dla projektanta wnętrz: co sprawdza klient przed pierwszą konsultacją"),
        p("Ktoś, kto właśnie odebrał klucze od dewelopera albo kupił dom do remontu, porównuje zwykle kilka pracowni — wieczorem, na telefonie. Pierwszy ekran ma mu odpowiedzieć bez przewijania:"),
        li("jedno duże zdjęcie skończonego wnętrza zamiast pokazu slajdów"),
        li("kim jesteś i gdzie pracujesz — „Pracownia projektowania wnętrz, Kraków i okolice, projekty online w całej Polsce” jednym zdaniem"),
        li("czym się zajmujesz — mieszkania, domy, kuchnie i łazienki, lokale usługowe"),
        li("jak zacząć — przycisk „Zapytaj o projekt”, telefon i e-mail"),
        p("Ogólne hasło o „wnętrzach z duszą” klientowi nic nie mówi. Zdanie „Projektujemy mieszkania w stanie deweloperskim w Krakowie, od koncepcji po nadzór autorski” od razu pokazuje mu, czy trafił we właściwe miejsce."),

        h2("Portfolio projektanta wnętrz na stronie: duże zdjęcia, które szybko się ładują"),
        p("Wnętrza sprzedaje się zdjęciami, a sesja od fotografa wnętrz to ciężkie pliki w wysokiej rozdzielczości. Wrzucone bez obróbki sprawiają, że portfolio na telefonie otwiera się tak długo, że klient rezygnuje przed drugim kadrem. Dlatego:"),
        li("każde zdjęcie zapisuję w kilku szerokościach i w formacie WebP lub AVIF — telefon dostaje lekki plik, duży monitor ostry"),
        li("pierwszy kadr realizacji pojawia się od razu, kolejne doładowują się podczas przewijania"),
        li("galeria otwiera się na pełnym ekranie i przesuwa palcem"),
        li("realizacje można filtrować: mieszkania, domy, kuchnie i łazienki, lokale"),
        p("Przy każdej realizacji jest miejsce na nazwisko fotografa i stylistki. Na stronę trafiają tylko zdjęcia, do których masz prawa z umowy z fotografem; przy sesjach robionych dla magazynu albo dewelopera warto to sprawdzić przed publikacją."),

        h2("Opis realizacji na stronie projektanta wnętrz: założenia, ograniczenia i rozwiązanie"),
        p("Same zdjęcia pokazują gust. Opis pokazuje sposób myślenia, a za niego klient płaci przy projekcie. Każda podstrona realizacji ma ten sam układ:"),
        li("metraż, typ budynku i miasto — „mieszkanie 58 m² w bloku z lat 70., Gdańsk Przymorze”"),
        li("założenia: kto tam mieszka, w ogólnych słowach, co nie działało i czego chcieli inwestorzy"),
        li("ograniczenia: ściana nośna, pion kanalizacyjny w złym miejscu, ciemna kuchnia, budżet albo termin przeprowadzki"),
        li("rozwiązanie: zmiany układu, materiały, meble na wymiar, na co poszedł budżet"),
        li("rzut przed i po oraz zdjęcia „przed”, jeśli inwestor się zgodził"),
        li("z kim pracowałeś: wykonawca, stolarz, fotograf"),
        p("Wizualizacje podpisuję jako wizualizacje, a zdjęcia z realizacji jako zdjęcia, bo klient to rozróżnia. Opis stoi obok zdjęć jako zwykły tekst strony, nie napis na grafice — przeczyta go klient, Google i asystent AI."),

        h2("Zakres usług i cena projektu wnętrz za m² na stronie pracowni"),
        p("Klient, który pierwszy raz zamawia projekt, nie wie, czym koncepcja różni się od projektu wykonawczego ani czy płaci za metr, za pomieszczenie, czy ryczałtem. Podstrona usług wyjaśnia to, zanim padnie pytanie „ile to kosztuje”:"),
        li("projekt koncepcyjny: układ funkcjonalny, moodboard, wizualizacje 3D"),
        li("projekt wykonawczy: rysunki dla ekipy, zestawienie materiałów i wyposażenia, orientacyjny kosztorys"),
        li("nadzór autorski i kompletacja: wizyty na budowie, zamówienia, odbiory"),
        li("konsultacja godzinowa dla tych, którzy potrzebują tylko porady"),
        li("sposób wyceny: stawka za m², za pomieszczenie albo ryczałt, z ceną „od”, jeśli zdecydujesz się ją pokazać"),
        p("Cena „od” albo minimalny metraż odsiewa zapytania, które i tak nie skończyłyby się umową. Jeśli wolisz rozmawiać o pieniądzach dopiero na konsultacji, blok z ceną zostaje pusty, a opis zakresu i tak robi swoje."),

        h2("Strona projektanta wnętrz dla klientów z mieszkaniem w stanie deweloperskim"),
        p("Duża część zleceń w Polsce to mieszkania z rynku pierwotnego, odbierane w stanie deweloperskim. Taki klient ma konkretne pytania i konkretny termin: przeprowadzkę albo koniec najmu. Osobna podstrona dla niego mówi:"),
        li("kiedy zacząć projekt — najlepiej przed odbiorem, póki można zgłosić zmiany lokatorskie"),
        li("co obejmuje projekt mieszkania pod klucz i jak przebiega krok po kroku"),
        li("jak wygląda współpraca z ekipą wykończeniową — polecasz swoją czy prowadzisz nadzór nad ekipą klienta"),
        li("przykłady z podobnych osiedli i metraży"),
        p(
          "Pracownie, które same prowadzą wykończenia z własną ekipą, sprzedają raczej jak firma budowlana — dla nich jest strona ",
          link("strona internetowa dla firmy budowlanej", "/pl/strona-internetowa-dla-firmy-budowlanej"),
          ".",
        ),

        h2("Projekt wnętrz online na stronie pracowni: klienci z innych miast"),
        p("Projekt online pozwala pracować z klientami spoza Twojego miasta: przysyłają rzut, wymiary i zdjęcia, a dostają koncepcję, wizualizacje i listę zakupów z linkami do sklepów. Na stronie potrzebuje osobnej podstrony, bo to inny klient i inna decyzja: pakiety z ceną za pomieszczenie albo za metr, lista tego, co klient dostaje i ile poprawek obejmuje cena, instrukcja, jak zmierzyć pomieszczenie, i płatność albo rezerwacja terminu online."),

        h2("Formularz zapytania o projekt wnętrz zgodny z RODO"),
        p("Zwykły formularz kontaktowy przyniesie wszystko: od pytania o kolor ścian po dom 200 m² na drugim końcu Polski. Formularz zapytania o projekt pyta o to, o co i tak pytasz w pierwszych minutach rozmowy:"),
        li("rodzaj nieruchomości i metraż"),
        li("stan: deweloperski, do remontu, zamieszkane"),
        li("zakres: koncepcja, pełny projekt, nadzór, projekt online"),
        li("planowany termin i widełki budżetu do wyboru"),
        li("skąd klient o Tobie wie — Instagram, Homebook, polecenie, Google"),
        p("Pod formularzem jest informacja, kto i w jakim celu przetwarza dane, zgodnie z RODO; narzędzia analityczne włączają się dopiero po zgodzie w banerze cookies. Zapytania trafiają na Twoją skrzynkę albo na telefon, a klient może od razu wybrać termin konsultacji w kalendarzu."),

        h2("Instagram, Homebook czy własna strona projektanta wnętrz"),
        p("Na Instagramie i Pinterest klienci zbierają inspiracje, a na Homebooku i w podobnych serwisach szukają pracowni. Warto tam być. Profil pokazuje jednak zdjęcia w układzie narzuconym przez platformę, a to, kto je zobaczy, ustala algorytm. Własna strona trzyma w jednym miejscu, które należy do Ciebie, pełne opisy realizacji, zakres usług, sposób wyceny i opinie. Link w profilu prowadzi wtedy do konkretnej realizacji albo usługi, a nie tylko na stronę główną."),
        p(
          "Jak strona i profile pojawiają się w Google, opisuję na stronie ",
          link("pozycjonowanie projektanta wnętrz", "/pl/pozycjonowanie-strony-projektanta-wnetrz"),
          ".",
        ),

        h2("Szablon czy strona na zamówienie dla pracowni projektowania wnętrz"),
        p("Szablon na Wixie, Squarespace albo WordPressie to rozsądny start, gdy zaczynasz, masz kilka realizacji, klienci przychodzą z polecenia i lubisz sam poprawiać podstrony w edytorze. Strona na zamówienie opłaca się, gdy portfolio przerosło galerię szablonu, gdy chcesz osobnych podstron realizacji, usług i projektu online, które z czasem ściągają ludzi z Google, gdy potrzebujesz wersji angielskiej dla klientów z zagranicy albo gdy strona ma wyglądać jak Twoje wnętrza, a nie jak strony innych pracowni z tego samego szablonu."),

        h2("Strona projektanta wnętrz, którą ChatGPT i Google AI Overviews potrafią przeczytać"),
        p("Coraz częściej klient wpisuje pytanie nie w wyszukiwarkę, lecz w ChatGPT, Perplexity albo podsumowania AI w Google: „projektant wnętrz w Poznaniu do mieszkania w stanie deweloperskim”, „kto zrobi projekt łazienki online”. Asystent poleca tylko pracownie, o których potrafi coś przeczytać. Dlatego nazwa pracowni, miasto, obszar pracy, rodzaje projektów, styl, zakres usług i sposób wyceny są zapisane tekstem, tak samo jak w wizytówce Google, realizacje mają opisy, a dane strukturalne spinają te fakty."),
        p(
          "Żeby asystenci polecali pracownię w swoich odpowiedziach, potrzebna jest dalsza praca — opisuję ją na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Ile kosztuje strona internetowa dla projektanta wnętrz"),
        p("Oba warianty obejmują projekt graficzny:"),
        li("Prosta strona projektanta wnętrz — strona główna, portfolio, kilka opisów realizacji, usługi, „O mnie” i formularz: od 3000 do 6000 zł."),
        li("Pełna strona pracowni z podstronami realizacji, usług i projektu online, formularzem zapytania, wersją angielską w razie potrzeby i podstawowym SEO lokalnym: od 8500 zł."),
        p(
          "Domena i hosting są zarejestrowane na Ciebie, a kod i treści przekazuję przy uruchomieniu; później płacisz tylko za hosting i domenę. Stała praca nad wizytówką Google i Mapami to osobna usługa — ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ". Wszystkie widełki znajdziesz w ",
          link("cenniku", "/pl/cennik"),
          ", a mój sposób budowania stron opisuje strona ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strona internetowa dla projektanta wnętrz: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona internetowa dla projektanta wnętrz?", "Prosta strona kosztuje 3000–6000 zł, a pełna strona pracowni z podstronami realizacji, usług i projektu online oraz podstawowym SEO lokalnym — od 8500 zł. Obie ceny obejmują projekt graficzny. Gdy opiszesz mi swoją pracownię, podam stałą kwotę."],
          ["Czy projektant wnętrz potrzebuje strony, skoro ma Instagram?", "Instagram pokazuje zdjęcia ludziom, którzy już Cię obserwują. Strona odpowiada tym, którzy szukają projektanta w Google albo pytają asystenta AI, i zbiera w jednym miejscu realizacje z opisem, zakres usług i sposób wyceny. Najlepiej działają razem: profil linkuje do konkretnych podstron."],
          ["Czy podawać na stronie cenę projektu wnętrz za m²?", "To Twoja decyzja. Warto opisać, za co płaci klient — koncepcja, projekt wykonawczy, nadzór — i jak liczysz: za metr, za pomieszczenie albo ryczałtem. Cena „od” odsiewa zapytania, które nie pasują, ale strona działa też bez niej."],
          ["Czy sam dodam nowe realizacje?", "Tak. Nowa realizacja to formularz w panelu: tytuł, miasto, metraż, opis, zdjęcia i podpisy. Rozmiary zdjęć, układ i szybkość strona ustawia sama, więc nowy projekt wygląda jak poprzednie bez dotykania kodu."],
          ["Czy przeniesiesz moją stronę z Wixa bez utraty pozycji w Google?", "Tak. Przed uruchomieniem każdy stary adres dostaje przekierowanie 301 na nową podstronę, a tytuły i opisy realizacji przechodzą razem z nim. Ten sam sposób zastosowałem przy przenosinach 468 wpisów psychoterapeuty z Mediolanu."],
          ["Czy pracujesz z projektantami spoza Warszawy?", "Tak, z pracowniami z całej Polski. Wszystko odbywa się zdalnie: rozmawiamy online po polsku, angielsku albo rosyjsku, uwagi do projektu zostawiasz w udostępnionym pliku, a stronę uruchamiam na Twoim hostingu."],
          ["Czy strona pracowni będzie widoczna w ChatGPT?", "Buduję ją tak, by asystent AI miał co przeczytać: dane pracowni zapisane tekstem, opisane realizacje, dane strukturalne. To warunek konieczny; żeby ChatGPT wymieniał Twoją pracownię przy konkretnych pytaniach, potrzebne jest jeszcze pozycjonowanie w AI, które również prowadzę."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową dla projektanta wnętrz: co mi wysłać"),
        p(
          "Wyślij nazwę pracowni, link do obecnej strony albo Instagrama, miasto i okolice, w których robisz projekty na miejscu, zakres usług i sposób wyceny, linki do zdjęć czterech–sześciu realizacji, od których ma się zaczynać portfolio, i dwie–trzy strony pracowni, które Ci się podobają. W odpowiedzi dostaniesz plan podstron i stałą cenę. Skorzystaj z ",
          link("formularza powyżej", "#quote"),
          " albo napisz na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
