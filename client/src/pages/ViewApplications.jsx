import React from 'react'
import { assets, viewApplicationsPageData } from '../assets/assets'

const ViewApplications = () => {
  return (
    <div className='container mx-auto p-4'>
     <div>
      <table className='w-full max-w-4xl bg-white border-gray-200 max-sm:text-sm'>
        <thead>
          <tr className='border-b'>
            <th className='py-2 px-4 text-left'>#</th>
            <th className='py-2 px-4 text-left'>User name</th>
            <th className='py-2 px-4 text-left max-sm:hidden'>Job Title</th>
            <th className='py-2 px-4 text-left max-sm:hidden'>Location</th>
            <th className='py-2 px-4 text-left'>Resume</th>
            <th className='py-2 px-4 text-left'>Action</th>
          </tr>
        </thead>
        <tbody>
        {
          viewApplicationsPageData.map((applicant, index)=>(
            <tr key={index} className='text-gray-700'>
              <td className='py-2 px-4 border-b text-center'>{index+1}</td>
              <td className='py-2 px-4 border-b text-center flex'>
                <img className='w-10 h-10 rounded-full mr-3 max-sm:hidden' src={applicant.imgSrc} alt="" />
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
