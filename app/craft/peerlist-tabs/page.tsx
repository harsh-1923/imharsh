"use client";
import CraftHeader from "@/components/CraftHeader";
import React from "react";
import { motion } from "framer-motion";
import * as MenuBar from "@radix-ui/react-menubar";
import TooltipButton from "@/components/TooltipButton";

const TABS = ["Newest", "Following", "Popular", "Trending"];
const DEFAULT_SPEED = 100;
const SLOW_SPEED = 140;

const PeerlistTabs = () => {
  const [active, setActive] = React.useState(0);
  const [speed, setSpeed] = React.useState(DEFAULT_SPEED);
  const prev = React.useRef<number>(0);

  const handleTabChange = (newIndex: number) => {
    const current = active;
    prev.current = current;

    if (Math.abs(newIndex - current) > 1) {
      const step = newIndex > current ? 1 : -1;
      let i = current;

      const animate = () => {
        i += step;
        setActive(i);

        if ((step > 0 && i < newIndex) || (step < 0 && i > newIndex)) {
          setTimeout(animate, speed);
        }
      };

      animate();
    } else {
      setActive(newIndex);
    }
  };

  return (
    <div className="mt-[var(--navbar-height)]">
      <CraftHeader title="Peerlist Tabs" date="Jan 2025" />
      <div className="my-8 p-4 dark:bg-[#1c1c1c] bg-[var(--colors-grayA1)] flex items-center justify-center gap-2 min-h-[300px] relative">
        <div className="absolute top-2 right-2 flex items-center justify-center gap-2">
          {speed === SLOW_SPEED && (
            <p className="text-xs text-[var(--text-secondary)]">
              Reduced Speed
            </p>
          )}
          <TooltipButton tooltipText="Toggle Speed">
            <button
              className="w-[30px] aspect-square rounded-full flex items-center justify-center"
              onClick={() =>
                setSpeed(speed === DEFAULT_SPEED ? SLOW_SPEED : DEFAULT_SPEED)
              }
            >
              <svg
                width="20px"
                height="20px"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                fill="none"
                className="transition-colors duration-150"
                color={
                  speed === DEFAULT_SPEED
                    ? "var(--colors-gray10)"
                    : "var(--colors-gray12)"
                }
              >
                <path
                  d="M13.848 13.317L9.505 18.28a2 2 0 01-3.01 0l-4.343-4.963a2 2 0 010-2.634L6.495 5.72a2 2 0 013.01 0l4.343 4.963a2 2 0 010 2.634z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M13 19l4.884-5.698a2 2 0 000-2.604L13 5"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M17 19l4.884-5.698a2 2 0 000-2.604L17 5"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
          </TooltipButton>
        </div>

        <MenuBar.Root
          className="flex items-center justify-center gap-2"
          role="tablist"
        >
          {TABS.map((tab, index) => (
            <Tab
              key={index}
              tabTitle={tab}
              active={active}
              index={index}
              setActive={handleTabChange}
              speed={speed}
            />
          ))}
        </MenuBar.Root>
      </div>
    </div>
  );
};

const Tab = ({
  active,
  tabTitle,
  index,
  setActive,
  speed,
}: {
  active: number;
  index: number;
  tabTitle: string;
  setActive: (index: number) => void;
  speed: number;
}) => {
  return (
    <MenuBar.Menu value={index.toString()}>
      <MenuBar.Trigger asChild>
        <button
          className="flex items-center justify-center gap-4 bg-[var(--colors-gray5)] relative py-2 px-4 rounded-2xl overflow-hidden cursor-pointer"
          style={{ color: active === index ? "black" : "white" }}
          onClick={() => setActive(index)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setActive(index);
            }
          }}
          role="tab"
          aria-selected={active === index}
          tabIndex={0}
        >
          <motion.div
            className="absolute w-full h-full dark:bg-white bg-black -z-[1px] transform transition-transform duration-300 bg-blend-difference"
            animate={{
              left:
                active < index
                  ? "-100%"
                  : active > index
                  ? "100%"
                  : active === index
                  ? 0
                  : 0,
            }}
            initial={false}
            transition={{ duration: speed / 1000, ease: "linear" }}
          ></motion.div>
          <div className="mix-blend-difference text-white text-sm z-10 select-none">
            {tabTitle}
          </div>
        </button>
      </MenuBar.Trigger>
    </MenuBar.Menu>
  );
};

export default PeerlistTabs;
