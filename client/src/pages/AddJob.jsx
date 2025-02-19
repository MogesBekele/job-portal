import React, { useRef, useState } from 'react'

const AddJob = () => {
  const [title, setTitle] = useState('')
  const [location, setLocation] = useState('addis')
  const [category, setCategory] = useState('programming')
  const [level, setLevel] = useState('Beginner level')
  const [salary, setSalary] =useState(0)
  const editorRef = useRef(null)
  const quillRef = useRef(null)
  return (
    <form>
      <div>
        <p>Job Title</p>
        <input type="text" placeholder='type here' onChange={e=>setTitle(e.target.value)} value={title} required/>
      </div>
      <div>
        <p>Job Description</p>
        <div>

        </div>
      </div>
    </form>
  )
}

export default AddJob
