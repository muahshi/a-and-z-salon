import React from 'react';
import { Scissors, User, Droplets, Palette, Sparkles, Crown } from 'lucide-react';

export default function Pricing() {
  const prices = [
    { service: "Hair Cut", price: "₹299+", icon: Scissors },
    { service: "Beard Styling", price: "₹149+", icon: User },
    { service: "Hair Spa", price: "₹799+", icon: Droplets },
    { service: "Hair Color", price: "₹999+", icon: Palette },
    { service: "Keratin Treatment", price: "₹3499+", icon: Sparkles },
    { service: "Bridal Makeup", price: "₹9999+", icon: Crown }
  ];

  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-fuchsia-500 text-xs font-bold tracking-[0.4em] uppercase mb-4 font-modern">Our Services & Pricing</h3>
          <h2 className="text-3xl md:text-5xl font-luxury font-bold text-white">Premium Services at Affordable Prices</h2>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          {prices.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-[#0a0a0a] border border-white/5 p-8 rounded-xl hover:border-fuchsia-500/50 transition-all duration-300 flex flex-col items-center text-center group cursor-pointer">
                {/* Neon Icon Styling */}
                <div className="w-16 h-16 mb-6 relative">
                  <Icon className="w-full h-full text-fuchsia-500 absolute z-10 drop-shadow-[0_0_15px_rgba(217,70,239,0.8)] group-hover:scale-110 transition-transform duration-300" strokeWidth={1} />
                </div>
                <h4 className="text-sm font-luxury font-bold text-white mb-4">{item.service}</h4>
                <div className="text-2xl font-modern font-bold text-white mb-6">
                  {item.price}
                </div>
                <button className="text-fuchsia-500 text-xs font-bold uppercase tracking-widest group-hover:text-fuchsia-400">
                  Book Now
                </button>
              </div>
            );
          })}
        </div>
        <p className="text-center text-zinc-600 text-xs mt-8">*Prices may vary as per hair length and requirement.</p>
      </div>
    </section>
  );
}
