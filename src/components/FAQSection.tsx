/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { faqs } from '../data';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaqId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faqs" className="py-20 bg-natural-cream border-t border-natural-sand scroll-mt-10">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <span className="text-natural-terracotta text-xs font-bold uppercase tracking-widest block">
            Common Inquiries
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-natural-slate tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-natural-text/90 font-sans text-sm max-w-2xl mx-auto">
            Got queries about parking, spice intensity, student ID checks, or corporate accounts? Find quick, direct answers from our team below.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openFaqId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-natural-sand hover:border-natural-olive/40 transition-colors overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-serif font-semibold text-natural-slate hover:text-natural-terracotta transition-colors cursor-pointer"
                  id={`faq-btn-${faq.id}`}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-natural-terracotta flex-shrink-0" />
                    <span className="text-sm sm:text-base leading-relaxed">{faq.question}</span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-natural-olive transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 text-natural-terracotta' : ''}`} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-5 pt-1 text-left font-sans text-xs sm:text-sm text-natural-text leading-relaxed border-t border-natural-sand pl-13 animate-fade-in">
                        <p>{faq.answer}</p>
                        <span className="inline-block mt-3 bg-natural-cream text-natural-olive text-[10px] font-bold uppercase px-2.5 py-0.5 rounded border border-natural-sand">
                          Tagged: {faq.category}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
