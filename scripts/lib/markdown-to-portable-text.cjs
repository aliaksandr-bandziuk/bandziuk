// scripts/lib/markdown-to-portable-text.cjs
// Converts a blog article's markdown body (after the deliverables header, and with the leading
// `# Title` stripped since the page renders its own H1 from the `title` field) into a single
// contentBlock-compatible PortableText array: block (normal/h1-h4/blockquote, bullet lists,
// strong/em, link) + image. Markdown tables are converted to bullet lists since contentBlock has
// no table member.
const crypto = require("crypto");

function key() {
  return crypto.randomBytes(6).toString("hex");
}

// Parses **bold** (and *italic*, unused here but supported) into spans with marks.
function parseInline(text) {
  const spans = [];
  // Split on **bold** first, keeping delimiters.
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter((p) => p !== "");
  for (const part of parts) {
    if (part.startsWith("**") && part.endsWith("**")) {
      spans.push({ _key: key(), _type: "span", marks: ["strong"], text: part.slice(2, -2) });
    } else if (part.length) {
      spans.push({ _key: key(), _type: "span", marks: [], text: part });
    }
  }
  return spans.length ? spans : [{ _key: key(), _type: "span", marks: [], text: "" }];
}

function block(style, text, listItem) {
  const b = { _key: key(), _type: "block", style, markDefs: [], children: parseInline(text) };
  if (listItem) {
    b.listItem = "bullet";
    b.level = 1;
  }
  return b;
}

// Strips the `key: value` deliverables header (--- ... ---) and the leading `# Title` line.
function stripHeaderAndTitle(raw) {
  let body = raw;
  const headerMatch = body.match(/^---\n[\s\S]*?\n---\n/);
  if (headerMatch) body = body.slice(headerMatch[0].length);
  body = body.replace(/^\s*\n/, "");
  body = body.replace(/^#\s+.+\n/, ""); // drop the H1 line
  return body.trim();
}

function parseMarkdownTable(lines) {
  // lines[0] = header row, lines[1] = separator (---), lines[2..] = data rows
  const splitRow = (l) => l.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((c) => c.trim());
  const headers = splitRow(lines[0]);
  const dataLines = lines.slice(2);
  const blocks = [];
  for (const line of dataLines) {
    const cells = splitRow(line);
    // First cell as bold lead-in, remaining cells joined as the rest of the bullet.
    const lead = cells[0];
    const rest = cells.slice(1).filter((c) => c && c !== "—" && c !== "-").join(" — ");
    const text = rest ? `**${lead}** — ${rest}` : `**${lead}**`;
    blocks.push(block("normal", text, true));
  }
  return blocks;
}

function markdownToPortableText(raw) {
  const body = stripHeaderAndTitle(raw);
  const lines = body.split("\n");
  const blocks = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (line.trim() === "") { i++; continue; }

    if (line.startsWith("> ")) {
      // Collect consecutive blockquote lines into one blockquote block.
      const quoteLines = [];
      while (i < lines.length && lines[i].startsWith(">")) {
        quoteLines.push(lines[i].replace(/^>\s?/, ""));
        i++;
      }
      blocks.push(block("blockquote", quoteLines.join(" ")));
      continue;
    }

    if (line.startsWith("### ")) {
      blocks.push(block("h3", line.slice(4).trim()));
      i++;
      continue;
    }
    if (line.startsWith("## ")) {
      blocks.push(block("h2", line.slice(3).trim()));
      i++;
      continue;
    }
    if (line.startsWith("# ")) {
      blocks.push(block("h1", line.slice(2).trim()));
      i++;
      continue;
    }

    if (line.trim().startsWith("|")) {
      const tableLines = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        tableLines.push(lines[i]);
        i++;
      }
      blocks.push(...parseMarkdownTable(tableLines));
      continue;
    }

    if (/^[-*]\s+/.test(line)) {
      blocks.push(block("normal", line.replace(/^[-*]\s+/, ""), true));
      i++;
      continue;
    }

    // Regular paragraph — collect until a blank line or a line starting a new block type.
    const paraLines = [line];
    i++;
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !lines[i].startsWith("#") &&
      !lines[i].startsWith(">") &&
      !lines[i].trim().startsWith("|") &&
      !/^[-*]\s+/.test(lines[i])
    ) {
      paraLines.push(lines[i]);
      i++;
    }
    blocks.push(block("normal", paraLines.join(" ")));
  }
  return blocks;
}

module.exports = { markdownToPortableText, stripHeaderAndTitle, key };
