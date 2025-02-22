import React from "react";
import { manageJobsData } from "../assets/assets";
import moment from "moment";

const ManageJobs = () => {
  return (
    <div className="container p-4 max-w-5xl">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 max-sm:text-sm">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b text-left max-sm:hidden">#</th>
              <th className="px-4 py-2 border-b text-left">Job Title</th>
              <th className="px-4 py-2 border-b text-left max-sm:hidden">Date</th>
              <th className="px-4 py-2 border-b text-left max-sm:hidden">Location</th>
              <th className="px-4 py-2 border-b text-center">Applicants</th>
              <th className="px-4 py-2 border-b text-left">Visible</th>
            </tr>
          </thead>
          <tbody>
            {manageJobsData.map((job, index) => (
              <tr key={index} className="text-gray-700">
                <td className="py-2 px-4 border-b">{index + 1}</td>
                <td>{job.title}</td>
                <td>{moment(job.date).format("ll")}</td>
                <td>{job.location}</td>
                <td>{job.applicants}</td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageJobs;
