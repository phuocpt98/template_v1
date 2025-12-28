
import React from 'react';
import { TEAM_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
        <div>
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            Our Mission
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
            Democratizing High-End Web Design
          </h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            We are a collective of freelance designers and engineers who believe that every business, regardless of size, deserves a breathtaking digital storefront. Our templates are built for performance, SEO, and visual impact.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-3xl font-black text-primary-600 mb-1">50+</p>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wide">Templates Built</p>
            </div>
            <div>
              <p className="text-3xl font-black text-primary-600 mb-1">200+</p>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wide">Happy Leads</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-primary-600 rounded-3xl rotate-3 scale-105 opacity-10"></div>
          <img 
            src="https://picsum.photos/seed/teamwork/1000/800" 
            alt="Team working" 
            className="relative w-full rounded-3xl shadow-2xl border-4 border-white"
          />
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">The Creative Minds</h2>
        <p className="text-slate-500 max-w-xl mx-auto">Meet the experts behind your future web template.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {TEAM_INFO.map((member, idx) => (
          <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-8 group hover:border-primary-200 transition-colors">
            <img src={member.avatar} alt={member.name} className="w-24 h-24 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all" />
            <div>
              <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
              <p className="text-primary-600 font-medium mb-3">{member.role}</p>
              <p className="text-slate-500 text-sm italic">"{member.bio}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
