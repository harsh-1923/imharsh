import React, { useEffect } from "react";
import "./GrowingBorder.css";
import { gsap } from "gsap";

const GrowingBorder = ({ color }) => {
  if (!color) color = "rgba(187, 187, 187, 0.54)";

  useEffect(() => {
    gsap.fromTo(
      ".grow-wrap",
      { width: "0%" },
      {
        width: "100%",
        duration: 3,
        ease: "power4.out",
      }
    );
  }, []);
  return (
    <div className="grow-border-wrap">
      <div style={{ backgroundColor: color }} className="grow-wrap"></div>
    </div>
  );
};

export default GrowingBorder;
