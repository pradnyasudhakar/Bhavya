"use client";

import { useRouter } from "next/navigation";
import { ArrowDown } from "lucide-react";
import { H1 } from "@/components/ui/Heading";
import Image from "next/image";
import { motion, useScroll, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Paragraph from "@/components/ui/Paragraph";

export default function HomePage() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Video zoom animation
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const videoY = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const videoBorderRadius = useTransform(scrollYProgress, [0, 0.5], [12, 0]);

  // Images slide out animations
  const topImageY = useTransform(scrollYProgress, [0, 0.6], [0, -300]);
  const leftImageX = useTransform(scrollYProgress, [0, 0.6], [0, -300]);
  const rightImageX = useTransform(scrollYProgress, [0, 0.6], [0, 300]);
  const bottomLeftImageY = useTransform(scrollYProgress, [0, 0.6], [0, 300]);
  const bottomLeftImageX = useTransform(scrollYProgress, [0, 0.6], [0, -200]);
  const bottomRightImageY = useTransform(scrollYProgress, [0, 0.6], [0, 300]);
  const bottomRightImageX = useTransform(scrollYProgress, [0, 0.6], [0, 200]);

  // Images opacity
  const imagesOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // Center content animation
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.4], [0, -300]);

  // Smooth auto-scroll function with slower speed
  const handleAutoScroll = () => {
    if (isScrolling) return;
    
    setIsScrolling(true);
    const container = containerRef.current;
    if (!container) return;

    const containerTop = container.getBoundingClientRect().top + window.scrollY;
    const containerHeight = container.offsetHeight;
    const currentScroll = window.scrollY;
    const targetScroll = containerTop + containerHeight;

    // Custom smooth scroll animation with slower duration
    animate(currentScroll, targetScroll, {
      duration: 2.5, // 2.5 seconds for slow smooth scroll
      ease: [0.25, 0.1, 0.25, 1], // Custom easing for smoothness
      onUpdate: (latest) => {
        window.scrollTo(0, latest);
      },
      onComplete: () => {
        setTimeout(() => {
          setIsScrolling(false);
        }, 300);
      },
    });
  };

  // Handle wheel event for single scroll trigger
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    let lastScrollTime = 0;
    
    const handleWheel = (e: WheelEvent) => {
      const currentTime = Date.now();
      const currentScroll = window.scrollY;
      const container = containerRef.current;
      
      if (!container) return;
      
      const containerTop = container.getBoundingClientRect().top + window.scrollY;
      const containerHeight = container.offsetHeight;
      
      // Check if we're in the hero section
      if (currentScroll >= containerTop && currentScroll < containerTop + containerHeight - window.innerHeight) {
        // Throttle scroll events (minimum 800ms between triggers)
        if (currentTime - lastScrollTime < 800) return;
        
        if (e.deltaY > 0 && !isScrolling) {
          e.preventDefault();
          lastScrollTime = currentTime;
          clearTimeout(scrollTimeout);
          scrollTimeout = setTimeout(() => {
            handleAutoScroll();
          }, 100);
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    
    return () => {
      window.removeEventListener("wheel", handleWheel);
      clearTimeout(scrollTimeout);
    };
  }, [isScrolling]);

  return (
    <>
      {/* SCROLL CONTAINER */}
      <div
        ref={containerRef}
        className="relative h-[400vh]"
      >
        {/* FIRST SCREEN */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <section className="relative bg-[#FBFBFB] w-full h-full">
            <div className="relative z-10 mx-auto h-full pt-12 flex items-center justify-center overflow-hidden">

              {/* LEFT IMAGE */}
              <motion.div
                style={{ x: leftImageX, opacity: imagesOpacity }}
                className="absolute left-0 -translate-y-1/2 hidden lg:block"
              >
                <Image
                  src="/images/left-img.png"
                  alt="Left img"
                  width={230}
                  height={350}
                  className="2xl:w-62.5 w-[clamp(150px,60vw,200px)] rounded-xl shadow-lg"
                />
              </motion.div>

              {/* RIGHT IMAGE */}
              <motion.div
                style={{ x: rightImageX, opacity: imagesOpacity }}
                className="absolute right-0 -translate-y-1/2 hidden lg:block"
              >
                <Image
                  src="/images/right-img.png"
                  alt="Right img"
                  width={230}
                  height={350}
                  className="2xl:w-62.5 w-[clamp(150px,60vw,200px)] rounded-xl shadow-lg"
                />
              </motion.div>

              {/* TOP IMAGE */}
              <motion.div
                style={{ y: topImageY, opacity: imagesOpacity }}
                className="absolute top-0 left-1/2 -translate-x-1/2 hidden xl:block"
              >
                <Image
                  src="/images/top-img.png"
                  alt="Top img"
                  width={800}
                  height={130}
                  className="w-[clamp(320px,45vw,800px)] rounded-xl shadow-lg"
                />
              </motion.div>

              {/* BOTTOM LEFT IMAGE */}
              <motion.div
                style={{
                  y: bottomLeftImageY,
                  x: bottomLeftImageX,
                  opacity: imagesOpacity,
                }}
                className="absolute bottom-0 left-0 hidden xl:block"
              >
                <Image
                  src="/images/bottom-left.png"
                  alt="Bottom Left img"
                  width={230}
                  height={250}
                  className="2xl:w-62.5 w-[clamp(150px,60vw,200px)] rounded-xl shadow-lg"
                />
              </motion.div>

              {/* VIDEO */}
              <motion.div
                style={{
                  scale: videoScale,
                  y: videoY,
                  borderRadius: videoBorderRadius,
                }}
                className="
                  absolute -bottom-2.5 left-1/2 -translate-x-1/2
                  w-[clamp(320px,45vw,800px)]
                  max-w-200
                  h-[clamp(180px,25vh,450px)]
                  overflow-hidden shadow-xl origin-center z-20
                "
              >
                <video
                  src="/images/home-vedio.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* BOTTOM RIGHT IMAGE */}
              <motion.div
                style={{
                  y: bottomRightImageY,
                  x: bottomRightImageX,
                  opacity: imagesOpacity,
                }}
                className="absolute bottom-0 right-0 hidden xl:block"
              >
                <Image
                  src="/images/bottom-right.png"
                  alt="Bottom Right img"
                  width={230}
                  height={250}
                  className="2xl:w-62.5 w-[clamp(150px,60vw,200px)] rounded-xl shadow-lg"
                />
              </motion.div>

              {/* CENTER CONTENT */}
              <motion.div
                style={{
                  opacity: contentOpacity,
                  y: contentY,
                }}
                className="relative flex flex-col text-center z-10 max-w-200 2xl:max-w-250 px-4"
              >
                <H1>
                  Experience the charm of{" "}
                  <span className="text-[#FF7722]">Maharashtras</span> finest
                  offerings.
                </H1>

                {/* SCROLL BUTTON */}
                <button
                  onClick={handleAutoScroll}
                  className="mt-2 2xl:mt-4 mx-auto font-medium font-Manrope flex uppercase items-center gap-0 text-xs lg:text-[14px] tracking-[0.35em] text-[#454545] hover:text-black transition"
                >
                  <span>SCROLL</span>
                  <ArrowDown
                    size={18}
                    strokeWidth={1.5}
                    className="animate-bounce"
                  />
                </button>
              </motion.div>
            </div>
          </section>
        </div>
      </div>

      {/* NEXT SECTION */}
      <section
        id="next-section"
        className="relative h-[400] py-16 bg-[#FAFAFA] flex items-center justify-center overflow-hidden"
      >
        <div className="text-center px-4">
          <Paragraph className="max-w-250 2xl:max-w-300 font-medium mx-auto text-[30px] text-[#1D1D1D]">
            Explore the essence of{" "}
            <span className="text-[#FF7722]">Maharashtra</span> through its rich
            traditions, diverse cuisine, vibrant arts, and storied heritage.
            Discover its landscapes, festivals, and innovations, all brought
            together to celebrate the spirit of this remarkable state in one
            engaging destination.
          </Paragraph>
        </div>
      </section>
    </>
  );
}