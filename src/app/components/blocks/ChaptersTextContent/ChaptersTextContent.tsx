import React, { FC } from "react";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import styles from "./ChaptersTextContent.module.scss";
import { RichText } from "../../shared/RichText/RichText";
import PageSnippet from "../PageSnippet/PageSnippet";
import AskLink from "./AskLink";
import QuoteForm from "../QuoteFormBlock/QuoteForm";
import { slugifyHeading } from "@/utils/tableOfContents";
import { TextContent } from "@/types/blog";

type Props = {
  block: TextContent;
  lang: string;
  /** Form texts of the page's quote card; the short form between chapters uses them. */
  formTexts?: Record<string, string> | null;
  formNote?: string;
  /** Without a placed short form, put one after the middle chapter (6+ chapters). */
  autoForm?: boolean;
};

type Section = { id: string; title: string; body: any[] };

// The short request form between two chapters (pageSnippet kind "shortForm").
// The snippet may carry its own title, text and facts for the service; these
// are the general defaults per language.
type BandText = { title: string; text: string; facts: string[]; context: string; placeholder: string };
const BAND: Record<string, BandText> = {
  pl: {
    title: "Wycena: odpowiedź w jeden dzień roboczy",
    text: "Napiszcie adres strony i czego potrzebujecie. Odpiszę, od czego zacząłbym, i podam stałą cenę.",
    facts: [],
    context: "Adres strony",
    placeholder: "np. twojafirma.pl",
  },
  en: {
    title: "Get a quote: a reply within one business day",
    text: "Send your website address and what you need. I will reply with what I would do first and a fixed price.",
    facts: [],
    context: "Website address",
    placeholder: "e.g. yourcompany.com",
  },
  ru: {
    title: "Расчёт стоимости: ответ в течение рабочего дня",
    text: "Пришлите адрес сайта и что нужно сделать. Напишу, с чего начал бы, и назову фиксированную цену.",
    facts: [],
    context: "Адрес сайта",
    placeholder: "например, vashsait.com",
  },
};

const ASK: Record<string, string> = {
  pl: "Poproś o wycenę",
  en: "Request a quote",
  ru: "Запросить расчёт",
};

// A first paragraph this short reads as the chapter's lead; a long one would
// turn into a wall of large type, so it stays body size.
const LEAD_MAX_CHARS = 260;
// "term: description" — the term is bolded when the colon comes early enough
// to be a label, not the middle of a sentence.
const TERM_MAX_CHARS = 60;
// "Name — what it covers: price" list items become price rows.
const PRICE_ITEM = /^(.+?)\s+[—–-]\s+(.+?):\s+(.+?)\.?$/;
const CURRENCY = /(zł|PLN|€|EUR|\$|USD|₽)/;

function plainText(node: any): string {
  return Array.isArray(node?.children)
    ? node.children.filter((c: any) => typeof c.text === "string").map((c: any) => c.text).join("")
    : "";
}

// Bold the label of a "term: description" list item when the editor has not
// marked anything — the data is changed, not the rendered nodes, so links and
// marks further in the item stay as they are.
function withTerm(node: any): any {
  const kids = Array.isArray(node.children) ? node.children : [];
  const first = kids[0];
  if (!first || typeof first.text !== "string") return node;
  if (kids.some((k: any) => (k.marks ?? []).includes("strong"))) return node;
  const at = first.text.indexOf(": ");
  if (at < 1 || at > TERM_MAX_CHARS) return node;
  // The term reads as the item's label, so it starts with a capital.
  const label = first.text.slice(0, at);
  const term = {
    ...first,
    _key: `${first._key}-t`,
    text: label.charAt(0).toLocaleUpperCase() + label.slice(1),
    marks: [...(first.marks ?? []), "strong"],
  };
  const rest = { ...first, text: first.text.slice(at) };
  return { ...node, children: [term, rest, ...kids.slice(1)] };
}

type PriceRow = { _key: string; name: string; covers: string; value: string; unit: string };

function asPriceRow(node: any): PriceRow | null {
  const m = PRICE_ITEM.exec(plainText(node).trim());
  if (!m || !CURRENCY.test(m[3])) return null;
  const price = m[3].trim();
  const cur = CURRENCY.exec(price)!;
  const cut = cur.index + cur[0].length;
  return { _key: node._key, name: m[1].trim(), covers: m[2].trim(), value: price.slice(0, cut).trim(), unit: price.slice(cut).trim() };
}

// Prepare one chapter's body: price lists become a "chapterPrices" node,
// list items get their term bolded, a short first paragraph is marked as lead.
function prepare(body: any[]): any[] {
  const out: any[] = [];
  let i = 0;
  let leadDone = false;
  while (i < body.length) {
    const node = body[i];
    if (node?._type === "block" && node.listItem === "bullet") {
      const run: any[] = [];
      while (i < body.length && body[i]?._type === "block" && body[i].listItem === "bullet") run.push(body[i++]);
      const rows = run.map(asPriceRow);
      if (rows.length > 1 && rows.every(Boolean)) {
        out.push({ _type: "chapterPrices", _key: `${run[0]._key}-prices`, rows });
      } else {
        // Bold terms only when most items in the list are "term: …" — a
        // single bolded item among plain ones reads as an accident.
        const termed = run.filter((n) => withTerm(n) !== n).length;
        out.push(...(termed * 2 >= run.length ? run.map(withTerm) : run));
      }
      leadDone = true;
      continue;
    }
    if (!leadDone && node?._type === "block" && (node.style ?? "normal") === "normal" && !node.listItem) {
      leadDone = true;
      if (plainText(node).length <= LEAD_MAX_CHARS) {
        out.push({ ...node, style: "lead" });
        i++;
        continue;
      }
    }
    if (node?._type === "block") leadDone = true;
    out.push(node);
    i++;
  }
  return out;
}

function componentsFor(lang: string): PortableTextComponents {
  return {
    ...RichText,
    types: {
      ...RichText.types,
      pageSnippet: ({ value }: any) => <PageSnippet kind={value?.kind} lang={lang} />,
      chapterPrices: ({ value }: any) => (
        <div className={styles.prices}>
          {(value.rows as PriceRow[]).map((r, i) => (
            <div key={r._key} className={i === 0 ? `${styles.price} ${styles.priceFirst}` : styles.price}>
              <div>
                <h3 className={styles.priceName}>{r.name}</h3>
                <p className={styles.priceCovers}>{r.covers}</p>
              </div>
              <div className={styles.priceValue}>
                {r.value}
                {r.unit && <small>{r.unit}</small>}
              </div>
            </div>
          ))}
        </div>
      ),
    },
    list: {
      bullet: ({ children }: any) => <ul className={styles.list}>{children}</ul>,
      number: ({ children }: any) => <ol className={`${styles.list} ${styles.listNumber}`}>{children}</ol>,
    },
    listItem: {
      bullet: ({ children }: any) => <li>{children}</li>,
      number: ({ children }: any) => <li>{children}</li>,
    },
    block: {
      ...RichText.block,
      normal: ({ children }: any) => <p className={styles.p}>{children}</p>,
      lead: ({ children }: any) => <p className={`${styles.p} ${styles.lead}`}>{children}</p>,
      h3: ({ children, value }: any) => (
        <h3 id={slugifyHeading(plainText(value), value._key)} className={styles.h3}>
          {children}
        </h3>
      ),
    },
  };
}

// textContent with layout "chapters" (2026-11, first on
// /pl/oferty/optymalizacja-konwersji). Each H2 opens a chapter: the heading
// on the left stays pinned while its chapter is read, with a quiet link to
// the quote form under it; the text runs on the right at a reading width.
// No contents list and no numbering — the pinned heading is the orientation.
// Phones: the heading simply stands above its text. Mockup: cro-proto/text2.html.
const ChaptersTextContent: FC<Props> = ({ block, lang, formTexts, formNote, autoForm }) => {
  const content: any[] = Array.isArray(block.content) ? block.content : [];
  const intro: any[] = [];
  const sections: Section[] = [];

  for (const node of content) {
    if (node?._type === "block" && node.style === "h2") {
      const title = plainText(node);
      sections.push({ id: slugifyHeading(title, node._key), title, body: [] });
    } else if (sections.length) {
      sections[sections.length - 1].body.push(node);
    } else {
      intro.push(node);
    }
  }

  const components = componentsFor(lang);
  const ask = ASK[lang] ?? ASK.en;
  const defaults = BAND[lang];
  const isFormMark = (n: any) => n?._type === "pageSnippet" && n.kind === "shortForm";
  // A short form placed in a chapter is drawn after that chapter, across the
  // full width of the screen — a pause between chapters, not a box in the text.
  const formBand = (mark: any) => {
    if (!defaults || !formTexts) return null;
    const band: BandText = {
      ...defaults,
      title: mark?.title || defaults.title,
      text: mark?.text || defaults.text,
      facts: (mark?.facts ?? []).length ? mark.facts : defaults.facts,
    };
    return (
      <aside key={mark?._key} className={styles.band} aria-label={band.title}>
        <div className={`container ${styles.bandGrid}`}>
          <div className={styles.bandText}>
            <p className={styles.bandTitle}>{band.title}</p>
            <p className={styles.bandSub}>{band.text}</p>
            {band.facts.length > 0 && (
              <ul className={styles.bandFacts}>
                {band.facts.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            )}
          </div>
          <div className={styles.bandForm}>
            <QuoteForm
              lang={lang}
              texts={formTexts}
              contextLabel={band.context}
              contextPlaceholder={band.placeholder}
              note={formNote}
              variant="short"
              placement="chapters_short_form"
            />
          </div>
        </div>
      </aside>
    );
  };

  const renderSection = (section: Section) => (
    <section key={section.id} className={styles.chapter} aria-labelledby={section.id}>
      <div className={styles.aside}>
        <div className={styles.pin}>
          <h2 id={section.id} className={styles.h2}>
            {section.title}
          </h2>
          <AskLink className={styles.ask}>{ask}</AskLink>
        </div>
      </div>
      <div className={styles.body}>
        <PortableText value={prepare(section.body.filter((n) => !isFormMark(n)))} components={components} />
      </div>
    </section>
  );

  // Chapters run in groups; a chapter that carries the short form closes its
  // group, and the form band follows across the full width of the screen.
  const groups: Section[][] = [[]];
  const marks: any[] = [];
  const placed = sections.some((s) => s.body.some(isFormMark));
  // Service pages in general (stage 2, 2026-11-28): a long text without a
  // placed form gets one after its middle chapter, with the general texts.
  const autoAfter = !placed && autoForm && sections.length >= 6 ? Math.ceil(sections.length / 2) - 1 : -1;
  sections.forEach((section, i) => {
    groups[groups.length - 1].push(section);
    const mark = section.body.find(isFormMark) ?? (i === autoAfter ? { _key: `${section.id}-auto` } : null);
    if (mark && defaults && formTexts) {
      marks.push(mark);
      groups.push([]);
    }
  });

  return (
    <>
      {groups.map((group, gi) => (
        <React.Fragment key={gi}>
          {(group.length > 0 || (gi === 0 && intro.length > 0)) && (
            <div className="container">
              <div className={styles.chapters}>
                {gi === 0 && intro.length > 0 && (
                  <div className={styles.chapter}>
                    <div className={styles.aside} />
                    <div className={styles.body}>
                      <PortableText value={prepare(intro)} components={components} />
                    </div>
                  </div>
                )}
                {group.map(renderSection)}
              </div>
            </div>
          )}
          {gi < groups.length - 1 && formBand(marks[gi])}
        </React.Fragment>
      ))}
    </>
  );
};

export default ChaptersTextContent;
