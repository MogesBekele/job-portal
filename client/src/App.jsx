import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Applications from './pages/Applications.jsx'
import ApplyJob from './pages/ApplyJob.jsx'
import Footer from './pages/Footer.jsx'

const App = () => {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/applications' element={<Applications />} />
        <Route path='/apply-job/:id' element={<ApplyJob />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
