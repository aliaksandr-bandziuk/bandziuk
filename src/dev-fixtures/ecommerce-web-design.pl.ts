// Fixture strony: tworzenie sklepu internetowego (PL), grupa
// «ecommerce-web-design». NOWA strona — tworzona przez create-landing.cjs pod
// /pl/oferty/tworzenie-sklepu-internetowego, rodzic /pl/oferty.
//
// Skąd się wzięła (02.11.2026). W słowniku pseo-vocab.cjs była tylko goła
// fraza «sklep internetowy» i «pozycjonowanie sklepu internetowego», więc
// forma, którą wpisuje właściciel zamawiający sklep, nigdy nie została
// zmierzona. Po dodaniu fraz do SERVICE_ONLY i przeliczeniu siatki:
// «tworzenie sklepu internetowego» 720, «ile kosztuje sklep internetowy» 320,
// «projektowanie sklepu internetowego» 210, «sklep na shopify» 210, «sklep na
// prestashop» 210, «sklep internetowy woocommerce» 170, «migracja sklepu
// internetowego» 140. Razem około 1630 zapytań miesięcznie bez żadnej strony.
//
// Strona pozycjonowania sklepów (/pl/oferty/pozycjonowanie-sklepow-internetowych)
// zostaje osobno: sprawdzenie wyników wyszukiwania pokazało, że «ecommerce
// seo» i «ecommerce website development» nie dzielą ani jednej domeny w
// pierwszej dziesiątce.
//
// Ceny: sklep od 8500 zł i strona jednego produktu od 3000 zł — z cennika.
// Ceny przebudowy w złotych nigdzie na stronie nie ma, więc nie pojawia się
// tu jako liczba; prowadzi do niej link do strony przebudowy.
import { p, h2, h3, li, link, k } from "./pt";

export const ecommerceWebDesignPl = {
  lang: "pl",
  group: "ecommerce-web-design",
  parentPath: ["oferty"],
  slug: "tworzenie-sklepu-internetowego",
  title: "Tworzenie sklepu internetowego",
  heading: "Tworzenie sklepu internetowego: katalog, koszyk, płatności i dostawa, które naprawdę sprzedają",
  excerpt:
    "Projektuję i buduję sklepy internetowe: katalog, koszyk, płatności, dostawa i zwroty. Projekt decyduje o tym, czy odwiedzający dojdzie do kasy, a wdrożenie o tym, czy katalog da się w ogóle znaleźć. Na tej stronie piszę, co wchodzi w jedno i drugie, ile to kosztuje i ile trwa.",
  seo: {
    metaTitle: "Sklep internetowy od 8500 zł — projekt i wdrożenie",
    metaDescription:
      "Tworzenie sklepu internetowego: katalog, koszyk, BLIK i Przelewy24, Paczkomaty, zwroty. Shopify, WooCommerce, PrestaShop lub własny sklep. Od 8500 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Katalog, koszyk, płatności, dostawa", "Sklepy od 8500 zł", "Odpowiadam w 1 dzień roboczy"],
  heroPhonePoints: ["Dodaj do koszyka", "Tabela rozmiarów", "Dostawa i zwroty", "Zapłać BLIKiem"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Sklep internetowy: katalog, koszyk, płatności i dostawa", price: 8500, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Strona jednego produktu z płatnością", price: 3000, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co buduję",
      title: "Co buduję dla sklepów internetowych",
      items: [
        { _key: k("o"), iconName: "shopping-cart", title: "Sklep od zera", text: "Katalog, koszyk, płatności, dostawa, zwroty" },
        { _key: k("o"), iconName: "globe", title: "Sklep w kilku językach", text: "Języki, waluty, dostawa według kraju" },
        { _key: k("o"), iconName: "refresh-cw", title: "Przebudowa sklepu, który już sprzedaje", text: "Nowy wygląd bez utraty pozycji" },
        { _key: k("o"), iconName: "move", title: "Migracja sklepu internetowego", text: "Katalog, adresy i przekierowania zachowane" },
        { _key: k("o"), iconName: "credit-card", title: "Jeden produkt, jedna strona", text: "Strona z płatnością, bez katalogu" },
        { _key: k("o"), iconName: "plug", title: "Integracje istniejącego sklepu", text: "Magazyn, księgowość, kurierzy, CRM" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Co rozstrzyga projektowanie sklepu internetowego, czego nie da szablon"),
        p("Szablon daje siatkę produktów i kasę. Czego nie daje — decyzji, od których zależy, czy ktoś kupi: jak pokazać produkt w czterech wariantach, co się dzieje, gdy jednego rozmiaru nie ma na stanie, w którym miejscu pojawia się koszt dostawy i ile kroków stoi między koszykiem a płatnością. To jest właśnie praca projektowa i podejmuje się ją osobno dla każdego sklepu, bo zależy od tego, co sprzedajesz."),
        p("Dwa przykłady, co to znaczy w praktyce. Sklep z odzieżą, który chowa tabelę rozmiarów w zakładce, traci niepewnego kupującego — ten woli zamknąć stronę niż zgadywać; ten sam sklep z tabelą rozmiarów obok wyboru rozmiaru sprzedaje temu samemu odwiedzającemu. Sklep z darmową dostawą od pewnej kwoty, który wspomina o niej dopiero w ostatnim kroku, zbiera porzucone koszyki, bo kupujący na początku policzył zamówienie inaczej."),

        h2("Tworzenie sklepu internetowego: katalog, koszyk, płatności, dostawa, zwroty"),
        p("Wdrożenie to pięć zadań i sklep uruchomiony bez któregokolwiek z nich wraca później jako rachunek."),
        li("katalog: kategorie, filtry, warianty produktu i jeden adres na produkt, a nie trzy;"),
        li("koszyk i kasa: tyle kroków, ile naprawdę wymaga operator płatności, zakupy bez rejestracji zachowane, koszt dostawy widoczny przed ostatnim krokiem;"),
        li("płatności: BLIK, Przelewy24 albo PayU, karty, Apple Pay i Google Pay — wybrane pod twoich kupujących, a nie pod demo;"),
        li("dostawa: Paczkomaty InPost, kurier, odbiór osobisty, strefy i progi, numer przesyłki docierający do kupującego bez twojego udziału;"),
        li("zwroty i strony wymagane prawem: regulamin, polityka prywatności, prawo odstąpienia w ciągu czternastu dni i RODO — jako strony, a nie jako PDF do pobrania."),
        p("Magazyn i księgowość to szóste zadanie, jeśli już je gdzieś prowadzisz. Sklep z własnym, osobnym stanem magazynowym to sklep, który sprzedaje towar, którego nie ma, a jeden taki weekend kosztuje więcej niż integracja."),

        h2("Wybór platformy: Shopify, WooCommerce, PrestaShop czy własny sklep"),
        h3("Sklep na Shopify"),
        p("Hostowany, szybki w uruchomieniu, sam ogarnia płatności i podatki. W zamian: opłata miesięczna, opłaty za aplikacje i granica, za którą logiki katalogu nie da się już wygiąć. Przy prostym katalogu sprzedawanym w jednym czy dwóch krajach ta wymiana zwykle się opłaca."),
        h3("Sklep internetowy na WooCommerce"),
        p("Tańszy w posiadaniu i można w nim zmienić wszystko, bo kod jest twój. W zamian trzeba go utrzymywać: aktualizacje, kopie zapasowe i praca nad szybkością szablonów listingu, bo właśnie tam sklepy na WooCommerce zwalniają. Właściwy wybór, gdy już masz WordPressa albo potrzebujesz nietypowych reguł w katalogu."),
        h3("Sklep na PrestaShop"),
        p("Ma sens przede wszystkim wtedy, gdy już na nim jesteś: to dojrzały silnik z mocnym katalogiem i wielojęzycznością w standardzie. Nowego sklepu zwykle na nim nie zakładam — utrzymanie i dobór modułów kosztują więcej uwagi niż w dwóch poprzednich wariantach."),
        h3("Własny sklep w Next.js z headless CMS"),
        p("Właściwy, gdy sklep jest częścią czegoś większego: konta użytkowników, kilka języków i walut, konfigurator albo dane spływające z systemu, który już prowadzisz. Najszybszy na stronach, które sprzedają, i najdroższy na start. Niewłaściwy dla pierwszego sklepu z trzydziestoma produktami."),
        p(
          "Pracuję na wszystkich tych platformach i mówię, która pasuje, przed wyceną — bo platforma rusza cenę mocniej niż projekt. Jeśli sklep jest częścią większej strony, to jest ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ", a techniczna strona własnego wdrożenia to ",
          link("strony w Next.js", "/pl/oferty/strony-w-nextjs"),
          ".",
        ),

        h2("Ile kosztuje sklep internetowy i co podnosi cenę"),
        p(
          "Sklep internetowy z katalogiem, koszykiem, płatnościami i dostawą — od 8500 zł. Strona jednego produktu z płatnością — od 3000 zł. Co rusza cenę: liczba produktów i wariantów, czy trzeba podłączyć magazyn i księgowość, ilu operatorów płatności i kurierów, ile języków i walut, oraz czy katalog przychodzi jako porządny plik, czy jako arkusz, którego nikt nie ruszał od dwóch lat. Projekt jest w cenie, nigdy jako osobna pozycja. Pełna lista jest w ",
          link("cenniku", "/pl/cennik"),
          ", a cena przebudowy istniejącego sklepu — na stronie ",
          link("przebudowy strony", "/pl/oferty/przebudowa-strony-internetowej"),
          ".",
        ),

        h2("Ile trwa zrobienie sklepu internetowego"),
        p("Sklep z katalogiem — od czterech do ośmiu tygodni, strona jednego produktu — dwa do trzech. Wydłuża to prawie nigdy nie kod, a dane produktowe: zdjęcia, opisy, warianty, wagi do wyliczenia dostawy i decyzje o tym, co się dzieje z towarem, którego już nie sprowadzasz. Na czas startują te sklepy, w których ktoś po twojej stronie od pierwszego dnia odpowiada za plik z katalogiem."),

        h2("Migracja sklepu internetowego na inną platformę bez utraty pozycji"),
        p("To część, którą migracje psują najczęściej. Katalog zachowuje adresy tam, gdzie to możliwe, każdy zmieniony adres dostaje przekierowanie 301, dane produktowe przenoszą się jako dane, a nie przepisywane ręcznie, i razem z nimi przenosi się to, czego nie widać: znaczniki produktu i oferty, mapa witryny, wersje językowe. Bez tego sklep traci pozycje na wiele miesięcy, a odbudowa kosztuje więcej niż sama migracja."),
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: katalogi, płatności i wdrożenia wielojęzyczne",
      subtitle:
        "Co te projekty mają wspólnego ze sklepem: duży katalog, który musi pozostać znajdowalny, płatności i dostęp po opłaceniu, konta użytkowników i kilka języków naraz. Strona sprzedażowa z płatnością i zabezpieczonym kursem wideo, wielojęzyczna platforma nieruchomości, przebudowa na WordPressie, wielojęzyczna strona usług studenckich i platforma inwestycyjna z dostępem płatnym.",
      picks: [
        "e-commerce-landing-page-with-secured-video-access",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "felgilab-wordpress-rebuild",
        "full-multilingual-website-development-and-seo-for-student-services",
        "investment-platform-with-ai-guided-learning",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena twojego sklepu internetowego",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: która platforma pasuje, co bym zbudował i za ile.",
      contextLabel: "Nazwa sklepu lub firmy",
      contextPlaceholder: "Link albo nazwa",
      buttonText: "Wyślij i odbierz wycenę",
      note: "Albo napisz na WhatsAppie — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Co sprzedajesz?", options: ["Produkty fizyczne", "Produkty cyfrowe", "Usługi albo rezerwacje", "Po trochu wszystkiego"] },
        { _key: k("z"), question: "Ile produktów?", options: ["Do 30", "Od 30 do 300", "Więcej niż 300", "Jeden produkt"] },
        { _key: k("z"), question: "Co jest teraz?", options: ["Nie ma sklepu", "Sklep, który słabo sprzedaje", "Tylko Allegro", "Tylko social media"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Sklep internetowy w odpowiedziach AI: produkty polecane przez ChatGPT i Google AI Overviews (GEO, AEO)"),
        p("Kupujący coraz częściej każą porównać ChatGPT, Perplexity albo przeglądom od AI w Google, zanim w ogóle otworzą sklep. Asystent odpowiada z tekstu i danych, które potrafi odczytać, a sklep zbudowany jak galeria zdjęć nie daje mu niczego. Co czyni katalog czytelnym: nazwa, cena, dostępność i warunki dostawy jako tekst, a nie w obrazku; znaczniki produktu i oferty zgodne z tym, co widać na stronie; jeden adres na produkt; oraz ta sama cena i dostępność w sklepie, w ofercie na Allegro i w pliku dla Google Merchant."),
        p(
          "Doprowadzenie do tego stanu sklepu, który już działa, to osobna praca: ",
          link("przygotowanie strony do wyszukiwania w AI", "/pl/oferty/przygotowanie-strony-do-ai"),
          ". A jeśli sklep jest zrobiony dobrze, ale wyszukiwarka nic nie przynosi, to ",
          link("pozycjonowanie sklepów internetowych", "/pl/oferty/pozycjonowanie-sklepow-internetowych"),
          " — praca osobna od wdrożenia, a wyniki wyszukiwania dla jednej i drugiej frazy prawie się nie pokrywają.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Tworzenie sklepu internetowego: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje sklep internetowy?", "Od 8500 zł za sklep z katalogiem, koszykiem, płatnościami i dostawą. Od 3000 zł za stronę jednego produktu z płatnością. Cenę ruszają: liczba produktów i wariantów, integracje z magazynem i księgowością, liczba operatorów płatności i kurierów oraz liczba języków i walut."],
          ["Shopify, WooCommerce, PrestaShop czy własny sklep?", "Shopify przy prostym katalogu w jednym czy dwóch krajach, gdzie opłata miesięczna jest uczciwą ceną za to, że niczego nie utrzymujesz. WooCommerce, gdy już masz WordPressa albo potrzebujesz nietypowych reguł w katalogu. PrestaShop przede wszystkim wtedy, gdy już na nim jesteś. Własny sklep, gdy jest częścią czegoś większego — konta, kilka języków i walut, konfigurator. Mówię, co pasuje, przed wyceną."],
          ["Przeniesiecie mój sklep na inną platformę bez utraty pozycji?", "Tak, i to jest ta część, którą migracje psują najczęściej. Katalog zachowuje adresy tam, gdzie to możliwe, każdy zmieniony adres dostaje przekierowanie 301, a dane produktowe przenoszą się jako dane. Bez tego sklep traci pozycje na wiele miesięcy."],
          ["Czy sklep podłączy się do magazynu, który już prowadzimy?", "Tak i tak powinno być. Sklep z osobnym stanem magazynowym sprzedaje towar, którego nie ma, a jeden taki weekend kosztuje więcej niż integracja."],
          ["Konfigurujecie płatności samodzielnie?", "Robię integrację, a konto u operatora płatności zakładane jest na ciebie, bo jest powiązane z twoją firmą i twoim rachunkiem. Przed startem mówię, który operator pasuje i ile pobiera."],
          ["Ile to trwa?", "Od czterech do ośmiu tygodni przy sklepie z katalogiem, dwa do trzech przy stronie jednego produktu. Wydłużają to dane produktowe, nie kod: zdjęcia, opisy, warianty i wagi do dostawy."],
          ["Czy sklep przychodzi z pozycjonowaniem?", "Przychodzi zbudowany tak, że pozycjonowanie jest możliwe: jeden adres na produkt, czytelne kategorie, znaczniki zgodne ze stroną i szybkość na szablonach, które sprzedają. Bieżące pozycjonowanie to osobna praca i osobna cena, na stronie pozycjonowania sklepów."],
          ["Czy wystawiasz fakturę?", "Tak, prowadzę jednoosobową działalność w Warszawie i wystawiam fakturę za każdą pracę."],
          ["Do kogo należy sklep po uruchomieniu?", "Do ciebie: kod, domena, katalog, dostępy do CMS i do operatorów. Ceny, produkty i teksty zmieniasz sam, bez programisty, bo w sklepie zmieniają się co tydzień."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów sklep internetowy: co mi przysłać"),
        p("Napisz, co sprzedajesz, ile mniej więcej masz produktów i wariantów, do jakich krajów wysyłasz i jakie systemy już prowadzisz do magazynu i księgowości. Jeśli sklep istnieje, wyślij link. Odpowiadam w ciągu jednego dnia roboczego: która platforma pasuje, co bym zbudował i za ile — a jeśli wystarczy strona jednego produktu za dziesiątą część budżetu, powiem to wprost."),
      ],
    },
  ],
};
