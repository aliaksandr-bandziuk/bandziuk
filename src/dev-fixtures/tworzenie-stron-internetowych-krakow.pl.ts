// Landing page fixture: Tworzenie stron internetowych w Krakowie (PL), group
// «tworzenie-stron-internetowych-krakow». City page, stage 3 pilot.
// Phrases (ref/city-keywords.md, ref/pl-cities.md; volumes/month, Poland):
// strony internetowe kraków 880 · tworzenie stron internetowych kraków 210 ·
// projektowanie stron internetowych kraków 110 · strony internetowe kraków
// cennik 40 · tanie strony internetowe kraków 30 · tworzenie stron
// internetowych kraków cennik 10. PAA: «Jaka jest cena projektowania stron
// internetowych?» → FAQ.
// Intent (ref/intent-check-pl-cities.md): «tworzenie stron internetowych
// kraków» vs «projektowanie stron kraków» 0 shared URLs, vs «strony internetowe
// kraków» 0 shared URLs (1 shared domain) — fragmented SERP of local studios,
// freelancers and Oferteo → one page carrying all three in H2/FAQ. SEO vs
// website build: separate page.
// City angle: tourism (apartments, guides, restaurants on Kazimierz and the
// Stare Miasto, trips to Wieliczka) → multilingual sites with booking
// enquiries; IT and BPO offices → expats looking for services in English;
// students; dense studio market, «tanie strony» demand; districts and
// communes around the city (Wieliczka, Skawina, Niepołomice, Zielonki).
// Prices: /pl/cennik — prosta strona 3000–6000 zł, pełna strona od 8500 zł,
// projekt graficzny w cenie.
// NOT on this page: pozycjonowanie (/pl/pozycjonowanie-stron-krakow); online
// shops (not offered); booking engines themselves (integrated, not built).
// Owner’s rules: remote from Warsaw, no visits promised; never say there are no
// clients from the visitor’s city or industry.
import { p, h2, h3, li, ol, link, k } from "./pt";

export const tworzenieStronInternetowychKrakowPl = {
  lang: "pl",
  group: "tworzenie-stron-internetowych-krakow",
  slug: "tworzenie-stron-internetowych-krakow",
  title: "Tworzenie stron internetowych w Krakowie",
  heading: "Tworzenie stron internetowych w Krakowie",
  excerpt:
    "Tworzenie stron internetowych w Krakowie dla firm turystycznych, usługowych i B2B: projekt graficzny w cenie, wersje językowe dla gości i obcokrajowców, podstrony usług i dzielnic, panel do samodzielnej edycji. Robi to jedna osoba, za cenę z cennika.",
  seo: {
    metaTitle: "Strony internetowe Kraków: projekt i cennik | Bandziuk",
    metaDescription:
      "Strony internetowe dla firm z Krakowa: projekt w cenie, wersje PL/EN, podstrony usług i dzielnic, formularz zgodny z RODO, szybkie na telefonie. Od 3000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt w cenie strony", "Od 3000 zł", "Wersje PL · EN · UA"],
  heroPhonePoints: ["Book a table · Zarezerwuj", "Menu i godziny", "Dojazd: Kazimierz", "Napisz na WhatsApp"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona internetowa dla firmy z Krakowa, projekt w cenie", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Pełna strona firmy z Krakowa: wersje językowe, podstrony usług i dzielnic, zapytania o rezerwację, integracje, projekt w cenie", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co dostajecie ze stroną internetową z Krakowa",
      items: [
        { _key: k("o"), iconName: "message-circle", title: "Wersje językowe pisane dla ludzi", text: "Angielska dla gości i obcokrajowców, ukraińska i inne w razie potrzeby" },
        { _key: k("o"), iconName: "plug", title: "Rezerwacje i zapytania", text: "Integracja z systemem rezerwacji lub formularz z datą i liczbą osób" },
        { _key: k("o"), iconName: "layers", title: "Podstrony usług i dzielnic", text: "Tam, gdzie macie klientów: od Podgórza po Wieliczkę" },
        { _key: k("o"), iconName: "image", title: "Projekt graficzny w cenie", text: "Wasze zdjęcia i charakter miejsca zamiast szablonu" },
        { _key: k("o"), iconName: "gauge", title: "Szybka na telefonie", text: "Turysta otwiera stronę na ulicy, często na roamingu" },
        { _key: k("o"), iconName: "sparkles", title: "Czytelna dla Google i asystentów AI", text: "Fakty tekstem w każdym języku, dane strukturalne firmy" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona firmy z Krakowa", value: "3000–6000 zł", note: "projekt w cenie" },
        { _key: k("r"), label: "Języki, rezerwacje, dzielnice, integracje", value: "od 8500 zł", note: "projekt w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Strony internetowe, które zaprojektowałem i zbudowałem",
      subtitle:
        "Wielojęzyczny serwis agencji edukacyjnej dla dziesięciu krajów, strona firmy skanowania laserowego 3D i modelowania BIM w trzech językach, premium strona firmy remontowo-inwestycyjnej z Warszawy oraz dwie strony warszawskich warsztatów: przechowalni opon i pracowni renowacji felg. Krakowskiej firmie przyda się z nich to, co najważniejsze w tym mieście: strony dla klientów mówiących różnymi językami, staranny projekt i szybkie, proste ścieżki do telefonu lub zapytania.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "full-multilingual-website-development-and-seo-for-student-services",
        "architecture-website-rebuild-and-seo-scan",
        "renovation-and-investment-website-with-premium-design",
        "tyre-storage-landing-page-with-editable-seo",
        "felgilab-wordpress-rebuild",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej dla firmy z Krakowa",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: wysyłam proponowany układ strony, listę języków i kwotę, która się nie zmieni.",
      contextLabel: "Nazwa firmy lub obecna strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Jakiej strony potrzebujecie?", options: ["Nowej, od zera", "Przebudowy obecnej", "Wersji językowej istniejącej strony", "Jeszcze nie wiem"] },
        { _key: k("z"), question: "Dla kogo jest strona?", options: ["Turyści i goście", "Mieszkańcy Krakowa", "Firmy i biura", "Obcokrajowcy mieszkający w Krakowie"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Tworzenie stron internetowych w Krakowie robię dla firm, które chcą mieć stronę zaprojektowaną pod swoich klientów, a nie złożoną z szablonu. Prowadzę projekt zdalnie z Warszawy i wykonuję go w całości sam: od listy podstron, przez projekt graficzny i teksty, po uruchomienie. Ceny są w cenniku, a projekt graficzny jest w nie wliczony."),

        h2("Strony internetowe Kraków: kto w Krakowie zamawia stronę i czego od niej oczekuje"),
        p("W Krakowie stronę zamawiają bardzo różne firmy, a każda chce od niej czego innego. Właściciel apartamentów na Kazimierzu chce rezerwacji bez prowizji portalu. Restauracja przy Rynku potrzebuje menu w kilku językach i mapy dojazdu. Przewodnik i organizator wycieczek do Wieliczki — opisu tras, cen i terminów. Firma usługowa obsługująca biura IT i centra usług dla biznesu chce wyglądać wiarygodnie dla zagranicznego menedżera. Gabinet w Bronowicach czy szkoła językowa w Podgórzu potrzebują przede wszystkim telefonu jednym dotknięciem i godzin przyjęć."),
        p("Osobną grupą są firmy żyjące z rytmu roku akademickiego. Kraków to miasto wielu uczelni, z Uniwersytetem Jagiellońskim i AGH na czele, więc kursy, korepetycje, wynajem pokoi, przeprowadzki czy szkoły językowe mają szczyt zapytań we wrześniu i październiku. Strona, która ma na ten czas gotowe podstrony z cenami i terminami, zbiera zapytania, zanim student zdąży zadzwonić gdzie indziej."),
        p("Wspólne jest jedno: klient w Krakowie ma duży wybór i porównuje kilka stron w ciągu paru minut. Wygrywa ta, na której od razu widać, czym się zajmujecie, gdzie, za ile i jak się skontaktować — w języku, w którym klient szuka."),

        h2("Strona internetowa dla firmy turystycznej i gastronomicznej w Krakowie"),
        p("Turysta otwiera stronę na telefonie, na ulicy, często z roamingiem i jedną ręką. Strona hotelu, apartamentu, restauracji czy biura wycieczek musi więc ładować się szybko i prowadzić prosto do celu:"),
        li("przycisk rezerwacji lub zapytania o termin widoczny od razu, w każdej wersji językowej"),
        li("menu, cennik pokoi albo program wycieczki jako tekst, a nie zdjęcie karty czy PDF"),
        li("mapa, dojazd z dworca i lotniska, informacja o strefie płatnego parkowania i wjeździe do centrum"),
        li("zdjęcia Waszego miejsca, a nie widoki Wawelu z banku zdjęć"),
        p(
          "Jeśli macie system rezerwacji, łączę go ze stroną zamiast budować drugi. O tym, jak hotel zdobywa rezerwacje bezpośrednie z Google, piszę na stronie ",
          link("pozycjonowanie strony hotelu", "/pl/pozycjonowanie-strony-hotelu"),
          ".",
        ),

        h2("Strona w kilku językach dla Krakowa: angielski, ukraiński i inne wersje"),
        p("W Krakowie wersja angielska bywa ważniejsza niż polska. Dotyczy to nie tylko turystyki: obcokrajowcy pracujący w krakowskich biurach szukają po angielsku dentysty, prawnika, przedszkola czy mechanika. Rośnie też liczba osób, które czytają po ukraińsku. Przy budowie wersji językowych trzymam się kilku zasad:"),
        li("angielska czy ukraińska wersja dostaje osobne adresy, np. /en/, i oznaczenia hreflang, żeby Google nie mieszał języków"),
        li("tłumaczę podstrony, z którymi przychodzą obcokrajowcy, a nie wszystko, co jest po polsku"),
        li("teksty są pisane dla czytelnika z zagranicy: z informacją o płatności kartą, językach obsługi i dojeździe"),
        li("formularz, potwierdzenie wysłania i klauzula RODO są w tym samym języku"),
        p(
          "Jak planuję serwisy w wielu językach, opisuję na stronie ",
          link("tworzenie stron wielojęzycznych", "/pl/oferty/tworzenie-stron-wielojezycznych"),
          ". Dla kancelarii, które obsługują cudzoziemców, przygotowałem osobny opis: ",
          link("strona internetowa dla kancelarii adwokackiej", "/pl/strona-internetowa-dla-adwokata"),
          ".",
        ),

        h2("Strona internetowa dla firmy B2B obsługującej krakowskie biura"),
        p("Centra IT i usług dla biznesu w Krakowie potrzebują wielu dostawców: biur rachunkowych dla osób na kontraktach B2B, firm szkoleniowych, cateringu na spotkania, sprzątania biur, usług relokacji dla pracowników z zagranicy. Decyzję podejmuje tu często menedżer, który porównuje kilka firm i czyta po angielsku. Strona takiego dostawcy powinna:"),
        li("opisywać usługi konkretnie: zakres, czas reakcji, sposób rozliczenia, a nie ogólne hasła"),
        li("pokazywać typowe zlecenia opisane ogólnie, bez nazw klientów, jeśli nie zgodzili się na ich podanie"),
        li("mieć wersję angielską przynajmniej dla głównych podstron i formularza"),
        li("dawać prosty sposób na umówienie krótkiej rozmowy zamiast samego numeru telefonu"),

        h2("Projektowanie stron internetowych w Krakowie: jak wybrać wykonawcę"),
        p("Po wpisaniu „projektowanie stron internetowych Kraków”, „tworzenie stron internetowych Kraków” i „strony internetowe Kraków” za każdym razem pojawiają się inne firmy. Lokalnych studiów, freelancerów i agencji z podstroną dla Krakowa jest dużo, a portal Oferteo dokłada do tego kolejne oferty. Dobry wybór zależy mniej od portfolio, a bardziej od kilku konkretnych odpowiedzi."),
        h3("Pytania do wykonawcy strony w Krakowie"),
        li("czy cena obejmuje projekt graficzny i teksty, czy tylko wdrożenie szablonu"),
        li("czy wersje językowe są w cenie i kto je przygotowuje"),
        li("czy po uruchomieniu płacicie miesięczny abonament i co się stanie, gdy z niego zrezygnujecie"),
        li("kto będzie Waszym kontaktem i czy to ta sama osoba, która buduje stronę"),
        p("U mnie: projekt jest w cenie, wersje językowe wyceniam przed startem, abonamentu nie ma, a kontaktem jest wykonawca."),

        h2("Tanie strony internetowe w Krakowie: co da się zrobić za 3000–6000 zł"),
        p("Hasło „tanie strony internetowe Kraków” obiecuje zwykle stronę za kilkaset złotych na gotowym szablonie. Taka strona ma sens dla firmy, która potrzebuje tylko wizytówki w sieci. Gdy strona ma przyprowadzać klientów, liczy się co innego: czy da się ją rozbudować, czy jest szybka i czy należy do Was."),
        p("Prosta strona w moim cenniku to strona główna, kilka podstron usług, kontakt i formularz zgodny z RODO, z projektem graficznym w cenie. Dla wielu krakowskich gabinetów, pracowni i małych firm to wystarczy na lata, a kolejne podstrony czy wersję angielską można dodać później bez przebudowy."),

        h2("Strona dla firmy usługowej z Krakowa i okolic: dzielnice, Wieliczka, Skawina, Niepołomice"),
        p("Kraków rośnie na obrzeżach i w gminach dookoła. Firma remontowa, instalator czy sprzątanie domów pracuje zwykle w kilku dzielnicach i sąsiednich miejscowościach, a klienci szukają usługi tam, gdzie mieszkają. Na stronie warto to pokazać uczciwie: lista obszarów, w których naprawdę pracujecie, realizacje z nazwą dzielnicy, na przykład „Kuchnia w bloku, Kraków-Nowa Huta”, i osobna podstrona dla Wieliczki czy Niepołomic tylko wtedy, gdy macie tam coś do pokazania."),
        p("Krakowskie firmy instalacyjne mają też swój lokalny temat: w mieście, w którym od kilku lat nie wolno palić w domach węglem ani drewnem, mieszkańcy szukają informacji o wymianie ogrzewania, pompach ciepła i dofinansowaniach. Podstrona, która spokojnie odpowiada na te pytania, przyprowadza klientów lepiej niż sama lista usług."),

        h2("Strona internetowa, którą ChatGPT i Google AI Overviews potrafią przeczytać"),
        p("Ludzie pytają ChatGPT: „apartament na Kazimierzu z parkingiem”, „English-speaking dentist in Kraków”, „szkoła językowa dla dzieci na Ruczaju”. Asystenci polecają miejsca, o których mogą przeczytać konkretne informacje. Dlatego na stronach, które buduję, usługi, dzielnica, godziny, ceny i języki obsługi są zapisane tekstem w każdej wersji językowej, a dane strukturalne opisują firmę tak samo jak wizytówka Google."),
        p(
          "Systematyczne budowanie obecności w odpowiedziach asystentów to temat strony ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Jak powstaje strona internetowa dla firmy z Krakowa"),
        ol("Rozmowa wideo i brief: klienci, języki, usługi, zdjęcia i system rezerwacji, jeśli go macie."),
        ol("Mapa strony z wersjami językowymi i ostateczna kwota."),
        ol("Makieta strony głównej i jednej podstrony usługi, oglądana najpierw na ekranie telefonu."),
        ol("Wykonanie, teksty po polsku i w pozostałych językach; Wy sprawdzacie fakty."),
        ol("Uruchomienie z analityką po zgodzie, Search Console i instrukcją edycji."),
        p("Całość prowadzę zdalnie z Warszawy, a spotkania w Krakowie nie są potrzebne: wszystko widzicie na podglądzie strony na każdym etapie."),

        h2("Strona internetowa a pozycjonowanie w Krakowie"),
        p(
          "Podstawy SEO — adresy, tytuły, dane strukturalne, szybkość, mapa strony — są w cenie każdej strony. Walka o wysokie pozycje dla fraz z Krakowem i dzielnicami w konkurencyjnych branżach to osobna, stała praca, opisana na stronie ",
          link("pozycjonowanie stron w Krakowie", "/pl/pozycjonowanie-stron-krakow"),
          ".",
        ),
        p("Nie każda krakowska firma tej pracy potrzebuje. Gabinet z wiernymi pacjentami czy pracownia, do której klienci trafiają z polecenia, często dobrze radzi sobie z samą porządną stroną i wizytówką Google. Przy wycenie strony powiem, czy w Waszej branży pozycjonowanie ma sens, czy wystarczą podstawy."),

        h2("Tworzenie stron internetowych Kraków: cennik"),
        li("Prosta strona — strona główna, podstrony usług, kontakt, formularz zgodny z RODO: od 3000 do 6000 zł."),
        li("Pełna strona — wersje językowe, podstrony usług i dzielnic, zapytania o rezerwację lub integracja z systemem rezerwacji: od 8500 zł."),
        p(
          "Projekt graficzny jest w cenie obu wariantów, a widełki znajdziecie w ",
          link("cenniku", "/pl/cennik"),
          ". Po uruchomieniu nie płacicie mi abonamentu, tylko za zmiany, o które poprosicie. Ogólny opis mojej pracy nad stronami firm jest na stronie ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Tworzenie stron internetowych w Krakowie: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Jaka jest cena projektowania stron internetowych w Krakowie?", "Prosta strona kosztuje od 3000 do 6000 zł, pełna z wersjami językowymi, rezerwacjami i integracjami od 8500 zł. Projekt graficzny jest w cenie. Gdy opiszecie firmę w kilku zdaniach, podam kwotę bez widełek."],
          ["Ile kosztuje wersja angielska strony?", "Zależy od liczby tłumaczonych podstron. Wersja językowa wchodzi zwykle w zakres pełnej strony od 8500 zł; w prostej stronie wyceniam ją osobno przed startem."],
          ["Czy strona może przyjmować rezerwacje?", "Tak. Łączę stronę z systemem rezerwacji, którego już używacie, albo przygotowuję formularz zapytania z datą i liczbą osób."],
          ["Ile trwa stworzenie strony internetowej w Krakowie?", "Na prostą stronę trzeba zwykle zarezerwować dwa–cztery tygodnie, na pełną z kilkoma językami cztery–osiem. Najczęściej czeka się na zdjęcia i tłumaczenia sprawdzone przez Was."],
          ["Czy przyjedziesz na spotkanie do Krakowa?", "Pracuję z Warszawy, a z firmami z Krakowa ustalamy wszystko przez wideo i wiadomości, a postęp prac oglądacie na roboczej wersji strony pod osobnym adresem."],
          ["Czy sami możemy zmieniać menu, ceny i zdjęcia?", "Tak, w prostym panelu, także z telefonu i w każdej wersji językowej. Do codziennych zmian nie potrzebujecie programisty."],
          ["Do kogo należy strona?", "Do Was: domena, kod i treści. Możecie w każdej chwili przenieść stronę do innego hostingu lub wykonawcy."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową w Krakowie: co mi wysłać"),
        p(
          "Wyślijcie nazwę firmy, link do obecnej strony lub wizytówki Google, listę usług, dzielnice albo gminy, w których pracujecie, języki Waszych klientów i nazwę systemu rezerwacji, jeśli go używacie. Odpowiem listą podstron i stałą ceną. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
