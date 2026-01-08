"use client";

import { useRouter } from "next/navigation";
import { ArrowDown } from "lucide-react";
import Heading from "@/components/ui/Heading";

export default function HomePage() {
  const router = useRouter();

  return (
    <section
      className="
        relative bg-[#FBFBFB] overflow-hidden
        min-h-[calc(100vh-96px)]
        pt-[96px]
        flex items-center justify-center
      "
    >
      {/* LEFT IMAGE */}
      <img
        src="/images/left-img.png"
        alt=""
        className="
          absolute left-[0px]  -translate-y-1/2
          w-[230px] h-[350px] rounded-[12px] shadow-lg
          hidden lg:block
        "
      />

      {/* RIGHT IMAGE */}
      <img
        src="/images/right-img.png"
        alt=""
        className="
          absolute right-[0px]  -translate-y-1/2
          w-[230px] h-[350px] rounded-[12px]  shadow-lg
          hidden lg:block
        "
      />

      {/* TOP IMAGE */}
      <img
        src="/images/top-img.png"
        alt=""
        className="
          absolute top-[0px] left-1/2 -translate-x-1/2
          w-[800px] h-[150px] rounded-[12px]  shadow-lg
          hidden xl:block
        "
      />

      {/* BOTTOM LEFT IMAGE */}
      <img
        src="/images/bottom-left.png"
        alt=""
        className="
          absolute bottom-[0px] left-0 -translate-x-0
         w-[230px] h-[250px] rounded-[12px]  shadow-lg
          hidden xl:block
        "
      />
      {/* BOTTOM IMAGE */}
      <img
        src="/images/bottom-img.png"
        alt=""
        className="
          absolute bottom-[0px] left-1/2 -translate-x-1/2
          w-[800px] h-[150px] rounded-[12px]  shadow-lg
          hidden xl:block
        "
      />
      {/* BOTTOM RIGHT IMAGE */}
      <img
        src="/images/bottom-right.png"
        alt=""
        className="
          absolute bottom-[0px] right-0 -translate-x-0
          w-[230px] h-[250px] rounded-[12px] shadow-lg
          hidden xl:block
        "
      />

      {/* CENTER CONTENT */}
      <div className="relative z-10 max-w-[1000px] text-center px-4">
        <Heading level={1}>
          Experience the charm of{" "}
          <span className="text-orange-500">Maharashtra’s</span>{" "}
          finest offerings.
        </Heading>

        {/* SCROLL */}
        <button
          onClick={() => router.push("/about")}
          className="
            mt-6 mx-auto font-medium font-monorope
            flex flex-row uppercase items-center gap-0
            text-sm tracking-[0.35em] text-[#454545]
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
    </section>
  );
}
