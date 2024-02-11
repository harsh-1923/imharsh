import React from "react";
import "./DotBackground.css";

const DotBackground = () => {
  return (
    <div className="dot-background-demo">
      {/* Radial gradient for the container to give a faded look */}
      <div className="gradient-overlay"></div>
      <p className="text">Backgrounds</p>
    </div>
  );
};

export default DotBackground;
