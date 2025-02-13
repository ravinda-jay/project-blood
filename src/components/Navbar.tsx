import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Search, AlertCircle, User, LogIn } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Heart className="h-8 w-8 text-red-500" />
              <span className="ml-2 text-xl font-bold text-gray-800">LifeLink</span>
            </Link>
          </div>
          
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link to="/donor-search" className="flex items-center text-gray-600 hover:text-red-500">
              <Search className="h-5 w-5 mr-1" />
              <span>Find Donors</span>
            </Link>
            <Link to="/emergency" className="flex items-center text-gray-600 hover:text-red-500">
              <AlertCircle className="h-5 w-5 mr-1" />
              <span>Emergency</span>
            </Link>
            <Link to="/dashboard" className="flex items-center text-gray-600 hover:text-red-500">
              <User className="h-5 w-5 mr-1" />
              <span>Dashboard</span>
            </Link>
            <Link
              to="/login"
              className="flex items-center px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600"
            >
              <LogIn className="h-5 w-5 mr-1" />
              <span>Login</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;