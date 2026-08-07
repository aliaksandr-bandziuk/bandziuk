const fs = require("fs");
const path = require("path");
const DIR = process.argv[2];
const sp = JSON.parse(fs.readFileSync(path.join(DIR, "audit-singlepages.json"), "utf8"));
const blogs = JSON.parse(fs.readFileSync(path.join(DIR, "audit-blogs.json"), "utf8"));
const hub = JSON.parse(fs.readFileSync(path.join(DIR, "audit-hub-groups.json"), "utf8"));
const i18n = JSON.parse(fs.readFileSync(path.join(DIR, "audit-i18n.json"), "utf8"));

const byId = new Map(sp.map(d => [d._id, d]));
const allSpIds = new Set(sp.map(d => d._id));

// family grouping via translation.metadata
const famByAnyId = new Map();
for (const meta of i18n) {
  const ids = { en: null, pl: null, ru: null };
  for (const t of meta.translations || []) ids[t._key] = t.id;
  if (!ids.en && meta.documentId) ids.en = meta.documentId;
  for (const id of Object.values(ids)) if (id) famByAnyId.set(id, ids);
}
function famFor(id) {
  const d = byId.get(id);
  if (!d) return null;
  return famByAnyId.get(id) || { en: d.language==="en"?id:null, pl: d.language==="pl"?id:null, ru: d.language==="ru"?id:null };
}

// hub group membership by family (use EN id as key when possible, else first available)
const groupByFamKey = new Map(); // famKey -> groupTitleEn
const allHubItemIdsAnyLocale = new Set();
for (const [lang, data] of Object.entries(hub)) {
  for (const g of data.groups) for (const id of g.itemIds) allHubItemIdsAnyLocale.add(id);
}
// map en group titles specifically (for readability), keyed by family
for (const g of hub.en.groups) {
  for (const id of g.itemIds) {
    const fam = famFor(id);
    if (!fam) continue;
    const key = fam.en || fam.pl || fam.ru;
    groupByFamKey.set(key, g.title);
  }
}

// inbound tallies (service offered / related articles / body links) same as before
function resolveHref(href, lang, slugMap) {
  if (!href) return null;
  const clean = href.replace(/^https?:\/\/[^/]+/, "").split("?")[0];
  let parts = clean.split("/").filter(Boolean);
  if (parts[0] === "pl" || parts[0] === "ru") { lang = parts[0]; parts = parts.slice(1); }
  const flat = parts[parts.length - 1];
  const nested = parts.slice(-2).join("/");
  return slugMap[`${lang}:${nested}`] || slugMap[`${lang}:${flat}`] || null;
}
const slugMap = {};
for (const d of sp) {
  if (!d.slug) continue;
  slugMap[`${d.language}:${d.slug}`] = d._id;
  if (d.parentSlug) slugMap[`${d.language}:${d.parentSlug}/${d.slug}`] = d._id;
}
const inboundServiceOffered = new Map();
const inboundRelatedArticles = new Map();
const inboundBodyFromBlogs = new Map();
const inboundBodyFromPages = new Map();
for (const b of blogs) {
  for (const ref of b.serviceOffered) inboundServiceOffered.set(ref, (inboundServiceOffered.get(ref)||0)+1);
  for (const ref of b.relatedArticles) if (allSpIds.has(ref)) inboundRelatedArticles.set(ref, (inboundRelatedArticles.get(ref)||0)+1);
  for (const href of b.outboundLinks) {
    const t = resolveHref(href, b.language, slugMap);
    if (t) inboundBodyFromBlogs.set(t, (inboundBodyFromBlogs.get(t)||0)+1);
  }
}
for (const d of sp) {
  for (const href of d.outboundLinks) {
    const t = resolveHref(href, d.language, slugMap);
    if (t && t !== d._id) inboundBodyFromPages.set(t, (inboundBodyFromPages.get(t)||0)+1);
  }
}

// Build unique families for: (a) pageType=="service", (b) any doc referenced in a hub group (landing pages)
const relevantIds = new Set();
sp.filter(d => d.pageType === "service").forEach(d => relevantIds.add(d._id));
allHubItemIdsAnyLocale.forEach(id => relevantIds.add(id));

const famKeysSeen = new Set();
const rows = [];
for (const id of relevantIds) {
  const fam = famFor(id);
  if (!fam) continue;
  const key = JSON.stringify(fam);
  if (famKeysSeen.has(key)) continue;
  famKeysSeen.add(key);
  const en = fam.en && byId.get(fam.en);
  const pl = fam.pl && byId.get(fam.pl);
  const ru = fam.ru && byId.get(fam.ru);
  const rep = en || pl || ru;
  const famKey = fam.en || fam.pl || fam.ru;
  const inb = (i) => i ? ({
    serviceOffered: inboundServiceOffered.get(i)||0,
    relatedArticles: inboundRelatedArticles.get(i)||0,
    bodyFromBlogs: inboundBodyFromBlogs.get(i)||0,
    bodyFromPages: inboundBodyFromPages.get(i)||0,
  }) : null;
  rows.push({
    pageType: rep.pageType,
    isService: rep.pageType === "service",
    title: { en: en&&en.title, pl: pl&&pl.title, ru: ru&&ru.title },
    slug: { en: en&&en.slug, pl: pl&&pl.slug, ru: ru&&ru.slug },
    missingLocales: ["en","pl","ru"].filter(l => !fam[l]),
    wordCount: { en: en&&en.wordCount, pl: pl&&pl.wordCount, ru: ru&&ru.wordCount },
    blockTypes: { en: en&&en.blockTypes },
    hubGroup: groupByFamKey.get(famKey) || null,
    inbound: { en: inb(fam.en), pl: inb(fam.pl), ru: inb(fam.ru) },
    updatedAt: { en: en&&en.updatedAt, pl: pl&&pl.updatedAt, ru: ru&&ru.updatedAt },
    ids: fam,
  });
}
rows.sort((a,b) => (a.isService===b.isService?0:a.isService?-1:1) || (a.title.en||"").localeCompare(b.title.en||""));

fs.writeFileSync(path.join(DIR, "audit-report2.json"), JSON.stringify(rows, null, 1));
console.log(`Total relevant page families: ${rows.length}`);
console.log(`  services: ${rows.filter(r=>r.isService).length}`);
console.log(`  landing pages: ${rows.filter(r=>!r.isService).length}`);
console.log(`Missing-locale rows:`, rows.filter(r=>r.missingLocales.length).map(r=>[r.title.en||r.title.pl||r.title.ru, r.missingLocales]));
