import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <h2>helloo</h2>
      <p>all in one</p>
      <Outlet/>
    </div>
  )
}

export default Dashboard
