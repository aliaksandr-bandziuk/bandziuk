// Landing page fixture: Pozycjonowanie gabinetu fizjoterapii (PL), group
// «seo-for-chiropractors». Market version for Poland, not a translation of
// seo-for-chiropractors.en: chiropractic barely exists in Poland, so the page is
// about gabinety fizjoterapii, osteopatia and terapia manualna; «kręgarz» /
// chiropraktyka named once as related.
// Semantic core: ref/medical-practices.md has no PL phrases for this group
// (volumes under the source’s floor). Target phrases from BRIEF.md and the
// slug: pozycjonowanie gabinetu fizjoterapii (H1, several H2), pozycjonowanie
// strony fizjoterapeuty, pozycjonowanie gabinetu osteopatii / terapii
// manualnej (intro, H2 on phrases).
// Intent: ref/intent-check-medical-practices.md — «pozycjonowanie gabinetu
// fizjoterapii» vs «strona dla fizjoterapeuty» 0 of 10 shared URLs, 0 shared
// domains → separate pages; the SEO SERP is Polish marketing agencies and
// freelancers (medyczny-marketing.pl, semtree.pl, 6krokow.pl …) = owners’
// demand. The design sibling is /pl/strona-internetowa-dla-fizjoterapeuty.
// Polish angles: informacja, nie reklama (podmiot leczniczy, Krajowa Izba
// Fizjoterapeutów — general, «sprawdźcie aktualne zasady»); NFZ (skierowanie)
// vs prywatnie; Booksy and ZnanyLekarz vs own site; wizytówka Google; PWZFz
// and courses as YMYL signals; RODO in forms; AI answers. Giuseppe = private
// practice under advertising rules, structure by area, found in ChatGPT.
// NOT on this page: building and designing the site
// (/pl/strona-internetowa-dla-fizjoterapeuty); clinic/przychodnia SEO
// (/pl/oferty/pozycjonowanie-strony-przychodni-warszawa — linked once);
// kampanie Google Ads i social media (not offered).
import { p, h2, h3, li, link, k } from "./pt";

export const seoForChiropractorsPl = {
  lang: "pl",
  group: "seo-for-chiropractors",
  slug: "pozycjonowanie-gabinetu-fizjoterapii",
  title: "Pozycjonowanie gabinetu fizjoterapii",
  heading: "Pozycjonowanie gabinetu fizjoterapii",
  excerpt:
    "Zajmuję się pozycjonowaniem gabinetów fizjoterapii, osteopatii i terapii manualnej: wizytówka Google, podstrony problemów, z którymi przychodzą pacjenci, NFZ i wizyty prywatne opisane osobno, opinie i widoczność w AI — rzeczowa informacja zamiast reklamy.",
  seo: {
    metaTitle: "Pozycjonowanie fizjoterapii i osteopatii | Bandziuk",
    metaDescription:
      "Pozycjonowanie gabinetu fizjoterapii, osteopatii i terapii manualnej: wizytówka Google, podstrony problemów, NFZ, opinie i widoczność w AI. Audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Mapy + podstrony problemów", "Audyt od 1000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Fizjoterapeuta w pobliżu", "Rwa kulszowa — terapia", "Prywatnie bez skierowania", "Polecany przez ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO gabinetu fizjoterapii: strona, wizytówka Google, profile w serwisach rezerwacji i odpowiedzi AI", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO dla gabinetu fizjoterapii: podstrony problemów i metod, NFZ, dane strukturalne", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie gabinetu fizjoterapii lub osteopatii", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje pozycjonowanie gabinetu fizjoterapii",
      items: [
        { _key: k("o"), iconName: "map-pin", title: "Wizytówka Google, która trafia do Map", text: "Kategoria, usługi, godziny, zdjęcia gabinetu" },
        { _key: k("o"), iconName: "layers", title: "Podstrona dla każdego problemu", text: "Kręgosłup, rwa kulszowa, urazy, rehabilitacja po operacji" },
        { _key: k("o"), iconName: "file-text", title: "NFZ i wizyty prywatne osobno", text: "Skierowanie, kolejka, cennik, sposób zapisu" },
        { _key: k("o"), iconName: "shield-check", title: "Informacja, nie reklama", text: "Bez obietnic wyleczenia i „najlepszego fizjoterapeuty”" },
        { _key: k("o"), iconName: "sparkles", title: "Widoczność w ChatGPT i AI w Google", text: "Metody, terapeuci i godziny zapisane faktami" },
        { _key: k("o"), iconName: "trending-up", title: "Raport w rezerwacjach", text: "Telefony i wizyty z wyszukiwarki, nie tylko pozycje" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO gabinetu fizjoterapii", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe pozycjonowanie gabinetu fizjoterapii", value: "od 3500 zł / mies.", note: "mapy, podstrony, opinie, AI", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: prywatna praktyka terapeutyczna i lokalne firmy usługowe",
      subtitle:
        "Giuseppe, psychoterapeuta z Mediolanu, prowadzi prywatną praktykę, której wolno informować, a nie reklamować — tak jak gabinetowi fizjoterapii. Jego stronę podzieliłem na 7 głównych obszarów terapii i 21 podstron szczegółowych, dodałem podstrony dla Mediolanu, Monzy i terapii online, dane strukturalne terapeuty, problemów i metod, a przy przenosinach zachowałem wszystkie 468 wpisów blogowych z przekierowaniami 301. Nowe podstrony pojawiają się już w odpowiedziach ChatGPT. Obok: lokalne SEO i Mapy Google dla warsztatu samochodowego w Warszawie, przebudowa strony pracowni renowacji felg, strona przechowalni opon z edytowalnym SEO i firma skanowania 3D, której ruch organiczny wzrósł 29 razy.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "psychotherapist-website-milan",
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
        "architecture-website-rebuild-and-seo-scan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena pozycjonowania gabinetu fizjoterapii",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: co poprawiłbym najpierw — wizytówkę, podstrony czy rejestrację — i za jaką stałą cenę.",
      contextLabel: "Nazwa gabinetu lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Jaki gabinet prowadzicie?", options: ["Gabinet fizjoterapii", "Osteopatia lub terapia manualna", "Centrum rehabilitacji z kilkoma fizjoterapeutami", "Fizjoterapia w przychodni"] },
        { _key: k("z"), question: "Skąd dziś przychodzą nowi pacjenci?", options: ["Z Booksy lub ZnanyLekarz", "Z Google i Map Google", "Z poleceń lekarzy i trenerów", "Z Instagrama"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Pozycjonowanie gabinetu fizjoterapii robię sam — od danych wyszukiwań, przez wizytówkę Google, po podstrony problemów i poprawki w kodzie — dla gabinetów fizjoterapii, osteopatii i terapii manualnej. Celem nie są same pozycje, tylko pacjenci z okolicy, którzy po wpisaniu swojego problemu trafiają do Was i umawiają pierwszą wizytę."),

        h2("Na czym polega pozycjonowanie gabinetu fizjoterapii, osteopatii i terapii manualnej"),
        p("Pacjent z bólem pleców nie szuka „gabinetu”. Szuka pomocy w trzech miejscach naraz:"),
        li("w Mapach Google, gdzie widzi trzy gabinety z oceną, godzinami i telefonem"),
        li("w zwykłych wynikach, gdzie strona gabinetu konkuruje z Booksy, ZnanyLekarz i portalami o zdrowiu"),
        li("w odpowiedziach ChatGPT i podsumowaniach AI w Google, które coraz częściej wymieniają gabinety z nazwy"),
        p("Pozycjonowanie łączy te trzy miejsca: strona odpowiada na pytania pacjentów, wizytówka prowadzi do właściwej podstrony, a dane o gabinecie są wszędzie takie same. Mały gabinet z dwoma, trzema fizjoterapeutami ma krótką listę usług, więc efekt łatwo zmierzyć w telefonach i rezerwacjach."),

        h2("Frazy, którymi pacjenci szukają fizjoterapeuty i osteopaty: problem, metoda, miasto"),
        p("Zapytania układają się w kilka grup i każda potrzebuje innej odpowiedzi na stronie:"),
        li("problem i miasto: „ból kręgosłupa lędźwiowego fizjoterapia Poznań”, „rwa kulszowa rehabilitacja Łódź”"),
        li("metoda: „terapia manualna”, „osteopata Wrocław”, „kinesiotaping”, „fala uderzeniowa”"),
        li("sytuacja: „rehabilitacja po endoprotezie kolana”, „fizjoterapia po porodzie”, „fizjoterapeuta dla biegaczy”"),
        li("sposób płatności: „rehabilitacja NFZ”, „fizjoterapeuta prywatnie bez skierowania”"),
        p("Część pacjentów wpisuje też „kręgarz”, bo chiropraktyka jest w Polsce mało znana, a nazwy metod brzmią obco. Jeśli pracujecie terapią manualną kręgosłupa, podstrona może to słowo wyjaśnić i opisać, czym Wasza praca się różni. Przed pisaniem sprawdzam prawdziwe dane wyszukiwań dla Waszej miejscowości; jedna fraza dostaje jedną podstronę."),

        h2("Wizytówka Google gabinetu fizjoterapii i wyniki w Mapach"),
        p("Przy wyszukiwaniu „fizjoterapeuta w pobliżu” większość telefonów trafia do jednego z trzech gabinetów w Mapach. O kolejności decyduje odległość, której nie zmienimy, oraz to, co zależy od Was:"),
        li("kategoria główna „Fizjoterapeuta” i dodatkowe tylko dla usług, które naprawdę wykonujecie, na przykład „Osteopata”"),
        li("lista usług z krótkimi opisami i linkiem do pasującej podstrony, a nie do strony głównej"),
        li("aktualne godziny, także wczesne poranki i soboty, jeśli przyjmujecie"),
        li("zdjęcia sali, stołów terapeutycznych i zespołu, dodawane regularnie"),
        p(
          "Fikcyjne adresy i nazwy uzupełnione o słowa kluczowe kończą się zawieszeniem wizytówki, dlatego ich nie stosuję. Szerzej o mapach i katalogach piszę na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Podstrony problemów na stronie gabinetu fizjoterapii: kręgosłup, urazy i rehabilitacja po operacjach"),
        p("Jedna podstrona „Oferta” nie wyjdzie wysoko ani na „rwę kulszową”, ani na „rehabilitację po rekonstrukcji ACL”. Każdy problem, przy którym chcecie mieć więcej pacjentów, dostaje osobną podstronę: z czym przychodzą pacjenci, jak wygląda pierwsza wizyta i badanie funkcjonalne, jakie metody stosujecie, ile wizyt zwykle obejmuje terapia — jako przedział, bez obietnic — kto z zespołu się tym zajmuje i jak się zapisać."),
        h3("Osteopatia, terapia manualna i fizjoterapia uroginekologiczna"),
        p("Metody i specjalizacje to osobne wyszukiwania. Pacjentka szukająca fizjoterapii uroginekologicznej po porodzie albo osoba, która chce trafić do osteopaty, potrzebuje podstrony, która wyjaśnia metodę zwykłymi słowami i mówi, kto w gabinecie ma odpowiednie przeszkolenie."),
        p("Taką strukturę zbudowałem dla Giuseppe, psychoterapeuty z Mediolanu: 7 głównych obszarów terapii, 21 podstron szczegółowych pod nimi i osobne podstrony dla każdego miejsca przyjęć. Gabinet fizjoterapii ma mniej tematów, ale zasada jest ta sama — problem, osoba, która go leczy, i miejsce, w którym przyjmuje."),

        h2("Rehabilitacja na NFZ i wizyty prywatne w pozycjonowaniu gabinetu fizjoterapii"),
        p("Jeśli macie kontrakt z NFZ, trafiają do Was dwa rodzaje pacjentów z innymi pytaniami. Na rehabilitację w ramach NFZ potrzebne jest skierowanie od lekarza, a pacjent chce wiedzieć, jak długo się czeka, jakie dokumenty przynieść i jak się zapisać. Pacjent prywatny porównuje ceny, terminy i metody — i zwykle nie wie, że skierowanie nie jest mu potrzebne. Osobne podstrony dla obu ścieżek odpowiadają na oba rodzaje zapytań i oszczędzają czas rejestracji."),

        h2("Booksy, ZnanyLekarz i własna strona gabinetu fizjoterapii w wynikach Google"),
        p("Profile w Booksy i ZnanyLekarz przynoszą wielu gabinetom rezerwacje i są wysoko dla fraz „fizjoterapeuta + miasto”. Obok Waszego profilu serwis pokazuje jednak innych terapeutów z okolicy, a opis metod jest krótki. Profil warto prowadzić starannie i jednocześnie budować własną stronę, która wygrywa wyszukiwania nazwy gabinetu i problemów. Kalendarz z serwisu można osadzić na stronie, a nazwa, adres i godziny muszą być wszędzie takie same."),
        p("Formularz kontaktowy na stronie nie powinien pytać o objawy i wyniki badań: dane o zdrowiu to w RODO szczególna kategoria. Imię, telefon i preferowany termin wystarczą, a do tego klauzula informacyjna i umowa powierzenia z dostawcą formularza. To ogólne wskazówki, nie opinia prawna."),

        h2("Informacja, nie reklama: zasady dla fizjoterapeutów a treści na stronie gabinetu"),
        p("Gabinet zarejestrowany jako podmiot wykonujący działalność leczniczą może informować o świadczeniach, ale nie powinien ich reklamować, a fizjoterapeutów obowiązują też zasady etyki zawodowej Krajowej Izby Fizjoterapeutów. W praktyce strona podaje fakty — zakres usług, kwalifikacje, cennik, godziny — bez obietnic wyleczenia, bez „najlepszego fizjoterapeuty w mieście” i bez porównań z innymi gabinetami."),
        p("U Giuseppe system zarządzania treścią ostrzega przy zapisie tekstu, który zawiera sformułowania zakazane przez artykuł 40 włoskiego kodeksu etyki psychologów. Podobną listę słów można przygotować dla gabinetu fizjoterapii. Zasady się zmieniają, więc sprawdźcie aktualne stanowisko KIF albo skonsultujcie treści z prawnikiem; nie udzielam porad prawnych."),

        h2("Opinie pacjentów gabinetu fizjoterapii w Google, ZnanyLekarz i Booksy"),
        p("Opinie przesuwają gabinet w Mapach i pomagają wybrać między dwoma nazwami. Działa stały zwyczaj, a nie akcja raz w roku: krótka wiadomość z linkiem po zakończonej terapii, wysyłana wszystkim pacjentom, nie tylko zadowolonym. W odpowiedzi na opinię nie potwierdzamy, że autor był pacjentem, i nie piszemy nic o jego leczeniu. Cytowanie pochwał na własnej stronie łatwo uznać za reklamę, dlatego zamiast tego linkuję do niezależnych profili."),

        h2("Fizjoterapeuta jako autor treści: numer PWZFz, kursy i data weryfikacji (YMYL)"),
        p("Google ocenia treści o zdrowiu surowiej niż większość tematów i szuka śladów, kto za nimi stoi. Każda podstrona problemu podaje fizjoterapeutę, który ją napisał albo sprawdził, z linkiem do jego profilu: tytuł, numer prawa wykonywania zawodu fizjoterapeuty, ukończone kursy terapii manualnej czy osteopatii i data ostatniej weryfikacji tekstu. Ja przygotowuję strukturę, dane wyszukiwań i szkic, a terapeuta zatwierdza treść merytoryczną. Strona nie stawia diagnoz; osobę z niepokojącymi objawami kieruje do lekarza."),

        h2("Pozycjonowanie gabinetu fizjoterapii w ChatGPT i Google AI Overviews (GEO, AEO)"),
        p("Pacjenci pytają ChatGPT, Perplexity albo podsumowania AI w Google, gdzie w ich mieście jest osteopata albo fizjoterapeuta, który pracuje z biegaczami. Zabieganie o miejsce w tych odpowiedziach to GEO (generative engine optimization), nazywane też AEO (answer engine optimization). Asystenci polecają gabinety, o których mają rzeczowe i spójne dane:"),
        li("metody, problemy, terapeuci, godziny i informacja o NFZ zapisane prostymi zdaniami"),
        li("cennik wizyt w tekście, a nie w grafice"),
        li("dane strukturalne łączące gabinet, terapeutów i adres"),
        li("te same dane na stronie, w wizytówce Google, w Booksy i ZnanyLekarz"),
        p(
          "Giuseppe znalazł mnie przez ChatGPT, a nowe podstrony jego strony już pojawiają się w odpowiedziach tego asystenta. Na początku i po kilku miesiącach porównuję, co asystenci mówią o Waszym gabinecie. Szczegóły na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Ile kosztuje pozycjonowanie gabinetu fizjoterapii"),
        li("Audyt SEO strony, wizytówki Google i profili w serwisach rezerwacji: od 1000 zł, jednorazowo, z listą poprawek według wpływu na wynik."),
        li("Jednorazowe prace — podstrony problemów i metod, ścieżki NFZ i prywatna, dane strukturalne: od 1000 do 3000 zł."),
        li("Stałe pozycjonowanie gabinetu fizjoterapii — nowe podstrony, Mapy, opinie, widoczność w AI i raporty w rezerwacjach: od 3500 zł miesięcznie, w dużych miastach przy silnej konkurencji od 5500 zł miesięcznie."),
        p(
          "Jak wygląda strona, która to wszystko udźwignie, opisuję na stronie ",
          link("strona internetowa dla fizjoterapeuty", "/pl/strona-internetowa-dla-fizjoterapeuty"),
          ". Przychodnie z wieloma poradniami znajdą więcej na stronie ",
          link("pozycjonowanie strony przychodni", "/pl/oferty/pozycjonowanie-strony-przychodni-warszawa"),
          ", sposób prowadzenia stałej współpracy — w opisie ",
          link("strategii i optymalizacji SEO", "/pl/oferty/strategia-i-optymalizacja-seo"),
          ", a pełne widełki są w ",
          link("cenniku", "/pl/cennik"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie gabinetu fizjoterapii: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje pozycjonowanie gabinetu fizjoterapii?", "Za audyt płacicie od 1000 zł raz; konkretne zadania, takie jak podstrony problemów czy ścieżka NFZ, kosztują od 1000 do 3000 zł; stała współpraca zaczyna się od 3500 zł miesięcznie, a przy silnej konkurencji w dużym mieście od 5500 zł. Stałą cenę podaję po krótkim opisie gabinetu."],
          ["Ile trwa, zanim pozycjonowanie przyniesie pacjentów?", "Poprawki w wizytówce Google potrafią zadziałać w kilka tygodni. Nowe podstrony problemów zwykle potrzebują trzech–pięciu miesięcy, w dużych miastach dłużej."],
          ["Czy wystarczy profil w Booksy albo ZnanyLekarz?", "Na start bywa wystarczający, ale profil stoi na liście obok innych gabinetów i zależy od zasad serwisu. Własna strona wygrywa wyszukiwania nazwy gabinetu i problemów, a kalendarz z serwisu można na niej osadzić."],
          ["Czy fizjoterapeuta może reklamować swój gabinet?", "Gabinet działający jako podmiot leczniczy powinien informować o usługach, a nie je reklamować, a fizjoterapeutów obowiązują też zasady etyki zawodowej. Strona podaje fakty bez obietnic efektów; aktualne zasady warto sprawdzić w Krajowej Izbie Fizjoterapeutów."],
          ["Czy pozycjonujesz też gabinety osteopatii i terapii manualnej?", "Tak. Osteopatia i terapia manualna to osobne frazy i osobne podstrony, z opisem kwalifikacji osoby, która prowadzi terapię."],
          ["Kto pisze treści o problemach i metodach?", "Ja przygotowuję strukturę, dane wyszukiwań i szkic. Fizjoterapeuta sprawdza i zatwierdza treść merytoryczną, a podstrona podaje jego nazwisko i datę weryfikacji."],
          ["Czy pracujesz z gabinetami spoza Warszawy?", "Tak, z całej Polski. Pracuję zdalnie: strona, wizytówka i dane wyszukiwań dla Waszej miejscowości. Gabinety w Warszawie mogę też odwiedzić."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie gabinetu fizjoterapii: co mi wysłać"),
        p(
          "Potrzebuję adresu strony gabinetu, linków do wizytówki Google i profili w serwisach rezerwacji, listy problemów i metod, z którymi chcecie mieć więcej pacjentów, nazwy miejscowości i informacji o kontrakcie z NFZ. W odpowiedzi dostaniecie trzy pierwsze poprawki i stałą cenę. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
