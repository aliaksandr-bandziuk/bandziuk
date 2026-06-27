// scripts/importSinglepage.cjs
// Usage:
//   node scripts/importSinglepage.cjs            — import
//   node scripts/importSinglepage.cjs --dry-run  — validate + preview, no writes
//
// CSV file: scripts/singlepages.csv

const path = require('path')
const fs = require('fs')
const { createClient } = require('@sanity/client')
const { parse } = require('csv-parse/sync')
require('dotenv').config({ path: path.resolve(__dirname, '../.env.local') })

// ─── Sanity client ────────────────────────────────────────────────────────────

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2025-08-04',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

// ─── Config ───────────────────────────────────────────────────────────────────

const LOCALES = ['en', 'pl', 'ru']
const CSV_PATH = path.resolve(__dirname, 'singlepages.csv')
const DRY_RUN = process.argv.includes('--dry-run')

// ─── Utilities ────────────────────────────────────────────────────────────────

let _counter = 0
function key(prefix = 'k') {
  // Counter + timestamp guarantees uniqueness within a single run.
  return `${prefix}-${++_counter}-${Date.now()}`
}

// Converts a plain text string (possibly multi-line) into a Sanity
// PortableText array — matches the `contentBlock` array type used in
// accordionBlock.answer.
function textToPortableText(text = '') {
  return text
    .split(/\r?\n/)
    .map(l => l.trim())
    .filter(Boolean)
    .map(l => ({
      _key: key('pt'),
      _type: 'block',
      style: 'normal',
      markDefs: [],
      children: [{ _key: key('span'), _type: 'span', text: l, marks: [] }],
    }))
}

// ─── Block builders ───────────────────────────────────────────────────────────
// Each builder returns the block object or null if the row has no data for it.
// Null entries are filtered out before writing to Sanity.

function buildBenefitsBlock(row, lang) {
  const benefits = [1, 2, 3, 4].map(i => {
    const title = row[`benefit${i}_title_${lang}`]
    if (!title) return null
    return {
      _key: key('benefit'),
      // Schema typo preserved: conuntNumber (not countNumber)
      counting: {
        conuntNumber: row[`benefit${i}_num`] ? Number(row[`benefit${i}_num`]) : undefined,
        sign: row[`benefit${i}_sign`] || '',
      },
      title,
      description: row[`benefit${i}_desc_${lang}`] || '',
    }
  }).filter(Boolean)

  if (!benefits.length) return null

  return {
    _key: key('benefitsBlock'),
    _type: 'benefitsBlock',
    title: row[`pain_title_${lang}`] || '',
    benefits,
  }
}

function buildGridBlock(row, lang) {
  const items = [1, 2, 3, 4, 5, 6].map(i => {
    const title = row[`feature${i}_title_${lang}`]
    if (!title) return null
    return {
      _key: key('feature'),
      title,
      description: row[`feature${i}_desc_${lang}`] || '',
    }
  }).filter(Boolean)

  if (!items.length) return null

  return {
    _key: key('gridBlock'),
    _type: 'gridBlock',
    title: row[`features_title_${lang}`] || '',
    items,
  }
}

function buildStepsBlock(row, lang) {
  const steps = [1, 2, 3, 4, 5, 6].map(i => {
    const title = row[`step${i}_title_${lang}`]
    if (!title) return null
    return {
      _key: key('step'),
      stepNumber: i,
      title,
      description: row[`step${i}_desc_${lang}`] || '',
    }
  }).filter(Boolean)

  if (!steps.length) return null

  return {
    _key: key('stepsBlock'),
    _type: 'stepsBlock',
    title: row[`steps_title_${lang}`] || '',
    steps,
  }
}

function buildFaqBlock(row, lang) {
  const items = [1, 2, 3, 4, 5, 6, 7, 8].map(i => {
    const question = row[`faq${i}_q_${lang}`]
    if (!question) return null
    return {
      _key: key('faqItem'),
      question,
      answer: textToPortableText(row[`faq${i}_a_${lang}`] || ''),
    }
  }).filter(Boolean)

  if (!items.length) return null

  return {
    _key: key('faqBlock'),
    _type: 'faqBlock',
    title: row[`faq_title_${lang}`] || '',
    faq: { _type: 'accordionBlock', items },
  }
}

function buildLandingCtaBlock(row, lang) {
  const title = row[`cta_title_${lang}`]
  if (!title) return null
  return { _key: key('ctaBlock'), _type: 'landingCtaBlock', title }
}

function buildWorkProcessBlock(row, lang) {
  const title = row[`process_title_${lang}`]
  if (!title) return null
  return { _key: key('workProcess'), _type: 'workProcessBlock', title }
}

function buildRelatedServicesBlock(row, lang, singlepageMap) {
  const rawSlugs = (row['related_slugs'] || '').trim()
  if (!rawSlugs) return null

  const slugs = rawSlugs.split(',').map(s => s.trim()).filter(Boolean)
  const items = slugs.map(slug => {
    const baseId = singlepageMap[slug]
    if (!baseId) {
      console.warn(`    ⚠️  related_slugs: "${slug}" not found in Sanity — item skipped`)
      return null
    }
    const ref = lang === 'en' ? baseId : `${baseId}.${lang}`
    return { _key: key('rel'), _type: 'reference', _ref: ref }
  }).filter(Boolean)

  if (!items.length) return null

  return {
    _key: key('relatedBlock'),
    _type: 'relatedServicesBlock',
    title: row[`related_title_${lang}`] || '',
    items,
  }
}

// ─── Template registry ────────────────────────────────────────────────────────
// To add a new template: add a key to TEMPLATES with defaultPageType and
// buildBlocks(row, lang, ctx). No other code needs to change.

const TEMPLATES = {
  landing: {
    defaultPageType: 'page',
    buildBlocks(row, lang, ctx) {
      return [
        buildBenefitsBlock(row, lang),
        buildGridBlock(row, lang),
        buildStepsBlock(row, lang),
        buildFaqBlock(row, lang),
        buildLandingCtaBlock(row, lang),
      ].filter(Boolean)
    },
  },

  service: {
    defaultPageType: 'service',
    buildBlocks(row, lang, ctx) {
      return [
        buildBenefitsBlock(row, lang),
        buildGridBlock(row, lang),
        buildWorkProcessBlock(row, lang),
        buildFaqBlock(row, lang),
        buildRelatedServicesBlock(row, lang, ctx.singlepageMap),
      ].filter(Boolean)
    },
  },
}

// ─── Validation ───────────────────────────────────────────────────────────────
// Runs entirely before any doc is created for a row.
// Returns an array of error strings — empty array means valid.

function validateRow(row, n) {
  const errors = []

  // id
  if (!row.id) {
    errors.push('id missing')
  } else if (!/^[a-z0-9-]+$/.test(row.id)) {
    errors.push(`id "${row.id}" must be lowercase-kebab-case (a-z, 0-9, hyphens only)`)
  }

  // template
  if (!row.template) {
    errors.push('template missing')
  } else if (!TEMPLATES[row.template]) {
    errors.push(`template "${row.template}" unknown — must be one of: ${Object.keys(TEMPLATES).join(', ')}`)
  }

  // Required per-locale fields (noindex guard + completeness)
  for (const lang of LOCALES) {
    if (!row[`slug_${lang}`])            errors.push(`slug_${lang} missing`)
    if (!row[`title_${lang}`])           errors.push(`title_${lang} missing`)
    if (!row[`metaTitle_${lang}`])       errors.push(`metaTitle_${lang} missing`)
    if (!row[`metaDescription_${lang}`]) errors.push(`metaDescription_${lang} missing`)
  }

  // slug_en format
  if (row.slug_en && !/^[a-z0-9-]+$/.test(row.slug_en)) {
    errors.push(`slug_en "${row.slug_en}" must be lowercase-kebab-case, no slashes — use parent_slug for nesting`)
  }

  // FAQ pair integrity: question ↔ answer must both be present, across all locales
  for (let i = 1; i <= 8; i++) {
    for (const lang of LOCALES) {
      const q = row[`faq${i}_q_${lang}`]
      const a = row[`faq${i}_a_${lang}`]
      if (q && !a) errors.push(`faq${i}_a_${lang} missing (question without answer)`)
      if (!q && a) errors.push(`faq${i}_q_${lang} missing (answer without question)`)
    }
    // If step N is present in EN, it must be present in PL + RU
    if (row[`faq${i}_q_en`]) {
      for (const lang of ['pl', 'ru']) {
        if (!row[`faq${i}_q_${lang}`]) errors.push(`faq${i}_q_${lang} missing (EN has it, ${lang} does not)`)
      }
    }
  }

  // Step translation integrity
  for (let i = 1; i <= 6; i++) {
    if (row[`step${i}_title_en`]) {
      for (const lang of ['pl', 'ru']) {
        if (!row[`step${i}_title_${lang}`]) {
          errors.push(`step${i}_title_${lang} missing (EN has it, ${lang} does not)`)
        }
      }
    }
  }

  // Feature translation integrity (warn only — descriptions are optional)
  for (let i = 1; i <= 6; i++) {
    if (row[`feature${i}_title_en`]) {
      for (const lang of ['pl', 'ru']) {
        if (!row[`feature${i}_title_${lang}`]) {
          errors.push(`feature${i}_title_${lang} missing (EN has it, ${lang} does not)`)
        }
      }
    }
  }

  return errors
}

// ─── Existence check ──────────────────────────────────────────────────────────
// Queries Sanity for all four IDs (en, pl, ru, i18n) and returns a Set of
// which ones already exist.

async function checkExistence(baseId) {
  const ids = [baseId, `${baseId}.pl`, `${baseId}.ru`, `${baseId}.i18n`]
  const found = await client.fetch(`*[_id in $ids]._id`, { ids })
  return new Set(found)
}

// ─── Doc builder ──────────────────────────────────────────────────────────────

function buildDoc(row, lang, baseId, template, ctx) {
  const docId = lang === 'en' ? baseId : `${baseId}.${lang}`

  const doc = {
    _id: docId,
    _type: 'singlepage',
    language: lang,
    title: row[`title_${lang}`],
    excerpt: row[`excerpt_${lang}`] || '',
    allowIntroBlock: true,
    pageType: row.pageType || template.defaultPageType,
    // All three locale slugs go into every locale document — this is how
    // the localizedSlug type works in this codebase.
    slug: {
      _type: 'localizedSlug',
      en: { _type: 'slug', current: row.slug_en },
      pl: { _type: 'slug', current: row.slug_pl },
      ru: { _type: 'slug', current: row.slug_ru },
    },
    seo: {
      metaTitle: row[`metaTitle_${lang}`],
      metaDescription: row[`metaDescription_${lang}`],
    },
    contentBlocks: template.buildBlocks(row, lang, ctx),
  }

  // parentPage reference (same-locale doc)
  if (row.parent_slug) {
    const parentBaseId = ctx.singlepageMap[row.parent_slug]
    if (parentBaseId) {
      const parentRef = lang === 'en' ? parentBaseId : `${parentBaseId}.${lang}`
      doc.parentPage = { _type: 'reference', _ref: parentRef }
    } else {
      console.warn(`    ⚠️  parent_slug "${row.parent_slug}" not found in Sanity — parentPage not set`)
    }
  }

  return doc
}

// ─── Rollback ─────────────────────────────────────────────────────────────────
// Deletes each ID in createdIds. Returns an array of IDs that failed to delete
// (requires manual cleanup in Sanity Studio).

async function rollback(createdIds) {
  const failed = []
  for (const id of createdIds) {
    try {
      await client.delete(id)
      console.log(`    🔁 Rolled back ${id}`)
    } catch (err) {
      console.error(`    ⚠️  Rollback failed for ${id}: ${err.message}`)
      failed.push(id)
    }
  }
  return failed
}

// ─── Import one row ───────────────────────────────────────────────────────────

async function importRow(row, n, ctx) {
  // 1. Validate
  const errors = validateRow(row, n)
  if (errors.length) {
    console.error(`❌ Row ${n} [${row.id || '?'}] INVALID — skipping entirely:`)
    errors.forEach(e => console.error(`    • ${e}`))
    return 'invalid'
  }

  const template = TEMPLATES[row.template]
  const baseId = `singlepage-${row.id}`
  const allFour = [baseId, `${baseId}.pl`, `${baseId}.ru`, `${baseId}.i18n`]

  // 2. Existence check
  const existing = await checkExistence(baseId)

  if (existing.size > 0) {
    const allPresent = allFour.every(id => existing.has(id))
    if (allPresent) {
      console.log(`⏭  Row ${n} [${row.id}] SKIP: already fully imported`)
      return 'skipped'
    }
    // Partial state — rollback must have failed on a previous run
    const present = allFour.filter(id => existing.has(id))
    const missing = allFour.filter(id => !existing.has(id))
    console.warn(`⚠️  Row ${n} [${row.id}] PARTIAL STATE — skipping:`)
    console.warn(`    Present : ${present.join(', ')}`)
    console.warn(`    Missing : ${missing.join(', ')}`)
    console.warn(`    Fix     : delete the present IDs in Sanity Studio, then re-run`)
    console.warn(`    GROQ    : *[_id in [${present.map(id => `"${id}"`).join(',')}]]`)
    return 'partial'
  }

  // 3. Dry-run: report without writing
  if (DRY_RUN) {
    const blocksEn = template.buildBlocks(row, 'en', ctx)
    const blockTypes = blocksEn.map(b => b._type).join(' → ')
    console.log(`🔍 Row ${n} [${row.id}] WOULD CREATE (template: ${row.template}):`)
    console.log(`    Docs  : ${allFour.slice(0, 3).join(', ')}`)
    console.log(`    Blocks: ${blockTypes || '(none)'}`)
    if (row.parent_slug) {
      const found = ctx.singlepageMap[row.parent_slug]
      console.log(`    Parent: ${row.parent_slug} [${found ? `✓ ${found}` : '✗ NOT FOUND — parentPage will be skipped'}]`)
    }
    return 'would-create'
  }

  // 4. Create EN, PL, RU docs + translation.metadata
  const createdIds = []
  try {
    for (const lang of LOCALES) {
      const doc = buildDoc(row, lang, baseId, template, ctx)
      await client.create(doc)
      createdIds.push(doc._id)
      console.log(`  ✅ Created ${doc._id}`)
    }

    // Translation link — created last so its absence marks an incomplete import
    const metaDoc = {
      _id: `${baseId}.i18n`,
      _type: 'translation.metadata',
      documentId: baseId,
      translations: LOCALES.map(lang => ({
        _key: lang,
        value: { _type: 'reference', _ref: lang === 'en' ? baseId : `${baseId}.${lang}` },
      })),
    }
    await client.create(metaDoc)
    createdIds.push(metaDoc._id)
    console.log(`  🔗 Linked ${metaDoc._id}`)

    return 'created'
  } catch (err) {
    console.error(`❌ Row ${n} [${row.id}] FAILED: ${err.message}`)
    if (createdIds.length) {
      console.log(`  🔁 Rolling back ${createdIds.length} doc(s)...`)
      const rollbackFailed = await rollback(createdIds)
      if (rollbackFailed.length) {
        console.error(`  ❗ Rollback incomplete — delete these IDs manually:`)
        console.error(`     ${rollbackFailed.join(', ')}`)
        console.error(`     GROQ: *[_id in [${rollbackFailed.map(id => `"${id}"`).join(',')}]]`)
      }
    }
    return 'failed'
  }
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function run() {
  if (DRY_RUN) {
    console.log('🔍 DRY-RUN — validates CSV and shows what would be created. No writes.\n')
  } else {
    console.log('🚀 IMPORT MODE\n')
  }

  // Guard
  if (!fs.existsSync(CSV_PATH)) {
    console.error(`❌ CSV not found: ${CSV_PATH}`)
    console.error('   Create scripts/singlepages.csv and re-run.')
    process.exit(1)
  }

  // Pre-load all EN singlepages for slug → _id lookups
  // (used for parent_slug and related_slugs resolution)
  console.log('📡 Loading existing singlepage docs from Sanity...')
  const allSinglepages = await client.fetch(
    `*[_type == "singlepage" && language == "en"]{ _id, "slug": slug.en.current }`
  )
  const singlepageMap = {}  // slug_en → baseId
  allSinglepages.forEach(({ _id, slug }) => {
    if (slug) singlepageMap[slug] = _id
  })
  console.log(`   Found ${allSinglepages.length} EN singlepage docs\n`)

  const ctx = { singlepageMap }

  // Read CSV
  const csv = fs.readFileSync(CSV_PATH, 'utf8')
  const rows = parse(csv, { columns: true, skip_empty_lines: true, trim: true })
  console.log(`📄 ${rows.length} row(s) in CSV\n`)

  const summary = { created: 0, skipped: 0, invalid: 0, failed: 0, partial: 0, 'would-create': 0 }

  for (let i = 0; i < rows.length; i++) {
    const status = await importRow(rows[i], i + 1, ctx)
    summary[status] = (summary[status] || 0) + 1
  }

  console.log('\n─────────────────────────────────')
  if (DRY_RUN) {
    console.log(`  Would create : ${summary['would-create']}`)
  } else {
    console.log(`  Created      : ${summary.created}`)
    console.log(`  Failed       : ${summary.failed}  ${summary.failed ? '← check logs above' : ''}`)
  }
  console.log(`  Skipped      : ${summary.skipped}  (already imported)`)
  console.log(`  Partial      : ${summary.partial}  ${summary.partial ? '← manual cleanup needed, see logs' : ''}`)
  console.log(`  Invalid      : ${summary.invalid}  ${summary.invalid ? '← fix CSV, re-run' : ''}`)
  console.log('─────────────────────────────────')
}

run().catch(err => {
  console.error('❌ Fatal:', err.message)
  process.exit(1)
})
