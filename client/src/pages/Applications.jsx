import React, { useState } from 'react'
import Navbar from '../components/Navbar'

const Applications = () => {
  const [isEdit, setIsEdit] =useState(false)
  return (
    <>
      <Navbar/>
      <div className='container px-4 min-h-[65vh] 2xl:px-20 mx-auto my-10'>
        <h2>Your Resume</h2>
        <div>
          {
            isEdit? 
            <></>
            : <div>
              <a href="">
                Resume
              </a>
              <button>Edit</button>
            </div>
          }

        </div>
      </div>
    </>
  )
}

export default Applications
