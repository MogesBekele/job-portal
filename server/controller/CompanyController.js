//register a new company

export const registerCompany = async (req, res) => {
  const { name, email, password } = req.body;
  const imageFile = req.file;

  if (!name || !email || !password || !imageFile) {
    return res.json({success: false, message: "All fields are required"});
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
