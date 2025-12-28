
import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { Category, Product } from '../types';
import ProductCard from '../components/ProductCard';
import GeminiAssistant from '../components/GeminiAssistant';

interface ListingProps {
  onSelect: (product: Product) => void;
}

const Listing: React.FC<ListingProps> = ({ onSelect }) => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const categories: Category[] = ['All', 'Wedding', 'Hotel', 'Portfolio', 'Business', 'Restaurant'];

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
          Premium Web <span className="text-primary-600">Templates</span>
        </h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-10">
          Kickstart your online presence with professional, high-performance static websites designed for modern businesses.
        </p>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-200'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-primary-300 hover:text-primary-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* AI Assistant */}
      <GeminiAssistant />

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} onSelect={onSelect} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-20 border-2 border-dashed border-slate-200 rounded-3xl">
          <span className="material-symbols-rounded text-6xl text-slate-300 mb-4">search_off</span>
          <p className="text-slate-500">No templates found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default Listing;
