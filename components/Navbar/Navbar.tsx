"use client";
import "./Navbar.css";
import Link from "next/link";
import React from "react";
import Sign from "../Sign/Sign";
// import { useAppContext } from "@/context/AppContext";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { toast } from "sonner";
const Navbar = () => {
  // const { isUnderlayOpen, setIsUnderlayOpen } = useAppContext();
  const pathname = usePathname();
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
          onClick={() => toast("In Progress")}
          // onClick={() => setIsUnderlayOpen(!isUnderlayOpen)}
        >
          <Menu />
        </button>

        <div className="hidden space-x-6 sm:block z-[999999]">
          <button
            onClick={() => toast("In Progress")}
            // href="/craft"
            className={`font-[family-name:var(--font-geist-mono)] text-sm font-medium hover:text-[var(--foreground)] transition-colors dura ${
              pathname === "/craft"
                ? "text-[var(--foreground)]"
                : "dark:text-neutral-400 text-neutral-500"
            }`}
          >
            Craft
          </button>
          <button
            onClick={() => toast("In Progress")}
            // href="/writing"
            className={`font-[family-name:var(--font-geist-mono)] text-sm font-medium hover:text-[var(--foreground)] transition-colors dura ${
              pathname === "/writing"
                ? "text-[var(--foreground)]"
                : "dark:text-neutral-400 text-neutral-500"
            }`}
          >
            Writings
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
