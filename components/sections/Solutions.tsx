'use client';

import { useEffect, useRef, useState } from 'react';
import { useAutoScrollToCenter } from '@/hooks/useAutoScrollToCenter';

function AnimatedSolution({
  children,
  delay = 0,
  direction = 'left',
  className = ''
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: 'left' | 'right';
  className?: string;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const translateStart = direction === 'left' ? '-translate-x-32' : 'translate-x-32';

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${className} ${
        isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${translateStart}`
      }`}
    >
      {children}
    </div>
  );
}

export default function Solutions() {
  const sectionRef = useAutoScrollToCenter();

  const solutions = [
    "K-12 SCHOOLS",
    "HIGHER ED",
    "CORPORATE TRAINING",
    "TUTORING CENTERS",
    "ONLINE COURSES",
    "BOOT CAMPS",
  ];

  const marginClasses = ["", "ml-12", "-ml-8", "ml-10", "-ml-4", "ml-6"];

  return (
    <section ref={sectionRef} className="bg-black text-white px-[3.3vw] py-24 overflow-hidden" id="solutions">
      <div className="text-base font-normal tracking-[0.2em] mb-16 uppercase">
        SOLUTIONS
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-[1700px] mx-auto">
        {solutions.map((solution, index) => (
          <AnimatedSolution
            key={index}
            delay={index * 80}
            direction={index % 2 === 0 ? 'left' : 'right'}
            className={`text-[5.5rem] font-normal tracking-tighter leading-tight ${marginClasses[index]}`}
          >
            {solution}
          </AnimatedSolution>
        ))}
      </div>
    </section>
  );
}
