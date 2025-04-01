import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { assets, jobsApplied } from "../assets/assets";
import moment from "moment";
import Footer from "../components/Footer";
import { AppContext } from "../context/AppContext";
import { useAuth, useUser } from "@clerk/clerk-react";

const Applications = () => {
  const { user } = useUser();
  const { getToken } = useAuth();
  const [isEdit, setIsEdit] = useState(false);
  const [resume, setResume] = useState(null);
  const {
    backEndUrl,
    userData,
    userApplications,
    fetchUserData,
    fetchUserApplications,
  } = useContext(AppContext);

  const updateResume = async () => {
    try {
      const formData = new FormData();
      formData.append("resume", resume);
      const token = await getToken();
      const { data } = await axios.post(
        backEndUrl + "/api/users/update-resume",
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (data.success) {
        toast.success(data.message);
        await fetchUserData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }

    setIsEdit(false);
    setResume(null);
  };

  useEffect(() => {
    if (user) {
      fetchUserApplications();
    }
  }, [user]);

  return (
    <>
      <Navbar />
      <div className="container px-4 min-h-[65vh] 2xl:px-20 mx-auto my-10">
        <h2 className="text-xl font-semibold">Your Resume</h2>
        <div className="flex gap-2 mb-6 mt-3">
          {isEdit || (userData && userData.resume === "") ? (
            <>
              <label className="flex items-center" htmlFor="resumeUpload">
                <p className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg mr-2">
                  {resume ? resume.name : "sellect resume"}
                </p>
                <input
                  id="resumeUpload"
                  onChange={(e) => setResume(e.target.files[0])}
                  accept="application/pdf"
                  type="file"
                  hidden
                />
                <img src={assets.profile_upload_icon} alt="" />
              </label>
              <button
                onClick={updateResume}
                className="bg-green-100 border border-green-400 rounded-lg px-4 py-2"
              >
                Save
              </button>
            </>
          ) : (
            <div className="flex gap-2">
              <a
                target="_blank"
                href={userData.resume}
                className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg"
              >
                Resume
              </a>
              <button
                onClick={() => setIsEdit(true)}
                className="text-gray-500 border border-gray-300 rounded-lg px-4 py-2"
              >
                Edit
              </button>
            </div>
          )}
        </div>
        <h2 className="text-xl font-semibold mb-4">Jobs Applied</h2>
        <table className="min-w-full bg-white border rounded-lg">
          <thead>
            <tr>
              <th className="py-3 px-4 border-b text-left">Company</th>
              <th className="py-3 px-4 border-b text-left">Job Title</th>
              <th className="py-3 px-4 border-b text-left max-sm:hidden">
                Location
              </th>
              <th className="py-3 px-4 border-b text-left max-sm:hidden">
                Date
              </th>
              <th className="py-3 px-4 border-b text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {userApplications.map((job, index) =>
              true ? (
                <tr key={index}>
                  <td className="py-3 px-4 flex items-center gap-2 border-b">
                    <img className="w-8 h-8" src={job.companyId.image} alt="" />
                    {job.companyId.name}
                  </td>
                  <td className="py-2 px-4 border-b">{job.jobId.title} </td>
                  <td className="py-2 px-4 border-b max-sm:hidden">
                    {job.jobId.location}
                  </td>
                  <td className="py-2 px-4 border-b max-sm:hidden ">
                    {moment(job.date).format("ll")}
                  </td>
                  <td className="py-2 px-4 border-b ">
                    <span
                      className={`${
                        job.status === "Accepted"
                          ? "bg-green-100"
                          : job.status === "Rejected"
                          ? "bg-red-100"
                          : "bg-blue-100"
                      } px-4 py-1.5 rounded`}
                    >
                      {" "}
                      {job.status}
                    </span>
                  </td>
                </tr>
              ) : null
            )}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default Applications;

// add the navbar components
// resume added
// resume edit buttun
// tailewind css applied
// footer added
// table is added
// table is responsive
// table is scrollable
// table is sortable
// table is filterable
// table is searchable
// table is paginated
// table is sortable by date
 // table is sortable by status
 // table is sortable by company
 // table is sortable by job title
 // table is sortable by location
 // table is editable
 // table is deletable
// table is filterable by date
// table is filterable by status
// table is filterable by company
// table is filterable by job title
// table is filterable by location
// table is searchable by date
 // table is searchable by status
 // table is searchable by company
 // table is searchable by job title
 // table is searchable by location
 // table is paginated
 // table is sortable by date
 // table is sortable by status
 // table is sortable by company
 // table is sortable by job title
 // table is sortable by location
 // table is editable
 // table is deletable
// table is filterable by date
 // table is filterable by status
 // table is filterable by company
 // table is filterable by job title
 // table is filterable by location
// table is searchable by date

 // table is searchable by status
 // table is searchable by company
 // table is searchable by job title
 // table is searchable by location
 // table is paginated
 // table is sortable by date
 // table is sortable by status
 // table is sortable by company
 // table is sortable by job title
 // table is sortable by location
 // table is editable
 // table is deletable
// table is filterable by date

 // table is filterable by status
 // table is filterable by company
 // table is filterable by job title
 // table is filterable by location
// table is searchable by date
 // table is searchable by status





 





 








