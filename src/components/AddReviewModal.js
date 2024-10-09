import React, { useState } from 'react';
import Rating from '@mui/material/Rating';

const AddReviewModal = ({ onClose, onAddReview, companyId }) => {
  const [reviewData, setReviewData] = useState({
    fullName: '',
    subject: '',
    reviewText: '',
    rating: 0,
    companyId: companyId,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddReview(reviewData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" style={{ zIndex: 9999 }}>
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md relative" style={{ zIndex: 10000 }}>
        <button className="absolute top-2 right-2 text-red-500" onClick={onClose}>
          X
        </button>
        <h2 className="text-xl font-bold mb-4">Add Review</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="border p-2 w-full mb-2"
            type="text"
            placeholder="Full Name"
            onChange={(e) => setReviewData({ ...reviewData, fullName: e.target.value })}
            required
          />
          <input
            className="border p-2 w-full mb-2"
            type="text"
            placeholder="Subject"
            onChange={(e) => setReviewData({ ...reviewData, subject: e.target.value })}
            required
          />
          <textarea
            className="border p-2 w-full mb-2"
            placeholder="Review"
            onChange={(e) => setReviewData({ ...reviewData, reviewText: e.target.value })}
            required
          />
          <div className="mb-4">
            <Rating
              name="rating"
              value={reviewData.rating}
              onChange={(event, newValue) => {
                setReviewData({ ...reviewData, rating: newValue });
              }}
              precision={0.5}
            />
          </div>
          <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded">
            Add Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddReviewModal;
