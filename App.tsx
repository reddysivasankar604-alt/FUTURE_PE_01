/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import MenuExplorer from './components/MenuExplorer';
import ReservationForm from './components/ReservationForm';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import { MenuItem, CartItem } from './types';
import { Menu, X, ShoppingCart, Sparkles, MapPin, Phone } from 'lucide-react';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor page scroll to style navbar dynamically
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cart Handlers
  const handleAddToOrder = (menuItem: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.menuItem.id === menuItem.id);
      if (existing) {
        return prev.map((item) =>
          item.menuItem.id === menuItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { menuItem, quantity: 1 }];
    });
  };

  const handleUpdateCartQty = (itemId: string, delta: number) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.menuItem.id === itemId);
      if (!existing) return prev;

      const newQty = existing.quantity + delta;
      if (newQty <= 0) {
        return prev.filter((item) => item.menuItem.id !== itemId);
      }

      return prev.map((item) =>
        item.menuItem.id === itemId ? { ...item, quantity: newQty } : item
      );
    });
  };

  const handleRemoveFromCart = (itemId: string) => {
    setCart((prev) => prev.filter((item) => item.menuItem.id !== itemId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Smooth scroll handler helper
  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Total quantity of items in simulated plate
  const totalCartCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="min-h-screen bg-natural-bg text-natural-text font-sans selection:bg-natural-terracotta selection:text-white overflow-x-hidden antialiased">
      
      {/* Top Banner (Micro announcement) */}
      <div className="bg-natural-cream text-natural-olive text-[11px] font-sans border-b border-natural-sand py-1.5 px-4 flex items-center justify-between z-50 relative">
        <div className="flex items-center gap-4 mx-auto md:mx-0">
          <span className="flex items-center gap-1 font-medium">
            <MapPin className="w-3 h-3 text-natural-terracotta" /> Jubilee Hills Road No. 36, Hyderabad
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 font-medium">
            <Phone className="w-3 h-3 text-natural-terracotta" /> +91 40 4965 8234
          </span>
        </div>
        <div className="hidden md:flex items-center gap-2 text-natural-terracotta font-semibold uppercase tracking-wider text-[10px]">
          <Sparkles className="w-3.5 h-3.5 animate-pulse text-natural-saffron" />
          <span>Student Discount 15% Valid Mon-Thu</span>
        </div>
      </div>

      {/* Floating Header Navbar */}
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-natural-sand py-3 shadow-md'
            : 'bg-transparent border-transparent py-5'
        }`}
        style={{ top: '28px' }} // Positioned directly below the micro announcement banner
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2.5 hover:opacity-90 transition-opacity text-left bg-transparent border-none cursor-pointer p-0"
            id="brand-logo-btn"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-natural-terracotta rounded-full flex items-center justify-center text-white font-bold text-sm shadow-sm">FS</div>
              <div>
                <span className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-natural-slate block leading-none">
                  Fresh <span className="text-natural-terracotta">Spice</span>
                </span>
                <span className="text-[9px] uppercase tracking-widest font-mono text-natural-olive block mt-0.5 font-bold">
                  Jubilee Hills
                </span>
              </div>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-semibold uppercase tracking-widest text-natural-olive">
            <button
              onClick={() => scrollToSection('home')}
              className="hover:text-natural-terracotta cursor-pointer transition-colors"
              id="nav-home"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-natural-terracotta cursor-pointer transition-colors"
              id="nav-about"
            >
              Our Story
            </button>
            <button
              onClick={() => scrollToSection('why-choose-us')}
              className="hover:text-natural-terracotta cursor-pointer transition-colors"
              id="nav-why"
            >
              Why Us
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="hover:text-natural-terracotta cursor-pointer transition-colors"
              id="nav-services"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="hover:text-natural-terracotta cursor-pointer transition-colors flex items-center gap-1.5"
              id="nav-menu"
            >
              Menu
              {totalCartCount > 0 && (
                <span className="bg-natural-terracotta text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full animate-bounce">
                  {totalCartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => scrollToSection('stories')}
              className="hover:text-natural-terracotta cursor-pointer transition-colors"
              id="nav-stories"
            >
              Guest Stories
            </button>
            <button
              onClick={() => scrollToSection('faqs')}
              className="hover:text-natural-terracotta cursor-pointer transition-colors"
              id="nav-faqs"
            >
              FAQs
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Quick Menu Order Tracker */}
            {totalCartCount > 0 && (
              <button
                onClick={() => scrollToSection('menu')}
                className="p-2 bg-natural-terracotta hover:bg-natural-terracotta/90 text-white rounded-full flex items-center justify-center relative cursor-pointer shadow-md"
                title="View Simulated Plate"
                id="floating-cart-badge"
              >
                <ShoppingCart className="w-4 h-4" />
                <span className="absolute -top-1.5 -right-1.5 bg-natural-saffron text-stone-950 text-[9px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                  {totalCartCount}
                </span>
              </button>
            )}

            {/* Desktop Reservation Action */}
            <button
              onClick={() => scrollToSection('reservation')}
              className="hidden sm:inline-flex px-5 py-2.5 bg-natural-terracotta hover:bg-natural-terracotta/90 text-white font-bold text-xs uppercase tracking-widest rounded-lg transition-all cursor-pointer shadow-md hover:shadow-orange-600/10"
              id="nav-reservation-btn"
            >
              Reserve Table
            </button>

            {/* Mobile menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-natural-olive hover:text-natural-slate hover:bg-natural-cream rounded-lg cursor-pointer transition-colors"
              aria-label="Toggle Menu"
              id="mobile-nav-toggle"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Pull-out Menu Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-natural-sand px-4 pt-4 pb-6 absolute top-full left-0 w-full space-y-4 text-left shadow-2xl z-50">
            <div className="flex flex-col gap-3.5 text-sm font-semibold uppercase tracking-widest text-natural-olive">
              <button
                onClick={() => scrollToSection('home')}
                className="hover:text-natural-terracotta cursor-pointer text-left py-1"
              >
                Home Base
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="hover:text-natural-terracotta cursor-pointer text-left py-1"
              >
                Our Story
              </button>
              <button
                onClick={() => scrollToSection('why-choose-us')}
                className="hover:text-natural-terracotta cursor-pointer text-left py-1"
              >
                Why Us
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="hover:text-natural-terracotta cursor-pointer text-left py-1"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('menu')}
                className="hover:text-natural-terracotta cursor-pointer text-left py-1 flex items-center gap-2"
              >
                Heritage Menu
                {totalCartCount > 0 && (
                  <span className="bg-natural-terracotta text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                    {totalCartCount} items
                  </span>
                )}
              </button>
              <button
                onClick={() => scrollToSection('stories')}
                className="hover:text-natural-terracotta cursor-pointer text-left py-1"
              >
                Guest Stories
              </button>
              <button
                onClick={() => scrollToSection('faqs')}
                className="hover:text-natural-terracotta cursor-pointer text-left py-1"
              >
                FAQs
              </button>
            </div>

            <div className="pt-4 border-t border-natural-sand flex flex-col gap-3">
              <button
                onClick={() => scrollToSection('reservation')}
                className="w-full py-3 bg-natural-terracotta hover:bg-natural-terracotta/90 text-white font-bold text-xs uppercase tracking-widest rounded-lg transition-colors text-center cursor-pointer"
                id="mobile-nav-reserve-btn"
              >
                Reserve Seat Now
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Sections */}
      <main>
        
        {/* 1. Hero section (includes dynamic audience greeting) */}
        <HeroSection
          onExploreMenu={() => scrollToSection('menu')}
          onBookTable={() => scrollToSection('reservation')}
        />

        {/* 2. About Us, 3. Why Choose Us, and 4. Our Services */}
        <AboutUs />

        {/* 5. Featured Menu & Simulated Cart */}
        <MenuExplorer
          cart={cart}
          onAddToOrder={handleAddToOrder}
          onUpdateCartQty={handleUpdateCartQty}
          onRemoveFromCart={handleRemoveFromCart}
          onClearCart={handleClearCart}
        />

        {/* 6. Customer Testimonials */}
        <Testimonials />

        {/* 7. FAQs Accordion */}
        <FAQSection />

        {/* 8. Seat Reservation Form (includes printable ticket voucher) */}
        <ReservationForm />

      </main>

      {/* 9. Footer (includes address, map cards, and simulated Newsletter) */}
      <Footer />

    </div>
  );
}
