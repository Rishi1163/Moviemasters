import React from 'react'
import image from "../MovieMasters.jpeg"
import { Link } from 'react-router-dom'

export default function Intro() {
  return (
    <div>
      <div className="flex h-screen bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
      <div className="m-auto text-center text-white bg-black rounded-lg w-1/3 p-10 bg-opacity-55">
        <h1 className="text-5xl font-bold mb-6 text-red-600">MovieMasters</h1>
        <p className="text-lg mb-10"><strong>Your ultimate destination for discovering, rating, and exploring the world of cinema. 
        Unleash your passion for movies with our diverse collection and join a community of film enthusiasts. 
        Let the cinematic journey begin!"</strong></p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          <Link to="/register">Get Started</Link>
        </button>
      </div>
    </div>
    </div>
  )
}
