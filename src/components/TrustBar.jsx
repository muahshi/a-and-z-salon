import React from 'react';
import { Star } from 'lucide-react';

export default function TrustBar() {
  return (
    <section className="py-12 border-y border-white/5 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5 text-center">
          <div className="px-4 group">
            <div className="text-4xl md:text-5xl font-luxury font-bold text-white mb-2 flex justify-center items-center gap-2 group-hover:text-fuchsia-400 transition-colors">
              4.9 <Star className="w-6 h-6 text-fuchsia-500 fill-fuchsia-500" />
            </div>
            <p className="text-zinc-500 text-xs font-modern font-bold tracking-[0.2em] uppercase">Google Rating</p>
          </div>
          <div className="px-4 group">
            <div className="text-4xl md:text-5xl font-luxury font-bold text-white mb-2 group-hover:text-fuchsia-400 transition-colors">3.5k+</div>
            <p className="text-zinc-500 text-xs font-modern font-bold tracking-[0.2em] uppercase">Instagram Fans</p>
          </div>
          <div className="px-4 group">
            <div className="text-4xl md:text-5xl font-luxury font-bold text-white mb-2 group-hover:text-fuchsia-400 transition-colors">95+</div>
            <p className="text-zinc-500 text-xs font-modern font-bold tracking-[0.2em] uppercase">5-Star Reviews</p>
          </div>
          <div className="px-4 group">
            <div className="text-4xl md:text-5xl font-luxury font-bold text-white mb-2 group-hover:text-fuchsia-400 transition-colors">#1</div>
            <p className="text-zinc-500 text-xs font-modern font-bold tracking-[0.2em] uppercase">Salon In Bhopal</p>
          </div>
        </div>
      </div>
    </section>
  );
}
