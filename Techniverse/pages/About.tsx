import React from 'react';
import { Target, Eye, Rocket, User } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-10 space-y-32">
       {/* Hero / Who We Are */}
       <section className="container mx-auto px-6">
         <div className="text-center max-w-4xl mx-auto mb-20">
            <h1 className="text-5xl md:text-6xl font-tech font-bold mb-6">About <span className="text-gradient">Techniverse</span></h1>
            <p className="text-xl text-gray-300 leading-relaxed">
                We are a collective of visionaries, engineers, and artists. Techniverse was born from the idea that technology shouldn't just function—it should inspire. We blend rigorous engineering with creative design to build the digital future.
            </p>
         </div>

         {/* Mission & Vision */}
         <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="glass-panel p-10 rounded-3xl border-t border-neon-cyan/50 relative overflow-hidden group">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-neon-cyan/10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                <Target className="w-12 h-12 text-neon-cyan mb-6" />
                <h2 className="text-3xl font-tech font-bold mb-4">Our Mission</h2>
                <p className="text-gray-300">
                    To empower businesses by delivering cutting-edge, reliable, and scalable technology solutions that drive efficiency and growth in a rapidly evolving digital landscape.
                </p>
            </div>
            <div className="glass-panel p-10 rounded-3xl border-t border-neon-violet/50 relative overflow-hidden group">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-neon-violet/10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                <Eye className="w-12 h-12 text-neon-violet mb-6" />
                <h2 className="text-3xl font-tech font-bold mb-4">Our Vision</h2>
                <p className="text-gray-300">
                    To be the global leader in next-gen software and AI innovation, fostering a world where technology and human creativity coexist seamlessly to solve complex problems.
                </p>
            </div>
         </div>
       </section>

       {/* Leadership */}
       <section className="container mx-auto px-6">
         <div className="text-center mb-16">
            <h2 className="text-4xl font-tech font-bold">Meet Our Leadership</h2>
            <p className="text-gray-400 mt-4">The minds behind the machine.</p>
         </div>
         
         <div className="flex flex-col md:flex-row justify-center gap-10">
            {[
                { name: 'Anurag', role: 'Founder & CEO', color: 'border-neon-cyan', bio: 'Visionary leader with a decade of expertise in Software Architecture and Strategic Innovation.' },
                { name: 'Parshuram', role: 'Co-Founder & CFO', color: 'border-neon-violet', bio: 'Financial strategist ensuring sustainable growth and operational excellence.' }
            ].map((leader, idx) => (
                <div key={idx} className={`glass-panel p-8 rounded-2xl w-full md:w-1/3 text-center border-b-4 ${leader.color} hover:-translate-y-2 transition-transform duration-300`}>
                    <div className="w-32 h-32 mx-auto rounded-full bg-gray-800 mb-6 overflow-hidden border-2 border-white/20">
                         {/* Placeholder for leader image */}
                         <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                            <User size={40} className="text-gray-500" />
                         </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white">{leader.name}</h3>
                    <p className={`text-sm font-semibold mb-4 uppercase tracking-widest ${leader.color.replace('border-', 'text-')}`}>{leader.role}</p>
                    <p className="text-gray-400 text-sm">{leader.bio}</p>
                </div>
            ))}
         </div>
       </section>

       {/* Timeline Detail */}
       <section className="container mx-auto px-6 pb-20">
           <div className="glass-panel p-8 md:p-16 rounded-[3rem] bg-gradient-to-b from-white/5 to-transparent">
               <h2 className="text-3xl font-bold mb-12 text-center">Our Evolution</h2>
               <div className="space-y-12">
                   {[
                       { year: '2021', title: 'The Spark', desc: 'Techniverse begins operations in a small garage office, focusing on web dev.' },
                       { year: '2022', title: 'The Build', desc: 'Team expands to 15 members. QA department established.' },
                       { year: '2023', title: 'The Leap', desc: 'First Fortune 500 client acquired. 3D Design studio launched.' },
                       { year: '2024', title: 'The Future', desc: 'Development of proprietary AI Agents begins. Global expansion.' },
                   ].map((item, idx) => (
                       <div key={idx} className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                           <div className="w-24 shrink-0 text-neon-blue font-tech text-xl font-bold">{item.year}</div>
                           <div className="w-4 h-4 rounded-full bg-neon-cyan shadow-[0_0_10px_#06b6d4] hidden md:block"></div>
                           <div className="flex-grow glass-panel p-6 rounded-xl border border-white/5 hover:border-white/20 transition-colors">
                               <h3 className="text-xl font-bold text-white">{item.title}</h3>
                               <p className="text-gray-400">{item.desc}</p>
                           </div>
                       </div>
                   ))}
               </div>
           </div>
       </section>
    </div>
  );
};

export default About;