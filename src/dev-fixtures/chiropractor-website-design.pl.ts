// Landing page fixture: Strona internetowa dla fizjoterapeuty (PL), group
// «chiropractor-website-design». Market version for Poland, not a translation
// of chiropractor-website-design.en: the Polish market has almost no
// chiropractors, so the page is for gabinety fizjoterapii, osteopaci and
// terapeuci manualni; chiropraktyka named once.
// Semantic core: ref/medical-practices.md has no PL phrases for this group
// (under the source’s floor). Target phrases from BRIEF.md and the slug:
// strona internetowa dla fizjoterapeuty (H1, several H2), strona dla
// fizjoterapeuty, strona gabinetu fizjoterapii, strona dla osteopaty (intro,
// H2s). EN «physical therapist website design» 70 confirms the demand type.
// Intent: ref/intent-check-medical-practices.md — «strona dla fizjoterapeuty»
// vs «pozycjonowanie gabinetu fizjoterapii» 0 of 10 shared URLs → separate
// pages. The «strona dla fizjoterapeuty» top 10 mixes KIF (kif.info.pl),
// ZnanyLekarz, zarezerwuj.pl and gabinet sites → owners compare a profile on
// a booking platform with their own site; this page answers that.
// Polish angles: own site vs Booksy / ZnanyLekarz / szablon; therapy pages on
// one template; profile with PWZFz and courses; cennik, pakiety and NFZ path;
// booking embed; RODO in forms; exercise videos without slowing the site;
// informacja, nie reklama (short, design side); AI-readable facts; process and
// price. Giuseppe = calm design, guard rails, manuals, 44 working days, 468
// posts kept. NDA medical system mentioned once.
// NOT on this page: Google Maps ranking, phrase research, opinie routine, KIF
// rules in depth (/pl/pozycjonowanie-strony-gabinetu-fizjoterapii — sibling); doctors
// and przychodnie (/pl/strona-internetowa-dla-lekarza — linked once).
import { p, h2, li, ol, link, k } from "./pt";

export const chiropractorWebsiteDesignPl = {
  lang: "pl",
  group: "chiropractor-website-design",
  slug: "strona-internetowa-dla-fizjoterapeuty",
  title: "Strona internetowa dla fizjoterapeuty",
  heading: "Strona internetowa dla fizjoterapeuty",
  excerpt:
    "Tworzę strony internetowe dla fizjoterapeutów, osteopatów i gabinetów terapii manualnej: podstrony terapii, profile z numerem PWZFz, cennik i pakiety tekstem, rezerwacja online z Waszego kalendarza i formularze, które nie zbierają danych o zdrowiu.",
  seo: {
    metaTitle: "Strona www dla fizjoterapeuty i osteopaty | Bandziuk",
    metaDescription:
      "Strona internetowa dla fizjoterapeuty i osteopaty: podstrony terapii, profile z PWZFz, cennik, rezerwacja online, formularze zgodne z RODO. Od 3000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt + wykonanie, jedna cena", "Od 3000 zł", "Strona należy do Was"],
  heroPhonePoints: ["Umów pierwszą wizytę", "Terapia manualna", "Cennik i pakiety", "Zadzwoń"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona internetowa dla fizjoterapeuty lub osteopaty, projekt w cenie", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Strona gabinetu fizjoterapii z profilami terapeutów, podstronami terapii, rezerwacją online, wideo i wersjami językowymi, projekt w cenie", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co dostajesz ze stroną internetową dla fizjoterapeuty",
      items: [
        { _key: k("o"), iconName: "image", title: "Zdjęcia Waszej sali i zespołu", text: "Stoły, sprzęt, terapeuci przy pracy" },
        { _key: k("o"), iconName: "layers", title: "Podstrona dla każdej terapii", text: "Fizjoterapia, osteopatia, terapia manualna, masaż" },
        { _key: k("o"), iconName: "plug", title: "Rezerwacja z Waszego kalendarza", text: "Booksy, ZnanyLekarz albo program gabinetu" },
        { _key: k("o"), iconName: "file-text", title: "Cennik i pakiety zapisane tekstem", text: "Wizyta, pakiet, NFZ — bez plików PDF" },
        { _key: k("o"), iconName: "shield-check", title: "Formularze bez danych o zdrowiu", text: "RODO od pierwszego szkicu" },
        { _key: k("o"), iconName: "sparkles", title: "Czytelna dla Google i ChatGPT", text: "Metody, terapeuci, godziny i adres tekstem" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona fizjoterapeuty lub osteopaty", value: "3000–6000 zł", note: "projekt w cenie" },
        { _key: k("r"), label: "Gabinet: terapeuci, terapie, rezerwacja, wideo", value: "od 8500 zł", note: "projekt w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: strony, które zaprojektowałem i zbudowałem — od prywatnej praktyki terapeutycznej",
      subtitle:
        "Giuseppe, psychoterapeuta z Mediolanu, prowadzi prywatną praktykę, do której ludzie zaglądają często w stresie — podobnie jak pacjent z bólem do gabinetu fizjoterapii. Zaprojektowałem mu spokojną stronę: ciemny motyw z jasnymi sekcjami, szeryfowy krój z prawdziwą kursywą, mapę gabinetów, formularz na poczcie w jego domenie i analitykę włączaną dopiero po zgodzie. Kluczowych podstron nie da się przypadkiem usunąć, a właściciel dostał instrukcję i nagrania wideo. Obok: strona w stylu premium dla warszawskiej firmy remontowo-inwestycyjnej, przebudowa strony pracowni renowacji felg, wielojęzyczna strona agencji edukacyjnej dla dziesięciu krajów i Cyprus VIP Estates z katalogiem nieruchomości w pięciu językach.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "psychotherapist-website-milan",
        "renovation-and-investment-website-with-premium-design",
        "felgilab-wordpress-rebuild",
        "full-multilingual-website-development-and-seo-for-student-services",
        "build-and-optimize-a-multilingual-real-estate-platform",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej dla fizjoterapeuty",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: proponuję układ strony głównej, podstrony terapii i profilu terapeuty oraz stałą cenę.",
      contextLabel: "Nazwa gabinetu lub obecna strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Co macie teraz?", options: ["Nic poza profilem w Booksy lub ZnanyLekarz", "Stronę z kreatora", "Starą stronę na WordPressie", "Profil na Instagramie"] },
        { _key: k("z"), question: "Ilu terapeutów przyjmuje w gabinecie?", options: ["Jeden", "Dwóch–trzech", "Czterech i więcej", "Kilka placówek"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Tworzę strony internetowe dla fizjoterapeutów — gabinetów fizjoterapii, osteopatów i terapeutów manualnych — od układu i projektu po wykonanie, więc za wygląd i działanie strony odpowiada jedna osoba. Strona fizjoterapeuty jest otwierana najczęściej na telefonie, przez kogoś, kogo coś boli albo kto właśnie wyszedł od ortopedy ze skierowaniem. Ma mu pozwolić w minutę sprawdzić, czy trafił we właściwe miejsce, komu może zaufać i jak umówić pierwszą wizytę."),

        h2("Strona internetowa dla fizjoterapeuty: co pacjent sprawdza na pierwszym ekranie"),
        p("Na ekranie telefonu, zanim pacjent cokolwiek przewinie, mieszczą się cztery rzeczy i w takiej kolejności je układam:"),
        li("co robicie i gdzie — „Fizjoterapia i terapia manualna kręgosłupa, Gdynia Orłowo”, a nie hasło o zdrowym ruchu"),
        li("przycisk rezerwacji i przycisk połączenia, przypięte na dole ekranu na każdej podstronie"),
        li("godziny przyjęć i informacja, czy przyjmujecie na NFZ"),
        li("prawdziwe zdjęcie sali albo terapeuty, a nie grafika kręgosłupa z banku zdjęć"),
        p("Litery mają co najmniej 16 pikseli, kontrast spełnia poziom AA wytycznych WCAG, a przyciski są duże i oddalone od siebie — osoba z bólem barku nie trafia w drobne linki. Treść jest rzeczowa: zamiast obietnic, że „postawimy na nogi”, opis tego, co dzieje się podczas wizyty."),

        h2("Własna strona fizjoterapeuty, profil w Booksy czy gotowy szablon"),
        p("Wielu fizjoterapeutów zaczyna od profilu w Booksy albo ZnanyLekarz i to rozsądny start: kalendarz działa od pierwszego dnia. Profil jest jednak częścią serwisu — obok pokazują się inni terapeuci, opis metod mieści się w kilku zdaniach, a wygląd ustala platforma. Strona z kreatora albo gotowego szablonu uruchamia się szybko, ale zwykle ma ograniczoną liczbę podstron i zostaje u dostawcy, gdy zrezygnujecie z abonamentu."),
        p("Własna strona nie zastępuje profilu, tylko go uzupełnia: kalendarz z serwisu można na niej osadzić, a pacjent, który zna Wasze nazwisko, trafia najpierw do Was, a nie na listę innych gabinetów. Domena, treści i kod należą do Was."),

        h2("Podstrony terapii na stronie gabinetu fizjoterapii: jeden układ dla każdej metody"),
        p("Fizjoterapia ortopedyczna, osteopatia, terapia manualna, fizjoterapia uroginekologiczna, masaż leczniczy — każda metoda dostaje podstronę zbudowaną według tego samego wzoru, żeby pacjent szybko się w nich orientował:"),
        li("czym jest metoda, opisane zwykłymi słowami, i z jakimi problemami przychodzą do niej pacjenci"),
        li("jak wygląda pierwsza wizyta: wywiad, badanie, terapia, ile trwa i w co się ubrać"),
        li("którzy terapeuci ją prowadzą, ze zdjęciami i linkami do profili"),
        li("cena wizyty i przycisk rezerwacji na końcu"),
        p("Pacjenci, którzy szukali „kręgarza” albo czytali o chiropraktyce, znajdują na podstronie terapii manualnej wyjaśnienie, czym ta praca jest u Was. Każda podstrona ma datę ostatniej aktualizacji i nazwisko terapeuty, który ją zatwierdził."),

        h2("Profil fizjoterapeuty na stronie: numer PWZFz, kursy i prawdziwe zdjęcia"),
        p("Pacjent wybiera terapeutę bardziej niż gabinet. Każdy fizjoterapeuta ma profil według jednego szablonu: zdjęcie zrobione w Waszej sali, tytuł i numer prawa wykonywania zawodu fizjoterapeuty, ukończone kursy i szkolenia, metody, w których pracuje, pacjenci, z którymi pracuje najczęściej — sportowcy, kobiety po porodzie, seniorzy — i przycisk rezerwacji właśnie do tej osoby. Opinie pacjentów zostawiam w niezależnych serwisach i linkuję do nich, bo cytaty pochwał na własnej stronie gabinetu łatwo uznać za reklamę."),
        p("Pacjenci po operacji kolana czy biodra przychodzą o kulach, dlatego podstrona kontaktu mówi więcej niż adres: czy jest parking pod gabinetem, winda albo wejście bez schodów, na którym piętrze jest sala i ile minut idzie się od przystanku. Jeśli w gabinecie przyjmuje ktoś po angielsku albo po ukraińsku, profil tej osoby to podaje, a przy kilku językach strona dostaje osobne wersje z własnymi adresami."),

        h2("Cennik, pakiety wizyt i NFZ na stronie gabinetu fizjoterapii"),
        p("Cennik to podstrona, którą pacjenci otwierają najczęściej po głównej. Ceny są tekstem, nie plikiem PDF ani zdjęciem tabeli: pojedyncza wizyta, konsultacja z badaniem, pakiety kilku wizyt, dojazd do pacjenta, jeśli go oferujecie. Gabinet z umową z NFZ dostaje osobny blok: kto może skorzystać, że potrzebne jest skierowanie, jak się zapisać na listę i czego się spodziewać. Pacjent od razu widzi, którą ścieżką ma iść."),

        h2("Rezerwacja online na stronie fizjoterapeuty: Booksy, ZnanyLekarz albo kalendarz gabinetu"),
        p("Rezerwacja jest najważniejszą ścieżką na stronie. Za przyciskiem stoi to, czego już używacie: osadzony kalendarz z Booksy albo ZnanyLekarz, kalendarz z programu do prowadzenia gabinetu albo krótka prośba o termin, po której recepcja oddzwania. Pacjent widzi jasno, czy termin jest potwierdzony, czy ktoś się z nim skontaktuje. Widżet ładuje się dopiero po kliknięciu, żeby nie spowalniał strony."),

        h2("Formularze i RODO na stronie gabinetu fizjoterapii"),
        p("W formularzu kontaktowym pacjenci chętnie opisują wyniki rezonansu i przebieg operacji, a dane o zdrowiu to w RODO szczególna kategoria. Projektuję formularz tak, żeby pytał tylko o imię, telefon, rodzaj wizyty i preferowany termin, z prośbą przy polu wiadomości, by nie opisywać objawów. Klauzula informacyjna stoi przy formularzu, a skrypty analityczne nie czytają formularzy ani stron rezerwacji. Czy konfiguracja spełnia Wasze obowiązki, potwierdza prawnik albo inspektor ochrony danych."),
        p("Około pięciu lat temu pracowałem nad systemem medycznym, który przetwarzał dane pacjentów; obejmuje go NDA, więc nie podaję nazwy ani szczegółów. Wyniosłem z tego prostą zasadę: strona ma pytać pacjenta o tak mało informacji o zdrowiu, jak to tylko możliwe."),

        h2("Ćwiczenia i wideo na stronie fizjoterapeuty bez spowalniania strony"),
        p("Krótkie nagrania ćwiczeń, sali i przebiegu terapii pomagają pacjentowi zdecydować się na pierwszą wizytę, ale ciężkie filmy spowalniają stronę. Każde wideo ładuje się dopiero po dotknięciu, a do tego czasu widać zdjęcie; zdjęcia są przycięte pod telefon i zapisane w nowoczesnych formatach. Ćwiczenia dla konkretnych pacjentów lepiej wysyłać po wizycie albo umieścić na niepublicznej podstronie — publiczna strona opisuje metody, a nie zastępuje terapii."),

        h2("Strona internetowa dla fizjoterapeuty, którą ChatGPT i Google AI Overviews potrafią przeczytać"),
        p("Pacjenci pytają ChatGPT i podsumowania AI w Google o fizjoterapeutę w okolicy, który zajmuje się terapią manualną albo ma terminy w sobotę. Asystent poleca tylko tych, o których coś przeczytał i mógł to porównać z innymi źródłami. Dlatego na stronie metody, terapeuci z kwalifikacjami, godziny, adres i kontrakt z NFZ to zwykły tekst plus dane strukturalne, a każda z tych informacji brzmi tak samo jak w wizytówce Google i w Booksy. Tak zbudowałem stronę Giuseppe — z danymi strukturalnymi terapeuty, gabinetów, problemów i metod oraz regułami dla robotów AI w pliku robots.txt — a jej nowe podstrony pojawiają się już w odpowiedziach ChatGPT."),
        p(
          "Widoczność w odpowiedziach AI to dalsza praca, opisana na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ", a pozycje w Google i w Mapach — na stronie ",
          link("pozycjonowanie gabinetu fizjoterapii", "/pl/pozycjonowanie-strony-gabinetu-fizjoterapii"),
          ".",
        ),

        h2("Jak powstaje strona internetowa dla fizjoterapeuty"),
        ol("Brief. Przesyłacie listę terapeutów i metod, cennik, godziny, informacje o NFZ i pytania, które najczęściej słyszycie przez telefon. Rozmawiamy przez telefon lub wideo."),
        ol("Ścieżki pacjenta. Uzgadniamy na ekranie telefonu trzy najważniejsze: rezerwacja pierwszej wizyty, wybór terapii, kontakt."),
        ol("Projekt. Strona główna, podstrona terapii i profil terapeuty są projektowane w całości, reszta według tego samego systemu."),
        ol("Wykonanie i przekazanie. Podłączam rezerwację, sprawdzam formularze, szybkość i dostępność, a Wy dostajecie instrukcję edycji cennika, godzin i profili."),
        p(
          "Dla skali: strona Giuseppe, dwujęzyczna i z setkami podstron, powstała w 44 dni robocze od pierwszej linii kodu do przekazania, razem z instrukcją dla właściciela po angielsku i po włosku. Przy przenosinach z WordPressa wszystkie 468 wpisów zachowało adresy dzięki przekierowaniom 301 — tak samo podchodzę do każdej ",
          link("przebudowy strony internetowej", "/pl/oferty/przebudowa-strony-internetowej"),
          ". Jak pracuję przy nowych stronach, opisuję w ofercie ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ".",
        ),

        h2("Ile kosztuje strona internetowa dla fizjoterapeuty"),
        li("Prosta strona fizjoterapeuty lub osteopaty — strona główna, terapie, profil, cennik, kontakt i przycisk rezerwacji: od 3000 do 6000 zł."),
        li("Strona gabinetu fizjoterapii z profilami kilku terapeutów, podstronami terapii, ścieżką NFZ, rezerwacją online, wideo, wersjami językowymi i testem dostępności: od 8500 zł."),
        p(
          "Projekt graficzny jest w cenie w obu przypadkach. Lekarze i przychodnie znajdą swoją ofertę na stronie ",
          link("strona internetowa dla lekarza", "/pl/strona-internetowa-dla-lekarza"),
          ", a pełne widełki są w ",
          link("cenniku", "/pl/cennik"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strona internetowa dla fizjoterapeuty: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona internetowa dla fizjoterapeuty?", "Od 3000 do 6000 zł za prostą stronę jednego terapeuty lub małego gabinetu, od 8500 zł za stronę gabinetu z kilkoma terapeutami, podstronami terapii, rezerwacją online i wersjami językowymi. Projekt jest w cenie; po krótkim opisie gabinetu podaję stałą kwotę."],
          ["Ile trwa stworzenie strony dla gabinetu fizjoterapii?", "Projekt strony głównej, podstrony terapii i profilu jest zwykle gotowy tydzień–dwa po briefie, a cała strona w cztery–sześć tygodni, zależnie od liczby terapeutów i od tego, jak szybko są zdjęcia i zatwierdzone teksty."],
          ["Czy na stronie może działać kalendarz z Booksy albo ZnanyLekarz?", "Tak. Kalendarz osadzam na stronie albo podpinam pod przycisk rezerwacji; dane w profilu i na stronie są takie same."],
          ["Czy sam mogę zmieniać cennik, godziny i terapeutów?", "Tak. Edycja odbywa się w prostym panelu, także z telefonu, a układ strony pozostaje spójny. Dostajecie krótką instrukcję."],
          ["Czy strona dla osteopaty różni się od strony fizjoterapeuty?", "Układ jest ten sam, różni się treść: podstrony metod, opis kwalifikacji i tego, z czym pacjenci przychodzą. W gabinetach, gdzie fizjoterapeuta pracuje też osteopatią, obie metody mają osobne podstrony."],
          ["Czy można zamieszczać opinie pacjentów na stronie?", "Bezpieczniej linkować do opinii w Google, ZnanyLekarz albo Booksy niż cytować je na własnej stronie, bo cytaty łatwo uznać za reklamę. Aktualne zasady warto sprawdzić w Krajowej Izbie Fizjoterapeutów."],
          ["Czy pracujesz z gabinetami spoza Warszawy?", "Tak, z całej Polski. Projekt i wykonanie robię zdalnie, a rozmowy prowadzimy przez wideo lub telefon."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową dla fizjoterapeuty: co mi wysłać"),
        p(
          "Wyślijcie nazwę gabinetu, link do obecnej strony albo profilu w Booksy lub ZnanyLekarz, listę terapeutów i metod, cennik, informację, czy przyjmujecie na NFZ, i system rezerwacji, którego używacie. Kilka zdjęć sali i zespołu pomoże mi pokazać pierwszy ekran, który wygląda jak Wasz gabinet. Odpowiem propozycją układu i stałą ceną. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
