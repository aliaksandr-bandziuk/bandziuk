// Landing page fixture: Strona internetowa dla złotej rączki (PL), group
// «handyman-website-design». New page.
// Market version for Polish one-person firms (JDG) doing small home repairs
// — złota rączka, „mąż na godzinę”, drobne naprawy; not a translation of the
// EN page.
// Semantic core: ref/home-services.md has no measured PL phrases for this
// niche (PL «On topic» = 0). Headings use the slug phrase «strona internetowa
// dla złotej rączki» (brief) and the customers’ own words: złota rączka, mąż
// na godzinę, drobne naprawy, usługi remontowe. PL PAA in the core are SEO
// cost questions — not used here.
// Intent: ref/intent-check-home-services.md — EN «handyman website» is
// consumers and platforms, «handyman website design» is studios and builders;
// «handyman seo» shares 0 URLs with design → SEO is one H2 here (Mapy Google).
// No PL SERP check for this pair.
// Polish context: Fixly, Oferteo, OLX usługi as lead sources (paid per lead or
// per offer), Profil Firmy w Google without a public address, OC
// działalności, faktura or paragon, BLIK and card payments, RODO for photos of
// home interiors.
// Prices: /pl/cennik — prosta strona 3000–6000 zł, pełna od 8500 zł, projekt w
// cenie.
// NOT on this page: firmy budowlane i remontowe
// (/pl/strona-internetowa-dla-firmy-budowlanej — not linked, different
// buyer); mycie ciśnieniowe (/pl/strona-internetowa-dla-firmy-mycia-cisnieniowego);
// pozycjonowanie jako usługa (/pl/oferty/pozycjonowanie-lokalne — linked).
// Neighbour linked once: /pl/strona-internetowa-dla-malej-firmy.
// Owner’s rules: never say there are no clients from the visitor’s segment;
// every page covers AI search.
import { p, h2, h3, li, ol, link, k } from "./pt";

export const handymanWebsiteDesignPl = {
  lang: "pl",
  group: "handyman-website-design",
  slug: "strona-internetowa-dla-zlotej-raczki",
  title: "Strona internetowa dla złotej rączki",
  heading: "Strona internetowa dla złotej rączki",
  excerpt:
    "Strona internetowa dla złotej rączki, zaprojektowana i zbudowana przez jedną osobę: lista drobnych napraw z cenami „od”, formularz, w którym klient dołącza zdjęcia usterki, obszar dojazdu i wszystko, czego obcy człowiek potrzebuje, żeby wpuścić Cię do mieszkania.",
  seo: {
    metaTitle: "Strona dla złotej rączki i męża na godzinę | Bandziuk",
    metaDescription:
      "Strona dla złotej rączki: cennik drobnych napraw z cenami „od”, formularz ze zdjęciami usterki, obszar dojazdu, OC i opinie. Projekt w cenie, od 3000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt + wykonanie, jedna cena", "Od 3000 zł", "Dla firm jednoosobowych"],
  heroPhonePoints: ["Zadzwoń · SMS", "Wyślij zdjęcie usterki", "Ceny „od” przy usługach", "OC · Faktura"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona internetowa dla złotej rączki, projekt w cenie", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Strona dla złotej rączki z podstronami usług, cenami „od”, formularzem ze zdjęciami, obszarem dojazdu i pozycjonowaniem lokalnym na start, projekt w cenie", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co dostajesz ze stroną internetową dla złotej rączki",
      items: [
        { _key: k("o"), iconName: "file-text", title: "Cennik drobnych napraw z cenami „od”", text: "Karnisze, baterie, drzwi, meble, silikon, gniazdka" },
        { _key: k("o"), iconName: "image", title: "Formularz ze zdjęciami usterki", text: "Widzisz robotę, zanim wycenisz albo pojedziesz" },
        { _key: k("o"), iconName: "shield-check", title: "Zaufanie przed wizytą w domu", text: "Twoja twarz, OC, faktura, opinie z Google" },
        { _key: k("o"), iconName: "map-pin", title: "Obszar dojazdu tekstem i na mapie", text: "Dzielnice, gminy i zasady dojazdu poza miasto" },
        { _key: k("o"), iconName: "phone", title: "Telefon i SMS na każdym ekranie", text: "Klient pisze, gdy Ty jesteś na drabinie" },
        { _key: k("o"), iconName: "sparkles", title: "Usługi i ceny czytelne dla ChatGPT", text: "Tekst i dane strukturalne zamiast grafik" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona złotej rączki", value: "3000–6000 zł", note: "projekt w cenie" },
        { _key: k("r"), label: "Podstrony usług, formularz ze zdjęciami, obszar, SEO lokalne", value: "od 8500 zł", note: "projekt w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Strony lokalnych firm usługowych, które zaprojektowałem i zbudowałem",
      subtitle:
        "Cztery z nich to warszawskie firmy usługowe, które żyją z telefonów, Map Google i podstron z usługami: firma remontowo-inwestycyjna, warsztat samochodowy, pracownia renowacji felg i przechowalnia opon. Piąta to przebudowa strony firmy skanowania laserowego 3D. Ze stroną złotej rączki łączy je to samo: krótka droga do telefonu, ceny widoczne od razu i zdjęcia prawdziwej pracy.",
      picks: [
        "renovation-and-investment-website-with-premium-design",
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
        "architecture-website-rebuild-and-seo-scan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej dla złotej rączki",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: proponuję układ cennika napraw i formularza ze zdjęciami oraz podaję stałą cenę.",
      contextLabel: "Nazwa firmy, wizytówka Google lub obecna strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Skąd dziś biorą się zlecenia?", options: ["Telefony z Map Google", "Fixly, Oferteo lub OLX", "Polecenia", "Grupy osiedlowe na Facebooku"] },
        { _key: k("z"), question: "Kto jeździ na zlecenia?", options: ["Tylko ja", "Ja i pomocnik", "Kilka osób"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Strona internetowa dla złotej rączki to coś, co projektuję i buduję od początku do końca sam — układ, grafikę, teksty i uruchomienie — więc rozmawiasz z jedną osobą i znasz cenę z góry. Taka strona ma trudniejsze zadanie, niż się wydaje: sprzedaje kilkadziesiąt drobnych usług naraz, mówi obcej osobie, ile mniej więcej zapłaci, i zbiera tyle informacji, żebyś mógł odpowiedzieć bez długiej rozmowy telefonicznej."),

        h2("Strona internetowa dla złotej rączki prowadzącej firmę w pojedynkę"),
        p("Gdy firma to Ty i samochód z narzędziami, nikt nie siedzi przy telefonie. Wieszasz szafkę, wymieniasz baterię albo stoisz w korku, a nieodebrany telefon trafia do następnego numeru z wyszukiwarki. Strona przejmuje część tej pracy:"),
        li("odpowiada na pytania, które słyszysz co tydzień: czy bierzesz małe zlecenia, ile kosztuje dojazd, czy wystawiasz fakturę"),
        li("zamienia „mam kilka rzeczy do zrobienia” w konkretne zgłoszenie z adresem i zdjęciami"),
        li("daje przycisk SMS obok telefonu, żeby klient mógł napisać, a Ty odpisać w przerwie"),
        li("pokazuje jedną twarz — Twoją — bo złotą rączkę wybiera się jak człowieka, a nie jak markę"),

        h2("Cennik złotej rączki na stronie: lista drobnych napraw z ceną „od”"),
        p("Najczęściej otwierana podstrona to lista usług. Klienci nie dzielą prac tak jak fachowiec, więc lista jest pisana ich słowami i ułożona według pomieszczeń albo problemów:"),
        li("montaż: karnisze, półki, lustra, telewizory na ścianie, lampy"),
        li("drzwi i okna: regulacja, wymiana zamka i klamki, uszczelki, moskitiery"),
        li("łazienka i kuchnia: baterie, syfony, spłuczki, silikonowanie wanny i blatu"),
        li("ściany: uzupełnianie dziur, malowanie poprawek, wieszanie ciężkich rzeczy na płycie g-k"),
        li("meble i drobiazgi: składanie mebli z paczek, regulacja frontów, zabezpieczenia dla dzieci"),
        h3("Jak podać ceny „od” w cenniku złotej rączki"),
        p("Cena „od” przy każdej usłudze oszczędza czas obu stronom. Odsiewa osoby, które liczyły na przysługę za symboliczną kwotę, a resztę uspokaja, że rachunek nie będzie niespodzianką. Pod każdą ceną jest krótka uwaga, co ją podnosi: wysokość, rodzaj ściany, Twoje materiały. Minimalna kwota zlecenia i opłata za dojazd są podane raz, na górze cennika, tą samą wielkością liter co reszta. Jeśli liczysz za godzinę pracy, strona pokazuje stawkę i typowy czas najczęstszych napraw."),

        h2("Formularz ze zdjęciami usterki na stronie złotej rączki"),
        p("Większość drobnych napraw da się wycenić albo przynajmniej ocenić po dwóch–trzech zdjęciach. Formularz jest zbudowany wokół tego:"),
        ol("Klient wybiera rodzaj pracy z listy albo „kilka drobnych rzeczy”."),
        ol("Wpisuje dzielnicę lub miejscowość, a formularz od razu mówi, czy tam dojeżdżasz."),
        ol("Dodaje zdjęcia z telefonu — formularz je zmniejsza, żeby wysyłka nie zawiodła na słabym zasięgu."),
        ol("Opisuje sprawę jednym zdaniem i zaznacza dogodne dni."),
        p("Zgłoszenie przychodzi mailem i SMS-em albo na WhatsApp. Widzisz krzywe drzwi czy cieknący syfon, zanim oddzwonisz, i w minutę decydujesz: wyceniam, proszę o jeszcze jedno zdjęcie albo odmawiam. Zdjęcia wnętrza mieszkania to dane osobowe w rozumieniu RODO, więc przy formularzu jest krótka klauzula, a zdjęcia są przechowywane tylko tak długo, jak potrzebujesz ich do zlecenia."),

        h2("Zaufanie do złotej rączki, która wchodzi do mieszkania klienta"),
        p("Złota rączka to zwykle obca osoba w domu, często wtedy, gdy klientka jest sama albo w mieszkaniu zostaje starszy rodzic. Zanim ktoś zadzwoni, szuka powodów, żeby czuć się bezpiecznie. Te powody stoją obok przycisków, a nie w stopce:"),
        li("Twoje zdjęcie i imię oraz zdjęcia osób, które mogą przyjechać zamiast Ciebie"),
        li("ubezpieczenie OC działalności, jeśli je masz, opisane zwykłymi słowami"),
        li("informacja, że wystawiasz fakturę albo paragon, i jak można zapłacić: gotówką, kartą, BLIK-iem"),
        li("opinie z wizytówki Google, które wymieniają konkretną naprawę i dzielnicę"),
        li("krótko o tym, jak wygląda wizyta: dzwonisz przed przyjazdem, zabezpieczasz podłogę, sprzątasz po sobie"),
        p("Prace elektryczne i gazowe wymagają w Polsce uprawnień. Strona wymienia tylko te, które masz, a pozostałe usługi opisuje tak, żeby nie obiecywać więcej."),

        h2("Obszar działania złotej rączki: dzielnice, gminy i dojazd"),
        p("Złota rączka zwykle nie ma lokalu, więc adresem firmy jest obszar dojazdu. Strona pokazuje go na prostej mapie i jednocześnie wypisuje tekstem: dzielnice miasta, okoliczne gminy, zasady dojazdu dalej. Klient z Piaseczna czy Ząbek od razu wie, czy przyjedziesz i za jaką dopłatą, a Ty nie odbierasz telefonów z drugiego końca województwa."),
        p("Jeśli w określone dni jeździsz w stałe miejsca — na przykład we wtorki na Ursynów, a w czwartki do Pruszkowa — strona może to pokazać. Klient z tej okolicy wybiera wtedy dzień, w którym i tak tam jesteś, a Ty układasz trasę bez pustych przejazdów."),

        h2("Złota rączka czy mąż na godzinę: słowa klientów na stronie"),
        p("Ta sama usługa ma w Polsce kilka nazw. Jedni szukają złotej rączki, inni męża na godzinę, fachowca od drobnych napraw albo „pana do wszystkiego”. Strona używa tych słów tam, gdzie pasują — w nagłówkach podstron, opisach usług i odpowiedziach na pytania — żeby klient od razu rozpoznał, że trafił we właściwe miejsce, bez względu na to, jak nazywa Twoją pracę."),
        p("Nie chodzi o dziesięć podobnych podstron z różnymi nazwami tej samej usługi. Wystarczy strona główna i podstrony najczęstszych napraw napisane naturalnie, tak jak mówią o nich klienci przez telefon."),

        h2("Profil na Fixly i Oferteo czy własna strona złotej rączki"),
        p("Fixly, Oferteo i OLX usługi przynoszą zlecenia, ale za każde zapytanie albo ofertę się płaci, a to samo zapytanie widzi kilku fachowców naraz. Wygrywa często ten, kto odpowie pierwszy albo zaproponuje najniższą cenę. Własna strona działa inaczej: klient, który ją znalazł, pyta tylko Ciebie."),
        p("Podobnie jest z grupami osiedlowymi na Facebooku. Ktoś pyta, czy sąsiedzi znają kogoś do powieszenia szafek, a ktoś inny wkleja Twój numer. Link do strony z cennikiem, zdjęciami i opiniami robi w takim wątku więcej niż sam numer — pytający od razu widzi, czym się zajmujesz i ile to mniej więcej kosztuje."),
        p(
          "Nie trzeba rezygnować z platform. Strona daje miejsce, do którego możesz kierować klientów z Fixly i z polecenia, żeby zobaczyli cennik i opinie. Ogólnie o stronach dla jednoosobowych firm piszę na stronie ",
          link("strona internetowa dla małej firmy", "/pl/strona-internetowa-dla-malej-firmy"),
          ".",
        ),

        h2("Pozycjonowanie lokalne strony złotej rączki w Mapach Google"),
        p("Klienci rzadko szukają złotej rączki po nazwie. Wpisują „złota rączka Mokotów”, „montaż karnisza Warszawa” albo „mąż na godzinę” i wybierają z mapy. Profil Firmy w Google jest więc ustawiony jako firma działająca u klienta: adres domowy ukryty, obszar dojazdu wpisany, usługi takie same jak na stronie. Strona wspiera go podstronami najczęstszych napraw, tymi samymi danymi kontaktowymi co w katalogach i opiniami, które wymieniają pracę i dzielnicę."),
        p(
          "Podstawowa konfiguracja jest częścią pełnej strony. Stałą pracę nad widocznością w mapach opisuję na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Strona złotej rączki, którą ChatGPT i Google AI Overviews potrafią przeczytać"),
        p("Część klientów pyta ChatGPT albo podsumowania AI w Google, kto w okolicy złoży szafę czy wymieni baterię i ile to kosztuje. Asystent poleca firmy, o których może coś przeczytać. Jeśli lista usług, ceny i obszar są na grafice albo w zewnętrznym widżecie, nic z nich nie wyczyta. Te same informacje zapisane tekstem, z danymi strukturalnymi firmy i usług, dają mu materiał do odpowiedzi."),
        p(
          "Żeby asystenci faktycznie Cię polecali, potrzebna jest dalsza praca — piszę o niej na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Jak powstaje strona internetowa dla złotej rączki"),
        ol("Brief. Przesyłasz listę prac, orientacyjne ceny, obszar dojazdu i kilka zdjęć: siebie, auta, zrobionych napraw. Wiadomość głosowa też wystarczy."),
        ol("Projekt na telefon. Pierwszy ekran, cennik i formularz ze zdjęciami uzgadniamy na ekranie telefonu."),
        ol("Wykonanie. Strona jest szybka, a ceny i nowe usługi zmieniasz sam w prostym panelu."),
        ol("Uruchomienie. Formularz, powiadomienia, analityka i wizytówka Google są połączone; dostajesz krótką instrukcję."),
        p(
          "Ogólnie o tym, jak buduję strony, piszę na stronie ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ".",
        ),

        h2("Ile kosztuje strona internetowa dla złotej rączki"),
        p("Cena obejmuje projekt graficzny i wykonanie:"),
        li("Prosta strona — strona główna, cennik napraw z cenami „od”, o mnie, obszar dojazdu, formularz: od 3000 do 6000 zł."),
        li("Pełna strona z podstronami najczęstszych napraw, formularzem ze zdjęciami połączonym z Twoim telefonem, obszarem dojazdu i pozycjonowaniem lokalnym na start: od 8500 zł."),
        p(
          "Po uruchomieniu płacisz za hosting i domenę, a mnie tylko za zmiany, o które poprosisz. Widełki są w ",
          link("cenniku", "/pl/cennik"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strona internetowa dla złotej rączki: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona internetowa dla złotej rączki?", "Od 3000 do 6000 zł za prostą stronę i od 8500 zł za pełną z podstronami napraw, formularzem ze zdjęciami, obszarem dojazdu i pozycjonowaniem lokalnym na start. Projekt jest w cenie, a po krótkim opisie firmy podaję stałą cenę."],
          ["Po co złotej rączce strona, skoro zlecenia przychodzą z Fixly?", "Na Fixly płacisz za kontakt i konkurujesz z kilkoma fachowcami o to samo zapytanie. Klient, który trafi na Twoją stronę z Map Google albo z polecenia, pyta tylko Ciebie, a cennik i opinie widzi przed telefonem."],
          ["Czy podawać ceny, skoro każda naprawa jest inna?", "Tak, jako ceny „od” z krótką uwagą, co je podnosi. Mniej telefonów od osób, które liczyły na dużo niższą kwotę, a reszta chętniej wysyła zgłoszenie."],
          ["Gdzie trafiają zdjęcia z formularza?", "Na Twój e-mail i telefon, SMS-em albo na WhatsApp. Widzisz usterkę, zanim oddzwonisz, więc szybciej wyceniasz albo odmawiasz."],
          ["Czy sam mogę zmieniać ceny i dodawać usługi?", "Tak. Cennik, usługi, zdjęcia i obszar dojazdu edytujesz w prostym panelu, także z telefonu."],
          ["Czy strona pomoże mi pojawić się w Mapach Google?", "Strona jest do tego przygotowana: podstrony napraw, obszar dojazdu, spójne dane i dane strukturalne. Wynik w mapach zależy też od wizytówki i opinii — mogę je skonfigurować i dalej prowadzić."],
          ["Czy współpraca może być zdalna, jeśli działam poza Warszawą?", "Tak. Pracuję zdalnie z Warszawy, po polsku, z firmami z całej Polski. Brief możesz przesłać jako wiadomość głosową, a projekt oglądasz na telefonie."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową dla złotej rączki: co mi wysłać"),
        p(
          "Wyślij nazwę firmy, link do wizytówki Google lub obecnej strony, listę prac, które bierzesz, orientacyjne ceny „od”, obszar dojazdu i informację, czy wolisz telefony, SMS-y czy formularz. Kilka zdjęć z telefonu — Ty, auto, zrobione naprawy — pomoże mi pokazać pierwszy ekran, który wygląda jak Twoja firma. Odpowiem układem strony i stałą ceną. Skorzystaj z ",
          link("formularza powyżej", "#quote"),
          " albo napisz na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
