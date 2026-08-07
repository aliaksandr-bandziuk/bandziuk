const fs = require("fs");
const path = require("path");

const DIR = process.argv[2];
const singlepages = JSON.parse(fs.readFileSync(path.join(DIR, "audit-singlepages.json"), "utf8"));
const blogs = JSON.parse(fs.readFileSync(path.join(DIR, "audit-blogs.json"), "utf8"));
const portfolio = JSON.parse(fs.readFileSync(path.join(DIR, "audit-portfolio.json"), "utf8"));
const i18n = JSON.parse(fs.readFileSync(path.join(DIR, "audit-i18n.json"), "utf8"));
const hubGroups = JSON.parse(fs.readFileSync(path.join(DIR, "audit-hub-groups.json"), "utf8"));

const spById = new Map(singlepages.map((s) => [s._id, s]));

// Build EN-anchored families via translation.metadata (documentId is usually the EN id).
const familyByAnyId = new Map();
for (const meta of i18n) {
  const ids = { en: null, pl: null, ru: null };
  for (const t of meta.translations || []) ids[t._key] = t.id;
  if (!ids.en && meta.documentId) ids.en = meta.documentId;
  for (const id of Object.values(ids)) if (id) familyByAnyId.set(id, ids);
}

// Some singlepages might not have translation.metadata (true orphREADME?) -- catch those too.
const allSpIds = new Set(singlepages.map((s) => s._id));
const familiesSeen = new Set();
const families = [];
for (const sp of singlepages) {
  const fam = familyByAnyId.get(sp._id) || { en: sp.language === "en" ? sp._id : null, pl: sp.language === "pl" ? sp._id : null, ru: sp.language === "ru" ? sp._id : null };
  const famKey = JSON.stringify([fam.en, fam.pl, fam.ru]);
  if (familiesSeen.has(famKey)) continue;
  familiesSeen.add(famKey);
  families.push(fam);
}

// Inbound link tallies keyed by singlepage _id.
const inboundServiceOffered = new Map(); // spId -> count
const inboundRelatedArticles = new Map();
const inboundBodyLinksFromBlogs = new Map(); // spId -> [{from, href}]
const inboundBodyLinksFromPages = new Map();
const inboundRelatedServicesBlock = new Map(); // from other singlepages' relatedServicesBlock (approx via hub only, computed below)

function bump(map, id, val) { map.set(id, (map.get(id) || (Array.isArray(val) ? [] : 0))); if (Array.isArray(val)) map.get(id).push(...val); else map.set(id, map.get(id) + 1); }

for (const b of blogs) {
  for (const ref of b.serviceOffered) bump(inboundServiceOffered, ref, 1);
  for (const ref of b.relatedArticles) if (allSpIds.has(ref)) bump(inboundRelatedArticles, ref, 1);
}

// slug -> singlepage map per language for href matching
const slugMap = {}; // `${lang}:${slug}` -> spId  (also parent/slug nested form)
for (const sp of singlepages) {
  if (!sp.slug) continue;
  slugMap[`${sp.language}:${sp.slug}`] = sp._id;
  if (sp.parentSlug) slugMap[`${sp.language}:${sp.parentSlug}/${sp.slug}`] = sp._id;
}
function resolveHref(href, lang) {
  if (!href) return null;
  const clean = href.replace(/^https?:\/\/[^/]+/, "").split("?")[0];
  const parts = clean.split("/").filter(Boolean);
  // strip locale prefix
  let rest = parts;
  if (rest[0] === "pl" || rest[0] === "ru") { lang = rest[0]; rest = rest.slice(1); }
  const flat = rest[rest.length - 1];
  const nested = rest.slice(-2).join("/");
  return slugMap[`${lang}:${nested}`] || slugMap[`${lang}:${flat}`] || null;
}

for (const b of blogs) {
  for (const href of b.outboundLinks) {
    const target = resolveHref(href, b.language);
    if (target) {
      if (!inboundBodyLinksFromBlogs.has(target)) inboundBodyLinksFromBlogs.set(target, []);
      inboundBodyLinksFromBlogs.get(target).push({ from: b._id, href });
    }
  }
}
for (const sp of singlepages) {
  for (const href of sp.outboundLinks) {
    const target = resolveHref(href, sp.language);
    if (target && target !== sp._id) {
      if (!inboundBodyLinksFromPages.has(target)) inboundBodyLinksFromPages.set(target, []);
      inboundBodyLinksFromPages.get(target).push({ from: sp._id, href });
    }
  }
}

// hub-group membership per family (en id is canonical key when possible)
const hubMembership = new Map(); // spId -> {lang, groupTitle}
for (const [lang, data] of Object.entries(hubGroups)) {
  for (const g of data.groups) {
    for (const id of g.itemIds) hubMembership.set(id, { lang, groupTitle: g.title });
  }
}

const rows = families.map((fam) => {
  const anyId = fam.en || fam.pl || fam.ru;
  const en = fam.en && spById.get(fam.en);
  const pl = fam.pl && spById.get(fam.pl);
  const ru = fam.ru && spById.get(fam.ru);
  const rep = en || pl || ru;
  const missing = ["en", "pl", "ru"].filter((l) => !fam[l]);
  const hub = {
    en: fam.en && hubMembership.get(fam.en),
    pl: fam.pl && hubMembership.get(fam.pl),
    ru: fam.ru && hubMembership.get(fam.ru),
  };
  const inbound = (id) => ({
    serviceOffered: id ? (inboundServiceOffered.get(id) || 0) : 0,
    relatedArticles: id ? (inboundRelatedArticles.get(id) || 0) : 0,
    bodyFromBlogs: id ? (inboundBodyLinksFromBlogs.get(id) || []).length : 0,
    bodyFromPages: id ? (inboundBodyLinksFromPages.get(id) || []).length : 0,
  });
  return {
    pageType: rep.pageType,
    titleEn: en && en.title,
    titlePl: pl && pl.title,
    titleRu: ru && ru.title,
    ids: fam,
    missingLocales: missing,
    slugs: { en: en && en.slug, pl: pl && pl.slug, ru: ru && ru.slug },
    parentSlug: { en: en && en.parentSlug, pl: pl && pl.parentSlug, ru: ru && ru.parentSlug },
    wordCount: { en: en && en.wordCount, pl: pl && pl.wordCount, ru: ru && ru.wordCount },
    blockTypes: { en: en && en.blockTypes, pl: pl && pl.blockTypes, ru: ru && ru.blockTypes },
    hubGroup: { en: hub.en && hub.en.groupTitle, pl: hub.pl && hub.pl.groupTitle, ru: hub.ru && hub.ru.groupTitle },
    onHub: !!(hub.en || hub.pl || hub.ru),
    inbound: { en: inbound(fam.en), pl: inbound(fam.pl), ru: inbound(fam.ru) },
    updatedAt: { en: en && en.updatedAt, pl: pl && pl.updatedAt, ru: ru && ru.updatedAt },
    createdAt: { en: en && en.createdAt },
  };
});

// Separate services (pageType=="service") from landing/other pages, keep servicesIndex separate.
const services = rows.filter((r) => r.pageType === "service");
const landings = rows.filter((r) => r.pageType === "page" && r.parentSlug.en && ["services", "oferty", "uslugi"].includes((r.parentSlug.en || "").split("/")[0]));
const hubDocs = rows.filter((r) => r.pageType === "servicesIndex");

fs.writeFileSync(path.join(DIR, "audit-report.json"), JSON.stringify({ services, landings, hubDocs, allRowsCount: rows.length }, null, 1));
console.log(`Total families: ${rows.length}`);
console.log(`pageType=="service": ${services.length}`);
console.log(`pageType=="page" under services/oferty/uslugi: ${landings.length}`);
console.log(`pageType=="servicesIndex": ${hubDocs.length}`);
console.log(`\nWrote audit-report.json`);
