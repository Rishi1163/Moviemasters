import { useParams } from "react-router-dom";
import MovieDetail from "../Components/MovieDetail";
import MovieRelated from "../Components/MovieRelated";
import CrewDetails from "../Components/CrewDetails";
import MovieContext from "../context/MovieContext";
import { useEffect } from "react";
import Navbar from "../Components/Navbar";

const MovieDescription = () => {
    const { id } = useParams()
    


    useEffect(() => {
        console.log("New Movie loaded")
    }, [id])

    return (
        <>
            <MovieContext id={id}>
                <Navbar/>
                <MovieDetail />
               
                <div className="lg:w-[85%] md:w-[90%] sm:w-[93%] mx-auto w-full lg:mt-0 md:mt-10 lg:absolute top-[650px] left-0 right-0 block">
                    <CrewDetails/>
                    <MovieRelated/>
                </div>
               
            </MovieContext>
            
        </>
    );
};

export default MovieDescription;