// Landing page fixture: Pozycjonowanie strony pośrednika kredytowego (PL), group
// «mortgage-broker-seo». New page. Market version for Polish pośrednicy kredytu
// hipotecznego, eksperci kredytowi (own firms and agents in franchise networks),
// not a translation of mortgage-broker-seo.en.
// Semantic core (ref/real-estate-finance.md): no PL phrases above the floor for
// mortgage; headings carry «pozycjonowanie strony pośrednika kredytowego»,
// «pozycjonowanie pośrednika kredytu hipotecznego», «ekspert kredytowy»,
// «kredyt hipoteczny dla obcokrajowca», «kalkulator zdolności kredytowej»,
// «strona internetowa pośrednika kredytowego». PL PAA in the core are about
// real estate agents (prowizja, Otodom vs OLX) — not used here.
// Intent (ref/intent-check-real-estate-finance.md): EN «mortgage broker seo» vs
// «mortgage broker website design» 0 shared URLs → the website is one H2 here,
// not the topic. SERP for Polish phrases not checked; buyers’ demand assumed as
// for other PL SEO pages; Bankier.pl and porównywarki kredytów hold the
// informational phrases (named as competitors).
// Angle: rejestr pośredników kredytu hipotecznego prowadzony przez KNF (general,
// no article numbers), restrictions on «doradca/doradztwo» (general),
// RRSO and representative example in ads (general), podstrony kredytów
// (pierwsze mieszkanie, refinansowanie, dla obcokrajowców, dla JDG/B2B),
// cities and wizytówka Google, kalkulatory i poradniki vs porównywarki,
// współpraca z agentami nieruchomości i deweloperami, ekspert w sieci vs own
// site and personal brand, RODO on forms, AI answers, results in wnioski and
// umowy kredytowe.
// NOT on this page: real estate agent SEO
// (/pl/pozycjonowanie-strony-agenta-nieruchomosci, linked once); building the
// site in detail (/pl/oferty/tworzenie-stron-internetowych, linked once);
// wizytówka Google in depth (/pl/oferty/pozycjonowanie-lokalne, linked once);
// Google Ads, social media, buying leads (not offered).
// Owner’s rules: PL form «pozycjonowanie strony X»; every SEO page covers AI
// search (GEO, AEO); never say there are no clients from the visitor’s segment;
// regulation in general terms, «nie porada prawna».
import { p, h2, h3, li, link, k } from "./pt";

export const mortgageBrokerSeoPl = {
  lang: "pl",
  group: "mortgage-broker-seo",
  slug: "pozycjonowanie-strony-posrednika-kredytowego",
  title: "Pozycjonowanie strony pośrednika kredytowego",
  heading: "Pozycjonowanie strony pośrednika kredytowego",
  excerpt:
    "Zajmuję się pozycjonowaniem stron pośredników kredytu hipotecznego i ekspertów kredytowych: podstrony kredytów i sytuacji klientów, miasta i wizytówka Google, dane z rejestru KNF w widocznym miejscu, szybka droga do wniosku i widoczność w odpowiedziach AI — z wynikiem liczonym w wnioskach, a nie w odsłonach.",
  seo: {
    metaTitle: "Pozycjonowanie pośrednika kredytu hipotecznego | Bandziuk",
    metaDescription:
      "Pozycjonowanie strony pośrednika kredytowego: podstrony kredytów, miasta, wizytówka Google, dane z rejestru KNF, odpowiedzi AI. Audyt SEO od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Kredyty, miasta i odpowiedzi AI", "Audyt od 1000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Ekspert kredytowy Wrocław", "Kredyt hipoteczny na B2B", "Umów rozmowę", "Poleca ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO strony pośrednika kredytowego: podstrony kredytów, wizytówka Google, konkurencja, AI", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO dla eksperta kredytowego: podstrony kredytów i miast, dane strukturalne, poprawki", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie strony pośrednika kredytu hipotecznego", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje pozycjonowanie strony pośrednika kredytowego",
      items: [
        { _key: k("o"), iconName: "layers", title: "Podstrona dla każdego kredytu i sytuacji", text: "Pierwsze mieszkanie, refinansowanie, B2B, obcokrajowcy" },
        { _key: k("o"), iconName: "map-pin", title: "Miasta i wizytówka Google eksperta", text: "Biuro, dojazd do klienta, opinie po podpisaniu umowy" },
        { _key: k("o"), iconName: "shield-check", title: "Dane z rejestru KNF i ostrożne sformułowania", text: "Numer wpisu, status, RRSO tam, gdzie potrzebne" },
        { _key: k("o"), iconName: "message-circle", title: "Wersje dla klientów z zagranicy", text: "Angielski, ukraiński lub rosyjski — gdy ich obsługujecie" },
        { _key: k("o"), iconName: "sparkles", title: "Widoczność w odpowiedziach AI", text: "ChatGPT, Perplexity i podsumowania AI w Google" },
        { _key: k("o"), iconName: "trending-up", title: "Raport we wnioskach i umowach", text: "Z wyszukiwarki, bez żadnych danych klientów" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO strony pośrednika kredytowego", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe pozycjonowanie pośrednika kredytu hipotecznego", value: "od 3500 zł / mies.", note: "podstrony, wizytówka, AI, raporty", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: strony nieruchomości i firm usługowych, które budowałem i pozycjonowałem",
      subtitle:
        "Cyprus VIP Estates to platforma luksusowych nieruchomości na Cyprze, którą zaprojektowałem i zbudowałem od zera i którą co miesiąc pozycjonuję: katalog z filtrami i mapą, integracja z CRM, wersje językowe, w tym polska, i zapytania od kupujących — tych samych ludzi, którzy potem szukają finansowania. Obok niej warszawska firma remontowo-inwestycyjna, firma skanowania laserowego 3D i modelowania BIM, której ruch organiczny wzrósł 29 razy, wielojęzyczny serwis agencji edukacyjnej dla dziesięciu krajów i warsztat samochodowy z Warszawy. W każdym z tych projektów usługa ma własną podstronę i krótką drogę do zapytania — tak samo powinny działać kredyty na stronie pośrednika.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "build-and-optimize-a-multilingual-real-estate-platform",
        "renovation-and-investment-website-with-premium-design",
        "architecture-website-rebuild-and-seo-scan",
        "full-multilingual-website-development-and-seo-for-student-services",
        "auto-repair-seo-and-ux-boost",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena pozycjonowania strony pośrednika kredytowego",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: od których kredytów i miast zacząłbym pracę i za jaką stałą cenę. Proszę nie przesyłać danych klientów.",
      contextLabel: "Nazwa firmy lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Jak działacie?", options: ["Własna firma pośrednicza", "Ekspert w sieci lub franczyzie", "Biuro z kilkoma ekspertami", "Kilka oddziałów"] },
        { _key: k("z"), question: "Skąd teraz przychodzą klienci?", options: ["Od agentów nieruchomości i deweloperów", "Z poleceń", "Z Google i Map Google", "Z kupowanych leadów", "Nie wiem"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Pozycjonowanie strony pośrednika kredytowego to praca nad tym, żeby osoba, która szuka kredytu hipotecznego, refinansowania albo eksperta w swoim mieście, trafiła z Google na Waszą stronę, a nie do porównywarki — i umówiła rozmowę. Robię to sam: audyt, podstrony kredytów, wizytówkę Google, poprawki w kodzie i raporty. Wynik liczę we wnioskach i podpisanych umowach kredytowych, a nie w odsłonach."),

        h2("Pozycjonowanie pośrednika kredytu hipotecznego: co obejmuje usługa"),
        p("Klient szukający kredytu rzadko wpisuje „pośrednik kredytowy”. Wpisuje swoją sytuację: „kredyt hipoteczny na umowę B2B”, „zdolność kredytowa singla 8000 netto”, „kredyt bez wkładu własnego”, „refinansowanie kredytu hipotecznego Gdańsk”. Pozycjonowanie pośrednika łączy w jedną listę zadań:"),
        li("podstrony kredytów i typowych sytuacji klientów, każda pod inne wyszukiwanie"),
        li("miasta, w których macie biuro albo spotykacie się z klientami, i wizytówkę Google"),
        li("dane pośrednika i sformułowania, które wytrzymają przegląd zgodności"),
        li("szybką stronę z krótką drogą do rozmowy"),
        li("widoczność w ChatGPT, Perplexity i podsumowaniach AI w Google"),

        h2("Z kim konkuruje strona eksperta kredytowego w Google: banki, Bankier i porównywarki"),
        p("Na frazy typu „ranking kredytów hipotecznych” czy „oprocentowanie kredytu hipotecznego” wysoko są banki, Bankier.pl, porównywarki i duże sieci pośrednicze. Walka z nimi o ogólne frazy rzadko się opłaca. Pośrednik wygrywa tam, gdzie liczy się sytuacja konkretnego człowieka i miasto: dochód z zagranicy, działalność od roku, mieszkanie od dewelopera w Krakowie, spłata kredytu we frankach. Porównywarka pokaże tabelę, ale nie odpowie, który bank przyjmie taki dochód. To jest Wasza przewaga i na niej buduję mapę fraz."),

        h2("Rejestr KNF i dane pośrednika kredytu hipotecznego na stronie internetowej"),
        p("Google zalicza treści o kredytach do tematów, w których błąd może komuś zaszkodzić finansowo (YMYL), i patrzy, kto za nimi stoi. W przypadku pośrednika to w dużej mierze te same informacje, których oczekuje nadzór. Pośrednicy kredytu hipotecznego i ich agenci są wpisani do rejestru prowadzonego przez KNF, więc na stronie warto podać:"),
        li("pełną nazwę firmy i numer wpisu do rejestru, a przy agencie — w imieniu którego pośrednika działa"),
        li("z iloma bankami współpracujecie, zamiast ogólnego „najlepsza oferta na rynku”"),
        li("imię, nazwisko i zdjęcie eksperta przy każdym poradniku, z datą aktualizacji"),
        p("Reklama kredytu ma swoje wymogi: przy podawaniu oprocentowania zwykle potrzebna jest RRSO z reprezentatywnym przykładem. Określenia „doradca” i „doradztwo” w odniesieniu do kredytu hipotecznego wiążą się z dodatkowymi warunkami, więc sprawdźcie, czy Wasz status na nie pozwala. Nie obiecuję w tekstach „gwarancji kredytu” ani „kredytu mimo BIK”. To ogólny opis, nie porada prawna — wiążące są przepisy, stanowisko KNF i zasady Waszej sieci."),

        h2("Podstrony kredytów na stronie pośrednika: każda sytuacja klienta pod inne wyszukiwanie"),
        p("Jedna podstrona „Oferta” z listą produktów nie wyjdzie wysoko na żadną frazę. Każdy kredyt i każda częsta sytuacja dostaje własną podstronę: dla kogo, jakie dokumenty, ile zwykle trwa, co robi ekspert na każdym etapie."),
        h3("Kredyt hipoteczny na pierwsze mieszkanie i wkład własny"),
        p("Kupujący pierwsze mieszkanie czytają dużo i porównują długo. Podstrona tłumaczy, skąd wziąć wkład własny, jak działa rynek wtórny i pierwotny od strony banku, i jakie programy rządowe są dostępne, jeśli akurat działają — z datą sprawdzenia, bo zasady się zmieniają."),
        h3("Kredyt hipoteczny dla przedsiębiorcy: JDG, B2B i ryczałt"),
        p("Programiści i specjaliści na kontraktach B2B to duża grupa, którą banki oceniają różnie. Podstrona o tym, jak liczona jest zdolność przy JDG, ryczałcie czy krótkim stażu działalności, przyciąga klientów, którym bank już raz odmówił."),
        h3("Kredyt hipoteczny dla obcokrajowca"),
        p("Cudzoziemcy z kartą pobytu szukają po angielsku, ukraińsku albo rosyjsku. Jeśli rozmawiacie w tych językach, osobna wersja tej podstrony z własnym adresem i oznaczeniem hreflang daje więcej niż tłumaczenie całej strony."),
        h3("Refinansowanie i przeniesienie kredytu"),
        p("Gdy stopy się zmieniają, rośnie liczba wyszukiwań o refinansowaniu. Podstrona napisana wcześniej jest już zaindeksowana, kiedy przychodzi fala zapytań."),

        h2("Pozycjonowanie lokalne pośrednika kredytowego: miasta i wizytówka Google"),
        p(
          "Przy wyszukiwaniach „ekspert kredytowy Poznań” czy „pośrednik kredytowy Wola” nad wynikami pojawia się mapa. Wizytówka Google z właściwą kategorią, prawdziwym adresem biura i opiniami klientów po podpisaniu umowy to często najszybsze źródło telefonów. Ekspert, który dojeżdża do klientów, może ustawić obszar działania bez publicznego adresu. Podstrony miast mają sens tam, gdzie naprawdę pracujecie i znacie lokalnych deweloperów; kilkadziesiąt kopii z podmienioną nazwą miasta Google traktuje jak spam. Całą pracę nad Mapami opisuję na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Kalkulator zdolności kredytowej i poradniki na stronie eksperta kredytowego"),
        p("Ludzie miesiącami sprawdzają, „ile mogę dostać kredytu, zarabiając 10 tys. netto”, „jakie koszty przy kredycie hipotecznym” albo „ile trwa decyzja kredytowa”. Kalkulator na Waszej stronie zatrzymuje ich u Was zamiast w porównywarce, pod warunkiem że ma opisane założenia i zastrzeżenie, że wynik jest szacunkowy. Każdy poradnik kończy się linkiem do podstrony kredytu, którego dotyczy, i przyciskiem do umówienia rozmowy."),

        h2("Współpraca z agentami nieruchomości i deweloperami w pozycjonowaniu pośrednika"),
        p(
          "Duża część klientów pośrednika przychodzi od agentów i deweloperów. Wyszukiwarka może tę współpracę wzmocnić: podstrony inwestycji, przy których pomagacie w finansowaniu, wspólne poradniki z biurami nieruchomości i linki ze stron partnerów. Agent przed poleceniem klienta sprawdza Wasze nazwisko w Google, więc strona powinna dobrze wypadać także w tej sytuacji. Agentów, którzy chcą pracować nad własną widocznością, odsyłam na stronę ",
          link("pozycjonowanie strony agenta nieruchomości", "/pl/pozycjonowanie-strony-agenta-nieruchomosci"),
          ".",
        ),

        h2("Ekspert kredytowy w sieci czy własna strona: pozycjonowanie nazwiska i marki osobistej"),
        p("Wielu ekspertów pracuje w sieciach i franczyzach, które dają gotową podstronę profilu. Taki profil jest jednym z setek podobnych i należy do sieci. Klient z polecenia wpisuje jednak Wasze imię i nazwisko, a po zmianie sieci profil znika. Własna strona z nazwiskiem w adresie, opiniami i poradnikami zostaje z Wami. Zanim ją uruchomicie, sprawdźcie, co mówi umowa z siecią o własnych stronach i używaniu jej marki."),

        h2("Strona internetowa pośrednika kredytowego: szybkość i krótka droga do rozmowy"),
        p("Strona pośrednika ma jedno zadanie: doprowadzić do rozmowy z ekspertem. Co ma znaczenie:"),
        li("główna treść każdej podstrony widoczna w ciągu 2,5 sekundy na telefonie"),
        li("krótki pierwszy formularz — cel kredytu, kwota, miasto, kontakt — bez PESEL-u i zaświadczeń"),
        li("dokumenty przesyłane później bezpiecznym kanałem, a nie zwykłym mailem"),
        li("informacja o przetwarzaniu danych zgodna z RODO przy każdym formularzu"),
        li("przycisk połączenia i kalendarz rozmów widoczne na każdej podstronie"),
        p(
          "Jeśli strona wymaga przebudowy, prosta strona pośrednika kosztuje 3000–6000 zł, a pełna, z podstronami kredytów i kalkulatorem, od 8500 zł, z projektem w cenie. Szczegóły na stronie ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ".",
        ),

        h2("Pozycjonowanie pośrednika kredytowego w ChatGPT i Google AI Overviews (GEO, AEO)"),
        p("Ludzie pytają ChatGPT, Perplexity i podsumowania AI w Google, czy opłaca się pośrednik kredytowy, który bank da kredyt na B2B albo kogo wybrać do kredytu w Lublinie. Przy tematach finansowych asystenci wybierają źródła, które pokazują, kto stoi za radą. Pracę nad obecnością w takich odpowiedziach nazywa się GEO (generative engine optimization) albo AEO (answer engine optimization):"),
        li("numer wpisu do rejestru KNF, miasta, języki i rodzaje kredytów zapisane prostymi zdaniami"),
        li("odpowiedzi na pytania klientów na podstronach kredytów, z autorem i datą"),
        li("dane strukturalne firmy, ekspertów i biur"),
        li("te same dane na stronie, w wizytówce Google i w profilu w sieci"),
        p(
          "Na początku i po kilku miesiącach pytam asystentów o kredyty w Waszym mieście i zapisuję, kogo polecają. Więcej na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Jak mierzę wyniki pozycjonowania pośrednika kredytowego: wnioski i umowy kredytowe"),
        p("Kupowane leady często trafiają do kilku pośredników naraz, a klient z wyszukiwarki sam wybrał Waszą podstronę. W raporcie liczę telefony, formularze i umówione rozmowy z Google, mierzone w GA4, a jeśli Wasz CRM zapisuje źródło klienta — także złożone wnioski i podpisane umowy. Raport zawiera tylko liczby, bez danych klientów. Poprawki i wizytówka działają w kilka tygodni, nowe podstrony kredytów zwykle w dwa–cztery miesiące, w Warszawie i Krakowie dłużej."),

        h2("Ile kosztuje pozycjonowanie strony pośrednika kredytowego"),
        li("Audyt SEO strony, wizytówki, konkurencji i odpowiedzi AI: od 1000 zł, jednorazowo, z listą poprawek według wpływu."),
        li("Jednorazowe prace — podstrony kredytów i miast, dane strukturalne, poprawki techniczne: od 1000 do 3000 zł."),
        li("Stałe pozycjonowanie strony pośrednika kredytu hipotecznego — podstrony, poradniki, wizytówka, AI i raporty: od 3500 zł miesięcznie, w dużych miastach przy silnej konkurencji od 5500 zł miesięcznie."),
        p(
          "Ekspertowi w mniejszym mieście często wystarczą audyt i kilka mocnych podstron. Pełne widełki są w ",
          link("cenniku", "/pl/cennik"),
          ", opis audytu na stronie ",
          link("audyt SEO strony internetowej", "/pl/oferty/audyt-seo-strony-internetowej"),
          ", a moje podejście do stałej pracy na stronie ",
          link("strategia i optymalizacja SEO", "/pl/oferty/strategia-i-optymalizacja-seo"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie strony pośrednika kredytowego: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje pozycjonowanie strony pośrednika kredytowego?", "Stałe pozycjonowanie kosztuje od 3500 zł miesięcznie, w dużych miastach przy silnej konkurencji od 5500 zł. Audyt to od 1000 zł jednorazowo, a pojedyncze prace od 1000 do 3000 zł. Po krótkim opisie firmy, kredytów i miast podaję stałą cenę."],
          ["Czy pośrednik kredytowy może wygrać w Google z bankami i porównywarkami?", "Na ogólne frazy rzadko. Na frazy z sytuacją klienta i miastem — kredyt na B2B, dla obcokrajowca, refinansowanie w Gdańsku — tak, bo porównywarka nie odpowiada na takie pytania tak dokładnie jak ekspert."],
          ["Czy na stronie trzeba podać numer wpisu do rejestru KNF?", "Podanie nazwy firmy i numeru wpisu, a przy agencie także pośrednika, w imieniu którego działa, to dobra praktyka i sygnał zaufania dla Google i klientów. Szczegółowe obowiązki sprawdźcie w przepisach i w swojej sieci; to nie jest porada prawna."],
          ["Czy pozycjonowanie ma sens, jeśli pracuję w sieci pośredniczej?", "Tak, jeśli umowa z siecią pozwala na własną stronę. Profil w sieci należy do niej i znika po zmianie, a własna strona z nazwiskiem, opiniami i poradnikami zostaje z Wami."],
          ["Czy kalkulator zdolności kredytowej pomaga w pozycjonowaniu?", "Pomaga, gdy ma opisane założenia, zastrzeżenie, że wynik jest szacunkowy, i link do rozmowy z ekspertem. Sam kalkulator bez tekstu rzadko wychodzi wysoko."],
          ["Czy ChatGPT poleca ekspertów kredytowych?", "Tak, gdy ktoś o to zapyta. Asystent wybiera osoby i firmy, o których znajduje sprawdzalne fakty: wpis do rejestru, miasto, rodzaje kredytów, opinie i poradniki z autorem."],
          ["Czy pracujesz z pośrednikami spoza Warszawy?", "Tak, z całej Polski. Pozycjonowanie robię zdalnie, na danych wyszukiwań dla Waszego miasta, a rozmawiamy przez wideo po polsku, angielsku albo rosyjsku."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie strony pośrednika kredytowego: co mi wysłać"),
        p(
          "Wyślijcie link do strony i do wizytówki Google, numer wpisu do rejestru KNF, miasta, w których pracujecie, kredyty, przy których chcecie więcej klientów, informację, czy działacie w sieci, i skąd teraz przychodzą klienci. Proszę nie przesyłać żadnych danych klientów. Odpowiem, co poprawiłbym najpierw i za jaką stałą cenę. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
