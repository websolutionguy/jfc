import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Send, CheckCircle2 } from 'lucide-react';

export default function Feedback() {
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <p className="text-[#c20d00] font-black uppercase tracking-widest mb-4">Improve Us</p>
          <h1 className="text-6xl font-black text-gray-900 tracking-tighter">FEEDBACK</h1>
        </div>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-gray-50 p-8 md:p-12 rounded-[50px] border border-gray-100"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="text-center">
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Rate your overall experience</p>
                  <div className="flex justify-center gap-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setRating(s)}
                        className="group relative"
                      >
                        <Star 
                          className={`w-10 h-10 transition-all ${s <= rating ? 'fill-yellow-400 text-yellow-400 scale-125' : 'text-gray-300 hover:text-yellow-200'}`} 
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Your Name</label>
                       <input required className="w-full bg-white border border-gray-100 rounded-2xl p-4 focus:outline-none focus:border-[#c20d00]" placeholder="Enter name" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Email</label>
                       <input required type="email" className="w-full bg-white border border-gray-100 rounded-2xl p-4 focus:outline-none focus:border-[#c20d00]" placeholder="Enter email" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Branch Visited</label>
                     <select className="w-full bg-white border border-gray-100 rounded-2xl p-4 focus:outline-none focus:border-[#c20d00] appearance-none">
                        <option>Dhanmondi</option>
                        <option>Uttara</option>
                        <option>Banani</option>
                        <option>Boshundhara</option>
                     </select>
                  </div>

                  <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Your Suggestions</label>
                     <textarea required rows={5} className="w-full bg-white border border-gray-100 rounded-2xl p-4 focus:outline-none focus:border-[#c20d00]" placeholder="Tell us how we can do better..." />
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={rating === 0}
                  className="w-full bg-[#c20d00] disabled:bg-gray-300 text-white py-5 rounded-full font-black text-xl flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform shadow-xl shadow-red-900/10"
                >
                  SEND FEEDBACK <Send className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white p-16 rounded-[60px] text-center shadow-2xl border border-gray-100"
            >
              <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h2 className="text-4xl font-black text-gray-900 mb-4">THANK YOU!</h2>
              <p className="text-gray-500 mb-10 leading-relaxed font-medium">Your feedback has been received. We take every suggestion seriously to serve you better.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="bg-gray-900 text-white px-10 py-4 rounded-full font-bold hover:bg-[#c20d00] transition-colors"
              >
                SEND ANOTHER
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
