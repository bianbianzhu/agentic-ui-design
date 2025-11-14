"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-300 border-b ${
        isScrolled ? "border-gray-100 shadow-sm" : "border-transparent"
      }`}
    >
      <div className="max-w-[1700px] mx-auto px-6 lg:px-12 py-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-normal tracking-tight">
          EduFlow®
        </a>

        <div className="hidden lg:block text-sm font-light tracking-wider text-gray-600">
          EDUCATION TECHNOLOGY © 2025
        </div>

        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-8 text-sm font-light">
            <button
              onClick={() => scrollToSection("features")}
              className="hover:text-gray-600 transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("solutions")}
              className="hover:text-gray-600 transition-colors"
            >
              Solutions
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="hover:text-gray-600 transition-colors"
            >
              Pricing
            </button>
          </nav>
          <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-light hover:scale-105 transition-transform duration-200">
            Get Started
          </button>
          <button className="flex flex-col gap-1 w-6 md:hidden">
            <span className="w-full h-0.5 bg-black transition-all"></span>
            <span className="w-full h-0.5 bg-black transition-all"></span>
            <span className="w-full h-0.5 bg-black transition-all"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
