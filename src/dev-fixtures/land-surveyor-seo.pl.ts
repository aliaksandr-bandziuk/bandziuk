// Landing page fixture: Pozycjonowanie strony geodety (PL), group «land-surveyor-seo».
// NEW page — create-landing.cjs, root level like the other industry SEO pages.
//
// Why it exists (18.11.2026). Measured in research/dataforseo/scanning-niches.md:
// the owner-side intent is zero in Polish too — «pozycjonowanie dla geodety»,
// «seo dla geodety», «marketing dla geodety» all return no data. The market
// itself is the largest in the whole cluster: «geodeta» 14 800,
// «usługi geodezyjne» 1 900, «pomiary geodezyjne» 320,
// «inwentaryzacja powykonawcza» 320.
//
// Market adaptation, not a translation of the EN page: the trigger documents
// are the Polish ones (mapa do celów projektowych, tyczenie, inwentaryzacja
// powykonawcza, wznowienie granic), and the local-rules section is about
// PODGiK and zgłoszenie pracy geodezyjnej rather than US counties.
//
// Heading form per the owner's rule: «pozycjonowanie strony X», not «firmy».
import { p, h2, h3, li, link, k } from "./pt";

export const landSurveyorSeoPl = {
  lang: "pl",
  group: "land-surveyor-seo",
  slug: "pozycjonowanie-strony-geodety",
  title: "Pozycjonowanie strony geodety i firmy geodezyjnej",
  heading:
    "Pozycjonowanie strony geodety: jak trafiać do klienta, któremu urząd, bank albo kierownik budowy kazał dostarczyć dokument",
  excerpt:
    "Zajmuję się pozycjonowaniem stron firm geodezyjnych: podstrony pod poszczególne opracowania i powiaty, terminy i widełki cenowe tam, gdzie klient je zobaczy, wyszukiwanie lokalne i odpowiedzi asystentów AI. Nikt nie chce mapy czy tyczenia — ktoś kazał dostarczyć dokument, a zlecenie dostaje firma, która ten dokument wytłumaczyła. Audyt 1000 zł, stała praca 3500 zł miesięcznie.",
  seo: {
    metaTitle: "Pozycjonowanie strony geodety — audyt 1000 zł",
    metaDescription:
      "Pozycjonowanie strony geodety: podstrony pod mapę do celów projektowych, tyczenie i inwentaryzację, terminy i ceny, widoczność w ChatGPT i Perplexity.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Podstrona na każde opracowanie", "Cytowania w ChatGPT i Perplexity", "Audyt 1000 zł"],
  heroPhonePoints: ["Mapa do celów projektowych", "Tyczenie przed startem budowy", "Inwentaryzacja powykonawcza", "Wymieniany przez ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO strony firmy geodezyjnej: frazy, podstrony opracowań, wizytówka Google i widoczność w AI", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO dla geodety: podstrony opracowań i powiatów, dane strukturalne, formularz zapytania", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie strony firmy geodezyjnej", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Zakres prac",
      title: "Pozycjonowanie strony geodety: z czego składa się ta praca",
      items: [
        { _key: k("o"), iconName: "file-text", title: "Podstrona na każde opracowanie", text: "Mapa do celów projektowych, tyczenie, inwentaryzacja, podziały" },
        { _key: k("o"), iconName: "map-pin", title: "Podstrony pod powiaty i ośrodki", text: "Lokalne zasady, opłaty i realne terminy" },
        { _key: k("o"), iconName: "sparkles", title: "Obecność w ChatGPT i Perplexity", text: "Tam najpierw pada pytanie, jaki dokument jest potrzebny" },
        { _key: k("o"), iconName: "gauge", title: "Termin i widełki cenowe na stronie", text: "Dwa pytania, od których zaczyna się każda rozmowa" },
        { _key: k("o"), iconName: "search", title: "Wyszukiwanie lokalne i wizytówka", text: "Powiaty, w których realnie pracujecie" },
        { _key: k("o"), iconName: "target", title: "Podstrony pisane dla wykonawców", text: "Tyczenie i obsługa budowy to zlecenia powtarzalne" },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: usługi techniczne sprzedawane klientom, którzy nie ocenią pracy sami",
      subtitle:
        "Co łączy te realizacje z firmą geodezyjną: klient nie jest w stanie ocenić efektu, zapytanie przychodzi z konkretnego adresu albo obiektu, a wzrost dała struktura i treść, nie kupione linki. Firma skanowania laserowego 3D i BIM z dwudziestodziewięciokrotnym wzrostem ruchu, dostawca internetu sprawdzany adres po adresie, wielojęzyczna platforma nieruchomości, warsztat przyjmujący zlecenia pojedynczo i serwis samochodowy z tym samym schematem zapytań.",
      picks: [
        "architecture-website-rebuild-and-seo-scan",
        "web-development-a-website-for-internet-prowider",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "felgilab-wordpress-rebuild",
        "auto-repair-seo-and-ux-boost",
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Pozycjonowanie strony geodety zaczyna się od dokumentu, który kazano klientowi dostarczyć"),
        p("Nikt nie budzi się z potrzebą pomiaru geodezyjnego. Zlecenie pojawia się dlatego, że ktoś inny zażądał dokumentu: projektant przed złożeniem wniosku, kierownik budowy przed wytyczeniem, urząd przed odbiorem, sąsiad w sporze o płot. Zanim klient trafi do wyszukiwarki, nie szuka zawodu — powtarza frazę z pisma, którego do końca nie rozumie."),
        p("Dlatego w tej branży szuka się nazw opracowań, a nie nazwy zawodu. Ludzie wpisują «mapa do celów projektowych», «tyczenie budynku», «inwentaryzacja powykonawcza», «wznowienie granic» — słowa podane im przez projektanta albo urzędnika. Strona zbudowana jako Usługi, O nas, Kontakt nie odpowiada na żadne z nich, bo jedna podstrona o nazwie Usługi wymienia wszystkie opracowania i nie wyjaśnia żadnego."),
        p("Praca zaczyna się więc od zamiany każdego opracowania, które faktycznie wykonujecie, w osobną podstronę: czym jest, kto go zwykle żąda, ile kosztuje, ile trwa i co klient dostaje na końcu. Ta jedna zmiana daje firmie geodezyjnej więcej niż dowolna ilość tekstu o dokładności i doświadczeniu, bo dopasowuje podstronę do zdania, które klient usłyszał."),
        li("jedna podstrona na jedno opracowanie, nazwana dokładnie tak, jak nazywa je urząd i projektant;"),
        li("napisane, kto zwykle go wymaga — projektant, kierownik budowy, bank, sąd;"),
        li("pokazany gotowy dokument, a nie zdjęcie statywu z banku zdjęć;"),
        li("termin w dniach roboczych i widełki cenowe wraz z warunkami;"),
        li("i bez opracowań, które bierzecie niechętnie — przynoszą zapytania, których nie lubicie."),

        h2("Podstrony pod rodzaje opracowań: mapa do celów projektowych, tyczenie, inwentaryzacja powykonawcza"),
        p("Zmierzony popyt siedzi na nazwach opracowań i na samym zawodzie, nie na marketingowych frazach: «geodeta» to 14 800 wyszukiwań miesięcznie, «usługi geodezyjne» 1 900, «pomiary geodezyjne» i «inwentaryzacja powykonawcza» po 320. Za każdą z tych fraz stoi inny klient z innym terminem, a podstrona próbująca obsłużyć wszystkich naraz nie obsługuje nikogo."),
        p("Mapę do celów projektowych zamawia projektant albo inwestor przed wnioskiem i pyta o termin oraz o to, czy opracowanie obejmie przyłącza. Tyczenie zamawia kierownik budowy, który bez niego nie ruszy, i liczy się dla niego wyłącznie to, jak szybko przyjedziecie. Wznowienie granic zamawia właściciel w trakcie sporu i pyta, co geodeta może rozstrzygnąć, a czego nie. To są różne dokumenty dla różnych ludzi i podstrony powinny tak właśnie brzmieć."),
        p("Tu też wchodzą odpowiedzi AI, wcześniej niż większość firm się spodziewa. «Jaka mapa jest potrzebna do pozwolenia na budowę» albo «różnica między wznowieniem granic a rozgraniczeniem» to pytania zadawane dziś ChatGPT i Perplexity, zanim ktokolwiek otworzy wyszukiwarkę. Asystent odpowiada z podstron, które tłumaczą dokument prostym językiem, i wymienia przy tym nazwy firm. Serwis, który tylko wylicza usługi, nie zostaje wymieniony wcale."),

        h2("Podstrony pod powiaty i ośrodki dokumentacji: lokalne zasady zmieniają termin i cenę"),
        p("Geodezja jest obsługiwana powiatowo, a praktyka różni się przy każdej granicy: co przyjmuje ośrodek dokumentacji, ile trwa weryfikacja operatu, jakie są opłaty, jak długo czeka się na materiały po zgłoszeniu pracy geodezyjnej. Klient odczuwa to jako chaos — wycena z sąsiedniego powiatu nie zgadza się z tą u siebie — a podstrona tłumacząca lokalną procedurę odpowiada na pytanie, na które nikt inny nie odpowiada."),
        p("Ważniejsze od samego pomysłu jest ograniczenie. Podstrona dla każdego z trzystu osiemdziesięciu powiatów, zrobiona przez podmianę nazwy w szablonie, to podręcznikowa definicja treści ubogiej i tak zostanie potraktowana. Warto pisać te powiaty, w których naprawdę składaliście operaty i możecie powiedzieć, ile trwa weryfikacja i ile kosztują materiały — zwykle od trzech do kilkunastu podstron, nie kilkaset."),

        h3("Rodzaj opracowania, zdarzenie, które je wymusiło, i podstrona, która łapie to wyszukiwanie"),
      ],
    },
    {
      _type: "tableBlock",
      _key: k("b"),
      columns: ["Opracowanie", "Co wymusiło zlecenie", "Podstrona, która łapie wyszukiwanie"],
      rows: [
        { _type: "tableRow", _key: k("r"), cells: ["Mapa do celów projektowych", "Projekt i wniosek o pozwolenie na budowę", "Zakres opracowania, przyłącza i realny termin w waszym ośrodku"] },
        { _type: "tableRow", _key: k("r"), cells: ["Tyczenie budynku i obsługa budowy", "Kierownik budowy nie może ruszyć z pracami", "Podstrona pisana dla wykonawcy: terminy, ponowne tyczenie, kto za nie płaci"] },
        { _type: "tableRow", _key: k("r"), cells: ["Inwentaryzacja powykonawcza", "Odbiór budynku i przyłączenie mediów", "Co wchodzi w operat, ile trwa weryfikacja, co dostaje inwestor"] },
        { _type: "tableRow", _key: k("r"), cells: ["Wznowienie granic i rozgraniczenie", "Płot, zajęcie terenu, spór z sąsiadem", "Co geodeta rozstrzyga, a co wymaga sądu i czym są znaki graniczne"] },
        { _type: "tableRow", _key: k("r"), cells: ["Podział nieruchomości", "Sprzedaż części działki albo podział majątku", "Przebieg procedury, udział gminy i czas całej sprawy"] },
        { _type: "tableRow", _key: k("r"), cells: ["Mapa do celów prawnych", "Sprawa w sądzie, u notariusza albo w księdze wieczystej", "Do czego służy, czym różni się od zwykłej mapy i co zawiera"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("ChatGPT, Perplexity i AI Overviews jako źródło zleceń geodezyjnych"),
        p("Inwestor, któremu kazano dostarczyć mapę, zwykle nie wie jaką, a to jest dokładnie ten rodzaj pytania, które dziś zadaje się asystentowi, a nie wyszukiwarce. Asystent odpowiada zdaniami, często wymienia dwie, trzy firmy, a klient dzwoni do jednej z nich, nie zobaczywszy ani razu listy wyników. Dla branży, w której klient zaczyna od niewiedzy, ten kanał znaczy więcej niż gdzie indziej."),
        p("O tym, czy firma geodezyjna znajdzie się wśród wymienionych, decydują trzy rzeczy. Pierwsza to tekst, który asystent jest w stanie przeczytać: strony geodezyjne chowają wszystko w PDF-ach, skanach i przykładowych operatach, a wyjaśnienie zamknięte w załączniku dla tych systemów nie istnieje. Druga to liczby warte zacytowania — termin w dniach roboczych, widełki cenowe, obszar działania podany powiatami — bo asystent woli źródło, które do czegoś się zobowiązuje. Trzecia to zgodność źródeł: ta sama nazwa firmy, te same uprawnienia, te same usługi i ten sam telefon na stronie, w wizytówce i w katalogach, bo sprzeczności to najszybsza droga do pominięcia."),
        p("To samo dzieje się wewnątrz Google, gdzie AI Overviews odpowiadają na pytanie o rodzaj mapy ponad linkami. Cytowana jest tam rzadko największa firma w województwie — zwykle ta, która wytłumaczyła dokument prostymi słowami na podstronie możliwej do przeczytania od początku do końca."),
        p(
          "Doprowadzenie istniejącego serwisu do tego stanu to ",
          link("przygotowanie strony pod wyszukiwanie AI", "/pl/oferty/przygotowanie-strony-do-wyszukiwania-ai"),
          ", a kiedy asystenci opisują firmę błędnie — powiat, w którym już nie pracujecie, usługa porzucona dwa lata temu — to ",
          link("naprawa błędnych informacji w AI", "/pl/oferty/poprawa-blednych-danych-w-ai"),
          ".",
        ),

        h2("Termin i widełki cenowe na stronie: dwa pytania, od których zaczyna się każde zapytanie"),
        p("Każde zapytanie w tej branży zaczyna się tak samo: ile to kosztuje i na kiedy. Większość stron geodezyjnych nie odpowiada na żadne z nich, i to z sensownego powodu — jedno i drugie zależy od działki. Skutek jest taki, że klient dzwoni do czterech firm, a zlecenie bierze ta, która odpowiedziała pierwsza: zwykle ta, która podała widełki na stronie, a nie ta, która zażądała oględzin przed jakąkolwiek rozmową."),
        p("Widełki z warunkami działają odwrotnie, niż firmy się obawiają. Do niczego nie zobowiązują — filtrują. Podstrona mówiąca, że wznowienie granic działki budowlanej w tym powiecie mieści się zwykle w podanym przedziale, trwa podaną liczbę dni roboczych i drożeje przy złych materiałach albo zadrzewionym terenie, odcina telefony o zleceniach, których nie chcecie, i przyciąga te, które chcecie."),

        h3("Spory o granice: zapytania, które rodzi kłótnia z sąsiadem"),
        p("Sprawy graniczne trafiają do was w określonym stanie emocjonalnym i widać to w wyszukiwaniach: ludzie szukają, czy sąsiad może przesunąć płot, czym są znaki graniczne, kto płaci, gdy granica okaże się nie tam, gdzie stoi ogrodzenie. To nie są zapytania o cenę, a podstrona, która na nie odpowiada, zbiera czytelnika na długo przed zleceniem — czyli dokładnie wtedy, gdy firma geodezyjna zarabia zaufanie, bo alternatywnym źródłem jest wątek na forum pełen pewnych siebie nieznajomych."),
        p("Działa tu podstrona, która mówi wprost, gdzie pomiar kończy sprawę, a gdzie jej nie kończy, i że geodeta ustala przebieg granicy, a spór o nią rozstrzyga sąd. Napisanie tego nic nie kosztuje, a przynosi telefon, bo tej różnicy właściciel nie usłyszał od nikogo."),

        h3("Tyczenie i obsługa budowy: zlecenia powtarzalne od wykonawców, nie jednorazowe od właścicieli"),
        p("Każde inne opracowanie z tej listy kupuje się raz w życiu. Z tyczeniem jest inaczej: wykonawca, który zaufał ekipie, dzwoni do niej na każdej budowie, a wartość takiego kontaktu jest wielokrotnością pojedynczego zlecenia od właściciela działki. Podstrona o tyczeniu powinna więc być pisana do kierownika budowy, a nie do inwestora — o dopasowaniu do harmonogramu, o tym, jak szybko wracacie po zmianie projektu, kto płaci za ponowne tyczenie i co robicie na budowie, która ruszyła przed waszym przyjazdem."),

        h2("Wyszukiwanie lokalne i wizytówka Google firmy geodezyjnej"),
        p("Firma geodezyjna działa w terenie: ekipa jeździ, klient prawie nigdy nie przychodzi do biura. Wizytówka powinna więc podawać powiaty, a nie promień wokół pinezki, zawierać numer uprawnień i zbierać opinie od tych, którzy realnie polecają tę pracę — projektantów, kierowników budowy, biur nieruchomości i notariuszy — bo opinia w formie polecenia czyta się jako dowód dla kogoś, kto sam operatu nie oceni."),
        p("Te same dane z wizytówki zasilają asystentów opisanych wyżej. Kiedy obszar działania na stronie, powiaty w wizytówce i opis w katalogu nie zgadzają się ze sobą, firma po cichu wypada i z map, i z odpowiedzi AI."),

        h2("Szybkość strony i formularz z adresem działki w serwisie geodezyjnym"),
        p("Formularz na większości stron geodezyjnych pyta o imię, e-mail i wiadomość, co gwarantuje odpowiedź w stylu «proszę podać adres działki». Formularz, który oszczędza dzień, pyta o numer działki i obręb, o termin oraz o to, kto zażądał opracowania — projektant, urząd, bank — bo te trzy odpowiedzi rozstrzygają, czy zlecenie jest wasze i ile kosztuje."),
        p("Szybkość ma tu powód specyficzny dla branży: serwisy są ciężkie od skanów map i przykładowych operatów, a otwierają je często ludzie stojący w terenie z jedną kreską zasięgu. Strona ładująca się dziewięć sekund na telefonie traci zapytanie, które było już w rękach."),
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Audyt SEO strony firmy geodezyjnej",
      subtitle: "Prześlij adres strony, a w ciągu jednego dnia roboczego odpiszę, co ją blokuje i od czego bym zaczął.",
      contextLabel: "Firma albo adres strony",
      contextPlaceholder: "Link albo nazwa",
      buttonText: "Wyślij i odbierz audyt",
      note: "Możesz też napisać na WhatsAppie — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Jakich zleceń chcesz więcej?", options: ["Mapy do celów projektowych", "Tyczenia i obsługi budowy", "Inwentaryzacji powykonawczych", "Granic i podziałów"] },
        { _key: k("z"), question: "Skąd przychodzą zlecenia teraz?", options: ["Od projektantów i wykonawców", "Z polecenia", "Z katalogów i ogłoszeń", "Wyszukiwarka już trochę działa"] },
        { _key: k("z"), question: "Co jest dziś na stronie?", options: ["Jedna podstrona z usługami", "Podstrona na każdą usługę", "Głównie PDF-y i przykłady", "Nie wiem"] },
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie strony geodety: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje pozycjonowanie strony firmy geodezyjnej?", "Audyt 1000 zł, prace jednorazowe 1000–3000 zł w zależności od zakresu, stała praca 3500 zł miesięcznie. O kwocie decyduje liczba opracowań, pod które chcecie mieć podstrony, liczba powiatów, w których realnie składacie operaty, i to, czy obecna strona w ogóle pozwala dodawać podstrony i edytować adresy."],
          ["Czy klient naprawdę znajdzie mnie przez ChatGPT albo Perplexity?", "Tak, i w tej branży wcześniej niż w innych, bo klient zaczyna od pytania, jaki dokument jest mu potrzebny. Asystent odpowiada z czytelnego tekstu i wymienia firmy, których podstrony tłumaczą opracowanie i podają konkretne liczby. Serwis, którego wyjaśnienia siedzą w PDF-ach, jest dla niego niewidoczny — i to jest zwykle powód, dla którego firma nie pada w odpowiedzi."],
          ["Pracujemy dokładniej od firmy, która jest nade mną w wynikach. Dlaczego ona jest pierwsza?", "Bo dokładność jest dla wyszukiwarki niewidoczna. Czyta tekst, a konkurencja, która napisała dwa zrozumiałe akapity o tym, co zawiera mapa do celów projektowych, odpowiedziała na pytanie zostawione przez was bez odpowiedzi. Tę różnicę zasypuje się pisaniem, nie lepszym sprzętem."],
          ["Czy potrzebuję podstrony na każdy powiat?", "Nie, a zbudowanie ich kilkuset z szablonu wręcz szkodzi — to treść uboga i tak zostanie oceniona. Warto opisać powiaty, w których faktycznie składaliście operaty i możecie powiedzieć, ile trwa weryfikacja i ile kosztują materiały. Zwykle wychodzi od trzech do kilkunastu podstron."],
          ["Czy podawać ceny, skoro każda działka jest inna?", "Podawajcie widełki z warunkami, a nie jedną kwotę. Do niczego nie zobowiązują, a filtrują zapytania: klienci, których na to nie stać, przestają dzwonić, a ci, którzy mieli obdzwonić cztery firmy, zatrzymują się na tej, która odpowiedziała."],
          ["Co zrobić z zapytaniami spoza naszego profilu?", "Ułożyć podstrony tak, żeby przychodziły rzadziej. Większość niechcianych zapytań bierze się z jednej podstrony o usługach, która sugeruje, że robicie wszystko; kiedy każde opracowanie dostaje własną podstronę z opisem, dla kogo jest, niedopasowane telefony znikają same."],
          ["Po jakim czasie to widać w zleceniach?", "Pierwsze ruchy po około sześciu tygodniach, realny wzrost w horyzoncie trzech do sześciu miesięcy. Tyczenie i obsługa budowy potrafią ruszyć szybciej, bo wykonawca, który znalazł was raz, dzwoni potem bez szukania."],
          ["Czy gwarantujesz pozycję?", "Nie, i nikt nie może — o kolejności decyduje system, nad którym żadne z nas nie panuje. Mogę powiedzieć, co zostanie zmienione, w jakiej kolejności i co mierzymy po miesiącu oraz po trzech."],
          ["Kto pisze podstrony o opracowaniach?", "Ja piszę szkic, wy poprawiacie. To, co czyni taką podstronę wartą przeczytania — jak naprawdę pracuje wasz ośrodek dokumentacji, dlaczego jedno zlecenie się przeciąga, czego nie podpisujecie — istnieje tylko wewnątrz firmy i żadne zewnętrzne poszukiwania tego nie zastąpią."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów audyt SEO strony firmy geodezyjnej: co przysłać"),
        p("Prześlij adres strony, napisz, jakich opracowań chcesz więcej, a jakich wolisz nie brać, i wymień powiaty, w których realnie składacie operaty. W ciągu jednego dnia roboczego odpiszę, co blokuje serwis, ile jego treści siedzi w PDF-ach nieczytelnych ani dla wyszukiwarki, ani dla asystenta, i od czego bym zaczął — łącznie z tym, których podstron nie warto pisać, bo w waszym rejonie nikt ich nie szuka."),
      ],
    },
  ],
};
