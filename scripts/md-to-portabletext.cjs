const crypto = require("crypto");

function key() {
  return crypto.randomBytes(6).toString("hex");
}

// Splits a line on **bold** markers into an array of spans {text, marks}.
function parseInlineSpans(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter((p) => p.length > 0);
  return parts.map((part) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return { _key: key(), _type: "span", marks: ["strong"], text: part.slice(2, -2) };
    }
    return { _key: key(), _type: "span", marks: [], text: part };
  });
}

function block(style, children) {
  return { _key: key(), _type: "block", style, markDefs: [], children };
}

/**
 * Converts the body markdown (frontmatter and H1 title already stripped) into
 * Sanity portable text blocks. Mirrors the exact style/mark vocabulary of
 * contentBlock.ts: normal/h2/h3/blockquote styles, strong decorator only
 * (no em used in these articles), no link annotations (none present in the
 * source markdown — internal linking is via the structured serviceOffered /
 * relatedArticles fields, not inline hrefs).
 */
function mdToPortableText(markdown) {
  const lines = markdown.split("\n");
  const blocks = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (trimmed === "") {
      i++;
      continue;
    }

    if (trimmed.startsWith("### ")) {
      blocks.push(block("h3", parseInlineSpans(trimmed.slice(4))));
      i++;
      continue;
    }
    if (trimmed.startsWith("## ")) {
      blocks.push(block("h2", parseInlineSpans(trimmed.slice(3))));
      i++;
      continue;
    }
    if (trimmed.startsWith("# ")) {
      // Title line — already used for the document's `title` field, skip in body.
      i++;
      continue;
    }
    if (trimmed.startsWith(">")) {
      const content = trimmed.replace(/^>\s*/, "");
      blocks.push(block("blockquote", parseInlineSpans(content)));
      i++;
      continue;
    }

    // Plain paragraph
    blocks.push(block("normal", parseInlineSpans(trimmed)));
    i++;
  }

  return blocks;
}

module.exports = { mdToPortableText };
