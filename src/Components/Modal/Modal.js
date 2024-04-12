import ReactDOM from "react-dom";

import React, { useState } from "react";
import axios from "axios";
import useMovie from "../../hooks/useMovie";
import { useParams } from "react-router-dom";
import Review from "../Review";
import Postmodal from "./Postmodal";

export default function Modal() {
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState();
  // const { id } = useMovie;
  let { id } = useParams();
  let movieId = id;
  console.log(movieId);

  const subtobackend = async () => {
    await handleSubmit();

    setContent(" ");
    alert("Review Submitted successfully");
  };

  const handleSubmit = (e) => {
    // e.preventDefault()
    const userId = JSON.parse(localStorage.getItem("user"));
    const email = JSON.parse(localStorage.getItem("user"));
    let author = email.email;
    // console.log(userId._id)
    // console.log(author)

    console.log("Review Data:");
    axios
      .post("http://localhost:3001/reviews", {
        author,
        title,
        content,
        rating,
        userId,
        movieId,
      })

      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  };

  // const MyModal =() =>{
  //   return(
  //     <form className='p-3 text-gray-400' onSubmit={subtobackend}>
  //       <button onClick={()=>setModal(false)} className="absolute right-0 top-0 m-2"><i className="fa-solid fa-xmark text-red-600"></i></button>
  //                         <label htmlFor="title">Title</label>
  //                         <input type="text" id="title" className='outline-none mb-5  border-gray-400 focus:border-white' onChange={(e) => setTitle(e.target.value)} required/>
  //                         <label htmlFor="content" className='mb-2'>Content</label>
  //                         <textarea id="content" rows={8} className='rounded-lg text-white outline-none w-full h-full bg-transparent border-2 border-gray-400 p-3' onChange={(e) => setContent(e.target.value)} required></textarea>
  //                         <button type='submit' className='bg-yellow-600 text-white my-2 disabled:hidden' >Post Review</button>
  //                         {/* {
  //                             isLoading ? <p className='text-center my-2'>Posting your review</p> : null
  //                         }
  //                         {
  //                             isError ? <p className='text-red-600 my-2 text-center'>Failed, please try again</p> : null
  //                         } */}
  //                   </form>
  //   )
  // }

  return (
    <>
      <div>
        {/* <h1 className="text-yellow-500 text-3xl mx-2 my-1">Rate & Review</h1>  */}
        {/* <button onClick={() => setModal(true)} className="mr-3 text-xl"><i className="fa-solid fa-circle-plus text-yellow-500"></i></button> */}
        {/* <MyModal/> */}
        {/* <button  onClick={() => setModal(true)} className="mr-3 text-xl"><i className="fa-solid fa-circle-plus text-yellow-500"></i></button>
        {modal && <MyModal/>} */}
        {/* <div className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div> */}
        {/* <div className="rounded-lg  text-white bg-templateBlue top-0 left-0 right-0 bottom-0 m-auto w-full max-w-[384px] h-fit sm:scale-100 scale-[0.85] p-3">
            {/*  */}

        {/* </div>  */}

       
        <form className="ml-257px p-3 text-gray-400" onSubmit={subtobackend}>
        <h1 className="text-yellow-500 text-3xl mx-2 mb-2">Rate & Review</h1>
          <div className="flex items-center space-x-4 ">
            <label htmlFor="title" className="m-2.5 mr-7 mb-1">
              Title:
            </label>
            <input
              type="text"
              id="title"
              className="w-[20rem] h-[2rem] text-white border-2 border-gray-400 rounded-md focus:outline-none"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center space-x-4 mb-3 ">
            <label htmlFor="title" className="m-2.5 mr-7 mb-0">
              Rate:
            </label>
            <input
              type="number"
              id="title"
              className="w-[3rem] h-[2rem] text-white border-2 border-gray-400 rounded-md focus:outline-none "
              onChange={(e) => setRating(e.target.value)}
              min="0"
              max="5"
              required
            />
          </div>
          <div className="flex items-center">
  <label htmlFor="content" className="m-2.5">
    Content:
  </label>
  <textarea
    id="content"
    rows={6}
    className="ml-2.5 rounded-lg text-white outline-none w-96 h-32 bg-transparent border-2 border-gray-400 p-3 focus:border-white"
    onChange={(e) => setContent(e.target.value)}
    placeholder="Type your Review"
    required
  ></textarea>
</div>


          {/* <input type="text" className='w-[78rem]'/> */}
          <button
            type="submit"
            className="bg-yellow-600 text-white my-2 disabled:hidden"
          >
            Post Review
          </button>
        </form>
      </div>
      {/* <Review  movieId={movieId}/> */}

      <div>
        {/* <button onClick={() => setModal(true)} className="mr-3 text-xl"><i className="fa-solid fa-circle-plus text-yellow-500"></i></button> */}

        {/* <Postmodal modal={modal} onClick={() => setModal(false)}> */}
        {/* <h1 className='text-yellow-500 text-3xl mx-2 my-3'>Review</h1> */}
        {/* <form className='p-3 text-gray-400' onSubmit={subtobackend}>
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" className='outline-none mb-5 text-white border-gray-400 focus:border-white' onChange={(e) => setTitle(e.target.value)} required/>
                        <label htmlFor="content" className='mb-2'>Content</label>
                        <textarea id="content" rows={8} className='rounded-lg text-white outline-none w-full h-full bg-transparent border-2 border-gray-400 p-3 focus:border-white' onChange={(e) => setContent(e.target.value)} required></textarea>
                        <button type='submit' className='bg-yellow-600 text-white my-2 disabled:hidden' >Post Review</button>
                        {/* {
                            isLoading ? <p className='text-center my-2'>Posting your review</p> : null
                        }
                        {
                            isError ? <p className='text-red-600 my-2 text-center'>Failed, please try again</p> : null
                        } */}
        {/* </form> */}
        {/* </Postmodal> */}
      </div>
    </>
  );
}
