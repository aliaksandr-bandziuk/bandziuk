// Landing page fixture: Pozycjonowanie winnicy (PL), group «winery-seo». New
// page. Market version for Polish winnice — mostly small family vineyards in
// Lubuskie, Małopolska, Podkarpacie and other regions, living on enoturystyka,
// degustacje, noclegi and sales at the cellar door — not a translation of
// winery-seo.en.
// Semantic core: ref/creative-leisure.md has no PL phrases above the floor for
// wineries; H1 and headings carry the slug phrase «pozycjonowanie winnicy»
// and the owner’s preferred form «pozycjonowanie strony winnicy» (metaTitle,
// H2), plus the words visitors type: winnice w Polsce, enoturystyka,
// degustacja wina, zwiedzanie winnicy, winnica z noclegiem, szlak winiarski.
// Intent: ref/intent-check-creative-leisure.md — EN «winery seo» vs «winery
// website design» 0 of 10 shared URLs → SEO and website are separate pages
// here too; /pl/strona-internetowa-dla-winnicy is the sibling.
// Angles: how Polish enoturyści search (region, weekend, noclegi, the wine),
// degustacje and zwiedzanie pages, regional szlaki winiarskie and itinerary
// pages, wizytówka Google with seasonal hours, events (winobranie, dni otwarte,
// wesela), klub wina i przedsprzedaż rocznika, wine pages for Polish varieties
// (Solaris, Johanniter, Regent, Rondo), Polish restrictions on wine
// advertising — general («sprawdź przepisy»), AI answers.
// NOT on this page: projekt i budowa strony, rezerwacja, sklep, bramka 18+,
// wersje językowe, zdjęcia (/pl/strona-internetowa-dla-winnicy — sibling);
// wizytówka in depth (/pl/oferty/pozycjonowanie-lokalne); noclegi SEO
// (/pl/pozycjonowanie-strony-hotelu — neighbour, linked once).
// Owner’s rules: every SEO page covers AI search (GEO, AEO); never say there
// are no clients from the visitor’s industry; no guaranteed positions; alcohol
// rules only in general terms.
import { p, h2, h3, li, link, k } from "./pt";

export const winerySeoPl = {
  lang: "pl",
  group: "winery-seo",
  slug: "pozycjonowanie-winnicy",
  title: "Pozycjonowanie winnicy",
  heading: "Pozycjonowanie winnicy",
  excerpt:
    "Zajmuję się pozycjonowaniem winnic: podstrony degustacji i zwiedzania, które znajdują enoturyści planujący weekend w Lubuskiem, Małopolsce czy na Podkarpaciu, wizytówka Google z aktualnymi godzinami, strony winobrania i wesel, podstrony win i obecność w odpowiedziach AI.",
  seo: {
    metaTitle: "Pozycjonowanie strony winnicy i enoturystyka | Bandziuk",
    metaDescription:
      "Pozycjonowanie winnicy: frazy enoturystów, degustacje i zwiedzanie, wizytówka Google, winobranie i wesela, podstrony win, odpowiedzi AI. Audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Degustacje, zwiedzanie, wydarzenia", "Audyt od 1000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Winnica z degustacją w sobotę", "Zwiedzanie dla grupy 10 osób", "Winobranie — program", "Zadzwoń · Dojazd"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO winnicy: strona, wizytówka Google, inne winnice w regionie", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO dla winnicy: podstrony degustacji, wydarzeń i win, dane strukturalne", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie winnicy", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje pozycjonowanie winnicy",
      items: [
        { _key: k("o"), iconName: "search", title: "Frazy, które wpisują enoturyści", text: "Region, weekend, degustacja, nocleg, szczep" },
        { _key: k("o"), iconName: "layers", title: "Podstrona dla każdej formy wizyty", text: "Degustacja, zwiedzanie, grupy, firmy" },
        { _key: k("o"), iconName: "map-pin", title: "Wizytówka Google winnicy", text: "Godziny w sezonie i poza nim, dojazd, opinie" },
        { _key: k("o"), iconName: "file-text", title: "Winobranie, dni otwarte i wesela", text: "Stałe podstrony, co roku z nowymi datami" },
        { _key: k("o"), iconName: "sparkles", title: "Winnica polecana przez asystentów AI", text: "Fakty o wizytach, które ChatGPT może zacytować" },
        { _key: k("o"), iconName: "trending-up", title: "Raport w rezerwacjach i telefonach", text: "Degustacje, noclegi, zapytania o wesela" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO winnicy", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe pozycjonowanie winnicy", value: "od 3500 zł / mies.", note: "podstrony, Mapy, wydarzenia, AI", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: strony, które zbudowałem i pozycjonuję",
      subtitle:
        "Cypryjska platforma nieruchomości premium działa w pięciu językach; zbudowałem ją od podstaw i nadal co miesiąc odpowiadam za jej SEO — trafiają na nią goście z zagranicy, tak jak do winnic przy granicy z Niemcami czy Słowacją. Wielojęzyczny serwis agencji edukacyjnej obejmuje dziesięć krajów. Warsztat samochodowy z Warszawy żyje z Map Google i telefonów — winnica z degustacjami żyje z mapy i rezerwacji. ScanM2 (skanowanie laserowe 3D i BIM) zostawił stronę z kreatora, która przez dwa lata nie dała ani jednego zapytania; po przebudowie ruch organiczny jest u niego 29 razy wyższy. Nowe podstrony z serwisu psychoterapeuty z Mediolanu ChatGPT już przytacza w swoich odpowiedziach. Winnicy te same elementy dają podstrony pod wyszukiwania przed wyjazdem, dopracowaną wizytówkę i miejsce w rekomendacjach asystentów.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "build-and-optimize-a-multilingual-real-estate-platform",
        "auto-repair-seo-and-ux-boost",
        "architecture-website-rebuild-and-seo-scan",
        "psychotherapist-website-milan",
        "full-multilingual-website-development-and-seo-for-student-services",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena pozycjonowania winnicy",
      subtitle: "W ciągu dnia roboczego dostaniesz trzy pierwsze rzeczy do poprawy na stronie winnicy i w Mapach Google oraz stałą cenę.",
      contextLabel: "Nazwa winnicy lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Czego winnica potrzebuje najbardziej?", options: ["Gości na degustacjach", "Rezerwacji noclegów", "Wesel i imprez firmowych", "Klientów na wino z piwnicy"] },
        { _key: k("z"), question: "Skąd dziś przychodzą goście?", options: ["Z Map Google", "Z Facebooka i Instagrama", "Z Booking.com lub Nocowanie.pl", "Ze szlaku winiarskiego i poleceń"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Pozycjonowanie winnicy to praca nad tym, żeby para planująca weekend w Zielonej Górze, firma szukająca degustacji dla zespołu i narzeczeni, którzy marzą o ślubie wśród winorośli, znajdowali w Google, w Mapach i w odpowiedziach AI Twoją winnicę. Winnice w Polsce to zwykle małe, rodzinne gospodarstwa, w których właściciel jest jednocześnie winiarzem, przewodnikiem i księgowym. Dlatego pracuję sam i biorę na siebie całość: audyt, podstrony, poprawki w kodzie, wizytówkę i raport."),

        h2("Pozycjonowanie strony winnicy: jak szukają enoturyści"),
        p("Mało kto wpisuje nazwę winnicy, której jeszcze nie zna. Enoturysta zaczyna od regionu, terminu albo pomysłu na wyjazd:"),
        li("region — „winnice lubuskie zwiedzanie”, „winnice Podkarpacie”, „winnice pod Krakowem”, „winnice Sandomierz”"),
        li("forma wizyty — „degustacja wina z przekąskami”, „zwiedzanie winnicy z przewodnikiem”, „winnica z noclegiem”"),
        li("okazja — „prezent degustacja wina dla dwojga”, „wyjazd integracyjny winnica”, „ślub w winnicy”"),
        li("samo wino — „polskie wino Solaris”, „gdzie kupić wino z [nazwa winnicy]”"),
        p("Przed pisaniem podstron zbieram dane wyszukiwań dla Twojego regionu i Twojej oferty. Często się okazuje, że frazy z regionem i słowem „nocleg” mają więcej wyszukiwań, niż właściciele przypuszczają, a frazy prezentowe rosną przed świętami."),

        h2("Degustacje i zwiedzanie winnicy: podstrony, które przyjmują rezerwacje"),
        p("Na wielu stronach winnic jest jedna zakładka „Zwiedzanie” z numerem telefonu. Taka strona nie odpowie jednocześnie na pytanie pary, grupy przyjaciół i działu HR. Każda forma wizyty dostaje własną podstronę:"),
        li("ile win w degustacji, czy z przekąskami lokalnymi, ile trwa i ile kosztuje od osoby"),
        li("czy zwiedzanie obejmuje winnicę, winiarnię i piwnicę, i kto oprowadza"),
        li("dla ilu osób, w jakie dni, od kiedy do kiedy w sezonie i jak zarezerwować"),
        li("co z kierowcą, dziećmi i psem, gdzie zaparkować i czy dojedzie bus"),
        p("Osobna podstrona dla firm — degustacja jako wyjazd integracyjny, z fakturą i możliwością cateringu — przyciąga zapytania, których nie przyniesie żadna strona dla par."),

        h2("Enoturystyka i szlaki winiarskie w pozycjonowaniu winnicy"),
        p("Polskie winnice skupiają się w kilku regionach, a w wielu z nich działają szlaki winiarskie łączące kilka czy kilkanaście gospodarstw. Enoturyści planują wyjazd po szlaku, więc winnica, która na swojej stronie opisze region, zyskuje ruch z fraz ogólnych, nie tylko z własnej nazwy. Przydają się podstrony:"),
        li("plan jednodniowej lub weekendowej trasy z Twoją winnicą i sąsiadami, których chętnie polecasz"),
        li("dojazd z najbliższego miasta i dworca, transport dla grup"),
        li("kiedy przyjechać — kwitnienie, lato, winobranie, jesień w piwnicy"),
        p(
          "Winnica z pokojami lub agroturystyką walczy też o frazy noclegowe, które rządzą się innymi zasadami — opisuję je na stronie ",
          link("pozycjonowanie strony hotelu", "/pl/pozycjonowanie-strony-hotelu"),
          ".",
        ),

        h2("Wizytówka Google winnicy: godziny w sezonie, dojazd i opinie"),
        p("Na frazy „winnica blisko mnie” i „degustacja wina w okolicy” Google najpierw pokazuje mapę, a wielu gości sprawdza ją już w drodze. W wizytówce winnicy liczą się:"),
        li("kategoria „Winnica” jako główna i dodatkowe tylko dla tego, co naprawdę prowadzisz: noclegi, restauracja, sala na przyjęcia"),
        li("godziny w sezonie i poza nim oraz informacja, czy przyjmujecie bez rezerwacji — nikt nie powinien całować klamki"),
        li("dokładny punkt dojazdu, bo winnice leżą często przy polnych drogach"),
        li("zdjęcia co kilka tygodni: krzewy przez cały rok, piwnica, goście przy stole, winobranie"),
        li("prośba o opinię po każdej wizycie, z wzmianką, na jakiej degustacji gość był"),
        p(
          "Szczegóły pracy z wizytówką i mapą znajdziesz w ofercie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Wydarzenia w winnicy: winobranie, dni otwarte, koncerty i wesela"),
        p("Wydarzenia przyciągają ludzi, którzy nigdy nie szukaliby degustacji. Każde powtarzające się wydarzenie — winobranie, dni otwarte, koncert w winnicy, kolacja z winiarzem — dostaje stałą podstronę, którą co roku aktualizujesz o nowe daty, zamiast tworzyć nową. Podstrona, która zbiera odnośniki i odwiedziny przez kilka sezonów, wyprzedza stronę założoną trzy tygodnie przed terminem. Dane strukturalne wydarzenia przekazują Google datę, miejsce i link do biletów."),
        p("Wesela i przyjęcia to osobny rynek z długim namysłem. Narzeczeni porównują liczbę gości, plan na deszcz, zasady cateringu, noclegi dla gości i widełki cen. Podstrona sali z odpowiedziami na te pytania i zdjęciami prawdziwych przyjęć w Twojej winnicy przynosi zapytania o wiele większe niż pojedyncza rezerwacja degustacji."),

        h2("Klub wina i przedsprzedaż rocznika: podstrona dla stałych klientów"),
        p("Po degustacji część gości chce wrócić po kolejny rocznik. Klub wina, lista przedsprzedaży albo powiadomienie o nowym roczniku to sposób, żeby nie stracili z Tobą kontaktu. Podstrona klubu, która mówi, co dostaje członek, jak często, na jakich warunkach i jak zrezygnować, odpowiada na wyszukiwania osób, które wróciły z wyjazdu i szukają Twojej winnicy po nazwie. Treści tylko dla członków zostają poza wyszukiwarką."),

        h2("Podstrony win w pozycjonowaniu winnicy: Solaris, Johanniter, Regent, Rondo"),
        p("W Polsce rosną głównie odmiany odporne na chłód i choroby: Solaris, Johanniter, Seyval Blanc, Hibernal, Regent, Rondo, a coraz częściej także vinifera. Wiele osób nie zna tych nazw i szuka ich po degustacji albo po butelce kupionej w prezencie. Podstrona każdego wina — szczep, rocznik, siedlisko, nuty, do czego podać, medale z nazwą konkursu i rokiem — trafia w takie wyszukiwania."),
        h3("Wyprzedany rocznik: zostaw podstronę zamiast usuwać"),
        p("Gdy rocznik się skończy, podstrona zostaje z informacją „wyprzedane” i odnośnikiem do następnego rocznika. Usunięcie jej kasuje to, co zdobyła w Google przez kilka sezonów."),

        h2("Reklama wina a treści na stronie winnicy: ograniczenia w Polsce"),
        p("Polskie przepisy mocno ograniczają reklamę i promocję napojów alkoholowych, w tym wina, a granica między informacją a reklamą bywa sporna. Treści SEO w winnicy opisują miejsce, uprawę, szczepy, wizytę i wydarzenia, zamiast zachęcać do picia; unikają też obietnic zdrowotnych. Osobne zasady dotyczą sprzedaży wina, w tym na odległość. Sprawdź aktualne przepisy z prawnikiem — to ogólne wskazówki, a nie porada prawna."),

        h2("Sezon w pozycjonowaniu winnicy: majówka, lato, winobranie i święta"),
        p("Ruch w winnicy idzie za kalendarzem: pierwsze wizyty w majówkę, weekendy letnie, winobranie we wrześniu i październiku, prezenty przed świętami i cicha zima. Podstrona potrzebuje kilku tygodni, żeby wejść wysoko, więc strony sezonu publikuję z dwu-, trzymiesięcznym wyprzedzeniem. Zima to czas na przepisanie podstron degustacji, nowe zdjęcia i podstronę bonów prezentowych, której ludzie szukają w listopadzie i grudniu."),

        h2("Booking.com, Nocowanie.pl, Facebook i strona szlaku a własna strona winnicy"),
        p("Wiele winnic zbiera gości przez Facebooka, profil na stronie regionalnego szlaku i oferty noclegów na Booking.com czy Nocowanie.pl. To dobre źródła, ale każde z nich zatrzymuje część relacji z gościem: prowizję, dane kontaktowe, opinię. Własna strona i wizytówka to miejsca, z których gość trafia prosto do Ciebie i może zostawić adres do klubu wina. Ja odpowiadam za stronę i Mapy Google, a raport pokazuje rezerwacje z tych kanałów obok tych z portali — wtedy widać, skąd naprawdę przyjeżdżają goście."),

        h2("Pozycjonowanie winnicy w ChatGPT i Google AI Overviews (GEO, AEO)"),
        p("Planując wyjazd, ludzie piszą do ChatGPT i Perplexity albo czytają podsumowanie AI nad wynikami Google: „jakie winnice w Lubuskiem przyjmują grupy”, „gdzie na Podkarpaciu jest winnica z noclegiem”, „czy polskie wino Solaris jest wytrawne”. Odpowiedź powstaje ze stron, które asystent potrafi przeczytać i zweryfikować w innych miejscach. Pracę nad obecnością w takich odpowiedziach nazywa się GEO lub AEO — od generative engine optimization i answer engine optimization. Dla winnicy to konkretne zadania:"),
        li("formy wizyty, ceny, terminy i zasady dla grup zapisane zwykłymi zdaniami, a nie tylko na grafice z Facebooka"),
        li("dane strukturalne opisujące winnicę, wydarzenia i wina"),
        li("te same dane w wizytówce Google, na stronie szlaku winiarskiego, na Booking.com i Nocowanie.pl"),
        li("odpowiedzi na pytania gości na Twojej stronie, podpisane przez winiarza"),
        p(
          "Zapisuję, co asystenci mówią o Twojej winnicy przed zmianami, i porównuję to z ich odpowiedziami po kilku miesiącach, łącznie z listą winnic, które polecają zamiast Twojej. Metoda: ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Ile kosztuje pozycjonowanie winnicy"),
        li("Audyt strony winnicy, wizytówki i konkurencyjnych winnic z regionu: od 1000 zł jednorazowo; dostajesz listę poprawek według ważności."),
        li("Zadania jednorazowe — podstrony degustacji, wydarzeń lub win, porządki w wizytówce, dane strukturalne: od 1000 do 3000 zł."),
        li("Pozycjonowanie winnicy co miesiąc: nowe podstrony, Mapy i opinie, aktualizacja wydarzeń, kontrola odpowiedzi AI i raport w rezerwacjach — od 3500 zł miesięcznie."),
        p(
          "Gdy obecnej strony nie opłaca się poprawiać, zacznij od strony ",
          link("strona internetowa dla winnicy", "/pl/strona-internetowa-dla-winnicy"),
          ". Jak wygląda comiesięczna współpraca, wyjaśniam w zakładce ",
          link("strategia i optymalizacja SEO", "/pl/oferty/strategia-i-optymalizacja-seo"),
          ", a pełną listę cen znajdziesz w ",
          link("cenniku", "/pl/cennik"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie winnicy: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje pozycjonowanie winnicy?", "Audyt kosztuje od 1000 zł, zadania jednorazowe od 1000 do 3000 zł, a stała współpraca od 3500 zł miesięcznie. Gdy opiszesz winnicę, formy wizyt i źródła gości, podam jedną, stałą kwotę."],
          ["Kiedy pozycjonowanie winnicy zaczyna przynosić gości?", "Efekt poprawionej wizytówki i świeżych opinii widać w Mapach często już po kilku tygodniach. Nowe podstrony rosną zwykle dwa–cztery miesiące. Dlatego podstrony na sezon i winobranie przygotowuję zimą i wczesną wiosną, a nie w lipcu."],
          ["Czy mała winnica w ogóle potrzebuje SEO, skoro goście przychodzą z polecenia?", "Polecenia zwykle kończą się wyszukaniem nazwy w Google, więc strona i wizytówka i tak decydują, czy gość zadzwoni. SEO dodaje do tego ludzi, którzy szukają regionu, degustacji czy noclegu i jeszcze o Tobie nie słyszeli."],
          ["Czy winnica powinna podawać ceny degustacji na stronie?", "Tak. Cena od osoby, liczba win i to, co jest w zestawie, to pierwsze pytania gości. Winnica, która je podaje, wygrywa porównanie z tą, która każe dzwonić, a asystenci AI mają co zacytować."],
          ["Czy przepisy o reklamie alkoholu nie zabraniają pozycjonowania winnicy?", "Pozycjonowanie dotyczy treści o winnicy, wizycie, uprawie i winach, a nie reklamy picia. Granice bywają jednak sporne, więc sformułowania w treściach warto skonsultować z prawnikiem; ja trzymam się zasad, które mi przekażesz."],
          ["Czy ChatGPT poleca winnice?", "Tak, gdy ktoś zapyta o winnice w regionie. Asystent wybiera te, o których znajduje sprawdzalne fakty: formy wizyt, ceny, godziny, opinie i jasne odpowiedzi na pytania. Gwarancji polecenia nie ma, ale bez tych faktów asystent nie ma czego powtórzyć; odpowiedzi porównuję przed zmianami i po nich."],
          ["Czy współpracujesz z winnicami z Lubuskiego, Podkarpacia czy Małopolski?", "Tak, i z każdego innego regionu, np. z Dolnego Śląska czy Lubelszczyzny. Pracuję zdalnie, rozmawiamy po polsku, a treści dla gości z zagranicy mogę przygotować także po angielsku i rosyjsku."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie winnicy: co mi wysłać"),
        p(
          "Wyślij nazwę winnicy, adres strony, link do wizytówki Google, formy wizyt, które oferujesz, wydarzenia w kalendarzu, informację o noclegach i to, czego chcesz więcej — degustacji, wesel, gości na nocleg czy klientów na wino z piwnicy. W odpowiedzi dostaniesz listę pierwszych poprawek i jedną stałą cenę. Skorzystaj z ",
          link("formularza powyżej", "#quote"),
          " albo napisz na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
