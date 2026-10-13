// scripts/upload-llms-txt-article.cjs
//
// Puts the expanded llms.txt article into Sanity AS A DRAFT, so the live
// article keeps serving until the owner reviews and publishes.
//
// This is an expansion, not a rewrite: every passage and every figure of the
// existing text is carried over, and the new sections cover the intents that
// kept the page at position 23 — format, example, how to create, Next.js,
// WordPress, and the questions Google shows in its own "people also ask" box
// (drafts/llms-txt-article-plan.md).
//
// Markdown goes in, the blog schema's blocks come out: paragraphs, H2/H3,
// blockquote, bullets, tables and now ```fenced code``` → the codeBlock type
// added to contentBlock for this article.
//
// Usage:
//   node scripts/upload-llms-txt-article.cjs --dry-run
//   node scripts/upload-llms-txt-article.cjs

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { createClient } = require("@sanity/client");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local"), quiet: true });

const DRY = process.argv.includes("--dry-run");
const TO_PUBLISHED = process.argv.includes("--to-published");
const SOURCE = path.resolve(__dirname, "../drafts/blog-llms-txt-EN-v2.md");
const DOC_ID = "blog-llms-txt"; // resolved from the slug below if it differs

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const key = () => crypto.randomBytes(6).toString("hex");

function inline(text) {
  const spans = [];
  const markDefs = [];
  const re = /\*\*([^*]+)\*\*|`([^`]+)`|\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m;
  const push = (t, marks) => {
    if (t) spans.push({ _type: "span", _key: key(), text: t, marks: marks || [] });
  };
  while ((m = re.exec(text))) {
    push(text.slice(last, m.index));
    if (m[1] !== undefined) push(m[1], ["strong"]);
    else if (m[2] !== undefined) push(m[2], ["em"]); // no code mark in the schema
    else {
      const dk = key();
      markDefs.push({ _type: "link", _key: dk, href: m[4] });
      push(m[3], [dk]);
    }
    last = m.index + m[0].length;
  }
  push(text.slice(last));
  return {
    children: spans.length ? spans : [{ _type: "span", _key: key(), text: "", marks: [] }],
    markDefs,
  };
}

const block = (style, text, extra = {}) => {
  const { children, markDefs } = inline(text);
  return { _type: "block", _key: key(), style, children, markDefs, ...extra };
};

function parse(md) {
  const lines = md.split(/\r?\n/);
  const meta = {};
  let i = 0;
  for (; i < lines.length; i++) {
    const l = lines[i];
    if (l.startsWith("#") || l.trim() === "") continue;
    const m = l.match(/^(Title|Slug|Meta title|Meta description):\s*(.+)$/);
    if (m) {
      meta[m[1].toLowerCase().replace(" ", "_")] = m[2].trim();
      continue;
    }
    if (l.trim() === "---") {
      i++;
      break;
    }
  }
  return { meta, body: lines.slice(i).join("\n").trim() };
}

function toBlocks(body) {
  const out = [];
  let buf = [];
  const flush = () => {
    if (!buf.length) return;
    out.push({ _type: "textContent", _key: key(), content: buf, textAlign: "left" });
    buf = [];
  };

  const lines = body.split("\n");
  for (let i = 0; i < lines.length; i++) {
    const t = lines[i].trim();
    if (!t) continue;

    if (t.startsWith("```")) {
      const language = t.slice(3).trim() || "text";
      const code = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith("```")) code.push(lines[i]), i++;
      // Inside the portable text, not beside it. codeBlock is registered on
      // contentBlock (the rich-text array); the blog document's own
      // contentBlocks array does not allow it, so a code block pushed to the
      // top level is dropped silently by both Studio and the renderer — which
      // is exactly what the first upload did.
      buf.push({ _type: "codeBlock", _key: key(), language, code: code.join("\n") });
      continue;
    }

    if (t.startsWith("## ")) {
      buf.push(block("h2", t.slice(3).trim()));
      continue;
    }
    if (t.startsWith("### ")) {
      buf.push(block("h3", t.slice(4).trim()));
      continue;
    }
    if (t.startsWith("> ")) {
      buf.push(block("blockquote", t.slice(2).trim()));
      continue;
    }
    if (t.startsWith("- ")) {
      buf.push(block("normal", t.slice(2).trim(), { listItem: "bullet", level: 1 }));
      continue;
    }
    buf.push(block("normal", t));
  }
  flush();
  return out;
}

(async () => {
  const { meta, body } = parse(fs.readFileSync(SOURCE, "utf8"));
  const blocks = toBlocks(body);

  const existing = await client.fetch(
    "*[_type=='blog' && slug.en.current==$s][0]{_id,title,contentBlocks}",
    { s: meta.slug },
  );
  if (!existing) throw new Error(`No published article with slug ${meta.slug}`);

  const counts = blocks.reduce((a, b) => ((a[b._type] = (a[b._type] || 0) + 1), a), {});
  const words = body.split(/\s+/).filter(Boolean).length;
  console.log(`source   : ${path.basename(SOURCE)} (${words} words)`);
  console.log(`target   : ${existing._id} — ${existing.title}`);
  console.log(`blocks   : ${JSON.stringify(counts)}`);
  console.log(`headings : ${blocks.flatMap((b) => (b.content || []).filter((c) => c.style === "h2")).length} H2`);

  if (DRY) {
    console.log("\nDry run — nothing written.");
    return;
  }

  // Only the body and the titles change; author, category, images, related
  // articles and the slug stay exactly as published.
  if (TO_PUBLISHED) {
    // Repairs the live article in place. The normal path is a draft the owner
    // reviews; this exists because the first upload put the code blocks where
    // the schema does not allow them and the live page lost them.
    await client
      .patch(existing._id)
      .set({
        title: meta.title,
        seo: { metaTitle: meta.meta_title, metaDescription: meta.meta_description },
        excerpt: meta.meta_description,
        contentBlocks: blocks,
      })
      .commit();
    console.log(`Patched the published article ${existing._id}.`);
    return;
  }

  const draft = {
    ...(await client.fetch("*[_id==$id][0]", { id: existing._id })),
    _id: `drafts.${existing._id}`,
    title: meta.title,
    seo: { metaTitle: meta.meta_title, metaDescription: meta.meta_description },
    excerpt: meta.meta_description,
    contentBlocks: blocks,
  };
  delete draft._rev;

  await client.createOrReplace(draft);
  console.log(`\nWritten: drafts.${existing._id} — review in Studio, then Publish.`);
})().catch((e) => {
  console.error("\n" + (e.message || e));
  process.exitCode = 1;
});
