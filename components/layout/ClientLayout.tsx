"use client";

// import { usePathname } from "next/navigation";
import Header from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const pathname = usePathname();
  // const isHome = pathname === "/";

  return (
    <>
      <Header />
      <main className="pt-18">{children}</main>
      {/* {!isHome && <Footer />} */}
      <Footer />
    </>
  );
}
