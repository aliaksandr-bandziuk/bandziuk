// Landing page fixture: Pozycjonowanie stron Gdańsk (PL), group
// «pozycjonowanie-stron-gdansk». Stage 3 city pilot, written for Gdańsk only.
// Semantic core (ref/city-keywords.md, ref/pl-cities.md): pozycjonowanie stron
// gdańsk 320 · pozycjonowanie stron internetowych gdańsk 140 · pozycjonowanie
// stron www gdańsk 40; brief phrases without measured volume: agencja SEO
// gdańsk, audyt SEO gdańsk, pozycjonowanie lokalne / wizytówka Google w
// Gdańsku, cennik. PAA: Ile kosztuje pozycjonowanie strony w 2026? Jak długo
// trwa pozycjonowanie strony? Czy pozycjonowanie stron ma sens? Kto zajmuje
// się pozycjonowaniem stron? Jak samemu pozycjonować stronę? (H2 or FAQ).
// Intent (ref/intent-check-pl-cities.md): SEO vs website 0 shared URLs → two
// pages; «pozycjonowanie stron gdańsk» vs «… gdynia» 0 shared URLs → this page
// is about Gdańsk, Gdynia/Sopot only as the area served. Gdańsk SERP: local
// studios, individual SEO specialists with personal sites, national agencies
// with city pages, Oferteo → angle: one specialist, published prices.
// City part: port, shipyards and maritime B2B, tourism (Główne Miasto,
// jarmarki, beaches), services for new districts, IT/BPO in Trójmiasto;
// districts and foreign-language searches. Big city → od 5500 zł for strong
// competition.
// NOT on this page: the website build (/pl/tworzenie-stron-internetowych-gdansk);
// Gdynia and Sopot as targets; e-commerce (not offered); Google Ads and social
// media (not offered); Warsaw pages.
// Owner’s rules: remote work from Warsaw, no visits promised; never say there
// are no clients from the visitor’s city or industry.
import { p, h2, li, link, k } from "./pt";

export const pozycjonowanieStronGdanskPl = {
  lang: "pl",
  group: "pozycjonowanie-stron-gdansk",
  slug: "pozycjonowanie-stron-gdansk",
  title: "Pozycjonowanie stron Gdańsk",
  heading: "Pozycjonowanie stron w Gdańsku",
  excerpt:
    "Pozycjonowanie stron w Gdańsku: audyt, podstrony usług z nazwami dzielnic, wersje językowe dla turystów i kontrahentów, wizytówka w Mapach i obecność w odpowiedziach AI. Całość prowadzi jeden specjalista, online, według cen z cennika.",
  seo: {
    metaTitle: "Pozycjonowanie stron Gdańsk: audyt od 1000 zł | Bandziuk",
    metaDescription:
      "Pozycjonowanie stron w Gdańsku: audyt SEO, podstrony usług, wizytówka Google, wersje językowe i AI. Jeden specjalista, jawne ceny, audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Jeden specjalista od audytu do wdrożenia", "Audyt od 1000 zł", "Online z firmami z Gdańska"],
  heroPhonePoints: ["Apartamenty Gdańsk Oliwa", "Wizytówka w Mapach Google", "Zadzwoń", "Poleca ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO strony firmy z Gdańska: strona, wizytówka Google, konkurencja w Gdańsku", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO w Gdańsku: podstrony usług i dzielnic, wersje językowe, dane strukturalne", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie stron w Gdańsku", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje pozycjonowanie stron w Gdańsku",
      items: [
        { _key: k("o"), iconName: "search", title: "Audyt strony i konkurencji w Gdańsku", text: "Lista poprawek według wpływu na telefony i rezerwacje" },
        { _key: k("o"), iconName: "layers", title: "Podstrony usług z dzielnicą lub Trójmiastem", text: "Wrzeszcz, Oliwa, Przymorze — tam, gdzie dane pokazują popyt" },
        { _key: k("o"), iconName: "message-circle", title: "Wersje językowe dla gości i kontrahentów", text: "Angielska i niemiecka, gdy klienci szukają w tych językach" },
        { _key: k("o"), iconName: "map-pin", title: "Wizytówka Google firmy z Gdańska", text: "Kategoria, godziny w sezonie, zdjęcia, opinie" },
        { _key: k("o"), iconName: "sparkles", title: "Widoczność w ChatGPT i AI Overviews", text: "Fakty o firmie, które asystent może zacytować" },
        { _key: k("o"), iconName: "trending-up", title: "Raport w telefonach i rezerwacjach", text: "GA4 i Search Console, co miesiąc, bez żargonu" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO strony firmy z Gdańska", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe pozycjonowanie stron w Gdańsku", value: "od 3500 zł / mies.", note: "przy silnej konkurencji od 5500 zł", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: strony, które budowałem i pozycjonowałem",
      subtitle:
        "Gdańska firma, która pracuje z gośćmi lub kontrahentami z zagranicy, zobaczy tu dwa projekty wielojęzyczne: stronę firmy skanowania laserowego 3D i modelowania BIM w trzech językach, której ruch organiczny wzrósł 29 razy, i serwis agencji edukacyjnej dla dziesięciu krajów. Firma usługowa z Wrzeszcza czy Oliwy zobaczy strony lokalnych firm z Warszawy — remontowo-inwestycyjnej, warsztatu samochodowego i pracowni renowacji felg — zbudowane tak, żeby klient z wyszukiwarki szybko doszedł do telefonu albo formularza.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "architecture-website-rebuild-and-seo-scan",
        "full-multilingual-website-development-and-seo-for-student-services",
        "renovation-and-investment-website-with-premium-design",
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena pozycjonowania strony firmy z Gdańska",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: co poprawiłbym najpierw na stronie i w wizytówce, na jakie frazy z Gdańskiem warto iść i za jaką stałą cenę.",
      contextLabel: "Nazwa firmy lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Kogo chcecie przyciągnąć z wyszukiwarki?", options: ["Mieszkańców Gdańska i Trójmiasta", "Turystów i gości z zagranicy", "Firmy i kontrahentów B2B", "Kilka grup naraz"] },
        { _key: k("z"), question: "Kto teraz zajmuje się Waszą stroną?", options: ["Agencja SEO", "Freelancer lub znajomy", "Robimy to sami", "Nikt"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Pozycjonowanie stron w Gdańsku to moja usługa dla firm, które chcą, żeby klienci z Gdańska, z całego Trójmiasta i goście z zagranicy trafiali z Google, Map Google i asystentów AI na ich stronę, a potem dzwonili, rezerwowali albo wysyłali zapytanie. Pracuję sam, z Warszawy, a z gdańskimi firmami współpracuję online: rozmowy wideo, wspólne dokumenty i etapy ustalone z góry. Audyt, poprawki w kodzie, podstrony usług, wizytówkę i raport robi ta sama osoba."),

        h2("Pozycjonowanie stron w Gdańsku: co obejmuje usługa"),
        p("W praktyce pozycjonowanie strony gdańskiej firmy oznacza pracę w czterech miejscach naraz:"),
        li("strona — podstrony usług, tytuły, szybkość na telefonie, dane strukturalne i treść odpowiadająca na pytania klientów"),
        li("Mapy Google — wizytówka, która pokazuje się przy wyszukiwaniach z „Gdańsk” albo z nazwą dzielnicy"),
        li("wersje językowe — tam, gdzie klienci szukają po angielsku, po niemiecku albo w innym języku"),
        li("odpowiedzi ChatGPT, Perplexity i podsumowania AI w Google"),
        p("Nie dzielę tego na pakiety. Po audycie dostajecie jedną listę zadań, ułożoną według tego, co przyniesie najwięcej telefonów i rezerwacji, i ta lista jest planem na kolejne miesiące."),

        h2("Gdańsk jako rynek: port, stocznie, turystyka i usługi dla mieszkańców"),
        p("Gdańsk to kilka rynków w jednym mieście. Port i stocznie ciągną za sobą firmy, które sprzedają innym firmom: spedycję, logistykę, serwis maszyn i jednostek, projektowanie, usługi dla energetyki na Bałtyku. Ich klient szuka rzadziej, ale dokładniej — wpisuje konkretną usługę, często po angielsku, i porównuje kilku dostawców, zanim napisze."),
        p("Drugi rynek to turystyka. Główne Miasto, Westerplatte, Jarmark św. Dominika, jarmark bożonarodzeniowy i plaże w Brzeźnie czy Jelitkowie przyciągają gości przez cały rok, a najwięcej latem. Hotele, apartamenty na wynajem, restauracje, przewodnicy i pracownie bursztynu walczą o ludzi, którzy szukają z telefonu, często tuż przed przyjazdem albo już na miejscu."),
        p("Trzeci to usługi dla mieszkańców rosnącego miasta: gabinety, warsztaty, firmy remontowe, biura rachunkowe, szkoły językowe. Nowe osiedla na południu — Ujeścisko, Łostowice, Jasień — to klienci, którzy dopiero szukają „swojego” mechanika czy dentysty. Do tego dochodzą centra usług dla biznesu i firmy IT w Trójmieście, w których część pracowników mówi głównie po angielsku. Każdy z tych rynków wymaga innych fraz i innych podstron, dlatego zaczynam od ustalenia, do którego należy Wasza firma."),

        h2("Jak klienci szukają firm w Gdańsku: dzielnice, Trójmiasto i obce języki"),
        p("Dane wyszukiwań z Gdańska mają kilka cech, które trzeba uwzględnić przy planowaniu podstron:"),
        li("dzielnice w zapytaniach — „fizjoterapeuta Wrzeszcz”, „mechanik Przymorze”, „restauracja Oliwa”, „dentysta Morena”; mieszkańcy dużego miasta wolą firmę blisko domu"),
        li("Gdańsk i Gdynia mają w Google osobne wyniki, więc fraza z Gdańskiem nie przyprowadzi klientów z Gdyni i odwrotnie, a słowo „Trójmiasto” daje jeszcze inne wyniki"),
        li("sąsiednie miejscowości — Sopot, Pruszcz Gdański, Żukowo — w których mieszka wielu klientów gdańskich firm"),
        li("zapytania po angielsku i po niemiecku od turystów, a także po ukraińsku od mieszkańców, którzy wolą szukać we własnym języku"),
        p("Strona firmy, która obsługuje cały Gdańsk, rzadko potrzebuje osobnej podstrony dla każdej dzielnicy. Wystarczą podstrony usług z jasno opisanym obszarem działania, a podstrony dzielnic lub miejscowości tylko tam, gdzie dane pokazują realny popyt. Firma z Gdańska, która chce klientów także z Gdyni, potrzebuje treści napisanych pod Gdynię, a nie tylko jej nazwy w stopce."),

        h2("Agencja SEO w Gdańsku czy jeden specjalista: kto pozycjonuje strony w Trójmieście"),
        p("Po wpisaniu „pozycjonowanie stron Gdańsk” Google pokazuje mieszankę: lokalne studia z Trójmiasta, ogólnopolskie agencje z osobną podstroną dla Gdańska, portal Oferteo zbierający oferty wykonawców i strony pojedynczych specjalistów SEO. Ta ostatnia grupa to dobra wskazówka — gdańskie firmy często wybierają jedną osobę zamiast działu."),
        p("Agencja ma sens, gdy potrzebujecie naraz SEO, kampanii, mediów społecznościowych i grafiki. Jeśli chodzi o wyszukiwarkę, jeden specjalista daje trzy rzeczy: ta sama osoba robi audyt i wdraża poprawki w kodzie, nie ma opiekuna klienta, przez którego idą wszystkie wiadomości, a ceny są opublikowane, zanim zadzwonicie. Pracuję w WordPressie, Next.js i systemach headless. Nie prowadzę Google Ads ani mediów społecznościowych."),
        p("Z firmami z Gdańska współpracuję zdalnie: rozmowa wideo na start, wspólny dokument z listą zadań, dostęp do Search Console i do wizytówki, raport raz w miesiącu. Do pozycjonowania nie trzeba siedzieć w jednym biurze — trzeba znać dane wyszukiwań z Gdańska, a te sprawdzam przy każdej decyzji."),

        h2("Audyt SEO w Gdańsku: co sprawdzam, zanim zacznę pozycjonowanie"),
        p("Każda współpraca zaczyna się od audytu. Dla gdańskiej firmy sprawdzam:"),
        li("stan techniczny: czy Google indeksuje właściwe podstrony, czy tytuły się nie powtarzają i jak szybko strona otwiera się na telefonie"),
        li("na jakie frazy z Gdańskiem, dzielnicami i Trójmiastem strona już się pokazuje w Search Console, a dla których usług nie ma podstrony"),
        li("kto jest w pierwszej dziesiątce dla Waszych usług w Gdańsku — lokalne firmy, agencje czy portale — i które miejsca są realne do zdobycia"),
        li("czy wizytówka Google zgadza się ze stroną i z katalogami"),
        li("czy wersje językowe są poprawnie oznaczone i czy odpowiadają na to, czego szukają goście"),
        p(
          "Wynikiem jest lista poprawek według wpływu. Część firm wdraża ją sama albo z obecnym wykonawcą. Szczegóły usługi opisuję na stronie ",
          link("audyt SEO strony internetowej", "/pl/oferty/audyt-seo-strony-internetowej"),
          ".",
        ),

        h2("Pozycjonowanie lokalne w Gdańsku: wizytówka Google i Mapy"),
        p("Przy frazach z „Gdańsk” nad zwykłymi wynikami Google zwykle pokazuje mapę z trzema firmami. O tym, kto w niej jest, decydują trafność wizytówki, odległość od szukającego i rozpoznawalność firmy. W mieście rozciągniętym od Wyspy Sobieszewskiej po Oliwę i Osowę odległość waży dużo: wizytówka z adresem we Wrzeszczu łatwiej pokaże się komuś na Zaspie niż na Stogach."),
        p(
          "Odległości nie zmienicie, ale resztę tak: kategorię główną, usługi, zdjęcia, godziny w sezonie i poza nim, odpowiedzi na opinie — także te napisane po angielsku — i dane zgodne ze stroną. Całą pracę nad Mapami opisuję na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Pozycjonowanie stron internetowych w Gdańsku dla hoteli, restauracji i firm przemysłowych"),
        p(
          "Kilka gdańskich branż ma własne zasady. Hotele i apartamenty konkurują z portalami rezerwacyjnymi i potrzebują strony, która przekona gościa do rezerwacji bezpośredniej — piszę o tym na stronie ",
          link("pozycjonowanie strony hotelu", "/pl/pozycjonowanie-strony-hotelu"),
          ". Restauracje na Głównym Mieście żyją z Map Google i opinii w kilku językach — zobaczcie ",
          link("pozycjonowanie restauracji", "/pl/pozycjonowanie-strony-restauracji"),
          ". Zakłady produkcyjne i poddostawcy stoczni szukają klientów B2B, często za granicą, i potrzebują podstron produktów z parametrami — opisuję to na stronie ",
          link("pozycjonowanie strony firmy produkcyjnej", "/pl/pozycjonowanie-strony-firmy-produkcyjnej"),
          ".",
        ),
        p("W turystyce dochodzi sezonowość. Podstrony pod lato, pod Jarmark św. Dominika czy pod grudniowy jarmark trzeba przygotować kilka miesięcy wcześniej, bo Google potrzebuje czasu, żeby je ocenić i pokazać wysoko."),

        h2("Pozycjonowanie stron w Gdańsku w ChatGPT i Google AI Overviews (GEO, AEO)"),
        p("Turyści pytają ChatGPT, gdzie zjeść rybę blisko Długiego Targu, a mieszkańcy — którego fizjoterapeutę we Wrzeszczu wybrać. Asystenci budują odpowiedź z tego, co mogą przeczytać na stronach, w wizytówkach i w opiniach. Dbanie o obecność w takich odpowiedziach to GEO (generative engine optimization), nazywane też AEO (answer engine optimization). Dla gdańskiej firmy sprowadza się głównie do trzech rzeczy:"),
        li("adres, dzielnicę, usługi, ceny i godziny zapisane zwykłymi zdaniami, także w wersjach językowych"),
        li("dane strukturalne firmy zgodne z wizytówką Google"),
        li("odpowiedzi na pytania, które goście i klienci zadają przez telefon lub w wiadomościach"),
        p(
          "Na starcie i po kilku miesiącach zadaję asystentom te same pytania, żeby zobaczyć różnicę. Więcej na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Jak samemu pozycjonować stronę firmy z Gdańska"),
        p("Sporo możecie zrobić bez kosztów:"),
        li("w tytule każdej podstrony usługi napiszcie usługę i Gdańsk albo dzielnicę, np. „Fizjoterapia sportowa — Gdańsk Wrzeszcz”"),
        li("sprawdźcie w Search Console, czy przychodzą do Was ludzie szukający po angielsku — jeśli tak, wersja językowa może się opłacić"),
        li("uzupełnijcie w wizytówce godziny na sezon, święta i dni jarmarków"),
        li("odpowiadajcie na każdą opinię w języku, w którym została napisana"),
        p("Zlecić warto technikę, przebudowę strony, wersje językowe i pracę w branżach, w których gdańscy konkurenci mają mocne strony od lat."),

        h2("Jak długo trwa pozycjonowanie stron www w Gdańsku i czy ma sens"),
        p("Poprawki techniczne, tytuły i wizytówka potrafią dać efekt w kilka tygodni. Nowa podstrona usługi zwykle potrzebuje dwóch–czterech miesięcy, a w gdańskiej turystyce i w popularnych usługach dłużej, bo o te same frazy walczy wiele firm. Firma nastawiona na sezon letni powinna zaczynać jesienią albo zimą."),
        p("Czy to ma sens? Wejścia z wyszukiwarki nie kosztują za kliknięcie i przychodzą także w miesiącach bez reklamy. W raporcie liczę telefony, zapytania i rezerwacje z GA4 i Search Console, a pozycje fraz pokazuję obok tych liczb, a nie zamiast nich."),

        h2("Ile kosztuje pozycjonowanie stron w Gdańsku: cennik"),
        li("Audyt SEO strony, wizytówki i konkurencji w Gdańsku: od 1000 zł, jednorazowo."),
        li("Jednorazowe prace — podstrony usług, wersje językowe, dane strukturalne, poprawki techniczne: od 1000 do 3000 zł."),
        li("Stałe pozycjonowanie: od 3500 zł miesięcznie; noclegi, gastronomia na Głównym Mieście i inne gdańskie branże, w których o klienta walczy wiele firm, od 5500 zł miesięcznie."),
        p(
          "Widełki są opublikowane w ",
          link("cenniku", "/pl/cennik"),
          ". Jeśli strona wymaga najpierw przebudowy, zajrzyjcie na stronę ",
          link("tworzenie stron internetowych w Gdańsku", "/pl/tworzenie-stron-internetowych-gdansk"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie stron w Gdańsku: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje pozycjonowanie strony w Gdańsku w 2026?", "Na start audyt od 1000 zł, potem jednorazowe prace za 1000–3000 zł albo stała współpraca od 3500 zł miesięcznie. W gdańskich branżach z silną konkurencją, np. w noclegach i gastronomii, od 5500 zł miesięcznie. Stałą cenę podaję po krótkim opisie firmy."],
          ["Jak długo trwa pozycjonowanie strony w Gdańsku?", "Poprawki i zmiany w wizytówce działają zwykle po kilku tygodniach. Nowe podstrony potrzebują dwóch–czterech miesięcy, w turystyce dłużej. Pod sezon letni warto zacząć jesienią."],
          ["Czy pozycjonowanie stron w Gdańsku ma sens dla małej firmy?", "Tak, jeśli klienci szukają Waszej usługi w Google. Mała firma z jednej dzielnicy często nie musi walczyć o samo „Gdańsk” — wystarczy, że będzie widoczna w Mapach i na frazach z nazwą dzielnicy."],
          ["Kto zajmuje się pozycjonowaniem stron w Gdańsku: agencja czy specjalista?", "Jedni i drudzy — w wynikach są trójmiejskie studia, agencje ogólnopolskie i pojedynczy specjaliści. U mnie audyt, wdrożenie i raport robi jedna osoba, bez opiekuna klienta, a ceny są opublikowane w cenniku."],
          ["Czy zajmujesz się wizytówką Google firmy z Gdańska?", "Tak. Kategoria, usługi, zdjęcia, godziny sezonowe, opinie i zgodność danych ze stroną to część pozycjonowania. Odległość od szukającego jest stała, resztę można poprawić."],
          ["Czy można pozycjonować stronę jednocześnie w Gdańsku i w Gdyni?", "Można, ale to dwa osobne zestawy wyników. Potrzebne są treści napisane pod każde miasto i obszar działania w wizytówce, a nie tylko nazwa Gdyni dopisana do tekstu o Gdańsku."],
          ["Jak wygląda współpraca zdalna z Warszawy z firmą z Gdańska?", "Rozmowa wideo na start, dostęp do Search Console, Analytics i wizytówki, wspólny dokument z zadaniami i raport co miesiąc. Wszystko odbywa się online, więc nie trzeba planować spotkań."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie stron w Gdańsku: co mi wysłać"),
        p(
          "Napiszcie, jaki macie adres strony i wizytówki, z których usług chcecie mieć więcej telefonów, które dzielnice Gdańska i miejscowości Trójmiasta obsługujecie oraz czy przyjeżdżają do Was goście z zagranicy. W odpowiedzi dostaniecie pierwsze trzy rzeczy do poprawy i stałą cenę. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
