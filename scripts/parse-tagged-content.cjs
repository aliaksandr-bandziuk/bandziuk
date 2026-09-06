const fs = require("fs");

// Parses the site's "-tagged-content.md" format into structured data.
// Sections: [SLUG] [META] [HERO] [PAIN] [FEATURES] [SEO_TEXT] [STEPS] [FAQ] [RELATED] [CTA]
// Each section (except SLUG/RELATED/CTA) has per-locale sub-blocks starting with "EN:"/"PL:"/"RU:".
function parseTaggedContent(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");

  // Split into top-level [SECTION] chunks
  const sectionRe = /^\[([A-Z_]+)\](?:\s*→\s*\S+)?\s*$/gm;
  const sections = {};
  let match;
  const indices = [];
  while ((match = sectionRe.exec(raw)) !== null) {
    indices.push({ name: match[1], start: match.index, contentStart: sectionRe.lastIndex });
  }
  for (let i = 0; i < indices.length; i++) {
    const end = i + 1 < indices.length ? indices[i + 1].start : raw.length;
    sections[indices[i].name] = raw.slice(indices[i].contentStart, end).replace(/\n---\s*$/, "").trim();
  }

  function splitLocales(text) {
    const out = {};
    const re = /^(EN|PL|RU):\s*$/gm;
    const idx = [];
    let m;
    while ((m = re.exec(text)) !== null) idx.push({ lang: m[1].toLowerCase(), start: m.index, contentStart: re.lastIndex });
    for (let i = 0; i < idx.length; i++) {
      const end = i + 1 < idx.length ? idx[i + 1].start : text.length;
      out[idx[i].lang] = text.slice(idx[i].contentStart, end).trim();
    }
    return out;
  }

  function parseTitleBody(text) {
    const m = text.match(/^title:\s*(.+)$/m);
    const title = m ? m[1].trim() : null;
    const body = m ? text.slice(m.index + m[0].length).trim() : text.trim();
    return { title, body };
  }

  // Numbered list items: "1. Title\n   description..." (description may wrap multiple lines)
  function parseNumberedItems(body) {
    const items = [];
    const re = /^(\d+)\.\s+(.+)$/gm;
    const idx = [];
    let m;
    while ((m = re.exec(body)) !== null) idx.push({ n: m[1], title: m[2].trim(), start: m.index, contentStart: re.lastIndex });
    for (let i = 0; i < idx.length; i++) {
      const end = i + 1 < idx.length ? idx[i + 1].start : body.length;
      const desc = body.slice(idx[i].contentStart, end).trim().replace(/\n\s+/g, " ");
      items.push([idx[i].title, desc]);
    }
    return items;
  }

  function parseMeta(text) {
    const out = {};
    const mt = text.match(/^metaTitle:\s*(.+)$/m);
    const md = text.match(/^metaDescription:\s*(.+)$/m);
    if (mt) out.metaTitle = mt[1].trim();
    if (md) out.metaDescription = md[1].trim();
    return out;
  }

  function parseHero(text) {
    const out = {};
    const h = text.match(/^headline:\s*(.+)$/m);
    const e = text.match(/^excerpt:\s*(.+)$/m);
    if (h) out.headline = h[1].trim();
    if (e) out.excerpt = e[1].trim();
    return out;
  }

  const result = { slug: {}, meta: {}, hero: {}, pain: {}, features: {}, seoText: {}, steps: {}, faq: {} };

  if (sections.SLUG) {
    for (const line of sections.SLUG.split("\n")) {
      const m = line.match(/^(EN|PL|RU):\s*(.+)$/);
      if (m) result.slug[m[1].toLowerCase()] = m[2].trim();
    }
  }
  if (sections.META) {
    const loc = splitLocales(sections.META);
    for (const [lang, text] of Object.entries(loc)) result.meta[lang] = parseMeta(text);
  }
  if (sections.HERO) {
    const loc = splitLocales(sections.HERO);
    for (const [lang, text] of Object.entries(loc)) result.hero[lang] = parseHero(text);
  }
  if (sections.PAIN) {
    const loc = splitLocales(sections.PAIN);
    for (const [lang, text] of Object.entries(loc)) {
      const { title, body } = parseTitleBody(text);
      result.pain[lang] = { title, items: parseNumberedItems(body) };
    }
  }
  if (sections.FEATURES) {
    const loc = splitLocales(sections.FEATURES);
    for (const [lang, text] of Object.entries(loc)) {
      const { title, body } = parseTitleBody(text);
      result.features[lang] = { title, items: parseNumberedItems(body) };
    }
  }
  if (sections.SEO_TEXT) {
    const loc = splitLocales(sections.SEO_TEXT);
    for (const [lang, text] of Object.entries(loc)) {
      const { title, body } = parseTitleBody(text);
      result.seoText[lang] = { title, body };
    }
  }
  if (sections.STEPS) {
    const loc = splitLocales(sections.STEPS);
    for (const [lang, text] of Object.entries(loc)) {
      const { title, body } = parseTitleBody(text);
      result.steps[lang] = { title, items: parseNumberedItems(body) };
    }
  }
  if (sections.FAQ) {
    const loc = splitLocales(sections.FAQ);
    for (const [lang, text] of Object.entries(loc)) {
      const { title, body } = parseTitleBody(text);
      result.faq[lang] = { title, items: parseNumberedItems(body) };
    }
  }
  result.related = sections.RELATED || null;
  result.ctaRaw = sections.CTA || null;

  return result;
}

module.exports = { parseTaggedContent };
