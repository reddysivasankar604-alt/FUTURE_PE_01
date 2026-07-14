/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Users, BookOpen, GraduationCap, Briefcase, MapPin, Sparkles, ArrowRight, PhoneCall } from 'lucide-react';

interface HeroSectionProps {
  onExploreMenu: () => void;
  onBookTable: () => void;
}

type AudienceType = 'Family' | 'Student' | 'Office' | 'Tourist';

export default function HeroSection({ onExploreMenu, onBookTable }: HeroSectionProps) {
  const [selectedAudience, setSelectedAudience] = useState<AudienceType>('Family');

  const audienceDetails = {
    Family: {
      title: 'Gather Around for a Royal Feast',
      perk: 'Spacious family booths & free valet parking.',
      recommendation: 'Try our "Royal Hyderabadi Mutton Dum Biryani" (Serves 2-3). Perfect for shared family Sundays.',
      badgeColor: 'bg-natural-terracotta/10 text-natural-terracotta border-natural-terracotta/20',
      actionLabel: 'Book Family Booth',
      icon: Users,
    },
    Student: {
      title: 'High Taste, Low Budget Hangouts',
      perk: 'Flat 15% discount on weekdays with college ID.',
      recommendation: 'Try our "Student Biryani & Coke Special" for only ₹180! Incredible taste that fits your wallet.',
      badgeColor: 'bg-natural-saffron/20 text-natural-olive border-natural-saffron/30',
      actionLabel: 'Claim Student Combo',
      icon: GraduationCap,
    },
    Office: {
      title: 'Beat the Midday Rush & Fast Meetings',
      perk: 'Guaranteed 15-minute express delivery to local tech parks.',
      recommendation: 'Try our "Express Nizami Chicken Lunchbox" (₹220). Tidy, complete, and optimized for office desk dining.',
      badgeColor: 'bg-natural-slate/10 text-natural-slate border-natural-slate/20',
      actionLabel: 'Order Lunchboxes',
      icon: Briefcase,
    },
    Tourist: {
      title: 'Discover India’s Culinary Capital',
      perk: 'Customizable, beginner-safe mild spice settings.',
      recommendation: 'Try the "Nizami Legacy Tasting Platter" (₹490). Taste a variety of iconic dishes safely customized for your palate.',
      badgeColor: 'bg-natural-olive/15 text-natural-olive border-natural-olive/20',
      actionLabel: 'Reserve Tasting Platter',
      icon: MapPin,
    },
  };

  const activeInfo = audienceDetails[selectedAudience];
  const ActiveIcon = activeInfo.icon;

  return (
    <section id="home" className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-natural-bg text-natural-text pt-24 pb-12">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=1920"
          alt="Fresh Spice Feast Background"
          className="w-full h-full object-cover opacity-[0.08] scale-105 filter blur-[1px]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-natural-bg/50 to-natural-bg"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-natural-bg/40 via-natural-bg/80 to-natural-bg"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Copy Column */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-natural-olive/10 border border-natural-olive/20 text-natural-olive px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider"
          >
            <Sparkles className="w-4 h-4 text-natural-terracotta animate-pulse" />
            Authentic Hyderabadi Nizami Cuisine
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight leading-tight text-natural-slate"
          >
            Savor the Authentic Heritage of <span className="text-natural-terracotta">Hyderabadi Spices</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-natural-text/90 font-sans max-w-2xl leading-relaxed"
          >
            From slow-cooked clay handi dum biryanis to charcoal-grilled melt-in-the-mouth seekh kebabs, we grind our spices fresh every single morning. We curate specialized experiences tailored specifically for Hyderabad’s diverse food lovers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <button
              onClick={onExploreMenu}
              className="px-8 py-4 bg-natural-terracotta hover:bg-natural-terracotta/90 text-white font-semibold rounded-lg shadow-md hover:shadow-natural-terracotta/20 transition-all flex items-center gap-2 text-base group cursor-pointer"
              id="hero-explore-btn"
            >
              Explore Our Menu
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={onBookTable}
              className="px-8 py-4 bg-transparent hover:bg-natural-warmgray text-natural-slate border border-natural-sand font-semibold rounded-lg transition-all text-base cursor-pointer"
              id="hero-reserve-btn"
            >
              Book a Table
            </button>
          </motion.div>

          {/* Quick contact banner */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-6 pt-6 border-t border-natural-sand text-sm text-natural-olive"
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-natural-terracotta" />
              <span>Jubilee Hills, Hyderabad, India</span>
            </div>
            <div className="flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-natural-terracotta" />
              <span>+91 40 4965 8234</span>
            </div>
          </motion.div>
        </div>

        {/* Right Personalizer Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5 bg-white border border-natural-sand rounded-2xl p-6 shadow-xl relative text-natural-text"
        >
          <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-natural-terracotta text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-md">
            Interactive
          </div>

          <h3 className="text-xl font-serif font-bold text-natural-slate mb-4 text-center">
            Who is dining with us today?
          </h3>
          <p className="text-xs text-natural-olive text-center mb-6">
            Click your group below to unlock tailored dishes, exclusive pricing, and specific arrangements!
          </p>

          {/* Persona selector tabs */}
          <div className="grid grid-cols-2 gap-2.5 mb-6">
            {(['Family', 'Student', 'Office', 'Tourist'] as AudienceType[]).map((type) => {
              const info = audienceDetails[type];
              const Icon = info.icon;
              const isActive = selectedAudience === type;

              return (
                <button
                  key={type}
                  onClick={() => setSelectedAudience(type)}
                  className={`flex items-center justify-center gap-2 py-3 px-3 rounded-lg border text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-natural-olive border-natural-olive text-white shadow-md'
                      : 'bg-natural-cream border-natural-sand text-natural-text hover:border-natural-olive/50 hover:text-natural-slate'
                  }`}
                  id={`persona-tab-${type.toLowerCase()}`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-natural-terracotta'}`} />
                  {type}
                </button>
              );
            })}
          </div>

          {/* Dynamic welcome card container */}
          <div className="bg-natural-cream rounded-xl p-5 border border-natural-sand relative min-h-[170px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedAudience}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.25 }}
                className="space-y-3 text-left"
              >
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full border ${activeInfo.badgeColor}`}>
                    {selectedAudience} Special
                  </span>
                  <ActiveIcon className="w-4 h-4 text-natural-terracotta" />
                </div>

                <h4 className="text-base font-bold text-natural-slate leading-snug">
                  {activeInfo.title}
                </h4>

                <p className="text-xs text-natural-olive italic">
                  &ldquo;{activeInfo.perk}&rdquo;
                </p>

                <p className="text-xs text-natural-text">
                  <span className="text-natural-terracotta font-semibold">Chef Recommends: </span>
                  {activeInfo.recommendation}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Quick Action Button within Personalizer */}
            <div className="mt-5 pt-3 border-t border-natural-sand">
              <button
                onClick={() => {
                  if (selectedAudience === 'Student' || selectedAudience === 'Office') {
                    onExploreMenu();
                  } else {
                    onBookTable();
                  }
                }}
                className="w-full py-2.5 px-4 bg-natural-terracotta hover:bg-natural-terracotta/90 text-white font-bold text-xs rounded-md tracking-wider uppercase transition-colors flex items-center justify-center gap-1 cursor-pointer shadow-sm"
                id="hero-persona-action-btn"
              >
                <span>{activeInfo.actionLabel}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
