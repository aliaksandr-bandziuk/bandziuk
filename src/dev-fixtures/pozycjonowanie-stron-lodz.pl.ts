// Landing page fixture: Pozycjonowanie stron Łódź (PL), group
// «pozycjonowanie-stron-lodz». City page, stage 3 pilot (BRIEF.md).
// Semantic core (ref/city-keywords.md, ref/pl-cities.md): pozycjonowanie stron
// łódź 590 · agencja interaktywna łódź 260 · agencja marketingowa łódź 260 ·
// pozycjonowanie stron internetowych łódź 210 · pozycjonowanie stron cennik
// łódź 50 · pozycjonowanie stron łódź opinie 30. Also in headings/FAQ:
// «agencja SEO Łódź», «audyt SEO Łódź», «pozycjonowanie lokalne / wizytówka
// Google w Łodzi».
// PAA (pl-cities): Ile kosztuje pozycjonowanie strony w 2026? Ile kosztuje
// dobre pozycjonowanie strony? Jak długo trwa pozycjonowanie strony? Czy
// pozycjonowanie stron ma sens? Kto zajmuje się pozycjonowaniem stron? Jak
// samemu pozycjonować stronę? — all in H2 or FAQ.
// Intent (ref/intent-check-pl-cities.md): «pozycjonowanie stron łódź» vs
// «tworzenie stron internetowych łódź» 0 shared URLs, 1 shared domain → two
// pages. Łódź SEO SERP: local agencies, national agencies with city pages, a
// regional portal, Facebook — fragmented → one page with all phrases.
// City angle (no doorway): textile heritage turned into services, business
// services centres (BPO/SSC, IT), logistics at the A1/A2 junction, clothing
// production and wholesale in the agglomeration, universities and medicine,
// gastronomy around Piotrkowska; districts and agglomeration towns in queries
// (Bałuty, Widzew, Retkinia, Zgierz, Pabianice, Aleksandrów Łódzki);
// Ukrainian- and English-language searches; buyers checking «opinie».
// Large city → stałe pozycjonowanie od 3500 zł, przy silnej konkurencji od
// 5500 zł.
// NOT on this page: the website build (/pl/tworzenie-stron-internetowych-lodz);
// wizytówka Google in depth (/pl/oferty/pozycjonowanie-lokalne); manufacturing
// and restaurant detail (industry pages, linked once); Google Ads, social
// media, e-commerce (not offered).
// Owner’s rules: PL form «pozycjonowanie strony X»; AI search H2; never say
// there are no clients from the visitor’s city or industry; remote from Warsaw.
import { p, h2, h3, li, ol, link, k } from "./pt";

export const pozycjonowanieStronLodzPl = {
  lang: "pl",
  group: "pozycjonowanie-stron-lodz",
  slug: "pozycjonowanie-stron-lodz",
  title: "Pozycjonowanie stron Łódź",
  heading: "Pozycjonowanie stron w Łodzi",
  excerpt:
    "Pozycjonowanie stron w Łodzi prowadzę dla firm z miasta i aglomeracji łódzkiej: audyt SEO, poprawki techniczne, podstrony usług z osiedlami i miastami okolicy, wizytówka Google i widoczność w odpowiedziach AI. Pracuję sam, od audytu po zmiany w kodzie, z cenami opublikowanymi w cenniku.",
  seo: {
    metaTitle: "SEO Łódź: audyt, Mapy Google i AI | Bandziuk",
    metaDescription:
      "Pozycjonowanie stron internetowych w Łodzi: audyt SEO, podstrony osiedli i miast aglomeracji, wizytówka Google, widoczność w AI. Audyt od 1000 zł, cennik jawny.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Specjalista SEO, nie agencja", "Audyt od 1000 zł", "Ceny jawne w cenniku"],
  heroPhonePoints: ["Fizjoterapia Łódź Widzew", "Zadzwoń", "Twoja firma w Mapach", "Poleca ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO strony firmy z Łodzi: strona, wizytówka Google, łódzka konkurencja", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO: podstrony usług, osiedli i miast aglomeracji, poprawki techniczne, dane strukturalne", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie strony firmy z Łodzi", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje pozycjonowanie stron w Łodzi",
      items: [
        { _key: k("o"), iconName: "search", title: "Audyt na tle łódzkiej konkurencji", text: "Które frazy są realne w Waszej branży i dzielnicy" },
        { _key: k("o"), iconName: "layers", title: "Podstrony osiedli i miast aglomeracji", text: "Bałuty, Retkinia, Zgierz, Pabianice — gdzie pracujecie" },
        { _key: k("o"), iconName: "gauge", title: "Zmiany w kodzie robione od razu", text: "Szybkość, indeksowanie, przekierowania, tytuły" },
        { _key: k("o"), iconName: "map-pin", title: "Wizytówka Google i opinie", text: "Kategorie, usługi, obszar działania, odpowiedzi" },
        { _key: k("o"), iconName: "sparkles", title: "Obecność w odpowiedziach AI", text: "ChatGPT, Perplexity, podsumowania AI w Google" },
        { _key: k("o"), iconName: "trending-up", title: "Raport z zapytań, nie z samych pozycji", text: "Telefony, formularze i rezerwacje z wyszukiwarki" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO strony firmy z Łodzi", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe pozycjonowanie w Łodzi", value: "od 3500 zł / mies.", note: "przy silnej konkurencji od 5500 zł", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: firmy usługowe i produkcyjne, którym klientów daje wyszukiwarka",
      subtitle:
        "Firma skanowania laserowego 3D i modelowania BIM — po przebudowie strony ma 29 razy większy ruch organiczny — oraz warszawskie firmy usługowe: warsztat samochodowy, pracownia renowacji felg, firma remontowo-inwestycyjna i agencja edukacyjna z serwisem dla dziesięciu krajów. Każda z nich, jak wiele łódzkich firm, konkuruje w dużym mieście z dziesiątkami podobnych ofert i potrzebuje podstron, które odpowiadają na konkretne wyszukiwania.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "architecture-website-rebuild-and-seo-scan",
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "renovation-and-investment-website-with-premium-design",
        "full-multilingual-website-development-and-seo-for-student-services",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena pozycjonowania strony firmy z Łodzi",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: od czego zacząłbym na stronie i w wizytówce, ile to potrwa i jaka będzie stała cena.",
      contextLabel: "Nazwa firmy lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Komu sprzedajecie?", options: ["Klientom indywidualnym z Łodzi", "Firmom z regionu", "Firmom z całej Polski", "Jednym i drugim"] },
        { _key: k("z"), question: "Kto teraz zajmuje się SEO?", options: ["Agencja", "Freelancer", "Robimy sami", "Nikt"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Pozycjonowanie stron w Łodzi to usługa, którą wykonuję dla firm z miasta i z aglomeracji łódzkiej: audyt SEO, zmiany w kodzie, nowe podstrony usług, porządek w wizytówce Google i obecność w odpowiedziach AI. Nie jestem agencją — wszystko robię osobiście, od analizy po wdrożenie. Pracuję z Warszawy, a z łódzkimi firmami współpracuję zdalnie: krótkie rozmowy online, jeden wspólny plan zadań i miesięczny raport."),

        h2("Pozycjonowanie stron Łódź: zakres pracy dla firm z miasta i aglomeracji"),
        p("W dużym mieście nie wystarczy jedna strona główna z napisem „Łódź” w stopce. Pozycjonowanie stron internetowych w Łodzi składa się z kilku części, które robię w jednej współpracy:"),
        ol("Audyt strony, wizytówki i firm, które dziś zajmują Wasze frazy."),
        ol("Poprawki techniczne, które blokują wzrost: indeksowanie, szybkość, powielone tytuły, przekierowania."),
        ol("Podstrony usług, a tam, gdzie ma to sens, także osiedli i miast aglomeracji."),
        ol("Wizytówka Google uzgodniona ze stroną i katalogami."),
        ol("Treści, z których korzystają ChatGPT i podsumowania AI w Google, oraz raport z telefonów i zapytań."),

        h2("Łódź po przemyśle włókienniczym: jakie firmy potrzebują pozycjonowania stron"),
        p("Łódź wyrosła na przemyśle włókienniczym, a dawne fabryki zamieniły się w lofty, biura, hotele i centra handlowe. Gospodarka miasta jest dziś bardziej różnorodna, niż sugeruje ta historia, i każda z jej części szuka klientów w wyszukiwarce inaczej:"),
        li("centra usług dla biznesu i firmy IT zatrudniają wielu specjalistów, którzy potrzebują mieszkań, przedszkoli, lekarzy, kursów językowych i usług w pobliżu biura"),
        li("firmy logistyczne i magazyny przy skrzyżowaniu autostrad A1 i A2 sprzedają usługi firmom z całej Polski, więc ich frazy często w ogóle nie zawierają nazwy miasta"),
        li("producenci odzieży, tkanin i wyrobów tekstylnych z Łodzi, Rzgowa czy Pabianic szukają odbiorców hurtowych i zleceń szycia"),
        li("uczelnie, uniwersytet medyczny i duża liczba prywatnych gabinetów tworzą rynek usług medycznych i edukacyjnych"),
        li("restauracje, kawiarnie i kluby przy Piotrkowskiej i w odnowionych fabrykach walczą o gości wieczorem i w weekend"),
        p("Łódź leży blisko Warszawy, więc łódzka firma B2B — biuro rachunkowe, software house, firma szkoleniowa czy transportowa — często walczy o tych samych klientów co firmy ze stolicy. Dla niej pozycjonowanie to nie tylko frazy z „Łódź”, ale też ogólne zapytania branżowe, w których wygrywa lepiej opisana usługa, a nie adres."),
        p(
          "Firmy produkcyjne i hurtowe znajdą szczegóły na stronie ",
          link("pozycjonowanie strony firmy produkcyjnej", "/pl/pozycjonowanie-strony-firmy-produkcyjnej"),
          ", a lokale gastronomiczne — na stronie ",
          link("pozycjonowanie restauracji", "/pl/pozycjonowanie-restauracji"),
          ".",
        ),

        h2("Jak szukają klienci w Łodzi: osiedla, miasta aglomeracji i inne języki"),
        p("Łodzianie rzadko piszą samo „Łódź”, gdy chodzi o usługę na co dzień. W wyszukiwarce widać dzielnice i osiedla: „stomatolog Retkinia”, „mechanik Bałuty”, „żłobek Widzew”, „fizjoterapia Teofilów”, „weterynarz Chojny”. Mieszkańcy aglomeracji wpisują swoje miasto — Zgierz, Pabianice, Aleksandrów Łódzki, Konstantynów Łódzki, Ozorków, Tuszyn, Stryków, Koluszki — i oczekują firmy z dojazdem albo z siedzibą po drodze do pracy w Łodzi."),
        p("Część wyszukiwań jest po ukraińsku: wiele osób z Ukrainy pracuje w łódzkich magazynach, zakładach produkcyjnych i usługach. Po angielsku szukają studenci zagraniczni, przede wszystkim na kierunkach medycznych, i pracownicy międzynarodowych centrów usług. Strona, która dla tych grup ma choć kilka podstron w ich języku, dostaje zapytania, których konkurencja w ogóle nie widzi."),

        h2("Pozycjonowanie stron internetowych w Łodzi: kto jest w wynikach i jak czytać opinie"),
        p("Wyniki dla „pozycjonowanie stron Łódź” zajmują lokalne agencje, ogólnopolskie firmy z podstroną dla Łodzi, pojedynczy specjaliści, profile na Facebooku i regionalne portale. Na „agencja interaktywna Łódź” i „agencja marketingowa Łódź” wychodzą głównie firmy od kampanii i mediów społecznościowych, a na zapytania o tworzenie stron — zupełnie inne nazwy. Rynek jest rozdrobniony i trudno go porównać jedną listą."),
        p("Wiele osób wpisuje też „pozycjonowanie stron Łódź opinie”. Opinie w Google mówią sporo o kontakcie i terminowości, mniej o samych wynikach. Lepszym sprawdzianem są konkretne pytania: czy w raporcie są telefony i zapytania, kto wprowadza zmiany na stronie i czy umowę da się wypowiedzieć bez czekania roku."),

        h2("Agencja SEO w Łodzi czy specjalista, który sam wprowadza zmiany"),
        h3("Kiedy lepsza będzie agencja SEO"),
        p("Gdy potrzebujecie naraz pozycjonowania, Google Ads, mediów społecznościowych i grafiki, agencja z kilkoma działami ma sens. Płacicie wtedy za koordynację wielu osób, ale macie wszystko w jednym miejscu."),
        h3("Kiedy wystarczy jeden specjalista SEO"),
        p("Gdy chodzi przede wszystkim o miejsce w Google, w Mapach i w odpowiedziach AI. U mnie nie ma opiekuna klienta ani przekazywania zadań: ta sama osoba czyta dane, pisze podstronę, wprowadza ją w WordPressie lub Next.js i tłumaczy wynik. Ceny są opublikowane, a reklam i mediów społecznościowych nie prowadzę."),

        h2("Audyt SEO w Łodzi: lista poprawek przed stałą współpracą"),
        p("Audyt to osobna usługa i dla części firm wystarcza na długo. Przechodzę przez stronę, Google Search Console, wizytówkę i wyniki w Waszej branży w Łodzi, a w raporcie odpowiadam na pytania:"),
        li("co dziś przeszkadza Google w czytaniu i wyświetlaniu strony"),
        li("które usługi, osiedla albo miasta okolicy nie mają podstrony, choć ktoś ich szuka"),
        li("na jakie frazy łódzcy konkurenci są wysoko i które z nich da się zdobyć w rozsądnym czasie"),
        li("co ChatGPT i podsumowania AI w Google odpowiadają, gdy ktoś pyta o Waszą usługę w Łodzi"),
        p(
          "Zakres opisuję na stronie ",
          link("audyt SEO strony internetowej", "/pl/oferty/audyt-seo-strony-internetowej"),
          ".",
        ),

        h2("Pozycjonowanie lokalne w Łodzi: wizytówka Google dla Śródmieścia, Bałut i Widzewa"),
        p(
          "Łódź jest duża, a Mapy Google pokazują firmy położone blisko szukającego. Gabinet w Śródmieściu walczy o pacjentów z centrum, a klient z Widzewa albo z Pabianic widzi głównie firmy ze swojej okolicy. Wizytówka dostaje trafną kategorię główną, usługi, zdjęcia i opisany obszar działania; strona — podstrony tych części miasta i aglomeracji, do których faktycznie dojeżdżacie. Firmom z kilkoma lokalami zakładam osobną wizytówkę i podstronę dla każdego z nich. Więcej o Mapach na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Pozycjonowanie firm z Łodzi w ChatGPT i Google AI Overviews (GEO, AEO)"),
        p("Studenci, nowi mieszkańcy i pracownicy centrów usług często zaczynają od pytania do asystenta: „lekarz w Łodzi mówiący po angielsku”, „hurtownia tkanin pod Łodzią”, „restauracja na Piotrkowskiej z salą na 40 osób”. Asystent wskaże tę firmę, której strona jednoznacznie odpowiada na takie pytanie. Ta praca nazywa się GEO (generative engine optimization) albo AEO (answer engine optimization) i jest częścią pozycjonowania:"),
        li("konkretne zdania o usługach, lokalizacji, godzinach, językach i cenach"),
        li("dane strukturalne zgodne z wizytówką Google"),
        li("odpowiedzi na pytania, które klienci zadają przez telefon albo w wiadomościach"),
        p(
          "Przed rozpoczęciem i potem co jakiś czas sprawdzam, jak asystenci opisują Waszą firmę. Więcej na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Czy pozycjonowanie stron w Łodzi ma sens i co zrobić samemu"),
        p("Ma sens, gdy łodzianie albo firmy z Polski wpisują Waszą usługę w wyszukiwarkę, a zapytania trafiają dziś do konkurencji. Nie ma sensu, gdy klientów macie z jednego stałego źródła i nikt Was nie szuka. Bez żadnych kosztów możecie:"),
        li("uzupełnić wizytówkę Google, dodać zdjęcia i prosić klientów o opinie"),
        li("napisać osobną podstronę dla każdej usługi, z Łodzią lub osiedlem w tytule, np. „Rehabilitacja kręgosłupa — Łódź Widzew”"),
        li("założyć Google Search Console i co miesiąc sprawdzać, na co ludzie wchodzą"),
        p("Fachowca warto wziąć do techniki, przebudowy strony, wersji językowych i branż, w których łódzka konkurencja ma silne strony od lat."),

        h2("Jak długo trwa pozycjonowanie strony w Łodzi"),
        p("Pierwsze efekty poprawek technicznych i wizytówki zwykle widać po kilku tygodniach. Nowe podstrony usług w Łodzi potrzebują zwykle trzech–sześciu miesięcy, bo w dużym mieście konkurencja w popularnych branżach jest silna. Frazy z osiedlem albo miastem aglomeracji rosną zwykle szybciej. Wyniki mierzę w GA4 i Google Search Console jako telefony, formularze i rezerwacje, a pozycje fraz pokazuję obok."),

        h2("Pozycjonowanie stron Łódź: cennik"),
        li("Audyt SEO strony, wizytówki i łódzkiej konkurencji: od 1000 zł jednorazowo."),
        li("Jednorazowe prace — podstrony usług, osiedli i miast aglomeracji, poprawki techniczne, dane strukturalne: od 1000 do 3000 zł."),
        li("Stałe pozycjonowanie strony: od 3500 zł miesięcznie, a w branżach z silną konkurencją w Łodzi od 5500 zł miesięcznie."),
        p(
          "Wszystkie widełki są w ",
          link("cenniku", "/pl/cennik"),
          ". Jeśli strona wymaga najpierw przebudowy, zajrzyjcie na stronę ",
          link("tworzenie stron internetowych w Łodzi", "/pl/tworzenie-stron-internetowych-lodz"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie stron w Łodzi: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje dobre pozycjonowanie strony w Łodzi?", "Stałe pozycjonowanie zaczyna się od 3500 zł miesięcznie, a w branżach z silną łódzką konkurencją od 5500 zł. Do tego jednorazowy audyt od 1000 zł i pojedyncze zadania wyceniane od 1000 do 3000 zł. Stałą cenę podaję po krótkim opisie firmy."],
          ["Ile kosztuje pozycjonowanie strony w 2026 roku?", "Moje ceny na 2026 rok są w cenniku: audyt od 1000 zł, jednorazowe prace od 1000 do 3000 zł, stała współpraca od 3500 zł miesięcznie. Cena zależy od branży, liczby usług i tego, ile trzeba poprawić na stronie."],
          ["Jak długo trwa pozycjonowanie strony w Łodzi?", "Zmiany techniczne i wizytówka działają zwykle po kilku tygodniach. Nowe podstrony w popularnych branżach potrzebują trzech–sześciu miesięcy, frazy z osiedlem lub miastem aglomeracji zwykle mniej."],
          ["Kto zajmuje się pozycjonowaniem stron w Łodzi?", "Lokalne i ogólnopolskie agencje SEO, freelancerzy i specjaliści pracujący samodzielnie. Ja należę do tej ostatniej grupy: jedna osoba od audytu do wdrożenia, bez opiekuna klienta, z cenami w cenniku."],
          ["Czy pozycjonowanie stron ma sens, skoro są reklamy i AI?", "Tak. Reklama kończy się razem z budżetem, a podstrona wysoko w Google przynosi zapytania co miesiąc. Asystenci AI też korzystają z treści stron i wizytówek, więc firma niewidoczna w Google zwykle nie pojawia się w ich odpowiedziach."],
          ["Jak samemu pozycjonować stronę łódzkiej firmy?", "Uzupełnijcie wizytówkę Google, zbierajcie opinie, dajcie każdej usłudze podstronę z Łodzią lub osiedlem w tytule i podłączcie Google Search Console. Technikę i przebudowę strony warto zlecić."],
          ["Czy da się wypozycjonować wizytówkę w Mapach Google na całą Łódź?", "Na całe miasto zwykle nie, bo Mapy pokazują firmy blisko szukającego. Da się poszerzyć zasięg trafną kategorią, opiniami i podstronami dzielnic, a przy kilku lokalach — osobną wizytówką dla każdego."],
          ["Czy pracujesz z łódzkimi firmami zdalnie, z Warszawy?", "Tak. Cała współpraca odbywa się online: rozmowy wideo, wspólny plan zadań, dostęp do strony i Search Console. Spotkania na miejscu nie są do pozycjonowania potrzebne."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie strony w Łodzi: co mi wysłać"),
        p(
          "Wyślijcie adres strony i wizytówki Google, listę usług, na których Wam najbardziej zależy, osiedla i miasta aglomeracji, z których chcecie mieć klientów, oraz informację, kto dotąd zajmował się SEO. Odpowiem w ciągu jednego dnia roboczego planem na pierwsze miesiące i stałą ceną. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
