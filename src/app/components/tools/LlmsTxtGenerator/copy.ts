export type LlmsLang = "en" | "pl" | "ru";

export const LLMS_COPY = {
  en: {
    meta: {
      title: "llms.txt Generator: Build an llms.txt File From Your Sitemap",
      description:
        "Free llms.txt generator. Paste your site address, get a valid llms.txt built from your sitemap, edit the titles and download it. No sign-up.",
    },
    eyebrow: "Free tool",
    title: "llms.txt generator",
    lead:
      "Enter a site address. The tool reads its sitemap, groups the pages into sections and writes a valid llms.txt you can edit and download.",
    facts: [
      "Reads the sitemap only — your pages are not crawled.",
      "Titles are guessed from the URLs, so edit them before publishing.",
      "No account, no email, nothing stored.",
    ],
    form: {
      urlLabel: "Site address or sitemap URL",
      urlPlaceholder: "example.com",
      nameLabel: "Site name (optional)",
      namePlaceholder: "Taken from the domain when empty",
      summaryLabel: "One-line summary (optional)",
      summaryPlaceholder: "What the site is, in one sentence",
      submit: "Generate llms.txt",
      submitting: "Reading the sitemap…",
      manualToggle: "Or paste a list of URLs instead",
      manualLabel: "One URL per line",
      manualSubmit: "Generate from this list",
    },
    result: {
      title: "Your llms.txt",
      note: "Save it as llms.txt in your site root, so it answers at /llms.txt.",
      copy: "Copy",
      copied: "Copied",
      download: "Download llms.txt",
      found: (n: number, host: string) => `${n} URLs from ${host}`,
      truncated: "This sitemap is an index; only the first child sitemaps were read.",
    },
    errors: {
      "bad-url": "That does not look like a site address.",
      "no-sitemap": "No sitemap found at /sitemap.xml. Paste the sitemap address, or use the URL list below.",
      "empty-sitemap": "The sitemap was found but holds no page addresses.",
      "rate-limit": "Too many generations from this address. Try again in a few minutes.",
      origin: "Request rejected. Reload the page and try again.",
      network: "Could not reach that site. Check the address, or paste the URLs below.",
    },
    about: {
      title: "What this generator does, and what it cannot do",
      paragraphs: [
        "llms.txt is a plain-text file at the root of a site that lists its pages with titles, so an assistant reading the site has a map instead of a crawl. The format is an H1 with the site name, an optional one-line summary, then sections of links.",
        "This tool builds the skeleton: it reads your sitemap, groups pages by their first path segment and derives a title from each address. It does not open your pages, so those titles are guesses — go through them before you publish. A file whose titles match the slugs is worse than no file at all.",
        "It also cannot tell you whether the file will change anything. On that, read the honest answer below rather than any vendor's claim.",
      ],
    },
    links: { article: "/blog/does-your-site-need-llms-txt", articleLabel: "Does your site need an llms.txt file?" },
  },

  pl: {
    meta: {
      title: "Generator llms.txt: zbuduj plik llms.txt z mapy witryny",
      description:
        "Darmowy generator llms.txt. Podaj adres strony, otrzymaj poprawny plik llms.txt zbudowany z mapy witryny, popraw tytuły i pobierz. Bez rejestracji.",
    },
    eyebrow: "Darmowe narzędzie",
    title: "Generator llms.txt",
    lead:
      "Podaj adres strony. Narzędzie odczyta mapę witryny, pogrupuje podstrony w sekcje i zapisze poprawny plik llms.txt, który możesz poprawić i pobrać.",
    facts: [
      "Czyta wyłącznie mapę witryny — podstrony nie są pobierane.",
      "Tytuły są zgadywane z adresów, popraw je przed publikacją.",
      "Bez konta, bez e-maila, nic nie jest zapisywane.",
    ],
    form: {
      urlLabel: "Adres strony lub mapy witryny",
      urlPlaceholder: "przyklad.pl",
      nameLabel: "Nazwa strony (opcjonalnie)",
      namePlaceholder: "Puste pole — nazwa z domeny",
      summaryLabel: "Jednozdaniowy opis (opcjonalnie)",
      summaryPlaceholder: "Czym jest ta strona, w jednym zdaniu",
      submit: "Generuj llms.txt",
      submitting: "Czytam mapę witryny…",
      manualToggle: "Albo wklej listę adresów",
      manualLabel: "Jeden adres w linii",
      manualSubmit: "Generuj z tej listy",
    },
    result: {
      title: "Twój llms.txt",
      note: "Zapisz jako llms.txt w katalogu głównym, żeby odpowiadał pod /llms.txt.",
      copy: "Kopiuj",
      copied: "Skopiowano",
      download: "Pobierz llms.txt",
      found: (n: number, host: string) => `${n} adresów z ${host}`,
      truncated: "Ta mapa jest indeksem; odczytano tylko pierwsze mapy podrzędne.",
    },
    errors: {
      "bad-url": "To nie wygląda na adres strony.",
      "no-sitemap": "Nie znaleziono mapy pod /sitemap.xml. Podaj adres mapy albo użyj listy adresów poniżej.",
      "empty-sitemap": "Mapa witryny została znaleziona, ale nie zawiera adresów podstron.",
      "rate-limit": "Zbyt wiele generowań z tego adresu. Spróbuj za kilka minut.",
      origin: "Żądanie odrzucone. Odśwież stronę i spróbuj ponownie.",
      network: "Nie udało się połączyć z tą stroną. Sprawdź adres albo wklej adresy poniżej.",
    },
    about: {
      title: "Co robi ten generator, a czego nie potrafi",
      paragraphs: [
        "llms.txt to plik tekstowy w katalogu głównym strony, który wymienia podstrony wraz z tytułami, żeby asystent czytający witrynę dostał mapę zamiast przeszukiwania. Format to nagłówek H1 z nazwą strony, opcjonalne jednozdaniowe streszczenie i sekcje z odnośnikami.",
        "Narzędzie buduje szkielet: czyta mapę witryny, grupuje podstrony według pierwszego segmentu adresu i wyprowadza tytuł z adresu. Nie otwiera podstron, więc te tytuły to przypuszczenia — przejrzyj je przed publikacją. Plik z tytułami skopiowanymi ze slugów jest gorszy niż brak pliku.",
        "Nie powie też, czy plik cokolwiek zmieni. O tym jest szczera odpowiedź pod spodem, a nie zapewnienia dostawców.",
      ],
    },
    links: { article: "/pl/blog/czy-strona-potrzebuje-pliku-llms-txt", articleLabel: "Czy Twoja strona potrzebuje pliku llms.txt?" },
  },

  ru: {
    meta: {
      title: "Генератор llms.txt: соберите файл llms.txt из карты сайта",
      description:
        "Бесплатный генератор llms.txt. Укажите адрес сайта, получите корректный llms.txt, собранный из карты сайта, поправьте заголовки и скачайте. Без регистрации.",
    },
    eyebrow: "Бесплатный инструмент",
    title: "Генератор llms.txt",
    lead:
      "Укажите адрес сайта. Инструмент прочитает карту сайта, разложит страницы по разделам и соберёт корректный llms.txt, который можно поправить и скачать.",
    facts: [
      "Читает только карту сайта — сами страницы не скачиваются.",
      "Заголовки выводятся из адресов, поправьте их перед публикацией.",
      "Без аккаунта, без почты, ничего не сохраняется.",
    ],
    form: {
      urlLabel: "Адрес сайта или карты сайта",
      urlPlaceholder: "primer.ru",
      nameLabel: "Название сайта (необязательно)",
      namePlaceholder: "Пусто — возьмём из домена",
      summaryLabel: "Описание одной строкой (необязательно)",
      summaryPlaceholder: "Что это за сайт, одним предложением",
      submit: "Собрать llms.txt",
      submitting: "Читаю карту сайта…",
      manualToggle: "Или вставьте список адресов",
      manualLabel: "По одному адресу в строке",
      manualSubmit: "Собрать из этого списка",
    },
    result: {
      title: "Ваш llms.txt",
      note: "Сохраните как llms.txt в корне сайта, чтобы он отвечал по адресу /llms.txt.",
      copy: "Скопировать",
      copied: "Скопировано",
      download: "Скачать llms.txt",
      found: (n: number, host: string) => `${n} адресов с ${host}`,
      truncated: "Это индекс карт сайта; прочитаны только первые вложенные карты.",
    },
    errors: {
      "bad-url": "Это не похоже на адрес сайта.",
      "no-sitemap": "Карта сайта по адресу /sitemap.xml не найдена. Укажите адрес карты или вставьте список ниже.",
      "empty-sitemap": "Карта сайта найдена, но адресов страниц в ней нет.",
      "rate-limit": "Слишком много запусков с этого адреса. Попробуйте через несколько минут.",
      origin: "Запрос отклонён. Обновите страницу и попробуйте снова.",
      network: "Не удалось связаться с этим сайтом. Проверьте адрес или вставьте список ниже.",
    },
    about: {
      title: "Что этот генератор делает и чего не умеет",
      paragraphs: [
        "llms.txt — текстовый файл в корне сайта, который перечисляет страницы с заголовками, чтобы ассистент получил карту вместо обхода. Формат: заголовок H1 с названием сайта, необязательное описание одной строкой и разделы со ссылками.",
        "Инструмент собирает каркас: читает карту сайта, группирует страницы по первому сегменту адреса и выводит заголовок из адреса. Сами страницы он не открывает, поэтому заголовки — предположения. Пройдитесь по ним перед публикацией: файл с заголовками, скопированными из слагов, хуже, чем его отсутствие.",
        "И он не скажет, изменит ли файл хоть что-нибудь. Об этом — честный ответ ниже, а не обещания поставщиков.",
      ],
    },
    links: { article: "/ru/blog/nuzhen-li-saitu-fail-llms-txt", articleLabel: "Нужен ли сайту файл llms.txt?" },
  },
} as const;
