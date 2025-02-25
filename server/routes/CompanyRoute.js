import express from 'express';
import { registerCompany } from '../controllers/CompanyController.js';
import { loginCompany } from '../controllers/CompanyController.js';



const router = express.Router();


//Register a company

router.post('/register, registerCompany');

//Login a company

router.post('/login', loginCompany);

//Get company data

router.get('/company', getCompanyData);

//post job

router.post('/post-job', postJob);

//get all job applicants

router.get('/applicants', getCompanyJobApplicants);