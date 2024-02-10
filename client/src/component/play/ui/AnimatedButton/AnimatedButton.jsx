import React from "react";
import "./AnimatedButton.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const AnimatedButton = () => {
  return (
    <div className="animated-btn-wrapper">
      <div className="left">
        <ArrowForwardIcon className="arrow-icon-left" />
      </div>
      <div className="main">Animated Button</div>
      <div className="right">
        <ArrowForwardIcon className="arrow-icon-right" />
      </div>
    </div>
  );
};

export default AnimatedButton;
