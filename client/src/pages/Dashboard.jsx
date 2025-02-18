import React from 'react'
import { Outlet } from 'react-router-dom'
import { assets } from '../assets/assets'

const Dashboard = () => {
  return (
    <div className='min-h-screen'>
      {/* navbar for recruiter panel */}

      <div>
        <div>
          <img src={assets.logo} alt="" />
          <div>
            <p>Welcome, Job board</p>
          </div>
        </div>
      </div>
     
    
    </div>
  )
}

export default Dashboard
