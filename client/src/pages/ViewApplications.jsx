import React, { useContext } from "react";
import { assets, viewApplicationsPageData } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Loading from "../components/Loading";

const ViewApplications = () => {
  const { backEndUrl, companyToken } = useContext(AppContext);
  const [applicants, setApplicants] = useState(false);

  //function to fetch company job application data

  const fetchCompanyApplications = async () => {
    try {
      const { data } = await axios.get(backEndUrl + "/api/company/applicants", {
        headers: { token: companyToken },
      });
      if (data.success) {
        setApplicants(data.applications.reverse());
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  //function to update job application ststus

  const changeJobApplicationStatus = async (id, status) => {
    try {
      const { data } = await axios.post(
        backEndUrl + "/api/company/change-status",
        { id, status },
        { headers: { token: companyToken } }
      );
      if (data.success) {
        fetchCompanyApplications();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  //fetch company job application data on component mount

  useEffect(() => {
    if (companyToken) {
      fetchCompanyApplications();
    }
  }, [companyToken]);

  return applicants ? (
    applicants.length === 0 ? (
      <div className="fle items-center justify-center h-[70vh]">
        <p className="text-xl sm:text-2xl">No Applications Available</p>
      </div>
    ) : (
      <div className="container mx-auto p-4">
        <div>
          <table className="w-full max-w-4xl bg-white border-gray-200 max-sm:text-sm">
            <thead>
              <tr className="border-b">
                <th className="py-2 px-4 text-left">#</th>
                <th className="py-2 px-4 text-left">User name</th>
                <th className="py-2 px-4 text-left max-sm:hidden">Job Title</th>
                <th className="py-2 px-4 text-left max-sm:hidden">Location</th>
                <th className="py-2 px-4 text-left">Resume</th>
                <th className="py-2 px-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {applicants
                .filter((item) => item.jobId && item.userId)
                .map((applicant, index) => (
                  <tr key={index} className="text-gray-700">
                    <td className="py-2 px-4 border-b text-center">
                      {index + 1}
                    </td>
                    <td className="py-2 px-4 border-b text-center flex items-center">
                      <img
                        className="w-10 h-10 rounded-full mr-3 max-sm:hidden"
                        src={applicant.userId.image}
                        alt=""
                      />
                      <span>{applicant.userId.name}</span>
                    </td>
                    <td className="py-2 px-4 border-b max-sm:hidden">
                      {applicant.jobId.title}
                    </td>
                    <td className="py-2 px-4 border-b max-sm:hidden">
                      {applicant.jobId.location}
                    </td>
                    <td className="p-2 px-4 border-b">
                      <a
                        href={applicant.userId.resume}
                        target="_blank"
                        className="bg-blue-50 px-3 py-1 rounded inline-flex gap-2 items-center"
                      >
                        Resume <img src={assets.resume_download_icon} alt="" />
                      </a>
                    </td>
                    <td className="py-2 px-4 border-b relative">
                      {applicant.status === "Pending" ? (
                        <div className="relative inline-block text-left group">
                          <button className="text-gray-500 action-button">
                            ...
                          </button>

                          <div className="z-10 hidden absolute right-0 mt-2 w-32 md:left-0 top-0 bg-white border border-gray-200 rounded shadow group-hover:block">
                            <button
                              onClick={() =>
                                changeJobApplicationStatus(
                                  applicant._id,
                                  "Accepted"
                                )
                              }
                              className="block w-full text-left px-4 py-2 text-blue-500 hover:bg-gray-100"
                            >
                              Accept
                            </button>
                            <button
                              onClick={() =>
                                changeJobApplicationStatus(
                                  applicant._id,
                                  "Rejected"
                                )
                              }
                              className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
                            >
                              Reject
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div>{applicant.status}</div>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  ) : (
    <Loading />
  );
};

export default ViewApplications;

// viewapplication component created
// toast is used for error handling
// tailwind css is applied
// this component is used to display the applicatioon view application
// imported from asset section
// the data is imported from asset section 

