import Job from "../models/Job.js";
// get all jobs
export const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find({ visible: true })
      .populate({path: "companyId", select: '-password'})
      .sort({ date: -1 });

    return res.json({ success: true, jobs });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

// get single job

export const getJobById = async (req, res) => {
  const { id } = req.params;

  try {
    const job = await Job.findById(id)
      .populate({path: "companyId", select: '-password'});

    if (!job) {
      return res.json({ success: false, message: "Job not found" });
    }

    return res.json({ success: true, job });



  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
}