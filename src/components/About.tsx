import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import SectionHeading from './SectionHeading';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-800 px-4">
      <div className="container mx-auto">
        <SectionHeading title="About Me" subtitle="My Background & Journey" />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-indigo-500/20 transition-all hover:-translate-y-1">
            <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4">
              <BookOpen className="text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">My Journey</h3>
            <p className="text-gray-300">
              I'm a passionate Computer Engineer with a growing interest in programming, AI, and data science. 
              I'm constantly exploring new technologies and seeking opportunities to expand my knowledge and skills.
            </p>
          </div>
          
          <div className="bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-indigo-500/20 transition-all hover:-translate-y-1">
            <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4">
              <GraduationCap className="text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Education</h3>
            <ul className="text-gray-300 space-y-3">
              <li>
                <span className="font-medium text-indigo-400">B.Tech in C.S.E.</span>
                <p>Techno Engineering College Banipur</p>
                <p className="text-sm">CGPA: 8.76%</p>
              </li>
              <li>
                <span className="font-medium text-indigo-400">Diploma Engineering</span>
                <p>Kingston Polytechnic College</p>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-indigo-500/20 transition-all hover:-translate-y-1">
            <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4">
              <Award className="text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Goals & Aspirations</h3>
            <p className="text-gray-300">
              I'm eager to dive deeper into AI and Data Science, contribute to innovative projects, 
              and build solutions that make a positive impact. I'm always looking for opportunities to 
              learn new technologies and collaborate with like-minded professionals.
            </p>
          </div>
        </div>
        
        <div className="mt-12 bg-gray-900 rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-white mb-4">Professional Summary</h3>
          <p className="text-gray-300 leading-relaxed">
            As a Computer Engineer with a strong foundation in programming and a growing interest in 
            emerging technologies, I'm on a journey to expand my expertise in the fields of AI and Data Science. 
            I've been developing projects that showcase my skills and demonstrate my ability to create 
            innovative solutions. I believe in continuous learning and staying updated with the latest 
            technological advancements.
          </p>
          <p className="text-gray-300 leading-relaxed mt-4">
            My technical background combined with my passion for learning makes me adaptable to new challenges. 
            I'm committed to growing my skills and contributing to projects that leverage technology to 
            solve real-world problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;