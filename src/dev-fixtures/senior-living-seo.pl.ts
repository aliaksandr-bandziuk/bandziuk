// Landing page fixture: Pozycjonowanie domu opieki (PL), group
// «senior-living-seo». New page, batch B. Market version for Polish private
// domy opieki and domy seniora — written for Poland, not a translation of
// senior-living-seo.en.
// Semantic core: ref/medical-practices.md has no measured PL phrases (PL «On
// topic» is empty); heading phrases from BRIEF.md: «pozycjonowanie domu
// opieki» (H1, H2s, cost H2), «pozycjonowanie domu seniora» (metaTitle, H2),
// «prywatny dom opieki» (H2s). Search patterns used in the text (city, type of
// care, price, short stay) are examples, not measured volumes.
// Intent: ref/intent-check-medical-practices.md — «pozycjonowanie domu
// opieki» vs «strona dla domu seniora» 0 of 10 shared URLs, 0 shared domains
// → separate pages; design is /pl/strona-internetowa-domu-opieki (sibling,
// linked). The «pozycjonowanie domu opieki» top 10 is weak for owners’ intent
// (gov.pl, bip, wyborcza, nfosigw — public funding and news); the page is still
// written for the owner, as the brief sets. The «strona dla domu seniora» top
// 10 (domyopieki.pl, domyseniora.pl, krdo.pl, kido.org.pl, altru.pl) shows
// directories ranking for homes → H2 on katalogi vs own site.
// Polish angles: rodzina szuka miejsca dla rodzica; zezwolenie wojewody and
// the register (general, «sprawdź aktualne przepisy»); prywatny dom vs DPS vs
// ZOL; jawny cennik; wizytówka Google and family reviews; families abroad;
// RODO and health data in the enquiry form; AI search (GEO, AEO).
// NOT on this page: building the site, photos, film, layout of the price
// page, accessibility (/pl/strona-internetowa-domu-opieki); przychodnie and
// gabinety (/pl/oferty/pozycjonowanie-strony-przychodni-warszawa); paid ads.
// Prices: /pl/cennik — audyt od 1000 zł, jednorazowo 1000–3000 zł, stałe od
// 3500 zł (silna konkurencja od 5500 zł).
// Owner’s rules: every SEO page covers AI search; Giuseppe is the main case;
// never say there are no clients from the visitor’s industry.
import { p, h2, h3, li, link, k } from "./pt";

export const seniorLivingSeoPl = {
  lang: "pl",
  group: "senior-living-seo",
  slug: "pozycjonowanie-strony-domu-opieki",
  title: "Pozycjonowanie strony domu opieki",
  heading: "Pozycjonowanie strony domu opieki",
  excerpt:
    "Zajmuję się pozycjonowaniem domów opieki i prywatnych domów seniora: podstrony rodzajów opieki, cena pobytu podana wprost, wizytówka Google, opinie rodzin i widoczność w AI — tak, żeby dzieci szukające miejsca dla rodzica trafiały na Waszą stronę, a nie tylko do katalogów.",
  seo: {
    metaTitle: "Pozycjonowanie domu seniora i domu opieki | Bandziuk",
    metaDescription:
      "Pozycjonowanie prywatnego domu opieki: podstrony rodzajów opieki, cennik, wizytówka Google, opinie rodzin, RODO i widoczność w AI. Audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Opieka, cena i mapy", "Audyt od 1000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Dom seniora Kraków", "Opieka nad osobą z demencją", "Cena pobytu miesięcznie", "Umów wizytę w domu"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO domu opieki: strona i wizytówka Google", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO dla domu opieki: podstrony rodzajów opieki, cennik, dane strukturalne", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie strony domu opieki lub domu seniora", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje pozycjonowanie strony domu opieki",
      items: [
        { _key: k("o"), iconName: "layers", title: "Podstrona dla każdego rodzaju opieki", text: "Całodobowa, demencja, osoby leżące, pobyt czasowy" },
        { _key: k("o"), iconName: "file-text", title: "Cena pobytu podana wprost", text: "Co jest w cenie, a co płatne osobno" },
        { _key: k("o"), iconName: "shield-check", title: "Zezwolenie wojewody na widoku", text: "Numer, wpis do rejestru, opieka pielęgniarska" },
        { _key: k("o"), iconName: "map-pin", title: "Wizytówka Google domu opieki", text: "Kategoria, zdjęcia, godziny odwiedzin, link do podstrony" },
        { _key: k("o"), iconName: "message-circle", title: "Opinie rodzin bez danych mieszkańców", text: "Prośba o opinię i dyskretne odpowiedzi" },
        { _key: k("o"), iconName: "sparkles", title: "Widoczność w ChatGPT i AI w Google", text: "Fakty o domu, które asystent może zacytować" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO: strona domu opieki i wizytówka Google", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe pozycjonowanie strony domu opieki", value: "od 3500 zł / mies.", note: "podstrony, mapy, opinie, AI", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: prywatna praktyka medyczna i strony usługowe, które pozycjonowałem",
      subtitle:
        "Strona Giuseppe, psychoterapeuty z Mediolanu, to prywatna praktyka medyczna, której kodeks zawodowy zabrania obietnic efektów i opinii pacjentów. Przebudowałem jego stronę, przeniosłem 468 wpisów bloga z przekierowaniami ze wszystkich starych adresów, a nowe podstrony już pojawiają się w odpowiedziach ChatGPT — on sam znalazł mnie przez ChatGPT. Obok: Cyprus VIP Estates, wielojęzyczny serwis nieruchomości, który pozycjonuję co miesiąc, firma skanowania laserowego 3D z 29-krotnym wzrostem ruchu z Google po przebudowie, agencja edukacyjna działająca w dziesięciu krajach i warsztat samochodowy z Warszawy widoczny w Mapach Google. Dom opieki potrzebuje tego samego: ostrożnych sformułowań, podstrony dla każdej usługi i zapytań, o których wiadomo, skąd przyszły.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "psychotherapist-website-milan",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "architecture-website-rebuild-and-seo-scan",
        "full-multilingual-website-development-and-seo-for-student-services",
        "auto-repair-seo-and-ux-boost",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena pozycjonowania strony domu opieki",
      subtitle: "W ciągu jednego dnia roboczego dostaniecie trzy rzeczy, od których zacząłbym w Google i w Mapach, oraz stałą cenę.",
      contextLabel: "Nazwa domu opieki lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Jaką opiekę zapewniacie?", options: ["Całodobowa opieka nad seniorami", "Opieka nad osobami z demencją", "Opieka po szpitalu i rehabilitacja", "Kilka rodzajów opieki"] },
        { _key: k("z"), question: "Skąd teraz trafiają do Was rodziny?", options: ["Z Google i Map Google", "Z katalogów domów opieki", "Ze szpitali i od lekarzy", "Z poleceń rodzin"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Pozycjonowanie strony domu opieki robię sam — od audytu strony i wizytówki Google, przez podstrony rodzajów opieki, po pomiar zapytań od rodzin — dla prywatnych domów opieki i domów seniora w całej Polsce. Miejsca dla mamy czy taty zwykle nie szuka sam senior, tylko jego dorosłe dzieci, często w pośpiechu: po wypisie ze szpitala, po upadku albo wtedy, gdy opieka w domu przestaje wystarczać."),

        h2("Na czym polega pozycjonowanie strony domu opieki i domu seniora"),
        p("Rodzina szuka w kilku miejscach naraz i każde wymaga innej pracy:"),
        li("w Mapach Google — „dom opieki w pobliżu”, „dom seniora Łódź” — gdzie kilka pierwszych domów z oceną i telefonem dostaje wiele pierwszych telefonów"),
        li("w zwykłych wynikach, gdzie stronę domu wyprzedzają katalogi domów opieki i artykuły poradnikowe"),
        li("w odpowiedziach AI — ChatGPT i podsumowaniach w Google — które coraz częściej wymieniają konkretne domy z nazwy"),
        p("Pozycjonowanie łączy te miejsca: rzeczowe podstrony, kompletna wizytówka, opinie rodzin i dane zapisane tak, żeby asystent AI mógł je przeczytać. Wynik liczę w zapytaniach i wizytach rodzin w domu, a nie w samych pozycjach."),

        h2("Frazy w pozycjonowaniu strony domu opieki: miejscowość, rodzaj opieki i cena"),
        p("Rodziny rzadko wpisują samo „dom opieki”. Łączą miejscowość z tym, czego potrzebuje rodzic:"),
        li("miejscowość: „prywatny dom opieki Wrocław”, „dom seniora pod Poznaniem”"),
        li("stan zdrowia: „dom opieki dla osoby z demencją”, „opieka nad osobą leżącą po udarze”"),
        li("czas pobytu: „pobyt czasowy w domu seniora”, „opieka wytchnieniowa”"),
        li("koszt: „dom opieki cena miesięcznie”, „ile kosztuje prywatny dom seniora”"),
        p("Przed pisaniem podstron sprawdzam prawdziwe dane wyszukiwań dla Waszej miejscowości i okolicznych gmin. Rodzina szuka domu w rozsądnej odległości od siebie, więc dom pod miastem powinien być widoczny także na frazy z nazwą tego miasta."),

        h2("Podstrony rodzajów opieki na stronie prywatnego domu opieki"),
        p("Każdy rodzaj opieki, przy którym chcecie mieć więcej mieszkańców, dostaje własną podstronę: komu służy, jak wygląda doba, kto czuwa w nocy, jak często przychodzi pielęgniarka i lekarz, jak przebiega przyjęcie i od jakiej kwoty zaczyna się cena."),
        h3("Dom opieki dla osób z demencją i chorobą Alzheimera"),
        p("Rodzina pyta o bezpieczeństwo — zabezpieczone wyjścia, ogród, w którym można spacerować — i o to, czy opiekunowie umieją pracować z osobami z otępieniem. Odpowiedzi muszą być konkretne i spokojne, bez obietnic poprawy pamięci."),
        h3("Opieka nad osobami leżącymi i po wypisie ze szpitala"),
        p("Tu decyzja zapada w kilka dni. Podstrona mówi wprost, czy przyjmujecie osoby wymagające całodobowej opieki pielęgniarskiej, po udarze albo z odleżynami, i jak szybko można się wprowadzić."),
        h3("Pobyt czasowy i opieka wytchnieniowa w domu seniora"),
        p("Kilka tygodni pobytu, gdy opiekun rodzinny wyjeżdża albo potrzebuje odpoczynku, to dla wielu rodzin pierwszy kontakt z domem. Osobna podstrona łapie te wyszukiwania."),

        h2("Zezwolenie wojewody i wpis do rejestru na stronie prywatnego domu opieki"),
        p("Prywatny dom, który zapewnia całodobową opiekę osobom starszym, przewlekle chorym lub z niepełnosprawnością, potrzebuje zezwolenia wojewody i wpisu do prowadzonego przez niego rejestru. Rodzina, która to sprawdza, powinna znaleźć odpowiedź od razu: numer zezwolenia, organ, który je wydał, i odnośnik do rejestru, podane tekstem w stopce i na podstronie o domu. To także sygnał wiarygodności dla Google. Przepisy się zmieniają — sprawdźcie aktualne zasady w urzędzie wojewódzkim albo u prawnika; to ogólna informacja, nie porada prawna."),

        h2("Katalogi domów opieki a własna strona domu seniora w Google"),
        p("Na wiele fraz „dom opieki + miasto” wysoko są katalogi i wyszukiwarki domów seniora. Profil w takim serwisie warto mieć kompletny: zdjęcia, ceny, rodzaje opieki i link do własnej strony. Katalog pokazuje jednak Wasz dom obok kilku innych, a część serwisów pobiera opłaty za wyróżnienie. Własna strona wygrywa wyszukiwania nazwy domu, opisuje opiekę pełniej niż krótki profil i jest źródłem dla odpowiedzi AI. Nazwa, adres, telefon i ceny muszą być takie same w katalogach, w wizytówce i na stronie."),

        h2("Prywatny dom opieki, DPS czy ZOL: podstrona, która porządkuje wybór rodziny"),
        p("Wiele rodzin zaczyna od pytania, czym prywatny dom różni się od domu pomocy społecznej i zakładu opiekuńczo-leczniczego. Do DPS kieruje się przez ośrodek pomocy społecznej, do ZOL — na podstawie skierowania od lekarza, a część kosztów pokrywają środki publiczne. Do prywatnego domu rodzina zgłasza się bezpośrednio i podpisuje umowę z placówką. Krótka, rzeczowa podstrona z takim porównaniem odpowiada na częste wyszukiwania poradnikowe i wyjaśnia, kiedy Wasz dom może być dobrym wyborem, na przykład gdy liczy się termin przyjęcia. Bez krytykowania placówek publicznych i bez porównań z konkretnymi domami."),

        h2("Cena pobytu w domu opieki na stronie: jawny cennik a pozycjonowanie"),
        p("„Dom opieki cena” i „ile kosztuje dom seniora” to jedne z najczęstszych pytań rodzin, a wiele stron odpowiada „cena ustalana indywidualnie”. Rodzina czyta wtedy widełki w artykule albo w katalogu i dzwoni tam, gdzie podano konkret. Podstrona z ceną „od … zł miesięcznie” za pokój jedno- i dwuosobowy, z listą tego, co obejmuje — wyżywienie, pielęgnacja, pranie, zajęcia — i tego, co płatne osobno — leki, środki higieniczne, transport do specjalisty — odpowiada na te wyszukiwania na Waszej stronie. Jeśli kwota zależy od stanu zdrowia, wystarczy to napisać."),

        h2("Wizytówka Google domu opieki i opinie rodzin mieszkańców"),
        p("Przy wyszukiwaniach z mapą liczy się wizytówka: kategoria główna zgodna z tym, co oferujecie, godziny, w których można odwiedzić dom, prawdziwe zdjęcia pokoi, jadalni i ogrodu, lista rodzajów opieki i link do pasującej podstrony, a nie do strony głównej. Dom z kilkoma budynkami pod różnymi adresami potrzebuje osobnej wizytówki dla każdego."),
        p("Opinie zbieram według stałej rutyny: każda rodzina, nie tylko zadowolona, dostaje po kilku tygodniach pobytu bliskiej osoby krótką prośbę z bezpośrednim linkiem. W odpowiedziach nie potwierdza się, że ktoś jest mieszkańcem, i nie pisze się o jego zdrowiu; wystarczy spokojna odpowiedź z zaproszeniem do rozmowy z kierownikiem domu. Kupowanie opinii łamie zasady Google."),

        h2("Rodziny szukające domu opieki z zagranicy i formularz zgodny z RODO"),
        p("Część dzieci szuka miejsca dla rodzica, mieszkając w Niemczech, Wielkiej Brytanii czy Holandii. Szukają po polsku, ale nie przyjadą na wizytę w tym tygodniu. Informacja, że można porozmawiać z kierownikiem przez wideo, obejrzeć film z domu i napisać na WhatsApp, powinna być na podstronie kontaktu i w wizytówce, bo to dla nich powód, żeby zadzwonić właśnie do Was."),
        p("Formularz zapytania prosi o imię, telefon, rodzaj opieki i termin — bez opisu chorób seniora. Dane o zdrowiu to w RODO szczególna kategoria danych; zbiera je rozmowa przed przyjęciem, nie strona. Przy formularzu jest klauzula informacyjna, a z dostawcą formularza — umowa powierzenia. To ogólne wskazówki, nie opinia prawna."),

        h2("Pozycjonowanie strony domu opieki w ChatGPT i Google AI Overviews (GEO, AEO)"),
        p("Dzieci szukające miejsca dla rodzica coraz częściej pytają ChatGPT albo podsumowania AI w Google o prywatny dom opieki dla osoby z demencją w okolicy Gdańska albo o różnicę między DPS a domem prywatnym. Asystent odpowiada na podstawie tego, co przeczyta i potwierdzi w kilku źródłach. Zabieganie o miejsce w tych odpowiedziach ma dwie nazwy: GEO (generative engine optimization) i AEO (answer engine optimization). W domu opieki sprowadza się do czterech rzeczy:"),
        li("rodzaje opieki, liczbę miejsc, cenę od, zezwolenie wojewody i godziny odwiedzin zapisane prostymi faktami"),
        li("odpowiedzi na pytania z pierwszej rozmowy telefonicznej, umieszczone na podstronach opieki"),
        li("te same dane na stronie, w wizytówce Google i w katalogach"),
        li("dane strukturalne opisujące dom, jego adres i usługi"),
        p(
          "Sprawdziłem to na prywatnej praktyce: ChatGPT cytuje już nowe podstrony, które przygotowałem dla Giuseppe, psychoterapeuty z Mediolanu. Szczegóły tej usługi opisuje strona ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Ile kosztuje pozycjonowanie strony domu opieki"),
        li("Audyt strony domu i wizytówki w Mapach Google: od 1000 zł, płatny raz, zakończony krótką listą tego, co zrobić najpierw."),
        li("Pojedyncze zlecenia — podstrona o demencji, cennik, dane strukturalne, naprawa błędów technicznych: od 1000 do 3000 zł."),
        li("Comiesięczna opieka nad widocznością domu — kolejne podstrony, wizytówka, opinie rodzin, odpowiedzi AI i zestawienie zapytań: od 3500 zł miesięcznie; w dużym mieście, gdzie walczy o rodziny wiele domów, od 5500 zł."),
        p(
          "Jeśli stronę trzeba zbudować od nowa, opisuję to na stronie ",
          link("strona internetowa domu opieki", "/pl/strona-internetowa-domu-opieki"),
          ". Moje podejście do SEO opisuje strona ",
          link("strategia i optymalizacja SEO", "/pl/oferty/strategia-i-optymalizacja-seo"),
          ", a pozycjonowanie placówek medycznych — ",
          link("pozycjonowanie strony przychodni", "/pl/oferty/pozycjonowanie-strony-przychodni-warszawa"),
          ". Pełne widełki są w ",
          link("cenniku", "/pl/cennik"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie strony domu opieki: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje pozycjonowanie strony domu opieki?", "Audyt kosztuje od 1000 zł, pojedyncze zlecenia od 1000 do 3000 zł, a stała praca od 3500 zł miesięcznie — w dużych miastach z wieloma domami od 5500 zł. Wystarczy mi kilka zdań o domu i liczbie miejsc, żeby podać stałą kwotę."],
          ["Kiedy pierwsze rodziny trafią do nas z Google?", "Najszybciej, zwykle po kilku tygodniach, widać efekt uporządkowanej wizytówki. Nowa podstrona o opiece nad osobami leżącymi czy o cenie pobytu potrzebuje zazwyczaj od dwóch do czterech miesięcy; tam, gdzie konkurują katalogi i duże sieci, dłużej."],
          ["Czy wystarczy profil w katalogu domów opieki?", "Katalog daje telefony, ale rodzina widzi tam obok Was kilka innych domów, a warunki ustala właściciel serwisu. Własna strona przejmuje wyszukiwania nazwy domu i karmi odpowiedzi AI. Profil w katalogu i strona nie wykluczają się — profil powinien prowadzić na stronę."],
          ["Czy podawać cenę pobytu na stronie domu seniora?", "Tak, przynajmniej „od” dla każdego rodzaju pokoju, z listą tego, co jest w cenie. To odpowiada na częste wyszukiwania rodzin i oszczędza rozmów, które nie skończą się przyjęciem. Kwota końcowa może zależeć od stanu zdrowia — strona może to wyjaśnić."],
          ["Jak odpowiadać na opinie o domu opieki?", "Spokojnie i ogólnie, bez potwierdzania, że ktoś jest mieszkańcem, i bez informacji o jego zdrowiu. Podziękować, zaprosić do rozmowy z kierownikiem domu."],
          ["Kto pisze teksty o opiece i zdrowiu?", "Szkic tekstu i plan podstron są po mojej stronie. Każde zdanie o pielęgnacji, lekach czy demencji zatwierdza przed publikacją kierownik domu albo pielęgniarka koordynująca. Porad medycznych na stronie nie ma."],
          ["Czy pracujesz z domami opieki spoza Warszawy?", "Tak, z całej Polski. Pozycjonowanie robię zdalnie: strona, wizytówka i dane wyszukiwań dla Waszej miejscowości i okolicy."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie strony domu opieki: co mi wysłać"),
        p(
          "Potrzebuję adresu strony, linku do wizytówki w Mapach Google, nazw katalogów, w których jesteście, oraz informacji, ile macie miejsc i jakie rodzaje opieki. W odpowiedzi dostaniecie plan pierwszych kroków i stałą kwotę. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
