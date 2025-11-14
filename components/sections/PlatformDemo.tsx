"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function PlatformDemo() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);
  const [slideOffset, setSlideOffset] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1600",
      title: "Student Dashboard Interface",
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600",
      title: "Analytics & Progress Tracking",
    },
    {
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1600",
      title: "Collaborative Learning Spaces",
    },
  ];

  // Calculate the actual pixel offset for each slide
  useEffect(() => {
    const updateOffset = () => {
      if (slideRef.current) {
        const slideWidth = slideRef.current.offsetWidth;
        const gap = 44.8; // reduced by 30% from 64px
        setSlideOffset(slideWidth + gap);
      }
    };

    updateOffset();
    window.addEventListener("resize", updateOffset);
    return () => window.removeEventListener("resize", updateOffset);
  }, []);

  const scrollDemo = (direction: number) => {
    const newIndex = currentIndex + direction;

    // Loop around
    if (newIndex < 0) {
      setCurrentIndex(slides.length - 1);
    } else if (newIndex >= slides.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(newIndex);
    }
  };

  return (
    <section className="bg-black text-white px-[2.31vw] py-[5.6rem]" id="demo">
      <div className="max-w-full mx-auto grid grid-cols-1 lg:grid-cols-[500px_1fr] gap-0 border-t border-b border-white/20 mt-[5.6rem] mb-[3.5rem]">
        <div className="border-r border-white/20 p-[1.4rem] flex flex-col justify-between">
          <div className="text-[3.5rem] font-normal tracking-wide leading-tight">
            PLATFORM DEMO
          </div>
          <div className="flex items-center gap-[0.7rem] mt-[2.1rem] text-xl font-light">
            <span
              className="cursor-pointer hover:scale-125 transition-transform"
              onClick={() => scrollDemo(-1)}
            >
              ←
            </span>
            <span>
              {String(currentIndex + 1).padStart(2, "0")}/
              {String(slides.length).padStart(2, "0")}
            </span>
            <span
              className="cursor-pointer hover:scale-125 transition-transform"
              onClick={() => scrollDemo(1)}
            >
              →
            </span>
          </div>
        </div>

        <div className="p-[2.31vw] overflow-hidden">
          <motion.div
            ref={sliderRef}
            className="flex gap-[2.8rem]"
            animate={{
              x: slideOffset > 0 ? -currentIndex * slideOffset : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                ref={index === 0 ? slideRef : null}
                className="min-w-[77%] shrink-0"
              >
                <div className="w-full h-[691px] rounded mb-[0.7rem] overflow-hidden relative">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-light mt-[0.7rem] px-[0.35rem]">{slide.title}</h3>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
