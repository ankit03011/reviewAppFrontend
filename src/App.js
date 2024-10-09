import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './pages/MainLayout'; 
import HomePage from './pages/HomePage';
import CompanyDetails from './pages/CompanyDetails'; 

const App = () => (
  <Router>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/company/:id" element={<CompanyDetails />} /> 
      </Route>
    </Routes>
  </Router>
);

export default App;
