import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate=useNavigate()

  const [formData, setFormData] = useState({
    fistName: "",
    lastName: "",
    email: "",
    password: "",
    profile: null
  })
  console.log(formData)
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/register', formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }).then((res) => {
      // console.log(res.data)
      toast.success(res.data.message)
      navigate('/verify-otp',{state:{email:formData.email}})
    }).catch((err) => {
      console.log(err)
    })

  }
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((preData) => ({
      ...preData,
      [id]: value,
    }))
  }
  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, profile: e.target.files[0] }))
  }

  return (
    <>
      <div className='flex items-center m-auto max-w-[1200px] h-[90vh] justify-center'  >
        <div className='w-[45%] border border-gray-400 px-14 py-14 shadow-lg rounded-md shadow-gray-400'>
          <h1 className='mb-5 font-bold text-4xl text-center'>Register</h1>

          <form onSubmit={handleSubmit} className='w-full space-y-4'>
            <div className='flex flex-col'>
              <label htmlFor="">First Name</label>
              <input type='text' id="firstName" placeholder='Fist Name' className='border border-gray-400 rounded-md px-2 py-2' value={formData.firstName} onChange={handleChange} />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="">Last Name</label>
              <input type='text' id="lastName" placeholder='Last Name' className='border border-gray-400 rounded-md px-2 py-2' value={formData.lastName} onChange={handleChange} />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="">Email</label>
              <input type='text' id="email" placeholder='Email' className='border border-gray-400 rounded-md px-2 py-2' value={formData.email} onChange={handleChange} />
            </div>
            <div className='flex flex-col'>

              <label htmlFor="">Password</label>
              <input type='password' id="password" placeholder='Password' className='border border-gray-400 rounded-md px-2 py-2' value={formData.password} onChange={handleChange} />
            </div>
            <div className='flex flex-col'>

              <label htmlFor="">Profile</label>
              <input type='file' id="profile" placeholder='Profile' className='border border-gray-400 rounded-md px-2 py-2' value={formData.prfile} onChange={handleFileChange} />
            </div>
            <button type="submit" className='bg-blue-500 text-white rounded-lg py-2 w-full'>Register</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register