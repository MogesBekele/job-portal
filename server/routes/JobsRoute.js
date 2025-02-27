import express from 'express'
import { getJobs } from '../controller/JobController'

const router = express.Router()

// all jobs data
router.get('/', getJobs)

// route to get a single job by id

router.get('/:id', getJob)

export default router
