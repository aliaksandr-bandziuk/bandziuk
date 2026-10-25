// Landing page fixture: Tworzenie stron internetowych Szczecin (PL), group
// «tworzenie-stron-internetowych-szczecin». City page, stage 3 pilot (BRIEF.md).
// Semantic core (ref/city-keywords.md, ref/pl-cities.md): strony internetowe
// szczecin 590 · strona internetowa szczecin 590 · tworzenie stron internetowych
// szczecin 210 · agencja interaktywna szczecin 170 · tworzenie stron www
// szczecin 110 · tanie strony internetowe szczecin 50 · szczecin tworzenie
// stron internetowych 20. Also in headings/FAQ: «projektowanie stron
// Szczecin», «cennik».
// PAA: Jaka jest cena projektowania stron internetowych? (H2 + FAQ).
// Intent (ref/intent-check-pl-cities.md): website vs SEO SERPs share 0 URLs →
// separate pages; «tworzenie stron», «projektowanie stron», «strony
// internetowe», «strona internetowa» share 0–1 URLs (fragmented local SERPs:
// studios, freelancers, Oferteo) → one page carrying all four in headings/FAQ.
// City angle (no doorway): B2B port and logistics firms (English/German
// versions, quote forms), service firms with clients from Germany (German
// version, Impressum, prices, directions from the border), builders in the
// suburban gminas, the local market of studios and «tanie strony».
// Prices: /pl/cennik — prosta strona 3000–6000 zł, pełna strona od 8500 zł,
// projekt graficzny w cenie.
// NOT on this page: pozycjonowanie, wizytówka Google, German SEO phrases in
// depth (/pl/pozycjonowanie-stron-szczecin); multilingual builds in general
// (/pl/oferty/tworzenie-stron-wielojezycznych); e-commerce (not offered).
// Owner’s rules: AI-search H2; never say there are no clients from the
// visitor’s city or industry; remote from Warsaw, no promise of visits.
import { p, h2, li, ol, link, k } from "./pt";

export const tworzenieStronInternetowychSzczecinPl = {
  lang: "pl",
  group: "tworzenie-stron-internetowych-szczecin",
  slug: "tworzenie-stron-internetowych-szczecin",
  title: "Tworzenie stron internetowych Szczecin",
  heading: "Tworzenie stron internetowych w Szczecinie",
  excerpt:
    "Tworzenie stron internetowych dla firm ze Szczecina to moja usługa: projekt graficzny, wykonanie, teksty, wersja niemiecka i angielska tam, gdzie macie takich klientów, oraz podstawy SEO. Całość robi jedna osoba, zdalnie z Warszawy, a cena jest podana w cenniku.",
  seo: {
    metaTitle: "Strony internetowe Szczecin: PL, DE, EN | Bandziuk",
    metaDescription:
      "Strony internetowe dla firm ze Szczecina: projekt w cenie, wersja niemiecka dla klientów z Niemiec, formularz zgodny z RODO, szybka na telefonie. Od 3000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt + wykonanie, jedna cena", "Od 3000 zł", "Wersje PL · DE · EN"],
  heroPhonePoints: ["Zadzwoń · WhatsApp", "Usługi i ceny", "Auf Deutsch", "Dojazd i parking"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona internetowa dla firmy ze Szczecina, projekt w cenie", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Pełna strona firmy ze Szczecina z podstronami usług, wersją niemiecką lub angielską, formularzem zapytań i SEO lokalnym, projekt w cenie", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co dostajecie ze stroną internetową w Szczecinie",
      items: [
        { _key: k("o"), iconName: "layers", title: "Osobna podstrona każdej usługi", text: "Zakres, ceny lub widełki, zdjęcia z Waszych zleceń" },
        { _key: k("o"), iconName: "message-circle", title: "Wersja niemiecka i angielska", text: "Dla klientów zza granicy i kontrahentów portowych" },
        { _key: k("o"), iconName: "phone", title: "Telefon, WhatsApp i mapa dojazdu", text: "Widoczne bez przewijania, także dla jadących z Niemiec" },
        { _key: k("o"), iconName: "shield-check", title: "Formularz i cookies zgodne z RODO", text: "Klauzula w języku podstrony, zgoda przed analityką" },
        { _key: k("o"), iconName: "file-text", title: "Panel do samodzielnych zmian", text: "Ceny, godziny i zdjęcia zmieniacie bez programisty" },
        { _key: k("o"), iconName: "sparkles", title: "Czytelna dla Google i asystentów AI", text: "Fakty zapisane tekstem, dane strukturalne firmy" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona firmy ze Szczecina", value: "3000–6000 zł", note: "projekt w cenie" },
        { _key: k("r"), label: "Usługi, wersje językowe, formularze, SEO lokalne", value: "od 8500 zł", note: "projekt w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Strony internetowe, które zaprojektowałem i zbudowałem",
      subtitle:
        "Dwie z nich pokazują wersje językowe, których potrzebuje wiele firm ze Szczecina: strona firmy skanowania laserowego 3D i modelowania BIM po polsku, angielsku i niemiecku oraz serwis agencji edukacyjnej dla dziesięciu krajów. Trzy pozostałe to warszawskie firmy usługowe — remontowo-inwestycyjna, warsztat samochodowy i pracownia renowacji felg — których strony prowadzą klienta z telefonu prosto do rozmowy albo zapytania.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "architecture-website-rebuild-and-seo-scan",
        "full-multilingual-website-development-and-seo-for-student-services",
        "renovation-and-investment-website-with-premium-design",
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej dla firmy ze Szczecina",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: proponuję listę podstron, wersje językowe i stałą cenę w widełkach z cennika.",
      contextLabel: "Nazwa firmy lub obecna strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Co macie teraz?", options: ["Brak strony", "Strona z kreatora", "Stara strona na WordPressie", "Tylko wizytówka Google lub Facebook"] },
        { _key: k("z"), question: "Jakie wersje językowe są potrzebne?", options: ["Tylko polska", "Polska i niemiecka", "Polska, niemiecka i angielska", "Jeszcze nie wiem"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Tworzenie stron internetowych w Szczecinie to usługa, którą prowadzę dla firm z miasta i z gmin wokół niego: struktura, projekt graficzny, wykonanie, teksty, wersje językowe i uruchomienie. Za całość odpowiada jedna osoba, a cenę znacie z cennika, zanim napiszecie pierwszą wiadomość. Pracuję z Warszawy; ze szczecińskimi firmami spotykamy się na rozmowach wideo, a projekt i teksty uzgadniamy we wspólnych dokumentach."),

        h2("Tworzenie stron internetowych Szczecin: co dostaje firma z miasta i okolic"),
        p("Strona firmy ze Szczecina ma w kilka sekund odpowiedzieć na pytania, z którymi przychodzi klient: co robicie, czy obsługujecie jego część miasta albo jego miejscowość, w jakim języku można z Wami rozmawiać i jak się skontaktować. W obu wariantach cenowych dostajecie:"),
        li("projekt na telefon i komputer, przygotowany pod Waszą firmę, a nie z gotowego szablonu"),
        li("podstrony usług z cenami albo widełkami i zdjęciami z prawdziwych zleceń"),
        li("hosting z SSL, podpiętą domenę, Google Analytics 4 i Search Console"),
        li("tytuły, opisy i dane strukturalne, od których zaczyna się widoczność w Google"),
        li("panel, w którym sami zmieniacie teksty, ceny, godziny i zdjęcia"),

        h2("Strony internetowe dla szczecińskich firm: port, logistyka, usługi i budownictwo"),
        p("Szczecin ma kilka rodzajów firm, które potrzebują od strony czegoś innego. Spedytorzy, firmy transportowe, magazyny i firmy obsługujące żeglugę sprzedają innym firmom, często zagranicznym. Ich strona to katalog usług z opisem zakresu, certyfikatów i sposobu współpracy, wersja angielska dla kontrahentów i formularz zapytania ofertowego, w którym od razu da się podać trasę, ładunek albo termin."),
        p("Gabinety, warsztaty, salony fryzjerskie i kosmetyczne, do których przyjeżdżają klienci z Niemiec, potrzebują przede wszystkim jasnych cen, niemieckiej wersji kluczowych podstron i dojazdu opisanego od strony granicy. Firmy budowlane i wykończeniowe pracujące w Mierzynie, Dobrej, Przecławiu czy Kołbaskowie pokazują realizacje z tych miejscowości, bo klient z nowego osiedla szuka kogoś, kto budował obok."),
        p(
          "Branże z własnymi potrzebami opisuję osobno: ",
          link("strona dla gabinetu stomatologicznego", "/pl/strona-dla-gabinetu-stomatologicznego"),
          " i ",
          link("strona dla firmy produkcyjnej", "/pl/strona-dla-firmy-produkcyjnej"),
          ", która dotyczy też wielu firm przemysłowych i logistycznych z okolic portu.",
        ),

        h2("Strona internetowa w Szczecinie po polsku i niemiecku: czego oczekuje klient zza granicy"),
        p("Mieszkańcy Meklemburgii-Pomorza Przedniego i Brandenburgii przyjeżdżają do Szczecina do dentysty, mechanika, fryzjera czy na zakupy, a część Niemców mieszka po polskiej stronie, w gminach przy granicy. Taki klient ocenia stronę według własnych przyzwyczajeń, więc niemiecka wersja to coś więcej niż przetłumaczone akapity:"),
        li("zakładka Impressum z pełnymi danymi firmy — niemiecki użytkownik szuka jej na każdej stronie i bez niej traci zaufanie"),
        li("ceny w złotych z informacją, czy można zapłacić kartą, i orientacyjną kwotą w euro"),
        li("dojazd opisany od przejścia granicznego, z informacją o parkingu"),
        li("wyraźna informacja, kto w firmie mówi po niemiecku i jak umówić termin — telefonicznie, przez WhatsApp albo formularz"),
        li("formularz, klauzula RODO i potwierdzenie wysłania wiadomości w tym samym języku co podstrona"),
        p(
          "Tłumaczę tylko podstrony, z którymi naprawdę przychodzą klienci z Niemiec, a każda wersja ma własne adresy. Ogólnie o budowie stron w kilku językach piszę na stronie ",
          link("tworzenie stron wielojęzycznych", "/pl/oferty/tworzenie-stron-wielojezycznych"),
          ".",
        ),

        h2("Strony internetowe Szczecin: lokalne studia, agencje interaktywne i tanie strony"),
        p("Kto wpisuje „strony internetowe Szczecin” albo „tworzenie stron www Szczecin”, dostaje mieszankę: lokalne studia graficzne i programistyczne, agencje interaktywne łączące strony z reklamą, freelancerów oraz Oferteo, gdzie po opisaniu zlecenia przychodzi kilka ofert. Każde z tych zapytań pokazuje inne firmy, więc porównanie ofert zajmuje czas."),
        p("Osobną grupą są tanie strony internetowe w Szczecinie, budowane z gotowego szablonu w kilka dni. Mogą wystarczyć jako wizytówka. Przy porównaniu warto sprawdzić, czy w cenie jest projekt pod Waszą firmę, wersja na telefon, formularz zgodny z RODO, podstawy SEO i dostęp do panelu, oraz do kogo po zakończeniu należą domena i kod."),

        h2("Projektowanie stron w Szczecinie przez jedną osobę: od struktury do uruchomienia"),
        p("W agencji stronę dzielą między siebie handlowiec, project manager, grafik, programista i copywriter. U mnie wszystko robi jedna osoba: układa strukturę, projektuje, buduje stronę w Next.js albo WordPressie, pisze teksty i ją uruchamia. Odpowiedź na pytanie dostajecie od tego, kto wykonuje pracę, a zmiany ustalamy w jednej wiadomości."),
        p("Projekt graficzny jest w cenie. Nie korzystam ze zdjęć stockowych przedstawiających uśmiechnięty zespół, który z Wami nie pracuje: lepiej sprawdzają się zdjęcia Waszego lokalu, warsztatu, magazynu czy zespołu, nawet zrobione telefonem przy dobrym świetle. Ograniczenia też mówię wprost: nie robię sklepów internetowych, kampanii reklamowych ani prowadzenia mediów społecznościowych."),

        h2("Jakie podstrony powinna mieć strona firmy ze Szczecina"),
        p("Strona małej lub średniej firmy ze Szczecina zwykle potrzebuje kilku stałych elementów:"),
        li("strony głównej, która w pierwszym zdaniu mówi, co robicie i w której części Szczecina lub w jakich gminach"),
        li("podstrony każdej usługi, z zakresem, czasem realizacji i ceną albo widełkami"),
        li("podstrony obszaru działania, jeśli dojeżdżacie do klientów, np. Prawobrzeże, Police, Gryfino, Stargard"),
        li("zakładki o firmie z prawdziwymi ludźmi i zdjęciami"),
        li("kontaktu z mapą, godzinami, numerem NIP i dojazdem — w firmach z klientami z Niemiec także po niemiecku"),
        p("Blog zakładam tylko wtedy, gdy ktoś będzie w nim pisał. Trzy wpisy sprzed lat robią gorsze wrażenie niż brak bloga."),

        h2("Strona internetowa firmy ze Szczecina, którą ChatGPT i Google AI Overviews potrafią przeczytać"),
        p("Klienci coraz częściej pytają asystentów AI: „dentysta w Szczecinie, gdzie mówią po niemiecku”, „spedycja Szczecin z transportem do Skandynawii”, „ekipa wykończeniowa Mierzyn”. ChatGPT, Perplexity i podsumowania AI w Google polecają firmy, o których mogą przeczytać konkretne fakty. Dlatego na stronach, które buduję, usługi, ceny, obszar działania, godziny i języki obsługi są zapisane zwykłym tekstem, a znaczniki schema.org powtarzają dane z wizytówki Google."),
        p(
          "Dalsza praca nad widocznością w asystentach jest opisana na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ", a pozycjonowanie w szczecińskich wynikach Google — na stronie ",
          link("pozycjonowanie stron w Szczecinie", "/pl/pozycjonowanie-stron-szczecin"),
          ".",
        ),

        h2("Formularz zgodny z RODO i szybkość strony firmy ze Szczecina"),
        p("Formularz kontaktowy zbiera dane osobowe, więc firma staje się ich administratorem. Formularz pyta tylko o to, co potrzebne do odpowiedzi, ma klauzulę informacyjną i link do polityki prywatności, a baner cookies uruchamia analitykę dopiero po zgodzie. Na niemieckiej podstronie wszystkie te elementy są po niemiecku. Szablon polityki prywatności dopasowuję do tego, co strona faktycznie robi; ostateczną treść warto przejrzeć z osobą, która zajmuje się prawną stroną firmy."),
        p("Wielu klientów otwiera stronę na telefonie, w samochodzie albo w drodze z granicy. Podstrony pokazują główną treść w mniej niż 2,5 sekundy, a telefon i przycisk WhatsApp są w zasięgu kciuka."),

        h2("Przebudowa strony firmy ze Szczecina bez utraty pozycji w Google"),
        p(
          "Wiele szczecińskich firm ma stronę sprzed lat, z kreatora albo od znajomego, której nie da się wygodnie edytować. Przebudowa zachowuje domenę, podstrony, które Google już wyświetla, dobre zdjęcia i opinie, a każdy stary adres dostaje przekierowanie na nowy. Po uruchomieniu sprawdzam Search Console. Proces opisuję na stronie ",
          link("przebudowa strony internetowej", "/pl/oferty/przebudowa-strony-internetowej"),
          ".",
        ),

        h2("Jak powstaje strona internetowa dla firmy ze Szczecina"),
        ol("Brief. Przesyłacie usługi, obszar działania, języki klientów i pytania, które słyszycie przez telefon. Nagranie głosowe też wystarczy."),
        ol("Lista podstron i stała cena. Zmianę zakresu wyceniam przed jej wykonaniem."),
        ol("Projekt w wersji na telefon: najpierw strona główna i wzorcowa podstrona usługi, które akceptujecie przed dalszą pracą."),
        ol("Wykonanie i teksty. Piszę je na podstawie briefu, Wy sprawdzacie fakty; niemiecką wersję przygotowuję po zatwierdzeniu polskiej."),
        ol("Uruchomienie: domena, analityka, Search Console i połączenie z wizytówką Google, plus krótka instrukcja edycji."),

        h2("Tworzenie stron internetowych Szczecin: cennik i cena projektowania strony"),
        p(
          "Widełki są podane w ",
          link("cenniku", "/pl/cennik"),
          ", a projekt graficzny jest w cenie w obu przypadkach:",
        ),
        li("Prosta strona dla szczecińskiej firmy usługowej — strona główna, oferta w kilku podstronach, o nas, kontakt z mapą i formularz z klauzulą RODO: od 3000 do 6000 zł."),
        li("Pełna strona — podstrony usług i obszaru działania, wersja niemiecka lub angielska, rozbudowany formularz, integracje i SEO lokalne: od 8500 zł."),
        p(
          "Abonamentu u mnie nie ma. Po starcie opłacacie tylko hosting i domenę u wybranego dostawcy, a późniejsze zmiany wyceniam osobno, gdy będą potrzebne. Ogólny opis mojej pracy nad stronami jest na stronie ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Tworzenie stron internetowych w Szczecinie: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Jaka jest cena projektowania stron internetowych w Szczecinie?", "Prosta strona kosztuje od 3000 do 6000 zł, a pełna strona z podstronami usług, wersją niemiecką lub angielską i SEO lokalnym od 8500 zł. Projekt graficzny jest w cenie. Po opisie firmy podaję stałą cenę."],
          ["Czy robisz tanie strony internetowe w Szczecinie?", "Najprostsza strona zaczyna się od 3000 zł i ma projekt pod Waszą firmę, wersję na telefon, formularz zgodny z RODO i podstawy SEO. Cena spada, gdy dostarczacie własne teksty i zdjęcia, a nie kosztem szybkości czy wersji mobilnej."],
          ["Ile kosztuje dodanie niemieckiej wersji strony?", "Zależy od liczby tłumaczonych podstron. Zwykle wystarczą te, z którymi przychodzą klienci z Niemiec, plus Impressum i kontakt. W pełnej stronie od 8500 zł wersja językowa mieści się w wycenie, którą podaję przed startem."],
          ["Ile trwa stworzenie strony dla firmy ze Szczecina?", "Prostą stronę uruchamiamy zwykle w dwa–cztery tygodnie, pełną z wersją niemiecką w cztery–osiem. Termin wydłuża się głównie wtedy, gdy czekamy na zdjęcia albo akceptację tłumaczeń."],
          ["Czy strona może powstać zdalnie, skoro pracujesz z Warszawy?", "Tak, tak pracuję z firmami ze Szczecina i całej Polski: rozmowy wideo, wspólne dokumenty, projekt do akceptacji w przeglądarce. Zdjęcia lokalu czy warsztatu możecie zrobić sami albo zlecić lokalnemu fotografowi."],
          ["Agencja interaktywna czy jeden wykonawca strony?", "Agencja ma sens, gdy razem ze stroną potrzebujecie kampanii i mediów społecznościowych. Jeśli chodzi o samą stronę, jedna osoba od projektu do uruchomienia oznacza mniej przekazywania uwag i znaną z góry cenę."],
          ["Do kogo należy strona po uruchomieniu?", "Do Was: domena, kod i treści. Możecie przenieść stronę do innego hostingu albo innego wykonawcy, a ja nie pobieram abonamentu."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową w Szczecinie: co mi wysłać"),
        p(
          "Przyślijcie nazwę firmy, adres obecnej strony lub profilu w Google, listę usług, dzielnice i gminy, w których pracujecie, oraz języki, w których rozmawiacie z klientami. Kilka zdjęć z Waszej pracy pomoże mi zaproponować stronę główną. Odpowiem listą podstron i stałą ceną. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
