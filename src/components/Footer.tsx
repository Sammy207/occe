import React from 'react';
import { MapPin, Phone, Clock, Leaf } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-green-400 mt-1 mr-3 flex-shrink-0" />
                <p>3rd Floor, Room 307, Alausa Secretariat Ikeja, Lagos State</p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-green-400 mr-3" />
                <p>+234 803 347 8436</p>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-green-400 mr-3" />
                <p>Mon - Fri: 8:00 am - 5:00 pm</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Menu</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="hover:text-green-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-green-400 transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-green-400 transition-colors">Our Projects</a></li>
              <li><a href="#resources" className="hover:text-green-400 transition-colors">Resources</a></li>
              <li><a href="#blog" className="hover:text-green-400 transition-colors">Media</a></li>
              <li><a href="#contact" className="hover:text-green-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Recent Blog */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Recent Blog</h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-sm text-gray-300 mb-2">Latest Article</p>
              <h4 className="font-semibold hover:text-green-400 transition-colors cursor-pointer">
                SA OCCE Backs Nestle's Safety Training as Model for Inclusive Climate Action
              </h4>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img 
                src="/OCCE LOGO WHITE-05.png" 
                alt="OCCE Lagos Logo" 
                className="h-10 w-auto"
              />
              <div>
                <h4 className="font-bold">OCCE Lagos</h4>
                <p className="text-sm text-gray-400">Climate Change & Circular Economy</p>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-2xl font-bold text-green-400 mb-2">
                …toward a zero-carbon Lagos
              </p>
              <p className="text-sm text-gray-400">
                © 2025 Office of Climate Change & Circular Economy Lagos. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;