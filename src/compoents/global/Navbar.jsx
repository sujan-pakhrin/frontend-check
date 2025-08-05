import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className='flex items-center h-14 m-auto max-w-[1200px]' >
                <div className='flex-1'><Link to={'/'} className='text-xl font-bold'>Logo</Link></div>
                <div className='flex-[1.5] flex justify-between items-center' >
                    <Link to={'/'}>Home</Link>
                    <Link to={'/about'}>About</Link>
                    <Link to={'/contact-us'}>Contact Us</Link>
                    <Link to={'/login'}>
                    <button>Login</button>
                    </Link>
                    <Link to={'/register'}>
                    <button className='bg-blue-500 text-white px-8 py-2 text-semibold rounded-sm'>Sign Up</button>
                    </Link>
                </div>
            </nav>

        </>
    )
}

export default Navbar