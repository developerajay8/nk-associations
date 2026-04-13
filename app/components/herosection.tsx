"use client";

import { useEffect, useRef, useState } from "react";
import { FileText, Receipt, BarChart3, Building, ArrowRight, Eye, Check } from "lucide-react";

const heroStats = [
  { num: "2500+", label: "Happy Clients" },
  { num: "8+ Yrs", label: "Experience" },
  { num: "15K+", label: "ITR Filed" },
  { num: "99%", label: "Success Rate" },
];

const services = ["ITR Filing", "GST Compliance", "Audit & Assurance", "ROC Compliance", "Tax Planning", "Notice Handling"];

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const [currentService, setCurrentService] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-[72px]"
      style={{ background: "linear-gradient(135deg, #0a1628 0%, #0f2744 35%, #1a3a6e 70%, #1a74bb 100%)" }}
    >
      {/* Animated Grid Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "linear-gradient(rgba(26,116,187,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(26,116,187,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 right-[8%] w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #1a74bb, transparent)" }} />
      <div className="absolute bottom-1/4 left-[5%] w-72 h-72 rounded-full opacity-15 blur-3xl"
        style={{ background: "radial-gradient(circle, #5ba3d9, transparent)" }} />

      {/* Floating Particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full opacity-20"
          style={{
            width: Math.random() * 6 + 3,
            height: Math.random() * 6 + 3,
            background: "#1a74bb",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}

      <style>{`
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-15px)} }
        @keyframes fadeSlideUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeSlideLeft { from{opacity:0;transform:translateX(40px)} to{opacity:1;transform:translateX(0)} }
        @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes pulse-dot { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.4);opacity:0.7} }
        .shimmer-text {
          background: linear-gradient(90deg, #ffffff, #7ec8f0, #1a74bb, #7ec8f0, #ffffff);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }
        .animate-slide-up { animation: fadeSlideUp 0.8s ease forwards; }
        .animate-slide-left { animation: fadeSlideLeft 0.8s ease forwards; }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left Column ── */}
          <div className={`transition-all duration-1000 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400 shadow-lg shadow-green-400/50"
                style={{ animation: "pulse-dot 2s ease-in-out infinite" }} />
              <span className="text-white/90 text-xs font-semibold tracking-wide">Trusted by 2500+ Clients Across India</span>
            </div>

            {/* Heading */}
            <h1 className="mb-6 leading-[1.05]" style={{ fontFamily: "'Playfair Display', serif" }}>
              <span className="block text-white font-black" style={{ fontSize: "clamp(38px, 5.5vw, 68px)" }}>
                Things You Hate,
              </span>
              <span className="block font-black shimmer-text" style={{ fontSize: "clamp(38px, 5.5vw, 68px)" }}>
                Let&apos;s Us Calculate
              </span>
            </h1>

            {/* Rotating Service Badge */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-white/60 text-base font-medium">Expert in →</span>
              <div className="bg-[#1a74bb]/30 border border-[#1a74bb]/50 rounded-lg px-4 py-1.5 overflow-hidden" style={{ minWidth: 200 }}>
                <p key={currentService} className="text-[#7ec8f0] font-bold text-sm animate-slide-up"
                  style={{ animation: "fadeSlideUp 0.5s ease forwards" }}>
                  {services[currentService]}
                </p>
              </div>
            </div>

            <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-lg">
              Professional CA & Tax Compliance services for <span className="text-white font-semibold">individuals</span>, <span className="text-white font-semibold">businesses</span>, and <span className="text-white font-semibold">startups</span>. ITR Filing, GST, Audit, ROC — sab ek jagah, affordable prices mein.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <button
                onClick={() => scrollTo("contact")}
                className="group flex items-center gap-2 bg-white text-[#1a74bb] font-bold px-7 py-3.5 rounded-xl text-sm shadow-2xl shadow-white/20 hover:-translate-y-1 hover:shadow-white/30 transition-all duration-200"
              >
                Free Consultation
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/25 text-white font-semibold px-7 py-3.5 rounded-xl text-sm hover:bg-white/15 hover:-translate-y-1 transition-all duration-200"
              >
                <Eye size={16} />
                View Services
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              {["ICAI Registered", "8+ Years Experience", "100% Secure"].map((badge) => (
                <span key={badge} className="flex items-center gap-1 text-xs text-white/60 font-medium border border-white/10 rounded-full px-3 py-1">
                  <Check size={12} />
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right Column – Stats Card ── */}
          <div className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="relative w-full max-w-[420px]">

              {/* Main Glass Card */}
              <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-2xl"
                style={{ animation: "float 5s ease-in-out infinite" }}>

                {/* Card Header */}
                <div className="flex items-center gap-3 mb-6 pb-5 border-b border-white/15">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1a74bb] to-[#0d5a96] flex items-center justify-center text-2xl shadow-lg shadow-[#1a74bb]/40">
                    ₹
                  </div>
                  <div>
                    <p className="text-white font-bold text-base" style={{ fontFamily: "'Playfair Display', serif" }}>NK Associates</p>
                    <p className="text-white/55 text-xs font-medium tracking-wide">Chartered Accountants</p>
                  </div>
                  <div className="ml-auto flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-400" style={{ animation: "pulse-dot 2s ease-in-out infinite" }} />
                    <span className="text-green-400 text-xs font-semibold">Online</span>
                  </div>
                </div>

                {/* Service List */}
                <div className="space-y-3 mb-6">
                  {[
                    { icon: <FileText size={18} />, name: "ITR Filing", price: "₹499+", color: "#60a5fa" },
                    { icon: <Receipt size={18} />, name: "GST Compliance", price: "₹999+", color: "#34d399" },
                    { icon: <BarChart3 size={18} />, name: "Audit Services", price: "₹4,999+", color: "#f59e0b" },
                    { icon: <Building size={18} />, name: "ROC Compliance", price: "₹999+", color: "#a78bfa" },
                  ].map((svc) => (
                    <div key={svc.name} className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-200 cursor-pointer group">
                      <div className="flex items-center gap-3">
                        {svc.icon}
                        <span className="text-white/85 text-sm font-medium group-hover:text-white transition-colors">{svc.name}</span>
                      </div>
                      <span className="text-xs font-bold px-2.5 py-1 rounded-lg" style={{ color: svc.color, background: `${svc.color}18` }}>
                        {svc.price}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => scrollTo("contact")}
                  className="w-full bg-gradient-to-r from-[#1a74bb] to-[#0d5a96] text-white font-bold py-3.5 rounded-xl text-sm hover:shadow-lg hover:shadow-[#1a74bb]/40 hover:-translate-y-0.5 transition-all duration-200"
                >
                  Get Free Quote →
                </button>
              </div>

              {/* Floating Badge Cards */}
              <div className="absolute -top-4 -left-6 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2.5 border border-[#1a74bb]/10">
                <div className="w-8 h-8 rounded-xl bg-green-50 flex items-center justify-center text-base">⭐</div>
                <div>
                  <p className="text-[#231f20] font-bold text-sm leading-none">4.9 / 5</p>
                  <p className="text-[#231f20]/50 text-[10px] font-medium mt-0.5">Google Rating</p>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-6 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2.5 border border-[#1a74bb]/10">
                <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center text-base">🏆</div>
                <div>
                  <p className="text-[#231f20] font-bold text-sm leading-none">ICAI Registered</p>
                  <p className="text-[#231f20]/50 text-[10px] font-medium mt-0.5">Certified CA Firm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-16 fill-[#f8fafd]">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
}