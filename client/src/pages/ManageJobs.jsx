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
              <th className="px-4 py-2 border-b text-left">#</th>
              <th className="px-4 py-2 border-b text-left">Job Title</th>
              <th className="px-4 py-2 border-b text-left">Date</th>
              <th className="px-4 py-2 border-b text-left">Location</th>
              <th className="px-4 py-2 border-b text-center">Applicants</th>
              <th className="px-4 py-2 border-b text-left">Visible</th>
            </tr>
          </thead>
          <tbody>
            {manageJobsData.map((job, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
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
