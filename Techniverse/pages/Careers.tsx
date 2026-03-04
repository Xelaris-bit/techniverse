import React, { useState } from 'react';
import { Upload, Briefcase, CheckCircle } from 'lucide-react';

const Careers: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="pt-20 pb-20">
      {/* Hero */}
      <section className="container mx-auto px-6 text-center mb-16">
        <h1 className="text-5xl font-tech font-bold mb-6">Build Your <span className="text-neon-blue">Future</span> With Us</h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Join a team of dreamers and doers. At Techniverse, we don't just fill positions; we unlock potential.
        </p>
      </section>

      {/* Hiring Status */}
      <section className="container mx-auto px-6 max-w-3xl mb-16">
        <div className="glass-panel p-8 rounded-2xl border-l-4 border-yellow-500 bg-yellow-500/5 text-center">
            <h2 className="text-2xl font-bold text-white mb-2">No Openings Currently</h2>
            <p className="text-gray-400">
                We are not actively hiring for any positions at the moment. However, we are always on the lookout for talented individuals.
            </p>
        </div>
      </section>

      {/* Application Form */}
      <section className="container mx-auto px-6 max-w-2xl">
        <div className="glass-panel p-8 md:p-12 rounded-3xl">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="text-neon-cyan" />
            <h3 className="text-2xl font-bold">Submit Your Resume</h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
              <input 
                type="text" 
                required
                className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
              <input 
                type="email" 
                required
                className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Role of Interest</label>
              <select className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors appearance-none">
                <option>Software Developer</option>
                <option>AI Engineer</option>
                <option>QA Tester</option>
                <option>3D Artist</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Resume / CV</label>
              <div className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center hover:border-neon-cyan/50 transition-colors cursor-pointer bg-black/20">
                <Upload className="mx-auto text-gray-500 mb-2" />
                <p className="text-sm text-gray-400">Click to upload or drag and drop</p>
                <p className="text-xs text-gray-600 mt-1">PDF, DOCX up to 5MB</p>
              </div>
            </div>

            <button 
              type="submit" 
              className={`w-full py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                submitted ? 'bg-green-500 text-white' : 'bg-neon-blue hover:bg-neon-cyan text-black'
              }`}
            >
              {submitted ? (
                <>
                  <CheckCircle size={20} /> Submitted Successfully
                </>
              ) : (
                'Submit Application'
              )}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Careers;