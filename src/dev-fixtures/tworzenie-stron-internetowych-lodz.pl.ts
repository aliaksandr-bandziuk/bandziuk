// Landing page fixture: Tworzenie stron internetowych Łódź (PL), group
// «tworzenie-stron-internetowych-lodz». City page, stage 3 pilot (BRIEF.md).
// Semantic core (ref/city-keywords.md, ref/pl-cities.md): strony internetowe
// łódź 590 · agencja interaktywna łódź 260 · projektowanie stron internetowych
// łódź 140 · tworzenie stron internetowych łódź 140. Also in headings/FAQ:
// «strona internetowa Łódź», «cennik».
// PAA: Jaka jest cena projektowania stron internetowych? (H2 + FAQ).
// Intent (ref/intent-check-pl-cities.md): «pozycjonowanie stron łódź» vs
// «tworzenie stron internetowych łódź» 0 shared URLs → separate pages. The
// website SERP: Oferteo (twice), OLX, local studios, a national agency —
// freelancers and marketplaces next to studios; «tworzenie», «projektowanie»,
// «strony internetowe» share 0–1 URLs → one page with all of them in headings.
// City angle (no doorway): a design-aware city (film school, art academy,
// lofts in former factories), textile and clothing producers needing a B2B
// catalogue site, renovation firms working in tenement houses, service firms
// in the agglomeration (Zgierz, Pabianice, Aleksandrów Łódzki), Ukrainian- and
// English-speaking clients; freelancers from OLX and Oferteo in the SERP.
// Prices: /pl/cennik — prosta strona 3000–6000 zł, pełna strona od 8500 zł,
// projekt graficzny w cenie.
// NOT on this page: pozycjonowanie and wizytówka Google
// (/pl/pozycjonowanie-stron-lodz); online shops and e-commerce for clothing
// brands (not offered); multilingual builds in general
// (/pl/oferty/tworzenie-stron-wielojezycznych).
// Owner’s rules: AI-search H2; never say there are no clients from the
// visitor’s city or industry; remote from Warsaw, no promise of visits.
import { p, h2, h3, li, ol, link, k } from "./pt";

export const tworzenieStronInternetowychLodzPl = {
  lang: "pl",
  group: "tworzenie-stron-internetowych-lodz",
  slug: "tworzenie-stron-internetowych-lodz",
  title: "Tworzenie stron internetowych Łódź",
  heading: "Tworzenie stron internetowych w Łodzi",
  excerpt:
    "Tworzenie stron internetowych w Łodzi to moja usługa dla firm z miasta i aglomeracji: projekt graficzny w cenie, wykonanie w Next.js lub WordPressie, teksty, wersje językowe i podstawy SEO. Jedna osoba od pierwszej rozmowy do uruchomienia, zdalnie, za cenę z cennika.",
  seo: {
    metaTitle: "Projektowanie stron Łódź: projekt w cenie | Bandziuk",
    metaDescription:
      "Strony internetowe dla firm z Łodzi i aglomeracji: projekt graficzny w cenie, teksty, wersje językowe, formularz zgodny z RODO, panel do zmian. Od 3000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt graficzny w cenie", "Od 3000 zł", "Jedna osoba od projektu do startu"],
  heroPhonePoints: ["Realizacje i zdjęcia", "Zadzwoń · WhatsApp", "Oferta dla firm", "Wersja EN · UA"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona internetowa dla firmy z Łodzi, projekt w cenie", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Pełna strona firmy z Łodzi z podstronami usług lub oferty dla firm, galerią realizacji, wersjami językowymi, integracjami i SEO lokalnym, projekt w cenie", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co dostajecie ze stroną internetową w Łodzi",
      items: [
        { _key: k("o"), iconName: "image", title: "Projekt pod Waszą firmę, nie szablon", text: "Typografia, zdjęcia i układ dobrane do branży" },
        { _key: k("o"), iconName: "layers", title: "Podstrony usług lub oferty dla firm", text: "Zakres, ceny lub minimum zamówienia, realizacje" },
        { _key: k("o"), iconName: "message-circle", title: "Wersje angielska i ukraińska", text: "Tam, gdzie macie takich klientów lub pracowników" },
        { _key: k("o"), iconName: "shield-check", title: "Formularz zgodny z RODO", text: "Klauzula, zgody i cookies blokujące analitykę" },
        { _key: k("o"), iconName: "gauge", title: "Szybka na telefonie", text: "Główna treść w mniej niż 2,5 sekundy" },
        { _key: k("o"), iconName: "sparkles", title: "Czytelna dla Google i asystentów AI", text: "Fakty tekstem i dane strukturalne firmy" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona firmy z Łodzi", value: "3000–6000 zł", note: "projekt w cenie" },
        { _key: k("r"), label: "Usługi, realizacje, wersje językowe, SEO lokalne", value: "od 8500 zł", note: "projekt w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: strony, które zaprojektowałem i zbudowałem od zera lub po przebudowie",
      subtitle:
        "Strona firmy remontowo-inwestycyjnej z dopracowanym projektem graficznym, przebudowa strony firmy skanowania laserowego 3D i modelowania BIM z zachowaniem jej wyglądu, wielojęzyczny serwis agencji edukacyjnej oraz strony warsztatu samochodowego i pracowni renowacji felg. To przekrój tego, czego szukają łódzkie firmy: wygląd, który obroni się przed wymagającym klientem, i układ, który prowadzi do zapytania.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "renovation-and-investment-website-with-premium-design",
        "architecture-website-rebuild-and-seo-scan",
        "full-multilingual-website-development-and-seo-for-student-services",
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej dla firmy z Łodzi",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: lista podstron, propozycja wersji językowych i stała cena w widełkach z cennika.",
      contextLabel: "Nazwa firmy lub obecna strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Dla kogo jest strona?", options: ["Klienci indywidualni z Łodzi", "Firmy i odbiorcy hurtowi", "Jedni i drudzy", "Kandydaci do pracy"] },
        { _key: k("z"), question: "Co macie teraz?", options: ["Brak strony", "Strona z kreatora", "Stara strona na WordPressie", "Profil na Facebooku lub Instagramie"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Tworzenie stron internetowych w Łodzi robię dla łódzkich firm i dla firm z całej aglomeracji: ustalam strukturę, projektuję, buduję, piszę teksty i uruchamiam stronę. Z jedną osobą łatwiej rozmawiać o szczegółach, a cenę znacie z cennika już przed pierwszym kontaktem. Pracuję z Warszawy, a z firmami z Łodzi współpracuję online — projekt oglądacie w przeglądarce, a uwagi zostawiacie bezpośrednio w nim."),

        h2("Tworzenie stron internetowych Łódź: co jest w cenie każdej strony"),
        p("Niezależnie od wariantu strona dostaje to, bez czego nie warto jej uruchamiać:"),
        li("projekt graficzny przygotowany dla Waszej firmy, najpierw na telefon, potem na komputer"),
        li("wykonanie w Next.js albo WordPressie — wybór zależy od tego, ile treści będziecie zmieniać sami"),
        li("teksty, które piszę na podstawie rozmowy z Wami, z faktami zamiast haseł"),
        li("tytuły, opisy, dane strukturalne, Google Analytics 4 i Search Console"),
        li("hosting z SSL, domena i panel do zmiany tekstów, cen i zdjęć"),

        h2("Strony internetowe dla łódzkich firm: od dawnych fabryk po biura i gabinety"),
        p("Łódź przez dziesięciolecia była miastem włókniarzy, a dziś w jej dawnych fabrykach działają biura, lofty, restauracje i centra handlowe. Z tego wynika kilka typowych zamówień na stronę internetową w Łodzi:"),
        li("producenci odzieży i tkanin z Łodzi, Rzgowa, Pabianic czy Zgierza potrzebują strony dla odbiorców hurtowych: katalog możliwości, minimalne zamówienie, terminy, szycie na zlecenie i formularz zapytania — bez sklepu internetowego"),
        li("firmy remontowe i wykończeniowe pracujące w kamienicach i loftach pokazują realizacje z konkretnych adresów i opisują, jak radzą sobie z wysokimi stropami czy wymogami konserwatora"),
        li("gabinety, kliniki i firmy szkoleniowe obsługują studentów i pracowników centrów usług, więc potrzebują jasnych cen, internetowej rejestracji i wersji angielskiej"),
        li("firmy logistyczne i transportowe spod Strykowa i Łodzi sprzedają firmom z całej Polski i opisują flotę, magazyny i zasięg"),
        p(
          "Szczegóły dla dwóch z tych branż są na osobnych stronach: ",
          link("strona dla firmy produkcyjnej", "/pl/strona-dla-firmy-produkcyjnej"),
          " i ",
          link("strona internetowa dla firmy budowlanej", "/pl/strona-internetowa-dla-firmy-budowlanej"),
          ".",
        ),

        h2("Projektowanie stron internetowych w Łodzi dla klientów, którzy znają się na designie"),
        p("Łódź to miasto szkoły filmowej, akademii sztuk pięknych, festiwali designu i mody. Klienci łódzkich firm często widzieli więcej dobrych stron niż przeciętny użytkownik i od razu zauważą szablon kupiony za kilkadziesiąt dolarów. Dlatego projektowanie stron w Łodzi zaczynam od zdjęć i typografii, a dopiero potem od układu: prawdziwe zdjęcia z pracowni, lokalu albo realizacji robią więcej niż ozdobniki."),
        p("Dobry wygląd nie może jednak spowalniać strony. Animacje i duże zdjęcia są lekkie, a telefon, WhatsApp i przycisk zapytania zawsze widać bez przewijania."),

        h2("Strony internetowe Łódź: studia, agencje interaktywne, OLX i Oferteo"),
        p("Wyniki dla „strony internetowe Łódź” i „tworzenie stron internetowych Łódź” różnią się od siebie, ale w obu widać to samo zróżnicowanie: lokalne studia, agencje interaktywne łączące strony z marketingiem, ogólnopolskie firmy z podstroną dla Łodzi, a także Oferteo i ogłoszenia na OLX, w których freelancerzy oferują strony za niewielkie kwoty. Rozrzut cen jest więc ogromny."),
        h3("Jak porównać oferty na stronę internetową w Łodzi"),
        li("czy projekt powstaje dla Was, czy to gotowy szablon ze zmienionym logo"),
        li("kto pisze teksty i kto zrobi zdjęcia"),
        li("czy w cenie są wersja mobilna, formularz zgodny z RODO, podstawy SEO i panel"),
        li("do kogo należą domena, kod i treści i czy jest obowiązkowy abonament"),

        h2("Strona internetowa w Łodzi od jednej osoby: projekt, kod i teksty bez pośredników"),
        p("W studiu albo agencji stronę przygotowuje kilka osób: handlowiec przyjmuje zlecenie, project manager przekazuje uwagi, grafik projektuje, programista wdraża, a copywriter dopisuje teksty na końcu. Każde przekazanie to okazja, żeby coś się zgubiło. U mnie projekt, kod i teksty powstają w jednych rękach, więc uwaga zgłoszona rano bywa wprowadzona tego samego dnia, a teksty od początku pasują do układu strony."),
        p("Ten model ma też granice i mówię o nich od razu: nie buduję sklepów internetowych, nie prowadzę kampanii reklamowych ani mediów społecznościowych i nie robię sesji zdjęciowych. Jeśli to jest dla Was najważniejsze, lepiej sprawdzi się agencja."),

        h2("Strona dla firmy z aglomeracji łódzkiej: Zgierz, Pabianice, Aleksandrów i okolice"),
        p("Wiele firm z okolic Łodzi obsługuje klientów w kilku miastach naraz: hydraulik z Aleksandrowa Łódzkiego jeździ na Teofilów i do Konstantynowa, gabinet z Pabianic przyjmuje pacjentów z Ksawerowa i Łasku, firma ogrodnicza ze Zgierza pracuje na Bałutach i w Strykowie. Strona takiej firmy dostaje podstrony obszaru działania z prawdziwymi informacjami — czas dojazdu, zrealizowane zlecenia, ceny dojazdu — a nie kopię jednego tekstu z podmienioną nazwą miejscowości."),

        h2("Strona internetowa w Łodzi po angielsku i ukraińsku"),
        p("Po angielsku szukają w Łodzi zagraniczni studenci, w tym wielu na kierunkach medycznych, oraz pracownicy międzynarodowych centrów usług. Po ukraińsku — osoby pracujące w łódzkich zakładach, magazynach i usługach. Jeśli takich klientów obsługujecie, kilka podstron w ich języku daje więcej niż tłumaczenie całej strony:"),
        li("usługi, z którymi te osoby naprawdę przychodzą, z cenami"),
        li("informacja, kto w firmie mówi w danym języku"),
        li("formularz i klauzula RODO w tym samym języku co podstrona"),
        p(
          "Ogólne zasady budowy takich stron opisuję na stronie ",
          link("tworzenie stron wielojęzycznych", "/pl/oferty/tworzenie-stron-wielojezycznych"),
          ".",
        ),

        h2("Jakie podstrony powinna mieć strona firmy z Łodzi"),
        p("Struktura zależy od tego, czy sprzedajecie klientom indywidualnym, czy firmom. Firma usługowa potrzebuje strony głównej, podstrony każdej usługi z ceną, realizacji lub galerii, zakładki o zespole i kontaktu z mapą i godzinami. Firma B2B — opisu możliwości produkcyjnych lub usług, branż, z którymi pracuje, procesu współpracy, zakładki dla kandydatów do pracy i formularza zapytania ofertowego z polami na ilość i termin. Blog dodaję tylko wtedy, gdy ktoś będzie go prowadził."),

        h2("Strona internetowa firmy z Łodzi, którą ChatGPT i Google AI Overviews potrafią przeczytać"),
        p("Pytania do asystentów AI są coraz bardziej konkretne: „szwalnia pod Łodzią, która przyjmie małe zamówienie”, „dentysta na Widzewie czynny w sobotę”, „firma remontowa od kamienic w Łodzi”. ChatGPT, Perplexity i podsumowania AI w Google polecają firmy, których strony podają takie fakty wprost. Dlatego usługi, minimalne zamówienia, godziny, obszar działania i języki obsługi zapisuję zwykłym tekstem, a znaczniki schema.org powtarzają adres, godziny i usługi z wizytówki Google."),
        p(
          "O tym, jak dalej pracuję nad obecnością firm w odpowiedziach asystentów, piszę na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ", a pozycjonowanie w łódzkich wynikach Google — na stronie ",
          link("pozycjonowanie stron w Łodzi", "/pl/pozycjonowanie-stron-lodz"),
          ".",
        ),

        h2("Przebudowa strony internetowej łódzkiej firmy bez utraty ruchu z Google"),
        p(
          "Gdy firma ma już stronę, nowa wersja przejmuje to, co działa: domenę, adresy podstron, które przynoszą wejścia, zdjęcia i opinie. Stare adresy dostają przekierowania, a po starcie pilnuję Search Console, żeby nic nie wypadło z indeksu. Tak samo przenoszę strony z kreatorów. Szczegóły na stronie ",
          link("przebudowa strony internetowej", "/pl/oferty/przebudowa-strony-internetowej"),
          ".",
        ),

        h2("Jak powstaje strona internetowa dla firmy z Łodzi"),
        ol("Rozmowa online i brief: co sprzedajecie, komu, w jakich miastach i językach."),
        ol("Lista podstron i stała cena przed rozpoczęciem pracy."),
        ol("Projekt strony głównej i jednej podstrony do akceptacji."),
        ol("Wykonanie i teksty; Wy sprawdzacie fakty, ja poprawiam."),
        ol("Uruchomienie z analityką, Search Console i krótką instrukcją edycji."),
        p("Cała współpraca odbywa się zdalnie i dla łódzkich firm zwykle jest to wygodniejsze niż spotkania: rozmowa trwa pół godziny zamiast pół dnia, a ustalenia zostają na piśmie. Na każdym etapie widzicie postęp pod roboczym adresem i możecie pokazać go wspólnikom albo pracownikom, zanim strona zostanie opublikowana."),

        h2("Tworzenie stron internetowych Łódź: cennik i cena projektowania"),
        li("Prosta strona łódzkiej firmy — główna, usługi, zespół i kontakt z formularzem zgodnym z RODO, wszystko z projektem graficznym: od 3000 do 6000 zł."),
        li("Pełna strona — podstrony usług lub oferty dla firm, realizacje, obszar działania, wersje językowe, integracje i SEO lokalne: od 8500 zł."),
        p(
          "Projekt graficzny jest w cenie w obu wariantach, a widełki są w ",
          link("cenniku", "/pl/cennik"),
          ". Abonamentu nie pobieram: hosting i domena to rachunek u dostawcy, a dodatkowe prace rozliczamy tylko wtedy, gdy ich zechcecie. Ogólnie o mojej pracy nad stronami piszę na stronie ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Tworzenie stron internetowych w Łodzi: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Jaka jest cena projektowania stron internetowych w Łodzi?", "Prosta strona z projektem graficznym kosztuje od 3000 do 6000 zł, pełna strona z podstronami usług, realizacjami, wersjami językowymi i SEO lokalnym od 8500 zł. Dokładną kwotę podaję, gdy opiszecie firmę w kilku zdaniach."],
          ["Dlaczego strona z OLX bywa tańsza?", "Bo zwykle to gotowy szablon bez tekstów, bez podstaw SEO i bez wersji dopracowanej na telefon. Czasem to wystarczy. Jeśli strona ma przynosić zapytania z Google, warto sprawdzić, co dokładnie jest w cenie i do kogo należy strona."],
          ["Czy robisz strony dla producentów odzieży z Łodzi?", "Tak, strony firmowe dla odbiorców hurtowych: możliwości produkcyjne, materiały, minimalne zamówienie, terminy i formularz zapytania. Sklepów internetowych nie buduję."],
          ["Ile trwa stworzenie strony internetowej?", "Prosta strona zwykle dwa–cztery tygodnie od briefu, pełna z wersjami językowymi cztery–osiem tygodni. Najdłużej trwa zwykle zebranie zdjęć i uwag do tekstów."],
          ["Agencja interaktywna w Łodzi czy jeden wykonawca?", "Agencja interaktywna przyda się, gdy razem ze stroną chcecie kampanii i mediów społecznościowych. Przy samej stronie współpraca z wykonawcą bez pośredników skraca drogę od uwagi do poprawki, a cena jest znana z góry."],
          ["Czy strona może powstać zdalnie, bez spotkań w Łodzi?", "Tak. Pracuję z Warszawy i współpracuję z łódzkimi firmami online: rozmowy wideo, projekt w przeglądarce, wspólne dokumenty. Sesję zdjęciową w Łodzi organizujecie po swojej stronie; podpowiem, jakich ujęć potrzeba."],
          ["Czy po uruchomieniu sami zmienimy treści?", "Tak. Teksty, ceny, zdjęcia i realizacje zmieniacie w panelu, także z telefonu. Domena, kod i treści należą do Was."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową w Łodzi: co mi wysłać"),
        p(
          "Prześlijcie nazwę firmy i adres obecnej strony lub profilu, krótki opis tego, co sprzedajecie i komu, miasta aglomeracji, w których pracujecie, i języki klientów. Kilka zdjęć z pracowni, lokalu albo realizacji pomoże mi zaproponować kierunek projektu. W odpowiedzi dostaniecie propozycję podstron i stałą cenę. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
