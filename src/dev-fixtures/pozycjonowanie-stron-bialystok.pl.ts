// Landing page fixture: Pozycjonowanie stron Białystok (PL), group
// «pozycjonowanie-stron-bialystok». Stage 3 city pilot, Białystok only.
// Semantic core (ref/city-keywords.md, ref/pl-cities.md): pozycjonowanie stron
// białystok 390 · pozycjonowanie stron internetowych białystok 170; brief
// phrases without measured volume: agencja SEO białystok, audyt SEO
// białystok, pozycjonowanie lokalne / wizytówka Google w Białymstoku, cennik.
// PAA: Ile kosztuje pozycjonowanie strony w 2026? Ile kosztuje dobre
// pozycjonowanie strony? Jak długo trwa pozycjonowanie strony? Czy
// pozycjonowanie stron ma sens? Kto zajmuje się pozycjonowaniem stron? Jak
// samemu pozycjonować stronę? (H2 or FAQ).
// Intent (ref/intent-check-pl-cities.md): SEO vs website 0 shared URLs → two
// pages; pozycjonowanie / agencja SEO / audyt SEO share 1–2 URLs → one page.
// Local SERP pattern: local studios, individual specialists, national agencies
// with city pages, Oferteo.
// City part: capital of Podlasie and service centre for the whole
// voivodeship; food industry (dairy, meat, confectionery),
// universities incl. a medical one with international students; gateway to
// Podlasie nature tourism; proximity to Lithuania; districts (Bojary,
// Antoniuk, Dziesięciny, Wysoki Stoczek, Nowe Miasto, Słoneczny Stok) and
// nearby towns (Wasilków, Choroszcz, Supraśl, Zabłudów, Łapy); searches in
// Lithuanian, English and Ukrainian. Smaller city → stałe od 3500 zł only.
// NOT on this page: the website build (/pl/tworzenie-stron-internetowych-bialystok);
// e-commerce (not offered); Google Ads and social media (not offered); Warsaw
// pages. Belarus deliberately not mentioned (brief).
// Owner’s rules: remote work from Warsaw, no visits promised; never say there
// are no clients from the visitor’s city or industry.
import { p, h2, li, link, k } from "./pt";

export const pozycjonowanieStronBialystokPl = {
  lang: "pl",
  group: "pozycjonowanie-stron-bialystok",
  slug: "pozycjonowanie-stron-bialystok",
  title: "Pozycjonowanie stron Białystok",
  heading: "Pozycjonowanie stron w Białymstoku",
  excerpt:
    "Pozycjonowanie stron w Białymstoku dla firm, które chcą klientów z miasta, z całego Podlasia i zza granicy: audyt, podstrony usług, wizytówka Google, wersje językowe i widoczność w odpowiedziach AI — robi to jeden specjalista SEO, zdalnie i za jawne ceny.",
  seo: {
    metaTitle: "Pozycjonowanie stron Białystok i Podlasie | Bandziuk",
    metaDescription:
      "Pozycjonowanie stron w Białymstoku: audyt SEO od 1000 zł, podstrony usług, wizytówka Google, wersje litewska i angielska, widoczność w AI. Jeden specjalista.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Specjalista SEO zamiast agencji", "Audyt od 1000 zł", "Białystok i całe Podlasie"],
  heroPhonePoints: ["Stomatolog Białystok Bojary", "Wizytówka w Mapach Google", "Zadzwoń", "Poleca ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO strony firmy z Białegostoku: strona, wizytówka Google, konkurencja", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO w Białymstoku: podstrony usług, wersje językowe, dane strukturalne, poprawki techniczne", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie stron w Białymstoku", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje pozycjonowanie stron w Białymstoku",
      items: [
        { _key: k("o"), iconName: "search", title: "Audyt SEO z wynikami z Białegostoku", text: "Kto jest wysoko w Waszych usługach i dlaczego" },
        { _key: k("o"), iconName: "layers", title: "Podstrony usług dla miasta i regionu", text: "Białystok, gminy wokół, całe Podlasie — według danych" },
        { _key: k("o"), iconName: "message-circle", title: "Wersje językowe pod klientów zza granicy", text: "Litewska, angielska, ukraińska — gdy ktoś tak szuka" },
        { _key: k("o"), iconName: "map-pin", title: "Wizytówka Google w Białymstoku", text: "Kategoria, usługi, zdjęcia, opinie, godziny" },
        { _key: k("o"), iconName: "sparkles", title: "Obecność w odpowiedziach AI", text: "ChatGPT, Perplexity i podsumowania AI w Google" },
        { _key: k("o"), iconName: "trending-up", title: "Raport z telefonów i zapytań", text: "Co miesiąc, z GA4 i Search Console" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO strony firmy z Białegostoku", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe pozycjonowanie stron w Białymstoku", value: "od 3500 zł / mies.", note: "podstrony, wizytówka, języki, AI", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: strony wielojęzyczne i lokalne, które budowałem i pozycjonowałem",
      subtitle:
        "Białostocka firma, która przyjmuje klientów z Litwy, studentów z zagranicy albo sprzedaje poza Polską, zobaczy tu serwis agencji edukacyjnej w wielu językach dla dziesięciu krajów i stronę firmy skanowania laserowego 3D i BIM w wersjach angielskiej, polskiej i niemieckiej, której ruch organiczny wzrósł 29 razy. Firma usługowa z Bojar czy Antoniuka zobaczy strony lokalnych firm z Warszawy — remontowo-inwestycyjnej, warsztatu samochodowego i przechowalni opon — przygotowane pod klientów, którzy szukają usługi w swoim mieście.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "full-multilingual-website-development-and-seo-for-student-services",
        "architecture-website-rebuild-and-seo-scan",
        "renovation-and-investment-website-with-premium-design",
        "auto-repair-seo-and-ux-boost",
        "tyre-storage-landing-page-with-editable-seo",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena pozycjonowania strony firmy z Białegostoku",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: co zrobiłbym najpierw dla Waszej strony i wizytówki w Białymstoku i ile to kosztuje.",
      contextLabel: "Nazwa firmy lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Skąd są Wasi klienci?", options: ["Z Białegostoku", "Z całego Podlasia", "Z Litwy lub innych krajów", "Z całej Polski"] },
        { _key: k("z"), question: "Czy strona była już pozycjonowana?", options: ["Tak, nadal jest", "Tak, ale przestaliśmy", "Nie", "Nie wiem"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Pozycjonowanie stron w Białymstoku to moja usługa dla firm, które chcą, żeby w Google, w Mapach Google i w odpowiedziach asystentów AI znajdowali je klienci z Białegostoku, z całego Podlasia, a czasem także z Litwy i z innych krajów. Jestem pojedynczym specjalistą SEO: sam robię audyt, poprawiam stronę, piszę podstrony, prowadzę wizytówkę i przygotowuję raport. Pracuję z Warszawy, a z białostockimi firmami współpracuję zdalnie."),

        h2("Pozycjonowanie stron w Białymstoku: zakres pracy"),
        p("Na pracę składają się cztery części, które robię jako jeden plan, a nie osobne pakiety:"),
        li("technika i struktura strony — indeksowanie, szybkość na telefonie, tytuły, adresy podstron, dane strukturalne"),
        li("treść — podstrony usług, które odpowiadają na to, co ludzie z Białegostoku i okolic wpisują w Google"),
        li("wizytówka Google i spójność danych w katalogach"),
        li("widoczność w ChatGPT, Perplexity i podsumowaniach AI w Google"),
        p("Kolejność ustala audyt: najpierw to, co najszybciej przełoży się na telefony i zapytania, potem rzeczy, które budują pozycję na dłużej."),

        h2("Białystok i Podlasie jako rynek: przemysł spożywczy, uczelnie i turystyka"),
        p("Białystok to stolica Podlasia i centrum usług dla całego województwa. Region słynie z przemysłu spożywczego — mleczarstwa, przetwórstwa mięsa, wyrobów cukierniczych. Te firmy sprzedają w dużej części poza regionem i za granicą, więc ich klient wpisuje produkt, a nie miasto."),
        p("Drugi filar to uczelnie, w tym medyczna, na której studiuje wielu cudzoziemców. Studenci z zagranicy szukają po angielsku mieszkań, szkół językowych, dentystów, siłowni i miejsc do jedzenia. Trzeci to turystyka: Białystok jest bramą do Puszczy Białowieskiej, Biebrzy, Narwi i Supraśla, więc pensjonaty, agroturystyki, przewodnicy i wypożyczalnie sprzętu walczą o gości planujących wyjazd na Podlasie."),
        p("Do tego dochodzą usługi dla mieszkańców: gabinety, warsztaty, firmy budowlane, biura rachunkowe. Dla nich rynek jest mniejszy niż w Warszawie czy Krakowie, a to oznacza, że porządna strona i wizytówka mogą wejść wysoko szybciej i taniej niż w dużym mieście."),

        h2("Jak klienci szukają firm w Białymstoku: osiedla, okoliczne gminy i języki sąsiadów"),
        p("Dane wyszukiwań z Białegostoku mają kilka cech, które biorę pod uwagę przy planie podstron:"),
        li("osiedla w zapytaniach — Bojary, Antoniuk, Dziesięciny, Wysoki Stoczek, Nowe Miasto, Słoneczny Stok — zwłaszcza przy usługach, do których się chodzi pieszo, jak fryzjer, apteka czy przedszkole"),
        li("okoliczne gminy — Wasilków, Choroszcz, Supraśl, Zabłudów, Łapy — z których ludzie dojeżdżają do pracy i po usługi"),
        li("cały region — mieszkańcy Łomży, Suwałk, Hajnówki czy Bielska Podlaskiego wpisują „Białystok”, gdy szukają specjalisty, którego nie ma u nich"),
        li("inne języki — po litewsku szukają goście zza pobliskiej granicy, po angielsku studenci z zagranicy, po ukraińsku część mieszkańców"),
        p("Strona firmy z Białegostoku rzadko potrzebuje podstrony dla każdego osiedla. Zwykle wystarczają dobre podstrony usług z opisanym obszarem działania i — tam, gdzie dane to uzasadniają — wersja językowa dla jednej konkretnej grupy, a nie tłumaczenie całej strony na trzy języki."),

        h2("Agencja SEO w Białymstoku czy jeden specjalista: kto pozycjonuje strony"),
        p("W wynikach dla „pozycjonowanie stron Białystok” są białostockie studia i agencje, pojedynczy specjaliści, agencje ogólnopolskie z podstroną dla Białegostoku i portal Oferteo, który rozsyła zapytania do wielu wykonawców. Każda z tych opcji może być dobra; różnią się tym, kto naprawdę robi pracę i ile z budżetu idzie na samą obsługę."),
        p("U mnie nie ma opiekuna klienta ani handlowca. Rozmawiacie z osobą, która analizuje dane, zmienia kod — w WordPressie, Next.js albo innym systemie — pisze teksty i tłumaczy raport. Ceny są opublikowane w cenniku, więc wycena nie zależy od tego, jak dobrze negocjujecie. Kampanii Google Ads i mediów społecznościowych nie prowadzę."),
        p("Odległość z Warszawy nie przeszkadza: pracujemy przez rozmowy wideo, wspólny dokument z zadaniami i dostęp do Search Console oraz wizytówki. Raport dostajecie co miesiąc, a pytania możecie wysyłać na bieżąco."),

        h2("Audyt SEO w Białymstoku: pierwszy krok pozycjonowania"),
        p("Audyt to lista poprawek ułożona według wpływu. W Białymstoku zwracam w nim uwagę szczególnie na:"),
        li("frazy z Białymstokiem, osiedlami i okolicznymi gminami, na które strona już się pokazuje, oraz usługi bez własnej podstrony"),
        li("konkurencję w pierwszej dziesiątce: czy to białostockie firmy, portale, czy agencje z innych miast"),
        li("błędy techniczne, indeksowanie, szybkość na telefonie"),
        li("wizytówkę Google: kategorię, zgodność danych, opinie"),
        li("to, czy ruch z innych języków już przychodzi i na jakie podstrony"),
        p(
          "Część firm wdraża listę sama, część zleca mi poprawki jednorazowo. Więcej o usłudze na stronie ",
          link("audyt SEO strony internetowej", "/pl/oferty/audyt-seo-strony-internetowej"),
          ".",
        ),

        h2("Pozycjonowanie lokalne w Białymstoku: wizytówka Google dla miasta i regionu"),
        p("Przy wyszukiwaniach z „Białystok” Google zwykle pokazuje mapę z trzema firmami nad zwykłymi wynikami. Firma z adresem na Bojarach łatwiej trafi do tej trójki dla kogoś z centrum niż dla kogoś ze Starosielc, ale trafność wizytówki i opinie potrafią to wyrównać. Firma, która dojeżdża do klientów w Wasilkowie, Choroszczy czy Supraślu, ustawia obszar działania tak, żeby te gminy były w nim widoczne."),
        p(
          "Ważne są też opinie w różnych językach: odpowiedź po angielsku na opinię studenta czy po litewsku na opinię gościa pokazuje kolejnym osobom, że zostaną obsłużone. Całość pracy nad Mapami opisuję na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Pozycjonowanie stron internetowych w Białymstoku dla producentów żywności i obiektów turystycznych"),
        p(
          "Podlaski producent żywności sprzedaje hurtowniom, sieciom i odbiorcom zagranicznym. Dla niego pozycjonowanie opiera się na podstronach produktów i możliwości produkcyjnych, wersji angielskiej i zapytaniach ofertowych — opisuję to na stronie ",
          link("pozycjonowanie strony firmy produkcyjnej", "/pl/pozycjonowanie-strony-firmy-produkcyjnej"),
          ".",
        ),
        p(
          "Hotele i pensjonaty w Białymstoku i na Podlasiu walczą z portalami rezerwacyjnymi o gościa, który planuje wyjazd do puszczy albo nad Biebrzę. Potrzebują strony, która przekona do rezerwacji bezpośredniej i będzie widoczna na frazy z nazwą okolicy, a nie tylko miasta — szczegóły na stronie ",
          link("pozycjonowanie strony hotelu", "/pl/pozycjonowanie-strony-hotelu"),
          ".",
        ),

        h2("Pozycjonowanie stron w Białymstoku w ChatGPT i Google AI Overviews (GEO, AEO)"),
        p("Student z zagranicy pyta ChatGPT po angielsku o dentystę w Białymstoku, a rodzina z Warszawy — o pensjonat blisko Puszczy Białowieskiej. Asystenci polecają firmy, o których znajdą konkretne, spójne informacje. Na tę część pozycjonowania mówi się GEO (generative engine optimization) lub AEO (answer engine optimization). W białostockiej firmie obejmuje ona:"),
        li("usługi, ceny, adres, godziny i języki obsługi zapisane zwykłymi zdaniami"),
        li("dane strukturalne zgodne z wizytówką Google"),
        li("wersje językowe, które asystent może przeczytać w języku pytania"),
        p(
          "Przed rozpoczęciem i po kilku miesiącach sprawdzam, co asystenci mówią o Waszej firmie. Więcej na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Jak samemu pozycjonować stronę firmy z Białegostoku"),
        li("nazwijcie podstrony usług tak, jak szukają klienci, z miastem w tytule, np. „Protetyka stomatologiczna — Białystok Centrum”"),
        li("wpiszcie na stronie i w wizytówce, w jakich językach obsługujecie klientów"),
        li("poproście klientów o opinie i odpowiadajcie na nie w języku autora"),
        li("sprawdźcie w Search Console, z jakich krajów przychodzą wejścia — to podpowie, czy warto robić wersję językową"),
        p("Zlecić warto technikę, budowę wersji językowych, przeniesienie strony i branże, w których w Białymstoku od lat konkurują mocne strony."),

        h2("Jak długo trwa pozycjonowanie stron internetowych w Białymstoku i czy ma sens"),
        p("Pierwsze zmiany — tytuły, poprawki techniczne, wizytówka — działają zwykle po kilku tygodniach. Nowe podstrony usług potrzebują dwóch–trzech miesięcy, a wersje językowe i frazy ogólnopolskie dłużej. Obiekty turystyczne powinny zaczynać jesienią albo zimą, żeby podstrony były gotowe na wiosnę i lato."),
        p("Czy warto? Wejścia z Google nie kosztują za kliknięcie i przychodzą także wtedy, gdy nie płacicie za reklamę. W raporcie pokazuję telefony, wiadomości i rezerwacje z wyszukiwarki, a jeśli coś nie działa, proponuję zmianę planu zamiast kolejnego miesiąca tego samego."),

        h2("Ile kosztuje pozycjonowanie stron w Białymstoku: cennik"),
        li("Audyt SEO strony, wizytówki i konkurencji w Białymstoku: od 1000 zł jednorazowo."),
        li("Jednorazowe prace — podstrony usług, wersja językowa, dane strukturalne, poprawki techniczne: od 1000 do 3000 zł."),
        li("Stałe pozycjonowanie strony firmy z Białegostoku: od 3500 zł miesięcznie."),
        p(
          "Wszystkie widełki są w ",
          link("cenniku", "/pl/cennik"),
          ". Jeśli strona wymaga najpierw przebudowy, zajrzyjcie na stronę ",
          link("tworzenie stron internetowych w Białymstoku", "/pl/tworzenie-stron-internetowych-bialystok"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie stron w Białymstoku: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje dobre pozycjonowanie strony w Białymstoku?", "Za audyt zapłacicie od 1000 zł, za jednorazowe prace 1000–3000 zł, a za stałe pozycjonowanie od 3500 zł miesięcznie. Ostateczną stałą cenę podaję po przejrzeniu strony i wizytówki."],
          ["Jak długo trwa pozycjonowanie strony w Białymstoku?", "Pierwsze efekty poprawek i wizytówki widać zwykle po kilku tygodniach, nowe podstrony usług po dwóch–trzech miesiącach. Wersje językowe i frazy ogólnopolskie potrzebują więcej czasu."],
          ["Czy pozycjonowanie stron ma sens dla firmy z Białegostoku?", "Tak, jeśli ludzie szukają Waszej usługi w Google — a w Białymstoku szukają także mieszkańcy całego regionu. Mniejsza konkurencja niż w największych miastach sprawia, że efekty przychodzą szybciej."],
          ["Kto zajmuje się pozycjonowaniem stron w Białymstoku?", "Białostockie studia i agencje, specjaliści pracujący samodzielnie, agencje ogólnopolskie i portale z ofertami. Ja pracuję sam: od audytu po wdrożenie i raport, bez pośredników i z cennikiem dostępnym na stronie."],
          ["Czy warto mieć wersję litewską lub angielską strony?", "Warto, jeśli takie osoby już do Was przychodzą albo szukają Waszej usługi. Sprawdzam to w Search Console i danych wyszukiwań; zwykle wystarcza kilka przetłumaczonych podstron zamiast całej strony."],
          ["Czy pomagasz z wizytówką Google firmy z Białegostoku?", "Tak, wizytówka jest częścią pozycjonowania: kategoria, usługi, zdjęcia, godziny, opinie i obszar działania obejmujący okoliczne gminy."],
          ["Jak wygląda współpraca zdalna z firmą z Białegostoku?", "Pracuję z Warszawy, a współpraca toczy się online: rozmowa wideo na start, wspólny dokument z zadaniami, dostęp do Search Console i wizytówki oraz raport co miesiąc."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie stron w Białymstoku: co mi wysłać"),
        p(
          "Wyślijcie link do strony i do wizytówki Google, usługi lub produkty, przy których chcecie więcej klientów, obszar, z którego przychodzą — Białystok, gminy wokół, Podlasie, zagranica — i języki, w których ich obsługujecie. Odpowiem, od czego zacząłbym i za jaką stałą cenę. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
