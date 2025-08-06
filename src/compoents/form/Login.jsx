import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'

const Login = () => {
    const navigate=useNavigate();
    const data = {
        email: "ram@gmail.com",
        password: "232323"
    }
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    console.log(formData)
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Hello")
        if(formData.email===""||formData.password===''){
            return toast.error("Please fill all the forms")
        }
        if(formData.email!==data.email){
             return toast.error("Your Email is incorrect")
        }
        if(formData.password!==data.password){
             return toast.error("Your Password is incorrect")
        }
        toast.success("Login successfully!!")
        //redirect to home
        navigate('/')
    }
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((preData) => ({
            ...preData,
            [id]: value,
        }))
    }
    return (
        <>
            <div className='flex items-center m-auto max-w-[1200px] h-[90vh] justify-center'  >
                <div className='w-[45%] border border-gray-400 px-14 py-14 shadow-lg rounded-md shadow-gray-400'>
                    <h1 className='mb-5 font-bold text-4xl text-center'>Login</h1>

                    <form onSubmit={handleSubmit} className='w-full space-y-4'>
                        <div className='flex flex-col'>
                            <label htmlFor="">Email</label>
                            <input type='text' id="email" placeholder='Email' className='border border-gray-400 rounded-md px-2 py-2' value={formData.email} onChange={handleChange} />
                        </div>
                        <div className='flex flex-col'>

                            <label htmlFor="">Password</label>
                            <input type='password' id="password" placeholder='Password' className='border border-gray-400 rounded-md px-2 py-2' value={formData.password} onChange={handleChange} />
                        </div>
                        <button type="submit" className='bg-blue-500 text-white rounded-lg py-2 w-full'>Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login