"use client";

import { useEffect, useState } from "react";

export default function FloatingContact() {
  const [isLightTheme, setIsLightTheme] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const stickyContact = document.getElementById("stickyContact");
      if (!stickyContact) return;

      const darkSections = document.querySelectorAll(
        "section.bg-black, footer.bg-black"
      );
      const buttonRect = stickyContact.getBoundingClientRect();
      const buttonCenter = buttonRect.top + buttonRect.height / 2;

      let isOnDarkSection = false;
      darkSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (buttonCenter >= rect.top && buttonCenter <= rect.bottom) {
          isOnDarkSection = true;
        }
      });

      setIsLightTheme(isOnDarkSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="stickyContact"
      className={`fixed bottom-8 right-8 z-40 px-6 py-3 rounded-full overflow-hidden w-80 cursor-pointer hover:scale-105 transition-all duration-300 shadow-lg ${
        isLightTheme ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <div className="flex items-center gap-4 animate-scroll whitespace-nowrap">
        <span className="text-lg font-light">Book a Demo.</span>
        <span className="text-lg font-light">Book a Demo.</span>
        <span className="text-lg font-light">Book a Demo.</span>
        <span className="text-lg font-light">Book a Demo.</span>
      </div>
    </div>
  );
}
