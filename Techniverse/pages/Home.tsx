import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Bot, ShieldCheck, Box, ChevronRight, CheckCircle2, Award, Zap, Users, Globe } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="space-y-32">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Cinematic Video/Image Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
            alt="Futuristic Earth" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-transparent to-[#020617]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-neon-cyan/30 mb-8 animate-float">
            <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse"></div>
            <span className="text-neon-cyan text-sm tracking-wider font-semibold">THE FUTURE OF TECHNOLOGY</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-tech font-bold mb-8 leading-tight">
            Engineering the <span className="text-gradient drop-shadow-[0_0_20px_rgba(139,92,246,0.3)]">Future</span><br />
            with Intelligent Tech
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
            Pioneering digital ecosystems through Software Development, AI Agents, Quality Assurance, and Immersive 3D Design. We build what's next.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/services" className="px-8 py-4 bg-neon-cyan text-black font-bold rounded-lg hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] flex items-center gap-2 group">
              Explore Our Work
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="px-8 py-4 glass-panel border-white/20 text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-md">
              Request Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="container mx-auto px-6">
        <div className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden border-t border-white/10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon-blue/10 rounded-full blur-[80px]"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-tech font-bold mb-6">Who We Are?</h2>
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                Techniverse Pvt. Ltd. is not just a tech company; we are an innovation lab. Born from a passion for precision and progress, we bridge the gap between imagination and reality using code, data, and design.
              </p>
              <ul className="space-y-4 mb-8">
                {['Innovation-Driven Ecosystem', 'Global Tech Standards', 'Client-Centric Development'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-neon-cyan" />
                    <span className="text-white font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="text-neon-cyan hover:text-white font-semibold flex items-center gap-2 transition-colors">
                Read our full story <ChevronRight size={16} />
              </Link>
            </div>
            <div className="relative">
              <div className="w-full h-[400px] rounded-2xl overflow-hidden glass-panel border-white/5 group">
                <img 
                  src="https://images.unsplash.com/photo-1531297461136-82af022f5b79?q=80&w=2070&auto=format&fit=crop" 
                  alt="Tech Innovation" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-neon-violet text-sm tracking-widest font-bold uppercase">Our DNA</span>
          <h2 className="text-4xl font-tech font-bold mt-2">Core Values</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { title: 'Integrity', icon: ShieldCheck, color: 'text-green-400' },
            { title: 'Innovation', icon: Zap, color: 'text-yellow-400' },
            { title: 'Precision', icon: Code, color: 'text-neon-cyan' },
            { title: 'Collaboration', icon: Users, color: 'text-neon-blue' },
            { title: 'Excellence', icon: Award, color: 'text-neon-violet' }
          ].map((val, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-2xl text-center glass-card-hover group transition-all duration-300 hover:-translate-y-2">
              <div className={`w-14 h-14 mx-auto mb-4 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform ${val.color}`}>
                <val.icon size={28} />
              </div>
              <h3 className="text-lg font-bold mb-2">{val.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Services Summary */}
      <section className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
             <span className="text-neon-cyan text-sm tracking-widest font-bold uppercase">What We Do</span>
             <h2 className="text-4xl font-tech font-bold mt-2">Our Best Services</h2>
          </div>
          <Link to="/services" className="hidden md:flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            View All Services <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Software Dev', icon: Code, desc: 'Scalable web & mobile apps built with modern stacks.' },
            { title: 'AI Agents', icon: Bot, desc: 'Intelligent automation driven by generative AI models.' },
            { title: 'Quality Assurance', icon: ShieldCheck, desc: 'Rigorous manual & automated testing protocols.' },
            { title: '3D & Media', icon: Box, desc: 'Immersive 3D modeling, animation, and VFX.' },
          ].map((service, idx) => (
            <div key={idx} className="glass-panel p-8 rounded-2xl group hover:bg-white/5 transition-all duration-300 border-l-2 border-transparent hover:border-l-neon-cyan">
              <service.icon className="w-10 h-10 text-neon-cyan mb-6 group-hover:animate-bounce" />
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{service.desc}</p>
              <Link to="/services" className="text-sm font-semibold text-neon-cyan flex items-center gap-1 group-hover:gap-2 transition-all">
                Discover More <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
            <Link to="/services" className="inline-flex items-center gap-2 text-white border-b border-neon-cyan pb-1">
                View All Services <ArrowRight size={18} />
            </Link>
        </div>
      </section>

      {/* Journey / Timeline Preview */}
      <section className="container mx-auto px-6 py-12 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-tech font-bold">Our Journey</h2>
        </div>
        <div className="relative border-l-2 border-white/10 ml-4 md:ml-auto md:mx-auto max-w-4xl pl-8 space-y-12">
            {[
                { year: '2021', title: 'Inception', desc: 'Techniverse founded with a vision to disrupt tech.' },
                { year: '2022', title: 'Expansion', desc: 'Opened new verticals in AI and QA Automation.' },
                { year: '2023', title: 'Global Reach', desc: 'Partnered with international clients for 3D Media.' },
                { year: '2024', title: 'AI Revolution', desc: 'Launching proprietary AI Agent frameworks.' },
            ].map((item, idx) => (
                <div key={idx} className="relative group">
                    <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#020617] border-2 border-neon-cyan group-hover:bg-neon-cyan transition-colors"></span>
                    <div className="glass-panel p-6 rounded-xl hover:translate-x-2 transition-transform duration-300">
                        <span className="text-neon-violet font-mono text-sm">{item.year}</span>
                        <h4 className="text-xl font-bold text-white mt-1">{item.title}</h4>
                        <p className="text-gray-400 mt-2">{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* Why Partner With Us (Dashboard style) */}
      <section className="container mx-auto px-6">
        <div className="glass-panel rounded-3xl p-8 border border-white/10 bg-gradient-to-br from-white/5 to-transparent relative overflow-hidden">
            <div className="absolute top-0 right-0 p-32 bg-neon-blue/20 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-1/3">
                    <h2 className="text-3xl font-tech font-bold mb-4">Why Partner With Us?</h2>
                    <p className="text-gray-300 mb-8">
                        We don't just write code; we architect solutions. Our metrics speak for our dedication to precision and innovation.
                    </p>
                    <Link to="/contact" className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg text-white font-semibold transition-colors">
                        Start a Project
                    </Link>
                </div>
                
                <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="glass-panel bg-black/40 p-6 rounded-xl text-center border-t-2 border-neon-cyan">
                        <div className="text-4xl font-bold text-white mb-2">98%</div>
                        <div className="text-gray-400 text-sm">Client Retention</div>
                    </div>
                    <div className="glass-panel bg-black/40 p-6 rounded-xl text-center border-t-2 border-neon-violet">
                        <div className="text-4xl font-bold text-white mb-2">50+</div>
                        <div className="text-gray-400 text-sm">Enterprise Projects</div>
                    </div>
                    <div className="glass-panel bg-black/40 p-6 rounded-xl text-center border-t-2 border-neon-blue">
                        <div className="text-4xl font-bold text-white mb-2">24/7</div>
                        <div className="text-gray-400 text-sm">Support & Maintenance</div>
                    </div>
                    
                    <div className="md:col-span-3 glass-panel bg-black/40 p-6 rounded-xl flex items-center justify-between">
                         <div className="flex items-center gap-4">
                             <Globe className="text-neon-cyan" />
                             <div>
                                 <h4 className="font-bold">Global Standards</h4>
                                 <p className="text-xs text-gray-400">ISO Certified Processes</p>
                             </div>
                         </div>
                         <div className="h-10 w-[1px] bg-white/10"></div>
                          <div className="flex items-center gap-4">
                             <Zap className="text-yellow-400" />
                             <div>
                                 <h4 className="font-bold">Fast Delivery</h4>
                                 <p className="text-xs text-gray-400">Agile Methodology</p>
                             </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 text-center py-20">
        <h2 className="text-3xl md:text-5xl font-tech font-bold mb-8 max-w-4xl mx-auto">
          Drive Development And Innovation Forward With Our <span className="text-neon-cyan">Industry-Leading Expertise</span>
        </h2>
        <Link 
            to="/contact" 
            className="inline-block px-10 py-5 bg-gradient-to-r from-neon-blue to-neon-violet rounded-full text-white font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_40px_rgba(139,92,246,0.5)] animate-pulse-slow"
        >
            Contact Us Today
        </Link>
      </section>
    </div>
  );
};

export default Home;