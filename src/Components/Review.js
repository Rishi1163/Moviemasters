import React, { useEffect , useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Staremoji from './Staremoji';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Review({movieId}) {
    const [reviews, setReviews] = useState([])
    const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchReviews = async () => {
          try {
            const response = await axios.get(`https://moviemastersbackend.onrender.com/getreviews/${movieId}`);
            setReviews(response.data);
            setLoading(false);
          } catch (error) {
            console.error('Error fetching reviews:', error);
            setError('Error fetching reviews. Please try again later.');
            setLoading(false);
          }
        };
    
        fetchReviews();
      }, [movieId]);

  return (
    <>
    {/* <div>
      <div>
      <h2>Reviews</h2>
      <ul className='text-white'>
        {reviews.map(review => (
          <li key={review._id}>
            <p>User: {review.userId}</p>
            <p>Rating: {review.rating}</p>
            <p>Comment: {review.content}</p>
          </li>
        ))}
      </ul>
    </div>
    </div> */}

{reviews.length > 0 ? (
    <section className="pb-10">
                
                {
                    
                    reviews.map((review) => {
                        return <div className="review" key={review._id}>
                            <div className="flex justify-center items-center">
                                <i className="review-icon fa-solid fa-user-astronaut"></i>
                            </div>

                            <div className="flex justify-between items-center">
                                <div className="ml-1">
                                    <div>
                                        <p className="text-md font-bold text-yellow-500">{review.author}</p>
                                    </div>
                                    <p className=" text-xs text-gray-400">
                                        {new Date(review.updatedAt).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>

                            <div className="review-content">
                            {/* <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} /> */}
                                
                                <p className="text-lg mb-1">{review.title}</p>
                                <span className="text-lg mb-1">{review.rating}<Staremoji/></span> 
                                <p style={{ fontSize: review.content.length > 100 ? '1rem' : '0.8rem' }} className="text-gray-400 text-sm">
  {review.content}
</p>
                            </div>
                        </div>
                    })
                }

                {
                    // <p className="text-xl text-white text-center">Loading...</p> 
                    // :<button className="bg-green-500 text-lg text-white disabled:hidden" disabled={!hasNextPage} onClick={fetchNextPage}>Load More</button>
                }

            </section>

) : (
  <p className="text-white text-xl py-3 sm:py-5 text-center">
                No reviews available
            </p>
)}
        
    
    {/* if (isLoading) {
        
            <div class="flex justify-center items-center h-fit">
                <i class="fa-solid fa-circle-notch animate-spin text-red-600 sm:text-4xl text-3xl my-5"></i>
            </div>
    
    } */}
    {/* if(error){
    
            <p className="text-white text-xl py-3 sm:py-5 text-center">
                No reviews available
            </p>
    
    }  */}

    </>
  )
}
