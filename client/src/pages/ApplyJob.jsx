import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import Loading from '../components/Loading'

const ApplyJob = () => {

  const {id} = useParams()
  const [jobData, setJobData] = useState(null)
  const {jobs} =useContext(AppContext)

  const fetchJob = async()=>{
const data = jobs.filter(job=>job._id===id)
if(data.length !== 0){
  setJobData(data[0])
  console.log(data[0])
}
  }

  useEffect(()=>{
    if (jobs.length>0) {
      fetchJob()
    }
  },[id, jobs])
  return  false? (
    <div>
      
    </div>
  ):(
  <Loading/>
  )
}

export default ApplyJob
