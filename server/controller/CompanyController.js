//register a new company

import Company from "../models/Company.js";
import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import generateToken from "../utilis/GenerateToken.js";

export const registerCompany = async (req, res) => {
  const { name, email, password } = req.body;
  const imageFile = req.file;

  if (!name || !email || !password || !imageFile) {
    return res.json({ success: false, message: "All fields are required" });
  }

  try {
    const companyExist = await Company.findOne({ email });
    if (companyExist) {
      return res.json({ success: false, message: "Company already exists" });
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

    return res.json({
      success: true,
      company: {
        name: company.name,
        email: company.email,
        image: company.image,
      },
      token: generateToken(company._id),
    });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

//company login

export const loginCompany = async (req, res) => {
  const { email, password } = req.body;

  try {
    const company = await Company.findOne({ email });

    if (!company) {
      return res.json({ success: false, message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, company.password);

    if (isMatch) {
      return res.json({
        success: true,
        company: {
          _id: company._id,
          name: company.name,
          email: company.email,
          image: company.image,
        },
        token: generateToken(company._id),
      });
    } else {
      return res.json({ success: false, message: "Invalid email or password" });
    }
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

//get company data

export const getCompanyData = async (req, res) => {};

//post job

export const postJob = async (req, res) => {

  const { title, description, location, salary} = req.body;
  const companyId = req.company._id;

  console.log(companyId, { title, description, location, salary});

  try {
    
    const newJob = await Job.create({
      company: companyId,
      title,
      description,
      location,
      salary
    });

    await newJob.save()

    return res.json({
      success: true,
      message: "Job posted successfully",
     newJob
    });
  } catch (error) {
    
  }

};

//get all job applicants

export const getCompanyJobApplicants = async (req, res) => {};

//get company posted job

export const getCompanyPostedJobs = async (req, res) => {};

//chang job status

export const changeJobApplicationStatus = async (req, res) => {};

//change visibility of job

export const changeVisibility = async (req, res) => {};
