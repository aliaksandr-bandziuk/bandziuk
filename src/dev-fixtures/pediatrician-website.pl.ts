// Landing page fixture: Strona internetowa dla pediatry (PL), group
// «pediatrician-website». Market version, not a translation of the EN page.
//
// Why (07.11.2026): EN «pediatrician website design» 90 + «pediatrician web
// design» 90. PL has no measured phrase; the page is made under the owner's
// rule that an industry with demand in one language gets all three.
//
// Legal framing from claude/medical-ad-claims.md, checked against sources:
//   art. 14 ust. 1 ustawy o działalności leczniczej — informacja o zakresie i
//     rodzajach świadczeń nie może mieć cech reklamy; adresatem jest i
//     podmiot leczniczy, i praktyka zawodowa;
//   uchwała NRL 29/11/VI — zamknięty wykaz tego, co wolno podać do publicznej
//     wiadomości; CENY wolno podać na własnej stronie praktyki;
//   art. 71 KEL (od 01.01.2025) — lekarz jest uprawniony do informowania i
//     ODPOWIADA za informację publikowaną w jego imieniu przez osoby trzecie,
//     czyli przez wykonawcę strony. To argument sprzedażowy, nie straszak.
//
// Cannibalisation: /pl/strona-internetowa-dla-lekarza already owns NFZ vs
// prywatnie, rejestracja online, RODO, dostępność, wersje językowe, ZnanyLekarz
// vs własna strona, proces i cena. None of it is repeated; this page spends
// its length on paediatrics.
//
// PL specifics used: PSO (obowiązkowe i zalecane), bilanse zdrowia,
// teleporada, wizyty domowe, zgoda rodzica na wizerunek dziecka.
//
// Owner's rules: żadnych obietnic leczenia; projekt w cenie; każda strona
// porusza wyszukiwanie AI; nigdy nie mówimy, że nie ma klientów z branży.
import { p, h2, li, link, k } from "./pt";

export const pediatricianWebsitePl = {
  lang: "pl",
  group: "pediatrician-website",
  slug: "strona-internetowa-dla-pediatry",
  title: "Strona internetowa dla pediatry",
  heading: "Strona internetowa dla pediatry i poradni dziecięcej: dla rodzica z dzieckiem na ręku",
  excerpt:
    "Strony dla pediatrów i poradni dziecięcych: pierwszy ekran, który odpowiada przestraszonemu rodzicowi w kilka sekund, podstrony według wieku dziecka, sekcja o szczepieniach i jasne zasady publikowania zdjęć dzieci. Informacja bez cech reklamy, projekt w cenie, od 8500 zł.",
  seo: {
    metaTitle: "Strona dla pediatry i poradni dziecięcej od 8500 zł",
    metaDescription:
      "Strona internetowa dla pediatry: pierwszy ekran dla rodzica, podstrony według wieku dziecka, szczepienia, bilanse, zgody na zdjęcia. Od 8500 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Pediatrzy i poradnie dziecięce", "Od 8500 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Dziś otwarte do 20:00", "Wizyty domowe", "Kalendarz szczepień", "Zadzwoń"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Strona poradni dziecięcej: struktura według wieku, lekarze, sekcja szczepień, projekt w cenie", price: 8500, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Landing page pod jedną usługę pediatryczną albo pakiet opieki rocznej", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Przebudowa strony poradni dziecięcej z zachowaniem pozycji", price: 4000, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co buduję",
      title: "Co obejmuje strona internetowa dla pediatry",
      items: [
        { _key: k("o"), iconName: "phone", title: "Pierwszy ekran dla rodzica", text: "Godziny dziś, telefon, co robić teraz" },
        { _key: k("o"), iconName: "users", title: "Podział według wieku dziecka", text: "Noworodek, niemowlę, przedszkolak, nastolatek" },
        { _key: k("o"), iconName: "shield-check", title: "Sekcja o szczepieniach", text: "PSO i Wasze stanowisko, raz i jasno" },
        { _key: k("o"), iconName: "calendar", title: "Bilanse i opieka roczna", text: "Co dokładnie obejmuje pakiet" },
        { _key: k("o"), iconName: "camera", title: "Zasady zdjęć dzieci", text: "Zgoda rodzica przed publikacją" },
        { _key: k("o"), iconName: "file-lock", title: "Informacja bez cech reklamy", text: "art. 14 ustawy i wykaz z uchwały NRL" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Kto otwiera stronę pediatry i w jakim stanie"),
        p("Projektuję i buduję strony dla pediatrów i poradni dziecięcych, a projekt graficzny jest częścią budowy, nie osobną fakturą. Brief jest tu nietypowy i warto powiedzieć go wprost: spora część odwiedzających trafia na stronę w nocy, jedną ręką, z płaczącym dzieckiem na drugiej, i jest przestraszona. Nie przegląda strony. Chce trzech rzeczy w pięć sekund: czy jesteście teraz otwarci, jaki jest numer telefonu i czy to może poczekać do rana."),
        p("Prawie każda strona pediatryczna przegrywa ten moment tak samo: na pierwszym ekranie zdjęcie uśmiechniętej rodziny i hasło o trosce, godziny trzy kliknięcia dalej w zakładce Kontakt, a numer telefonu wstawiony jako obrazek. Poprawka nic nie kosztuje projektu, a zmienia wynik: dzisiejsze godziny jako tekst, który zmienia się sam, numer dzwoniący po jednym dotknięciu i krótka informacja, co robić poza godzinami przyjęć."),

        h2("Podstrony według wieku dziecka, a nie według specjalizacji"),
        p("Strona przychodni jest zwykle ułożona według specjalizacji, bo tak ułożona jest przychodnia. Rodzice nie szukają w ten sposób. Szukają według wieku i tego, co widzą: żółtaczka u noworodka, szczepienie w drugim miesiącu, gorączka u rocznego dziecka w nocy, bilans sześciolatka, zaświadczenie do szkoły, badanie przed sezonem sportowym u nastolatka."),
        p("Dlatego struktura idzie za wiekiem dziecka, a w każdym wieku za dwoma–trzema pytaniami, które rodzice rzeczywiście przynoszą. To też ta część, która przyciąga ruch: podstrona „wiek plus sytuacja” odpowiada realnemu zapytaniu, a podstrona o nazwie Pediatria nie odpowiada żadnemu."),

        h2("Sekcja o szczepieniach: najczęściej czytana i najbardziej sporna"),
        p("Niezależnie od podejścia poradni to szczepienia czyta się na stronie pediatrycznej najdłużej, i to tam trafiają rodzice już z kimś pokłóceni. Dwie decyzje sprawiają, że sekcja działa. Po pierwsze, kalendarz podany jako informacja, za którą rodzic umie pójść: wiek, odstępy, co zrobić przy opóźnieniu, co jest obowiązkowe w PSO, a co zalecane. Po drugie, stanowisko poradni napisane raz, własnymi słowami, i podlinkowane z każdej powiązanej podstrony zamiast powtarzania sporu wszędzie."),
        p("Czego ta sekcja robić nie może: obiecywać efektu ani stawiać rozpoznania. To jednocześnie zasada zawodowa i praktyczna — rodzic, który czuje, że mu się coś sprzedaje, wychodzi, a podstrona z obietnicą jest pierwszą, którą przeczyta kontrola."),

        h2("Informacja bez cech reklamy: co wolno napisać na stronie pediatry"),
        p("Art. 14 ust. 1 ustawy o działalności leczniczej pozwala podawać do publicznej wiadomości informację o zakresie i rodzajach świadczeń, ale jej treść i forma nie mogą mieć cech reklamy — i dotyczy to zarówno podmiotu leczniczego, jak i praktyki jednego lekarza. Uchwała NRL 29/11/VI wylicza, co wolno podać, i wykaz jest zamknięty: tytuł, imię i nazwisko, miejsce, dni i godziny przyjęć, rodzaj praktyki, stopnie i specjalizacje, uprawnienia, telefon."),
        li("ceny wolno podać właśnie na własnej stronie praktyki — i tego nie daje żaden katalog lekarzy, co jest najmocniejszym argumentem za posiadaniem strony;"),
        li("od 1 stycznia 2025 art. 71 Kodeksu Etyki Lekarskiej wprost pozwala informować o oferowanych usługach i jednocześnie czyni lekarza odpowiedzialnym za informację publikowaną w jego imieniu **przez osoby trzecie** — czyli przez wykonawcę strony;"),
        li("praktycznie znaczy to tyle, że teksty piszemy w trybie informacyjnym, a ja pokazuję, które sformułowania mogą zostać uznane za reklamę, zanim je opublikujemy."),

        h2("Który lekarz zobaczy dziecko"),
        p("W pediatrii ciągłość opieki znaczy więcej niż gdzie indziej. Rodzic chce wiedzieć, jak nazywa się lekarz, który przyjmie dziecko, czy przy następnej wizycie będzie ten sam i co się dzieje, gdy tej osoby nie ma. Strona z sekcją Nasz zespół i sześcioma zdjęciami odpowiada na inne pytanie."),
        li("każdy lekarz ma własną podstronę z grafikiem, językami i wiekiem dzieci, które przyjmuje;"),
        li("rejestracja mówi, do kogo jest wizyta, a nie tylko na kiedy;"),
        li("jest napisane wprost, co się dzieje przy nieobecności lekarza, bo to jest obawa stojąca za pytaniem."),

        h2("Wizyty domowe, teleporada i godziny wieczorne"),
        p("Trzy praktyczne fakty decydują o większej liczbie zapytań niż jakakolwiek decyzja projektowa: czy przyjmujecie wieczorem i w weekend, czy lekarz przyjeżdża do domu i czy da się dostać teleporadę. Jeśli którykolwiek jest prawdziwy, należy do pierwszego ekranu i do własnej podstrony, razem z obszarem dojazdu i ceną. Jeśli żaden, napiszcie, co rodzic ma zrobić o drugiej w nocy — ta szczerość przynosi wizytę w dzień."),

        h2("Zdjęcia dzieci: zgoda przed projektem"),
        p("Stronę pediatryczną kusi wypełnić zdjęciami dzieci i właśnie tam poradnie wpadają w kłopoty. Każde rozpoznawalne dziecko wymaga udokumentowanej zgody rodzica, udzielonej na to konkretne użycie i możliwej do wycofania. Budowa to zakłada: układ działa na zdjęciach gabinetu, zespołu i sprzętu, a zdjęcia dzieci są dodatkiem, który da się wymienić albo usunąć bez przerysowywania podstrony."),

        h2("Ile kosztuje strona internetowa dla pediatry i ile trwa"),
        p(
          "Strona poradni od 8500 zł z projektem w cenie. Landing pod jedną usługę albo pakiet opieki 3000–6000 zł. Przebudowa z zachowaniem pozycji od 4000 zł. Landing dwa–trzy tygodnie, pełna strona cztery–sześć. Cenę i termin przesuwa liczba lekarzy z własnymi podstronami, liczba języków i to, jak szybko ktoś po Waszej stronie akceptuje treści medyczne. Liczby są w ",
          link("cenniku", "/pl/cennik"),
          ", a wersja dla całej przychodni to ",
          link("strona internetowa dla lekarza", "/pl/strona-internetowa-dla-lekarza"),
          ".",
        ),
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: strony, w których decyduje zaufanie i rejestracja",
      subtitle:
        "Dwujęzyczna strona praktyki psychoterapeutycznej w Mediolanie, strona konsultantki zbudowana wokół jednej specjalizacji, wielojęzyczna platforma nieruchomości z katalogiem i filtrami, strona agencji edukacyjnej, która urosła z jednego kraju do dziesięciu, i strona firmy remontowo-inwestycyjnej w premium.",
      picks: [
        "psychotherapist-website-milan",
        "consultant-website-design-retail-analytics",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "seo-case-study-education-agency",
        "renovation-and-investment-website-with-premium-design",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony dla Waszej poradni dziecięcej",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: co zbuduję, w jakich językach i ile to kosztuje.",
      contextLabel: "Nazwa poradni lub adres strony",
      contextPlaceholder: "Link albo nazwa",
      buttonText: "Wyślij i otrzymaj wycenę",
      note: "Albo napiszcie na WhatsApp — odpowiadam tak samo szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Jaka to praktyka?", options: ["Jeden pediatra", "Poradnia dziecięca", "Przychodnia z pediatrią", "Coś innego"] },
        { _key: k("z"), question: "Przyjmujecie poza godzinami?", options: ["Wieczory i weekendy", "Także wizyty domowe", "Tylko w dzień", "Jeszcze nie wiemy"] },
        { _key: k("z"), question: "Macie pakiety opieki rocznej?", options: ["Tak", "Nie", "Planujemy", "Nie wiem"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Strona pediatry, którą ChatGPT i przeglądy AI potrafią przeczytać (GEO, AEO)"),
        p("Rodzice coraz częściej pytają asystenta, zanim zapytają kogokolwiek: pediatra przyjmujący wieczorem, mówiący po ukraińsku albo po angielsku, przyjmujący noworodki. Asystent odpowiada z tekstu, który potrafi przeczytać. Praktyka, której godziny są obrazkiem, cennik PDF-em, a lekarze tylko zdjęciami, dla tego pytania nie istnieje — i asystent poleci poradnię, która to wszystko wypisała."),
        p(
          "Dlatego godziny, języki, wiek dzieci, zakres i ceny zostają tekstem, dane strukturalne zgadzają się z tym, co widać, a nazwa i adres są identyczne na stronie, w wizytówce i w katalogach. Doprowadzenie istniejącej strony do tego stanu to ",
          link("przygotowanie strony do wyszukiwania AI", "/pl/oferty/przygotowanie-strony-do-wyszukiwania-ai"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strona internetowa dla pediatry: częste pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona internetowa dla pediatry?", "Od 8500 zł z projektem w cenie, landing pod jedną usługę albo pakiet 3000–6000 zł, przebudowa z zachowaniem pozycji od 4000 zł. Cenę przesuwa liczba lekarzy z podstronami, liczba języków i tempo akceptacji treści medycznych."],
          ["Czy pediatra może mieć stronę z cenami?", "Tak. Uchwała NRL 29/11/VI wprost dopuszcza podawanie cen i sposobu płatności na własnej stronie praktyki — i tego nie daje żaden katalog lekarzy. Reszta informacji musi mieścić się w wykazie i nie mieć cech reklamy."],
          ["Czy strona nie narusza zakazu reklamy?", "Zakazu reklamy jako takiego nie ma; art. 14 ust. 1 ustawy o działalności leczniczej mówi, że informacja o świadczeniach nie może mieć cech reklamy. Od 2025 roku art. 71 KEL wprost pozwala informować o usługach i czyni lekarza odpowiedzialnym także za to, co publikuje w jego imieniu wykonawca strony — dlatego sformułowania ustalamy przed publikacją."],
          ["Co powinno być na pierwszym ekranie?", "Czy jesteście teraz otwarci, numer telefonu do dotknięcia i krótka informacja, co robić poza godzinami. Rodzic w nocy decyduje na podstawie tych trzech rzeczy."],
          ["Czy publikować kalendarz szczepień?", "To zwykle najdłużej czytana podstrona. Warto podać go jako informację: wiek, odstępy, co obowiązkowe w PSO, a co zalecane, oraz stanowisko poradni napisane raz własnymi słowami."],
          ["Czy możemy pokazywać zdjęcia dzieci?", "Tylko za udokumentowaną zgodą rodzica, udzieloną na to użycie i możliwą do wycofania. Układ strony jest budowany tak, żeby działał bez nich."],
          ["Robimy wizyty domowe. Gdzie to umieścić?", "Na pierwszym ekranie i na osobnej podstronie, z obszarem dojazdu i ceną. Razem z godzinami wieczornymi decyduje to o większej liczbie zapytań niż cokolwiek w projekcie graficznym."],
          ["Czy rodzice będą mogli zapisać się online?", "Tak, a rejestracja mówi, do którego lekarza jest wizyta, nie tylko na kiedy. W pediatrii nazwisko lekarza bywa powodem, dla którego wizyta w ogóle się odbywa."],
          ["Czy przebudowa nie zabierze nam ruchu?", "Nie, jeśli zrobić mapę adresów i przekierowania, a podstrony, które już przyprowadzają rodziców, zachowują swój tekst zamiast być przepisane pod nowy wygląd."],
          ["Czy strona będzie nasza?", "Tak: kod, domena, konto hostingowe, treści i wszystkie dostępy. Nic nie zostaje u mnie jako dźwignia."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Jak zamówić stronę dla poradni dziecięcej: co mi przysłać"),
        p("Napiszcie, ilu lekarzy ma mieć własne podstrony, czy przyjmujecie wieczorem albo w domu, czy macie pakiety opieki rocznej, jakimi językami mówią Wasze rodziny i kto po Waszej stronie akceptuje treści medyczne. Przyślijcie link do obecnej strony, jeśli jest. Odpowiem w ciągu jednego dnia roboczego."),
      ],
    },
  ],
};
