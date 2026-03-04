import React from 'react';
import { ToolItem } from '../types';

const tools: ToolItem[] = [
  // Development
  { name: 'React', category: 'Development' },
  { name: 'Node.js', category: 'Development' },
  { name: 'Python', category: 'Development' },
  { name: 'TypeScript', category: 'Development' },
  { name: 'Next.js', category: 'Development' },
  { name: 'Docker', category: 'Development' },
  { name: 'AWS', category: 'Development' },
  // AI/ML
  { name: 'TensorFlow', category: 'AI/ML' },
  { name: 'PyTorch', category: 'AI/ML' },
  { name: 'OpenAI API', category: 'AI/ML' },
  { name: 'LangChain', category: 'AI/ML' },
  // QA
  { name: 'Selenium', category: 'QA' },
  { name: 'Appium', category: 'QA' },
  { name: 'Jira', category: 'QA' },
  { name: 'Postman', category: 'QA' },
  // 3D
  { name: 'Blender', category: '3D & Media' },
  { name: 'Unity', category: '3D & Media' },
  { name: 'Unreal Engine', category: '3D & Media' },
  { name: 'Maya', category: '3D & Media' },
  { name: 'Adobe AE', category: '3D & Media' },
];

const Tools: React.FC = () => {
  const categories = Array.from(new Set(tools.map(t => t.category)));

  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="container mx-auto px-6 text-center mb-16">
        <h1 className="text-5xl font-tech font-bold mb-4">Our <span className="text-neon-violet">Arsenal</span></h1>
        <p className="text-gray-400">The cutting-edge technologies that power our innovations.</p>
      </div>

      <div className="container mx-auto px-6">
        {categories.map((category) => (
          <div key={category} className="mb-16">
            <h2 className="text-2xl font-tech font-bold mb-8 flex items-center gap-4">
              <span className="w-8 h-1 bg-neon-cyan"></span>
              {category}
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {tools.filter(t => t.category === category).map((tool, idx) => (
                <div 
                  key={idx} 
                  className="group relative glass-panel aspect-square flex flex-col items-center justify-center rounded-xl cursor-pointer hover:bg-white/5 transition-all duration-300"
                >
                  {/* Holographic borders */}
                  <div className="absolute inset-0 border border-white/5 rounded-xl group-hover:border-neon-cyan/50 transition-colors"></div>
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-cyan to-neon-violet opacity-0 group-hover:opacity-20 blur-md transition-opacity"></div>
                  
                  {/* Icon Placeholder (Text for now, typically SVGs) */}
                  <div className="text-3xl font-bold text-gray-500 group-hover:text-white transition-colors mb-2">
                    {tool.name.charAt(0)}
                  </div>
                  <span className="text-sm font-medium text-gray-400 group-hover:text-neon-cyan transition-colors">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;