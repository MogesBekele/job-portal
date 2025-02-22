import React from 'react'
import { manageJobsData } from '../assets/assets'

const ManageJobs = () => {
  return (
    <div>
   <div>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Job Title</th>
          <th>Date</th>
          <th>Location</th>
          <th>Applicants</th>
          <th>Visible</th>
        </tr>
      </thead>
      <tbody>
        {
          manageJobsData.map((job, index)=>(
            <tr key={index}>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          ))
        }
      </tbody>
    </table>
   </div>
    </div>
  )
}

export default ManageJobs
