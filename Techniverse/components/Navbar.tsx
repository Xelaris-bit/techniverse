import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Our Tools', path: '/tools' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact Us', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-panel border-b border-white/5 py-3 shadow-lg backdrop-blur-xl bg-[#020617]/80'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group" onClick={closeMenu}>
          <div className="relative w-10 h-10 flex items-center justify-center">
             {/* Logo Icon Concept: T merged with Orbit/Grid */}
             <svg viewBox="0 0 100 100" className="w-full h-full text-neon-cyan group-hover:text-neon-blue transition-colors duration-300">
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-30" />
                <path d="M50 10 L50 90 M10 50 L90 50" stroke="currentColor" strokeWidth="0.5" className="opacity-20" />
                {/* Orbital Rings */}
                <ellipse cx="50" cy="50" rx="40" ry="10" stroke="currentColor" strokeWidth="2" className="opacity-60 animate-spin-slow origin-center" style={{transformBox: 'fill-box'}} />
                {/* The T */}
                <path d="M30 35 H70 M50 35 V80" stroke="currentColor" strokeWidth="6" strokeLinecap="round" className="drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
             </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-tech text-xl font-bold tracking-wider text-white group-hover:text-neon-cyan transition-colors">
              TECHNIVERSE
            </span>
            <span className="text-[10px] tracking-[0.2em] text-gray-400 uppercase">PVT. LTD.</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-sm font-medium tracking-wide transition-colors duration-300 hover:text-neon-cyan ${
                  isActive ? 'text-neon-cyan' : 'text-gray-300'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-neon-cyan shadow-[0_0_8px_rgba(6,182,212,1)] rounded-full"></span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white hover:text-neon-cyan transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 top-[70px] bg-[#020617]/95 backdrop-blur-2xl transform transition-transform duration-300 border-t border-white/10 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8 p-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={closeMenu}
              className={`text-2xl font-tech font-bold transition-all duration-300 ${
                location.pathname === item.path
                  ? 'text-neon-cyan drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;