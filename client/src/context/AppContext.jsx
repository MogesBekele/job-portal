import { createContext } from 'react';
import { useState } from 'react';
import JobCard from '../components/JobCard';

export const AppContext = createContext();

export const AppContextProvider = (props)=>{
  const [searchFilter, setSearchFilter] = useState({
    title: '',
    location: ''
  })
  const [isSearched, setIsSearched] = useState(false)
  const value = {
    searchFilter,
    setSearchFilter,
    isSearched,
    setIsSearched,
    JobCard

  }
  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}