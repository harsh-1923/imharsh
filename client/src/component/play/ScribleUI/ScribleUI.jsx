import React from "react";
import "./ScribleUI.css";

import RevealTextAnimation from "../ui/RevealTextAnimation/RevealTextAnimation.jsx";

const ScribleUI = () => {
  return (
    <div className="scrible-ui-wrap">
      <div className="scrible-ui-header">
        <RevealTextAnimation>
          {" "}
          <h1>
            <span style={{ color: "#c2f8cb" }} className="italics">
              Experimenting
            </span>
            with
          </h1>
        </RevealTextAnimation>
        <RevealTextAnimation>
          <h1>
            <span style={{ color: "#ffd899" }} className="italics">
              Extraordinary
            </span>
            digital experience
          </h1>
        </RevealTextAnimation>
      </div>
    </div>
  );
};

export default ScribleUI;
