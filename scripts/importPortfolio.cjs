// scripts/importPortfolio.cjs

// 1) Зависимости и окружение
const path = require('path')
const fs = require('fs')
const { createClient } = require('@sanity/client')
const { parse } = require('csv-parse/sync')
require('dotenv').config({ path: path.resolve(__dirname, '../.env.local') })

// 2) Инициализация клиента Sanity
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2025-08-04',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

// 3) Константы
const CSV_PATH = path.resolve(__dirname, 'portfolio.csv')
const LOCAL_IMG_DIR = path.resolve(__dirname, 'images')
const LANGUAGES = ['en', 'pl', 'ru']
const DEFAULT_LANG = 'en'

// 4) Текст → PortableText-блоки
function textToPortableText(text = '') {
  return text
    .split(/\r?\n/)
    .map((l, i) => l.trim()).filter(Boolean)
    .map((l, i) => ({
      _key: `pt-${i}-${Date.now()}`,
      _type: 'block',
      style: 'normal',
      markDefs: [],
      children: [{
        _key: `span-${i}-${Date.now()}`,
        _type: 'span',
        text: l,
        marks: []
      }]
    }))
}

// 5) Предзагрузка локальных изображений
async function preloadLocalImages() {
  const map = {}
  if (!fs.existsSync(LOCAL_IMG_DIR)) return map
  for (const file of fs.readdirSync(LOCAL_IMG_DIR).filter(f => /\.(jpe?g|png|webp)$/i.test(f))) {
    const full = path.join(LOCAL_IMG_DIR, file)
    try {
      const { _id } = await client.assets.upload('image', fs.createReadStream(full), { filename: file })
      map[file] = _id
      console.log(`🖼 Preloaded ${file} → ${_id}`)
    } catch (err) {
      console.error(`⚠️ Failed to preload ${file}: ${err.message}`)
    }
  }
  return map
}

// 6) Загрузка изображений (URL или локальный через map)
async function uploadImage(src, localMap) {
  if (!src) return null
  src = src.trim()
  const base = path.basename(src)
  if (localMap[base]) return localMap[base]
  if (/^https?:\/\//.test(src)) {
    const res = await fetch(src)
    if (!res.ok) throw new Error(res.statusText)
    const buf = Buffer.from(await res.arrayBuffer())
    const filename = path.basename(new URL(src).pathname)
    const { _id } = await client.assets.upload('image', buf, { filename })
    return _id
  }
  const abs = path.resolve(__dirname, src)
  if (!fs.existsSync(abs)) throw new Error(`File not found: ${abs}`)
  const { _id } = await client.assets.upload('image', fs.createReadStream(abs), { filename: path.basename(abs) })
  return _id
}

// 7) Главная функция
async function run() {
  // 7.1) Предзагрузка сервисов и технологий в карту
  const allServices = await client.fetch(`*[_type=="service"]{_id, language, slug, title}`)
  const serviceMap = {}
  allServices.forEach(svc => {
    const lang = svc.language
    const slug = svc.slug?.[lang]?.current
    if (slug) serviceMap[`${lang}:${slug}`] = svc._id
    if (svc.title) serviceMap[`${lang}:${svc.title}`] = svc._id
  })

  const allTech = await client.fetch(`*[_type=="technology"]{_id, language, slug, title}`)
  const techMap = {}
  allTech.forEach(tech => {
    const lang = tech.language
    const slug = tech.slug?.[lang]?.current
    if (slug) techMap[`${lang}:${slug}`] = tech._id
    if (tech.title) techMap[`${lang}:${tech.title}`] = tech._id
  })

  // 7.2) Предзагрузка локальных изображений
  const localMap = await preloadLocalImages()

  // 7.3) Чтение CSV
  const csv = fs.readFileSync(CSV_PATH, 'utf8')
  const rows = parse(csv, { columns: true, skip_empty_lines: true })

  for (const row of rows) {
    const baseId = `portfolio-${row.id}`
    const metaRefs = []

    for (const lang of LANGUAGES) {
      const docId = lang === DEFAULT_LANG ? baseId : `${baseId}.${lang}`

      // — previewImage
      let previewRef = null
      if (row.previewImage_path) {
        try { previewRef = await uploadImage(row.previewImage_path, localMap) }
        catch (e) { console.error(`⚠️ Preview failed: ${e.message}`) }
      }

      // — screenshots
      const screenshots = []
      for (let i = 1; i <= 5; i++) {
        const imgPath = row[`screenshots_${i}_imagePath`]
        if (!imgPath) continue
        let imgRef = null
        try { imgRef = await uploadImage(imgPath, localMap) }
        catch (e) { console.error(`⚠️ Screenshot ${i} failed`); continue }
        screenshots.push({
          _key: `shot-${lang}-${i}-${Date.now()}`,
          _type: 'object',
          title: row[`screenshots_${i}_title_${lang}`] || '',
          image: { _type: 'image', asset: { _ref: imgRef }, alt: row[`screenshots_${i}_alt_${lang}`] || '' },
          caption: row[`screenshots_${i}_caption_${lang}`]
            ? textToPortableText(row[`screenshots_${i}_caption_${lang}`])
            : undefined
        })
      }

      // — keyFeatures
      const rawSvc = (row[`keyFeatures_service_${lang}`] || row[`keyFeatures_serviceId_${lang}`] || '').trim()
      let svcRef = /^[0-9a-fA-F-]{36}$/.test(rawSvc)
        ? rawSvc
        : serviceMap[`${lang}:${rawSvc}`]
      if (!svcRef && rawSvc) console.warn(`⚠️ Service not found: "${rawSvc}" (${lang})`)
      const keyFeatures = {
        clientName: row.keyFeatures_clientName || '',
        industry: row.keyFeatures_industry || '',
        ...(svcRef && { service: { _type: 'reference', _ref: svcRef } }),
        website: (() => {
          if (row.keyFeatures_website_type === 'link') {
            return {
              _type: 'website', type: 'link',
              linkLabel: row.keyFeatures_website_linkLabel || '',
              linkDestination: row.keyFeatures_website_linkDestination || ''
            }
          }
          return { _type: 'website', type: 'text', text: row.keyFeatures_website_text || '' }
        })()
      }

      // — technologiesUsed
      const rawTechList = (row[`technologiesUsed_${lang}`] || row[`technologiesUsed_ids_${lang}`] || '')
        .split(',').map(s => s.trim()).filter(Boolean)
      const technologiesUsed = rawTechList.map((ident, i) => {
        let tRef = /^[0-9a-fA-F-]{36}$/.test(ident)
          ? ident
          : techMap[`${lang}:${ident}`]
        if (!tRef) console.warn(`⚠️ Tech not found: "${ident}" (${lang})`)
        return tRef
          ? { _key: `tech-${lang}-${row.id}-${i}-${Date.now()}`, _type: 'reference', _ref: tRef }
          : null
      }).filter(Boolean)

      // — mainContent: разделяем один CSV-поле по специальному «$» внутри ячейки
      const rawMain = row[`mainContent_${lang}`] || ''
      const parts = rawMain.split('$').map(s => s.trim()).filter(Boolean)
      const mainContent = parts.map((block, i) => ({
        _key: `tc-${lang}-${row.id}-${i}-${Date.now()}`,
        _type: 'textContent',
        content: textToPortableText(block)
      }))

      // — собираем документ
      const doc = {
        _id: docId,
        _type: 'portfolio',
        __i18n_lang: lang,
        __i18n_base: baseId,
        language: lang,
        title: row[`title_${lang}`] || '',
        fullTitle: row[`fullTitle_${lang}`] || '',
        excerpt: row[`excerpt_${lang}`] || '',
        publishedAt: row.publishedAt,
        seo: {
          metaTitle: row[`seo_metaTitle_${lang}`] || '',
          metaDescription: row[`seo_metaDescription_${lang}`] || ''
        },
        slug: {
          _type: 'localizedSlug',
          [lang]: { _type: 'slug', current: row[`slug_${lang}`] || '' }
        },
        keyFeatures,
        ...(previewRef && {
          previewImage: { _type: 'image', asset: { _ref: previewRef }, alt: row.previewImage_alt || '' }
        }),
        challenges: {
          _type: 'challenge',
          problem: textToPortableText(row[`challenges_problem_${lang}`] || ''),
          task: textToPortableText(row[`challenges_task_${lang}`] || ''),
          results: textToPortableText(row[`challenges_results_${lang}`] || ''),
          workDone: textToPortableText(row[`challenges_workDone_${lang}`] || '')
        },
        screenshots,
        technologiesUsed,
        mainContent
      }

      // — публикуем
      try {
        await client.createOrReplace(doc)
        console.log(`✅ Imported ${docId}`)
      } catch (err) {
        console.error(`❌ Error ${docId}:`, err.message)
      }
      metaRefs.push({ _key: lang, value: { _type: 'reference', _ref: docId } })
    }

    // — translation.metadata
    const metaDoc = {
      _id: `${baseId}.i18n`,
      _type: 'translation.metadata',
      documentId: baseId,
      translations: metaRefs
    }
    try {
      await client.createOrReplace(metaDoc)
      console.log(`🔗 Metadata created: ${metaDoc._id}`)
    } catch (err) {
      console.error(`❌ Metadata error ${metaDoc._id}:`, err.message)
    }
  }
}

// 8) Запуск
run().catch(err => {
  console.error('❌ Fatal:', err.message)
  process.exit(1)
})
