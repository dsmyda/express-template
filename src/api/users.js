import express from 'express'

const router = express.Router()

router.get("/", (req, res, next) => {
  return res.json({
    msg: "Example API"
  })
})

export default router
