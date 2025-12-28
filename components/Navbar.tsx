
import React from 'react';
import { PageType } from '../types';

interface NavbarProps {
  currentPage: PageType;
  setCurrentPage: (page: PageType) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { label: 'Products', page: PageType.LISTING, icon: 'grid_view' },
    { label: 'About Us', page: PageType.ABOUT, icon: 'info' },
    { label: 'Contact', page: PageType.CONTACT, icon: 'mail' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => setCurrentPage(PageType.LISTING)}
          >
            <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary-200 group-hover:scale-110 transition-transform">
              <span className="material-symbols-rounded">rocket_launch</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary-700 to-primary-500 bg-clip-text text-transparent">
              EliteStudio
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => setCurrentPage(item.page)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  currentPage === item.page
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-slate-600 hover:text-primary-600 hover:bg-slate-50'
                }`}
              >
                <span className="material-symbols-rounded text-lg">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>

          <button 
            onClick={() => setCurrentPage(PageType.CONTACT)}
            className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-colors flex items-center gap-2"
          >
            Get a Quote
            <span className="material-symbols-rounded text-sm">arrow_forward</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
