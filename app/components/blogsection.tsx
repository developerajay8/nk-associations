"use client";

import { useRef, useEffect, useState } from "react";
import { FileText, Receipt, Building, DollarSign, Monitor, BarChart3, Calendar, Clock, ArrowRight } from "lucide-react";

const blogs = [
  {
    cat: "Income Tax",
    catColor: "#1a74bb",
    title: "ITR Filing 2024-25: Kya Naya Hai Is Saal?",
    excerpt: "Is saal ke ITR filing mein kya badlav aaye hain, konsa form bharna hai, aur aap kaise maximum tax bachaa sakte hain — poori guide.",
    date: "Apr 10, 2025",
    read: "5 min",
    icon: <FileText size={20} />,
    badge: "Must Read",
  },
  {
    cat: "GST",
    catColor: "#10b981",
    title: "GSTR-9 Annual Return: Complete Step-by-Step Guide",
    excerpt: "GSTR-9 filing ke baare mein sab kuch jaanein — kya hai, kab bharna hai, kaise bharna hai, aur common mistakes se kaise bachein.",
    date: "Mar 25, 2025",
    read: "8 min",
    icon: <Receipt size={20} />,
    badge: "Popular",
  },
  {
    cat: "ROC",
    catColor: "#8b5cf6",
    title: "Startup ke liye ROC Compliance: Complete Checklist",
    excerpt: "Naye startups ke liye ROC compliance ka detailed checklist — AOC-4, MGT-7, DIR-3 KYC sab kuch samjhein ek jagah pe.",
    date: "Mar 15, 2025",
    read: "6 min",
    icon: <Building size={20} />,
    badge: "New",
  },
  {
    cat: "Tax Planning",
    catColor: "#f59e0b",
    title: "Section 80C Ke Baad Aur Kahan Bachao Tax?",
    excerpt: "80C ka limit full ho gaya? Koi baat nahi. 80D, 80E, 80G, HRA aur bahut saare options hain jinse aap aur tax bacha sakte hain legally.",
    date: "Mar 5, 2025",
    read: "7 min",
    icon: "💰",
    badge: "Trending",
  },
  {
    cat: "Income Tax",
    catColor: "#1a74bb",
    title: "Freelancers ke liye Income Tax: Poori Jankari",
    excerpt: "Freelance income ka tax kaise calculate hota hai, advance tax, professional tax — sab kuch ek comprehensive article mein.",
    date: "Feb 20, 2025",
    read: "9 min",
    icon: "💻",
    badge: null,
  },
  {
    cat: "GST",
    catColor: "#10b981",
    title: "E-Invoice kya hai aur aapko kab chahiye?",
    excerpt: "E-Invoicing mandatory hai kuch businesses ke liye. Jaanein aap is category mein aate hain ya nahi, aur kaise setup karein.",
    date: "Feb 10, 2025",
    read: "4 min",
    icon: "📊",
    badge: null,
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

export default function BlogSection() {
  const { ref, inView } = useInView();

  return (
    <section id="blog" className="bg-[#f8fafd] py-24 px-4">
      <div ref={ref} className="max-w-7xl mx-auto">

        {/* Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div>
            <span className="inline-block bg-[#1a74bb]/10 text-[#1a74bb] text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-4">
              Blog & Insights
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#231f20] leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Tax & Finance Ka <br />
              <span className="text-[#1a74bb]">Asaan Gyaan</span>
            </h2>
          </div>
          <p className="text-[#231f20]/55 text-base max-w-xs md:text-right">
            Jargon-free, simple Hindi mein tax aur finance ki latest jankari
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogs.map((post, i) => (
            <article
              key={post.title}
              className={`group bg-white rounded-3xl overflow-hidden border border-[#1a74bb]/8 hover:border-[#1a74bb]/25 hover:shadow-xl hover:shadow-[#1a74bb]/8 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              {/* Card Top */}
              <div className="relative p-6 pb-0">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                    style={{ background: `${post.catColor}12` }}>
                    {post.icon}
                  </div>
                  {post.badge && (
                    <span className="text-[10px] font-black tracking-wider uppercase px-3 py-1 rounded-full border"
                      style={{ color: post.catColor, background: `${post.catColor}10`, borderColor: `${post.catColor}25` }}>
                      {post.badge}
                    </span>
                  )}
                </div>

                <span className="text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block"
                  style={{ color: post.catColor, background: `${post.catColor}10` }}>
                  {post.cat}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 pt-3">
                <h3 className="font-black text-[#231f20] text-base leading-snug mb-3 group-hover:text-[#1a74bb] transition-colors duration-200"
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                  {post.title}
                </h3>
                <p className="text-[#231f20]/55 text-sm leading-relaxed mb-5">{post.excerpt}</p>

                {/* Meta */}
                <div className="flex items-center justify-between pt-4 border-t border-[#1a74bb]/8">
                  <div className="flex items-center gap-3 text-[#231f20]/40 text-xs">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      <span>{post.date}</span>
                    </div>
                    <span>·</span>
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      <span>{post.read} read</span>
                    </div>
                  </div>
                  <span className="flex items-center gap-1 text-[#1a74bb] text-xs font-bold group-hover:translate-x-1 transition-transform duration-200">
                    Read <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All */}
        <div className={`mt-10 text-center transition-all duration-700 delay-400 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <button className="inline-flex items-center gap-2 border-2 border-[#1a74bb] text-[#1a74bb] font-bold px-8 py-3.5 rounded-xl text-sm hover:bg-[#1a74bb] hover:text-white transition-all duration-200">
            Saare Articles Dekho <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}