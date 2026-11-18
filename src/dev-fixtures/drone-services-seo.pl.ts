// Landing page fixture: SEO for drone service companies (PL),
// group «drone-services-seo». Same backbone as the EN version: «usługi
// dronem» hides three different businesses, only two of them pay.
//
// Measured: «usługi dronem» 320, «inspekcje dronem» 170, «pomiary dronem» 70,
// «fotogrametria z drona» 50. Per service-wording.md GEO/AEO measure 310 in
// Polish, so they stay in H3 and body, not in H2.
import { p, h2, h3, li, link, k } from "./pt";

export const droneServicesSeoPl = {
  lang: "pl",
  group: "drone-services-seo",
  slug: "pozycjonowanie-strony-firmy-uslug-dronowych",
  title: "SEO i pozycjonowanie strony firmy usług dronowych",
  heading:
    "SEO i pozycjonowanie strony firmy usług dronowych: oddzielamy inspekcje i pomiary od wesel i piszemy do klienta przemysłowego",
  excerpt:
    "Zajmuję się SEO firm dronowych. Pod hasłem „usługi dronem” kryją się trzy różne biznesy i tylko dwa z nich płacą. Buduję podstrony pod inspekcje i pomiary, wpisuję pozwolenia i wynik jako fakty, a tanie zapytania przestają dzwonić. Lokalne SEO i widoczność w ChatGPT, Perplexity i Gemini. Audyt 1000 zł, stała praca 3500 zł miesięcznie.",
  seo: {
    metaTitle: "SEO firmy dronowej: inspekcje, pomiary i AI",
    metaDescription:
      "Pozycjonowanie strony firmy usług dronowych: podstrony pod inspekcje i pomiary, pozwolenia jako fakty, lokalne SEO i widoczność w ChatGPT.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Podstrona pod każdy typ lotu", "Widoczność w ChatGPT", "Audyt od 1000 zł"],
  heroPhonePoints: ["Inspekcja termowizyjna dachu", "Ortofotomapa i kubatury", "Pozwolenia na trudne obiekty", "ChatGPT podaje firmę"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO strony firmy usług dronowych: frazy, podstrony usług, wizytówka, widoczność w AI", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO: podstrony inspekcji i pomiarów, zasięg i pozwolenia, dane strukturalne", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie strony firmy dronowej", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Zakres pracy",
      title: "Pozycjonowanie strony firmy dronowej: z czego składa się praca",
      items: [
        { _key: k("o"), iconName: "file-text", title: "Podstrona pod każdy typ lotu", text: "Inspekcja, pomiary i mapowanie, termowizja, kubatury" },
        { _key: k("o"), iconName: "shield-check", title: "Pozwolenia i ubezpieczenie jako fakty", text: "Co, gdzie i nad czym wolno wam latać" },
        { _key: k("o"), iconName: "layers", title: "Wynik, nie nagranie", text: "Ortofotomapa, model 3D, raport termowizyjny, kubatura" },
        { _key: k("o"), iconName: "sparkles", title: "Widoczność w ChatGPT i Perplexity", text: "Tam pada pytanie, czy dron zastąpi rusztowanie" },
        { _key: k("o"), iconName: "map-pin", title: "Zasięg, w który dolatuje pilot", text: "Regiony i typy obiektów napisane wprost" },
        { _key: k("o"), iconName: "target", title: "Mniej tanich zapytań", text: "Strona przestaje przyciągać zlecenia, których nie chcecie" },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: usługi techniczne sprzedawane klientom, którzy nie ocenią samego lotu",
      subtitle:
        "Co łączy te projekty z firmą dronową: klient kupuje wynik, którego sam nie sprawdzi, zapytanie jest przypięte do konkretnego obiektu, a wzrost wziął się ze struktury i treści, nie z kupionych linków. Firma skanowania 3D i BIM, w której ruch z wyszukiwarki wzrósł dwudziestodziewięciokrotnie. Dostawca internetu rozliczany adres po adresie. Wielojęzyczna platforma nieruchomości. Warsztat i serwis z tym samym schematem zapytań.",
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
        h2("SEO firmy dronowej zaczyna się od rozdzielenia trzech biznesów, które kryją się pod jednym słowem"),
        p("Zajmuję się SEO firm dronowych. Praca zaczyna się od jednej waszej decyzji, którą ja wpisuję na stronę: które loty chcecie sprzedawać. Potem buduję podstronę pod każdy z nich, a strona przestaje mówić do wszystkich naraz."),
        p("„Usługi dronem” to trzy różne zawody. Łączy je tylko maszyna."),
        p("Inspekcje przemysłowe: dachy, kominy, turbiny, linie energetyczne. Kupuje je zarządca obiektu albo inżynier. Zlecenie się powtarza, a cenę ustala ryzyko i raport."),
        p("Pomiary i mapowanie: kubatury, ortofotomapy, postęp na budowie. Kupuje generalny wykonawca albo geodeta. Liczy się termin."),
        p("Foto i wideo: wesela, oferty mieszkań, materiały reklamowe. Tłoczno, tanio, decyduje cena."),
        p("Większość stron wrzuca wszystkie trzy w jedno miejsce. Potem właściciel narzeka na zapytania, a przychodzą z trzeciej grupy. Bo tylko tym językiem mówi jego strona."),
        li("osobna podstrona pod każdy typ zlecenia, który naprawdę chcecie;"),
        li("ani słowa o pracach, które bierzecie niechętnie;"),
        li("sprzęt i sensory jako możliwość, a nie nagłówek;"),
        li("wynik nazwany tak, jak nazywa go klient;"),
        li("widełki cenowe tam, gdzie tanie zapytanie je zobaczy i odejdzie."),

        h2("Pozycjonowanie podstron pod typ lotu: inspekcja, pomiary, mapowanie, termowizja"),
        p("Popyt siedzi po stronie przemysłowej. „Inspekcje dronem” to 170 wyszukiwań miesięcznie, „pomiary dronem” 70, „fotogrametria z drona” 50, a szerokie „usługi dronem” 320."),
        p("Nikt, kto wpisuje te frazy, nie szuka teledysku."),
        p("Każda podstrona odpowiada na inne pytanie. Klient inspekcji chce wiedzieć, czy wolno wam przelecieć nad pracującym zakładem i jak wygląda raport. Klient pomiarów pyta o dokładność, osnowę i formaty plików. Klient termowizji sprawdza, czy macie uprawnienia, o które zapyta ubezpieczyciel."),

        h2("Pozwolenia, ubezpieczenie i przestrzeń powietrzna: dowody, które muszą być na stronie"),
        p("W tej branży pozwolenie to połowa produktu."),
        p("Obiekt pod lotniskiem, lot nad ludźmi, zakład w strefie ograniczonej. Większość operatorów takich zleceń nie weźmie, a klient nie ma jak sprawdzić, kto weźmie."),
        p("Napiszcie to jako fakty: jakie kategorie macie, w jakich limitach pracujecie, na jaką sumę jesteście ubezpieczeni, ile trwa wniosek, gdy obiekt tego wymaga."),

        h3("Typ zlecenia, frazy klienta i dowód, który musi być na podstronie"),
      ],
    },
    {
      _type: "tableBlock",
      _key: k("b"),
      columns: ["Typ zlecenia", "Czego szuka klient", "Co musi udowodnić podstrona"],
      rows: [
        { _type: "tableRow", _key: k("r"), cells: ["Inspekcja przemysłowa i dachów", "„inspekcje dronem”, „przegląd dachu dronem”", "Nad czym wolno latać, format raportu, termin"] },
        { _type: "tableRow", _key: k("r"), cells: ["Termowizja", "„inspekcja termowizyjna dronem”, „przegląd fotowoltaiki”", "Uprawnienia, kiedy termowizja działa, a kiedy nie"] },
        { _type: "tableRow", _key: k("r"), cells: ["Pomiary i mapowanie", "„pomiary dronem”, „fotogrametria z drona”", "Dokładność, osnowa, formaty plików"] },
        { _type: "tableRow", _key: k("r"), cells: ["Kubatury i hałdy", "„pomiar kubatury dronem”", "Metoda, tolerancja, jak często da się powtórzyć"] },
        { _type: "tableRow", _key: k("r"), cells: ["Postęp budowy", "„monitoring budowy z drona”", "Cykl wizyt, co klient dostaje za każdym razem"] },
        { _type: "tableRow", _key: k("r"), cells: ["Obiekty w strefach ograniczonych", "„zgoda na lot dronem”, „lot przy lotnisku”", "Posiadane zgody, ubezpieczenie, czas na formalności"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Sprzedajemy wynik, a nie nagranie"),
        p("Operator sprzedaje lot. Klient kupuje dokument."),
        p("Ortofotomapę, na której da się mierzyć. Model 3D, który otworzy jego projektant. Raport termowizyjny z zaznaczonymi i opisanymi anomaliami. Kubaturę, którą można wpisać na fakturę."),
        p("Podstrona zbudowana wokół wyniku sprzedaje klientowi, który nigdy wcześniej nie wynajmował drona. Bo opisuje rzecz, którą on już rozumie."),

        h3("Podstrony, które odcinają zapytania, których nie chcecie"),
        p("Operatorzy tracą po kilka godzin w tygodniu na zapytania, których nigdy nie wycenią. Materiał dla małej firmy, zdjęcie do ogłoszenia, urodziny."),
        p("Przychodzą, bo strona je zaprasza. Zdejmijcie galerię z wesel, wpiszcie widełki za inspekcję, a struktura zapytań zmieni się w ciągu kilku tygodni. Odmowa na stronie jest tańsza niż odmowa przez telefon."),

        h3("Zlecenia powtarzalne: umowy, na których stoi firma dronowa"),
        p("Jedna inspekcja to zlecenie. Harmonogram inspekcji co kwartał to firma."),
        p("Dlatego jedna podstrona jest pisana do klienta, który potrzebuje powtarzalnych wizyt. Monitoring budowy, sezonowy przegląd dachów na kilku obiektach, cykl inspekcji, który zarządca wpisze do budżetu. Ta jedna podstrona jest warta więcej niż reszta serwisu razem."),

        h2("Widoczność w AI: ChatGPT, Perplexity, Gemini i AI Overviews"),
        p("„Czy dron sprawdzi dach zamiast rusztowania” i „jaką dokładność daje pomiar dronem” to pytania zadawane asystentowi. Przed wyszukiwarką."),
        p("Asystent odpowiada z czytelnego tekstu i podaje firmy, które na stronie zobowiązały się do liczb. Dokładność, termin, zakres uprawnień."),
        p("O tym, czy was wymieni, decydują trzy rzeczy: tekst zamiast PDF-ów i wklejonych filmów, liczby warte zacytowania, te same dane firmy wszędzie."),

        h3("GEO, AEO i LLM SEO w praktyce"),
        p("GEO i AEO to ta sama praca z dwóch stron: być wymienionym w wygenerowanej odpowiedzi, nie tylko na liście linków. LLM SEO to to samo w modelach językowych."),
        p("To pięć, sześć poprawek i prawie w całości pokrywają się z tym, co w ogóle pozwala stronie się wybić."),
        p(
          "Na istniejącej stronie to ",
          link("przygotowanie strony do wyszukiwania AI", "/pl/oferty/przygotowanie-strony-do-wyszukiwania-ai"),
          ". Gdy asystenci opisują firmę błędnie, to ",
          link("naprawa dezinformacji w AI", "/pl/oferty/naprawa-dezinformacji-ai"),
          ".",
        ),

        h2("Techniczne SEO: waga wideo, szybkość i formularz, który pyta o obiekt"),
        p("Strony dronowe są zbudowane z wideo, a wideo je zatrzymuje. Showreel włączający się sam na stronie głównej kosztuje więcej zapytań, niż przynosi."),
        p("Nagrania mogą zostać. Mają się tylko wczytywać wtedy, gdy ktoś o nie poprosi, a strona otwierać się na telefonie poniżej dwóch sekund."),
        p("Formularz ma pytać o lokalizację, typ obiektu, oczekiwany wynik i termin. Te cztery odpowiedzi mówią wam, czy lot jest w ogóle legalny, jeszcze przed telefonem."),
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Audyt SEO strony firmy dronowej",
      subtitle: "Przyślijcie adres strony, odpowiadam w jeden dzień roboczy: co ją blokuje i co zrobiłbym najpierw.",
      contextLabel: "Firma lub adres strony",
      contextPlaceholder: "Link albo nazwa",
      buttonText: "Wyślij i zamów audyt",
      note: "Albo napiszcie na WhatsApp — odpowiadam tak samo szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Jakich zleceń chcecie więcej?", options: ["Inspekcje przemysłowe", "Pomiary i mapowanie", "Termowizja", "Umowy powtarzalne"] },
        { _key: k("z"), question: "A jakich mniej?", options: ["Wesela i eventy", "Zdjęcia do ogłoszeń", "Drobne zlecenia jednorazowe", "Żadnych, biorę wszystko"] },
        { _key: k("z"), question: "Co jest dziś na stronie?", options: ["Jedna strona ze wszystkim", "Podstrona na usługę", "Głównie showreel", "Nie wiem"] },
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie strony firmy dronowej: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje SEO firmy dronowej?", "Audyt 1000 zł, prace jednorazowe 1000–3000 zł, stała praca 3500 zł miesięcznie. Kwota zależy od tego, ile typów lotu dostaje własną podstronę i czy stronę da się w ogóle edytować."],
          ["Naprawdę mamy zdjąć ze strony wesela i eventy?", "Jeśli chcecie zapytań przemysłowych, tak. Strona, która oferuje wszystko, mówi językiem najtańszego klienta i ten klient dzwoni. Zostawcie prace, za które chcecie brać pieniądze, i struktura zapytań zmieni się w kilka tygodni."],
          ["Czy klient znajdzie nas przez ChatGPT albo Perplexity?", "Tak. „Czy dron sprawdzi dach zamiast rusztowania” pada tam bez przerwy. Asystenci wymieniają firmy, które na stronie wyjaśniają metodę i podają liczby, a pomijają serwisy złożone z wideo bez tekstu."],
          ["Czym są GEO i AEO po ludzku?", "Tym, że asystent wymienia was w swojej odpowiedzi, a nie tylko na liście linków. Praca jest zwyczajna: tekst zamiast PDF-ów i wklejek, dane strukturalne, liczby na stronie, spójne dane firmy."],
          ["Musimy publikować nasze pozwolenia?", "Wypisane uprawnienia to najmocniejsza rzecz na takiej podstronie. Poważny klient od tego zaczyna, a większość konkurencji tego nie pisze."],
          ["Nasza strona to głównie showreel. To problem?", "Dla wyszukiwarki i dla asystentów tak, bo nie ma czego przeczytać. Nagrania mogą zostać. Przestają tylko być jedyną treścią i przestają się wczytywać, zanim ktoś o nie poprosi."],
          ["Kiedy to zamieni się w zapytania?", "Pierwszy ruch po około sześciu tygodniach, realny wzrost w horyzoncie trzech do sześciu miesięcy. Podstrony inspekcyjne ruszają szybciej niż pomiarowe, bo intencja jest pilniejsza."],
          ["Gwarantujecie pozycję?", "Nie i nikt nie może. Mogę napisać, co zostanie zmienione, w jakiej kolejności i co mierzymy po miesiącu i po trzech."],
          ["Kto pisze podstrony usług?", "Ja piszę pierwszą wersję, wy poprawiacie. Wiarygodne jest to, co wie tylko operator: które obiekty odrzucacie, ile naprawdę kosztuje pogoda w harmonogramie, nad czym nie polecicie."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów audyt SEO strony firmy dronowej: co mi przysłać"),
        p("Przyślijcie adres strony. Napiszcie, jakich zleceń chcecie więcej, jakich wolelibyście już nie brać i co wolno wam latać."),
        p("Odpowiadam w jeden dzień roboczy: co blokuje stronę, które podstrony przyciągają złe zapytania i co zrobiłbym najpierw."),
      ],
    },
  ],
};
