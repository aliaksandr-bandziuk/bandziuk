// Landing page fixture: Strona internetowa dla kawiarni (PL), group
// «cafe-website». New page. Market version for Polish kawiarnie, not a
// translation of cafe-website.en. In PL this is a development page that
// includes design (there is no PL design page).
// Semantic core: no measured PL volumes (ref/food-venues.md: «strona kawiarni»
// 0; brief: «strona dla kawiarni» under 10) → written for the market. Target
// phrases: «strona internetowa dla kawiarni» (H1, intro, H2, cost H2, FAQ),
// «strona www kawiarni» (metaTitle), «strona kawiarni» (several H2), «menu
// kawiarni», «zamówienia online w kawiarni», «kawiarnia specialty», «strona
// wizytówka» (H2).
// Intent: ref/intent-check-food-developer.md — «strona dla kawiarni» vs
// «strona internetowa dla restauracji» 0 of 10 shared URLs → own page,
// /pl/strona-dla-restauracji linked once. SERP «strona dla kawiarni»: pl.wix.com,
// agencies, Pinterest, nowymarketing → kreator czy strona na zamówienie H2.
// Polish angles: menu tekstem z rozmiarami i mlekiem roślinnym, godziny i
// wyjątki (Wigilia, Wszystkich Świętych, majówka), dojazd i udogodnienia,
// «Zamów i odbierz» z BLIK / Przelewy24 obok Pyszne.pl, Glovo, Wolt, Uber Eats,
// sklep z kawą ziarnistą (paczkomat, faktura dla biur), warsztaty i wynajem,
// Instagram / karta z pieczątkami / newsletter z RODO, strona wizytówka vs
// pełna strona, Wix / WebWave / kreator AI vs na zamówienie, AI-readable, cena.
// NOT on this page: pozycjonowanie, wizytówka Google jako praca SEO, frazy
// «kawiarnia w pobliżu» (/pl/pozycjonowanie-strony-kawiarni — sibling, linked
// once; /pl/oferty/pozycjonowanie-lokalne); lokale z rezerwacją stolików
// (/pl/strona-dla-restauracji, linked once). Design topics of the EN design page
// (kadrowanie, sezonowe motywy, siatka menu) are not repeated here.
// Portfolio: Landi Room (płatność online), przechowalnia opon (jedna strona
// edytowana przez właściciela), Felgilab (cennik), warsztat (SEO lokalne,
// Mapy), firma remontowo-inwestycyjna (projekt premium). Restaurants under NDA
// mentioned once, positively.
// Prices: /pl/cennik (3000–6000 zł, od 8500 zł), projekt w cenie. Faktura
// without VAT wording (owner is VAT-exempt).
import { p, h2, li, link, k } from "./pt";

export const cafeWebsitePl = {
  lang: "pl",
  group: "cafe-website",
  slug: "strona-internetowa-dla-kawiarni",
  title: "Strona internetowa dla kawiarni",
  heading: "Strona internetowa dla kawiarni",
  excerpt:
    "Tworzę strony internetowe dla kawiarni: menu zapisane tekstem z rozmiarami i mlekiem roślinnym, aktualne godziny otwarcia i dni świąteczne, dojazd, zamówienia z odbiorem osobistym obok Pyszne.pl, Glovo i Wolt, sklep z kawą ziarnistą, vouchery i zapisy na warsztaty.",
  seo: {
    metaTitle: "Strona www kawiarni z menu i zamówieniami | Bandziuk",
    metaDescription:
      "Strona internetowa dla kawiarni: menu tekstem, godziny i dojazd, zamówienia z odbiorem i BLIK, sklep z kawą, warsztaty i wynajem. Projekt w cenie, od 3000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt + wykonanie, jedna cena", "Od 3000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Otwarte dziś do 19:00", "Menu i ceny", "Zamów i odbierz", "Jak dojechać"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona internetowa dla kawiarni z menu, godzinami i dojazdem, projekt w cenie", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Strona kawiarni z zamówieniami z odbiorem i płatnościami, sklepem z kawą, warsztatami i formularzem wynajmu, projekt w cenie", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co dostajecie ze stroną internetową dla kawiarni",
      items: [
        { _key: k("o"), iconName: "file-text", title: "Menu kawiarni zapisane tekstem", text: "Rozmiary, mleko roślinne i ceny, zmieniane z telefonu" },
        { _key: k("o"), iconName: "map-pin", title: "Godziny, święta i dojazd", text: "„Otwarte teraz”, trasa, parking i wejście" },
        { _key: k("o"), iconName: "phone", title: "Zamów i odbierz", text: "Własne zamówienia obok Pyszne.pl, Glovo i Wolt" },
        { _key: k("o"), iconName: "layers", title: "Kawa ziarnista i vouchery", text: "Mały sklep z wysyłką albo odbiorem w lokalu" },
        { _key: k("o"), iconName: "message-circle", title: "Warsztaty i imprezy zamknięte", text: "Zapisy z limitem miejsc, formularz wynajmu" },
        { _key: k("o"), iconName: "sparkles", title: "Fakty, które cytuje ChatGPT", text: "Menu, godziny, Wi-Fi i miejsca do pracy tekstem" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona kawiarni", value: "3000–6000 zł", note: "projekt w cenie" },
        { _key: k("r"), label: "Zamówienia, sklep z kawą, warsztaty, wynajem", value: "od 8500 zł", note: "projekt w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: strony internetowe, które zbudowałem",
      subtitle:
        "Te strony robią to, czego potrzebuje kawiarnia: przyjmują płatności online, pokazują ceny, prowadzą klientów z Map Google i dają się edytować właścicielowi. Warszawski salon Landi Room sprzedaje kurs online przez Stripe Checkout — tak samo działa płatność za zamówienie z odbiorem albo voucher. Warszawska przechowalnia opon ma jednostronicową stronę, której teksty właściciel zmienia sam: dobry wzór dla małej kawiarni. Warszawski Felgilab, pracownia renowacji felg, ma przebudowaną stronę na WordPressie, na której każda usługa ma swoją cenę. Dla warsztatu samochodowego z Warszawy prowadzę SEO lokalne, wizytówkę w Mapach Google i podstrony usług. Warszawska firma remontowo-inwestycyjna ma projekt premium, w którym klimat budują duże zdjęcia wnętrz — jak w kawiarni. Robiłem też strony dla restauracji, których właściciele prosili, żeby nie pokazywać ich publicznie.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "e-commerce-landing-page-with-secured-video-access",
        "tyre-storage-landing-page-with-editable-seo",
        "felgilab-wordpress-rebuild",
        "auto-repair-seo-and-ux-boost",
        "renovation-and-investment-website-with-premium-design",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej dla kawiarni",
      subtitle: "Następnego dnia roboczego dostajecie propozycję podstron, krótki opis tego, jak zadziałają zamówienia, oraz stałą cenę.",
      contextLabel: "Nazwa kawiarni, Instagram lub obecna strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Co macie teraz?", options: ["Instagram i wizytówkę Google", "Stronę z kreatora (Wix, WebWave)", "Starą stronę na WordPressie", "Otwieramy drugi lokal"] },
        { _key: k("z"), question: "Co strona ma robić najpierw?", options: ["Pokazywać menu i godziny", "Przyjmować zamówienia z odbiorem", "Sprzedawać kawę i vouchery", "Zapełniać warsztaty i wynajem"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Strona internetowa dla kawiarni to usługa, w której sam projektuję i wykonuję stronę Waszego lokalu: menu, godziny, dojazd, zamówienia z odbiorem, sklep z kawą i zapisy na wydarzenia. Rozmawiacie z jedną osobą, a stałą cenę znacie przed startem. Gość kawiarni nie czyta strony długo — sprawdza kilka faktów na telefonie, często w drodze, i albo przychodzi do Was, albo wybiera lokal obok."),

        h2("Strona internetowa dla kawiarni: co gość sprawdza, zanim przyjdzie"),
        p("Pytania są prawie zawsze te same: czy macie mleko owsiane, czy jest otwarte, czy można usiąść z laptopem, gdzie zaparkować. Instagram i wizytówka Google odpowiadają na część z nich, ale fakty giną tam pod nowymi postami i zdjęciami gości. Na stronie kawiarni odpowiedzi są w jednym miejscu, na pierwszym ekranie albo jedno dotknięcie dalej:"),
        li("co serwujecie — „Kawa specialty, śniadania do 13:00, ciasta z własnej pracowni”"),
        li("czy jest otwarte teraz i do której"),
        li("menu z cenami"),
        li("adres z przyciskiem trasy, a jeśli przyjmujecie zamówienia — przycisk „Zamów i odbierz”"),
        p("Strona jest też jedynym kanałem, który naprawdę należy do kawiarni. Zasięgi i zasady Instagrama zmienia ktoś inny, a domena i menu zostają tam, gdzie je postawicie."),

        h2("Menu kawiarni na stronie: tekst zamiast zdjęcia tablicy i PDF-a"),
        p("W wielu kawiarniach menu w sieci to zdjęcie kredowej tablicy zza lady albo PDF sprzed dwóch podwyżek. Karta kawiarni ma jednak układ, którego zdjęcie nie odda: ten sam napój w dwóch rozmiarach, wybór mleka — owsiane, sojowe, bez laktozy — dodatkowe espresso, syropy. Na stronie zapisuję ją jako dane:"),
        li("grupy w kolejności, w jakiej zamawiają goście: espresso i kawy mleczne, przelewowe, herbaty, napoje na zimno, bez kawy"),
        li("przy każdym napoju rozmiary i cena za rozmiar, a dopłaty za mleko roślinne i syropy jako opcje — nowa cena mleka owsianego to jedna zmiana w panelu"),
        li("ciasta, bajgle i kanapki z oznaczeniem, co pieczecie na miejscu, z opisem wegańskich i bezglutenowych pozycji oraz alergenów"),
        li("linijka „dziś” na kawę dnia z przelewu albo ciasto, które już się skończyło"),
        p("Menu zapisane tekstem da się przeszukać na telefonie, przeczyta je Google i asystent AI, a strona zamówień bierze pozycje i ceny z tej samej listy, więc nigdy się nie rozjeżdżają."),

        h2("Godziny otwarcia kawiarni, dni świąteczne i dojazd na stronie"),
        p("Godziny kawiarni zmieniają się częściej, niż się wydaje: dłużej latem i w ogródku, krócej w Wigilię, inaczej 1 listopada i w majówkę, zamknięte w dniu imprezy zamkniętej. Na stronie godziny stałe i wyjątki to osobne pola, więc gość widzi „Dziś otwarte 9:00–14:00 (godziny świąteczne)”, a nie tygodniową tabelkę, która akurat dziś się nie zgadza. U góry każdej podstrony jest linijka, czy lokal jest teraz otwarty."),
        p("Pod godzinami jest to, co sprawdza się przed wyjściem:"),
        li("adres z przyciskiem trasy, który otwiera Mapy Google albo inną aplikację w telefonie"),
        li("gdzie zaparkować, najbliższy przystanek tramwaju, stojak na rowery i jak trafić do wejścia od podwórza"),
        li("Wi-Fi, gniazdka, czy laptopy są mile widziane w godzinach szczytu, wejście z wózkiem, pies w ogródku"),
        p("Te same godziny zmieniacie w wizytówce Google w tym samym momencie — gość, który widzi dwie różne godziny zamknięcia, nie ufa żadnej."),

        h2("Zamówienia online w kawiarni: odbiór osobisty, Pyszne.pl, Glovo i Wolt"),
        p("Pyszne.pl, Glovo, Wolt i Uber Eats przyprowadzają zamówienia z dostawą od osób, które Was jeszcze nie znają, i od każdego biorą prowizję. Przy odbiorze osobistym gość już zna drogę, więc płacenie platformie za to zamówienie ma mało sensu. Strona kawiarni może przyjmować je sama:"),
        li("gość wybiera napoje z rozmiarem i mlekiem, godzinę odbioru i płaci BLIK-iem, kartą albo przez Przelewy24"),
        li("zamówienie trafia na bar jako powiadomienie na tablecie albo mail — tam, gdzie zespół i tak patrzy"),
        li("każda godzina odbioru ma limit, żeby poranny szczyt nie dostał więcej zamówień, niż zrobi barista"),
        li("gość dostaje SMS albo mail, kiedy kawa czeka na ladzie"),
        p("Dostawa zostaje w aplikacjach, a strona prowadzi do nich wyraźnymi przyciskami. Jeśli Wasz system kasowy ma własne zamówienia online, strona łączy się z nim zamiast trzymać drugie menu. Tak samo sprzedaje się vouchery na prezent: kod przychodzi mailem."),

        h2("Sklep z kawą ziarnistą i subskrypcja na stronie kawiarni specialty"),
        p("Kawiarnia, która sama pali kawę albo sprzedaje ziarno z polskich palarni, potrzebuje na stronie małego sklepu:"),
        li("karta każdej kawy: kraj, obróbka, stopień palenia, nuty smakowe i data palenia"),
        li("opakowania 250 g i 1 kg, mielenie pod metodę parzenia, wysyłka do paczkomatu albo kurierem i odbiór w kawiarni"),
        li("subskrypcja co dwa albo cztery tygodnie, z pauzą w koncie klienta"),
        li("formularz dla biur i restauracji: ile kawy tygodniowo, jaki ekspres, adres dostawy i dane do faktury"),
        p("Poradniki parzenia — drip, aeropress, kawiarka — dobrze pasują do takiej strony i odpowiadają na pytania, które goście zadają przy barze. Sklep działa na WooCommerce i wygląda jak reszta strony."),

        h2("Warsztaty, wydarzenia i wynajem kawiarni na imprezy zamknięte"),
        p("Cupping, warsztaty latte art, wieczory z planszówkami, koncerty i klub książki zapełniają spokojne popołudnia. Każde wydarzenie dostaje na stronie własny adres z datą, ceną i liczbą miejsc — ten link wrzucacie na Instagram i Facebooka. Bilet opłaca się online albo rezerwuje krótkim formularzem, a gdy miejsca się skończą, zapisy zamykają się same. Wynajem lokalu — baby shower, roczek, śniadanie firmowe, sesja zdjęciowa — ma formularz zapytania: data, godziny, liczba gości, co podać i widełki budżetu. Odpowiadacie od razu wyceną, a nie listą pytań."),

        h2("Instagram, karta lojalnościowa i newsletter na stronie kawiarni"),
        p("Instagram zostaje miejscem na codzienne zdjęcia i strona nie musi go powtarzać. Wbudowany feed wygląda żywo, ale spowalnia stronę i pokazuje ostatni post, nawet jeśli to ogłoszenie sprzed miesięcy; wystarczy wyraźny link do profilu. Z kartą lojalnościową podobnie: papierowa karta z pieczątkami albo program w systemie kasowym zostaje, a strona opisuje go w dwóch zdaniach. Strona może za to zbierać adresy do newslettera o nowych napojach, warsztatach i godzinach świątecznych — z jasną zgodą i klauzulą RODO przy formularzu. Do tych osób docieracie bez płacenia za promowanie posta."),

        h2("Strona wizytówka czy pełna strona internetowa dla kawiarni"),
        p(
          "Mała kawiarnia z krótką kartą często nie potrzebuje wielu podstron. Jedna strona z menu, godzinami, dojazdem, kilkoma zdjęciami lokalu i linkami do aplikacji dostaw wystarczy, jeśli wszystko na niej jest aktualne i zapisane tekstem. Osobne podstrony zaczynają się opłacać, gdy dochodzą zamówienia z odbiorem, sklep z kawą, warsztaty z zapisami, drugi lokal albo menu śniadaniowe, którego ludzie szukają osobno. Zaczynając od jednej strony, dokładacie podstrony później bez przebudowy. Prostszy wariant opisuję na stronie ",
          link("strona wizytówka", "/pl/oferty/strona-wizytowka"),
          ".",
        ),

        h2("Kreator Wix czy strona kawiarni na zamówienie"),
        p("Wix, WebWave i kreatory z AI obiecują stronę kawiarni w kilka minut i pierwszy szkic często wygląda dobrze. Praca zaczyna się później: wpisać prawdziwe menu z rozmiarami i dopłatami, ustawić godziny świąteczne, podłączyć zamówienia i płatności, pilnować aktualności. Dla nowej kawiarni z jednym lokalem i krótką kartą kreator to rozsądny start. Ograniczenia wychodzą przy zamówieniach na konkretną godzinę, sklepie z subskrypcją, wydarzeniach z limitem miejsc i kontroli nad adresami podstron, a abonament rośnie z każdą funkcją. Tekst wygenerowany przez AI opisuje kawiarnię w ogóle, nie Waszą."),
        p("Strona na zamówienie powstaje na WordPressie albo Next.js wokół Waszego menu i zamówień, a domena, kod i lista mailowa należą do kawiarni. Przy przenosinach z kreatora każdy stary adres dostaje przekierowanie 301. Projekt graficzny — kolory z kubka i szyldu, zdjęcia kawy i wnętrza — robię razem ze stroną, w tej samej cenie."),

        h2("Strona kawiarni, którą ChatGPT i Google AI Overviews potrafią przeczytać"),
        p("Goście pytają ChatGPT i podsumowania AI w Google: „kawiarnia na Mokotowie, gdzie można popracować z laptopem”, „kawa specialty w Krakowie otwarta przed 7”, „wegańskie śniadanie we Wrzeszczu”. Asystent odpowiada na podstawie tego, co przeczyta na stronie i w wizytówce. Dlatego godziny i wyjątki, menu z cenami, rodzaje mleka, opcje wegańskie, Wi-Fi i miejsca do pracy zapisuję w HTML zwykłym tekstem, a lokal opisuję znacznikami schema CafeOrCoffeeShop. Tak zbudowałem stronę psychoterapeuty z Mediolanu — jej nowe podstrony pojawiają się już w odpowiedziach ChatGPT."),
        p(
          "Stałą pracę nad obecnością w odpowiedziach AI opisuję na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ", widoczność w Google na frazy typu „kawiarnia w pobliżu” — na stronie ",
          link("pozycjonowanie strony kawiarni", "/pl/pozycjonowanie-strony-kawiarni"),
          ", a pracę nad Mapami Google — na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ". Lokale z obsługą przy stolikach i rezerwacjami znajdą więcej na stronie ",
          link("strona dla restauracji", "/pl/strona-dla-restauracji"),
          ".",
        ),

        h2("Ile kosztuje strona internetowa dla kawiarni"),
        li("Prosta strona kawiarni — menu tekstem, godziny i wyjątki, dojazd, zdjęcia lokalu, linki do Pyszne.pl, Glovo i Wolt: od 3000 do 6000 zł."),
        li("Strona z zamówieniami z odbiorem i płatnościami, sklepem z kawą lub subskrypcją, warsztatami z zapisami i formularzem wynajmu: od 8500 zł."),
        p(
          "Projekt graficzny jest w cenie w obu wariantach, a po uruchomieniu nie płacicie mi abonamentu — tylko hosting i domenę u dostawcy. Etapy pracy nad stroną znajdziecie w opisie usługi ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ", a pozostałe ceny — w ",
          link("cenniku", "/pl/cennik"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strona internetowa dla kawiarni: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona internetowa dla kawiarni?", "Od 3000 do 6000 zł za prostą stronę z menu, godzinami i dojazdem, od 8500 zł za stronę z zamówieniami z odbiorem, płatnościami, sklepem z kawą i warsztatami. Projekt graficzny jest w cenie. Stałą cenę podaję po obejrzeniu menu i tego, co chcecie sprzedawać online."],
          ["Czy goście mogą zamawiać kawę z odbiorem osobistym przez naszą stronę?", "Tak. Wybierają napoje z rozmiarem i mlekiem, godzinę odbioru i płacą BLIK-iem albo kartą, a zamówienie trafia na bar. Jeśli Wasz system kasowy ma własne zamówienia online, podłączam stronę do niego."],
          ["Czy po uruchomieniu własnych zamówień rezygnować z Pyszne.pl, Glovo i Wolt?", "Zwykle nie. Aplikacje przyprowadzają zamówienia z dostawą od nowych klientów, a strona przejmuje odbiór osobisty i stałych gości, przy których prowizja nie ma sensu. Jedno i drugie działa równolegle."],
          ["Czy sami zmienimy menu, ceny i godziny świąteczne?", "Tak. Napoje, rozmiary, dopłaty, ceny, kawę dnia, godziny stałe i wyjątki zmieniacie w prostym panelu, także z telefonu, a układ strony się nie psuje."],
          ["Czy mała kawiarnia potrzebuje strony, skoro ma Instagram i wizytówkę Google?", "Często wystarczy strona wizytówka: menu tekstem, godziny, dojazd i linki do zamówień. Trzyma fakty, które na Instagramie giną pod nowymi postami, i jako jedyna należy do Was."],
          ["Ile trwa zrobienie strony dla kawiarni?", "Na prostą stronę kawiarni trzeba zwykle dwóch–czterech tygodni, na stronę ze sklepem i zamówieniami pięciu–siedmiu. Najwięcej czasu zajmuje spisanie menu i przygotowanie zdjęć."],
          ["Czy pracujesz z kawiarniami spoza Warszawy?", "Tak, z całej Polski. Rozmawiamy przez wideo i maile, kolejne etapy akceptujecie online, a zdjęcia robi Wasz fotograf albo ktoś z zespołu według mojej listy kadrów. Po zakończeniu prac wystawiam fakturę."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową dla kawiarni: co mi wysłać"),
        p(
          "Wyślijcie link do Instagrama, wizytówki Google albo obecnej strony, menu z cenami i dopłatami, godziny stałe i świąteczne, aplikacje dostaw i system kasowy, z których korzystacie, oraz informację, czy chcecie zamówienia z odbiorem, sklep z kawą albo warsztaty. Odpowiem listą podstron i stałą ceną. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
