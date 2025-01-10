"use client";
import { ShoppingCartIcon, UserRound } from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const variants = {
  expanded: { width: "auto" },
  collapsed: { width: "46px" },
};

const IOSMailTabs = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const TABS = [
    {
      title: "Transaction",
      icon: <ShoppingCartIcon size={16} />,
      style: { backgroundColor: "red" },
    },
    {
      title: "Transaction",
      icon: <UserRound size={16} />,
      style: { backgroundColor: "red" },
    },
  ];
  return (
    <AnimatePresence>
      <div className="flex items-center gap-2">
        {TABS.map((item, idx) => (
          <motion.button
            onClick={() => setActiveTab(idx)}
            variants={variants}
            initial={idx === activeTab ? "expanded" : "collapsed"}
            animate={idx === activeTab ? "expanded" : "collapsed"}
            key={idx}
            transition={{ duration: 0.3 }}
            className="h-[42px]  rounded-2xl overflow-clip flex items-center justify-start bg-blue-600"
          >
            <span className="h-full w-[46px] flex items-center justify-center">
              {item.icon}
            </span>
            {activeTab === idx && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full pr-5 flex items-center justify-center"
              >
                {item.title}
              </motion.span>
            )}
          </motion.button>
        ))}
      </div>
    </AnimatePresence>
  );
};

export default IOSMailTabs;
// <button
//   key={idx}
//   onClick={() => setActiveTab(idx)}
//   //   className="px-4 h-[42px] rounded-2xl bg-purple-800 flex items-center gap-2 overflow-clip"
//   className={`h-[42px] rounded-2xl bg-purple-800 flex items-center overflow-clip ${
//     activeTab === idx ? "w-32" : "w-9"
//   }`}
// >
//   <span className="flex-shrink-0 text-white h-full flex items-center justify-center w-9 debug">
//     {item.icon}
//   </span>
//   <span
//     className={`
//       text-sm text-white whitespace-nowrap
//       transition-opacity duration-300
//     `}
//   >
//     {item.title}
//   </span>
// </button>
