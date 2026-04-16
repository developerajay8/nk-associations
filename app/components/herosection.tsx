"use client";

import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle, Phone, Star } from "lucide-react";

const stats = [
  { value: "2500+", label: "Happy Clients" },
  { value: "8+", label: "Years Experience" },
  { value: "99%", label: "Success Rate" },
  { value: "24Hr", label: "Fast Delivery" },
];

const highlights = [
  "ITR Filing from ₹399",
  "GST Registration in 24 Hours",
  "Company & Firm Registration",
  "Transparent Pricing",
];

const floatingCards = [
  { icon: "📋", text: "ITR Filed!", sub: "Within 2 hours" },
  { icon: "✅", text: "GST Approved!", sub: "Same day" },
  { icon: "🏢", text: "Company Registered!", sub: "In 3 days" },
];

export default function HeroSection() {
  const [currentCard, setCurrentCard] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % floatingCards.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-white overflow-hidden pt-16">

      {/* Background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large blue blob top right */}
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-[#3773b6]/8 blur-3xl" />
        {/* Small circle bottom left */}
        <div className="absolute bottom-10 -left-16 w-64 h-64 rounded-full bg-[#3773b6]/10 blur-2xl" />
        {/* Grid dots pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #3773b6 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Diagonal stripe accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#3773b6]/5 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT — Text Content */}
          <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#3773b6]/10 border border-[#3773b6]/20 rounded-full px-4 py-1.5 mb-6">
              <Star size={13} className="text-[#3773b6] fill-[#3773b6]" />
              <span className="text-[#3773b6] text-xs font-semibold tracking-wide uppercase">
                Trusted Tax & Compliance Firm
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[#232021] text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] mb-4">
              Things You{" "}
              <span className="relative inline-block">
                <span className="text-[#3773b6]">Hate</span>
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  height="6"
                  viewBox="0 0 200 6"
                  fill="none"
                >
                  <path
                    d="M0 5 Q50 0 100 4 Q150 8 200 3"
                    stroke="#3773b6"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>
              <br />
              Let&apos;s Us{" "}
              <span className="text-[#3773b6]">Calculate</span>
            </h1>

            {/* Subheading */}
            <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-lg">
              From ITR filing to company registration — NK Associates handles
              all your tax, GST, and compliance needs quickly, affordably, and
              with a{" "}
              <strong className="text-[#232021]">Pay Later</strong>{" "}
              guarantee.
            </p>

            {/* Highlights list */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-[#3773b6] shrink-0" />
                  <span className="text-[#232021] text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="flex items-center gap-2 bg-[#3773b6] hover:bg-[#2a5a99] text-white font-bold px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <Phone size={17} />
                Contact Us
              </a>
              <a
                href="#services"
                className="flex items-center gap-2 border-2 border-[#3773b6] text-[#3773b6] hover:bg-[#3773b6] hover:text-white font-bold px-7 py-3.5 rounded-full transition-all duration-200"
              >
                View Services
                <ArrowRight size={17} />
              </a>
            </div>
          </div>

          {/* RIGHT — Visual Card */}
          <div
            className={`relative flex justify-center items-center transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Main card */}
            <div className="relative w-full max-w-sm bg-[#3773b6] rounded-3xl p-8 shadow-2xl">
              {/* Card inner */}
              <div className="text-white">
                <p className="text-sm font-semibold uppercase tracking-widest opacity-75 mb-1">
                  NK Associates
                </p>
                <h2 className="text-3xl font-black mb-6 leading-tight">
                  File Your ITR <br />
                  <span className="text-yellow-300">Before 31st July</span>
                </h2>

                {/* Price highlight */}
                <div className="bg-white/15 rounded-2xl p-5 mb-6">
                  <p className="text-white/70 text-xs uppercase tracking-widest mb-1">
                    Starting at just
                  </p>
                  <p className="text-5xl font-black text-white">
                    ₹399
                  </p>
                  <p className="text-white/80 text-sm mt-1">
                    Individual ITR Filing
                  </p>
                </div>

                {/* Mini service list */}
                <div className="space-y-2">
                  {[
                    { name: "GST Registration", price: "₹699" },
                    { name: "GST Filing", price: "₹299" },
                    { name: "MSME / Udyam", price: "₹499" },
                  ].map((s) => (
                    <div
                      key={s.name}
                      className="flex items-center justify-between bg-white/10 rounded-xl px-4 py-2.5"
                    >
                      <span className="text-white text-sm font-medium">{s.name}</span>
                      <span className="text-yellow-300 font-bold text-sm">{s.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating notification card */}
              <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-xl px-5 py-3 flex items-center gap-3 min-w-[190px] transition-all duration-500">
                <span className="text-2xl">{floatingCards[currentCard].icon}</span>
                <div>
                  <p className="text-[#232021] font-bold text-sm leading-tight">
                    {floatingCards[currentCard].text}
                  </p>
                  <p className="text-gray-400 text-xs">{floatingCards[currentCard].sub}</p>
                </div>
              </div>

              {/* Payment badge */}
              <div className="absolute -top-4 -left-4 bg-yellow-400 text-[#232021] rounded-2xl px-4 py-2 shadow-lg">
                <p className="text-xs font-black uppercase tracking-wide leading-tight">
                  Pay<br />Later
                </p>
              </div>
            </div>

            {/* Decorative circles */}
            <div className="absolute top-6 right-6 w-16 h-16 rounded-full border-4 border-[#3773b6]/20 animate-ping" style={{ animationDuration: "3s" }} />
            <div className="absolute bottom-16 left-0 w-8 h-8 rounded-full bg-[#3773b6]/30" />
          </div>
        </div>

        {/* Stats Row */}
        <div
          className={`mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 transition-all duration-700 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#3773b6]/30 hover:shadow-md transition-all duration-200"
            >
              <p className="text-3xl font-black text-[#3773b6]">{stat.value}</p>
              <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}