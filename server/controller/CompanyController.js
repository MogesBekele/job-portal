//register a new company

import Company from "../models/Company.js";
import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import generateToken from "../utilis/GenerateToken.js";
import Job from "../models/Job.js";
import JobApplication from "../models/JobApplication.js";

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
    // salt and hash password 
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
   // cloudinary to image upload
    const imageUpload = await cloudinary.uploader.upload(imageFile.path);

    const company = await Company.create({
      name,
      email,
      password: hashedPassword,
      image: imageUpload.secure_url
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

export const getCompanyData = async (req, res) => {
  try {
    const company = req.company;

    return res.json({
      success: true,
      company,
    });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

//post job

export const postJob = async (req, res) => {
  const { title, description, location, salary, level, category } = req.body;
  const companyId = req.company._id;

  console.log(companyId, { title, description, location, salary });

  try {
    const newJob = await Job.create({
      companyId,
      title,
      description,
      location,
      salary,
      date: Date.now(),
      level,
      category,
    });

    await newJob.save();

    return res.json({
      success: true,
      message: "Job posted successfully",
      newJob,
    });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

//get all job applicants

export const getCompanyJobApplicants = async (req, res) => {
  try {
    const companyId = req.company._id;
    const applications = await JobApplication.find({ companyId })
      .populate("userId", "Nmae image resume")
      .populate("jobId", "title location category level salary")
      .exec();

    return res.json({
      success: true,
      applications,
    });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};
//get company posted job

export const getCompanyPostedJobs = async (req, res) => {
  try {
    const companyId = req.company._id;
    const jobs = await Job.find({ companyId });

    const jobsData = await Promise.all(
      jobs.map(async (job) => {
        const applicants = await JobApplication.find({ jobId: job._id });

        return {
          ...job.toObject(),
          applicants: applicants.length,
        };
      })
    );

    return res.json({
      success: true,
      jobs,
    });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

//chang job status

export const changeJobApplicationStatus = async (req, res) => {
  try {
    const { id, status } = req.body;

    //find job application and update status

    await JobApplication.findOneAndUpdate({ _id: id }, { status: status });

    return res.json({
      success: true,
      message: "Job application status updated",
    });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

//change visibility of job

export const changeVisibility = async (req, res) => {
  try {
    const { id } = req.body;
    const companyId = req.company._id;

    const job = await Job.findById(id);

    if (companyId.toString() === job.companyId.toString()) {
      job.visible = !job.visible;
    }
    await job.save();

    return res.json({
      success: true,
      message: "Job visibility changed",
      job,
    });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};
