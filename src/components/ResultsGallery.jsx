import React from 'react';

export default function ResultsGallery() {
  const images = [
    "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1595476108010-b4d1f10d5e42?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512496015851-a1cbfc38ae30?q=80&w=800&auto=format&fit=crop"
  ];

  return (
    <section className="py-24 bg-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-fuchsia-500 text-xs font-bold tracking-[0.4em] uppercase mb-4 font-modern">Real Transformations</h3>
          <h2 className="text-4xl md:text-6xl font-luxury font-bold text-white">RESULTS THAT SPEAK</h2>
        </div>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl break-inside-avoid">
              <img src={img} alt="Salon Result" className="w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                <span className="border border-fuchsia-500 text-fuchsia-400 px-6 py-2 rounded-full font-modern text-xs tracking-widest uppercase font-bold">Before / After</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
