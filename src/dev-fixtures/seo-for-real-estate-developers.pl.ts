// Landing page fixture: Pozycjonowanie strony dewelopera (PL), group
// «seo-for-real-estate-developers». New page. Market version for Polish
// deweloperzy — from a single investment in a smaller town to several phases in
// Warszawa, Kraków, Wrocław, Trójmiasto — not a translation of the EN page.
// Semantic core: ref/food-developer.md (Poland): marketing dla dewelopera 210,
// marketing dewelopera 210 (H2 «Marketing dewelopera w Google: …», intro,
// metaDescription) · strona dla dewelopera 140 → /pl/strona-dla-dewelopera
// (sibling, linked once) · pozycjonowanie strony dewelopera — no measured
// volume, SERP commercial (agencies) → H1, slug, several H2. «akademia
// dewelopera» 170 and «panel dewelopera» 50 are other intents — not targeted.
// Buyer phrases used as examples: «mieszkania na sprzedaż [miasto] deweloper»,
// «nowe mieszkania [dzielnica]», «rynek pierwotny», «termin oddania».
// Intent: ref/intent-check-food-developer.md — «pozycjonowanie strony
// dewelopera» vs «pozycjonowanie biura nieruchomości» 0 of 10 shared URLs, 0
// shared domains → separate from the agent page
// (/pl/pozycjonowanie-strony-agenta-nieruchomosci, linked once).
// Angle: inwestycja pages, price transparency on the developer’s site since
// 2025 (general, «not legal advice»), one data source for site and feeds,
// portals (Otodom, Morizon, Gratka, rynek pierwotny portals — general),
// foreigners living in Poland and buyers from abroad, crawl control, links
// without buying, AI answers. Main proof: the property platform in Cyprus
// (facts exactly as in the brief, client not named).
// NOT on this page: design and build, prospekt informacyjny layout, forms
// (/pl/strona-dla-dewelopera); an agent’s name and district pages
// (/pl/pozycjonowanie-strony-agenta-nieruchomosci); Google Ads, Facebook Ads,
// paid portal promotions (not offered).
// Owner’s rules: PL form «pozycjonowanie strony X»; every SEO page covers AI
// search (GEO, AEO); never say there are no clients from the visitor’s
// industry; faktura without VAT (owner is VAT-exempt).
import { p, h2, h3, li, link, k } from "./pt";

export const seoForRealEstateDevelopersPl = {
  lang: "pl",
  group: "seo-for-real-estate-developers",
  slug: "pozycjonowanie-strony-dewelopera",
  title: "Pozycjonowanie strony dewelopera",
  heading: "Pozycjonowanie strony dewelopera",
  excerpt:
    "Zajmuję się pozycjonowaniem stron deweloperów: podstrona każdej inwestycji widoczna na frazy z miastem i dzielnicą, aktualne ceny i dostępność mieszkań z jednego źródła, podstrony pod budżet i liczbę pokoi, wersje dla kupujących z zagranicy, linki bez kupowania i obecność w odpowiedziach AI.",
  seo: {
    metaTitle: "SEO dla dewelopera: inwestycje, ceny i AI | Bandziuk",
    metaDescription:
      "Marketing dewelopera w Google: podstrony inwestycji, aktualne ceny mieszkań, frazy z dzielnicą, Otodom, wersje językowe i odpowiedzi AI. Audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Inwestycje, mieszkania, ceny", "Audyt od 1000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Mieszkania od dewelopera Kraków", "3 pokoje, oddanie 2027", "Cena za m² i rzut", "Poleca ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO strony dewelopera: podstrony inwestycji, oferta mieszkań, dane o cenach, indeksowanie, portale i odpowiedzi AI", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO dla dewelopera: szablon podstrony inwestycji, podstrony miast i budżetów, dane strukturalne, przekierowania", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie strony dewelopera", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje pozycjonowanie strony dewelopera",
      items: [
        { _key: k("o"), iconName: "layers", title: "Podstrona inwestycji, która rośnie w Google", text: "Ceny, rzuty, harmonogram budowy, okolica" },
        { _key: k("o"), iconName: "plug", title: "Ceny i dostępność z jednego źródła", text: "Sprzedane lokale oznaczone od razu" },
        { _key: k("o"), iconName: "map-pin", title: "Podstrony miast, dzielnic i budżetów", text: "Tam, gdzie kupujący naprawdę szukają" },
        { _key: k("o"), iconName: "search", title: "Wersje językowe dla obcokrajowców", text: "Pisane pod frazy danego rynku" },
        { _key: k("o"), iconName: "shield-check", title: "Linki zdobyte, nie kupione", text: "Partnerzy, media lokalne, katalogi" },
        { _key: k("o"), iconName: "sparkles", title: "Deweloper polecany przez asystentów AI", text: "Zrealizowane inwestycje i fakty do sprawdzenia" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO strony dewelopera", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe pozycjonowanie strony dewelopera", value: "od 3500 zł / mies.", note: "w dużych miastach przy silnej konkurencji od 5500 zł", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: serwisy nieruchomości, B2B i wielojęzyczne, które prowadzę",
      subtitle:
        "Na pierwszym miejscu platforma nieruchomości na Cyprze: około 375 inwestycji od licencjonowanych deweloperów, którą buduję i prowadzę od pierwszych miesięcy 2025 roku — wcześniej nie było tam żadnej strony. Ruch z Google urósł od zera do około 2500 wejść miesięcznie, 96% ruchu pochodzi z wyszukiwarek, mniej więcej co dziesiąta wizyta organiczna przychodzi z asystentów AI — bez ani jednego kupionego linku i bez Google Ads. Obok: warszawska firma remontowo-inwestycyjna z serwisem w stylu premium, trójjęzyczna strona ScanM2, firmy skanowania laserowego 3D i BIM, z 29-krotnym wzrostem wejść z wyszukiwarki, serwis agencji edukacyjnej dla dziesięciu krajów i strona psychoterapeuty z Mediolanu, której nowe podstrony pojawiają się w odpowiedziach ChatGPT. Wspólny mianownik z deweloperem: duża lub wielojęzyczna oferta, klient, który porównuje miesiącami, i fakty, które Google i AI mogą sprawdzić.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "build-and-optimize-a-multilingual-real-estate-platform",
        "renovation-and-investment-website-with-premium-design",
        "architecture-website-rebuild-and-seo-scan",
        "full-multilingual-website-development-and-seo-for-student-services",
        "psychotherapist-website-milan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena pozycjonowania strony dewelopera",
      subtitle: "W ciągu jednego dnia roboczego odpiszę, od czego zacząłbym — podstrony inwestycji, oferta mieszkań czy dane o cenach — i podam stałą cenę.",
      contextLabel: "Nazwa dewelopera lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Co sprzedajesz?", options: ["Mieszkania w budynkach wielorodzinnych", "Domy jednorodzinne i bliźniaki", "Apartamenty nad morzem lub w górach", "Lokale usługowe i inwestycje mieszane"] },
        { _key: k("z"), question: "Ile inwestycji jest teraz w sprzedaży?", options: ["Jedna, kolejne w planach", "Dwie do pięciu", "Więcej niż pięć", "Pierwsza dopiero startuje"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Pozycjonowanie strony dewelopera to moja usługa dla firm, które budują i sprzedają mieszkania i domy: praca nad tym, żeby kupujący, który wpisuje „mieszkania na sprzedaż Gdańsk deweloper” albo nazwę Twojej inwestycji, trafiał na Twoją stronę, a nie na kopię ogłoszenia na portalu. Robię to sam — audyt, teksty, poprawki w kodzie, dane strukturalne i raporty — i sam prowadzę duży katalog nieruchomości, więc problemy z indeksowaniem ofert znam od strony praktyki."),

        h2("Pozycjonowanie strony dewelopera: co obejmuje usługa"),
        p("Strona dewelopera zmienia się co tydzień: lokale się sprzedają, ceny idą w górę, rusza kolejny etap, a oddany budynek znika z oferty. Google ocenia ją jak każdy duży katalog, a kupujący — jak biuro sprzedaży. Pracuję nad pięcioma obszarami:"),
        li("frazy dla Twoich miast i produktów — od kawalerek inwestycyjnych po domy w zabudowie bliźniaczej"),
        li("podstrona każdej inwestycji oraz podstrony dzielnic, budżetów i liczby pokoi"),
        li("ceny, rzuty i dostępność lokali aktualne i czytelne dla wyszukiwarki"),
        li("techniczna strona dużej oferty: filtry, mapa, sprzedane lokale, przekierowania"),
        li("zaufanie: linki, wzmianki, opinie i odpowiedzi asystentów AI"),

        h2("Marketing dewelopera w Google: co daje SEO obok biura sprzedaży, portali i reklam"),
        p("Marketing dla dewelopera zwykle opiera się na kanałach, które kończą się razem z budżetem: wyróżnienia ogłoszeń na portalach, kampanie na start sprzedaży, prowizje dla pośredników. Wyszukiwarka działa inaczej. Kupujący mieszkanie z rynku pierwotnego porównuje oferty miesiącami i wpisuje nazwę inwestycji, nazwę dewelopera albo „nowe mieszkania Wrocław Jagodno” wiele razy, zanim podpisze umowę rezerwacyjną. Jeśli te wyszukiwania kończą się na portalu, płacisz za klienta, który i tak szukał Ciebie."),
        p(
          "Pozycjonowanie zatrzymuje te wejścia na Twojej stronie i dokłada frazy, do których reklama nie dociera. Biuro sprzedaży potrzebuje też własnej wizytówki w Mapach Google z godzinami i dojazdem — tę pracę opisuję na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Frazy kupujących mieszkania od dewelopera: miasto, dzielnica, liczba pokoi i termin oddania"),
        p("Kupujący na rynku pierwotnym łączy w jednym zapytaniu kilka rzeczy: miejsce („Kraków Bronowice”, „blisko metra”, „pod Poznaniem”), typ i metraż („3 pokoje”, „z ogródkiem”, „dom w zabudowie bliźniaczej”), etap („gotowe do odbioru”, „oddanie 2027”, „stan deweloperski”) i cenę. Pracę zaczynam od liczb: ile razy miesięcznie wpisuje się takie frazy w każdym mieście, w którym budujesz, i sprawdzam, ile ruchu na nazwę Twojej inwestycji zabierają dziś portale."),
        h3("Podstrony pod budżet, liczbę pokoi i typ zabudowy"),
        p("Podstrona „mieszkania 2-pokojowe Łódź rynek pierwotny” ma sens, gdy pokazuje prawdziwe lokale z Twoich inwestycji i mówi coś, czego nie da filtr: czym różnią się osiedla, kiedy są odbiory, jakie są koszty miejsca postojowego. Setki podstron wygenerowanych dla każdej kombinacji bez treści Google traktuje jak strony niskiej jakości."),

        h2("Strona inwestycji deweloperskiej w Google: ceny, rzuty, harmonogram i lokalizacja"),
        p("Podstrona inwestycji to najważniejsza strona w pozycjonowaniu strony dewelopera. Powinna tekstem odpowiadać na pytania, które kupujący zadaje doradcy w biurze sprzedaży:"),
        li("widełki cen i cena za metr z datą aktualizacji"),
        li("typy mieszkań, metraże i rzuty — każdy rzut z opisem tekstowym"),
        li("etap budowy i termin oddania, ze zdjęciami z placu budowy opisanymi datą"),
        li("okolica w liczbach: przystanek, szkoła, sklep, droga wylotowa"),
        li("harmonogram płatności, miejsca postojowe, komórki lokatorskie"),
        p("Fakty działają lepiej niż nastrój. Na cypryjskiej platformie opisanej niżej opisy projektów zamieniono kiedyś na tekst w stylu lifestyle i podstrony sprzedażowe straciły ruch; gdy wróciły konkretne dane — cena, metraż, lokalizacja — liczba kliknięć wzrosła o 16%."),

        h2("Jawność cen mieszkań i dostępność lokali: jedno źródło danych dla strony i Google"),
        p("Od 2025 roku deweloperzy w Polsce muszą pokazywać na swojej stronie ceny oferowanych mieszkań i domów — cenę za metr, cenę całkowitą, ceny miejsc postojowych i komórek — oraz ich zmiany, a dane trafiają także do portalu dane.gov.pl. Szczegóły obowiązku warto sprawdzić z prawnikiem; to nie jest porada prawna. Dla SEO to szansa: skoro ceny i tak muszą być aktualne, niech strona pobiera je automatycznie z arkusza, CRM albo systemu sprzedaży, z którego korzysta biuro."),
        p("Wtedy każdy lokal ma bieżący status, a sprzedany zostaje na stronie z oznaczeniem i linkiem do podobnych wolnych mieszkań. Zakończona inwestycja zachowuje adres jako realizacja: zdjęcia, data oddania, liczba lokali. Usunięte podstrony dostają przekierowanie 301, nigdy błąd 404."),

        h2("Otodom, Morizon, Gratka a strona dewelopera: o które frazy warto walczyć"),
        p("Na ogólne frazy typu „nowe mieszkania Warszawa” pierwszą stronę zajmują Otodom, Morizon, Gratka i portale rynku pierwotnego. Deweloper z trzema inwestycjami ich tam nie wyprzedzi. Wygrywa bliżej decyzji: na nazwę inwestycji i dewelopera, na dzielnicę z dopiskiem „deweloper”, na konkretny typ lokalu i na pytania o standard wykończenia czy harmonogram płatności. Ogłoszenia na portalach warto zostawić — dają zapytania i wzmianki — ale pełniejsza wersja z rzutami i aktualną dostępnością powinna być u Ciebie."),

        h2("Strona dewelopera dla kupujących z zagranicy: wersje językowe i hreflang"),
        p("W dużych miastach mieszkania kupują też obcokrajowcy mieszkający w Polsce, a apartamenty nad morzem i w górach — inwestorzy z innych krajów. Każda grupa szuka po swojemu, więc wersja angielska czy ukraińska potrzebuje własnych fraz, a nie tłumaczenia polskich podstron, i poprawnych znaczników hreflang. Zaczynam od języków, w których biuro sprzedaży już obsługuje klientów. O budowie takich serwisów piszę na stronie ",
          link("tworzenie stron wielojęzycznych", "/pl/oferty/tworzenie-stron-wielojezycznych"),
          ".",
        ),

        h2("Techniczne SEO strony dewelopera z dużą ofertą mieszkań: filtry, mapa, rzuty"),
        p("Kilkaset lokali, kilkanaście filtrów i interaktywny rzut piętra potrafią wygenerować tysiące adresów, które Google próbuje odwiedzić. W technicznej części pilnuję, żeby indeksowały się te, które mają sens:"),
        li("kombinacje filtrów z realnym popytem stają się podstronami, reszta jest wyłączona z indeksu"),
        li("lista lokali i mapa działają jako zwykłe linki HTML, nie tylko w skrypcie"),
        li("wizualizacje i rzuty są skompresowane i opisane"),
        li("dane strukturalne opisują inwestycję i lokale z ceną i dostępnością"),
        li("każda zmiana adresów po przebudowie ma przekierowanie 301"),

        h2("Linki do strony dewelopera bez kupowania linków"),
        p("Deweloper ma więcej naturalnych źródeł linków niż większość firm: architekci, generalny wykonawca i dostawcy, którzy pokazują realizację, lokalne media przy wbiciu łopaty i oddaniu budynku, banki partnerskie, pośrednicy sprzedający Twoje lokale, katalogi firm. Moja praca polega na tym, żeby każda taka wzmianka prowadziła do właściwej podstrony inwestycji, a nie tylko na stronę główną, i żeby na stronie były fakty, które dziennikarz czy partner może zacytować."),

        h2("Przykład pozycjonowania strony: platforma nieruchomości na Cyprze od zera do ok. 2500 wejść z Google miesięcznie"),
        p("Platforma sprzedaje nowe apartamenty i wille od licencjonowanych deweloperów kupującym z zagranicy. Stworzyłem ją od podstaw w pierwszych miesiącach 2025 roku i od tamtej pory odpowiadam za całość: programowanie, treści, techniczne SEO i widoczność w AI. Ma około 375 inwestycji, 28 podstron deweloperów i około 330 podstron pod miasta, typy i budżety, w pięciu językach: angielskim, niemieckim, polskim, rosyjskim i hebrajskim. Od przeprowadzki na VPS z własnym panelem w czerwcu 2026 roku dane z feedów deweloperów importują się codziennie, a każdy stary adres dostał przekierowanie 301."),
        p("Wynik: od zera do około 2500 wejść organicznych miesięcznie, 96% ruchu z wyszukiwarek, około 10% wizyt organicznych z asystentów AI i wysokie pozycje na wiele niemieckojęzycznych zapytań z krajów DACH. Ani jednego kupionego linku, żadnych Google Ads."),

        h2("Pozycjonowanie strony dewelopera w ChatGPT i Google AI Overviews (GEO, AEO)"),
        p("„Który deweloper w Krakowie oddaje mieszkania w terminie?”, „Czy ten deweloper jest wiarygodny?”, „Nowe osiedla w Gdyni z dobrym dojazdem?” — takie pytania kupujący zadają asystentom, takim jak ChatGPT i Perplexity, a w Google czytają podsumowanie AI nad wynikami. Odpowiedź to krótka lista firm z uzasadnieniem. Żeby na nią trafić, potrzebne jest GEO (generative engine optimization), nazywane też AEO (answer engine optimization). W praktyce dewelopera to:"),
        li("fakty o firmie zwykłym tekstem: lata działalności, oddane inwestycje, liczba lokali"),
        li("zrealizowane inwestycje na stronie z datami i zdjęciami"),
        li("nazwa, adres biura i liczby identyczne na stronie, portalach i w katalogach firm"),
        li("dane strukturalne firmy i inwestycji połączone z tymi profilami"),
        p(
          "Odpowiedzi asystentów o Twojej firmie i inwestycjach zapisuję na starcie i porównuję po kilku miesiącach. Usługę opisuję osobno: ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Ile kosztuje pozycjonowanie strony dewelopera"),
        li("Audyt SEO strony dewelopera — podstrony inwestycji, oferta, dane o cenach, indeksowanie, portale, odpowiedzi AI: od 1000 zł, płatny raz, z listą poprawek uszeregowaną od tych, które dadzą najwięcej."),
        li("Prace jednorazowe — szablon podstrony inwestycji, podstrony miast i budżetów, dane strukturalne, mapa przekierowań: od 1000 do 3000 zł."),
        li("Stałe pozycjonowanie strony dewelopera — nowe podstrony, kontrola oferty i danych, linki, widoczność w AI, raport zapytań według inwestycji: od 3500 zł miesięcznie, a w Warszawie, Krakowie, Wrocławiu czy Trójmieście przy silnej konkurencji od 5500 zł miesięcznie."),
        p(
          "Jeśli najpierw trzeba zbudować lub przebudować serwis, zajrzyj na stronę ",
          link("strona dla dewelopera", "/pl/strona-dla-dewelopera"),
          ". Agenci sprzedający mieszkania z rynku wtórnego mają własną stronę: ",
          link("pozycjonowanie strony agenta nieruchomości", "/pl/pozycjonowanie-strony-agenta-nieruchomosci"),
          ". Comiesięczną współpracę opisuje strona ",
          link("strategia i optymalizacja SEO", "/pl/oferty/strategia-i-optymalizacja-seo"),
          ", zakres audytu na stronie ",
          link("audyt SEO strony internetowej", "/pl/oferty/audyt-seo-strony-internetowej"),
          ", a pełne widełki cen w ",
          link("cenniku", "/pl/cennik"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie strony dewelopera: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje pozycjonowanie strony dewelopera?", "Audyt kosztuje od 1000 zł, zadania jednorazowe od 1000 do 3000 zł, a comiesięczna praca od 3500 zł — w największych miastach, gdzie konkurencja jest najsilniejsza, od 5500 zł. Gdy napiszesz, ile masz inwestycji i w jakich miastach, podam kwotę bez widełek."],
          ["Kiedy zacząć pozycjonowanie strony nowej inwestycji?", "Przed startem sprzedaży — najlepiej wtedy, gdy inwestycja ma już nazwę i lokalizację. Podstrona opublikowana wcześniej zbiera wyszukiwania nazwy i okolicy, zanim ruszy kampania, i ma czas, żeby urosnąć."],
          ["Jedna strona dla wszystkich inwestycji czy osobna dla każdej?", "Dla Google zwykle lepsza jest jedna domena z sekcją dla każdej inwestycji: linki i zaufanie się sumują. Osobna strona ma sens przy dużym, wieloletnim osiedlu z własną marką — wtedy potrzebuje własnego planu SEO."],
          ["Czy strona dewelopera może wyprzedzić Otodom?", "Na najszersze frazy rzadko. Na nazwę inwestycji, dzielnicę z dopiskiem „deweloper”, konkretne typy mieszkań i pytania o Twoje osiedla — tak, i te wyszukiwania są bliżej rezerwacji."],
          ["Skąd biorą się linki do strony dewelopera bez kupowania?", "Od tych, którzy i tak mają powód, żeby o Tobie pisać: architektów, wykonawców, banków partnerskich, pośredników, lokalnych mediów i katalogów firm. Platforma na Cyprze z mojego portfolio doszła tak do około 2500 wejść z Google miesięcznie."],
          ["Co zrobić z podstronami sprzedanych inwestycji?", "Zostawić je jako realizacje ze zdjęciami i datą oddania, z linkami do inwestycji w sprzedaży. Usunięcie ich wyrzuca linki i historię, którą sprawdzają kupujący i asystenci AI."],
          ["Czy ChatGPT poleca deweloperów?", "Tak, jeśli ktoś o to zapyta. Asystent sięga po firmy, o których te same fakty znajduje w kilku miejscach: oddane inwestycje, dotrzymane terminy, zgodne dane na portalach. Nikt nie zagwarantuje polecenia; ja pokazuję, jak zmieniły się odpowiedzi po kilku miesiącach pracy."],
          ["Czy pracujesz z deweloperami spoza Warszawy?", "Oczywiście — z Krakowa, Wrocławia, Trójmiasta, Poznania i mniejszych miast. Do pozycjonowania strony nie muszę przyjeżdżać na budowę: wystarczą dostęp do strony i dane wyszukiwań dla Twoich lokalizacji. Rozmawiamy po polsku, z partnerami z zagranicy także po angielsku. Wystawiam fakturę — korzystam ze zwolnienia z VAT."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie strony dewelopera: co mi wysłać"),
        p(
          "Wyślij adres strony, listę inwestycji w sprzedaży i planowanych z miastami, informację, gdzie dziś są ceny i dostępność lokali — w arkuszu, CRM czy systemie sprzedaży — na jakich portalach publikujesz ogłoszenia i czy sprzedajesz także obcokrajowcom. Odpowiem, od czego zacząłbym, i podam stałą cenę za pierwszy etap. Skorzystaj z ",
          link("formularza powyżej", "#quote"),
          " albo napisz na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
