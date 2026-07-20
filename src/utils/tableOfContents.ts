// app/utils/tableOfContents.ts
//
// Shared slug logic for article h2 anchors — used by RichText (to set the
// id on the rendered heading) and by extractH2Headings (to build the TOC
// with matching hrefs) so the two never drift apart.

// Built via the RegExp constructor (not a literal) so the unicode property
// escape works regardless of the project's TS "target" — literal /u regexes
// require ES2018+ target, which this project doesn't set.
const NON_WORD_CHARS = new RegExp("[^\\p{L}\\p{N}-]+", "gu");

export function slugifyHeading(text: string, key: string): string {
  const base = (text || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(NON_WORD_CHARS, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

  const suffix = (key || "").slice(0, 6);
  return base ? `${base}-${suffix}` : `heading-${suffix}`;
}

export type Heading = { id: string; text: string };

// Walks a blog post's contentBlocks for textContent blocks' h2-style
// PortableText blocks and extracts {id, text} pairs for the TOC.
export function extractH2Headings(contentBlocks: any[]): Heading[] {
  if (!Array.isArray(contentBlocks)) return [];

  const headings: Heading[] = [];
  for (const block of contentBlocks) {
    if (block?._type !== "textContent" || !Array.isArray(block.content)) continue;
    for (const node of block.content) {
      if (node?._type !== "block" || node.style !== "h2" || !Array.isArray(node.children)) {
        continue;
      }
      const text = node.children
        .filter((child: any) => typeof child.text === "string")
        .map((child: any) => child.text)
        .join("");
      if (!text.trim()) continue;
      headings.push({ id: slugifyHeading(text, node._key), text });
    }
  }
  return headings;
}
