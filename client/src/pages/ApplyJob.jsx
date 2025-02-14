import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const ApplyJob = () => {

  const {id} = useParams()
  const [jobData, setJobData] = useState(null)
  return (
    <div>
      
    </div>
  )
}

export default ApplyJob
