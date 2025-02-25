import express from 'express';
import { registerCompany } from '../controllers/CompanyController.js';
const router = express.Router();


//Register a company

router.post('/register, registerCompany');

//Login a company

router.post('/login', loginCompany);