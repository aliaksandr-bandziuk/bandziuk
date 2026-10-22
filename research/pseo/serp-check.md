# Сверка difficulty с живой выдачей

Проверено: 2026-10-21 10:51 UTC, запросов 45.

## Совпадает ли difficulty с составом выдачи

Если метрика честная, в полосе 0–10 слабых результатов в топ-10 должно быть
много, а в полосе 51–100 мало. Если зависимости нет, метрика ничего не
измеряет и отбирать по ней нельзя.

| полоса difficulty | запросов | слабых в топ-10, в среднем | с AI Overview | реклама, в среднем |
| --- | --- | --- | --- | --- |
| 0–10 | 14 | 1.3 | 13 | 0.4 |
| 11–25 | 15 | 1.7 | 13 | 0.3 |
| 26–50 | 14 | 1.8 | 13 | 0.3 |
| 51–100 | 1 | 1.0 | 1 | 0.0 |
| пусто | 1 | 1.0 | 1 | 0.0 |

## По типам страниц

| тип | запросов | слабых в топ-10, в среднем | с AI Overview |
| --- | --- | --- | --- |
| base | 9 | 1.3 | 7 |
| city | 9 | 1.2 | 8 |
| price | 9 | 1.0 | 9 |
| segment | 9 | 2.3 | 8 |
| platform | 9 | 2.0 | 9 |

## Самая мягкая выдача: 15 запросов, где каталоги и форумы заняли от трёх позиций

Это кандидаты в первую партию: такие позиции забираются обычной страницей по теме.

- **web design trends 2025** (en, base) — 9900/мес, difficulty 39, слабых 3, есть AI Overview
  - топ-10: youtube.com, graphicdesignforum.com, webbookstudio.com, bluecompass.com, youtube.com, quora.com, globerunner.com, syncrasytech.com
- **website design company coimbatore** (en, base) — 5400/мес, difficulty 14, слабых 3
  - топ-10: avanexa.com, webnox.in, virtualsoftech.in, instagram.com, quora.com, xploreintellects.com, rindiar.in, webbitech.com
- **website design for services** (en, segment) — 5400/мес, difficulty 0, слабых 3, есть AI Overview
  - топ-10: dribbble.com, webflow.com, pinterest.com, reddit.com, elements.envato.com, blendb2b.com, squarespace.com, onepagelove.com
- **website design for wedding** (en, segment) — 3600/мес, difficulty 22, слабых 4, есть AI Overview
  - топ-10: onepagelove.com, reddit.com, insideweddings.com, squarespace.com, zola.com, rosevilledesigns.com, greenvelope.com, youtube.com
- **how much does it cost make a website** (en, price) — 2400/мес, difficulty 15, слабых 4, есть AI Overview
  - топ-10: monsterinsights.com, webfx.com, reddit.com, startups.co.uk, elementor.com, shopify.com, quora.com, pagecloud.com
- **how much does it cost to develop a website** (en, price) — 2400/мес, difficulty 26, слабых 3, есть AI Overview
  - топ-10: reddit.com, outerboxdesign.com, hostinger.com, cleveroad.com, webmasterworld.com, thervo.com, quora.com, liquidweb.com
- **создание сайта** (ru, base) — 880/мес, difficulty 37, слабых 3, есть AI Overview
  - топ-10: tilda.cc, ru.wix.com, tilda.education, canva.com, webnode.com, umi.ru, ru.weblium.com, megagroup.ru
- **wordpress website redesign services** (en, platform) — 720/мес, difficulty 34, слабых 3, есть AI Overview
  - топ-10: cmsminds.com, reddit.com, getsuperpress.com, designrush.com, wisdmlabs.com, quora.com, webcoretechnologies.com, socialfix.com
- **strona internetowa dla firm** (pl, segment) — 480/мес, difficulty 17, слабых 3, есть AI Overview
  - топ-10: canva.com, grupapns.pl, lh.pl, brandrocks.pl, cyberfolks.pl, thenewlook.pl, pl.wix.com, arturkosinski.pl
- **tworzenie stron internetowych bydgoszcz** (pl, city) — 260/мес, difficulty 29, слабых 3, есть AI Overview
  - топ-10: websoro.pl, fancyweb.pl, oferteo.pl, stroneria.pl, facebook.com, e-powerseo.pl, adsynergy.pl, stronit.pl
- **создание сайта для продажи** (ru, segment) — 140/мес, difficulty 13, слабых 3, есть AI Overview
  - топ-10: kontur.ru, webnode.com, reddit.com, cetera.ru, moguta.ru, hostiq.ua, ru.wix.com, practicum.yandex.ru
- **создание сайта для заработка** (ru, segment) — 20/мес, difficulty 0, слабых 3, есть AI Overview
  - топ-10: skillbox.ru, reddit.com, shopify.com, vc.ru, sky.pro, profi.ru, tobiz.net, craftum.com
- **создание сайта на wordpress** (ru, platform) — 20/мес, difficulty 14, слабых 3, есть AI Overview
  - топ-10: youtube.com, brainlab.com.ua, wordpress.com, texterra.ru, wordpress.com, youtube.com, salakhmir.ru, codex.wordpress.org
- **продвижение сайта на wordpress** (ru, platform) — 10/мес, difficulty 0, слабых 3, есть AI Overview
  - топ-10: vc.ru, habr.com, kwork.ru, elit-web.ua, youtube.com, seosystem.ru, around-web.com, shvalb.ru
- **создание сайта на wordpress пошагово** (ru, platform) — 10/мес, difficulty 47, слабых 4, есть AI Overview
  - топ-10: pay.yandex.ru, hostiq.ua, nic.ru, reddit.com, ruweb.net, lpmotor.ru, codex.wordpress.org, maxiplace.ru

Полные данные по каждому запросу: research/pseo/serp-check.csv, колонка top10.
