// Landing page fixture: Strona internetowa dla lekarza (PL), group «medical-website-design».
// Market version for Polish doctors, private practices and przychodnie, not a
// translation of medical-website-design.en. In PL this is a development page
// that includes design: the market searches for «strona dla lekarza», not for
// «projektowanie stron medycznych».
// Semantic core: ref/dental-medical.csv + dental-medical.md (PL): strona www
// dla lekarza 50, strona internetowa dla lekarza 40.
// Intent: ref/intent-check-dental-medical.md — «strona dla lekarza» top-10:
// ekoemka, proassist, lekarzplus, medexpress, medycznastrona, medicalonline,
// edoktorzy, gsl.nfz.gov.pl → medical site builders and portals for doctors, so
// this is doctors’ demand (they buy a site), not patients’. 0 shared URLs and
// 0 shared domains with «strona dla gabinetu stomatologicznego» → dentists stay
// on /pl/strona-dla-gabinetu-stomatologicznego.
// Polish angles: gabinet lekarski vs przychodnia; informacja, nie reklama
// (informacja bez cech reklamy, art. 14 ust. 1 ustawy o dzialalnosci leczniczej); własna strona vs profil ZnanyLekarz; rejestracja
// online; RODO i dane o zdrowiu; NFZ i wizyty prywatne; podstrony specjalistów;
// dostępność; wersje językowe dla pacjentów z zagranicy.
// Not here: dental site (/pl/strona-dla-gabinetu-stomatologicznego); dental
// SEO (/pl/pozycjonowanie-strony-gabinetu-stomatologicznego); SEO przychodni
// (/pl/oferty/pozycjonowanie-strony-przychodni-warszawa); patients from Germany
// (/pl/oferty/pozycjonowanie-kliniki-na-pacjentow-z-niemiec); psychologists
// (/pl/strona-dla-psychologow-terapeutow).
// Prices: /pl/cennik (3000–6000 zł, od 8500 zł). Owner’s rule: new pages weave
// in AI search.
import { p, h2, li, ol, link, k } from "./pt";

export const medicalWebsiteDesignPl = {
  lang: "pl",
  group: "medical-website-design",
  slug: "strona-internetowa-dla-lekarza",
  title: "Strona internetowa dla lekarza",
  heading: "Strona internetowa dla lekarza",
  excerpt:
    "Tworzę strony internetowe dla lekarzy, gabinetów lekarskich i przychodni: rzetelna informacja zamiast reklamy, profile lekarzy z kwalifikacjami, rejestracja online i formularze, które chronią dane o zdrowiu zgodnie z RODO.",
  seo: {
    metaTitle: "Strona www dla lekarza i przychodni | Bandziuk",
    metaDescription:
      "Strona internetowa dla lekarza i przychodni: informacja zamiast reklamy, profile lekarzy, rejestracja online, formularze zgodne z RODO. Od 3000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt + wykonanie, jedna cena", "Od 3000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Umów wizytę", "Nasi lekarze", "NFZ i prywatnie", "Cennik wizyt"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona internetowa dla lekarza lub gabinetu", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Strona przychodni z profilami lekarzy, podstronami specjalizacji, rejestracją online i wersjami językowymi", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co dostajesz ze stroną internetową dla lekarza",
      items: [
        { _key: k("o"), iconName: "file-text", title: "Treści informacyjne, nie reklamowe", text: "Zakres usług, kwalifikacje i ceny bez obietnic efektów" },
        { _key: k("o"), iconName: "image", title: "Profile lekarzy z prawdziwymi zdjęciami", text: "Specjalizacja, numer PWZ, języki, przycisk wizyty" },
        { _key: k("o"), iconName: "plug", title: "Rejestracja online z Waszego systemu", text: "Kalendarz wizyt albo prośba o termin" },
        { _key: k("o"), iconName: "shield-check", title: "Formularze bez danych o zdrowiu", text: "RODO od pierwszego projektu, a nie po fakcie" },
        { _key: k("o"), iconName: "message-circle", title: "Wersje językowe dla pacjentów z zagranicy", text: "Angielski, ukraiński, niemiecki — według potrzeb" },
        { _key: k("o"), iconName: "sparkles", title: "Czytelna dla Google i asystentów AI", text: "Lekarze, usługi, godziny i adres tekstem" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona lekarza lub gabinetu", value: "3000–6000 zł", note: "projekt w cenie" },
        { _key: k("r"), label: "Przychodnia: lekarze, specjalizacje, rejestracja, języki", value: "od 8500 zł", note: "projekt w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: strony internetowe, które zaprojektowałem i zbudowałem",
      subtitle:
        "Strony, które zaprojektowałem i zbudowałem — wielojęzyczne, oparte na zdjęciach i prowadzące prosto do telefonu lub rezerwacji. Tych samych zasad potrzebuje strona lekarza i przychodni.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "full-multilingual-website-development-and-seo-for-student-services",
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
        "renovation-and-investment-website-with-premium-design",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej dla lekarza lub przychodni",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: proponuję strukturę podstron i podaję stałą cenę.",
      contextLabel: "Nazwa gabinetu lub obecna strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Kogo dotyczy strona?", options: ["Jeden lekarz", "Gabinet lekarski", "Przychodnia", "Kilka placówek"] },
        { _key: k("z"), question: "Jak przyjmujecie pacjentów?", options: ["Tylko prywatnie", "Tylko NFZ", "NFZ i prywatnie"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Tworzę strony internetowe dla lekarzy — prywatnych gabinetów lekarskich, praktyk specjalistycznych i przychodni — od struktury i projektu po wykonanie i uruchomienie, więc za wygląd i działanie odpowiada jedna osoba. Strona lekarza ma pomóc pacjentowi w trzech sprawach: sprawdzić, kto przyjmuje i z jakimi kwalifikacjami, zrozumieć, z czym może przyjść, i umówić wizytę bez dzwonienia w godzinach pracy rejestracji."),

        h2("Strona www dla lekarza: informacja o usługach, nie reklama"),
        p("Treść i forma informacji o udzielanych świadczeniach nie mogą mieć cech reklamy — to art. 14 ust. 1 ustawy o działalności leczniczej, wiążący każdy podmiot wykonujący działalność leczniczą, od praktyki jednego lekarza do przychodni. Kodeks Etyki Lekarskiej mówi o tym od 1 stycznia 2025 roku inaczej niż wcześniej: art. 71 pozwala lekarzowi posługiwać się informacją o oferowanych usługach, jeśli jest zgodna z zasadami etyki, i jednocześnie czyni go odpowiedzialnym za to, co publikują w jego imieniu osoby trzecie. Dla strony internetowej to najważniejsza zasada projektu: strona jest rzetelną informacją, a dobrze zbudowana i widoczna w Google strona to jeden z niewielu kanałów, z których lekarz może korzystać bez obaw."),
        p("W praktyce oznacza to, że na stronie są:"),
        li("imię, nazwisko, tytuł, specjalizacja i numer prawa wykonywania zawodu"),
        li("zakres usług opisany rzeczowo: co obejmuje wizyta, ile trwa, jak się przygotować"),
        li("adres, godziny przyjęć, ceny wizyt prywatnych i sposób rejestracji"),
        p("Na stronie nie ma natomiast sformułowań w rodzaju „najlepszy kardiolog w mieście”, obietnic wyleczenia ani porównań z innymi lekarzami. Opinie pacjentów to osobna sprawa: uchwała Naczelnej Rady Lekarskiej nr 29/11/VI z 16 grudnia 2011 roku wylicza, co wolno podać do publicznej wiadomości, i opinii na tej liście nie ma — za to wprost dopuszcza ceny i sposób płatności na stronie praktyki. Dlatego ceny podaję wprost, a po opinie odsyłam do niezależnych profili. Przed publikacją treści warto skonsultować je z prawnikiem albo z okręgową izbą lekarską."),

        h2("Strona internetowa gabinetu lekarskiego i strona przychodni: lekarze i specjalizacje"),
        p("Strona jednego lekarza i strona przychodni różnią się skalą, ale układ wychodzi z tego samego pytania pacjenta: do kogo pójść. Gabinet lekarski potrzebuje kilku podstron — o lekarzu, usługi, cennik, kontakt z dojazdem. Przychodnia potrzebuje podstrony dla każdego lekarza i dla każdej specjalizacji: kardiologia, dermatologia, ortopedia, pediatria, medycyna pracy."),
        p("Profil lekarza zawiera prawdziwe zdjęcie z gabinetu, specjalizację i stopień, numer PWZ, wykształcenie, języki, w których przyjmuje, dni przyjęć i przycisk umówienia wizyty właśnie do niego. Podstrona specjalizacji opisuje, z czym pacjenci przychodzą i jak wygląda wizyta, wymienia lekarzy tej specjalności i ma datę ostatniej aktualizacji. Treści medyczne pisze albo zatwierdza lekarz, a jego nazwisko jest pod tekstem — Google ocenia strony o zdrowiu surowiej niż inne i szuka właśnie takich sygnałów."),

        h2("Własna strona lekarza, profil w ZnanyLekarz czy strona z kreatora medycznego"),
        p("Profil w ZnanyLekarz daje kalendarz wizyt i widoczność w serwisie, z którego korzysta wielu pacjentów. To jednak strona serwisu: obok Waszego profilu pojawiają się inni lekarze, a o wyglądzie i zasadach decyduje platforma. Gotowe strony dla lekarzy w abonamencie uruchamia się szybko, ale zwykle mają ten sam szablon dla wszystkich, ograniczoną liczbę podstron i nie przenosi się ich do innego wykonawcy."),
        p("Własna strona należy do Was — kod, treści i domena — i nie konkuruje z profilem, tylko go uzupełnia: można osadzić na niej kalendarz z ZnanyLekarz albo z systemu gabinetowego i odesłać pacjentów do opinii w serwisie. Pacjent, który zna nazwisko lekarza, trafia wtedy najpierw na jego stronę, a nie na listę konkurencji."),

        h2("Wizyty NFZ i prywatne na stronie internetowej przychodni"),
        p("Przychodnia z umową z NFZ, która przyjmuje też prywatnie, ma dwie grupy pacjentów z innymi pytaniami. Strona prowadzi je osobnymi ścieżkami:"),
        li("wizyta w ramach NFZ: kto przyjmuje, czy potrzebne jest skierowanie, jak złożyć deklarację do lekarza POZ, jak się zarejestrować"),
        li("wizyta prywatna: cennik konsultacji i badań, terminy, płatność, rejestracja online"),
        p("Cennik jest tekstem, nie plikiem PDF ani grafiką — pacjent szuka na stronie nazwy badania, a wyszukiwarka czyta tylko tekst. Przy każdej specjalizacji widać od razu, czy przyjmuje na NFZ, prywatnie czy w obu trybach."),

        h2("Rejestracja online na stronie lekarza"),
        p("Rejestracja to najważniejsza ścieżka na stronie. Na telefonie przycisk „Umów wizytę” i przycisk połączenia są przypięte u dołu ekranu na każdej podstronie. Za przyciskiem jest to, co oferuje Wasz system: osadzony kalendarz z programu gabinetowego, takiego jak Medesk, kalendarz z ZnanyLekarz albo krótki formularz prośby o termin, jeśli samodzielna rezerwacja nie jest możliwa. Pacjent widzi jasno, czy wizyta jest potwierdzona od razu, czy rejestracja oddzwoni."),

        h2("RODO i dane o zdrowiu w formularzach na stronie lekarza"),
        p("Dane o zdrowiu to w RODO szczególna kategoria danych, a formularz kontaktowy łatwo zamienia się w miejsce, gdzie pacjent opisuje objawy i wyniki badań. Projektuję to tak, żeby strona zbierała jak najmniej:"),
        li("formularz pyta o imię, telefon, specjalizację i preferowany termin, a obok pola wiadomości jest prośba, by nie opisywać objawów"),
        li("formularze, które muszą zbierać informacje medyczne, działają przez system gabinetowy albo dostawcę, z którym zawarta jest umowa powierzenia przetwarzania danych"),
        li("klauzula informacyjna jest przy formularzu, a nie tylko w polityce prywatności"),
        li("analityka i piksele reklamowe nie przekazują danych z formularzy i stron rejestracji podmiotom trzecim"),
        p("Zbudowałem system medyczny, który przetwarzał dane pacjentów — jest objęty NDA, więc nie mogę go nazwać. To rozwiązania projektowe i techniczne; czy konkretna konfiguracja spełnia Wasze obowiązki, potwierdza inspektor ochrony danych albo prawnik."),

        h2("Dostępność strony internetowej przychodni dla pacjentów starszych i niedowidzących"),
        p("Ze stron lekarzy korzystają często osoby starsze, słabowidzące albo zdenerwowane. Projekt od początku trzyma się wytycznych WCAG, których przestrzegają też placówki publiczne:"),
        li("tekst co najmniej 16 pikseli i kontrast zgodny z poziomem AA"),
        li("duże przyciski z odstępami, linki opisujące, dokąd prowadzą"),
        li("formularze z widocznymi etykietami i zrozumiałymi komunikatami błędów"),
        li("pełna obsługa klawiaturą i poprawne nagłówki dla czytników ekranu"),

        h2("Wersje językowe strony przychodni dla pacjentów z zagranicy"),
        p("Wiele gabinetów przyjmuje pacjentów z Ukrainy, cudzoziemców pracujących w Polsce i pacjentów przyjeżdżających na leczenie z Niemiec czy Wielkiej Brytanii. Wersja językowa to nie jedna przetłumaczona strona główna, ale osobne adresy, przetłumaczone podstrony usług i cennika oraz profile, które mówią, w jakim języku przyjmuje każdy lekarz. Terminologię medyczną w obcym języku sprawdza lekarz albo tłumacz medyczny po Waszej stronie."),
        p(
          "Jeśli celujecie w pacjentów z Niemiec, pozycjonowanie takiej strony opisuję na stronie ",
          link("pozycjonowanie kliniki na pacjentów z Niemiec", "/pl/oferty/pozycjonowanie-kliniki-na-pacjentow-z-niemiec"),
          ".",
        ),

        h2("Strona internetowa dla lekarza, którą ChatGPT i przeglądy AI w Google potrafią przeczytać"),
        p("Pacjenci coraz częściej pytają ChatGPT, Perplexity albo przegląd od AI w Google, który lekarz w okolicy przyjmuje z danym problemem, mówi po angielsku albo ma wolne terminy prywatnie. Asystenci odpowiadają na podstawie tego, co potrafią przeczytać i sprawdzić. Dlatego lekarze ze specjalizacjami, usługi, adresy, godziny, języki i informacja o NFZ są zapisane tekstem i danymi strukturalnymi, zgodnie z wizytówką Google i profilem w ZnanyLekarz."),
        p(
          "Widoczność w odpowiedziach AI to dalsza praca, opisana na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ". Pozycjonowanie w Google opisuję na stronie ",
          link("pozycjonowanie strony przychodni", "/pl/oferty/pozycjonowanie-strony-przychodni-warszawa"),
          ".",
        ),

        h2("Jak powstaje strona internetowa dla lekarza lub przychodni"),
        ol("Brief. Przesyłacie listę lekarzy i specjalizacji, cennik, informacje o NFZ i pytania, które najczęściej słyszy rejestracja. Jeśli jesteście w Warszawie, przyjeżdżam do placówki."),
        ol("Ścieżki pacjenta. Uzgadniamy na ekranie telefonu trzy najważniejsze: umówienie wizyty, wybór lekarza i informacje o NFZ."),
        ol("Projekt. Strona główna, profil lekarza i podstrona specjalizacji są projektowane w całości, pozostałe według tego samego systemu."),
        ol("Wykonanie i uruchomienie. Podłączam rejestrację, sprawdzam formularze, dostępność i dane strukturalne, a rejestracja dostaje instrukcję edycji cennika i godzin."),
        p(
          "Jeśli strona już istnieje, przebudowa zachowuje pozycje w Google — opisuję ją na stronie ",
          link("przebudowa strony internetowej", "/pl/oferty/przebudowa-strony-internetowej"),
          ". Dla gabinetów stomatologicznych jest osobna ",
          link("strona dla gabinetu stomatologicznego", "/pl/strona-dla-gabinetu-stomatologicznego"),
          " i ",
          link("pozycjonowanie strony gabinetu stomatologicznego", "/pl/pozycjonowanie-strony-gabinetu-stomatologicznego"),
          ", a dla psychologów i psychoterapeutów — ",
          link("strona dla psychologów i terapeutów", "/pl/strona-dla-psychologow-terapeutow"),
          ".",
        ),

        h2("Ile kosztuje strona internetowa dla lekarza"),
        li("Prosta strona lekarza lub gabinetu — o lekarzu, usługi, cennik, kontakt, przycisk rejestracji: od 3000 do 6000 zł."),
        li("Strona przychodni z profilami lekarzy, podstronami specjalizacji, ścieżkami NFZ i prywatną, rejestracją online, wersjami językowymi i testem dostępności: od 8500 zł."),
        p(
          "Projekt graficzny jest w cenie w obu przypadkach. Wyślijcie krótki opis placówki, a przygotuję stałą wycenę. Pełne widełki są w ",
          link("cenniku", "/pl/cennik"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strona internetowa dla lekarza: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona internetowa dla lekarza?", "Od 3000 do 6000 zł za prostą stronę lekarza lub gabinetu, od 8500 zł za stronę przychodni z profilami lekarzy, podstronami specjalizacji, rejestracją online i wersjami językowymi. Projekt graficzny jest w cenie. Po krótkim opisie placówki podaję stałą cenę."],
          ["Czy lekarz może reklamować się na swojej stronie?", "Nie. Przepisy pozwalają lekarzowi informować o usługach, ale treść i forma tej informacji nie mogą mieć cech reklamy. Strona podaje fakty — kwalifikacje, zakres usług, ceny, godziny — bez obietnic efektów i bez określeń w rodzaju „najlepszy lekarz”. Treści warto skonsultować z prawnikiem albo izbą lekarską."],
          ["Czy wystarczy mi profil w ZnanyLekarz?", "Na początek może wystarczyć. Profil należy jednak do serwisu i pokazuje obok innych lekarzy. Własna strona jest Wasza, pojawia się w Google po nazwisku i specjalizacji, a kalendarz z ZnanyLekarz można na niej osadzić."],
          ["Czy strona może mieć rejestrację online?", "Tak, jeśli Wasz system gabinetowy albo serwis rezerwacji udostępnia kalendarz do osadzenia lub link — większość to umożliwia. W innym przypadku formularz prośby o termin przekazuje zgłoszenie do rejestracji."],
          ["Jak strona lekarza spełnia wymogi RODO?", "Formularze nie zbierają danych o zdrowiu, obok nich jest klauzula informacyjna, a dane medyczne przechodzą tylko przez system, z którego dostawcą macie umowę powierzenia. Analityka nie przekazuje danych z formularzy. Ostateczną ocenę zgodności daje inspektor ochrony danych albo prawnik."],
          ["Ile trwa stworzenie strony dla przychodni?", "Zwykle od czterech do siedmiu tygodni od briefu, zależnie od liczby lekarzy i specjalizacji, wersji językowych i od tego, jak szybko gotowe są zdjęcia i zatwierdzone teksty."],
          ["Czy sami możemy zmieniać cennik, godziny i lekarzy?", "Tak. Cennik, godziny przyjęć, profile lekarzy i aktualności edytuje się w prostym panelu, także z telefonu, a układ strony zostaje spójny."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową dla lekarza: co mi wysłać"),
        p(
          "Wyślijcie nazwę gabinetu lub przychodni, link do obecnej strony albo profilu w ZnanyLekarz, listę lekarzy i specjalizacji, informację, czy przyjmujecie na NFZ, i system, w którym prowadzicie rejestrację. Odpowiem planem podstron i stałą ceną. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
