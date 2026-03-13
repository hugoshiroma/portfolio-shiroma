import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/Layout/SmoothScroll";
import Navbar from "@/components/Layout/Navbar";
import CustomCursor from "@/components/Layout/CustomCursor";
import Preloader from "@/components/Layout/Preloader";
import AbstractBackground from "@/components/Layout/AbstractBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shiroma | Senior Frontend Developer",
  description: "Senior Frontend Developer specialized in React, ReactNative, Next.js and high-end web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased selection:bg-rose-100 selection:text-rose-900`}>
        <Preloader />
        <CustomCursor />
        <AbstractBackground />
        <SmoothScroll>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-grow">{children}</main>
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
