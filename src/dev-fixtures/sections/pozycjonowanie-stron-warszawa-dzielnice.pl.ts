// Section add-on for the Sanity page /pl/oferty/pozycjonowanie-stron-warszawa.
// See sections/ai-visibility-audit-platforms.en.ts for what these files are.
// The page has no fixture of its own: it was built in the CMS, as its Russian
// twin /ru/uslugi/prodvizhenie-saitov-varshava was.
//
// Why (22.11.2026). Live PL SERP for «pozycjonowanie stron warszawa»:
// widoczni, ks.pl, empressia, vvasiak.pl, studioa7, wenet, internetica,
// hauerpower, greenparrot, webmetric — agencies throughout, one personal
// brand, no directories. The PAA block is dominated by price: «Ile kosztuje
// pozycjonowanie w Warszawie?», «Ile kosztuje dobre pozycjonowanie strony?»,
// «Ile kosztuje pozycjonowanie strony w 2026?», plus «Jak samemu
// pozycjonować stronę?». The page covers the city, the agency comparison and
// AI search well, but carries no heading for districts, none for price and
// none for the do-it-yourself question.
//
// This file: how Warsaw clients actually search — districts, metro, commuter
// communes. The page names Mokotów and Białołęka once, in passing, inside
// another section, and has no heading for any of it.
import { p, h2, li } from "../pt";

export const warszawaDzielnicePl = {
  lang: "pl",
  slug: "pozycjonowanie-stron-warszawa",
  contentBlocks: [
    {
      _type: "textContent",
      layout: "guide",
      content: [
        h2("Jak szukają klienci w Warszawie: Mokotów, Wola, Praga i gminy wokół miasta"),
        p("Warszawskie dzielnice działają jak osobne miasta i tak samo wyglądają zapytania. Klient z Ursynowa rzadko szuka wykonawcy na Białołęce, nawet jeśli firma obsługuje całe miasto. W praktyce zapytania układają się w cztery grupy:"),
        li("usługa plus dzielnica: Mokotów, Wola, Śródmieście, Ursynów, Praga-Południe, Białołęka, Bemowo, Żoliborz;"),
        li("usługa plus okolica albo stacja metra, szczególnie tam, gdzie klient przyjeżdża osobiście;"),
        li("usługa plus gmina z obrzeży: Piaseczno, Pruszków, Legionowo, Marki, Ząbki, Łomianki, Konstancin-Jeziorna;"),
        li("usługa plus «w pobliżu», gdzie o wyniku decyduje odległość i wizytówka, a nie treść strony."),
        p("Praktyczny wniosek jest prosty: podstrony powstają tam, gdzie naprawdę macie klientów, a nie tam, gdzie brzmi to ambitnie. Podstrona dzielnicy, w której nikt z Was nie pracuje, przynosi wejścia bez telefonów i psuje obraz w raporcie."),
        p("Firmy spod Warszawy to osobny przypadek. Adres w Piasecznie czy w Markach nie przeszkadza sprzedawać w stolicy, ale wymaga innego opisu obszaru obsługi i innego zgłoszenia wizytówki niż firma z biurem w centrum."),
      ],
    },
  ],
};
