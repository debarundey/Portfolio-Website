import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { Link } from './Link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img 
              src="https://i.postimg.cc/FRmwwQR1/Dark-Green-Modern-Initial-Logo-removebg-preview-1.png" 
              alt="Logo" 
              className="h-8 w-8"
          />
            <div className="text-2xl font-bold tracking-tight text-white">
              <span className="text-indigo-400"></span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Portfolio', 'Skills', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item}
              </Link>
            ))}
            <a
              href="/Debarun_Dey_Resume.pdf"
              download
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <Download size={18} />
              Download CV
            </a>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <nav className="md:hidden mt-4 py-4 bg-gray-900/95 backdrop-blur rounded-lg">
            <ul className="flex flex-col space-y-4">
              {['Home', 'About', 'Portfolio', 'Skills', 'Contact'].map((item) => (
                <li key={item} className="px-4">
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-white transition-colors block py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
              <li className="px-4">
                <a
                  href="/Debarun_Dey_Resume.pdf"
                  download
                  className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors w-full justify-center"
                  onClick={() => setIsOpen(false)}
                >
                  <Download size={18} />
                  Download CV
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;