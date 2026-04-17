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
  { icon: <Phone size={20} />, label: "Phone / WhatsApp", value: "+91 7568820015",  sub: "Mon–Sat, 9AM–7PM" },
  { icon: <Mail size={20} />, label: "Email", value: "nkassociates2024@gmail.com", sub: "Reply within 2 hours" },
  { icon: <MapPin size={20} />, label: "Office", value: "4th Floor, Sanjay Mainsion, Shri Ramnagar Colony, Dada Gurudev Nagar, Sanganer, Jaipur, Rajasthan 302029", sub: "By appointment only" },
];

export default function ContactForm() {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbzSo5FulTjc4LKFxm74MJSuYoe-1m2sesrhiKiYJ78szKgUUxwmoudrWqjwHZR7SD3y/exec", {
        method: "POST",
        body: JSON.stringify(form),
      });
  
      const result = await response.json();
  
      if (result.status === "success") {
        setSubmitted(true);
        setForm({ name: "", email: "", phone: "", service: "", message: "" });
  
        // ✅ WhatsApp message
        const message = `Hello, I want consultation.
  
  Name: ${form.name}
  Phone: ${form.phone}
  Service: ${form.service}
  Message: ${form.message}`;
  
        const whatsappURL = `https://wa.me/918619046592?text=${encodeURIComponent(message)}`;
  
        window.open(whatsappURL, "_blank");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  
    setLoading(false);
  };

  return (
    <section id="contact" className="bg-white py-24 px-4 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #3773b6 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div ref={ref} className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block bg-[#3773b6]/10 text-[#3773b6] text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-4">
            Contact Us
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#232021] leading-tight mb-4">
            Baat Karein — <br />
            <span className="text-[#3773b6]">Pehli Consultation Free Hai!</span>
          </h2>
          <p className="text-[#232021]/55 text-lg max-w-lg mx-auto">
            Form bharo ya seedha WhatsApp karo. Hum 2 ghante mein respond karte hain.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* Left – Info */}
          <div className={`lg:col-span-2 space-y-4 transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>

            {contactInfo.map((c) => (
              <div
                key={c.label}
                className="flex items-center gap-4 bg-white rounded-2xl p-5 border border-[#3773b6]/10 hover:border-[#3773b6]/25 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-[#3773b6]/10 flex items-center justify-center flex-shrink-0">{c.icon}</div>
                <div>
                  <p className="text-[#232021]/50 text-xs font-semibold uppercase tracking-wider">{c.label}</p>
                  <p className="font-bold text-[#232021] text-sm">{c.value}</p>
                  <p className="text-[#232021]/40 text-xs">{c.sub}</p>
                </div>
              </div>
            ))}

            

            {/* Working Hours */}
            <div className="bg-[#3773b6]/5 border border-[#3773b6]/12 rounded-2xl p-5">
              <p className="font-bold text-[#232021] text-sm mb-3 flex items-center gap-2">
                <Clock size={16} />
                Working Hours
              </p>
              <div className="space-y-2 text-xs text-[#232021]/60">
                <div className="flex justify-between"><span>Monday – Friday</span><span className="font-semibold text-[#232021]">9:00 AM – 7:00 PM</span></div>
                <div className="flex justify-between"><span>Saturday</span><span className="font-semibold text-[#232021]">9:00 AM – 4:00 PM</span></div>
                <div className="flex justify-between"><span>Sunday</span><span className="font-semibold text-red-400">Closed</span></div>
              </div>
            </div>
          </div>

          {/* Right – Form */}
          <div className={`lg:col-span-3 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="bg-white rounded-3xl p-8 border border-[#3773b6]/10 shadow-sm">

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto rounded-3xl bg-[#3773b6]/10 flex items-center justify-center text-[#3773b6] mb-4">
                    <span className="text-3xl font-black">✓</span>
                  </div>
                  <h3 className="font-black text-2xl text-[#232021] mb-2">
                    Message Bhej Diya!
                  </h3>
                  <p className="text-[#232021]/55 text-sm">Hum 2 ghante mein aapse contact karenge. WhatsApp pe bhi available hain!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-[#232021]/60 uppercase tracking-wider mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Aapka naam"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-white border border-[#3773b6]/15 rounded-xl px-4 py-3 text-[#232021] text-sm font-medium placeholder:text-[#232021]/30 focus:outline-none focus:border-[#3773b6] focus:ring-2 focus:ring-[#3773b6]/15 transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#232021]/60 uppercase tracking-wider mb-2">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 XXXXX XXXXX"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-white border border-[#3773b6]/15 rounded-xl px-4 py-3 text-[#232021] text-sm font-medium placeholder:text-[#232021]/30 focus:outline-none focus:border-[#3773b6] focus:ring-2 focus:ring-[#3773b6]/15 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#232021]/60 uppercase tracking-wider mb-2">Email Address</label>
                    <input
                      type="email"
                      placeholder="aapka@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-white border border-[#3773b6]/15 rounded-xl px-4 py-3 text-[#232021] text-sm font-medium placeholder:text-[#232021]/30 focus:outline-none focus:border-[#3773b6] focus:ring-2 focus:ring-[#3773b6]/15 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#232021]/60 uppercase tracking-wider mb-2">Service Required *</label>
                    <select
                      required
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full bg-white border border-[#3773b6]/15 rounded-xl px-4 py-3 text-[#232021] text-sm font-medium focus:outline-none focus:border-[#3773b6] focus:ring-2 focus:ring-[#3773b6]/15 transition-all duration-200 appearance-none cursor-pointer"
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
                    <label className="block text-xs font-bold text-[#232021]/60 uppercase tracking-wider mb-2">Message</label>
                    <textarea
                      rows={4}
                      placeholder="Apni requirements ya koi sawaal briefly likho..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-white border border-[#3773b6]/15 rounded-xl px-4 py-3 text-[#232021] text-sm font-medium placeholder:text-[#232021]/30 focus:outline-none focus:border-[#3773b6] focus:ring-2 focus:ring-[#3773b6]/15 transition-all duration-200 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full cursor-pointer bg-gradient-to-r from-[#3773b6] to-[#2a5a99] text-white font-bold py-4 rounded-xl text-sm shadow-lg shadow-[#3773b6]/30 hover:shadow-[#3773b6]/50 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200"
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

                  <p className="text-center text-[#232021]/35 text-xs">
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