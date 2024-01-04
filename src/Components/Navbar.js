import React from 'react'
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  return (
    <>
    <div>
      <nav className=" bg-opacity-70 p-4 text-black">
        <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-xl font-bold mx-4">MOVIEMASTERS</a>
          <ul className="flex space-x-4 ">
            <li><a href="#" className="hover:text-gray-300 ">Home</a></li>
            <li><a href="#" className="hover:text-gray-300">Movies</a></li>
            <li><i className="fa-solid fa-magnifying-glass text-black"></i></li>
            <li><button type='button' className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">LOGOUT</button></li>
            {/* <li><a href="#" className="hover:text-gray-300">Services</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact</a></li> */}
          </ul>
        </div>
      </nav>
      <div className="container mx-auto p-8">
        {/* Your main content goes here */}
        {/* <h1 className="text-3xl font-bold">Welcome to MyNavbar App!</h1> */}
      </div>    
    </div>
    </>
    
  )
}
