// Landing page fixture: Strona internetowa domu opieki (PL), group
// «senior-living-website-design». New page, batch B. Market version for Polish
// private domy opieki and domy seniora — written for Poland, not a translation
// of senior-living-website-design.en. In PL this is a development page that
// includes design (projekt graficzny w cenie).
// Semantic core: ref/medical-practices.md has no measured PL phrases; heading
// phrases from BRIEF.md: «strona internetowa domu opieki» (H1, H2s, cost H2),
// «strona dla domu seniora» (metaTitle, H2s), «strona prywatnego domu opieki».
// Intent: ref/intent-check-medical-practices.md — «pozycjonowanie domu opieki»
// vs «strona dla domu seniora» 0 of 10 shared URLs, 0 shared domains →
// separate pages; SEO is /pl/pozycjonowanie-strony-domu-opieki (sibling, linked).
// The «strona dla domu seniora» top 10 is directories (domyopieki.pl,
// domyseniora.pl, krdo.pl, kido.org.pl, altru.pl) and homes’ own sites
// (villadlaseniora.pl, centrumseniora.pl, domseniora-krakow.pl) → mixed
// intent; the page is written for the owner of a home, as the brief sets.
// Polish angles: dwie osoby czytają stronę (dziecko i senior); prawdziwe
// zdjęcia i film, zgoda na wizerunek mieszkańców; podstrona dla każdego
// rodzaju opieki; cennik tekstem (co w cenie, co dodatkowo); zezwolenie
// wojewody i personel; wizyta w domu i rozmowa wideo; RODO i dane o zdrowiu;
// WCAG; rodziny za granicą i seniorzy z innych krajów (wersje językowe);
// kreator vs projekt na zamówienie; przebudowa bez utraty adresów (Giuseppe);
// AI-readable build. NDA medical system mentioned once.
// NOT on this page: frazy, wizytówka Google, katalogi vs własna strona, DPS/ZOL
// comparison, opinie (/pl/pozycjonowanie-strony-domu-opieki); strony lekarzy i
// przychodni (/pl/strona-internetowa-dla-lekarza).
// Prices: /pl/cennik — 3000–6000 zł, od 8500 zł, projekt graficzny w cenie.
// Owner’s rules: every page covers AI search; Giuseppe is the main case;
// never say there are no clients from the visitor’s industry.
import { p, h2, li, ol, link, k } from "./pt";

export const seniorLivingWebsiteDesignPl = {
  lang: "pl",
  group: "senior-living-website-design",
  slug: "strona-internetowa-domu-opieki",
  title: "Strona internetowa domu opieki",
  heading: "Strona internetowa domu opieki",
  excerpt:
    "Tworzę strony internetowe domów opieki i prywatnych domów seniora: prawdziwe zdjęcia i film z domu, osobna podstrona dla każdego rodzaju opieki, cennik podany tekstem, umówienie wizyty w kilku dotknięciach i duży, czytelny tekst — dla dzieci, które wybierają dom dla rodzica, i dla samych seniorów.",
  seo: {
    metaTitle: "Strona dla domu seniora od 3000 zł | Bandziuk",
    metaDescription:
      "Strona internetowa domu opieki: rodzaje opieki, zdjęcia i film z domu, cennik tekstem, umówienie wizyty, RODO i dostępność. Projekt w cenie, od 3000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt + wykonanie, jedna cena", "Od 3000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Umów wizytę w domu", "Pokoje i ogród", "Cennik pobytu", "Zadzwoń · WhatsApp"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona internetowa domu opieki lub domu seniora", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Strona domu opieki z podstronami rodzajów opieki, cennikiem, personelem, filmem, umawianiem wizyt i wersjami językowymi", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co dostajesz ze stroną internetową domu opieki",
      items: [
        { _key: k("o"), iconName: "image", title: "Prawdziwe pokoje, ogród i posiłki", text: "Zdjęcia w dziennym świetle i film z przejściem po domu" },
        { _key: k("o"), iconName: "layers", title: "Podstrona dla każdego rodzaju opieki", text: "Demencja, osoby leżące, pobyt czasowy" },
        { _key: k("o"), iconName: "file-text", title: "Cennik tekstem, nie grafiką", text: "Co jest w cenie, a co płatne osobno" },
        { _key: k("o"), iconName: "phone", title: "Wizyta w domu w kilku dotknięciach", text: "Telefon, WhatsApp, rozmowa wideo, formularz" },
        { _key: k("o"), iconName: "shield-check", title: "Formularze bez danych o zdrowiu", text: "RODO od pierwszego projektu" },
        { _key: k("o"), iconName: "sparkles", title: "Czytelna dla Google i asystentów AI", text: "Opieka, ceny i zezwolenie zapisane tekstem" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona domu opieki", value: "3000–6000 zł", note: "projekt w cenie" },
        { _key: k("r"), label: "Rodzaje opieki, cennik, personel, film, wizyty, języki", value: "od 8500 zł", note: "projekt w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: spokojna strona praktyki medycznej i inne strony, które zaprojektowałem i zbudowałem",
      subtitle:
        "Dla Giuseppe, psychoterapeuty z Mediolanu, zaprojektowałem i zbudowałem spokojną stronę dla osób, które często trafiają na nią w niepokoju. To prywatna praktyka medyczna: system zarządzania treścią ostrzega przed sformułowaniami, których zabrania kodeks zawodowy, gabinety są na mapie, a 468 starych wpisów bloga zachowało swoje adresy. Obok: warszawska firma remontowa i inwestycyjna z eleganckim projektem, Cyprus VIP Estates z katalogiem ofert, mapą i filmami, wielojęzyczna strona agencji edukacyjnej działającej w dziesięciu krajach i strona, na której właściciel sam zmienia teksty SEO. Strona domu opieki potrzebuje tych samych umiejętności: spokojnego tonu, dobrze pokazanych prawdziwych miejsc i treści, które personel aktualizuje bez pomocy.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "psychotherapist-website-milan",
        "renovation-and-investment-website-with-premium-design",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "full-multilingual-website-development-and-seo-for-student-services",
        "tyre-storage-landing-page-with-editable-seo",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej domu opieki",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: proponuję układ trzech podstron — główna, opieka, cennik — i stałą cenę.",
      contextLabel: "Nazwa domu lub obecna strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Czy macie już stronę?", options: ["Nie mamy strony", "Mamy stronę z kreatora", "Mamy stronę, ale przestarzałą", "Mamy tylko profil w katalogu"] },
        { _key: k("z"), question: "Ile domów obejmie strona?", options: ["Jeden dom", "Dwa lub trzy domy", "Więcej"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Tworzę strony internetowe domów opieki i prywatnych domów seniora — od układu podstron i projektu po wykonanie i uruchomienie — więc za to, jak strona wygląda i działa, odpowiada jedna osoba. Stronę domu opieki czytają zwykle dwie osoby: córka lub syn, którzy porównują kilka domów na telefonie, i senior, któremu ktoś pokaże ją później na tablecie. Projekt musi być jasny dla pierwszej i życzliwy dla drugiej."),

        h2("Strona internetowa domu opieki: co rodzina musi znaleźć, zanim zadzwoni"),
        p("Pierwszy ekran odpowiada na cztery pytania, w tej kolejności:"),
        li("jaki to dom i gdzie — „Prywatny dom opieki całodobowej pod Lublinem”, a nie „Tu poczujesz ciepło domu”"),
        li("jaką opiekę zapewniacie: całodobową, dla osób z demencją, dla osób leżących, pobyty czasowe"),
        li("czy są wolne miejsca i od jakiej kwoty zaczyna się cena"),
        li("jak umówić wizytę w domu albo rozmowę: telefon, WhatsApp, formularz"),
        p("Menu ma kilka krótkich pozycji, nazwanych tak, jak pytają rodziny: Opieka, Pokoje i dzień w domu, Cennik, Personel, Wizyta, Kontakt. Na telefonie przyciski „Zadzwoń” i „Umów wizytę” są przypięte u dołu ekranu na każdej podstronie."),

        h2("Zdjęcia i film z domu seniora na stronie: prawdziwe pokoje, posiłki i ogród"),
        p("Zanim rodzina przyjedzie, chce sprawdzić rzeczy, o które głupio pytać przez telefon: czy pokój ma własną łazienkę, czy w budynku jest winda, gdzie mama będzie jeść. Zdjęcia z banku zdjęć na te pytania nie odpowiadają. Na stronie są więc:"),
        li("zdjęcia pokoi jedno- i dwuosobowych z łóżkiem i łazienką przystosowaną dla osoby na wózku, zrobione w dziennym świetle"),
        li("budynek z zewnątrz: podjazd, wejście bez progów, winda albo parter, ogród i taras"),
        li("film z przejściem przez dom dla rodzeństwa, które mieszka w innym mieście"),
        li("jadłospis z dietami, które dom prowadzi — cukrzycowa, lekkostrawna, papkowata — i plan zajęć aktualizowany przez personel"),
        p("Wizerunek mieszkańców wymaga ich zgody albo zgody osoby do tego uprawnionej; przy osobach z demencją bezpieczniej pokazywać przestrzenie i personel. Treść zgody warto skonsultować z prawnikiem."),

        h2("Rodzaje opieki na stronie domu opieki: osobna podstrona dla każdego"),
        p("Opieka nad osobą z demencją, nad osobą leżącą po udarze i pobyt wytchnieniowy to różne decyzje, często różnych rodzin. Każdy rodzaj opieki dostaje podstronę o tym samym układzie, żeby łatwo było je porównać: dla kogo jest, jak wygląda doba, kto czuwa w nocy, dostęp do pielęgniarki, lekarza i rehabilitacji, przebieg przyjęcia, cena od i przycisk wizyty."),
        p("Na podstronie o demencji rodziny szukają odpowiedzi na najtrudniejsze pytania: co się dzieje, gdy tata próbuje wyjść w nocy, czy może zabrać swój fotel i zdjęcia, jak wyglądają pierwsze tygodnie adaptacji. Projekt jest tu najspokojniejszy na całej stronie — stonowane kolory, krótkie akapity, żadnych liczników wolnych miejsc — bo czyta go ktoś, kto często podejmuje tę decyzję z poczuciem winy."),

        h2("Cennik na stronie prywatnego domu opieki: co jest w cenie, a co dodatkowo"),
        p("Cennik to podstrona, której rodziny szukają najpierw. Projektuję go jako prostą tabelę tekstem, nie grafiką ani plikiem PDF: cena miesięczna od, osobno dla pokoju jednoosobowego i dwuosobowego, potem wiersze z tym, co obejmuje — zakwaterowanie, posiłki, pielęgnacja, pranie, zajęcia — i z tym, co płatne osobno. Krótka notka o tym, od czego zależy kwota końcowa, uprzedza pytanie, które i tak padnie przez telefon, a rodzina, która widzi realną kwotę, chętniej umawia wizytę."),

        h2("Zezwolenie wojewody, personel i lekarz na stronie domu seniora"),
        p("Zaufanie do domu to zaufanie do ludzi. Podstrona personelu ze zdjęciami i krótkim opisem kierownika, pielęgniarki koordynującej, fizjoterapeuty i opiekunów odpowiada na pytanie, które rodziny zadają przy każdej wizycie: kto zajmie się mamą. Numer zezwolenia wojewody i informacja o wpisie do rejestru są tekstem w stopce i na podstronie o domu. Jeśli dom współpracuje z lekarzem, warto napisać, jak często przyjmuje na miejscu. Jakie informacje musicie publikować, potwierdźcie w urzędzie wojewódzkim albo u prawnika — sprawdźcie aktualne zasady."),

        h2("Umówienie wizyty w domu opieki: telefon, rozmowa wideo i formularz zgodny z RODO"),
        p("Wizyta w domu to moment decyzji, dlatego przycisk „Umów wizytę” jest na każdej podstronie. Za nim jest kalendarz z wolnymi terminami albo krótki formularz, po którym kierownik oddzwania. Rodziny z daleka mogą wybrać rozmowę wideo, w czasie której kierownik przechodzi z telefonem przez dom."),
        p("Formularz pyta o imię, telefon, rodzaj opieki i preferowany termin. Nie pyta o choroby ani leki — to temat rozmowy z pielęgniarką przed przyjęciem. Dane o zdrowiu seniora to w RODO szczególna kategoria, więc formularze, które muszą je zbierać, działają przez dostawcę z umową powierzenia, a analityka nie dostaje danych z formularzy. Pracowałem kiedyś przy systemie medycznym z dokumentacją pacjentów — umowa o poufności nie pozwala mi podać szczegółów — i wyniosłem z tego prostą regułę: publiczna strona ma wiedzieć o zdrowiu jak najmniej. Ostateczną ocenę zgodności daje inspektor ochrony danych albo prawnik."),

        h2("Dostępność strony domu seniora: duży tekst, kontrast i WCAG"),
        p("Ze strony korzystają też sami seniorzy i ich rówieśnicy, często słabiej widzący. Projekt od pierwszego szkicu trzyma się wytycznych WCAG:"),
        li("tekst podstawowy większy niż na typowej stronie, z kontrastem na poziomie AA"),
        li("duże przyciski z odstępami, łatwe do trafienia niepewną ręką"),
        li("żadnych karuzel przewijających się samoczynnie i żadnego tekstu na zdjęciach"),
        li("film z napisami, formularz z widocznymi etykietami i zrozumiałymi komunikatami błędów"),

        h2("Strona domu opieki dla rodzin z zagranicy i seniorów z innych krajów"),
        p(
          "Część rodzin wybiera dom dla rodzica, mieszkając za granicą: strona po polsku im wystarcza, ale film, rozmowa wideo i WhatsApp muszą być widoczne od razu. Niektóre domy przyjmują też seniorów z Niemiec czy z Ukrainy. Wtedy wersja językowa ma własne adresy, przetłumaczony cennik i podstrony opieki oraz informację, kto z personelu mówi w danym języku. Więcej o takich stronach na stronie ",
          link("tworzenie stron wielojęzycznych", "/pl/oferty/tworzenie-stron-wielojezycznych"),
          ".",
        ),

        h2("Strona internetowa domu opieki, którą ChatGPT i Google AI Overviews potrafią przeczytać"),
        p("Rodziny pytają asystentów AI, który dom w okolicy przyjmuje osoby leżące albo ile kosztuje miesiąc pobytu. Asystent poleci tylko dom, o którym przeczyta konkretne fakty. Dlatego w kodzie strony fakty o domu — rodzaje opieki, liczba miejsc, cena od, zezwolenie, adres, godziny odwiedzin — są zwykłym tekstem i znacznikami danych strukturalnych, identycznymi jak w Mapach Google. Tak zbudowałem stronę Giuseppe, psychoterapeuty z Mediolanu, i jego nowe podstrony już pojawiają się w odpowiedziach ChatGPT."),
        p(
          "Dalsza praca nad widocznością w AI opisana jest na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ", a widoczność w Google — na stronie ",
          link("pozycjonowanie domu opieki", "/pl/pozycjonowanie-strony-domu-opieki"),
          ".",
        ),

        h2("Strona domu opieki z kreatora czy projekt na zamówienie"),
        p("Kreator stron albo gotowy szablon pozwala uruchomić stronę w kilka dni i dla małego domu z jednym rodzajem opieki bywa rozsądnym początkiem. Ograniczenia wychodzą przy rozwoju: jedna podstrona na wszystkie rodzaje opieki, cennik wklejony jako obrazek, formularz wysyłający dane na zwykłą skrzynkę i strona, której nie da się przenieść do innego wykonawcy. Strona na zamówienie jest zbudowana wokół tego, jak dom przyjmuje mieszkańców, a kod, treści i domena należą do Was."),
        p(
          "Jeśli strona już istnieje i ma pozycje w Google, przebudowa zachowuje adresy albo je przekierowuje — tak jak przy przenosinach 468 wpisów bloga Giuseppe. Opisuję to na stronie ",
          link("przebudowa strony internetowej", "/pl/oferty/przebudowa-strony-internetowej"),
          ".",
        ),

        h2("Jak powstaje strona internetowa domu opieki"),
        ol("Brief. Przesyłacie rodzaje opieki, rodzaje pokoi, cennik, listę personelu, dane zezwolenia i pytania, które rodziny zadają przy wizycie."),
        ol("Ścieżki rodziny. Uzgadniamy na ekranie telefonu trzy najważniejsze: umówić wizytę, zobaczyć cennik, porównać rodzaje opieki."),
        ol("Projekt. Strona główna, podstrona opieki i cennik są projektowane w całości, pozostałe według tego samego systemu."),
        ol("Wykonanie i uruchomienie. Podłączam umawianie wizyt, sprawdzam formularze i dostępność, a personel dostaje instrukcję zmiany jadłospisu, zajęć i cen."),
        p(
          "Ogólnie o mojej pracy przy stronach — na stronie ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          "; strony lekarzy i przychodni opisuję na stronie ",
          link("strona internetowa dla lekarza", "/pl/strona-internetowa-dla-lekarza"),
          ".",
        ),

        h2("Ile kosztuje strona internetowa domu opieki"),
        li("Prosta strona domu opieki — o domu, rodzaje opieki, cennik, personel, kontakt i przycisk wizyty: od 3000 do 6000 zł."),
        li("Strona domu opieki z podstronami każdego rodzaju opieki, cennikiem, personelem, filmem, umawianiem wizyt, wersjami językowymi i testem dostępności: od 8500 zł."),
        p(
          "Za projekt graficzny nie płacicie osobno — jest wliczony. Po kilku zdaniach o domu podam stałą kwotę. Pełne widełki są w ",
          link("cenniku", "/pl/cennik"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strona internetowa domu opieki: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona internetowa domu opieki?", "Prosta strona kosztuje od 3000 do 6000 zł, rozbudowana — z osobnymi podstronami opieki, filmem, personelem, umawianiem wizyt i wersjami językowymi — od 8500 zł. Projekt graficzny wliczam w obie kwoty."],
          ["Ile trwa stworzenie strony dla domu seniora?", "Zwykle od czterech do sześciu tygodni od briefu, zależnie od liczby podstron i wersji językowych oraz od tego, jak szybko gotowe są zdjęcia, film i zatwierdzone teksty."],
          ["Czy możemy pokazać na stronie zdjęcia mieszkańców?", "Tylko za pisemną zgodą mieszkańca albo osoby do tego uprawnionej. Przy osobach z demencją bezpieczniej pokazywać pokoje, ogród, posiłki i personel. Treść zgody warto skonsultować z prawnikiem."],
          ["Czy na stronie domu opieki powinien być cennik?", "Tak. Rodziny otwierają cennik jako pierwszy, więc przy pokoju jedno- i dwuosobowym widnieje kwota początkowa i krótkie wyjaśnienie, że końcowa zależy od potrzeb opiekuńczych."],
          ["Jak strona domu opieki spełnia wymogi RODO?", "Formularze nie zbierają danych o zdrowiu, przy formularzu jest klauzula informacyjna, a dane wrażliwe przechodzą tylko przez dostawcę z umową powierzenia. Ostateczną ocenę daje inspektor ochrony danych albo prawnik."],
          ["Czy sami możemy zmieniać cennik, jadłospis i zajęcia?", "Tak. Personel zmienia jadłospis, plan zajęć, ceny i zdjęcia sam, w panelu dostępnym też z telefonu, bez ryzyka, że rozjedzie się wygląd strony."],
          ["Czy pracujesz z domami opieki z całej Polski?", "Tak. Projekt i wykonanie robię zdalnie, a rozmowy prowadzimy przez telefon lub wideo. Dom pokazujecie mi na zdjęciach i krótkim filmie z telefonu."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową domu opieki: co mi wysłać"),
        p(
          "Przyślijcie link do obecnej strony albo profilu w katalogu, rodzaje opieki i pokoi, liczbę miejsc i kilka zdjęć z telefonu: pokój, jadalnia, ogród. Wrócę ze szkicem strony głównej i stałą kwotą. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
