import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {/* Brand Info */}
        <div>
          <Link to="/" className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-[#c20d00] rounded-full flex items-center justify-center text-white font-bold text-xl">J</div>
            <span className="text-2xl font-black tracking-tighter">JFC</span>
          </Link>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Serving the finest crispy fried chicken and burgers since 2002. Quality, taste, and satisfaction guaranteed.
          </p>
          <div className="flex gap-4">
            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#c20d00] transition-colors">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-gray-400">
            {['Menu', 'About', 'Gallery', 'Reviews', 'Feedback'].map((link) => (
              <li key={link}>
                <Link to={`/${link.toLowerCase().replace(' ', '-')}`} className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-[#c20d00] rounded-full"></span>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="text-lg font-bold mb-6">Contact Us</h4>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#c20d00] shrink-0" />
              <span>Head Office: Dhanmondi, Dhaka, Bangladesh</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#c20d00] shrink-0" />
              <span>+880 1234 567890</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#c20d00] shrink-0" />
              <span>info@jfc-bd.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-bold mb-6">Opening Hours</h4>
          <ul className="space-y-4 text-gray-400">
             <li className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#c20d00] shrink-0" />
              <span>Mon - Sun: 10:00 AM - 11:30 PM</span>
            </li>
          </ul>
          <div className="mt-8">
            <h5 className="text-sm font-bold mb-4 uppercase tracking-wider text-gray-500">Subscribe for Offers</h5>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-[#c20d00]"
              />
              <button className="bg-[#c20d00] text-white px-4 py-2 rounded-lg font-bold text-sm">Join</button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-16 mt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Best Fried Chicken (JFC). All Rights Reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
