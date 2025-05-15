import React from 'react';
import { Activity } from 'lucide-react';
import SectionHeading from './SectionHeading';

interface Skill {
  category: string;
  items: {
    name: string;
    level: number;
    icon: React.ReactNode;
  }[];
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    {
      category: 'Programming Languages',
      items: [
        { 
          name: 'Python', 
          level: 80,
          icon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-indigo-400" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.585 11.692h4.328s2.432.039 2.432-2.35V5.391S16.714 3 11.936 3C7.362 3 7.647 5.391 7.647 5.391v2.38h4.64v.576h-6.37S3 8.115 3 12.773c0 4.658 2.647 4.485 2.647 4.485h1.578v-2.372s-.08-2.642 2.555-2.642h4.406s2.146.08 2.146-2.146v-3.616s.288-2.181-2.333-2.181h-4.414z"></path><circle cx="8.522" cy="5.55" r=".875"></circle><path d="M20.935 8.445h-1.58v2.338s.106 2.755-2.607 2.755h-4.407s-2.24-.03-2.24 2.18v3.618s-.337 2.26 2.384 2.26h4.412s2.388.184 2.388-2.195v-2.338h-4.64v-.576h6.37s2.864.152 2.864-4.659c0-4.812-2.944-3.383-2.944-3.383z"></path><circle cx="15.478" cy="18.888" r=".875"></circle></svg>
        },
        { 
          name: 'JavaScript', 
          level: 50,
          icon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-indigo-400" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.113-.484.687-.629 1.137-.495.293.09.563.315.732.676.775-.507.775-.507 1.316-.844-.203-.314-.304-.451-.439-.586-.473-.528-1.103-.798-2.126-.775l-.528.067c-.507.124-.991.395-1.283.754-.855.968-.608 2.655.427 3.354 1.023.765 2.521.933 2.712 1.653.18.878-.652 1.159-1.475 1.058-.607-.136-.945-.439-1.316-1.002l-1.372.788c.157.359.337.517.607.832 1.305 1.316 4.568 1.249 5.153-.754.021-.067.18-.528.056-1.237l.034.049zm-6.737-5.434h-1.686c0 1.453-.007 2.898-.007 4.354 0 .924.047 1.772-.104 2.033-.247.517-.886.451-1.175.359-.297-.146-.448-.349-.623-.641-.047-.078-.082-.146-.095-.146l-1.368.844c.229.473.563.879.994 1.137.641.383 1.502.507 2.404.305.588-.17 1.095-.519 1.358-1.059.384-.697.302-1.553.299-2.509.008-1.541 0-3.083 0-4.635l.003-.042z"></path></svg>
        },
        { 
          name: 'SQL', 
          level: 60,
          icon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-indigo-400" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M19 19H5V5H19V19M7 16V11H9.5C10.2 11 11 10.5 11 9.5C11 8.5 10.2 8 9.5 8H7V6H11V8C12.1 8 13 8.9 13 10C13 11.1 12.1 12 11 12H9V16H7M15 16V14H17V16H15M13 16V12C13 11.5 13.5 11 14 11H15.5C16.5 11 17 11.5 17 12V14C17 14.5 16.5 15 16 15H15V16H13Z"></path></svg>
        },
      ],
    },
    {
      category: 'Technologies & Tools',
      items: [
        { 
          name: 'AI & Machine Learning', 
          level: 70,
          icon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-indigo-400" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.9995 4.09996C12.8341 4.09996 13.507 3.42713 13.507 2.59248C13.507 1.75782 12.8341 1.08499 11.9995 1.08499C11.1649 1.08499 10.492 1.75782 10.492 2.59248C10.492 3.42713 11.1649 4.09996 11.9995 4.09996Z"></path><path d="M16.8201 12.4904H13.19V9.95119H18.0965C18.6457 9.95119 19.0943 9.50267 19.0943 8.95342V8.23578C19.0943 6.08872 17.3542 4.34863 15.2071 4.34863H13.1898V2.9375H15.9192C16.4684 2.9375 16.917 2.48897 16.917 1.93973C16.917 1.39048 16.4684 0.94196 15.9192 0.94196H8.07962C7.53037 0.94196 7.08185 1.39048 7.08185 1.93973C7.08185 2.48897 7.53037 2.9375 8.07962 2.9375H10.8092V4.34888H8.7918C6.64472 4.34888 4.90465 6.08896 4.90465 8.23602V8.95366C4.90465 9.50291 5.35317 9.95144 5.90242 9.95144H10.809V12.4906H7.17887C5.03179 12.4906 3.29172 14.2307 3.29172 16.3778V17.0954C3.29172 17.6447 3.74024 18.0932 4.28949 18.0932H7.17887V21.0619C7.17887 21.6112 7.62739 22.0597 8.17664 22.0597C8.72589 22.0597 9.17441 21.6112 9.17441 21.0619V18.0932H14.8242V21.0619C14.8242 21.6112 15.2727 22.0597 15.822 22.0597C16.3712 22.0597 16.8197 21.6112 16.8197 21.0619V18.0932H19.7092C20.2585 18.0932 20.707 17.6447 20.707 17.0954V16.3778C20.7073 14.2307 18.9672 12.4904 16.8201 12.4904Z"></path></svg>
        },
        { 
          name: 'Data Science', 
          level: 75,
          icon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-indigo-400" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M10 19H8V12H10V19M14 19H12V8H14V19M18 19H16V4H18V19Z"></path></svg>
        },
        { 
          name: 'Web Development', 
          level: 55,
          icon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-indigo-400" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm8 11h-3.142c-.101 1.968-.425 3.783-.899 5.227 1.774-.663 3.34-1.979 4.041-3.682v-1.545zm-8.893 0H8.908c.083 1.802.277 3.714.592 5.288.232.15.464.278.7.377.23-.098.465-.225.693-.372.32-1.57.518-3.483.602-5.293h.002zm5.368 0h-3.573c-.085 1.723-.284 3.469-.592 5 .595-.164 1.178-.51 1.76-1.394.686-1.07 1.049-2.330 1.199-3.606h1.206zm-8.627 0c.151 1.276.512 2.536 1.199 3.606.581.885 1.164 1.23 1.76 1.394-.309-1.531-.509-3.277-.592-5h-2.367zm-4.854 0h3.142c-.1 1.968-.424 3.783-.898 5.227-1.775-.663-3.34-1.979-4.042-3.682v-1.545h1.798zm3.142-1H4.006v-1.545c.7-1.703 2.267-3.019 4.042-3.682.473 1.443.798 3.259.898 5.227H5.994zm7.014 0H8.908c-.084-1.81-.282-3.722-.602-5.293-.229-.147-.463-.274-.693-.372-.236.099-.468.227-.699.378-.315 1.572-.509 3.485-.591 5.287h5.685zm-1.232 0h2.367c-.151-1.276-.513-2.536-1.199-3.606-.581-.885-1.164-1.23-1.76-1.394.309 1.531.507 3.276.592 5zm4.705 0h-3.142c.101-1.968.427-3.783.899-5.227 1.773.662 3.338 1.979 4.041 3.682v1.545h-1.798z"></path></svg>
        },
      ],
    },
    {
      category: 'Soft Skills',
      items: [
        { 
          name: 'Problem Solving', 
          level: 85,
          icon: <Activity className="text-indigo-400" size={24} />,
        },
        { 
          name: 'Communication', 
          level: 75,
          icon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-indigo-400" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2M20 16H5.2L4 17.2V4H20V16Z"></path></svg>
        },
        { 
          name: 'Teamwork', 
          level: 80,
          icon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-indigo-400" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM15.5 7C16.328 7 17 7.672 17 8.5C17 9.328 16.328 10 15.5 10C14.672 10 14 9.328 14 8.5C14 7.672 14.672 7 15.5 7ZM8.5 7C9.328 7 10 7.672 10 8.5C10 9.328 9.328 10 8.5 10C7.672 10 7 9.328 7 8.5C7 7.672 7.672 7 8.5 7ZM12 19C8 19 5.667 16.333 5 14H19C18.333 16.333 16 19 12 19Z"></path></svg>
        },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800 px-4">
      <div className="container mx-auto">
        <SectionHeading title="Skills & Expertise" subtitle="What I Can Do" />
        
        <div className="mt-12 space-y-12">
          {skills.map((skillCategory, index) => (
            <div key={index} className="bg-gray-900 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-white mb-6">{skillCategory.category}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skillCategory.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex items-center gap-3 mb-2">
                      {skill.icon}
                      <h4 className="text-lg font-medium text-white">{skill.name}</h4>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div 
                        className="bg-indigo-500 h-2.5 rounded-full transition-all duration-1000 ease-out group-hover:bg-indigo-400"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-end mt-1">
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;