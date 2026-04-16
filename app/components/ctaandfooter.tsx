"use client";

import { useRef, useEffect, useState } from "react";
import { Target, MessageCircle, Check, Phone, Mail, MapPin, Globe, Share2, Video } from "lucide-react";

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

export function CTASection() {
  const { ref, inView } = useInView();

  return (
    <section className="px-4 py-16 bg-white">
      <div ref={ref} className={`max-w-5xl mx-auto transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div
          className="relative overflow-hidden rounded-3xl p-10 md:p-16 text-center"
          style={{ background: "linear-gradient(135deg, #0a1628 0%, #1a3a6e 50%, #3773b6 100%)" }}
        >
          {/* BG Pattern */}
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }} />

          {/* Glowing Orb */}
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full blur-3xl opacity-20"
            style={{ background: "radial-gradient(circle, #7ec8f0, transparent)" }} />

          <div className="relative z-10">
            <span className="inline-flex bg-white/15 border border-white/20 text-white/90 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6 items-center gap-2">
              <Target size={14} />
              Limited Time Offer
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight"
            >
              Pehli Consultation <br />
              <span style={{ color: "#7ec8f0" }}>Bilkul Free!</span>
            </h2>
            <p className="text-white/65 text-lg max-w-xl mx-auto mb-10">
              Abhi contact karein aur apni tax problems ka solution pao — koi charges nahi, koi commitment nahi.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-white text-[#3773b6] font-bold px-10 py-4 rounded-xl text-sm hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200 shadow-2xl shadow-black/20"
              >
                Free Consultation Book Karo →
              </button>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 text-white font-bold px-8 py-4 rounded-xl text-sm hover:-translate-y-0.5 hover:bg-green-400 transition-all duration-200 shadow-xl shadow-green-500/30"
              >
                <MessageCircle size={16} />
                WhatsApp Karo
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              {["No Hidden Charges", "2 Hr Response Guarantee", "8+ Years Experience", "ICAI Registered"].map(b => (
                <span key={b} className="flex items-center gap-1 text-white/50 text-xs font-medium border border-white/10 rounded-full px-4 py-1.5">
                  <Check size={10} />
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const footerLinks = {
    Services: ["ITR Filing", "GST Compliance", "Audit & Assurance", "ROC Compliance", "Tax Planning"],
    Company: ["About Us", "Our Team", "Blog & Insights", "Case Studies", "Careers"],
    Legal: ["Privacy Policy", "Terms of Service", "Refund Policy", "Disclaimer"],
  };

  return (
    <footer className="bg-[#0a1628] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#3773b6] to-[#2a5a99] flex items-center justify-center font-black text-lg">NK</div>
              <div>
                <p className="font-black text-lg leading-none">NK Associates</p>
                <p className="text-white/40 text-[10px] tracking-widest uppercase mt-0.5">Tax & Compliance</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              Things you hate, let&apos;s us calculate. Professional CA & Tax Compliance services for individuals and businesses across India.
            </p>

            <div className="space-y-2 text-sm text-white/50">
              <p className="flex items-center gap-2"><Phone size={14} /> +91 99999 99999</p>
              <p className="flex items-center gap-2"><Mail size={14} /> info@nkassociates.in</p>
              <p className="flex items-center gap-2"><MapPin size={14} /> Jodhpur, Rajasthan, India</p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              {[
                { icon: <Globe size={16} />, label: "Website" },
                { icon: <Share2 size={16} />, label: "Share" },
                { icon: <Video size={16} />, label: "Video" },
                { icon: <MessageCircle size={16} />, label: "Message" },
              ].map((s) => (
                <button key={s.label} aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center text-white/50 hover:bg-[#3773b6] hover:border-[#3773b6] hover:text-white transition-all duration-200">
                  {s.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-white font-bold text-sm mb-4 tracking-wider uppercase">{heading}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/45 text-sm hover:text-[#3773b6] transition-colors duration-150">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">© 2025 NK Associates. All rights reserved.</p>
          <p className="text-white/20 text-xs">ICAI Registered CA Firm · GST No: XXXXXXXXXXXX</p>
        </div>
      </div>
    </footer>
  );
}