import express from 'express'
import mongoose from 'mongoose'

const router = express.Router()
const Example = mongoose.model("Example")

router.get("/", (req, res, next) => {
  const ex = Example({name: "Example"})
  return res.json(ex)
})

export default router
