import React, { useState } from 'react';
import axios from 'axios';

const AddCompanyModal = ({ onClose, onAddCompany }) => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    foundedOn: '',
    city: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.location || !formData.foundedOn || !formData.city) {
      setError('Please fill in all fields');
      return;
    }
    
    try {
      await axios.post('http://localhost:5000/api/companies/add', formData);
      onAddCompany();
      onClose();
    } catch (err) {
      console.error('Error adding company:', err);
      setError('Failed to add company. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md relative">
        <h2 className="text-xl font-bold mb-4">Add Company</h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            className="border p-2 w-full mb-2"
            type="text"
            placeholder="Company Name"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            className="border p-2 w-full mb-2"
            type="text"
            placeholder="Location"
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          />
          <input
            className="border p-2 w-full mb-2"
            type="date"
            onChange={(e) => setFormData({ ...formData, foundedOn: e.target.value })}
          />
          <input
            className="border p-2 w-full mb-2"
            type="text"
            placeholder="City"
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          />
          <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded">Add Company</button>
        </form>
        <button className="absolute top-2 right-2 text-red-500" onClick={onClose}>X</button>
      </div>
    </div>
  );
};

export default AddCompanyModal;

