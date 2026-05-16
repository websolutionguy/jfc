import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ShoppingCart, Star, UtensilsCrossed, X, Check } from 'lucide-react';
import { products, categories } from '../data/mockData';
import FoodCard from '../components/FoodCard';
import { useCart, Addon } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { formatCurrency, cn } from '../utils/utils';

const AVAILABLE_ADDONS: Addon[] = [
  { id: 'extra-cheese', name: 'Extra Cheese', price: 40 },
  { id: 'spicy-dip', name: 'Spicy Dip', price: 40 },
  { id: 'cold-beverage', name: 'Cold Beverage', price: 60 }
];

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [selectedAddons, setSelectedAddons] = useState<Addon[]>([]);
  const { addToCart } = useCart();
  const { addToast } = useToast();

  const handleProductSelect = (product: any) => {
    setSelectedProduct(product);
    setSelectedAddons([]); // Reset addons when opening modal
  };

  const toggleAddon = (addon: Addon) => {
    setSelectedAddons(prev => {
      const isSelected = prev.find(a => a.id === addon.id);
      if (isSelected) {
        return prev.filter(a => a.id !== addon.id);
      }
      return [...prev, addon];
    });
  };

  const handleAddToCartModal = () => {
    if (selectedProduct) {
      addToCart(selectedProduct, 1, selectedAddons);
      addToast(`${selectedProduct.name} added to cart!`);
      setSelectedProduct(null);
    }
  };

  const totalPrice = selectedProduct 
    ? selectedProduct.price + selectedAddons.reduce((sum, a) => sum + a.price, 0)
    : 0;

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-black tracking-tight text-gray-900 mb-4">OUR MENU</h1>
          <p className="text-gray-500 max-w-xl">Freshly made, signature crispy chicken and our house special recipes delivered to your doorstep.</p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search for wings, burgers, rice..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-[#c20d00]/20 focus:border-[#c20d00]"
            />
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 lg:pb-2">
            <button 
              onClick={() => setSelectedCategory('all')}
              className={cn(
                "px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-xs transition-all shrink-0",
                selectedCategory === 'all' 
                  ? "bg-[#c20d00] text-white shadow-lg shadow-red-900/20" 
                  : "bg-white text-gray-400 border border-gray-200 hover:border-[#c20d00]"
              )}
            >
              All Items
            </button>
            {categories.map((cat) => (
              <button 
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={cn(
                  "px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-xs transition-all shrink-0",
                  selectedCategory === cat.id 
                    ? "bg-[#c20d00] text-white shadow-lg shadow-red-900/20" 
                    : "bg-white text-gray-400 border border-gray-200 hover:border-[#c20d00]"
                )}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
                <div key={product.id} onClick={() => handleProductSelect(product)} className="cursor-pointer">
                  <FoodCard product={product} />
                </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center grayscale opacity-50">
            < UtensilsCrossed className="w-16 h-16 mb-4 text-gray-300" />
            <h3 className="text-2xl font-bold text-gray-400">No items found</h3>
            <p className="text-gray-400">Try adjusting your filters or search terms.</p>
          </div>
        )}
      </div>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              layoutId={selectedProduct.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-4xl rounded-[40px] overflow-hidden flex flex-col md:flex-row shadow-2xl"
            >
              <div className="md:w-1/2 aspect-square md:aspect-auto">
                <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover" />
              </div>
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-between">
                <button 
                  onClick={() => setSelectedProduct(null)}
                   className="absolute top-6 right-6 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-[#c20d00]/10 text-[#c20d00] text-[10px] uppercase font-black px-3 py-1 rounded-full">{selectedProduct.category}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-bold text-gray-400">{selectedProduct.rating} (50+ ratings)</span>
                    </div>
                  </div>
                  <h2 className="text-4xl font-black text-gray-900 mb-4">{selectedProduct.name}</h2>
                  <p className="text-gray-500 leading-relaxed mb-8">
                    {selectedProduct.description} Our signature prepared with farm-fresh ingredients and a blend of authentic secret spices.
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-xs font-black uppercase tracking-widest text-[#c20d00] mb-4">Select Add-ons</h4>
                    <div className="space-y-3">
                      {AVAILABLE_ADDONS.map((addon) => {
                        const isSelected = selectedAddons.find(a => a.id === addon.id);
                        return (
                          <div 
                            key={addon.id} 
                            onClick={() => toggleAddon(addon)}
                            className={cn(
                              "flex justify-between items-center p-4 border rounded-2xl cursor-pointer transition-all",
                              isSelected ? "bg-[#c20d00]/5 border-[#c20d00]" : "border-gray-100 hover:bg-gray-50 hover:border-gray-200"
                            )}
                          >
                            <div className="flex items-center gap-3">
                              <div className={cn(
                                "w-5 h-5 rounded-md border flex items-center justify-center transition-colors",
                                isSelected ? "bg-[#c20d00] border-[#c20d00]" : "border-gray-300"
                              )}>
                                {isSelected && <Check className="w-3 h-3 text-white" />}
                              </div>
                              <span className="font-bold text-sm text-gray-700">{addon.name}</span>
                            </div>
                            <span className="text-gray-400 font-bold text-sm">+{formatCurrency(addon.price)}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-8 border-t border-gray-100">
                  <span className="text-3xl font-black text-[#c20d00]">{formatCurrency(totalPrice)}</span>
                  <button 
                    onClick={handleAddToCartModal}
                    className="bg-[#c20d00] text-white px-10 py-5 rounded-full font-black text-lg shadow-xl hover:scale-105 transition-transform flex items-center gap-3"
                  >
                    ADD TO CART <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
