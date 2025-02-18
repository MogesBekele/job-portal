import React from 'react'
import { Outlet } from 'react-router-dom'
import { assets } from '../assets/assets'

const Dashboard = () => {
  return (
    <div className='min-h-screen'>
      {/* navbar for recruiter panel */}

      <div className='shadow py-4'>
        <div className='px-5 flex justify-between items-center'>
          <img className='max-sm:w-32 cursor-pointer' src={assets.logo} alt="" />
          <div className='flex items-center gap-3'>
            <p className='max-sm:hidden'>Welcome, Job board</p>
            <div className='relative group'>
              <img className='w-8 border rounded-full' src={assets.company_icon} alt="" />
              <div>
                <ul>
                  <li>Logout</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    
    </div>
  )
}

export default Dashboard
