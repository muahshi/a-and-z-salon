import React from 'react';
import { Quote, Star } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    { name: "Priya Sharma", review: "Bhopal ka sabse best salon! Hair color aur spa service bahut hi premium thi. Staff ka behavior bhi bahut accha hai." },
    { name: "Sanya Khan", review: "Apni shadi ka bridal makeup yahin se karwaya tha. I looked exactly how I dreamed. Airbrush makeup was flawless!" },
    { name: "Rahul Verma", review: "Skin treatment aur grooming ke liye best place. Hygiene aur professionalism level is totally international." },
    { name: "Neha Singh", review: "A&Z Academy is the best place to learn. The trainers are highly experienced." },
    { name: "Anjali Dubey", review: "Keratin treatment result was magical. The glassmorphism vibe in the salon is beautiful!" },
    { name: "Simran Kaur", review: "Premium luxury experience at affordable prices. Highly recommend their haircut services." }
  ];

  return (
    <section className="py-24 bg-zinc-950 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-fuchsia-900/10 blur-[100px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-fuchsia-500 text-xs font-bold tracking-[0.4em] uppercase mb-4 font-modern">4.9/5 on Google (95+ Reviews)</h3>
          <h2 className="text-4xl md:text-5xl font-luxury font-bold text-white">WHAT THEY SAY</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="super-glass p-8 rounded-2xl hover:border-fuchsia-500/50 transition-colors duration-300 flex flex-col justify-between">
              <div>
                <Quote className="w-8 h-8 text-fuchsia-500/40 mb-6" />
                <p className="text-zinc-300 font-modern font-light text-sm leading-relaxed mb-6">"{review.review}"</p>
              </div>
              <div className="flex items-center justify-between border-t border-white/10 pt-4">
                <span className="text-white font-modern font-bold text-sm">{review.name}</span>
                <div className="flex text-yellow-500 gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-yellow-500" />)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
