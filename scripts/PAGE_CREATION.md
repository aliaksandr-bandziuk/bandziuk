# Page Creation — Unified Instructions

Three content types: **landing**, **service**, **blog**.
All three require translation.metadata linking for hreflang to work.

---

## Workflow

1. **You provide** content for one page using bracket tags (format defined below).
2. **I validate** — required tags present, all three locales populated, referenced docs exist in Sanity.
3. **I show you** the full resolved document structure I'm about to create (EN doc, PL doc, RU doc, i18n metadata). You review it.
4. **You approve** — I create the documents directly via the Sanity client in this order: EN → PL → RU → metadata. If any step fails, I roll back all docs created so far.
5. **I verify** — query Sanity to confirm all four docs exist, then report the live URLs.

---

## Shared Technical Shapes

### Document IDs

| Type | EN doc | PL doc | RU doc | i18n metadata |
|------|--------|--------|--------|---------------|
| singlepage | `singlepage-{id}` | `singlepage-{id}.pl` | `singlepage-{id}.ru` | `singlepage-{id}.i18n` |
| blog | `blog-{id}` | `blog-{id}.pl` | `blog-{id}.ru` | `blog-{id}.i18n` |

`{id}` = lowercase kebab-case, `a-z`, `0-9`, hyphens only.

### localizedSlug object — each locale doc gets only its own slug key

> **⚠ WARNING — confirmed in testing:** Each locale document must contain ONLY its own
> language's slug. Writing all three slugs per document is a validation error and breaks
> the page. The Document Internationalization plugin rejects extra locale slug keys in Studio,
> and the page will not function correctly until they are removed.

Each locale document stores **only its own language's slug key**. The other two locale keys must be absent entirely.

```js
// EN doc (language: "en"):
slug: { _type: 'localizedSlug', en: { _type: 'slug', current: 'the-en-slug' } }

// PL doc (language: "pl"):
slug: { _type: 'localizedSlug', pl: { _type: 'slug', current: 'the-pl-slug' } }

// RU doc (language: "ru"):
slug: { _type: 'localizedSlug', ru: { _type: 'slug', current: 'the-ru-slug' } }
```

**How hreflang still works with one slug per doc:** `_translations` dereferences through the
`.i18n` metadata doc to all three sibling locale docs and returns each one's `slug` field.
`findAltSlug` scans that list for `slug[locale].current` — it finds the PL slug in the PL
sibling's entry and the RU slug in the RU sibling's entry. No single locale doc needs to
carry the other locales' slugs for hreflang to work.

### translation.metadata doc — created last

Created after all locale docs succeed. Its absence marks a failed or incomplete creation.

```js
{
  _id: `${baseId}.i18n`,
  _type: 'translation.metadata',
  documentId: baseId,
  translations: [
    { _key: 'en', value: { _type: 'reference', _ref: baseId } },
    { _key: 'pl', value: { _type: 'reference', _ref: `${baseId}.pl` } },
    { _key: 'ru', value: { _type: 'reference', _ref: `${baseId}.ru` } },
  ],
}
```

### Noindex guard — mandatory for all types

`seo.metaTitle` and `seo.metaDescription` must be non-empty in all three locales.
Missing either field on any locale is a hard validation error — I will not write to Sanity until fixed.

---

## Tag Vocabulary

Tags are provided one page at a time. Each `[TAG]` opens a block; the next `[TAG]` closes it.
Tags with a value on the same line use the format `[TAG: value]`.

| Tag | Used by | Maps to |
| --- | --- | --- |
| `[TEMPLATE: landing\|service\|blog]` | all | type of page |
| `[ID: kebab-case-id]` | all | `_id` base, e.g. `singlepage-web-design` |
| `[SLUG]` | all | per-locale slug key only: EN doc→`slug.en`, PL doc→`slug.pl`, RU doc→`slug.ru` |
| `[HERO]` | all | `title` + `excerpt` per locale |
| `[META]` | all | `seo.metaTitle` + `seo.metaDescription` per locale |
| `[PARENT: en-slug]` | landing (optional), service (required) | `parentPage._ref` |
| `[PAIN]` | landing, service | `benefitsBlock` |
| `[FEATURES]` | landing, service | `gridBlock` |
| `[STEPS]` | landing only | `stepsBlock` (inline numbered steps) |
| `[PROCESS]` | service only | `workProcessBlock.title` (title-only block) |
| `[FAQ]` | landing, service | `faqBlock` wrapping `accordionBlock` |
| `[CTA]` | landing only | `landingCtaBlock.title` |
| `[RELATED]` | service only | `relatedServicesBlock` (references + optional title) |
| `[CATEGORY: en-slug]` | blog only | `category._ref` — resolved per locale by querying Sanity |
| `[DATE: YYYY-MM-DD]` | blog only | `publishedAt` (stored as `T00:00:00Z`) |
| `[BODY]` | blog only | primary `textContent` block containing PortableText |

### Per-locale syntax inside tags

```
en:
  key: value
pl:
  key: value
ru:
  key: value
```

Single-value tags (e.g. `[CTA]`, `[PROCESS]`) use `en: ...` / `pl: ...` / `ru: ...` directly.

### Benefit metric format

`metric: 150+` → `counting.conuntNumber: 150, counting.sign: "+"`.
Supported: `150+`, `98%`, `3x`, or omit `metric:` line for no counter.

### Separator within a locale line

`title | description` — the pipe character separates the item title from its description.

---

## 1. Landing Pages

**Sanity type**: `singlepage`, `pageType: "page"`
**Route**: `[...slug]/page.tsx` — statically generated (`generateStaticParams`) + ISR 60 s

### Block sequence

```
benefitsBlock → gridBlock → stepsBlock → faqBlock → landingCtaBlock
```

All blocks are optional — omit the tag if the block is not needed.

### Tag → field/block mapping

| Tag | Sanity field / block |
| --- | --- |
| `[TEMPLATE: landing]` | `_type: "singlepage"`, `pageType: "page"` |
| `[ID: …]` | `_id` base = `singlepage-{id}` |
| `[SLUG]` | `slug` — each locale doc gets only its own key: EN→`slug.en`, PL→`slug.pl`, RU→`slug.ru` |
| `[HERO]` → `title:` | `title` per locale |
| `[HERO]` → `excerpt:` | `excerpt` per locale |
| `[META]` → `title:` | `seo.metaTitle` per locale |
| `[META]` → `desc:` | `seo.metaDescription` per locale |
| `[PARENT: slug]` | `parentPage._ref` — looked up from Sanity by EN slug, resolved per locale |
| `[PAIN]` → `block title:` | `benefitsBlock.title` per locale |
| `[PAIN]` → `benefit N: metric:` | `counting.conuntNumber` + `counting.sign` |
| `[PAIN]` → `benefit N: en/pl/ru:` | `benefit.title \| benefit.description` per locale |
| `[FEATURES]` → `block title:` | `gridBlock.title` per locale |
| `[FEATURES]` → `feature N: en/pl/ru:` | `item.title \| item.description` per locale |
| `[STEPS]` → `block title:` | `stepsBlock.title` per locale |
| `[STEPS]` → `step N: en/pl/ru:` | `step.title \| step.description` per locale (stepNumber = N) |
| `[FAQ]` → `block title:` | `faqBlock.title` per locale |
| `[FAQ]` → `qN: en/pl/ru:` | `accordionBlock.items[N].question` per locale |
| `[FAQ]` → `aN: en/pl/ru:` | `accordionBlock.items[N].answer` as PortableText per locale |
| `[CTA]` → `en: / pl: / ru:` | `landingCtaBlock.title` per locale |

### Validation (I check before showing preview)

- `[ID]`, `[SLUG]`, `[HERO]`, `[META]` present with all three locales
- `slug_en` is lowercase kebab-case without slashes
- `seo.metaTitle` and `seo.metaDescription` non-empty for all three locales (noindex guard)
- Every FAQ question has a corresponding answer in all three locales
- Every step/feature present in EN is also present in PL and RU
- If `[PARENT]` is given, the target exists in Sanity

### Post-creation verification

- [ ] Doc exists in Sanity Studio under Single Pages for all 3 languages
- [ ] Translation group linked (i18n metadata doc appears in Studio)
- [ ] Page renders at `/{slug_en}`, `/pl/{slug_pl}`, `/ru/{slug_ru}`
- [ ] `<link rel="alternate" hreflang="...">` present for all 3 locales in page source
- [ ] No `<meta name="robots" content="noindex">` in page source
- [ ] ISR picks up page within 60 s on next request after creation

---

## 2. Service Pages

**Sanity type**: `singlepage`, `pageType: "service"`
**Route**: same `[...slug]/page.tsx` — statically generated + ISR 60 s

### Service block sequence

```
benefitsBlock → gridBlock → workProcessBlock → faqBlock → relatedServicesBlock
```

Key difference from landing: position 3 is `workProcessBlock` (title-only — renders globally shared work process steps at runtime, stores no inline step data), and position 5 is `relatedServicesBlock` (cross-links to sibling service pages) instead of `landingCtaBlock`.

### Service tag mapping

Same as landing except:

| Tag | Sanity field / block |
| --- | --- |
| `[TEMPLATE: service]` | `_type: "singlepage"`, `pageType: "service"` |
| `[PARENT: slug]` | **Required.** `parentPage._ref` pointing to the services-index singlepage |
| `[PROCESS]` → `en: / pl: / ru:` | `workProcessBlock.title` per locale — replaces `[STEPS]` |
| `[RELATED]` → `slugs:` | comma-separated EN slugs of related service singlepages; resolved to `_ref` per locale |
| `[RELATED]` → `block title:` | `relatedServicesBlock.title` per locale |

**Not used for services**: `[STEPS]`, `[CTA]`.

### Prerequisites

- The **services-index singlepage** (`[PARENT]` target) must exist in Sanity for all 3 locales before creation.
- All slugs listed in `[RELATED]` → `slugs:` must exist in Sanity. Missing slugs: I warn and skip that item (not a hard failure).

### Service validation

Same as landing, plus:

- `[PARENT]` is present and resolves to an existing singlepage in Sanity
- `[PROCESS]` has all 3 locale titles if the block is used

### Service post-creation verification

Same as landing, plus:

- [ ] Related services block links resolve to the correct pages in the browser
- [ ] This service page now needs to be added to `[RELATED]` → `slugs:` on its sibling pages (those require a separate update)

---

## 3. Blog Posts

**Sanity type**: `blog`
**Route**: `[lang]/blog/[slug]/page.tsx` — **fully dynamic** (no `generateStaticParams`, no `dynamicParams = false`)

Blog posts differ from singlepage:

- Dynamic route: any valid slug resolves on first request — no rebuild needed.
- Flat URL structure — no parent hierarchy, always at `/blog/{slug}`.
- `category` is **effectively required**: `BlogIntro` dereferences `blog.category.title` without a null check. A missing category causes a runtime crash.
- `publishedAt` is effectively required: the listing sorts by date and shows the date in `BlogIntro`.
- Body content is PortableText inside `textContent` blocks.
- No `author` field exists in the schema.

### Blog tag mapping

| Tag | Sanity field / block |
| --- | --- |
| `[TEMPLATE: blog]` | `_type: "blog"` |
| `[ID: …]` | `_id` base = `blog-{id}` |
| `[SLUG]` | `slug` — each locale doc gets only its own key: EN→`slug.en`, PL→`slug.pl`, RU→`slug.ru` |
| `[HERO]` → `title:` | `title` per locale |
| `[HERO]` → `excerpt:` | `excerpt` per locale (shown in listing card and BlogIntro) |
| `[META]` → `title:` | `seo.metaTitle` per locale |
| `[META]` → `desc:` | `seo.metaDescription` per locale |
| `[CATEGORY: en-slug]` | `category._ref` — I query Sanity for each locale's category doc ID |
| `[DATE: YYYY-MM-DD]` | `publishedAt: "YYYY-MM-DDT00:00:00Z"` |
| `[BODY]` → `en: / pl: / ru:` | `contentBlocks[0]` of type `textContent`, body parsed as PortableText |
| `[FAQ]` | `faqBlock` appended to `contentBlocks` after `[BODY]` |

### Body content (PortableText)

Body text in `[BODY]` is parsed from the text you provide. Supported conventions:

| Input syntax | Becomes |
| --- | --- |
| Plain paragraph | `block` with `style: "normal"` |
| `## Heading` | `block` with `style: "h2"` |
| `### Heading` | `block` with `style: "h3"` |
| `**bold**` | span with mark `strong` |
| `_italic_` | span with mark `em` |
| `[text](url)` | span with mark `link` (`href: url`) |
| Blank line | paragraph break (new block) |

Images in body: provide separately as Sanity asset references — I'll prompt for them if needed.

### category reference — required prerequisite

Before creating any blog post I query Sanity for the category:
```
*[_type == "category" && slug.en.current == $slug]{ _id, language }
```
This returns one doc per locale. Each locale doc gets its own same-language category `_ref`.
If the category does not exist for any locale, I stop and report the error before writing anything.

### Blog doc structure (per locale)

```js
{
  _id: 'blog-{id}',               // EN: 'blog-{id}', PL: 'blog-{id}.pl', RU: 'blog-{id}.ru'
  _type: 'blog',
  language: 'en',                  // 'en' | 'pl' | 'ru'
  title: 'Post title in EN',
  // Each locale doc stores ONLY its own slug key:
  slug: { _type: 'localizedSlug', en: { _type: 'slug', current: 'the-en-slug' } },
  // PL doc would have: { _type: 'localizedSlug', pl: { _type: 'slug', current: 'the-pl-slug' } }
  // RU doc would have: { _type: 'localizedSlug', ru: { _type: 'slug', current: 'the-ru-slug' } }
  seo: {
    metaTitle: 'SEO title EN',
    metaDescription: 'SEO description EN',
  },
  publishedAt: '2026-06-29T00:00:00Z',
  category: { _type: 'reference', _ref: 'category-doc-id-for-en' },
  excerpt: 'Short description shown in listing.',
  contentBlocks: [
    {
      _key: '...',
      _type: 'textContent',
      content: [ /* PortableText blocks parsed from [BODY] */ ],
    },
    // faqBlock appended here if [FAQ] was provided
  ],
}
```

### Blog validation

- `[ID]`, `[SLUG]`, `[HERO]`, `[META]`, `[CATEGORY]`, `[DATE]` all present
- `seo.metaTitle` and `seo.metaDescription` non-empty for all 3 locales (noindex guard)
- Category exists in Sanity for all 3 locales
- `[DATE]` is a valid date (YYYY-MM-DD)
- `[BODY]` present for all 3 locales if provided (partial locale body = error)
- Every FAQ Q has a corresponding A in all 3 locales (if `[FAQ]` is used)

### Blog post-creation verification

- [ ] Post appears in blog listing at `/blog`, `/pl/blog`, `/ru/blog`
- [ ] Post renders at `/blog/{slug_en}`, `/pl/blog/{slug_pl}`, `/ru/blog/{slug_ru}`
- [ ] Translation group linked — `<link rel="alternate" hreflang="...">` present on all 3 URLs
- [ ] No noindex tag in page source
- [ ] `category.title` renders in BlogIntro (no blank or crash)
- [ ] `publishedAt` date renders correctly in BlogIntro and listing card

---

## Example Input — Landing Page

This is the format you fill in and give to me. All three locales are required.

```
[TEMPLATE: landing]
[ID: digital-marketing]

[SLUG]
en: digital-marketing
pl: marketing-cyfrowy
ru: cifrovoj-marketing

[HERO]
en:
  title: Digital Marketing That Drives Real Growth
  excerpt: We build data-driven strategies that turn traffic into revenue.
pl:
  title: Marketing Cyfrowy, Który Napędza Wzrost
  excerpt: Budujemy strategie oparte na danych, które zamieniają ruch w przychody.
ru:
  title: Цифровой Маркетинг, Который Даёт Результат
  excerpt: Создаём стратегии на основе данных, превращающие трафик в выручку.

[META]
en:
  title: Digital Marketing Services | Bandziuk
  desc: Data-driven digital marketing — SEO, PPC, social media. We grow your business online.
pl:
  title: Usługi Marketingu Cyfrowego | Bandziuk
  desc: Marketing cyfrowy oparty na danych — SEO, PPC, social media.
ru:
  title: Услуги Цифрового Маркетинга | Bandziuk
  desc: Маркетинг на основе данных — SEO, контекстная реклама, соцсети.

[PAIN]
block title:
  en: Results That Speak for Themselves
  pl: Wyniki, Które Mówią Same za Siebie
  ru: Результаты Говорят Сами за Себя
benefit 1:
  metric: 3x
  en: ROI Growth | Average return increase within 6 months of campaign launch
  pl: Wzrost ROI | Średni wzrost zwrotu w ciągu 6 miesięcy od startu kampanii
  ru: Рост ROI | Средний прирост возврата за 6 месяцев после запуска
benefit 2:
  metric: 85%
  en: Client Renewal Rate | Clients who extend their engagement into year two
  pl: Wskaźnik Odnowień | Klienci przedłużający współpracę na drugi rok
  ru: Процент Продлений | Клиенты, продлевающие сотрудничество на второй год
benefit 3:
  metric: 120+
  en: Campaigns Launched | Across e-commerce, B2B, and professional services
  pl: Kampanii | W e-commerce, B2B i usługach profesjonalnych
  ru: Кампаний | В e-commerce, B2B и профессиональных услугах

[FEATURES]
block title:
  en: What We Deliver
  pl: Co Dostarczamy
  ru: Что Мы Создаём
feature 1:
  en: Custom Strategy | Built around your audience, industry, and growth targets
  pl: Indywidualna Strategia | Dopasowana do Twojej branży i celów wzrostu
  ru: Индивидуальная Стратегия | Под вашу отрасль, аудиторию и цели роста
feature 2:
  en: SEO & Content | Rank higher and attract qualified organic traffic at scale
  pl: SEO i Treści | Wyższe pozycje i więcej ruchu organicznego
  ru: SEO и Контент | Выше в поиске, больше органического трафика
feature 3:
  en: Paid Advertising | Precision PPC campaigns on Google and Meta
  pl: Reklama Płatna | Precyzyjne kampanie PPC w Google i Meta
  ru: Платная Реклама | Точечные PPC-кампании в Google и Meta

[STEPS]
block title:
  en: Our Process
  pl: Nasz Proces
  ru: Наш Процесс
step 1:
  en: Discovery | We audit your current presence, competitors, and goals
  pl: Analiza | Oceniamy Twoją obecność, konkurencję i cele
  ru: Исследование | Анализируем вашу текущую позицию, конкурентов и цели
step 2:
  en: Strategy | We build a tailored plan with measurable milestones
  pl: Strategia | Tworzymy spersonalizowany plan z mierzalnymi celami
  ru: Стратегия | Разрабатываем индивидуальный план с измеримыми целями
step 3:
  en: Execution | We launch campaigns and produce content on schedule
  pl: Realizacja | Uruchamiamy kampanie i tworzymy treści zgodnie z harmonogramem
  ru: Реализация | Запускаем кампании и создаём контент по плану

[FAQ]
block title:
  en: Frequently Asked Questions
  pl: Najczęściej Zadawane Pytania
  ru: Часто Задаваемые Вопросы
q1:
  en: How long before I see results?
  pl: Jak długo trzeba czekać na wyniki?
  ru: Как скоро появятся результаты?
a1:
  en: SEO results typically appear within 3–6 months. Paid ads can drive traffic from day one.
  pl: Wyniki SEO pojawiają się zazwyczaj po 3–6 miesiącach. Reklamy płatne przynoszą ruch od pierwszego dnia.
  ru: Результаты SEO обычно видны через 3–6 месяцев. Платная реклама даёт трафик с первого дня.
q2:
  en: Do you work with businesses outside Poland?
  pl: Czy pracujecie z firmami spoza Polski?
  ru: Работаете ли вы с компаниями за пределами Польши?
a2:
  en: Yes — we work with clients across Europe and beyond, in English, Polish, and Russian.
  pl: Tak — obsługujemy klientów w całej Europie i nie tylko, po angielsku, polsku i rosyjsku.
  ru: Да — мы работаем с клиентами по всей Европе и за её пределами на трёх языках.

[CTA]
en: Ready to Grow Your Business Online?
pl: Gotowy na Rozwój Swojego Biznesu Online?
ru: Готовы Развивать Бизнес в Интернете?
```

---

## Quick Reference — Differences Per Type

| | Landing | Service | Blog |
| --- | --- | --- | --- |
| Sanity type | `singlepage` | `singlepage` | `blog` |
| `pageType` | `"page"` | `"service"` | n/a |
| Route | `[...slug]` static | `[...slug]` static | `blog/[slug]` dynamic |
| `[PARENT]` | optional | **required** | n/a |
| Block 3 | `[STEPS]` inline steps | `[PROCESS]` title-only | n/a |
| Block 5 | `[CTA]` | `[RELATED]` references | n/a |
| `[CATEGORY]` | n/a | n/a | **required** |
| `[DATE]` | n/a | n/a | **required** |
| `[BODY]` | n/a | n/a | primary body |
| translation.metadata | created by me | created by me | created by me |
