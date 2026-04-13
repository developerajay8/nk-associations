"use client";

import { useState, useRef, useEffect } from "react";
import { FileText, Receipt, BarChart3, Building, Check } from "lucide-react";

const serviceCategories = [
  {
    id: "itr",
    icon: <FileText size={24} />,
    label: "ITR Filing",
    subtitle: "Income Tax Return",
    color: "#3b82f6",
    packages: [
      { name: "Basic", price: "₹499 – ₹999", features: ["Salary Income ITR Filing", "Form 16 Based Return", "Basic Tax Consultation"] },
      { name: "Standard", price: "₹999 – ₹1,999", popular: true, features: ["Salary + Other Income (Interest, etc.)", "Capital Gain (Basic)", "Tax Planning Support", "Revision Support (if required)"] },
      { name: "Advanced", price: "₹2,999 – ₹5,999", features: ["Business / Freelance Income", "Capital Gains (Stocks / Property)", "Tax Optimization & Advisory", "Notice Handling Support (Basic)"] },
      { name: "Premium", price: "₹7,999+", features: ["High Income / Complex Cases", "Multiple Income Sources", "Dedicated CA Support", "Scrutiny / Notice Handling", "Complete Tax Planning"] },
    ],
  },
  {
    id: "gst",
    icon: <Receipt size={24} />,
    label: "GST Compliance",
    subtitle: "GST Registration & Filing",
    color: "#10b981",
    packages: [
      { name: "Basic", price: "₹999 – ₹1,999", features: ["GST Registration", "LUT Filing (if applicable)", "Basic Consultation"] },
      { name: "Standard", price: "₹1,999 – ₹3,999/mo", popular: true, features: ["Monthly / Quarterly GST Return Filing", "GSTR-1 & GSTR-3B", "Basic Reconciliation", "Email Support"] },
      { name: "Advanced", price: "₹3,999 – ₹7,999/mo", features: ["GST Return Filing (All Returns)", "Sales & Purchase Reconciliation", "Input Tax Credit (ITC) Optimization", "GST Advisory & Consultation"] },
      { name: "Premium", price: "₹8,999+/mo", features: ["Complete GST Compliance Handling", "Monthly + Annual Return (GSTR-9)", "GST Notice Handling", "Dedicated Account Manager", "Audit Support (if applicable)"] },
    ],
  },
  {
    id: "audit",
    icon: <BarChart3 size={24} />,
    label: "Audit & Assurance",
    subtitle: "Financial Audit Services",
    color: "#f59e0b",
    packages: [
      { name: "Basic", price: "₹4,999 – ₹9,999", features: ["Basic Financial Review", "Profit & Loss & Balance Sheet Check", "Compliance Check (Basic)"] },
      { name: "Standard", price: "₹10,000 – ₹25,000", popular: true, features: ["Internal Audit", "Books Verification & Review", "GST & TDS Compliance Check", "Basic Risk Identification"] },
      { name: "Advanced", price: "₹25,000 – ₹60,000", features: ["Detailed Internal Audit", "Process & System Review", "GST, TDS, Income Tax Compliance", "MIS & Financial Reporting", "Risk & Control Analysis"] },
      { name: "Premium", price: "₹60,000+", features: ["Statutory Audit / Tax Audit (44AB)", "End-to-End Audit Handling", "Audit Report & Certification", "Departmental Notice Support", "Financial Advisory"] },
    ],
  },
  {
    id: "roc",
    icon: <Building size={24} />,
    label: "ROC Compliance",
    subtitle: "Company Compliance",
    color: "#8b5cf6",
    packages: [
      { name: "Basic", price: "₹999 – ₹2,499", features: ["Company KYC (DIR-3 KYC)", "Annual Filing Awareness & Reminders", "Basic Consultation"] },
      { name: "Standard", price: "₹4,999 – ₹8,999", popular: true, features: ["Annual ROC Filing (AOC-4 & MGT-7/7A)", "Director KYC (DIR-3 KYC)", "Basic Documentation Support"] },
      { name: "Advanced", price: "₹9,999 – ₹18,999", features: ["ROC Annual Filing (AOC-4, MGT-7)", "Board Resolution Drafting", "Minutes Preparation", "Compliance Calendar Management", "Advisory Support"] },
      { name: "Premium", price: "₹20,000+", features: ["Complete ROC Compliance Handling", "Annual + Event-Based Filing", "Director Change, Share Transfer etc.", "End-to-End Documentation", "Dedicated Compliance Manager"] },
    ],
  },
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

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const { ref, inView } = useInView();
  const active = serviceCategories[activeTab];

  return (
    <section id="services" className="bg-[#f8fafd] py-24 px-4">
      <div ref={ref} className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block bg-[#1a74bb]/10 text-[#1a74bb] text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#231f20] leading-tight mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Comprehensive Tax & <br className="hidden sm:block" />
            <span className="text-[#1a74bb]">Compliance Solutions</span>
          </h2>
          <p className="text-[#231f20]/60 text-lg max-w-xl mx-auto">
            Apni zaroorat ke hisaab se package choose karein. Transparent pricing, koi hidden charges nahi.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {serviceCategories.map((cat, i) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(i)}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl font-semibold text-sm transition-all duration-300 border ${
                activeTab === i
                  ? "bg-[#1a74bb] text-white border-[#1a74bb] shadow-lg shadow-[#1a74bb]/30 -translate-y-0.5"
                  : "bg-white text-[#231f20]/70 border-[#1a74bb]/15 hover:border-[#1a74bb]/40 hover:text-[#1a74bb] hover:-translate-y-0.5"
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Active Category Info */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-[#231f20]/60 text-sm">
            {active.icon}
            <span className="font-semibold text-[#1a74bb]">{active.label}</span>
            <span>—</span>
            <span>{active.subtitle}</span>
          </div>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {active.packages.map((pkg, i) => (
            <div
              key={pkg.name}
              className={`relative rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 cursor-pointer group ${
                pkg.popular
                  ? "bg-gradient-to-br from-[#1a74bb] to-[#0d5a96] shadow-2xl shadow-[#1a74bb]/40 border-0"
                  : "bg-white border border-[#1a74bb]/10 hover:border-[#1a74bb]/30 shadow-sm hover:shadow-xl hover:shadow-[#1a74bb]/10"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-[#231f20] text-white text-[10px] font-black tracking-widest uppercase px-4 py-1.5 rounded-full shadow-lg">
                    ⭐ Most Popular
                  </span>
                </div>
              )}

              {/* Package Name */}
              <div className="mb-1">
                <span className={`text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full ${
                  pkg.popular ? "bg-white/15 text-white/80" : "bg-[#1a74bb]/8 text-[#1a74bb]"
                }`}>
                  {pkg.name}
                </span>
              </div>

              {/* Price */}
              <p className={`text-2xl font-black mt-3 mb-5 leading-tight ${pkg.popular ? "text-white" : "text-[#231f20]"}`}
                style={{ fontFamily: "'Playfair Display', serif" }}>
                {pkg.price}
              </p>

              {/* Divider */}
              <div className={`h-px mb-5 ${pkg.popular ? "bg-white/15" : "bg-[#1a74bb]/8"}`} />

              {/* Features */}
              <ul className="space-y-3 mb-7">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span className={`mt-0.5 w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center ${
                      pkg.popular ? "bg-white/20 text-white" : "bg-[#1a74bb]/10 text-[#1a74bb]"
                    }`}>
                      <Check size={10} />
                    </span>
                    <span className={`text-sm leading-snug ${pkg.popular ? "text-white/85" : "text-[#231f20]/70"}`}>{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className={`w-full py-3 rounded-xl font-bold text-sm tracking-wide transition-all duration-200 ${
                  pkg.popular
                    ? "bg-white text-[#1a74bb] hover:bg-white/90 shadow-lg shadow-black/10"
                    : "bg-[#1a74bb] text-white hover:bg-[#0d5a96] shadow-md shadow-[#1a74bb]/20"
                }`}
              >
                Get Started →
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-[#231f20]/50 text-sm mb-4">Koi confusion hai? Humse baat karein — bilkul free!</p>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 border-2 border-[#1a74bb] text-[#1a74bb] font-bold px-8 py-3 rounded-xl text-sm hover:bg-[#1a74bb] hover:text-white transition-all duration-200"
          >
            Book Free Consultation →
          </button>
        </div>
      </div>
    </section>
  );
}