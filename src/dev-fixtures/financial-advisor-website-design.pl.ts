// Landing page fixture: Strona internetowa dla doradcy finansowego (PL), group
// «financial-advisor-website-design». New page. Market version for Polish
// doradcy finansowi (multiagencja, sieci pośrednictwa, doradcy inwestycyjni,
// małe zespoły), not a translation of the EN page.
// Semantic core: ref/real-estate-finance.md has no measured PL phrases for this
// group; headings use the brief’s forms «strona internetowa dla doradcy
// finansowego» (H1, H2, cost H2), «strona doradcy finansowego» and
// «ile kosztuje strona internetowa dla doradcy finansowego».
// Intent: ref/intent-check-real-estate-finance.md — EN «financial advisor seo»
// vs «financial advisor website design» 0 shared URLs → separate pages; the PL
// pair follows the same split.
// Polish context: «doradca finansowy» is not a protected title; doradca
// inwestycyjny is a KNF licence; pośrednik kredytowy and agent ubezpieczeniowy
// are in KNF registers (general terms, no article numbers); EFPA certificates;
// multiagencja and independence from banks; how the advisor is paid; client
// groups (kredyt na mieszkanie, JDG, IKE / IKZE / PPK, cudzoziemcy); RODO on
// forms; calculators with assumptions; network subpage vs own site.
// Prices: /pl/cennik — prosta strona 3000–6000 zł, pełna od 8500 zł, projekt
// w cenie.
// NOT on this page: pozycjonowanie, wizytówka Google, słowa kluczowe, plan
// treści pod ruch (/pl/pozycjonowanie-strony-doradcy-finansowego — linked
// once); pośrednik kredytowy SEO (/pl/pozycjonowanie-strony-posrednika-kredytowego);
// agent ubezpieczeniowy (/pl/strona-internetowa-dla-agenta-ubezpieczeniowego).
// Owner’s rules: every page covers AI search; never say there are no clients
// from the visitor’s segment.
import { p, h2, h3, li, ol, link, k } from "./pt";

export const financialAdvisorWebsiteDesignPl = {
  lang: "pl",
  group: "financial-advisor-website-design",
  slug: "strona-internetowa-dla-doradcy-finansowego",
  title: "Strona internetowa dla doradcy finansowego",
  heading: "Strona internetowa dla doradcy finansowego",
  excerpt:
    "Tworzę strony internetowe dla doradców finansowych: jasna informacja, z kim współpracujesz i jak zarabiasz, wpisy do rejestrów KNF i certyfikaty na widoku, podstrony dla Twoich grup klientów, formularz zgodny z RODO i umawianie spotkań jednym kliknięciem.",
  seo: {
    metaTitle: "Strona dla doradcy finansowego od 3000 zł | Bandziuk",
    metaDescription:
      "Strona internetowa dla doradcy finansowego: uprawnienia i rejestry KNF, współpraca z bankami, grupy klientów, formularz RODO, kalendarz. Od 3000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt + wykonanie, jedna cena", "Od 3000 zł", "Strona i domena należą do Ciebie"],
  heroPhonePoints: ["Kredyt na mieszkanie", "Z kim współpracuję", "Umów rozmowę", "Zadzwoń · WhatsApp"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona internetowa dla doradcy finansowego, projekt w cenie", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Strona doradcy finansowego z podstronami grup klientów, sylwetkami doradców, informacją o współpracy i wynagrodzeniu, kalendarzem spotkań i formularzem zgodnym z RODO, projekt w cenie", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co dostajesz ze stroną internetową dla doradcy finansowego",
      items: [
        { _key: k("o"), iconName: "shield-check", title: "Uprawnienia i rejestry na widoku", text: "Wpisy KNF, certyfikaty EFPA, link do weryfikacji" },
        { _key: k("o"), iconName: "file-text", title: "Z kim współpracujesz i jak zarabiasz", text: "Banki, towarzystwa, prowizja albo honorarium" },
        { _key: k("o"), iconName: "layers", title: "Podstrony dla grup klientów", text: "Kredyt na mieszkanie, firma, emerytura, cudzoziemcy" },
        { _key: k("o"), iconName: "image", title: "Prawdziwe zdjęcia zamiast stocku", text: "Lista ujęć do sesji i sylwetka doradcy" },
        { _key: k("o"), iconName: "plug", title: "Kalendarz spotkań i formularz RODO", text: "Bez pytań o PESEL i dochody przed rozmową" },
        { _key: k("o"), iconName: "sparkles", title: "Czytelna dla Google i asystentów AI", text: "Fakty tekstem, dane strukturalne doradcy" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona doradcy finansowego", value: "3000–6000 zł", note: "projekt w cenie" },
        { _key: k("r"), label: "Grupy klientów, zespół, kalendarz, formularz RODO", value: "od 8500 zł", note: "projekt w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: strony dla klientów, którzy decydują o dużych pieniądzach",
      subtitle:
        "Cyprus VIP Estates to platforma luksusowych nieruchomości na Cyprze, którą zaprojektowałem i zbudowałem od zera dla kupujących inwestujących za granicą: kilka wersji językowych, połączenie z CRM i strona, która przynosi zapytania, a SEO prowadzę tam co miesiąc. Obok warszawska firma remontowo-inwestycyjna z projektem premium, wielojęzyczny serwis agencji edukacyjnej na dziesięć krajów, przebudowa strony firmy skanowania laserowego 3D i BIM, po której ruch z Google wzrósł 29 razy, oraz warsztat samochodowy z poprawionym SEO i UX. Wspólne z doradztwem finansowym: klient długo porównuje, zanim zaufa komuś z pieniędzmi.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "build-and-optimize-a-multilingual-real-estate-platform",
        "renovation-and-investment-website-with-premium-design",
        "full-multilingual-website-development-and-seo-for-student-services",
        "architecture-website-rebuild-and-seo-scan",
        "auto-repair-seo-and-ux-boost",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej dla doradcy finansowego",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: proponuję listę podstron i podaję stałą cenę w widełkach z cennika.",
      contextLabel: "Imię i nazwisko, nazwa firmy lub obecna strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Jak pracujesz?", options: ["Samodzielnie, multiagencja", "W sieci pośrednictwa finansowego", "Jako doradca inwestycyjny", "Zespół kilku doradców"] },
        { _key: k("z"), question: "Co masz teraz?", options: ["Brak strony", "Podstrona w sieci lub u partnera", "Strona z kreatora", "Tylko Facebook lub LinkedIn"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Tworzę strony internetowe dla doradców finansowych — strukturę, projekt graficzny, wykonanie, teksty i uruchomienie — więc za całość odpowiada jedna osoba, a cena jest znana z góry. Ktoś, kto szuka doradcy, ma przed sobą kredyt na trzydzieści lat, oszczędności całego życia albo finanse własnej firmy. Zanim zadzwoni, chce wiedzieć trzy rzeczy: kim jesteś, z kim współpracujesz i czy zajmujesz się sprawami takimi jak jego. Strona odpowiada na te pytania, zanim padną."),

        h2("Strona internetowa dla doradcy finansowego: co klient sprawdza na pierwszym ekranie"),
        p("Strony doradców często zaczynają się od wykresu idącego w górę, uścisku dłoni albo hasła o „bezpiecznej przyszłości”. Klient nie dowiaduje się z nich niczego. Pierwszy ekran, który projektuję, mówi wprost:"),
        li("czym się zajmujesz i gdzie — „Kredyty hipoteczne i ubezpieczenia, Gdańsk i online”, a nie „Twoje finanse w dobrych rękach”"),
        li("kim jesteś — prawdziwe zdjęcie, imię i nazwisko, najważniejsze uprawnienia"),
        li("z kim współpracujesz — liczba banków i towarzystw albo informacja, że pracujesz za honorarium od klienta"),
        li("jak się umówić — przycisk do kalendarza, telefon i WhatsApp jednym dotknięciem"),
        p("Reszta jest niżej. Klient, który w pięć sekund nie wie, czy trafił dobrze, wraca do wyników wyszukiwania."),

        h2("Doradca finansowy na stronie internetowej: uprawnienia, rejestry KNF i certyfikaty"),
        p("„Doradca finansowy” nie jest w Polsce tytułem chronionym — tak może przedstawić się każdy. Dlatego strona pokazuje to, co da się sprawdzić. Doradca inwestycyjny ma licencję KNF, a pośrednik kredytowy i agent ubezpieczeniowy są wpisani do rejestrów prowadzonych przez KNF. Na stronie każde uprawnienie ma swoje miejsce:"),
        li("nazwa uprawnienia i numer wpisu, z linkiem do publicznej wyszukiwarki rejestru"),
        li("certyfikaty, na przykład EFPA, zapisane tekstem, nie jako logo na grafice"),
        li("dane firmy: forma działalności, NIP, adres biura"),
        li("w zespole — przy każdej osobie jej własne uprawnienia, a nie wspólna lista dla wszystkich"),
        p("Jakie informacje musisz podać w Twoim przypadku, zależy od rodzaju działalności i umów z partnerami. Sprawdź to z działem zgodności sieci albo z prawnikiem; ja zapewniam, że na stronie jest na nie miejsce."),

        h2("Niezależność od banków i multiagencja: z kim współpracujesz i jak zarabiasz"),
        p("Słowo „niezależny” przyciąga klientów, ale budzi też pytanie, kto płaci doradcy. Strona odpowiada na nie spokojnie i bez ukrywania:"),
        li("lista banków, towarzystw ubezpieczeniowych i funduszy, z którymi współpracujesz, z datą aktualizacji"),
        li("jak zarabiasz: prowizja od instytucji, honorarium od klienta albo jedno i drugie"),
        li("czy pierwsze spotkanie jest bezpłatne i co klient dostaje po nim"),
        li("czego nie robisz — na przykład nie prowadzisz rachunków i nie przyjmujesz wpłat"),
        p("Multiagencja jest mocnym argumentem, gdy klient widzi, że porównujesz oferty wielu instytucji, a nie jednej. Projekt pokazuje to w formie krótkiej tabeli zamiast ściany logotypów."),

        h2("Podstrony dla grup klientów na stronie doradcy finansowego"),
        p("Doradca, który pisze „pomagam wszystkim”, brzmi jak każdy inny. Osobna podstrona dla każdej grupy klientów pokazuje, że znasz ich sytuację. Układ jest wspólny — sytuacja klienta jego słowami, czym się zajmujesz, jak wygląda współpraca, przycisk do kalendarza — a treść i zdjęcia są różne."),
        h3("Kredyt na pierwsze mieszkanie"),
        p("Lista dokumentów, etapy od wniosku do umowy i krótkie wyjaśnienie zdolności kredytowej. Ci klienci czytają na telefonie, wieczorem, po obejrzeniu ogłoszeń."),
        h3("Przedsiębiorcy i JDG"),
        p("Kredyt dla firmy, leasing, ubezpieczenia działalności i zdolność kredytowa przedsiębiorcy. Konkretne przykłady sytuacji działają tu lepiej niż zdjęcia rodzin."),
        h3("Oszczędzanie na emeryturę: IKE, IKZE i PPK"),
        p("Wyjaśnienia różnic między produktami, z datą aktualizacji przy każdym limicie, bo limity zmieniają się co roku."),
        h3("Cudzoziemcy mieszkający w Polsce"),
        p(
          "Kredyt i konto dla osoby z kartą pobytu, ubezpieczenia, a przede wszystkim rozmowa we własnym języku. Wersja angielska lub ukraińska ma własne adresy podstron — więcej o tym na stronie ",
          link("tworzenie stron wielojęzycznych", "/pl/oferty/tworzenie-stron-wielojezycznych"),
          ".",
        ),

        h2("Sylwetka doradcy finansowego: zdjęcia i historia zamiast stocku"),
        p("Klient wybiera człowieka, nie logo. Przed sesją zdjęciową wysyłam listę ujęć: portret w jednakowym świetle dla każdej osoby w zespole, kilka zdjęć przy pracy z klientem, wejście do biura, jeśli przyjmujesz na miejscu. Sylwetka doradcy ma prosty układ: zdjęcie, imię i nazwisko, uprawnienia, dwa–trzy zdania o tym, z kim pracujesz i dlaczego, oraz przycisk umówienia rozmowy właśnie z tą osobą."),
        p("Opinie klientów najlepiej pokazywać z miejsca, w którym klienci wystawiają je sami, na przykład z wizytówki Google, z nazwą źródła. Cytaty bez podpisu nikogo nie przekonują."),

        h2("Formularz kontaktowy i umawianie spotkań na stronie doradcy: RODO i dane, o które nie pytać"),
        p("Klient chętnie napisze w formularzu, ile zarabia, ile ma kredytu i jaki ma PESEL. Doradca nie powinien tego dostawać mailem przed rozmową. Formularz, który buduję:"),
        li("pyta o imię, telefon lub e-mail, temat z listy i dogodny termin"),
        li("ma prośbę, żeby nie wpisywać numeru PESEL, danych o dochodach ani numerów rachunków"),
        li("ma klauzulę informacyjną RODO i link do polityki prywatności"),
        li("wysyła zgłoszenie szyfrowanym połączeniem na Twoją skrzynkę albo do CRM"),
        p("Przycisk „Umów rozmowę” otwiera kalendarz, którego już używasz, z wyborem spotkania w biurze, przez telefon albo online. Baner cookies blokuje analitykę do czasu zgody."),

        h2("Kalkulatory i artykuły na stronie doradcy finansowego bez obietnic zysku"),
        p("Kalkulator raty kredytu albo oszczędzania przyciąga klientów, ale tylko wtedy, gdy jest uczciwy. Obok wyniku są założenia — oprocentowanie, okres, wkład własny — i data aktualizacji, a pod nim zdanie, że to przykład, a nie oferta. Reklama kredytu i usług inwestycyjnych ma w Polsce własne wymogi informacyjne, więc treść kalkulatora i artykułów warto sprawdzić z działem zgodności lub prawnikiem."),
        p("Google traktuje finanse jako tematy „Your Money or Your Life” i ocenia je surowiej. Artykuły na stronie mają autora z uprawnieniami, datę i własny adres, a sformułowania typu „gwarantowany zysk” czy „najlepszy kredyt” nie pojawiają się w ogóle."),

        h2("Podstrona w sieci, kreator czy własna strona doradcy finansowego"),
        p("Sieci pośrednictwa finansowego często dają doradcy podstronę na swojej domenie. Na początek to wystarcza, ale ta podstrona należy do sieci: wygląda jak setki innych, nie pozwala opisać Twoich grup klientów i znika, gdy zmieniasz sieć. Kreator stron daje więcej swobody za miesięczny abonament, a przeniesienie z niego oznacza budowę od nowa."),
        p(
          "Własna strona opłaca się, gdy budujesz markę osobistą, masz kilka grup klientów albo zespół. Domena, kod i treści należą do Ciebie. Jeśli umowa z siecią określa, jak możesz używać jej nazwy i logo, projekt to uwzględnia. Przejście ze starej strony bez utraty pozycji opisuję na stronie ",
          link("przebudowa strony internetowej", "/pl/oferty/przebudowa-strony-internetowej"),
          ".",
        ),

        h2("Strona doradcy finansowego, którą ChatGPT i Google AI Overviews potrafią przeczytać"),
        p("Klienci pytają ChatGPT, Perplexity albo podsumowania AI w Google: „doradca kredytowy w Poznaniu, który mówi po ukraińsku”, „kto pomoże wybrać IKZE dla przedsiębiorcy”. Asystent poleca tych, o których potrafi coś przeczytać i sprawdzić. Dlatego uprawnienia, numery wpisów, miasta, języki i grupy klientów są na stronie zapisane tekstem, a dane strukturalne opisują doradcę, firmę i usługi tak samo jak wizytówka Google."),
        p(
          "Widoczność w odpowiedziach AI to dalsza praca, opisana na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ". Pozycjonowanie w Google opisuję na stronie ",
          link("pozycjonowanie doradcy finansowego", "/pl/pozycjonowanie-strony-doradcy-finansowego"),
          ".",
        ),

        h2("Jak powstaje strona internetowa dla doradcy finansowego"),
        ol("Brief. Przesyłasz, czym się zajmujesz, z kim współpracujesz, dla jakich klientów pracujesz i jakie masz uprawnienia. Wiadomość głosowa też wystarczy."),
        ol("Lista podstron i stała cena. Jeśli zakres zmieni się później, zmianę wyceniam przed jej wykonaniem."),
        ol("Projekt, najpierw na telefonie. Strona główna, podstrona grupy klientów i sylwetka doradcy są uzgadniane z Tobą."),
        ol("Wykonanie i teksty. Piszę je na podstawie briefu, a Ty — i w razie potrzeby dział zgodności sieci — sprawdzasz fakty."),
        ol("Uruchomienie. Domena, analityka po zgodzie, Search Console, kalendarz i krótka instrukcja edycji."),

        h2("Ile kosztuje strona internetowa dla doradcy finansowego"),
        li("Prosta strona doradcy — strona główna, usługi, z kim współpracuję, o mnie, kontakt z formularzem i kalendarzem: od 3000 do 6000 zł."),
        li("Pełna strona — podstrony grup klientów, sylwetki doradców, informacja o współpracy i wynagrodzeniu, kalkulator, wersja językowa, formularz zgodny z RODO: od 8500 zł."),
        p(
          "Projekt graficzny jest w cenie w obu przypadkach, a po uruchomieniu nie płacisz mi abonamentu. Widełki są podane w ",
          link("cenniku", "/pl/cennik"),
          ". Ogólnie o tym, jak buduję strony dla firm, piszę na stronie ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strona internetowa dla doradcy finansowego: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona internetowa dla doradcy finansowego?", "Od 3000 do 6000 zł za prostą stronę i od 8500 zł za pełną stronę z podstronami grup klientów, sylwetkami doradców, informacją o współpracy, kalendarzem i formularzem zgodnym z RODO. Projekt graficzny jest w cenie. Po krótkim opisie Twojej działalności podaję stałą cenę."],
          ["Czy na stronie trzeba podać numer wpisu do rejestru KNF?", "Zależy od rodzaju działalności i umów z partnerami. Pośrednicy kredytowi i agenci ubezpieczeniowi są w rejestrach KNF i pokazanie numeru wpisu z linkiem do wyszukiwarki buduje zaufanie. Co jest obowiązkowe w Twoim przypadku, sprawdź z prawnikiem lub działem zgodności."],
          ["Czy mogę nazywać się na stronie niezależnym doradcą finansowym?", "Tytuł „doradca finansowy” nie jest chroniony, ale słowo „niezależny” powinno odpowiadać temu, jak naprawdę zarabiasz. Jeśli dostajesz prowizje od instytucji, strona mówi o tym wprost i pokazuje, z iloma instytucjami współpracujesz."],
          ["Mam podstronę w sieci pośrednictwa. Po co mi własna strona?", "Podstrona w sieci należy do sieci i znika, gdy ją zmieniasz. Własna strona buduje Twoją markę, pozwala opisać Twoje grupy klientów i zostaje z Tobą. Projekt uwzględnia zasady używania nazwy i logo sieci, jeśli umowa je określa."],
          ["Czy formularz na stronie doradcy musi być zgodny z RODO?", "Tak, bo zbiera dane osobowe. Formularz pyta tylko o kontakt i temat, prosi, żeby nie wpisywać PESEL ani danych o dochodach, ma klauzulę informacyjną, a zgłoszenie trafia tylko na Twoją skrzynkę lub do CRM."],
          ["Ile trwa stworzenie strony dla doradcy finansowego?", "Prosta strona zwykle od dwóch do czterech tygodni od briefu, pełna z podstronami grup klientów od czterech do sześciu. Najwięcej zależy od tego, jak szybko gotowe są zdjęcia i uwagi do tekstów."],
          ["Czy robisz strony dla doradców spoza Warszawy?", "Tak, dla doradców z całej Polski. Projekt i wykonanie prowadzę zdalnie, po polsku, angielsku albo rosyjsku, a rozmowy odbywają się online. W Warszawie mogę przyjechać na spotkanie."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową dla doradcy finansowego: co mi wysłać"),
        p(
          "Wyślij imię i nazwisko lub nazwę firmy, link do obecnej strony albo podstrony w sieci, czym się zajmujesz, z iloma instytucjami współpracujesz, dla jakich klientów pracujesz i jakie masz uprawnienia. Zdjęcie portretowe, jeśli je masz, pomoże mi pokazać pierwszy ekran z Tobą zamiast stocku. Odpowiem listą podstron i stałą ceną. Skorzystaj z ",
          link("formularza powyżej", "#quote"),
          " albo napisz na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
