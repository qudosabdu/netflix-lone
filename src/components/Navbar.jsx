import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex justify-between p-4 w-full z-[100] absolute'>
    <Link to='/'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>
            NETFLIX
        </h1>
    </Link>
        <div >
        <Link to='/login'>
            <button className='text-white pr-4'>Sign In</button>
        </Link>
        <Link to='/signup'>
            <button className='text-white bg-red-600 px-6 py-2 rounded cursor-pointer'>Sign Up</button>
        </Link>
        </div>

    </div>
  )
}

export default Navbar
