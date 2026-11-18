// Landing page fixture: Pozycjonowanie strony geodety (PL),
// group «land-surveyor-seo». Przepisane 18.11.2026 — druga redakcja.
//
// Pierwsza redakcja odrzucona: tekst pisany długimi okresami, dla wyszukiwarki
// i AI zamiast dla właściciela firmy, a słowa kluczowe w nagłówkach stały z
// sensu, nie z pomiaru.
//
// Pomiar słownika usług: research/dataforseo/service-wording.md (18.11.2026).
// PL: seo 12 100, pozycjonowanie stron 5 400, pozycjonowanie strony 5 400,
// agencja seo 2 400, audyt seo 1 600, pozycjonowanie lokalne 720,
// specjalista seo 390. Strona AI: ai seo 720, pozycjonowanie w ai 260,
// pozycjonowanie w chatgpt 170, widoczność w ai 110, llm seo 110.
// GEO i AEO po polsku prawie nie istnieją (310 i 50 łącznie, w tym angielska
// forma 260), więc w H2 ich nie ma — idą do tekstu i do H3 z rozwinięciem.
//
// Nisza zmierzona osobno: research/dataforseo/scanning-niches.md
// (geodeta 14 800, usługi geodezyjne 1 900, inwentaryzacja powykonawcza 320).
import { p, h2, h3, li, link, k } from "./pt";

export const landSurveyorSeoPl = {
  lang: "pl",
  group: "land-surveyor-seo",
  slug: "pozycjonowanie-strony-geodety",
  title: "Pozycjonowanie strony geodety i SEO firmy geodezyjnej",
  heading:
    "SEO i pozycjonowanie strony geodety: jak trafiać do klienta, któremu urząd, bank albo kierownik budowy kazał dostarczyć dokument",
  excerpt:
    "Zajmuję się SEO i pozycjonowaniem stron firm geodezyjnych. Robię osobną podstronę na każde opracowanie, podaję termin i widełki cenowe tam, gdzie klient je zobaczy, ustawiam pozycjonowanie lokalne i doprowadzam do tego, żeby wymieniał was ChatGPT, Perplexity i Gemini. Pomiaru nikt nie chce. Pomiar jest wymagany. Zlecenie bierze ta firma, która wytłumaczyła potrzebny dokument. Audyt 1000 zł, stała praca 3500 zł miesięcznie.",
  seo: {
    metaTitle: "Pozycjonowanie strony geodety — audyt 1000 zł",
    metaDescription:
      "SEO firmy geodezyjnej: podstrony pod mapę do celów projektowych, tyczenie i inwentaryzację, terminy i ceny, pozycjonowanie lokalne i AI SEO w ChatGPT.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Podstrona na każde opracowanie", "AI SEO: ChatGPT i Perplexity", "Audyt 1000 zł"],
  heroPhonePoints: ["Mapa do celów projektowych", "Tyczenie przed startem budowy", "Inwentaryzacja powykonawcza", "Wymienia was ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO strony firmy geodezyjnej: frazy, podstrony opracowań, wizytówka Google, widoczność w AI", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO: podstrony opracowań i powiatów, dane strukturalne, formularz, przygotowanie pod odpowiedzi AI", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie strony firmy geodezyjnej", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Zakres prac",
      title: "Pozycjonowanie strony geodety: co wchodzi w pracę",
      items: [
        { _key: k("o"), iconName: "file-text", title: "Podstrona na każde opracowanie", text: "Mapa do celów projektowych, tyczenie, inwentaryzacja" },
        { _key: k("o"), iconName: "map-pin", title: "Podstrony pod powiaty i ośrodki", text: "Terminy weryfikacji i opłaty tam, gdzie składacie" },
        { _key: k("o"), iconName: "sparkles", title: "AI SEO: ChatGPT, Perplexity, Gemini", text: "Tam pada pytanie, jaka mapa jest potrzebna" },
        { _key: k("o"), iconName: "gauge", title: "Termin i cena na widocznym miejscu", text: "Dwa pytania, od których zaczyna się rozmowa" },
        { _key: k("o"), iconName: "search", title: "Pozycjonowanie lokalne i wizytówka", text: "Powiaty, w których naprawdę pracujecie" },
        { _key: k("o"), iconName: "target", title: "Osobna podstrona dla wykonawców", text: "Tyczenie daje zlecenia powtarzalne" },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: usługi techniczne, których klient sam nie oceni",
      subtitle:
        "Wspólne z geodezją: klient nie oceni efektu, zapytanie jest przypisane do adresu, a wzrost dała struktura i treść, nie kupione linki. Firma skanowania laserowego 3D i BIM — ruch z wyszukiwarki wzrósł dwudziestodziewięciokrotnie. Dostawca internetu sprawdzany adres po adresie. Platforma nieruchomości z tysiącami obiektów. Warsztat i serwis samochodowy z tym samym schematem zapytań.",
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
        h2("SEO dla firmy geodezyjnej zaczyna się od dokumentu, który kazano klientowi dostarczyć"),
        p("Pomiaru nikt nie chce. Pomiar jest wymagany. Przez projektanta przed wnioskiem. Przez urząd przed odbiorem. Przez kierownika budowy przed wytyczeniem. Przez sąsiada, z którym trwa spór o płot."),
        p("Dlatego do wyszukiwarki nie trafia słowo „geodeta”. Trafia nazwa dokumentu z pisma, które klient dostał. „Mapa do celów projektowych”. „Tyczenie budynku”. „Inwentaryzacja powykonawcza”. „Wznowienie granic”."),
        p("Strona z jedną podstroną „Usługi” na te zapytania nie odpowiada. Wymienia wszystkie opracowania i nie tłumaczy żadnego."),
        p("Pierwsze, co robię, to rozdzielam opracowania na osobne podstrony. Na każdej: czym jest ten dokument, kto go wymaga, ile kosztuje, ile trwa, co klient dostaje do ręki. To daje więcej niż akapity o dokładności i doświadczeniu."),
        li("jedna podstrona to jedno opracowanie, nazwane tak, jak nazywa je projektant;"),
        li("od razu napisane, kto go zwykle wymaga: urząd, bank, wykonawca, sąd;"),
        li("pokazany gotowy dokument, a nie zdjęcie statywu;"),
        li("termin w dniach roboczych i widełki cenowe z warunkami;"),
        li("opracowania, które bierzecie niechętnie, nie trafiają na stronę — inaczej właśnie one będą przychodzić."),

        h2("Podstrony SEO pod rodzaje opracowań: mapa do celów projektowych, tyczenie, inwentaryzacja"),
        p("Każde opracowanie ma innego klienta i inny termin."),
        p("Mapę do celów projektowych zamawia projektant. Interesuje go, czy w opracowaniu znajdą się przyłącza. Wznowienie granic zamawia właściciel w trakcie sporu. Interesuje go, co wolno rozstrzygnąć geodecie, a co tylko sądowi. Inwentaryzacja powykonawcza jest potrzebna do odbioru. Tam liczy się jedno pytanie: jak szybko."),
        p("Jedna podstrona dla całej trójki nie zadziała. Każdy potrzebuje własnego tekstu."),
        p("Pomiar popytu to potwierdza: „geodeta” to 14 800 wyszukiwań miesięcznie, „usługi geodezyjne” 1 900, „inwentaryzacja powykonawcza” 320. Ludzie szukają zawodu i nazw opracowań, nie haseł marketingowych."),

        h2("Podstrony pod powiaty i ośrodki dokumentacji: terminy weryfikacji i opłaty na miejscu"),
        p("W każdym powiecie jest inaczej: co przyjmuje ośrodek, ile trwa weryfikacja operatu, ile kosztują materiały po zgłoszeniu pracy geodezyjnej. Klient widzi rozrzut cen i nie rozumie, skąd się bierze."),
        p("Podstrona, która to tłumaczy, odpowiada na pytanie, na które nie odpowiada nikt."),
        p("Trzeba się przy tym powstrzymać. Kilkaset podstron z szablonu i podmienioną nazwą powiatu to treść uboga i tak zostanie oceniona. Piszemy powiaty, w których naprawdę składaliście operaty: od trzech do kilkunastu podstron."),

        h3("Rodzaj opracowania, zdarzenie, które je wymusiło, i podstrona, która łapie wyszukiwanie"),
      ],
    },
    {
      _type: "tableBlock",
      _key: k("b"),
      columns: ["Opracowanie", "Co wymusiło zlecenie", "Podstrona, która łapie wyszukiwanie"],
      rows: [
        { _type: "tableRow", _key: k("r"), cells: ["Mapa do celów projektowych", "Projekt i wniosek o pozwolenie na budowę", "Zakres opracowania, przyłącza, realny termin w waszym ośrodku"] },
        { _type: "tableRow", _key: k("r"), cells: ["Tyczenie i obsługa budowy", "Kierownik budowy nie może ruszyć", "Podstrona dla wykonawcy: terminy, ponowne tyczenie, kto płaci"] },
        { _type: "tableRow", _key: k("r"), cells: ["Inwentaryzacja powykonawcza", "Odbiór budynku, przyłączenie mediów", "Co wchodzi w operat, ile trwa weryfikacja, co dostaje inwestor"] },
        { _type: "tableRow", _key: k("r"), cells: ["Wznowienie granic i rozgraniczenie", "Płot, zajęty teren, spór z sąsiadem", "Co rozstrzyga geodeta, co sąd, czym są znaki graniczne"] },
        { _type: "tableRow", _key: k("r"), cells: ["Podział nieruchomości", "Sprzedaż części działki, podział majątku", "Przebieg procedury, udział gminy, czas całej sprawy"] },
        { _type: "tableRow", _key: k("r"), cells: ["Mapa do celów prawnych", "Sprawa w sądzie, u notariusza, księga wieczysta", "Do czego służy, czym różni się od zwykłej mapy, co zawiera"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("AI SEO dla firmy geodezyjnej: ChatGPT, Perplexity, Gemini i AI Overviews"),
        p("Inwestorowi kazano zrobić mapę. Jaką — nie wie. To pytanie coraz częściej trafia nie do wyszukiwarki, tylko do asystenta."),
        p("Asystent odpowiada zdaniami i wymienia dwie, trzy firmy. Klient dzwoni do jednej z nich i nigdy nie widzi listy wyników. W branży, w której klient zaczyna od niewiedzy, ten kanał waży więcej niż gdzie indziej."),
        p("O tym, czy znajdziecie się w odpowiedzi, decydują trzy rzeczy."),
        li("Tekst, który maszyna może przeczytać. Strony geodezyjne chowają wszystko w PDF-ach i skanach. Dla asystenta tej treści nie ma."),
        li("Liczby do zacytowania: termin w dniach roboczych, widełki cenowe, powiaty wypisane z nazwy. Źródła bez konkretów się nie cytuje."),
        li("Zgodność danych. Nazwa, telefon, zakres prac i powiaty muszą się zgadzać na stronie, w wizytówce i w katalogach. Rozbieżność oznacza pominięcie."),
        p("W samym Google działa to tak samo. Blok AI Overviews odpowiada na pytanie o rodzaj mapy nad linkami. Cytowana jest nie największa firma w województwie, tylko ta, która wytłumaczyła dokument prostymi słowami."),

        h3("GEO, AEO i LLM SEO: co się za tym kryje i co z tego robi się ręcznie"),
        p("Generative engine optimization (GEO) i answer engine optimization (AEO) to praca nad tym, żeby wasza nazwa padła w wygenerowanej odpowiedzi, a nie tylko w liście linków. LLM SEO to to samo w odniesieniu do modeli językowych."),
        p("W praktyce to nie magia, tylko pięć, sześć konkretnych poprawek: wyjąć tekst z PDF-ów, dodać dane strukturalne firmy i usług, wstawić liczby do treści, uzgodnić dane na wszystkich platformach, napisać podstrony pod pytania zadawane na głos."),
        p(
          "Doprowadzenie serwisu do tego stanu to ",
          link("przygotowanie strony do wyszukiwania AI", "/pl/oferty/przygotowanie-strony-do-wyszukiwania-ai"),
          ". Sprawdzenie, co asystenci mówią o was teraz, to ",
          link("audyt widoczności w AI", "/pl/oferty/audyt-widocznosci-w-ai"),
          ".",
        ),

        h2("Termin i widełki cenowe na stronie: dwa pytania, od których zaczyna się każde zapytanie"),
        p("Każde zapytanie zaczyna się tak samo: ile to kosztuje i na kiedy. Większość stron nie odpowiada na żadne z nich."),
        p("Powód jest sensowny: wszystko zależy od działki. Skutek też jest przewidywalny. Klient dzwoni do czterech firm, a zlecenie bierze ta, która odpowiedziała pierwsza."),
        p("Widełki z warunkami do niczego was nie zobowiązują. One filtrują. Napiszcie: wznowienie granic działki budowlanej w tym powiecie mieści się w takim przedziale, trwa tyle dni roboczych, drożeje przy złych materiałach i zadrzewionym terenie. Telefony „a ile najtaniej” się skończą."),

        h3("Spory o granice: zapytania, które rodzi kłótnia z sąsiadem"),
        p("Ci klienci przychodzą na emocjach. Szukają: czy sąsiad może przesunąć płot, czym są znaki graniczne, kto płaci, gdy granica jest gdzie indziej niż ogrodzenie."),
        p("To nie są zapytania o cenę. Podstrona, która na nie odpowiada, zabiera czytelnika na długo przed zleceniem. Alternatywą dla niego jest wątek na forum."),
        p("Napiszcie wprost, gdzie pomiar kończy sprawę, a gdzie nie. Geodeta ustala przebieg granicy, spór rozstrzyga sąd. To zdanie nic nie kosztuje i przynosi telefon."),

        h3("Tyczenie i obsługa budowy: zlecenia powtarzalne od wykonawców"),
        p("Pozostałe opracowania kupuje się raz w życiu. Tyczenie nie. Kierownik budowy, który wam zaufał, dzwoni przy każdej inwestycji."),
        p("Dlatego ta podstrona jest pisana do wykonawcy, nie do inwestora. Harmonogram. Jak szybko wracacie po zmianie projektu. Kto płaci za ponowne tyczenie. Co robicie na budowie, która ruszyła przed waszym przyjazdem."),

        h2("Pozycjonowanie lokalne i wizytówka Google firmy geodezyjnej"),
        p("Pracujecie w terenie. Klient do biura nie przychodzi."),
        p("Wizytówka powinna więc podawać powiaty, a nie promień wokół pinezki. Do tego numer uprawnień. Opinie zbieracie u tych, którzy was polecają: projektantów, kierowników budowy, biur nieruchomości, notariuszy. Taka opinia działa jak dowód dla kogoś, kto operatu sam nie oceni."),
        p("Te same dane czytają asystenci. Jeśli powiaty na stronie i w wizytówce się rozjeżdżają, wypadacie i z map, i z odpowiedzi AI."),

        h2("Szybkość strony i formularz z numerem działki"),
        p("Zwykły formularz pyta o imię, e-mail i wiadomość. Odpowiedź na niego jest zawsze ta sama: „proszę podać adres działki”."),
        p("Formularz, który oszczędza dzień, pyta o numer działki i obręb, o termin i o to, kto zażądał opracowania. Te trzy odpowiedzi rozstrzygają, czy to wasze zlecenie."),
        p("O szybkości. Wasze strony są ciężkie: skany map, przykładowe operaty. Otwierają je ludzie stojący w terenie z jedną kreską zasięgu. Dziewięć sekund ładowania to zapytanie, którego nie będzie."),
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Audyt SEO strony firmy geodezyjnej",
      subtitle: "Prześlij adres strony. Odpiszę w ciągu jednego dnia roboczego: co ją blokuje i od czego zacząć.",
      contextLabel: "Firma albo adres strony",
      contextPlaceholder: "Link albo nazwa",
      buttonText: "Wyślij i odbierz audyt",
      note: "Możesz też napisać na WhatsAppie — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Jakich zleceń chcesz więcej?", options: ["Map do celów projektowych", "Tyczenia i obsługi budowy", "Inwentaryzacji powykonawczych", "Granic i podziałów"] },
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
          ["Ile kosztuje pozycjonowanie strony firmy geodezyjnej?", "Audyt 1000 zł. Prace jednorazowe 1000–3000 zł w zależności od zakresu. Stała praca 3500 zł miesięcznie. O kwocie decyduje liczba opracowań na osobnych podstronach, liczba powiatów i to, czy obecna strona pozwala dodawać podstrony."],
          ["Czy klient naprawdę znajdzie mnie przez ChatGPT albo Perplexity?", "Tak, i w geodezji wcześniej niż w innych branżach. Klient zaczyna od pytania, jaki dokument jest mu potrzebny. Asystent odpowiada z tekstu, który potrafi przeczytać, i wymienia firmy z konkretnymi liczbami na stronie. Jeśli wasze wyjaśnienia siedzą w PDF-ach, nie zostaniecie wymienieni."],
          ["Co to jest GEO i AEO po ludzku?", "Generative engine optimization i answer engine optimization to praca nad tym, żeby wasza nazwa padała w gotowej odpowiedzi asystenta, a nie tylko na liście linków. Robi się to zwykłymi rzeczami: tekst zamiast PDF, dane strukturalne, liczby w treści, zgodność danych na wszystkich platformach."],
          ["Pracujemy dokładniej od firmy, która jest nade mną. Dlaczego ona jest pierwsza?", "Dokładności wyszukiwarka nie widzi. Czyta tekst. Konkurencja napisała dwa zrozumiałe akapity o mapie do celów projektowych i odpowiedziała na pytanie, które wy zostawiliście bez odpowiedzi. Tę różnicę zasypuje się pisaniem."],
          ["Czy potrzebuję podstrony na każdy powiat?", "Nie. Kilkaset podstron z szablonu szkodzi, bo to treść uboga. Piszemy powiaty, w których składaliście operaty i możecie podać czas weryfikacji oraz koszt materiałów. Zwykle od trzech do kilkunastu."],
          ["Czy podawać ceny, skoro każda działka jest inna?", "Podawajcie widełki z warunkami, nie jedną kwotę. Do niczego nie zobowiązują, a odcinają tych, których nie stać, i zatrzymują tych, którzy mieli obdzwonić cztery firmy."],
          ["Co zrobić z zapytaniami spoza profilu?", "Przebudować podstrony. Takie zapytania biorą się z jednej podstrony o usługach, która sugeruje, że robicie wszystko. Gdy każde opracowanie ma własną podstronę, niedopasowane telefony znikają same."],
          ["Po jakim czasie widać to w zleceniach?", "Pierwsze ruchy po około sześciu tygodniach. Realny wzrost w trzy do sześciu miesięcy. Tyczenie idzie szybciej: wykonawca, który znalazł was raz, dzwoni potem bez szukania."],
          ["Gwarantujesz pozycję?", "Nie. O kolejności decyduje system, nad którym nie panuje ani jedno, ani drugie z nas. Mówię, co zostanie zrobione, w jakiej kolejności i co mierzymy po miesiącu oraz po trzech."],
          ["Kto pisze podstrony o opracowaniach?", "Szkic ja, poprawki wy. Najcenniejsze na takiej podstronie jest to, jak naprawdę działa wasz ośrodek dokumentacji, dlaczego zlecenie się przeciąga i czego nie podpisujecie. Tego z zewnątrz się nie wymyśli."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów audyt SEO strony firmy geodezyjnej: co przysłać"),
        p("Prześlij adres strony. Napisz, jakich opracowań chcesz więcej, a jakich wolisz nie brać. Wymień powiaty, w których składacie operaty."),
        p("W ciągu jednego dnia roboczego odpiszę, co blokuje serwis, ile treści siedzi w PDF-ach nieczytelnych dla wyszukiwarki i dla asystenta, i od czego bym zaczął. Powiem też, których podstron nie warto pisać, bo w waszym rejonie nikt ich nie szuka."),
      ],
    },
  ],
};
