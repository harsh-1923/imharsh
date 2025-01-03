import type { Metadata } from "next";
import { Geist, Geist_Mono, Funnel_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import "./common.css";
import { AppProvider } from "@/context/AppContext";
import Sign from "@/components/Sign/Sign";
import HeadTags from "@/components/Head";
import Link from "next/link";

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
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${funnelDisplay.variable} antialiased`}
        >
          <nav className="max-w-[900px] w-screen p-4 mx-auto">
            <Link href="/">
              <Sign />
            </Link>
          </nav>
          {children}
        </body>
        <Analytics />
      </AppProvider>
    </html>
  );
}
