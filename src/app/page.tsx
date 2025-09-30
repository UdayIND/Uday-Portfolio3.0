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
        {/* MNTN Hero Section with parallax */}
        <HeroMNTN />
        
        {/* 3 Step Images Section */}
        <ContentSection />
        
        {/* Divider */}
        <div className="h-20" />
        
        {/* My Works Section */}
        <div id="works" className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h5 className="text-sm text-[#fbd784] uppercase tracking-[6px] mb-4 inline-flex items-center gap-4 justify-center">
                <span className="w-10 h-[2px] bg-[#fbd784]" />
                Portfolio
                <span className="w-10 h-[2px] bg-[#fbd784]" />
              </h5>
              <h2 className="text-5xl md:text-6xl font-serif font-medium text-white mb-4">
                My Works
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Featured projects and portfolio showcasing my expertise in web development
              </p>
            </div>
            
            {/* Placeholder for projects - you can add your project cards here */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:border-[#fbd784] transition-colors">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Project Name</h3>
                <p className="text-gray-400 text-sm">Project description goes here</p>
              </div>
              <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:border-[#fbd784] transition-colors">
                <div className="h-48 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Project Name</h3>
                <p className="text-gray-400 text-sm">Project description goes here</p>
              </div>
              <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:border-[#fbd784] transition-colors">
                <div className="h-48 bg-gradient-to-br from-pink-500 to-red-500 rounded-lg mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Project Name</h3>
                <p className="text-gray-400 text-sm">Project description goes here</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <SkillsSection />

        {/* Timeline Section */}
        <TimelineSection isDesktop={isDesktop} />
        
        {/* Contact Section */}
        <div id="contact" className="py-20 bg-gradient-to-b from-transparent to-[#0b1d26]">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h5 className="text-sm text-[#fbd784] uppercase tracking-[6px] mb-4 inline-flex items-center gap-4 justify-center">
              <span className="w-10 h-[2px] bg-[#fbd784]" />
              Get In Touch
              <span className="w-10 h-[2px] bg-[#fbd784]" />
            </h5>
            <h2 className="text-5xl md:text-6xl font-serif font-medium text-white mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Have a project in mind? Let's create something amazing together.
            </p>
            <a 
              href="mailto:contact@example.com" 
              className="inline-flex items-center gap-3 bg-[#fbd784] text-[#0b1d26] px-8 py-4 rounded-lg font-bold hover:bg-[#fcd34d] transition-all hover:gap-5"
            >
              Contact Me
              <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 0L14.59 1.41L20.17 7H0V9H20.17L14.58 14.58L16 16L24 8L16 0Z" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
