import React from 'react';
import { User, Target, Eye } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-green-900/80"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About OCCE Lagos</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Leading Lagos towards a sustainable, zero-carbon future through innovative climate action and circular economy initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Welcome</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                His Excellency, Gov. Babajide Olusola Sanwo-Olu, created the Office of the Special Adviser on Climate Change & Circular Economy (OCCE) in the Ministry of Economic Planning and Budget to unlock circular economy as a way to reduce increasing carbon emissions by turning all forms of waste into resources that can create more jobs, optimize government spending and reduce carbon emissions that threaten the lives and living of the people, businesses, and government of Lagos.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Lagos State must not just act to mitigate the impacts of climate change and protect its fragile ecosystems; it must harness the enormous potential of circular economy to create opportunities for the collective well-being and prosperity of all stakeholders.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-100 to-yellow-100 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="bg-green-500 p-3 rounded-full mr-4">
                  <User className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Titi Oshodi</h3>
                  <p className="text-gray-600">Special Adviser to Lagos State Governor</p>
                  <p className="text-sm text-gray-600">Climate Change & Circular Economy</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-700">
                To accelerate the ongoing connection between people and government-driven climate actions by creating a circular economic ecosystem that can create jobs, optimize government spending, reduce emissions, and improve the well-being of all stakeholders.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <Eye className="h-8 w-8 text-yellow-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-700">
                To position Lagos as the most sustainable city on earth, leading by example in climate action and circular economy implementation across Africa and beyond.
              </p>
            </div>
          </div>

          {/* Key Focus Areas */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Key Focus Areas</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">01</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Education & Advocacy</h4>
                <p className="text-gray-600">Climate change mitigation through awareness and behavioral change</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">02</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Circular Economy</h4>
                <p className="text-gray-600">Creating platforms for sustainable economic growth and job creation</p>
              </div>
              <div className="text-center">
                <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">03</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Climate Finance</h4>
                <p className="text-gray-600">Implementing finance and budgeting processes for climate action</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;