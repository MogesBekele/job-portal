import React from 'react'
import { assets, viewApplicationsPageData } from '../assets/assets'

const ViewApplications = () => {
  return (
    <div className='container mx-auto p-4'>
     <div>
      <table className='w-full max-w-4xl bg-white border-gray-200 max-sm:text-sm'>
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
            <tr>
              <td>{index+1}</td>
              <td>
                <img src={applicant.imgSrc} alt="" />
                <span>{applicant.name}</span>
              </td>
              <td>{applicant.jobTitle}</td>
              <td>{applicant.location}</td>
              <td>
                <a href="" target='_blank'>
                  Resume <img src={assets.resume_download_icon} alt="" />
                </a>
              </td>
              <td>
                <div>
                  <button>...</button>
                </div>
                <div>
                  <button>Accept</button>
                  <button>Reject</button>
                </div>
              
              </td>
            </tr>
          ))
        }
        </tbody>
      </table>
     </div>
      
    </div>
  )
}

export default ViewApplications
