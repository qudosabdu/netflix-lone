import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='w-full h-screen'>
    <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/2a3ea762-b0bf-4d97-b5e4-710460f1f81c/PK-en-20231009-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="bg"
      />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign In</h1>
              <form className="flex flex-col space-y-4 mt-8">
                <input
                  className="bg-transparent border-b-2 border-white/50 focus:outline-none"
                  type="text"
                  placeholder="Email or phone number"
                />
                <input
                  className="bg-transparent border-b-2 border-white/50 focus:outline-none"
                  type="password"
                  placeholder="Password"
                />
                <button className="bg-red-600 py-2 rounded-md text-white font-bold">
                  Sign In
                </button>
                <div className="flex items-center justify-between space-x-2 text-sm text-white/50">
                  <p className="flex items-center space-x-2">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Remember me</span>
                  </p>
                  <span className="text-sm">Need help?</span>
                </div>
                <p className="text-sm text-white/50">
                  <span >
                      New to Netflix?
                  </span> {""}
                  <Link to="/signup" className="text-white hover:underline">
                      Sign Up now
                  </Link>
                  </p>
              </form>
            </div>
          </div>
        </div>  
    </div>

  )
}

export default Login
