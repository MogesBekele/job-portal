import { createContext, useEffect } from "react";
import { useState } from "react";
import JobCard from "../components/JobCard";
import { jobsData } from "../assets/assets";
import { toast } from "react-toastify";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const backEndUrl = import.meta.env.VITE_BACKEND_URL;

  const [searchFilter, setSearchFilter] = useState({
    title: "",
    location: "",
  });
  const [jobs, setJobs] = useState([]);
  const [isSearched, setIsSearched] = useState(false);

  const [showRecruiterLogin, setShowRecruiterLogin] = useState(false);

  const [companyToken, setCompanyToken] = useState(null);
  const [companyData, setCompanyData] = useState(null);

  const fetchJobs = async () => {
   try {

     const { data } = await axios.get(backEndUrl + "/api/jobs");

    
   } catch (error) {
    
   }
  };

  //fetch company data

  const fetchCompanyData = async () => {
    try {
      const { data } = await axios.get(backEndUrl + "/api/company/company", {
        headers: {
          token: companyToken,
        },
      });

      if (data.success) {
        setCompanyData(data.company);
        console.log(data);
        
      } else {
     toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchJobs();

    const storeCompanyToken = localStorage.getItem("companyToken");
    if (storeCompanyToken) {
      setCompanyToken(storeCompanyToken);
    }
  }, []);

  useEffect(() => {
    if (companyToken) {
      fetchCompanyData();
    }
  }, [companyToken]);
  const value = {
    backEndUrl,
    searchFilter,
    setSearchFilter,
    isSearched,
    setIsSearched,
    jobs,
    setJobs,
    showRecruiterLogin,
    setShowRecruiterLogin,
    companyToken,
    setCompanyToken,
    companyData,
    setCompanyData,
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
