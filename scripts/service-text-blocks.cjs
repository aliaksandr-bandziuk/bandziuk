// scripts/service-text-blocks.cjs
// Тексты для шести сервисных страниц — двух кластеров по три локали.
//
// Почему эти шесть: после правок 08.09 это самые тонкие сервисные страницы сайта.
// Медиана по 123 сервисным страницам — 883 слова; здесь 318–529.
//   ru uskorenie-saita-i-uluchshenie-poiskovoi-vidimosti  318
//   pl audyt-wydajnosci-i-kodu                            333
//   pl integracja-cms-i-api                               337
//   ru integraciya-cms-i-api                              339
//   en cms-integration-and-api-work                       436
//   en website-performance-and-code-audit                 529
//
// Что уже есть и потому НЕ дублируется:
//   — на самих страницах: зачем нужна скорость, названия Core Web Vitals,
//     таблица «проблема → решение», состав аудита, этапы работы, FAQ;
//   — в статье «Почему сайт медленно загружается» (en/pl/ru) — уже разобраны
//     лабораторные и полевые данные, «не гнаться за баллом», «скорость не главный
//     фактор ранжирования», «когда дешевле пересобрать, чем оптимизировать».
//     Первая версия этого файла дублировала статью почти дословно; переписано.
//
// Что добавляется — по два вопроса на страницу, которых на сайте нет нигде:
//   — производительность: что физически получает заказчик на выходе аудита
//     и чем аудит производительности отличается от SEO-аудита (два разных
//     коммерческих продукта на сайте, выбор между ними нигде не объяснён);
//   — CMS/API: когда достаточно Zapier/Make (слов «Zapier» и «no-code» нет
//     ни в одной статье) и почему интеграции ломаются молча («webhook» — 0
//     упоминаний во всём блоге).
//
// links: применяются через insertInlineLink уже после конвертации —
// markdownToPortableText не разбирает [текст](url).
module.exports = [
  // ────────────────────────────────── КЛАСТЕР A: производительность
  {
    docId: "26f33bcc-eaa6-4cbc-96a1-9135cf55431f",
    lang: "en",
    page: "/services/website-performance-and-code-audit",
    marker: "which one do you need",
    links: [
      { text: "why a website loads slowly", href: "/blog/why-is-my-website-slow" },
      { text: "an SEO audit", href: "/services/seo-audit" },
    ],
    md: `## What you actually get from a performance audit

The word "audit" covers everything from a two-second automated scan to a week of engineering, so it is worth being specific about what arrives at the end.

It starts with a baseline that reflects reality: real-user data from Search Console and the Chrome UX report alongside lab traces, taken on the pages that actually bring traffic and enquiries rather than on the homepage alone. Then a ranked list of causes — each tied to the metric it moves and to an honest estimate of effort: what costs an hour, what costs a day, and what runs into the architecture and cannot be fixed without rebuilding.

The ranking is the part that matters. Any tool produces forty findings; the useful document tells you which three of them account for most of the delay on your site, and which thirty-seven are technically true and practically irrelevant. If you want to see the shape of that reasoning first, I have written up in detail why a website loads slowly and what you can fix without a developer.

Then the fixes, because a report that leaves you to go and find a developer has solved half a problem. I implement the changes myself, and the result is checked afterwards against real-user data — not against a score taken on my own laptop, on my own connection, with everything already cached.

## Performance audit or SEO audit — which one do you need?

They answer different questions, and buying the wrong one is a common way to spend a budget without changing anything.

A performance audit asks why the site is slow or unstable, and what in the code and infrastructure causes it. It is the right purchase when you already have traffic: when the worry is that visitors leave before the first screen appears, or that Search Console has started reporting poor URLs on pages that used to be fine.

An SEO audit asks something else entirely — why the site brings no enquiries from search at all: which queries your buyers actually use, why your pages do not rank for them, what is blocking indexation, and which of your own pages compete with each other for the same query.

The short test. If you have visitors but they do not convert, start with performance. If you have almost no visitors, speed is not yet your problem — start with an SEO audit, and performance work becomes worth paying for once there are positions worth protecting.`,
  },
  {
    docId: "24354662-e684-4a9c-ad37-3e196d3b40c4",
    lang: "ru",
    page: "/ru/uslugi/uskorenie-saita-i-uluchshenie-poiskovoi-vidimosti",
    marker: "что именно вам нужно",
    links: [
      { text: "почему сайт медленно загружается", href: "/ru/blog/sait-medlenno-zagruzhaetsya" },
      { text: "SEO-аудита", href: "/ru/uslugi/seo-audit-saita" },
    ],
    md: `## Что вы получаете на выходе аудита производительности

Словом «аудит» называют и двухсекундное автоматическое сканирование, и неделю инженерной работы, поэтому стоит сказать прямо, что оказывается у вас на руках в конце.

Начинается всё с базовой точки, отражающей реальность: полевые данные из Search Console и отчёта Chrome UX вместе с лабораторными замерами, снятые на тех страницах, которые действительно приносят трафик и заявки, а не на одной главной. Дальше — ранжированный список причин, каждая привязана к метрике, на которую влияет, и к честной оценке трудозатрат: что стоит часа, что стоит дня, а что упирается в архитектуру и без пересборки не чинится.

Ранжирование здесь и есть главное. Сорок замечаний выдаст любой сервис; полезный документ говорит, какие три из них дают основную задержку именно на вашем сайте, а какие тридцать семь технически верны и практически безразличны. Если хочется сначала увидеть логику рассуждения, я подробно разобрал, почему сайт медленно загружается и что можно исправить без разработчика.

И затем сами исправления, потому что отчёт, после которого вам остаётся идти искать разработчика, решает половину задачи. Правки я вношу сам, а результат проверяю потом по данным реальных пользователей — не по баллу, снятому на моём ноутбуке, на моём канале и с уже прогретым кэшем.

## Аудит производительности или SEO-аудит — что именно вам нужно

Это ответы на разные вопросы, и покупка не той услуги — распространённый способ потратить бюджет, ничего не изменив.

Аудит производительности отвечает, почему сайт медленный или нестабильный и что в коде и инфраструктуре тому причиной. Его имеет смысл покупать, когда трафик уже есть: когда беспокоит, что посетители уходят, не дождавшись первого экрана, или что Search Console начала помечать «медленные URL» на страницах, с которыми раньше всё было в порядке.

SEO-аудит отвечает совсем на другое — почему сайт вообще не приносит заявок из поиска: какими запросами реально пользуются ваши покупатели, почему по ним не ранжируются ваши страницы, что мешает индексации и какие ваши же страницы конкурируют друг с другом за один запрос.

Короткая проверка. Посетители есть, но не оставляют заявок — начинайте с производительности. Посетителей почти нет — скорость пока не ваша проблема: начинайте с SEO-аудита, а работа над производительностью станет оправданной тогда, когда появятся позиции, которые стоит удерживать.`,
  },
  {
    docId: "1166b8b4-0d4c-4dc3-a0c2-452422445008",
    lang: "pl",
    page: "/pl/oferty/audyt-wydajnosci-i-kodu",
    marker: "którego z nich potrzebujesz",
    links: [
      { text: "dlaczego strona ładuje się wolno", href: "/pl/blog/wolno-ladujaca-sie-strona" },
      { text: "audytu SEO", href: "/pl/oferty/audyt-seo-strony-internetowej" },
    ],
    md: `## Co realnie otrzymujesz po audycie wydajności

Słowem „audyt" nazywa się i dwusekundowe automatyczne skanowanie, i tydzień pracy inżynierskiej, więc warto powiedzieć wprost, co trafia do was na koniec.

Zaczyna się od punktu odniesienia, który odzwierciedla rzeczywistość: dane terenowe z Search Console i raportu Chrome UX razem z pomiarami laboratoryjnymi, zdjęte na tych stronach, które faktycznie przynoszą ruch i zapytania, a nie wyłącznie na stronie głównej. Dalej — uporządkowana lista przyczyn, każda powiązana ze wskaźnikiem, na który wpływa, i z uczciwym oszacowaniem pracy: co kosztuje godzinę, co kosztuje dzień, a co opiera się o architekturę i bez przebudowy się nie naprawi.

To uporządkowanie jest tu najważniejsze. Czterdzieści uwag wygeneruje każde narzędzie; użyteczny dokument mówi, które trzy z nich odpowiadają za większość opóźnienia akurat na waszej stronie, a które trzydzieści siedem jest technicznie prawdziwych i praktycznie obojętnych. Jeśli chcecie najpierw zobaczyć tok tego rozumowania, opisałem szczegółowo, dlaczego strona ładuje się wolno i co da się poprawić bez programisty.

I dopiero potem same poprawki, bo raport, po którym musicie sami szukać programisty, rozwiązuje połowę problemu. Zmiany wprowadzam osobiście, a efekt sprawdzam później na danych rzeczywistych użytkowników — nie na wyniku zdjętym na moim laptopie, na moim łączu i z rozgrzanym cache.

## Audyt wydajności czy audyt SEO — którego z nich potrzebujesz

To odpowiedzi na różne pytania, a kupienie nie tej usługi to popularny sposób na wydanie budżetu bez żadnej zmiany.

Audyt wydajności odpowiada, dlaczego strona jest wolna lub niestabilna i co w kodzie oraz infrastrukturze jest tego przyczyną. Warto go kupić wtedy, gdy ruch już macie: gdy niepokoi was, że odwiedzający wychodzą, nie doczekawszy pierwszego ekranu, albo że Search Console zaczęła oznaczać „słabe adresy URL" na podstronach, z którymi wcześniej było dobrze.

Audyt SEO odpowiada na coś zupełnie innego — dlaczego strona w ogóle nie przynosi zapytań z wyszukiwarki: jakich fraz naprawdę używają wasi klienci, dlaczego wasze podstrony na nie nie rankują, co blokuje indeksację i które z waszych własnych stron konkurują ze sobą o to samo zapytanie.

Krótki test. Są odwiedzający, ale nie zostawiają zapytań — zaczynajcie od wydajności. Odwiedzających prawie nie ma — szybkość nie jest jeszcze waszym problemem: zaczynajcie od audytu SEO, a praca nad wydajnością stanie się opłacalna wtedy, gdy pojawią się pozycje warte obrony.`,
  },

  // ────────────────────────────────── КЛАСТЕР B: CMS и API
  {
    docId: "ab99b964-1aa8-4ad8-a8a3-7fb0863cf549",
    lang: "en",
    page: "/services/cms-integration-and-api-work",
    marker: "no-code connector is enough",
    links: [{ text: "automating page production", href: "/blog/how-i-automated-website-page-production" }],
    md: `## When a no-code connector is enough — and when it is not

Zapier, Make and tools like them solve a real problem, and for many businesses they are the correct answer. If a form needs to create a CRM record and send a notification, and that happens thirty times a month, a no-code connector does it in an afternoon and costs less than any custom work would.

They stop being the cheap option in three situations. Volume: pricing is per task, so a flow that fires thousands of times a month quietly becomes a subscription larger than the integration would have cost once. Logic: anything requiring conditional branching, reshaping of data, deduplication or a lookup against your own database turns into a long chain of steps that nobody except its author can read. And data: if customer records must not leave your own infrastructure, routing them through a third-party automation platform should be a deliberate decision rather than a default.

The rule I use is simple. If a flow is simple, low-volume and stable, use the connector and spend the money elsewhere. Custom API work earns its cost when the flow is central to how the business actually runs — that is the reasoning behind automating page production on this site, where the volume made the case obvious.

## What makes an integration keep working after launch

Most integrations do not break loudly. A token expires, a provider retires an API version, a webhook stops being delivered — and nothing on the site looks wrong. Leads simply stop arriving in the CRM, and somebody notices a week later, if at all.

Which is why "does it work?" is the wrong question to accept an integration on. The useful ones are these. What happens to a submission if the CRM is unreachable at that moment — is it queued and retried, or lost? Who is notified when a call fails, and how? Are credentials stored where they can be rotated without a redeploy? Is there a log showing what was sent and what came back, so a failure can be diagnosed rather than guessed at?

An integration with answers to those questions survives an API change. One without them works perfectly until the day it doesn't, and the cost of that day is counted in lost enquiries, not in developer hours.`,
  },
  {
    docId: "fe3ab5a9-816f-4562-b412-602ef6bd1bb1",
    lang: "ru",
    page: "/ru/uslugi/integraciya-cms-i-api",
    marker: "достаточно Zapier",
    links: [{ text: "автоматизировал создание страниц", href: "/ru/blog/kak-ya-avtomatiziroval-sozdanie-stranic-v-cms" }],
    md: `## Когда достаточно Zapier или Make, а когда нужна своя интеграция

Zapier, Make и подобные сервисы решают реальную задачу, и для многих компаний это правильный ответ. Если нужно, чтобы форма создавала запись в CRM и отправляла уведомление, и происходит это тридцать раз в месяц, no-code-коннектор настраивается за вечер и обходится дешевле любой разработки.

Дешёвым вариантом он перестаёт быть в трёх случаях. Объём: тарификация идёт за операцию, поэтому цепочка, срабатывающая тысячи раз в месяц, незаметно превращается в подписку дороже, чем разовая интеграция. Логика: всё, что требует ветвлений, преобразования данных, дедупликации или обращения к вашей собственной базе, вырастает в длинную цепочку шагов, которую не прочитает никто, кроме автора. И данные: если записи о клиентах не должны покидать вашу инфраструктуру, прогон их через стороннюю платформу автоматизации стоит делать осознанным решением, а не выбором по умолчанию.

Правило простое. Сценарий простой, редкий и стабильный — берите коннектор и потратьте деньги на другое. Своя интеграция окупается тогда, когда сценарий лежит в основе того, как работает бизнес: по этой же логике я автоматизировал создание страниц на собственном сайте, где объём делал расчёт очевидным.

## Почему интеграции ломаются со временем и что это меняет

Большинство интеграций ломаются тихо. Истёк токен, провайдер отключил версию API, вебхук перестал доставляться — и на сайте при этом ничего не выглядит сломанным. Просто заявки перестают появляться в CRM, а замечают это через неделю. Если замечают.

Поэтому «работает?» — неподходящий вопрос для приёмки. Полезные вопросы другие. Что произойдёт с заявкой, если в этот момент CRM недоступна: она встанет в очередь и повторится или потеряется? Кто и как узнает о неудавшемся вызове? Хранятся ли ключи так, чтобы их можно было заменить без передеплоя? Есть ли лог, по которому видно, что отправили и что пришло в ответ, — чтобы сбой можно было разобрать, а не угадать?

Интеграция, у которой есть ответы на эти вопросы, переживает смену API. Та, у которой их нет, работает безупречно до того дня, когда перестаёт, и цена этого дня считается в потерянных заявках, а не в часах разработки.`,
  },
  {
    docId: "5ddf5532-8ec3-4bb8-a031-6fd3967aefc3",
    lang: "pl",
    page: "/pl/oferty/integracja-cms-i-api",
    marker: "wystarczy Zapier",
    links: [{ text: "zautomatyzowałem tworzenie stron", href: "/pl/blog/jak-zautomatyzowalem-tworzenie-stron-w-cms" }],
    md: `## Kiedy wystarczy Zapier lub Make, a kiedy potrzebna jest własna integracja

Zapier, Make i podobne narzędzia rozwiązują realny problem i dla wielu firm są właściwą odpowiedzią. Jeśli formularz ma utworzyć rekord w CRM i wysłać powiadomienie, a dzieje się to trzydzieści razy w miesiącu, konektor no-code ustawia się w jedno popołudnie i kosztuje mniej niż jakakolwiek praca programistyczna.

Tanią opcją przestaje być w trzech sytuacjach. Wolumen: rozliczenie jest za operację, więc przepływ uruchamiany tysiące razy w miesiącu niepostrzeżenie zamienia się w abonament droższy niż jednorazowa integracja. Logika: wszystko, co wymaga warunków, przekształcania danych, deduplikacji albo odpytania własnej bazy, rozrasta się w długi łańcuch kroków, którego nie odczyta nikt poza autorem. I dane: jeśli rekordy klientów nie powinny opuszczać waszej infrastruktury, przepuszczanie ich przez zewnętrzną platformę automatyzacji powinno być decyzją świadomą, a nie wyborem domyślnym.

Zasada jest prosta. Przepływ prosty, rzadki i stabilny — bierzcie konektor i wydajcie pieniądze gdzie indziej. Własna integracja zwraca się wtedy, gdy przepływ leży u podstaw tego, jak firma naprawdę działa: tą samą logiką zautomatyzowałem tworzenie stron na własnej witrynie, gdzie skala czyniła rachunek oczywistym.

## Dlaczego integracje przestają działać po wdrożeniu i co to zmienia

Większość integracji nie psuje się głośno. Wygasa token, dostawca wycofuje wersję API, webhook przestaje być dostarczany — a na stronie nic nie wygląda źle. Po prostu zgłoszenia przestają trafiać do CRM, a ktoś zauważa to tydzień później. O ile zauważa.

Dlatego „działa?" to złe pytanie odbiorowe. Przydatne są inne. Co stanie się ze zgłoszeniem, jeśli w tym momencie CRM będzie niedostępny: trafi do kolejki i zostanie ponowione, czy przepadnie? Kto i w jaki sposób dowie się o nieudanym wywołaniu? Czy klucze są przechowywane tak, że można je wymienić bez ponownego wdrożenia? Czy istnieje log pokazujący, co zostało wysłane i co przyszło w odpowiedzi — żeby awarię dało się rozłożyć na części, a nie zgadywać?

Integracja, która ma odpowiedzi na te pytania, przeżywa zmianę API. Ta, która ich nie ma, działa bez zarzutu do dnia, w którym przestaje, a koszt tego dnia liczy się w utraconych zapytaniach, nie w godzinach programisty.`,
  },
];
