
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Listing from './pages/Listing';
import About from './pages/About';
import Contact from './pages/Contact';
import { PageType, Product } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>(PageType.LISTING);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [previewMode, setPreviewMode] = useState<'desktop' | 'mobile'>('desktop');

  // Simple state-based routing effect
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
  };

  const closePreview = () => {
    setPreviewUrl(null);
    setPreviewMode('desktop');
  };

  // Trình duyệt thường chặn iframe trong môi trường sandbox, hàm này giúp mở tab mới
  const openInNewTab = () => {
    if (previewUrl) {
      window.open(previewUrl, '_blank');
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case PageType.LISTING:
        return <Listing onSelect={handleProductSelect} />;
      case PageType.ABOUT:
        return <About />;
      case PageType.CONTACT:
        return <Contact />;
      default:
        return <Listing onSelect={handleProductSelect} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col text-slate-900">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="flex-1">
        {renderPage()}
      </main>

      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-slate-900 rounded flex items-center justify-center text-white">
               <span className="material-symbols-rounded text-sm">rocket_launch</span>
            </div>
            <span className="font-bold text-slate-900">EliteStudio Portfolio</span>
          </div>
          <p className="text-slate-500 text-sm mb-6">
            &copy; {new Date().getFullYear()} Elite Freelance Studio. All rights reserved. Built with React 19.
          </p>
          <div className="flex justify-center gap-8 text-sm font-medium text-slate-400">
            <a href="#" className="hover:text-primary-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary-600 transition-colors">Support</a>
          </div>
        </div>
      </footer>

      {/* Product Detail Modal */}
      {selectedProduct && !previewUrl && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div 
            className="bg-white w-full max-w-4xl max-h-[90vh] rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in slide-in-from-bottom-8 duration-500"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="md:w-1/2 relative bg-slate-100">
              <img src={selectedProduct.thumbnail} alt={selectedProduct.title} className="w-full h-full object-cover" />
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 left-4 w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-slate-900 md:hidden"
              >
                <span className="material-symbols-rounded">close</span>
              </button>
            </div>
            <div className="md:w-1/2 p-8 lg:p-12 overflow-y-auto">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-xs font-black text-primary-600 uppercase tracking-widest mb-1 block">{selectedProduct.category}</span>
                  <h2 className="text-3xl font-black text-slate-900">{selectedProduct.title}</h2>
                </div>
                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="hidden md:flex w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-full items-center justify-center text-slate-900 transition-colors"
                >
                  <span className="material-symbols-rounded">close</span>
                </button>
              </div>
              
              <div className="flex items-center gap-4 mb-8">
                <span className="text-3xl font-black text-slate-900">${selectedProduct.price}</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">ONE-TIME PAYMENT</span>
              </div>

              <p className="text-slate-600 leading-relaxed mb-8">{selectedProduct.description}</p>

              <div className="space-y-4 mb-10">
                <p className="text-sm font-black text-slate-900 uppercase tracking-wide">Included Features:</p>
                <div className="grid grid-cols-1 gap-3">
                  {selectedProduct.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-600 text-sm">
                      <span className="material-symbols-rounded text-green-500 text-lg">check_circle</span>
                      {f}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setPreviewUrl(selectedProduct.demoUrl)}
                  className="flex-1 bg-slate-900 text-white px-6 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all"
                >
                  <span className="material-symbols-rounded">rocket_launch</span>
                  Live Demo
                </button>
                <button 
                  onClick={() => {
                    setSelectedProduct(null);
                    setCurrentPage(PageType.CONTACT);
                  }}
                  className="flex-1 bg-primary-600 text-white px-6 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-primary-700 transition-all shadow-lg shadow-primary-100"
                >
                  <span className="material-symbols-rounded">shopping_bag</span>
                  Purchase Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Live Demo Viewer Overlay */}
      {previewUrl && (
        <div className="fixed inset-0 z-[110] bg-slate-900 flex flex-col animate-in fade-in duration-300">
          {/* Viewer Toolbar */}
          <div className="h-16 bg-white border-b border-slate-200 px-4 flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-4">
              <button 
                onClick={closePreview}
                className="w-10 h-10 flex items-center justify-center hover:bg-slate-100 rounded-full transition-colors"
              >
                <span className="material-symbols-rounded">arrow_back</span>
              </button>
              <div className="hidden sm:block">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] leading-none mb-1">Previewing</p>
                <p className="text-sm font-bold text-slate-900 truncate max-w-[150px] lg:max-w-[300px]">{selectedProduct?.title}</p>
              </div>
            </div>

            <div className="flex bg-slate-100 p-1 rounded-xl">
              <button 
                onClick={() => setPreviewMode('desktop')}
                className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg text-sm font-bold transition-all ${previewMode === 'desktop' ? 'bg-white text-primary-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              >
                <span className="material-symbols-rounded">desktop_windows</span>
                <span className="hidden md:inline">Desktop</span>
              </button>
              <button 
                onClick={() => setPreviewMode('mobile')}
                className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg text-sm font-bold transition-all ${previewMode === 'mobile' ? 'bg-white text-primary-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              >
                <span className="material-symbols-rounded">smartphone</span>
                <span className="hidden md:inline">Mobile</span>
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button 
                onClick={openInNewTab}
                title="Mở trong tab mới"
                className="w-10 h-10 hidden md:flex items-center justify-center bg-slate-100 text-slate-600 hover:bg-slate-200 rounded-full transition-colors"
              >
                <span className="material-symbols-rounded">open_in_new</span>
              </button>
              <button 
                onClick={() => {
                   closePreview();
                   setCurrentPage(PageType.CONTACT);
                }}
                className="bg-primary-600 text-white px-4 md:px-5 py-2 rounded-full text-xs md:text-sm font-bold hover:bg-primary-700 transition-colors"
              >
                Buy Now
              </button>
            </div>
          </div>

          {/* Iframe Area */}
          <div className="flex-1 bg-slate-100 overflow-hidden flex items-center justify-center p-4 md:p-8 relative">
             {/* Fallback Message for iframe issues */}
             <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 pointer-events-none z-0">
                <span className="material-symbols-rounded text-6xl text-slate-300 mb-4">info</span>
                <p className="text-slate-400 max-w-sm mb-4">
                  If the preview doesn't load due to browser security, please use the button below to view the demo.
                </p>
                <button 
                  onClick={openInNewTab}
                  className="pointer-events-auto bg-white border border-slate-200 px-6 py-3 rounded-xl text-sm font-bold text-slate-900 shadow-sm hover:bg-slate-50 transition-all flex items-center gap-2"
                >
                  <span className="material-symbols-rounded">open_in_new</span>
                  Open Demo in New Tab
                </button>
             </div>

             <div className={`transition-all duration-500 ease-in-out h-full z-10 ${
               previewMode === 'mobile' 
               ? 'w-[375px] max-h-[667px] border-[12px] border-slate-900 rounded-[3rem] shadow-2xl relative bg-white' 
               : 'w-full h-full bg-white rounded-xl shadow-lg border border-slate-200'
             }`}>
                {/* Mobile Camera Notch */}
                {previewMode === 'mobile' && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20 flex items-center justify-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-slate-800"></div>
                    <div className="w-8 h-1 rounded-full bg-slate-800"></div>
                  </div>
                )}
                <iframe 
                  src={previewUrl} 
                  className="w-full h-full rounded-lg border-none"
                  title="Demo Preview"
                />
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
