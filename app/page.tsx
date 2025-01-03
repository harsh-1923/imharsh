"use client";
import HeroBanner from "@/components/HomePageComponents/HeroBanner/HeroBanner";
import WindowDimensions from "@/components/WindowSize";
import CurrentTime from "@/components/CurrentTime";
import Socials from "@/components/Socials";
import Link from "next/link";
import Underline from "@/components/Underline";

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center px-4 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="w-full max-w-[900px]">
        <div className="flex items-center justify-center relative">
          <HeroBanner />
        </div>
        <div className="flex items-center justify-between gap-2">
          <CurrentTime />
          <WindowDimensions />
        </div>
        <h1 className="font-[family-name:var(--font-funnel-display)] text-4xl font-medium mt-[40px] sm:text-7xl hero-header">
          Software Engineer
        </h1>
        <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mt-8">
          <div className="w-full sm:w-[70%] space-y-4">
            <p className="">Currently, building Flight Simulators at Airbus.</p>
            <p className="max-w-[600px]">
              Also, experimenting with user experience, interaction design and
              other web technologies.
            </p>

            <p className="relative w-fit">
              <Underline className="absolute left-0 -bottom-2" />
              <Link href="https://www.imharshsharma.in">2024 Portfolio</Link>
            </p>
          </div>
          <div className="w-full sm:w-[20%]">
            <Socials />
          </div>
        </div>
      </main>
    </div>
  );
}
