// Landing page fixture: Pozycjonowanie firmy wywozu gruzu (PL), group
// «junk-removal-seo». New page. Market version for Polish firms doing wywóz
// gruzu, kontenery, opróżnianie mieszkań i wywóz mebli — one bus or tipper,
// or a hook-lift truck with containers — not a translation of
// junk-removal-seo.en.
// Semantic core: ref/home-services.md has no measured PL phrases; H1 and
// headings carry «pozycjonowanie firmy wywozu gruzu», «wywóz gruzu»,
// «kontener na gruz», «opróżnianie mieszkań», «wywóz mebli». PL PAA used: Ile
// kosztuje pozycjonowanie firmy? (cost H2 + FAQ) · Co jest lepsze:
// pozycjonowanie czy Google Ads? (platforms H2 + FAQ).
// Intent: ref/intent-check-home-services.md — EN «junk removal seo» vs «junk
// removal website» 0 shared (the website SERP is haulers themselves =
// consumers) → SEO page only; no PL check.
// Angle: kontenery (KP-5, KP-7, KP-10) and BIG BAG pages with sizes and
// dates, gruz czysty vs zmieszany in the price list, street container and the
// road manager’s consent (general), opróżnianie mieszkań po zmarłych, przed
// sprzedażą, po najemcach, piwnice i garaże, wywóz mebli vs gminny odbiór
// gabarytów i PSZOK, BDO and karta przekazania odpadów (general), B2B:
// ekipy remontowe, firmy budowlane, zarządcy; wizytówka Google; Oferteo,
// Fixly, OLX; AI answers.
// NOT on this page: przeprowadzki (/pl/pozycjonowanie-firmy-przeprowadzkowej —
// linked once); rozbiórki i budowa (/pl/pozycjonowanie-strony-firmy-budowlanej
// — linked once); maps in depth (/pl/oferty/pozycjonowanie-lokalne); site
// build; ads (channels only); waste law in detail (general only).
// Owner’s rules: every SEO page covers AI search (GEO, AEO); never say there
// are no clients from the visitor’s industry.
import { p, h2, h3, li, link, k } from "./pt";

export const junkRemovalSeoPl = {
  lang: "pl",
  group: "junk-removal-seo",
  slug: "pozycjonowanie-firmy-wywozu-gruzu",
  title: "Pozycjonowanie firmy wywozu gruzu",
  heading: "Pozycjonowanie firmy wywozu gruzu i opróżniania mieszkań",
  excerpt:
    "Zajmuję się pozycjonowaniem firm wywozu gruzu: podstrony kontenerów i worków BIG BAG, cennik gruzu czystego i zmieszanego, opróżnianie mieszkań i wywóz mebli, wizytówka Google z opiniami i widoczność w ChatGPT — żeby po kontener dzwoniono do Ciebie, a nie przez platformę zleceń.",
  seo: {
    metaTitle: "SEO dla firmy wywozu gruzu i kontenerów | Bandziuk",
    metaDescription:
      "Pozycjonowanie firmy wywozu gruzu: kontenery i BIG BAG, cennik, opróżnianie mieszkań, wywóz mebli, Mapy Google, opinie i ChatGPT. Audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Gruz, kontenery, opróżnianie", "Audyt od 1000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Kontener na gruz Gdańsk", "Wycena po zdjęciu", "Podstawimy jutro rano", "Poleca ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO firmy wywozu gruzu: strona, cennik, wizytówka Google i odpowiedzi AI", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO: podstrony kontenerów, opróżniania mieszkań i miast, cennik, dane strukturalne", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie firmy wywozu gruzu", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje pozycjonowanie firmy wywozu gruzu",
      items: [
        { _key: k("o"), iconName: "layers", title: "Podstrony kontenerów i worków BIG BAG", text: "Pojemność, co wolno wrzucić, termin podstawienia" },
        { _key: k("o"), iconName: "file-text", title: "Cennik gruzu czystego i zmieszanego", text: "Jasne zasady zamiast „cena do uzgodnienia”" },
        { _key: k("o"), iconName: "image", title: "Opróżnianie mieszkań ze zdjęciami", text: "Przed i po, piwnice, garaże, mieszkania po najemcach" },
        { _key: k("o"), iconName: "map-pin", title: "Wizytówka Google na Twoje miasta", text: "Obszar działania, zdjęcia aut, opinie z nazwą usługi" },
        { _key: k("o"), iconName: "sparkles", title: "Widoczność w ChatGPT i AI Overviews", text: "Ceny i zasady, które asystent może podać" },
        { _key: k("o"), iconName: "phone", title: "Raport w telefonach i zamówieniach", text: "Ile kontenerów zamówiono z wyszukiwarki" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO firmy wywozu gruzu", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe pozycjonowanie firmy wywozu gruzu", value: "od 3500 zł / mies.", note: "podstrony, Mapy, opinie, AI", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: strony warszawskich firm usługowych i remontowych",
      subtitle:
        "Warszawska firma remontowo-inwestycyjna — remonty, wykończenia, inwestycje — ma stronę o dopracowanym designie, a po jej pracy zostaje gruz. Warsztat samochodowy, w którym zajmowałem się SEO lokalnym, Mapami Google, UX i podstronami usług, Felgilab z nową stroną na WordPressie, podstronami usług i cennikiem oraz przechowalnia opon ze stroną, której teksty SEO właściciel edytuje sam, to firmy z Warszawy, do których klienci dzwonią z wyszukiwarki i z Map. ScanM2, firma skanowania laserowego 3D i BIM, po przebudowie strony ma zapytania co tydzień i 29 razy większy ruch organiczny. Firma wywozu gruzu potrzebuje tego samego: podstrony pod każdą usługę i cenę, wizytówki, która daje telefony, i wyniku liczonego w zamówieniach.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "renovation-and-investment-website-with-premium-design",
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
        "architecture-website-rebuild-and-seo-scan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena pozycjonowania firmy wywozu gruzu",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: co poprawiłbym najpierw — kontenery, cennik, opróżnianie mieszkań czy wizytówkę — i za jaką stałą cenę.",
      contextLabel: "Nazwa firmy lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Czego chcesz mieć więcej?", options: ["Wywozu gruzu i kontenerów", "Opróżniania mieszkań", "Wywozu mebli i gabarytów", "Stałych zleceń od firm"] },
        { _key: k("z"), question: "Czym jeździsz?", options: ["Bus lub mała wywrotka", "Kilka aut i ekip", "Hakowiec z kontenerami", "Własny plac i sortownia"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Pozycjonowanie firmy wywozu gruzu to praca nad tym, żeby osoba po remoncie, która wpisuje „kontener na gruz Wrocław”, „wywóz gruzu cena” albo „opróżnianie mieszkania po zmarłym”, znalazła Twoją firmę w Google i zadzwoniła. Całą pracę — od analizy fraz po zmiany na stronie i w Mapach — wykonuję osobiście, dla firm z jednym autem i dla tych, które mają hakowiec, kilkadziesiąt kontenerów i własny plac."),

        h2("Pozycjonowanie firmy wywozu gruzu: co obejmuje usługa"),
        p("Klienci tej branży szukają bardzo konkretnie: rozmiaru kontenera, rodzaju odpadów, terminu i ceny. Dlatego pozycjonowanie opiera się na podstronach, a nie na jednej stronie „Usługi”:"),
        li("kontenery i worki BIG BAG — każdy rozmiar i rodzaj odpadów osobno"),
        li("opróżnianie mieszkań, piwnic, strychów i garaży"),
        li("wywóz mebli i gabarytów"),
        li("cennik, wizytówka w Mapach Google i opinie"),
        li("odpowiedzi ChatGPT i podsumowania AI w Google"),
        p(
          "Jeśli Twoja firma zajmuje się głównie przeprowadzkami, a wywóz to dodatek, lepiej pasuje strona ",
          link("pozycjonowanie firmy przeprowadzkowej", "/pl/pozycjonowanie-firmy-przeprowadzkowej"),
          ".",
        ),

        h2("Kontenery na gruz i worki BIG BAG: podstrony z pojemnością, zasadami i terminem"),
        p("„Kontener KP-7 cena”, „kontener na gruz na 3 dni”, „worek BIG BAG na gruz z odbiorem” — każda z tych fraz ma własnego klienta. Podstrona kontenera odpowiada na pytania, które i tak słyszysz przez telefon:"),
        li("pojemność i wymiary, ile mniej więcej gruzu się zmieści, czy kontener wjedzie w wąską bramę"),
        li("co wolno wrzucić, a czego nie: gruz, drewno, papa, eternit, opony"),
        li("na ile dni podstawiasz kontener i ile kosztuje każdy kolejny dzień"),
        li("kiedy najwcześniej możesz podstawić i odebrać"),
        p("Klienci często nie wiedzą, że kontener na ulicy albo chodniku zwykle wymaga zgody zarządcy drogi na zajęcie pasa drogowego. Krótka informacja o tym, jak to wygląda w Twoim mieście, oszczędza Ci telefonów i dobrze się pozycjonuje."),

        h2("Wywóz gruzu czystego i odpadów zmieszanych: cennik na stronie firmy"),
        p("Gruz czysty — beton, cegła, kafle — i odpady zmieszane po remoncie kosztują inaczej, bo inaczej się je zagospodarowuje. Klient tego nie wie, więc „wywóz gruzu cena” wpisuje, licząc na jedną liczbę. Cennik, który wyjaśnia różnicę, zmniejsza liczbę kłótni przy odbiorze i daje asystentom AI dane z Twoją nazwą. Wystarczą zasady: cena za kontener według rozmiaru i rodzaju odpadów, dopłaty za przekroczenie wagi albo niedozwolone odpady, wycena po zdjęciu przesłanym przez WhatsApp."),

        h2("Opróżnianie mieszkań, piwnic i garaży: podstrony dla spadkobierców, właścicieli i zarządców"),
        p("Opróżnianie mieszkań to inna usługa i inny klient niż kontener po remoncie. Dzwonią spadkobiercy, którzy muszą przygotować mieszkanie po zmarłym rodzicu do sprzedaży, właściciele po najemcach, którzy zostawili wszystko, i biura nieruchomości przed sesją zdjęciową. Szukają „opróżnianie mieszkań Warszawa”, „likwidacja mieszkania po zmarłym”, „sprzątanie piwnicy z wywozem”."),
        p("Taka podstrona potrzebuje spokojnego tonu i jasnego przebiegu: oględziny lub zdjęcia, odłożenie rzeczy, które rodzina chce zachować, wywóz, oddanie mebli w dobrym stanie, sprzątanie na koniec. Zdjęcia przed i po — bez rzeczy osobistych — oraz informacja, że możesz pracować bez obecności właściciela, po przekazaniu kluczy, robią dużą różnicę."),

        h2("Wywóz mebli i gabarytów a gminny odbiór i PSZOK: treści, które przyciągają klientów"),
        p("Wiele osób najpierw sprawdza, czy stara kanapa zniknie za darmo: „odbiór gabarytów Kraków termin”, „PSZOK co przyjmuje”. Artykuł, który uczciwie opisuje, jak działa odbiór gminny w Twoim mieście i kiedy płatny wywóz jest po prostu szybszy — z wnoszeniem z piętra, w dniu, który pasuje klientowi — przyciąga ludzi tuż przed decyzją. Każdy taki tekst kończy się linkiem do Twojej wyceny."),
        p("Druga część tej podstrony to informacja, co dzieje się z rzeczami. Jeśli meble w dobrym stanie oddajesz fundacjom albo do sklepów charytatywnych, a złom i elektroodpady trafiają do punktów, które je przetwarzają, napisz to wprost i podaj nazwy partnerów, jeśli się zgadzają. Coraz więcej klientów o to pyta, a lokalne fundacje czasem linkują do firm, które im pomagają."),

        h2("Zamówienie kontenera przez telefon, WhatsApp i formularz: strona, która przyjmuje zlecenia"),
        p("Pozycjonowanie przyprowadza ludzi, ale zamówienie składa się w telefonie, często na placu budowy. Na każdej podstronie powinien być przycisk „Zadzwoń” i WhatsApp z gotową pierwszą wiadomością, na przykład „Kontener KP-7 na Bemowo, od czwartku”. Krótki formularz pyta tylko o adres, rozmiar, rodzaj odpadów i termin. Jeśli możesz pokazać najbliższy wolny termin podstawienia, pokaż go — w sezonie remontów to często decyduje o telefonie. Każde zapytanie trafia do skrzynki lub arkusza razem z informacją, z której podstrony przyszło, żeby w raporcie było widać zamówienia z wyszukiwarki."),

        h2("BDO, karta przekazania odpadów i faktura: zaufanie na stronie firmy wywozu gruzu"),
        p("Firmy transportujące odpady w Polsce muszą mieć wpis do rejestru BDO, a klienci firmowi pytają o kartę przekazania odpadów. Numer rejestrowy BDO podany tekstem na stronie, informacja, dokąd trafiają odpady, i faktura VAT to sygnały, że nie wyrzucisz gruzu do lasu. Opisuję to ogólnie i po sprawdzeniu Twoich dokumentów — szczegóły przepisów zależą od rodzaju odpadów."),

        h2("Klienci firmowi firmy wywozu gruzu: ekipy remontowe, firmy budowlane i zarządcy"),
        p("Najwięcej stałych zleceń dają nie osoby prywatne, tylko ekipy remontowe, firmy budowlane, zarządcy nieruchomości i wspólnoty. Szukają rzadziej, ale gdy znajdą sprawdzonego dostawcę, zamawiają co tydzień. Podstrona dla firm opisuje szybkie podstawienie, rozliczenie na fakturę zbiorczą, dokumenty odpadowe i kontakt bezpośrednio do dyspozytora."),
        p(
          "Jeśli oprócz wywozu robisz też rozbiórki i wyburzenia, ta część pasuje do strony ",
          link("pozycjonowanie strony firmy budowlanej", "/pl/pozycjonowanie-strony-firmy-budowlanej"),
          ".",
        ),

        h2("Wizytówka Google firmy wywozu gruzu: obszar działania, zdjęcia i opinie"),
        p("Na „wywóz gruzu” i „kontenery na gruz” Mapy Google pokazują się nad zwykłymi wynikami. Co decyduje o miejscu w Mapach:"),
        li("trafna kategoria główna i usługi wpisane osobno: kontenery, BIG BAG, opróżnianie mieszkań, wywóz mebli"),
        li("obszar działania zgodny z miejscowościami, do których naprawdę dojeżdżasz"),
        li("zdjęcia aut, kontenerów na posesjach i opróżnionych pomieszczeń, dodawane po zleceniach"),
        li("prośba o opinię SMS-em po odbiorze, z prośbą o wspomnienie usługi i miasta"),
        p(
          "Podstrona miasta ma sens tam, gdzie masz zlecenia i coś lokalnego do powiedzenia. Szczegóły pracy z Mapami opisuję na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Oferteo, Fixly, OLX i pozycjonowanie: skąd firma wywozu gruzu bierze zlecenia"),
        p("Platformy zleceń i ogłoszenia dają telefony szybko, ale zlecenie widzi kilka firm, a klient wybiera najniższą cenę. Przy małym wywozie opłata za kontakt potrafi zjeść dużą część zarobku. Reklama Google na „kontener na gruz” w dużym mieście też jest droga w sezonie remontów. Pozycjonowanie rośnie wolniej, ale klient z wyszukiwarki dzwoni tylko do Ciebie. Najwięcej remontów i zamówień kontenerów przypada na wiosnę, lato i wczesną jesień, więc nowe podstrony piszę zimą, żeby zdążyły się wypozycjonować przed sezonem. Na pytanie, co jest lepsze — pozycjonowanie czy Google Ads — zwykle odpowiadam: na start jedno i drugie, a z czasem coraz więcej z SEO. Moja część to wyszukiwarka i odpowiedzi AI."),

        h2("Pozycjonowanie firmy wywozu gruzu w ChatGPT i Google AI Overviews (GEO, AEO)"),
        p("Ludzie pytają ChatGPT albo podsumowania AI w Google: „ile kosztuje kontener na gruz 7 m³”, „co zrobić ze starymi meblami”, „czy eternit można wrzucić do kontenera”. Asystent odpowiada i czasem podaje firmy. Na takie odpowiedzi pracuje GEO (generative engine optimization), nazywane też AEO (answer engine optimization). W firmie wywozu gruzu oznacza to:"),
        li("rozmiary kontenerów, zasady cennika i dozwolone odpady opisane tekstem"),
        li("obszar działania, terminy podstawienia i numer BDO jako fakty"),
        li("dane strukturalne firmy i usług"),
        li("te same dane i świeże opinie w Google i katalogach firm"),
        p(
          "Na początku i po kilku miesiącach zadaję asystentom pytania Twoich klientów i sprawdzam, czy pada nazwa Twojej firmy. Więcej na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Ile kosztuje pozycjonowanie firmy wywozu gruzu"),
        li("Audyt SEO — strona, cennik, wizytówka, opinie i odpowiedzi AI: od 1000 zł, jednorazowo, z listą poprawek według wpływu."),
        li("Jednorazowe prace — podstrony kontenerów, opróżniania mieszkań i miast, cennik, dane strukturalne: od 1000 do 3000 zł."),
        li("Stałe pozycjonowanie firmy wywozu gruzu — kolejne podstrony usług i miast, praca nad wizytówką i opiniami, sprawdzanie odpowiedzi AI, co miesiąc liczba zamówień z wyszukiwarki: od 3500 zł miesięcznie, przy silnej konkurencji w największych miastach od 5500 zł miesięcznie."),
        p(
          "Jak wygląda stała praca, opisuję na stronie ",
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
      title: "Pozycjonowanie firmy wywozu gruzu: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje pozycjonowanie firmy wywozu gruzu?", "Audyt kosztuje od 1000 zł jednorazowo, pojedyncze prace od 1000 do 3000 zł, a stałe pozycjonowanie od 3500 zł miesięcznie, przy silnej konkurencji od 5500 zł. Stałą cenę podaję po krótkim opisie firmy, usług i miast."],
          ["Po jakim czasie pozycjonowanie da telefony?", "Poprawki w wizytówce i cenniku potrafią dać efekt po kilku tygodniach. Nowe podstrony kontenerów i opróżniania mieszkań zwykle potrzebują dwóch–pięciu miesięcy, zależnie od konkurencji w mieście."],
          ["Co jest lepsze: pozycjonowanie czy Google Ads?", "Google Ads przynosi zamówienia od pierwszego dnia, tyle że płacisz za każde kliknięcie, a w sezonie remontów stawki rosną. Pozycjonowanie rośnie wolniej i potem przyprowadza klientów bez opłaty za kliknięcie. Wiele firm zaczyna od obu i z czasem przesuwa budżet w stronę SEO."],
          ["Czy pokazywać ceny kontenerów na stronie?", "Warto pokazać przynajmniej zasady: rozmiary, różnicę między gruzem czystym a zmieszanym, dopłaty i czas podstawienia. Klient szybciej decyduje, a Ty masz mniej sporów przy odbiorze."],
          ["Czy opróżnianie mieszkań potrzebuje osobnej podstrony?", "Tak. To inny klient — spadkobierca, właściciel po najemcach, biuro nieruchomości — i inne wyszukiwania niż kontener po remoncie. Jedna podstrona dla obu usług zwykle nie pozycjonuje się na żadną."],
          ["Czy numer BDO powinien być na stronie?", "Tak, jako tekst, razem z pełną nazwą firmy i NIP. Klienci firmowi go sprawdzają, a asystenci AI traktują takie dane jako sygnał wiarygodności."],
          ["Czy pracujesz z firmami spoza Warszawy?", "Tak. Współpraca jest zdalna, więc firma z Lublina, Szczecina czy powiatu pod Rzeszowem dostaje to samo co warszawska: analizę fraz dla swojego miasta i okolicznych gmin."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie firmy wywozu gruzu: co mi wysłać"),
        p(
          "Podeślij adres strony, link do firmy w Mapach Google, listę usług — kontenery, BIG BAG, opróżnianie mieszkań, wywóz mebli — miasta i gminy, w których chcesz mieć więcej zleceń, oraz informację, skąd dziś przychodzą klienci. Odpowiem, co poprawiłbym najpierw i za jaką stałą cenę. Skorzystaj z ",
          link("formularza powyżej", "#quote"),
          " albo napisz na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
