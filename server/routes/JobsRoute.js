import express from 'express'

const router = express.Router()

// all jobs data
router.get('/', (req, res) => {
  res.send('All jobs data')
}

// route to get a single job by id

export default router
