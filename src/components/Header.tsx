import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMediaOpen, setIsMediaOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Our Projects', href: '/projects' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' }
  ];

  const mediaItems = [
    { name: 'News', href: '/media/news' },
    { name: 'Events', href: '/media/events' },
    { name: 'Pictures', href: '/media/pictures' }
  ];

  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      // Handle anchor links for home page
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Handle regular navigation
      navigate(href);
    }
    setIsMenuOpen(false);
    setIsMediaOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate('/')}>
            <div className="bg-green-500 p-2 rounded-full">
              <Leaf className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">OCCE Lagos</h1>
              <p className="text-xs text-gray-600">Climate Change & Circular Economy</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className="text-gray-700 hover:text-green-500 transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            <div className="relative">
              <button
                onClick={() => setIsMediaOpen(!isMediaOpen)}
                className="text-gray-700 hover:text-green-500 transition-colors duration-200 flex items-center"
              >
                Media
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isMediaOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                  {mediaItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavigation(item.href)}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-500 transition-colors"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className="text-gray-700 hover:text-green-500 transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
              <div>
                <button
                  onClick={() => setIsMediaOpen(!isMediaOpen)}
                  className="text-gray-700 hover:text-green-500 transition-colors duration-200 flex items-center w-full"
                >
                  Media
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isMediaOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {mediaItems.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => handleNavigation(item.href)}
                        className="block text-gray-600 hover:text-green-500 transition-colors duration-200"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;