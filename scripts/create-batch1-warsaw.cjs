const fs = require("fs");
const path = require("path");
const { createClient } = require("@sanity/client");
const { mdToPortableText, key } = require("./md-to-portabletext-links.cjs");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local") });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const SERVICES_HUB = { en: "4de72361-ec2a-469d-8b56-813ddbf3adca", pl: "631d883e-6f87-4346-9c6d-48b596c2daa7", ru: "3774c0a1-8857-4149-be24-9a357af4be00" };

const HEAD = {
  salon: { pl: "6d8ed7b1-9fac-49b9-b25f-632f52e94ae3", ru: "79ec90f6-dd97-4c3d-8378-83a4512cc676" },
  auto: { pl: "55f6003b-f543-4591-8bea-d1a327144c73", ru: "4238514d-8c66-4766-8b78-71675a466b7a" },
  law: { pl: "1c9c94f6-3eb3-4f2a-8e8e-7e7ce88ce196", ru: "84798707-8328-4ca5-ad3f-6e4f17c95664" },
};
const WARSAW_DEV = { pl: "singlepage-web-development-warsaw.pl", ru: "singlepage-web-development-warsaw.ru" };
const FELGILAB = { pl: "3f848cef-12c8-466f-8f9f-57f8537e89b6", ru: "e593f097-9f05-48b4-a0ea-6254c19d36af" };
const ART_LEGAL_COST = { pl: "blog-legal-seo-cost.pl", ru: "blog-legal-seo-cost.ru" };
const ART_HIGH_VALUE = { pl: "blog-high-value-clients-search.pl", ru: "blog-high-value-clients-search.ru" };

function ref(id) { return { _type: "reference", _ref: id }; }
function benefitsBlock(title, items) {
  return { _key: key(), _type: "benefitsBlock", title, benefits: items.map(([t, d]) => ({ _key: key(), title: t, description: d })) };
}
function gridBlock(title, items) {
  return { _key: key(), _type: "gridBlock", title, items: items.map(([t, d]) => ({ _key: key(), title: t, description: d })) };
}
function stepsBlock(title, items) {
  return { _key: key(), _type: "stepsBlock", title, steps: items.map(([t, d], i) => ({ _key: key(), stepNumber: i + 1, title: t, description: d })) };
}
function faqBlock(title, items) {
  return {
    _key: key(),
    _type: "faqBlock",
    faq: {
      _type: "accordionBlock",
      title,
      items: items.map(([q, a]) => ({
        _key: key(),
        question: q,
        answer: [{ _key: key(), _type: "block", style: "normal", markDefs: [], children: [{ _key: key(), _type: "span", marks: [], text: a }] }],
      })),
    },
  };
}
// Wraps `phrase` (must appear exactly once, verbatim) inside a plain
// single-span block (as built by faqBlock's answer) with a link to `href`.
function linkifyBlock(blockArray, phrase, href) {
  const block = blockArray[0];
  const span = block.children[0];
  const idx = span.text.indexOf(phrase);
  if (idx === -1) throw new Error(`linkifyBlock: phrase not found: "${phrase}"`);
  if (span.text.indexOf(phrase, idx + 1) !== -1) throw new Error(`linkifyBlock: phrase not unique: "${phrase}"`);
  const defKey = key();
  const before = span.text.slice(0, idx);
  const linked = phrase;
  const after = span.text.slice(idx + phrase.length);
  const children = [];
  if (before) children.push({ _key: key(), _type: "span", marks: [], text: before });
  children.push({ _key: key(), _type: "span", marks: [defKey], text: linked });
  if (after) children.push({ _key: key(), _type: "span", marks: [], text: after });
  return [{ ...block, markDefs: [{ _key: defKey, _type: "link", href }], children }];
}
function textContent(seoTitle, bodyMd, linkMap) {
  const blocks = [
    { _key: key(), _type: "block", style: "h2", markDefs: [], children: [{ _key: key(), _type: "span", marks: [], text: seoTitle }] },
    ...mdToPortableText(bodyMd, linkMap),
  ];
  return { _key: key(), _type: "textContent", content: blocks, textAlign: "left" };
}

function buildDoc({ id, lang, title, slug, metaTitle, metaDescription, excerpt, parentId, areaServed, banner, altText, pain, features, seoTitle, seoBody, seoLinks, steps, faq }) {
  return {
    _id: id,
    _type: "singlepage",
    language: lang,
    pageType: "service",
    title,
    slug: { _type: "localizedSlug", [lang]: { _type: "slug", current: slug } },
    seo: { metaTitle, metaDescription },
    excerpt,
    areaServed,
    parentPage: ref(parentId),
    previewImage: { _type: "image", asset: ref(banner), alt: altText },
    allowIntroBlock: true,
    contentBlocks: [
      benefitsBlock(pain.title, pain.items),
      gridBlock(features.title, features.items),
      textContent(seoTitle, seoBody, seoLinks),
      stepsBlock(steps.title, steps.items),
      faqBlock(faq.title, faq.items),
    ],
  };
}

async function uploadImage(file) {
  const asset = await client.assets.upload("image", fs.createReadStream(path.resolve(__dirname, "../drafts", file)), { filename: file });
  return asset._id;
}

module.exports = {
  client, ref, key, SERVICES_HUB,
  benefitsBlock, gridBlock, stepsBlock, faqBlock, textContent, buildDoc, uploadImage, linkifyBlock,
};
