import React, { useState } from 'react';
import {Link} from "react-router-dom"
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import image from "../MovieMasters.jpeg"

const RegistrationForm = () => {
  
  const[email, setEmail] = useState()
  const[password, setPassowrd] = useState()

  
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    
    axios.post("http://localhost:3001/login ", {email, password})
    .then(result => {
      console.log(result)
      if(result.data !== "Success"){
        alert("No record exist")
      }
      else if (result.data === "Success"){
        navigate("/home")
      }
      else{
        alert("Please fill in details")
      }
    })
    
    .catch(err => console.log(err))
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <h1 className='text-3xl my-2 flex justify-center'>Sign In</h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            name="email"
            
            onChange={(e) =>setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="********"
            name="password"
            
            onChange={(e)=>setPassowrd(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
          
        </div>
        <Link
            to="/register"
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          >
            Dont have an account? SignUp
          </Link>
      </form>
    </div>
  );
};

export default RegistrationForm;
