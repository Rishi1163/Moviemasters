import axiosInstance from "./Axios";

const ENDPOINT_TO_TITLE = {
    '/movie/popular': "Popular movies",
    "/movie/upcoming": "Upcoming movies",
    '/movie/top_rated': "Top Rated movies"
}

export async function getMovies(){
    try {
        const endpoints = ['/movie/popular', '/movie/upcoming', '/movie/top_rated']
        let res = []
    
        for(const endpoint of endpoints){
            const movies = await axiosInstance.get(endpoint);
            res.push({
                title: ENDPOINT_TO_TITLE[endpoint],
                data: movies.data?.results
            })
        }
    
        return res;
    } catch (error) {
        console.log(error.message);
        throw error
    }
}

export async function getMovieById(id) {
    if (isNaN(id)) throw new Error('Invalid movieId')
    const response = await axiosInstance.get(`/movie/${id}`, {
        params: {
            append_to_response: 'videos,recommendations,credits'
        }
    })
    return response.data
}
