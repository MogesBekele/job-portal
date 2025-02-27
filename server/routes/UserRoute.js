import express from 'express';
import { applyForJob, getUserData, getUserJobApplications, updateUserResume } from '../controller/UserController.js';
import upload from '../config/Multer.js';


const router = express.Router();

//get user data
router.get('/user', getUserData);

//apply for a job
router.post('/apply', applyForJob);

//get user applied applications
router.get('/applications', getUserJobApplications);

//update user profile
router.post('/update=resume', upload.single('resume'), updateUserResume);

export default router;