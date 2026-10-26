// Landing page fixture: Strona wizytówka (PL), group «business-card-website».
// General service page (pageType "service"), URL /pl/oferty/strona-wizytowka.
// Written for the Polish market (single specialists, freelancers, small firms
// on JDG); not a translation of the RU version.
// Semantic core: ref/general-services.md (PL, Poland): strona wizytówka 390,
// strona internetowa wizytówka 170, strona wizytówka cena 110, strona www
// wizytówka 110, strona typu wizytówka 90, wizytówka internetowa 90, strona
// wizytówka przykłady / przykład 50+50, strona wizytówka firmy 50, strona
// internetowa wizytówka cena 40, strona wizytówka koszt 30, ile kosztuje
// strona internetowa wizytówka 20, strona wizytówka za darmo 20, strona
// wizytówka szablon 20, strona wizytówka po angielsku 10, strona wizytówka
// wordpress 70 (one sentence + link to the WordPress page).
// Intent: ref/intent-check-general-services.md — «strona wizytówka» vs
// «tworzenie stron internetowych» 0/10 shared URLs, 0 shared domains →
// separate page. SERP: small studios and builders (stronki.pl, latwastrona.com,
// click360.pl, pixelshark.eu) → the page sells the service and answers cena,
// przykłady, za darmo / szablon.
// NOT on this page: «wizytówka Google» 9900 = Profil Firmy w Google, another
// service → one sentence + link /pl/oferty/pozycjonowanie-lokalne; «strona
// wizytówka cennik» → /pl/cennik; landing page → /pl/oferty/tworzenie-landing-page;
// full small-business site (podstrony usług i miejscowości, RODO, Oferteo) →
// /pl/strona-internetowa-dla-malej-firmy; WordPress / Next.js in depth →
// /pl/oferty/strona-na-wordpress, /pl/oferty/strony-w-nextjs; second language
// → /pl/oferty/tworzenie-stron-wielojezycznych.
// Prices: strona wizytówka 3000–6000 zł, pełna strona od 8500 zł, projekt w cenie.
// Owner’s rules: AI search on every page; never invent clients; never say there
// are no clients from the visitor’s segment.
import { p, h2, h3, li, ol, link, k } from "./pt";

export const businessCardWebsitePl = {
  lang: "pl",
  group: "business-card-website",
  slug: "strona-wizytowka",
  parentPath: ["oferty"],
  pageType: "service",
  title: "Strona wizytówka",
  heading: "Strona wizytówka: projekt i wykonanie dla firmy i specjalisty",
  excerpt:
    "Tworzę strony wizytówki dla firm, specjalistów i freelancerów: kim jesteś, co oferujesz, ile to kosztuje i jak się z Tobą skontaktować — na jednej stronie albo kilku podstronach, z projektem graficznym w cenie i własną domeną.",
  seo: {
    metaTitle: "Strona wizytówka dla firmy – cena od 3000 zł | Bandziuk",
    metaDescription:
      "Strona wizytówka dla firmy lub specjalisty: jedna strona albo 3–7 podstron, projekt graficzny w cenie, domena i e-mail firmowy. Od 3000 do 6000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt graficzny w cenie", "Od 3000 zł", "Domena i e-mail firmowy"],
  heroPhonePoints: ["Kim jestem", "Usługi i ceny", "Realizacje", "Zadzwoń · napisz"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Strona wizytówka: jedna strona albo 3–7 podstron, projekt graficzny w cenie", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Rozbudowa wizytówki do pełnej strony firmowej z podstronami usług, integracjami i SEO lokalnym, projekt w cenie", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje wykonanie strony wizytówki",
      items: [
        { _key: k("o"), iconName: "layers", title: "Jedna strona albo 3–7 podstron", text: "Układ dobrany do tego, ile masz do pokazania" },
        { _key: k("o"), iconName: "image", title: "Projekt graficzny pod Twoją firmę", text: "Twoje kolory, logo i zdjęcia zamiast gotowego szablonu" },
        { _key: k("o"), iconName: "phone", title: "Kontakt jednym dotknięciem", text: "Telefon, e-mail i WhatsApp widoczne na telefonie" },
        { _key: k("o"), iconName: "shield-check", title: "Domena, hosting, SSL i skrzynka e-mail", text: "Adres w stylu kontakt@twojafirma.pl" },
        { _key: k("o"), iconName: "file-text", title: "Zmiany bez programisty", text: "Godziny, ceny i zdjęcia poprawiasz sam w panelu" },
        { _key: k("o"), iconName: "sparkles", title: "Widoczna w Google i odpowiedziach AI", text: "Tytuły, opis działalności, dane strukturalne" },
      ],
      prices: [
        { _key: k("r"), label: "Strona wizytówka", value: "3000–6000 zł", note: "projekt w cenie", highlight: true },
        { _key: k("r"), label: "Pełna strona firmowa, gdy wizytówka to za mało", value: "od 8500 zł", note: "projekt w cenie" },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Małe strony firm i specjalistów, które zaprojektowałem i zbudowałem",
      subtitle:
        "Przechowalnia opon z jednostronicową stroną, pracownia renowacji felg, DJ i producent muzyczny, firma remontowa i psychoterapeuta. Każda z tych stron w minutę mówi klientowi, kto za nią stoi, co oferuje i jak się skontaktować — a to jest zadanie strony wizytówki.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "tyre-storage-landing-page-with-editable-seo",
        "felgilab-wordpress-rebuild",
        "official-website-for-dj-and-producer-sasha-dith",
        "renovation-and-investment-website-with-premium-design",
        "psychotherapist-website-milan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony wizytówki",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: proponuję układ strony i podaję stałą cenę w widełkach 3000–6000 zł.",
      contextLabel: "Czym się zajmujesz",
      contextPlaceholder: "Branża, miasto, link do profilu",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Możesz też napisać na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Dla kogo ma być strona?", options: ["Firma usługowa", "Specjalista lub wolny zawód", "Freelancer lub twórca", "Lokal lub gabinet"] },
        { _key: k("z"), question: "Co już masz?", options: ["Nic, zaczynam od zera", "Domenę lub logo", "Stronę z kreatora", "Profil w mediach społecznościowych"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Tworzę strony wizytówki dla małych firm, specjalistów i freelancerów — od projektu graficznego po uruchomienie na Twojej domenie. Strona wizytówka to najprostsza forma obecności w internecie: jedna dłuższa strona albo kilka podstron, z których klient w minutę dowie się, kim jesteś, co oferujesz, ile to kosztuje i jak się z Tobą skontaktować. Nie potrzebuje bloga, sklepu ani rozbudowanych formularzy, ale musi szybko działać na telefonie i dać się znaleźć."),

        h2("Czym jest strona typu wizytówka i co powinna zawierać"),
        p("Nazwa pochodzi od papierowej wizytówki: podaje najważniejsze dane i prowadzi do kontaktu. Strona internetowa wizytówka robi to samo, ale ma miejsce na więcej szczegółów. Zwykle zawiera:"),
        li("krótki opis, kto stoi za firmą — zdjęcie właściciela lub zespołu, doświadczenie, uprawnienia"),
        li("usługi lub specjalizacje, każdą opisaną w kilku konkretnych zdaniach"),
        li("ceny albo widełki cenowe, jeśli da się je podać z góry"),
        li("realizacje, zdjęcia z pracy albo opinie klientów"),
        li("kontakt: telefon, e-mail, WhatsApp, krótki formularz, adres i mapę"),
        li("dane firmy — nazwę, NIP i adres, których szukają klienci i kontrahenci"),
        p(
          "Wizytówka Google, czyli Profil Firmy w Mapach Google, to coś innego niż strona wizytówka — jej prowadzenie i lokalne wyniki wyszukiwania obejmuje usługa ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Dla kogo jest strona internetowa wizytówka"),
        p("Strona wizytówka sprawdza się wtedy, gdy oferta mieści się na kilku ekranach telefonu, a klient i tak zadzwoni albo napisze przed zakupem:"),
        li("mała firma usługowa z kilkoma usługami — elektryk, firma sprzątająca, warsztat, ekipa remontowa"),
        li("specjalista i wolny zawód — psycholog, tłumacz, księgowa, trener personalny, architekt wnętrz"),
        li("freelancer lub twórca, który pokazuje portfolio i przyjmuje zlecenia — fotograf, grafik, muzyk"),
        li("lokal lub gabinet — kosmetyczka, fizjoterapeuta, mała kawiarnia"),
        li("nowa firma, która potrzebuje adresu www do faktury, oferty i profilu na Facebooku"),
        p("Gdy sprzedajesz kilkanaście usług w kilku miastach albo planujesz poradniki, wizytówka szybko stanie się za ciasna. Wtedy lepiej od razu zaplanować większą stronę."),

        h2("Struktura strony wizytówki: jedna długa strona czy kilka podstron"),
        p("Strona www wizytówka może mieć jeden z dwóch układów. Wybór zależy od tego, ile treści masz i na jakie zapytania chcesz być znajdowany w Google."),
        h3("Jednostronicowa strona wizytówka"),
        p("Wszystko jest na jednej stronie, a menu przewija do kolejnych sekcji: o mnie, usługi, cennik, realizacje, kontakt. Ten układ dobrze działa przy jednej głównej usłudze i jednym miejscu działania. Tak zbudowałem stronę przechowalni opon w Warszawie: jedna strona na WordPressie, której teksty SEO właściciel zmienia sam."),
        h3("Strona wizytówka z kilkoma podstronami"),
        p("Strona główna, osobne podstrony usług, o firmie, realizacje i kontakt — zwykle od trzech do siedmiu. Każda podstrona ma własny tytuł i adres, więc Google może pokazać ją na inne zapytanie: „ogrzewanie podłogowe Kraków” trafi na jedną podstronę, „instalacja gazowa Kraków” na drugą."),
        p("Oba układy da się później rozbudować. Projektuję je tak, żeby dodanie podstrony nie oznaczało przebudowy całości."),

        h2("Strona wizytówka – przykłady według rodzaju działalności"),
        p("Te same elementy — kto, co, za ile, jak się skontaktować — w każdej branży układają się inaczej. Kilka typowych przykładów:"),
        li("Specjalista, np. psycholog, radca prawny, doradca: na początku zdjęcie i kwalifikacje, dalej obszary pracy, forma spotkań stacjonarnie lub online, cena konsultacji i dyskretny formularz."),
        li("Firma usługowa, np. remonty lub instalacje: usługi z widełkami cen, zdjęcia przed i po, obszar dojazdu, telefon przypięty do dołu ekranu."),
        li("Twórca, np. fotograf, DJ, ilustrator: portfolio, wideo lub próbki prac, wolne terminy, formularz rezerwacji. Stronę DJ-a i producenta zbudowałem w Next.js z jego projektu w Figmie — mimo galerii wideo ładuje się w mniej niż sekundę."),
        li("Lokal lub gabinet, np. kosmetyczka, fizjoterapeuta, kawiarnia: godziny otwarcia, cennik zabiegów albo menu, mapa i zapisy."),
        p("Więcej przykładów wykonanych przeze mnie stron firm i specjalistów jest w portfolio wyżej na tej stronie."),

        h2("Strona wizytówka, landing page czy pełna strona firmowa"),
        p("Te trzy rodzaje stron łatwo pomylić, a każdy ma inne zadanie:"),
        li("Strona wizytówka przedstawia firmę lub osobę i wszystkie jej usługi w skrócie. Klient ma Cię sprawdzić i się odezwać."),
        li(
          "Landing page sprzedaje jedną rzecz — kurs, wydarzenie, usługę z kampanii reklamowej — i prowadzi do jednego działania. Opisuję go na stronie ",
          link("tworzenie landing page", "/pl/oferty/tworzenie-landing-page"),
          ".",
        ),
        li(
          "Pełna strona firmowa ma podstronę dla każdej usługi i miejscowości, formularze, integracje i SEO lokalne — tak jak ",
          link("strona internetowa dla małej firmy", "/pl/strona-internetowa-dla-malej-firmy"),
          ".",
        ),
        p("Wiele firm zaczyna od wizytówki, a po roku czy dwóch, gdy wiadomo, które usługi przynoszą klientów, rozbudowuje ją do pełnej strony."),

        h2("Strona wizytówka za darmo, z szablonu czy zaprojektowana od podstaw"),
        p("Darmową stronę wizytówkę da się uruchomić w kreatorze. Zwykle oznacza to adres w subdomenie kreatora, jego reklamy na Twojej stronie i ograniczone ustawienia, a po przejściu na płatny plan — abonament co miesiąc. Na sprawdzenie pomysłu to wystarczy."),
        p("Gotowy szablon strony wizytówki kosztuje niewiele i daje gotowy wygląd. Twoja strona wygląda wtedy jednak jak setki innych, a szablony z dziesiątkami funkcji często wolno działają na telefonie."),
        p(
          "Wizytówkę projektuję od podstaw pod Twoją działalność: kolory, logo, zdjęcia i kolejność sekcji dopasowana do tego, co klienci chcą sprawdzić. Buduję ją na WordPressie albo w Next.js — wybór zależy od tego, kto i jak często będzie ją edytował. Szczegóły obu technologii opisuję na stronach ",
          link("strona na WordPress", "/pl/oferty/strona-na-wordpress"),
          " i ",
          link("strony w Next.js", "/pl/oferty/strony-w-nextjs"),
          ".",
        ),

        h2("Domena, hosting i e-mail we własnej domenie dla strony wizytówki"),
        p("Strona wizytówka działa pod Twoim adresem — najczęściej w domenie .pl, a przy klientach z zagranicy także .com. W ramach wykonania:"),
        li("pomagam wybrać domenę i rejestruję ją na Ciebie lub Twoją firmę"),
        li("konfiguruję hosting z certyfikatem SSL i kopiami zapasowymi"),
        li("zakładam skrzynkę we własnej domenie, np. kontakt@twojafirma.pl, i ustawiam rekordy SPF, DKIM i DMARC, żeby Twoje wiadomości nie trafiały do spamu"),
        li("podłączam Google Analytics 4 i Google Search Console"),
        p("Domenę i hosting opłacasz bezpośrednio u dostawcy, zwykle raz w roku. Mnie płacisz jednorazowo za wykonanie, a późniejsze zmiany wyceniam osobno, kiedy będą potrzebne."),

        h2("Czy strona wizytówka może być widoczna w Google"),
        p("Tak, jeśli od początku jest do tego przygotowana. Mała strona nie wygra z portalami na ogólne hasła, ale może pojawiać się na konkretne zapytania: usługa plus miasto, nazwa firmy, imię i nazwisko specjalisty. W każdej wizytówce ustawiam:"),
        li("tytuły i opisy stron z nazwą usługi i miejscowości"),
        li("nagłówki, które mówią, co robisz, zamiast haseł w rodzaju „Witamy”"),
        li("dane strukturalne firmy: nazwa, adres, telefon, godziny, obszar działania"),
        li("mapę strony i zgłoszenie do Search Console"),
        li("szybkie ładowanie na telefonie, ważne i dla Google, i dla klienta"),

        h2("Strona wizytówka, którą rozumieją ChatGPT i Google AI Overviews"),
        p("Coraz więcej osób zamiast wpisywać hasło w wyszukiwarkę pyta ChatGPT albo czyta podsumowanie Google AI Overviews nad wynikami: „polecisz tłumacza przysięgłego niemieckiego w Poznaniu?”. Asystent AI może polecić tylko kogoś, o kim przeczyta konkretne fakty. Dlatego na wizytówce zapisuję je zwykłym tekstem, a nie na grafikach: kim jesteś, co dokładnie robisz, gdzie, w jakich językach i od jakiej ceny. Do tego dochodzą dane strukturalne i reguły w pliku robots.txt, które pozwalają robotom AI czytać stronę."),
        p(
          "To, jak asystenci wybierają firmy do polecenia, sprawdzałem w ",
          link("badaniu 141 odpowiedzi asystentów AI", "/pl/blog/pozycjonowanie-w-ai-badanie"),
          ". Stała praca nad widocznością w tych odpowiedziach to osobna usługa: ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Jak powstaje strona wizytówka: od rozmowy do uruchomienia"),
        ol("Bezpłatna rozmowa, 15–30 minut, albo wiadomość: kim jesteś, komu sprzedajesz i co klient musi zobaczyć."),
        ol("Układ strony i stała cena: jedna strona czy kilka podstron, jakie sekcje, kto pisze teksty."),
        ol("Projekt graficzny, najpierw na telefon, potem na komputer. Uwagi zbieram przed kodowaniem."),
        ol("Teksty: jeśli ich nie masz, piszę je na podstawie rozmowy, a Ty sprawdzasz fakty."),
        ol("Uruchomienie na Twojej domenie, krótka instrukcja edycji i test formularza oraz poczty."),

        h2("Ile kosztuje strona wizytówka i od czego zależy cena"),
        p(
          "Strona wizytówka kosztuje od 3000 do 6000 zł, projekt graficzny jest w cenie. Wszystkie stawki są w ",
          link("cenniku", "/pl/cennik"),
          ".",
        ),
        p("Bliżej dolnej granicy jest jednostronicowa wizytówka z Twoimi tekstami i zdjęciami. Bliżej górnej — kilka podstron, teksty pisane przeze mnie, galeria realizacji albo formularz rezerwacji. Koszt obniża własny materiał: gotowe zdjęcia, logo i opis usług."),
        p(
          "Strona wizytówka po angielsku lub w drugim języku dla klientów z zagranicy to dodatkowa wersja językowa — opisuję to na stronie ",
          link("tworzenie stron wielojęzycznych", "/pl/oferty/tworzenie-stron-wielojezycznych"),
          ". Gdy potrzebujesz podstron dla wielu usług i miejscowości, integracji i SEO lokalnego, mówimy już o pełnej stronie od 8500 zł.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Strona wizytówka: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje strona wizytówka?", "Od 3000 do 6000 zł, z projektem graficznym w cenie. Cena zależy od liczby podstron, tego, kto pisze teksty, i dodatków, takich jak galeria czy formularz rezerwacji. Po krótkim opisie działalności podaję stałą cenę."],
          ["Czym strona wizytówka różni się od landing page?", "Wizytówka przedstawia Ciebie lub firmę i wszystkie usługi w skrócie. Landing page sprzedaje jedną rzecz, zwykle z kampanii reklamowej, i prowadzi do jednego działania, np. zakupu albo zapisu."],
          ["Ile podstron ma strona typu wizytówka?", "Jedną długą stronę z sekcjami albo od trzech do siedmiu podstron. Jedna strona wystarcza przy jednej głównej usłudze; osobne podstrony są lepsze, gdy chcesz być znajdowany w Google na kilka różnych usług."],
          ["Czy darmowa strona wizytówka z kreatora wystarczy?", "Na sprawdzenie pomysłu tak. Na dłużej przeszkadza adres w subdomenie, reklamy kreatora i ograniczone ustawienia SEO. Przy płatnym planie dochodzi abonament, a przeniesienie strony z kreatora zwykle oznacza budowę od nowa."],
          ["Czy napiszesz teksty na stronę wizytówkę?", "Tak. Na podstawie rozmowy lub kilku odpowiedzi na pytania piszę teksty po polsku, angielsku albo rosyjsku, a Ty sprawdzasz, czy fakty się zgadzają."],
          ["Czy wizytówkę można później rozbudować?", "Tak. Strona jest zbudowana tak, żeby dało się dodać podstrony usług, blog albo drugą wersję językową bez przebudowy całości."],
          ["Ile trwa wykonanie strony wizytówki?", "Zwykle od dwóch do trzech tygodni. Najwięcej zależy od tego, jak szybko są gotowe teksty, zdjęcia i Twoje uwagi do projektu."],
          ["Czy pracujesz zdalnie i wystawiasz fakturę?", "Tak. Pracuję zdalnie z Warszawy dla firm z całej Polski i z zagranicy, a za wykonanie strony wystawiam fakturę jako jednoosobowa działalność gospodarcza."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę wizytówkę: jakie informacje mi wysłać"),
        p(
          "Napisz, czym się zajmujesz i w jakim mieście, wymień usługi, które chcesz pokazać, i dodaj link do profilu w mediach społecznościowych albo obecnej strony, jeśli ją masz. Logo i kilka zdjęć z pracy pomogą mi od razu zaproponować wygląd. Odpowiem układem strony i stałą ceną. Skorzystaj z ",
          link("formularza wyceny", "#quote"),
          " albo napisz na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
