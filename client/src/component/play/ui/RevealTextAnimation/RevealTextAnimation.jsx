import React, { useRef } from "react";
import "./RevealTextAnimation.css";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const RevealTextAnimation = () => {
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
        <h1 className="cont">Jai Siya Ram</h1>
      </div>
      <div className="text-container">
        <p className="cont">Jai Siya Ram</p>
      </div>
    </div>
  );
};

export default RevealTextAnimation;
