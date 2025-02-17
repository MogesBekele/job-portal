import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Applications from './pages/Applications.jsx'
import ApplyJob from './pages/ApplyJob.jsx'
import RecruiterLogin from './components/RecruiterLogin.jsx'
import { AppContext } from './context/AppContext.jsx'


const App = () => {
  const [showRecruiterLogin] = useContext(AppContext)
  return (
    <div >
      { showRecruiterLogin && <RecruiterLogin/>}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/applications' element={<Applications />} />
        <Route path='/apply-job/:id' element={<ApplyJob />} />
      </Routes>
      
    </div>
  )
}

export default App
