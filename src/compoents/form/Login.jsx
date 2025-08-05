import React from 'react'
import Navbar from '../global/Navbar'

const Login = () => {
    return (
        <>
            <Navbar />
            <div className='flex items-center m-auto max-w-[1200px] h-[90vh] justify-center'  >
                <div className='w-[45%] border border-gray-400 px-14 py-14 shadow-lg rounded-md shadow-gray-400'>
                    <h1 className='mb-5 font-bold text-4xl text-center'>Login</h1>

                    <form action="" className='flex flex-col gap-2'>
                        <label htmlFor="">Email</label>
                        <input placeholder='Email' className='border border-gray-400 rounded-md px-2 py-2' />
                        <label htmlFor="">Password</label>
                        <input placeholder='Password' className='border border-gray-400 rounded-md px-2 py-2' />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login