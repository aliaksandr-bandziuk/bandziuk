// Landing page fixture: strona internetowa dla psychiatry (PL), group
// «psychiatrist-website». New page, create-landing.cjs.
//
// Why (07.11.2026). The owner-side demand was measured in English («web
// design for psychiatrists» 30, «psychiatrist website design» 30, 110 for the
// industry); the Polish version is built because every industry page is made
// in all three languages. See claude/industry-delta-2026-11-07.md.
//
// Cannibalisation check — the neighbour is /pl/strona-dla-psychologow-terapeutow,
// which already owns: a calm first screen for an anxious visitor, the path to
// a first session, privacy in forms, templates vs custom, specialties and
// fees, online sessions, migration with the blog, CMS guard rails. NONE of
// that is repeated here.
//
// What is specific to a psychiatric practice and carries this page:
// prescribing, and art. 57 ust. 1 Prawa farmaceutycznego, which forbids
// advertising prescription-only medicines to the public; a closed or nearly
// closed appointment book, which makes intake criteria and the current wait
// the most valuable text on the site; referring colleagues as a second
// audience; an emergency block; art. 14 ust. 1 ustawy o działalności
// leczniczej plus uchwała NRL 29/11/VI and art. 71 KEL on information
// without the features of advertising.
import { p, h2, li, link, k } from "./pt";

export const psychiatristWebsitePl = {
  lang: "pl",
  group: "psychiatrist-website",
  slug: "strona-internetowa-dla-psychiatry",
  title: "Strona internetowa dla psychiatry",
  heading:
    "Strona internetowa dla psychiatry: kryteria przyjęć, lista oczekujących i podstrona dla lekarzy kierujących",
  excerpt:
    "Strony dla gabinetów psychiatrycznych: kryteria przyjęć i czas oczekiwania napisane wprost, podstrona, z której korzystają lekarze kierujący, blok o nagłym kryzysie i treści utrzymane w granicach informacji bez cech reklamy. Projekt w cenie, od 8500 zł.",
  seo: {
    metaTitle: "Strona internetowa dla psychiatry i gabinetu od 8500 zł",
    metaDescription:
      "Strona dla psychiatry: kryteria przyjęć i czas oczekiwania, podstrona dla lekarzy kierujących, informacja bez cech reklamy. Od 8500 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Gabinety psychiatryczne", "Od 8500 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Kogo przyjmuję", "Czas oczekiwania: 3 tygodnie", "W nagłym kryzysie", "Zapytaj o termin"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Strona gabinetu psychiatrycznego: kryteria przyjęć, lekarze kierujący, blok kryzysowy, projekt w cenie", price: 8500, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Landing page pod jedną diagnostykę albo jedną usługę psychiatryczną", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Przebudowa strony gabinetu psychiatrycznego z zachowaniem pozycji", price: 4000, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co robię",
      title: "Co obejmuje wykonanie strony dla psychiatry",
      items: [
        { _key: k("o"), iconName: "list-checks", title: "Kryteria przyjęć napisane wprost", text: "Kogo przyjmujesz i kogo nie" },
        { _key: k("o"), iconName: "calendar", title: "Aktualny czas oczekiwania", text: "Jedna linia do edycji, nie telefon" },
        { _key: k("o"), iconName: "users", title: "Podstrona dla lekarzy kierujących", text: "Co przysłać i jak się skontaktować" },
        { _key: k("o"), iconName: "shield-check", title: "Blok o nagłym kryzysie", text: "Gdzie się zgłosić, gdy nie może czekać" },
        { _key: k("o"), iconName: "file-lock", title: "Treści w granicach prawa", text: "Zaburzenia i metody, nie nazwy leków" },
        { _key: k("o"), iconName: "globe", title: "Teleporada i e-recepta", text: "Kogo możesz prowadzić zdalnie" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Dlaczego strona psychiatry ma inne zadanie niż strona psychoterapeuty"),
        p("Projektuję i buduję strony dla gabinetów psychiatrycznych, a projekt graficzny jest w cenie wykonania, nie na osobnej fakturze. To osobna strona, a nie akapit w tekście o psychoterapii, z trzech powodów: psychiatra wypisuje recepty, ma zwykle zamkniętą albo prawie zamkniętą listę przyjęć i jest czytany nie tylko przez pacjentów, ale też przez kolegów, którzy kierują. Te trzy fakty zmieniają prawie każdą decyzję na stronie."),
        p(
          "Jeśli jesteś psychologiem albo psychoterapeutą, właściwa strona to ",
          link("strona dla psychologa i psychoterapeuty", "/pl/strona-dla-psychologow-terapeutow"),
          " — tam jest pierwszy ekran dla zalęknionego odbiorcy, droga do pierwszej sesji i prywatność w formularzach, i nic z tego nie powtarza się tutaj.",
        ),

        h2("Kryteria przyjęć i lista oczekujących należą na pierwszy ekran"),
        p("Większość gabinetów psychiatrycznych nie może przyjąć wszystkich, a strona, która to ukrywa, pochłania czas praktyki, zamiast go oszczędzać. Każde niepasujące zapytanie to jedna odpowiedź do napisania, a każda osoba, która czeka trzy tygodnie na odmowę, miała złe doświadczenie z twoim nazwiskiem w tle."),
        li("kogo przyjmujesz: wiek, zakres zaburzeń, czy prowadzisz leczenie, czy tylko diagnostykę, czy pracujesz równolegle z psychoterapeutą;"),
        li("kogo nie przyjmujesz, napisane życzliwie i konkretnie, z jednym zdaniem o tym, gdzie te osoby powinny szukać dalej;"),
        li("aktualny czas oczekiwania jako jedna linia, którą rejestracja zmienia w dziesięć sekund — najbardziej użyteczne zdanie na całej stronie;"),
        li("czy lista jest dziś w ogóle otwarta, bo to jest pytanie, z którym ktoś wchodzi."),

        h2("Podstrona napisana dla lekarzy kierujących, nie dla pacjenta"),
        p("Duża część pacjentów gabinetu psychiatrycznego przychodzi przez innych specjalistów: lekarzy rodzinnych, psychoterapeutów, pediatrów, medycynę pracy. Oni potrzebują z tej samej strony czegoś innego i szukają tego szybko, między wizytami: co przyjmujesz, co powinno znaleźć się w skierowaniu albo w liście, jak traktujesz przypadki pilne, numer, który nie jest ogólną rejestracją, i czy odpisujesz kierującemu po wizycie."),
        p("Jedna podstrona odpowiada na to wszystko i zwykle jest najtańsza do zrobienia i najbardziej opłacalna w utrzymaniu."),

        h2("Co strona psychiatry może napisać o lekach"),
        p("Leczenie farmakologiczne wyróżnia gabinet, a jednocześnie jest obszarem, w którym strona musi być ostrożna. Art. 57 ust. 1 Prawa farmaceutycznego zakazuje reklamy publicznej leków wydawanych na receptę, co w praktyce oznacza, że strona opisuje zaburzenia, diagnostykę i podejście do leczenia, nie podając nazw handlowych i nie obiecując, co lek zrobi."),
        p("To ograniczenie jest łatwiejsze w życiu, niż brzmi, i zwykle poprawia tekst: pacjent, który szuka, nie szuka nazwy leku, tylko kogoś, kto potraktuje jego sytuację poważnie i wyjaśni, jak wygląda pierwsza wizyta."),

        h2("Informacja o gabinecie bez cech reklamy"),
        p("Art. 14 ust. 1 ustawy o działalności leczniczej pozwala podawać do wiadomości publicznej informacje o zakresie i rodzajach udzielanych świadczeń, ale treść i forma nie mogą mieć cech reklamy. Uchwała NRL 29/11/VI opisuje dopuszczalny zakres takiej informacji i wprost dopuszcza podanie cen na własnej stronie praktyki, a art. 71 Kodeksu Etyki Lekarskiej czyni lekarza odpowiedzialnym za to, co publikuje w jego imieniu osoba działająca na jego zlecenie — czyli także wykonawca strony."),
        p("Dlatego na stronie nie ma słów o najlepszym specjaliście i skuteczności terapii, a jest zakres świadczeń, kwalifikacje, cennik, godziny i warunki. W psychiatrii ta forma działa lepiej niż marketing, bo pacjent szuka pewności, a nie entuzjazmu."),

        h2("Blok o nagłym kryzysie, który prowadzi do realnej pomocy"),
        p("Część osób trafia na stronę psychiatry w kryzysie, nocą, z wyszukiwania, które nie dotyczyło twojego gabinetu. Strona jest im winna krótki, spokojny i stale widoczny blok: co zrobić, gdy sprawa nie może czekać, numer alarmowy 112, aktualne numery całodobowych linii wsparcia i wyraźne zdanie, że gabinet nie prowadzi pomocy doraźnej poza godzinami pracy. To jeden komponent i jego miejsce jest przy nagłówku, nie w stopce."),

        h2("Teleporada, e-recepta i granice leczenia zdalnego"),
        p("Teleporady otworzyły gabinety na pacjentów z całego kraju i z zagranicy, a prawo za tym nie poszło. Pacjent z innego państwa może zapisać się na wideokonsultację, której formalnie nie da się domknąć receptą, i praktyka dowiaduje się o tym po fakcie. Rozwiązanie jest na stronie: napisane wprost, kogo prowadzisz zdalnie, w jakich krajach, i formularz, który pyta o to przed zajęciem terminu, nie po."),

        h2("Pierwsza wizyta opisana, zanim ktokolwiek zapyta"),
        p("Pierwsza wizyta u psychiatry trwa dłużej, kosztuje więcej i budzi większy lęk niż zwykła wizyta lekarska, a to właśnie lęk przed nieznanym wstrzymuje zapis. Podstrona, która mówi, ile wizyta trwa, co się na niej dzieje, co zabrać, czy może przyjść ktoś bliski, ile kosztuje i co jest potem, przynosi więcej zapisów niż każde zapewnienie o podejściu gabinetu."),

        h2("Ile kosztuje strona dla psychiatry i ile trwa jej wykonanie"),
        p(
          "Strona gabinetu to od 8500 zł z projektem w cenie. Landing page pod jedną diagnostykę albo jedną usługę to 3000–6000 zł. Przebudowa z zachowaniem pozycji od 4000 zł. Landing page zajmuje dwa–trzy tygodnie, pełna strona cztery–sześć. Liczba lekarzy z własnymi podstronami, liczba języków i tempo akceptacji treści klinicznych ruszają i cenę, i termin. Stawki są w ",
          link("cenniku", "/pl/cennik"),
          ".",
        ),
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: strony, w których decyduje zaufanie i pierwszy kontakt",
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
      title: "Wycena strony dla twojego gabinetu psychiatrycznego",
      subtitle: "Odpowiadam w jeden dzień roboczy: co bym zrobił, w jakich językach i ile to kosztuje.",
      contextLabel: "Nazwa gabinetu albo adres strony",
      contextPlaceholder: "Link albo nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam tak samo szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Jaki to gabinet?", options: ["Jeden psychiatra", "Gabinet z kilkoma lekarzami", "Psychiatria w większej przychodni", "Inaczej"] },
        { _key: k("z"), question: "Czy lista przyjęć jest otwarta?", options: ["Otwarta", "Lista oczekujących", "Zamknięta, tylko diagnostyka", "Bywa różnie"] },
        { _key: k("z"), question: "Czy pacjenci przychodzą ze skierowań od kolegów?", options: ["Tak, duża część", "Czasem", "Nie", "Chcielibyśmy"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Strona gabinetu psychiatrycznego czytelna dla asystentów AI (GEO, AEO)"),
        p("Pacjenci i lekarze kierujący pytają dziś najpierw asystenta: psychiatra, który przyjmuje młodzież, mówi w danym języku, ma otwartą listę. Asystent odpowiada z tekstu, który potrafi przeczytać, a gabinet, którego kryteria siedzą w akapicie opisowym, czas oczekiwania zna tylko rejestracja, a cennik leży w PDF, w tej odpowiedzi nie pojawia się wcale."),
        p(
          "Cytowalny gabinet wygląda tak samo jak gabinet wygodny dla człowieka: kryteria jako lista, wiek i języki jako tekst, cennik na stronie, czas oczekiwania w jednym aktualizowanym zdaniu. Doprowadzenie istniejącej strony do tego stanu to ",
          link("przygotowanie strony do wyszukiwania AI", "/pl/oferty/przygotowanie-strony-do-wyszukiwania-ai"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strona internetowa dla psychiatry: częste pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona dla psychiatry?", "Od 8500 zł z projektem w cenie, 3000–6000 zł za landing page pod jedną diagnostykę albo usługę, od 4000 zł za przebudowę z zachowaniem pozycji. Liczba lekarzy, liczba języków i tempo akceptacji treści klinicznych ruszają kwotę."],
          ["Czym to się różni od strony dla psychoterapeuty?", "Trzema rzeczami, które ma tylko gabinet psychiatryczny: leczeniem farmakologicznym, które ogranicza treść strony; zamkniętą albo prawie zamkniętą listą przyjęć, przez co kryteria i czas oczekiwania są najważniejszym tekstem na stronie; i lekarzami kierującymi, którzy potrzebują własnej podstrony. Resztę pokrywa strona dla psychologa."],
          ["Czy publikować czas oczekiwania?", "Tak, jako jedną linię, którą rejestracja zmienia w kilka sekund. To najbardziej użyteczne zdanie na stronie gabinetu psychiatrycznego: zatrzymuje niepasujące zapytania, ustawia oczekiwania i oszczędza zespołowi ten sam telefon wiele razy dziennie."],
          ["Czy strona może pisać o lekach, które przepisujemy?", "Może opisywać zaburzenia, diagnostykę i podejście do leczenia, ale art. 57 ust. 1 Prawa farmaceutycznego zakazuje reklamy publicznej leków na receptę, więc nazwy handlowe i obietnice efektu zostają poza stroną."],
          ["Czy wolno nam podać ceny?", "Tak. Uchwała NRL 29/11/VI wprost dopuszcza podanie cen w informacji na własnej stronie praktyki, a dla pacjenta psychiatrycznego cena pierwszej wizyty jest jedną z pierwszych rzeczy, których szuka."],
          ["Co z osobami, które trafiają na stronę w kryzysie?", "Strona ma krótki, spokojny blok widoczny na każdej podstronie: co zrobić, gdy sprawa nie może czekać, numer alarmowy 112, aktualne numery linii wsparcia i wyraźne zdanie, że gabinet nie prowadzi pomocy doraźnej poza godzinami pracy."],
          ["Prowadzimy teleporady dla pacjentów z zagranicy. Czy to zmienia stronę?", "Tak. Strona pisze wprost, kogo prowadzisz zdalnie i w jakich krajach, a formularz pyta o to przed zajęciem terminu, nie po — bo o granicach leczenia zdalnego najgorzej dowiedzieć się na wizycie."],
          ["Czy pacjent będzie mógł zapisać się online?", "Jeśli tak pracuje gabinet. Wiele gabinetów psychiatrycznych woli formularz zgłoszenia, który zespół weryfikuje wobec kryteriów przyjęć, niż otwarty kalendarz, i stronę robię pod ten wariant, który naprawdę chcesz."],
          ["Czy da się przebudować stronę bez utraty ruchu z wyszukiwania?", "Da się. Każdy istniejący adres zostaje spisany, każdy zmieniony przekierowany, a podstrony, które już przyprowadzają pacjentów, zachowują tekst zamiast być przepisane pod nowy wygląd."],
          ["Do kogo należy strona?", "Do ciebie: kod, domena, konto hostingowe, treści i wszystkie dostępy. Nic nie zostaje u mnie jako dźwignia."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamówienie strony dla gabinetu psychiatrycznego: co mi przysłać"),
        p("Napisz, ilu lekarzy potrzebuje własnych podstron, czy lista przyjęć jest otwarta, czy jest lista oczekujących, jakie są twoje kryteria przyjęć, czy kierują do ciebie koledzy, w jakich językach mówią pacjenci i gdzie wolno ci leczyć zdalnie. Dołącz adres obecnej strony, jeśli jest. Odpowiadam w jeden dzień roboczy, co bym zrobił i ile to kosztuje."),
      ],
    },
  ],
};
