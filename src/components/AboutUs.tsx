import React from 'react';
import { Flame, ShieldCheck, Heart, Award, Sparkles, ChefHat, GlassWater, Trophy } from 'lucide-react';

export default function AboutUs() {
  const whyChooseUsData = [
    {
      icon: Flame,
      title: 'Legendary Dum Cooking',
      description: 'We slow-cook our biryanis in traditional handi clay pots sealed with fresh dough, trapping the steam and allowing spices to infuse deep into every grain.',
      color: 'text-natural-terracotta bg-natural-terracotta/10 border-natural-terracotta/20'
    },
    {
      icon: ShieldCheck,
      title: 'Milled Fresh Daily',
      description: 'We do not purchase pre-made spice packets. Our spice master handpicks seeds and grinds them fresh every morning, yielding maximum flavor and zero preservatives.',
      color: 'text-natural-olive bg-natural-olive/10 border-natural-olive/20'
    },
    {
      icon: ChefHat,
      title: 'Segment-Tailored Kitchen',
      description: 'Separate prep lines for vegetarian options, pocket pricing for campuses, rapid tidy packing for office employees, and adjustable spice options for travelers.',
      color: 'text-natural-slate bg-natural-slate/10 border-natural-slate/20'
    },
    {
      icon: Award,
      title: 'Five-Star Cleanliness',
      description: 'Our kitchens are fully open to view and undergo strict daily audits. Fresh Spice holds gold certificates for sanitation, hygiene, and safe ingredient handling.',
      color: 'text-natural-terracotta bg-natural-terracotta/10 border-natural-terracotta/20'
    }
  ];

  const services = [
    {
      badge: 'Family Favorite',
      title: 'Grand Dine-In Feast',
      desc: 'Spacious royal booth seatings, ambient live instrumental sitar music, free valet parking, and large shared clay handi portions for families.',
      bg: 'bg-white border-natural-sand'
    },
    {
      badge: 'Office Express',
      title: 'Corporate Desk Catering',
      desc: 'No-spill, leaf-proof, modular lunch boxes delivered warm to Gachibowli and HITEC City tech parks in under 20 minutes.',
      bg: 'bg-natural-cream border-natural-sand'
    },
    {
      badge: 'Campus Special',
      title: 'Student Budget Loyalty',
      desc: 'Pocket-friendly student combos, high-speed charging sockets, lively music, and flat 15% discounts with a valid college ID card.',
      bg: 'bg-white border-natural-sand'
    },
    {
      badge: 'Tourist Delight',
      title: 'Tasting & Spice Tours',
      desc: 'Special Nizami sample platters with customizable, foreigner-friendly mild spice profiles, and chef-led spice table guides.',
      bg: 'bg-natural-cream border-natural-sand'
    }
  ];

  return (
    <div id="about-us-container">
      {/* About Us Section */}
      <section id="about" className="py-20 bg-natural-bg text-left">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left image collage */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&q=80&w=400"
                alt="Fresh Indian Spices"
                className="w-full h-48 md:h-64 object-cover rounded-xl border border-natural-sand shadow-md transform -rotate-1 hover:rotate-0 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              <img
                src="https://images.unsplash.com/photo-1585938338990-267f8b9ec78a?auto=format&fit=crop&q=80&w=400"
                alt="Clay Handi Cook"
                className="w-full h-36 object-cover rounded-xl border border-natural-sand shadow-md"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="pt-8 space-y-4">
              <img
                src="https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=400"
                alt="Grilled Kebab Feast"
                className="w-full h-36 object-cover rounded-xl border border-natural-sand shadow-md"
                referrerPolicy="no-referrer"
              />
              <img
                src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=400"
                alt="Gulab Jamun Sweet"
                className="w-full h-48 md:h-64 object-cover rounded-xl border border-natural-sand shadow-md transform rotate-1 hover:rotate-0 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 bg-natural-olive/10 border border-natural-olive/20 px-3 py-1 rounded-full text-xs text-natural-olive font-semibold tracking-wide">
              <Heart className="w-3.5 h-3.5 animate-pulse text-natural-terracotta" /> Our Roots
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-natural-slate tracking-tight leading-tight">
              A Legacy of <span className="text-natural-terracotta">Fresh Spice</span> in Hyderabad
            </h2>
            <p className="text-natural-text/90 text-sm sm:text-base leading-relaxed font-sans">
              Founded in the bustling culinary heart of Hyderabad, <span className="font-semibold text-natural-slate">Fresh Spice Restaurant</span> was born with a single vision: to salvage the slow-cooked royalty of Nizam cuisines and make it accessible, vibrant, and relevant to modern food lovers.
            </p>
            <p className="text-natural-olive text-xs sm:text-sm leading-relaxed font-sans">
              Our kitchen operates on deep culinary integrity. We don’t use shortcuts, food colorings, or artificial thickening agents. Our master chefs grind our coriander, cardamom, star anise, and Guntur chilies fresh every single morning in heavy stone mortar grinders. This dedication is why local students, corporate lunch warriors, weekend gatherer families, and curious globetrotting tourists make us their favorite food refuge.
            </p>

            <div className="flex gap-6 pt-4 border-t border-natural-sand font-sans text-natural-olive text-xs">
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-natural-terracotta" />
                <span>Award-winning Hyderabad Taste</span>
              </div>
              <div className="flex items-center gap-2">
                <GlassWater className="w-5 h-5 text-natural-terracotta" />
                <span>100% Mineral Purified Water</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-20 bg-natural-cream border-t border-natural-sand text-left">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-natural-terracotta text-xs font-bold uppercase tracking-widest block">
              The Fresh Spice Standard
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-natural-slate tracking-tight">
              Why Gastronomers Choose Us
            </h2>
            <p className="text-natural-text/90 text-sm sm:text-base leading-relaxed">
              We stand apart because we do not compromise. Here are the core pillars that guide our kitchens and dining services to ensure a pristine culinary experience for every guest group.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUsData.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl border border-natural-sand flex flex-col justify-between hover:border-natural-olive/40 hover:shadow-md transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className={`w-11 h-11 rounded-lg flex items-center justify-center border ${item.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base sm:text-lg font-serif font-semibold text-natural-slate">
                      {item.title}
                    </h3>
                    <p className="text-xs text-natural-text/90 leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="py-20 bg-natural-bg border-t border-natural-sand text-left">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-natural-terracotta text-xs font-bold uppercase tracking-widest block">
              Bespoke Dining
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-natural-slate tracking-tight">
              Tailored Restaurant Services
            </h2>
            <p className="text-natural-text/90 text-sm sm:text-base">
              A standard restaurant serves everyone the same way. Fresh Spice understands your unique schedules and needs, crafting specialized systems for each of our guest segments.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((srv, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl border flex flex-col justify-between hover:border-natural-olive/40 hover:shadow-md transition-all duration-300 ${srv.bg}`}
              >
                <div className="space-y-4">
                  <span className="text-[9px] uppercase font-extrabold tracking-widest bg-natural-olive/10 border border-natural-olive/20 text-natural-olive px-2.5 py-1 rounded-full">
                    {srv.badge}
                  </span>
                  <h3 className="text-lg font-serif font-bold text-natural-slate pt-2">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-natural-text/90 leading-relaxed font-sans">
                    {srv.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
