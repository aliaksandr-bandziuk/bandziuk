// Landing page fixture: Tworzenie stron internetowych w Toruniu (PL), group
// «tworzenie-stron-internetowych-torun». City page, stage 3 pilot (BRIEF.md).
// Phrases (ref/city-keywords.md, ref/pl-cities.md, volumes/month, Poland):
// tworzenie stron internetowych toruń 140 · agencja reklamowa toruń 210 (mixed
// intent, named once in an H2 as an alternative). Required by the brief, not
// measured for Toruń: strony internetowe Toruń, projektowanie stron Toruń,
// cennik. PAA: Jaka jest cena projektowania stron internetowych? (H2 + FAQ).
// Intent (ref/intent-check-pl-cities.md): SEO vs websites 0 shared URLs in
// every city tested → two pages; «tworzenie», «projektowanie», «strony
// internetowe» share 0–1 URLs → one page carries all of them in H2/FAQ.
// Toruń vs Bydgoszcz: separate SERPs.
// City part: UNESCO Old Town tourism (hotels, apartments, restaurants, guides),
// UMK students and the businesses that serve them, services for residents;
// districts (Stare Miasto, Chełmińskie Przedmieście, Rubinkowo, Na Skarpie,
// Podgórz) and the powiat (Lubicz, Obrowo, Wielka Nieszawka), Ciechocinek;
// English and German versions for tourists, English for Erasmus students.
// NOT on this page: pozycjonowanie (/pl/pozycjonowanie-stron-torun); sklepy
// internetowe and e-commerce (not offered); social media (not offered);
// Bydgoszcz (its own page); Warsaw pages.
import { p, h2, h3, li, ol, link, k } from "./pt";

export const tworzenieStronInternetowychTorunPl = {
  lang: "pl",
  group: "tworzenie-stron-internetowych-torun",
  slug: "tworzenie-stron-internetowych-torun",
  title: "Tworzenie stron internetowych Toruń",
  heading: "Tworzenie stron internetowych w Toruniu",
  excerpt:
    "Tworzenie stron internetowych w Toruniu dla hoteli, apartamentów, restauracji i firm usługowych: projekt graficzny w cenie, rezerwacja lub telefon jednym dotknięciem, wersja angielska i niemiecka dla gości, panel do samodzielnej edycji — od 3000 zł, z jedną osobą od projektu do uruchomienia.",
  seo: {
    metaTitle: "Strony internetowe Toruń: projekt od 3000 zł | Bandziuk",
    metaDescription:
      "Strony internetowe w Toruniu dla hoteli, restauracji i firm usługowych: projekt w cenie, wersje dla turystów, szybkie na telefonie. Od 3000 zł, ceny w cenniku.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Projekt + wykonanie, jedna cena", "Od 3000 zł", "Wersje PL · EN · DE"],
  heroPhonePoints: ["Zarezerwuj bezpośrednio", "Menu i godziny", "5 minut od Rynku", "Zadzwoń · WhatsApp"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Prosta strona internetowa dla firmy z Torunia, projekt w cenie", price: 3000, maxPrice: 6000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Pełna strona z podstronami usług lub pokoi, wersjami językowymi, rezerwacją lub formularzem i integracjami, projekt w cenie", price: 8500, currency: "PLN", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co dostajecie ze stroną internetową w Toruniu",
      items: [
        { _key: k("o"), iconName: "image", title: "Projekt z prawdziwymi zdjęciami", text: "Wasze wnętrza, potrawy i realizacje zamiast pocztówek" },
        { _key: k("o"), iconName: "plug", title: "Rezerwacja, menu lub formularz", text: "Połączone z systemem, którego już używacie" },
        { _key: k("o"), iconName: "message-circle", title: "Wersje dla gości z zagranicy", text: "Angielska i niemiecka, z własnymi adresami podstron" },
        { _key: k("o"), iconName: "phone", title: "Telefon i dojazd jednym dotknięciem", text: "Dla turysty z telefonem w ręku na Starówce" },
        { _key: k("o"), iconName: "file-text", title: "Ceny, godziny i menu edytujecie sami", text: "Prosty panel, także z telefonu" },
        { _key: k("o"), iconName: "sparkles", title: "Czytelna dla Google i asystentów AI", text: "Fakty tekstem, dane strukturalne firmy" },
      ],
      prices: [
        { _key: k("r"), label: "Prosta strona firmowa", value: "3000–6000 zł", note: "projekt w cenie" },
        { _key: k("r"), label: "Pokoje lub usługi, języki, rezerwacja", value: "od 8500 zł", note: "projekt w cenie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: strony internetowe, które zaprojektowałem i zbudowałem",
      subtitle:
        "Wielojęzyczny serwis agencji edukacyjnej dla dziesięciu krajów i strony lokalnych firm z Warszawy: firmy remontowo-inwestycyjnej z projektem premium, warsztatu samochodowego, pracowni renowacji felg i przechowalni opon. Łączy je z firmą z Torunia to, że klient — mieszkaniec, student albo gość z zagranicy — ma na telefonie szybko znaleźć ofertę, cenę i kontakt w zrozumiałym dla siebie języku.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "full-multilingual-website-development-and-seo-for-student-services",
        "renovation-and-investment-website-with-premium-design",
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena strony internetowej dla firmy z Torunia",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: proponuję listę podstron i podaję stałą cenę w widełkach z cennika.",
      contextLabel: "Nazwa firmy lub obecna strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Jaką firmę prowadzicie?", options: ["Hotel, pensjonat lub apartamenty", "Restaurację lub kawiarnię", "Firmę usługową", "Szkołę, gabinet lub inną działalność"] },
        { _key: k("z"), question: "Jakie wersje językowe są potrzebne?", options: ["Tylko polska", "Polska i angielska", "Polska, angielska i niemiecka", "Inny zestaw języków"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Tworzenie stron internetowych w Toruniu to dla mnie cała droga od pomysłu do działającej strony: plan podstron, projekt graficzny, teksty, programowanie i uruchomienie. Robię to sam, więc z firmą z Torunia rozmawia ta sama osoba, która potem buduje stronę. Pracuję z Warszawy, a współpraca toczy się online — rozmowy wideo, projekt do komentowania w przeglądarce i stała cena ustalona przed startem."),

        h2("Strony internetowe Toruń: dla kogo je buduję"),
        p("Toruń ma nietypową mieszankę klientów. Starówka wpisana na listę UNESCO, dom Kopernika i pierniki przyciągają turystów przez cały rok, więc dużo firm żyje z gości: hotele, apartamenty, restauracje, kawiarnie, przewodnicy, organizatorzy warsztatów piernikowych i wycieczek. Uniwersytet Mikołaja Kopernika sprawia, że w mieście mieszka wielu studentów, a wokół nich działają szkoły językowe, korepetytorzy, kluby fitness i wynajem mieszkań. Do tego dochodzą firmy obsługujące mieszkańców Torunia i gmin wokół miasta."),
        p("Każda z tych grup potrzebuje innej strony. Dlatego zaczynam od pytania, kim jest Wasz klient i w jakiej sytuacji trafia na stronę, a dopiero potem proponuję układ podstron."),

        h2("Strona internetowa dla firmy z Torunia: co jest w cenie"),
        p("Niezależnie od wariantu strona dostaje to samo zaplecze: projekt na telefon i komputer, hosting z certyfikatem SSL i kopiami zapasowymi, podpiętą domenę, tytuły i opisy podstron, dane strukturalne, Google Analytics 4 uruchamiany dopiero po zgodzie, Search Console i formularz z klauzulą RODO. Strona jest budowana w Next.js albo WordPressie — wybieram to, co będzie Wam wygodniej edytować. Domena, kod i treści są Wasze, a po uruchomieniu nie ma abonamentu: dobrze zrobiona strona potrafi działać miesiącami bez żadnej interwencji, a za zmiany płacicie tylko wtedy, gdy o nie poprosicie."),

        h2("Strona internetowa hotelu, apartamentu lub restauracji na toruńskiej Starówce"),
        p("Turysta szuka noclegu albo miejsca na obiad na telefonie, często już w Toruniu, idąc ulicą. Strona obiektu turystycznego musi mu odpowiedzieć w kilka sekund:"),
        li("ile minut pieszo do Rynku Staromiejskiego i czy jest parking — to dwa najczęstsze pytania gości"),
        li("zdjęcia pokoi albo dań, które naprawdę podajecie, zamiast ogólnych widoków miasta"),
        li("menu zapisane tekstem, a nie jako zdjęcie karty, z cenami i informacją o alergenach"),
        li("przycisk rezerwacji bezpośredniej albo telefon widoczny bez przewijania"),
        li("wersja angielska i niemiecka z tymi samymi informacjami co polska"),
        p("Rezerwacja bezpośrednia przez stronę oszczędza prowizję, którą płacicie portalom. Podłączam silnik rezerwacji lub system stolików, z którego już korzystacie, zamiast budować nowy."),
        h3("Sezon, długie weekendy i wydarzenia w mieście na stronie obiektu"),
        p("Ruch w Toruniu rośnie w sezonie letnim, w długie weekendy, w okresie świątecznym i przy większych wydarzeniach w mieście. Strona powinna pozwalać Wam samodzielnie dodać ofertę na taki termin — pakiet noclegowy, menu okolicznościowe, warsztaty — w kilka minut, bez proszenia programisty. Taka podstrona z datą i ceną odpowiada też na pytania, które goście zadają wtedy wyszukiwarce."),
        p(
          "Widoczność takich obiektów w Google opisuję na stronach ",
          link("pozycjonowanie strony hotelu", "/pl/pozycjonowanie-strony-hotelu"),
          " i ",
          link("pozycjonowanie restauracji", "/pl/pozycjonowanie-restauracji"),
          ".",
        ),

        h2("Strona dla firmy z Torunia, która obsługuje studentów i mieszkańców"),
        p("Szkoła językowa, gabinet fizjoterapii, salon fryzjerski czy biuro rachunkowe na Chełmińskim Przedmieściu albo na Rubinkowie ma inne zadanie niż hotel. Klient zwykle mieszka niedaleko, porównuje dwie–trzy firmy i chce wiedzieć, ile zapłaci, kiedy są wolne terminy i jak dojechać. Strona pokazuje cennik lub widełki, godziny, zespół i opinie, a zapis albo telefon są w zasięgu kciuka. Studenci z zagranicy, którzy przyjeżdżają na wymianę, szukają takich usług po angielsku, więc krótka wersja angielska często się opłaca."),
        p(
          "Ogólny opis strony dla małej firmy usługowej jest na stronie ",
          link("strona internetowa dla małej firmy", "/pl/strona-internetowa-dla-malej-firmy"),
          ".",
        ),

        h2("Toruń, powiat toruński i Bydgoszcz osobno: jak zaplanować podstrony miejscowości"),
        p("Firmy, które dojeżdżają do klienta — instalatorzy, ekipy remontowe, firmy sprzątające — pracują często w Toruniu i w gminach wokół: w Lubiczu, Obrowie, Wielkiej Nieszawce czy w Ciechocinku. Podstrona dla miejscowości ma sens, gdy macie tam klientów i możecie napisać coś konkretnego: jakie usługi tam wykonujecie, jak szybko dojeżdżacie, jakie realizacje tam powstały. Strony różniące się tylko nazwą miejscowości nie działają, więc ich nie robię."),
        h3("Klienci z Bydgoszczy to osobna podstrona, nie dopisek w tytule"),
        p("Toruń i Bydgoszcz mają w Google osobne wyniki wyszukiwania. Jeśli obsługujecie oba miasta, każde dostaje własną podstronę z treścią dla tamtejszych klientów, a nie jedną stronę z dwiema nazwami w nagłówku. Dotyczy to zwłaszcza firm, które mają klientów w obu miastach i w gminach między nimi, na przykład w Solcu Kujawskim, który leży między nimi: tam, gdzie macie realne zlecenia, warto to opisać konkretnie."),

        h2("Tworzenie stron internetowych Toruń: lokalne studio, agencja reklamowa czy jeden wykonawca"),
        p("W wynikach dla tworzenia stron w Toruniu zobaczycie lokalne studia, agencje reklamowe, które robią też druk i media społecznościowe, ogólnopolskie firmy z podstroną dla Torunia i Oferteo. Agencja reklamowa ma sens, gdy potrzebujecie całej oprawy firmy naraz. Jeśli potrzebna jest strona, która przyprowadza rezerwacje i telefony, jeden wykonawca to krótsza droga od pytania do zmiany i cena bez kosztów obsługi klienta. Nie robię sklepów internetowych, logo ani druku."),

        h2("Projektowanie stron internetowych w Toruniu: projekt graficzny w cenie"),
        p("Projekt jest częścią wykonania strony, nie osobną pozycją na fakturze. Zaczynam od widoku na telefonie i od dwóch ekranów — strony głównej i najważniejszej podstrony, na przykład pokoju albo usługi — a po Waszych uwagach projektuję resztę. Unikam toruńskich klisz: zdjęcia murów i pierników ze stocku nie mówią gościowi nic o Waszym obiekcie. Lepiej działają Wasze wnętrza, zespół i widok z okna, nawet zrobione telefonem w dobrym świetle."),
        p("Gość z zagranicy często ogląda stronę na komórkowym internecie w roamingu, więc zdjęcia są zmniejszane automatycznie, a najważniejsze informacje — adres, telefon, rezerwacja — pojawiają się, zanim doładuje się galeria. Kontrast tekstu i wielkość przycisków dobieram tak, żeby stronę dało się wygodnie obsłużyć jedną ręką, także osobom starszym, które przyjeżdżają do Torunia na wycieczki."),

        h2("Wersje językowe strony dla gości odwiedzających Toruń"),
        p("Wersja angielska jest potrzebna prawie każdemu obiektowi turystycznemu, a niemiecka tym, którzy goszczą turystów z Niemiec. Każda wersja ma własne adresy podstron i oznaczenia hreflang, żeby Google pokazywał gościowi właściwy język. Tłumaczone są podstrony, z których goście naprawdę korzystają — pokoje, menu, dojazd, rezerwacja — a formularz i informacja o RODO są w tym samym języku."),
        p(
          "Więcej o stronach w kilku językach na stronie ",
          link("tworzenie stron wielojęzycznych", "/pl/oferty/tworzenie-stron-wielojezycznych"),
          ".",
        ),

        h2("Strona internetowa, którą ChatGPT i Google AI Overviews potrafią przeczytać"),
        p("Goście pytają ChatGPT albo Perplexity: „hotel w Toruniu blisko Starówki z parkingiem”, „restauracja w Toruniu z daniami wegańskimi”. Mieszkańcy — o szkołę językową albo fizjoterapeutę w swojej dzielnicy. Asystent poleca firmy, o których może przeczytać fakty, więc odległości, godziny, języki obsługi, ceny i udogodnienia zapisuję tekstem, a dane strukturalne opisują firmę tak samo jak wizytówka Google."),
        p(
          "Dalsza praca nad widocznością w asystentach jest opisana na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ", a pozycjonowanie w Google — na stronie ",
          link("pozycjonowanie stron w Toruniu", "/pl/pozycjonowanie-stron-torun"),
          ".",
        ),

        h2("Jak powstaje strona dla firmy z Torunia: pięć etapów online"),
        ol("Brief: kim są Wasi klienci, co sprzedajecie, jakie pytania słyszycie najczęściej. Wystarczy rozmowa wideo albo wiadomość głosowa."),
        ol("Lista podstron i stała cena w widełkach z cennika."),
        ol("Projekt strony głównej i jednej podstrony, uzgadniany w przeglądarce."),
        ol("Wykonanie, teksty i wersje językowe; Wy sprawdzacie fakty, ceny i nazwy."),
        ol("Uruchomienie z domeną, analityką po zgodzie i Search Console oraz instrukcja edycji."),

        h2("Tworzenie stron internetowych Toruń: cennik i cena projektowania strony"),
        li("Prosta strona — strona główna, kilka podstron usług lub pokoi, kontakt, formularz zgodny z RODO: od 3000 do 6000 zł."),
        li("Pełna strona — podstrony usług, pokoi lub miejscowości, wersje językowe, rezerwacja albo rozbudowany formularz, integracje: od 8500 zł."),
        p(
          "Projekt graficzny jest w cenie, a widełki są w ",
          link("cenniku", "/pl/cennik"),
          ". Po uruchomieniu nie płacicie mi abonamentu — tylko hosting i domenę u dostawcy. Więcej o tym, jak pracuję, na stronie ",
          link("tworzenie stron internetowych", "/pl/oferty/tworzenie-stron-internetowych"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Tworzenie stron internetowych w Toruniu: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Jaka jest cena projektowania stron internetowych w Toruniu?", "Prosta strona kosztuje od 3000 do 6000 zł, pełna — z wersjami językowymi, rezerwacją lub podstronami miejscowości — od 8500 zł. Projekt graficzny jest w cenie. Po krótkim opisie firmy podaję stałą kwotę."],
          ["Czy strona hotelu może przyjmować rezerwacje bez prowizji?", "Tak. Podłączam silnik rezerwacji, którego używacie, albo prosty formularz zapytania o termin. Rezerwacje przez stronę nie są obciążone prowizją portali."],
          ["Czy strona restauracji może mieć menu, które sami zmieniamy?", "Tak. Menu jest zapisane tekstem i edytujecie je w panelu, także z telefonu, razem z cenami i godzinami otwarcia."],
          ["Ile trwa stworzenie strony internetowej?", "Prosta strona powstaje zwykle w dwa–cztery tygodnie, a pełna z wersjami dla turystów w cztery–osiem, zależnie od tłumaczeń i zdjęć. Obiektom turystycznym radzę zacząć przed sezonem."],
          ["Kreator stron czy strona na zamówienie?", "Kreator wystarczy przy prostej wizytówce. Strona na zamówienie opłaca się, gdy potrzebujecie wersji językowych, rezerwacji, kilku usług lub miejscowości i pełnej kontroli nad SEO."],
          ["Do kogo należy strona?", "Do Was: domena, kod i treści. Możecie w każdej chwili przenieść ją do innego hostingu albo wykonawcy."],
          ["Czy firma z Torunia może zamówić stronę zdalnie?", "Tak. Pracuję z Warszawy, a cała współpraca — rozmowy, projekt, poprawki i uruchomienie — odbywa się online, w ustalonych etapach."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów stronę internetową w Toruniu: co mi wysłać"),
        p(
          "Wyślijcie nazwę firmy, link do obecnej strony albo wizytówki Google, rodzaj działalności, potrzebne języki i informację, czy chcecie przyjmować rezerwacje lub zapisy przez stronę. Kilka zdjęć wnętrz, dań albo realizacji pomoże mi zaproponować projekt. Odpowiem listą podstron i stałą ceną. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
