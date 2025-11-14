"use client";

import { useEffect, useState } from "react";

export default function EntryAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  const [animationState, setAnimationState] = useState<
    "logo" | "fade" | "split" | "complete"
  >("logo");

  useEffect(() => {
    // Show logo for 0.8 second
    const logoTimer = setTimeout(() => {
      setAnimationState("fade");
    }, 800);

    // Start split after fade (0.8s logo + 0.2s fade)
    const splitTimer = setTimeout(() => {
      setAnimationState("split");
    }, 1000);

    // Complete animation after split (1s + 0.8s split)
    const completeTimer = setTimeout(() => {
      setAnimationState("complete");
    }, 1800);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(splitTimer);
      clearTimeout(completeTimer);
    };
  }, []);

  const isComplete = animationState === "complete";

  return (
    <div className="overflow-hidden">
      {/* Centered logo before split */}
      {!isComplete && (
        <div
          className={`fixed inset-0 z-99 flex items-center justify-center bg-black transition-opacity duration-200 ${
            animationState === "logo"
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="text-white text-[6rem] font-bold tracking-tight italic">
            EduFlow®
          </div>
        </div>
      )}

      {/* Split screen animation */}
      {!isComplete && (
        <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
          {/* Left half */}
          <div
            className={`absolute top-0 left-0 bottom-0 w-1/2 bg-black transition-transform duration-700 ease-in-out ${
              animationState === "split" ? "-translate-x-full" : "translate-x-0"
            }`}
          />
          {/* Right half */}
          <div
            className={`absolute top-0 right-0 bottom-0 w-1/2 bg-black transition-transform duration-700 ease-in-out ${
              animationState === "split" ? "translate-x-full" : "translate-x-0"
            }`}
          />
        </div>
      )}

      {/* Content */}
      <div className={isComplete ? "" : "invisible"}>
        {children}
      </div>
    </div>
  );
}
