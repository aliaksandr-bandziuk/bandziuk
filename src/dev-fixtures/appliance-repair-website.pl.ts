// Landing page fixture: website for an appliance repair company (PL),
// group «appliance-repair-website». Same backbone as EN: the site is a dispatch
// desk, not a brochure. Owner-side demand in Polish is zero (measured
// 19.11.2026), the page runs on the owner's own questions and on assistants.
//
// PL-specific section, not in EN: the way out of paying per lead to Fixly,
// Oferteo and OLX — the one argument that lands with a Polish serwis AGD.
// Geography per the owner's rule: Warszawa and smaller towns, linking to the
// city pages instead of competing with them.
import { p, h2, h3, li, link, k } from "./pt";

export const applianceRepairWebsitePl = {
  lang: "pl",
  group: "appliance-repair-website",
  slug: "strona-internetowa-dla-serwisu-agd",
  title: "Strona internetowa dla serwisu AGD",
  heading:
    "Tworzenie strony dla serwisu AGD: strona, która przyjmuje zgłoszenie i mówi serwisantowi, jaką część zabrać",
  excerpt:
    "Buduję strony dla serwisów AGD. Klient stoi przy cieknącej pralce i ma wolną jedną rękę. Strona ma przyjąć zgłoszenie w dwie minuty i przekazać wam model, usterkę i adres, żeby serwisant przyjechał z właściwą częścią. Strona od 8500 zł, audyt istniejącej 1000 zł.",
  seo: {
    metaTitle: "Strona dla serwisu AGD: zgłoszenia, dojazd, AI",
    metaDescription:
      "Strona internetowa dla serwisu AGD: formularz zgłoszenia z modelem i usterką, koszt dojazdu wprost, szybkość na telefonie i gotowość na wyszukiwanie AI.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Zgłoszenie w dwie minuty", "Widoczność w ChatGPT i AI", "Strona od 8500 zł"],
  heroPhonePoints: ["Zdjęcie tabliczki znamionowej", "Obszar dojazdu po miastach", "Terminy na dziś", "Przycisk, który dzwoni"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Strona internetowa dla serwisu AGD: ścieżka zgłoszenia, podstrony urządzeń i marek, obszar dojazdu", price: 8500, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Landing page pod jedno urządzenie albo jedno miasto", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Audyt istniejącej strony serwisu AGD: zgłoszenia, szybkość, telefon", price: 1000, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Zakres pracy",
      title: "Tworzenie strony dla serwisu AGD: z czego składa się praca",
      items: [
        { _key: k("o"), iconName: "file-text", title: "Formularz pytający o cztery rzeczy", text: "Urządzenie, usterka, tabliczka znamionowa, adres" },
        { _key: k("o"), iconName: "clock", title: "Koszt dojazdu i diagnozy wprost", text: "Liczba, której szuka przed telefonem" },
        { _key: k("o"), iconName: "map-pin", title: "Obszar dojazdu jako lista miast", text: "A nie okrąg na mapie, którego nikt nie czyta" },
        { _key: k("o"), iconName: "sparkles", title: "Gotowość na wyszukiwanie AI od pierwszego dnia", text: "Dane strukturalne, czytelny tekst, realne liczby" },
        { _key: k("o"), iconName: "layers", title: "Podstrony urządzeń i marek w strukturze", text: "Żeby pozycjonowanie miało gdzie wylądować" },
        { _key: k("o"), iconName: "target", title: "Szybka na telefonie w kuchni", text: "Poniżej dwóch sekund, jeden kciuk, jedna ręka" },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: firmy usługowe, których strona ma przyjąć zlecenie, a nie je opisać",
      subtitle:
        "Co łączy te projekty z serwisem AGD: klient decyduje w kilka minut, zgłoszenie musi przyjść kompletne, a wzrost wziął się ze struktury i treści, nie z kupionych linków. Serwis samochodowy z tym samym schematem „dzwonię teraz”. Warsztat renowacji felg w Warszawie. Dostawca internetu rozliczany adres po adresie. Studio urody sprzedające jedną usługę online. Firma skanowania 3D, w której ruch z wyszukiwarki wzrósł dwudziestodziewięciokrotnie.",
      picks: [
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "web-development-a-website-for-internet-prowider",
        "e-commerce-landing-page-with-secured-video-access",
        "architecture-website-rebuild-and-seo-scan",
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Strona serwisu AGD to pulpit zgłoszeń, a nie broszura"),
        p("Buduję strony dla serwisów AGD. Praca zaczyna się od jednej rzeczy, którą muszę od was usłyszeć: co serwisant musi wiedzieć, zanim załaduje auto."),
        p("Wyobraźcie sobie człowieka, który za chwilę zostanie waszym klientem. Pralka stanęła w połowie prania, w bębnie woda, na podłodze ręcznik. Ma wolną jedną rękę i telefon, który trzyma nad tym bałaganem."),
        p("On nie czyta o waszym dwudziestoletnim doświadczeniu. Chce komuś oddać ten problem dzisiaj i odda go temu, kto w ciągu dwóch minut najbardziej mu to ułatwi."),
        p("Strona ma więc dokładnie jedno zadanie: przyjąć zgłoszenie, i to kompletne:"),
        li("jakie urządzenie i co dokładnie robi;"),
        li("model, najlepiej jako zdjęcie tabliczki znamionowej;"),
        li("adres i to, czy ktoś będzie po południu w domu;"),
        li("koszt, na który zgadza się przed wyjazdem serwisanta;"),
        li("i potwierdzenie, które powstrzyma go przed dzwonieniem do dwóch konkurentów."),

        h2("Formularz zgłoszenia na stronie serwisu AGD: cztery pola i nic więcej"),
        p("Większość stron serwisowych ma formularz kontaktowy zaprojektowany dla kancelarii: imię, e-mail, temat, wiadomość. Efektem są zgłoszenia o treści „pralka nie działa, proszę o kontakt”, a potem telefon, żeby dowiedzieć się wszystkiego, co ma znaczenie."),
        p("Cztery pola to zmieniają. Urządzenie z listy. Usterka z pięciu, które realnie widzicie. Zdjęcie tabliczki znamionowej, które zajmuje mu dziesięć sekund i oszczędza wam pusty dojazd. Adres z preferowanym terminem."),
        p("E-mail jest opcjonalny, imię może poczekać. Każde pole spoza tej czwórki kosztuje was zgłoszenia, a strata jest niewidoczna: on po prostu dzwoni pod następny numer."),

        h3("Zdjęcie tabliczki znamionowej: jedno pole, które oszczędza drugi dojazd"),
        p("Na tabliczce jest dokładny model i numer seryjny. Z nim wiecie, czy część jest w aucie, w magazynie, czy dwa tygodnie u dostawcy."),
        p("Bez niego pierwszy dojazd to diagnoza, drugi to naprawa, a dzień mieści o połowę mniej zleceń. Formularz proszący o jedno zdjęcie zamienia dwa dojazdy w jeden, a klient nawet nie zauważa, że zrobił wam przysługę."),

        h2("Koszt dojazdu i diagnozy na stronie serwisu AGD: gdzie go napisać"),
        p("Ukrywanie kosztu wydaje się bezpieczniejsze. W praktyce daje najgorszą możliwą rozmowę: klient zamawia, serwisant przyjeżdża, a pierwsze zdanie w drzwiach to kwota, której nikt się nie spodziewał."),
        p("Napiszcie to na stronie: ile kosztuje dojazd, ile diagnoza, czy odlicza się od naprawy i co się dzieje, jeśli klient zrezygnuje."),
        p("Ten akapit robi dwie rzeczy. Usuwa kłótnię w drzwiach i po cichu odsiewa ludzi liczących, że ktoś za darmo obejrzy piętnastoletnią suszarkę."),

        h2("Własna strona zamiast płacenia za kontakt w Fixly, Oferteo i OLX"),
        p("To jest ta część, która w Polsce przekonuje najszybciej, i której nie ma w wersji angielskiej tego tekstu."),
        p("Portal bierze pieniądze za sam kontakt, a potem wysyła to samo zgłoszenie do kilku serwisów naraz. Płacicie za prawo do licytacji, w której wygrywa najtańszy, i robicie to ponownie przy każdym zleceniu."),
        p("Strona kosztuje raz. Zgłoszenie z własnej strony przychodzi bez konkurenta w tle, z modelem i zdjęciem tabliczki, i można na nim trzymać własną stawkę, a nie tę wymuszoną przez licytację."),
        p("Nie namawiam, żeby porzucić portale z dnia na dzień — przez pierwsze miesiące to one trzymają kalendarz. Sens jest w tym, żeby ich udział spadał, zamiast rosnąć z roku na rok."),

        h3("Obszar dojazdu na stronie serwisu AGD: lista miast zamiast okręgu na mapie"),
        p("Każda strona serwisu AGD ma mapę z okręgiem. Okręgu nikt nie czyta."),
        p("Wypiszcie miejscowości i dzielnice, do których realnie jeździcie, zaznaczając te z dopłatą. Człowiek sprawdzający, czy przyjedziecie do jego gminy, chce zobaczyć jej nazwę — i chce ją zobaczyć w tekście, bo tak samo czyta ją wyszukiwarka i asystent."),

        h2("Strona serwisu AGD w Warszawie i w mniejszych miastach"),
        p("W Warszawie konkurencja jest największa, ale i zleceń najwięcej, a klient prawie zawsze dopisuje dzielnicę albo „dziś”. Podstrona miejska ma nieść czas dojazdu, godziny i to, czy ktoś przyjedzie jeszcze dzisiaj."),
        p("W mniejszych miastach wystarczy jedna porządna podstrona miasta i uczciwie wypisane okoliczne miejscowości, bo konkurencja ma tam zwykle samą wizytówkę."),
        p(
          "Samą pracę nad miastem, bez branży, opisuję osobno: ",
          link("pozycjonowanie stron w Warszawie", "/pl/oferty/pozycjonowanie-stron-warszawa"),
          " i ",
          link("tworzenie stron internetowych w Warszawie", "/pl/tworzenie-stron-internetowych-warszawa"),
          ".",
        ),

        h2("Kto buduje strony dla serwisów AGD i o co takiego wykonawcę zapytać"),
        p("Większość tych stron robi ogólna agencja, która nigdy nie widziała, jak pracuje dyspozytor. Wychodzi coś, co wygląda profesjonalnie i nie przyjmuje zgłoszeń."),
        p("Trzy pytania pokazują, z kim rozmawiacie. Ile pól będzie miał formularz zgłoszenia i dlaczego. Gdzie pojawi się koszt dojazdu. Co się dzieje ze stroną, gdy klient trzyma pęknięty telefon w ciemnej kuchni przy jednej kresce zasięgu."),
        p("Jeśli odpowiedzi są o designie, kupujecie broszurę. W tej branży broszura jest wariantem droższym, bo jej koszt na jedno zgłoszenie wychodzi nieskończony."),

        h3("Podstrony urządzeń i marek, które przydadzą się przy pozycjonowaniu"),
        p("Strona zbudowana bez nich wymaga przebudowy w dniu, w którym zaczniecie pozycjonowanie: nie ma gdzie umieścić „naprawy zmywarek” ani podstrony marki."),
        p(
          "Dlatego wchodzą od razu jako struktura, nawet jeśli pierwszego dnia napiszemy cztery z nich. Jak wygląda ta druga strona pracy, opisuję na stronie o ",
          link("pozycjonowaniu strony serwisu AGD", "/pl/pozycjonowanie-strony-serwisu-agd"),
          ".",
        ),

        h2("Wymagania techniczne strony serwisu AGD: szybkość, jeden kciuk, numer, który dzwoni"),
        p("Tę stronę otwiera się prawie wyłącznie na telefonie, często pękniętym, w kuchni, na transmisji komórkowej, przez człowieka, który jest zdenerwowany."),
        p("To wyznacza zasady. Poniżej dwóch sekund do otwarcia. Wszystko w zasięgu jednego kciuka. Numer telefonu jako przycisk, który dzwoni, a nie tekst do skopiowania. Formularz nad linią zgięcia na podstronach urządzeń, a nie po czterech ekranach zdjęć."),
        p("Formularz musi też przetrwać słabe łącze: jeśli po cichu gubi zdjęcie tabliczki przy jednej kresce, jest to najdroższy błąd tej branży i prawie nikt go nie testuje."),

        h2("Strona serwisu AGD a wyszukiwanie AI: ChatGPT, Perplexity, Gemini i AI Overviews"),
        p("„Czy opłaca się naprawiać dziesięcioletnią pralkę” i „ile kosztuje dojazd serwisanta AGD” pytają asystenta, zanim ktokolwiek wybierze firmę."),
        p("Asystent odpowiada z czytelnego tekstu i podaje firmy, które na stronie zobowiązały się do liczb: koszt dojazdu, koszt diagnozy, gwarancja na naprawę, obsługiwane miejscowości."),
        p("Strona-broszura nie ma czego zacytować. Strona-pulpit jest pełna faktów nadających się do cytowania i właśnie dlatego zrobienie jej porządnie płaci dwa razy."),

        h3("GEO, AEO i dane strukturalne"),
        p("GEO i AEO to ta sama praca z dwóch stron: być wymienionym w wygenerowanej odpowiedzi, nie tylko na liście linków. Stoją za tym zwyczajne rzeczy: dane strukturalne, czytelny tekst i spójne dane firmy."),
        p(
          "Na nowej stronie nie kosztuje to nic dodatkowo — robi się przy budowie. Na istniejącej to ",
          link("przygotowanie strony do wyszukiwania AI", "/pl/oferty/przygotowanie-strony-do-wyszukiwania-ai"),
          ".",
        ),

        h2("Ile kosztuje strona internetowa dla serwisu AGD"),
        p("Pełna strona od 8500 zł: ścieżka zgłoszenia, struktura urządzeń i marek, obszar dojazdu, podstrony kosztów, szybkość i dane strukturalne. Pojedynczy landing page pod jedno urządzenie albo jedno miasto to 3000–6000 zł."),
        p("Audyt strony, którą już macie, kosztuje 1000 zł i odpowiada na jedno pytanie: przebudowa czy trzy poprawki."),
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Strona internetowa dla waszego serwisu AGD",
      subtitle: "Przyślijcie to, co macie teraz, a ja odpowiadam w jeden dzień roboczy: co zbuduję i ile to kosztuje.",
      contextLabel: "Firma lub adres strony",
      contextPlaceholder: "Link albo nazwa",
      buttonText: "Wyślij i zamów wycenę",
      note: "Albo napiszcie na WhatsApp — odpowiadam tak samo szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Co macie teraz?", options: ["Nic", "Starą stronę", "Jedną podstronę", "Stronę, której nie da się edytować"] },
        { _key: k("z"), question: "Skąd przychodzą dziś zlecenia?", options: ["Z telefonu", "Z formularza", "Z portali typu Fixly", "Z polecenia"] },
        { _key: k("z"), question: "Naprawiacie u klienta czy w warsztacie?", options: ["U klienta", "W warsztacie", "I tak, i tak", "Zależy od sprzętu"] },
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strona internetowa dla serwisu AGD: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona dla serwisu AGD?", "Od 8500 zł za pełną stronę ze ścieżką zgłoszenia, strukturą urządzeń i marek, obszarem dojazdu i podstronami kosztów. Pojedynczy landing page 3000–6000 zł. Audyt istniejącej strony 1000 zł."],
          ["Ile trwa budowa?", "Trzy do pięciu tygodni na pełną stronę, mniej na landing page. Najwolniejszy nigdy nie jest kod — najwolniejsze jest wyciągnięcie od was realnych liczb: kosztów dojazdu, zasad gwarancji, miejscowości, do których naprawdę jeździcie."],
          ["Czy musimy podać koszt dojazdu i diagnozy?", "Mocno to odradzam ukrywać. Ukryty przenosi kłótnię na próg, gdzie kosztuje zlecenie i opinię. Podany odsiewa ludzi, którzy liczyli na darmowe obejrzenie piętnastoletniej suszarki."],
          ["Mamy zlecenia z Fixly i Oferteo. Po co nam strona?", "Portal bierze pieniądze za sam kontakt i wysyła to samo zgłoszenie do kilku serwisów, więc wygrywa najtańszy. Strona kosztuje raz, a zgłoszenie z niej przychodzi bez licytacji. Nie chodzi o to, żeby rzucić portale z dnia na dzień, tylko żeby ich udział spadał."],
          ["Dlaczego tylko cztery pola w formularzu?", "Bo każde dodatkowe pole traci zgłoszenia niewidocznie: klient nie narzeka, tylko dzwoni do konkurencji. Urządzenie, usterka, zdjęcie tabliczki i adres to cztery rzeczy, które pozwalają przyjechać z właściwą częścią."],
          ["Czy da się pracować na stronie, którą już mamy?", "Często tak i jest to tańsze. Audyt odpowiada na to uczciwie: trzy poprawki albo przebudowa. Powiem, które z nich, i nie mam interesu w sprzedawaniu przebudowy, która nie jest potrzebna."],
          ["Czy nowa strona będzie się pozycjonować?", "Strona powstaje tak, żeby pozycjonowanie było możliwe: struktura urządzeń i marek, czysty tekst, dane strukturalne, szybkość. Samo pozycjonowanie to praca opisana na stronie o pozycjonowaniu serwisu AGD."],
          ["Robicie strony po polsku, angielsku i rosyjsku?", "Tak, i w tej branży to ma znaczenie: serwis w mieście z mieszaną ludnością traci zgłoszenia, gdy strona istnieje w jednym języku."],
          ["Czy nowa strona będzie widoczna w ChatGPT i innych asystentach?", "Tak, jeśli jest pod to zbudowana. Asystenci czytają tekst, nie zdjęcia, i wymieniają firmy, których strony niosą liczby nadające się do zacytowania: koszt dojazdu, koszt diagnozy, gwarancję na naprawę i obsługiwane miejscowości. Na nowej stronie nie kosztuje to nic dodatkowo — robi się przy budowie."],
          ["Kto pisze treści?", "Ja piszę pierwszą wersję, wy poprawiacie. Sprzedaje to, co wie tylko serwis: co naprawdę obejmuje dojazd, które usterki opłaca się naprawiać, czego nie przyjmujecie i dlaczego."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę dla serwisu AGD: co mi przysłać"),
        p("Przyślijcie stronę, którą macie teraz, albo napiszcie, że nie macie żadnej. Dopiszcie, jakie urządzenia i marki naprawiacie, do jakich miejscowości jeździcie i ile kosztuje dojazd."),
        p("Odpowiadam w jeden dzień roboczy: co zbuduję, w jakiej kolejności i ile to będzie kosztowało."),
      ],
    },
  ],
};
