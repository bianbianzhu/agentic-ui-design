'use client';

import { useAutoScrollToCenter } from '@/hooks/useAutoScrollToCenter';

export default function FeaturedVideo() {
  const sectionRef = useAutoScrollToCenter<HTMLDivElement>({ block: 'start' });

  return (
    <div ref={sectionRef} className="px-[3.3vw] h-[calc(100vh-88px)]">
      <div className="relative w-full h-full rounded-lg overflow-hidden">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/NMmk6jk7pko?autoplay=1&mute=1&rel=0&loop=1&playlist=NMmk6jk7pko"
          title="LangChain: Engineer reliable agents"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
