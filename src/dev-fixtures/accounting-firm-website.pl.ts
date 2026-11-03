// Fixture strony: strona internetowa dla biura rachunkowego (PL), grupa
// «accounting-firm-website». PRZEBUDOWA istniejącej strony starego szablonu
// pod tym samym adresem — replace-landing.cjs.
//
// Powód (03.11.2026). Stary szablon: nagłówki-etykiety po dwa-trzy słowa
// («Wymienne sformułowania», «Ceny całkowicie ukryte», «Widoczne uprawnienia»)
// plus teksty zapisane w komponentach, powtarzające się na dziesiątkach stron.
//
// Zmierzony popyt po polsku na cały temat to JEDNA fraza: «strona internetowa
// dla biura rachunkowego» 70/mies. Ona stoi w H1. Polskich fraz o SEO dla
// biur rachunkowych nie ma wcale, dlatego nowa strona SEO powstaje tylko po
// angielsku, a ta zostaje po polsku jako strona budowy.
//
// Treść celowo polska, nie przekład: obowiązkowy KSeF, JPK, zastrzeżony tytuł
// doradcy podatkowego i portal klienta w programie, który biuro już prowadzi.
//
// Ceny z cennika: strona od 8500 zł, WordPress od 3000 zł. Ceny przebudowy w
// złotych na stronie nie ma, więc prowadzi do niej link.
import { p, h2, h3, li, link, k } from "./pt";

export const accountingFirmWebsitePl = {
  lang: "pl",
  group: "accounting-firm-website",
  slug: "strona-dla-biura-rachunkowego",
  title: "Strona internetowa dla biura rachunkowego",
  heading: "Strona internetowa dla biura rachunkowego: taka, po której klient widzi, że prowadzisz właśnie jego przypadek",
  excerpt:
    "Większość stron biur rachunkowych to ten sam szablon z innym logo, i czytają się jako wymienne, bo są wymienne. Ta strona jest o budowie: podstrona na każdy typ klienta, ceny na tyle, na ile jesteś gotów, przekazywanie dokumentów bez tworzenia ryzyka i strona, którą zmieniasz sam. Od 8500 zł.",
  seo: {
    metaTitle: "Strona dla biura rachunkowego — projekt i wdrożenie",
    metaDescription:
      "Strona internetowa dla biura rachunkowego: podstrony według typu klienta, cennik, KSeF, przekazywanie dokumentów, edycja bez programisty. Od 8500 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Podstrona na typ klienta", "Strony od 8500 zł", "Odpowiadam w 1 dzień roboczy"],
  heroPhonePoints: ["Dla kogo pracujemy", "Cennik", "Prześlij dokumenty", "Umów rozmowę"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Strona biura rachunkowego: podstrony według typu klienta, cennik, dokumenty", price: 8500, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Strona na WordPressie dla biura rachunkowego, z projektem w cenie", price: 3000, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co powstaje",
      title: "Co wchodzi w stronę internetową biura rachunkowego",
      items: [
        { _key: k("o"), iconName: "users", title: "Podstrona na każdy typ klienta", text: "JDG, spółki, e-commerce, budowlanka" },
        { _key: k("o"), iconName: "tag", title: "Cennik na tyle, na ile jesteś gotów", text: "Kwota miesięczna albo widełki, nie «zapytaj»" },
        { _key: k("o"), iconName: "file-lock", title: "Dokumenty bez tworzenia ryzyka", text: "Do portalu w programie, który już prowadzisz" },
        { _key: k("o"), iconName: "award", title: "Uprawnienia i osoba odpowiedzialna", text: "Kto podpisuje, kto ma licencję" },
        { _key: k("o"), iconName: "file-text", title: "Treści o KSeF i JPK", text: "Pytania, które klienci zadają co miesiąc" },
        { _key: k("o"), iconName: "edit", title: "Edycja bez programisty", text: "Ceny, osoby, terminy zmieniasz sam" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Dlaczego strony biur rachunkowych wyglądają tak samo"),
        p("Bo spora ich część pochodzi od kilku dostawców, którzy robią strony dla tej branży setkami. Wychodzi z tego ta sama struktura, to samo zdjęcie uścisku dłoni i to samo zdanie: «świadczymy kompleksowe usługi księgowe dla firm każdej wielkości». To nie lenistwo biura — to właśnie dostaje się w pakiecie, i jest tanie nie bez powodu."),
        p("Koszt widać w jednym momencie, który się liczy. Osoba porównująca trzy biura w trzech kartach przeglądarki widzi trzy strony mówiące to samo, więc decyzja wraca do tego, kto odebrał telefon pierwszy albo podał niższą kwotę. Strona, która w nagłówku nazywa sytuację klienta, do tego porównania po cenie w ogóle nie wchodzi."),

        h2("Projektowanie strony biura rachunkowego: najpierw struktura, potem wygląd"),
        p("Pytanie projektowe w tej branży nie dotyczy odcienia niebieskiego. Dotyczy tego, co widać na pierwszym ekranie: hasło o zaufanym partnerze czy zdanie, z którego klient rozpoznaje własny przypadek. Z tego wyboru wynika wszystko dalsze — nawigacja, długość podstron, miejsce dla ceny i to, czy zdjęcia zespołu idą przed usługami czy po nich."),
        p("Co rozstrzyga projekt konkretnie: jak wybiera się typ klienta już z pierwszego ekranu; czy kwota jest widoczna bez przewijania; jak zrobić czytelnym długie wyjaśnienie przepisu, którego inaczej nikt nie przeczyta; i jak strona wygląda na telefonie między spotkaniami, bo właśnie tak się ją najczęściej otwiera."),

        h2("Podstrona na każdy typ klienta, a nie lista usług"),
        p("Księgowość kupuje się segmentami. Jednoosobowa działalność na ryczałcie, spółka z o.o. z pełną księgowością, sklep internetowy z VAT OSS i zwrotami, firma budowlana z podwykonawcami, freelancer, który właśnie przekroczył próg VAT — inne pytania, inne programy, inne obawy. Jedna podstrona z listą wszystkiego nie odpowiada żadnemu z nich."),
        li("typ klienta nazwany w nagłówku, nie w trzecim akapicie;"),
        li("konkretne problemy tego segmentu, jego własnymi słowami;"),
        li("program, w którym pracujesz, bo segment pyta o to pierwszym pytaniem;"),
        li("co wchodzi w obsługę i ile kosztuje;"),
        li("i żadnej podstrony dla pracy, której wolisz nie brać — strona jest też filtrem."),

        h2("Publikowanie cennika na stronie biura rachunkowego"),
        p("Najczęstsza pretensja odwiedzających te strony brzmi: nigdzie nie ma żadnej kwoty. «Zapytaj o wycenę» czyta się jako «będzie drogo i niewygodnie o to pytać», a zapytania, które to jednak generuje, są najtrudniejsze do zakwalifikowania, bo każdy przychodzi bez pojęcia o widełkach."),
        p("Wystarczy pójść tak daleko, jak jesteś gotów: kwota miesięczna za określony zakres, cena za rozliczenie roczne przy podanym poziomie przychodu albo widełki z informacją, co je rusza. Biura, które podają dolną granicę, dostają mniej zapytań i zamykają więcej z nich — a to jest ta wymiana, której większość biur faktycznie chce."),

        h2("Przekazywanie dokumentów bez budowania własnego portalu"),
        p("Klienci prześlą dokumenty tym kanałem, który jest najprostszy, a jeśli strona oferuje zwykły formularz z załącznikiem, to właśnie tam trafią faktury i umowy — na hosting strony, poza systemem, w którym biuro naprawdę pracuje. To ryzyko, nie funkcja."),
        p("Właściwą odpowiedzią prawie zawsze jest link, nie wdrożenie: program, w którym prowadzisz biuro, ma już portal klienta z uprawnieniami i historią dostępu, więc zadaniem strony jest czytelnie do niego skierować i wyjaśnić, co przesłać. Druga ścieżka wysyłki na stronie kosztuje pieniądze i tworzy kopię danych, której nikt nie pilnuje."),

        h2("Treści o KSeF i JPK, o które klienci pytają co miesiąc"),
        p("Obowiązkowy KSeF zmienił to, o co pytają klienci biur rachunkowych, i te pytania przychodzą do biura telefonicznie po kilka razy w tygodniu. Strona, która na nie odpowiada tekstem, oszczędza te telefony i jednocześnie pokazuje, że biuro jest na bieżąco — a to drugie jest argumentem sprzedażowym mocniejszym niż jakiekolwiek hasło o profesjonalizmie."),
        p("Co się tu sprawdza: krótkie wyjaśnienie, co zmienia się dla konkretnego typu klienta, a nie przepisanie przepisu; terminy, które sam aktualizujesz; i uczciwe rozgraniczenie, co robi biuro, a co zostaje po stronie klienta."),

        h2("Zastrzeżony tytuł doradcy podatkowego i co z tego wynika dla treści"),
        p("Tytuł doradcy podatkowego jest w Polsce zastrzeżony dla osób wpisanych na listę, więc biuro rachunkowe bez takich uprawnień nie może przedstawiać się jako doradztwo podatkowe. To nie szczegół prawniczy bez znaczenia dla strony: od tego zależy, jakimi słowami wolno opisać usługi i czego nie wolno obiecać."),
        p("Dlatego treści na stronie piszę tak, żeby nazywały to, co biuro faktycznie robi, a wersję ostateczną zatwierdza ktoś po twojej stronie. Teksty o podatkach pisane bez zatwierdzenia przez praktyka to najkrótsza droga do zdania, które jest pewne siebie i nieprawdziwe — a w tej branży kosztuje to więcej niż pozycja w Google."),

        h2("Uprawnienia i osoba, która podpisuje — na widoku"),
        p("Gdy kupujący ocenia ryzyko, podstroną, która sprzedaje, często okazuje się zespół. Co na niej ma być: kto ma jakie uprawnienia, kto prowadziłby segment odwiedzającego i kto podpisuje się pod rozliczeniem. Czego nie: ściany logotypów certyfikatów bez nazwisk, która czyta się jako dekoracja."),

        h2("Ile kosztuje strona dla biura rachunkowego i co podnosi cenę"),
        p(
          "Pełna strona z podstronami według typu klienta, cennikiem, skierowaniem dokumentów i edytowalnym CMS — od 8500 zł. Strona na WordPressie z projektem w cenie — od 3000 zł. Co rusza cenę: ile segmentów klientów dostaje własną podstronę, ile biur i osób w zespole, czy cennik jest gotowy czy trzeba go ułożyć, i czy treści istnieją. Projekt jest w cenie i nigdy nie idzie osobną pozycją. Pełna lista jest w ",
          link("cenniku", "/pl/cennik"),
          ", a cena przejścia z szablonu dostawcy — na stronie ",
          link("przebudowy strony", "/pl/oferty/przebudowa-strony-internetowej"),
          ".",
        ),

        h2("Ile trwa zrobienie strony dla biura rachunkowego"),
        p("Strona na WordPressie dwa do trzech tygodni, pełna cztery do sześciu. Wydłuża to rzadko kod: decyzje o segmentach, układ cennika i to, kto w biurze zatwierdza sformułowania o przepisach. Na czas kończą się te projekty, w których jedna osoba może zdecydować bez zebrania."),

        h2("Co zrobić, żeby stronę znaleziono"),
        p(
          "Strona zbudowana w ten sposób da się znaleźć, ale samo znalezienie to osobna praca: podstrony segmentów muszą zdobyć pozycje, profil w Google musi zgadzać się ze stroną, a treści związane z terminami trzeba publikować przed sezonem, nie w jego trakcie. Po polsku zmierzony popyt na pozycjonowanie w tej branży jest zerowy, więc osobnej polskiej strony o tym nie ma — jest ",
          link("strategia i optymalizacja SEO", "/pl/oferty/strategia-i-optymalizacja-seo"),
          " jako usługa ogólna.",
        ),
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: usługi profesjonalne, gdzie wiarygodność sprawdza się przed kontaktem",
      subtitle:
        "Co te projekty mają wspólnego z biurem rachunkowym: produktem jest wiedza, kupujący sprawdza wykonawcę przed napisaniem, a struktura musiała udźwignąć długie wyjaśnienia, nie stając się nieczytelna. Strona konsultantki analityki retailowej, strona agencji digitalowej, sajt agencji edukacyjnej wyprowadzony z jednego kraju do dziesięciu, strona osobista zbudowana i zoptymalizowana od zera oraz wielojęzyczna strona usług studenckich.",
      picks: [
        "consultant-website-design-retail-analytics",
        "proscore-agency-website-development",
        "seo-case-study-education-agency",
        "develop-and-optimize-a-personal-website-with-seo",
        "full-multilingual-website-development-and-seo-for-student-services",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony dla twojego biura rachunkowego",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: co zbuduję, w jakiej kolejności i za ile.",
      contextLabel: "Nazwa biura albo strona",
      contextPlaceholder: "Link albo nazwa",
      buttonText: "Wyślij i odbierz wycenę",
      note: "Albo napisz na WhatsAppie — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Co prowadzisz?", options: ["Biuro rachunkowe", "Księgowość jednoosobowo", "Doradztwo podatkowe", "Po trochu wszystkiego"] },
        { _key: k("z"), question: "Co jest teraz?", options: ["Szablon dostawcy", "Stara strona", "Nie ma strony", "Tylko wizytówka w katalogu"] },
        { _key: k("z"), question: "Ile typów klientów?", options: ["Jedna nisza", "Dwa albo trzy", "Każdy, kto przyjdzie", "Jeszcze nie wiem"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Żeby stronę biura rachunkowego przeczytały asystenty AI (GEO, AEO)"),
        p("«Znajdź mi księgowego dla jednoosobowej działalności z przychodem z zagranicy» to pytanie, które ludzie zadają dziś asystentowi przed otwarciem wyszukiwarki. Asystent cytuje tekst, który potrafi odczytać, więc o tym, czy biuro może zostać wymienione, decydują trzy rzeczy: segmenty i ceny zapisane tekstem, a nie w obrazku z broszurą; kwota albo widełki, które da się zacytować; oraz ta sama nazwa, adres i nazwy usług na stronie i w każdym katalogu, który biuro wymienia."),
        p(
          "Szablony dostawców przeważnie nie spełniają tego trzeciego, bo wpisy w katalogach i stronę wypełniali różni ludzie w różnych latach. Doprowadzenie działającej strony do czytelnego stanu to ",
          link("przygotowanie strony do wyszukiwania AI", "/pl/oferty/przygotowanie-strony-do-wyszukiwania-ai"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strona internetowa dla biura rachunkowego: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona dla biura rachunkowego?", "Od 8500 zł za pełną stronę z podstronami według typu klienta, cennikiem, skierowaniem dokumentów i edytowalnym CMS. Od 3000 zł za stronę na WordPressie z projektem w cenie. Cenę ruszają liczba segmentów klientów, liczba biur i osób w zespole oraz to, czy treści już są."],
          ["Czy powinniśmy publikować ceny?", "Na tyle, na ile jesteś gotów — i cokolwiek jest znacznie lepsze niż nic. Kwota miesięczna za określony zakres albo cena rozliczenia rocznego przy podanym poziomie przychodu. «Zapytaj o wycenę» czyta się jako drogo i niewygodnie, a do tego gwarantuje, że każde niezakwalifikowane zapytanie trafi do ciebie telefonem."],
          ["Czy klienci mogą przesyłać dokumenty przez stronę?", "Nie powinni wysyłać ich na samą stronę — to kładzie faktury i umowy na hostingu, poza systemem, w którym biuro pracuje. Strona kieruje klienta do portalu w programie, który już prowadzisz, i wyjaśnia, co przesłać."],
          ["Po co osobne podstrony dla różnych typów klientów?", "Bo tak się tę usługę kupuje i tak jej szuka. Podstrona, która nazywa sytuację odwiedzającego, nie jest porównywana po cenie z trzema identycznymi stronami; podstrona z listą wszystkich usług — jest."],
          ["Jesteśmy na szablonie dostawcy. Warto przechodzić?", "Jeśli da się dodawać podstrony i edytować teksty, często nie warto. Jeśli struktura jest zamknięta, a każda zmiana idzie przez zgłoszenie do wsparcia, to tak — i w ciągu roku wychodzi taniej. Mówię, który to przypadek, przed wyceną, a nie po."],
          ["Czy piszecie też treści o KSeF i przepisach?", "Tak, w formie krótkich wyjaśnień dla konkretnego typu klienta, a nie przepisywania przepisu. Wersję ostateczną zatwierdza ktoś po twojej stronie: teksty o podatkach bez zatwierdzenia przez praktyka to najkrótsza droga do zdania pewnego siebie i nieprawdziwego."],
          ["Czy możemy sami aktualizować stronę?", "Tak, i w tej branży będziecie musieli: ceny, osoby i terminy się zmieniają. To edytujecie bez programisty. Zmiany strukturalne, jak dodanie nowego segmentu klientów, to szybka praca, ale nie wasza."],
          ["Czy wystawiasz fakturę?", "Tak, prowadzę jednoosobową działalność w Warszawie i wystawiam fakturę za każdą pracę."],
          ["Do kogo należy strona?", "Do ciebie: kod, domena, treści i wszystkie dostępy. Nic nie zostaje u mnie jako dźwignia — i to jest główna praktyczna różnica wobec szablonu, który się wynajmuje."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę dla biura rachunkowego: co mi przysłać"),
        p("Wyślij obecną stronę, jeśli jest, listę usług, typy klientów, w których jesteś naprawdę lepszy niż średnia, i to, jak daleko jesteś gotów pójść z publikowaniem cen. Odpowiem w ciągu jednego dnia roboczego, co zbuduję, w jakiej kolejności i za ile — a jeśli strona pod jeden najsilniejszy segment da więcej niż pełna przebudowa, powiem to wprost."),
      ],
    },
  ],
};
