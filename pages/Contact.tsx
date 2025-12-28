
import React, { useState } from 'react';
import { GOOGLE_SHEET_URL } from '../constants';
import { ContactFormData } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    service: 'Template Customization',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Logic for submitting to Google Sheets via Apps Script Web App
      // In a real scenario, you'd fetch(GOOGLE_SHEET_URL, { method: 'POST', body: JSON.stringify(formData) });
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
      console.log('Lead captured:', formData);
      setStatus('success');
      setFormData({ name: '', email: '', service: 'Template Customization', message: '' });
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 grid lg:grid-cols-2">
        <div className="bg-slate-900 p-12 lg:p-16 text-white flex flex-col justify-between">
          <div>
            <span className="text-primary-400 font-bold uppercase tracking-widest text-sm mb-6 block">Get in touch</span>
            <h1 className="text-4xl font-black mb-8 leading-tight">Ready to launch your project?</h1>
            <p className="text-slate-400 text-lg mb-12">Fill out the form and our team will get back to you within 24 hours with a custom proposal.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-rounded text-primary-400">alternate_email</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email Us</p>
                  <p className="font-medium">hello@elitestudio.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-rounded text-primary-400">call</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Call Us</p>
                  <p className="font-medium">+84 123 456 789</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-16 border-t border-white/10 mt-16 flex gap-4">
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-600 transition-colors cursor-pointer">
              <span className="material-symbols-rounded text-sm">public</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-600 transition-colors cursor-pointer">
              <span className="material-symbols-rounded text-sm">share</span>
            </div>
          </div>
        </div>

        <div className="p-12 lg:p-16">
          {status === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center text-center animate-in zoom-in duration-500">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-rounded text-4xl">check_circle</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h2>
              <p className="text-slate-500 mb-8">We've received your inquiry and will contact you shortly.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="text-primary-600 font-bold hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                  <input 
                    required
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="John Doe" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-4 focus:ring-primary-50 focus:border-primary-500 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                  <input 
                    required
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="john@example.com" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-4 focus:ring-primary-50 focus:border-primary-500 outline-none transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Interested Service</label>
                <select 
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-4 focus:ring-primary-50 focus:border-primary-500 outline-none transition-all bg-white"
                >
                  <option>Template Customization</option>
                  <option>New Website Design</option>
                  <option>SEO Optimization</option>
                  <option>E-commerce setup</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Your Message</label>
                <textarea 
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell us about your project..." 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-4 focus:ring-primary-50 focus:border-primary-500 outline-none transition-all"
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-primary-600 text-white py-4 rounded-xl font-bold hover:bg-primary-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary-100 disabled:bg-primary-300"
              >
                {status === 'loading' ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span className="material-symbols-rounded">send</span>
                    Send Message
                  </>
                )}
              </button>
              {status === 'error' && (
                <p className="text-red-500 text-sm font-bold text-center">Something went wrong. Please try again.</p>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
