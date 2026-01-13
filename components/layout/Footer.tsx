"use client";

import Link from "next/link";
import Image from "next/image";
import { newsReader, manrope } from "@/lib/fonts";
import { Instagram, Linkedin, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#FFF1E6] text-[#0F0F0F]">

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-10 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* LEFT */}
        <div className="md:col-span-1">
          <h2
            className={`${newsReader.className} text-[35px] 2xl:text-[45px] leading-tight font-medium text-[#FF7A18] mb-1`}
          >
            Bhavya <br /> Maharashtra
          </h2>

          <p className={`${manrope.className} mb-3 text-[16px]`}>
            Follow us
          </p>

          <div className="flex gap-4">
            <Instagram className="w-5 h-5 text-pink-600 cursor-pointer" />
            <Linkedin className="w-5 h-5 text-blue-600 cursor-pointer" />
            <Facebook className="w-5 h-5 text-blue-700 cursor-pointer" />
            <Youtube className="w-5 h-5 text-red-600 cursor-pointer" />
          </div>
        </div>

        {/* CENTER LINKS */}
        <div className="grid grid-cols-2 gap-10 md:col-span-2">

          <div>
            <h3 className={`${newsReader.className} text-[#0F0F0F] font-medium text-[20px] mb-1`}>
              Culture & Heritage
            </h3>
            <ul className={`${manrope.className} text-[16px] space-y-2 text-[#454545`}>
              <li>Traditions & Festivals</li>
              <li>History & Legacy</li>
            </ul>
          </div>

          <div>
            <h3 className={`${newsReader.className} text-[#0F0F0F] font-medium text-[20px] mb-3`}>
              Food & Lifestyle
            </h3>
            <ul className={`${manrope.className} text-[16px] space-y-2 text-[#454545`}>
              <li>Cuisine & Recipes</li>
              <li>Lifestyle</li>
            </ul>
          </div>

          <div>
            <h3 className={`${newsReader.className} text-[#0F0F0F] font-medium text-[20px] mb-1`}>
              Arts & Entertainment
            </h3>
            <ul className={`${manrope.className} text-[16px] space-y-2 text-[#454545`}>
              <li>Performing & Visual Arts</li>
              <li>Stories & Narratives</li>
            </ul>
          </div>

          <div>
            <h3 className={`${newsReader.className} text-[#0F0F0F] font-medium text-[20px] mb-1`}>
              Environment & Development
            </h3>
            <ul className={`${manrope.className} text-[16px] space-y-2 text-[#454545`}>
              <li>Biodiversity & Ecology</li>
              <li>Infrastructure & Innovation</li>
            </ul>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden md:flex justify-end md:col-span-1">
          <Image
            src="/images/maharashtra-collage.png"
            alt="Maharashtra collage"
            width={360}
            height={360}
            className="object-contain"
          />
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-[#E5C7B1]">
        <div className="max-w-7xl mx-auto px-10 py-4 flex flex-col md:flex-row justify-between items-center text-[14px] text-[#555] gap-2">

          <div className="flex gap-6">
            <Link href="#">Terms of Use</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Contact Us</Link>
          </div>

          <p>
            Made with ❤️ by{" "}
            <span className="font-medium text-[#0F0F0F]">
              SAAA Consultants Pvt. Ltd.
            </span>
          </p>

        </div>
      </div>

    </footer>
  );
}
