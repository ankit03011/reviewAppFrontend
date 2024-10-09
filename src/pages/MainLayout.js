import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MainLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-1 overflow-y-auto p-4 pt-16 md:pt-20 lg:pt-24">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;

