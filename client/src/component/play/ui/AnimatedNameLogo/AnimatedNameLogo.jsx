import React, { useEffect, useRef, useState } from "react";
import "./AnimatedNameLogo.css";

import gsap from "gsap";

const AnimatedNameLogo = ({ line1, line2 }) => {
  const elementRef = useRef(null);
  const [hoverCount, setHoverCount] = useState(0);

  useEffect(() => {
    const element = elementRef.current;
    const handleMouseEnter = () => {
      const y = hoverCount % 2 === 0 ? -34 : 0;
      gsap.to(element, {
        y,
        duration: 0.5,
      });
      setHoverCount(hoverCount + 1);
    };
    element.addEventListener("mouseenter", handleMouseEnter);
    return () => {
      element.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [hoverCount]);

  return (
    <div>
      <div className="container-name">
        <div ref={elementRef} className="container-cont">
          <h1>{line1}</h1>
          <h1>{line2}</h1>
        </div>
      </div>
    </div>
  );
};

export default AnimatedNameLogo;
