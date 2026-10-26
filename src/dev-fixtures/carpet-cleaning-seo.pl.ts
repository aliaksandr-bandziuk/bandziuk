// Landing page fixture: Pozycjonowanie firmy prania dywanów (PL), group
// «carpet-cleaning-seo».
// Market version for Polish carpet and upholstery cleaners (one-person firms
// with an extractor, pralnie dywanów with pickup and delivery), not a
// translation of carpet-cleaning-seo.en.
// Semantic core: ref/home-services.md has no PL volumes for this niche; target
// phrases from BRIEF.md: «pozycjonowanie firmy prania dywanów» (slug, H1,
// H2s), «pranie dywanów i tapicerki» (H1, excerpt). Customer phrases used in
// examples only: pranie dywanów [miasto], pralnia dywanów z odbiorem, pranie
// kanapy / narożnika cena, pranie materaca, pranie tapicerki samochodowej.
// PAA (PL): Ile kosztuje pozycjonowanie firmy? Co jest lepsze: pozycjonowanie
// czy Google Ads? (cost H2 + FAQ, portals H2).
// Intent: ref/intent-check-home-services.md — EN «carpet cleaning seo» vs
// «cleaning company seo» 0 shared URLs → own page;
// /pl/oferty/pozycjonowanie-strony-firmy-sprzatajacej-warszawa linked once as
// the page for general cleaning companies.
// Polish context: Oferteo, Fixly, OLX usługi, osiedlowe grupy na Facebooku,
// Mapy Google; ceny za m², za miejsce siedzące, dojazd; sezon: wiosna,
// święta, komunie, koniec najmu.
// NOT on this page: sprzątanie mieszkań i biur (cleaning page, linked once);
// osuszanie po zalaniu (/pl/pozycjonowanie-firmy-osuszania-po-zalaniu, linked
// once); budowa strony; kampanie Google Ads.
// Owner's rules: every SEO page covers AI search (GEO, AEO); never say there
// are no clients from the visitor's segment.
import { p, h2, li, link, k } from "./pt";

export const carpetCleaningSeoPl = {
  lang: "pl",
  group: "carpet-cleaning-seo",
  slug: "pozycjonowanie-firmy-prania-dywanow",
  title: "Pozycjonowanie firmy prania dywanów",
  heading: "Pozycjonowanie firmy prania dywanów i tapicerki",
  excerpt:
    "Pozycjonowanie firmy prania dywanów i tapicerki: podstrony dla dywanów, kanap, materacy i tapicerki samochodowej, czytelny cennik, galerie przed i po, wizytówka Google i odpowiedzi AI — żeby klient dzwonił do Was, a nie szukał na OLX.",
  seo: {
    metaTitle: "Pozycjonowanie pralni dywanów i tapicerki | Bandziuk",
    metaDescription:
      "Pozycjonowanie firmy prania dywanów i tapicerki: podstrony usług, cennik za m², zdjęcia przed i po, wizytówka Google i AI. Audyt od 1000 zł.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Dywany, tapicerka, materace", "Audyt od 1000 zł", "Odpowiedź w 1 dzień roboczy"],
  heroPhonePoints: ["Pranie kanapy Kraków", "Odbiór dywanu", "Cennik za m²", "Zadzwoń"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Audyt SEO firmy prania dywanów: strona, wizytówka Google, konkurencja", price: 1000, currency: "PLN", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Jednorazowe prace SEO: podstrony usług, cennik, galerie, dane strukturalne", price: 1000, maxPrice: 3000, currency: "PLN", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Stałe pozycjonowanie firmy prania dywanów i tapicerki", price: 3500, currency: "PLN", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Co dostajesz",
      title: "Co obejmuje pozycjonowanie firmy prania dywanów",
      items: [
        { _key: k("o"), iconName: "search", title: "Dane wyszukiwań dla Waszych miejscowości", text: "Dywany, kanapy, materace, auta — z liczbą wyszukiwań" },
        { _key: k("o"), iconName: "layers", title: "Podstrona dla każdej usługi", text: "Dywany, tapicerka meblowa, materace, samochody" },
        { _key: k("o"), iconName: "file-text", title: "Cennik, który da się zrozumieć", text: "Za m², za miejsce siedzące, dojazd i dopłaty" },
        { _key: k("o"), iconName: "image", title: "Galerie przed i po z opisami", text: "Co było prane, z jakiej tkaniny i w jakiej dzielnicy" },
        { _key: k("o"), iconName: "map-pin", title: "Wizytówka Google dla firmy z dojazdem", text: "Obszar działania, kategorie, zdjęcia, opinie" },
        { _key: k("o"), iconName: "sparkles", title: "Odpowiedzi w ChatGPT i AI Overviews", text: "Metody, czas schnięcia i ceny do zacytowania" },
      ],
      prices: [
        { _key: k("r"), label: "Audyt SEO firmy prania dywanów", value: "od 1000 zł", note: "jednorazowo" },
        { _key: k("r"), label: "Stałe pozycjonowanie firmy prania dywanów", value: "od 3500 zł / mies.", note: "podstrony, galerie, Mapy, opinie", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio SEO: lokalne firmy usługowe, które żyją z telefonów i Map Google",
      subtitle:
        "Warsztat samochodowy, pracownia renowacji felg i przechowalnia opon z Warszawy — firmy, którym zlecenia przynoszą telefony, Mapy Google i podstrony usług — do tego warszawska firma remontowa i gabinet psychoterapeuty w Mediolanie, którego nowe strony pojawiają się już w odpowiedziach ChatGPT. Pralnia dywanów potrzebuje tej samej podstawy: osobnej podstrony dla każdej usługi, mocnej wizytówki i zleceń, które da się powiązać z wyszukiwarką.",
      // EN slugs; the Polish case is found through translation.metadata
      picks: [
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
        "renovation-and-investment-website-with-premium-design",
        "psychotherapist-website-milan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Wycena pozycjonowania firmy prania dywanów",
      subtitle: "W ciągu jednego dnia roboczego odpiszę, od czego zacząłbym na stronie i w wizytówce, i podam stałą cenę.",
      contextLabel: "Nazwa firmy lub strona",
      contextPlaceholder: "Link lub nazwa",
      buttonText: "Wyślij i poproś o wycenę",
      note: "Albo napisz na WhatsApp — odpowiadam równie szybko.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Czego chcecie robić więcej?", options: ["Pranie dywanów", "Tapicerka meblowa i materace", "Tapicerka samochodowa", "Wykładziny w biurach"] },
        { _key: k("z"), question: "Skąd teraz przychodzą zlecenia?", options: ["Oferteo i Fixly", "OLX i Facebook", "Google i Mapy", "Stali klienci i polecenia"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Pozycjonowanie firmy prania dywanów i tapicerki to praca nad tym, żeby osoba, która wpisuje „pranie kanapy” albo „pranie dywanów z odbiorem” razem ze swoim miastem, trafiała na Waszą stronę i wizytówkę, a potem dzwoniła albo pisała. Robię to sam: dane wyszukiwań, podstrony usług, cennik, galerie, wizytówkę Google i raporty. Pojedyncze zlecenie w tej branży jest niewielkie, ale klient wraca co rok albo dwa — liczy się więc i pierwszy telefon, i to, żeby za rok znalazł Was, a nie przypadkowe ogłoszenie."),

        h2("Pozycjonowanie firmy prania dywanów a pozycjonowanie firmy sprzątającej: dwa różne rynki"),
        p("Klient, który szuka „prania narożnika”, nie szuka ekipy do sprzątania biura ani pomocy domowej raz w tygodniu. Chce pozbyć się plamy po kawie albo zapachu po psie, chce wiedzieć, ile to kosztuje i kiedy kanapa wyschnie. Inne są frazy, inni konkurenci i inne pytania, więc firma prania dywanów i tapicerki potrzebuje własnej struktury strony, a nie zakładki na stronie firmy sprzątającej."),
        p(
          "Firmy, które sprzątają mieszkania i biura, a tapicerkę piorą przy okazji, mają inny zestaw fraz — piszę o nich na stronie ",
          link("pozycjonowanie strony firmy sprzątającej", "/pl/oferty/pozycjonowanie-strony-firmy-sprzatajacej-warszawa"),
          ".",
        ),

        h2("Frazy w pozycjonowaniu firmy prania dywanów i tapicerki: czego szukają klienci"),
        p("Zanim powstanie jakakolwiek podstrona, sprawdzam, czego i gdzie szukają ludzie w Waszej okolicy. W tej branży frazy dzielą się według przedmiotu i problemu:"),
        li("dywany i wykładziny — „pranie dywanów Poznań”, „pralnia dywanów z odbiorem”, „pranie wykładziny w biurze”"),
        li("meble — „pranie kanapy”, „pranie narożnika cena”, „czyszczenie krzeseł tapicerowanych”, „czyszczenie skórzanej sofy”"),
        li("materace — „pranie materaca”, „roztocza w materacu”"),
        li("samochody — „pranie tapicerki samochodowej”, „czyszczenie foteli w aucie”"),
        li("problemy — „zapach moczu kota z dywanu”, „plama z wina na kanapie”, „kanapa po praniu śmierdzi”"),
        p("Dane pokazują też, przy których frazach Google wyświetla mapę, przy których portale w rodzaju Oferteo i Fixly, a przy których odpowiada już podsumowanie AI. Od tego zależy kolejność pracy — zwykle zaczynam od usługi z najlepszą marżą w dzielnicach, gdzie konkurencja jest najsłabsza."),

        h2("Pranie u klienta czy pralnia dywanów z odbiorem: jak pokazać to na stronie"),
        p("W Polsce działają dwa modele i strona powinna jasno mówić, który jest Wasz, albo że robicie oba:"),
        li("pranie u klienta — ekstrakcja na miejscu, tapicerka, wykładziny, dywany, których nie da się zabrać; ważne są czas schnięcia, przygotowanie mieszkania i koszt dojazdu"),
        li("pralnia stacjonarna — dywany zabierane do pralni, pranie maszynowe lub ręczne, suszenie w komorze, zwrot po kilku dniach; ważne są odbiór i dowóz, strefa, w której są bezpłatne, i czas realizacji"),
        p("Pralnia z odbiorem może sięgać dalej niż ekipa z odkurzaczem piorącym, bo klient nie musi czekać w domu przez pół dnia. Warto mieć wtedy podstronę odbioru dla każdej większej miejscowości, do której naprawdę jeździcie, z dniami odbioru, jeśli trasy są stałe."),

        h2("Podstrony prania tapicerki: kanapy, narożniki, materace i tapicerka samochodowa"),
        p("Każdy przedmiot budzi inne pytania, więc dostaje własną podstronę. Kanapa i narożnik: rodzaj tkaniny, czy da się zdjąć pokrowce, czy stare plamy zejdą. Materac: roztocza i alergie, suszenie, materace dziecięce. Tapicerka samochodowa: fotele, podsufitka, bagażnik, czy auto zostaje u Was, czy pierzecie na parkingu klienta. Skóra: czyszczenie i impregnacja zamiast prania."),
        p("Na takich podstronach dobrze działa jasne pokazanie granic: czego nie da się usunąć — wypaleń, przebarwień od wybielacza, zaschniętej farby — i kiedy lepiej wymienić obicie. Klient, który wie to przed wizytą, rzadziej zostawia rozczarowaną opinię."),

        h2("Cennik prania dywanów i tapicerki na stronie: za m², za miejsce siedzące, za dojazd"),
        p("„Ile kosztuje pranie dywanu” i „pranie kanapy cena” to jedne z najczęstszych pytań w tej branży. Jeśli strona na nie nie odpowiada, klient pyta na Fixly albo w grupie na Facebooku i dostaje pięć wycen, a podsumowanie AI w Google podaje średnie z ogólnopolskich portali."),
        p("Cennik nie musi być sztywny, wystarczą zasady: dywany za m² z dopłatą za wełnę, jedwab albo ręczne tkanie; tapicerka za miejsce siedzące albo za sztukę; materace według rozmiaru; dojazd i minimalna wartość zlecenia; dopłaty za odplamianie, neutralizację zapachu i impregnację. Taka podstrona łapie frazy z „cena”, odsiewa osoby szukające wyłącznie najtańszej oferty i oszczędza dyskusji przy drzwiach."),

        h2("Zdjęcia przed i po oraz opinie w Google dla firmy prania dywanów"),
        p("Efekt prania widać na jednym zdjęciu, więc galeria jest Waszym najmocniejszym argumentem — pod warunkiem, że Google wie, co na niej jest. Para zdjęć z tego samego ujęcia i krótki podpis: „narożnik z jasnej plecionki po kocie, Wrocław Krzyki”, „wełniany dywan po zalaniu kawą”. Sto zdjęć bez opisu w sliderze nic nie wnosi do wyników."),
        p("O opinię najlepiej poprosić następnego dnia, kiedy tapicerka już wyschła i wygląda najlepiej, SMS-em albo na WhatsAppie z bezpośrednim linkiem do wizytówki. Opinie, w których klient pisze, co było prane i w jakiej dzielnicy, pomagają w Mapach bardziej niż samo „polecam”."),

        h2("Wizytówka Google firmy prania dywanów: obszar działania, dzielnice i adres pralni"),
        p("Firma, która pierze u klienta, prowadzi wizytówkę jako działalność z obszarem obsługi: adres ukryty, wpisane miejscowości i dzielnice, w których naprawdę pracujecie, kategoria główna dopasowana do usługi, która daje najwięcej zleceń, i kategorie dodatkowe dla reszty. Pralnia stacjonarna, do której można przywieźć dywan, może pokazać adres i godziny otwarcia. Zdjęcia z realizacji co tydzień i odpowiedzi na pytania utrzymują wizytówkę przy życiu."),
        p(
          "Podstrony miejscowości mają sens tam, gdzie macie realizacje i opinie; kopia tej samej treści z inną nazwą miasta zostaje odfiltrowana. Pracę nad Mapami opisuję szerzej na stronie ",
          link("pozycjonowanie lokalne", "/pl/oferty/pozycjonowanie-lokalne"),
          ".",
        ),

        h2("Sezon w praniu dywanów i tapicerki: wiosna, święta, komunie i koniec najmu"),
        p("Zapytań przybywa wiosną, przed Wielkanocą i Bożym Narodzeniem, przed komuniami w maju i przy zmianie najemców, kiedy właściciel chce przekazać mieszkanie kolejnej osobie w dobrym stanie. Podstrony pod te okazje — pranie tapicerki przed świętami, odświeżenie mieszkania po najemcy, stała obsługa mieszkań na wynajem krótkoterminowy — publikuję z wyprzedzeniem, bo nowa strona potrzebuje kilku tygodni, żeby pojawić się w wynikach."),
        p("Drugie źródło to powracający klienci: rodziny z dziećmi i zwierzętami, alergicy, właściciele mieszkań na wynajem. Przypomnienie po roku, firma łatwa do znalezienia po nazwie i stała oferta dla zarządców mieszkań sprawiają, że nie zaczynają szukać od nowa."),

        h2("Oferteo, Fixly, OLX i grupy na Facebooku a pozycjonowanie firmy prania dywanów"),
        p("Wiele firm prania tapicerki zaczyna od portali i ogłoszeń. Każde z tych źródeł ma swoją cenę:"),
        li("Oferteo i Fixly — płacicie za dostęp do zapytań, a to samo zapytanie widzi kilka firm"),
        li("OLX usługi — ogłoszenie trzeba odświeżać i promować, a klient porównuje głównie cenę"),
        li("osiedlowe grupy na Facebooku — dobre polecenia, ale nie da się ich zaplanować"),
        p("Pozycjonowanie wymaga pracy na początku, a potem przynosi klientów, którzy wybrali Was po stronie, zdjęciach i opiniach, bez opłaty za każde zapytanie. Portale nie muszą znikać od razu — z czasem po prostu coraz mniej od nich zależycie."),

        h2("Pozycjonowanie firmy prania dywanów w ChatGPT i Google AI Overviews (GEO, AEO)"),
        p("Pytania typu „czy pranie kanapy na mokro jest bezpieczne”, „jak długo schnie dywan po praniu”, „kto pierze dywany z odbiorem w Gdańsku” ludzie zadają dziś ChatGPT, Perplexity i podsumowaniom AI w Google. Asystent odpowiada na podstawie stron, które może przeczytać, i danych, które może sprawdzić w kilku miejscach. Taką pracę nazywa się GEO (generative engine optimization) albo AEO (answer engine optimization); w firmie prania dywanów oznacza ona:"),
        li("metodę prania, czas schnięcia i używane środki opisane zwykłymi zdaniami"),
        li("zasady cennika i dopłaty zapisane tekstem, nie tylko na grafice"),
        li("dane strukturalne z nazwą firmy, usługami i obszarem działania"),
        li("te same dane firmy na stronie, w wizytówce, na Oferteo, Fixly i w katalogach"),
        p(
          "Na starcie zapisuję, co asystenci odpowiadają o Waszej pralni, a po publikacji nowych podstron zadaję im te same pytania jeszcze raz. Szczegóły na stronie ",
          link("pozycjonowanie w AI i ChatGPT", "/pl/oferty/pozycjonowanie-w-ai-i-chatgpt"),
          ".",
        ),

        h2("Ile kosztuje pozycjonowanie firmy prania dywanów i tapicerki"),
        li("Audyt SEO strony, wizytówki i lokalnej konkurencji: od 1000 zł, jednorazowo, z listą poprawek według wpływu."),
        li("Jednorazowe prace — podstrony usług, cennik, galerie, porządek w wizytówce, dane strukturalne: od 1000 do 3000 zł."),
        li("Stałe pozycjonowanie firmy prania dywanów — co miesiąc nowe podstrony i galerie, wizytówka, opinie, odpowiedzi AI i raport zleceń: od 3500 zł miesięcznie; w Warszawie, Krakowie i innych dużych miastach, gdzie pralni jest najwięcej, od 5500 zł."),
        p(
          "Jednoosobowej firmie z jednym autem często wystarczą audyt i kilka mocnych podstron; stała współpraca ma sens przy pralni stacjonarnej, kilku ekipach albo w Warszawie, Krakowie czy Trójmieście. Jak prowadzę stałą pracę, opisuję na stronie ",
          link("strategia i optymalizacja SEO", "/pl/oferty/strategia-i-optymalizacja-seo"),
          ". Jeśli osuszacie też mieszkania po zalaniu, to osobny rynek — zajrzyjcie na stronę ",
          link("pozycjonowanie firmy osuszania po zalaniu", "/pl/pozycjonowanie-firmy-osuszania-po-zalaniu"),
          ". Wszystkie ceny są w ",
          link("cenniku", "/pl/cennik"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pozycjonowanie firmy prania dywanów: najczęstsze pytania",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Ile kosztuje pozycjonowanie firmy prania dywanów?", "Na start audyt za od 1000 zł. Pojedyncze zadania, np. podstrona prania tapicerki samochodowej albo cennik, to od 1000 do 3000 zł. Stała współpraca zaczyna się od 3500 zł miesięcznie, a w dużych miastach z silną konkurencją od 5500 zł. Opiszcie usługi i miejscowości, a podam stałą cenę."],
          ["Po jakim czasie pozycjonowanie przyniesie zlecenia?", "Poprawki w wizytówce i na istniejących podstronach potrafią zadziałać w kilka tygodni. Nowe podstrony usług i miejscowości zwykle potrzebują dwóch–czterech miesięcy, dlatego strony sezonowe warto zacząć zimą, przed wiosennymi porządkami."],
          ["Co jest lepsze: Oferteo i Fixly czy pozycjonowanie strony?", "To dwa różne narzędzia. Portale dają zapytania od razu, ale płacicie za dostęp, a klient dostaje kilka ofert. Pozycjonowanie rozkręca się miesiącami i potem przynosi klientów, którzy dzwonią tylko do Was. Wiele firm zostawia portal na start i z czasem korzysta z niego mniej."],
          ["Czy podawać ceny prania tapicerki na stronie?", "Tak, przynajmniej widełki i zasady: za m², za miejsce siedzące, dojazd, dopłaty. Ludzie szukają cen, podsumowania AI je cytują, a jasny cennik oszczędza nieporozumień na miejscu."],
          ["Czy jedna strona wystarczy na pranie u klienta i pralnię z odbiorem?", "Jedna domena tak, ale z osobnymi podstronami. Pranie u klienta i pralnia stacjonarna odpowiadają na inne pytania — o czas schnięcia albo o odbiór i termin zwrotu — i każda podstrona pozycjonuje się na swoje frazy."],
          ["Czy da się pozycjonować samą wizytówkę Google, bez strony?", "Da się, i dla małej firmy to często najszybsze źródło telefonów. Strona z podstronami usług i cennikiem wzmacnia jednak wizytówkę i jest potrzebna, żeby pojawiać się w zwykłych wynikach i w odpowiedziach AI."],
          ["Czy pracujesz z firmami prania dywanów spoza Warszawy?", "Tak. Całą pracę wykonuję zdalnie: dane wyszukiwań dla Waszych miejscowości, strona, wizytówka i raporty. Rozmawiamy przez telefon, WhatsApp albo wideo, w porze, która nie koliduje z wyjazdami ekip."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Zamów pozycjonowanie firmy prania dywanów: co mi wysłać"),
        p(
          "Podajcie nazwę pralni, wklejcie linki do strony i do wizytówki w Mapach Google i napiszcie, czego chcecie prać więcej — dywany, kanapy i narożniki, materace, tapicerka samochodowa, wykładziny w biurach — miejscowości, do których jeździcie, i informację, czy macie pralnię stacjonarną z odbiorem. Napiszcie też, skąd teraz przychodzą klienci. Odpowiem, co poprawiłbym najpierw i za jaką stałą cenę. Skorzystajcie z ",
          link("formularza powyżej", "#quote"),
          " albo napiszcie na ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
