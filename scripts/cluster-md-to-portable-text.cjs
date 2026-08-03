// Converts one of the AI-brand-accuracy cluster's markdown article bodies into a single
// textContent-compatible portable text array (block + image only, per contentBlock schema —
// no native table support, so markdown tables become bullet lists "Field — reason").
const fs = require("fs");

function key() { return Math.random().toString(16).slice(2, 14); }

function span(text, marks = []) {
  return { _key: key(), _type: "span", text, marks };
}

function parseInlineBold(text) {
  // Splits "**bold**" runs into strong-marked spans, everything else plain.
  const parts = [];
  let rest = text;
  const re = /\*\*(.+?)\*\*/g;
  let lastIndex = 0;
  let m;
  while ((m = re.exec(text))) {
    if (m.index > lastIndex) parts.push(span(text.slice(lastIndex, m.index)));
    parts.push(span(m[1], ["strong"]));
    lastIndex = re.lastIndex;
  }
  if (lastIndex < text.length) parts.push(span(text.slice(lastIndex)));
  if (parts.length === 0) parts.push(span(text));
  return parts;
}

function block(children, style = "normal", listItem) {
  const b = { _key: key(), _type: "block", style, markDefs: [], children };
  if (listItem) { b.listItem = listItem; b.level = 1; }
  return b;
}

function parseLines(lines, startAt) {
  const blocks = [];
  let i = startAt || 0;

  while (i < lines.length) {
    const line = lines[i];
    if (line.trim() === "") { i++; continue; }

    if (line.startsWith("> ")) {
      // Blockquote (quick answer) — collect until a non-'>' line.
      let text = line.slice(2);
      i++;
      while (i < lines.length && lines[i].startsWith(">")) { text += " " + lines[i].replace(/^>\s?/, ""); i++; }
      blocks.push(block(parseInlineBold(text.trim()), "blockquote"));
      continue;
    }
    if (line.startsWith("### ")) {
      blocks.push(block([span(line.slice(4).trim())], "h3"));
      i++;
      continue;
    }
    if (line.startsWith("## ")) {
      blocks.push(block([span(line.slice(3).trim())], "h2"));
      i++;
      continue;
    }
    if (line.startsWith("# ")) {
      blocks.push(block([span(line.slice(2).trim())], "h2"));
      i++;
      continue;
    }
    if (/^\|/.test(line.trim())) {
      // Markdown table: header row, separator row, data rows -> bullet list "Col1 — Col2".
      const rows = [];
      while (i < lines.length && /^\|/.test(lines[i].trim())) { rows.push(lines[i].trim()); i++; }
      const dataRows = rows.filter((r) => !/^\|[\s:-]+\|/.test(r)).slice(1); // drop header, drop separator
      for (const r of dataRows) {
        const cells = r.split("|").map((c) => c.trim()).filter((c) => c.length);
        blocks.push(block([span(cells.join(" — "))], "normal", "bullet"));
      }
      continue;
    }
    if (/^[-*]\s/.test(line)) {
      blocks.push(block(parseInlineBold(line.replace(/^[-*]\s/, "").trim()), "normal", "bullet"));
      i++;
      continue;
    }
    // Regular paragraph — may wrap multiple source lines; markdown here is one-line-per-paragraph.
    blocks.push(block(parseInlineBold(line.trim())));
    i++;
  }

  return blocks;
}

function parseMarkdownBody(md) {
  // Extract everything after the frontmatter (second '---') and after the leading H1.
  const parts = md.split(/^---$/m);
  const body = parts.slice(2).join("---").trim();
  const lines = body.split("\n");

  let i = 0;
  // Skip leading H1 (rendered separately by the page template).
  while (i < lines.length && !lines[i].startsWith("# ")) i++;
  i++; // skip the H1 line itself
  while (i < lines.length && lines[i].trim() === "") i++;

  return parseLines(lines, i);
}

function parseBodyText(text) {
  // For raw prose (no frontmatter, no leading H1 to skip) — used for the service-page rewrite.
  return parseLines(text.trim().split("\n"), 0);
}

if (require.main === module) {
  const file = process.argv[2];
  const md = fs.readFileSync(file, "utf8");
  const blocks = parseMarkdownBody(md);
  console.log(JSON.stringify(blocks, null, 1));
}

module.exports = { parseMarkdownBody, parseBodyText, span, block, parseInlineBold, key };
