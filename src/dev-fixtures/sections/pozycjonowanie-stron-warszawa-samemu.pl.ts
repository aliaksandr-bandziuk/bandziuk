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
// This file: «Jak samemu pozycjonować stronę?» from the PAA block. Nothing on
// the page answers it, and the same question is answered on the Kraków page,
// so the pattern is established.
import { p, h2, li } from "../pt";

export const warszawaSamemuPl = {
  lang: "pl",
  slug: "pozycjonowanie-stron-warszawa",
  contentBlocks: [
    {
      _type: "textContent",
      layout: "guide",
      content: [
        h2("Jak samemu zacząć pozycjonowanie strony firmy w Warszawie"),
        p("Część pracy nie wymaga ani budżetu, ani wykonawcy, i warto ją zrobić przed rozmową z kimkolwiek — także ze mną, bo zmienia punkt wyjścia i obniża zakres:"),
        li("osobna podstrona dla każdej usługi, z Warszawą albo dzielnicą w tytule i w pierwszym zdaniu;"),
        li("uzupełniona wizytówka Google: kategorie, usługi, godziny, zdjęcia z ostatniego roku, odpowiedzi na wszystkie opinie;"),
        li("te same nazwa, adres i telefon wszędzie, gdzie firma występuje w sieci;"),
        li("podłączona Google Search Console, żeby było widać, po czym ludzie już Was znajdują."),
        p("To zwykle wystarcza, żeby zobaczyć pierwszy ruch i pierwsze frazy. Dalej zaczyna się praca, której samemu robi się trudno: strona techniczna, wersje językowe i konkurowanie o frazy, których pilnują agencje z budżetem."),
      ],
    },
  ],
};
