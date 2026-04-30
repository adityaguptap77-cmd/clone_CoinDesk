const path = require('node:path')
const { pathToFileURL } = require('node:url')
const SnapdContent = require('../models/SnapdContent')

const dataUrl = pathToFileURL(path.resolve(__dirname, '../../src/api/coindeskData.js')).href

async function loadFallbackData() {
  return import(dataUrl)
}

async function seedSnapdContent() {
  const existingContent = await SnapdContent.findOne({ slug: 'homepage' }).lean()

  if (existingContent) {
    return
  }

  const fallbackData = await loadFallbackData()
  await SnapdContent.create({
    slug: 'homepage',
    ...fallbackData,
  })
  console.log('Seeded Snapd homepage content')
}

module.exports = { seedSnapdContent }
