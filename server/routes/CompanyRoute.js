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

const router = express.Router();



//Register a company

router.post('/register', registerCompany);

//Login a company

router.post('/login', loginCompany);

//Get company data

router.get('/company', getCompanyData);

//post job

router.post('/post-job', postJob);

//get all job applicants

router.get('/applicants', getCompanyJobApplicants);

// get company posted jobs list

router.get('/list-jobs', getCompanyPostedJobs);

//change job application status

router.post('/change-status', changeJobApplicationStatus);

//change visibility of job

router.post('/change-visibility', changeVisibility);

export default router;

