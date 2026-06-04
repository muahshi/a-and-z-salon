import React, { useState } from 'react';
import { CalendarCheck, ShieldCheck, Sparkles, ThumbsUp } from 'lucide-react';

export default function BookingSection() {
  const [formData, setFormData] = useState({ name: '', service: 'Select Service', date: '', time: 'Select Time' });

  const handleBooking = (e) => {
    e.preventDefault();
    const text = `Appointment Request:\n\n*Name:* ${formData.name}\n*Service:* ${formData.service}\n*Date:* ${formData.date}\n*Time:* ${formData.time}`;
    window.open(`https://wa.me/917415989069?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="book" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl">
          
          {/* Left Side - Form & Features */}
          <div className="p-10 md:p-16 flex flex-col justify-center">
            <h2 className="text-4xl font-luxury font-bold text-white mb-10 text-center md:text-left">
              BOOK YOUR APPOINTMENT
            </h2>
            
            <div className="flex flex-col md:flex-row gap-12">
              {/* Features List */}
              <div className="space-y-6 flex-1">
                <div className="flex items-center gap-3">
                  <CalendarCheck className="w-5 h-5 text-fuchsia-500" />
                  <span className="text-zinc-300 font-modern text-sm">Personalized Consultation</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-fuchsia-500" />
                  <span className="text-zinc-300 font-modern text-sm">Expert Professionals</span>
                </div>
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-fuchsia-500" />
                  <span className="text-zinc-300 font-modern text-sm">Premium Products</span>
                </div>
                <div className="flex items-center gap-3">
                  <ThumbsUp className="w-5 h-5 text-fuchsia-500" />
                  <span className="text-zinc-300 font-modern text-sm">100% Satisfaction</span>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleBooking} className="flex-1 space-y-4 font-modern">
                <input required type="text" onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="Full Name" className="w-full bg-transparent border border-white/20 rounded p-3 text-white focus:border-fuchsia-500 outline-none text-sm" />
                
                <select required onChange={(e) => setFormData({...formData, service: e.target.value})} className="w-full bg-black border border-white/20 rounded p-3 text-white focus:border-fuchsia-500 outline-none text-sm cursor-pointer">
                  <option>Select Service</option>
                  <option>Hair Cut & Styling</option>
                  <option>Hair Color & Spa</option>
                  <option>Bridal Makeup</option>
                  <option>Keratin Treatment</option>
                </select>

                <input required type="date" onChange={(e) => setFormData({...formData, date: e.target.value})} className="w-full bg-transparent border border-white/20 rounded p-3 text-white focus:border-fuchsia-500 outline-none text-sm [&::-webkit-calendar-picker-indicator]:invert" />
                
                <input required type="time" onChange={(e) => setFormData({...formData, time: e.target.value})} className="w-full bg-transparent border border-white/20 rounded p-3 text-white focus:border-fuchsia-500 outline-none text-sm [&::-webkit-calendar-picker-indicator]:invert" />

                <button type="submit" className="w-full bg-fuchsia-600 text-white font-bold uppercase tracking-widest py-4 mt-2 rounded text-xs hover:bg-fuchsia-500 transition-colors">
                  Confirm Via WhatsApp
                </button>
              </form>
            </div>
          </div>

          {/* Right Side - Big Bridal Image */}
          <div className="hidden lg:block relative h-full min-h-[500px]">
            {/* YAHAN APNI BOOKING IMAGE DAALEIN */}
            <img src="/images/booking-bg.png" alt="Bridal Makeup" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent w-1/3"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
