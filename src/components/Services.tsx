import React from 'react';
import { BookOpen, RefreshCw, DollarSign } from 'lucide-react';

const Services = () => {
  const services = [
    {
      number: '01',
      icon: BookOpen,
      title: 'Education and Advocacy to Improve Climate Change Mitigation Efforts',
      description: 'We enable the MDAs and other stakeholders within the public and private sectors with awareness, education, and advocacy programs that will improve behavioral acceptability of climate change.',
      color: 'green'
    },
    {
      number: '02',
      icon: RefreshCw,
      title: 'Create, Stimulate, and Manage the Circular Economy Platforms',
      description: 'Increase and improve employment opportunities in the state by unlocking and harnessing the opportunities within the circular economy to reduce GHG emissions.',
      color: 'yellow'
    },
    {
      number: '03',
      icon: DollarSign,
      title: 'Finance for Climate Change',
      description: 'The Office will implement finance and budgeting processes, including accessing and accounting for reporting development aid and climate finance (required and received). For example, cost mitigation and adaptation actions over the medium and long term.',
      color: 'green'
    }
  ];

  return (
    <section className="py-20 relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/9324336/pexels-photo-9324336.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-gray-50/95"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
          <p className="text-xl text-gray-600">Our key focus areas for a sustainable Lagos</p>
        </div>

        <div className="space-y-8 relative z-10">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="md:flex">
                <div className="md:w-1/4 p-8 bg-gradient-to-br from-gray-50 to-gray-100">
                  <div className="flex items-center justify-center md:justify-start mb-4">
                    <div className={`p-4 rounded-full ${service.color === 'green' ? 'bg-green-500' : 'bg-yellow-500'}`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <span className={`ml-4 text-4xl font-bold ${service.color === 'green' ? 'text-green-500' : 'text-yellow-500'}`}>
                      {service.number}
                    </span>
                  </div>
                </div>
                <div className="md:w-3/4 p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;