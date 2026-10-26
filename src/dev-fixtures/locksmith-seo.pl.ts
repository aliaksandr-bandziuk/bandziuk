// Landing page fixture: Pozycjonowanie strony ślusarza (PL), group
// «locksmith-seo». New page. Market version for Polish ślusarze and pogotowia
// zamkowe — one-van JDG, punkty dorabiania kluczy, small firms with a few
// mobile techs — not a translation of locksmith-seo.en.
// Semantic core: ref/home-services.md has no PL phrases for locksmiths; H1 and
// headings carry «pozycjonowanie strony ślusarza», «pozycjonowanie ślusarza»,
// «awaryjne otwieranie drzwi», «otwieranie samochodów», «pogotowie zamkowe
// 24h», «wizytówka Google ślusarza». PL PAA used: «Co jest lepsze:
// pozycjonowanie czy Google Ads?» (FAQ), «Ile kosztuje pozycjonowanie firmy?»
// (cost H2 + FAQ).
// Intent: ref/intent-check-home-services.md — EN «locksmith seo» vs «locksmith
// website design» 0 shared URLs → website gets one H2 here, no separate page.
// EN SERP dominated by one vendor → weak competition; PL SERP not checked.
// Angle (PL): fałszywe wizytówki «Ślusarz 24h [dzielnica]» z call center
// przekazującym zlecenia, wizytówka bez lokalu (obszar działania), punkt
// dorabiania kluczy vs dojazd do klienta, wkładki klasy A/B/C i drzwi RC,
// kodowanie kluczyków samochodowych na miejscu bez ASO, weryfikacja tożsamości
// przed otwarciem, frazy cenowe «ile kosztuje otwarcie drzwi», Oferteo / Fixly
// / OLX vs pilne zlecenia, Panorama Firm / pkt.pl, AI answers.
// NOT on this page: bramy garażowe (/pl/pozycjonowanie-firmy-bram-garazowych);
// wizytówka in depth (/pl/oferty/pozycjonowanie-lokalne — one link); building
// the site in depth (/pl/strona-internetowa-dla-malej-firmy — one link from
// the website H2); Google Ads (not offered).
// Owner’s rules: PL form «pozycjonowanie strony X»; every SEO page covers AI
// search (GEO, AEO); never say there are no clients from the visitor’s industry.
import { p, h2, h3, li, link, k } from "./pt";

export const locksmithSeoPl = {
  lang: "pl",
  group: "locksmith-seo",
  slug: "pozycjonowanie-strony-slusarza",
  title: "Pozycjonowanie strony ślusarza",
  heading: "Pozycjonowanie strony ślusarza i pogotowia zamkowego",
  excerpt:
    "Zajmuję się pozycjonowaniem stron ślusarzy i pogotowi zamkowych: podstrony awaryjnego otwierania drzwi i samochodów, wymiany zamków i kodowania kluczy, wizytówka Google bez lokalu, zgłaszanie fałszywych wizytówek i widoczność w odpowiedziach AI.",
  seo: {
    metaTitle: "SEO dla ślusarza: awaryjne otwieranie drzwi | Bandziuk",
    metaDescription:
      "Pozycjonowanie strony ślusarza: otwieranie drzwi i aut, wizytówka Google bez lokalu, fałszywe wizytówki konkurencji, opinie i AI. Audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Mapy Google, drzwi, auta", "Audyt od 1000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Ślusarz Mokotów 24h", "Zadzwoń teraz", "Cena przed dojazdem", "Kodowanie kluczyków"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO ślusarza: wizytówka Google, strona, konkurencja w Mapach, odpowiedzi AI", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO dla ślusarza: podstrony usług, porządek w wizytówce, zgłoszenia spamu, dane strukturalne", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie strony ślusarza", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje pozycjonowanie strony ślusarza",
      items: [
        { _key: k("o"), iconName: "map-pin", title: "Wizytówka Google bez fałszywego adresu", text: "Obszar działania, prawdziwa nazwa, gotowość do weryfikacji" },
        { _key: k("o"), iconName: "shield-check", title: "Zgłoszenia fałszywych wizytówek", text: "Spam w Twojej okolicy opisany i wysłany do Google" },
        { _key: k("o"), iconName: "layers", title: "Podstrona dla każdej usługi", text: "Drzwi, samochody, wkładki, sejfy, kodowanie kluczy" },
        { _key: k("o"), iconName: "file-text", title: "Cennik, który odpowiada na pytania", text: "„Ile kosztuje otwarcie drzwi” — w dzień i w nocy" },
        { _key: k("o"), iconName: "sparkles", title: "Widoczność w odpowiedziach AI", text: "ChatGPT, Perplexity i podsumowania AI w Google" },
        { _key: k("o"), iconName: "phone", title: "Raport w telefonach", text: "Z Map, ze strony i z AI, z nieodebranymi włącznie" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO strony ślusarza", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe pozycjonowanie strony ślusarza", value: "od 3500 zł / mies.", note: "podstrony, Mapy, spam, telefony", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: warszawskie firmy usługowe, które żyją z telefonów",
      subtitle:
        "Cztery z tych projektów to warszawskie firmy, do których klienci dzwonią po znalezieniu ich w Google i w Mapach: warsztat samochodowy (pozycjonowanie lokalne, wizytówka, podstrony usług, UX), pracownia renowacji felg Felgilab przebudowana na WordPressie z podstronami usług i cen, przechowalnia opon z jedną stroną, której teksty SEO właściciel poprawia sam, i firma remontowa. Piąty to strona psychoterapeuty z Mediolanu z podstronami dwóch miast, której nowe podstrony już pojawiają się w odpowiedziach ChatGPT. Ślusarz potrzebuje tego samego: podstrony na każdą usługę, wizytówki zgodnej ze stroną i numeru pod kciukiem.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
        "renovation-and-investment-website-with-premium-design",
        "psychotherapist-website-milan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena pozycjonowania strony ślusarza",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: co poprawiłbym najpierw w wizytówce i na stronie, i za jaką stałą cenę.",
      contextLabel: "Nazwa firmy lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Jakich zleceń chcesz więcej?", options: ["Awaryjne otwieranie drzwi", "Otwieranie aut i kodowanie kluczyków", "Wymiana zamków i wkładek", "Firmy i wspólnoty mieszkaniowe"] },
        { _key: k("z"), question: "Jak pracujesz?", options: ["Tylko z dojazdem do klienta", "Punkt dorabiania kluczy i dojazdy", "Kilku ślusarzy i samochodów", "Dopiero zaczynam"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Pozycjonowanie strony ślusarza to praca nad tym, żeby osoba, która zatrzasnęła drzwi albo zgubiła kluczyki do auta, znalazła w Google i w Mapach Twój numer, a nie numer call center, które sprzedaje zlecenie przypadkowemu wykonawcy. Robię to sam: audyt, wizytówkę, podstrony usług, poprawki na stronie i raport z telefonów. W tej branży niemal każde zlecenie zaczyna się od połączenia, więc to telefony są miarą wyniku, a nie pozycje fraz."),

        h2("Pozycjonowanie strony ślusarza: co obejmuje usługa"),
        p("Klient ślusarza rzadko porównuje oferty. Dzwoni do jednej z pierwszych firm, które zobaczy, więc praca toczy się w kilku miejscach naraz:"),
        li("wizytówka Google i wynik w Mapach dla fraz typu „ślusarz Bielany” czy „otwieranie drzwi Gdańsk”"),
        li("strona z osobną podstroną dla każdej usługi i miasta albo dzielnicy, w której naprawdę pracujesz"),
        li("dane firmy w katalogach takich jak Panorama Firm i pkt.pl, zgodne z wizytówką"),
        li("odpowiedzi ChatGPT i podsumowania AI w Google"),

        h2("Fałszywe wizytówki ślusarzy w Mapach Google: jak wygrać uczciwą firmą"),
        p("Wpisz „ślusarz 24h” w dużym mieście, a w Mapach zobaczysz wizytówki o nazwach złożonych z fraz i adresach w środku osiedla, gdzie nie ma żadnego zakładu. Często stoi za nimi jedna firma, która odbiera telefony i przekazuje zlecenia podwykonawcom. Klient słyszy przez telefon niską cenę, a przy drzwiach płaci znacznie więcej. Co działa:"),
        li("nazwa w wizytówce taka sama jak w CEIDG, bez dopisków w rodzaju „24h tanio”"),
        li("zgłaszanie fałszywych wizytówek przez „Zaproponuj zmianę” z dowodami: zdjęciem adresu ze Street View, informacją, że pod adresem nie działa żadna firma"),
        li("formularz skarg Google dla wizytówek, które wracają"),
        li("pilnowanie własnej wizytówki, bo zmiany proponowane przez innych potrafią podmienić numer telefonu albo godziny"),
        p("Usuwanie spamu trwa tygodniami i część wizytówek wraca. Każda usunięta przesuwa jednak w górę prawdziwe firmy, w tym Twoją."),

        h2("Wizytówka Google ślusarza bez lokalu: obszar działania zamiast adresu"),
        p("Większość ślusarzy pracuje z samochodu. Google dopuszcza to jako firmę działającą na określonym obszarze: podajesz dzielnice i miejscowości, do których dojeżdżasz, a adres ukrywasz. Adres musi jednak być prawdziwy — biuro wirtualne albo adres do doręczeń to prosta droga do zawieszenia wizytówki. Ślusarze bywają też proszeni o dodatkową weryfikację, na przykład nagranie wideo z samochodem, narzędziami i dokumentami firmy. Przygotuj je, zanim zmienisz nazwę, adres albo kategorię."),

        h2("Punkt dorabiania kluczy i dojazdy do klienta w pozycjonowaniu ślusarza"),
        p("Wielu ślusarzy ma też punkt: stanowisko w galerii handlowej, budkę przy targowisku albo zakład z witryną, gdzie dorabia klucze i przyjmuje zamki do naprawy. To zmienia ustawienia. Punkt pokazuje adres i godziny otwarcia, które ludzie sprawdzają przed wyjściem z domu; pogotowie zamkowe — obszar dojazdu i godziny, w których odbierasz telefon. Na stronie to dwie różne podstrony: „dorabianie kluczy” z adresem i mapą dla tych, którzy przyjdą, oraz „awaryjne otwieranie drzwi” z dzielnicami dla tych, którzy czekają na klatce schodowej."),

        h2("Podstrony usług ślusarza: otwieranie drzwi i samochodów, wymiana zamków, kodowanie kluczy"),
        h3("Awaryjne otwieranie drzwi i wymiana wkładek"),
        p("Zatrzaśnięte drzwi, zgubione klucze, zamek uszkodzony przy próbie włamania, wymiana wkładki po przeprowadzce albo po wyprowadzce najemcy. Podstrona mówi, kiedy otwierasz bez niszczenia zamka, a kiedy trzeba go wymienić, jakie wkładki montujesz — klasy A, B, C — i że przed otwarciem prosisz o dokument potwierdzający, że klient tam mieszka."),
        h3("Otwieranie samochodów i kodowanie kluczyków"),
        p("Kierowcy szukają po sytuacji i po marce: „kluczyki zatrzaśnięte w aucie”, „dorobienie kluczyka z immobilizerem”, „zgubiony kluczyk Skoda”. Podstrona wymienia marki i rodzaje kluczy, z którymi pracujesz — transpondery, piloty, kluczyki do systemów bezkluczykowych — i mówi, czy kodujesz na miejscu, bez lawety do ASO. Osobna podstrona marki ma sens tylko wtedy, gdy robisz ją często."),
        h3("Sejfy, drzwi antywłamaniowe i obsługa firm"),
        p("Otwieranie sejfów, zamki do drzwi w klasie RC, systemy master key dla biur i wspólnot mieszkaniowych. Zarządcy nieruchomości szukają rzadziej, ale zostają na lata."),

        h2("Pogotowie zamkowe 24h i frazy „ile kosztuje otwarcie drzwi”"),
        p("Google bierze pod uwagę godziny z wizytówki, gdy ktoś szuka ślusarza w nocy. Jeśli naprawdę odbierasz o trzeciej, zaznacz to; jeśli nie, nie wpisuj 24h, bo nieodebrane połączenia wracają jako złe opinie. Na podstronie pogotowia wypisz dzielnice i miejscowości z realnym czasem dojazdu do każdej oraz to, co klient ma przygotować: dowód osobisty, a przy aucie — dowód rejestracyjny."),
        p("Druga grupa fraz to pytania o cenę: „ile kosztuje otwarcie drzwi”, „cena otwarcia samochodu”, „wymiana wkładki koszt”. Ludzie wpisują je, bo boją się rachunku przy drzwiach. Cennik z widełkami albo zasadami liczenia ceny — w dzień, w nocy, w święta, dojazd poza miasto — odpowiada na to pytanie, odróżnia Cię od pośredników i daje ChatGPT konkretną informację z Twoją nazwą."),

        h2("Strona ślusarza, która zamienia wyszukiwanie w telefon"),
        p("Strony ślusarzy przegrywają zwykle w tych samych miejscach: ciężki slider, numer schowany w menu, jeden tekst skopiowany na podstrony kilkunastu miast. Wystarczy mniej:"),
        li("klikalny numer i godziny pracy na każdym ekranie, bez przewijania"),
        li("szybkie ładowanie na telefonie przy słabym zasięgu — główna treść w ciągu 2,5 sekundy"),
        li("nazwa firmy, NIP i zdjęcia Twojego samochodu zamiast zdjęć z banku"),
        li("krótki formularz albo WhatsApp do spraw, które mogą poczekać, z informacją o przetwarzaniu danych zgodnie z RODO"),
        p(
          "Jeśli obecnej strony nie da się naprawić, buduję nową — opis na stronie ",
          link("strona internetowa dla małej firmy", "/pl/strona-internetowa-dla-malej-firmy"),
          ".",
        ),
        p("Skoro prawie każde zlecenie to telefon, mierzę telefony. Na stronie działa numer śledzący, w wizytówce numer śledzący jako główny, a Twój stały numer jako dodatkowy, żeby dane firmy w katalogach się nie rozjechały. Raport pokazuje połączenia z Map, ze strony i z odpowiedzi AI, razem z nieodebranymi — w nocy nieodebrany telefon to stracone zlecenie."),

        h2("Opinie i zaufanie: jak klient odróżnia ślusarza od pośrednika"),
        p("Kto czytał o oszustwach na „pogotowiu zamkowym”, czyta opinie uważniej. Proś o opinię jeszcze tego samego dnia, SMS-em z linkiem, i poproś, żeby klient napisał, co zrobiłeś i gdzie — „wymiana wkładki po przeprowadzce, Ursus”. Odpowiadaj na każdą. Na stronie pokaż to, czego nie pokaże call center: dane z CEIDG, ubezpieczenie OC, zdjęcia z realizacji, paragon albo fakturę po każdym zleceniu i to, że sprawdzasz tożsamość przed otwarciem mieszkania."),

        h2("Oferteo, Fixly i OLX a pozycjonowanie strony ślusarza"),
        p("Portale ze zleceniami działają dla prac planowanych: wymiana zamków w całym budynku, montaż drzwi, master key dla biura. Przy zatrzaśniętych drzwiach nikt nie czeka na odpowiedzi z portalu — dzwoni do pierwszej firmy z Map. Dlatego pozycjonowanie ślusarza zaczyna się od pilnych zleceń, a portale mogą zostać jako dodatek do spokojniejszych tygodni."),

        h2("Pozycjonowanie ślusarza w ChatGPT i Google AI Overviews (GEO, AEO)"),
        p("Coraz więcej osób zaczyna od pytania do ChatGPT albo czyta podsumowanie AI nad wynikami Google: „skąd wiedzieć, że ślusarz jest uczciwy”, „czy da się dorobić kluczyk bez oryginału”, „czy po zgubieniu kluczy wystarczy wymienić wkładkę”. Asystenci odpowiadają na podstawie stron, które mogą przeczytać i porównać z innymi źródłami. GEO (generative engine optimization) i AEO (answer engine optimization) to w przypadku ślusarza:"),
        li("nazwa, obszar dojazdu, godziny i zasady liczenia ceny zapisane zwykłym tekstem"),
        li("odpowiedzi na pytania o zamki i kluczyki na Twoich podstronach"),
        li("dane strukturalne typu Locksmith połączone z wizytówką"),
        li("te same dane na stronie, w wizytówce i w katalogach"),
        p(
          "Przed pracą i po niej sprawdzam, jak asystenci opisują Twoją firmę. Więcej na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Ile kosztuje pozycjonowanie strony ślusarza"),
        li("Audyt SEO wizytówki, strony, konkurencji w Mapach i odpowiedzi AI: od 1000 zł, jednorazowo, z listą poprawek według wpływu."),
        li("Jednorazowe prace — podstrony usług, cennik, porządek w wizytówce, zgłoszenia spamu, dane strukturalne: od 1000 do 3000 zł."),
        li("Stałe pozycjonowanie strony ślusarza — nowe podstrony, Mapy i opinie, pilnowanie spamu, raporty z telefonów: od 3500 zł miesięcznie; w dużych miastach, gdzie Mapy są najbardziej zaśmiecone, od 5500 zł miesięcznie."),
        p(
          "Pracę nad Mapami w szczegółach opisuję na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ", moje podejście do stałej współpracy — na stronie ",
          link("strategia i optymalizacja SEO", "/pl/oferty/strategia-i-optymalizacja-seo"),
          ", a inne małe firmy usługowe znajdą swoją wersję na stronie ",
          link("pozycjonowanie strony małej firmy", "/pl/pozycjonowanie-strony-malej-firmy"),
          ". Wszystkie ceny są w ",
          link("cenniku", "/pl/cennik"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie strony ślusarza: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje pozycjonowanie firmy ślusarskiej?", "Audyt kosztuje od 1000 zł jednorazowo, pojedyncze prace od 1000 do 3000 zł, a stałe pozycjonowanie od 3500 zł miesięcznie, w dużych miastach od 5500 zł. Po krótkim opisie firmy i obszaru podaję stałą cenę."],
          ["Czy ślusarz bez lokalu może być widoczny w Mapach Google?", "Tak, jako firma działająca na określonym obszarze z ukrytym adresem. Adres musi być prawdziwy i przejść weryfikację; biura wirtualne kończą się zawieszeniem wizytówki."],
          ["Jak zgłosić fałszywą wizytówkę ślusarza?", "Przez „Zaproponuj zmianę” w Mapach, z dowodem, że pod adresem nie ma firmy, a przy wizytówkach, które wracają — przez formularz skarg Google. Trzeba się uzbroić w cierpliwość i sprawdzać okolicę co miesiąc."],
          ["Co jest lepsze: pozycjonowanie czy Google Ads?", "Reklama daje telefony od pierwszego dnia, ale za każde kliknięcie, a nocne frazy ślusarskie są drogie. Pozycjonowanie potrzebuje miesięcy, za to telefony z Map i strony nie kosztują za połączenie. Kampanie może dalej prowadzić osoba, która już się nimi zajmuje; moja część to SEO, które z czasem zmniejsza zależność od płatnych kliknięć."],
          ["Jak długo trwa pozycjonowanie strony ślusarza?", "Porządek w wizytówce i usunięcie spamu potrafią zmienić wynik w Mapach w kilka tygodni. Nowe podstrony usług zwykle potrzebują dwóch–czterech miesięcy, w dużych miastach dłużej."],
          ["Czy pracujesz ze ślusarzami spoza Warszawy?", "Tak, z całej Polski. Pozycjonowanie robię zdalnie: wizytówka, strona i dane wyszukiwań dla Twojego miasta i dzielnic."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie strony ślusarza: co mi wysłać"),
        p(
          "Wyślij nazwę firmy, adres strony i link do wizytówki w Mapach, usługi, przy których chcesz więcej zleceń — drzwi, samochody, wkładki, firmy — dzielnice i miejscowości, do których dojeżdżasz, informację, czy masz punkt dorabiania kluczy, i fałszywe wizytówki, które najbardziej Ci przeszkadzają. Odpowiem, co poprawiłbym najpierw i za jaką stałą cenę. Skorzystaj z ",
          link("formularza powyżej", "#quote"),
          " albo napisz na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
