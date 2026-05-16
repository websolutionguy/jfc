import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowLeft, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/utils';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, totalItems, subtotal, deliveryCharge, vat, grandTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="pt-32 pb-24 flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-8"
        >
          <ShoppingBag className="w-12 h-12 text-gray-300" />
        </motion.div>
        <h1 className="text-4xl font-black mb-4">YOUR CART IS EMPTY</h1>
        <p className="text-gray-500 mb-12 max-w-md">Looks like you haven't added anything to your cart yet. Browse our delicious menu and pick something! </p>
        <Link 
          to="/menu" 
          className="bg-[#c20d00] text-white px-12 py-5 rounded-full font-black text-xl shadow-2xl shadow-red-900/20 hover:scale-105 transition-transform"
        >
          START ORDERING
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center gap-4 mb-12">
          <Link to="/menu" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-5xl font-black tracking-tight text-gray-900">MY CART <span className="text-gray-300 ml-2">({totalItems})</span></h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            <AnimatePresence>
              {cart.map((item) => {
                const addonsPrice = item.selectedAddons.reduce((sum, a) => sum + a.price, 0);
                return (
                  <motion.div
                    key={item.cartItemId}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col sm:flex-row gap-6 p-6 bg-gray-50 rounded-[32px] border border-gray-100 relative group"
                  >
                    <div className="w-full sm:w-32 h-32 rounded-2xl overflow-hidden shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                            {item.selectedAddons.length > 0 && (
                              <p className="text-xs text-blue-600 font-bold mt-1">
                                + {item.selectedAddons.map(a => a.name).join(', ')}
                              </p>
                            )}
                          </div>
                          <button 
                            onClick={() => removeFromCart(item.cartItemId)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                        <p className="text-xs text-gray-500 uppercase tracking-widest font-black">{item.category}</p>
                      </div>
                      
                      <div className="flex justify-between items-center mt-4 sm:mt-0">
                        <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-full px-4 py-2">
                          <button 
                            onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                            className="text-gray-400 hover:text-[#c20d00]"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="font-black text-sm w-4 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                            className="text-gray-400 hover:text-[#c20d00]"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <span className="text-xl font-black text-[#c20d00]">{formatCurrency((item.price + addonsPrice) * item.quantity)}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900 text-white p-8 md:p-10 rounded-[40px] sticky top-24">
              <h2 className="text-2xl font-black mb-8 border-b border-white/10 pb-6 uppercase tracking-tighter">Order Summary</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-gray-400">
                  <span className="font-medium">Subtotal</span>
                  <span className="font-bold text-white">{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span className="font-medium">Delivery Charge</span>
                  <span className="font-bold text-white">{formatCurrency(deliveryCharge)}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span className="font-medium">VAT (5%)</span>
                  <span className="font-bold text-white">{formatCurrency(vat)}</span>
                </div>
              </div>

              <div className="mb-8 p-4 bg-white/5 rounded-2xl border border-white/5">
                <p className="text-[10px] uppercase font-black tracking-widest text-gray-500 mb-2">Have a promo code?</p>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="ENTER CODE" 
                    className="bg-transparent border-b border-white/20 px-0 py-2 text-sm w-full focus:outline-none focus:border-[#c20d00]"
                  />
                  <button className="text-[#c20d00] font-black text-xs uppercase tracking-widest">Apply</button>
                </div>
              </div>

              <div className="flex justify-between items-end mb-10 pt-8 border-t border-white/10">
                <div>
                  <p className="text-[10px] uppercase font-black tracking-[0.2em] text-gray-500 mb-1">Total Payable</p>
                  <p className="text-4xl font-black text-white">{formatCurrency(grandTotal)}</p>
                </div>
              </div>

              <Link 
                to="/checkout" 
                className="w-full bg-[#c20d00] text-white py-5 rounded-full font-black text-xl flex items-center justify-center gap-3 hover:bg-white hover:text-[#c20d00] transition-all duration-300 group shadow-2xl shadow-black"
              >
                CHECKOUT <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
