const mongoose = require('mongoose')

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/snapd'

async function connectDB() {
  await mongoose.connect(MONGODB_URI)
  console.log(`MongoDB connected: ${mongoose.connection.name}`)
}

module.exports = { connectDB, MONGODB_URI }
