import useMovie from "../hooks/useMovie";
import SlidingWindow from "./SlidingWindow";
import Postmodal from "./Modal/Postmodal"
import { useState } from "react";
import Modal from "./Modal/Modal";
import { useParams } from "react-router-dom";
import Review from "./Review";


const MovieRelated = () => {
    const {
        related,
        title
    } = useMovie()

    let {id} = useParams()
  let movieId = id
  console.log(movieId);


    return (
        <>
            <SlidingWindow value={related} title="You may also like" type={1} className="mt-1" key={"you-may-also-like"}/>
            {/* <div className="flex justify-between items-center"> */}
                    {/* <p className="text-white text-xl sm:mx-10 mx-7">Reviews on {title}</p> */}
                    <Modal/>
                    
                {/* </div> */}
                <Review  movieId={movieId}/>
        </>
    )
}

export default MovieRelated