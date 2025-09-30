"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { MENULINKS } from "@/constants";

gsap.registerPlugin(ScrollTrigger);

export default function HeroMNTN() {
  const heroRef = useRef<HTMLElement>(null);
  const skyRef = useRef<HTMLDivElement>(null);
  const mountainsRef = useRef<HTMLDivElement>(null);
  const manRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial fade-in animations
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      
      tl.fromTo(
        [".hero-subtitle", ".hero-title span", ".hero-action"],
        { autoAlpha: 0, y: 100 },
        { autoAlpha: 1, y: 0, stagger: 0.2, duration: 1 }
      );

      // Parallax scrolling animation
      gsap.timeline({
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
          invalidateOnRefresh: true,
        },
      })
      .to(skyRef.current, { y: 1000 }, "0")
      .to(mountainsRef.current, { y: -300 }, "0")
      .to(manRef.current, { y: -100 }, "0")
      .to(contentRef.current, { y: 450, autoAlpha: 0 }, "0");
    });

    return () => ctx.revert();
  }, []);

  const handleScrollDown = () => {
    const worksSection = document.getElementById(MENULINKS[1].ref);
    if (worksSection) {
      worksSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      className="hero-section relative h-screen w-full overflow-hidden"
      id={MENULINKS[0].ref}
    >
      {/* Background layers with parallax */}
      <div className="absolute inset-0 w-full h-full">
        {/* Sky layer */}
        <div ref={skyRef} className="sky absolute inset-0 w-full h-full">
          <Image
            src="/mntn/sky.png"
            alt="Sky"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>

        {/* Mountains layer */}
        <div
          ref={mountainsRef}
          className="mountains absolute inset-0 w-full h-full z-[2]"
        >
          <Image
            src="/mntn/mountains.png"
            alt="Mountains"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>

        {/* Man standing layer */}
        <div
          ref={manRef}
          className="man-standing absolute bottom-0 left-0 right-0 z-[4] h-[330px]"
        >
          <Image
            src="/mntn/man-standing.png"
            alt="Person"
            fill
            className="object-cover object-bottom"
            priority
            sizes="100vw"
          />
        </div>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b1d26]/30 to-transparent z-[3] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[550px] z-[5] bg-gradient-to-t from-[#0b1d26] via-[#0b1d26] to-transparent pointer-events-none" />

      {/* Hero content */}
      <div
        ref={contentRef}
        className="hero-content absolute inset-0 flex items-center z-[6]"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="max-w-3xl">
            <h5 className="hero-subtitle text-[#FBD784] text-sm font-bold uppercase tracking-[6px] mb-8 flex items-center gap-8 font-sans">
              <span className="w-12 h-[2px] bg-[#FBD784]" />
              A Hiking guide
            </h5>

            <h1 className="hero-title font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-white mb-8 leading-[1.1]">
              <span className="block mb-2">Be prepared for the</span>
              <span className="block">Mountains and beyond!</span>
            </h1>

            <button
              onClick={handleScrollDown}
              className="hero-action text-white text-lg font-bold flex items-center gap-6 hover:gap-8 transition-all duration-300"
            >
              scroll down
              <svg
                width="16"
                height="24"
                viewBox="0 0 16 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="animate-bounce"
              >
                <path
                  d="M16 16L14.59 14.59L9 20.17V0H7V20.17L1.42 14.58L0 16L8 24L16 16Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Section stepper */}
      <nav className="fixed right-8 md:right-12 top-1/2 -translate-y-1/2 z-50 hidden md:block">
        <div className="flex items-center gap-6">
          <ul className="flex flex-col gap-10">
            <li>
              <button
                onClick={() => scrollToSection(MENULINKS[0].ref)}
                className="text-white text-lg font-bold hover:text-[#FBD784] transition-colors"
              >
                Start
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(MENULINKS[1].ref)}
                className="text-white text-lg font-bold hover:text-[#FBD784] transition-colors"
              >
                01
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(MENULINKS[2].ref)}
                className="text-white text-lg font-bold hover:text-[#FBD784] transition-colors"
              >
                02
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(MENULINKS[3].ref)}
                className="text-white text-lg font-bold hover:text-[#FBD784] transition-colors"
              >
                03
              </button>
            </li>
          </ul>
          <div className="w-[3px] h-64 bg-white/20 relative">
            <div className="slider-progress-bar w-full bg-white absolute top-0 left-0 h-0" />
          </div>
        </div>
      </nav>
    </section>
  );
}

function scrollToSection(ref: string) {
  const element = document.getElementById(ref);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
