import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Star, Instagram, Scissors, Calendar, User, ChevronRight, Sparkles, Quote } from 'lucide-react';

export default function App() {
  // Booking Form State - User ka data yahan save hoga
  const [formData, setFormData] = useState({ name: '', service: 'Hair Styling', date: '', time: '' });
  
  // Navbar Scroll Effect ke liye state
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // WhatsApp Booking Logic - Direct message send karne ke liye
  const handleBooking = (e) => {
    e.preventDefault();
    const text = `VIP Appointment Request:\n\n*Naam:* ${formData.name}\n*Service:* ${formData.service}\n*Tarik (Date):* ${formData.date}\n*Samay (Time):* ${formData.time}\n\nKripya meri booking confirm karein.`;
   window.open(`https://wa.me/917415989069?text=${encodeURIComponent(text)}`, '_blank');
  };

  // SEO Schema Markup (Google Search ke liye)
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    "name": "A And Z Scissors Salon And Academy",
    "image": "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2074&auto=format&fit=crop",
    "@id": "https://example.com",
    "url": "https://example.com",
    "telephone": "+917415989069",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "36 Second Floor, Aali Manzil Road, Opposite Masjid Yaqoob Khan, Badabagh, Shahjahanabad",
      "addressLocality": "Bhopal",
      "postalCode": "462001",
      "addressRegion": "Madhya Pradesh",
      "addressCountry": "IN"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "95"
    }
  };

  return (
    <div className="font-sans bg-black text-zinc-100 min-h-screen selection:bg-fuchsia-600 selection:text-white overflow-x-hidden">
      
      {/* Schema injected for AEO & Entity SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />

      {/* Extreme Custom CSS for Animations & Premium Fonts */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;800&family=Montserrat:wght@200;300;400;600&display=swap');
        .font-luxury { font-family: 'Cinzel', serif; }
        .font-modern { font-family: 'Montserrat', sans-serif; }
        
        /* Smooth Parallax Background */
        .bg-parallax {
          background-image: url('https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=2071&auto=format&fit=crop');
          background-attachment: fixed;
          background-position: center;
          background-size: cover;
        }

        /* Moving Gradient Text */
        .animate-gradient {
          background-size: 200% auto;
          animation: textShine 4s linear infinite;
        }
        @keyframes textShine {
          to { background-position: 200% center; }
        }

        /* Floating Element Animation */
        .float-anim { animation: float 6s ease-in-out infinite; }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }

        /* Ultra Glass Panel */
        .super-glass {
          background: rgba(10, 10, 10, 0.5);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 30px 60px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.1);
        }
      `}} />

      {/* 1. Floating Navbar */}
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

      {/* 2. Hero Section - Parallax & Deep Glows */}
      <section className="relative min-h-[100vh] flex items-center justify-center bg-parallax">
        {/* Dark Overlays for depth */}
        <div className="absolute inset-0 bg-black/75 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black"></div>
        
        {/* Neon Glow Spheres (Wow Factor) */}
        <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-fuchsia-600/20 rounded-full blur-[130px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none"></div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20 float-anim">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 backdrop-blur-md mb-8">
            <Sparkles className="w-4 h-4 text-fuchsia-400" />
            <span className="text-xs uppercase tracking-[0.3em] font-modern font-bold text-fuchsia-300">Bhopal's Premium Experience</span>
          </div>
          
          <h2 className="text-5xl md:text-8xl lg:text-[9rem] font-luxury font-bold leading-none mb-6">
            REDEFINE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-200 to-fuchsia-400 animate-gradient">BEAUTY.</span>
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

      {/* 3. Reputation & Trust Section (Entity SEO) */}
      <section className="py-12 border-b border-white/5 bg-black">
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

      {/* 4. Services Section - Monochrome to Color Hover Effect */}
      <section className="py-32 relative bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
            <div>
              <h3 className="text-fuchsia-500 text-xs font-bold tracking-[0.4em] uppercase mb-4 font-modern">Humari Suvidhayein</h3>
              <h2 className="text-5xl md:text-7xl font-luxury font-bold text-white">THE MENU</h2>
            </div>
            <p className="text-zinc-500 font-modern font-light max-w-sm">Premium treatments jo aapke look aur confidence ko ek naye level par le jayenge.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Hair Artistry", img: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&w=1887&auto=format&fit=crop", desc: "Expert cuts, global coloring aur advanced keratin treatments." },
              { title: "Bridal Couture", img: "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?q=80&w=1936&auto=format&fit=crop", desc: "Aapke khaas din ke liye HD aur Airbrush makeup by professionals." },
              { title: "A&Z Academy", img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop", desc: "Beauty industry mein career banayein. Professional courses available." }
            ].map((srv, i) => (
              <div key={i} className="group relative h-[500px] overflow-hidden rounded-sm cursor-pointer border border-white/5">
                {/* Grayscale to color transition */}
                <img src={srv.img} alt={srv.title} className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-110 opacity-60 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-8 h-[2px] bg-fuchsia-500 mb-4 group-hover:w-16 transition-all duration-500"></div>
                  <h4 className="text-3xl font-luxury font-bold mb-2 text-white">{srv.title}</h4>
                  <p className="text-zinc-400 font-modern font-light text-sm tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-700">{srv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Testimonials (Client Reviews - Trust Builder) */}
      <section className="py-24 bg-zinc-950 border-y border-white/5 relative overflow-hidden">
        {/* Glow effect behind testimonials */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-fuchsia-900/10 blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-fuchsia-500 text-xs font-bold tracking-[0.4em] uppercase mb-4 font-modern">Client Feedback</h3>
            <h2 className="text-4xl md:text-5xl font-luxury font-bold text-white">WHAT THEY SAY</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Priya Sharma", review: "Bhopal ka sabse best salon! Hair color aur spa service bahut hi premium thi. Staff ka behavior bhi bahut accha hai." },
              { name: "Sanya Khan", review: "Apni shadi ka bridal makeup yahin se karwaya tha. I looked exactly how I dreamed. Airbrush makeup was flawless!" },
              { name: "Rahul Verma", review: "Skin treatment aur grooming ke liye best place. Hygiene aur professionalism level is totally international." }
            ].map((review, idx) => (
              <div key={idx} className="bg-black border border-white/10 p-8 rounded-2xl hover:border-fuchsia-500/50 transition-colors duration-300">
                <Quote className="w-8 h-8 text-fuchsia-500/50 mb-6" />
                <p className="text-zinc-300 font-modern font-light text-sm leading-relaxed mb-6">"{review.review}"</p>
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-500">
                    <Star className="w-4 h-4 fill-yellow-500" />
                    <Star className="w-4 h-4 fill-yellow-500" />
                    <Star className="w-4 h-4 fill-yellow-500" />
                    <Star className="w-4 h-4 fill-yellow-500" />
                    <Star className="w-4 h-4 fill-yellow-500" />
                  </div>
                  <span className="text-white font-modern font-bold text-sm ml-2">- {review.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Booking Form - Ultra Glassmorphism */}
      <section id="book" className="py-32 relative bg-parallax">
        <div className="absolute inset-0 bg-black/85"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="super-glass p-8 md:p-16 rounded-[2rem]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              <div>
                <h3 className="text-fuchsia-500 text-xs font-bold tracking-[0.4em] uppercase mb-4 font-modern">Reservation</h3>
                <h2 className="text-4xl md:text-6xl font-luxury font-bold mb-6 leading-tight text-white">
                  SECURE <br/> YOUR SPOT.
                </h2>
                <p className="text-zinc-400 font-modern font-light mb-10 max-w-md leading-relaxed">
                  Bhopal ke sabse premium salon mein apna samay reserve karein. WhatsApp ke zariye direct aur fast booking.
                </p>
                
                <div className="space-y-6 text-sm font-modern">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/5 p-3 rounded-full border border-white/10">
                      <MapPin className="w-5 h-5 text-fuchsia-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold tracking-widest uppercase mb-1">Location</h4>
                      <p className="text-zinc-400">36 2nd Floor, Aali Manzil Rd,<br/>Shahjahanabad, Bhopal - 462001</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-white/5 p-3 rounded-full border border-white/10">
                      <Phone className="w-5 h-5 text-fuchsia-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold tracking-widest uppercase mb-1">Contact</h4>
                      <p className="text-zinc-400">+91 74159 89069<br/>+91 74704 03764</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Section */}
              <div className="bg-black/40 p-8 rounded-3xl border border-white/5">
                <form onSubmit={handleBooking} className="space-y-6 font-modern">
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Aapka Naam</label>
                    <div className="relative">
                      <User className="absolute left-4 top-4 w-5 h-5 text-zinc-500" />
                      <input required type="text" name="name" onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-zinc-600 focus:outline-none focus:border-fuchsia-500 focus:bg-white/10 transition-all" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Service Chunein</label>
                    <select required name="service" onChange={(e) => setFormData({...formData, service: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-4 text-white placeholder-zinc-600 focus:outline-none focus:border-fuchsia-500 focus:bg-white/10 transition-all appearance-none cursor-pointer">
                      <option className="bg-black text-white">Hair Styling & Cuts</option>
                      <option className="bg-black text-white">Premium Bridal Makeup</option>
                      <option className="bg-black text-white">Advanced Skin Care</option>
                      <option className="bg-black text-white">A&Z Academy Enrollment</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Tarik (Date)</label>
                      <input required type="date" name="date" onChange={(e) => setFormData({...formData, date: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-4 text-white focus:outline-none focus:border-fuchsia-500 transition-all [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Samay (Time)</label>
                      <input required type="time" name="time" onChange={(e) => setFormData({...formData, time: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-4 text-white focus:outline-none focus:border-fuchsia-500 transition-all [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert" />
                    </div>
                  </div>

                  <button type="submit" className="w-full bg-white text-black font-bold uppercase tracking-[0.2em] py-5 mt-4 rounded-xl hover:bg-fuchsia-500 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(217,70,239,0.5)]">
                    Confirm via WhatsApp
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </section>
      
      {/* 7. Footer */}
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
          <p className="text-zinc-600 text-sm tracking-widest uppercase mb-2">© {new Date().getFullYear()} A And Z Scissors Salon And Academy.</p>
          <p className="text-zinc-700 text-xs">Redefining Excellence in Bhopal.</p>
        </div>
      </footer>
    </div>
  );
}

