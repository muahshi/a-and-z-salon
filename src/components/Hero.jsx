import React, { useState, useEffect } from 'react';
import { Scissors, Calendar, Phone } from 'lucide-react';

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'bg-black/90 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-luxury font-bold tracking-widest uppercase flex items-center gap-2">
              <span className="text-fuchsia-500 text-3xl">A<span className="text-white">&</span>Z</span> SCISSORS
            </h1>
          </div>
          <div className="hidden lg:flex gap-8 text-xs font-modern font-bold tracking-widest uppercase text-white">
            <a href="#services" className="hover:text-fuchsia-500 transition-colors">Services</a>
            <a href="#results" className="hover:text-fuchsia-500 transition-colors">Results</a>
            <a href="#academy" className="hover:text-fuchsia-500 transition-colors">Academy</a>
            <a href="#reviews" className="hover:text-fuchsia-500 transition-colors">Reviews</a>
          </div>
          <a href="#book" className="bg-fuchsia-600 text-white px-6 py-2.5 rounded text-xs font-bold transition-all uppercase tracking-widest hover:bg-fuchsia-500">
            Book Appointment
          </a>
        </div>
      </header>

      {/* Hero Section with Custom Background */}
      <section className="relative min-h-screen flex items-center bg-black">
        {/* YAHAN APNI HERO IMAGE DAALEIN */}
        <div className="absolute inset-0 z-0">
          <img src="/images/hero-bg.png" alt="Luxury Salon" className="w-full h-full object-cover object-right opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        </div>

        <div className="relative z-10 px-6 max-w-7xl mx-auto w-full mt-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="text-fuchsia-500 text-sm">✧</span>
            <span className="text-xs uppercase tracking-[0.3em] font-modern font-bold text-white">Bhopal's Premium Salon</span>
          </div>
          
          <h2 className="text-6xl md:text-8xl lg:text-[8rem] font-luxury font-bold leading-none mb-4 text-white">
            REDEFINE <br />
            <span className="text-fuchsia-500">BEAUTY.</span>
          </h2>
          
          <p className="text-lg text-zinc-300 font-modern font-light tracking-wide max-w-lg mb-10">
            Premium Hair, Skin & Bridal Makeup Services by Expert Professionals in Shahjahanabad, Bhopal.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#book" className="flex items-center gap-2 bg-fuchsia-600 text-white px-8 py-3.5 rounded text-sm font-bold uppercase tracking-widest hover:bg-fuchsia-500 transition-colors">
              <Calendar className="w-4 h-4" /> Book Appointment
            </a>
            <a href="tel:+917415989069" className="flex items-center gap-2 border border-white/30 text-white px-8 py-3.5 rounded text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
