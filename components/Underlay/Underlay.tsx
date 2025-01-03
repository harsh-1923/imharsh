"use client";
import React from "react";
import { motion } from "motion/react";
import { useAppContext } from "@/context/AppContext";

const Underlay = () => {
  const { isUnderlayOpen } = useAppContext();

  // const renderView = () => {
  //   return <div className="w-full h-[300px]"></div>;
  // };

  //   if (!isUnderlayOpen) return;
  return (
    <>
      {isUnderlayOpen && (
        <motion.header
          initial={{ height: 0 }}
          animate={{ height: 300 }}
          exit={{ height: 0 }}
          className="w-screen debug"
        >
          <div className="w-full h-full"></div>
        </motion.header>
      )}
    </>
  );
};

export default Underlay;
