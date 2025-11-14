'use client';

import { useEffect, useRef } from 'react';

export function useAutoScrollToCenter<T extends HTMLElement = HTMLElement>(options?: { block?: 'start' | 'center' | 'end' }) {
  const ref = useRef<T>(null);
  const hasScrolledRef = useRef(false);
  const block = options?.block || 'center';

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When the top of the section enters the viewport
          if (entry.isIntersecting && entry.boundingClientRect.top < window.innerHeight && !hasScrolledRef.current) {
            hasScrolledRef.current = true;

            // Smooth scroll to the specified position
            setTimeout(() => {
              if (block === 'start') {
                // Scroll to top with header offset
                const headerHeight = 88; // Header height in pixels
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerHeight;

                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              } else {
                element.scrollIntoView({
                  behavior: 'smooth',
                  block: block,
                });
              }
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
  }, [block]);

  return ref;
}
