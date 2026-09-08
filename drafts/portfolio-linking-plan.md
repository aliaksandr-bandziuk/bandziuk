# Перелинковка кейсов: план

Дата: 07.09.2026. Источник: `scripts/analyze-link-graph.cjs` после починки резолва путей.

## Что показал граф

- 42 кейса. **32 из них не имеют ни одной входящей ссылки.** Ещё 4 имеют по одной.
- Реальную перелинковку получают шесть: felgilab (3 локали), кипрская недвижимость, мультиязычная платформа.
- Ссылаются на кейсы только из текста статей: 57 инлайновых ссылок и 3 через relatedArticles.
  Структурного механизма нет — ни один блок услуг на кейсы не указывает.
- Девять кейсов сидят в отчёте GSC «просканирована, но не проиндексирована». Страница без входящих
  ссылок для Google — первый кандидат на выброс.

Проверено и НЕ подтвердилось: hreflang у кейсов в порядке, все три локали плюс x-default.
Группировка переводов есть. Проблема только в ссылках.

## Почему это важнее, чем кажется

Кейсы — единственное на сайте, что доказывает способность выполнить работу. Каждый нишевый лендинг
обещает результат, и ни один не показывает, что этот результат уже был получен. Ссылка с лендинга
на кейс работает сразу в двух направлениях: даёт роботу путь к странице, которую он иначе не берёт,
и даёт покупателю доказательство ровно в тот момент, когда он сомневается.

## Карта: какой кейс с каких страниц линковать

По две-три страницы на кейс. Анкор — не «смотрите кейс», а описание того, что было сделано:
анкор является сигналом и для робота, и для человека.

### Автосервис и колёса
- `/portfolio/auto-repair-seo-and-ux-boost` ← `/seo-for-auto-repair-shop`, `/garage-and-auto-repair-website`, `/blog/auto-repair-shop-website-cost`
- `/ru/portfolio/seo-i-ux-dlya-avtoremontnoi-kompanii` ← `/ru/seo-prodvizhenie-avtoservisa`, `/ru/sozdanie-saita-dlya-avtoservisa`, `/ru/blog/skolko-stoit-sait-dlya-avtoservisa`
- `/pl/portfolio/seo-warsztatu-i-wzrost-konwersji` ← `/pl/seo-dla-warsztatu-samochodowego`, `/pl/tworzenie-stron-dla-warsztatow-samochodowych`, `/pl/blog/ile-kosztuje-strona-dla-warsztatu-samochodowego`

Кейс felgilab уже перелинкован (7–9 входящих), его не трогаем.

### Архитектура
- `/portfolio/architecture-website-rebuild-and-seo-scan` ← `/architecture-studio-website`, `/website-platform-migration`
- `/ru/portfolio/sozdanie-i-seo-prodvizhenie-saita-arkhitekturnoi-tematiki` ← `/ru/sait-dlya-arhitekturnogo-byuro`, `/ru/perenos-saita-na-druguyu-platformu`
- `/pl/portfolio/tworzenie-i-seo-strony-architektonicznej-scan` ← `/pl/strona-dla-biura-architektonicznego`, `/pl/migracja-strony-na-inna-platforme`

### Мультиязычность и образование
- `/portfolio/full-multilingual-website-development-and-seo-for-student-services` ← `/multilingual-website-development`, `/language-school-website`, `/blog/multilingual-website-cost`
- `/ru/portfolio/polnaya-razrabotka-i-seo-dlya-obrazovatelnoi-platformy` ← `/ru/razrabotka-multiyazychnogo-saita`, `/ru/sait-dlya-yazykovoy-shkoly`, `/ru/blog/skolko-stoit-multiyazychnyi-sait`
- `/pl/portfolio/pelny-rozwoj-i-seo-dla-platformy-edukacyjnej` ← `/pl/tworzenie-stron-wielojezycznych`, `/pl/strona-dla-szkoly-jezykowej`, `/pl/blog/ile-kosztuje-strona-wielojezyczna`

### Инвестиционная платформа
- `/portfolio/investment-platform-with-ai-guided-learning` ← `/startup-website`, `/services/website-development`
- `/ru/portfolio/razrabotka-investicionnogo-vebsaita-peakprofit` ← `/ru/sait-dlya-startapa`, `/ru/uslugi/razrabotka-saitov`
- `/pl/portfolio/rozwoj-platformy-inwestycyjnej-peakprofit` ← `/pl/strona-dla-startupu`, `/pl/oferty/tworzenie-stron-internetowych`

### Лендинг с оплатой и защитой видеокурса
- `/portfolio/e-commerce-landing-page-with-secured-video-access` ← `/services/landing-page-development`, `/catalog-website-with-filters`
- `/ru/portfolio/e-commerce-lending-i-zashita-videokursa` ← `/ru/uslugi/razrabotka-lendingov`, `/ru/sait-katalog-s-filtrami`
- `/pl/portfolio/landing-sprzedazowy-z-platnoscia-i-zabezpieczonym-kursem-wideo` ← `/pl/oferty/tworzenie-landing-page`, `/pl/strona-katalogowa-z-filtrami`

### Защита форм от спама
- `/portfolio/anti-spam-protection-for-website-forms` ← `/services/cms-integration-and-api-work`, `/services/website-performance-and-code-audit`
- `/ru/portfolio/zashita-form-ot-spama` ← `/ru/uslugi/integraciya-cms-i-api`, `/ru/uslugi/uskorenie-saita-i-uluchshenie-poiskovoi-vidimosti`
- `/pl/portfolio/ochrona-formularzy-przed-spamem-bez-captcha` ← `/pl/oferty/integracja-cms-i-api`, `/pl/oferty/audyt-wydajnosci-i-kodu`

### Персональные сайты и творческие профессии
- `/portfolio/official-website-for-dj-and-producer-sasha-dith` и `/portfolio/develop-and-optimize-a-personal-website-with-seo` ← `/website-design-for-models`, `/photographer-website`, `/services/landing-page-development`
- Русские и польские зеркала — на `/ru/sozdanie-saita-modeli`, `/ru/sait-dlya-fotografa` и `/pl/strona-internetowa-dla-modelki`, `/pl/strona-dla-fotografa`

### Агентство и интернет-провайдер
- `/portfolio/proscore-agency-website-development` ← `/services/website-development`, `/startup-website`
- `/portfolio/web-development-a-website-for-internet-prowider` ← `/services/website-development`, `/services/cms-integration-and-api-work`
- Зеркала — на соответствующие русские и польские страницы разработки

### Недвижимость и Варшава
- `/portfolio/renovation-and-investment-website-with-premium-design` (Orzeł Realty, 1 входящая) ← `/real-estate-agency-website`, `/property-developer-website`, `/web-development-warsaw`
- Польское зеркало `/pl/portfolio/strona-dla-firmy-remontowej-i-inwestycyjnej-warszawa` ← `/pl/tworzenie-stron-internetowych-warszawa` и варшавские нишевые лендинги: это единственный кейс, сделанный в Варшаве, и он должен подпирать весь варшавский набор
- `/portfolio/residency-by-investment-guide-with-sourced-figures` ← `/multilingual-website-development`, `/real-estate-agency-website`

## Отдельно к исправлению

**Три битые внутренние ссылки** (после сегодняшней починки маршрутизации отдают 404 живым людям):
- `service-local-seo.pl` → `/pl/oferty/lokacii` должно быть `/pl/oferty/lokalizacje`
- `service-international-seo.pl` → то же самое
- `singlepage-medtourism-de-pl` → `/pl/oferty/pozycjonowanie-na-rynek-niemiecki` должно быть `/pl/oferty/lokalizacje/pozycjonowanie-na-rynek-niemiecki`

**Опечатка в живом кейсе:** «Web Development a Website for Internet **Prowider**» — и в заголовке,
и в слаге `/portfolio/web-development-a-website-for-internet-prowider`. Заголовок правится свободно,
слаг — только с редиректом, поэтому решать тебе, стоит ли трогать URL.

## Механизм

Ссылки ставятся инлайном в тело релевантного раздела на странице-источнике — там, где по смыслу
заходит речь о результате. Это единственный способ, который поддерживает текущая схема: структурного
блока для кейсов в ней нет. Прецедент есть — `scripts/apply-batchA-links.cjs` и далее.

Порядок: сначала три битые ссылки и автомобильный с архитектурным кластеры (там кейсы точно совпадают
с нишевыми лендингами), потом остальное.
