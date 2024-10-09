import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AddReviewModal from '../components/AddReviewModal';
import ReviewCard from '../components/ReviewCard';
import Rating from '@mui/material/Rating';

const CompanyDetails = () => {
  const { id } = useParams();
  const [company, setCompany] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchCompany = useCallback(async () => {
    try {
      const response = await axios.get(`https://reviewappnode.onrender.com/api/companies/${id}`);
      setCompany(response.data);
    } catch (error) {
      console.error('Error fetching company:', error);
    }
  }, [id]);

  const fetchReviews = useCallback(async () => {
    try {
      const response = await axios.get(`https://reviewappnode.onrender.com/api/companies/${id}/reviews`);
      setReviews(response.data.reviews);
      setAverageRating(response.data.averageRating);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  }, [id]);

  useEffect(() => {
    fetchCompany();
    fetchReviews();
  }, [fetchCompany, fetchReviews]);

  const handleAddReview = async (reviewData) => {
    try {
      await axios.post(`https://reviewappnode.onrender.com/api/companies/${id}/reviews`, reviewData);
      fetchReviews(); 
    } catch (error) {
      console.error('Error adding review:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      {company && (
        <div className="border rounded-lg shadow-md bg-white p-6 my-4 flex flex-col lg:flex-row justify-between items-start space-y-4 lg:space-y-0 lg:space-x-4">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-gray-800">{company.name}</h1>
            <p className="text-sm text-gray-500 my-2">{company.location}</p>
            <div className="flex items-center">
              <span className="text-gray-800 text-lg font-semibold mr-2">{averageRating.toFixed(2)}</span>
              <Rating name="read-only" value={averageRating} precision={0.5} readOnly />
              <span className="text-gray-600 ml-2 text-sm">({reviews.length} Reviews)</span>
            </div>
          </div>

          <div className="flex flex-col items-end">
            <p className="text-sm text-gray-500 mb-2">Founded on: {new Date(company.foundedOn).toLocaleDateString()}</p>
            <button
              className="bg-purple-600 text-white px-4 py-2 rounded mt-auto"
              onClick={() => setIsModalOpen(true)}
            >
              Add Review
            </button>
            {isModalOpen && (
              <AddReviewModal 
                companyId={id} 
                onClose={() => setIsModalOpen(false)} 
                onAddReview={handleAddReview} 
              />
            )}
          </div>
        </div>
      )}

      <h2 className="text-sm mt-4">Result Found: {reviews.length}</h2>
      <div className="space-y-4">
        {reviews.map(review => (
          <ReviewCard key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default CompanyDetails;

