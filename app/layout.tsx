import "@/styles/globals.css";
import { manrope, newsReader } from "@/lib/fonts";
import ClientLayout from "@/components/layout/ClientLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.className} ${newsReader.variable} bg-white text-gray-900`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
