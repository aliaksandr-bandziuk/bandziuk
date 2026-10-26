// Landing page fixture: Pozycjonowanie siłowni (PL), group «gym-seo». New page.
// Market version for Polish siłownie, kluby fitness and studia (pilates, joga,
// boks, cross trening) — mostly owner-run clubs and small local chains
// competing with national chains — not a translation of gym-seo.en.
// Semantic core: ref/creative-leisure.md has no measured PL gym SEO phrases
// (PL list: only «strona internetowa dla trenera personalnego» 90). H1 and
// headings carry the slug phrase «pozycjonowanie siłowni» plus «klub fitness»,
// «studio fitness», «sieć klubów», and members’ phrases (siłownia + dzielnica,
// siłownia 24h, karnet bez umowy, wejście jednorazowe, karnet cena, siłownia
// MultiSport).
// Intent: ref/intent-check-creative-leisure.md — PL «strona dla siłowni» top
// 10 = gyms and directories (fitplace.pl, kluby.org, panoramafirm.pl,
// silownia.eu) → members search directories and card operators’ finders
// (MultiSport H2); PL «strona dla trenera personalnego» vs «strona dla
// siłowni» 0 shared → trainer is a separate page; EN «gym seo» vs «gym website
// design» 0 of 10 shared → /pl/strona-dla-studia-fitness is the sibling.
// Angles: frazy z dzielnicą, kartą i nazwą zajęć (ABT, TBC, zdrowy
// kręgosłup), wizytówka Google, karty sportowe (MultiSport, Medicover Sport,
// FitProfit) and their facility finders, podstrony zajęć, cennik karnetów i
// sezon, sieć klubów i lokalizacje, opinie, sieci (Zdrofit, CityFit, McFIT —
// general), Facebook/Instagram vs Google, AI answers, raport w karnetach z
// systemu klubowego (eFitness, Perfect Gym, WodGuru — general).
// NOT on this page: projekt strony — pierwszy ekran, grafik jako widżet,
// tabela karnetów, zakup online, formularz zajęć próbnych, profile, zdjęcia,
// szybkość (/pl/strona-dla-studia-fitness — sibling); trenerzy z własną
// działalnością (/pl/strona-internetowa-dla-trenera-personalnego — linked
// once); wizytówka in depth (/pl/oferty/pozycjonowanie-lokalne); reklamy.
// Prices: PL scale; no 5500 zł tier (only car dealers / car rental).
// Owner’s rules: every SEO page covers AI search (GEO, AEO); never say there
// are no clients from the visitor’s industry; no guaranteed positions.
import { p, h2, li, link, k } from "./pt";

export const gymSeoPl = {
  lang: "pl",
  group: "gym-seo",
  slug: "pozycjonowanie-silowni",
  title: "Pozycjonowanie siłowni",
  heading: "Pozycjonowanie siłowni i klubu fitness",
  excerpt:
    "Zajmuję się pozycjonowaniem siłowni, klubów fitness i studiów zajęć: wizytówka w Mapach Google dla każdego klubu, podstrony zajęć i karnetów, informacja o MultiSport, Medicover Sport i FitProfit tam, gdzie ludzie jej szukają, opinie klubowiczów i miejsce w odpowiedziach AI — rozliczane w zapisach i nowych karnetach.",
  seo: {
    metaTitle: "Pozycjonowanie siłowni: Mapy, zajęcia, karty | Bandziuk",
    metaDescription:
      "Pozycjonowanie siłowni i klubu fitness: wizytówka w Mapach Google, podstrony zajęć i karnetów, MultiSport i FitProfit, opinie i odpowiedzi AI. Audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Mapy, zajęcia, karty sportowe", "Audyt od 1000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Siłownia Ursus 24h", "Honorujemy MultiSport", "Zdrowy kręgosłup, wt. 18:00", "Trasa · Zadzwoń"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO siłowni: strona, wizytówki Google, kluby w okolicy, karty sportowe i odpowiedzi AI", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO dla klubu fitness: podstrony zajęć, karnetów i lokalizacji, wizytówki, dane strukturalne", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie siłowni lub studia fitness", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje pozycjonowanie siłowni",
      items: [
        { _key: k("o"), iconName: "map-pin", title: "Wizytówka Google dla każdego klubu", text: "Kategorie, godziny, udogodnienia, zdjęcia" },
        { _key: k("o"), iconName: "layers", title: "Podstrony zajęć, których ludzie szukają", text: "Pilates, zdrowy kręgosłup, boks, cross" },
        { _key: k("o"), iconName: "shield-check", title: "Karty sportowe opisane wprost", text: "MultiSport, Medicover Sport, FitProfit" },
        { _key: k("o"), iconName: "message-circle", title: "Opinie, które wymieniają zajęcia", text: "Prośba w dobrym momencie, odpowiedź zawsze" },
        { _key: k("o"), iconName: "sparkles", title: "Klub w odpowiedziach AI", text: "ChatGPT, Perplexity i podsumowania Google" },
        { _key: k("o"), iconName: "trending-up", title: "Raport w zapisach i karnetach", text: "Źródło klienta z systemu klubowego" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO siłowni lub klubu fitness", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe pozycjonowanie siłowni", value: "od 3500 zł / mies.", note: "Mapy, zajęcia, opinie, AI, raport", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: lokalne firmy, którym strona i Mapy Google przynoszą klientów",
      subtitle:
        "Wspólny mianownik z klubem fitness: klient szuka usługi, często z nazwą dzielnicy albo miasta, a strona i wizytówka mają zamienić to wyszukiwanie w telefon lub zapis. Przy warszawskim warsztacie samochodowym zajmowałem się lokalnym SEO, wizytówką w Mapach Google, UX i podstronami usług. Felgilab, warszawska pracownia renowacji felg, dostała nowego WordPressa z podstronami usług i cen. ScanM2, firma skanowania laserowego 3D i BIM, od przebudowy na WordPressie, przy której zachowałem jej projekt, ma 29-krotnie wyższy ruch z Google i nowe zapytania każdego tygodnia. Psychoterapeuta z Mediolanu ma osobną podstronę dla każdej lokalizacji, a jego nowe strony już pojawiają się w odpowiedziach ChatGPT. Warszawska przechowalnia opon sprzedaje z jednej strony, której teksty SEO właściciel zmienia sam.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "architecture-website-rebuild-and-seo-scan",
        "psychotherapist-website-milan",
        "tyre-storage-landing-page-with-editable-seo",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena pozycjonowania siłowni lub klubu fitness",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: co poprawiłbym najpierw — wizytówkę, podstrony zajęć czy cennik — i za jaką stałą cenę.",
      contextLabel: "Nazwa klubu lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Jaki klub prowadzisz?", options: ["Siłownię osiedlową", "Klub fitness z zajęciami grupowymi", "Studio pilatesu, jogi lub boksu", "Kilka klubów w mieście"] },
        { _key: k("z"), question: "Skąd dziś przychodzą nowi klubowicze?", options: ["Z Map Google", "Z wyszukiwarki obiektów MultiSport", "Z Facebooka i Instagrama", "Z poleceń"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Pozycjonowanie siłowni to praca nad tym, żeby osoba, która wpisuje „siłownia Bielany”, „pilates Gdańsk Oliwa” albo „siłownia na MultiSport blisko mnie”, zobaczyła Twój klub w Mapach Google i w wynikach wyszukiwania, a potem zapisała się na pierwszy trening. Robię to sam — analizę, podstrony, wizytówki, poprawki w kodzie i raport — bo oprócz SEO tworzę też strony. Klub fitness utrzymują mieszkańcy kilku sąsiednich osiedli, więc o wyniku decyduje dzielnica, a nie cały kraj."),

        h2("Pozycjonowanie siłowni: frazy, które wpisują mieszkańcy okolicy"),
        p("Zanim cokolwiek napiszę, sprawdzam dane wyszukiwań dla Twojego miasta. W polskich klubach frazy prawie zawsze układają się w cztery grupy:"),
        li("miejsce: „siłownia Praga Południe”, „fitness Kraków Ruczaj”, „siłownia przy Rondzie Daszyńskiego”"),
        li("dostęp i umowa: „siłownia 24h”, „karnet bez umowy”, „wejście jednorazowe siłownia cena”, „karnet open”"),
        li("karta sportowa: „siłownia MultiSport Plus”, „gdzie wejść na Medicover Sport”, „FitProfit basen i siłownia”"),
        li("zajęcia: „zdrowy kręgosłup dla seniorów”, „ABT Łódź”, „boks dla dzieci”, „cross trening rano”"),
        p("Ogólne „siłownia” i „fitness” w dużym mieście należą do sieci. Frazy z dzielnicą, kartą i nazwą zajęć są mniejsze, ale bliżej decyzji — i to na nich niezależny klub zarabia."),

        h2("Wizytówka Google siłowni: kategoria, godziny 24h i zdjęcia w Mapach"),
        p("Na „siłownia blisko mnie” Google najpierw pokazuje trzy kluby na mapie. Decyduje trafność, odległość i rozpoznawalność; odległości nie zmienisz, resztę tak:"),
        li("kategoria główna zgodna z tym, czym jesteście — siłownia, klub fitness, studio pilatesu, klub sztuk walki — i dodatkowe tylko dla zajęć prowadzonych co tydzień"),
        li("godziny recepcji osobno od dostępu 24h, który wyjaśnia opis wizytówki i strona; godziny w Wigilię, Wielkanoc i majówkę ustawione z wyprzedzeniem"),
        li("udogodnienia: parking, sauna, strefa damska, szafki na kłódkę, dostęp dla osób na wózku"),
        li("zdjęcia sali i studiów co miesiąc, posty o nowych zajęciach i zmianach w grafiku"),
        p(
          "Wizytówka prowadzi do podstrony tego klubu, nie na stronę główną. Kategorie, katalogi firm i pracę nad Mapami szerzej opisuję na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Siłownia na kartę MultiSport, Medicover Sport i FitProfit: czego szukają klubowicze"),
        p("Duża część osób trenujących w Polsce ma kartę sportową od pracodawcy, więc pierwsze pytanie brzmi: czy wejdę tu na swoją kartę i czy coś dopłacę? Szukają w Google, w wyszukiwarkach obiektów operatorów kart i w katalogach siłowni. W pozycjonowaniu klubu oznacza to trzy rzeczy:"),
        li("na stronie zwykłym tekstem, nie samym logo: które karty i warianty honorujecie, czy jest dopłata, limit wejść albo godzin, czy karta obejmuje zajęcia grupowe i saunę"),
        li("te same informacje w wizytówce Google i w opisie obiektu u operatora karty, z linkiem do Twojej strony"),
        li("osobna podstrona dla posiadaczy kart, jeśli to duża część klubowiczów — z zasadami pierwszej wizyty i listą zajęć dostępnych na kartę"),
        p("Klub, który o kartach milczy, przegrywa z klubem, który odpowiada wprost — także w odpowiedziach asystentów AI."),

        h2("Podstrony zajęć w pozycjonowaniu klubu fitness: pilates, zdrowy kręgosłup, boks, cross"),
        p("Na frazę „pilates dla początkujących Gdańsk” Google pokazuje podstronę o pilatesie, a nie listę wszystkich zajęć klubu. Dlatego zajęcia, których ludzie szukają z nazwy, dostają własne podstrony: dla kogo są, jak wygląda pierwsza godzina, ile osób jest w grupie, kto prowadzi, kiedy i jak się zapisać. Nazwy w polskich klubach bywają hermetyczne — ABT, TBC, FBW — więc podstrona tłumaczy skrót językiem, którym szuka początkujący, na przykład „ćwiczenia na brzuch, pośladki i uda”."),
        p(
          "Ostrożnie z nazwami zastrzeżonymi: CrossFit to znak towarowy, którego używają tylko licencjonowane boksy. Klub z podobnym treningiem pisze o treningu funkcjonalnym albo cross treningu — zresztą tak też szuka wiele osób. Jak takie podstrony wyglądają i jak łączą się z grafikiem, pokazuję na stronie ",
          link("strona dla studia fitness", "/pl/strona-dla-studia-fitness"),
          ".",
        ),

        h2("Cennik karnetów w pozycjonowaniu siłowni: „karnet na siłownię cena” i „bez umowy”"),
        p("Frazy z ceną wpisuje ktoś, kto porównuje kluby w tym tygodniu: „karnet na siłownię cena Wrocław”, „siłownia bez umowy”, „karnet studencki”, „wejście jednorazowe”. Klub, który pisze „ceny w recepcji”, oddaje te osoby konkurencji. Do wyszukiwarki trafia podstrona z cenami — choćby z ceną „od” — opłatą wpisową, karnetem z umową i bez niej, zniżkami dla studentów i seniorów oraz jasną informacją o wypowiedzeniu."),
        p("W polskich klubach chętnych przybywa w styczniu, wiosną przed wakacjami i we wrześniu, a latem wielu klubowiczów wyjeżdża. Nowa podstrona potrzebuje tygodni, żeby się wybić, więc ofertę noworoczną publikuję w listopadzie, a wakacyjny karnet bez umowy — w maju."),

        h2("Pozycjonowanie sieci klubów fitness: podstrona i wizytówka dla każdej lokalizacji"),
        p("Mieszkaniec Bemowa nie chce czytać o klubie na Ursynowie, nawet jeśli to ta sama marka. Każdy klub sieci dostaje więc własną podstronę: adres, dojazd tramwajem i parking, godziny, strefy (wolne ciężary, cardio, sala zajęć, sauna), zajęcia prowadzone akurat tam, kierownika, zdjęcia tej sali i opinie z jej wizytówki, a wizytówka prowadzi właśnie tutaj. Podstrony dzielnic bez klubu mają sens tylko z faktami — ile minut z osiedla, które zajęcia mieszczą się w przerwie od pracy. Dwadzieścia kopii z podmienioną nazwą Google uzna za strony przejściowe."),

        h2("Opinie o siłowni w Google: jak prosić klubowiczów, żeby pisali konkretnie"),
        p("W opiniach o siłowniach często wracają te same tematy: tłok w godzinach szczytu, czystość szatni i to, jak klub traktuje wypowiedzenie umowy. Czyta je każdy, kto waha się między dwoma klubami, a Google bierze je pod uwagę, układając Mapy. Pomaga, gdy klubowicze piszą konkretnie — o trenerce, która poprawiła im martwy ciąg, o porannej grupie seniorów — bo takie słowa pokrywają się z tym, czego szukają następni. W klubie sprawdza się:"),
        li("prośba po pierwszym miesiącu albo po ukończonym wyzwaniu, wysłana SMS-em lub w aplikacji klubu"),
        li("żadnych rabatów ani gadżetów za opinię — zasady Google tego zabraniają"),
        li("odpowiedź na każdą opinię, również o zamrożeniu karnetu czy wypowiedzeniu umowy, z informacją, co zrobiliście"),

        h2("Niezależny klub a sieci Zdrofit, CityFit i McFIT w wynikach wyszukiwania"),
        p("Na samo „siłownia” w dużym mieście wysoko są zwykle kluby sieci: znana marka, ogólnopolska strona, setki opinii. Walka o tę jedną frazę rzadko się opłaca. Lepiej wygrać te, w których klub osiedlowy ma przewagę: trener na sali w cenie karnetu, małe grupy, strefa damska, ring bokserski, zajęcia dla seniorów, parking pod klubem, recepcja, która zna imiona. Podstrony, które mówią o tym wprost, z cenami i prawdziwymi zdjęciami, przyciągają osoby porównujące kluby i dają im powód, by zapłacić więcej niż w sieci."),

        h2("Facebook, Instagram czy Google: skąd siłownia osiedlowa bierze nowych klubowiczów"),
        p("Polskie kluby osiedlowe często żyją z Facebooka — grup mieszkańców, wydarzeń, postów o nowych zajęciach — i z Instagrama. To dobre kanały dla tych, którzy już Was znają. Ktoś, kto dopiero wprowadził się na osiedle albo właśnie postanowił zacząć ćwiczyć, wpisuje jednak pytanie w Google albo w ChatGPT. Dlatego posty linkują do konkretnych podstron — grafiku, zapisów, cennika — a nie do strony głównej. W analityce widać wtedy, które posty przyprowadzają zapisy, a podstrony, na które kierują, są gotowe także na ruch z Google."),

        h2("Pozycjonowanie siłowni w ChatGPT i Google AI Overviews (GEO, AEO)"),
        p("Pytania „która siłownia na Mokotowie honoruje Medicover Sport i ma saunę”, „gdzie w Poznaniu jest pilates na reformerach dla początkujących” czy „czy zdrowy kręgosłup pomoże na ból pleców” ludzie zadają dziś również ChatGPT, Perplexity i podsumowaniom AI w Google. W odpowiedzi pada kilka klubów i powody, dla których asystent je wybrał. Tę pracę nazywa się GEO (generative engine optimization) lub AEO (answer engine optimization); w klubie fitness sprowadza się do czterech rzeczy:"),
        li("ceny, honorowane karty, godziny, strefy i udogodnienia zapisane tekstem, a nie tylko na grafice z Facebooka"),
        li("odpowiedzi na pytania początkujących na podstronach zajęć, podpisane imieniem instruktora"),
        li("dane strukturalne dla klubu, każdej lokalizacji, godzin i zajęć"),
        li("te same dane w wizytówce, u operatorów kart i w katalogach siłowni, bo asystenci porównują źródła"),
        p(
          "Na starcie i kilka miesięcy później pytam ChatGPT i Perplexity o kluby w Twojej okolicy i notuję, które wymieniają zamiast Twojego. Metodę opisuje strona ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Raport z pozycjonowania siłowni: zapisy i karnety z systemu klubowego"),
        p("Właściciela klubu interesuje, ilu ludzi przyszło, a nie które miejsce zajmuje fraza. Dlatego raport co miesiąc pokazuje zapisy na trening próbny, wejścia jednorazowe, telefony z wizytówki i nowe karnety, które przyszły z wyszukiwarki i Map — osobno dla każdego klubu. Formularze i linki zapisu przekazują źródło do systemu klubowego, takiego jak eFitness, Perfect Gym czy WodGuru, więc recepcja nie musi pytać, skąd ktoś się o Was dowiedział. Podstrony, które dają ruch bez zapisów, poprawiam albo łączę z innymi."),

        h2("Ile kosztuje pozycjonowanie siłowni"),
        li("Audyt SEO siłowni — strona, wizytówki, kluby w okolicy, karty sportowe i odpowiedzi AI: jednorazowo, od 1000 zł."),
        li("Jednorazowe prace — podstrony zajęć, karnetów i lokalizacji, porządek w wizytówkach, dane strukturalne, śledzenie zapisów: od 1000 do 3000 zł."),
        li("Stałe pozycjonowanie siłowni lub studia fitness — nowe podstrony, Mapy, opinie, widoczność w AI i raport w karnetach: od 3500 zł miesięcznie."),
        p(
          "Małe studio w mniejszym mieście często dostaje większość efektu z audytu i kilku dobrych podstron. Jak prowadzę stałą współpracę, opisuję na stronie ",
          link("strategia i optymalizacja SEO", "/pl/oferty/strategia-i-optymalizacja-seo"),
          ", zakres audytu — na stronie ",
          link("audyt SEO strony internetowej", "/pl/oferty/audyt-seo-strony-internetowej"),
          ", a wszystkie ceny są w ",
          link("cenniku", "/pl/cennik"),
          ". Osobną stronę mają trenerzy z własną działalnością: ",
          link("strona internetowa dla trenera personalnego", "/pl/strona-internetowa-dla-trenera-personalnego"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie siłowni: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje pozycjonowanie siłowni?", "Audyt od 1000 zł, jednorazowe prace od 1000 do 3000 zł, stałe pozycjonowanie od 3500 zł miesięcznie. Stałą kwotę podaję, gdy znam liczbę klubów, zajęcia do zapełnienia i to, skąd dziś przychodzą klubowicze."],
          ["Po jakim czasie pozycjonowanie siłowni daje nowych klubowiczów?", "Poprawki w wizytówce i nowe opinie potrafią podnieść klub w Mapach po kilku tygodniach. Nowe podstrony zajęć i lokalizacji potrzebują zwykle trzech–sześciu miesięcy, dlatego ofertę na styczeń przygotowuję jesienią."],
          ["Czy wystarczy, że klub jest w wyszukiwarce obiektów MultiSport?", "To dobre źródło dla posiadaczy karty, ale nie dla osób bez karty ani dla tych, którzy szukają konkretnych zajęć w Google. Własna strona i wizytówka docierają do wszystkich i mówią o klubie więcej niż krótki opis u operatora."],
          ["Czy mała siłownia osiedlowa ma szansę z siecią?", "Na ogólne frazy rzadko. Na frazy z dzielnicą, zajęciami, kartą albo udogodnieniem — często tak, bo tam wygrywa konkretna odpowiedź, a nie marka."],
          ["Czy podawać ceny karnetów na stronie?", "Jeśli możesz — tak, przynajmniej ceny „od”. Frazy z ceną wpisują osoby tuż przed decyzją, a asystent AI poleci klub z cenami tylko wtedy, gdy umie je odczytać."],
          ["Czy ChatGPT może polecić moją siłownię?", "Tak, gdy ktoś pyta o klub lub zajęcia w okolicy. Asystent wybiera kluby, o których znajduje spójne, sprawdzalne fakty. Wzmianki nie zagwarantuje nikt; porównuję odpowiedzi przed startem i po kilku miesiącach."],
          ["Czy pracujesz z klubami spoza Warszawy?", "Tak. Pracuję zdalnie, na danych wyszukiwań z Twojego miasta, więc klub z Rzeszowa czy Szczecina obsługuję tak samo jak warszawski. Rozmawiamy po polsku — przez telefon, wideo albo WhatsApp."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie siłowni: co mi wysłać"),
        p(
          "Wyślij nazwę klubu, adres strony i link do wizytówki w Mapach Google, liczbę lokalizacji, zajęcia i karnety, które chcesz sprzedawać lepiej, honorowane karty sportowe, nazwę systemu klubowego i to, skąd dziś przychodzą klubowicze. Odpowiem, co poprawiłbym najpierw i za jaką stałą cenę. Skorzystaj z ",
          link("formularza powyżej", "#quote"),
          " albo napisz na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
