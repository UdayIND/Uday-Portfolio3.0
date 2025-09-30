"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContentSection() {
  useEffect(() => {
    // Simple fade-in animation for the cards
    gsap.from(".step-card", {
      scrollTrigger: {
        trigger: ".steps-grid",
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
    });
  }, []);

  return (
    <section className="content-section py-20 relative z-[5]">
      <div className="container max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h5 className="text-sm text-[#fbd784] uppercase tracking-[6px] mb-4 inline-flex items-center gap-4">
            <span className="w-10 h-[2px] bg-[#fbd784]" />
            Explore
            <span className="w-10 h-[2px] bg-[#fbd784]" />
          </h5>
          <h2 className="text-5xl md:text-6xl font-serif font-medium text-white">
            The Journey
          </h2>
        </div>

        {/* 3 Step Images Grid */}
        <div className="steps-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="step-card group">
            <div className="relative overflow-hidden rounded-2xl mb-6">
              <img 
                src="/mntn/step-1.png" 
                alt="Get Started" 
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-6 left-6">
                <span className="text-[#fbd784] text-8xl font-bold opacity-20">01</span>
              </div>
            </div>
            <h3 className="text-2xl font-serif text-white mb-3 flex items-center gap-3">
              <span className="w-10 h-[2px] bg-[#fbd784]" />
              Get Started
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Determining what level of hiker you are can be an important tool when planning future hikes.
            </p>
          </div>

          {/* Step 2 */}
          <div className="step-card group">
            <div className="relative overflow-hidden rounded-2xl mb-6">
              <img 
                src="/mntn/step-2.png" 
                alt="Hiking Essentials" 
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-6 left-6">
                <span className="text-[#fbd784] text-8xl font-bold opacity-20">02</span>
              </div>
            </div>
            <h3 className="text-2xl font-serif text-white mb-3 flex items-center gap-3">
              <span className="w-10 h-[2px] bg-[#fbd784]" />
              Hiking Essentials
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Picking the right hiking gear is crucial for a safe and enjoyable adventure.
            </p>
          </div>

          {/* Step 3 */}
          <div className="step-card group">
            <div className="relative overflow-hidden rounded-2xl mb-6">
              <img 
                src="/mntn/step-3.png" 
                alt="Map & Timing" 
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-6 left-6">
                <span className="text-[#fbd784] text-8xl font-bold opacity-20">03</span>
              </div>
            </div>
            <h3 className="text-2xl font-serif text-white mb-3 flex items-center gap-3">
              <span className="w-10 h-[2px] bg-[#fbd784]" />
              Map & Timing
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Understanding your map and timing ensures you stay on track throughout your journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
