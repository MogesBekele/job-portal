import User from "../models/User.js";
import JobApplication from "../models/JobApplication.js";
import Job from "../models/Job.js";


// get user data

export const getUserData = async (req, res) => {
  const userId = req.auth.userId;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }

    res.json({
      success: true,
      user: user,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

//apply for a job

export const applyForJob = async (req, res) => {
 
  const { jobId } = req.body;
  const userId = req.auth.userId;

  try {

    const isAlreadyApplied = await JobApplication.findOne({userId, jobId})

    if(isAlreadyApplied.length>0){
      return res.json({
        success: false,
        message: "You have already applied for this job"
      })
    }
  const jobData = await Job.findById(jobId);
  if (!jobData) {
    return res.json({
      success: false,
      message: "Job not found",
    });

  }

  await JobApplication.create({
    userId,
    companyId: jobData.companyId,
    jobId,
    date: Date.now(),
  });
  
    
  } catch (error) {
    
    res.json({
      success: false,
      message: error.message,
    });
  }


};

//get user applied applications

export const getUserJobApplications = async (req, res) => {};

//update user profile

export const updateUserResume = async (req, res) => {};
