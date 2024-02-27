import React from "react";
import "./PipeAnimatedDiv.css";
import gsap from "gsap";

const PipeAnimatedDiv = () => {
  return (
    <div className="pipe-animated-div-wrap">
      <div className="pipe-animated-left-wrap">
        <h1 className="pipe-animated-header div-header"></h1>
        <p className="pipe-animated-left-desc div-desc"></p>
        <button className="pipe-animated-button">
          Discover Pipe for Partners
        </button>
      </div>
      <div className="pipe-animated-right-wrap">
        <h1 className="pipe-animated-left-header div-header"></h1>
        <p className="pipe-animated-right-desc div-desc"></p>
        <button className="pipe-animated-button">Discover Pipe for Ent</button>
      </div>
    </div>
  );
};

export default PipeAnimatedDiv;
