import React from 'react';
import { Instagram } from 'lucide-react';

export default function InstagramWall() {
  const posts = [
    "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=600&auto=format&fit=crop"
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <div>
            <h3 className="text-fuchsia-500 text-xs font-bold tracking-[0.4em] uppercase mb-4 font-modern">@a_and_z_scissors</h3>
            <h2 className="text-4xl md:text-6xl font-luxury font-bold text-white">FOLLOW OUR JOURNEY</h2>
          </div>
          <div className="flex gap-6 text-center">
            <div><p className="text-2xl font-luxury font-bold text-white">457</p><p className="text-xs text-zinc-500 font-modern uppercase tracking-widest">Posts</p></div>
            <div><p className="text-2xl font-luxury font-bold text-white">3592</p><p className="text-xs text-zinc-500 font-modern uppercase tracking-widest">Followers</p></div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {posts.map((img, i) => (
            <a key={i} href="https://instagram.com/a_and_z_scissors" target="_blank" rel="noreferrer" className="relative group overflow-hidden rounded-xl aspect-square block">
              <img src={img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Instagram Post" />
              <div className="absolute inset-0 bg-fuchsia-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                <Instagram className="w-8 h-8 text-white" />
              </div>
            </a>
          ))}
        </div>
        <div className="text-center">
          <a href="https://instagram.com/a_and_z_scissors" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white px-8 py-4 rounded-full font-modern font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform">
            <Instagram className="w-5 h-5" /> Follow Us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
