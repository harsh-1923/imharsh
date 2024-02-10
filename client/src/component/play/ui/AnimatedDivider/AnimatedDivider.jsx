import React, { useState, useEffect } from "react";
import "./AnimatedDivider.css";

const AnimatedDivider = () => {
  const [xPosition, setXPosition] = useState(0);
  const [height, setHeight] = useState(50);

  useEffect(() => {
    const handleMouseEnter = () => {
      setHeight(0);
    };
    const handleMouseMove = (event) => {
      const rect = event.target.getBoundingClientRect();
      const relativeX = (event.clientX - rect.left) / rect.width;
      setXPosition(relativeX);
    };

    const handleMouseLeave = () => {
      setXPosition(0.5); // Set xPosition to 0.5 for a straight line
      setHeight(50);
    };

    const test = document.querySelector(".test");

    // Adding event listeners directly to the SVG element

    test.addEventListener("mouseenter", handleMouseEnter);
    test.addEventListener("mousemove", handleMouseMove);
    test.addEventListener("mouseleave", handleMouseLeave);

    // Cleaning up event listeners
    return () => {
      test.removeEventListener("mousemove", handleMouseMove);
      test.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="test">
      <svg width="1000" height="50" className="svg">
        <path
          d={`M0 50 Q ${xPosition * 1000} ${height} 1000 50`}
          fill="none"
          stroke="black"
          strokeWidth="1"
        />
      </svg>
      <p>{xPosition}</p>
    </div>
  );
};

export default AnimatedDivider;
