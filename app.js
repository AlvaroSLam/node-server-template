require('dotenv/config')
const express =  require('express')
const app =  express()

const serverRoutes =  require('./routes/server.routes')
app.use('/api', serverRoutes)

module.exports =  app