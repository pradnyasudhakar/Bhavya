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
    <section className="bg-[#FFEADD] py-20 relative overflow-hidden ">
      {/* BACKGROUND DECOR IMAGE */}
      <div className="absolute top-0 left-0 w-150 h-125 z-0 pointer-events-none">
        <Image
          src="/images/type-bg.png"
          alt="type-bg"
          fill
          priority
          className=" object-contain lg:block "
        />
      </div>

      <div className=" relative max-w-7xl  mx-auto px-10  text-center">
        {/* HEADING */}
        <div className=" pb-8 ">
          <H3>
            Explore <span className="text-[#FF7A18]">Maharashtra</span>
          </H3>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="
      relative h-120 w-70 rounded-xl overflow-hidden shadow-lg 
      cursor-pointer
      transition-transform duration-500
      hover:-translate-y-6
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
              <div className="absolute inset-0 bg-black/30" />
              {/* TEXT */}
              <div
                className="
    absolute bottom-8 
    left-1/2 -translate-x-1/2 
    w-full px-6 text-center
    transition-all duration-500
    group-hover:bottom-20
  "
              >
                <h2 className="text-[#FF7722] font-medium text-[30px] 2xl:text-[35px] font-Newsreader leading-9">
                  {item.title}
                </h2>
              </div>

              {/* EXPLORE BUTTON */}
              <div
                className="
    absolute bottom-4
    left-1/2 -translate-x-1/2
    transition-all duration-500
    opacity-0
    group-hover:opacity-100
    z-10
  "
              >
                <button className="bg-[#FF7722] text-[#FBFBFB] font-Manrope px-4 py-1 rounded-full text-[20px]">
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
