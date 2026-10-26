// Landing page fixture: Pozycjonowanie firmy wycinki drzew (PL), group
// «tree-service-seo». New page. Market version for Polish firms doing wycinka
// i pielęgnacja drzew — ekipy alpinistyczne, firmy z podnośnikiem, arboryści —
// not a translation of tree-service-seo.en.
// Semantic core: ref/home-services.md has no measured PL phrases; H1 and
// headings carry the slug phrase «pozycjonowanie firmy wycinki drzew» plus
// market vocabulary from BRIEF.md: wycinka drzew (alpinistyczna, z
// podnośnika), pielęgnacja koron, frezowanie pni, karczowanie działek,
// arborysta, zezwolenie / zgłoszenie w gminie (general terms only), usuwanie
// drzew po wichurze. PL PAA from ref/home-services.md (Ile kosztuje
// pozycjonowanie firmy?) — cost H2 + FAQ.
// Intent: EN check in ref/intent-check-home-services.md — «tree service seo»
// vs «landscaping seo» 0 shared URLs → tree work is its own page. There is no
// PL landscaping page in links.json, so no neighbour link; the general
// small-business SEO page (/pl/pozycjonowanie-strony-malej-firmy) is linked
// once instead.
// Polish context: zgłoszenie / zezwolenie z urzędu gminy depending on owner,
// species and trunk circumference; okres lęgowy ptaków; wspólnoty i
// spółdzielnie mieszkaniowe; Oferteo, Fixly, OLX.
// NOT on this page: ogrody i zieleń (no PL page); Mapy Google in depth
// (/pl/oferty/pozycjonowanie-lokalne); budowa strony; legal advice on permits;
// prices of tree work — the client publishes his own.
// Owner’s rules: every SEO page covers AI search (GEO, AEO); never say there
// are no clients from the visitor’s industry.
import { p, h2, li, link, k } from "./pt";

export const treeServiceSeoPl = {
  lang: "pl",
  group: "tree-service-seo",
  slug: "pozycjonowanie-strony-firmy-wycinki-drzew",
  title: "Pozycjonowanie strony firmy wycinki drzew",
  heading: "Pozycjonowanie strony firmy wycinki drzew",
  excerpt:
    "Zajmuję się pozycjonowaniem firm wycinki drzew i arborystów: podstrony wycinki alpinistycznej i z podnośnika, pielęgnacji koron, frezowania pni i usuwania drzew po wichurze, zrozumiała informacja o zezwoleniach z gminy, wizytówka Google i widoczność w odpowiedziach AI.",
  seo: {
    metaTitle: "SEO dla firmy wycinki drzew i arborysty | Bandziuk",
    metaDescription:
      "Pozycjonowanie strony firmy wycinki drzew: wycinka alpinistyczna, pielęgnacja koron, frezowanie pni, zezwolenia z gminy, wizytówka Google i AI. Audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Wycinka, pielęgnacja, pnie", "Audyt od 1000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Wycinka drzew Piaseczno", "Wycinka alpinistyczna", "Pomoc z wnioskiem do gminy", "Zadzwoń"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO firmy wycinki drzew: strona, wizytówka Google, konkurencja z okolicy", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO dla firmy wycinki drzew: podstrony usług i metod, podstrona o zezwoleniach, dane strukturalne", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie strony firmy wycinki drzew", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje pozycjonowanie strony firmy wycinki drzew",
      items: [
        { _key: k("o"), iconName: "search", title: "Frazy klientów z Twoich gmin", text: "Wycinka, pielęgnacja, pnie, drzewa po wichurze" },
        { _key: k("o"), iconName: "layers", title: "Podstrona dla każdej metody i usługi", text: "Alpinistycznie, z podnośnika, frezowanie pni" },
        { _key: k("o"), iconName: "file-text", title: "Zezwolenia z gminy prostym językiem", text: "Ogólne zasady i link do urzędu, bez porad prawnych" },
        { _key: k("o"), iconName: "shield-check", title: "Arborysta, OC i sprzęt na stronie", text: "Fakty, które klient sprawdza przed zleceniem" },
        { _key: k("o"), iconName: "map-pin", title: "Wizytówka Google z obszarem działania", text: "Gminy, zdjęcia z realizacji, opinie" },
        { _key: k("o"), iconName: "sparkles", title: "Widoczność w ChatGPT i AI Overviews", text: "Odpowiedzi o terminach, kosztach i przepisach" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO strony firmy wycinki drzew", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe pozycjonowanie strony firmy wycinki drzew", value: "od 3500 zł / mies.", note: "podstrony, wizytówka, opinie, AI", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: strony lokalnych firm usługowych, które budowałem i pozycjonowałem",
      subtitle:
        "Warszawski warsztat samochodowy, który żyje z telefonów i Map Google — pracowałem nad jego pozycjonowaniem lokalnym, wizytówką i podstronami usług; Felgilab, warszawska pracownia renowacji felg z nową stroną na WordPressie i cennikiem; warszawska przechowalnia opon z jedną stroną, której teksty SEO właściciel edytuje sam; firma remontowo-inwestycyjna; oraz ScanM2 — skanowanie laserowe 3D i modele BIM — gdzie ruch organiczny po przebudowie strony wzrósł 29 razy. Firma wycinki drzew potrzebuje tej samej podstawy: podstrony dla każdej usługi, telefonu pod kciukiem i zapytań, które da się policzyć.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
        "renovation-and-investment-website-with-premium-design",
        "architecture-website-rebuild-and-seo-scan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena pozycjonowania strony firmy wycinki drzew",
      subtitle: "W ciągu dnia roboczego dostaniesz ode mnie listę pierwszych zmian na stronie i w Mapach Google oraz stałą cenę.",
      contextLabel: "Nazwa firmy lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Jakich zleceń chcesz mieć więcej?", options: ["Wycinka trudnych drzew przy domach", "Pielęgnacja koron", "Frezowanie pni i karczowanie działek", "Zlecenia od wspólnot i firm"] },
        { _key: k("z"), question: "Skąd teraz przychodzą zlecenia?", options: ["Z poleceń", "Z Oferteo, Fixly, OLX", "Z Google i Map Google", "Od zarządców i deweloperów"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Pozycjonowanie strony firmy wycinki drzew to praca nad tym, żeby właściciel domu z pochylonym świerkiem, zarządca wspólnoty czy inwestor z zarośniętą działką znajdowali w Google Twoją stronę i wizytówkę, a potem dzwonili. Robię to sam: dane wyszukiwań, podstrony usług, poprawki techniczne, wizytówkę i raporty. W Polsce ta branża ma jedną cechę, której nie ma większość usług: klient często najpierw szuka, czy w ogóle może wyciąć drzewo i jakie papiery złożyć w gminie, a dopiero potem — kto to zrobi. Firma, która odpowie mu na pierwsze pytanie, dostaje też drugie."),

        h2("Kto szuka firmy wycinki drzew: właściciele domów, wspólnoty mieszkaniowe i inwestorzy"),
        p("Pozycjonowanie strony firmy wycinki drzew zaczyna się od tego, kto płaci za zlecenie, bo każda grupa szuka inaczej:"),
        li("właściciele domów i działek — „wycinka drzewa przy domu”, „usunięcie suchego drzewa”, „wycinka drzew cena”, najczęściej w gminach wokół dużych miast"),
        li("wspólnoty i spółdzielnie mieszkaniowe oraz zarządcy nieruchomości — pielęgnacja drzew na osiedlu, usuwanie drzew zagrażających, faktura, terminy i formalności"),
        li("inwestorzy i firmy budowlane — „oczyszczanie działki z drzew”, „karczowanie działki budowlanej”, „wycinka pod budowę”"),
        li("właściciele ogrodów i sadów — „cięcie drzew owocowych”, „przycinanie wysokich drzew”"),

        h2("Frazy w pozycjonowaniu strony firmy wycinki drzew: usługa, metoda, gmina i cena"),
        p("Ludzie wpisują nie tylko usługę, ale też nazwę gminy albo powiatu: „wycinka drzew Piaseczno”, „wycinka drzew powiat wołomiński”, „arborysta Kraków”. Obok są frazy z metodą — „wycinka alpinistyczna”, „wycinka z podnośnika” — i frazy z ceną: „ile kosztuje wycięcie drzewa”, „frezowanie pni cena”. Analiza fraz pokazuje, które z nich wywołują Mapy Google, które portale z ogłoszeniami i które gminy w Twoim zasięgu ludzie wpisują najczęściej. Z tego powstaje krótka lista podstron do zrobienia, ułożona według tego, ile zarabiasz na danej usłudze."),

        h2("Wycinka alpinistyczna i wycinka z podnośnika: osobne podstrony metod"),
        p("Klient z drzewem przy domu, linii energetycznej albo płocie sąsiada szuka metody, która nie zniszczy niczego dookoła. Dlatego wycinka alpinistyczna, wycinka z podnośnika koszowego i wycinka z użyciem dźwigu zasługują na osobne podstrony. Każda wyjaśnia:"),
        li("kiedy wybierasz daną metodę i dlaczego"),
        li("jak drzewo schodzi w kawałkach na linach, bez uszkodzenia dachu, rynien i trawnika"),
        li("czego potrzebujesz od klienta: dojazdu, miejsca na rębak, zgody sąsiada na wejście na jego działkę"),
        li("co jest w cenie: frezowanie pnia, wywóz gałęzi, pocięcie drewna"),
        p("Takie podstrony przyciągają lepiej płatne zlecenia — od ludzi, którzy nie szukają najtańszej ekipy z piłą, tylko takiej, po której nie trzeba naprawiać dachu."),

        h2("Zezwolenie z gminy na wycinkę drzew: podstrona, która przyprowadza klientów"),
        p("Zanim właściciel działki zadzwoni do firmy, szuka: „czy potrzebuję zezwolenia na wycinkę drzewa”, „zgłoszenie wycinki drzewa w gminie”, „kara za wycinkę drzewa bez zezwolenia”. Zasady zależą od tego, kto jest właścicielem nieruchomości, od gatunku i obwodu pnia oraz od tego, czy wycinka ma związek z działalnością gospodarczą. W okresie lęgowym ptaków trzeba też sprawdzić, czy na drzewie nie ma gniazd."),
        p("Podstrona o zezwoleniach opisuje to ogólnymi słowami, linkuje do strony urzędu i mówi, w czym pomagasz: ocena drzewa, zdjęcia, pomiar obwodu, przygotowanie wniosku. To nie porada prawna, ale dla wielu klientów to pierwsze miejsce, gdzie ktoś wyjaśnił im sprawę po ludzku — i zwykle tam dzwonią."),

        h2("Arborysta i pielęgnacja koron: jak pokazać na stronie, że znasz się na drzewach"),
        p("Pielęgnacja drzew to zlecenia, które wracają co kilka lat, i praca, w której widać wiedzę. Klient szuka „pielęgnacja koron drzew”, „przycinanie drzew”, „arborysta [miasto]” i chce wiedzieć, czy ekipa zna się na drzewach, czy tylko na piłach. Na stronie warto pokazać:"),
        li("certyfikaty arborystyczne zespołu, jeśli je macie, z nazwą i numerem"),
        li("ubezpieczenie OC działalności i sprzęt, którym pracujecie"),
        li("wyjaśnienie, dlaczego ogławianie szkodzi drzewu, a redukcja korony nie — klienci często proszą o to pierwsze"),
        li("ocenę stanu drzewa jako osobną usługę, jeśli ją wykonujecie"),

        h2("Usuwanie drzew po wichurze: podstrona awaryjna firmy wycinki drzew"),
        p("Po letnich nawałnicach i jesiennych wichurach rośnie liczba wyszukiwań „usuwanie powalonych drzew”, „drzewo spadło na dom”, „drzewo na ogrodzeniu”. Telefony dostają firmy, których podstrona awaryjna już jest w wynikach i które odbierają. Podstrona mówi, co robisz najpierw, w jakich godzinach przyjeżdżasz, jak liczysz pracę awaryjną i że szkody po wichurze często obejmuje ubezpieczenie domu — klient powinien sprawdzić swoją polisę. Jeśli nie przyjmujesz zleceń w nocy, napisz to wprost: klient woli wiedzieć, że oddzwonisz rano, niż czekać bez żadnej odpowiedzi."),

        h2("Wspólnoty, zarządcy i deweloperzy: pozycjonowanie strony firmy wycinki drzew na zlecenia firmowe"),
        p("Zleceń od firm jest mniej, ale są większe i powtarzalne. Zarządca osiedla szuka wykonawcy, który przejmie pielęgnację drzew na kilka sezonów, wystawi fakturę, zajmie się formalnościami w gminie i przyjedzie w ustalonym terminie. Deweloper potrzebuje wycinki i karczowania przed budową. Podstrona dla firm wymienia rodzaje obiektów, z którymi pracujesz, sprzęt, ubezpieczenie, sposób wyceny po oględzinach i osobę do kontaktu. Tych fraz szuka niewiele osób, ale jedna umowa ze wspólnotą potrafi zapełnić kalendarz na kilka sezonów."),

        h2("Wizytówka Google firmy wycinki drzew: obszar działania, zdjęcia i opinie"),
        p("Firma wycinki drzew zwykle nie ma lokalu, do którego przychodzą klienci, więc wizytówka działa jako firma z obszarem działania i ukrytym adresem. Co liczy się najbardziej:"),
        li("kategoria główna związana z wycinką i pielęgnacją drzew, a dodatkowe tylko dla usług, które naprawdę wykonujesz"),
        li("obszar działania złożony z gmin, do których ekipa dojeżdża"),
        li("zdjęcia z realizacji: drzewo przed, praca na linach, posprzątany teren po"),
        li("opinie, w których klient wspomina usługę i miejscowość"),
        p(
          "Pełną pracę nad Mapami Google opisuję na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Sezon w firmie wycinki drzew: zima, okres lęgowy ptaków i wichury"),
        p("Rok w firmie wycinki drzew ma własny rytm. Zima to dobry czas na wycinkę i cięcia wielu gatunków: drzewa bez liści, zmarznięta ziemia, którą ciężki sprzęt mniej niszczy, i brak gniazd. Od wiosny do jesieni trwa okres lęgowy, w którym przy wycince trzeba szczególnie uważać, a lato i jesień przynoszą wichury. Plan treści idzie za tym rytmem: podstrony o wycince zimowej i o zezwoleniach publikowane jesienią, podstrona awaryjna odświeżona przed sezonem burz, a nowe realizacje dodawane przez cały rok."),

        h2("Oferteo, Fixly i OLX a pozycjonowanie strony firmy wycinki drzew"),
        p(
          "Portale z zapytaniami dają szybkie zlecenia, ale w wycince drzew mają typową wadę: dużo małych prac i porównywania cen, a zapytanie często trafia do kilku firm naraz. Pozycjonowanie pozwala wybrać, jakich zleceń chcesz — wycinki trudnych drzew przy domach, umów ze wspólnotami, karczowania działek — i budować podstrony właśnie pod nie. Wiele firm zostaje przy portalach na start i z czasem korzysta z nich mniej. Ogólnie o pozycjonowaniu niewielkich firm usługowych piszę na stronie ",
          link("pozycjonowanie strony małej firmy", "/pl/pozycjonowanie-strony-malej-firmy"),
          ".",
        ),

        h2("Pozycjonowanie strony firmy wycinki drzew w ChatGPT i Google AI Overviews (GEO, AEO)"),
        p("Pytania o drzewa ludzie coraz częściej zadają nie wyszukiwarce, tylko ChatGPT, Perplexity albo podsumowaniom AI w Google: „czy na wycięcie brzozy na mojej działce potrzebuję zezwolenia”, „kiedy można ciąć drzewa owocowe”, „kto odpowiada za drzewo sąsiada, które spadło na płot”. Asystent odpowiada na podstawie stron, które potrafi przeczytać, i coraz częściej poleca też wykonawców. GEO (generative engine optimization) i AEO (answer engine optimization) dla firmy wycinki drzew to:"),
        li("odpowiedzi na pytania o przepisy, terminy i stan drzew, podpisane imieniem autora i jego kwalifikacjami"),
        li("zasady wyceny i widełki cen zapisane tekstem"),
        li("gminy, w których pracujesz, polisa OC i kwalifikacje zespołu — identycznie na stronie, w wizytówce i w katalogach"),
        li("dane strukturalne opisujące firmę, metody wycinki i obszar działania"),
        p(
          "Odpowiedzi asystentów o Twojej firmie zapisuję przed rozpoczęciem pracy i później, żeby było widać zmianę. Więcej o tym na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Ile kosztuje pozycjonowanie strony firmy wycinki drzew"),
        li("Audyt SEO strony, wizytówki i konkurentów z Twoich gmin: od 1000 zł, jednorazowo, z poprawkami ułożonymi według wpływu."),
        li("Jednorazowe prace — podstrony usług i metod, podstrona o zezwoleniach, podstrona awaryjna, dane strukturalne: od 1000 do 3000 zł."),
        li("Stałe pozycjonowanie strony firmy wycinki drzew — kolejne podstrony usług, zdjęcia z prac, Mapy Google i opinie, odpowiedzi AI, miesięczny raport zapytań: od 3500 zł miesięcznie, przy silnej konkurencji wokół największych miast od 5500 zł."),
        p(
          "Stałą pracę nad SEO opisuję na stronie ",
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
      title: "Pozycjonowanie strony firmy wycinki drzew: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje pozycjonowanie strony firmy wycinki drzew?", "Audyt to od 1000 zł jednorazowo, pojedyncze prace od 1000 do 3000 zł, a stałe pozycjonowanie od 3500 zł miesięcznie, przy silnej konkurencji od 5500 zł. Napisz, jakich zleceń chcesz więcej i w jakich gminach pracujesz, a podam stałą cenę."],
          ["Ile trwa pozycjonowanie strony firmy wycinki drzew?", "Poprawki w wizytówce i zdjęcia z realizacji potrafią zadziałać w Mapach w kilka tygodni. Nowe podstrony usług zwykle potrzebują kilku miesięcy, dlatego podstronę o wycince zimowej i podstronę awaryjną warto mieć gotowe przed sezonem."],
          ["Czy pisać na stronie o zezwoleniach na wycinkę drzew?", "Tak, ogólnymi słowami i z linkiem do urzędu gminy. Właściciele działek szukają tego przed telefonem do wykonawcy, a firma, która wyjaśni sprawę i pomoże przygotować wniosek, często dostaje zlecenie. Nie zastępuje to porady prawnej."],
          ["Czy podawać ceny wycinki drzew na stronie?", "Lepiej podać, od czego zależy cena — wysokość, obwód, dostęp, metoda, wywóz — i przykładowe widełki z Twoich zleceń niż jedną kwotę za drzewo. Dokładna wycena powstaje po oględzinach lub na podstawie zdjęć."],
          ["Czy wystarczą mi Oferteo, Fixly i OLX?", "Na start często tak. Portale dają zlecenia od razu, ale klient porównuje kilka ofert, a Ty płacisz za dostęp. Własne podstrony i wizytówka przyprowadzają ludzi, którzy wybrali Ciebie, i zlecenia, które sam wybierasz."],
          ["Czy ChatGPT poleca firmy wycinki drzew?", "Gdy ktoś o to zapyta — tak. Asystent wybiera firmy, o których znajduje konkretne fakty: usługi, metody, obszar działania, ubezpieczenie i opinie. Nikt nie zagwarantuje, że wybierze Ciebie, ale te fakty można uporządkować, a wynik sprawdzam przed i po pracy."],
          ["Czy pracujesz z firmami spoza Warszawy?", "Tak, z całej Polski: od gmin pod Warszawą i Krakowem po Pomorze i Dolny Śląsk. Pozycjonowanie robię zdalnie, na danych wyszukiwań dla miejscowości, w których pracuje Twoja ekipa."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie strony firmy wycinki drzew: co mi wysłać"),
        p(
          "Napisz, jak nazywa się firma, dołącz link do strony i profilu w Mapach Google, wymień gminy, w których pracujesz, metody, którymi dysponujesz — liny, podnośnik, dźwig, frezarka do pni — i rodzaj zleceń, których chcesz więcej. Odpowiem w ciągu dnia roboczego, od czego zacząłbym i ile to będzie kosztować. Skorzystaj z ",
          link("formularza powyżej", "#quote"),
          " albo napisz na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
