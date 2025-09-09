import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-green-800/70 to-yellow-600/60"></div>
      </div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Hero Content */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight relative z-10">
            Towards a <span className="text-yellow-300">zero-carbon</span> Lagos
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 relative z-10">
            Towards a <span className="text-green-300">Sustainable</span> Greater Lagos
          </h2>
          <p className="text-xl md:text-2xl text-white mb-12 relative z-10">
            <span className="text-green-300 font-semibold">Preserving</span> Today, 
            <span className="text-yellow-300 font-semibold"> Protecting</span> Tomorrow
          </p>
        </div>

        {/* Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Ambition</h3>
            <p className="text-lg text-gray-700 mb-6">
              To position Lagos as the most sustainable city on earth.
            </p>
            <button className="inline-flex items-center text-green-500 font-semibold hover:text-green-600 transition-colors">
              READ MORE <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>

          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Goal</h3>
            <p className="text-lg text-gray-700 mb-6">
              To solve climate change issues and create economic opportunities by harnessing deep relationships & data.
            </p>
            <button className="inline-flex items-center text-yellow-500 font-semibold hover:text-yellow-600 transition-colors">
              READ MORE <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>

        {/* About Preview */}
        <div className="bg-gradient-to-r from-green-500 to-yellow-500 p-1 rounded-xl">
          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-lg relative z-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">About Us</h3>
            <p className="text-lg text-gray-700">
              As part of the Ministry of Economic Planning and Budget, we are on a mission to unlock the circular economy for job creation...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;