const crypto = require("crypto");
function key() { return crypto.randomBytes(6).toString("hex"); }

// Parses **bold** and [[anchor phrase|LINKID]] markers into spans.
// LINKID is resolved against a linkMap of {LINKID: href} passed in.
function parseInlineSpans(text, linkMap, markDefs) {
  const tokens = text.split(/(\[\[[^\]]+?\|[A-Z_]+\]\]|\*\*[^*]+\*\*)/g).filter(Boolean);
  return tokens.map((tok) => {
    const linkMatch = tok.match(/^\[\[([^\]]+?)\|([A-Z_]+)\]\]$/);
    if (linkMatch) {
      const [, anchorText, linkId] = linkMatch;
      const href = linkMap[linkId];
      if (!href) throw new Error("Unknown link id: " + linkId);
      const defKey = key();
      markDefs.push({ _key: defKey, _type: "link", href });
      return { _key: key(), _type: "span", marks: [defKey], text: anchorText };
    }
    if (tok.startsWith("**") && tok.endsWith("**")) {
      return { _key: key(), _type: "span", marks: ["strong"], text: tok.slice(2, -2) };
    }
    return { _key: key(), _type: "span", marks: [], text: tok };
  });
}

function block(style, text, linkMap) {
  const markDefs = [];
  const children = parseInlineSpans(text, linkMap, markDefs);
  return { _key: key(), _type: "block", style, markDefs, children };
}

// markdown body -> portable text blocks. Supports ## h2 / ### h3 / plain paragraphs,
// **bold**, and [[anchor|LINKID]] inline links resolved via linkMap.
function mdToPortableText(markdown, linkMap = {}) {
  const lines = markdown.split("\n");
  const blocks = [];
  let i = 0;
  while (i < lines.length) {
    const trimmed = lines[i].trim();
    if (trimmed === "") { i++; continue; }
    if (trimmed.startsWith("### ")) { blocks.push(block("h3", trimmed.slice(4), linkMap)); i++; continue; }
    if (trimmed.startsWith("## ")) { blocks.push(block("h2", trimmed.slice(3), linkMap)); i++; continue; }
    blocks.push(block("normal", trimmed, linkMap));
    i++;
  }
  return blocks;
}

module.exports = { mdToPortableText, key };
