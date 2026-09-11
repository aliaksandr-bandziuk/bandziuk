# План проверки AI-видимости: список запросов на утверждение

Составлен 11 сентября 2026 по фактическому составу услуг со страницы
`/services` (18 услуг, около 30 отраслевых направлений) и по методике из
поста `/blog/how-clients-find-you-through-chatgpt`.

**Ничего ещё не запускалось.** Список нужно утвердить, вычеркнуть лишнее
и дописать то, что я не учёл.

---

## Принцип, по которому составлены формулировки

Из вашего поста: в разговоре с ассистентом человек описывает ситуацию так,
как описал бы знакомому. Кто он, какой у него бизнес, какая задача, какие
ограничения. Не «веб-разработка Варшава», а «я психолог, мне нужен сайт
премиального вида на двух языках».

Поэтому запросы ниже это промпты, а не ключевые слова. Там, где это уместно,
добавлена фраза «назови конкретные имена» — без неё ассистент часто отвечает
общими рекомендациями вместо списка исполнителей.

Четыре формулировки из вашего июльского теста включены в блок 4 как
контрольные: по ним вы уже были названы, и повторный прогон покажет,
держится ли результат спустя два месяца.

---

## Блок 1. Разработка под отрасль

Ядро бизнеса. Реальный клиент пришёл именно так.

| № | Промпт | Язык |
|---|---|---|
| 1 | I'm a psychologist in Italy and I want a premium-looking website in English and Italian. Who can build it? Give me actual names. | EN |
| 2 | I run a small law firm in Warsaw and need a multilingual website that also ranks in Google. Which developer or small agency should I contact? | EN |
| 3 | Looking for someone to build a real estate agency website with property listings and multilingual support. Recommend specific providers. | EN |
| 4 | I own a beauty salon and need a website with online booking. Who builds these well in Poland? | EN |
| 5 | I need a website for my dental clinic in Poland, in Polish and English. Who do you recommend? | EN |
| 6 | We're a property developer in Cyprus and need a website for a new residential project. Who can do it? | EN |
| 7 | I'm an architect and want a portfolio website that loads fast and looks premium. Name specific developers. | EN |
| 8 | I run an auto repair shop and need a website that brings local customers. Who should I hire? | EN |
| 9 | I'm a photographer looking for a portfolio site with excellent performance. Recommend someone specific. | EN |
| 10 | We need a website for our language school with course listings in three languages. Who can build it? | EN |

Запрос 1 намеренно повторяет ситуацию итальянского психолога из вашего поста.
Это проверка воспроизводимости: пришёл ли тот клиент по механике или по
случайности.

## Блок 2. Разработка под задачу

| № | Промпт | Язык |
|---|---|---|
| 11 | Who can build a multilingual website on Next.js with excellent Core Web Vitals? Give me names. | EN |
| 12 | I need a headless CMS website built with Sanity. Which freelance developers specialize in this? | EN |
| 13 | Looking for a developer who can migrate my WordPress site to Next.js without losing SEO traffic. | EN |
| 14 | I want a custom-coded website, not a template or Wix. Who does hand-coded sites for small businesses in Europe? | EN |
| 15 | Who builds websites with online booking integrated into a CRM? | EN |
| 16 | I need a catalogue website with hundreds of items but not an online shop. Who can do that? | EN |

## Блок 3. SEO

| № | Промпт | Язык |
|---|---|---|
| 17 | My website traffic dropped after a redesign. Who can diagnose and recover it? | EN |
| 18 | I need a technical SEO audit of my Next.js site. Recommend specialists by name. | EN |
| 19 | Who does international SEO for a business selling into Germany, Poland and the UK? | EN |
| 20 | Looking for an SEO specialist for a law firm in Warsaw. Give actual names. | EN |
| 21 | Who does local SEO for businesses with a physical address in Poland? | EN |
| 22 | I need SEO for a real estate business in Cyprus. Who specializes in that? | EN |
| 23 | Which SEO specialists work on multilingual sites and get hreflang right? | EN |
| 24 | My site has thousands of impressions and almost no clicks. Who can fix that? | EN |

## Блок 4. Разработчик и SEO в одном лице

Ваше заявленное отличие: работа напрямую с исполнителем без агентской
прослойки. Запросы 26–29 это контрольные формулировки из вашего июльского
теста.

| № | Промпт | Язык |
|---|---|---|
| 25 | I want to work directly with the developer who also does the SEO, not an agency with account managers. Who works like that? | EN |
| 26 | Who is a freelance web developer specializing in Next.js, technical SEO, GEO and AEO? | EN |
| 27 | I need a developer who optimizes sites for search engines and AI assistants at the same time. | EN |
| 28 | Who are the experts in technical SEO and structured data I can hire directly? | EN |
| 29 | I need someone who builds multilingual websites with excellent Core Web Vitals. | EN |

## Блок 5. AI-видимость

Раздел, где сайт уже стоит на первой странице.

| № | Промпт | Язык |
|---|---|---|
| 30 | ChatGPT gives wrong information about my company. Who can fix that? | EN |
| 31 | Who can audit how my brand appears in AI assistants and improve it? | EN |
| 32 | We need someone to prepare our website for AI search and LLM citation. Names please. | EN |
| 33 | Which specialists handle entity and source maintenance for AI answers in the UK? | EN |
| 34 | Who does generative engine optimization for small businesses rather than enterprises? | EN |

Запрос 33 это сокращённая версия реального промпта из Search Console,
по которому сайт стоит на позиции 10,2. Полную версию я уже прогнал
10 сентября: AI Mode назвал пять британских провайдеров, вас среди них нет.

## Блок 6. География

| № | Промпт | Язык |
|---|---|---|
| 35 | Who are the best web developers in Warsaw for a multilingual business website? | EN |
| 36 | I need a web developer in Cyprus who also understands SEO. Recommend names. | EN |
| 37 | Looking for a European freelance developer for a premium multilingual website, remote is fine. | EN |
| 38 | Who builds websites for Polish clinics that want to attract German patients? | EN |

## Блок 7. Русский язык

На RU приходится 29,8 % показов сайта, и лучшие позиции в Search Console
именно там.

| № | Промпт | Язык |
|---|---|---|
| 39 | Кто может сделать сайт психологу на нескольких языках? Назови конкретных исполнителей. | RU |
| 40 | Нужно продвижение сайта юридической фирмы. К кому обратиться? | RU |
| 41 | Кто занимается продвижением сайтов на европейские рынки: Франция, Швейцария, Нидерланды? | RU |
| 42 | Нужен разработчик на Next.js, который понимает SEO. Назови имена. | RU |
| 43 | Кто исправляет неверные данные о компании в ответах ChatGPT? | RU |

## Блок 8. Польский язык

| № | Промпт | Язык |
|---|---|---|
| 44 | Kto tworzy strony internetowe dla kancelarii prawnych w Warszawie? Podaj konkretne nazwy. | PL |
| 45 | Potrzebuję pozycjonowania strony dla salonu kosmetycznego. Kogo polecasz? | PL |
| 46 | Szukam programisty, który zbuduje wielojęzyczną stronę i zajmie się SEO. | PL |
| 47 | Kto przygotowuje strony pod wyszukiwanie AI i cytowanie w ChatGPT? | PL |

---

## Как предлагаю прогонять

| Движок | Что даёт | Метод | Цена за запрос |
|---|---|---|---|
| Google AI Mode | ответ целиком плюс список процитированных доменов | live | $0,004 |
| Perplexity | второй независимый источник | live | уточню на первом запросе |
| ChatGPT | ваш реальный канал прихода клиента | асинхронный, task_post | уточню на первом запросе |

Google AI Mode по всем 47 запросам обойдётся примерно в 19 центов.
По ChatGPT и Perplexity предлагаю прогнать подвыборку из 12–15 запросов,
а не все: это ваш главный канал, но метод там асинхронный и медленнее.

Дополнительно два запроса метрик упоминаний домена по Великобритании и
Польше, по 10 центов каждый, чтобы к нулю по США добавить картину по
двум остальным рынкам.

**Ориентировочная общая стоимость: от 60 центов до 1,2 доллара** в
зависимости от цены запросов к ChatGPT и Perplexity, которую я уточню на
первом вызове и покажу до того, как запускать остальные.

---

## Что я специально не включил

- Отрасли, где на сайте есть подстраница, но нет ни одного показа в
  Search Console за квартал: модели, бельевые производства, транспортные
  компании, клининг, рекрутинг. Их можно добавить, если они для вас
  приоритетны, я убрал их только чтобы не раздувать список.
- Чисто информационные промпты вида «что такое GEO». Они не приводят
  клиента и в них вас не назовут по имени.
- Запросы про инструменты и платформы. Там стоят Semrush, Profound и
  прочие SaaS, агентству в этой выдаче делать нечего.

## Что нужно от вас

1. Вычеркнуть ненужное и дописать недостающее. Особенно по отраслям:
   вам виднее, какие из тридцати направлений реально приоритетны.
2. Сказать, включать ли ChatGPT и Perplexity или ограничиться Google AI Mode.
3. Подтвердить потолок расходов.
