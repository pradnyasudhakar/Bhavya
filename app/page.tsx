"use client";

import { useRouter } from "next/navigation";
import { ArrowDown } from "lucide-react";
import { H1 } from "@/components/ui/Heading";
import Image from "next/image";


export default function HomePage() {
  const router = useRouter();

  return (
    <section
      className="
        relative bg-[#FBFBFB] overflow-hidden
      "
    >
      <div className="relative mx-auto max-w-[1600px] min-h-[calc(100vh-86px)] pt-12 flex items-center justify-center">
      {/* LEFT IMAGE */}
      <Image
        src="/images/left-img.png"
        alt="Left img"
        width={230}
        height={350}
        className="
          absolute left-0 2xl:w-[250px] w-[clamp(150px,60vw,180px)]  -translate-y-1/2
           rounded-[12px]  shadow-lg
          hidden lg:block
        "
      />

      {/* RIGHT IMAGE */}
      <Image
        src="/images/right-img.png"
        alt="Right img"
        width={230}
        height={350}
        className="
          absolute right-0 2xl:w-[250px] w-[clamp(150px,60vw,180px)]  -translate-y-1/2
           rounded-[12px]  shadow-lg
          hidden lg:block
        "
      />

      {/* TOP IMAGE */}
      <Image
        src="/images/top-img.png"
        alt="Top img"
        width={800}
        height={130}
        className="
          absolute top-0 left-1/2 w-[clamp(320px,45vw,800px)] -translate-x-1/2
           rounded-[12px]  shadow-lg
          hidden xl:block
        "
      />

      {/* BOTTOM LEFT IMAGE */}
      <Image
        src="/images/bottom-left.png"
        alt="Bottom Left img"
        width={230}
        height={250}
        className="
          absolute bottom-0 left-0 2xl:w-[250px] w-[clamp(150px,60vw,180px)] -translate-x-0
         rounded-[12px]  shadow-lg
          hidden xl:block
        "
      />
      {/* BOTTOM IMAGE */}
      <Image
        src="/images/bottom-img.png"
        alt="Bottom img"
        width={800}
        height={130}
        className="
          absolute bottom-0 left-1/2  w-[clamp(320px,45vw,800px)] -translate-x-1/2
           rounded-[12px]  shadow-lg
          hidden xl:block
        "
      />
      {/* BOTTOM RIGHT IMAGE */}
      <Image
        src="/images/bottom-right.png"
        alt="Bottom Right img"
        width={230}
        height={250}
        className="
          absolute bottom-0 right-0 2xl:w-[250px] w-[clamp(150px,60vw,180px)] -translate-x-0
          rounded-[12px] shadow-lg
          hidden xl:block
        "
      />

      {/* CENTER CONTENT */}
      <div className="relative z-10 max-w-[800px] 2xl:max-w-[1000px] text-center px-4">
        <H1>
          Experience the charm of{" "}
          <span className="text-[#FF7722]">Maharashtra’s</span>{" "}
          finest offerings.
        </H1>

        {/* SCROLL */}
        <button
          onClick={() => router.push("/about")}
          className="
             mt-2 2xl:mt-4 mx-auto font-medium font-Manrope
            flex flex-row uppercase items-center gap-0
             text-xs lg:text-[14px] tracking-[0.35em] text-[#454545]
            hover:text-black transition
          "
        >
          <span>SCROLL</span>
          <ArrowDown
            size={18}
            strokeWidth={1.5}
            className="animate-bounce"
          />
        </button>
      </div>
      </div>
    </section>
  );
}
