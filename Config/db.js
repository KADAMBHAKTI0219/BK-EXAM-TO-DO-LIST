const mongoose = require('mongoose')
require('dotenv').config()
const connectionToDB = mongoose.connect(process.env.MongoDB_URL)
module.exports = connectionToDB