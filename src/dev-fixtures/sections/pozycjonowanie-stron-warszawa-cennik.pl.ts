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
// This file: price as its own heading. The three figures are on the page
// already, inside a paragraph in another section, and nothing says what moves
// them. Figures unchanged: audit from 1000 zł, one-off work 1000-3000 zł,
// ongoing from 3500 zł a month and from 5500 zł where competition is strong.
import { p, h2, li } from "../pt";

export const warszawaCennikPl = {
  lang: "pl",
  slug: "pozycjonowanie-stron-warszawa",
  contentBlocks: [
    {
      _type: "textContent",
      layout: "guide",
      content: [
        h2("Pozycjonowanie stron Warszawa: cennik i co wpływa na cenę"),
        p("Audyt od 1000 zł jednorazowo, jednorazowe prace SEO od 1000 do 3000 zł, stała praca od 3500 zł miesięcznie, a w branżach, w których warszawskie wyniki trzymają agencje z dużym budżetem, od 5500 zł. Rozpiętość nie bierze się z długości umowy, tylko z zakresu pracy, a ten widać zawczasu:"),
        li("ile usług trzeba rozdzielić na osobne podstrony: jedna usługa i osiem usług to inna ilość treści, danych strukturalnych i linkowania wewnętrznego;"),
        li("jedna dzielnica czy całe miasto z dojazdem: firma jeżdżąca do klienta potrzebuje opisu obszaru obsługi, a nie jednego adresu;"),
        li("jeden język czy dwa: warszawska firma często odpowiada i po polsku, i po angielsku, a to osobne wyniki wyszukiwania i osobny zestaw fraz;"),
        li("stan strony: witrynę na kreatorze z kilkunastoma wtyczkami bywa taniej złożyć od nowa niż poprawiać, i rozstrzyga to audyt, a nie korespondencja;"),
        li("jak zatłoczona jest branża akurat w Warszawie — stąd bierze się górna granica."),
        p("Dlatego rozmowa o cenie zaczyna się od audytu, a nie od abonamentu. Po audycie bywa, że stała praca nie jest potrzebna: poprawki są zrobione, wizytówka uporządkowana i strona pracuje dalej sama."),
        p("Czego w tych kwotach nie ma: opłat za umieszczanie linków i kupowania opinii. Pierwszego nie wpisuję w kosztorys, drugiego nie robię w ogóle — warszawska firma żyje opiniami prawdziwych klientów, a podróbka kosztuje tu więcej, niż przynosi."),
      ],
    },
  ],
};
