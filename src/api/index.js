import express from 'express'
import users from './users'

const apiRouter = express.Router()
apiRouter.use('/users', users)
// Define other routes here

const topLevelRouter = express.Router()
topLevelRouter.use('/api', apiRouter)
export default topLevelRouter
