// Landing page fixture: Pozycjonowanie firmy montażu podłóg (PL), group
// «seo-for-flooring-companies». New page. Market version for Polish flooring
// firms — salony z montażem, ekipy montażowe, cykliniarze — not a translation
// of seo-for-flooring-companies.en.
// Semantic core: ref/home-services.md has no measured PL phrases; H1 and
// headings carry the slug phrase «pozycjonowanie firmy montażu podłóg» plus
// the market vocabulary from BRIEF.md: montaż paneli (laminowanych,
// winylowych), deska warstwowa i lita, parkiet, jodełka, cyklinowanie,
// renowacja parkietu i schodów, cena za m². PL PAA from ref/home-services.md
// (Ile kosztuje pozycjonowanie firmy? Co jest lepsze: pozycjonowanie czy
// Google Ads?) — the cost one as H2 + FAQ.
// Intent: EN check in ref/intent-check-home-services.md — «seo for flooring
// companies» vs «seo for contractors» 0 shared URLs → flooring is its own page,
// separate from the construction SEO page
// (/pl/pozycjonowanie-strony-firmy-budowlanej — linked once as the neighbour
// for firms doing whole renovations).
// Polish context: mieszkania w stanie deweloperskim, wylewka, VAT 8% / 23%
// (general), Oferteo, Fixly, OLX and DIY-store installation services as
// competitors, RODO on forms.
// NOT on this page: firmy budowlane i wykończeniowe
// (/pl/pozycjonowanie-strony-firmy-budowlanej); Mapy Google in depth
// (/pl/oferty/pozycjonowanie-lokalne); budowa strony (only a link to
// /pl/oferty/przebudowa-strony-internetowej); Google Ads (compared in FAQ only).
// No floor prices — the client publishes his own.
// Owner’s rules: every SEO page covers AI search (GEO, AEO); never say there
// are no clients from the visitor’s industry.
import { p, h2, li, link, k } from "./pt";

export const seoForFlooringCompaniesPl = {
  lang: "pl",
  group: "seo-for-flooring-companies",
  slug: "pozycjonowanie-firmy-montazu-podlog",
  title: "Pozycjonowanie firmy montażu podłóg",
  heading: "Pozycjonowanie firmy montażu podłóg",
  excerpt:
    "Zajmuję się pozycjonowaniem firm montażu podłóg i cyklinowania: podstrony paneli, deski, parkietu i renowacji, cennik za m², realizacje z nazwą materiału i wzoru, wizytówka Google i odpowiedzi AI — tak, żeby właściciel mieszkania w stanie deweloperskim dzwonił do Ciebie, zamiast rozsyłać zapytanie na Oferteo.",
  seo: {
    metaTitle: "SEO dla firmy podłogowej: montaż i cyklinowanie | Bandziuk",
    metaDescription:
      "Pozycjonowanie firmy montażu podłóg: podstrony paneli, deski, parkietu i cyklinowania, cennik za m², realizacje, wizytówka Google i AI. Audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Montaż, cyklinowanie, renowacja", "Audyt od 1000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Cyklinowanie parkietu Wola", "Jodełka z deski dębowej", "Cena za m²", "Zadzwoń"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO firmy montażu podłóg: strona, wizytówka Google, konkurencja z okolicy", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO dla firmy podłogowej: podstrony materiałów i cyklinowania, cennik, realizacje, dane strukturalne", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie firmy montażu podłóg", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje pozycjonowanie firmy montażu podłóg",
      items: [
        { _key: k("o"), iconName: "search", title: "Frazy według materiału, usługi i miasta", text: "Panele, deska, parkiet, winyl, cyklinowanie" },
        { _key: k("o"), iconName: "layers", title: "Podstrona dla każdej podłogi", text: "Z Twoimi realizacjami, nie z katalogu producenta" },
        { _key: k("o"), iconName: "file-text", title: "Cennik za m² z wyjaśnieniem", text: "Co jest w cenie, a co dolicza się osobno" },
        { _key: k("o"), iconName: "image", title: "Realizacje z nazwą materiału i wzoru", text: "Jodełka, deska szeroka, schody, dzielnica" },
        { _key: k("o"), iconName: "map-pin", title: "Wizytówka Google salonu lub ekipy", text: "Adres albo obszar działania, ustawione poprawnie" },
        { _key: k("o"), iconName: "sparkles", title: "Widoczność w ChatGPT i AI Overviews", text: "Porównania materiałów, które asystent zacytuje" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO strony firmy podłogowej", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe pozycjonowanie firmy montażu podłóg", value: "od 3500 zł / mies.", note: "podstrony, realizacje, wizytówka, AI", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: strony firm remontowych i usługowych, które budowałem i pozycjonowałem",
      subtitle:
        "Warszawska firma remontowo-inwestycyjna, która w ofercie ma wykończenia wnętrz; warszawski warsztat samochodowy, któremu klientów przynoszą telefony, Mapy Google i podstrony usług; Felgilab, warszawska pracownia renowacji felg z nową stroną na WordPressie, podstronami usług i cennikiem; ScanM2, firma skanowania laserowego 3D, która przez dwa lata nie miała zapytań, a po przebudowie strony dostaje je co tydzień; oraz serwis psychoterapeuty z Mediolanu, którego nowe podstrony pojawiają się już w odpowiedziach ChatGPT. Firma podłogowa potrzebuje tego samego: podstrony dla każdej usługi, cen czytelnych przed telefonem i zapytań, które da się policzyć.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "renovation-and-investment-website-with-premium-design",
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "architecture-website-rebuild-and-seo-scan",
        "psychotherapist-website-milan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena pozycjonowania firmy montażu podłóg",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: co zmieniłbym najpierw — podstrony materiałów, cennik czy wizytówkę — i za jaką stałą cenę.",
      contextLabel: "Nazwa firmy lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Jak sprzedajesz podłogi?", options: ["Salon z montażem", "Sam montaż, ekipa z dojazdem", "Cyklinowanie i renowacja", "Prace dla firm i deweloperów"] },
        { _key: k("z"), question: "Jakich zleceń chcesz więcej?", options: ["Deska i parkiet", "Panele laminowane i winylowe", "Cyklinowanie", "Schody"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Pozycjonowanie firmy montażu podłóg to praca nad tym, żeby osoby szukające montażu paneli, układania deski i parkietu albo cyklinowania w Twoim mieście trafiały na Twoją stronę i wizytówkę w Mapach Google, a potem dzwoniły. Robię to sam: dane wyszukiwań, podstrony usług i materiałów, poprawki w kodzie, wizytówkę i raporty. Klient firmy podłogowej najpierw wybiera materiał i wygląd, a dopiero potem szuka kogoś, kto przygotuje podłoże i położy podłogę, więc strona musi odpowiadać na obie części tej decyzji."),

        h2("Pozycjonowanie firmy montażu podłóg: salon, ekipa montażowa i cykliniarz"),
        p("Pod hasłem „firma podłogowa” kryją się trzy różne biznesy i każdy walczy o inne frazy:"),
        li("salon z podłogami i montażem — klienci szukają marek, kolekcji i „sklep z podłogami [miasto]”, a potem przychodzą obejrzeć próbki"),
        li("ekipa montażowa z dojazdem — „montaż paneli winylowych Kraków”, „układanie deski warstwowej Gdańsk”; często podwykonawca salonów i firm wykończeniowych, który chce mieć też własnych klientów"),
        li("cykliniarz i firma renowacji — „cyklinowanie podłogi Warszawa”, „renowacja parkietu”, „cyklinowanie schodów”, najczęściej dla mieszkań z rynku wtórnego i kamienic"),
        p("Większość firm robi dwie albo trzy z tych rzeczy. Każda potrzebuje własnej części strony, własnych zdjęć i własnego sposobu kontaktu."),

        h2("Frazy w pozycjonowaniu firmy montażu podłóg: materiał, wzór, usługa i cena"),
        p("Analizę fraz zaczynam od Twojego cennika i miejscowości, do których dojeżdżasz. Typowe grupy:"),
        li("materiał — panele laminowane, panele winylowe, deska warstwowa, deska lita, parkiet, mozaika"),
        li("wzór — jodełka klasyczna, jodełka francuska, deska szeroka, parkiet w cegiełkę"),
        li("usługa — montaż, cyklinowanie, olejowanie, lakierowanie, renowacja schodów, wyrównanie podłoża"),
        li("cena — „cyklinowanie cena za m2”, „układanie paneli cena za metr”, „ile kosztuje położenie podłogi w mieszkaniu”"),
        p("Dane pokazują też, które frazy wywołują Mapy Google, które portale z zapytaniami, a które podsumowanie AI. Od tego zależy, które podstrony budować najpierw."),

        h2("Cyklinowanie podłóg i renowacja parkietu: osobne podstrony dla osobnych klientów"),
        p("Cyklinowania szukają inni ludzie niż montażu: właściciele mieszkań z parkietem schowanym pod starą wykładziną, kupujący mieszkania z rynku wtórnego, właściciele lokali na wynajem między najemcami. Podstrona cyklinowania, która ma szansę wejść wysoko, odpowiada na ich pytania:"),
        li("czy cyklinowanie jest bezpyłowe i co to znaczy w praktyce"),
        li("olej czy lakier — trwałość, wygląd, pielęgnacja"),
        li("ile trwa praca w typowym mieszkaniu i kiedy można wnieść meble"),
        li("kiedy parkiet jest zbyt cienki albo zbyt zniszczony i lepiej położyć nowy"),
        p("Renowacja schodów drewnianych to osobna fraza i osobna podstrona, a w wielu firmach jest tylko punktem na liście usług."),

        h2("Montaż podłóg w mieszkaniu od dewelopera: frazy klientów ze stanem deweloperskim"),
        p("Duża część zleceń w miastach to mieszkania odebrane od dewelopera w stanie deweloperskim. Ich właściciele szukają po kolei: „jaka podłoga do mieszkania”, „panele czy deska warstwowa”, „montaż podłogi w nowym mieszkaniu [miasto]”. Podstrona dla nich wyjaśnia:"),
        li("jak sprawdzasz wylewkę — wilgotność, poziom, pęknięcia — i co robisz, gdy trzeba ją wyrównać"),
        li("kiedy w kolejności prac wchodzi ekipa podłogowa: przed malowaniem czy po nim, przed montażem drzwi czy po"),
        li("ile trwa montaż w typowym mieszkaniu i czy materiał trzeba wcześniej zostawić do aklimatyzacji"),
        li("listwy, progi i przejścia do płytek w łazience i kuchni"),
        p("Taka podstrona pracuje przez cały rok, bo nowe osiedla są oddawane przez cały rok."),

        h2("Cennik montażu i cyklinowania za m² na stronie firmy podłogowej"),
        p("Klienci szukają ceny za metr, zanim zadzwonią. Cennik z widełkami za m² zatrzymuje ich na stronie i odsiewa tych, którzy szukają najtańszej ekipy. Żeby nie przegrać na samej liczbie, cennik mówi, co jest w cenie, a co dochodzi:"),
        li("demontaż starej podłogi i wywóz"),
        li("gruntowanie, wyrównanie albo szlifowanie wylewki"),
        li("listwy przypodłogowe, progi, docinki przy ościeżnicach"),
        li("stopnie schodów liczone na sztuki"),
        li("stawka VAT — przy pracach w lokalach mieszkalnych często 8%, w innych przypadkach 23%; to ogólna informacja, nie porada podatkowa"),
        p("Ceny ustalasz Ty, a ja zapisuję je tak, żeby Google i asystenci AI mogli je odczytać i podać razem z nazwą Twojej firmy."),

        h2("Realizacje firmy podłogowej: materiał, wzór, pomieszczenie i dzielnica w opisie"),
        p("Klienci szukają wyglądu: „jodełka dębowa w salonie”, „szare panele winylowe w kuchni”, „schody dębowe olejowane”. Realizacja z nazwą produktu i koloru, wzorem, pomieszczeniem i dzielnicą — na przykład „Deska dębowa w jodełkę francuską, salon, Mokotów” — oraz zdjęciami detali, po których widać jakość pracy: przejścia do płytek, wykończenia schodów, docinek przy kominku, pracuje i w wyszukiwarce grafiki, i w rozmowie z klientem. Te same zdjęcia wrzucone tylko na Instagram czy Facebook w Google praktycznie nie istnieją."),

        h2("Wizytówka Google firmy montażu podłóg: salon z adresem czy ekipa z obszarem działania"),
        p("Na frazy typu „cyklinowanie w pobliżu” czy „montaż podłóg Białołęka” Google pokazuje najpierw Mapy. Ustawienie wizytówki zależy od tego, jak pracujesz:"),
        li("salon ma widoczny adres, kategorię sklepu z podłogami i godziny otwarcia zgodne z rzeczywistością"),
        li("ekipa bez lokalu ustawia obszar działania z miejscowości, do których naprawdę dojeżdża, i ukrywa adres domowy"),
        li("zdjęcia skończonych podłóg z opisem materiału i dzielnicy dodawane regularnie przez cały sezon remontowy"),
        li("opinie, w których klient wspomina materiał i usługę — prośba wysłana w dniu zakończenia prac"),
        p(
          "Pełną pracę nad Mapami Google — katalogi, odpowiedzi na opinie, fałszywe wizytówki konkurencji — opisuję na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Oferteo, Fixly, OLX i markety budowlane a pozycjonowanie firmy podłogowej"),
        p("Wiele ekip bierze zlecenia z Oferteo, Fixly i OLX albo montuje podłogi klientom marketów budowlanych, które sprzedają usługę montażu razem z materiałem. To wypełnia kalendarz, ale klient należy do portalu albo sklepu, cenę ustala ktoś inny, a zapytanie z portalu trafia zwykle do kilku firm naraz. Pozycjonowanie buduje drugą stronę: klientów, którzy znaleźli Twoją nazwę, umówili pomiar u Ciebie i płacą Twoją stawkę. Większość firm prowadzi oba kanały i przez rok–dwa zmienia proporcje."),
        p(
          "Firmy wykończeniowe i budowlane, dla których podłoga jest częścią większego remontu, znajdą swoją wersję na stronie ",
          link("pozycjonowanie strony firmy budowlanej", "/pl/pozycjonowanie-strony-firmy-budowlanej"),
          ".",
        ),

        h2("Szybkość strony i formularz z metrażem: technika w pozycjonowaniu firmy podłogowej"),
        p(
          "Strony firm podłogowych są pełne dużych zdjęć i często wolne na telefonie, a klient szuka z telefonem w ręku, stojąc w pustym mieszkaniu. Najczęściej poprawiam: zdjęcia w nowoczesnych formatach ładowane przy przewijaniu, numer telefonu jako przycisk u góry, tytuły z usługą i miastem, dane strukturalne firmy i usług oraz formularz z polami na metraż, materiał i zdjęcie pomieszczenia, z informacją o administratorze danych zgodnie z RODO. Jeśli strona wymaga więcej niż poprawek, opisuję to na stronie ",
          link("przebudowa strony internetowej", "/pl/oferty/przebudowa-strony-internetowej"),
          ".",
        ),

        h2("Pozycjonowanie firmy montażu podłóg w ChatGPT i Google AI Overviews (GEO, AEO)"),
        p("Coraz więcej pytań o podłogi trafia najpierw do ChatGPT, Perplexity albo do podsumowań AI w Google: „panele winylowe czy deska warstwowa na ogrzewanie podłogowe”, „ile schnie lakier po cyklinowaniu”, „dobra firma od cyklinowania na Ursynowie”. Odpowiedź powstaje z tekstów, które model może odczytać i porównać z innymi źródłami. Pracę nad obecnością w takich odpowiedziach określa się skrótami GEO (generative engine optimization) i AEO (answer engine optimization); w firmie podłogowej obejmuje ona:"),
        li("porównania materiałów pisane z Twoich realizacji, także z tym, gdzie dany materiał się nie sprawdza"),
        li("widełki cen i czas prac zapisane tekstem, a nie tylko w PDF z ofertą"),
        li("marki, które montujesz albo sprzedajesz, i gwarancja na montaż opisane tak samo na stronie i w wizytówce"),
        li("dane strukturalne firmy, usług i obszaru działania"),
        p(
          "Na starcie i po kilku miesiącach zapisuję, co asystenci mówią o Twojej firmie. Opis metody znajdziesz na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Ile kosztuje pozycjonowanie firmy montażu podłóg"),
        li("Audyt SEO strony, wizytówki i konkurencji z okolicy: od 1000 zł, jednorazowo, z listą poprawek według wpływu."),
        li("Jednorazowe prace — podstrony materiałów i cyklinowania, cennik, realizacje, dane strukturalne: od 1000 do 3000 zł."),
        li("Stałe pozycjonowanie firmy montażu podłóg — nowe podstrony, realizacje, wizytówka i opinie, widoczność w AI, raport w telefonach i zapytaniach: od 3500 zł miesięcznie, przy silnej konkurencji w Warszawie czy Krakowie od 5500 zł."),
        p(
          "Jednoosobowej ekipie zwykle wystarczą audyt i kilka mocnych podstron. Stałą pracę nad SEO opisuję na stronie ",
          link("strategia i optymalizacja SEO", "/pl/oferty/strategia-i-optymalizacja-seo"),
          ", szczegóły audytu na stronie ",
          link("audyt SEO strony internetowej", "/pl/oferty/audyt-seo-strony-internetowej"),
          ", a wszystkie ceny są w ",
          link("cenniku", "/pl/cennik"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie firmy montażu podłóg: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje pozycjonowanie firmy montażu podłóg?", "Audyt kosztuje od 1000 zł jednorazowo, pojedyncze prace od 1000 do 3000 zł, a stałe pozycjonowanie od 3500 zł miesięcznie, przy silnej konkurencji w dużych miastach od 5500 zł. Napisz, czy prowadzisz salon, montujesz czy cyklinujesz i gdzie pracujesz — podam stałą cenę."],
          ["Kiedy pozycjonowanie zacznie przynosić zlecenia?", "Poprawki wizytówki potrafią dać efekt w Mapach w kilka tygodni. Nowe podstrony materiałów i cyklinowania zwykle potrzebują trzech–pięciu miesięcy, w Warszawie i Krakowie dłużej. Cennik i realizacje, które raz weszły wysoko, przyprowadzają ludzi latami."],
          ["Czy podawać ceny za m² na stronie?", "Widełki — tak. Klienci szukają ceny za metr przed telefonem, a cennik z wyjaśnieniem, co jest w cenie, przyciąga mniej łowców okazji i więcej osób gotowych umówić pomiar. Dokładna wycena i tak powstaje po pomiarze."],
          ["Czy opisy produktów od producenta wystarczą na stronę salonu podłóg?", "Jako dane techniczne tak, jako treść podstrony nie. Te same opisy są u producenta i w setkach sklepów. Twoje uwagi — gdzie produkt się sprawdza, jak się zużywa, zdjęcia z Twoich montaży — sprawiają, że podstrona ma po co wychodzić w Google."],
          ["Co jest lepsze dla firmy podłogowej: pozycjonowanie czy Google Ads?", "To narzędzia na różny czas. Kampania w Google Ads przynosi telefony już w pierwszym tygodniu, ale gaśnie razem z wpłatami. Podstrona, która raz weszła wysoko, przyprowadza klientów bez opłaty za każde kliknięcie przez długie miesiące. Firmy podłogowe często startują z małą kampanią i stopniowo przesuwają budżet na SEO."],
          ["Czy ChatGPT poleca firmy od montażu podłóg i cyklinowania?", "Tak, gdy ktoś o to zapyta, ale nikt nie zagwarantuje, że wybierze właśnie Ciebie. Szanse rosną, gdy na stronie są usługi, materiały, obszar działania i ceny zapisane prostymi zdaniami, a dane i opinie zgadzają się w Google i katalogach."],
          ["Czy pracujesz z firmami podłogowymi spoza Warszawy?", "Tak, z całej Polski — od Trójmiasta po Rzeszów. Pozycjonowanie robię zdalnie, na danych wyszukiwań dla Twojego miasta i miejscowości, do których dojeżdżasz."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie firmy montażu podłóg: co mi wysłać"),
        p(
          "Prześlij nazwę firmy, adres strony i link do profilu w Mapach Google, napisz, czy prowadzisz salon, montujesz, cyklinujesz czy robisz wszystko, materiały, przy których chcesz mieć więcej zleceń, i miejscowości, do których dojeżdżasz. W ciągu jednego dnia roboczego dostaniesz listę tego, co zmieniłbym najpierw, i stałą cenę. Skorzystaj z ",
          link("formularza powyżej", "#quote"),
          " albo napisz na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
