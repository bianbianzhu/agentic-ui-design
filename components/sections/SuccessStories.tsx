"use client";

import { useRef } from "react";

export default function SuccessStories() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollStories = (direction: number) => {
    if (sliderRef.current) {
      const scrollAmount = 500;
      sliderRef.current.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const stories = [
    {
      type: "gradient",
      gradient: "from-blue-600 to-blue-400",
      category: "CASE STUDY",
      title: "Madison High School increases graduation rates by 28%",
    },
    {
      type: "text",
      category: "TESTIMONIAL",
      title: "EduFlow transformed how we teach and how students learn.",
    },
    {
      type: "gradient",
      gradient: "from-purple-600 to-pink-500",
      category: "IMPACT",
      title: "Corporate training completion rates up 45% with adaptive learning",
    },
    {
      type: "gradient",
      gradient: "from-cyan-500 to-blue-600",
      category: "RESEARCH",
      title: "The Science Behind Personalized Learning Outcomes",
    },
    {
      type: "text",
      category: "SUCCESS STORY",
      title: "Student engagement improved 60% in first semester",
      author: "— Prof. Sarah Chen, MIT",
    },
    {
      type: "gradient",
      gradient: "from-orange-500 to-red-500",
      category: "CASE STUDY",
      title: "Online learning platform reaches 100,000 students in 12 months",
    },
    {
      type: "gradient",
      gradient: "from-green-500 to-teal-500",
      category: "IMPACT",
      title:
        "Special education students show 35% improvement in standardized tests",
    },
    {
      type: "gradient",
      gradient: "from-indigo-600 to-purple-700",
      category: "TESTIMONIAL",
      title: "The AI-driven insights helped us identify struggling students early",
    },
    {
      type: "text",
      category: "CUSTOMER STORY",
      title: "From 200 to 10,000 learners in 18 months",
      author: "— TechAcademy Global",
    },
  ];

  return (
    <section className="bg-black text-white px-[3.3vw] py-24" id="stories">
      <div className="max-w-[1700px] mx-auto">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-5xl font-light tracking-tight">
            SUCCESS STORIES.
          </h2>
          <div className="flex gap-8">
            <span
              className="text-3xl cursor-pointer hover:scale-125 transition-transform"
              onClick={() => scrollStories(-1)}
            >
              ←
            </span>
            <span
              className="text-3xl cursor-pointer hover:scale-125 transition-transform"
              onClick={() => scrollStories(1)}
            >
              →
            </span>
          </div>
        </div>

        <div
          ref={sliderRef}
          className="overflow-x-auto scrollbar-hide mb-32"
        >
          <div className="flex gap-8 pb-8">
            {stories.map((story, index) => (
              <div
                key={index}
                className={`w-[45%] min-w-[420px] max-w-[600px] aspect-[1/0.7] rounded-lg overflow-hidden relative cursor-pointer hover:-translate-y-3 transition-transform duration-300 ${
                  story.type === "gradient"
                    ? `bg-gradient-to-br ${story.gradient}`
                    : "bg-white text-black p-12 flex flex-col justify-center"
                }`}
              >
                {story.type === "gradient" ? (
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="text-sm font-normal tracking-widest uppercase mb-4 opacity-80">
                      {story.category}
                    </div>
                    <h3 className="text-2xl font-normal leading-tight">
                      {story.title}
                    </h3>
                  </div>
                ) : (
                  <>
                    <div className="text-sm font-normal tracking-widest uppercase mb-4 opacity-80">
                      {story.category}
                    </div>
                    <h3 className="text-4xl font-normal leading-tight">
                      {story.title}
                    </h3>
                    {story.author && (
                      <p className="text-lg font-light mt-4 opacity-70">
                        {story.author}
                      </p>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
