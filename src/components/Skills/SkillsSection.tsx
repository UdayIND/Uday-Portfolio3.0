"use client";

import { MENULINKS, SKILLS } from "@/constants";
import Image from "next/image";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {
  const targetSection: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const [willChange, setwillChange] = useState(false);

  const initRevealAnimation = (
    targetSection: MutableRefObject<HTMLDivElement | null>
  ): ScrollTrigger | null => {
    if (!targetSection.current) return null;

    const revealTl = gsap.timeline({ defaults: { ease: "none" } });
    revealTl.from(
      targetSection.current.querySelectorAll(".seq"),
      { opacity: 0, duration: 0.5, stagger: 0.5 },
      "<"
    );

    return ScrollTrigger.create({
      trigger: targetSection.current.querySelector(".skills-wrapper"),
      start: "100px bottom",
      end: `center center`,
      animation: revealTl,
      scrub: 0,
      onToggle: (self) => setwillChange(self.isActive),
    });
  };

  useEffect(() => {
    const revealAnimationRef = initRevealAnimation(targetSection);

    return () => {
      if (revealAnimationRef) revealAnimationRef.kill();
    };
  }, []);

  const renderSectionTitle = (): React.ReactNode => (
    <div className="flex flex-col">
      <p className="text-sm uppercase tracking-widest text-gray-400 seq">SKILLS</p>
      <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 seq">My Skills</h1>
      <h2 className="text-xl md:text-2xl md:max-w-2xl w-full text-gray-300 mt-2 seq">
        I like to take responsibility to craft aesthetic user experience using
        modern frontend architecture.
      </h2>
    </div>
  );

  const renderBackgroundPattern = (): React.ReactNode => (
    <>
      <div className="absolute right-0 -bottom-1/3 w-1/5 max-w-xs md:flex hidden justify-end opacity-10">
        <div className="w-full h-[700px] relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
        </div>
      </div>
      <div className="absolute left-0 -bottom-14 w-1/12 max-w-xs md:block hidden opacity-10">
        <div className="w-full h-[335px] relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 to-yellow-500/20 rounded-full blur-3xl" />
        </div>
      </div>
    </>
  );

  const renderSkillColumn = (
    title: string,
    skills: string[]
  ): React.ReactNode => (
    <>
      <h3 className="text-sm uppercase tracking-widest text-gray-400 mb-4 seq">{title}</h3>
      <div
        className={`flex flex-wrap gap-6 seq ${
          willChange ? "will-change-opacity" : ""
        }`}
      >
        {skills.map((skill) => (
          <div
            key={skill}
            className="skill-item group relative w-16 h-16 md:w-20 md:h-20 transition-transform duration-300 hover:scale-110"
          >
            <Image
              src={`/skills/${skill}.svg`}
              alt={skill}
              width={76}
              height={76}
              className="w-full h-full object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]"
            />
          </div>
        ))}
      </div>
    </>
  );

  return (
    <section className="relative py-20 md:py-32">
      {renderBackgroundPattern()}
      <div
        className="w-full relative select-none section-container flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto"
        id={MENULINKS[2].ref}
        ref={targetSection}
      >
        <div className="flex flex-col skills-wrapper">
          {renderSectionTitle()}
          <div className="mt-10">
            {renderSkillColumn("FRONTEND DEVELOPMENT", SKILLS.frontend)}
          </div>
          <div className="flex flex-wrap mt-10 gap-10">
            <div className="flex-1 min-w-[250px]">
              {renderSkillColumn(
                "USER INTERFACE & UX DESIGN",
                SKILLS.userInterface
              )}
            </div>
            <div className="flex-1 min-w-[250px]">
              {renderSkillColumn("OTHER SKILLS", SKILLS.other)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

