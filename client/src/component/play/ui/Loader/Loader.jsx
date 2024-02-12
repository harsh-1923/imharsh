import React, { useState, useEffect } from "react";
import "./Loader.css";
import { motion } from "framer-motion";

const Loader = ({ durationInSeconds }) => {
  durationInSeconds = 5;
  const durationInMilliseconds = durationInSeconds * 1000;
  const [percentage, setPercentage] = useState(0);
  const easeOutCubic = (t, b, c, d) => {
    t /= d;
    t--;
    return c * (t * t * t + 1) + b;
  };

  useEffect(() => {
    let startTime;
    let animationFrameId;

    // can this go in util files?
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const newPercentage = easeOutCubic(
        progress,
        0,
        100,
        durationInMilliseconds
      );
      setPercentage(newPercentage);

      if (progress < durationInMilliseconds) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: durationInSeconds }}
      className="loader"
    >
      <div
        className="loader-inner"
        style={{
          width: `${percentage}%`,
          filter: `blur(20-${10}px)`,
        }}
      ></div>
      <div className="percentage" style={{ width: `${percentage}%` }}>
        <h1>{Math.round(percentage)}%</h1>
      </div>
    </motion.div>
  );
};

export default Loader;
