import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();
  const projects = [
    { name: 'Y3Cs', description: 'Youth Climate Change Champions initiative', path: '/projects/y3cs' },
    { name: 'ECOnomy Lagos', description: 'Circular economy platform for Lagos', path: '/projects/economy-lagos' },
    { name: 'Let Our Lagos Breathe', description: 'Air quality improvement campaign', path: '/projects/let-our-lagos-breathe' },
    { name: 'Mission 50:50', description: 'Carbon reduction and job creation initiative', path: '/projects/mission-50-50' }
  ];

  return (
    <section id="projects" className="py-20 relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-white/90"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            TAKE A LOOK AT OUR PROJECTS
          </h2>
          <p className="text-xl text-gray-600">What we have been doing</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-green-50 to-yellow-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
              onClick={() => navigate(project.path)}
              onClick={() => navigate(project.path)}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                {project.name}
              </h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex items-center text-green-500 group-hover:text-green-600">
                <span className="text-sm font-medium">Learn more</span>
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;