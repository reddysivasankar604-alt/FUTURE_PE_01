/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Clock, Phone, MapPin, Sparkles, Send, Check } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="bg-natural-slate border-t border-natural-sand pt-16 pb-8 text-natural-cream/80 font-sans text-sm">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-white/10">
        
        {/* Brand & Mission column */}
        <div className="md:col-span-5 space-y-4 text-left">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-serif font-black text-white tracking-tight">
              Fresh <span className="text-natural-terracotta">Spice</span>
            </span>
            <span className="bg-white/10 text-natural-cream border border-white/20 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
              Hyderabad
            </span>
          </div>
          
          <p className="text-natural-cream/70 text-xs sm:text-sm leading-relaxed max-w-sm">
            Preserving the legendary culinary legacy of the Nizams through painstakingly ground spice mixes, slow wood-fired dum ovens, and exceptional hospitality tailored for modern Hyderabad.
          </p>

          {/* Opening Hours Info Card */}
          <div className="bg-white/5 rounded-xl p-4 border border-white/10 space-y-2 max-w-sm">
            <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider">
              <Clock className="w-4 h-4 text-natural-terracotta" />
              <span>Operational Hours</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px] text-natural-cream/90 font-mono">
              <div>
                <p className="font-semibold text-natural-cream/40">MON - THU</p>
                <p>11:30 AM - 11:00 PM</p>
              </div>
              <div>
                <p className="font-semibold text-natural-cream/40">FRI - SUN</p>
                <p>11:00 AM - 12:00 AM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="md:col-span-3 space-y-4 text-left">
          <h4 className="text-white font-semibold text-xs uppercase tracking-widest border-b border-white/10 pb-2">
            Navigate
          </h4>
          <ul className="space-y-2.5 text-xs">
            <li>
              <a href="#home" className="hover:text-natural-terracotta transition-colors text-natural-cream/80">Home Base</a>
            </li>
            <li>
              <a href="#menu" className="hover:text-natural-terracotta transition-colors text-natural-cream/80">Heritage Menu</a>
            </li>
            <li>
              <a href="#stories" className="hover:text-natural-terracotta transition-colors text-natural-cream/80">Customer Stories</a>
            </li>
            <li>
              <a href="#reservation" className="hover:text-natural-terracotta transition-colors text-natural-cream/80">Seat Reservation</a>
            </li>
            <li>
              <a href="#faqs" className="hover:text-natural-terracotta transition-colors text-natural-cream/80">Frequently Asked Questions</a>
            </li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div className="md:col-span-4 space-y-4 text-left">
          <h4 className="text-white font-semibold text-xs uppercase tracking-widest border-b border-white/10 pb-2">
            Nizami Chronicles
          </h4>
          <p className="text-xs text-natural-cream/60 leading-relaxed">
            Subscribe to receive exclusive monthly recipe secrets, corporate discounts, and weekend table priority notifications.
          </p>

          {!isSubscribed ? (
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email for deals..."
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-xs focus:outline-none focus:ring-2 focus:ring-natural-terracotta"
                id="newsletter-email-input"
              />
              <button
                type="submit"
                className="px-4 bg-natural-terracotta hover:bg-natural-terracotta/90 text-white rounded-lg transition-colors flex items-center justify-center cursor-pointer flex-shrink-0"
                id="newsletter-submit-btn"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          ) : (
            <div className="p-3 bg-emerald-950/80 border border-emerald-500/20 rounded-lg text-xs flex items-start gap-2 text-emerald-300 animate-fade-in">
              <Check className="w-4 h-4 mt-0.5 flex-shrink-0 bg-emerald-500 text-natural-slate rounded-full p-0.5" />
              <div>
                <p className="font-bold">Successfully Subscribed!</p>
                <p className="text-[10px] text-emerald-300/85">Check your inbox for a 10% welcome coupon code soon.</p>
              </div>
            </div>
          )}

          {/* Contact Details */}
          <div className="pt-4 border-t border-white/10 space-y-2 text-xs font-sans">
            <div className="flex items-center gap-2 text-natural-cream/80">
              <MapPin className="w-4 h-4 text-natural-terracotta flex-shrink-0" />
              <span>Road No. 36, Jubilee Hills, Hyderabad, TS, IN</span>
            </div>
            <div className="flex items-center gap-2 text-natural-cream/80">
              <Phone className="w-4 h-4 text-natural-terracotta flex-shrink-0" />
              <span>+91 40 4965 8234 / +91 99887 76655</span>
            </div>
          </div>
        </div>

      </div>

      {/* Copy-rigths */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-natural-cream/50">
        <p>© 2026 Fresh Spice Restaurant. Created for culinary lovers in Hyderabad, India. All Rights Reserved.</p>
        <div className="flex gap-4">
          <span className="hover:text-white cursor-pointer transition-colors">Privacy Charter</span>
          <span className="hover:text-white cursor-pointer transition-colors">Hygiene Certificate</span>
          <span className="hover:text-white cursor-pointer transition-colors">Sitemap</span>
        </div>
      </div>
    </footer>
  );
}
