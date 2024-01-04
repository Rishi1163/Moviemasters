import { createContext, useEffect } from 'react'
import { getMovieById } from '../api/Movies'
import useStatus from '../hooks/useStatus'
import { useState } from 'react'

export const Context = createContext({})

const MovieContext = ({ id, children }) => {
    const { isLoading, setLoading, setIdle } = useStatus();
    const [movie, setMovie] = useState();

    useEffect(() => {
        setLoading();
        getMovieById(id)
            .then(res => {
                setMovie({...res, crew: getCrewDetails(res.credits.cast, res.credits.crew), related: res.recommendations.results});
                console.log(res)
                setIdle();
            })
            .catch(err => console.error(err.message))
    }, [id])

    if (isLoading) {
        return (
            <div class="flex justify-center items-center h-screen">
                <i class="fa-solid fa-circle-notch animate-spin text-red-600 sm:text-5xl text-4xl"></i>
            </div>
        )
    }

    return (
        <Context.Provider value={movie ? { ...movie } : {}}>
            {
                children
            }
        </Context.Provider>
    )
}

function getCrewDetails(cast, crew) {
    const crewDetails = {
        cast: [],
        directors: [],
        producers: [],
        writers: []
    }

    cast.forEach(element => {
        if (element["known_for_department"].localeCompare('Acting') === 0) {
            crewDetails.cast.push(element)
        }
    });

    crew.forEach(element => {
        switch (element["known_for_department"]) {
            case 'Directing':
                crewDetails.directors.push(element)
                break
            case 'Production':
                crewDetails.producers.push(element)
                break
            case 'Writing':
                crewDetails.writers.push(element)
                break
            default:
                break
        }
    })

    return crewDetails
}

export default MovieContext