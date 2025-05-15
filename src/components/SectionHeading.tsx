import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{title}</h2>
      <div className="flex items-center justify-center">
        <div className="w-16 h-1 bg-indigo-400 rounded mr-2"></div>
        <p className="text-indigo-400 text-lg">{subtitle}</p>
        <div className="w-16 h-1 bg-indigo-400 rounded ml-2"></div>
      </div>
    </div>
  );
};

export default SectionHeading;