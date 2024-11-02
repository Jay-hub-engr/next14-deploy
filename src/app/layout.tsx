import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Majestic Drywall and Paint- Premium contracting services in the Denver Metro area. Call us today",
  description: "MDP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={cn("realtive h-full font-sans antialiased", inter.className)}>
        <main className="relative flex flex-col min-h-screen">
        <Navbar/>
        <div className="flex-grow flex-1">{children}</div>
        <SpeedInsights />
        </main>
        <div className="">
        <Footer/>
        </div>

        <Analytics/>

        </body>
      
        
    </html>
  );
}
