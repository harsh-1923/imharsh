import React, { useRef } from "react";
import { gsap } from "gsap";

const HoverAnimation = () => {
  const hiddenDivRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(hiddenDivRef.current, { duration: 0.5, autoAlpha: 1 });
  };

  const handleMouseMove = (event) => {
    const hoveredDiv = event.target;
    if (hoveredDiv.classList.contains("innerDiv")) {
      gsap.to(hiddenDivRef.current, {
        duration: 0.5,
        top: hoveredDiv.offsetTop,
        left: hoveredDiv.offsetLeft,
      });
    }
  };

  const handleMouseLeave = () => {
    gsap.to(hiddenDivRef.current, { duration: 0.5, autoAlpha: 0 });
  };

  return (
    <div
      id="mainOuterDiv"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ position: "relative", width: "100%" }}
    >
      {[1, 2, 3, 4, 5].map((num) => (
        <div key={num} className="innerDiv" style={{ height: "50px" }}>
          {num}
        </div>
      ))}
      <div
        ref={hiddenDivRef}
        id="hiddenDiv"
        style={{
          position: "absolute",
          backgroundColor: "rgba(255, 0, 0, 0.5)",
          display: "none",
        }}
      ></div>
    </div>
  );
};

export default HoverAnimation;
