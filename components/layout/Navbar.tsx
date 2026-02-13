"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { newsReader } from "@/lib/fonts";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDrop, setMobileDrop] = useState<string | null>(null);

  // Scroll progress track
  const { scrollYProgress } = useScroll();

  // Logo color transition
  const logoColor = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["#000000", "#FF7722"]
  );

  const toggleMobileDrop = (menu: string) => {
    setMobileDrop(mobileDrop === menu ? null : menu);
  };

  return (
    <header className="bg-[#FAFAFA] fixed top-0 left-0 right-0 z-[9999] shadow-[0px_3px_30px_0px_#0000001A]">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo with animated color */}
        <Link href="/">
          <motion.span
            style={{ color: logoColor }}
            className={`${newsReader.className} text-[24px] sm:text-[28px] lg:text-[32px] xl:text-[40px] font-medium`}
          >
            Bhavya Maharashtra
          </motion.span>
        </Link>

        {/* Desktop Menu - Hidden on mobile and tablet */}
        <nav className="hidden xl:flex gap-6 2xl:gap-8 text-gray-800 text-[15px]">
          {/* Culture & Heritage Dropdown */}
          <div className="group relative">
            <button className="flex items-center gap-1 hover:text-[#FF7722] transition-colors">
              Culture & Heritage
              <ChevronDown
                size={16}
                className="transition-transform duration-300 ease-out group-hover:rotate-180"
              />
            </button>

            <div
              className="
                fixed inset-x-0 left-0
                bg-white shadow-lg z-[9998]
                opacity-0 translate-y-4
                pointer-events-none
                transition-all duration-300 ease-out
                group-hover:opacity-100
                group-hover:translate-y-0
                group-hover:pointer-events-auto
              "
              style={{ top: 'var(--navbar-height, 72px)' }}
            >
              <div className="container max-w-7xl mx-auto px-10 py-10 flex gap-10">
                {/* Left Image */}
                <div className="w-[420px] rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/temple.png"
                    alt="Temple"
                    width={420}
                    height={260}
                    className="w-full h-[260px] object-cover"
                  />
                </div>

                {/* Right content */}
                <div className="flex flex-1 gap-10">
                  <div className="ml-10">
                    <h4 className="font-medium mb-4 text-[#0F0F0F]">
                      Traditions & Festivals
                    </h4>
                    <ul className="space-y-3 text-[#454545]">
                      <li className="text-orange-500">• Temples / Monuments</li>
                      <li>• Festivals</li>
                      <li>• Languages</li>
                      <li>• Local Sports / Games</li>
                    </ul>
                  </div>

                  <div className="w-px bg-[#CCCCCC]"></div>

                  <div>
                    <h4 className="font-medium mb-4 text-[#0F0F0F]">History & Legacy</h4>
                    <ul className="space-y-3 text-[#454545]">
                      <li>• History</li>
                      <li>• Forts</li>
                      <li>• Saints / Poets / Writers</li>
                      <li>• Famous Personalities</li>
                      <li>• Women of Maharashtra</li>
                      <li>• Interesting Facts</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Food & Lifestyle Dropdown */}
          <div className="group relative">
            <button className="flex items-center gap-1 hover:text-[#FF7722] transition-colors">
              Food & Lifestyle
              <ChevronDown
                size={16}
                className="transition-transform duration-300 ease-out group-hover:rotate-180"
              />
            </button>

            <div
              className="
                fixed inset-x-0 left-0
                bg-white shadow-lg z-[9998]
                opacity-0 translate-y-4
                pointer-events-none
                transition-all duration-300 ease-out
                group-hover:opacity-100
                group-hover:translate-y-0
                group-hover:pointer-events-auto
              "
              style={{ top: 'var(--navbar-height, 72px)' }}
            >
              <div className="container max-w-7xl mx-auto px-10 py-10 flex gap-10">
                {/* Left Image */}
                <div className="w-[420px] rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/culture-img.png"
                    alt="Culture"
                    width={420}
                    height={260}
                    className="w-full h-[260px] object-cover"
                  />
                </div>

                {/* Right content */}
                <div className="flex flex-1 gap-10">
                  <div className="ml-10">
                    <h4 className="font-medium mb-4 text-[#0F0F0F]">
                      Cuisine & Recipes
                    </h4>
                    <ul className="space-y-3 text-[#454545]">
                      <li>• Temples / Monuments</li>
                      <li>• Seasonal Fruits & Food Grains</li>
                      <li className="text-orange-500">• Street Food</li>
                      <li>• Best Restaurants</li>
                    </ul>
                  </div>

                  <div className="w-px bg-[#CCCCCC]"></div>

                  <div>
                    <h4 className="font-medium mb-4 text-[#0F0F0F]">Lifestyle</h4>
                    <ul className="space-y-3 text-[#454545]">
                      <li>• Attire</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Menu Items */}
          <div className="flex items-center gap-1 hover:text-[#FF7722] cursor-pointer transition-colors">
            Art & Entertainment <ChevronDown size={16} />
          </div>

          <div className="flex items-center gap-1 hover:text-[#FF7722] cursor-pointer transition-colors">
            Environment & Development <ChevronDown size={16} />
          </div>
        </nav>

        {/* Tablet Menu - Simple horizontal links (visible between lg and xl) */}
        <nav className="hidden lg:flex xl:hidden gap-4 text-gray-800 text-[14px]">
          <Link href="/culture" className="hover:text-[#FF7722] transition-colors whitespace-nowrap">
            Culture
          </Link>
          <Link href="/food" className="hover:text-[#FF7722] transition-colors whitespace-nowrap">
            Food
          </Link>
          <Link href="/art" className="hover:text-[#FF7722] transition-colors whitespace-nowrap">
            Art
          </Link>
          <Link href="/environment" className="hover:text-[#FF7722] transition-colors whitespace-nowrap">
            Environment
          </Link>
        </nav>

        {/* Mobile Toggle - Shows on mobile and tablet */}
        <button
          className="xl:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X size={24} className="sm:w-7 sm:h-7" /> : <Menu size={24} className="sm:w-7 sm:h-7" />}
        </button>
      </div>

      {/* Mobile/Tablet Menu */}
      <div
        className={`xl:hidden bg-white overflow-hidden transition-all duration-500 ease-in-out ${
          mobileOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-10 py-4 space-y-4 text-gray-800">
          {/* Culture & Heritage Mobile Dropdown */}
          <div>
            <button
              onClick={() => toggleMobileDrop("culture")}
              className="flex w-full items-center justify-between font-medium text-[15px] sm:text-[16px] hover:text-[#FF7722] transition-colors"
            >
              Culture & Heritage
              <ChevronDown
                size={18}
                className={`transition-transform duration-500 ${
                  mobileDrop === "culture" ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`pl-4 sm:pl-6 space-y-2 text-gray-600 text-[14px] sm:text-[15px] transition-all duration-500 overflow-hidden ${
                mobileDrop === "culture" ? "max-h-[400px] opacity-100 mt-3" : "max-h-0 opacity-0"
              }`}
            >
              <div className="space-y-2 pb-2 border-b border-gray-200">
                <p className="font-medium text-gray-700">Traditions & Festivals</p>
                <p className="hover:text-[#FF7722] cursor-pointer pl-3">• Temples / Monuments</p>
                <p className="hover:text-[#FF7722] cursor-pointer pl-3">• Festivals</p>
                <p className="hover:text-[#FF7722] cursor-pointer pl-3">• Languages</p>
                <p className="hover:text-[#FF7722] cursor-pointer pl-3">• Local Sports / Games</p>
              </div>
              <div className="space-y-2 pt-2">
                <p className="font-medium text-gray-700">History & Legacy</p>
                <p className="hover:text-[#FF7722] cursor-pointer pl-3">• History</p>
                <p className="hover:text-[#FF7722] cursor-pointer pl-3">• Forts</p>
                <p className="hover:text-[#FF7722] cursor-pointer pl-3">• Saints / Poets / Writers</p>
                <p className="hover:text-[#FF7722] cursor-pointer pl-3">• Famous Personalities</p>
              </div>
            </div>
          </div>

          {/* Food & Lifestyle Mobile Dropdown */}
          <div>
            <button
              onClick={() => toggleMobileDrop("food")}
              className="flex w-full items-center justify-between font-medium text-[15px] sm:text-[16px] hover:text-[#FF7722] transition-colors"
            >
              Food & Lifestyle
              <ChevronDown
                size={18}
                className={`transition-transform duration-500 ${
                  mobileDrop === "food" ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`pl-4 sm:pl-6 space-y-2 text-gray-600 text-[14px] sm:text-[15px] transition-all duration-500 overflow-hidden ${
                mobileDrop === "food" ? "max-h-[300px] opacity-100 mt-3" : "max-h-0 opacity-0"
              }`}
            >
              <div className="space-y-2 pb-2 border-b border-gray-200">
                <p className="font-medium text-gray-700">Cuisine & Recipes</p>
                <p className="hover:text-[#FF7722] cursor-pointer pl-3">• Street Food</p>
                <p className="hover:text-[#FF7722] cursor-pointer pl-3">• Best Restaurants</p>
              </div>
              <div className="space-y-2 pt-2">
                <p className="font-medium text-gray-700">Lifestyle</p>
                <p className="hover:text-[#FF7722] cursor-pointer pl-3">• Attire</p>
              </div>
            </div>
          </div>

          {/* Simple Menu Items */}
          <p className="font-medium text-[15px] sm:text-[16px] hover:text-[#FF7722] cursor-pointer transition-colors">
            Art & Entertainment
          </p>
          <p className="font-medium text-[15px] sm:text-[16px] hover:text-[#FF7722] cursor-pointer transition-colors">
            Environment & Development
          </p>
        </div>
      </div>
    </header>
  );
}