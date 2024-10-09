import React, { useState } from 'react';

const SecondaryNavbar = ({ onFilterByCity, onSortCompanies, onOpenAddCompanyModal }) => {
  const [city, setCity] = useState('');

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSortChange = (e) => {
    onSortCompanies(e.target.value);
  };

  const handleFilterClick = () => {
    if (city) {
      onFilterByCity(city);
    }
  };

  return (
    <div className="shadow-sm py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex space-x-2 w-full md:w-auto">
          <input
            type="text"
            value={city}
            onChange={handleCityChange}
            placeholder="Select City"
            className="flex-grow p-2 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-500"
          />
          <button
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-500"
            onClick={handleFilterClick}
          >
            Find City
          </button>
        </div>

        <button
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-500"
          onClick={onOpenAddCompanyModal}
        >
          Add Company
        </button>

        <select
          className="w-full md:w-[200px] p-2 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-500"
          onChange={handleSortChange}
        >
          <option value="">Sort Companies</option>
          <option value="rating_high">Rating (High to Low)</option>
          <option value="rating_low">Rating (Low to High)</option>
        </select>
      </div>
    </div>
  );
};

export default SecondaryNavbar;

