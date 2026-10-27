// Landing page fixture: Pozycjonowanie strony firmy cateringowej (PL), group
// «catering-seo». New page. Market version for Polish firmy cateringowe
// serving companies, weddings, First Communions and private parties — not a
// translation of catering-seo.en.
// Semantic core: ref/food-venues.md has no measured PL catering phrases; the
// brief names «catering dla firm», «catering na wesele» (customer phrases in
// H2s and lists) and the slug phrase «pozycjonowanie strony firmy
// cateringowej» (H1, H2, cost H2, FAQ). «catering dietetyczny» is a different
// business (diet boxes) — one sentence in the intro says this page is about
// event and business catering; diet-box phrases are not targeted.
// Intent: ref/intent-check-food-developer.md — EN «catering seo» vs
// «restaurant seo» 0 of 10 shared URLs → own page; ref/intent-check-food.md —
// «catering seo» vs «catering website» 0 of 10 → sibling
// /pl/strona-internetowa-dla-firmy-cateringowej.
// Polish angles: catering dla firm (lunche do biura, konferencje, wigilie
// firmowe, formalności: faktura z NIP, sanepid), wesela, komunie, chrzciny,
// podstrony miast i sal bez własnej kuchni, menu i cena za osobę (Cyprus
// lesson +16%), wizytówka Google bez adresu, Pyszne.pl / Glovo / Wolt / Uber
// Eats, platformy lunchowe i portale ślubne vs own enquiries, Polish season
// calendar, AI answers, report in zapytania and przyjęcia, cost.
// NOT on this page: formularz wyceny, zaliczki online, zamówienia lunchy,
// galerie, szablony (/pl/strona-internetowa-dla-firmy-cateringowej —
// sibling); wizytówka in depth (/pl/oferty/pozycjonowanie-lokalne);
// restaurant guests (/pl/pozycjonowanie-strony-restauracji — linked once).
// Owner’s rules: every SEO page covers AI search (GEO, AEO); never say there
// are no clients from the visitor’s industry; owner is VAT-exempt (no
// «faktura VAT»); no guaranteed positions.
import { p, h2, li, link, k } from "./pt";

export const cateringSeoPl = {
  lang: "pl",
  group: "catering-seo",
  slug: "pozycjonowanie-strony-firmy-cateringowej",
  title: "Pozycjonowanie strony firmy cateringowej",
  heading: "Pozycjonowanie strony firmy cateringowej",
  excerpt:
    "Zajmuję się pozycjonowaniem strony firmy cateringowej: podstrony cateringu dla firm, na wesela, komunie i konferencje, podstrony miast i sal, menu z ceną za osobę czytelne dla Google, wizytówka w Mapach i odpowiedzi AI — tak, żeby zapytania o wycenę trafiały prosto do Was, a nie tylko przez aplikacje i portale.",
  seo: {
    metaTitle: "SEO cateringu: firmy, wesela i komunie | Bandziuk",
    metaDescription:
      "Pozycjonowanie strony firmy cateringowej: catering dla firm, wesela i komunie, cena za osobę, Mapy Google, wigilie firmowe i odpowiedzi AI. Audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Firmy, wesela, komunie", "Audyt od 1000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Catering dla firm Kraków", "Catering na wesele", "Cena za osobę", "Poproś o wycenę"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO firmy cateringowej: strona, wizytówka Google, konkurencja w Twoim mieście", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO dla cateringu: podstrony okazji, miast i sal, menu z ceną za osobę, dane strukturalne", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie strony firmy cateringowej", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje pozycjonowanie strony firmy cateringowej",
      items: [
        { _key: k("o"), iconName: "search", title: "Frazy, którymi szuka się cateringu", text: "Firmy, wesela, komunie, lunche — z nazwą miasta" },
        { _key: k("o"), iconName: "layers", title: "Podstrona dla każdego rodzaju przyjęcia", text: "Konferencje, wigilie firmowe, wesela, urodziny" },
        { _key: k("o"), iconName: "map-pin", title: "Podstrony miast i sal", text: "Tylko tam, gdzie naprawdę obsługujecie przyjęcia" },
        { _key: k("o"), iconName: "file-text", title: "Menu i cena za osobę zapisane tekstem", text: "Widełki, minimum gości, co podnosi koszt" },
        { _key: k("o"), iconName: "sparkles", title: "Catering polecany przez asystentów AI", text: "Obszar, liczba gości i terminy jako fakty" },
        { _key: k("o"), iconName: "trending-up", title: "Raport w zapytaniach i przyjęciach", text: "Zapytania bezpośrednie obok zamówień z aplikacji" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO firmy cateringowej", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe pozycjonowanie strony cateringu", value: "od 3500 zł / mies.", note: "okazje, miasta, Mapy, AI", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: strony, które pozycjonowałem w Google i w AI",
      subtitle:
        "Z firmą cateringową łączy je to, że klient porównuje kilku wykonawców, zanim wyśle zapytanie. Platformę z nieruchomościami na Cyprze zbudowałem od zera na początku 2025 roku i prowadzę ją do dziś: ma około 330 stron docelowych według miasta, typu i budżetu — ten sam układ co podstrony cateringu według okazji i miejscowości — a ruch z wyszukiwarek wzrósł od zera do około 2500 wizyt miesięcznie bez ani jednego kupionego linku; około 10% wizyt organicznych przychodzi od asystentów AI. ScanM2, firma skanowania laserowego 3D i BIM, sprzedaje innym firmom, tak jak catering firmowy; po przebudowie strony na WordPressie ruch organiczny wzrósł 29-krotnie, a zapytania przychodzą co tydzień. Strona psychoterapeuty z Mediolanu ma podstrony lokalizacji dla Mediolanu i Monzy, a jej nowe teksty pojawiają się w odpowiedziach ChatGPT. Warsztat samochodowy z Warszawy dostał ode mnie pozycjonowanie lokalne, uporządkowaną wizytówkę w Mapach i osobną podstronę dla każdej usługi, a pracownia renowacji felg Felgilab dostała podstrony usług i cen, które podają kwoty wprost.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "build-and-optimize-a-multilingual-real-estate-platform",
        "architecture-website-rebuild-and-seo-scan",
        "psychotherapist-website-milan",
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena pozycjonowania strony firmy cateringowej",
      subtitle: "W ciągu jednego dnia roboczego odpowiem, od czego zacząłbym na Waszej stronie i w wizytówce Google, i podam stałą cenę.",
      contextLabel: "Nazwa firmy cateringowej lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Jakich zamówień chcesz więcej?", options: ["Cateringu dla firm i konferencji", "Lunchy do biura", "Wesel i komunii", "Przyjęć prywatnych i grilli"] },
        { _key: k("z"), question: "Skąd dziś przychodzą zapytania?", options: ["Z poleceń i od stałych klientów", "Z aplikacji z dostawą i platform lunchowych", "Z Map Google i strony", "Z portali ślubnych i Facebooka"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Pozycjonowanie strony firmy cateringowej to praca nad tym, żeby office manager wpisujący „catering na konferencję Wrocław”, para porównująca catering na wesele i rodzice planujący przyjęcie komunijne w domu trafiali do Waszej oferty, zanim wyślą zapytania do trzech konkurentów. Mowa o cateringu okolicznościowym i firmowym — przyjęciach, weselach, konferencjach, lunchach do biura — a nie o cateringu dietetycznym z codziennymi zestawami pudełek, który jest osobną branżą z innymi frazami. Wszystko robię sam: audyt, teksty podstron, zmiany w kodzie i raport w liczbie zapytań."),

        h2("Pozycjonowanie strony firmy cateringowej: jak firmy, pary i rodziny szukają cateringu"),
        p("Frazy, które przynoszą firmie cateringowej zapytania, układają się w cztery grupy:"),
        li("catering dla firm — „catering firmowy Warszawa”, „catering na konferencję”, „lunche do biura z dostawą”, „przerwa kawowa na szkolenie”"),
        li("uroczystości rodzinne — „catering na wesele”, „catering na komunię”, „catering na chrzciny”, „catering na urodziny w domu”"),
        li("forma i dieta — „catering grillowy”, „finger food na event”, „bufet szwedzki”, „catering wegański na imprezę”"),
        li("koszt — „catering cena za osobę”, „ile kosztuje catering na 50 osób”"),
        p("Zanim cokolwiek napiszę, sprawdzam dane wyszukiwań dla Waszego miasta i okolicznych miejscowości. Frazy firmowe są zwykle rzadsze, ale dają stałe zamówienia, a weselne i komunijne mają wyraźne sezony. Dane pokazują, od której grupy zacząć."),

        h2("Catering dla firm w Google: podstrony lunchy do biura, konferencji i wigilii firmowych"),
        p("Firma kupuje catering inaczej niż rodzina. Office manager ma budżet, liczbę osób i spotkanie jutro w południe, a organizator konferencji porównuje trzy oferty w tabelce. Podstrony dla firm odpowiadają na ich pytania:"),
        li("lunche do biura — dostawa codzienna albo w wybrane dni, podpisane porcje, godzina zamówienia na następny dzień, stała umowa"),
        li("konferencje i szkolenia — przerwy kawowe, lunch w formie bufetu, liczba gości, którą obsługujecie, obsługa kelnerska"),
        li("wigilie firmowe i imprezy integracyjne — menu świąteczne, wolne terminy, przyjęcie w biurze albo w wynajętej sali"),
        li("formalności — faktura na firmę, termin płatności, wpis do rejestru sanepidu, ubezpieczenie"),
        p("Jedna firma potrafi zamawiać lunche co tydzień przez lata, dlatego te podstrony oceniam według wartości klienta, a nie liczby wejść."),

        h2("Catering na wesele, komunię i przyjęcie rodzinne: podstrony okazji z menu i realizacjami"),
        p("Pary szukają cateringu weselnego wiele miesięcy przed datą, rodzice przed komunią zwykle już zimą, a rodziny przed chrzcinami i jubileuszami kilka tygodni wcześniej. Każda okazja dostaje osobną podstronę: przykładowe menu, sposób podania — bufet, serwis do stołu, stacje — informację, czy gotujecie na miejscu, czy przywozicie z własnej kuchni, co obejmuje cena za osobę, czyli zastawę, obsługę i dekorację stołów, oraz zdjęcia z prawdziwych przyjęć publikowane za zgodą gospodarzy."),
        p("Wesela w namiocie, w stodole albo w sali bez zaplecza kuchennego to osobne frazy i osobni klienci. Jeśli je obsługujecie, warto napisać o nich wprost, bo konkurencja rzadko to robi."),

        h2("Podstrony miast i sal, w których obsługujecie przyjęcia"),
        p("Firma cateringowa nie ma sali dla gości, więc klienci szukają po miejscu imprezy: „catering Piaseczno”, „catering na wesele Kazimierz Dolny”, „catering do sali [nazwa]”. Podstrona miejscowości ma sens tam, dokąd naprawdę jeździcie, i tylko z konkretami:"),
        li("koszt dojazdu albo minimalne zamówienie dla tej okolicy oraz wymagane wyprzedzenie rezerwacji"),
        li("sale weselne, dworki, hotele i biurowce, w których już obsługiwaliście przyjęcia, z tym, co o nich wiecie: zaplecze, godziny wjazdu, zasady obiektu"),
        li("zdjęcia z przyjęć w tej okolicy, za zgodą klientów"),
        p("Para, która właśnie zarezerwowała salę bez kuchni, wpisuje jej nazwę z dopiskiem „catering”, a niewiele firm ma podstronę, która na to odpowiada. Nowe miasto albo sala dostaje podstronę, gdy macie tam realizacje do pokazania."),

        h2("Menu i cena za osobę na stronie cateringu: odpowiedź na pytanie o koszt"),
        p("„Ile kosztuje catering na osobę” to jedno z najczęstszych pytań w branży, a wiele firm odpowiada na nie hasłem „wycena indywidualna”. Podstrona z widełkami przyciąga osobę, która układa budżet przyjęcia, a taka osoba jest blisko decyzji. Na podstronach menu umieszczam przykładowe zestawy tekstem dla każdej okazji, widełki ceny na gościa przy bufecie, serwisie do stołu i dostawie, próg minimalnego zamówienia i to, co podnosi koszt: obsługę kelnerską, zastawę, transport, dodatkowe godziny."),
        p("Opisy mają być rzeczowe. Na platformie z nieruchomościami na Cyprze, którą zbudowałem i prowadzę, opisy inwestycji przepisano kiedyś w stylu lifestyle’owym i strony sprzedażowe straciły ruch; powrót do faktów — cena, metraż, lokalizacja — przywrócił kliknięcia o 16%. W menu cateringu działa to tak samo: nazwy dań, gramatura, oznaczenia diet i widełki ceny to coś, co wyszukiwarka i asystent AI potrafią podchwycić."),

        h2("Wizytówka Google firmy cateringowej bez lokalu: obszar działania, kategoria i opinie"),
        p("Większość firm cateringowych pracuje z kuchni, do której klienci nie przychodzą. Google pozwala ukryć adres i pokazać obszar działania, a wizytówka nadal może się pojawiać na „catering blisko mnie”. W wizytówce cateringu liczą się:"),
        li("właściwa kategoria główna dla cateringu i rodzaje przyjęć wpisane jako usługi"),
        li("obszar działania zgodny z tym, dokąd naprawdę dojeżdżacie, a nie całe województwo"),
        li("zdjęcia z przyjęć — bufet przed wejściem gości, lunche spakowane do dostawy, ekipa przy pracy — dodawane po każdej większej realizacji"),
        li("prośba o opinię wysłana dzień po przyjęciu do osoby, która zamawiała, z sugestią, by wspomnieć rodzaj imprezy i miejsce"),
        p(
          "Resztę pracy nad mapami — wpisy w katalogach, duplikaty wizytówek, obszar działania — opisuję na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Pyszne.pl, Glovo, Wolt i portale ślubne a zapytania z własnej strony cateringu"),
        p("Lunche do biura sprzedaje się dziś także przez Pyszne.pl, Glovo, Wolt i Uber Eats, a w części miast przez platformy lunchowe dla firm; pary szukają cateringu na portalach ślubnych i w grupach na Facebooku. Te kanały dają zamówienia od razu, ale aplikacja pobiera prowizję od każdego zamówienia i pokazuje Was obok dziesiątek konkurentów, a klient zapamiętuje platformę, nie Waszą nazwę."),
        p("Pozycjonowanie buduje obok kanał bez pośrednika: podstrony, które pojawiają się na frazy z Waszym miastem i rodzajem przyjęcia, oraz wizytówkę z prawdziwą nazwą firmy. W raporcie zapytania bezpośrednie i zamówienia z aplikacji są w osobnych kolumnach, więc o tym, które konta zostawić, decydujecie na podstawie liczb."),

        h2("Sezony w pozycjonowaniu strony cateringu: komunie, wesela i wigilie firmowe"),
        p("Polski kalendarz cateringu ma kilka wyraźnych szczytów, a świeża podstrona zaczyna rosnąć dopiero kilka tygodni po publikacji, więc prace wyprzedzają sprzedaż:"),
        li("we wrześniu i październiku — podstrona wigilii firmowych z nowym menu, bo firmy rezerwują grudniowe terminy wcześnie"),
        li("zimą — komunie i wesela na kolejny sezon, z aktualnymi cenami i terminami degustacji"),
        li("wiosną — grille firmowe, pikniki i imprezy plenerowe"),
        li("w styczniu i we wrześniu — lunche do biura, gdy firmy wracają do rytmu i planują budżety"),
        p("W sezonie podstrona jest podlinkowana ze strony głównej, a po nim zostaje pod tym samym adresem, żeby zdjęcia i opinie z tegorocznych wigilii pracowały na przyszłoroczne zamówienia."),

        h2("Pozycjonowanie strony cateringu w ChatGPT i Google AI Overviews (GEO, AEO)"),
        p("Pytania „kto robi catering na konferencję dla 150 osób w Poznaniu”, „ile kosztuje catering na komunię w domu” czy „który catering w Gdańsku ma menu wegańskie” organizatorzy wpisują dziś także w ChatGPT, Perplexity i podsumowania AI w Google. Odpowiedź powstaje z tekstów, które asystent potrafi odczytać i zestawić z innymi źródłami, a pracę nad tym, by firma się w niej znalazła, nazywa się GEO lub AEO — optymalizacją pod wyszukiwarki generatywne i silniki odpowiedzi. W cateringu sprowadza się ona do czterech rzeczy:"),
        li("obszar działania, liczba gości, wyprzedzenie rezerwacji i widełki ceny za osobę zapisane zwykłymi zdaniami"),
        li("podstrony okazji, które wprost odpowiadają na pytania organizatorów, podpisane przez właściciela albo szefa kuchni"),
        li("dane strukturalne opisujące firmę, jej usługi i obszar dostaw"),
        li("ta sama nazwa, telefon i obszar na stronie, w wizytówce, na portalach ślubnych i w aplikacjach"),
        p(
          "Na cypryjskiej platformie około 10% wizyt organicznych przychodzi już od asystentów AI. Zapisuję, co asystenci mówią o Waszej firmie i jakie cateringi polecają zamiast niej, na początku i kilka miesięcy później. Szczegóły usługi: ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Raport z pozycjonowania strony cateringu: zapytania i zarezerwowane przyjęcia"),
        p("Dobry miesiąc w cateringu liczy się w zarezerwowanych przyjęciach, a nie w pozycjach. W raporcie pokazuję zapytania z wyszukiwarki, telefony i wiadomości z wizytówki, podstrony, które je przyniosły, datę i liczbę gości każdego zapytania oraz to, ile z nich zamieniło się w zamówienie. Liczby biorę z Waszej skrzynki, CRM albo arkusza rezerwacji, więc zgadzają się z kalendarzem."),

        h2("Ile kosztuje pozycjonowanie strony firmy cateringowej"),
        li("Audyt strony, wizytówki Google i konkurencji w Waszym mieście: od 1000 zł jednorazowo, z listą zmian uszeregowaną według tego, ile mogą przynieść."),
        li("Prace jednorazowe — podstrony okazji, miast i sal, menu z ceną za osobę, porządki w wizytówce i dane strukturalne: od 1000 do 3000 zł."),
        li("Stałe pozycjonowanie strony firmy cateringowej — podstrony przygotowane przed każdym sezonem, wizytówka, prośby o opinie, obecność w odpowiedziach AI i raport liczony w przyjęciach: od 3500 zł miesięcznie."),
        p(
          "Jeśli strona potrzebuje formularza wyceny, zaliczek online albo zamawiania lunchy, zajrzyj na stronę ",
          link("strona internetowa dla firmy cateringowej", "/pl/strona-internetowa-dla-firmy-cateringowej"),
          ". Restauracji z salą dla gości szuka się inaczej — o tym na stronie ",
          link("pozycjonowanie strony restauracji", "/pl/pozycjonowanie-strony-restauracji"),
          ". Przebieg stałej współpracy opisuje strona ",
          link("strategia i optymalizacja SEO", "/pl/oferty/strategia-i-optymalizacja-seo"),
          ", a pełne stawki są w ",
          link("cenniku", "/pl/cennik"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie strony firmy cateringowej: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje pozycjonowanie strony firmy cateringowej?", "Audyt kosztuje od 1000 zł, pojedyncze zadania od 1000 do 3000 zł, stała współpraca od 3500 zł za miesiąc. Stałą kwotę podaję po tym, jak napiszesz, w jakim mieście działacie, jakich przyjęć chcecie więcej i skąd dziś macie zapytania."],
          ["Kiedy pozycjonowanie strony cateringu zacznie przynosić zapytania?", "Zmiany w wizytówce i świeże opinie potrafią poprawić pozycję w Mapach w ciągu kilku tygodni. Nowe podstrony okazji i sal rosną zwykle kilka miesięcy, w dużych miastach dłużej, dlatego wesela, komunie i wigilie firmowe przygotowuję przed sezonem."],
          ["Czy warto zostać na Pyszne.pl i platformach lunchowych?", "Często tak — te zamówienia wypełniają dni powszednie. Nie trzeba z nich rezygnować: pozycjonowanie dokłada kanał, w którym nie płacicie prowizji, a raport pokazuje oba źródła."],
          ["Czy pokazywać ceny na stronie cateringu?", "Widełki albo ceny „od” za osobę wystarczą. Odpowiadają na najczęstsze pytanie, przyciągają osoby, które układają budżet, i odsiewają zapytania, których i tak byście nie przyjęli."],
          ["Czy catering bez lokalu może być widoczny w Mapach Google?", "Tak. Firma cateringowa może ukryć adres w wizytówce i pokazać obszar działania. Wizytówka konkuruje wtedy w wynikach map w tym obszarze."],
          ["Czy ChatGPT poleca firmy cateringowe?", "Tak, gdy ktoś zapyta o catering w swoim mieście. Wskazuje firmy, których obszar, liczbę obsługiwanych gości i opinie może zweryfikować w kilku źródłach i których strona jasno odpowiada na pytania organizatorów. Polecenia nie da się zagwarantować; porównuję odpowiedzi asystentów przed pracą i po niej."],
          ["Czy pracujesz z firmami cateringowymi spoza Warszawy?", "Tak, z całej Polski. Pracuję zdalnie, na danych wyszukiwań z Waszej okolicy, rozmawiamy po polsku, a na usługi wystawiam fakturę na firmę."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie strony firmy cateringowej: co mi wysłać"),
        p(
          "Wyślij nazwę firmy, link do strony i do profilu w Mapach Google, miasta i sale, w których obsługujecie przyjęcia, rodzaje przyjęć, których chcecie więcej — firmy, lunche do biura, wesela, komunie — oraz informację, czy sprzedajecie przez aplikacje z dostawą albo platformy lunchowe. Odpowiem, od czego zacząłbym, i podam stałą cenę. Skorzystaj z ",
          link("formularza powyżej", "#quote"),
          " albo napisz na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
