import React from 'react'
import { assets } from '../assets/assets'

const JobCard = ({job}) => {
  return (
    <div className='border p-6 shadow rounded'>
      <div className='flex justify-between items-center'>
        <img src={assets.company_icon} alt="" />
      </div>
      <h4>{job.title}</h4>
      <div>
        <span>{job.location}</span>
        <span>{job.label}</span>
      </div>
      <p dangerouslySetInnerHTML={{__html:job.description.slice(0,150)}}></p>
      <div>
        <button>Apply now</button>
        <button>Learn mode</button>
      </div>
    </div>
  )
}

export default JobCard
