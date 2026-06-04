import React, { useState, useEffect } from 'react';
import { Scissors, ChevronRight, Sparkles, Calendar } from 'lucide-react';

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'bg-black/90 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="bg-white text-black p-2 rounded-sm rotate-45 hover:rotate-180 transition-transform duration-1000">
              <Scissors className="w-5 h-5 -rotate-45" />
            </div>
            <h1 className="text-2xl font-luxury font-bold tracking-[0.2em] uppercase">
              <span className="text-fuchsia-500">A&Z</span> Scissors
            </h1>
          </div>
          <a href="#book" className="hidden md:flex items-center gap-2 group border border-white/20 px-6 py-2.5 rounded-full hover:bg-white hover:text-black transition-all duration-500 uppercase tracking-widest text-xs font-modern font-bold">
            Reserve Slot <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </header>

      <section className="relative min-h-[100vh] flex items-center justify-center bg-parallax">
        <div className="absolute inset-0 bg-black/75 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black"></div>
        <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-fuchsia-600/20 rounded-full blur-[130px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none"></div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20 float-anim">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 backdrop-blur-md mb-8">
            <Sparkles className="w-4 h-4 text-fuchsia-400" />
            <span className="text-xs uppercase tracking-[0.3em] font-modern font-bold text-fuchsia-300">Bhopal's Premium Experience</span>
          </div>
          <h2 className="text-5xl md:text-8xl lg:text-[9rem] font-luxury font-bold leading-none mb-6">
            REDEFINE <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-200 to-fuchsia-400 animate-gradient">BEAUTY.</span>
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 font-modern font-light tracking-wide max-w-2xl mx-auto mb-12">
            Ek elite sanctuary aapke hair, skin, aur bridal transformations ke liye. World-class styling ka anubhav karein Shahjahanabad mein.
          </p>
          <a href="#book" className="relative inline-flex group">
            <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-fuchsia-600 to-pink-500 rounded-full blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
            <button className="relative inline-flex items-center gap-3 px-10 py-4 text-sm font-modern font-bold text-white uppercase tracking-[0.2em] transition-all duration-200 bg-black border border-white/10 rounded-full hover:bg-zinc-900">
              <Calendar className="w-5 h-5 text-fuchsia-400" />
              Book Appointment
            </button>
          </a>
        </div>
      </section>
    </>
  );
}
