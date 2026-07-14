/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { testimonials } from '../data';
import { Testimonial } from '../types';
import { Star, Quote, Sparkles } from 'lucide-react';

export default function Testimonials() {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Family' | 'Student' | 'Office Employee' | 'Tourist'>('All');

  const filters: ('All' | 'Family' | 'Student' | 'Office Employee' | 'Tourist')[] = [
    'All', 'Family', 'Student', 'Office Employee', 'Tourist'
  ];

  const filteredReviews = testimonials.filter(item => {
    if (activeFilter === 'All') return true;
    return item.role === activeFilter;
  });

  return (
    <section id="stories" className="py-20 bg-natural-cream border-t border-natural-sand">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <span className="text-natural-terracotta text-xs font-bold uppercase tracking-widest block">
            Guest Chronicles
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-natural-slate tracking-tight">
            Loved Across Hyderabad
          </h2>
          <p className="text-natural-text/90 font-sans text-sm md:text-base">
            Read real stories from families hosting Sunday reunions, busy tech-park workers ordering desk lunches, students grabbing study breaks, and international tourists experiencing local spice.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2 justify-center mb-10 overflow-x-auto pb-1">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-xs font-semibold tracking-wider border rounded-full uppercase transition-all cursor-pointer ${
                activeFilter === filter
                  ? 'bg-natural-olive border-natural-olive text-white shadow-sm'
                  : 'bg-white border-natural-sand text-natural-text hover:border-natural-olive/50 hover:text-natural-slate'
              }`}
              id={`test-filter-${filter.toLowerCase().replace(' ', '-')}`}
            >
              {filter === 'All' ? 'All Stories' : `${filter}s`}
            </button>
          ))}
        </div>

        {/* Testimonials Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredReviews.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-6 md:p-8 border border-natural-sand flex flex-col justify-between hover:border-natural-olive/40 hover:shadow-lg transition-all text-left relative overflow-hidden group"
              >
                {/* Background watermarked quote icon */}
                <Quote className="absolute -right-4 -bottom-4 w-28 h-28 stroke-[0.05] text-natural-terracotta/5 rotate-12 pointer-events-none" />

                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4.5 h-4.5 fill-natural-saffron text-natural-saffron" />
                    ))}
                  </div>

                  {/* Quote text */}
                  <p className="text-sm md:text-base text-natural-text/90 italic font-sans leading-relaxed relative z-10">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4 mt-8 pt-4 border-t border-natural-sand">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover border border-natural-sand"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-serif font-bold text-natural-slate text-sm md:text-base group-hover:text-natural-terracotta transition-colors">
                      {item.name}
                    </h4>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-natural-terracotta">
                      Segment: {item.role}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Short Summary stats banner */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 bg-white p-6 rounded-2xl border border-natural-sand text-center font-serif shadow-sm animate-fade-in">
          <div>
            <span className="text-2xl sm:text-3xl font-black text-natural-terracotta">12K+</span>
            <p className="text-[10px] uppercase tracking-widest font-sans font-semibold text-natural-olive mt-1">Families Served</p>
          </div>
          <div>
            <span className="text-2xl sm:text-3xl font-black text-natural-terracotta">80K+</span>
            <p className="text-[10px] uppercase tracking-widest font-sans font-semibold text-natural-olive mt-1">Student Combos Sold</p>
          </div>
          <div>
            <span className="text-2xl sm:text-3xl font-black text-natural-terracotta">15 min</span>
            <p className="text-[10px] uppercase tracking-widest font-sans font-semibold text-natural-olive mt-1">Avg Desk Delivery</p>
          </div>
          <div>
            <span className="text-2xl sm:text-3xl font-black text-natural-terracotta">4.8★</span>
            <p className="text-[10px] uppercase tracking-widest font-sans font-semibold text-natural-olive mt-1">Google Reviews Rating</p>
          </div>
        </div>

      </div>
    </section>
  );
}
