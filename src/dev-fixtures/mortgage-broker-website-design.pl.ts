// Landing page fixture: Strona internetowa dla pośrednika kredytowego (PL),
// group «mortgage-broker-website-design». New page. Market version for Polish
// pośrednicy kredytu hipotecznego, eksperci kredytowi (own firms, agents in
// sieci and franczyzy, small biura) — not a translation of
// mortgage-broker-website-design.en.
// Semantic core: ref/batch-h1.md has no measurable PL volume for this group;
// headings carry the phrases clients and brokers use: «strona internetowa dla
// pośrednika kredytowego» (H1, H2s, metaDescription), «strona eksperta
// kredytowego» (metaTitle, H2s), «doradca kredytowy» (H3, intro wording, with
// a general note on «niezależny doradca»), «pośrednik kredytu hipotecznego»,
// «rejestr KNF», «kalkulator raty kredytu hipotecznego», «landing page».
// Intent: ref/intent-check-delta.md — EN «mortgage broker website» vs
// «mortgage broker seo» 0 shared URLs → own page next to
// /pl/pozycjonowanie-strony-posrednika-kredytowego. PL SERP not checked.
// Polish context: rejestr pośredników kredytu hipotecznego i ich agentów (KNF),
// agent acting on behalf of a pośrednik, one bank or several, wynagrodzenie
// (bank, klient, both), RRSO and przykład reprezentatywny as required CMS
// fields, RODO clause and separate consent for marketing calls, documents
// (zaświadczenie o zarobkach, PIT, wyciągi, umowa przedwstępna, odpis KW)
// through a secure channel, review-verification notice (nieuczciwe praktyki
// rynkowe, since 2023), European Accessibility Act (general, microenterprise
// exemption), umowa agencyjna with the sieć — all general, «nie porada prawna».
// NOT on this page: podstrony kredytów, miasta, wizytówka Google, kalkulator
// jako SEO, ekspert w sieci vs marka osobista in search, RRSO in ads
// (/pl/pozycjonowanie-strony-posrednika-kredytowego — linked once); realtor
// sites (/pl/strona-internetowa-dla-agenta-nieruchomosci — linked once); Google
// Ads, kupowane leady (not offered).
// Owner’s rules: every page covers AI search; never say there are no clients
// from the visitor’s segment; «faktura» only.
import { p, h2, h3, li, ol, link, k } from "./pt";

export const mortgageBrokerWebsiteDesignPl = {
  lang: "pl",
  group: "mortgage-broker-website-design",
  slug: "strona-internetowa-dla-posrednika-kredytowego",
  title: "Strona internetowa dla pośrednika kredytowego",
  heading: "Strona internetowa dla pośrednika kredytowego",
  excerpt:
    "Tworzę strony internetowe dla pośredników kredytowych i ekspertów kredytowych: numer wpisu do rejestru KNF na każdej podstronie, krótki formularz z terminem rozmowy, dokumenty przez bezpieczny kanał zamiast maila i kalkulator raty z widocznymi założeniami — projekt graficzny w cenie.",
  seo: {
    metaTitle: "Strona dla eksperta kredytowego od 3000 zł | Bandziuk",
    metaDescription:
      "Strona internetowa dla pośrednika kredytowego: dane z rejestru KNF, krótki formularz z kalendarzem, bezpieczne dokumenty, kalkulator raty. Od 3000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt graficzny w cenie", "Od 3000 zł", "Dane z rejestru KNF w stopce"],
  heroPhonePoints: ["Ile wyniesie moja rata?", "Umów rozmowę z ekspertem", "Prześlij dokumenty bezpiecznie", "Zadzwoń · WhatsApp"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Strona internetowa dla pośrednika kredytowego z danymi z rejestru KNF, krótkim formularzem, kalendarzem rozmów i bezpiecznym przesyłaniem dokumentów, projekt w cenie", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Pełna strona eksperta kredytowego z profilami ekspertów, kalkulatorem raty i zdolności, opiniami z Google, połączeniem z CRM i wersją językową, projekt w cenie", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co dostajesz ze stroną internetową dla pośrednika kredytowego",
      items: [
        { _key: k("o"), iconName: "shield-check", title: "Numer wpisu do rejestru KNF na każdej podstronie", text: "Jedna zmiana w panelu, poprawka wszędzie" },
        { _key: k("o"), iconName: "file-text", title: "Krótki formularz i termin rozmowy w kalendarzu", text: "Bez numeru PESEL i danych o dochodach" },
        { _key: k("o"), iconName: "plug", title: "Dokumenty przez bezpieczny kanał", text: "Portal, CRM lub system sieci zamiast maila" },
        { _key: k("o"), iconName: "layers", title: "Kalkulator raty i zdolności kredytowej", text: "Założenia i data widoczne przy wyniku" },
        { _key: k("o"), iconName: "users", title: "Profil każdego eksperta kredytowego", text: "Zdjęcie, numer wpisu, miasta, języki, kalendarz" },
        { _key: k("o"), iconName: "sparkles", title: "Dane czytelne dla ChatGPT i Google", text: "Rejestr, miasta i rodzaje kredytów tekstem" },
      ],
      prices: [
        { _key: k("r"), label: "Strona pośrednika kredytowego", value: "3000–6000 zł", note: "projekt w cenie" },
        { _key: k("r"), label: "Profile ekspertów, kalkulator, CRM, wersja językowa", value: "od 8500 zł", note: "projekt w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: strony z kalkulatorami, usługami opartymi na zaufaniu i dla kupujących nieruchomości",
      subtitle:
        "Serwis konsultantki od analityki handlu detalicznego to 153 podstrony po angielsku, polsku i rosyjsku z kalkulatorami i szablonami, które pokazują, co i jak liczą — tak samo powinien działać kalkulator raty u pośrednika. Strona Giuseppe, psychoterapeuty z Mediolanu, ma spokojny projekt dla usługi, w której klient mówi o sprawach prywatnych, dwie wersje językowe, dane strukturalne i 468 wpisów przeniesionych z przekierowaniami 301; Giuseppe znalazł mnie przez ChatGPT. Platformę nieruchomości na Cyprze zbudowałem i prowadzę do dziś: pięć języków i kupujący z zagranicy, czyli ci sami ludzie, którzy potem szukają kredytu. Landi Room, warszawski salon kosmetyczny, sprzedaje kurs przez Stripe Checkout i otwiera wideo dopiero po płatności — wrażliwy krok dzieje się w bezpiecznym systemie, nie na stronie. Moja własna strona to Next.js, Sanity i dane strukturalne w trzech językach.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "consultant-website-design-retail-analytics",
        "psychotherapist-website-milan",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "e-commerce-landing-page-with-secured-video-access",
        "develop-and-optimize-a-personal-website-with-seo",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej dla pośrednika kredytowego",
      subtitle: "W ciągu jednego dnia roboczego dostaniesz propozycję podstron dla strony pośrednika i stałą cenę. Danych klientów proszę nie wysyłać.",
      contextLabel: "Firma, numer wpisu KNF lub obecna strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Co masz teraz?", options: ["Brak strony", "Profil eksperta na stronie sieci", "Stronę z kreatora lub szablonu", "Starszą stronę na WordPressie"] },
        { _key: k("z"), question: "Co strona ma robić najpierw?", options: ["Umawiać rozmowy z klientami", "Budować zaufanie agentów i deweloperów", "Zbierać dokumenty bez maili", "Obsługiwać klientów z zagranicy"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Strona internetowa dla pośrednika kredytowego to projekt, wykonanie i uruchomienie miejsca, w którym klient sprawdza, komu powierzy sprawę kredytu hipotecznego, i umawia pierwszą rozmowę. Robię takie strony sam — dla pośredników kredytu hipotecznego z własną firmą, ekspertów kredytowych działających jako agenci i małych biur — więc projekt graficzny, kod i dane wymagane przy kredytach przygotowuje jedna osoba, za stałą cenę."),

        h2("Strona internetowa eksperta kredytowego: co klient widzi na pierwszym ekranie"),
        p("Do eksperta kredytowego trafia się zwykle z polecenia: od znajomych, od agenta nieruchomości albo z biura sprzedaży dewelopera. Klient dostaje imię i nazwisko, wpisuje je w Google i otwiera stronę na telefonie. Pierwszy ekran odpowiada mu bez przewijania:"),
        li("kim jesteś — zdjęcie, imię i nazwisko, firma albo pośrednik, w imieniu którego działasz"),
        li("gdzie pracujesz — miasto lub region i czy spotykasz się na miejscu, czy online"),
        li("w czym pomagasz najczęściej — pierwsze mieszkanie, kredyt przy JDG lub B2B, refinansowanie, zakup od dewelopera — jednym zdaniem"),
        li("jak zacząć — przycisk „Umów rozmowę”, telefon i WhatsApp jednym dotknięciem"),
        p("Hasło „Najlepszy kredyt w najlepszej cenie” i suwak z grafikami banków nie odpowiadają na żadne z tych pytań."),

        h2("Numer wpisu do rejestru KNF i status pośrednika kredytu hipotecznego na każdej podstronie"),
        p("Pośrednicy kredytu hipotecznego i ich agenci działają na podstawie wpisu do rejestru prowadzonego przez KNF, a klienci coraz częściej to sprawdzają. Te dane nie są dopisywane na koniec, tylko mają stałe miejsca w projekcie:"),
        li("stopka na każdej podstronie z pełną nazwą firmy, NIP-em, adresem i numerem wpisu do rejestru"),
        li("przy agencie — nazwa pośrednika, w imieniu którego działa, oraz informacja, czy współpracuje z jednym bankiem, czy z kilkoma"),
        li("podstrona „Informacje o pośredniku” z danymi z rejestru, zakresem usług i odnośnikiem do wyszukiwarki rejestru na stronie KNF"),
        p("Gdy zmienia się adres albo dochodzi nowy agent, poprawiasz jeden wpis w panelu i zmiana pojawia się na całej stronie. Jeśli używasz nazwy „doradca kredytowy”, pamiętaj, że określenia „niezależny doradca” i usługi doradcze mają w przepisach o kredycie hipotecznym osobne warunki. To ogólny opis, nie porada prawna — szczegóły ustal z prawnikiem albo działem zgodności swojej sieci."),
        h3("Oprocentowanie, RRSO i przykład reprezentatywny w panelu strony"),
        p("Jeśli na stronie pojawia się oprocentowanie albo przykładowa rata, panel wymaga wpisania RRSO, przykładu reprezentatywnego i daty, a bez nich nie opublikuje bloku. Data stoi obok liczby, więc przykład sprzed miesiąca nie udaje dzisiejszej oferty."),

        h2("Wynagrodzenie pośrednika kredytowego i banki partnerskie na stronie: tekstem, nie logotypami"),
        p("Zanim klient zadzwoni, chce wiedzieć dwie rzeczy: czy usługa jest dla niego bezpłatna i z iloma bankami pracujesz. Jedna krótka sekcja odpowiada na oba pytania:"),
        li("kto płaci za Twoją pracę — bank w formie prowizji, klient, czy obie strony — i w którym momencie"),
        li("z iloma bankami masz umowy i przy jakich kredytach pomagasz"),
        li("co robisz na każdym etapie: analiza zdolności, wybór ofert, wniosek, decyzja, umowa, uruchomienie środków"),
        p("Ściana logotypów banków mówi mniej, niż się wydaje, a umowy z bankami mogą ograniczać używanie ich znaków w reklamie — sprawdź swoje, zanim wymienisz kogoś z nazwy."),

        h2("Krótki formularz na stronie pośrednika kredytowego i rozmowa umówiona w kalendarzu"),
        p("Formularz długi jak wniosek kredytowy odstrasza ludzi, którzy dopiero porównują ekspertów. Strona pyta o cztery–pięć rzeczy: cel kredytu, orientacyjną cenę nieruchomości, miasto, termin i preferowany kontakt. Na ekranie potwierdzenia klient od razu wybiera wolny termin rozmowy z Twojego kalendarza."),
        li("w formularzu nie ma pól na PESEL, dochody ani numery kont"),
        li("klauzula informacyjna RODO i osobna, niezaznaczona zgoda na kontakt telefoniczny w celach marketingowych"),
        li("każde zgłoszenie z informacją, z której podstrony przyszło, trafia na maila, do CRM albo do obu"),
        li("ochrona przed spamem, która nie każe klientom rozwiązywać zagadek"),

        h2("Dokumenty do kredytu hipotecznego: bezpieczne przesyłanie zamiast maila i komunikatora"),
        p("Zaświadczenie o zarobkach, PIT-y, wyciągi z konta, umowa przedwstępna czy odpis z księgi wieczystej nie powinny krążyć po skrzynkach mailowych ani czatach. Strona ich nie zbiera. Przycisk „Prześlij dokumenty” w nagłówku prowadzi do bezpiecznego kanału, z którego już korzystasz: portalu klienta w systemie sieci, CRM-u albo szyfrowanego udostępniania plików."),
        p("Obok stoi podstrona z listą dokumentów na każdy etap — przed analizą zdolności, do wniosku, przed podpisaniem umowy — zapisaną zwykłym językiem, żeby komplet przyszedł za pierwszym razem. Krótka informacja o tym, jak chronisz dane klienta, zgadza się z Twoją polityką prywatności."),

        h2("Kalkulator raty kredytu hipotecznego, który pokazuje swoje założenia"),
        p("Kalkulator na stronie eksperta odpowiada na trzy pytania: ile wyniesie rata, ile mogę pożyczyć przy moim dochodzie i czy opłaca się refinansowanie. Piszę go w kodzie strony zamiast wklejać cudzy widżet, więc działa szybko, wygląda jak reszta strony i przekazuje wynik do formularza."),
        li("rata: kwota, okres, raty równe lub malejące, oprocentowanie rozbite na marżę i stopę referencyjną"),
        li("zdolność: dochód netto, liczba osób w gospodarstwie domowym, inne raty i limity kart, wynik jako przedział, a nie jedna kwota"),
        li("refinansowanie: obecne saldo i rata wobec nowej oferty, razem z kosztami zmiany"),
        p("Każda wartość, której klient nie wpisuje sam — marża, stopa, przyjęte koszty utrzymania — jest widoczna, da się ją zmienić i ma datę. Wynik jest opisany jako szacunek, a jeden przycisk przenosi go do formularza, więc przed rozmową znasz liczby klienta."),

        h2("Profil eksperta kredytowego i opinie klientów z Google na stronie"),
        p("Klient wybiera człowieka, z którym przejdzie przez kilka tygodni formalności. Każdy ekspert w biurze ma podstronę z jednego szablonu: zdjęcie, kilka zdań o sobie w pierwszej osobie, numer wpisu do rejestru, miasta, języki, kredyty, przy których pracuje najczęściej, i własny link do kalendarza."),
        p("Opinie pochodzą z wizytówki Google, ze źródłem, datą i oceną, od najnowszych, a nie jako wybrane pięciogwiazdkowe cytaty. Przepisy o nieuczciwych praktykach rynkowych wymagają od firmy, która publikuje opinie, informacji, czy i jak sprawdza, że pochodzą od klientów — przy bloku opinii jest na nią stałe miejsce."),

        h2("Strona z kreatora, profil w sieci czy strona pośrednika kredytowego na zamówienie"),
        p("Wielu ekspertów zaczyna od profilu na stronie sieci albo od kreatora z szablonem. To rozsądny start, gdy klienci przychodzą głównie z poleceń, a sieć pilnuje danych prawnych za Ciebie."),
        p(
          "Strona na zamówienie opłaca się, gdy kalkulator i formularz mają trafiać do Twojego CRM-u, gdy domena i treści mają zostać z Tobą po zmianie sieci albo gdy obsługujesz cudzoziemców i potrzebujesz pełnej wersji angielskiej lub ukraińskiej, a nie automatycznego tłumaczenia — o tym na stronie ",
          link("tworzenie stron wielojęzycznych", "/pl/oferty/tworzenie-stron-wielojezycznych"),
          ". Jeśli działasz jako agent, warunki własnej strony określa umowa agencyjna, więc o nią pytam na początku.",
        ),
        h3("Landing page dla doradcy kredytowego pod jedną kampanię"),
        p(
          "Kampania skierowana do jednej grupy — kupujących pierwsze mieszkanie w jednym mieście albo osób na kontraktach B2B — działa lepiej na osobnej stronie z jednym formularzem i tą samą stopką z danymi z rejestru niż na stronie głównej. Buduję takie strony w tym samym systemie; więcej na stronie ",
          link("tworzenie landing page", "/pl/oferty/tworzenie-landing-page"),
          ".",
        ),

        h2("Szybkość i dostępność strony pośrednika kredytowego na telefonie"),
        p("Większość pierwszych wizyt to telefon i link z SMS-a albo WhatsAppa. Główna treść pojawia się w mniej niż 2,5 sekundy, strona od razu reaguje na dotknięcie i nie przeskakuje, gdy ładują się czcionki czy opinie, a kalkulator ładuje się dopiero wtedy, gdy ktoś go używa."),
        p("Europejski akt o dostępności od czerwca 2025 roku obejmuje między innymi usługi bankowości detalicznej, w tym umowy o kredyt hipoteczny. Czy i w jakim zakresie dotyczy Twojej firmy, zależy od jej roli i wielkości — mikroprzedsiębiorcy świadczący usługi są zwolnieni. Niezależnie od tego strona spełnia WCAG 2.2 na poziomie AA: etykiety przy polach, odpowiedni kontrast, obsługa klawiaturą i komunikaty błędów odczytywane przez czytniki ekranu."),

        h2("Strona pośrednika kredytowego, którą ChatGPT i Google AI Overviews potrafią przeczytać"),
        p("Klienci wpisują w ChatGPT, Perplexity albo w wyszukiwarkę z podsumowaniami AI pytania typu „ekspert kredytowy w Poznaniu, który zna kredyty na B2B”, „pośrednik kredytowy we Wrocławiu mówiący po ukraińsku”. Asystent poleci tylko kogoś, o kim potrafi przeczytać. Dlatego imię i nazwisko, numer wpisu, miasta, języki, rodzaje kredytów i dane kontaktowe są tekstem na stronie, zgodnie z wizytówką Google i rejestrem KNF. Dane strukturalne FinancialService i Person opisują firmę i każdego eksperta, a informacje prawne są w HTML-u, nie na obrazkach ani w PDF-ach."),
        p(
          "Czy asystenci zaczną Cię polecać, zależy od dalszej pracy, którą opisuję na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Ile kosztuje strona internetowa dla pośrednika kredytowego"),
        p("Projekt graficzny jest w cenie w obu wariantach:"),
        li("Strona pośrednika kredytowego — strona główna, „O mnie”, informacje o pośredniku, krótki formularz z kalendarzem i przycisk do bezpiecznego przesyłania dokumentów: od 3000 do 6000 zł."),
        li("Pełna strona z profilami ekspertów, kalkulatorem raty i zdolności, opiniami z Google, połączeniem z CRM, wersją językową i danymi strukturalnymi: od 8500 zł."),
        p("Domena i hosting są zarejestrowane na Ciebie, a abonamentu u mnie nie ma. Praca idzie w czterech krokach:"),
        ol("Brief: numer wpisu, miasta, eksperci, CRM, kanał na dokumenty i zasady sieci dotyczące stron."),
        ol("Propozycja podstron ze stałą ceną."),
        ol("Projekt w wersji na telefon: strona startowa, formularz i profil eksperta, z zaznaczonymi wszystkimi danymi prawnymi do sprawdzenia."),
        ol("Wykonanie, uruchomienie z analityką po zgodzie i krótkie szkolenie z panelu."),
        p(
          "Wszystkie ceny znajdziesz w ",
          link("cenniku", "/pl/cennik"),
          ", a mój sposób pracy nad stronami na stronie ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ". Widoczność gotowych podstron w Google to osobna praca, opisana na stronie ",
          link("pozycjonowanie strony pośrednika kredytowego", "/pl/pozycjonowanie-strony-posrednika-kredytowego"),
          ", a agenci nieruchomości, z którymi współpracujesz, znajdą swoją: ",
          link("strona internetowa dla agenta nieruchomości", "/pl/strona-internetowa-dla-agenta-nieruchomosci"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strona internetowa dla pośrednika kredytowego: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona internetowa dla pośrednika kredytowego?", "Od 3000 do 6000 zł za stronę z danymi z rejestru, krótkim formularzem i kalendarzem rozmów, od 8500 zł za pełną stronę z profilami ekspertów, kalkulatorem, połączeniem z CRM i wersją językową. Projekt graficzny jest w cenie. Pierwsza rozmowa, 15–30 minut, jest bezpłatna, a po niej podaję stałą cenę."],
          ["Gdzie na stronie eksperta kredytowego umieścić dane z rejestru KNF?", "Najprościej w stopce każdej podstrony i na osobnej podstronie z informacjami o pośredniku, a przy agencie także w jego profilu. Zakres obowiązkowych informacji sprawdź w przepisach i w swojej sieci; to ogólny opis, nie porada prawna."],
          ["Czy klienci mogą wysłać dokumenty przez stronę?", "Zaczynają na stronie, ale pliki trafiają do bezpiecznego kanału, którego już używasz — portalu sieci, CRM-u albo szyfrowanego udostępniania plików — a nie na serwer strony czy na maila. Strona ma przycisk do tego kanału i listę dokumentów na każdy etap."],
          ["Czy kalkulator może pokazywać aktualne oprocentowanie banków?", "Może korzystać z wartości, które ustawiasz w panelu, z datą przy każdej z nich. Bez stałego źródła danych bezpieczniejszy jest datowany przykład z RRSO, który klient może zmienić, niż liczba udająca dzisiejszą ofertę banku."],
          ["Czy agent działający w sieci może mieć własną stronę?", "Tak, jeśli pozwala na to umowa agencyjna. W stopce stoi wtedy nazwa pośrednika, w imieniu którego działasz, a domena i treści należą do Ciebie, więc po zmianie sieci wymieniasz dane w stopce, a nie całą stronę."],
          ["Jak wygląda zdalna współpraca nad stroną pośrednika kredytowego?","Pracuję zdalnie z Warszawy z pośrednikami z całej Polski. Rozmawiamy przez wideo po polsku, angielsku albo rosyjsku, projekt komentujesz we wspólnym pliku, a na koniec dostajesz fakturę."],
          ["Czy strona pośrednika kredytowego pojawi się w odpowiedziach ChatGPT?", "Nikt nie może tego zagwarantować. Strona usuwa typowe przeszkody: dane ukryte w grafikach, PDF-ach i skryptach. Numer wpisu, miasta, języki i eksperci są tekstem z danymi strukturalnymi, a dalszą pracę nad obecnością w odpowiedziach AI też prowadzę."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową dla pośrednika kredytowego: co mi wysłać"),
        p(
          "Wyślij nazwę firmy i numer wpisu do rejestru KNF, link do obecnej strony albo profilu w sieci, miasta, w których pracujesz, liczbę ekspertów do pokazania, nazwę CRM-u i kanału na dokumenty oraz zasady dotyczące stron, jeśli ustala je sieć. Dwie–trzy strony innych ekspertów, które Ci się podobają, też pomogą. Danych klientów proszę nie wysyłać. Odpowiem listą podstron i stałą ceną. Skorzystaj z ",
          link("formularza powyżej", "#quote"),
          " albo napisz na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
