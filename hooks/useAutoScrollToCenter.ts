'use client';

import { useEffect, useRef } from 'react';

export function useAutoScrollToCenter() {
  const ref = useRef<HTMLElement>(null);
  const hasScrolledRef = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When the top of the section enters the viewport
          if (entry.isIntersecting && entry.boundingClientRect.top < window.innerHeight && !hasScrolledRef.current) {
            hasScrolledRef.current = true;

            // Smooth scroll to center the section
            setTimeout(() => {
              element.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
              });
            }, 100);

            // Reset after animation completes
            setTimeout(() => {
              hasScrolledRef.current = false;
            }, 1500);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-10% 0px -10% 0px',
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return ref;
}
