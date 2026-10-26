// Landing page fixture: Pozycjonowanie stron we Wrocławiu (PL), group
// «pozycjonowanie-stron-wroclaw». City page, stage 3 pilot (BRIEF.md).
// Phrases (ref/city-keywords.md, ref/pl-cities.md, volumes/month, Poland):
// pozycjonowanie stron wrocław 590 · seo wrocław 260 · pozycjonowanie stron
// internetowych wrocław 140 · pozycjonowanie stron www wrocław 110 ·
// agencje marketingowe wrocław 90 (mixed intent, not targeted) ·
// pozycjonowanie stron wrocław cennik 50 · pozycjonowanie stron seo wrocław
// 10. Required by the brief: agencja SEO Wrocław, audyt SEO Wrocław,
// pozycjonowanie lokalne / wizytówka Google we Wrocławiu, cennik. PAA: Ile
// kosztuje pozycjonowanie strony w 2026? Ile kosztuje dobre pozycjonowanie
// strony? Jak długo trwa pozycjonowanie strony? Czy pozycjonowanie stron ma
// sens? Kto zajmuje się pozycjonowaniem stron? Jak samemu pozycjonować stronę?
// Intent (ref/intent-check-pl-cities.md): «pozycjonowanie stron wrocław» vs
// «agencja seo wrocław» 1 of 10 shared URLs (the Oferteo city page) → one page
// carries both in H2; SERPs show agencies, individual specialists with
// personal sites and Oferteo. SEO vs websites: separate pages.
// Big, competitive city → stałe pozycjonowanie od 3500 zł, w konkurencyjnych
// branżach od 5500 zł.
// City part: IT and business-services centres, manufacturing and logistics in
// the zones around the city (Bielany Wrocławskie, Kobierzyce, Siechnice),
// tourism (Rynek, Hala Stulecia, krasnale), universities; osiedla (Krzyki,
// Nadodrze, Jagodno, Psie Pole, Leśnica) and gminy (Smolec, Długołęka, Kąty
// Wrocławskie), towns (Oława, Oleśnica, Trzebnica); Ukrainian, English and
// German searches.
// NOT on this page: the website build (/pl/tworzenie-stron-internetowych-wroclaw);
// wizytówka Google in depth (/pl/oferty/pozycjonowanie-lokalne); Google Ads,
// social media, e-commerce (not offered); Warsaw pages.
import { p, h2, h3, li, link, k } from "./pt";

export const pozycjonowanieStronWroclawPl = {
  lang: "pl",
  group: "pozycjonowanie-stron-wroclaw",
  slug: "pozycjonowanie-stron-wroclaw",
  title: "Pozycjonowanie stron Wrocław",
  heading: "Pozycjonowanie stron we Wrocławiu",
  excerpt:
    "Pozycjonowanie stron we Wrocławiu dla firm usługowych, produkcyjnych, IT i gastronomii: audyt, poprawki w kodzie, podstrony pod frazy z osiedlami i gminami, wersje językowe, wizytówka Google i widoczność w odpowiedziach AI — robi to jeden specjalista, zdalnie, za ceny podane w cenniku.",
  seo: {
    metaTitle: "SEO Wrocław: audyt i pozycjonowanie stron | Bandziuk",
    metaDescription:
      "Pozycjonowanie stron internetowych we Wrocławiu: audyt, podstrony usług i osiedli, wizytówka Google, wersje językowe i AI. Jeden specjalista, audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Jeden specjalista zamiast agencji", "Audyt od 1000 zł", "Firmy z Wrocławia i Dolnego Śląska"],
  heroPhonePoints: ["Fizjoterapia Wrocław Krzyki", "Wasza firma w Mapach Google", "Zadzwoń", "Poleca ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO strony firmy z Wrocławia: strona, wizytówka Google, konkurencja", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO: poprawki techniczne, podstrony usług i osiedli, wersje językowe, dane strukturalne", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie strony internetowej firmy z Wrocławia", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje pozycjonowanie stron we Wrocławiu",
      items: [
        { _key: k("o"), iconName: "search", title: "Audyt na tle wrocławskiej konkurencji", text: "Które frazy są realne i co blokuje stronę" },
        { _key: k("o"), iconName: "layers", title: "Podstrony usług, osiedli i gmin", text: "Krzyki, Psie Pole, Smolec, Długołęka — tam, gdzie pracujecie" },
        { _key: k("o"), iconName: "message-circle", title: "Wersje językowe pod wyszukiwania", text: "Angielska, ukraińska, niemiecka — gdy dane to uzasadniają" },
        { _key: k("o"), iconName: "map-pin", title: "Wizytówka Google w dużym mieście", text: "Kategoria, obszar działania, zgodność ze stroną" },
        { _key: k("o"), iconName: "sparkles", title: "Widoczność w odpowiedziach AI", text: "ChatGPT, Perplexity i podsumowania AI w Google" },
        { _key: k("o"), iconName: "trending-up", title: "Raport w zapytaniach, nie w pozycjach", text: "Telefony, formularze i zapytania ofertowe z wyszukiwarki" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO strony", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe pozycjonowanie strony we Wrocławiu", value: "od 3500 zł / mies.", note: "w konkurencyjnych branżach od 5500 zł", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: strony firm, które budowałem i pozycjonowałem",
      subtitle:
        "Firma skanowania laserowego 3D i modelowania BIM ze stroną w trzech językach, której ruch organiczny wzrósł 29 razy, wielojęzyczny serwis agencji edukacyjnej dla dziesięciu krajów oraz lokalne firmy usługowe z Warszawy: warsztat samochodowy, firma remontowo-inwestycyjna i pracownia renowacji felg. Z firmą z Wrocławia łączy je duża konkurencja w wynikach Google i klienci, którzy szukają w więcej niż jednym języku.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "architecture-website-rebuild-and-seo-scan",
        "full-multilingual-website-development-and-seo-for-student-services",
        "auto-repair-seo-and-ux-boost",
        "renovation-and-investment-website-with-premium-design",
        "felgilab-wordpress-rebuild",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena pozycjonowania strony we Wrocławiu",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: co poprawiłbym najpierw na stronie i w wizytówce Google, i za jaką stałą cenę.",
      contextLabel: "Nazwa firmy lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Komu sprzedajecie?", options: ["Mieszkańcom Wrocławia i okolic", "Firmom (B2B)", "Turystom i gościom", "Klientom z całej Polski lub zagranicy"] },
        { _key: k("z"), question: "W jakich językach szukają Was klienci?", options: ["Tylko po polsku", "Po polsku i angielsku", "Także po ukraińsku", "Także po niemiecku"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Pozycjonowanie stron we Wrocławiu prowadzę dla firm, które chcą zdobywać klientów z wyszukiwarki w jednym z najbardziej konkurencyjnych miast w Polsce. Jestem jednym specjalistą: audyt, poprawki techniczne, nowe podstrony, wizytówka Google i raporty to moja praca, bez opiekuna klienta pośrodku. Na co dzień pracuję w Warszawie, a z wrocławskimi firmami współpracuję zdalnie, w jasno opisanych etapach."),

        h2("Pozycjonowanie stron internetowych we Wrocławiu: IT, przemysł, usługi i turystyka"),
        p("Wrocław to jedno z głównych centrów IT i usług dla biznesu w kraju, z dużą liczbą software house’ów i centrów usług wspólnych. Wokół miasta, w strefach przemysłowych w Bielanach Wrocławskich, Kobierzycach czy Siechnicach, działają zakłady produkcyjne, magazyny i firmy logistyczne, a z nimi poddostawcy: serwisy maszyn, firmy transportowe, biura projektowe. Rynek, Hala Stulecia i krasnale przyciągają turystów, a uczelnie — studentów z Polski i z zagranicy."),
        p("Każda z tych grup ma inne wyszukiwania. Software house szuka klientów frazami po angielsku i walczy o nie z firmami z całej Europy. Poddostawca przemysłowy jest szukany po nazwie usługi i regionie. Restauracja przy Rynku albo na Nadodrzu konkuruje w Mapach z dziesiątkami lokali w promieniu kilometra. Zanim zaproponuję zakres prac, ustalam, do której grupy należycie i gdzie naprawdę są Wasi klienci."),
        p(
          "Producenci i poddostawcy znajdą więcej na stronie ",
          link("pozycjonowanie strony firmy produkcyjnej", "/pl/pozycjonowanie-strony-firmy-produkcyjnej"),
          ", a lokale gastronomiczne — na stronie ",
          link("pozycjonowanie restauracji", "/pl/pozycjonowanie-strony-restauracji"),
          ".",
        ),

        h2("Jak szukają klienci we Wrocławiu: osiedla, gminy podwrocławskie i trzy języki"),
        p("Wrocław jest duży, więc mieszkańcy zawężają wyszukiwanie do swojej okolicy: „dentysta Krzyki”, „weterynarz Jagodno”, „mechanik Psie Pole”, „przedszkole Leśnica”. Szybko rosnące osiedla na obrzeżach i gminy wokół miasta — Smolec, Długołęka, Kąty Wrocławskie, Siechnice — mają własne wyszukiwania, często z nazwą wsi albo gminy. Firmy obsługujące szerszy region dostają zapytania z Oławy, Oleśnicy czy Trzebnicy."),
        p("We Wrocławiu mieszka i pracuje wiele osób z Ukrainy, które szukają usług po ukraińsku, a zagraniczni pracownicy firm IT i studenci — po angielsku. Turyści z Niemiec szukają po niemiecku. Wersję językową dla jednej z tych grup proponuję wtedy, gdy dane wyszukiwań w Waszej branży pokazują, że ona się opłaci."),

        h3("Nowe osiedla na obrzeżach Wrocławia: klienci, którzy dopiero szukają swoich firm"),
        p("Na Jagodnie, Klecinie, w Smolcu czy w Długołęce co roku wprowadzają się nowi mieszkańcy, którzy nie mają jeszcze swojego fryzjera, dentysty, mechanika ani ekipy do wykończenia mieszkania. Szukają ich w Google i w Mapach, często z nazwą osiedla. Dla firm z tych okolic to jedna z najłatwiejszych do zdobycia grup klientów: konkurencja na frazy z nazwą osiedla jest dużo mniejsza niż na frazy z samym „Wrocław”, a dobrze opisana podstrona i wizytówka potrafią przynieść telefony w kilka tygodni."),

        h2("SEO Wrocław: kto jest wysoko na „pozycjonowanie stron Wrocław” i „agencja SEO Wrocław”"),
        p("Te dwie frazy wyglądają podobnie, ale dają prawie zupełnie różne wyniki: na jedną i drugą wyświetla się w zasadzie tylko wspólna strona Oferteo. W wynikach są wrocławskie agencje, ogólnopolskie firmy z podstroną dla Wrocławia i pojedynczy specjaliści SEO z własnymi stronami. To dobrze pokazuje, jak rozdrobniony jest lokalny rynek — w Waszej branży będzie podobnie."),
        p("Dlatego pierwsze pytanie w audycie nie brzmi „jak wejść do pierwszej trójki na najbardziej ogólną frazę”, tylko: które frazy przynoszą klientów, kto na nie jest wysoko i czy da się go wyprzedzić w rozsądnym czasie i budżecie."),

        h2("Agencja SEO we Wrocławiu czy specjalista: jedna osoba od audytu do wdrożenia"),
        p("Agencja ma sens, gdy firma potrzebuje naraz SEO, kampanii, mediów społecznościowych i treści w dużej skali. Przy samym pozycjonowaniu często płacicie za strukturę: handlowca, opiekuna klienta i przekazywanie zadań między działami. U mnie ta sama osoba czyta dane, zmienia kod w WordPressie, Next.js albo innym systemie, pisze podstrony i tłumaczy raport. Ceny są opublikowane, umowa nie przedłuża się sama na kolejny rok. Nie prowadzę Google Ads ani mediów społecznościowych i nie robię sklepów internetowych."),

        h2("Audyt SEO strony we Wrocławiu: co sprawdzam"),
        li("indeksowanie, błędy, powielone tytuły i przekierowania"),
        li("szybkość strony na telefonie i stabilność układu przy ładowaniu"),
        li("frazy z Google Search Console, które już dają wejścia, i usługi bez własnej podstrony"),
        li("wersje językowe i oznaczenia hreflang, jeśli strona je ma"),
        li("wizytówkę Google i zgodność danych w katalogach"),
        li("konkurentów z Wrocławia na Wasze najważniejsze frazy"),
        p(
          "Efektem jest lista zadań od najważniejszego do najmniej pilnego. Więcej o audycie na stronie ",
          link("audyt SEO strony internetowej", "/pl/oferty/audyt-seo-strony-internetowej"),
          ".",
        ),

        h2("Pozycjonowanie lokalne we Wrocławiu: wizytówka Google w dużym mieście"),
        p("W dużym mieście Mapy Google pokazują firmy blisko osoby szukającej, więc jedna wizytówka na Krzykach rzadko jest widoczna dla kogoś na Psim Polu. Firma z lokalem walczy przede wszystkim o swoje osiedle i sąsiednie, a firma dojeżdżająca do klienta ustawia obszar działania i wspiera go podstronami dzielnic i gmin. Kategoria, usługi, zdjęcia, opinie i zgodność ze stroną robią resztę."),
        p(
          "Całą pracę nad Mapami opisuję na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Pozycjonowanie stron B2B i stron w kilku językach dla wrocławskich firm"),
        p("Firmy IT, produkcyjne i logistyczne z Wrocławia rzadko są szukane z nazwą miasta. Klient wpisuje usługę, technologię albo rodzaj produkcji, porównuje dostawców przez kilka tygodni i wraca na stronę kilka razy. Pozycjonowanie opiera się tu na podstronach usług z konkretami — dla kogo, w jakim zakresie, jak wygląda współpraca — na opisach realizacji i na wersjach językowych, w których każda ma własne adresy i oznaczenia hreflang."),
        h3("Co mierzę przy pozycjonowaniu B2B"),
        p("Zapytania ofertowe z formularza, wiadomości do handlowców i pobrania materiałów, rozdzielone na kraje i języki. Sama liczba wejść w B2B mówi niewiele. Jedno trafne zapytanie od zakładu z drugiego końca Europy może być warte więcej niż setki wizyt studentów, którzy trafili na artykuł przypadkiem, dlatego raport pokazuje, które podstrony przyniosły rozmowy handlowe, a nie tylko ruch."),

        h2("Pozycjonowanie stron we Wrocławiu w ChatGPT i Google AI Overviews (GEO, AEO)"),
        p("Ludzie pytają ChatGPT, Perplexity albo podsumowania AI w Google, kto we Wrocławiu naprawi pralkę, gdzie zrobić rezonans bez skierowania albo który software house robi aplikacje dla logistyki. Asystent poleca firmy, o których znajdzie sprawdzalne fakty. Tę część pracy nazywa się GEO (generative engine optimization) albo AEO (answer engine optimization):"),
        li("usługi, obszar działania, języki obsługi i ceny zapisane zwykłymi zdaniami"),
        li("dane strukturalne zgodne z wizytówką Google i z wersjami językowymi"),
        li("odpowiedzi na pytania, które klienci zadają przed pierwszym kontaktem"),
        p(
          "Zanim zacznę i po wdrożeniu zmian sprawdzam, kogo asystenci polecają na Wasze pytania i czy wśród poleceń jest Wasza firma. Więcej na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Jak długo trwa pozycjonowanie strony we Wrocławiu i czy to ma sens"),
        p("Poprawki techniczne i wizytówka dają efekt po kilku tygodniach. Nowa podstrona usługi we Wrocławiu potrzebuje zwykle od trzech do sześciu miesięcy, a przy frazach ogólnych w popularnych branżach dłużej. Ma to sens, gdy klienci szukają Waszej usługi w Google — i gdy plan zaczyna się od fraz, które są realne, a nie od tych, na które od lat są wysoko największe firmy w mieście. W raporcie są telefony, formularze i zapytania, a pozycje obok."),

        h2("Jak samemu pozycjonować stronę firmy z Wrocławia"),
        p("Kilka rzeczy zrobicie sami, bez budżetu. Każda usługa dostaje osobną podstronę z nazwą miasta albo osiedla w tytule. Wizytówka Google ma trafną kategorię, godziny i zdjęcia z Waszej pracy, a nie ze stocku. Zadowoleni klienci dostają prośbę o opinię, a każda opinia — odpowiedź. Google Search Console pokaże, jakie frazy już przyprowadzają ludzi. Zlecić warto to, w czym pomyłka kosztuje: przeniesienie strony, wersje językowe, problemy techniczne i branże, w których wrocławska konkurencja ma mocne strony od lat."),

        h2("Pozycjonowanie stron Wrocław: cennik"),
        li("Audyt SEO strony, wizytówki i konkurencji we Wrocławiu: od 1000 zł jednorazowo."),
        li("Jednorazowe prace — poprawki, podstrony usług i osiedli, wersje językowe, dane strukturalne: od 1000 do 3000 zł."),
        li("Stałe pozycjonowanie strony: od 3500 zł miesięcznie, a w branżach z silną konkurencją we Wrocławiu od 5500 zł miesięcznie."),
        p(
          "Ceny są w ",
          link("cenniku", "/pl/cennik"),
          ". Jeśli stronę trzeba zbudować od nowa, zajrzyjcie na stronę ",
          link("strony internetowe we Wrocławiu", "/pl/tworzenie-stron-internetowych-wroclaw"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie stron we Wrocławiu: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje pozycjonowanie strony we Wrocławiu w 2026?", "Stałe pozycjonowanie kosztuje od 3500 zł miesięcznie, w branżach z silną konkurencją od 5500 zł. Audyt kosztuje od 1000 zł jednorazowo, a wybrane prace bez stałej umowy od 1000 do 3000 zł."],
          ["Jak długo trwa pozycjonowanie strony?", "Wizytówka i poprawki techniczne działają po kilku tygodniach, nowe podstrony zwykle po trzech–sześciu miesiącach. Frazy z osiedlem lub gminą rosną szybciej niż ogólne."],
          ["Czy pozycjonowanie stron we Wrocławiu ma sens przy tak dużej konkurencji?", "Tak, jeśli plan zaczyna się od fraz, które są realne: usług z osiedlem, gminą albo konkretną specjalizacją. Walka o najbardziej ogólne frazy zwykle przychodzi później."],
          ["Kto zajmuje się pozycjonowaniem stron we Wrocławiu?", "Wrocławskie agencje, ogólnopolskie firmy z podstroną dla miasta i pojedynczy specjaliści. Ja pracuję sam: audyt, wdrożenie i raport robi ta sama osoba."],
          ["Jak samemu pozycjonować stronę?", "Osobna podstrona dla każdej usługi z miastem lub osiedlem w tytule, uzupełniona wizytówka Google, opinie i Google Search Console. Technikę, wersje językowe i przebudowę zwykle warto zlecić."],
          ["Czy warto mieć stronę po ukraińsku lub po angielsku?", "Jeśli dane wyszukiwań w Waszej branży to pokazują — tak. Każda wersja potrzebuje własnych adresów, oznaczeń hreflang i treści napisanej dla tamtejszego klienta."],
          ["Czy firma z Wrocławia może współpracować ze specjalistą z Warszawy?", "Tak. Cała współpraca toczy się online: rozmowa wideo, wspólny dokument z zadaniami i raport co miesiąc. Dane i konkurencję sprawdzam dla Wrocławia."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie strony we Wrocławiu: co mi wysłać"),
        p(
          "Wyślijcie link do strony i do wizytówki w Mapach Google, usługi, przy których chcecie więcej klientów, osiedla lub gminy, w których pracujecie, języki Waszych klientów i informację, czy macie teraz umowę z agencją. Odpowiem, co poprawiłbym najpierw i za jaką stałą cenę. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
