const cors = require('cors')
const express = require('express')
const { connectDB } = require('./config/db')
const { seedSnapdContent } = require('./data/seedSnapdContent')
const apiRoutes = require('./routes/apiRoutes')

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())
app.use(express.json())
app.use('/api', apiRoutes)

app.get('/health', (_request, response) => {
  response.json({ status: 'ok' })
})

app.use((_request, response) => {
  response.status(404).json({ message: 'Not found' })
})

app.use((error, _request, response, _next) => {
  void _next
  console.error(error)
  response.status(500).json({ message: 'Internal server error' })
})

async function startServer() {
  await connectDB()
  await seedSnapdContent()

  app.listen(PORT, () => {
    console.log(`Snapd backend listening on http://localhost:${PORT}`)
  })
}

startServer().catch((error) => {
  console.error('Failed to start backend', error)
  process.exit(1)
})
