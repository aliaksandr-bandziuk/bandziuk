import pathlib
T = {"en": {
 "aK":"WHAT THE AGENT CAN SEE","aT":"An agent inspects everything inside the project and nothing that decides whether it earns",
 "aS":"Both failures on this site sat entirely in the right-hand column, and the agent reported success the whole time — accurately, by its own criteria.",
 "aL":"Inside the project — checked continuously","aR":"Outside the project — checked by nobody",
 "aLi":["the code runs","2,361 automated tests pass","prices and data are correct","pages render in five languages","text is consistent and grammatical"],
 "aRi":["the queries people actually type","what a page costs a crawler","whether an assistant can quote you","how many enquiries arrive"],
 "aN":"An AI agent reaches the boundary and stops. Everything on the right has to be brought to it.",
 "bK":"CONTENT RULE AGAINST SEARCH DEMAND","bT":"The pages were found by names only, and their text was forbidden to contain names",
 "bS":"Measured on 4 October: 77 queries bring these pages impressions. Every one of them is a name.",
 "bL":"What brings impressions","bR":"What the description was forbidden to contain",
 "bLi":[("development names","yes"),("developer names","yes"),("queries about size, price, rooms","none")],
 "bRi":["the development name","the developer name","any price","any size","any completion date"],
 "bLeft":"What is left: atmosphere, in five languages",
 "bOverlap":"Overlap between demand and permitted text: zero",
 "bN":"A page can only rank for words its text is able to contain — and an assistant can only quote a fact the page actually states.",
}}

T["pl"] = {
 "aK":"CO AGENT WIDZI","aT":"Agent sprawdza wszystko wewnątrz projektu i nic z tego, co decyduje o zarobku",
 "aS":"Obie awarie na tym serwisie siedziały w prawej kolumnie, a agent przez cały czas raportował sukces — zgodnie z prawdą, według własnych kryteriów.",
 "aL":"Wewnątrz projektu — sprawdzane stale","aR":"Poza projektem — nie sprawdza nikt",
 "aLi":["kod się wykonuje","2 361 testów przechodzi","ceny i dane są poprawne","strony renderują się w pięciu językach","tekst jest spójny i poprawny"],
 "aRi":["zapytania, które ludzie wpisują","ile strona kosztuje robota","czy asystent może cię zacytować","ile przychodzi zapytań"],
 "aN":"Agent AI dochodzi do granicy i staje. Wszystko z prawej strony trzeba mu przynieść.",
 "bK":"REGUŁA TREŚCI KONTRA POPYT","bT":"Podstrony znajdowano wyłącznie po nazwach, a ich tekst miał zakaz zawierania nazw",
 "bS":"Pomiar z 4 października: 77 zapytań przynosi tym podstronom wyświetlenia. Każde z nich to nazwa.",
 "bL":"Co przynosi wyświetlenia","bR":"Czego opisowi zabroniono",
 "bLi":[("nazwy inwestycji","tak"),("nazwy deweloperów","tak"),("zapytania o metraż, cenę, pokoje","brak")],
 "bRi":["nazwa inwestycji","nazwa dewelopera","jakakolwiek cena","metraż","termin oddania"],
 "bLeft":"Co zostaje: klimat, w pięciu językach",
 "bOverlap":"Część wspólna popytu i dozwolonego tekstu: zero",
 "bN":"Strona rankuje tylko po słowach, które jej tekst może zawierać — a asystent zacytuje tylko fakt, który strona podaje.",
}
T["ru"] = {
 "aK":"ЧТО ВИДИТ АГЕНТ","aT":"Агент проверяет всё внутри проекта и ничего из того, чем измеряется заработок",
 "aS":"Обе поломки на этом сайте сидели в правой колонке, а агент всё это время докладывал об успехе — и по своим критериям был прав.",
 "aL":"Внутри проекта — проверяется постоянно","aR":"Вне проекта — не проверяет никто",
 "aLi":["код выполняется","2 361 тест проходит","цены и данные верные","страницы отдаются на пяти языках","текст единообразен и грамотен"],
 "aRi":["запросы, которые набирают люди","во что страница обходится роботу","может ли ассистент вас процитировать","сколько приходит заявок"],
 "aN":"ИИ-агент доходит до границы и останавливается. Всё, что справа, ему нужно принести.",
 "bK":"ПРАВИЛО ТЕКСТА ПРОТИВ СПРОСА","bT":"Страницы находили только по названиям, а их тексту запретили содержать названия",
 "bS":"Замер 4 октября: 77 запросов приносят этим страницам показы. Каждый из них — название.",
 "bL":"Что приносит показы","bR":"Что описанию запрещено",
 "bLi":[("названия объектов","да"),("названия застройщиков","да"),("запросы про метраж, цену, комнаты","нет")],
 "bRi":["название объекта","название застройщика","любая цена","площадь","срок сдачи"],
 "bLeft":"Что остаётся: антураж, на пяти языках",
 "bOverlap":"Пересечение спроса и разрешённого текста: ноль",
 "bN":"Страница ранжируется только по словам, которые её текст может содержать, — а ассистент процитирует только факт, который на странице есть.",
}

CSS = """
:root{--surface:#111114;--ink:#fff;--ink-2:#c3c2b7;--muted:#898781;--s1:#3987e5;--s2:#d95926;--s3:#199e70;
--sans:"Inter",system-ui,"DejaVu Sans",sans-serif;--mono:"DejaVu Sans Mono",monospace;}
*{box-sizing:border-box}body{margin:0;background:#000;font-family:var(--sans)}
.fig{width:720px;background:var(--surface);padding:34px 36px 30px;margin:0 0 24px}
.kicker{font-family:var(--mono);font-size:12px;letter-spacing:.14em;color:var(--muted);margin:0 0 9px}
h2{font-size:25px;line-height:1.22;font-weight:600;color:var(--ink);margin:0 0 8px}
.sub{font-size:16px;line-height:1.45;color:var(--ink-2);margin:0 0 22px}
.note{font-size:14px;color:var(--muted);margin:18px 0 0;line-height:1.45}
.cols{display:grid;grid-template-columns:1fr 14px 1fr;gap:0;align-items:stretch}
.col{border-radius:12px;padding:18px 18px 16px;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.035)}
.col.ok{border-color:rgba(25,158,112,.5);background:rgba(25,158,112,.07)}
.col.bad{border-color:rgba(217,89,38,.45);background:rgba(217,89,38,.07)}
.col h3{font-size:14px;font-weight:600;color:#fff;margin:0 0 14px;line-height:1.3}
.col ul{margin:0;padding:0;list-style:none}
.col li{font-size:15px;line-height:1.35;color:var(--ink-2);padding:0 0 0 20px;margin:0 0 10px;position:relative}
.col li:last-child{margin-bottom:0}
.col.ok li:before{content:"✓";position:absolute;left:0;color:#71dfb3;font-size:14px}
.col.bad li:before{content:"×";position:absolute;left:0;color:#ffa882;font-size:15px}
.wall{position:relative}
.wall:before{content:"";position:absolute;left:6px;top:0;bottom:0;width:2px;background:repeating-linear-gradient(180deg,rgba(255,255,255,.3) 0 6px,transparent 6px 12px)}
.rows{display:flex;flex-direction:column;gap:8px}
.r{display:grid;grid-template-columns:1fr auto;gap:12px;align-items:center;border-radius:10px;padding:11px 14px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.09);font-size:15px;color:#fff}
.r b{font-family:var(--mono);font-size:13px;color:#71dfb3}
.r.zero b{color:var(--muted)}
.ban{margin-top:0}
.ban li{text-decoration:line-through;text-decoration-color:rgba(255,160,130,.5)}
.left{margin:12px 0 0;border-radius:10px;border:1px dashed rgba(255,255,255,.25);padding:12px 14px;font-size:14px;color:var(--muted)}
.ov{margin:16px 0 0;border-radius:10px;background:rgba(217,89,38,.14);border:1px solid rgba(217,89,38,.5);padding:14px 16px;font-size:16px;color:#ffa882;text-align:center}
"""
def page(l):
    t = T[l]
    rows = "".join(f'<div class="r{" zero" if v=="none" else ""}"><span>{n}</span><b>{v}</b></div>' for n, v in t["bLi"])
    return f"""<!doctype html><html lang="{l}"><head><meta charset="utf-8"><style>{CSS}</style></head><body>
<div class="fig" id="a">
  <p class="kicker">{t['aK']}</p><h2>{t['aT']}</h2><p class="sub">{t['aS']}</p>
  <div class="cols">
    <div class="col ok"><h3>{t['aL']}</h3><ul>{''.join(f'<li>{i}</li>' for i in t['aLi'])}</ul></div>
    <div class="wall"></div>
    <div class="col bad"><h3>{t['aR']}</h3><ul>{''.join(f'<li>{i}</li>' for i in t['aRi'])}</ul></div>
  </div>
  <p class="note">{t['aN']}</p>
</div>
<div class="fig" id="b">
  <p class="kicker">{t['bK']}</p><h2>{t['bT']}</h2><p class="sub">{t['bS']}</p>
  <div class="cols">
    <div class="col"><h3>{t['bL']}</h3><div class="rows">{rows}</div></div>
    <div class="wall"></div>
    <div class="col bad"><h3>{t['bR']}</h3><ul class="ban">{''.join(f'<li>{i}</li>' for i in t['bRi'])}</ul>
      <div class="left">{t['bLeft']}</div></div>
  </div>
  <div class="ov">{t['bOverlap']}</div>
  <p class="note">{t['bN']}</p>
</div></body></html>"""
for l in T: pathlib.Path(f"fig2-{l}.html").write_text(page(l), encoding="utf-8")
print("ok")
