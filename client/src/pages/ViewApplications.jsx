import React from 'react'
import { viewApplicationsPageData } from '../assets/assets'

const ViewApplications = () => {
  return (
    <div>
     <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>User name</th>
            <th>Job Title</th>
            <th>Location</th>
            <th>Resume</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {
          viewApplicationsPageData.map((applicant, index)=>(
            
          ))
        }
        </tbody>
      </table>
     </div>
      
    </div>
  )
}

export default ViewApplications
