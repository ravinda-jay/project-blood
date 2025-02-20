import React, { useState } from 'react';
import { Search, MapPin, Droplet, Phone } from 'lucide-react';

interface Donor {
  id: number;
  name: string;
  bloodType: string;
  location: string;
  distance: string;
  lastDonation: string;
  phone: string;
}

const DonorSearch = () => {
  const [bloodType, setBloodType] = useState('');
  const [location, setLocation] = useState('');
  
  // Mock data for demonstration
  const donors: Donor[] = [
    {
      id: 1,
      name: "Ravinda Duljaya",
      bloodType: "A+",
      location: "Dodangoda, Kalutara",
      distance: "2.5 km",
      lastDonation: "3 months ago",
      phone: "+1 234-567-8900"
    },
    {
      id: 2,
      name: "Eshen Dias",
      bloodType: "O-",
      location: "Maradana, Colombo",
      distance: "4.2 km",
      lastDonation: "6 months ago",
      phone: "+1 234-567-8901"
    },
    // Add more mock donors as needed
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Find Blood Donors</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Search for compatible blood donors in your area. Enter the required blood type and your location to find potential donors.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="bloodType" className="block text-sm font-medium text-gray-700 mb-1">
                Blood Type
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Droplet className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  id="bloodType"
                  value={bloodType}
                  onChange={(e) => setBloodType(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                >
                  <option value="">Select Blood Type</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter your location"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                className="w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 flex items-center justify-center"
              >
                <Search className="h-5 w-5 mr-2" />
                Search Donors
              </button>
            </div>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {donors.map((donor) => (
            <div key={donor.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                    <Droplet className="h-6 w-6 text-red-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{donor.name}</h3>
                    <p className="text-sm text-gray-500">{donor.location}</p>
                  </div>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                  {donor.bloodType}
                </span>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Distance</dt>
                    <dd className="mt-1 text-sm text-gray-900">{donor.distance}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Last Donation</dt>
                    <dd className="mt-1 text-sm text-gray-900">{donor.lastDonation}</dd>
                  </div>
                </dl>
              </div>
              <div className="mt-4">
                <button
                  type="button"
                  className="w-full flex items-center justify-center px-4 py-2 border border-red-500 rounded-md shadow-sm text-sm font-medium text-red-500 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Contact Donor
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DonorSearch;