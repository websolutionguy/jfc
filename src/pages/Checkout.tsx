import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate, Link } from 'react-router-dom';
import { CheckCircle2, CreditCard, Wallet, Smartphone, ArrowLeft, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/utils';

export default function Checkout() {
  const { cart, grandTotal, clearCart } = useCart();
  const [isSuccess, setIsSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const navigate = useNavigate();

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      clearCart();
    }, 500);
  };

  if (cart.length === 0 && !isSuccess) {
    return (
      <div className="pt-32 pb-24 text-center">
        <h1 className="text-3xl font-black mb-6">NO ITEMS TO CHECKOUT</h1>
        <Link to="/menu" className="text-[#c20d00] font-bold underline">Go to Menu</Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center gap-4 mb-12">
           <Link to="/cart" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center bg-white">
            <ArrowLeft className="w-5 h-5 text-gray-400" />
          </Link>
          <h1 className="text-4xl font-black tracking-tight text-gray-900 uppercase">Checkout</h1>
        </div>

        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Customer Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 md:p-10 rounded-[40px] shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                <span className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-xs">01</span>
                Contact Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input required placeholder="First Name" className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 focus:outline-none focus:border-[#c20d00]" />
                <input required placeholder="Last Name" className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 focus:outline-none focus:border-[#c20d00]" />
                <input required type="email" placeholder="Email Address" className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 focus:outline-none focus:border-[#c20d00]" />
                <input required placeholder="Phone Number" className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 focus:outline-none focus:border-[#c20d00]" />
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-[40px] shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                <span className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-xs">02</span>
                Shipping Address
              </h3>
              <div className="space-y-6">
                <input required placeholder="Street Address" className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 focus:outline-none focus:border-[#c20d00]" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <input required placeholder="City" className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 focus:outline-none focus:border-[#c20d00]" />
                  <input required placeholder="Area" className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 focus:outline-none focus:border-[#c20d00]" />
                  <input placeholder="Postal Code (Optional)" className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 focus:outline-none focus:border-[#c20d00]" />
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-[40px] shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                <span className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-xs">03</span>
                Payment Method
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { id: 'cod', name: 'Cash on Delivery', icon: Wallet },
                  { id: 'bkash', name: 'bKash', icon: Smartphone },
                  { id: 'nagad', name: 'Nagad', icon: Smartphone },
                ].map((method) => (
                  <div 
                    key={method.id}
                    onClick={() => setPaymentMethod(method.id)}
                    className={`p-6 rounded-3xl border-2 cursor-pointer transition-all flex flex-col items-center gap-4 ${paymentMethod === method.id ? 'border-[#c20d00] bg-red-50' : 'border-gray-100 hover:border-gray-200'}`}
                  >
                    <method.icon className={`w-8 h-8 ${paymentMethod === method.id ? 'text-[#c20d00]' : 'text-gray-400'}`} />
                    <span className={`font-bold text-sm ${paymentMethod === method.id ? 'text-[#c20d00]' : 'text-gray-900'}`}>{method.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 md:p-10 rounded-[40px] border border-gray-100 sticky top-24">
              <h3 className="text-xl font-bold mb-6">Order Total</h3>
              <div className="text-5xl font-black text-[#c20d00] mb-8">{formatCurrency(grandTotal)}</div>
              
              <button 
                type="submit"
                className="w-full bg-[#c20d00] text-white py-5 rounded-full font-black text-xl shadow-2xl shadow-red-100 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3"
              >
                PLACE ORDER <ArrowRight className="w-6 h-6" />
              </button>
              
              <p className="mt-8 text-xs text-gray-400 text-center leading-relaxed">
                By placing this order, you agree to our Terms of Service and Privacy Policy. Your data is secure and encrypted.
              </p>
            </div>
          </div>
        </form>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {isSuccess && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              className="relative bg-white w-full max-w-lg rounded-[50px] p-12 text-center shadow-2xl"
            >
              <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h2 className="text-4xl font-black text-gray-900 mb-4">ORDER PLACED!</h2>
              <p className="text-gray-500 mb-10 leading-relaxed font-medium">Your delicious meal is being prepared. We'll notify you once it's on the way. Hold tight!</p>
              <button 
                onClick={() => navigate('/')}
                className="w-full bg-black text-white py-5 rounded-full font-bold text-lg hover:bg-[#c20d00] transition-colors"
              >
                RETURN HOME
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
