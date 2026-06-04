import React from 'react';
import { Instagram } from 'lucide-react';

export default function InstagramWall() {
  // यहाँ अपने असली Instagram Posts के लिंक डालें (ध्यान दें कि लिंक के आखिर में /p/ID/ हो)
  const instagramPosts = [
    "https://www.instagram.com/reel/DXgm9_mk6E3/?igsh=Z3FnZnNjejlvbnlh", // अपना पहला पोस्ट लिंक डालें
    "https://www.instagram.com/reel/DB5hvYcN60m/?igsh=MWw2Y3lsZTZjaWRjMA==", // अपना दूसरा पोस्ट लिंक डालें
    "https://www.instagram.com/reel/DXKLPLZjTuw/?igsh=MXVhc2d4NTZhMGg0Yw==", // अपना तीसरा पोस्ट लिंक डालें
    "https://www.instagram.com/reel/DSwtxT2DVyS/?igsh=bnhkczE3aW41NmFr"  // अपना चौथा पोस्ट लिंक डालें
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <div>
            <h3 className="text-fuchsia-500 text-xs font-bold tracking-[0.4em] uppercase mb-4 font-modern">
              @a_and_z_scissors
            </h3>
            <h2 className="text-4xl md:text-6xl font-luxury font-bold text-white">
              FOLLOW OUR JOURNEY
            </h2>
          </div>
          <div className="flex gap-6 text-center">
            <div>
              <p className="text-2xl font-luxury font-bold text-white">457</p>
              <p className="text-xs text-zinc-500 font-modern uppercase tracking-widest">Posts</p>
            </div>
            <div>
              <p className="text-2xl font-luxury font-bold text-white">3592</p>
              <p className="text-xs text-zinc-500 font-modern uppercase tracking-widest">Followers</p>
            </div>
          </div>
        </div>

        {/* Live Instagram Feed (Iframes) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {instagramPosts.map((postUrl, i) => (
            <div key={i} className="w-full bg-white rounded-xl overflow-hidden shadow-[0_0_15px_rgba(217,70,239,0.1)] h-[400px] border border-white/10 transition-transform duration-500 hover:scale-[1.02]">
              {/* /embed लगाकर Instagram को सीधे वेबसाइट में लोड किया जा रहा है */}
              <iframe
                src={`${postUrl}/embed`}
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                allowTransparency="true"
                className="w-full h-full"
                title={`Instagram Post ${i + 1}`}
              ></iframe>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a 
            href="https://instagram.com/a_and_z_scissors" 
            target="_blank" 
            rel="noreferrer" 
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white px-8 py-4 rounded-full font-modern font-bold uppercase tracking-widest text-sm hover:scale-105 hover:shadow-[0_0_30px_rgba(217,70,239,0.4)] transition-all"
          >
            <Instagram className="w-5 h-5" /> Follow Us on Instagram
          </a>
        </div>

      </div>
    </section>
  );
}
