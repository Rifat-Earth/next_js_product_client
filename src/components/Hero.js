import Link from 'next/link';
import React from 'react';

const Hero = () => {
    return (
        <div>
           {/* Hero Section */}
      <section className="bg-blue-50 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">

          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-blue-600">
              Welcome to My Product App
            </h1>
            <p className="mt-4 text-gray-700 text-lg sm:text-xl">
              Explore our amazing products and manage them easily with our platform.
            </p>
            <div className="mt-6 flex justify-center md:justify-start gap-4">
              <Link
                href="/products"
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
              >
                View Products
              </Link>
              <Link
                href="/login"
                className="px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition"
              >
                Login
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <img src="/images/headway-5QgIuuBxKwM-unsplash.jpg" alt="Hero" className="w-full max-w-md rounded-lg shadow-lg" />
          </div>

        </div>
      </section> 
        </div>
    );
};

export default Hero;