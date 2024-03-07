import useMovie from "../hooks/useMovie";
import SlidingWindow from "./SlidingWindow";
import Postmodal from "./Modal/Postmodal"
import { useState } from "react";
import Modal from "./Modal/Modal";


const MovieRelated = () => {
    const {
        related,
        title
    } = useMovie()


    return (
        <>
            <SlidingWindow value={related} title="You may also like" type={1} className="mt-10" key={"you-may-also-like"}/>
            <div className="flex justify-between items-center">
                    {/* <p className="text-white text-xl sm:mx-10 mx-7">Reviews on {title}</p> */}
                    <Modal/>
                </div>
        </>
    )
}

export default MovieRelated