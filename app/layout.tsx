import type { Metadata } from "next";
import { Geist, Geist_Mono, Funnel_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import "./common.css";
import { AppProvider } from "@/context/AppContext";

import HeadTags from "@/components/Head";

import Underlay from "@/components/Underlay/Underlay";
import Navbar from "@/components/Navbar/Navbar";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const funnelDisplay = Funnel_Display({
  variable: "--font-funnel-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://imharsh.in"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Harsh Sharma",
    template: "%s | Harsh Sharma",
  },
  description: "Design Engineer",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppProvider>
        <HeadTags />
        <Toaster />
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${funnelDisplay.variable} antialiased`}
        >
          <Underlay />
          <main className="w-full rounded-t-3xl max-w-[1000px] mx-auto">
            <Navbar />

            {children}
          </main>
        </body>
        <Analytics />
      </AppProvider>
    </html>
  );
}
