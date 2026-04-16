"use client";

import { useRef, useEffect, useState } from "react";
import { Star, Check } from "lucide-react";

const testimonials = [
  { name: "Rajesh Sharma", role: "Business Owner", company: "Sharma Enterprises", initials: "RS", color: "#3773b6", rating: 5, text: "NK Associates ne meri company ka GST compliance bahut smoothly handle kiya. Very professional team and always available for queries. Highly recommend!" },
  { name: "Priya Mehta", role: "Freelancer", company: "Digital Creator", initials: "PM", color: "#10b981", rating: 5, text: "Mujhe ITR filing se bahut dar lagta tha, but NK Associates ne sab kuch easy kar diya. Process bilkul simple tha aur fees bhi reasonable. Will use every year!" },
  { name: "Vikram Joshi", role: "Director", company: "Joshi Pvt. Ltd.", initials: "VJ", color: "#f59e0b", rating: 5, text: "Excellent audit services. Very thorough and detailed. The team caught several discrepancies that saved us a significant amount in potential penalties." },
  { name: "Sunita Agarwal", role: "Self Employed", company: "Agarwal Trading", initials: "SA", color: "#8b5cf6", rating: 5, text: "Best price for ITR filing in the market. Quick turnaround time aur WhatsApp pe response bhi fast tha. Bohot khush hoon NK Associates se." },
  { name: "Amit Khandelwal", role: "Startup Founder", company: "TechStart India", initials: "AK", color: "#ef4444", rating: 5, text: "ROC compliance aur GST sab NK Associates handle karte hain humara. Startup ke liye ek reliable compliance partner bahut zaruri hota hai — yahi hain." },
  { name: "Meena Gupta", role: "Housewife Investor", company: "Individual", initials: "MG", color: "#3773b6", rating: 5, text: "Capital gains aur investment income ka ITR bahut complex lagta tha. NK Associates ne sab explain kiya aur tax bhi optimize kiya. Great experience!" },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <Star key={i} size={14} className="text-amber-400 fill-current" />
      ))}
    </div>
  );
}

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

export default function TestimonialsSection() {
  const { ref, inView } = useInView();

  return (
    <section id="testimonials" className="bg-white py-24 px-4">
      <div ref={ref} className="max-w-7xl mx-auto">

        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block bg-[#3773b6]/10 text-[#3773b6] text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-4">
            Client Reviews
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#232021] leading-tight mb-4">
            2500+ Clients Ka <br />
            <span className="text-[#3773b6]">Bharosa Aur Pyaar</span>
          </h2>
          <div className="flex items-center justify-center gap-3">
            <StarRating count={5} />
            <span className="text-[#232021] font-bold text-lg">4.9 / 5</span>
            <span className="text-[#232021]/40 text-sm">— 500+ Google Reviews</span>
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`group bg-white rounded-3xl p-7 border border-[#3773b6]/8 hover:border-[#3773b6]/25 hover:shadow-xl hover:shadow-[#3773b6]/8 hover:-translate-y-1.5 transition-all duration-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              {/* Quote Icon */}
              <div
                className="w-12 h-12 rounded-2xl bg-[#3773b6]/10 flex items-center justify-center mb-4"
                style={{ color: `${t.color}` }}
              >
                <span className="text-4xl leading-none font-black select-none">&ldquo;</span>
              </div>

              <StarRating count={t.rating} />

              <p className="text-[#232021]/70 text-sm leading-relaxed mt-3 mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-[#3773b6]/8">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}88)` }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-[#232021] text-sm">{t.name}</p>
                  <p className="text-[#232021]/45 text-xs">{t.role} · {t.company}</p>
                </div>
                <div className="ml-auto">
                  <span className="flex items-center gap-1 text-[10px] font-semibold bg-[#3773b6]/5 text-[#3773b6] px-2.5 py-1 rounded-full border border-[#3773b6]/15">
                    <Check size={10} />
                    Verified
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Rating Banner */}
        <div className={`mt-12 bg-white rounded-3xl border border-[#3773b6]/10 p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm transition-all duration-700 delay-400 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-[#3773b6]/8 flex items-center justify-center text-3xl">🌟</div>
            <div>
              <p className="font-black text-[#232021] text-xl">Google pe bhi check karein</p>
              <p className="text-[#232021]/50 text-sm">Humare 500+ genuine reviews Google par available hain</p>
            </div>
          </div>
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#3773b6] text-white font-bold px-6 py-3 rounded-xl text-sm hover:-translate-y-0.5 hover:bg-[#2a5a99] transition-all duration-200 shadow-lg shadow-[#3773b6]/25"
          >
            View on Google →
          </a>
        </div>
      </div>
    </section>
  );
}