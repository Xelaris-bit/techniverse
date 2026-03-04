import React from 'react';
import { Code, Bot, ShieldCheck, Box, ChevronRight, Activity, Smartphone, Layers } from 'lucide-react';
import { ServiceItem } from '../types';

const servicesList: ServiceItem[] = [
  {
    id: 'software',
    title: 'Software Development',
    description: 'Custom, scalable, and robust software solutions tailored to enterprise needs.',
    icon: Code,
    details: ['Full Stack Web Development', 'Mobile App Development (iOS/Android)', 'Enterprise Resource Planning (ERP)', 'API Integration & Microservices']
  },
  {
    id: 'ai',
    title: 'AI Agent Development',
    description: 'Next-gen autonomous agents that automate workflows and enhance decision making.',
    icon: Bot,
    details: ['LLM Integration', 'Conversational AI Chatbots', 'Predictive Analytics Models', 'Process Automation Agents']
  },
  {
    id: 'qa',
    title: 'Quality Assurance',
    description: 'Ensuring your software is bug-free, secure, and performs under pressure.',
    icon: ShieldCheck,
    details: ['Manual Functional Testing', 'Automated Testing Scripts (Selenium/Cypress)', 'Performance & Load Testing', 'Security Audits']
  },
  {
    id: '3d',
    title: '3D & Media Design',
    description: 'Visual storytelling through high-fidelity 3D modeling and motion graphics.',
    icon: Box,
    details: ['3D Product Visualization', 'Character Modeling & Animation', 'Motion Graphics for Branding', 'Immersive AR/VR Assets']
  }
];

const Services: React.FC = () => {
  return (
    <div className="pt-20 pb-40">
      <div className="container mx-auto px-6 text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-tech font-bold mb-6">Our <span className="text-neon-cyan">Services</span></h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          We deliver comprehensive technology solutions designed to propel your business into the future.
        </p>
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Stacked Cards Container */}
        <div className="space-y-12">
          {servicesList.map((service, index) => (
            <div 
              key={service.id} 
              className="sticky top-28 min-h-[70vh] glass-panel rounded-3xl p-8 md:p-16 border border-white/10 shadow-2xl transition-all duration-500 overflow-hidden"
              style={{
                // Subtle stagger effect for visual depth
                marginTop: `${index * 20}px`, 
                zIndex: index + 1,
                backgroundColor: '#020617', // Need solid bg behind glass to cover previous cards
                backgroundImage: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0.4) 100%)'
              }}
            >
              <div className="absolute top-0 right-0 p-32 bg-neon-blue/10 rounded-full blur-[100px] pointer-events-none"></div>
              
              <div className="flex flex-col md:flex-row gap-12 h-full">
                <div className="md:w-1/3 flex flex-col justify-between">
                  <div>
                    <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-neon-cyan mb-8">
                      <service.icon size={40} />
                    </div>
                    <h2 className="text-4xl font-bold mb-6">{service.title}</h2>
                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                      {service.description}
                    </p>
                  </div>
                  <button className="w-max px-6 py-3 border border-neon-cyan text-neon-cyan rounded-lg hover:bg-neon-cyan hover:text-black transition-all duration-300 flex items-center gap-2">
                    Start Project <ChevronRight size={18} />
                  </button>
                </div>

                <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 content-center">
                  {service.details.map((detail, idx) => (
                    <div key={idx} className="glass-panel p-6 rounded-xl bg-black/20 hover:bg-white/5 transition-colors flex items-start gap-4">
                      <div className="mt-1">
                        {idx % 2 === 0 ? <Activity size={20} className="text-neon-violet" /> : <Layers size={20} className="text-neon-blue" />}
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">{detail}</h4>
                        <p className="text-xs text-gray-500">Professional Grade</p>
                      </div>
                    </div>
                  ))}
                  
                  {/* Decorative Image area for visual interest */}
                  <div className="col-span-1 sm:col-span-2 mt-4 h-48 rounded-xl overflow-hidden glass-panel opacity-60">
                     <img 
                        src={`https://picsum.photos/seed/${service.id}/800/400`} 
                        alt={service.title} 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                     />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;