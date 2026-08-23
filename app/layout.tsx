import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/ui/Navbar";
import PageTransition from "@/Components/ui/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Rasmi Portfolio",
  description: "My first ever portfolio",
  icons: {
    icon: "/favicon.jpg",
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-black text-white font-sans">
        
        <Navbar />
        <PageTransition>
          {children}
        </PageTransition>

        {/* <main className="pt-0 md:pt-[76px]">
          {children}
        </main> */}

      </body>
    </html>
  );
}