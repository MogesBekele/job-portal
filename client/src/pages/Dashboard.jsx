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
