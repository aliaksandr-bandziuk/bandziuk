// Words of the page snippets, per language (pl, en, ru — 2026-11-27).
// A language without an entry renders nothing rather than another language.
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
export type DockIcon = "phone" | "whatsapp" | "maps" | "telegram";
export type PayLogo = "blik" | "p24" | "applePay" | "googlePay" | "visa" | "mastercard";

type Texts = {
  funnel: { title: string; rows: Array<{ label: string; width: number }>; dropAfter: number; drop: string };
  auditReport: {
    title: string;
    tag: string;
    head: [string, string, string];
    first: string;
    efforts: [string, string];
    shotRow: number;
    shot: { field1: string; field2: string; message: string };
    rows: Array<{ problem: string; why: string; effort: string; first?: boolean }>;
  };
  codeDiff: { title: string; file: string; lines: DiffLine[] };
  localPhone: {
    title: string;
    brand: string;
    heading: string;
    text: string;
    hoursLabel: string;
    hours: string;
    dock: Array<{ icon: DockIcon; label: string }>;
    caption: string;
    account: string;
    ready: string;
    message: string;
  };
  checkout: {
    title: string;
    delivery: string;
    deliveries: Array<{ label: string; note?: string; map?: string }>;
    invoice: string;
    invoiceField: string;
    payment: string;
    payments: Array<{ label: string; note?: string; logos?: PayLogo[] }>;
    button: string;
    noAccount: string;
  };
  formBeforeAfter: {
    title: string;
    tag: string;
    before: string;
    beforeCount: string;
    beforeFields: string[];
    consents: string[];
    longClause: string;
    sendBefore: string;
    after: string;
    afterCount: string;
    afterFields: string[];
    shortClause: string;
    privacy: string;
    sendAfter: string;
  };
  ga4Events: {
    title: string;
    keyEvent: string;
    events: Array<[string, string]>;
    consentMode?: string;
    on?: string;
  };
};

// Widths of the funnel are a drawing of the shape, not data: no numbers are shown.
const FUNNEL_WIDTHS = [100, 62, 31, 9];

const pl: Texts = {
  funnel: {
    title: "Ścieżka od wejścia do zapytania",
    rows: ["Wejście na podstronę", "Oferta i ceny", "Formularz lub telefon", "Zapytanie wysłane"].map((label, i) => ({ label, width: FUNNEL_WIDTHS[i] })),
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
      { problem: "Pomiar liczy kliknięcia w przycisk, a nie wysłane formularze", why: "Nie widać, ile zapytań naprawdę przychodzi, więc nie da się ocenić żadnej kolejnej zmiany", effort: "Mały", first: true },
      { problem: "Formularz nie wysyła się na iPhonie", why: "Część zapytań z telefonów ginie bez śladu, a klient myśli, że wysłał", effort: "Mały" },
      { problem: "Numer telefonu w nagłówku nie jest klikalny", why: "Na telefonie trzeba go przepisywać ręcznie", effort: "Mały" },
      { problem: "Brak widełek cenowych na podstronach usług", why: "Klient pyta tylko o cenę albo wraca do wyników wyszukiwania", effort: "Średni" },
    ],
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
    ],
  },
  localPhone: {
    title: "Przyciski kontaktu na telefonie i gotowa wiadomość na WhatsAppie",
    brand: "Serwis opon",
    heading: "Przechowanie opon",
    text: "Odbieramy, myjemy i przechowujemy komplet kół do następnego sezonu.",
    hoursLabel: "Godziny otwarcia",
    hours: "pn–sob",
    dock: [
      { icon: "phone", label: "Zadzwoń" },
      { icon: "whatsapp", label: "WhatsApp" },
      { icon: "maps", label: "Trasa" },
    ],
    caption: "Po kliknięciu „WhatsApp” na podstronie przechowania opon:",
    account: "konto firmowe",
    ready: "Wiadomość jest gotowa, wystarczy wysłać",
    message: "Dzień dobry, pytam o przechowanie opon. Czy jest wolny termin w tym tygodniu?",
  },
  checkout: {
    title: "Dostawa i płatność w koszyku sklepu",
    delivery: "Dostawa",
    deliveries: [{ label: "Paczkomat InPost", note: "Mokotów, ul. Puławska", map: "Zmień na mapie" }, { label: "Kurier" }, { label: "Odbiór osobisty" }],
    invoice: "Chcę fakturę na firmę",
    invoiceField: "NIP",
    payment: "Płatność",
    payments: [
      { label: "BLIK", note: "Kod z aplikacji banku", logos: ["blik"] },
      { label: "Szybki przelew", logos: ["p24"] },
      { label: "Apple Pay, Google Pay", logos: ["applePay", "googlePay"] },
      { label: "Karta", logos: ["visa", "mastercard"] },
    ],
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
    ],
    consentMode: "Tryb zgody Google (Consent Mode) — dane porównywane z liczbą zapytań w skrzynce lub CRM",
    on: "włączony",
  },
};

const en: Texts = {
  funnel: {
    title: "The path from the first visit to an inquiry",
    rows: ["Landing page", "Offer and prices", "Form or call", "Inquiry sent"].map((label, i) => ({ label, width: FUNNEL_WIDTHS[i] })),
    dropAfter: 2,
    drop: "This is where I look for the cause: fields, checkboxes, phone",
  },
  auditReport: {
    title: "A page from a CRO audit report",
    tag: "example",
    head: ["Problem", "Why it costs you inquiries", "Effort"],
    first: "First",
    efforts: ["Low", "Medium"],
    shotRow: 1,
    shot: { field1: "Name", field2: "Phone", message: "The form could not be sent" },
    rows: [
      { problem: "Tracking counts button clicks, not sent forms", why: "You cannot see how many inquiries really arrive, so no later change can be judged", effort: "Low", first: true },
      { problem: "The form does not send on an iPhone", why: "Some inquiries from phones are lost, and the visitor thinks they were sent", effort: "Low" },
      { problem: "The phone number in the header is not tappable", why: "On a phone it has to be typed in by hand", effort: "Low" },
      { problem: "No price ranges on the service pages", why: "Visitors ask only about the price, or go back to the search results", effort: "Medium" },
    ],
  },
  codeDiff: {
    title: "A contact form fixed in the code",
    file: "ContactForm.tsx",
    lines: [
      [" ", "<form onSubmit={send}>"],
      [" ", '  <input name="name" placeholder="Name" />'],
      ["-", '  <input name="surname" placeholder="Surname" required />'],
      ["-", '  <input name="company" placeholder="Company" required />'],
      ["-", '  <input name="vat" placeholder="VAT number" required />'],
      ["-", '  <input name="phone" type="text" required />'],
      ["+", '  <input name="contact" type="tel" inputMode="tel"'],
      ["+", '         autoComplete="tel" placeholder="Phone or email" required />'],
      [" ", '  <textarea name="message" placeholder="How can we help?" />'],
      ["-", "  <button>Submit</button>"],
      ["+", "  <button>Send inquiry</button>"],
      [" ", "</form>"],
    ],
  },
  localPhone: {
    title: "Contact buttons on a phone and a prefilled WhatsApp message",
    brand: "Tyre service",
    heading: "Tyre storage",
    text: "We collect, wash and store your set of wheels until next season.",
    hoursLabel: "Opening hours",
    hours: "Mon–Sat",
    dock: [
      { icon: "phone", label: "Call" },
      { icon: "whatsapp", label: "WhatsApp" },
      { icon: "maps", label: "Directions" },
    ],
    caption: "After a tap on “WhatsApp” on the tyre storage page:",
    account: "business account",
    ready: "The message is ready, just send it",
    message: "Hello, I’m asking about tyre storage. Do you have a free slot this week?",
  },
  checkout: {
    title: "Delivery and payment in a store checkout",
    delivery: "Delivery",
    deliveries: [{ label: "Pickup point", note: "Nearest to your address", map: "Change on map" }, { label: "Courier" }, { label: "Collect in store" }],
    invoice: "Company invoice",
    invoiceField: "VAT number",
    payment: "Payment",
    payments: [
      { label: "Card", logos: ["visa", "mastercard"] },
      { label: "Apple Pay, Google Pay", logos: ["applePay", "googlePay"] },
      { label: "Bank transfer" },
    ],
    button: "Place order and pay",
    noAccount: "Guest checkout, no account needed",
  },
  formBeforeAfter: {
    title: "The same contact form",
    tag: "before and after",
    before: "Before",
    beforeCount: "7 fields · 3 checkboxes",
    beforeFields: ["Name", "Surname", "Company", "VAT number", "Phone", "Email", "Message"],
    consents: [
      "I agree to the processing of my personal data for the purpose of…*",
      "I agree to receive marketing information by…*",
      "I have read the terms and the privacy policy…*",
    ],
    longClause:
      "The controller of your personal data is … Your data is processed for the purpose of … under Art. 6(1)(…) GDPR. You have the right to access, rectify, erase or restrict the processing of your data …",
    sendBefore: "Submit",
    after: "After",
    afterCount: "3 fields · 1 line",
    afterFields: ["Name", "Phone or email", "How can we help?"],
    shortClause: "Used only to reply to this inquiry. Who processes the data and for how long —",
    privacy: "privacy policy",
    sendAfter: "Send inquiry",
  },
  ga4Events: {
    title: "Key events in Google Analytics 4",
    keyEvent: "Key event",
    events: [
      ["generate_lead", "Form sent"],
      ["phone_click", "Tap on the phone number"],
      ["whatsapp_click", "WhatsApp chat"],
      ["purchase", "Paid order"],
    ],
  },
};

const ru: Texts = {
  funnel: {
    title: "Путь от входа на сайт до заявки",
    rows: ["Вход на страницу", "Предложение и цены", "Форма или звонок", "Заявка отправлена"].map((label, i) => ({ label, width: FUNNEL_WIDTHS[i] })),
    dropAfter: 2,
    drop: "Здесь ищу причину: поля, согласия, телефон",
  },
  auditReport: {
    title: "Фрагмент отчёта по аудиту конверсии",
    tag: "пример",
    head: ["Проблема", "Почему стоит заявок", "Трудозатраты"],
    first: "Сначала",
    efforts: ["Низкие", "Средние"],
    shotRow: 1,
    shot: { field1: "Имя", field2: "Телефон", message: "Не удалось отправить форму" },
    rows: [
      { problem: "Учёт считает нажатия на кнопку, а не отправленные формы", why: "Не видно, сколько заявок приходит на самом деле, поэтому ни одну следующую правку не оценить", effort: "Низкие", first: true },
      { problem: "Форма не отправляется на iPhone", why: "Часть заявок с телефонов пропадает, а человек думает, что отправил", effort: "Низкие" },
      { problem: "Номер телефона в шапке не нажимается", why: "На телефоне его приходится набирать вручную", effort: "Низкие" },
      { problem: "На страницах услуг нет диапазона цен", why: "Человек спрашивает только цену или возвращается к результатам поиска", effort: "Средние" },
    ],
  },
  codeDiff: {
    title: "Правка формы обратной связи в коде",
    file: "ContactForm.tsx",
    lines: [
      [" ", "<form onSubmit={send}>"],
      [" ", '  <input name="name" placeholder="Имя" />'],
      ["-", '  <input name="surname" placeholder="Фамилия" required />'],
      ["-", '  <input name="company" placeholder="Компания" required />'],
      ["-", '  <input name="vat" placeholder="NIP / VAT" required />'],
      ["-", '  <input name="phone" type="text" required />'],
      ["+", '  <input name="contact" type="tel" inputMode="tel"'],
      ["+", '         autoComplete="tel" placeholder="Телефон или email" required />'],
      [" ", '  <textarea name="message" placeholder="Чем можем помочь?" />'],
      ["-", "  <button>Отправить</button>"],
      ["+", "  <button>Отправить заявку</button>"],
      [" ", "</form>"],
    ],
  },
  localPhone: {
    title: "Кнопки связи на телефоне и готовое сообщение в WhatsApp",
    brand: "Шиномонтаж",
    heading: "Хранение шин",
    text: "Забираем, моем и храним комплект колёс до следующего сезона.",
    hoursLabel: "Часы работы",
    hours: "пн–сб",
    dock: [
      { icon: "phone", label: "Позвонить" },
      { icon: "whatsapp", label: "WhatsApp" },
      { icon: "telegram", label: "Telegram" },
    ],
    caption: "После нажатия «WhatsApp» на странице хранения шин:",
    account: "бизнес-аккаунт",
    ready: "Сообщение уже готово, осталось отправить",
    message: "Здравствуйте, интересует хранение шин. Есть свободное время на этой неделе?",
  },
  checkout: {
    title: "Доставка и оплата в корзине магазина",
    delivery: "Доставка",
    deliveries: [{ label: "Пункт выдачи", note: "Ближайший к вашему адресу", map: "Изменить на карте" }, { label: "Курьер" }, { label: "Самовывоз" }],
    invoice: "Счёт на компанию",
    invoiceField: "NIP / VAT",
    payment: "Оплата",
    payments: [
      { label: "Карта", logos: ["visa", "mastercard"] },
      { label: "Apple Pay, Google Pay", logos: ["applePay", "googlePay"] },
      { label: "BLIK", note: "В Польше", logos: ["blik"] },
    ],
    button: "Оформить и оплатить",
    noAccount: "Без регистрации",
  },
  formBeforeAfter: {
    title: "Одна и та же форма обратной связи",
    tag: "до и после",
    before: "До",
    beforeCount: "7 полей · 3 галочки",
    beforeFields: ["Имя", "Фамилия", "Компания", "NIP / VAT", "Телефон", "Email", "Сообщение"],
    consents: [
      "Согласен на обработку моих персональных данных с целью…*",
      "Согласен получать рекламную информацию по…*",
      "Ознакомился с правилами и политикой конфиденциальности…*",
    ],
    longClause:
      "Администратор ваших персональных данных — … Данные обрабатываются с целью … на основании ст. 6 п. 1 … GDPR. Вы имеете право на доступ к данным, их исправление, удаление или ограничение обработки …",
    sendBefore: "Отправить",
    after: "После",
    afterCount: "3 поля · 1 строка",
    afterFields: ["Имя", "Телефон или email", "Чем можем помочь?"],
    shortClause: "Используем только для ответа на заявку. Кто обрабатывает данные и как долго —",
    privacy: "политика конфиденциальности",
    sendAfter: "Отправить заявку",
  },
  ga4Events: {
    title: "Ключевые события в Google Analytics 4",
    keyEvent: "Ключевое событие",
    events: [
      ["generate_lead", "Форма отправлена"],
      ["phone_click", "Нажатие на номер телефона"],
      ["whatsapp_click", "Чат в WhatsApp"],
      ["telegram_click", "Чат в Telegram"],
      ["purchase", "Оплаченный заказ"],
    ],
  },
};

export const SNIPPET_TEXTS: Record<string, Texts> = { pl, en, ru };
