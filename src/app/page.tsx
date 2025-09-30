"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header/Header";
import HeroMNTN from "@/components/Hero/HeroMNTN";
import ContentSection from "@/components/Content/ContentSection";
import SkillsSection from "@/components/Skills/SkillsSection";
import TimelineSection from "@/components/Timeline/TimelineSection";
import Footer from "@/components/Footer/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.config({ nullTargetWarn: false });

export default function Home() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkDesktop = () => {
      const isDesktopResult =
        typeof window.orientation === "undefined" &&
        navigator.userAgent.indexOf("IEMobile") === -1;
      setIsDesktop(isDesktopResult);
    };

    checkDesktop();
    window.addEventListener("resize", checkDesktop);

    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0b1d26] text-white overflow-hidden">
        <HeroMNTN />
        <ContentSection />
        
        {/* Separator */}
        <div className="h-32" />
        
        {/* My sections */}
        <div id="works" className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-5xl font-serif font-bold text-white mb-4">My Works</h2>
            <p className="text-xl text-gray-300 mb-12">Featured projects and portfolio</p>
          </div>
        </div>

        <SkillsSection />
        <TimelineSection isDesktop={isDesktop} />
        
        <div id="contact" className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-5xl font-serif font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-300 mb-8">Let's work together</p>
            <a 
              href="mailto:contact@example.com" 
              className="inline-block bg-[#fbd784] text-[#0b1d26] px-8 py-4 rounded-lg font-bold hover:bg-[#fcd34d] transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
