"use client";
import CraftHeader from "@/components/CraftHeader";
import { Home, Search, Bell, User } from "lucide-react";
import { motion } from "motion/react";
import React from "react";

const page = () => {
  return (
    <div className="mt-[var(--navbar-height)]">
      <CraftHeader title="Icon Drawer" date="Jan 2025" />

      <div className="w-full max-w-[900px] mx-auto p-4 flex items-center justify-center min-h-[400px]">
        <NavbarIcons />
      </div>
    </div>
  );
};

const icons = [
  <Home key={0} />,
  <Search key={1} />,
  <Bell key={2} />,
  <User key={3} />,
];

const NavbarIcons = () => {
  const [active, setActive] = React.useState(0);
  const buttonRefs = React.useRef<Array<HTMLButtonElement | null>>([]);

  const updateHighlightPosition = () => {
    const activeButton = buttonRefs.current[active];
    if (activeButton) {
      return {
        left: activeButton.offsetLeft,
        width: activeButton.offsetWidth,
        height: activeButton.offsetHeight,
      };
    }
    return {};
  };
  return (
    <div className="relative flex items-center justify-center debug gap-10">
      {icons.map((icon, index) => (
        <button
          key={index}
          ref={(el: HTMLButtonElement | null) => {
            buttonRefs.current[index] = el;
          }}
          className={`flex items-center justify-center p-2 rounded-lg debug h-[42px] w-[42px]`}
          onClick={() => setActive(index)}
        >
          {icon}
        </button>
      ))}
      <motion.div
        className="absolute rounded-lg bg-primary/10 -z-10"
        initial={false}
        animate={updateHighlightPosition()}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
    </div>
  );
};

export default page;
