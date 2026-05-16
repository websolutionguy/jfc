import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Menu, X, Phone, UtensilsCrossed } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { cn } from '../utils/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { totalItems } = useCart();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-white shadow-md py-5"
    )}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#c20d00] rounded-full flex items-center justify-center text-white font-bold text-xl">J</div>
          <span className={cn(
            "text-2xl font-black tracking-tighter transition-colors",
            isScrolled ? "text-[#c20d00]" : "text-[#c20d00]"
          )}>JFC</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => cn(
                "text-sm font-semibold uppercase tracking-widest transition-colors hover:text-[#c20d00]",
                isActive ? "text-[#c20d00]" : (isScrolled ? "text-gray-800" : "text-gray-800")
              )}
            >
              {link.name}
            </NavLink>
          ))}
          <Link to="/cart" className="relative">
            <ShoppingCart className={cn(
              "w-6 h-6 transition-colors",
              isScrolled ? "text-gray-800" : "text-gray-800"
            )} />
            {totalItems > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 bg-[#c20d00] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white"
              >
                {totalItems}
              </motion.span>
            )}
          </Link>
          <Link 
            to="/menu" 
            className="bg-[#c20d00] text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-[#a10a00] transition-colors shadow-lg shadow-red-900/20"
          >
            ORDER NOW
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="flex md:hidden items-center gap-4">
           <Link to="/cart" className="relative">
            <ShoppingCart className={cn(
              "w-6 h-6 transition-colors",
              isScrolled ? "text-gray-800" : "text-gray-800"
            )} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#c20d00] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "p-1",
              isScrolled ? "text-gray-800" : "text-gray-800"
            )}
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[60] flex flex-col items-center justify-center md:hidden"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-gray-800"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => cn(
                    "text-2xl font-bold uppercase tracking-widest",
                    isActive ? "text-[#c20d00]" : "text-gray-800"
                  )}
                >
                  {link.name}
                </NavLink>
              ))}
              <Link 
                to="/menu" 
                onClick={() => setIsOpen(false)}
                className="bg-[#c20d00] text-white px-10 py-4 rounded-full font-black text-xl shadow-xl"
              >
                ORDER NOW
              </Link>
              <div className="flex items-center gap-2 text-gray-500 font-medium">
                <Phone className="w-5 h-5 text-[#c20d00]" />
                <span>+880 1234 567890</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
