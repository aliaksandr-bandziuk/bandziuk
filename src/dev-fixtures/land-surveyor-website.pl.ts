// Landing page fixture: Strona internetowa dla geodety (PL),
// group «land-surveyor-website». NEW page — create-landing.cjs.
//
// Para dla land-surveyor-seo.pl (/pl/pozycjonowanie-strony-geodety). Tamta
// strona stoi na dokumencie, którego zażądał urząd albo bank. Ta stoi na
// czymś innym: serwis firmy geodezyjnej pracuje jak biuro przyjęć, nie jak
// wizytówka. Formularz pyta o numer działki, przykładowe operaty pokazują,
// co klient dostanie, termin i widełki stoją na widoku, a wykonawcy mają
// osobne wejście.
//
// Pomiar słownika: research/dataforseo/service-wording.md —
// «tworzenie stron internetowych» 4 400, «projektowanie stron» 880,
// «przebudowa strony» 50. Nisza: «geodeta» 14 800, «usługi geodezyjne» 1 900.
import { p, h2, h3, li, link, k } from "./pt";

export const landSurveyorWebsitePl = {
  lang: "pl",
  group: "land-surveyor-website",
  slug: "strona-internetowa-dla-geodety",
  title: "Strona internetowa dla geodety i firmy geodezyjnej",
  heading:
    "Strona internetowa dla geodety: serwis, który przyjmuje zapytanie z numerem działki w środku",
  excerpt:
    "Robię strony internetowe dla firm geodezyjnych. Formularz pyta o numer działki, termin i o to, kto zażądał opracowania. Przykładowe operaty zastępują zdjęcia statywu. Termin i widełki cenowe stoją tam, gdzie klient je przeczyta. Wykonawcy mają osobne wejście. Strona od 8500 zł, pojedynczy landing 3000–6000 zł.",
  seo: {
    metaTitle: "Strona dla firmy geodezyjnej: formularz i operaty",
    metaDescription:
      "Tworzenie stron internetowych dla firm geodezyjnych: formularz z numerem działki, przykładowe operaty, termin i cena na stronie, szybkość i gotowość pod AI.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Formularz z numerem działki", "Gotowa pod odpowiedzi AI", "Strona od 8500 zł"],
  heroPhonePoints: ["Numer działki w pierwszym polu", "Przykładowe operaty zamiast statywu", "Termin w dniach roboczych", "Wejście dla wykonawców"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Strona internetowa dla firmy geodezyjnej: struktura, podstrony opracowań, formularz, szybkość, dane strukturalne", price: 8500, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Landing page pod jedno opracowanie: mapa do celów projektowych, tyczenie albo inwentaryzacja", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Audyt istniejącej strony firmy geodezyjnej: struktura, zapytania, szybkość", price: 1000, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Strona internetowa dla firmy geodezyjnej: co dostajesz",
      items: [
        { _key: k("o"), iconName: "file-text", title: "Formularz z numerem działki", text: "Działka i obręb, termin, kto zażądał opracowania" },
        { _key: k("o"), iconName: "image", title: "Przykładowe operaty na stronie", text: "To, co klient dostanie, a nie zdjęcie statywu" },
        { _key: k("o"), iconName: "gauge", title: "Termin i widełki na widoku", text: "Dwa pytania, od których zaczyna się rozmowa" },
        { _key: k("o"), iconName: "target", title: "Osobne wejście dla wykonawców", text: "Tyczenie i obsługa budowy z harmonogramem" },
        { _key: k("o"), iconName: "zap", title: "Szybka na telefonie w terenie", text: "Jedna kreska zasięgu, dziewięć sekund to stracone zlecenie" },
        { _key: k("o"), iconName: "sparkles", title: "Czytelna dla ChatGPT i Perplexity", text: "Tekst i dane strukturalne zamiast PDF-ów" },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: serwisy, które przyjmują zapytania techniczne, a nie opowiadają o firmie",
      subtitle:
        "Wspólne z firmą geodezyjną: klient nie oceni pracy, zapytanie jest przypisane do adresu, a serwis musiał zebrać tyle, żeby dało się wycenić. Firma skanowania laserowego 3D i BIM z dwudziestodziewięciokrotnym wzrostem ruchu. Dostawca internetu sprawdzany adres po adresie. Platforma nieruchomości z tysiącami obiektów. Warsztat i serwis samochodowy z tym samym schematem zapytań.",
      picks: [
        "architecture-website-rebuild-and-seo-scan",
        "web-development-a-website-for-internet-prowider",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "felgilab-wordpress-rebuild",
        "auto-repair-seo-and-ux-boost",
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Tworzenie strony dla geodety zaczyna się od formularza, nie od strony głównej"),
        p("Buduję strony dla firm geodezyjnych. Praca zaczyna się od zapytania, które chcecie dostawać, i projektuję stronę od niego do tyłu: najpierw formularz, potem podstrony, które go karmią."),
        p("Większość serwisów geodezyjnych otwiera zdjęcie tachimetru i słowo „precyzja”. Potem formularz pyta o imię, e-mail i wiadomość."),
        p("Taki formularz gwarantuje jedną odpowiedź: „proszę podać adres działki”. Dzień przepada, zanim cokolwiek da się wycenić."),
        p("Zaczynam od drugiej strony. Formularz pyta o numer działki i obręb, o termin i o to, kto zażądał opracowania: projektant, urząd, bank, kierownik budowy. Te trzy odpowiedzi rozstrzygają, czy to wasze zlecenie i ile kosztuje."),
        li("numer działki i obręb w pierwszym polu, bo od tego zaczyna się każda wycena;"),
        li("termin, bo połowa tych zleceń kupowana jest wyłącznie za czas;"),
        li("kto zażądał dokumentu, bo to samo w sobie nazywa opracowanie;"),
        li("wgranie pliku, żeby klient dołączył pismo, którego nie rozumie;"),
        li("telefon jako pole opcjonalne — wymagane kosztuje was zapytania."),

        h2("Przykładowe operaty na stronie: co klient musi zobaczyć, zanim zadzwoni"),
        p("Wasz klient nigdy nie czytał operatu. Kazano mu go dostarczyć."),
        p("Podstrona z gotowym dokumentem odpowiada na pytanie, którego on nie umie zadać: co właściwie dostanę. Arkusz mapy. Pieczęć. Widok chmury punktów. Rysunek z wymiarami."),
        p("Nikt nie potrzebuje kolejnego statywu z banku zdjęć. Zdjęcia stockowe na stronie technicznej czytają się jako firma, która nie ma czego pokazać."),

        h2("Termin, widełki cenowe i zasięg: trzy fakty, które mają stać na górze strony"),
        p("Każda rozmowa zaczyna się od tego, ile kosztuje i na kiedy. Większość serwisów nie odpowiada na żadne z tych pytań, bo wszystko zależy od działki."),
        p("Rzeczywiście zależy. Widełki z warunkami i tak odpowiadają, a przy okazji filtrują: łowcy okazji przestają dzwonić, poważni przestają porównywać."),
        p("Zasięg też tam należy, jako lista powiatów, a nie promień na mapie. Klient z drugiego końca województwa ma w sekundę wiedzieć, czy czytać dalej."),

        h3("Co stoi na stronie, co z tego wynika i jakie zapytanie przynosi"),
      ],
    },
    {
      _type: "tableBlock",
      _key: k("b"),
      columns: ["Co stoi na stronie", "Co robi", "Jakie zapytanie przynosi"],
      rows: [
        { _type: "tableRow", _key: k("r"), cells: ["Formularz z numerem działki", "Zbiera działkę, termin i tego, kto zażądał opracowania", "Zapytanie, które wycenicie bez drugiego maila"] },
        { _type: "tableRow", _key: k("r"), cells: ["Przykładowe operaty", "Pokazują dokument, który klient dostanie", "Telefon od kogoś, kto już wie, co kupuje"] },
        { _type: "tableRow", _key: k("r"), cells: ["Termin i widełki cenowe", "Odpowiadają na dwa pierwsze pytania", "Mniej telefonów o najtaniej, więcej pasujących zleceń"] },
        { _type: "tableRow", _key: k("r"), cells: ["Wejście dla wykonawców", "Harmonogram, ponowne tyczenie, kto za nie płaci", "Zlecenia powtarzalne zamiast jednorazowych"] },
        { _type: "tableRow", _key: k("r"), cells: ["Powiaty wypisane z nazwy", "Mówią, gdzie ekipa naprawdę pracuje", "Zapytania z waszego terenu, nie z drugiego końca kraju"] },
        { _type: "tableRow", _key: k("r"), cells: ["Dane strukturalne i zwykły tekst", "Pozwalają czytać stronę wyszukiwarkom i asystentom", "Wzmianki w ChatGPT, Perplexity i AI Overviews"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Wejście dla wykonawców na stronie firmy geodezyjnej: zlecenia powtarzalne bez telefonów"),
        p("Właściciel działki kupuje pomiar raz. Wykonawca kupuje tyczenie na każdej budowie."),
        p("Dlatego serwis potrzebuje drugich drzwi. Nie podstrony-wizytówki, tylko roboczej. Dopasowanie do harmonogramu. Jak szybko wracacie po zmianie projektu. Kto płaci za ponowne tyczenie. Co robicie na budowie, która ruszyła bez was."),
        p("Kierownik budowy, który raz znajdzie te odpowiedzi, przestaje szukać. To różnica między zapytaniem a klientem."),

        h2("Szybkość strony i telefon: serwis otwierają w terenie, nie przy biurku"),
        p("Strony geodezyjne są ciężkie. Skany, przykładowe mapy, rysunki wyeksportowane prosto z CAD-a."),
        p("Otwierają je ludzie stojący na działce z jedną kreską zasięgu. Dziewięć sekund ładowania to zapytanie, którego już nie macie."),
        p("Naprawa to zwykła inżynieria: poprawne formaty i rozmiary obrazów, nic niewczytywanego poza ekranem, PDF-y linkowane zamiast osadzanych. To też najtańsza część wdrożenia."),

        h2("AI SEO wbudowane w stronę: ChatGPT, Perplexity, Gemini i AI Overviews"),
        p("Wasz klient pyta asystenta, jaka mapa jest mu potrzebna, zanim otworzy wyszukiwarkę. Obecność w odpowiedziach asystentów ma dwie nazwy: generative engine optimization (GEO) i answer engine optimization (AEO)."),
        p("Asystent czyta tekst. Zeskanowanego PDF-a nie przeczyta, a strony, która do niczego się nie zobowiązuje, nie zacytuje."),
        p("Dlatego wdrożenie od razu wynosi wyjaśnienia do tekstu, dodaje dane strukturalne firmy i usług, podaje termin i zasięg jako fakty i pilnuje, żeby nazwa, uprawnienia i telefon były wszędzie identyczne."),
        p(
          "Po starcie ciągnie to dalej ",
          link("pozycjonowanie strony geodety", "/pl/pozycjonowanie-strony-geodety"),
          " oraz ",
          link("przygotowanie strony do wyszukiwania AI", "/pl/oferty/przygotowanie-strony-do-wyszukiwania-ai"),
          ".",
        ),

        h2("WordPress czy Next.js dla strony firmy geodezyjnej: jak wybrać"),
        p("WordPress, jeśli zespół będzie edytował podstrony co tydzień i chce znajomego panelu. Next.js, jeśli serwis ma być szybki przy ciężkich rysunkach i urosnąć o kilkadziesiąt podstron opracowań i powiatów."),
        p("Robię jedno i drugie i powiem, co pasuje do waszego przypadku, zanim za cokolwiek zapłacicie. Zła odpowiedź w tym miejscu kosztuje później."),
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony dla firmy geodezyjnej",
      subtitle: "Prześlij obecną stronę albo opisz firmę. W ciągu jednego dnia roboczego odpiszę z zakresem i kwotą.",
      contextLabel: "Firma albo adres strony",
      contextPlaceholder: "Link albo nazwa",
      buttonText: "Wyślij i odbierz wycenę",
      note: "Możesz też napisać na WhatsAppie — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Co macie teraz?", options: ["Nie mamy strony", "Stara strona", "Jedna podstrona", "Strona, której nie mogę edytować"] },
        { _key: k("z"), question: "Które zlecenia są dla was najlepsze?", options: ["Mapy do celów projektowych", "Tyczenie i obsługa budowy", "Inwentaryzacje powykonawcze", "Granice i podziały"] },
        { _key: k("z"), question: "Kto będzie edytował stronę?", options: ["Ja", "Osoba z biura", "Nikt, proszę o obsługę", "Jeszcze nie wiem"] },
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strona internetowa dla geodety: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona internetowa dla firmy geodezyjnej?", "Strona od 8500 zł. Pojedynczy landing pod jedno opracowanie 3000–6000 zł. Pozycjonowanie po starcie 3500 zł miesięcznie. Na kwotę wpływa liczba podstron opracowań i powiatów oraz to, czy potrzebne jest wejście dla wykonawców."],
          ["Ile trwa wdrożenie?", "Cztery do sześciu tygodni dla pełnego serwisu, około dwóch dla pojedynczego landingu. Najwolniejszy etap nigdy nie jest techniczny. Najdłużej trwa wydobycie z firmy przykładowych operatów i prawdziwych terminów."],
          ["Mamy stronę. Przebudowa czy poprawki?", "Najpierw patrzę i mówię, co z tego wynika. Jeśli struktura jest sensowna, a zepsuty jest formularz i szybkość, poprawki wyjdą taniej i tak powiem. Jeśli wszystkie opracowania siedzą na jednej podstronie „Usługi”, to przebudowa."],
          ["Czy strona będzie widoczna w wyszukiwarce, czy to osobna praca?", "Wdrożenie obejmuje strukturę, szybkość, dane strukturalne i tekst czytelny dla wyszukiwarek i asystentów. Pozycje biorą się ze stałej pracy po starcie i rozdzielam te dwie rzeczy w wycenie, żeby było widać, za co płacicie."],
          ["Czy ChatGPT albo Perplexity będą nas wymieniać?", "Wymieniają firmy, których podstrony tłumaczą opracowanie zwykłym tekstem i podają konkretne liczby. Serwis z wyjaśnieniami w zeskanowanych PDF-ach jest dla nich niewidoczny. Tutaj jest to wbudowane od początku, nie dokładane później."],
          ["Czy możemy sami edytować stronę?", "Tak. Dostajecie panel, w którym podstrony, ceny i przykładowe dokumenty zmienia się beze mnie. Wolę, żebyście zmienili termin w minutę, niż pisali do mnie o tym maila."],
          ["Kto pisze teksty?", "Szkic ja, poprawki wy. To, co sprawia, że te podstrony działają, wie tylko firma: jak naprawdę pracuje wasz ośrodek, dlaczego zlecenie się przeciąga, czego nie podpisujecie."],
          ["Czego potrzebujecie od nas na start?", "Przykładowych opracowań, które wolno pokazać, listy powiatów, prawdziwego terminu w dniach roboczych i widełek cenowych, które jesteście gotowi opublikować."],
          ["Pracujecie z firmami spoza Polski?", "Tak. Praca jest zdalna, po polsku, angielsku albo rosyjsku, a większość tych projektów powstała dla klientów z innych krajów."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową dla firmy geodezyjnej: co przysłać"),
        p("Prześlij obecną stronę albo napisz, czym zajmuje się firma i gdzie. Wymień opracowania, których chcecie więcej, i powiaty, w których pracujecie."),
        p("W ciągu jednego dnia roboczego odpiszę, jaką strukturę bym zbudował, ile to kosztuje i ile trwa. Jeśli przebudowa się nie opłaca, powiem to zamiast wyceny."),
      ],
    },
  ],
};
