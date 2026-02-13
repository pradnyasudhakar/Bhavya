"use client";

import { H3 } from "@/components/ui/Heading";
import Image from "next/image";

const data = [
  {
    title: "Culture & Heritage",
    img: "/images/type-1.png",
  },
  {
    title: "Food & Lifestyle",
    img: "/images/type-2.png",
  },
  {
    title: "Arts & Entertainment",
    img: "/images/type-3.png",
  },
  {
    title: "Environment & Development",
    img: "/images/type-4.png",
  },
];

export default function TypesSection() {
  return (
    <section className="bg-[#FFEADD] py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* BACKGROUND DECOR IMAGE */}
      <div className="absolute top-0 left-0 w-75 sm:w-100 lg:w-150 h-62.5 sm:h-87.5 lg:h-125 z-0 pointer-events-none opacity-60 lg:opacity-100">
        <Image
          src="/images/type-bg.png"
          alt="type-bg"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
        {/* HEADING */}
        <div className="pb-6 sm:pb-8 md:pb-10">
          <H3>
            Explore <span className="text-[#FF7A18]">Maharashtra</span>
          </H3>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 justify-items-center">
          {data.map((item, index) => (
            <div
              key={index}
              className="
                relative 
                h-100 sm:h-105 md:h-112.5 lg:h-120
                w-full 
                max-w-[320px] sm:max-w-none
                rounded-xl 
                overflow-hidden 
                shadow-lg 
                cursor-pointer
                transition-transform duration-500
                hover:-translate-y-3 sm:hover:-translate-y-4 lg:hover:-translate-y-6
                group
              "
            >
              {/* IMAGE */}
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />

              {/* TEXT */}
              <div
                className="
                  absolute 
                  bottom-6 sm:bottom-8 
                  left-1/2 -translate-x-1/2 
                  w-full px-4 sm:px-6 
                  text-center
                  transition-all duration-500
                  group-hover:bottom-16 sm:group-hover:bottom-20
                "
              >
                <h2 className="text-[#FF7722] font-medium text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px] xl:text-[35px] font-Newsreader leading-tight sm:leading-snug">
                  {item.title}
                </h2>
              </div>

              {/* EXPLORE BUTTON */}
              <div
                className="
                  absolute 
                  bottom-3 sm:bottom-4
                  left-1/2 -translate-x-1/2
                  transition-all duration-500
                  opacity-0
                  group-hover:opacity-100
                  z-10
                "
              >
                <button className="bg-[#FF7722] text-[#FBFBFB] font-Manrope px-5 sm:px-6 py-1.5 sm:py-2 rounded-full text-[16px] sm:text-[18px] lg:text-[20px] hover:bg-[#FF8833] transition-colors duration-300 shadow-lg">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}