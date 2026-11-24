// Section add-on for the Sanity page /pl/oferty/monitoring-marki-w-ai.
// See sections/ai-visibility-audit-platforms.en.ts for what these files are.
// The page was built in the CMS and has no fixture of its own.
//
// Why (24.11.2026). Of the four AI services, three state their price on their
// own page — audyt widoczności od 1000 zł, przygotowanie strony od 3500 zł,
// poprawa błędnych danych od 3500 zł — and this one states none at all. The
// English and Russian twins both do: from €250 a month with a three-month
// minimum. Building the Polish pricing page surfaced the gap, and the owner
// set the Polish figure at 1000 zł a month on 24.11.2026, keeping the same
// relation to euro that the audit already has (250 € / 1000 zł).
//
// The three-month minimum is not a sales term here but the measurement
// itself: one month of a frozen prompt set is a reading, not a trend, and
// selling a monthly subscription on it would be selling noise. That is the
// argument the English and Russian pages already make.
import { p, h2, li } from "../pt";

export const monitoringCennikPl = {
  lang: "pl",
  slug: "monitoring-marki-w-ai",
  contentBlocks: [
    {
      // Без layout: текстовые блоки на этой странице его не имеют, и вставка
      // идёт в их content. Скрипту нужен --layout "" — иначе он ищет блок с
      // layout «guide» и на этой странице не находит ничего.
      _type: "textContent",
      content: [
        h2("Ile kosztuje monitoring marki w AI i dlaczego minimum to trzy miesiące"),
        p("Monitoring marki w AI kosztuje od 1000 zł miesięcznie, przy minimum trzech miesiącach. Minimum nie jest warunkiem handlowym, tylko warunkiem pomiaru: jeden przebieg zamrożonego zestawu zapytań to odczyt, a nie trend, i sprzedawanie na tej podstawie abonamentu miesiąc po miesiącu byłoby sprzedawaniem szumu."),
        p("Co miesiąc wraca ten sam zestaw zapytań, zadany tak samo, i dlatego ten miesiąc da się porównać z poprzednim. W raporcie są trzy rzeczy:"),
        li("jak często asystenci w ogóle Was wymieniają i przy jakich pytaniach;"),
        li("które twierdzenia są błędne i z jakiego źródła pochodzą;"),
        li("jakie strony asystenci cytują, Wasze i cudze, oraz ruch, który z nich przyszedł."),
        p("Kwota rośnie wraz z liczbą języków i rynków, bo każdy z nich jest przebiegany osobno: firma bywa opisana poprawnie po polsku i błędnie po angielsku. Sam monitoring niczego nie naprawia — to pomiar. Jeśli wyjdzie z niego błędna informacja do poprawienia, jest to osobna praca, wyceniana osobno."),
      ],
    },
  ],
};
