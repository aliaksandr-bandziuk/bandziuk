// Landing page fixture: Pozycjonowanie strony kawiarni (PL), group «cafe-seo».
// New page. Market version for Polish kawiarnie — independent cafés, kawiarnie
// specialty with their own or a Polish palarnia, śniadaniownie and small
// chains of two or three lokale — not a translation of cafe-seo.en.
// Semantic core: BRIEF.md — «pozycjonowanie strony kawiarni» (slug phrase, no
// measured PL volume); ref/food-venues.md PL: «strona kawiarni» 0;
// ref/food-developer.md PL PAA are about opening a café (costs, barista pay) —
// not targeted. H1 and headings carry «pozycjonowanie strony kawiarni»
// (owner’s rule: always «strony»), plus guests’ phrases as examples:
// kawiarnia blisko mnie, kawa na wynos, śniadania + dzielnica, kawiarnia do
// pracy z laptopem, kawa specialty, palarnia kawy.
// Intent: ref/intent-check-food-developer.md — EN «cafe seo» vs «restaurant
// seo» 1 of 10 shared → own page; PL «strona dla kawiarni» vs «strona
// internetowa dla restauracji» 0 shared → café ≠ restaurant in PL too.
// Angles: four search groups, walking-radius Mapy Google (pinezka, 7:00 vs
// 8:00, ogródek season), wizytówka (kategoria, pozycje menu, zdjęcia sali,
// opinie stałych gości), podstrony powodów (śniadania, laptop, psy, roślinne,
// dzieci), specialty i palarnia (ziarno, subskrypcja, biura), wydarzenia
// (Event, Facebook links to the page), turystyczne miasta (EN version,
// hreflang), Pyszne.pl / Glovo / Wolt / Uber Eats vs zamów i odbierz, several
// lokale, AI answers, raport, koszt.
// NOT on this page: budowa strony — menu, zamawianie, sklep z kawą, karta
// lojalnościowa, szybkość (/pl/strona-internetowa-dla-kawiarni — sibling,
// linked once); restaurant arguments (/pl/pozycjonowanie-strony-restauracji —
// linked once); wizytówka in depth (/pl/oferty/pozycjonowanie-lokalne);
// prowadzenie social mediów, reklamy.
// Owner’s rules: every SEO page covers AI search (GEO, AEO); never say there
// are no clients from the visitor’s industry; restaurants under NDA are
// mentioned once, positively; «faktura» only, never «faktura VAT».
import { p, h2, li, link, k } from "./pt";

export const cafeSeoPl = {
  lang: "pl",
  group: "cafe-seo",
  slug: "pozycjonowanie-strony-kawiarni",
  title: "Pozycjonowanie strony kawiarni",
  heading: "Pozycjonowanie strony kawiarni",
  excerpt:
    "Zajmuję się pozycjonowaniem strony kawiarni: Mapy Google w zasięgu spaceru, podstrony pod śniadania, pracę z laptopem i kawę specialty, wydarzenia, wersja dla turystów, opinie stałych gości i miejsce w odpowiedziach AI — rozliczane w trasach, telefonach i zamówieniach na wynos.",
  seo: {
    metaTitle: "SEO kawiarni: Mapy Google, śniadania i AI | Bandziuk",
    metaDescription:
      "Pozycjonowanie strony kawiarni: Mapy Google w okolicy, podstrony śniadań i pracy z laptopem, kawa specialty, wydarzenia, odpowiedzi AI. Audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Mapy, śniadania, kawa specialty", "Audyt od 1000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Kawiarnia blisko mnie · od 7:00", "Kawiarnia do pracy z laptopem", "Śniadania w weekend", "Trasa · Kawa na wynos"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO kawiarni: wizytówka Google, strona, lokale w okolicy i odpowiedzi AI", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO dla kawiarni: podstrony śniadań, pracy z laptopem, kawy i wydarzeń, wersja angielska, dane strukturalne", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie strony kawiarni", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje pozycjonowanie strony kawiarni",
      items: [
        { _key: k("o"), iconName: "map-pin", title: "Mapy Google w zasięgu spaceru", text: "Pinezka, godzina otwarcia, kategoria, zdjęcia sali" },
        { _key: k("o"), iconName: "layers", title: "Podstrony pod powody wizyty", text: "Śniadania, laptop, psy, opcje roślinne" },
        { _key: k("o"), iconName: "file-text", title: "Kawa specialty, ziarno i wydarzenia", text: "Palarnia, subskrypcja, cupping, latte art" },
        { _key: k("o"), iconName: "search", title: "Wersja dla turystów", text: "Najważniejsze podstrony po angielsku" },
        { _key: k("o"), iconName: "sparkles", title: "Kawiarnia w odpowiedziach AI", text: "Wi-Fi, godziny i menu zapisane tekstem" },
        { _key: k("o"), iconName: "trending-up", title: "Raport w trasach i zamówieniach", text: "Według dnia, godziny i lokalu" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO kawiarni", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe pozycjonowanie strony kawiarni", value: "od 3500 zł / mies.", note: "Mapy, podstrony, opinie, AI", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: lokalne firmy, które klienci znajdują w pobliżu na telefonie",
      subtitle:
        "Z kawiarnią łączy je to, że klient szuka ich niedaleko, na telefonie, i decyduje w kilka sekund na podstawie mapy i paru faktów. Warszawskiemu warsztatowi samochodowemu zrobiłem lokalne SEO, wizytówkę w Mapach Google i podstrony usług — to ten sam blok mapy, o który walczy kawiarnia. Warszawska przechowalnia opon działa na jednej stronie, której teksty SEO właściciel poprawia sam, tak jak właściciel kawiarni zmienia godziny i ciasto dnia. Felgilab, pracownia renowacji felg, dostał na nowym WordPressie przejrzyste podstrony usług i cen. Strona psychoterapeuty z Mediolanu ma podstrony lokalizacji i pojawia się w odpowiedziach ChatGPT, a ScanM2, firma skanowania laserowego 3D, po przebudowie strony ma 29 razy większy ruch z Google. Robiłem też strony dla restauracji, których właściciele poprosili, żebym nie pokazywał ich publicznie.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "auto-repair-seo-and-ux-boost",
        "tyre-storage-landing-page-with-editable-seo",
        "felgilab-wordpress-rebuild",
        "psychotherapist-website-milan",
        "architecture-website-rebuild-and-seo-scan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena pozycjonowania strony kawiarni",
      subtitle: "W ciągu jednego dnia roboczego dostajesz listę pierwszych poprawek — w wizytówce, na podstronach albo w wersji angielskiej — i stałą cenę.",
      contextLabel: "Nazwa kawiarni lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Jaką kawiarnię prowadzisz?", options: ["Kawiarnię specialty", "Kawiarnię ze śniadaniami", "Kawiarnię z cukiernią", "Kilka lokali"] },
        { _key: k("z"), question: "Skąd przychodzą nowi goście?", options: ["Z Map Google", "Z Instagrama i Facebooka", "Z Pyszne.pl, Glovo lub Wolt", "Z ulicy, bo przechodzą obok"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Pozycjonowanie strony kawiarni to praca nad tym, żeby osoba, która rano wpisuje „kawa na wynos Rondo ONZ”, a w sobotę „śniadania Kazimierz”, trafiła do Twojej kawiarni — w Mapach Google, w wynikach wyszukiwania i w odpowiedziach asystentów AI. Robię to sam: sprawdzam wizytówkę i stronę, piszę podstrony, poprawiam kod i liczę efekty. Pracuję z niezależnymi kawiarniami, lokalami specialty i małymi sieciami po dwa–trzy adresy."),

        h2("Pozycjonowanie strony kawiarni: frazy, którymi ludzie szukają kawy i miejsca do posiedzenia"),
        p("Wyszukiwania kawiarni są krótkie i praktyczne. Gdy zbieram dane dla Twojej ulicy i miasta, zwykle układają się w cztery grupy:"),
        li("teraz i blisko — „kawiarnia blisko mnie”, „kawa na wynos”, „kawiarnia otwarta od 7”, „kawiarnia przy dworcu”"),
        li("powód, żeby zostać — „kawiarnia do pracy z laptopem”, „kawiarnia z ogródkiem”, „kawiarnia przyjazna psom”, „kawiarnia z kącikiem dla dzieci”"),
        li("jedzenie — „śniadania Mokotów”, „śniadania cały dzień”, „wegańskie ciasto”, „bezglutenowe śniadanie”"),
        li("sama kawa — „kawa specialty Wrocław”, „palarnia kawy”, „kawa ziarnista świeżo palona”, „kawa z dripa”"),
        p("Pierwszą grupę rozstrzyga mapa, pozostałe — podstrony na Twojej stronie. Kawiarnia, która ma tylko stronę główną i link do Instagrama, walczy wyłącznie o pierwszą."),

        h2("Kawiarnia blisko mnie w Mapach Google: konkurencja na kilku sąsiednich ulicach"),
        p("Kawę kupuje się po drodze: między tramwajem a biurem, w przerwie między zajęciami, na spacerze z wózkiem. Wynik w Mapach dla „kawiarnia blisko mnie” zmienia się co kilka przecznic, więc konkurują z Tobą głównie lokale, do których da się dojść w parę minut. Dlatego liczą się drobiazgi:"),
        li("pinezka przy wejściu — kawiarnia w biurowcu, w podwórku kamienicy albo w galerii potrzebuje opisu, którędy wejść"),
        li("godzina otwarcia — poranne wyszukiwania zaczynają się przed siódmą; jeśli wizytówka podaje 8:00, a otwierasz o 7:00, znikasz z filtra „otwarte teraz” w najlepszej godzinie dnia"),
        li("ogródek — od kiedy działa w sezonie i czy jest zadaszony, zapisane w opisie i we wpisach"),
        li("nazwa zgodna z szyldem, bez dopisanych fraz, za które Google może zawiesić wizytówkę"),

        h2("Wizytówka Google kawiarni: kategoria, pozycje menu z cenami, zdjęcia sali i opinie"),
        p("Kategoria główna to „Kawiarnia”; dodatkowe — cukiernia, herbaciarnia, palarnia kawy — tylko wtedy, gdy to prawda na co dzień. Reszta wizytówki działa jak skrócona tablica z menu:"),
        li("pozycje menu z nazwami i cenami — flat white, matcha latte, szakszuka — żeby wyszukanie napoju albo dania w okolicy mogło trafić na Ciebie"),
        li("zdjęcia, na których widać stoliki, gniazdka i ogródek, a nie tylko latte art"),
        li("atrybuty Wi-Fi, ogródka, zwierząt i dostępności ustawione zgodnie z rzeczywistością"),
        li("opinie od stałych gości, poproszonych po dziesiątej kawie, a nie od kogoś, kto jest u Ciebie pierwszy raz — konkretne słowa o miejscu przy oknie czy szybkim Wi-Fi pokrywają się z tym, czego szukają następni"),
        p(
          "Więcej o pracy nad Mapami Google — kategoriach, katalogach i obszarze działania — na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Podstrony kawiarni pod śniadania, pracę z laptopem, psy i opcje roślinne"),
        p("Ludzie wybierają kawiarnię z konkretnego powodu i ten powód wpisują w wyszukiwarkę. Dla każdego powodu, który u Ciebie jest prawdą, warto mieć osobną podstronę z faktami do sprawdzenia:"),
        li("śniadania — w jakie dni i do której, czy przyjmujecie rezerwacje, ile trwa czekanie w niedzielę"),
        li("praca z laptopem — Wi-Fi, ile miejsc ma gniazdka, czy w weekend są godziny bez laptopów"),
        li("psy — czy wejdą do środka, czy tylko do ogródka, miska z wodą, zasady w godzinach tłoku"),
        li("opcje roślinne — jakie napoje roślinne i czy za nie dopłacasz, które ciasta są wegańskie"),
        li("dzieci — kącik do zabawy, krzesełka, miejsce na wózek"),
        p("Lepiej trzy podstrony z faktami niż osiem ogólnych. Jeśli psów nie wpuszczacie, podstrony o nich nie ma — ale warto to zaznaczyć w atrybutach wizytówki, żeby nikt nie przyszedł z psem na próżno."),

        h2("Kawa specialty i palarnia: pozycjonowanie strony kawiarni, która sprzedaje ziarno"),
        p("Kawiarnia specialty, która sama pali kawę albo współpracuje z polską palarnią, ma drugi produkt z własnymi frazami: „palarnia kawy Kraków”, „świeżo palona kawa”, „kawa ziarnista Etiopia”, „subskrypcja kawy”. Kupujący porównują datę palenia, pochodzenie i metodę parzenia, więc w Google wygrywają:"),
        li("podstrona każdej kawy: kraj i region, farma lub spółdzielnia, obróbka, nuty smakowe, przepis na drip, aeropress i kolbę"),
        li("podstrona o paleniu: jak często palicie i skąd pochodzi zielona kawa"),
        li("oferta dla biur i innych kawiarni, które chcą podawać Waszą kawę"),
        p("Sprzedaż ziarna ma inny rytm niż sala: szczyt przypada przed świętami, gdy ludzie szukają „kawy na prezent” i „zestawu kawowego”, więc taka podstrona powinna być gotowa już w październiku."),

        h2("Wydarzenia w kawiarni w Google: warsztaty latte art, cupping i wieczory planszówek"),
        p("Warsztaty baristyczne, cupping, wieczory gier planszowych, klub książki czy koncert akustyczny dają kawiarni frazy poza samą kawą: „warsztaty latte art Poznań”, „cupping kawy”, „wieczór planszówek Gdańsk”. Każde cykliczne wydarzenie dostaje stałą podstronę z terminami, ceną i zapisami, oznaczoną danymi strukturalnymi Event, dzięki którym Google może pokazać datę w wynikach. Wydarzenie na Facebooku zostaje, ale linkuje do tej podstrony. Miejskie kalendarze imprez i lokalne portale, które o nim piszą, dają linki trudne do zdobycia inaczej."),

        h2("Kawiarnia w mieście turystycznym: frazy po angielsku i sezon ogródków"),
        p("W Krakowie, Gdańsku, Wrocławiu, Sopocie czy Zakopanem dużą część gości stanowią turyści i obcokrajowcy, którzy szukają po angielsku: „coffee near me”, „brunch Kraków Old Town”, „specialty coffee Gdańsk”. Polska podstrona nie pokaże się na te zapytania. Pomaga angielska wersja najważniejszych podstron — menu, śniadań, godzin i dojazdu — połączona z polską przez hreflang, oraz opis wizytówki, z którego bez tłumacza wynika, czy jest Wi-Fi i miejsce do posiedzenia."),
        p("Sezon też zmienia frazy: od maja rośnie liczba wyszukiwań kawiarni z ogródkiem i kawy mrożonej, a jesienią — miejsc na długie posiedzenie z książką. Podstrony sezonowe publikuję kilka tygodni przed zmianą pogody, a nie w pierwszy ciepły weekend."),

        h2("Pyszne.pl, Glovo, Wolt i Uber Eats a strona kawiarni w wynikach wyszukiwania"),
        p("Po wpisaniu nazwy kawiarni ze słowem „menu” obok Twojej strony często pojawia się jej profil na Pyszne.pl, Glovo, Wolt albo Uber Eats, czasem wyżej. W kawiarni dostawy to zwykle niewielka część sprzedaży, a od każdej zamówionej przez aplikację kawy idzie prowizja. Ważniejsza jest kawa zamówiona rano z odbiorem po drodze do pracy. Dlatego przycisk zamówienia w wizytówce prowadzi do Twojego zamawiania z odbiorem osobistym, jeśli je masz, podstrona menu wygrywa wyszukiwanie nazwy z „menu”, a aplikacje zostają dodatkiem dla tych, którzy siedzą w domu."),

        h2("Pozycjonowanie strony kawiarni z kilkoma lokalami: wizytówka i podstrona dla każdego adresu"),
        p("Lokale jednej marki żyją w innym rytmie: punkt przy uczelni pustoszeje w lipcu i sierpniu, kawiarnia na starówce ma wtedy najwięcej gości, a kiosk przy dworcu otwiera o 6:00 i sprzedaje tylko na wynos. Każdy adres ma więc własną wizytówkę z własnymi godzinami — także wakacyjnymi — i podstronę, która mówi, czego się tam spodziewać. Gdy lokal się przenosi albo zamyka, jego wizytówkę oznaczam jako przeniesioną lub zamkniętą, a podstrona przekierowuje do najbliższego otwartego lokalu."),

        h2("Pozycjonowanie strony kawiarni w ChatGPT i Google AI Overviews (GEO, AEO)"),
        p("Pytania „gdzie w Warszawie popracować z laptopem w niedzielę”, „śniadanie na Kazimierzu bez rezerwacji” czy „kawiarnia z mlekiem owsianym i ogródkiem w Sopocie” coraz częściej trafiają do ChatGPT i Perplexity, a w Google — do podsumowań AI. Asystent podaje kilka miejsc i powód wyboru każdego, wzięty z tekstów, które umie przeczytać. Tę pracę nazywa się GEO i AEO (generative i answer engine optimization); w kawiarni oznacza:"),
        li("Wi-Fi, gniazdka, zasady pracy z laptopem, godziny śniadań, napoje roślinne i psy opisane zdaniami na stronie, a nie tylko na zdjęciu tablicy"),
        li("dane strukturalne CafeOrCoffeeShop z adresem, godzinami, linkiem do menu i przedziałem cen"),
        li("te same dane w wizytówce Google, na Facebooku, w aplikacjach z dostawą i na stronie"),
        p(
          "Na starcie i po kilku miesiącach zadaję asystentom pytania Twoich gości i zapisuję, które kawiarnie polecają. Więcej o metodzie: ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Raport z pozycjonowania strony kawiarni: trasy, telefony i zamówienia na wynos"),
        p("Kawiarnia rzadko dostaje formularz kontaktowy, więc same pozycje mówią niewiele. Raport co miesiąc pokazuje prośby o trasę i telefony z wizytówki według dnia i godziny, wejścia na podstrony śniadań, pracy z laptopem i kawy, zamówienia z odbiorem osobistym i sprzedaż ziarna, które zaczęły się od wyszukiwania — osobno dla każdego lokalu."),

        h2("Ile kosztuje pozycjonowanie strony kawiarni"),
        li("Audyt SEO kawiarni — wizytówka, strona, lokale w okolicy i odpowiedzi AI: od 1000 zł, jednorazowo."),
        li("Jednorazowe prace — podstrony śniadań, pracy z laptopem, kawy i wydarzeń, wersja angielska, porządek w wizytówce, dane strukturalne: od 1000 do 3000 zł."),
        li("Stałe pozycjonowanie strony kawiarni — nowe podstrony, Mapy, opinie, widoczność w AI i raport: od 3500 zł miesięcznie."),
        p(
          "Jedna kawiarnia w mniejszym mieście często dostaje większość efektu z audytu i kilku podstron. Jeśli najpierw trzeba zbudować stronę z menu, zamawianiem albo sklepem z kawą, zajrzyj na stronę ",
          link("strona internetowa dla kawiarni", "/pl/strona-internetowa-dla-kawiarni"),
          ". Restauracja z obsługą kelnerską ma osobną stronę: ",
          link("pozycjonowanie strony restauracji", "/pl/pozycjonowanie-strony-restauracji"),
          ". Jak prowadzę stałą współpracę, opisuję na stronie ",
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
      title: "Pozycjonowanie strony kawiarni: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje pozycjonowanie strony kawiarni?", "Audyt od 1000 zł, pojedyncze prace od 1000 do 3000 zł, a stałe pozycjonowanie od 3500 zł miesięcznie. Konkretną kwotę podam, gdy napiszesz, ile masz lokali, w jakim mieście i czego chcesz więcej: porannych gości, śniadań czy sprzedaży ziarna."],
          ["Czy mała kawiarnia potrzebuje stałego pozycjonowania?", "Nie zawsze. Poprawna wizytówka, kilka podstron o tym, z czego słynie lokal, i nawyk proszenia stałych gości o opinię to często większość tego, czego potrzebuje jedna kawiarnia. Audyt pokaże, czy więcej się opłaci."],
          ["Kiedy kawiarnia pojawi się wyżej na „kawiarnia blisko mnie”?", "Poprawki pinezki, godzin, kategorii i zdjęć potrafią przesunąć lokal w Mapach po kilku tygodniach — ale w zasięgu spaceru, nie w całym mieście. Podstrony śniadań, pracy z laptopem czy kawy potrzebują zwykle dwóch–czterech miesięcy."],
          ["Czy kawiarnia potrzebuje strony po angielsku?", "W miastach turystycznych i w dzielnicach biurowych z wieloma obcokrajowcami — tak, przynajmniej dla menu, godzin, śniadań i dojazdu. Na angielskie zapytania polska podstrona się nie pokaże."],
          ["Czy wystarczy profil na Instagramie i Facebooku?", "Dla gości, którzy już Cię znają, to dobre kanały. Nowi goście szukają w Mapach Google, w wyszukiwarce i w ChatGPT, a tam liczy się wizytówka i strona — nad nimi pracuję, a posty mogą prowadzić do tych samych podstron."],
          ["Czy ChatGPT może polecić moją kawiarnię?", "Tak, gdy ktoś pyta o kawiarnię w okolicy, a fakty o Twojej są łatwe do odczytania: Wi-Fi, godziny, śniadania, opcje roślinne. Wzmianki nikt nie zagwarantuje; porównuję odpowiedzi przed pracą i po kilku miesiącach."],
          ["Czy pracujesz z kawiarniami spoza Warszawy?", "Tak. Cała praca odbywa się zdalnie: wizytówka, strona i dane wyszukiwań z Twojego miasta są dostępne online, a rozmawiamy przez telefon, wideo albo WhatsApp. Za pracę wystawiam fakturę."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie strony kawiarni: co mi wysłać"),
        p(
          "Wyślij nazwę kawiarni, adres strony i link do wizytówki w Mapach Google, liczbę lokali i godziny otwarcia, informację, czy sprzedajesz ziarno i prowadzisz wydarzenia, z jakich aplikacji z dostawą korzystasz i czego chcesz więcej — porannych gości, śniadań, turystów czy zamówień na wynos. Odpowiem, od czego zacząłbym i ile to kosztuje — w stałej cenie. Skorzystaj z ",
          link("formularza powyżej", "#quote"),
          " albo napisz na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
