"use client";

import { MENULINKS, PROJECTS } from "@/constants";
import WorkCard from "./WorkCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function WorksSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered animation for content sections
      const contentRows = document.querySelectorAll(".content-row");
      
      contentRows.forEach((row) => {
        const image = row.querySelector(".content-image img");
        const counter = row.querySelector(".counter");
        const subtitle = row.querySelector(".content-subtitle");
        const title = row.querySelectorAll(".content-title span");
        const description = row.querySelector(".content-copy");
        const action = row.querySelector(".content-action");

        gsap
          .timeline({
            scrollTrigger: {
              trigger: row,
              start: "center-=100 center",
              end: "center top",
              scrub: 0.2,
              pin: row,
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[1].ref}
      className="relative py-0 content-section"
    >
      {/* Content sections similar to MNTN */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-32 mb-32">
        {/* Section 1 */}
        <div className="content-row grid grid-cols-1 md:grid-cols-2 gap-16 items-center min-h-screen">
          <div className="content-image">
            <Image
              src="/mntn/step-1.png"
              alt="Get Started"
              width={566}
              height={720}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="content-content space-y-6">
            <h5 className="content-subtitle text-[#FBD784] text-sm font-bold uppercase tracking-[6px] flex items-center gap-8 relative">
              <span className="counter text-[140px] font-bold text-white/10 absolute left-0 top-1/2 -translate-y-1/2 leading-none">
                01
              </span>
              <span className="w-12 h-[2px] bg-[#FBD784]" />
              <span className="relative z-10">My Works</span>
            </h5>
            <h2 className="content-title text-4xl md:text-5xl font-serif text-white font-medium">
              <span className="block mb-2">Featured Projects</span>
              <span className="block">& Portfolio</span>
            </h2>
            <p className="content-copy text-lg text-gray-300 leading-relaxed">
              Explore my collection of projects ranging from web applications to
              design systems. Each project showcases my skills in frontend
              development, UI/UX design, and modern web technologies.
            </p>
            <button className="content-action text-[#FBD784] font-bold flex items-center gap-4 hover:gap-6 transition-all">
              View All Projects
              <svg
                width="24"
                height="16"
                viewBox="0 0 24 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 0L14.59 1.41L20.17 7H0V9H20.17L14.58 14.58L16 16L24 8L16 0Z"
                  fill="#FBD784"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Section 2 */}
        <div className="content-row grid grid-cols-1 md:grid-cols-2 gap-16 items-center min-h-screen">
          <div className="content-image md:order-2">
            <Image
              src="/mntn/step-2.png"
              alt="Skills"
              width={566}
              height={720}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="content-content space-y-6 md:order-1">
            <h5 className="content-subtitle text-[#FBD784] text-sm font-bold uppercase tracking-[6px] flex items-center gap-8 relative">
              <span className="counter text-[140px] font-bold text-white/10 absolute left-0 top-1/2 -translate-y-1/2 leading-none">
                02
              </span>
              <span className="w-12 h-[2px] bg-[#FBD784]" />
              <span className="relative z-10">Technical Skills</span>
            </h5>
            <h2 className="content-title text-4xl md:text-5xl font-serif text-white font-medium">
              <span className="block mb-2">Modern Stack</span>
              <span className="block">& Technologies</span>
            </h2>
            <p className="content-copy text-lg text-gray-300 leading-relaxed">
              Proficient in cutting-edge web technologies including React,
              Next.js, TypeScript, and modern CSS frameworks. I focus on
              building performant, accessible, and beautiful web experiences.
            </p>
            <button className="content-action text-[#FBD784] font-bold flex items-center gap-4 hover:gap-6 transition-all">
              View My Skills
              <svg
                width="24"
                height="16"
                viewBox="0 0 24 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 0L14.59 1.41L20.17 7H0V9H20.17L14.58 14.58L16 16L24 8L16 0Z"
                  fill="#FBD784"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Section 3 */}
        <div className="content-row grid grid-cols-1 md:grid-cols-2 gap-16 items-center min-h-screen">
          <div className="content-image">
            <Image
              src="/mntn/step-3.png"
              alt="Experience"
              width={566}
              height={720}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="content-content space-y-6">
            <h5 className="content-subtitle text-[#FBD784] text-sm font-bold uppercase tracking-[6px] flex items-center gap-8 relative">
              <span className="counter text-[140px] font-bold text-white/10 absolute left-0 top-1/2 -translate-y-1/2 leading-none">
                03
              </span>
              <span className="w-12 h-[2px] bg-[#FBD784]" />
              <span className="relative z-10">Experience</span>
            </h5>
            <h2 className="content-title text-4xl md:text-5xl font-serif text-white font-medium">
              <span className="block mb-2">Professional Journey</span>
              <span className="block">& Growth</span>
            </h2>
            <p className="content-copy text-lg text-gray-300 leading-relaxed">
              Track my professional growth through various roles and projects.
              From junior developer to building complex web applications, see
              how I've evolved and the milestones I've achieved.
            </p>
            <button className="content-action text-[#FBD784] font-bold flex items-center gap-4 hover:gap-6 transition-all">
              View Timeline
              <svg
                width="24"
                height="16"
                viewBox="0 0 24 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 0L14.59 1.41L20.17 7H0V9H20.17L14.58 14.58L16 16L24 8L16 0Z"
                  fill="#FBD784"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
