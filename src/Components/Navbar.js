import React from 'react'
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  return (
    <>
    <div>
      <nav className=" bg-opacity-70 p-4 text-black">
        <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="navbar-brand z-20 my-2">MOVIEMASTERS</a>
          <ul className="flex space-x-4 ">
            <li><Link to="/home">Home</Link></li>
            <Link to="/Movies">Movies</Link>
            <li><i className="fa-solid fa-magnifying-glass text-white"></i></li>
            {/* <li><button type='button' className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">LOGOUT</button></li> */}
            {/* <li><a href="#" className="hover:text-gray-300">Services</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact</a></li> */}
          </ul>
        </div>
      </nav>
        
    </div>
    </>
    
  )
}
