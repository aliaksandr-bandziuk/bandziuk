// Parses the "[TAG] → blockType" markdown format used for the AEO service pages.
// Each file is split on "---" into sections; each section starts with "[TAG]"
// (optionally "→ blockType") then has "EN:", "PL:", "RU:" subsections.
const { parseBodyText } = require("../cluster-md-to-portable-text.cjs");

function splitSections(raw) {
  // Drop the free-text preamble before the first "---"-delimited section boundary
  // by finding the first line that is exactly "---".
  const lines = raw.split("\n");
  const firstDash = lines.findIndex((l) => l.trim() === "---");
  const body = lines.slice(firstDash + 1).join("\n");
  return body.split(/\n---\n/).map((s) => s.trim()).filter(Boolean);
}

function parseLocaleBlocks(sectionBody) {
  // Splits a section's body into { en: "...", pl: "...", ru: "..." } by top-level
  // "EN:" / "PL:" / "RU:" markers (must be at start of line, exactly that).
  const re = /^(EN|PL|RU):\s*$/m;
  const lines = sectionBody.split("\n");
  const locales = {};
  let current = null;
  let buf = [];
  for (const line of lines) {
    const m = line.match(/^(EN|PL|RU):\s*$/);
    if (m) {
      if (current) locales[current.toLowerCase()] = buf.join("\n").trim();
      current = m[1];
      buf = [];
    } else {
      buf.push(line);
    }
  }
  if (current) locales[current.toLowerCase()] = buf.join("\n").trim();
  return locales;
}

function getSection(sections, tagName) {
  const found = sections.find((s) => s.startsWith(`[${tagName}]`));
  if (!found) throw new Error(`Section [${tagName}] not found`);
  const firstNewline = found.indexOf("\n");
  return found.slice(firstNewline + 1).trim();
}

// Parses "key: value" lines at the top of a locale block (used for META, HERO, CTA).
function parseKeyValues(text) {
  const out = {};
  const lines = text.split("\n");
  let currentKey = null;
  for (const line of lines) {
    const m = line.match(/^([a-zA-Z]+):\s*(.*)$/);
    if (m && !line.startsWith(" ")) {
      currentKey = m[1];
      out[currentKey] = m[2].trim();
    } else if (currentKey && line.trim()) {
      out[currentKey] += " " + line.trim();
    }
  }
  return out;
}

// Parses numbered "N. Title\n   Description" pairs, with an optional leading
// "title: ..." line before the numbered items.
function parseNumberedItems(text) {
  const lines = text.split("\n");
  let title = null;
  const items = [];
  let i = 0;
  const titleMatch = lines[0] && lines[0].match(/^title:\s*(.*)$/);
  if (titleMatch) { title = titleMatch[1].trim(); i = 1; }
  while (i < lines.length) {
    const line = lines[i];
    if (line.trim() === "") { i++; continue; }
    const numMatch = line.match(/^\d+\.\s+(.*)$/);
    if (numMatch) {
      const itemTitle = numMatch[1].trim();
      i++;
      const descLines = [];
      while (i < lines.length && lines[i].trim() !== "" && !/^\d+\.\s+/.test(lines[i])) {
        descLines.push(lines[i].trim());
        i++;
      }
      items.push({ title: itemTitle, description: descLines.join(" ").trim() });
      continue;
    }
    i++;
  }
  return { title, items };
}

// Parses a textContent-style section: "title: ..." line then free markdown body.
function parseTitledMarkdown(text) {
  const lines = text.split("\n");
  const titleMatch = lines[0] && lines[0].match(/^title:\s*(.*)$/);
  const title = titleMatch ? titleMatch[1].trim() : null;
  const bodyLines = titleMatch ? lines.slice(1) : lines;
  const body = bodyLines.join("\n").trim();
  return { title, body };
}

module.exports = {
  splitSections,
  parseLocaleBlocks,
  getSection,
  parseKeyValues,
  parseNumberedItems,
  parseTitledMarkdown,
  parseBodyText,
};
