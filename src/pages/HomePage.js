import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddCompanyModal from '../components/AddCompanyModal';
import CompanyCard from '../components/CompanyCard';
import SecondaryNavbar from '../components/SecondaryNavbar';

const HomePage = () => {
  const [companies, setCompanies] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/companies');
      setCompanies(response.data);
      setFilteredCompanies(response.data);
    } catch (error) {
      console.error('Error fetching companies:', error);
    }
  };

  const filterByCity = (city) => {
    const filtered = companies.filter(company => 
      company.city.toLowerCase().includes(city.toLowerCase())
    );
    setFilteredCompanies(filtered);
  };

  const sortCompanies = (criteria) => {
    let sortedCompanies = [...filteredCompanies];

    if (criteria === 'rating_high') {
      sortedCompanies.sort((a, b) => (b.averageRating || 0) - (a.averageRating || 0));
    } else if (criteria === 'rating_low') {
      sortedCompanies.sort((a, b) => (a.averageRating || 0) - (b.averageRating || 0));
    } else if (criteria === 'reviews_high') {
      sortedCompanies.sort((a, b) => (b.reviewCount || 0) - (a.reviewCount || 0));
    } else if (criteria === 'reviews_low') {
      sortedCompanies.sort((a, b) => (a.reviewCount || 0) - (b.reviewCount || 0));
    } else if (criteria === 'date_newest') {
      sortedCompanies.sort((a, b) => new Date(b.foundedOn) - new Date(a.foundedOn));
    } else if (criteria === 'date_oldest') {
      sortedCompanies.sort((a, b) => new Date(a.foundedOn) - new Date(b.foundedOn));
    } else if (criteria === 'relevance') {
      sortedCompanies.sort((a, b) => (b.reviewCount || 0) - (a.reviewCount || 0));
    }

    setFilteredCompanies(sortedCompanies);
  };

  return (
    <div className="container mx-auto p-4">
      <SecondaryNavbar
        onFilterByCity={filterByCity}
        onSortCompanies={sortCompanies}
        onOpenAddCompanyModal={() => setIsModalOpen(true)}
      />
      {isModalOpen && (
        <AddCompanyModal
          onClose={() => setIsModalOpen(false)}
          onAddCompany={fetchCompanies}
        />
      )}
     <div className="flex flex-col space-y-4 mt-4"> {/* Flex container for single column layout */}
        {filteredCompanies.length > 0 ? (
          filteredCompanies.map(company => (
            <div className="w-full" key={company._id}> {/* Ensuring each card takes full width */}
              <CompanyCard company={company} />
            </div>
          ))
        ) : (
          <p>No companies found for the selected city.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;

