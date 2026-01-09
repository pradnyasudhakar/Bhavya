"use client";

import { useRouter } from "next/navigation";
import { ArrowDown } from "lucide-react";
import { H1 } from "@/components/ui/Heading";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HomePage() {
  const router = useRouter();
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // 🔥 smooth parallax zoom
  const scale = useTransform(scrollYProgress, [0.3, 0.8], [1, 1.35]);
  const y = useTransform(scrollYProgress, [0.3, 0.8], [0, -120]);
  const radius = useTransform(scrollYProgress, [0.3, 0.6], [12, 0]);

  return (
<section
  ref={sectionRef}
  className="relative bg-[#FBFBFB] overflow-hidden w-full"
  style={{ overflowX: "hidden" }}
>
      <div className="fixed inset-0 mx-auto max-w-[1600px] h-screen  top-16 flex items-center justify-center overflow-hidden ">
        {/* LEFT IMAGE */}
        <Image
          src="/images/left-img.png"
          alt="Left img"
          width={230}
          height={350}
          className="absolute left-0 2xl:w-[250px] w-[clamp(150px,60vw,200px)] -translate-y-1/2 rounded-[12px] shadow-lg hidden lg:block"
        />

        {/* RIGHT IMAGE */}
        <Image
          src="/images/right-img.png"
          alt="Right img"
          width={230}
          height={350}
          className="absolute right-0 2xl:w-[250px] w-[clamp(150px,60vw,200px)] -translate-y-1/2 rounded-[12px] shadow-lg hidden lg:block"
        />

        {/* TOP IMAGE */}
        <Image
          src="/images/top-img.png"
          alt="Top img"
          width={800}
          height={130}
          className="absolute top-0 left-1/2 w-[clamp(320px,45vw,800px)] -translate-x-1/2 rounded-[12px] shadow-lg hidden xl:block"
        />

        {/* BOTTOM LEFT IMAGE */}
        <Image
          src="/images/bottom-left.png"
          alt="Bottom Left img"
          width={230}
          height={250}
          className="absolute bottom-0 left-0 2xl:w-[250px] w-[clamp(150px,60vw,200px)] rounded-[12px] shadow-lg hidden xl:block"
        />

        {/* BOTTOM CENTER VIDEO WITH SCROLL ZOOM */}
        {/* HERO BOTTOM VIDEO (STATIC PREVIEW) */}
        {/* <div
  className="
    absolute bottom-[-60px] left-1/2 -translate-x-1/2
    w-[clamp(320px,45vw,800px)]
    h-[150px]
    rounded-[12px]
    shadow-lg
    overflow-hidden
    z-0
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
</div> */}
        {/* 🔥 PARALLAX VIDEO */}
        <motion.div
          style={{ scale, y, borderRadius: radius }}
          className="
            absolute bottom-[-60px] left-1/2 -translate-x-1/2
    w-[clamp(320px,45vw,800px)]
            h-[150px]
            overflow-hidden rounded-[12px]
            shadow-xl
            z-10
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
        <Image
          src="/images/bottom-right.png"
          alt="Bottom Right img"
          width={230}
          height={250}
          className="absolute bottom-0 right-0 2xl:w-[250px] w-[clamp(150px,60vw,200px)] rounded-[12px] shadow-lg hidden xl:block"
        />

        {/* CENTER CONTENT */}
        <div className="relative flex justify-between align-middle flex-col overflow-hidden  z-10 max-w-[800px] 2xl:max-w-[1000px] text-center px-4">
          <H1>
            Experience the charm of{" "}
            <span className="text-[#FF7722]">Maharashtra’s</span> finest
            offerings.
          </H1>

          {/* SCROLL BUTTON */}
          <button
            onClick={() => router.push("/about")}
            className="mt-2 2xl:mt-4 mx-auto font-medium font-Manrope flex flex-row uppercase items-center gap-0 text-xs lg:text-[14px] tracking-[0.35em] text-[#454545] hover:text-black transition"
          >
            <span>SCROLL</span>
            <ArrowDown size={18} strokeWidth={1.5} className="animate-bounce" />
          </button>
        </div>
      </div>
      
  {/* SPACER TO ALLOW SCROLLING */}
  <div className="h-screen"></div>
    </section>
  );
}
