import React from 'react';
import { Mail, Phone, Linkedin, Github, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">
              <span className="text-indigo-400">D</span>ebarun Dey
            </h2>
            <p className="text-gray-400 mt-2">
              Computer Engineer | AI Enthusiast | Data Science Learner
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="mailto:debarun.dey98@gmail.com" 
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a 
              href="tel:+916295444236" 
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors"
              aria-label="Phone"
            >
              <Phone size={18} />
            </a>
            <a 
              href="https://linkedin.com/in/your-username" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="https://github.com/your-username" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Debarun Dey. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;