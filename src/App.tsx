import React, { useRef, useState } from 'react';
import { Menu, X, Download, Mail, PhoneCall, Linkedin, Github, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  
  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    setIsMenuOpen(false);
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setFormError('');

    emailjs.sendForm(
      'service_i6n6pxo', 
      'template_hgceas2', 
      formRef.current, 
      'r0uKGDfll5s-WF-Ed'
    )
    .then(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      if (formRef.current) formRef.current.reset();
    })
    .catch((error) => {
      setFormError('Something went wrong. Please try again later.');
      setIsSubmitting(false);
      console.error(error);
    });
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header/Navbar */}
      <header className="fixed w-full bg-gray-900/90 backdrop-blur-sm z-50 py-4 border-b border-gray-800">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="https://i.postimg.cc/FRmwwQR1/Dark-Green-Modern-Initial-Logo-removebg-preview-1.png" 
              alt="Logo" 
              className="h-20 mr-3"
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection(homeRef)} className="text-gray-300 hover:text-white transition">Home</button>
            <button onClick={() => scrollToSection(aboutRef)} className="text-gray-300 hover:text-white transition">About</button>
            <button onClick={() => scrollToSection(projectsRef)} className="text-gray-300 hover:text-white transition">Projects</button>
            <button onClick={() => scrollToSection(skillsRef)} className="text-gray-300 hover:text-white transition">Skills</button>
            <button onClick={() => scrollToSection(contactRef)} className="text-gray-300 hover:text-white transition">Contact</button>
            <a 
              href="/debarun-dey-resume.pdf" 
              download
              className="bg-[#3495fe] hover:bg-[#2d85e8] text-white px-4 py-2 rounded-md flex items-center gap-2 transition"
            >
              <Download size={16} />
              Download CV
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-gray-300 hover:text-white">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-md border-b border-gray-800 py-4">
            <div className="container mx-auto px-4 flex flex-col space-y-4">
              <button onClick={() => scrollToSection(homeRef)} className="text-left py-2 text-gray-300 hover:text-white transition">Home</button>
              <button onClick={() => scrollToSection(aboutRef)} className="text-left py-2 text-gray-300 hover:text-white transition">About</button>
              <button onClick={() => scrollToSection(projectsRef)} className="text-left py-2 text-gray-300 hover:text-white transition">Projects</button>
              <button onClick={() => scrollToSection(skillsRef)} className="text-left py-2 text-gray-300 hover:text-white transition">Skills</button>
              <button onClick={() => scrollToSection(contactRef)} className="text-left py-2 text-gray-300 hover:text-white transition">Contact</button>
              <a 
                href="/debarun-dey-resume.pdf" 
                download
                className="bg-[#3495fe] hover:bg-[#2d85e8] text-white px-4 py-2 rounded-md flex items-center gap-2 transition w-fit"
              >
                <Download size={16} />
                Download CV
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section ref={homeRef} className="pt-32 pb-20 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3495fe]/20 to-gray-900/20 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-[#3495fe]">Hello, I'm</span>
                <div className="mt-2">Debarun Dey</div>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-300">Computer Engineer</h2>
              <p className="text-gray-400 text-lg max-w-2xl">
                Exploring new technologies, building innovative solutions, and passionate about AI, Data Science, and Programming.
              </p>
              <div className="flex gap-4 pt-4">
                <button 
                  onClick={() => scrollToSection(projectsRef)}
                  className="bg-[#3495fe] hover:bg-[#2d85e8] text-white px-6 py-3 rounded-md transition"
                >
                  View Projects
                </button>
                <button 
                  onClick={() => scrollToSection(contactRef)}
                  className="border border-gray-600 hover:border-[#3495fe] text-gray-300 hover:text-white px-6 py-3 rounded-md transition"
                >
                  Contact Me
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#3495fe] to-blue-500 animate-pulse-slow blur-xl opacity-20"></div>
                <div className="relative rounded-full overflow-hidden border-4 border-[#3495fe]/30 p-1 bg-gray-900 w-64 h-64 md:w-80 md:h-80">
                  <img 
                    src="https://i.postimg.cc/hGKdvQgM/Whats-App-Image-2025-05-13-at-11-19-29-PM.jpg" 
                    alt="Debarun Dey" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-gray-400 flex justify-center pt-1">
            <div className="w-1 h-2 bg-gray-400 rounded-full animate-ping"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-2 text-center">About Me</h2>
            <div className="w-20 h-1 bg-[#3495fe] mx-auto mb-8"></div>
            <div className="space-y-6 text-gray-300">
              <p>
                I am a dedicated Computer Engineer with a solid academic background in Computer Science, complemented by my practical experience in volunteering. Passionate about applying my programming skills and understanding of data science in real-world projects. Eager to learn and adapt to new technologies, I thrive in challenging environments where I can further develop my knowledge.
              </p>
              
              <h3 className="text-xl font-semibold text-white pt-4">Education</h3>
              <div className="space-y-4">
                <div className="bg-gray-700/30 p-5 rounded-lg border-l-4 border-[#3495fe]">
                  <h4 className="text-lg font-medium text-white">B.Tech in Computer Science and Engineering</h4>
                  <p className="text-gray-400">Techno Engineering College Banipur</p>
                  <p className="text-gray-400">2019 - 2022</p>
                </div>
                
                <div className="bg-gray-700/30 p-5 rounded-lg border-l-4 border-[#3495fe]">
                  <h4 className="text-lg font-medium text-white">Diploma Engineering</h4>
                  <p className="text-gray-400">Kingston Polytechnic College, Kolkata, India</p>
                  <p className="text-gray-400">2016 - 2019</p>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-white pt-4">Professional Experience</h3>
              <div className="bg-gray-700/30 p-5 rounded-lg border-l-4 border-[#3495fe]">
                <h4 className="text-lg font-medium text-white">Process Associate</h4>
                <p className="text-gray-400">Genpact, Hyderabad, India</p>
                <p className="text-gray-400">June 2024 - September 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center">Projects</h2>
          <div className="w-20 h-1 bg-[#3495fe] mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* EduCore Project */}
            <div className="bg-gray-800 rounded-xl overflow-hidden transition-transform hover:scale-[1.02] border border-gray-700">
              <div className="h-60 bg-gradient-to-r from-[#3495fe] to-blue-800 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4050312/pexels-photo-4050312.jpeg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                <h3 className="text-2xl font-bold text-white relative z-10">EDUCORE</h3>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-[#3495fe]/50 text-[#3495fe] text-xs px-3 py-1 rounded-full">AI</span>
                  <span className="bg-blue-900/50 text-blue-400 text-xs px-3 py-1 rounded-full">Education</span>
                  <span className="bg-purple-900/50 text-purple-400 text-xs px-3 py-1 rounded-full">Gemini API</span>
                </div>
                <p className="text-gray-300 mb-6">
                  A dynamic educational website using Gemini AI tools and API, providing personalized learning with explanations, quizzes, and tailored content across subjects.
                </p>
                <div className="flex justify-between items-center">
                  <a 
                    href="https://github.com/debarundey/EduCore" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#3495fe] hover:text-[#2d85e8] flex items-center gap-2 transition"
                  >
                    <Github size={18} />
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
            
            {/* Portfolio Project */}
            <div className="bg-gray-800 rounded-xl overflow-hidden transition-transform hover:scale-[1.02] border border-gray-700">
              <div className="h-60 bg-gradient-to-r from-blue-800 to-purple-800 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/245032/pexels-photo-245032.jpeg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                <h3 className="text-2xl font-bold text-white relative z-10">Portfolio</h3>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-indigo-900/50 text-indigo-400 text-xs px-3 py-1 rounded-full">React</span>
                  <span className="bg-teal-900/50 text-teal-400 text-xs px-3 py-1 rounded-full">TailwindCSS</span>
                  <span className="bg-orange-900/50 text-orange-400 text-xs px-3 py-1 rounded-full">Web Design</span>
                </div>
                <p className="text-gray-300 mb-6">
                  A curated portfolio of my work, skills, and passion projects.
                </p>
                <div className="flex justify-between items-center">
                  <a 
                    href="https://github.com/debarundey/Portfolio-Website" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#3495fe] hover:text-[#2d85e8] flex items-center gap-2 transition"
                  >
                    <Github size={18} />
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-[#3495fe] mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Programming Skills */}
            <div className="bg-gray-900/80 p-6 rounded-xl border border-gray-700 hover:border-[#3495fe]/50 transition-all">
              <h3 className="text-xl font-semibold mb-4 text-white">Programming Languages</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Python</span>
                    <span className="text-[#3495fe]">90%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-[#3495fe] h-2 rounded-full" style={{width: "90%"}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>C/C++</span>
                    <span className="text-[#3495fe]">85%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-[#3495fe] h-2 rounded-full" style={{width: "85%"}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>C#</span>
                    <span className="text-[#3495fe]">75%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-[#3495fe] h-2 rounded-full" style={{width: "75%"}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>SQL</span>
                    <span className="text-[#3495fe]">80%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-[#3495fe] h-2 rounded-full" style={{width: "80%"}}></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Technologies */}
            <div className="bg-gray-900/80 p-6 rounded-xl border border-gray-700 hover:border-[#3495fe]/50 transition-all">
              <h3 className="text-xl font-semibold mb-4 text-white">Technologies</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>AI</span>
                    <span className="text-[#3495fe]">85%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-[#3495fe] h-2 rounded-full" style={{width: "85%"}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Data Science</span>
                    <span className="text-[#3495fe]">80%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-[#3495fe] h-2 rounded-full" style={{width: "80%"}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>.NET Framework</span>
                    <span className="text-[#3495fe]">70%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-[#3495fe] h-2 rounded-full" style={{width: "70%"}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Big Data</span>
                    <span className="text-[#3495fe]">75%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-[#3495fe] h-2 rounded-full" style={{width: "75%"}}></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Languages */}
            <div className="bg-gray-900/80 p-6 rounded-xl border border-gray-700 hover:border-[#3495fe]/50 transition-all">
              <h3 className="text-xl font-semibold mb-4 text-white">Languages</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Bengali (Native)</span>
                    <span className="text-[#3495fe]">100%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-[#3495fe] h-2 rounded-full" style={{width: "100%"}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>English (Proficient)</span>
                    <span className="text-[#3495fe]">90%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-[#3495fe] h-2 rounded-full" style={{width: "90%"}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Hindi (Intermediate)</span>
                    <span className="text-[#3495fe]">60%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-[#3495fe] h-2 rounded-full" style={{width: "60%"}}></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Passions */}
            <div className="bg-gray-900/80 p-6 rounded-xl border border-gray-700 hover:border-[#3495fe]/50 transition-all md:col-span-2 lg:col-span-3">
              <h3 className="text-xl font-semibold mb-4 text-white">Passions</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center gap-3 bg-gray-800/50 p-4 rounded-lg">
                  <div className="w-10 h-10 bg-[#3495fe]/20 rounded-full flex items-center justify-center text-[#3495fe]">
                    ♪
                  </div>
                  <span>Playing Guitar</span>
                </div>
                <div className="flex items-center gap-3 bg-gray-800/50 p-4 rounded-lg">
                  <div className="w-10 h-10 bg-[#3495fe]/20 rounded-full flex items-center justify-center text-[#3495fe]">
                    ♦
                  </div>
                  <span>Social Work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center">Get In Touch</h2>
          <div className="w-20 h-1 bg-[#3495fe] mx-auto mb-8"></div>
          <p className="text-gray-400 text-center max-w-xl mx-auto mb-12">
            Feel free to reach out if you have any questions or would like to discuss potential opportunities.
          </p>
          
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-[#3495fe]/50 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#3495fe]/20 rounded-full flex items-center justify-center text-[#3495fe] flex-shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">Email</h3>
                      <a href="mailto:debarun.dey98@gmail.com" className="text-gray-400 hover:text-[#3495fe] transition">
                        debarun.dey98@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-[#3495fe]/50 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#3495fe]/20 rounded-full flex items-center justify-center text-[#3495fe] flex-shrink-0">
                      <PhoneCall size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">Phone</h3>
                      <a href="tel:+916295444236" className="text-gray-400 hover:text-[#3495fe] transition">
                        +91 6295444236
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-[#3495fe]/50 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#3495fe]/20 rounded-full flex items-center justify-center text-[#3495fe] flex-shrink-0">
                      <Linkedin size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">LinkedIn</h3>
                      <a 
                        href="https://linkedin.com/in/debarun-dey" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-400 hover:text-[#3495fe] transition"
                      >
                        linkedin.com/in/debarun-dey
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-[#3495fe]/50 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#3495fe]/20 rounded-full flex items-center justify-center text-[#3495fe] flex-shrink-0">
                      <Github size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">GitHub</h3>
                      <a 
                        href="https://github.com/debarundey" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-400 hover:text-[#3495fe] transition"
                      >
                        github.com/debarundey
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 bg-gray-800 p-6 md:p-8 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold mb-6 text-white">Send me a message</h3>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium text-white mb-2">Message Sent Successfully!</h4>
                  <p className="text-gray-400">Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="user_name"
                      required
                      className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3495fe] focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="user_email"
                      required
                      className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3495fe] focus:border-transparent"
                      placeholder="Your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3495fe] focus:border-transparent resize-none"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  
                  {formError && (
                    <div className="text-red-500 text-sm">{formError}</div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-[#3495fe] hover:bg-[#2d85e8] text-white py-3 px-4 rounded-md flex items-center justify-center gap-2 transition ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">© {new Date().getFullYear()} Debarun Dey. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a 
                href="mailto:debarun.dey98@gmail.com" 
                className="text-gray-400 hover:text-[#3495fe] transition"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/debarun-dey" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-[#3495fe] transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/debarundey" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-[#3495fe] transition"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;