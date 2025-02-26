//register a new company

import Company from "../models/Company.js";
import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";

export const registerCompany = async (req, res) => {
  const { name, email, password } = req.body;
  const imageFile = req.file;

  if (!name || !email || !password || !imageFile) {
    return res.json({success: false, message: "All fields are required"});
  }

  try {
    const companyExist = await Company.findOne({email});
    if (companyExist) {
      return res.json({success: false, message: "Company already exists"});
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const imageUpload = await cloudinary.uploader.upload(imageFile.path);

    const company = await Company.create({
      name,
      email,
      password: hashedPassword,
      image: imageUpload.secure_url,
    });

    return res.json({success: true,
      company:{
        name: company.name,
        email: company.email,
        image: company.image,
      },
    
    });

  } catch (error) {
    return res.json({success: false, message: error.message});
    
  }




};

//company login

export const loginCompany = async (req, res) => {};

//get company data

export const getCompanyData = async (req, res) => {};

//post job

export const postJob = async (req, res) => {};

//get all job applicants

export const getCompanyJobApplicants = async (req, res) => {};

//get company posted job

export const getCompanyPostedJobs = async (req, res) => {};

//chang job status

export const changeJobApplicationStatus = async (req, res) => {};

//change visibility of job

export const changeVisibility = async (req, res) => {};
