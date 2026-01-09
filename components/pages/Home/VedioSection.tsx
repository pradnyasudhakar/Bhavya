"use client";

import React, { useEffect, useRef, useState } from 'react';

export default function VideoSection() {
  const [scrollY, setScrollY] = useState(0);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionTop = rect.top;
        const windowHeight = window.innerHeight;
        
        // Calculate scroll progress relative to this section
        const progress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / windowHeight));
        setScrollY(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Easing function
  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
  const easedProgress = easeOutCubic(scrollY);
  
  // Video animations - zoom from small to full screen
  const videoScale = 0.35 + easedProgress * 0.65; // 35% to 100%
  const videoOpacity = Math.min(scrollY * 1.5, 1);
  const videoBorderRadius = (1 - easedProgress) * 12;
  const videoBlur = (1 - scrollY) * 15;

  return (
    <>
    <section ref={sectionRef} className="relative h-[150vh] bg-[#FBFBFB] overflow-hidden ">
      <div className="sticky top-0  max-w-[1600px] min-h-[calc(100vh-86px)] flex items-center overflow-hidden justify-center">
        <div
          className="relative w-full h-[100vh] overflow-hidden"
          style={{
            opacity: videoOpacity,
            transform: `scale(${videoScale})`,
            borderRadius: `${videoBorderRadius}px`,
            boxShadow: `0 ${(1 - easedProgress) * 50}px ${(1 - easedProgress) * 100}px rgba(0,0,0,0.3)`,
            filter: `blur(${videoBlur}px)`,
            transition: 'filter 0.3s ease-out',
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
          
          {/* Vignette overlay */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle, transparent 50%, rgba(0,0,0,0.5) 100%)',
              opacity: Math.max(0, 1 - easedProgress)
            }}
          />
        </div>
      </div>
    </section>
    {/* NEXT SECTION */}
      <section className="relative w-full min-h-screen bg-gray-100 flex items-center overflow-hidden justify-center">
        <div className="text-center px-4">
          <h2 className="text-4xl font-bold mb-4">Next Section</h2>
          <p className="max-w-xl text-lg">
            Scrolled from hero video smoothly with parallax effect.
          </p>
        </div>
      </section>
      </>
  );
}