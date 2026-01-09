"use client";

import Image from "next/image";

const data = [
  {
    title: "Culture & Heritage",
    img: "/images/left-img.png",
  },
  {
    title: "Food & Lifestyle",
    img: "/images/left-img.png",
  },
  {
    title: "Arts & Entertainment",
    img: "/images/left-img.png",
  },
  {
    title: "Environment & Development",
    img: "/images/left-img.png",
  },
];

export default function TypesSection() {
  return (
    <section className="bg-[#FFECDD] py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* HEADING */}
        <h2 className="text-4xl font-serif font-bold mb-10">
          Explore{" "}
          <span className="text-[#FF7A18]">Maharashtra</span>
        </h2>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {data.map((item, index) => (
            <div
              key={index}
              className="relative h-105 rounded-2xl overflow-hidden shadow-lg group"
            >
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/30" />

              {/* TEXT */}
              <div className="absolute bottom-5 w-full text-center">
                <p className="text-[#FFB366] text-sm font-serif tracking-wide">
                  {item.title}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
