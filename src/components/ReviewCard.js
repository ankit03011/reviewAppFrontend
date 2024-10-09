import React from 'react';
import Rating from '@mui/material/Rating';

const ReviewCard = ({ review }) => (
  <div className="border p-4 my-4 rounded-lg shadow-md bg-white relative">
    <h3 className="text-lg font-bold">{review.subject}</h3>
    <p className="text-sm text-gray-600">Reviewed by: {review.fullName}</p>
    <p className="my-2">{review.reviewText}</p>
    
    <div className="absolute top-4 right-4 flex items-center">
      <Rating name="read-only" value={review.rating} precision={0.5} readOnly />
    </div>
  </div>
);

export default ReviewCard;
