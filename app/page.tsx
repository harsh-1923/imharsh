"use client";
import HeroBanner from "@/components/HomePageComponents/HeroBanner/HeroBanner";
import WindowDimensions from "@/components/WindowSize";
import CurrentTime from "@/components/CurrentTime";
import Socials from "@/components/Socials";
import Link from "next/link";
import Underline from "@/components/Underline";
import CodeBlock from "@/components/CodeBlock";
// import { Timeline } from "@/components/Timeline/Timeline";

// const experiences = [
//   {
//     startDate: "6/20",
//     endDate: "12/21",
//     company: "Tech Startup Inc.",
//     role: "Junior jh Developer",
//   },
//   {
//     startDate: "1/22",
//     endDate: "6/23",
//     company: "Big Tech Corp",
//     role: "Software Engineer",
//   },
//   {
//     startDate: "7/23",
//     endDate: "12/24",
//     company: "AI Innovations Ltd",
//     role: "Senior AI Engineer",
//   },
// ];

const code = `import { useState, useEffect, RefObject } from "react";

interface ScrollState {
  isScrolling: boolean;
  scrollAmount: number;
  isUserScrolling: boolean;
  isAtStart: boolean;
}

export function useScrollObserver(ref: RefObject<HTMLElement>): ScrollState { 
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollAmount, setScrollAmount] = useState(0);
  const [isUserScrolling, setIsUserScrolling] = useState(false);
  const [isAtStart, setIsAtStart] = useState(true);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let scrollTimeout: NodeJS.Timeout;
    let isUserInitiated = false;

    const handleTouchStart = () => {
      isUserInitiated = true;
    };

    const handleTouchEnd = () => {
      isUserInitiated = false;
    };

    const handleWheel = () => {
      isUserInitiated = true;
    };

    const handleScroll = () => {
      const currentScrollAmount = element.scrollLeft;
      setIsScrolling(true);
      setScrollAmount(currentScrollAmount);
      setIsUserScrolling(isUserInitiated);
      setIsAtStart(currentScrollAmount === 0);

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
        setIsUserScrolling(false);
        isUserInitiated = false;
      }, 150); // Debounce scroll end detection
    };

    element.addEventListener("scroll", handleScroll);
    element.addEventListener("touchstart", handleTouchStart);
    element.addEventListener("touchend", handleTouchEnd);
    element.addEventListener("wheel", handleWheel);

    return () => {
      element.removeEventListener("scroll", handleScroll);
      element.removeEventListener("touchstart", handleTouchStart);
      element.removeEventListener("touchend", handleTouchEnd);
      element.removeEventListener("wheel", handleWheel);
      clearTimeout(scrollTimeout);
    };
  }, [ref]);

  return { isScrolling, scrollAmount, isUserScrolling, isAtStart };
}

`;

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center px-4 pb-20 gap-16 font-[family-name:var(--font-geist-sans)] sm:pt-[100px] pt-[80px]">
      <div className="w-full max-w-[900px]">
        <div className="flex items-center justify-center relative">
          <HeroBanner />
        </div>
        <div className="flex items-center justify-between gap-2">
          <CurrentTime />
          <WindowDimensions />
        </div>
        <h1 className="font-[family-name:var(--font-funnel-display)] font-medium mt-[40px] hero-header tracking-tight">
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
        {/* <Timeline
          start="1/20"
          end="12/24"
          className="mb-2"
          experiences={experiences}
        /> */}

        <CodeBlock codeString={code} showMinimap={true} />

        <div className="w-full h-screen"></div>
      </div>
    </main>
  );
}
