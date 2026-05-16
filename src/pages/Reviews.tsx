import React from 'react';
import { motion } from 'motion/react';
import { Star, MessageSquare } from 'lucide-react';
import { reviews } from '../data/mockData';
import { cn } from '../utils/utils';

export default function Reviews() {
  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <p className="text-[#c20d00] font-black uppercase tracking-widest mb-4">Voice of People</p>
          <h1 className="text-6xl font-black text-gray-900 tracking-tighter">CUSTOMER REVIEWS</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 flex flex-col"
            >
              <div className="flex items-center gap-4 mb-8">
                <img src={review.avatar} alt={review.user} className="w-16 h-16 rounded-full border-2 border-[#c20d00]" />
                <div>
                  <h3 className="font-bold text-xl text-gray-900">{review.user}</h3>
                  <div className="flex gap-1 mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={cn("w-4 h-4", i < review.rating ? "fill-[#c20d00] text-[#c20d00]" : "text-gray-200")} />
                    ))}
                  </div>
                </div>
                <span className="ml-auto text-xs font-bold text-gray-400 uppercase tracking-widest">{review.date}</span>
              </div>
              <p className="text-gray-600 text-lg italic leading-relaxed flex-grow">
                "{review.comment}"
              </p>
              <div className="mt-8 pt-8 border-t border-gray-50 flex items-center gap-2 text-[#c20d00]">
                <MessageSquare className="w-4 h-4" />
                <span className="text-[10px] font-black uppercase tracking-widest">Verified Purchase</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-24 bg-gray-900 rounded-[50px] p-12 md:p-16 text-center text-white">
          <h2 className="text-4xl font-black mb-6">LOVED OUR FOOD?</h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">Your feedback helps us grow. Share your experience with the world!</p>
          <button className="bg-[#c20d00] text-white px-12 py-5 rounded-full font-black text-xl hover:scale-105 transition-transform">
            WRITE A REVIEW
          </button>
        </div>
      </div>
    </div>
  );
}
