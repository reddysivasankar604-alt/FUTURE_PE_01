/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Reservation } from '../types';
import { Calendar, Clock, Users, ShieldCheck, Ticket, Coffee, Sparkles, X, Printer } from 'lucide-react';

export default function ReservationForm() {
  const [formData, setFormData] = useState<Omit<Reservation, 'audienceType'>>({
    name: '',
    email: '',
    phone: '',
    guests: 4,
    date: '',
    time: '19:30',
    specialRequests: ''
  });

  const [audienceType, setAudienceType] = useState<Reservation['audienceType']>('Family');
  const [confirmedTicket, setConfirmedTicket] = useState<{
    ticketId: string;
    tableNo: string;
    perk: string;
    details: Reservation;
  } | null>(null);

  const audiencePerks = {
    Family: 'Spacious corner family booth + free valet parking arranged.',
    Student: 'Vibrant college table allocated + flat 15% discount eligible.',
    'Office Employee': 'Silent high-speed Wi-Fi table with accessible power outlets.',
    Tourist: 'Priority window view + direct Table-Side Spice Level Consultation.'
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'guests' ? parseInt(value) || 1 : value
    }));
  };

  const handleBookTable = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date) return;

    // Simulate booking
    const ticketId = 'TKT-' + Math.floor(100000 + Math.random() * 900000);
    const tableNo = 'T-' + Math.floor(1 + Math.random() * 30);
    const perk = audiencePerks[audienceType];

    setConfirmedTicket({
      ticketId,
      tableNo,
      perk,
      details: {
        ...formData,
        audienceType
      }
    });
  };

  const resetBooking = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      guests: 4,
      date: '',
      time: '19:30',
      specialRequests: ''
    });
    setConfirmedTicket(null);
  };

  return (
    <section id="reservation" className="py-20 bg-natural-cream border-t border-natural-sand scroll-mt-10">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Description Column */}
          <div className="lg:col-span-5 text-left space-y-6">
            <span className="text-natural-terracotta text-xs font-bold uppercase tracking-widest block">
              Dine With Us
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-natural-slate tracking-tight leading-tight">
              Reserve Your <span className="text-natural-terracotta">Nizami Experience</span>
            </h2>
            <p className="text-natural-text/90 font-sans text-sm md:text-base leading-relaxed">
              Skip the long queues at Jubilee Hills. Secure your tables in advance. Our digital reservation system lets our chefs plan preparation and ground fresh spice mixtures according to your customized table audience.
            </p>

            <div className="space-y-4 pt-4 border-t border-natural-sand">
              <div className="flex items-start gap-3 text-sm text-natural-text">
                <Users className="w-5 h-5 text-natural-terracotta flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-natural-slate">Large Family Seating</h4>
                  <p className="text-xs text-natural-olive">Special private booths accommodating up to 16 guests.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm text-natural-text">
                <Clock className="w-5 h-5 text-natural-olive flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-natural-slate">Office Hour Guarantee</h4>
                  <p className="text-xs text-natural-olive">Reserved corporate tables served in under 15 minutes.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm text-natural-text">
                <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-natural-slate">No-Show Safety</h4>
                  <p className="text-xs text-natural-olive">We hold your reserved tables for up to 20 minutes past booking.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form/Ticket Column */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {!confirmedTicket ? (
                <motion.div
                  key="booking-form"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="bg-white border border-natural-sand p-6 md:p-8 rounded-2xl shadow-lg relative text-left text-natural-text"
                >
                  <h3 className="text-xl font-serif font-bold text-natural-slate mb-6">
                    Online Table Scheduler
                  </h3>

                  <form onSubmit={handleBookTable} className="space-y-4 font-sans text-natural-text text-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-natural-slate uppercase tracking-wider mb-1.5">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g. Rajesh Reddy"
                          className="w-full bg-natural-cream border border-natural-sand rounded-lg px-3.5 py-2 text-natural-slate focus:outline-none focus:ring-2 focus:ring-natural-terracotta"
                          id="reserve-name-input"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-natural-slate uppercase tracking-wider mb-1.5">
                          Mobile Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="e.g. +91 91234 56789"
                          className="w-full bg-natural-cream border border-natural-sand rounded-lg px-3.5 py-2 text-natural-slate focus:outline-none focus:ring-2 focus:ring-natural-terracotta"
                          id="reserve-phone-input"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-natural-slate uppercase tracking-wider mb-1.5">
                          Guests Count
                        </label>
                        <input
                          type="number"
                          name="guests"
                          required
                          min="1"
                          max="20"
                          value={formData.guests}
                          onChange={handleInputChange}
                          className="w-full bg-natural-cream border border-natural-sand rounded-lg px-3.5 py-2 text-natural-slate focus:outline-none focus:ring-2 focus:ring-natural-terracotta font-mono"
                          id="reserve-guests-input"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-natural-slate uppercase tracking-wider mb-1.5">
                          Select Date
                        </label>
                        <input
                          type="date"
                          name="date"
                          required
                          value={formData.date}
                          onChange={handleInputChange}
                          className="w-full bg-natural-cream border border-natural-sand rounded-lg px-3.5 py-2 text-natural-slate focus:outline-none focus:ring-2 focus:ring-natural-terracotta font-mono text-xs"
                          id="reserve-date-input"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-natural-slate uppercase tracking-wider mb-1.5">
                          Arrival Time
                        </label>
                        <select
                          name="time"
                          value={formData.time}
                          onChange={handleInputChange}
                          className="w-full bg-natural-cream border border-natural-sand rounded-lg px-3 py-2 text-natural-slate focus:outline-none focus:ring-2 focus:ring-natural-terracotta font-mono text-xs"
                          id="reserve-time-input"
                        >
                          <option value="11:30">11:30 AM (Early Lunch)</option>
                          <option value="13:00">01:00 PM (Lunch Rush)</option>
                          <option value="14:30">02:30 PM (Late Lunch)</option>
                          <option value="18:30">06:30 PM (Early Dinner)</option>
                          <option value="19:30">07:30 PM (Dinner Hour)</option>
                          <option value="21:00">09:00 PM (Late Dinner)</option>
                          <option value="22:30">10:30 PM (Late Night Feast)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-natural-slate uppercase tracking-wider mb-1.5">
                        Who is dining? (Tailors preparation & seating)
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {(['Family', 'Student', 'Office Employee', 'Tourist'] as Reservation['audienceType'][]).map((type) => (
                          <button
                            type="button"
                            key={type}
                            onClick={() => setAudienceType(type)}
                            className={`py-2 px-1 text-center rounded-lg border text-xs font-semibold transition-all cursor-pointer ${
                              audienceType === type
                                ? 'bg-natural-olive border-natural-olive text-white shadow-sm'
                                : 'bg-natural-cream border-natural-sand text-natural-olive hover:text-natural-slate hover:bg-white'
                            }`}
                            id={`reserve-type-${type.toLowerCase().replace(' ', '-')}`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-natural-slate uppercase tracking-wider mb-1.5">
                        Special Requests / Spice preferences / Birthday setups
                      </label>
                      <textarea
                        name="specialRequests"
                        rows={2}
                        value={formData.specialRequests}
                        onChange={handleInputChange}
                        placeholder="e.g. Need high-chair for toddler, extremely mild spice preference for foreign guest..."
                        className="w-full bg-natural-cream border border-natural-sand rounded-lg p-3 text-natural-slate text-xs focus:outline-none focus:ring-2 focus:ring-natural-terracotta"
                        id="reserve-requests-input"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-natural-terracotta hover:bg-natural-terracotta/90 text-white font-bold text-xs uppercase tracking-widest rounded-lg transition-colors cursor-pointer shadow-md"
                      id="reserve-submit-btn"
                    >
                      Establish Seat Reservation
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="booking-ticket"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-white text-natural-text rounded-2xl overflow-hidden shadow-xl relative border-4 border-natural-sand text-left font-serif"
                >
                  {/* Decorative Ticket Notch */}
                  <div className="absolute top-1/2 -left-3 transform -translate-y-1/2 w-6 h-6 bg-natural-cream rounded-full"></div>
                  <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 w-6 h-6 bg-natural-cream rounded-full"></div>

                  {/* Ticket Header */}
                  <div className="bg-gradient-to-r from-natural-olive to-natural-terracotta text-white p-5 flex items-center justify-between border-b border-dashed border-natural-sand">
                    <div>
                      <h4 className="text-xl font-bold uppercase tracking-wider">Nizami Seat Voucher</h4>
                      <p className="text-[10px] uppercase tracking-widest font-sans font-bold text-white/90">Fresh Spice Jubilee Hills</p>
                    </div>
                    <Ticket className="w-10 h-10 stroke-1 text-white animate-pulse" />
                  </div>

                  {/* Ticket Details */}
                  <div className="p-6 md:p-8 space-y-6">
                    <div className="grid grid-cols-2 gap-4 text-xs font-sans">
                      <div>
                        <span className="text-natural-olive uppercase tracking-wider font-semibold text-[10px] block">Guest Patron</span>
                        <span className="text-sm font-bold text-natural-slate font-serif">{confirmedTicket.details.name}</span>
                      </div>
                      <div>
                        <span className="text-natural-olive uppercase tracking-wider font-semibold text-[10px] block">Booking Code</span>
                        <span className="text-sm font-mono font-bold text-natural-terracotta">{confirmedTicket.ticketId}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-4 gap-2 text-xs font-sans border-t border-b border-natural-sand py-4">
                      <div>
                        <span className="text-natural-olive text-[9px] uppercase font-bold block">Guests</span>
                        <span className="text-base font-bold font-mono text-natural-slate">{confirmedTicket.details.guests}</span>
                      </div>
                      <div>
                        <span className="text-natural-olive text-[9px] uppercase font-bold block">Table No</span>
                        <span className="text-base font-bold font-mono text-natural-terracotta">{confirmedTicket.tableNo}</span>
                      </div>
                      <div>
                        <span className="text-natural-olive text-[9px] uppercase font-bold block">Date</span>
                        <span className="text-sm font-bold font-mono text-natural-slate">{confirmedTicket.details.date}</span>
                      </div>
                      <div>
                        <span className="text-natural-olive text-[9px] uppercase font-bold block">Time</span>
                        <span className="text-sm font-bold font-mono text-natural-slate">{confirmedTicket.details.time}</span>
                      </div>
                    </div>

                    {/* Perk message depending on audience */}
                    <div className="bg-natural-cream rounded-lg p-3.5 border border-natural-sand font-sans text-xs flex items-start gap-2.5">
                      <Sparkles className="w-4 h-4 text-natural-terracotta flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-natural-slate uppercase tracking-wider text-[9px] block">Exclusive Segment Perk</span>
                        <span className="text-natural-text/90 italic leading-snug">{confirmedTicket.perk}</span>
                      </div>
                    </div>

                    {confirmedTicket.details.specialRequests && (
                      <div className="text-xs font-sans text-natural-text">
                        <span className="text-natural-olive font-bold block uppercase text-[9px]">Kitchen Requests</span>
                        <p className="italic bg-natural-cream p-2.5 rounded border border-natural-sand mt-1">&ldquo;{confirmedTicket.details.specialRequests}&rdquo;</p>
                      </div>
                    )}

                    {/* QR Code Mock / Instructions */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-natural-sand">
                      <div className="bg-natural-cream p-2 rounded-lg border border-natural-sand w-24 h-24 flex items-center justify-center font-mono text-[9px] text-center text-natural-olive">
                        [ SECURE QR CODE ]
                      </div>
                      <div className="font-sans text-xs text-natural-text space-y-1 text-center sm:text-left">
                        <p className="text-natural-slate font-bold">Important Instructions:</p>
                        <p>✓ SMS confirmation has been sent to {confirmedTicket.details.phone}.</p>
                        <p>✓ Tables will be preserved for up to 20 minutes.</p>
                        <p>✓ No booking fee charged! Pure, authentic Nizam hospitality.</p>
                      </div>
                    </div>

                    {/* Action buttons on ticket */}
                    <div className="flex gap-3 pt-4 font-sans text-xs">
                      <button
                        onClick={() => window.print()}
                        className="flex-1 py-2.5 px-4 bg-natural-olive hover:bg-natural-olive/90 text-white font-semibold rounded-lg flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Printer className="w-4 h-4" /> Print Ticket
                      </button>
                      <button
                        onClick={resetBooking}
                        className="flex-1 py-2.5 px-4 bg-transparent border border-natural-sand text-natural-olive font-semibold rounded-lg hover:bg-natural-cream flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <X className="w-3.5 h-3.5" /> Close Voucher
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
