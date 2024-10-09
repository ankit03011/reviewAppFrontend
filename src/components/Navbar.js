import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-white p-4 text-black shadow-md">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">Review & Rate</h1>
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-center">
        <input
          type="text"
          placeholder="Search..."
          className="w-full md:w-[300px] p-2 rounded-lg border border-gray-300 focus:outline-none"
        />
        <Link to="/" className="text-black hover:underline">Sign Up</Link>
        <Link to="/" className="text-black hover:underline">Login</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;

