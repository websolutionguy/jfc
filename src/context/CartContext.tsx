import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '../types';

export interface Addon {
  id: string;
  name: string;
  price: number;
}

interface CartItem extends Product {
  quantity: number;
  selectedAddons: Addon[];
  cartItemId: string; // unique ID for product + addons combo
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number, selectedAddons?: Addon[]) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  deliveryCharge: number;
  vat: number;
  grandTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product, quantity: number = 1, selectedAddons: Addon[] = []) => {
    // Generate a unique ID based on product and sorted addon IDs
    const addonIdString = [...selectedAddons].sort((a, b) => a.id.localeCompare(b.id)).map(a => a.id).join('-');
    const cartItemId = addonIdString ? `${product.id}-${addonIdString}` : product.id;

    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.cartItemId === cartItemId);
      if (existingItem) {
        return prevCart.map(item =>
          item.cartItemId === cartItemId ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prevCart, { ...product, quantity, selectedAddons, cartItemId }];
    });
  };

  const removeFromCart = (cartItemId: string) => {
    setCart(prevCart => prevCart.filter(item => item.cartItemId !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, quantity: number) => {
    if (quantity < 1) return;
    setCart(prevCart =>
      prevCart.map(item =>
        item.cartItemId === cartItemId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => {
    const addonsTotal = item.selectedAddons.reduce((aSum, a) => aSum + a.price, 0);
    return sum + (item.price + addonsTotal) * item.quantity;
  }, 0);
  const deliveryCharge = totalItems > 0 ? 60 : 0;
  const vat = Math.round(subtotal * 0.05); // 5% VAT
  const grandTotal = subtotal + deliveryCharge + vat;

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      totalItems,
      subtotal,
      deliveryCharge,
      vat,
      grandTotal
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};