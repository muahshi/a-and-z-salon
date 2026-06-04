import React from 'react';
import { Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/5 text-center font-modern relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-luxury font-bold tracking-[0.2em] uppercase mb-6">
          <span className="text-fuchsia-500">A&Z</span> Scissors
        </h2>
        <div className="flex justify-center gap-6 mb-8">
          <a href="https://instagram.com/a_and_z_scissors" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-fuchsia-500 transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
        </div>
        <p className="text-zinc-600 text-sm tracking-widest uppercase mb-2">© {new Date().getFullYear()} A & Z Scissors Salon And Academy.</p>
        <p className="text-zinc-700 text-xs">Redefining Excellence in Bhopal.</p>
      </div>
    </footer>
  );
}
