/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { menuItems } from '../data';
import { MenuItem, CartItem } from '../types';
import { Search, Flame, Plus, Minus, Trash2, ShoppingBag, Receipt, Sparkles, X, Check } from 'lucide-react';

interface MenuExplorerProps {
  onAddToOrder: (item: MenuItem) => void;
  cart: CartItem[];
  onUpdateCartQty: (itemId: string, delta: number) => void;
  onRemoveFromCart: (itemId: string) => void;
  onClearCart: () => void;
}

export default function MenuExplorer({
  cart,
  onUpdateCartQty,
  onRemoveFromCart,
  onClearCart,
  onAddToOrder
}: MenuExplorerProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [checkoutName, setCheckoutName] = useState('');
  const [checkoutPhone, setCheckoutPhone] = useState('');
  const [checkoutType, setCheckoutType] = useState<'dine-in' | 'express-delivery'>('dine-in');
  const [orderReceipt, setOrderReceipt] = useState<{
    orderId: string;
    prepTime: number;
    items: { name: string; qty: number; price: number }[];
    subtotal: number;
    tax: number;
    total: number;
  } | null>(null);

  // Filter Categories
  const categories = [
    { id: 'all', label: 'All Heritage Specialties' },
    { id: 'biryani', label: 'Slow-Cooked Dum Biryanis' },
    { id: 'starter', label: 'Tandoori & Kebabs' },
    { id: 'lunchbox', label: 'Office Express Meals' },
    { id: 'combo', label: 'Pocket-Friendly Combos' },
    { id: 'dessert', label: 'Royal Sweet Finishes' }
  ];

  // Filtered Menu Items
  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Order Calculations
  const subtotal = useMemo(() => {
    return cart.reduce((acc, curr) => acc + (curr.menuItem.price * curr.quantity), 0);
  }, [cart]);

  const gstTax = useMemo(() => Math.round(subtotal * 0.18), [subtotal]);
  const finalTotal = subtotal > 0 ? subtotal + gstTax : 0;

  // Handle Checkout Submission
  const handleSimulateCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkoutName || !checkoutPhone) return;

    const randomId = 'FS-' + Math.floor(1000 + Math.random() * 9000);
    // Lunchboxes and Combos have faster prep times
    const hasFastItem = cart.some(item => ['lunchbox', 'combo'].includes(item.menuItem.category));
    const estimatedTime = hasFastItem ? 15 : 25;

    setOrderReceipt({
      orderId: randomId,
      prepTime: estimatedTime,
      items: cart.map(item => ({
        name: item.menuItem.name,
        qty: item.quantity,
        price: item.menuItem.price
      })),
      subtotal,
      tax: gstTax,
      total: finalTotal
    });

    setIsCheckoutModalOpen(false);
    onClearCart();
    setCheckoutName('');
    setCheckoutPhone('');
  };

  // Helper for Spice Level color coding
  const getSpiceStyle = (level: MenuItem['spiceLevel']) => {
    switch (level) {
      case 'Mild':
        return 'text-emerald-700 bg-emerald-50 border-emerald-100';
      case 'Medium':
        return 'text-[#b49000] bg-yellow-50 border-yellow-100';
      case 'Spicy':
        return 'text-natural-terracotta bg-orange-50 border-orange-100';
      case 'Hyderabad Hot':
        return 'text-red-700 bg-red-50 border-red-100 font-bold';
      default:
        return 'text-natural-olive bg-natural-warmgray border-natural-sand';
    }
  };

  return (
    <section id="menu" className="py-20 bg-natural-cream border-t border-natural-sand scroll-mt-10">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Content */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-natural-terracotta text-xs font-bold uppercase tracking-widest block">
            Nizami Flavors Perfected
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-natural-slate tracking-tight">
            Our Handcrafted Heritage Menu
          </h2>
          <p className="text-natural-text/90 font-sans text-sm md:text-base leading-relaxed">
            Fresh Spice blends authentic recipes with tailored portions. Whether it’s a quick lunch box during your coding sprints, budget combos with classmates, or grand weekend gatherings with family.
          </p>
        </div>

        {/* Categories, Search & Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Menu Items */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-xl border border-natural-sand text-natural-text">
              <div className="relative w-full md:w-72">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-natural-olive" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search biryanis, kebabs, tandoor..."
                  className="w-full bg-natural-cream border border-natural-sand rounded-lg pl-10 pr-4 py-2.5 text-natural-text text-sm focus:outline-none focus:ring-2 focus:ring-natural-terracotta focus:border-transparent placeholder-natural-olive/70 transition-all"
                  id="menu-search-input"
                />
              </div>

              {/* Spice Legend */}
              <div className="flex flex-wrap gap-3 text-xs text-natural-olive font-sans justify-end">
                <span className="flex items-center gap-1.5 bg-natural-cream px-2.5 py-1 rounded border border-natural-sand">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Veg
                </span>
                <span className="flex items-center gap-1.5 bg-natural-cream px-2.5 py-1 rounded border border-natural-sand">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span> Non-Veg
                </span>
                <span className="flex items-center gap-1.5 bg-natural-cream px-2.5 py-1 rounded border border-natural-sand">
                  <Flame className="w-3.5 h-3.5 text-natural-terracotta" /> Spice Control Available
                </span>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap border tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-natural-olive border-natural-olive text-white shadow-sm'
                      : 'bg-white border-natural-sand text-natural-text hover:border-natural-olive/50 hover:text-natural-slate'
                  }`}
                  id={`menu-cat-${cat.id}`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Grid of Food Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredItems.length > 0 ? (
                filteredItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-xl border border-natural-sand p-5 flex flex-col justify-between hover:border-natural-olive/40 hover:shadow-lg transition-all duration-300 relative group text-natural-text"
                  >
                    {item.isPopular && (
                      <span className="absolute top-3 right-3 bg-natural-saffron text-stone-950 text-[9px] font-extrabold uppercase px-2.5 py-0.5 rounded-full tracking-wider flex items-center gap-0.5 shadow-sm">
                        <Sparkles className="w-2.5 h-2.5 fill-stone-950" />
                        Best Seller
                      </span>
                    )}

                    <div className="space-y-3">
                      {/* Veg/Nonveg indicator and spice level */}
                      <div className="flex items-center gap-2">
                        <span className={`w-3 h-3 rounded-full flex-shrink-0 ${item.isVeg ? 'bg-emerald-500' : 'bg-red-500'}`} />
                        <span className="text-[10px] text-natural-olive uppercase tracking-widest font-semibold">
                          {item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                        </span>
                        <span className={`text-[10px] px-2.5 py-0.5 rounded-full border ${getSpiceStyle(item.spiceLevel)}`}>
                          {item.spiceLevel}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-lg font-serif font-bold text-natural-slate group-hover:text-natural-terracotta transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-xs text-natural-text/80 leading-relaxed font-sans min-h-[40px]">
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom Row: Price, serves and buy action */}
                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-natural-sand">
                      <div>
                        <span className="text-2xl font-serif font-black text-natural-slate">₹{item.price}</span>
                        <p className="text-[10px] text-natural-olive mt-0.5">Serves {item.serves}</p>
                      </div>

                      <button
                        onClick={() => onAddToOrder(item)}
                        className="px-4 py-2 bg-natural-terracotta/10 hover:bg-natural-terracotta text-natural-terracotta hover:text-white border border-natural-terracotta/20 hover:border-natural-terracotta rounded-lg text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center gap-1 cursor-pointer shadow-sm active:scale-95"
                        id={`add-to-plate-${item.id}`}
                      >
                        <Plus className="w-4 h-4" />
                        Add To Plate
                      </button>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-2 py-16 text-center text-natural-olive border border-dashed border-natural-sand rounded-xl bg-white/40">
                  <Search className="w-10 h-10 mx-auto text-natural-olive mb-3 opacity-60" />
                  <p className="text-sm">We couldn't find any dishes matching "{searchQuery}"</p>
                  <button
                    onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                    className="mt-4 text-xs text-natural-terracotta underline font-semibold hover:text-natural-terracotta/90"
                  >
                    Clear searches & view full menu
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Simulated Plate Order Builder */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 bg-white border border-natural-sand rounded-xl p-5 shadow-lg relative text-natural-text">
            <div className="flex items-center justify-between border-b border-natural-sand pb-4 mb-4">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-natural-terracotta" />
                <h3 className="text-base font-serif font-bold text-natural-slate uppercase tracking-wider">
                  Your Simulated Plate
                </h3>
              </div>
              {cart.length > 0 && (
                <button
                  onClick={onClearCart}
                  className="text-[10px] text-natural-olive hover:text-red-500 uppercase tracking-widest flex items-center gap-1 cursor-pointer transition-colors font-semibold"
                >
                  <Trash2 className="w-3 h-3" /> Clear Plate
                </button>
              )}
            </div>

            {cart.length > 0 ? (
              <div className="space-y-4">
                {/* Scrollable list of items */}
                <div className="space-y-3.5 max-h-[280px] overflow-y-auto pr-1">
                  {cart.map(({ menuItem, quantity }) => (
                    <div key={menuItem.id} className="flex items-start justify-between gap-3 text-sm bg-natural-cream p-2.5 rounded-lg border border-natural-sand">
                      <div className="space-y-1 text-left">
                        <span className="font-semibold text-natural-slate text-xs block">{menuItem.name}</span>
                        <span className="text-[10px] text-natural-olive">₹{menuItem.price} &times; {quantity}</span>
                      </div>

                      <div className="flex items-center gap-2 flex-shrink-0">
                        {/* Qty Controls */}
                        <div className="flex items-center border border-natural-sand rounded bg-white overflow-hidden">
                          <button
                            onClick={() => onUpdateCartQty(menuItem.id, -1)}
                            className="p-1 text-natural-olive hover:text-natural-slate hover:bg-natural-cream transition-colors cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-mono text-natural-slate font-bold">{quantity}</span>
                          <button
                            onClick={() => onUpdateCartQty(menuItem.id, 1)}
                            className="p-1 text-natural-olive hover:text-natural-slate hover:bg-natural-cream transition-colors cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Remove item button */}
                        <button
                          onClick={() => onRemoveFromCart(menuItem.id)}
                          className="p-1.5 text-natural-olive hover:text-red-500 hover:bg-natural-cream rounded transition-colors cursor-pointer"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Simulated Bill Summary */}
                <div className="border-t border-natural-sand pt-4 space-y-2.5 text-xs text-natural-olive font-sans">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="text-natural-slate font-semibold">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>GST Tax (18% - Govt. Mandated)</span>
                    <span className="text-natural-slate font-semibold">₹{gstTax}</span>
                  </div>
                  <div className="flex justify-between font-serif text-sm font-bold text-natural-slate border-t border-natural-sand pt-3">
                    <span>Est. Total Payable</span>
                    <span className="text-natural-terracotta font-bold">₹{finalTotal}</span>
                  </div>
                </div>

                {/* Checkout Trigger */}
                <button
                  onClick={() => setIsCheckoutModalOpen(true)}
                  className="w-full mt-3 py-3 bg-gradient-to-r from-natural-terracotta to-natural-olive hover:from-natural-terracotta/90 hover:to-natural-olive/90 text-white font-bold text-xs uppercase tracking-widest rounded-lg transition-all shadow-md cursor-pointer flex items-center justify-center gap-1.5"
                  id="checkout-trigger-btn"
                >
                  <Receipt className="w-4 h-4" />
                  Simulate Order & Get Estimate
                </button>
              </div>
            ) : (
              <div className="py-14 text-center text-natural-olive">
                <ShoppingBag className="w-12 h-12 mx-auto text-natural-sand mb-3 animate-pulse" />
                <p className="text-sm font-semibold text-natural-slate">Your plate is currently empty.</p>
                <p className="text-xs text-natural-olive/80 mt-1 max-w-[220px] mx-auto">
                  Click &ldquo;Add To Plate&rdquo; on menu cards to build your customized trial meal.
                </p>
              </div>
            )}

            {/* Instant feedback receipt from prior submission */}
            {orderReceipt && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-6 p-4 bg-natural-cream border border-natural-sand rounded-lg text-left relative"
              >
                <button
                  onClick={() => setOrderReceipt(null)}
                  className="absolute top-2.5 right-2.5 text-natural-olive hover:text-natural-slate cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-1.5 text-natural-olive text-xs font-bold uppercase mb-2">
                  <Check className="w-4 h-4 bg-natural-olive text-white rounded-full p-0.5" />
                  Trial Receipt Issued
                </div>

                <div className="space-y-1.5 font-mono text-[11px] text-natural-text">
                  <p className="text-natural-slate font-bold text-xs uppercase font-serif">Fresh Spice - Hyderabad</p>
                  <p>Order Reference: <span className="text-natural-terracotta font-bold">{orderReceipt.orderId}</span></p>
                  <p>Est. Prep Time: <span className="text-natural-olive font-bold">{orderReceipt.prepTime} minutes</span></p>
                  <div className="border-t border-dashed border-natural-sand my-2 pt-1.5 space-y-1">
                    {orderReceipt.items.map((it, idx) => (
                      <div key={idx} className="flex justify-between">
                        <span>{it.qty} &times; {it.name.substring(0, 18)}..</span>
                        <span>₹{it.price * it.qty}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between border-t border-dashed border-natural-sand pt-1.5 font-sans font-bold text-natural-slate">
                    <span>Grand Total Paid (Simulated)</span>
                    <span className="text-natural-terracotta font-bold">₹{orderReceipt.total}</span>
                  </div>
                </div>

                <p className="text-[10px] text-natural-olive/90 italic mt-3 text-center">
                  Present this reference screen at the Jubilee Hills counter to claim 10% off your physical dine-in!
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Simulated Order Modal Dialog */}
      <AnimatePresence>
        {isCheckoutModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-natural-slate/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white border border-natural-sand rounded-xl max-w-md w-full p-6 text-left shadow-2xl relative text-natural-text"
            >
              <button
                onClick={() => setIsCheckoutModalOpen(false)}
                className="absolute top-4 right-4 text-natural-olive hover:text-natural-slate cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-xl font-serif font-bold text-natural-slate mb-2">
                Simulate Your Fresh Spice Order
              </h3>
              <p className="text-xs text-natural-olive mb-6">
                Fill this trial check to simulate an order from Hyderabad's favorite kitchen. No actual credit details are needed!
              </p>

              <form onSubmit={handleSimulateCheckout} className="space-y-4 font-sans text-sm text-natural-text">
                <div>
                  <label className="block text-xs font-semibold text-natural-slate uppercase tracking-wider mb-1.5">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={checkoutName}
                    onChange={(e) => setCheckoutName(e.target.value)}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full bg-natural-cream border border-natural-sand rounded-lg px-3.5 py-2 text-natural-slate focus:outline-none focus:ring-2 focus:ring-natural-terracotta"
                    id="order-name-input"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-natural-slate uppercase tracking-wider mb-1.5">
                    Phone Number (For Updates)
                  </label>
                  <input
                    type="tel"
                    required
                    value={checkoutPhone}
                    onChange={(e) => setCheckoutPhone(e.target.value)}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full bg-natural-cream border border-natural-sand rounded-lg px-3.5 py-2 text-natural-slate focus:outline-none focus:ring-2 focus:ring-natural-terracotta"
                    id="order-phone-input"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-natural-slate uppercase tracking-wider mb-1.5">
                    Dining/Delivery Preference
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setCheckoutType('dine-in')}
                      className={`py-2 px-3 rounded-lg border text-xs font-semibold text-center cursor-pointer transition-all ${
                        checkoutType === 'dine-in'
                          ? 'bg-natural-olive border-natural-olive text-white shadow-sm'
                          : 'bg-natural-cream border-natural-sand text-natural-olive hover:text-natural-slate'
                      }`}
                      id="order-pref-dinein"
                    >
                      Dine-In Feast
                    </button>
                    <button
                      type="button"
                      onClick={() => setCheckoutType('express-delivery')}
                      className={`py-2 px-3 rounded-lg border text-xs font-semibold text-center cursor-pointer transition-all ${
                        checkoutType === 'express-delivery'
                          ? 'bg-natural-olive border-natural-olive text-white shadow-sm'
                          : 'bg-natural-cream border-natural-sand text-natural-olive hover:text-natural-slate'
                      }`}
                      id="order-pref-delivery"
                    >
                      Express Desk Delivery
                    </button>
                  </div>
                  <p className="text-[10px] text-natural-olive mt-1.5 italic">
                    {checkoutType === 'dine-in'
                      ? '✓ Food will be served hot at our Jubilee Hills location'
                      : '✓ 15-minute high-priority packaging for tech-parks and classrooms'}
                  </p>
                </div>

                <div className="pt-4 border-t border-natural-sand flex items-center justify-between text-xs text-natural-olive">
                  <span>Order Value</span>
                  <span className="text-xl font-serif font-bold text-natural-terracotta">₹{finalTotal}</span>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-natural-terracotta hover:bg-natural-terracotta/90 text-white font-bold text-xs uppercase tracking-widest rounded-lg transition-colors cursor-pointer shadow-sm"
                  id="order-submit-btn"
                >
                  Generate Royal Bill Receipt
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
