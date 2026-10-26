// Landing page fixture: Strona internetowa dla spa (PL), group
// «spa-website-design». New page. Market version for Poland, not a
// translation of the EN page. Reader: właściciele i managerowie day spa,
// salonów masażu, stref wellness i spa hotelowych.
// Semantic core: ref/creative-leisure.md has no PL phrases above the source’s
// floor for this group; brief keywords: «strona internetowa dla spa» (H1,
// H2), «strona dla salonu masażu», «strona spa hotelowego». EN reference
// phrase: web design for spas 260.
// Intent: ref/intent-check-creative-leisure.md — «spa website design» SERP
// (EN) = designers, templates, spa software; «spa seo» = single-page
// applications, not spas → no SEO page and no «SEO dla spa» topic here.
// Medical aesthetics is a different SERP → /pl/strona-internetowa-dla-kliniki-
// medycyny-estetycznej, linked once.
// Polish angles: vouchery na prezent (Walentynki, Dzień Kobiet, Dzień Matki,
// Mikołajki, święta) i platformy prezentowe z prowizją (general), BLIK
// i Przelewy24, Booksy i Versum, rytuały dla dwojga, spa hotelowe w górach
// i nad morzem (general), salony masażu tajskiego i balijskiego, Mapy Google.
// NOT on this page: zabiegi medycyny estetycznej (strona kliniki medycyny
// estetycznej); salony fryzjerskie (/pl/strona-internetowa-dla-salonu-
// fryzjerskiego); pozycjonowanie spa jako usługa.
import { p, h2, li, link, k } from "./pt";

export const spaWebsiteDesignPl = {
  lang: "pl",
  group: "spa-website-design",
  slug: "strona-internetowa-dla-spa",
  title: "Strona internetowa dla spa",
  heading: "Strona internetowa dla spa i salonu masażu",
  excerpt:
    "Strona internetowa dla spa, salonu masażu i strefy wellness: menu zabiegów z czasem trwania i ceną, rytuały dla dwojga, vouchery kupowane online przez BLIK i wysyłane e-mailem oraz rezerwacja w systemie, którego już używasz.",
  seo: {
    metaTitle: "Strona www dla spa, wellness i masażu | Bandziuk",
    metaDescription:
      "Strona internetowa dla spa i salonu masażu: menu zabiegów z czasem i ceną, rytuały dla dwojga, vouchery online z BLIK, rezerwacja Booksy. Od 3000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt + wykonanie, jedna cena", "Od 3000 zł", "Vouchery sprzedawane online"],
  heroPhonePoints: ["Masaż · 60 lub 90 min", "Rytuał dla dwojga", "Kup voucher na prezent", "Zarezerwuj zabieg"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona dla spa lub salonu masażu", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Strona spa z pełnym menu zabiegów, pakietami, sprzedażą voucherów online, rezerwacją, wersjami językowymi i lokalnym SEO", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co dostajesz ze stroną internetową dla spa",
      items: [
        { _key: k("o"), iconName: "file-text", title: "Menu zabiegów z czasem i ceną", text: "Krótki opis, dla kogo, przycisk rezerwacji" },
        { _key: k("o"), iconName: "shield-check", title: "Vouchery kupowane online", text: "BLIK lub karta, unikalny kod na e-mail" },
        { _key: k("o"), iconName: "layers", title: "Pakiety i rytuały dla dwojga", text: "Pół dnia, cały dzień, program godzina po godzinie" },
        { _key: k("o"), iconName: "plug", title: "Rezerwacja z Twojego systemu", text: "Booksy, Versum albo formularz zapytania" },
        { _key: k("o"), iconName: "image", title: "Spokojny projekt, szybkie ładowanie", text: "Twoje wnętrza na zdjęciach, lekkie podstrony" },
        { _key: k("o"), iconName: "sparkles", title: "Czytelna dla Google i ChatGPT", text: "Zabiegi, ceny i godziny jako tekst" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona spa lub salonu masażu", value: "3000–6000 zł", note: "projekt w cenie" },
        { _key: k("r"), label: "Menu, pakiety, vouchery, rezerwacja, języki", value: "od 8500 zł", note: "projekt w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: sprzedaż online dla salonu beauty, spokojny projekt i strony wielojęzyczne",
      subtitle:
        "Każda z tych stron pokazuje inną część pracy nad stroną spa. Dla Landi Room, salonu beauty z Warszawy, zrobiłem stronę, na której płatność i dostarczenie kursu dzieją się automatycznie — tak samo ma działać voucher. Elegancka strona firmy remontowo-inwestycyjnej i spokojny projekt dla psychoterapeuty z Mediolanu pokazują wyciszony styl, którego oczekują goście. Platforma nieruchomości na Cyprze działa w pięciu językach dla klientów z zagranicy, a warszawski warsztat samochodowy to praca nad Mapami Google i lokalnym wyszukiwaniem.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "e-commerce-landing-page-with-secured-video-access",
        "renovation-and-investment-website-with-premium-design",
        "psychotherapist-website-milan",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "auto-repair-seo-and-ux-boost",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej dla spa",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: proponuję listę podstron — menu, pakiety, vouchery, rezerwacja — i podaję stałą cenę.",
      contextLabel: "Nazwa spa lub obecna strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Jakie to miejsce?", options: ["Day spa", "Salon masażu", "Spa hotelowe", "Strefa wellness z basenem lub saunami"] },
        { _key: k("z"), question: "Jak dziś sprzedajesz vouchery?", options: ["Tylko w recepcji", "Przez Booksy lub inny system", "Przez platformę prezentową", "Na razie nie sprzedaję"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Strona internetowa dla spa ma oddać atmosferę gabinetów, a jednocześnie szybko odpowiedzieć na konkretne pytania: co obejmuje zabieg, ile trwa, ile kosztuje, jak go zarezerwować i jak kupić go komuś w prezencie. Projektuję i wykonuję takie strony sam — dla day spa, salonów masażu, stref wellness i spa hotelowych — i łączę je z systemem rezerwacji oraz płatnościami, z których już korzystasz."),

        h2("Strona internetowa dla spa: kto ją odwiedza i czego szuka"),
        p("Na stronę spa trafiają co najmniej cztery grupy osób i każda potrzebuje innego pierwszego kroku:"),
        li("ktoś, kto chce odpocząć sam — szuka menu i wolnego terminu w tym tygodniu"),
        li("osoba kupująca prezent, często na ostatnią chwilę przed Dniem Matki albo świętami — chce mieć voucher w skrzynce za kilka minut"),
        li("para, która planuje wspólny dzień i porównuje pakiety"),
        li("gość hotelu albo turysta — sprawdza godziny, wejścia jednorazowe i co zabrać"),
        p("Strona główna daje każdemu z nich wyraźne wejście: „Zarezerwuj zabieg”, „Kup voucher”, „Dla dwojga”, „Przed wizytą”. Historia miejsca, kosmetyki i zespół są piętro niżej."),

        h2("Menu zabiegów na stronie spa: czas trwania, cena i przebieg zabiegu"),
        p("Wiele spa trzyma menu w PDF-ie, którego na telefonie nie da się wygodnie przeczytać. Na stronie menu jest tekstem, podzielonym tak, jak myśli gość: masaże, zabiegi na twarz, zabiegi na ciało, rytuały, dodatki. Przy każdej pozycji:"),
        li("warianty czasu obok siebie, na przykład 60 i 90 minut, każdy z własną ceną"),
        li("dwa, trzy zdania o tym, co się dzieje — prostym językiem, nie listą olejków"),
        li("dla kogo zabieg jest, a kiedy lepiej go odłożyć, na przykład w ciąży"),
        li("przycisk, który otwiera rezerwację właśnie tego zabiegu"),
        p("Większe zabiegi dostają własne podstrony, więc ktoś, kto szuka „masaż gorącymi kamieniami Wrocław”, trafia od razu na właściwą stronę. Ceny zmieniasz w panelu w jednym miejscu."),

        h2("Vouchery do spa sprzedawane przez stronę: BLIK, płatność online i wysyłka e-mailem"),
        p("W Polsce voucher do spa to jeden z najczęstszych prezentów — na Walentynki, Dzień Kobiet, Dzień Matki, Mikołajki i święta. Wiele miejsc sprzedaje go jednak tylko w recepcji albo przez platformy prezentowe, które pobierają prowizję. Na własnej stronie zakup trwa minutę: wybór kwoty albo konkretnego zabiegu, płatność BLIK-iem, przelewem przez Przelewy24 lub kartą, a potem voucher z unikalnym kodem w e-mailu — od razu albo w wybranym dniu do osoby obdarowanej. Recepcja sprawdza kod przy wizycie i oznacza go jako wykorzystany."),
        p("Jeśli Twój system rezerwacji obsługuje bony, strona z niego korzysta. Jeśli nie, buduję sprzedaż na Stripe Checkout. Tak działa strona, którą zrobiłem dla Landi Room, warszawskiego salonu beauty: po płatności klient automatycznie dostaje unikalny link do kursu wideo, ważny 14 dni, a pierwsza kampania Google Ads przyniosła ponad 100 sprzedaży. Voucher działa na tej samej zasadzie — zamiast linku jest kod. Termin ważności i zasady zwrotu ustalasz Ty, zgodnie z przepisami."),
        p("Osobny przycisk warto dać firmom. Przed świętami i na Dzień Kobiet działy kadr kupują kilkanaście albo kilkadziesiąt voucherów naraz i potrzebują faktury, wspólnego wzoru i listy kodów w jednym pliku. Krótki formularz zamówienia dla firm oszczędza recepcji kilku dni korespondencji."),

        h2("Pakiety spa i rytuały dla dwojga na stronie"),
        p("Pakiet to sposób na wyższą wartość wizyty, ale wymaga więcej wyjaśnień niż pojedynczy masaż. Podstrona pakietu pokazuje program godzina po godzinie: przyjazd, sauna lub basen, zabiegi po kolei, herbata albo lunch, wyjście — z łącznym czasem i ceną. Przy rytuałach dla dwojga odpowiada też na pytania, które wstrzymują rezerwację: czy będziemy w jednym pokoju, czy każde może wybrać inny zabieg, czy jest osobna strefa relaksu. Ten sam pakiet można zarezerwować albo kupić jako voucher z jednej podstrony."),

        h2("Rezerwacja zabiegów na stronie spa: Booksy, Versum lub formularz zapytania"),
        p("Większość salonów masażu i day spa w Polsce pracuje na Booksy albo Versum, a spa hotelowe często na systemie recepcji hotelu. Strona nie zastępuje kalendarza — prowadzi do niego we właściwe miejsce. Przycisk przy zabiegu otwiera rezerwację tej usługi, widżet ładuje się dopiero po kliknięciu, a pakiety wymagające ustaleń trafiają do krótkiego formularza zapytania. Zasady zadatku i odwołania wizyty są jednym zdaniem nad przyciskiem."),

        h2("Strona dla salonu masażu: rodzaje masażu, masażyści i pierwsza wizyta"),
        p("Salon masażu jest zwykle mniejszy niż spa, a klienci wybierają według techniki i osoby. Strona opisuje techniki — klasyczny, relaksacyjny, sportowy, tajski, balijski, masaż dla kobiet w ciąży — z informacją o sile ucisku i celu. Każdy masażysta ma zdjęcie, wykształcenie i listę technik. Osobna sekcja tłumaczy pierwszą wizytę: kiedy przyjść, o co zapytamy, w czym się położyć, jak powiedzieć, że ucisk jest za mocny. Jednoosobowemu gabinetowi wystarcza kilka podstron, a gdy masażystów przybywa, każdy dostaje własny profil z przyciskiem rezerwacji do siebie."),

        h2("Strona spa hotelowego i day spa: strefa wellness, wejścia jednorazowe i goście z zewnątrz"),
        p("Spa w hotelu w górach albo nad morzem sprzedaje dwóm grupom: gościom hotelu i mieszkańcom okolicy, którzy często nie wiedzą, czy w ogóle mogą przyjść. Osobna podstrona to wyjaśnia: wejścia jednorazowe i co obejmują, godziny basenu i saun, ograniczenia wieku, co zabrać, parking, wejście od ulicy. Dla gości z Niemiec, Czech czy Ukrainy menu i rezerwacja mogą mieć wersje językowe z własnymi adresami. Pakiety pobytowe z zabiegami prowadzą do rezerwacji pokoju w systemie hotelu, a zabiegi dla gości z zewnątrz — do kalendarza spa, żeby obie ścieżki się nie myliły."),

        h2("Projekt strony spa: spokojny, elegancki i szybki na telefonie"),
        p("Strony spa często wyglądają spokojnie, ale ładują się długo: film na całym ekranie, ogromne zdjęcia, trzy kroje pisma. Projektuję inaczej: zdjęcia Twoich wnętrz w naturalnym świetle, dwa kroje, stonowana paleta z jednym kolorem zarezerwowanym dla przycisku rezerwacji, dużo oddechu między sekcjami. Zdjęcia są kompresowane i ładowane podczas przewijania, a menu, voucher i dojazd są w zasięgu kciuka. Jeśli nie masz dobrych zdjęć, lepiej zaplanować jedną sesję we wnętrzach niż wypełniać stronę zdjęciami ze stocka, które goście rozpoznają z innych spa."),

        h2("Strona spa a strona kliniki medycyny estetycznej: relaks bez obietnic medycznych"),
        p(
          "Spa sprzedaje odpoczynek i pielęgnację. Klinika medycyny estetycznej sprzedaje zabiegi medyczne — z lekarzem, kwalifikacją, zgodami i innymi zasadami komunikacji. Mieszanie obu na jednej stronie myli gości i kusi do obietnic efektów, których spa składać nie powinno. Jeśli wykonujesz także zabiegi medyczne, ich strona wymaga osobnego podejścia, opisanego na stronie ",
          link("strona internetowa dla kliniki medycyny estetycznej", "/pl/strona-internetowa-dla-kliniki-medycyny-estetycznej"),
          ".",
        ),

        h2("Spa w Mapach Google: wizytówka, opinie i „spa w pobliżu”"),
        p(
          "Wielu nowych gości wpisuje „spa w pobliżu” albo „masaż + miasto” i wybiera z mapy. Strona od startu ma te same dane co wizytówka Google — nazwę, adres, godziny, telefon — dane strukturalne miejsca i zabiegów oraz odnośniki do opinii. Regularną opiekę nad wizytówką i widocznością w mapach obejmuje usługa ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Strona spa, którą ChatGPT i Google AI Overviews potrafią przeczytać"),
        p("Goście pytają już ChatGPT: „spa dla dwojga w Krakowie z sauną” albo „gdzie kupić voucher na masaż w Gdyni”. Asystent poleci tylko miejsce, o którym przeczyta konkretne fakty. Dlatego zabiegi, czas trwania, ceny, pakiety, vouchery i godziny są na stronie tekstem wysyłanym z serwera, a nie w PDF-ie czy na grafice, i są opisane w danych strukturalnych."),
        p(
          "Dalszą pracę nad tym, żeby ChatGPT i inni asystenci wymieniali Twoje spa, opisuję na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Ile kosztuje strona internetowa dla spa"),
        li("Prosta strona spa lub salonu masażu — strona główna, menu zabiegów, zespół, rezerwacja, zasady wizyt, kontakt: 3000–6000 zł."),
        li("Pełna strona spa z podstronami zabiegów, pakietami, sprzedażą voucherów online, integracją rezerwacji, wersjami językowymi i lokalnym SEO: od 8500 zł."),
        p(
          "Projekt graficzny nie jest liczony osobno. Jak wygląda współpraca przy stronie, opisuję w ofercie ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ", a ceny wszystkich usług zebrałem w ",
          link("cenniku", "/pl/cennik"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strona internetowa dla spa: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona internetowa dla spa?", "Prosta strona spa lub salonu masażu kosztuje 3000–6000 zł, pełna — z pakietami, sprzedażą voucherów, integracją rezerwacji i wersjami językowymi — od 8500 zł. Projektu nie liczę osobno; stałą cenę podaję, gdy zobaczę menu zabiegów."],
          ["Czy na stronie spa można sprzedawać vouchery z płatnością BLIK?", "Tak. Gość wybiera kwotę lub zabieg, płaci BLIK-iem, przelewem lub kartą i dostaje voucher z kodem e-mailem. Działa to przez Twój system rezerwacji albo przez Stripe Checkout."],
          ["Czy strona będzie połączona z Booksy albo Versum?", "Tak — przez link do konkretnego zabiegu, przycisk albo widżet, zależnie od tego, co oferuje Twój system. Przed wyceną sprawdzam konto, żeby każdy przycisk rezerwacji prowadził we właściwe miejsce."],
          ["Czy recepcja sama zmieni cennik i pakiety?", "Tak. Zabiegi, czasy, ceny i pakiety edytuje się w prostym panelu, a zmiana pojawia się na każdej podstronie, gdzie ten zabieg występuje."],
          ["Czy salon masażu potrzebuje innej strony niż day spa?", "Jeśli to osobna firma — tak, bo klienci szukają technik i masażystów, a nie pakietów i strefy wellness. Jeśli masaż jest jedną z usług spa, dostaje własną sekcję na stronie spa."],
          ["Ile trwa stworzenie strony dla spa?", "Prosta strona zwykle kilka tygodni, zależnie od tego, jak szybko gotowe są menu, zdjęcia i teksty. Strony z voucherami, kilkoma językami albo integracją hotelową trwają dłużej; termin ustalamy razem z wyceną."],
          ["Czy pracujesz ze spa spoza Warszawy?", "Tak, z całej Polski — od spa w górach po hotele nad morzem. Rozmowy prowadzimy online, uwagi zbieram bezpośrednio w projekcie, a zdjęcia i cennik wystarczy przesłać mailem lub komunikatorem."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową dla spa: co mi wysłać"),
        p(
          "Wyślij nazwę spa i link do obecnej strony lub Instagrama, menu zabiegów z czasem i cenami, listę pakietów, informację, jak dziś sprzedajesz vouchery i z jakiego systemu rezerwacji korzystasz, oraz w jakich językach mówią Twoi goście. Kilka zdjęć wnętrz pomoże mi zaplanować projekt. Odpowiem propozycją listy podstron i stałą ceną. Skorzystaj z ",
          link("formularza powyżej", "#quote"),
          " albo napisz na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
