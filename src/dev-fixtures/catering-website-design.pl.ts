// Landing page fixture: Strona internetowa dla firmy cateringowej (PL), group
// «catering-website-design». New page. Market version for Polish firmy
// cateringowe (przyjęcia, wesela, komunie, konferencje, lunche do biura), not
// a translation of catering-website-design.en. In PL this is a development
// page that includes design.
// Semantic core: ref/food-venues.md has no measured PL catering phrases;
// target phrase from the brief slug: «strona internetowa dla firmy
// cateringowej» (H1, H2, cost H2, FAQ), «strona www cateringu» (metaTitle),
// «strona cateringu» (H2s). «catering dietetyczny» (diet-box subscriptions)
// is a different business — one sentence in the intro; not targeted.
// Intent: ref/intent-check-food.md — EN «catering website design» vs
// «catering website» 0 of 10 and «catering seo» vs «catering website» 0 of
// 10 → design/build page separate from SEO; sibling
// /pl/pozycjonowanie-strony-firmy-cateringowej linked.
// Polish angles: first screen with two paths (wycena przyjęcia / lunch do
// biura), menu według okazji z oznaczeniem 14 alergenów, cena za osobę i
// minimum, formularz wyceny, lunche do biura z fakturą na NIP i kontem firmy,
// zaliczka online (BLIK, Przelewy24, PayU; Landi Room — Stripe), zdjęcia z
// realizacji (DJ site under one second), obszar dostaw, szablon / kreator vs
// strona na zamówienie, AI-readable build, cost. Restaurants under NDA: one
// positive sentence, no details.
// NOT on this page: pozycjonowanie, podstrony okazji i sal jako SEO, wizytówka
// Google, aplikacje i portale w wynikach, sezony (/pl/pozycjonowanie-strony-
// firmy-cateringowej — sibling); restaurant site with a dining room
// (/pl/strona-dla-restauracji — linked once).
// Prices: /pl/cennik (3000–6000 zł, od 8500 zł), projekt w cenie. Owner’s
// rules: every page covers AI search; never say there are no clients from the
// visitor’s industry; no «faktura VAT».
import { p, h2, li, link, k } from "./pt";

export const cateringWebsiteDesignPl = {
  lang: "pl",
  group: "catering-website-design",
  slug: "strona-internetowa-dla-firmy-cateringowej",
  title: "Strona internetowa dla firmy cateringowej",
  heading: "Strona internetowa dla firmy cateringowej",
  excerpt:
    "Projektuję i wykonuję strony internetowe dla firm cateringowych: menu według okazji, cena za osobę i minimalne zamówienie, formularz wyceny z datą, liczbą gości, miejscem i dietami, zamawianie lunchy do biura z fakturą na firmę oraz zaliczka płacona BLIK-iem — w projekcie, który dobrze działa na telefonie.",
  seo: {
    metaTitle: "Strona www cateringu z formularzem wyceny | Bandziuk",
    metaDescription:
      "Strona internetowa dla firmy cateringowej: menu według okazji, cena za osobę, formularz wyceny, lunche do biura z fakturą i zaliczka BLIK-iem. Od 3000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt + wykonanie, jedna cena", "Od 3000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Wycena przyjęcia", "Menu na wesele i komunię", "Lunch do biura na jutro", "Zaliczka BLIK-iem"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona internetowa dla firmy cateringowej z menu i formularzem wyceny, projekt w cenie", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Strona firmy cateringowej z menu według okazji, formularzem wyceny, zamówieniami lunchy, zaliczkami online i kontami firm, projekt w cenie", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co dostajecie ze stroną internetową dla firmy cateringowej",
      items: [
        { _key: k("o"), iconName: "layers", title: "Menu według okazji", text: "Firmy, wesela, komunie, przyjęcia, z alergenami" },
        { _key: k("o"), iconName: "file-text", title: "Formularz wyceny w trzech krokach", text: "Data, goście, miejsce, budżet, diety" },
        { _key: k("o"), iconName: "shield-check", title: "Zaliczka online", text: "BLIK, Przelewy24 lub PayU po akceptacji oferty" },
        { _key: k("o"), iconName: "plug", title: "Lunche do biura", text: "Godzina zamówień, minimum, faktura z NIP" },
        { _key: k("o"), iconName: "image", title: "Zdjęcia z Waszych przyjęć", text: "Galerie według okazji, szybkie na telefonie" },
        { _key: k("o"), iconName: "sparkles", title: "Czytelna dla Google i asystentów AI", text: "Obszar, liczba gości, menu i ceny tekstem" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona firmy cateringowej", value: "3000–6000 zł", note: "projekt w cenie" },
        { _key: k("r"), label: "Wycena, lunche do biura, zaliczki, konta firm", value: "od 8500 zł", note: "projekt w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: strony internetowe, które zbudowałem",
      subtitle:
        "Każda z tych stron robi część pracy strony cateringu. Landi Room, salon kosmetyczny z Warszawy, sprzedaje kurs online ze strony na Next.js i Sanity z płatnością Stripe Checkout, a pierwsza kampania Google Ads dała ponad 100 sprzedaży — ten sam mechanizm „zapłać i dostań potwierdzenie” potrzebny przy zaliczce za przyjęcie. Strona DJ-a i producenta ma galerię wideo i formularz rezerwacji terminu na wydarzenia, a mimo to ładuje się w mniej niż sekundę — tak powinna działać galeria z realizacji cateringu. Felgilab, warszawska pracownia renowacji felg, przeszła na nowy WordPress z prostymi podstronami usług i cennika — tak powinny wyglądać pakiety i ceny za osobę. Warszawska firma remontowo-inwestycyjna ma projekt premium, w którym sprzedają duże zdjęcia gotowych realizacji. Psychoterapeuta Giuseppe z Mediolanu ma spokojny, indywidualny projekt na Next.js i Sanity, a ChatGPT cytuje już jego nowsze podstrony.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "e-commerce-landing-page-with-secured-video-access",
        "official-website-for-dj-and-producer-sasha-dith",
        "felgilab-wordpress-rebuild",
        "renovation-and-investment-website-with-premium-design",
        "psychotherapist-website-milan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej dla firmy cateringowej",
      subtitle: "Następnego dnia roboczego dostajecie propozycję podstron, krótki opis tego, jak zadziała wycena i płatności, oraz stałą cenę.",
      contextLabel: "Nazwa firmy cateringowej lub obecna strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Co macie teraz?", options: ["Tylko Facebook, Instagram i telefon", "Stronę z kreatora albo gotowego szablonu", "Starą stronę na WordPressie", "Tylko konta w aplikacjach z dostawą"] },
        { _key: k("z"), question: "Co strona ma robić najpierw?", options: ["Zbierać zapytania o przyjęcia", "Przyjmować zamówienia lunchy do biura", "Pobierać zaliczki online", "Wszystko po trochu"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Strona internetowa dla firmy cateringowej to miejsce, w którym para, office manager albo rodzice przed komunią sprawdzają menu i ceny za osobę, wysyłają zapytanie z datą i liczbą gości, a po przyjęciu oferty płacą zaliczkę BLIK-iem. Projektuję i wykonuję ją osobiście, od układu podstron po podłączenie płatności, więc za wygląd i działanie odpowiada jedna osoba, a cenę ustalamy przed rozpoczęciem. Ta strona jest dla firm, które obsługują przyjęcia, wesela, konferencje i biura; sklep z abonamentem na catering dietetyczny w pudełkach to inny projekt z innym koszykiem."),

        h2("Strona internetowa dla firmy cateringowej: co pokazuje pierwszy ekran"),
        p("Odwiedzający w kilka sekund decyduje, czy czyta dalej, więc pierwszy ekran na telefonie mówi bez przewijania:"),
        li("czym się zajmujecie i gdzie — „Catering na wesela, komunie i dla firm w Krakowie i okolicach”, Waszymi słowami"),
        li("dwie ścieżki: „Wycena przyjęcia” i „Lunch do biura”, jeśli dowozicie posiłki firmom"),
        li("jedno zdjęcie z Waszego przyjęcia, a nie z banku zdjęć"),
        li("przyciski „Zadzwoń” i „Napisz” dla tych, którzy wolą rozmowę"),
        p("Na telefonie przycisk wyceny jest przypięty u dołu ekranu. Historia firmy i kuchni jest niżej, dla tych, których oferta już zainteresowała."),

        h2("Menu cateringowe według okazji: firmy, wesela, komunie i przyjęcia"),
        p("Jedna kuchnia sprzedaje lunche w pudełkach, kolację weselną serwowaną do stołu i bufet na komunię, a każdy klient chce zobaczyć tylko swoją część. Strona dzieli menu według okazji, a każda podstrona menu pokazuje:"),
        li("zestawy albo przykładowe menu zapisane tekstem, z nazwami dań i gramaturą"),
        li("oznaczenia diet — wegetariańska, wegańska, bezglutenowa — i informację o 14 alergenach, którą w UE trzeba podać także przy jedzeniu na przyjęcia"),
        li("formy podania: bufet, serwis do stołu, stacje, dostawa bez obsługi"),
        li("przycisk „Zapytaj o to menu”, który otwiera formularz z wybranym zestawem"),
        p("Menu zmieniacie w panelu. Nowa karta sezonowa zastępuje starą w kilka minut, a układ strony się nie rozjeżdża."),

        h2("Cena za osobę i minimalne zamówienie na stronie cateringu"),
        p("Klient chce wiedzieć, czy mieści się w budżecie, zanim napisze. Przy każdym menu pokazuję cenę „od” za osobę osobno dla bufetu, serwisu do stołu i dostawy, najmniejszą obsługiwaną liczbę gości albo wartość zamówienia i to, co jest płatne dodatkowo: obsługa kelnerska, zastawa, dojazd poza obszar, dodatkowe godziny. Jeśli wolicie nie podawać dokładnych kwot, wystarczą widełki."),
        p("Przy bufetach i lunchach przydaje się prosty kalkulator: klient wybiera zestaw, wpisuje liczbę osób, widzi orientacyjną kwotę i przechodzi do formularza z oboma wartościami już wpisanymi. Ostateczną ofertę i tak przygotowujecie Wy."),

        h2("Formularz wyceny cateringu: data, liczba gości, miejsce, budżet i diety"),
        p("Formularz wyceny to najważniejsza część strony cateringu. Pyta o to, czego potrzebujecie do prawdziwej oferty, i o nic więcej:"),
        li("rodzaj przyjęcia i data, z zajętymi terminami oznaczonymi od razu"),
        li("liczba gości oraz sala albo adres, z pytaniem o zaplecze kuchenne na miejscu"),
        li("forma podania i budżet na osobę wybrany z przedziałów"),
        li("diety: ile porcji wegetariańskich, wegańskich, bezglutenowych i dla alergików"),
        li("dane kontaktowe i preferowana forma kontaktu: telefon, mail czy WhatsApp"),
        p("Formularz ma trzy krótkie kroki, więc na telefonie nie przypomina urzędowego druku. Każde zapytanie trafia do skrzynki albo CRM w tym samym układzie, a klient dostaje automatyczną odpowiedź z informacją, kiedy przyjdzie oferta."),

        h2("Zamówienia online na lunche do biura z fakturą na firmę"),
        p("Lunche do biura działają jak sklep. Strona pokazuje zestawy dnia, sałatki i śniadania z cenami, godzinę zamówień na następny dzień, przedziały dostawy i minimalne zamówienie. Firma płaci BLIK-iem albo kartą, może dodać listę nazwisk do podpisania pudełek i powtórzyć zamówienie z zeszłego tygodnia jednym kliknięciem. Menu na kolejny tydzień publikujecie z wyprzedzeniem, a dania wyprzedane na dany dzień strona ukrywa sama."),
        p("Stali klienci dostają konto firmy: zapisane adresy, kilka osób uprawnionych do zamawiania i fakturę zbiorczą za miesiąc po wpisaniu NIP zamiast płatności przy każdym zamówieniu. Księgowość dostaje to, czego potrzebuje, bez wymiany maili."),

        h2("Zaliczka za przyjęcie online: BLIK, Przelewy24 i potwierdzenie terminu"),
        p("Termin przyjęcia potwierdza zaliczka — albo zadatek, zależnie od tego, jak zapisujecie to w umowie. Po akceptacji oferty klient dostaje link do płatności, płaci BLIK-iem, przelewem lub kartą przez Przelewy24 albo PayU, a termin oznacza się jako zarezerwowany; link na resztę kwoty wychodzi bliżej daty. Nikt nie przepisuje numeru konta z maila, a Wy widzicie od razu, które przyjęcia są opłacone."),
        p("Ten sam mechanizm zbudowałem dla warszawskiego salonu Landi Room: kupująca płaci przez Stripe Checkout i od razu dostaje dostęp do kursu, bez ręcznej pracy po stronie salonu."),

        h2("Zdjęcia z realizacji w projekcie strony cateringu"),
        p("Zdjęcia bufetów z banku zdjęć wyglądają tak samo na każdej stronie i klienci je rozpoznają. Projekt opiera się na Waszych kadrach: stół przed wejściem gości, dania na talerzach, lunche spakowane do dostawy, ekipa przy pracy. Galerie są podzielone według okazji — para ogląda wesela, office manager lunche i konferencje."),
        p("Galeria cateringu z czasem urasta do setek zdjęć, dlatego obrazy są przycinane do rozmiaru ekranu i doładowywane podczas przewijania. Zbudowana przeze mnie strona DJ-a ma galerię wideo i ładuje się w mniej niż sekundę; galeria z przyjęć działa na tej samej zasadzie. Jeśli zdjęć jest jeszcze mało, przygotowuję dla fotografa listę kadrów na najbliższe przyjęcia: stół przed wejściem gości, zbliżenia dań, ekipa przy pracy, sala po nakryciu."),

        h2("Obszar dostaw i warunki obsługi na stronie firmy cateringowej"),
        p("Klient musi szybko wiedzieć, czy dojedziecie do jego sali. Na stronie jest prosta mapa miast i gmin, które obsługujecie, koszt dojazdu albo minimalne zamówienie dla każdej strefy i wymagane wyprzedzenie dla każdego rodzaju przyjęcia. Formularz sprawdza adres i od razu mówi, jeśli sala leży poza obszarem. Strefy i stawki zmieniacie sami w panelu. Przy przyjęciach w plenerze, w namiocie albo w domu formularz dopytuje o dostęp do prądu i wody, miejsce na kuchnię polową i czas na rozstawienie, żeby te sprawy wyszły przed wyceną, a nie w dniu przyjęcia."),

        h2("Szablon, kreator czy strona cateringu na zamówienie"),
        p("Wiele firm cateringowych zaczyna od profilu na Facebooku, strony z kreatora albo gotowego szablonu. To rozsądny start dla nowej firmy z jednym menu. Ograniczenia widać, gdy przybywa okazji i klientów: formularz wyceny jest zwykłym formularzem kontaktowym, zaliczki i lunche do biura wymagają kilku wtyczek, które ze sobą nie współpracują, menu według okazji zamienia się w jedną długą stronę, a całość wygląda jak u konkurencji, która kupiła ten sam szablon."),
        p(
          "Strona na zamówienie powstaje wokół Waszych okazji, procesu wyceny i zdjęć, na WordPressie albo na Next.js z panelem do edycji, a kod, domena i baza klientów zostają Waszą własnością. Robiłem strony dla restauracji, których właściciele poprosili, żeby nie pokazywać ich publicznie. Jeśli prowadzicie też restaurację z salą dla gości, zajrzyjcie na stronę ",
          link("strona dla restauracji", "/pl/strona-dla-restauracji"),
          ".",
        ),

        h2("Strona cateringu, którą ChatGPT i Google AI Overviews potrafią przeczytać"),
        p("Rodzic może zapytać ChatGPT albo podsumowanie AI w Google, który catering w okolicy obsłuży komunię na czterdzieści osób z menu bezglutenowym; odpowiedź powstanie z tekstu, który asystent umie przeczytać. Obszar dostaw, liczba gości, menu, diety, wyprzedzenie rezerwacji i widełki cen zapisuję więc w HTML zwykłym tekstem, a nie w PDF-ie z menu czy na grafice, a firmę i usługi opisuję danymi strukturalnymi. Na tych samych zasadach zbudowana jest strona Giuseppe z Mediolanu, której nowe podstrony pojawiają się w odpowiedziach ChatGPT."),
        p(
          "Stałą pracę nad obecnością w odpowiedziach AI opisuje strona ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ", a widoczność w Google na frazy „catering dla firm” czy „catering na wesele” — na stronie ",
          link("pozycjonowanie strony firmy cateringowej", "/pl/pozycjonowanie-strony-firmy-cateringowej"),
          ".",
        ),

        h2("Ile kosztuje strona internetowa dla firmy cateringowej"),
        li("Prosta strona — strona główna, menu według okazji, galeria, obszar dostaw i formularz wyceny: od 3000 do 6000 zł."),
        li("Strona z formularzem wyceny w krokach, kalkulatorem, zamówieniami lunchy do biura, zaliczkami online i kontami firm: od 8500 zł."),
        p(
          "W obu wariantach projekt graficzny jest w cenie. Kolejne etapy, od pierwszej rozmowy do publikacji, opisuje strona ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ", a wszystkie stawki zebrałem w ",
          link("cenniku", "/pl/cennik"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strona internetowa dla firmy cateringowej: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona internetowa dla firmy cateringowej?", "Prosta strona z menu i formularzem wyceny kosztuje od 3000 do 6000 zł, a strona z zamówieniami lunchy, zaliczkami online i kontami firm od 8500 zł. Projekt graficzny jest w cenie, a stałą kwotę podaję po obejrzeniu Waszego menu i sposobu wyceny."],
          ["Ile trwa wykonanie strony cateringu?", "Najczęściej pięć–osiem tygodni od otrzymania materiałów. Najdłużej trwa przygotowanie menu, cen i zdjęć; prostą stronę z formularzem można uruchomić szybciej."],
          ["Czy klient zapłaci zaliczkę na stronie?", "Tak. Po akceptacji oferty dostaje link do płatności BLIK-iem, przelewem lub kartą, a później drugi link na resztę kwoty. Przyjęcie oznacza się jako opłacone."],
          ["Czy strona przyjmie zamówienia lunchy do biura z godziną graniczną?", "Tak. Godzina zamówień, przedziały dostawy, minimum i dni bez dostaw to ustawienia w panelu. Stali klienci powtarzają zamówienia i dostają fakturę zbiorczą."],
          ["Czy wystarczy szablon strony cateringu?", "Dla nowej firmy z jednym menu często tak. Strona na zamówienie opłaca się, gdy sprzedajecie kilka rodzajów przyjęć, pobieracie zaliczki, dowozicie lunche firmom albo chcecie formularza, który zbiera wszystko do wyceny."],
          ["Czy sami zmienimy menu, ceny i zdjęcia?", "Tak. Menu, zestawy, ceny, strefy dostaw, zajęte terminy i galerie edytujecie w panelu, również na telefonie, a nowe pozycje dostają ten sam wygląd co reszta strony."],
          ["Czy pracujesz z firmami cateringowymi z innych miast?", "Tak, z całej Polski. Omawiamy wszystko przez wideo i maile, kolejne etapy akceptujecie online, a za stronę wystawiam fakturę na firmę."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową dla firmy cateringowej: co mi wysłać"),
        p(
          "Wyślijcie link do obecnej strony albo profilu, menu z cenami za osobę i minimalnym zamówieniem, rodzaje przyjęć, które obsługujecie, obszar dostaw, opis tego, jak dziś przygotowujecie wyceny i pobieracie zaliczki, używany system płatności i kilka zdjęć z ostatnich przyjęć. W odpowiedzi dostaniecie proponowany układ strony i stałą cenę. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
