// Card.js

import React from 'react'

const getPosterPath = (poster_path) =>{
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`
}

export default function Cards({ original_title, overview, poster_path }) {
  return (
    <div>
       <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={getPosterPath(poster_path)} alt={original_title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{original_title}</div>
        <p className="text-gray-700 text-base">{overview}</p>
      </div>
    </div>
    </div>
  )
}
