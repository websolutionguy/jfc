import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Utensils, Award, Users, MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products, categories, reviews } from '../data/mockData';
import FoodCard from '../components/FoodCard';
import { cn } from '../utils/utils';

export default function Home() {
  const popularProducts = products.filter(p => p.isPopular);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-black text-white px-4">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544025162-d76694265947?w=1600&auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover opacity-40"
            alt="Hero BG"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black"></div>
        </div>

        <div className="relative z-10 max-w-5xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#c20d00] font-black uppercase tracking-[0.3em] mb-6 text-sm md:text-base"
          >
            Est. 2002 • Dhaka
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="text-5xl md:text-8xl font-black tracking-tighter leading-[1] mb-12 uppercase"
          >
            CRUNCHY  <span className="text-[#c20d00]">COLOSSAL</span> <br />
            TASTE
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <Link 
              to="/menu" 
              className="group bg-[#c20d00] text-white px-10 py-5 rounded-full font-black text-lg flex items-center gap-3 hover:bg-white hover:text-[#c20d00] transition-all duration-300 shadow-2xl shadow-red-900/40"
            >
              ORDER NOW <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link 
              to="/gallery" 
              className="text-white font-bold text-lg hover:text-[#c20d00] transition-colors underline-offset-8 underline"
            >
              EXPLORE GALLERY
            </Link>
          </motion.div>
        </div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
        >
          <div className="w-px h-12 bg-white/20 mx-auto"></div>
          <p className="text-[10px] uppercase font-bold tracking-widest mt-2">Scroll</p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Utensils, label: 'Daily Orders', value: '5K+' },
              { icon: Award, label: 'Quality Awards', value: '12' },
              { icon: Users, label: 'Happy Customers', value: '1M+' },
              { icon: MapPin, label: 'Total Branches', value: '25+' },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-[#c20d00] mx-auto mb-4" />
                <h3 className="text-4xl font-black text-gray-900 mb-1">{stat.value}</h3>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="text-[#c20d00] font-black uppercase tracking-widest mb-4">Our Signature</p>
              <h2 className="text-5xl font-black tracking-tight text-gray-900">POPULAR ITEMS</h2>
            </div>
            <Link to="/menu" className="text-gray-900 font-bold hover:text-[#c20d00] transition-colors flex items-center gap-2">
              View Full Menu <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularProducts.slice(0, 9).map((product) => (
              <FoodCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Horizontal */}
      <section className="py-24 bg-black overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 mb-16">
          <h2 className="text-white text-4xl font-black tracking-tight">CATEGORIES</h2>
        </div>
        
        <div className="flex gap-4 px-4 md:px-6 overflow-x-auto pb-12">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="shrink-0 w-64 h-80 rounded-3xl overflow-hidden relative group cursor-pointer"
            >
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-white font-black text-xl mb-2">{cat.name}</h3>
                <Link to="/menu" className="text-[#c20d00] text-xs font-bold uppercase tracking-widest flex items-center gap-1 group-hover:gap-3 transition-all">
                  Shop Now <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Banner / Offer Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <img 
          src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=1600&auto=format&fit=crop&q=80" 
          className="absolute inset-0 w-full h-full object-cover"
          alt="Banner"
        />
        <div className="absolute inset-0 bg-[#c20d00]/90 mix-blend-multiply"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">GET 15% OFF <br /> ON FIRST ORDER</h2>
          <Link 
            to="/menu" 
            className="bg-white text-[#c20d00] px-12 py-5 rounded-full font-black text-xl hover:scale-105 transition-transform"
          >
            USE CODE: JFC2024
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <p className="text-[#c20d00] font-black uppercase tracking-widest mb-4">Testimonials</p>
          <h2 className="text-5xl font-black text-gray-900 mb-16">WHAT THEY SAY</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-left">
            {reviews.map((review) => (
              <motion.div 
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-3xl border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img src={review.avatar} alt={review.user} className="w-12 h-12 rounded-full border-2 border-[#c20d00]" />
                  <div>
                    <h4 className="font-bold text-gray-900">{review.user}</h4>
                    <p className="text-xs text-gray-400 font-bold">{review.date}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic leading-relaxed">"{review.comment}"</p>
                <div className="flex gap-1 mt-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={cn("w-4 h-4", i < review.rating ? "fill-[#c20d00] text-[#c20d00]" : "text-gray-200")} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
