import express from 'express';
import bunyan from 'bunyan'
import bodyParser from 'body-parser'
import path from 'path'
import compression from 'compression'
import routes from './routes'

const log = bunyan.createLogger({name: "express-template"})

const app = express()

app.use(compression())
app.use(bodyParser.json())
app.use(express.static(path.join(path.resolve(), 'public')))

app.use(routes)

const isProduction = process.env.NODE_ENV === 'production'

if (isProduction) {
  // connect to production services
} else {
  // connect to localhost services
}

// Prevent leaking stack traces to user.
app.use((err, req, res, next) => {
  log.error(err)
  res.status(err.status || 500)
  res.json({'errors': {
    message: err.message
  }})
})

const server = app.listen(process.env.PORT || 3000, () => {
  log.info(`🔥 Listening on port ${server.address().port}`)
})
