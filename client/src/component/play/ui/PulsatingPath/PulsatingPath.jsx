import React from "react";
import { motion } from "framer-motion";

const PulsatingPath = ({ path }) => {
  path = "M 10 250 Q 34 250 1000 250";
  let maxLength = 0.8;
  return (
    <svg width="100%" height="500">
      <motion.path
        d={path}
        fill="none"
        // stroke="white"
        stroke="url(#paint0_linear_131_3)"
        strokeWidth="2"
        initial={{ pathLength: 0, pathOffset: 0 }}
        animate={{
          pathLength: maxLength,
          pathOffset: maxLength,
          transition: { duration: 4, repeat: Infinity, ease: "easeOut" },
        }}
      />
      <defs>
        <motion.linearGradient
          id="paint0_linear_131_3"
          x1="100%"
          y1="100%"
          x2="100%"
          y2="100%"

          //   gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#18CCFC" stopOpacity="0"></stop>
          <stop stopColor="#18CCFC"></stop>
          <stop offset="32.5%" stopColor="#6344F5"></stop>
          <stop offset="100%" stopColor="#AE48FF" stopOpacity="0"></stop>
        </motion.linearGradient>
      </defs>
    </svg>
  );
};

export default PulsatingPath;
