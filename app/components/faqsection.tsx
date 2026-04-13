"use client";

import { useRef, useEffect, useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  { q: "ITR filing ki last date kya hai?", a: "Generally, salaried individuals ke liye ITR filing ki last date 31st July hoti hai. Business owners ke liye audit cases mein yeh 31st October tak extend hoti hai. Late filing pe ₹1,000 – ₹5,000 penalty lag sakti hai, isliye time pe file karein. Hum aapko deadline se pehle reminder bhi bhejte hain." },
  { q: "GST registration kitne time mein hota hai?", a: "GST registration typically 3–7 working days mein complete ho jaata hai. Agar aapke documents sahi aur complete hain toh 2–3 din mein bhi ho sakta hai. Hum registration se lekar filing setup tak poori process handle karte hain." },
  { q: "Kya aap Income Tax ya GST notices handle karte hain?", a: "Haan, hum Income Tax, GST, aur ROC notices professionally handle karte hain. Hamari Advanced aur Premium packages mein notice handling included hai. Agar aapko koi notice mila hai toh immediately humse contact karein — delay karna notice ko serious bana sakta hai." },
  { q: "Kya online consultation available hai?", a: "Bilkul! Hum WhatsApp, video call (Zoom/Google Meet), aur email ke through puri duniya mein online consultation dete hain. Aapko office aane ki zaroorat nahi hai. 90% clients ka poora kaam online hi complete ho jaata hai." },
  { q: "Documents kaise share karune honge?", a: "Aap documents WhatsApp ya email ke through share kar sakte hain. Hum aapko ek specific documents checklist denge jo aapko collect karni hogi. Aapki sari information 100% confidential rakhi jaati hai aur kisi third party ke saath share nahi ki jaati." },
  { q: "Kya ek baar mein sab services le sakte hain?", a: "Haan! Aap ITR Filing + GST + ROC — teen saath le sakte hain. Bundle mein lene par special discount bhi milta hai. Ek hi team aapka sab kuch handle karti hai toh coordination bhi easy hoti hai." },
  { q: "Payment kaise karni hogi?", a: "Hum UPI, bank transfer, aur online payment accept karte hain. Advance payment + balance on completion structure follow karte hain. Koi hidden charges nahi — jo package mein likha hai wahi pay karna hai." },
  { q: "Kya startup ke liye special packages hain?", a: "Haan! Startups ke liye hum Company Incorporation + GST Registration + ROC Compliance ka bundled package offer karte hain reasonable rates mein. Ek call karein aur hum aapki specific needs ke liye best solution batayenge." },
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

export default function FAQSection() {
  const { ref, inView } = useInView();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-24 px-4">
      <div ref={ref} className="max-w-4xl mx-auto">

        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block bg-[#1a74bb]/10 text-[#1a74bb] text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#231f20] leading-tight mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Aksar Puche Jaane Wale <br />
            <span className="text-[#1a74bb]">Sawaal</span>
          </h2>
          <p className="text-[#231f20]/55 text-lg max-w-md mx-auto">
            Nahi mila jawab? Hum seedha WhatsApp ya call pe bhi bata denge!
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                open === i
                  ? "border-[#1a74bb]/40 shadow-lg shadow-[#1a74bb]/8"
                  : "border-[#1a74bb]/10 hover:border-[#1a74bb]/25"
              } ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {/* Question */}
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
              >
                <div className="flex items-start gap-4">
                  <span className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black transition-colors duration-200 ${
                    open === i ? "bg-[#1a74bb] text-white" : "bg-[#1a74bb]/10 text-[#1a74bb]"
                  }`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={`font-semibold text-base transition-colors duration-200 ${open === i ? "text-[#1a74bb]" : "text-[#231f20] group-hover:text-[#1a74bb]"}`}>
                    {faq.q}
                  </span>
                </div>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  open === i
                    ? "border-[#1a74bb] text-[#1a74bb]"
                    : "border-[#231f20]/20 text-[#231f20]/40"
                }`}>
                  {open === i ? <Minus size={14} /> : <Plus size={14} />}
                </span>
              </button>

              {/* Answer */}
              <div className={`overflow-hidden transition-all duration-400 ${open === i ? "max-h-60" : "max-h-0"}`}
                style={{ maxHeight: open === i ? 240 : 0 }}>
                <div className="px-6 pb-6 pl-[4.25rem]">
                  <p className="text-[#231f20]/65 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className={`mt-12 bg-gradient-to-r from-[#1a74bb]/8 to-[#1a74bb]/4 border border-[#1a74bb]/15 rounded-3xl p-8 text-center transition-all duration-700 delay-400 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <HelpCircle size={32} className="text-[#1a74bb] mb-2" />
          <h3 className="font-black text-[#231f20] text-xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            Aur koi sawaal hai?
          </h3>
          <p className="text-[#231f20]/55 text-sm mb-5">Seedha humse baat karein — hum 2 ghante ke andar respond karte hain</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 text-white font-bold px-6 py-3 rounded-xl text-sm hover:-translate-y-0.5 hover:bg-green-600 transition-all duration-200 shadow-md shadow-green-500/25">
              💬 WhatsApp Karein
            </a>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center justify-center gap-2 bg-[#1a74bb] text-white font-bold px-6 py-3 rounded-xl text-sm hover:-translate-y-0.5 hover:bg-[#0d5a96] transition-all duration-200 shadow-md shadow-[#1a74bb]/25">
              📧 Form Bharo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}