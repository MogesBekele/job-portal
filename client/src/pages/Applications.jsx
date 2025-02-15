import React, { useState } from 'react'
import Navbar from '../components/Navbar'

const Applications = () => {
  const [isEdit, setIsEdit] =useState(false)
  return (
    <>
      <Navbar/>
      <div>
        <h2>Your Resume</h2>
        <div>
          {
            isEdit? 
            <></>
            : <div>
              
            </div>
          }

        </div>
      </div>
    </>
  )
}

export default Applications
