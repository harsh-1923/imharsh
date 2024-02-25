import React from "react";
import "./PipeAnimatedDiv.css";

const PipeAnimatedDiv = () => {
  return (
    <div className="demo-page-wrap">
      <div className="scrible-nav-wrap">
        <h3 onClick={() => navigate("")} className="scrible-logo-text">
          ScribleUI
        </h3>
        <button
          onClick={() => navigate("/components")}
          className="transparent-button"
        >
          Components
        </button>
      </div>

      <div className="pipe-div-hue"></div>
    </div>
  );
};

export default PipeAnimatedDiv;
