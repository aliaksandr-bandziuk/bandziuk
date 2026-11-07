// Landing page fixture: strona internetowa dla podologa (PL), group
// «podiatrist-website». New page, create-landing.cjs.
//
// Why (07.11.2026). Owner-side demand measured in English («podiatrist
// website design» 40, «web design for podiatrists» 40, 150 for the industry);
// the Polish version is built because every industry page is made in all
// three languages. See claude/industry-delta-2026-11-07.md.
//
// The slug uses «podolog», because that is the word Polish visitors type,
// while the statutory title is «podiatra» — and that gap is this page's
// strongest section. Verified 07.11.2026: since 26.03.2024 «podiatra» is one
// of the professions covered by the ustawa z 17 sierpnia 2023 r. o niektórych
// zawodach medycznych (Dz.U. 2023 poz. 1972), which requires entry in the
// Centralny Rejestr Osób Uprawnionych do Wykonywania Zawodu Medycznego and
// penalises using a medical professional title without entitlement. The name
// «podolog» is not a title from that act. The page states this and tells the
// owner to confirm their own entry rather than asserting their status.
//
// Cannibalisation check — the neighbours are /pl/strona-internetowa-dla-lekarza
// and the dental pages. They own the clinic structure, doctor profiles,
// booking in general and patient data in forms. NONE of that is repeated.
import { p, h2, li, link, k } from "./pt";

export const podiatristWebsitePl = {
  lang: "pl",
  group: "podiatrist-website",
  slug: "strona-internetowa-dla-podologa",
  title: "Strona internetowa dla podologa",
  heading:
    "Strona internetowa dla podologa: dla osoby, którą dziś boli stopa, i dla lekarza, który kieruje",
  excerpt:
    "Strony dla gabinetów podologicznych: najbliższy wolny termin na pierwszym ekranie, cennik za zabieg, zdjęcia przed i po opublikowane poprawnie, podstrona o stopie cukrzycowej i jasno nazwany tytuł zawodowy. Projekt w cenie, od 8500 zł.",
  seo: {
    metaTitle: "Strona internetowa dla podologa i gabinetu od 8500 zł",
    metaDescription:
      "Strona dla podologa: najbliższy termin na pierwszym ekranie, cennik za zabieg, zdjęcia przed i po, stopa cukrzycowa, wkładki. Od 8500 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Gabinety podologiczne", "Od 8500 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Najbliższy termin: wtorek", "Wrastający paznokieć", "Cennik za zabieg", "Zapisz się"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Strona gabinetu podologicznego: cennik za zabieg, galeria przed i po, stopa cukrzycowa, projekt w cenie", price: 8500, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Landing page pod jeden zabieg albo pod wkładki ortopedyczne", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Przebudowa strony gabinetu podologicznego z zachowaniem pozycji", price: 4000, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co robię",
      title: "Co obejmuje wykonanie strony dla podologa",
      items: [
        { _key: k("o"), iconName: "clock", title: "Najbliższy wolny termin od razu widoczny", text: "Jedna linia do edycji w rejestracji" },
        { _key: k("o"), iconName: "list-checks", title: "Cennik podany za zabieg", text: "A nie jedna kwota za wizytę" },
        { _key: k("o"), iconName: "image", title: "Galeria przed i po, która się obroni", text: "Zgoda, kontekst, bez obietnic" },
        { _key: k("o"), iconName: "users", title: "Podstrona o stopie cukrzycowej", text: "Co bierzesz i co odsyłasz dalej" },
        { _key: k("o"), iconName: "footprints", title: "Wkładki jako dwie wizyty", text: "Pomiar, dopasowanie, pełny koszt" },
        { _key: k("o"), iconName: "shield-check", title: "Sterylizacja pokazana wprost", text: "Pytanie, którego nikt nie zadaje głośno" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Podolog czy podiatra: jaką nazwą wolno posługiwać się na stronie gabinetu"),
        p("Projektuję i buduję strony dla gabinetów podologicznych, a projekt graficzny jest w cenie wykonania, nie na osobnej fakturze. Pierwsza decyzja na takiej stronie nie jest wizualna, tylko dotyczy nazwy. Od 26 marca 2024 r. podiatra jest jednym z zawodów objętych ustawą z 17 sierpnia 2023 r. o niektórych zawodach medycznych: jego wykonywanie wymaga wpisu do Centralnego Rejestru Osób Uprawnionych do Wykonywania Zawodu Medycznego, a ustawa przewiduje odpowiedzialność za posługiwanie się tytułem zawodu medycznego bez uprawnień. Nazwa „podolog” nie jest tytułem z tej ustawy."),
        p("Dla strony wynika z tego konkretna rzecz: tytuł, którym się na niej posługujesz, musi odpowiadać twojemu wpisowi — to warto potwierdzić u swojego doradcy przed publikacją, a nie po. Jednocześnie pacjenci w Polsce szukają „podologa”, nie „podiatry”, więc nazwa usługi w tekstach i adresach podstron idzie za tym, co ludzie wpisują, a tytuł osoby jest podany dokładnie, raz i bez ozdób. To nie sprzeczność, tylko dwie różne rzeczy w dwóch różnych miejscach strony."),
        p(
          "Jeśli prowadzisz przychodnię z kilkoma specjalizacjami, właściwa strona to ",
          link("strona internetowa dla lekarza", "/pl/strona-internetowa-dla-lekarza"),
          " — struktura przychodni i podstrony lekarzy są tam i nie powtarzają się tutaj.",
        ),

        h2("Pierwszy ekran odpowiada osobie, którą stopa boli dzisiaj"),
        p("Większość osób trafia na stronę podologa w dyskomforcie i z jednym pytaniem: czy ktoś to szybko obejrzy. Wrastający paznokieć, pęknięta pięta, ból, przez który dzisiejsze dojście do pracy było nieprzyjemne. Wszystko inne na stronie jest wobec tego pytania drugorzędne, a pierwszy ekran zbudowany wokół filozofii gabinetu przegrywa z konkurencyjnym, na którym stoi „najbliższy termin: wtorek, 11:40”."),
        li("najbliższy wolny termin jako jedna linia, którą rejestracja zmienia w kilka sekund, albo uczciwe „najbliższy wolny termin w przyszłym tygodniu”;"),
        li("dwie–trzy dolegliwości, z którymi przychodzi najwięcej osób, jako linki wprost do własnych podstron;"),
        li("numer telefonu, który da się kliknąć, bo ten odbiorca stoi i trzyma telefon w jednej ręce;"),
        li("czy przyjmujesz dzieci, pacjentów z cukrzycą i czy jeździsz do domu — trzy pytania, które inaczej zamieniają się w trzy telefony."),

        h2("Cennik podany za zabieg, a nie za wizytę"),
        p("Podologia różni się od większości usług medycznych tym, że odbiorca pyta o cenę konkretnej rzeczy: korekcji wrastającego paznokcia, usunięcia fragmentu płytki, zabiegu na brodawkę, wkładek, opracowania rany w stopie cukrzycowej. Jedna kwota za wizytę zostawia go z domysłami i wysyła do tego, kto opublikował tabelę."),
        p("Na stronie stoi cennik na poziomie zabiegu: każda pozycja nazywa zabieg, mówi, czy dotyczy jednej stopy czy dwóch, i podaje cenę wizyty kontrolnej. To podstrona, którą konkurencja najczęściej pomija, i zwykle druga najczęściej odwiedzana po stronie głównej."),

        h2("Zdjęcia przed i po: najważniejsze obrazy na stronie podologa i jak je publikować"),
        p("Żaden tekst nie przekonuje tak jak para zdjęć i żadna część strony podologicznej nie jest łatwiejsza do zepsucia. Co sprawia, że galeria działa: pisemna zgoda pacjenta na publikację, trzymana w dokumentach; to samo kadrowanie, ta sama odległość i to samo światło na obu zdjęciach, bo korzystny kąt czyta się jako sztuczkę; podpis mówiący, co zrobiono i w jakim czasie; i brak sugestii, że taki efekt jest typowy. Lepiej dziesięć par spełniających ten standard niż czterdzieści, które go nie spełniają."),

        h2("Podstrona o stopie cukrzycowej i o lekarzach, którzy kierują"),
        p("Stopa cukrzycowa to moment, w którym podologia przestaje być kosmetyczna i staje się poważna klinicznie, i to stąd biorą się skierowania: diabetolodzy, lekarze rodzinni, dermatolodzy, pielęgniarki z poradni diabetologicznych. Oni muszą wiedzieć, co bierzesz, czego nie weźmiesz, jak szybko przyjmiesz przypadek pilny i czy odpisujesz po wizycie."),
        p("Pacjent szukający tej samej podstrony potrzebuje odwrotnego tonu: jak wygląda pierwsza wizyta, dlaczego ważna jest regularność i że obejrzenie stopy dziś jest lepsze niż decyzja za miesiąc. Dwóch odbiorców, jedna podstrona, dwa bloki — i zwykle to ona przynosi gabinetowi najstabilniejszą pracę."),

        h2("Wkładki ortopedyczne opisane jako dwie wizyty, a nie jeden produkt"),
        p("Wkładki są najczęściej źle rozumianą rzeczą, którą sprzedaje gabinet podologiczny. Ludzie spodziewają się, że przyjdą i kupią, a prawdziwa droga to wizyta pomiarowa, wykonanie, wizyta dopasowania i często korekta. Podstrona, która to mówi — z pełnym kosztem, odstępem między wizytami i informacją, co się dzieje, jeśli wkładki nie leżą — usuwa reklamację, która idzie za każdym zamówieniem złożonym w złych oczekiwaniach."),

        h2("Sterylizacja i higiena pokazane wprost, bez broszury"),
        p("Niewypowiedziany lęk w opiece nad stopami to zakażenie. Nikt nie pyta o sterylizację w rejestracji i każdy się nad tym zastanawia. Krótki blok z prawdziwymi zdjęciami autoklawu i zapakowanych narzędzi oraz jedno zdanie o tym, co jest jednorazowe, robi dla zapisów więcej niż akapit o wartościach gabinetu."),

        h2("Ile kosztuje strona dla podologa i ile trwa jej wykonanie"),
        p(
          "Strona gabinetu to od 8500 zł z projektem w cenie. Landing page pod jeden zabieg albo pod wkładki to 3000–6000 zł. Przebudowa z zachowaniem pozycji od 4000 zł. Landing page zajmuje dwa–trzy tygodnie, pełna strona cztery–sześć. Liczba zabiegów z własnymi podstronami, liczba języków i gotowość zdjęć razem ze zgodami ruszają i cenę, i termin. Stawki są w ",
          link("cenniku", "/pl/cennik"),
          ".",
        ),
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: strony, w których decyduje pierwszy kontakt i cennik",
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
      title: "Wycena strony dla twojego gabinetu podologicznego",
      subtitle: "Odpowiadam w jeden dzień roboczy: co bym zrobił, w jakich językach i ile to kosztuje.",
      contextLabel: "Nazwa gabinetu albo adres strony",
      contextPlaceholder: "Link albo nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam tak samo szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Jaki to gabinet?", options: ["Jedna osoba", "Gabinet z kilkoma specjalistami", "Podologia w większej przychodni", "Inaczej"] },
        { _key: k("z"), question: "Czy zajmujecie się stopą cukrzycową?", options: ["Tak, duża część pracy", "Czasem", "Nie", "Chcielibyśmy"] },
        { _key: k("z"), question: "Czy wykonujecie wkładki ortopedyczne?", options: ["Tak, u siebie", "Tak, przez pracownię", "Nie", "Planujemy"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Strona gabinetu podologicznego czytelna dla asystentów AI (GEO, AEO)"),
        p("Pacjenci pytają dziś asystenta, zanim otworzą mapę: podolog, który zajmuje się stopą cukrzycową, który przyjmie w tym tygodniu, który robi wkładki, który mówi w ich języku. Asystent odpowiada z tekstu, który potrafi przeczytać, a gabinet, którego zabiegi siedzą na zdjęciach, cennik leży w PDF, a wolne terminy zna tylko rejestracja, w tej odpowiedzi nie pojawia się wcale."),
        p(
          "Cytowalny gabinet wygląda tak samo jak gabinet wygodny dla człowieka: zabiegi tekstem razem z cenami, nazwane dolegliwości, godziny i języki jako dane, najbliższy termin w jednym aktualizowanym zdaniu. Doprowadzenie istniejącej strony do tego stanu to ",
          link("przygotowanie strony do wyszukiwania AI", "/pl/oferty/przygotowanie-strony-do-wyszukiwania-ai"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strona internetowa dla podologa: częste pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona dla podologa?", "Od 8500 zł z projektem w cenie, 3000–6000 zł za landing page pod jeden zabieg albo pod wkładki, od 4000 zł za przebudowę z zachowaniem pozycji. Liczba zabiegów z własnymi podstronami, liczba języków i gotowość zdjęć ruszają kwotę."],
          ["Czy na stronie mam pisać „podolog”, czy „podiatra”?", "Nazwa usługi idzie za tym, czego szukają pacjenci, a oni szukają podologa. Tytuł osoby musi odpowiadać twojemu wpisowi: od 26 marca 2024 r. podiatra jest zawodem objętym ustawą o niektórych zawodach medycznych, z wpisem do Centralnego Rejestru i odpowiedzialnością za posługiwanie się tytułem bez uprawnień. Swój status potwierdź u doradcy przed publikacją."],
          ["Czym to się różni od strony przychodni?", "Trzema rzeczami: odbiorcę zwykle boli dzisiaj, więc najbliższy wolny termin jest na pierwszym ekranie ważniejszy od wszystkiego; o cenę pyta się za zabieg, nie za wizytę; i decyzję niosą zdjęcia przed i po. Strona przychodni układa się wokół specjalizacji i lekarzy."],
          ["Czy publikować cennik?", "Tak, na poziomie zabiegu. To podstrona, którą konkurencja najczęściej pomija, i zwykle druga najczęściej odwiedzana. Każda pozycja nazywa zabieg, mówi, czy dotyczy jednej stopy czy dwóch, i podaje cenę wizyty kontrolnej."],
          ["Czy można publikować zdjęcia przed i po?", "Przy pisemnej zgodzie pacjenta trzymanej w dokumentach, tym samym kadrze i świetle na obu zdjęciach, podpisie mówiącym, co zrobiono i w jakim czasie, i bez sugestii, że efekt jest typowy. Dziesięć par w tym standardzie działa lepiej niż czterdzieści bez niego."],
          ["Robicie podstronę o stopie cukrzycowej?", "Tak, jako jedną podstronę dla dwóch odbiorców: lekarzy kierujących, którzy muszą wiedzieć, co bierzesz i jak szybko, i pacjentów, którzy muszą wiedzieć, jak wygląda pierwsza wizyta. Zwykle to ona przynosi najstabilniejszą pracę."],
          ["Czy pacjent będzie mógł zapisać się online?", "Jeśli tak pracuje gabinet. Część gabinetów chce otwartego kalendarza, część formularza, który rejestracja weryfikuje, bo wrastający paznokieć i wizyta kontrolna to nie ten sam termin. Stronę robię pod ten wariant, który naprawdę prowadzisz."],
          ["Robimy też pedicure leczniczy. Ma być na tej samej stronie?", "Tak, ale jako własna podstrona z własnym tekstem, bo to inny zakup robiony przez inną osobę. Wmieszanie go w podstrony zabiegowe sprawia, że gabinet czyta się jak salon — i dla pacjentów, i dla lekarzy kierujących."],
          ["Czy da się przebudować stronę bez utraty ruchu z wyszukiwania?", "Da się. Każdy istniejący adres zostaje spisany, każdy zmieniony przekierowany, a podstrony, które już przyprowadzają pacjentów, zachowują tekst zamiast być przepisane pod nowy wygląd."],
          ["Do kogo należy strona?", "Do ciebie: kod, domena, konto hostingowe, treści i wszystkie dostępy. Nic nie zostaje u mnie jako dźwignia."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamówienie strony dla gabinetu podologicznego: co mi przysłać"),
        p("Napisz, które zabiegi mają mieć własne podstrony, czy zajmujecie się stopą cukrzycową i przyjmujecie skierowania, czy wykonujecie wkładki, jak wygląda dziś wasz cennik, w jakich językach mówią pacjenci i czy macie zdjęcia ze zgodami. Dołącz adres obecnej strony, jeśli jest. Odpowiadam w jeden dzień roboczy, co bym zrobił i ile to kosztuje."),
      ],
    },
  ],
};
