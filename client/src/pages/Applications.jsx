import React, { useState } from 'react';

const jobListings = [
  { id: 1, title: 'Software Engineer', company: 'Microsoft', location: 'Redmond, WA' },
  { id: 2, title: 'Product Manager', company: 'Google', location: 'Mountain View, CA' },
  { id: 3, title: 'Data Scientist', company: 'Amazon', location: 'Seattle, WA' },
];

const Applications = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [coverLetter, setCoverLetter] = useState('');

  const handleApply = (job) => {
    setSelectedJob(job);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Applying for job:', selectedJob);
    console.log('Applicant Name:', applicantName);
    console.log('Applicant Email:', applicantEmail);
    console.log('Cover Letter:', coverLetter);
    // Reset form
    setSelectedJob(null);
    setApplicantName('');
    setApplicantEmail('');
    setCoverLetter('');
  };

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl font-bold mb-6">Job Listings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobListings.map((job) => (
          <div key={job.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p className="text-gray-600">{job.company}</p>
            <p className="text-gray-600">{job.location}</p>
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
              onClick={() => handleApply(job)}
            >
              Apply
            </button>
          </div>
        ))}
      </div>

      {selectedJob && (
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Apply for {selectedJob.title}</h2>
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={applicantName}
                onChange={(e) => setApplicantName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded"
                value={applicantEmail}
                onChange={(e) => setApplicantEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Cover Letter</label>
              <textarea
                className="w-full p-2 border rounded"
                value={coverLetter}
                onChange={(e) => setCoverLetter(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">
              Submit Application
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Applications;
