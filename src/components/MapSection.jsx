import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function MapSection() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-fuchsia-500 text-xs font-bold tracking-[0.4em] uppercase mb-4 font-modern">Find Us</h3>
            <h2 className="text-4xl md:text-5xl font-luxury font-bold text-white mb-8">VISIT THE SALON</h2>
            <div className="space-y-8 font-modern">
              <div className="flex items-start gap-4">
                <div className="bg-white/5 p-4 rounded-full border border-white/10"><MapPin className="w-6 h-6 text-fuchsia-400" /></div>
                <div>
                  <h4 className="text-white font-bold tracking-widest uppercase mb-2">Address</h4>
                  <p className="text-zinc-400 leading-relaxed">36 Second Floor, Aali Manzil Road,<br/>Opposite Masjid Yaqoob Khan, Badabagh,<br/>Shahjahanabad, Bhopal – 462001</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white/5 p-4 rounded-full border border-white/10"><Phone className="w-6 h-6 text-fuchsia-400" /></div>
                <div>
                  <h4 className="text-white font-bold tracking-widest uppercase mb-2">Contact</h4>
                  <p className="text-zinc-400">+91 74159 89069 <br/> +91 74704 03764</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white/5 p-4 rounded-full border border-white/10"><Clock className="w-6 h-6 text-fuchsia-400" /></div>
                <div>
                  <h4 className="text-white font-bold tracking-widest uppercase mb-2">Hours</h4>
                  <p className="text-zinc-400">Open Daily: 9:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[500px] rounded-3xl overflow-hidden border border-white/10 relative">
            <div className="absolute inset-0 bg-fuchsia-500/10 mix-blend-color pointer-events-none z-10"></div>
            <iframe 
              src="https://maps.google.com/maps?q=Shahjahanabad,Bhopal&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" height="100%" style={{ border: 0, filter: 'grayscale(1) contrast(1.2) opacity(0.8)' }} allowFullScreen="" loading="lazy">
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
