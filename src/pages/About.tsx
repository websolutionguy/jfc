import React from 'react';
import { motion } from 'motion/react';
import { Award, Users, Target, Clock, ShieldCheck, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-24 pb-24 bg-white overflow-hidden">
      {/* Hero */}
      <section className="py-24 px-4 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[#c20d00] font-black uppercase tracking-widest mb-4"
            >
              Our Story
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-black tracking-tighter text-gray-900 leading-[0.85] mb-8"
            >
              THE LEGEND <br /> OF <span className="text-[#c20d00]">CRUNCH</span>
            </motion.h1>
            <p className="text-lg text-gray-500 leading-relaxed">
              Founded in 2002, JFC started with a simple mission: to serve Dhaka's most authentic, crispy, and flavorful fried chicken. Today, we are proud to be a household name across Bangladesh.
            </p>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
             <motion.div 
               whileHover={{ scale: 1.05 }}
               className="aspect-[4/5] rounded-[40px] overflow-hidden rotate-[-5deg]"
             >
               <img src="https://images.unsplash.com/photo-1544025162-d76694265947?w=800" className="w-full h-full object-cover" />
             </motion.div>
             <motion.div 
               whileHover={{ scale: 1.05 }}
               className="aspect-[4/5] rounded-[40px] overflow-hidden translate-y-12 rotate-[5deg]"
             >
               <img src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800" className="w-full h-full object-cover" />
             </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: Heart, title: "Purest Ingredients", text: "We source our chicken and vegetables from trusted local farms to ensure maximum freshness." },
            { icon: ShieldCheck, title: "Hygiene First", text: "Our kitchens follow world-class safety standards. Cleanliness is in our DNA." },
            { icon: Target, title: "Secret Recipe", text: "It's all in the blend. Our 11-spice marinade is a recipe passed down through generations." }
          ].map((val, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-[40px] bg-white border border-gray-100 hover:border-[#c20d00] transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/5 text-center"
            >
              <div className="w-16 h-16 bg-[#c20d00]/5 text-[#c20d00] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#c20d00] group-hover:text-white transition-colors">
                <val.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">{val.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{val.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-5xl font-black mb-24 text-center">OUR JOURNEY</h2>
          <div className="relative border-l-2 border-white/10 ml-6 md:ml-0 md:border-l-0 md:grid md:grid-cols-4 md:gap-8">
            {[
              { year: '2002', event: 'First branch opens in Dhanmondi, Dhaka.' },
              { year: '2010', event: 'Reached 10 outlets across the capital city.' },
              { year: '2018', event: 'Introduced the legendary Zinger Burger combo.' },
              { year: '2024', event: '25+ branches nationwide and still growing!' }
            ].map((item, i) => (
              <div key={i} className="mb-12 md:mb-0 relative pl-12 md:pl-0">
                <div className="absolute top-0 left-[-7px] md:static w-3 h-3 bg-[#c20d00] rounded-full mb-6 shadow-[0_0_15px_#c20d00]"></div>
                <h4 className="text-4xl font-black text-[#c20d00] mb-2">{item.year}</h4>
                <p className="text-gray-400 font-medium">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
