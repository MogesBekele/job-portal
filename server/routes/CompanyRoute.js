import express from 'express';

import {
  registerCompany,
  loginCompany,
  getCompanyData,
  postJob,
  getCompanyJobApplicants,
  getCompanyPostedJobs,
  changeJobApplicationStatus,
  changeVisibility
} from '../controller/CompanyController.js';
import upload from '../config/Multer.js';
import { protectCompany } from '../middleware/AuthMiddleware.js';

const router = express.Router();



//Register a company

router.post('/register', upload.single('image'), registerCompany);

//Login a company

router.post('/login', loginCompany);

//Get company data

router.get('/company', protectCompany,  getCompanyData);

//post job

router.post('/post-job', protectCompany, postJob);

//get all job applicants

router.get('/applicants', getCompanyJobApplicants);

// get company posted jobs list

router.get('/list-jobs', protectCompany, protectCompany, getCompanyPostedJobs);

//change job application status

router.post('/change-status', protectCompany, changeJobApplicationStatus);

//change visibility of job

router.post('/change-visibility', protectCompany, changeVisibility);

export default router;

