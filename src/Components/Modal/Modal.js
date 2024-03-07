import ReactDOM from "react-dom";

import React, { useState } from "react";
import axios from "axios";
import useMovie from "../../hooks/useMovie";
import { useParams } from "react-router-dom";
import Review from "../Review";

export default function Modal() {
  const [Modal, setModal] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState();
  // const { id } = useMovie;
  let {id} = useParams()
  let movieId = id
  console.log(movieId);

  const subtobackend = async () => {
    await handleSubmit();

    setContent(" ");
    alert("Review Submitted successfully");
  };

  const handleSubmit = (e) => {
    // e.preventDefault()
    const userId = JSON.parse(localStorage.getItem("user"))
    const email = JSON.parse(localStorage.getItem("user"))
    let author = email.email
    // console.log(userId._id)
    // console.log(author)

    console.log("Review Data:");  
    axios
      .post("http://localhost:3001/reviews", { author, title, content, rating, userId ,movieId})

      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="block">
        {/* <button onClick={() => setModal(true)} className="mr-3 text-xl"><i className="fa-solid fa-circle-plus text-yellow-500"></i></button> */}
        {/* <MyModal/> */}
        {/* <button  onClick={() => setModal(true)} className="mr-3 text-xl"><i className="fa-solid fa-circle-plus text-yellow-500"></i></button> */}
        {/* <div className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div> */}
        {/* <div className="rounded-lg fixed text-white bg-templateBlue top-0 left-0 right-0 bottom-0 m-auto w-full max-w-[384px] h-fit sm:scale-100 scale-[0.85] p-3">
                <button className="absolute right-0 top-0 m-2"><i className="fa-solid fa-xmark text-red-600"></i></button> */}
        <h1 className="text-yellow-500 text-3xl mx-2 my-1">Rate & Review</h1>
        <form className="p-3 text-gray-400" onSubmit={subtobackend}>
          <div className="flex items-center space-x-4 ">
            <label htmlFor="title" className="m-3">Title:</label>
            <input
              type="text"
              id="title"
              className="w-[20rem] outline-none mb-5 text-white border-gray-400 focus:border-white"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center space-x-4 mb-5">
            <label htmlFor="title" className="m-3">
              Rate:
            </label>
            <input
              type="number"
              id="title"
              className="w-[4rem] outline-none text-white border-gray-400 focus:border-white"
              onChange={(e) => setRating(e.target.value)}
              min="0"
              max="5"
              required
            />
          </div>
          {/* <label htmlFor="content" className="">
            Content:
          </label> */}
          <textarea
            id="content"
            rows={3}
            className="w-[80rem] rounded-lg text-white outline-none w-full h-full bg-transparent border-2 border-gray-400 p-3 focus:border-white"
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content of review"
            required
          ></textarea>
          {/* <input type="text" className='w-[78rem]'/> */}
          <button
            type="submit"
            className="bg-yellow-600 text-white my-2 disabled:hidden"
          >
            Post Review
          </button>
        </form>
      </div>
      <Review  movieId={movieId}/>

      
    </>
  );
}
