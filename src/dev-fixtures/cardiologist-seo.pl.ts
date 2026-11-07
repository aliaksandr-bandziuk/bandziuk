// Landing page fixture: pozycjonowanie strony kardiologa (PL), group
// «cardiologist-seo». New page, create-landing.cjs. SEO-type page.
//
// Why (07.11.2026). Measured in the 102-industry delta: en «seo for
// cardiologists» 70; the Polish version is built because every industry page
// is made in all three languages.
// See claude/industry-delta-2026-11-07.md.
//
// PL-specific sections the other two versions do not have: the NFZ queue
// against a private price, which is the query a Polish patient actually
// types; and information without the features of advertising —
// art. 14 ust. 1 ustawy o działalności leczniczej, uchwała NRL 29/11/VI
// (prices allowed in information on the practice's own site), art. 71 KEL
// (the doctor is responsible for what a contractor publishes on their
// behalf), art. 57 ust. 1 Prawa farmaceutycznego (no public advertising of
// prescription-only medicines).
//
// Owner's rules: the subject is the strona, never the firma; no promises of
// positions; audit 1000 zł, one-off 1000–3000 zł, ongoing 3500 zł/mo.
import { p, h2, h3, li, link, k } from "./pt";

export const cardiologistSeoPl = {
  lang: "pl",
  group: "cardiologist-seo",
  slug: "pozycjonowanie-strony-kardiologa",
  title: "Pozycjonowanie strony kardiologa",
  heading:
    "Pozycjonowanie strony kardiologa: zapytania o badania i terminy, a nie o objawy",
  excerpt:
    "Zajmuję się pozycjonowaniem stron kardiologów — w Google i w odpowiedziach AI, czyli SEO razem z GEO i AEO: podstrona na każde badanie, cena i termin tam, gdzie mieści się zapytanie, wizytówka jako lista badań i druga opinia na podstawie gotowych wyników. Audyt od 1000 zł.",
  seo: {
    metaTitle: "Pozycjonowanie strony kardiologa i widoczność w AI",
    metaDescription:
      "Pozycjonowanie strony kardiologa: podstrony echa serca, holtera i prób wysiłkowych z cenami, termin obok NFZ, druga opinia, AI. Audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Badania, ceny, wizytówka", "Audyt od 1000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Echo serca — 350 zł", "Holter, jutro", "Druga opinia online", "Zapisz się"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt strony kardiologa: podstrony badań, ceny, wizytówka, odpowiedzi AI", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace na stronie kardiologa: podstrony badań, struktura, dane strukturalne, wizytówka", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Prowadzenie pozycjonowania strony kardiologa razem z widocznością w AI", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co robię",
      title: "Co obejmuje pozycjonowanie strony kardiologa",
      items: [
        { _key: k("o"), iconName: "activity", title: "Podstrona na każde badanie", text: "Echo, holter, próba wysiłkowa, ABPM" },
        { _key: k("o"), iconName: "tag", title: "Cena i termin na podstronie", text: "Bo w tym mieści się zapytanie" },
        { _key: k("o"), iconName: "clock", title: "Termin obok kolejki NFZ", text: "Powód, dla którego pacjent płaci" },
        { _key: k("o"), iconName: "map-pin", title: "Wizytówka jako lista badań", text: "A nie jedno słowo „kardiologia”" },
        { _key: k("o"), iconName: "file-search", title: "Druga opinia na gotowych wynikach", text: "Usługa z własnym popytem" },
        { _key: k("o"), iconName: "badge-check", title: "Autor, rejestr, data sprawdzenia", text: "Po tym ocenia się podstrony medyczne" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Dlaczego strona kardiologa nie wygra zapytań o objawy i nie musi ich wygrywać"),
        p("Prawie każda strona kardiologa, którą mam obejrzeć, próbuje rankować na objawy: ból w klatce piersiowej, wysokie ciśnienie, kołatanie serca, duszność. Te zapytania należą do portali zdrowotnych i dużych sieci klinicznych z setkami sprawdzonych artykułów i jedna praktyka ich nie weźmie. Gorsza prawda jest inna: gdyby nawet wzięła, zmieniłoby to niewiele — ktoś, kto o północy wpisuje „ból w klatce”, szuka uspokojenia, nie wizyty za trzy tygodnie."),
        p("Zapytania, które przyprowadzają pacjentów, nie dotyczą choroby. Dotyczą tego, co pacjentowi właśnie kazano zrobić. Lekarz rodzinny mówi: proszę zrobić echo serca. Pacjent wychodzi z gabinetu, otwiera telefon i wpisuje nazwę badania, miasto i słowo „cena”. To zapytanie jest krótkie, komercyjne, niedoobsłużone i do wygrania — i właśnie pod nie prawie żadna strona kardiologa nie jest zbudowana."),
        p(
          "Jeśli szukasz ogólnego zestawu dla medycyny — podstron usług, profili lekarzy, opinii, agregatorów — to inna rzecz. Tu jest tylko to, co w kardiologii działa inaczej, i warstwa lokalna, którą opisuje ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Podstrony badań, na które pacjent został skierowany"),
        p("Każde badanie to własna podstrona, bo to własne zapytanie i własna decyzja. Podstrona, która zrzuca je do listy usług, nie konkuruje o nic."),
        h3("Podstrona echa serca nazywa rodzaj badania, osobę wykonującą i termin opisu"),
        p("Najczęściej szukane badanie w kardiologii i najłatwiej tracone na ogólnikach. Na podstronie nazwany jest rodzaj — echo w spoczynku, echo wysiłkowe, przezprzełykowe — kto wykonuje i na jakim aparacie, ile to trwa, czy opis jest tego samego dnia i ile kosztuje."),
        h3("Podstrony holtera i ABPM sprzedają się terminem, a nie opisem urządzenia"),
        p("Tu decyduje logistyka, nie medycyna: kiedy zwalnia się urządzenie, czy zakładacie je w dniu zgłoszenia, na ile godzin, czy można wysłać pocztą, jak przychodzi wynik. Podstrona, która odpowiada na te pięć rzeczy, wyprzedza podstronę wyjaśniającą, czym jest holter."),
        h3("Podstrony prób wysiłkowych i wskaźnika uwapnienia mówią, komu badanie służy"),
        p("Tutaj pacjent często szuka bez skierowania — z powodu historii w rodzinie albo ogólnej kontroli — więc podstrona mówi, komu badanie jest wskazane, czego nie obejmuje i co dalej z wynikiem."),

        h2("Cena i termin na podstronie, bo w tym właśnie mieści się zapytanie"),
        p("Kardiologia różni się tym, że cena i termin są samym pytaniem, a nie szczegółem na końcu. Podstrona z nazwą badania i bez liczby przegrywa z podstroną, na której stoi „echo serca, 350 zł, najbliższy termin w czwartek”, nawet jeśli druga praktyka jest mniej utytułowana. Jedna utrzymywana linia na badanie i jedno zdanie o terminie opisu są warte więcej niż dowolna ilość tekstu o podejściu gabinetu."),

        h2("Kolejka NFZ i cena prywatnie: zapytanie, które pacjent wpisuje naprawdę"),
        p("Pacjent, który płaci prywatnie za echo albo holtera, robi to prawie zawsze z jednego powodu: nie chce czekać. Nie trzeba o tym pisać ani słowa o systemie — wystarczy podać swój najbliższy wolny termin i to, w jakim czasie wydajecie opis. Pacjent sam zestawi to z tym, co usłyszał w poradni, i ta różnica jest całym argumentem. To jest sprzedaż, której na stronach kardiologów prawie nie ma."),

        h2("Pozycjonowanie lokalne kardiologa: wizytówka jako lista badań"),
        p("W wizytówce kardiologa stoi zwykle jedno słowo: kardiologia. To kategoria, a nie zapytanie. W wizytówce powinno stać każde badanie jako osobna usługa, z ceną tam, gdzie platforma na to pozwala — wtedy praktyka pojawia się na „holter w pobliżu”, a nie tylko na własną nazwę. Dokładne godziny, zdjęcia prawdziwych gabinetów i aparatów oraz odpowiedzi na opinie dobierają resztę."),

        h2("Druga opinia i konsultacja na podstawie gotowych wyników"),
        p("Duża część kardiologicznego poszukiwania to ludzie, którzy mają już wyniki, ale ich nie rozumieją albo nie dowierzają temu, co usłyszeli. Szukają drugiej opinii, często z innego kraju, i są gotowi zapłacić za wizytę, która polega na omówieniu tego, co już mają."),
        li("to usługa z własnym popytem, własną podstroną i bez przywiązania do miasta;"),
        li("na podstronie napisane jest, w jakich krajach konsultujesz i czego nie robisz bez badania pacjenta;"),
        li("wskazane jest, co przysłać wcześniej: opisy, zapisy, wypisy — i w jakiej formie;"),
        li("podana jest cena i czas trwania, bo to główne pytanie takiej konsultacji."),

        h2("Pozycjonowanie strony kardiologa technicznie: zapis, szybkość i dane strukturalne"),
        p("Trzy rzeczy, w kolejności tego, jak często są zepsute. Zapis, który działa na telefonie jedną ręką, bo właśnie tak pacjent czyta cenę. Szybkość na połączeniu mobilnym: podstrony badań otwiera się nie z domu. I dane strukturalne praktyki, lekarzy i usług, żeby nazwy badań i ceny dały się przeczytać jako dane, a nie jako element graficzny."),

        h2("Informacja bez cech reklamy na podstronach kardiologicznych: autor, rejestr, data sprawdzenia"),
        p("Art. 14 ust. 1 ustawy o działalności leczniczej pozwala podawać do wiadomości publicznej informacje o zakresie i rodzajach udzielanych świadczeń, ale treść i forma nie mogą mieć cech reklamy. Uchwała NRL 29/11/VI opisuje dopuszczalny zakres i wprost dopuszcza podanie cen na własnej stronie praktyki — co w kardiologii jest dobrą wiadomością, bo cena jest tym, czego pacjent szuka. Art. 71 Kodeksu Etyki Lekarskiej czyni lekarza odpowiedzialnym za to, co publikuje w jego imieniu wykonawca, a art. 57 ust. 1 Prawa farmaceutycznego zakazuje reklamy publicznej leków na receptę, co wyłącza cały gatunek tekstów „jak leczymy”."),
        p("Dlatego na każdej podstronie badania i schorzenia stoi imię lekarza, specjalizacja i numer prawa wykonywania zawodu oraz data ostatniego sprawdzenia tekstu — prawdziwa i zmieniająca się razem z tekstem. To nie ogranicza pozycjonowania, to jest jego strategia: w medycznym wyszukiwaniu przeżywają podstrony, które wyglądają na napisane przez nazwanego lekarza, a nie przez dział marketingu."),

        h2("Ile kosztuje pozycjonowanie strony kardiologa"),
        p(
          "Audyt to 1000 zł: mówi, jakich podstron badań nie ma, gdzie powinny stać ceny i terminy i co traci wizytówka. Prace jednorazowe to 1000–3000 zł, czyli zbudowanie podstron badań i struktury. Prowadzenie to 3500 zł miesięcznie. Stawki są w ",
          link("cenniku", "/pl/cennik"),
          ".",
        ),

        h2("Kiedy spodziewać się efektów i czego nie obiecuję"),
        p("Pierwszy ruch widać zwykle po około półtora miesiąca, wzrost w horyzoncie trzech–sześciu miesięcy. Pozycji nie obiecuję, a w kardiologii nie wierzyłbym nikomu, kto obiecuje: zapytania o objawy nie są dostępne za żaden budżet, a zapytania o badania ruszają się szybciej niż każda prognoza, bo zależą od tego, ile praktyk w twoim mieście w ogóle publikuje cenę."),
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: platformy wielojęzyczne i praca w branżach regulowanych",
      subtitle:
        "Wielojęzyczna platforma nieruchomości z widocznością zbudowaną bez kupowanych linków; strona agencji edukacyjnej, która urosła z jednego kraju do dziesięciu; strona firmy remontowo-inwestycyjnej w premium; wielojęzyczna strona usług studenckich; strona konsultantki zbudowana wokół jednej specjalizacji.",
      picks: [
        "build-and-optimize-a-multilingual-real-estate-platform",
        "seo-case-study-education-agency",
        "renovation-and-investment-website-with-premium-design",
        "full-multilingual-website-development-and-seo-for-student-services",
        "consultant-website-design-retail-analytics",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Audyt strony twojej praktyki kardiologicznej",
      subtitle: "Odpowiadam w jeden dzień roboczy: czego brakuje, co zrobiłbym pierwsze i ile to kosztuje.",
      contextLabel: "Nazwa praktyki albo adres strony",
      contextPlaceholder: "Link albo nazwa",
      buttonText: "Wyślij i poproś o wycenę audytu",
      note: "Albo napisz na WhatsApp — odpowiadam tak samo szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Co prowadzisz?", options: ["Jeden kardiolog", "Praktyka z kilkoma lekarzami", "Kardiologia w większej przychodni", "Centrum diagnostyczne"] },
        { _key: k("z"), question: "Czy ceny są opublikowane?", options: ["Tak, przy badaniach", "Tylko na zapytanie", "Jedna ogólna cena", "Zastanawiamy się"] },
        { _key: k("z"), question: "Dajecie drugą opinię zdalnie?", options: ["Tak", "Czasem", "Nie", "Chcielibyśmy"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Żeby praktykę kardiologiczną cytowały asystenty AI (GEO, AEO)"),
        p("Pytanie „gdzie w tym tygodniu założą holtera” zadaje się dziś asystentowi tak często jak wyszukiwarce, a asystent odpowiada z tekstu, który potrafi przeczytać. Praktyka, której badania nazwane są tylko na zdjęciu cennika, termin zna wyłącznie rejestracja, a numery prawa wykonywania zawodu nie stoją nigdzie tekstem, w tej odpowiedzi nie występuje — nie jest nisko, nie występuje."),
        p(
          "Cytowalną praktykę robi to samo, co robi ją użyteczną: każde badanie nazwane tekstem razem z ceną, termin w jednym utrzymywanym zdaniu, każdy lekarz ze specjalizacją i numerem, języki konsultacji jako dane. Sama praca to ",
          link("przygotowanie strony do wyszukiwania AI", "/pl/oferty/przygotowanie-strony-do-wyszukiwania-ai"),
          ", a jeśli chcesz tylko wiedzieć, gdzie jesteś dziś, to ",
          link("audyt widoczności w AI", "/pl/oferty/audyt-widocznosci-w-ai"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie strony kardiologa: częste pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje pozycjonowanie strony kardiologa?", "Audyt 1000 zł, prace jednorazowe 1000–3000 zł, prowadzenie 3500 zł miesięcznie. Rozsądnie zacząć od audytu: mówi, jakich podstron badań nie ma, gdzie powinny stać ceny i terminy i co traci wizytówka."],
          ["Dlaczego nie iść w zapytania o objawy?", "Bo trzymają je portale zdrowotne i sieci kliniczne, i jedna praktyka ich nie weźmie — a ten ruch słabo się konwertuje. Ktoś z zapytaniem „ból w klatce” szuka uspokojenia, ktoś z zapytaniem „echo serca cena Warszawa” szuka terminu."],
          ["Czy trzeba publikować ceny?", "W kardiologii cena i termin są samym zapytaniem, a uchwała NRL 29/11/VI wprost dopuszcza podanie cen w informacji na własnej stronie praktyki. Podstrona badania bez liczby przegrywa z tą, na której liczba stoi."],
          ["Od jakich podstron zacząć?", "Od osobnej podstrony na każde badanie, a pierwsze te, na które pacjent dostaje skierowanie: echo serca, holter i ABPM, próba wysiłkowa. Z ceną, czasem trwania, osobą wykonującą i terminem opisu."],
          ["Czy warto pisać o kolejce NFZ?", "Nie o kolejce, tylko o swoim najbliższym wolnym terminie i czasie wydania opisu. Pacjent sam zestawi to z tym, co usłyszał w poradni, i to zestawienie jest całym argumentem."],
          ["Co powinno stać w wizytówce?", "Każde badanie jako osobna usługa zamiast jednego słowa „kardiologia”, ceny tam, gdzie platforma pozwala, dokładne godziny, zdjęcia prawdziwych gabinetów i odpowiedzi na opinie. To właśnie czyni znajdywalnym zapytanie „holter w pobliżu”."],
          ["Czy strona może opisywać, jak leczycie?", "Może opisywać schorzenia, badania i podejścia, ale bez cech reklamy i bez nazw handlowych: art. 14 ust. 1 ustawy o działalności leczniczej wyłącza formę reklamową, a art. 57 ust. 1 Prawa farmaceutycznego zakazuje reklamy publicznej leków na receptę. Odpowiedzialność za treści publikowane w imieniu lekarza nakłada art. 71 KEL."],
          ["Czy warto zrobić podstronę drugiej opinii?", "Często to najbardziej opłacalna podstrona na stronie kardiologa: wyniki pacjent ma już w ręku, miasta taka usługa nie ma, a na podstronie trzeba napisać, w jakich krajach konsultujesz i czego nie robisz bez badania."],
          ["Kiedy będzie efekt?", "Pierwszy ruch po około półtora miesiąca, wzrost w horyzoncie trzech–sześciu miesięcy. Pozycji nie obiecuję, a w kardiologii taka obietnica byłaby warta jeszcze mniej niż zwykle."],
          ["Co jest potrzebne, żeby zacząć?", "Adres strony, obecny cennik, lista badań, które faktycznie wykonujecie, i na jakim sprzęcie, wasze terminy, imiona i numery prawa wykonywania zawodu lekarzy oraz języki konsultacji."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zacząć pozycjonowanie strony kardiologa: co mi przysłać"),
        p("Przyślij adres strony, listę badań i sprzęt, obecne ceny i terminy, czy dajecie drugą opinię zdalnie i w jakich krajach, imiona i numery prawa wykonywania zawodu lekarzy oraz języki konsultacji. Odpowiadam w jeden dzień roboczy: czego brakuje i co zrobiłbym pierwsze."),
      ],
    },
  ],
};
