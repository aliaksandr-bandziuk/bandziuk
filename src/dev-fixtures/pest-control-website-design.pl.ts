// Landing page fixture: Strona internetowa dla firmy DDD (PL), group
// «pest-control-website-design». New page. Market version for Polish firmy DDD
// (dezynsekcja, deratyzacja, dezynfekcja) — not a translation of
// pest-control-website-design.en.
// Semantic core: ref/home-services.md has no measured PL phrases for this
// niche; H1 and headings carry the slug phrase «strona internetowa dla firmy
// DDD», plus «strona firmy DDD», «kreator czy strona na zamówienie», «ile
// kosztuje strona internetowa dla firmy DDD». PL PAA in the core are SEO
// questions — they belong to /pl/pozycjonowanie-firmy-ddd.
// Intent: ref/intent-check-home-services.md — EN «pest control website design»
// vs «pest control seo» 0 of 10 shared URLs → the website page is separate
// from /pl/pozycjonowanie-strony-firmy-ddd (sibling).
// This page = what a visitor sees and does: three entrances (osoba prywatna,
// gastronomia / firma spożywcza, wspólnota / zarządca), first screen on a
// phone, pest picker with photo upload, service page order, B2B section with
// sample raport and HACCP paperwork, wspólnoty request form with building
// count, trust and discretion beside buttons (OC, środki, nieoznakowany
// samochód), technician photos, RODO form and WhatsApp, kreator vs custom,
// AI-readable design, price and process.
// NOT on this page: frazy, podstrony w Google, wizytówka, sezonowość SEO,
// Oferteo/Fixly vs SEO (/pl/pozycjonowanie-strony-firmy-ddd — sibling); wizytówka as
// a service (/pl/oferty/pozycjonowanie-lokalne); firmy sprzątające
// (/pl/strona-dla-firmy-sprzatajacej — neighbour, linked once).
// Owner’s rules: every page covers AI search; never say there are no clients
// from the visitor’s industry; projekt graficzny w cenie; no personal visits.
import { p, h2, li, ol, link, k } from "./pt";

export const pestControlWebsiteDesignPl = {
  lang: "pl",
  group: "pest-control-website-design",
  slug: "strona-internetowa-dla-firmy-ddd",
  title: "Strona internetowa dla firmy DDD",
  heading: "Strona internetowa dla firmy DDD",
  excerpt:
    "Tworzę strony internetowe dla firm DDD: telefon i wybór szkodnika na pierwszym ekranie, formularz ze zdjęciem owada, osobne wejścia dla klientów prywatnych, gastronomii i wspólnot, informacje o środkach i dyskrecji przy każdym przycisku — projekt graficzny w cenie, ceny podane w cenniku.",
  seo: {
    metaTitle: "Strona www dla dezynsekcji i deratyzacji | Bandziuk",
    metaDescription:
      "Strona internetowa dla firmy DDD: wybór szkodnika, zdjęcie owada w zgłoszeniu, oferta dla gastronomii i wspólnot, formularz zgodny z RODO. Od 3000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt + wykonanie, jedna cena", "Od 3000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Wybierz szkodnika", "Wyślij zdjęcie owada", "Umowa dla gastronomii", "Zadzwoń · WhatsApp"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona internetowa dla firmy DDD, projekt w cenie", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Strona firmy DDD z wyborem szkodnika, podstronami usług, sekcją dla gastronomii i wspólnot, formularzem ze zdjęciem i SEO lokalnym, projekt w cenie", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co dostajesz ze stroną internetową dla firmy DDD",
      items: [
        { _key: k("o"), iconName: "message-circle", title: "Wybór szkodnika jednym dotknięciem", text: "Pluskwy, prusaki, myszy, osy — i „Nie wiem, co to”" },
        { _key: k("o"), iconName: "image", title: "Formularz ze zdjęciem owada", text: "Biuro rozpoznaje szkodnika, zanim poda cenę" },
        { _key: k("o"), iconName: "file-text", title: "Osobne wejście dla firm i wspólnot", text: "Inne pytania, inny formularz, wzór raportu do pobrania" },
        { _key: k("o"), iconName: "shield-check", title: "Środki, OC i dyskrecja przy przyciskach", text: "Powrót do mieszkania, dzieci, zwierzęta, samochód bez logo" },
        { _key: k("o"), iconName: "phone", title: "Telefon i WhatsApp na każdej podstronie", text: "Przypięte na dole ekranu telefonu" },
        { _key: k("o"), iconName: "sparkles", title: "Czytelna dla Google i asystentów AI", text: "Usługi, obszar i widełki cen zapisane tekstem" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona firmy DDD", value: "3000–6000 zł", note: "projekt w cenie" },
        { _key: k("r"), label: "Wybór szkodnika, sekcja B2B, formularz ze zdjęciem, SEO lokalne", value: "od 8500 zł", note: "projekt w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: lokalne firmy usługowe, którym zaprojektowałem i zbudowałem strony",
      subtitle:
        "Warsztat samochodowy, pracownia renowacji felg i przechowalnia opon z Warszawy to firmy, które żyją z telefonów, Map Google i czytelnych podstron usług — ich strony projektowałem albo przebudowywałem właśnie pod to, a właściciel przechowalni sam edytuje teksty SEO. Obok nich: strona z projektem premium dla warszawskiej firmy remontowo-inwestycyjnej i przebudowa na WordPressie dla ScanM2, firmy skanowania laserowego 3D, która po dwóch latach bez zapytań dostaje je co tydzień. Strona firmy DDD składa się z tych samych elementów: podstrony dla każdej usługi, widocznego telefonu i zdjęć prawdziwej pracy.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
        "renovation-and-investment-website-with-premium-design",
        "architecture-website-rebuild-and-seo-scan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej dla firmy DDD",
      subtitle: "W ciągu jednego dnia roboczego odsyłam listę podstron dla Twojej firmy DDD i stałą cenę mieszczącą się w cenniku.",
      contextLabel: "Nazwa firmy lub obecna strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Kto jest Twoim głównym klientem?", options: ["Osoby prywatne", "Gastronomia i firmy spożywcze", "Wspólnoty i zarządcy", "Wszyscy po trochu"] },
        { _key: k("z"), question: "Co masz teraz?", options: ["Brak strony", "Stronę z kreatora", "Starą stronę na WordPressie", "Tylko wizytówkę Google lub profil na Oferteo"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Tworzę strony internetowe dla firm DDD — od projektu graficznego, przez wykonanie i teksty, po uruchomienie — więc całość robi jedna osoba, a cenę znasz przed pierwszą rozmową. Strona firmy zajmującej się dezynsekcją, deratyzacją i dezynfekcją ma jedno zadanie: żeby człowiek, który właśnie zobaczył coś pod zlewem, szybko zrozumiał, że trafił dobrze, i zadzwonił albo napisał."),

        h2("Strona internetowa dla firmy DDD: kto na nią wchodzi i czego szuka"),
        p("Stronę firmy DDD otwierają trzy różne osoby i każda potrzebuje innej drogi:"),
        li("osoba prywatna, zwykle zdenerwowana i na telefonie — chce wiedzieć, czy pomożecie z jej szkodnikiem, kiedy możecie przyjechać i ile to mniej więcej kosztuje"),
        li("kierownik restauracji, piekarni albo magazynu — szuka stałej umowy, raportów z wizyt i firmy, która nie zawiedzie przed kontrolą"),
        li("zarządca albo członek zarządu wspólnoty — porównuje oferty na deratyzację kilku budynków i potrzebuje protokołu i faktury"),
        p("Na stronie głównej stoją trzy wyraźne wejścia: „Mam problem w domu”, „Dla firm i gastronomii”, „Dla wspólnot i zarządców”. Każde wygląda inaczej, więc nikt nie wypełnia nie swojego formularza."),

        h2("Pierwszy ekran strony firmy DDD na telefonie"),
        p("Na pierwszym ekranie mieści się pięć rzeczy:"),
        li("co robicie i gdzie, prostymi słowami: „Dezynsekcja i deratyzacja — Poznań i powiat poznański”"),
        li("przycisk „Zadzwoń” i przycisk WhatsApp"),
        li("rząd ikon szkodników do wyboru"),
        li("jedno zdanie dowodu: lata na rynku, ocena z Google, liczba stałych umów, jeśli możesz ją podać"),
        li("zdjęcie Waszego technika przy pracy"),
        p("Animacje owadów, filmy z oprysku na cały ekran i hasła o „świecie bez szkodników” schodzą niżej albo znikają. Telefon i WhatsApp są przypięte na dole ekranu na każdej podstronie."),

        h2("Wybór szkodnika i formularz ze zdjęciem na stronie firmy DDD"),
        p("Klient często nie wie, co ma: „małe brązowe robaki w kuchni” mogą być prusakami, mrówkami albo szkodnikami mąki. Rząd prostych ikon — pluskwy, prusaki, mrówki, osy i szerszenie, myszy i szczury — prowadzi od razu na właściwą podstronę. Ostatnia ikona, „Nie wiem, co to”, otwiera krótki formularz, w którym można dodać zdjęcie z telefonu. Biuro rozpoznaje szkodnika i dzwoni z konkretną propozycją, a nie z pytaniem."),
        p("Ikony są rysunkami w kolorze firmy, nie zbliżeniami karaluchów obok logo. Prawdziwe zdjęcia owadów są na podstronach szkodników, małe i niżej, tam gdzie klient porównuje je z tym, co znalazł."),

        h2("Podstrona usługi DDD: od objawów do terminu zabiegu"),
        p("Podstrona konkretnej usługi, na przykład likwidacji pluskiew, prowadzi klienta w kolejności, w jakiej myśli:"),
        ol("Objawy jego słowami: „Ugryzienia rano? Ciemne plamki na materacu?” — i przycisk telefonu."),
        ol("Jak wygląda zabieg i ile wizyt zwykle potrzeba."),
        ol("Jak przygotować mieszkanie, w punktach, do zapisania na telefonie."),
        ol("Kiedy można wrócić do pomieszczeń, co z dziećmi i zwierzętami."),
        ol("Widełki ceny i od czego zależą."),
        ol("Gwarancja: co robicie, jeśli problem wróci."),
        ol("Dwie–trzy opinie i przycisk umówienia terminu."),
        p("Usługi pilne, jak gniazdo szerszeni nad wejściem, mają krótszą wersję: dwa zdania i telefon."),

        h2("Sekcja dla gastronomii i firm spożywczych na stronie firmy DDD"),
        p("Kierownik lokalu nie zamawia zabiegu przez formularz w trzy kliknięcia. Chce zobaczyć, że rozumiecie kontrole sanepidu i wymagania HACCP, a potem porozmawiać. Sekcja dla firm ma własną pozycję w menu i spokojniejszy wygląd: rodzaje obiektów ze zdjęciem — restauracje, piekarnie, sklepy, magazyny, zakłady produkcyjne — opis tego, co obejmuje umowa, wzór raportu z wizyty i planu rozmieszczenia stacji do pobrania oraz formularz z pytaniem o rodzaj obiektu, powierzchnię i termin najbliższej kontroli albo audytu. Zgłoszenia z tej sekcji trafiają do osoby, która podpisuje umowy, a nie do kolejki zleceń domowych."),

        h2("Deratyzacja dla wspólnot i zarządców: formularz zapytania ofertowego na stronie firmy DDD"),
        p("Zarządca chce dostać ofertę, którą da się położyć na stole zarządu wspólnoty. Formularz dla niego pyta o liczbę budynków, adresy, rodzaj pomieszczeń — piwnice, zsypy, altany śmietnikowe — i preferowany termin, a obok są do pobrania wzór protokołu z deratyzacji i przykładowa oferta. Przed sezonami wiosennym i jesiennym na górze tej sekcji pojawia się pasek z wolnymi terminami, który biuro samo włącza i wyłącza w panelu."),

        h2("Zaufanie i dyskrecja na stronie firmy DDD: środki, OC, samochód bez logo"),
        p("Technik wchodzi do mieszkania, w którym są dzieci i pies, i używa środków chemicznych. Klient chce mieć powody, żeby go wpuścić, i strona pokazuje je obok przycisków, a nie w stopce:"),
        li("pełne dane firmy, NIP i informacja o ubezpieczeniu OC"),
        li("jedno zdanie o stosowanych środkach biobójczych i link do podstrony o bezpieczeństwie"),
        li("gwarancja zapisana prostymi słowami"),
        li("ocena z wizytówki Google i dwie–trzy opinie z podanym źródłem"),
        li("informacja o dyskrecji — nieoznakowany samochód, technik bez napisów na plecach — jeśli to oferujecie"),
        p("Przy pluskwach i karaluchach dyskrecja bywa dla klienta ważniejsza niż cena, więc na tych podstronach stoi tuż przy przycisku."),

        h2("Zdjęcia techników i samochodów zamiast stockowych kombinezonów na stronie firmy DDD"),
        p("Zdjęcie człowieka w masce i białym kombinezonie z banku zdjęć straszy i nic nie mówi o Twojej firmie. Twój technik w firmowej koszulce przy drzwiach klienta, samochód z logo, starannie postawiona stacja deratyzacyjna, uszczelniona szczelina przy drzwiach garażu — to pokazuje firmę, której sąsiedzi nie musieliby się wstydzić. Zdjęcia z telefonu wystarczą, jeśli są robione w dzień i według krótkiej listy ujęć, którą przygotowuję."),

        h2("Formularz zgodny z RODO, WhatsApp i zgłoszenia do biura firmy DDD"),
        p("Większość klientów prywatnych woli napisać niż dzwonić. Przycisk WhatsApp otwiera wiadomość z gotowym początkiem — szkodnik i podstrona, z której klient pisze — a formularz pyta tylko o to, czego biuro potrzebuje do pierwszej odpowiedzi: miejscowość, szkodnik, telefon, opcjonalnie zdjęcie. Obok formularza stoi krótka informacja o administratorze danych z odnośnikiem do polityki prywatności, a analityka startuje dopiero wtedy, gdy klient zgodzi się na cookies. Wiadomości z formularza dostaje biuro — mailem, SMS-em albo w programie do planowania zleceń, jeśli da się do niego przesyłać dane."),

        h2("Kreator stron, szablon czy strona na zamówienie dla firmy DDD"),
        p("Kreator albo gotowy szablon wystarczy jednoosobowej firmie, która dostaje zlecenia głównie z poleceń i z Oferteo: kilka podstron, telefon, formularz. Ograniczenia wychodzą, gdy firma rośnie — brak miejsca na wybór szkodnika, jedna podstrona dla wszystkich usług, sekcja dla firm doklejona na końcu, formularz bez zdjęcia. Strona na zamówienie opłaca się, gdy macie stałe umowy z gastronomią, obsługujecie wspólnoty albo płacicie za reklamy, które prowadzą na stronę."),

        h2("Strona firmy DDD, którą ChatGPT i Google AI Overviews potrafią przeczytać"),
        p("Coraz częściej ktoś pyta ChatGPT, Perplexity albo podsumowanie AI w Google, kto w jego mieście usuwa pluskwy albo czy po zabiegu na karaluchy można zostać w mieszkaniu. Asystenci czytają tekst, a nie ikony i grafiki. Jeśli obszar działania jest tylko na obrazku z mapą, a zakres umowy dla firm w pliku graficznym, asystent ich nie zobaczy. Te same fakty zapisane tekstem, z danymi strukturalnymi firmy i usług, da się przeczytać i powtórzyć."),
        p(
          "Żeby asystenci polecali Twoją firmę, potrzebna jest osobna, regularna praca — opisuję ją na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ". Jak sprawić, żeby strona była wysoko w Google, opisuję na stronie ",
          link("pozycjonowanie firmy DDD", "/pl/pozycjonowanie-strony-firmy-ddd"),
          ", a pracę nad Mapami Google — na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Ile kosztuje strona internetowa dla firmy DDD i jak powstaje"),
        li("Prosta strona firmy DDD — strona główna, kilka usług, informacje o firmie, kontakt i formularz z klauzulą RODO: od 3000 do 6000 zł."),
        li("Pełna strona z wyborem szkodnika, formularzem ze zdjęciem, sekcją dla gastronomii i wspólnot, materiałami do pobrania i SEO lokalnym: od 8500 zł."),
        p("Projekt graficzny jest w cenie w obu wariantach. Praca idzie w czterech krokach:"),
        ol("Brief: jakie usługi i szkodniki, dokąd jeździcie, kto jest klientem, zdjęcia i dane firmy."),
        ol("Spis podstron i cena, która już się nie zmienia, chyba że zmienisz zakres."),
        ol("Makiety w rozmiarze telefonu: strona główna, jedna usługa i sekcja dla firm — reszta powstaje dopiero po ich akceptacji."),
        ol("Budowa, teksty, start strony, podpięcie Search Console i analityki działającej po zgodzie na cookies."),
        p(
          "Wszystkie kwoty znajdziesz w ",
          link("cenniku", "/pl/cennik"),
          ", a ogólny opis mojej pracy nad stronami — w ofercie ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ". Jeśli Twoja firma także sprząta biura i obiekty, przyda się strona ",
          link("strona dla firmy sprzątającej", "/pl/strona-dla-firmy-sprzatajacej"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strona internetowa dla firmy DDD: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona internetowa dla firmy DDD?", "Od 3000 do 6000 zł za prostą stronę i od 8500 zł za pełną stronę z wyborem szkodnika, formularzem ze zdjęciem, sekcją dla gastronomii i wspólnot oraz SEO lokalnym. Projekt graficzny jest wliczony. Stałą kwotę podaję, gdy krótko opiszesz swoją firmę."],
          ["Jak długo powstaje strona firmy DDD?", "Zwykle dwa–cztery tygodnie od otrzymania briefu dla prostej strony i cztery–sześć dla pełnej. Termin przesuwa się głównie wtedy, gdy czekamy na zdjęcia i opisy usług."],
          ["Czy na stronie firmy DDD pokazywać zdjęcia szkodników?", "Na podstronach szkodników — tak, małe i niżej, żeby klient mógł porównać je z tym, co znalazł. Na stronie głównej lepiej działają proste ikony i zdjęcia Waszych techników."],
          ["Czy klient może przysłać zdjęcie owada przez stronę?", "Tak. Formularz przy opcji „Nie wiem, co to” przyjmuje zdjęcie z telefonu, a WhatsApp otwiera się z gotową wiadomością. Biuro rozpoznaje szkodnika przed wyceną."],
          ["Co z RODO, skoro klienci wysyłają przez stronę zdjęcia z mieszkań?", "Formularz zbiera dane osobowe, a zdjęcia bywają bardzo prywatne, więc obok niego stoi informacja o administratorze danych, zdjęcia trafiają tylko do biura, a analityka działa dopiero po zgodzie na cookies."],
          ["Czy sami możemy zmieniać ceny i włączać pasek z terminami deratyzacji?", "Tak. Teksty, widełki cen, zdjęcia i pasek z wolnymi terminami zmienia się w prostym panelu, także z telefonu, bez programisty."],
          ["Czy robisz strony dla firm DDD spoza Warszawy?", "Tak, w całej Polsce. Cała praca odbywa się zdalnie — po polsku, a w razie potrzeby po angielsku lub rosyjsku: brief, uwagi do makiet i odbiór idą przez wiadomości i krótkie rozmowy wideo."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową dla firmy DDD: co mi wysłać"),
        p(
          "Napisz, jak nazywa się firma, i podeślij adres obecnej strony lub wizytówki w Google. Dodaj usługi i szkodniki, miejscowości na trasach i to, kto zamawia najczęściej: osoby prywatne, gastronomia czy wspólnoty. Zdjęcia techników i samochodów, jeśli je masz, podpowiedzą, wokół czego zbudować pierwszy ekran. W odpowiedzi dostaniesz spis podstron i stałą cenę. Skorzystaj z ",
          link("formularza powyżej", "#quote"),
          " albo napisz na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
