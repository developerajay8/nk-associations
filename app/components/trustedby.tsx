"use client";

import { Users, Calendar, FileText, TrendingUp, Building } from "lucide-react";

const clients = [
  { name: "TechStart India", icon: <Building size={20} /> },
  { name: "Marwari Traders", icon: <Building size={20} /> },
  { name: "Rajasthan Exports", icon: <Building size={20} /> },
  { name: "Blue Sky Retail", icon: <Building size={20} /> },
  { name: "Modi & Sons", icon: <Building size={20} /> },
  { name: "Sunrise Foods", icon: <Building size={20} /> },
  { name: "Digital Bharat", icon: <Building size={20} /> },
  { name: "Aryan Industries", icon: <Building size={20} /> },
  { name: "Sharma & Co.", icon: <Building size={20} /> },
  { name: "Royal Fabrics", icon: <Building size={20} /> },
];

export default function TrustedBy() {
  const doubled = [...clients, ...clients]; // for seamless loop

  return (
    <section className="bg-white py-16 overflow-hidden border-y border-[#3773b6]/10">
      <style>{`
        @keyframes marquee-left { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        .marquee-track { animation: marquee-left 28s linear infinite; }
        .marquee-track:hover { animation-play-state: paused; }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
        <p className="inline-flex items-center justify-center bg-[#3773b6]/10 border border-[#3773b6]/20 text-[#3773b6] text-xs font-semibold tracking-wide uppercase px-4 py-1.5 rounded-full">
          Trusted by Leading Businesses Across India
        </p>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #ffffff, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #ffffff, transparent)" }} />

        <div className="flex">
          <div className="flex gap-5 whitespace-nowrap marquee-track">
            {doubled.map((client, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white border border-[#3773b6]/10 rounded-2xl px-6 py-4 shadow-sm hover:shadow-md hover:border-[#3773b6]/30 hover:-translate-y-0.5 transition-all duration-200 cursor-default flex-shrink-0"
              >
                <span className="text-[#3773b6]">{client.icon}</span>
                <span className="text-[#232021] font-semibold text-sm">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="max-w-5xl mx-auto mt-12 px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { num: "2500+", label: "Happy Clients", icon: <Users size={24} /> },
            { num: "8+", label: "Years Experience", icon: <Calendar size={24} /> },
            { num: "15,000+", label: "ITR Filed", icon: <FileText size={24} /> },
            { num: "99%", label: "Success Rate", icon: <TrendingUp size={24} /> },
          ].map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-3 bg-gray-50 rounded-2xl px-5 py-4 border border-gray-100 hover:border-[#3773b6]/30 hover:shadow-md transition-all duration-200"
            >
              <span className="text-[#3773b6]">{s.icon}</span>
              <div>
                <p className="font-black text-3xl text-[#3773b6] leading-tight">{s.num}</p>
                <p className="text-sm text-gray-500 font-medium mt-1">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}