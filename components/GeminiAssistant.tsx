
import React, { useState } from 'react';
import { getTemplateRecommendation } from '../services/geminiService';

const GeminiAssistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [suggestion, setSuggestion] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setLoading(true);
    const result = await getTemplateRecommendation(input);
    setSuggestion(result);
    setLoading(false);
  };

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100 rounded-3xl p-8 mb-12 shadow-sm">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-bold mb-4">
          <span className="material-symbols-rounded animate-pulse">magic_button</span>
          AI Powered Consultant
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Unsure which template to choose?</h2>
        <p className="text-slate-600 mb-8">Tell our AI about your project and we'll recommend the perfect match.</p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-6">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="e.g., 'I am opening a high-end Italian restaurant in New York'"
            className="flex-1 px-6 py-4 rounded-2xl border border-indigo-200 focus:ring-4 focus:ring-indigo-100 focus:border-indigo-400 outline-none transition-all shadow-sm"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-indigo-700 disabled:bg-indigo-300 transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-100"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <span className="material-symbols-rounded">search</span>
                Ask AI
              </>
            )}
          </button>
        </form>

        {suggestion && (
          <div className="bg-white rounded-2xl p-6 text-left border border-indigo-100 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-3 mb-4">
              <span className="p-2 bg-indigo-600 text-white rounded-lg material-symbols-rounded">verified</span>
              <div>
                <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Recommendation</p>
                <h4 className="text-xl font-bold text-slate-900">{suggestion.category} Template</h4>
              </div>
            </div>
            <p className="text-slate-600 leading-relaxed mb-4">{suggestion.reasoning}</p>
            {suggestion.tips && (
              <div className="space-y-2">
                <p className="text-sm font-bold text-slate-900">Suggested Focus Points:</p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {suggestion.tips.map((tip: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-500">
                      <span className="material-symbols-rounded text-green-500 text-sm">check_circle</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default GeminiAssistant;
