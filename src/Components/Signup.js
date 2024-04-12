import React, { useState } from 'react';
import { Link } from "react-router-dom"
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import image from "../MovieMasters.jpeg"

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Password validation
    const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError("Password should contain at least 8 characters, one symbol, and numbers.");
      return;
    } else if (password !== confirmPassword) {
      setPasswordError("Passwords don't match.");
      return;
    } else {
      setPasswordError("");
    }

    // Handle registration logic here
    console.log('Registration data:');
    axios.post("https://moviemastersbackend.onrender.com/register", { username, email, password })
      .then(result => {
        console.log(result);
        navigate('/login');
      })
      .catch(err => console.log(err));
    localStorage.setItem("user", JSON.stringify({ username, email, password }));
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${image})` }} >
        <form
          className="bg-white shadow-md rounded px-14 pt-6 pb-8 m-0 mb-4 w-96"
          onSubmit={handleSubmit}
        >
          <h1 className='text-3xl my-2 flex justify-center'>Sign Up</h1>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              type="password"
              placeholder="********"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="h-6">
            {passwordError && <p className="text-red-500 text-xs italic">{passwordError}</p>}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-5"
              type="submit"
            >
              Register
            </button>
          </div>
          <Link
            to="/login"
            className="inline-block align-baseline  font-bold text-sm text-blue-500 hover:text-blue-800 ml-7"
          >
            Already have an account? Login
          </Link>
        </form>
      </div>
      <div className="flex h-screen bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}></div>
    </>
  );
};

export default RegistrationForm;
