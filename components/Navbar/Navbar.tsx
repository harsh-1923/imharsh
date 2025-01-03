"use client";
import "./Navbar.css";
import Link from "next/link";
import React from "react";
import Sign from "../Sign/Sign";
// import { useAppContext } from "@/context/AppContext";
import { Menu } from "lucide-react";

const Navbar = () => {
  // const { isUnderlayOpen, setIsUnderlayOpen } = useAppContext();
  return (
    <nav className="w-screen fixed left-0 top-0 z-30">
      <div className="gradient-blur">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="max-w-[900px] mx-auto flex items-center justify-between p-4 relative">
        <Link href="/" className="z-[999999]">
          <Sign />
        </Link>

        <button
          className="sm:hidden z-[999999]"
          // onClick={() => setIsUnderlayOpen(!isUnderlayOpen)}
        >
          <Menu />
        </button>

        <div className="hidden sm:block z-[999999]">
          <button className="rounded-full px-4 py-2 dark:hover:bg-[var(--colors-gray12)] font-[family-name:var(--font-geist-mono)]">
            Craft
          </button>
          <button className="rounded-full px-4 py-2 dark:hover:bg-[var(--colors-gray12)] font-[family-name:var(--font-geist-mono)]">
            Writings
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
