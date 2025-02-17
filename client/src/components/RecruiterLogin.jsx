import React, { useState } from 'react'
import { assets } from '../assets/assets'

const RecruiterLogin = () => {
  const [state, setState] =useState('login')
  const [name, setName] =useState('')
  const [password, setPassword] =useState('')
  const [email, setEmail] = useState('')
  const [image, setImage] =  useState(false)
  const [isTextDataSubmited, setIsTextDataSubmited] =useState(false)
  return (
    <div>
      <form action="">
        <h1>Recruiter {state}</h1>
        <p>welcome back! please sign in to continue</p>
        <>
        <div>
          <img src={assets.person_icon} alt="" />
          <input onChange={e=>setName(e.target.value)} value={name} type="text" placeholder='Company Name' required />
        </div>
        </>
      </form>
    </div>
  )
}

export default RecruiterLogin
