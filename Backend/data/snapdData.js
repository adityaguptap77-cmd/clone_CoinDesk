const SnapdContent = require('../models/SnapdContent')

async function getSnapdData() {
  const content = await SnapdContent.findOne({ slug: 'homepage' }).lean()

  if (!content) {
    throw new Error('Snapd homepage content has not been seeded')
  }

  return content
}

module.exports = { getSnapdData }
