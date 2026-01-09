"use client";

import { useRouter } from "next/navigation";
import { ArrowDown } from "lucide-react";
import { H1 } from "@/components/ui/Heading";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Paragraph from "@/components/ui/Paragraph";

export default function HomePage() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  

  //  Video zoom animation - video full viewport (100vh/100vw) tak zoom hoga
  // Screen ke exact size tak zoom hoga
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const videoY = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const videoBorderRadius = useTransform(scrollYProgress, [0, 0.5], [12, 0]);

  //  Images opacity - video zoom hone par images fade out hongi
  const imagesOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const imagesScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.8]);

  //  Center content opacity
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <>
      {/* SCROLL CONTAINER - yeh extra height dega taaki scroll ho sake */}
      <div ref={containerRef} className="relative h-[400vh] max-w-400 ">
        {/* STICKY SECTION - yeh fixed position mein rahega */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <section className="relative bg-[#FBFBFB] w-full h-full">
            <div className="relative z-10 mx-auto max-w-400 h-full pt-12 flex items-center justify-center overflow-hidden">
              {/* LEFT IMAGE */}
              <motion.div
                style={{ opacity: imagesOpacity, scale: imagesScale }}
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
                style={{ opacity: imagesOpacity, scale: imagesScale }}
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
                style={{ opacity: imagesOpacity, scale: imagesScale }}
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
                style={{ opacity: imagesOpacity, scale: imagesScale }}
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

              {/*  VIDEO - yeh zoom hoke full width landscape view mein jayega */}
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
                  overflow-hidden
                  shadow-xl
                  origin-center
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
                style={{ opacity: imagesOpacity, scale: imagesScale }}
                className="absolute bottom-0 right-0 hidden xl:block"
              >
                <Image
                  src="/images/bottom-right.png"
                  alt="Bottom Right img"
                  width={230}
                  height={250}
                  className=" 2xl:w-62.5 w-[clamp(150px,60vw,200px)] rounded-xl shadow-lg"
                />
              </motion.div>

              {/* CENTER CONTENT */}
              <motion.div
                style={{ opacity: contentOpacity }}
                className="relative flex justify-between align-middle flex-col overflow-hidden z-10 max-w-200 2xl:max-w-250 text-center px-4"
              >
                <H1>
                  Experience the charm of{" "}
                  <span className="text-[#FF7722]">Maharashtras</span> finest
                  offerings.
                </H1>

                {/* SCROLL BUTTON */}
                <button
                  onClick={() => router.push("/about")}
                  className="mt-2 2xl:mt-4 mx-auto font-medium font-Manrope flex flex-row uppercase items-center gap-0 text-xs lg:text-[14px] tracking-[0.35em] text-[#454545] hover:text-black transition"
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
      <section className="relative py-16 bg-[#FAFAFA] flex items-center justify-center overflow-hidden">
        <div className="text-center px-4">
          <Paragraph className=" max-w-250 2xl:max-w-300 font-medium  mx-auto text-[30px] text-[#1D1D1D]">
            Explore the essence of <span className="text-[#FF7722]" >Maharashtra</span> through its rich traditions, diverse cuisine, vibrant arts, and storied heritage. Discover its landscapes, festivals, and innovations, all brought together to celebrate the spirit of this remarkable state in one engaging destination.
          </Paragraph>
        </div>
      </section>
    </>
  );
}