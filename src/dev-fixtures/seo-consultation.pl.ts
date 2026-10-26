// Landing page fixture: Konsultacje SEO (PL), group «seo-consultation»,
// nested under /pl/oferty. Photo hero like ai-seo-consultant.
// Target phrases (ref/general-services.md, PL): «konsultacje seo» 480,
// «konsultacje seo cena» 90 (cost H2 + FAQ). Related wording used naturally:
// «konsultacja SEO», «konsultacje SEO online», «druga opinia».
// Intent: ref/intent-check-general-services.md — «konsultacje seo» vs
// «specjalista seo» 0/10 shared URLs, 0 domains. The consultation SERP is
// consultants and agencies selling sessions and reviews (podrez.pl,
// semgence.pl, delante.pl, filipnocny.pl, jakubsawa.pl…); «specjalista seo» is
// job ads. So this page sells the FORMAT: when to book, how it runs, how to
// prepare, what you get, consultation vs audit vs ongoing work, cost.
// Prices (BRIEF): first call 15–30 min free; consultation with preparation and
// a written summary priced as an audit — od 1000 zł; regular consulting for a
// team — od 3500 zł miesięcznie. No hourly rate.
// NOT on this page: hiring a person / freelancer vs agency
// (/pl/oferty/freelancer-seo — one sentence + link); the full audit
// (/pl/oferty/audyt-seo-strony-internetowej); ongoing SEO work
// (/pl/oferty/strategia-i-optymalizacja-seo); migration in depth
// (/pl/migracja-strony-na-inna-platforme); AI search work in depth
// (/pl/oferty/pozycjonowanie-w-ai-i-chatgpt).
import { p, h2, h3, li, ol, link, k } from "./pt";

export const seoConsultationPl = {
  lang: "pl",
  group: "seo-consultation",
  slug: "konsultacje-seo",
  parentPath: ["oferty"],
  pageType: "service",
  title: "Konsultacje SEO",
  heading: "Konsultacje SEO: rozmowa o Waszej stronie i pisemny plan priorytetów",
  excerpt:
    "Konsultacje SEO prowadzę online: przygotowuję się na danych z Search Console, rozmawiamy o Waszej stronie i Waszych pytaniach, a potem dostajecie pisemne podsumowanie z priorytetami — dla siebie, programisty albo agencji.",
  seo: {
    metaTitle: "Konsultacje SEO online — cena i przebieg | Bandziuk",
    metaDescription:
      "Konsultacje SEO online: bezpłatna rozmowa 15–30 min, przygotowanie na danych z Search Console i pisemne podsumowanie z priorytetami. Od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Pierwsza rozmowa 15–30 min gratis", "Pisemne podsumowanie z priorytetami", "Po polsku, angielsku i rosyjsku"],
  heroVisual: "photo",
  heroPhoto: { _type: "image", asset: { _type: "reference", _ref: "image-f672c00fe2c4d1b2e6dfd5f64d9b65c50f20a3d1-446x559-png" }, alt: "Aliaksandr Bandziuk prowadzi konsultacje SEO online" },
  offers: [
    { _key: "offer1", _type: "offer", name: "Konsultacja SEO z przygotowaniem i pisemnym podsumowaniem", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Stałe konsultacje SEO dla zespołu marketingu i programistów", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Format konsultacji",
      title: "Co obejmuje konsultacja SEO",
      items: [
        { _key: k("o"), iconName: "search", title: "Przygotowanie przed rozmową", text: "Przeglądam Search Console, Analytics i wyniki Google dla Waszych fraz" },
        { _key: k("o"), iconName: "message-circle", title: "Rozmowa o Waszych pytaniach", text: "O konkretnej stronie i sytuacji, a nie wykład o SEO" },
        { _key: k("o"), iconName: "code", title: "SEO i programowanie w jednej osobie", text: "Pytania o kod, przekierowania i szablony bez przekazywania dalej" },
        { _key: k("o"), iconName: "file-text", title: "Pisemne podsumowanie", text: "Zadania według priorytetu i kto powinien je wykonać" },
        { _key: k("o"), iconName: "sparkles", title: "Pytania o ChatGPT i AI Overviews", text: "Kogo polecają asystenci AI i na jakich źródłach się opierają" },
        { _key: k("o"), iconName: "languages", title: "Polski, angielski i rosyjski", text: "Jedna rozmowa o wszystkich wersjach językowych strony" },
      ],
      prices: [
        { _key: k("r"), label: "Konsultacja SEO z podsumowaniem", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe konsultacje dla zespołu", value: "od 3500 zł / mies.", note: "rozmowy + przegląd zmian", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Strony, na których podjąłem te same decyzje co na konsultacjach SEO",
      subtitle:
        "Przebudowa strony z zachowaniem projektu, migracja 468 wpisów z przekierowaniami 301, rozbudowa z jednego kraju do dziesięciu, comiesięczne SEO serwisu w pięciu językach — o takie decyzje pytacie na konsultacji, a tu sam je wdrożyłem.",
      picks: [
        "architecture-website-rebuild-and-seo-scan",
        "psychotherapist-website-milan",
        "full-multilingual-website-development-and-seo-for-student-services",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "auto-repair-seo-and-ux-boost",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Umów konsultację SEO",
      subtitle: "Odpowiem w ciągu dnia roboczego. Pierwsza rozmowa (15–30 minut) jest bezpłatna: ustalimy, czy wystarczy konsultacja, czy lepszy będzie audyt albo stała współpraca.",
      contextLabel: "Adres strony",
      contextPlaceholder: "https://…",
      buttonText: "Wyślij i umów rozmowę",
      note: "Albo napiszcie na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Z czym przychodzicie na konsultację SEO?", options: ["Spadek ruchu", "Przebudowa lub migracja", "Druga opinia o agencji", "Inne pytania"] },
        { _key: k("z"), question: "Kto weźmie udział w rozmowie?", options: ["Właściciel firmy", "Marketingowiec", "Programista", "Cały zespół"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Konsultacje SEO prowadzę online: to rozmowa wideo — jedna albo kilka — o Waszej stronie i Waszych pytaniach, po której dostajecie pisemne podsumowanie z listą priorytetów. Przed rozmową przeglądam stronę, Google Search Console i Analytics, więc czas rozmowy idzie na decyzje, a nie na zbieranie danych. Pierwsza rozmowa, 15–30 minut, jest bezpłatna i służy do ustalenia, czy konsultacja w ogóle jest tym, czego potrzebujecie."),
        p(
          "Ta strona opisuje format konsultacji. Jeśli szukacie raczej osoby, która przejmie SEO na stałe, o współpracy z niezależnym specjalistą piszę na stronie ",
          link("freelancer SEO", "/pl/oferty/freelancer-seo"),
          ".",
        ),

        h2("Czym są konsultacje SEO i czym różnią się od szkolenia"),
        p("Konsultacja SEO to rozmowa o jednej konkretnej stronie i jednej sytuacji — Waszej. Nie uczę na niej SEO od podstaw i nie przechodzę przez gotową prezentację. Zaczynamy od Waszych pytań, a ja odpowiadam na podstawie danych z Search Console, kodu strony i tego, co widać w wynikach Google dla Waszych fraz."),
        p("Konsultacje mają dwie formy:"),
        li("pojedyncza konsultacja — jedna rozmowa albo krótka seria rozmów wokół jednego problemu, na przykład migracji albo spadku ruchu, zakończona pisemnym podsumowaniem"),
        li("stałe konsultacje — regularne rozmowy z Waszym marketingiem lub programistami, gdy SEO robicie sami, ale chcecie, żeby ktoś sprawdzał decyzje przed wdrożeniem"),
        p("W marketingu internetowym pracuję od 2010 roku: najpierw jako copywriter, potem w SEO, a od kilku lat także jako programista stron w Next.js i WordPressie. Dlatego pytania o treść, strukturę i kod mogę omówić w jednej rozmowie, bez odsyłania Was do kolejnej osoby."),

        h2("Kiedy warto zamówić konsultację SEO"),
        p("Najczęściej konsultacja jest właściwym formatem w jednej z sześciu sytuacji."),
        h3("Konsultacja SEO przed przebudową strony albo migracją na inną platformę"),
        p(
          "Najdroższe błędy w SEO zdarzają się przy zmianie strony: nowe adresy bez przekierowań 301, usunięte podstrony, które przynosiły ruch, treść schowana w skryptach. Na konsultacji przed projektem przechodzimy przez listę adresów do zachowania i ustalamy, co musi trafić do zadania dla wykonawcy. Samą przeprowadzkę opisuję na stronie o ",
          link("migracji strony na inną platformę", "/pl/migracja-strony-na-inna-platforme"),
          ".",
        ),
        h3("Konsultacja SEO po spadku ruchu z Google"),
        p("Spadek może mieć kilka przyczyn: aktualizację algorytmu, błąd techniczny po wdrożeniu, utratę pozycji na kilka kluczowych fraz, sezonowość albo zmianę sposobu liczenia w Analytics. Przed rozmową porównuję okresy w Search Console i sprawdzam, które podstrony straciły najwięcej. Na konsultacji dostajecie hipotezę popartą danymi, a nie listę ogólnych porad."),
        h3("Druga opinia o pracy agencji SEO"),
        p("Płacicie agencji co miesiąc, a raporty pokazują wykresy, które trudno ocenić? Sprawdzam, co zostało zrobione na stronie i poza nią, czy frazy z raportu przynoszą klientów i czy plan na kolejne miesiące ma sens. Druga opinia nie musi kończyć się zmianą wykonawcy — często wystarczy kilka konkretnych pytań, które zadacie agencji."),
        h3("Konsultacje SEO dla marketingowca i programisty w firmie"),
        p("Gdy SEO robi ktoś z zespołu, pojawiają się pytania, na które poradniki nie odpowiadają: jak ułożyć strukturę kategorii, co zrobić z duplikatami, jak oznaczyć wersje językowe, czy nowa funkcja w aplikacji nie zablokuje indeksowania. Odpowiadam na poziomie kodu, bo sam buduję strony."),
        h3("SEO czy Google Ads: konsultacja przed wyborem kanału"),
        p("Przy nowej stronie albo nowej usłudze pada pytanie, czy inwestować w pozycjonowanie, czy w reklamy. Sprawdzamy, jak wyglądają wyniki Google dla Waszych fraz, ile czasu i pracy wymaga ruch organiczny w tej niszy i kiedy reklama szybciej pokaże, czy usługa w ogóle się sprzedaje. Często najlepszy plan łączy oba kanały w różnych momentach."),
        h3("Konsultacja SEO przed uruchomieniem nowej wersji językowej"),
        p(
          "Wejście na nowy rynek to nie tylko tłumaczenie tekstów. Trzeba ustalić strukturę adresów, tagi hreflang, przetłumaczone adresy URL i frazy, których w danym kraju naprawdę się szuka. Budowę takich serwisów opisuję na stronie ",
          link("strony wielojęzyczne", "/pl/oferty/tworzenie-stron-wielojezycznych"),
          ".",
        ),

        h2("Jak przebiega konsultacja SEO krok po kroku"),
        ol("Bezpłatna rozmowa 15–30 minut. Opowiadacie, z czym przychodzicie, a ja mówię, czy konsultacja wystarczy, czy lepszy będzie audyt albo stała praca."),
        ol("Dostępy i pytania. Przesyłacie dostęp do odczytu w Search Console i Analytics oraz listę pytań, od najważniejszego."),
        ol("Przygotowanie. Przeglądam dane, stronę i wyniki wyszukiwania dla Waszych fraz, a przy migracji także listę obecnych adresów."),
        ol("Rozmowa online. Przechodzimy przez pytania, pokazuję na ekranie, co znalazłem, i od razu ustalamy, co jest pilne, a co może poczekać. Jeśli tematów jest więcej, dzielimy je na kilka rozmów."),
        ol("Pisemne podsumowanie. Po rozmowie dostajecie dokument z ustaleniami i priorytetami, który można przekazać programiście albo agencji."),
        p("Rozmawiamy przez komunikator wideo, którego używa Wasza firma, a ekran udostępniam po to, żeby każdy wniosek było widać na danych."),

        h2("Jak przygotować się do konsultacji SEO: dostępy, dane i lista pytań"),
        p("Im lepiej przygotowana rozmowa, tym więcej konkretów w podsumowaniu. Przed konsultacją przygotujcie:"),
        li("dostęp do odczytu w Google Search Console — to główne źródło wiedzy o tym, jak Google widzi stronę"),
        li("dostęp do Google Analytics 4 albo innego narzędzia, w którym widać ruch i konwersje"),
        li("listę pytań — lepiej pięć konkretnych niż jedno ogólne „jak poprawić SEO”"),
        li("przy migracji lub przebudowie: obecny adres strony, adres wersji testowej i planowaną datę zmiany"),
        li("przy drugiej opinii: ostatnie raporty agencji i zakres umowy"),
        li("informację, kto po konsultacji będzie wdrażał zmiany: Wasz programista, agencja czy ja"),
        p("Brak Search Console to też informacja. Pomogę ją skonfigurować, a pierwsze wnioski oprzemy na tym, co widać z zewnątrz: indeksacji, wynikach wyszukiwania i kodzie strony."),

        h2("Co dostajecie po konsultacji SEO: pisemne podsumowanie z priorytetami"),
        p("Po rozmowie przesyłam pisemne podsumowanie. To nie jest raport na kilkadziesiąt stron, tylko dokument roboczy, z którym można od razu zacząć pracę:"),
        li("odpowiedzi na Wasze pytania, razem z danymi, na których je oparłem"),
        li("listę zadań według priorytetu: co zrobić w tym tygodniu, co w tym miesiącu, a co może poczekać"),
        li("przy każdym zadaniu informację, kto powinien je wykonać — programista, autor treści czy osoba od marketingu"),
        li("ryzyka, które warto obserwować, na przykład po migracji albo zmianie struktury menu"),
        p("Podsumowanie zostaje u Was. Możecie wdrożyć je sami, przekazać obecnemu wykonawcy albo zlecić wdrożenie mnie jako osobny projekt."),

        h2("Konsultacja SEO, audyt SEO czy stała współpraca: który format wybrać"),
        p("Te trzy formaty odpowiadają na różne potrzeby:"),
        li("Konsultacja — macie konkretne pytania albo jedną decyzję do podjęcia. Patrzę na tę część strony, której dotyczy problem."),
        li(
          "Audyt — nie wiecie, gdzie leży przyczyna, i chcecie przeglądu całej strony: techniki, treści, struktury i linków. Zakres opisuję na stronie ",
          link("audyt SEO strony internetowej", "/pl/oferty/audyt-seo-strony-internetowej"),
          ".",
        ),
        li(
          "Stała współpraca — potrzebujecie kogoś, kto co miesiąc planuje, wdraża i mierzy. Taką pracę opisuje strona ",
          link("strategia i optymalizacja SEO", "/pl/oferty/strategia-i-optymalizacja-seo"),
          ".",
        ),
        p("Konsultacja z przygotowaniem kosztuje tyle co audyt, bo praca przed rozmową jest podobna. Różnica leży w zakresie: audyt obejmuje całą stronę, konsultacja odpowiada na Wasze pytania. Bywa, że konsultacja pokazuje potrzebę audytu — wtedy dane zebrane przed rozmową wykorzystuję dalej."),

        h2("Stałe konsultacje SEO dla zespołu marketingu i programistów"),
        p("Niektóre firmy mają własnego marketingowca, copywritera albo programistę i nie szukają wykonawcy SEO. Potrzebują kogoś, kto sprawdzi plan, zanim zespół poświęci na niego tydzień pracy. Stałe konsultacje kosztują od 3500 zł miesięcznie i obejmują:"),
        li("regularne rozmowy z zespołem w rytmie, który ustalamy razem"),
        li("przegląd zmian przed publikacją: nowych podstron, szablonów, przekierowań, tekstów"),
        li("odpowiedzi na piśmie między rozmowami, gdy pytanie nie może czekać"),
        li("comiesięczny przegląd danych z Search Console z wnioskami dla zespołu"),
        p("Dla zespołu oznacza to mniej zgadywania i mniej poprawek po wdrożeniu, a wiedza o SEO zostaje w firmie."),

        h2("Konsultacje SEO o widoczności w ChatGPT i Google AI Overviews"),
        p("Coraz więcej pytań na konsultacjach dotyczy wyszukiwania AI: dlaczego ChatGPT poleca konkurencję, czy podsumowania AI w Google odbierają stronie ruch, jak pisać podstrony, które asystenci cytują. To zwykła część konsultacji SEO, bo asystenci w dużej mierze korzystają z tych samych stron, które widzi Google."),
        p(
          "Odpowiadam na podstawie pomiarów: zadałem 47 pytań zakupowych ChatGPT, Perplexity i Google AI Mode i opublikowałem ",
          link("analizę 141 odpowiedzi", "/pl/blog/pozycjonowanie-w-ai-badanie"),
          ". Na konsultacji możemy sprawdzić kilka pytań Waszych klientów na żywo i zobaczyć, kogo asystenci wymieniają i na jakich źródłach się opierają. Dłuższą pracę nad tym opisuję na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Konsultacje SEO online po polsku, angielsku i rosyjsku"),
        p("Wszystkie konsultacje odbywają się zdalnie, z Warszawy. Rozmawiam po polsku, angielsku i rosyjsku, więc w jednej rozmowie możemy omówić polską wersję strony i wersje dla innych rynków. Pracuję z firmami w Polsce, w innych krajach Europy, w Wielkiej Brytanii, USA, na Cyprze i w Izraelu."),
        p("Rozliczenie jest proste: prowadzę jednoosobową działalność gospodarczą i za konsultację wystawiam fakturę. Termin rozmowy ustalamy tak, żeby pasował Waszemu zespołowi, także wtedy, gdy uczestnicy siedzą w różnych miastach."),

        h2("Konsultacje SEO: cena i od czego zależy"),
        p(
          "Pierwsza rozmowa, 15–30 minut, jest bezpłatna. Konsultacja z przygotowaniem i pisemnym podsumowaniem kosztuje od 1000 zł — tyle co audyt SEO. Stałe konsultacje dla zespołu to od 3500 zł miesięcznie. Ostateczna cena zależy od wielkości strony i liczby tematów: pytanie o kilka przekierowań to mniej pracy niż przegląd migracji kilkuset adresów w trzech językach. Wycenę podaję po bezpłatnej rozmowie, przed rozpoczęciem pracy. Wszystkie usługi i ceny są w ",
          link("cenniku", "/pl/cennik"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Konsultacje SEO: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje konsultacja SEO?", "Pierwsza rozmowa (15–30 minut) jest bezpłatna. Konsultacja z przygotowaniem na danych i pisemnym podsumowaniem kosztuje od 1000 zł, stałe konsultacje dla zespołu od 3500 zł miesięcznie. Dokładną cenę podaję po pierwszej rozmowie."],
          ["Czym konsultacja SEO różni się od audytu SEO?", "Audyt to przegląd całej strony, gdy nie wiadomo, gdzie leży problem. Konsultacja odpowiada na Wasze konkretne pytania i dotyczy tej części strony, z którą jest kłopot. Obie wymagają przygotowania na danych, dlatego kosztują podobnie."],
          ["Jakie dostępy są potrzebne do konsultacji SEO?", "Wystarczy dostęp do odczytu w Google Search Console i Google Analytics. Dostęp do panelu strony czy kodu nie jest potrzebny, chyba że pytania dotyczą konkretnych ustawień — wtedy uzgadniamy to wcześniej."],
          ["Co dostaję po konsultacji SEO?", "Pisemne podsumowanie: odpowiedzi na pytania, lista zadań według priorytetu i informacja, kto powinien wykonać każde z nich. Dokument można przekazać programiście albo agencji."],
          ["Czy po konsultacji możecie wdrożyć zmiany na stronie?", "Tak. Buduję strony w Next.js i WordPressie, więc wdrożenie mogę przejąć jako osobny projekt. Możecie też wdrożyć zmiany sami albo z obecnym wykonawcą — podsumowanie jest napisane tak, żeby to umożliwić."],
          ["Czy konsultacje SEO odbywają się zdalnie i czy dostanę fakturę?", "Tak, wszystkie rozmowy prowadzę online z Warszawy, po polsku, angielsku albo rosyjsku. Jako jednoosobowa działalność gospodarcza wystawiam fakturę."],
          ["Czy na konsultacji można zapytać o ChatGPT i AI Overviews?", "Tak, to coraz częstszy temat. Sprawdzamy na żywo kilka pytań Waszych klientów w asystentach AI i omawiamy, na jakich źródłach opierają odpowiedzi i co na stronie można poprawić."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Umów konsultację SEO: co przesłać przed bezpłatną rozmową"),
        p(
          "Napiszcie adres strony, w jednym–dwóch zdaniach opiszcie sytuację — spadek ruchu, migrację, drugą opinię o agencji — i dodajcie pierwsze pytania. Odpowiem w ciągu dnia roboczego i zaproponuję termin bezpłatnej rozmowy. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
