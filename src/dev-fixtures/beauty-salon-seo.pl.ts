// Fixture landinga: pozycjonowanie strony salonu kosmetycznego (PL), grupa
// «beauty-salon-seo». Przepisanie istniejącej strony na starym szablonie pod
// tym samym adresem /pl/seo-salonu-kosmetycznego — przez replace-landing.cjs.
//
// Rdzeń: research/pseo/core.csv — po polsku zmierzonego popytu na te
// sformułowania nie ma (zero). Wersje angielska i rosyjska mają 210 i 260,
// więc strona powstaje pod ten sam sens bez liczenia na wolumen.
//
// Rozdzielenie, decyzja z 02.11.2026: strony salonu fryzjerskiego, spa, kliniki
// kosmetologii i studia tatuażu są już na nowym szablonie i nie wolno z nimi
// konkurować. Ta strona dotyczy salonu WIELOUSŁUGOWEGO, a węższe formaty są
// odsyłane linkiem. Sprawdzenie intencji (intent-check-creative-leisure.md)
// dało na parach angielskich 0 z 10 przy stronach i 2 z 10 przy SEO — czyli
// pasmo «patrzeć oczami», stąd wyraźne rozdzielenie treścią.
//
// Zachowane merytorycznie ze starej strony: dwie grupy zapytań («usługa plus
// miejsce» oraz «w pobliżu»), sens biznesowy (puste okna w grafiku to utracony
// przychód, więc SEO mierzy się rezerwacjami, nie pozycjami) i cała sekcja o
// wyszukiwaniu AI — znaczniki BeautySalon, zgodność z Booksy i profilem Google,
// pytania zadawane na recepcji.
//
// Usunięte: zahardkodowane bloki starego szablonu, blok opinii (decyzja
// właściciela z 25.10.2026), tabela z emoji.
//
// Zasada właściciela dla PL: «pozycjonowanie strony X», nigdy «pozycjonowanie
// firmy X». JDG jest zwolniona z VAT, więc «faktura», nigdy «faktura VAT».
import { p, h2, h3, li, link, k } from "./pt";

export const beautySalonSeoPl = {
  lang: "pl",
  group: "beauty-salon-seo",
  slug: "seo-salonu-kosmetycznego",
  title: "Pozycjonowanie strony salonu kosmetycznego",
  heading: "Pozycjonowanie strony salonu kosmetycznego: zapełnione okna w grafiku, a nie raport o pozycjach",
  excerpt:
    "Zajmuję się pozycjonowaniem stron salonów kosmetycznych razem z GEO i AEO — pracą, po której salon jest wymieniany w odpowiedziach ChatGPT, Perplexity i przeglądów AI w Google. Podstrona pod każdy zabieg, profil Google wygrywający mapę, ceny i czas trwania tekstem, a nie zdjęciem cennika, i droga do rezerwacji, którą da się dokończyć. Audyt i poprawki robi jedna osoba.",
  seo: {
    metaTitle: "SEO salonu kosmetycznego — rezerwacje z Google i AI",
    metaDescription:
      "Pozycjonowanie strony salonu kosmetycznego: podstrona pod każdy zabieg, profil Google i mapa, ceny tekstem, plus GEO i AEO. Audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Podstrona pod każdy zabieg", "Audyt od 1000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Laminacja rzęs w pobliżu", "Koloryzacja na ciemnych włosach", "Otwarte w sobotę wieczorem", "Poleca ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO salonu kosmetycznego: strona, profil Google i odpowiedzi AI", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO: podstrony zabiegów, ceny, dane strukturalne, droga do rezerwacji", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie strony salonu kosmetycznego", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co obejmuje",
      title: "Co obejmuje pozycjonowanie strony salonu kosmetycznego",
      items: [
        { _key: k("o"), iconName: "layers", title: "Podstrona pod każdy zabieg", text: "Koloryzacja, laminacja, hybryda, oczyszczanie, laser" },
        { _key: k("o"), iconName: "map-pin", title: "Profil Google wygrywający mapę", text: "Godziny, zdjęcia, opinie, lista zabiegów — zgodne ze stroną" },
        { _key: k("o"), iconName: "file-text", title: "Ceny i czas trwania tekstem", text: "A nie cennikiem sfotografowanym na Instagram" },
        { _key: k("o"), iconName: "calendar", title: "Krótka droga do rezerwacji", text: "Od podstrony zabiegu do zajętego okna w dwa kliknięcia" },
        { _key: k("o"), iconName: "zap", title: "Szybkość na telefonie", text: "Te strony otwiera się na telefonie, między klientkami" },
        { _key: k("o"), iconName: "sparkles", title: "Widoczność w odpowiedziach AI (GEO, AEO)", text: "ChatGPT, Perplexity i przeglądy AI w Google" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Jak klientka naprawdę szuka salonu i dlaczego to rozstrzyga o strukturze strony"),
        p("W branży beauty prawie nie ma zapytań ogólnych. Nikt nie szuka «usług kosmetycznych» — szuka jednego zabiegu, w jednym miejscu, często na jeden konkretny wieczór. Ten fakt rozstrzyga o tym, jak powinna być zbudowana strona."),
        p("Popyt niosą dwie grupy. Zabieg plus miejsce: «koloryzacja <miasto>», «laminacja rzęs <dzielnica>», «depilacja laserowa <miasto>», «hybryda blisko biura». I grupa «w pobliżu»: «salon kosmetyczny w pobliżu», «paznokcie blisko mnie», «brwi w pobliżu», «salon otwarty teraz». Druga grupa to podstawa lokalnego SEO: klientka już wie, czego chce, i wybiera wyłącznie po odległości i wolnym terminie."),
        p("Strona zbudowana wokół jednej podstrony „Usługi” nie odpowiada żadnej z tych grup. Strona zbudowana wokół zabiegów odpowiada obu — i dokładnie tę strukturę może potem przeczytać asystent AI."),

        h2("Podstrona pod każdy zabieg zamiast jednej listy usług"),
        p("Trzon SEO salonu to osobne podstrony pod pracę: koloryzacja i techniki rozjaśniające, strzyżenie, przedłużanie i laminacja rzęs, brwi, manicure hybrydowy, pedicure, oczyszczanie i peelingi, depilacja laserowa, woskowanie."),
        p("Każda odpowiada na to, o co pytają na recepcji i w wiadomościach: ile trwa, ile kosztuje albo od ilu, kto z zespołu wykonuje, jak długo trzyma się efekt, czy potrzebne jest przygotowanie albo próba uczuleniowa, jak pielęgnować potem. To właśnie jest treść, której klientka potrzebuje przed rezerwacją, i ta sama treść się wyświetla: opis zabiegu w dwóch linijkach nie wyświetla się na nic."),
        p("Jeśli ludzi przyprowadza konkretna osoba z zespołu, ta osoba dostaje własną podstronę: imię, specjalizacja, prace i bezpośredni link do rezerwacji właśnie u niej."),

        h2("Profil Google i mapa rozstrzygają wcześniej niż strona"),
        p("U salonu wyniki lokalne i mapa zwykle stoją wyżej niż zwykłe linki, a często klientka rezerwuje, nie otwierając strony w ogóle. Traktowanie profilu jako drobiazgu przy jednoczesnym dopieszczaniu strony to najczęstszy błąd w tej niszy."),
        p("Dlatego praca zaczyna się stamtąd: pełna lista zabiegów w profilu, godziny, które naprawdę są aktualne, włącznie z wieczornymi, prawdziwe zdjęcia wnętrza i prac, odpowiedzi na opinie i link do rezerwacji prowadzący do zabiegu, a nie na stronę główną. Potem strona i profil są doprowadzane do zgodności: klientka, która zobaczy dwie różne ceny, przestaje wierzyć obu."),

        h2("Ceny i czas trwania na stronie, a nie na zdjęciu cennika"),
        p("„Ceny na zapytanie” kosztuje salon więcej rezerwacji niż wysoka cena. Klientka wybiera między trzema salonami na telefonie, a wiadomość dostaje ten, który liczbę podał."),
        p("Cennik jako obrazek albo zrzut z relacji też nie działa: ani wyszukiwarka, ani asystent AI nie czytają tekstu wewnątrz zdjęcia, więc jest niewidoczny dokładnie dla tych kanałów, o których jest ta strona. Widełki z wyjaśnieniem, od czego zależą — długość i gęstość włosów, stan paznokci, poziom osoby wykonującej — działają lepiej niż jedna liczba i odstraszają mniej osób."),

        h2("Dlaczego strony salonów się nie wyświetlają, po częstotliwości przyczyn"),
        li("dwie linijki tekstu na zabieg — nie ma czym się wyświetlać;"),
        li("żadnych sygnałów lokalnych poza adresem w stopce;"),
        li("cennik wyłącznie jako obrazek;"),
        li("tytuły podstron „Usługi” i „Cennik”, identyczne na całej stronie;"),
        li("ciężka galeria nieskompresowanych zdjęć, wolna na telefonie;"),
        li("brak danych strukturalnych, więc godziny i ceny asystent domyśla się sam."),
        p("Nic egzotycznego tu nie ma i żadna z tych przyczyn nie wymaga przebudowy strony. Dlatego audyt strony salonu zwykle znajduje więcej, niż przyniósłby za ten sam rok budżet reklamowy."),

        h2("Rezerwacja: najkrótsza droga od podstrony zabiegu do zajętego okna"),
        p("Salon żyje z gęstości grafiku: puste okno o szóstej w piątek to przychód, który nie wróci. Dlatego strona mierzy się rezerwacjami, a nie pozycjami."),
        p("W praktyce to znaczy przycisk rezerwacji na każdej podstronie zabiegu, a nie tylko w menu; ten sam system rezerwacji, z którego faktycznie korzysta recepcja; widoczne wolne terminy wieczorne i weekendowe; numer, w który da się kliknąć. Jeśli rezerwacje idą przez Booksy albo podobny system, strona prowadzi od razu do właściwego zabiegu, a nie na jego ekran startowy."),

        h2("Co pozycjonowanie daje salonowi w liczbach biznesowych"),
        li("mniej pustych okien w grafiku;"),
        li("więcej powrotów — klientka zapamiętała i wróciła;"),
        li("możliwość planowania obłożenia zespołu;"),
        li("mniejsza zależność od reklamy;"),
        li("rozpoznawalność na własnym rynku lokalnym."),
        p("Działa to wyraźnie mocniej, kiedy salon rozumie swoją ekonomię: które zabiegi są marżowe i kogo z zespołu trzeba dociążyć. Wtedy pozycjonowanie wzmacnia właśnie te usługi, które dają zysk, a nie ruch średnio."),
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: lokalne firmy usługowe, z którymi pracowałem",
      subtitle:
        "Co te projekty mają wspólnego z salonem: klient decyduje na telefonie, w kilka minut, po cenie i odległości. Landing z zabezpieczonym dostępem do wideo, premium strona o remontach i inwestycjach, SEO i UX dla firmy auto, przebudowa strony na WordPressie i landing przechowalni opon z edytowalnym SEO.",
      picks: [
        "e-commerce-landing-page-with-secured-video-access",
        "renovation-and-investment-website-with-premium-design",
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Kiedy pojawią się efekty pozycjonowania strony salonu kosmetycznego"),
        p("Pierwsze zmiany widać po około półtora miesiąca: podstrony zabiegów, których nie było, wchodzą do indeksu i zaczynają zbierać wyświetlenia na długim ogonie. Stały wzrost rezerwacji narasta przez trzy do sześciu miesięcy, w miarę jak podstrony zbierają moc, a praca nad profilem się kumuluje."),
        p("Mapa może ruszyć szybciej, czasem w kilka tygodni: profil jest obiektem mniejszym niż strona. Kto obiecuje rezerwacje po dwóch tygodniach, obiecuje coś, nad czym nie ma kontroli."),

        h2("Ile kosztuje pozycjonowanie strony salonu kosmetycznego i co obejmuje"),
        p(
          "Audyt strony, profilu Google i odpowiedzi AI to 1000 zł. Prace jednorazowe — podstrony zabiegów, ceny, dane strukturalne, droga do rezerwacji — od 1000 do 3000 zł zależnie od zakresu. Stałe pozycjonowanie to 3500 zł miesięcznie i obejmuje część techniczną, plan treści, nowe podstrony i raportowanie. Pełny cennik jest na ",
          link("stronie z cennikiem", "/pl/cennik"),
          ", a audyt ma własną podstronę: ",
          link("audyt SEO strony internetowej", "/pl/oferty/audyt-seo-strony-internetowej"),
          ".",
        ),
        p("Audyt i poprawki robi jedna osoba. Nie dostajecie listy problemów i propozycji, żeby poszukać do niej programisty."),

        h2("Dla kogo pozycjonowanie strony salonu kosmetycznego ma sens, a dla kogo nie"),
        p("Ma sens dla salonu ze stałym zestawem zabiegów i własnym lokalem, gotowego pokazać ceny choćby widełkami, u którego ktoś odpowiada na wiadomości w godzinach pracy i który może poczekać trzy do sześciu miesięcy na część kumulującą się."),
        p("Nie ma sensu, jeśli salon działa wyłącznie z Instagrama i nie ma czego poprawiać; jeśli „ceny tylko przez telefon” to zasada; jeśli nie ma kto odpowiadać na zgłoszenia; jeśli fotele mają się zapełnić w tym tygodniu — to budżet reklamowy, a nie SEO, a reklam nie prowadzę."),
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena pozycjonowania strony salonu kosmetycznego",
      subtitle:
        "Odpowiadam w ciągu jednego dnia roboczego: co zrobiłbym pierwsze, w jakiej kolejności i za ile.",
      contextLabel: "Nazwa salonu lub strona",
      contextPlaceholder: "Link albo nazwa",
      buttonText: "Wyślij i otrzymaj wycenę",
      note: "Albo napiszcie na WhatsAppie — odpowiadam równie szybko.",
      formVariant: "seo",
      quizQuestions: [
        { _key: k("z"), question: "Jakie usługi?", options: ["Włosy", "Paznokcie i brwi", "Kosmetologia i laser", "Wszystko razem"] },
        { _key: k("z"), question: "Skąd dziś rezerwacje?", options: ["Instagram", "Wyszukiwarka i mapa", "Booksy i podobne", "Z polecenia"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Salon kosmetyczny w wyszukiwaniu AI: czym są GEO i AEO i jak się to robi"),
        p("Rezerwacja w salonie coraz częściej zaczyna się od pytania do asystenta: „Gdzie blisko mnie zrobię hybrydę w sobotę wieczorem?”, „Poleć kosmetyczkę, która robi oczyszczanie i podaje cenę na stronie”, „W którym salonie w mojej dzielnicy jest depilacja laserowa i rezerwacja online?” Asystent odpowiada z tekstu, który potrafi przeczytać i streścić, i wymienia znalezione miejsca."),
        p("Pracę opisują dwa skróty. GEO, generative engine optimization, to doprowadzenie do tego, że asystent składając rekomendację weźmie do niej Wasz salon. AEO, answer engine optimization, to zdanie na stronie, które da się powtórzyć klientce niemal dosłownie."),
        h3("Czego asystent potrzebuje znaleźć na stronie"),
        li("cennik tekstem: zabiegi, cena „od”, czas trwania, osoby wykonujące i ich specjalizacja, godziny po dniach;"),
        li("znaczniki BeautySalon z adresem, współrzędnymi i godzinami, żeby godziny powtórzone przez asystenta zgadzały się z tymi na drzwiach;"),
        li("znaczniki Service z ceną dla każdego zabiegu, żeby maszyna nie zgadywała, co wchodzi w „pielęgnację twarzy”;"),
        li("identyczne nazwa, adres, telefon i godziny w profilu Google, na Booksy, w Bing Places i na Instagramie: jeśli Booksy zamyka rezerwacje o ósmej, a strona obiecuje dziewiątą, asystent nie ma na czym się oprzeć;"),
        li("odpowiedzi na podstronach zabiegów na to, o czym pisze się w wiadomościach: czy boli, jak długo trzyma się lakier, czy peeling wymaga przygotowania."),
        p(
          "Przed wprowadzeniem zmian zadaję ChatGPT, Perplexity i przeglądom AI w Google te same pytania „jak przy rezerwacji” o Waszą okolicę i zapisuję, czy salon się pojawia i jak jest opisywany; po pracach zadaję dokładnie te same pytania ponownie. Szczegóły są na podstronie ",
          link("AI SEO i optymalizacja GEO", "/pl/oferty/ai-seo-and-geo-optymalizacja"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie strony salonu kosmetycznego: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Czy strona jest potrzebna, jeśli klientki przychodzą z Instagrama i Booksy", "Przyprowadzają te, które Was już znają. Wyszukiwarka przyprowadza te, które wybierają salon właśnie teraz, a ani Instagram, ani system rezerwacji nie odpowiadają na „ile kosztuje koloryzacja na ciemnych włosach” w sposób, który przeczyta Google albo asystent. I strona jest jedynym z tych trzech, co należy do Was."],
          ["Ile kosztuje pozycjonowanie strony salonu kosmetycznego", "Audyt 1000 zł, prace jednorazowe od 1000 do 3000 zł, stałe pozycjonowanie 3500 zł miesięcznie. O cenie decydują liczba zabiegów, stan strony i to, czy profil Google wymaga uporządkowania."],
          ["Po jakim czasie zmieni się liczba rezerwacji", "Około półtora miesiąca do pierwszych mierzalnych zmian w wyświetleniach, trzy do sześciu miesięcy do stałego wzrostu rezerwacji. Mapa może ruszyć wcześniej: profil jest obiektem mniejszym niż strona."],
          ["Czy trzeba publikować ceny", "Nie do złotówki, ale widełki i wyjaśnienie, od czego zależą — tak. „Ceny na zapytanie” traci więcej rezerwacji niż wysoka liczba, a cennik jako obrazek jest niewidoczny i dla wyszukiwarki, i dla asystenta AI."],
          ["Jesteśmy salonem fryzjerskim. Ta strona jest dla nas", "Częściowo. Fryzjerstwo ma własny popyt i własną podstronę, zbudowaną wokół koloryzacji, strzyżenia i nazwiska osoby wykonującej, a nie wokół listy różnorodnych zabiegów. Spa i kliniki kosmetologii też mają swoje."],
          ["Pracujecie z profilem Google, a nie tylko ze stroną", "Tak, i w tej niszy zwykle właśnie od niego zaczynamy. Profil często rozstrzyga rezerwację, zanim ktoś otworzy stronę, dlatego doprowadza się je do zgodności w godzinach, cenach i nazwach zabiegów."],
          ["Czy strona będzie znajdowana w ChatGPT i przeglądach AI", "To część GEO i AEO i wchodzi w pracę, a nie jest sprzedawana osobno. Najpierw pomiar — te same pytania „jak przy rezerwacji” do kilku asystentów, potem prace, potem te same pytania ponownie."],
          ["Czy gwarantujecie pierwsze miejsce", "Nie, i nikt uczciwy nie może. Mogę powiedzieć, co zostanie zrobione, w jakiej kolejności i czym będzie mierzony wynik: rezerwacjami z wyszukiwarki, nie pozycją w raporcie."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Fryzjer, spa, Warszawa albo nowa strona: podstrony obok tej"),
        p(
          "Salon fryzjerski ma własny popyt i własną podstronę: ",
          link("strona internetowa dla salonu fryzjerskiego", "/pl/strona-internetowa-dla-salonu-fryzjerskiego"),
          ". Dla spa jest ",
          link("strona internetowa dla spa", "/pl/strona-internetowa-dla-spa"),
          ". Jeśli salon jest w Warszawie, jest podejście uwzględniające konkurencję na poziomie dzielnicy: ",
          link("pozycjonowanie strony salonu kosmetycznego w Warszawie", "/pl/oferty/pozycjonowanie-strony-salonu-kosmetycznego-warszawa"),
          ". A jeśli strony nie trzeba pozycjonować, a zbudować: ",
          link("strona salonu kosmetycznego", "/pl/tworzenie-stron-internetowych-dla-branzy-beauty/strona-salonu-kosmetycznego"),
          ". O tym, jak takie strony powinny wyglądać, jest osobny tekst: ",
          link("dlaczego czarno-złoty projekt strony nie czyta się już jako drogi", "/pl/blog/czarno-zloty-projekt-strony-nie-czyta-sie-jako-drogi"),
          ".",
        ),

        h2("Zamów pozycjonowanie strony salonu kosmetycznego: co mi wysłać"),
        p("Wyślijcie stronę, jeśli jest, listę zabiegów z cenami albo widełkami, link do profilu Google i to, skąd dziś przychodzą rezerwacje. Odpowiem, co zrobiłbym pierwsze, w jakiej kolejności i za ile — a jeśli uczciwa odpowiedź brzmi, że w tym kwartale profil ruszy więcej niż strona, powiem właśnie to."),
      ],
    },
  ],
};
