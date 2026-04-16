"use client";

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center gap-3">
            {/* SVG Logo inline — replace with <Image> if you have the PNG */}
            <div><img className="w-[80]" src="/logo.png" alt="NK Associates" /></div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#232021] font-medium text-sm hover:text-[#3773b6] transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3773b6] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <a
            href="tel:+917568820015"
            className="hidden md:flex items-center gap-2 bg-[#3773b6] hover:bg-[#2a5a99] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <Phone size={15} />
            Call Us Now
          </a>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-[#232021]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#232021] font-medium text-sm hover:text-[#3773b6] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+917568820015"
            className="flex items-center gap-2 bg-[#3773b6] text-white text-sm font-semibold px-5 py-2.5 rounded-full w-fit mt-2"
          >
            <Phone size={15} />
            Call Us Now
          </a>
        </div>
      )}
    </header>
  );
}