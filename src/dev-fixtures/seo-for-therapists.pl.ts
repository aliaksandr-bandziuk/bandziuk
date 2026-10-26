// Landing page fixture: Pozycjonowanie strony psychologa i psychoterapeuty (PL),
// group «seo-for-therapists». Market version for Poland, not a translation of
// seo-for-therapists.en.
// Semantic core: ref/medical-practices.md has no PL phrases above the source’s
// floor for this group; slug phrase «pozycjonowanie strony psychologa» (owner’s
// form «pozycjonowanie strony X»), plus «pozycjonowanie gabinetu
// psychologicznego», «SEO dla psychologa», «pozycjonowanie strony
// psychoterapeuty» in H2/meta. PL PAA in the core («Czy SEO i pozycjonowanie to
// to samo?») — not targeted on this page.
// Intent: ref/intent-check-medical-practices.md — «pozycjonowanie strony
// psychologa» vs «strona dla psychologa»: 0 shared URLs, 1 shared domain →
// separate pages. Top 10 for this page: sembility, sitepromotor, socialmagic,
// artefakt, internetica, semstart, mindness, wzrostpsychologa → Polish SEO
// agencies and marketing for psychologists; the buyer is the psychologist.
// Polish angles: informacja, nie reklama; nowy samorząd zawodowy psychologów
// (general, «sprawdź aktualne zasady»); kodeksy etyczne towarzystw
// psychoterapeutycznych; ZnanyLekarz vs własna strona; NFZ vs prywatnie;
// dzielnice dużych miast; terapia online dla Polaków za granicą; RODO.
// Direct case: Giuseppe, psychotherapist in Milan (psychotherapist-website-milan).
// NOT on this page: building and designing the site, contact path, migration,
// CMS (/pl/strona-dla-psychologow-terapeutow); clinics and przychodnie
// (/pl/oferty/pozycjonowanie-strony-przychodni-warszawa); fizjoterapia
// (/pl/pozycjonowanie-strony-gabinetu-fizjoterapii).
// Owner's rule: every SEO page covers AI search (GEO, AEO).
import { p, h2, h3, li, link, k } from "./pt";

export const seoForTherapistsPl = {
  lang: "pl",
  group: "seo-for-therapists",
  slug: "pozycjonowanie-strony-psychologa",
  title: "Pozycjonowanie strony psychologa i psychoterapeuty",
  heading: "Pozycjonowanie strony psychologa i psychoterapeuty",
  excerpt:
    "Zajmuję się pozycjonowaniem stron psychologów, psychoterapeutów i gabinetów psychologicznych: podstrony o problemach i nurtach terapii, wizytówka Google, spójny profil w ZnanyLekarz i widoczność w ChatGPT — tak żeby osoba szukająca pomocy w Twoim mieście albo online trafiała na Twoją stronę.",
  seo: {
    metaTitle: "Pozycjonowanie gabinetu psychologicznego | Bandziuk",
    metaDescription:
      "Pozycjonowanie strony psychologa: podstrony problemów i nurtów, wizytówka Google, ZnanyLekarz, terapia online, RODO i odpowiedzi ChatGPT. Audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Problemy, nurty, miasto, AI", "Audyt od 1000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Psycholog Mokotów", "Psychoterapia online po polsku", "Terapia par", "Pierwsza konsultacja"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO strony psychologa: strona, wizytówka Google i profile w serwisach", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO dla gabinetu psychologicznego: podstrony problemów, nurtów i lokalizacji, dane strukturalne", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie strony psychologa lub psychoterapeuty", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje pozycjonowanie strony psychologa",
      items: [
        { _key: k("o"), iconName: "layers", title: "Podstrona dla każdego problemu i nurtu", text: "Lęk, napady paniki, terapia par, CBT, psychodynamika" },
        { _key: k("o"), iconName: "map-pin", title: "Wizytówka Google i dzielnice", text: "Gabinet tam, gdzie naprawdę przyjmujesz" },
        { _key: k("o"), iconName: "search", title: "ZnanyLekarz i strona mówią to samo", text: "Te same kwalifikacje, ceny i godziny" },
        { _key: k("o"), iconName: "shield-check", title: "Informacja zamiast reklamy", text: "Bez obietnic efektów i bez opinii jako dowodu" },
        { _key: k("o"), iconName: "message-circle", title: "Terapia online dla Polaków za granicą", text: "Londyn, Berlin, Dublin — po polsku" },
        { _key: k("o"), iconName: "sparkles", title: "Widoczność w ChatGPT i podsumowaniach AI", text: "Fakty o gabinecie, które asystent może zacytować" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO strony psychologa i wizytówki", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe pozycjonowanie gabinetu psychologicznego", value: "od 3500 zł / mies.", note: "podstrony, mapy, AI, raporty", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: gabinet psychoterapii i inne strony, które pozycjonuję",
      subtitle:
        "Na pierwszym miejscu prywatny gabinet psychoterapii w Mediolanie: podstrony obszarów terapii, miast i terapii online dla Włochów za granicą, które pojawiają się już w odpowiedziach ChatGPT, przy ścisłych zasadach informowania o usługach. Obok strony pokazujące resztę pracy: lokalne SEO i Mapy Google dla warszawskiej firmy, przebudowa, po której ruch z Google wzrósł 29 razy, i strony wielojęzyczne.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "psychotherapist-website-milan",
        "auto-repair-seo-and-ux-boost",
        "architecture-website-rebuild-and-seo-scan",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "full-multilingual-website-development-and-seo-for-student-services",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena pozycjonowania strony psychologa",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: co poprawiłbym najpierw na stronie, w wizytówce Google i w ZnanyLekarz, i za jaką stałą cenę.",
      contextLabel: "Nazwa gabinetu lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Jak pracujesz?", options: ["Sam(a), w gabinecie", "Gabinet z kilkoma terapeutami", "Tylko online", "Gabinet i online"] },
        { _key: k("z"), question: "Skąd dziś przychodzą nowe osoby?", options: ["Profil w ZnanyLekarz", "Wyszukiwarka i mapy", "Polecenia innych terapeutów", "Instagram lub Facebook"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Pozycjonowanie strony psychologa robię sam: od analizy fraz, przez podstrony o problemach i nurtach terapii, po wizytówkę Google i widoczność w ChatGPT. Pracuję z psychologami, psychoterapeutami i gabinetami psychologicznymi z kilkoma terapeutami w całej Polsce, a także z osobami prowadzącymi terapię online dla Polaków mieszkających za granicą."),

        h2("Na czym polega pozycjonowanie strony psychologa"),
        p("Osoba, która szuka psychologa, rzadko wpisuje jedno słowo. Pisze o tym, co ją boli, i dodaje miejsce albo formę spotkań: „psychoterapeuta od lęku Kraków”, „terapia par Wrocław”, „psycholog Mokotów”, „psycholog online po polsku”. Często szuka długo i wraca do kilku stron, zanim napisze. Pozycjonowanie gabinetu psychologicznego polega na tym, żeby na każde takie wyszukiwanie istniała u Ciebie jedna rzeczowa odpowiedź."),
        p("Inaczej szukają też osoby, które idą na NFZ, i te, które wybierają gabinet prywatny. Na NFZ trafia się zwykle do poradni albo centrum zdrowia psychicznego, często z kolejką. Prywatny gabinet wygrywa wtedy, gdy osoba znajdzie terapeutę pracującego z jej problemem, w jej okolicy albo online, z jasną ceną i terminem."),

        h2("Informacja, nie reklama: zasady dla psychologów a treść strony"),
        p("Zawód psychologa porządkuje nowy samorząd zawodowy psychologów i jego zasady, w tym te o informowaniu o usługach, wciąż się kształtują — sprawdź aktualne stanowisko samorządu. Psychoterapeuci kierują się kodeksami etycznymi towarzystw, w których się szkolili i certyfikowali. Duch jest wspólny z zasadami dla lekarzy: informować, nie reklamować."),
        p("Dla pozycjonowania to wygodne, bo Google i asystenci AI cenią właśnie fakty: z czym pracujesz, w jakim nurcie, jakie masz wykształcenie, ile trwa sesja i ile kosztuje. Na stronie nie ma obietnic w rodzaju „pozbędziesz się lęku w osiem sesji”, cytatów z klientów jako dowodu ani „pierwszej wizyty gratis”. Giuseppe, psychoterapeuta z Mediolanu, pracuje pod artykułem 40 włoskiego kodeksu etyki psychologów, który zakazuje dokładnie tych rzeczy. Te zasady obowiązują na każdej jego podstronie, także na tych pisanych z myślą o wyszukiwarce."),

        h2("ZnanyLekarz a własna strona gabinetu psychologicznego w Google"),
        p("Na frazy „psycholog + miasto” wysoko stoją ZnanyLekarz i inne katalogi, a dla wielu gabinetów to ważne źródło rezerwacji. Profil warto prowadzić porządnie: aktualne obszary pracy, ceny, zdjęcie, kalendarz. Pamiętaj jednak, że na liście obok Ciebie stoją inni terapeuci z okolicy, a zasady ustala serwis."),
        p("Własna strona wygrywa wyszukiwania Twojego nazwiska, konkretnych problemów i nurtów, i to ją czytają asystenci AI, kiedy opisują gabinet. Najlepiej, gdy profil w ZnanyLekarz linkuje do strony, a kwalifikacje, ceny i adres brzmią tak samo w serwisie, na stronie i w Mapach Google."),

        h2("Pozycjonowanie strony psychoterapeuty na problemy, nurty i grupy klientów"),
        p("Jedna podstrona „Oferta” z listą piętnastu problemów rzadko pojawia się wysoko na którykolwiek z nich. Każdy obszar, w którym chcesz więcej osób, potrzebuje własnej podstrony."),
        h3("Podstrony problemów"),
        p("Lęk i napady paniki, depresja, wypalenie zawodowe, żałoba, DDA, kryzys po rozstaniu. Podstrona opisuje, jak problem wygląda w codziennym życiu, jak z nim pracujesz i jak wygląda pierwsze spotkanie."),
        h3("Podstrony nurtów terapii"),
        p("Terapia poznawczo-behawioralna, psychodynamiczna, systemowa, Gestalt, EMDR. Ludzie szukają nurtu, gdy ktoś im go polecił; podstrona napisana przez osobę z tym szkoleniem, z nazwą szkoły, odpowiada lepiej niż krótka linijka w katalogu."),
        h3("Podstrony grup klientów"),
        p("Pary, młodzież i rodzice, osoby LGBT+, osoby po raz pierwszy idące na terapię."),
        p("U Giuseppe są siedem stron filarowych według obszarów terapii, pod nimi 21 włoskich podstron szczegółowych oraz 150 pytań i odpowiedzi, które wyświetlają się na podstronach, gdzie dane pytanie pasuje."),

        h2("Pozycjonowanie lokalne gabinetu psychologicznego: wizytówka Google i dzielnice"),
        p("W dużych miastach ludzie szukają po dzielnicy: „psycholog Mokotów”, „psychoterapeuta Krowodrza”, „gabinet psychologiczny Wrzeszcz”. Wizytówka Google z właściwą kategorią (Psycholog, Psychoterapeuta), godzinami i linkiem do pasującej podstrony to podstawa. Jeśli wynajmujesz pokój w kilku gabinetach, wizytówkę zakładasz tylko tam, gdzie przyjmujesz w stałych godzinach; praktyka wyłącznie online zwykle nie może mieć wizytówki w mapach."),
        p("Podstrona lokalizacji opisuje dojazd, parking, wejście do budynku i to, czy gabinet jest dostępny dla osób z niepełnosprawnością. Dla osoby w lęku takie drobiazgi decydują, czy w ogóle przyjdzie na pierwsze spotkanie."),
        p(
          "Opinie wymagają ostrożności. Prośba o opinię skierowana do osoby w trakcie terapii może stawiać ją w niezręcznej sytuacji, a odpowiedź na opinię nigdy nie może potwierdzać, że ktoś był klientem. Więcej o mapach na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Terapia online po polsku: pozycjonowanie strony psychologa dla Polaków za granicą"),
        p("Polacy w Wielkiej Brytanii, Niemczech, Irlandii, Holandii czy Norwegii często wolą rozmawiać o trudnych sprawach w ojczystym języku. Szukają „psycholog po polsku Londyn”, „polski psychoterapeuta Berlin”, „psycholog online po polsku”. Osobna podstrona o terapii online — platforma, płatność, strefy czasowe, kraje, z których przyjmujesz — odpowiada na te frazy i nie konkuruje z lokalnymi gabinetami w Twoim mieście. Przepisy kraju, w którym mieszka klient, i sposób rozliczania usług z zagranicy sprawdź z księgową albo prawnikiem."),
        p("Tak wygląda to u Giuseppe: ma podstronę o terapii online dla Włochów mieszkających poza Włochami, obok podstron dla Mediolanu i Monzy."),

        h2("Wiarygodność strony psychologa w Google: wykształcenie, szkoła psychoterapii, superwizja"),
        p("Google traktuje treści o zdrowiu psychicznym surowiej niż większość tematów (YMYL) i szuka sygnałów doświadczenia i wiarygodności. Na stronie psychologa to konkretne rzeczy:"),
        li("dyplom, uczelnia i wpis do rejestru, gdy samorząd go prowadzi"),
        li("szkoła psychoterapii, certyfikat towarzystwa i superwizja"),
        li("autor i data ostatniej aktualizacji przy każdym tekście o problemach"),
        li("te same dane w danych strukturalnych, wizytówce i ZnanyLekarz"),
        p("Te same informacje rozstrzygają o zaufaniu osoby, która wybiera terapeutę. Psycholog i psychoterapeuta to w Polsce różne kwalifikacje i ludzie coraz częściej to sprawdzają, więc strona mówi wprost, kim jesteś, w jakim nurcie pracujesz i czy jesteś w trakcie szkolenia, czy po certyfikacie."),

        h2("Blog psychologa: frazy, które ludzie wpisują przed pierwszą wizytą"),
        p("Najlepsze tematy to pytania, które słyszysz przy pierwszym kontakcie: „czym różni się psycholog od psychoterapeuty i psychiatry”, „ile trwa psychoterapia”, „jak wygląda pierwsza wizyta u psychologa”, „czy psychoterapia jest na NFZ”. Sprawdzam realne dane wyszukiwań dla Twoich obszarów, przypisuję każdą frazę do jednej podstrony i przygotowuję plan tekstu; treść merytoryczną piszesz albo zatwierdzasz Ty."),
        p("Jeśli prowadzisz bloga od lat, zaczynam od tego, co już jest: które wpisy przynoszą odwiedziny, które się dublują i które warto połączyć. Każdy wpis linkuje do podstrony obszaru pracy, której dotyczy, żeby osoba czytająca o lęku trafiła potem do opisu terapii lęku i do kontaktu."),

        h2("Pozycjonowanie strony psychologa w ChatGPT i Google AI Overviews (GEO, AEO)"),
        p("Coraz więcej osób pyta asystenta: „poleć psychoterapeutę od napadów paniki w Gdańsku” albo „polski psycholog online, który pracuje z parami”. Praca nad tym, żeby gabinet pojawiał się w takich odpowiedziach, to GEO albo AEO. Asystent poleca osoby, które potrafi opisać na podstawie kilku źródeł, dlatego:"),
        li("obszary pracy, nurty, języki, ceny i miejsca przyjęć są zapisane prostymi faktami"),
        li("dane strukturalne opisują terapeutę, gabinet, problemy i formy terapii"),
        li("plik robots.txt jasno mówi, które roboty AI mogą czytać stronę"),
        li("strona, wizytówka Google i ZnanyLekarz podają te same kwalifikacje, adres i ceny"),
        p(
          "Giuseppe znalazł mnie przez ChatGPT, a jego nowe podstrony już pojawiają się w odpowiedziach ChatGPT. Na początku i po zakończeniu prac zapisuję, co asystenci mówią o Twoim gabinecie. Więcej na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("RODO i pomiar wyników pozycjonowania gabinetu psychologicznego"),
        p("Wynikiem są zapytania, nie odwiedziny: telefony, wiadomości i kliknięcia w kalendarz z wyszukiwarki. Mierzę je tak, żeby nic o osobach piszących nie trafiało do serwisów reklamowych. Analityka działa dopiero po zgodzie, piksele reklamowe nie stoją na stronie kontaktu, a z dostawcą formularza jest umowa powierzenia danych. To ogólne wskazówki, nie opinia prawna."),

        h2("Ile kosztuje pozycjonowanie strony psychologa"),
        li("Audyt SEO strony, wizytówki Google i profili w serwisach: od 1000 zł, jednorazowo; dostajesz listę zmian, od najważniejszej."),
        li("Jednorazowe prace — podstrony problemów, nurtów i lokalizacji, terapia online, dane strukturalne: od 1000 do 3000 zł."),
        li("Stałe pozycjonowanie gabinetu psychologicznego — nowe podstrony, mapy, widoczność w AI, raporty: od 3500 zł miesięcznie, w Warszawie przy silnej konkurencji od 5500 zł."),
        p(
          "Gdy obecna strona nie nadaje się do poprawek, nową stronę opisuję tutaj: ",
          link("strona dla psychologów i terapeutów", "/pl/strona-dla-psychologow-terapeutow"),
          ". Przychodnie i centra medyczne znajdą więcej na stronie ",
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
      title: "Pozycjonowanie strony psychologa: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje pozycjonowanie strony psychologa?", "Audyt od 1000 zł jednorazowo, pojedyncze prace od 1000 do 3000 zł, stałe pozycjonowanie od 3500 zł miesięcznie, przy silnej konkurencji od 5500 zł. Po kilku zdaniach o gabinecie podam stałą cenę."],
          ["Czy psychologowi wystarczy profil w ZnanyLekarz?", "Profil przynosi zapisy, ale pokazuje Cię na liście obok konkurencji i według reguł serwisu. Na pytania o konkretne problemy, nurty i Twoje nazwisko lepiej odpowiada własna strona, z której korzystają też asystenci AI. Warto mieć jedno i drugie — z identycznymi kwalifikacjami i cenami."],
          ["Czy psycholog może się reklamować w internecie?", "Bezpieczniej przyjąć, że psycholog informuje o usługach, a nie je reklamuje: fakty o wykształceniu, nurcie, obszarach pracy i cenach, bez obietnic efektów i opinii klientów jako dowodu. Zasady samorządu psychologów wciąż się kształtują, więc sprawdź ich aktualną wersję."],
          ["Jak psycholog może zdobywać klientów z Google?", "Przez podstrony dla konkretnych problemów i nurtów, wizytówkę Google w miejscu, gdzie przyjmuje, spójne profile w katalogach i teksty odpowiadające na pytania zadawane przed pierwszą wizytą."],
          ["Ile trwa pozycjonowanie gabinetu psychologicznego?", "Poprawki w wizytówce i profilach działają często w kilka tygodni. Nowe podstrony zwykle potrzebują od dwóch do czterech miesięcy, w Warszawie i Krakowie dłużej."],
          ["Czy pozycjonujesz terapię online dla Polaków za granicą?", "Tak. To osobna podstrona i osobne frazy, np. „psycholog po polsku Londyn”, z informacją o platformie, płatności i strefach czasowych."],
          ["Czy piszesz teksty o terapii?", "Przygotowuję frazy, plan i wersję roboczą. Treść merytoryczną piszesz albo zatwierdzasz Ty, a Twoje imię i kwalifikacje są podane jako autor."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie strony psychologa: co mi wysłać"),
        p(
          "Wyślij link do strony, wizytówki w Mapach Google i profilu w ZnanyLekarz, miasto i dzielnicę gabinetu, nurt i obszary, w których chcesz więcej osób, oraz informację, czy pracujesz też online. Odpowiem, co poprawiłbym najpierw i za jaką stałą cenę. Skorzystaj z ",
          link("formularza powyżej", "#quote"),
          " albo napisz na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
