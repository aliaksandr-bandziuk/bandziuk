const fs = require("fs");
const path = require("path");
const { mdToPortableText } = require("./md-to-portabletext.cjs");

function stripFrontmatterAndTitle(raw) {
  // Remove the --- ... --- deliverables header
  const withoutFrontmatter = raw.replace(/^---[\s\S]*?---\n/, "");
  // Remove the leading "# Title" line (becomes the document's `title` field)
  return withoutFrontmatter.replace(/^\s*#\s+.+\n/, "");
}

const files = {
  en: "blog-llms-txt-EN.md",
  pl: "blog-llms-txt-PL.md",
  ru: "blog-llms-txt-RU.md",
};

const out = {};
for (const [lang, file] of Object.entries(files)) {
  const raw = fs.readFileSync(path.resolve(__dirname, "../drafts", file), "utf8");
  const body = stripFrontmatterAndTitle(raw);
  const blocks = mdToPortableText(body);
  out[lang] = blocks;
  console.log(`${lang}: ${blocks.length} blocks — styles: ${blocks.map(b => b.style).join(",")}`);
}

fs.writeFileSync(
  path.resolve(__dirname, "../drafts/llms-txt-portabletext.json"),
  JSON.stringify(out, null, 1)
);
console.log("Wrote drafts/llms-txt-portabletext.json");
