// Tiny Portable Text builders for landing-page fixtures. The same fixtures
// feed the dev preview route and, later, the script that creates the real
// page in Sanity — so the blocks are shaped exactly as Studio would save them.

let n = 0;
const key = (p: string) => `${p}${(++n).toString(36).padStart(6, "0")}`;

type Mark = { text: string; href?: string };

function spans(parts: Array<string | Mark>) {
  const markDefs: any[] = [];
  const children = parts.map((part) => {
    if (typeof part === "string") return { _type: "span", _key: key("s"), text: part, marks: [] };
    const linkKey = key("l");
    markDefs.push({ _type: "link", _key: linkKey, href: part.href });
    return { _type: "span", _key: key("s"), text: part.text, marks: [linkKey] };
  });
  return { children, markDefs };
}

export const p = (...parts: Array<string | Mark>) => ({ _type: "block", _key: key("p"), style: "normal", ...spans(parts) });
export const h2 = (text: string) => ({ _type: "block", _key: key("h"), style: "h2", ...spans([text]) });
export const h3 = (text: string) => ({ _type: "block", _key: key("h"), style: "h3", ...spans([text]) });
export const li = (...parts: Array<string | Mark>) => ({
  _type: "block", _key: key("i"), style: "normal", listItem: "bullet", level: 1, ...spans(parts),
});
export const ol = (...parts: Array<string | Mark>) => ({
  _type: "block", _key: key("o"), style: "normal", listItem: "number", level: 1, ...spans(parts),
});
export const link = (text: string, href: string): Mark => ({ text, href });
export const k = key;
