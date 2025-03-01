import { createContext, useEffect } from 'react';
import { useState } from 'react';
import JobCard from '../components/JobCard';
import { jobsData } from '../assets/assets';

export const AppContext = createContext();

export const AppContextProvider = (props)=>{
  const backEndUrl =  Process.env.VITE_BACKEND_URL

  const [searchFilter, setSearchFilter] = useState({
    title: '',
    location: ''
  })
  const [jobs, setJobs] = useState([])
  const [isSearched, setIsSearched] = useState(false)

  const [showRecruiterLogin, setShowRecruiterLogin] =useState(false)

  const [companyToken, setCompanyToken] = useState(null)
  const [companyData, setCompanyData] = useState(null)

  const fetchJobs = async ()=>{
    setJobs(jobsData)
  }
  useEffect(()=>{
    fetchJobs()
  },[])
  const value = {
    searchFilter,
    setSearchFilter,
    isSearched,
    setIsSearched,
    jobs, setJobs,
    showRecruiterLogin,
   setShowRecruiterLogin,
    companyToken, setCompanyToken,
    companyData, setCompanyData

  }
  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}