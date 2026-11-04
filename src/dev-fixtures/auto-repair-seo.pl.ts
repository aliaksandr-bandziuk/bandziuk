// Landing page fixture: Pozycjonowanie strony warsztatu samochodowego (PL),
// group «auto-repair-seo». Rebuild of an existing old-template page under the
// same address /pl/seo-dla-warsztatu-samochodowego — replace-landing.cjs.
//
// The slug stays as it is: the owner decided on 30.10.2026 not to rename it to
// the «pozycjonowanie-strony-…» form, so no 301 is involved. The H1 is brought
// into that form, since the old one («SEO dla warsztatu samochodowego») was the
// only industry page breaking the owner's Polish naming rule.
//
// Semantic core: research/pseo/core.csv (stage 1) gives no measured volume for
// «pozycjonowanie strony warsztatu samochodowego», «strona internetowa dla
// warsztatu samochodowego» or «landing page dla warsztatu». The page is
// rewritten anyway because it already exists and was the thinnest commercial
// page on the site (503 words against a site median of 1847) — the cost is the
// writing, not a new URL.
//
// Разведение: the Warsaw page /pl/oferty/pozycjonowanie-strony-warsztatu-
// samochodowego-warszawa owns the city angle (urgency and the map, tyre season,
// drivers searching in more than one language) and is written on the new
// template. This page does not repeat those formulations, it links to them.
//
// NOT on this page: building the site
// (/pl/tworzenie-stron-dla-warsztatow-samochodowych).
import { p, h2, li, link, k } from "./pt";

export const autoRepairSeoPl = {
  lang: "pl",
  group: "auto-repair-seo",
  slug: "seo-dla-warsztatu-samochodowego",
  title: "Pozycjonowanie strony warsztatu samochodowego",
  heading: "Pozycjonowanie strony warsztatu samochodowego: zgłoszenia od kierowców, którym auto już stoi",
  excerpt:
    "Zajmuję się pozycjonowaniem stron warsztatów samochodowych i serwisów: podstrony pod konkretne naprawy, wizytówka Google, widełki cenowe zamiast „ceny po telefonie” oraz GEO i AEO — widoczność w odpowiedziach ChatGPT i AI Overviews. Pracuję sam: ten, kto robi audyt, sam wprowadza poprawki w kodzie.",
  seo: {
    metaTitle: "Pozycjonowanie warsztatu samochodowego — SEO, GEO i AI",
    metaDescription:
      "Pozycjonowanie strony warsztatu samochodowego: podstrony napraw, wizytówka Google, widełki cenowe oraz GEO i AEO dla odpowiedzi AI. Audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Podstrona pod każdą naprawę", "Audyt od 1000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Wymiana sprzęgła Octavia", "Naprawa skrzyni w pobliżu", "Diagnostyka na już", "Poleca ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO warsztatu samochodowego: strona, wizytówka Google i odpowiedzi AI", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO dla warsztatu: podstrony napraw, ceny, dane strukturalne", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie strony warsztatu samochodowego", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje pozycjonowanie strony warsztatu samochodowego",
      items: [
        { _key: k("o"), iconName: "layers", title: "Podstrona pod każdą naprawę", text: "Sprzęgło, skrzynia, diagnostyka, zawieszenie, blacharka" },
        { _key: k("o"), iconName: "map-pin", title: "Wizytówka Google, która trafia do map", text: "Kategoria, usługi, zdjęcia hali, godziny, telefon" },
        { _key: k("o"), iconName: "file-text", title: "Widełki cenowe zamiast „zadzwoń”", text: "Przedział i od czego zależy, na każdej podstronie" },
        { _key: k("o"), iconName: "search", title: "Frazy po naprawach i markach", text: "Prawdziwe dane wyszukiwań, a nie domysły" },
        { _key: k("o"), iconName: "sparkles", title: "GEO i AEO dla odpowiedzi AI", text: "ChatGPT, Perplexity i podsumowania AI w Google" },
        { _key: k("o"), iconName: "trending-up", title: "Raport w telefonach i zapisach", text: "Nie tylko pozycje, ale zgłoszenia" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Dlaczego zapytania do warsztatu wyglądają inaczej niż w innych usługach"),
        p("Klient warsztatu prawie nigdy nie wybiera spokojnie. Auto albo już stoi, albo zaczęło wydawać dźwięk, z którym strach jechać dalej. Dlatego zapytanie jest pilne i bardzo konkretne: nie „naprawa samochodu”, tylko marka plus podzespół plus objaw — „wymiana sprzęgła Octavia”, „stuka zawieszenie Focus”, „błąd P0171 co to znaczy”."),
        p("Wynikają z tego dwie rzeczy, które zmieniają całą pracę. Po pierwsze, nikt nie będzie czytał Waszej strony: otworzy dwie, trzy karty i zadzwoni tam, gdzie szybciej znalazł odpowiedź. Po drugie, jedna podstrona „usługi” nie odpowiada na żadne z tych zapytań, więc się w nich nie pojawia."),
        p("Jest też druga grupa, zupełnie niepodobna do pierwszej: przeglądy, przygotowanie auta do sprzedaży, diagnostyka przed zakupem. Ci szukają wcześniej, porównują i czytają. Jeden tekst napisany „uniwersalnie” zwykle traci obie grupy."),

        h2("Wizytówka Google decyduje wcześniej niż strona"),
        p("Przy pilnych zapytaniach większość osób nie dochodzi do zwykłych wyników: decyzja zapada w bloku map, na podstawie odległości, oceny i tego, czy jest otwarte. Strona w tym momencie nie jest witryną, tylko potwierdzeniem — wchodzi się na nią sprawdzić, czy robicie dokładnie to, i ile to mniej więcej kosztuje."),
        p("Dlatego pozycjonowanie lokalne zaczyna się tu od wizytówki, a nie od tekstów: właściwa kategoria główna, usługi z opisami, prawdziwe zdjęcia hali i podnośników, godziny i telefon, pod którym ktoś odbiera. I mówię wprost, czego nie da się zoptymalizować: odległości. Jeśli warsztat stoi za miastem, a konkurencja za rogiem, zapytanie „warsztat w pobliżu” wygra konkurencja i żadna praca tego nie zmieni. Za to zapytania o konkretną naprawę i o markę zależą od odległości znacznie mniej — i tam jest co wygrywać."),
        p(
          "Jeśli warsztat działa w Warszawie, lokalna część tej pracy wygląda inaczej i opisuję ją osobno: ",
          link("pozycjonowanie strony warsztatu samochodowego w Warszawie", "/pl/oferty/pozycjonowanie-strony-warsztatu-samochodowego-warszawa"),
          ".",
        ),

        h2("Osobna podstrona na każdą naprawę zamiast listy usług"),
        p("Główna praca SEO na stronie warsztatu to rozwinięcie listy usług w osobne podstrony. Wymiana sprzęgła, naprawa skrzyni automatycznej, diagnostyka komputerowa, geometria kół, zawieszenie, blacharka i lakiernictwo — to różne zapytania o różnej częstotliwości i z różnymi pytaniami, i każde potrzebuje swojej strony."),
        p("Na takiej podstronie kierowca ma znaleźć to, o co i tak zapyta przez telefon: ile to trwa, czy auto zostaje na noc, co wchodzi w zakres, od czego zależy cena, jaka jest gwarancja i co się stanie, jeśli usterka wróci. To jest treść podstrony — nie „fachowa naprawa na nowoczesnym sprzęcie”, tylko odpowiedzi."),
        p("Jeśli specjalizujecie się w markach, one też dostają własne podstrony: „naprawa skrzyni automatycznej” i „naprawa skrzyni automatycznej Passat” zachowują się inaczej, a ta druga grupa jest zwykle mniej konkurencyjna przy gorętszym kliencie."),

        h2("Cena naprawy to pierwsze pytanie, a większość stron warsztatów na nie nie odpowiada"),
        p("„Ceny po telefonie” to najdroższy wiersz na stronie warsztatu. Człowiek z zepsutym autem nie będzie dzwonił do pięciu miejsc, żeby poznać rząd wielkości; zadzwoni tam, gdzie zobaczył chociaż widełki."),
        p("Dlatego na podstronach napraw wstawiam przedział i wyjaśniam, od czego zależy: od zakresu prac, od tego, czy część jest oryginalna czy zamiennik, od stanu sąsiednich podzespołów, który widać dopiero po rozebraniu. Osobno warto napisać, czy diagnostyka jest płatna i czy wlicza się w koszt naprawy."),
        p("Cennik w PDF albo na grafice tego nie załatwia: ani wyszukiwarka, ani asystent AI nie czytają tekstu wewnątrz obrazka."),

        h2("Sezon opon: dwa krótkie okna w roku"),
        p("Wymiana i przechowywanie opon dają dwa skoki zapytań w roku i oba są krótkie. Problem w tym, że podstrona opublikowana w szczycie sezonu w tym sezonie już nie zdąży: wyszukiwarka potrzebuje czasu, żeby ją odwiedzić i ocenić."),
        p("Dlatego podstrony sezonowe przygotowuje się wcześniej i nie kasuje po sezonie — adres żyje cały rok i nabiera wagi przed kolejnym oknem. To samo dotyczy przechowywania opon: to w istocie abonament, który przyprowadza klienta wracającego potem na przeglądy."),
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: strony firm usługowych, których widoczność prowadziłem",
      subtitle:
        "Pierwszy przykład to firma z branży napraw samochodowych — co dokładnie zmieniało się na stronie i po co. Pozostałe to lokalne firmy usługowe, które potrzebują tej samej pracy: podstron pod konkretne usługi, mocnej wizytówki i raportu w telefonach, a nie w pozycjach.",
      picks: [
        "auto-repair-seo-and-ux-boost",
        "tyre-storage-landing-page-with-editable-seo",
        "felgilab-wordpress-rebuild",
        "renovation-and-investment-website-with-premium-design",
        "full-multilingual-website-development-and-seo-for-student-services",
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Po jakim czasie pozycjonowanie warsztatu daje efekty"),
        p("Pierwsze zmiany w widoczności widać zwykle po około półtora miesiąca — to nowe podstrony, które zaczynają zbierać wyświetlenia na frazach z długiego ogona. Wzrost, o który chodzi, buduje się trzy do sześciu miesięcy, i nie da się szybciej nie z powodu nakładu pracy, tylko dlatego, że wyszukiwarka potrzebuje czasu na odwiedzenie podstron i zebranie o nich danych."),
        p("Kto obiecuje telefony po dwóch tygodniach, obiecuje coś, nad czym nie ma kontroli."),

        h2("Dla kogo pozycjonowanie warsztatu ma sens, a dla kogo nie"),
        p("Pozycjonowanie strony warsztatu samochodowego ma sens:"),
        li("warsztatom ze stałym zakresem usług i własnym adresem;"),
        li("tym, którzy pokażą chociaż widełki cenowe;"),
        li("tym, u których ktoś odbiera telefon w godzinach pracy;"),
        li("tym, którzy mogą poczekać trzy do sześciu miesięcy."),
        p("A nie ma sensu:"),
        li("działalności jednorazowej lub tymczasowej;"),
        li("tym, u których „ceny tylko po telefonie” to zasada;"),
        li("tym, u których nie ma kto odbierać zgłoszeń;"),
        li("tym, którzy potrzebują klientów w tym tygodniu."),
        p("Ostatni wiersz nie jest formalnością. Jeśli hala ma się zapełnić w tym tygodniu, uczciwa odpowiedź brzmi: to reklama, a nie SEO, a reklam nie prowadzę."),
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena pozycjonowania strony warsztatu samochodowego",
      subtitle:
        "Odpowiadam w ciągu jednego dnia roboczego: co poprawiłbym najpierw na stronie i w wizytówce Google, i za jaką stałą cenę.",
      contextLabel: "Nazwa warsztatu lub adres strony",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Skąd teraz przychodzą klienci?", options: ["Z map i wyszukiwarki", "Z poleceń", "Z reklamy", "Nie wiem"] },
        { _key: k("z"), question: "Co jest teraz na stronie?", options: ["Jedna podstrona „usługi”", "Podstrony napraw", "Ceny są podane", "Strony nie ma"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Warsztat w odpowiedziach ChatGPT i AI Overviews: czym są GEO i AEO"),
        p("Kierowcy coraz częściej pytają asystenta wprost: „gdzie naprawić skrzynię automatyczną”, „ile kosztuje wymiana rozrządu”, „co oznacza błąd P0420”. ChatGPT, Perplexity i podsumowania AI w Google odpowiadają i wymieniają konkretne warsztaty — biorą je jednak nie z reklamy, tylko z tekstu, który potrafią przeczytać i streścić."),
        p("Stoją za tym dwie pokrewne prace. GEO (Generative Engine Optimization) to bycie wymienianym w odpowiedziach modeli generatywnych, i to wymienianym poprawnie. AEO (Answer Engine Optimization) to podstrona dająca bezpośrednią odpowiedź w pierwszych zdaniach, bo właśnie ją asystent cytuje. Klasyczne SEO nie znika: ono odpowiada za pozycję w Google, a GEO i AEO za to, czy ktoś Was wymieni, gdy klient zamiast szukać zapyta."),
        p("W praktyce: bezpośrednia odpowiedź na początku każdej sekcji, fakty zamiast przymiotników, dane strukturalne zgodne z treścią i dostępność tekstu bez wykonywania skryptów. Do tego pomiar na stałym zestawie pytań przed i po — inaczej o widoczności w AI da się tylko rozmawiać."),
        p(
          "Więcej o każdej z tych prac osobno: ",
          link("usługi AI SEO", "/pl/oferty/uslugi-ai-seo"),
          ", ",
          link("pozycjonowanie w ChatGPT", "/pl/oferty/pozycjonowanie-w-chatgpt"),
          ", ",
          link("audyt widoczności w AI", "/pl/oferty/audyt-widocznosci-w-ai"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie strony warsztatu samochodowego: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile trwa pozycjonowanie strony warsztatu samochodowego?", "Pierwsze zmiany po około półtora miesiąca, stabilny wzrost przez trzy do sześciu miesięcy. To właściwość wyszukiwarki, a nie tempa pracy."],
          ["Czym SEO różni się od GEO i AEO?", "SEO odpowiada za pozycję strony w Google. GEO — za to, żeby modele generatywne wymieniały Wasz warsztat. AEO — za to, żeby podstrona dawała bezpośrednią odpowiedź, którą asystent może zacytować. Różne prace, ta sama strona, wzajemnie się wzmacniają."],
          ["Jak pozycjonować warsztat w ChatGPT?", "Przez tekst, który asystent potrafi przeczytać i streścić: konkretne fakty o usługach, cenach i warunkach, bezpośrednie odpowiedzi na początku sekcji, dane strukturalne. Osobnej „reklamy w ChatGPT” nie ma — są źródła, z których bierze odpowiedź."],
          ["Czy SEO ma sens dla warsztatu z dwoma podnośnikami?", "Często bardziej niż dla dużego. Zapytania o konkretne naprawy i marki są mniej konkurencyjne, a małemu warsztatowi łatwiej je zająć, bo naprawdę się tym zajmuje."],
          ["Co zrobić, jeśli warsztat jest daleko od centrum?", "Nie walczyć o „w pobliżu” — tam wygrywa odległość. Wziąć zapytania o naprawy, podzespoły i marki, gdzie odległość waży mniej, oraz dzielnice, z których klienci faktycznie przyjeżdżają."],
          ["Czy trzeba podawać ceny, skoro zależą od stanu auta?", "Potrzebne są widełki i wyjaśnienie, od czego zależą. Brak ceny odsiewa więcej klientów niż cena wysoka."],
          ["Czy da się pozycjonować bez wizytówki Google?", "Przy pilnych zapytaniach lokalnych prawie nie: decyzja zapada w bloku map. Wizytówka i strona pracują w parze, osobno każda traci część zgłoszeń."],
          ["Czym to się różni od reklamy?", "Reklama daje zgłoszenia od razu i kończy się razem z budżetem. SEO buduje się miesiącami i pracuje dalej. Robię to drugie i nie prowadzę kampanii."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie strony warsztatu samochodowego: co mi wysłać"),
        p(
          "Wyślijcie adres strony, link do wizytówki Google, listę napraw, przy których chcecie więcej zgłoszeń, i miejscowość. Odpowiem, co poprawiłbym najpierw i za jaką stałą cenę. Strony jeszcze nie ma? Wtedy zaczyna się od czego innego: ",
          link("tworzenie strony dla warsztatu samochodowego", "/pl/tworzenie-stron-dla-warsztatow-samochodowych"),
          ".",
        ),
      ],
    },
  ],
};
