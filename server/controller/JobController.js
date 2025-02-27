
// get all jobs
export const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find({ visible: true })
      .populate("companyId", "name image")
      .sort({ date: -1 });

    return res.json({ success: true, jobs });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

// get single job

export const getJob = async (req, res) => {
  const { id } = req.params;

  try {
    const job = await Job.findById(id).populate("companyId", "name image");

    return res.json({ success: true, job });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
}