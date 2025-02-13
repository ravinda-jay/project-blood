import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Droplet, Award, Activity } from 'lucide-react';

interface DonationHistory {
  id: number;
  date: string;
  location: string;
  bloodType: string;
  units: number;
  recipient: string;
}

const Dashboard = () => {
  const [isAvailable, setIsAvailable] = useState(true);
  
  // Mock data for demonstration
  const donationHistory: DonationHistory[] = [
    {
      id: 1,
      date: "2024-03-15",
      location: "Central Hospital",
      bloodType: "A+",
      units: 1,
      recipient: "Emergency Ward"
    },
    {
      id: 2,
      date: "2023-12-20",
      location: "City Blood Bank",
      bloodType: "A+",
      units: 1,
      recipient: "Regular Donation"
    }
  ];

  const stats = {
    totalDonations: 8,
    livesSaved: 24,
    lastDonation: "2024-03-15",
    nextEligible: "2024-06-15"
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-center">
                <div className="h-24 w-24 rounded-full bg-red-100 flex items-center justify-center mx-auto">
                  <Droplet className="h-12 w-12 text-red-500" />
                </div>
                <h2 className="mt-4 text-xl font-semibold text-gray-900">John Doe</h2>
                <p className="text-gray-500">Blood Type: A+</p>
                <div className="mt-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    isAvailable ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {isAvailable ? 'Available to Donate' : 'Not Available'}
                  </span>
                </div>
              </div>

              <div className="mt-6 border-t border-gray-200 pt-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-600">Donation Status</span>
                  <button
                    onClick={() => setIsAvailable(!isAvailable)}
                    className={`px-4 py-2 rounded-md text-sm font-medium ${
                      isAvailable
                        ? 'bg-red-500 text-white hover:bg-red-600'
                        : 'bg-green-500 text-white hover:bg-green-600'
                    }`}
                  >
                    {isAvailable ? 'Set Unavailable' : 'Set Available'}
                  </button>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-600">Last Donation: {stats.lastDonation}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-600">Next Eligible: {stats.nextEligible}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-600">Location: New York, NY</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats and History Section */}
          <div className="lg:col-span-2">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                    <Droplet className="h-6 w-6 text-red-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">{stats.totalDonations}</h3>
                    <p className="text-sm text-gray-500">Total Donations</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                    <Award className="h-6 w-6 text-red-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">{stats.livesSaved}</h3>
                    <p className="text-sm text-gray-500">Lives Impacted</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                    <Activity className="h-6 w-6 text-red-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Active</h3>
                    <p className="text-sm text-gray-500">Donor Status</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Donation History */}
            <div className="bg-white rounded-lg shadow-md">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Donation History</h3>
              </div>
              <div className="divide-y divide-gray-200">
                {donationHistory.map((donation) => (
                  <div key={donation.id} className="px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{donation.location}</p>
                        <p className="text-sm text-gray-500">
                          {donation.date} • {donation.units} unit(s) • {donation.bloodType}
                        </p>
                      </div>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        Completed
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">Recipient: {donation.recipient}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;