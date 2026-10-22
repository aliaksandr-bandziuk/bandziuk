#!/usr/bin/env python3
"""Собирает единую книгу Excel с планом работ и таблицами «отрасль × услуга».

Источники: workplan.csv (действие и адрес), core.csv (услуга и связки),
pseo-industries.cjs и pseo-vocab.cjs (словари).
"""
import csv, json, re, subprocess, sys
from pathlib import Path
from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter

# данные — в текущей папке (research/pseo), скрипт может лежать где угодно
HERE = Path.cwd()
SCRIPTS = Path(sys.argv[1]) if len(sys.argv) > 1 else HERE

FONT = "Arial"
H_FILL = PatternFill("solid", fgColor="1F3864")
H_FONT = Font(name=FONT, bold=True, color="FFFFFF", size=10)
SUB_FILL = PatternFill("solid", fgColor="D9E2F3")
BOLD = Font(name=FONT, bold=True, size=10)
BASE = Font(name=FONT, size=10)
NOTE = Font(name=FONT, size=9, italic=True, color="666666")
THIN = Side(style="thin", color="BFBFBF")
BOX = Border(left=THIN, right=THIN, top=THIN, bottom=THIN)

ACTION_FILL = {
    "создать": PatternFill("solid", fgColor="E2EFDA"),
    "править": PatternFill("solid", fgColor="FFF2CC"),
    "уже содержит": PatternFill("solid", fgColor="F2F2F2"),
    "ничего не делать": PatternFill("solid", fgColor="F2F2F2"),
}

SERVICES = ["seo", "development", "design", "landing", "ecommerce",
            "audit", "redesign", "platform", "price", "price-seo"]
SERVICE_RU = {
    "seo": "продвижение", "development": "разработка", "design": "дизайн",
    "landing": "лендинг", "ecommerce": "интернет-магазин", "audit": "аудит",
    "redesign": "редизайн", "platform": "платформа", "price": "цена разработки",
    "price-seo": "цена продвижения",
}
LANGS = ["en", "pl", "ru"]


def read_csv(name):
    with open(HERE / name, encoding="utf-8") as f:
        return list(csv.DictReader(f))


def js_array(path, const):
    """Вытаскивает литерал массива из .cjs — словари живут там."""
    text = Path(path).read_text(encoding="utf-8")
    m = re.search(rf"const {const} = \[(.*?)\n\];", text, re.S)
    return m.group(1) if m else ""


def industries():
    body = js_array(SCRIPTS / "pseo-industries.cjs", "INDUSTRY_TABLE")
    out = []
    for m in re.finditer(r'\{\s*key:\s*"([^"]+)",\s*en:\s*"([^"]*)",\s*pl:\s*"([^"]*)",\s*ru:\s*"([^"]*)"\s*\}', body):
        out.append(dict(key=m.group(1), en=m.group(2), pl=m.group(3), ru=m.group(4)))
    return out


def head_row(ws, headers, widths, row=1):
    for i, (h, w) in enumerate(zip(headers, widths), 1):
        c = ws.cell(row=row, column=i, value=h)
        c.fill, c.font = H_FILL, H_FONT
        c.alignment = Alignment(vertical="center", wrap_text=True)
        c.border = BOX
        ws.column_dimensions[get_column_letter(i)].width = w
    ws.row_dimensions[row].height = 28


def main():
    plan = read_csv("workplan.csv")
    core = {(r["lang"], r["head"]): r for r in read_csv("core.csv")}
    inds = industries()
    ind_name = {i["key"]: i for i in inds}

    for r in plan:
        c = core.get((r["lang"], r["head"]), {})
        r["service_group"] = c.get("service_group", "")
        r["volume_sum"] = c.get("volume_sum", r["volume"])

    wb = Workbook()

    # ---------------------------------------------------------- план работ --
    ws = wb.active
    ws.title = "План работ"
    cols = ["действие", "язык", "ось", "услуга", "отрасль", "город", "запрос",
            "частота", "адрес", "существующая страница", "заголовок страницы",
            "почему", "формулировок", "формулировки в подзаголовки"]
    head_row(ws, cols, [16, 7, 17, 15, 20, 14, 42, 10, 40, 34, 34, 46, 12, 60])
    for i, r in enumerate(plan, start=2):
        vals = [
            r["action"], r["lang"], r["axis"], SERVICE_RU.get(r["service_group"], r["service_group"]),
            r["industry_key"], r["city_key"], r["head"], int(r["volume"] or 0),
            r["url"], r["existing_url"], r["existing_title"], r["reason"],
            int(r["phrases"] or 0), r["variants_for_h2"],
        ]
        for j, v in enumerate(vals, 1):
            c = ws.cell(row=i, column=j, value=v)
            c.font = BASE
            c.alignment = Alignment(vertical="top", wrap_text=(j in (12, 14)))
        fill = ACTION_FILL.get(r["action"])
        if fill:
            ws.cell(row=i, column=1).fill = fill
        ws.cell(row=i, column=8).number_format = "#,##0"
    ws.freeze_panes = "A2"
    ws.auto_filter.ref = f"A1:N{len(plan) + 1}"
    last = len(plan) + 1

    # ------------------------------------------------- таблица Пифагора --
    def matrix(sheet_name, key_col, rows_def, title_cols):
        m = wb.create_sheet(sheet_name)
        m["A1"] = title_cols
        m["A1"].font = Font(name=FONT, bold=True, size=12)
        m["A2"] = ("В клетке — суммарная частота запросов этой пары в месяц. "
                   "Пусто значит, что страницы по этой паре в плане нет. "
                   "Числа считаются формулой по листу «План работ» и меняются вместе с ним.")
        m["A2"].font = NOTE
        m.merge_cells(start_row=2, start_column=1, end_row=2, end_column=8)

        r0 = 4
        m.cell(row=r0, column=1, value="ключ").fill = H_FILL
        m.cell(row=r0, column=1).font = H_FONT
        labels = ["ключ", "английский", "польский", "русский"] if key_col == "industry_key" else ["город"]
        for i, lab in enumerate(labels, 1):
            c = m.cell(row=r0, column=i, value=lab)
            c.fill, c.font, c.border = H_FILL, H_FONT, BOX
            m.column_dimensions[get_column_letter(i)].width = 26 if i > 1 else 22
        off = len(labels)
        col = off + 1
        for lang in LANGS:
            for svc in SERVICES:
                c = m.cell(row=r0, column=col, value=f"{lang} · {SERVICE_RU[svc]}")
                c.fill, c.font, c.border = SUB_FILL, Font(name=FONT, bold=True, size=9), BOX
                c.alignment = Alignment(text_rotation=90, horizontal="center", vertical="bottom")
                m.column_dimensions[get_column_letter(col)].width = 6
                col += 1
        m.row_dimensions[r0].height = 96

        key_letter = "E" if key_col == "industry_key" else "F"
        for i, row in enumerate(rows_def, start=r0 + 1):
            if key_col == "industry_key":
                vals = [row["key"], row["en"], row["pl"], row["ru"]]
            else:
                vals = [row["key"]]
            for j, v in enumerate(vals, 1):
                c = m.cell(row=i, column=j, value=v)
                c.font = BOLD if j == 1 else BASE
                c.border = BOX
            col = off + 1
            for lang in LANGS:
                for svc in SERVICES:
                    f = (f'=IF(SUMIFS(\'План работ\'!$H${2}:$H${last},'
                         f"'План работ'!$B${2}:$B${last},\"{lang}\","
                         f"'План работ'!${key_letter}${2}:${key_letter}${last},$A{i},"
                         f"'План работ'!$D${2}:$D${last},\"{SERVICE_RU[svc]}\")=0,\"\","
                         f'SUMIFS(\'План работ\'!$H${2}:$H${last},'
                         f"'План работ'!$B${2}:$B${last},\"{lang}\","
                         f"'План работ'!${key_letter}${2}:${key_letter}${last},$A{i},"
                         f"'План работ'!$D${2}:$D${last},\"{SERVICE_RU[svc]}\"))")
                    c = m.cell(row=i, column=col, value=f)
                    c.font = Font(name=FONT, size=9)
                    c.number_format = "#,##0"
                    c.border = BOX
                    c.alignment = Alignment(horizontal="center")
                    col += 1
        m.freeze_panes = m.cell(row=r0 + 1, column=off + 1)
        return m

    matrix("Отрасль × услуга", "industry_key", inds,
           "Таблица отраслей и услуг: тридцать сочетаний на каждую отрасль")

    cities = sorted({r["city_key"] for r in plan if r["city_key"]})
    matrix("Город × услуга", "city_key", [{"key": c} for c in cities],
           "Таблица городов и услуг")

    # -------------------------------------------------------------- сводка --
    s = wb.create_sheet("Сводка", 0)
    s["A1"] = "Программные страницы bandziuk.com: план работ"
    s["A1"].font = Font(name=FONT, bold=True, size=14)
    s["A2"] = "Собрано 21.10.2026. Матрица: 52 345 проверенных комбинаций, порог 10 запросов в месяц."
    s["A2"].font = NOTE
    s.column_dimensions["A"].width = 46
    for col in "BCDE":
        s.column_dimensions[col].width = 14

    r = 4
    s.cell(row=r, column=1, value="Действия").font = BOLD
    r += 1
    for i, h in enumerate(["действие", "всего", "en", "pl", "ru"], 1):
        c = s.cell(row=r, column=i, value=h)
        c.fill, c.font, c.border = H_FILL, H_FONT, BOX
    for a in ["создать", "править", "уже содержит", "ничего не делать"]:
        r += 1
        s.cell(row=r, column=1, value=a).font = BASE
        s.cell(row=r, column=2, value=f"=COUNTIF('План работ'!$A$2:$A${last},$A{r})").font = BASE
        for j, lang in enumerate(LANGS, 3):
            s.cell(row=r, column=j,
                   value=f"=COUNTIFS('План работ'!$A$2:$A${last},$A{r},'План работ'!$B$2:$B${last},\"{lang}\")").font = BASE
        for j in range(1, 6):
            s.cell(row=r, column=j).border = BOX
    r += 1
    s.cell(row=r, column=1, value="сумма").font = BOLD
    s.cell(row=r, column=2, value=f"=SUM(B{r-4}:B{r-1})").font = BOLD
    s.cell(row=r, column=3, value=f"=COUNTA('План работ'!$A$2:$A${last})").font = BOLD
    s.cell(row=r, column=4, value="строк в плане").font = NOTE

    r += 3
    s.cell(row=r, column=1, value="Страницы к созданию по осям").font = BOLD
    r += 1
    for i, h in enumerate(["ось", "создать", "частота в месяц"], 1):
        c = s.cell(row=r, column=i, value=h)
        c.fill, c.font, c.border = H_FILL, H_FONT, BOX
    for axis in ["service-only", "service-industry", "service-city", "industry-city"]:
        r += 1
        s.cell(row=r, column=1, value=axis).font = BASE
        s.cell(row=r, column=2,
               value=f"=COUNTIFS('План работ'!$C$2:$C${last},$A{r},'План работ'!$A$2:$A${last},\"создать\")").font = BASE
        s.cell(row=r, column=3,
               value=f"=SUMIFS('План работ'!$H$2:$H${last},'План работ'!$C$2:$C${last},$A{r},'План работ'!$A$2:$A${last},\"создать\")").font = BASE
        s.cell(row=r, column=3).number_format = "#,##0"
        for j in range(1, 4):
            s.cell(row=r, column=j).border = BOX

    r += 3
    for line in [
        "Что в этом файле",
        "«План работ» — все строки плана. Каждая тема получает ровно одно действие; фильтры включены.",
        "«Отрасль × услуга» и «Город × услуга» — таблицы сочетаний: тридцать клеток на строку, по десять услуг на каждый язык.",
        "«Словарь отраслей» и «Словарь городов» — то, из чего строится матрица. Дописать строку и перезапустить сбор.",
        "",
        "Чего нельзя брать за чистую монету",
        "Головные английские запросы: web design и website design по 201 000, seo consultant 22 200. Позиций по ним не будет, страницы имеют смысл как опора кластера.",
        "Латинские термины посчитаны трижды: headless cms и core web vitals по 22 200 на каждом языке — это одно английское число. Сбор шёл без локации.",
        "website for doctors 90 500 — почти наверняка корзина Keyword Planner, куда ссыпаны близкие варианты.",
        "Ось «отрасль в городе»: из 42 000 проверенных сочетаний спрос нашёлся у 34 на 980 запросов. Это ставка на будущий спрос, а не измерение.",
        "Частоты округлены до сетки Keyword Planner: 10, 20, 30, 50, 70, 90, 140, 210, 320, 480. Точности до единиц нет.",
        "Порог 10 — предел измерения источника. Запрос с реальной частотой 1–9 показывается как 0, поэтому отсутствие строки не означает отсутствия спроса.",
        "",
        "Правила языковых версий",
        "Отрасль со спросом хоть на одном языке получает страницы на всех трёх. Применяется к паре «отрасль + услуга».",
        "Польские и казахские города не переводятся. Города других стран с русскоязычным бизнесом получают английскую и русскую версии.",
        "Разработка, дизайн и продвижение — разные страницы. «Создание сайта для адвоката», «веб-дизайн сайта адвоката» и «SEO-продвижение сайта адвоката» покупают разные люди.",
    ]:
        c = s.cell(row=r, column=1, value=line)
        c.font = BOLD if line and not line[0].islower() and len(line) < 40 else NOTE
        c.alignment = Alignment(wrap_text=False)
        r += 1

    # ----------------------------------------------------------- словари --
    d = wb.create_sheet("Словарь отраслей")
    head_row(d, ["ключ", "английский", "польский (после dla)", "русский (родительный)"], [24, 30, 34, 34])
    for i, x in enumerate(inds, 2):
        for j, k in enumerate(["key", "en", "pl", "ru"], 1):
            d.cell(row=i, column=j, value=x[k]).font = BASE
    d.freeze_panes = "A2"
    d.auto_filter.ref = f"A1:D{len(inds) + 1}"
    d.cell(row=len(inds) + 3, column=1,
           value="Чтобы добавить отрасль: дописать строку сюда и в scripts/dataforseo/pseo-industries.cjs, затем перезапустить сбор. Оплатятся только новые сочетания.").font = NOTE

    g = wb.create_sheet("Словарь городов")
    head_row(g, ["город", "страниц в плане", "суммарная частота"], [26, 18, 20])
    for i, c in enumerate(cities, 2):
        g.cell(row=i, column=1, value=c).font = BASE
        g.cell(row=i, column=2, value=f"=COUNTIF('План работ'!$F$2:$F${last},$A{i})").font = BASE
        g.cell(row=i, column=3, value=f"=SUMIFS('План работ'!$H$2:$H${last},'План работ'!$F$2:$F${last},$A{i})").font = BASE
        g.cell(row=i, column=3).number_format = "#,##0"
    g.freeze_panes = "A2"

    out = HERE / "bandziuk-pseo-plan.xlsx"
    wb.save(out)
    print(f"записано: {out}, листов {len(wb.sheetnames)}: {', '.join(wb.sheetnames)}")


main()
