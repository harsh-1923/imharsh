import React, { useRef } from "react";
import "./RevealTextAnimation.css";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const RevealTextAnimation = ({ children, fontSize }) => {
  useGSAP(() => {
    gsap.fromTo(
      ".cont",
      {
        y: "150",
      },
      {
        y: 0,
        duration: 1,
        stagger: 0.2,
      }
    );
  }, []);
  return (
    <div className="container">
      <div className="text-container">
        <div className="cont">{children}</div>
      </div>
    </div>
  );
};

export default RevealTextAnimation;
