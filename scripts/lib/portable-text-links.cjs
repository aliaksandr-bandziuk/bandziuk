// scripts/lib/portable-text-links.cjs
// Inserts inline "link" annotations around existing substrings inside a textContent
// PortableText `content` array. Fails loudly (throws) if a substring isn't found verbatim,
// so mistakes surface immediately instead of silently no-opping.
const crypto = require("crypto");

function key() {
  return crypto.randomBytes(6).toString("hex");
}

// Replaces a literal substring inside a block's text (must currently be a single plain span,
// or already-split children from a prior insertInlineLink call). Use for small, honest additions
// to an existing sentence (e.g. adding one missing item to an existing enumeration) — never for
// writing new paragraphs. Throws if oldText isn't found exactly once.
function replaceText(blocks, oldText, newText) {
  let blocksContaining = 0;
  for (const block of blocks) {
    if (block._type !== "block") continue;
    const fullText = (block.children || []).map((c) => c.text || "").join("");
    if (fullText.includes(oldText)) blocksContaining++;
  }
  if (blocksContaining === 0) throw new Error(`replaceText: oldText not found: "${oldText}"`);
  if (blocksContaining > 1) throw new Error(`replaceText: oldText found in ${blocksContaining} blocks — ambiguous: "${oldText}"`);

  let applied = false;
  const newBlocks = blocks.map((block) => {
    if (applied || block._type !== "block") return block;
    const fullText = (block.children || []).map((c) => c.text || "").join("");
    if (!fullText.includes(oldText)) return block;

    const spanIdx = block.children.findIndex(
      (c) => c._type === "span" && (!c.marks || c.marks.length === 0) && c.text.includes(oldText)
    );
    if (spanIdx === -1) {
      throw new Error(`Block ${block._key}: oldText "${oldText}" not found inside a single plain unmarked span (may straddle an existing link/mark boundary) — pick a different anchor.`);
    }
    applied = true;
    const newChildren = [...block.children];
    newChildren[spanIdx] = { ...newChildren[spanIdx], text: newChildren[spanIdx].text.replace(oldText, newText) };
    return { ...block, children: newChildren };
  });
  return newBlocks;
}

// blocks: the `content` array (array of PortableText block objects).
// matchText: exact substring to find — must currently sit inside ONE plain, unmarked span
// (children.length checked per-span, not per-block, so repeated calls on the same paragraph
// after a prior split are supported as long as matchText doesn't straddle a split point).
// href: the URL to link to.
// Returns a new blocks array with the link applied to the FIRST matching occurrence.
// Throws if matchText isn't found, or is found in more than one block (ambiguous).
function insertInlineLink(blocks, matchText, href) {
  const linkKey = key();
  let blocksContaining = 0;
  const newBlocks = blocks.map((block) => {
    if (block._type !== "block") return block;
    const fullText = (block.children || []).map((c) => c.text || "").join("");
    if (!fullText.includes(matchText)) return block;
    blocksContaining++;
    return block;
  });
  if (blocksContaining === 0) throw new Error(`matchText not found: "${matchText}"`);
  if (blocksContaining > 1) throw new Error(`matchText found in ${blocksContaining} blocks — ambiguous: "${matchText}"`);

  let applied = false;
  const result = newBlocks.map((block) => {
    if (applied || block._type !== "block") return block;
    const fullText = (block.children || []).map((c) => c.text || "").join("");
    if (!fullText.includes(matchText)) return block;

    // Find the specific child span (must be plain, unmarked) that contains matchText.
    const spanIdx = block.children.findIndex(
      (c) => c._type === "span" && (!c.marks || c.marks.length === 0) && c.text.includes(matchText)
    );
    if (spanIdx === -1) {
      throw new Error(`Block ${block._key}: matchText "${matchText}" not found inside a single plain unmarked span (may straddle an existing link/mark boundary) — needs manual handling.`);
    }
    const span = block.children[spanIdx];
    const idx = span.text.indexOf(matchText);
    const before = span.text.slice(0, idx);
    const after = span.text.slice(idx + matchText.length);

    const inserted = [];
    if (before) inserted.push({ _key: key(), _type: "span", marks: [], text: before });
    inserted.push({ _key: key(), _type: "span", marks: [linkKey], text: matchText });
    if (after) inserted.push({ _key: key(), _type: "span", marks: [], text: after });

    const newChildren = [...block.children.slice(0, spanIdx), ...inserted, ...block.children.slice(spanIdx + 1)];
    applied = true;
    return {
      ...block,
      children: newChildren,
      markDefs: [...(block.markDefs || []), { _key: linkKey, _type: "link", href }],
    };
  });

  return result;
}

module.exports = { insertInlineLink, replaceText, key };
