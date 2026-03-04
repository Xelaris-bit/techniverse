import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent! (Simulation)');
    setFormState({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
             {/* Cinematic video background simulation */}
             <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-violet/20 animate-pulse-slow"></div>
             <img src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=2071&auto=format&fit=crop" className="w-full h-full object-cover opacity-40" alt="Connect" />
        </div>
        <div className="relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-tech font-bold mb-4">Connect With <br/><span className="text-neon-cyan">Future Creators</span></h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 -mt-20 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-panel p-8 rounded-2xl flex items-start gap-6 hover:border-neon-cyan/50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-neon-cyan/20 flex items-center justify-center text-neon-cyan flex-shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Our Office</h3>
                <p className="text-gray-400">89, Kulasukarpada,<br/>Cuttack City, 754209</p>
                {/* Map Placeholder */}
                <div className="mt-4 w-full h-40 bg-gray-800 rounded-lg overflow-hidden relative group">
                    <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1748&auto=format&fit=crop" className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity" alt="Map Location" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs bg-black/70 px-2 py-1 rounded text-white">View on Map</span>
                    </div>
                </div>
              </div>
            </div>

            <div className="glass-panel p-8 rounded-2xl flex items-center gap-6 hover:border-neon-violet/50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-neon-violet/20 flex items-center justify-center text-neon-violet flex-shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                <a href="mailto:contact.techniverse@gmail.com" className="text-gray-400 hover:text-white transition-colors">contact.techniverse@gmail.com</a>
              </div>
            </div>

            <div className="glass-panel p-8 rounded-2xl flex items-center gap-6 hover:border-neon-blue/50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-neon-blue/20 flex items-center justify-center text-neon-blue flex-shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                <a href="tel:+919776198414" className="text-gray-400 hover:text-white transition-colors">+91 9776198414</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10">
            <div className="mb-8 flex items-center gap-3">
                 <MessageSquare className="text-neon-cyan" />
                 <h2 className="text-2xl font-bold">Send A Message</h2>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea 
                  rows={5}
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-4 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-lg font-bold text-black hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;