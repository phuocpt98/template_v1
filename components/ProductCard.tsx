
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  return (
    <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={product.thumbnail} 
          alt={product.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur shadow-sm rounded-full text-xs font-bold text-primary-700 uppercase tracking-wider">
            {product.category}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
          <button 
            onClick={() => onSelect(product)}
            className="w-full bg-white text-slate-900 py-2.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary-50 transition-colors"
          >
            <span className="material-symbols-rounded">visibility</span>
            View Preview
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary-600 transition-colors">
            {product.title}
          </h3>
          <span className="text-lg font-black text-slate-900">${product.price}</span>
        </div>
        <p className="text-slate-500 text-sm line-clamp-2 mb-4">
          {product.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {product.tags.slice(0, 3).map(tag => (
            <span key={tag} className="px-2 py-0.5 bg-slate-100 text-slate-500 rounded text-[10px] font-medium uppercase">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
