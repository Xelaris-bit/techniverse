import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-20 mt-20 border-t border-white/10 bg-[#020617] pt-16 pb-8">
      <div className="absolute inset-0 bg-gradient-to-t from-neon-blue/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
               <div className="w-8 h-8 rounded-full border border-neon-cyan/50 flex items-center justify-center bg-neon-cyan/10">
                  <span className="font-tech text-neon-cyan font-bold">T</span>
               </div>
               <span className="font-tech text-xl font-bold text-white">TECHNIVERSE</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Engineering the future with intelligent technology. We turn complex challenges into digital masterpieces through AI, Software, and Design.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-gray-400 hover:text-neon-cyan hover:border-neon-cyan/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-tech text-lg font-semibold text-white mb-6 border-l-2 border-neon-violet pl-3">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Our Tools', 'Careers'].map((link) => (
                <li key={link}>
                  <Link 
                    to={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '-')}`} 
                    className="text-gray-400 hover:text-neon-cyan transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-tech text-lg font-semibold text-white mb-6 border-l-2 border-neon-blue pl-3">Services</h3>
            <ul className="space-y-3">
              {['Software Development', 'AI Agent Development', 'Quality Assurance', '3D & Media Design'].map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-gray-400 hover:text-neon-blue transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-tech text-lg font-semibold text-white mb-6 border-l-2 border-neon-cyan pl-3">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="text-neon-cyan mt-1 flex-shrink-0" size={18} />
                <span>89, Kulasukarpada,<br/>Cuttack City, 754209</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="text-neon-cyan flex-shrink-0" size={18} />
                <a href="mailto:contact.techniverse@gmail.com" className="hover:text-white transition-colors">contact.techniverse@gmail.com</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="text-neon-cyan flex-shrink-0" size={18} />
                <a href="tel:+919776198414" className="hover:text-white transition-colors">+91 9776198414</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Techniverse Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;