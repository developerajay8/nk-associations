import Image from "next/image";
import Navbar from "./components/navbar";
import HeroSection from "./components/herosection";
import TrustedBy from "./components/trustedby";
import ServicesSection from "./components/servicessection";
import WhyChooseUs from "./components/whychooseus";
import AboutUs from "./components/aboutus";
import ProcessSection from "./components/processsection";
import TestimonialsSection from "./components/testimonialssection";
// import FAQSection from "./components/faqsection";
import BlogSection from "./components/blogsection";
import ContactForm from "./components/contactform";
import { CTASection, Footer } from "./components/ctaandfooter";
import StickyButtons from "./components/stickybuttons";

export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <HeroSection/>
      <TrustedBy/>
      <ServicesSection/>  
      <WhyChooseUs/>
      <AboutUs/>
      <ProcessSection/>
      <TestimonialsSection/>
      {/* <FAQSection/> */}
      <BlogSection/>
      <ContactForm/>
      {/* <CTASection/> */}
      <Footer/>
      <StickyButtons/>

    </div>
  );
}
