"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MENULINKS } from "@/constants";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (ref: string) => {
    const element = document.getElementById(ref);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0b1d26]/90 backdrop-blur-lg" : ""
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-white text-2xl font-bold">
            <svg
              width="108"
              height="24"
              viewBox="0 0 108 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-auto"
            >
              <path
                d="M0.96 23H9.856V22.552C6.656 22.136 5.696 20.792 5.696 17.56V2.872H5.888L14.208 23.032H15.36L22.816 2.872H22.976V20.728C22.976 22.008 22.176 22.456 19.904 22.552V23H30.944V22.552C28.256 22.456 27.616 21.944 27.616 20.728V2.968C27.616 1.752 28.256 1.208 30.944 1.112V0.695999H22.784L16.736 17.144H16.576L9.984 0.695999H0.96V1.112C3.712 1.176 4.896 2.648 4.896 4.568V17.56C4.896 20.792 3.968 22.168 0.96 22.552V23Z"
                fill="white"
              />
              <path
                d="M52.128 23.352H53.664V6.104C53.664 2.936 54.528 1.56 57.536 1.112V0.695999H48.448V1.112C51.68 1.496 52.864 2.936 52.864 6.104V16.728H52.832L40.512 0.695999H32.96V1.112C35.712 1.24 36.896 2.872 36.896 4.824V17.56C36.896 20.792 35.968 22.168 32.96 22.552V23H41.984V22.552C38.72 22.2 37.696 20.792 37.696 17.56V4.728H37.728L52.128 23.352Z"
                fill="white"
              />
              <path
                d="M63.6 23H75.696V22.552C72.848 22.488 71.984 21.944 71.984 20.728V1.272H72.752C75.216 1.272 77.136 3.736 79.376 8.088L79.856 8.024L79.696 0.695999H59.568L59.376 8.024L59.856 8.088C62.128 3.64 64.08 1.272 66.512 1.272H67.312V20.728C67.312 21.944 66.416 22.488 63.6 22.552V23Z"
                fill="white"
              />
              <path
                d="M102.128 23.352H103.664V6.104C103.664 2.936 104.528 1.56 107.536 1.112V0.695999H98.448V1.112C101.68 1.496 102.864 2.936 102.864 6.104V16.728H102.832L90.512 0.695999H82.96V1.112C85.712 1.24 86.896 2.872 86.896 4.824V17.56C86.896 20.792 85.968 22.168 82.96 22.552V23H91.984V22.552C88.72 22.2 87.696 20.792 87.696 17.56V4.728H87.728L102.128 23.352Z"
                fill="white"
              />
            </svg>
          </Link>

          {/* Navigation Links */}
          <ul className="hidden md:flex items-center gap-8">
            {MENULINKS.slice(0, -1).map((link) => (
              <li key={link.ref}>
                <button
                  onClick={() => scrollToSection(link.ref)}
                  className="text-white hover:text-[#FBD784] transition-colors text-lg font-medium"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button
            onClick={() => scrollToSection(MENULINKS[4].ref)}
            className="hidden md:flex items-center gap-2 text-white hover:text-[#FBD784] transition-colors text-lg font-medium"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
            Contact
          </button>
        </div>
      </nav>
    </header>
  );
}

