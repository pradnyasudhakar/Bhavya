"use client";

import Link from "next/link";
import Image from "next/image";
import { newsReader } from "@/lib/fonts";
import { H2 } from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import { Instagram, Linkedin, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#FFF1E6] text-gray-800">
      <div className="container mx-auto px-8 py-12 flex flex-col md:flex-row justify-between gap-10">

        {/* LEFT SECTION */}
        <div className="max-w-xs">
          <h2
            className={`${newsReader.className} text-[40px] leading-[48px] font-medium text-orange-500 mb-4`}
          >
            Bhavya Maharashtra
          </h2>

          <Paragraph className="mb-3">Follow us</Paragraph>

          <div className="flex gap-3">
            <Instagram className="w-5 h-5 text-pink-600 cursor-pointer" />
            <Linkedin className="w-5 h-5 text-blue-600 cursor-pointer" />
            <Facebook className="w-5 h-5 text-blue-700 cursor-pointer" />
            <Youtube className="w-5 h-5 text-red-600 cursor-pointer" />
          </div>
        </div>

        {/* CENTER LINKS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 flex-1">
          <div>
            <H2>Culture & Heritage</H2>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Traditions & Festivals</li>
              <li>History & Legacy</li>
            </ul>
          </div>

          <div>
            <H2>Food & Lifestyle</H2>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Cuisine & Recipes</li>
              <li>Lifestyle</li>
            </ul>
          </div>

          <div>
            <H2>Arts & Entertainment</H2>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Performing & Visual Arts</li>
              <li>Stories & Narratives</li>
            </ul>
          </div>

          <div>
            <H2>Environment & Development</H2>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Biodiversity & Ecology</li>
              <li>Infrastructure & Innovation</li>
            </ul>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden lg:block">
          <Image
            src="/images/maharashtra-collage.png"
            alt="Maharashtra Culture"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-orange-200 py-4 text-sm">
        <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-center text-gray-600 gap-2 md:gap-0">
          <div className="flex gap-4">
            <Link href="#">Terms of Use</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Contact Us</Link>
          </div>

          <p className="text-center md:text-right">
            Made with ❤️ by{" "}
            <span className="font-medium">SAAA Consultants Pvt. Ltd.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
