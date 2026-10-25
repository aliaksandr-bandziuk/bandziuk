// Landing page fixture: Pozycjonowanie strony biura architektonicznego (PL),
// group «seo-for-architects». Market version for Polish pracownie
// architektoniczne, architects with their own practice and projektanci wnętrz,
// not a translation of seo-for-architects.en.
// Semantic core (ref/professionals.md, BRIEF.md): «pozycjonowanie strony biura
// architektonicznego», «pozycjonowanie biura architektonicznego»,
// «pozycjonowanie pracowni architektonicznej» — no measured volume; SERP
// entirely agencies (seobit, semcore, seosklep24, studiokreacja,
// studiolokomotywa, artefakt, commplace) → buyers’ demand. Client-side phrases
// used as examples: «architekt [miasto]», «projekt domu jednorodzinnego»,
// «adaptacja projektu gotowego», «projekt wnętrz», «inwentaryzacja budynku».
// PAA: Gdzie szukać architekta? Ile kosztuje usługa architekta? Ile kosztuje
// 1 godzina pracy architekta? — used as content ideas for the studio’s site
// (H2 + FAQ), not as the owner’s prices.
// Intent (ref/intent-check-professionals.md): «pozycjonowanie biura
// architektonicznego» vs «strona dla architekta» 0 shared URLs, 0 shared
// domains → SEO and the build are separate pages; no paragraph is shared with
// /pl/strona-dla-biura-architektonicznego.
// Portfolio proof: the «architecture» case is a 3D laser scanning and BIM
// company (not an architecture studio): no leads for two years → rebuilt on
// WordPress, EN/PL/DE → 29× organic growth, weekly leads.
// NOT on this page: what the studio site contains and how it is built —
// layout, gallery build, design (/pl/strona-dla-biura-architektonicznego,
// linked); wizytówka Google in depth (/pl/oferty/pozycjonowanie-lokalne);
// language-version build (/pl/oferty/tworzenie-stron-wielojezycznych); Google
// Ads and social media (not offered).
// Owner’s rules: PL form «pozycjonowanie strony X»; every SEO page covers AI
// search (GEO, AEO); never say there are no clients from the visitor’s segment.
import { p, h2, h3, li, link, k } from "./pt";

export const seoForArchitectsPl = {
  lang: "pl",
  group: "seo-for-architects",
  slug: "pozycjonowanie-strony-biura-architektonicznego",
  title: "Pozycjonowanie strony biura architektonicznego",
  heading: "Pozycjonowanie strony biura architektonicznego",
  excerpt:
    "Zajmuję się pozycjonowaniem stron biur architektonicznych i pracowni projektowych z całej Polski: podstrony usług i realizacji, zdjęcia opisane tak, żeby Google je rozumiał, wizytówka Google, konkursy i publikacje jako źródła linków oraz widoczność w odpowiedziach AI — a wynik liczę w zapytaniach o projekt.",
  seo: {
    metaTitle: "Pozycjonowanie pracowni architektonicznej | Bandziuk",
    metaDescription:
      "Pozycjonowanie strony biura architektonicznego: podstrony usług i realizacji, zdjęcia, wizytówka Google, publikacje i widoczność w AI. Audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Podstrony usług i realizacji", "Audyt od 1000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Architekt projekt domu Gdańsk", "Pracownia w Mapach Google", "Umów spotkanie", "Poleca ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO strony biura architektonicznego: frazy, realizacje, zdjęcia, wizytówka Google", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO dla pracowni architektonicznej: podstrony usług i realizacji, opisy zdjęć, dane strukturalne", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie strony biura architektonicznego", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje pozycjonowanie strony biura architektonicznego",
      items: [
        { _key: k("o"), iconName: "search", title: "Mapa fraz: usługa, typ budynku, miasto", text: "Tak, jak szuka inwestor, a nie jak mówi architekt" },
        { _key: k("o"), iconName: "layers", title: "Podstrony usług i realizacji", text: "Projekt domu, adaptacja, wnętrza, inwentaryzacja" },
        { _key: k("o"), iconName: "image", title: "Zdjęcia i wizualizacje czytelne dla Google", text: "Nazwy plików, opisy alt, lekkie galerie" },
        { _key: k("o"), iconName: "map-pin", title: "Wizytówka Google pracowni", text: "Kategorie, usługi, opinie inwestorów, okoliczne gminy" },
        { _key: k("o"), iconName: "file-text", title: "Konkursy i publikacje jako linki", text: "Odnośniki do konkretnych realizacji, nie tylko do strony głównej" },
        { _key: k("o"), iconName: "sparkles", title: "Widoczność w odpowiedziach AI", text: "Gdy inwestor pyta ChatGPT, jakiego architekta wybrać" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO strony pracowni", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe pozycjonowanie biura architektonicznego", value: "od 3500 zł / mies.", note: "podstrony, realizacje, wizytówka, AI", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: strony firm z branży budowlanej i usługowej, które budowałem i pozycjonowałem",
      subtitle:
        "Firma wykonująca skanowanie laserowe 3D i modelowanie BIM budynków — usługi, z których korzystają architekci — której ruch organiczny wzrósł 29 razy po przebudowie strony z sekcją realizacji w trzech językach. Obok: warszawska firma remontowo-inwestycyjna z dopracowanym wizualnie serwisem, wielojęzyczny serwis agencji edukacyjnej dla dziesięciu krajów, warsztat samochodowy i pracownia renowacji felg. To, co łączy te projekty z pracownią architektoniczną: klient szuka konkretnej usługi w konkretnym miejscu i trafia na podstronę, która na to odpowiada.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "architecture-website-rebuild-and-seo-scan",
        "renovation-and-investment-website-with-premium-design",
        "full-multilingual-website-development-and-seo-for-student-services",
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena pozycjonowania strony biura architektonicznego",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: które usługi i realizacje warto wypozycjonować najpierw i za jaką stałą cenę.",
      contextLabel: "Nazwa pracowni lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Co projektuje pracownia?", options: ["Domy jednorodzinne", "Obiekty komercyjne i publiczne", "Wnętrza", "Kilka z powyższych"] },
        { _key: k("z"), question: "Gdzie chcecie zdobywać klientów?", options: ["W swoim mieście", "W całym regionie", "W całej Polsce", "Także za granicą"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Pozycjonowanie strony biura architektonicznego to moja usługa dla pracowni architektonicznych, architektów z własną praktyką i projektantów wnętrz z całej Polski: mapa fraz, podstrony usług i realizacji, zdjęcia, które Google potrafi odczytać, wizytówka Google, publikacje jako źródła linków i widoczność w odpowiedziach AI. Robię to sam — od danych wyszukiwań po poprawki w kodzie — a wynik liczę w zapytaniach o projekt, nie w odwiedzinach."),

        h2("Pozycjonowanie strony biura architektonicznego: gdzie klienci szukają architekta"),
        p("Na pytanie „Gdzie szukać architekta?” większość ludzi odpowiada sobie sama: pyta znajomych, a potem wpisuje usługę i miasto w Google. Nawet polecona pracownia jest sprawdzana w wyszukiwarce, zanim ktoś zadzwoni. Wyszukiwania dzielą się na kilka grup i każda prowadzi do innego klienta:"),
        li("„architekt Gdańsk”, „biuro architektoniczne Lublin” — ogólne frazy z miastem, o które konkuruje najwięcej pracowni"),
        li("„projekt domu jednorodzinnego Wrocław”, „projekt indywidualny domu pod Krakowem” — inwestor, który ma działkę i planuje budowę"),
        li("„adaptacja projektu gotowego”, „adaptacja projektu do działki” — osoba, która kupiła projekt katalogowy i potrzebuje architekta adaptującego"),
        li("„projekt wnętrz mieszkania Poznań”, „architekt wnętrz Katowice” — właściciel mieszkania, często tuż po odbiorze od dewelopera"),
        li("„inwentaryzacja budynku”, „projekt przebudowy kamienicy”, „projekt hali magazynowej” — firmy, zarządcy nieruchomości i inwestorzy komercyjni"),
        p("Każda grupa potrzebuje innej podstrony. Strona pracowni z jedną zakładką „Oferta” i galerią na stronie głównej nie odpowiada wprost na żadne z tych zapytań."),

        h2("Podstrony usług pracowni architektonicznej: projekt domu, adaptacja, wnętrza i inwentaryzacja"),
        p("Pozycjonowanie pracowni zaczyna się od listy usług, które chcecie sprzedawać, i od sprawdzenia, jak nazywają je klienci. Architekt mówi „projekt budowlany”, inwestor wpisuje „projekt domu”. Każda ważna usługa dostaje własną podstronę."),
        h3("Podstrona projektu domu jednorodzinnego"),
        p("Etapy od koncepcji do pozwolenia na budowę, co inwestor przygotowuje sam — mapę do celów projektowych, badania gruntu, warunki zabudowy albo wypis z planu miejscowego — ile trwa projektowanie i które realizacje warto obejrzeć."),
        h3("Podstrona adaptacji projektu gotowego"),
        p("Na czym polega adaptacja, co zmienia się przy dopasowaniu projektu do działki i lokalnych przepisów, jakie dokumenty są potrzebne. Tę frazę wpisują ludzie zdecydowani, którzy chcą zlecić pracę szybko."),
        h3("Podstrona projektu wnętrz"),
        p("Zakres — od układu funkcjonalnego po rysunki wykonawcze i nadzór autorski — z realizacjami wnętrz podlinkowanymi bezpośrednio pod opisem."),
        h3("Podstrona inwentaryzacji budynku i projektów przebudowy"),
        p("Dla zarządców, wspólnot i firm: inwentaryzacja architektoniczna, przebudowa, zmiana sposobu użytkowania. Te frazy mają mniej wyszukiwań, ale zlecenia są zwykle większe."),

        h2("Realizacje pracowni architektonicznej jako podstrony w Google"),
        p("W wielu pracowniach realizacja to galeria: tytuł, kilkanaście zdjęć i rok. Dla Google taka podstrona jest prawie pusta. Ta sama realizacja z opisem przyprowadza ludzi, którzy szukają podobnego budynku w podobnym miejscu. Opis, który pracuje w wyszukiwarce, zawiera:"),
        li("typ budynku i lokalizację w tytule, np. „Dom z płaskim dachem pod Gdańskiem — projekt indywidualny”"),
        li("metraż, liczbę kondygnacji, technologię i główne materiały"),
        li("zadanie inwestora i ograniczenia: wąską działkę, spadek terenu, zapisy planu miejscowego, budżet"),
        li("rozwiązania energooszczędne, jeśli są: pompę ciepła, fotowoltaikę, standard zbliżony do pasywnego"),
        li("zakres pracy pracowni i link do podstrony tej usługi"),
        p("Filtry według typu budynku pomagają odwiedzającym, ale dla SEO ważniejsze jest to, żeby każda realizacja miała własny adres i własny tekst. Zgodę inwestora na publikację lokalizacji warto mieć na piśmie; często wystarczy podać gminę albo okolicę zamiast adresu."),

        h2("Zdjęcia realizacji i wizualizacje w pozycjonowaniu strony architekta"),
        p("Na stronie pracowni to zdjęcia są główną treścią, a Google rozumie je przede wszystkim z tego, co jest wokół nich. Przy pozycjonowaniu sprawdzam:"),
        li("nazwy plików — „dom-plaski-dach-gdansk-elewacja-ogrodowa.webp” zamiast „IMG_4521.jpg”"),
        li("opisy alt, które mówią, co widać: elewację od ogrodu, salon z antresolą, detal schodów"),
        li("podpisy odróżniające wizualizację od zdjęcia zrealizowanego budynku — inwestorzy o to pytają, a Grafika Google pokazuje jedno i drugie"),
        li("format WebP lub AVIF i rozmiary dopasowane do ekranu, żeby galeria z kilkudziesięcioma zdjęciami nie ładowała się na telefonie w nieskończoność"),
        p(
          "Dobrze opisane zdjęcia wnętrz i elewacji trafiają do Grafiki Google i na Pinterest, skąd część ludzi przechodzi prosto na stronę realizacji. Jak zbudować lekką galerię od strony technicznej, opisuję na stronie ",
          link("strona dla biura architektonicznego", "/pl/strona-dla-biura-architektonicznego"),
          ".",
        ),

        h2("Wizytówka Google pracowni architektonicznej i frazy „architekt + miasto”"),
        p("Przy wyszukiwaniach z nazwą miasta nad zwykłymi wynikami pojawia się blok map z trzema firmami. Pracownia wchodzi do niego przez wizytówkę Google:"),
        li("kategoria główna zgodna z tym, co przynosi najwięcej zleceń — architekt albo projektant wnętrz — i kategorie dodatkowe dla reszty"),
        li("usługi w wizytówce nazwane tak samo jak podstrony i połączone z nimi"),
        li("zdjęcia realizacji z okolicy, a nie tylko biura i zespołu"),
        li("opinie inwestorów, w których pada rodzaj projektu — „projekt domu”, „adaptacja”, „wnętrza mieszkania” — bo Google łączy treść opinii z wyszukiwaniami"),
        p(
          "Domy jednorodzinne buduje się zwykle pod miastem, więc ludzie szukają też w gminach podmiejskich: „architekt Piaseczno”, „projekt domu Kartuzy”. Jedna podstrona, która mówi, gdzie pracownia przyjmuje zlecenia i jakie ma realizacje w okolicy, daje więcej niż dziesięć prawie identycznych podstron dla miast. Całą pracę nad Mapami opisuję na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Ile kosztuje usługa architekta: treści o cenach i formalnościach na stronie pracowni"),
        p("Wśród pytań, które Google pokazuje przy wyszukiwaniach o architektach, są „Ile kosztuje usługa architekta?” i „Ile kosztuje 1 godzina pracy architekta?”. Pracownia, która rzeczowo na nie odpowiada, dostaje ruch od ludzi na początku decyzji. Nie trzeba publikować cennika, wystarczy wyjaśnić:"),
        li("od czego zależy cena projektu domu: metraż, złożoność bryły, warunki działki, zakres dokumentacji"),
        li("kiedy pracownia liczy ryczałt, a kiedy stawkę godzinową — na przykład przy konsultacjach i nadzorze autorskim"),
        li("co obejmuje projekt, a za co inwestor płaci osobno, na przykład za mapę do celów projektowych i badania gruntu"),
        p("Tak samo działają teksty o formalnościach: warunki zabudowy a plan miejscowy, pozwolenie na budowę a zgłoszenie, ile trwa uzyskanie pozwolenia. Ludzie wpisują te pytania, zanim zaczną szukać architekta, i zapamiętują pracownię, która im odpowiedziała. Treść merytoryczną sprawdza architekt, a ja dbam o to, żeby tekst odpowiadał na frazy i prowadził do kontaktu."),

        h2("Konkursy architektoniczne, publikacje i SARP jako źródła linków do strony pracowni"),
        p("W pozycjonowaniu liczą się odnośniki z innych stron, a architekci mają ich więcej naturalnych źródeł niż większość branż:"),
        li("wyniki konkursów architektonicznych na stronach organizatorów, z nazwą pracowni i linkiem"),
        li("publikacje realizacji w polskich czasopismach i portalach branżowych oraz w serwisach międzynarodowych, takich jak ArchDaily czy Archello"),
        li("wpisy w publicznych spisach członków organizacji zawodowych, takich jak SARP czy izby architektów, z danymi zgodnymi ze stroną"),
        li("strony wykonawców, producentów stolarki i elewacji oraz deweloperów, którzy pokazują wspólną realizację"),
        p("Pilnuję, żeby publikacja linkowała do podstrony konkretnej realizacji, a nie tylko do strony głównej, i żeby nazwa pracowni była wszędzie zapisana tak samo — z tych danych korzystają też asystenci AI. Linków z farm artykułów sponsorowanych nie kupuję."),

        h2("Wersje językowe strony biura architektonicznego dla klientów z zagranicy"),
        p(
          "Część pracowni pracuje dla klientów spoza Polski: zagranicznych firm otwierających biura, hotele czy zakłady, Polaków mieszkających za granicą, którzy budują dom w kraju, albo inwestorów z Niemiec i Skandynawii. Każda z tych grup szuka we własnym języku, a przetłumaczona strona główna tego nie łapie. Wersja angielska czy niemiecka potrzebuje własnych adresów, oznaczeń hreflang, opisów realizacji w tym języku i fraz dobranych z danych wyszukiwań dla danego kraju. Jak buduję takie strony, opisuję na stronie ",
          link("tworzenie stron wielojęzycznych", "/pl/oferty/tworzenie-stron-wielojezycznych"),
          ".",
        ),

        h2("Pozycjonowanie strony w branży architektonicznej: skanowanie laserowe 3D i BIM"),
        p("Jeden z moich projektów to strona firmy, która wykonuje skanowanie laserowe 3D i modelowanie BIM budynków, infrastruktury i terenu — usługi, z których korzystają architekci i projektanci przy inwentaryzacji i przebudowie. Stara strona na kreatorze była wolna, niestabilna i bez SEO, a przez dwa lata nie przyniosła żadnych zapytań. Wielu potencjalnych klientów nie wiedziało, że taka usługa istnieje, więc nie wpisywało jej nazwy w Google."),
        p("Zbudowałem stronę od nowa na WordPressie, zachowując projekt graficzny, który klient lubił, ze strukturą SEO gotową na rozbudowę, sekcją realizacji i wersjami EN, PL i DE. Ruch organiczny wzrósł 29 razy, a zapytania przychodzą co tydzień. Wniosek dla pracowni architektonicznej: w branży, w której klient nie zna fachowych nazw, podstrony muszą odpowiadać na pytania zadane jego słowami."),

        h2("Pozycjonowanie pracowni architektonicznej w ChatGPT i Google AI Overviews (GEO, AEO)"),
        p("Coraz więcej osób pyta ChatGPT, Perplexity albo podsumowania AI w Google: „który architekt w Trójmieście projektuje nowoczesne stodoły”, „ile trwa projekt domu z pozwoleniem na budowę”, „kto zrobi adaptację projektu gotowego w okolicach Opola”. Asystent wymienia pracownie, o których znajduje sprawdzalne fakty. Pracę nad tym nazywa się GEO (generative engine optimization) albo AEO (answer engine optimization):"),
        li("usługi, typy budynków, miasto i obszar działania zapisane prostymi zdaniami"),
        li("realizacje z opisem, które asystent może przytoczyć jako przykład"),
        li("dane strukturalne pracowni, usług i realizacji zgodne z wizytówką Google"),
        li("publikacje, wyniki konkursów i wpisy w spisach członków z tą samą nazwą i adresem"),
        p(
          "Przed pracą i po niej sprawdzam, co asystenci mówią o Waszej pracowni i kogo polecają zamiast niej. Więcej na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Ile trwa pozycjonowanie strony architekta i jak mierzę zapytania o projekt"),
        p(
          "Pracę zaczynam od audytu: indeksowanie, tytuły, szybkość galerii na telefonie, frazy w Google Search Console, wizytówka i konkurenci w Waszym mieście. Szczegóły na stronie ",
          link("audyt SEO strony internetowej", "/pl/oferty/audyt-seo-strony-internetowej"),
          ". Poprawki tytułów i wizytówki potrafią dać efekt w kilka tygodni, nowe podstrony usług i realizacji zwykle w dwa–cztery miesiące, w dużych miastach dłużej.",
        ),
        p("Wybór architekta trwa, a projekt domu bywa zamawiany wiele miesięcy po pierwszej wizycie na stronie. Dlatego w raporcie liczę telefony, wiadomości i umówione spotkania z wyszukiwarki, z podziałem na podstrony usług, mierzone w GA4 i Google Search Console. Pozycje fraz są obok tych liczb, a nie zamiast nich."),

        h2("Ile kosztuje pozycjonowanie strony biura architektonicznego"),
        li("Audyt SEO strony, realizacji, zdjęć, wizytówki i konkurencji: od 1000 zł, jednorazowo, z listą poprawek według wpływu."),
        li("Jednorazowe prace — podstrony usług, opisy realizacji i zdjęć, dane strukturalne, poprawki techniczne: od 1000 do 3000 zł."),
        li("Stałe pozycjonowanie strony biura architektonicznego — podstrony, realizacje, wizytówka, linki z publikacji, widoczność w AI i raporty: od 3500 zł miesięcznie, w dużych miastach lub przy kilku wersjach językowych od 5500 zł miesięcznie."),
        p(
          "Pełne widełki są w ",
          link("cenniku", "/pl/cennik"),
          ". Jeśli stronę pracowni trzeba najpierw zbudować albo przebudować, zajrzyjcie na stronę ",
          link("strona internetowa dla biura architektonicznego", "/pl/strona-dla-biura-architektonicznego"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie strony biura architektonicznego: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje pozycjonowanie strony biura architektonicznego?", "Stałe pozycjonowanie kosztuje od 3500 zł miesięcznie, w dużych miastach lub przy kilku wersjach językowych od 5500 zł. Audyt to od 1000 zł jednorazowo, a pojedyncze prace od 1000 do 3000 zł. Po krótkim opisie pracowni podaję stałą cenę."],
          ["Czy pracownia architektoniczna potrzebuje SEO, skoro klienci przychodzą z poleceń?", "Tak, bo polecony klient i tak sprawdza pracownię w Google, a inwestorzy spoza kręgu znajomych szukają usługi i miasta. Podstrony realizacji i wizytówka pracują wtedy, gdy nikt akurat nie poleca."],
          ["Gdzie klienci szukają architekta i jak pracownia może się tam pojawić?", "Najczęściej w Google, z usługą i miastem w zapytaniu, w Mapach Google, w publikacjach branżowych i coraz częściej w ChatGPT. Pracownia pojawia się tam dzięki podstronom usług i realizacji, wizytówce z opiniami i spójnym danym w katalogach."],
          ["Czy na stronie pracowni pisać, ile kosztuje usługa architekta i godzina pracy architekta?", "Warto odpowiedzieć na te pytania, nawet bez cennika: od czego zależy cena projektu, kiedy liczycie ryczałt, a kiedy stawkę godzinową, co jest w cenie. Ludzie wpisują je na początku decyzji i zapamiętują pracownię, która odpowiedziała rzeczowo."],
          ["Czy konkursy architektoniczne i publikacje pomagają w pozycjonowaniu?", "Tak. Wyniki konkursów i publikacje realizacji na stronach organizatorów i w mediach branżowych to wartościowe linki i źródła, które sprawdzają asystenci AI. Ważne, żeby linkowały do podstrony realizacji i podawały nazwę pracowni tak samo jak strona."],
          ["Czy ChatGPT poleca architektów?", "Tak, gdy ktoś o to zapyta. Asystent wybiera pracownie, o których znajduje sprawdzalne fakty: usługi, miasto, opisane realizacje, publikacje i dane zgodne z wizytówką Google. Tę pracę wykonuję w ramach pozycjonowania."],
          ["Czy pracujesz z pracowniami spoza Warszawy?", "Tak, z całej Polski. Pozycjonowanie robię zdalnie, z danymi wyszukiwań dla Waszego miasta i okolicznych gmin, a rozmawiamy przez wideo po polsku, angielsku albo rosyjsku."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie strony biura architektonicznego: co mi wysłać"),
        p(
          "Wyślijcie link do strony i do wizytówki w Mapach Google, listę usług, przy których chcecie mieć więcej zapytań, miasta i gminy, w których projektujecie, oraz kilka realizacji, które chcecie pokazywać najbardziej. Odpowiem, od czego zacząłbym i za jaką stałą cenę. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
