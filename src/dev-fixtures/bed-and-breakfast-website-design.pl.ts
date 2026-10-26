// Landing page fixture: Strona internetowa dla pensjonatu (PL), group
// «bed-and-breakfast-website-design». New page. Market version for Polish
// pensjonaty, gospodarstwa agroturystyczne i domy gościnne (owner-run, a few to
// twenty rooms) — not a translation of bed-and-breakfast-website-design.en.
// Semantic core: ref/creative-leisure.md has no measured PL phrases for this
// group; heading phrases from BRIEF.md: «strona internetowa dla pensjonatu»
// (H1, H2s), «strona dla agroturystyki» (metaTitle, H2), «system rezerwacji
// online dla pensjonatu», «strona domu gościnnego», «ile kosztuje strona
// internetowa dla pensjonatu» (cost H2, FAQ). EN core: bed and breakfast
// website design 70 + 70.
// Intent: ref/intent-check-creative-leisure.md — EN «bed and breakfast website
// design» vs «vacation rental website design» 0 shared URLs → own page;
// «website for bed and breakfast» = travelers (directories, portals) — so the
// page speaks to the owner from the first sentence, not to guests searching
// «noclegi».
// Polish context: Booking.com and Nocowanie.pl commissions (general, no
// percentages), systemy rezerwacji (Hotres, IdoBooking, KWHotel — general),
// zadatek vs zaliczka, BLIK / Przelewy24, opłata miejscowa, agroturystyka
// (gospodarstwo, zwierzęta, domowe jedzenie), regions (Tatry, Mazury,
// Bieszczady, Bałtyk), guests from Germany, Czechia and other countries, RODO,
// Google Maps / hotel results.
// Prices: /pl/cennik — prosta strona 3000–6000 zł, pełna od 8500 zł, projekt
// graficzny w cenie.
// NOT on this page: hotele z recepcją (/pl/strona-dla-hotelu — neighbour,
// linked once); stałe pozycjonowanie (/pl/oferty/pozycjonowanie-lokalne —
// linked); reklamy; zarządzanie ofertami na portalach.
// Owner’s rules: every page covers AI search; never say there are no clients
// from the visitor’s segment; no invented figures.
import { p, h2, li, ol, link, k } from "./pt";

export const bedAndBreakfastWebsiteDesignPl = {
  lang: "pl",
  group: "bed-and-breakfast-website-design",
  slug: "strona-internetowa-dla-pensjonatu",
  title: "Strona internetowa dla pensjonatu",
  heading: "Strona internetowa dla pensjonatu",
  excerpt:
    "Tworzę strony internetowe dla pensjonatów, gospodarstw agroturystycznych i domów gościnnych: więcej rezerwacji bezpośrednich zamiast prowizji dla portali, system rezerwacji z kalendarzem i zadatkiem, podstrona każdego pokoju, śniadania i przewodnik po okolicy oraz wersje językowe dla gości z zagranicy — projekt graficzny w cenie, od 3000 zł.",
  seo: {
    metaTitle: "Strona dla pensjonatu i agroturystyki | Bandziuk",
    metaDescription:
      "Strona internetowa dla pensjonatu: rezerwacje bez prowizji portali, kalendarz z zadatkiem, pokoje, śniadania, okolica i języki dla gości. Od 3000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt + wykonanie, jedna cena", "Od 3000 zł", "Rezerwacje bezpośrednie"],
  heroPhonePoints: ["Sprawdź wolne terminy", "Pokój z balkonem na Tatry", "Śniadanie 8:00–10:00", "Zadatek BLIK-iem"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona internetowa dla pensjonatu lub agroturystyki z kalendarzem rezerwacji, projekt graficzny w cenie", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Strona pensjonatu z podstroną każdego pokoju, systemem rezerwacji i płatności, przewodnikiem po okolicy, wersją obcojęzyczną i podstawowym SEO lokalnym, projekt graficzny w cenie", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co dostajesz ze stroną internetową dla pensjonatu",
      items: [
        { _key: k("o"), iconName: "plug", title: "System rezerwacji na Twojej stronie", text: "Kalendarz zgodny z portalami, na których jesteś" },
        { _key: k("o"), iconName: "trending-up", title: "Powody, by rezerwować u Ciebie", text: "Bez prowizji portalu, z drobnym bonusem dla gościa" },
        { _key: k("o"), iconName: "image", title: "Podstrona dla każdego pokoju", text: "Zdjęcia, łóżka, łazienka, piętro i widok z okna" },
        { _key: k("o"), iconName: "file-text", title: "Śniadania i przewodnik po okolicy", text: "Szlaki, jeziora, stoki, dojazd i parking" },
        { _key: k("o"), iconName: "message-circle", title: "Wersje dla gości z zagranicy", text: "Niemiecki, angielski — razem z rezerwacją" },
        { _key: k("o"), iconName: "sparkles", title: "Pokoje i regulamin czytelne dla AI", text: "Tekst i dane strukturalne, nie napisy na zdjęciach" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona pensjonatu", value: "3000–6000 zł", note: "projekt graficzny w cenie" },
        { _key: k("r"), label: "Pokoje, rezerwacje, okolica, języki, SEO lokalne", value: "od 8500 zł", note: "projekt graficzny w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: strony, na których sprzedają zdjęcia, rezerwacja i kilka języków",
      subtitle:
        "Cyprus VIP Estates to serwis nieruchomości, który zbudowałem od zera w pięciu językach, w tym po hebrajsku: katalog z filtrami i mapą, wideo i zapytania trafiające prosto do CRM; jego SEO prowadzę co miesiąc. Warszawska firma od remontów i inwestycji w nieruchomości dostała stronę o wyglądzie premium, na której przekonują zdjęcia skończonych wnętrz. Strona agencji edukacyjnej obsługuje studentów z dziesięciu krajów. Dla DJ-a i producenta Sashy Ditha zbudowałem na Next.js stronę według jego projektu z Figmy, z mediami ładowanymi w tle, która otwiera się w niecałą sekundę, i formularzem rezerwacji koncertów. Landi Room, salon beauty z Warszawy, przyjmuje płatności za kurs online przez Stripe Checkout, po czym system sam wysyła każdemu kupującemu osobny link do nagrań. Razem pokazują to, z czego składa się strona pensjonatu: duże zdjęcia, które szybko się otwierają, rezerwację lub płatność wygodną na telefonie i treści w języku gościa.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "build-and-optimize-a-multilingual-real-estate-platform",
        "renovation-and-investment-website-with-premium-design",
        "full-multilingual-website-development-and-seo-for-student-services",
        "official-website-for-dj-and-producer-sasha-dith",
        "e-commerce-landing-page-with-secured-video-access",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej dla pensjonatu",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: proponuję listę podstron — pokoje, śniadania, okolica, rezerwacja — i podaję stałą cenę w widełkach z cennika.",
      contextLabel: "Nazwa obiektu, strona albo oferta na Booking.com",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Skąd masz dziś najwięcej rezerwacji?", options: ["Booking.com", "Nocowanie.pl i inne portale noclegowe", "Telefon i e-mail", "Stali goście i polecenia"] },
        { _key: k("z"), question: "Jaki obiekt prowadzisz?", options: ["Pensjonat", "Gospodarstwo agroturystyczne", "Dom gościnny lub pokoje gościnne", "Pensjonat z domkami letniskowymi"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Tworzę strony internetowe dla pensjonatów, gospodarstw agroturystycznych i domów gościnnych: planuję je, projektuję, programuję i uruchamiam sam, razem z systemem rezerwacji, za stałą cenę ustaloną przed startem. Portale noclegowe przyprowadzają nowych gości. Własna strona sprawia, że kolejny przyjazd rezerwują już u Ciebie, i pokazuje, jak naprawdę wygląda pobyt w Twoim domu — zanim gość wsiądzie do samochodu."),

        h2("Strona internetowa dla pensjonatu prowadzonego przez właścicieli"),
        p("W większości pensjonatów gospodarze sami robią śniadania, sprzątają pokoje, odbierają telefony i czekają na gości, którzy utknęli w korku pod Zakopanem. Strona musi pracować, kiedy oni są zajęci, i dać się łatwo zmieniać. W praktyce oznacza to, że:"),
        li("pokazuje wolne terminy i przyjmuje rezerwację o północy, kiedy nikt nie odbierze telefonu"),
        li("odpowiada na pytania, które słyszysz przy każdym zameldowaniu: parking, godziny przyjazdu, zwierzęta, łóżeczko dla dziecka, opłata miejscowa"),
        li("pozwala z telefonu zmienić cenę na długi weekend albo zamknąć pokój na czas remontu"),
        li("wygląda jak Twój dom, a nie jak strona sieciowego hotelu: Twoje pokoje, Twój ogród, Twój widok"),
        p("Goście wybierają pensjonat także ze względu na gospodarzy. Zdjęcie właścicieli i kilka zdań o tym, jak powstał dom, działają na stronie głównej lepiej niż hasło o „komforcie i niepowtarzalnej atmosferze”."),

        h2("Rezerwacje bezpośrednie na stronie pensjonatu a prowizje Booking.com i Nocowanie.pl"),
        p("Booking.com, Nocowanie.pl czy Airbnb dają zasięg, którego mały obiekt sam nie zbuduje, i większość pensjonatów z nich nie rezygnuje. Płaci się za to prowizją od każdego pobytu i słabszym kontaktem z gościem przed przyjazdem. Strona nie zastępuje portali — daje gościom, którzy już Cię znają, powód i prosty sposób, by następnym razem zarezerwować bezpośrednio:"),
        li("przycisk „Sprawdź wolne terminy” na każdym ekranie, z kalendarzem na żywo"),
        li("krótka, prawdziwa lista korzyści z rezerwacji u Ciebie: wybór pokoju, późniejsze wymeldowanie, nalewka na powitanie — to, co naprawdę możesz dać"),
        li("cena nie wyższa niż na portalach, jeśli pozwalają na to Twoje umowy z nimi"),
        li("zaproszenie do rezerwacji przez stronę w e-mailu po pobycie i na kartce w pokoju"),
        p("Statystyki pokazują, ile rezerwacji w miesiącu przyszło przez stronę i z których podstron. Tę liczbę porównujesz z prowizjami zapłaconymi portalom — i wiesz, czy strona na siebie zarabia."),

        h2("System rezerwacji online na stronie pensjonatu: kalendarz, zadatek, BLIK"),
        p("System rezerwacji to część strony, w której gość wybiera daty, pokój i płaci. Pensjonaty zwykle korzystają z gotowych rozwiązań — w Polsce popularne są między innymi Hotres, IdoBooking czy KWHotel, a za granicą Lodgify albo Little Hotelier. Większość ma channel manager, który pilnuje, żeby ten sam pokój nie został sprzedany dwa razy na dwóch portalach. Przy wyborze sprawdzam z Tobą:"),
        li("czy system łączy się ze wszystkimi portalami, na których jesteś"),
        li("czy przyjmuje płatności BLIK-iem i przez Przelewy24, bo tak płaci większość polskich gości"),
        li("czy pozwala pobrać zadatek albo zaliczkę i jasno opisać zasady anulowania przed płatnością"),
        li("czy rezerwacja zostaje na Twojej domenie i wygląda jak reszta strony"),
        p("Zadatek i zaliczka to w polskim prawie dwie różne rzeczy: zadatek przy rezygnacji gościa zwykle przepada, zaliczkę się zwraca. Strona i system używają tego słowa, które odpowiada Twojemu regulaminowi, żeby nie było sporu po odwołanej majówce."),

        h2("Pokoje i apartamenty na stronie pensjonatu: zdjęcia, łóżka, łazienka, piętro"),
        p("W pensjonacie żaden pokój nie jest taki sam, a gość chce wiedzieć, który dostanie. Każdy pokój ma własną podstronę, a zestawienie pozwala porównać je na jednym ekranie:"),
        li("kilkanaście zdjęć w dziennym świetle, także łazienki i widoku z okna"),
        li("liczba i rodzaj łóżek oraz dla kogo jest pokój: para, rodzina z dziećmi, grupa znajomych"),
        li("łazienka w pokoju czy na korytarzu, prysznic czy wanna"),
        li("piętro i schody — ważne dla starszych gości i rodzin z wózkiem"),
        li("ceny w sezonie i poza nim oraz przycisk rezerwacji tego konkretnego pokoju"),
        p("Zdjęcia zapisuję w kilku rozmiarach, więc podstrona otwiera się szybko nawet przy słabym zasięgu na Mazurach czy w Bieszczadach. Uczciwy opis pokoju to mniej rozczarowań przy zameldowaniu i mniej opinii zaczynających się od „na zdjęciach wyglądało na większy”."),

        h2("Strona dla agroturystyki: gospodarstwo, zwierzęta i domowe jedzenie"),
        p("Gospodarstwo agroturystyczne sprzedaje coś więcej niż nocleg: wieś, zwierzęta, ciszę i jedzenie z własnej spiżarni. Strona dla agroturystyki pokazuje to wprost:"),
        li("co jest w gospodarstwie: konie, kozy, kury, sad, staw, plac zabaw — i co dzieci mogą robić same"),
        li("wyżywienie: śniadania, obiadokolacje, przetwory i produkty, które gość może kupić na wyjazd"),
        li("zajęcia: przejażdżki, wypiek chleba, grzybobranie, ognisko — z porą roku, w której się odbywają"),
        li("dojazd ostatnim odcinkiem drogi gruntowej i to, czy dojedzie każdy samochód"),
        p("Rodziny z miasta szukają właśnie takich konkretów. Zdjęcia, na których są dzieci gości, trafiają na stronę tylko za zgodą rodziców."),

        h2("Śniadania i przewodnik po okolicy na stronie pensjonatu"),
        p("Śniadanie to często to, co gość zapamiętuje najdłużej. Osobna podstrona mówi, o której i gdzie jest podawane, co zwykle jest na stole, co pochodzi od lokalnych gospodarzy i jak przygotowujesz posiłki bezglutenowe czy wegańskie. Zdjęcia prawdziwego stołu, nie zdjęcia z banku."),
        p("Przewodnik po okolicy odpowiada na pytanie, które gość zadaje zaraz po rezerwacji: co tu robić. Najlepiej pisać go tak, jak opowiadasz przy śniadaniu:"),
        li("dojazd z najbliższego miasta i dworca, parking, ładowarka dla auta elektrycznego, jeśli jest"),
        li("co jest w zasięgu spaceru: szlak, jezioro, plaża, restauracja, którą polecasz"),
        li("wycieczki na jeden dzień, z czasem dojazdu"),
        li("pory roku: narty zimą, spływy latem, grzyby jesienią — i co zamyka się poza sezonem"),
        p("Takie podstrony przyciągają z Google ludzi, którzy planują wyjazd w Twoją okolicę, i dają asystentom AI konkretne fakty o Twoim obiekcie."),

        h2("Strona pensjonatu w kilku językach dla gości z zagranicy"),
        p(
          "Nad morzem i na Mazurach przyjeżdża wielu gości z Niemiec, w Karkonoszach i Beskidach z Czech, w Krakowie i okolicach z całego świata. Wersję językową dodaję tam, gdzie ci goście naprawdę są, i obejmuje ona całą drogę do rezerwacji: opisy pokoi, regulamin, zasady anulowania, dojazd i sam system rezerwacji. Tłumaczenie czyta człowiek, a tagi hreflang pokazują każdemu gościowi właściwą wersję w Google. Więcej o tym na stronie ",
          link("tworzenie stron wielojęzycznych", "/pl/oferty/tworzenie-stron-wielojezycznych"),
          ".",
        ),

        h2("Pensjonat w Mapach Google, wynikach hotelowych i opiniach"),
        p(
          "Kto szuka noclegu w Twojej miejscowości, widzi w Google mapę i listę obiektów z cenami i opiniami. Pensjonat trafia tam przez wizytówkę Google w kategorii „Pensjonat” albo „Gospodarstwo agroturystyczne”, z tą samą nazwą, adresem i telefonem co na stronie. Część systemów rezerwacji przekazuje też Twoją cenę bezpośrednią do wyników hotelowych Google, gdzie stoi obok cen portali. Opinie ważą najwięcej: proś o nie przy wymeldowaniu i odpowiadaj na każdą. Stałą pracę nad Mapami opisuję na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Strona pensjonatu, którą ChatGPT i Google AI Overviews potrafią przeczytać"),
        p("Planując urlop, wiele osób zadaje pytanie od razu ChatGPT, Perplexity albo podsumowaniom AI w Google: „spokojny pensjonat w Bieszczadach z domowym jedzeniem”, „agroturystyka na Kaszubach z końmi dla dzieci”. Asystent poleca tylko obiekty, o których potrafi coś przeczytać. Pokoje, ceny, regulamin i śniadania zamknięte w widżecie rezerwacji albo wpisane w grafikę są dla niego niewidoczne. Dlatego zapisuję je zwykłym tekstem i dodaję dane strukturalne BedAndBreakfast z adresem, pokojami, udogodnieniami i opiniami."),
        p(
          "Żeby asystenci wymieniali pensjonat w odpowiedziach, potrzebna jest dalsza praca — opisuję ją na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Jak powstaje strona internetowa dla pensjonatu"),
        ol("Materiały. Wysyłasz listę pokoi ze zdjęciami, cennik sezonowy, regulamin, nazwę systemu rezerwacji i linki do ofert na portalach."),
        ol("Plan i cena. Proponuję listę podstron i podaję stałą cenę."),
        ol("Projekt i wykonanie. Pierwszy ekran, podstronę pokoju i rezerwację projektuję najpierw na telefon i uzgadniam z Tobą."),
        ol("Uruchomienie. Podłączam system rezerwacji, płatności, statystyki i wizytówkę Google, a całość sprawdzam prawdziwą rezerwacją."),
        p(
          "Hotel z recepcją i działem sprzedaży potrzebuje innej strony — opisuję ją na stronie ",
          link("strona dla hotelu", "/pl/strona-dla-hotelu"),
          ". Ogólnie o tym, jak buduję strony, przeczytasz na stronie ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ".",
        ),

        h2("Ile kosztuje strona internetowa dla pensjonatu"),
        p("Oba warianty obejmują projekt graficzny:"),
        li("Prosta strona pensjonatu lub agroturystyki — strona główna, pokoje na jednej podstronie, śniadania, okolica, kontakt i kalendarz rezerwacji: 3000–6000 zł."),
        li("Pełna strona z podstroną każdego pokoju, systemem rezerwacji i płatności, przewodnikiem po okolicy, wersją obcojęzyczną i podstawowym SEO lokalnym: od 8500 zł."),
        p(
          "Po uruchomieniu płacisz za hosting, domenę i abonament systemu rezerwacji, a mnie tylko za zmiany, o które poprosisz. Wszystkie widełki znajdziesz w ",
          link("cenniku", "/pl/cennik"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strona internetowa dla pensjonatu: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona internetowa dla pensjonatu?", "Prosta strona kosztuje od 3000 do 6000 zł, a pełna, z podstroną każdego pokoju, systemem rezerwacji, przewodnikiem po okolicy, wersją obcojęzyczną i podstawowym SEO lokalnym — od 8500 zł. Obie ceny obejmują projekt graficzny. Po krótkim opisie obiektu podaję stałą kwotę."],
          ["Czy po uruchomieniu strony mam zrezygnować z Booking.com?", "Nie musisz. Portale przyprowadzają gości, którzy Cię jeszcze nie znają, a strona zamienia stałych gości i polecenia w rezerwacje bez prowizji. Channel manager pilnuje, żeby pokój nie został sprzedany dwa razy."],
          ["Jaki system rezerwacji wybrać dla pensjonatu?", "Taki, który łączy się z portalami, na których jesteś, przyjmuje BLIK i Przelewy24, pozwala pobrać zadatek i dobrze działa na telefonie. Jeśli już masz system i jesteś z niego zadowolony, strona po prostu z niego korzysta."],
          ["Czy sam zmienię ceny i zdjęcia pokoi?", "Tak. Ceny i dostępność ustawiasz w systemie rezerwacji, a teksty i zdjęcia w prostym panelu. Zdjęcia zmniejszają się automatycznie, więc nowy pokój wygląda jak pozostałe."],
          ["Czy strona agroturystyki różni się od strony pensjonatu?", "Układ jest podobny, ale agroturystyka pokazuje więcej: gospodarstwo, zwierzęta, zajęcia dla dzieci, domowe wyżywienie i dojazd na wieś. To właśnie te informacje przekonują rodziny z miasta."],
          ["Czy przeniesiesz moją starą stronę bez utraty pozycji w Google?", "Tak. Przed uruchomieniem każdy stary adres dostaje przekierowanie 301 na nową podstronę. Tak samo przeniosłem 468 wpisów psychoterapeuty z Mediolanu na nową stronę."],
          ["Czy pracujesz z pensjonatami spoza Warszawy?", "Tak, z obiektami z całej Polski. Wszystko odbywa się zdalnie: rozmawiamy online, zdjęcia i teksty przesyłasz mailem albo przez dysk, a stronę uruchamiam na Twoim hostingu i domenie."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową dla pensjonatu: co mi wysłać"),
        p(
          "Wyślij nazwę obiektu, link do obecnej strony albo oferty na Booking.com lub Nocowanie.pl, liczbę pokoi z kilkoma zdjęciami każdego, cennik sezonowy, nazwę systemu rezerwacji, jeśli go używasz, i języki, w których mówią Twoi goście. W odpowiedzi dostaniesz plan podstron i stałą cenę. Skorzystaj z ",
          link("formularza powyżej", "#quote"),
          " albo napisz na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
