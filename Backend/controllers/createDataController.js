const { getSnapdData } = require('../data/snapdData')

function createDataController(key) {
  return async function dataController(_request, response, next) {
    try {
      const data = await getSnapdData()
      response.json(data[key])
    } catch (error) {
      next(error)
    }
  }
}

module.exports = createDataController
