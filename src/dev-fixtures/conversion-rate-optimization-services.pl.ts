// Landing page fixture: Optymalizacja konwersji (PL), group
// «conversion-rate-optimization-services», URL /pl/oferty/optymalizacja-konwersji.
// Market version for Polish firms (JDG, sp. z o.o., e-commerce), not a
// translation of the EN page.
// Semantic core: PL phrases were not measured (brief) — written for the market
// with «optymalizacja konwersji» (H1, H2), «optymalizacja konwersji strony»
// (H1, H2), «audyt konwersji» (H2, FAQ, price list), «CRO» (H2 on the AI
// section, H2 on the specialist, price H2), «testy A/B» (H2).
// Intent (EN proxy, ref/intent-check-general-services.md): the service SERP
// (CRO agencies and tools) is separate from the informational «conversion rate
// optimization» SERP, 0/10 shared → this page sells the service and keeps the
// definition to two sentences.
// Polish context: BLIK, Przelewy24, Paczkomaty InPost, the NIP field in checkout,
// RODO consents on forms, cookie banners and Google Consent Mode reducing what
// GA4 sees, Allegro / Oferteo as traffic sources, faktura VAT from a JDG.
// Prices (brief): audyt od 1000 zł; jednorazowe poprawki od 1000 do 3000 zł;
// stała współpraca od 3500 zł miesięcznie. No promised uplift percentages.
// NOT on this page: pozycjonowanie stron (/pl/oferty/strategia-i-optymalizacja-seo);
// wizytówka Google i Mapy (/pl/oferty/pozycjonowanie-lokalne); SEO sklepów
// (/pl/oferty/pozycjonowanie-sklepow-internetowych); widoczność w AI
// (/pl/oferty/pozycjonowanie-w-ai-i-chatgpt).
import { p, h2, li, link, k } from "./pt";

export const conversionRateOptimizationServicesPl = {
  lang: "pl",
  group: "conversion-rate-optimization-services",
  slug: "optymalizacja-konwersji",
  parentPath: ["oferty"],
  pageType: "service",
  title: "Optymalizacja konwersji",
  heading: "Optymalizacja konwersji strony: analiza i poprawki prosto w kodzie",
  excerpt:
    "Zajmuję się optymalizacją konwersji stron jako programista, który sam wdraża to, co wyjdzie z analizy: najpierw rzetelny pomiar zapytań i zamówień, potem poprawki formularzy, koszyka, pierwszego ekranu i szybkości.",
  seo: {
    metaTitle: "Optymalizacja konwersji (CRO) od 1000 zł | Bandziuk",
    metaDescription:
      "Optymalizacja konwersji strony przez programistę: pomiar w GA4, analiza ścieżki klienta, poprawki formularzy, koszyka i szybkości w kodzie. Audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Analiza + poprawki w kodzie", "Audyt konwersji od 1000 zł", "Umowa i faktura"],
  heroPhonePoints: ["Oferta w jednym zdaniu", "Zadzwoń · WhatsApp", "BLIK i Paczkomat", "Zapytanie wysłane"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt konwersji: pomiar, analiza ścieżki klienta i lista poprawek według efektu", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Stała optymalizacja konwersji: analiza, zmiany w kodzie i miesięczny raport", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje optymalizacja konwersji strony",
      items: [
        { _key: k("o"), iconName: "trending-up", title: "Pomiar, który liczy zapytania i sprzedaż", text: "Zdarzenia GA4: formularze, telefony, zamówienia" },
        { _key: k("o"), iconName: "search", title: "Analiza ścieżki klienta", text: "Gdzie odwiedzający wchodzą, wahają się i rezygnują" },
        { _key: k("o"), iconName: "layers", title: "Pierwszy ekran, który mówi, co sprzedajecie", text: "Oferta, poziom cen i jeden następny krok" },
        { _key: k("o"), iconName: "file-text", title: "Formularze zgodne z RODO, które da się wysłać", text: "Krótka klauzula, tylko potrzebne pola" },
        { _key: k("o"), iconName: "phone", title: "Telefon i WhatsApp jednym dotknięciem", text: "Każde kliknięcie liczone jako kontakt" },
        { _key: k("o"), iconName: "gauge", title: "Szybkość i wersja mobilna", text: "Poprawione w szablonach, nie kolejną wtyczką" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt konwersji", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stała optymalizacja konwersji", value: "od 3500 zł / mies.", note: "analiza + zmiany w kodzie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Strony, które zbudowałem tak, żeby sprzedawały i zbierały zapytania",
      subtitle:
        "Landing kursu online ze Stripe Checkout, który sprzedał ponad 100 kursów z pierwszej kampanii Google Ads, strona firmy skanowania 3D i BIM, która z zera zapytań przeszła na zapytania co tydzień, warszawskie firmy usługowe nastawione na telefon i WhatsApp oraz strona psychoterapeuty, którego klient znalazł przez ChatGPT.",
      picks: [
        "e-commerce-landing-page-with-secured-video-access",
        "architecture-website-rebuild-and-seo-scan",
        "auto-repair-seo-and-ux-boost",
        "tyre-storage-landing-page-with-editable-seo",
        "psychotherapist-website-milan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena optymalizacji konwersji",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: piszę, od czego zacząłbym na Waszej stronie, i podaję stałą cenę.",
      contextLabel: "Adres strony",
      contextPlaceholder: "https://",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Co ma dawać Wasza strona?", options: ["Telefony i zapytania", "Zamówienia w sklepie", "Rezerwacje terminów", "Zapisy lub pobrania"] },
        { _key: k("z"), question: "Skąd przychodzi dziś najwięcej ruchu?", options: ["Z wyników Google", "Z reklam Google lub Meta", "Z Allegro, Oferteo lub katalogów", "Nie wiem"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Zajmuję się optymalizacją konwersji stron internetowych jako programista, więc wnioski z analizy kończą się zmianą w kodzie Waszej strony, a nie prezentacją, którą ktoś inny ma kiedyś wdrożyć. Konwersja to działanie, dla którego strona istnieje: telefon, zapytanie ofertowe, rezerwacja, zamówienie. Optymalizacja konwersji, po angielsku CRO, polega na tym, żeby z tego samego ruchu było więcej takich działań. Rzadko potrzebna jest do tego nowa strona — trzeba znaleźć miejsca, w których klienci rezygnują, i je naprawić."),

        h2("Na czym polega optymalizacja konwersji strony internetowej"),
        p("Zakres zależy od strony, ale prawie zawsze obejmuje:"),
        li("pomiar: zdarzenia w Google Analytics 4 dla wysłanych formularzy, kliknięć w numer telefonu i WhatsApp, rezerwacji i zakupów, liczone tak samo przed zmianami i po nich"),
        li("analizę ścieżki: na które podstrony ludzie wchodzą, gdzie odpadają i czym telefon różni się od komputera"),
        li("nagrania sesji i mapy cieplne, żeby zobaczyć, gdzie odwiedzający się zatrzymują i w co klikają na próżno"),
        li("pierwszy ekran: co sprzedajecie, komu, gdzie i za ile, plus jeden widoczny następny krok"),
        li("przyciski kontaktu i formularze w miejscach, gdzie klient podejmuje decyzję"),
        li("elementy budujące zaufanie: ceny lub widełki, opinie, pełne dane firmy z NIP, zdjęcia z prawdziwych realizacji"),
        p("Wszystko sprawdzam najpierw na telefonie, bo tam najszybciej wychodzą problemy z układem, formularzami i szybkością."),

        h2("Audyt konwersji: co sprawdzam i co z niego dostajecie"),
        p("Audyt konwersji to zwykle pierwszy krok. Potrzebuję dostępu do Google Analytics 4 i Search Console oraz Waszej definicji dobrego zapytania albo zamówienia. Potem przechodzę stronę tak jak klient: wchodzę przez podstrony, na które naprawdę trafia ruch, na telefonie wypełniam i wysyłam formularze, w sklepie dochodzę do płatności."),
        p("Dostajecie listę problemów ze zrzutami ekranu, krótkim wyjaśnieniem, dlaczego każdy z nich kosztuje Was zapytania lub sprzedaż, i oceną nakładu pracy. Kolejność wynika z relacji efektu do kosztu: na górze są tanie poprawki na najczęściej odwiedzanych podstronach. Jeśli pomiar nie działa, jego naprawa idzie na pierwsze miejsce, bo bez niego nie da się ocenić niczego, co przyjdzie później."),

        h2("Specjalista CRO czy agencja: kto wdraża zmiany po audycie"),
        p("W wielu agencjach optymalizacja konwersji kończy się raportem. Rekomendacje trafiają do programisty klienta albo do kolejki w innej firmie i czekają tygodniami. Taki model ma sens w dużych sklepach z własnym zespołem produktowym i ruchem, który pozwala na kilka testów miesięcznie."),
        p(
          "Mała i średnia firma zwykle ma jedną stronę, jednego programistę albo żadnego i listę znanych problemów, która tylko rośnie. Buduję strony ",
          link("na WordPressie", "/pl/oferty/strona-na-wordpress"),
          " i ",
          link("w Next.js", "/pl/oferty/strony-w-nextjs"),
          ", więc szablon, formularz czy krok koszyka poprawiam sam, sprawdzam na prawdziwych urządzeniach i mierzę efekt. Osoba, która znalazła problem, jest tą samą osobą, która go naprawia.",
        ),

        h2("Testy A/B czy pomiar przed i po zmianie przy małym ruchu"),
        p("Test A/B pokazuje dwie wersje strony dwóm grupom odwiedzających i porównuje wyniki. To najdokładniejszy sposób oceny zmiany, ale każda wersja musi zebrać dużo konwersji. Popularny sklep dostaje wiarygodny wynik w kilka tygodni. Strona usługowa z kilkudziesięcioma zapytaniami miesięcznie czekałaby na wynik jednego testu miesiącami."),
        p("Dlatego na mniejszych stronach stosuję pomiar przed i po: ustalony okres bazowy, zmiany wdrażane w datowanych pakietach, porównanie według źródła ruchu i urządzenia, a w branżach sezonowych także z tym samym okresem rok wcześniej. Oczywiste błędy, jak formularz, który nie wysyła się na iPhonie, naprawiam bez testowania. Testy A/B zostawiam dla podstron z dużym ruchem: kart produktów, koszyka i landing page’y pod kampanie."),

        h2("Optymalizacja konwersji strony usługowej i B2B: zapytania ofertowe"),
        p("Na stronie usługowej konwersją jest zapytanie, a jego jakość liczy się tak samo jak liczba. Pracuję nad tym, żeby:"),
        li("podstrony usług odpowiadały na pytania zadawane przed kontaktem: zakres, przebieg, widełki cenowe, terminy, przykłady realizacji"),
        li("formularz wyceny pytał o to, czego potrzebujecie do podania ceny, i o nic więcej"),
        li("po wysłaniu klient widział, kiedy i jak odpowiecie"),
        li("w analityce dało się odróżnić zapytania od spamu, ofert współpracy i CV"),
        p("ScanM2, firma skanowania laserowego 3D i BIM, przez dwa lata nie dostawała zapytań ze strony zbudowanej w narzędziu no-code. Po przebudowie na WordPressie z zachowaniem projektu graficznego zapytania przychodzą co tydzień. To efekt pozycjonowania strony i pracy nad konwersją jednocześnie."),

        h2("Optymalizacja konwersji dla firm lokalnych: telefon, WhatsApp i formularz"),
        p("Warsztat, gabinet czy serwis dostają większość kontaktów z telefonów, często z pominięciem formularza: ktoś dzwoni, pisze na WhatsAppie albo klika „Wyznacz trasę”. Na stronie lokalnej firmy sprawdzam więc:"),
        li("czy przyciski połączenia, WhatsApp i dojazdu są na każdej podstronie i na telefonie trzymają się dołu ekranu"),
        li("czy wiadomość na WhatsAppie otwiera się z gotowym tekstem o usłudze, którą klient właśnie oglądał"),
        li("czy każde kliknięcie w numer, WhatsApp i mapę jest liczone jako konwersja"),
        li("czy godziny otwarcia, obszar działania i ceny widać bez długiego przewijania"),
        p(
          "Tak działają strony warsztatu samochodowego i przechowalni opon z Warszawy z mojego portfolio. Widoczność w Mapach Google to osobna praca, opisana na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Optymalizacja konwersji sklepu internetowego: karta produktu, koszyk i płatność"),
        p("W sklepie ścieżka jest dłuższa, a polscy kupujący mają konkretne przyzwyczajenia:"),
        li("karta produktu: zdjęcia, cena, koszt i termin dostawy widoczne przed koszykiem, dostępność, zasady zwrotu"),
        li("dostawa: Paczkomaty InPost i inne punkty odbioru z mapą wyboru, jeśli Wasi klienci ich oczekują"),
        li("płatność: BLIK, szybkie przelewy przez Przelewy24 lub inną bramkę, karty, Apple Pay i Google Pay"),
        li("zakup bez zakładania konta, działające autouzupełnianie i komunikaty błędów przy polu"),
        li("pole NIP do faktury, które nie przeszkadza osobie prywatnej"),
        p(
          "Landi Room, salon kosmetyczny z Warszawy, sprzedaje kurs online przez landing page ze Stripe Checkout i chronionym linkiem do wideo wysyłanym po płatności. Z pierwszej kampanii Google Ads sprzedał ponad 100 kursów. Widoczność kart produktów i kategorii w Google opisuję na stronie ",
          link("pozycjonowanie sklepów internetowych", "/pl/oferty/pozycjonowanie-sklepow-internetowych"),
          ".",
        ),

        h2("Formularze z RODO i baner cookies a optymalizacja konwersji"),
        p("Polskie strony często tracą klientów na formularzach przeładowanych zgodami: kilka obowiązkowych checkboxów i długa klauzula nad przyciskiem „Wyślij”. Zakres zgód i treść klauzuli ustalacie z osobą, która odpowiada u Was za RODO. Ja dbam o to, żeby formularz pokazywał je krótko i czytelnie, także na małym ekranie."),
        p("Baner cookies wpływa też na pomiar. Gdy część odwiedzających odmawia zgody, Google Analytics 4 widzi mniej sesji i konwersji. Konfiguruję tryb zgody Google (Consent Mode) i porównuję dane z analityki z liczbą zapytań w skrzynce lub CRM, żeby wiedzieć, ile ich naprawdę przyszło."),

        h2("Optymalizacja konwersji i pozycjonowanie strony: ruch bez zapytań i zapytania bez ruchu"),
        p(
          "Strona może zawodzić na dwa sposoby. Ma ruch z Google, ale nikt nie dzwoni — wtedy więcej ruchu niewiele zmieni. Albo dobrze zamienia odwiedzających w klientów, tylko mało kto ją znajduje — wtedy nie pomoże optymalizacja konwersji. Zajmuję się jednym i drugim, więc patrzę na obie liczby, zanim zaproponuję, na co wydać budżet. Zmiany pod konwersję nie mogą psuć pozycji: nagłówki, treści i linki, dzięki którym podstrona jest widoczna w Google, przenoszę świadomie, zamiast je usuwać. Pozycjonowanie stron opisuję na stronie ",
          link("strategia i optymalizacja SEO", "/pl/oferty/strategia-i-optymalizacja-seo"),
          ".",
        ),

        h2("CRO dla odwiedzających z ChatGPT i Google AI Overviews"),
        p("Osoba, która przychodzi z ChatGPT, Perplexity albo z linku w podsumowaniu AI w Google, rzadko widzi stronę główną. Trafia na podstronę, którą asystent zacytował: usługę, cennik, artykuł sprzed dwóch lat. Każda taka podstrona musi działać jak strona pierwszego kontaktu i mówić, kim jesteście, co oferujecie, za ile i co zrobić dalej."),
        p(
          "W analityce wydzielam ten ruch osobno — ChatGPT dopisuje do linków utm_source=chatgpt.com — żeby było widać, jak konwertuje na tle Google i reklam. Mój klient, psychoterapeuta z Mediolanu, znalazł mnie właśnie przez ChatGPT. Jak trafić do odpowiedzi asystentów, opisuję na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ", a z jakich źródeł korzystają — w ",
          link("badaniu 141 odpowiedzi AI", "/pl/blog/pozycjonowanie-w-ai-badanie"),
          ".",
        ),

        h2("Jak mierzę efekty optymalizacji konwersji"),
        p("Przed zmianami ustalamy, co jest konwersją — formularz, telefon, rozmowa na WhatsAppie, opłacone zamówienie — i zapisuję stan wyjściowy. Po każdym pakiecie zmian raport pokazuje współczynnik konwersji według źródła i urządzenia, liczbę i jakość zapytań lub zamówień oraz listę zmian z datami. Wynik podaję w zmierzonych liczbach, także wtedy, gdy zmiana nic nie dała, a nie jako procent obiecany przed obejrzeniem danych."),

        h2("Ile kosztuje optymalizacja konwersji i audyt CRO"),
        li("Audyt konwersji — pomiar, analiza ścieżki klienta, lista poprawek według efektu: od 1000 zł."),
        li("Jednorazowe poprawki — formularz, krok koszyka, pierwszy ekran, szybkość kluczowych szablonów: od 1000 do 3000 zł za zadanie."),
        li("Stała współpraca nad konwersją — analiza, zmiany w kodzie, testy tam, gdzie pozwala ruch, raport co miesiąc: od 3500 zł miesięcznie."),
        p(
          "Wszystkie widełki są w ",
          link("cenniku", "/pl/cennik"),
          ". Pierwsza rozmowa, 15–30 minut, jest bezpłatna: wspólnie patrzymy na stronę, a ja mówię, od czego zacząć — od konwersji, od pozycjonowania czy od obu.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Optymalizacja konwersji: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Na czym polega optymalizacja konwersji strony?", "Na ustawieniu pomiaru, który poprawnie liczy zapytania i zamówienia, znalezieniu miejsc, w których klienci rezygnują, i poprawieniu ich na stronie: pierwszego ekranu, formularzy, koszyka, szybkości i przycisków kontaktu. U mnie zmiany trafiają od razu do kodu."],
          ["Czy możesz zagwarantować wzrost konwersji?", "Konkretnej liczby nikt nie zna przed obejrzeniem danych. Gwarantuję metodę: wiarygodny pomiar, opisane zmiany i wyniki porównane ze stanem wyjściowym, także te, w których zmiana nic nie dała."],
          ["Czy moja strona ma wystarczający ruch na testy A/B?", "Jeśli podstrona zbiera kilkadziesiąt konwersji miesięcznie, test A/B trwałby zbyt długo. Wtedy naprawiam oczywiste problemy i mierzę przed i po. Testy A/B mają sens na kartach produktów, w koszyku i na landing page’ach z dużym ruchem z reklam."],
          ["Czy poprawisz stronę zrobioną przez inną firmę?", "Tak, większość pracy nad konwersją dotyczy istniejących stron, najczęściej na WordPressie, w Next.js albo innym frameworku. Potrzebuję dostępu do kodu lub panelu i do analityki. Na stronach z kreatora zakres zmian wyznacza sam kreator — mówię o tym przed rozpoczęciem."],
          ["Ile kosztuje audyt konwersji?", "Od 1000 zł. Jednorazowe poprawki kosztują od 1000 do 3000 zł za zadanie, a stała optymalizacja konwersji od 3500 zł miesięcznie. Pierwsza rozmowa, 15–30 minut, jest bezpłatna."],
          ["Czy wystawiasz fakturę i pracujesz zdalnie?", "Tak. Prowadzę jednoosobową działalność w Warszawie i wystawiam fakturę. Pracuję zdalnie z firmami z całej Polski: rozmowy online, dostęp do analityki i kodu, raporty na piśmie."],
          ["Kiedy widać efekty optymalizacji konwersji?", "Naprawiony pomiar daje wiarygodne liczby od razu. Efekt zmian na stronie przy dużym ruchu widać po kilku tygodniach, przy małym po kilku miesiącach, bo uczciwe porównanie wymaga odpowiedniej liczby konwersji."],
          ["Lepiej zacząć od audytu konwersji czy od razu od poprawek?", "Jeśli pomiar działa, a problem jest znany, na przykład formularz nie wysyła się na telefonie, można go naprawić od razu jako zadanie jednorazowe. Jeśli wiecie tylko, że zapytań lub zamówień jest za mało, zacznijcie od audytu."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów optymalizację konwersji strony: co mi wysłać"),
        p(
          "Wyślijcie adres strony, informację, co jest dla Was konwersją, przybliżoną liczbę odwiedzin oraz zapytań lub zamówień w miesiącu i podstrony, co do których macie wątpliwości. Dostęp do GA4 się przyda, ale do pierwszej odpowiedzi nie jest potrzebny. Odpiszę, od czego zacząłbym, i podam stałą cenę. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
