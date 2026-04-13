"use client";

import { useRef, useEffect, useState } from "react";
import { GraduationCap, MapPin, Clock, Star, Trophy } from "lucide-react";

const highlights = [
  { icon: <GraduationCap size={20} />, label: "ICAI Registered", sub: "Certified CA Professionals" },
  { icon: <MapPin size={20} />, label: "Pan India Services", sub: "Online & Offline Both" },
  { icon: <Clock size={20} />, label: "Est. 2016", sub: "8+ Years of Excellence" },
  { icon: <Star size={20} />, label: "4.9/5 Rating", sub: "500+ Google Reviews" },
];

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

export default function AboutUs() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="bg-[#f8fafd] py-24 px-4">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left – Visual Block */}
          <div className={`relative transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>

            {/* Main Card */}
            <div className="relative bg-gradient-to-br from-[#1a74bb] to-[#0a2d5e] rounded-3xl p-10 shadow-2xl shadow-[#1a74bb]/30 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                  backgroundSize: "24px 24px",
                }} />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center text-3xl">
                    ₹
                  </div>
                  <div>
                    <p className="text-white font-black text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>NK Associates</p>
                    <p className="text-white/60 text-sm">Chartered Accountants</p>
                  </div>
                </div>

                <blockquote className="text-white/85 text-lg leading-relaxed italic mb-8 border-l-4 border-white/30 pl-4">
                  &ldquo;Our mission is to make tax compliance simple, affordable, and stress-free for every Indian business and individual.&rdquo;
                </blockquote>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm">NK</div>
                  <div>
                    <p className="text-white font-semibold text-sm">Naresh Kumar</p>
                    <p className="text-white/55 text-xs">Founder & Lead CA, NK Associates</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 border border-[#1a74bb]/10">
              <div className="flex items-center gap-3">
                <Trophy size={30} className="text-[#1a74bb]" />
                <div>
                  <p className="font-black text-2xl text-[#1a74bb]" style={{ fontFamily: "'Playfair Display', serif" }}>2500+</p>
                  <p className="text-[#231f20]/55 text-xs font-medium">Clients Served</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-[#1a74bb]/10">
              <div className="flex items-center gap-3">
                <Star size={30} className="text-[#1a74bb]" />
                <div>
                  <p className="font-black text-2xl text-[#231f20]" style={{ fontFamily: "'Playfair Display', serif" }}>4.9/5</p>
                  <p className="text-[#231f20]/55 text-xs font-medium">Google Rating</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right – Content */}
          <div className={`transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <span className="inline-block bg-[#1a74bb]/10 text-[#1a74bb] text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-5">
              About Us
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-[#231f20] leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Aapke Finances Ka <br />
              <span className="text-[#1a74bb]">Bharosemand Saathi</span>
            </h2>

            <div className="space-y-4 text-[#231f20]/65 text-base leading-relaxed mb-8">
              <p>
                NK Associates 2016 mein establish hua tha ek simple mission ke saath — <strong className="text-[#231f20]">tax compliance ko har Indian ke liye accessible banana</strong>. Aaj hum 2500+ clients ke finances ka management karte hain, chote freelancers se lekar bade business owners tak.
              </p>
              <p>
                Hamari team mein experienced Chartered Accountants, tax advisors, aur compliance experts hain jo har client ko <strong className="text-[#231f20]">personalized attention</strong> dete hain. Hum sirf filing nahi karte — hum aapke financial partner hain.
              </p>
              <p>
                Rajasthan se shuru hokar, aaj hum <strong className="text-[#231f20]">pan India clients</strong> ko fully online aur offline services dete hain. Aapko office aane ki zaroorat nahi — sab kuch WhatsApp aur email se ho jaata hai.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map((h) => (
                <div key={h.label} className="flex items-center gap-3 bg-white rounded-2xl p-4 border border-[#1a74bb]/10 shadow-sm hover:shadow-md hover:border-[#1a74bb]/25 transition-all duration-200">
                  {h.icon}
                  <div>
                    <p className="font-bold text-[#231f20] text-sm">{h.label}</p>
                    <p className="text-[#231f20]/50 text-xs">{h.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1a74bb] to-[#0d5a96] text-white font-bold px-8 py-4 rounded-xl text-sm shadow-lg shadow-[#1a74bb]/30 hover:-translate-y-0.5 hover:shadow-[#1a74bb]/50 transition-all duration-200"
            >
              Talk to Our Expert →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}