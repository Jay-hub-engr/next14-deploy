import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Majestic",
  description: "Jesus",
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
        </main> 
        <Footer/>

        </body>
      
        
    </html>
  );
}
