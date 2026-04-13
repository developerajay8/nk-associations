"use client";

import { useRef, useEffect, useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

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

const contactInfo = [
  { icon: <Phone size={20} />, label: "Phone / WhatsApp", value: "+91 99999 99999", sub: "Mon–Sat, 9AM–7PM" },
  { icon: <Mail size={20} />, label: "Email", value: "info@nkassociates.in", sub: "Reply within 2 hours" },
  { icon: <MapPin size={20} />, label: "Office", value: "Jodhpur, Rajasthan", sub: "By appointment only" },
];

export default function ContactForm() {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="bg-white py-24 px-4">
      <div ref={ref} className="max-w-7xl mx-auto">

        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block bg-[#1a74bb]/10 text-[#1a74bb] text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-4">
            Contact Us
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#231f20] leading-tight mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Baat Karein — <br />
            <span className="text-[#1a74bb]">Pehli Consultation Free Hai!</span>
          </h2>
          <p className="text-[#231f20]/55 text-lg max-w-lg mx-auto">
            Form bharo ya seedha WhatsApp karo. Hum 2 ghante mein respond karte hain.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* Left – Info */}
          <div className={`lg:col-span-2 space-y-4 transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>

            {contactInfo.map((c) => (
              <div key={c.label} className="flex items-center gap-4 bg-[#f8fafd] rounded-2xl p-5 border border-[#1a74bb]/10 hover:border-[#1a74bb]/25 hover:shadow-md transition-all duration-200">
                <div className="w-12 h-12 rounded-xl bg-[#1a74bb]/10 flex items-center justify-center flex-shrink-0">{c.icon}</div>
                <div>
                  <p className="text-[#231f20]/50 text-xs font-semibold uppercase tracking-wider">{c.label}</p>
                  <p className="font-bold text-[#231f20] text-sm">{c.value}</p>
                  <p className="text-[#231f20]/40 text-xs">{c.sub}</p>
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-green-500 text-white font-bold py-4 rounded-2xl text-sm hover:bg-green-600 hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-green-500/30"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Karo — Abhi
            </a>

            {/* Working Hours */}
            <div className="bg-[#1a74bb]/5 border border-[#1a74bb]/12 rounded-2xl p-5">
              <p className="font-bold text-[#231f20] text-sm mb-3 flex items-center gap-2">
                <Clock size={16} />
                Working Hours
              </p>
              <div className="space-y-2 text-xs text-[#231f20]/60">
                <div className="flex justify-between"><span>Monday – Friday</span><span className="font-semibold text-[#231f20]">9:00 AM – 7:00 PM</span></div>
                <div className="flex justify-between"><span>Saturday</span><span className="font-semibold text-[#231f20]">9:00 AM – 4:00 PM</span></div>
                <div className="flex justify-between"><span>Sunday</span><span className="font-semibold text-red-400">Closed</span></div>
              </div>
            </div>
          </div>

          {/* Right – Form */}
          <div className={`lg:col-span-3 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="bg-[#f8fafd] rounded-3xl p-8 border border-[#1a74bb]/10 shadow-sm">

              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🎉</div>
                  <h3 className="font-black text-2xl text-[#231f20] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Message Bhej Diya!
                  </h3>
                  <p className="text-[#231f20]/55 text-sm">Hum 2 ghante mein aapse contact karenge. WhatsApp pe bhi available hain!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-[#231f20]/60 uppercase tracking-wider mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Aapka naam"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-white border border-[#1a74bb]/15 rounded-xl px-4 py-3 text-[#231f20] text-sm font-medium placeholder:text-[#231f20]/30 focus:outline-none focus:border-[#1a74bb] focus:ring-2 focus:ring-[#1a74bb]/15 transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#231f20]/60 uppercase tracking-wider mb-2">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 XXXXX XXXXX"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-white border border-[#1a74bb]/15 rounded-xl px-4 py-3 text-[#231f20] text-sm font-medium placeholder:text-[#231f20]/30 focus:outline-none focus:border-[#1a74bb] focus:ring-2 focus:ring-[#1a74bb]/15 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#231f20]/60 uppercase tracking-wider mb-2">Email Address</label>
                    <input
                      type="email"
                      placeholder="aapka@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-white border border-[#1a74bb]/15 rounded-xl px-4 py-3 text-[#231f20] text-sm font-medium placeholder:text-[#231f20]/30 focus:outline-none focus:border-[#1a74bb] focus:ring-2 focus:ring-[#1a74bb]/15 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#231f20]/60 uppercase tracking-wider mb-2">Service Required *</label>
                    <select
                      required
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full bg-white border border-[#1a74bb]/15 rounded-xl px-4 py-3 text-[#231f20] text-sm font-medium focus:outline-none focus:border-[#1a74bb] focus:ring-2 focus:ring-[#1a74bb]/15 transition-all duration-200 appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Service choose karein</option>
                      <option value="itr">ITR Filing</option>
                      <option value="gst">GST Compliance</option>
                      <option value="audit">Audit & Assurance</option>
                      <option value="roc">ROC Compliance</option>
                      <option value="tax-planning">Tax Planning</option>
                      <option value="notice">Notice Handling</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#231f20]/60 uppercase tracking-wider mb-2">Message</label>
                    <textarea
                      rows={4}
                      placeholder="Apni requirements ya koi sawaal briefly likho..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-white border border-[#1a74bb]/15 rounded-xl px-4 py-3 text-[#231f20] text-sm font-medium placeholder:text-[#231f20]/30 focus:outline-none focus:border-[#1a74bb] focus:ring-2 focus:ring-[#1a74bb]/15 transition-all duration-200 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-[#1a74bb] to-[#0d5a96] text-white font-bold py-4 rounded-xl text-sm shadow-lg shadow-[#1a74bb]/30 hover:shadow-[#1a74bb]/50 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Bhej rahe hain...
                      </span>
                    ) : (
                      "Free Consultation Book Karo →"
                    )}
                  </button>

                  <p className="text-center text-[#231f20]/35 text-xs">
                    🔒 Aapki information 100% confidential hai. Koi spam nahi.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}