// Landing page fixture: Tworzenie stron internetowych w Lublinie (PL), group
// «tworzenie-stron-internetowych-lublin». City landing, stage 3 pilot, PL only.
// Phrases (ref/city-keywords.md, ref/pl-cities.md; volumes/month, Poland):
// strony internetowe lublin 720 · tworzenie stron internetowych lublin 210.
// «projektowanie stron lublin», «cennik» — no measured volume for Lublin,
// carried in H2/FAQ per BRIEF.md. PAA: Jaka jest cena projektowania stron
// internetowych? (H2 cennik + FAQ).
// Intent (ref/intent-check-pl-cities.md; measured for Poznań and Kraków,
// pattern applied to Lublin): «tworzenie stron», «projektowanie stron»,
// «strony internetowe», «strona internetowa» share 0–1 URLs — fragmented SERP
// of small studios, freelancers, national firms with city pages and Oferteo;
// one page carries all of them in H2/H3/FAQ. SEO vs websites 0 shared URLs →
// SEO is the sibling page.
// City part (≥ ⅓ of guide): food producers and processors of the Lubelskie
// region selling B2B and abroad; clinics with patients from the whole
// voivodeship; services around the universities; Ukrainian-speaking residents
// and English-speaking international students → UA/EN versions; districts
// (Czuby, Czechów, Felin) and Świdnik, Lubartów, Łęczna, Puławy; local
// studios and agencies, Oferteo.
// Prices: /pl/cennik — prosta strona 3000–6000 zł, pełna strona od 8500 zł,
// projekt graficzny w cenie.
// NOT on this page: pozycjonowanie (/pl/pozycjonowanie-stron-lublin);
// «tworzenie sklepów internetowych lublin» 90 — e-commerce, not offered (said
// plainly in FAQ); identity, campaigns, social media (not offered).
// Owner’s rules: every page covers AI search; never say there are no clients
// from the visitor’s city or industry; remote work from Warsaw, no visits.
import { p, h2, h3, li, ol, link, k } from "./pt";

export const tworzenieStronInternetowychLublinPl = {
  lang: "pl",
  group: "tworzenie-stron-internetowych-lublin",
  slug: "tworzenie-stron-internetowych-lublin",
  title: "Tworzenie stron internetowych w Lublinie",
  heading: "Tworzenie stron internetowych w Lublinie",
  excerpt:
    "Tworzenie stron internetowych w Lublinie od jednej osoby: projekt graficzny w cenie, teksty, wersje ukraińska i angielska, formularz zgodny z RODO i panel do samodzielnych zmian — dla producentów, gabinetów i usług, za cenę z cennika.",
  seo: {
    metaTitle: "Strony internetowe Lublin: projekt w cenie | Bandziuk",
    metaDescription:
      "Strony internetowe dla firm z Lublina: projekt w cenie, teksty, wersje UA i EN, RODO, szybkie na telefonie i Wasze, bez abonamentu. Od 3000 zł, ceny w cenniku.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt + wykonanie, jedna cena", "Od 3000 zł", "Wersje PL · UA · EN"],
  heroPhonePoints: ["Fizjoterapia Lublin Czechów", "Umów wizytę", "Українська · English", "Zadzwoń · WhatsApp"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona internetowa dla firmy z Lublina, projekt w cenie", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Strona firmy z Lublina z podstronami usług i miejscowości, wersjami językowymi, integracjami i SEO lokalnym, projekt w cenie", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co dostajecie ze stroną internetową w Lublinie",
      items: [
        { _key: k("o"), iconName: "layers", title: "Podstrona dla każdej usługi", text: "Z ceną lub widełkami i zdjęciami z Waszej pracy" },
        { _key: k("o"), iconName: "message-circle", title: "Wersje ukraińska i angielska", text: "Dla klientów, którzy w Lublinie szukają w swoim języku" },
        { _key: k("o"), iconName: "phone", title: "Telefon i WhatsApp jednym dotknięciem", text: "Na każdej podstronie, bez przewijania" },
        { _key: k("o"), iconName: "shield-check", title: "Formularz i cookies zgodne z RODO", text: "Klauzula, zgody, analityka dopiero po akceptacji" },
        { _key: k("o"), iconName: "sparkles", title: "Czytelna dla Google i asystentów AI", text: "Fakty tekstem i dane strukturalne firmy" },
        { _key: k("o"), iconName: "file-text", title: "Panel do samodzielnych zmian", text: "Ceny, godziny i zdjęcia — także z telefonu" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona firmy z Lublina", value: "3000–6000 zł", note: "projekt w cenie" },
        { _key: k("r"), label: "Usługi, miejscowości, wersje językowe, integracje", value: "od 8500 zł", note: "projekt w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: strony internetowe, które zaprojektowałem i zbudowałem",
      subtitle:
        "Serwis agencji edukacyjnej dla dziesięciu krajów, trzyjęzyczna strona firmy skanowania laserowego 3D i modelowania BIM oraz strony lokalnych warszawskich firm — remontowo-inwestycyjnej, warsztatu samochodowego i pracowni felg. Dla firmy z Lublina pokazują dwie rzeczy: jak strona obsługuje klientów w kilku językach i jak lokalna firma zbiera zapytania z telefonu.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "full-multilingual-website-development-and-seo-for-student-services",
        "architecture-website-rebuild-and-seo-scan",
        "renovation-and-investment-website-with-premium-design",
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej dla firmy z Lublina",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: lista podstron dla Waszej firmy, potrzebne wersje językowe i stała cena z cennika.",
      contextLabel: "Nazwa firmy lub obecna strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Co macie teraz?", options: ["Brak strony", "Strona z kreatora", "Stara strona do przebudowy", "Tylko wizytówka Google"] },
        { _key: k("z"), question: "Ile wersji językowych potrzebujecie?", options: ["Tylko polska", "Polska i ukraińska", "Polska i angielska", "Trzy lub więcej"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Tworzenie stron internetowych w Lublinie prowadzę dla lubelskich firm od pierwszej rozmowy po uruchomienie: struktura, projekt graficzny, wykonanie w WordPressie albo Next.js, teksty i podstawy SEO. Robi to jedna osoba, więc wiecie, z kim rozmawiacie, a cenę znacie przed pierwszą wiadomością. Pracuję z Warszawy, a z firmami z Lublina współpracuję zdalnie: rozmowy wideo, wspólne pliki i uzgodnione etapy."),

        h2("Tworzenie stron internetowych w Lublinie: co dostajecie w cenie"),
        p("W obu wariantach cenowych strona ma ten sam fundament:"),
        li("projekt graficzny najpierw na telefon, potem na komputer"),
        li("hosting z SSL i podpiętą domenę"),
        li("tytuły i opisy podstron oraz dane strukturalne firmy"),
        li("Google Analytics 4 i Search Console, uruchamiane po zgodzie na cookies"),
        li("formularz kontaktowy z klauzulą RODO"),
        li("panel, w którym sami zmieniacie teksty, ceny i zdjęcia"),
        p("Strona, kod i treści należą do Was. Po uruchomieniu nie ma abonamentu u mnie — płacicie tylko za hosting i domenę u dostawcy."),

        h2("Strony internetowe dla firm z Lublina: przetwórstwo, gabinety i usługi przy uczelniach"),
        p("Strony internetowe w Lublinie zamawiają bardzo różne firmy, ale kilka grup powtarza się w tym mieście szczególnie często i każda potrzebuje od strony czegoś innego."),
        h3("Producenci i przetwórcy żywności z Lubelszczyzny"),
        p(
          "Region sadów i owoców miękkich ma wielu producentów soków, mrożonek i przetworów oraz dostawców dla rolnictwa. Ich klient to często kupiec hurtowy albo importer, który przed pierwszym telefonem chce zobaczyć asortyment, certyfikaty, opakowania, możliwości dostaw i kontakt do działu handlowego — najlepiej po angielsku. Więcej o takich stronach: ",
          link("strona dla firmy produkcyjnej", "/pl/strona-dla-firmy-produkcyjnej"),
          ".",
        ),
        h3("Gabinety i kliniki, do których przyjeżdża się z całego regionu"),
        p(
          "Pacjenci przyjeżdżają do Lublina z Chełma, Zamościa i mniejszych miejscowości. Strona gabinetu pokazuje zespół, zakres zabiegów, ceny lub widełki, dojazd i parking, a wizytę da się umówić jednym dotknięciem. Szczegóły: ",
          link("strona dla gabinetu stomatologicznego", "/pl/strona-dla-gabinetu-stomatologicznego"),
          ".",
        ),
        h3("Usługi wokół uczelni"),
        p("Szkoły językowe, kursy, korepetycje, wynajem pokoi, kawiarnie i punkty usługowe przy kampusach. Tu strona musi być lekka i prosta: student decyduje w kilka minut, często wieczorem, i chce od razu napisać na WhatsApp, zamiast wypełniać długi formularz. Najwięcej pytań przychodzi przed początkiem roku akademickiego i przed sesją, więc ceny, wolne terminy i miejsca w grupach muszą dać się zmienić w panelu w kilka minut, bez dzwonienia do programisty."),
        h3("Firmy IT, biura rachunkowe i usługi dla biznesu"),
        p("Lubelskie firmy technologiczne, biura rachunkowe, doradcy i agencje pracy często sprzedają klientom z całej Polski, a nie z jednej dzielnicy. Ich strona zastępuje pierwsze spotkanie: pokazuje, kto pracuje w firmie, dla jakich klientów, w jakim modelu rozliczenia i jak szybko odpowiada. Tu ważniejsze od zdjęć lokalu są konkretne opisy usług, przykładowe procesy współpracy i wersja angielska dla zagranicznych zleceniodawców."),

        h2("Strona w kilku językach dla firmy z Lublina: polski, ukraiński, angielski"),
        p("Lublin leży blisko granicy z Ukrainą, a w mieście mieszka, pracuje i studiuje wiele osób, dla których polski nie jest pierwszym językiem. Do tego dochodzą studenci z różnych krajów na kierunkach prowadzonych po angielsku. Dla firmy, która ich obsługuje, wersja językowa nie jest ozdobą — to sposób, żeby klient zrozumiał ofertę i zadzwonił, a nie poszedł do konkurencji, która mówi jego językiem."),
        li("każda wersja ma własne adresy podstron i oznaczenia hreflang, żeby Google pokazywał ją właściwym osobom"),
        li("tłumaczę te podstrony, z którymi naprawdę przychodzą obcojęzyczni klienci, a nie całą stronę na siłę"),
        li("formularz i informacja RODO są w języku podstrony"),
        li("przełącznik języka jest widoczny także na telefonie"),
        p(
          "Więcej o takich projektach na stronie ",
          link("tworzenie stron wielojęzycznych", "/pl/oferty/tworzenie-stron-wielojezycznych"),
          ".",
        ),

        h2("Projektowanie stron w Lublinie: studio, agencja reklamowa czy jedna osoba"),
        p("Na frazy „projektowanie stron Lublin”, „tworzenie stron internetowych Lublin” czy „strony internetowe Lublin” wyniki są rozproszone: lubelskie studia i agencje reklamowe, freelancerzy, ogólnopolskie firmy z podstroną dla Lublina i Oferteo, gdzie kilku wykonawców wysyła oferty na jedno zapytanie. Ceny i zakres bardzo się różnią, a z ofert często trudno wyczytać, co dokładnie jest w cenie."),
        p("Przy porównywaniu zapytajcie: czy projekt graficzny jest w cenie; kto pisze teksty; czy dostaniecie dostęp do panelu, hostingu i domeny; czy po uruchomieniu jest abonament; co dzieje się ze starymi adresami przy przebudowie. U mnie projekt jest w cenie, abonamentu nie ma, a domena, kod i treści należą do firmy. Agencja z pełną obsługą ma sens, gdy razem ze stroną potrzebujecie identyfikacji wizualnej, kampanii i mediów społecznościowych — tych usług nie prowadzę."),

        h2("Jakie podstrony powinna mieć strona firmy z Lublina"),
        p("Struktura zależy od branży, ale dla lokalnej firmy z Lublina zwykle sprawdza się taki zestaw:"),
        li("strona główna, która w pierwszym zdaniu mówi, co robicie i gdzie — „Gabinet fizjoterapii, Lublin Czechów”"),
        li("podstrona dla każdej usługi z zakresem, czasem trwania i ceną lub widełkami"),
        li("podstrony obszaru działania, jeśli dojeżdżacie do klientów w Świdniku, Lubartowie, Łęcznej czy Puławach — każda z treścią o tym, jak wygląda usługa w tym miejscu"),
        li("o firmie z prawdziwymi zdjęciami ludzi i miejsca"),
        li("kontakt z mapą, godzinami, parkingiem i danymi firmy"),
        p("Dzielnicę warto wymienić tam, gdzie ma znaczenie dla klienta — gabinet na Czubach, warsztat na Felinie — zamiast tworzyć dziesiątki podobnych podstron, które Google uzna za próbę manipulacji."),

        h2("Kreator stron czy strona na zamówienie dla lubelskiej firmy"),
        p("Wix czy inny kreator wystarczy, gdy sprzedajecie jedną usługę, klienci przychodzą z polecenia, a Wy macie czas, żeby samodzielnie dopracować szablon. Własna strona zaczyna się zwracać, kiedy każda z kilku usług ma być widoczna w Google osobno, klienci potrzebują wersji ukraińskiej lub angielskiej, rezerwacje albo CRM mają działać razem ze stroną, a Wy chcecie mieć ją na własność. Przejście z kreatora to w praktyce budowa od nowa, więc lepiej zdecydować na początku."),

        h2("Strona internetowa firmy z Lublina, którą ChatGPT i Google AI Overviews potrafią przeczytać"),
        p("Klienci pytają asystentów AI: „gabinet stomatologiczny w Lublinie, gdzie mówią po angielsku”, „producent soków tłoczonych z Lubelszczyzny”, „pokój dla studenta blisko kampusu”. Asystenci biorą pod uwagę tylko te firmy, o których coś przeczytają. Dlatego na stronach, które buduję, usługi, ceny, obszar działania, godziny i języki obsługi są zapisane tekstem, a nie na grafikach, a dane strukturalne opisują firmę tak samo jak wizytówka Google."),
        p(
          "Stała praca nad widocznością w asystentach to osobna usługa: ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Przebudowa starej strony firmy z Lublina bez utraty pozycji w Google"),
        p("Wiele lubelskich firm ma stronę sprzed lat: wolną na telefonie albo zrobioną w systemie, którego nikt już nie umie edytować. Przebudowa zachowuje to, co działa — domenę, podstrony widoczne w Google, opinie i dobre zdjęcia. Każdy stary adres dostaje przekierowanie na nowy, a po starcie sprawdzam Search Console. Tak przebudowałem stronę firmy skanowania laserowego 3D i modelowania BIM: czysty WordPress, zachowany projekt, trzy wersje językowe i ruch organiczny większy 29 razy."),

        h2("Jak powstaje strona dla firmy z Lublina: etapy współpracy online"),
        ol("Rozmowa wideo albo wiadomość z opisem firmy, usług i klientów; nagranie głosowe też wystarczy."),
        ol("Lista podstron i stała cena w widełkach z cennika."),
        ol("Projekt strony głównej i jednej podstrony usługi, najpierw na telefonie, do Waszej akceptacji."),
        ol("Wykonanie i teksty napisane na podstawie briefu — Waszym zadaniem jest sprawdzić, czy wszystko się zgadza."),
        ol("Uruchomienie: domena, analityka, Search Console, połączenie z wizytówką Google i krótka instrukcja edycji."),
        p("Wszystkie uzgodnienia są w jednym dokumencie, do którego macie dostęp, więc spotkania w Lublinie nie są do tego potrzebne."),

        h2("Strony internetowe Lublin: cennik i od czego zależy cena"),
        li("Prosta strona — kilka podstron usług z cenami, strona o zespole, kontakt z mapą i formularz z klauzulą RODO: 3000–6000 zł."),
        li("Pełna strona — podstrony usług i miejscowości, wersje językowe, rezerwacje lub integracje, SEO lokalne: od 8500 zł."),
        p(
          "Projekt graficzny jest w cenie w obu wariantach, a widełki są w ",
          link("cenniku", "/pl/cennik"),
          ". Cena rośnie z liczbą podstron, języków i integracji, a spada, gdy dostarczacie własne teksty i zdjęcia. Ogólny opis usługi jest na stronie ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ". Gdy strona jest gotowa, o widoczności w Google piszę na stronie ",
          link("pozycjonowanie stron w Lublinie", "/pl/pozycjonowanie-stron-lublin"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Tworzenie stron internetowych w Lublinie: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Jaka jest cena projektowania stron internetowych w Lublinie?", "Prosta strona kosztuje od 3000 do 6000 zł, a pełna strona z podstronami usług i miejscowości, wersjami językowymi i integracjami od 8500 zł. Projekt graficzny jest w cenie w obu przypadkach. Po krótkim opisie firmy podaję stałą cenę."],
          ["Ile trwa stworzenie strony internetowej?", "Zwykle dwa–cztery tygodnie dla prostej strony i cztery–sześć dla pełnej, licząc od briefu; każda dodatkowa wersja językowa dokłada czas na teksty. Najdłużej trwa zwykle zbieranie zdjęć i uwag."],
          ["Czy strona może mieć wersję ukraińską i angielską?", "Tak, to częsty wybór w Lublinie. Tłumaczę podstrony, o które pytają klienci mówiący po ukraińsku lub angielsku, każda wersja ma osobne adresy i oznaczenia hreflang, a formularz z klauzulą RODO jest w tym samym języku."],
          ["Czy tworzysz sklepy internetowe?", "Nie. Buduję strony firmowe: usługi, oferta dla klientów hurtowych, formularze zapytań, rezerwacje i wersje językowe. Sklepów internetowych nie tworzę."],
          ["Czy strona jest od razu przygotowana pod Google?", "Tak. Tytuły i opisy podstron, dane strukturalne, szybkość na telefonie, Search Console i połączenie z wizytówką Google są w cenie. Stałe pozycjonowanie w Lublinie to osobna usługa."],
          ["Do kogo należy strona?", "Do Waszej firmy. Domena, kod i treści są Wasze, dostępy do hostingu i panelu dostajecie przy uruchomieniu, a stronę można w każdej chwili przenieść do innego wykonawcy."],
          ["Czy można zamówić stronę zdalnie, z Lublina?", "Tak. Pracuję z Warszawy, a projekty dla firm z Lublina prowadzę online: rozmowy wideo, wspólny dokument z ustaleniami i podgląd strony w przeglądarce na każdym etapie. Rozmawiam po polsku, angielsku albo rosyjsku."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową w Lublinie: co mi wysłać"),
        p(
          "Przyślijcie link do obecnej strony lub wizytówki Google, krótki opis usług, dzielnice Lublina i okoliczne miejscowości, w których pracujecie, języki, w których mówią Wasi klienci, i kilka zdjęć z Waszej pracy. Odpowiem listą podstron i stałą ceną. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
