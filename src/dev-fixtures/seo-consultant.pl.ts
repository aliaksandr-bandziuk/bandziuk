// Landing page fixture: Freelancer SEO (PL), group «seo-consultant», market
// version (not a translation) of seo-consultant.en, nested under /pl/oferty.
// Photo hero (owner's portrait), like ai-seo-consultant.
// Semantic core: ref/general-services.md (PL): freelancer seo 880, seo
// freelancer 880, specjalista seo 390 (SERP = job ads → used only in one H2:
// «Specjalista SEO na zlecenie zamiast etatu»), freelancer pozycjonowanie 90,
// seo specjalista 70, specjalista seo freelancer 50.
// PAA: Czym jest freelancing? Ile kosztuje SEO miesięcznie? Czy SEO ma jeszcze
// sens? (→ H2 o kosztach, FAQ, H2 o AI).
// Intent: ref/intent-check-general-services.md — «freelancer seo» vs
// «specjalista seo» 0/10 (freelancer sites vs pracuj.pl, rocketjobs) →
// the page targets freelancer seo; «konsultacje seo» vs «specjalista seo» 0/10.
// NOT on this page: the consultation format (/pl/oferty/konsultacje-seo — one
// sentence + link); the SEO service list (/pl/oferty/strategia-i-optymalizacja-seo);
// audit detail (/pl/oferty/audyt-seo-strony-internetowej); Google Business
// Profile (/pl/oferty/pozycjonowanie-lokalne); AI visibility as the main job
// (/pl/oferty/pozycjonowanie-w-ai-i-chatgpt, /pl/oferty/ekspert-ai-seo).
// Invoice: the owner's JDG is VAT-exempt (zwolnienie podmiotowe, Sep 2026), so
// the page says «faktura z JDG» and that the VAT status is stated in the offer.
import { p, h2, li, ol, link, k } from "./pt";

export const seoConsultantPl = {
  lang: "pl",
  group: "seo-consultant",
  slug: "freelancer-seo",
  parentPath: ["oferty"],
  pageType: "service",
  title: "Freelancer SEO",
  heading: "Freelancer SEO: pozycjonowanie stron bez agencji i bez etatu",
  excerpt:
    "Jestem freelancerem SEO: sam robię audyt strony, wdrażam poprawki w kodzie i mierzę efekty w ruchu i zapytaniach — bez opiekuna klienta i podwykonawców pomiędzy Wami a osobą, która pracuje nad stroną.",
  seo: {
    metaTitle: "SEO freelancer: pozycjonowanie stron na zlecenie | Bandziuk",
    metaDescription:
      "Freelancer SEO z Warszawy: audyt, poprawki w kodzie strony i raporty w zapytaniach, a nie tylko pozycjach. Faktura z JDG, praca zdalna. Audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Bez agencji i pośredników", "Faktura z JDG w Warszawie", "Bezpłatna rozmowa 15–30 min"],
  // Desktop hero shows the owner's portrait instead of the phone sketch (the
  // same transparent-background photo as on the About page).
  heroVisual: "photo",
  heroPhoto: { _type: "image", asset: { _type: "reference", _ref: "image-f672c00fe2c4d1b2e6dfd5f64d9b65c50f20a3d1-446x559-png" }, alt: "Aliaksandr Bandziuk, freelancer SEO" },
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO strony wykonany przez freelancera", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Stała współpraca z freelancerem SEO z wdrożeniami", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Współpraca z freelancerem",
      title: "Co dostajecie, zlecając pozycjonowanie freelancerowi SEO",
      items: [
        { _key: k("o"), iconName: "users", title: "Ten sam specjalista przez całą współpracę", text: "Nikt nie przejmuje Waszej strony w połowie projektu" },
        { _key: k("o"), iconName: "code", title: "Wdrożenia w kodzie i w CMS", text: "WordPress, Next.js, szablony, przekierowania" },
        { _key: k("o"), iconName: "file-text", title: "Dziennik zmian na stronie", text: "Wiecie, co zmieniono, gdzie i kiedy" },
        { _key: k("o"), iconName: "shield-check", title: "Konta i treści zostają u Was", text: "Search Console, Analytics i wizytówka Google" },
        { _key: k("o"), iconName: "languages", title: "Frazy osobno dla każdego rynku", text: "Strony po polsku, angielsku i rosyjsku" },
        { _key: k("o"), iconName: "trending-up", title: "Raport w ruchu i zapytaniach", text: "Porównanie z punktem wyjścia co miesiąc" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO strony", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stała współpraca z freelancerem SEO", value: "od 3500 zł / mies.", note: "wdrożenia + raporty", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio freelancera SEO: strony, które sam sprawdziłem, poprawiłem i zmierzyłem",
      subtitle:
        "Przy każdym z tych projektów byłem jedyną osobą odpowiedzialną za SEO: firma skanowania 3D, której ruch organiczny wzrósł 29 razy, agencja edukacyjna rozbudowana z jednego kraju do dziesięciu, warsztat samochodowy z Warszawy w Mapach Google i platforma nieruchomości na Cyprze, którą pozycjonuję co miesiąc.",
      picks: [
        "architecture-website-rebuild-and-seo-scan",
        "full-multilingual-website-development-and-seo-for-student-services",
        "auto-repair-seo-and-ux-boost",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "psychotherapist-website-milan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena pozycjonowania od freelancera SEO",
      subtitle: "Napiszcie, jaka to strona i czego od niej oczekujecie. W ciągu dnia roboczego odpiszę, od czego zacząłbym i jaki zakres ma sens. Pierwsza rozmowa (15–30 minut) nic nie kosztuje.",
      contextLabel: "Adres strony",
      contextPlaceholder: "https://…",
      buttonText: "Wyślij zapytanie",
      note: "Wolicie komunikator? Piszcie na WhatsApp — odpowiadam tak samo szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Jaki zakres pracy rozważacie?", options: ["Jednorazowy audyt", "Stałą współpracę", "Wsparcie dla naszego zespołu", "Jeszcze nie wiem"] },
        { _key: k("z"), question: "Skąd dziś przychodzą klienci?", options: ["Z Google", "Z reklam", "Z poleceń", "Z mediów społecznościowych"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Jestem freelancerem SEO: sam, bez agencji i podwykonawców, sprawdzam, dlaczego strona nie przyciąga ruchu z Google, poprawiam przyczyny bezpośrednio w kodzie i mierzę, co się zmieniło. Pracuję zdalnie z Warszawy, po polsku, angielsku i rosyjsku, dla firm z Polski, innych krajów Europy, Wielkiej Brytanii, USA, Cypru i Izraela."),

        h2("Czym zajmuje się freelancer SEO: od audytu do poprawek w kodzie strony"),
        p("Freelancer SEO to niezależny specjalista, który prowadzi pozycjonowanie stron na własny rachunek, a nie jako pracownik agencji. U mnie praca obejmuje trzy obszary, którymi w agencji zajmują się zwykle trzy różne osoby:"),
        li("analizę — dane z Search Console i analityki, crawl całej strony, porównanie Waszych podstron z tymi, które Google pokazuje wyżej"),
        li("wdrożenie — poprawki w WordPressie, w kodzie Next.js i React, w szablonach, przekierowaniach, danych strukturalnych i linkowaniu wewnętrznym"),
        li("pomiar — punkt wyjścia zapisany przed pierwszą zmianą i raporty, które pokazują ruch i zapytania, a nie wyłącznie pozycje"),
        p(
          "Pełną listę prac, od SEO technicznego po plan treści, opisuję na stronie ",
          link("strategia i optymalizacja SEO", "/pl/oferty/strategia-i-optymalizacja-seo"),
          ". Tutaj piszę o tym, jak wygląda współpraca z jedną osobą.",
        ),

        h2("Freelancer SEO czy agencja SEO: kto faktycznie pracuje nad Waszą stroną"),
        p("W agencji umowę podpisujecie z firmą, a rozmawiacie z opiekunem klienta. Specjalista, który robi pozycjonowanie, często prowadzi kilkanaście kont naraz i może się zmienić w trakcie współpracy. Freelancer SEO to jedna osoba od pierwszej rozmowy do raportu — pamięta, co zmieniła trzy miesiące temu i dlaczego."),
        p("Agencja ma przewagę, kiedy potrzebujecie wielu kanałów w jednej umowie: kampanii Google Ads, mediów społecznościowych, grafiki i SEO. Ja zajmuję się wyszukiwaniem organicznym — Google i odpowiedziami AI — i chętnie współpracuję z osobami, które prowadzą Wasze reklamy: wspólne dane o frazach i konwersjach pomagają obu stronom."),

        h2("Specjalista SEO na zlecenie zamiast etatu: kiedy to się opłaca"),
        p("Specjalista SEO na etacie ma sens, gdy pozycjonowanie wypełnia mu cały tydzień przez cały rok: duży sklep, portal, serwis z setkami nowych podstron miesięcznie. W małej i średniej firmie po pierwszych miesiącach porządków zadań jest mniej, a pensja, składki, sprzęt i płatne narzędzia zostają."),
        p("Współpraca na zlecenie odwraca ten rachunek. Płacicie za konkretny zakres — audyt, projekt albo miesiąc pracy — a narzędzia, bazy danych o frazach i doświadczenie z innych branż są po mojej stronie. Jeśli macie już marketingowca, mogę być jego wsparciem: biorę na siebie zadania techniczne, a on zostaje przy treściach i komunikacji."),

        h2("Co przekazuje freelancer SEO, a co zostaje po stronie firmy"),
        p("Jasny podział pracy oszczędza obu stronom nerwów. Ode mnie dostajecie:"),
        li("audyt i plan prac z kolejnością według wpływu na ruch"),
        li("wdrożone poprawki opisane w dzienniku zmian — co, gdzie i kiedy"),
        li("briefy treści: frazy, układ nagłówków, pytania, na które podstrona ma odpowiedzieć"),
        li("comiesięczny raport z danymi z Search Console i analityki"),
        p("Po Waszej stronie zostają decyzje biznesowe, akceptacja tekstów, zdjęcia i wiedza o produkcie. Wszystkie konta — Search Console, Analytics, wizytówka Google, hosting — należą do Was: dostaję do nich dostęp i oddaję go po zakończeniu współpracy, a cała wykonana praca zostaje na stronie."),

        h2("Umowa i faktura z JDG: formalności współpracy z freelancerem SEO"),
        p("Prowadzę jednoosobową działalność gospodarczą zarejestrowaną w Warszawie, więc formalnie współpraca wygląda jak z każdym innym dostawcą usług: umowa albo zlecenie mailowe z zakresem i ceną, faktura po wykonaniu audytu lub co miesiąc przy stałej pracy. Cenę ustalamy z góry za zakres pracy."),
        p("W umowie z freelancerem SEO warto zapisać trzy rzeczy: co dokładnie wchodzi w miesięczną pracę, jaki jest okres wypowiedzenia i do kogo należą wypracowane treści i ustawienia. U mnie odpowiedź na ostatnie pytanie jest prosta: do Was."),
        p("Cała współpraca odbywa się zdalnie: rozmowy wideo z udostępnianiem ekranu, wspólne dokumenty, dostęp do Search Console i panelu strony. Pracuję w polskich godzinach, więc firma z Gdańska, Krakowa czy Wrocławia ma ze mną taki sam kontakt jak firma z Warszawy, a klienci z zagranicy dostają fakturę w euro albo w innej uzgodnionej walucie."),

        h2("Freelancer od pozycjonowania stron: audyt, projekt albo stała współpraca"),
        li(
          "Audyt SEO — pisemny przegląd całej strony z priorytetami i planem, od 1000 zł. Co dokładnie sprawdzam, wyjaśnia strona ",
          link("audyt SEO strony internetowej", "/pl/oferty/audyt-seo-strony-internetowej"),
          ".",
        ),
        li("Projekt jednorazowy — kontrola migracji, zestaw nowych podstron usług, porządek w indeksowaniu: od 1000 do 3000 zł."),
        li("Stała współpraca — wdrożenia, briefy treści, linkowanie wewnętrzne i raporty: od 3500 zł miesięcznie."),
        p(
          "Jeśli potrzebujecie tylko rozmowy o jednym problemie, na przykład przed przebudową strony, odpowiedni format to ",
          link("konsultacje SEO", "/pl/oferty/konsultacje-seo"),
          ". Firmom, które obsługują klientów w jednym mieście, proponuję też ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          " razem z wizytówką Google.",
        ),

        h2("Jak sprawdzić freelancera SEO przed podpisaniem umowy"),
        p("Freelancerów SEO jest wielu, a różnice między nimi są ogromne. Zanim zdecydujecie — także w moim przypadku — sprawdźcie:"),
        li("strony, przy których pracował: co konkretnie zmienił i co stało się z ruchem albo zapytaniami"),
        li("przykładowy raport — czy to plan z priorytetami, czy eksport ostrzeżeń z narzędzia"),
        li("kto wdroży zalecenia: on sam, Wasz programista, czy nikt"),
        li("czy obiecuje konkretne pozycje w określonym terminie — jeśli tak, szukajcie dalej"),
        li("czy zostawia Was właścicielami wszystkich kont i treści"),
        p("Przykład z mojego portfolio: ScanM2, firma zajmująca się skanowaniem laserowym 3D i modelowaniem BIM, przez dwa lata nie dostawała zapytań ze strony postawionej na platformie no-code. Po przebudowie na WordPressie z zachowanym projektem graficznym ruch organiczny wzrósł 29 razy, a zapytania przychodzą co tydzień."),

        h2("Doświadczenie freelancera SEO: copywriting, pozycjonowanie i programowanie od 2010 roku"),
        p(
          "W marketingu internetowym pracuję od 2010 roku: zaczynałem od pisania tekstów, kilka lat później przeszedłem do SEO, a programowania nauczyłem się, gdy zbyt wiele moich audytów czekało miesiącami, aż ktoś je wdroży. Dziś łączę te trzy rzeczy. Buduję w Next.js, React, TypeScript, Sanity i WordPressie, a pozycjonuję też strony wielojęzyczne — między innymi agencję edukacyjną rozbudowaną z jednego kraju do dziesięciu i platformę nieruchomości na Cyprze w pięciu językach, w tym po hebrajsku. Więcej na stronie ",
          link("o mnie", "/pl/o-mnie"),
          ".",
        ),

        h2("Freelancer SEO a widoczność w ChatGPT i Google AI Overviews"),
        p("Coraz więcej klientów zaczyna szukać od pytania w ChatGPT albo czyta podsumowanie AI nad wynikami Google. Klasyczne pozycjonowanie jest fundamentem obu tych kanałów: asystenci, którzy przeszukują sieć, opierają się na stronach z wyników i cytują te, na których fakty są podane jasno. Dlatego w każdym audycie sprawdzam też, co ChatGPT i AI Overviews mówią o Waszej firmie przy kilku kluczowych pytaniach. Psychoterapeuta z Mediolanu, któremu przebudowałem stronę, znalazł mnie właśnie przez ChatGPT."),
        p(
          "To, co piszę o AI, opieram na danych: w ",
          link("badaniu 141 odpowiedzi asystentów AI", "/pl/blog/pozycjonowanie-w-ai-badanie"),
          " sprawdziłem, które firmy ChatGPT, Perplexity i Google AI Mode polecają w odpowiedzi na 47 pytań klientów wybierających wykonawcę. Jeśli widoczność w AI jest głównym celem, zakres prac opisuję na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ", a sposób pracy — na stronie ",
          link("ekspert AI SEO", "/pl/oferty/ekspert-ai-seo"),
          ".",
        ),

        h2("Ile kosztuje freelancer SEO miesięcznie i jednorazowo"),
        li("audyt SEO — od 1000 zł jednorazowo"),
        li("prace jednorazowe — od 1000 do 3000 zł"),
        li("stała współpraca — od 3500 zł miesięcznie, w branżach z silną konkurencją od 5500 zł"),
        p(
          "Na cenę wpływa wielkość strony, liczba wersji językowych i siła konkurencji w Waszych frazach. Pierwsza rozmowa (15–30 minut) jest bezpłatna. Wszystkie stawki, także za strony internetowe, są w ",
          link("cenniku", "/pl/cennik"),
          ".",
        ),

        h2("Pierwsze tygodnie współpracy z freelancerem SEO"),
        ol("Tydzień 1. Dostaję dostęp do Search Console, analityki i panelu strony; zapisuję punkt wyjścia i skanuję całą stronę."),
        ol("Tydzień 2. Dostajecie audyt: listę problemów, ich prawdopodobny wpływ na ruch i kolejność poprawek."),
        ol("Tydzień 3. Pierwsze wdrożenia: indeksowanie, tytuły, linkowanie wewnętrzne — zmiany, które Google zauważa najszybciej."),
        ol("Tydzień 4. Krótki raport: co się zmieniło, co Google już przetworzył i plan na kolejny miesiąc."),
        p("Pozycje rosną miesiącami, a nie tygodniami. Po pierwszym miesiącu powinniście mieć jasny plan i realne zmiany na działającej stronie — to dobry moment, żeby ocenić, czy współpraca idzie w dobrą stronę."),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Freelancer SEO: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Czym różni się freelancer SEO od agencji SEO?", "W agencji pracuje nad stroną zespół, a kontakt macie z opiekunem klienta. Freelancer SEO to jedna osoba, która robi audyt, wdrożenia i raporty. Agencja lepiej sprawdza się przy wielu kanałach naraz, freelancer — gdy liczy się szybkość zmian i jeden odpowiedzialny człowiek."],
          ["Ile kosztuje freelancer SEO miesięcznie?", "Stała współpraca kosztuje od 3500 zł miesięcznie, w branżach z silną konkurencją od 5500 zł. Audyt to od 1000 zł, prace jednorazowe od 1000 do 3000 zł. Pierwsza rozmowa (15–30 minut) jest bezpłatna."],
          ["Czy freelancer SEO wystawia fakturę?", "Wystawiam fakturę z jednoosobowej działalności gospodarczej zarejestrowanej w Warszawie. Status VAT i kwotę, która znajdzie się na fakturze, podaję w ofercie, zanim cokolwiek podpiszemy."],
          ["Czy współpraca z freelancerem SEO odbywa się zdalnie?", "Tak, w całości: rozmowy wideo z udostępnianiem ekranu, wspólne dokumenty, dostęp do Search Console i panelu strony. Pracuję z Warszawy, w polskich godzinach pracy, dla firm z całej Polski i z zagranicy."],
          ["Czy freelancer SEO gwarantuje pierwsze miejsce w Google?", "Nie, i nikt uczciwie tego nie obieca, bo wyniki zależą od Google i od konkurencji. Gwarantuję zakres pracy, pomiar od punktu wyjścia i raporty, z których widać, co się zmieniło."],
          ["Co się dzieje z dostępami po zakończeniu współpracy?", "Wszystkie konta od początku należą do Was. Po zakończeniu współpracy oddaję dostępy, a dziennik zmian, briefy treści i raporty zostają u Was."],
          ["Czy możesz pracować z naszym programistą albo agencją reklamową?", "Tak. Mogę sam wprowadzać zmiany albo przygotować dla programisty zadania tak dokładne, że wdroży je bez spotkania. Z osobami od reklam wymieniam się danymi o frazach i konwersjach."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zlećcie pozycjonowanie freelancerowi SEO: co przesłać przed rozmową"),
        p(
          "Prześlijcie adres strony, miasta lub kraje, w których sprzedajecie, i frazy, na które chcecie być widoczni. Jeśli ruch spadł, napiszcie mniej więcej od kiedy. W ciągu dnia roboczego dostaniecie pierwsze uwagi i dwa–trzy terminy bezpłatnej rozmowy. Wypełnijcie ",
          link("formularz wyceny", "#quote"),
          " albo wyślijcie wiadomość na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
