import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, MessageSquare } from 'lucide-react';
import { branches } from '../data/mockData';

export default function Contact() {
  return (
    <div className="pt-24 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Contact Details */}
          <div className="space-y-12">
            <div>
              <h1 className="text-6xl font-black text-gray-900 mb-8 tracking-tighter uppercase">Get In <br /> <span className="text-[#c20d00]">Touch</span></h1>
              <p className="text-gray-500 font-medium leading-relaxed">Have a question or feedback? We'd love to hear from you. Reach out to us through any of the channels below or visit one of our branches.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: Phone, title: "Our Hotline", info: "+880 1234 567890" },
                { icon: Mail, title: "Email Us", info: "info@jfc-bd.com" },
                { icon: MessageSquare, title: "Chat with Us", info: "m.me/jfc-bd" },
                { icon: Facebook, title: "Facebook", info: "/jfc.bangladesh" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 text-[#c20d00]">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">{item.title}</h5>
                    <p className="text-gray-400 text-sm font-medium">{item.info}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-12 border-t border-gray-200">
               <h3 className="text-xl font-bold mb-8 uppercase tracking-widest">Our Branches</h3>
               <div className="space-y-8">
                 {branches.map((branch) => (
                   <div key={branch.id} className="bg-white p-8 rounded-[32px] border border-gray-100 hover:border-[#c20d00] transition-colors group">
                     <div className="flex justify-between items-start mb-4">
                        <h4 className="font-bold text-xl group-hover:text-[#c20d00] transition-colors">{branch.name}</h4>
                        <div className="text-[10px] font-black bg-green-50 text-green-600 px-3 py-1 rounded-full uppercase">Open Now</div>
                     </div>
                     <div className="space-y-3 text-sm text-gray-400">
                       <p className="flex gap-2"><MapPin className="w-4 h-4 shrink-0" /> {branch.address}</p>
                       <p className="flex gap-2"><Phone className="w-4 h-4 shrink-0" /> {branch.phone}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900 p-8 md:p-12 rounded-[50px] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#c20d00] blur-[100px] opacity-20"></div>
            <h3 className="text-3xl font-black text-white mb-8 tracking-tighter">SEND MESSAGE</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Full Name</label>
                   <input className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-[#c20d00]" placeholder="Enter name" />
                 </div>
                 <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Email</label>
                   <input className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-[#c20d00]" placeholder="Enter email" />
                 </div>
              </div>
              <div className="space-y-2">
                 <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Subject</label>
                 <select className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-[#c20d00] appearance-none">
                    <option>Order Inquiry</option>
                    <option>General Support</option>
                    <option>Branch Feedback</option>
                 </select>
              </div>
              <div className="space-y-2">
                 <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Message</label>
                 <textarea rows={6} className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-[#c20d00]" placeholder="How can we help?" />
              </div>
              <button className="w-full bg-[#c20d00] text-white py-5 rounded-full font-black text-lg hover:scale-[1.02] shadow-xl transition-all">
                SUBMIT MESSAGE
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
