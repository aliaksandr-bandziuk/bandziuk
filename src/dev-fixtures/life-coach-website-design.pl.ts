// Landing page fixture: Strona internetowa dla coacha (PL), group
// «life-coach-website-design». New page. Market version for Poland, not a
// translation of the EN page.
// Semantic core: ref/creative-leisure.md has no PL coach phrases above the
// source’s floor; brief keywords: «strona internetowa dla coacha» (H1, intro,
// H2s, meta), «strona coacha», «strona coachingowa»; SEO H2: «SEO dla coacha».
// Intent: ref/intent-check-creative-leisure.md — EN «website for life coaches»
// = builders and coaching-site vendors; «life coach website design» vs «seo for
// coaches»: 0 shared URLs → SEO is one H2 here, not the topic. RU check «сайт
// для коуча» vs «сайт для психолога»: 0 shared URLs → coach ≠ psychologist page.
// Polish angles: nisza (coaching kariery, biznesowy, life coaching, zdrowie,
// relacje), indywidualnie / grupowo / coaching dla firm z fakturą, sesja
// zapoznawcza z kalendarza, ICF i Izba Coachingu (general), opinie za zgodą,
// lead magnet i newsletter zgodnie z RODO (MailerLite, GetResponse), kurs online
// z płatnością BLIK / Przelewy24 i prawem odstąpienia przy treściach cyfrowych,
// LinkedIn, kreator vs strona na zamówienie, SEO dla coacha, ChatGPT.
// Portfolio: retail analytics consultant (courses, templates, AI-quotable
// pages), Giuseppe (one-person helping practice, blog, AI answers), Landi Room
// (course sold online with protected video), bandziuk.com (own personal brand
// site), Sasha Dith (personal brand hub with booking form).
// NOT on this page: trenerzy personalni (/pl/strona-internetowa-dla-trenera-
// personalnego); psycholodzy i psychoterapeuci (/pl/strona-dla-psychologow-
// terapeutow, linked once); pełne pozycjonowanie coacha (one H2 only).
// Owner’s rules: never say there are no clients from the visitor’s segment; no
// outcome promises, no invented testimonials; AI search on every page.
import { p, h2, li, link, k } from "./pt";

export const lifeCoachWebsiteDesignPl = {
  lang: "pl",
  group: "life-coach-website-design",
  slug: "strona-internetowa-dla-coacha",
  title: "Strona internetowa dla coacha",
  heading: "Strona internetowa dla coacha",
  excerpt:
    "Tworzę strony internetowe dla coachów kariery, biznesu, zdrowia i relacji: nisza nazwana w pierwszym zdaniu, programy z cenami, zapis na sesję zapoznawczą z kalendarza, lead magnet z newsletterem zgodnym z RODO i kurs online sprzedawany z Twojej własnej strony.",
  seo: {
    metaTitle: "Strona coacha: nisza, programy i zapisy | Bandziuk",
    metaDescription:
      "Strona internetowa dla coacha: nisza w pierwszym zdaniu, programy i cennik, sesja zapoznawcza z kalendarza, newsletter zgodny z RODO, kurs online. Od 3000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt + wykonanie, jedna cena", "Od 3000 zł", "Zapisy, newsletter, kursy"],
  heroPhonePoints: ["Coaching kariery dla menedżerów", "Program 10 sesji", "Bezpłatny test kompetencji", "Umów sesję zapoznawczą"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona internetowa dla coacha, projekt w cenie", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Strona coacha z podstronami nisz i programów, lead magnetem i newsletterem, sprzedażą kursu z chronionym wideo i blogiem, projekt w cenie", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co dostajesz ze stroną internetową dla coacha",
      items: [
        { _key: k("o"), iconName: "search", title: "Nisza w pierwszym zdaniu", text: "Komu i w czym pomagasz, słowami klienta" },
        { _key: k("o"), iconName: "file-text", title: "Programy opisane jak produkt", text: "Forma, liczba sesji, co w środku, cena" },
        { _key: k("o"), iconName: "phone", title: "Sesja zapoznawcza z kalendarza", text: "Wolne terminy i trzy pytania przed rozmową" },
        { _key: k("o"), iconName: "message-circle", title: "Lead magnet i newsletter", text: "Zapis zgodny z RODO, z tagiem podstrony" },
        { _key: k("o"), iconName: "shield-check", title: "Kurs online na Twojej stronie", text: "BLIK lub karta, potem osobisty link do wideo" },
        { _key: k("o"), iconName: "sparkles", title: "Czytelna dla Google i ChatGPT", text: "Nisza, certyfikaty i programy jako tekst" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona coacha", value: "3000–6000 zł", note: "projekt w cenie" },
        { _key: k("r"), label: "Nisze, newsletter, kurs online, blog", value: "od 8500 zł", note: "projekt w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Strony ekspertów i marek osobistych: konsultantka, terapeuta, kursy, moja strona",
      subtitle:
        "Każda z tych stron sprzedaje wiedzę jednej osoby — tak jak strona coacha. Strona konsultantki od analityki handlu i mody ma 153 podstrony w trzech językach, szablony do pobrania i kursy z wideo, a zanim powstał projekt, sprawdziłem, czego szukają jej klienci. Psychoterapeuta Giuseppe z Mediolanu zachował przy przeprowadzce 468 wpisów bloga, a nowe podstrony pojawiają się w odpowiedziach ChatGPT. Landi Room sprzedaje kurs online z linkiem ważnym 14 dni. Moja strona prowadzi blog i strony ofertowe, a DJ Sasha Dith ma jedno miejsce dla fanów i rezerwacji.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "consultant-website-design-retail-analytics",
        "psychotherapist-website-milan",
        "e-commerce-landing-page-with-secured-video-access",
        "develop-and-optimize-a-personal-website-with-seo",
        "official-website-for-dj-and-producer-sasha-dith",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej dla coacha",
      subtitle: "W ciągu jednego dnia roboczego dostajesz proponowaną strukturę strony dla Twojej niszy i programów oraz stałą cenę.",
      contextLabel: "Obecna strona, LinkedIn albo Instagram",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i otrzymaj wycenę",
      note: "Albo napisz na WhatsApp — odpowiem równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Jaki coaching prowadzisz?", options: ["Kariery lub menedżerski", "Biznesowy, także dla firm", "Zdrowie i well-being", "Life coaching lub relacje"] },
        { _key: k("z"), question: "Co strona ma robić najpierw?", options: ["Zapisywać na sesje zapoznawcze", "Budować listę mailową", "Sprzedawać kurs lub program", "Wszystko naraz"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Tworzę strony internetowe dla coachów, którzy pracują indywidualnie, z grupami, z firmami albo przez nagrane programy. Projekt, kod i uruchomienie robię sam, za jedną stałą cenę. Strona coacha ma wąskie zadanie: w minutę obca osoba ma zrozumieć, czy pracujesz z kimś takim jak ona, zaufać na tyle, żeby umówić sesję zapoznawczą albo zapisać się na newsletter, i wiedzieć, ile mniej więcej kosztuje współpraca."),

        h2("Strona internetowa dla coacha zaczyna się od niszy"),
        p("„Pomagam ludziom odkryć ich potencjał” pasuje do każdego coacha, więc nie przyciąga nikogo konkretnego. Strona działa, kiedy nazywa osobę i problem: „Coaching kariery dla specjalistów IT, którzy zostają liderami”, „Coaching dla właścicielek jednoosobowych firm”, „Coaching dla rodziców wracających do pracy po urlopie”. To zdanie trafia do nagłówka, tytułów podstron i pierwszego akapitu, bo właśnie je rozpozna przyszły klient — i właśnie je wpisze w Google albo zapyta o nie ChatGPT."),
        p("Jeśli pracujesz z dwiema grupami, na przykład z menedżerami i z ich zespołami, każda dostaje własną podstronę z przykładami i przyciskiem. Nazwana nisza nie odcina innych klientów — pomaga właściwym zobaczyć siebie w pierwszym zdaniu."),

        h2("Programy coachingowe i cennik na stronie coacha"),
        p("Coaching to usługa, której nie widać, więc podstrona programu musi ją uchwycić:"),
        li("forma: sesje indywidualne, grupa, intensywny dzień, proces dla firmy"),
        li("długość i rytm: dziesięć sesji co dwa tygodnie, kontakt mailowy między nimi"),
        li("co klient dostaje: notatki po sesjach, ćwiczenia, nagrania, dostęp do kursu"),
        li("cena albo kwota „od”, płatność w ratach, co jeśli ktoś przerwie wcześniej"),
        p("Coaching dla firm ma osobną podstronę: dla kogo w organizacji, jak wygląda kontrakt trójstronny z HR, raportowanie bez naruszania poufności, faktura. Cenę możesz tam zastąpić zdaniem „wycena po rozmowie” — dział HR i tak poprosi o ofertę."),

        h2("Sesja zapoznawcza: zapis z kalendarza na stronie coacha"),
        p("Na większości stron coachingowych główną konwersją jest bezpłatna sesja zapoznawcza, więc jej przycisk stoi w nagłówku i pod każdym programem. Kalendarz — Calendly, Zcal, TidyCal albo ten z Twojej platformy — pokazuje tylko terminy sesji zapoznawczych. Klienci mieszkający za granicą, w Londynie czy Dublinie, widzą godziny w swojej strefie czasowej, więc nikt nie spóźnia się o godzinę."),
        p("Trzy pytania przed rozmową oszczędzają czas obu stronom: co chcesz zmienić, który program Cię zainteresował, skąd o mnie wiesz. Ostatnia odpowiedź pokazuje, które podstrony i kanały przyprowadzają klientów. Pod przyciskiem jedno zdanie: 30 minut, online, bezpłatnie, bez obowiązku zakupu."),

        h2("Certyfikaty, ICF i Izba Coachingu na stronie „O mnie”"),
        p("Zawód coacha nie jest w Polsce regulowany, więc odwiedzający szukają innych dowodów. Strona „O mnie”, pisana w pierwszej osobie, podaje szkołę coachingu i liczbę godzin szkolenia, akredytację ICF (ACC, PCC, MCC) albo Izby Coachingu, jeśli ją masz, superwizję, Twoją wcześniejszą karierę, gdy pasuje do niszy, i to, jak wygląda sesja z Tobą. Gdzie organizacja prowadzi publiczny rejestr, strona linkuje do Twojego wpisu."),
        p("Jest tam też zdanie o granicy coachingu: kiedy kierujesz klienta do psychologa lub lekarza. Chroni ono klienta i Ciebie, a czyta się je jako znak doświadczenia."),

        h2("Opinie klientów na stronie coacha: za zgodą i bez obietnic efektów"),
        p("Opinie mają na stronie coacha dużą wagę, a każda wymaga zgody klienta na treść, imię lub inicjały i zdjęcie. W panelu opinia ma pole zgody z datą; bez niego zostaje niewidoczna. Wielu klientów coachingu woli pozostać anonimowymi — podpis „Kierowniczka projektu, Wrocław” wystarczy, jeśli sama opinia jest konkretna."),
        p("Opinie opisują, co zmieniło się u tej osoby, a nie co gwarantujesz czytelnikowi. Hasła w rodzaju „podwój zarobki w 90 dni” budzą nieufność i mogą zostać uznane za wprowadzające w błąd. Filmy z opiniami ładują się dopiero po dotknięciu, więc nie spowalniają strony."),

        h2("Lead magnet i newsletter na stronie coacha zgodnie z RODO"),
        p("Większość odwiedzających nie jest gotowa na rozmowę przy pierwszej wizycie. Lead magnet daje mniejszy krok: test, zeszyt ćwiczeń, pięciodniowy kurs mailowy, nagranie warsztatu. Pojawia się tam, gdzie pasuje — checklista zmiany pracy na podstronie o zmianie pracy — zamiast okienka, które wyskakuje każdemu."),
        p("Formularz łączy się z Twoim narzędziem — MailerLite, GetResponse albo Brevo — i oznacza subskrybenta tagiem podstrony, z której przyszedł. Pyta o e-mail i imię, ma osobną, niezaznaczoną zgodę na newsletter i link do polityki prywatności, a materiał wysyła po potwierdzeniu adresu. Na stronie konsultantki od analityki handlu tę rolę pełnią szablony do pobrania i pięć kalkulatorów: narzędzia, z których ktoś korzysta na długo przed zakupem kursu."),

        h2("Kurs online i program grupowy na stronie coacha: płatność i dostęp"),
        p("Kurs w swoim tempie albo program grupowy potrzebuje trzech części: strony sprzedażowej, płatności i dostępu do lekcji. Klient płaci BLIK-iem, przez Przelewy24 albo kartą. Przy treściach cyfrowych formularz zbiera zgodę na dostęp przed upływem 14 dni na odstąpienie od umowy, z informacją, że prawo odstąpienia wtedy wygasa — tego wymaga ustawa o prawach konsumenta."),
        p("Dla warszawskiego salonu Landi Room, który sprzedaje kurs online, płatność w Stripe Checkout automatycznie wysyła kupującej unikalny link do wideo. Link działa dwa tygodnie, a nagrania można tylko oglądać, bez pobierania. Po pierwszej kampanii reklamowej w Google sprzedaż przekroczyła 100 kursów i nie było ani jednego przypadku udostępnienia nagrań osobom, które nie zapłaciły. Coach sprzedający nagrany warsztat albo mini-kurs może korzystać z tego samego rozwiązania bez abonamentu platformy kursowej."),

        h2("Kreator stron, platforma kursowa czy strona dla coacha na zamówienie"),
        p("Wix, Squarespace i platformy kursowe mają gotowe szablony stron coachingowych, a wielu coachów zaczyna od samego profilu na LinkedInie. Jeśli dopiero sprawdzasz niszę, szablon z linkiem do kalendarza wystarczy, i powiem to na pierwszej rozmowie."),
        p("Strona na zamówienie ma sens, gdy masz treści warte wysokich pozycji — artykuły, podcast, książkę — gdy pracujesz po polsku i po angielsku, albo gdy abonament i ograniczenia platformy zaczynają kosztować więcej, niż dają. Niezależnie od wyboru zachowaj własną domenę i listę mailową: to one przechodzą z Tobą."),

        h2("SEO dla coacha: jak strona coachingowa trafia do Google"),
        p("Na ogólne „coach” i „life coach” wysoko stoją katalogi i duże portale; na nisze — już nie. SEO dla coacha opiera się na podstronach pisanych tak, jak klient opisuje swój problem: „coach kariery dla programistów”, „coaching dla menedżerów Warszawa”, „coach dla osób z ADHD”. Każda nisza lub program ma własny tytuł i odpowiedzi na pytania, które słyszysz na sesjach zapoznawczych. Artykuły pomagają, gdy odpowiadają na nie dokładnie, a podcast — gdy każdy odcinek ma podstronę ze streszczeniem."),
        p(
          "Blog zyskuje na wartości z każdym rokiem, więc nowa strona nie może go zgubić. Przy przebudowie strony Giuseppe przeniosłem 468 wpisów z przekierowaniami 301 z każdego starego adresu, a wraz z nimi ich historię w wyszukiwarce. Stała praca nad pozycjami po uruchomieniu to ",
          link("strategia i optymalizacja SEO", "/pl/oferty/strategia-i-optymalizacja-seo"),
          ".",
        ),

        h2("Strona dla coacha, którą rozumieją ChatGPT i Google AI Overviews"),
        p("Ludzie pytają już ChatGPT: „poleć coacha kariery dla programisty, który chce zostać team leaderem”. Asystent wymieni Cię tylko wtedy, gdy przeczyta, z kim pracujesz, nad czym, w jakim języku, w jakiej formie i za ile. Na stronie te fakty są tekstem renderowanym przez serwer, z danymi strukturalnymi o Tobie, usługach i FAQ oraz regułami w robots.txt, które wpuszczają boty AI."),
        p(
          "Strona konsultantki od analityki handlu od początku powstawała pod to: najpierw badanie, czego ludzie szukają, potem podstrony pisane tak, by asystenci AI mogli je cytować. ChatGPT cytuje już nowe podstrony Giuseppe. Utrzymaniem i rozwijaniem takiej widoczności zajmuje się usługa ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Ile kosztuje strona internetowa dla coacha"),
        p("Projekt graficzny nie jest liczony osobno — jedna cena obejmuje projekt i wykonanie:"),
        li("Prosta strona coacha — strona główna, o mnie, jeden lub dwa programy, zapis na sesję zapoznawczą, newsletter, kontakt: 3000–6000 zł."),
        li("Strona z kilkoma podstronami nisz i programów, lead magnetem, sprzedażą kursu z chronionym wideo, blogiem lub wersją angielską: od 8500 zł."),
        p(
          "Psycholodzy i psychoterapeuci pracują według innych zasad niż coachowie i mają osobną ofertę: ",
          link("strona dla psychologa i psychoterapeuty", "/pl/strona-dla-psychologow-terapeutow"),
          ". Mój sposób pracy przy każdej stronie opisuje oferta ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ", a pełny cennik znajdziesz na stronie ",
          link("cennik", "/pl/cennik"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strona internetowa dla coacha: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona internetowa dla coacha?", "Prosta strona to 3000–6000 zł, strona z kilkoma niszami, lead magnetem, kursem online lub blogiem — od 8500 zł. Projekt jest w cenie. Po krótkim opisie niszy i programów podaję stałą kwotę."],
          ["Co powinna zawierać strona coacha?", "Niszę w pierwszym zdaniu, stronę „O mnie” ze szkołą i certyfikatami, podstrony programów z formą i ceną, zapis na sesję zapoznawczą, opinie publikowane za zgodą, zapis na newsletter i kontakt. Blog lub podcast to kolejny krok."],
          ["Czy coachowi wystarczy profil na LinkedInie?", "LinkedIn przyciąga uwagę, ale nie należy do Ciebie i nie zmieści programów, cennika, kalendarza i listy mailowej w jednym miejscu. Strona zamienia tę uwagę w rozmowy i zapisy."],
          ["Czy podłączysz mój kalendarz i newsletter?", "Tak. Calendly, Zcal, TidyCal albo kalendarz z Twojej platformy do sesji zapoznawczych oraz MailerLite, GetResponse lub Brevo do newslettera, z tagami według podstrony zapisu."],
          ["Czy mogę sprzedawać kurs na własnej stronie zamiast na platformie?", "Tak. Płatność BLIK-iem, przez Przelewy24 lub kartą, a każdy kupujący dostaje osobisty link do wideo, który wygasa po ustalonym czasie i nie pozwala pobrać filmu. Przy dużej bibliotece kursów lekcje może trzymać platforma, a strona je sprzedaje."],
          ["Czy pomożesz z tekstami na stronę?", "Tak. Piszę teksty na podstawie krótkiej rozmowy o niszy i programach, a Ty zatwierdzasz każdą podstronę. Opinie pochodzą wyłącznie od Twoich klientów i są publikowane za ich zgodą."],
          ["Czy współpraca może przebiegać w całości zdalnie?", "Tak. Pracuję z Warszawy, a cały projekt prowadzimy przez rozmowy wideo, maila i WhatsApp — tak samo jak sesje online z Twoimi klientami. Po zakończeniu dostajesz fakturę od mojej jednoosobowej firmy."],
          ["Czy strona może mieć wersję angielską?", "Tak. Jeśli prowadzisz sesje po angielsku albo pracujesz z Polakami za granicą, druga wersja językowa ma własne adresy podstron i godziny sesji w strefie czasowej klienta."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową dla coacha: co mi przesłać"),
        p(
          "Prześlij obecną stronę albo profil na LinkedInie, jedno zdanie o tym, z kim i nad czym pracujesz, szkołę i certyfikaty, programy z formą i ceną, narzędzia, których używasz do kalendarza i newslettera, oraz lead magnet lub kurs, jeśli już je masz. W ciągu jednego dnia roboczego dostaniesz proponowaną strukturę strony i stałą cenę. Skorzystaj z ",
          link("formularza powyżej", "#quote"),
          " albo napisz na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
