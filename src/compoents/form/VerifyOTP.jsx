import axios from 'axios';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const VerifyOTP = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { email } = location?.state || {}
    console.log(email)

    const [formData, setFormData] = useState({
        email: email,
        otp: ""
    })
    console.log(formData)

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('/api/verify-otp', formData,
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        ).then((res) => {
            console.log(res)
            toast.success(res.data.message);
            navigate('/login')
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
    return (
        <>
            <div className='flex items-center m-auto max-w-[1200px] h-[90vh] justify-center'  >
                <div className='w-[45%] border border-gray-400 px-14 py-14 shadow-lg rounded-md shadow-gray-400'>
                    <h1 className='mb-5 font-bold text-4xl text-center'>VerifyOTP</h1>

                    <form onSubmit={handleSubmit} className='w-full space-y-4'>
                        <div className='flex flex-col'>
                            <label htmlFor="">Email</label>
                            <input type='text' disabled id="email" placeholder='Email' className='border text-gray-500 border-gray-400 rounded-md px-2 py-2' value={formData.email} onChange={handleChange} />
                        </div>
                        <div className='flex flex-col'>

                            <label htmlFor="">OTP</label>
                            <input type='number' id="otp" placeholder='OTP' className='border border-gray-400 rounded-md px-2 py-2' value={formData.password} onChange={handleChange} />
                        </div>
                        <button type="submit" className='bg-blue-500 text-white rounded-lg py-2 w-full'>VerifyOTP</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default VerifyOTP