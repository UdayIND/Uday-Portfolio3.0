"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header/Header";
import HeroMNTN from "@/components/Hero/HeroMNTN";
import WorksSection from "@/components/Works/WorksSection";
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

    // Slider progress bar animation
    gsap.to(".slider-progress-bar", {
      height: "100%",
      ease: "none",
      scrollTrigger: { 
        scrub: 0.3,
        start: "top top",
        end: "max",
      },
    });

    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0b1d26] text-white">
        <HeroMNTN />
        <WorksSection />
        <SkillsSection />
        <TimelineSection isDesktop={isDesktop} />
        <Footer />
      </main>
    </>
  );
}
