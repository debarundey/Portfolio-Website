import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import SectionHeading from './SectionHeading';

const Portfolio: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'EduCore',
      description: 'A dynamic educational website built using the Gemini API, providing interactive learning experiences and resources.',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      github: 'https://github.com/your-username/educore',
      technologies: ['React', 'Gemini API', 'Tailwind CSS', 'JavaScript'],
      featured: true
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-900 px-4">
      <div className="container mx-auto">
        <SectionHeading title="My Projects" subtitle="Recent Work" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-indigo-500/20 transition-all hover:-translate-y-2 md:col-span-2 lg:col-span-1"
            >
              <div className="h-52 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <span className="bg-indigo-600 text-white text-xs px-2 py-1 rounded">Featured</span>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-gray-700 text-indigo-300 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/your-username" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            <Github size={20} />
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;