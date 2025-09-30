"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContentSection() {
  useEffect(() => {
    const contentWrappers = document.querySelectorAll(".content-row");
    
    contentWrappers.forEach((contentWrapper) => {
      const image = contentWrapper.querySelector(".content-image img");
      const counter = contentWrapper.querySelector(".counter");
      const subtitle = contentWrapper.querySelector(".content-subtitle");
      const title = contentWrapper.querySelectorAll(".content-title span");
      const description = contentWrapper.querySelector(".content-copy");
      const action = contentWrapper.querySelector(".content-action");

      gsap
        .timeline({
          scrollTrigger: {
            trigger: contentWrapper,
            start: "center-=100 center",
            end: "center top",
            scrub: 0.2,
            pin: contentWrapper,
            invalidateOnRefresh: true,
          },
        })
        .fromTo(
          [subtitle, title, description, action],
          { autoAlpha: 0, y: 100, stagger: 0.2 },
          { autoAlpha: 1, y: 0, stagger: 0.2 },
          "0"
        )
        .fromTo(counter, { autoAlpha: 0 }, { autoAlpha: 1 }, "0")
        .fromTo(
          image,
          { autoAlpha: 0, scale: 1.5 },
          { autoAlpha: 1, scale: 1 },
          "0"
        );
    });
  }, []);

  return (
    <section className="content-section section relative z-[5] -mt-[50%]">
      <div className="container max-w-[1462px] mx-auto px-6">
        {/* Section 1 */}
        <div className="content-wrapper mb-20" id="section-01">
          <div className="content-row flex flex-col md:flex-row items-center gap-16">
            <div className="content-image flex-1">
              <img src="/mntn/step-1.png" alt="Get Started" className="w-full h-auto" />
            </div>
            <div className="content-content flex-1 pl-0">
              <h5 className="content-subtitle text-sm text-[#fbd784] uppercase tracking-[6px] mb-7 inline-flex items-center gap-8 relative">
                <span className="w-10 h-[2px] bg-[#fbd784]" />
                <span className="counter text-[140px] font-bold text-white/10 absolute left-0 top-1/2 -translate-y-1/2 leading-none -z-10">01</span>
                GEt Started
              </h5>
              <p className="content-copy text-sm text-white leading-8 mb-7">
                Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?
              </p>
              <a href="#" className="content-action text-[#fbd784] inline-flex items-center gap-4 hover:gap-6 transition-all">
                read more
                <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 0L14.59 1.41L20.17 7H0V9H20.17L14.58 14.58L16 16L24 8L16 0Z" fill="#FBD784" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="content-wrapper mb-20" id="section-02">
          <div className="content-row flex flex-col md:flex-row items-center gap-16">
            <div className="content-image flex-1">
              <img src="/mntn/step-2.png" alt="Hiking Essentials" className="w-full h-auto" />
            </div>
            <div className="content-content flex-1 pl-0">
              <h5 className="content-subtitle text-sm text-[#fbd784] uppercase tracking-[6px] mb-7 inline-flex items-center gap-8 relative">
                <span className="w-10 h-[2px] bg-[#fbd784]" />
                <span className="counter text-[140px] font-bold text-white/10 absolute left-0 top-1/2 -translate-y-1/2 leading-none -z-10">02</span>
                Hiking Essentials
              </h5>
              <h2 className="content-title text-4xl font-serif text-white mb-7 font-medium">
                <span className="block">Picking the right</span>
                <span className="block">Hiking Gear!</span>
              </h2>
              <p className="content-copy text-sm text-white leading-8 mb-7">
                Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?
              </p>
              <a href="#" className="content-action text-[#fbd784] inline-flex items-center gap-4 hover:gap-6 transition-all">
                read more
                <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 0L14.59 1.41L20.17 7H0V9H20.17L14.58 14.58L16 16L24 8L16 0Z" fill="#FBD784" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="content-wrapper mb-20" id="section-03">
          <div className="content-row flex flex-col md:flex-row items-center gap-16">
            <div className="content-image flex-1">
              <img src="/mntn/step-3.png" alt="Map & Timing" className="w-full h-auto" />
            </div>
            <div className="content-content flex-1 pl-0">
              <h5 className="content-subtitle text-sm text-[#fbd784] uppercase tracking-[6px] mb-7 inline-flex items-center gap-8 relative">
                <span className="w-10 h-[2px] bg-[#fbd784]" />
                <span className="counter text-[140px] font-bold text-white/10 absolute left-0 top-1/2 -translate-y-1/2 leading-none -z-10">03</span>
                where you go is the key
              </h5>
              <h2 className="content-title text-4xl font-serif text-white mb-7 font-medium">
                <span className="block">Understand Your</span>
                <span className="block">Map & Timing</span>
              </h2>
              <p className="content-copy text-sm text-white leading-8 mb-7">
                Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?
              </p>
              <a href="#" className="content-action text-[#fbd784] inline-flex items-center gap-4 hover:gap-6 transition-all">
                read more
                <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 0L14.59 1.41L20.17 7H0V9H20.17L14.58 14.58L16 16L24 8L16 0Z" fill="#FBD784" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

