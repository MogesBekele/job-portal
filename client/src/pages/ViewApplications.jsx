import React from 'react';

const applications = [
  { id: 1, title: 'Software Engineer', company: 'Microsoft', date: '2025-01-15', status: 'Pending' },
  { id: 2, title: 'Product Manager', company: 'Google', date: '2025-01-10', status: 'Accepted' },
  { id: 3, title: 'Data Scientist', company: 'Amazon', date: '2025-01-05', status: 'Rejected' },
];

const ViewApplications = () => {
  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl font-bold mb-6">Your Applications</h1>
      <table className="min-w-full bg-white border rounded-lg">
        <thead>
          <tr>
            <th className="py-3 px-4 border-b text-left">Company</th>
            <th className="py-3 px-4 border-b text-left">Job Title</th>
            <th className="py-3 px-4 border-b text-left">Date</th>
            <th className="py-3 px-4 border-b text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application) => (
            <tr key={application.id}>
              <td className="py-3 px-4 border-b">{application.company}</td>
              <td className="py-3 px-4 border-b">{application.title}</td>
              <td className="py-3 px-4 border-b">{application.date}</td>
              <td className="py-3 px-4 border-b">
                <span
                  className={`px-4 py-1.5 rounded ${
                    application.status === 'Accepted'
                      ? 'bg-green-100 text-green-600'
                      : application.status === 'Rejected'
                      ? 'bg-red-100 text-red-600'
                      : 'bg-yellow-100 text-yellow-600'
                  }`}
                >
                  {application.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewApplications;
