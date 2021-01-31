const express = require("express"),
      bunyan = require('bunyan'),
      compression = require('compression'),
      axios = require('axios'),
      bodyParser = require('body-parser'),
      log = bunyan.createLogger({name: "myapp"}),
      path = require('path')

const app = express()
app.use(compression())
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '..', 'public')))
const isProduction = process.env.NODE_ENV === 'production'

// Define routes here

const server = app.listen(process.env.PORT || 3000, () => {
  log.info(`🔥 Listening on port ${server.address().port}`)
})
