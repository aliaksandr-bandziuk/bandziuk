// Landing page fixture: Strona internetowa dla agenta ubezpieczeniowego (PL),
// group «insurance-agency-website-design». New page.
// Market version for Polish agenci ubezpieczeniowi, multiagencje and agenci
// wyłączni, not a translation of insurance-agency-website-design.en.
// Semantic core: ref/real-estate-finance.md — no measured PL phrases for this
// topic. Headings use the brief’s wording: «strona internetowa dla agenta
// ubezpieczeniowego» (H1, H2), «strona dla agenta ubezpieczeniowego»,
// «multiagencja», «agent wyłączny», «rejestr KNF», «OC/AC», «ubezpieczenia
// firmowe», «ile kosztuje strona internetowa dla agenta ubezpieczeniowego».
// Intent: ref/intent-check-real-estate-finance.md — EN «insurance agent seo» vs
// «insurance agency website design» 0 shared URLs → website and pozycjonowanie
// are separate pages in every language.
// Polish context: rejestr pośredników ubezpieczeniowych prowadzony przez KNF,
// information about the intermediary before the contract (stated generally,
// no article numbers), towarzystwa’ brand rules for agenci wyłączni, OC
// renewal reminder, porównywarki OC as the alternative the site is compared
// with, RODO on forms (no PESEL / health data), Ukrainian and English versions
// (health insurance for residence applications — general).
// Prices: /pl/cennik — prosta strona 3000–6000 zł, pełna strona od 8500 zł,
// projekt graficzny w cenie.
// NOT on this page: pozycjonowanie, wizytówka Google, frazy lokalne, opinie
// (/pl/pozycjonowanie-strony-agenta-ubezpieczeniowego, linked once); kampanie
// reklamowe; kupowanie leadów.
// Owner’s rules: every page covers AI search; never say there are no clients
// from the visitor’s segment; Cyprus VIP Estates on every page of the batch.
import { p, h2, li, ol, link, k } from "./pt";

export const insuranceAgencyWebsiteDesignPl = {
  lang: "pl",
  group: "insurance-agency-website-design",
  slug: "strona-internetowa-dla-agenta-ubezpieczeniowego",
  title: "Strona internetowa dla agenta ubezpieczeniowego",
  heading: "Strona internetowa dla agenta ubezpieczeniowego",
  excerpt:
    "Tworzę strony internetowe dla agentów ubezpieczeniowych i multiagencji: podstrona dla każdego ubezpieczenia, formularz wyceny bez zbędnych danych, przypomnienie o końcu polisy OC, zakładka „zgłoś szkodę”, informacje o pośredniku i wersje językowe — projekt w cenie, ceny w cenniku.",
  seo: {
    metaTitle: "Strona dla agencji ubezpieczeniowej od 3000 zł | Bandziuk",
    metaDescription:
      "Strona dla agenta ubezpieczeniowego i multiagencji: podstrony OC/AC i firm, formularz zgodny z RODO, dane z rejestru KNF, projekt w cenie. Od 3000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt + wykonanie, jedna cena", "Od 3000 zł", "Dla agentów i multiagencji"],
  heroPhonePoints: ["Wycena OC/AC", "Zgłoś szkodę", "Zadzwoń · WhatsApp", "PL · UA · EN"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona internetowa dla agenta ubezpieczeniowego, projekt w cenie", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Strona multiagencji z podstronami ubezpieczeń osobowych i firmowych, biurami, formularzami wyceny, zakładką szkód i wersjami językowymi, projekt w cenie", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co dostajecie ze stroną internetową dla agenta ubezpieczeniowego",
      items: [
        { _key: k("o"), iconName: "layers", title: "Podstrona dla każdego ubezpieczenia", text: "OC/AC, mieszkanie, życie, podróż, firma" },
        { _key: k("o"), iconName: "file-text", title: "Formularz wyceny bez zbędnych danych", text: "Zgodny z RODO, bez PESEL-u w e-mailu" },
        { _key: k("o"), iconName: "phone", title: "Zgłoszenie szkody jednym dotknięciem", text: "Infolinie i formularze każdego towarzystwa" },
        { _key: k("o"), iconName: "shield-check", title: "Informacje o pośredniku na stałym miejscu", text: "Rejestr KNF, towarzystwa, dane agencji" },
        { _key: k("o"), iconName: "message-circle", title: "Wersje dla klientów z zagranicy", text: "Ukraińska i angielska, z własnymi adresami" },
        { _key: k("o"), iconName: "sparkles", title: "Czytelna dla Google i asystentów AI", text: "Produkty, miasta i języki zapisane tekstem" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona agenta ubezpieczeniowego", value: "3000–6000 zł", note: "projekt w cenie" },
        { _key: k("r"), label: "Multiagencja: produkty, biura, wyceny, szkody, języki", value: "od 8500 zł", note: "projekt w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: strony, które zaprojektowałem i zbudowałem",
      subtitle:
        "Cyprus VIP Estates to platforma nieruchomości, którą zaprojektowałem i zbudowałem od zera: wielojęzyczny serwis z katalogiem, mapą i zapytaniami trafiającymi prosto do CRM firmy — tą samą drogą, którą w agencji powinno iść zapytanie o wycenę polisy. Obok: firma skanowania laserowego 3D i BIM, która po przebudowie strony co tydzień dostaje zapytania, wielojęzyczny serwis agencji edukacyjnej dla dziesięciu krajów, warszawska firma remontowo-inwestycyjna z projektem premium i warsztat samochodowy z poprawionym SEO i UX.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "build-and-optimize-a-multilingual-real-estate-platform",
        "architecture-website-rebuild-and-seo-scan",
        "full-multilingual-website-development-and-seo-for-student-services",
        "renovation-and-investment-website-with-premium-design",
        "auto-repair-seo-and-ux-boost",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej dla agenta ubezpieczeniowego",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: proponuję listę podstron i podaję stałą cenę w widełkach z cennika.",
      contextLabel: "Nazwa agencji lub obecna strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Jak działacie?", options: ["Multiagencja", "Agent wyłączny jednego towarzystwa", "Agencja z kilkoma biurami", "Dopiero zaczynam"] },
        { _key: k("z"), question: "Co sprzedajecie najczęściej?", options: ["OC/AC", "Mieszkanie i dom", "Życie i zdrowie", "Ubezpieczenia firmowe"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Tworzę strony internetowe dla agentów ubezpieczeniowych i multiagencji — strukturę, projekt graficzny, wykonanie, teksty i uruchomienie — więc za całość odpowiada jedna osoba, a cena jest znana z góry. Do agenta trafiają trzy rodzaje ludzi: kierowca, któremu za dwa tygodnie kończy się OC, przedsiębiorca, który potrzebuje polisy do przetargu albo umowy z kontrahentem, i stały klient po szkodzie. Strona ma obsłużyć każdego z nich, zanim ktokolwiek w biurze podniesie słuchawkę."),

        h2("Strona internetowa dla agenta ubezpieczeniowego: co klient sprawdza na pierwszym ekranie"),
        p("Na telefonie klient w kilka sekund chce się dowiedzieć:"),
        li("jakie ubezpieczenia sprzedajecie i gdzie — „OC/AC, mieszkania i firmy — Lublin, Czechów”, a nie „Bezpieczeństwo na lata”"),
        li("czy porównujecie oferty kilku towarzystw, czy działacie dla jednego"),
        li("z kim będzie rozmawiał — zdjęcie agenta lub zespołu z imionami zamiast parasola i uśmiechniętej rodziny ze stocku"),
        li("jak szybko dostać wycenę — przycisk wyceny, telefon z godzinami otwarcia i WhatsApp"),
        p("Adres biura z dojazdem i parkingiem jest na każdej podstronie, bo wielu klientów i tak przychodzi osobiście podpisać polisę albo przynieść dowód rejestracyjny."),

        h2("Strona dla multiagencji i dla agenta wyłącznego: logotypy towarzystw i zasady zakładów"),
        p("Multiagencja sprzedaje wybór: jeden agent, kilka towarzystw i porównanie ofert przy biurku. Strona pokazuje to sekcją z towarzystwami, z którymi współpracujecie, a logotypy umieszcza tak, jak pozwalają umowy agencyjne i wytyczne zakładów — jedne przesyłają gotowe pliki i wzory opisów, inne wolą samą nazwę."),
        p("Agent wyłączny działa w imieniu jednego zakładu i zwykle obowiązują go jego zasady identyfikacji wizualnej. Część towarzystw daje agentom gotowe wizytówki w swoim serwisie i ogranicza, co agent publikuje gdzie indziej: kolory, nazwę zakładu w domenie, opisy produktów. Zanim zamówicie własną stronę, sprawdźcie umowę agencyjną albo zapytajcie opiekuna w towarzystwie. Tam, gdzie własna strona jest dozwolona, na pierwszym planie jesteście Wy — biuro, zespół, okolica — a marka zakładu pojawia się dokładnie tak, jak wymagają jego wytyczne."),

        h2("Informacje o pośredniku na stronie agenta ubezpieczeniowego: rejestr KNF i dane agencji"),
        p("Agenci ubezpieczeniowi są wpisani do rejestru pośredników ubezpieczeniowych prowadzonego przez KNF, a przepisy o dystrybucji ubezpieczeń wymagają, żeby klient przed zawarciem umowy wiedział, z kim rozmawia: z agentem czy z brokerem i w imieniu których zakładów działa pośrednik. Strona daje tym informacjom stałe miejsce:"),
        li("numer wpisu do rejestru i wskazówka, jak go sprawdzić — w stopce i w zakładce o agencji"),
        li("lista zakładów, w imieniu których działacie, z datą aktualizacji"),
        li("dane firmy: nazwa, adres, NIP i forma działalności"),
        li("polityka prywatności i informacja o plikach cookies"),
        p("To ogólny opis, nie porada prawna. Zakres informacji i ich brzmienie sprawdźcie z towarzystwem, z którym współpracujecie, albo z osobą odpowiedzialną za zgodność w Waszej agencji."),

        h2("Podstrony ubezpieczeń na stronie agenta: OC/AC, mieszkanie, życie, podróż i firma"),
        p("Każde ubezpieczenie dostaje własną podstronę zbudowaną z jednego szablonu:"),
        li("nagłówek z nazwą ubezpieczenia i miastem"),
        li("dla kogo jest polisa i co zwykle obejmuje — prostym językiem zamiast języka OWU"),
        li("jakie dokumenty i dane przygotować do wyceny"),
        li("pytania, które klienci zadają przy tym produkcie, z krótkimi odpowiedziami"),
        li("przycisk wyceny z formularzem dopasowanym do produktu"),
        p("Ubezpieczenia firmowe wymagają więcej treści niż osobowe. Właściciel firmy transportowej, budowlanej czy gabinetu chce zobaczyć swoją branżę: OC działalności, OC przewoźnika, flotę, mienie, ubezpieczenia grupowe dla pracowników — i agenta, który wie, jakiej polisy wymaga przetarg. Ubezpieczenie na życie dostaje spokojniejszy układ z mniejszą liczbą przycisków, bo ta decyzja trwa dłużej i często zapada we dwoje."),

        h2("Formularz wyceny ubezpieczenia czy telefon: zapytania zgodne z RODO"),
        p("Część klientów woli zadzwonić, część — wieczorem wypełnić formularz albo napisać na WhatsApp. Każda podstrona produktu daje obie drogi:"),
        li("krótki formularz: rodzaj ubezpieczenia, data końca obecnej polisy, imię i telefon — do wypełnienia w minutę"),
        li("dłuższy formularz dla OC/AC albo mieszkania, jeśli wolicie dostać dane pojazdu czy nieruchomości przed rozmową"),
        li("telefon jednym dotknięciem, WhatsApp i prośba o oddzwonienie poza godzinami pracy biura"),
        p("Formularz nie prosi o PESEL, numer dowodu osobistego ani dane o zdrowiu. Te dane trafiają do kalkulatora albo wniosku w systemie towarzystwa, a nie do zwykłego e-maila ze strony. Przy formularzu jest klauzula informacyjna RODO, a zgłoszenia przychodzą szyfrowanym połączeniem na skrzynkę agencji albo do CRM. Na stronie Cyprus VIP Estates zapytania z formularzy trafiają prosto do CRM firmy — tak samo można poprowadzić zapytania o wycenę polisy."),

        h2("Przypomnienie o końcu polisy OC i obsługa klienta po zakupie ubezpieczenia"),
        p("Umowa OC zwykle przedłuża się automatycznie, więc kierowca, który chce porównać oferty, musi sam pamiętać o terminie. Formularz „przypomnij mi przed końcem polisy” zbiera datę, telefon i zgodę na kontakt — klient, który dziś tylko sprawdza ceny, wraca do Was przed odnowieniem."),
        p("Druga część strony jest dla stałych klientów. Zakładka „Zgłoś szkodę” zbiera infolinie szkodowe i linki do zgłoszeń online każdego towarzystwa oraz mówi, w czym agent pomaga przy likwidacji szkody. Formularze zmiany danych w polisie i prośby o zaświadczenie dla kontrahenta trafiają do właściwej osoby. Zakładka jest w menu na każdej podstronie, więc kierowca po stłuczce znajduje numer w dwóch dotknięciach."),

        h2("Czym strona agenta ubezpieczeniowego różni się od porównywarki OC"),
        p("Porównywarki dają cenę OC w kilka minut i nie ma sensu udawać ich na stronie agenta. Strona pokazuje to, czego kalkulator nie daje: konkretną osobę, która odbiera telefon po szkodzie, pomoc w wyborze zakresu AC i assistance, ubezpieczenia firmowe, których nie da się wycenić w kilka kliknięć, i jedno miejsce dla wszystkich polis rodziny. Jeśli korzystacie z kalkulatora udostępnianego agentom przez dostawcę oprogramowania, można go osadzić na stronie i dopasować wyglądem; jeśli nie, krótki formularz z szybkim oddzwonieniem sprawdza się równie dobrze."),

        h2("Wersje językowe strony agencji ubezpieczeniowej dla cudzoziemców"),
        p(
          "Agenci w wielu miastach obsługują coraz więcej klientów spoza Polski: kierowców z Ukrainy, pracowników z zagranicy, cudzoziemców, którzy potrzebują ubezpieczenia zdrowotnego do wniosku o pobyt albo kupują mieszkanie. Jeśli rozmawiacie z nimi po ukraińsku czy angielsku, strona powinna to powiedzieć w tym języku. Tłumaczone są podstrony, z którymi naprawdę przychodzą — OC, zdrowie, mieszkanie — każda wersja ma własne adresy i oznaczenia hreflang, a formularz i klauzula RODO są w tym samym języku. Więcej na stronie ",
          link("tworzenie stron wielojęzycznych", "/pl/oferty/tworzenie-stron-wielojezycznych"),
          ".",
        ),

        h2("Strona agenta ubezpieczeniowego, którą ChatGPT i Google AI Overviews potrafią przeczytać"),
        p("Klienci pytają ChatGPT, Perplexity albo podsumowania AI w Google: „multiagencja w Gdyni, która ubezpiecza firmy transportowe”, „agent ubezpieczeniowy w Poznaniu mówiący po ukraińsku”. Ubezpieczenia to dla Google tematy YMYL („Your Money or Your Life”), oceniane ostrzej pod kątem wiarygodności, a asystenci AI opierają się na tych samych sygnałach. Dlatego produkty, towarzystwa, miasta, godziny, języki i dane z rejestru są zapisane tekstem, a nie na grafikach, dane strukturalne opisują agencję i biura tak samo jak wizytówka Google, a poradniki mają autora i datę aktualizacji."),
        p(
          "Widoczność w odpowiedziach asystentów to dalsza praca, opisana na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ". Wyniki w Google i w Mapach opisuję na stronie ",
          link("pozycjonowanie strony agenta ubezpieczeniowego", "/pl/pozycjonowanie-strony-agenta-ubezpieczeniowego"),
          ".",
        ),

        h2("Strona od towarzystwa, kreator czy strona na zamówienie dla agenta ubezpieczeniowego"),
        p("Agent ma zwykle trzy drogi. Wizytówka w serwisie towarzystwa jest darmowa i gotowa od razu, ale pokazuje tylko produkty tego zakładu i znika razem z umową agencyjną. Kreator stron daje własną domenę za miesięczny abonament, a teksty o ubezpieczeniach trzeba napisać samemu. Strona na zamówienie opłaca się multiagencji z kilkoma produktami lub biurami, agencji z ubezpieczeniami firmowymi albo klientami z zagranicy i każdemu, kto chce, żeby strona i domena należały do niego. Przeniesienie strony z kreatora to w praktyce budowa od nowa."),

        h2("Jak powstaje strona dla agenta ubezpieczeniowego"),
        ol("Brief. Przesyłacie listę ubezpieczeń, towarzystwa, adresy biur, języki i pytania, które klienci zadają przy pierwszym kontakcie."),
        ol("Lista podstron i stała cena. Jeśli zakres zmieni się później, zmianę wyceniam przed jej wykonaniem."),
        ol("Projekt, najpierw na telefonie. Strona główna, podstrona OC/AC i zakładka szkód są uzgadniane z Wami."),
        ol("Wykonanie i teksty. Piszę je na podstawie briefu, a Wy sprawdzacie zakresy ochrony i zgodność z zasadami towarzystw."),
        ol("Uruchomienie. Formularze przetestowane, analityka po zgodzie i Search Console podłączone; dostajecie krótką instrukcję edycji."),
        p(
          "Podstrony pojawiają się na telefonie w mniej niż 2,5 sekundy, strona działa w WordPressie albo Next.js na hostingu z SSL i kopiami zapasowymi. Domena, kod i treści należą do agencji. Istniejąca strona zachowuje pozycje dzięki przekierowaniom — proces opisuję na stronie ",
          link("przebudowa strony internetowej", "/pl/oferty/przebudowa-strony-internetowej"),
          ", a ogólnie o tym, jak buduję strony, na stronie ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ".",
        ),

        h2("Ile kosztuje strona internetowa dla agenta ubezpieczeniowego"),
        li("Prosta strona agenta — strona główna, podstrony ubezpieczeń, o agencji, zgłoszenie szkody, kontakt i formularz wyceny: od 3000 do 6000 zł."),
        li("Pełna strona multiagencji — ubezpieczenia osobowe i firmowe, biura, formularze wyceny połączone z CRM, przypomnienia o końcu polisy, wersje językowe: od 8500 zł."),
        p(
          "Projekt graficzny jest w cenie w obu przypadkach, a widełki są podane w ",
          link("cenniku", "/pl/cennik"),
          ". Po uruchomieniu nie płacicie mi abonamentu: hosting i domenę opłacacie u dostawcy, a mnie tylko za zmiany, o które poprosicie.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strona internetowa dla agenta ubezpieczeniowego: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona internetowa dla agenta ubezpieczeniowego?", "Od 3000 do 6000 zł za prostą stronę i od 8500 zł za pełną stronę multiagencji z ubezpieczeniami osobowymi i firmowymi, biurami, formularzami wyceny i wersjami językowymi. Projekt graficzny jest w cenie. Po krótkim opisie agencji podaję stałą cenę."],
          ["Czy agent wyłączny może mieć własną stronę?", "Często tak, ale w granicach zasad towarzystwa. Część zakładów daje agentom wizytówki w swoim serwisie i ogranicza użycie marki, domeny i opisów produktów na innych stronach. Sprawdźcie umowę agencyjną albo zapytajcie opiekuna, zanim zamówicie stronę."],
          ["Czy na stronie trzeba podać numer z rejestru KNF?", "Klient powinien wiedzieć, że rozmawia z agentem i w imieniu których zakładów działacie, a numer wpisu do rejestru pośredników pozwala mu to sprawdzić. Strona ma na te dane stałe miejsce w stopce i w zakładce o agencji. Dokładny zakres informacji potwierdźcie z towarzystwem — to nie jest porada prawna."],
          ["Czy strona może liczyć składkę OC online?", "Jeśli macie dostęp do kalkulatora udostępnianego agentom przez dostawcę oprogramowania, można go osadzić na stronie. Bez niego dobrze działa krótki formularz z datą końca polisy i szybkim oddzwonieniem — wielu klientów i tak chce porozmawiać przed zakupem."],
          ["Czy formularz wyceny jest zgodny z RODO?", "Tak. Pyta tylko o dane potrzebne do kontaktu i wyceny, nie zbiera PESEL-u ani danych o zdrowiu, ma klauzulę informacyjną, a zgłoszenia trafiają szyfrowanym połączeniem na skrzynkę agencji albo do CRM."],
          ["Kto pisze teksty o ubezpieczeniach na stronę?", "Piszę je na podstawie briefu i pytań Waszych klientów, prostym językiem. Wy sprawdzacie zakresy ochrony i zgodność z zasadami towarzystw. Teksty powstają dla Waszej agencji, a nie są kopiowane z bazy używanej przez innych agentów."],
          ["Czy robisz strony dla agentów spoza Warszawy?", "Tak, dla agencji z całej Polski. Projekt i wykonanie prowadzę zdalnie, po polsku, angielsku albo rosyjsku. W Warszawie mogę przyjechać na spotkanie."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę dla agenta ubezpieczeniowego: co mi wysłać"),
        p(
          "Wyślijcie nazwę agencji, link do obecnej strony albo wizytówki Google, informację, czy działacie jako multiagencja czy agent wyłączny, listę towarzystw i ubezpieczeń, które chcecie sprzedawać częściej, adresy biur i języki, w których obsługujecie klientów. Zdjęcia zespołu i biura pomogą mi pokazać stronę główną, która wygląda jak Wasza agencja. Odpowiem listą podstron i stałą ceną. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
