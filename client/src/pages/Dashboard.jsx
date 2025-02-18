import React from 'react'
import { Outlet } from 'react-router-dom'
import { assets } from '../assets/assets'

const Dashboard = () => {
  return (
    <div className='min-h-screen'>
      {/* navbar for recruiter panel */}

      <div className='shadow py-4'>
        <div className='px-5 flex justify-between items-center'>
          <img src={assets.logo} alt="" />
          <div>
            <p>Welcome, Job board</p>
            <div>
              <img src={assets.company_icon} alt="" />
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
