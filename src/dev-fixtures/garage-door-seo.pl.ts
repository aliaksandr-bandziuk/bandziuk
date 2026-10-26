// Landing page fixture: Pozycjonowanie firmy bram garażowych (PL), group
// «garage-door-seo». New page. Market version for Polish firms that sell,
// install and service bramy garażowe, bramy wjazdowe and automatyka — dealers
// and montażyści of Polish and foreign producers — not a translation of
// garage-door-seo.en.
// Semantic core: ref/home-services.md has no PL phrases for garage doors; H1
// and headings carry «pozycjonowanie firmy bram garażowych», «bramy segmentowe
// / uchylne / roletowe / wjazdowe», «automatyka do bram», «serwis bram
// garażowych», «napęd do bramy», «wizytówka Google firmy bram garażowych». PL
// PAA used: «Ile kosztuje pozycjonowanie firmy?» (cost H2 + FAQ), «Co jest
// lepsze: pozycjonowanie czy Google Ads?» (FAQ).
// Intent: ref/intent-check-home-services.md — EN «garage door seo» vs «seo for
// contractors» 0 shared URLs → own page; neighbour PL page
// /pl/pozycjonowanie-strony-firmy-budowlanej linked once.
// Angle (PL): four groups of searches (sprzedaż, montaż, serwis, automatyka),
// door types with what buyers ask (wymiary otworu, nadproże, ciepło, okleiny),
// napędy and piloty (Nice, FAAC, Somfy, CAME), serwis — sprężyny, linki,
// napęd, pilot, przeglądy bram przemysłowych; producenci (Wiśniowski, Krispol,
// Hörmann) and dealer locators; bramy przemysłowe i szybkobieżne; salon vs
// montaż na obszarze; brama w stanie surowym zamkniętym → timing with the
// building season; Oferteo as a source of zapytania; AI answers.
// NOT on this page: ślusarz / otwieranie drzwi (/pl/pozycjonowanie-strony-slusarza);
// building the site (no H2); wizytówka in depth (/pl/oferty/pozycjonowanie-lokalne
// — one link); Google Ads (not offered).
// Owner’s rules: PL form «pozycjonowanie firmy X»; every SEO page covers AI
// search (GEO, AEO); never say there are no clients from the visitor’s industry.
import { p, h2, h3, li, link, k } from "./pt";

export const garageDoorSeoPl = {
  lang: "pl",
  group: "garage-door-seo",
  slug: "pozycjonowanie-firmy-bram-garazowych",
  title: "Pozycjonowanie firmy bram garażowych",
  heading: "Pozycjonowanie firmy bram garażowych i automatyki",
  excerpt:
    "Zajmuję się pozycjonowaniem firm bram garażowych i automatyki: osobne podstrony bram segmentowych, uchylnych, roletowych i wjazdowych, napędów i serwisu, strony producentów, których jesteście dealerem, wizytówka Google dla obszaru montażu i widoczność w odpowiedziach AI.",
  seo: {
    metaTitle: "SEO dla firm od bram garażowych i napędów | Bandziuk",
    metaDescription:
      "Pozycjonowanie firmy bram garażowych: podstrony bram, napędów i serwisu, strony producentów, realizacje, wizytówka Google i odpowiedzi AI. Audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Bramy, napędy, serwis", "Audyt od 1000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Brama segmentowa z montażem", "Napęd do bramy wjazdowej", "Serwis bram i napędów", "Bezpłatny pomiar"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO firmy bram garażowych: strona, wizytówka Google, konkurencja, odpowiedzi AI", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO: podstrony bram, napędów i serwisu, strony producentów, dane strukturalne", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie firmy bram garażowych", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajecie",
      title: "Co obejmuje pozycjonowanie firmy bram garażowych",
      items: [
        { _key: k("o"), iconName: "layers", title: "Podstrona dla każdego rodzaju bramy", text: "Segmentowe, uchylne, roletowe, przesuwne, skrzydłowe" },
        { _key: k("o"), iconName: "plug", title: "Automatyka i napędy w wyszukiwarce", text: "Napędy, piloty, sterowanie z telefonu, modernizacje" },
        { _key: k("o"), iconName: "gauge", title: "Serwis i naprawy jako osobna ścieżka", text: "Sprężyny, linki, napęd, przeglądy bram przemysłowych" },
        { _key: k("o"), iconName: "image", title: "Realizacje z opisem", text: "Zdjęcia Waszych montaży z miejscowością i modelem" },
        { _key: k("o"), iconName: "map-pin", title: "Wizytówka Google dla obszaru montażu", text: "Salon z adresem albo obszar dojazdu, opinie" },
        { _key: k("o"), iconName: "sparkles", title: "Widoczność w odpowiedziach AI", text: "Odpowiedzi o bramach, które cytuje ChatGPT" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO firmy bram garażowych", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe pozycjonowanie firmy bram garażowych", value: "od 3500 zł / mies.", note: "podstrony, realizacje, Mapy, AI", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: strony firm usługowych i projektowych, które budowałem i pozycjonowałem",
      subtitle:
        "Warszawski warsztat samochodowy, któremu klienci dzwonią z Map Google (pozycjonowanie lokalne, wizytówka, podstrony usług, UX), pracownia renowacji felg Felgilab z osobnymi podstronami usług i cen, warszawska firma remontowo-inwestycyjna, której strona premium pokazuje zakończone realizacje, i ScanM2 — firma skanowania laserowego 3D i modelowania BIM, której ruch organiczny wzrósł 29 razy po przebudowie na WordPressie. Piąty projekt, przechowalnia opon, to jedna strona, której teksty SEO właściciel poprawia sam. Firma bram potrzebuje obu stron tej pracy: podstron serwisu, po których ktoś dzwoni, i realizacji, które sprzedają nową bramę.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "auto-repair-seo-and-ux-boost",
        "renovation-and-investment-website-with-premium-design",
        "architecture-website-rebuild-and-seo-scan",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena pozycjonowania firmy bram garażowych",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: od których podstron i poprawek w wizytówce zacząłbym, i za jaką stałą cenę.",
      contextLabel: "Nazwa firmy lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Czego chcecie więcej?", options: ["Sprzedaży i montażu bram", "Automatyki i napędów", "Zleceń serwisowych", "Bram przemysłowych dla firm"] },
        { _key: k("z"), question: "Skąd teraz przychodzą klienci?", options: ["Od firm budujących domy", "Z Oferteo i portali", "Z lokalizatora dealerów producenta", "Z Google i Map Google"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Pozycjonowanie firmy bram garażowych to praca nad tym, żeby inwestor budujący dom, właściciel starej bramy uchylnej i zarządca hali znaleźli w Google Waszą firmę, a nie tylko portal z zapytaniami albo stronę producenta. Robię to sam: audyt, podstrony bram, automatyki i serwisu, poprawki na stronie, wizytówkę Google i raport z zapytań. Sprzedaż bramy i naprawa sprężyny to dwa różne zlecenia, więc strona dostaje dwie różne ścieżki."),

        h2("Pozycjonowanie firmy bram garażowych: sprzedaż, montaż, serwis i automatyka"),
        p("Frazy wpisywane przez klientów firm bramowych dzielą się na cztery grupy, a każda potrzebuje innych podstron:"),
        li("sprzedaż i montaż — „brama segmentowa z montażem”, „brama garażowa cena”, „brama garażowa ocieplona”"),
        li("automatyka — „napęd do bramy przesuwnej”, „dorobienie pilota do bramy”, „sterowanie bramą z telefonu”"),
        li("serwis — „naprawa bramy garażowej”, „pękła sprężyna w bramie”, „brama nie domyka się”"),
        li("klienci firmowi — „bramy przemysłowe”, „brama szybkobieżna”, „przegląd bram przemysłowych”"),
        p("Jedna podstrona „Oferta” z listą wszystkiego nie zajmie wysokiej pozycji na żadną z tych fraz."),

        h2("Podstrony rodzajów bram: segmentowe, uchylne, roletowe i wjazdowe"),
        p("Inwestor wybiera bramę długo i porównuje. Każdy rodzaj bramy dostaje własną podstronę, która odpowiada na pytania zadawane przy pomiarze:"),
        h3("Bramy segmentowe"),
        p("Najczęściej wybierane do nowych domów. Podstrona opisuje ocieplenie paneli, przetłoczenia i okleiny drewnopodobne, kolory, przeszklenia, drzwi przejściowe w bramie oraz to, ile miejsca potrzeba nad otworem na prowadnice."),
        h3("Bramy uchylne i roletowe"),
        p("Uchylne wracają przy tańszych garażach i wymianie starych bram; roletowe wybiera się, gdy nadproże jest niskie albo garaż ma nietypowy kształt. Podstrona mówi wprost, kiedy dany typ ma sens, a kiedy nie."),
        h3("Bramy wjazdowe przesuwne i skrzydłowe"),
        p("Klient szuka ich razem z ogrodzeniem i napędem. Podstrona wyjaśnia różnicę między bramą przesuwną a dwuskrzydłową, co z miejscem na odjazd skrzydła i czy bramę da się zautomatyzować później."),
        p("Na każdej podstronie warto pokazać, od czego zależy cena — wymiary otworu, ocieplenie, napęd, kolor, montaż — i zdjęcia bram zamontowanych przez Was, a nie tylko wizualizacje z katalogu."),

        h2("Automatyka do bram w wyszukiwarce: napędy, piloty i sterowanie z telefonu"),
        p("Automatyka to osobny rynek: właściciele starszych bram dokładają napęd, zmieniają piloty na sterowanie z aplikacji, szukają zamiennika po awarii. Frazy często zawierają markę — Nice, FAAC, Somfy, CAME — więc podstrona dla każdego systemu, który montujecie i serwisujecie, zbiera ruch, którego strony producentów nie obsługują lokalnie. Do tego podstrona „dorabianie i programowanie pilotów” — mała usługa, ale klient, który przyjdzie po pilota, wraca potem po napęd."),

        h2("Serwis i naprawa bram garażowych: sprężyny, linki, napęd i pilot"),
        p("Serwis szukany jest w pośpiechu: brama stoi, auto jest w środku albo nie da się zamknąć garażu na noc. Podstrona naprawy mówi w pierwszych zdaniach, jakie usterki usuwacie, w jakich miejscowościach i w jakim czasie, oraz czy serwisujecie bramy innych producentów. Osobno warto opisać przeglądy okresowe bram przemysłowych — dla firm to regularne zlecenia, często z umową na kilka lat."),
        p("Na podstronie sprężyn uczciwie piszcie, że naprężonej sprężyny nie powinno się regulować samemu. To zdanie chroni klienta, a jednocześnie jest dokładnie taką odpowiedzią, jaką cytują podsumowania AI w Google."),

        h2("Producenci bram i lokalizator dealerów: Wiśniowski, Krispol, Hörmann w pozycjonowaniu"),
        p("Większość firm montuje bramy kilku producentów — Wiśniowski, Krispol, Hörmann i innych — i figuruje w ich lokalizatorach „gdzie kupić”. Wynikają z tego dwie rzeczy:"),
        li("podstrona każdego producenta z Waszymi realizacjami łapie frazy „brama Wiśniowski Rzeszów” czy „autoryzowany dealer Hörmann Lublin”, na które strony producentów nie odpowiadają lokalnie"),
        li("link z lokalizatora producenta to jeden z najsilniejszych linków lokalnych, jakie firma bramowa może dostać — powinien prowadzić na właściwą podstronę i mieć aktualną nazwę firmy"),
        p("Dane techniczne z katalogu można przytoczyć, ale opisy skopiowane w całości ze strony producenta nie dadzą pozycji nikomu."),

        h2("Bramy przemysłowe i szybkobieżne: pozycjonowanie dla firm i hal"),
        p("Magazyny, warsztaty, gospodarstwa rolne i hale produkcyjne kupują inaczej: bramy segmentowe przemysłowe, szybkobieżne, rampy i uszczelnienia, a potem przeglądy i naprawy. Tych wyszukiwań jest niewiele, ale jedno zapytanie może dać kilka bram i serwis na lata. Podstrona dla firm wymienia rodzaje bram i urządzeń, jakie montujecie i serwisujecie, możliwość umowy serwisowej i sposób umówienia wizji lokalnej."),

        h2("Wizytówka Google firmy bram garażowych i podstrony miejscowości"),
        p("Przy frazach serwisowych i „brama garażowa [miasto]” Google pokazuje najpierw Mapy. Firma z salonem ekspozycyjnym pokazuje adres i godziny salonu; firma, która tylko montuje i serwisuje, ustawia obszar działania z ukrytym adresem. W obu przypadkach liczą się usługi wpisane osobno, zdjęcia montaży dodawane regularnie i opinie, w których klient pisze, co zamontowaliście i gdzie."),
        p(
          "Podstrona miejscowości ma sens tam, gdzie macie realizacje i opinie do pokazania. Szczegóły pracy nad Mapami opisuję na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Realizacje i opinie: zdjęcia zamontowanych bram jako treść dla Google"),
        p("Bramę kupuje się oczami, ale galeria stu zdjęć bez słowa opisu nic nie mówi wyszukiwarce. Realizacja, która pracuje na pozycję, ma tytuł z rodzajem bramy i miejscowością — „brama segmentowa antracyt z napędem, Wieliczka” — kilka zdań o tym, co klient chciał, jaki model i napęd zamontowaliście, co było trudne przy otworze, oraz link do podstrony danego rodzaju bramy. Te same zdjęcia trafiają do wizytówki. Po montażu poproście klienta o opinię SMS-em z linkiem i o wzmiankę, co zostało zrobione; takie opinie czytają i ludzie, i asystenci AI."),

        h2("Raport w zapytaniach i telefonach: jak mierzę wyniki pozycjonowania bram"),
        p("Pozycje fraz są w raporcie, ale obok liczb, z których firma żyje: telefonów, zapytań o wycenę, zgłoszeń serwisowych i próśb o pomiar z wyszukiwarki i z Map, mierzonych w GA4 i Google Search Console. Zapytania o sprzedaż i o serwis liczę osobno, bo mają inną wartość. Jeśli w danym miesiącu coś nie zadziałało, piszę o tym wprost i proponuję zmianę."),

        h2("Stan surowy zamknięty i sezon budowlany: kiedy klienci szukają bram garażowych"),
        p("Brama garażowa należy do stanu surowego zamkniętego, więc inwestor szuka jej razem z oknami i drzwiami zewnętrznymi — zwykle wiosną i latem, kilka tygodni przed montażem. Podstrony bram powinny być gotowe zimą, bo nowa podstrona potrzebuje miesięcy, żeby wejść wysoko. Serwis i automatyka są potrzebne przez cały rok. Część zapytań o bramy przychodzi też z Oferteo i od firm budujących domy; strona z realizacjami i jasnym opisem montażu pomaga wygrać także te zapytania, bo klient z portalu i tak sprawdza firmę w Google."),

        h2("Pozycjonowanie firmy bram garażowych w ChatGPT i Google AI Overviews (GEO, AEO)"),
        p("Inwestorzy pytają ChatGPT i podsumowania AI w Google: „brama segmentowa czy uchylna”, „ile kosztuje brama garażowa z montażem”, „jaki napęd do bramy przesuwnej”. Asystenci odpowiadają na podstawie stron, które mogą przeczytać i sprawdzić. Praca nad tym — GEO (generative engine optimization) i AEO (answer engine optimization) — oznacza dla firmy bramowej:"),
        li("odpowiedzi na pytania o rodzaje bram, napędy i ceny na Waszych podstronach, z tym, co wpływa na koszt"),
        li("producentów, obszar montażu, gwarancję i serwis zapisane zwykłymi zdaniami"),
        li("dane strukturalne firmy, usług i obszaru działania"),
        li("te same dane na stronie, w wizytówce, w katalogach i w lokalizatorach producentów"),
        p(
          "Na początku i po kilku miesiącach pytam asystentów o Waszą firmę i porównuję odpowiedzi. Szczegóły na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Ile kosztuje pozycjonowanie firmy bram garażowych"),
        li("Audyt SEO strony, wizytówki, konkurencji i odpowiedzi AI: od 1000 zł jednorazowo; dostajecie listę poprawek ułożoną od najważniejszej."),
        li("Jednorazowe prace — podstrony bram, napędów i serwisu, strony producentów, dane strukturalne — od 1000 do 3000 zł."),
        li("Stałe pozycjonowanie firmy bram garażowych — nowe podstrony, realizacje, Mapy i opinie, raporty: od 3500 zł miesięcznie; w dużych miastach z silną konkurencją od 5500 zł miesięcznie."),
        p(
          "Firmy, które oprócz bram budują lub wykańczają domy, znajdą więcej na stronie ",
          link("pozycjonowanie strony firmy budowlanej", "/pl/pozycjonowanie-strony-firmy-budowlanej"),
          ". Jak wygląda stała współpraca, opisuję na stronie ",
          link("strategia i optymalizacja SEO", "/pl/oferty/strategia-i-optymalizacja-seo"),
          ", a wszystkie ceny są w ",
          link("cenniku", "/pl/cennik"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie firmy bram garażowych: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje pozycjonowanie firmy bram garażowych?", "Za audyt płacicie od 1000 zł jednorazowo. Pojedyncze prace, na przykład podstrony bram i napędów, to od 1000 do 3000 zł, stała współpraca — od 3500 zł miesięcznie, a przy silnej konkurencji w dużym mieście od 5500 zł. Stałą cenę podaję po krótkim opisie firmy."],
          ["Czy sprzedaż bram i serwis powinny mieć osobne podstrony?", "Tak. Inwestor wybierający bramę i właściciel bramy z pękniętą sprężyną wpisują inne frazy i potrzebują innych odpowiedzi. Wspólna podstrona zwykle nie wychodzi wysoko na żadną z nich."],
          ["Czy link z lokalizatora dealerów producenta pomaga w SEO?", "Tak, to mocny link lokalny. Sprawdźcie, czy wpis ma aktualną nazwę i prowadzi na podstronę danego producenta, a nie tylko na stronę główną."],
          ["Co jest lepsze: pozycjonowanie czy Google Ads?", "Reklama daje zapytania od razu, ale płaci się za każde kliknięcie. Pozycjonowanie rozkręca się miesiącami, za to podstrony bram i realizacji przynoszą zapytania bez opłaty za kliknięcie. Kampanie może dalej prowadzić osoba, która już się nimi zajmuje; moja część to SEO, które z czasem zmniejsza zależność od płatnych kliknięć."],
          ["Kiedy zacząć pozycjonowanie przed sezonem?", "Jesienią albo zimą. Nowe podstrony potrzebują zwykle dwóch–czterech miesięcy, a inwestorzy szukają bram wiosną i latem."],
          ["Czy pracujesz z firmami spoza Warszawy?", "Pracuję sam i zdalnie, z firmami z całej Polski: strona, wizytówka i dane wyszukiwań dla miejscowości, w których montujecie."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie firmy bram garażowych: co mi wysłać"),
        p(
          "Napiszcie, jak nazywa się firma, podeślijcie stronę i wizytówkę z Map Google, producentów, których bramy i napędy montujecie, usługi, przy których chcecie więcej zleceń — sprzedaż, automatyka, serwis, bramy przemysłowe — i miejscowości, do których dojeżdżacie. Odpowiem, co poprawiłbym najpierw i za jaką stałą cenę. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
