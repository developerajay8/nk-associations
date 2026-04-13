"use client";

import { useRef, useEffect, useState } from "react";
import { Award, DollarSign, Zap, Lock, Smartphone, Target, BarChart3, Bell } from "lucide-react";

const reasons = [
  { icon: <Award size={24} />, title: "ICAI Registered CA Firm", desc: "Hamari team mein registered Chartered Accountants hain jo aapki compliance ensure karte hain.", color: "#1a74bb" },
  { icon: <DollarSign size={24} />, title: "Transparent Pricing", desc: "Koi hidden charges nahi. Jo bola wahi liya jaega. Packages clearly defined hain.", color: "#10b981" },
  { icon: <Zap size={24} />, title: "Fast Turnaround", desc: "Most filings 24-48 hours mein complete. Emergency cases ke liye same-day service available.", color: "#f59e0b" },
  { icon: <Lock size={24} />, title: "100% Data Security", desc: "Aapki financial information bilkul secure hai. Strict confidentiality maintain ki jaati hai.", color: "#8b5cf6" },
  { icon: <Smartphone size={24} />, title: "Always Accessible", desc: "WhatsApp, call, email — hum hamesha available hain. Koi bhi query 2 ghante mein resolve.", color: "#ef4444" },
  { icon: <Target size={24} />, title: "Dedicated Support", desc: "Premium clients ko dedicated CA assign hota hai jo unka poora compliance calendar manage karta hai.", color: "#1a74bb" },
  { icon: <BarChart3 size={24} />, title: "Tax Optimization", desc: "Sirf filing nahi, hum aapko maximum legal tax savings ke baare mein bhi guide karte hain.", color: "#10b981" },
  { icon: <Bell size={24} />, title: "Timely Reminders", desc: "Koi deadline miss na ho isliye hum proactive reminders aur compliance alerts bhejte hain.", color: "#f59e0b" },
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

export default function WhyChooseUs() {
  const { ref, inView } = useInView();

  return (
    <section id="why" className="bg-white py-24 px-4 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, #1a74bb 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }} />

      <div ref={ref} className="max-w-7xl mx-auto">

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block bg-[#1a74bb]/10 text-[#1a74bb] text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-4">
            Why NK Associates
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#231f20] leading-tight mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Humein Kyu Choose <br />
            <span className="text-[#1a74bb]">Karein?</span>
          </h2>
          <p className="text-[#231f20]/55 text-lg max-w-lg mx-auto">
            Hazaron clients ka trust sirf acche kaam se milta hai. Dekhein hamare kuch key differentiators.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((item, i) => (
            <div
              key={item.title}
              className={`group relative bg-[#f8fafd] rounded-3xl p-6 border border-[#1a74bb]/8 hover:border-[#1a74bb]/30 hover:bg-white hover:shadow-xl hover:shadow-[#1a74bb]/8 hover:-translate-y-1.5 transition-all duration-300 cursor-default ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${item.color}12` }}
              >
                {item.icon}
              </div>

              {/* Accent line */}
              <div className="w-8 h-1 rounded-full mb-3 transition-all duration-300 group-hover:w-14"
                style={{ background: item.color }} />

              <h3 className="font-bold text-[#231f20] text-base mb-2 leading-snug">{item.title}</h3>
              <p className="text-[#231f20]/55 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom Strip */}
        <div className={`mt-16 rounded-3xl bg-gradient-to-r from-[#1a74bb] to-[#0d5a96] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-700 delay-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div>
            <h3 className="text-white font-black text-2xl md:text-3xl mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
              Abhi Start Karein — First Consultation Free!
            </h3>
            <p className="text-white/70 text-sm">No commitment. Just a friendly conversation about your tax needs.</p>
          </div>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="flex-shrink-0 bg-white text-[#1a74bb] font-bold px-8 py-4 rounded-xl text-sm hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 shadow-xl shadow-black/20"
          >
            Book Free Call →
          </button>
        </div>
      </div>
    </section>
  );
}