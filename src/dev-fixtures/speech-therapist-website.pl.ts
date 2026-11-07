// Landing page fixture: strona internetowa dla logopedy (PL), group
// «speech-therapist-website». New page, create-landing.cjs.
//
// Why (07.11.2026). The measured demand for this industry is Russian-language
// (ru «сайт для логопеда» 30, 50 for the industry); the Polish version is
// built because every industry page is made in all three languages.
// See claude/industry-delta-2026-11-07.md.
//
// Cannibalisation check — neighbours: /pl/strona-dla-psychologow-terapeutow
// and /pl/strona-internetowa-dla-pediatry. They own the calm first screen,
// the path to a first session, privacy in forms, the clinic structure by
// child age, vaccinations and photo consents. NONE of that is repeated.
//
// PL-specific sections that the RU version does not have: the waiting time
// compared with NFZ, which is the real reason a parent pays privately; and
// the opinia logopedyczna for a kindergarten or school, which is a document
// parents search for by name.
import { p, h2, li, link, k } from "./pt";

export const speechTherapistWebsitePl = {
  lang: "pl",
  group: "speech-therapist-website",
  slug: "strona-internetowa-dla-logopedy",
  title: "Strona internetowa dla logopedy",
  heading:
    "Strona internetowa dla logopedy: podstrony według wieku dziecka, dzieci dwujęzyczne i termin, na który rodzic nie czeka pół roku",
  excerpt:
    "Strony dla logopedów i gabinetów logopedycznych: podstrony napisane słowami rodzica, a nie nazwami diagnoz, podstrona o dzieciach dwujęzycznych, termin obok kolejki NFZ i jasna informacja o opinii logopedycznej. Projekt w cenie, od 8500 zł.",
  seo: {
    metaTitle: "Strona internetowa dla logopedy i gabinetu od 8500 zł",
    metaDescription:
      "Strona dla logopedy: podstrony według wieku i wady wymowy, dzieci dwujęzyczne, termin obok NFZ, opinia logopedyczna, zajęcia online. Od 8500 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Logopedzi i gabinety", "Od 8500 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["2 lata, nie mówi", "Nie wymawia „r”", "Rodzina dwujęzyczna", "Zapisz na diagnozę"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Strona gabinetu logopedycznego: podstrony według wieku i wady wymowy, dzieci dwujęzyczne, diagnoza, projekt w cenie", price: 8500, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Landing page dla jednego logopedy: diagnoza, zajęcia online, zapis", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Przebudowa strony logopedy z zachowaniem pozycji", price: 4000, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co robię",
      title: "Co obejmuje wykonanie strony dla logopedy",
      items: [
        { _key: k("o"), iconName: "message-circle", title: "Podstrony słowami rodzica", text: "„Nie mówi w wieku 2 lat”, nie „opóźniony rozwój mowy”" },
        { _key: k("o"), iconName: "users", title: "Podstrona o dzieciach dwujęzycznych", text: "Główne pytanie rodzin w Polsce" },
        { _key: k("o"), iconName: "clock", title: "Termin obok kolejki NFZ", text: "Powód, dla którego rodzic płaci prywatnie" },
        { _key: k("o"), iconName: "file-text", title: "Informacja o opinii logopedycznej", text: "Dokument, którego rodzic szuka z nazwy" },
        { _key: k("o"), iconName: "video", title: "Co idzie online, a co nie", text: "Napisane wprost, bez obietnic" },
        { _key: k("o"), iconName: "heart-pulse", title: "Osobna podstrona dla dorosłych", text: "Po udarze decyduje ktoś inny" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Dlaczego strona logopedy zaczyna się od słów rodzica, a nie od nazw diagnoz"),
        p("Projektuję i buduję strony dla logopedów i gabinetów logopedycznych, a projekt graficzny jest w cenie wykonania, nie na osobnej fakturze. Największy problem prawie każdej strony logopedy nie leży w wyglądzie: specjalista pisze „dyslalia”, „opóźniony rozwój mowy”, „jąkanie wczesnodziecięce”, a rodzic w wyszukiwarce wpisuje „dwulatek nie mówi”, „sepleni”, „nie wymawia r”, „zacina się”. To dwa różne języki i strona napisana pierwszym nie spotyka się z człowiekiem, który szuka drugim."),
        p("Dlatego struktura powstaje z formułowań rodzica, a terminy stoją obok nich, w tym samym akapicie: podstrona jest znajdowana na żywe zapytanie i zostaje poprawna zawodowo. Daje to jeszcze jedno: rodzic, który słowo „dyslalia” słyszy pierwszy raz od pediatry, trafia na stronę, gdzie jest ono wyjaśnione jego słowami, i zostaje."),
        p(
          "Dla jednego logopedy bez gabinetu zwykle wystarczy landing page za 3000–6000 zł, nie pełna strona — powiem to wprost, kiedy zobaczę, co masz. Jeśli jesteś psychologiem albo psychoterapeutą, właściwa podstrona jest inna: ",
          link("strona dla psychologa i psychoterapeuty", "/pl/strona-dla-psychologow-terapeutow"),
          ".",
        ),

        h2("Podstrony według wieku dziecka i według tego, co słyszy rodzic"),
        p("Rodzic nie szuka metody, tylko swojej sytuacji, a sytuacja ma zawsze wiek. Dwa lata i milczenie, trzy lata i sylaby zamiast słów, pięć lat i „r”, sześć lat i przygotowanie do szkoły, druga klasa i błędy w pisaniu — to pięć różnych tekstów i pięć różnych decyzji o zapisie, choć specjalista za nimi stoi jeden."),
        li("wiek w nagłówku podstrony, bo to pierwsza rzecz, którą rodzic porównuje ze sobą;"),
        li("wada wymowy jego słowami, z nazwą zawodową w pierwszym akapicie, a nie zamiast niej;"),
        li("co dokładnie będzie na diagnozie przy tej wadzie i jaki okres zwykle się omawia;"),
        li("kiedy to nie do logopedy, a do audiologa, neurologa albo ortodonty — ta prostota przynosi więcej zgłoszeń, niż zabiera."),

        h2("Dzieci dwujęzyczne: podstrona, której szukają rodzice w Polsce"),
        p("W rodzinach, które mieszkają nie w kraju swojego języka, to główne pytanie i główny lęk: czy drugi język nie szkodzi dziecku, czy to normalne, że miesza słowa, czy nie dlatego zaczęło mówić później. Rodzice szukają odpowiedzi w swoim języku, znajdują ogólne artykuły i nie znajdują specjalisty, który zajmuje się właśnie tym."),
        p("Podstrona o dzieciach dwujęzycznych zamyka zapytanie, którego konkurencja nie zamknęła: co w dwujęzyczności jest oczekiwane, a co wymaga uwagi; w jakim języku idzie diagnoza i dlaczego oceniać trzeba oba; jak wyglądają zajęcia, kiedy w domu jest jeden język, a w szkole drugi. W Polsce, gdzie dużą część klientów prywatnych gabinetów stanowią rodziny ukraińskie, białoruskie i rosyjskojęzyczne, to zwykle najczęściej odwiedzana podstrona po stronie głównej."),

        h2("Czas oczekiwania: co strona prywatnego gabinetu może powiedzieć obok NFZ"),
        p("Rodzic, który płaci prywatnie, prawie zawsze robi to z jednego powodu: nie chce czekać. To jest sprzedaż, której na stronach logopedów prawie nie ma, choć wystarczy do niej jedno zdanie z najbliższym wolnym terminem i druga linia o tym, jak szybko można zrobić diagnozę."),
        p("Nie trzeba pisać niczego o kolejkach ani o systemie — wystarczy podać swój termin. Rodzic sam zestawi go z tym, co usłyszał w przychodni, i ta różnica jest całym argumentem."),

        h2("Opinia logopedyczna dla przedszkola i szkoły: napisz, czy ją wydajesz"),
        p("Część rodziców szuka nie zajęć, a dokumentu: opinii albo zaświadczenia, które trzeba oddać w przedszkolu, szkole albo w poradni. Szukają go z nazwy i trafiają na strony, które o tym milczą, więc dzwonią po kolei i pytają. Jedno zdanie o tym, czy wydajesz opinię logopedyczną, po jakiej liczbie spotkań i ile to kosztuje, zabiera połowę tych telefonów i przynosi zapisy, których inaczej nie byłoby wcale."),

        h2("Pierwsza diagnoza i odpowiedź na pytanie, ile potrzeba zajęć"),
        p("Rodzic pyta o to w pierwszej wiadomości, a wymijająca odpowiedź kosztuje zapis. Dokładnej liczby podać nie można i terminu obiecać nie można, ale można opisać, jak to działa: diagnoza trwa tyle, po niej podajesz przedział i częstotliwość, po kilku tygodniach patrzysz, co się zmieniło, i przedział się uściśla."),
        p("Tam samo stoi zdanie o zadaniach domowych: że od rodzica potrzebne jest dziesięć–piętnaście minut dziennie. Postawione przed zapisem, a nie po, działa jak filtr — odchodzą ci, którzy liczą, że specjalista zrobi wszystko sam, zostają ci, z którymi będzie efekt. Obok tego cena diagnozy i cena zajęć, bo rodzic i tak liczy miesiąc."),

        h2("Co logopeda robi online, a czego nie robi"),
        p("Zajęcia online otworzyły gabinety na całą Polskę i na rodziny za granicą, i właśnie dlatego na stronie potrzebna jest granica. Część pracy idzie przez wideo normalnie: automatyzacja głoski, słownictwo i gramatyka, praca z czytaniem i pisaniem, zajęcia z nastolatkiem i z dorosłym. Część wymaga obecności albo zastrzeżeń: wywołanie niektórych głosek, gdzie trzeba blisko widzieć układ artykulacyjny, praca z małym dzieckiem, które nie utrzyma uwagi przy ekranie, zadania miofunkcjonalne."),
        p("Strona, która to rozdziela, dostaje zgłoszenia z innych miast i krajów, a nie dostaje odwołanych zajęć i zwrotów. Tam też wymóg techniczny dla rodzica: komputer, nie telefon, i dorosły obok dziecka na pierwszych zajęciach."),

        h2("Dorośli po udarze — osobna podstrona i inna osoba, która ją czyta"),
        p("Afazja i dyzartria u dorosłych to inna usługa, inna pilność i inny zamawiający: zwykle szuka nie sam pacjent, a jego dorosłe dzieci, w pierwszych tygodniach po zdarzeniu, kiedy liczy się szybki start. Potrzebują wiedzieć, czy bierzesz takich pacjentów, pracujesz w domu czy w gabinecie, co będzie na pierwszym spotkaniu i jak to łączy się z rehabilitacją zaleconą przez lekarza."),
        p("To osobna podstrona, a nie akapit między dziecięcymi: wymieszana traci i rodziców, i tę rodzinę."),

        h2("Ile kosztuje strona dla logopedy i ile trwa jej wykonanie"),
        p(
          "Strona gabinetu to od 8500 zł z projektem w cenie. Landing page dla jednego specjalisty to 3000–6000 zł i dla prywatnej praktyki bez gabinetu zwykle właściwy rozmiar. Przebudowa z zachowaniem pozycji od 4000 zł. Landing page zajmuje dwa–trzy tygodnie, pełna strona cztery–sześć. Liczba podstron według wieku i wad wymowy, liczba języków i obecność kierunku online ruszają i cenę, i termin. Stawki są w ",
          link("cenniku", "/pl/cennik"),
          ".",
        ),
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: strony, w których decyduje zaufanie i pierwszy kontakt",
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
      title: "Wycena strony dla logopedy",
      subtitle: "Odpowiadam w jeden dzień roboczy: co bym zrobił, w jakich językach i ile to kosztuje.",
      contextLabel: "Nazwa gabinetu albo adres strony",
      contextPlaceholder: "Link albo nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam tak samo szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Jak pracujesz?", options: ["Jeden logopeda", "Gabinet z kilkoma logopedami", "Logopedia w centrum rozwoju", "Inaczej"] },
        { _key: k("z"), question: "Prowadzisz zajęcia online?", options: ["Tak, to podstawa", "Tak, częściowo", "Nie", "Chcielibyśmy zacząć"] },
        { _key: k("z"), question: "Pracujesz z dziećmi dwujęzycznymi?", options: ["Tak, duża część", "Czasem", "Nie", "To nowy kierunek"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Strona logopedy czytelna dla asystentów AI (GEO, AEO)"),
        p("Rodzice pytają dziś asystenta, zanim otworzą wyszukiwarkę: logopeda, który pracuje z dziećmi dwujęzycznymi, który prowadzi zajęcia online, który weźmie trzylatka, który mówi w ich języku. Asystent odpowiada z tekstu, który potrafi przeczytać, a gabinet, którego kierunki opisuje jeden ogólny akapit, ceny leżą na grafice, a wiek dzieci nie jest nigdzie nazwany, w tej odpowiedzi nie pojawia się wcale."),
        p(
          "Cytowalny gabinet wygląda tak samo jak gabinet zrozumiały dla rodzica: wiek i wady wymowy tekstem, języki pracy jako dane, cena diagnozy i zajęć na stronie, granica pracy online napisana wprost. Doprowadzenie istniejącej strony do tego stanu to ",
          link("przygotowanie strony do wyszukiwania AI", "/pl/oferty/przygotowanie-strony-do-wyszukiwania-ai"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strona internetowa dla logopedy: częste pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona dla logopedy?", "Od 8500 zł za stronę gabinetu z projektem w cenie i 3000–6000 zł za landing page dla jednego specjalisty — dla prywatnej praktyki bez gabinetu landing zwykle wystarcza. Przebudowa z zachowaniem pozycji od 4000 zł."],
          ["Czy na stronie nie można pisać terminów zawodowych?", "Można i trzeba, ale obok słów rodzica, a nie zamiast nich. Rodzic szuka „dwulatek nie mówi”, nie „opóźniony rozwój mowy”, i strona napisana samymi terminami z tym zapytaniem się nie spotyka."],
          ["Czy potrzebna jest osobna podstrona o dzieciach dwujęzycznych?", "Dla gabinetu, który pracuje z rodzinami ukraińskimi, białoruskimi i rosyjskojęzycznymi, to zwykle najczęściej odwiedzana podstrona po stronie głównej. Rodzice boją się, że drugi język szkodzi dziecku, i nie znajdują specjalisty, który zajmuje się właśnie tym."],
          ["Czy pisać o czasie oczekiwania?", "Tak, podając własny najbliższy termin. Rodzic, który płaci prywatnie, robi to głównie dlatego, że nie chce czekać, a zestawienie z tym, co usłyszał w przychodni, zrobi sam."],
          ["Czy pisać, że wydaję opinię logopedyczną?", "Tak, jednym zdaniem: czy ją wydajesz, po jakiej liczbie spotkań i ile to kosztuje. Część rodziców szuka właśnie tego dokumentu z nazwy i dzwoni po kolei do gabinetów, które o tym milczą."],
          ["Co pisać o liczbie zajęć?", "Nie liczbę i nie termin, a porządek pracy: ile trwa diagnoza, że po niej podajesz przedział i częstotliwość, po jakim czasie przedział się uściśla. Ten akapit zdejmuje więcej obiekcji niż podstrona o kwalifikacjach."],
          ["Jak opisać zajęcia online?", "Z granicą: co przez wideo idzie normalnie — automatyzacja głoski, słownictwo i gramatyka, czytanie i pisanie, nastolatki i dorośli — a co wymaga obecności albo zastrzeżeń. Taka strona przynosi zgłoszenia z innych miast, a nie odwołania i zwroty."],
          ["Czy potrzebna jest podstrona dla dorosłych po udarze?", "Jeśli bierzesz takich pacjentów — tak, osobna. Czyta ją nie sam pacjent, a jego dorosłe dzieci, w pierwszych tygodniach po zdarzeniu, i potrzebują innych odpowiedzi niż rodzice dzieci."],
          ["Czy da się przebudować stronę bez utraty ruchu z wyszukiwania?", "Da się. Każdy istniejący adres zostaje spisany, każdy zmieniony przekierowany, a podstrony, które już przynoszą zgłoszenia, zachowują tekst zamiast być przepisane pod nowy wygląd."],
          ["Do kogo należy strona?", "Do ciebie: kod, domena, konto hostingowe, treści i wszystkie dostępy. Nic nie zostaje u mnie jako dźwignia."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamówienie strony dla logopedy: co mi przysłać"),
        p("Napisz, czy pracujesz sam czy gabinetem, z jakim wiekiem i jakimi wadami wymowy, czy bierzesz dzieci dwujęzyczne i dorosłych po udarze, czy wydajesz opinię logopedyczną, czy prowadzisz zajęcia online, ile kosztują diagnoza i zajęcia oraz w jakich językach pracujesz. Dołącz adres obecnej strony, jeśli jest. Odpowiadam w jeden dzień roboczy, co bym zrobił i ile to kosztuje."),
      ],
    },
  ],
};
