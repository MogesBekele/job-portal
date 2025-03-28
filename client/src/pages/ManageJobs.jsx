import React, { useContext, useEffect, useState } from "react";
import { manageJobsData } from "../assets/assets";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import Loading from "../components/Loading";

const ManageJobs = () => {
  const navigate = useNavigate();

  const [jobs, setJobs] = useState(false);
  const { backEndUrl, companyToken } = useContext(AppContext);

  //fetch company jobs

  const fetchCompanyJobs = async () => {
    try {
      const { data } = await axios.get(backEndUrl + "/api/company/list-jobs", {
        headers: { token: companyToken },
      });

      if (data.success) {
        setJobs(data.jobsData.reverse());
        console.log(data.jobsData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  //to change visibility

  const changeJobVisibility = async (id) => {
    try {
      const { data } = await axios.post(
        backEndUrl + "/api/company/change-visibility",
        { id },
        { headers: { token: companyToken } }
      );

      if (data.success) {
        toast.success(data.message);
        fetchCompanyJobs();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (companyToken) {
      fetchCompanyJobs();
    }
  }, [companyToken]);

  return jobs ? (
    jobs.length === 0 ? (
      <div className="fle items-center justify-center h-[70vh]">
        <p className="text-xl sm:text-2xl">No Jobs Available</p>
      </div>
    ) : (
      <div className="container p-4 max-w-5xl">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 max-sm:text-sm">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b text-left max-sm:hidden">
                  #
                </th>
                <th className="px-4 py-2 border-b text-left">Job Title</th>
                <th className="px-4 py-2 border-b text-left max-sm:hidden">
                  Date
                </th>
                <th className="px-4 py-2 border-b text-left max-sm:hidden">
                  Location
                </th>
                <th className="px-4 py-2 border-b text-center">Applicants</th>
                <th className="px-4 py-2 border-b text-left">Visible</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, index) => (
                <tr key={index} className="text-gray-700">
                  <td className="py-2 px-4 border-b max-sm:hidden">
                    {index + 1}
                  </td>
                  <td className="py-2 px-4 border-b">{job.title}</td>
                  <td className="py-2 px-4 border-b max-sm:hidden">
                    {moment(job.date).format("ll")}
                  </td>
                  <td className="py-2 px-4 border-b max-sm:hidden">
                    {job.location}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {job.applicants}
                  </td>
                  <td className="py-2 px-4 border-b">
                    <input
                      onChange={() => changeJobVisibility(job_id)}
                      className="scale-125 ml-4"
                      type="checkbox"
                      checked={job.visible}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex justify-end">
          <button
            onClick={() => navigate("/dashboard/add-job")}
            className="bg-black text-white py-2 px-4 rounded cursor-pointer"
          >
            Add new Job
          </button>
        </div>
      </div>
    )
  ) : (
    <Loading />
  );
};

export default ManageJobs;

// manage jobs from the database and persist them to the database 
// moment package is used 
// usenavigate package is used to navigate
// toastify package is used to display toast messages
