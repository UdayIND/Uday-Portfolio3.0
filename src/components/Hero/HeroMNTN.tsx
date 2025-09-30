"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { MENULINKS } from "@/constants";

gsap.registerPlugin(ScrollTrigger);

export default function HeroMNTN() {
  const skyRef = useRef<HTMLDivElement>(null);
  const mountainsRef = useRef<HTMLDivElement>(null);
  const manRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect for sky
      gsap.to(skyRef.current, {
        y: () => window.innerHeight * 0.5,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Parallax effect for mountains
      gsap.to(mountainsRef.current, {
        y: () => window.innerHeight * 0.3,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Parallax effect for man
      gsap.to(manRef.current, {
        y: () => window.innerHeight * 0.15,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Fade out content
      gsap.to(contentRef.current, {
        opacity: 0,
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "50% top",
          scrub: true,
        },
      });

      // Fade in animation for content
      gsap.from([".hero-subtitle", ".hero-title", ".hero-action"], {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.5,
      });
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
      className="hero-section relative h-screen w-full overflow-hidden"
      id={MENULINKS[0].ref}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b1d26]/60 to-[#0b1d26] z-10 pointer-events-none" />

      {/* Parallax image layers */}
      <div className="absolute inset-0 w-full h-full">
        {/* Sky layer */}
        <div
          ref={skyRef}
          className="absolute inset-0 w-full h-full -translate-y-1/2"
        >
          <Image
            src="/mntn/sky.png"
            alt="Sky"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Mountains layer */}
        <div
          ref={mountainsRef}
          className="absolute inset-0 w-full h-full z-[2]"
          style={{ marginTop: "-70%" }}
        >
          <Image
            src="/mntn/mountains.png"
            alt="Mountains"
            fill
            className="object-cover"
          />
        </div>

        {/* Man standing layer */}
        <div
          ref={manRef}
          className="absolute bottom-0 left-0 right-0 z-[4] h-[330px]"
          style={{ marginTop: "-50%" }}
        >
          <Image
            src="/mntn/man-standing.png"
            alt="Person"
            fill
            className="object-cover object-bottom"
          />
        </div>
      </div>

      {/* Hero content */}
      <div
        ref={contentRef}
        className="relative z-20 h-full flex items-center justify-center"
      >
        <div className="container max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <h5 className="hero-subtitle text-[#FBD784] text-xs md:text-sm font-bold uppercase tracking-[6px] mb-8 flex items-center gap-8">
              <span className="w-10 h-[2px] bg-[#FBD784]" />
              Welcome to my portfolio
            </h5>

            <h1 className="hero-title font-serif text-4xl md:text-6xl lg:text-7xl font-medium text-white mb-8 leading-tight">
              <span className="block">Hi, I'm Uday Shankar</span>
              <span className="block">Frontend Developer</span>
            </h1>

            <button
              onClick={handleScrollDown}
              className="hero-action text-white text-lg font-bold flex items-center gap-6 hover:gap-8 transition-all duration-300"
            >
              Scroll down
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
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-[550px] z-[5] bg-gradient-to-t from-[#0b1d26] via-[#0b1d26] to-transparent pointer-events-none" />
    </section>
  );
}

