import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between p-4 w-full z-[100] absolute'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>
            NETFLIX
        </h1>
        <div >
            <button className='text-white pr-4'>Sign In</button>
            <button className='text-white bg-red-600 px-6 py-2 rounded cursor-pointer'>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar