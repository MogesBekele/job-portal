import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { assets, JobCategories, JobLocations } from "../assets/assets";
import JobCard from "./JobCard";

const JobListing = () => {
  const { isSearched, searchFilter, setSearchFilter, jobs } = useContext(AppContext);
  const [showFilter, setShowFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  return (
    <div className="container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-8">
      <div className="w-full lg:w-1/4 bg-white px-4">
        {isSearched && (searchFilter.title !== "" || searchFilter.location !== "") && (
          <>
            <h3 className="font-medium text-lg mb-4">Current Search</h3>
            <div className="mb-4 text-gray-600">
              {searchFilter.title && (
                <span className="inline-flex items-center gap-2.5 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded">
                  {searchFilter.title}
                  <img
                    onClick={() => setSearchFilter((prev) => ({ ...prev, title: "" }))}
                    className="cursor-pointer"
                    src={assets.cross_icon}
                    alt=""
                  />
                </span>
              )}
              {searchFilter.location && (
                <span className="ml-2 inline-flex items-center bg-red-50 gap-2.5 border border-red-200 px-4 py-1.5 rounded">
                  {searchFilter.location}
                  <img
                    onClick={() => setSearchFilter((prev) => ({ ...prev, location: "" }))}
                    className="cursor-pointer"
                    src={assets.cross_icon}
                    alt=""
                  />
                </span>
              )}
            </div>
          </>
        )}
        <button
          className="px-6 py-1.5 rounded border border-gray-400 lg:hidden"
          onClick={() => setShowFilter((prev) => !prev)}
        >
          {showFilter ? "Close" : "Show filter"}
        </button>
        {/* Category filter */}
        <div className={showFilter ? "" : "max-lg:hidden"}>
          <h4 className="font-medium text-lg py-4">Search by Categories</h4>
          <ul className="space-y-4 text-gray-600">
            {JobCategories.map((category, index) => (
              <li className="flex gap-3 items-center" key={index}>
                <input className="scale-125" type="checkbox" name="" id="" />
                {category}
              </li>
            ))}
          </ul>
        </div>
        {/* Location filter */}
        <div className={showFilter ? "" : "max-lg:hidden"}>
          <h4 className="font-medium text-lg py-4 pt-14">Search by Location</h4>
          <ul className="space-y-4 text-gray-600">
            {JobLocations.map((location, index) => (
              <li className="flex gap-3 items-center" key={index}>
                <input className="scale-125" type="checkbox" name="" id="" />
                {location}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Job listing */}
      <section className="w-full lg:w-3/4 text-gray-800 max-lg:px-4">
        <h3 className="font-medium text-3xl py-2" id="job-list">
          Latest jobs
        </h3>
        <p className="mb-8">Get your desired jobs from top companies</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {currentJobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
        {/* Pagination */}
        {jobs.length > 0 && (
          <div className="flex justify-center items-center space-x-2 mt-10">
            <a
              href="#job-list"
              onClick={() => handlePageChange(currentPage - 1)}
              className={`px-3 py-1 border rounded ${currentPage === 1 ? "cursor-not-allowed opacity-50" : ""}`}
            >
              <img src={assets.left_arrow_icon} alt="Previous" />
            </a>
            {Array.from({ length: Math.ceil(jobs.length / jobsPerPage) }).map((_, index) => (
              <a
                href="#job-list"
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-3 py-1 border rounded ${currentPage === index + 1 ? "bg-blue-500 text-white" : ""}`}
              >
                {index + 1}
              </a>
            ))}
            <a
              href="#job-list"
              onClick={() => handlePageChange(currentPage + 1)}
              className={`px-3 py-1 border rounded ${currentPage === Math.ceil(jobs.length / jobsPerPage) ? "cursor-not-allowed opacity-50" : ""}`}
            >
              <img src={assets.right_arrow_icon} alt="Next" />
            </a>
          </div>
        )}
      </section>
    </div>
  );
};

export default JobListing;
