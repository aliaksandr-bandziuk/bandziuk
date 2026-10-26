// Landing page fixture: Strona internetowa dla modelki (PL), group
// «website-design-for-models». REWRITE of the existing general page
// /pl/strona-internetowa-dla-modelki — URL stays, the old reviews block is
// removed. Market version for Polish modelki i modele (modowi, komercyjni,
// e-commerce, fitness, wybiegowi) and new faces; not a translation of
// website-design-for-models.en.
// Semantic core: BRIEF.md target phrases — «strona internetowa dla modelki»
// (H1, H2s, cost H2, FAQ), «portfolio modelki online» (metaTitle, portfolio
// H2), «strona dla modela» (templates H2, intro). PL tools give no volumes
// for these phrases; EN reference: modeling portfolio website 720, model
// portfolio website 320, model website design 170, modeling portfolio
// examples 1,300.
// Intent: ref/intent-check-adult.md — PL «strona dla modelki» top 10 =
// agencje modelingowe (agencja500, mangomodels, maxima-models, basemodel,
// go-models) + Reddit/Facebook → people searching an agency, not a site
// builder. ref/adult.md related searches: agencje modelingowe Warszawa,
// casting modeling Warszawa, agencja modeli dla mężczyzn → the page opens with
// how an own portfolio site helps when applying to agencies and castings.
// Polish angles: zgłoszenie do agencji (polaroidy, wzrost, miasto — one link),
// agencja macierzysta i agencje za granicą; karta modelki (comp card / zed
// card) w cm z przeliczeniem na cale; sesje e-commerce dla sklepów
// internetowych, kampanie, fitness, pokazy; zapytania o zlecenie z polami
// eksploatacji i czasem licencji wizerunku; prawa autorskie fotografa,
// embargo kampanii, RODO, brak adresu domowego; wideo-przedstawienie i
// przejście; Instagram, Canva, Wix, Format, Portfoliobox vs strona na
// zamówienie; wyniki Google dla imienia i nazwiska; wersja angielska na
// castingi za granicą; strona czytelna dla AI; koszt.
// Portfolio: Sasha Dith (wideo, formularz, poniżej sekundy), konsultantka
// analityki retail (153 podstrony w trzech językach, kalkulatory, szablony —
// bez nazwy pracodawcy), Giuseppe (marka osobista, podstrony w ChatGPT),
// warszawska firma remontowa (projekt premium oparty na zdjęciach), moja
// własna strona (Next.js + Sanity, techniczne SEO).
// Prices: /pl/cennik — 3000–6000 zł, od 8500 zł, projekt w cenie.
// NOT on this page: any adult topic and links to adult pages (owner’s rule);
// strony agencji modelek; giełdy zleceń i scouting; osoby niepełnoletnie poza
// jednym zdaniem o rodzicu; fotografowie (linked once), wizażystki (linked
// once); stała kampania SEO.
// Owner’s rules: every page covers AI search; never say there are no clients
// from the visitor’s industry.
import { p, h2, h3, li, link, k } from "./pt";

export const websiteDesignForModelsPl = {
  lang: "pl",
  group: "website-design-for-models",
  slug: "strona-internetowa-dla-modelki",
  title: "Strona internetowa dla modelki",
  heading: "Strona internetowa dla modelki i modela",
  excerpt:
    "Strona internetowa dla modelki i modela — projekt i wykonanie w jednych rękach: portfolio podzielone na sesje modowe, komercyjne, e-commerce, fitness i pokazy, aktualne polaroidy, karta modelki z wymiarami, link do agencji i formularz zapytań, który od razu pyta o termin i zakres wykorzystania wizerunku.",
  seo: {
    metaTitle: "Portfolio modelki online — strona www | Bandziuk",
    metaDescription:
      "Strona internetowa dla modelki: portfolio online według rodzaju sesji, polaroidy, karta z wymiarami, link do agencji, wersja angielska na castingi. Od 3000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt + wykonanie, jedna cena", "Od 3000 zł", "Polaroidy, wymiary, agencja"],
  heroPhonePoints: ["Polaroidy z tego miesiąca", "Wzrost 176 cm, Warszawa", "Agencja macierzysta", "Zapytaj o termin sesji"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona internetowa dla modelki lub modela, projekt w cenie", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Strona modelki z portfolio według rodzaju sesji, polaroidami, kartą modelki w PDF, wideo, podstroną agencji, formularzem zleceń i wersją angielską, projekt w cenie", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co dostajesz ze stroną internetową dla modelki",
      items: [
        { _key: k("o"), iconName: "image", title: "Portfolio według rodzaju sesji", text: "Moda, reklama, e-commerce, fitness, pokazy" },
        { _key: k("o"), iconName: "layers", title: "Polaroidy z datą wykonania", text: "Nowy zestaw wgrywasz sama z telefonu" },
        { _key: k("o"), iconName: "file-text", title: "Karta modelki online", text: "Wymiary w cm i calach, PDF zawsze aktualny" },
        { _key: k("o"), iconName: "message-circle", title: "Zapytania o zlecenie", text: "Termin, rodzaj sesji, pola eksploatacji" },
        { _key: k("o"), iconName: "shield-check", title: "Wizerunek i prywatność", text: "Bez adresu domowego, zdjęcia bez lokalizacji" },
        { _key: k("o"), iconName: "sparkles", title: "Twoje nazwisko w Google i w AI", text: "Agencja, miasto i wymiary zapisane tekstem" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona modelki lub modela", value: "3000–6000 zł", note: "projekt w cenie" },
        { _key: k("r"), label: "Portfolio, polaroidy, karta, wideo, wersja angielska", value: "od 8500 zł", note: "projekt w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: strona artysty z galerią wideo, marki osobiste i projekty oparte na zdjęciach",
      subtitle:
        "Pierwsza jest strona Sasha Dith, DJ-a i producenta, zbudowana na Next.js według jego projektu w Figmie: galeria wideo, formularz zapytań o występy i współpracę, ładowanie w mniej niż sekundę. Dalej osobista strona konsultantki analityki handlu — 153 podstrony w trzech językach, kalkulatory i szablony — oraz strona Giuseppe, psychoterapeuty z Mediolanu, ze spokojnym projektem pod jego nazwiskiem, której podstrony cytuje ChatGPT. Do tego projekt premium oparty na zdjęciach gotowych realizacji dla warszawskiej firmy remontowo-inwestycyjnej i moja własna strona na Next.js i Sanity, na której sprawdzam techniczne SEO decydujące o tym, co Google pokazuje po wpisaniu imienia i nazwiska.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "official-website-for-dj-and-producer-sasha-dith",
        "consultant-website-design-retail-analytics",
        "psychotherapist-website-milan",
        "renovation-and-investment-website-with-premium-design",
        "develop-and-optimize-a-personal-website-with-seo",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej dla modelki lub modela",
      subtitle: "W ciągu jednego dnia roboczego dostaniesz plan podstron — portfolio, polaroidy, karta, agencja, kontakt — i stałą cenę.",
      contextLabel: "Imię i nazwisko, Instagram lub profil w agencji",
      contextPlaceholder: "Link lub nazwisko",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Na jakim jesteś etapie?", options: ["Szukam agencji", "Mam agencję macierzystą", "Pracuję bez agencji", "Pracuję też za granicą"] },
        { _key: k("z"), question: "Jakich zleceń chcesz więcej?", options: ["Sesje modowe i edytorialowe", "Reklama i e-commerce", "Fitness i odzież sportowa", "Pokazy"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Strona internetowa dla modelki i modela to usługa, którą wykonuję od początku do końca sam: plan podstron, projekt graficzny, kod i uruchomienie. Robię takie strony dla osób pracujących w modzie, reklamie, sesjach e-commerce, fitnessie i na pokazach — zarówno dla tych, które już mają agencję, jak i dla tych, które dopiero chcą się do niej dostać."),

        h2("Strona internetowa dla modelki a agencja modelingowa: jak własne portfolio pomaga w zgłoszeniu"),
        p("Kto wpisuje w Google „strona dla modelki”, dostaje głównie listę agencji modelingowych. To zrozumiałe: na początku drogi szuka się agencji, nie strony. Ale agencja przy zgłoszeniu pyta zawsze o to samo — aktualne zdjęcia bez makijażu, wzrost, wymiary, wiek i miasto — i chce to zobaczyć szybko. Jeden link do porządnej strony załatwia całe zgłoszenie: booker otwiera go na telefonie i w kilka sekund widzi, czy Twój typ urody pasuje do jego tablicy."),
        p("Gdy masz już agencję macierzystą, strona nie konkuruje z jej profilem, tylko go uzupełnia. Agencja jest wymieniona na każdej podstronie z linkiem do Twojej karty na jej stronie, a agencje partnerskie w innych krajach — pod nią. Klient, który trafi na Ciebie przez Instagram, od razu wie, z kim rozmawiać o zleceniu."),
        p("Dla osób poniżej 18 lat umowę podpisuje i stroną zarządza rodzic."),

        h2("Polaroidy i karta modelki online: aktualne zdjęcia i wymiary w jednym miejscu"),
        p("Polaroidy, w agencjach często nazywane digitalami, pokazują Cię taką, jaka jesteś teraz: dzienne światło, bez retuszu, minimum makijażu, proste dopasowane ubranie, ujęcia z przodu, z profilu, cała sylwetka i portret. Agencje i klienci ufają im bardziej niż sesjom, dlatego na stronie mają osobną podstronę z datą wykonania. Nowy zestaw wgrywasz z panelu w kilka minut."),
        p("Karta modelki — comp card albo zed card — przestaje być plikiem, który krąży w starych mailach. Na stronie to podstrona z czterema–pięcioma zdjęciami i wymiarami: wzrost, biust lub klatka, talia, biodra, rozmiar ubrania, długość nogawki, rozmiar buta, kolor włosów i oczu. Wymiary wpisujesz w centymetrach, a strona pokazuje je też w calach dla klientów z zagranicy i sama przygotowuje aktualny PDF do wysłania."),

        h2("Portfolio modelki online: sesje modowe, reklamowe, e-commerce, fitness i pokazy osobno"),
        p("W Polsce dużą część pracy modelek i modeli dają sesje e-commerce dla sklepów internetowych i kampanie reklamowe, a nie tylko edytoriale. Klient szukający naturalnej, uśmiechniętej osoby do zdjęć produktowych i redakcja szukająca mocnego, modowego wizerunku nie powinni przeglądać tej samej mieszanki. Portfolio dzieli się więc na galerie — moda i edytoriale, reklama i e-commerce, fitness i odzież sportowa, pokazy — a każda ma krótki, przemyślany wybór."),
        p("Pod zdjęciami są podpisy: fotograf, stylista, fryzjer i wizażysta, klient lub magazyn — o ile publikacja już się ukazała. Sesje testowe są oznaczone jako testy. Duże zdjęcia zostają ostre, a strona lekka, bo każde zdjęcie zapisuje się w kilku rozmiarach i nowoczesnym formacie, a kolejne doczytują się podczas przewijania."),

        h2("Przykłady portfolio modelek: co łączy dobre strony modelek i modeli"),
        p("Kto szuka przykładów portfolio modelek, trafia głównie na galerie szablonów i koncepcje graficzne. Strony, z których bookerzy naprawdę korzystają, mają kilka prostych cech wspólnych:"),
        li("krótki wybór 15–25 zdjęć zamiast wszystkiego z ostatnich lat"),
        li("polaroidy sprzed najwyżej kilku miesięcy, z datą"),
        li("wymiary obok zdjęć, a nie na podstronie schowanej w menu"),
        li("jedno zdanie o agencji i jedna droga kontaktu"),
        li("najnowsze sesje na początku, nawet jeśli starsza kampania była głośniejsza"),
        p("Galerie projektów na Behance czy Dribbble rzadko pokazują polaroidy i wymiary — pokazują układ. Warto czerpać z nich nastrój, a każdy pomysł sprawdzić pod kątem tego, czego booker szuka w pierwszych sekundach."),

        h2("Zapytania o zlecenie na stronie modelki: termin, rodzaj sesji i pola eksploatacji"),
        p("Jeśli pracujesz przez agencję, przycisk kontaktu prowadzi do Twojego bookera, z imieniem i nazwiskiem w temacie wiadomości. Jeśli pracujesz bez agencji, formularz zbiera to, czego potrzebujesz do wyceny:"),
        li("termin i miasto sesji, liczba godzin lub stylizacji"),
        li("rodzaj zlecenia: e-commerce, kampania, pokaz, edytorial"),
        li("pola eksploatacji wizerunku — sklep internetowy, social media, druk, outdoor — i czas licencji"),
        li("budżet albo informacja, że czekasz na wycenę"),
        p("Takie zapytanie od razu nadaje się do odpowiedzi, a różnica między zdjęciami tylko do sklepu a kampanią na billboardach jest jasna, zanim podasz stawkę."),

        h2("Wideo na stronie modelki: przejście, wideo-przedstawienie i self-tape"),
        p("Castingi coraz częściej proszą o krótkie wideo-przedstawienie: imię, wzrost, agencja, miasto, kilka zdań do kamery. Modelki pokazowe dodają nagranie przejścia, fitness — krótki fragment w ruchu, a reklama — self-tape. Na stronie każde wideo stoi za lekkim kadrem, a odtwarzacz wczytuje się dopiero po kliknięciu. Tak działa galeria wideo na stronie Sasha Dith, którą zbudowałem: mimo filmów strona otwiera się w mniej niż sekundę."),

        h2("Wizerunek, prawa do zdjęć i prywatność na stronie modelki"),
        p("Zdjęcie z sesji to praca fotografa, więc na stronie pojawia się z jego zgodą i podpisem. Zdjęcia z kampanii mogą mieć embargo albo ograniczenia w umowie z klientem — publikujesz je dopiero wtedy, gdy wolno. Formularz kontaktowy ma klauzulę informacyjną RODO, a analityka startuje po zgodzie na pliki cookie."),
        h3("Prywatność modelki w sieci: miasto zamiast adresu"),
        p("Strona podaje miasto, w którym pracujesz, nigdy adres domowy. Przy wgrywaniu ze zdjęć znikają dane o lokalizacji, adres e-mail jest ukryty za formularzem, a podstrona z polaroidami może mieć adres, który wysyłasz tylko agencjom i klientom."),

        h2("Instagram, Canva, Wix czy własna strona dla modelki i modela"),
        p("Instagram pokazuje charakter i bieżące sesje, i bookerzy go oglądają. Kolejność zdjęć ustala jednak algorytm, wymiary nie mieszczą się w bio, a liczba obserwujących odciąga uwagę od samych zdjęć. Canva, Wix, Format i Portfoliobox dają szablony portfolio — na start, z jedną sesją testową, to rozsądne rozwiązanie. Strona dla modela czy modelki robiona na zamówienie opłaca się, gdy potrzebujesz polaroidów i wymiarów aktualizowanych w minutę, karty PDF z tych samych danych, wideo, które nie spowalnia strony, wersji angielskiej i kontroli nad tym, co widać w Google. Domenę rejestrujesz na siebie, nie na agencję ani fotografa."),

        h2("Portfolio modelki w Google: co widać po wpisaniu imienia i nazwiska"),
        p("Po castingu klient wpisuje Twoje imię i nazwisko. Bez strony na górze bywa stary profil w agencji, oznaczone zdjęcie albo ktoś o tym samym nazwisku. Własna strona daje wyszukiwarce jedno jasne źródło: imię i nazwisko w tytułach i nagłówkach, dane strukturalne osoby z linkami do profilu w agencji i Instagrama oraz krótkie bio zapisane tekstem. Tę samą konfigurację techniczną stosuję na swojej stronie, zbudowanej na Next.js i Sanity."),
        p(
          "Jeśli masz już stronę, której nie widać po nazwisku, przyczyny pokaże ",
          link("audyt SEO strony internetowej", "/pl/oferty/audyt-seo-strony-internetowej"),
          ".",
        ),

        h2("Strona modelki po polsku i angielsku na castingi za granicą"),
        p("Kontrakty w Mediolanie, Paryżu, Londynie czy Azji zaczynają się od tego, że zagraniczna agencja otwiera link. Wersja angielska jest więc potrzebna każdemu, kto myśli o pracy poza Polską, a polska zostaje dla rodzimych klientów. Każdy język ma własne adresy podstron i znaczniki hreflang, a wymiary zmieniają jednostki razem z językiem. Strona konsultantki analityki handlu, którą zbudowałem, ma 153 podstrony w trzech językach i działa na tej samej zasadzie."),
        p(
          "Jak planuję wersje językowe, opisuję na stronie ",
          link("tworzenie stron wielojęzycznych", "/pl/oferty/tworzenie-stron-wielojezycznych"),
          ".",
        ),

        h2("Strona modelki, którą czytają ChatGPT i przeglądy AI w Google"),
        p("Bookerzy i marki wpisują dziś w asystentach AI pytania w rodzaju „modelka fitness w Warszawie do sesji odzieży sportowej” albo „jaka agencja reprezentuje tę modelkę”. ChatGPT i przeglądy AI w Google powtarzają tylko to, co przeczytały. Imię i nazwisko, miasto, agencja, wzrost, rodzaje zleceń i języki są więc zapisane tekstem, serwer wysyła gotowy HTML, znaczniki schema.org opisują Cię jako osobę powiązaną z agencją, a robots.txt wpuszcza wybrane roboty AI. Tak zbudowałem stronę Giuseppe, psychoterapeuty z Mediolanu, i jego podstrony pojawiają się już w odpowiedziach ChatGPT."),
        p(
          "Stałą pracę nad tym, by asystenci AI wymieniali Twoje nazwisko, opisuję na podstronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Ile kosztuje strona internetowa dla modelki"),
        li("Prosta strona modelki lub modela — strona główna, portfolio, polaroidy, wymiary, agencja i kontakt: od 3000 do 6000 zł."),
        li("Rozbudowana strona z galeriami według rodzaju sesji, polaroidami z datą, kartą modelki w PDF, wideo, formularzem zleceń i wersją angielską: od 8500 zł."),
        p(
          "Projekt graficzny jest wliczony w cenę. Jak pracuję nad każdą stroną, opisuje podstrona ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ". Fotografowie, z którymi robisz sesje testowe, mają osobną ",
          link("stronę dla fotografa", "/pl/strona-dla-fotografa"),
          ", a wizażystki — ",
          link("stronę internetową dla wizażystki", "/pl/strona-internetowa-dla-wizazystki"),
          ". Wszystkie ceny są w ",
          link("cenniku", "/pl/cennik"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strona internetowa dla modelki: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona internetowa dla modelki?", "Prosta strona kosztuje od 3000 do 6000 zł, rozbudowana — z galeriami według rodzaju sesji, polaroidami, kartą w PDF, wideo i wersją angielską — od 8500 zł. Projekt graficzny jest w obu kwotach; stałą cenę podaję, gdy wiem, jakich podstron potrzebujesz."],
          ["Czy strona pomoże mi dostać się do agencji modelingowej?", "Decyzję podejmuje agencja, ale strona ułatwia jej pracę: zamiast kilku zdjęć w mailu booker dostaje jeden link z aktualnymi polaroidami, wymiarami i miastem. Takie zgłoszenie łatwo przejrzeć i przesłać dalej."],
          ["Po co mi strona, skoro agencja ma mój profil?", "Profil należy do agencji i zmienia się albo znika, gdy zmieniasz agencję. Własna strona zostaje pod tym samym adresem, linkuje do agencji i pokazuje to, czego profil nie mieści: wideo, pełne podpisy i więcej galerii."],
          ["Czy sama zaktualizuję polaroidy i wymiary?", "Tak. Nowe polaroidy to wgranie zdjęć z datą, wymiary to pola w panelu. Strona sama pokazuje je w centymetrach i calach i odświeża kartę modelki w PDF."],
          ["Czy mogę pokazać na stronie zdjęcia z kampanii?", "Tak, gdy pozwala na to umowa z klientem i minęło ewentualne embargo. Zdjęcia z sesji publikujesz za zgodą fotografa i z jego podpisem."],
          ["Czy strona może być po angielsku?", "Tak, i warto, jeśli myślisz o pracy za granicą. Wersja angielska ma własne adresy podstron, a wymiary pokazują się w calach."],
          ["Jak wygląda współpraca zdalna?", "Rozmawiamy przez wideo, uwagi wpisujesz bezpośrednio w projekcie, a zdjęcia wrzucasz na wspólny dysk. Siedzę w Warszawie, ale miasto klientki nie ma znaczenia; rozliczam się fakturą z mojej jednoosobowej firmy."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową dla modelki: co mi wysłać"),
        p(
          "Wyślij imię i nazwisko, link do Instagrama i profilu w agencji, jeśli go masz, rodzaje zleceń, które wykonujesz, aktualne wymiary i polaroidy, 15–25 zdjęć do portfolio z podpisami, nagrania wideo, jeśli są, i informację, czy pracujesz też za granicą. W odpowiedzi dostaniesz plan podstron i stałą cenę. Napisz przez ",
          link("formularz powyżej", "#quote"),
          " lub na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
