// Landing page fixture: Strona internetowa dla salonu fryzjerskiego (PL), group
// «hair-salon-website-design». New page. Market version for Poland, not a
// translation of the EN page. Reader: właściciele salonów fryzjerskich
// i barbershopów.
// Semantic core: ref/creative-leisure.md has no PL phrases above the source’s
// floor for this group; brief keywords: «strona internetowa dla salonu
// fryzjerskiego» (H1, H2), «strona dla fryzjera», «strona dla barbershopu».
// Intent: ref/intent-check-creative-leisure.md — «strona dla salonu
// fryzjerskiego» vs «pozycjonowanie salonu fryzjerskiego»: 0 shared URLs.
// Top 10 for this page: strefafryzjera, gmweb, fryzjerzy.pl,
// widocznyfryzjer, hairtrendy, salonpoint, fryzjer.info, webmazur → katalogi
// i studia dla fryzjerów; the buyer is the salon owner. Pozycjonowanie
// returns biz.booksy, reservio, agencies → one H2 linking
// /pl/seo-salonu-kosmetycznego once.
// Polish angles: Booksy jako główny kanał rezerwacji (also Versum, Fresha —
// general), cennik według długości włosów, metamorfozy z Instagrama,
// barbershop bez zapisów, szkolenia fryzjerskie (Landi Room, nanoplastyka),
// BLIK i Przelewy24, Mapy Google.
// Direct case: Landi Room (e-commerce-landing-page-with-secured-video-access).
// NOT on this page: salony kosmetyczne z paznokciami i rzęsami (strona
// salonu kosmetycznego, linked once); pozycjonowanie w szczegółach
// (/pl/seo-salonu-kosmetycznego); spa i masaż (/pl/strona-internetowa-dla-spa).
import { p, h2, li, link, k } from "./pt";

export const hairSalonWebsiteDesignPl = {
  lang: "pl",
  group: "hair-salon-website-design",
  slug: "strona-internetowa-dla-salonu-fryzjerskiego",
  title: "Strona internetowa dla salonu fryzjerskiego",
  heading: "Strona internetowa dla salonu fryzjerskiego i barbershopu",
  excerpt:
    "Strona internetowa dla salonu fryzjerskiego i barbershopu: cennik według usługi i długości włosów, profile fryzjerów z metamorfozami, przycisk rezerwacji prowadzący do Booksy i miejsce na szkolenia — projekt i wykonanie w jednej, stałej cenie.",
  seo: {
    metaTitle: "Strona www dla fryzjera i barbershopu | Bandziuk",
    metaDescription:
      "Strona internetowa dla salonu fryzjerskiego: cennik według długości włosów, fryzjerzy z portfolio, rezerwacja przez Booksy, szkolenia online. Od 3000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt + wykonanie, jedna cena", "Od 3000 zł", "Działa z Booksy"],
  heroPhonePoints: ["Umów się do fryzjera", "Strzyżenie · Koloryzacja", "Cennik: włosy krótkie, długie", "Barber bez zapisów"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona dla salonu fryzjerskiego lub barbershopu", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Strona salonu fryzjerskiego z profilami fryzjerów, galerią metamorfoz, cennikiem według długości włosów, rezerwacją, szkoleniami i lokalnym SEO", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co dostajesz ze stroną internetową dla salonu fryzjerskiego",
      items: [
        { _key: k("o"), iconName: "file-text", title: "Cennik według długości włosów", text: "Krótkie, średnie, długie i poziom fryzjera" },
        { _key: k("o"), iconName: "image", title: "Fryzjerzy i ich metamorfozy", text: "Galeria według usługi i według osoby" },
        { _key: k("o"), iconName: "plug", title: "Rezerwacja przez Booksy", text: "Albo Versum, Fresha czy inny system salonu" },
        { _key: k("o"), iconName: "map-pin", title: "Barbershop: bez zapisów i dojazd", text: "Godziny, kolejka, mapa w jednym miejscu" },
        { _key: k("o"), iconName: "layers", title: "Szkolenia i kursy online", text: "Płatność BLIK lub kartą, dostęp po zakupie" },
        { _key: k("o"), iconName: "sparkles", title: "Czytelna dla Google i ChatGPT", text: "Usługi, ceny i godziny jako tekst" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona salonu lub barbershopu", value: "3000–6000 zł", note: "projekt w cenie" },
        { _key: k("r"), label: "Fryzjerzy, galeria, cennik, rezerwacja, szkolenia", value: "od 8500 zł", note: "projekt w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: warszawski salon beauty i inne strony lokalnych firm",
      subtitle:
        "Wszystkie pięć to warszawskie firmy, do których klient się umawia, dzwoni albo płaci online. Dla salonu Landi Room zrobiłem stronę sprzedającą kurs nanoplastyki z automatycznym dostępem do wideo po płatności. Strona firmy remontowo-inwestycyjnej pokazuje elegancki wygląd, jakiego chce salon premium; warsztat samochodowy i Felgilab — Mapy Google, lokalne wyszukiwanie i cenniki usług; strona przechowalni opon to jedna podstrona, którą właściciel sam edytuje, czyli format dla małego barbershopu.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "e-commerce-landing-page-with-secured-video-access",
        "renovation-and-investment-website-with-premium-design",
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej dla salonu fryzjerskiego",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: proponuję listę podstron dla Twojego salonu lub barbershopu i podaję stałą cenę.",
      contextLabel: "Nazwa salonu, Instagram lub profil Booksy",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Gdzie dziś znajdują Cię klienci?", options: ["Booksy", "Instagram i Facebook", "Mapy Google", "Z polecenia"] },
        { _key: k("z"), question: "Jaki to salon?", options: ["Salon fryzjerski", "Barbershop", "Salon z kilkoma stanowiskami do wynajęcia", "Kilka lokali"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Strona internetowa dla salonu fryzjerskiego to pierwsza rzecz, którą widzi nowa klientka, zanim zdecyduje, czy oddać Ci swoje włosy. Projektuję i wykonuję takie strony sam — dla salonów fryzjerskich, barberów i fryzjerów pracujących na własny rachunek — i łączę je z Booksy albo innym systemem, z którego już korzystasz. Strona nie zastępuje kalendarza; pokazuje ludzi, ceny i efekty, a potem kieruje prosto do rezerwacji w Twoim salonie."),

        h2("Czy salon fryzjerski z Booksy potrzebuje własnej strony internetowej"),
        p("W Polsce większość salonów zapisuje klientów przez Booksy, a nowych klientów szuka na Instagramie. To działa, dopóki grafik wypełniają stałe klientki. Profil w aplikacji ma jednak ograniczenia: wygląda jak każdy inny, ma krótkie opisy, a obok Twojego salonu aplikacja pokazuje konkurencję z tej samej ulicy. Część aplikacji pobiera też opłatę za klienta przyprowadzonego z ich katalogu — warunki się zmieniają, więc sprawdzamy aktualne."),
        p("Własna strona ma sens, gdy chcesz:"),
        li("być znaleziona w Google po usłudze, a nie tylko po nazwie salonu — „koloryzacja Gdańsk Wrzeszcz”, „strzyżenie kręconych włosów”"),
        li("wyjaśnić cennik i zasady wizyt dłużej niż pozwala pole w aplikacji"),
        li("pokazać prace każdego fryzjera pod jego nazwiskiem"),
        li("sprzedawać coś poza wizytami: szkolenia, kosmetyki, vouchery"),
        p("Przyciski „Umów się” na stronie i tak otwierają Twój kalendarz w Booksy, więc recepcja nadal pracuje na jednym grafiku."),

        h2("Pierwszy ekran strony salonu fryzjerskiego na telefonie"),
        p("Większość odwiedzin przychodzi z telefonu — z linku w bio na Instagramie, z wizytówki w Mapach Google albo z wyszukiwarki. Zanim ktoś przewinie stronę, powinien zobaczyć:"),
        li("w czym salon jest dobry i gdzie jest — „Koloryzacja i blond, Warszawa Mokotów”, a nie „Twoje piękno, nasza pasja”"),
        li("przycisk „Umów się”, który nie znika przy przewijaniu"),
        li("godziny otwarcia na dziś i link do mapy"),
        li("prawdziwe zdjęcie wnętrza albo zespołu zamiast zdjęcia ze stocka"),
        p("Reszta — historia salonu, marki kosmetyków, regulamin — jest jedno przewinięcie niżej."),

        h2("Cennik na stronie salonu fryzjerskiego: usługa, długość włosów i poziom fryzjera"),
        p("Najczęstsze pytanie w wiadomościach na Instagramie brzmi: „ile kosztuje koloryzacja na moje włosy?”. Dobry cennik odpowiada na nie, zanim padnie. Na stronie wygląda tak:"),
        li("usługi w grupach: strzyżenie, koloryzacja, rozjaśnianie, zabiegi regenerujące, upięcia, przedłużanie"),
        li("przy każdej usłudze trzy kolumny: włosy krótkie, średnie i długie"),
        li("osobne ceny dla poziomów — junior, stylista, master — jeśli w salonie się różnią"),
        li("czas wizyty obok ceny, żeby było jasne, że balejaż to pół dnia"),
        li("krótka uwaga, co podnosi cenę: gęste włosy, dodatkowa farba, korekta koloru — i przycisk konsultacji"),
        p("Cennik jest tekstem w panelu, a nie zdjęciem tablicy z recepcji. Po podwyżce zmieniasz liczby w jednym miejscu."),

        h2("Fryzjerzy na stronie salonu: profil, specjalizacja i rezerwacja do konkretnej osoby"),
        p("Klientki często idą za fryzjerką, nie za szyldem. Profil każdej osoby z zespołu zatrzymuje tę lojalność na stronie salonu: zdjęcie, staż, w czym jest najlepsza (blond, loki, krótkie cięcia, fade), dni pracy i przycisk rezerwacji, który w Booksy od razu wybiera tę osobę. Każdy fryzjer może mieć osobne konto w panelu, ograniczone do własnego profilu i galerii, więc nowe metamorfozy dodaje sam. Gdy ktoś odchodzi z salonu, jego podstrona przekierowuje na stronę zespołu, zamiast pokazywać błąd."),

        h2("Rezerwacja wizyty u fryzjera ze strony: Booksy, Versum albo Fresha"),
        p("Rezerwacja ma być jednym dotknięciem od cennika. Sposób zależy od systemu: link do profilu z wybraną usługą, przycisk albo widżet osadzony na stronie, ładowany dopiero po kliknięciu, żeby nie spowalniał telefonu. Przycisk „Umów się” jest przyklejony do dołu ekranu, a nad nim jedno zdanie o zadatku i odwoływaniu wizyt. Zadatek przez BLIK albo Przelewy24 obsługuje Twój system rezerwacji lub — jeśli go nie ma — prosta płatność na stronie."),

        h2("Galeria koloryzacji i metamorfoz na stronie salonu fryzjerskiego"),
        p("Na Instagramie metamorfozy giną w feedzie po tygodniu. Na stronie zostają, podzielone na usługi — balejaż, rudy, blond, siwe pasma, loki, cięcia męskie — i na fryzjerów. Klientka, która chce chłodny blond, widzi chłodne blondy i wie, kto je zrobił. Zdjęcia „przed i po” najlepiej robić w tym samym miejscu i świetle, a publikować za zgodą klientki. Panel sam przycina i kompresuje zdjęcia z telefonu, więc galeria z kilkudziesięcioma pracami otwiera się szybko także na słabym zasięgu."),

        h2("Strona dla barbershopu: wizyty bez zapisów, kolejka i krótki cennik"),
        p("Barbershop ma inny rytm niż salon damski: krótkie usługi, kilka pozycji w cenniku, stali klienci co trzy tygodnie i sporo osób wchodzących z ulicy. Strona barbershopu pokazuje na pierwszym ekranie, czy przyjmujesz bez zapisów i do której godziny, a jeśli system to umożliwia — aktualną kolejkę. Cennik mieści się na jednym ekranie: strzyżenie, fade, broda, golenie brzytwą, strzyżenie dziecięce, combo. Styl jest prosty i męski, bez ozdobników; każdy barber ma kilka zdjęć swoich prac i link do rezerwacji u siebie. Małemu barbershopowi zwykle wystarcza jedna szybka podstrona."),

        h2("Szkolenia fryzjerskie i kursy online na stronie salonu: przykład Landi Room"),
        p("Coraz więcej salonów zarabia na uczeniu innych. Landi Room, salon beauty z Warszawy, sprzedaje kurs online z nanoplastyki włosów. Zaprojektowałem i wykonałem jego stronę na Next.js z Sanity: płatność przez Stripe Checkout, po niej automatycznie wysyłany unikalny link do wideo, ważny 14 dni i bez możliwości pobrania. Już z pierwszej kampanii w Google Ads salon sprzedał ponad 100 kursów i nie odnotował żadnego nieuprawnionego udostępnienia nagrań."),
        p("Tak samo można sprzedawać szkolenie z koloryzacji dla fryzjerów, warsztat stylizacji dla klientek albo kosmetyki do pielęgnacji w domu z odbiorem w salonie. To część Twojej strony, a nie osobna platforma z abonamentem."),

        h2("Szablon czy strona na zamówienie dla salonu fryzjerskiego"),
        p("Gotowy szablon albo kreator wystarczy jednoosobowemu salonowi, który ma pełny grafik z polecenia i aktywny Instagram — jeśli tak jest u Ciebie, napiszę to w odpowiedzi. Strona na zamówienie opłaca się, gdy salon ma kilku fryzjerów z własnymi klientkami, cennik zależny od długości i poziomu, galerię, którą chcesz filtrować, albo szkolenia do sprzedania. Każda z tych rzeczy w szablonie to kolejna wtyczka, a efekt wygląda jak u wielu innych salonów. Strona na zamówienie jest Twoja i zostaje z Tobą także po zmianie systemu rezerwacji."),

        h2("Salon fryzjerski w Mapach Google: wizytówka, „fryzjer w pobliżu” i podstrony usług"),
        p(
          "Nowe klientki wpisują „fryzjer w pobliżu” albo usługę z nazwą dzielnicy i wybierają z mapy. Strona od pierwszego dnia ma te same dane co wizytówka Google — nazwę, adres, telefon, godziny — podstrony usług, na których najbardziej Ci zależy, i dane strukturalne salonu. Dalszą pracę nad widocznością — wizytówkę, opinie, frazy i linki — opisuję na stronie ",
          link("pozycjonowanie salonu kosmetycznego", "/pl/seo-salonu-kosmetycznego"),
          ", która obejmuje też salony fryzjerskie i barberów, a lokalne wyszukiwanie ogólnie — na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Strona salonu fryzjerskiego, którą ChatGPT i Google AI Overviews potrafią przeczytać"),
        p("Klientki pytają już ChatGPT: „dobry salon do kręconych włosów w Krakowie” albo „barber w Poznaniu czynny w niedzielę”. Asystent poleci tylko salon, o którym coś przeczyta. Dlatego usługi, specjalizacje fryzjerów, ceny, godziny i zasady wizyt są na stronie zwykłym tekstem wysyłanym z serwera, a nie obrazkiem, i powtórzone w danych strukturalnych zgodnych z wizytówką Google."),
        p(
          "Stała praca nad tym, by asystenci AI polecali Twój salon, to osobna usługa: ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Ile kosztuje strona internetowa dla salonu fryzjerskiego"),
        li("Prosta strona salonu lub barbershopu — strona główna, cennik, zespół, zasady wizyt, rezerwacja i kontakt albo jedna mocna podstrona dla barbera: 3000–6000 zł."),
        li("Pełna strona z profilami fryzjerów, galerią metamorfoz, cennikiem według długości i poziomu, integracją rezerwacji, szkoleniami lub sklepem i lokalnym SEO: od 8500 zł."),
        p(
          "Projekt graficzny jest w cenie. Salony z paznokciami, rzęsami i kosmetyką znajdą więcej na stronie ",
          link("strona salonu kosmetycznego", "/pl/tworzenie-stron-internetowych-dla-branzy-beauty/strona-salonu-kosmetycznego"),
          ". Mój sposób pracy nad stronami opisuje podstrona ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ", a pełny cennik usług znajdziesz w ",
          link("cenniku", "/pl/cennik"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strona internetowa dla salonu fryzjerskiego: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona internetowa dla salonu fryzjerskiego?", "Prosta strona salonu lub barbershopu kosztuje 3000–6000 zł, pełna strona z profilami fryzjerów, galerią, cennikiem według długości włosów i szkoleniami — od 8500 zł. Projekt graficzny wliczam w cenę; konkretną kwotę dostajesz, gdy zobaczę Twój cennik usług."],
          ["Mam Booksy i Instagram. Po co mi jeszcze strona?", "Booksy dobrze przyjmuje rezerwacje, a Instagram pokazuje prace. Strona dodaje to, czego tam brakuje: widoczność w Google po usługach, pełny cennik, profile fryzjerów pod marką salonu i sprzedaż szkoleń czy kosmetyków."],
          ["Czy rezerwacje nadal będą wpadać do Booksy?", "Tak. Każdy przycisk „Umów się” prowadzi do Twojego kalendarza w Booksy albo innym systemie, więc przypomnienia, zadatki i grafik zostają tam, gdzie są."],
          ["Czy fryzjerzy mogą sami dodawać metamorfozy?", "Tak. Każdy może mieć konto w panelu ograniczone do swojego profilu i galerii. Cennik zwykle zostaje w rękach właścicielki lub managerki."],
          ["Czy barbershopowi wystarczy jedna podstrona?", "Często tak: godziny, informacja o wizytach bez zapisów, krótki cennik, barberzy, link do rezerwacji i mapa mieszczą się na jednej szybkiej stronie. Kolejne podstrony dochodzą przy drugim lokalu."],
          ["Czy na stronie można sprzedawać kurs fryzjerski?", "Tak. Dla Landi Room zrobiłem stronę kursu nanoplastyki z płatnością przez Stripe i linkiem do wideo wysyłanym automatycznie po zakupie. Podobnie działa sprzedaż szkoleń stacjonarnych i voucherów."],
          ["Czy pracujesz z salonami spoza Warszawy?", "Tak, z salonami z całej Polski. Wszystko załatwiamy online: rozmowa wideo, uwagi bezpośrednio w projekcie, zdjęcia i cennik przez komunikator. Spotkanie na miejscu nie jest potrzebne, żeby strona powstała."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową dla salonu fryzjerskiego: co mi wysłać"),
        p(
          "Wyślij nazwę salonu, link do Instagrama i profilu w Booksy, aktualny cennik, listę fryzjerów lub barberów z ich specjalizacjami, zasady zadatków i odwoływania wizyt oraz informację, czy przyjmujesz bez zapisów. Jeśli prowadzisz szkolenia albo sprzedajesz kosmetyki, dopisz to. Odpowiem propozycją listy podstron i stałą ceną. Skorzystaj z ",
          link("formularza powyżej", "#quote"),
          " albo napisz na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
