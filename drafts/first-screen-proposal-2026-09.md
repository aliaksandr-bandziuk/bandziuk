# Первый экран: что предлагаю написать и разместить

На утверждение. Ничего пока не изменено.

---

## Откуда взята формула

Из 141 ответа ассистентов вас назвали один раз. Вот дословно, чем модель
объяснила свой выбор:

> the strongest fit from the results is **Bandziuk**: they **explicitly say**
> they build websites and run SEO for Warsaw businesses, work in **Polish,
> English, and Russian**, and offer a multilingual, conversion-focused site
> with search/AI optimisation **included in their package descriptions**

Разберём, что именно она пересказала:

| Что модель извлекла | Откуда |
|---|---|
| что делает | «build websites and run SEO» |
| для кого | «Warsaw businesses» |
| на каких языках | «Polish, English, and Russian» |
| что входит в пакет | «search/AI optimisation included» |

Четыре факта, которые можно сопоставить с вопросом. Не обещание, не метафора,
не вопрос к читателю. Это и есть формула первого экрана.

---

## Что на первом экране сейчас

### Главная

| Элемент | Текущий текст |
|---|---|
| H1 | Websites that generate leads |
| подзаголовок | I develop websites from scratch and optimize them for search engines. |
| абзац | I design and build fast, SEO-optimized websites that bring measurable business results… |
| кнопки | See My Work · Request a Free Audit |

Проблема: ни одного из четырёх фактов. Нет имени, нет географии, нет языков,
нет того, что SEO входит. «Websites that generate leads» это обещание, которое
слово в слово стоит на тысяче сайтов. Сопоставить его с вопросом невозможно.

Ваше имя появляется только во втором экране, в блоке «Hi, I'm Aliaksandr
Bandziuk». При том, что по вашему имени Google показывает пятерых разных людей,
имя обязано быть выше линии сгиба.

### /services

| Элемент | Текущий текст |
|---|---|
| H1 | Services |
| вступление | Looking for a website that not only looks great but delivers real results? I build custom websites, integrate CMS & APIs, optimise for SEO and perform audits. |

Проблемы: H1 из одного слова без единого ключевого термина, что противоречит
вашему же правилу из CLAUDE.md про ключевые слова в подзаголовках. Вступление
начинается с риторического вопроса, а машина не может процитировать вопрос как
факт о вас.

---

## Что предлагаю. Главная

### Надзаголовок, новый элемент

```
Aliaksandr Bandziuk — web developer and SEO consultant, Warsaw
```

Мелкой строкой над H1. Ставит имя и роль над линией сгиба и слово в слово
совпадает с полями `name` и `jobTitle` в разметке `Person`, которую мы вчера
внедрили. Совпадение видимого текста и разметки это то, что подтверждает
сущность, а не просто заявляет её.

### H1

```
I build multilingual websites and run their SEO myself
```

Вместо «Websites that generate leads». Здесь есть глагол, объект,
отличительный признак и первое лицо. «Myself» несёт ваше главное отличие от
агентств и прямо отвечает на запрос 25 из нашего прогона про работу без
аккаунт-менеджеров.

### Абзац фактов, вместо нынешних двух

```
Next.js and headless CMS, in English, Polish and Russian. Technical SEO
and AI search visibility are part of the build, not a separate invoice.
You work directly with the person writing the code — no agency layer,
no account managers.
```

Три предложения, каждое несёт факт из формулы: технологии, языки, что входит,
как устроена работа.

### Строка фактов, новый элемент

Четыре короткие ячейки под абзацем:

| | |
|---|---|
| Based in Warsaw, working across Europe | English · Polish · Russian |
| Next.js · Sanity · WordPress | Reply within one business day |

Зачем: это самый цитируемый формат. Ассистент вытаскивает из такой строки
готовые пары «признак — значение» без разбора прозы. Плюс они дублируют
`areaServed` и `knowsLanguage` из разметки видимым текстом.

### Кнопки

Оставляю как есть: `See My Work` и `Request a Free Audit`. Работают, менять
незачем.

### Title и description

| | Текущий | Предлагаемый |
|---|---|---|
| Title | Web Development & SEO that Drives Real Business Results | Aliaksandr Bandziuk — Multilingual Web Development & SEO, Warsaw |
| Description | Custom websites, technical SEO, and growth strategy — all from one expert. I build fast, search-friendly sites that convert. | I build websites on Next.js and run their technical SEO myself, in English, Polish and Russian. Based in Warsaw, working across Europe. |

Имя в title потому, что по нему сейчас выдача принадлежит пятерым разным
людям, и это единственный запрос, где вы обязаны быть первым без вариантов.

---

## Что предлагаю. /services

### H1

```
Web development and SEO services
```

Вместо «Services». Ключевые термины в главном заголовке, как требует ваше же
правило.

### Вступление

```
I build websites on Next.js, WordPress and headless CMS, and handle their
technical SEO myself — in English, Polish and Russian. Below are the
services I deliver personally: full builds, CMS and API integrations,
technical SEO, audits, and AI search visibility. Nothing here is resold.
```

Убирает риторический вопрос, вносит все четыре факта формулы и добавляет
«nothing here is resold» — второе ваше отличие, которое сейчас нигде не
сформулировано.

### Кнопки

Оставляю `Request Personal Offer` и `Chat on WhatsApp`.

---

## Два вопроса, на которые нужен ваш ответ

**Первый. Языки.** Выше всё на английском, потому что EN даёт 62 % показов и
это приоритетный рынок. Польскую и русскую версии сделаю той же формулой сразу
после того, как утвердите английскую. Отдельно: в русской версии «для кого»
логично поменять с Варшавы на выход на рынки ЕС, потому что там ранжируются
именно эти страницы.

**Второй, важнее.** Весь этот текст лежит не в коде, а в Sanity: главная в
документе `homepage`, страница услуг в `singlepage`. Строки фактов как поля в
схеме сейчас нет, её придётся добавить. Поэтому вариантов два:

1. Я отдаю вам готовый текст, вы вставляете его в Studio руками. Я при этом
   добавляю в схему поле под строку фактов и вывожу его в вёрстке.
2. Вы разрешаете мне писать в Sanity через API, и я делаю всё сам, включая
   перенос текста на три языка.

По умолчанию беру первый, потому что вы с самого начала просили в Sanity
ничего не менять. Скажите, если второй.

---

## Чего я сознательно не предлагаю

- Не трогаю блок «Hi, I'm Aliaksandr Bandziuk» вторым экраном. Он остаётся,
  просто перестаёт быть первым местом, где появляется имя.
- Не меняю список услуг и их порядок. Это отдельный этап, где мы режем
  каталог с тридцати отраслей до пяти.
- Не добавляю цены. Они нужны, но их нет у меня, и придумывать я их не буду.
