import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between bg-primary-color py-5 px-[100px]'>
        <Link to='/'>
            <img src="./logo-white.svg" alt="" />
        </Link>
        <ul className='flex items-center gap-[50px] text-white'>
            <li>
                <Link to='/contact-us'>Contact Us</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
            <li className='border border-white px-7 py-[10px] rounded-[6px]'>
                <Link to='/register'>Sign Up</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar