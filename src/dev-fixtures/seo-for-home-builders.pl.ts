// Landing page fixture: Pozycjonowanie firmy budującej domy (PL), group
// «seo-for-home-builders». New page. Market version for Polish firms building
// single-family houses — generalni wykonawcy domów pod klucz, firmy stanu
// surowego i deweloperskiego, domy szkieletowe i modułowe, mali deweloperzy
// osiedli domów — not a translation of seo-for-home-builders.en.
// Semantic core: ref/home-services.md has no measured PL phrases for builders;
// H1 and headings carry the slug phrase «pozycjonowanie firmy budującej domy»
// plus market phrases «budowa domów pod klucz», «stan surowy (otwarty /
// zamknięty)», «stan deweloperski», «ile kosztuje budowa domu», «dom
// szkieletowy / modułowy», «budowa domu z projektu gotowego». PL PAA used:
// «Co jest lepsze: pozycjonowanie czy Google Ads?», «Ile kosztuje
// pozycjonowanie firmy?» (FAQ).
// Intent: ref/intent-check-home-services.md — «strona dla firmy budującej
// domy» vs «strona dla firmy budowlanej» 0 of 10 shared URLs → home builders
// are separate from /pl/pozycjonowanie-strony-firmy-budowlanej (linked once
// as the page for general construction firms); EN SEO vs website 0 shared →
// sibling /pl/strona-internetowa-dla-firmy-budujacej-domy.
// Angle: separate pages per zakres (pod klucz / SSO / SSZ / deweloperski with
// what is and is not included), cennik za m² with dates, technologies,
// projekty gotowe from catalogs (Archon, Z500, Extradom — general, no copying
// of catalog content), realizacje with miejscowość and etapy, osiedla małego
// dewelopera, wizytówka with obszar działania and opinions after odbiór, kredyt
// w transzach and winter contract season, RODO forms, Oferteo / Fixly /
// Facebook groups vs own site, AI answers.
// NOT on this page: site design, package tables, quote form layout, client
// photo reports (/pl/strona-internetowa-dla-firmy-budujacej-domy); remonty,
// wykończenia, general construction (/pl/pozycjonowanie-strony-firmy-budowlanej);
// Google Ads and Facebook Ads (not offered).
// Owner’s rules: every SEO page covers AI search (GEO, AEO); never say there
// are no clients from the visitor’s industry; no personal visits promised.
import { p, h2, li, link, k } from "./pt";

export const seoForHomeBuildersPl = {
  lang: "pl",
  group: "seo-for-home-builders",
  slug: "pozycjonowanie-firmy-budujacej-domy",
  title: "Pozycjonowanie firmy budującej domy",
  heading: "Pozycjonowanie firmy budującej domy",
  excerpt:
    "Zajmuję się pozycjonowaniem firm budujących domy: podstrony budowy domów pod klucz, w stanie surowym i deweloperskim, cennik za metr, realizacje opisane z miejscowością, wizytówka w Mapach Google i obecność w odpowiedziach asystentów AI. Efekty mierzę liczbą zapytań o wycenę i podpisanych umów.",
  seo: {
    metaTitle: "Pozycjonowanie budowy domów pod klucz | Bandziuk",
    metaDescription:
      "Pozycjonowanie firmy budującej domy: pod klucz, stan surowy i deweloperski, cennik za m², realizacje, Mapy Google i odpowiedzi AI. Audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Pod klucz, stan surowy, deweloperski", "Audyt od 1000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Budowa domu pod klucz Piaseczno", "Stan surowy zamknięty — cennik", "Realizacje 2026", "Poleca ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO firmy budującej domy: strona, wizytówka Google, frazy z regionu, odpowiedzi AI", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO dla firmy budującej domy: podstrony zakresów i technologii, cennik, realizacje, dane strukturalne", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie firmy budującej domy", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje pozycjonowanie firmy budującej domy",
      items: [
        { _key: k("o"), iconName: "search", title: "Frazy inwestorów z Twojego regionu", text: "Pod klucz, stan surowy, technologie, powiaty" },
        { _key: k("o"), iconName: "file-text", title: "Cennik etapów, który da się znaleźć", text: "Co obejmuje każdy stan i od czego zależy cena" },
        { _key: k("o"), iconName: "image", title: "Realizacje z miejscowością i metrażem", text: "Opis, technologia i zdjęcia z kolejnych etapów" },
        { _key: k("o"), iconName: "map-pin", title: "Mapy Google i opinie inwestorów", text: "Obszar działania, zdjęcia z budów, odpowiedzi" },
        { _key: k("o"), iconName: "sparkles", title: "Widoczność w odpowiedziach AI", text: "ChatGPT, Perplexity i podsumowania AI w Google" },
        { _key: k("o"), iconName: "trending-up", title: "Raport w zapytaniach i umowach", text: "Telefon, formularz, WhatsApp — z podstroną" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO firmy budującej domy", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe pozycjonowanie firmy budującej domy", value: "od 3500 zł / mies.", note: "podstrony, realizacje, opinie, AI", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: strony firm remontowych, nieruchomości i usług lokalnych z mojej praktyki",
      subtitle:
        "Dla warszawskiej firmy, która prowadzi remonty, wykończenia i projekty inwestycyjne, przygotowałem stronę z projektem premium. Strona ScanM2 (skanowanie laserowe 3D i modelowanie BIM) działała na platformie no-code i przez dwa lata nie przyniosła żadnego zapytania; po przebudowie na WordPressie ruch organiczny wzrósł 29 razy, a zapytania przychodzą co tydzień. Dla Cyprus VIP Estates zbudowałem od zera serwis nieruchomości z katalogiem, filtrami i mapą i co miesiąc prowadzę jego SEO. Warsztat samochodowy z Warszawy żyje z Map Google i podstron usług, a nowe podstrony psychoterapeuty z Mediolanu pojawiają się już w odpowiedziach ChatGPT. Firmie budującej domy potrzebne jest to samo: podstrona na każdy zakres prac i każde miejsce, mocna wizytówka i treści, które asystenci AI mogą przytoczyć.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "renovation-and-investment-website-with-premium-design",
        "architecture-website-rebuild-and-seo-scan",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "auto-repair-seo-and-ux-boost",
        "psychotherapist-website-milan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena pozycjonowania firmy budującej domy",
      subtitle: "W ciągu jednego dnia roboczego napiszę, od czego zacząłbym pracę — od podstron zakresów, cennika czy wizytówki — i ile to będzie kosztować.",
      contextLabel: "Nazwa firmy lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Co budujesz?", options: ["Domy pod klucz na działce klienta", "Stan surowy i deweloperski", "Domy szkieletowe lub modułowe", "Własne osiedla domów na sprzedaż"] },
        { _key: k("z"), question: "Skąd dziś masz klientów?", options: ["Z polecenia", "Z Oferteo lub Fixly", "Z Facebooka i OLX", "Z Google"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Pozycjonowanie firmy budującej domy to praca nad tym, żeby inwestor szukający wykonawcy domu jednorodzinnego — pod klucz, w stanie surowym albo deweloperskim — znalazł w Google Twoją stronę, a nie tylko Oferteo i grupę na Facebooku, i zadzwonił do Ciebie. Całą pracę — od audytu przez teksty i zmiany w kodzie po wizytówkę i raporty — wykonuję osobiście, dla generalnych wykonawców domów, firm budujących w technologii szkieletowej lub modułowej i małych deweloperów osiedli domów."),

        h2("Pozycjonowanie firmy budującej domy: co obejmuje usługa"),
        p("Dom buduje się raz w życiu, więc inwestor szuka długo: najpierw czyta, ile kosztuje budowa, potem porównuje technologie i stany wykończenia, na końcu wpisuje nazwy dwóch–trzech firm, które mu polecono. Dlatego pracuję nad wszystkim, co inwestor zobaczy po drodze:"),
        li("podstrony zakresów: budowa domu pod klucz, stan surowy otwarty i zamknięty, stan deweloperski, technologie"),
        li("cennik i artykuły odpowiadające na pytania o koszty, terminy i kredyt"),
        li("realizacje opisane z miejscowością, metrażem i zakresem prac"),
        li("wizytówka Google, opinie inwestorów oraz odpowiedzi ChatGPT i podsumowań AI w Google"),
        p(
          "Ta strona dotyczy firm budujących domy jednorodzinne. Dla firm remontowych, wykończeniowych i wykonawców innych robót budowlanych przygotowałem osobną stronę: ",
          link("pozycjonowanie strony firmy budowlanej", "/pl/pozycjonowanie-strony-firmy-budowlanej"),
          ".",
        ),

        h2("Frazy inwestorów szukających wykonawcy: budowa domów pod klucz, stan surowy i stan deweloperski"),
        p("Każdy zakres prac to inny klient i inne wyszukiwanie. Kto wpisuje „budowa domu pod klucz Piaseczno”, chce jednej umowy i jednej osoby odpowiedzialnej za całość. Kto szuka „stan surowy zamknięty cena”, wykończy dom sam albo z innymi ekipami i porównuje stawki. „Stan deweloperski” w każdej firmie znaczy co innego, więc klient szuka listy, co dokładnie w nim jest."),
        p("Dlatego każdy zakres dostaje osobną podstronę z pracami, które obejmuje, i tymi, których nie obejmuje: instalacje, tynki, wylewki, ocieplenie, elewacja, przyłącza. Podstrona, na której inwestor w minutę sprawdzi, czy Twój stan deweloperski ma ogrzewanie podłogowe i parapety, wygrywa z ogólnym hasłem o budowie domów od A do Z."),

        h2("Ile kosztuje budowa domu: cennik za m² jako podstrona, której szukają inwestorzy"),
        p("„Ile kosztuje budowa domu 100 m²”, „koszt stanu surowego zamkniętego za m²”, „dom do 70 m² na zgłoszenie koszt” — te pytania padają w Google na długo przed telefonem do wykonawcy. Firma, która podaje widełki, dostaje odwiedziny; firma, która pisze „cena do uzgodnienia”, oddaje je forom i kalkulatorom na portalach. Podstrona cennika zawiera:"),
        li("widełki za m² dla każdego stanu i technologii, z datą aktualizacji"),
        li("to, co podnosi i obniża cenę: kształt dachu, piwnica, warunki gruntowe, odległość budowy od bazy, standard materiałów"),
        li("przykład z realizacji: metraż, stan, czas budowy — bez danych inwestora"),
        li("link do formularza wyceny konkretnego projektu"),
        p("Ceny materiałów zmieniają się kilka razy w roku, więc cennik bez daty szybko traci wiarygodność — także w oczach asystentów AI."),

        h2("Domy murowane, szkieletowe i modułowe: podstrony technologii budowy"),
        p("Część inwestorów zaczyna od technologii: „dom szkieletowy pod klucz Mazowsze”, „dom modułowy cena”, „dom z silikatów czy z ceramiki”. Jeśli budujesz w jednej technologii, to ona jest Twoją główną frazą. Jeśli w kilku, każda dostaje podstronę z przekrojem ściany, czasem budowy, typowym zakresem i zdjęciami z Twoich budów. Porównanie technologii napisane przez kogoś, kto buduje w obu, to treść, do której linkują fora i którą cytują asystenci."),

        h2("Budowa domu z projektu gotowego: Archon, Z500, Extradom i adaptacja projektu"),
        p("Wielu inwestorów ma już wybrany projekt z katalogu i szuka kogoś, kto go wyceni i zbuduje. Wpisują nazwę projektu albo „budowa domu z projektu Archon cena”. Odpowiedzią jest podstrona o budowie z projektów gotowych: jak wygląda adaptacja i kto ją robi, czego potrzebujesz do wyceny, a obok lista projektów, które już budowałeś, z nazwami i zdjęciami z Twoich budów. Opisy i wizualizacje z katalogu należą do biura projektowego — kopiowanie ich narusza prawa autorskie i nic nie daje w Google."),

        h2("Realizacje firmy budującej domy: opisy z miejscowością, metrażem i etapami"),
        p("Sto zdjęć bez słowa komentarza to dla Google pusta strona. Dobrze opisana realizacja ma tytuł w rodzaju „Dom parterowy 120 m² w Łomiankach, stan deweloperski”, kilka zdań o projekcie, technologii i czasie budowy, zdjęcia z kolejnych etapów — fundamenty, mury, dach, instalacje — i link do podstrony zakresu. Inwestor widzi, że budujesz blisko niego, a Google i asystenci AI mają co przeczytać."),

        h2("Osiedla domów jednorodzinnych: pozycjonowanie inwestycji małego dewelopera"),
        p("Mały deweloper, który stawia kilka–kilkanaście domów albo bliźniaków, sprzedaje gotowy produkt, a nie usługę. Kupujący szukają „domy na sprzedaż [gmina]”, „bliźniak w stanie deweloperskim pod Krakowem”, „nowe domy z ogródkiem [miejscowość]”. Każda inwestycja potrzebuje własnej podstrony: lokalizacja i dojazd, metraże działek i domów, standard, status sprzedaży, termin oddania. Ogłoszenia na Otodom i Morizonie przyprowadzają kupujących, ale to podstrona inwestycji zbiera wyszukiwania nazwy osiedla."),

        h2("Pozycjonowanie lokalne firmy budującej domy: Mapy Google, powiaty i opinie inwestorów"),
        p("Firma budująca domy pracuje zwykle w promieniu kilkudziesięciu kilometrów od bazy, a klienci nie przychodzą do biura. Wizytówkę ustawia się więc jako firmę z obszarem działania obejmującym powiaty i gminy, w których naprawdę budujesz. Co się liczy:"),
        li("główna kategoria związana z budową domów i usługi zgodne z podstronami"),
        li("zdjęcia z budów dodawane na bieżąco, z miejscowością w opisie"),
        li("prośba o opinię po odbiorze domu i drugi raz po roku, gdy inwestor już w nim mieszka"),
        li("odpowiedź na każdą opinię, także na tę o opóźnieniach"),
        p(
          "Więcej o pracy nad Mapami Google piszę na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Kredyt na budowę domu, sezon i liczenie zapytań: decyzja inwestora trwa miesiącami"),
        p("Umowy na budowę często podpisuje się zimą, żeby ruszyć wiosną, a wcześniej inwestor czeka na pozwolenie i decyzję banku. Kredyt wypłacany w transzach po etapach to temat, którego szuka wielu inwestorów — artykuł, który pokazuje, jak Twój harmonogram pasuje do transz i jakie dokumenty bank zwykle chce od wykonawcy, przyciąga ich na długo przed telefonem."),
        p("Skoro decyzja trwa miesiącami, raport nie może liczyć tylko kliknięć z bieżącego miesiąca. Ustawiam w GA4 zliczanie telefonów, formularzy wyceny i wiadomości WhatsApp z podstroną, z której przyszły, a Ty zaznaczasz, które zapytania skończyły się umową. Każdy formularz ma klauzulę informacyjną RODO i link do polityki prywatności."),

        h2("Pozycjonowanie firmy budującej domy w ChatGPT i Google AI Overviews (GEO, AEO)"),
        p("Coraz częściej inwestor zamiast wyszukiwarki pyta ChatGPT, Perplexity albo podsumowania AI w Google: „jaka firma zbuduje dom pod klucz pod Wrocławiem”, „ile kosztuje stan surowy zamknięty w 2026 roku”, „dom szkieletowy czy murowany”. W odpowiedzi dostaje kilka nazw firm z krótkim uzasadnieniem. Działania, które zwiększają szansę, że będzie wśród nich Twoja, to GEO (generative engine optimization) i AEO (answer engine optimization). W przypadku firmy budującej domy oznaczają:"),
        li("region, technologie, zakresy i lata działalności zapisane prostymi zdaniami"),
        li("cennik i odpowiedzi na pytania o koszty, z datą aktualizacji"),
        li("realizacje z opisem, które można przytoczyć jako przykład"),
        li("te same dane firmy w Google, na Oferteo, w katalogach i na stronie"),
        p(
          "Zanim zacznę i po kilku miesiącach pracy zadaję asystentom pytania, jakie zadają Twoi klienci, i sprawdzam, które firmy wymieniają. Szczegóły na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Zlecenia z Oferteo, Fixly i grup na Facebooku czy własna strona firmy budującej domy w Google"),
        p(
          "Zapytania z Oferteo i Fixly przychodzą szybko, ale to samo zlecenie dostaje kilka firm, a klient porównuje głównie cenę. Grupy budowlane na Facebooku i ogłoszenia w OLX dają kontakty, ale nie budują pozycji. Własna strona w Google potrzebuje kilku miesięcy, za to przyprowadza inwestorów, którzy przeczytali o Twoich realizacjach i zakresach, zanim zadzwonili. Jak wygląda długofalowa praca nad SEO, opisuję na stronie ",
          link("strategia i optymalizacja SEO", "/pl/oferty/strategia-i-optymalizacja-seo"),
          ", a o projektowaniu i budowie samej strony — na stronie ",
          link("strona internetowa dla firmy budującej domy", "/pl/strona-internetowa-dla-firmy-budujacej-domy"),
          ".",
        ),

        h2("Ile kosztuje pozycjonowanie firmy budującej domy"),
        li("Audyt SEO — strona, wizytówka, frazy z Twojego regionu i odpowiedzi AI: od 1000 zł, jednorazowo, z listą poprawek według wpływu."),
        li("Prace jednorazowe — podstrony zakresów i technologii, cennik, opisy realizacji, dane strukturalne i zliczanie zapytań: od 1000 do 3000 zł."),
        li("Pozycjonowanie w abonamencie — kolejne podstrony i artykuły, opisy realizacji, prośby o opinie, widoczność w AI i miesięczny raport: od 3500 zł miesięcznie; gdy budujesz w okolicach Warszawy, Krakowa, Trójmiasta czy Wrocławia, gdzie konkurencja jest silna, od 5500 zł."),
        p(
          "Wszystkie stawki znajdziesz w ",
          link("cenniku", "/pl/cennik"),
          ", a zakres audytu opisuję na stronie ",
          link("audyt SEO strony internetowej", "/pl/oferty/audyt-seo-strony-internetowej"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie firmy budującej domy: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje pozycjonowanie firmy budującej domy?", "Audyt kosztuje od 1000 zł jednorazowo, pojedyncze prace od 1000 do 3000 zł, a pozycjonowanie w abonamencie od 3500 zł miesięcznie — wokół dużych miast, gdzie walczy więcej firm, od 5500 zł. Gdy opiszesz firmę i region, podam stałą kwotę."],
          ["Ile trwa pozycjonowanie firmy budującej domy?", "Wizytówka i poprawki techniczne dają efekt w kilka tygodni. Podstrony zakresów i cennik zwykle potrzebują dwóch–czterech miesięcy, wokół dużych miast dłużej. Najlepiej zacząć latem lub jesienią, żeby strona była wysoko, gdy inwestorzy zimą wybierają wykonawcę."],
          ["Czy podawać ceny budowy domu na stronie?", "Tak, jako widełki za m² dla każdego stanu, z datą i listą rzeczy, od których zależy cena. Inwestor i tak ich szuka, a strona bez cen oddaje go forom i kalkulatorom. Dokładną cenę podajesz po wycenie projektu."],
          ["Czy pozycjonowanie ma sens, skoro mam zlecenia z Oferteo?", "Tak, jako drugie źródło. Zapytanie z platformy dostaje kilka firm naraz, a klient z Google przychodzi do Ciebie po przeczytaniu o Twoich realizacjach. Z czasem mniej zależysz od płatnych zapytań."],
          ["Co jest lepsze: pozycjonowanie czy Google Ads?", "Kampania w Google Ads daje telefony szybko, ale każde kliknięcie kosztuje, a po wyłączeniu budżetu ruch znika. Efekty pozycjonowania przychodzą po kilku miesiącach i zostają: podstrony zakresów i cennik pracują latami. Zajmuję się wyszukiwarką i odpowiedziami AI, które pracują także wtedy, gdy kampania jest wyłączona."],
          ["Czy ChatGPT poleca firmy budujące domy?", "Tak — jeśli użytkownik poprosi o polecenie wykonawcy, asystent poda kilka nazw. Wybiera te, o których może przeczytać konkretne informacje: region, technologie, aktualny cennik, opisane realizacje, opinie. Dbam o to w ramach pozycjonowania i porównuję odpowiedzi na początku i po kilku miesiącach."],
          ["Czy pozycjonujesz firmy budujące domy w innych regionach Polski?", "Tak — region nie ma znaczenia, bo pracuję zdalnie, na danych wyszukiwań dla Twoich powiatów i gmin. Czy budujesz pod Krakowem, Gdańskiem, Poznaniem czy Katowicami, zasady są te same, a rozmawiamy przez telefon lub wideo."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie firmy budującej domy: co mi wysłać"),
        p(
          "Wyślij link do strony i wizytówki w Mapach Google, powiaty i gminy, w których budujesz, zakresy — pod klucz, stan surowy, deweloperski — i technologię, kilka ostatnich realizacji i napisz, skąd teraz biorą się klienci. W odpowiedzi dostaniesz listę pierwszych poprawek i stałą cenę. Skorzystaj z ",
          link("formularza powyżej", "#quote"),
          " albo napisz na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
