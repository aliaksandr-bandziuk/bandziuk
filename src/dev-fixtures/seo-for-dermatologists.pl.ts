// Landing page fixture: Pozycjonowanie gabinetu dermatologicznego (PL), group
// «seo-for-dermatologists». New page. Market version for Polish private
// gabinety i kliniki dermatologiczne (often with NFZ contract and private
// visits side by side), not a translation of seo-for-dermatologists.en.
// Semantic core: ref/medical-practices.md has no measured PL phrases for
// dermatology; headings carry «pozycjonowanie gabinetu dermatologicznego»,
// «dermatolog prywatnie», «badanie znamion», «wideodermatoskopia»,
// «dermatolog NFZ», «teleporada dermatologiczna». PL PAA in the file are about
// medycyna estetyczna and are left to the sibling page.
// Intent: ref/intent-check-medical-practices.md — EN «med spa seo» vs «seo for
// dermatologists» 0 shared URLs → dermatology is its own page; PL «medycyna
// estetyczna SEO» vs «strona» 0 shared → SEO and website are separate pages.
// Angle: dermatologia medyczna i estetyczna on one site; podstrony chorób
// (trądzik, AZS, łuszczyca, trądzik różowaty, łysienie, grzybica); badanie
// znamion, dermatoskopia, wideodermatoskopia, usuwanie zmian z histopatologią;
// NFZ (skierowanie, kolejki) vs prywatnie with cennik; wizytówka Google and
// ZnanyLekarz; lekarz informuje, nie reklamuje (general, no article numbers);
// teleporada and photos of skin lesions under RODO; AI answers. Giuseppe
// (psychoterapeuta, Mediolan) as the proof.
// NOT on this page: medycyna estetyczna as a separate clinic
// (/pl/pozycjonowanie-kliniki-medycyny-estetycznej, sibling, linked once);
// chirurgia plastyczna (separate page); przychodnie
// (/pl/oferty/pozycjonowanie-strony-przychodni-warszawa, linked once); building
// the site (/pl/strona-internetowa-dla-lekarza, linked once).
// Owner’s rules: PL form «pozycjonowanie X»; every SEO page covers AI search;
// never say there are no clients from the visitor’s segment.
import { p, h2, h3, li, link, k } from "./pt";

export const seoForDermatologistsPl = {
  lang: "pl",
  group: "seo-for-dermatologists",
  slug: "pozycjonowanie-gabinetu-dermatologicznego",
  title: "Pozycjonowanie gabinetu dermatologicznego",
  heading: "Pozycjonowanie gabinetu dermatologicznego",
  excerpt:
    "Zajmuję się pozycjonowaniem gabinetów dermatologicznych: podstrony chorób skóry, badania znamion i wideodermatoskopii, jasna informacja o wizytach na NFZ i prywatnie, wizytówka Google, ZnanyLekarz i widoczność w odpowiedziach AI — rzeczowo, w granicach zasad, które pozwalają lekarzom informować, a nie reklamować.",
  seo: {
    metaTitle: "SEO dla dermatologa i kliniki dermatologicznej | Bandziuk",
    metaDescription:
      "Pozycjonowanie gabinetu dermatologicznego: choroby skóry, badanie znamion, NFZ i prywatnie, wizytówka Google, ZnanyLekarz, RODO i AI. Audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Choroby skóry, znamiona, Mapy", "Audyt od 1000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Dermatolog prywatnie Łódź", "Badanie znamion", "Wolne terminy", "Poleca ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO gabinetu dermatologicznego: strona, wizytówka Google, ZnanyLekarz i odpowiedzi AI", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO dla dermatologa: podstrony chorób i badania znamion, NFZ i cennik, dane strukturalne", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie gabinetu dermatologicznego", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje pozycjonowanie gabinetu dermatologicznego",
      items: [
        { _key: k("o"), iconName: "layers", title: "Podstrona dla każdej choroby skóry", text: "Trądzik, AZS, łuszczyca, trądzik różowaty, łysienie" },
        { _key: k("o"), iconName: "search", title: "Badanie znamion i wideodermatoskopia", text: "Jak wygląda badanie, kto je wykonuje, co dalej" },
        { _key: k("o"), iconName: "file-text", title: "NFZ i wizyty prywatne osobno", text: "Skierowanie, terminy, cennik bez gwiazdek" },
        { _key: k("o"), iconName: "map-pin", title: "Wizytówka Google i ZnanyLekarz", text: "Te same dane, lekarze i godziny wszędzie" },
        { _key: k("o"), iconName: "shield-check", title: "Informacja, nie reklama", text: "Bez obietnic efektów, z lekarzem jako autorem" },
        { _key: k("o"), iconName: "sparkles", title: "Gabinet polecany przez ChatGPT i AI w Google", text: "Fakty o lekarzach i badaniach, które asystent zacytuje" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO gabinetu dermatologicznego", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe pozycjonowanie gabinetu dermatologicznego", value: "od 3500 zł / mies.", note: "choroby skóry, znamiona, opinie, AI", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: strona prywatnej praktyki medycznej i serwisy, które pozycjonuję",
      subtitle:
        "Giuseppe, psychoterapeuta z Mediolanu, prowadzi prywatną praktykę, w której obowiązują surowe zasady informowania o usługach. Jego stronę przebudowałem: ma podstrony dla każdego obszaru terapii i problemu, z którym przychodzą pacjenci, dane strukturalne praktyka i gabinetów, a nowe podstrony pojawiają się już w odpowiedziach ChatGPT — tego samego potrzebuje gabinet dermatologiczny dla chorób skóry i placówek. Obok: Cyprus VIP Estates, którego pięciojęzyczny serwis pozycjonuję co miesiąc, firma skanowania laserowego 3D i modelowania BIM z ruchem organicznym większym 29 razy po przebudowie, agencja edukacyjna działająca w dziesięciu krajach i warszawski warsztat samochodowy, który zdobywa klientów z Map Google.",
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
      title: "Wycena pozycjonowania gabinetu dermatologicznego",
      subtitle: "W ciągu jednego dnia roboczego dostaniecie ode mnie listę pierwszych poprawek dla strony, wizytówki i profili w ZnanyLekarz oraz stałą cenę. Proszę nie wpisywać danych pacjentów.",
      contextLabel: "Nazwa gabinetu lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Jaki gabinet prowadzicie?", options: ["Dermatologia tylko prywatnie", "Dermatologia z umową NFZ", "Dermatologia i zabiegi estetyczne", "Klinika z kilkoma placówkami"] },
        { _key: k("z"), question: "Na czym zależy Wam najbardziej?", options: ["Więcej pacjentów z chorobami skóry", "Badanie znamion i wideodermatoskopia", "Dermatologia estetyczna", "Mniej zależności od ZnanyLekarz"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Pozycjonowanie gabinetu dermatologicznego to moja usługa dla prywatnych gabinetów i klinik dermatologicznych z całej Polski: praca nad tym, żeby pacjent szukający pomocy przy chorobie skóry, badania znamion albo zabiegu znalazł w Google i w odpowiedziach AI właśnie Wasz gabinet i umówił wizytę. Pracuję bez pośredników: ta sama osoba sprawdza stronę, pisze z lekarzami podstrony chorób, wprowadza zmiany w kodzie i co miesiąc pokazuje, ile wizyt przyszło z wyszukiwarki."),

        h2("Pozycjonowanie gabinetu dermatologicznego: co obejmuje usługa"),
        p("Do dermatologa trafiają trzy grupy pacjentów i każda szuka inaczej:"),
        li("osoby z chorobą skóry — „trądzik u dorosłych dermatolog”, „AZS u dziecka”, „łuszczyca leczenie biologiczne” — które chcą wiedzieć, czy lekarz pomoże i ile kosztuje wizyta"),
        li("osoby zaniepokojone znamieniem — „badanie znamion Poznań”, „pieprzyk zmienił kolor” — które chcą terminu jak najszybciej"),
        li("osoby wybierające zabieg dermatologii estetycznej, które porównują ceny, lekarzy i zdjęcia"),
        p("Pozycjonowanie gabinetu dermatologicznego daje każdej z tych grup podstronę, która odpowiada na jej pytanie, porządkuje dane gabinetu w Google i ZnanyLekarz i liczy wynik w umówionych wizytach, a nie w samych pozycjach fraz."),

        h2("Dermatologia medyczna i estetyczna na jednej stronie gabinetu dermatologicznego"),
        p("Wiele gabinetów łączy leczenie chorób skóry z zabiegami estetycznymi, a strona miesza jedno z drugim: podstrona o trądziku różowatym kończy się promocją na wypełniacze, a pacjent ze znamieniem musi przewinąć pakiety laserowe. Dzielę stronę na dwie wyraźne części, które mają wspólną nazwę, lekarzy i rejestrację:"),
        li("dermatologia medyczna: choroby skóry, badanie znamion, zabiegi lecznicze, NFZ i wizyty prywatne"),
        li("dermatologia estetyczna: zabiegi, lekarz, który je wykonuje, widełki cen i konsultacja"),
        p(
          "Części łączą się tam, gdzie to pomaga pacjentowi — na przykład leczenie blizn potrądzikowych po leczeniu trądziku — ale każda podstrona ma jedno zadanie. Jeśli zabiegi estetyczne prowadzicie jako osobną klinikę z własną marką, zajrzyjcie na stronę ",
          link("pozycjonowanie kliniki medycyny estetycznej", "/pl/pozycjonowanie-kliniki-medycyny-estetycznej"),
          ".",
        ),

        h2("Podstrony chorób skóry: trądzik, AZS, łuszczyca, trądzik różowaty i łysienie"),
        p("Pacjenci szukają nazwy choroby albo objawu, a nie „gabinetu dermatologicznego”. Podstrona choroby, która ma szansę na wysoką pozycję, jest napisana dla osoby, która ją ma, i sprawdzona przez Waszego dermatologa:"),
        li("jak choroba wygląda i kiedy warto pójść do dermatologa, zamiast czekać"),
        li("jak przebiega pierwsza wizyta, jakie badania mogą być potrzebne i jakie metody leczenia stosujecie"),
        li("czy leczenie jest możliwe na NFZ, na przykład w programie lekowym, czy tylko prywatnie"),
        li("który lekarz przyjmuje z tym problemem i jak się zapisać"),
        p("Zaczynam od chorób, przy których chcecie mieć więcej pacjentów, a nie od całego podręcznika. Według tej zasady powstała strona Giuseppe, psychoterapeuty z Mediolanu: każdy z siedmiu obszarów terapii ma swoją stronę nadrzędną, łącznie prowadzą one do 21 węższych podstron po włosku, a problemy, z którymi pracuje, wyszukiwarka odczytuje z danych strukturalnych."),
        h3("Dermatologia dziecięca: podstrony dla rodziców"),
        p("Rodzice wpisują „dermatolog dziecięcy”, „AZS u niemowlaka”, „naczyniak u dziecka”. Chcą wiedzieć, od jakiego wieku przyjmujecie, który lekarz bada dzieci i jak wygląda taka wizyta."),

        h2("Badanie znamion i wideodermatoskopia: podstrony profilaktyki nowotworów skóry"),
        p("Badanie znamion to jedna z najczęściej wyszukiwanych usług dermatologicznych w Polsce, a wideodermatoskopia z archiwizacją zdjęć jest dla wielu gabinetów główną usługą prywatną. Podstrona wyjaśnia, czym dermatoskopia różni się od wideodermatoskopii, ile trwa badanie, czy potrzebne jest przygotowanie, po jakim czasie zalecane jest kolejne i co się dzieje, gdy lekarz zobaczy zmianę do usunięcia: zabieg, badanie histopatologiczne i odbiór wyniku. Usuwanie zmian skórnych ma osobną podstronę z lekarzem, który je wykonuje."),
        p("Te podstrony informują, nie straszą i nie stawiają diagnoz. Opis zasady ABCDE ma sens, jeśli kończy się zaproszeniem na badanie, a nie zapewnieniem, że „na zdjęciu wygląda dobrze”."),

        h2("Dermatolog na NFZ i prywatnie: skierowanie, terminy i cennik na stronie gabinetu"),
        p("Do dermatologa na NFZ potrzebne jest skierowanie, a terminy bywają odległe, więc wielu pacjentów wpisuje od razu „dermatolog prywatnie” z nazwą miasta. Gabinet, który przyjmuje w obu trybach, potrzebuje dwóch podstron: na NFZ — jakie dokumenty zabrać, jak się zapisać, jak długo się czeka; prywatnie — cena konsultacji, wolne terminy i zapis online. Cennik podany tekstem, a nie w PDF, odpowiada na pytanie „ile kosztuje wizyta u dermatologa” i zostaje w Google. Pamiętajcie o e-recepcie i e-skierowaniu po teleporadzie — pacjenci o to pytają."),

        h2("Wizytówka Google i ZnanyLekarz w pozycjonowaniu gabinetu dermatologicznego"),
        p("Przy „dermatolog w pobliżu” decydują Mapy Google. Liczą się kategoria główna Dermatolog, dodatkowe tylko te prawdziwe, usługi lecznicze i estetyczne opisane osobno, godziny przyjęć poszczególnych lekarzy, zdjęcia gabinetu i link do podstrony tej placówki. Gabinet z kilkoma lokalizacjami ma wizytówkę i podstronę dla każdej."),
        p(
          "ZnanyLekarz przynosi wielu gabinetom dermatologicznym rejestracje i jest wysoko w wynikach na nazwiska lekarzy. Profile prowadzę tak, żeby zakres usług, ceny i godziny były takie same jak na stronie i w wizytówce. Opinie zbieram po wizytach w Google i ZnanyLekarz; odpowiedź nigdy nie potwierdza, że autor był pacjentem, i nie wspomina o jego skórze. Szczegóły pracy nad Mapami opisuję na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Lekarz dermatolog jako autor: informacja zamiast reklamy i wiarygodność strony (YMYL)"),
        p("Lekarze w Polsce mogą informować o swojej pracy, a nie ją reklamować, i ta zasada obejmuje stronę gabinetu, wizytówkę i profile. Google ocenia treści o zdrowiu surowiej niż inne (YMYL), więc oba wymagania prowadzą do tego samego:"),
        li("każda podstrona choroby i zabiegu wymienia lekarza, który ją napisał lub sprawdził, z tytułem, specjalizacją z dermatologii i wenerologii albo informacją o jej trakcie i linkiem do jego sylwetki"),
        li("data ostatniej weryfikacji treści i opis metod leczenia z ograniczeniami, bez obietnic efektów"),
        li("zdjęcia zmian i efektów zabiegów tylko własne, za pisemną zgodą pacjenta, robione w tym samym świetle i bez retuszu"),
        li("żadnych „najlepszych dermatologów w mieście” ani porównań z innymi gabinetami"),
        p("To ogólne wskazówki, nie porada prawna — w razie wątpliwości sprawdźcie stanowisko swojej izby lekarskiej. Na stronie Giuseppe system zarządzania treścią ostrzega redaktora, gdy tekst zawiera sformułowania zakazane przez artykuł 40 włoskiego kodeksu etyki psychologów; taki sam mechanizm może wyłapywać na stronie gabinetu słowa w rodzaju „gwarantujemy” albo „trwale wyleczymy”."),

        h2("Teleporada dermatologiczna i zdjęcia zmian skórnych: RODO na stronie gabinetu"),
        p("Pacjenci szukają „dermatolog online” i „teleporada dermatologiczna”, często po receptę na kontynuację leczenia. Podstrona teleporady mówi wprost, z czym można się zgłosić zdalnie, a co wymaga badania w gabinecie, jak przebiega rozmowa i ile kosztuje."),
        p(
          "Zdjęcia skóry to dane o zdrowiu, czyli szczególna kategoria danych w RODO. Nie powinny trafiać przez zwykły formularz kontaktowy, e-mail ani prywatny komunikator recepcji, tylko przez system do teleporad lub rejestracji, który to obsługuje. Formularz na stronie prosi o imię, telefon i preferowany termin, ma klauzulę informacyjną i umowę powierzenia z dostawcą. To ogólne wskazówki, nie opinia prawna. Jeśli strona nie pozwala tego porządnie wdrożyć, opisuję budowę nowej na stronie ",
          link("strona internetowa dla lekarza", "/pl/strona-internetowa-dla-lekarza"),
          ".",
        ),

        h2("Pozycjonowanie gabinetu dermatologicznego w ChatGPT i Google AI Overviews (GEO, AEO)"),
        p("Pacjenci pytają ChatGPT, Perplexity i podsumowania AI w Google, „gdzie w Gdańsku zrobić wideodermatoskopię”, „czy z trądzikiem różowatym iść do dermatologa czy kosmetologa”, „który dermatolog w Lublinie leczy łysienie”. Odpowiedź powstaje z porównania kilku źródeł naraz: strony gabinetu, wizytówki Google, profili w ZnanyLekarz i opinii pacjentów. Pracę nad tym nazywa się GEO (generative engine optimization) albo AEO (answer engine optimization). Dla gabinetu dermatologicznego to:"),
        li("jasno opisane choroby, badania, lekarze, języki, placówki, umowa z NFZ i ceny"),
        li("pytania, które pacjenci zadają w rejestracji, z odpowiedziami zatwierdzonymi przez lekarza"),
        li("dane strukturalne gabinetu, lekarzy i placówek"),
        li("zgodne godziny, adresy i nazwiska lekarzy w każdym miejscu, które asystent może sprawdzić"),
        p(
          "Prywatna praktyka może to osiągnąć: ChatGPT cytuje już świeżo opublikowane podstrony Giuseppe, a sam Giuseppe trafił do mnie dzięki odpowiedzi ChatGPT. Na początku współpracy i po kilku miesiącach porównuję, jak asystenci opisują Wasz gabinet i kogo polecają. Więcej na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Ile kosztuje pozycjonowanie gabinetu dermatologicznego"),
        li("Audyt SEO strony, wizytówki, ZnanyLekarz i odpowiedzi AI: od 1000 zł, jednorazowo; dostajecie poprawki ułożone od najważniejszej."),
        li("Jednorazowe prace dla gabinetu — podstrony chorób skóry, badania znamion, NFZ i cennika, oznaczenia dla wyszukiwarek, naprawa błędów strony: od 1000 do 3000 zł."),
        li("Stałe pozycjonowanie gabinetu dermatologicznego — kolejne podstrony, wizytówki, opinie, obecność w odpowiedziach AI i comiesięczny raport w umówionych wizytach: od 3500 zł miesięcznie; gabinety w dużych miastach z silną konkurencją od 5500 zł miesięcznie."),
        p(
          "Pełne widełki są w ",
          link("cenniku", "/pl/cennik"),
          ". Przychodnie i centra medyczne z wieloma specjalnościami znajdą swój opis na stronie ",
          link("pozycjonowanie strony przychodni w Warszawie", "/pl/oferty/pozycjonowanie-strony-przychodni-warszawa"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie gabinetu dermatologicznego: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje pozycjonowanie gabinetu dermatologicznego?", "Za audyt płacicie od 1000 zł jednorazowo, za wybrane prace od 1000 do 3000 zł, a stała współpraca kosztuje od 3500 zł miesięcznie, w dużych miastach z silną konkurencją od 5500 zł. Gdy opiszecie gabinet, placówki i choroby, przy których chcecie więcej pacjentów, podam stałą cenę."],
          ["Czy dermatolog może reklamować gabinet w internecie?", "Lekarz może informować o swojej pracy, a nie ją reklamować. Rzeczowa strona z opisem chorób, badań, lekarzy, cen i sposobu zapisu mieści się w informacji i dobrze pracuje w Google. Unikam obietnic efektów i porównań z innymi; w razie wątpliwości rozstrzyga izba lekarska."],
          ["Po co gabinetowi własna strona, skoro pacjenci zapisują się przez ZnanyLekarz?", "Portal pokazuje Wasz profil na liście obok innych dermatologów, a strona odpowiada pacjentowi, który szuka konkretnej choroby albo badania znamion i jeszcze nie wybrał lekarza. Strona jest też głównym źródłem faktów dla odpowiedzi AI. Rejestracja może dalej działać przez ZnanyLekarz, byle dane w obu miejscach były zgodne."],
          ["Czy pacjent może przesłać zdjęcie znamienia przez stronę?", "Nie przez zwykły formularz ani e-mail. Zdjęcie skóry to dane o zdrowiu w rozumieniu RODO i powinno trafić przez system do teleporad lub rejestracji, który zapewnia ich ochronę. To ogólna wskazówka, nie opinia prawna."],
          ["Czy dermatologia estetyczna powinna mieć osobną stronę?", "Zwykle nie: jedna strona z wyraźnie oddzieloną częścią leczniczą i estetyczną buduje wiarygodność lekarzy w jednym miejscu. Osobna strona ma sens, gdy zabiegi estetyczne działają jako odrębna klinika z własną marką."],
          ["Ile trwa pozycjonowanie gabinetu dermatologicznego?", "Poprawki w wizytówce i w ZnanyLekarz potrafią zadziałać w kilka tygodni. Nowe podstrony chorób i badania znamion zwykle potrzebują dwóch–czterech miesięcy, w Warszawie, Krakowie czy Wrocławiu dłużej."],
          ["Czy pozycjonujesz gabinety dermatologiczne w całej Polsce?", "Tak. Pracuję zdalnie z Warszawy, a dane wyszukiwań sprawdzam dla Waszego miasta i miejscowości, z których dojeżdżają pacjenci. W mniejszych miastach często wystarczy kilka dobrych podstron i porządna wizytówka, żeby gabinet był pierwszy przy swoich chorobach i badaniach."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie gabinetu dermatologicznego: co mi wysłać"),
        p(
          "Potrzebuję nazwy gabinetu, adresu strony, linków do wizytówek i profili lekarzy w ZnanyLekarz, listy chorób i badań, przy których chcecie mieć więcej pacjentów, informacji, czy przyjmujecie na NFZ i czy macie część estetyczną, a także miasta i placówek. Bez danych pacjentów. W odpowiedzi napiszę, od czego zacząłbym pracę i ile to będzie kosztować. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
