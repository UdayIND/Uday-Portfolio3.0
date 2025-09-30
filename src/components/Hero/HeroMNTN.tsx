"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroMNTN() {
  useEffect(() => {
    // Initial fade-in animations
    gsap.fromTo(
      [".hero-subtitle", ".hero-title", ".hero-action", ".slider-list-item"],
      { autoAlpha: 0, y: 100, stagger: 0.2 },
      { autoAlpha: 1, y: 0, stagger: 0.2, duration: 1 }
    );

    gsap.fromTo(
      ".slider-progress",
      { autoAlpha: 0, y: 100 },
      { autoAlpha: 1, y: 0, delay: 1 }
    );

    // Parallax scrolling animation - exact MNTN values
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
    <section className="hero-section section" id="section-00">
      {/* Hero image wrapper - exact MNTN structure */}
      <div className="hero-image-wrapper">
        <img src="/mntn/sky.png" className="sky" alt="Sky" />
        <img src="/mntn/mountains.png" className="mountains" alt="Mountains" />
        <img src="/mntn/man-standing.png" className="man-standing" alt="Hiker" />
      </div>

      {/* Hero content */}
      <div className="hero-content">
        <h5 className="hero-subtitle">A Hiking guide</h5>
        <h1 className="hero-title">
          <span>Be prepared for the</span> <br />
          <span>Mountains and beyond!</span>
        </h1>
        <a href="#section-01" className="hero-action">
          scroll down
          <svg
            width="16"
            height="24"
            viewBox="0 0 16 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 16L14.59 14.59L9 20.17V0H7V20.17L1.42 14.58L0 16L8 24L16 16Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>

      {/* Section stepper */}
      <nav className="slider">
        <div className="container">
          <ul className="slider-list">
            <li className="slider-list-item">
              <a href="#section-00">Start</a>
            </li>
            <li className="slider-list-item">
              <a href="#section-01">01</a>
            </li>
            <li className="slider-list-item">
              <a href="#section-02">02</a>
            </li>
            <li className="slider-list-item">
              <a href="#section-03">03</a>
            </li>
          </ul>
          <div className="slider-progress">
            <div className="slider-progress-bar"></div>
          </div>
        </div>
      </nav>
    </section>
  );
}
