// scripts/lib/md-to-blog-portabletext.cjs
//
// Конвертер markdown → PortableText для статей блога.
// Отличается от lib/markdown-to-portable-text.cjs тем, что понимает
// blockquote (соглашение «Quick answer» в начале статей) и курсив,
// а обратные кавычки снимает: инлайнового code в схеме нет,
// декораторы только strong и em (src/sanity/schemaTypes/contentBlock.ts).
//
// Поддерживает:
//   > текст            → style blockquote
//   ## текст           → h2
//   ### текст          → h3
//   **жирный**         → decorator strong
//   *курсив*           → decorator em
//   `код`              → обычный текст, кавычки снимаются
//   [[якорь|LINKID]]   → link-аннотация, href берётся из linkMap
const crypto = require("crypto");

function key() {
  return crypto.randomBytes(6).toString("hex");
}

// Разбор инлайна за один проход: сначала ссылки, потом жирный, потом курсив.
// Обратные кавычки снимаются в самом конце, чтобы `**x**` внутри кода
// не превратился в жирный.
function parseInline(text, linkMap, markDefs) {
  const out = [];
  const tokens = text.split(/(\[\[[^\]]+?\|[A-Z_]+\]\])/g).filter((t) => t !== "");
  for (const tok of tokens) {
    const link = tok.match(/^\[\[([^\]]+?)\|([A-Z_]+)\]\]$/);
    if (link) {
      const [, anchor, id] = link;
      const href = linkMap[id];
      if (!href) throw new Error(`неизвестный id ссылки: ${id}`);
      const defKey = key();
      markDefs.push({ _key: defKey, _type: "link", href });
      out.push({ _key: key(), _type: "span", marks: [defKey], text: stripCode(anchor) });
      continue;
    }
    out.push(...parseEmphasis(tok));
  }
  return out.length ? out : [{ _key: key(), _type: "span", marks: [], text: "" }];
}

function stripCode(s) {
  return s.replace(/`([^`]+)`/g, "$1");
}

function parseEmphasis(text) {
  const spans = [];
  // сначала **жирный**, затем в остатках *курсив*
  for (const part of text.split(/(\*\*[^*]+\*\*)/g).filter((p) => p !== "")) {
    if (part.startsWith("**") && part.endsWith("**")) {
      spans.push({ _key: key(), _type: "span", marks: ["strong"], text: stripCode(part.slice(2, -2)) });
      continue;
    }
    for (const sub of part.split(/(\*[^*\n]+\*)/g).filter((p) => p !== "")) {
      if (sub.startsWith("*") && sub.endsWith("*") && sub.length > 2) {
        spans.push({ _key: key(), _type: "span", marks: ["em"], text: stripCode(sub.slice(1, -1)) });
      } else {
        spans.push({ _key: key(), _type: "span", marks: [], text: stripCode(sub) });
      }
    }
  }
  return spans;
}

function block(style, text, linkMap) {
  const markDefs = [];
  const children = parseInline(text, linkMap, markDefs);
  return { _key: key(), _type: "block", style, markDefs, children };
}

function mdToBlogPortableText(markdown, linkMap = {}) {
  const blocks = [];
  for (const raw of markdown.split("\n")) {
    const line = raw.trim();
    if (line === "" || line === "---") continue;
    if (line.startsWith("> ")) blocks.push(block("blockquote", line.slice(2).trim(), linkMap));
    else if (line.startsWith("### ")) blocks.push(block("h3", line.slice(4).trim(), linkMap));
    else if (line.startsWith("## ")) blocks.push(block("h2", line.slice(3).trim(), linkMap));
    else blocks.push(block("normal", line, linkMap));
  }
  return blocks;
}

module.exports = { mdToBlogPortableText, key };
