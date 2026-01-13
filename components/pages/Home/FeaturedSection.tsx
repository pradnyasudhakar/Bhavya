"use client";

import Image from "next/image";
import { newsReader , manrope } from "@/lib/fonts";

const featuredData = [
  {
    title: "Kolhapuri Misal",
    desc: "Spicy misal pav, distinct from Pune style",
    tag: "Recipe",
    img: "/images/f-1.png",
    color: "bg-[#E6E3B4] text-black",
  },
  {
    title: "Sachin Tendulkar",
    desc: "“God of Cricket,” Bharat Ratna awardee.",
    tag: "Personalities",
    img: "/images/f-2.png",
    color: "bg-[#DCE8FF] text-black",
  },
  {
    title: "Sassoon Docks",
    desc: "Mumbai Port became the gateway to India.",
    tag: "Transport",
    img: "/images/f-3.png",
    color: "bg-[#FFE0E0] text-black",
  },
];

export default function FeaturedSection() {
  return (
    <section className="relative bg-[#FBFBFB] py-20">

      {/* TOP HALF BACKGROUND */}
      <div
        className="
          absolute top-0 left-0 w-full 
          md:h-[50%] h-full
          bg-[url('/images/f-bg.png')]
          bg-cover bg-center
          z-0
        "
      />

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-10 z-10">

        {/* HEADING */}
        <h2 className={`${newsReader.className} text-center py-6 text-[#FBFBFB] font-semibold 2xl:text-[50px] text-[45px] `} >
          Featured
        </h2>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {featuredData.map((item, index) => (
            <div
              key={index}
              className="bg-[#F0F0F0] rounded-xl  shadow-lg overflow-hidden"
            >
              {/* IMAGE */}
              <div className="relative h-65">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover p-2 rounded-[10px] "
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">

              <div className="flex justify-between  align-middle ">
                <h3 className={`${newsReader.className} text-[24px]  text-[#0F0F0F] font-medium `}>
                  {item.title}
                </h3>
                 <p> <span
                  className={`${manrope.className} text-xs px-2 py-1 rounded-full ${item.color}`}
                >
                  {item.tag}
                </span></p>

                
              </div>

                <p className={`${manrope.className}text-[#555555]  text-[18px] mt-1`}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

