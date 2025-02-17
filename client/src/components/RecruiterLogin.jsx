import React, { useState } from 'react'

const RecruiterLogin = () => {
  const [state, setState] =useState('login')
  const [name, setName] =useState('')
  const [password, setPassword] =useState('')
  const [email, setEmail] = useState('')
  const [image, setImage] =  useState(false)
  const [isTextDataSubmited, setIsTextDataSubmited] =useState(false)
  return (
    <div>
      pop message
    </div>
  )
}

export default RecruiterLogin
