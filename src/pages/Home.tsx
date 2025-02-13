import React from 'react';
import { Link } from 'react-router-dom';
import { Droplet, Users, Clock, Guitar as Hospital } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&q=80&w=1920")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl font-bold mb-6">
            Every Drop Counts.<br />Be a Lifesaver Today.
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            Join our community of blood donors and help save lives. Register now to make a difference
            in someone's life during their time of need.
          </p>
          <div className="space-x-4">
            <Link
              to="/register"
              className="inline-block px-8 py-3 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Become a Donor
            </Link>
            <Link
              to="/emergency"
              className="inline-block px-8 py-3 bg-white text-red-500 rounded-md hover:bg-gray-100"
            >
              Emergency Request
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose LifeLink?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <Droplet className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quick Matching</h3>
              <p className="text-gray-600">Find compatible donors in your area within minutes</p>
            </div>
            
            <div className="text-center p-6">
              <Users className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Large Network</h3>
              <p className="text-gray-600">Access to thousands of registered donors nationwide</p>
            </div>
            
            <div className="text-center p-6">
              <Clock className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock assistance for emergency situations</p>
            </div>
            
            <div className="text-center p-6">
              <Hospital className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Hospital Network</h3>
              <p className="text-gray-600">Connected with major hospitals and blood banks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-red-500 mb-2">10,000+</div>
              <div className="text-gray-600">Active Donors</div>
            </div>
            
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-red-500 mb-2">5,000+</div>
              <div className="text-gray-600">Lives Saved</div>
            </div>
            
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-red-500 mb-2">500+</div>
              <div className="text-gray-600">Partner Hospitals</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;