import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      category: 'News',
      date: 'July 24, 2025',
      author: 'occeadmin',
      title: 'SA OCCE Backs Nestle\'s Safety Training as Model',
      excerpt: 'for Inclusive Climate Action'
    },
    {
      category: 'News', 
      date: 'July 24, 2025',
      author: 'occeadmin',
      title: 'Lagos Circular Vision Takes Center Stage as SA',
      excerpt: 'discusses sustainability initiatives'
    },
    {
      category: 'ECOcirculate',
      date: 'July 2, 2025', 
      author: 'occeladmin',
      title: 'Eco-Circulate Ayobo Activation Deepens Lagos\' Circular Economy Drive',
      excerpt: 'Community engagement in circular economy'
    }
  ];

  return (
    <section id="blog" className="py-20 relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-gray-50/95"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">OUR BLOG</h2>
          <p className="text-xl text-gray-600">Our news & articles</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    post.category === 'ECOcirculate' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    <span>by {post.author}</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <button className="inline-flex items-center text-green-500 font-semibold hover:text-green-600 transition-colors group">
                    Read More <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;