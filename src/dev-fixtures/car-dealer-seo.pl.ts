// Landing page fixture: Pozycjonowanie salonu samochodowego (PL), group
// «car-dealer-seo». New page. Market version for Polish salony samochodowe
// (niezależne i autoryzowane), komisy, place z autami używanymi i importerzy
// aut z Niemiec — not a translation of car-dealer-seo.en.
// Semantic core: ref/creative-leisure.md has no measured PL phrases for car
// dealers (PL «On topic» lists only trainers). H1 and headings carry the slug
// phrase «pozycjonowanie salonu samochodowego» (brief), several H2 also
// «komis», plus buyers’ words: komis samochodowy [miasto], auta używane, auta
// z Niemiec, salon samochodowy, dealer. EN reference: car dealer seo 480, seo for car dealer 70.
// Intent: ref/intent-check-creative-leisure.md — EN «car dealer seo» vs «car
// dealer website design» 0 of 10 shared URLs → SEO and website are separate
// pages; sibling /pl/strona-internetowa-dla-komisu-samochodowego (linked). No
// PL SERP check.
// Angle: podstrony aut indexed (rendering, adresy, tytuły, mapa strony z
// importu), sprzedane auta, podstrony marek/modeli vs filtry, import z Niemiec
// as buyer questions (opłacony / zarejestrowany / do rejestracji, akcyza —
// general, historiapojazdu.gov.pl, raporty VIN), RRSO in credit ads (ustawa o
// kredycie konsumenckim — general), Car/Offer/AutoDealer, wizytówka per plac,
// Otomoto/OLX vs own site, opinie (fake reviews — nieuczciwe praktyki
// rynkowe, general), salon autoryzowany and importer rules, AI answers.
// NOT on this page: the site itself — import ofert, karta auta, VAT marża
// display, formularze kredytu/leasingu i zamiany, szybkość zdjęć, gotowe
// platformy (/pl/strona-internetowa-dla-komisu-samochodowego — sibling);
// Mapy Google in depth (/pl/oferty/pozycjonowanie-lokalne); serwis
// (/pl/oferty/pozycjonowanie-strony-warsztatu-samochodowego-warszawa —
// neighbour, linked once); reklamy i zarządzanie ogłoszeniami (not offered).
// Owner’s rules: every SEO page covers AI search (GEO, AEO); never say there
// are no clients from the visitor’s segment; silna konkurencja od 5500 zł
// allowed for car dealers.
import { p, h2, h3, li, link, k } from "./pt";

export const carDealerSeoPl = {
  lang: "pl",
  group: "car-dealer-seo",
  slug: "pozycjonowanie-strony-salonu-samochodowego",
  title: "Pozycjonowanie strony salonu samochodowego",
  heading: "Pozycjonowanie strony salonu samochodowego",
  excerpt:
    "Zajmuję się pozycjonowaniem salonów samochodowych i komisów: podstrony aut, które Google indeksuje, zanim auto zejdzie z placu, podstrony marek i modeli z nazwą miasta, artykuły o autach z Niemiec, wizytówka Google każdego placu z opiniami i widoczność w odpowiedziach AI.",
  seo: {
    metaTitle: "SEO dla komisu i salonu samochodowego | Bandziuk",
    metaDescription:
      "Pozycjonowanie strony salonu samochodowego i komisu: podstrony aut w Google, modele z miastem, auta z Niemiec, wizytówka placu, opinie i AI. Audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Oferta, plac i odpowiedzi AI", "Audyt od 1000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Komis samochodowy Radom", "Audi A4 2019 · 142 tys. km", "Opinie 4,8 ★ w Google", "Poleca ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO salonu samochodowego lub komisu: indeksowanie ofert, podstrony aut i modeli, dane strukturalne, wizytówki, opinie, odpowiedzi AI", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO dla salonu lub komisu: szablony podstron aut, sprzedane auta, podstrony modeli, dane strukturalne, śledzenie zapytań", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie strony salonu samochodowego lub komisu", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje pozycjonowanie strony salonu samochodowego",
      items: [
        { _key: k("o"), iconName: "search", title: "Podstrony aut widoczne w Google", text: "Stały adres, tytuł z marką i modelem, świeża mapa strony" },
        { _key: k("o"), iconName: "layers", title: "Podstrony marek i modeli z miastem", text: "Z tego, co masz na placu; filtry poza indeksem" },
        { _key: k("o"), iconName: "file-text", title: "Artykuły o autach z Niemiec", text: "Opłacony, zarejestrowany, historia i przebieg" },
        { _key: k("o"), iconName: "map-pin", title: "Wizytówka Google każdego placu", text: "Godziny, zdjęcia placu, opinie z odpowiedziami" },
        { _key: k("o"), iconName: "sparkles", title: "Salon polecany przez ChatGPT i AI w Google", text: "Fakty o placu i opinie, które asystent może powtórzyć" },
        { _key: k("o"), iconName: "trending-up", title: "Zapytania i oględziny w raporcie", text: "Z podziałem na place i podstrony aut" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO salonu samochodowego", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe pozycjonowanie salonu lub komisu", value: "od 3500 zł / mies.", note: "oferta, modele, wizytówki, AI", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: serwisy z katalogiem ofert i firmy motoryzacyjne, które budowałem i pozycjonowałem",
      subtitle:
        "Serwis Cyprus VIP Estates to katalog, który zbudowałem od zera — oferty z filtrami i mapą, pięć języków z hebrajskim, zapytania trafiające do CRM — i którego pozycjonowanie prowadzę co miesiąc; utrzymanie w Google zmieniającej się bazy ofert to ta sama praca co przy autach z placu. Trzy projekty to warszawskie firmy żyjące z kierowców: warsztat samochodowy, przy którym pracowałem nad SEO lokalnym, Mapami Google i podstronami usług, pracownia renowacji felg Felgilab z nową stroną na WordPressie, podstronami usług i cen, oraz przechowalnia opon ze stroną, której teksty SEO właściciel zmienia sam. Piąty to ScanM2, firma skanowania laserowego 3D: strona przebudowana na WordPressie z zachowaniem projektu, ruch organiczny wzrósł 29 razy. Salon i komis biorą z tego katalog czytelny dla wyszukiwarki, plac widoczny na mapie i zapytania, które da się policzyć.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "build-and-optimize-a-multilingual-real-estate-platform",
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
        "architecture-website-rebuild-and-seo-scan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena pozycjonowania strony salonu samochodowego",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: co poprawiłbym najpierw — podstrony aut, podstrony modeli czy wizytówki — i za jaką stałą cenę.",
      contextLabel: "Nazwa salonu, komisu lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Jak działa Twoja firma?", options: ["Salon lub komis z jednym placem", "Kilka placów", "Sprowadzam auta z Niemiec", "Salon autoryzowany"] },
        { _key: k("z"), question: "Skąd dziś przychodzi najwięcej zapytań?", options: ["Otomoto", "OLX", "Telefony z Map Google", "Własna strona"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Pozycjonowanie strony salonu samochodowego to moja usługa dla niezależnych i autoryzowanych salonów, komisów, placów z autami używanymi i firm sprowadzających auta: praca nad tym, żeby kupujący znajdowali w Google Twoje auta, Twój plac i nazwę firmy, a potem dzwonili, pisali albo umawiali się na oględziny. Robię to sam, więc osoba, która znajduje błąd w podstronach aut, sama go naprawia."),

        h2("Pozycjonowanie strony salonu samochodowego i komisu: co obejmuje usługa"),
        p("Większość kupujących zaczyna od Otomoto i OLX i tam porównuje ceny. Do Google przychodzą z trzema rodzajami pytań: o konkretny model w okolicy („Toyota Corolla kombi używana Lublin”), o rodzaj firmy („komis samochodowy Radom”, „auta z Niemiec Białystok”) i o Twoją nazwę — bo widzieli ogłoszenie i chcą sprawdzić, z kim mają do czynienia. Pracuję nad:"),
        li("podstronami aut i listą ofert, które Google indeksuje na bieżąco"),
        li("podstronami marek, modeli, typów nadwozia i przedziałów cenowych"),
        li("wizytówką Google każdego placu i opiniami"),
        li("wynikami na nazwę salonu lub komisu"),
        li("odpowiedziami ChatGPT, Perplexity i podsumowaniami AI w Google"),
        p(
          "Budowę samej strony — import ofert, kartę auta, formularze kredytu i zamiany — opisuję na stronie ",
          link("strona internetowa dla komisu samochodowego", "/pl/strona-internetowa-dla-komisu-samochodowego"),
          ".",
        ),

        h2("Podstrony aut w Google: indeksowanie oferty salonu samochodowego i komisu"),
        p("Każde auto na placu ma swoją podstronę i to na nią trafia ktoś, kto wpisuje w Google model z rocznikiem. W stronach salonów i komisów powtarzają się te same błędy:"),
        li("lista aut wczytywana z zewnętrznego widżetu albo w ramce, więc Google widzi pustą stronę lub cudzą domenę"),
        li("adresy w stylu ?id=4711 zamiast stałego adresu z marką, modelem i rocznikiem"),
        li("tytuł „Oferta” na każdej podstronie zamiast „Volkswagen Passat 2.0 TDI 2018 — Kalisz”"),
        li("opis przeklejony z Otomoto słowo w słowo, taki sam jak na kilku portalach"),
        li("mapa strony aktualizowana od święta, choć auta schodzą co tydzień"),
        p("Poprawiam to w szablonach jeden raz: podstrony renderowane po stronie serwera, stały adres każdego auta, tytuły składane z danych auta i miasta, mapa strony odświeżana przy każdym imporcie i kilka zdań od Ciebie przy aucie — o stanie, historii serwisowej, tym, komu je polecasz — których nie ma nigdzie indziej."),
        h3("Auto zarezerwowane i sprzedane: co dzieje się z jego podstroną"),
        p("W komisie auto ma zwykle trzy stany: dostępne, zarezerwowane po wpłacie zadatku i sprzedane. Każdy z nich podstrona pokazuje inaczej. Zarezerwowane zostaje w wynikach z wyraźną etykietą i propozycją podobnych aut — klient wie, że może zapytać, czy rezerwacja nie przepadnie. Sprzedane przez kilka dni prowadzi do podobnych aut z placu i do podstrony modelu, a potem zwraca kod 410 albo przekierowuje na model. Nikt nie musi o tym pamiętać: stan przychodzi razem z importem ofert."),

        h2("Podstrony marek i modeli w pozycjonowaniu strony salonu samochodowego"),
        p("Na frazy w rodzaju „używana Skoda Octavia Kraków”, „SUV do 50 tys. zł Łódź” czy „auta 7-osobowe Rzeszów” pojedyncze auto rzadko zdąży się wypozycjonować — zanim Google je doceni, jest już sprzedane. Wygrywają podstrony, które trwają: marka, model, nadwozie, budżet. Wyszukiwarka ofert na stronie salonu potrafi jednak wygenerować tysiące adresów z filtrów, na które robot traci czas zamiast na nowe auta. Układ, który ustawiam:"),
        li("podstrony do indeksowania dla marek i modeli, które regularnie masz na placu, typów nadwozia i przedziałów cenowych, każda z krótkim tekstem pisanym pod nią"),
        li("pozostałe kombinacje filtrów wyłączone z indeksu tagiem kanonicznym albo noindex"),
        li("podstrona modelu, która nie znika, gdy chwilowo nie masz takiego auta — z zapisem na powiadomienie zamiast pustej listy"),
        p("Lista podstron wynika z tego, co faktycznie sprzedajesz: komis z dostawczakami potrzebuje innych podstron niż plac z małymi autami dla młodych kierowców."),

        h2("Auta sprowadzone z Niemiec: pytania kupujących w pozycjonowaniu komisu"),
        p("Duża część aut w polskich komisach pochodzi z importu, głównie z Niemiec, a kupujący mają przy tym konkretne obawy. Wpisują: „jak sprawdzić auto sprowadzone z Niemiec”, „co znaczy auto opłacone”, „auto zarejestrowane czy do rejestracji”, „jak sprawdzić przebieg auta z Niemiec”. Rzeczowe artykuły na te pytania, pisane z Twojej praktyki i podpisane nazwą komisu, przyciągają ludzi, którzy za chwilę wybiorą auto:"),
        li("co w Twoich ogłoszeniach oznacza „opłacony”, „zarejestrowany” i „do rejestracji”, kto ponosi akcyzę i koszty rejestracji — ogólnie i z datą aktualizacji"),
        li("jak sprawdzić historię: historiapojazdu.gov.pl dla aut zarejestrowanych w Polsce, raporty VIN z zagranicznych baz dla importu"),
        li("jak wyglądają u Ciebie oględziny i jazda próbna, czy można przyjechać z mechanikiem albo podjechać na stację diagnostyczną"),
        p("Artykuły o kredycie i leasingu to reklama: jeśli podajesz koszt kredytu konsumenckiego, ustawa wymaga między innymi RRSO na reprezentatywnym przykładzie. Opisuję to ogólnie, a szczegóły potwierdza Twój partner finansowy — to nie jest porada prawna."),

        h2("Dane strukturalne dla salonu samochodowego: Car, Offer i AutoDealer"),
        p("W salonie i komisie dane strukturalne obejmują dwie rzeczy:"),
        li("na podstronie auta: typ Car z VIN, marką, modelem, rocznikiem, przebiegiem, paliwem i skrzynią oraz Offer z ceną w złotych i dostępnością"),
        li("dla placu: AutoDealer z nazwą, adresem, telefonem, godzinami i linkami do profili"),
        p("Specjalne wyniki z ofertami aut Google pokazuje na razie głównie w USA, ale w Polsce dane strukturalne też pracują: pomagają wyszukiwarce i asystentom AI zrozumieć, że to konkretne auto z ceną, a nie artykuł o modelu. Warunek jest jeden — muszą zgadzać się z tym, co widać. Cena „do negocjacji” w tekście i liczba w kodzie albo auto sprzedane w ogłoszeniu i dostępne w danych to sprzeczność, przez którą Google ignoruje znaczniki. Dlatego generuję je z tego samego importu co podstronę."),

        h2("Wizytówka Google salonu samochodowego i komisu: osobny profil dla każdego placu"),
        p("Auto kupuje się zwykle w promieniu dojazdu, a frazy „komis samochodowy w pobliżu” czy „auta używane Gniezno” rozstrzyga mapa. Każdy plac pod innym adresem ma własną wizytówkę z prawdziwymi godzinami, a na stronie — podstronę z adresem, dojazdem, zdjęciami placu, osobami do kontaktu i autami, które tam stoją. Ważne:"),
        li("kategoria zgodna z działalnością — komis lub dealer samochodów używanych, a w salonie kategoria dealera marki"),
        li("zdjęcia prawdziwego placu i biura, nie z banku zdjęć"),
        li("te same nazwa, adres i telefon na stronie, w wizytówce, na Otomoto i w katalogach firm"),
        p(
          "Całą pracę nad obecnością w Mapach Google znajdziesz na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Otomoto, OLX czy własna strona: gdzie pozycjonowanie strony salonu samochodowego ma sens"),
        p("Otomoto i OLX pozostaną głównym źródłem zapytań większości salonów i komisów. Płacisz jednak za pakiety ogłoszeń i wyróżnienia, obok Twojego auta stoją oferty konkurencji, a często wygrywa po prostu niższa cena. Pozycjonowanie pracuje na wyszukiwaniach, których portale nie mają na własność:"),
        li("nazwa komisu wpisywana przez ludzi, którzy widzieli ogłoszenie i chcą Cię sprawdzić albo zadzwonić bezpośrednio"),
        li("frazy lokalne i typ firmy: „komis samochodowy Ostrów Wielkopolski”, „auta z Niemiec pod Poznaniem”"),
        li("pytania kupujących, na które komis odpowie lepiej niż portal"),
        p("Zapytanie z własnej strony nie kosztuje nic za kontakt i nie ma obok ofert konkurencji. Celem jest rosnący udział strony w zapytaniach, przy dalej działających ogłoszeniach."),

        h2("Opinie o komisie i salonie samochodowym: zaufanie kupujących auto używane"),
        p("Kupujący auto używane boi się przede wszystkim cofniętego licznika i ukrytych szkód, więc przed przyjazdem czyta opinie o komisie. Liczy się stały napływ, a nie kilkanaście opinii w jednym tygodniu:"),
        li("prośba o opinię po wydaniu auta, wysłana przez osobę, która je sprzedała, z bezpośrednim linkiem"),
        li("odpowiedź na każdą opinię, także krytyczną, rzeczowo i bez danych klienta"),
        li("na stronie fakty, które opinie potwierdzają: VIN przy każdym aucie, zgoda na oględziny u mechanika, jasno opisana odpowiedzialność za wady"),
        li("żadnych opinii pisanych przez pracowników ani kupowanych — zabraniają tego zasady Google i przepisy o nieuczciwych praktykach rynkowych"),

        h2("Salon autoryzowany a niezależny komis: zasady importera w pozycjonowaniu"),
        p("Niezależny komis decyduje o swojej stronie sam — i często ma tani szablon bez żadnej optymalizacji ofert. Salon autoryzowany zwykle działa w ramach wytycznych importera marki: strona na platformie wskazanej przez importera albo w jego domenie, obowiązkowe podstrony modeli i promocji, zasady identyfikacji wizualnej. Pozycjonowanie salonu zaczyna się od sprawdzenia, co platforma pozwala zmieniać — tytuły, teksty, własne podstrony, przekierowania, analitykę — i skupia się na tym, czego importer nie narzuca:"),
        li("auta używane i z programów aut certyfikowanych"),
        li("podstrony lokalizacji i miejscowości, z których przyjeżdżają klienci"),
        li("ludzie w salonie, jazdy próbne, odkup auta w rozliczeniu"),
        p(
          "Jeśli przy salonie albo komisie działa serwis, jego pozycjonowanie opisuję na stronie ",
          link("pozycjonowanie warsztatu samochodowego", "/pl/oferty/pozycjonowanie-strony-warsztatu-samochodowego-warszawa"),
          ".",
        ),

        h2("Pozycjonowanie strony salonu samochodowego w ChatGPT i Google AI Overviews (GEO, AEO)"),
        p("Kupujący pytają już ChatGPT, Perplexity albo podsumowania AI w Google: „sprawdzony komis z autami z Niemiec koło Katowic”, „czy ten komis jest uczciwy”, „gdzie kupić używane kombi do 40 tys. zł we Wrocławiu”. Ta praca ma dwie nazwy: GEO, czyli generative engine optimization, i AEO, czyli answer engine optimization. W salonie i komisie składają się na nią:"),
        li("co sprzedajesz, gdzie, w jakich godzinach i na jakich warunkach — zapisane zwykłymi zdaniami na stronie"),
        li("te same dane firmy na stronie, w wizytówce, na Otomoto i w katalogach"),
        li("regularne opinie, w których klienci wymieniają auto i obsługę"),
        li("dane strukturalne AutoDealer i Car zgodne z podstronami"),
        p(
          "Na początku współpracy i po kilku miesiącach sprawdzam, co asystenci mówią o Twojej firmie i kogo polecają zamiast niego. Więcej na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Ile kosztuje pozycjonowanie strony salonu samochodowego"),
        li("Audyt SEO salonu lub komisu — indeksowanie ofert, szablony podstron aut i modeli, dane strukturalne, wizytówki, opinie i odpowiedzi AI: od 1000 zł, jednorazowo."),
        li("Jednorazowe prace — szablony podstron aut, zasady dla sprzedanych aut, podstrony modeli, dane strukturalne, śledzenie telefonów i formularzy: od 1000 do 3000 zł."),
        li("Stałe pozycjonowanie strony salonu samochodowego lub komisu — nowe podstrony modeli i artykuły, wizytówki, opinie, odpowiedzi asystentów AI i raporty: od 3500 zł miesięcznie; w Warszawie, Krakowie, Wrocławiu, Poznaniu czy Trójmieście, gdzie o te same frazy walczą duże grupy dealerskie, od 5500 zł miesięcznie."),
        p(
          "W raporcie liczę telefony, zapytania i umówione oględziny z wyszukiwarki dla każdego placu, a pozycje fraz pokazuję obok tych liczb. Pełne widełki są w ",
          link("cenniku", "/pl/cennik"),
          ", szczegóły audytu na stronie ",
          link("audyt SEO strony internetowej", "/pl/oferty/audyt-seo-strony-internetowej"),
          ", a ogólnie o tym, jak prowadzę pozycjonowanie, piszę na stronie ",
          link("strategia i optymalizacja SEO", "/pl/oferty/strategia-i-optymalizacja-seo"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie strony salonu samochodowego: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje pozycjonowanie strony salonu samochodowego?", "Audyt kosztuje od 1000 zł, a pojedyncze prace od 1000 do 3000 zł, w obu przypadkach jednorazowo. Stała współpraca zaczyna się od 3500 zł miesięcznie, a w dużych miastach, gdzie konkurują grupy dealerskie, od 5500 zł. Konkretną kwotę podaję po krótkim opisie placu i oferty — tak samo dla salonu, jak dla komisu."],
          ["Ile trwa pozycjonowanie salonu lub komisu, zanim przyjdą zapytania?", "Poprawki szablonów podstron aut i wizytówki potrafią dać efekt w kilka tygodni, bo nowe auta szybciej trafiają do Google. Podstrony modeli i artykuły zwykle potrzebują trzech–sześciu miesięcy, w dużych miastach dłużej."],
          ["Po co salonowi lub komisowi pozycjonowanie, skoro auta są na Otomoto i OLX?", "Portale zostają, ale tam płacisz za ogłoszenia i stoisz obok konkurencji. Pozycjonowanie zwiększa udział zapytań z własnej strony, bez opłaty za kontakt — z wyszukiwań nazwy firmy, fraz lokalnych i pytań kupujących."],
          ["Czy usuwać ze strony sprzedane auta?", "Nie od razu. Podstrona zostaje przez krótki czas z oznaczeniem „sprzedany”, podobnymi autami i linkiem do modelu, a potem zwraca kod 410 albo przekierowuje na podstronę modelu. Działa to automatycznie przy imporcie ofert."],
          ["Czy każdy plac powinien mieć osobną wizytówkę Google?", "Tak, jeśli ma własny adres, godziny i ludzi na miejscu. Do tego osobna podstrona lokalizacji na stronie, z autami, które tam stoją."],
          ["Czy ChatGPT poleca komisy samochodowe?", "Tak, gdy ktoś o to zapyta. Asystent wybiera firmy, o których znajduje sprawdzalne fakty: co sprzedają, gdzie, na jakich warunkach, i opinie. Nikt nie zagwarantuje miejsca w odpowiedzi, ale to część mojej pracy: na starcie i po kilku miesiącach zapisuję, co asystenci odpowiadają o Twoim placu."],
          ["Czy pracujesz z salonami i komisami spoza Warszawy?", "Tak, z całej Polski — od salonów w dużych miastach po komisy przy drogach krajowych w mniejszych miejscowościach. Pracuję zdalnie, opierając się na danych o wyszukiwaniach w Twoim mieście i powiecie."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie strony salonu samochodowego lub komisu: co mi wysłać"),
        p(
          "Prześlij adres strony i wizytówek w Mapach Google, adresy placów, liczbę aut, które zwykle masz w ofercie, informację, skąd strona bierze ogłoszenia (Otomoto, program do komisu, ręcznie), czy sprowadzasz auta sam i czy jesteś salonem autoryzowanym. Odpowiem, co poprawiłbym najpierw i za jaką stałą cenę. Skorzystaj z ",
          link("formularza powyżej", "#quote"),
          " albo napisz na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
