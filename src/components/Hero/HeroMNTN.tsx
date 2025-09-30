"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MENULINKS } from "@/constants";

gsap.registerPlugin(ScrollTrigger);

export default function HeroMNTN() {
  useEffect(() => {
    // Initial fade-in animations
    gsap.fromTo(
      [".hero-subtitle", ".hero-title span", ".hero-action", ".slider-list-item"],
      { autoAlpha: 0, y: 100 },
      { autoAlpha: 1, y: 0, stagger: 0.2, duration: 1 }
    );

    gsap.fromTo(
      ".slider-progress",
      { autoAlpha: 0, y: 100 },
      { autoAlpha: 1, y: 0, delay: 1 }
    );

    // Parallax scrolling animation
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
          invalidateOnRefresh: true,
        },
      })
      .to(".sky", { y: 1000 }, "0")
      .to(".mountains", { y: -300 }, "0")
      .to(".man-standing", { y: -100 }, "0")
      .to(".hero-content", { y: 450, autoAlpha: 0 }, "0");

    // Slider progress bar animation
    gsap.to(".slider-progress-bar", {
      height: "100%",
      ease: "none",
      scrollTrigger: { scrub: 0.3 },
    });
  }, []);

  return (
    <section className="hero-section section relative pb-36 overflow-hidden max-h-screen" id="section-00">
      {/* Overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#0b1d26]/60 z-[1] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[550px] z-[5] bg-gradient-to-t from-[#0b1d26] via-[#0b1d26] to-transparent pointer-events-none" />

      {/* Hero image wrapper */}
      <div className="hero-image-wrapper relative flex flex-col items-start justify-start">
        <img 
          src="/mntn/sky.png" 
          className="sky relative -translate-y-1/2 w-full h-screen object-cover" 
          alt="Sky" 
        />
        <img 
          src="/mntn/mountains.png" 
          className="mountains w-full h-screen object-cover z-[1]" 
          alt="Mountains"
          style={{ marginTop: '-170%' }}
        />
        <img 
          src="/mntn/man-standing.png" 
          className="man-standing w-full h-[330px] object-cover z-[4]" 
          alt="Person"
          style={{ marginTop: '-150%' }}
        />
      </div>

      {/* Hero content */}
      <div className="hero-content absolute top-[20%] left-0 right-0 z-[6] w-full max-w-[1030px] mx-auto px-6">
        <h5 className="hero-subtitle text-[#fbd784] text-xs font-bold uppercase tracking-[6px] mb-8 inline-flex items-center gap-8">
          <span className="w-10 h-[2px] bg-[#fbd784]" />
          A Hiking guide
        </h5>
        <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-white mb-8 leading-tight">
          <span className="block">Be prepared for the</span>
          <span className="block">Mountains and beyond!</span>
        </h1>
        <a href="#section-01" className="hero-action text-white text-lg font-bold inline-flex items-center gap-6 hover:gap-8 transition-all">
          scroll down
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-bounce">
            <path d="M16 16L14.59 14.59L9 20.17V0H7V20.17L1.42 14.58L0 16L8 24L16 16Z" fill="currentColor" />
          </svg>
        </a>
      </div>

      {/* Section stepper */}
      <nav className="slider fixed right-0 top-1/2 -translate-y-1/2 text-right z-[9]">
        <div className="max-w-[1500px] mx-auto flex items-center gap-8 justify-end pr-0">
          <ul className="slider-list flex flex-col gap-10 py-4">
            <li className="slider-list-item">
              <a href="#section-00" className="text-white font-bold text-lg">Start</a>
            </li>
            <li className="slider-list-item">
              <a href="#section-01" className="text-white font-bold text-lg">01</a>
            </li>
            <li className="slider-list-item">
              <a href="#section-02" className="text-white font-bold text-lg">02</a>
            </li>
            <li className="slider-list-item">
              <a href="#section-03" className="text-white font-bold text-lg">03</a>
            </li>
          </ul>
          <div className="slider-progress w-1 h-auto bg-white/20">
            <div className="slider-progress-bar w-full h-0 bg-white" />
          </div>
        </div>
      </nav>
    </section>
  );
}
