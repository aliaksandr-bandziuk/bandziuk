import React from "react";
import styles from "./TableBlockComponent.module.scss";
import { TableBlock, TableRow } from "@/types/blog";
import { Check, X } from "lucide-react";

interface Props {
  block: TableBlock;
}

const marginValues: Record<string, string> = {
  small: "clamp(0.9375rem, 3.75vw, 2.8125rem)",
  medium: "clamp(1.875rem, 0.75rem + 4.5vw, 4.125rem)",
  large: "clamp(1.875rem, 7.5vw, 5.625rem)",
};

// Content is authored as plain strings with a leading Unicode glyph
// (✔/✓/✅ or ❌/✗/✘) — e.g. "✔ Law firms seeking steady client
// acquisition". Some of those glyphs are plain dingbats (inherit text
// color) and some are colored emoji (ignore CSS color entirely), so the
// same table renders inconsistently across platforms. We strip the glyph
// and render a Lucide icon in its place so both are reliably tokenized.
// Built via the RegExp constructor (not a literal) — a literal /u-flagged
// regex requires an ES2018+ TS target, which this project doesn't set.
const CHECK_PREFIX = new RegExp("^\\s*[✔✓✅]\\s*", "u");
const CROSS_PREFIX = new RegExp("^\\s*[❌✗✘×]\\s*", "u");

function renderCell(cell: string) {
  if (CHECK_PREFIX.test(cell)) {
    return (
      <span className={styles.cellWithIcon}>
        <Check size={16} className={styles.iconSuccess} aria-hidden="true" />
        <span>{cell.replace(CHECK_PREFIX, "")}</span>
      </span>
    );
  }
  if (CROSS_PREFIX.test(cell)) {
    return (
      <span className={styles.cellWithIcon}>
        <X size={16} className={styles.iconDanger} aria-hidden="true" />
        <span>{cell.replace(CROSS_PREFIX, "")}</span>
      </span>
    );
  }
  return cell;
}

// A column "reads" as positive/negative when most of its non-empty cells
// share the same check/cross marker — this is also how we decide whether
// the table is a pro/con comparison at all (see below), rather than
// guessing from the column headings, which vary a lot across pages
// ("Ideal For", "Problem", "Suitable For", "Good fit if you", ...).
function detectColumnSentiment(
  rows: TableRow[],
  colIndex: number
): "positive" | "negative" | null {
  const cells = rows.map((r) => r.cells[colIndex]).filter(Boolean);
  if (!cells.length) return null;

  const checkCount = cells.filter((c) => CHECK_PREFIX.test(c)).length;
  const crossCount = cells.filter((c) => CROSS_PREFIX.test(c)).length;

  if (checkCount >= cells.length / 2 && checkCount > crossCount) return "positive";
  if (crossCount >= cells.length / 2 && crossCount > checkCount) return "negative";
  return null;
}

const TableBlockComponent: React.FC<Props> = ({ block }) => {
  const computedMarginTop =
    block.marginTop && marginValues[block.marginTop]
      ? marginValues[block.marginTop]
      : "0";

  const computedMarginBottom =
    block.marginBottom && marginValues[block.marginBottom]
      ? marginValues[block.marginBottom]
      : "0";

  const columnSentiments = block.columns.map((_, i) =>
    detectColumnSentiment(block.rows, i)
  );

  return (
    <div
      className={styles.tableBlockComponent}
      style={{
        marginTop: computedMarginTop,
        marginBottom: computedMarginBottom,
      }}
    >
      <div className="container">
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                {block.columns.map((col, i) => (
                  <th
                    key={i}
                    className={[
                      styles.th,
                      columnSentiments[i] === "positive" ? styles.thPositive : "",
                      columnSentiments[i] === "negative" ? styles.thNegative : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr key={row._key}>
                  {row.cells.map((cell, j) => (
                    <td key={j} className={styles.td}>
                      {renderCell(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableBlockComponent;
