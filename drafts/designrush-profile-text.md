# DesignRush: тексты для профиля

Заполнено 13 сентября 2026. Три поля формы плюс подсказки по остальным.

**Принцип.** DesignRush просит не копировать текст с сайта. Наша стратегия
требует, чтобы описание везде совпадало. Противоречие снимается так: факты
одинаковые до буквы — имя, роль, языки, стек, что входит в работу, — а
предложения написаны заново. Модель и поисковик сверяют факты, а не синтаксис.

**Имя пишем ровно так: `Aliaksandr Bandziuk`.** Ни Alex, ни Alexander, ни
Bandziuk Web. По этому имени в Google уже стоят пятеро разных людей, и любое
разночтение делает хуже.

---

## 1. Company slogan (до 100 символов)

```
One developer builds your site and runs its SEO. English, Polish, Russian.
```

74 символа.

Запасной вариант, если захочется мягче:

```
Multilingual websites on Next.js, with the technical SEO included.
```

66 символов.

---

## 2. Short description (до 600 символов, «do NOT copy and paste»)

```
I build multilingual websites on Next.js, Sanity and WordPress, and I run their technical SEO myself. Clients work with the person writing the code: no account manager in between, no separate SEO invoice arriving three months after launch. Core Web Vitals, hreflang and structured data are decided while the site is being built, because reversing those choices later is expensive. Sites ship in English, Polish and Russian. Recent work includes a four-language property catalogue now bringing over 1,500 organic visits a month with no ad spend.
```

544 символа.

---

## 3. Company overview (до 2000 символов)

```
Independent web developer and SEO consultant working across Europe.

Most projects split the work in two: an agency builds the site, and an SEO specialist arrives months later to find decisions already baked in. A URL structure that cannot carry three languages. A rendering approach search engines struggle with. A CMS that makes structured data impossible. Undoing any of that costs more than doing it right the first time. I do both jobs, so those decisions get made once.

What I build: business and lead-generation websites on Next.js with a headless CMS, or on WordPress where a familiar editor matters more than raw speed. Multilingual work is the specialism — English, Polish and Russian delivered directly, with per-language URLs, reciprocal hreflang and a CMS where each language is a document an editor owns independently.

What I handle after the build: technical SEO, Core Web Vitals measured against field data rather than a launch-day screenshot, Schema.org markup rendered server-side, and visibility inside AI answers. That last part matters more each quarter. One client reached me because ChatGPT recommended my site when he asked who could do this kind of work; two days later we signed.

Evidence rather than adjectives: a four-language real estate catalogue running at over 1,500 organic visits a month with buyers in more than twenty countries, and no advertising spend behind it.

Pricing is published rather than quoted on request. A business website starts from €2,000 and takes two to four weeks. A redesign starts from €1,000. Ongoing SEO runs from €800 a month with a three to six month minimum, because nothing meaningful happens faster. A one-off audit is from €250.

I take a small number of projects at a time. That is the trade-off worth stating plainly: the person who answers your first message is the person who ships the site and the person you call a year later. It also means I am the wrong choice if you need a team of six starting Monday.
```

1 980 символов.

---

## Остальные поля формы

**Company name.** `Aliaksandr Bandziuk`.

**Website.** `https://www.bandziuk.com` — с `www` и с `https`, ровно как
канонический адрес сайта. Разночтение здесь ломает связку сущности.

**Founded.** Год, когда начали работать официально. Должен совпадать с тем,
что стоит в других профилях.

**Team size.** Честно: 1–10, а лучше точное значение, если форма позволяет.
Не завышайте — весь текст построен на том, что вы работаете один, и
противоречие в цифре его обесценит.

**Location.** Варшава, Польша. В карточке каталога география обязательна и
скрыть её нельзя, поэтому указываем как есть. На английской версии сайта мы
Варшаву убрали намеренно, но там это был выбор формулировки, а не сокрытие.

**Services.** Выбирайте не больше четырёх-пяти, иначе профиль читается как
«делаем всё». Приоритет: Web Development, SEO, Web Design, Digital Strategy.

**Industries.** Тоже узко. По вашим данным реальные ниши: недвижимость,
юридические услуги, красота и здоровье, психологи и терапевты.

**Minimum project size.** €1,000+, это совпадает с ценой редизайна на сайте.

**Hourly rate.** Если поле обязательное и вилка широкая, берите ту, что
согласуется с €2,000 за сайт в две-четыре недели. Не занижайте: дешёвая
ставка в каталоге противоречит позиционированию «не конкурирую по цене с
аутсорс-студиями за 18 долларов в час».

---

## После регистрации

Пришлите мне URL готового профиля. Я добавлю его в `SAME_AS` в
`src/lib/schema/identity.ts`, и он попадёт в разметку `Person` и
`ProfessionalService` на каждой странице сайта. Без этого шага профиль
остаётся отдельно стоящей карточкой и в связку сущности не входит.

То же самое понадобится для Crunchbase и Wikidata.
