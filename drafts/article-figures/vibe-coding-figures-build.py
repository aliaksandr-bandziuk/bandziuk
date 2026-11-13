import datetime as dt, pathlib, json

T = {
 "en": {
  "f1k":"ONE VISIT","f1t":"One visit loaded the whole catalogue three times",
  "f1s":"Three separate requests sat on the same page. Each of them loaded all 433 properties, with 6,377 apartments inside them and five language versions of every text.",
  "l1":"load 1 — the cards you see","l2":"load 2 — the number “433”","l3":"load 3 — the pins on the map",
  "each":"≈ 20 MB","tot":"moved inside the server on every click","totv":"60 MB",
  "res":"What the screen showed","resv":"14 cards · 331 pins","need":"Data the screen actually needed: about 1.1 MB",
  "f1n":"An ordinary web page weighs two or three megabytes. This was twenty of them, on every click.",
  "f2k":"CRAWL BUDGET","f2t":"Two page types out of eighteen took 60% of Google’s time",
  "f2s":"Google gives a site a limited amount of time and leaves when it is spent. Over two days it spent 1,512 seconds waiting for this one.",
  "b1":"two slow page types","b2":"all sixteen others","sec":"s",
  "r1":"individual property pages","r2":"the listings page","r3":"everything else",
  "rv1":"typical 1.136 s · worst 108 s","rv2":"typical 0.012 s · worst 69 s","rv3":"typical 0.009–0.013 s",
  "f2n":"The fast pages were not rewarded for being fast. They got what was left.",
  "f3k":"CLICKS PER 28 DAYS","f3t":"Eight months below the February level, then three milestones in thirteen days",
  "f3s":"Search Console counts clicks in rolling 28-day windows. Nothing fell — and nothing moved either.",
  "band":"571–692 all summer, below February","fix":"descriptions rewritten","gap":"outside the exported period",
  "f3n":"Round markers are Search Console milestones; the solid line is the measured 28-day total, 1 June to 1 November. The performance fix came later, in November — this chart does not show its effect.",
 },
 "pl": {
  "f1k":"JEDNA WIZYTA","f1t":"Jedna wizyta wczytywała cały katalog trzy razy",
  "f1s":"Na tej samej stronie stały trzy osobne zapytania. Każde wczytywało wszystkie 433 oferty, razem z 6 377 mieszkaniami i pięcioma wersjami językowymi każdego tekstu.",
  "l1":"zapytanie 1 — kafelki, które widać","l2":"zapytanie 2 — liczba „433”","l3":"zapytanie 3 — pinezki na mapie",
  "each":"≈ 20 MB","tot":"przechodziło przez serwer przy każdym kliknięciu","totv":"60 MB",
  "res":"Co zobaczył ekran","resv":"14 kafelków · 331 pinezek","need":"Dane faktycznie potrzebne ekranowi: około 1,1 MB",
  "f1n":"Zwykła strona internetowa waży dwa, trzy megabajty. Tutaj było ich dwadzieścia, na każde kliknięcie.",
  "f2k":"BUDŻET INDEKSOWANIA","f2t":"Dwa typy stron z osiemnastu zabrały 60% czasu Google",
  "f2s":"Google daje serwisowi ograniczony czas i wychodzi, gdy go zużyje. Przez dwa dni spędził tutaj 1 512 sekund na czekaniu.",
  "b1":"dwa wolne typy stron","b2":"wszystkie pozostałe szesnaście","sec":"s",
  "r1":"strony pojedynczych ofert","r2":"lista ofert","r3":"cała reszta",
  "rv1":"typowo 1,136 s · najgorzej 108 s","rv2":"typowo 0,012 s · najgorzej 69 s","rv3":"typowo 0,009–0,013 s",
  "f2n":"Szybkie podstrony nie dostały za to nagrody. Dostały to, co zostało.",
  "f3k":"KLIKNIĘCIA NA 28 DNI","f3t":"Osiem miesięcy poniżej poziomu z lutego, potem trzy progi w trzynaście dni",
  "f3s":"Search Console liczy kliknięcia w oknach 28-dniowych. Nic nie spadło — i nic się nie ruszyło.",
  "band":"571–692 przez całe lato, poniżej lutego","fix":"opisy przepisane","gap":"poza wyeksportowanym okresem",
  "f3n":"Okrągłe znaczniki to progi Search Console, linia ciągła to zmierzona suma 28-dniowa, 1 czerwca – 1 listopada. Poprawka wydajności przyszła później, w listopadzie — tego wykres jeszcze nie pokazuje.",
 },
 "ru": {
  "f1k":"ОДИН ВИЗИТ","f1t":"Один визит загружал весь каталог трижды",
  "f1s":"На одной странице стояли три отдельных запроса. Каждый загружал все 433 объекта вместе с 6 377 квартирами и пятью языковыми версиями каждого текста.",
  "l1":"загрузка 1 — карточки, которые видно","l2":"загрузка 2 — число «433»","l3":"загрузка 3 — метки на карте",
  "each":"≈ 20 МБ","tot":"проходило через сервер на каждый клик","totv":"60 МБ",
  "res":"Что увидел экран","resv":"14 карточек · 331 метка","need":"Данные, реально нужные экрану: около 1,1 МБ",
  "f1n":"Обычная веб-страница весит два-три мегабайта. Здесь их было двадцать, на каждый клик.",
  "f2k":"КРАУЛИНГОВЫЙ БЮДЖЕТ","f2t":"Два типа страниц из восемнадцати забрали 60% времени Google",
  "f2s":"Google выделяет сайту ограниченное время и уходит, когда оно потрачено. За два дня он провёл здесь в ожидании 1 512 секунд.",
  "b1":"два медленных типа страниц","b2":"все остальные шестнадцать","sec":"с",
  "r1":"страницы отдельных объектов","r2":"список объектов","r3":"всё остальное",
  "rv1":"типично 1,136 с · худшее 108 с","rv2":"типично 0,012 с · худшее 69 с","rv3":"типично 0,009–0,013 с",
  "f2n":"Быстрые страницы за свою быстроту награды не получили. Им досталось то, что осталось.",
  "f3k":"КЛИКИ ЗА 28 ДНЕЙ","f3t":"Восемь месяцев ниже февральского уровня, потом три рубежа за тринадцать дней",
  "f3s":"Search Console считает клики скользящими окнами по 28 дней. Ничего не упало — и ничего не сдвинулось.",
  "band":"571–692 всё лето, ниже февраля","fix":"описания переписаны","gap":"вне выгруженного периода",
  "f3n":"Круглые отметки — рубежи Search Console, сплошная линия — измеренная сумма за 28 дней, 1 июня — 1 ноября. Ускорение страницы сделали позже, в ноябре, — на этом графике его эффекта ещё нет.",
 },
}

MEAS = [("2026-06-28",669),("2026-07-05",616),("2026-07-12",594),("2026-07-19",597),("2026-07-26",613),
        ("2026-08-02",679),("2026-08-09",670),("2026-08-16",692),("2026-08-23",675),("2026-08-30",651),
        ("2026-09-06",633),("2026-09-13",590),("2026-09-20",617),("2026-09-27",591),("2026-10-04",587),
        ("2026-10-11",629),("2026-10-18",713),("2026-10-25",793),("2026-11-01",890)]
BADGE = [("2026-01-20",500),("2026-02-05",600),("2026-02-21",700),("2026-10-24",800),("2026-11-02",900),("2026-11-06",1000)]
D0, D1 = dt.date(2026,1,12), dt.date(2026,11,12)
W, H, PADL, PADR, PADT, PADB = 624, 250, 44, 16, 18, 34
def x(d):
    d = dt.date.fromisoformat(d) if isinstance(d,str) else d
    return PADL + (d-D0).days/((D1-D0).days)*(W-PADL-PADR)
def y(v): return PADT + (1020-v)/(1020-480)*(H-PADT-PADB)

def chart(t):
    pts = " ".join(f"{x(d):.1f},{y(v):.1f}" for d,v in MEAS)
    band = f'<rect x="{x("2026-02-21"):.1f}" y="{y(692):.1f}" width="{x("2026-09-17")-x("2026-02-21"):.1f}" height="{y(571)-y(692):.1f}" fill="rgba(217,89,38,.10)" stroke="rgba(217,89,38,.35)" stroke-dasharray="3 3"/>'
    gap = f'<path d="M {x("2026-02-21"):.1f} {y(700):.1f} L {x("2026-06-28"):.1f} {y(669):.1f}" stroke="rgba(255,255,255,.28)" stroke-width="2" stroke-dasharray="5 5" fill="none"/>'
    grid = "".join(f'<line x1="{PADL}" y1="{y(v):.1f}" x2="{W-PADR}" y2="{y(v):.1f}" stroke="rgba(255,255,255,.08)"/><text x="{PADL-10}" y="{y(v)+4:.1f}" text-anchor="end" class="ax">{v}</text>' for v in (500,700,900))
    months = "".join(f'<text x="{x(f"2026-{m:02d}-01"):.1f}" y="{H-10}" text-anchor="middle" class="ax">{lab}</text>' for m,lab in ((2,"II"),(4,"IV"),(6,"VI"),(8,"VIII"),(10,"X")))
    marks = "".join(f'<circle cx="{x(d):.1f}" cy="{y(v):.1f}" r="5" fill="#111114" stroke="#f5a05c" stroke-width="2.5"/>' for d,v in BADGE)
    fixline = f'<line x1="{x("2026-09-17"):.1f}" y1="{PADT-4}" x2="{x("2026-09-17"):.1f}" y2="{H-PADB}" stroke="rgba(25,158,112,.7)" stroke-width="1.5" stroke-dasharray="4 4"/>'
    return f"""<svg viewBox="0 0 {W} {H}" width="{W}" height="{H}">
      {grid}{band}{fixline}{gap}
      <polyline points="{pts}" fill="none" stroke="#3987e5" stroke-width="2.5" stroke-linejoin="round"/>
      {marks}{months}
      <text x="{x('2026-05-20'):.1f}" y="{y(640):.1f}" text-anchor="middle" class="lbl">{t['band']}</text>
      <text x="{x('2026-09-17')-8:.1f}" y="{PADT+10}" text-anchor="end" class="lbl grn">{t['fix']}</text>
      <text x="{x('2026-04-20'):.1f}" y="{y(760):.1f}" text-anchor="middle" class="lbl dim">{t['gap']}</text>
    </svg>"""

CSS = """
:root{--surface:#111114;--ink:#fff;--ink-2:#c3c2b7;--muted:#898781;--s1:#3987e5;--s2:#d95926;--s3:#199e70;
--sans:"Inter",system-ui,"DejaVu Sans",sans-serif;--mono:"DejaVu Sans Mono",monospace;}
*{box-sizing:border-box}body{margin:0;background:#000;font-family:var(--sans)}
.fig{width:720px;background:var(--surface);padding:34px 36px 30px;margin:0 0 24px}
.kicker{font-family:var(--mono);font-size:12px;letter-spacing:.14em;color:var(--muted);margin:0 0 9px}
h2{font-size:25px;line-height:1.22;font-weight:600;color:var(--ink);margin:0 0 8px}
.sub{font-size:16px;line-height:1.45;color:var(--ink-2);margin:0 0 22px}
.note{font-size:14px;color:var(--muted);margin:20px 0 0;line-height:1.45}
.loads{display:flex;flex-direction:column;gap:9px}
.load{display:grid;grid-template-columns:1fr auto;gap:14px;align-items:center;border-radius:11px;padding:13px 16px;
background:rgba(217,89,38,.09);border:1px solid rgba(217,89,38,.4)}
.load .l{font-size:16px;color:#fff}.load .v{font-family:var(--mono);font-size:16px;color:#ffa882}
.tot{margin:12px 0 0;display:flex;justify-content:space-between;align-items:baseline;border-top:1px solid rgba(255,255,255,.14);padding-top:12px}
.tot span{font-size:16px;color:var(--ink-2)}.tot b{font-family:var(--mono);font-size:22px;color:#ffa882}
.arrow{height:26px;display:flex;align-items:center;justify-content:center;color:var(--muted);font-size:18px}
.res{border-radius:12px;border:1px solid rgba(25,158,112,.55);background:rgba(25,158,112,.07);padding:16px 18px;
display:flex;justify-content:space-between;align-items:center;gap:16px}
.res .rl{font-size:14px;color:var(--muted)}.res .rv{font-family:var(--mono);font-size:19px;color:#71dfb3}
.need{font-size:14px;color:var(--ink-2);margin:10px 0 0}
.bar{display:flex;height:52px;border-radius:10px;overflow:hidden;margin:0 0 10px}
.bar .p1{background:rgba(217,89,38,.75);display:flex;align-items:center;justify-content:center}
.bar .p2{background:rgba(255,255,255,.1);display:flex;align-items:center;justify-content:center}
.bar b{font-family:var(--mono);font-size:17px;color:#fff}
.barlab{display:flex;justify-content:space-between;font-size:14px;color:var(--muted);margin:0 0 20px}
.rows{display:flex;flex-direction:column;gap:8px}
.row{display:grid;grid-template-columns:1fr auto;gap:14px;align-items:center;border-radius:10px;padding:12px 15px;
background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.09)}
.row.hot{border-color:rgba(217,89,38,.45);background:rgba(217,89,38,.07)}
.row .l{font-size:16px;color:#fff}.row .v{font-family:var(--mono);font-size:14px;color:var(--ink-2)}
.ax{font-family:var(--mono);font-size:11px;fill:var(--muted)}
.lbl{font-family:var(--sans);font-size:13px;fill:var(--ink-2)}
.lbl.grn{fill:#71dfb3}.lbl.dim{fill:var(--muted)}
"""

def page(lang):
    t = T[lang]
    return f"""<!doctype html><html lang="{lang}"><head><meta charset="utf-8"><style>{CSS}</style></head><body>
<div class="fig" id="f1">
  <p class="kicker">{t['f1k']}</p><h2>{t['f1t']}</h2><p class="sub">{t['f1s']}</p>
  <div class="loads">
    <div class="load"><span class="l">{t['l1']}</span><span class="v">{t['each']}</span></div>
    <div class="load"><span class="l">{t['l2']}</span><span class="v">{t['each']}</span></div>
    <div class="load"><span class="l">{t['l3']}</span><span class="v">{t['each']}</span></div>
  </div>
  <div class="tot"><span>{t['tot']}</span><b>{t['totv']}</b></div>
  <div class="arrow">&#8595;</div>
  <div class="res"><span class="rl">{t['res']}</span><span class="rv">{t['resv']}</span></div>
  <p class="need">{t['need']}</p>
  <p class="note">{t['f1n']}</p>
</div>
<div class="fig" id="f2">
  <p class="kicker">{t['f2k']}</p><h2>{t['f2t']}</h2><p class="sub">{t['f2s']}</p>
  <div class="bar"><div class="p1" style="flex:900"><b>900 {t['sec']}</b></div><div class="p2" style="flex:612"><b>612 {t['sec']}</b></div></div>
  <div class="barlab"><span>{t['b1']}</span><span>{t['b2']}</span></div>
  <div class="rows">
    <div class="row hot"><span class="l">{t['r1']}</span><span class="v">{t['rv1']}</span></div>
    <div class="row hot"><span class="l">{t['r2']}</span><span class="v">{t['rv2']}</span></div>
    <div class="row"><span class="l">{t['r3']}</span><span class="v">{t['rv3']}</span></div>
  </div>
  <p class="note">{t['f2n']}</p>
</div>
<div class="fig" id="f3">
  <p class="kicker">{t['f3k']}</p><h2>{t['f3t']}</h2><p class="sub">{t['f3s']}</p>
  {chart(t)}
  <p class="note">{t['f3n']}</p>
</div>
</body></html>"""

for lang in T:
    pathlib.Path(f"fig-{lang}.html").write_text(page(lang), encoding="utf-8")
print("html written")
