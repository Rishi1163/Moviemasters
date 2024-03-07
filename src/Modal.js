// MovieReviewModal.js
import React, { useState } from 'react';

const MovieReviewModal = ({ isOpen, onClose }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleRatingChange = (event) => {
    setRating(Number(event.target.value));
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    // Add your logic to submit the review
    console.log('Rating:', rating);
    console.log('Comment:', comment);

    // Close the modal
    onClose();
  };

  return (
    // Modal backdrop
    <div
      className={`${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      } fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300`}
    >
      {/* Modal content */}
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-semibold mb-4">Write a Review</h2>

        {/* Rating input */}
        <div className="mb-4">
          <label htmlFor="rating" className="block text-sm font-medium text-gray-600">
            Rating
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            min="1"
            max="5"
            value={rating}
            onChange={handleRatingChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        {/* Comment input */}
        <div className="mb-4">
          <label htmlFor="comment" className="block text-sm font-medium text-gray-600">
            Comment
          </label>
          <textarea
            id="comment"
            name="comment"
            value={comment}
            onChange={handleCommentChange}
            rows="4"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          ></textarea>
        </div>

        {/* Submit button */}
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default MovieReviewModal;
