"use client";

import React, { useEffect, useRef, useState } from "react";

export default function VideoSection() {
  const [scrollY, setScrollY] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionTop = rect.top;
        const windowHeight = window.innerHeight;

        // Scroll progress relative to this section
        const progress = Math.max(
          0,
          Math.min(1, (windowHeight - sectionTop) / windowHeight)
        );
        setScrollY(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Easing function
  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
  const easedProgress = easeOutCubic(scrollY);

  // Video animations
  const videoScale = 0.35 + easedProgress * 0.65; // 35% → 100%
  const videoOpacity = Math.min(scrollY * 1.5, 1);
  const videoBorderRadius = (1 - easedProgress) * 12;
  const videoBlur = (1 - scrollY) * 15;

  return (
    <>
      {/* HERO VIDEO SECTION */}
      <section
        ref={sectionRef}
        className="relative h-screen bg-[#FBFBFB] overflow-hidden"
      >
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          <div
            className="relative w-full h-full overflow-hidden"
            style={{
              opacity: videoOpacity,
              transform: `scale(${videoScale})`,
              borderRadius: `${videoBorderRadius}px`,
              boxShadow: `0 ${(1 - easedProgress) * 50}px ${(1 - easedProgress) * 100}px rgba(0,0,0,0.3)`,
              filter: `blur(${videoBlur}px)`,
              transition: "filter 0.3s ease-out",
            }}
          >
            <video
              ref={videoRef}
              src="/images/home-vedio.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* NEXT SECTION */}
      <section className="relative py-16 bg-gray-100 flex items-center justify-center overflow-hidden">
        <div className="text-center px-4">
          <p className="max-w-xl mx-auto text-lg text-gray-700">
            Explore the essence of Maharashtra through its rich traditions, diverse cuisine, vibrant arts, and storied heritage. Discover its landscapes, festivals, and innovations, all brought together to celebrate the spirit of this remarkable state in one engaging destination.
          </p>
        </div>
      </section>
    </>
  );
}