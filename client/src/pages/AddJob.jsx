import React, { useState } from 'react'

const AddJob = () => {
  const [title, setTitle] = useState('')
  const [location, setLocation] = useState('addis')
  const [category, setCategory] = useState('programming')
  const [level, setLevel] = useState('Beginner level')
  const [salary, setSalary] =useState(0)
  return (
    <form>
      <div>
        <p>Job Title</p>
        <input type="text" placeholder='type here' onChange={e=>setTitle(e.target.value)} value={title}/>
      </div>
    </form>
  )
}

export default AddJob
