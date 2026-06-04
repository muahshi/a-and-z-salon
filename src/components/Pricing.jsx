import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Pricing() {
  const prices = [
    { service: "Hair Cut", price: "₹299+" },
    { service: "Beard Styling", price: "₹149+" },
    { service: "Hair Spa", price: "₹799+" },
    { service: "Hair Color", price: "₹999+" },
    { service: "Keratin Treatment", price: "₹3499+" },
    { service: "Premium Bridal Makeup", price: "₹9999+" }
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-fuchsia-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-fuchsia-500 text-xs font-bold tracking-[0.4em] uppercase mb-4 font-modern">Investment in Beauty</h3>
          <h2 className="text-4xl md:text-6xl font-luxury font-bold text-white">OUR PRICING</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {prices.map((item, idx) => (
            <div key={idx} className="super-glass p-8 rounded-2xl hover:border-fuchsia-500/50 transition-all duration-300 group flex flex-col justify-between h-48">
              <div>
                <Sparkles className="w-5 h-5 text-fuchsia-500/50 mb-4 group-hover:text-fuchsia-400 transition-colors" />
                <h4 className="text-xl font-luxury font-bold text-white mb-2">{item.service}</h4>
              </div>
              <div className="text-3xl font-modern font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">
                {item.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
