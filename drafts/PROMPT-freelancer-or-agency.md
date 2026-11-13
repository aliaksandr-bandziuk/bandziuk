# Публикация статьи «Фрилансер или агентство» — промпт для агента

Три локали. Файлы с текстом:

- `drafts/blog-freelancer-or-agency-EN.md`
- `drafts/blog-freelancer-or-agency-PL.md`
- `drafts/blog-freelancer-or-agency-RU.md`

В каждом файле берётся всё, что ниже первой строки `---`, и раскладывается
одинаково:

| Часть файла | Куда |
|---|---|
| от первого `##` до конца раздела с проверками перед наймом | `[BODY]` → первый `textContent` |
| раздел `## FAQ` | `[FAQ]` → `faqBlock` |
| последний раздел («How to decide…», «Jak zdecydować…», «Как решить…») | второй `textContent`, **после** `faqBlock` |

Порядок блоков: `textContent → faqBlock → textContent`.

Заметки о локализации: `drafts/NOTES-freelancer-or-agency.md`.

## Теги

```
[TEMPLATE: blog]
[ID: freelancer-or-agency]

[SLUG]
en: freelancer-or-agency-for-your-website
pl: freelancer-czy-agencja-strona-internetowa
ru: frilanser-ili-studiya-dlya-saita

[HERO]
title:
  en: Freelancer or Agency for Your Website: How to Choose, and When Each One Is the Wrong Answer
  pl: Freelancer czy agencja przy stronie internetowej: jak wybrać i kiedy każda z odpowiedzi jest zła
  ru: Фрилансер или студия для сайта: как выбрать и когда каждый из ответов неверный
excerpt:
  en: When a web design agency is worth the money, when one specialist is the better call, what each actually costs, and what to check in the contract before anything is signed.
  pl: Kiedy agencja jest warta swojej ceny, kiedy lepszy jest jeden specjalista, ile realnie kosztuje każda opcja i co sprawdzić w umowie, zanim cokolwiek podpiszesz.
  ru: Когда студия стоит своих денег, когда лучше один специалист, сколько стоит каждый вариант и что проверить в договоре, особенно если подрядчик в другой стране.

[META]
title:
  en: Freelancer or Agency for a Website: How to Choose
  pl: Freelancer czy agencja: jak wybrać wykonawcę strony
  ru: Фрилансер или студия: как выбрать подрядчика на сайт
desc:
  en: When a web design agency is worth the money, when one specialist is better, what each actually costs, and what to check before you sign. Written by a solo developer.
  pl: Kiedy agencja jest warta swojej ceny, kiedy lepszy jest jeden specjalista, ile realnie kosztuje każda opcja i co sprawdzić w umowie, zanim cokolwiek podpiszesz.
  ru: Когда студия стоит своих денег, когда лучше один специалист, сколько стоит каждый вариант и что проверить в договоре, особенно если подрядчик в другой стране.

[CATEGORY: business-freelancing]

[DATE: 2026-11-09]

[BODY]
en / pl / ru: основная часть соответствующего файла, см. таблицу выше

[FAQ]
en: девять пар · pl: девять пар · ru: семь пар
```

**По категории.** В интерфейсе блога она называется «Business & Freelancing».
Слаг выше — предположение. Проверить запросом
`*[_type == "category" && slug.en.current == $slug]{ _id, language }`; он
возвращает по документу на локаль. Если такого слага нет, найти категорию по
заголовку «Business & Freelancing» и взять `_id` соответствующей локали. Если
категория отсутствует хотя бы в одной локали — остановиться и сообщить, не
создавая документов: `BlogIntro` разыменовывает `category.title` без проверки
на null, и страница упадёт.

**Число пар в FAQ разное** — это намеренно. Русская версия не повторяет
польские вопросы про фактуру и закупки, вместо них там вопрос про подрядчика
из другой страны. Проверка «каждому вопросу соответствует ответ» применяется
внутри локали, а не между локалями.

## Обложка

Файл: `drafts/article-figures/cover-freelancer-or-agency.png`, 3344×1882,
макет — `freelancer-or-agency-cover.html` в той же папке.

**Одна картинка на все три локали.** Текста на ней нет — как на всех
предыдущих обложках серии, — поэтому переводить нечего и локальных версий не
нужно. Во всех трёх документах `previewImage` ссылается на один и тот же
ассет; локализуется только `alt`:

- en: `Two routes from a brief to a result: one unbroken, one broken by three handovers`
- pl: `Dwie drogi od briefu do rezultatu: jedna ciągła, druga przerwana trzema przekazaniami`
- ru: `Два пути от задачи к результату: один сплошной, другой разорванный тремя передачами`

Перед загрузкой проверить `drafts/article-figures/.sanity-assets.json`: кеш
ассетов работает по имени файла, имя новое, конфликта быть не должно.

## Перелинковка

`serviceOffered` и `relatedArticles` разрешить запросом к Sanity, без
заглушек. Ориентиры по смыслу:

- услуги: разработка сайтов, редизайн с сохранением позиций, цены, портфолио —
  ссылки на них уже стоят в текстах, в каждой локали свои адреса;
- статьи: про стоимость сайта для малого бизнеса и про то, за что платят в
  SEO-аудите, — обе про цену и выбор подрядчика.

## Проверка после записи

- [ ] статьи открываются по всем трём адресам из `[SLUG]`;
- [ ] карточка есть в листинге `/blog`, `/pl/blog`, `/ru/blog`, категория и
      дата отображаются;
- [ ] `noindex` отсутствует на всех трёх;
- [ ] метатайтл ≤60 знаков, не равен `title` и не равен H1 — проверить в
      каждой локали отдельно;
- [ ] метаописание ≤160 знаков;
- [ ] блоков три и в порядке `textContent → faqBlock → textContent`;
- [ ] `translation.metadata` создан, на всех трёх страницах есть
      `rel="alternate"` с тремя языками. Искать именно `rel="alternate"`:
      React рендерит атрибут как `hrefLang`, и поиск по `hreflang="` даёт
      ложный ноль;
- [ ] `lastmod` в карте сайта обновился.

## Что сделать после публикации

Добавить входящие ссылки — по уроку 05.11 страница без ссылок остаётся
сиротой, пункт меню ссылкой не считается. Доноры: страница разработки сайтов,
страница цен и статья про стоимость сайта для малого бизнеса, в каждой локали
свои. Скрипт собирать по образцу `scripts/link-medical-batch-2026-11-07.cjs`
— с поиском документа по слагу и языку, а не по угаданному `_id`: на
медицинской партии шесть вставок из пятнадцати упали именно на этом.
