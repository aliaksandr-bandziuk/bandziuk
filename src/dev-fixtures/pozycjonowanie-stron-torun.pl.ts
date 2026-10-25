// Landing page fixture: Pozycjonowanie stron w Toruniu (PL), group
// «pozycjonowanie-stron-torun». City page, stage 3 pilot (BRIEF.md).
// Phrases (ref/city-keywords.md, ref/pl-cities.md, volumes/month, Poland):
// pozycjonowanie stron toruń 2900 · agencja reklamowa toruń 210 ·
// pozycjonowanie stron internetowych toruń 140 · agencja social media toruń 50
// (not offered, not targeted). Required by the brief, not measured: agencja
// SEO Toruń, audyt SEO Toruń, wizytówka Google w Toruniu, cennik. PAA: Ile
// kosztuje pozycjonowanie strony w 2026? Ile kosztuje dobre pozycjonowanie
// strony? Jak długo trwa pozycjonowanie strony? Czy pozycjonowanie stron ma
// sens? Kto zajmuje się pozycjonowaniem stron? Jak samemu pozycjonować stronę?
// Intent (ref/intent-check-pl-cities.md): «pozycjonowanie stron toruń» vs
// «pozycjonowanie stron bydgoszcz» 0 of 10 shared URLs → Toruń is its own
// market; Bydgoszcz is mentioned only as a separate SERP. SEO vs websites:
// separate pages (brief). SERP: local studios and agencies, national agencies
// with city pages, individual SEO specialists, Oferteo.
// Smaller market than the big six → stałe pozycjonowanie od 3500 zł (no 5500).
// City part: UNESCO Old Town, Copernicus, pierniki, tourism and seasonality,
// UMK students, services for residents; districts (Starówka, Bydgoskie
// Przedmieście, Rubinkowo, Podgórz, Mokre) and gminy (Lubicz, Obrowo, Wielka
// Nieszawka, Chełmża), Ciechocinek nearby; tourists searching in English and
// German, without Polish letters.
// NOT on this page: the website build (/pl/tworzenie-stron-internetowych-torun);
// wizytówka Google in depth (/pl/oferty/pozycjonowanie-lokalne); social media,
// Google Ads and e-commerce (not offered); Bydgoszcz (its own page).
import { p, h2, h3, li, link, k } from "./pt";

export const pozycjonowanieStronTorunPl = {
  lang: "pl",
  group: "pozycjonowanie-stron-torun",
  slug: "pozycjonowanie-stron-torun",
  title: "Pozycjonowanie stron Toruń",
  heading: "Pozycjonowanie stron w Toruniu",
  excerpt:
    "Pozycjonowanie stron w Toruniu dla hoteli, restauracji, firm usługowych i wszystkich, którzy chcą klientów z miasta, powiatu i spośród turystów: audyt, podstrony usług, wizytówka Google, wersje dla gości z zagranicy i widoczność w odpowiedziach AI — jeden specjalista, ceny w cenniku.",
  seo: {
    metaTitle: "SEO Toruń: pozycjonowanie stron i Mapy Google | Bandziuk",
    metaDescription:
      "Pozycjonowanie stron internetowych w Toruniu: audyt, podstrony usług, wizytówka Google, turyści i odpowiedzi AI. Jeden specjalista, audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Specjalista SEO, nie agencja", "Audyt od 1000 zł", "Firmy z Torunia i powiatu"],
  heroPhonePoints: ["Apartament Toruń Starówka", "Wasza firma w Mapach Google", "Zarezerwuj · Zadzwoń", "Poleca ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO strony firmy z Torunia: strona, wizytówka Google, konkurencja", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO: poprawki techniczne, podstrony usług, wersje językowe, dane strukturalne", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie strony internetowej firmy z Torunia", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje pozycjonowanie stron w Toruniu",
      items: [
        { _key: k("o"), iconName: "search", title: "Audyt na tle toruńskiej konkurencji", text: "Lista poprawek według wpływu na telefony i rezerwacje" },
        { _key: k("o"), iconName: "map-pin", title: "Wizytówka Google przy Starówce i na osiedlach", text: "Kategoria, zdjęcia, godziny, obszar działania" },
        { _key: k("o"), iconName: "layers", title: "Podstrony usług i miejscowości", text: "Toruń, Lubicz, Obrowo, Chełmża — tam, gdzie pracujecie" },
        { _key: k("o"), iconName: "message-circle", title: "Wersje dla turystów i studentów z zagranicy", text: "Angielska lub niemiecka, z własnymi adresami" },
        { _key: k("o"), iconName: "sparkles", title: "Widoczność w odpowiedziach AI", text: "ChatGPT, Perplexity i podsumowania AI w Google" },
        { _key: k("o"), iconName: "trending-up", title: "Raport w telefonach i rezerwacjach", text: "Z podziałem na sezon i resztę roku" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO strony", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe pozycjonowanie strony w Toruniu", value: "od 3500 zł / mies.", note: "podstrony, wizytówka, AI, raporty", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: strony lokalnych firm, które budowałem i pozycjonowałem",
      subtitle:
        "Lokalne firmy usługowe z Warszawy — warsztat samochodowy, przechowalnia opon, pracownia renowacji felg, firma remontowo-inwestycyjna — i wielojęzyczny serwis agencji edukacyjnej dla dziesięciu krajów. Z firmą z Torunia łączy je to, że klient szuka usługi w swojej okolicy, często na telefonie i czasem w innym języku, a strona i wizytówka mają doprowadzić go do telefonu albo rezerwacji.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "auto-repair-seo-and-ux-boost",
        "tyre-storage-landing-page-with-editable-seo",
        "felgilab-wordpress-rebuild",
        "renovation-and-investment-website-with-premium-design",
        "full-multilingual-website-development-and-seo-for-student-services",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena pozycjonowania strony w Toruniu",
      subtitle: "Odpowiadam w ciągu jednego dnia roboczego: co poprawiłbym najpierw na stronie i w wizytówce Google, i za jaką stałą cenę.",
      contextLabel: "Nazwa firmy lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Kto jest Waszym głównym klientem?", options: ["Mieszkańcy Torunia i okolic", "Turyści i goście", "Studenci", "Firmy"] },
        { _key: k("z"), question: "Skąd teraz przychodzą klienci?", options: ["Z poleceń", "Z Google i Map Google", "Z portali rezerwacyjnych lub Oferteo", "Nie wiem"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Pozycjonowanie stron w Toruniu robię dla firm, które chcą być znajdowane przez mieszkańców miasta i powiatu, przez turystów odwiedzających Starówkę i przez studentów. Jestem jednym specjalistą SEO, nie agencją: sam przygotowuję audyt, wprowadzam poprawki w kodzie, piszę podstrony i porządkuję wizytówkę Google. Pracuję z Warszawy, a z toruńskimi firmami współpracuję online, z ustalonymi etapami i comiesięcznym raportem."),

        h2("Kto w Toruniu potrzebuje pozycjonowania stron internetowych: turystyka, studenci, usługi"),
        p("Toruń to miasto Kopernika, pierników i średniowiecznego Starego Miasta wpisanego na listę UNESCO. Przez cały rok przyjeżdżają tu turyści, wycieczki szkolne i goście wydarzeń, a z ruchu turystycznego żyją hotele, apartamenty na wynajem, restauracje, kawiarnie, przewodnicy i sklepy z pamiątkami. Drugą grupą są studenci Uniwersytetu Mikołaja Kopernika i ich potrzeby: mieszkania, korepetycje, szkoły językowe, siłownie, gastronomia."),
        p("Trzecia, największa grupa to zwykłe firmy usługowe obsługujące mieszkańców Torunia i okolicznych gmin: gabinety, warsztaty, biura rachunkowe, firmy remontowe, instalatorzy. Każda z tych grup szuka inaczej, więc pozycjonowanie strony hotelu przy Rynku Staromiejskim wygląda inaczej niż pozycjonowanie strony elektryka z Podgórza."),
        p(
          "Dla obiektów noclegowych i gastronomii przygotowałem osobne opisy: ",
          link("pozycjonowanie strony hotelu", "/pl/pozycjonowanie-strony-hotelu"),
          " i ",
          link("pozycjonowanie restauracji", "/pl/pozycjonowanie-restauracji"),
          ".",
        ),

        h3("Pozycjonowanie obiektów noclegowych w Toruniu a portale rezerwacyjne"),
        p("Hotele, pensjonaty i apartamenty na Starówce i wokół niej dostają dużo gości z portali rezerwacyjnych, ale za każdą taką rezerwację płacą prowizję. Pozycjonowanie strony obiektu ma przyprowadzić tę część gości, która szuka bezpośrednio: wpisuje nazwę hotelu, „nocleg Toruń blisko Starówki” albo „apartament z parkingiem Toruń”. Pomaga w tym podstrona dla każdego typu pokoju, informacja o parkingu i odległości od Rynku Staromiejskiego zapisana tekstem oraz przycisk rezerwacji bezpośredniej widoczny na telefonie."),

        h2("Jak szuka się firm w Toruniu: Starówka, osiedla i gminy powiatu toruńskiego"),
        p("Mieszkańcy wpisują nazwę dzielnicy albo osiedla, kiedy zależy im na bliskości: „dentysta Rubinkowo”, „fryzjer Bydgoskie Przedmieście”, „mechanik Podgórz”, „przedszkole Mokre”. Ludzie z gmin wokół miasta — Lubicza, Obrowa, Wielkiej Nieszawki, Chełmży — często szukają usługi z dopiskiem „Toruń”, bo wiedzą, że tam jest wybór. Firmy, które obsługują też Ciechocinek, Golub-Dobrzyń czy Aleksandrów Kujawski, potrzebują osobnych podstron dla tych miejscowości, z prawdziwą informacją o dojeździe i terminach."),
        h3("Toruń i Bydgoszcz to w Google dwa osobne rynki"),
        p("Miasta leżą blisko, ale wyniki wyszukiwania dla nich prawie się nie pokrywają: kto jest wysoko na usługę z dopiskiem „Toruń”, nie musi być widoczny dla „Bydgoszcz”. Firma, która chce klientów z obu miast, potrzebuje osobnej, rzetelnie opisanej podstrony dla każdego z nich, a nie jednej strony z dwiema nazwami w tytule."),
        h3("Turyści szukają po angielsku, po niemiecku i bez polskich znaków"),
        p("Goście z zagranicy wpisują „Torun hotel old town”, „Torun restaurant”, „gingerbread museum Torun” — bez litery „ń”. Turyści z Niemiec szukają po niemiecku. Strona hotelu czy restauracji, która ma tylko wersję polską, oddaje tych gości portalom rezerwacyjnym. Wersja angielska lub niemiecka z własnymi adresami podstron i oznaczeniami hreflang to często pierwsza rzecz, którą proponuję firmom turystycznym."),

        h2("Kto jest wysoko na „pozycjonowanie stron Toruń”: lokalne studia, agencje i specjaliści"),
        p("Na frazę o pozycjonowaniu stron w Toruniu wyświetlają się lokalne agencje reklamowe i studia, ogólnopolskie firmy SEO z podstroną dla Torunia, pojedynczy specjaliści z własnymi stronami i Oferteo. Lokalna agencja reklamowa często robi wszystko naraz: ulotki, banery, media społecznościowe i strony. To wygodne, gdy potrzebujecie całej reklamy firmy. Jeśli chodzi o samą widoczność w Google, warto zapytać, kto konkretnie będzie pracował nad stroną i jak będzie liczony efekt."),
        p("W Waszej branży sytuacja jest podobna. Na frazy turystyczne obok toruńskich hoteli i restauracji wyświetlają się portale rezerwacyjne, przewodniki i serwisy z opiniami. Na frazy usługowe — lokalne firmy, ogólnopolskie sieci i katalogi. Zanim zaproponuję zakres prac, sprawdzam, kto dokładnie zajmuje pierwszą dziesiątkę i Mapy na Wasze frazy w Toruniu, z jaką treścią i jak mocną stroną."),

        h2("Agencja SEO, agencja reklamowa w Toruniu czy jeden specjalista: czym się różni współpraca"),
        p("W agencji z klientem rozmawia opiekun, a pracę wykonują inne osoby. U mnie ta sama osoba sprawdza dane, wdraża poprawki w WordPressie, Next.js albo innym systemie, pisze podstrony i omawia raport. Ceny są opublikowane, nie podpisujecie umowy na rok z automatycznym przedłużeniem, a o każdej zmianie wiecie, zanim się pojawi. Nie prowadzę mediów społecznościowych ani kampanii Google Ads i nie robię sklepów internetowych — skupiam się na stronie, wizytówce i wynikach wyszukiwania."),

        h2("Audyt SEO strony firmy z Torunia"),
        p("Pierwszym krokiem jest audyt. Sprawdzam:"),
        li("czy Google widzi wszystkie ważne podstrony i czy nie ma błędów, które je blokują"),
        li("jak strona działa na telefonie — turysta na Starówce i student między zajęciami szukają właśnie tak"),
        li("które frazy już przyprowadzają ludzi według Google Search Console"),
        li("czy wizytówka Google, strona i portale mają te same dane"),
        li("kto jest wyżej na Wasze frazy w Toruniu i dlaczego"),
        p(
          "Wynik to lista poprawek według wpływu na telefony i rezerwacje. Szczegóły na stronie ",
          link("audyt SEO strony internetowej", "/pl/oferty/audyt-seo-strony-internetowej"),
          ".",
        ),

        h2("Wizytówka Google w Toruniu: Mapy przy Starówce i na osiedlach"),
        p("Na Starym Mieście na jednej ulicy działa kilka restauracji, kawiarni i hoteli, a turysta szuka „w pobliżu” z telefonem w ręku. O tym, kto pojawi się w Mapach, decydują kategoria, zdjęcia, opinie, godziny otwarcia i zgodność wizytówki ze stroną. Firmy z osiedli walczą raczej o swoją okolicę, a firmy dojeżdżające do klienta — o obszar działania obejmujący miasto i gminy powiatu."),
        p(
          "Całą pracę nad Mapami, opiniami i katalogami opisuję na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Sezon turystyczny w Toruniu a pozycjonowanie: kiedy zacząć pracę"),
        p("Hotele, apartamenty i restauracje w Toruniu mają wyraźny sezon, a nowa podstrona potrzebuje kilku miesięcy, żeby wejść wysoko. Dlatego pracę nad stroną obiektu turystycznego najlepiej zacząć zimą albo wczesną wiosną, a nie w lipcu. Firmy obsługujące studentów mają swój szczyt na początku roku akademickiego, a usługi dla mieszkańców — remonty, ogrzewanie, opony — swoje sezony. Plan prac układam pod ten kalendarz."),

        h2("Pozycjonowanie stron w Toruniu w ChatGPT i Google AI Overviews (GEO, AEO)"),
        p("Turyści coraz częściej pytają ChatGPT albo Perplexity, gdzie zjeść w Toruniu, jaki hotel wybrać blisko Starówki albo gdzie kupić pierniki, a mieszkańcy — o dobrego fizjoterapeutę czy warsztat. Asystent poleca firmy, o których znajduje konkretne fakty. Tę pracę nazywa się GEO (generative engine optimization) albo AEO (answer engine optimization):"),
        li("usługi, ceny, godziny, języki obsługi i odległość od Starówki zapisane zwykłymi zdaniami"),
        li("dane strukturalne firmy zgodne z wizytówką Google"),
        li("te same dane na stronie, w wizytówce i na portalach"),
        p(
          "Na początku i po kilku miesiącach zadaję asystentom te same pytania, które zadają goście, i porównuję odpowiedzi. Więcej na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Jak długo trwa pozycjonowanie strony w Toruniu i czy ma sens"),
        p("Poprawki techniczne i porządek w wizytówce dają efekt często po kilku tygodniach. Nowa podstrona usługi potrzebuje zwykle dwóch–czterech miesięcy. Ma to sens, gdy klienci szukają Waszej usługi w Google — w Toruniu dotyczy to większości firm usługowych i niemal całej turystyki. Mierzę telefony, formularze i rezerwacje z wyszukiwarki, a pozycje fraz pokazuję obok, nie zamiast nich."),

        h2("Jak samemu pozycjonować stronę firmy z Torunia"),
        p("Bez kosztów możecie: założyć i uzupełnić wizytówkę Google, dać każdej usłudze podstronę z „Toruń” w tytule, napisać ceny i godziny tekstem, prosić gości i klientów o opinie i podłączyć Google Search Console. Zlecić warto technikę, wersje językowe i przebudowę strony."),
        p("Restauracja może dodatkowo trzymać menu na stronie jako tekst, a nie zdjęcie karty, i aktualizować godziny w wizytówce przed świętami i wydarzeniami w mieście. Obiekt noclegowy — odpowiadać na każdą opinię, także krytyczną, spokojnie i konkretnie, bo turyści czytają odpowiedzi przed rezerwacją. Firma usługowa — dodawać do wizytówki zdjęcia z realizacji w Toruniu i okolicach z krótkim opisem, co zostało zrobione."),

        h2("Pozycjonowanie stron internetowych Toruń: cennik 2026"),
        li("Audyt SEO strony, wizytówki i konkurencji w Toruniu: od 1000 zł jednorazowo."),
        li("Jednorazowe prace — poprawki techniczne, podstrony usług i miejscowości, wersje językowe, dane strukturalne: od 1000 do 3000 zł."),
        li("Stałe pozycjonowanie strony: od 3500 zł miesięcznie."),
        p(
          "Ceny są w ",
          link("cenniku", "/pl/cennik"),
          ". Jeśli strona wymaga budowy od nowa, zajrzyjcie na stronę ",
          link("tworzenie stron internetowych w Toruniu", "/pl/tworzenie-stron-internetowych-torun"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie stron w Toruniu: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje dobre pozycjonowanie strony w Toruniu?", "Stałe pozycjonowanie kosztuje od 3500 zł miesięcznie. Za audyt płacicie od 1000 zł raz, a za jednorazowe prace od 1000 do 3000 zł. Wiele toruńskich firm potrzebuje tylko audytu i jednorazowych poprawek."],
          ["Jak długo trwa pozycjonowanie strony?", "Zmiany w wizytówce i poprawki techniczne działają po kilku tygodniach, nowe podstrony usług zwykle po dwóch–czterech miesiącach. Obiektom turystycznym radzę zaczynać przed sezonem."],
          ["Czy pozycjonowanie stron ma sens w Toruniu?", "Tak, jeśli klienci szukają Waszej usługi w Google albo w Mapach. W turystyce to zwykle główne źródło gości poza portalami rezerwacyjnymi."],
          ["Kto zajmuje się pozycjonowaniem stron w Toruniu?", "Lokalne agencje reklamowe i studia, ogólnopolskie firmy SEO i pojedynczy specjaliści. Ja pracuję sam: audyt, wdrożenie i raport robi ta sama osoba."],
          ["Jak samemu pozycjonować stronę?", "Uzupełniona wizytówka Google, osobna podstrona dla każdej usługi z miastem w tytule, opinie i Google Search Console to dobry początek bez kosztów."],
          ["Czy moja firma z Torunia może być widoczna także w Bydgoszczy?", "Tak, ale to osobny rynek w Google. Potrzebna jest rzetelna podstrona dla Bydgoszczy i obszar działania w wizytówce, który ją obejmuje."],
          ["Czy pracujesz z firmami z Torunia zdalnie?", "Tak. Pracuję z Warszawy, a współpraca toczy się online: rozmowa wideo, wspólny dokument z zadaniami i comiesięczny raport. Dane i konkurencję sprawdzam dla Torunia."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie strony w Toruniu: co mi wysłać"),
        p(
          "Wyślijcie link do strony i do wizytówki w Mapach Google, usługi, przy których chcecie więcej klientów, informację, czy obsługujecie turystów lub studentów, i miejscowości poza Toruniem, w których pracujecie. Odpowiem, co poprawiłbym najpierw i za jaką stałą cenę. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
