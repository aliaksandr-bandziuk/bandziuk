# Кейс tatsianabandziuk.com: под какие запросы затачивать страницу и что поменять

Проверка от 2026-09-18. Ничего не опубликовано и не закоммичено.

**Потрачено: $1,5007** из лимитов ($2 на сбор, $1,5 на выдачу, $0,5 на каннибализацию). Баланс DataForSEO до работы — $21,93, после — $20,43. Все 54 ответа API лежат в `research/dataforseo/raw/`, поэтому повторный прогон обоих скриптов стоит $0 (проверено).

Рынки — как в задаче. Объёмы: английский по Великобритании с США как ориентиром, польский по Польше, русский по Казахстану. Выдача: Великобритания, Польша, Польша с русским языком.

---

## 1. Главный вывод

У страницы кейса в каждом языке своя роль, и они разные.

| Язык | Реальный спрос | Задача страницы |
|---|---|---|
| EN | Есть, небольшой: «consulting / consultant website design» 90 (US 140), «consulting website examples» 20 (US 170), «website for consultants» 110. Выдача — подборки примеров сайтов консультантов. | Встать в эту выдачу как ещё один пример и забрать низкочастотный хвост. |
| PL | Ниже порога Google Ads по всем формулировкам про эксперта, консультанта и доверенное лицо. Интент при этом подтверждён выдачей: по «strona dla eksperta» в топе те, кто продаёт «strony internetowe dla ekspertów». | Доверие и цитирование ИИ. Поиск — только в длинном хвосте. |
| RU | Практически ноль: максимум 10 запросов в месяц у «сайт эксперта», «сайт аналитика», «кейс создание сайта». | Доверие и цитирование ИИ. Об этом уже честно сказано в подписи к скриншоту 9 черновика. |

ИИ-блок в выдаче есть почти везде: EN 10 из 11, PL 9 из 9, RU 8 из 9. Поэтому борьба идёт прежде всего за то, чтобы абзац кейса можно было процитировать, а не за позицию.

## 2. Две формулировки черновика ведут в чужой интент

- **RU «сайт для консультанта».** Весь топ-10 — это виджеты «онлайн-консультант для сайта» (Carrot quest, Envybox, Rush Analytics). У «сайт консультанта» (10 в месяц) риск тот же. Слаг черновика `sayt-konsultanta-…`, [TITLE] «Трёхъязычный сайт консультанта…» и первый H3 стоят ровно на этом слове. Правильный термин — **«сайт эксперта»**: там гайды «как сделать личный сайт эксперта» и шаблоны сайтов специалистов, то есть наш интент.
- **PL «strona dla konsultanta».** Топ занят «konsultant krajowy / wojewódzki» — это должности в медицине. «strona internetowa dla doradcy» даёт налоговых консультантов. Правильный термин — **«strona dla eksperta»**.

В английском «consultant» работает как надо.

## 3. Каннибализация с bandziuk.com

Полная таблица: `research/dataforseo/cannibalization.md`.

Метод. Каждый запрос сопоставлен со всеми 441 адресом карты сайта. Для каждого адреса сравнивались slug, title, H1, meta title, H2/H3 и вопросы FAQ из Sanity. Плюс выгрузка Search Console за 3 месяца до 2026-09-11 и `ranked_keywords` DataForSEO.

**Уже ранжируется: ни один из кандидатов.** Ни в Search Console, ни в DataForSEO, ни в топ-20 снятых выдач. Запросы Search Console по темам кейса, которые трогать нельзя:
- «beauty salon website consultant» — 32 показа, позиция 49;
- «кейс недвижимость на кипре» — 9 показов, позиция 27;
- «стоимость seo консультация», «seo consulting price», «landing page conversion consultant», «modelki portfolio».

Ни один из них не пересекается с кейсом.

**Не для кейса: у запроса уже есть своя страница.**

| Запрос | Чья страница |
|---|---|
| next js website development / tworzenie stron next js / сайт на next js | страницы разработки + RU-кейс `oficialnyi-sait-sasha-dith` |
| multilingual website development / strona wielojęzyczna / многоязычный сайт | страницы многоязычной разработки |
| generative engine optimization, ai search optimization | GEO-хаб и SEO-стратегия |
| pozycjonowanie w ai / w chatgpt | `/pl/oferty/pozycjonowanie-w-ai-i-chatgpt` |
| llm seo, ai overview optimization | частично AEO-страница и исследование 141 ответа; это территория услуг |
| как попасть в ответы chatgpt | `/ru/blog/kak-popast-v-rekomendacii-chatgpt` (частично, но интент тот же) |
| strona osobista | PL-кейс `tworzenie-i-optymalizacja-strony-osobistej-z-seo` |
| website consultant, website development consultant | это запрос про вас как исполнителя: главная и /about, не кейс |
| seo case study, website case study | в названиях уже есть у нескольких кейсов; общий запрос, не цель этого кейса |

Вывод для текста. Разделы кейса про ИИ-цитируемость, многоязычность и Next.js нужны, но их заголовки не должны повторять формулировки страниц услуг. Каждый такой раздел должен ссылаться на свою страницу услуги: это распределяет вес правильно. Где что поставить, указано ниже.

**Свободно и подходит кейсу:**
- EN: consulting / consultant website design, consulting / consultant website examples, website for consultants, expert website, sanity cms examples;
- PL: strona dla eksperta, kalkulator na stronie;
- RU: сайт эксперта, пример сайта эксперта, кейс создание сайта, калькулятор для сайта / на сайт.

## 4. Правки по языкам

### EN

**Основной запрос: consulting / consultant website design.**
- Объём: по 90 в Великобритании, по 140 в США.
- Сложность «consultant website design» — 0.
- У bandziuk.com своей страницы нет.
- Выдача — это ровно «покажите пример сайта консультанта»: freelancecake «29 Best Consultant Website Examples», Dribbble, Reddit «Can anyone recommend examples of well-designed…».
- Второй по смыслу запрос — «consulting / consultant website examples» (US 170). Его закрывает слово «example» в description и лиде.

| Поле | Предложение | Знаков |
|---|---|---|
| title | Case study: consultant website design for retail analytics | 58 |
| description | A consultant website example: 153 pages in three languages, five retail calculators, Excel templates and pages written to be quoted in AI answers. | 146 |
| H1 | Consulting website design case study: a trilingual site for a retail analytics consultant | 89 |

**Лид**, первым абзацем, как готовый ответ на «what should a consultant website look like»:

> This is a consultant website built as a working tool rather than a brochure: 153 pages in English, Polish and Russian, five retail calculators, downloadable Excel templates and articles that open with the answer. It speaks the language of Excel and Power BI — the tools the consultant's clients use every day — and runs on Next.js and Sanity.

**Акценты английской версии.** Пример сайта консультанта и что на нём должно быть. PAA: «What are some good websites for consultants?», «How to make a consulting website?». Калькуляторы как польза до заявки. Sanity: в выдаче «sanity cms examples» стоят showcase-страницы Sanity и Awwwards, кейс туда встаёт как пример.

**Заголовки для английской версии** (из секций RU-черновика, под английский спрос):
1. What a consultant website has to do: prove expertise, earn search traffic and be useful first
2. Search demand research for a consultant website in three languages
3. How a consultant website is built to be quoted in AI Overviews and ChatGPT answers — со ссылкой на `/services/answer-engine-optimization-services`
4. Person and service structured data: how the site tells search engines who the consultant is
5. An Excel-style interface: a spreadsheet contact form and a status bar that sums selected numbers
6. A case study page that works like a Power BI report: highlight instead of filter
7. Charts on the consultant website render on the server and stay visible without JavaScript
8. Five retail calculators, each on its own page
9. Excel templates with every formula checked by calculation
10. Why this consultant website is a tool rather than a brochure
11. Three languages, three markets: why the site was written, not translated — со ссылкой на `/services/multilingual-website-development`
12. Next.js and Sanity: fast pages that keep building when the CMS is down
13. How enquiries and template requests from the site reach the consultant's inbox
14. What is still left to do on the consultant website

### PL

**Основной запрос: strona dla eksperta.**
- Объём ниже порога Google Ads, и я этого не скрываю.
- Выбор держится на интенте: в выдаче stronaeksperta.pl и stronadlaeksperta.pl продают «strony internetowe dla ekspertów», то есть человек ищет именно такой сайт.
- «konsultant» и «doradca» уводят в чужую выдачу (раздел 2).

Вторичные запросы:
- «kalkulator na stronie» (10) — выдача про то, как добавить калькулятор на сайт;
- «Sanity CMS» (480, информационный) — упомянуть в заголовке технического раздела, не целиться.

| Поле | Предложение | Знаков |
|---|---|---|
| title | Case study: strona dla eksperta od analityki handlu | 51 |
| description | Przykład strony eksperta od analityki handlu: 153 podstrony w trzech językach, pięć kalkulatorów, szablony Excel i treści gotowe do cytowania przez AI. | 151 |
| H1 | Strona internetowa dla eksperta od analityki handlu: projekt, wdrożenie i przygotowanie pod odpowiedzi AI | 105 |

**Лид:**

> To przykład strony eksperta, która najpierw pomaga, a dopiero potem sprzedaje: 153 podstrony po angielsku, polsku i rosyjsku, pięć kalkulatorów dla handlu, szablony Excel do pobrania i artykuły zaczynające się od odpowiedzi. Interfejs mówi językiem Excela i Power BI — narzędzi, w których na co dzień pracują klienci tej konsultantki.

**Акценты польской версии.** Страница эксперта как инструмент. Калькуляторы на сайте — у этого есть свой польский спрос. Польская версия написана под польский спрос: в черновике это категорийный менеджмент и прогноз продаж. Технический раздел — с упоминанием Sanity CMS.

**Заголовки:**
1. Jaka strona internetowa była potrzebna ekspertowi od analityki handlu
2. Analiza zapytań przed projektem: czego szukają klienci eksperta w trzech językach
3. Jak strona eksperta jest przygotowana do cytowania w odpowiedziach AI i Google AI Overviews — ссылка на `/pl/oferty/pozycjonowanie-w-ai-i-chatgpt`; сама формулировка «pozycjonowanie w AI» остаётся за той страницей
4. Dane strukturalne Schema.org: jak wyszukiwarka i AI rozpoznają, kim jest ekspert
5. Interfejs w stylu Excela: formularz kontaktowy jak arkusz i pasek stanu z sumą
6. Strona realizacji jak raport Power BI: podświetlenie zamiast filtra
7. Wykresy na stronie eksperta rysowane na serwerze i widoczne bez JavaScriptu
8. Kalkulatory na stronie: pięć kalkulatorów dla handlu na osobnych podstronach
9. Szablony Excel do pobrania z każdą formułą sprawdzoną obliczeniem
10. Strona eksperta jako narzędzie, a nie wizytówka usług
11. Trzy wersje językowe jako trzy rynki, a nie tłumaczenie — ссылка на `/pl/oferty/tworzenie-stron-wielojezycznych`
12. Next.js i Sanity CMS: szybka strona, która działa także bez panelu administracyjnego
13. Jak zapytanie i prośba o szablony trafiają ze strony na skrzynkę eksperta
14. Co na stronie eksperta zostało jeszcze do zrobienia

### RU

**Основной запрос: сайт эксперта.**
- 10 в месяц — честно, почти ноль, как и всё в русском.
- Выдача с нужным интентом: как сделать личный сайт эксперта и примеры.
- Вторичные: «кейс создание сайта» (10; выдача — списки кейсов агентств, наш кейс — ровно такой документ) и «калькулятор для сайта / на сайт» (10 и 30).
- Главная задача русской версии — доверие и цитирование, поэтому решает точность формулировок, а не объём.

| Поле | Предложение | Знаков |
|---|---|---|
| slug | `sayt-eksperta-po-analitike-riteyla` вместо `sayt-konsultanta-po-analitike-riteyla`; страница не опубликована, редирект не нужен | — |
| [TITLE] | Сайт эксперта по аналитике ритейла на трёх языках | 49 |
| metaTitle | Кейс: сайт эксперта по аналитике ритейла на Next.js | 51 |
| metaDescription | Пример сайта эксперта: 153 страницы на трёх языках, пять калькуляторов ритейла, шаблоны Excel и тексты, которые удобно цитировать ИИ-ассистентам. | 145 |
| H1 | Создание сайта эксперта по аналитике ритейла: дизайн, разработка и подготовка к ИИ-поиску | 89 |

**Лид.** Поставить перед [PROBLEM] или вместо первого абзаца первого раздела:

> Это сайт эксперта, который сначала помогает, а потом продаёт: 153 страницы на английском, польском и русском, пять калькуляторов ритейла, шаблоны Excel для скачивания и статьи, которые начинаются с ответа. Интерфейс говорит языком Excel и Power BI — инструментов, в которых каждый день работают клиенты консультанта.

**Заголовки черновика** (`### …`): что переформулировать и почему.

| Сейчас | Предлагаю | Почему |
|---|---|---|
| Сайт консультанта по аналитике ритейла: что именно требовалось получить | Какой сайт эксперта по аналитике ритейла требовался: опыт, поиск и польза до заявки | «сайт консультанта» — интент виджетов (раздел 2) |
| Что показало изучение спроса до того, как начали проектировать структуру | Изучение спроса для сайта эксперта: что спрашивают об аналитике ритейла на трёх языках | без предмета заголовок не читается отдельно |
| Как сайт готовили к тому, чтобы его цитировали поисковики и чат-боты | Как сайт эксперта готовили к цитированию в ответах ChatGPT, Perplexity и Google | называет платформы; «как попасть в ответы ChatGPT» оставить блогу; в разделе ссылка на `/ru/uslugi/podgotovka-saita-k-ii-poisku` |
| Служебное описание страниц: как сайт объясняет поисковику, кто такой консультант | Микроразметка Schema.org на сайте эксперта: как поисковик и ИИ узнают автора | «служебное описание» никто не ищет; термин — «микроразметка» |
| Интерфейс сайта говорит языком Excel: форма-таблица и строка состояния | Интерфейс в стиле Excel: контактная форма-таблица и строка состояния с суммой | уже почти самодостаточен, уточнён предмет |
| Страница кейсов работает как отчёт Power BI: подсветка вместо фильтра | Страница кейсов в стиле отчёта Power BI: подсветка вместо фильтра | годится, минимальная правка |
| Графики на сайте видны даже без скриптов | Графики на сайте эксперта рисуются на сервере и видны без JavaScript | называет и предмет, и способ |
| Пять калькуляторов ритейла на отдельных страницах | Калькуляторы на сайте: пять калькуляторов ритейла на отдельных страницах | «калькулятор на сайт / для сайта» — единственный живой спрос в RU |
| Excel-шаблоны, у которых каждая формула проверена расчётом | Шаблоны Excel для скачивания: каждая формула проверена расчётом | годится, добавлено действие |
| Почему сайт сделан помощником, а не витриной услуг | Сайт эксперта как инструмент, а не витрина услуг: зачем калькуляторы и шаблоны | ключевой термин + ответ в заголовке |
| Три языка сайта как три рынка, а не три перевода одного текста | Три языковые версии как три рынка, а не перевод: как писали сайт эксперта | «многоязычный сайт» не выносить — это страница услуги; в разделе ссылка на `/ru/uslugi/razrabotka-multiyazychnogo-saita` |
| Как устроен сайт внутри: скорость и независимость от админки | Сайт на Next.js и Sanity: быстрая загрузка и независимость от админки | называет стек |
| Как заявка с сайта доходит до владельца | Как заявка и запрос шаблонов с сайта эксперта доходят на почту | «владельца» неясно вне контекста |
| Что на сайте осталось доделать | Что на сайте эксперта осталось доделать после запуска | без предмета не читается |

## 5. Что убрать из черновика независимо от запросов

Работодатель упомянут дважды. Имени нет, но само упоминание противоречит правилу «не упоминать нигде»:
1. [PROBLEM], последний абзац: «Отдельное ограничение задали с самого начала: текущего работодателя консультанта нельзя называть нигде — ни в текстах, ни в служебном описании страниц, ни цифрами, по которым его можно вычислить.» Удалить абзац целиком.
2. Раздел про служебное описание: «Места работы в описании нет намеренно — из-за ограничения по работодателю.» Удалить. Следующее предложение («И весь блок отдаётся сразу…») начать с «Весь блок отдаётся сразу…», потому что «Два решения внутри» станет одним.

Про аналитику сайта, счётчики и cookie-баннер в черновике ничего нет, и в предложениях выше тоже.

## 6. Вопросы для ручной проверки цитируемости (контроль «до публикации»)

Как проверять:
- каждый вопрос задать в ChatGPT (с поиском), в Perplexity и в Google (AI Overview или AI Mode);
- браузер без входа в аккаунт, формулировка дословно, одна дата на весь прогон;
- записать, есть ли в источниках bandziuk.com и tatsianabandziuk.com и названы ли они в тексте.

Вопросы со звёздочкой — рекомендательные («кого нанять»): по ним домен должен появиться после публикации. Остальные проверяют, цитируется ли кейс как источник знания.

### EN (26)
1. What should a consultant website include?
2. What are good examples of consultant websites?
3. How do I design a website for a consulting business?
4. What makes a consulting website turn visitors into enquiries?
5. Should a consultant's website offer free tools like calculators?
6. How do you build a website for a retail analytics consultant?
7. How can an expert website prove expertise in the first few seconds?
8. How can a consultant website get cited in Google AI Overviews?
9. How do I make my website content easy for ChatGPT to quote?
10. Do AI chatbots read FAQ answers that are collapsed on the page?
11. Do ChatGPT and Perplexity run JavaScript when they read a website?
12. Should formulas and tables on a website be text rather than images?
13. Which crawlers should a website allow for AI search, and which can it block?
14. How should structured data describe a consultant and their qualifications?
15. Is it better to translate a website or write each language separately?
16. How do I structure a website for the UK, Poland and Russian-speaking readers?
17. Is Next.js with Sanity a good stack for a consultant website?
18. What are examples of websites built with Sanity CMS?
19. How do you build a website that still works if the CMS goes down?
20. Should calculators be separate pages or widgets inside articles for SEO?
21. How do you protect a contact form from spam without a captcha?
22. How do you make charts on a website visible without JavaScript?
23. What does a good web design case study include?
24. \* Who designs websites for consultants in Poland?
25. \* Who can build a multilingual website optimised for AI search in Europe?
26. \* Which freelance developers build Next.js and Sanity websites for consultants?

### PL (24)
1. Co powinna zawierać strona internetowa eksperta?
2. Jak zaprojektować stronę dla eksperta lub konsultanta biznesowego?
3. Jakie są dobre przykłady stron internetowych ekspertów?
4. Czy warto dodać kalkulator na stronę internetową?
5. Jak dodać kalkulator na stronę, żeby pomagał w SEO?
6. Czy kalkulatory powinny mieć osobne podstrony?
7. Jak sprawić, żeby strona była cytowana w odpowiedziach AI?
8. Jak przygotować treści pod Google AI Overviews?
9. Czy ChatGPT widzi treść schowaną w rozwijanych sekcjach FAQ?
10. Czy boty AI wykonują JavaScript na stronie?
11. Jakie dane strukturalne dodać na stronie eksperta?
12. Czy stronę wielojęzyczną lepiej tłumaczyć, czy pisać osobno dla każdego rynku?
13. Jak zbudować adresy URL w polskiej wersji strony bez polskich znaków?
14. Czy Sanity CMS to dobry wybór dla strony firmowej?
15. Next.js czy WordPress dla strony eksperta?
16. Co zrobić, żeby strona działała, gdy panel CMS jest niedostępny?
17. Jak zabezpieczyć formularz kontaktowy przed spamem bez captchy?
18. Jak pokazać kompetencje eksperta na stronie w kilka sekund?
19. Czy strona eksperta powinna mieć szablony Excel do pobrania?
20. Jak wysłać plik do pobrania po zapisie z formularza?
21. Jak powinno wyglądać case study strony internetowej?
22. \* Kto robi strony internetowe dla ekspertów w Polsce?
23. \* Kto zrobi wielojęzyczną stronę przygotowaną pod wyszukiwarki AI?
24. \* Jaki freelancer robi strony na Next.js i Sanity w Warszawie?

### RU (24)
1. Что должно быть на сайте эксперта?
2. Как сделать личный сайт эксперта, который приводит клиентов?
3. Какие есть примеры хороших сайтов экспертов?
4. Зачем эксперту на сайте калькуляторы?
5. Как добавить калькулятор на сайт так, чтобы он работал на SEO?
6. Калькулятор лучше делать отдельной страницей или виджетом в статье?
7. Как сделать, чтобы сайт цитировали в ответах ИИ?
8. Видят ли ChatGPT и Perplexity ответы в свёрнутых блоках FAQ?
9. Выполняют ли ИИ-боты JavaScript на сайте?
10. Почему формулы и таблицы на сайте лучше давать текстом, а не картинкой?
11. Каких роботов пускать на сайт ради ИИ-поиска, а каких можно закрыть?
12. Какую микроразметку Schema.org ставить на сайт эксперта?
13. Как показать дипломы и сертификаты эксперта в микроразметке?
14. Переводить сайт на другие языки или писать отдельно под каждый рынок?
15. Как делать адреса русских страниц: кириллицей или латиницей?
16. Подходит ли связка Next.js и Sanity для сайта эксперта?
17. Как сделать, чтобы сайт работал, если админка недоступна?
18. Как защитить форму на сайте от спама без капчи?
19. Как отправить посетителю файл на почту после заявки с сайта?
20. Что должно быть в кейсе по созданию сайта?
21. Как на сайте показать экспертность за несколько секунд?
22. \* Кто делает сайты для экспертов в Польше на русском языке?
23. \* Кто сделает многоязычный сайт, подготовленный к ИИ-поиску?
24. \* Какой разработчик делает сайты на Next.js и Sanity для консультантов?

## 7. Файлы

- `scripts/dataforseo/check-case-page.cjs`, переписан:
  - сбор идут в два этапа: идеи и объёмы, потом выдача по `research/dataforseo/serp-plan.json`;
  - баланс показывается и в сухом прогоне;
  - лимит проверяется до вызова (по оценке) и после (по факту);
  - неудачные задачи не кэшируются;
  - добавлены США для EN, фразовые подсказки и две ручные партии формулировок;
  - в отчёте — затраты этого прогона и стоимость кэша.
- `scripts/dataforseo/check-cannibalization.cjs`, новый: сверка кандидатов с картой сайта, Sanity, Search Console и ranked_keywords.
- `research/dataforseo/`:
  - `report.json`, `keywords-{en,pl,ru}.csv`;
  - `serp-plan.json`, `serp-summary.txt`;
  - `cannibalization.md` / `.json`;
  - `gsc/` — копия выгрузки Search Console от 2026-09-11 из `drafts/gsc-data/`;
  - `raw/` — кэш.
