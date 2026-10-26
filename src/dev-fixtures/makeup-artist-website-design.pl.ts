// Landing page fixture: Strona internetowa dla wizażystki (PL), group
// «makeup-artist-website-design». New page. Market version for Polish
// wizażystki — makijaż ślubny z dojazdem, studniówki i okazje, sesje
// zdjęciowe, charakteryzacja, lekcje makijażu; not a translation of
// makeup-artist-website-design.en.
// Semantic core: ref/creative-leisure.md — the PL «on topic» list has no
// makeup phrases (volumes under the source’s floor); target phrases from
// BRIEF.md: «strona internetowa dla wizażystki» (H1, H2s, cost H2, FAQ),
// «strona www i portfolio dla wizażystki» (metaTitle), «makijaż ślubny» (H2,
// excerpt), «portfolio wizażystki» (H2), «cennik makijażu» (H2). EN reference
// volumes: makeup artist website 590, website for makeup artist 590, makeup
// artist portfolio website 90.
// Intent: ref/intent-check-creative-leisure.md — EN «website for makeup
// artists» = academies and builders (Pixpa, HubSpot, Reddit) vs «makeup artist
// website design» = galleries and studios (0 shared URLs) → owner’s demand;
// the page answers when Instagram, Booksy or a template is enough and when an
// own site pays off.
// Polish angles: Panna Młoda, próbny makijaż, harmonogram poranka, świadkowa i
// mamy, dojazd i strefy, start przed świtem; zadatek BLIK / Przelewy24 i
// umowa; Booksy dla lekcji i wizyt w pracowni; studniówki (styczeń–luty),
// makijaż okolicznościowy, sesje, charakteryzacja; kurs makijażu online z
// płatnym wideo (Landi Room case); zgoda na publikację wizerunku (RODO);
// portale ślubne; Google i wizytówka dla «wizażystka + miasto».
// Portfolio: Landi Room (warszawski salon, kurs online, Stripe, wygasający
// link), Sasha Dith (strona artysty: wideo, formularz, poniżej sekundy),
// warszawska firma remontowa (premium, zdjęcia), warszawski warsztat (SEO
// lokalne, Mapy Google), Giuseppe (praktyka pod własnym nazwiskiem).
// Prices: /pl/cennik — 3000–6000 zł, od 8500 zł, projekt w cenie.
// NOT on this page: salony z kilkoma stanowiskami (beauty salon page, linked
// once), fryzjerzy (/pl/strona-internetowa-dla-salonu-fryzjerskiego),
// portfolio modelek (/pl/strona-internetowa-dla-modelki, linked once),
// makijaż permanentny, sklepy z kosmetykami; stała kampania SEO
// (/pl/oferty/pozycjonowanie-lokalne, linked in the Google H2).
// Owner’s rules: every page covers AI search; never say there are no clients
// from the visitor’s industry.
import { p, h2, li, link, k } from "./pt";

export const makeupArtistWebsiteDesignPl = {
  lang: "pl",
  group: "makeup-artist-website-design",
  slug: "strona-internetowa-dla-wizazystki",
  title: "Strona internetowa dla wizażystki",
  heading: "Strona internetowa dla wizażystki",
  excerpt:
    "Strona internetowa dla wizażystki — zaprojektowana i wykonana przeze mnie: portfolio z osobnymi galeriami makijażu ślubnego, okolicznościowego i sesyjnego, cennik z kosztem dojazdu, rezerwacja daty z zadatkiem, podstrony na studniówki i lekcje oraz sprzedaż kursu makijażu online.",
  seo: {
    metaTitle: "Strona www i portfolio dla wizażystki | Bandziuk",
    metaDescription:
      "Strona internetowa dla wizażystki: portfolio makijażu ślubnego i sesyjnego, cennik z dojazdem, rezerwacja daty z zadatkiem BLIK, kurs online. Od 3000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt + wykonanie, jedna cena", "Od 3000 zł", "Makijaż ślubny, okazje, sesje"],
  heroPhonePoints: ["Makijaż ślubny z próbą", "Cennik i dojazd", "Sprawdź wolny termin", "Kurs makijażu online"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona internetowa dla wizażystki, projekt w cenie", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Strona wizażystki z portfolio według rodzaju makijażu, ofertą ślubną, strefami dojazdu, rezerwacją z zadatkiem, podstronami studniówek, sesji i lekcji, kursem online z płatnym wideo oraz podstronami miast, projekt w cenie", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co dostajesz ze stroną internetową dla wizażystki",
      items: [
        { _key: k("o"), iconName: "image", title: "Portfolio według rodzaju makijażu", text: "Ślubny, okolicznościowy, sesyjny, charakteryzacja" },
        { _key: k("o"), iconName: "file-text", title: "Cennik i koszt dojazdu tekstem", text: "Strefy, start przed świtem, świadkowa i mamy" },
        { _key: k("o"), iconName: "plug", title: "Rezerwacja daty z zadatkiem", text: "BLIK, Przelewy24, umowa przed potwierdzeniem" },
        { _key: k("o"), iconName: "layers", title: "Podstrony poza sezonem ślubnym", text: "Studniówki, sesje, lekcje i kurs online" },
        { _key: k("o"), iconName: "shield-check", title: "Zdjęcia klientek ze zgodą", text: "Publikacja wizerunku zgodnie z RODO" },
        { _key: k("o"), iconName: "sparkles", title: "Czytelna dla Google i asystentów AI", text: "Usługi, miasta i ceny zapisane tekstem" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona wizażystki", value: "3000–6000 zł", note: "projekt w cenie" },
        { _key: k("r"), label: "Portfolio, oferta ślubna, dojazdy, zadatek, kurs online", value: "od 8500 zł", note: "projekt w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: kurs online warszawskiego salonu, strona artysty scenicznego i inne projekty oparte na zdjęciach",
      subtitle:
        "Pierwszy jest Landi Room, salon beauty z Warszawy: strona sprzedająca kurs nanoplastii online, z projektem na zamówienie, płatnością przez Stripe Checkout i osobistym linkiem do nagrań, który wygasa po 14 dniach i nie pozwala ich pobrać — ponad 100 sprzedanych kursów z pierwszej kampanii Google Ads i zero przypadków udostępnienia dalej. Dalej oficjalna strona DJ-a i producenta Sasha Dith: portfolio artysty z wideo i formularzem zapytań, ładujące się w mniej niż sekundę. Do tego projekt premium oparty na zdjęciach gotowych realizacji, widoczność lokalna i Mapy Google dla warszawskiego warsztatu oraz spokojna strona praktyki z Mediolanu prowadzonej pod własnym nazwiskiem.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "e-commerce-landing-page-with-secured-video-access",
        "official-website-for-dj-and-producer-sasha-dith",
        "renovation-and-investment-website-with-premium-design",
        "auto-repair-seo-and-ux-boost",
        "psychotherapist-website-milan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej dla wizażystki",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: proponuję podział portfolio, układ cennika i rezerwacji oraz stałą cenę.",
      contextLabel: "Imię, Instagram lub obecna strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Co masz teraz?", options: ["Tylko Instagram", "Profil w Booksy", "Stronę z kreatora", "Cennik w PDF i link w bio"] },
        { _key: k("z"), question: "Jakich klientek chcesz więcej?", options: ["Panny Młode", "Studniówki i okazje", "Sesje i charakteryzacja", "Lekcje i kursy"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Strona internetowa dla wizażystki to projekt i wykonanie w jednych rękach: układam portfolio, projektuję wygląd, piszę kod, podłączam rezerwację i uruchamiam stronę. Panna Młoda, maturzystka przed studniówką i fotograf szukający osoby do sesji zwykle trafiają najpierw na Twój Instagram. Na stronę wchodzą, gdy chcą sprawdzić cenę, dojazd i wolny termin."),

        h2("Strona internetowa dla wizażystki: co sprawdza Panna Młoda przed pierwszą wiadomością"),
        p("Panna Młoda zaczyna szukać wizażystki zwykle na rok przed ślubem, gdy sala i fotograf są już zarezerwowani. Ma listę kilku nazwisk i przegląda je wieczorem na telefonie. Pierwszy ekran odpowiada jej bez przewijania:"),
        li("jedno zdjęcie makijażu na prawdziwej twarzy, w dziennym świetle"),
        li("kim jesteś i gdzie pracujesz — „Makijaż ślubny i okolicznościowy, Wrocław i Dolny Śląsk, z dojazdem”"),
        li("rodzaje makijażu, które wykonujesz"),
        li("przycisk „Sprawdź wolny termin” i przycisk do telefonu lub WhatsAppa"),
        p("Hasło o „podkreślaniu naturalnego piękna” ma na swoim Instagramie połowa branży. Konkretne zdanie o tym, czym jest Twój makijaż — trwały przez całe wesele, lekki, dobrze wyglądający na zdjęciach z lampą — mówi więcej."),

        h2("Portfolio wizażystki na stronie: makijaż ślubny, okolicznościowy, sesyjny i charakteryzacja osobno"),
        p("Na Instagramie delikatny makijaż ślubny sąsiaduje z mocnym makijażem do sesji i charakteryzacją do teatru. Panna Młoda, która szuka świetlistej cery, gubi się w takiej mieszance. Portfolio na stronie dzieli prace na galerie, każda z krótkim wstępem i przyciskiem. W galerii ślubnej warto pokazać różne typy urody, wiek i karnację, żeby każda klientka znalazła kogoś podobnego do siebie."),
        p("Zbliżenia otwierają się na cały ekran i pozostają ostre, a mimo to strona ładuje się szybko: każde zdjęcie jest przygotowane w kilku rozmiarach i nowoczesnym formacie. Pod zdjęciem podpis — fotograf, fryzjerka, modelka. Jeśli zdjęcie było retuszowane, uczciwa informacja buduje zaufanie bardziej niż idealna skóra."),

        h2("Makijaż ślubny na stronie wizażystki: próba, harmonogram poranka, świadkowa i mamy"),
        p("Pytania Panien Młodych powtarzają się w każdej wiadomości, więc podstrona ślubna odpowiada na nie z góry:"),
        li("co obejmuje makijaż ślubny: próbę, rzęsy, zestaw do poprawek, ewentualną obecność przy pierwszym looku"),
        li("gdzie odbywa się próbny makijaż i ile tygodni przed ślubem najlepiej go umówić"),
        li("ile trwa makijaż jednej osoby i przykładowy harmonogram poranka liczony od godziny ślubu"),
        li("makijaż świadkowej, mam i druhen, ile osób przyjmujesz jednego dnia"),
        li("czy współpracujesz z fryzjerką, która przyjedzie razem z Tobą"),
        p("Na tej samej podstronie krótkie FAQ o alergiach, przygotowaniu skóry i tym, w czym siedzieć do makijażu. Rozmowa na próbie może wtedy dotyczyć samego looku."),

        h2("Cennik makijażu i koszt dojazdu na stronie wizażystki"),
        p("Cennik w PDF albo w wyróżnionej relacji trudno znaleźć i łatwo zapomnieć go zaktualizować. Na stronie jest tekstem, który zmieniasz w panelu: cena „od” za makijaż ślubny, próbny, okolicznościowy, studniówkowy, sesyjny i lekcję, plus to, co ją zmienia: liczba osób, rzęsy, wcześniejsza godzina. Dzięki temu Panna Młoda zna przybliżony koszt, zanim napisze, a Ty nie odpowiadasz dziesięć razy dziennie na to samo pytanie. Dojazd to drugie pytanie po cenie, więc ma osobną część: miasto w cenie, strefy z dopłatą, dopłata za start przed określoną godziną i wyjazdy na śluby w innych regionach wyceniane indywidualnie, z noclegiem."),

        h2("Rezerwacja terminu na stronie wizażystki: kalendarz, zadatek BLIK i umowa"),
        p("Śluby rezerwuje się na datę, nie na godzinę: w sezonie od maja do września większość wizażystek przyjmuje jeden ślub dziennie. Formularz pyta więc o datę, miejscowość, liczbę osób do makijażu i godzinę, na którą wszyscy mają być gotowi. Potwierdzasz, że termin jest wolny, klientka podpisuje umowę i wpłaca zadatek przez BLIK albo Przelewy24 — dopiero wtedy data jest jej. Wysokość zadatku i zasady zmiany daty są widoczne przed wysłaniem formularza."),
        p("Lekcje makijażu i wizyty w pracowni działają na godziny, więc mogą iść przez Booksy albo inny kalendarz z przedpłatą, podlinkowany z podstrony lekcji."),

        h2("Studniówki, sesje i lekcje makijażu na stronie wizażystki: zlecenia poza sezonem ślubnym"),
        p("Między październikiem a kwietniem ślubów jest mało, a kalendarz wypełniają inne zlecenia. Studniówki w styczniu i lutym to dziesiątki maturzystek w kilka weekendów — podstrona z ceną, godzinami i zapisem dla kilku koleżanek naraz oszczędza godziny w wiadomościach. Sesje zdjęciowe i charakteryzacja do filmu czy teatru dostają osobną ścieżkę z portfolio, doświadczeniem z planu i stawką dzienną „do ustalenia”. Lekcje makijażu dla siebie — z kosmetykami klientki, w pracowni lub online — to podstrona z programem i ceną."),
        p(
          "Modelki, które budują własne portfolio, mają osobną ",
          link("stronę internetową dla modelki", "/pl/strona-internetowa-dla-modelki"),
          ".",
        ),

        h2("Kurs makijażu online na stronie wizażystki: sprzedaż nagrań z płatnością i chronionym dostępem"),
        p("Lekcja w pracowni dociera do jednej osoby, a nagrany kurs — do klientek z całej Polski, także tych, do których nigdy nie dojedziesz. Może to być makijaż dzienny dla siebie, przygotowanie skóry przed ślubem albo szkolenie dla początkujących wizażystek. Podstrona kursu mówi, dla kogo jest, pokazuje listę lekcji, krótki fragment i cenę, a płatność przyjmuje Stripe Checkout, który obsługuje też BLIK i Przelewy24."),
        p("Taki mechanizm zbudowałem dla warszawskiego salonu Landi Room, który sprzedaje kurs nanoplastii online. Gdy płatność przejdzie, kupująca od razu dostaje mailem własny link do lekcji: działa przez 14 dni, a filmy można oglądać, ale nie zapisać na dysku. Już pierwsza kampania w Google Ads sprzedała ponad sto kursów, a żaden link nie trafił do osób postronnych. Kurs makijażu działa tak samo — na Twojej stronie, bez osobnej platformy kursowej."),

        h2("Zdjęcia klientek na stronie wizażystki: zgoda na publikację wizerunku i RODO"),
        p("Zdjęcie Panny Młodej to jej wizerunek, więc na stronie pojawia się tylko za jej pisemną zgodą — najprościej dodać ją do umowy jako osobny punkt, z wyborem, gdzie zdjęcie może się pokazać. Zdjęcia od fotografa wymagają też jego zgody i podpisu. Formularz rezerwacji pyta tylko o to, czego potrzebujesz do wyceny, ma klauzulę informacyjną, a analityka startuje dopiero po zgodzie na pliki cookie."),

        h2("Instagram, Booksy, kreator czy własna strona wizażystki"),
        p("Instagram przyciąga uwagę, a Booksy wygodnie obsługuje wizyty na godziny, więc warto z nich korzystać. Przy ślubach widać ich granice: Booksy nie zarezerwuje całego dnia z dojazdem, w profilu stoisz obok konkurencji, a ceny i warunki giną w relacjach. Szablon z kreatora, takiego jak Wix, wystarczy na start: jedno miasto, kilka rodzajów makijażu, cennik na jednej podstronie. Strona na zamówienie opłaca się, gdy portfolio potrzebuje prawdziwych galerii, gdy strefy dojazdu, grupy druhen, zadatki i kurs online wymagają własnej logiki albo gdy obsługujesz też klientki anglojęzyczne. Link w bio prowadzi wtedy do właściwej podstrony, a domena jest zarejestrowana na Ciebie."),
        p(
          "Salon z kilkoma stanowiskami i zespołem ma inne potrzeby, opisane na stronie ",
          link("strona salonu kosmetycznego", "/pl/tworzenie-stron-internetowych-dla-branzy-beauty/strona-salonu-kosmetycznego"),
          ".",
        ),

        h2("Wizażystka w Google: wyniki lokalne, wizytówka i portale ślubne"),
        p("Panny Młode wpisują „makijaż ślubny” z nazwą miasta albo regionu sali. Podstrona dla każdego obszaru, w którym naprawdę pracujesz, z prawdziwymi ślubami stamtąd, daje Google coś do dopasowania. Wizytówka Google działa jako firma z obszarem obsługi, bez publikowania domowego adresu, a opinie w Google i na portalach ślubnych strona linkuje, zamiast je przepisywać. Wspólne śluby z fotografami i salami weselnymi dają też naturalne linki: podpisana sesja na blogu fotografa prowadzi do Twojej strony."),
        p(
          "Jak buduje się pozycje w mapach i opinie, opisuję na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Strona wizażystki, którą czytają ChatGPT i przeglądy AI w Google"),
        p("Coraz więcej klientek pyta asystenta: „wizażystka ślubna w Krakowie z dojazdem do Zakopanego” albo „makijaż na studniówkę Poznań cena”. Asystenci odpowiadają tym, co znaleźli na stronach. Rodzaje makijażu, miasta, strefy dojazdu i ceny „od” są więc wpisane w treść, nie w grafiki; HTML przychodzi z serwera gotowy do czytania; znaczniki schema.org mówią, że jesteś lokalną usługą z obszarem dojazdu; robots.txt wpuszcza wybrane roboty AI. Tak samo zbudowałem stronę Giuseppe, psychoterapeuty z Mediolanu, i ChatGPT przytacza już treści z jego nowych podstron."),
        p(
          "O tym, jak zostać polecaną wizażystką w odpowiedziach AI, piszę na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Ile kosztuje strona internetowa dla wizażystki"),
        li("Prosta strona wizażystki — strona główna, portfolio, makijaż ślubny i okolicznościowy z cennikiem, dojazd, o mnie i formularz daty: od 3000 do 6000 zł."),
        li("Rozbudowana strona z galeriami według rodzaju makijażu, ofertą ślubną, strefami dojazdu, rezerwacją z zadatkiem i umową, podstronami studniówek, sesji i lekcji, kursem online z płatnym wideo oraz podstronami miast: od 8500 zł."),
        p(
          "Projekt graficzny wliczam w cenę. Ogólne zasady mojej pracy znajdziesz na stronie ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ", a pełny cennik usług — w zakładce ",
          link("Cennik", "/pl/cennik"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strona internetowa dla wizażystki: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona internetowa dla wizażystki?", "Prosta strona kosztuje od 3000 do 6000 zł, a rozbudowana — z galeriami według rodzaju makijażu, ofertą ślubną, strefami dojazdu i rezerwacją z zadatkiem — od 8500 zł. W obu przypadkach z projektem graficznym; dokładną kwotę ustalam, gdy opiszesz swoją pracę."],
          ["Czy wizażystka potrzebuje strony, jeśli ma Instagram i Booksy?", "Instagram i Booksy przyprowadzają klientki, a strona zamienia ich zainteresowanie w rezerwację ślubu: cennik z dojazdem, wolne daty, umowa i zadatek są w jednym miejscu. Google i asystenci AI czytają też stronę znacznie lepiej niż profil."],
          ["Czy podawać ceny makijażu ślubnego na stronie?", "Większość Panien Młodych chce znać przynajmniej cenę „od”, zanim napisze. Taki cennik odsiewa zapytania spoza budżetu, a wycenę dla dużej grupy możesz nadal wysyłać w wiadomości."],
          ["Czy klientka może wpłacić zadatek przez stronę?", "Tak — BLIK-iem, kartą albo przez Przelewy24, po potwierdzeniu wolnego terminu. Warunki zadatku i zmiany daty są widoczne przed wysłaniem formularza."],
          ["Czy mogę sprzedawać kurs makijażu na swojej stronie?", "Tak. Podstrona kursu przyjmuje płatność przez Stripe Checkout, także BLIK-iem, i automatycznie wysyła kupującej osobisty link do nagrań. Link może wygasać po ustalonej liczbie dni, a wideo nie da się pobrać — tak działa kurs salonu Landi Room."],
          ["Czy sama dodam nowe zdjęcia do portfolio?", "Tak. Nowa praca to krótki formularz w panelu: galeria, zdjęcia, podpis fotografa i zdanie opisu. Strona sama zmniejsza zdjęcia i układa je w odpowiedniej galerii."],
          ["Czy na stronie mogą być zdjęcia moich klientek?", "Tak, za ich pisemną zgodą na publikację wizerunku — najlepiej jako osobny punkt umowy. Zdjęcia od fotografa publikujesz z jego zgodą i podpisem."],
          ["Jak wygląda współpraca zdalna?", "Wszystko załatwiamy online, niezależnie od Twojego miasta: krótkie rozmowy wideo, komentarze wpisywane w projekt i zdjęcia na wspólnym dysku. Po uruchomieniu dostajesz krótką instrukcję i nagrania z obsługi panelu."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową dla wizażystki: co mi wysłać"),
        p(
          "Wyślij link do Instagrama, Booksy lub obecnej strony, rodzaje makijażu, które wykonujesz, cennik, miasta i strefy dojazdu, sposób przyjmowania zadatku, informację, czy prowadzisz lekcje lub planujesz kurs, i 15–20 zdjęć, od których ma zaczynać się portfolio. W odpowiedzi dostaniesz proponowaną listę podstron i stałą cenę. Napisz przez ",
          link("formularza powyżej", "#quote"),
          " lub bezpośrednio na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
