import express from 'express'
import exampleApi from './example'

const apiRouter = express.Router()
apiRouter.use('/examples', exampleApi)
// Define other routes here

const topLevelRouter = express.Router()
topLevelRouter.use('/api', apiRouter)
export default topLevelRouter
