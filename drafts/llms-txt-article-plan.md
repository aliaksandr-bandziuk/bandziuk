# llms.txt: запросы и структура — план на 12 октября 2026

## Вывод до всего остального: писать новую статью не нужно

Статья уже есть: **`/blog/does-your-site-need-llms-txt`**, «Does Your Site Need
an llms.txt File? An Honest Answer», опубликована 14 августа, 1 418 слов, есть
во всех трёх языках. В Search Console — 22 показа, **позиция 23,3**, ноль кликов.

Поэтому задача не «написать», а «переделать так, чтобы попасть на первую
страницу». Это прямо следует из правила в CLAUDE.md: отсутствие результата не
означает отсутствие покрытия, сначала читаем, что уже есть.

## Кластер запросов, в месяц

| Запрос | США | Британия |
| --- | --- | --- |
| llms txt | 5 400 | 1 600 |
| llms txt file | 880 | 210 |
| llms txt generator | 480 | 140 |
| llms txt example | 170 | 50 |
| llms full txt | 170 | 30 |
| llms txt validator | 90 | 20 |
| llms txt best practices | 70 | 10 |
| llms txt format | 40 | 10 |
| does llms txt work | 30 | 10 |
| nextjs llms txt | 30 | 10 |
| how to create llms txt | 20 | 10 |
| llms txt vs robots txt | 20 | 10 |
| llms txt seo / wordpress / gptbot robots txt | по 20 | по 10 |
| is llms txt necessary / mcp / hub / vscode / github | по 10 | по 10 |
| **Итого** | **≈ 7 510** | **≈ 2 180** |

Около **9 700 запросов в месяц**. Для сравнения: весь сайт получает 18 953
показа за квартал.

## Что показывает выдача

Первая восьмёрка по `llms txt`: mohitsseotraining.com (**бесплатный генератор**),
zonkey.co.uk («should your website have one»), Medium (про Copilot в VS Code),
LinkedIn, sociusmarketing.com, strategized.ai, YouTube, panovistamarketing.com.

Ни Semrush, ни Ahrefs, ни Moz. Это слабая выдача при 5 400 запросах.

Ответ ИИ сверху цитирует: llmstxt.org, developer.chrome.com, Reddit, Semrush,
Ahrefs, Mintlify, GitBook, tryprofound, Yotpo.

**Блок «люди также спрашивают»** — сплошь базовые сомнения:
What does llm mean in text? · What is the format of a robots.txt file? ·
What can you open a txt file with? · Is llm.txt useful? · Is llms.txt still
used? · Is llms.txt mandatory?

**Связанные запросы — почти целиком для разработчиков:**
llms txt file · llms txt github · vscode llms txt · llms txt hub · llms-txt MCP ·
**nextjs llms-txt** · llms txt tanstack · shadcn llms txt

Это главное открытие замера. Значительная доля ищущих — не маркетологи с
вопросом «нужен ли мне файл», а **разработчики, которым нужно его сделать или
подключить**. Нынешняя статья отвечает только первым, поэтому и стоит 23-й.

## Чего не хватает нынешней статье

Сейчас в ней девять подзаголовков, и все отвечают на один вопрос — стоит ли
заводить файл. Не закрыты намерения, которые дают основной объём:

- что это за файл и какой у него формат (`file`, `format`, `example` — 1 310);
- как его создать (`generator`, `how to create` — 650, и генератор стоит первым
  в выдаче);
- работает ли он на самом деле (`does llms txt work`, `is llms txt necessary`);
- чем отличается от robots.txt (`llms txt vs robots txt`, `gptbot robots txt`);
- как сделать в своём стеке (`nextjs llms txt`, `wordpress`, `vscode`, `MCP`).

И нет ни строчки кода, хотя у автора на сайте работает маршрут
`src/app/llms.txt/route.ts`, который собирает файл из Sanity.

## Предлагаемая структура

Заголовок: **llms.txt: what it is, how to write one, and whether it does
anything** — покрывает «what», «how» и «does it work» сразу.
Слаг оставить прежний: `does-your-site-need-llms-txt` (переезды сейчас не нужны,
а адрес уже имеет историю).

Быстрый ответ в первом абзаце — как в остальных статьях.

| H2 | Целевые запросы |
| --- | --- |
| What an llms.txt file is, and what goes in it | llms txt file, llms txt |
| The llms.txt format, with a working example | llms txt format, llms txt example |
| llms.txt vs robots.txt: they solve different problems | llms txt vs robots txt, gptbot robots txt |
| How to create an llms.txt file: by hand, by generator, or from your CMS | how to create llms txt, llms txt generator |
| Generating llms.txt in Next.js from a headless CMS | nextjs llms txt |
| llms.txt in WordPress and other stacks | llms txt wordpress |
| Does llms.txt actually work? What the data shows | does llms txt work, is llms txt necessary |
| Is llms.txt still used, and who reads it | llms txt hub, vscode llms txt, llms-txt MCP |
| Common questions about llms.txt | блок FAQ из «люди также спрашивают» |

Девять подзаголовков, в восьми — целевой запрос.

### Что сюда кладём из своего

1. **Рабочий код маршрута** из `src/app/llms.txt/route.ts` — генерация файла из
   Sanity. Ни у кого в первой восьмёрке кода нет.
2. **Честный ответ про эффект.** Это уже сильная сторона нынешней статьи, её
   сохранить целиком — она отличает текст от восьми рекламных материалов.
3. **Собственные данные.** Если выгрузите из Vercel логи обращений к
   `/llms.txt` за месяц, получится то, чего нет ни у кого: кто и сколько раз
   реально запрашивал файл. Без логов этот раздел не делаем — выдумывать нечего.
4. Ссылка на исследование 141 ответа ассистентов как доказательство подхода.

### FAQ из блока «люди также спрашивают»

Дословно, потому что именно эти формулировки Google показывает:
Is llms.txt mandatory? · Is llms.txt still used? · Is llm.txt useful? ·
What is the format of a robots.txt file? — и «llms.txt vs robots.txt» как
отдельный вопрос.

## Распространение

Medium и LinkedIn **сами стоят на первой странице** по `llms txt`. Значит
публикация там — не только ссылка, но и второй заход в ту же выдачу. Для
материала с кодом добавить dev.to, где профиль уже есть.

## Отдельная возможность, большего размера

`llms txt generator` — 620 запросов в месяц, и **первое место в выдаче занимает
именно генератор**, а не статья. Логика генерации на сайте уже написана. Сделать
бесплатный генератор отдельной страницей — это совпадение с главным намерением
выдачи и ссылочный актив, какого статьёй не получить. Это отдельная задача, не
часть этой статьи.
