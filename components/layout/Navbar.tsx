"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { newsReader } from "@/lib/fonts";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDrop, setMobileDrop] = useState(false);

  //  Scroll progress track karna - page ki total scroll
  const { scrollYProgress } = useScroll();

  //  Logo color transition - 0 to 0.3 scroll progress par black se orange
  // scrollYProgress 0 = top of page, 1 = bottom of page
  const logoColor = useTransform(
    scrollYProgress,
    [0, 0.3], // 30% scroll hone par color change hoga
    ["#000000", "#FF7722"] // Black se Orange
  );

  return (
    <header className="bg-[#FAFAFA] fixed top-0 left-0 right-0 z-9999 shadow-[0px_3px_30px_0px_#0000001A]">
      <div className="container max-w-7xl mx-auto px-10 py-4 flex items-center justify-between">
        {/* Logo with animated color */}
        <Link href="/">
          <motion.span
            style={{ color: logoColor }}
            className={`${newsReader.className} text-[30px] 2xl:text-[40px]! font-medium`}
          >
            Bhavya Maharashtra
          </motion.span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-gray-800">
          {/* Culture & Heritage */}
          <div className="group relative">
            <button className="flex items-center gap-1 hover:text-[#FF7722]">
              Culture & Heritage
              <ChevronDown
                size={16}
                className="transition-transform duration-300 ease-out group-hover:rotate-180"
              />
            </button>

            <div
              className="
                fixed inset-x-0 left-0
                bg-white shadow-lg z-9998
                opacity-0 translate-y-4
                pointer-events-none
                transition-all duration-300 ease-out
                group-hover:opacity-100
                group-hover:translate-y-0
                group-hover:pointer-events-auto
              "
              style={{ top: 'var(--navbar-height, 72px)' }}
            >
              <div className="container mx-auto px-10 py-10 flex gap-10">
                {/* Left Image */}
                <div className="w-105 rounded-xl overflow-hidden">
                  <Image
                    src="/images/temple.png"
                    alt="Temple"
                    width={420}
                    height={260}
                    className="w-full h-65 object-cover"
                  />
                </div>

                {/* Right content */}
                <div className="flex flex-1 gap-10">
                  <div className="ml-10">
                    <h4 className="font-medium mb-4 text-[#0F0F0F] ">
                      Traditions & Festivals
                    </h4>
                    <ul className="space-y-3 text-[#454545]">
                      <li className="text-orange-500">• Temples / Monuments</li>
                      <li>Festivals</li>
                      <li>Languages</li>
                      <li>Local Sports / Games</li>
                    </ul>
                  </div>

                  <div className="w-px bg-[#CCCCCC]"></div>

                  <div>
                    <h4 className="font-medium mb-4 text-[#0F0F0F]">History & Legacy</h4>
                    <ul className="space-y-3 text-[#454545]">
                      <li>History</li>
                      <li>Forts</li>
                      <li>Saints / Poets / Writers</li>
                      <li>Famous Personalities</li>
                      <li>Women of Maharashtra</li>
                      <li>Interesting Facts</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Culture & Heritage */}
          <div className="group relative">
            <button className="flex items-center gap-1 hover:text-[#FF7722]">
              Food & Lifestyle
              <ChevronDown
                size={16}
                className="transition-transform duration-300 ease-out group-hover:rotate-180"
              />
            </button>

            <div
              className="
                fixed inset-x-0 left-0
                bg-white shadow-lg z-9998
                opacity-0 translate-y-4
                pointer-events-none
                transition-all duration-300 ease-out
                group-hover:opacity-100
                group-hover:translate-y-0
                group-hover:pointer-events-auto
              "
              style={{ top: 'var(--navbar-height, 72px)' }}
            >
              <div className="container mx-auto px-10 py-10 flex gap-10">
                {/* Left Image */}
                <div className="w-105 rounded-xl overflow-hidden">
                  <Image
                    src="/images/culture-img.png"
                    alt="Culture"
                    width={420}
                    height={260}
                    className="w-full h-65 object-cover"
                  />
                </div>

                {/* Right content */}
                <div className="flex flex-1 gap-10">
                  <div className="ml-10">
                    <h4 className="font-medium mb-4 text-[#0F0F0F] ">
                      Cuisine & Recipes
                    </h4>
                    <ul className="space-y-3 text-[#454545]">
                      <li > Temples / Monuments</li>
                      <li>Seasonal Fruits & Food Grains</li>
                      <li className="text-orange-500">• Street Food</li>
                      <li>Best Restaurants</li>
                    </ul>
                  </div>

                  <div className="w-px bg-[#CCCCCC]"></div>

                  <div>
                    <h4 className="font-medium mb-4 text-[#0F0F0F] ">Lifestyle</h4>
                    <ul className="space-y-3 text-gray-600">
                      <li>Attire</li>
                      
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          

          <div className="flex items-center gap-1 hover:text-[#FF7722] cursor-pointer">
            Art & Entertainment <ChevronDown size={16} />
          </div>

          <div className="flex items-center gap-1 hover:text-[#FF7722] cursor-pointer">
            Environment & Development <ChevronDown size={16} />
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
          mobileOpen ? "max-h-175 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 space-y-4 text-gray-800">
          {/* Mobile Dropdown */}
          <button
            onClick={() => setMobileDrop(!mobileDrop)}
            className="flex w-full items-center justify-between font-medium"
          >
            Culture & Heritage
            <ChevronDown
              size={18}
              className={`transition-transform duration-500 ${
                mobileDrop ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`pl-4 space-y-2 text-gray-600 transition-[max-height,opacity] duration-500 overflow-hidden ${
              mobileDrop ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p>Temples / Monuments</p>
            <p>Festivals</p>
            <p>Languages</p>
            <p>Local Sports / Games</p>
          </div>

          <p>Food & Lifestyle</p>
          <p>Art & Entertainment</p>
          <p>Environment & Development</p>
        </div>
      </div>
    </header>
  );
}