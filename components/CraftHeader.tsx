"use client";
import { Check, Link } from "lucide-react";
import React, { useState } from "react";
import TooltipButton from "./TooltipButton";
import { usePathname } from "next/navigation";
import copyToClipboard from "@/lib/utils/copyToClipboard";
import { toast } from "sonner";
import { AnimatePresence, motion } from "motion/react";

interface CraftHeaderInterface {
  title: string;
  date: string;
}

const CraftHeader = ({ title, date }: CraftHeaderInterface) => {
  return (
    <div className="flex items-start justify-between gap-4 p-4">
      <div>
        <h1 className="text-base font-medium">{title}</h1>
        <p className="text-[var(--text-secondary)]">{date}</p>
      </div>
      <div>
        <CopyLinkButton />
      </div>
    </div>
  );
};

const CopyLinkButton = () => {
  const [isCopied, setIsCopied] = useState(false);
  const pathName = usePathname();

  const handleCopy = async () => {
    const success = await copyToClipboard(pathName);

    if (success) {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } else {
      toast("Failed to copy.");
    }
  };

  return (
    <AnimatePresence initial={false} mode="wait">
      <TooltipButton tooltipText="Copy URL">
        <motion.button
          key={isCopied ? "check" : "copy"}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className="w-[38px] aspect-square rounded-full flex items-center justify-center bg-[var(--colors-grayA2)]"
          onClick={handleCopy}
        >
          {isCopied ? (
            <Check size={14} className="dark:text-green-500 text-green-600" />
          ) : (
            <Link size={16} className="transform rotate-45" />
          )}
        </motion.button>
      </TooltipButton>
    </AnimatePresence>
  );
};

export default CraftHeader;
