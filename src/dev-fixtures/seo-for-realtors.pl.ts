// Landing page fixture: Pozycjonowanie strony agenta nieruchomości (PL), group
// «seo-for-realtors». New page. Market version for Polish pośrednicy w obrocie
// nieruchomościami — working on their own JDG, in an office or in a franchise
// network — not a translation of seo-for-realtors.en.
// Semantic core: ref/real-estate-finance.md has no measured PL volumes; H1 and
// headings carry «pozycjonowanie strony agenta nieruchomości», «pozycjonowanie
// agenta nieruchomości», «SEO dla pośrednika w obrocie nieruchomościami»,
// «wizytówka Google agenta nieruchomości», «strona agenta». PL PAA (all used):
// Jak sprawdzić agencję nieruchomości? (name/trust H2) · Ile procent bierze
// pośrednik od sprzedaży nieruchomości? · Czy z biurem nieruchomości można się
// targować? · Kiedy pośrednik nie ma prawa do prowizji? · Na co należy uważać
// przy umowie z biurem nieruchomości? · Co jest lepsze Otodom czy OLX? (seller
// questions H2 as article topics; FAQ).
// Intent: ref/intent-check-real-estate-finance.md — «strona dla agenta
// nieruchomości» vs «strona dla biura nieruchomości» 0 shared URLs → the
// individual agent is a separate audience from the agency pages; SEO and
// website are separate pages (EN check: design vs SEO 0 shared).
// Angle: marka osobista and name searches, zawód deregulowany → trust shown by
// OC, firma, stowarzyszenie, opinie; franchise/office brand rules; dzielnice i
// osiedla (Warszawa, Kraków, Trójmiasto, smaller towns); seller questions about
// prowizja, umowa na wyłączność; quarterly local price reports (NBP + own
// transactions); wizytówka Google agenta and portal profiles; leads by phone,
// WhatsApp, wycena form into Asari / Galactica / EstiCRM; AI answers.
// NOT on this page: competing with portals, catalog technical SEO, agency
// multilingual sites (/pl/seo-dla-stron-nieruchomosci,
// /pl/strona-dla-agencji-nieruchomosci — linked once); design and build
// (/pl/strona-internetowa-dla-agenta-nieruchomosci); wizytówka in depth
// (/pl/oferty/pozycjonowanie-lokalne); Google Ads, Facebook Ads, paid portal
// promotions (not offered).
// Owner’s rules: PL form «pozycjonowanie strony X»; every SEO page covers AI
// search (GEO, AEO); never say there are no clients from the visitor’s
// segment; Cyprus VIP Estates in portfolio.
import { p, h2, h3, li, link, k } from "./pt";

export const seoForRealtorsPl = {
  lang: "pl",
  group: "seo-for-realtors",
  slug: "pozycjonowanie-strony-agenta-nieruchomosci",
  title: "Pozycjonowanie strony agenta nieruchomości",
  heading: "Pozycjonowanie strony agenta nieruchomości",
  excerpt:
    "Zajmuję się pozycjonowaniem stron agentów nieruchomości: wyniki na Twoje nazwisko, podstrony dzielnic i osiedli, artykuły na pytania sprzedających o prowizję i umowę na wyłączność, wizytówka Google z opiniami i widoczność w odpowiedziach AI — a wynik liczę w zapytaniach o wycenę i telefonach.",
  seo: {
    metaTitle: "SEO dla pośrednika w obrocie nieruchomościami | Bandziuk",
    metaDescription:
      "Pozycjonowanie strony agenta nieruchomości: Twoje nazwisko w Google, podstrony dzielnic, pytania sprzedających, wizytówka, opinie i AI. Audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Nazwisko, dzielnice i sprzedający", "Audyt od 1000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Agent nieruchomości Ursynów", "Bezpłatna wycena mieszkania", "Opinie w Google", "Poleca ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO agenta nieruchomości: wyniki na nazwisko, strona, wizytówka Google, odpowiedzi AI", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO dla pośrednika: podstrona „O mnie”, podstrony dzielnic, formularz wyceny, dane strukturalne", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie strony agenta nieruchomości", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje pozycjonowanie strony agenta nieruchomości",
      items: [
        { _key: k("o"), iconName: "search", title: "Twoje nazwisko na górze wyników Google", text: "Strona „O mnie”, profile i wizytówka mówią to samo" },
        { _key: k("o"), iconName: "map-pin", title: "Podstrony dzielnic i osiedli", text: "Pisane z Twoich transakcji, z własnymi zdjęciami" },
        { _key: k("o"), iconName: "file-text", title: "Artykuły na pytania sprzedających", text: "Prowizja, umowa na wyłączność, wycena mieszkania" },
        { _key: k("o"), iconName: "shield-check", title: "Zaufanie w deregulowanym zawodzie", text: "OC, firma, opinie i jasne zasady współpracy" },
        { _key: k("o"), iconName: "sparkles", title: "Widoczność w odpowiedziach AI", text: "ChatGPT, Perplexity i podsumowania AI w Google" },
        { _key: k("o"), iconName: "trending-up", title: "Raport w wycenach i telefonach", text: "Każde zapytanie w CRM z podstroną, z której przyszło" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO strony agenta nieruchomości", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe pozycjonowanie agenta nieruchomości", value: "od 3500 zł / mies.", note: "dzielnice, artykuły, opinie, AI", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: strony nieruchomości i firm usługowych, które budowałem i pozycjonowałem",
      subtitle:
        "Dla Cyprus VIP Estates, firmy z rynku nieruchomości premium na Cyprze, zbudowałem serwis od zera i co miesiąc prowadzę jego pozycjonowanie; wyszukiwarka ofert z filtrami i mapą, filmy o inwestycjach, pięć języków z hebrajskim włącznie i zapytania trafiające od razu do CRM to efekt tej pracy. Obok niego warszawska firma remontowo-inwestycyjna, serwis agencji edukacyjnej działającej w dziesięciu krajach, firma skanowania laserowego 3D i modelowania BIM, której ruch organiczny wzrósł 29 razy, oraz warsztat samochodowy z Warszawy. Agent nieruchomości bierze z tych projektów to, co w nich działa: podstrony pod to, co wpisują klienci, i zapytania trafiające prosto do CRM.",
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
      title: "Wycena pozycjonowania strony agenta nieruchomości",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: co poprawiłbym najpierw — wyniki na nazwisko, podstrony dzielnic czy wizytówkę — i za jaką stałą cenę.",
      contextLabel: "Imię i nazwisko, biuro lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Kogo chcesz mieć więcej?", options: ["Sprzedających — umowy na wyłączność", "Kupujących", "Właścicieli mieszkań na wynajem", "Klientów rynku pierwotnego"] },
        { _key: k("z"), question: "Jak pracujesz?", options: ["Sam, na własnej działalności", "W biurze nieruchomości", "W sieci franczyzowej", "Prowadzę małe biuro z kilkoma agentami"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Pozycjonowanie strony agenta nieruchomości to moja usługa dla pośredników pracujących na własny rachunek, w biurach i w sieciach franczyzowych: praca nad tym, żeby sprzedający i kupujący znajdowali Cię w Google po nazwisku, dzielnicy i pytaniach o sprzedaż mieszkania, a potem dzwonili albo pisali. Robię to sam — audyt, podstrony, poprawki w kodzie, wizytówkę i raporty — więc osoba, która znajduje problem, jest tą samą, która go naprawia."),

        h2("Pozycjonowanie agenta nieruchomości: co obejmuje usługa"),
        p("Ogłoszenia mieszkań i domów ludzie przeglądają na Otodom, Morizon, Gratce i OLX. Strona agenta ma inne zadanie: przekonać właściciela, że to Tobie warto powierzyć sprzedaż, a kupującego — że znasz okolicę, w której szuka. Pracuję nad czterema miejscami:"),
        li("wyniki Google na Twoje imię i nazwisko oraz na nazwę Twojego biura"),
        li("podstrony dzielnic, osiedli i miejscowości, w których pracujesz, oraz artykuły na pytania sprzedających"),
        li("wizytówka Google, opinie klientów i Twoje dane na portalach"),
        li("odpowiedzi ChatGPT, Perplexity i podsumowania AI w Google"),
        p(
          "Biura z dużą bazą ofert i deweloperzy mają inne problemy — opisuję je na stronach ",
          link("SEO dla stron nieruchomości", "/pl/seo-dla-stron-nieruchomosci"),
          " i ",
          link("strona dla agencji nieruchomości", "/pl/strona-dla-agencji-nieruchomosci"),
          ".",
        ),

        h2("Marka osobista pośrednika: co pokazuje Google po wpisaniu Twojego nazwiska"),
        p("Zanim właściciel mieszkania podpisze umowę pośrednictwa, sprawdza agenta w Google, nawet jeśli numer dostał od znajomego. Na pytanie „jak sprawdzić agencję nieruchomości” odpowiedź zwykle brzmi: zobacz opinie, doświadczenie i to, co agent sprzedał wcześniej. Jeśli na Twoje nazwisko wychodzi stary profil w poprzednim biurze, kilka ogłoszeń i nic więcej, część poleceń nie kończy się telefonem. Na stronie potrzebne są:"),
        li("podstrona „O mnie” z imieniem i nazwiskiem w tytule, dzielnicami, specjalizacją — rynek wtórny, domy, najem, rynek pierwotny — i językami"),
        li("zdjęcie, lata w zawodzie i przykładowe transakcje opisane bez danych klientów, za ich zgodą"),
        li("dane strukturalne osoby łączące stronę z wizytówką Google, profilem biura na portalach i mediami społecznościowymi"),
        li("te same imię, nazwisko, telefon i nazwa biura wszędzie"),
        p("Agent, który zmienia biuro albo sieć, najwięcej traci właśnie tutaj. Własna domena sprawia, że wyszukiwania nazwiska prowadzą do Ciebie niezależnie od szyldu."),

        h2("Strona agenta w deregulowanym zawodzie: jak pokazać, że można Ci zaufać"),
        p("Zawód pośrednika w obrocie nieruchomościami jest deregulowany: do pracy nie jest potrzebna licencja państwowa, więc klient nie ma jednego rejestru, w którym sprawdzi agenta. Tym większą wagę mają fakty, które zobaczy sam na stronie:"),
        li("informacja o obowiązkowym ubezpieczeniu OC pośrednika i nazwa firmy, przez którą działasz"),
        li("członkostwo w stowarzyszeniu branżowym albo ukończone szkolenia, jeśli je masz"),
        li("opinie w Google z datami i Twoimi odpowiedziami"),
        li("jasny opis współpracy: jak wygląda umowa na wyłączność, a jak otwarta, co robisz w ramach prowizji"),
        p("Jeśli pracujesz w biurze albo w sieci franczyzowej, sprawdź jej zasady dotyczące marki, domeny i stron agentów. Wiele sieci ma własne wytyczne co do logo, nazwy i tego, co agent może publikować samodzielnie, i lepiej znać je przed startem niż po."),

        h2("Pozycjonowanie agenta nieruchomości na dzielnice i osiedla"),
        p("Agent wygrywa w Google tam, gdzie ma wiedzę, której nie ma ogłoszenie: „Ursynów czy Bemowo — gdzie kupić mieszkanie”, „jak się mieszka na Zabłociu”, „domy w Józefosławiu, dojazd do Warszawy”, „Gdańsk Oliwa mieszkania z rynku wtórnego”. Podstrona dzielnicy albo osiedla, która ma szansę na wysoką pozycję, zawiera:"),
        li("granice okolicy, ulice i osiedla oraz mapę"),
        li("rodzaj zabudowy — kamienice, bloki z wielkiej płyty, nowe osiedla, domy — i co z tego wynika dla kupującego: czynsze, miejsca parkingowe, stan prawny gruntu w ogólnych słowach"),
        li("dojazd, komunikację, szkoły i przedszkola, sklepy i tereny zielone"),
        li("Twoje zdjęcia i krótkie wideo z okolicy"),
        li("link do Twoich ofert w tej okolicy i do formularza wyceny"),
        h3("Agent nieruchomości w Warszawie, Krakowie, Trójmieście i mniejszych miastach"),
        p("W Warszawie i Krakowie o frazy z nazwą dzielnicy walczy wielu agentów i biur, więc warto zejść niżej: do osiedla, ulicy, typu budynku. W mniejszych miastach i gminach pod dużymi miastami często wystarczy kilka rzetelnych podstron, żeby być pierwszym. Zaczynam od miejsc, w których masz już transakcje i możesz pisać z doświadczenia, a nie od setki podstron z jednego szablonu."),

        h2("Frazy sprzedających: prowizja pośrednika, umowa na wyłączność i wycena mieszkania"),
        p("Właściciel, który myśli o sprzedaży, pyta Google na długo przed telefonem do agenta: „ile procent bierze pośrednik”, „czy z biurem nieruchomości można się targować”, „na co uważać przy umowie z biurem nieruchomości”, „kiedy pośrednik nie ma prawa do prowizji”, „Otodom czy OLX — gdzie sprzedać mieszkanie”. Rzeczowe artykuły na te pytania, napisane z Twojej praktyki i podpisane Twoim nazwiskiem, przyciągają dokładnie tych ludzi, którzy za chwilę wybiorą agenta."),
        p("Każdy taki artykuł prowadzi do podstrony wyceny dla danej okolicy. Lepiej działa propozycja analizy cen podobnych mieszkań przygotowanej przez Ciebie niż kalkulator, który podaje jedną liczbę i nie daje powodu do rozmowy. Kwestie prawne, na przykład prawo do prowizji, opisuję ogólnie i z zastrzeżeniem, że to nie porada prawna."),

        h2("Raporty z lokalnego rynku nieruchomości: ceny mieszkań w dzielnicy co kwartał"),
        p("„Ceny mieszkań Mokotów” albo „ile kosztuje metr w Wieliczce” to wyszukiwania właścicieli i kupujących. Krótki kwartalny raport dla każdej okolicy — ceny ofertowe, czas sprzedaży, co widzisz na prezentacjach i w negocjacjach — daje im odpowiedź i powód, żeby wrócić. Dane dla dużych miast publikuje NBP, a resztę wnoszą Twoje transakcje i obserwacje. Raport ma stały adres, a nowe wydanie zastępuje stare, więc strona z czasem zbiera linki i pozycje."),

        h2("Wizytówka Google agenta nieruchomości, opinie i profile na portalach"),
        p("Google pozwala, żeby agent nieruchomości miał własną wizytówkę, oddzielną od wizytówki biura. Agent, który spotyka się z klientami w mieszkaniach, a nie w biurze, ustawia ją jako firmę z obszarem działania i ukrytym adresem. Co się liczy:"),
        li("kategoria „Agent nieruchomości”, obszar działania i link do podstrony „O mnie” albo głównej dzielnicy"),
        li("nazwa zgodna z rzeczywistością — imię i nazwisko albo z nazwą biura — bez dopisków typu „mieszkania Mokotów”"),
        li("prośba o opinię po każdej transakcji i odpowiedź na każdą, bez szczegółów transakcji"),
        li("Twoje dane w profilu biura na Otodom i innych portalach takie same jak na stronie"),
        p(
          "Pełną pracę nad Mapami Google opisuję na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Zapytania ze strony agenta nieruchomości: telefon, WhatsApp, formularz wyceny i CRM"),
        p("Pozycjonowanie ma sens wtedy, gdy wizyta kończy się kontaktem, który da się obsłużyć. Na stronie agenta to:"),
        li("przycisk „Zadzwoń” i WhatsApp na każdej podstronie w telefonie"),
        li("formularz wyceny z kilkoma polami: osiedle lub ulica, metraż, planowany termin sprzedaży"),
        li("zapytania wysyłane od razu do CRM, z którego korzystasz — Asari, Galactica, EstiCRM albo system biura — razem z podstroną, z której przyszły"),
        li("informacja o administratorze danych przy formularzu, zgodnie z RODO"),
        p("Wtedy w raporcie liczę to, co ważne: zapytania o wycenę, telefony i wiadomości z wyszukiwarki, z podziałem na dzielnice. Pozycje fraz są obok tych liczb, a nie zamiast nich."),

        h2("Pozycjonowanie agenta nieruchomości w ChatGPT i Google AI Overviews (GEO, AEO)"),
        p("Coraz więcej osób pyta ChatGPT, Perplexity albo podsumowania AI w Google: „jakiego agenta wybrać do sprzedaży mieszkania na Bielanach”, „czy warto podpisać umowę na wyłączność”, „jak się mieszka w Rumi”. Asystent podaje kilka nazwisk i powód, dla którego je wybrał. Pracę nad tym nazywa się GEO (generative engine optimization) albo AEO (answer engine optimization). Dla agenta to:"),
        li("dzielnice, specjalizacja, biuro i języki zapisane prostymi zdaniami na podstronie „O mnie”"),
        li("podstrony okolic i artykuły, które wprost odpowiadają na pytania, z Tobą jako autorem"),
        li("te same dane i regularne nowe opinie w Google i na portalach"),
        li("dane strukturalne osoby i biura połączone z profilami"),
        p(
          "Przed pracą i po niej sprawdzam, co asystenci mówią o Tobie i kogo polecają zamiast Ciebie. Więcej na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Pozycjonowanie strony agenta czy reklama: Google Ads, Facebook i wyróżnienia ogłoszeń"),
        p(
          "Płatne wyróżnienia ogłoszeń, reklamy na Facebooku i Google Ads działają od pierwszego dnia i kończą się razem z budżetem. Pozycjonowanie potrzebuje miesięcy, ale podstrona dzielnicy albo wynik na Twoje nazwisko przyprowadza ludzi bez opłaty za kliknięcie i buduje rozpoznawalność, na której opierają się polecenia. Reklam nie prowadzę — zajmuję się wyszukiwarką i odpowiedziami AI. Ogólnie o stałej pracy nad SEO piszę na stronie ",
          link("strategia i optymalizacja SEO", "/pl/oferty/strategia-i-optymalizacja-seo"),
          ". Jeśli strona wymaga przebudowy, zanim będzie co pozycjonować, zajrzyj na stronę ",
          link("strona internetowa dla agenta nieruchomości", "/pl/strona-internetowa-dla-agenta-nieruchomosci"),
          ".",
        ),

        h2("Ile trwa i ile kosztuje pozycjonowanie strony agenta nieruchomości"),
        p("Wizytówka i wyniki na nazwisko potrafią się poprawić w kilka tygodni. Nowe podstrony dzielnic zwykle potrzebują dwóch–czterech miesięcy, w Warszawie i Krakowie dłużej."),
        li("Audyt SEO — wyniki na nazwisko, strona, wizytówka, opinie i odpowiedzi AI: od 1000 zł, jednorazowo, z listą poprawek według wpływu."),
        li("Jednorazowe prace — podstrona „O mnie”, podstrony dzielnic, formularz wyceny, dane strukturalne, połączenie z CRM: od 1000 do 3000 zł."),
        li("Stałe pozycjonowanie strony agenta nieruchomości — nowe podstrony, raporty rynkowe, opinie, widoczność w AI i raporty: od 3500 zł miesięcznie, przy silnej konkurencji w Warszawie, Krakowie, Trójmieście czy Wrocławiu od 5500 zł miesięcznie."),
        p(
          "Pełne widełki są w ",
          link("cenniku", "/pl/cennik"),
          ", a szczegóły audytu na stronie ",
          link("audyt SEO strony internetowej", "/pl/oferty/audyt-seo-strony-internetowej"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie strony agenta nieruchomości: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje pozycjonowanie strony agenta nieruchomości?", "Stałe pozycjonowanie kosztuje od 3500 zł miesięcznie, przy silnej konkurencji w dużych miastach od 5500 zł. Audyt to od 1000 zł jednorazowo, a pojedyncze prace od 1000 do 3000 zł. Po krótkim opisie Twojego rynku i dzielnic podaję stałą cenę."],
          ["Ile trwa pozycjonowanie agenta nieruchomości?", "Wizytówka i wyniki na nazwisko potrafią się poprawić w kilka tygodni. Podstrony dzielnic zwykle potrzebują dwóch–czterech miesięcy, w Warszawie i Krakowie dłużej. Artykuły dla sprzedających zaczynają przyprowadzać ludzi po kilku miesiącach i pracują latami."],
          ["Po co agentowi strona, skoro oferty są na Otodom i OLX?", "Bo robi co innego niż portal. Ogłoszenie pokazuje mieszkanie, a strona odpowiada na wyszukiwania Twojego nazwiska, dzielnic i pytań sprzedających i tłumaczy, dlaczego właściciel ma powierzyć sprzedaż właśnie Tobie."],
          ["Czy agent w biurze lub sieci franczyzowej może mieć własną stronę i wizytówkę?", "Zwykle tak, ale zasady ustala biuro albo sieć: logo, nazwa, domena i to, co wolno publikować. Google pozwala agentowi mieć własną wizytówkę obok wizytówki biura. Sprawdź umowę z biurem przed startem."],
          ["Jakie artykuły pisać na stronie pośrednika nieruchomości?", "Odpowiedzi na pytania, które słyszysz od właścicieli: ile procent bierze pośrednik, czy można negocjować prowizję, czym różni się umowa na wyłączność od otwartej, jak przygotować mieszkanie do sprzedaży. Każdy artykuł z Twoim nazwiskiem i linkiem do formularza wyceny."],
          ["Czy ChatGPT poleca agentów nieruchomości?", "Tak, gdy ktoś o to zapyta. Asystent wybiera agentów, o których znajduje sprawdzalne fakty: dzielnice, specjalizację, biuro, opinie i artykuły z autorem. Tę pracę wykonuję w ramach pozycjonowania i sprawdzam wynik przed i po."],
          ["Czy pracujesz z agentami spoza Warszawy?", "Tak, z całej Polski: z Krakowa, Trójmiasta, Wrocławia, Poznania i mniejszych miast. Pozycjonowanie robię zdalnie, na danych wyszukiwań dla Twojego miasta i Twoich dzielnic."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie strony agenta nieruchomości: co mi wysłać"),
        p(
          "Wyślij link do strony i do wizytówki w Mapach Google, nazwę biura lub sieci, dzielnice i miejscowości, w których chcesz mieć więcej klientów, informację, czy zależy Ci bardziej na sprzedających czy kupujących, i nazwę CRM, z którego korzystasz. Odpowiem, co poprawiłbym najpierw i za jaką stałą cenę. Skorzystaj z ",
          link("formularza powyżej", "#quote"),
          " albo napisz na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
