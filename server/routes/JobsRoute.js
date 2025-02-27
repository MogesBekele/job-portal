import express from 'express'
import { getJobById, getJobs } from '../controller/JobController.js'

const router = express.Router()

// all jobs data
router.get('/', getJobs)

// route to get a single job by id

router.get('/:id', getJobById)

export default router
//       token: generateToken(company._id),