import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { Link } from './Link';

const Hero: React.FC = () => {
  const typingTextRef = useRef<HTMLSpanElement>(null);
  const texts = ['Computer Engineer', 'AI Enthusiast', 'Data Science Learner'];
  const typingSpeed = 150;
  const erasingSpeed = 100;
  const delayBetweenTexts = 2000;

  useEffect(() => {
    let currentTextIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId: NodeJS.Timeout;

    const type = () => {
      const currentText = texts[currentTextIndex];
      
      if (isDeleting) {
        if (typingTextRef.current) {
          typingTextRef.current.textContent = currentText.substring(0, charIndex - 1);
        }
        charIndex--;
      } else {
        if (typingTextRef.current) {
          typingTextRef.current.textContent = currentText.substring(0, charIndex + 1);
        }
        charIndex++;
      }

      // Logic for typing and erasing
      if (!isDeleting && charIndex === currentText.length) {
        // Pause at the end of typing
        isDeleting = true;
        timeoutId = setTimeout(type, delayBetweenTexts);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        currentTextIndex = (currentTextIndex + 1) % texts.length;
        timeoutId = setTimeout(type, 500);
      } else {
        // Continue typing or erasing
        timeoutId = setTimeout(
          type,
          isDeleting ? erasingSpeed : typingSpeed
        );
      }
    };

    timeoutId = setTimeout(type, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center pt-20 pb-16 px-4"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            <span className="block mb-2">Hi, I'm</span>
            <span className="text-indigo-400">Debarun Dey</span>
          </h1>
          <div className="mt-4 h-8">
            <span className="text-xl md:text-2xl text-gray-300 inline-flex">
              <span ref={typingTextRef}></span>
              <span className="animate-blink ml-1">|</span>
            </span>
          </div>
          <p className="mt-6 text-gray-300 max-w-md mx-auto md:mx-0">
            Exploring new technologies, building innovative solutions.
          </p>
          <div className="mt-8 flex gap-4 justify-center md:justify-start">
            <Link
              href="#portfolio"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              View My Work
            </Link>
            <Link
              href="#contact"
              className="border border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white px-6 py-3 rounded-lg transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-indigo-400 shadow-xl">
              <img 
                src="https://i.postimg.cc/hGKdvQgM/Whats-App-Image-2025-05-13-at-11-19-29-PM.jpg" 
                alt="Debarun Dey" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-indigo-400 opacity-20 animate-pulse"></div>
          </div>
        </div>
      </div>

      <Link
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-indigo-400 hover:text-indigo-300 animate-bounce"
      >
        <ArrowDown size={32} />
      </Link>
    </section>
  );
};

export default Hero;