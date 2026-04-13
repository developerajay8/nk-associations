"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", id: "hero" },
  { label: "Services", id: "services" },
  { label: "About", id: "about" },
  { label: "Process", id: "process" },
  { label: "Testimonials", id: "testimonials" },
  { label: "FAQ", id: "faq" },
  { label: "Blog", id: "blog" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-[#1a74bb]/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">

          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo("hero")}>
            <img src="/logo.png" className="w-[60] " alt="" />
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.slice(0, 7).map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`relative text-sm font-medium transition-colors duration-200 group ${
                  scrolled ? "text-[#231f20]/80 hover:text-[#1a74bb]" : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1a74bb] rounded-full transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTo("contact")}
              className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-[#1a74bb] to-[#0d5a96] text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-lg shadow-[#1a74bb]/30 hover:shadow-[#1a74bb]/50 hover:-translate-y-0.5 transition-all duration-200"
            >
              <Phone size={16} />
              Free Consultation
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 ${
                scrolled ? "bg-[#1a74bb]/10 text-[#231f20]" : "bg-white/10 text-white"
              }`}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-screen" : "max-h-0"}`}>
        <div className="bg-white border-t border-[#1a74bb]/10 px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-left px-4 py-3 rounded-lg text-[#231f20] font-medium text-sm hover:bg-[#1a74bb]/5 hover:text-[#1a74bb] transition-all duration-150"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="mt-2 w-full bg-gradient-to-r from-[#1a74bb] to-[#0d5a96] text-white font-semibold py-3 rounded-xl text-sm"
          >
            Free Consultation →
          </button>
        </div>
      </div>
    </nav>
  );
}