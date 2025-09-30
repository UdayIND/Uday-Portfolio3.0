"use client";

import { MENULINKS, PROJECTS } from "@/constants";
import WorkCard from "./WorkCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function WorksSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in animation for section title
      gsap.from(".works-title", {
        opacity: 0,
        y: 30,
        duration: 1,
        scrollTrigger: {
          trigger: ".works-title",
          start: "top 80%",
        },
      });

      // Staggered animation for project cards
      gsap.from(".work-card", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".works-grid",
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[1].ref}
      className="relative py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <div className="works-title mb-16">
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">
          PROJECTS
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          My Works
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-300 max-w-3xl">
          A collection of projects I've worked on, showcasing my skills in
          frontend development and design
        </h2>
      </div>

      <div className="works-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <div key={project.name} className="work-card">
            <WorkCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}

