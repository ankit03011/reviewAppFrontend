import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';

const CompanyCard = ({ company }) => {
  return (
    <div className="border rounded-lg shadow-md bg-white p-6 my-4 flex flex-col md:flex-row justify-between items-start space-y-4 md:space-y-0 md:space-x-4">
      <div className="flex flex-col">
        <h2 className="text-xl font-bold text-gray-800">{company.name}</h2>
        <p className="text-sm text-gray-500 my-2">{company.location}</p>
        <div className="flex items-center">
          <span className="text-gray-800 text-lg font-semibold mr-2">{company.averageRating.toFixed(2)}</span>
          <Rating name="read-only" value={company.averageRating} precision={0.5} readOnly />
          <span className="text-gray-600 ml-2 text-sm">({company.totalReviews} Reviews)</span>
        </div>
      </div>

      <div className="flex flex-col items-end">
        <p className="text-sm text-gray-500 mb-2">Founded on: {new Date(company.foundedOn).toLocaleDateString()}</p>
        <Link to={`/company/${company._id}`} className="bg-gray-800 text-white px-4 py-2 rounded-lg mt-auto">
          Detail Review
        </Link>
      </div>
    </div>
  );
};

export default CompanyCard;

