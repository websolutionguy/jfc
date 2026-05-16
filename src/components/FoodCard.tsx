import React from 'react';
import { motion } from 'motion/react';
import { Star, Plus, ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { formatCurrency } from '../utils/utils';

interface FoodCardProps {
  product: Product;
  key?: string | number;
}

export default function FoodCard({ product }: FoodCardProps) {
  const { addToCart } = useCart();
  const { addToast } = useToast();

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
    addToast(`${product.name} added to cart!`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
    >
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {product.offerBadge && (
          <div className="absolute top-4 left-4 bg-yellow-400 text-black text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-lg">
            {product.offerBadge}
          </div>
        )}
        <button 
          onClick={handleAdd}
          className="absolute bottom-4 right-4 w-12 h-12 bg-[#c20d00] text-white rounded-full flex items-center justify-center shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black"
        >
          <Plus className="w-6 h-6" />
        </button>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-1 mb-2">
          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          <span className="text-xs font-bold text-gray-400">{product.rating}</span>
        </div>
        <h3 className="font-bold text-lg mb-1 group-hover:text-[#c20d00] transition-colors truncate">
          {product.name}
        </h3>
        <p className="text-xs text-gray-500 line-clamp-2 mb-4 h-8">
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-black text-[#c20d00]">
            {formatCurrency(product.price)}
          </span>
          <button 
            onClick={handleAdd}
            className="text-[10px] uppercase tracking-wider font-bold text-gray-400 hover:text-[#c20d00] transition-colors flex items-center gap-1"
          >
            <ShoppingCart className="w-3 h-3" />
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
}
