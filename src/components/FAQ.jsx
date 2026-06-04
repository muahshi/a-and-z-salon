import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [open, setOpen] = useState(null);

  const faqs = [
    { q: "Where is A & Z Scissors Salon located?", a: "We are located at 36 Second Floor, Aali Manzil Road, Opposite Masjid Yaqoob Khan, Badabagh, Shahjahanabad, Bhopal - 462001." },
    { q: "What are hair cut charges?", a: "Our premium hair cut services start at ₹299+." },
    { q: "Do you provide bridal makeup?", a: "Yes, we specialize in premium HD and Airbrush bridal makeup to give you a flawless look on your special day." },
    { q: "Do you offer academy courses?", a: "Yes, A & Z Academy offers professional training courses for aspiring hair and beauty experts." },
    { q: "What are salon timings?", a: "We are open from 9:00 AM to 7:00 PM on all working days." },
    { q: "How can I book an appointment?", a: "You can easily book an appointment by clicking the 'Book via WhatsApp' button or calling us directly at +91 7415989069." },
    { q: "Is parking available?", a: "Yes, convenient parking space is available for all our customers visiting the salon." }
  ];

  return (
    <section className="py-24 bg-zinc-950 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-fuchsia-500 text-xs font-bold tracking-[0.4em] uppercase mb-4 font-modern">Your Questions Answered</h3>
          <h2 className="text-4xl md:text-5xl font-luxury font-bold text-white">FAQ</h2>
        </div>
        <div className="space-y-4 font-modern">
          {faqs.map((faq, i) => (
            <div key={i} className="super-glass rounded-xl overflow-hidden transition-all duration-300">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full text-left px-8 py-6 flex justify-between items-center focus:outline-none">
                <span className="font-bold text-white text-sm tracking-wider">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-fuchsia-500 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} />
              </button>
              <div className={`px-8 overflow-hidden transition-all duration-500 ${open === i ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-zinc-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
