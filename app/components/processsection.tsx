"use client";

import { useRef, useEffect, useState } from "react";
import { MessageCircle, Clipboard, Folder, Settings, CheckCircle, Target } from "lucide-react";

const steps = [
  { num: "01", icon: <MessageCircle size={24} />, title: "Free Consultation", desc: "Hamse contact karein aur apni tax/compliance requirements freely share karein. Koi charges nahi." },
  { num: "02", icon: <Clipboard size={24} />, title: "Package Selection", desc: "Aapki needs ke basis pe hum best package recommend karenge. Aap khud bhi choose kar sakte hain." },
  { num: "03", icon: <Folder size={24} />, title: "Document Sharing", desc: "Required documents WhatsApp ya email ke through securely share karein. Simple checklist denge hum." },
  { num: "04", icon: <Settings size={24} />, title: "Expert Processing", desc: "Hamari CA team aapka kaam accurately aur quickly process karegi. Real-time updates milenge." },
  { num: "05", icon: <CheckCircle size={24} />, title: "Review & Approval", desc: "Filing se pehle aapko complete review ke liye bheja jaega. Aapki approval ke baad hi proceed." },
  { num: "06", icon: <Target size={24} />, title: "Delivery & Support", desc: "Acknowledgment, all documents, aur post-filing support — sab deliver kiya jaega. Hum hamesha available hain." },
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

export default function ProcessSection() {
  const { ref, inView } = useInView();

  return (
    <section id="process" className="bg-white py-24 px-4 relative overflow-hidden">
      {/* BG Decoration */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(26,116,187,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(26,116,187,0.5) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }} />

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block bg-[#1a74bb]/10 text-[#1a74bb] text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-4">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#231f20] leading-tight mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            6 Easy Steps Mein <br />
            <span className="text-[#1a74bb]">Apna Kaam Karo Done</span>
          </h2>
          <p className="text-[#231f20]/55 text-lg max-w-lg mx-auto">
            Simple, transparent, aur hassle-free process. Pehle din se lekar delivery tak hum saath hain.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`group relative bg-[#f8fafd] border border-[#1a74bb]/10 rounded-3xl p-7 hover:bg-white hover:border-[#1a74bb]/30 hover:shadow-xl hover:shadow-[#1a74bb]/8 hover:-translate-y-1.5 transition-all duration-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Step Number */}
              <div className="absolute top-6 right-6 text-6xl font-black leading-none select-none"
                style={{ color: "rgba(26,116,187,0.06)", fontFamily: "'Playfair Display', serif" }}>
                {step.num}
              </div>

              {/* Icon Circle */}
              <div className="w-14 h-14 rounded-2xl bg-[#1a74bb]/10 flex items-center justify-center text-2xl mb-5 group-hover:bg-[#1a74bb]/15 group-hover:scale-110 transition-all duration-300">
                {step.icon}
              </div>

              {/* Step Label */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-black tracking-widest text-[#1a74bb] uppercase">Step {step.num}</span>
                <span className="flex-1 h-px bg-[#1a74bb]/15" />
              </div>

              <h3 className="font-bold text-[#231f20] text-lg mb-2">{step.title}</h3>
              <p className="text-[#231f20]/55 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className={`mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="text-center sm:text-left">
            <p className="text-[#231f20] font-bold text-lg">Shuru karna chahte hain?</p>
            <p className="text-[#231f20]/50 text-sm">Step 1 bilkul free hai — abhi book karein</p>
          </div>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-gradient-to-r from-[#1a74bb] to-[#0d5a96] text-white font-bold px-8 py-3.5 rounded-xl text-sm shadow-lg shadow-[#1a74bb]/30 hover:-translate-y-0.5 hover:shadow-[#1a74bb]/50 transition-all duration-200"
          >
            Start Free Consultation →
          </button>
        </div>
      </div>
    </section>
  );
}