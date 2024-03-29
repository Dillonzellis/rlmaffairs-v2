import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body
        className={cn(
          "bg-slate-50 bg-[url('/paper-bg-min.png')] text-slate-950",
          inter.className,
        )}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
