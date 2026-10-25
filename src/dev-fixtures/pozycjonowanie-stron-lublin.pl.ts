// Landing page fixture: Pozycjonowanie stron w Lublinie (PL), group
// «pozycjonowanie-stron-lublin». City landing, stage 3 pilot, PL only.
// Phrases (ref/city-keywords.md, ref/pl-cities.md; volumes/month, Poland):
// pozycjonowanie stron lublin 390 · agencja reklamowa lublin 390 · agencja
// marketingowa lublin 320 · seo lublin 170 · pozycjonowanie stron internetowych
// lublin 140 · pozycjonowanie stron www lublin 110 · lublin pozycjonowanie
// stron 30. «agencja SEO lublin», «audyt SEO lublin», «cennik» — no measured
// volume for Lublin, carried in H2/FAQ per BRIEF.md.
// PAA (pl-cities): Ile kosztuje pozycjonowanie strony w 2026? Ile kosztuje
// dobre pozycjonowanie strony? Jak długo trwa pozycjonowanie strony? Czy
// pozycjonowanie stron ma sens? Kto zajmuje się pozycjonowaniem stron? Jak
// samemu pozycjonować stronę? — all in H2 or FAQ.
// Intent (ref/intent-check-pl-cities.md; measured for Poznań, Kraków, Wrocław,
// Katowice, Łódź, pattern applied to Lublin): SEO vs websites 0 shared URLs →
// two pages; pozycjonowanie / agencja SEO / audyt SEO share 1–2 URLs → one page
// carries all; local SERPs fragmented between local studios, individual SEO
// specialists with city pages, national agencies with city pages and Oferteo.
// «agencja reklamowa / marketingowa lublin» = full-service agency intent;
// answered in the specialist-vs-agency H2, not sold (no ads, no social media).
// City part (≥ ⅓ of guide): largest city east of the Vistula and service
// centre of the region; universities and international (incl. English-taught
// medical) students; private medicine with patients from the whole
// voivodeship; fruit farming and food processing; IT and business services;
// districts (Czuby, Czechów, Felin, Wieniawa, LSM, Kalinowszczyzna, Sławin) and
// Świdnik, Lubartów, Łęczna, Puławy; Ukrainian- and English-language searches.
// NOT on this page: the website build (/pl/tworzenie-stron-internetowych-lublin);
// «tworzenie sklepów internetowych lublin» 90 / «sklepy internetowe lublin» 170 —
// e-commerce, not offered; wizytówka Google in depth (/pl/oferty/pozycjonowanie-lokalne);
// Google Ads, social media, print (not offered).
// Owner’s rules: every SEO page covers AI search (GEO, AEO); never say there are
// no clients from the visitor’s city or industry; remote work from Warsaw, no
// promise of visits; prices for a smaller city: stałe od 3500 zł.
import { p, h2, li, link, k } from "./pt";

export const pozycjonowanieStronLublinPl = {
  lang: "pl",
  group: "pozycjonowanie-stron-lublin",
  slug: "pozycjonowanie-stron-lublin",
  title: "Pozycjonowanie stron w Lublinie",
  heading: "Pozycjonowanie stron w Lublinie",
  excerpt:
    "Pozycjonowanie stron w Lublinie dla firm, które chcą telefonów z Google, Map Google i odpowiedzi AI: audyt, podstrony usług z dzielnicami i okolicznymi miastami, wizytówka, wersje ukraińska i angielska — robi to jeden specjalista, online, za ceny z cennika.",
  seo: {
    metaTitle: "Pozycjonowanie stron Lublin: audyt od 1000 zł | Bandziuk",
    metaDescription:
      "Pozycjonowanie stron w Lublinie: audyt, podstrony usług, wizytówka Google, wersje UA i EN, widoczność w AI. Jeden specjalista, jawne ceny. Audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Jeden specjalista od audytu do wdrożenia", "Audyt od 1000 zł", "Współpraca online"],
  heroPhonePoints: ["Dentysta Lublin Czuby", "Mapy Google", "Zadzwoń", "Poleca ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO strony firmy z Lublina: strona, wizytówka Google, konkurencja", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO: poprawki techniczne, podstrony usług i dzielnic, wersje językowe podstron", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie stron internetowych w Lublinie", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje pozycjonowanie stron w Lublinie",
      items: [
        { _key: k("o"), iconName: "search", title: "Audyt strony i wyników w Lublinie", text: "Lista poprawek ułożona według wpływu na zapytania" },
        { _key: k("o"), iconName: "layers", title: "Podstrony usług z dzielnicą lub miastem", text: "Czuby, Czechów, Świdnik, Lubartów — tam, gdzie pracujecie" },
        { _key: k("o"), iconName: "map-pin", title: "Wizytówka Google w Lublinie", text: "Kategorie, usługi, zdjęcia i dane zgodne ze stroną" },
        { _key: k("o"), iconName: "message-circle", title: "Podstrony po ukraińsku i angielsku", text: "Dla klientów, którzy szukają w swoim języku" },
        { _key: k("o"), iconName: "sparkles", title: "Widoczność w odpowiedziach AI", text: "ChatGPT, Perplexity i podsumowania AI w Google" },
        { _key: k("o"), iconName: "trending-up", title: "Miesięczny raport z telefonów i formularzy", text: "GA4 i Search Console, pozycje tylko obok" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO w Lublinie", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe pozycjonowanie stron w Lublinie", value: "od 3500 zł / mies.", note: "podstrony, wizytówka, AI, raporty", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: strony lokalnych firm, które budowałem i pozycjonowałem",
      subtitle:
        "Lokalne firmy usługowe, głównie z Warszawy — warsztat samochodowy, pracownia renowacji felg, przechowalnia opon i firma remontowo-inwestycyjna — oraz serwis agencji edukacyjnej dla dziesięciu krajów. Z firmą z Lublina łączy je to samo zadanie: klient z konkretnej dzielnicy albo miasta ma trafić z Google na podstronę swojej usługi, a w serwisie edukacyjnym także na wersję w swoim języku.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
        "renovation-and-investment-website-with-premium-design",
        "full-multilingual-website-development-and-seo-for-student-services",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena pozycjonowania strony w Lublinie",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: od czego zacząłbym pracę nad Waszą widocznością w Lublinie i za jaką stałą cenę.",
      contextLabel: "Nazwa firmy lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Gdzie są Wasi klienci?", options: ["W Lublinie", "W Lublinie i okolicznych miastach", "W całym województwie", "W Polsce i za granicą"] },
        { _key: k("z"), question: "W jakich językach obsługujecie klientów?", options: ["Tylko po polsku", "Także po ukraińsku", "Także po angielsku", "W kilku językach"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Pozycjonowanie stron w Lublinie to moja usługa dla firm, które chcą, żeby klienci z Lublina i okolic znajdowali je w Google, w Mapach Google i w odpowiedziach ChatGPT. Pracuję sam, z Warszawy: robię audyt, poprawiam kod i treści, piszę podstrony usług, porządkuję wizytówkę i co miesiąc pokazuję, ile telefonów i zapytań przyszło z wyszukiwarki. Z firmami z Lublina współpracuję online — rozmowa wideo, wspólny dokument z zadaniami i jasne etapy zamiast spotkań."),

        h2("Pozycjonowanie stron w Lublinie: co obejmuje usługa"),
        p("Pozycjonowanie stron internetowych w Lublinie to kilka zadań robionych razem, w kolejności, w której przynoszą najwięcej zapytań:"),
        li("audyt strony, wizytówki i wyników na Wasze frazy z Lublinem"),
        li("poprawki techniczne — indeksowanie, szybkość na telefonie, tytuły, dane strukturalne — w WordPressie, Next.js albo innym systemie"),
        li("podstrony usług pisane pod to, jak lublinianie naprawdę szukają, także z nazwą dzielnicy lub sąsiedniego miasta"),
        li("wizytówka Google zgodna ze stroną i z katalogami firm"),
        li("widoczność w ChatGPT, Perplexity i podsumowaniach AI w Google"),
        li("raport, w którym są telefony i formularze, a pozycje fraz tylko obok nich"),

        h2("Firmy z Lublina, którym pozycjonowanie stron internetowych przynosi klientów"),
        p("Lublin jest największym miastem na wschód od Wisły i ośrodkiem, do którego po usługi przyjeżdżają mieszkańcy całej Lubelszczyzny. Z tego wynikają typowe sytuacje, w których lubelskie firmy zaczynają myśleć o SEO:"),
        li("miasto akademickie — kilka uczelni publicznych i prywatnych tworzy stały popyt na wynajem pokoi, korepetycje, szkoły językowe, kursy i usługi wokół kampusów; każdy październik przynosi osoby, które nie znają jeszcze miasta i szukają wszystkiego w telefonie"),
        li("medycyna prywatna — gabinety stomatologiczne, fizjoterapia, diagnostyka i kliniki, do których przyjeżdżają pacjenci z Chełma, Zamościa czy Białej Podlaskiej; tu decyduje zaufanie, więc strona i opinie muszą odpowiedzieć na pytania przed wizytą"),
        li("rolnictwo i przetwórstwo żywności — region sadów i owoców miękkich ma wielu producentów, przetwórni i dostawców maszyn oraz środków dla rolnictwa, którzy szukają odbiorców hurtowych, także za granicą"),
        li("IT i usługi dla biznesu — firmy technologiczne, biura rachunkowe i doradcy, którzy walczą o klientów z całej Polski, a nie tylko z miasta"),
        p(
          "Dla dwóch z tych grup przygotowałem osobne opisy: ",
          link("pozycjonowanie strony gabinetu stomatologicznego", "/pl/pozycjonowanie-strony-gabinetu-stomatologicznego"),
          " i ",
          link("pozycjonowanie strony firmy produkcyjnej", "/pl/pozycjonowanie-strony-firmy-produkcyjnej"),
          ". Tutaj skupiam się na tym, co wspólne dla firm, których klienci są w Lublinie i okolicy.",
        ),

        h2("Jak klienci szukają w Lublinie: dzielnice, Świdnik, Lubartów i zapytania po ukraińsku"),
        p("W Lublinie wiele wyszukiwań zawiera nazwę dzielnicy albo osiedla: „dentysta Czuby”, „fryzjer Czechów”, „mechanik Felin”, „przedszkole Wieniawa”, „pizza LSM”. Ktoś z Kalinowszczyzny czy Sławina nie chce jechać przez całe miasto, więc firma, która ma na stronie jasno opisany adres, obszar działania i dojazd, ma przewagę nad tą, która pisze tylko „Lublin”."),
        p("Druga grupa to miejscowości wokół Lublina. Mieszkańcy Świdnika, Lubartowa, Łęcznej czy Puław często wpisują swoje miasto, a nie Lublin, nawet gdy są gotowi dojechać. Jeśli obsługujecie te miejscowości, warto mieć dla nich osobne, rzeczowe podstrony — z tym, jak wygląda dojazd albo usługa na miejscu — a nie kopie jednej treści z podmienioną nazwą, które Google pomija."),
        p("Trzecia sprawa to języki. W Lublinie mieszka, pracuje i studiuje wiele osób z Ukrainy, a na uczelniach, szczególnie medycznych, uczą się studenci z różnych krajów, którzy szukają po angielsku. Gabinet, szkoła językowa, biuro nieruchomości czy warsztat, który obsługuje te osoby, może mieć ukraińską lub angielską wersję najważniejszych podstron i pozycjonować ją osobno, na frazy, które ci klienci wpisują w swoim języku."),

        h2("Kto jest wysoko na „pozycjonowanie stron Lublin” i jak wygląda konkurencja"),
        p("Wyniki na frazy „pozycjonowanie stron Lublin”, „pozycjonowanie stron www Lublin” czy „SEO Lublin” są podzielone między lubelskie agencje reklamowe i marketingowe, małe studia robiące strony i SEO, ogólnopolskie agencje z podstroną dla Lublina, niezależnych specjalistów i serwis Oferteo, w którym na jedno zapytanie odpowiada kilku wykonawców. Żadna firma nie zajmuje większości wyników."),
        p("Dla Was ważniejsza jest konkurencja w Waszej branży. W Lublinie, jak w innych miastach tej wielkości, spotyka się dwie sytuacje. W usługach dla studentów i w gastronomii wyników jest dużo, a wysoko są portale i agregatory. W usługach specjalistycznych i B2B kilka porządnych podstron często wystarcza, żeby wyprzedzić firmy, które od lat mają tylko stronę główną. Audyt pokazuje, z którą sytuacją mamy do czynienia."),

        h2("Agencja SEO w Lublinie czy jeden specjalista: kto zajmuje się pozycjonowaniem stron"),
        p("W Lublinie często wpisuje się „agencja reklamowa Lublin” albo „agencja marketingowa Lublin”, szukając jednego wykonawcy od wszystkiego: ulotek, reklam, mediów społecznościowych i strony. Taka agencja ma sens, gdy potrzebujecie tych rzeczy naraz. Widocznością w Google zajmuje się w niej zwykle jeden specjalista SEO, a Wy rozmawiacie z opiekunem klienta, który przekazuje mu uwagi."),
        p("Pracuję inaczej: jedna osoba od audytu do wdrożenia. Ta sama osoba czyta dane z Search Console, pisze podstronę, zmienia kod i tłumaczy raport. Nie ma opiekuna klienta, a ceny są opublikowane, zanim napiszecie. Czego nie robię: kampanii Google Ads, prowadzenia mediów społecznościowych i materiałów drukowanych."),

        h2("Audyt SEO w Lublinie: od czego zaczynam pracę"),
        p("Audyt SEO dla firmy z Lublina zaczynam od tego, co widzi klient, który szuka w Lublinie:"),
        li("wyniki i Mapy Google dla Waszych usług z nazwą miasta, dzielnic i okolicznych miejscowości"),
        li("indeksowanie, błędy, powielone tytuły i szybkość strony na telefonie"),
        li("frazy, które już dają wejścia w Google Search Console, i usługi bez własnej podstrony"),
        li("zgodność nazwy, adresu i telefonu w wizytówce, na stronie i w katalogach"),
        li("to, co ChatGPT i podsumowania AI w Google mówią dziś o Waszej firmie"),
        p(
          "Wynikiem jest lista poprawek ułożona według wpływu. Część firm wdraża ją samodzielnie albo z własnym programistą. Zakres audytu opisuję na stronie ",
          link("audyt SEO strony internetowej", "/pl/oferty/audyt-seo-strony-internetowej"),
          ".",
        ),

        h2("Pozycjonowanie lokalne i wizytówka Google w Lublinie"),
        p("Przy wyszukiwaniach z nazwą Lublina albo z telefonu w mieście nad wynikami pojawia się blok Map Google z trzema firmami. O miejsce w nim decydują trafność wizytówki, odległość od szukającego i rozpoznawalność firmy. Odległości nie zmienicie — gabinet na Felinie nie będzie pierwszy dla kogoś stojącego na Starym Mieście — ale kategorie, usługi, zdjęcia, opinie i zgodność danych można poprawić."),
        p(
          "Firma z kilkoma punktami w Lublinie i okolicy dostaje osobną wizytówkę i osobną podstronę dla każdej lokalizacji. Całą pracę nad Mapami opisuję na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Pozycjonowanie stron w Lublinie w ChatGPT i Google AI Overviews (GEO, AEO)"),
        p("Coraz więcej osób zamiast wpisywać frazę pyta asystenta: „gdzie w Lublinie zrobić implant”, „szkoła angielskiego na Czubach dla dzieci”, „hurtownia owoców pod Lublinem”. Asystenci polecają firmy, o których znajdą konkretne, sprawdzalne fakty. Przygotowanie strony pod takie odpowiedzi to GEO (generative engine optimization), nazywane też AEO (answer engine optimization):"),
        li("usługi, ceny, obszar działania i języki obsługi zapisane zdaniami, które da się zacytować"),
        li("dane strukturalne łączące stronę z wizytówką Google"),
        li("odpowiedzi na pytania, które klienci zadają przez telefon, na podstronach usług"),
        li("te same dane firmy w katalogach, na portalach branżowych i w wizytówce"),
        p(
          "Na początku i po kilku miesiącach pracy zadaję asystentom te same pytania i porównuję odpowiedzi. Więcej na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Jak samemu pozycjonować stronę firmy z Lublina"),
        p("Sporo da się zrobić bez wykonawcy i bez kosztów:"),
        li("dać każdej usłudze podstronę z miastem w tytule, np. „Fizjoterapia po urazach — Lublin, Czechów”"),
        li("dopisać na stronie dzielnice i miejscowości, które obsługujecie, oraz dojazd"),
        li("prosić klientów o opinie w Google i odpowiadać na każdą"),
        li("podłączyć Google Search Console i raz w miesiącu sprawdzić, jakie frazy przyprowadzają ludzi"),
        p("Zlecić warto to, w czym błąd kosztuje dużo: przebudowę lub przeniesienie strony, problemy techniczne, wersje językowe i branże, w których lubelscy konkurenci od lat mają mocne strony."),

        h2("Jak długo trwa pozycjonowanie strony w Lublinie i czy ma sens"),
        p("Pierwsze efekty — po poprawkach technicznych, nowych tytułach i uporządkowaniu wizytówki — widać często po kilku tygodniach. Nowa podstrona usługi zwykle potrzebuje dwóch–czterech miesięcy, zanim zacznie przynosić stałe wejścia. W Lublinie konkurencja jest mniejsza niż w Krakowie czy Warszawie, więc w wielu branżach taki czas wystarcza, żeby firma była dobrze widoczna w swojej części miasta."),
        p("Czy pozycjonowanie ma sens? Tak, jeśli klienci wpisują Waszą usługę w Google, a większość lokalnych usług jest wyszukiwana. Gdy audyt pokaże, że Waszej usługi prawie nikt nie szuka, powiem to wprost i zaproponuję mniejszy zakres. Wyniki mierzę w telefonach, formularzach i rezerwacjach, w GA4 i Search Console."),

        h2("Pozycjonowanie stron Lublin: cennik na 2026 rok"),
        li("Audyt SEO strony, wizytówki i konkurencji w Lublinie: od 1000 zł, jednorazowo."),
        li("Jednorazowe prace — poprawki techniczne, nowe podstrony usług i dzielnic, dane strukturalne, wersja ukraińska lub angielska podstron: od 1000 do 3000 zł."),
        li("Stałe pozycjonowanie stron internetowych w Lublinie — podstrony, poprawki, wizytówka, widoczność w AI i raporty: od 3500 zł miesięcznie."),
        p(
          "Wszystkie widełki są w ",
          link("cenniku", "/pl/cennik"),
          ". Jeśli stronę trzeba najpierw zbudować od nowa, zajrzyjcie na stronę ",
          link("tworzenie stron internetowych w Lublinie", "/pl/tworzenie-stron-internetowych-lublin"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie stron w Lublinie: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje pozycjonowanie strony w Lublinie w 2026 roku?", "Dla firmy z Lublina stała praca kosztuje od 3500 zł miesięcznie, jednorazowy audyt od 1000 zł, a pojedyncze zadania od 1000 do 3000 zł. Dokładną cenę podaję po krótkim opisie firmy, usług i obszaru, na którym pracujecie."],
          ["Jak długo trwa pozycjonowanie strony?", "Pierwsze zmiany, w wizytówce Google i w technice strony, bywają widoczne po kilku tygodniach, a nowe podstrony usług zaczynają pracować zwykle po dwóch–czterech miesiącach. W branżach, w których w Lublinie dominują portale, trwa to dłużej."],
          ["Czy pozycjonowanie stron ma sens dla małej firmy z Lublina?", "Ma, jeśli klienci szukają Waszej usługi w Google albo w Mapach — a tak jest w większości usług lokalnych. Często wystarczają audyt i jednorazowe poprawki bez stałej umowy. Jeśli audyt pokaże, że nie warto, napiszę to."],
          ["Jak samemu pozycjonować stronę?", "Zacznijcie od osobnej podstrony dla każdej usługi z Lublinem lub dzielnicą w tytule, opisu obszaru działania, opinii w Google i Google Search Console. Technikę, przebudowę strony i wersje językowe najczęściej warto zlecić."],
          ["Kto zajmuje się pozycjonowaniem stron: agencja SEO czy specjalista?", "Pozycjonowaniem zajmują się zarówno agencje, jak i specjaliści pracujący samodzielnie. W agencji Wasze sprawy prowadzi opiekun, a zadania wykonuje ktoś inny; ja robię wszystko osobiście i publikuję ceny w cenniku."],
          ["Czy zajmujesz się wizytówką Google w Lublinie?", "Tak. Porządkuję kategorie, usługi, zdjęcia, godziny i dane firmy, żeby zgadzały się ze stroną i katalogami, a firmom z kilkoma punktami w Lublinie i okolicy zakładam osobne wizytówki i podstrony."],
          ["Jak wygląda współpraca z Lublinem, skoro pracujesz w Warszawie?", "W całości przez internet: na początek rozmowa wideo, potem lista zadań, którą widzicie na bieżąco, i raport po każdym miesiącu. Do pozycjonowania nie jest potrzebne biuro w Lublinie — liczą się strona, wizytówka i dane wyszukiwań dla Lublina, a do nich mam dostęp zdalnie."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie strony w Lublinie: co mi wysłać"),
        p(
          "Napiszcie, jak nazywa się firma, gdzie są jej strona i wizytówka w Mapach Google, które usługi mają przynosić więcej zapytań, w których dzielnicach Lublina i okolicznych miejscowościach pracujecie i w jakich językach rozmawiacie z klientami. Odpowiem, co poprawiłbym najpierw i za jaką stałą cenę. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
