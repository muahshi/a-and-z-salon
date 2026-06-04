import React, { useState } from 'react';
import { User, MapPin, Phone } from 'lucide-react';

export default function BookingSection() {
  const [formData, setFormData] = useState({ name: '', service: 'Hair Styling & Cuts', date: '', time: '' });

  const handleBooking = (e) => {
    e.preventDefault();
    const text = `VIP Appointment Request:\n\n*Naam:* ${formData.name}\n*Service:* ${formData.service}\n*Tarik:* ${formData.date}\n*Samay:* ${formData.time}\n\nKripya meri booking confirm karein.`;
    window.open(`https://wa.me/917415989069?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="book" className="py-32 relative bg-parallax">
      <div className="absolute inset-0 bg-black/85"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="super-glass p-8 md:p-16 rounded-[2rem]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-fuchsia-500 text-xs font-bold tracking-[0.4em] uppercase mb-4 font-modern">Reservation</h3>
              <h2 className="text-4xl md:text-6xl font-luxury font-bold mb-6 leading-tight text-white">SECURE <br/> YOUR SPOT.</h2>
              <p className="text-zinc-400 font-modern font-light mb-10 max-w-md leading-relaxed">
                Bhopal ke sabse premium salon mein apna samay reserve karein. WhatsApp ke zariye direct aur fast booking.
              </p>
              <div className="space-y-6 text-sm font-modern">
                <div className="flex items-start gap-4">
                  <div className="bg-white/5 p-3 rounded-full border border-white/10"><MapPin className="w-5 h-5 text-fuchsia-400" /></div>
                  <div>
                    <h4 className="text-white font-bold tracking-widest uppercase mb-1">Location</h4>
                    <p className="text-zinc-400">Shahjahanabad, Bhopal - 462001</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/5 p-3 rounded-full border border-white/10"><Phone className="w-5 h-5 text-fuchsia-400" /></div>
                  <div>
                    <h4 className="text-white font-bold tracking-widest uppercase mb-1">Contact</h4>
                    <p className="text-zinc-400">+91 74159 89069</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-black/40 p-8 rounded-3xl border border-white/5">
              <form onSubmit={handleBooking} className="space-y-6 font-modern">
                <div>
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Aapka Naam</label>
                  <div className="relative">
                    <User className="absolute left-4 top-4 w-5 h-5 text-zinc-500" />
                    <input required type="text" onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-zinc-600 focus:outline-none focus:border-fuchsia-500 focus:bg-white/10 transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Service Chunein</label>
                  <select required onChange={(e) => setFormData({...formData, service: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-4 text-white focus:outline-none focus:border-fuchsia-500 focus:bg-white/10 transition-all appearance-none cursor-pointer">
                    <option className="bg-black text-white">Hair Cut (₹299+)</option>
                    <option className="bg-black text-white">Hair Spa (₹799+)</option>
                    <option className="bg-black text-white">Keratin Treatment (₹3499+)</option>
                    <option className="bg-black text-white">Premium Bridal Makeup (₹9999+)</option>
                    <option className="bg-black text-white">Academy Enrollment</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Tarik (Date)</label>
                    <input required type="date" onChange={(e) => setFormData({...formData, date: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-4 text-white focus:outline-none focus:border-fuchsia-500 transition-all [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Samay (Time)</label>
                    <input required type="time" onChange={(e) => setFormData({...formData, time: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-4 text-white focus:outline-none focus:border-fuchsia-500 transition-all [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert" />
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
  );
}
