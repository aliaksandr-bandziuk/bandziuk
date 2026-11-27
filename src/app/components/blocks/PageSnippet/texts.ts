// Words of the page snippets, per language. Only Polish so far: the snippets
// started on /pl/oferty/optymalizacja-konwersji. Add "en" and "ru" here before
// placing a snippet on an English or Russian page — without them it renders
// nothing.
//
// Every statement here is either an example of the work (marked as such) or
// already stated in the page text. No figures that the site does not publish.

export type SnippetKind =
  | "funnel"
  | "auditReport"
  | "codeDiff"
  | "localPhone"
  | "checkout"
  | "formBeforeAfter"
  | "ga4Events";

type DiffLine = ["-" | "+" | " ", string];

const pl = {
  funnel: {
    title: "Ścieżka od wejścia do zapytania",
    // Widths are a drawing of the shape, not data: no numbers are shown.
    rows: [
      { label: "Wejście na podstronę", width: 100 },
      { label: "Oferta i ceny", width: 62 },
      { label: "Formularz lub telefon", width: 31 },
      { label: "Zapytanie wysłane", width: 9 },
    ],
    dropAfter: 2,
    drop: "Tu szukam przyczyny: pola, zgody, telefon",
  },
  auditReport: {
    title: "Fragment raportu z audytu konwersji",
    tag: "przykład",
    head: ["Problem", "Dlaczego kosztuje zapytania", "Nakład"],
    first: "Najpierw",
    efforts: ["Mały", "Średni"],
    shotRow: 1,
    shot: { field1: "Imię", field2: "Telefon", message: "Nie udało się wysłać formularza" },
    rows: [
      {
        problem: "Pomiar liczy kliknięcia w przycisk, a nie wysłane formularze",
        why: "Nie widać, ile zapytań naprawdę przychodzi, więc nie da się ocenić żadnej kolejnej zmiany",
        effort: "Mały",
        first: true,
      },
      {
        problem: "Formularz nie wysyła się na iPhonie",
        why: "Część zapytań z telefonów ginie bez śladu, a klient myśli, że wysłał",
        effort: "Mały",
      },
      {
        problem: "Numer telefonu w nagłówku nie jest klikalny",
        why: "Na telefonie trzeba go przepisywać ręcznie",
        effort: "Mały",
      },
      {
        problem: "Brak widełek cenowych na podstronach usług",
        why: "Klient pyta tylko o cenę albo wraca do wyników wyszukiwania",
        effort: "Średni",
      },
    ] as Array<{ problem: string; why: string; effort: string; first?: boolean }>,
  },
  codeDiff: {
    title: "Poprawka formularza kontaktowego w kodzie",
    file: "ContactForm.tsx",
    lines: [
      [" ", "<form onSubmit={send}>"],
      [" ", '  <input name="name" placeholder="Imię" />'],
      ["-", '  <input name="surname" placeholder="Nazwisko" required />'],
      ["-", '  <input name="company" placeholder="Nazwa firmy" required />'],
      ["-", '  <input name="nip" placeholder="NIP" required />'],
      ["-", '  <input name="phone" type="text" required />'],
      ["+", '  <input name="contact" type="tel" inputMode="tel"'],
      ["+", '         autoComplete="tel" placeholder="Telefon lub e-mail" required />'],
      [" ", '  <textarea name="message" placeholder="W czym możemy pomóc?" />'],
      ["-", "  <button>Wyślij</button>"],
      ["+", "  <button>Wyślij zapytanie</button>"],
      [" ", "</form>"],
    ] as DiffLine[],
  },
  localPhone: {
    title: "Przyciski kontaktu na telefonie i gotowa wiadomość na WhatsAppie",
    brand: "Serwis opon",
    heading: "Przechowanie opon",
    text: "Odbieramy, myjemy i przechowujemy komplet kół do następnego sezonu.",
    hoursLabel: "Godziny otwarcia",
    hours: "pn–sob",
    call: "Zadzwoń",
    whatsapp: "WhatsApp",
    route: "Trasa",
    caption: "Po kliknięciu „WhatsApp” na podstronie przechowania opon:",
    account: "konto firmowe",
    ready: "Wiadomość jest gotowa, wystarczy wysłać",
    message: "Dzień dobry, pytam o przechowanie opon. Czy jest wolny termin w tym tygodniu?",
  },
  checkout: {
    title: "Dostawa i płatność w koszyku sklepu",
    delivery: "Dostawa",
    locker: "Paczkomat InPost",
    lockerWhere: "Mokotów, ul. Puławska",
    changeOnMap: "Zmień na mapie",
    courier: "Kurier",
    pickup: "Odbiór osobisty",
    invoice: "Chcę fakturę na firmę",
    payment: "Płatność",
    blikNote: "Kod z aplikacji banku",
    transfer: "Szybki przelew",
    card: "Karta",
    button: "Zamawiam i płacę",
    noAccount: "Zakup bez zakładania konta",
  },
  formBeforeAfter: {
    title: "Ten sam formularz kontaktowy",
    tag: "przed i po",
    before: "Przed",
    beforeCount: "7 pól · 3 zgody",
    beforeFields: ["Imię", "Nazwisko", "Nazwa firmy", "NIP", "Telefon", "E-mail", "Wiadomość"],
    consents: [
      "Wyrażam zgodę na przetwarzanie moich danych osobowych w celu…*",
      "Wyrażam zgodę na otrzymywanie informacji handlowych drogą…*",
      "Zapoznałem się z regulaminem i polityką prywatności…*",
    ],
    longClause:
      "Administratorem Państwa danych osobowych jest … Dane przetwarzane są w celu … na podstawie art. 6 ust. 1 lit. … RODO. Przysługuje Państwu prawo dostępu do danych, ich sprostowania, usunięcia lub ograniczenia przetwarzania …",
    sendBefore: "Wyślij",
    after: "Po",
    afterCount: "3 pola · 1 klauzula",
    afterFields: ["Imię", "Telefon lub e-mail", "W czym możemy pomóc?"],
    shortClause: "Odpowiemy na to zapytanie. Kto przetwarza dane i jak długo —",
    privacy: "polityka prywatności",
    sendAfter: "Wyślij zapytanie",
  },
  ga4Events: {
    title: "Kluczowe zdarzenia w Google Analytics 4",
    keyEvent: "Kluczowe zdarzenie",
    events: [
      ["generate_lead", "Formularz wysłany"],
      ["phone_click", "Kliknięcie w numer telefonu"],
      ["whatsapp_click", "Rozmowa na WhatsAppie"],
      ["purchase", "Opłacone zamówienie"],
    ] as Array<[string, string]>,
    consentMode: "Tryb zgody Google (Consent Mode) — dane porównywane z liczbą zapytań w skrzynce lub CRM",
    on: "włączony",
  },
};

export const SNIPPET_TEXTS = { pl } as const;
