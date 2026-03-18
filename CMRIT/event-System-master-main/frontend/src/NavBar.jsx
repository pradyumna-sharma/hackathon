import React from 'react'
import { Outlet, Link } from "react-router-dom";
function NavBar() {
  return (
    <>
     <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white font-bold text-xl">Logo</Link>

        {/* Hamburger menu for mobile */}
        <button className="text-white focus:outline-none md:hidden">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

      
        <ul className="hidden md:flex space-x-4">
          <li><Link to="/" className="text-white hover:text-gray-300">Home</Link></li>
          <li><Link to="/login" className="text-white hover:text-gray-300">Login</Link></li>
          {/* <li><Link to="/register" className="text-white hover:text-gray-300">Register</Link></li> */}
         
        </ul>
      </div>
    </nav>
      {/* <Outlet /> */}
    </>
  )
}

export default NavBar