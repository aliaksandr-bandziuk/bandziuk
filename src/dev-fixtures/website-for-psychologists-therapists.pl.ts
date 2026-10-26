// Landing page fixture: Strona internetowa dla psychologa i psychoterapeuty (PL),
// group «website-for-psychologists-therapists». REWRITE of the existing page
// /pl/strona-dla-psychologow-terapeutow — the URL stays; the old reviews block
// is dropped. Market version for Poland, not a translation of the EN page.
// Semantic core: ref/medical-practices.md has no PL phrases above the source’s
// floor for this group; brief keywords: «strona internetowa dla psychologa»,
// «strona dla psychoterapeuty», «strona dla gabinetu psychologicznego» (H1/H2).
// Intent: ref/intent-check-medical-practices.md — «strona dla psychologa» vs
// «pozycjonowanie strony psychologa»: 0 shared URLs → separate pages. Top 10
// for this page: epsycholodzy, hedepy, sensly, mindness, risify,
// wiarygodnypsycholog, webkraft, sksystem → site builders and platforms for
// psychologists, studios; the buyer is the psychologist.
// Polish angles: spokojny projekt, informacja zamiast reklamy (samorząd
// psychologów — general), kalendarz ZnanyLekarz vs formularz, RODO i dane o
// zdrowiu, kreator / gotowa strona w abonamencie vs strona na zamówienie,
// przeniesienie bloga z WordPressa, panel z zabezpieczeniami, terapia online
// (płatność, strefy czasowe).
// Direct case: Giuseppe, psychotherapist in Milan (psychotherapist-website-milan).
// NOT on this page: being found — frazy, podstrony problemów pod SEO,
// wizytówka Google, dzielnice, ZnanyLekarz jako kanał
// (/pl/pozycjonowanie-strony-psychologa); doctors and przychodnie
// (/pl/strona-internetowa-dla-lekarza).
// Owner's rule: new pages weave in AI search.
import { p, h2, li, ol, link, k } from "./pt";

export const websiteForPsychologistsTherapistsPl = {
  lang: "pl",
  group: "website-for-psychologists-therapists",
  slug: "strona-dla-psychologow-terapeutow",
  title: "Strona internetowa dla psychologa i psychoterapeuty",
  heading: "Strona internetowa dla psychologa i psychoterapeuty",
  excerpt:
    "Tworzę strony internetowe dla psychologów, psychoterapeutów i gabinetów psychologicznych: spokojny projekt dla osoby w trudnym momencie, prosta droga do pierwszej konsultacji, formularze zgodne z RODO i panel, w którym trudno coś zepsuć.",
  seo: {
    metaTitle: "Strona www dla gabinetu psychologicznego | Bandziuk",
    metaDescription:
      "Strona internetowa dla psychologa i psychoterapeuty: spokojny projekt, prosta droga do pierwszej wizyty, RODO, przeniesienie bloga bez strat. Od 3000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt + wykonanie, jedna cena", "Od 3000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Psychoterapia indywidualna", "Spotkania online", "Cennik sesji", "Napisz do mnie"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona internetowa dla psychologa lub psychoterapeuty", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Strona gabinetu psychologicznego z kilkoma terapeutami, wersjami językowymi, przeniesieniem bloga i panelem z zabezpieczeniami", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co dostajesz ze stroną internetową dla psychologa",
      items: [
        { _key: k("o"), iconName: "image", title: "Spokojny projekt z Twoim zdjęciem", text: "Bez wyskakujących okienek i zdjęć ze stocka" },
        { _key: k("o"), iconName: "message-circle", title: "Jasne kroki do pierwszej wizyty", text: "„Co się stanie, gdy napiszę” w czterech zdaniach" },
        { _key: k("o"), iconName: "shield-check", title: "Formularz zgodny z RODO", text: "Bez pytań o objawy, analityka po zgodzie" },
        { _key: k("o"), iconName: "plug", title: "Kalendarz albo formularz", text: "ZnanyLekarz, Twój system albo krótka wiadomość" },
        { _key: k("o"), iconName: "file-text", title: "Panel, który pilnuje treści", text: "Ostrzeżenia o słowach, chronione adresy i strony" },
        { _key: k("o"), iconName: "sparkles", title: "Czytelna dla Google i ChatGPT", text: "Fakty tekstem i w danych strukturalnych" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona psychologa lub psychoterapeuty", value: "3000–6000 zł", note: "projekt w cenie" },
        { _key: k("r"), label: "Gabinet: kilku terapeutów, języki, blog, panel", value: "od 8500 zł", note: "projekt w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: gabinet psychoterapii i inne strony, które zaprojektowałem",
      subtitle:
        "Najpierw prywatny gabinet psychoterapii w Mediolanie: spokojny projekt dla osób z lękiem, 468 wpisów bloga przeniesionych bez utraty adresów i panel, który ostrzega przed zakazanymi sformułowaniami. Obok strony pokazujące inne części tej samej pracy: projekt premium oparty na prawdziwych zdjęciach, przebudowa z zachowaniem wyglądu marki, strona w pięciu językach i przebudowa na WordPressie.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "psychotherapist-website-milan",
        "renovation-and-investment-website-with-premium-design",
        "architecture-website-rebuild-and-seo-scan",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "felgilab-wordpress-rebuild",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej dla psychologa",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: proponuję pierwszy ekran i drogę kontaktu dla Twojego gabinetu oraz podaję stałą cenę.",
      contextLabel: "Nazwa gabinetu lub obecna strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Jaką stronę masz dziś?", options: ["Nie mam strony", "Kreator albo gotowy szablon", "WordPress z blogiem", "Tylko profil w ZnanyLekarz"] },
        { _key: k("z"), question: "Jak mają się z Tobą kontaktować nowe osoby?", options: ["Krótki formularz", "Kalendarz online", "Telefon", "Jeszcze nie wiem"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Tworzę strony internetowe dla psychologów, psychoterapeutów i gabinetów psychologicznych — projekt, wykonanie i uruchomienie robię sam, więc za wygląd i działanie strony odpowiada jedna osoba. Stronę psychologa czyta ktoś, kto często jeszcze nie wie, czy jest gotowy poprosić o pomoc. Jej zadanie jest proste: pokazać, kim jesteś, pozwolić rozpoznać własny problem w Twoich słowach i sprawić, że pierwsza wiadomość nie będzie trudna."),

        h2("Strona internetowa dla psychologa: spokojny projekt dla osoby w trudnym momencie"),
        p("Wiele osób wchodzi na stronę wieczorem, z telefonu, po tygodniach wahania. Głośny projekt sprawia, że zamykają kartę. Dlatego na stronie nie ma wyskakujących okienek z newsletterem, czatów, karuzel zdjęć ani stockowych zdjęć ludzi trzymających się za głowę. Jest dużo światła, stonowane kolory, tekst czytelny bez powiększania, Twoje prawdziwe zdjęcie i zdjęcie gabinetu oraz jeden kolor akcentu zarezerwowany dla przycisku kontaktu."),
        p("Dla Giuseppe, psychologa i psychoterapeuty z Mediolanu, który pracuje z lękiem i napadami paniki, zaprojektowałem spokojny projekt od zera: ciemny motyw z jasnymi sekcjami, krój szeryfowy z prawdziwą kursywą i wyłącznie zasoby na otwartych licencjach. Nie jest to przerobiony szablon i to widać."),
        p("Projekt trzyma się wytycznych WCAG: kontrast, wielkość tekstu, obsługa klawiaturą i czytnikiem ekranu. Krótkie akapity i wyraźne nagłówki pomagają też osobom z ADHD czy dysleksją, które często trafiają na strony psychologów."),

        h2("Co widać na pierwszym ekranie strony dla gabinetu psychologicznego"),
        p("Zanim ktoś przewinie stronę, powinien wiedzieć cztery rzeczy:"),
        li("z czym pracujesz, językiem klienta: „Psychoterapia lęku i napadów paniki — Poznań i online”, a nie „Przestrzeń do rozwoju”"),
        li("czy przyjmujesz stacjonarnie, online, czy w obu formach"),
        li("czy masz wolne terminy dla nowych osób"),
        li("cena sesji w jednym zdaniu i przycisk kontaktu"),
        p("Zdjęcie terapeuty powinno być wysoko. Ludzie wybierają osobę, nie gabinet, a naturalny portret we własnym pokoju mówi więcej niż hasło."),

        h2("Strona dla psychoterapeuty krok po kroku: co się stanie, gdy napiszę"),
        p("Najtrudniejsza jest pierwsza wiadomość. Krótka sekcja z kolejnymi krokami, na stronie głównej i na stronie kontaktu, zdejmuje z niej ciężar:"),
        ol("Piszesz kilka zdań: imię, kontakt, spotkanie w gabinecie czy online."),
        ol("Dostajesz odpowiedź w czasie podanym na stronie."),
        ol("Krótka rozmowa, żeby sprawdzić, czy możemy razem pracować."),
        ol("Pierwsza sesja — cena i zasady odwoływania znane wcześniej."),
        p("Te same kroki warto powtórzyć w automatycznej odpowiedzi na formularz: osoba wie, że wiadomość dotarła, kiedy może spodziewać się odpowiedzi i gdzie szukać pomocy w nagłym kryzysie — z numerem telefonu zaufania i numerem alarmowym 112."),

        h2("Kalendarz ZnanyLekarz, system gabinetowy czy formularz na stronie psychologa"),
        p("Jeśli korzystasz z kalendarza w ZnanyLekarz albo z systemu do prowadzenia gabinetu, można go osadzić na stronie albo podlinkować z przycisku. To wygodne, gdy chcesz, żeby ludzie sami rezerwowali konsultację. Wiele osób pracujących terapeutycznie woli jednak najpierw krótką wiadomość, żeby sprawdzić, czy to dobre dopasowanie. Strona może mieć oba wejścia — ważne, żeby jedno było wyraźnie główne, a osoba wiedziała, czy termin jest potwierdzony od razu, czy dostanie odpowiedź."),

        h2("RODO na stronie dla psychoterapeuty: formularz, poczta i analityka"),
        p("Informacje o zdrowiu RODO chroni szczególnie, a wiadomość do terapeuty bardzo łatwo zamienia się w opis objawów. Formularz pyta więc o niewiele — imię, e-mail lub telefon, forma spotkania, dogodny termin — i prosi, żeby nie opisywać problemu. Obok jest klauzula informacyjna, a z dostawcą formularza i poczty umowa powierzenia przetwarzania danych."),
        p("Reszta to rzeczy niewidoczne dla odwiedzających. Formularz u Giuseppe wysyła wiadomości z poczty w jego własnej domenie z ustawionymi SPF, DKIM i DMARC, żeby odpowiedzi nie trafiały do spamu, a analityka działa dopiero po zgodzie. Kilka lat temu pracowałem przy systemie medycznym przetwarzającym dane pacjentów (objętym NDA) i wyniosłem z tego jedną zasadę: strona zbiera tylko to, co konieczne. To ogólne wskazówki, nie opinia prawna."),

        h2("Kreator, gotowa strona w abonamencie czy strona dla psychologa na zamówienie"),
        p("Kreatory i platformy z gotowymi stronami dla psychologów działają szybko i kosztują niewiele miesięcznie. Dla osoby z jednym gabinetem, bez bloga i z kilkoma podstronami to często wystarczy — i powiem to wprost. Pamiętaj tylko, że na takich platformach teksty bywają podobne u wielu psychologów, co nie pomaga ani w zaufaniu, ani w Google."),
        p("Strona na zamówienie ma sens, gdy gabinet wyrasta z szablonu: kilku terapeutów, druga wersja językowa, blog, który już przynosi odwiedziny, zasady treści, których chcesz pilnować, albo wiele obszarów pracy. Zanim wybierzesz platformę, sprawdź, czy przy rezygnacji zabierzesz teksty, wpisy i adresy."),

        h2("Podstrony strony internetowej psychologa: o mnie, obszary pracy, cennik, online"),
        p("Poza stroną główną większość gabinetów potrzebuje tych samych kilku podstron, z których każda ma jedno zadanie:"),
        li("„O mnie” w pierwszej osobie: wykształcenie, szkoła psychoterapii, superwizja, jak wygląda praca z Tobą"),
        li("obszary pracy zbudowane z jednego wzoru, żeby wyglądały i czytały się podobnie"),
        li("cennik tekstem: długość i cena sesji, zasady odwoływania, faktura"),
        li("pytania i odpowiedzi z pierwszych rozmów"),
        li("kontakt z mapą, jeśli przyjmujesz stacjonarnie"),
        p("Strona Giuseppe ma mapę jego gabinetów w Mediolanie, Monzy i Cernusco sul Naviglio, więc każdy od razu widzi, który pokój ma najbliżej i jak tam dojechać."),

        h2("Strona psychoterapeuty dla klientów online: płatność i strefy czasowe"),
        p("Jeśli pracujesz online, osobna podstrona wyjaśnia, jak to wygląda: platforma, przygotowanie spokojnego miejsca, płatność przelewem lub BLIK, a dla osób z zagranicy także w euro czy funtach. Godziny sesji pokazuję w strefie czasowej odwiedzającego, a obok piszę, z jakich krajów przyjmujesz i jak wygląda faktura dla osoby spoza Polski. Giuseppe pracuje także z Włochami za granicą; jego strona jest po włosku, z wersją angielską pod /en, w której każdy adres jest przetłumaczony, a nie skopiowany."),

        h2("Przeniesienie strony psychologa bez utraty bloga i pozycji w Google"),
        p("Wielu psychologów latami pisze na WordPressie i te wpisy mają swoją historię w Google. U Giuseppe przeniosłem wszystkie 468 wpisów z WordPressa na Next.js 16 z Sanity jako panelem i ustawiłem przekierowania 301 z każdego starego adresu na nowy. Doszło siedem stron filarowych, 21 włoskich podstron i strony dla Mediolanu, Monzy i terapii online. Od pierwszej linii kodu do przekazania minęły 44 dni robocze."),
        p(
          "Przed każdą przeprowadzką spisuję wszystkie adresy, przypisuję je do nowych podstron, przenoszę tytuły i dane strukturalne, a po starcie sprawdzam, czy nic nie zwraca błędu. Więcej na stronie ",
          link("przebudowa strony internetowej", "/pl/oferty/przebudowa-strony-internetowej"),
          ".",
        ),

        h2("Panel z zabezpieczeniami: strona dla psychologa, którą edytujesz sam"),
        p("Po starcie stronę edytujesz Ty, często wieczorem i w pośpiechu, więc panel powinien utrudniać błędy. W panelu Giuseppe pojawia się ostrzeżenie, gdy tekst zawiera sformułowania zakazane przez artykuł 40 włoskiego kodeksu etyki psychologów: obietnice efektów, opinie pacjentów, rabaty, „bezpłatną konsultację”. Najważniejszych podstron nie da się usunąć, a adres opublikowanej strony jest zablokowany. Dostał instrukcję po angielsku (69 stron) i po włosku (71 stron) oraz nagrania wideo."),
        p("W Polsce listę ostrzeżeń ustalasz według zasad samorządu psychologów i kodeksu swojego towarzystwa — sprawdź ich aktualną wersję. Typowo trafiają na nią „gwarancja”, „skuteczna terapia”, „pierwsza wizyta gratis” i cytaty z klientów."),

        h2("Strona dla psychologa, którą rozumieją ChatGPT i Google AI Overviews"),
        p("Asystent opisze tylko gabinet, o którym przeczyta jasne fakty. Strona jest zbudowana tak, żeby to było możliwe: treść przychodzi z serwera jako tekst, dane strukturalne opisują terapeutę, gabinety, problemy, formy terapii, usługi i pytania z odpowiedziami, a w robots.txt zapisane są reguły dla robotów AI. Nowe podstrony Giuseppe już pojawiają się w odpowiedziach ChatGPT — a on sam znalazł mnie, pytając ChatGPT."),
        p(
          "Bycie znalezionym na dłuższą metę opisuję na stronie ",
          link("pozycjonowanie strony psychologa", "/pl/pozycjonowanie-strony-psychologa"),
          " i ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Ile kosztuje strona internetowa dla psychologa"),
        li("Prosta strona — strona główna, o mnie, kilka obszarów pracy, cennik, kontakt: 3000–6000 zł."),
        li("Strona gabinetu z kilkoma terapeutami, terapią online, wersjami językowymi, przeniesieniem bloga i panelem z zabezpieczeniami: od 8500 zł."),
        p("Utrzymanie strony często nic nie kosztuje: jeśli działa dobrze, miesiącami nie trzeba w niej nic zmieniać, a treści poprawiasz sam w panelu."),
        p(
          "Projekt jest w cenie. Gabinety lekarskie i przychodnie znajdą więcej na stronie ",
          link("strona internetowa dla lekarza", "/pl/strona-internetowa-dla-lekarza"),
          ", o tym, jak tworzę strony, piszę na stronie ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ". Pełne widełki są w ",
          link("cenniku", "/pl/cennik"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strona internetowa dla psychologa: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona internetowa dla psychologa?", "Projekt jest w cenie: 3000–6000 zł za prostą stronę, od 8500 zł za stronę gabinetu z kilkoma terapeutami, wersjami językowymi, przeniesieniem bloga albo panelem z zabezpieczeniami. Stałą cenę podaję po krótkim opisie gabinetu."],
          ["Ile trwa zrobienie strony dla psychoterapeuty?", "Prosta strona zwykle kilka tygodni, w zależności od tego, jak szybko są gotowe teksty i zdjęcia. Duża trwa dłużej: strona Giuseppe z 468 przeniesionymi wpisami i dwoma językami powstała w 44 dni robocze."],
          ["Czy wystarczy kreator albo gotowa strona dla psychologa?", "Przy jednym gabinecie i kilku podstronach często tak. Strona na zamówienie ma sens przy kilku terapeutach, drugim języku, blogu, który warto zachować, albo zasadach treści, których ma pilnować panel."],
          ["Czy przeniesiesz mojego bloga z WordPressa bez utraty pozycji?", "Tak. Każdy stary adres dostaje przekierowanie 301 na nową podstronę, a tytuły i dane strukturalne są przenoszone, więc wpisy zachowują swoją historię."],
          ["Czy można podpiąć kalendarz z ZnanyLekarz?", "Tak, kalendarz można osadzić na stronie albo podlinkować z przycisku. Obok może być krótki formularz dla osób, które wolą najpierw napisać."],
          ["Czy sam(a) będę mógł edytować stronę?", "Tak. Dostajesz panel z chronionymi podstronami, zablokowanymi adresami opublikowanych stron i — jeśli chcesz — ostrzeżeniami o sformułowaniach, których nie wolno używać, a do tego instrukcję i krótkie filmy."],
          ["Czy RODO na stronie psychologa wymaga czegoś szczególnego?", "Tak, bo wiadomości łatwo zawierają dane o zdrowiu. Formularz nie pyta o objawy, ma klauzulę informacyjną, dostawca ma umowę powierzenia, a analityka działa po zgodzie. Ostateczną ocenę daje inspektor ochrony danych albo prawnik."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową dla psychologa: co mi wysłać"),
        p(
          "Wyślij adres swojej strony lub profil z ZnanyLekarz, swoje kwalifikacje i nurt, obszary pracy, informację, czy przyjmujesz stacjonarnie, online czy w obu formach, i jak chcesz, żeby ludzie się z Tobą kontaktowali. Kilka zdjęć Ciebie i gabinetu pomoże mi pokazać pierwszy ekran, który wygląda jak Twój gabinet. Odpowiem propozycją i stałą ceną. Skorzystaj z ",
          link("formularza powyżej", "#quote"),
          " albo napisz na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
