// Landing page fixture: Pozycjonowanie strony fotografa (PL), group
// «photographer-seo». PL only (no EN/RU siblings in this group). Written for
// Polish photographers — ślubni, rodzinni, produktowi, studia — most of them
// one-person businesses.
// Semantic core (ref/professionals.md, BRIEF.md): «pozycjonowanie strony
// fotografa» 10 · «pozycjonowanie fotografa»; client-side phrases used as
// examples: «fotograf [miasto]», «fotograf ślubny [miasto]», «sesja rodzinna»,
// «sesja ciążowa», «fotografia produktowa» («fotograf» 90500 is a navigational
// head term, not targeted). SERP entirely agencies (premiumdigital, verseo,
// 4rtweb, ministerstworeklamy, semcore, efectownia, studio113, ukontentowani,
// dvsn) → buyers’ demand. No PL PAA for this phrase.
// Intent (ref/intent-check-professionals.md): «pozycjonowanie fotografa» vs
// «strona dla fotografa» 0 shared URLs, 0 shared domains → SEO and the build
// are separate pages; the thesis of /pl/strona-dla-fotografa (style visible in
// seconds, genres kept apart visually) is not repeated — genre subpages here
// are argued from search demand only.
// Budget reality: photographers are small businesses → explicit «audit +
// one-off work, then do it yourself» path before the monthly retainer.
// NOT on this page: site design, portfolio layout, choice of platform
// (/pl/strona-dla-fotografa, linked); wizytówka Google in depth
// (/pl/oferty/pozycjonowanie-lokalne); Instagram management, Google Ads
// (not offered).
// Owner’s rules: PL form «pozycjonowanie strony X»; every SEO page covers AI
// search (GEO, AEO); never say there are no clients from the visitor’s segment.
import { p, h2, h3, li, ol, link, k } from "./pt";

export const photographerSeoPl = {
  lang: "pl",
  group: "photographer-seo",
  slug: "pozycjonowanie-strony-fotografa",
  title: "Pozycjonowanie strony fotografa",
  heading: "Pozycjonowanie strony fotografa",
  excerpt:
    "Zajmuję się pozycjonowaniem stron fotografów ślubnych, rodzinnych i produktowych: frazy z gatunkiem i miastem, podstrony gatunków i miejsc, szybkie i dobrze opisane galerie, wizytówka Google z opiniami i widoczność w odpowiedziach AI — z wariantem na mały budżet, w którym wystarczą audyt i jednorazowe poprawki.",
  seo: {
    metaTitle: "Pozycjonowanie fotografa w Google i AI | Bandziuk",
    metaDescription:
      "Pozycjonowanie strony fotografa: podstrony gatunków i miast, szybkie galerie, opisy zdjęć, wizytówka Google, opinie i widoczność w AI. Audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Gatunek + miasto w Google", "Audyt od 1000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Fotograf ślubny Kraków", "Sesja ciążowa w plenerze", "Zapytaj o termin", "Poleca ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO strony fotografa: frazy, galerie, zdjęcia, wizytówka Google", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO dla fotografa: podstrony gatunków, opisy zdjęć, szybkość galerii, dane strukturalne", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie strony fotografa", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje pozycjonowanie strony fotografa",
      items: [
        { _key: k("o"), iconName: "search", title: "Frazy: gatunek, okazja i miasto", text: "Tak, jak szukają pary, rodzice i sklepy internetowe" },
        { _key: k("o"), iconName: "layers", title: "Podstrony gatunków i miejsc", text: "Ślub, sesja rodzinna, produkt, sale weselne, plenery" },
        { _key: k("o"), iconName: "image", title: "Zdjęcia, które Google rozumie", text: "Nazwy plików, opisy alt, WebP, lekkie galerie" },
        { _key: k("o"), iconName: "map-pin", title: "Wizytówka Google i opinie", text: "Także bez studia — z obszarem dojazdu" },
        { _key: k("o"), iconName: "sparkles", title: "Widoczność w odpowiedziach AI", text: "Gdy ktoś prosi ChatGPT o polecenie fotografa" },
        { _key: k("o"), iconName: "trending-up", title: "Raport w zapytaniach o termin", text: "Ile wiadomości przyszło z wyszukiwarki i z jakiej podstrony" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO strony fotografa", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Jednorazowe prace SEO", value: "od 1000 do 3000 zł", note: "podstrony, zdjęcia, szybkość — bez stałej umowy", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: strony małych firm i serwisów z galeriami realizacji",
      subtitle:
        "Małe firmy, którym klientów przynosi wyszukiwarka w ich mieście: warsztat samochodowy, pracownia renowacji felg i przechowalnia opon z jedną stroną docelową i ustawieniami SEO, które właściciel zmienia sam. Obok: warszawska firma remontowo-inwestycyjna z dopracowanym wizualnie serwisem i firma wykonująca skanowanie laserowe 3D i modelowanie BIM, której ruch organiczny wzrósł 29 razy po przebudowie strony z sekcją realizacji. Z pracą fotografa łączy je to, że klient szuka usługi w swojej okolicy i decyduje, oglądając wcześniejsze realizacje.",
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
      title: "Wycena pozycjonowania strony fotografa",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: co poprawiłbym najpierw na stronie i w wizytówce, czy wystarczą jednorazowe prace i ile to kosztuje.",
      contextLabel: "Twoja strona lub profil",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Jaką fotografią się zajmujesz?", options: ["Ślubną", "Rodzinną, ciążową, noworodkową", "Produktową i biznesową", "Kilkoma gatunkami"] },
        { _key: k("z"), question: "Na czym jest teraz Twoja strona?", options: ["WordPress", "Kreator lub platforma dla fotografów", "Mam tylko Instagram", "Nie wiem"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Pozycjonowanie strony fotografa to moja usługa dla fotografów ślubnych, rodzinnych i produktowych oraz studiów fotograficznych z całej Polski: frazy z gatunkiem i miastem, podstrony gatunków i miejsc, zdjęcia opisane tak, żeby Google je rozumiał, wizytówka Google z opiniami i widoczność w odpowiedziach AI. Robię to sam i wiem, że fotograf to zwykle jednoosobowa firma, więc zaczynam od tego, co daje najwięcej za najmniejsze pieniądze."),

        h2("Pozycjonowanie strony fotografa: jak klienci szukają fotografa w Google"),
        p("Samo słowo „fotograf” ludzie wpisują w Google bardzo często, ale nic ono nie mówi o zleceniu. Klient z konkretną potrzebą dopisuje gatunek, okazję i miasto:"),
        li("„fotograf ślubny Kraków”, „reportaż ślubny Mazury”, „fotograf na ślub cywilny Warszawa”"),
        li("„sesja ciążowa Warszawa”, „sesja rodzinna w plenerze Poznań”, „sesja noworodkowa w domu”"),
        li("„fotograf na chrzest Lublin”, „fotograf na komunię”, „zdjęcia do CV Łódź”"),
        li("„fotograf produktowy”, „zdjęcia produktów do sklepu internetowego”, „packshot na białym tle”"),
        p("Za każdą grupą stoi inny klient: para, która planuje ślub z dużym wyprzedzeniem, rodzice, którzy chcą sesji w konkretnym tygodniu, właściciel sklepu internetowego z setką produktów do sfotografowania. Pozycjonowanie fotografa zaczyna się od wyboru, które z tych zapytań mają przynosić zlecenia, i od sprawdzenia w danych, ile osób naprawdę wpisuje je w Twoim mieście."),

        h2("Podstrony gatunków na stronie fotografa: ślub, sesja rodzinna, ciążowa i fotografia produktowa"),
        p("Strona z jedną galerią „Portfolio” i zakładką „Oferta” wychodzi w Google najwyżej na imię i nazwisko fotografa. Żeby pojawić się na frazy z gatunkiem, każdy gatunek, który chcesz sprzedawać, potrzebuje własnej podstrony z tekstem, a nie tylko ze zdjęciami."),
        h3("Podstrona fotografii ślubnej"),
        p("Jak wygląda dzień zdjęciowy od przygotowań po oczepiny, co obejmuje pakiet, kiedy para dostaje zdjęcia, czy w cenie jest sesja plenerowa i jak rezerwuje się termin. Ceny albo widełki zapisane tekstem pomagają, bo pary porównują je, zanim napiszą."),
        h3("Podstrona sesji rodzinnej, ciążowej i noworodkowej"),
        p("Kiedy najlepiej umówić sesję, gdzie się odbywa — w studiu, w domu czy w plenerze — jak przygotować dzieci i ubrania, ile trwa. To pytania, które rodzice wpisują w Google, zanim wybiorą fotografa."),
        h3("Podstrona fotografii produktowej i biznesowej"),
        p("Klient firmowy szuka inaczej: formaty, tło, liczba ujęć na produkt, termin, pliki gotowe do sklepu internetowego albo na Allegro, zdjęcia zespołu do strony firmy. Tu decyduje konkret zapisany na stronie."),

        h2("Podstrony lokalizacji fotografa: sale weselne, plenery i okoliczne miasta"),
        p("Pary często szukają fotografa przez miejsce: wpisują nazwę sali weselnej, dworu albo pleneru, żeby zobaczyć, jak wyglądają tam zdjęcia. Fotograf, który ma na stronie reportaż z danej sali z jej nazwą w tytule, wychodzi na takie zapytanie i trafia do pary, która już tam zarezerwowała przyjęcie. Tak samo działają sesje plenerowe: „sesja narzeczeńska w Tatrach” czy „sesja rodzinna na plaży w Sopocie” to frazy, które ktoś naprawdę wpisuje."),
        p("Dla miast, w których pracujesz, wystarczy jedna podstrona obszaru dojazdu z reportażami z okolicy. Kilkadziesiąt prawie identycznych podstron „fotograf ślubny + miasto”, różniących się tylko nazwą miejscowości, Google traktuje jako mało wartościowe i zwykle ich nie pokazuje."),

        h2("Blog fotografa z sesjami jako podstrony, które przyprowadzają klientów"),
        p("Wpis z sesji to najprostszy sposób na nowe podstrony, które pracują w wyszukiwarce. Żeby wpis był czymś więcej niż galerią, potrzebuje:"),
        li("tytułu z gatunkiem i miejscem, np. „Ślub w dworze pod Krakowem — reportaż od przygotowań do oczepin”"),
        li("kilku akapitów o dniu: miejscu, porze, świetle i o tym, co było ważne dla pary lub rodziny"),
        li("wyboru kilkudziesięciu zdjęć zamiast kilkuset, każde z nazwą pliku i opisem"),
        li("linku do podstrony gatunku i do formularza z pytaniem o termin"),
        p("Do publikacji wizerunku klientów potrzebna jest ich zgoda, najlepiej zapisana w umowie. Jeden porządny wpis w miesiącu daje więcej niż codzienne galerie bez tekstu."),

        h2("Zdjęcia na stronie fotografa: opisy alt, nazwy plików, WebP i szybkość galerii"),
        p("U fotografa zdjęcia są całą ofertą, a jednocześnie najczęstszą przyczyną problemów z pozycjonowaniem. Pliki prosto z eksportu ważą po kilka megabajtów, galeria ładuje się na telefonie bardzo długo, a Google widzi setki obrazów o nazwach „DSC_0412.jpg” bez żadnego opisu. Przy audycie sprawdzam:"),
        li("format i rozmiary — WebP albo AVIF w kilku szerokościach, żeby telefon pobierał mniejszą wersję"),
        li("leniwe ładowanie zdjęć poniżej pierwszego ekranu i szybkie wyświetlenie pierwszego zdjęcia"),
        li("nazwy plików i opisy alt mówiące, co jest na zdjęciu i gdzie, np. „pierwszy taniec w stodole weselnej pod Poznaniem”"),
        li("czy wtyczka galerii albo ochrony przed kopiowaniem nie ukrywa zdjęć przed Google"),
        p("Dobrze opisane zdjęcia trafiają też do Grafiki Google, skąd część ludzi przechodzi prosto na stronę reportażu."),

        h2("Wizytówka Google fotografa i opinie klientów"),
        p("Przy wyszukiwaniach z nazwą miasta Google pokazuje blok map z fotografami i studiami. Wizytówka działa także wtedy, gdy nie masz studia: fotograf, który dojeżdża do klientów, może ukryć adres i podać obszar obsługi. Co ma znaczenie:"),
        li("kategoria główna dopasowana do tego, co sprzedajesz najczęściej, i kategorie dodatkowe dla pozostałych gatunków"),
        li("zdjęcia z różnych sesji i miejsc, dodawane regularnie"),
        li("opinie, w których klienci piszą, jaką sesję mieli — „sesja ciążowa”, „reportaż ze ślubu” — bo Google łączy treść opinii z wyszukiwaniami"),
        li("odpowiedź na każdą opinię"),
        p(
          "Najlepszy moment na prośbę o opinię to dzień, w którym klient dostaje gotowe zdjęcia. Więcej o pracy nad Mapami na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Instagram a strona fotografa w Google: dlaczego profil nie zastąpi pozycjonowania"),
        p("Wielu fotografów dostaje zlecenia z Instagrama i pyta, po co im strona. Instagram dobrze pokazuje zdjęcia ludziom, którzy już Cię obserwują albo trafili na profil z polecenia. Słabo radzi sobie z kimś, kto wpisuje w Google „fotograf na komunię Bydgoszcz” — taka osoba trafia na strony i wizytówki. Konto należy do platformy, która w każdej chwili może zmienić zasięgi, a strona i jej pozycje są Twoje."),
        p("Najlepiej działa połączenie: Instagram jako bieżąca galeria, strona jako miejsce, gdzie są ceny, terminy, opisy gatunków i formularz. Link w profilu prowadzi do konkretnej podstrony, a nie na stronę główną."),

        h2("Portale ślubne, katalogi fotografów i polecenia jako linki do strony fotografa"),
        p("Fotografowie mają kilka naturalnych źródeł odnośników:"),
        li("portale ślubne i katalogi usługodawców, w których pary szukają fotografa i porównują oferty"),
        li("listy polecanych usługodawców na stronach sal weselnych i dworów, z którymi współpracujesz"),
        li("wpisy innych usługodawców z tego samego wesela — florystki, wizażystki, kamerzysty — z linkiem do Twojego reportażu"),
        li("publikacje sesji w blogach i magazynach ślubnych oraz konkursy fotograficzne"),
        p("Pilnuję, żeby nazwa, telefon i adres strony były wszędzie takie same, a link prowadził do podstrony gatunku. Płatnych wpisów w katalogach, których nikt nie przegląda, nie polecam."),

        h2("Pozycjonowanie fotografa w ChatGPT i Google AI Overviews (GEO, AEO)"),
        p("Ludzie pytają ChatGPT, Perplexity i podsumowania AI w Google: „polecisz fotografa ślubnego w stylu reportażowym w Trójmieście?”, „ile kosztuje sesja noworodkowa w Krakowie?”, „gdzie zrobić zdjęcia produktów do sklepu w Poznaniu?”. Asystent wymienia fotografów, o których znajduje konkretne informacje. Pracę nad tym nazywa się GEO (generative engine optimization) albo AEO (answer engine optimization):"),
        li("gatunki, miasto, obszar dojazdu, ceny lub widełki i czas oddania zdjęć zapisane prostymi zdaniami"),
        li("odpowiedzi na pytania, które klienci zadają w wiadomościach"),
        li("dane strukturalne firmy i usług zgodne z wizytówką Google"),
        li("te same dane w portalach ślubnych i katalogach"),
        p(
          "Przed pracą i po niej sprawdzam, czy asystenci wymieniają Twoje nazwisko i kogo polecają zamiast Ciebie. Więcej na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Pozycjonowanie strony fotografa przy małym budżecie: audyt i jednorazowe prace"),
        p("Fotograf to zwykle jedna osoba, a stała miesięczna umowa na pozycjonowanie bywa dla niej większym wydatkiem niż nowy obiektyw. Dlatego wielu fotografom proponuję inną drogę:"),
        ol(
          link("Audyt SEO strony", "/pl/oferty/audyt-seo-strony-internetowej"),
          ", zdjęć, wizytówki i konkurencji w Twoim mieście, z listą poprawek według wpływu.",
        ),
        ol("Jednorazowe prace: szybkość galerii, nazwy i opisy zdjęć, tytuły, podstrony gatunków i miejsc, dane strukturalne."),
        ol("Dalej samodzielnie: wpis z sesji co miesiąc według ustalonego wzoru i prośba o opinię po każdym zleceniu."),
        p("Stałe pozycjonowanie ma sens w dużych miastach i w fotografii ślubnej, gdzie jedno zlecenie jest warte dużo, a konkurenci mają mocne strony od lat. Audyt pokaże, czy to Twój przypadek."),

        h2("Ile trwa pozycjonowanie strony fotografa i jak liczę zapytania o termin"),
        p("Poprawki zdjęć, tytułów i wizytówki potrafią dać efekt w kilka tygodni. Nowe podstrony gatunków i reportaże zwykle potrzebują dwóch–czterech miesięcy. W fotografii ślubnej trzeba doliczyć sezon: pary rezerwują fotografa z wyprzedzeniem, często na kolejny rok, więc prace najlepiej zrobić, zanim najwięcej osób zacznie szukać."),
        p("W raporcie liczę zapytania o termin, wiadomości i telefony z wyszukiwarki, z podziałem na gatunki, mierzone w GA4 i Google Search Console. Pozycje fraz są obok tych liczb, a nie zamiast nich."),

        h2("Ile kosztuje pozycjonowanie strony fotografa"),
        li("Audyt SEO strony, galerii, wizytówki i konkurencji: od 1000 zł, jednorazowo, z listą poprawek według wpływu."),
        li("Jednorazowe prace — podstrony gatunków i miejsc, opisy zdjęć, szybkość galerii, dane strukturalne: od 1000 do 3000 zł."),
        li("Stałe pozycjonowanie strony fotografa — reportaże, podstrony, wizytówka, widoczność w AI i raporty: od 3500 zł miesięcznie, w największych miastach przy mocnej konkurencji od 5500 zł miesięcznie."),
        p(
          "Pełne widełki są w ",
          link("cenniku", "/pl/cennik"),
          ". Jeśli strona wymaga przebudowy, zanim będzie co pozycjonować, zajrzyj na stronę ",
          link("strona internetowa dla fotografa", "/pl/strona-dla-fotografa"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie strony fotografa: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje pozycjonowanie strony fotografa?", "Audyt kosztuje od 1000 zł jednorazowo, a jednorazowe prace od 1000 do 3000 zł. Stałe pozycjonowanie to od 3500 zł miesięcznie, w największych miastach przy mocnej konkurencji od 5500 zł. Wielu fotografom wystarczą audyt i jednorazowe poprawki."],
          ["Czy Instagram wystarczy zamiast strony fotografa?", "Instagram dobrze działa dla osób, które już Cię znają. Ktoś, kto wpisuje w Google gatunek i miasto, trafia na strony i wizytówki, więc bez strony te zapytania biorą inni fotografowie."],
          ["Ile trwa pozycjonowanie strony fotografa?", "Poprawki zdjęć, tytułów i wizytówki potrafią zadziałać w kilka tygodni, nowe podstrony gatunków i reportaże zwykle w dwa–cztery miesiące. W fotografii ślubnej warto zacząć przed sezonem rezerwacji."],
          ["Czy pozycjonujesz strony fotografów na WordPressie i kreatorach?", "Tak. WordPress daje pełną kontrolę nad zdjęciami i kodem. Na kreatorach i platformach dla fotografów większość pracy jest możliwa, ale część zmian technicznych zależy od platformy; audyt pokaże, czy to ma znaczenie w Twoim przypadku."],
          ["Czy pozycjonowanie ma sens dla fotografa z mniejszego miasta?", "Tak, i często idzie szybciej, bo konkurencja jest mniejsza. Wizytówka Google, podstrony gatunków i kilka reportaży z okolicznych sal i plenerów potrafią wystarczyć, żeby być pierwszym w swojej okolicy."],
          ["Czy ChatGPT poleca fotografów?", "Tak, gdy ktoś o to zapyta. Asystent wybiera fotografów, o których znajduje konkretne informacje: gatunki, miasto, ceny lub widełki, opinie i spójne dane w wizytówce i katalogach."],
          ["Czy pracujesz z fotografami spoza Warszawy?", "Tak, z całej Polski. Pozycjonowanie robię zdalnie, z danymi wyszukiwań dla Twojego miasta i okolicy, a rozmawiamy przez wideo albo na WhatsApp."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie strony fotografa: co mi wysłać"),
        p(
          "Wyślij link do strony, profilu na Instagramie i wizytówki w Mapach Google, gatunki, w których chcesz mieć więcej zleceń, i miasta, do których dojeżdżasz. Odpowiem, co poprawiłbym najpierw, czy wystarczą jednorazowe prace i ile to kosztuje. Skorzystaj z ",
          link("formularza powyżej", "#quote"),
          " albo napisz na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
